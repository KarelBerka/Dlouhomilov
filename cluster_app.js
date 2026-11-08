/**
 * cluster_app.js
 * Interaktivní logika pro samostatnou clustrovací aplikaci osob (cluster.html)
 * Zahrnuje:
 *  1) Entity Resolution & Správu osobních clusterů (Merge / Split / Export do people.js)
 *  2) Interaktivní revizi kandidátů a mezigeneračních jmenovců (Otec vs. Syn)
 *  3) Typologický a neřízený K-Means clustering životních drah (2D Scatter Plot na Canvasu)
 *  4) Síťový graf příbuzenství, domácností a migrace mezi čp. (Force-Directed Graph)
 */

const STORAGE_KEY_CLUSTER_STATE = 'dlouhomilov_clustering_app_state_v6';
const STORAGE_KEY_PERSON_LINKS = 'dlouhomilov_person_links_v1';

let appState = {
  recordsById: new Map(),
  clusters: [],
  candidatePairs: [],
  migrationFlows: [],
  kinshipEdges: [],
  knowledgeGraph: { nodes: [], edges: [], stats: {} },
  graphNodesById: new Map(),
  graphEdgesByNodeId: new Map(),
  selectedGraphNodeId: null,
  graphSidePanel: 'inspector',
  dismissedPairIds: new Set(),
  confirmedKinshipIds: new Set(),
  selectedClusterId: null,
  currentMainTab: 'identity',
  currentReviewFilter: 'candidate_merge',
  typologyAssignments: new Map(), // clusterId -> { groupKey, label, color }
  typologyCentroids: []
};

// ---------------------------------------------------------------------------
// 1. Inicializace a načtení stavu
// ---------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  initClusterApp(false);
  setupTypologyCanvasEvents();
  setupNetworkCanvasEvents();
});

function normalizeSearch(str) {
  if (!str) return '';
  return str.toString().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim();
}

function initClusterApp(forceReset = false) {
  if (typeof clusterDataset === 'undefined') {
    console.error('Chybí data/cluster_dataset.js!');
    return;
  }

  if (forceReset) {
    try {
      localStorage.removeItem(STORAGE_KEY_CLUSTER_STATE);
    } catch (e) {
      console.warn(e);
    }
  }

  appState.recordsById = new Map();
  (clusterDataset.records || []).forEach(r => {
    appState.recordsById.set(r.id, { ...r });
  });

  // Hluboká kopie výchozích clusterů
  appState.clusters = (clusterDataset.identityClusters || []).map(c => ({
    ...c,
    recordIds: [...(c.recordIds || [])],
    housesVisited: [...(c.housesVisited || [])],
    localitiesVisited: [...(c.localitiesVisited || [])],
    variantNames: [...(c.variantNames || [])],
    features: { ...(c.features || {}) }
  }));

  appState.candidatePairs = (clusterDataset.candidatePairs || []).map(p => ({ ...p }));
  appState.migrationFlows = (clusterDataset.migrationFlows || []).map(m => ({ ...m }));
  appState.kinshipEdges = (clusterDataset.kinshipEdges || []).map(k => ({ ...k }));
  appState.knowledgeGraph = clusterDataset.knowledgeGraph || { nodes: [], edges: [], stats: {} };
  appState.dismissedPairIds = new Set();
  appState.confirmedKinshipIds = new Set();

  rebuildKnowledgeGraphIndex();

  // Načíst případné uživatelské úpravy z localStorage
  if (!forceReset) {
    try {
      const savedRaw = localStorage.getItem(STORAGE_KEY_CLUSTER_STATE);
      if (savedRaw) {
        const saved = JSON.parse(savedRaw);
        if (Array.isArray(saved.clusters) && saved.clusters.length > 0) {
          appState.clusters = saved.clusters;
        }
        if (Array.isArray(saved.dismissedPairIds)) {
          appState.dismissedPairIds = new Set(saved.dismissedPairIds);
        }
        if (Array.isArray(saved.confirmedKinshipIds)) {
          appState.confirmedKinshipIds = new Set(saved.confirmedKinshipIds);
        }
        if (Array.isArray(saved.customKinshipEdges)) {
          saved.customKinshipEdges.forEach(edge => {
            if (!appState.kinshipEdges.some(e => e.source === edge.source && e.target === edge.target)) {
              appState.kinshipEdges.push(edge);
            }
          });
        }
      }
    } catch (e) {
      console.warn('Chyba při čtení stavu clusterů z localStorage:', e);
    }
  }

  recomputeAllClusterMetadata();
  rebuildKnowledgeGraphIndex();
  updateKpiBar();
  applyClusterFilters();
  renderReviewSection();
}

function rebuildKnowledgeGraphIndex() {
  appState.graphNodesById = new Map();
  appState.graphEdgesByNodeId = new Map();

  const kg = appState.knowledgeGraph || { nodes: [], edges: [] };
  (kg.nodes || []).forEach(n => {
    appState.graphNodesById.set(n.id, n);
    appState.graphEdgesByNodeId.set(n.id, []);
  });

  // Synchronizovat také případné ručně přidané příbuzenské hrany
  const existingEdgeKeys = new Set((kg.edges || []).map(e => `${e.source}|${e.target}|${e.edgeType}`));
  (appState.kinshipEdges || []).forEach(k => {
    if (k.isUserConfirmed) {
      const eType = k.type === 'spouse' ? 'SPOUSE_OF' : 'PARENT_OF';
      const key = `${k.source}|${k.target}|${eType}`;
      if (!existingEdgeKeys.has(key)) {
        existingEdgeKeys.add(key);
        kg.edges.push({
          id: `ge_user_${kg.edges.length + 1}`,
          source: k.source,
          target: k.target,
          edgeType: eType,
          directed: eType === 'PARENT_OF',
          weight: 3,
          label: k.label || 'potvrzená vazba'
        });
      }
    }
  });

  (kg.edges || []).forEach(e => {
    if (!appState.graphEdgesByNodeId.has(e.source)) appState.graphEdgesByNodeId.set(e.source, []);
    if (!appState.graphEdgesByNodeId.has(e.target)) appState.graphEdgesByNodeId.set(e.target, []);
    appState.graphEdgesByNodeId.get(e.source).push(e);
    if (e.source !== e.target) {
      appState.graphEdgesByNodeId.get(e.target).push(e);
    }
  });
}

function saveClusterState() {
  try {
    const payload = {
      updatedAt: new Date().toISOString(),
      clusters: appState.clusters,
      dismissedPairIds: [...appState.dismissedPairIds],
      confirmedKinshipIds: [...appState.confirmedKinshipIds],
      customKinshipEdges: appState.kinshipEdges.filter(e => e.isUserConfirmed)
    };
    localStorage.setItem(STORAGE_KEY_CLUSTER_STATE, JSON.stringify(payload));

    // Synchronizovat také mapování cen_* -> personId pro hlavní aplikaci index.html
    const recordToPerson = {};
    appState.clusters.forEach(cl => {
      if (cl.recordIds.length > 1 || cl.isVerifiedProfile) {
        cl.recordIds.forEach(rid => {
          if (rid.startsWith('cen_')) {
            recordToPerson[rid] = cl.id;
          }
        });
      }
    });
    localStorage.setItem(STORAGE_KEY_PERSON_LINKS, JSON.stringify(recordToPerson));
  } catch (e) {
    console.warn('Chyba při ukládání stavu:', e);
  }
}

function resetClusteringState() {
  if (confirm('Opravdu chcete obnovit všechny osobní clustery a návrhy do výchozího stavu?')) {
    initClusterApp(true);
  }
}

// Přepočet odvozených metrik u všech clusterů po sloučení / rozdělení
function recomputeAllClusterMetadata() {
  const newMigrationFlows = [];

  appState.clusters.forEach(cl => {
    const recs = (cl.recordIds || [])
      .map(id => appState.recordsById.get(id))
      .filter(Boolean)
      .sort((a, b) => a.year - b.year);

    cl.recordCount = recs.length;
    cl.censusCount = recs.filter(r => r.recordKind === 'census').length;
    cl.parishCount = recs.filter(r => r.recordKind !== 'census').length;

    const years = [...new Set(recs.map(r => r.year))].sort((a, b) => a - b);
    cl.yearsObserved = years;
    cl.firstYear = years[0] || 1900;
    cl.lastYear = years[years.length - 1] || 1900;
    cl.spanYears = years.length > 1 ? (cl.lastYear - cl.firstYear) : 0;

    const houses = [];
    const locs = [];
    recs.forEach(r => {
      const hLabel = `${r.locality} čp. ${r.houseNumber}`;
      if (r.houseNumber && r.houseNumber !== '-' && !houses.includes(hLabel)) houses.push(hLabel);
      if (r.locality && !locs.includes(r.locality)) locs.push(r.locality);
    });
    cl.housesVisited = houses;
    cl.localitiesVisited = locs;
    cl.distinctHousesCount = houses.length;
    cl.variantNames = [...new Set(recs.map(r => r.fullName))];

    if (!cl.isVerifiedProfile && recs.length > 0) {
      const latest = recs[recs.length - 1];
      const bYears = recs.map(r => r.birthYear).filter(Boolean);
      if (bYears.length > 0 && !cl.birthYear) cl.birthYear = bYears[0];
      cl.primaryLocality = latest.locality || cl.primaryLocality;
      cl.primaryHouseNumber = latest.houseNumber || cl.primaryHouseNumber;
      cl.lifeSpan = cl.birthYear
        ? `*${cl.birthYear} (${years.length > 1 ? `doloženo ${cl.firstYear}–${cl.lastYear}` : `záznam ${cl.firstYear}`})`
        : `Doloženo ${years.join(', ')}`;
    }

    const mobilityIndex = Math.min(100, Math.max(0, (houses.length - 1) * 35 + (cl.isNative ? 0 : 30) + (locs.length - 1) * 25));
    cl.isMigrant = houses.length > 1 || locs.length > 1 || !cl.isNative;
    cl.features = {
      birthYearNum: cl.birthYear || (cl.firstYear - 25),
      socioStatusIndex: cl.features?.socioStatusIndex || 50,
      mobilityIndex,
      longevityInSources: cl.spanYears,
      recordDensity: recs.length
    };

    // Generování migračních toků pro tento cluster
    if (recs.length > 0) {
      const first = recs[0];
      if (first.birthPlace && first.birthPlace !== '-' && !normalizeSearch(first.birthPlace).includes(normalizeSearch(first.locality))) {
        newMigrationFlows.push({
          clusterId: cl.id,
          personName: cl.canonicalName,
          birthYear: cl.birthYear,
          fromLabel: first.birthPlace,
          toLabel: `${first.locality} čp. ${first.houseNumber}`,
          year: first.year,
          flowType: 'immigration',
          role: cl.role
        });
      }
      for (let i = 0; i < recs.length - 1; i++) {
        const cur = recs[i];
        const nxt = recs[i + 1];
        const cL = `${cur.locality} čp. ${cur.houseNumber}`;
        const nL = `${nxt.locality} čp. ${nxt.houseNumber}`;
        if (cur.houseNumber && nxt.houseNumber && cur.houseNumber !== '-' && nxt.houseNumber !== '-' && cL !== nL) {
          newMigrationFlows.push({
            clusterId: cl.id,
            personName: cl.canonicalName,
            birthYear: cl.birthYear,
            fromLabel: cL,
            toLabel: nL,
            fromYear: cur.year,
            year: nxt.year,
            flowType: 'house_move',
            role: nxt.occupation && nxt.occupation !== '-' ? nxt.occupation : nxt.relation
          });
        }
      }
    }
  });

  // Seřadit clustery
  appState.clusters.sort((a, b) => {
    if (a.isVerifiedProfile !== b.isVerifiedProfile) return a.isVerifiedProfile ? -1 : 1;
    if (b.recordCount !== a.recordCount) return b.recordCount - a.recordCount;
    return (a.birthYear || 9999) - (b.birthYear || 9999);
  });

  appState.migrationFlows = newMigrationFlows;
}

function updateKpiBar() {
  const totalRecs = appState.recordsById.size;
  const dlRecs = [...appState.recordsById.values()].filter(r => r.sourceGroup === 'dlouhomilov_census').length;
  const parRecs = [...appState.recordsById.values()].filter(r => r.sourceGroup === 'matriky').length;
  const regRecs = [...appState.recordsById.values()].filter(r => r.sourceGroup === 'regional_csv').length;

  const totalClusters = appState.clusters.length;
  const multiClusters = appState.clusters.filter(c => c.recordCount > 1).length;
  const activePairs = getActiveCandidatePairs();

  const setTxt = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  };

  const gNodesCount = appState.knowledgeGraph?.nodes?.length || 0;
  const gEdgesCount = appState.knowledgeGraph?.edges?.length || 0;

  setTxt('kpi-total-records', totalRecs);
  setTxt('kpi-records-breakdown', `${dlRecs + regRecs} sčítání • ${parRecs} matriky a gruntovnice`);
  setTxt('kpi-total-clusters', totalClusters);
  setTxt('kpi-compression-ratio', `Redukce duplicit o ${Math.round((1 - totalClusters / Math.max(1, totalRecs)) * 100)} %`);
  setTxt('kpi-multi-clusters', multiClusters);
  setTxt('kpi-parish-records', parRecs);
  setTxt('kpi-candidate-pairs', activePairs.length);
  setTxt('kpi-migration-flows', `${gNodesCount} / ${gEdgesCount}`);
  setTxt('kpi-graph-subtitle', `${gNodesCount} uzlů • ${gEdgesCount} závislostí • ${appState.migrationFlows.length} přesunů`);
  setTxt('graph-scale-badge', `${gNodesCount} uzlů • ${gEdgesCount} orientovaných hran`);
  setTxt('nav-badge-review', activePairs.length);
}

// ---------------------------------------------------------------------------
// 2. Přepínání hlavních záložek
// ---------------------------------------------------------------------------
function switchMainTab(tabName) {
  appState.currentMainTab = tabName;
  const tabs = ['identity', 'review', 'typology', 'network'];

  tabs.forEach(t => {
    const view = document.getElementById(`view-${t}`);
    const btn = document.getElementById(`tab-btn-${t}`);
    const mobBtn = document.getElementById(`mob-tab-btn-${t}`);

    if (t === tabName) {
      view?.classList.remove('hidden');
      btn?.classList.add('bg-amber-800', 'text-white', 'shadow-2xs');
      btn?.classList.remove('text-slate-700', 'hover:bg-amber-50');
      mobBtn?.classList.add('bg-amber-800', 'text-white');
      mobBtn?.classList.remove('bg-white', 'text-slate-700');
    } else {
      view?.classList.add('hidden');
      btn?.classList.remove('bg-amber-800', 'text-white', 'shadow-2xs');
      btn?.classList.add('text-slate-700', 'hover:bg-amber-50');
      mobBtn?.classList.remove('bg-amber-800', 'text-white');
      mobBtn?.classList.add('bg-white', 'text-slate-700');
    }
  });

  if (tabName === 'review') renderReviewSection();
  if (tabName === 'typology') runTypologyClustering();
  if (tabName === 'network') buildAndRenderNetworkGraph();
}

// ---------------------------------------------------------------------------
// 3. Modul 1: Identita osob (Seznam clusterů + Detailní inspektor)
// ---------------------------------------------------------------------------
function quickFilterFamily(surname) {
  const sInput = document.getElementById('filter-search');
  const sizeSel = document.getElementById('filter-size');
  const locSel = document.getElementById('filter-locality');
  if (sInput) sInput.value = surname;
  if (sizeSel && surname) sizeSel.value = 'all';
  else if (sizeSel && !surname) sizeSel.value = 'multi';
  if (locSel) locSel.value = 'all';
  applyClusterFilters();
}

function quickFilterHouse(houseNum) {
  const sInput = document.getElementById('filter-search');
  const locSel = document.getElementById('filter-locality');
  const sizeSel = document.getElementById('filter-size');
  if (sInput) sInput.value = `čp. ${houseNum}`;
  if (locSel) locSel.value = 'Dlouhomilov';
  if (sizeSel) sizeSel.value = 'all';
  applyClusterFilters();
}

function applyClusterFilters() {
  const rawQuery = document.getElementById('filter-search')?.value || '';
  const q = normalizeSearch(rawQuery);
  const locVal = document.getElementById('filter-locality')?.value || 'all';
  const sizeVal = document.getElementById('filter-size')?.value || 'multi';
  const archVal = document.getElementById('filter-archetype')?.value || 'all';

  const houseMatch = rawQuery.match(/čp\.?\s*(\d+)/i);
  const targetHouseNum = houseMatch ? houseMatch[1] : null;

  const filtered = appState.clusters.filter(cl => {
    // 1) Velikost / typ
    if (sizeVal === 'multi' && cl.recordCount < 2) return false;
    if (sizeVal === '3plus' && cl.recordCount < 3) return false;
    if (sizeVal === 'verified' && !cl.isVerifiedProfile) return false;
    if (sizeVal === 'migrants' && !cl.isMigrant) return false;
    if (sizeVal === 'with_parish' && cl.parishCount < 1) return false;

    // 2) Lokalita
    if (locVal !== 'all') {
      const hasLoc = cl.primaryLocality === locVal || (cl.localitiesVisited || []).includes(locVal);
      if (!hasLoc) return false;
    }

    // 3) Archetyp
    if (archVal !== 'all' && cl.archetypeKey !== archVal) return false;

    // 4) Textový dotaz
    if (targetHouseNum) {
      const hasHouse = cl.primaryHouseNumber === targetHouseNum ||
        (cl.housesVisited || []).some(h => h.endsWith(`čp. ${targetHouseNum}`));
      if (!hasHouse) return false;
    } else if (q) {
      const haystack = normalizeSearch([
        cl.id,
        cl.canonicalName,
        ...(cl.variantNames || []),
        ...(cl.housesVisited || []),
        cl.role,
        cl.biography,
        cl.birthYear,
        cl.father,
        cl.mother,
        cl.spouse
      ].join(' '));
      if (!haystack.includes(q)) return false;
    }

    return true;
  });

  const countBadge = document.getElementById('filtered-clusters-count');
  if (countBadge) {
    countBadge.textContent = `Zobrazeno: ${filtered.length} osobních clusterů`;
  }

  renderClustersList(filtered);

  if (filtered.length > 0) {
    const stillVisible = filtered.some(c => c.id === appState.selectedClusterId);
    if (!stillVisible) {
      appState.selectedClusterId = filtered[0].id;
    }
    renderClusterInspector(appState.selectedClusterId);
  } else {
    renderClusterInspector(null);
  }
}

function renderClustersList(clusters) {
  const container = document.getElementById('clusters-list-container');
  if (!container) return;

  if (clusters.length === 0) {
    container.innerHTML = `
      <div class="p-8 text-center space-y-2 text-slate-500">
        <p class="font-bold text-slate-700 text-sm">Žádný osobní cluster neodpovídá filtrům.</p>
        <p class="text-xs">Zkuste přepnout filtr velikosti na „Všechny clustery vč. jednotlivých (1+)“ nebo upravit hledaný výraz.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = clusters.slice(0, 250).map(cl => {
    const isSelected = cl.id === appState.selectedClusterId;
    const housesText = (cl.housesVisited || []).join(' ➔ ') || `${cl.primaryLocality} čp. ${cl.primaryHouseNumber}`;

    return `
      <div onclick="selectCluster('${cl.id}')"
        class="p-3.5 cursor-pointer transition-all hover:bg-amber-50/80 ${isSelected ? 'bg-amber-100/80 border-l-4 border-l-amber-800' : ''}">
        <div class="flex items-start justify-between gap-2">
          <div>
            <div class="flex items-center gap-1.5 flex-wrap">
              <span class="text-sm font-bold text-slate-900 font-heading">${cl.canonicalName}</span>
              ${cl.isVerifiedProfile ? `
                <span class="px-1.5 py-0.2 text-[10px] font-bold bg-emerald-100 text-emerald-900 rounded border border-emerald-300" title="Ověřený profil v data/people.js">
                  ✔ Profil
                </span>
              ` : ''}
              ${cl.parishCount > 0 ? `
                <span class="px-1.5 py-0.2 text-[10px] font-bold bg-indigo-100 text-indigo-900 rounded border border-indigo-300" title="Propojeno s matričním zápisem (N/O/Z)">
                  📜 Matrika (${cl.parishCount})
                </span>
              ` : ''}
            </div>
            <div class="text-xs text-slate-600 mt-0.5 flex items-center gap-2 flex-wrap">
              <span class="font-mono font-semibold text-amber-950">${cl.lifeSpan}</span>
              <span>•</span>
              <span class="font-medium text-amber-900">${housesText}</span>
            </div>
            <div class="text-[11px] text-slate-500 mt-1 line-clamp-1">
              ${cl.categoryIcon || '👤'} ${cl.role || cl.categoryLabel}
            </div>
          </div>

          <div class="flex flex-col items-end shrink-0 gap-1">
            <span class="px-2 py-0.5 rounded-full text-xs font-bold ${cl.recordCount >= 3 ? 'bg-amber-800 text-white' : (cl.recordCount === 2 ? 'bg-amber-200 text-amber-950' : 'bg-slate-100 text-slate-700')}">
              ${cl.recordCount} ${cl.recordCount === 1 ? 'záznam' : (cl.recordCount <= 4 ? 'záznamy' : 'záznamů')}
            </span>
            <span class="text-[10px] font-mono text-slate-400">${cl.yearsObserved.join(', ')}</span>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function selectCluster(clusterId) {
  appState.selectedClusterId = clusterId;
  applyClusterFilters();
}

function renderClusterInspector(clusterId) {
  const container = document.getElementById('cluster-inspector-container');
  if (!container) return;

  const cl = appState.clusters.find(c => c.id === clusterId);
  if (!cl) {
    container.innerHTML = `
      <div class="p-10 text-center text-slate-500">
        Vyberte osobní cluster v levém seznamu pro zobrazení jeho časové osy, pramenů a nástrojů pro sloučení či rozdělení.
      </div>
    `;
    return;
  }

  const recs = (cl.recordIds || [])
    .map(id => appState.recordsById.get(id))
    .filter(Boolean)
    .sort((a, b) => a.year - b.year);

  // Najít příbuzné / podobné clustery pro rychlé sloučení
  const relatedCandidates = appState.candidatePairs
    .filter(p => (p.clusterIdA === cl.id || p.clusterIdB === cl.id) && !appState.dismissedPairIds.has(p.id))
    .map(p => {
      const otherId = p.clusterIdA === cl.id ? p.clusterIdB : p.clusterIdA;
      const otherCluster = appState.clusters.find(x => x.id === otherId);
      return otherCluster ? { pair: p, other: otherCluster } : null;
    })
    .filter(Boolean);

  // Všechny ostatní clustery pro ruční výběr sloučení
  const otherClusters = appState.clusters
    .filter(c => c.id !== cl.id)
    .slice(0, 300);

  const deepLinkHouse = cl.primaryLocality === 'Medelské'
    ? `medelske_cp${cl.primaryHouseNumber}`
    : (cl.primaryLocality === 'Dlouhomilov' && cl.primaryHouseNumber && cl.primaryHouseNumber !== '-' ? `cp${cl.primaryHouseNumber}` : null);

  container.innerHTML = `
    <div class="space-y-5">
      <!-- Hlavička osoby -->
      <div class="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-4 border-b border-amber-200">
        <div class="space-y-1.5">
          <div class="flex items-center gap-2 flex-wrap">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-950 border border-amber-300">
              ${cl.categoryIcon || '👤'} ${cl.categoryLabel}
            </span>
            <span class="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-100 text-slate-700">
              ID: ${cl.id}
            </span>
            ${cl.isMigrant ? `
              <span class="px-2 py-0.5 rounded-full text-[11px] font-bold bg-sky-100 text-sky-900 border border-sky-300">
                🧭 Migrační trajektorie (${cl.housesVisited.join(' ➔ ')})
              </span>
            ` : ''}
          </div>

          <h2 class="text-2xl font-bold text-slate-900 font-heading">${cl.canonicalName}</h2>
          <p class="text-xs font-semibold text-amber-900">${cl.lifeSpan} • ${cl.role || '-'}</p>

          ${cl.variantNames && cl.variantNames.length > 1 ? `
            <div class="flex items-center gap-1.5 flex-wrap pt-1">
              <span class="text-[11px] font-bold text-slate-500">Varianty zápisu v pramenech:</span>
              ${cl.variantNames.map(v => `<span class="px-2 py-0.5 bg-amber-50 border border-amber-200 rounded text-[11px] italic text-slate-800">${v}</span>`).join('')}
            </div>
          ` : ''}
        </div>

          <!-- Odkazy do hlavní aplikace a export -->
        <div class="flex flex-wrap sm:flex-col items-end gap-1.5 shrink-0">
          <button onclick="openEgoGraphForNode('${cl.id}')"
            class="px-3 py-1.5 bg-amber-800 hover:bg-amber-900 text-white rounded-xl text-xs font-bold shadow-2xs flex items-center gap-1"
            title="Zobrazit tuto osobu a všechny její příbuzenské, domovní a pracovní vazby v interaktivním grafu závislostí">
            <span>🕸️</span> Ego-graf závislostí (${(cl.dependenciesSummary || []).length}) ↗
          </button>
          ${cl.isVerifiedProfile ? `
            <a href="index.html#person=${cl.id}"
              class="px-3 py-1.5 bg-emerald-800 hover:bg-emerald-900 text-white rounded-xl text-xs font-bold shadow-2xs flex items-center gap-1">
              <span>👤</span> Otevřít v hlavní aplikaci ↗
            </a>
          ` : ''}
          ${deepLinkHouse ? `
            <a href="index.html#house=${deepLinkHouse}"
              class="px-3 py-1.5 bg-amber-100 hover:bg-amber-200 text-amber-950 border border-amber-300 rounded-xl text-xs font-bold flex items-center gap-1">
              <span>🏡</span> Mapa: ${cl.primaryLocality} čp. ${cl.primaryHouseNumber} ↗
            </a>
          ` : ''}
          <button onclick="openCodeExportModal('${cl.id}')"
            class="px-3 py-1.5 bg-slate-800 hover:bg-slate-900 text-white rounded-xl text-xs font-bold flex items-center gap-1"
            title="Vygenerovat hotový objekt pro vložení do data/people.js">
            <span>📜</span> Kód pro people.js
          </button>
        </div>
      </div>

      <!-- Rodinné vazby a biografie (pokud jsou k dispozici) -->
      ${(cl.father || cl.mother || cl.spouse || (cl.children && cl.children.length > 0) || cl.biography) ? `
        <div class="p-3.5 bg-amber-50/70 rounded-xl border border-amber-200 space-y-2 text-xs">
          ${cl.biography ? `<p class="text-slate-700 leading-relaxed">${cl.biography}</p>` : ''}
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-[11px]">
            ${cl.father ? `<div><strong class="text-amber-950">Otec:</strong> ${cl.father}</div>` : ''}
            ${cl.mother ? `<div><strong class="text-amber-950">Matka:</strong> ${cl.mother}</div>` : ''}
            ${cl.spouse ? `<div><strong class="text-amber-950">Manžel/ka:</strong> ${cl.spouse}</div>` : ''}
            ${cl.children && cl.children.length > 0 ? `<div><strong class="text-amber-950">Děti:</strong> ${cl.children.join(', ')}</div>` : ''}
          </div>
        </div>
      ` : ''}

      <!-- Graf vzájemných závislostí osoby (Ego-sousedství v heterogenním grafu) -->
      ${renderClusterDependenciesBlock(cl)}

      <!-- Časová osa propojených záznamů (s možností rozdělení Split) -->
      <div class="space-y-2.5">
        <div class="flex items-center justify-between flex-wrap gap-2">
          <h3 class="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
            <span>⏳</span> Chronologické záznamy v clusteru (${recs.length})
          </h3>
          ${recs.length > 1 ? `
            <button onclick="splitSelectedRecordsFromCluster('${cl.id}')"
              class="px-3 py-1 bg-orange-100 hover:bg-orange-200 text-orange-950 border border-orange-300 rounded-lg text-xs font-bold transition-colors flex items-center gap-1"
              title="Zaškrtněte záznamy níže a klikněte pro jejich oddělení do samostatného clusteru osoby (např. při rozdělení jmenovců otec/syn)">
              <span>✂️</span> Oddělit zaškrtnuté do nové osoby (Split)
            </button>
          ` : ''}
        </div>

        <div class="space-y-2 max-h-[380px] overflow-y-auto pr-1">
          ${recs.map(r => {
            const ageAtEvent = (r.birthYear && r.year >= r.birthYear) ? `${r.year - r.birthYear} let` : null;
            const kindBadge = r.recordKind === 'census'
              ? 'bg-amber-100 text-amber-950 border-amber-300'
              : (r.recordKind === 'birth' ? 'bg-emerald-100 text-emerald-950 border-emerald-300'
                : (r.recordKind === 'marriage' ? 'bg-pink-100 text-pink-950 border-pink-300' : 'bg-indigo-100 text-indigo-950 border-indigo-300'));

            return `
              <div class="p-3 rounded-xl border border-amber-200 bg-white hover:border-amber-400 transition-all flex items-start gap-3">
                ${recs.length > 1 ? `
                  <input type="checkbox" class="split-record-checkbox mt-1 rounded text-amber-800 cursor-pointer" value="${r.id}" title="Zaškrtnout pro oddělení tohoto záznamu (Split)">
                ` : ''}
                <div class="flex-1 min-w-0 space-y-1">
                  <div class="flex items-center justify-between gap-2 flex-wrap">
                    <div class="flex items-center gap-1.5 flex-wrap">
                      <span class="px-2 py-0.5 rounded font-mono text-xs font-bold bg-amber-900 text-white">${r.year}</span>
                      <span class="px-2 py-0.5 rounded text-[11px] font-bold border ${kindBadge}">${r.sourceTypeLabel}</span>
                      <span class="text-xs font-bold text-slate-900">${r.fullName}</span>
                      ${ageAtEvent ? `<span class="text-[11px] text-slate-500">(věk ~${ageAtEvent})</span>` : ''}
                    </div>
                    <div class="flex items-center gap-1.5">
                      <span class="text-xs font-bold text-amber-900 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                        ${r.locality} čp. ${r.houseNumber}
                      </span>
                      ${r.scanFile ? `
                        <button onclick="openScanViewer('${r.scanFile}', '${(r.scanTitle || r.fullName).replace(/'/g, "\\'")}')"
                          class="px-2 py-0.5 bg-amber-800 hover:bg-amber-900 text-white text-[11px] font-bold rounded shadow-2xs">
                          🔍 Sken
                        </button>
                      ` : ''}
                    </div>
                  </div>

                  <div class="text-xs text-slate-700 flex flex-wrap gap-x-4 gap-y-0.5">
                    <span><strong>Narození:</strong> ${r.birthDate} (${r.birthPlace || '-'})</span>
                    <span><strong>Vztah / role:</strong> ${r.relation || '-'}</span>
                    <span><strong>Povolání:</strong> ${r.occupation || '-'}</span>
                  </div>

                  ${r.notes ? `<div class="text-[11px] text-slate-500 italic">${r.notes}</div>` : ''}
                  ${r.reviewNote ? `<div class="text-[11px] text-indigo-900 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-200">📋 ${r.reviewNote}</div>` : ''}
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>

      <!-- Nástroj pro sloučení (Merge) s jiným clusterem -->
      <div class="pt-4 border-t border-amber-200 space-y-3">
        <h3 class="text-xs font-bold uppercase tracking-wider text-amber-950 flex items-center gap-1.5">
          <span>🔗</span> Sloučit tento cluster s jiným clusterem (Merge)
        </h3>

        ${relatedCandidates.length > 0 ? `
          <div class="space-y-1.5">
            <div class="text-[11px] font-semibold text-slate-600">Doporučené shody a jmenovci v databázi:</div>
            ${relatedCandidates.map(({ pair, other }) => `
              <div class="p-2.5 rounded-xl bg-amber-50/80 border border-amber-300 flex items-center justify-between gap-2 text-xs">
                <div>
                  <span class="font-bold text-slate-900">${other.canonicalName}</span>
                  <span class="text-slate-600">(${other.lifeSpan}, ${other.primaryLocality} čp. ${other.primaryHouseNumber}, ${other.recordCount} zázn.)</span>
                  <span class="ml-1 px-1.5 py-0.2 rounded text-[10px] font-bold ${pair.relationType === 'homonym_generation' ? 'bg-purple-100 text-purple-900' : 'bg-amber-200 text-amber-950'}">
                    ${pair.relationType === 'homonym_generation' ? '👨‍👦 Jmenovec (jiná generace)' : `Shoda ${pair.score} %`}
                  </span>
                </div>
                <button onclick="mergeTwoClusters('${cl.id}', '${other.id}')"
                  class="px-2.5 py-1 bg-amber-800 hover:bg-amber-900 text-white font-bold rounded-lg text-[11px] shrink-0">
                  🔗 Sloučit
                </button>
              </div>
            `).join('')}
          </div>
        ` : ''}

        <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
          <select id="manual-merge-target-select" class="flex-1 px-3 py-2 text-xs rounded-xl border border-amber-300 bg-white">
            ${otherClusters.map(o => `
              <option value="${o.id}">${o.canonicalName} (${o.lifeSpan}) – ${o.primaryLocality} čp. ${o.primaryHouseNumber} [${o.recordCount} zázn.]</option>
            `).join('')}
          </select>
          <button onclick="executeManualMergeFromInspector('${cl.id}')"
            class="px-4 py-2 bg-amber-800 hover:bg-amber-900 text-white text-xs font-bold rounded-xl shadow-2xs whitespace-nowrap">
            🔗 Sloučit vybraný cluster
          </button>
        </div>
      </div>
    </div>
  `;
}

// Akce: Rozdělení (Split) zaškrtnutých záznamů do nové osoby
function splitSelectedRecordsFromCluster(clusterId) {
  const cl = appState.clusters.find(c => c.id === clusterId);
  if (!cl) return;

  const checkedBoxes = [...document.querySelectorAll('.split-record-checkbox:checked')];
  const selectedIds = checkedBoxes.map(cb => cb.value);

  if (selectedIds.length === 0) {
    alert('Nejprve zaškrtněte alespoň jeden záznam v časové ose, který chcete oddělit do samostatné osoby.');
    return;
  }
  if (selectedIds.length >= cl.recordIds.length) {
    alert('Nemůžete oddělit úplně všechny záznamy – v původním clusteru musí zůstat alespoň jeden záznam.');
    return;
  }

  // Odebrat vybrané záznamy z původního clusteru
  cl.recordIds = cl.recordIds.filter(id => !selectedIds.includes(id));

  // Vytvořit nový cluster pro oddělené záznamy
  const splitRecs = selectedIds.map(id => appState.recordsById.get(id)).filter(Boolean).sort((a, b) => a.year - b.year);
  const firstRec = splitRecs[splitRecs.length - 1];
  const newClusterId = `cl_split_${Date.now().toString().slice(-5)}`;

  const newCluster = {
    id: newClusterId,
    isVerifiedProfile: false,
    personProfileId: null,
    canonicalName: firstRec.fullName,
    birthYear: firstRec.birthYear || null,
    deathYear: null,
    lifeSpan: firstRec.birthYear ? `*${firstRec.birthYear}` : `Záznam ${firstRec.year}`,
    primaryLocality: firstRec.locality,
    primaryHouseNumber: firstRec.houseNumber,
    primaryHouseId: firstRec.houseId,
    categoryKey: firstRec.categoryKey || 'ostatni',
    categoryLabel: firstRec.categoryLabel || 'Obyvatel obce',
    categoryIcon: firstRec.categoryIcon || '👤',
    role: firstRec.occupation && firstRec.occupation !== '-' ? firstRec.occupation : firstRec.relation,
    father: null,
    mother: null,
    spouse: null,
    children: [],
    biography: `Cluster vytvořený ručním rozdělením (Split) z clusteru ${cl.canonicalName}.`,
    recordIds: selectedIds,
    archetypeKey: cl.archetypeKey,
    archetypeLabel: cl.archetypeLabel,
    archetypeColor: cl.archetypeColor,
    isNative: true,
    isMigrant: false,
    features: { ...cl.features }
  };

  appState.clusters.push(newCluster);
  recomputeAllClusterMetadata();
  saveClusterState();
  updateKpiBar();

  appState.selectedClusterId = newClusterId;
  applyClusterFilters();
}

// Akce: Sloučení (Merge) dvou clusterů
function mergeTwoClusters(sourceClusterId, targetClusterId) {
  if (sourceClusterId === targetClusterId) return;
  const clA = appState.clusters.find(c => c.id === sourceClusterId);
  const clB = appState.clusters.find(c => c.id === targetClusterId);
  if (!clA || !clB) return;

  // Pokud je clB ověřený profil a clA nikoliv, sloučíme do clB
  const primary = (clB.isVerifiedProfile && !clA.isVerifiedProfile) ? clB : clA;
  const secondary = primary === clA ? clB : clA;

  secondary.recordIds.forEach(rid => {
    if (!primary.recordIds.includes(rid)) {
      primary.recordIds.push(rid);
    }
  });

  // Odstranit sekundární cluster
  appState.clusters = appState.clusters.filter(c => c.id !== secondary.id);

  // Aktualizovat odkazy v candidatePairs
  appState.candidatePairs.forEach(p => {
    if (p.clusterIdA === secondary.id) p.clusterIdA = primary.id;
    if (p.clusterIdB === secondary.id) p.clusterIdB = primary.id;
  });

  recomputeAllClusterMetadata();
  saveClusterState();
  updateKpiBar();

  appState.selectedClusterId = primary.id;
  applyClusterFilters();
  renderReviewSection();
}

function executeManualMergeFromInspector(currentClusterId) {
  const sel = document.getElementById('manual-merge-target-select');
  if (!sel || !sel.value) return;
  mergeTwoClusters(currentClusterId, sel.value);
}

// ---------------------------------------------------------------------------
// 4. Modul 2: Interaktivní revize kandidátů & Jmenovci v generacích
// ---------------------------------------------------------------------------
function getActiveCandidatePairs() {
  const existingIds = new Set(appState.clusters.map(c => c.id));
  return appState.candidatePairs.filter(p =>
    p.clusterIdA !== p.clusterIdB &&
    existingIds.has(p.clusterIdA) &&
    existingIds.has(p.clusterIdB) &&
    !appState.dismissedPairIds.has(p.id) &&
    !appState.confirmedKinshipIds.has(p.id)
  );
}

function setReviewFilter(filterType) {
  appState.currentReviewFilter = filterType;
  const btnMerge = document.getElementById('rev-btn-merge');
  const btnHom = document.getElementById('rev-btn-homonym');

  if (filterType === 'candidate_merge') {
    btnMerge?.classList.add('bg-amber-800', 'text-white');
    btnMerge?.classList.remove('bg-white', 'text-slate-700');
    btnHom?.classList.remove('bg-amber-800', 'text-white');
    btnHom?.classList.add('bg-white', 'text-slate-700');
  } else {
    btnHom?.classList.add('bg-amber-800', 'text-white');
    btnHom?.classList.remove('bg-white', 'text-slate-700');
    btnMerge?.classList.remove('bg-amber-800', 'text-white');
    btnMerge?.classList.add('bg-white', 'text-slate-700');
  }
  renderReviewSection();
}

function renderReviewSection() {
  const container = document.getElementById('review-pairs-container');
  if (!container) return;

  const active = getActiveCandidatePairs();
  const mergePairs = active.filter(p => p.relationType === 'candidate_merge');
  const homonymPairs = active.filter(p => p.relationType === 'homonym_generation');

  const cMergeEl = document.getElementById('rev-count-merge');
  const cHomEl = document.getElementById('rev-count-homonym');
  if (cMergeEl) cMergeEl.textContent = mergePairs.length;
  if (cHomEl) cHomEl.textContent = homonymPairs.length;

  const list = appState.currentReviewFilter === 'candidate_merge' ? mergePairs : homonymPairs;

  if (list.length === 0) {
    container.innerHTML = `
      <div class="col-span-full p-10 text-center bg-white rounded-2xl border border-amber-200 text-slate-600">
        🎉 V této kategorii nejsou žádné další nevyřízené dvojice.
      </div>
    `;
    return;
  }

  container.innerHTML = list.slice(0, 80).map(pair => {
    const clA = appState.clusters.find(c => c.id === pair.clusterIdA);
    const clB = appState.clusters.find(c => c.id === pair.clusterIdB);
    if (!clA || !clB) return '';

    const isHomonym = pair.relationType === 'homonym_generation';

    return `
      <div class="bg-white p-4 rounded-2xl border border-amber-200 shadow-2xs space-y-3 flex flex-col justify-between">
        <div class="space-y-3">
          <div class="flex items-center justify-between gap-2 flex-wrap">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-bold ${isHomonym ? 'bg-purple-100 text-purple-900 border border-purple-300' : 'bg-amber-100 text-amber-950 border border-amber-300'}">
              ${isHomonym ? '👨‍👦 Jmenovci z různých generací' : `⭐ Kandidát ke sloučení (${pair.score} %)`}
            </span>
            <div class="flex items-center gap-1.5">
              ${isHomonym ? `
                <button onclick="confirmHomonymKinship('${pair.id}', '${clA.id}', '${clB.id}')"
                  class="px-3 py-1 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg text-xs font-bold shadow-2xs">
                  👨‍👦 Potvrdit vazbu Rodič → Dítě
                </button>
              ` : ''}
              <button onclick="mergeTwoClusters('${clA.id}', '${clB.id}')"
                class="px-3 py-1 bg-amber-800 hover:bg-amber-900 text-white rounded-lg text-xs font-bold shadow-2xs">
                🔗 Sloučit v 1 osobu
              </button>
              <button onclick="dismissCandidatePair('${pair.id}')"
                class="px-2.5 py-1 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-lg text-xs font-semibold">
                ✕ Ignorovat
              </button>
            </div>
          </div>

          <!-- Srovnání obou clusterů -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div class="p-3 rounded-xl bg-amber-50/60 border border-amber-200 space-y-1">
              <div class="flex items-center justify-between">
                <span class="font-bold text-amber-950">${clA.canonicalName}</span>
                <button onclick="switchMainTab('identity'); selectCluster('${clA.id}');" class="text-[10px] text-amber-800 underline">Detail ↗</button>
              </div>
              <div class="text-slate-700 font-mono text-[11px]">${clA.lifeSpan}</div>
              <div class="text-slate-600">${clA.housesVisited.join(' ➔ ') || `${clA.primaryLocality} čp. ${clA.primaryHouseNumber}`}</div>
              <div class="text-[11px] text-slate-500">${clA.role || '-'} (${clA.recordCount} zázn.)</div>
            </div>

            <div class="p-3 rounded-xl bg-amber-50/60 border border-amber-200 space-y-1">
              <div class="flex items-center justify-between">
                <span class="font-bold text-amber-950">${clB.canonicalName}</span>
                <button onclick="switchMainTab('identity'); selectCluster('${clB.id}');" class="text-[10px] text-amber-800 underline">Detail ↗</button>
              </div>
              <div class="text-slate-700 font-mono text-[11px]">${clB.lifeSpan}</div>
              <div class="text-slate-600">${clB.housesVisited.join(' ➔ ') || `${clB.primaryLocality} čp. ${clB.primaryHouseNumber}`}</div>
              <div class="text-[11px] text-slate-500">${clB.role || '-'} (${clB.recordCount} zázn.)</div>
            </div>
          </div>
        </div>

        <div class="text-[11px] text-slate-600 bg-slate-50 px-2.5 py-1.5 rounded-lg border border-slate-200 italic">
          💡 ${(pair.reasons || []).join(' • ')}
        </div>
      </div>
    `;
  }).join('');
}

function dismissCandidatePair(pairId) {
  appState.dismissedPairIds.add(pairId);
  saveClusterState();
  updateKpiBar();
  renderReviewSection();
}

function confirmHomonymKinship(pairId, idA, idB) {
  appState.confirmedKinshipIds.add(pairId);
  const clA = appState.clusters.find(c => c.id === idA);
  const clB = appState.clusters.find(c => c.id === idB);
  if (clA && clB) {
    const older = (clA.birthYear || 9999) <= (clB.birthYear || 9999) ? clA : clB;
    const younger = older === clA ? clB : clA;
    appState.kinshipEdges.push({
      source: older.id,
      target: younger.id,
      type: 'parent_child',
      label: `potvrzená vazba (*${older.birthYear || '?'} → *${younger.birthYear || '?'})`,
      isUserConfirmed: true
    });
  }
  saveClusterState();
  updateKpiBar();
  renderReviewSection();
}

// ---------------------------------------------------------------------------
// 5. Modul 3: Typologický & K-Means Clustering (2D Scatter Plot na Canvasu)
// ---------------------------------------------------------------------------
const kmeansPalette = [
  '#059669', // emerald
  '#d97706', // amber
  '#2563eb', // blue
  '#7c3aed', // violet
  '#e11d48', // rose
  '#0891b2'  // cyan
];

let scatterPlotPoints = [];

function getFilteredTypologyPool() {
  const onlyMulti = document.getElementById('typo-only-multi')?.checked;
  return appState.clusters.filter(c => !onlyMulti || c.recordCount >= 2);
}

function runTypologyClustering() {
  const mode = document.getElementById('typo-mode-select')?.value || 'archetype';
  const pool = getFilteredTypologyPool();

  appState.typologyAssignments = new Map();
  appState.typologyCentroids = [];

  if (mode === 'archetype') {
    const groupsMap = new Map();
    pool.forEach(cl => {
      const gKey = cl.archetypeKey || 'rodinne_zazemi';
      appState.typologyAssignments.set(cl.id, {
        groupKey: gKey,
        label: cl.archetypeLabel || 'Obyvatelé',
        color: cl.archetypeColor || '#0284c7'
      });
      if (!groupsMap.has(gKey)) {
        groupsMap.set(gKey, {
          key: gKey,
          label: cl.archetypeLabel || 'Obyvatelé',
          color: cl.archetypeColor || '#0284c7',
          members: []
        });
      }
      groupsMap.get(gKey).members.push(cl);
    });

    appState.typologyCentroids = [...groupsMap.values()].map(g => computeGroupCentroidSummary(g));
  } else {
    // Spustit skutečný K-Means nad numerickými znaky osob
    const k = parseInt(mode.replace('kmeans_', ''), 10) || 4;
    runKMeansOnClusters(pool, k);
  }

  renderTypologySummaryCards();
  renderTypologyCanvas();
}

function computeGroupCentroidSummary(group) {
  const m = group.members;
  const n = Math.max(1, m.length);
  const avgBirth = Math.round(m.reduce((s, c) => s + (c.features.birthYearNum || 1870), 0) / n);
  const avgSocio = Math.round(m.reduce((s, c) => s + (c.features.socioStatusIndex || 50), 0) / n);
  const avgMobility = Math.round(m.reduce((s, c) => s + (c.features.mobilityIndex || 0), 0) / n);
  const avgLongevity = Math.round(m.reduce((s, c) => s + (c.features.longevityInSources || 0), 0) / n);
  const avgDensity = +(m.reduce((s, c) => s + (c.features.recordDensity || 1), 0) / n).toFixed(1);

  return {
    key: group.key,
    label: group.label,
    color: group.color,
    count: m.length,
    members: m,
    centroid: {
      birthYearNum: avgBirth,
      socioStatusIndex: avgSocio,
      mobilityIndex: avgMobility,
      longevityInSources: avgLongevity,
      recordDensity: avgDensity
    }
  };
}

function runKMeansOnClusters(pool, k) {
  if (pool.length === 0) return;

  // Normalizace 5 dimenzí do [0, 1]
  const extractVec = c => [
    ((c.features.birthYearNum || 1870) - 1780) / 150,
    (c.features.socioStatusIndex || 50) / 100,
    (c.features.mobilityIndex || 0) / 100,
    Math.min(1, (c.features.longevityInSources || 0) / 60),
    Math.min(1, (c.features.recordDensity || 1) / 8)
  ];

  const vectors = pool.map(extractVec);

  // Deterministická inicializace centroidů rovnoměrným kvantilovým výběrem
  const centroids = [];
  for (let i = 0; i < k; i++) {
    const idx = Math.floor((i * pool.length) / k);
    centroids.push([...vectors[idx]]);
  }

  let assignments = new Array(pool.length).fill(0);

  for (let iter = 0; iter < 18; iter++) {
    // Přiřazení k nejbližšímu centroidu
    for (let i = 0; i < pool.length; i++) {
      let bestCluster = 0;
      let bestDist = Infinity;
      for (let c = 0; c < k; c++) {
        let d = 0;
        for (let dim = 0; dim < 5; dim++) {
          const diff = vectors[i][dim] - centroids[c][dim];
          d += diff * diff;
        }
        if (d < bestDist) {
          bestDist = d;
          bestCluster = c;
        }
      }
      assignments[i] = bestCluster;
    }

    // Přepočet centroidů
    for (let c = 0; c < k; c++) {
      const sum = [0, 0, 0, 0, 0];
      let count = 0;
      for (let i = 0; i < pool.length; i++) {
        if (assignments[i] === c) {
          for (let dim = 0; dim < 5; dim++) sum[dim] += vectors[i][dim];
          count++;
        }
      }
      if (count > 0) {
        for (let dim = 0; dim < 5; dim++) centroids[c][dim] = sum[dim] / count;
      }
    }
  }

  const groups = Array.from({ length: k }, (_, idx) => ({
    key: `km_${idx + 1}`,
    color: kmeansPalette[idx % kmeansPalette.length],
    members: []
  }));

  pool.forEach((cl, i) => {
    const gIdx = assignments[i];
    groups[gIdx].members.push(cl);
  });

  // Automatické pojmenování K-Means shluků podle jejich dominantní charakteristiky
  appState.typologyCentroids = groups.map((g, idx) => {
    const summary = computeGroupCentroidSummary({
      ...g,
      label: `Shluk #${idx + 1}`
    });
    const c = summary.centroid;
    let desc = '';
    if (c.mobilityIndex >= 35) desc = 'Mobilní a migrující obyvatelé';
    else if (c.socioStatusIndex >= 75) desc = 'Usedlí hospodáři a držitelé gruntů';
    else if (c.birthYearNum < 1855) desc = 'Starší generace 19. století';
    else if (c.birthYearNum >= 1895) desc = 'Mladší generace přelomu 19./20. stol.';
    else desc = 'Stabilní řemeslnické a rodinné zázemí';

    summary.label = `K-Means Shluk #${idx + 1}: ${desc}`;
    g.members.forEach(cl => {
      appState.typologyAssignments.set(cl.id, {
        groupKey: summary.key,
        label: summary.label,
        color: summary.color
      });
    });
    return summary;
  });
}

function renderTypologySummaryCards() {
  const container = document.getElementById('typology-clusters-summary');
  if (!container) return;

  container.innerHTML = appState.typologyCentroids
    .filter(g => g.count > 0)
    .sort((a, b) => b.count - a.count)
    .map(g => {
      const topMembers = g.members.slice(0, 4);
      return `
        <div class="p-3.5 bg-white rounded-xl border border-amber-200 shadow-2xs space-y-2">
          <div class="flex items-center justify-between gap-2">
            <div class="flex items-center gap-2">
              <span class="w-3.5 h-3.5 rounded-full inline-block shrink-0" style="background-color: ${g.color}"></span>
              <h4 class="text-xs font-bold text-slate-900">${g.label}</h4>
            </div>
            <span class="px-2 py-0.5 bg-amber-100 text-amber-950 font-bold rounded-full text-xs">
              ${g.count} osob
            </span>
          </div>

          <div class="grid grid-cols-3 gap-1.5 text-[11px] bg-amber-50/60 p-2 rounded-lg border border-amber-100 text-center">
            <div>
              <div class="text-slate-500 text-[10px]">Prům. narození</div>
              <div class="font-bold text-slate-800">*${g.centroid.birthYearNum}</div>
            </div>
            <div>
              <div class="text-slate-500 text-[10px]">Socio-status</div>
              <div class="font-bold text-slate-800">${g.centroid.socioStatusIndex} / 100</div>
            </div>
            <div>
              <div class="text-slate-500 text-[10px]">Index mobility</div>
              <div class="font-bold text-slate-800">${g.centroid.mobilityIndex} %</div>
            </div>
          </div>

          <div class="text-[11px] text-slate-600 flex flex-wrap gap-1 items-center">
            <span class="font-semibold text-slate-500">Typičtí zástupci:</span>
            ${topMembers.map(m => `
              <button onclick="switchMainTab('identity'); selectCluster('${m.id}');"
                class="px-1.5 py-0.2 bg-slate-100 hover:bg-amber-100 text-slate-800 rounded border border-slate-200 font-medium">
                ${m.canonicalName}
              </button>
            `).join('')}
          </div>
        </div>
      `;
    }).join('');
}

function renderTypologyCanvas() {
  const canvas = document.getElementById('typology-scatter-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const W = canvas.width;
  const H = canvas.height;

  const axisXKey = document.getElementById('typo-axis-x')?.value || 'birthYearNum';
  const axisYKey = document.getElementById('typo-axis-y')?.value || 'socioStatusIndex';
  const pool = getFilteredTypologyPool();

  ctx.clearRect(0, 0, W, H);
  ctx.fillStyle = '#fffdf9';
  ctx.fillRect(0, 0, W, H);

  if (pool.length === 0) return;

  const padL = 62;
  const padR = 32;
  const padT = 30;
  const padB = 48;
  const plotW = W - padL - padR;
  const plotH = H - padT - padB;

  const xVals = pool.map(c => c.features[axisXKey] || 0);
  const yVals = pool.map(c => c.features[axisYKey] || 0);

  let minX = Math.min(...xVals);
  let maxX = Math.max(...xVals);
  if (minX === maxX) { minX -= 10; maxX += 10; }

  let minY = Math.min(...yVals);
  let maxY = Math.max(...yVals);
  if (minY === maxY) { minY -= 10; maxY += 10; }

  const toScreenX = val => padL + ((val - minX) / (maxX - minX)) * plotW;
  const toScreenY = val => padT + plotH - ((val - minY) / (maxY - minY)) * plotH;

  // Mřížka a osy
  ctx.strokeStyle = '#fde68a';
  ctx.lineWidth = 1;
  ctx.fillStyle = '#64748b';
  ctx.font = '11px Inter, sans-serif';

  for (let i = 0; i <= 5; i++) {
    const gx = padL + (i / 5) * plotW;
    const vx = Math.round(minX + (i / 5) * (maxX - minX));
    ctx.beginPath();
    ctx.moveTo(gx, padT);
    ctx.lineTo(gx, padT + plotH);
    ctx.stroke();
    ctx.fillText(String(vx), gx - 12, padT + plotH + 18);

    const gy = padT + plotH - (i / 5) * plotH;
    const vy = Math.round(minY + (i / 5) * (maxY - minY));
    ctx.beginPath();
    ctx.moveTo(padL, gy);
    ctx.lineTo(padL + plotW, gy);
    ctx.stroke();
    ctx.fillText(String(vy), padL - 36, gy + 4);
  }

  // Deterministický jemný jitter pro neprekrývání bodů se stejnou hodnotou
  scatterPlotPoints = pool.map((cl, idx) => {
    const assign = appState.typologyAssignments.get(cl.id) || { color: '#0284c7', label: '' };
    const jitterX = ((idx * 37) % 11 - 5) * 1.4;
    const jitterY = ((idx * 53) % 11 - 5) * 1.4;
    const sx = Math.max(padL, Math.min(padL + plotW, toScreenX(cl.features[axisXKey] || 0) + jitterX));
    const sy = Math.max(padT, Math.min(padT + plotH, toScreenY(cl.features[axisYKey] || 0) + jitterY));
    const r = Math.min(11, 4.5 + Math.sqrt(cl.recordCount) * 1.8);

    return { cl, sx, sy, r, color: assign.color, groupLabel: assign.label };
  });

  // Vykreslit body osob
  scatterPlotPoints.forEach(pt => {
    ctx.beginPath();
    ctx.arc(pt.sx, pt.sy, pt.r, 0, Math.PI * 2);
    ctx.fillStyle = pt.color + 'cc';
    ctx.fill();
    ctx.lineWidth = pt.cl.isVerifiedProfile ? 2 : 1;
    ctx.strokeStyle = pt.cl.isVerifiedProfile ? '#0f172a' : '#ffffff';
    ctx.stroke();
  });

  // Vykreslit centroidy shluků (⊕)
  appState.typologyCentroids.forEach(g => {
    if (g.count === 0) return;
    const cx = toScreenX(g.centroid[axisXKey] || 0);
    const cy = toScreenY(g.centroid[axisYKey] || 0);

    ctx.beginPath();
    ctx.arc(cx, cy, 11, 0, Math.PI * 2);
    ctx.fillStyle = g.color;
    ctx.fill();
    ctx.lineWidth = 2.5;
    ctx.strokeStyle = '#0f172a';
    ctx.stroke();

    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(cx - 5, cy);
    ctx.lineTo(cx + 5, cy);
    ctx.moveTo(cx, cy - 5);
    ctx.lineTo(cx, cy + 5);
    ctx.stroke();
  });
}

function setupTypologyCanvasEvents() {
  const canvas = document.getElementById('typology-scatter-canvas');
  const tooltip = document.getElementById('typology-canvas-tooltip');
  if (!canvas || !tooltip) return;

  canvas.addEventListener('mousemove', e => {
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    const mx = (e.clientX - rect.left) * scaleX;
    const my = (e.clientY - rect.top) * scaleY;

    const hit = scatterPlotPoints.find(pt => Math.hypot(pt.sx - mx, pt.sy - my) <= pt.r + 3);
    if (hit) {
      tooltip.classList.remove('hidden');
      tooltip.style.left = `${Math.min(rect.width - 220, e.clientX - rect.left + 14)}px`;
      tooltip.style.top = `${Math.max(10, e.clientY - rect.top - 20)}px`;
      tooltip.innerHTML = `
        <div class="font-bold text-amber-300">${hit.cl.canonicalName}</div>
        <div class="text-[11px] text-slate-300">${hit.cl.lifeSpan} • ${hit.cl.recordCount} zázn.</div>
        <div class="text-[11px] text-white mt-0.5">${hit.cl.housesVisited.join(' ➔ ') || `${hit.cl.primaryLocality} čp. ${hit.cl.primaryHouseNumber}`}</div>
        <div class="text-[10px] text-amber-200/90 mt-1">${hit.groupLabel}</div>
      `;
    } else {
      tooltip.classList.add('hidden');
    }
  });

  canvas.addEventListener('mouseleave', () => {
    tooltip.classList.add('hidden');
  });

  canvas.addEventListener('click', e => {
    const rect = canvas.getBoundingClientRect();
    const mx = (e.clientX - rect.left) * (canvas.width / rect.width);
    const my = (e.clientY - rect.top) * (canvas.height / rect.height);
    const hit = scatterPlotPoints.find(pt => Math.hypot(pt.sx - mx, pt.sy - my) <= pt.r + 3);
    if (hit) {
      switchMainTab('identity');
      selectCluster(hit.cl.id);
    }
  });
}

// ---------------------------------------------------------------------------
// 6. Modul 4: Heterogenní graf vzájemných závislostí (Knowledge Graph)
// ---------------------------------------------------------------------------
let netState = {
  nodes: [],
  edges: [],
  clusters: [], // Vizuální grafické klastry s konvexními obaly
  camX: 0,
  camY: 0,
  zoom: 1,
  draggingNode: null,
  hoveredNode: null,
  isPanning: false,
  panStartX: 0,
  panStartY: 0,
  animFrameId: null,
  physicsEnabled: true,
  alpha: 1.0
};

// Vykreslení ego-bloku závislostí osoby přímo v detailu na Záložce 1
function renderClusterDependenciesBlock(cl) {
  const deps = cl.dependenciesSummary || [];
  if (deps.length === 0) return '';

  const kinshipDeps = deps.filter(d => ['SPOUSE_OF', 'PARENT_OF', 'SIBLING_OF'].includes(d.edgeType));
  const householdDeps = deps.filter(d => d.edgeType === 'HOUSEHOLD_DEPENDENCY');
  const contextDeps = deps.filter(d => ['RESIDES_AT', 'WORKS_AT', 'BELONGS_TO_CLAN', 'MIGRATED_FROM_ORIGIN', 'MIGRATED_BETWEEN'].includes(d.edgeType));

  const renderBadge = d => {
    const isPerson = d.targetType === 'person';
    const clickAction = isPerson
      ? `selectCluster('${d.targetId}')`
      : `openEgoGraphForNode('${d.targetId}')`;

    const badgeStyle = d.edgeType === 'SPOUSE_OF'
      ? 'bg-pink-50 hover:bg-pink-100 text-pink-950 border-pink-300'
      : (d.edgeType === 'PARENT_OF'
        ? 'bg-emerald-50 hover:bg-emerald-100 text-emerald-950 border-emerald-300'
        : (d.edgeType === 'SIBLING_OF'
          ? 'bg-teal-50 hover:bg-teal-100 text-teal-950 border-teal-300'
          : (d.edgeType === 'HOUSEHOLD_DEPENDENCY'
            ? 'bg-amber-50 hover:bg-amber-100 text-amber-950 border-amber-300'
            : (d.targetType === 'house'
              ? 'bg-yellow-50 hover:bg-yellow-100 text-amber-950 border-amber-400'
              : (d.targetType === 'employer'
                ? 'bg-violet-50 hover:bg-violet-100 text-violet-950 border-violet-300'
                : 'bg-slate-50 hover:bg-slate-100 text-slate-800 border-slate-300')))));

    const arrow = d.direction === 'in' ? '⬅' : (d.direction === 'out' ? '➔' : '↔');
    const typeIcon = d.targetType === 'house' ? '🏡'
      : (d.targetType === 'clan' ? '🛡️'
        : (d.targetType === 'employer' ? '🏭'
          : (d.targetType === 'origin' ? '🧭' : '👤')));

    return `
      <button onclick="${clickAction}"
        class="px-2.5 py-1 rounded-lg border text-[11px] font-medium transition-all flex items-center gap-1.5 text-left ${badgeStyle}"
        title="${d.edgeType}: ${d.label || ''}">
        <span>${typeIcon}</span>
        <span class="font-bold">${d.targetLabel}</span>
        <span class="opacity-75 text-[10px]">(${arrow} ${d.label || d.edgeType})</span>
      </button>
    `;
  };

  return `
    <div class="p-3.5 bg-slate-50/90 rounded-xl border border-amber-300/80 space-y-2.5">
      <div class="flex items-center justify-between gap-2 flex-wrap">
        <h3 class="text-xs font-bold uppercase tracking-wider text-amber-950 flex items-center gap-1.5">
          <span>🕸️</span> Graf vzájemných závislostí osoby (${deps.length} orientovaných vazeb v grafu)
        </h3>
        <button onclick="openEgoGraphForNode('${cl.id}')"
          class="px-2.5 py-0.5 rounded-lg bg-amber-800 hover:bg-amber-900 text-white text-[11px] font-bold">
          🎯 Zobrazit Ego-graf v Modulu 4 ↗
        </button>
      </div>

      ${kinshipDeps.length > 0 ? `
        <div class="space-y-1">
          <div class="text-[10px] font-bold uppercase text-emerald-900/80">Rodinné a příbuzenské závislosti (Manželé • Rodič ➔ Dítě • Sourozenci):</div>
          <div class="flex flex-wrap gap-1.5">${kinshipDeps.map(renderBadge).join('')}</div>
        </div>
      ` : ''}

      ${householdDeps.length > 0 ? `
        <div class="space-y-1">
          <div class="text-[10px] font-bold uppercase text-amber-900/80">Závislosti v domácnosti a na gruntu (Hospodář ➔ Čeleď • Výměnkáři • Podruzi):</div>
          <div class="flex flex-wrap gap-1.5">${householdDeps.map(renderBadge).join('')}</div>
        </div>
      ` : ''}

      ${contextDeps.length > 0 ? `
        <div class="space-y-1">
          <div class="text-[10px] font-bold uppercase text-violet-900/80">Domovní příslušnost čp., Rody, Obživa a Původ:</div>
          <div class="flex flex-wrap gap-1.5">${contextDeps.map(renderBadge).join('')}</div>
        </div>
      ` : ''}
    </div>
  `;
}

function openEgoGraphForNode(nodeId) {
  appState.selectedGraphNodeId = nodeId;
  const modeSel = document.getElementById('network-mode-select');
  if (modeSel) modeSel.value = 'ego_selected';
  // Povolit všechny typy uzlů pro úplný ego-graf
  ['person', 'house', 'clan', 'employer', 'origin'].forEach(t => {
    const cb = document.getElementById(`gf-node-${t}`);
    if (cb) cb.checked = true;
  });
  switchMainTab('network');
  switchGraphSidePanel('inspector');
  buildAndRenderNetworkGraph();
}

function switchGraphSidePanel(panelName) {
  appState.graphSidePanel = panelName;
  const inspEl = document.getElementById('graph-node-inspector');
  const migEl = document.getElementById('migration-flows-list');
  const btnInsp = document.getElementById('gpanel-btn-inspector');
  const btnMig = document.getElementById('gpanel-btn-migrations');

  if (panelName === 'inspector') {
    inspEl?.classList.remove('hidden');
    migEl?.classList.add('hidden');
    btnInsp?.classList.add('bg-amber-800', 'text-white');
    btnInsp?.classList.remove('bg-white', 'text-slate-700');
    btnMig?.classList.remove('bg-amber-800', 'text-white');
    btnMig?.classList.add('bg-white', 'text-slate-700');
  } else {
    migEl?.classList.remove('hidden');
    inspEl?.classList.add('hidden');
    btnMig?.classList.add('bg-amber-800', 'text-white');
    btnMig?.classList.remove('bg-white', 'text-slate-700');
    btnInsp?.classList.remove('bg-amber-800', 'text-white');
    btnInsp?.classList.add('bg-white', 'text-slate-700');
  }
}

function onGraphSearchInput() {
  const q = normalizeSearch(document.getElementById('graph-search-input')?.value || '');
  if (!q || q.length < 2) return;

  // Nejprve hledat v aktuálně vykreslených uzlech, pak v celém knowledgeGraph
  let hit = netState.nodes.find(n => normalizeSearch(n.label).includes(q));
  if (hit) {
    focusGraphNode(hit.id, false);
    return;
  }

  const globalHit = (appState.knowledgeGraph?.nodes || []).find(n => normalizeSearch(n.label).includes(q));
  if (globalHit) {
    appState.selectedGraphNodeId = globalHit.id;
    renderGraphNodeInspector(globalHit.id);
  }
}

function focusGraphNode(nodeId, switchToEgo = false) {
  appState.selectedGraphNodeId = nodeId;
  if (switchToEgo) {
    const modeSel = document.getElementById('network-mode-select');
    if (modeSel) modeSel.value = 'ego_selected';
    buildAndRenderNetworkGraph();
    return;
  }

  const target = netState.nodes.find(n => n.id === nodeId);
  if (target) {
    const canvas = document.getElementById('network-graph-canvas');
    const W = canvas ? canvas.width : 920;
    const H = canvas ? canvas.height : 580;
    netState.camX = (W / 2 - target.x) * netState.zoom;
    netState.camY = (H / 2 - target.y) * netState.zoom;
    drawNetworkGraph();
  }
  switchGraphSidePanel('inspector');
  renderGraphNodeInspector(nodeId);
}

function resetNetworkCamera() {
  netState.camX = 0;
  netState.camY = 0;
  netState.zoom = 1;
  drawNetworkGraph();
}

function buildAndRenderNetworkGraph() {
  const mode = document.getElementById('network-mode-select')?.value || 'heterogeneous_full';
  const kg = appState.knowledgeGraph || { nodes: [], edges: [] };

  const allowNodeTypes = new Set();
  if (document.getElementById('gf-node-person')?.checked !== false) allowNodeTypes.add('person');
  if (document.getElementById('gf-node-house')?.checked !== false) allowNodeTypes.add('house');
  if (document.getElementById('gf-node-clan')?.checked !== false) allowNodeTypes.add('clan');
  if (document.getElementById('gf-node-employer')?.checked !== false) allowNodeTypes.add('employer');
  if (document.getElementById('gf-node-origin')?.checked) allowNodeTypes.add('origin');

  const showKinship = document.getElementById('gf-edge-kinship')?.checked !== false;
  const showResidence = document.getElementById('gf-edge-residence')?.checked !== false;
  const showWork = document.getElementById('gf-edge-work')?.checked !== false;
  const showMigration = document.getElementById('gf-edge-migration')?.checked !== false;

  const isEdgeCategoryAllowed = edgeType => {
    if (['SPOUSE_OF', 'PARENT_OF', 'SIBLING_OF'].includes(edgeType)) return showKinship;
    if (['RESIDES_AT', 'HOUSEHOLD_DEPENDENCY'].includes(edgeType)) return showResidence;
    if (['WORKS_AT', 'BELONGS_TO_CLAN', 'CLAN_ALLIANCE'].includes(edgeType)) return showWork;
    if (['MIGRATED_FROM_ORIGIN', 'MIGRATED_BETWEEN'].includes(edgeType)) return showMigration;
    return true;
  };

  let candidateNodeIds = new Set();
  let modeEdgeFilter = () => true;

  if (mode === 'ego_selected') {
    const centerId = appState.selectedGraphNodeId || appState.selectedClusterId || 'p_frantisek_dvorak_1858';
    appState.selectedGraphNodeId = centerId;
    candidateNodeIds.add(centerId);
    const hop1 = appState.graphEdgesByNodeId.get(centerId) || [];
    hop1.forEach(e => {
      candidateNodeIds.add(e.source);
      candidateNodeIds.add(e.target);
      // Přidat i 2-hop příbuzenské a domovní vazby (do rozumného limitu)
      if (candidateNodeIds.size < 85) {
        const neighborId = e.source === centerId ? e.target : e.source;
        const neighborNode = appState.graphNodesById.get(neighborId);
        if (neighborNode && (neighborNode.nodeType === 'person' || neighborNode.nodeType === 'house')) {
          (appState.graphEdgesByNodeId.get(neighborId) || []).slice(0, 12).forEach(e2 => {
            if (['SPOUSE_OF', 'PARENT_OF', 'HOUSEHOLD_DEPENDENCY', 'RESIDES_AT', 'WORKS_AT'].includes(e2.edgeType)) {
              candidateNodeIds.add(e2.source);
              candidateNodeIds.add(e2.target);
            }
          });
        }
      }
    });
  } else if (mode === 'kinship_family') {
    modeEdgeFilter = e => ['SPOUSE_OF', 'PARENT_OF', 'SIBLING_OF', 'BELONGS_TO_CLAN'].includes(e.edgeType);
    // Vybrat osoby s více příbuzenskými vazbami nebo více záznamy
    appState.clusters
      .filter(c => c.recordCount >= 2 || c.isVerifiedProfile || (c.dependenciesSummary || []).some(d => d.edgeType === 'SPOUSE_OF'))
      .slice(0, 95)
      .forEach(c => candidateNodeIds.add(c.id));
    (kg.nodes || []).filter(n => n.nodeType === 'clan').slice(0, 18).forEach(n => candidateNodeIds.add(n.id));
  } else if (mode === 'household_economy') {
    modeEdgeFilter = e => ['HOUSEHOLD_DEPENDENCY', 'RESIDES_AT'].includes(e.edgeType);
    (kg.edges || []).filter(e => e.edgeType === 'HOUSEHOLD_DEPENDENCY').slice(0, 110).forEach(e => {
      candidateNodeIds.add(e.source);
      candidateNodeIds.add(e.target);
    });
    // Přidat domy těchto hospodářů
    [...candidateNodeIds].forEach(id => {
      (appState.graphEdgesByNodeId.get(id) || []).forEach(e => {
        if (e.edgeType === 'RESIDES_AT') {
          candidateNodeIds.add(e.source);
          candidateNodeIds.add(e.target);
        }
      });
    });
  } else if (mode === 'employers_professions') {
    modeEdgeFilter = e => ['WORKS_AT', 'RESIDES_AT'].includes(e.edgeType);
    (kg.nodes || []).filter(n => n.nodeType === 'employer').forEach(n => candidateNodeIds.add(n.id));
    appState.clusters
      .filter(c => (c.dependenciesSummary || []).some(d => d.edgeType === 'WORKS_AT'))
      .slice(0, 95)
      .forEach(c => {
        candidateNodeIds.add(c.id);
        (appState.graphEdgesByNodeId.get(c.id) || []).forEach(e => {
          if (e.edgeType === 'RESIDES_AT' || e.edgeType === 'WORKS_AT') {
            candidateNodeIds.add(e.target);
          }
        });
      });
  } else if (mode === 'clan_alliances') {
    modeEdgeFilter = e => ['CLAN_ALLIANCE', 'BELONGS_TO_CLAN', 'SPOUSE_OF'].includes(e.edgeType);
    (kg.nodes || []).filter(n => n.nodeType === 'clan').slice(0, 40).forEach(n => candidateNodeIds.add(n.id));
    (kg.edges || []).filter(e => e.edgeType === 'SPOUSE_OF').slice(0, 60).forEach(e => {
      candidateNodeIds.add(e.source);
      candidateNodeIds.add(e.target);
    });
  } else if (mode === 'migrations_only') {
    allowNodeTypes.add('origin');
    allowNodeTypes.add('house');
    allowNodeTypes.add('person');
    modeEdgeFilter = e => ['MIGRATED_BETWEEN', 'MIGRATED_FROM_ORIGIN', 'RESIDES_AT'].includes(e.edgeType);
    appState.clusters.filter(c => c.distinctHousesCount >= 2 || !c.isNative).slice(0, 80).forEach(c => {
      candidateNodeIds.add(c.id);
      (appState.graphEdgesByNodeId.get(c.id) || []).forEach(e => {
        if (['RESIDES_AT', 'MIGRATED_FROM_ORIGIN'].includes(e.edgeType)) {
          candidateNodeIds.add(e.source);
          candidateNodeIds.add(e.target);
        }
      });
    });
  } else if (mode === 'dvorak_network') {
    appState.clusters
      .filter(c => /dvorak|kouril|berka/.test(normalizeSearch(c.canonicalName)))
      .forEach(c => {
        candidateNodeIds.add(c.id);
        (appState.graphEdgesByNodeId.get(c.id) || []).forEach(e => {
          candidateNodeIds.add(e.source);
          candidateNodeIds.add(e.target);
        });
      });
  } else if (mode === 'jilek_minar_safar') {
    appState.clusters
      .filter(c => /jilek|jilkova|minar|safar|linhart/.test(normalizeSearch(c.canonicalName)))
      .forEach(c => {
        candidateNodeIds.add(c.id);
        (appState.graphEdgesByNodeId.get(c.id) || []).forEach(e => {
          candidateNodeIds.add(e.source);
          candidateNodeIds.add(e.target);
        });
      });
  } else if (mode === 'medelske_network') {
    appState.clusters
      .filter(c => c.primaryLocality === 'Medelské' || (c.localitiesVisited || []).includes('Medelské'))
      .forEach(c => {
        candidateNodeIds.add(c.id);
        (appState.graphEdgesByNodeId.get(c.id) || []).forEach(e => {
          candidateNodeIds.add(e.source);
          candidateNodeIds.add(e.target);
        });
      });
  } else if (mode === 'benkov_network') {
    appState.clusters
      .filter(c => c.primaryLocality === 'Benkov' || (c.localitiesVisited || []).includes('Benkov'))
      .forEach(c => {
        candidateNodeIds.add(c.id);
        (appState.graphEdgesByNodeId.get(c.id) || []).forEach(e => {
          candidateNodeIds.add(e.source);
          candidateNodeIds.add(e.target);
        });
      });
  } else {
    // heterogeneous_full: Vybrat nejvýznamnější uzly všech kategorií (osoby 2+, domy čp., hlavní rody a zaměstnavatele)
    appState.clusters.filter(c => c.recordCount >= 2 || c.isVerifiedProfile).slice(0, 85).forEach(c => candidateNodeIds.add(c.id));
    (kg.nodes || []).filter(n => n.nodeType === 'house').forEach(n => candidateNodeIds.add(n.id));
    (kg.nodes || []).filter(n => n.nodeType === 'employer').forEach(n => candidateNodeIds.add(n.id));
    (kg.nodes || []).filter(n => n.nodeType === 'clan').slice(0, 18).forEach(n => candidateNodeIds.add(n.id));
    if (allowNodeTypes.has('origin')) {
      (kg.nodes || []).filter(n => n.nodeType === 'origin').slice(0, 15).forEach(n => candidateNodeIds.add(n.id));
    }
  }

  const canvas = document.getElementById('network-graph-canvas');
  const W = canvas ? canvas.width : 920;
  const H = canvas ? canvas.height : 580;

  // Sestavit filtrované uzly
  const filteredRawNodes = [...candidateNodeIds]
    .map(id => appState.graphNodesById.get(id))
    .filter(n => n && (mode === 'ego_selected' || allowNodeTypes.has(n.nodeType)))
    .slice(0, 165);

  const activeNodeSet = new Set(filteredRawNodes.map(n => n.id));

  // Sestavit filtrované hrany mezi aktivními uzly
  const activeEdges = (kg.edges || []).filter(e =>
    activeNodeSet.has(e.source) &&
    activeNodeSet.has(e.target) &&
    modeEdgeFilter(e) &&
    isEdgeCategoryAllowed(e.edgeType)
  );

  // Počáteční soustředné rozložení podle typu uzlu
  const nodes = filteredRawNodes.map((raw, idx) => {
    const angle = (idx / Math.max(1, filteredRawNodes.length)) * Math.PI * 2;
    let ring = 140;
    let radiusSize = 6.5;
    if (raw.nodeType === 'employer') { ring = 55; radiusSize = 11; }
    else if (raw.nodeType === 'clan') { ring = 110; radiusSize = 9; }
    else if (raw.nodeType === 'house') { ring = 205; radiusSize = 9.5; }
    else if (raw.nodeType === 'origin') { ring = 245; radiusSize = 8; }
    else {
      ring = 145 + (idx % 3) * 28;
      radiusSize = raw.isVerified ? 8.5 : 6.5;
    }

    const cl = raw.nodeType === 'person' ? appState.clusters.find(c => c.id === raw.id) : null;
    return {
      ...raw,
      cluster: cl,
      x: W / 2 + Math.cos(angle) * ring,
      y: H / 2 + Math.sin(angle) * ring,
      vx: 0,
      vy: 0,
      r: radiusSize
    };
  });

  netState.nodes = nodes;
  netState.edges = activeEdges;

  // Extrahovat klastry pro grafické obálky
  extractVisualClusters(nodes, activeEdges);

  // Aktualizovat počítadla aktivního podgrafu a klastrů
  const statsBadge = document.getElementById('active-subgraph-stats');
  if (statsBadge) {
    statsBadge.textContent = `Podgraf: ${nodes.length} uzlů • ${activeEdges.length} vazeb`;
  }
  const clusterStatsBadge = document.getElementById('active-clusters-stats');
  if (clusterStatsBadge) {
    clusterStatsBadge.textContent = `${netState.clusters.length} klastrů`;
  }

  // Počáteční usazení sítě
  for (let step = 0; step < 70; step++) {
    stepForceSimulation(W, H, 1.0);
  }

  // Vybrat výchozí uzel do pravého inspektoru
  if (!appState.selectedGraphNodeId || !appState.graphNodesById.has(appState.selectedGraphNodeId)) {
    appState.selectedGraphNodeId = nodes[0]?.id || 'house_cp13';
  }

  drawNetworkGraph();
  renderGraphNodeInspector(appState.selectedGraphNodeId);
  renderMigrationFlowsPanel();
  reheatSimulation(0.6);
}

// ---------------------------------------------------------------------------
// Algoritmy pro vizuální klastrování (Convex Hull, Padded Hulls & Force Simulation)
// ---------------------------------------------------------------------------

// 2D Monotone Chain Convex Hull
function computeConvexHull(points) {
  if (!points || points.length === 0) return [];
  if (points.length <= 2) return points.slice();

  const sorted = points.slice().sort((a, b) => (a.x === b.x ? a.y - b.y : a.x - b.x));
  const cross = (o, a, b) => (a.x - o.x) * (b.y - o.y) - (a.y - o.y) * (b.x - o.x);

  const lower = [];
  for (let i = 0; i < sorted.length; i++) {
    while (lower.length >= 2 && cross(lower[lower.length - 2], lower[lower.length - 1], sorted[i]) <= 0) {
      lower.pop();
    }
    lower.push(sorted[i]);
  }

  const upper = [];
  for (let i = sorted.length - 1; i >= 0; i--) {
    while (upper.length >= 2 && cross(upper[upper.length - 2], upper[upper.length - 1], sorted[i]) <= 0) {
      upper.pop();
    }
    upper.push(sorted[i]);
  }

  lower.pop();
  upper.pop();
  return lower.concat(upper);
}

// Vykreslení měkké polštářové obálky klastru (Cluster Hull Bubble)
function drawPaddedHull(ctx, points, padding, fillColor, strokeColor, label, icon, theme) {
  if (!points || points.length === 0) return;

  let cx = 0, cy = 0;
  points.forEach(p => { cx += p.x; cy += p.y; });
  cx /= points.length;
  cy /= points.length;

  ctx.save();

  if (points.length === 1) {
    const p = points[0];
    const r = (p.r || 10) + padding;
    const radGrad = ctx.createRadialGradient(p.x, p.y, r * 0.1, p.x, p.y, r);
    radGrad.addColorStop(0, fillColor);
    radGrad.addColorStop(1, fillColor.replace(/[\d\.]+\)$/, '0.03)'));
    ctx.fillStyle = radGrad;
    ctx.beginPath();
    ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
    ctx.fill();
    ctx.setLineDash([4, 4]);
    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = 1.4;
    ctx.stroke();
    drawHullBadge(ctx, p.x, p.y - r - 7, label, icon, strokeColor, theme);
    ctx.restore();
    return;
  }

  if (points.length === 2) {
    const p1 = points[0];
    const p2 = points[1];
    const angle = Math.atan2(p2.y - p1.y, p2.x - p1.x);
    const r = padding + 6;
    const norm = angle + Math.PI / 2;
    ctx.beginPath();
    ctx.arc(p1.x, p1.y, r, norm, norm + Math.PI);
    ctx.arc(p2.x, p2.y, r, norm + Math.PI, norm + Math.PI * 2);
    ctx.closePath();
    ctx.fillStyle = fillColor;
    ctx.fill();
    ctx.setLineDash([4, 4]);
    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = 1.5;
    ctx.stroke();
    drawHullBadge(ctx, (p1.x + p2.x) / 2, Math.min(p1.y, p2.y) - r - 6, label, icon, strokeColor, theme);
    ctx.restore();
    return;
  }

  const hull = computeConvexHull(points);
  if (hull.length < 3) {
    ctx.restore();
    return;
  }

  // Rozšíření bodů konvexního obalu směrem od centroidu o padding
  const expanded = hull.map(p => {
    const dx = p.x - cx;
    const dy = p.y - cy;
    const dist = Math.hypot(dx, dy) || 1;
    return {
      x: p.x + (dx / dist) * padding,
      y: p.y + (dy / dist) * padding
    };
  });

  // Hladký zaoblený polygon přes bezierovy křivky středových bodů
  ctx.beginPath();
  const n = expanded.length;
  for (let i = 0; i < n; i++) {
    const pCurr = expanded[i];
    const pNext = expanded[(i + 1) % n];
    const midX = (pCurr.x + pNext.x) / 2;
    const midY = (pCurr.y + pNext.y) / 2;
    if (i === 0) {
      ctx.moveTo(midX, midY);
    } else {
      ctx.quadraticCurveTo(pCurr.x, pCurr.y, midX, midY);
    }
  }
  const p0 = expanded[0];
  const p1 = expanded[1];
  ctx.quadraticCurveTo(p0.x, p0.y, (p0.x + p1.x) / 2, (p0.y + p1.y) / 2);
  ctx.closePath();

  let maxDist = 40;
  expanded.forEach(p => { maxDist = Math.max(maxDist, Math.hypot(p.x - cx, p.y - cy)); });
  const radGrad = ctx.createRadialGradient(cx, cy, maxDist * 0.15, cx, cy, maxDist * 1.15);
  radGrad.addColorStop(0, fillColor);
  radGrad.addColorStop(1, fillColor.replace(/[\d\.]+\)$/, '0.02)'));
  ctx.fillStyle = radGrad;
  ctx.fill();

  ctx.setLineDash([5, 4]);
  ctx.strokeStyle = strokeColor;
  ctx.lineWidth = 1.6;
  ctx.stroke();

  let topY = Infinity;
  let topX = cx;
  expanded.forEach(p => {
    if (p.y < topY) {
      topY = p.y;
      topX = p.x;
    }
  });

  drawHullBadge(ctx, (cx + topX) / 2, topY - 10, label, icon, strokeColor, theme);
  ctx.restore();
}

// Glassmorphic štítek s názvem klastru
function drawHullBadge(ctx, x, y, label, icon, strokeColor, theme) {
  if (!label) return;
  const isDark = theme !== 'parchment';
  const fullText = (icon ? icon + ' ' : '') + label;
  ctx.font = 'bold 11px Inter, sans-serif';
  const textW = ctx.measureText(fullText).width;
  const boxW = textW + 16;
  const boxH = 22;
  const boxX = x - boxW / 2;
  const boxY = y - boxH / 2;

  ctx.save();
  ctx.setLineDash([]);
  ctx.fillStyle = isDark ? 'rgba(15, 23, 42, 0.88)' : 'rgba(255, 255, 255, 0.94)';
  ctx.beginPath();
  if (ctx.roundRect) {
    ctx.roundRect(boxX, boxY, boxW, boxH, 6);
  } else {
    ctx.rect(boxX, boxY, boxW, boxH);
  }
  ctx.fill();

  ctx.strokeStyle = strokeColor;
  ctx.lineWidth = 1.3;
  ctx.stroke();

  ctx.fillStyle = isDark ? '#f8fafc' : '#0f172a';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(fullText, x, y);
  ctx.restore();
}

// Extrakce vizuálních klastrů z uzlů a hran
function extractVisualClusters(nodes, edges) {
  const clusterMode = document.getElementById('gf-cluster-mode')?.value || 'house';
  if (clusterMode === 'none') {
    netState.clusters = [];
    return;
  }

  const clustersMap = new Map();
  const nodeById = new Map(nodes.map(n => [n.id, n]));

  const palettes = [
    { fill: 'rgba(245, 158, 11, 0.15)', stroke: 'rgba(245, 158, 11, 0.75)', text: '#fbbf24' }, // amber
    { fill: 'rgba(16, 185, 129, 0.15)', stroke: 'rgba(16, 185, 129, 0.75)', text: '#34d399' }, // emerald
    { fill: 'rgba(236, 72, 153, 0.15)', stroke: 'rgba(236, 72, 153, 0.75)', text: '#f472b6' }, // pink
    { fill: 'rgba(139, 92, 246, 0.15)', stroke: 'rgba(139, 92, 246, 0.75)', text: '#a78bfa' }, // violet
    { fill: 'rgba(14, 165, 233, 0.15)', stroke: 'rgba(14, 165, 233, 0.75)', text: '#38bdf8' }, // sky
    { fill: 'rgba(249, 115, 22, 0.15)', stroke: 'rgba(249, 115, 22, 0.75)', text: '#fb923c' }, // orange
    { fill: 'rgba(20, 184, 166, 0.15)', stroke: 'rgba(20, 184, 166, 0.75)', text: '#2dd4bf' }, // teal
    { fill: 'rgba(234, 179, 8, 0.15)', stroke: 'rgba(234, 179, 8, 0.75)', text: '#facc15' }   // yellow
  ];

  if (clusterMode === 'by_house' || clusterMode === 'house') {
    nodes.forEach(n => {
      let key = null;
      let label = null;
      if (n.nodeType === 'house') {
        key = n.id;
        label = n.label;
      } else if (n.nodeType === 'person' && n.cluster && n.cluster.primaryHouseNumber) {
        key = `house_${n.cluster.primaryLocality || 'dl'}_cp${n.cluster.primaryHouseNumber}`;
        label = `${n.cluster.primaryLocality || 'Dlouhomilov'} čp. ${n.cluster.primaryHouseNumber}`;
      }
      if (key) {
        if (!clustersMap.has(key)) {
          clustersMap.set(key, {
            id: key,
            label: label || key,
            icon: '🏡',
            memberIds: new Set(),
            palette: palettes[clustersMap.size % palettes.length]
          });
        }
        clustersMap.get(key).memberIds.add(n.id);
      }
    });

    edges.forEach(e => {
      if (e.edgeType === 'RESIDES_AT') {
        const hNode = nodeById.get(e.target);
        if (hNode && hNode.nodeType === 'house') {
          if (!clustersMap.has(hNode.id)) {
            clustersMap.set(hNode.id, {
              id: hNode.id,
              label: hNode.label,
              icon: '🏡',
              memberIds: new Set([hNode.id]),
              palette: palettes[clustersMap.size % palettes.length]
            });
          }
          clustersMap.get(hNode.id).memberIds.add(e.source);
        }
      }
    });

  } else if (clusterMode === 'by_clan' || clusterMode === 'clan') {
    nodes.forEach(n => {
      let key = null;
      let label = null;
      if (n.nodeType === 'clan') {
        key = n.id;
        label = n.label;
      } else if (n.nodeType === 'person') {
        const m = (n.label || '').split(/\s+/);
        const surname = m[m.length - 1]?.replace(/[\(\*\)\d,]/g, '') || m[0];
        if (surname && surname.length >= 3) {
          key = `clan_${normalizeSearch(surname)}`;
          label = `Rod ${surname}`;
        }
      }
      if (key) {
        if (!clustersMap.has(key)) {
          clustersMap.set(key, {
            id: key,
            label: label || key,
            icon: '🛡️',
            memberIds: new Set(),
            palette: palettes[clustersMap.size % palettes.length]
          });
        }
        clustersMap.get(key).memberIds.add(n.id);
      }
    });

  } else if (clusterMode === 'by_settlement' || clusterMode === 'settlement') {
    nodes.forEach(n => {
      let loc = 'Dlouhomilov';
      if (n.cluster?.primaryLocality) loc = n.cluster.primaryLocality;
      else if (n.id.includes('medelske') || /medels/i.test(n.label)) loc = 'Medelské';
      else if (n.id.includes('benkov') || /benkov/i.test(n.label)) loc = 'Benkov';
      else if (n.nodeType === 'origin') loc = 'Původ mimo obec';

      const key = `loc_${normalizeSearch(loc)}`;
      if (!clustersMap.has(key)) {
        clustersMap.set(key, {
          id: key,
          label: loc,
          icon: loc === 'Benkov' ? '⛰️' : (loc === 'Medelské' ? '🌾' : '🏘️'),
          memberIds: new Set(),
          palette: palettes[clustersMap.size % palettes.length]
        });
      }
      clustersMap.get(key).memberIds.add(n.id);
    });

  } else if (clusterMode === 'by_archetype' || clusterMode === 'archetype') {
    nodes.forEach(n => {
      const arch = n.cluster?.categoryLabel || (n.nodeType === 'house' ? 'Usedlosti a grunty' : (n.nodeType === 'employer' ? 'Zaměstnavatelé' : 'Ostatní vazby'));
      const key = `arch_${normalizeSearch(arch)}`;
      if (!clustersMap.has(key)) {
        clustersMap.set(key, {
          id: key,
          label: arch,
          icon: n.cluster?.categoryIcon || '🏷️',
          memberIds: new Set(),
          palette: palettes[clustersMap.size % palettes.length]
        });
      }
      clustersMap.get(key).memberIds.add(n.id);
    });
  }

  const validClusters = [];
  clustersMap.forEach(cl => {
    if (cl.memberIds.size >= 2 || ((clusterMode === 'by_house' || clusterMode === 'house') && cl.memberIds.size >= 1)) {
      validClusters.push(cl);
    }
  });

  netState.clusters = validClusters;
}

function onClusterGroupingModeChange() {
  extractVisualClusters(netState.nodes, netState.edges);
  const clusterStatsBadge = document.getElementById('active-clusters-stats');
  if (clusterStatsBadge) {
    clusterStatsBadge.textContent = `${netState.clusters.length} klastrů`;
  }
  reheatSimulation(0.85);
  drawNetworkGraph();
}

function stepForceSimulation(W, H, alpha = 1.0) {
  const nodes = netState.nodes;
  const edges = netState.edges;
  const nodeById = new Map(nodes.map(n => [n.id, n]));

  // 1. Odpuzování mezi všemi uzly s ochranou proti kolizi
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const a = nodes[i];
      const b = nodes[j];
      const dx = b.x - a.x;
      const dy = b.y - a.y;
      const dist = Math.hypot(dx, dy) || 0.1;
      const minDist = a.r + b.r + 14;

      let repulse = 1450 / (dist * dist);
      if (dist < minDist) {
        repulse += (minDist - dist) * 0.18;
      }
      const fx = (dx / dist) * repulse * alpha;
      const fy = (dy / dist) * repulse * alpha;
      a.vx -= fx;
      a.vy -= fy;
      b.vx += fx;
      b.vy += fy;
    }
  }

  // 2. Přitahování podél orientovaných hran
  edges.forEach(e => {
    const a = nodeById.get(e.source);
    const b = nodeById.get(e.target);
    if (!a || !b) return;
    const dx = b.x - a.x;
    const dy = b.y - a.y;
    const dist = Math.hypot(dx, dy) || 1;
    const targetLen = ['SPOUSE_OF', 'PARENT_OF', 'SIBLING_OF'].includes(e.edgeType) ? 58 : 90;
    const force = (dist - targetLen) * 0.045 * alpha;
    const fx = (dx / dist) * force;
    const fy = (dy / dist) * force;
    a.vx += fx;
    a.vy += fy;
    b.vx -= fx;
    b.vy += fy;
  });

  // 3. Gravitace klastrů (Community Gravity)
  if (netState.clusters && netState.clusters.length > 0) {
    const clusterCentroids = [];
    netState.clusters.forEach(cl => {
      let cx = 0, cy = 0, count = 0;
      cl.memberIds.forEach(id => {
        const n = nodeById.get(id);
        if (n) {
          cx += n.x;
          cy += n.y;
          count++;
        }
      });
      if (count > 0) {
        cx /= count;
        cy /= count;
        clusterCentroids.push({ cluster: cl, cx, cy, count });
        const clusterForce = 0.05 * alpha;
        cl.memberIds.forEach(id => {
          const n = nodeById.get(id);
          if (n && n !== netState.draggingNode) {
            n.vx += (cx - n.x) * clusterForce;
            n.vy += (cy - n.y) * clusterForce;
          }
        });
      }
    });

    // 4. Odpuzování mezi klastry navzájem (oddělení ostrovů rodů a domů)
    for (let i = 0; i < clusterCentroids.length; i++) {
      for (let j = i + 1; j < clusterCentroids.length; j++) {
        const c1 = clusterCentroids[i];
        const c2 = clusterCentroids[j];
        const dx = c2.cx - c1.cx;
        const dy = c2.cy - c1.cy;
        const dist = Math.hypot(dx, dy) || 1;
        const minClusterDist = 160;
        if (dist < minClusterDist) {
          const push = ((minClusterDist - dist) / dist) * 0.035 * alpha;
          c1.cluster.memberIds.forEach(id => {
            const n = nodeById.get(id);
            if (n && n !== netState.draggingNode) {
              n.vx -= dx * push;
              n.vy -= dy * push;
            }
          });
          c2.cluster.memberIds.forEach(id => {
            const n = nodeById.get(id);
            if (n && n !== netState.draggingNode) {
              n.vx += dx * push;
              n.vy += dy * push;
            }
          });
        }
      }
    }
  }

  // 5. Gravitace ke středu a tlumení
  nodes.forEach(n => {
    if (n === netState.draggingNode) return;
    n.vx += (W / 2 - n.x) * 0.007 * alpha;
    n.vy += (H / 2 - n.y) * 0.007 * alpha;
    n.vx *= 0.76;
    n.vy *= 0.76;
    n.x = Math.max(48, Math.min(W - 48, n.x + n.vx));
    n.y = Math.max(44, Math.min(H - 44, n.y + n.vy));
  });
}

function reheatSimulation(alpha = 1.0) {
  netState.alpha = Math.max(netState.alpha, alpha);
  if (!netState.animFrameId && netState.physicsEnabled) {
    netState.animFrameId = requestAnimationFrame(tickSimulation);
  }
}

function tickSimulation() {
  if (!netState.physicsEnabled) {
    netState.animFrameId = null;
    return;
  }
  const canvas = document.getElementById('network-graph-canvas');
  const W = canvas ? canvas.width : 920;
  const H = canvas ? canvas.height : 580;

  stepForceSimulation(W, H, netState.alpha);
  drawNetworkGraph();

  netState.alpha *= 0.982;
  if (netState.alpha > 0.012 || netState.draggingNode) {
    netState.animFrameId = requestAnimationFrame(tickSimulation);
  } else {
    netState.animFrameId = null;
    netState.alpha = 0;
  }
}

function toggleNetworkPhysics() {
  netState.physicsEnabled = !netState.physicsEnabled;
  const btn = document.getElementById('btn-toggle-physics');
  if (btn) {
    if (netState.physicsEnabled) {
      btn.innerHTML = '<span>⏸</span> Pozastavit fyziku';
      btn.className = 'px-3 py-1 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold shadow-2xs flex items-center gap-1';
      reheatSimulation(0.8);
    } else {
      btn.innerHTML = '<span>▶</span> Spustit fyziku';
      btn.className = 'px-3 py-1 rounded-lg bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold shadow-2xs flex items-center gap-1';
      if (netState.animFrameId) {
        cancelAnimationFrame(netState.animFrameId);
        netState.animFrameId = null;
      }
    }
  }
}

function zoomNetwork(factor) {
  netState.zoom = Math.max(0.35, Math.min(3.5, netState.zoom * factor));
  drawNetworkGraph();
}

function drawNetworkGraph() {
  const canvas = document.getElementById('network-graph-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const W = canvas.width;
  const H = canvas.height;

  const theme = document.getElementById('gf-theme-mode')?.value || 'slate_dark';
  const labelMode = document.getElementById('gf-label-mode')?.value || 'smart';
  const isDark = theme !== 'parchment';

  // Pozadí plátna podle tématu
  if (isDark) {
    const bgGrad = ctx.createLinearGradient(0, 0, W, H);
    bgGrad.addColorStop(0, '#090d16');
    bgGrad.addColorStop(1, '#0f172a');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, W, H);

    ctx.save();
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.035)';
    ctx.lineWidth = 1;
    for (let x = 0; x < W; x += 40) {
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
    }
    for (let y = 0; y < H; y += 40) {
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
    }
    ctx.restore();
  } else {
    ctx.fillStyle = '#fbf8f0';
    ctx.fillRect(0, 0, W, H);

    ctx.save();
    ctx.strokeStyle = 'rgba(180, 130, 70, 0.07)';
    ctx.lineWidth = 1;
    for (let x = 0; x < W; x += 40) {
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
    }
    for (let y = 0; y < H; y += 40) {
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
    }
    ctx.restore();
  }

  ctx.save();
  ctx.translate(W / 2 + netState.camX, H / 2 + netState.camY);
  ctx.scale(netState.zoom, netState.zoom);
  ctx.translate(-W / 2, -H / 2);

  const nodeById = new Map(netState.nodes.map(n => [n.id, n]));
  const selectedId = appState.selectedGraphNodeId;
  const hoveredId = netState.hoveredNode?.id;
  const neighborIds = new Set();

  if (selectedId) {
    neighborIds.add(selectedId);
    netState.edges.forEach(e => {
      if (e.source === selectedId) neighborIds.add(e.target);
      if (e.target === selectedId) neighborIds.add(e.source);
    });
  }

  // 1) VYKRESLENÍ GRAFICKÝCH BUBLIN KLASTRŮ (HULLS) NA NEJSPODNĚJŠÍ VRSTVĚ
  if (netState.clusters && netState.clusters.length > 0) {
    netState.clusters.forEach(cl => {
      const memberPoints = [];
      cl.memberIds.forEach(id => {
        const n = nodeById.get(id);
        if (n) memberPoints.push(n);
      });
      if (memberPoints.length > 0) {
        drawPaddedHull(ctx, memberPoints, 28, cl.palette.fill, cl.palette.stroke, cl.label, cl.icon, theme);
      }
    });
  }

  // 2) VYKRESLENÍ ZAOBLENÝCH HRAN A ORIENTOVANÝCH ŠIPEK (BEZIER CURVES)
  netState.edges.forEach(e => {
    const a = nodeById.get(e.source);
    const b = nodeById.get(e.target);
    if (!a || !b) return;

    const isIncident = selectedId && (e.source === selectedId || e.target === selectedId);
    const isHoverIncident = hoveredId && (e.source === hoveredId || e.target === hoveredId);
    const alpha = (isIncident || isHoverIncident) ? 0.95 : (selectedId ? 0.22 : 0.62);

    const midX = (a.x + b.x) / 2;
    const midY = (a.y + b.y) / 2;
    const dx = b.x - a.x;
    const dy = b.y - a.y;
    const dist = Math.hypot(dx, dy) || 1;
    const curveOffset = ((e.source.charCodeAt(0) + e.target.charCodeAt(0)) % 7 - 3) * 3.5;
    const cpX = midX - (dy / dist) * curveOffset;
    const cpY = midY + (dx / dist) * curveOffset;

    ctx.beginPath();
    ctx.moveTo(a.x, a.y);
    ctx.quadraticCurveTo(cpX, cpY, b.x, b.y);

    if (['SPOUSE_OF', 'PARENT_OF', 'SIBLING_OF'].includes(e.edgeType)) {
      ctx.strokeStyle = `rgba(52, 211, 153, ${alpha})`;
      ctx.lineWidth = isIncident ? 2.8 : 1.6;
    } else if (e.edgeType === 'HOUSEHOLD_DEPENDENCY') {
      ctx.strokeStyle = `rgba(251, 191, 36, ${alpha})`;
      ctx.lineWidth = isIncident ? 2.6 : 1.5;
    } else if (['WORKS_AT', 'BELONGS_TO_CLAN', 'CLAN_ALLIANCE'].includes(e.edgeType)) {
      ctx.strokeStyle = `rgba(192, 132, 252, ${alpha})`;
      ctx.lineWidth = isIncident ? 2.6 : 1.4;
    } else if (['MIGRATED_BETWEEN', 'MIGRATED_FROM_ORIGIN'].includes(e.edgeType)) {
      ctx.strokeStyle = `rgba(251, 146, 60, ${alpha})`;
      ctx.lineWidth = isIncident ? 2.8 : 1.7;
    } else {
      ctx.strokeStyle = isDark ? `rgba(148, 163, 184, ${alpha * 0.7})` : `rgba(100, 116, 139, ${alpha * 0.7})`;
      ctx.lineWidth = isIncident ? 2.0 : 1.1;
    }
    ctx.stroke();

    if (e.directed && (isIncident || isHoverIncident || ['PARENT_OF', 'MIGRATED_BETWEEN', 'HOUSEHOLD_DEPENDENCY'].includes(e.edgeType))) {
      const t = 0.88;
      const bx_t = (1 - t) * (1 - t) * a.x + 2 * (1 - t) * t * cpX + t * t * b.x;
      const by_t = (1 - t) * (1 - t) * a.y + 2 * (1 - t) * t * cpY + t * t * b.y;
      const tanX = 2 * (1 - t) * (cpX - a.x) + 2 * t * (b.x - cpX);
      const tanY = 2 * (1 - t) * (cpY - a.y) + 2 * t * (b.y - cpY);
      const angle = Math.atan2(tanY, tanX);

      const arrowLen = isIncident ? 7.5 : 5.2;
      ctx.beginPath();
      ctx.moveTo(bx_t, by_t);
      ctx.lineTo(bx_t - arrowLen * Math.cos(angle - Math.PI / 6), by_t - arrowLen * Math.sin(angle - Math.PI / 6));
      ctx.lineTo(bx_t - arrowLen * Math.cos(angle + Math.PI / 6), by_t - arrowLen * Math.sin(angle + Math.PI / 6));
      ctx.closePath();
      ctx.fillStyle = ctx.strokeStyle;
      ctx.fill();
    }
  });

  // 3) VYKRESLENÍ UZLŮ S 3D GLYFY A SVĚTELNÝMI HALÓ
  netState.nodes.forEach(n => {
    const isSel = n.id === selectedId;
    const isHover = n.id === hoveredId;
    const isNeighbor = neighborIds.has(n.id);
    const dim = selectedId && !isNeighbor && !isHover;

    ctx.save();
    if (dim) ctx.globalAlpha = 0.28;

    if (isSel || isHover) {
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r + 8, 0, Math.PI * 2);
      ctx.fillStyle = isSel ? 'rgba(251, 191, 36, 0.35)' : 'rgba(56, 189, 248, 0.32)';
      ctx.fill();
      ctx.lineWidth = 2.2;
      ctx.strokeStyle = isSel ? '#fbbf24' : '#38bdf8';
      ctx.stroke();
    }

    if (n.nodeType === 'house') {
      const s = n.r * 1.8;
      const hGrad = ctx.createLinearGradient(n.x - s / 2, n.y - s / 2, n.x + s / 2, n.y + s / 2);
      hGrad.addColorStop(0, '#fde68a');
      hGrad.addColorStop(1, '#d97706');
      ctx.fillStyle = hGrad;
      ctx.beginPath();
      if (ctx.roundRect) ctx.roundRect(n.x - s / 2, n.y - s / 2, s, s, 3);
      else ctx.rect(n.x - s / 2, n.y - s / 2, s, s);
      ctx.fill();
      ctx.strokeStyle = isSel ? '#ffffff' : (isDark ? '#0f172a' : '#78350f');
      ctx.lineWidth = isSel ? 2.5 : 1.5;
      ctx.stroke();

      ctx.fillStyle = '#78350f';
      ctx.font = 'bold 9px Inter, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('⌂', n.x, n.y);

    } else if (n.nodeType === 'clan') {
      const r = n.r * 1.35;
      const cGrad = ctx.createLinearGradient(n.x, n.y - r, n.x, n.y + r);
      cGrad.addColorStop(0, '#f472b6');
      cGrad.addColorStop(1, '#db2777');
      ctx.beginPath();
      ctx.moveTo(n.x, n.y - r);
      ctx.lineTo(n.x + r, n.y);
      ctx.lineTo(n.x, n.y + r);
      ctx.lineTo(n.x - r, n.y);
      ctx.closePath();
      ctx.fillStyle = cGrad;
      ctx.fill();
      ctx.lineWidth = 1.6;
      ctx.strokeStyle = '#ffffff';
      ctx.stroke();

    } else if (n.nodeType === 'employer') {
      const r = n.r * 1.35;
      const eGrad = ctx.createLinearGradient(n.x, n.y - r, n.x, n.y + r);
      eGrad.addColorStop(0, '#c084fc');
      eGrad.addColorStop(1, '#7c3aed');
      ctx.beginPath();
      ctx.moveTo(n.x, n.y - r);
      ctx.lineTo(n.x + r, n.y + r * 0.85);
      ctx.lineTo(n.x - r, n.y + r * 0.85);
      ctx.closePath();
      ctx.fillStyle = eGrad;
      ctx.fill();
      ctx.lineWidth = 1.8;
      ctx.strokeStyle = '#ffffff';
      ctx.stroke();

    } else if (n.nodeType === 'origin') {
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      ctx.fillStyle = isDark ? '#0f172a' : '#fff7ed';
      ctx.fill();
      ctx.lineWidth = 2.4;
      ctx.strokeStyle = '#fb923c';
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r * 0.45, 0, Math.PI * 2);
      ctx.fillStyle = '#ea580c';
      ctx.fill();

    } else {
      const pGrad = ctx.createRadialGradient(n.x - n.r * 0.35, n.y - n.r * 0.35, n.r * 0.15, n.x, n.y, n.r);
      if (n.isVerified) {
        pGrad.addColorStop(0, '#6ee7b7');
        pGrad.addColorStop(1, '#059669');
      } else {
        pGrad.addColorStop(0, '#7dd3fc');
        pGrad.addColorStop(1, '#0284c7');
      }
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      ctx.fillStyle = pGrad;
      ctx.fill();
      ctx.lineWidth = isSel ? 2.5 : 1.4;
      ctx.strokeStyle = isSel ? '#ffffff' : (isDark ? '#0f172a' : '#0369a1');
      ctx.stroke();
    }

    // 4) CHYTRÉ ANTI-KOLIZNÍ POPISKY V POLŠTÁŘOVÝCH ODZNAČCÍCH
    let shouldDrawLabel = true;
    if (labelMode === 'selected') {
      shouldDrawLabel = isSel || isHover || isNeighbor;
    } else if (labelMode === 'smart') {
      shouldDrawLabel = isSel || isHover || isNeighbor || n.nodeType !== 'person' || netState.zoom >= 1.25 || n.r >= 8;
    }

    if (shouldDrawLabel) {
      const lblText = n.label;
      ctx.font = (isSel || isHover || n.nodeType !== 'person') ? 'bold 10.5px Inter, sans-serif' : '10px Inter, sans-serif';
      const tw = ctx.measureText(lblText).width;
      const lx = n.x + n.r + 5;
      const ly = n.y - 7;
      const lw = tw + 8;
      const lh = 15;

      ctx.fillStyle = isDark ? 'rgba(15, 23, 42, 0.88)' : 'rgba(255, 255, 255, 0.92)';
      ctx.beginPath();
      if (ctx.roundRect) ctx.roundRect(lx, ly, lw, lh, 4);
      else ctx.rect(lx, ly, lw, lh);
      ctx.fill();

      ctx.strokeStyle = isSel ? '#fbbf24' : (isDark ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.15)');
      ctx.lineWidth = 1;
      ctx.stroke();

      ctx.fillStyle = isSel ? '#fde68a' : (isDark ? '#f8fafc' : '#0f172a');
      ctx.textAlign = 'left';
      ctx.textBaseline = 'middle';
      ctx.fillText(lblText, lx + 4, ly + lh / 2);
    }

    ctx.restore();
  });

  ctx.restore();
}

function renderGraphNodeInspector(nodeId) {
  const container = document.getElementById('graph-node-inspector');
  const degBadge = document.getElementById('graph-node-degree-badge');
  if (!container) return;

  const node = appState.graphNodesById.get(nodeId);
  if (!node) {
    container.innerHTML = `<div class="text-slate-500 p-4 text-center">Klikněte na libovolný uzel v grafu pro zobrazení všech jeho příchozích a odchozích závislostí.</div>`;
    return;
  }

  const incidentEdges = appState.graphEdgesByNodeId.get(nodeId) || [];
  if (degBadge) degBadge.textContent = incidentEdges.length;

  const typeBadgeMap = {
    person: { icon: '👤', label: 'Osoba (Cluster)', cls: 'bg-sky-100 text-sky-950 border-sky-300' },
    house: { icon: '🏡', label: 'Stavení / Grunt (čp.)', cls: 'bg-amber-100 text-amber-950 border-amber-300' },
    clan: { icon: '🛡️', label: 'Rodový klan (Příjmení)', cls: 'bg-pink-100 text-pink-950 border-pink-300' },
    employer: { icon: '🏭', label: 'Obživa / Zaměstnavatel', cls: 'bg-violet-100 text-violet-950 border-violet-300' },
    origin: { icon: '🧭', label: 'Obec původu', cls: 'bg-orange-100 text-orange-950 border-orange-300' }
  };
  const tb = typeBadgeMap[node.nodeType] || typeBadgeMap.person;

  // Seskupit hrany podle typu závislosti
  const edgeTypeLabels = {
    SPOUSE_OF: '💍 Manželství (SPOUSE_OF)',
    PARENT_OF: '👨‍👧 Rodič ➔ Dítě (PARENT_OF)',
    SIBLING_OF: '👫 Sourozenci (SIBLING_OF)',
    HOUSEHOLD_DEPENDENCY: '🏡 Hospodář ➔ Čeleď / Výměnek (HOUSEHOLD_DEPENDENCY)',
    RESIDES_AT: '🏠 Bydliště v domě čp. (RESIDES_AT)',
    WORKS_AT: '⚒️ Pracovní obživa / Podnik (WORKS_AT)',
    BELONGS_TO_CLAN: '🛡️ Příslušnost k rodu (BELONGS_TO_CLAN)',
    CLAN_ALLIANCE: '🤝 Sňatková aliance rodů (CLAN_ALLIANCE)',
    MIGRATED_FROM_ORIGIN: '🧭 Příchod z obce původu (MIGRATED_FROM_ORIGIN)',
    MIGRATED_BETWEEN: '🚚 Migrační přesun mezi čp. (MIGRATED_BETWEEN)'
  };

  const grouped = new Map();
  incidentEdges.forEach(e => {
    const otherId = e.source === nodeId ? e.target : e.source;
    const otherNode = appState.graphNodesById.get(otherId);
    if (!otherNode) return;
    const dir = !e.directed ? '↔' : (e.source === nodeId ? '➔' : '⬅');
    if (!grouped.has(e.edgeType)) grouped.set(e.edgeType, []);
    grouped.get(e.edgeType).push({ edge: e, otherNode, dir });
  });

  container.innerHTML = `
    <div class="space-y-3">
      <div class="p-3 rounded-xl bg-amber-50/90 border border-amber-200 space-y-1.5">
        <div class="flex items-center justify-between gap-2">
          <span class="px-2 py-0.5 rounded-full text-[10px] font-bold border ${tb.cls}">
            ${tb.icon} ${tb.label}
          </span>
          <span class="text-[11px] font-mono text-slate-500">Stupeň uzlu: ${incidentEdges.length}</span>
        </div>
        <div class="text-sm font-bold text-slate-900 font-heading">${node.label}</div>
        ${node.subtitle ? `<div class="text-[11px] text-amber-900 font-medium">${node.subtitle}</div>` : ''}

        <div class="flex flex-wrap gap-1.5 pt-1">
          <button onclick="focusGraphNode('${node.id}', true)"
            class="px-2.5 py-1 rounded-lg bg-amber-800 hover:bg-amber-900 text-white text-[11px] font-bold">
            🎯 Vyfiltrovat Ego-graf tohoto uzlu
          </button>
          ${node.nodeType === 'person' ? `
            <button onclick="switchMainTab('identity'); selectCluster('${node.id}');"
              class="px-2.5 py-1 rounded-lg bg-white hover:bg-amber-100 text-amber-950 border border-amber-300 text-[11px] font-bold">
              🧬 Otevřít profil osoby ↗
            </button>
          ` : ''}
        </div>
      </div>

      <div class="space-y-2.5">
        ${[...grouped.entries()].map(([eType, items]) => `
          <div class="space-y-1">
            <div class="text-[10px] font-bold uppercase tracking-wider text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
              ${edgeTypeLabels[eType] || eType} (${items.length})
            </div>
            <div class="divide-y divide-amber-100 border border-amber-100 rounded-xl overflow-hidden bg-white">
              ${items.slice(0, 45).map(({ edge, otherNode, dir }) => `
                <div onclick="focusGraphNode('${otherNode.id}', false)"
                  class="p-2 hover:bg-amber-50 cursor-pointer flex items-center justify-between gap-2 text-[11px]">
                  <div class="min-w-0">
                    <span class="font-mono font-bold text-amber-800 mr-1">${dir}</span>
                    <span class="font-bold text-slate-900">${otherNode.label}</span>
                  </div>
                  <span class="text-[10px] text-slate-500 shrink-0 max-w-[140px] truncate" title="${edge.label || ''}">
                    ${edge.label || ''}
                  </span>
                </div>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function exportKnowledgeGraphJson() {
  const kg = appState.knowledgeGraph || { nodes: [], edges: [], stats: {} };
  const payload = {
    title: 'Dlouhomilov, Medelské & Benkov – Heterogenní graf vzájemných závislostí',
    exportedAt: new Date().toISOString(),
    stats: kg.stats,
    nodes: kg.nodes,
    edges: kg.edges
  };
  const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(payload, null, 2));
  const a = document.createElement('a');
  a.setAttribute('href', dataStr);
  a.setAttribute('download', 'dlouhomilov_dependency_graph.json');
  document.body.appendChild(a);
  a.click();
  a.remove();
}

function setupNetworkCanvasEvents() {
  const canvas = document.getElementById('network-graph-canvas');
  if (!canvas) return;

  const toWorldCoords = e => {
    const rect = canvas.getBoundingClientRect();
    const sx = (e.clientX - rect.left) * (canvas.width / rect.width);
    const sy = (e.clientY - rect.top) * (canvas.height / rect.height);
    const W = canvas.width;
    const H = canvas.height;
    const wx = (sx - W / 2 - netState.camX) / netState.zoom + W / 2;
    const wy = (sy - H / 2 - netState.camY) / netState.zoom + H / 2;
    return { wx, wy, sx, sy };
  };

  canvas.addEventListener('mousedown', e => {
    const { wx, wy, sx, sy } = toWorldCoords(e);
    const hit = netState.nodes.find(n => Math.hypot(n.x - wx, n.y - wy) <= n.r + 7);
    if (hit) {
      netState.draggingNode = hit;
      appState.selectedGraphNodeId = hit.id;
      switchGraphSidePanel('inspector');
      renderGraphNodeInspector(hit.id);
      drawNetworkGraph();
      canvas.style.cursor = 'grabbing';
      reheatSimulation(0.5);
    } else {
      netState.isPanning = true;
      netState.panStartX = sx - netState.camX;
      netState.panStartY = sy - netState.camY;
      canvas.style.cursor = 'grabbing';
    }
  });

  canvas.addEventListener('mousemove', e => {
    const { wx, wy, sx, sy } = toWorldCoords(e);
    if (netState.draggingNode) {
      netState.draggingNode.x = wx;
      netState.draggingNode.y = wy;
      netState.draggingNode.vx = 0;
      netState.draggingNode.vy = 0;
      reheatSimulation(0.35);
      drawNetworkGraph();
    } else if (netState.isPanning) {
      netState.camX = sx - netState.panStartX;
      netState.camY = sy - netState.panStartY;
      drawNetworkGraph();
    } else {
      // Hover detekce
      const hit = netState.nodes.find(n => Math.hypot(n.x - wx, n.y - wy) <= n.r + 7);
      if (hit !== netState.hoveredNode) {
        netState.hoveredNode = hit || null;
        canvas.style.cursor = hit ? 'pointer' : 'grab';
        drawNetworkGraph();
      }
    }
  });

  canvas.addEventListener('mouseup', () => {
    netState.draggingNode = null;
    netState.isPanning = false;
    canvas.style.cursor = netState.hoveredNode ? 'pointer' : 'grab';
  });

  canvas.addEventListener('mouseleave', () => {
    netState.draggingNode = null;
    netState.isPanning = false;
    if (netState.hoveredNode) {
      netState.hoveredNode = null;
      drawNetworkGraph();
    }
    canvas.style.cursor = 'grab';
  });

  canvas.addEventListener('dblclick', e => {
    const { wx, wy } = toWorldCoords(e);
    const hit = netState.nodes.find(n => Math.hypot(n.x - wx, n.y - wy) <= n.r + 8);
    if (hit) {
      focusGraphNode(hit.id, true);
    }
  });

  canvas.addEventListener('wheel', e => {
    e.preventDefault();
    const factor = e.deltaY < 0 ? 1.12 : 0.89;
    netState.zoom = Math.max(0.35, Math.min(3.5, netState.zoom * factor));
    drawNetworkGraph();
  }, { passive: false });
}

function renderMigrationFlowsPanel() {
  const listEl = document.getElementById('migration-flows-list');
  const countEl = document.getElementById('migration-list-count');
  if (!listEl) return;

  const flows = appState.migrationFlows || [];
  const houseMoves = flows.filter(f => f.flowType === 'house_move');
  const immig = flows.filter(f => f.flowType === 'immigration');

  // Upřednostnit přesuny mezi konkrétními čp.
  const ordered = [...houseMoves, ...immig];
  if (countEl) countEl.textContent = ordered.length;

  listEl.innerHTML = ordered.slice(0, 140).map(f => `
    <div onclick="openEgoGraphForNode('${f.clusterId}')"
      class="p-3 hover:bg-amber-50 cursor-pointer transition-colors space-y-1 text-xs">
      <div class="flex items-center justify-between">
        <span class="font-bold text-slate-900">${f.personName} ${f.birthYear ? `(*${f.birthYear})` : ''}</span>
        <span class="px-1.5 py-0.2 rounded text-[10px] font-bold ${f.flowType === 'house_move' ? 'bg-orange-100 text-orange-900 border border-orange-300' : 'bg-sky-100 text-sky-900 border border-sky-300'}">
          ${f.flowType === 'house_move' ? `Přesun čp. (${f.fromYear}➔${f.year})` : `Příchod do obce (${f.year})`}
        </span>
      </div>
      <div class="flex items-center gap-1.5 font-semibold text-amber-900">
        <span>${f.fromLabel}</span>
        <span>➔</span>
        <span>${f.toLabel}</span>
      </div>
      <div class="text-[11px] text-slate-500 line-clamp-1">${f.role || ''}</div>
    </div>
  `).join('');
}

// ---------------------------------------------------------------------------
// 7. Exporty (JSON + Generování kódu do data/people.js + Lightbox skenů)
// ---------------------------------------------------------------------------
function openCodeExportModal(clusterId) {
  const cl = appState.clusters.find(c => c.id === clusterId);
  if (!cl) return;

  const recs = (cl.recordIds || [])
    .map(id => appState.recordsById.get(id))
    .filter(Boolean)
    .sort((a, b) => a.year - b.year);

  const cenIds = recs.filter(r => r.id.startsWith('cen_')).map(r => r.id);
  const generatedObj = {
    id: cl.isVerifiedProfile ? cl.id : `p_${normalizeSearch(cl.canonicalName).replace(/\s+/g, '_')}_${cl.birthYear || cl.firstYear}`,
    name: cl.canonicalName,
    birthYear: cl.birthYear ? String(cl.birthYear) : '-',
    deathYear: cl.deathYear || '-',
    lifeSpan: cl.lifeSpan,
    houseNumber: cl.primaryHouseNumber,
    houseId: cl.primaryHouseId,
    categoryKey: cl.categoryKey,
    categoryLabel: cl.categoryLabel,
    categoryIcon: cl.categoryIcon,
    role: cl.role,
    father: cl.father || 'Neuvedeno',
    mother: cl.mother || 'Neuvedeno',
    spouse: cl.spouse || 'Neuvedeno',
    children: cl.children || [],
    aliases: cl.variantNames || [cl.canonicalName],
    linkedCensusIds: cenIds,
    biography: cl.biography,
    events: recs.map(r => ({
      type: r.recordKind === 'census' ? 'Sčítání lidu' : (r.recordKind === 'birth' ? 'Narození' : (r.recordKind === 'marriage' ? 'Sňatek' : 'Archivní záznam')),
      year: String(r.year),
      date: r.recordKind === 'census' ? `Sčítání ${r.year}` : r.birthDate,
      place: `${r.locality} čp. ${r.houseNumber}`,
      description: `${r.fullName} – ${r.relation || ''}, ${r.occupation || ''}. ${r.notes || ''}`.trim(),
      source: r.sourceTypeLabel,
      scanFile: r.scanFile || null,
      scanTitle: r.scanTitle || `${r.sourceTypeLabel} (${r.fullName})`
    }))
  };

  const pre = document.getElementById('code-export-pre');
  const modal = document.getElementById('code-export-modal');
  if (pre && modal) {
    pre.textContent = JSON.stringify(generatedObj, null, 2);
    modal.classList.remove('hidden');
  }
}

function closeCodeExportModal() {
  document.getElementById('code-export-modal')?.classList.add('hidden');
}

function copyExportedCode() {
  const pre = document.getElementById('code-export-pre');
  if (!pre) return;
  navigator.clipboard.writeText(pre.textContent).then(() => {
    alert('Kód profilu osoby byl zkopírován do schránky!');
  });
}

function exportClustersJson() {
  const payload = {
    appName: 'Dlouhomilov Person Clustering App',
    exportedAt: new Date().toISOString(),
    totalClusters: appState.clusters.length,
    clusters: appState.clusters
  };
  const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(payload, null, 2));
  const a = document.createElement('a');
  a.setAttribute('href', dataStr);
  a.setAttribute('download', 'dlouhomilov_person_clusters.json');
  document.body.appendChild(a);
  a.click();
  a.remove();
}

function openScanViewer(scanFile, title) {
  const modal = document.getElementById('scan-viewer-modal');
  const img = document.getElementById('scan-viewer-img');
  const titleEl = document.getElementById('scan-viewer-title');
  const rawLink = document.getElementById('scan-viewer-open-raw');
  if (!modal || !img) return;

  img.src = scanFile;
  if (titleEl) titleEl.textContent = title || 'Archivní sken';
  if (rawLink) rawLink.href = scanFile;
  modal.classList.remove('hidden');
}

function closeScanViewer() {
  document.getElementById('scan-viewer-modal')?.classList.add('hidden');
}
