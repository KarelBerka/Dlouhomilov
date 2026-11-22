/**
 * Aplikační logika pro Historickou Wiki a prohlídku Dlouhomilova
 * S integrovaným modulem historických map a leteckého snímkování (1716–2026), biografickým modulem a kalibrátorem
 */

let map;
let markers = {};
let baseLayers = {};
let overlayLayers = {};
let wmsAerialLayerMeta = {};
let currentHouseId = "cp29";
let currentPersonId = null;
let currentArchiveDoc = null;
let selectedCensusYear = 1921;
let currentHeritageFilter = "all";
let currentPeopleFilter = "all";
let currentScanZoom = 1.0;
let currentHistoricalLayerKey = "cadastre1834";
let currentLmsSettlementFilter = "all";
let currentInhabitantViewMode = "table"; // "table" | "cards"
let currentRegistrySurnameFilter = "all";
let currentRegistryCategoryFilter = "all";

// Pomocná normalizační funkce pro české vyhledávání (odstranění diakritiky a převod na malá písmena)
function normalizeSearchText(text) {
  if (!text) return "";
  return text
    .toString()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

// Slovník synonym a klíčových slov pro jednotlivé kategorie (pro fulltextové hledání)
const categorySearchKeywords = {
  grunt: [
    'drzitel', 'drzitele', 'drzitelu', 'drzitelum',
    'grunt', 'gruntu', 'grunty', 'gruntech',
    'hospodar', 'hospodari', 'hospodare', 'hospodarem',
    'sedlak', 'sedlaci', 'sedlaka', 'sedlakem',
    'rolnik', 'rolnici', 'rolnika', 'rolnikem',
    'bauer', 'majitel', 'majitele', 'vlastnik', 'vlastnici',
    'hausbesitzer', 'grundbesitzer', 'lanik', 'lanici', 'pololanik', 'celolanik', 'ctvrtlanik'
  ],
  rodina: [
    'rodina', 'rodiny', 'rodine', 'rodice', 'syn', 'dcera',
    'manzel', 'manzelka', 'manzelky', 'otec', 'matka', 'bratr', 'sestra',
    'dite', 'deti', 'dcerka', 'synek', 'gattin', 'sohn', 'tochter'
  ],
  vymenek: [
    'vymenek', 'vymenku', 'vymenice', 'vymenicek',
    'vymenkar', 'vymenkari', 'vymenkare', 'vymenkarce',
    'auszugler', 'auszug'
  ],
  celed: [
    'celed', 'celedi', 'sluzebnik', 'sluzebna',
    'devecka', 'devecky', 'devecce', 'pacholek', 'pacholci', 'pacholka',
    'sluha', 'sluzka', 'magd', 'knecht'
  ],
  remeslo: [
    'remeslo', 'remeslnik', 'remeslnici',
    'kovar', 'tesar', 'krejci', 'obuvnik', 'truhlar',
    'zednik', 'mlynar', 'tkalec', 'kolar', 'bednar'
  ],
  podruh: [
    'podruh', 'podruzi', 'podruhy', 'podruhyne', 'inwohner'
  ],
  vzdelanec: [
    'ucitel', 'ucitele', 'lekar', 'doktor', 'farar', 'knez',
    'starosta', 'poddustojnik', 'kaplan'
  ]
};

// Inicializace po načtení stránky
document.addEventListener("DOMContentLoaded", () => {
  const pageType = document.body?.dataset?.page || "";

  // Přesměrování starých hash odkazů (index.html#house=..., #demografie atd.) na nové podstránky
  if (pageType === "home" && handleLegacyHomeHashRedirect()) {
    return;
  }

  if (typeof housesData !== "undefined") {
    normalizeHousesData();
  }
  if (typeof censusRegistryData !== "undefined") {
    initPersonLinkage();
  }
  if (typeof housesData !== "undefined") {
    updateDynamicCounters();
  }

  renderNewsSection();
  renderReferencesSection();
  renderStorySection();

  if (document.getElementById("map")) {
    try { initMap(); } catch (err) { console.error("Map init warning:", err); }
  }
  if (document.getElementById("houses-list") && typeof housesData !== "undefined") {
    renderHouseCards();
  }
  if (document.getElementById("census-registry-table-body") && typeof censusRegistryData !== "undefined") {
    renderCensusRegistryTable();
  }
  if (document.getElementById("people-grid") && typeof peopleData !== "undefined") {
    renderPeopleSection();
  }
  if (document.getElementById("historical-maps-grid") && typeof historicalMapsData !== "undefined") {
    renderHistoricalMapsSection();
  }
  if (document.getElementById("lms-archive-container") && typeof aerialLmsArchiveData !== "undefined") {
    renderLmsArchiveSection();
  }
  if (document.getElementById("badatelsky-pruvodce")) {
    renderGuideSection();
    renderDictionary();
  }
  if (document.getElementById("demografie-section") && typeof renderDemographySection === "function") {
    renderDemographySection();
    if (typeof switchDemographyTab === "function") {
      switchDemographyTab(currentDemographyTab);
    }
  }
  setupEventListeners();
  if (document.getElementById("house-detail-container") && typeof housesData !== "undefined") {
    openHouseDetail(currentHouseId, false);
  }
  if (typeof initI18n === "function") initI18n();
  handleUrlHash();
  window.addEventListener("hashchange", handleUrlHash);
});

// Sjednocení struktury dat stavení (vč. osady Benkov čp. 18–45)
function normalizeHousesData() {
  if (typeof housesData === "undefined" || !Array.isArray(housesData)) return;
  housesData.forEach((h) => {
    if (!h.localName) h.localName = h.name || formatHouseLabel(h.id, h.number);
    if (!h.type) h.type = h.category === "residential" ? "Venkovská usedlost / Dům" : (h.category || "Usedlost");
    if (!h.description) h.description = h.summary || "";
    if (!h.location) {
      h.location = {
        lat: typeof h.lat === "number" ? h.lat : null,
        lng: typeof h.lng === "number" ? h.lng : null,
        cadastralParcel: "-",
        landParcels: "-",
        source: "Sčítání lidu 1921"
      };
    }
    if (h.cadastreScan && typeof h.cadastreScan === "string") {
      h.cadastreScan = h.cadastreScan.replace(/\\/g, "/");
    }
    if (Array.isArray(h.documents)) {
      h.documents.forEach((doc) => {
        if (typeof doc.file === "string") doc.file = doc.file.replace(/\\/g, "/");
        if (typeof doc.scanFile === "string") doc.scanFile = doc.scanFile.replace(/\\/g, "/");
      });
    }
    if ((!h.stories || h.stories.length === 0) && Array.isArray(h.history)) {
      h.stories = h.history.map((item) => ({
        era: item.period || item.era || "",
        title: item.title || "",
        content: item.content || item.text || ""
      }));
    }
    if (Array.isArray(h.census)) {
      h.census.forEach((c) => {
        if (!c.note && c.Note) c.note = c.Note;
        if (!c.date && c.censusDate) c.date = c.censusDate;
        if (!c.archiveSource && c.source) c.archiveSource = c.source;
        if (typeof c.scanFile === "string") c.scanFile = c.scanFile.replace(/\\/g, "/");
        if ((!Array.isArray(c.sourceArchives) || c.sourceArchives.length === 0) && Array.isArray(c.scans) && c.scans.length > 0) {
          c.sourceArchives = c.scans.filter(Boolean).map((s, idx) => ({
            file: String(s).replace(/\\/g, "/"),
            label: idx === 0 ? `Arch popisný a soupis obyvatel (${c.year || ""})` : `Sčítací arch – strana ${idx + 1} (${c.year || ""})`
          }));
        }
        if (typeof c.livestock === "string") {
          c.livestockNote = c.livestock;
          const lvObj = { horses: 0, cattle: 0, pigs: 0, goats: 0, poultry: 0 };
          c.livestock.split(",").forEach((part) => {
            const ps = part.trim().toLowerCase();
            const m = ps.match(/(\d+)/);
            if (!m) return;
            const n = parseInt(m[1], 10);
            if (ps.includes("kůň") || ps.includes("kon")) lvObj.horses += n;
            else if (ps.includes("kráv") || ps.includes("hověz") || ps.includes("býček") || ps.includes("jalovic") || ps.includes("tele")) lvObj.cattle += n;
            else if (ps.includes("pras")) lvObj.pigs += n;
            else if (ps.includes("koz")) lvObj.goats += n;
            else if (ps.includes("slepic") || ps.includes("hus") || ps.includes("kachn") || ps.includes("drůbež")) lvObj.poultry += n;
          });
          c.livestock = lvObj;
        }
        if (Array.isArray(c.sourceArchives)) {
          c.sourceArchives.forEach((sa) => {
            if (sa && typeof sa.file === "string") sa.file = sa.file.replace(/\\/g, "/");
          });
          if (!c.scanFile && c.sourceArchives.length > 0) {
            const firstApt = c.sourceArchives.find((sa) => sa && sa.file && !sa.file.includes("domovni")) || c.sourceArchives[0];
            if (firstApt && firstApt.file) {
              c.scanFile = firstApt.file;
              if (!c.scanTitle) c.scanTitle = firstApt.label || "";
              if (!c.originalUrl && firstApt.originalUrl) c.originalUrl = firstApt.originalUrl;
            }
          } else if (!c.originalUrl && c.sourceArchives[0]?.originalUrl) {
            c.originalUrl = c.sourceArchives[0].originalUrl;
          }
        }
        if (Array.isArray(c.inhabitants)) {
          c.inhabitants.forEach((p) => {
            if (!p.notes && p.note) p.notes = p.note;
            if (!p.birthDate && p.birthYear != null) p.birthDate = String(p.birthYear);
            if (!p.nationality && p.notes) {
              const nl = p.notes.toLowerCase();
              p.nationality = (nl.includes("deutsch") || nl.includes("německ")) ? "německá" : "česká";
            }
          });
        }
      });
    }
  });
}

const MEDELSKE_1900_HOUSE_IDS = new Set([
  "medelske_cp2", "cp31", "cp32", "cp33", "cp34", "cp35", "cp36", "cp37", "cp38", "cp39",
  "cp40", "cp41", "cp42", "cp43", "cp51", "cp54", "cp60", "cp62", "cp75", "cp76"
]);

function isMedelskeRegistryRecord(r) {
  if (!r) return false;
  const hk = r.houseId || `cp${r.houseNumber}`;
  if (hk.startsWith("medelske_")) return true;
  return [1880, 1890, 1900].includes(Number(r.censusYear)) && MEDELSKE_1900_HOUSE_IDS.has(hk);
}

// Pomocná funkce pro jednotné formátování označení domu (Dlouhomilov čp. X vs. Medelské čp. X)
function formatHouseLabel(houseId, houseNumber) {
  if (houseId && String(houseId).startsWith("medelske_cp")) {
    const num = houseNumber || String(houseId).replace("medelske_cp", "");
    return window.currentLang === "de" ? `Dreihofen (Medelské) Nr. ${num}` : window.currentLang === "en" ? `Medelské No. ${num}` : `Medelské čp. ${num}`;
  }
  if (houseId && String(houseId).startsWith("benkov_cp")) {
    const num = houseNumber || String(houseId).replace("benkov_cp", "");
    return window.currentLang === "de" ? `Benke (Benkov) Nr. ${num}` : window.currentLang === "en" ? `Benkov No. ${num}` : `Benkov čp. ${num}`;
  }
  return window.currentLang === "de" ? `Nr. ${houseNumber}` : window.currentLang === "en" ? `No. ${houseNumber}` : `čp. ${houseNumber}`;
}

// Přepínání rozbalovacího mobilního menu v hlavičce
function toggleMobileNavMenu(forceState) {
  const drawer = document.getElementById("mobile-nav-drawer");
  const icon = document.getElementById("mobile-menu-toggle-icon");
  const btn = document.getElementById("mobile-menu-toggle-btn");
  if (!drawer) return;
  const shouldOpen = typeof forceState === "boolean" ? forceState : drawer.classList.contains("hidden");
  if (shouldOpen) {
    drawer.classList.remove("hidden");
    if (icon) icon.textContent = "✕";
    if (btn) btn.setAttribute("aria-expanded", "true");
  } else {
    drawer.classList.add("hidden");
    if (icon) icon.textContent = "☰";
    if (btn) btn.setAttribute("aria-expanded", "false");
  }
}

// Dynamická aktualizace počítadel záznamů, kategorií a výběru domů v UI
function updateDynamicCounters() {
  if (typeof censusRegistryData !== "undefined") {
    const total = censusRegistryData.length;
    const navBtn = document.getElementById("nav-inhabitants-btn");
    if (navBtn) navBtn.innerHTML = `👥 Obyvatelé & Rodopis (${total})`;
    const totalText = document.getElementById("total-records-text");
    if (totalText) totalText.textContent = `${total} historických zápisů`;
    const tableLabel = document.getElementById("view-mode-table-label");
    if (tableLabel) tableLabel.textContent = `Záznamy (${total})`;
    const unifiedLabel = document.getElementById("view-mode-unified-label");
    if (unifiedLabel && typeof getAllUnifiedPeople === "function") {
      const unifiedCount = getAllUnifiedPeople().filter(p => p.linkedRecords.length > 0).length;
      unifiedLabel.textContent = `Sjednocené osoby (${unifiedCount})`;
    }
    const probBtnLabel = document.getElementById("unified-prob-btn-label");
    if (probBtnLabel && typeof getAutoLinkSuggestions === "function") {
      probBtnLabel.textContent = `Návrhy ke kontrole prob (${getAutoLinkSuggestions().length})`;
    }
    const countBadge = document.getElementById("registry-count-badge");
    if (countBadge && currentInhabitantViewMode === "table") {
      countBadge.textContent = `Zobrazeno: ${total} osob`;
    }

    const catCounts = {};
    const houseCounts = {};
    censusRegistryData.forEach(r => {
      catCounts[r.categoryKey] = (catCounts[r.categoryKey] || 0) + 1;
      const hKey = r.houseId || `cp${r.houseNumber}`;
      houseCounts[hKey] = (houseCounts[hKey] || 0) + 1;
    });

    const catLabels = {
      all: `Všichni (${total})`,
      grunt: `<span>🏡</span> Držitelé gruntů (${catCounts.grunt || 0})`,
      vymenek: `<span>👴</span> Výměnkáři (${catCounts.vymenek || 0})`,
      celed: `<span>🌾</span> Čeleď (${catCounts.celed || 0})`,
      remeslo: `<span>🔨</span> Řemeslníci (${catCounts.remeslo || 0})`,
      podruh: `<span>🏠</span> Podruzi (${catCounts.podruh || 0})`,
      rodina: `<span>👨‍👩‍👧‍👦</span> Rodinní příslušníci (${catCounts.rodina || 0})`,
      vzdelanec: `<span>🎓</span> Učitelé & Duchovní (${catCounts.vzdelanec || 0})`
    };

    document.querySelectorAll(".reg-cat-btn").forEach(btn => {
      const cat = btn.dataset.cat;
      if (cat && catLabels[cat]) {
        btn.innerHTML = catLabels[cat];
      }
    });

    // Dynamické naplnění roletky stavení (#registry-house-select) podle dostupných záznamů
    const houseSelect = document.getElementById("registry-house-select");
    if (houseSelect) {
      const currentVal = houseSelect.value || "all";
      let dlouhCount = 0;
      let medCount = 0;
      let benCount = 0;
      censusRegistryData.forEach(r => {
        const hk = r.houseId || `cp${r.houseNumber}`;
        if (hk.startsWith("benkov_")) benCount++;
        else if (isMedelskeRegistryRecord(r)) medCount++;
        else dlouhCount++;
      });

      const groupOrder = (id) => id.startsWith("benkov_") ? 2 : (id.startsWith("medelske_") ? 1 : 0);
      const houseKeys = Object.keys(houseCounts).sort((a, b) => {
        const ga = groupOrder(a);
        const gb = groupOrder(b);
        if (ga !== gb) return ga - gb;
        const numA = parseInt(a.replace(/\D+/g, ""), 10) || 0;
        const numB = parseInt(b.replace(/\D+/g, ""), 10) || 0;
        return numA - numB;
      });

      const optionsHtml = [
        `<option value="all">Všechna stavení (${total} záznamů)</option>`,
        `<option value="settlement:dlouhomilov">📍 Celý Dlouhomilov (${dlouhCount} záznamů)</option>`,
        `<option value="settlement:medelske">📍 Celá osada Medelské (${medCount} záznamů)</option>`,
        `<option value="settlement:benkov">📍 Celý Benkov / Benke (${benCount} záznamů)</option>`
      ];
      houseKeys.forEach(hKey => {
        const houseObj = typeof housesData !== "undefined" ? housesData.find(h => h.id === hKey) : null;
        const num = houseObj ? houseObj.number : hKey.replace(/\D+/g, "");
        const label = formatHouseLabel(hKey, num);
        const shortName = houseObj && houseObj.localName
          ? houseObj.localName.replace(/^(Domkářské stavení|Usedlost|Bývalá dědičná rychta|Venkovská usedlost|Dům|Velká selská usedlost|Chalupa)\s*/i, "")
          : "";
        const displayTitle = shortName ? `${label} – ${shortName} (${houseCounts[hKey]})` : `${label} (${houseCounts[hKey]})`;
        optionsHtml.push(`<option value="${hKey}">${displayTitle}</option>`);
      });
      houseSelect.innerHTML = optionsHtml.join("");
      if ([...houseSelect.options].some(o => o.value === currentVal)) {
        houseSelect.value = currentVal;
      }
    }
  }

  if (typeof peopleData !== "undefined") {
    const cardsLabel = document.getElementById("view-mode-cards-label");
    if (cardsLabel) cardsLabel.textContent = `Biografické profily (${peopleData.length})`;
  }
}

// Obsluha URL hash routování (#house=cp22, #person=p_josef_dvorak_1857, #map=vojenske2_1838, #atlas, #csu atd.)
function handleUrlHash() {
  const rawHash = window.location.hash ? window.location.hash.substring(1) : "";
  const rawSearch = window.location.search ? window.location.search.substring(1) : "";
  if (!rawHash && !rawSearch) return;

  const params = new URLSearchParams(rawSearch);
  if (rawHash.includes("=")) {
    new URLSearchParams(rawHash).forEach((v, k) => params.set(k, v));
  }
  const houseParam = params.get("house");
  const personParam = params.get("person");
  const mapParam = params.get("map");
  const atlasParam = params.get("atlas");
  const catParam = params.get("cat");
  const searchParam = params.get("search");
  const viewParam = params.get("view");
  const yearParam = params.get("year");
  const settlementParam = params.get("settlement");

  if (houseParam && typeof housesData !== "undefined" && document.getElementById("house-detail-container")) {
    if (typeof switchMapPageTab === "function") switchMapPageTab("map", false);
    const targetHouse = housesData.find(h => h.id === houseParam || h.number === houseParam);
    if (targetHouse) {
      openHouseDetail(targetHouse.id, false, true);
      setTimeout(() => {
        document.getElementById("house-detail-container")?.scrollIntoView({ behavior: "smooth" });
      }, 150);
    }
  }

  if (personParam && document.getElementById("person-detail-modal")) {
    const hasCurated = typeof peopleData !== "undefined" && peopleData.some(p => p.id === personParam);
    const hasAuto = typeof autoLinkedPeopleById !== "undefined" && autoLinkedPeopleById.has(personParam);
    const hasCustom = typeof personLinksState !== "undefined" && personLinksState.customPeople && personLinksState.customPeople[personParam];
    if (hasCurated || hasAuto || hasCustom) {
      if (hasAuto && !hasCurated && typeof setInhabitantViewMode === "function") {
        setInhabitantViewMode("unified");
      }
      openPersonModal(personParam, false);
    }
  }

  if (mapParam && document.getElementById("map")) {
    if (typeof switchMapPageTab === "function") switchMapPageTab("map", false);
    const select = document.getElementById("historical-map-select");
    if (select) select.value = mapParam;
    const slider = document.getElementById("cadastre-opacity-slider");
    if (slider && parseFloat(slider.value) === 0) {
      slider.value = mapParam.startsWith("orto") ? "100" : "75";
    }
    switchHistoricalOverlay(mapParam, false);
  }

  // Příběh obce (pribeh.html)
  const comicPageMatch = rawHash.match(/^comic-page-(\d+|census|all)$/);
  const storyKapMatch = rawHash.replace(/^story-/, "").match(/^kap-(\d+)$/);
  if (rawHash === "comic" || rawHash === "comic-census" || comicPageMatch || params.get("tab") === "comic") {
    switchStoryTab("comic");
    const cPage = params.get("page") || (comicPageMatch ? comicPageMatch[1] : (rawHash === "comic-census" ? "census" : null));
    if (cPage && typeof filterComicPage === "function") {
      filterComicPage(cPage);
    }
    setTimeout(() => document.getElementById("pribeh-section")?.scrollIntoView({ behavior: "smooth" }), 100);
  } else if (rawHash === "facts" || params.get("tab") === "facts") {
    switchStoryTab("facts");
    setTimeout(() => document.getElementById("pribeh-section")?.scrollIntoView({ behavior: "smooth" }), 100);
  } else if (rawHash === "chapters" || params.get("tab") === "chapters") {
    switchStoryTab("chapters");
  } else if (storyKapMatch) {
    const targetKapId = `kap-${storyKapMatch[1]}`;
    const kapIdx = (typeof storyData !== "undefined" && Array.isArray(storyData.chapters))
      ? storyData.chapters.findIndex(ch => ch.id === targetKapId)
      : -1;
    switchStoryTab("chapters");
    if (kapIdx >= 0 && typeof selectStoryChapter === "function") {
      selectStoryChapter(kapIdx, true);
    }
  }

  // Atlas na mapa.html
  if (rawHash === "atlas-map-section" || rawHash === "atlas" || params.get("section") === "atlas" || atlasParam) {
    if (document.getElementById("atlas-map-section")) {
      if (typeof switchMapPageTab === "function") switchMapPageTab("atlas", false);
      if (atlasParam && typeof filterHistoricalMaps === "function") filterHistoricalMaps(atlasParam);
      setTimeout(() => document.getElementById("atlas-map-section")?.scrollIntoView({ behavior: "smooth" }), 100);
    }
  }

  // Obyvatelé (obyvatele.html)
  if (document.getElementById("obyvatele-section")) {
    if (viewParam && ["table", "unified", "cards"].includes(viewParam) && typeof setInhabitantViewMode === "function") {
      setInhabitantViewMode(viewParam);
    }
    if (catParam && typeof setRegistryCategoryFilter === "function") {
      setInhabitantViewMode("table");
      setRegistryCategoryFilter(catParam);
    }
    let needApply = false;
    if (yearParam) {
      const ySel = document.getElementById("registry-year-select");
      if (ySel && [...ySel.options].some(o => o.value === yearParam)) {
        ySel.value = yearParam;
        setInhabitantViewMode("table");
        needApply = true;
      }
    }
    if (settlementParam) {
      const sKey = `settlement:${settlementParam.toLowerCase()}`;
      const hSel = document.getElementById("registry-house-select");
      if (hSel && [...hSel.options].some(o => o.value === sKey)) {
        hSel.value = sKey;
        setInhabitantViewMode("table");
        needApply = true;
      }
    }
    if (searchParam) {
      const inp = document.getElementById("registry-search-input");
      if (inp) {
        inp.value = searchParam;
        needApply = true;
      }
    }
    if (needApply && typeof applyRegistryFilters === "function") {
      applyRegistryFilters();
    }
  }

  // Demografie (demografie.html)
  if (document.getElementById("demografie-section")) {
    const demoYrParam = params.get("year");
    if (demoYrParam && (demoYrParam === "all" || [1857, 1869, 1880, 1890, 1900, 1910, 1921].includes(Number(demoYrParam)))) {
      setDemographyYear(demoYrParam);
    }
    const demoTabs = ["csu", "histogram", "origins", "wealth", "all"];
    if (demoTabs.includes(rawHash)) {
      switchDemographyTab(rawHash);
    } else if (demoYrParam) {
      switchDemographyTab("histogram");
    } else if (rawHash === "demografie" || rawHash === "demografie-section" || params.get("section") === "demografie") {
      switchDemographyTab(currentDemographyTab || "csu");
    }
  }

  // Reference & Badatelský průvodce (reference.html)
  if (document.getElementById("references-page-section") || document.getElementById("badatelsky-pruvodce")) {
    if (rawHash === "cite" || rawHash === "citace") {
      switchReferenceTab("cite");
    } else if (rawHash === "prace" || rawHash === "prace-ke-stazeni" || rawHash === "ke-stazeni") {
      switchReferenceTab("prace");
      setTimeout(() => {
        document.getElementById("prace-ke-stazeni")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else if (rawHash === "prezentace") {
      switchReferenceTab("catalog");
      setTimeout(() => {
        document.getElementById("prezentace")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else if (rawHash === "badatelsky-pruvodce" || rawHash === "dictionary-container" || rawHash === "pruvodce" || params.get("section") === "pruvodce") {
      switchReferenceTab("pruvodce");
      setTimeout(() => {
        document.getElementById(rawHash === "dictionary-container" ? "dictionary-container" : "badatelsky-pruvodce")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else if (rawHash === "all") {
      switchReferenceTab("all");
    } else if (rawHash === "catalog") {
      switchReferenceTab("catalog");
    }
  }

  // Aktuality na index.html
  if (rawHash === "aktuality" || rawHash === "aktuality-section") {
    document.getElementById("aktuality-section")?.scrollIntoView({ behavior: "smooth" });
  }
}

// Převody EPSG:3857 Mercator-Y pro přesné skládání historických WebP kvadrantů
function latToMercatorY(latDeg) {
  const sinLat = Math.max(-0.999999, Math.min(0.999999, Math.sin((latDeg * Math.PI) / 180)));
  return 6378137 * 0.5 * Math.log((1 + sinLat) / (1 - sinLat));
}

function mercatorYToLat(yMeters) {
  return ((2 * Math.atan(Math.exp(yMeters / 6378137)) - Math.PI / 2) * 180) / Math.PI;
}

function computeMercatorQuadrantBounds(outerBounds) {
  const s = Number(outerBounds[0][0]);
  const w = Number(outerBounds[0][1]);
  const n = Number(outerBounds[1][0]);
  const e = Number(outerBounds[1][1]);
  const midLng = 0.5 * (w + e);
  const midLat = mercatorYToLat(0.5 * (latToMercatorY(s) + latToMercatorY(n)));
  return {
    q00: [[midLat, w], [n, midLng]],
    q01: [[midLat, midLng], [n, e]],
    q10: [[s, w], [midLat, midLng]],
    q11: [[s, midLng], [midLat, e]]
  };
}

// Továrna georeferencovaných EPSG:3857 WebP vrstev (jednolisté i 4-kvadrantové s nulovými Range požadavky)
function createWarpedOverlayLayer(layerKey, opts = {}) {
  const manifest = (typeof warpedMapsManifest !== "undefined" && warpedMapsManifest) ? warpedMapsManifest : null;
  const spec = (manifest && manifest.layers) ? manifest.layers[layerKey] : null;
  const basePath = (manifest && manifest.basePath) ? manifest.basePath : "assets/maps/warped/";
  const opacity = (opts.opacity !== undefined) ? opts.opacity : 0.75;
  const attribution = opts.attribution || "";

  if (!spec) {
    const fbBounds = opts.fallbackBounds || [[49.882, 16.96], [49.929, 17.044]];
    const fb = L.imageOverlay(opts.fallbackUrl || "", fbBounds, {
      opacity,
      interactive: false,
      attribution,
      className: "warped-map-overlay"
    });
    fb.setRotation = (deg) => {
      fb._currentRotation = deg || 0;
      const el = fb.getElement();
      if (el) {
        el.style.transformOrigin = "center center";
        el.style.rotate = fb._currentRotation ? `${fb._currentRotation}deg` : "";
      }
      return fb;
    };
    return fb;
  }

  if (spec.delivery === "quadrants" && Array.isArray(spec.quadrants)) {
    const group = L.layerGroup();
    const quadMap = {};
    const origins = {
      q00: "100% 100%",
      q01: "0% 100%",
      q10: "100% 0%",
      q11: "0% 0%"
    };

    spec.quadrants.forEach((q, idx) => {
      const ov = L.imageOverlay(basePath + q.file, q.bounds, {
        opacity,
        interactive: false,
        attribution: idx === 0 ? attribution : "",
        className: "warped-map-overlay warped-quadrant-tile"
      });
      quadMap[q.id] = ov;
      group.addLayer(ov);
    });

    group._warpedSpec = spec;
    group._quadrantOverlays = quadMap;
    group._currentOpacity = opacity;
    group._currentRotation = 0;

    group.setOpacity = (op) => {
      group._currentOpacity = op;
      Object.values(quadMap).forEach(ov => ov.setOpacity(op));
      return group;
    };
    group.setBounds = (outerBounds) => {
      const qb = computeMercatorQuadrantBounds(outerBounds);
      Object.entries(quadMap).forEach(([qid, ov]) => {
        if (qb[qid]) ov.setBounds(qb[qid]);
      });
      return group;
    };
    group.setRotation = (deg) => {
      group._currentRotation = deg || 0;
      Object.entries(quadMap).forEach(([qid, ov]) => {
        const el = ov.getElement();
        if (el) {
          el.style.transformOrigin = origins[qid] || "center center";
          el.style.rotate = group._currentRotation ? `${group._currentRotation}deg` : "";
        }
      });
      return group;
    };
    group.getElement = () => null;
    group.on("add", () => {
      group.setOpacity(group._currentOpacity);
      if (group._currentRotation) {
        group.setRotation(group._currentRotation);
      }
    });
    return group;
  }

  const single = L.imageOverlay(basePath + spec.file, spec.bounds, {
    opacity,
    interactive: false,
    attribution,
    className: "warped-map-overlay"
  });
  single._warpedSpec = spec;
  single._currentRotation = 0;
  single.setRotation = (deg) => {
    single._currentRotation = deg || 0;
    const el = single.getElement();
    if (el) {
      el.style.transformOrigin = "center center";
      el.style.rotate = single._currentRotation ? `${single._currentRotation}deg` : "";
    }
    return single;
  };
  single.on("add", () => {
    if (single._currentRotation) single.setRotation(single._currentRotation);
  });
  return single;
}

// Inicializace mapy (Leaflet s přesnými souřadnicemi údolí Dlouhomilov, Medelské & Benkov)
function initMap() {
  if (!document.getElementById("map") || typeof L === "undefined") return;
  const dlouhomilovCenter = [49.9035, 17.004];

  map = L.map("map", {
    center: dlouhomilovCenter,
    zoom: 14,
    zoomControl: true
  });

  // 1. Podkladové mapy (Base Layers) – výchozí oficiální ČÚZK Ortofoto WM + ZTM 1:10 000 WM
  baseLayers.ortho = L.tileLayer("https://ags.cuzk.gov.cz/arcgis1/rest/services/ORTOFOTO_WM/MapServer/tile/{z}/{y}/{x}", {
    attribution: 'Ortofoto ČR &copy; <a href="https://geoportal.cuzk.gov.cz/" target="_blank" rel="noopener noreferrer">ČÚZK</a>',
    maxZoom: 19
  }).addTo(map);

  baseLayers.topo = L.tileLayer("https://ags.cuzk.gov.cz/arcgis1/rest/services/ZTM_WM/MapServer/tile/{z}/{y}/{x}", {
    attribution: 'Základní topografická mapa (ZTM 1:10 000) &copy; <a href="https://geoportal.cuzk.gov.cz/" target="_blank" rel="noopener noreferrer">ČÚZK</a>',
    maxZoom: 19
  });

  baseLayers.osm = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a> přispěvatelé',
    maxZoom: 19
  });

  baseLayers.esri = L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}", {
    attribution: "Letecké snímky (záloha) &copy; Esri, Maxar",
    maxZoom: 19
  });

  // 1b. Oficiální WMS Katastrální mapa ČÚZK (živé vektorové parcely)
  baseLayers.cuzk_km = L.tileLayer.wms("https://services.cuzk.cz/wms/wms.asp", {
    layers: "prehledka_krajskich_hranic,prehledka_okresnich_hranic,prehledka_katastralnich_hranic,hranice_parcel,obrazy_parcel,parcelni_cisla",
    format: "image/png",
    transparent: true,
    version: "1.3.0",
    attribution: 'Katastr nemovitostí &copy; <a href="https://geoportal.cuzk.gov.cz/" target="_blank" rel="noopener noreferrer">ČÚZK</a>',
    maxZoom: 20
  });

  // 2. Georeferencované historické mapové vrstvy EPSG:3857 (výchozí průhlednost 0 % = čistý dnešní podklad)
  // 2a. Stabilní katastr 1834 (6 listů I–VI k.ú. Dlouhomilov + detail středu)
  overlayLayers.cadastre1834 = createWarpedOverlayLayer("cadastre1834", {
    opacity: 0,
    attribution: 'Stabilní katastr 1834 (Listy I–VI k.ú. Dlouhomilov) &copy; <a href="https://ags.cuzk.gov.cz/archiv/openmap.html?typ=skicm&idrastru=MOR102618340" target="_blank" rel="noopener noreferrer">ÚAZK ČÚZK (MOR102618340)</a>'
  }).addTo(map);

  // 2b. I. vojenské mapování (1764–1783 Josefské – 011_M + 007_M TPS)
  overlayLayers.vojenske1_1764 = createWarpedOverlayLayer("vojenske1_1764", {
    opacity: 0.75,
    attribution: 'I. vojenské mapování (1764–1783) &copy; ÖStA / <a href="https://chartae-antiquae.cz/cs/maps/12689/" target="_blank" rel="noopener noreferrer">Chartae Antiquae (011_M, 007_M)</a>'
  });

  // 2c. II. vojenské mapování (1838 Františkovo – CENIA WMS + reziduální TPS)
  overlayLayers.vojenske2_1838 = createWarpedOverlayLayer("vojenske2_1838", {
    opacity: 0.75,
    attribution: 'II. vojenské mapování (1838) &copy; ÖStA / CENIA WMS &bull; <a href="https://chartae-antiquae.cz/" target="_blank" rel="noopener noreferrer">Chartae Antiquae</a>'
  });

  // 2d. III. vojenské mapování – Topografická sekce (1874, 4058_1_02 TPS)
  overlayLayers.vojenske3_1874 = createWarpedOverlayLayer("vojenske3_1874", {
    opacity: 0.75,
    attribution: 'III. vojenské mapování 1:25 000 (1874) &copy; <a href="https://chartae-antiquae.cz/cs/maps/6178/" target="_blank" rel="noopener noreferrer">Chartae Antiquae (4058_1_02) / HÚ AV ČR</a>'
  });

  // 2e. III. vojenské mapování – Topografická mapa ČSR (1937, 10001_0517 TPS)
  overlayLayers.vojenske3_1937 = createWarpedOverlayLayer("vojenske3_1937", {
    opacity: 0.75,
    attribution: 'Topografická mapa ČSR 1:25 000 (1937) &copy; VZÚ / <a href="https://chartae-antiquae.cz/cs/maps/44149/" target="_blank" rel="noopener noreferrer">Chartae Antiquae (10001_0517) / NA ČR</a>'
  });

  // 2f. III. vojenské mapování – poválečný tisk (VIII. 1945, 4058_1_01 TPS)
  overlayLayers.vojenske3_1945 = createWarpedOverlayLayer("vojenske3_1945", {
    opacity: 0.75,
    attribution: 'III. vojenské mapování – poválečný tisk (VIII. 1945) &copy; VZÚ / <a href="https://chartae-antiquae.cz/cs/maps/6177/" target="_blank" rel="noopener noreferrer">Chartae Antiquae (4058_1_01) / HÚ AV ČR</a>'
  });

  // 2g. Topografická mapa v systému S-1952 (1952 – západní list TPS)
  overlayLayers.topo1952 = createWarpedOverlayLayer("topo1952", {
    opacity: 0.75,
    attribution: 'Topografická mapa S-1952 &copy; <a href="https://ags.cuzk.cz/archiv/" target="_blank" rel="noopener noreferrer">ÚAZK ČÚZK</a>'
  });

  // 2h. Historická ortofotomapa z 50. let (1953–1954, CENIA / VGHMÚř Dobruška / MO ČR, CC-BY 4.0)
  overlayLayers.orto1953 = createWarpedOverlayLayer("orto1953", {
    opacity: 0.85,
    attribution: 'Historická ortofotomapa (1953–1954) &copy; <a href="https://gis.cenia.cz/mapcache/ortofotomapa_historicka/wms?SERVICE=WMS&REQUEST=GetCapabilities" target="_blank" rel="noopener noreferrer">CENIA / VGHMÚř / MO ČR (CC-BY 4.0)</a> &bull; <a href="https://ags.cuzk.gov.cz/archiv/openmap.html?typ=lms&idrastru=WMSA08.1953.ZABR51.11298&bz=-562206.33,-1084600.40" target="_blank" rel="noopener noreferrer">Archiv ČÚZK LMS 1953</a>'
  });

  // 2h. Živé vrstvy ČÚZK WMS-ORTOARCHIV (2000–2022)
  wmsAerialLayerMeta = {};
  if (typeof cuzkArchivOrthoLayers !== "undefined" && Array.isArray(cuzkArchivOrthoLayers)) {
    cuzkArchivOrthoLayers.forEach(item => {
      overlayLayers[item.key] = L.tileLayer.wms("https://geoportal.cuzk.gov.cz/geoserver/wms_ortofoto_archiv/wms", {
        layers: item.wmsLayer,
        format: "image/png",
        transparent: true,
        version: "1.3.0",
        opacity: 0.85,
        maxZoom: 20,
        attribution: `Archivní ortofoto ${item.year} &copy; <a href="https://geoportal.cuzk.gov.cz/geoserver/wms_ortofoto_archiv/wms?SERVICE=WMS&REQUEST=GetCapabilities" target="_blank" rel="noopener noreferrer">ČÚZK WMS-ORTOARCHIV</a> &bull; <a href="https://ags.cuzk.gov.cz/archiv/" target="_blank" rel="noopener noreferrer">Archiv ČÚZK (LMS)</a>`
      });
      wmsAerialLayerMeta[item.key] = item;
    });
  }

  // 3. Překryvné vrstvy: Živá katastrální mapa ČÚZK & DMR 5G stínovaný reliéf
  overlayLayers.cuzk_km = L.tileLayer.wms("https://services.cuzk.cz/wms/wms.asp", {
    layers: "hranice_parcel,obrazy_parcel,parcelni_cisla",
    format: "image/png",
    transparent: true,
    version: "1.3.0",
    attribution: 'Katastrální mapa &copy; <a href="https://geoportal.cuzk.gov.cz/" target="_blank" rel="noopener noreferrer">ČÚZK</a>',
    maxZoom: 20
  });

  overlayLayers.dmr5g = L.tileLayer.wms("https://ags.cuzk.gov.cz/arcgis2/services/dmr5g/ImageServer/WMSServer", {
    layers: "dmr5g:GrayscaleHillshade",
    styles: "default",
    format: "image/png",
    transparent: true,
    version: "1.3.0",
    opacity: 0.55,
    attribution: 'DMR 5G &copy; <a href="https://geoportal.cuzk.gov.cz/" target="_blank" rel="noopener noreferrer">ČÚZK</a>',
    maxZoom: 20
  });

  // 4. Vektorové vrstvy hranic údolí a značek stavení (PŘED L.control.layers!)
  initBuildingLayers();
  renderMapMarkers();

  // Ovládání vrstev v pravém horním rohu
  const baseMaps = {
    "🛰️ ČÚZK Ortofoto (Letecká)": baseLayers.ortho,
    "🏔️ ČÚZK ZTM 1:10 000 (Topografická)": baseLayers.topo,
    "🗺️ OpenStreetMap (Dnešní)": baseLayers.osm,
    "🌐 Esri World Imagery (Záloha)": baseLayers.esri,
    "🏛️ Katastr nemovitostí ČÚZK": baseLayers.cuzk_km
  };

  const overlayMaps = {
    "📜 Císařský otisk (1834)": overlayLayers.cadastre1834,
    "⚔️ I. vojenské mapování (1764)": overlayLayers.vojenske1_1764,
    "⚔️ II. vojenské mapování (1838)": overlayLayers.vojenske2_1838,
    "⚔️ III. vojenské mapování (1874)": overlayLayers.vojenske3_1874,
    "🇨🇿 Topografická mapa ČSR (1937)": overlayLayers.vojenske3_1937,
    "🇨🇿 III. vojenské mapování (1945)": overlayLayers.vojenske3_1945,
    "🗺️ Topografická mapa S-1952 (1952)": overlayLayers.topo1952,
    "✈️ Historická ortofotomapa (1953–1954)": overlayLayers.orto1953,
    "✈️ Archivní ortofoto ČÚZK 2000 (ČB)": overlayLayers.orto2000,
    "✈️ Archivní ortofoto ČÚZK 2003 (RGB)": overlayLayers.orto2003,
    "✈️ Archivní ortofoto ČÚZK 2012 (RGB)": overlayLayers.orto2012,
    "✈️ Archivní ortofoto ČÚZK 2022 (RGB)": overlayLayers.orto2022,
    "🏛️ Živá katastrální mapa ČÚZK (WMS)": overlayLayers.cuzk_km,
    "⛰️ Stínovaný reliéf LiDAR (ČÚZK DMR 5G)": overlayLayers.dmr5g,
    "🟨 Hranice katastrů & body údolí": overlayLayers.localityHighlights,
    "📍 Čísla popisná stavení (čp.)": overlayLayers.houseMarkers
  };

  L.control.layers(baseMaps, overlayMaps, { position: "topright" }).addTo(map);

  // Inicializace georeferenčního modulu (načtení uložených kalibrací)
  initGeorefEngine();

  // Zoom-adaptivní velikost značek a úvodní záběr na celé údolí (Dlouhomilov + Medelské + Benkov)
  map.on("zoomend", updateMarkerZoomMode);
  map.fitBounds([[49.889, 16.985], [49.916, 17.028]], { padding: [20, 20] });
  updateMarkerZoomMode();
  updateActiveMapSourceBar(currentHistoricalLayerKey);
}

// Přepínání kompaktního režimu značek (z <= 15 tečky, z >= 16 čitelná čísla popisná)
function updateMarkerZoomMode() {
  if (!map) return;
  const container = map.getContainer();
  if (!container) return;
  if (map.getZoom() <= 15) {
    container.classList.add("map-markers-compact");
  } else {
    container.classList.remove("map-markers-compact");
  }
}

// Vykreslení markerů na mapě (čísla popisná stavení)
function renderMapMarkers() {
  if (typeof map === "undefined" || !map || typeof housesData === "undefined") return;
  if (!overlayLayers.houseMarkers) {
    overlayLayers.houseMarkers = L.layerGroup();
    overlayLayers.houseMarkers.addTo(map);
  }
  overlayLayers.houseMarkers.clearLayers();
  markers = {};

  housesData.forEach((house) => {
    if (house.location?.hideMarker) return;
    const lat = house.location?.lat ?? house.lat;
    const lng = house.location?.lng ?? house.lng;
    if (typeof lat !== "number" || typeof lng !== "number" || isNaN(lat) || isNaN(lng)) return;

    const isFeatured = house.id === "cp29";
    const isHeritage = Boolean(house.isHeritage);
    const isMedelske = String(house.id).startsWith("medelske_cp") || house.settlement === "Medelské" || (lat < 49.9042 && lng < 17.005);
    const isBenkov = String(house.id).startsWith("benkov_cp") || house.id === "kaple_benkov" || house.part === "Benkov";
    const isApprox = house.location?.precision === "historical_approx";

    let markerClass = "custom-house-marker";
    if (isMedelske) markerClass += " loc-medelske";
    else if (isBenkov) markerClass += " loc-benkov";
    if (isHeritage) markerClass += " heritage";
    if (isFeatured) markerClass += " featured";
    if (isApprox) markerClass += " approx-marker";
    if (house.id === currentHouseId) markerClass += " active";

    const markerBadge = String(house.id).startsWith("medelske_cp")
      ? `M${house.number}`
      : house.id === "kaple_benkov"
        ? "⛪"
        : isBenkov
          ? `B${house.number}`
          : `${isHeritage ? "🏛️" : ""}${house.number}`;
    const houseLabel = formatHouseLabel(house.id, house.number);
    const precisionNote = isApprox
      ? '<br><span class="text-[10px] text-amber-700 font-semibold">⚠️ Přibližná historická poloha (zaniklé čp.)</span>'
      : '<br><span class="text-[10px] text-emerald-700 font-semibold">✓ Přesná poloha (ČÚZK RÚIAN)</span>';

    const customIcon = L.divIcon({
      className: markerClass,
      html: `<span class="house-marker-pill"><span class="house-marker-text">${markerBadge}</span></span>`,
      iconSize: [30, 30],
      iconAnchor: [15, 15]
    });

    const marker = L.marker([lat, lng], { icon: customIcon })
      .bindTooltip(
        `<strong>${isHeritage ? "🏛️ " : ""}${houseLabel}</strong><br>${house.localName}${isHeritage ? '<br><span class="text-[10px] text-red-600 font-bold">Kulturní památka ČR</span>' : ""}${precisionNote}`,
        {
          direction: "top",
          offset: [0, -10]
        }
      );

    marker.on("click", () => {
      openHouseDetail(house.id, true, false);
      document.getElementById("house-detail-container")?.scrollIntoView({ behavior: "smooth" });
    });

    overlayLayers.houseMarkers.addLayer(marker);
    markers[house.id] = marker;
  });

  updateMarkerZoomMode();
}

// Přepínání zobrazení značek stavení (čp.)
function toggleHouseMarkers(isChecked) {
  if (!overlayLayers.houseMarkers) return;
  if (isChecked) {
    if (!map.hasLayer(overlayLayers.houseMarkers)) map.addLayer(overlayLayers.houseMarkers);
  } else {
    if (map.hasLayer(overlayLayers.houseMarkers)) map.removeLayer(overlayLayers.houseMarkers);
  }
}

// Přepínání aktivní historické mapové vrstvy
function switchHistoricalOverlay(layerKey, updateHash = true) {
  currentHistoricalLayerKey = layerKey;
  if (typeof map === "undefined" || !map) return;
  if (updateHash && window.history && window.history.replaceState) {
    window.history.replaceState(null, "", `#map=${layerKey}`);
  }

  // Odstraníme všechny historické rastrové a letecké vrstvy z mapy
  const historicalKeys = [
    "cadastre1834", 
    "vojenske1_1764", 
    "vojenske2_1838", 
    "vojenske3_1874", 
    "vojenske3_1937",
    "vojenske3_1945",
    "topo1952",
    "orto1953",
    ...((typeof cuzkArchivOrthoLayers !== "undefined" && Array.isArray(cuzkArchivOrthoLayers))
      ? cuzkArchivOrthoLayers.map(l => l.key)
      : [])
  ];
  
  historicalKeys.forEach(k => {
    if (overlayLayers[k] && map.hasLayer(overlayLayers[k])) {
      map.removeLayer(overlayLayers[k]);
    }
  });

  // Přidáme vybranou vrstvu (pokud není aktivní režim vedle sebe, kde má být levá mapa čistá)
  const activeLayer = overlayLayers[layerKey];
  if (activeLayer) {
    if (!georefState?.isSideBySide) {
      activeLayer.addTo(map);
      const slider = document.getElementById("cadastre-opacity-slider");
      let val = slider ? parseFloat(slider.value) : 75;
      if (updateHash && val === 0) {
        val = layerKey.startsWith("orto") ? 100 : 75;
        if (slider) slider.value = String(val);
      }
      updateCadastreOpacity(val);
    }
  }

  // Synchronizace s kalibračním nástrojem (nejprve aktualizovat activeMap, aby Side-by-Side vykreslil novou vrstvu)
  if (typeof georefState !== "undefined") {
    georefState.activeMap = layerKey;
    const georefMapSelect = document.getElementById("georef-map-select");
    if (georefMapSelect && Array.from(georefMapSelect.options).some(opt => opt.value === layerKey)) {
      georefMapSelect.value = layerKey;
    }
    if (georefState.isOpen) {
      updateGeorefUI();
    }
  }

  // Synchronizace s mapou v pravém okně v režimu Side-by-Side
  if (georefState?.isSideBySide && typeof updateHistoricalSideMapOverlay === "function") {
    updateHistoricalSideMapOverlay();
  }

  // Aktualizujeme jemný podkres lokalit odpovídající zvolené mapě
  updateLocalityHighlights(layerKey);
  updateActiveMapSourceBar(layerKey);
}

// Bezpečné escapování HTML atributu (např. data-citation)
function escapeHtmlAttr(str) {
  return String(str || "")
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

// Bezpečné kopírování citačního řetězce ČSN ISO 690
function copyCitationText(btnEl) {
  if (!btnEl) return;
  const citation = btnEl.dataset.citation || "";
  if (!citation) return;

  const markCopied = () => {
    const origHtml = btnEl.dataset.origHtml || btnEl.innerHTML;
    if (!btnEl.dataset.origHtml) btnEl.dataset.origHtml = origHtml;
    btnEl.innerHTML = "✓";
    btnEl.classList.add("bg-emerald-100", "text-emerald-900", "border-emerald-400");
    setTimeout(() => {
      btnEl.innerHTML = origHtml;
      btnEl.classList.remove("bg-emerald-100", "text-emerald-900", "border-emerald-400");
    }, 1800);
  };

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(citation).then(markCopied).catch(() => {
      try {
        const ta = document.createElement("textarea");
        ta.value = citation;
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
        markCopied();
      } catch (e) {}
    });
  } else {
    try {
      const ta = document.createElement("textarea");
      ta.value = citation;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      markCopied();
    } catch (e) {}
  }
}

// Dynamická lišta se zdrojem a citací aktuálně zvolené mapové / letecké vrstvy
function updateActiveMapSourceBar(layerKey) {
  const bar = document.getElementById("active-map-source-bar");
  if (!bar) return;

  const key = layerKey || (typeof currentHistoricalLayerKey !== "undefined" ? currentHistoricalLayerKey : "cadastre1834") || "cadastre1834";
  const lang = (window.currentLang && ["cs", "en", "de"].includes(window.currentLang)) ? window.currentLang : "cs";
  const t = {
    cs: {
      sourceLabel: "Zdroj aktivní vrstvy:",
      openSource: "Původní zdroj",
      lmsArchive: "Archiv ČÚZK (LMS)",
      wmsOrtho: "ČÚZK WMS-ORTOARCHIV",
      citationBtn: "Citace (ISO 690)",
      refsBtn: "Prameny"
    },
    en: {
      sourceLabel: "Active layer source:",
      openSource: "Original Source",
      lmsArchive: "ČÚZK Archive (LMS)",
      wmsOrtho: "ČÚZK WMS-ORTOARCHIV",
      citationBtn: "Citation (ISO 690)",
      refsBtn: "Sources"
    },
    de: {
      sourceLabel: "Quelle der aktiven Ebene:",
      openSource: "Originalquelle",
      lmsArchive: "ČÚZK-Archiv (LMS)",
      wmsOrtho: "ČÚZK WMS-ORTOARCHIV",
      citationBtn: "Zitat (ISO 690)",
      refsBtn: "Quellen"
    }
  }[lang];

  const mapItem = (typeof historicalMapsData !== "undefined" && Array.isArray(historicalMapsData))
    ? historicalMapsData.find(m => m.overlayKey === key || m.id === key)
    : null;
  const wmsMeta = (typeof wmsAerialLayerMeta !== "undefined") ? wmsAerialLayerMeta[key] : null;
  const lmsEntry = (wmsMeta && typeof aerialLmsArchiveData !== "undefined" && Array.isArray(aerialLmsArchiveData.years))
    ? aerialLmsArchiveData.years.find(y => String(y.year) === String(wmsMeta.year))
    : null;

  let layerTitle = key;
  let archiveCredit = "";
  let links = [];

  if (mapItem) {
    layerTitle = mapItem.title.includes(String(mapItem.year)) ? mapItem.title : `${mapItem.title} (${mapItem.year})`;
    archiveCredit = mapItem.archive || mapItem.author || "";
    if (Array.isArray(mapItem.sourceLinks) && mapItem.sourceLinks.length > 0) {
      links = mapItem.sourceLinks.map(sl => ({
        label: lang === "en" ? (sl.labelEn || sl.label) : (lang === "de" ? (sl.labelDe || sl.label) : sl.label),
        url: sl.url
      }));
    } else if (mapItem.externalUrl) {
      links.push({ label: t.openSource, url: mapItem.externalUrl });
    }
  } else if (wmsMeta) {
    const lbl = lang === "en" ? (wmsMeta.labelEn || wmsMeta.label) : (lang === "de" ? (wmsMeta.labelDe || wmsMeta.label) : wmsMeta.label);
    layerTitle = lbl.replace(/^✈️\s*/, "");
    archiveCredit = lmsEntry && lmsEntry.dlouhomilovFrame
      ? `ČÚZK – WMS-ORTOARCHIV & Archiv LMS (${lmsEntry.dlouhomilovFrame})`
      : "ČÚZK – WMS-ORTOARCHIV & Archiv LMS";
    if (lmsEntry && lmsEntry.dlouhomilovFrame && typeof aerialLmsArchiveData !== "undefined") {
      links.push({
        label: `${t.lmsArchive} ${wmsMeta.year}`,
        url: `${aerialLmsArchiveData.viewerBaseUrl}&idrastru=${lmsEntry.dlouhomilovFrame}&bz=${aerialLmsArchiveData.bzCoords.dlouhomilov}`
      });
    } else {
      links.push({ label: t.lmsArchive, url: "https://ags.cuzk.gov.cz/archiv/" });
    }
    links.push({
      label: t.wmsOrtho,
      url: "https://geoportal.cuzk.gov.cz/geoserver/wms_ortofoto_archiv/wms?SERVICE=WMS&REQUEST=GetCapabilities"
    });
  }

  let georefBadgeHtml = "";
  const warpedSpec = (typeof warpedMapsManifest !== "undefined" && warpedMapsManifest?.layers)
    ? warpedMapsManifest.layers[key]
    : null;
  if (warpedSpec) {
    const fmtM = (n) => (lang === "en" ? n.toFixed(1) : n.toFixed(1).replace(".", ","));
    const m = warpedSpec.metrics || {};
    let detailText = "";
    if (key === "orto1953") {
      detailText = { cs: "S-JTSK < 0,05 m", en: "S-JTSK < 0.05 m", de: "S-JTSK < 0,05 m" }[lang];
    } else if (key === "cadastre1834") {
      const cw = (typeof m.centralWebLoocvRmseM === "number") ? (lang === "en" ? m.centralWebLoocvRmseM.toFixed(2) : m.centralWebLoocvRmseM.toFixed(2).replace(".", ",")) : "0,34";
      detailText = {
        cs: `jádro LOOCV ${cw} m • 6 listů I–VI`,
        en: `center LOOCV ${cw} m • 6 sheets I–VI`,
        de: `Ortskern LOOCV ${cw} m • 6 Blätter I–VI`
      }[lang];
    } else if (key === "vojenske1_1764") {
      detailText = { cs: "TPS • 2 listy (011_M+007_M)", en: "TPS • 2 sheets (011_M+007_M)", de: "TPS • 2 Blätter (011_M+007_M)" }[lang];
    } else if (typeof m.loocvRmseM === "number") {
      detailText = `TPS • LOOCV ${fmtM(m.loocvRmseM)} m`;
    }
    if (detailText) {
      georefBadgeHtml = `<span class="px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-900 border border-emerald-300 font-bold text-[10px] shrink-0">✓ EPSG:3857 (${detailText})</span>`;
    }
  }

  bar.innerHTML = `
    <div class="flex flex-wrap items-center gap-x-2 gap-y-1 min-w-0">
      <span class="font-extrabold text-amber-950 flex items-center gap-1 shrink-0"><span>🏛️</span> ${t.sourceLabel}</span>
      <span class="font-semibold text-slate-800 truncate">${layerTitle}</span>
      ${archiveCredit ? `<span class="text-slate-500">• ${archiveCredit}</span>` : ""}
      ${georefBadgeHtml}
    </div>
    <div class="flex flex-wrap items-center gap-1.5">
      ${links.map(l => `
        <a href="${l.url}" target="_blank" rel="noopener noreferrer"
           class="px-2 py-0.5 font-bold rounded-md bg-blue-50 hover:bg-blue-100 text-blue-900 border border-blue-300 transition-colors inline-flex items-center gap-1">
          <span>🌐</span> <span>${l.label} ↗</span>
        </a>
      `).join("")}
      <button type="button" onclick="openLicenceModal()"
              class="px-2 py-0.5 font-bold rounded-md bg-amber-100 hover:bg-amber-200 text-amber-950 border border-amber-300 transition-colors inline-flex items-center gap-1 cursor-pointer">
        <span>📖</span> <span>${t.citationBtn}</span>
      </button>
      <a href="reference.html"
         class="px-2 py-0.5 font-semibold rounded-md bg-white hover:bg-amber-100 text-slate-800 border border-amber-300 transition-colors inline-flex items-center gap-1">
        <span>📚</span> <span>${t.refsBtn}</span>
      </a>
    </div>
  `;
}

// Změna průhlednosti aktivní historické mapy
function updateCadastreOpacity(val) {
  const numVal = parseFloat(val);
  const opacity = numVal / 100;
  const activeLayer = overlayLayers[currentHistoricalLayerKey];
  if (activeLayer) {
    activeLayer.setOpacity(opacity);
  }
  const label = document.getElementById("opacity-value-label");
  if (label) label.textContent = `${val}%`;
  const georefLabel = document.getElementById("georef-opacity-label");
  if (georefLabel) georefLabel.textContent = `${val}%`;
  const georefSlider = document.getElementById("georef-opacity-slider");
  if (georefSlider && String(georefSlider.value) !== String(val)) georefSlider.value = val;

  document.querySelectorAll(".blend-preset-btn").forEach(btn => {
    const match = (btn.dataset.preset === "modern" && numVal === 0) ||
                  (btn.dataset.preset === "blend" && numVal === 50) ||
                  (btn.dataset.preset === "historical" && numVal === 100);
    if (match) {
      btn.classList.add("bg-amber-800", "text-white");
      btn.classList.remove("bg-white", "text-slate-700");
    } else {
      btn.classList.remove("bg-amber-800", "text-white");
      btn.classList.add("bg-white", "text-slate-700");
    }
  });
}

// Rychlé předvolby prolínání map
function setBlendPreset(preset) {
  const slider = document.getElementById("cadastre-opacity-slider");
  let val = 75;
  if (preset === 'modern') val = 0;
  if (preset === 'blend') val = 50;
  if (preset === 'historical') val = 100;
  
  if (slider) slider.value = val;
  updateCadastreOpacity(val);

  document.querySelectorAll(".blend-preset-btn").forEach(btn => {
    if (btn.dataset.preset === preset) {
      btn.classList.add("bg-amber-800", "text-white");
      btn.classList.remove("bg-white", "text-slate-700");
    } else {
      btn.classList.remove("bg-amber-800", "text-white");
      btn.classList.add("bg-white", "text-slate-700");
    }
  });
}

// Inicializace vrstvy zvýraznění lokalit (jemný průhledný žlutý podkres Dlouhomilova a Benkova)
function initBuildingLayers() {
  overlayLayers.localityHighlights = L.layerGroup();
  updateLocalityHighlights(currentHistoricalLayerKey);
  overlayLayers.localityHighlights.addTo(map);

  // Zpětná kompatibilita
  overlayLayers.toponyms = overlayLayers.localityHighlights;
}

// Aktualizace a vykreslení reálných hranic katastrů (ČÚZK RÚIAN), osady Medelské a 3 opěrných bodů údolí
function updateLocalityHighlights(layerKey) {
  if (!overlayLayers.localityHighlights) overlayLayers.localityHighlights = L.layerGroup();
  overlayLayers.localityHighlights.clearLayers();

  const actualMapKey = layerKey || currentHistoricalLayerKey || "cadastre1834";
  const mapMeta = (typeof historicalMapsData !== "undefined")
    ? (historicalMapsData.find(m => m.overlayKey === actualMapKey || m.id === actualMapKey) || historicalMapsData.find(m => m.id === "cadastre1834"))
    : null;
  const toponyms = (mapMeta && mapMeta.toponyms) ? mapMeta.toponyms : {
    dlouhomilov: "Dlouhomilov",
    benkov: "Benkov",
    medelske: "Medelské"
  };
  const yearLabel = mapMeta ? mapMeta.year : "1834";

  // 1. Reálné katastrální hranice z ČÚZK RÚIAN (pokud jsou k dispozici)
  if (typeof valleyBoundariesData !== "undefined" && valleyBoundariesData.cadastralPolygons) {
    const dlPoly = valleyBoundariesData.cadastralPolygons.dlouhomilov;
    if (dlPoly && Array.isArray(dlPoly.rings)) {
      dlPoly.rings.forEach(ring => {
        L.polygon(ring, {
          color: "#b45309",
          weight: 2,
          dashArray: "6, 4",
          fillColor: "#facc15",
          fillOpacity: 0.05,
          interactive: true
        }).bindTooltip(`<strong>k.ú. Dlouhomilov (626643)</strong> (${yearLabel}: <em>${toponyms.dlouhomilov || "Dlouhomilov"}</em>)`, {
          sticky: true
        }).addTo(overlayLayers.localityHighlights);
      });
    }

    const bkPoly = valleyBoundariesData.cadastralPolygons.benkov;
    if (bkPoly && Array.isArray(bkPoly.rings)) {
      bkPoly.rings.forEach(ring => {
        L.polygon(ring, {
          color: "#4338ca",
          weight: 2,
          dashArray: "6, 4",
          fillColor: "#6366f1",
          fillOpacity: 0.06,
          interactive: true
        }).bindTooltip(`<strong>k.ú. Benkov u Dlouhomilova (626635)</strong> (${yearLabel}: <em>${toponyms.benkov || "Benkov"}</em>)`, {
          sticky: true
        }).addTo(overlayLayers.localityHighlights);
      });
    }

    if (Array.isArray(valleyBoundariesData.medelskePolygon)) {
      L.polygon(valleyBoundariesData.medelskePolygon, {
        color: "#0f766e",
        weight: 1.8,
        dashArray: "4, 4",
        fillColor: "#14b8a6",
        fillOpacity: 0.08,
        interactive: true
      }).bindTooltip(`<strong>Osada Medelské</strong> (${yearLabel}: <em>${toponyms.medelske || "Medelské / Dreihöfen"}</em>)`, {
        sticky: true
      }).addTo(overlayLayers.localityHighlights);
    }

    // 2. Klíčové krajinné body údolí (Kostel, Hrad Brníčko, Kaple Benkov)
    if (valleyBoundariesData.landmarks) {
      Object.entries(valleyBoundariesData.landmarks).forEach(([lmKey, lm]) => {
        const lmIcon = L.divIcon({
          className: "valley-landmark-marker",
          html: lmKey === "brnicko" ? "🏰" : "⛪",
          iconSize: [24, 24],
          iconAnchor: [12, 12]
        });
        const lmMarker = L.marker([lm.lat, lm.lng], { icon: lmIcon, zIndexOffset: -50 })
          .bindTooltip(`<strong>${lm.label}</strong><br><span class="text-[10px] text-amber-800">Referenční bod údolí</span>`, {
            direction: "top",
            offset: [0, -8]
          });
        if (lm.houseId) {
          lmMarker.on("click", () => {
            openHouseDetail(lm.houseId, true, false);
          });
        }
        overlayLayers.localityHighlights.addLayer(lmMarker);
      });
    }
    return;
  }

  // Záložní obdélníky pro případ chybějících RÚIAN polygonů
  const getHighlightStyle = (color = "#ca8a04") => ({
    color,
    weight: 1.5,
    dashArray: "4, 4",
    fillColor: color,
    fillOpacity: 0.08,
    interactive: true
  });

  const boundsDlouhomilov = (typeof computeLocalityBounds === "function")
    ? computeLocalityBounds(actualMapKey, "dlouhomilov")
    : [[49.9040, 16.9875], [49.9158, 16.9965]];
  L.rectangle(boundsDlouhomilov, getHighlightStyle("#b45309"))
    .bindTooltip(`<strong>Dlouhomilov</strong> (${yearLabel}: <em>${toponyms.dlouhomilov || "Dlouhomilov"}</em>)`, { sticky: true })
    .addTo(overlayLayers.localityHighlights);

  const boundsBenkov = (typeof computeLocalityBounds === "function")
    ? computeLocalityBounds(actualMapKey, "benkov")
    : [[49.8895, 17.0185], [49.8955, 17.0272]];
  L.rectangle(boundsBenkov, getHighlightStyle("#4338ca"))
    .bindTooltip(`<strong>Benkov</strong> (${yearLabel}: <em>${toponyms.benkov || "Benkov"}</em>)`, { sticky: true })
    .addTo(overlayLayers.localityHighlights);

  const boundsMedelske = (typeof computeLocalityBounds === "function")
    ? computeLocalityBounds(actualMapKey, "medelske")
    : [[49.8992, 16.9918], [49.9045, 16.9978]];
  L.rectangle(boundsMedelske, getHighlightStyle("#0f766e"))
    .bindTooltip(`<strong>Medelské</strong> (${yearLabel}: <em>${toponyms.medelske || "Medelské"}</em>)`, { sticky: true })
    .addTo(overlayLayers.localityHighlights);
}

// Rychlý skok kamery na vybranou část údolí
function jumpToValleyLocality(locKey) {
  if (!map || typeof valleyBoundariesData === "undefined" || !valleyBoundariesData.localityViews) return;
  const view = valleyBoundariesData.localityViews[locKey];
  if (!view) return;

  if (view.bounds) {
    const maxZoom = locKey === "valley" ? 14 : 17;
    map.flyToBounds(view.bounds, { padding: [24, 24], maxZoom, duration: 0.6 });
  } else if (view.center) {
    map.flyTo(view.center, view.zoom || 16, { duration: 0.6 });
  }

  document.querySelectorAll(".valley-jump-btn").forEach(btn => {
    if (btn.dataset.localityBtn === locKey) {
      btn.classList.add("bg-amber-800", "text-white", "border-amber-800");
      btn.classList.remove("bg-white", "text-slate-800", "border-amber-300");
    } else {
      btn.classList.remove("bg-amber-800", "text-white", "border-amber-800");
      btn.classList.add("bg-white", "text-slate-800", "border-amber-300");
    }
  });
}

// Přepínání viditelnosti podkresu lokalit
function toggleLocalityHighlights(isChecked) {
  const layer = overlayLayers.localityHighlights;
  if (!layer || typeof map === "undefined" || !map) return;
  if (isChecked) {
    if (!map.hasLayer(layer)) map.addLayer(layer);
  } else {
    if (map.hasLayer(layer)) map.removeLayer(layer);
  }
}

// Zpětná kompatibilita
function toggleToponymLayer(isChecked) {
  toggleLocalityHighlights(isChecked);
}

function toggleBuildingLayer(layerKey, isChecked) {
  // Budovy byly odstraněny na přání uživatele pro čisté zobrazení originální mapy
}

// Přepínání základních map (Base layers)
function switchMapLayer(layerKey) {
  Object.values(baseLayers).forEach(layer => {
    if (map.hasLayer(layer)) {
      map.removeLayer(layer);
    }
  });

  if (baseLayers[layerKey]) {
    baseLayers[layerKey].addTo(map);
  }

  // Ujistíme se, že aktivní historická vrstva zůstane nahoře (mimo režim Vedle sebe)
  const activeHist = overlayLayers[currentHistoricalLayerKey];
  if (activeHist && !georefState?.isSideBySide && !map.hasLayer(activeHist)) {
    activeHist.addTo(map);
  }

  document.querySelectorAll(".map-layer-btn").forEach(btn => {
    if (btn.dataset.layer === layerKey) {
      btn.classList.add("bg-amber-800", "text-white", "shadow-inner");
      btn.classList.remove("bg-white", "text-slate-700");
    } else {
      btn.classList.remove("bg-amber-800", "text-white", "shadow-inner");
      btn.classList.add("bg-white", "text-slate-700");
    }
  });
}

// Filtrování památkově chráněných stavení
function filterHeritageHouses(filterType) {
  currentHeritageFilter = filterType;
  
  document.querySelectorAll(".heritage-filter-btn").forEach(btn => {
    if (btn.dataset.filter === filterType) {
      btn.classList.add("bg-amber-800", "text-white");
      btn.classList.remove("bg-white", "text-slate-700");
    } else {
      btn.classList.remove("bg-amber-800", "text-white");
      btn.classList.add("bg-white", "text-slate-700");
    }
  });

  let filtered = housesData;
  if (filterType === 'heritage') {
    filtered = housesData.filter(h => h.isHeritage);
  }
  renderHouseCards(filtered);
}

// Pomocná funkce pro vygenerování správné URL do NPÚ Památkového katalogu
function getNpuUrl(house) {
  if (house.npuDirectUrl) {
    return house.npuDirectUrl;
  }
  if (house.isHeritage && house.uskpNumber && !house.uskpNumber.startsWith("VPZ")) {
    return `https://pamatkovykatalog.cz/soupis-pamatek?uskp=${encodeURIComponent(house.uskpNumber)}`;
  }
  return `https://pamatkovykatalog.cz/soupis-pamatek?obec=Dlouhomilov&cp=${encodeURIComponent(house.number)}`;
}

// ==========================================================================
// INTERAKTIVNÍ ARCHIVNÍ PROHLÍŽEČ (LIGHTBOX VIEWER) PRO SCANY A FOTOGRAFIE
// ==========================================================================

function openArchiveViewer(scanUrl, title, sourceInfo, localPath, directArchiveUrl) {
  const modal = document.getElementById("archive-viewer-modal");
  const img = document.getElementById("viewer-scan-img");
  const titleEl = document.getElementById("viewer-doc-title");
  const sourceEl = document.getElementById("viewer-doc-source");
  const pathEl = document.getElementById("viewer-file-path");
  const downloadBtn = document.getElementById("viewer-download-btn");
  const archiveLinkBtn = document.getElementById("viewer-archive-link");
  const archiveNameEl = document.getElementById("viewer-archive-name");

  if (!modal || !img) return;

  let primaryScanUrl = scanUrl ? String(scanUrl).split(",")[0].trim() : "";
  if (primaryScanUrl.startsWith("assets/archives/cp1/medelske_cp1_") || primaryScanUrl.startsWith("assets/archives/cp1/1921-Dlouhomilov_1")) {
    primaryScanUrl = primaryScanUrl.replace("assets/archives/cp1/", "assets/archives/medelske_cp1/");
  }

  currentArchiveDoc = { scanUrl: primaryScanUrl, title, sourceInfo, localPath, directArchiveUrl };
  currentScanZoom = 1.0;
  img.style.transform = `scale(${currentScanZoom})`;
  img.src = primaryScanUrl;

  if (titleEl) titleEl.textContent = title || "Archivní dokument";
  if (sourceEl) sourceEl.textContent = sourceInfo || "Zemský archiv v Opavě / SOkA Šumperk";
  if (pathEl) pathEl.textContent = localPath || primaryScanUrl;
  if (downloadBtn) downloadBtn.href = primaryScanUrl;

  // Určení odkazu na online digitální archiv
  let portalUrl = directArchiveUrl;
  let portalName = "Digitální badatelna";

  const lowerSrc = (sourceInfo + " " + (localPath || scanUrl)).toLowerCase();
  if (portalUrl) {
    const lowerUrl = portalUrl.toLowerCase();
    if (lowerUrl.includes("mza.cz/aron")) {
      portalName = "🏛️ MZA Brno – ARON";
    } else if (lowerUrl.includes("sources.cms.flu.cas.cz")) {
      portalName = "🏛️ Czech Medieval Sources (AV ČR)";
    } else if (lowerUrl.includes("archives.cz")) {
      portalName = "🏛️ DigiArchiv ZAO (Vademecum)";
    } else if (lowerUrl.includes("cenia.cz")) {
      portalName = "🏛️ CENIA – Historická ortofotomapa (CC-BY 4.0)";
    } else if (lowerUrl.includes("cuzk.gov.cz") || lowerUrl.includes("cuzk.cz")) {
      if (lowerUrl.includes("typ=lms")) {
        portalName = "🏛️ Archiv ČÚZK (LMS)";
      } else if (lowerUrl.includes("wms_ortofoto_archiv")) {
        portalName = "🏛️ ČÚZK – WMS-ORTOARCHIV";
      } else {
        portalName = "🏛️ Geoportál ÚAZK ČÚZK";
      }
    } else if (lowerUrl.includes("chartae-antiquae.cz")) {
      portalName = "🏛️ Chartae Antiquae (PřF UK / VÚGTK)";
    } else {
      portalName = "🏛️ Digitální badatelna";
    }
  } else {
    if (lowerSrc.includes("cms_kp") || lowerSrc.includes("libri citationum") || lowerSrc.includes("půhon")) {
      portalUrl = "https://sources.cms.flu.cas.cz/";
      portalName = "🏛️ Czech Medieval Sources (AV ČR)";
    } else if (lowerSrc.includes("mza_a3_zdo") || lowerSrc.includes("zemské desky")) {
      portalUrl = "https://www.mza.cz/aron/apu/d6c753db-2245-43bb-8311-59e640135577";
      portalName = "🏛️ MZA Brno – ARON";
    } else if (lowerSrc.includes("mza") || lowerSrc.includes("aron") || lowerSrc.includes("lánov") || lowerSrc.includes("rektifikač") || lowerSrc.includes("mza_d1_d2")) {
      portalUrl = "https://www.mza.cz/aron/apu/d4a61780-da2e-4276-89f2-5d47d83230ba";
      portalName = "🏛️ MZA Brno – ARON";
    } else if (lowerSrc.includes("zao") || lowerSrc.includes("matrik") || lowerSrc.includes("sčítání") || lowerSrc.includes("scitani") || lowerSrc.includes("zábřeh") || lowerSrc.includes("opav")) {
      portalUrl = "https://vademecum.archives.cz/vademecum/";
      portalName = "🏛️ DigiArchiv ZAO (Vademecum)";
    } else if (lowerSrc.includes("cenia")) {
      portalUrl = "https://gis.cenia.cz/mapcache/ortofotomapa_historicka/wms?SERVICE=WMS&REQUEST=GetCapabilities";
      portalName = "🏛️ CENIA – Historická ortofotomapa (CC-BY 4.0)";
    } else if (lowerSrc.includes("lms") || lowerSrc.includes("wms-ortoarchiv") || lowerSrc.includes("orto")) {
      portalUrl = "https://ags.cuzk.gov.cz/archiv/";
      portalName = "🏛️ Archiv ČÚZK (LMS)";
    } else if (lowerSrc.includes("čúzk") || lowerSrc.includes("úazk") || lowerSrc.includes("cuzk") || lowerSrc.includes("katastr") || lowerSrc.includes("smo")) {
      portalUrl = "https://ags.cuzk.cz/archiv/openmap.html?typ=skicm&idrastru=MOR102618340";
      portalName = "🏛️ Geoportál ÚAZK ČÚZK";
    } else if (lowerSrc.includes("chartae") || lowerSrc.includes("sbírka") || lowerSrc.includes("müller") || lowerSrc.includes("vojensk")) {
      portalUrl = "https://chartae-antiquae.cz/";
      portalName = "🏛️ Chartae Antiquae (PřF UK / VÚGTK)";
    } else if (lowerSrc.includes("npú") || lowerSrc.includes("npu") || lowerSrc.includes("památk") || lowerSrc.includes("iispp")) {
      portalUrl = "https://pamatkovykatalog.cz/";
      portalName = "🏛️ Památkový katalog NPÚ";
    } else {
      portalUrl = "https://vademecum.archives.cz/vademecum/";
      portalName = "🏛️ Digitální archiv";
    }
  }

  if (archiveLinkBtn) {
    archiveLinkBtn.href = portalUrl;
    archiveLinkBtn.title = `Otevřít originál v digitálním archivu (${portalName})`;
  }
  if (archiveNameEl) {
    archiveNameEl.textContent = portalName;
  }

  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeArchiveViewer() {
  const modal = document.getElementById("archive-viewer-modal");
  if (modal) {
    modal.classList.add("hidden");
    document.body.style.overflow = "";
  }
}

function zoomArchiveScan(factor) {
  const img = document.getElementById("viewer-scan-img");
  if (!img) return;
  currentScanZoom = Math.min(Math.max(currentScanZoom * factor, 0.5), 4.0);
  img.style.transform = `scale(${currentScanZoom})`;
}

function resetZoomArchiveScan() {
  const img = document.getElementById("viewer-scan-img");
  if (!img) return;
  currentScanZoom = 1.0;
  img.style.transform = `scale(1)`;
}

// ==========================================================================
// MODUL PROPOJOVÁNÍ A ZTOTOŽŇOVÁNÍ OSOB (RECORD LINKAGE & SMART MATCHER)
// ==========================================================================

const STORAGE_KEY_PERSON_LINKS = "dlouhomilov_person_links_v2";
const STORAGE_KEY_CUSTOM_PEOPLE = "dlouhomilov_custom_people_v2";
const STORAGE_KEY_DISMISSED_PAIRS = "dlouhomilov_dismissed_pairs_v2";
const STORAGE_KEY_UNLINKED_RECORDS = "dlouhomilov_unlinked_records_v2";

let autoLinkedPeopleById = new Map();
let currentUnifiedSubFilter = "all"; // "all" | "3plus" | "moved" | "parish"
let currentUnifiedPage = 1;
const UNIFIED_PAGE_SIZE = 50;

let personLinksState = {
  // Mapování: censusRecordId -> personId
  recordToPerson: {},
  // Vlastní sjednocené osoby vytvořené uživatelem
  customPeople: {},
  // Ignorované / zamítnuté dvojice návrhů: Set klíčů "idA:idB"
  dismissedPairs: new Set(),
  // Ručně odpojené záznamy z automaticky sjednocených osob
  unlinkedRecords: new Set()
};

let currentManualTargetMode = "person"; // "person" | "record"

// Inicializace stavu propojení osob (nejprve censusLinksData, pak kurátorované peopleData, pak LocalStorage)
function initPersonLinkage(forceReset = false) {
  autoLinkedPeopleById = new Map();
  personLinksState = {
    recordToPerson: {},
    customPeople: {},
    dismissedPairs: new Set(),
    unlinkedRecords: new Set()
  };

  const curatedIds = new Set(typeof peopleData !== "undefined" ? peopleData.map(p => p.id) : []);

  // 1. Automaticky sjednocené osoby stupně doc z data/census_links.js
  if (typeof censusLinksData !== "undefined" && Array.isArray(censusLinksData.linkedPeople)) {
    censusLinksData.linkedPeople.forEach(lp => {
      autoLinkedPeopleById.set(lp.id, lp);
      if (!curatedIds.has(lp.id) && Array.isArray(lp.linkedCensusIds)) {
        lp.linkedCensusIds.forEach(cenId => {
          personLinksState.recordToPerson[cenId] = lp.id;
        });
      }
    });
  }

  // 2. Načtení kurátorovaných profilů z peopleData (mají přednost pro svá linkedCensusIds)
  if (typeof peopleData !== "undefined") {
    peopleData.forEach(p => {
      const autoLp = autoLinkedPeopleById.get(p.id);
      const ids = (p.linkedCensusIds && Array.isArray(p.linkedCensusIds)) ? p.linkedCensusIds : [];
      ids.forEach(cenId => {
        personLinksState.recordToPerson[cenId] = p.id;
      });
      if (autoLp && Array.isArray(autoLp.linkedCensusIds)) {
        autoLp.linkedCensusIds.forEach(cenId => {
          if (!personLinksState.recordToPerson[cenId]) {
            personLinksState.recordToPerson[cenId] = p.id;
          }
        });
      }
    });
  }

  if (forceReset) {
    try {
      localStorage.removeItem(STORAGE_KEY_PERSON_LINKS);
      localStorage.removeItem(STORAGE_KEY_CUSTOM_PEOPLE);
      localStorage.removeItem(STORAGE_KEY_DISMISSED_PAIRS);
      localStorage.removeItem(STORAGE_KEY_UNLINKED_RECORDS);
    } catch (e) {
      console.warn("LocalStorage clear error:", e);
    }
    return;
  }

  // 3. Načtení uživatelských úprav z LocalStorage
  try {
    const savedCustom = localStorage.getItem(STORAGE_KEY_CUSTOM_PEOPLE);
    if (savedCustom) {
      personLinksState.customPeople = JSON.parse(savedCustom);
    }

    const savedLinks = localStorage.getItem(STORAGE_KEY_PERSON_LINKS);
    if (savedLinks) {
      const parsedLinks = JSON.parse(savedLinks);
      Object.assign(personLinksState.recordToPerson, parsedLinks);
    }

    const savedUnlinked = localStorage.getItem(STORAGE_KEY_UNLINKED_RECORDS);
    if (savedUnlinked) {
      personLinksState.unlinkedRecords = new Set(JSON.parse(savedUnlinked));
      personLinksState.unlinkedRecords.forEach(rid => {
        delete personLinksState.recordToPerson[rid];
      });
    }

    const savedDismissed = localStorage.getItem(STORAGE_KEY_DISMISSED_PAIRS);
    if (savedDismissed) {
      personLinksState.dismissedPairs = new Set(JSON.parse(savedDismissed));
    }
  } catch (e) {
    console.warn("Chyba při načítání spojení z LocalStorage:", e);
  }
}

// Uložení stavu propojení do LocalStorage
function persistPersonLinkage() {
  try {
    localStorage.setItem(STORAGE_KEY_PERSON_LINKS, JSON.stringify(personLinksState.recordToPerson));
    localStorage.setItem(STORAGE_KEY_CUSTOM_PEOPLE, JSON.stringify(personLinksState.customPeople));
    localStorage.setItem(STORAGE_KEY_DISMISSED_PAIRS, JSON.stringify([...personLinksState.dismissedPairs]));
    localStorage.setItem(STORAGE_KEY_UNLINKED_RECORDS, JSON.stringify([...personLinksState.unlinkedRecords]));
  } catch (e) {
    console.warn("Chyba při ukládání do LocalStorage:", e);
  }
}

// Získání sjednocené osoby pro daný sčítací záznam
function getLinkedPersonForRecord(censusRecordId) {
  const personId = personLinksState.recordToPerson[censusRecordId];
  if (!personId) return null;

  // 1. Hledat v peopleData
  if (typeof peopleData !== "undefined") {
    const p = peopleData.find(item => item.id === personId);
    if (p) return p;
  }

  // 2. Hledat v automaticky sjednocených osobách (censusLinksData)
  if (autoLinkedPeopleById.has(personId)) {
    return autoLinkedPeopleById.get(personId);
  }

  // 3. Hledat ve vlastních vytvořených osobách
  if (personLinksState.customPeople[personId]) {
    return personLinksState.customPeople[personId];
  }

  return null;
}

// Získání všech archivních zápisů pro danou osobu (seřazeno chronologicky)
function getLinkedRecordsForPerson(personId) {
  if (typeof censusRegistryData === "undefined") return [];

  const recordIdSet = new Set();
  Object.entries(personLinksState.recordToPerson).forEach(([recId, pId]) => {
    if (pId === personId) {
      recordIdSet.add(recId);
    }
  });

  return censusRegistryData
    .filter(r => recordIdSet.has(r.id))
    .sort((a, b) => (a.censusYear || 0) - (b.censusYear || 0));
}

// Získání seznamu všech sjednocených osob (peopleData + censusLinksData + customPeople)
function getAllUnifiedPeople() {
  const people = [];
  const seenIds = new Set();

  if (typeof peopleData !== "undefined") {
    peopleData.forEach(p => {
      seenIds.add(p.id);
      const linked = getLinkedRecordsForPerson(p.id);
      const autoMeta = autoLinkedPeopleById.get(p.id);
      people.push({
        ...p,
        certainty: "doc",
        housesVisited: autoMeta ? autoMeta.housesVisited : [],
        variantNames: autoMeta ? autoMeta.variantNames : (p.aliases || [p.name]),
        parishEvents: autoMeta ? autoMeta.parishEvents : [],
        linkedFamilyLinks: autoMeta ? autoMeta.linkedFamilyLinks : null,
        linkedRecords: linked,
        isCustom: false
      });
    });
  }

  autoLinkedPeopleById.forEach(lp => {
    if (seenIds.has(lp.id)) return;
    seenIds.add(lp.id);
    const linked = getLinkedRecordsForPerson(lp.id);
    people.push({
      ...lp,
      linkedRecords: linked,
      isCustom: false
    });
  });

  Object.values(personLinksState.customPeople).forEach(cp => {
    if (seenIds.has(cp.id)) return;
    seenIds.add(cp.id);
    const linked = getLinkedRecordsForPerson(cp.id);
    people.push({
      ...cp,
      linkedRecords: linked,
      isCustom: true
    });
  });

  return people;
}

// Normalizace jména pro porovnávání (historický pravopis, w->v, rz->ř, aliasy křestních jmen)
function normalizeForPersonMatching(name) {
  if (!name) return "";
  let s = name.toString().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  
  // Fonetické a pravopisné záměny 18.–19. století
  s = s.replace(/w/g, 'v');
  s = s.replace(/rz/g, 'r');
  s = s.replace(/th/g, 't');
  s = s.replace(/c[zž]/g, 'c');
  
  // Standardizace křestních jmen (německé / latinské / české tvary)
  s = s.replace(/\bjohann(es)?\b/g, 'jan');
  s = s.replace(/\bkarl\b/g, 'karel');
  s = s.replace(/\bjoseph\b/g, 'josef');
  s = s.replace(/\baloisius\b/g, 'alois');
  s = s.replace(/\bfranz\b/g, 'frantisek');
  s = s.replace(/\bgeorg\b/g, 'jiri');
  s = s.replace(/\banton(ius)?\b/g, 'antonin');
  s = s.replace(/\badalbert\b/g, 'vojtech');
  s = s.replace(/\bignaz\b/g, 'hynek');
  s = s.replace(/\bmathias\b/g, 'matej');
  s = s.replace(/\bwendelin\b/g, 'vendelin');
  s = s.replace(/\bmagdalena\b/g, 'magdalena');
  s = s.replace(/\belisabeth\b/g, 'alzbeta');
  s = s.replace(/\banna\b/g, 'anna');
  s = s.replace(/\bmar(ia|ie)\b/g, 'marie');

  // Odstranění ženských přechylovacích přípon pro srovnání kmenů
  s = s.replace(/ov(a|e)\b/g, '');

  return s.replace(/\s+/g, ' ').trim();
}

// Extrakce 4místného roku z libovolného textového data
function extractBirthYearFromText(str) {
  if (!str) return null;
  const m = str.toString().match(/\b(1[789]\d\d|19[012]\d)\b/);
  return m ? parseInt(m[1], 10) : null;
}

// Výpočet shody a důvodů pro návrh ztotožnění dvou záznamů
function computePersonSimilarity(recA, recB) {
  const normA = normalizeForPersonMatching(recA.fullName);
  const normB = normalizeForPersonMatching(recB.fullName);
  
  const yearA = extractBirthYearFromText(recA.birthDate);
  const yearB = extractBirthYearFromText(recB.birthDate);
  
  const sameHouse = (recA.houseNumber && recB.houseNumber && recA.houseNumber === recB.houseNumber);
  const sameName = (normA === normB && normA.length > 0);
  
  let score = 0;
  const reasons = [];

  if (sameName) {
    score += 50;
    reasons.push(`Shoda jména po fonetické normalizaci: "${recA.fullName}" ↔ "${recB.fullName}"`);
  } else if (normA.includes(normB) || normB.includes(normA)) {
    score += 35;
    reasons.push(`Částečná shoda jména: "${recA.fullName}" ↔ "${recB.fullName}"`);
  }

  if (sameHouse) {
    score += 30;
    reasons.push(`Shodné stavení čp. ${recA.houseNumber}`);
  }

  if (yearA && yearB) {
    const diff = Math.abs(yearA - yearB);
    if (diff === 0) {
      score += 30;
      reasons.push(`Přesná shoda roku narození (${yearA})`);
    } else if (diff <= 1) {
      score += 20;
      reasons.push(`Velmi blízký rok narození (${yearA} vs ${yearB}, odchylka 1 rok)`);
    } else if (diff <= 3) {
      score += 10;
      reasons.push(`Přibližný rok narození (${yearA} vs ${yearB})`);
    }
  }

  return {
    score: Math.min(score, 100),
    isMatch: (sameName && sameHouse && (score >= 80 || (yearA && yearB && Math.abs(yearA - yearB) <= 2))),
    reasons,
    yearA,
    yearB
  };
}

// Generování automatických návrhů na propojení stupně prob z data/census_links.js
function getAutoLinkSuggestions() {
  if (typeof censusRegistryData === "undefined") return [];

  const byId = new Map(censusRegistryData.map(r => [r.id, r]));
  const suggestions = [];

  if (typeof censusLinksData !== "undefined" && Array.isArray(censusLinksData.candidateSuggestions)) {
    censusLinksData.candidateSuggestions.forEach(s => {
      const a = byId.get(s.recordIdA);
      const b = byId.get(s.recordIdB);
      if (!a || !b) return;

      const personA = personLinksState.recordToPerson[a.id];
      const personB = personLinksState.recordToPerson[b.id];
      if (personA && personB && personA === personB) return;

      const pairKey = [a.id, b.id].sort().join(':');
      if (personLinksState.dismissedPairs.has(pairKey)) return;

      suggestions.push({
        recordA: a,
        recordB: b,
        pairKey,
        score: s.score,
        relationType: s.relationType,
        badgeLabel: s.badgeLabel || `⭐ Shoda ${s.score}% (prob)`,
        reasons: s.reasons || [],
        yearA: extractBirthYearFromText(a.birthDate),
        yearB: extractBirthYearFromText(b.birthDate)
      });
    });
    return suggestions;
  }

  return suggestions;
}

// Spojení dvou záznamů nebo záznamu k existující osobě
function linkCensusRecords(recordIdA, targetPersonIdOrRecordId) {
  if (typeof censusRegistryData === "undefined") return;

  const recA = censusRegistryData.find(r => r.id === recordIdA);
  if (!recA) return;

  let targetPersonId = null;

  // Zjistit, zda je cíl existující profil v peopleData, autoLinkedPeopleById nebo customPeople
  const isExistingProfile =
    (typeof peopleData !== "undefined" && peopleData.some(p => p.id === targetPersonIdOrRecordId)) ||
    autoLinkedPeopleById.has(targetPersonIdOrRecordId) ||
    Boolean(personLinksState.customPeople[targetPersonIdOrRecordId]);

  if (isExistingProfile) {
    targetPersonId = targetPersonIdOrRecordId;
  } else {
    // Cíl je jiný census záznam
    const recB = censusRegistryData.find(r => r.id === targetPersonIdOrRecordId);
    if (!recB) return;

    // Pokud už jeden z nich má profil, připojíme druhý k němu
    const existingPersonA = personLinksState.recordToPerson[recA.id];
    const existingPersonB = personLinksState.recordToPerson[recB.id];

    if (existingPersonA) {
      targetPersonId = existingPersonA;
    } else if (existingPersonB) {
      targetPersonId = existingPersonB;
    } else {
      // Vytvoříme novou sjednocenou osobu
      const birthY = extractBirthYearFromText(recA.birthDate) || extractBirthYearFromText(recB.birthDate) || "neuvedeno";
      targetPersonId = `p_custom_${recA.id}_${recB.id}`;
      
      const newPerson = {
        id: targetPersonId,
        name: recA.fullName !== recB.fullName ? `${recA.fullName} / ${recB.fullName}` : recA.fullName,
        birthYear: birthY.toString(),
        lifeSpan: birthY !== "neuvedeno" ? `*${birthY}` : "19. století",
        houseNumber: recA.houseNumber || recB.houseNumber || "-",
        houseId: recA.houseId || recB.houseId || `cp${recA.houseNumber || '29'}`,
        categoryKey: recA.categoryKey || recB.categoryKey || "grunt",
        categoryLabel: recA.categoryLabel || recB.categoryLabel || "Sjednocená osoba",
        categoryIcon: recA.categoryIcon || recB.categoryIcon || "👤",
        categoryBadgeClass: recA.categoryBadgeClass || recB.categoryBadgeClass || "bg-amber-100 text-amber-950 border-amber-300",
        role: recA.occupation || recB.occupation || "Obyvatel Dlouhomilova",
        biography: `Sjednocený profil vytvořený ze záznamů sčítání lidu (${recA.censusYear} a ${recB.censusYear}).`,
        isCustom: true,
        events: []
      };

      personLinksState.customPeople[targetPersonId] = newPerson;
    }
  }

  // Přiřadit oba záznamy k dané osobě
  personLinksState.unlinkedRecords.delete(recA.id);
  personLinksState.recordToPerson[recA.id] = targetPersonId;
  if (!isExistingProfile) {
    personLinksState.unlinkedRecords.delete(targetPersonIdOrRecordId);
    personLinksState.recordToPerson[targetPersonIdOrRecordId] = targetPersonId;
  }

  persistPersonLinkage();
  refreshAllInhabitantViews();
}

// Odpojení sčítacího záznamu od osoby
function unlinkCensusRecord(recordId) {
  if (personLinksState.recordToPerson[recordId]) {
    const personId = personLinksState.recordToPerson[recordId];
    delete personLinksState.recordToPerson[recordId];
    personLinksState.unlinkedRecords.add(recordId);

    // Pokud je to custom osoba a už nemá žádné záznamy, odstranit ji
    const remaining = getLinkedRecordsForPerson(personId);
    if (remaining.length === 0 && personLinksState.customPeople[personId]) {
      delete personLinksState.customPeople[personId];
    }

    persistPersonLinkage();
    refreshAllInhabitantViews();

    // Pokud je otevřen person modal pro tuto osobu, překreslit jeho záznamy
    if (currentPersonId === personId) {
      openPersonModal(personId);
    }
  }
}

// Propojení všech doporučených párů jedním kliknutím
function linkAllSuggestedPairs() {
  const suggestions = getAutoLinkSuggestions();
  if (suggestions.length === 0) {
    alert("Nebyly nalezeny žádné další automatické návrhy na propojení.");
    return;
  }

  suggestions.forEach(s => {
    linkCensusRecords(s.recordA.id, s.recordB.id);
  });

  renderLinkerSuggestions();
  renderLinkerManageTab();
  alert(`Úspěšně propojeno ${suggestions.length} dvojic záznamů jako sjednocené osoby!`);
}

// Zamítnutí automatického návrhu
function dismissSuggestion(idA, idB) {
  const pairKey = [idA, idB].sort().join(':');
  personLinksState.dismissedPairs.add(pairKey);
  persistPersonLinkage();
  renderLinkerSuggestions();
}

// Obnovení všech spojení do původního výchozího stavu
function resetAllPersonLinksToDefault() {
  if (confirm("Opravdu chcete resetovat všechna spojení osob na výchozí stav? Vaše vlastní úpravy budou zrušeny.")) {
    initPersonLinkage(true);
    refreshAllInhabitantViews();
    renderLinkerSuggestions();
    renderLinkerManageTab();
    alert("Spojení osob byla úspěšně obnovena na výchozí hodnoty.");
  }
}

// Export spojení do formátu JSON
function exportPersonLinksJson() {
  const exportData = {
    appName: "Dlouhomilov Record Linkage",
    timestamp: new Date().toISOString(),
    recordToPerson: personLinksState.recordToPerson,
    customPeople: personLinksState.customPeople
  };

  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportData, null, 2));
  const downloadAnchor = document.createElement('a');
  downloadAnchor.setAttribute("href", dataStr);
  downloadAnchor.setAttribute("download", "dlouhomilov_person_links.json");
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
}

// Překreslení všech zobrazení obyvatel
function refreshAllInhabitantViews() {
  if (typeof applyRegistryFilters === "function") {
    applyRegistryFilters();
  } else {
    renderCensusRegistryTable();
  }
  renderUnifiedPeopleTable();
  const unifiedLabel = document.getElementById("view-mode-unified-label");
  if (unifiedLabel) {
    const unifiedCount = getAllUnifiedPeople().filter(p => p.linkedRecords.length > 0).length;
    unifiedLabel.textContent = `Sjednocené osoby (${unifiedCount})`;
  }
  const probBtnLabel = document.getElementById("unified-prob-btn-label");
  if (probBtnLabel) {
    probBtnLabel.textContent = `Návrhy ke kontrole prob (${getAutoLinkSuggestions().length})`;
  }
}

// ==========================================================================
// MODÁL PROPOJOVÁNÍ OSOB – OVLÁDÁNÍ A ZÁLOŽKY
// ==========================================================================

function openPersonLinkerModal(preselectedRecordId = null) {
  const modal = document.getElementById("person-linker-modal");
  if (!modal) return;

  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";

  if (preselectedRecordId) {
    switchLinkerTab('manual');
    renderLinkerManualTab(preselectedRecordId);
  } else {
    switchLinkerTab('suggestions');
  }
}

function closePersonLinkerModal() {
  const modal = document.getElementById("person-linker-modal");
  if (modal) {
    modal.classList.add("hidden");
    document.body.style.overflow = "";
  }
}

function switchLinkerTab(tabName) {
  const tabs = ['suggestions', 'manual', 'manage'];
  tabs.forEach(t => {
    const btn = document.getElementById(`linker-tab-btn-${t}`);
    const view = document.getElementById(`linker-tab-${t}`);
    if (t === tabName) {
      btn?.classList.add("bg-white", "border-t", "border-l", "border-r", "border-amber-300", "text-amber-950", "shadow-2xs");
      btn?.classList.remove("text-slate-600", "hover:bg-white/60");
      view?.classList.remove("hidden");
    } else {
      btn?.classList.remove("bg-white", "border-t", "border-l", "border-r", "border-amber-300", "text-amber-950", "shadow-2xs");
      btn?.classList.add("text-slate-600", "hover:bg-white/60");
      view?.classList.add("hidden");
    }
  });

  if (tabName === 'suggestions') renderLinkerSuggestions();
  if (tabName === 'manual') renderLinkerManualTab();
  if (tabName === 'manage') renderLinkerManageTab();
}

// Vykreslení automatických návrhů v modálu
function renderLinkerSuggestions() {
  const container = document.getElementById("linker-suggestions-container");
  const countBadge = document.getElementById("linker-suggestions-count");
  if (!container) return;

  const suggestions = getAutoLinkSuggestions();
  if (countBadge) countBadge.textContent = suggestions.length;

  if (suggestions.length === 0) {
    container.innerHTML = `
      <div class="p-8 text-center bg-amber-50/50 rounded-xl border border-amber-200 space-y-2">
        <span class="text-3xl">🎉</span>
        <p class="font-bold text-slate-800 text-sm">Všechny identifikovatelné osoby jsou již propojeny!</p>
        <p class="text-xs text-slate-500">Nebyly nalezeny žádné další nezpracované shody. Můžete použít záložku <strong>Ruční spojení</strong> pro specifická spojení.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = suggestions.map(s => {
    const typeColor = s.relationType === 'candidate_marriage'
      ? 'bg-pink-100 text-pink-900 border-pink-300'
      : (s.relationType === 'candidate_variant'
        ? 'bg-indigo-100 text-indigo-900 border-indigo-300'
        : 'bg-amber-100 text-amber-900 border-amber-300');
    const houseLabelA = typeof formatHouseLabel === "function" ? formatHouseLabel(s.recordA.houseId, s.recordA.houseNumber) : `čp. ${s.recordA.houseNumber}`;
    const houseLabelB = typeof formatHouseLabel === "function" ? formatHouseLabel(s.recordB.houseId, s.recordB.houseNumber) : `čp. ${s.recordB.houseNumber}`;
    return `
    <div class="p-4 bg-white rounded-xl border border-amber-300 shadow-2xs space-y-3 hover:border-amber-500 transition-all">
      <div class="flex items-center justify-between flex-wrap gap-2">
        <div class="flex items-center gap-2 flex-wrap">
          <span class="px-2.5 py-0.5 rounded-full text-xs font-bold border ${typeColor}">
            ${s.badgeLabel || `⭐ Shoda ${s.score}%`}
          </span>
          <span class="px-2 py-0.5 rounded-full text-[11px] font-bold bg-slate-100 text-slate-700 border border-slate-200">
            Jistota: ${s.score}% (prob)
          </span>
          <span class="text-xs font-bold text-slate-700">${houseLabelA}${houseLabelA !== houseLabelB ? ` ↔ ${houseLabelB}` : ''}</span>
        </div>
        <div class="flex items-center gap-2">
          <button onclick="linkCensusRecords('${s.recordA.id}', '${s.recordB.id}'); renderLinkerSuggestions();" 
            class="px-3 py-1.5 bg-amber-800 hover:bg-amber-900 text-white font-bold text-xs rounded-lg transition-colors shadow-2xs flex items-center gap-1">
            <span>🔗</span> Spojit do jedné osoby
          </button>
          <button onclick="dismissSuggestion('${s.recordA.id}', '${s.recordB.id}')" 
            class="px-2.5 py-1.5 text-xs font-semibold text-slate-500 hover:bg-slate-100 rounded-lg transition-colors" title="Ignorovat tento návrh">
            ✕ Ignorovat
          </button>
        </div>
      </div>

      <!-- Srovnání obou zápisů -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
        <div class="p-2.5 bg-amber-50/70 rounded-lg border border-amber-200 space-y-1">
          <div class="flex items-center justify-between font-bold text-amber-950">
            <span>Zápis 1 (Sčítání ${s.recordA.censusYear} • ${houseLabelA})</span>
            <span class="text-[10px] font-mono bg-amber-200/80 px-1.5 py-0.5 rounded">${s.recordA.id}</span>
          </div>
          <p class="font-bold text-slate-900 text-sm">${s.recordA.fullName}</p>
          <p class="text-slate-600">Narození: <strong>${s.recordA.birthDate}</strong> (${s.recordA.birthPlace || 'Dlouhomilov'})</p>
          <p class="text-slate-600">Postavení / role: ${s.recordA.relation || '-'}, ${s.recordA.occupation || '-'}</p>
        </div>

        <div class="p-2.5 bg-amber-50/70 rounded-lg border border-amber-200 space-y-1">
          <div class="flex items-center justify-between font-bold text-amber-950">
            <span>Zápis 2 (Sčítání ${s.recordB.censusYear} • ${houseLabelB})</span>
            <span class="text-[10px] font-mono bg-amber-200/80 px-1.5 py-0.5 rounded">${s.recordB.id}</span>
          </div>
          <p class="font-bold text-slate-900 text-sm">${s.recordB.fullName}</p>
          <p class="text-slate-600">Narození: <strong>${s.recordB.birthDate}</strong> (${s.recordB.birthPlace || 'Dlouhomilov'})</p>
          <p class="text-slate-600">Postavení / role: ${s.recordB.relation || '-'}, ${s.recordB.occupation || '-'}</p>
        </div>
      </div>

      <!-- Důvody shody -->
      <div class="text-[11px] text-slate-600 flex items-center gap-1.5 flex-wrap italic bg-amber-50/40 p-1.5 rounded">
        <span>💡 Důvody shody:</span>
        <span>${s.reasons.join('; ')}</span>
      </div>
    </div>
  `;
  }).join('');
}

// Vykreslení záložky pro ruční výběr a spojení
function renderLinkerManualTab(preselectedId = null) {
  if (typeof censusRegistryData === "undefined") return;

  const selectA = document.getElementById("linker-select-record-a");
  const selectTarget = document.getElementById("linker-select-target");
  if (!selectA || !selectTarget) return;

  // 1. Záznam A (sčítací operáty)
  const sortedRecords = [...censusRegistryData].sort((x, y) => {
    if (x.houseNumber !== y.houseNumber) return parseInt(x.houseNumber || 0) - parseInt(y.houseNumber || 0);
    return x.fullName.localeCompare(y.fullName, 'cs');
  });

  selectA.innerHTML = sortedRecords.map(r => {
    const isSelected = preselectedId && r.id === preselectedId;
    return `<option value="${r.id}" ${isSelected ? 'selected' : ''}>[${r.censusYear}, čp. ${r.houseNumber}] ${r.fullName} (*${r.birthDate}) - ${r.id}</option>`;
  }).join('');

  toggleManualTargetMode(currentManualTargetMode);
  updateManualLinkPreview();
}

function toggleManualTargetMode(mode) {
  currentManualTargetMode = mode;
  const selectTarget = document.getElementById("linker-select-target");
  if (!selectTarget) return;

  if (mode === "person") {
    const unifiedPeople = getAllUnifiedPeople();
    selectTarget.innerHTML = unifiedPeople.map(p => `
      <option value="${p.id}">👤 ${p.name} (*${p.birthYear || '-'}, čp. ${p.houseNumber}) [${p.linkedRecords.length} záznamů]</option>
    `).join('');
  } else {
    // Rejstřík jiných záznamů
    const sortedRecords = [...censusRegistryData].sort((x, y) => {
      if (x.houseNumber !== y.houseNumber) return parseInt(x.houseNumber || 0) - parseInt(y.houseNumber || 0);
      return x.fullName.localeCompare(y.fullName, 'cs');
    });

    selectTarget.innerHTML = sortedRecords.map(r => `
      <option value="${r.id}">[${r.censusYear}, čp. ${r.houseNumber}] ${r.fullName} (*${r.birthDate}) - ${r.id}</option>
    `).join('');
  }

  updateManualLinkPreview();
}

function updateManualLinkPreview() {
  const selectA = document.getElementById("linker-select-record-a");
  const selectTarget = document.getElementById("linker-select-target");
  const previewA = document.getElementById("linker-preview-a");
  const previewB = document.getElementById("linker-preview-b");

  if (selectA && previewA && typeof censusRegistryData !== "undefined") {
    const recA = censusRegistryData.find(r => r.id === selectA.value);
    if (recA) {
      const linkedP = getLinkedPersonForRecord(recA.id);
      previewA.innerHTML = `
        <p class="font-bold text-slate-900">${recA.fullName}</p>
        <p class="text-slate-600">Sčítání ${recA.censusYear}, dům čp. ${recA.houseNumber}, narozen ${recA.birthDate}</p>
        <p class="text-slate-600">Povolání / vztah: ${recA.occupation || '-'} (${recA.relation || '-'})</p>
        <p class="text-[11px] ${linkedP ? 'text-amber-900 font-bold' : 'text-slate-400 italic'}">
          ${linkedP ? `🔗 Spojeno s: ${linkedP.name}` : 'Dosud nespojeno'}
        </p>
      `;
    }
  }

  if (selectTarget && previewB) {
    if (currentManualTargetMode === "person") {
      const person = getAllUnifiedPeople().find(p => p.id === selectTarget.value);
      if (person) {
        previewB.innerHTML = `
          <p class="font-bold text-slate-900">👤 ${person.name}</p>
          <p class="text-slate-600">Období: ${person.lifeSpan || person.birthYear}, usedlost čp. ${person.houseNumber}</p>
          <p class="text-slate-600">Kategorie: ${person.categoryLabel || '-'}, ${person.role || '-'}</p>
          <p class="text-[11px] text-amber-900 font-bold">Aktuálně připojeno ${person.linkedRecords.length} záznamů</p>
        `;
      }
    } else {
      const recB = censusRegistryData.find(r => r.id === selectTarget.value);
      if (recB) {
        const linkedP = getLinkedPersonForRecord(recB.id);
        previewB.innerHTML = `
          <p class="font-bold text-slate-900">${recB.fullName}</p>
          <p class="text-slate-600">Sčítání ${recB.censusYear}, dům čp. ${recB.houseNumber}, narozen ${recB.birthDate}</p>
          <p class="text-slate-600">Povolání / vztah: ${recB.occupation || '-'} (${recB.relation || '-'})</p>
          <p class="text-[11px] ${linkedP ? 'text-amber-900 font-bold' : 'text-slate-400 italic'}">
            ${linkedP ? `🔗 Spojeno s: ${linkedP.name}` : 'Dosud nespojeno'}
          </p>
        `;
      }
    }
  }
}

function executeManualLink() {
  const selectA = document.getElementById("linker-select-record-a");
  const selectTarget = document.getElementById("linker-select-target");
  if (!selectA || !selectTarget) return;

  const idA = selectA.value;
  const targetId = selectTarget.value;

  if (idA === targetId) {
    alert("Nemůžete spojit tentýž záznam se sebou samým.");
    return;
  }

  linkCensusRecords(idA, targetId);
  alert("Záznamy byly úspěšně propojeny do jedné osoby!");
  switchLinkerTab('manage');
}

// Vykreslení záložky správy propojených osob
function renderLinkerManageTab() {
  const tableBody = document.getElementById("linker-manage-table-body");
  const countBadge = document.getElementById("linker-manage-count");
  if (!tableBody) return;

  const people = getAllUnifiedPeople().filter(p => p.linkedRecords.length > 0);
  if (countBadge) countBadge.textContent = people.length;

  if (people.length === 0) {
    tableBody.innerHTML = `
      <tr>
        <td colspan="6" class="p-6 text-center text-slate-500 italic">
          Zatím nejsou vytvořena žádná propojení.
        </td>
      </tr>
    `;
    return;
  }

  tableBody.innerHTML = people.map(p => `
    <tr class="hover:bg-amber-50/50 border-b border-amber-100">
      <td class="p-2.5 font-bold text-slate-900">
        <div class="flex items-center gap-1.5">
          <span>${p.name}</span>
          ${p.isCustom ? '<span class="text-[9px] bg-amber-200 text-amber-950 px-1 rounded font-normal">vlastní</span>' : ''}
        </div>
      </td>
      <td class="p-2.5 text-center font-bold text-amber-900">čp. ${p.houseNumber}</td>
      <td class="p-2.5 text-slate-700">${p.lifeSpan || p.birthYear || '-'}</td>
      <td class="p-2.5 text-center">
        <span class="px-2 py-0.5 bg-amber-100 text-amber-950 font-bold rounded-full text-xs">
          ${p.linkedRecords.length}
        </span>
      </td>
      <td class="p-2.5 text-xs text-slate-600 max-w-xs">
        <div class="flex flex-wrap gap-1">
          ${p.linkedRecords.map(r => `
            <span class="inline-flex items-center gap-1 bg-white px-1.5 py-0.5 rounded border border-amber-200 text-[10px]">
              <strong>${r.censusYear}:</strong> ${r.fullName}
              <button onclick="unlinkCensusRecord('${r.id}'); renderLinkerManageTab();" class="text-red-600 hover:text-red-800 font-bold" title="Odpojit tento zápis">✕</button>
            </span>
          `).join('')}
        </div>
      </td>
      <td class="p-2.5 text-right">
        <button onclick="closePersonLinkerModal(); openPersonModal('${p.id}');" class="px-2 py-1 bg-amber-800 hover:bg-amber-900 text-white rounded text-xs font-bold transition-colors">
          👤 Profil
        </button>
      </td>
    </tr>
  `).join('');
}

// Otevření okna pro připojení zápisu k aktuálně otevřené osobě v profilu
function openLinkModalForCurrentPerson() {
  if (!currentPersonId) return;
  closePersonModal();
  openPersonLinkerModal();
  switchLinkerTab('manual');
  
  const selectTarget = document.getElementById("linker-select-target");
  const radioPerson = document.querySelector('input[name="linker-target-mode"][value="person"]');
  if (radioPerson) radioPerson.checked = true;
  toggleManualTargetMode('person');
  
  if (selectTarget) {
    selectTarget.value = currentPersonId;
    updateManualLinkPreview();
  }
}

// ==========================================================================
// POHLED: TABULKA SJEDNOCENÝCH OSOB (UNIFIED PEOPLE TABLE)
// ==========================================================================

function setUnifiedSubFilter(subKey) {
  currentUnifiedSubFilter = subKey || "all";
  currentUnifiedPage = 1;
  document.querySelectorAll(".unified-sub-btn").forEach(btn => {
    if (btn.dataset.usub === currentUnifiedSubFilter) {
      btn.classList.add("bg-amber-800", "text-white");
      btn.classList.remove("bg-white", "text-amber-950", "border", "border-amber-300");
    } else {
      btn.classList.remove("bg-amber-800", "text-white");
      btn.classList.add("bg-white", "text-amber-950", "border", "border-amber-300");
    }
  });
  renderUnifiedPeopleTable();
}

function setUnifiedPage(page) {
  currentUnifiedPage = Math.max(1, parseInt(page, 10) || 1);
  renderUnifiedPeopleTable();
  const view = document.getElementById("inhabitant-unified-view");
  if (view) {
    const rect = view.getBoundingClientRect();
    if (rect.top < 0 || rect.top > window.innerHeight * 0.5) {
      view.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
}

function renderUnifiedPaginationBar(totalCount, totalPages) {
  const bar = document.getElementById("unified-pagination-bar");
  if (!bar) return;
  if (totalCount === 0) {
    bar.innerHTML = "";
    bar.classList.add("hidden");
    return;
  }
  bar.classList.remove("hidden");

  const startIdx = (currentUnifiedPage - 1) * UNIFIED_PAGE_SIZE + 1;
  const endIdx = Math.min(totalCount, currentUnifiedPage * UNIFIED_PAGE_SIZE);

  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    if (i === 1 || i === totalPages || Math.abs(i - currentUnifiedPage) <= 2) {
      pages.push(i);
    }
  }
  let prevP = 0;
  const pageButtons = [];
  pages.forEach(p => {
    if (prevP && p - prevP > 1) pageButtons.push(`<span class="px-1 text-slate-400">…</span>`);
    const activeCls = p === currentUnifiedPage
      ? "bg-amber-800 text-white border-amber-900"
      : "bg-white hover:bg-amber-100 text-slate-700 border-amber-200";
    pageButtons.push(`<button type="button" onclick="setUnifiedPage(${p})" class="px-2.5 py-1 rounded-lg border text-xs font-bold transition-colors cursor-pointer ${activeCls}">${p}</button>`);
    prevP = p;
  });

  bar.innerHTML = `
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
      <div class="font-semibold text-slate-700">
        Zobrazeno <strong class="text-amber-950">${startIdx}–${endIdx}</strong> z <strong class="text-amber-950">${totalCount}</strong> sjednocených osob
        ${totalPages > 1 ? `<span class="text-slate-500 ml-1">(Strana ${currentUnifiedPage}/${totalPages})</span>` : ""}
      </div>
      ${totalPages > 1 ? `
        <div class="flex items-center gap-1 flex-wrap">
          <button type="button" onclick="setUnifiedPage(${currentUnifiedPage - 1})" ${currentUnifiedPage <= 1 ? "disabled" : ""}
            class="px-2.5 py-1 rounded-lg border text-xs font-bold bg-white hover:bg-amber-100 text-slate-700 border-amber-200 disabled:opacity-40 cursor-pointer">
            ← Předchozí
          </button>
          ${pageButtons.join("")}
          <button type="button" onclick="setUnifiedPage(${currentUnifiedPage + 1})" ${currentUnifiedPage >= totalPages ? "disabled" : ""}
            class="px-2.5 py-1 rounded-lg border text-xs font-bold bg-white hover:bg-amber-100 text-slate-700 border-amber-200 disabled:opacity-40 cursor-pointer">
            Další →
          </button>
        </div>
      ` : ""}
    </div>
  `;
}

function getFilteredUnifiedPeople() {
  const rawSearchVal = document.getElementById("registry-search-input")?.value || "";
  const normSearch = normalizeSearchText(rawSearchVal);
  const houseVal = document.getElementById("registry-house-select")?.value || "all";
  const yearVal = document.getElementById("registry-year-select")?.value || "all";

  return getAllUnifiedPeople().filter(p => {
    if (!p.linkedRecords || p.linkedRecords.length === 0) return false;

    // 1) Podfiltr hloubky propojení
    if (currentUnifiedSubFilter === "3plus" && p.linkedRecords.length < 3) return false;
    if (currentUnifiedSubFilter === "moved") {
      const hasMove = (p.housesVisited && p.housesVisited.length > 1) ||
        new Set(p.linkedRecords.map(r => `${isMedelskeRegistryRecord(r) ? 'Medelské' : ((r.houseId || '').startsWith('benkov_') ? 'Benkov' : 'Dlouhomilov')}|${r.houseNumber}`)).size > 1;
      if (!hasMove) return false;
    }
    if (currentUnifiedSubFilter === "parish") {
      const hasParish = p.isVerifiedProfile || (p.parishEvents && p.parishEvents.length > 0) || (p.events && p.events.some(e => !/sčítání/i.test(e.type || "")));
      if (!hasParish) return false;
    }

    // 2) Fulltext
    if (normSearch) {
      const haystack = normalizeSearchText([
        p.name,
        ...(p.variantNames || []),
        p.role,
        p.locality,
        p.houseNumber,
        ...(p.housesVisited || []),
        ...p.linkedRecords.map(r => `${r.fullName} ${r.occupation} ${r.relation} ${r.notes} ${r.birthPlace} ${r.houseNumber}`)
      ].join(" "));
      if (!haystack.includes(normSearch)) return false;
    }

    // 3) Stavení / Osada
    if (houseVal !== "all") {
      if (houseVal === "settlement:benkov") {
        if (p.locality !== "Benkov" && !p.linkedRecords.some(r => (r.houseId || "").startsWith("benkov_"))) return false;
      } else if (houseVal === "settlement:medelske") {
        if (p.locality !== "Medelské" && !p.linkedRecords.some(r => isMedelskeRegistryRecord(r))) return false;
      } else if (houseVal === "settlement:dlouhomilov") {
        if (p.locality === "Benkov" || p.locality === "Medelské") return false;
        if (!p.linkedRecords.some(r => !(r.houseId || "").startsWith("benkov_") && !isMedelskeRegistryRecord(r))) return false;
      } else {
        const matchH = (p.houseId === houseVal) || p.linkedRecords.some(r => (r.houseId || `cp${r.houseNumber}`) === houseVal || r.houseNumber === houseVal);
        if (!matchH) return false;
      }
    }

    // 4) Rok sčítání
    if (yearVal !== "all") {
      if (!p.linkedRecords.some(r => String(r.censusYear) === yearVal)) return false;
    }

    // 5) Kategorie
    if (currentRegistryCategoryFilter !== "all" && p.categoryKey !== currentRegistryCategoryFilter) {
      if (!p.linkedRecords.some(r => r.categoryKey === currentRegistryCategoryFilter)) return false;
    }

    // 6) Příjmení / rod
    if (currentRegistrySurnameFilter !== "all") {
      const sNorm = normalizeSearchText(currentRegistrySurnameFilter);
      const matchSur = normalizeSearchText(p.name).includes(sNorm) ||
        (p.variantNames || []).some(v => normalizeSearchText(v).includes(sNorm)) ||
        p.linkedRecords.some(r => normalizeSearchText(r.fullName).includes(sNorm));
      if (!matchSur) return false;
    }

    return true;
  });
}

function renderUnifiedPeopleTable() {
  const tableBody = document.getElementById("unified-people-table-body");
  const countBadge = document.getElementById("registry-count-badge");
  if (!tableBody) return;

  const people = getFilteredUnifiedPeople();
  const totalLinkedRecs = people.reduce((sum, p) => sum + p.linkedRecords.length, 0);

  if (countBadge && currentInhabitantViewMode === "unified") {
    countBadge.textContent = `Sjednoceno: ${people.length} osob (${totalLinkedRecs} archivních zápisů)`;
  }

  if (people.length === 0) {
    renderUnifiedPaginationBar(0, 1);
    tableBody.innerHTML = `
      <tr>
        <td colspan="6" class="p-8 text-center text-slate-500 italic space-y-2">
          <p class="text-sm font-semibold text-slate-700">Nebyly nalezeny žádné sjednocené osoby odpovídající zadaným filtrům.</p>
          <p class="text-xs text-slate-400">Zkuste resetovat filtry nebo otevřít nástroj <strong>Spojování osob (prob)</strong>.</p>
        </td>
      </tr>
    `;
    return;
  }

  const totalPages = Math.max(1, Math.ceil(people.length / UNIFIED_PAGE_SIZE));
  if (currentUnifiedPage > totalPages) currentUnifiedPage = totalPages;
  const start = (currentUnifiedPage - 1) * UNIFIED_PAGE_SIZE;
  const pagedPeople = people.slice(start, start + UNIFIED_PAGE_SIZE);
  renderUnifiedPaginationBar(people.length, totalPages);

  tableBody.innerHTML = pagedPeople.map(p => {
    // Sesbírat všechny varianty jmen a pravopisu
    const variantNames = [...new Set(p.linkedRecords.map(r => r.fullName))];
    const years = [...new Set(p.linkedRecords.map(r => r.censusYear))].sort((a, b) => a - b);
    const badgeClass = p.categoryBadgeClass || 'bg-amber-100 text-amber-950 border-amber-300';
    const icon = p.categoryIcon || '👤';
    const catLabel = p.categoryLabel || 'Obyvatel obce';
    const housesTraj = (p.housesVisited && p.housesVisited.length > 1)
      ? p.housesVisited.join(' ➔ ')
      : null;
    const hasParish = p.isVerifiedProfile || (p.parishEvents && p.parishEvents.length > 0);
    const birthDisplay = (p.birthDate && p.birthDate !== '-' && p.birthDate !== `*${p.birthYear}`)
      ? `<div><strong>${p.birthDate}</strong></div><div class="text-[11px] text-slate-500">${p.lifeSpan || ''}</div>`
      : `<strong>${p.lifeSpan || p.birthYear || '-'}</strong>`;

    return `
      <tr class="hover:bg-amber-50/70 transition-colors border-b border-amber-100">
        <td class="p-3 font-semibold text-slate-900">
          <div class="space-y-1">
            <div class="flex items-center gap-1.5 flex-wrap">
              <span class="text-amber-900 font-bold text-sm cursor-pointer hover:underline" onclick="openPersonModal('${p.id}')">${p.name}</span>
              ${p.isCustom
                ? '<span class="text-[10px] bg-amber-200 text-amber-950 px-1.5 py-0.2 rounded font-semibold">⚡ vlastní</span>'
                : '<span class="text-[10px] bg-emerald-100 text-emerald-900 border border-emerald-300 px-1.5 py-0.2 rounded font-bold" title="Ověřená shoda ≥ 2 nezávislých znaků (doc)">✔ doc</span>'}
              ${hasParish ? '<span class="text-[10px] bg-indigo-100 text-indigo-900 border border-indigo-300 px-1.5 py-0.2 rounded font-bold">📜 Matrika</span>' : ''}
            </div>
            ${variantNames.length > 1 ? `
              <div class="flex flex-wrap gap-1 text-[11px] text-slate-500">
                <span>Varianty v pramenech:</span>
                ${variantNames.map(v => `<span class="bg-amber-50 px-1.5 py-0.2 rounded border border-amber-200 italic">${v}</span>`).join('')}
              </div>
            ` : ''}
          </div>
        </td>
        <td class="p-3 text-xs" data-label="Narození / Věk">
          ${birthDisplay}
        </td>
        <td class="p-3 text-center">
          <div class="flex flex-col items-center gap-1">
            <button onclick="openHouseDetailFromRegistry('${p.houseId || 'cp' + p.houseNumber}')" 
              class="text-xs font-bold text-amber-900 hover:text-amber-700 bg-amber-50 hover:bg-amber-200 border border-amber-300 px-2 py-0.5 rounded transition-all whitespace-nowrap" title="Přejít na stavení na mapě">
              ${formatHouseLabel(p.houseId, p.houseNumber)} ↗
            </button>
            ${housesTraj ? `<span class="text-[10px] font-semibold text-sky-900 bg-sky-50 border border-sky-200 px-1.5 py-0.5 rounded">🧭 ${housesTraj}</span>` : ''}
          </div>
        </td>
        <td class="p-3 text-xs" data-label="Kategorie / Postavení">
          <span class="px-2 py-0.5 text-[11px] font-bold rounded-lg border inline-flex items-center gap-1 whitespace-nowrap ${badgeClass}">
            <span>${icon}</span> ${catLabel}
          </span>
          <div class="text-[11px] text-slate-600 mt-0.5">${p.role || ''}</div>
        </td>
        <td class="p-3 text-xs" data-label="Propojené zápisy">
          <div class="space-y-1.5 max-w-md">
            <div class="text-[11px] text-amber-950 font-bold flex items-center gap-1 flex-wrap">
              <span>📚 Propojeno ${p.linkedRecords.length} sčítání:</span>
              <span class="font-mono bg-amber-100 px-1.5 py-0.2 rounded text-amber-900">${years.join(' – ')}</span>
            </div>
            <div class="flex flex-wrap gap-1.5">
              ${p.linkedRecords.map(r => `
                <div class="inline-flex items-center gap-1 bg-white px-2 py-1 rounded-lg border border-amber-200 shadow-2xs text-[11px]">
                  <span class="font-bold text-amber-950">${r.censusYear}:</span>
                  <span class="text-slate-800 italic">${r.fullName}</span>
                  <span class="text-slate-400 text-[10px]">(${formatHouseLabel(r.houseId, r.houseNumber)})</span>
                  ${r.scanFile ? `
                    <button onclick="openArchiveViewer('${r.scanFile}', '${escapeHtmlAttr(r.scanTitle || r.fullName + ' – ' + r.censusYear)}', 'ZAO Opava', '${r.scanFile}')" 
                      class="text-[10px] text-amber-800 hover:text-amber-950 font-bold ml-0.5" title="Zobrazit archivní scan">
                      [Scan ↗]
                    </button>
                  ` : ''}
                </div>
              `).join('')}
            </div>
          </div>
        </td>
        <td class="p-3 text-right">
          <div class="flex items-center justify-end gap-1.5">
            <button onclick="openPersonModal('${p.id}')" 
              class="px-3 py-1.5 text-xs font-bold bg-amber-800 hover:bg-amber-900 text-white rounded-lg shadow-2xs transition-colors flex items-center gap-1">
              <span>👤</span> Profil
            </button>
            <a href="cluster.html#cluster=${encodeURIComponent(p.id)}"
              class="px-2 py-1.5 text-xs font-bold bg-emerald-100 hover:bg-emerald-200 text-emerald-950 rounded-lg border border-emerald-300 transition-colors" title="Otevřít osobu a její ego-graf v Clustrovací laboratoři">
              <span>🕸️</span>
            </a>
            <button onclick="openPersonLinkerModal('${p.linkedRecords[0]?.id}')" 
              class="px-2 py-1.5 text-xs font-semibold bg-amber-100 hover:bg-amber-200 text-amber-950 rounded-lg border border-amber-300 transition-colors" title="Spravovat nebo přidat další zápisy">
              <span>🔗</span>
            </button>
          </div>
        </td>
      </tr>
    `;
  }).join('');
}

// ==========================================================================
// SOUBORNÝ REJSTŘÍK OBYVATEL ZE SČÍTÁNÍ LIDU S KATEGORIEMI (306 OSOB)
// ==========================================================================

function renderCensusRegistryTable(filteredData = null) {
  const tableBody = document.getElementById("census-registry-table-body");
  const countBadge = document.getElementById("registry-count-badge");
  if (!tableBody || typeof censusRegistryData === "undefined") return;

  const records = filteredData || censusRegistryData;
  lastRegistryRecords = records;

  if (countBadge && currentInhabitantViewMode !== "unified") {
    let extraFilterNote = "";
    if (currentRegistryCategoryFilter === "grunt") {
      extraFilterNote = " (Držitelé gruntů & hospodáři)";
    } else if (currentRegistryCategoryFilter !== "all") {
      extraFilterNote = ` (${currentRegistryCategoryFilter})`;
    }
    countBadge.textContent = `Zobrazeno: ${records.length} osob${extraFilterNote}`;
  }

  renderRegistryPaginationBar(records.length);

  if (records.length === 0) {
    tableBody.innerHTML = `
      <tr>
        <td colspan="9" class="p-8 text-center text-slate-500 italic space-y-2">
          <p class="text-sm font-semibold text-slate-700">Nebyly nalezeny žádné záznamy odpovídající zadaným filtrům.</p>
          <p class="text-xs text-slate-400">Zkuste resetovat hledání nebo zvolit jinou kategorii / stavení.</p>
          <button onclick="resetAllRegistryFilters()" class="mt-2 px-3 py-1.5 bg-amber-800 text-white font-bold text-xs rounded-lg shadow hover:bg-amber-900 transition-all">
            Zobrazit všechny obyvatele (${censusRegistryData.length})
          </button>
        </td>
      </tr>
    `;
    return;
  }

  const pagedRecords = getPagedRegistryRecords(records);
  tableBody.innerHTML = pagedRecords.map(r => {
    // Zjistit, zda je tento zápis spojen se sjednocenou osobou
    const linkedPerson = getLinkedPersonForRecord(r.id);

    const badgeClass = r.categoryBadgeClass || 'bg-slate-100 text-slate-800 border-slate-300';
    const icon = r.categoryIcon || '👤';
    const catLabel = r.categoryLabel || 'Obyvatel obce';

    return `
      <tr class="hover:bg-amber-50/70 transition-colors border-b border-amber-100 ${r.categoryKey === 'grunt' ? 'bg-emerald-50/20' : ''}">
        <td class="p-3 font-semibold text-slate-900">
          <div class="flex flex-col gap-1">
            <div class="flex items-center gap-1.5 flex-wrap">
              <span class="text-amber-900 font-bold">${r.fullName}</span>
              ${linkedPerson ? `
                <button onclick="openPersonModal('${linkedPerson.id}')" title="Tento záznam je ztotožněn s osobou: ${linkedPerson.name}. Kliknutím zobrazíte celý životní profil." 
                  class="px-1.5 py-0.5 bg-amber-100 hover:bg-amber-200 text-amber-900 text-[10px] rounded border border-amber-300 font-bold whitespace-nowrap flex items-center gap-1 shadow-2xs">
                  <span>🔗</span> <span>${linkedPerson.name}</span>
                </button>
              ` : `
                <button onclick="openPersonLinkerModal('${r.id}')" title="Propojit / ztotožnit tento zápis s jiným sčítáním" 
                  class="text-slate-400 hover:text-amber-800 text-[10px] hover:underline flex items-center gap-0.5">
                  <span>🔗</span> Spojit
                </button>
              `}
            </div>
          </div>
        </td>
        <td class="p-3">
          <button onclick="setRegistryCategoryFilter('${r.categoryKey}')" title="Filtrovat tuto kategorii"
            class="px-2 py-0.5 text-[11px] font-bold rounded-lg border inline-flex items-center gap-1 whitespace-nowrap transition-transform hover:scale-105 ${badgeClass}">
            <span>${icon}</span> ${catLabel}
          </button>
        </td>
        <td class="p-3 text-center">
          <span class="text-xs font-mono font-bold text-amber-950 bg-amber-100 px-2 py-0.5 rounded">${r.censusYear}</span>
        </td>
        <td class="p-3 text-center">
          <button onclick="openHouseDetailFromRegistry('${r.houseId || 'cp' + r.houseNumber}')" 
            class="text-xs font-bold text-amber-900 hover:text-amber-700 bg-amber-50 hover:bg-amber-200 border border-amber-300 px-2 py-0.5 rounded transition-all" title="Přejít na stavení na mapě">
            ${formatHouseLabel(r.houseId, r.houseNumber)} ↗
          </button>
        </td>
        <td class="p-3 text-slate-700 text-xs" data-label="Vztah v rodině">${r.relation || '-'}</td>
        <td class="p-3 text-xs" data-label="Narození / Věk">
          <strong>${r.birthDate}</strong><br>
          <span class="text-slate-500 text-[11px]">${r.birthPlace}</span>
        </td>
        <td class="p-3 text-xs" data-label="Narození / Věk">
          <span class="bg-amber-50 px-2 py-0.5 rounded border border-amber-200 font-medium text-slate-800">${r.occupation}</span>
        </td>
        <td class="p-3 text-[11px] text-slate-600 max-w-xs truncate" data-label="Poznámka" title="${r.notes}">
          ${r.notes || '-'}
        </td>
        <td class="p-3 text-right">
          ${r.scanFile ? `
            <button onclick="openArchiveViewer('${r.scanFile}', '${r.scanTitle || r.fullName + ' – Sčítání ' + r.censusYear}', 'Zemský archiv v Opavě', '${r.scanFile}')"
              class="px-2.5 py-1 text-xs font-bold bg-amber-800 hover:bg-amber-900 text-white rounded-lg flex items-center gap-1 ml-auto shadow-sm whitespace-nowrap">
              🔍 Scan
            </button>
          ` : '<span class="text-[10px] text-slate-400">Scan v archivu</span>'}
        </td>
      </tr>
    `;
  }).join('');
}

// Inteligentní aplikace filtrů se sémantickým rozpoznáním dotazů
function applyRegistryFilters() {
  if (typeof censusRegistryData === "undefined") return;

  const rawSearchVal = document.getElementById("registry-search-input")?.value || "";
  const normSearch = normalizeSearchText(rawSearchVal);
  const houseVal = document.getElementById("registry-house-select")?.value || "all";
  const yearVal = document.getElementById("registry-year-select")?.value || "all";

  // Check if search query specifically asks for a category (e.g. "drzitele gruntu", "drzitele", "grunt", "sedlaci")
  let queryTargetsCategoryKey = null;
  if (normSearch) {
    for (const [catKey, keywords] of Object.entries(categorySearchKeywords)) {
      if (keywords.some(kw => normSearch === kw || normSearch.includes(kw) || kw.includes(normSearch))) {
        queryTargetsCategoryKey = catKey;
        break;
      }
    }
  }

  let filtered = censusRegistryData.filter(r => {
    // 1. Text search
    let matchesSearch = true;
    if (normSearch) {
      const normFullName = normalizeSearchText(r.fullName);
      const normOccupation = normalizeSearchText(r.occupation);
      const normRelation = normalizeSearchText(r.relation);
      const normNotes = normalizeSearchText(r.notes);
      const normCategoryLabel = normalizeSearchText(r.categoryLabel);
      const normBirthPlace = normalizeSearchText(r.birthPlace);
      const normHouseNum = r.houseNumber ? r.houseNumber.toString() : '';

      const rHouseKeyForSearch = r.houseId || `cp${r.houseNumber}`;
      const settlementTag = rHouseKeyForSearch.startsWith("benkov_")
        ? "benkov benke"
        : isMedelskeRegistryRecord(r)
          ? "medelske dreihofen tri dvory"
          : "dlouhomilov lomigsdorf";

      // Direct string match
      const directMatch = normFullName.includes(normSearch) ||
        normOccupation.includes(normSearch) ||
        normRelation.includes(normSearch) ||
        normNotes.includes(normSearch) ||
        normCategoryLabel.includes(normSearch) ||
        normBirthPlace.includes(normSearch) ||
        settlementTag.includes(normSearch) ||
        normHouseNum === normSearch;

      // Semantic category match (e.g. searching "drzitele", "drzitele gruntu", "sedlaci")
      const catMatch = queryTargetsCategoryKey && (r.categoryKey === queryTargetsCategoryKey);

      matchesSearch = directMatch || catMatch;
    }

    // 2. House / settlement filter (supports settlement:benkov|medelske|dlouhomilov, houseId and raw houseNumber)
    const rHouseKey = r.houseId || `cp${r.houseNumber}`;
    let matchesHouse = (houseVal === "all") || (rHouseKey === houseVal) || (r.houseNumber === houseVal);
    if (houseVal === "settlement:benkov") {
      matchesHouse = rHouseKey.startsWith("benkov_");
    } else if (houseVal === "settlement:medelske") {
      matchesHouse = isMedelskeRegistryRecord(r);
    } else if (houseVal === "settlement:dlouhomilov") {
      matchesHouse = !rHouseKey.startsWith("benkov_") && !isMedelskeRegistryRecord(r);
    }

    // 3. Year filter
    const matchesYear = (yearVal === "all") || (r.censusYear.toString() === yearVal);

    // 4. Category filter (from dropdown / buttons)
    const matchesCategory = (currentRegistryCategoryFilter === "all") || (r.categoryKey === currentRegistryCategoryFilter);

    // 5. Surname filter
    const matchesSurname = (currentRegistrySurnameFilter === "all") || 
      normalizeSearchText(r.lastName).includes(normalizeSearchText(currentRegistrySurnameFilter)) ||
      normalizeSearchText(r.fullName).includes(normalizeSearchText(currentRegistrySurnameFilter));

    return matchesSearch && matchesHouse && matchesYear && matchesCategory && matchesSurname;
  });

  const sig = [
    document.getElementById("registry-search-input")?.value || "",
    houseVal,
    yearVal,
    typeof currentRegistryCategoryFilter !== "undefined" ? currentRegistryCategoryFilter : "",
    typeof currentRegistrySurnameFilter !== "undefined" ? currentRegistrySurnameFilter : ""
  ].join("|");
  if (sig !== lastRegistryFilterSignature) {
    lastRegistryFilterSignature = sig;
    currentRegistryPage = 1;
    currentUnifiedPage = 1;
  }
  renderCensusRegistryTable(filtered);
  if (currentInhabitantViewMode === "unified") {
    renderUnifiedPeopleTable();
  }
}

// Nastavení filtru kategorie (z tlačítka i dropdownu)
function setRegistryCategoryFilter(catKey) {
  currentRegistryCategoryFilter = catKey;

  // Sync category select dropdown
  const catSelect = document.getElementById("registry-category-select");
  if (catSelect) {
    catSelect.value = catKey;
  }

  // Sync category buttons
  document.querySelectorAll(".reg-cat-btn").forEach(btn => {
    if (btn.dataset.cat === catKey) {
      btn.classList.add("bg-amber-800", "text-white", "shadow-sm");
      btn.classList.remove("bg-white", "text-emerald-950", "text-sky-950", "text-stone-900", "text-amber-950", "text-blue-950", "text-indigo-950", "text-orange-950", "text-pink-950");
    } else {
      btn.classList.remove("bg-amber-800", "text-white");
      btn.classList.add("bg-white");
    }
  });

  applyRegistryFilters();
}

// Rychlé vymazání textového vyhledávání
function clearRegistrySearch() {
  const input = document.getElementById("registry-search-input");
  if (input) {
    input.value = "";
    applyRegistryFilters();
  }
}

// Reset všech filtrů rejstříku
function resetAllRegistryFilters() {
  currentRegistryCategoryFilter = "all";
  currentRegistrySurnameFilter = "all";
  
  const searchInput = document.getElementById("registry-search-input");
  if (searchInput) searchInput.value = "";
  
  const houseSelect = document.getElementById("registry-house-select");
  if (houseSelect) houseSelect.value = "all";

  const yearSelect = document.getElementById("registry-year-select");
  if (yearSelect) yearSelect.value = "all";

  const catSelect = document.getElementById("registry-category-select");
  if (catSelect) catSelect.value = "all";

  setRegistryCategoryFilter("all");
  setRegistrySurnameFilter("all");
}

// Přímá funkce: Vylistovat držitele gruntů a přejít k tabulce
// Přepínání zobrazení v jednotné sekci obyvatel (Jmenný rejstřík vs Sjednocené osoby vs Biografické karty)
function setInhabitantViewMode(mode) {
  currentInhabitantViewMode = mode;
  const tableView = document.getElementById("inhabitant-table-view");
  const unifiedView = document.getElementById("inhabitant-unified-view");
  const cardsView = document.getElementById("inhabitant-cards-view");
  const tableBtn = document.getElementById("view-mode-table-btn");
  const unifiedBtn = document.getElementById("view-mode-unified-btn");
  const cardsBtn = document.getElementById("view-mode-cards-btn");

  // Skrýt všechny pohledy
  tableView?.classList.add("hidden");
  unifiedView?.classList.add("hidden");
  cardsView?.classList.add("hidden");

  // Deaktivovat styly tlačítek
  [tableBtn, unifiedBtn, cardsBtn].forEach(btn => {
    btn?.classList.remove("bg-amber-800", "text-white");
    btn?.classList.add("bg-white", "text-slate-700");
  });

  if (mode === "table") {
    tableView?.classList.remove("hidden");
    tableBtn?.classList.add("bg-amber-800", "text-white");
    tableBtn?.classList.remove("bg-white", "text-slate-700");
  } else if (mode === "unified") {
    unifiedView?.classList.remove("hidden");
    unifiedBtn?.classList.add("bg-amber-800", "text-white");
    unifiedBtn?.classList.remove("bg-white", "text-slate-700");
    renderUnifiedPeopleTable();
  } else if (mode === "cards") {
    cardsView?.classList.remove("hidden");
    cardsBtn?.classList.add("bg-amber-800", "text-white");
    cardsBtn?.classList.remove("bg-white", "text-slate-700");
    renderPeopleSection();
  }
}

// Přímá funkce: Vylistovat držitele gruntů a přejít k tabulce
function filterByGruntHolders() {
  if (!document.getElementById("obyvatele-section")) {
    window.location.href = "obyvatele.html#cat=grunt";
    return;
  }
  setInhabitantViewMode("table");
  setRegistryCategoryFilter('grunt');
  
  const target = document.getElementById("obyvatele-section");
  if (target) {
    target.scrollIntoView({ behavior: "smooth" });
  }
}

function setRegistrySurnameFilter(surname) {
  currentRegistrySurnameFilter = surname;
  document.querySelectorAll(".reg-surname-btn").forEach(btn => {
    if (btn.textContent.includes(surname) || (surname === 'all' && btn.textContent === 'Všichni')) {
      btn.classList.add("bg-amber-800", "text-white");
      btn.classList.remove("bg-white", "text-slate-700");
    } else {
      btn.classList.remove("bg-amber-800", "text-white");
      btn.classList.add("bg-white", "text-slate-700");
    }
  });
  applyRegistryFilters();
}

function openHouseDetailFromRegistry(houseId) {
  openHouseDetail(houseId);
  document.getElementById("house-detail-container")?.scrollIntoView({ behavior: "smooth" });
}

// ==========================================================================
// BIOGRAFICKÝ MODUL OBYVATEL & GENEALOGIE (LIDÉ, MATRIKY, SČÍTÁNÍ)
// ==========================================================================

function renderPeopleSection(filteredPeople = null) {
  const container = document.getElementById("people-cards-grid");
  if (!container || typeof peopleData === "undefined") return;

  const list = filteredPeople || peopleData;

  container.innerHTML = list.map(p => `
    <div onclick="openPersonModal('${p.id}')" 
      class="parchment-card p-5 rounded-2xl border border-amber-200 hover:border-amber-500 cursor-pointer transition-all hover:shadow-md flex flex-col justify-between group">
      <div>
        <div class="flex items-center justify-between mb-2">
          <span class="text-xs font-bold text-amber-900 bg-amber-100 px-2.5 py-0.5 rounded-full border border-amber-300">
            čp. ${p.houseNumber}
          </span>
          <span class="text-xs font-mono font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
            ${p.lifeSpan}
          </span>
        </div>
        <div class="mb-1.5">
          <span class="px-2 py-0.5 text-[10px] font-bold rounded border inline-flex items-center gap-1 ${p.categoryBadgeClass || 'bg-emerald-100 text-emerald-950 border-emerald-300'}">
            <span>${p.categoryIcon || '🏡'}</span> ${p.categoryLabel || 'Držitel gruntu'}
          </span>
        </div>
        <h3 class="text-lg font-bold text-slate-900 group-hover:text-amber-800 font-heading transition-colors">
          ${p.name}
        </h3>
        <p class="text-xs text-amber-900 font-semibold mb-2">${p.role}</p>
        <p class="text-xs text-slate-600 line-clamp-2 leading-relaxed">${p.biography || p.bio || ''}</p>
      </div>

      <div class="mt-4 pt-3 border-t border-amber-100 flex items-center justify-between text-xs">
        <span class="text-[11px] text-slate-500">📚 ${p.events ? p.events.length : 0} archivních záznamů</span>
        <span class="font-bold text-amber-800 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
          Zobrazit profil ➔
        </span>
      </div>
    </div>
  `).join('');
}

function filterPeople(type) {
  currentPeopleFilter = type;
  document.querySelectorAll(".people-filter-btn").forEach(btn => {
    const isTarget = btn.dataset.filter === type || btn.dataset.rod === type;
    if (isTarget) {
      btn.classList.add("bg-amber-800", "text-white");
      btn.classList.remove("bg-white", "text-slate-700", "text-emerald-950");
    } else {
      btn.classList.remove("bg-amber-800", "text-white");
      btn.classList.add("bg-white");
    }
  });

  if (type === 'all') {
    renderPeopleSection(peopleData);
  } else if (type === 'grunt' || type === 'sedlak') {
    renderPeopleSection(peopleData.filter(p => p.categoryKey === 'grunt' || (p.role && (p.role.includes('rolník') || p.role.includes('sedlák') || p.role.includes('grunt')))));
  } else if (type === 'rychtar') {
    renderPeopleSection(peopleData.filter(p => p.role && p.role.toLowerCase().includes('rychtář')));
  } else if (type === 'duchovni') {
    renderPeopleSection(peopleData.filter(p => p.role && (p.role.toLowerCase().includes('učitel') || p.role.toLowerCase().includes('kněz'))));
  } else if (type === 'dvorak') {
    renderPeopleSection(peopleData.filter(p => p.name.includes('Dvořák') || (p.father && p.father.includes('Dvořák'))));
  } else if (type === 'cp29') {
    renderPeopleSection(peopleData.filter(p => p.houseNumber === '29'));
  }
}

function searchPeople(query) {
  const q = query.toLowerCase().trim();
  if (!q) {
    filterPeople(currentPeopleFilter);
    return;
  }
  const filtered = peopleData.filter(p => {
    const name = (p.name || '').toLowerCase();
    const house = (p.houseNumber || '').toString();
    const role = (p.role || '').toLowerCase();
    const bio = (p.biography || p.bio || '').toLowerCase();
    const tags = p.tags || [];
    return name.includes(q) || house.includes(q) || role.includes(q) || bio.includes(q) || tags.some(t => t.toLowerCase().includes(q));
  });
  renderPeopleSection(filtered);
}

function getEventTypeName(type) {
  if (!type) return "Archivní záznam";
  const t = type.toLowerCase();
  if (t === "birth" || t === "narození" || t === "narozeni") return "👶 Narození a křest";
  if (t === "marriage" || t === "sňatek" || t === "snatek" || t === "oddaní") return "💍 Sňatek a oddavky";
  if (t === "death" || t === "úmrtí" || t === "umrti" || t === "zemřelí") return "⚰️ Úmrtí a pohřeb";
  if (t === "census" || t === "sčítání lidu" || t === "scitani lidu") return "📋 Sčítání lidu";
  if (t === "cadastre" || t.includes("katastr") || t.includes("pozemková")) return "📐 Stabilní katastr / Pozemková kniha";
  if (t === "land_book" || t.includes("grunt")) return "📖 Gruntovní kniha";
  return type;
}

// Pomocná funkce pro převod textu rodinného příslušníka na klikací odkaz (peopleData nebo autoLinkedPeopleById)
function formatFamilyMemberItem(itemText, explicitPersonId = null) {
  if (!itemText || itemText === "-" || itemText === "Neuvedeno") return "Neuvedeno";

  if (explicitPersonId) {
    const targetObj = (typeof peopleData !== "undefined" && peopleData.find(p => p.id === explicitPersonId)) ||
      autoLinkedPeopleById.get(explicitPersonId);
    if (targetObj && (targetObj.linkedCensusIds?.length >= 2 || typeof peopleData !== "undefined" && peopleData.some(p => p.id === explicitPersonId))) {
      return `<button onclick="openPersonModal('${explicitPersonId}')" class="inline-flex items-center gap-1 font-bold text-amber-900 hover:text-amber-700 underline decoration-amber-500/70 hover:decoration-amber-800 cursor-pointer text-left" title="Otevřít profil: ${escapeHtmlAttr(targetObj.name)}"><span>👤</span><span>${itemText}</span></button>`;
    }
  }

  if (typeof peopleData === "undefined") return itemText;

  const normText = normalizeSearchText(itemText);
  const yearMatch = itemText.match(/\b(1[789]\d\d)\b/);
  const mentionedYear = yearMatch ? parseInt(yearMatch[1], 10) : null;

  let matchedPerson = null;

  for (const p of peopleData) {
    const pNormName = normalizeSearchText(p.name.replace(/\([^)]*\)/g, "").replace(/^dr\.\s*/i, ""));
    const pParts = pNormName.split(/\s+/).filter(Boolean);
    const firstName = pParts[0];
    const lastName = pParts[pParts.length - 1];

    const hasFirst = firstName && normText.includes(firstName);
    const hasLast = lastName && (normText.includes(lastName) || normText.includes("dvorak"));

    if (hasFirst && hasLast) {
      if (mentionedYear && p.birthYear) {
        if (Math.abs(mentionedYear - p.birthYear) <= 2) {
          matchedPerson = p;
          break;
        }
      } else if (!mentionedYear) {
        if (p.id === "p_pavel_dvorak_1750" && normText.includes("pavel")) {
          matchedPerson = p;
          break;
        }
      }
    }
  }

  if (!matchedPerson && autoLinkedPeopleById.size > 0 && mentionedYear) {
    for (const lp of autoLinkedPeopleById.values()) {
      const lpNorm = normalizeSearchText(lp.name.replace(/\([^)]*\)/g, ""));
      if (lpNorm && normText.includes(lpNorm) && lp.birthYear && Math.abs(mentionedYear - lp.birthYear) <= 2) {
        matchedPerson = lp;
        break;
      }
    }
  }

  if (matchedPerson) {
    return `<button onclick="openPersonModal('${matchedPerson.id}')" class="inline-flex items-center gap-1 font-bold text-amber-900 hover:text-amber-700 underline decoration-amber-500/70 hover:decoration-amber-800 cursor-pointer text-left" title="Otevřít biografický profil: ${escapeHtmlAttr(matchedPerson.name)}"><span>👤</span><span>${itemText}</span></button>`;
  }
  return itemText;
}

function openPersonModal(personId, updateHash = true) {
  currentPersonId = personId;
  if (updateHash && window.history && window.history.replaceState) {
    window.history.replaceState(null, "", `#person=${personId}`);
  }
  
  // Hledat v peopleData, poté v autoLinkedPeopleById (censusLinksData), poté v customPeople
  const curatedPerson = (typeof peopleData !== "undefined") ? peopleData.find(p => p.id === personId) : null;
  const autoPerson = autoLinkedPeopleById.get(personId) || null;
  let person = curatedPerson || autoPerson || (personLinksState && personLinksState.customPeople[personId]);
  if (!person) return;

  const modal = document.getElementById("person-detail-modal");
  if (!modal) return;

  document.getElementById("modal-person-name").textContent = person.name;
  document.getElementById("modal-person-lifespan").textContent = person.lifeSpan || person.birthYear || '-';
  document.getElementById("modal-person-role").textContent = person.role || '-';

  const badgeEl = document.getElementById("modal-person-badge");
  if (badgeEl) {
    badgeEl.textContent = `${person.categoryIcon || '🏡'} ${person.categoryLabel || 'Držitel gruntu'}`;
    badgeEl.className = `px-2 py-0.5 text-[11px] font-bold rounded border ${person.categoryBadgeClass || 'bg-emerald-100 text-emerald-950 border-emerald-300'}`;
  }

  const houseBadge = document.getElementById("modal-person-house-badge");
  if (houseBadge) {
    houseBadge.textContent = formatHouseLabel(person.houseId, person.houseNumber);
  }

  const famLinks = (curatedPerson && autoPerson && autoPerson.linkedFamilyLinks)
    ? autoPerson.linkedFamilyLinks
    : (person.linkedFamilyLinks || {});

  const fatherEl = document.getElementById("modal-person-father");
  if (fatherEl) fatherEl.innerHTML = (person.father && person.father !== "-") ? formatFamilyMemberItem(person.father, famLinks.fatherId) : "Neuvedeno";

  const motherEl = document.getElementById("modal-person-mother");
  if (motherEl) motherEl.innerHTML = (person.mother && person.mother !== "-") ? formatFamilyMemberItem(person.mother, famLinks.motherId) : "Neuvedeno";

  const spouseEl = document.getElementById("modal-person-spouse");
  if (spouseEl) spouseEl.innerHTML = (person.spouse && person.spouse !== "-") ? formatFamilyMemberItem(person.spouse, famLinks.spouseId) : "Neuvedeno";

  const childrenEl = document.getElementById("modal-person-children");
  if (childrenEl) {
    if (person.children && person.children.length > 0) {
      const childIds = Array.isArray(famLinks.childIds) ? famLinks.childIds : [];
      childrenEl.innerHTML = person.children.map((ch, idx) => formatFamilyMemberItem(ch, childIds[idx] || null)).join(", ");
    } else {
      childrenEl.textContent = "Neuvedeno";
    }
  }

  const houseEl = document.getElementById("modal-person-house");
  if (houseEl) {
    const baseHouse = person.houseNumber ? formatHouseLabel(person.houseId, person.houseNumber) : "Neuvedeno";
    const housesTraj = (person.housesVisited && person.housesVisited.length > 1)
      ? ` <span class="text-sky-800 font-semibold">(trajektorie: ${person.housesVisited.join(' ➔ ')})</span>`
      : '';
    houseEl.innerHTML = `${baseHouse}${housesTraj}`;
  }

  const bioEl = document.getElementById("modal-person-bio");
  if (bioEl) {
    const baseBio = person.biography || person.bio || (
      person.matchReasons && person.matchReasons.length > 0
        ? `Propojení napříč sčítacími archy (${person.yearsObserved ? person.yearsObserved.join('–') : ''}): ${person.matchReasons.slice(0, 3).join('; ')}.`
        : ''
    );
    bioEl.innerHTML = `${baseBio} <a href="cluster.html#cluster=${encodeURIComponent(person.id)}" class="inline-flex items-center gap-1 ml-1 font-bold text-emerald-800 hover:underline not-italic">🕸️ Zobrazit ego-graf v Clusterech ↗</a>`;
  }

  const houseBtn = document.getElementById("modal-person-house-btn");
  if (houseBtn) {
    houseBtn.onclick = () => {
      closePersonModal();
      openHouseDetail(person.houseId || ('cp' + person.houseNumber));
      document.getElementById("house-detail-container")?.scrollIntoView({ behavior: "smooth" });
    };
  }

  // Sjednocené záznamy ze sčítání lidu a matrik (Record Linkage)
  const linkedRecords = getLinkedRecordsForPerson(person.id);
  const linkedCountEl = document.getElementById("modal-person-linked-count");
  if (linkedCountEl) linkedCountEl.textContent = linkedRecords.length;

  const linkedContainer = document.getElementById("modal-person-linked-records");
  if (linkedContainer) {
    if (linkedRecords.length === 0) {
      linkedContainer.innerHTML = `<p class="text-slate-400 text-xs italic">K této osobě zatím nejsou připojeny žádné dodatečné sčítací zápisy.</p>`;
    } else {
      linkedContainer.innerHTML = linkedRecords.map(rec => `
        <div class="p-2.5 bg-white rounded-lg border border-amber-200 shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
          <div class="flex items-center gap-2 flex-wrap">
            <span class="px-2 py-0.5 bg-amber-100 font-bold text-amber-950 rounded text-[11px]">Sčítání ${rec.censusYear}</span>
            <span class="font-bold text-slate-800">${rec.fullName}</span>
            <span class="text-slate-500 text-[11px]">(*${rec.birthDate || '-'}, ${formatHouseLabel(rec.houseId, rec.houseNumber)}, ${rec.occupation})</span>
          </div>
          <div class="flex items-center gap-2 shrink-0 self-end sm:self-auto">
            ${rec.scanFile ? `
              <button onclick="openArchiveViewer('${rec.scanFile}', '${escapeHtmlAttr(rec.scanTitle || rec.fullName)}', 'ZAO Opava', '${rec.scanFile}')" class="px-2 py-1 text-[11px] font-bold bg-amber-800 hover:bg-amber-900 text-white rounded transition-colors flex items-center gap-1 shadow-2xs">
                <span>🔍</span> Scan
              </button>
            ` : ''}
            <button onclick="unlinkCensusRecord('${rec.id}')" class="px-2 py-1 text-[11px] font-semibold text-red-700 hover:bg-red-50 rounded border border-red-200 transition-colors" title="Odpojit tento zápis od této osoby">
              ✕ Odpojit
            </button>
          </div>
        </div>
      `).join('');
    }
  }

  // Kompletní životní dráha osoby (kurátorované events NEBO automatická osa ze sčítání + parishEvents)
  const eventsList = document.getElementById("modal-person-events-list");
  if (eventsList) {
    if (person.events && person.events.length > 0) {
      eventsList.innerHTML = person.events.map(ev => `
        <div class="p-3.5 bg-white rounded-xl border border-amber-200 shadow-sm flex flex-col sm:flex-row sm:items-start justify-between gap-3">
          <div class="space-y-1.5 flex-grow">
            <div class="flex items-center gap-2 flex-wrap">
              <span class="text-xs font-extrabold text-amber-900 bg-amber-100 px-2 py-0.5 rounded">${ev.year || ev.date}</span>
              <span class="text-xs font-bold text-slate-800">${getEventTypeName(ev.type)} ${ev.place ? '(' + ev.place + ')' : ''}</span>
            </div>
            <p class="text-xs text-slate-700 leading-relaxed">${ev.description}</p>
            
            ${ev.transcription ? `
              <div class="mt-2 p-2.5 bg-amber-50/90 rounded-lg border border-amber-200 text-xs">
                <div class="font-bold text-amber-950 flex items-center gap-1.5 mb-1">
                  <span>📜</span> <span>Přepis z kurentu / dobového originálu:</span>
                </div>
                <p class="font-mono text-[11px] text-slate-800 italic bg-white/80 p-2 rounded border border-amber-100 leading-relaxed">${ev.transcription}</p>
                ${ev.translation ? `
                  <div class="mt-2 pt-1.5 border-t border-amber-200/70">
                    <div class="font-bold text-amber-950 text-[11px] mb-0.5">🇨🇿 Český překlad / výklad:</div>
                    <p class="text-[11px] text-slate-700 leading-relaxed">${ev.translation}</p>
                  </div>
                ` : ''}
              </div>
            ` : ''}

            <p class="text-[10px] text-slate-400 font-mono mt-1">🏛️ <em>${ev.source}</em></p>
          </div>

          ${ev.scanFile ? `
            <button onclick="openArchiveViewer('${ev.scanFile}', '${(ev.scanTitle || person.name + ' – ' + getEventTypeName(ev.type)).replace(/'/g, "\\'")}', '${(ev.source || 'Archiv').replace(/'/g, "\\'")}', '${ev.scanFile}', '${(ev.archiveUrl || '').replace(/'/g, "\\'")}')"
              class="px-3 py-1.5 text-xs font-bold bg-amber-800 hover:bg-amber-900 text-white rounded-lg shadow-xs flex items-center gap-1.5 self-start sm:self-center shrink-0 transition-colors">
              <span>📜</span> <span>Zobrazit scan</span>
            </button>
          ` : ''}
        </div>
      `).join('');
    } else {
      const timelineItems = [];
      const bYearNum = parseInt(person.birthYear, 10);

      (person.parishEvents || []).forEach(pe => {
        timelineItems.push({
          year: pe.year || 1900,
          badge: pe.date || String(pe.year),
          title: pe.type || 'Matriční / archivní záznam',
          place: pe.place || '',
          desc: pe.description || '',
          source: 'Matriky / Archivy (ZAO Opava)',
          scanFile: pe.scanFile,
          scanTitle: pe.scanTitle || `${person.name} – ${pe.type}`
        });
      });

      linkedRecords.forEach(rec => {
        const ageTxt = (!Number.isNaN(bYearNum) && rec.censusYear >= bYearNum) ? ` • věk cca ${rec.censusYear - bYearNum} let` : '';
        timelineItems.push({
          year: rec.censusYear || 1900,
          badge: `Sčítání ${rec.censusYear}`,
          title: `📋 ${rec.fullName}${ageTxt}`,
          place: formatHouseLabel(rec.houseId, rec.houseNumber),
          desc: `Postavení: <strong>${rec.relation || '-'}</strong> | Povolání: <strong>${rec.occupation || '-'}</strong> | Narození: ${rec.birthDate || '-'} (${rec.birthPlace || '-'})`,
          source: rec.notes || `Sčítání lidu ${rec.censusYear}, ZAO Opava`,
          scanFile: rec.scanFile,
          scanTitle: rec.scanTitle || `${rec.fullName} – Sčítání ${rec.censusYear}`
        });
      });

      timelineItems.sort((a, b) => a.year - b.year);

      if (timelineItems.length > 0) {
        eventsList.innerHTML = timelineItems.map(item => `
          <div class="p-3.5 bg-white rounded-xl border border-amber-200 shadow-sm flex flex-col sm:flex-row sm:items-start justify-between gap-3">
            <div class="space-y-1 flex-grow">
              <div class="flex items-center gap-2 flex-wrap">
                <span class="text-xs font-extrabold text-amber-900 bg-amber-100 px-2 py-0.5 rounded">${item.badge}</span>
                <span class="text-xs font-bold text-slate-800">${item.title} ${item.place ? '(' + item.place + ')' : ''}</span>
              </div>
              <p class="text-xs text-slate-700 leading-relaxed">${item.desc}</p>
              <p class="text-[10px] text-slate-400 font-mono mt-0.5">🏛️ <em>${item.source}</em></p>
            </div>
            ${item.scanFile ? `
              <button onclick="openArchiveViewer('${item.scanFile}', '${escapeHtmlAttr(item.scanTitle)}', 'ZAO Opava', '${item.scanFile}')"
                class="px-3 py-1.5 text-xs font-bold bg-amber-800 hover:bg-amber-900 text-white rounded-lg shadow-xs flex items-center gap-1.5 self-start sm:self-center shrink-0 transition-colors">
                <span>📜</span> <span>Zobrazit scan</span>
              </button>
            ` : ''}
          </div>
        `).join('');
      } else {
        eventsList.innerHTML = `
          <div class="p-4 bg-amber-50/50 rounded-xl border border-amber-200 text-xs text-slate-600 italic">
            K této sjednocené osobě jsou aktuálně připojeny výše uvedené zápisy ze sčítání lidu.
          </div>
        `;
      }
    }
  }

  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function openPersonModalByName(name, birthDate = "", houseNum = "") {
  const normName = normalizeForPersonMatching(name);
  const birthYear = extractBirthYearFromText(birthDate);

  const matchInList = (list) => list.find(p => {
    const normPName = normalizeForPersonMatching(p.name.replace(/\([^)]*\)/g, "").replace(/^dr\.\s*/i, ""));
    const nameMatches = normPName === normName || normPName.includes(normName) || normName.includes(normPName);
    if (!nameMatches) return false;
    if (birthYear && p.birthYear) {
      return Math.abs(birthYear - p.birthYear) <= 2;
    }
    if (houseNum && p.houseNumber) {
      return p.houseNumber.toString() === houseNum.toString();
    }
    return true;
  });

  let match = (typeof peopleData !== "undefined") ? matchInList(peopleData) : null;
  if (!match && autoLinkedPeopleById.size > 0) {
    match = matchInList([...autoLinkedPeopleById.values()]);
  }

  if (match) {
    openPersonModal(match.id);
  } else {
    // If not in people biographies, filter the census table to this person!
    const regSearch = document.getElementById("registry-search-input");
    if (regSearch) {
      regSearch.value = name;
      applyRegistryFilters();
      setInhabitantViewMode("table");
      document.getElementById("obyvatele-section")?.scrollIntoView({ behavior: "smooth" });
    }
  }
}

function closePersonModal() {
  const modal = document.getElementById("person-detail-modal");
  if (modal) {
    modal.classList.add("hidden");
    document.body.style.overflow = "";
  }
}

// ==========================================================================
// VYKRESLENÍ KARET DOMŮ A DETAILU STAVENÍ
// ==========================================================================

function openHouseDetail(houseId, updateHash = true, panToHouse = updateHash) {
  if (typeof housesData === "undefined") return;
  const house = housesData.find(h => h.id === houseId);
  if (!house) return;

  currentHouseId = houseId;
  if (updateHash && window.history && window.history.replaceState) {
    window.history.replaceState(null, "", `#house=${houseId}`);
  }

  Object.keys(markers).forEach(id => {
    const el = markers[id]?.getElement?.();
    if (el) {
      if (id === houseId) {
        el.classList.add("active");
      } else {
        el.classList.remove("active");
      }
    }
  });

  if (panToHouse && map && typeof house.location?.lat === "number" && typeof house.location?.lng === "number") {
    map.setView([house.location.lat, house.location.lng], 17, { animate: true });
  }

  renderHouseCards();

  if (house.census && house.census.length > 0) {
    const hasCurrentYear = house.census.some(c => c.year === selectedCensusYear);
    if (!hasCurrentYear) {
      selectedCensusYear = house.census[house.census.length - 1].year;
    }
  }

  renderHouseDetailContent(house);

  if (updateHash) {
    const detailEl = document.getElementById("house-detail-container");
    if (detailEl) {
      const rect = detailEl.getBoundingClientRect();
      if (rect.top < 0 || rect.top > window.innerHeight * 0.7) {
        detailEl.scrollIntoView({ behavior: "smooth" });
      }
    }
  }
}

function renderHouseDetailContent(house) {
  const container = document.getElementById("house-detail-container");
  if (!container) return;
  const npuLink = getNpuUrl(house);
  const houseLabel = formatHouseLabel(house.id, house.number);

  const heritageBanner = house.isHeritage ? `
    <div class="mb-5 p-4 rounded-xl bg-red-50 border border-red-300 text-red-950 flex flex-col md:flex-row md:items-center justify-between gap-3 shadow-sm">
      <div class="flex items-start gap-3">
        <span class="text-2xl">🏛️</span>
        <div>
          <div class="flex flex-wrap items-center gap-2">
            <h4 class="font-extrabold text-sm text-red-900">Nemovitá kulturní památka České republiky</h4>
            <span class="text-[11px] font-mono bg-red-200 text-red-900 px-2 py-0.5 rounded font-bold">ÚSKP ${house.uskpNumber}</span>
            ${house.wikidataId ? `<span class="text-[10px] font-mono bg-slate-200 text-slate-800 px-1.5 py-0.5 rounded" title="Wikidata Q-identifikátor">Wikidata: ${house.wikidataId}</span>` : ''}
          </div>
          <p class="text-xs text-red-800 mt-1">${house.heritageDescription || ''}</p>
          <p class="text-[10px] text-red-700 font-semibold mt-1">📚 <strong>Zdroj:</strong> ${house.heritageSource || 'Památkový katalog NPÚ'}</p>
        </div>
      </div>
      
      <div class="flex flex-wrap md:flex-col gap-1.5 self-start md:self-center">
        <a href="${npuLink}" target="_blank" rel="noopener noreferrer" 
          class="inline-flex items-center justify-center gap-1 text-xs font-bold bg-red-700 hover:bg-red-800 text-white px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors shadow-sm">
          Památkový katalog NPÚ ↗
        </a>
        ${house.iisppUrl ? `
          <a href="${house.iisppUrl}" target="_blank" rel="noopener noreferrer" 
            class="inline-flex items-center justify-center gap-1 text-xs font-bold bg-amber-800 hover:bg-amber-900 text-white px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors shadow-sm">
            📄 Evidenční list (IISPP) ↗
          </a>
        ` : ''}
        ${house.wikiUrl ? `
          <a href="${house.wikiUrl}" target="_blank" rel="noopener noreferrer" 
            class="inline-flex items-center justify-center gap-1 text-xs font-bold bg-slate-700 hover:bg-slate-800 text-white px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors shadow-sm">
            🌐 Wikipedie památky ↗
          </a>
        ` : ''}
      </div>
    </div>
  ` : '';

  const timelineSection = house.timeline && house.timeline.length > 0 ? `
    <div class="mt-8 pt-6 border-t border-amber-200">
      <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
        <h3 class="text-xl font-bold text-slate-800 flex items-center gap-2 font-heading">
          <span class="text-amber-700">⏳</span> Časová osa držby gruntu a matričních událostí
        </h3>
        <div class="flex items-center gap-2 text-[11px]">
          <span class="px-2 py-0.5 rounded font-bold bg-emerald-100 text-emerald-900 border border-emerald-300">✔ Ověřeno skenem</span>
          <span class="px-2 py-0.5 rounded font-bold bg-amber-100 text-amber-900 border border-amber-300">⏳ Přečteno pomocníkem / k ověření</span>
        </div>
      </div>

      <div class="mt-4 mb-2">
        <div class="timeline-era-bar text-[10px] sm:text-xs">
          <div style="width: 25%;" class="era-monarchy" title="Habsburská monarchie (do 1867)"><span class="sm:hidden">do 1867</span><span class="hidden sm:inline">17.–19. stol. Monarchie</span></div>
          <div style="width: 35%;" class="era-dualism" title="Rakousko-Uhersko (1867–1918)"><span class="sm:hidden">1867–1918</span><span class="hidden sm:inline">1867–1918 Rakousko-Uhersko</span></div>
          <div style="width: 20%;" class="era-csr" title="První republika (1918–1938)"><span class="sm:hidden">1918–38 ČSR</span><span class="hidden sm:inline">1918–1938 ČSR</span></div>
          <div style="width: 20%;" class="era-modern" title="Protektorát a poválečné období"><span class="sm:hidden">1939+</span><span class="hidden sm:inline">1939–1949+</span></div>
        </div>
      </div>

      <div class="visual-timeline-nodes">
        ${house.timeline.map((item) => {
          const isVerified = item.sourceType === 'verified';
          return `
          <div class="visual-timeline-card group flex flex-col justify-between ${isVerified ? 'border-emerald-300/90' : 'border-amber-200'}">
            <div>
              <div class="flex items-center justify-between gap-1 mb-1.5 flex-wrap">
                <span class="text-xs font-extrabold text-amber-900 bg-amber-100 px-2.5 py-0.5 rounded-full border border-amber-300">${item.year}</span>
                <span class="text-[9px] font-bold ${isVerified ? 'text-emerald-900 bg-emerald-100 border border-emerald-300' : 'text-amber-900 bg-amber-100 border border-amber-300'} px-1.5 py-0.5 rounded">
                  ${isVerified ? '✔ Ověřeno skenem' : '⏳ Přečteno pomocníkem / k ověření'}
                </span>
              </div>
              <h4 class="font-bold text-slate-900 text-sm mb-1 group-hover:text-amber-800 transition-colors">${item.owner}</h4>
              <p class="text-xs text-slate-600 leading-relaxed">${item.event}</p>
            </div>
            
            <div class="mt-2 pt-2 border-t border-slate-100 flex items-center justify-between gap-1">
              <span class="text-[9px] text-slate-400 truncate" title="${item.source || ''}">📚 ${item.source || ''}</span>
              ${item.scanFile ? `
                <button onclick="openArchiveViewer('${item.scanFile}', '${(item.scanTitle || item.event || '').replace(/'/g, "\\'")}', '${(item.source || '').replace(/'/g, "\\'")}', '${item.scanFile}', '${(item.archiveUrl || '').replace(/'/g, "\\'")}')"
                  class="px-2 py-0.5 text-[10px] font-bold bg-amber-100 hover:bg-amber-200 text-amber-900 rounded border border-amber-300 flex items-center gap-1 whitespace-nowrap">
                  🔍 Scan
                </button>
              ` : ''}
            </div>
          </div>
        `}).join('')}
      </div>
    </div>
  ` : '';

  const censusSection = house.census && house.census.length > 0 ? `
    <div class="mt-8 pt-6 border-t border-amber-200">
      <div class="flex flex-wrap items-center justify-between gap-4 mb-4">
        <div>
          <div class="flex items-center gap-2 flex-wrap">
            <h3 class="text-xl font-bold text-slate-800 flex items-center gap-2 font-heading">
              <span class="text-amber-700">📜</span> Sčítání lidu & Obyvatelé (${houseLabel})
            </h3>
            ${house.census.find(c => c.year === selectedCensusYear)?.isSample
              ? '<span class="text-[10px] font-bold text-amber-900 bg-amber-200 px-2 py-0.5 rounded-full border border-amber-400">⏳ K ověření skenem</span>'
              : '<span class="text-[10px] font-bold text-emerald-900 bg-emerald-100 px-2 py-0.5 rounded-full border border-emerald-300">✔ Ověřený archivní záznam</span>'}
          </div>
          <p class="text-xs text-slate-500 mt-0.5">${String(house.id || '').startsWith('benkov_') ? 'Zemský archiv v Opavě & SOkA Šumperk (fond Okresní úřad Šumperk – I, NAD 999 – Sčítání lidu 1857–1921)' : 'Zemský archiv v Opavě & SOkA Šumperk (fond Okresní úřad Zábřeh, NAD 1000 – Sčítání lidu 1857–1921)'}</p>
        </div>
        
        <div class="flex flex-wrap gap-1.5 bg-amber-100/70 p-1 rounded-lg border border-amber-300">
          ${house.census.map(c => `
            <button onclick="switchCensusYear(${c.year})" 
              class="px-3 py-1.5 text-xs md:text-sm font-semibold rounded-md transition-all ${
                c.year === selectedCensusYear 
                  ? 'bg-amber-800 text-white shadow-sm' 
                  : 'text-amber-900 hover:bg-amber-200'
              }">
              ${c.year} ${c.isSample ? '⏳' : '✔'}
            </button>
          `).join('')}
        </div>
      </div>

      <div id="census-content-wrapper">
        ${renderCensusYearDetail(house, selectedCensusYear)}
      </div>
    </div>
  ` : `
    <div class="mt-6 p-4 rounded-lg bg-amber-50 border border-amber-200 text-sm text-slate-600">
      ℹ️ Pro toto stavení zatím nejsou sčítací operáty vloženy (zpracována je matriční a katastrální časová osa výše).
    </div>
  `;

  const documentsSection = house.documents && house.documents.length > 0 ? `
    <div class="mt-8 pt-6 border-t border-amber-200">
      <h3 class="text-xl font-bold text-slate-800 flex items-center gap-2 mb-4 font-heading">
        <span class="text-amber-700">✒️</span> Přepisy historických pramenů & Scany
      </h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        ${house.documents.map(doc => {
          const scanUrl = doc.scanFile || doc.file || '';
          return `
          <div class="parchment-card p-5 rounded-xl border border-amber-200 flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between text-xs font-semibold text-amber-800 mb-1">
                <span class="flex items-center gap-1.5">
                  <span>${doc.type || 'Pramen'}</span>
                  ${doc.isSample ? '<span class="text-[9px] bg-amber-200 text-amber-900 px-1.5 py-0.5 rounded font-bold">⏳ K ověření</span>' : '<span class="text-[9px] bg-emerald-100 text-emerald-900 px-1.5 py-0.5 rounded font-bold">✔ Ověřený zápis</span>'}
                </span>
                <span class="bg-amber-200/80 px-2 py-0.5 rounded font-mono">${doc.year || ''}</span>
              </div>
              <h4 class="font-bold text-slate-900 mb-1">${doc.title || ''}</h4>
              ${doc.description ? `<p class="text-[11px] text-slate-600 mb-2 leading-relaxed">${doc.description}</p>` : ''}
              ${doc.transcription ? `
              <div class="transcription-box p-3 rounded-lg text-sm text-slate-800 italic mb-2">
                "${doc.transcription}"
              </div>
              ` : ''}
            </div>

            <div class="mt-3 pt-2 border-t border-amber-200/80 flex items-center justify-between gap-2 text-[10px] text-slate-500">
              <span>📚 <strong>Pramen:</strong> ${doc.source || 'Archivní fond'}</span>
              ${scanUrl ? `
                <button onclick="openArchiveViewer('${scanUrl}', '${(doc.scanTitle || doc.title || '').replace(/'/g, "\\'")}', '${(doc.source || '').replace(/'/g, "\\'")}', '${scanUrl}', '${(doc.originalUrl || doc.archiveUrl || '').replace(/'/g, "\\'")}')"
                  class="px-2.5 py-1 text-xs font-bold bg-amber-800 hover:bg-amber-900 text-white rounded-lg flex items-center gap-1 whitespace-nowrap shadow-sm cursor-pointer">
                  🔍 Zobrazit scan
                </button>
              ` : ''}
            </div>
          </div>
        `;
        }).join('')}
      </div>
    </div>
  ` : '';

  const storiesSection = house.stories && house.stories.length > 0 ? `
    <div class="mt-6 pt-5 border-t border-amber-200">
      <h3 class="text-xl font-bold text-slate-800 flex items-center gap-2 mb-3.5 font-heading">
        <span class="text-amber-700">📖</span> Rodinná historie, matriky & paměti stavení
      </h3>
      <div class="space-y-4">
        ${house.stories.map(story => typeof story === 'string' ? `
          <div class="p-5 bg-white rounded-xl border border-amber-200 text-sm sm:text-base text-slate-800 font-serif-body leading-relaxed shadow-sm">
            ${story}
          </div>
        ` : `
          <div class="p-5 bg-white rounded-xl border ${story.isSample ? 'border-amber-300 bg-amber-50/40' : 'border-emerald-200 bg-emerald-50/20'} text-slate-800 shadow-sm space-y-2">
            <div class="flex items-center justify-between flex-wrap gap-2">
              <div class="flex items-center gap-2.5 flex-wrap">
                <h5 class="font-bold text-slate-900 text-sm sm:text-base font-heading">${story.title || 'Kapitola z dějin domu'}</h5>
                ${story.era ? `<span class="text-xs font-mono font-bold bg-amber-100 text-amber-900 px-2.5 py-0.5 rounded-md border border-amber-300">${story.era}</span>` : ''}
              </div>
              ${story.isSample ? '<span class="text-[10px] bg-amber-200 text-amber-900 px-2 py-0.5 rounded font-bold">⏳ Badatelská poznámka</span>' : '<span class="text-[10px] bg-emerald-100 text-emerald-900 px-2 py-0.5 rounded font-bold">✔ Ověřeno z archivních pramenů</span>'}
            </div>
            <p class="text-sm sm:text-base font-serif-body leading-relaxed text-slate-800">${story.text || story.content || ''}</p>
            ${story.source ? `
            <div class="pt-2 border-t border-amber-200/80 text-xs text-slate-500">
              📚 <strong>Zdroj / Fond:</strong> ${story.source}
            </div>
            ` : ''}
          </div>
        `).join('')}
      </div>
    </div>
  ` : '';

  const activeTab = typeof currentHouseDetailTab !== 'undefined' ? currentHouseDetailTab : 'overview';
  const censusCount = house.census ? house.census.length : 0;
  const docsCount = house.documents ? house.documents.length : 0;
  const storiesCount = house.stories ? house.stories.length : 0;

  const showOverview = activeTab === 'overview' || activeTab === 'all';
  const showCensus = activeTab === 'census' || activeTab === 'all';
  const showDocs = activeTab === 'documents' || activeTab === 'all';

  container.innerHTML = `
    <div class="parchment-card p-3.5 sm:p-6 md:p-8 rounded-2xl border border-amber-200 shadow-md">
      ${heritageBanner}

      <!-- Hlavička domu -->
      <div class="flex flex-col md:flex-row md:items-start justify-between gap-4">
        <div>
          <div class="flex flex-wrap items-center gap-2 mb-1">
            <span class="bg-amber-800 text-white font-bold text-sm px-3 py-0.5 rounded-full shadow-sm">
              ${houseLabel}
            </span>
            <span class="text-xs font-semibold text-amber-900 bg-amber-100 px-2.5 py-0.5 rounded-full border border-amber-300">
              ${house.type}
            </span>
            ${house.isHeritage ? '<span class="text-xs font-bold text-red-900 bg-red-100 px-2.5 py-0.5 rounded-full border border-red-300">🏛️ Památka ČR</span>' : ''}
          </div>
          <h2 class="text-2xl md:text-3xl font-extrabold text-slate-900 font-heading">
            ${house.localName}
          </h2>
          <p class="text-xs sm:text-sm text-slate-600 mt-1">
            📍 Katastrální parcela (1834): <strong>${house.location?.cadastralParcel || '-'}</strong> | Pozemkové parcely: <strong>${house.location?.landParcels || '-'}</strong>
            <span class="text-slate-400 ml-1">(${house.location?.source || 'ČÚZK'})</span>
          </p>
        </div>

        <div class="flex flex-wrap gap-2">
          <button onclick="openFeedbackIssue({type: 'house', id: '${house.id}'})" class="px-3 py-1.5 text-xs font-bold bg-amber-100 hover:bg-amber-200 text-amber-950 border border-amber-300 rounded-lg shadow-xs flex items-center gap-1 cursor-pointer">
            <span>💬</span> <span>Doplnit / opravit dům</span>
          </button>
          <button onclick="printHouseDetailSheet()" class="px-3.5 py-1.5 text-xs font-semibold bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 rounded-lg shadow-sm flex items-center gap-1.5 cursor-pointer">
            🖨️ Tisknout badatelský list
          </button>
        </div>
      </div>

      <!-- Přehledná lišta záložek uvnitř detailu stavení -->
      <div class="mt-5 pt-4 border-t border-amber-200 flex flex-wrap items-center justify-between gap-2">
        <div class="flex flex-wrap items-center gap-1.5 bg-amber-100/80 p-1.5 rounded-xl border border-amber-300">
          <button onclick="switchHouseDetailTab('overview')"
            class="px-3.5 py-1.5 text-xs sm:text-sm font-bold rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${activeTab === 'overview' ? 'bg-amber-800 text-white shadow-xs' : 'bg-white hover:bg-amber-200 text-amber-950'}">
            <span>📖</span> <span>Příběh & Držitelé${storiesCount > 0 ? ` (${storiesCount})` : ''}</span>
          </button>
          <button onclick="switchHouseDetailTab('census')"
            class="px-3.5 py-1.5 text-xs sm:text-sm font-bold rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${activeTab === 'census' ? 'bg-amber-800 text-white shadow-xs' : 'bg-white hover:bg-amber-200 text-amber-950'}">
            <span>📋</span> <span>Sčítání lidu (${censusCount})</span>
          </button>
          ${docsCount > 0 ? `
          <button onclick="switchHouseDetailTab('documents')"
            class="px-3.5 py-1.5 text-xs sm:text-sm font-bold rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${activeTab === 'documents' ? 'bg-amber-800 text-white shadow-xs' : 'bg-white hover:bg-amber-200 text-amber-950'}">
            <span>✒️</span> <span>Listiny & Scany (${docsCount})</span>
          </button>
          ` : ''}
          <button onclick="switchHouseDetailTab('all')"
            class="px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer flex items-center gap-1 ${activeTab === 'all' ? 'bg-amber-800 text-white shadow-xs' : 'bg-amber-50/80 hover:bg-amber-200 text-slate-700'}" title="Zobrazit všechny sekce stavení pod sebou">
            <span>📑</span> <span>Vše pod sebou</span>
          </button>
        </div>
        ${activeTab === 'overview' && censusCount > 0 ? `
          <button onclick="switchHouseDetailTab('census')" class="text-xs font-bold text-amber-900 hover:text-amber-700 underline cursor-pointer flex items-center gap-1">
            <span>Přejít na obyvatele ve sčítání (${censusCount} ročníků)</span> <span>→</span>
          </button>
        ` : ''}
      </div>

      ${showOverview ? `
        <!-- Popis a stav ve Stabilním katastru (zvětšené čitelné písmo) -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-5">
          <div class="lg:col-span-2 bg-white/95 p-5 rounded-xl border border-amber-200/90 text-slate-800 leading-relaxed shadow-2xs">
            <h4 class="font-bold text-slate-900 text-base sm:text-lg font-heading mb-2">Popis a historie usedlosti</h4>
            <p class="text-sm sm:text-base font-serif-body leading-relaxed">${house.description}</p>
          </div>
          <div class="bg-amber-50/90 p-5 rounded-xl border border-amber-200 text-xs sm:text-sm text-slate-700 flex flex-col justify-between">
            <div>
              <h4 class="font-bold text-amber-900 text-sm sm:text-base font-heading mb-1.5">🗺️ Stabilní katastr (1834)</h4>
              <p class="leading-relaxed">${house.statusStableCadastre || 'Zaneseno v císařském otisku stabilního katastru z roku 1834.'}</p>
            </div>
            <div class="mt-3 pt-2.5 border-t border-amber-200 flex items-center justify-between gap-1">
              <span class="text-[11px] text-slate-500">📚 ${house.cadastreSource || 'ÚAZK ČÚZK 1834'}</span>
              ${house.cadastreScan ? `
                <button onclick="openArchiveViewer('${house.cadastreScan}', 'Stabilní katastr 1834 – ${houseLabel}', '${(house.cadastreSource || 'ÚAZK ČÚZK 1834').replace(/'/g, "\\'")}', '${house.cadastreScan}')"
                  class="px-2.5 py-1 text-xs font-bold bg-amber-800 hover:bg-amber-900 text-white rounded-lg flex items-center gap-1 whitespace-nowrap shadow-sm cursor-pointer">
                  🔍 Otisk 1834
                </button>
              ` : ''}
            </div>
          </div>
        </div>

        ${storiesSection}
        ${timelineSection}

        ${activeTab === 'overview' && censusCount > 0 ? `
          <div class="mt-6 pt-4 border-t border-amber-200 flex flex-wrap items-center justify-between gap-3">
            <span class="text-xs sm:text-sm text-slate-600">
              💡 Pro toto stavení jsou zpracovány archy sčítání lidu a soupisy chovaného dobytka:
            </span>
            <button onclick="switchHouseDetailTab('census')" class="px-4 py-2 text-xs sm:text-sm font-bold bg-amber-800 hover:bg-amber-900 text-white rounded-xl shadow-sm transition-colors cursor-pointer flex items-center gap-1.5">
              <span>📋</span> <span>Zobrazit sčítání lidu a obyvatele (${censusCount} ročníků) →</span>
            </button>
          </div>
        ` : ''}
      ` : ''}

      ${showCensus ? censusSection : ''}
      ${showDocs ? documentsSection : ''}
    </div>
  `;
}

let currentHouseDetailTab = "overview";

function switchHouseDetailTab(tab) {
  currentHouseDetailTab = tab;
  const house = housesData.find(h => h.id === currentHouseId);
  if (!house) return;
  renderHouseDetailContent(house);
}

function printHouseDetailSheet() {
  currentHouseDetailTab = "all";
  const house = housesData.find(h => h.id === currentHouseId);
  if (house) renderHouseDetailContent(house);
  setTimeout(() => window.print(), 150);
}

function switchCensusYear(year) {
  selectedCensusYear = year;
  if (currentHouseDetailTab !== "all") {
    currentHouseDetailTab = "census";
  }
  const house = housesData.find(h => h.id === currentHouseId);
  if (!house) return;
  renderHouseDetailContent(house);
}

function renderCensusYearDetail(house, year) {
  const census = house.census?.find(c => c.year === year);
  if (!census) return `<p class="text-sm text-slate-500">Záznam pro rok ${year} nebyl nalezen.</p>`;

  const livestockBadges = census.livestock ? `
    <div class="mt-4 p-3.5 bg-amber-50/90 rounded-xl border border-amber-200/80">
      <h5 class="text-xs font-bold text-amber-900 mb-2 uppercase tracking-wide">Chované hospodářské zvířectvo (${census.year})</h5>
      <div class="grid grid-cols-3 sm:grid-cols-6 gap-2 text-center text-xs">
        <div class="p-2 bg-white rounded-lg border border-amber-200"><span class="block font-extrabold text-base text-amber-800">${census.livestock.horses || 0}</span> 🐎 Koně</div>
        <div class="p-2 bg-white rounded-lg border border-amber-200"><span class="block font-extrabold text-base text-amber-800">${census.livestock.cattle || 0}</span> 🐄 Skot / Krávy</div>
        <div class="p-2 bg-white rounded-lg border border-amber-200"><span class="block font-extrabold text-base text-amber-800">${census.livestock.pigs || 0}</span> 🐖 Prasata</div>
        <div class="p-2 bg-white rounded-lg border border-amber-200"><span class="block font-extrabold text-base text-amber-800">${census.livestock.goats || 0}</span> 🐐 Kozy / Ovce</div>
        <div class="p-2 bg-white rounded-lg border border-amber-200"><span class="block font-extrabold text-base text-amber-800">${census.livestock.poultry || 0}</span> 🐔 Drůbež</div>
        <div class="p-2 bg-white rounded-lg border border-amber-200"><span class="block font-extrabold text-base text-amber-800">${census.livestock.beehives || 0}</span> 🐝 Úly</div>
      </div>
    </div>
  ` : '';

  const scanButtonsHtml = (() => {
    const srcText = (census.archiveSource || census.source || 'SOkA Šumperk / ZAO Opava').replace(/'/g, "\\'");
    const archList = Array.isArray(census.sourceArchives) && census.sourceArchives.length > 0
      ? census.sourceArchives.filter(sa => sa && sa.file).map(sa => ({
          file: String(sa.file).replace(/\\/g, '/'),
          label: sa.label || census.scanTitle || `Sčítací operát ${census.year}`,
          originalUrl: sa.originalUrl || census.originalUrl || ''
        }))
      : (Array.isArray(house.documents)
          ? house.documents.filter(d => String(d.type || '') === 'census' && String(d.year || '') === String(census.year) && (d.scanFile || d.file)).map(d => ({
              file: String(d.scanFile || d.file).replace(/\\/g, '/'),
              label: d.title || d.scanTitle || `Sčítací operát ${census.year}`,
              originalUrl: d.originalUrl || d.archiveUrl || ''
            }))
          : []);

    if (archList.length > 0) {
      return `
        <div class="flex flex-wrap items-center gap-1.5">
          ${archList.map((item, idx) => {
            const isDomovni = item.file.includes('domovni') || item.label.toLowerCase().includes('sběrný arch');
            const shortBtn = isDomovni
              ? '📋 Sběrný arch domovní'
              : (item.label.match(/Byt\s*\d+/i) ? `🔍 ${item.label.match(/Byt\s*\d+/i)[0]}` : (archList.length === 1 ? '🔍 Prohlédnout archivní scan sčítacího listu' : `🔍 Bytový arch #${idx + 1}`));
            const btnCls = isDomovni
              ? 'bg-stone-700 hover:bg-stone-800 text-amber-50'
              : 'bg-amber-800 hover:bg-amber-900 text-white';
            return `<button onclick="openArchiveViewer('${item.file.replace(/'/g, "\\'")}', '${item.label.replace(/'/g, "\\'")}', '${srcText}', '${item.file.replace(/'/g, "\\'")}', '${(item.originalUrl || '').replace(/'/g, "\\'")}')" class="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-bold ${btnCls} rounded-lg transition-colors shadow-sm cursor-pointer">${shortBtn}</button>`;
          }).join('')}
        </div>
      `;
    }
    if (census.scanFile) {
      const cleanScan = String(census.scanFile).replace(/\\/g, '/');
      return `
        <button onclick="openArchiveViewer('${cleanScan.replace(/'/g, "\\'")}', '${(census.scanTitle || 'Sčítací operát ' + census.year).replace(/'/g, "\\'")}', '${srcText}', '${cleanScan.replace(/'/g, "\\'")}', '${(census.originalUrl || '').replace(/'/g, "\\'")}')"
          class="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold bg-amber-800 hover:bg-amber-900 text-white rounded-lg transition-colors shadow-sm self-start sm:self-center cursor-pointer">
          🔍 Prohlédnout archivní scan sčítacího listu
        </button>
      `;
    }
    return '';
  })();

  return `
    <div class="space-y-3">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-600 bg-white/70 p-2.5 rounded-lg border border-amber-200 gap-2">
        <div>
          <span><strong>Datum soupisu:</strong> ${census.date || census.censusDate || census.year}</span> | 
          <span>📚 <strong>Fond:</strong> ${census.archiveSource || census.source || 'SOkA Šumperk / ZAO Opava'}</span>
        </div>
        
        ${scanButtonsHtml}
      </div>

      <div class="overflow-x-auto bg-white rounded-xl border border-amber-200 shadow-sm">
        <table class="w-full text-left text-xs md:text-sm text-slate-700 mobile-responsive-table">
          <thead class="bg-amber-100/70 text-amber-950 font-bold uppercase text-[11px]">
            <tr>
              <th class="p-3">Jméno a příjmení</th>
              <th class="p-3">Postavení v rodině</th>
              <th class="p-3">Narození (datum / místo)</th>
              <th class="p-3">Povolání / Zaměstnání</th>
              <th class="p-3">Poznámka / Gramotnost</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-amber-100">
            ${(census.inhabitants || []).map(person => `
              <tr class="hover:bg-amber-50/60 transition-colors">
                <td class="p-3 font-semibold text-slate-900">
                  <button onclick="openPersonModalByName('${(person.name || '').replace(/'/g, "\\'")}', '${(person.birthDate || '').replace(/'/g, "\\'")}', '${house.number}')" class="text-amber-900 hover:text-amber-700 hover:underline font-bold text-left flex items-center gap-1">
                    <span>👤</span> ${person.name}
                  </button>
                </td>
                <td class="p-3 text-slate-600" data-label="Postavení">${person.relation || '-'}</td>
                <td class="p-3" data-label="Narození">${person.birthDate || '-'} <br><span class="text-xs text-slate-500">${person.birthPlace || ''}</span></td>
                <td class="p-3" data-label="Povolání"><span class="bg-amber-50 px-2 py-1 rounded border border-amber-200">${person.occupation || '-'}</span></td>
                <td class="p-3 text-xs" data-label="Narození / Věk">${person.notes || person.literacy || '-'}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>

      ${livestockBadges}
      ${census.note ? `<p class="text-xs text-slate-500 italic mt-2">📌 Poznámka: ${census.note}</p>` : ''}
    </div>
  `;
}

function renderHouseCards(filteredHouses = null) {
  const container = document.getElementById("houses-list-container");
  if (!container) return;

  const list = filteredHouses || housesData;

  container.innerHTML = list.map(house => {
    const isHeritage = house.isHeritage;
    const isSelected = house.id === currentHouseId;
    const houseLabel = formatHouseLabel(house.id, house.number);
    return `
      <div onclick="openHouseDetail('${house.id}'); document.getElementById('house-detail-container')?.scrollIntoView({behavior: 'smooth'});"
        class="parchment-card p-4 rounded-xl border ${isSelected ? 'border-amber-700 ring-2 ring-amber-500 bg-amber-50' : 'border-amber-200 hover:border-amber-400'} cursor-pointer transition-all shadow-xs flex items-start justify-between gap-3">
        <div>
          <div class="flex items-center gap-2 mb-1">
            <span class="text-sm font-extrabold ${isHeritage ? 'text-red-800' : 'text-amber-950'} font-heading">
              ${isHeritage ? '🏛️ ' : ''}${houseLabel}
            </span>
            ${isHeritage ? '<span class="text-[10px] font-bold bg-red-100 text-red-800 px-2 py-0.5 rounded-full border border-red-200">Kulturní památka</span>' : ''}
          </div>
          <h4 class="text-xs font-bold text-slate-800">${house.localName}</h4>
          <p class="text-[11px] text-slate-500 line-clamp-1 mt-0.5">${house.description}</p>
        </div>
        <span class="text-xs text-amber-700 font-bold shrink-0">Detail →</span>
      </div>
    `;
  }).join("");
}

function searchHouses(query) {
  const q = normalizeSearchText(query);
  if (!q) {
    filterHeritageHouses(currentHeritageFilter);
    return;
  }

  const isGruntQuery = categorySearchKeywords.grunt.some(kw => q === kw || q.includes(kw) || kw.includes(q));

  const filtered = housesData.filter(h => {
    const normNum = normalizeSearchText(h.number);
    const normName = normalizeSearchText(h.localName);
    const normDesc = normalizeSearchText(h.description);
    const normUskp = normalizeSearchText(h.uskpNumber);

    const directMatch = normNum.includes(q) ||
      normName.includes(q) ||
      normDesc.includes(q) ||
      normUskp.includes(q);

    const timelineMatch = h.timeline && h.timeline.some(t =>
      normalizeSearchText(t.owner).includes(q) || normalizeSearchText(t.event).includes(q)
    );

    const censusMatch = h.census && h.census.some(c =>
      c.inhabitants && c.inhabitants.some(p =>
        normalizeSearchText(p.name).includes(q) || normalizeSearchText(p.occupation).includes(q)
      )
    );

    const registryMatch = typeof censusRegistryData !== "undefined" && censusRegistryData.some(r => {
      const rHouseId = r.houseId || `cp${r.houseNumber}`;
      if (rHouseId !== h.id) return false;
      if (isGruntQuery && r.categoryKey === 'grunt') return true;
      return normalizeSearchText(r.fullName).includes(q) || normalizeSearchText(r.occupation).includes(q);
    });

    return directMatch || timelineMatch || censusMatch || registryMatch;
  });

  renderHouseCards(filtered);
}

function zoomToHouse(houseId) {
  const house = housesData.find(h => h.id === houseId);
  if (!house || !map) return;
  if (typeof house.location?.lat === "number" && typeof house.location?.lng === "number") {
    map.setView([house.location.lat, house.location.lng], 18, { animate: true });
  }
  if (markers[houseId]) markers[houseId].openTooltip();
  document.getElementById("mapa-section")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

// ==========================================================================
// ATLAS A GALERIE HISTORICKÝCH MAP DLOUHOMILOVA (1716–1983)
// ==========================================================================

function renderHistoricalMapsSection(filterCategory = "all") {
  const container = document.getElementById("historical-maps-grid");
  if (!container || typeof historicalMapsData === "undefined") return;

  const lang = (window.currentLang && ["cs", "en", "de"].includes(window.currentLang)) ? window.currentLang : "cs";
  const filtered = filterCategory === "all" 
    ? historicalMapsData 
    : historicalMapsData.filter(m => m.category === filterCategory);

  container.innerHTML = filtered.map(mapItem => `
    <div class="parchment-card p-5 rounded-2xl border border-amber-200 hover:border-amber-500 transition-all flex flex-col justify-between group shadow-sm bg-white">
      <div class="space-y-3">
        <div class="flex items-center justify-between gap-2">
          <span class="text-xs font-bold text-amber-900 bg-amber-100 px-2.5 py-0.5 rounded-full border border-amber-300">
            ${mapItem.year}
          </span>
          <span class="text-[11px] font-semibold text-slate-500">
            📏 ${mapItem.scale}
          </span>
        </div>

        <div class="relative overflow-hidden rounded-xl border border-amber-200 bg-slate-900 cursor-pointer aspect-video"
             onclick="openArchiveViewer('${mapItem.imageFile}', '${mapItem.title.replace(/'/g, "\\'")} (${mapItem.year})', '${(mapItem.author + ' – ' + mapItem.archive).replace(/'/g, "\\'")}', '${mapItem.imageFile}', '${mapItem.externalUrl || ""}')">
          <img src="${mapItem.imageFile}" alt="${mapItem.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90 hover:opacity-100">
          <div class="absolute bottom-2 right-2 bg-black/75 text-white text-[10px] font-bold px-2 py-0.5 rounded flex items-center gap-1 backdrop-blur-xs">
            <span>🔍</span> <span>Zvětšit v prohlížeči</span>
          </div>
        </div>

        <div>
          <h4 class="font-bold text-slate-900 text-sm font-heading group-hover:text-amber-800 transition-colors">
            ${mapItem.title}
          </h4>
          ${mapItem.subTitle ? `<p class="text-[11px] text-amber-900 font-semibold mt-0.5">${mapItem.subTitle}</p>` : ''}
          <div class="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-[10px] text-slate-500 font-medium mt-1">
            <span>🏛️ <strong class="text-slate-700">${mapItem.archive}</strong></span>
            <span>•</span>
            <span>✍️ ${mapItem.author}</span>
          </div>
          <p class="text-xs text-slate-600 mt-2 leading-relaxed">
            ${mapItem.description}
          </p>
        </div>

        ${mapItem.annotation ? `
          <div class="p-2.5 bg-stone-50 border border-stone-200 rounded-xl text-[11px] text-slate-600 space-y-0.5">
            <span class="font-bold text-stone-700 block uppercase tracking-wider text-[9px] flex items-center gap-1">
              <span>📋</span> Archivní záznam a parametry:
            </span>
            <p class="italic leading-snug">${mapItem.annotation}</p>
          </div>
        ` : ''}

        ${mapItem.toponyms ? `
          <div class="bg-amber-100/60 border border-amber-300/80 rounded-xl p-2.5 space-y-1.5">
            <span class="text-[10px] font-extrabold uppercase tracking-wider text-amber-950 flex items-center gap-1">
              <span>🏷️</span> Dobový zápis názvů na mapě:
            </span>
            <div class="flex flex-wrap items-center gap-1 text-[11px]">
              <span class="px-2 py-0.5 bg-white text-amber-950 font-bold rounded-lg border border-amber-300 shadow-2xs" title="Dlouhomilov">
                🏡 ${mapItem.toponyms.dlouhomilov}
              </span>
              ${mapItem.toponyms.benkov ? `
                <span class="px-2 py-0.5 bg-white text-amber-950 font-bold rounded-lg border border-amber-300 shadow-2xs" title="Benkov">
                  🏘️ ${mapItem.toponyms.benkov}
                </span>
              ` : ''}
              ${mapItem.toponyms.medelske ? `
                <span class="px-2 py-0.5 bg-white text-amber-950 font-bold rounded-lg border border-amber-300 shadow-2xs" title="Medelské / Tři Dvory">
                  🌾 ${mapItem.toponyms.medelske}
                </span>
              ` : ''}
            </div>
          </div>
        ` : ''}

        <div class="space-y-1 pt-2 border-t border-amber-100">
          <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400">Klíčové prvky na mapě:</span>
          <ul class="text-[11px] text-slate-600 space-y-1">
            ${mapItem.keyFeatures.map(f => `<li class="flex items-start gap-1.5"><span class="text-amber-600 font-bold">✓</span> <span>${f}</span></li>`).join("")}
          </ul>
        </div>

        ${mapItem.citationIso690 ? `
          <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-[10px] text-slate-700 space-y-1">
            <div class="flex items-center justify-between gap-2">
              <span class="font-bold text-slate-800 uppercase tracking-wider text-[9px] flex items-center gap-1">
                <span>📖</span> <span>Citace (ČSN ISO 690):</span>
              </span>
              <button type="button"
                      data-citation="${escapeHtmlAttr(mapItem.citationIso690)}"
                      onclick="copyCitationText(this)"
                      class="px-1.5 py-0.5 text-[10px] font-bold bg-white hover:bg-amber-100 text-slate-700 rounded border border-slate-300 transition-colors cursor-pointer"
                      title="Kopírovat citaci dle ČSN ISO 690">
                <span>📋</span> <span>Kopírovat</span>
              </button>
            </div>
            <p data-i18n-lock="true" class="font-mono leading-snug break-words text-slate-700">${mapItem.citationIso690}</p>
          </div>
        ` : ''}
      </div>

      <div class="pt-4 border-t border-amber-200 flex flex-wrap items-center justify-between gap-2 mt-4">
        <div class="flex flex-wrap items-center gap-1.5">
          <button onclick="openArchiveViewer('${mapItem.imageFile}', '${mapItem.title.replace(/'/g, "\\'")} (${mapItem.year})', '${(mapItem.author + ' – ' + mapItem.archive).replace(/'/g, "\\'")}', '${mapItem.imageFile}', '${mapItem.externalUrl || ""}')"
                  class="px-2.5 py-1.5 text-xs font-semibold bg-white hover:bg-amber-100 text-slate-800 rounded-lg border border-amber-300 transition-colors flex items-center gap-1">
            <span>📜</span> <span>Detail scanu</span>
          </button>
          ${Array.isArray(mapItem.sourceLinks) && mapItem.sourceLinks.length > 0 ? mapItem.sourceLinks.map(sl => {
            const slLabel = lang === "en" ? (sl.labelEn || sl.label) : (lang === "de" ? (sl.labelDe || sl.label) : sl.label);
            return `
              <a href="${sl.url}" target="_blank" rel="noopener noreferrer" data-i18n-lock="true"
                 class="px-2 py-1.5 text-[11px] font-bold bg-blue-50 hover:bg-blue-100 text-blue-900 rounded-lg border border-blue-300 transition-colors flex items-center gap-1 shadow-2xs" title="${escapeHtmlAttr(sl.url)}">
                <span>🌐</span> <span>${slLabel} ↗</span>
              </a>
            `;
          }).join("") : (mapItem.externalUrl ? `
            <a href="${mapItem.externalUrl}" target="_blank" rel="noopener noreferrer"
               class="px-2.5 py-1.5 text-xs font-bold bg-blue-50 hover:bg-blue-100 text-blue-900 rounded-lg border border-blue-300 transition-colors flex items-center gap-1 shadow-2xs" title="Otevřít přímo zdrojový originál: ${mapItem.externalUrl}">
              <span>🌐</span> <span>Přesný zdroj ↗</span>
            </a>
          ` : '')}
          <button onclick="openFeedbackIssue({type: 'map', id: '${mapItem.id}'})"
                  class="px-2 py-1.5 text-xs text-amber-800 hover:text-amber-950 bg-amber-50 hover:bg-amber-100 rounded-lg border border-amber-200 transition-colors flex items-center gap-1" title="Zpětná vazba nebo oprava k této mapě">
            <span>💬</span>
          </button>
        </div>
        ${mapItem.isOverlay ? `
          <button onclick="activateMapOverlayFromAtlas('${mapItem.overlayKey}')"
                  class="px-3 py-1.5 text-xs font-bold bg-amber-800 hover:bg-amber-900 text-white rounded-lg transition-colors flex items-center gap-1 shadow-xs">
            <span>🗺️</span> <span>Na mapě</span>
          </button>
        ` : ''}
      </div>
    </div>
  `).join("");
}

// Zvýraznění a rychlá aktivace z Atlasu map
function activateMapOverlayFromAtlas(overlayKey) {
  const select = document.getElementById("historical-map-select");
  if (select) select.value = overlayKey;
  const slider = document.getElementById("cadastre-opacity-slider");
  if (slider) {
    const curVal = parseFloat(slider.value);
    if (overlayKey.startsWith("orto")) {
      slider.value = "100";
    } else if (curVal === 0) {
      slider.value = "85";
    }
  }
  switchHistoricalOverlay(overlayKey);
  document.getElementById("mapa-section")?.scrollIntoView({ behavior: "smooth" });
}

function filterHistoricalMaps(category) {
  document.querySelectorAll(".map-atlas-filter-btn").forEach(btn => {
    if (btn.dataset.category === category) {
      btn.classList.add("bg-amber-800", "text-white");
      btn.classList.remove("bg-white", "text-slate-700");
    } else {
      btn.classList.remove("bg-amber-800", "text-white");
      btn.classList.add("bg-white", "text-slate-700");
    }
  });
  renderHistoricalMapsSection(category);
}

// ==========================================================================
// KATALOG LETECKÝCH MĚŘICKÝCH SNÍMKŮ ČÚZK (LMS 1937–2026)
// ==========================================================================

function filterLmsArchive(settlement) {
  currentLmsSettlementFilter = settlement || "all";
  renderLmsArchiveSection(currentLmsSettlementFilter);
}

function renderLmsArchiveSection(settlement = currentLmsSettlementFilter) {
  const container = document.getElementById("lms-archive-container");
  if (!container || typeof aerialLmsArchiveData === "undefined") return;

  currentLmsSettlementFilter = settlement || "all";
  container.setAttribute("data-i18n-lock", "true");

  const lang = (window.currentLang && ["cs", "en", "de"].includes(window.currentLang)) ? window.currentLang : "cs";
  const t = {
    cs: {
      badge: "✈️ Archiv ČÚZK • Letecké měřické snímky (LMS)",
      heading: "Archiv leteckých měřických snímků ČÚZK (LMS 1937–2026)",
      sub: "Přehled všech 24 zdigitalizovaných ročníků z portálu ags.cuzk.gov.cz/archiv/ pro Dlouhomilov, osadu Medelské a Benkov. Odkazy otevírají originální měřické snímky přímo v prohlížeči ČÚZK bez přihlášení (snímky do r. 1997 © MO ČR, od r. 1998 © ČÚZK).",
      allBtn: "Všechny osady (24)",
      dlBtn: "🏘️ Dlouhomilov (22)",
      mdBtn: "🏡 Medelské (21)",
      bkBtn: "⛰️ Benkov (23)",
      typeBw: "ČB analog",
      typeColor: "Barevný analog",
      typeDigital: "Digitální",
      framesWord: "sn.",
      viewDl: "Dlouhomilov (LMS)",
      viewBk: "Benkov (LMS)",
      onMap: "Na mapě",
      nonDigTitle: "Nezdigitalizovaná archivní snímkování v oblasti:",
      nonDigDl: "Dlouhomilov & Medelské: 1981, 1983, 1984, 1985, 1989",
      nonDigBk: "Benkov: 1981, 1984, 1985, 1987, 1989",
      nonDigNote: "Sken originálního snímku lze u ČÚZK vyžádat na e-mailu zu-obchod@cuzk.gov.cz.",
      openPortal: "Otevřít celý Archiv ČÚZK (LMS)",
      citTitle: "Citace a původní zdroje leteckého snímkování (ČSN ISO 690)",
      citSub: "Přímé odkazy na výchozí geoportály, služby OGC WMS a doporučený tvar citace dle ČSN ISO 690:",
      citCopy: "📋 Kopírovat",
      citRefsLink: "📚 Katalog pramenů (ISO 690)",
      citModalLink: "⚖️ Licence & citace",
      srcLmsPortal: "Archiv ČÚZK – LMS (1937–2026)",
      srcWmsOrto: "ČÚZK WMS-ORTOARCHIV (2000–2022)",
      srcCenia: "CENIA Historická ortofotomapa (1953–1954, CC-BY 4.0)"
    },
    en: {
      badge: "✈️ ČÚZK Archive • Aerial Survey Frames (LMS)",
      heading: "ČÚZK Aerial Survey Archive (LMS 1937–2026)",
      sub: "Complete catalog of all 24 digitized aerial survey years from ags.cuzk.gov.cz/archiv/ covering Dlouhomilov, Medelské, and Benkov. Links open original high-resolution survey frames directly in the ČÚZK viewer without login (pre-1998 © Ministry of Defense CR, 1998+ © ČÚZK).",
      allBtn: "All Settlements (24)",
      dlBtn: "🏘️ Dlouhomilov (22)",
      mdBtn: "🏡 Medelské (21)",
      bkBtn: "⛰️ Benkov (23)",
      typeBw: "B&W analog",
      typeColor: "Color analog",
      typeDigital: "Digital",
      framesWord: "fr.",
      viewDl: "Dlouhomilov (LMS)",
      viewBk: "Benkov (LMS)",
      onMap: "On Map",
      nonDigTitle: "Additional non-digitized aerial survey years in this area:",
      nonDigDl: "Dlouhomilov & Medelské: 1981, 1983, 1984, 1985, 1989",
      nonDigBk: "Benkov: 1981, 1984, 1985, 1987, 1989",
      nonDigNote: "Paid scanning of original film frames can be requested from ČÚZK via zu-obchod@cuzk.gov.cz.",
      openPortal: "Open Full ČÚZK Archive (LMS)",
      citTitle: "Citations & Original Sources for Aerial Photography (ISO 690)",
      citSub: "Direct links to the authoritative archives, OGC WMS endpoints, and recommended bibliographic citations:",
      citCopy: "📋 Copy",
      citRefsLink: "📚 Source Catalog (ISO 690)",
      citModalLink: "⚖️ License & Citations",
      srcLmsPortal: "ČÚZK Archive – LMS (1937–2026)",
      srcWmsOrto: "ČÚZK WMS-ORTOARCHIV (2000–2022)",
      srcCenia: "CENIA 1950s Historical Orthophoto (1953–1954, CC-BY 4.0)"
    },
    de: {
      badge: "✈️ ČÚZK-Archiv • Luftbild-Messaufnahmen (LMS)",
      heading: "Archiv der Luftbild-Messaufnahmen ČÚZK (LMS 1937–2026)",
      sub: "Übersicht aller 24 digitalisierten Befliegungsjahrgänge des Portals ags.cuzk.gov.cz/archiv/ für Lomigsdorf (Dlouhomilov), Dreihofen (Medelské) und Benke (Benkov). Die Links öffnen die Originalaufnahmen ohne Anmeldung direkt im ČÚZK-Viewer (bis 1997 © MO ČR, ab 1998 © ČÚZK).",
      allBtn: "Alle Orte (24)",
      dlBtn: "🏘️ Dlouhomilov (22)",
      mdBtn: "🏡 Medelské (21)",
      bkBtn: "⛰️ Benkov (23)",
      typeBw: "S/W analog",
      typeColor: "Farb-Analog",
      typeDigital: "Digital",
      framesWord: "Aufn.",
      viewDl: "Dlouhomilov (LMS)",
      viewBk: "Benkov (LMS)",
      onMap: "Auf Karte",
      nonDigTitle: "Weitere nicht digitalisierte Befliegungsjahre im Gebiet:",
      nonDigDl: "Dlouhomilov & Medelské: 1981, 1983, 1984, 1985, 1989",
      nonDigBk: "Benkov: 1981, 1984, 1985, 1987, 1989",
      nonDigNote: "Die Digitalisierung von Originalaufnahmen kann kostenpflichtig über zu-obchod@cuzk.gov.cz angefordert werden.",
      openPortal: "Gesamtes ČÚZK-Archiv (LMS) öffnen",
      citTitle: "Quellenzitate & Originalportale der Luftbilder (ISO 690)",
      citSub: "Direkte Links zu den ursprünglichen Geoportalen, OGC-WMS-Diensten und empfohlenen Zitierformen:",
      citCopy: "📋 Kopieren",
      citRefsLink: "📚 Quellenkatalog (ISO 690)",
      citModalLink: "⚖️ Lizenz & Zitate",
      srcLmsPortal: "ČÚZK-Archiv – LMS (1937–2026)",
      srcWmsOrto: "ČÚZK WMS-ORTOARCHIV (2000–2022)",
      srcCenia: "CENIA Historisches Orthofoto (1953–1954, CC-BY 4.0)"
    }
  }[lang];

  const yearsList = currentLmsSettlementFilter === "all"
    ? aerialLmsArchiveData.years
    : aerialLmsArchiveData.years.filter(y => y.counts && y.counts[currentLmsSettlementFilter] > 0);

  const filterButtons = [
    { id: "all", label: t.allBtn },
    { id: "dlouhomilov", label: t.dlBtn },
    { id: "medelske", label: t.mdBtn },
    { id: "benkov", label: t.bkBtn }
  ];

  const getTypeBadge = (type) => {
    if (type === "digital") {
      return `<span class="px-2 py-0.5 text-[10px] font-bold rounded-full bg-sky-100 text-sky-900 border border-sky-300">${t.typeDigital}</span>`;
    }
    if (type === "color_analog") {
      return `<span class="px-2 py-0.5 text-[10px] font-bold rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300">${t.typeColor}</span>`;
    }
    return `<span class="px-2 py-0.5 text-[10px] font-bold rounded-full bg-stone-100 text-stone-800 border border-stone-300">${t.typeBw}</span>`;
  };

  const renderCountPill = (label, count, colorCls) => {
    if (!count) {
      return `<span class="px-1.5 py-0.5 rounded bg-slate-100 text-slate-400 border border-slate-200 line-through">${label}: 0</span>`;
    }
    return `<span class="px-1.5 py-0.5 rounded ${colorCls} font-semibold">${label}: ${count} ${t.framesWord}</span>`;
  };

  const citLms = "ČESKÝ ÚŘAD ZEMĚMĚŘICKÝ A KATASTRÁLNÍ, ÚSTŘEDNÍ ARCHIV ZEMĚMĚŘICTVÍ A KATASTRU & MINISTERSTVO OBRANY ČR. Archivní aplikace ČÚZK – Letecké měřické snímky (LMS 1937–2026) a prohlížecí služba WMS-ORTOARCHIV (2000–2022) [online]. Praha: ČÚZK. Dostupné z: https://ags.cuzk.gov.cz/archiv/";
  const citCenia = "CENIA, VOJENSKÝ GEOGRAFICKÝ A HYDROMETEOROLOGICKÝ ÚŘAD DOBRUŠKA & MINISTERSTVO OBRANY ČR. Historická ortofotomapa ČR (50. léta, 1953–1954) [online WMS vrstva orto, licence CC-BY 4.0]. Praha: CENIA. Dostupné z: https://gis.cenia.cz/mapcache/ortofotomapa_historicka/wms?SERVICE=WMS&REQUEST=GetCapabilities";

  container.innerHTML = `
    <div class="space-y-4">
      <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div class="space-y-1">
          <span class="inline-block text-[11px] font-extrabold uppercase tracking-wider text-sky-950 bg-sky-100 px-3 py-0.5 rounded-full border border-sky-300">
            ${t.badge}
          </span>
          <h3 class="text-xl sm:text-2xl font-extrabold text-slate-900 font-heading">
            ${t.heading}
          </h3>
          <p class="text-xs text-slate-600 max-w-3xl leading-relaxed">
            ${t.sub}
          </p>
        </div>

        <div class="flex flex-wrap items-center gap-1.5 bg-amber-100/70 p-2 rounded-xl border border-amber-300 self-start lg:self-auto">
          ${filterButtons.map(b => {
            const active = b.id === currentLmsSettlementFilter;
            const cls = active
              ? "bg-amber-800 text-white shadow-xs"
              : "bg-white hover:bg-amber-200 text-slate-700 border border-amber-300";
            return `<button type="button" onclick="filterLmsArchive('${b.id}')" class="px-2.5 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${cls}">${b.label}</button>`;
          }).join("")}
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
        ${yearsList.map(item => {
          const noteText = lang === "en" ? item.noteEn : (lang === "de" ? item.noteDe : item.note);
          const dlUrl = item.dlouhomilovFrame
            ? `${aerialLmsArchiveData.viewerBaseUrl}&idrastru=${item.dlouhomilovFrame}&bz=${aerialLmsArchiveData.bzCoords.dlouhomilov}`
            : null;
          const bkUrl = item.benkovFrame
            ? `${aerialLmsArchiveData.viewerBaseUrl}&idrastru=${item.benkovFrame}&bz=${aerialLmsArchiveData.bzCoords.benkov}`
            : null;
          const cardBorder = item.milestone ? "border-amber-400 bg-amber-50/35" : "border-amber-200 bg-white";
          return `
            <div class="p-3.5 rounded-xl border ${cardBorder} shadow-2xs hover:border-amber-500 transition-all flex flex-col justify-between gap-2.5">
              <div class="space-y-2">
                <div class="flex items-center justify-between gap-2">
                  <div class="flex items-center gap-1.5">
                    <span class="text-sm font-black font-heading text-amber-950 bg-amber-100 px-2.5 py-0.5 rounded-lg border border-amber-300">${item.year}</span>
                    ${getTypeBadge(item.type)}
                  </div>
                  <span class="text-[10px] font-mono text-slate-500">${item.dateUtc || item.sm5}</span>
                </div>

                <p class="text-xs text-slate-700 leading-snug">${noteText}</p>

                <div class="flex flex-wrap gap-1 text-[10px]">
                  ${renderCountPill("Dlouhomilov", item.counts.dlouhomilov, "bg-amber-50 text-amber-950 border border-amber-200")}
                  ${renderCountPill("Medelské", item.counts.medelske, "bg-teal-50 text-teal-950 border border-teal-200")}
                  ${renderCountPill("Benkov", item.counts.benkov, "bg-indigo-50 text-indigo-950 border border-indigo-200")}
                </div>
              </div>

              <div class="pt-2 border-t border-amber-100 flex flex-wrap items-center gap-1.5">
                ${dlUrl ? `
                  <a href="${dlUrl}" target="_blank" rel="noopener noreferrer"
                     class="px-2 py-1 text-[11px] font-bold bg-blue-50 hover:bg-blue-100 text-blue-900 rounded-lg border border-blue-300 transition-colors flex items-center gap-1">
                    <span>🔍</span> <span>${t.viewDl} ↗</span>
                  </a>
                ` : ""}
                ${bkUrl ? `
                  <a href="${bkUrl}" target="_blank" rel="noopener noreferrer"
                     class="px-2 py-1 text-[11px] font-bold bg-indigo-50 hover:bg-indigo-100 text-indigo-900 rounded-lg border border-indigo-300 transition-colors flex items-center gap-1">
                    <span>🔍</span> <span>${t.viewBk} ↗</span>
                  </a>
                ` : ""}
                ${item.overlayKey ? `
                  <button type="button" onclick="activateMapOverlayFromAtlas('${item.overlayKey}')"
                          class="ml-auto px-2 py-1 text-[11px] font-bold bg-amber-800 hover:bg-amber-900 text-white rounded-lg transition-colors flex items-center gap-1 cursor-pointer">
                    <span>🗺️</span> <span>${t.onMap}</span>
                  </button>
                ` : ""}
              </div>
            </div>
          `;
        }).join("")}
      </div>

      <div class="p-3.5 bg-stone-50 rounded-xl border border-stone-200 flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs text-slate-700">
        <div class="space-y-1">
          <p class="font-bold text-slate-900">🎞️ ${t.nonDigTitle}</p>
          <p class="text-[11px] text-slate-600">• ${t.nonDigDl} &nbsp;|&nbsp; • ${t.nonDigBk}</p>
          <p class="text-[11px] text-slate-500 italic">${t.nonDigNote}</p>
        </div>
        <a href="${aerialLmsArchiveData.portalUrl}" target="_blank" rel="noopener noreferrer"
           class="shrink-0 px-3.5 py-2 text-xs font-bold bg-sky-800 hover:bg-sky-900 text-white rounded-xl shadow-xs transition-colors flex items-center gap-1.5 self-start md:self-auto">
          <span>🌐</span> <span>${t.openPortal} ↗</span>
        </a>
      </div>

      <div class="p-4 bg-slate-50/90 rounded-2xl border border-slate-200 space-y-3 text-xs text-slate-700">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h4 class="font-extrabold text-slate-900 text-sm flex items-center gap-1.5">
              <span>📖</span> <span>${t.citTitle}</span>
            </h4>
            <p class="text-[11px] text-slate-600">${t.citSub}</p>
          </div>
          <div class="flex flex-wrap items-center gap-1.5">
            <a href="reference.html"
               class="px-2.5 py-1 text-[11px] font-bold bg-white hover:bg-amber-100 text-slate-800 rounded-lg border border-amber-300 transition-colors">
              ${t.citRefsLink}
            </a>
            <button type="button" onclick="openLicenceModal()"
                    class="px-2.5 py-1 text-[11px] font-bold bg-amber-100 hover:bg-amber-200 text-amber-950 rounded-lg border border-amber-300 transition-colors cursor-pointer">
              ${t.citModalLink}
            </button>
          </div>
        </div>

        <div class="flex flex-wrap gap-1.5 text-[11px]">
          <a href="https://ags.cuzk.gov.cz/archiv/" target="_blank" rel="noopener noreferrer"
             class="px-2.5 py-1 font-bold bg-sky-50 hover:bg-sky-100 text-sky-950 rounded-lg border border-sky-300 transition-colors inline-flex items-center gap-1">
            <span>✈️</span> <span>${t.srcLmsPortal} ↗</span>
          </a>
          <a href="https://geoportal.cuzk.gov.cz/geoserver/wms_ortofoto_archiv/wms?SERVICE=WMS&REQUEST=GetCapabilities" target="_blank" rel="noopener noreferrer"
             class="px-2.5 py-1 font-bold bg-blue-50 hover:bg-blue-100 text-blue-950 rounded-lg border border-blue-300 transition-colors inline-flex items-center gap-1">
            <span>🛰️</span> <span>${t.srcWmsOrto} ↗</span>
          </a>
          <a href="https://gis.cenia.cz/mapcache/ortofotomapa_historicka/wms?SERVICE=WMS&REQUEST=GetCapabilities" target="_blank" rel="noopener noreferrer"
             class="px-2.5 py-1 font-bold bg-emerald-50 hover:bg-emerald-100 text-emerald-950 rounded-lg border border-emerald-300 transition-colors inline-flex items-center gap-1">
            <span>🗺️</span> <span>${t.srcCenia} ↗</span>
          </a>
        </div>

        <div class="space-y-2 font-mono text-[11px] bg-white p-3 rounded-xl border border-slate-300 text-slate-800">
          <div class="flex items-start justify-between gap-2">
            <p class="leading-snug break-words">
              <strong>ČÚZK LMS &amp; WMS-ORTOARCHIV:</strong> ČESKÝ ÚŘAD ZEMĚMĚŘICKÝ A KATASTRÁLNÍ, ÚSTŘEDNÍ ARCHIV ZEMĚMĚŘICTVÍ A KATASTRU &amp; MINISTERSTVO OBRANY ČR. <em>Archivní aplikace ČÚZK – Letecké měřické snímky (LMS 1937–2026) a prohlížecí služba WMS-ORTOARCHIV (2000–2022)</em> [online]. Praha: ČÚZK. Dostupné z: <a href="https://ags.cuzk.gov.cz/archiv/" target="_blank" rel="noopener noreferrer" class="underline text-blue-800 hover:text-blue-600">https://ags.cuzk.gov.cz/archiv/</a>
            </p>
            <button type="button" data-citation="${escapeHtmlAttr(citLms)}" onclick="copyCitationText(this)"
                    class="shrink-0 px-2 py-1 text-[10px] font-sans font-bold bg-slate-100 hover:bg-amber-100 text-slate-800 rounded border border-slate-300 transition-colors cursor-pointer">
              ${t.citCopy}
            </button>
          </div>
          <div class="pt-2 border-t border-slate-200 flex items-start justify-between gap-2">
            <p class="leading-snug break-words">
              <strong>CENIA (1953–1954):</strong> CENIA, VOJENSKÝ GEOGRAFICKÝ A HYDROMETEOROLOGICKÝ ÚŘAD DOBRUŠKA &amp; MINISTERSTVO OBRANY ČR. <em>Historická ortofotomapa ČR (50. léta, 1953–1954)</em> [online WMS vrstva orto, licence CC-BY 4.0]. Praha: CENIA. Dostupné z: <a href="https://gis.cenia.cz/mapcache/ortofotomapa_historicka/wms?SERVICE=WMS&REQUEST=GetCapabilities" target="_blank" rel="noopener noreferrer" class="underline text-blue-800 hover:text-blue-600">https://gis.cenia.cz/mapcache/ortofotomapa_historicka/wms?SERVICE=WMS&amp;REQUEST=GetCapabilities</a>
            </p>
            <button type="button" data-citation="${escapeHtmlAttr(citCenia)}" onclick="copyCitationText(this)"
                    class="shrink-0 px-2 py-1 text-[10px] font-sans font-bold bg-slate-100 hover:bg-amber-100 text-slate-800 rounded border border-slate-300 transition-colors cursor-pointer">
              ${t.citCopy}
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}

// ==========================================================================
// ARCHIVNÍ PRŮVODCE A SLOVNÍK
// ==========================================================================

function renderGuideSection() {
  const jurContainer = document.getElementById("guide-jurisdiction-container");
  if (jurContainer && typeof guideData !== "undefined" && guideData.jurisdiction) {
    const j = guideData.jurisdiction;
    const coa = j.coatOfArms;
    jurContainer.innerHTML = `
      ${coa ? `
        <div class="mb-4 p-4 bg-gradient-to-r from-amber-50 via-white to-red-50/40 rounded-2xl border border-amber-300 shadow-xs flex flex-col sm:flex-row items-center gap-4">
          <button type="button"
            onclick="openArchiveViewer('${coa.fullImagePath}', 'Znak obce Dlouhomilov & Benkov (${coa.decision})', 'Blason: ${coa.blazon}', '${coa.svgPath}', '${coa.rekosUrl}')"
            class="shrink-0 p-2 bg-white rounded-xl border border-amber-200 shadow-sm hover:border-amber-500 transition-all hover:scale-105 cursor-pointer"
            title="Kliknutím zvětšíte znak obce v prohlížeči">
            <img src="${coa.pngPath}" onerror="this.src='${coa.svgPath}'" alt="Znak obce Dlouhomilov a Benkov" class="w-16 h-20 object-contain">
          </button>
          <div class="space-y-1 text-xs flex-grow">
            <div class="flex flex-wrap items-center justify-between gap-2">
              <h4 class="font-extrabold text-sm text-slate-900 font-heading flex items-center gap-1.5">
                <span>🛡️</span> Komunální znak a heraldika obce Dlouhomilov & Benkov
              </h4>
              <a href="${coa.rekosUrl}" target="_blank" rel="noopener noreferrer" class="text-[11px] font-bold text-amber-900 hover:text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full border border-amber-300 transition-colors">
                🏛️ ${coa.decision} ↗
              </a>
            </div>
            <p class="text-slate-800 italic font-serif-body text-xs bg-amber-50/70 px-3 py-1.5 rounded-lg border border-amber-200/80">
              „${coa.blazon}“
            </p>
            <p class="text-[11px] text-slate-600 leading-relaxed">${coa.symbolism}</p>
          </div>
        </div>
      ` : ''}
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
        <div class="p-3.5 bg-amber-50/90 rounded-xl border border-amber-200 shadow-2xs">
          <span class="font-bold text-amber-950 uppercase tracking-wider text-[10px] block">🏡 Obec & osada:</span>
          <strong class="text-sm text-slate-900 block mt-0.5">${j.village}</strong>
          <span class="text-[11px] text-slate-600 block mt-0.5">Přidružená obec: ${j.associatedVillage}</span>
        </div>
        <div class="p-3.5 bg-amber-50/90 rounded-xl border border-amber-200 shadow-2xs">
          <span class="font-bold text-amber-950 uppercase tracking-wider text-[10px] block">🏛️ Farní příslušnost:</span>
          <strong class="text-sm text-slate-900 block mt-0.5">${j.parish}</strong>
          <span class="text-[11px] text-slate-600 block mt-0.5">Matriky N/O/Z uloženy v ZAO Opava</span>
        </div>
        <div class="p-3.5 bg-amber-50/90 rounded-xl border border-amber-200 shadow-2xs">
          <span class="font-bold text-amber-950 uppercase tracking-wider text-[10px] block">⚖️ Správní & soudní okres:</span>
          <strong class="text-sm text-slate-900 block mt-0.5">${j.politicalDistrict}</strong>
          <span class="text-[11px] text-slate-600 block mt-0.5">Soudní okres: ${j.judicialDistrict}</span>
        </div>
        <div class="p-3.5 bg-amber-50/90 rounded-xl border border-amber-200 shadow-2xs">
          <span class="font-bold text-amber-950 uppercase tracking-wider text-[10px] block">🏛️ Památková zóna & archivy:</span>
          <strong class="text-sm text-slate-900 block mt-0.5">${j.heritageZone}</strong>
          <span class="text-[11px] text-slate-600 block mt-0.5">${j.provincialArchive} & ${j.stateArchiveDistrict}</span>
        </div>
      </div>
    `;
  }

  const contContainer = document.getElementById("guide-continuity-container");
  if (contContainer && typeof guideData !== "undefined" && guideData.houseNumberingContinuity) {
    const c = guideData.houseNumberingContinuity;
    contContainer.innerHTML = `
      <div class="p-5 bg-amber-50/70 rounded-2xl border border-amber-300 shadow-xs space-y-5">
        <div>
          <div class="flex flex-wrap items-center justify-between gap-2 mb-1">
            <h3 class="text-base sm:text-lg font-bold text-slate-900 font-heading flex items-center gap-2">
              <span>🔢</span> ${c.title}
            </h3>
            <span class="text-[10px] font-bold bg-emerald-100 text-emerald-900 px-2.5 py-0.5 rounded-full border border-emerald-300">
              ✔ Ověřeno: Stabilní katastr 1834 + Sčítání 1857–1921 + Matriky 1786–1949
            </span>
          </div>
          <p class="text-xs text-slate-700 leading-relaxed">${c.overview}</p>
        </div>

        <!-- Tři samostatné číselné řady ve farnosti -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
          ${c.numberingSeries.map(s => `
            <div class="p-3.5 bg-white rounded-xl border border-amber-200 shadow-2xs">
              <div class="flex items-center justify-between mb-1">
                <strong class="text-amber-950 font-heading text-xs">${s.locality}</strong>
                <span class="font-mono text-[10px] font-bold bg-amber-100 text-amber-900 px-2 py-0.5 rounded border border-amber-300">${s.range}</span>
              </div>
              <p class="text-[11px] text-slate-600 leading-snug">${s.cadastralNote}</p>
            </div>
          `).join('')}
        </div>

        <!-- Vývoj počtu domů v Dlouhomilově -->
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 text-xs">
          ${c.evolution.map(ev => `
            <div class="p-2.5 bg-white rounded-xl border border-amber-200 text-center shadow-2xs">
              <span class="block text-xs font-extrabold text-amber-900 font-mono">${ev.period}</span>
              <span class="block text-sm font-extrabold text-slate-900 mt-0.5">${ev.count}</span>
              <span class="block text-[10px] text-slate-500 mt-0.5 leading-tight">${ev.note}</span>
            </div>
          `).join('')}
        </div>

        <!-- Tabulka kontinuity klíčových zpracovaných gruntů a chalup -->
        <div class="overflow-x-auto rounded-xl border border-amber-200 bg-white shadow-2xs">
          <table class="w-full text-left text-xs border-collapse mobile-responsive-table">
            <thead class="bg-amber-900 text-amber-100 font-heading text-[10px] uppercase tracking-wider">
              <tr>
                <th class="p-2.5">Stavení (čp.)</th>
                <th class="p-2.5">Stavební parcela (1834 → 1910)</th>
                <th class="p-2.5">Kontinuita čísla</th>
                <th class="p-2.5">Posloupnost rodů (17.–20. stol.)</th>
                <th class="p-2.5">Matriky (1889–1949)</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-amber-100">
              ${c.keyHouses.map(kh => `
                <tr class="hover:bg-amber-50/70 transition-colors">
                  <td class="p-2.5 font-bold">
                    <button onclick="openHouseDetail('${kh.houseId}'); document.getElementById('house-detail-container')?.scrollIntoView({behavior: 'smooth'});"
                      class="text-amber-900 hover:text-amber-700 underline font-bold flex items-center gap-1 text-left">
                      <span>🏡</span> <span>${kh.label} ↗</span>
                    </button>
                  </td>
                  <td class="p-2.5 font-mono text-[11px] text-slate-700" data-label="Parcela (1834 → 1910)">${kh.parcel1834} → ${kh.parcel1910}</td>
                  <td class="p-2.5" data-label="Kontinuita čísla"><span class="px-2 py-0.5 bg-emerald-50 text-emerald-900 rounded border border-emerald-200 font-semibold text-[11px]">${kh.continuity}</span></td>
                  <td class="p-2.5 text-slate-700 mobile-stack-cell" data-label="Posloupnost rodů">${kh.families}</td>
                  <td class="p-2.5 text-slate-600 font-medium mobile-stack-cell" data-label="Matriky (1889–1949)">${kh.parishRecords}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  const container = document.getElementById("guide-content-container");
  if (container && typeof guideData !== "undefined" && guideData.archives) {
    container.innerHTML = `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        ${guideData.archives.map(arc => `
          <div class="p-5 bg-white rounded-xl border border-amber-200 shadow-xs space-y-3 flex flex-col justify-between hover:border-amber-400 transition-colors">
            <div>
              <div class="flex items-center justify-between mb-1.5">
                <h4 class="font-bold text-slate-900 text-sm font-heading">${arc.name}</h4>
                <span class="text-[10px] font-bold bg-amber-100 text-amber-900 px-2 py-0.5 rounded border border-amber-300">${arc.badge || ''}</span>
              </div>
              <p class="text-xs text-slate-600 leading-relaxed">${arc.description}</p>
              ${arc.signatures ? `
                <div class="mt-2.5 p-2.5 bg-amber-50/60 rounded-lg border border-amber-200/70 text-xs text-slate-700">
                  <span class="font-bold text-amber-950 block text-[11px] mb-0.5">📑 Použité fondy, signatury & inventáře:</span>
                  <p class="font-mono text-[11px] text-amber-900 leading-relaxed">${arc.signatures}</p>
                </div>
              ` : ''}
              ${arc.steps ? `
                <div class="mt-3 p-3 bg-amber-50/70 rounded-lg border border-amber-200 text-xs">
                  <span class="font-bold text-amber-950 block mb-1 text-[11px]">Jak postupovat v badatelně:</span>
                  <ol class="list-decimal list-inside space-y-1 text-slate-700 text-[11px] leading-snug">
                    ${arc.steps.map(s => `<li>${s}</li>`).join('')}
                  </ol>
                </div>
              ` : ''}
            </div>
            <div class="pt-3 border-t border-amber-100 flex items-center justify-between text-xs">
              <span class="text-slate-400 font-mono text-[10px]">Archivní fond</span>
              <a href="${arc.url}" target="_blank" rel="noopener noreferrer" 
                class="px-3 py-1.5 text-xs font-bold bg-amber-800 hover:bg-amber-900 text-white rounded-lg transition-colors flex items-center gap-1 shadow-xs">
                <span>🌐</span> <span>Otevřít portál ↗</span>
              </a>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }
}

// Vykreslení interaktivního slovníčku s vyhledáváním a propojením na sčítání
function renderDictionary(filterQuery = "") {
  const container = document.getElementById("dictionary-container");
  if (!container || typeof guideData === "undefined" || !guideData.dictionary) return;

  const q = normalizeSearchText(filterQuery);

  const termCategoryMapping = {
    "bauer": "grunt",
    "rusticus": "grunt",
    "sedlak": "grunt",
    "chalupner": "grunt",
    "inmann": "podruh",
    "inwohner": "podruh",
    "podruh": "podruh",
    "domkar": "podruh",
    "auszugler": "vymenek",
    "ausgedinger": "vymenek",
    "vymenkar": "vymenek",
    "knecht": "celed",
    "magd": "celed",
    "celed": "celed",
    "weber": "remeslo",
    "tkalec": "remeslo",
    "muhle": "remeslo",
    "mlyn": "remeslo",
    "schmiede": "remeslo",
    "kovar": "remeslo",
    "schneider": "remeslo",
    "krejci": "remeslo",
    "schuhmacher": "remeslo",
    "obuvnik": "remeslo"
  };

  const list = guideData.dictionary.filter(item => {
    if (!q) return true;
    return normalizeSearchText(item.term).includes(q) || normalizeSearchText(item.cz).includes(q);
  });

  if (list.length === 0) {
    container.innerHTML = `<div class="p-4 bg-amber-50 rounded-xl text-center text-xs text-slate-500">Nenalezen žádný odpovídající výraz.</div>`;
    return;
  }

  container.innerHTML = `
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
      ${list.map(item => {
        const normTerm = normalizeSearchText(item.term);
        let matchedCat = null;
        for (const [kw, cat] of Object.entries(termCategoryMapping)) {
          if (normTerm.includes(kw)) {
            matchedCat = cat;
            break;
          }
        }
        return `
          <div class="p-3.5 bg-amber-50/80 rounded-xl border border-amber-200 text-xs flex flex-col justify-between hover:bg-amber-100/70 transition-colors shadow-2xs">
            <div>
              <span class="font-extrabold text-amber-950 block text-xs">${item.term}</span>
              <span class="text-slate-700 block mt-1 leading-snug">${item.cz}</span>
            </div>
            ${matchedCat ? `
              <button onclick="lookupDictionaryTermInRegistry('${matchedCat}', '${item.term}')" 
                class="mt-2 text-[10px] font-bold text-amber-900 hover:text-amber-700 underline self-start flex items-center gap-1">
                <span>🔍</span> Hledat tyto osoby v sčítání lidu ➔
              </button>
            ` : ''}
          </div>
        `;
      }).join('')}
    </div>
  `;
}

function filterDictionary(query) {
  renderDictionary(query);
}

// Propojení ze slovníčku přímo do sčítání lidu
function lookupDictionaryTermInRegistry(categoryKey, termName) {
  if (!document.getElementById("obyvatele-section")) {
    window.location.href = `obyvatele.html#cat=${encodeURIComponent(categoryKey)}`;
    return;
  }
  setInhabitantViewMode("table");
  setRegistryCategoryFilter(categoryKey);
  const target = document.getElementById("obyvatele-section");
  if (target) {
    target.scrollIntoView({ behavior: "smooth" });
  }
}

// ==========================================================================
// MULTISTRÁNKOVÁ NAVIGACE, STRÁNKOVÁNÍ REJSTŘÍKU, AKTUALITY A REFERENCE
// ==========================================================================

var currentRegistryPage = 1;
var registryPageSize = 100; // 50 | 100 | 0 (0 = Vše)
var lastRegistryRecords = null;
var lastRegistryFilterSignature = "";
var currentNewsCategory = "all";
var showAllNews = false;
var currentRefCategory = "all";
var currentRefSearch = "";
var currentReferenceTab = "catalog"; // 'catalog' | 'prace' | 'cite' | 'pruvodce' | 'all'
var currentDownloadGroup = "all";
var currentMapPageTab = "map"; // 'map' | 'atlas' | 'all'

function handleLegacyHomeHashRedirect() {
  const h = window.location.hash || "";
  if (!h || h === "#") return false;
  if (h.startsWith("#house=") || h.startsWith("#map=") || h === "#atlas" || h === "#atlas-map-section" || h.startsWith("#atlas=") || h.includes("section=atlas")) {
    window.location.replace(`mapa.html${h}`);
    return true;
  }
  if (h.startsWith("#person=") || h.startsWith("#cat=") || h.startsWith("#search=") || h.startsWith("#view=") || h.startsWith("#year=") || h.startsWith("#settlement=") || h === "#obyvatele" || h === "#obyvatele-section") {
    const destHash = (h === "#obyvatele" || h === "#obyvatele-section") ? "" : h;
    window.location.replace(`obyvatele.html${destHash}`);
    return true;
  }
  if (h === "#demografie" || h === "#demografie-section" || h.includes("section=demografie") || ["#csu", "#histogram", "#origins", "#wealth"].includes(h)) {
    const destHash = (h === "#demografie" || h === "#demografie-section" || h.includes("section=demografie")) ? "#csu" : h;
    window.location.replace(`demografie.html${destHash}`);
    return true;
  }
  if (h === "#pribeh" || h === "#pribeh-section" || h === "#comic" || h === "#facts" || h === "#chapters" || /^#kap-\d+$/.test(h) || h.includes("tab=comic")) {
    const destHash = (h === "#pribeh" || h === "#pribeh-section") ? "" : h;
    window.location.replace(`pribeh.html${destHash}`);
    return true;
  }
  if (h === "#badatelsky-pruvodce" || h === "#dictionary-container" || h === "#pruvodce" || h.includes("section=pruvodce") || h === "#reference" || h === "#cite" || h === "#catalog" || h === "#prace" || h === "#prace-ke-stazeni" || h === "#ke-stazeni" || h === "#prezentace") {
    const destHash = (h === "#reference") ? "" : h;
    window.location.replace(`reference.html${destHash}`);
    return true;
  }
  return false;
}

// Bezpečné přesměrování pro funkce vyžadující DOM prvky jiné stránky
(function wrapCrossPageFunctions() {
  if (typeof openHouseDetail === "function") {
    const _origOpenHouseDetail = openHouseDetail;
    openHouseDetail = function(houseId, updateHash = true) {
      if (!document.getElementById("house-detail-container") || typeof housesData === "undefined") {
        window.location.href = `mapa.html#house=${encodeURIComponent(houseId)}`;
        return;
      }
      return _origOpenHouseDetail.apply(this, arguments);
    };
  }
  if (typeof openPersonModal === "function") {
    const _origOpenPersonModal = openPersonModal;
    openPersonModal = function(personId, updateHash = true) {
      if (!document.getElementById("person-detail-modal") || typeof peopleData === "undefined") {
        window.location.href = `obyvatele.html#person=${encodeURIComponent(personId)}`;
        return;
      }
      return _origOpenPersonModal.apply(this, arguments);
    };
  }
  if (typeof openPersonModalByName === "function") {
    const _origOpenPersonModalByName = openPersonModalByName;
    openPersonModalByName = function(name, birthDate = "", houseNum = "") {
      if (!document.getElementById("obyvatele-section") && typeof censusRegistryData === "undefined") {
        const hasPersonModal = document.getElementById("person-detail-modal") && typeof peopleData !== "undefined";
        const normName = typeof normalizeSearchText === "function" ? normalizeSearchText(name) : String(name || "").toLowerCase();
        const directProfile = hasPersonModal ? peopleData.find(p => normalizeSearchText(p.name) === normName) : null;
        if (!directProfile) {
          window.location.href = `obyvatele.html#search=${encodeURIComponent(name)}`;
          return;
        }
      }
      return _origOpenPersonModalByName.apply(this, arguments);
    };
  }
  if (typeof activateMapOverlayFromAtlas === "function") {
    const _origActivateMapOverlayFromAtlas = activateMapOverlayFromAtlas;
    activateMapOverlayFromAtlas = function(overlayKey) {
      if (!document.getElementById("map")) {
        window.location.href = `mapa.html#map=${encodeURIComponent(overlayKey)}`;
        return;
      }
      if (typeof switchMapPageTab === "function") {
        switchMapPageTab("map", false);
      }
      return _origActivateMapOverlayFromAtlas.apply(this, arguments);
    };
  }
})();

function openMapCompareModal(mapId) {
  const aliasMap = { sudety1940: "sudetenland1940" };
  const resolvedId = aliasMap[mapId] || mapId;
  if (typeof historicalMapsData !== "undefined") {
    const mapObj = historicalMapsData.find(m => m.id === resolvedId);
    if (mapObj && mapObj.imageFile && typeof openArchiveViewer === "function" && document.getElementById("archive-viewer-modal")) {
      openArchiveViewer(
        mapObj.imageFile,
        `${mapObj.title} (${mapObj.year})`,
        `${mapObj.archive || ""}${mapObj.scale ? ` • ${mapObj.scale}` : ""}`,
        mapObj.imageFile,
        mapObj.externalUrl || ""
      );
      return;
    }
    if (mapObj && mapObj.isOverlay) {
      window.location.href = `mapa.html#map=${encodeURIComponent(resolvedId)}`;
      return;
    }
  }
  window.location.href = "mapa.html#atlas";
}

function switchMapPageTab(mode, scroll = true) {
  currentMapPageTab = mode;
  const mapWrapper = document.getElementById("map-workspace-wrapper");
  const atlasEl = document.getElementById("atlas-map-section");

  if (mapWrapper) mapWrapper.classList.toggle("hidden", mode === "atlas");
  if (atlasEl) atlasEl.classList.toggle("hidden", mode === "map");

  ["map", "atlas", "all"].forEach(k => {
    const btn = document.getElementById(`map-tab-${k}`);
    if (!btn) return;
    if (k === mode) {
      btn.className = "map-subtab-btn px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold bg-amber-800 text-white shadow-xs transition-all cursor-pointer flex items-center gap-1.5";
    } else {
      btn.className = "map-subtab-btn px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold bg-white hover:bg-amber-100 text-slate-700 border border-amber-200 transition-all cursor-pointer flex items-center gap-1.5";
    }
  });

  if ((mode === "map" || mode === "all") && typeof map !== "undefined" && map && typeof map.invalidateSize === "function") {
    setTimeout(() => { try { map.invalidateSize(); } catch (e) {} }, 100);
  }
  if (scroll) {
    const target = mode === "atlas" ? atlasEl : mapWrapper;
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function escapeHtmlAttr(str) {
  return String(str || "")
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

// --- Stránkování rejstříku obyvatel ---
function getPagedRegistryRecords(records) {
  lastRegistryRecords = records;
  if (!registryPageSize || registryPageSize <= 0) return records;
  const totalPages = Math.max(1, Math.ceil(records.length / registryPageSize));
  if (currentRegistryPage > totalPages) currentRegistryPage = totalPages;
  if (currentRegistryPage < 1) currentRegistryPage = 1;
  const start = (currentRegistryPage - 1) * registryPageSize;
  return records.slice(start, start + registryPageSize);
}

function renderRegistryPaginationBar(totalCount) {
  const bar = document.getElementById("registry-pagination-bar");
  if (!bar) return;
  const lang = window.currentLang || "cs";
  const t = {
    cs: { showing: "Zobrazeno", of: "z", records: "záznamů", perPage: "Na stránku:", all: "Vše", prev: "← Předchozí", next: "Další →", page: "Strana" },
    en: { showing: "Showing", of: "of", records: "records", perPage: "Per page:", all: "All", prev: "← Prev", next: "Next →", page: "Page" },
    de: { showing: "Angezeigt", of: "von", records: "Einträgen", perPage: "Pro Seite:", all: "Alle", prev: "← Zurück", next: "Weiter →", page: "Seite" }
  }[lang] || { showing: "Zobrazeno", of: "z", records: "záznamů", perPage: "Na stránku:", all: "Vše", prev: "← Předchozí", next: "Další →", page: "Strana" };

  if (totalCount === 0) {
    bar.innerHTML = "";
    bar.classList.add("hidden");
    return;
  }
  bar.classList.remove("hidden");

  const effectiveSize = registryPageSize > 0 ? registryPageSize : totalCount;
  const totalPages = Math.max(1, Math.ceil(totalCount / effectiveSize));
  if (currentRegistryPage > totalPages) currentRegistryPage = totalPages;
  const startIdx = (currentRegistryPage - 1) * effectiveSize + 1;
  const endIdx = Math.min(totalCount, currentRegistryPage * effectiveSize);

  const pageButtons = [];
  if (totalPages > 1) {
    const pagesToShow = new Set([1, totalPages, currentRegistryPage - 1, currentRegistryPage, currentRegistryPage + 1]);
    const sortedPages = Array.from(pagesToShow).filter(p => p >= 1 && p <= totalPages).sort((a, b) => a - b);
    let prevP = 0;
    sortedPages.forEach(p => {
      if (prevP && p - prevP > 1) {
        pageButtons.push(`<span class="px-1.5 text-slate-400 text-xs">…</span>`);
      }
      const activeCls = p === currentRegistryPage
        ? "bg-amber-800 text-white border-amber-900 shadow-2xs"
        : "bg-white hover:bg-amber-100 text-slate-700 border-amber-200";
      pageButtons.push(`<button type="button" onclick="setRegistryPage(${p})" class="px-2.5 py-1 rounded-lg border text-xs font-bold transition-colors cursor-pointer ${activeCls}">${p}</button>`);
      prevP = p;
    });
  }

  bar.innerHTML = `
    <div class="flex flex-col md:flex-row md:items-center justify-between gap-3 p-3 bg-amber-50/70 rounded-xl border border-amber-200 text-xs">
      <div class="font-semibold text-slate-700">
        ${t.showing} <strong class="text-amber-950">${startIdx}–${endIdx}</strong> ${t.of} <strong class="text-amber-950">${totalCount}</strong> ${t.records}
        ${totalPages > 1 ? `<span class="text-slate-500 ml-1">(${t.page} ${currentRegistryPage}/${totalPages})</span>` : ""}
      </div>
      <div class="flex flex-wrap items-center gap-2">
        <div class="flex items-center gap-1 mr-1">
          <span class="text-[11px] font-bold text-slate-500 mr-1">${t.perPage}</span>
          ${[50, 100, 0].map(sz => {
            const active = registryPageSize === sz;
            const lbl = sz === 0 ? t.all : sz;
            return `<button type="button" onclick="setRegistryPageSize(${sz})" class="px-2 py-1 rounded-lg border text-[11px] font-bold transition-colors cursor-pointer ${active ? "bg-amber-800 text-white border-amber-900" : "bg-white hover:bg-amber-100 text-slate-700 border-amber-200"}">${lbl}</button>`;
          }).join("")}
        </div>
        ${totalPages > 1 ? `
          <div class="flex items-center gap-1 flex-wrap">
            <button type="button" onclick="setRegistryPage(${currentRegistryPage - 1})" ${currentRegistryPage <= 1 ? "disabled" : ""}
              class="px-2.5 py-1 rounded-lg border text-xs font-bold bg-white hover:bg-amber-100 text-slate-700 border-amber-200 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer">
              ${t.prev}
            </button>
            ${pageButtons.join("")}
            <button type="button" onclick="setRegistryPage(${currentRegistryPage + 1})" ${currentRegistryPage >= totalPages ? "disabled" : ""}
              class="px-2.5 py-1 rounded-lg border text-xs font-bold bg-white hover:bg-amber-100 text-slate-700 border-amber-200 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer">
              ${t.next}
            </button>
          </div>
        ` : ""}
      </div>
    </div>
  `;
  if (typeof protectLocalizedDomSubtree === "function") protectLocalizedDomSubtree(bar, lang);
}

function setRegistryPage(page) {
  currentRegistryPage = Math.max(1, parseInt(page, 10) || 1);
  renderCensusRegistryTable(lastRegistryRecords || censusRegistryData);
  const tbl = document.getElementById("inhabitant-table-view");
  if (tbl) {
    const rect = tbl.getBoundingClientRect();
    if (rect.top < 0 || rect.top > window.innerHeight * 0.5) {
      tbl.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
}

function setRegistryPageSize(size) {
  registryPageSize = parseInt(size, 10) || 0;
  currentRegistryPage = 1;
  renderCensusRegistryTable(lastRegistryRecords || censusRegistryData);
}

// --- Sekce Aktuality (index.html) ---
function renderNewsSection() {
  const filtersEl = document.getElementById("news-category-filters");
  const listEl = document.getElementById("news-list-container");
  const toggleEl = document.getElementById("news-toggle-wrap");
  if (!listEl || typeof newsData === "undefined") return;

  const lang = window.currentLang || "cs";
  const lblPick = (obj, base) => {
    if (lang === "en" && obj[base + "En"]) return obj[base + "En"];
    if (lang === "de" && obj[base + "De"]) return obj[base + "De"];
    return obj[base];
  };

  if (filtersEl && typeof newsCategories !== "undefined") {
    filtersEl.innerHTML = newsCategories.map(cat => {
      const count = cat.key === "all" ? newsData.length : newsData.filter(n => n.category === cat.key).length;
      const active = currentNewsCategory === cat.key;
      return `
        <button type="button" onclick="filterNewsCategory('${cat.key}')"
          class="px-3 py-1.5 rounded-full text-xs font-bold border transition-all cursor-pointer flex items-center gap-1.5 ${active ? "bg-amber-800 text-white border-amber-900 shadow-xs" : "bg-white hover:bg-amber-100 text-slate-700 border-amber-200"}">
          <span>${cat.icon}</span>
          <span>${lblPick(cat, "label")}</span>
          <span class="text-[10px] px-1.5 py-0.2 rounded-full ${active ? "bg-amber-700 text-amber-100" : "bg-amber-50 text-amber-900"}">${count}</span>
        </button>
      `;
    }).join("");
    if (typeof protectLocalizedDomSubtree === "function") protectLocalizedDomSubtree(filtersEl, lang);
  }

  const filtered = currentNewsCategory === "all"
    ? newsData
    : newsData.filter(n => n.category === currentNewsCategory);

  const visibleLimit = 4;
  const itemsToRender = showAllNews ? filtered : filtered.slice(0, visibleLimit);

  listEl.innerHTML = itemsToRender.map((item, idx) => {
    const isLatest = idx === 0 && currentNewsCategory === "all";
    const dateFmt = item.date;
    return `
      <article class="p-4 sm:p-5 rounded-2xl bg-white border ${isLatest ? "border-amber-400 shadow-sm ring-1 ring-amber-200/70" : "border-amber-200 shadow-2xs"} flex flex-col justify-between gap-3 hover:border-amber-400 transition-all">
        <div class="space-y-2">
          <div class="flex flex-wrap items-center justify-between gap-2">
            <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-100 text-amber-950 border border-amber-300">
              ${lblPick(item, "badge")}
            </span>
            <time datetime="${item.date}" class="font-mono text-[11px] font-bold text-slate-500 bg-stone-100 px-2 py-0.5 rounded">
              📅 ${dateFmt}
            </time>
          </div>
          <h3 class="text-sm sm:text-base font-extrabold font-heading text-slate-900 leading-snug">
            ${lblPick(item, "title")}
          </h3>
          <p class="text-xs sm:text-sm text-slate-700 leading-relaxed">
            ${lblPick(item, "summary")}
          </p>
        </div>
        ${Array.isArray(item.links) && item.links.length > 0 ? `
          <div class="flex flex-wrap gap-1.5 pt-2 border-t border-amber-100">
            ${item.links.map(lnk => `
              <a href="${lnk.href}" class="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-amber-50 hover:bg-amber-800 hover:text-white text-amber-950 border border-amber-200 text-[11px] font-bold transition-colors">
                ${lblPick(lnk, "label")} →
              </a>
            `).join("")}
          </div>
        ` : ""}
      </article>
    `;
  }).join("");
  if (typeof protectLocalizedDomSubtree === "function") protectLocalizedDomSubtree(listEl, lang);

  if (toggleEl) {
    if (filtered.length > visibleLimit) {
      const btnText = showAllNews
        ? (lang === "en" ? "Show fewer updates ▲" : lang === "de" ? "Weniger anzeigen ▲" : "Skrýt starší aktuality ▲")
        : (lang === "en" ? `Show all updates (${filtered.length}) ▼` : lang === "de" ? `Alle Meldungen anzeigen (${filtered.length}) ▼` : `Zobrazit starší novinky (celkem ${filtered.length}) ▼`);
      toggleEl.innerHTML = `
        <button type="button" onclick="toggleShowAllNews()"
          class="px-4 py-2 rounded-xl bg-amber-100 hover:bg-amber-200 text-amber-950 border border-amber-300 text-xs font-bold transition-colors cursor-pointer shadow-2xs">
          ${btnText}
        </button>
      `;
      toggleEl.classList.remove("hidden");
    } else {
      toggleEl.innerHTML = "";
      toggleEl.classList.add("hidden");
    }
    if (typeof protectLocalizedDomSubtree === "function") protectLocalizedDomSubtree(toggleEl, lang);
  }
}

function filterNewsCategory(cat) {
  currentNewsCategory = cat;
  renderNewsSection();
}

function toggleShowAllNews() {
  showAllNews = !showAllNews;
  renderNewsSection();
}

// --- Sekce Reference, Prameny & Citace (reference.html) ---
function switchReferenceTab(mode) {
  currentReferenceTab = mode;
  const prezPanel = document.getElementById("prezentace");
  const catPanel = document.getElementById("ref-catalog-panel");
  const pracePanel = document.getElementById("prace-ke-stazeni");
  const citePanel = document.getElementById("ref-cite-panel");
  const guidePanel = document.getElementById("badatelsky-pruvodce");

  if (prezPanel) prezPanel.classList.toggle("hidden", mode !== "catalog" && mode !== "all");
  if (catPanel) catPanel.classList.toggle("hidden", mode !== "catalog" && mode !== "all");
  if (pracePanel) pracePanel.classList.toggle("hidden", mode !== "prace" && mode !== "catalog" && mode !== "all");
  if (citePanel) citePanel.classList.toggle("hidden", mode !== "cite" && mode !== "all");
  if (guidePanel) guidePanel.classList.toggle("hidden", mode !== "pruvodce" && mode !== "all");

  ["catalog", "prace", "cite", "pruvodce", "all"].forEach(k => {
    const btn = document.getElementById(`ref-tab-${k}`);
    if (!btn) return;
    if (k === mode) {
      btn.className = "ref-tab-btn px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold bg-amber-800 text-white shadow-xs transition-all cursor-pointer flex items-center gap-1.5";
    } else {
      btn.className = "ref-tab-btn px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold bg-white hover:bg-amber-100 text-slate-700 border border-amber-200 transition-all cursor-pointer flex items-center gap-1.5";
    }
  });
}

function renderReferencesSection() {
  const filtersEl = document.getElementById("references-category-filters");
  const gridEl = document.getElementById("references-grid");
  const citeBoxEl = document.getElementById("project-citation-box");
  if (!gridEl || typeof referencesData === "undefined") return;

  const lang = window.currentLang || "cs";
  const lblPick = (obj, base) => {
    if (lang === "en" && obj[base + "En"]) return obj[base + "En"];
    if (lang === "de" && obj[base + "De"]) return obj[base + "De"];
    return obj[base];
  };

  if (filtersEl && Array.isArray(referencesData.categories)) {
    filtersEl.innerHTML = referencesData.categories.map(cat => {
      const count = cat.key === "all"
        ? referencesData.items.length
        : referencesData.items.filter(it => it.category === cat.key).length;
      const active = currentRefCategory === cat.key;
      return `
        <button type="button" onclick="filterReferencesCategory('${cat.key}')"
          class="px-3 py-1.5 rounded-full text-xs font-bold border transition-all cursor-pointer flex items-center gap-1.5 ${active ? "bg-amber-800 text-white border-amber-900 shadow-xs" : "bg-white hover:bg-amber-100 text-slate-700 border-amber-200"}">
          <span>${cat.icon}</span>
          <span>${lblPick(cat, "label")}</span>
          <span class="text-[10px] px-1.5 rounded-full ${active ? "bg-amber-700 text-amber-100" : "bg-amber-50 text-amber-900"}">${count}</span>
        </button>
      `;
    }).join("");
    if (typeof protectLocalizedDomSubtree === "function") protectLocalizedDomSubtree(filtersEl, lang);
  }

  const qNorm = typeof normalizeSearchText === "function"
    ? normalizeSearchText(currentRefSearch)
    : String(currentRefSearch || "").toLowerCase();

  const filtered = referencesData.items.filter(it => {
    if (currentRefCategory !== "all" && it.category !== currentRefCategory) return false;
    if (!qNorm) return true;
    const blob = [
      it.title, it.titleEn, it.titleDe,
      it.institution, it.institutionEn, it.institutionDe,
      it.signature, it.year, it.description, it.descriptionEn, it.descriptionDe,
      it.citationIso690
    ].join(" ");
    const normBlob = typeof normalizeSearchText === "function" ? normalizeSearchText(blob) : blob.toLowerCase();
    return normBlob.includes(qNorm);
  });

  const uiTxt = {
    cs: { sig: "Signatura / Údaje:", citeLbl: "Citace (ČSN ISO 690)", copy: "📋 Kopírovat citaci", openExt: "Digitální zdroj / Web ↗", empty: "Žádný pramen neodpovídá zadanému filtru." },
    en: { sig: "Call No. / Details:", citeLbl: "Citation (ČSN ISO 690)", copy: "📋 Copy citation", openExt: "Digital Source / Web ↗", empty: "No sources match the current filter." },
    de: { sig: "Signatur / Angaben:", citeLbl: "Zitation (ČSN ISO 690)", copy: "📋 Zitat kopieren", openExt: "Digitalisat / Web ↗", empty: "Keine Quellen entsprechen dem Filter." }
  }[lang] || { sig: "Signatura / Údaje:", citeLbl: "Citace (ČSN ISO 690)", copy: "📋 Kopírovat citaci", openExt: "Digitální zdroj / Web ↗", empty: "Žádný pramen neodpovídá zadanému filtru." };

  if (filtered.length === 0) {
    gridEl.innerHTML = `<div class="col-span-full p-8 text-center bg-amber-50/70 rounded-2xl border border-amber-200 text-sm text-slate-600">${uiTxt.empty}</div>`;
  } else {
    gridEl.innerHTML = filtered.map(it => {
      const cid = `cit-${it.id}`;
      return `
        <article class="p-4 sm:p-5 rounded-2xl bg-white border border-amber-200 shadow-2xs flex flex-col justify-between gap-3 hover:border-amber-400 transition-all">
          <div class="space-y-2.5">
            <div class="flex flex-wrap items-center justify-between gap-2">
              <span class="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-100 text-amber-950 border border-amber-300">
                ${lblPick(it, "typeLabel")}
              </span>
              <span class="font-mono text-[11px] font-bold text-slate-600 bg-stone-100 px-2 py-0.5 rounded">
                ${it.year}
              </span>
            </div>
            <h3 class="text-base font-extrabold font-heading text-slate-900 leading-snug">
              ${lblPick(it, "title")}
            </h3>
            <p class="text-xs font-bold text-amber-900">
              🏛️ ${lblPick(it, "institution")}
            </p>
            <p class="text-[11px] text-slate-600 bg-amber-50/60 px-2.5 py-1.5 rounded-lg border border-amber-200/70">
              <strong class="text-slate-700">${uiTxt.sig}</strong> <span class="font-mono">${it.signature}</span>
            </p>
            <p class="text-xs sm:text-sm text-slate-700 leading-relaxed">
              ${lblPick(it, "description")}
            </p>
          </div>
          <div class="space-y-2 pt-2 border-t border-amber-100">
            <div class="p-2.5 rounded-xl bg-stone-50 border border-stone-200">
              <div class="flex items-center justify-between gap-2 mb-1">
                <span class="text-[10px] font-bold uppercase tracking-wider text-slate-500">${uiTxt.citeLbl}</span>
                <button type="button" onclick="copyCitationText('${cid}', this)"
                  class="px-2 py-0.5 rounded bg-white hover:bg-amber-800 hover:text-white text-amber-950 border border-amber-300 text-[10px] font-bold transition-colors cursor-pointer">
                  ${uiTxt.copy}
                </button>
              </div>
              <p id="${cid}" class="text-[11px] font-mono text-slate-700 select-all break-words leading-snug">${it.citationIso690}</p>
            </div>
            ${it.url ? `
              <div class="flex justify-end">
                <a href="${it.url}" target="_blank" rel="noopener noreferrer"
                  class="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-amber-50 hover:bg-amber-800 hover:text-white text-amber-950 border border-amber-300 text-xs font-bold transition-colors">
                  ${uiTxt.openExt}
                </a>
              </div>
            ` : ""}
          </div>
        </article>
      `;
    }).join("");
  }
  if (typeof protectLocalizedDomSubtree === "function") protectLocalizedDomSubtree(gridEl, lang);

  if (citeBoxEl && referencesData.projectCitation) {
    const pc = referencesData.projectCitation;
    const todayIso = new Date().toISOString().slice(0, 10);
    const isoStr = pc.iso690Template.replace("{TODAY}", todayIso);
    const bibStr = pc.bibtexTemplate.replace("{TODAY}", todayIso);
    const cTxt = {
      cs: {
        h: "✍️ Jak citovat projekt Dlouhomilov & Benkov",
        sub: "Při dalším odborném, genealogickém nebo školním využití prosím uveďte jak primární archivní fond (ZAO Opava / ČÚZK / MZA Brno), tak odkaz na toto digitální zpracování:",
        isoH: "Doporučená citace (ČSN ISO 690)",
        bibH: "BibTeX záznam",
        ackH: "🔬 Podpora vědeckého výzkumu (Research Acknowledgment)",
        copyBtn: "📋 Kopírovat",
        licBtn: "📜 Otevřít plné znění licence & etiky bádání",
        repoBtn: "💻 Repozitář GitHub ↗"
      },
      en: {
        h: "✍️ How to Cite the Dlouhomilov & Benkov Archive",
        sub: "When reusing transcriptions or charts in scholarly or genealogical work, please cite both the primary archives (ZAO Opava / ČÚZK / MZA Brno) and this digital edition:",
        isoH: "Recommended Citation (ČSN ISO 690)",
        bibH: "BibTeX Entry",
        ackH: "🔬 Research Support & Acknowledgment",
        copyBtn: "📋 Copy",
        licBtn: "📜 Open Full License & Research Ethics Modal",
        repoBtn: "💻 GitHub Repository ↗"
      },
      de: {
        h: "✍️ Zitierhinweis für das Projekt Dlouhomilov & Benkov",
        sub: "Bitte geben Sie bei wissenschaftlicher oder genealogischer Weiterverwendung sowohl die Primärarchive (ZAO Opava / ČÚZK / MZA Brünn) als auch dieses Portal an:",
        isoH: "Empfohlene Zitation (ČSN ISO 690)",
        bibH: "BibTeX-Eintrag",
        ackH: "🔬 Wissenschaftliche Förderung (Research Acknowledgment)",
        copyBtn: "📋 Kopieren",
        licBtn: "📜 Lizenz- & Ethikhinweise öffnen",
        repoBtn: "💻 GitHub-Repository ↗"
      }
    }[lang] || {
      h: "✍️ Jak citovat projekt Dlouhomilov & Benkov",
      sub: "Při dalším odborném, genealogickém nebo školním využití prosím uveďte jak primární archivní fond (ZAO Opava / ČÚZK / MZA Brno), tak odkaz na toto digitální zpracování:",
      isoH: "Doporučená citace (ČSN ISO 690)",
      bibH: "BibTeX záznam",
      ackH: "🔬 Podpora vědeckého výzkumu (Research Acknowledgment)",
      copyBtn: "📋 Kopírovat",
      licBtn: "📜 Otevřít plné znění licence & etiky bádání",
      repoBtn: "💻 Repozitář GitHub ↗"
    };

    citeBoxEl.innerHTML = `
      <div class="parchment-card p-5 sm:p-6 rounded-2xl border border-amber-300 shadow-sm space-y-4">
        <div>
          <h3 class="text-lg font-extrabold font-heading text-amber-950">${cTxt.h}</h3>
          <p class="text-xs sm:text-sm text-slate-700 mt-1">${cTxt.sub}</p>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div class="p-4 bg-white rounded-xl border border-amber-200 space-y-2">
            <div class="flex items-center justify-between gap-2">
              <strong class="text-xs text-amber-950 uppercase tracking-wider">${cTxt.isoH}</strong>
              <button type="button" onclick="copyCitationText('project-iso690-text', this)"
                class="px-2.5 py-1 rounded-lg bg-amber-100 hover:bg-amber-800 hover:text-white text-amber-950 text-xs font-bold transition-colors cursor-pointer">
                ${cTxt.copyBtn}
              </button>
            </div>
            <p id="project-iso690-text" class="text-xs font-mono text-slate-800 bg-stone-50 p-3 rounded-lg border border-stone-200 select-all break-words">${isoStr}</p>
          </div>
          <div class="p-4 bg-white rounded-xl border border-amber-200 space-y-2">
            <div class="flex items-center justify-between gap-2">
              <strong class="text-xs text-amber-950 uppercase tracking-wider">${cTxt.bibH}</strong>
              <button type="button" onclick="copyCitationText('project-bibtex-text', this)"
                class="px-2.5 py-1 rounded-lg bg-amber-100 hover:bg-amber-800 hover:text-white text-amber-950 text-xs font-bold transition-colors cursor-pointer">
                ${cTxt.copyBtn}
              </button>
            </div>
            <pre id="project-bibtex-text" class="text-[11px] font-mono text-slate-800 bg-stone-50 p-3 rounded-lg border border-stone-200 overflow-x-auto select-all whitespace-pre-wrap">${bibStr}</pre>
          </div>
        </div>
        ${pc.acknowledgmentHtml ? `
          <div class="p-4 rounded-xl bg-indigo-50/75 border border-indigo-200 space-y-2">
            <div class="flex items-center justify-between gap-2 flex-wrap">
              <strong class="text-xs text-indigo-950 uppercase tracking-wider">${cTxt.ackH}</strong>
              <button type="button" onclick="copyCitationText('project-ack-copy-text', this)"
                class="px-2.5 py-1 rounded-lg bg-indigo-100 hover:bg-indigo-800 hover:text-white text-indigo-950 text-xs font-bold transition-colors cursor-pointer">
                ${cTxt.copyBtn}
              </button>
            </div>
            <p class="text-xs text-slate-700 leading-relaxed">${lblPick(pc, "acknowledgmentIntro")}</p>
            <p id="project-ack-copy-text" data-i18n-lock class="text-xs font-mono text-slate-900 bg-white p-3 rounded-lg border border-indigo-200 select-all leading-relaxed">${pc.acknowledgmentHtmlWithCopyUrl || pc.acknowledgmentHtml}</p>
          </div>
        ` : ""}
        <div class="p-3.5 rounded-xl bg-amber-50/90 border border-amber-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <p class="text-slate-700 leading-relaxed">${lblPick(pc, "licenseNote")}</p>
          <div class="flex flex-wrap items-center gap-2 shrink-0">
            <button type="button" onclick="openLicenceModal()"
              class="px-3 py-1.5 rounded-lg bg-amber-800 hover:bg-amber-900 text-white font-bold transition-colors cursor-pointer">
              ${cTxt.licBtn}
            </button>
            <a href="${pc.repoUrl}" target="_blank" rel="noopener noreferrer"
              class="px-3 py-1.5 rounded-lg bg-white hover:bg-amber-100 text-amber-950 border border-amber-300 font-bold transition-colors">
              ${cTxt.repoBtn}
            </a>
          </div>
        </div>
      </div>
    `;
    if (typeof protectLocalizedDomSubtree === "function") protectLocalizedDomSubtree(citeBoxEl, lang);
  }

  renderDownloadableWorksSection();
}

function renderDownloadableWorksSection() {
  const containerEl = document.getElementById("downloadable-works-container");
  if (!containerEl || typeof referencesData === "undefined" || !referencesData.downloadableWorks) return;

  const dw = referencesData.downloadableWorks;
  const groups = Array.isArray(dw.groups) ? dw.groups : [];
  const lang = window.currentLang || "cs";
  const lblPick = (obj, base) => {
    if (!obj) return "";
    if (lang === "en" && obj[base + "En"]) return obj[base + "En"];
    if (lang === "de" && obj[base + "De"]) return obj[base + "De"];
    return obj[base] || "";
  };

  const totalCount = groups.reduce((acc, g) => acc + (Array.isArray(g.items) ? g.items.length : 0), 0);
  const allLabel = lang === "en" ? "All Groups" : lang === "de" ? "Alle Gruppen" : "Všechny skupiny";
  const visibleGroups = currentDownloadGroup === "all"
    ? groups
    : groups.filter(g => g.key === currentDownloadGroup);

  const filtersHtml = `
    <div class="flex flex-wrap items-center gap-1.5">
      <button type="button" onclick="filterDownloadableWorksGroup('all')"
        class="px-3 py-1.5 rounded-full text-xs font-bold border transition-all cursor-pointer flex items-center gap-1.5 ${currentDownloadGroup === "all" ? "bg-amber-800 text-white border-amber-900 shadow-xs" : "bg-white hover:bg-amber-100 text-slate-700 border-amber-200"}">
        <span>📑</span>
        <span>${allLabel}</span>
        <span class="text-[10px] px-1.5 rounded-full ${currentDownloadGroup === "all" ? "bg-amber-700 text-amber-100" : "bg-amber-50 text-amber-900"}">${totalCount}</span>
      </button>
      ${groups.map(g => {
        const gCount = Array.isArray(g.items) ? g.items.length : 0;
        const active = currentDownloadGroup === g.key;
        return `
          <button type="button" onclick="filterDownloadableWorksGroup('${g.key}')"
            class="px-3 py-1.5 rounded-full text-xs font-bold border transition-all cursor-pointer flex items-center gap-1.5 ${active ? "bg-amber-800 text-white border-amber-900 shadow-xs" : "bg-white hover:bg-amber-100 text-slate-700 border-amber-200"}">
            <span>${g.icon}</span>
            <span>${lblPick(g, "filterLabel")}</span>
            <span class="text-[10px] px-1.5 rounded-full ${active ? "bg-amber-700 text-amber-100" : "bg-amber-50 text-amber-900"}">${gCount}</span>
          </button>
        `;
      }).join("")}
    </div>
  `;

  const groupsHtml = visibleGroups.map(g => {
    const items = Array.isArray(g.items) ? g.items : [];
    const cardsHtml = items.map(it => {
      const linksHtml = (Array.isArray(it.links) ? it.links : []).map(lnk => `
        <a href="${lnk.url}" target="_blank" rel="noopener noreferrer"
          class="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-amber-50 hover:bg-amber-800 hover:text-white text-amber-950 border border-amber-300 text-[11px] font-bold transition-colors">
          ${lblPick(lnk, "label")}
        </a>
      `).join("");

      return `
        <article id="${it.id}" class="p-4 rounded-xl bg-white border border-amber-200/90 shadow-2xs flex flex-col justify-between gap-2.5 hover:border-amber-400 transition-all">
          <div class="space-y-1.5">
            <div class="flex flex-wrap items-center justify-between gap-2">
              <span class="px-2 py-0.5 rounded-full text-[10px] font-bold border ${g.badgeClass || "bg-amber-100 text-amber-950 border-amber-300"}">
                ${lblPick(it, "degreeOrType")}
              </span>
              <span class="font-mono text-[11px] font-bold text-slate-600 bg-stone-100 px-2 py-0.5 rounded">
                ${it.year}
              </span>
            </div>
            <h5 class="text-sm sm:text-base font-extrabold font-heading text-slate-900 leading-snug">
              ${lblPick(it, "title")}
            </h5>
            <p class="text-xs font-bold text-amber-900">
              ✍️ ${lblPick(it, "author")}
            </p>
            <p class="text-xs text-slate-700 leading-relaxed">
              ${lblPick(it, "description")}
            </p>
          </div>
          ${linksHtml ? `
            <div class="flex flex-wrap items-center justify-end gap-1.5 pt-2 border-t border-amber-100">
              ${linksHtml}
            </div>
          ` : ""}
        </article>
      `;
    }).join("");

    return `
      <div class="space-y-3 pt-4 border-t border-amber-200/80">
        <div class="space-y-1">
          <h4 class="text-base sm:text-lg font-extrabold font-heading text-amber-950 flex items-center gap-2">
            <span>${g.icon}</span>
            <span>${lblPick(g, "title")}</span>
            <span class="text-xs font-sans font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-950 border border-amber-300">${items.length}</span>
          </h4>
          <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
            ${lblPick(g, "note")}
          </p>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-3.5">
          ${cardsHtml}
        </div>
      </div>
    `;
  }).join("");

  const calloutHtml = dw.offlineCallout ? `
    <div class="p-4 rounded-xl bg-amber-50/90 border border-amber-300/80 space-y-1">
      <h4 class="text-xs sm:text-sm font-extrabold text-amber-950">${lblPick(dw.offlineCallout, "title")}</h4>
      <p class="text-xs text-slate-700 leading-relaxed">${lblPick(dw.offlineCallout, "text")}</p>
    </div>
  ` : "";

  containerEl.innerHTML = `
    <div class="parchment-card p-5 sm:p-6 rounded-2xl border border-amber-300 shadow-sm bg-gradient-to-br from-amber-50/50 via-white to-stone-50/40 space-y-5">
      <div class="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
        <div class="space-y-2 max-w-4xl">
          <span class="inline-block text-[11px] font-bold uppercase tracking-wider text-amber-900 bg-amber-100 px-2.5 py-0.5 rounded-full border border-amber-300">
            ${lblPick(dw, "badge")}
          </span>
          <h3 class="text-xl sm:text-2xl font-black font-heading text-amber-950">
            ${lblPick(dw, "title")}
          </h3>
          <p class="text-xs sm:text-sm text-slate-700 leading-relaxed">
            ${lblPick(dw, "subtitle")}
          </p>
        </div>
        ${dw.synthesisUrl ? `
          <div class="shrink-0">
            <a href="${dw.synthesisUrl}" target="_blank" rel="noopener noreferrer"
              class="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-amber-800 hover:bg-amber-900 text-white text-xs font-extrabold shadow-xs transition-all">
              ${lblPick(dw, "synthesisLabel")}
            </a>
          </div>
        ` : ""}
      </div>

      ${filtersHtml}
      ${groupsHtml}
      ${calloutHtml}
    </div>
  `;

  if (typeof protectLocalizedDomSubtree === "function") protectLocalizedDomSubtree(containerEl, lang);
}

function filterDownloadableWorksGroup(groupKey) {
  currentDownloadGroup = groupKey || "all";
  renderDownloadableWorksSection();
}

function filterReferencesCategory(cat) {
  currentRefCategory = cat;
  renderReferencesSection();
}

function searchReferences(query) {
  currentRefSearch = query || "";
  renderReferencesSection();
}

function copyCitationText(elementId, btnEl) {
  const el = document.getElementById(elementId);
  if (!el) return;
  const text = (el.textContent || "").trim();
  const lang = window.currentLang || "cs";
  const doneLabel = lang === "en" ? "✔ Copied" : lang === "de" ? "✔ Kopiert" : "✔ Zkopírováno";
  const origLabel = btnEl ? btnEl.textContent : "";

  const markDone = () => {
    if (!btnEl) return;
    btnEl.textContent = doneLabel;
    setTimeout(() => { btnEl.textContent = origLabel; }, 1800);
  };

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(markDone).catch(() => {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand("copy"); } catch (e) {}
      document.body.removeChild(ta);
      markDone();
    });
  } else {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand("copy"); } catch (e) {}
    document.body.removeChild(ta);
    markDone();
  }
}


function setupEventListeners() {
  const houseSearch = document.getElementById("house-search-input") || document.getElementById("search-input");
  if (houseSearch) {
    houseSearch.addEventListener("input", (e) => searchHouses(e.target.value));
  }

  const peopleSearch = document.getElementById("people-search-input");
  if (peopleSearch) {
    peopleSearch.addEventListener("input", (e) => searchPeople(e.target.value));
  }

  // Podpora klávesy ESC pro zavření všech modálů
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeArchiveViewer();
      closePersonModal();
      closeAddHouseModal();
      closeLicenceModal();
      closeGeorefHelpModal();
    }
  });
}

function openAddHouseModal() {
  const modal = document.getElementById("add-house-modal");
  if (modal) modal.classList.remove("hidden");
}

function closeAddHouseModal() {
  const modal = document.getElementById("add-house-modal");
  if (modal) modal.classList.add("hidden");
}

function saveNewHouse(e) {
  e.preventDefault();
  const number = document.getElementById("new-house-number").value.trim();
  const name = document.getElementById("new-house-name").value.trim();
  const type = document.getElementById("new-house-type").value.trim();
  const isHeritage = document.getElementById("new-house-heritage")?.checked || false;
  const lat = parseFloat(document.getElementById("new-house-lat").value) || 49.9075;
  const lng = parseFloat(document.getElementById("new-house-lng").value) || 16.9908;
  const desc = document.getElementById("new-house-desc").value.trim();

  if (!number) {
    alert("Zadejte prosím číslo popisné.");
    return;
  }

  const newHouse = {
    id: `cp${number}`,
    number: number,
    localName: name || `Stavení čp. ${number}`,
    type: isHeritage ? "Kulturní památka ČR (ÚSKP)" : (type || "Usedlost"),
    isHeritage: isHeritage,
    uskpNumber: isHeritage ? "V jednání" : "VPZ 2350",
    heritageDescription: isHeritage ? "Objekt v památkové péči." : "",
    heritageSource: isHeritage ? "Návrh na zápis" : "Vesnická památková zóna Dlouhomilov",
    location: {
      lat: lat,
      lng: lng,
      cadastralParcel: `st. ${number}`,
      landParcels: "-",
      source: "Uživatelské zadání"
    },
    statusStableCadastre: "Stavení zaneseno ve stabilním katastru",
    cadastreSource: "Stabilní katastr 1834",
    description: desc || "Historické stavení obce Dlouhomilov.",
    timeline: [],
    census: [],
    documents: [],
    stories: []
  };

  housesData.push(newHouse);
  renderMapMarkers();
  renderHouseCards();
  closeAddHouseModal();
  openHouseDetail(newHouse.id);
  alert(`Stavení čp. ${number} bylo úspěšně přidáno do databáze!`);
}

/* ==========================================================================
   INTERAKTIVNÍ KALIBRAČNÍ A GEOREFERENČNÍ MODUL (LADĚNÍ HISTORICKÝCH MAP)
   ========================================================================== */

const defaultLocalityBounds = {
  dlouhomilov: [[49.9040, 16.9875], [49.9158, 16.9965]],
  benkov: [[49.8895, 17.0185], [49.8955, 17.0272]],
  medelske: [[49.8992, 16.9918], [49.9045, 16.9978]]
};

const georefState = {
  isOpen: false,
  activeMap: "cadastre1834",
  activeTarget: "map", // "map" | "dlouhomilov" | "benkov" | "medelske"
  target: "cadastre1834", // Zpětná kompatibilita
  stepMeters: 5,
  isDragging: false,
  dragStartLatLng: null,
  isSideBySide: false,
  gcp: {
    points: [], // { id, name, ref: {lat, lng}, hist: {lat, lng} }
    currentRefPoint: null, // dočasně zvolený referenční bod před kliknutím na historickou mapu
    mode: "idle" // "idle" | "awaiting_ref_click" | "awaiting_hist_click"
  },
  layers: {
    cadastre1834: {
      name: "Stabilní katastr 1834",
      baseBounds: (typeof warpedMapsManifest !== "undefined" && warpedMapsManifest.layers?.cadastre1834?.bounds) || [[49.888, 16.97], [49.9285, 17.0165]],
      deltaLat: 0,
      deltaLng: 0,
      scale: 1.0,
      rotation: 0
    },
    vojenske1_1764: {
      name: "I. vojenské mapování (1764)",
      baseBounds: (typeof warpedMapsManifest !== "undefined" && warpedMapsManifest.layers?.vojenske1_1764?.bounds) || [[49.882, 16.96], [49.929, 17.044]],
      deltaLat: 0,
      deltaLng: 0,
      scale: 1.0,
      rotation: 0
    },
    vojenske2_1838: {
      name: "II. vojenské mapování (1838)",
      baseBounds: (typeof warpedMapsManifest !== "undefined" && warpedMapsManifest.layers?.vojenske2_1838?.bounds) || [[49.882, 16.96], [49.929, 17.044]],
      deltaLat: 0,
      deltaLng: 0,
      scale: 1.0,
      rotation: 0
    },
    vojenske3_1874: {
      name: "III. vojenské mapování (1874)",
      baseBounds: (typeof warpedMapsManifest !== "undefined" && warpedMapsManifest.layers?.vojenske3_1874?.bounds) || [[49.882, 16.96], [49.929, 17.044]],
      deltaLat: 0,
      deltaLng: 0,
      scale: 1.0,
      rotation: 0
    },
    vojenske3_1937: {
      name: "Topografická mapa ČSR (1937)",
      baseBounds: (typeof warpedMapsManifest !== "undefined" && warpedMapsManifest.layers?.vojenske3_1937?.bounds) || [[49.882, 16.96], [49.929, 17.044]],
      deltaLat: 0,
      deltaLng: 0,
      scale: 1.0,
      rotation: 0
    },
    vojenske3_1945: {
      name: "III. vojenské mapování (1945)",
      baseBounds: (typeof warpedMapsManifest !== "undefined" && warpedMapsManifest.layers?.vojenske3_1945?.bounds) || [[49.882, 16.96], [49.929, 17.044]],
      deltaLat: 0,
      deltaLng: 0,
      scale: 1.0,
      rotation: 0
    },
    topo1952: {
      name: "Topografická mapa S-1952 (1952)",
      baseBounds: (typeof warpedMapsManifest !== "undefined" && warpedMapsManifest.layers?.topo1952?.bounds) || [[49.90042065531134, 16.946386603006943], [49.91732370096802, 16.999735836657134]],
      deltaLat: 0,
      deltaLng: 0,
      scale: 1.0,
      rotation: 0
    },
    orto1953: {
      name: "Historická ortofotomapa (1953–1954)",
      baseBounds: (typeof warpedMapsManifest !== "undefined" && warpedMapsManifest.layers?.orto1953?.bounds) || [[49.882, 16.96], [49.929, 17.044]],
      deltaLat: 0,
      deltaLng: 0,
      scale: 1.0,
      rotation: 0
    }
  },
  localities: {} // Klíč: `${mapId}_${locKey}`, např. "vojenske2_1838_benkov"
};

// Získání výchozích souřadnic čtverce lokality pro danou mapu
function getBaseLocalityBounds(mapId, locKey) {
  if (typeof historicalMapsData !== "undefined") {
    const mapMeta = historicalMapsData.find(m => m.overlayKey === mapId || m.id === mapId);
    if (mapMeta && mapMeta.localityBounds) {
      if (mapMeta.localityBounds[locKey]) {
        return JSON.parse(JSON.stringify(mapMeta.localityBounds[locKey]));
      }
    }
  }
  return JSON.parse(JSON.stringify(defaultLocalityBounds[locKey] || [[49.9020, 16.9845], [49.9130, 16.9965]]));
}

// Získání nebo vytvoření objektu kalibrace čtverce lokality na konkrétní mapě
function getLocalityCalibration(mapId, locKey) {
  const key = `${mapId}_${locKey}`;
  if (!georefState.localities[key]) {
    georefState.localities[key] = {
      deltaLat: 0,
      deltaLng: 0,
      scale: 1.0,
      rotation: 0
    };
  }
  return georefState.localities[key];
}

// Výpočet transformovaných souřadnic čtverce dané lokality na konkrétní mapě
function computeLocalityBounds(mapId, locKey) {
  const actualMapId = mapId || georefState.activeMap || "cadastre1834";
  const base = getBaseLocalityBounds(actualMapId, locKey);
  const calib = getLocalityCalibration(actualMapId, locKey);

  const centerLat = (base[0][0] + base[1][0]) / 2.0;
  const centerLng = (base[0][1] + base[1][1]) / 2.0;
  const spanLat = (base[1][0] - base[0][0]) * calib.scale;
  const spanLng = (base[1][1] - base[0][1]) * calib.scale;

  const newLatSouth = centerLat - spanLat / 2.0 + calib.deltaLat;
  const newLatNorth = centerLat + spanLat / 2.0 + calib.deltaLat;
  const newLngWest = centerLng - spanLng / 2.0 + calib.deltaLng;
  const newLngEast = centerLng + spanLng / 2.0 + calib.deltaLng;

  return [
    [parseFloat(newLatSouth.toFixed(6)), parseFloat(newLngWest.toFixed(6))],
    [parseFloat(newLatNorth.toFixed(6)), parseFloat(newLngEast.toFixed(6))]
  ];
}

// Získání aktivního kalibrovaného objektu (vrstva mapy nebo čtverec na vybrané mapě)
function getActiveGeorefObject() {
  if (georefState.activeTarget === "map") {
    return georefState.layers[georefState.activeMap];
  } else {
    return getLocalityCalibration(georefState.activeMap, georefState.activeTarget);
  }
}

// Získání aktuálních vypočtených souřadnic pro aktivní cíl
function getActiveCurrentBounds() {
  if (georefState.activeTarget === "map") {
    return computeCurrentBounds(georefState.activeMap);
  } else {
    return computeLocalityBounds(georefState.activeMap, georefState.activeTarget);
  }
}

// Kontrola, zda byla vrstva ručně odchýlena od přesného manifestu
function isGeorefModified(cal) {
  if (!cal) return false;
  return (
    Math.abs(cal.deltaLat || 0) > 1e-8 ||
    Math.abs(cal.deltaLng || 0) > 1e-8 ||
    Math.abs((cal.scale ?? 1.0) - 1.0) > 1e-6 ||
    Math.abs(cal.rotation || 0) > 1e-4
  );
}

// Aplikace transformace na konkrétní vrstvu (jednoobrázkovou i 4-kvadrantovou)
function applyGeorefToLeafletLayer(leafletLayer, mapId) {
  if (!leafletLayer) return;
  const cal = georefState.layers[mapId];
  const targetBounds = (cal && !isGeorefModified(cal) && leafletLayer._warpedSpec?.bounds)
    ? leafletLayer._warpedSpec.bounds
    : computeCurrentBounds(mapId);
  if (typeof leafletLayer.setBounds === "function") {
    leafletLayer.setBounds(targetBounds);
  }
  const rot = cal?.rotation || 0;
  if (typeof leafletLayer.setRotation === "function") {
    leafletLayer.setRotation(rot);
  } else if (typeof leafletLayer.getElement === "function") {
    const el = leafletLayer.getElement();
    if (el) {
      el.style.transformOrigin = "center center";
      el.style.rotate = rot ? `${rot}deg` : "";
    }
  }
}

// Aplikace změn aktivního prvku do Leafletu
function applyActiveGeorefTransform() {
  if (georefState.activeTarget === "map") {
    const mapId = georefState.activeMap;
    applyGeorefToLeafletLayer(overlayLayers[mapId], mapId);
    if (georefState.isSideBySide && mapHistOverlay) {
      applyGeorefToLeafletLayer(mapHistOverlay, mapId);
    }
  } else {
    updateLocalityHighlights(currentHistoricalLayerKey);
  }
}

// Výpočet transformovaných hranic pro celou mapovou vrstvu
function computeCurrentBounds(targetKey) {
  if (targetKey && targetKey.startsWith("loc_")) {
    return computeLocalityBounds(georefState.activeMap, targetKey.replace("loc_", ""));
  }
  const mapKey = targetKey || georefState.activeMap;
  const cur = georefState.layers[mapKey];
  if (!cur) return [[49.9020, 16.9845], [49.9130, 16.9965]];
  const base = cur.baseBounds;

  const centerLat = (base[0][0] + base[1][0]) / 2.0;
  const centerLng = (base[0][1] + base[1][1]) / 2.0;
  const spanLat = (base[1][0] - base[0][0]) * cur.scale;
  const spanLng = (base[1][1] - base[0][1]) * cur.scale;

  const newLatSouth = centerLat - spanLat / 2.0 + cur.deltaLat;
  const newLatNorth = centerLat + spanLat / 2.0 + cur.deltaLat;
  const newLngWest = centerLng - spanLng / 2.0 + cur.deltaLng;
  const newLngEast = centerLng + spanLng / 2.0 + cur.deltaLng;

  return [
    [parseFloat(newLatSouth.toFixed(6)), parseFloat(newLngWest.toFixed(6))],
    [parseFloat(newLatNorth.toFixed(6)), parseFloat(newLngEast.toFixed(6))]
  ];
}

function applyGeorefTransform(targetKey) {
  if (targetKey && targetKey.startsWith("loc_")) {
    updateLocalityHighlights(currentHistoricalLayerKey);
    return;
  }
  applyActiveGeorefTransform();
}

// Inicializace modulu – načtení z localStorage (v2 pro přesné EPSG:3857 WebP vrstvy)
function initGeorefEngine() {
  try {
    const saved = localStorage.getItem("dlouhomilov_georef_calibrations_v2");
    if (saved) {
      const parsed = JSON.parse(saved);
      const layersData = parsed.layers || parsed;
      Object.keys(georefState.layers).forEach(k => {
        if (layersData[k]) {
          georefState.layers[k].deltaLat = layersData[k].deltaLat || 0;
          georefState.layers[k].deltaLng = layersData[k].deltaLng || 0;
          georefState.layers[k].scale = layersData[k].scale || 1.0;
          georefState.layers[k].rotation = layersData[k].rotation || 0;
          if (isGeorefModified(georefState.layers[k])) {
            applyGeorefToLeafletLayer(overlayLayers[k], k);
          }
        }
      });
      if (parsed.localities) {
        georefState.localities = parsed.localities;
      }
    }
  } catch (err) {
    console.warn("Chyba při načítání uložených kalibrací georeferencování:", err);
  }
}

// Otevření / zavření panelu ladění
function toggleGeorefPanel(forceOpen = null) {
  const panel = document.getElementById("georef-calibration-panel");
  const btn = document.getElementById("toggle-georef-btn");
  if (!panel) return;

  if (forceOpen !== null) {
    georefState.isOpen = forceOpen;
  } else {
    georefState.isOpen = !georefState.isOpen;
  }

  if (georefState.isOpen) {
    panel.classList.remove("hidden");
    btn?.classList.add("bg-amber-900", "text-amber-200");
    btn?.classList.remove("bg-white", "text-slate-800");
    updateLocalityHighlights(currentHistoricalLayerKey);
    updateGeorefUI();
    document.getElementById("mapa-section")?.scrollIntoView({ behavior: "smooth" });
  } else {
    panel.classList.add("hidden");
    btn?.classList.remove("bg-amber-900", "text-amber-200");
    btn?.classList.add("bg-white", "text-slate-800");
    if (georefState.isDragging) georefToggleDrag(false);
    if (georefState.gcp && georefState.gcp.mode !== "idle") cancelGcpPlacement();
    updateLocalityHighlights(currentHistoricalLayerKey);
  }
}

// Minimalizace a rozbalení plovoucího kalibračního okna
function toggleGeorefMinimize() {
  const body = document.getElementById("georef-body");
  const minBtn = document.getElementById("georef-min-btn");
  const panel = document.getElementById("georef-calibration-panel");
  if (!body) return;

  const isMin = body.classList.contains("hidden");
  if (isMin) {
    body.classList.remove("hidden");
    if (minBtn) minBtn.textContent = "–";
    panel?.classList.remove("w-auto");
    panel?.classList.add("w-80", "sm:w-88");
  } else {
    body.classList.add("hidden");
    if (minBtn) minBtn.textContent = "⤢";
    panel?.classList.remove("w-80", "sm:w-88");
    panel?.classList.add("w-auto");
  }
}

// Obousměrná synchronizace posuvníku průhlednosti mezi horní lištou a plovoucím boxem
function updateGeorefOpacity(value) {
  updateCadastreOpacity(value);
  const georefLabel = document.getElementById("georef-opacity-label");
  const mainSlider = document.getElementById("cadastre-opacity-slider");
  const georefSlider = document.getElementById("georef-opacity-slider");
  if (georefLabel) georefLabel.textContent = value + "%";
  if (mainSlider && mainSlider.value !== value) mainSlider.value = value;
  if (georefSlider && georefSlider.value !== value) georefSlider.value = value;
}

// Výběr kalibrované mapy
function georefSelectMap(mapId) {
  georefState.activeMap = mapId;
  georefState.target = mapId;
  switchHistoricalOverlay(mapId);
  const mainSelect = document.getElementById("historical-map-select");
  if (mainSelect && mainSelect.value !== mapId) mainSelect.value = mapId;
  const georefMapSelect = document.getElementById("georef-map-select");
  if (georefMapSelect && georefMapSelect.value !== mapId) georefMapSelect.value = mapId;
  updateLocalityHighlights(mapId);
  updateGeorefUI();
}

// Výběr prvku ke kalibraci na dané mapě ("map" | "dlouhomilov" | "benkov" | "medelske")
function georefSelectTarget(target) {
  georefState.activeTarget = target;
  if (target !== "map") {
    const checkbox = document.getElementById("toggle-layer-locality");
    if (checkbox && !checkbox.checked) {
      checkbox.checked = true;
      toggleLocalityHighlights(true);
    }
  }
  updateLocalityHighlights(georefState.activeMap);
  updateGeorefUI();
}

// Zpětná kompatibilita pro switchGeorefTarget
function switchGeorefTarget(target) {
  if (target.startsWith("loc_")) {
    georefSelectTarget(target.replace("loc_", ""));
  } else if (target === "map") {
    georefSelectTarget("map");
  } else if (georefState.layers[target]) {
    georefSelectMap(target);
    georefSelectTarget("map");
  }
}

// Posun vrstvy nebo čtverce tlačítky (Nudge)
function georefNudge(dir) {
  const cur = getActiveGeorefObject();
  if (!cur) return;
  const stepM = georefState.stepMeters;
  const dLat = stepM / 111320.0;
  const dLng = stepM / 71500.0;

  if (dir === "up") cur.deltaLat += dLat;
  else if (dir === "down") cur.deltaLat -= dLat;
  else if (dir === "left") cur.deltaLng -= dLng;
  else if (dir === "right") cur.deltaLng += dLng;

  applyActiveGeorefTransform();
  updateGeorefUI();
}

// Volba kroku posunu (1m, 5m, 25m)
function georefSetStep(stepM) {
  georefState.stepMeters = stepM;
  document.querySelectorAll(".georef-step-btn").forEach(b => {
    if (parseInt(b.getAttribute("data-step")) === stepM) {
      b.classList.add("bg-amber-800", "text-white");
      b.classList.remove("bg-white", "text-slate-700");
    } else {
      b.classList.remove("bg-amber-800", "text-white");
      b.classList.add("bg-white", "text-slate-700");
    }
  });
}

// Změna měřítka posuvníkem (libovolné procento od 1% výše)
function georefUpdateScale(val) {
  const cur = getActiveGeorefObject();
  if (!cur) return;
  cur.scale = Math.max(0.01, parseFloat(val) / 100.0);
  applyActiveGeorefTransform();
  updateGeorefUI();
}

// Krok měřítka (+/-)
function georefStepScale(deltaPct) {
  const cur = getActiveGeorefObject();
  if (!cur) return;
  cur.scale = Math.max(0.01, Math.min(10.0, cur.scale + deltaPct / 100.0));
  applyActiveGeorefTransform();
  updateGeorefUI();
}

// Nastavení přesného měřítka (předvolbami 50%, 75%, 100%, 125%, 150%)
function georefSetScaleExact(ratio) {
  const cur = getActiveGeorefObject();
  if (!cur) return;
  cur.scale = Math.max(0.01, ratio);
  applyActiveGeorefTransform();
  updateGeorefUI();
}

// Změna rotace posuvníkem (pouze pro mapu)
function georefUpdateRotation(val) {
  if (georefState.activeTarget !== "map") return;
  const cur = getActiveGeorefObject();
  if (!cur) return;
  cur.rotation = parseFloat(val);
  applyActiveGeorefTransform();
  updateGeorefUI();
}

// Krok rotace (+/-)
function georefStepRotation(deltaDeg) {
  if (georefState.activeTarget !== "map") return;
  const cur = getActiveGeorefObject();
  if (!cur) return;
  cur.rotation = parseFloat(((cur.rotation || 0) + deltaDeg).toFixed(2));
  applyActiveGeorefTransform();
  updateGeorefUI();
}

// Přepnutí režimu tažení myší
function georefToggleDrag(enabled) {
  georefState.isDragging = enabled;
  const btn = document.getElementById("georef-drag-btn");
  
  if (enabled) {
    btn?.classList.add("bg-amber-700", "text-white", "ring-2", "ring-amber-500");
    btn?.classList.remove("bg-white", "text-slate-800");
    map.getContainer().style.cursor = "move";
    
    map.dragging.disable();
    map.on("mousedown", onGeorefMouseDown);
    map.on("mousemove", onGeorefMouseMove);
    map.on("mouseup", onGeorefMouseUp);
  } else {
    btn?.classList.remove("bg-amber-700", "text-white", "ring-2", "ring-amber-500");
    btn?.classList.add("bg-white", "text-slate-800");
    map.getContainer().style.cursor = "";
    
    map.dragging.enable();
    map.off("mousedown", onGeorefMouseDown);
    map.off("mousemove", onGeorefMouseMove);
    map.off("mouseup", onGeorefMouseUp);
  }
}

let isPointerDown = false;
let startPointerLatLng = null;

function onGeorefMouseDown(e) {
  isPointerDown = true;
  startPointerLatLng = e.latlng;
}

function onGeorefMouseMove(e) {
  if (!isPointerDown || !startPointerLatLng) return;
  const cur = getActiveGeorefObject();
  if (!cur) return;
  const dLat = e.latlng.lat - startPointerLatLng.lat;
  const dLng = e.latlng.lng - startPointerLatLng.lng;
  cur.deltaLat += dLat;
  cur.deltaLng += dLng;
  startPointerLatLng = e.latlng;
  applyActiveGeorefTransform();
  updateGeorefUI();
}

function onGeorefMouseUp() {
  isPointerDown = false;
  startPointerLatLng = null;
}

// Aktualizace ovládacích prvků v panelu
function updateGeorefUI() {
  const mapId = georefState.activeMap;
  const target = georefState.activeTarget;
  const wmsMeta = (typeof wmsAerialLayerMeta !== "undefined") ? wmsAerialLayerMeta[mapId] : null;
  const cur = getActiveGeorefObject();

  // 1. Synchronizace výběru mapy a štítku roku
  const mapSelect = document.getElementById("georef-map-select");
  if (mapSelect && Array.from(mapSelect.options).some(opt => opt.value === mapId)) {
    mapSelect.value = mapId;
  }

  const meta = (typeof historicalMapsData !== "undefined") ? historicalMapsData.find(m => m.overlayKey === mapId || m.id === mapId) : null;
  const yearBadge = document.getElementById("georef-map-year-badge");
  if (yearBadge) {
    yearBadge.textContent = meta ? meta.year : (wmsMeta ? wmsMeta.year : mapId);
  }

  if (!cur && target === "map" && wmsMeta) {
    const targetLabel = document.getElementById("georef-target-type-label");
    if (targetLabel) targetLabel.textContent = `✈️ ČÚZK WMS (${wmsMeta.year})`;
    const boundsCode = document.getElementById("georef-bounds-code");
    if (boundsCode) {
      boundsCode.textContent = `// Nativně georeferencovaná vrstva ČÚZK WMS (EPSG:3857) – kalibrace není potřeba (vrstva: ${wmsMeta.wmsLayer})`;
    }
    renderGcpUI();
    return;
  }
  if (!cur) return;
  const bounds = getActiveCurrentBounds();

  // 2. Synchronizace tlačítek prvků ke kalibraci
  const isMap = target === "map";
  const targetLabel = document.getElementById("georef-target-type-label");
  if (targetLabel) {
    if (isMap) targetLabel.textContent = `🗺️ Celá mapa (${meta ? meta.year : mapId})`;
    else targetLabel.textContent = `🟨 Čtverec: ${target} [${meta ? meta.year : mapId}]`;
  }

  document.querySelectorAll(".georef-target-quick-btn").forEach(btn => {
    if (btn.dataset.target === target) {
      btn.classList.add("bg-amber-800", "text-white", "border-amber-800");
      btn.classList.remove("bg-amber-100", "text-amber-950", "border-amber-300");
    } else {
      btn.classList.remove("bg-amber-800", "text-white", "border-amber-800");
      btn.classList.add("bg-amber-100", "text-amber-950", "border-amber-300");
    }
  });

  // 3. Popisky pro posun a velikost
  const shiftTitle = document.getElementById("georef-shift-title");
  if (shiftTitle) shiftTitle.textContent = isMap ? "Posun mapy:" : `Posun čtverce (${target}):`;

  const scaleTitle = document.getElementById("georef-scale-title");
  if (scaleTitle) scaleTitle.textContent = isMap ? "Měřítko vrstvy:" : `Velikost čtverce (${target}):`;

  // 4. Panel rotace (pro obdélníky lokalit je deaktivovaný)
  const rotContainer = document.getElementById("georef-rotation-container");
  if (rotContainer) {
    if (isMap) {
      rotContainer.classList.remove("opacity-40", "pointer-events-none");
    } else {
      rotContainer.classList.add("opacity-40", "pointer-events-none");
    }
  }

  // 5. Posuvníky měřítka a rotace
  const scaleSlider = document.getElementById("georef-scale-slider");
  const scaleVal = document.getElementById("georef-scale-val");
  if (scaleSlider) scaleSlider.value = Math.round(cur.scale * 100);
  if (scaleVal) scaleVal.textContent = `${(cur.scale * 100).toFixed(1)}%`;

  const rotSlider = document.getElementById("georef-rotation-slider");
  const rotVal = document.getElementById("georef-rotation-val");
  if (rotSlider) rotSlider.value = cur.rotation || 0;
  if (rotVal) rotVal.textContent = `${(cur.rotation || 0) > 0 ? '+' : ''}${(cur.rotation || 0).toFixed(2)}°`;

  const deltaMetersLat = Math.round(cur.deltaLat * 111320);
  const deltaMetersLng = Math.round(cur.deltaLng * 71500);
  const shiftVal = document.getElementById("georef-shift-val");
  if (shiftVal) shiftVal.textContent = `S/J: ${deltaMetersLat > 0 ? '+' : ''}${deltaMetersLat} m, V/Z: ${deltaMetersLng > 0 ? '+' : ''}${deltaMetersLng} m`;

  // 6. Kód k exportu do clipboardu
  const boundsCode = document.getElementById("georef-bounds-code");
  if (boundsCode) {
    if (isMap) {
      const varName = `bounds_${mapId}`;
      boundsCode.textContent = `const ${varName} = [\n  [${bounds[0][0]}, ${bounds[0][1]}],\n  [${bounds[1][0]}, ${bounds[1][1]}]\n];`;
    } else {
      boundsCode.textContent = `// data/maps.js -> ${mapId} -> localityBounds.${target}:\n[\n  [${bounds[0][0]}, ${bounds[0][1]}],\n  [${bounds[1][0]}, ${bounds[1][1]}]\n]`;
    }
  }

  // 7. Synchronizace panelu GCP (vlícovacích bodů)
  renderGcpUI();
}

// Uložení do LocalStorage
function georefSave() {
  try {
    const dataToSave = {
      layers: georefState.layers,
      localities: georefState.localities
    };
    localStorage.setItem("dlouhomilov_georef_calibrations_v2", JSON.stringify(dataToSave));
    showGeorefToast("✅ Nastavení kalibrace všech vrstev a čtverců bylo uloženo do vašeho prohlížeče.");
  } catch (e) {
    alert("Chyba při ukládání: " + e.message);
  }
}

// Reset kalibrace na výchozí hodnoty
function georefReset() {
  const mapName = georefState.layers[georefState.activeMap]?.name || georefState.activeMap;
  const targetDesc = georefState.activeTarget === "map" 
    ? `celou mapu ${mapName}` 
    : `čtverec ${georefState.activeTarget} pro mapu ${mapName}`;
  if (!confirm(`Opravdu chcete resetovat kalibraci pro ${targetDesc}?`)) return;

  const cur = getActiveGeorefObject();
  if (cur) {
    cur.deltaLat = 0;
    cur.deltaLng = 0;
    cur.scale = 1.0;
    cur.rotation = 0;
  }
  applyActiveGeorefTransform();
  georefSave();
  updateGeorefUI();
}

// Kopírování souřadnic do schránky
function georefCopyBounds() {
  const code = document.getElementById("georef-bounds-code")?.textContent || "";
  navigator.clipboard.writeText(code).then(() => {
    showGeorefToast("📋 Souřadnice zkopírovány do schránky!");
  }).catch(() => {
    prompt("Zkopírujte souřadnice:", code);
  });
}

// Toast zpráva
function showGeorefToast(msg) {
  let toast = document.getElementById("georef-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "georef-toast";
    toast.className = "fixed bottom-20 right-6 z-[9999] bg-slate-900 text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-2xl transition-all duration-300 transform translate-y-0";
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.style.display = "block";
  toast.style.opacity = "1";
  setTimeout(() => {
    toast.style.opacity = "0";
    setTimeout(() => { toast.style.display = "none"; }, 300);
  }, 2500);
}

// Otevření / zavření modálu nápovědy k externím nástrojům
function openGeorefHelpModal() {
  const modal = document.getElementById("georef-help-modal");
  if (modal) modal.classList.remove("hidden");
}

/* ==========================================================================
   SIDE-BY-SIDE (DUAL MAP) & GCP LANDMARK KALIBRAČNÍ MODUL
   ========================================================================== */

let mapHist = null;
let mapHistOverlay = null;
let gcpRefMarkersLayer = null;
let gcpHistMarkersLayer = null;
let isSyncingMaps = false;

// Přepnutí režimu Side-by-Side (dvě okna vedle sebe)
function toggleSideBySideMode(forceState = null) {
  const nextState = forceState !== null ? forceState : !georefState.isSideBySide;
  georefState.isSideBySide = nextState;

  const header = document.getElementById("side-by-side-header");
  const splitContainer = document.getElementById("maps-split-container");
  const histWrapper = document.getElementById("map-hist-wrapper");
  const leftBadge = document.getElementById("left-map-badge");
  const toggleBtn = document.getElementById("toggle-split-btn");
  const panelToggleBtn = document.getElementById("georef-sidebyside-toggle-btn");

  if (nextState) {
    header?.classList.remove("hidden");
    histWrapper?.classList.remove("hidden");
    leftBadge?.classList.remove("hidden");
    splitContainer?.classList.remove("grid-cols-1");
    splitContainer?.classList.add("grid-cols-1", "md:grid-cols-2");

    toggleBtn?.classList.add("bg-amber-800", "text-white");
    toggleBtn?.classList.remove("bg-white", "text-slate-800");
    if (panelToggleBtn) {
      panelToggleBtn.classList.add("bg-amber-950", "ring-1", "ring-amber-400");
    }

    // Inicializace pravé mapy, pokud ještě neexistuje
    if (!mapHist) {
      initHistoricalSideMap();
    } else {
      updateHistoricalSideMapOverlay();
    }

    // V režimu Side-by-Side na hlavní (levé) mapě skryjeme překryv historické mapy,
    // aby vlevo zůstal čistý dnešní podklad a vpravo čistá historická mapa
    const curMapId = georefState.activeMap;
    if (overlayLayers[curMapId] && map.hasLayer(overlayLayers[curMapId])) {
      map.removeLayer(overlayLayers[curMapId]);
    }

    setTimeout(() => {
      map.invalidateSize();
      if (mapHist) {
        mapHist.invalidateSize();
        mapHist.setView(map.getCenter(), map.getZoom());
      }
    }, 200);

    showGeorefToast("🗔 Režim Vedle sebe aktivován (Vlevo dnešní podklad, vpravo historická mapa)");
  } else {
    header?.classList.add("hidden");
    histWrapper?.classList.add("hidden");
    leftBadge?.classList.add("hidden");
    splitContainer?.classList.remove("grid-cols-1", "md:grid-cols-2");
    splitContainer?.classList.add("grid-cols-1");

    toggleBtn?.classList.remove("bg-amber-800", "text-white");
    toggleBtn?.classList.add("bg-white", "text-slate-800");
    if (panelToggleBtn) {
      panelToggleBtn.classList.remove("bg-amber-950", "ring-1", "ring-amber-400");
    }

    // Obnovení historické vrstvy na hlavní mapě
    const curMapId = georefState.activeMap;
    if (overlayLayers[curMapId] && !map.hasLayer(overlayLayers[curMapId])) {
      overlayLayers[curMapId].addTo(map);
      updateCadastreOpacity(document.getElementById("cadastre-opacity-slider")?.value || 75);
    }

    setTimeout(() => {
      map.invalidateSize();
    }, 200);

    showGeorefToast("🗔 Zpět do režimu jedné mapy");
  }

  updateGcpStatusPill();
}

// Inicializace pravé historické mapy (Leaflet)
function initHistoricalSideMap() {
  const container = document.getElementById("map-hist");
  if (!container) return;

  mapHist = L.map("map-hist", {
    center: map.getCenter(),
    zoom: map.getZoom(),
    zoomControl: true,
    attributionControl: false
  });

  // Decentní neutrální podkladová vrstva pro pravé okno (aby mapa nevisela ve vzduchoprázdnu)
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    opacity: 0.25,
    maxZoom: 19
  }).addTo(mapHist);

  // Vrstva pro GCP markery na pravé mapě
  gcpHistMarkersLayer = L.layerGroup().addTo(mapHist);

  // Vrstva pro GCP markery na levé mapě
  if (!gcpRefMarkersLayer) {
    gcpRefMarkersLayer = L.layerGroup().addTo(map);
  }

  // Synchronizace pohybu obou map (obousměrná bez zacyklení)
  const syncMaps = (sourceMap, targetMap) => {
    if (isSyncingMaps) return;
    isSyncingMaps = true;
    targetMap.setView(sourceMap.getCenter(), sourceMap.getZoom(), { animate: false });
    isSyncingMaps = false;
  };

  map.on("move", () => {
    if (georefState.isSideBySide && mapHist) syncMaps(map, mapHist);
  });

  mapHist.on("move", () => {
    if (georefState.isSideBySide && map) syncMaps(mapHist, map);
  });

  // Obsluha kliknutí na historickou mapu (pro zaměření GCP bodu)
  mapHist.on("click", onMapHistClick);

  // Obsluha kliknutí na dnešní mapu (pokud uživatel zvolí vlastní referenční bod)
  map.on("click", onMapRefClick);

  updateHistoricalSideMapOverlay();
}

// Aktualizace historické mapové vrstvy v pravém okně
function updateHistoricalSideMapOverlay() {
  if (!mapHist) return;
  const mapId = georefState.activeMap;
  const meta = (typeof historicalMapsData !== "undefined")
    ? historicalMapsData.find(m => m.overlayKey === mapId || m.id === mapId)
    : null;
  const wmsMeta = (typeof wmsAerialLayerMeta !== "undefined") ? wmsAerialLayerMeta[mapId] : null;

  const badgeText = document.getElementById("right-map-badge-text");
  if (badgeText) {
    if (wmsMeta) {
      const lang = window.currentLang || "cs";
      const lbl = lang === "en" ? (wmsMeta.labelEn || wmsMeta.label) : (lang === "de" ? (wmsMeta.labelDe || wmsMeta.label) : wmsMeta.label);
      badgeText.textContent = lbl.replace(/^✈️\s*/, "");
    } else {
      badgeText.textContent = meta
        ? (meta.title.includes(String(meta.year)) ? meta.title : `${meta.title} (${meta.year})`)
        : mapId;
    }
  }

  if (mapHistOverlay) {
    mapHist.removeLayer(mapHistOverlay);
    mapHistOverlay = null;
  }

  if (wmsMeta) {
    mapHistOverlay = L.tileLayer.wms("https://geoportal.cuzk.gov.cz/geoserver/wms_ortofoto_archiv/wms", {
      layers: wmsMeta.wmsLayer,
      format: "image/png",
      transparent: true,
      version: "1.3.0",
      opacity: 1.0,
      maxZoom: 20
    }).addTo(mapHist);
  } else {
    const fallbackUrl = meta ? meta.imageFile : "";
    const fallbackBounds = computeCurrentBounds(mapId);
    mapHistOverlay = createWarpedOverlayLayer(mapId, {
      opacity: 1.0,
      fallbackUrl,
      fallbackBounds
    }).addTo(mapHist);

    if (isGeorefModified(georefState.layers[mapId])) {
      applyGeorefToLeafletLayer(mapHistOverlay, mapId);
    }
  }

  renderGcpMapMarkers();
}

// Změna výběru ve výběrovém boxu budov
function onGcpLandmarkSelectChange(val) {
  if (val === "custom") {
    showGeorefToast("ℹ️ Klikněte do levé mapy pro označení referenčního bodu.");
  }
}

// Zahájení zaměřování vybrané budovy
function startGcpPlacement() {
  const select = document.getElementById("gcp-landmark-select");
  const landmarkVal = select ? select.value : "cp29";

  let refLatLng = null;
  let landmarkName = "";

  if (landmarkVal === "custom") {
    georefState.gcp.mode = "awaiting_ref_click";
    map.getContainer().style.cursor = "crosshair";
    showGeorefToast("📍 Krok 1/2: Klikněte v LEVÉ (dnešní) mapě na hledanou budovu či křižovatku.");
    return;
  }

  // Najdeme budovu v housesData
  const house = (typeof housesData !== "undefined") ? housesData.find(h => h.id === landmarkVal) : null;
  if (house && house.location) {
    refLatLng = { lat: house.location.lat, lng: house.location.lng };
    landmarkName = `${house.isHeritage ? '🏛️ ' : ''}čp. ${house.number} (${house.localName || 'Dům'})`;
  } else {
    refLatLng = { lat: 49.90698, lng: 16.98959 };
    landmarkName = `Objekt ${landmarkVal}`;
  }

  georefState.gcp.currentRefPoint = {
    id: landmarkVal,
    name: landmarkName,
    ref: refLatLng
  };

  georefState.gcp.mode = "awaiting_hist_click";

  // Pokud není zapnutý Side-by-Side, zapneme ho
  if (!georefState.isSideBySide) {
    toggleSideBySideMode(true);
  }

  if (mapHist) {
    mapHist.getContainer().style.cursor = "crosshair";
  }
  map.getContainer().style.cursor = "";

  renderGcpMapMarkers();
  showGeorefToast(`📍 Krok 2/2: Nyní klikněte v PRAVÉ historické mapě na ${landmarkName}.`);
}

// Kliknutí do levé mapy (při vlastním referenčním bodu)
function onMapRefClick(e) {
  if (georefState.gcp.mode !== "awaiting_ref_click") return;

  georefState.gcp.currentRefPoint = {
    id: `custom_${Date.now()}`,
    name: `Vlastní bod [${e.latlng.lat.toFixed(4)}, ${e.latlng.lng.toFixed(4)}]`,
    ref: { lat: e.latlng.lat, lng: e.latlng.lng }
  };

  georefState.gcp.mode = "awaiting_hist_click";
  map.getContainer().style.cursor = "";

  if (!georefState.isSideBySide) {
    toggleSideBySideMode(true);
  }

  if (mapHist) {
    mapHist.getContainer().style.cursor = "crosshair";
  }

  renderGcpMapMarkers();
  showGeorefToast(`📍 Krok 2/2: Nyní klikněte na odpovídající místo v PRAVÉ historické mapě.`);
}

// Kliknutí do pravé historické mapy (dokončení spárování budovy)
function onMapHistClick(e) {
  if (georefState.gcp.mode !== "awaiting_hist_click" || !georefState.gcp.currentRefPoint) return;

  const current = georefState.gcp.currentRefPoint;
  const pointObj = {
    id: current.id,
    name: current.name,
    ref: current.ref,
    hist: { lat: e.latlng.lat, lng: e.latlng.lng }
  };

  // Pokud bod s tímto ID už existuje, nahradíme ho
  const existingIdx = georefState.gcp.points.findIndex(p => p.id === pointObj.id);
  if (existingIdx >= 0) {
    georefState.gcp.points[existingIdx] = pointObj;
  } else {
    georefState.gcp.points.push(pointObj);
  }

  georefState.gcp.currentRefPoint = null;
  georefState.gcp.mode = "idle";

  if (mapHist) mapHist.getContainer().style.cursor = "";
  if (map) map.getContainer().style.cursor = "";

  renderGcpMapMarkers();
  renderGcpUI();
  updateGcpStatusPill();

  showGeorefToast(`✅ Bod „${pointObj.name}“ byl úspěšně spárován! (Celkem: ${georefState.gcp.points.length})`);

  // Pokud máme 1 bod, automaticky nabídneme rychlé usazení posunu
  if (georefState.gcp.points.length === 1) {
    applyGcpCalibration();
  }
}

// Zrušení zaměřování
function cancelGcpPlacement() {
  georefState.gcp.mode = "idle";
  georefState.gcp.currentRefPoint = null;
  if (map) map.getContainer().style.cursor = "";
  if (mapHist) mapHist.getContainer().style.cursor = "";
  renderGcpMapMarkers();
  renderGcpUI();
}

// Vymazání všech GCP bodů
function clearGcpPoints() {
  georefState.gcp.points = [];
  georefState.gcp.currentRefPoint = null;
  georefState.gcp.mode = "idle";
  renderGcpMapMarkers();
  renderGcpUI();
  updateGcpStatusPill();
  showGeorefToast("🗑️ Všechny vlícovací body byly vymazány.");
}

// Odstranění jednoho konkrétního bodu
function removeGcpPoint(idx) {
  if (idx >= 0 && idx < georefState.gcp.points.length) {
    const removed = georefState.gcp.points.splice(idx, 1);
    renderGcpMapMarkers();
    renderGcpUI();
    updateGcpStatusPill();
    showGeorefToast(`🗑️ Bod „${removed[0].name}“ odstraněn.`);
  }
}

// Vykreslení značek GCP bodů na obou mapách
function renderGcpMapMarkers() {
  if (!gcpRefMarkersLayer) gcpRefMarkersLayer = L.layerGroup().addTo(map);
  gcpRefMarkersLayer.clearLayers();

  if (mapHist && !gcpHistMarkersLayer) gcpHistMarkersLayer = L.layerGroup().addTo(mapHist);
  if (gcpHistMarkersLayer) gcpHistMarkersLayer.clearLayers();

  // 1. Zobrazení dočasného referenčního bodu při zaměřování
  if (georefState.gcp.currentRefPoint && georefState.gcp.currentRefPoint.ref) {
    const p = georefState.gcp.currentRefPoint;
    const icon = L.divIcon({
      className: "gcp-marker-ref",
      html: `<span>🎯</span>`,
      iconSize: [32, 32],
      iconAnchor: [16, 16]
    });
    const m = L.marker([p.ref.lat, p.ref.lng], { icon })
      .bindTooltip(`<strong>${p.name}</strong><br><span class="text-sky-400 font-bold">Čeká na kliknutí v historické mapě...</span>`, { permanent: true, direction: "top" });
    gcpRefMarkersLayer.addLayer(m);
  }

  // 2. Všechny již spárované body
  georefState.gcp.points.forEach((pt, index) => {
    const num = index + 1;

    // Levá mapa (dnešní reference - modrý pin)
    const iconRef = L.divIcon({
      className: "gcp-marker-ref",
      html: `<span>#${num}</span>`,
      iconSize: [28, 28],
      iconAnchor: [14, 14]
    });
    const mRef = L.marker([pt.ref.lat, pt.ref.lng], { icon: iconRef })
      .bindTooltip(`<strong>Bod #${num}: ${pt.name}</strong><br>Dnešní poloha (Reference)`, { direction: "top" });
    gcpRefMarkersLayer.addLayer(mRef);

    // Pravá mapa (historická poloha - červený pin)
    if (gcpHistMarkersLayer && mapHist) {
      const iconHist = L.divIcon({
        className: "gcp-marker-hist",
        html: `<span>#${num}</span>`,
        iconSize: [28, 28],
        iconAnchor: [14, 14]
      });
      const mHist = L.marker([pt.hist.lat, pt.hist.lng], { icon: iconHist })
        .bindTooltip(`<strong>Bod #${num}: ${pt.name}</strong><br>Označená poloha na staré mapě`, { direction: "top" });
      gcpHistMarkersLayer.addLayer(mHist);
    }
  });
}

// Aktualizace UI panelu pro GCP body
function renderGcpUI() {
  const listEl = document.getElementById("gcp-points-list");
  const applyBtn = document.getElementById("gcp-apply-btn");
  if (!listEl) return;

  const points = georefState.gcp.points;
  if (applyBtn) {
    applyBtn.disabled = points.length === 0;
  }

  if (points.length === 0) {
    listEl.innerHTML = `
      <div class="text-slate-500 italic p-1.5 bg-white/70 rounded border border-amber-200/60 text-center">
        Zatím nezadány žádné body. Zvolte budovu a klikněte na <strong>Zaměřit</strong>.
      </div>
    `;
    return;
  }

  listEl.innerHTML = points.map((pt, idx) => `
    <div class="flex items-center justify-between p-1 bg-white rounded border border-amber-200 text-[10px]">
      <div class="truncate flex items-center gap-1">
        <span class="w-4 h-4 rounded-full bg-amber-800 text-white font-bold inline-flex items-center justify-center text-[9px] shrink-0">
          ${idx + 1}
        </span>
        <span class="font-bold text-slate-800 truncate" title="${pt.name}">${pt.name}</span>
      </div>
      <button onclick="removeGcpPoint(${idx})" class="text-red-600 hover:text-red-800 font-bold px-1 rounded hover:bg-red-50 cursor-pointer" title="Odstranit bod">
        ✕
      </button>
    </div>
  `).join("");
}

// Aktualizace pilulky počtu bodů v liště Side-by-Side
function updateGcpStatusPill() {
  const pill = document.getElementById("gcp-status-pill");
  if (pill) {
    pill.textContent = `📍 Body: ${georefState.gcp.points.length}`;
  }
}

// ==========================================================================
// ALGORITMUS VÝPOČTU GEOREFERENCOVÁNÍ Z IDENTICKÝCH BUDOV (GCP)
// ==========================================================================

function applyGcpCalibration() {
  const points = georefState.gcp.points;
  if (points.length === 0) {
    showGeorefToast("⚠️ Nejsou zadány žádné vlícovací body.");
    return;
  }

  const mapId = georefState.activeMap;
  const cur = georefState.layers[mapId];
  if (!cur) return;

  const allowRotation = document.getElementById("gcp-allow-rotation")?.checked ?? true;

  if (points.length === 1) {
    // 1 BOD: Přesný posun (překrytí budovy A na budovu A)
    const p = points[0];
    const dLat = p.ref.lat - p.hist.lat;
    const dLng = p.ref.lng - p.hist.lng;

    cur.deltaLat += dLat;
    cur.deltaLng += dLng;

    applyActiveGeorefTransform();
    updateHistoricalSideMapOverlay();
    updateGeorefUI();

    showGeorefToast(`🎯 Mapa posunuta přesně na ${p.name}!`);
    return;
  }

  // 2 A VÍCE BODŮ: Výpočet optimální rigidní podobnostní transformace (Posun + Měřítko + Rotace)
  const n = points.length;
  let sumHistLat = 0, sumHistLng = 0;
  let sumRefLat = 0, sumRefLng = 0;

  points.forEach(pt => {
    sumHistLat += pt.hist.lat;
    sumHistLng += pt.hist.lng;
    sumRefLat += pt.ref.lat;
    sumRefLng += pt.ref.lng;
  });

  const meanHistLat = sumHistLat / n;
  const meanHistLng = sumHistLng / n;
  const meanRefLat = sumRefLat / n;
  const meanRefLng = sumRefLng / n;

  // Převod na metrické souřadnice pro izotropní rotaci a měřítko
  const mPerLat = 111320.0;
  const mPerLng = 71500.0;

  let nom = 0;
  let denom = 0;
  let sumDRef = 0;
  let sumDHist = 0;

  for (let i = 0; i < n; i++) {
    const pt = points[i];
    const xHist = (pt.hist.lng - meanHistLng) * mPerLng;
    const yHist = (pt.hist.lat - meanHistLat) * mPerLat;
    const xRef = (pt.ref.lng - meanRefLng) * mPerLng;
    const yRef = (pt.ref.lat - meanRefLat) * mPerLat;

    nom += (xHist * yRef - yHist * xRef);
    denom += (xHist * xRef + yHist * yRef);

    sumDRef += Math.sqrt(xRef * xRef + yRef * yRef);
    sumDHist += Math.sqrt(xHist * xHist + yHist * yHist);
  }

  // Výpočet poměru měřítek
  let scaleFactor = 1.0;
  if (sumDHist > 0.1 && sumDRef > 0.1) {
    scaleFactor = sumDRef / sumDHist;
  }
  scaleFactor = Math.max(0.05, Math.min(10.0, scaleFactor));

  // Výpočet úhlu rotace (pokud je povoleno)
  let deltaThetaDeg = 0;
  if (allowRotation && (denom !== 0 || nom !== 0)) {
    const deltaThetaRad = Math.atan2(nom, denom);
    deltaThetaDeg = (deltaThetaRad * 180.0) / Math.PI;
    // Omezíme rotaci na realistické maximum pro staré mapy
    deltaThetaDeg = Math.max(-25.0, Math.min(25.0, deltaThetaDeg));
  }

  // Aplikace nového měřítka a rotace na aktuální vrstvu
  cur.scale = parseFloat((cur.scale * scaleFactor).toFixed(4));
  if (allowRotation) {
    cur.rotation = parseFloat(((cur.rotation || 0) + deltaThetaDeg).toFixed(2));
  }

  // Posun: střed historických bodů se přemístí na střed referenčních bodů
  cur.deltaLat += (meanRefLat - meanHistLat);
  cur.deltaLng += (meanRefLng - meanHistLng);

  applyActiveGeorefTransform();
  updateHistoricalSideMapOverlay();
  updateGeorefUI();

  showGeorefToast(`⚡ Kalibrace z ${n} bodů aplikována! (Měřítko: ${(cur.scale * 100).toFixed(1)}%, Rotace: ${cur.rotation || 0}°)`);
}

function closeGeorefHelpModal() {
  const modal = document.getElementById("georef-help-modal");
  if (modal) modal.classList.add("hidden");
}

// Otevření / zavření modálu licencí a citací
function openLicenceModal() {
  const modal = document.getElementById("licence-modal");
  if (modal) modal.classList.remove("hidden");
}

function closeLicenceModal() {
  const modal = document.getElementById("licence-modal");
  if (modal) modal.classList.add("hidden");
}

// ==========================================================================
// ZPĚTNÁ VAZBA & GITHUB ISSUES INTEGRACE (ve stylu ELIXIR RDMkit)
// ==========================================================================

function openFeedbackIssue(customContext = {}) {
  const repoUrl = "https://github.com/KarelBerka/Dlouhomilov";
  const pageType = document.body?.dataset?.page || "";

  // 1. Zjištění viditelné sekce a pozice scrollu / stránky
  let currentSection = "Úvod & Aktuality";
  let currentSectionAnchor = "";
  const scrollY = window.scrollY || window.pageYOffset;

  const secAktuality = document.getElementById("aktuality-section");
  const secReferences = document.getElementById("references-page-section");
  const secPrace = document.getElementById("prace-ke-stazeni");
  const secDemografie = document.getElementById("demografie-section");
  const secPruvodce = document.getElementById("badatelsky-pruvodce");
  const secObyvatele = document.getElementById("obyvatele-section");
  const secAtlas = document.getElementById("atlas-map-section");
  const secMapa = document.getElementById("mapa-section");
  const secPribeh = document.getElementById("pribeh-section");

  if (pageType === "references" || secReferences) {
    if (secPruvodce && !secPruvodce.classList.contains("hidden") && scrollY >= secPruvodce.offsetTop - 250) {
      currentSection = "Archivní průvodce & Metodika";
      currentSectionAnchor = "#pruvodce";
    } else if (secPrace && !secPrace.classList.contains("hidden") && (currentReferenceTab === "prace" || scrollY >= secPrace.offsetTop - 250)) {
      currentSection = "Práce a studie ke stažení";
      currentSectionAnchor = "#prace";
    } else {
      currentSection = "Reference, archivní fondy & literatura";
      currentSectionAnchor = "";
    }
  } else if (pageType === "demography" || (secDemografie && !secObyvatele && !secMapa)) {
    currentSection = "Demografická & majetková analýza (1857–2026)";
    currentSectionAnchor = currentDemographyTab ? `#${currentDemographyTab}` : "";
  } else if (pageType === "inhabitants" || (secObyvatele && !secMapa)) {
    currentSection = "Obyvatelé & Rodopis";
    currentSectionAnchor = "";
  } else if (pageType === "story" || (secPribeh && !secMapa)) {
    currentSection = "Příběh Dlouhomilova, Medelského a Benkova";
    currentSectionAnchor = "";
  } else if (pageType === "home" || secAktuality) {
    currentSection = (secAktuality && scrollY >= secAktuality.offsetTop - 250) ? "Aktuality výzkumu" : "Hlavní rozcestník";
    currentSectionAnchor = (secAktuality && scrollY >= secAktuality.offsetTop - 250) ? "#aktuality-section" : "";
  } else if (secAtlas && !secAtlas.classList.contains("hidden") && (!secMapa || scrollY >= secAtlas.offsetTop - 300)) {
    currentSection = "Atlas historických map (1716–2026)";
    currentSectionAnchor = "#atlas";
  } else if (secMapa) {
    currentSection = "Interaktivní mapa & Stavení";
    currentSectionAnchor = "#mapa-section";
  }

  // 2. Extrakce detailního kontextu
  let contextTitle = "";
  let contextDetails = [];

  if (customContext.type === "house" && customContext.id) {
    const house = typeof housesData !== "undefined" ? housesData.find(h => h.id === customContext.id) : null;
    const hNumber = house ? house.number : customContext.id;
    const hName = house ? house.localName : `Stavení ${customContext.id}`;
    contextTitle = `Stavení čp. ${hNumber}`;
    contextDetails.push(`- **Dům / Usedlost:** ${hName} (čp. ${hNumber})`);
    if (house && house.location) {
      contextDetails.push(`- **Katastrální parcela (1834):** ${house.location.cadastralParcel || '-'}`);
      contextDetails.push(`- **Souřadnice objektu:** \`${house.location.lat}, ${house.location.lng}\``);
    }
  } else if (customContext.type === "person" && customContext.id) {
    const person = typeof peopleData !== "undefined" ? peopleData.find(p => p.id === customContext.id) : null;
    const pName = person ? person.name : customContext.id;
    contextTitle = `Osoba: ${pName}`;
    contextDetails.push(`- **Biografický profil:** ${pName} (${person ? person.lifeSpan : ''})`);
    if (person && person.houseNumber) contextDetails.push(`- **Přiřazený dům:** čp. ${person.houseNumber}`);
    if (person && person.role) contextDetails.push(`- **Role / Povolání:** ${person.role}`);
  } else if (customContext.type === "archive" || (currentArchiveDoc && document.getElementById("archive-viewer-modal") && !document.getElementById("archive-viewer-modal").classList.contains("hidden"))) {
    const docTitle = customContext.title || currentArchiveDoc?.title || document.getElementById("viewer-doc-title")?.textContent?.trim() || "Archivní scan";
    const docSource = customContext.source || currentArchiveDoc?.sourceInfo || document.getElementById("viewer-doc-source")?.textContent?.trim() || "";
    const docFile = customContext.file || currentArchiveDoc?.localPath || document.getElementById("viewer-file-path")?.textContent?.trim() || "";
    contextTitle = `Dokument: ${docTitle}`;
    contextDetails.push(`- **Archivní dokument:** ${docTitle}`);
    if (docSource) contextDetails.push(`- **Pramen:** ${docSource}`);
    if (docFile) contextDetails.push(`- **Soubor:** \`${docFile}\``);
  } else if (customContext.type === "map" && customContext.id) {
    const mapObj = typeof historicalMapsData !== "undefined" ? historicalMapsData.find(m => m.id === customContext.id) : null;
    const mTitle = mapObj ? mapObj.title : customContext.id;
    contextTitle = `Mapa: ${mTitle}`;
    contextDetails.push(`- **Historická mapa:** ${mTitle} (${mapObj ? mapObj.year : ''})`);
    if (mapObj && mapObj.archive) contextDetails.push(`- **Fond / Sbírka:** ${mapObj.archive}`);
  } else if (customContext.type === "section" && customContext.name) {
    contextTitle = `Sekce: ${customContext.name}`;
  } else {
    // Automatická detekce: je otevřený person modal?
    const personModal = document.getElementById("person-detail-modal");
    if (personModal && !personModal.classList.contains("hidden") && currentPersonId) {
      const person = typeof peopleData !== "undefined" ? peopleData.find(p => p.id === currentPersonId) : null;
      if (person) {
        contextTitle = `Osoba: ${person.name}`;
        contextDetails.push(`- **Aktivní profil osoby:** ${person.name} (${person.lifeSpan || ''}, čp. ${person.houseNumber || ''})`);
      }
    } else if (currentHouseId && currentSectionAnchor === "#mapa-section") {
      const house = typeof housesData !== "undefined" ? housesData.find(h => h.id === currentHouseId) : null;
      if (house) {
        contextTitle = `Stavení čp. ${house.number}`;
        contextDetails.push(`- **Aktivně vybrané stavení:** ${house.localName || 'Usedlost'} (čp. ${house.number})`);
      }
    }
  }

  // 3. Informace o Leaflet mapě (pokud je dostupná)
  if (typeof map !== "undefined" && map && map.getCenter) {
    try {
      const center = map.getCenter();
      const zoom = map.getZoom();
      contextDetails.push(`- **Pozice na mapě:** \`lat: ${center.lat.toFixed(6)}, lng: ${center.lng.toFixed(6)}\` (zoom ${zoom})`);

      const histSelect = document.getElementById("historical-map-select");
      if (histSelect && histSelect.selectedIndex >= 0) {
        contextDetails.push(`- **Aktivní historická vrstva:** ${histSelect.options[histSelect.selectedIndex].text}`);
      }
    } catch (e) {}
  }

  // Sestavení URL a těla issue
  const pageUrl = window.location.origin + window.location.pathname + currentSectionAnchor;
  const issueTitle = contextTitle ? `[Zpětná vazba]: ${contextTitle}` : `[Zpětná vazba]: ${currentSection}`;

  const issueBody = `### 📝 Popis připomínky / návrhu
<!-- Stručně popište chybu, nepřesnost v přepisu zápisu, chybějící stavení/osobu nebo návrh na vylepšení -->


### 📚 Doporučený pramen / odkaz (nepovinné)
<!-- Uveďte odkaz na matriku ZAO, stabilní katastr ČÚZK, evidenční list NPÚ či literaturu pro ověření -->


---
### 📍 Lokalizace a kontext v aplikaci (vygenerováno automaticky)
- **Aplikace:** [Dlouhomilov & Benkov](${pageUrl})
- **Aktivní sekce:** ${currentSection}
${contextDetails.length > 0 ? contextDetails.join("\n") : "- **Kontext:** Hlavní stránka"}
- **URL stránky:** ${pageUrl}
- **Prohlížeč / Zařízení:** \`${navigator.userAgent}\`
- **Čas hlášení:** ${new Date().toLocaleString("cs-CZ")}
`;

  const finalUrl = `${repoUrl}/issues/new?title=${encodeURIComponent(issueTitle)}&body=${encodeURIComponent(issueBody)}`;
  window.open(finalUrl, "_blank", "noopener,noreferrer");
}

// ==========================================================================
// 11. PŘÍBĚH DLOUHOMILOVA, MEDELSKÉHO A BENKOVA & ZAJÍMAVOSTI Z PRAMENŮ
// ==========================================================================

let currentStoryChapterIndex = 0;
let showAllStoryChapters = false;

function renderStorySection() {
  if (typeof storyData === "undefined") return;

  // 1. Statistiky
  const statsGrid = document.getElementById("story-stats-grid");
  if (statsGrid && Array.isArray(storyData.stats)) {
    statsGrid.innerHTML = storyData.stats.map(st => `
      <div class="p-3.5 bg-white rounded-xl border border-amber-200 shadow-2xs flex flex-col justify-between">
        <span class="text-[11px] font-bold uppercase tracking-wider text-amber-800">${st.label}</span>
        <span class="text-lg sm:text-xl font-extrabold font-heading text-slate-900 mt-0.5">${st.value}</span>
        <span class="text-[11px] text-slate-500 mt-0.5">${st.detail}</span>
      </div>
    `).join("");
  }

  // 2. Obsah (TOC) & 3. Kapitoly příběhu
  renderStoryTOC();
  renderStoryChapters();

  // 4. Zajímavosti z pramenů („Fun facts“) – zvětšené čitelné písmo
  const factsContainer = document.getElementById("story-facts-container");
  if (factsContainer && Array.isArray(storyData.funFacts)) {
    factsContainer.innerHTML = storyData.funFacts.map((fact, idx) => `
      <div class="p-5 sm:p-6 bg-white rounded-2xl border border-amber-200 shadow-2xs flex flex-col justify-between space-y-3.5 hover:border-amber-400 transition-all">
        <div class="space-y-2.5">
          <div class="flex items-center justify-between gap-2">
            <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 text-xs font-bold bg-amber-100 text-amber-950 rounded-full border border-amber-300">
              <span>${fact.icon}</span>
              <span>${fact.tag}</span>
            </span>
            <span class="text-xs font-mono font-bold text-slate-400">#${idx + 1}</span>
          </div>
          <h4 class="text-base sm:text-lg font-bold font-heading text-slate-900 leading-snug">
            ${fact.title}
          </h4>
          <p class="text-sm sm:text-base text-slate-800 font-serif-body leading-relaxed">
            ${fact.text}
          </p>
        </div>
        ${fact.action ? `
          <div class="pt-3 border-t border-amber-100 flex justify-end">
            <button type="button" onclick="${fact.action}" class="px-3.5 py-1.5 text-xs sm:text-sm font-bold bg-amber-800 hover:bg-amber-900 text-amber-50 rounded-lg transition-colors cursor-pointer">
              ${fact.actionLabel || "Zobrazit detail"} →
            </button>
          </div>
        ` : ""}
      </div>
    `).join("");
  }

  // 5. Komiksová kronika údolí (výchozí Strana I. pro lepší přehlednost)
  renderComicSection(1);
}

function renderStoryTOC() {
  const tocContainer = document.getElementById("story-toc-container");
  if (!tocContainer || typeof storyData === "undefined" || !Array.isArray(storyData.chapters)) return;

  const totalCh = storyData.chapters.length;
  const lastRoman = (storyData.chapters[totalCh - 1]?.number || "XI.").replace(/\.$/, "");

  tocContainer.innerHTML = `
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3 pb-2.5 border-b border-amber-100">
      <div class="flex items-center gap-2 flex-wrap">
        <span class="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-amber-950 flex items-center gap-1.5">
          <span>🧭</span> Výběr kapitoly příběhu (I.–${lastRoman}.):
        </span>
        <span class="text-xs text-slate-500">
          ${showAllStoryChapters ? `Zobrazeno všech ${totalCh} kapitol pod sebou` : `Čtení po kapitolách (aktivní Kapitola ${storyData.chapters[currentStoryChapterIndex]?.number || "I"})`}
        </span>
      </div>
      <div class="flex flex-wrap items-center gap-2">
        <button type="button" onclick="toggleAllStoryChapters()" class="px-3 py-1.5 text-xs font-bold rounded-lg border transition-colors cursor-pointer flex items-center gap-1.5 ${showAllStoryChapters ? 'bg-amber-800 text-white border-amber-900' : 'bg-amber-100 hover:bg-amber-200 text-amber-950 border-amber-300'}">
          <span>${showAllStoryChapters ? '📑' : '📖'}</span>
          <span>${showAllStoryChapters ? 'Přepnout na čtečku po 1 kapitole' : `Rozbalit všech ${totalCh} kapitol pod sebou`}</span>
        </button>
        <a href="docs/pribeh_dlouhomilova.md" target="_blank" class="px-2.5 py-1.5 text-xs font-bold text-amber-800 hover:text-amber-950 bg-amber-50 hover:bg-amber-100 rounded-lg border border-amber-200">
          📄 Dokument .md ↗
        </a>
      </div>
    </div>
    <div class="flex sm:grid sm:grid-cols-4 lg:grid-cols-6 overflow-x-auto no-scrollbar gap-2 pb-1 snap-x">
      ${storyData.chapters.map((ch, idx) => {
        const isActive = !showAllStoryChapters && idx === currentStoryChapterIndex;
        return `
          <button type="button" onclick="selectStoryChapter(${idx})"
            class="min-w-[165px] sm:min-w-0 shrink-0 snap-start text-left p-2.5 rounded-xl border transition-all flex flex-col justify-between cursor-pointer ${
              isActive
                ? 'bg-amber-800 text-white border-amber-950 shadow-sm ring-2 ring-amber-400'
                : 'bg-amber-50/70 hover:bg-amber-100 text-slate-800 border-amber-200/80'
            }">
            <div class="flex items-center justify-between gap-1 text-[10px] font-mono font-bold ${isActive ? 'text-amber-200' : 'text-amber-800'}">
              <span>Kap. ${ch.number}</span>
              <span class="px-1.5 py-0.2 rounded ${isActive ? 'bg-amber-950/60 text-amber-100' : 'bg-amber-200/70 text-amber-950'}">${ch.era}</span>
            </div>
            <span class="text-xs font-bold mt-1 line-clamp-2 leading-snug ${isActive ? 'text-white' : 'text-slate-800'}">
              ${ch.title}
            </span>
          </button>
        `;
      }).join("")}
    </div>
  `;
}

function renderStoryChapters() {
  const chaptersContainer = document.getElementById("story-chapters-container");
  if (!chaptersContainer || typeof storyData === "undefined" || !Array.isArray(storyData.chapters)) return;

  const totalCh = storyData.chapters.length;
  const lastRoman = (storyData.chapters[totalCh - 1]?.number || "XI.").replace(/\.$/, "");
  const totalFacts = Array.isArray(storyData.funFacts) ? storyData.funFacts.length : 12;

  const chaptersToRender = showAllStoryChapters
    ? storyData.chapters.map((ch, idx) => ({ ch, idx }))
    : [{ ch: storyData.chapters[currentStoryChapterIndex] || storyData.chapters[0], idx: currentStoryChapterIndex }];

  chaptersContainer.innerHTML = chaptersToRender.map(({ ch, idx }) => {
    const prevCh = idx > 0 ? storyData.chapters[idx - 1] : null;
    const nextCh = idx < storyData.chapters.length - 1 ? storyData.chapters[idx + 1] : null;

    return `
      <article id="story-${ch.id}" class="p-4 sm:p-8 bg-white rounded-2xl border border-amber-200 shadow-sm space-y-5 transition-all">
        <div class="flex flex-wrap items-center justify-between gap-2 border-b border-amber-100 pb-3.5">
          <div class="flex flex-wrap items-center gap-2">
            <span class="px-3 py-1 text-xs sm:text-sm font-extrabold font-heading bg-amber-900 text-amber-100 rounded-lg">
              Kapitola ${ch.number} / ${lastRoman}
            </span>
            <span class="px-3 py-1 text-xs sm:text-sm font-mono font-bold bg-amber-100 text-amber-900 rounded-lg border border-amber-300">
              ${ch.era}
            </span>
            <span class="px-3 py-1 text-xs font-semibold bg-stone-100 text-stone-700 rounded-lg border border-stone-200">
              ${ch.badge}
            </span>
          </div>
          ${!showAllStoryChapters ? `
            <span class="text-xs text-slate-400 font-mono">Čtečka kapitol (${idx + 1} z ${storyData.chapters.length})</span>
          ` : ''}
        </div>

        <div class="max-w-4xl">
          <h3 class="text-xl sm:text-2xl font-extrabold font-heading text-slate-900 leading-snug">
            ${ch.title}
          </h3>
          <p class="text-sm sm:text-base text-amber-900 font-semibold mt-1.5 italic leading-relaxed">
            ${ch.summary}
          </p>
        </div>

        ${ch.image && ch.secondaryImage ? `
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-5xl">
            <figure class="rounded-2xl overflow-hidden border-2 border-amber-200/90 bg-amber-50/50 shadow-sm group flex flex-col justify-between">
              <div class="relative overflow-hidden cursor-pointer" onclick="openArchiveViewer('${ch.image}', '${ch.number} ${ch.title.replace(/'/g, "\\'")}', '${(ch.imageCaption || ch.summary).replace(/'/g, "\\'")}')">
                <img src="${ch.image}" alt="${ch.title}" loading="lazy" class="w-full h-auto object-cover aspect-[4/3] transition-transform duration-300 group-hover:scale-[1.02]">
                <span class="absolute bottom-2.5 right-2.5 px-2.5 py-1 rounded-lg bg-stone-900/80 text-amber-100 text-[11px] font-bold backdrop-blur-xs shadow-sm opacity-90 group-hover:opacity-100 transition-opacity">
                  🔍 Zvětšit ilustraci
                </span>
              </div>
              ${ch.imageCaption ? `
                <figcaption class="px-3.5 py-2 text-xs text-amber-950/80 font-medium border-t border-amber-200/70 bg-amber-50/70 flex items-center gap-1.5">
                  <span>🎨</span><span>${ch.imageCaption}</span>
                </figcaption>
              ` : ""}
            </figure>
            <figure class="rounded-2xl overflow-hidden border-2 border-amber-200/90 bg-amber-50/50 shadow-sm group flex flex-col justify-between">
              <div class="relative overflow-hidden cursor-pointer" onclick="openArchiveViewer('${ch.secondaryImage}', '${ch.number} Směry středověké kolonizace podhůří', '${(ch.secondaryImageCaption || ch.summary).replace(/'/g, "\\'")}')">
                <img src="${ch.secondaryImage}" alt="Komiksová mapa středověkého osídlování okolí Dlouhomilova" loading="lazy" class="w-full h-auto object-cover aspect-[4/3] transition-transform duration-300 group-hover:scale-[1.02]">
                <span class="absolute bottom-2.5 right-2.5 px-2.5 py-1 rounded-lg bg-stone-900/80 text-amber-100 text-[11px] font-bold backdrop-blur-xs shadow-sm opacity-90 group-hover:opacity-100 transition-opacity">
                  🔍 Zvětšit mapu
                </span>
              </div>
              ${ch.secondaryImageCaption ? `
                <figcaption class="px-3.5 py-2 text-xs text-amber-950/80 font-medium border-t border-amber-200/70 bg-amber-50/70 flex items-center gap-1.5">
                  <span>🧭</span><span>${ch.secondaryImageCaption}</span>
                </figcaption>
              ` : ""}
            </figure>
          </div>
        ` : ch.image ? `
          <figure class="max-w-3xl rounded-2xl overflow-hidden border-2 border-amber-200/90 bg-amber-50/50 shadow-sm group">
            <div class="relative overflow-hidden cursor-pointer" onclick="openArchiveViewer('${ch.image}', '${ch.number} ${ch.title.replace(/'/g, "\\'")}', '${(ch.imageCaption || ch.summary).replace(/'/g, "\\'")}')">
              <img src="${ch.image}" alt="${ch.title}" loading="lazy" class="w-full h-auto object-cover aspect-[4/3] transition-transform duration-300 group-hover:scale-[1.02]">
              <span class="absolute bottom-2.5 right-2.5 px-2.5 py-1 rounded-lg bg-stone-900/80 text-amber-100 text-[11px] font-bold backdrop-blur-xs shadow-sm opacity-90 group-hover:opacity-100 transition-opacity">
                🔍 Zvětšit ilustraci
              </span>
            </div>
            ${ch.imageCaption ? `
              <figcaption class="px-3.5 py-2 text-xs text-amber-950/80 font-medium border-t border-amber-200/70 bg-amber-50/70 flex items-center gap-1.5">
                <span>🎨</span><span>${ch.imageCaption}</span>
              </figcaption>
            ` : ""}
          </figure>
        ` : ""}

        <div class="space-y-4 text-base sm:text-[17px] text-slate-800 font-serif-body leading-relaxed max-w-4xl">
          ${ch.paragraphs.map(p => (/^\s*<(div|figure)\b/i.test(p) ? p : `<p>${p}</p>`)).join("")}
        </div>

        ${Array.isArray(ch.links) && ch.links.length > 0 ? `
          <div class="pt-4 border-t border-amber-100 flex flex-wrap items-center gap-2">
            <span class="text-xs font-bold text-slate-500 uppercase tracking-wider mr-1">Související v aplikaci:</span>
            ${ch.links.map(lnk => `
              <button type="button" onclick="${lnk.action}" class="px-3 py-1.5 text-xs sm:text-sm font-bold bg-amber-50 hover:bg-amber-200 text-amber-950 rounded-xl border border-amber-300 transition-colors cursor-pointer shadow-2xs">
                ${lnk.label}
              </button>
            `).join("")}
          </div>
        ` : ""}

        ${!showAllStoryChapters ? `
          <div class="pt-4 border-t-2 border-amber-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              ${prevCh ? `
                <button type="button" onclick="selectStoryChapter(${idx - 1}, true)" class="px-4 py-2 text-xs sm:text-sm font-bold bg-stone-100 hover:bg-amber-100 text-slate-800 rounded-xl border border-stone-300 transition-colors cursor-pointer flex items-center gap-1.5">
                  <span>←</span> <span>Předchozí: ${prevCh.number}. ${prevCh.title}</span>
                </button>
              ` : `<span></span>`}
            </div>
            <div class="flex flex-wrap items-center gap-2">
              <button type="button" onclick="toggleAllStoryChapters()" class="px-3 py-2 text-xs font-semibold text-amber-900 hover:bg-amber-50 rounded-xl border border-amber-200 cursor-pointer">
                📖 Zobrazit všech ${totalCh} kapitol
              </button>
              ${nextCh ? `
                <button type="button" onclick="selectStoryChapter(${idx + 1}, true)" class="px-4 py-2 text-xs sm:text-sm font-extrabold bg-amber-800 hover:bg-amber-900 text-amber-50 rounded-xl shadow-sm transition-colors cursor-pointer flex items-center gap-1.5">
                  <span>Další kapitola: ${nextCh.number}. ${nextCh.title}</span> <span>→</span>
                </button>
              ` : `
                <button type="button" onclick="switchStoryTab('facts')" class="px-4 py-2 text-xs sm:text-sm font-extrabold bg-amber-800 hover:bg-amber-900 text-amber-50 rounded-xl shadow-sm transition-colors cursor-pointer flex items-center gap-1.5">
                  <span>✨ Přejít na Zajímavosti z matrik (${totalFacts})</span> <span>→</span>
                </button>
              `}
            </div>
          </div>
        ` : ""}
      </article>
    `;
  }).join("");
}

function selectStoryChapter(index, scrollToReader = false) {
  if (typeof storyData === "undefined" || !Array.isArray(storyData.chapters)) return;
  currentStoryChapterIndex = Math.max(0, Math.min(index, storyData.chapters.length - 1));
  if (showAllStoryChapters) {
    const ch = storyData.chapters[currentStoryChapterIndex];
    if (ch) {
      document.getElementById(`story-${ch.id}`)?.scrollIntoView({ behavior: "smooth" });
    }
    return;
  }
  renderStoryTOC();
  renderStoryChapters();
  if (scrollToReader) {
    document.getElementById("story-chapters-wrapper")?.scrollIntoView({ behavior: "smooth" });
  }
}

function toggleAllStoryChapters() {
  showAllStoryChapters = !showAllStoryChapters;
  renderStoryTOC();
  renderStoryChapters();
}

function renderComicSection(pageFilter = "all") {
  if (typeof comicData === "undefined" || !Array.isArray(comicData.pages)) return;
  const container = document.getElementById("story-comic-container");
  if (!container) return;

  const pagesToRender = pageFilter === "all"
    ? comicData.pages
    : pageFilter === "census"
      ? comicData.pages.filter(p => p.category === "census")
      : comicData.pages.filter(p => String(p.pageNumber) === String(pageFilter));

  container.innerHTML = pagesToRender.map(page => `
    <div class="comic-page-sheet space-y-5" id="comic-page-${page.pageNumber}">
      <!-- Záhlaví komiksové strany -->
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b-2 border-amber-900/30 pb-3">
        <div>
          <div class="flex flex-wrap items-center gap-2">
            <span class="px-2.5 py-0.5 text-xs font-extrabold font-heading bg-amber-950 text-amber-100 rounded-md">
              STRANA ${page.roman}
            </span>
            <span class="px-2.5 py-0.5 text-xs font-mono font-bold bg-amber-200/80 text-amber-950 rounded-md border border-amber-400">
              Období ${page.era}
            </span>
          </div>
          <h4 class="text-lg sm:text-xl font-extrabold font-heading text-amber-950 mt-1">
            ${page.title}
          </h4>
          <p class="text-xs text-slate-700 font-serif-body italic">
            ${page.subtitle}
          </p>
        </div>
        <div class="text-right hidden sm:block">
          <span class="text-[11px] font-mono uppercase tracking-widest text-amber-900/70 font-bold">
            Kronika Dlouhomilova • List ${page.pageNumber}/${comicData.pages.length}
          </span>
        </div>
      </div>

      <!-- Mřížka komiksových panelů na straně -->
      <div class="grid grid-cols-1 ${page.panels.length === 2 ? 'lg:grid-cols-2' : 'lg:grid-cols-3'} gap-5">
        ${page.panels.map(panel => {
          const safeTitle = (panel.title || "").replace(/'/g, "\\'");
          const safeNarrator = (panel.narrator || "").replace(/'/g, "\\'");
          const bubbleCountClass = Array.isArray(panel.bubbles) && panel.bubbles.length > 1 ? "two-bubbles" : "";
          return `
            <article class="comic-panel-card" id="${panel.id}">
              <div>
                <!-- Horní lišta panelu s číslem a datací -->
                <div class="bg-stone-900 text-amber-50 px-3.5 py-2 flex items-center justify-between gap-2 border-b-2 border-stone-950">
                  <div class="flex items-center gap-2 min-w-0">
                    <span class="w-6 h-6 rounded-full bg-amber-500 text-stone-950 font-extrabold text-xs flex items-center justify-center shrink-0 shadow-xs">
                      ${panel.number}
                    </span>
                    <h5 class="text-xs sm:text-sm font-extrabold font-heading truncate text-amber-100" title="${panel.title}">
                      ${panel.title}
                    </h5>
                  </div>
                  <span class="px-2 py-0.5 text-[11px] font-mono font-extrabold bg-amber-800 text-amber-100 rounded border border-amber-600 shrink-0">
                    ${panel.year}
                  </span>
                </div>

                <!-- Vypravěčský pergamenový pás -->
                <div class="comic-narrator-box">
                  <div class="text-[10px] font-mono uppercase tracking-wider font-extrabold text-amber-900 mb-0.5 flex items-center gap-1">
                    <span>📍</span> <span>${panel.location}</span>
                  </div>
                  <p>${panel.narrator}</p>
                </div>

                <!-- Samotná ilustrace panelu (klikací pro Lightbox) -->
                <div class="comic-artwork-stage group cursor-pointer"
                     onclick="openArchiveViewer('${panel.image}', 'Obraz ${panel.number}: ${safeTitle} (${panel.year})', '${safeNarrator}')">
                  <img src="${panel.image}" alt="Komiksový panel ${panel.number}: ${panel.title}" loading="lazy">
                  <div class="absolute top-2.5 right-2.5 px-2 py-1 rounded-md bg-stone-950/75 text-amber-100 text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none comic-no-print">
                    🔍 Zvětšit obraz
                  </div>
                </div>

                <!-- Dialogové bubliny (HTML/CSS vrstva s českou diakritikou) -->
                ${Array.isArray(panel.bubbles) && panel.bubbles.length > 0 ? `
                  <div class="comic-bubbles-layer ${bubbleCountClass}">
                    ${panel.bubbles.map((b, bIdx) => `
                      <div class="comic-speech-bubble ${bIdx % 2 === 1 ? 'bubble-right' : 'bubble-left'}">
                        <span class="comic-speaker-tag">💬 ${b.speaker}</span>
                        <p class="font-medium italic">„${b.text}“</p>
                      </div>
                    `).join("")}
                  </div>
                ` : ""}
              </div>

              <!-- Patička panelu: pramen a interaktivní prokliky -->
              <div class="p-3 bg-stone-100 border-t-2 border-stone-800 space-y-2">
                <div class="text-[10px] text-stone-600 leading-snug">
                  📜 <strong>Pramen:</strong> ${panel.sourceNote}
                </div>
                ${Array.isArray(panel.actions) && panel.actions.length > 0 ? `
                  <div class="flex flex-wrap items-center gap-1.5 pt-1 comic-no-print">
                    ${panel.actions.map(act => `
                      <button type="button" onclick="${act.onclick}" class="px-2.5 py-1 text-[11px] font-bold bg-amber-100 hover:bg-amber-300 text-amber-950 rounded-lg border border-amber-400 transition-colors cursor-pointer shadow-2xs">
                        ${act.label}
                      </button>
                    `).join("")}
                  </div>
                ` : ""}
              </div>
            </article>
          `;
        }).join("")}
      </div>

      ${pageFilter !== "all" ? `
        <div class="pt-4 border-t border-amber-300/80 flex flex-wrap items-center justify-between gap-3 comic-no-print">
          <div>
            ${page.pageNumber > 1 ? `
              <button type="button" onclick="filterComicPage(${page.pageNumber - 1})" class="px-4 py-2 text-xs sm:text-sm font-bold bg-white hover:bg-amber-100 text-amber-950 rounded-xl border border-amber-300 shadow-2xs cursor-pointer">
                ← Předchozí strana (${page.pageNumber - 1}/${comicData.pages.length})
              </button>
            ` : `<span></span>`}
          </div>
          <div class="flex flex-wrap items-center gap-2">
            <button type="button" onclick="filterComicPage('all')" class="px-3 py-2 text-xs font-semibold text-amber-900 hover:bg-amber-100 rounded-xl border border-amber-300 cursor-pointer">
              📖 Zobrazit všechny strany (I.–VIII.)
            </button>
            ${page.pageNumber < comicData.pages.length ? `
              <button type="button" onclick="filterComicPage(${page.pageNumber + 1})" class="px-4 py-2 text-xs sm:text-sm font-extrabold bg-amber-800 hover:bg-amber-900 text-white rounded-xl shadow-xs cursor-pointer">
                Další strana komiksu (${page.pageNumber + 1}/${comicData.pages.length}) →
              </button>
            ` : ``}
          </div>
        </div>
      ` : ""}
    </div>
  `).join("");
}

function filterComicPage(pageFilter) {
  renderComicSection(pageFilter);
  const btns = document.querySelectorAll("#comic-page-filter-btns .comic-page-btn");
  btns.forEach(btn => {
    const val = btn.getAttribute("data-comic-page");
    if (String(val) === String(pageFilter)) {
      btn.className = "comic-page-btn px-2.5 py-1 text-xs font-extrabold rounded-lg bg-amber-800 text-white transition-all cursor-pointer";
    } else {
      btn.className = "comic-page-btn px-2.5 py-1 text-xs font-bold rounded-lg bg-amber-50 hover:bg-amber-100 text-amber-950 transition-all cursor-pointer";
    }
  });
}

function printComicBrochure() {
  filterComicPage("all");
  switchStoryTab("comic");
  document.body.classList.add("printing-comic");
  setTimeout(() => {
    window.print();
    setTimeout(() => {
      document.body.classList.remove("printing-comic");
    }, 500);
  }, 200);
}

function switchStoryTab(mode) {
  const comicWrapper = document.getElementById("story-comic-wrapper");
  const chWrapper = document.getElementById("story-chapters-wrapper");
  const tocWrapper = document.getElementById("story-toc-container");
  const factsWrapper = document.getElementById("story-facts-wrapper");

  if (chWrapper && factsWrapper) {
    if (mode === "comic") {
      if (comicWrapper) comicWrapper.classList.remove("hidden");
      chWrapper.classList.add("hidden");
      if (tocWrapper) tocWrapper.classList.add("hidden");
      factsWrapper.classList.add("hidden");
    } else if (mode === "chapters") {
      if (comicWrapper) comicWrapper.classList.add("hidden");
      chWrapper.classList.remove("hidden");
      if (tocWrapper) tocWrapper.classList.remove("hidden");
      factsWrapper.classList.add("hidden");
    } else if (mode === "facts") {
      if (comicWrapper) comicWrapper.classList.add("hidden");
      chWrapper.classList.add("hidden");
      if (tocWrapper) tocWrapper.classList.add("hidden");
      factsWrapper.classList.remove("hidden");
    } else {
      if (comicWrapper) comicWrapper.classList.remove("hidden");
      chWrapper.classList.remove("hidden");
      if (tocWrapper) tocWrapper.classList.remove("hidden");
      factsWrapper.classList.remove("hidden");
    }
  }

  const tabs = ["all", "comic", "chapters", "facts"];
  tabs.forEach(t => {
    const btn = document.getElementById(`story-tab-${t}`);
    if (!btn) return;
    if (t === mode) {
      btn.className = "story-tab-btn px-3.5 py-2 text-xs sm:text-sm font-extrabold rounded-xl bg-amber-500 text-amber-950 shadow-xs transition-all cursor-pointer flex items-center gap-1.5";
    } else {
      btn.className = "story-tab-btn px-3.5 py-2 text-xs sm:text-sm font-bold rounded-xl bg-amber-900/80 hover:bg-amber-800 text-amber-100 border border-amber-700 transition-all cursor-pointer flex items-center gap-1.5";
    }
  });
}

// Přepínání 4. sekce (Badatelna, Demografie, Atlas map, Archivní průvodce) na vyžádání
let currentHubSection = "demografie"; // 'demografie' | 'atlas' | 'pruvodce' | 'none'

function switchHubSection(sectionKey, scroll = true) {
  currentHubSection = sectionKey;
  const demoEl = document.getElementById("demografie-section");
  const atlasEl = document.getElementById("atlas-map-section");
  const pruvodceEl = document.getElementById("badatelsky-pruvodce");

  if (demoEl) demoEl.classList.toggle("hidden", sectionKey !== "demografie");
  if (atlasEl) atlasEl.classList.toggle("hidden", sectionKey !== "atlas");
  if (pruvodceEl) pruvodceEl.classList.toggle("hidden", sectionKey !== "pruvodce");

  const buttons = [
    { key: "demografie", id: "hub-btn-demografie" },
    { key: "atlas", id: "hub-btn-atlas" },
    { key: "pruvodce", id: "hub-btn-pruvodce" },
    { key: "none", id: "hub-btn-none" }
  ];

  buttons.forEach(({ key, id }) => {
    const btn = document.getElementById(id);
    if (!btn) return;
    if (key === sectionKey) {
      btn.className = "hub-tab-btn px-3.5 py-2 text-xs sm:text-sm font-extrabold rounded-xl bg-amber-500 text-amber-950 shadow-xs transition-all cursor-pointer flex items-center gap-1.5";
    } else if (key === "none") {
      btn.className = "hub-tab-btn px-2.5 py-2 text-xs font-semibold rounded-xl bg-stone-800/80 hover:bg-stone-700 text-stone-300 border border-stone-600 transition-all cursor-pointer";
    } else {
      btn.className = "hub-tab-btn px-3.5 py-2 text-xs sm:text-sm font-bold rounded-xl bg-amber-900/80 hover:bg-amber-800 text-amber-100 border border-amber-700 transition-all cursor-pointer flex items-center gap-1.5";
    }
  });

  if (scroll && sectionKey !== "none") {
    setTimeout(() => {
      document.getElementById("badatelna-hub-section")?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  }
}

// ==========================================================================
// DEMOGRAFICKÁ A MAJETKOVÁ ANALÝZA DOMÁCNOSTÍ (1857–1921)
// ==========================================================================

let currentDemographyTab = "csu"; // 'csu' default | 'all' | 'histogram' | 'origins' | 'wealth'
let currentDemographyCsuView = "svg"; // 'svg' | 'stacked' | 'benkov' | 'houses' | 'recent'
let currentCsuTimeSpan = "1275"; // '1275' (1275–2026 default) | '1585' (1585–2026) | '1869' (1869–2026)
let selectedCsuSvgIndex = 26; // default to latest (1. 1. 2026, index 26 of 27)
let csuSvgLayers = { tot: true, dl: true, ben: true, houses: true };
let currentDemographyYear = 1921; // 1921 default, or 'all', 1910, 1900, 1890, 1880, 1869, 1857
let currentDemographyOriginFilter = "all"; // 'all' | 'local' | 'nearby' | 'broader' | 'regional' | 'distant'
let currentDemographyWealthFilter = "all"; // 'all' | 'rychta' | 'grunt' | 'malorolnik' | 'domkar'
let currentDemographyHouseSearch = "";

const DLOUHOMILOV_COORDS = [49.9069, 16.9896];

const MUNICIPALITY_COORDINATES = {
  'Dlouhomilov': [49.9069, 16.9896, 'vlastní obec'],
  'Dlouhomilov (Lomigsdorf)': [49.9069, 16.9896, 'vlastní obec'],
  'Benkov': [49.8953, 17.0019, 'místní osada obce Dlouhomilov'],
  'Medelské': [49.9125, 16.9836, 'místní osada obce Dlouhomilov'],
  'Brníčko': [49.8950, 16.9728, 'sousední obec (okr. Zábřeh)'],
  'Dolní Olešná': [49.9214, 16.9822, 'sousední osada / část Hrabišína'],
  'Horní Olešná': [49.9325, 16.9936, 'sousední osada / část Hrabišína'],
  'Hrabišín': [49.9286, 17.0189, 'sousední obec'],
  'Strupšín': [49.8858, 16.9694, 'sousední obec (část Brníčka)'],
  'Kolšov': [49.8825, 16.9508, 'blízká obec (okr. Zábřeh)'],
  'Lesnice': [49.8736, 16.9447, 'blízká obec (okr. Zábřeh)'],
  'Sudkov': [49.9006, 16.9414, 'blízká obec (okr. Zábřeh)'],
  'Postřelmov': [49.9078, 16.9153, 'blízká obec (okr. Zábřeh)'],
  'Postřelmovice': [49.8889, 16.9019, 'Malé Postřelmovice / Postřelmůvek'],
  'Rovensko': [49.8931, 16.8906, 'blízká obec u Zábřeha'],
  'Rovensko, okr. Zábřeh': [49.8931, 16.8906, 'blízká obec u Zábřeha'],
  'Rohle': [49.8658, 17.0172, 'sousední obec přes kopec'],
  'Leština': [49.8669, 16.9353, 'blízká obec (okr. Zábřeh)'],
  'Václavov': [49.8903, 16.8667, 'Václavov u Zábřeha'],
  'Zábřeh': [49.8825, 16.8722, 'okresní město'],
  'Krumpach': [49.9008, 16.8639, 'obec u Zábřeha'],
  'Svébohov': [49.9144, 16.8469, 'obec na Zábřežsku'],
  'Zborov': [49.9403, 16.8489, 'obec na Zábřežsku'],
  'Klášterec': [49.9389, 16.8731, 'obec na Zábřežsku'],
  'Bludov': [49.9436, 16.9286, 'obec u Šumperka'],
  'Chromeč': [49.9339, 16.9003, 'obec u Bludova'],
  'Vyšehoří': [49.9278, 16.8856, 'obec u Zábřeha/Šumperka'],
  'Všechoř': [49.9278, 16.8856, 'Vyšehoří u Zábřeha'],
  'Horní Studénky': [49.9617, 16.8286, 'obec v podhůří Zábřežské vrchoviny'],
  'Dolní Studénky': [49.9397, 16.9669, 'obec u Šumperka'],
  'Šumperk': [49.9653, 16.9706, 'průmyslové město'],
  'Temenice': [49.9722, 16.9539, 'dnes součást Šumperka'],
  'Hrabenov': [49.9853, 16.9222, 'obec u Rudy nad Moravou'],
  'Bohutín': [49.9569, 16.8981, 'obec u Bludova'],
  'Bohdíkov': [50.0083, 16.9000, 'obec v údolí Moravy'],
  'Raškov': [50.0258, 16.8967, 'obec u Hanušovic'],
  'Mladoňov': [49.9250, 17.0789, 'obec v Hraběšické vrchovině'],
  'Libina': [49.8781, 17.0819, 'Dolní/Horní Libina'],
  'Horní Libina': [49.8878, 17.0781, 'Horní Libina'],
  'Hradečná': [49.8511, 17.0539, 'obec u Bílé Lhoty / Libiny'],
  'Zvole': [49.8408, 16.9169, 'obec u Zábřeha'],
  'Slavoňov': [49.8117, 16.9125, 'obec u Lukavice / Mohelnice'],
  'Jestřebí': [49.8394, 16.8475, 'obec u Zábřeha'],
  'Kosov': [49.8794, 16.7989, 'obec západně od Zábřeha'],
  'Drozdov': [49.9144, 16.7747, 'obec v údolí Březné'],
  'Jedlí': [49.9369, 16.7625, 'obec na Štítecku'],
  'Bušín': [49.9781, 16.8586, 'obec u Rudy nad Moravou'],
  'Bušín / Budíkov': [49.9781, 16.8586, 'Bušín u Rudy nad Moravou'],
  'Janoušov': [50.0081, 16.8453, 'obec v podhůří Králického Sněžníku'],
  'Horní Heřmanice': [49.9564, 16.7156, 'obec u Lanškrouna / Štítů'],
  'Cotkytle': [49.9225, 16.6856, 'obec na pomezí Čech a Moravy'],
  'Dlouhá Loučka': [49.8256, 17.1939, 'obec u Uničova'],
  'Dlouhá Loučka (Langendorf)': [49.8256, 17.1939, 'obec u Uničova'],
  'Plinkout / Sukolom': [49.8167, 17.1583, 'část Dlouhé Loučky'],
  'M. Neustadt (Uničov) / Markersdorf': [49.7711, 17.1211, 'Uničov'],
  'Moravičany': [49.7567, 16.9642, 'obec u Mohelnice'],
  'Moravičany, okr. Mohelnice': [49.7567, 16.9642, 'obec u Mohelnice'],
  'Sobotín': [50.0144, 17.0956, 'obec u Šumperka'],
  'Šternberk': [49.7306, 17.2989, 'město na Olomoucku'],
  'Hvozdec': [49.6875, 16.9936, 'obec u Bouzova / Konice'],
  'Stařechovice': [49.5397, 17.0650, 'obec na Hané (u Prostějova)'],
  'Drahanovice': [49.5664, 17.0758, 'obec na Hané (u Olomouce)'],
  'Frývaldov': [50.2294, 17.2047, 'dnešní Jeseník (Slezsko)'],
  'Beňov (okr. Přerov)': [49.4106, 17.5028, 'obec u Přerova (Haná)'],
  'Kroměříž': [49.2978, 17.3931, 'arcibiskupské město na Hané'],
  'Lukov (?)': [49.2936, 17.7397, 'Lukov na Zlínsku'],
  'Sloupnice': [49.9411, 16.3228, 'Sloupnice u Litomyšle (Východní Čechy)'],
  'Sloupnice, Zábřeh': [49.9411, 16.3228, 'Sloupnice (Východní Čechy)'],
  'Stoupné': [49.9411, 16.3228, 'Sloupnice / Stoupné (Východní Čechy)'],
  'Trotina': [50.3653, 15.8069, 'Trotina u Dvora Králové (Východní Čechy)'],
  'Hrotovice': [49.1078, 16.0592, 'Hrotovice u Třebíče (JZ Morava)'],
  'Poděbrady': [50.1425, 15.1189, 'Poděbrady (Střední Čechy)'],
  'Poděbrad': [50.1425, 15.1189, 'Poděbrady (Střední Čechy)'],
  'Vídeň': [48.2082, 16.3738, 'Vídeň (Rakousko)'],
  'Hostivice': [50.0811, 14.2572, 'Hostivice u Prahy (Střední Čechy)'],
  'Perotín (Beroun)': [49.9639, 14.0722, 'Berounsko (Střední Čechy)'],
  'Perotín': [49.9639, 14.0722, 'Berounsko (Střední Čechy)'],
  'Chlumčany, okres Louny': [50.3358, 13.8442, 'Chlumčany u Loun (SZ Čechy)'],
  'Police': [49.8050, 16.9936, 'obec u Úsova (okr. Šumperk)'],
  'Zlehov': [49.9483, 16.7417, 'Žleb / Zlehov u Cotkytle (okr. Šilperk)'],
  'Zlehov (Šilperk)': [49.9483, 16.7417, 'Žleb / Zlehov u Cotkytle (okr. Šilperk)'],
  'Moravičany (okr. Mohelnice)': [49.7578, 16.9636, 'obec u Mohelnice (okr. Šumperk)'],
  'Sloupnice / Strupšín': [49.8858, 16.9694, 'Strupšín / Sloupnice (u Brníčka)'],
  'Špičky (Spitzenthal)': [49.5667, 17.8167, 'Špičky u Hranic na Moravě'],
  'Hynčina': [49.8058, 16.8042, 'Hynčina na Zábřežsku'],
  'Německá Libina': [49.8822, 17.0700, 'dnes Libina (okr. Šumperk)'],
  'Rejvíz': [50.2289, 17.3072, 'obec v Hrubém Jeseníku (okr. Jeseník)'],
  'Lukavice': [49.8550, 16.9242, 'obec na Zábřežsku'],
  'Janoslavice': [49.8731, 17.0089, 'osada sousední obce Rohle'],
  'Brníčko (domovská příslušnost Uhry)': [49.8950, 16.9728, 'sousední obec (okr. Zábřeh)'],
  'Dlouhomilov (domovská příslušnost Uhry)': [49.9069, 16.9896, 'vlastní obec'],
  'Crhov': [49.9867, 16.7867, 'Crhov u Štítů (Šilperka)'],
  'Crhov (okr. Šilperk / Štíty)': [49.9867, 16.7867, 'Crhov u Štítů (Šilperka)'],
  'Rabenov': [49.9217, 17.0167, 'místní část sousedního Hrabišína'],
  'Rabenov (Hrabišín, okr. Šumperk)': [49.9217, 17.0167, 'místní část sousedního Hrabišína'],
  'Bludov (okr. Šumperk)': [49.9436, 16.9286, 'obec u Šumperka'],
  'Brníčko (okr. Zábřeh)': [49.8950, 16.9728, 'sousední obec (okr. Zábřeh)'],
  'Pivonín / Pivojn (okr. Zábřeh)': [49.8722, 16.8286, 'obec u Zábřeha'],
  'Svébohov (okr. Zábřeh)': [49.9144, 16.8469, 'obec na Zábřežsku'],
  'Oděsa': [46.4825, 30.7233, 'Ukrajina (Černé moře)'],
  'Rachov': [48.0558, 24.2108, 'Podkarpatská Rus'],
  'Donawitz': [47.3750, 15.0667, 'Štýrsko (Rakousko)'],
  'Rosina': [49.1833, 18.7667, 'okr. Žilina (Slovensko)'],
  'Horní Cetno': [50.4167, 14.8000, 'okr. Mladá Boleslav (Benátky n. J.)'],
  'Úsobí': [49.5167, 15.5000, 'okr. Havlíčkův Brod'],
  'Určice': [49.4358, 17.0767, 'okr. Prostějov'],
  'Polešovice': [49.0347, 17.3406, 'okr. Uherské Hradiště'],
  'Kostelec': [49.3333, 17.5167, 'okr. Kroměříž / Holešov'],
  'Bílavsko': [49.3900, 17.6500, 'u Bystřice pod Hostýnem'],
  'Horní Bečva': [49.4300, 18.2867, 'okr. Vsetín / Rožnov'],
  'Kateřinky': [49.9483, 17.9150, 'dnes součást Opavy'],
  'Valteřice': [49.9700, 16.7100, 'u Výprachtic / Lanškrouna'],
  'Ústí nad Orlicí': [49.9744, 16.3939, 'východní Čechy'],
  'Rýmařov': [49.9317, 17.2711, 'Nízký Jeseník'],
  'Jamartice': [49.9450, 17.3000, 'u Rýmařova'],
  'Rejchartice': [50.0400, 16.9700, 'u Šumperka'],
  'Velké Losiny': [50.0306, 17.0333, 'pod Hrubým Jeseníkem'],
  'Vikýřovice': [49.9750, 16.9950, 'u Šumperka'],
  'Třemešek': [49.9200, 17.0500, 'u Šumperka / Dolních Studének'],
  'Maršíkov': [50.0450, 17.0600, 'u Velkých Losin'],
  'Frankštát': [49.9450, 17.0350, 'Nový Malín u Šumperka'],
  'Šumvald': [49.8167, 17.1333, 'u Uničova'],
  'Králová': [49.8000, 17.1167, 'u Uničova'],
  'Hlivice': [49.7833, 17.0833, 'u Uničova / Medlova'],
  'Dolní Libina': [49.8822, 17.0700, 'Libina'],
  'Moravská Libina': [49.8822, 17.0700, 'Libina'],
  'Německé Libiny': [49.8822, 17.0700, 'Libina'],
  'Obědné': [49.8667, 17.0833, 'část Libiny'],
  'Kamenná': [49.8250, 17.0833, 'u Rohle / Libiny'],
  'Dědinka u Troubelic': [49.8167, 17.0667, 'u Troubelic'],
  'Dolní Štěpánov': [49.5450, 16.8500, 'Horní/Dolní Štěpánov na Drahanské vrchovině'],
  'Jaroměřice': [49.6267, 16.7533, 'u Jevíčka'],
  'Boršov': [49.7400, 16.6800, 'u Moravské Třebové'],
  'Brno': [49.1951, 16.6068, 'zemské hlavní město Moravy'],
  'Úsov': [49.8000, 17.0100, 'město na Mohelnicku'],
  'Dubicko': [49.8300, 16.9700, 'u Mohelnice'],
  'Loštice': [49.7450, 16.9283, 'město tvarůžků'],
  'Třeština': [49.7850, 16.9450, 'u Mohelnice'],
  'Bílá Lhota': [49.7100, 16.9750, 'u Litovle'],
  'Červená Lhota': [49.7250, 17.0100, 'u Bílé Lhoty'],
  'Nasobůrky': [49.6950, 17.0600, 'u Litovle'],
  'Olšany': [49.9650, 16.8650, 'papírny Olšany u Rudy'],
  'Německá Ruda': [49.9800, 16.8800, 'Ruda nad Moravou'],
  'Březná': [49.9500, 16.7800, 'u Štítů'],
  'Postřelmůvek': [49.9000, 16.8800, 'u Postřelmova'],
  'Králec': [49.9300, 16.9400, 'u Dolních Studének'],
  'Hrabová': [49.8300, 16.9500, 'u Police'],
  'Pískov': [49.8250, 17.1167, 'u Troubelic'],
  'Dolní Hynčina': [49.8200, 16.8000, 'u Zábřeha'],
  'Lubník': [49.8900, 16.6800, 'u Lanškrouna'],
  'Dolní Temenice': [49.9700, 16.9600, 'součást Šumperka'],
  'Víska': [49.9400, 16.9900, 'část Nového Malína'],
  'Nedvězí': [49.8400, 16.8600, 'u Zábřeha'],
  'Horní Válce': [49.8100, 16.9200, 'osada u Lukavice'],
  'Koloredov': [49.8400, 16.9300, 'osada u Zvole'],
  'Hřibohov': [49.9000, 16.8500, 'osada u Svébohova'],
  'Mědná': [49.9200, 16.9800, 'Mědné u Hrabišína'],
  'Konice': [49.8800, 16.8300, 'Koníček / Konice u Zábřeha'],
  'Odry': [49.6600, 17.8300, 'okr. Nový Jičín / Slezsko'],
  'Pivonín': [49.8722, 16.8286, 'obec u Zábřeha'],
  'Barisciano': [42.3264, 13.5919, 'prov. L\'Aquila, Abruzzo, Itálie'],
  'Pacanico (Paganica)': [42.3586, 13.4739, 'Paganica, prov. L\'Aquila, Abruzzo, Itálie'],
  'Havasmező': [47.8225, 24.4375, 'Marmaroš, tehdy Uhersko (dnes Rumunsko)'],
  'Červená Voda (Halič)': [50.1194, 22.6819, 'okr. Jarosław, tehdy Halič'],
  'Budapešť': [47.4979, 19.0402, 'hlavní město Uherska'],
  'Královec': [50.6694, 15.9894, 'okr. Trutnov, Čechy'],
  'Albrechtice': [50.4833, 15.7833, 'okr. Trutnov, Čechy'],
  'Orlová': [49.8453, 18.4303, 'okr. Fryštát, Slezsko'],
  'Andělská Hora': [50.0608, 17.3892, 'okr. Bruntál, Slezsko'],
  'Mohelnice': [49.7769, 16.9194, 'město v okr. Šumperk'],
  'Klopina': [49.8211, 17.0017, 'obec u Úsova'],
  'Bezděkov': [49.8117, 16.9539, 'Bezděkov u Úsova'],
  'Vranová Lhota': [49.7119, 16.8181, 'okr. Mohelnice / Svitavy'],
  'Hrabí': [49.7406, 17.0014, 'Hrabí u Bílé Lhoty'],
  'Valšovice': [49.5150, 17.6947, 'Morava (u Hranic)'],
  'Malé Jestřebí': [49.8542, 16.8489, 'Jestřebí u Zábřeha'],
  'Vysoká': [50.1192, 16.9369, 'okr. Šumperk / Zábřeh'],
  'Králíky': [50.0836, 16.7606, 'město na pomezí Čech a Moravy'],
  'Nová Véska': [49.8167, 17.4667, 'Moravský Beroun / Šumpersko'],
  'Hanušovice': [50.0725, 16.9289, 'město v okr. Šumperk'],
  'Vysoké Žibřidovice': [50.1114, 16.9442, 'část Hanušovic (okr. Šumperk)'],
  'Heřmanice': [49.9461, 16.7267, 'Horní/Dolní Heřmanice, okr. Lanškroun'],
  'Cholina': [49.6625, 17.0542, 'okr. Olomouc / Litovel'],
  'Topolany': [49.5892, 17.1972, 'část Olomouce'],
  'Biskupice': [49.0853, 17.7108, 'okr. Uherské Hradiště'],
  'Bratrušov': [49.9958, 16.9589, 'obec u Šumperka'],
  'Medlov': [49.7867, 17.0653, 'obec u Uničova'],
  'Loučná': [50.0706, 17.0908, 'Loučná nad Desnou (okr. Šumperk)'],
  'Rudoltice': [49.9922, 17.0714, 'Rudoltice u Sobotína'],
  'Markov': [49.9278, 16.8856, 'osada u Vyšehoří'],
  'Lipník': [49.5272, 17.5858, 'Lipník nad Bečvou'],
  'Moravská Třebová': [49.7578, 16.6642, 'okresní město na Moravě'],
  'Nemrlov': [49.7950, 17.0900, 'osada u Oskavy / Uničova'],
  'Milotice': [49.5300, 17.8083, 'Milotice nad Bečvou'],
  'Rájec (Velký Rážel)': [49.8547, 16.8906, 'Rájec u Zábřeha'],
  'Nemile': [49.8828, 16.8375, 'obec u Zábřeha'],
  'Borušov': [49.7869, 16.7375, 'obec u Moravské Třebové'],
  'Kunčina': [49.7942, 16.6281, 'obec u Moravské Třebové'],
  'Hoštejn': [49.8736, 16.7747, 'obec u Zábřeha'],
  'Hraničné Petrovice': [49.7364, 17.4192, 'Markersdorf u Domašova'],
  'Lipinka (Lepínky)': [49.8267, 17.0819, 'obec u Úsova'],
  'Oskava': [49.8936, 17.1319, 'obec v okr. Šumperk'],
  'Hynčina': [49.8200, 16.8000, 'u Zábřeha'],
  'Temenice': [49.9700, 16.9600, 'součást Šumperka'],
  'Olomouc': [49.5938, 17.2509, 'historické zemské město Moravy'],
  'Chválkovice': [49.6075, 17.2797, 'Chválkovice u Olomouce'],
  'Kopřivná': [50.0472, 16.9428, 'obec u Hanušovic (okr. Šumperk)'],
  'Uherské Hradiště': [49.0697, 17.4597, 'okresní město na Slovácku'],
  'Janovice': [49.9511, 17.2464, 'Janovice u Rýmařova (Johnsdorf)'],
  'Vojtěchov': [49.6269, 16.9061, 'Vojtěchov u Konice (okr. Prostějov)'],
  'Krásná': [49.9694, 17.0681, 'Krásné u Šumperka'],
  'Slatina': [49.8833, 16.5833, 'Slatina u Lanškrouna'],
  'Floridsdorf (Mankendorf)': [48.2564, 16.3997, 'okr. Floridsdorf u Vídně, Dolní Rakousy'],
  'Mödling': [48.0856, 16.2831, 'Mödling u Vídně, Dolní Rakousy'],
  'Wiener Neustadt (Lemberg)': [47.6550, 16.2300, 'okr. Wiener Neustadt, Dolní Rakousy'],
  'Dětřichov': [49.9800, 17.0200, 'Dětřichov / Rejchartice u Šumperka'],
  'Velké Jestřebí': [49.8558, 16.8617, 'Jestřebí u Zábřeha (Gr. Jestřeby)'],
  'Klepáčov': [50.0089, 17.1436, 'Klepáčov u Sobotína (Kleppel)'],
  'Raškov': [50.0367, 16.8975, 'Raškov u Bohdíkova'],
  'Svinov': [49.7442, 16.8639, 'Svinov u Pavlova (Schweine)'],
  'Strážná': [49.9089, 16.6967, 'Strážná u Cotkytle (Schönwald, okr. Zábřeh)'],
  'Skalička': [49.9014, 16.8919, 'Skalička u Zábřeha (Skalitz)'],
  'Štědrákova Lhota': [50.0439, 16.8583, 'Štědrákova Lhota (Tschödrich)'],
  'Březová (Brüssau)': [49.6458, 16.5181, 'Březová nad Svitavou / pomezí Mor. Třebové'],
  'Maletín (Neustädtlein)': [49.8056, 16.7728, 'Nový Maletín / Svojanov, okr. Zábřeh'],
  'Linhartice (Lohra)': [49.7389, 16.6789, 'okolí Moravské Třebové'],
  'Bílovice': [49.4975, 17.0786, 'Bílovice-Lutotín u Prostějova'],
  'Březolupy': [49.1225, 17.5797, 'Březolupy u Uherského Hradiště'],
  'Chotěboř': [49.7208, 15.6703, 'Chotěboř v Čechách'],
  'Dolní Rokytnice': [50.7289, 15.4336, 'Rokytnice nad Jizerou (okr. Jilemnice)'],
  'Dvorce': [49.8325, 17.5478, 'Dvorce u Šternberka / Bruntálu'],
  'Hněvkov': [49.8692, 16.8197, 'Hněvkov u Zábřeha'],
  'Háj u Třeštiny': [49.7964, 16.9686, 'Háj u Třeštiny (okr. Zábřeh)'],
  'Janov': [50.2478, 17.4778, 'Janov u Krnova / Slezsko'],
  'Kojetín': [49.3519, 17.3022, 'Kojetín u Přerova'],
  'Kolendorf': [50.0083, 16.9250, 'Osada u Bludova / Bohdíkova'],
  'Komňátka': [50.0369, 16.9069, 'Komňátka u Bohdíkova (okr. Šumperk)'],
  'Loučka': [49.6406, 17.0050, 'Loučka u Litovle'],
  'Olešnice': [49.5575, 16.4214, 'Olešnice na Moravě'],
  'Rapotín': [50.0003, 17.0189, 'Rapotín u Šumperka (Reitendorf)'],
  'Rudolfov': [49.8825, 16.8689, 'Rudoltice / Rudolfov u Zábřeha'],
  'Věžky': [49.2939, 17.2764, 'Věžky u Přerova'],
  'Údolí Hrubé': [49.9833, 17.0500, 'Krásné / Hrubé Údolí u Šumperka'],
  'Pěčíkov': [49.7188, 16.7812, 'část Městečka Trnávky (okr. Moravská Třebová)'],
  'Vranová': [49.7106, 16.8253, 'Vranová Lhota u Mohelnice / Moravské Třebové'],
  'Rejhotice': [50.0886, 17.0789, 'Rejhotice / Reitenhau (Loučná nad Desnou)'],
  'Český Bohdíkov': [50.0100, 16.9043, 'Bohdíkov u Šumperka'],
  'Velký Rájec': [49.8564, 16.9031, 'Rájec u Zábřeha (Groß Rasel)'],
  'Měník': [49.7106, 16.9861, 'Měník u Bílé Lhoty (okr. Litovel)'],
  'Kouty': [50.1010, 17.1166, 'Kouty nad Desnou (Loučná nad Desnou)'],
  'Nemilany': [49.5570, 17.2489, 'Nemilany u Olomouce'],
  'Hněvotín': [49.5719, 17.1795, 'Hněvotín (Nebotein) u Olomouce'],
  'Kolorédov': [49.8406, 16.9076, 'Kolorédov (Koloredo), dnes Zvole u Zábřeha'],
  'Radomilov': [49.9658, 16.9000, 'Radomilov (Ruda nad Moravou)'],
  'Chleny': [50.0779, 16.2437, 'Chleny u Kostelce nad Orlicí (okr. Rychnov nad Kněžnou)'],
  'Dobrochov': [49.3858, 17.1056, 'Dobrochov u Prostějova'],
  'Virovitice': [45.8319, 17.3839, 'Virovitica (Chorvatsko / Slavonie)'],
  'Velehrad': [49.1044, 17.3939, 'Velehrad u Uherského Hradiště'],
  'Tejnice': [49.2600, 13.9000, 'Týnec / Tejnice (okr. Strakonice, Čechy)'],
  'Dolní Rokytňany': [50.3436, 15.1714, 'Dolní Rokytňany (Rokytňany, okr. Jičín)'],
  'Markvartice': [50.4319, 15.1972, 'Markvartice u Sobotky (okr. Jičín)'],
  'Václavov u Dubicka': [49.8519, 16.9539, 'Václavov u Brníčka / Dubicka (Watzelsdorf)'],
  'Kačany': [49.3000, 18.7800, 'Kysucké / Trenčínská stolice, Horní Uhry (Slovensko)'],
  'Bedřichov': [49.9197, 17.1628, 'Bedřichov u Oskavy (Friedrichsdorf)'],
  'Lazce': [49.8058, 17.0706, 'Lazce u Troubelic (Deutsch Losen, okr. Litovel)'],
  'Veleboř': [49.8114, 17.0394, 'Veleboř u Klopiny'],
  'Újezd': [49.7664, 17.1778, 'Újezd u Uničova (Augezd, okr. Litovel)'],
  'Tvrdkov': [49.9147, 17.1869, 'Tvrdkov u Rýmařova (Pürkau)'],
  'Bartoňov': [49.9917, 16.8897, 'Bartoňov u Rudy nad Moravou (okr. Šumperk)'],
  'Palonín': [49.7669, 16.9942, 'Palonín u Loštic (okr. Šumperk)'],
  'Loučky': [49.9481, 17.1319, 'Loučky (okres Šumperk / Sobotín)'],
  'Beňov': [49.4006, 17.5008, 'Beňov u Přerova (okr. Přerov)'],
  'Chropyně': [49.3564, 17.3642, 'Chropyně na Hané (okr. Kroměříž)'],
  'Špičky': [49.5186, 17.7989, 'Špičky u Hranic (okr. Přerov)'],
  'Starý Jičín': [49.5767, 17.9622, 'Starý Jičín u Nového Jičína'],
  'Choceň': [50.0017, 16.2231, 'Choceň (východní Čechy, okr. Ústí nad Orlicí)']
};

function normalizePlaceName(p) {
  if (!p) return 'Dlouhomilov';
  let s = p.replace(/\?/g, '').trim();
  if (s.toLowerCase().includes('oděsa') || s.toLowerCase().includes('odessa')) return 'Oděsa';
  if (s.toLowerCase().includes('rachov') || s.toLowerCase().includes('rahovo')) return 'Rachov';
  if (s.toLowerCase().includes('donawitz')) return 'Donawitz';
  if (s.toLowerCase().includes('rosina')) return 'Rosina';
  if (s.toLowerCase().includes('cetno')) return 'Horní Cetno';
  if (s.toLowerCase().includes('úsobí') || s.toLowerCase().includes('usobi')) return 'Úsobí';
  if (s.toLowerCase().includes('kateřinky') || s.toLowerCase().includes('katharein')) return 'Kateřinky';
  if (s.toLowerCase().includes('valteřice') || s.toLowerCase().includes('valterice')) return 'Valteřice';
  if (s.toLowerCase().includes('bečva') || s.toLowerCase().includes('becva')) return 'Horní Bečva';
  if (s.toLowerCase().includes('polešovice') || s.toLowerCase().includes('polesovice')) return 'Polešovice';
  if (s.toLowerCase().includes('bílavsko') || s.toLowerCase().includes('bilavsko')) return 'Bílavsko';
  if (s.toLowerCase().includes('kostelec')) return 'Kostelec';
  if (s.toLowerCase().includes('určice') || s.toLowerCase().includes('urcice')) return 'Určice';
  if (s.toLowerCase().includes('orlicí') || s.toLowerCase().includes('wildenschwert')) return 'Ústí nad Orlicí';
  if (s.toLowerCase().includes('hlivice')) return 'Hlivice';
  if (s.toLowerCase().includes('králová') || s.toLowerCase().includes('kralova')) return 'Králová';
  if (s.toLowerCase().includes('králec') || s.toLowerCase().includes('kralec')) return 'Králec';
  if (s.toLowerCase().includes('dubicko')) return 'Dubicko';
  if (s.toLowerCase().includes('nasobůrky') || s.toLowerCase().includes('nasoburky')) return 'Nasobůrky';
  if (s.toLowerCase().includes('bílá lhota') || s.toLowerCase().includes('bila lhota')) return 'Bílá Lhota';
  if (s.toLowerCase().includes('štěpánov') || s.toLowerCase().includes('stepanov')) return 'Dolní Štěpánov';
  if (s.toLowerCase().includes('válce') || s.toLowerCase().includes('valce') || s.toLowerCase().includes('waldsee')) return 'Horní Válce';
  if (s.toLowerCase().includes('březná') || s.toLowerCase().includes('brezna')) return 'Březná';
  if (s.toLowerCase().includes('frankštát') || s.toLowerCase().includes('malín') || s.toLowerCase().includes('frankstadt') || s.toLowerCase().includes('malin')) return 'Frankštát';
  if (s.toLowerCase().includes('postřelmůvek') || s.toLowerCase().includes('postrelmuvek')) return 'Postřelmůvek';
  if (s.toLowerCase().includes('úsov') || s.toLowerCase().includes('usov')) return 'Úsov';
  if (s.toLowerCase().includes('olšany') || s.toLowerCase().includes('olsany')) return 'Olšany';
  if (s.toLowerCase().includes('libina') || s.toLowerCase().includes('liebau') || s.toLowerCase().includes('libušovice')) return 'Libina';
  if (s.toLowerCase().includes('studýn') || s.toLowerCase().includes('studén') || s.toLowerCase().includes('studen')) {
    if (s.toLowerCase().includes('horn')) return 'Horní Studénky';
    return 'Dolní Studénky';
  }
  if (s.toLowerCase().includes('krumpach')) return 'Krumpach';
  if (s.toLowerCase().includes('chromeč') || s.toLowerCase().includes('chroměč') || s.toLowerCase().includes('chromec')) return 'Chromeč';
  if (s.toLowerCase().includes('rýmařov') || s.toLowerCase().includes('rymarov') || s.toLowerCase().includes('römerstadt')) return 'Rýmařov';
  if (s.toLowerCase().includes('jamartice') || s.toLowerCase().includes('irmsdorf')) return 'Jamartice';
  if (s.toLowerCase().includes('rejchartice') || s.toLowerCase().includes('reigersdorf')) return 'Rejchartice';
  if (s.toLowerCase().includes('losiny') || s.toLowerCase().includes('ullersdorf')) return 'Velké Losiny';
  if (s.toLowerCase().includes('vikýřovice') || s.toLowerCase().includes('weikersdorf')) return 'Vikýřovice';
  if (s.toLowerCase().includes('třemešek') || s.toLowerCase().includes('tschimischl')) return 'Třemešek';
  if (s.toLowerCase().includes('maršíkov') || s.toLowerCase().includes('marsikov')) return 'Maršíkov';
  if (s.toLowerCase().includes('šumvald') || s.toLowerCase().includes('sumvald')) return 'Šumvald';
  if (s.toLowerCase().includes('obědné') || s.toLowerCase().includes('obedne') || s.toLowerCase().includes('liebesdorf')) return 'Obědné';
  if (s.toLowerCase().includes('kamenná') || s.toLowerCase().includes('kamenna') || s.toLowerCase().includes('steine')) return 'Kamenná';
  if (s.toLowerCase().includes('dědinka') || s.toLowerCase().includes('dedinka') || s.toLowerCase().includes('aichen')) return 'Dědinka u Troubelic';
  if (s.toLowerCase().includes('jaroměřice') || s.toLowerCase().includes('jaromerice')) return 'Jaroměřice';
  if (s.toLowerCase().includes('boršov') || s.toLowerCase().includes('borsov') || s.toLowerCase().includes('pohres')) return 'Boršov';
  if (s.toLowerCase().includes('brno') || s.toLowerCase().includes('brünn')) return 'Brno';
  if (s.toLowerCase().includes('loštice') || s.toLowerCase().includes('lostice')) return 'Loštice';
  if (s.toLowerCase().includes('háj u třeštiny') || s.toLowerCase().includes('haj u trestiny')) return 'Háj u Třeštiny';
  if (s.toLowerCase().includes('třeština') || s.toLowerCase().includes('trestina')) return 'Třeština';
  if (s.toLowerCase().includes('červená lhota') || s.toLowerCase().includes('cervena lhota')) return 'Červená Lhota';
  if (s.toLowerCase().includes('ruda') || s.toLowerCase().includes('eisenau')) return 'Německá Ruda';
  if (s.toLowerCase().includes('hrabová') || s.toLowerCase().includes('hrabova')) return 'Hrabová';
  if (s.toLowerCase().includes('pískov') || s.toLowerCase().includes('piskov')) return 'Pískov';
  if (s.toLowerCase().includes('hynčina') || s.toLowerCase().includes('heinzendorf')) return 'Hynčina';
  if (s.toLowerCase().includes('lubník') || s.toLowerCase().includes('lubnik')) return 'Lubník';
  if (s.toLowerCase().includes('temenice') || s.toLowerCase().includes('hermesdorf')) return 'Temenice';
  if (s.toLowerCase().includes('víska') || s.toLowerCase().includes('viska') || s.toLowerCase().includes('wiesen')) return 'Víska';
  if (s.toLowerCase().includes('nedvězí') || s.toLowerCase().includes('nedvezi') || s.toLowerCase().includes('nebes')) return 'Nedvězí';
  if (s.toLowerCase().includes('koloredov')) return 'Koloredov';
  if (s.toLowerCase().includes('hřibohov') || s.toLowerCase().includes('hříbová')) return 'Hřibohov';
  if (s.toLowerCase().includes('mědná') || s.toLowerCase().includes('medna') || s.toLowerCase().includes('mědné')) return 'Mědná';
  if (s.toLowerCase().includes('konice') || s.toLowerCase().includes('rosenthal')) return 'Konice';
  if (s.toLowerCase().includes('odry')) return 'Odry';
  if (s.toLowerCase().includes('brníčko') || s.toLowerCase().includes('brnicko')) return 'Brníčko';
  if (s.toLowerCase().includes('strupschein') || s.toLowerCase().includes('strupšín') || s.toLowerCase().includes('strupsin')) return 'Strupšín';
  if (s.toLowerCase().includes('sobotín') || s.toLowerCase().includes('sobodin') || s.toLowerCase().includes('zöptau')) return 'Sobotín';
  if (s.toLowerCase().includes('hrabišín') || s.toLowerCase().includes('rabersdorf') || s.toLowerCase().includes('rabišany') || s.toLowerCase().includes('rabišín')) return 'Hrabišín';
  if (s.toLowerCase().includes('olešná') || s.toLowerCase().includes('ullischen')) {
    if (s.toLowerCase().includes('horn') || s.toLowerCase().includes('ober') || s.toLowerCase().includes('ob.')) return 'Horní Olešná';
    return 'Dolní Olešná';
  }
  if (s.toLowerCase().includes('barisciano')) return 'Barisciano';
  if (s.toLowerCase().includes('pacanico') || s.toLowerCase().includes('paganica')) return 'Pacanico (Paganica)';
  if (s.toLowerCase().includes('havasmez')) return 'Havasmező';
  if (s.toLowerCase().includes('budape')) return 'Budapešť';
  if (s.toLowerCase().includes('červená voda') && s.toLowerCase().includes('jaroslav')) return 'Červená Voda (Halič)';
  if (s.toLowerCase().includes('žibřidovice') || s.toLowerCase().includes('hohenseibersdorf')) return 'Vysoké Žibřidovice';
  if (s.toLowerCase().includes('hradečná') || s.toLowerCase().includes('hradecna')) return 'Hradečná';
  if (s.toLowerCase().includes('bedřichov') || s.toLowerCase().includes('friedrichsd')) return 'Bedřichov';
  if (s.toLowerCase().includes('lazce') || s.toLowerCase().includes('deutsch losen')) return 'Lazce';
  if (s.toLowerCase().includes('třemeš') || s.toLowerCase().includes('tremes')) return 'Třemešek';
  if (s.toLowerCase().includes('veleboř') || s.toLowerCase().includes('velebor')) return 'Veleboř';
  if (s.toLowerCase().includes('újezd') || s.toLowerCase().includes('augezd')) return 'Újezd';
  if (s.toLowerCase().includes('tvrdkov') || s.toLowerCase().includes('pürkau') || s.toLowerCase().includes('pirkau')) return 'Tvrdkov';
  if (s.toLowerCase().includes('petrovice') || s.toLowerCase().includes('markersdorf')) return 'Hraničné Petrovice';
  if (s.toLowerCase().includes('rážel') || s.toLowerCase().includes('rasel')) return 'Rájec (Velký Rážel)';
  if (s.toLowerCase().includes('lepínky') || s.toLowerCase().includes('lepinke')) return 'Lipinka (Lepínky)';
  if (s.toLowerCase().includes('nemrlov') || s.toLowerCase().includes('elend')) return 'Nemrlov';
  if (s.toLowerCase().includes('borušov') || s.toLowerCase().includes('porstendorf')) return 'Borušov';
  if (s.toLowerCase().includes('kunčina') || s.toLowerCase().includes('kunzendorf')) return 'Kunčina';
  if (s.toLowerCase().includes('andělská hora') || s.toLowerCase().includes('engelsberg')) return 'Andělská Hora';
  if (s.toLowerCase().includes('královec') || s.toLowerCase().includes('königshan')) return 'Královec';
  if (s.toLowerCase().includes('albrechtice') || s.toLowerCase().includes('albrechtsdorf')) return 'Albrechtice';
  if (s.toLowerCase().includes('králov')) return 'Králec';
  if (s.toLowerCase().includes('heřmanice')) return 'Heřmanice';
  if (s.toLowerCase().includes('krásná') || s.toLowerCase().includes('krásné')) return 'Krásná';
  if (s.toLowerCase().includes('slatina')) return 'Slatina';
  if (s.toLowerCase().includes('mankendorf') || s.toLowerCase().includes('floridsdorf')) return 'Floridsdorf (Mankendorf)';
  if (s.toLowerCase().includes('mödling')) return 'Mödling';
  if (s.toLowerCase().includes('lemberg') || s.toLowerCase().includes('wr. neustadt')) return 'Wiener Neustadt (Lemberg)';
  if (s.toLowerCase().includes('wien') || s.toLowerCase().includes('fünfhaus') || s.toLowerCase().includes('vídeň')) return 'Vídeň';
  if (s.toLowerCase().includes('reitendorf') || s.toLowerCase().includes('rapotín')) return 'Rapotín';
  if (s.toLowerCase().includes('chvalkovice') || s.toLowerCase().includes('chválkovice')) return 'Chválkovice';
  if (s.toLowerCase().includes('kojšín') || s.toLowerCase().includes('kojetín')) return 'Kojetín';
  if (s.toLowerCase().includes('rokytnice')) return 'Dolní Rokytnice';
  if (/^(?:m\.|mor\.)\s*šumperk\b/i.test(s)) return 'Šumperk';
  if (s.toLowerCase().includes('brattersdorf')) return 'Bratrušov';
  if (s.toLowerCase().includes('brünnlitz')) return 'Brníčko';
  if (s.toLowerCase().includes('brüssau')) return 'Březová (Brüssau)';
  if (s.toLowerCase().includes('dittersdorf')) return 'Dětřichov';
  if (s.toLowerCase().includes('jestřeb')) return 'Velké Jestřebí';
  if (s.toLowerCase().includes('johnsdorf')) return 'Janovice';
  if (s.toLowerCase().includes('kleppel')) return 'Klepáčov';
  if (s.toLowerCase().includes('kloppe')) return 'Klopina';
  if (s.toLowerCase().includes('lohra')) return 'Linhartice (Lohra)';
  if (s.toLowerCase().includes('mylersdorf')) return 'Maršíkov';
  if (s.toLowerCase().includes('neustädtlein')) return 'Maletín (Neustädtlein)';
  if (s.toLowerCase().includes('raškov')) return 'Raškov';
  if (s.toLowerCase().includes('rebeš')) return 'Nedvězí';
  if (s.toLowerCase().includes('riebe')) return 'Hřibohov';
  if (s.toLowerCase().includes('schmole')) return 'Zvole';
  if (s.toLowerCase().includes('schweine')) return 'Svinov';
  if (s.toLowerCase().includes('schönbrunn')) return 'Dolní Studénky';
  if (s.toLowerCase().includes('schönwald')) return 'Strážná';
  if (s.toLowerCase().includes('skalitz')) return 'Skalička';
  if (s.toLowerCase().includes('tschödrich')) return 'Štědrákova Lhota';
  if (s.toLowerCase().includes('wober')) return 'Zborov';
  if (s.toLowerCase().includes('zautke')) return 'Sudkov';
  if (/^hohenstadt\b/i.test(s)) return 'Zábřeh';
  if (/^m\.\s*trübau\b/i.test(s)) return 'Moravská Třebová';
  if (s.toLowerCase().includes('velký postřelmov')) return 'Postřelmov';
  if (s.toLowerCase().includes('pěčíkov') || s.toLowerCase().includes('pecikov')) return 'Pěčíkov';
  if (s.toLowerCase().includes('vranová') || s.toLowerCase().includes('vranova')) return s.toLowerCase().includes('lhota') ? 'Vranová Lhota' : 'Vranová';
  if (s.toLowerCase().includes('reitenhau') || s.toLowerCase().includes('rejhotice')) return 'Rejhotice';
  if (s.toLowerCase().includes('lipinka') || s.toLowerCase().includes('lepínk')) return 'Lipinka (Lepínky)';
  if (/^losín\b/i.test(s) || s.toLowerCase().includes('losín,')) return 'Velké Losiny';
  if (s.toLowerCase().includes('václavov') || s.toLowerCase().includes('watzelsdorf')) return 'Václavov u Dubicka';
  if (s.toLowerCase().includes('kačany') || s.toLowerCase().includes('kacany')) return 'Kačany';
  if (s.toLowerCase().includes('benkov') || s.toLowerCase().includes('benke')) return 'Benkov';
  if (s.toLowerCase().includes('medelsk') || s.toLowerCase().includes('dreihöfen')) return 'Medelské';
  if (s.toLowerCase().includes('dlouhomilov') || s.toLowerCase().includes('lomigsdorf')) return 'Dlouhomilov';
  if (s.toLowerCase().includes('felwies') || s.toLowerCase().includes('reihwies')) return 'Rejvíz';
  if (s.toLowerCase().includes('zimmischl') || s.toLowerCase().includes('tschimischl')) return 'Třemešek';
  if (s.toLowerCase().includes('pivonín') || s.toLowerCase().includes('pivojn')) return 'Pivonín';
  if (s.toLowerCase().includes('spitzenthal') || s.toLowerCase().includes('špičky')) return 'Špičky';
  if (s.toLowerCase().includes('beňov')) return 'Beňov';
  if (s.toLowerCase().includes('chropyně')) return 'Chropyně';
  if (s.toLowerCase().includes('choceň')) return 'Choceň';
  if (s.toLowerCase().includes('bartoňov')) return 'Bartoňov';
  if (s.toLowerCase().includes('palonín')) return 'Palonín';
  if (s.toLowerCase().includes('starý jičín')) return 'Starý Jičín';
  if (s.toLowerCase().includes('loučky')) return 'Loučky';
  if (/^okr\.\s*šumperk/i.test(s)) return 'Šumperk';
  if (/^okr\.\s*zábřeh/i.test(s)) return 'Zábřeh';
  if (/^(morava|neurčeno)/i.test(s)) return 'Dlouhomilov';

  s = s.replace(/\s*\([^)]*\)/g, '').trim();
  s = s.replace(/,\s*okr\..*$/i, '').trim();
  s = s.replace(/,\s*(?:Zábřeh|M\.\s*Šumperk|Mor\.\s*Šumperk|Šumperk|Uh\.\s*Hradiště|Uherské\s*Hradiště|Jilemnice|Jičín|Šternberk|Přerov|Uničov|Mohelnice|Moravská\s*Třebová|M\.\s*Třebová|Lanškroun|Litovel|Olomouc|Rýmařov|Šilperk|Štíty|Konice|Prostějov|Rychnov(?:\s*n\.\s*Kn\.|\s*nad\s*Kněžnou)?|Trenčínská\s*stol\.?|Hohenstadt|M\.\s*Schönberg|Littau|Römerstadt|M\.\s*Trübau|Troppau).*$/i, '').trim();
  s = s.replace(/,\s*(?:Čechy|Morava|Slezsko|Uhersko|Uhry|Halič|Rakousko|Dol\.\s*Rakousy|Dolní\s*Rakousy|Chorvatsko-Slavonie|Chorvatsko|Slavonie).*$/i, '').trim();
  s = s.replace(/\s*-\s*Medelsko/i, '').trim();
  s = s.replace(/\?/g, '').trim();
  return s;
}

function calculateDistanceKm(place) {
  if (!place) return 0;
  const norm = normalizePlaceName(place);
  const p = MUNICIPALITY_COORDINATES[place] || MUNICIPALITY_COORDINATES[norm];
  if (!p) {
    if (place.toLowerCase().includes('morav')) return -1;
    return null;
  }
  const R = 6371;
  const dLat = (p[0] - DLOUHOMILOV_COORDS[0]) * Math.PI / 180;
  const dLon = (p[1] - DLOUHOMILOV_COORDS[1]) * Math.PI / 180;
  const a = Math.sin(dLat / 2) ** 2 +
    Math.cos(DLOUHOMILOV_COORDS[0] * Math.PI / 180) * Math.cos(p[0] * Math.PI / 180) *
    Math.sin(dLon / 2) ** 2;
  return Math.round(R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)) * 10) / 10;
}

function getDistanceRing(distKm) {
  if (distKm === null || distKm === undefined) return { id: 'unknown', name: 'Neznámá lokalita', badge: 'bg-slate-100 text-slate-800' };
  if (distKm < 0) return { id: 'morava', name: 'Obecně Morava', badge: 'bg-stone-100 text-stone-800 border-stone-300' };
  if (distKm <= 2.0) return { id: 'local', name: '0. Místní rodáci (Dlouhomilov, Medelské, Benkov)', badge: 'bg-emerald-100 text-emerald-950 border-emerald-300', dot: 'bg-emerald-600' };
  if (distKm <= 7.5) return { id: 'nearby', name: '1. Bezprostřední sousedství (do 7,5 km)', badge: 'bg-sky-100 text-sky-950 border-sky-300', dot: 'bg-sky-600' };
  if (distKm <= 18.0) return { id: 'broader', name: '2. Širší Zábřežsko & Šumpersko (7,5–18 km)', badge: 'bg-indigo-100 text-indigo-950 border-indigo-300', dot: 'bg-indigo-600' };
  if (distKm <= 60.0) return { id: 'regional', name: '3. Regionální Morava & Slezsko (18–60 km)', badge: 'bg-amber-100 text-amber-950 border-amber-300', dot: 'bg-amber-600' };
  return { id: 'distant', name: '4. Dálková migrace (> 60 km)', badge: 'bg-rose-100 text-rose-950 border-rose-300', dot: 'bg-rose-600' };
}

function extractBirthYearFromDate(bd) {
  if (!bd || bd === '-') return null;
  const m = String(bd).match(/\b(17\d\d|18\d\d|19\d\d)\b/);
  return m ? parseInt(m[1], 10) : null;
}

function getHouseWealthCategory(house) {
  const id = house.id || '';
  const type = (house.type || house.category || '').toLowerCase();
  const desc = (house.description || house.summary || '').toLowerCase();

  if (id === 'cp7') {
    return {
      key: 'rychta',
      label: 'I. Dědičná rychta & Velkostatek',
      badgeClass: 'bg-amber-950 text-amber-100 border-amber-700',
      icon: '👑',
      order: 1,
      desc: 'Uzavřený čtyřkřídlý dvůr, 4–6 koní, 15–25 ks skotu, 4–7 stálých čeledínů/děveček, 3–5 bytů'
    };
  }

  const knownGrunts = ['cp29', 'cp22', 'cp10', 'cp6', 'cp8', 'cp13', 'cp24', 'cp25', 'cp43', 'medelske_cp3', 'benkov_cp1', 'benkov_cp6', 'benkov_cp12', 'benkov_cp14', 'benkov_cp25'];
  if (knownGrunts.includes(id) || type.includes('selský grunt') || type === 'farm' || desc.includes('selský grunt') || type.includes('velká venkovská usedlost')) {
    return {
      key: 'grunt',
      label: 'II. Plnohodnotný selský grunt & Dvorec',
      badgeClass: 'bg-emerald-800 text-white border-emerald-600',
      icon: '🏡',
      order: 2,
      desc: 'Zděný statek s potahem (koně), 6–15 ks skotu, stálá zemědělská čeleď či velký dvorcový areál'
    };
  }

  if (
    type.includes('zemědělská usedlost') ||
    type.includes('venkovská usedlost') ||
    type.includes('malorolnické') ||
    type.includes('živnost') ||
    type.includes('hostinec') ||
    type.includes('kovárna') ||
    type.includes('obchod') ||
    desc.includes('rolník') ||
    desc.includes('malorolník') ||
    ['cp5', 'cp14', 'cp15', 'cp16', 'cp17', 'cp18', 'cp20', 'cp21', 'cp27', 'cp46', 'cp110', 'medelske_cp1'].includes(id)
  ) {
    return {
      key: 'malorolnik',
      label: 'III. Malorolník, Chalupník & Živnost',
      badgeClass: 'bg-amber-600 text-white border-amber-700',
      icon: '🌾',
      order: 3,
      desc: 'Menší usedlost bez koní (orba s kravami), 2–5 ks skotu, řemeslnická živnost či práce rodiny'
    };
  }

  return {
    key: 'domkar',
    label: 'IV. Domkář & Dělník (Oberleithner, dráha, tkalci)',
    badgeClass: 'bg-slate-700 text-slate-100 border-slate-600',
    icon: '🏚️',
    order: 4,
    desc: 'Chalupa bez polního potahu, 1–4 byty, obživa v textilce Oberleithner, Saidl, na dráze, řemeslech'
  };
}

const DEMOGRAPHY_YEARS = [1921, 1910, 1900, 1890, 1880, 1869, 1857, 'all'];

const DEMOGRAPHY_BINS = [
  { key: '0-9', label: '0–9 let', sublabel: 'Kojenci a mladší děti', min: 0, max: 9, barClass: 'from-rose-500 to-pink-500' },
  { key: '10-19', label: '10–19 let', sublabel: 'Školáci, učni a mladá čeleď', min: 10, max: 19, barClass: 'from-indigo-500 to-blue-500' },
  { key: '20-29', label: '20–29 let', sublabel: 'Mladí dospělí, svobodná čeleď', min: 20, max: 29, barClass: 'from-teal-500 to-emerald-500' },
  { key: '30-39', label: '30–39 let', sublabel: 'Hospodáři a mladé rodiny', min: 30, max: 39, barClass: 'from-emerald-600 to-green-600' },
  { key: '40-49', label: '40–49 let', sublabel: 'Zkušení hospodáři a hospodyně', min: 40, max: 49, barClass: 'from-amber-500 to-yellow-500' },
  { key: '50-59', label: '50–59 let', sublabel: 'Zralí hospodáři na statcích', min: 50, max: 59, barClass: 'from-orange-500 to-amber-600' },
  { key: '60-69', label: '60–69 let', sublabel: 'Výměnkáři a starší hospodáři', min: 60, max: 69, barClass: 'from-stone-500 to-stone-600' },
  { key: '70+', label: '70+ let', sublabel: 'Vysoký věk a pamětníci', min: 70, max: 120, barClass: 'from-slate-700 to-stone-800' }
];

function getInhabitantsForYear(year) {
  const result = [];
  if (typeof housesData === "undefined") return result;

  housesData.forEach(h => {
    (h.census || []).forEach(c => {
      if (year === 'all' || c.year === year) {
        (c.inhabitants || []).forEach(i => {
          if (i.name === 'Hospodář rychty') return;
          const by = extractBirthYearFromDate(i.birthDate) || (Number.isFinite(Number(i.birthYear)) ? Number(i.birthYear) : null);
          if (by) {
            const age = c.year - by;
            if (age >= 0 && age <= 105) {
              result.push({
                name: i.name,
                age,
                birthDate: i.birthDate,
                birthYear: by,
                birthPlace: i.birthPlace || 'Dlouhomilov',
                relation: i.relation,
                occupation: i.occupation,
                houseId: h.id,
                houseNumber: h.number,
                houseName: h.localName,
                censusYear: c.year
              });
            }
          }
        });
      }
    });
  });
  return result;
}

function calculateHistogramData(year) {
  const inh = getInhabitantsForYear(year);
  if (inh.length === 0) return null;

  const ages = inh.map(x => x.age).sort((a, b) => a - b);
  const avgAge = (ages.reduce((s, x) => s + x, 0) / ages.length).toFixed(1);
  const medAge = ages[Math.floor(ages.length / 2)];
  
  const sortedInh = [...inh].sort((a, b) => a.age - b.age);
  const youngest = sortedInh[0];
  const oldest = sortedInh[sortedInh.length - 1];

  const binData = DEMOGRAPHY_BINS.map(b => {
    const count = inh.filter(x => x.age >= b.min && x.age <= b.max).length;
    const pct = ((count / inh.length) * 100).toFixed(1);
    return { ...b, count, pct: Number(pct) };
  });

  const maxCount = Math.max(...binData.map(b => b.count), 1);

  const kids = inh.filter(x => x.age <= 14).length;
  const adults = inh.filter(x => x.age >= 15 && x.age <= 59).length;
  const seniors = inh.filter(x => x.age >= 60).length;

  return {
    total: inh.length,
    year,
    avgAge,
    medAge,
    youngest,
    oldest,
    binData,
    maxCount,
    cohorts: {
      kids: { count: kids, pct: ((kids / inh.length) * 100).toFixed(1) },
      adults: { count: adults, pct: ((adults / inh.length) * 100).toFixed(1) },
      seniors: { count: seniors, pct: ((seniors / inh.length) * 100).toFixed(1) }
    }
  };
}

function calculateOriginsData(filter) {
  if (typeof housesData === "undefined") return null;

  const allInhabitants = [];
  housesData.forEach(h => {
    (h.census || []).forEach(c => {
      (c.inhabitants || []).forEach(i => {
        if (i.name === 'Hospodář rychty') return;
        const bp = (i.birthPlace || 'Dlouhomilov').trim();
        const dist = calculateDistanceKm(bp);
        const ring = getDistanceRing(dist);
        allInhabitants.push({
          name: i.name,
          birthDate: i.birthDate,
          birthPlace: bp,
          distKm: dist,
          ring,
          year: c.year,
          houseId: h.id,
          houseNumber: h.number,
          relation: i.relation,
          occupation: i.occupation
        });
      });
    });
  });

  const placeMap = {};
  allInhabitants.forEach(item => {
    const p = item.birthPlace;
    if (!placeMap[p]) {
      placeMap[p] = {
        name: p,
        distKm: item.distKm,
        ring: item.ring,
        count: 0,
        years: new Set(),
        houses: new Set(),
        people: []
      };
    }
    placeMap[p].count++;
    placeMap[p].years.add(item.year);
    placeMap[p].houses.add(item.houseNumber);
    placeMap[p].people.push(item);
  });

  const placesList = Object.values(placeMap);

  const rings = [
    { id: 'local', name: '0. Místní rodáci (Dlouhomilov, Medelské, Benkov)', maxKm: 2.0, count: 0, color: 'bg-emerald-600', badgeClass: 'bg-emerald-100 text-emerald-950 border-emerald-300' },
    { id: 'nearby', name: '1. Bezprostřední sousedství (do 7,5 km)', maxKm: 7.5, count: 0, color: 'bg-sky-600', badgeClass: 'bg-sky-100 text-sky-950 border-sky-300' },
    { id: 'broader', name: '2. Širší Zábřežsko & Šumpersko (7,5–18 km)', maxKm: 18.0, count: 0, color: 'bg-indigo-600', badgeClass: 'bg-indigo-100 text-indigo-950 border-indigo-300' },
    { id: 'regional', name: '3. Regionální Morava & Slezsko (18–60 km)', maxKm: 60.0, count: 0, color: 'bg-amber-600', badgeClass: 'bg-amber-100 text-amber-950 border-amber-300' },
    { id: 'distant', name: '4. Dálková migrace (> 60 km)', maxKm: 1000, count: 0, color: 'bg-rose-600', badgeClass: 'bg-rose-100 text-rose-950 border-rose-300' }
  ];

  allInhabitants.forEach(x => {
    if (x.distKm === null || x.distKm < 0) return;
    if (x.distKm <= 2.0) rings[0].count++;
    else if (x.distKm <= 7.5) rings[1].count++;
    else if (x.distKm <= 18.0) rings[2].count++;
    else if (x.distKm <= 60.0) rings[3].count++;
    else rings[4].count++;
  });

  const distantRecords = [
    {
      rank: 1,
      medal: '🥇',
      distKm: 1085.0,
      place: 'Oděsa (Ukrajina / Rusko)',
      region: 'Černomořský přístav',
      name: 'Marie Mračková (*1897)',
      year: 1921,
      houseId: 'benkov_cp12',
      houseNumber: '12',
      houseDisplay: 'Benkov čp. 12',
      role: 'Služebná děvečka při rolnictví',
      desc: 'Narozená v černomořském přístavu Oděsa v Ruském impériu. Po 1. světové válce doložena jako zemědělská děvečka na velkém selském gruntě Václava Mertlíka v Benkově.'
    },
    {
      rank: 2,
      medal: '🥈',
      distKm: 882.4,
      place: 'Barisciano & Paganica u L\'Aquily (Itálie)',
      region: 'Abruzzo, střední Itálie',
      name: 'Constantin Jammarelli (*1881) & Ascanio Piedra (*1882)',
      year: 1910,
      houseId: 'benkov_cp13',
      houseNumber: '13',
      houseDisplay: 'Benkov čp. 13',
      role: 'Zemědělští / stavební dělníci (italská obcovací řeč)',
      desc: 'Dva italští podnájemníci ze sousedních horských obcí Barisciano a Paganica v provincii L\'Aquila (Abruzzo), zapsaní ve sčítání lidu roku 1910 na usedlosti Johanna Rössnera v Benkově čp. 13.'
    },
    {
      rank: 3,
      medal: '🥉',
      distKm: 591.7,
      place: 'Havasmező / Poienile de sub Munte (Uhersko)',
      region: 'Marmaroš (dnes severní Rumunsko)',
      name: 'Markéta Eibová (*1902)',
      year: 1910,
      houseId: 'medelske_cp3',
      houseNumber: '3',
      houseDisplay: 'Medelské čp. 3 (čp. 37)',
      role: 'Schovanka / žákyně u čp. 37',
      desc: 'Osmiletá žákyně narozená v karpatském Havasmező v tehdejší Marmarošské župě Uherského království; při sčítání 1910 zapsána v osadě Medelské čp. 37.'
    },
    {
      rank: 4,
      medal: '4.',
      distKm: 566.2,
      place: 'Rachov (Rahovo, Podkarpatská Rus)',
      region: 'Karpatská Rus (dnes Ukrajina)',
      name: 'Franz Brandis (*1884)',
      year: 1921,
      houseId: 'benkov_cp21',
      houseNumber: '21',
      houseDisplay: 'Benkov čp. 21',
      role: 'Silniční dělník s rodinou',
      desc: 'Rodák z horského Rachova na Podkarpatské Rusi (tehdejší součást nově vzniklé ČSR). Žil v podnájmu s rodinou v Benkově čp. 21 jako silniční dělník.'
    },
    {
      rank: 5,
      medal: '5.',
      distKm: 407.3,
      place: 'Červená Voda u Jarosławi (Halič)',
      region: 'Halič / Předlitavsko (dnes Polsko)',
      name: 'Jan Kopanec (*1874)',
      year: 1910,
      houseId: 'cp105',
      houseNumber: '105',
      houseDisplay: 'Dlouhomilov čp. 105',
      role: 'Bělič příze (dělník v bělidle)',
      desc: 'Haličský dělník z okolí Jarosławi, který v roce 1910 žil v podnájmu na čp. 105 a pracoval v textilním bělidle.'
    },
    {
      rank: 6,
      medal: '6.',
      distKm: 315.4,
      place: 'Donawitz u Leobenu (Rakousko)',
      region: 'Štýrsko (Steiermark)',
      name: 'Marie Rotter (*1903)',
      year: 1921,
      houseId: 'benkov_cp20',
      houseNumber: '20',
      houseDisplay: 'Benkov čp. 20',
      role: 'Schovanka / válečný sirotek',
      desc: 'Narozená ve štýrském hutním středisku Donawitz; v r. 1921 evidována jako 18letá schovanka v domácnosti železničního zřízence Johanna Rottera.'
    },
    {
      rank: 7,
      medal: '7.',
      distKm: 307.2,
      place: 'Budapešť (Uhry)',
      region: 'Hlavní město Uherska',
      name: 'František Zemánek (*1908)',
      year: 1910,
      houseId: 'cp69',
      houseNumber: '69',
      houseDisplay: 'Dlouhomilov čp. 69',
      role: 'Dítě v Bytě č. 2',
      desc: 'Dvouletý chlapec narozený v Budapešti a zachycený při sčítání lidu 1910 s rodinou v Dlouhomilově čp. 69.'
    },
    {
      rank: 8,
      medal: '8.',
      distKm: 229.2,
      place: 'Chlumčany, okres Louny',
      region: 'Severozápadní Čechy',
      name: 'Anna Churavá (*1873)',
      year: 1890,
      houseId: 'cp29',
      houseNumber: '29',
      houseDisplay: 'čp. 29',
      role: 'Dcera tkadlce a podruha',
      desc: 'Rodina tkadlce Hynka Churavého/Churaného pracovala v severozápadních Čechách u Loun a kolem roku 1890 se vrátila na Moravu na statek čp. 29.'
    },
    {
      rank: 9,
      medal: '9.',
      distKm: 208.9,
      place: 'Perotín (Beroun)',
      region: 'Střední Čechy',
      name: 'František (*1822) & Terezie (*1832) Finclovi',
      year: 1869,
      houseId: 'cp29',
      houseNumber: '29',
      houseDisplay: 'čp. 29',
      role: 'Podnájemníci / majetníci v Bytě č. 2',
      desc: 'Manželský pár ze středočeského Perotína u Berouna žijící v podnájmu na selském gruntě Karla Dvořáka při sčítání 1869.'
    },
    {
      rank: 10,
      medal: '10.',
      distKm: 196.3,
      place: 'Hostivice u Prahy',
      region: 'Střední Čechy',
      name: 'Emil Merta (*1870)',
      year: 1880,
      houseId: 'cp7',
      houseNumber: '7',
      houseDisplay: 'čp. 7',
      role: 'Bratr mladého hospodáře rychty',
      desc: 'Desetiletý školák, bratr rychtáře Arnošta Merty. Otec Jan Merta řídil panské velkostatky v Čechách i na Moravě.'
    },
    {
      rank: 11,
      medal: '11.',
      distKm: 194.1,
      place: 'Vídeň (Rakousko)',
      region: 'Dolní Rakousy / Vídeň',
      name: 'Eduard Meixner ml. (*1913)',
      year: 1921,
      houseId: 'cp23',
      houseNumber: '23',
      houseDisplay: 'čp. 23',
      role: 'Syn samostatného krejčovského mistra',
      desc: 'Osmiletý žák narozený v císařské Vídni, kde rodina žila před válkou (s domovskou příslušností do Rakouska). Po válce se usadili na čp. 23.'
    },
    {
      rank: 12,
      medal: '12.',
      distKm: 165.7,
      place: 'Horní Cetno u Benátek n. J.',
      region: 'Střední Čechy (Mladoboleslavsko)',
      name: 'Antonie Körnerová (*1882)',
      year: 1921,
      houseId: 'benkov_cp14',
      houseNumber: '14',
      houseDisplay: 'Benkov čp. 14',
      role: 'Manželka rolníka Gustava Körnera',
      desc: 'Rodilá Středočeška z Mladoboleslavska provdaná za rolníka Gustava Körnera na gruntě v Benkově čp. 14.'
    },
    {
      rank: 13,
      medal: '13.',
      distKm: 151.2,
      place: 'Rosina u Žiliny (Slovensko)',
      region: 'Severozápadní Slovensko',
      name: 'Matheus (Matúš) Malica (*1880)',
      year: 1921,
      houseId: 'benkov_cp6',
      houseNumber: '6',
      houseDisplay: 'Benkov čp. 6',
      role: 'Čeledín při rolnictví',
      desc: 'Slovenský zemědělský dělník ze Žilinska sloužící u rolníka Josefa Körnera na gruntě v Benkově čp. 6.'
    },
    {
      rank: 14,
      medal: '14.',
      distKm: 136.2,
      place: 'Poděbrady',
      region: 'Střední Čechy (Polabí)',
      name: 'Karolína Dvořáková (*1840)',
      year: 1869,
      houseId: 'cp29',
      houseNumber: '29',
      houseDisplay: 'čp. 29',
      role: 'Manželka sedláka Karla Dvořáka',
      desc: 'Nevěsta ze středních Čech, švagrová právníka JUDr. Jana Dvořáka (*1826 Dlouhomilov čp. 29), advokáta a zemského poslance v Praze.'
    },
    {
      rank: 15,
      medal: '15.',
      distKm: 115.9,
      place: 'Úsobí u Havlíčkova Brodu',
      region: 'Českomoravská vrchovina',
      name: 'Františka Vachutková (*1888)',
      year: 1921,
      houseId: 'cp76',
      houseNumber: '76',
      houseDisplay: 'čp. 76',
      role: 'Manželka dělníka',
      desc: 'Rodačka z havlíčkobrodské Vysočiny provdaná do textilní dělnické rodiny na domkářském čp. 76.'
    },
    {
      rank: 16,
      medal: '16.',
      distKm: 111.4,
      place: 'Hrotovice u Třebíče',
      region: 'Jihozápadní Morava',
      name: 'Anna Mertová (*1868)',
      year: 1869,
      houseId: 'cp7',
      houseNumber: '7',
      houseDisplay: 'čp. 7',
      role: 'Dcera majitele dědičné rychty',
      desc: 'Roční dcera rychtáře Jana Merty (*1826), který v té době spravoval panský dvůr v Hrotovicích.'
    }
  ];

  return {
    allInhabitants,
    placesList,
    rings,
    distantRecords
  };
}

function calculateHouseholdsData(wealthFilter, searchQuery) {
  if (typeof housesData === "undefined") return [];

  const q = (searchQuery || '').toLowerCase().trim();
  const housesWithCensus = housesData.filter(h => h.census && h.census.length > 0);
  
  const results = [];
  housesWithCensus.forEach(h => {
    const wealth = getHouseWealthCategory(h);
    if (wealthFilter !== 'all' && wealth.key !== wealthFilter) return;

    const c21 = (h.census || []).find(c => c.year === 1921);
    const inh21 = c21 ? (c21.inhabitants || []) : [];
    
    const bytySet = new Set();
    let celedCount = 0;
    let vymenekCount = 0;
    const textilPersons = [];
    const remesloPersons = [];

    inh21.forEach(i => {
      const text = `${i.relation || ''} ${i.occupation || ''}`.toLowerCase();
      const m = text.match(/byt\s*(?:č\.\s*)?(\d+)/i);
      if (m) bytySet.add(m[1]);

      if (text.includes('čeled') || text.includes('služeb') || text.includes('děvečk') || text.includes('pacholek') || text.includes('pohůnek') || text.includes('slouž') || text.includes('služka')) {
        celedCount++;
      }
      if (text.includes('výměn')) {
        vymenekCount++;
      }
      if (text.includes('oberleithner') || text.includes('bělič') || text.includes('bělidl') || text.includes('tkadl') || text.includes('přadlen') || text.includes('strojník') || text.includes('továrn')) {
        textilPersons.push(`${i.name} (${i.occupation})`);
      } else if (text.includes('kovář') || text.includes('krejč') || text.includes('obuvník') || text.includes('stolař') || text.includes('zedník') || text.includes('železničář') || text.includes('dráh')) {
        remesloPersons.push(`${i.name} (${i.occupation})`);
      }
    });

    const aptCount = bytySet.size || (inh21.length > 0 ? 1 : 0);

    const livestockBadges = [];
    (h.census || []).forEach(c => {
      if (c.livestock) {
        const ls = c.livestock;
        const parts = [];
        if (ls.horses) parts.push(`🐴 ${ls.horses} kon${ls.horses === 1 ? 'ůň' : (ls.horses < 5 ? 'ě' : 'í')}`);
        if (ls.cattle) parts.push(`🐄 ${ls.cattle} skotu`);
        if (ls.pigs) parts.push(`🐖 ${ls.pigs} pras${ls.pigs === 1 ? 'e' : (ls.pigs < 5 ? 'ata' : 'at')}`);
        if (ls.poultry) parts.push(`🐔 ${ls.poultry} drůbeže`);
        if (ls.beehives) parts.push(`🐝 ${ls.beehives} včelstev`);
        if (parts.length > 0) {
          livestockBadges.push(`${c.year}: ${parts.join(', ')}`);
        }
      }
    });
    if (h.id === 'cp29') {
      livestockBadges.push('1869: 🐴 2 koně, 🐄 7 skotu, 🐑 49 ovcí');
    }

    const rowText = `${h.number} ${h.localName} ${h.type || ''} ${wealth.label} ${inh21.map(i=>i.name).join(' ')} ${textilPersons.join(' ')} ${remesloPersons.join(' ')}`.toLowerCase();
    if (q && !rowText.includes(q)) return;

    const settlement = h.settlement || h.part || (h.id.startsWith('benkov') ? 'Benkov' : (h.id.startsWith('medelske') ? 'Medelské' : 'Dlouhomilov'));
    const houseDisplay = settlement === 'Dlouhomilov' ? `čp. ${h.number}` : `${settlement} čp. ${h.number}`;

    results.push({
      houseId: h.id,
      houseNumber: h.number,
      houseDisplay,
      settlement,
      houseName: h.localName,
      wealth,
      pop1921: inh21.length,
      apt1921: aptCount,
      celedCount,
      vymenekCount,
      textilPersons,
      remesloPersons,
      livestockBadges
    });
  });

  return results;
}

function renderDemographySection() {
  const kpiContainer = document.getElementById("demography-kpi-grid");
  if (kpiContainer) {
    kpiContainer.innerHTML = renderDemographyKPIs();
  }

  renderDemographyCsuSection();

  renderDemographyYearFilters();
  renderDemographyAgeHistogram(currentDemographyYear);

  renderDemographyOriginFilters();
  renderDemographyOrigins(currentDemographyOriginFilter);

  renderDemographyWealthFilters();
  renderDemographyHouseholds();
}

function renderDemographyKPIs() {
  if (typeof housesData === "undefined") return "";

  const housesWithCensus = housesData.filter(h => h.census && h.census.length > 0);
  const totalCensusRecords = (typeof censusRegistryData !== "undefined" && Array.isArray(censusRegistryData))
    ? censusRegistryData.length
    : 5258;

  let total1910Pop = 0;
  let total1921Pop = 0;
  let total1921Apts = 0;
  let local1921Count = 0;
  let textileCount = 0;
  const textileHouses = new Set();
  const ages1921 = [];

  housesWithCensus.forEach(h => {
    const c10 = (h.census || []).find(c => c.year === 1910);
    if (c10 && c10.inhabitants) {
      total1910Pop += c10.inhabitants.filter(i => i && i.name && i.name !== 'Hospodář rychty').length;
    }
    const c21 = (h.census || []).find(c => c.year === 1921);
    if (c21 && c21.inhabitants && c21.inhabitants.length > 0) {
      const inh = c21.inhabitants;
      total1921Pop += inh.length;
      
      const aptSet = new Set();
      inh.forEach(i => {
        const m = `${i.relation || ''} ${i.occupation || ''}`.match(/Byt\s*(?:č\.\s*)?(\d+)/i);
        if (m) aptSet.add(m[1]);
        const bp = (i.birthPlace || '').trim();
        if (bp.startsWith('Dlouhomilov') || bp.startsWith('Benkov') || bp.startsWith('Medelské')) {
          local1921Count++;
        }
        const occText = `${i.relation || ''} ${i.occupation || ''}`.toLowerCase();
        if (occText.includes('oberleithner') || occText.includes('bělič') || occText.includes('bělidl') || occText.includes('tkadl') || occText.includes('přadlen') || occText.includes('strojník')) {
          textileCount++;
          textileHouses.add(h.id);
        }
        const by = extractBirthYearFromDate(i.birthDate);
        if (by) ages1921.push(1921 - by);
      });
      total1921Apts += (aptSet.size || 1);
    }
  });

  const avgHousePop = housesWithCensus.length ? (total1921Pop / housesWithCensus.length).toFixed(1) : "0";
  const avgAptPop = total1921Apts ? (total1921Pop / total1921Apts).toFixed(1) : "0";
  const localPct = total1921Pop ? ((local1921Count / total1921Pop) * 100).toFixed(1) : "0";
  const avgAge1921 = ages1921.length ? (ages1921.reduce((s, x) => s + x, 0) / ages1921.length).toFixed(1) : "0";
  const fmtNum = n => Number(n).toLocaleString('cs-CZ').replace(/\u00a0/g, ' ');

  return `
    <div class="p-4 rounded-xl bg-white border border-amber-200 shadow-2xs">
      <div class="flex items-center justify-between mb-1">
        <span class="text-xs font-bold text-amber-950 uppercase tracking-wider">Zpracovaná stavení & fond</span>
        <span class="text-xl">🏠</span>
      </div>
      <div class="text-2xl font-extrabold text-amber-950">${housesWithCensus.length} domů</div>
      <p class="text-xs text-slate-600 mt-1">
        <strong>${fmtNum(totalCensusRecords)} zápisů</strong> v 7 sčítáních (1857–1921). V r. 1921: <strong>${total1921Apts} bytů</strong>, <strong>${total1921Pop} obyv.</strong> (${avgHousePop}/dům, ${avgAptPop}/byt).
      </p>
    </div>

    <div class="p-4 rounded-xl bg-white border border-amber-200 shadow-2xs">
      <div class="flex items-center justify-between mb-1">
        <span class="text-xs font-bold text-amber-950 uppercase tracking-wider">Původ obyvatel</span>
        <span class="text-xl">🧭</span>
      </div>
      <div class="text-2xl font-extrabold text-emerald-800">${localPct} % rodáků</div>
      <p class="text-xs text-slate-600 mt-1">
        Dlouhomilov, Medelské a Benkov. Dalších <strong>22,6 %</strong> ze sousedství a regionu do 18 km.
      </p>
    </div>

    <div class="p-4 rounded-xl bg-white border border-amber-200 shadow-2xs">
      <div class="flex items-center justify-between mb-1">
        <span class="text-xs font-bold text-amber-950 uppercase tracking-wider">Věkový průměr v čase</span>
        <span class="text-xl">🎂</span>
      </div>
      <div class="text-2xl font-extrabold text-indigo-900">24,5 → ${avgAge1921} let</div>
      <p class="text-xs text-slate-600 mt-1">
        Stárnutí obce: vzestup z <strong>24,5 let</strong> (1869) přes <strong>27,8 let</strong> (1910) na <strong>${avgAge1921} let</strong> v r. 1921 (<strong>15,3 % seniorů 60+</strong>).
      </p>
    </div>

    <div class="p-4 rounded-xl bg-white border border-amber-200 shadow-2xs">
      <div class="flex items-center justify-between mb-1">
        <span class="text-xs font-bold text-amber-950 uppercase tracking-wider">Textil Oberleithner & tkalci</span>
        <span class="text-xl">🧵</span>
      </div>
      <div class="text-2xl font-extrabold text-amber-900">${textileCount} osob</div>
      <p class="text-xs text-slate-600 mt-1">
        V <strong>${textileHouses.size} ze ${housesWithCensus.length} domů</strong> žili běliči, přadleny a tkadleny bělidel fy <em>Oberleithner</em> i samostatní tkalci.
      </p>
    </div>
  `;
}

function switchDemographyTab(mode) {
  currentDemographyTab = mode;
  const csuW = document.getElementById("demography-csu-wrapper");
  const ageW = document.getElementById("demography-age-wrapper");
  const origW = document.getElementById("demography-origins-wrapper");
  const wealthW = document.getElementById("demography-wealth-wrapper");

  if (mode === "csu") {
    csuW?.classList.remove("hidden");
    ageW?.classList.add("hidden");
    origW?.classList.add("hidden");
    wealthW?.classList.add("hidden");
  } else if (mode === "histogram") {
    csuW?.classList.add("hidden");
    ageW?.classList.remove("hidden");
    origW?.classList.add("hidden");
    wealthW?.classList.add("hidden");
  } else if (mode === "origins") {
    csuW?.classList.add("hidden");
    ageW?.classList.add("hidden");
    origW?.classList.remove("hidden");
    wealthW?.classList.add("hidden");
  } else if (mode === "wealth") {
    csuW?.classList.add("hidden");
    ageW?.classList.add("hidden");
    origW?.classList.add("hidden");
    wealthW?.classList.remove("hidden");
  } else {
    csuW?.classList.remove("hidden");
    ageW?.classList.remove("hidden");
    origW?.classList.remove("hidden");
    wealthW?.classList.remove("hidden");
  }

  const tabs = ["all", "csu", "histogram", "origins", "wealth"];
  tabs.forEach(t => {
    const btn = document.getElementById(`demo-tab-${t}`);
    if (!btn) return;
    if (t === mode) {
      btn.className = "demo-tab-btn px-3 py-1.5 text-xs font-bold rounded-lg bg-amber-800 text-white transition-all shadow-xs flex items-center gap-1.5 cursor-pointer";
    } else {
      btn.className = "demo-tab-btn px-3 py-1.5 text-xs font-bold rounded-lg bg-white hover:bg-amber-200 text-slate-700 transition-all flex items-center gap-1.5 cursor-pointer";
    }
  });
}

// ==========================================================================
// HISTORICKÁ REKONSTRUKCE DLE POČTU DOMŮ (1275–1834) & DATA ČSÚ (1869–2026)
// ==========================================================================

const CSU_CENSUS_SERIES = [
  // I. Rekonstrukce před moderními sčítáními podle zjištěných počtů domů, urbářů, lánových rejstříků a katastrů (1275–1834)
  {
    year: "cca 1275", numYear: 1275, era: "pre1869", popEst: true, housesEst: true,
    dlPop: 40, dlHouses: 7, benPop: 0, benHouses: 0, totPop: 40, totHouses: 7,
    medNoteCs: "Počátek lokace v údolí: svobodný dvuor Dlúhomiluov + ~6 prvních osadníků ve 20leté lhůtě (Medelské a horský Benkov ještě nevznikly)",
    medNoteEn: "Initial clearing in the valley: Dlúhomil's free court + ~6 pioneer settlers under 20-year grace period (Medelské & upland Benkov not yet founded)",
    medNoteDe: "Rodungsbeginn im Tal: Freihof Dlúhomils + ~6 erste Siedler in der 20-jährigen Freifrist (Dreihofen & Benke existieren noch nicht)",
    tagCs: "Založení vsi (~7 usedl.)", tagEn: "Initial founding (~7 farms)", tagDe: "Ortsgründung (~7 Höfe)", highlight: "origin"
  },
  {
    year: "cca 1310", numYear: 1310, era: "pre1869", popEst: true, housesEst: true,
    dlPop: 95, dlHouses: 17, benPop: 30, benHouses: 5, totPop: 125, totHouses: 22,
    medNoteCs: "Po uplynutí lokační lhůty: Dl. ~14 osazených lánů + vznik Tří dvorů v Medelském (3) a počátek kolonizace horského Benkova (~5)",
    medNoteEn: "After grace period: ~14 settled hides in Dl. + founding of Three Farms in Medelské (3) & upland Benkov (~5)",
    medNoteDe: "Nach Ablauf der Freijahre: ~14 besetzte Hufen in Lom. + Gründung von Dreihofen (3 Höfe) & Beginn von Benke (~5)",
    tagCs: "Dosídlení & vznik Benkova", tagEn: "2nd wave: Medelské & Benkov", tagDe: "Ausbau: Dreihofen & Benke"
  },
  {
    year: "1356–1385", numYear: 1368, era: "pre1869", popEst: true, housesEst: true,
    dlPop: 165, dlHouses: 29, benPop: 50, benHouses: 9, totPop: 215, totHouses: 38,
    medNoteCs: "ZDO I (1356–68): dědické dělení na 3 vladycké dvorce, ~14 lánů, 9 chalup (curticulae), 2 krčmy, mlýn + Medelské (3) a Benkov (1385 ZDO IV)",
    medNoteEn: "Land Tables ZDO I (1356–68): split into 3 gentry courts, ~14 hides, 9 cottages (curticulae), 2 inns, mill + Medelské (3) & Benkov (1385)",
    medNoteDe: "Landtafel ZDO I (1356–68): Teilung in 3 Edelhöfe, ~14 Hufen, 9 Hofstätten (curticulae), 2 Schenken, Mühle + Dreihofen (3) & Benke (1385)",
    tagCs: "Předhusitský vrchol (ZDO)", tagEn: "Pre-Hussite peak (ZDO)", tagDe: "Vorhussitische Blüte (ZDO)"
  },
  {
    year: "1492", numYear: 1492, era: "pre1869", popEst: true, housesEst: true,
    dlPop: 135, dlHouses: 23, benPop: 45, benHouses: 8, totPop: 180, totHouses: 31,
    medNoteCs: "Půhony KP VI (1492): útěky poddaných z tunklovské roboty a pusté dědiny (pochop Duchek, rataj Števík); r. 1513 hrad Brníčko zbořený",
    medNoteEn: "1492 Court Citations (KP VI): serf flight from Tunkl corvée & deserted holdings (Duchek, Števík); 1513 Brníčko Castle in ruins",
    medNoteDe: "Ladungsbücher KP VI (1492): Untertanenflucht vor Tunkl-Robot & wüste Gründe (Duchek, Števík); 1513 Burg Brünles zerstört",
    tagCs: "Tunklovské pustnutí", tagEn: "Late-medieval dip", tagDe: "Spätmittelalter-Rückgang"
  },
  {
    year: "1585", numYear: 1585, era: "pre1869", popEst: true, housesEst: false,
    dlPop: 180, dlHouses: 27, benPop: 65, benHouses: 10, totPop: 245, totHouses: 37,
    medNoteCs: "Urbář Zábřeh (URB00015585): Dl. 22 usedlíků + Medelské 5 položek (8 držitelů se spoludržbami)",
    medNoteEn: "1585 Zábřeh Urbarium: Dl. 22 householders + Medelské 5 holdings (8 joint holders)",
    medNoteDe: "Urbar Hohenstadt 1585: Lom. 22 Angesessene + Dreihofen 5 Posten (8 Mitbesitzer)",
    tagCs: "Urbář 1585 (37 usedl.)", tagEn: "1585 Urbarium (37 farms)", tagDe: "Urbar 1585 (37 Höfe)"
  },
  {
    year: "1657", numYear: 1657, era: "pre1869", popEst: true, housesEst: false,
    dlPop: 155, dlHouses: 27, benPop: 60, benHouses: 10, totPop: 215, totHouses: 37,
    medNoteCs: "1. lánová vizitace (MZA D 1): 19 s poli + 8 domkařů, Medelské berně pod Dl., 0 poustek!",
    medNoteEn: "1st Hide Visitation (MZA D 1): 19 landed + 8 cottagers, Medelské merged for tax, 0 abandoned!",
    medNoteDe: "1. Lahnvisitation (MZA D 1): 19 Bauern + 8 Häusler, Dreihofen mitversteuert, 0 Ödungen!",
    tagCs: "Po 30leté válce (0 poustek)", tagEn: "Post-30Y War (0 deserted)", tagDe: "Nach 30j. Krieg (0 Ödungen)"
  },
  {
    year: "1677", numYear: 1677, era: "pre1869", popEst: true, housesEst: false,
    dlPop: 175, dlHouses: 27, benPop: 65, benHouses: 10, totPop: 240, totHouses: 37,
    medNoteCs: "Lánový rejstřík 13. 10. 1677 (MZA D 1, sign. 141): Dl. 830 měřic (39 koní), Benkov 310 měřic",
    medNoteEn: "1677 Hide Register (MZA D 1, sign. 141): Dl. 830 Metzen (39 horses), Benkov 310 Metzen",
    medNoteDe: "Lahnregister 13. 10. 1677 (MZA D 1): Lom. 830 Metzen (39 Pferde), Benke 310 Metzen",
    tagCs: "Lánový rejstřík 1677", tagEn: "1677 Hide Register", tagDe: "Lahnregister 1677"
  },
  {
    year: "1749", numYear: 1749, era: "pre1869", popEst: true, housesEst: false,
    dlPop: 245, dlHouses: 34, benPop: 120, benHouses: 18, totPop: 365, totHouses: 52,
    medNoteCs: "Tereziánské fasiony (MZA D 2-1): 27 starých usedlostí + 7 nových domkařů (+ 6 podruhů = 40 pol.)",
    medNoteEn: "Theresian Fassions (MZA D 2-1): 27 old holdings + 7 new cottagers (+ 6 lodgers = 40 entries)",
    medNoteDe: "Theresianische Fassionen (MZA D 2-1): 27 Altwirte + 7 Neuhäusler (+ 6 Inleute = 40 Posten)",
    tagCs: "Tereziánský katastr", tagEn: "Theresian Cadastre", tagDe: "Theresianischer Kataster"
  },
  {
    year: "1756", numYear: 1756, era: "pre1869", popEst: true, housesEst: false,
    dlPop: 320, dlHouses: 48, benPop: 140, benHouses: 21, totPop: 460, totHouses: 69,
    medNoteCs: "Lokální vizitace 17. 8. 1756 (MZA D 2-2): 48 položek vč. pastoušky; lnářství pro Šumperk",
    medNoteEn: "Local Visitation Aug 17, 1756 (MZA D 2-2): 48 holdings incl. herdsman's cottage; flax spinning",
    medNoteDe: "Lokalvisitation 17. 8. 1756 (MZA D 2-2): 48 Posten inkl. Hirtenhäusl; Garnspinnen für Schönberg",
    tagCs: "Růst chalup & lnářství", tagEn: "Cottager & flax boom", tagDe: "Häusler- & Garnboom"
  },
  {
    year: "1793", numYear: 1793, era: "pre1869", popEst: true, housesEst: false,
    dlPop: 535, dlHouses: 76, benPop: 211, benHouses: 27, totPop: 746, totHouses: 103,
    medNoteCs: "Po přečíslování 1770–1771 (Dl. ~68 + Medelské 8 čp.); Benkov přesně 27 domů / 211 obyv.; škola čp. 12",
    medNoteEn: "After 1770–71 house numbering (Dl. ~68 + Medelské 8); Benkov 27 houses / 211 inhab.; school No. 12",
    medNoteDe: "Nach Konskription 1770–71 (Lom. ~68 + Dreihofen 8); Benke exakt 27 Häuser / 211 Einw.; Schule Nr. 12",
    tagCs: "Topografie Schwoy 1793", tagEn: "1793 Schwoy Topography", tagDe: "Schwoy-Topographie 1793"
  },
  {
    year: "1834", numYear: 1834, era: "pre1869", popEst: false, housesEst: false,
    dlPop: 710, dlHouses: 88, benPop: 300, benHouses: 39, totPop: 1010, totHouses: 127,
    medNoteCs: "Stabilní katastr 1834: Dl. 80 domů (648 obyv.) + Medelské 8 domů (~62 os.); Benkov 39 domů / 300 obyv. (Wolny)",
    medNoteEn: "1834 Stable Cadastre: Dl. 80 houses (648 inhab.) + Medelské 8 houses (~62); Benkov 39 houses / 300 inhab. (Wolny)",
    medNoteDe: "Stabiler Kataster 1834: Lom. 80 Häuser (648 Einw.) + Dreihofen 8 Häuser (~62); Benke 39 Häuser / 300 Einw. (Wolny)",
    tagCs: "Stabilní katastr 1834", tagEn: "1834 Stable Cadastre", tagDe: "Stabiler Kataster 1834", highlight: "cadastre"
  },

  // II. Oficiální sčítání lidu a domů a roční bilance ČSÚ (1869–2026)
  { year: "1869", numYear: 1869, era: "csu", popEst: false, housesEst: false, dlPop: 663, dlHouses: 80, benPop: 319, benHouses: 42, totPop: 982, totHouses: 122, medNoteCs: "Maximum obyvatel Benkova (319)", medNoteEn: "Benkov population peak (319)", medNoteDe: "Einwohnermaximum Benke (319)", tagCs: "1. moderní sčítání", tagEn: "1st modern census", tagDe: "1. moderne Zählung" },
  { year: "1880", numYear: 1880, era: "csu", popEst: false, housesEst: false, dlPop: 699, dlHouses: 96, benPop: 283, benHouses: 44, totPop: 982, totHouses: 140, medNoteCs: "Dl. 543/75 + Medelské 156/21", medNoteEn: "Dl. 543/75 + Medelské 156/21", medNoteDe: "Lom. 543/75 + Dreihofen 156/21", tagCs: "", tagEn: "", tagDe: "" },
  { year: "1890", numYear: 1890, era: "csu", popEst: false, housesEst: false, dlPop: 772, dlHouses: 101, benPop: 273, benHouses: 44, totPop: 1045, totHouses: 145, medNoteCs: "Dl. 623/81 + Medelské 149/20", medNoteEn: "Dl. 623/81 + Medelské 149/20", medNoteDe: "Lom. 623/81 + Dreihofen 149/20", tagCs: "", tagEn: "", tagDe: "" },
  { year: "1900", numYear: 1900, era: "csu", popEst: false, housesEst: false, dlPop: 847, dlHouses: 106, benPop: 243, benHouses: 43, totPop: 1090, totHouses: 149, medNoteCs: "Dl. 710/86 + Medelské 137/20", medNoteEn: "Dl. 710/86 + Medelské 137/20", medNoteDe: "Lom. 710/86 + Dreihofen 137/20", tagCs: "", tagEn: "", tagDe: "" },
  { year: "1910", numYear: 1910, era: "csu", popEst: false, housesEst: false, dlPop: 901, dlHouses: 115, benPop: 250, benHouses: 45, totPop: 1151, totHouses: 160, medNoteCs: "Dl. 604/74 + Medelské 297/41", medNoteEn: "Dl. 604/74 + Medelské 297/41", medNoteDe: "Lom. 604/74 + Dreihofen 297/41", tagCs: "Historické maximum", tagEn: "All-time peak", tagDe: "Historisches Maximum", highlight: "peak" },
  { year: "1921", numYear: 1921, era: "csu", popEst: false, housesEst: false, dlPop: 820, dlHouses: 118, benPop: 211, benHouses: 45, totPop: 1031, totHouses: 163, medNoteCs: "domy: Dl. 76 + Medelské 42", medNoteEn: "houses: Dl. 76 + Medelské 42", medNoteDe: "Häuser: Lom. 76 + Dreihofen 42", tagCs: "1. sčítání ČSR", tagEn: "1st Czechoslovak census", tagDe: "1. Zählung der ČSR" },
  { year: "1930", numYear: 1930, era: "csu", popEst: false, housesEst: false, dlPop: 807, dlHouses: 132, benPop: 192, benHouses: 52, totPop: 999, totHouses: 184, medNoteCs: "Dl. 667/108 + Medelské 140/24", medNoteEn: "Dl. 667/108 + Medelské 140/24", medNoteDe: "Lom. 667/108 + Dreihofen 140/24", tagCs: "", tagEn: "", tagDe: "" },
  { year: "1950", numYear: 1950, era: "csu", popEst: false, housesEst: false, dlPop: 544, dlHouses: 141, benPop: 137, benHouses: 51, totPop: 681, totHouses: 192, medNoteCs: "", medNoteEn: "", medNoteDe: "", tagCs: "Po r. 1945 (−318 os.)", tagEn: "Post-WWII shift (−318)", tagDe: "Nach 1945 (−318 Einw.)" },
  { year: "1961", numYear: 1961, era: "csu", popEst: false, housesEst: false, dlPop: 591, dlHouses: 174, benPop: 98, benHouses: null, totPop: 689, totHouses: 174, medNoteCs: "domy 1961 sčítány společně", medNoteEn: "1961 houses counted jointly", medNoteDe: "Häuser 1961 gemeinsam gezählt", tagCs: "1960 připojen Benkov", tagEn: "1960 Benkov annexed", tagDe: "1960 Eingemeindung Benke" },
  { year: "1970", numYear: 1970, era: "csu", popEst: false, housesEst: false, dlPop: 528, dlHouses: 144, benPop: 70, benHouses: 20, totPop: 598, totHouses: 164, medNoteCs: "pouze trvale obydlené domy", medNoteEn: "permanently inhabited houses", medNoteDe: "dauerhaft bewohnte Häuser", tagCs: "", tagEn: "", tagDe: "" },
  { year: "1980", numYear: 1980, era: "csu", popEst: false, housesEst: false, dlPop: 447, dlHouses: 137, benPop: 44, benHouses: 17, totPop: 491, totHouses: 154, medNoteCs: "pouze trvale obydlené domy", medNoteEn: "permanently inhabited houses", medNoteDe: "dauerhaft bewohnte Häuser", tagCs: "", tagEn: "", tagDe: "" },
  { year: "1991", numYear: 1991, era: "csu", popEst: false, housesEst: false, dlPop: 436, dlHouses: 161, benPop: 38, benHouses: 32, totPop: 474, totHouses: 193, medNoteCs: "vč. rekreačních chalup", medNoteEn: "incl. recreational cottages", medNoteDe: "inkl. Ferienhäuser", tagCs: "", tagEn: "", tagDe: "" },
  { year: "2001", numYear: 2001, era: "csu", popEst: false, housesEst: false, dlPop: 424, dlHouses: 160, benPop: 34, benHouses: 32, totPop: 458, totHouses: 192, medNoteCs: "", medNoteEn: "", medNoteDe: "", tagCs: "Minimum Benkova (34)", tagEn: "Benkov low (34)", tagDe: "Tiefstand Benke (34)" },
  { year: "2011", numYear: 2011, era: "csu", popEst: false, housesEst: false, dlPop: 419, dlHouses: 162, benPop: 46, benHouses: 33, totPop: 465, totHouses: 195, medNoteCs: "", medNoteEn: "", medNoteDe: "", tagCs: "Oživení Benkova", tagEn: "Benkov revival", tagDe: "Wiederbelebung Benke" },
  { year: "2021", numYear: 2021, era: "csu", popEst: false, housesEst: false, dlPop: 407, dlHouses: 158, benPop: 51, benHouses: 35, totPop: 458, totHouses: 193, medNoteCs: "SLDB k 26. 3. 2021 (obvyklý pobyt)", medNoteEn: "2021 Census (usual residence)", medNoteDe: "Zensus 2021 (übl. Aufenthalt)", tagCs: "SLDB 2021", tagEn: "SLDB 2021", tagDe: "SLDB 2021", highlight: "sldb" },
  { year: "1. 1. 2026", numYear: 2026, era: "csu", popEst: false, housesEst: false, dlPop: null, dlHouses: null, benPop: null, benHouses: null, totPop: 454, totHouses: null, medNoteCs: "224 mužů / 230 žen (celá obec ZÚJ 533688)", medNoteEn: "224 men / 230 women (whole municipality 533688)", medNoteDe: "224 Männer / 230 Frauen (Gesamtgemeinde 533688)", tagCs: "Nejnovější bilance ČSÚ", tagEn: "Latest ČSÚ balance", tagDe: "Aktuellste ČSÚ-Bilanz", highlight: "latest" }
];

const CSU_RECENT_ANNUAL = [
  { date: "1. 1. 2021", total: 486, men: 238, women: 248, avgAge: "45,00", ageingIdx: "175,0 %", refYear: 2021 },
  { date: "1. 1. 2022", total: 478, men: 234, women: 244, avgAge: "45,15", ageingIdx: "178,9 %", refYear: 2022 },
  { date: "1. 1. 2023", total: 481, men: 237, women: 244, avgAge: "45,47", ageingIdx: "192,3 %", refYear: 2023 },
  { date: "1. 1. 2024", total: 477, men: 234, women: 243, avgAge: "46,01", ageingIdx: "200,0 %", refYear: 2024 },
  { date: "1. 1. 2025", total: 463, men: 232, women: 231, avgAge: "45,94", ageingIdx: "208,5 %", refYear: 2025 },
  { date: "1. 1. 2026", total: 454, men: 224, women: 230, avgAge: "45,94*", ageingIdx: "208,5 %*", refYear: 2026 }
];

const CSU_I18N = {
  cs: {
    tabLabel: "Vývoj & ČSÚ (1275–2026)",
    headerBadge: "Historická demografie (1275–2026) & Statistiky ČSÚ",
    headerMeta: (housesCnt, recCnt) => `1275–2026 • ${housesCnt} stavení v operátech (${recCnt} zápisů) • ČSÚ k 1. 1. 2026`,
    headerSubtitle: "Rekonstrukce osídlení a domovního fondu od středověké lokace vsi (cca 1275) přes urbář 1585, lánové rejstříky, tereziánský a stabilní katastr až po sčítání lidu a nejnovější bilanci ČSÚ (1. 1. 2026) pro Dlouhomilov, Medelské a Benkov.",
    sectionBadge: "750 let vývoje osídlení (1275–2026) • Archivní katastry & ČSÚ",
    sectionTitle: "Od lokátora Dlúhomila (cca 1275) po současnost: Domy a obyvatelé Dlouhomilova, Medelského a Benkova",
    sectionSub: "Propojení zjištěných počtů domů a usedlostí ze zemských desek (1356–1368), urbáře (1585), lánových rejstříků (1657–1677), tereziánského (1749–1756) a stabilního katastru (1834) s oficiálními sčítáními a roční bilancí ČSÚ (ZÚJ 533688, výměra 10,43 km²).",
    mdDocBtn: "📄 Studie .md ↗",
    mermaidBtn: "📊 Mermaid grafy (GitHub) ↗",
    kpi1Title: "Obyvatelstvo k 1. 1. 2026",
    kpi1Value: "454 obyv.",
    kpi1Sub: "<strong>224 mužů</strong> (49,3 %) a <strong>230 žen</strong> (50,7 %). Hustota zalidnění <strong>43,5 obyv./km²</strong> (výměra 1 043,36 ha).",
    kpi1Foot: "Řada k 1. 1.: 2021: 486 → 2023: 481 → 2025: 463 → 2026: 454",
    kpi2Title: "Věk & Stárnutí (31. 12. 2025)",
    kpi2Value: "45,94 let",
    kpi2Sub: "Muži <strong>44,45 let</strong>, ženy <strong>47,39 let</strong> (v r. 1921 jen 32,1 let). <strong>Index stáří 208,5 %</strong> (růst ze 175,0 % v r. 2021).",
    kpi2Foot: "0–14 let: 59 (13,0 %) • 15–64: 272 (59,9 %) • 65+: 123 (27,1 %)",
    kpi3Title: "Pohyb obyvatel za rok 2025",
    kpi3Value: "−9 osob",
    kpi3Sub: "Narození <strong>3</strong>, zemřelí <strong>8</strong> (přirozená měna <strong>−5</strong>). Přistěhovalí <strong>10</strong>, vystěhovalí <strong>14</strong> (migrační saldo <strong>−4</strong>).",
    kpi3Foot: "Střední stav (1. 7. 2025): 457 obyv. • Sňatky: 0 • Rozvody: 2",
    kpi4Title: "Domy 1275 → 2021 (SLDB)",
    kpi4Value: "~7 → 193 domů",
    kpi4Sub: "Ze <strong>~7 prvních usedlostí</strong> při založení (1275) a <strong>37 gruntů</strong> (1585–1677) na <strong>193 RD</strong> (2021: 157 obydl.).",
    kpi4Foot: "1756: 69 d. • 1834: 127 d. • 1910: 160 d. • 2021: 230 bytů",
    splitHeading: "Srovnání místních částí obce podle Sčítání lidu, domů a bytů (SLDB 2021)",
    splitMethodBadge: "Metodika ČSÚ: Roční bilance (2025/2026) sleduje obec jako celek (ZÚJ 533688); rozpad na Dlouhomilov a Benkov poskytuje SLDB 2021.",
    dlTitle: "Část obce Dlouhomilov (vč. osady Medelské)",
    dlCodes: "Kód části 026646 • k. ú. Dlouhomilov (626643) • 7,31 km² (730,72 ha)",
    dlStats: [
      ["Obvykle bydlící (SLDB 2021)", "407 obyv. (88,9 %)"],
      ["Hlášení k trvalému pobytu", "433 osob"],
      ["Domovní fond celkem", "158 rodinných domů"],
      ["Obydlené vs. neobydlené domy", "134 obydl. (84,8 %) / 24 neobydl. (15,2 %)"],
      ["Bytový fond", "193 bytů (156 obydlených – 80,8 %)"]
    ],
    dlBarLabel: "Podíl trvale obydlených domů: 84,8 % (134 ze 158)",
    dlNote: "Osada <strong>Medelské</strong> není v RÚIAN samostatnou částí obce – její obyvatelé i domy jsou započteni v části Dlouhomilov.",
    benTitle: "Část obce Benkov (připojena r. 1960)",
    benCodes: "Kód části 026638 • k. ú. Benkov u Dlouhomilova (626635) • 3,13 km² (312,65 ha)",
    benStats: [
      ["Obvykle bydlící (SLDB 2021)", "51 obyv. (11,1 %)"],
      ["Hlášení k trvalému pobytu", "49 osob"],
      ["Domovní fond celkem", "35 rodinných domů"],
      ["Obydlené vs. neobydlené domy", "23 obydl. (65,7 %) / 12 neobydl. (34,3 %)"],
      ["Bytový fond", "37 bytů (23 obydlených – 62,2 %)"]
    ],
    benBarLabel: "Podíl trvale obydlených domů: 65,7 % • Rekreační/neobydlené: 34,3 % (12 z 35)",
    benNote: "Po historickém minimu v roce 2001 (<strong>34 obyv.</strong>) zaznamenal Benkov oživení na <strong>46</strong> (2011) a <strong>51 obyv.</strong> (2021); třetina domů slouží k rekreaci.",
    econTitle: "Ekonomická aktivita obyvatel obce (SLDB 2021, N = 458):",
    econPills: [
      "💼 Pracovní síla: 200 (186 zam. [vč. 22 prac. důchodců] + 14 nezam.)",
      "🧓 Nepracující důchodci: 136",
      "🎓 Žáci a studenti: 69",
      "👶 Rodičovská dovolená: 13",
      "🏠 Předškolní děti a v domácnosti: 36"
    ],
    chartTitle: "Historická křivka osídlení a domovního fondu (1275–2026)",
    span1275: "🏰 1275–2026 (750 let)",
    span1585: "📜 1585–2026 (Urbář → ČSÚ)",
    span1869: "📊 1869–2026 (Pouze ČSÚ)",
    viewSvg: "📈 Křivkový graf SVG",
    viewStacked: "📊 Skládané pruhy",
    viewBenkov: "⛰️ Detail Benkova",
    viewHouses: "🏘️ Domovní fond",
    viewRecent: "📅 Roční bilance (2021–2026)",
    svgLayerTot: "Obec celkem (obyv.)",
    svgLayerDl: "Dlouhomilov (vč. Medelského)",
    svgLayerBen: "Benkov",
    svgLayerHouses: "Domy / usedlosti celkem (pravá osa)",
    svgAxisLeft: "Obyvatelé (levá osa 0–1 200)",
    svgAxisRight: "Domy / usedlosti (pravá osa 0–240)",
    svgPre1869Zone: "1275–1869: Rekonstrukce dle zjištěných počtů domů, urbáře a katastrů (přerušovaně = odhad obyv.)",
    svgCsuZone: "1869–2026: Sčítání ČSÚ",
    svgHint: "💡 Přerušovaná část křivek obyvatel (1275–1869) vyjadřuje demografický odhad ze zjištěných počtů usedlostí/domů a dobových topografií (Schwoy, Wolny); plná křivka (1869–2026) úřední sčítání ČSÚ. Najeďte myší na libovolný rok.",
    svgMilestones1275: [
      { yr: 1275, label: "1275: lokace (~7 d.)" },
      { yr: 1585, label: "1585: urbář (37 d.)" },
      { yr: 1657, label: "1657: 0 poustek" },
      { yr: 1756, label: "1756: lnářství (69 d.)" },
      { yr: 1834, label: "1834: katastr (127 d.)" },
      { yr: 1910, label: "1910: max. 1 151" },
      { yr: 1945.5, label: "1945: odsun" }
    ],
    svgMilestones1585: [
      { yr: 1585, label: "1585: urbář (37 d.)" },
      { yr: 1657, label: "1657: 0 poustek" },
      { yr: 1756, label: "1756: 69 domů" },
      { yr: 1834, label: "1834: 127 domů" },
      { yr: 1910, label: "1910: max. 1 151" },
      { yr: 1945.5, label: "1945: odsun" },
      { yr: 2001, label: "2001: min. Ben." }
    ],
    svgMilestones1869: [
      { yr: 1910, label: "1910: max. 1 151" },
      { yr: 1945.5, label: "1945/46: odsun" },
      { yr: 1960, label: "1960: +Benkov" },
      { yr: 2001, label: "2001: min. Ben. (34)" }
    ],
    svgPerHouse: "os./dům",
    estBadge: "rekonstrukce z počtu domů",
    legendDl: "Dlouhomilov (vč. Medelského)",
    legendBen: "Benkov",
    legendTot: "Celá obec (roční bilance ČSÚ)",
    legendHousesDl: "Domy / usedlosti Dlouhomilov",
    legendHousesBen: "Domy / usedlosti Benkov",
    tableHeaderTitle: "Kompletní přehled počtu domů a obyvatel od lokace vsi po současnost (1275–2026)",
    tableSubCount: "11 historických horizontů (1275–1834) + 15 sčítání lidu + bilance 1. 1. 2026",
    thYear: "Rok / Období",
    thDlPop: "Obyv. Dlouhomilov",
    thDlHouses: "Domy Dl.",
    thBenPop: "Obyv. Benkov",
    thBenHouses: "Domy Ben.",
    thTotPop: "Obec celkem",
    thTotHouses: "Domy celkem",
    thNotes: "Pramen / Detail Medelského & metodická poznámka (~ = odhad z počtu domů)",
    recentColDate: "Stav k datu (OBY02A)",
    recentColTot: "Celkem obyvatel",
    recentColMen: "Muži",
    recentColWomen: "Ženy",
    recentColAvgAge: "Průměrný věk (31. 12.)",
    recentColAgeing: "Index stáří 65+/0–14",
    recentFoot: "* Průměrný věk a index stáří u řádku 1. 1. 2026 vyjadřují koncový stav k 31. 12. 2025 (59 dětí 0–14 let, 272 osob 15–64 let, 123 seniorů 65+).",
    sourcesLabel: "Ověřené primární prameny (1275–2026):"
  },
  en: {
    tabLabel: "750-Year Curve & ČSÚ (1275–2026)",
    headerBadge: "Historical Demography (1275–2026) & ČSÚ Statistics",
    headerMeta: (housesCnt, recCnt) => `1275–2026 • ${housesCnt} archival homesteads (${recCnt} records) • ČSÚ Jan 1, 2026`,
    headerSubtitle: "Reconstructing settlement and housing growth from the medieval foundation (c. 1275) through the 1585 Urbarium, Hide Registers, Theresian and Stable Cadastres up to modern censuses and the Jan 1, 2026 ČSÚ balance.",
    sectionBadge: "750 Years of Settlement (1275–2026) • Archival Cadastres & ČSÚ",
    sectionTitle: "From Founder Dlúhomil (c. 1275) to Today: Houses & Population of Dlouhomilov, Medelské & Benkov",
    sectionSub: "Linking documented house and holding counts from Moravian Land Tables (1356–1368), the 1585 Urbarium, Hide Registers (1657–1677), Theresian (1749–1756) and Stable Cadastres (1834) with official ČSÚ censuses (municipality 533688, 10.43 km²).",
    mdDocBtn: "📄 Study .md ↗",
    mermaidBtn: "📊 Mermaid Charts (GitHub) ↗",
    kpi1Title: "Population on Jan 1, 2026",
    kpi1Value: "454 inhab.",
    kpi1Sub: "<strong>224 men</strong> (49.3%) and <strong>230 women</strong> (50.7%). Population density <strong>43.5 inhab./km²</strong> (area 1,043.36 ha).",
    kpi1Foot: "Jan 1 series: 2021: 486 → 2023: 481 → 2025: 463 → 2026: 454",
    kpi2Title: "Age & Ageing (Dec 31, 2025)",
    kpi2Value: "45.94 yrs",
    kpi2Sub: "Men <strong>44.45 yrs</strong>, women <strong>47.39 yrs</strong> (vs. 32.1 yrs in 1921). <strong>Ageing index 208.5%</strong> (up from 175.0% in 2021).",
    kpi2Foot: "0–14 yrs: 59 (13.0%) • 15–64: 272 (59.9%) • 65+: 123 (27.1%)",
    kpi3Title: "Vital & Migration Balance (2025)",
    kpi3Value: "−9 persons",
    kpi3Sub: "Live births <strong>3</strong>, deaths <strong>8</strong> (natural change <strong>−5</strong>). Immigrants <strong>10</strong>, emigrants <strong>14</strong> (net migration <strong>−4</strong>).",
    kpi3Foot: "Mid-year pop. (Jul 1, 2025): 457 • Marriages: 0 • Divorces: 2",
    kpi4Title: "Houses 1275 → 2021 (SLDB)",
    kpi4Value: "~7 → 193 houses",
    kpi4Sub: "From <strong>~7 pioneer holdings</strong> at founding (c. 1275) and <strong>37 farms</strong> (1585–1677) to <strong>193 family houses</strong> (2021).",
    kpi4Foot: "1756: 69 h. • 1834: 127 h. • 1910: 160 h. • 2021: 230 dwellings",
    splitHeading: "Comparison of Municipal Parts in the 2021 Population & Housing Census (SLDB 2021)",
    splitMethodBadge: "ČSÚ Methodology: Annual balances (2025/2026) cover the whole municipality (533688); settlement-level splits come from the 2021 Census.",
    dlTitle: "Part Dlouhomilov (incl. hamlet of Medelské)",
    dlCodes: "Part code 026646 • Cadastre Dlouhomilov (626643) • 7.31 km² (730.72 ha)",
    dlStats: [
      ["Usual residents (2021 Census)", "407 inhab. (88.9%)"],
      ["Registered permanent residents", "433 persons"],
      ["Total housing stock", "158 family houses"],
      ["Inhabited vs. uninhabited houses", "134 inhab. (84.8%) / 24 uninhab. (15.2%)"],
      ["Dwelling stock", "193 dwellings (156 inhabited – 80.8%)"]
    ],
    dlBarLabel: "Permanently inhabited houses: 84.8% (134 of 158)",
    dlNote: "The hamlet of <strong>Medelské</strong> is statistically part of Dlouhomilov (026646) rather than a separate RÚIAN municipal part.",
    benTitle: "Part Benkov (annexed in 1960)",
    benCodes: "Part code 026638 • Cadastre Benkov u Dlouhomilova (626635) • 3.13 km² (312.65 ha)",
    benStats: [
      ["Usual residents (2021 Census)", "51 inhab. (11.1%)"],
      ["Registered permanent residents", "49 persons"],
      ["Total housing stock", "35 family houses"],
      ["Inhabited vs. uninhabited houses", "23 inhab. (65.7%) / 12 uninhab. (34.3%)"],
      ["Dwelling stock", "37 dwellings (23 inhabited – 62.2%)"]
    ],
    benBarLabel: "Inhabited houses: 65.7% • Recreational/uninhabited: 34.3% (12 of 35)",
    benNote: "After hitting an all-time low in 2001 (<strong>34 inhab.</strong>), Benkov rebounded to <strong>46</strong> (2011) and <strong>51 residents</strong> (2021), with a third of houses used as cottages.",
    econTitle: "Economic Activity of Residents (2021 Census, N = 458):",
    econPills: [
      "💼 Labour force: 200 (186 employed [incl. 22 working pensioners] + 14 unemployed)",
      "🧓 Non-working pensioners: 136",
      "🎓 Pupils & students: 69",
      "👶 Parental leave: 13",
      "🏠 Preschoolers & homemakers: 36"
    ],
    chartTitle: "750-Year Settlement & Housing Trajectory (1275–2026)",
    span1275: "🏰 1275–2026 (750 yrs)",
    span1585: "📜 1585–2026 (Urbarium → ČSÚ)",
    span1869: "📊 1869–2026 (ČSÚ Censuses)",
    viewSvg: "📈 Interactive SVG Curves",
    viewStacked: "📊 Stacked Bars",
    viewBenkov: "⛰️ Benkov Detail",
    viewHouses: "🏘️ Housing Stock",
    viewRecent: "📅 Annual Balance (2021–2026)",
    svgLayerTot: "Municipality Total (pop.)",
    svgLayerDl: "Dlouhomilov (incl. Medelské)",
    svgLayerBen: "Benkov",
    svgLayerHouses: "Total Houses / Holdings (right axis)",
    svgAxisLeft: "Population (left axis 0–1,200)",
    svgAxisRight: "Houses / Holdings (right axis 0–240)",
    svgPre1869Zone: "1275–1869: Reconstructed from documented house counts, urbaria & cadastres (dashed = pop. est.)",
    svgCsuZone: "1869–2026: Official ČSÚ",
    svgHint: "💡 Dashed population segments (1275–1869) represent demographic estimates derived from documented house/holding counts and historical topographies (Schwoy, Wolny); solid curves (1869–2026) show official ČSÚ censuses.",
    svgMilestones1275: [
      { yr: 1275, label: "c.1275: founded (~7 h.)" },
      { yr: 1585, label: "1585: urbarium (37 h.)" },
      { yr: 1657, label: "1657: 0 deserted" },
      { yr: 1756, label: "1756: flax boom (69 h.)" },
      { yr: 1834, label: "1834: cadastre (127 h.)" },
      { yr: 1910, label: "1910: peak 1,151" },
      { yr: 1945.5, label: "1945: expulsion" }
    ],
    svgMilestones1585: [
      { yr: 1585, label: "1585: urbarium (37 h.)" },
      { yr: 1657, label: "1657: 0 deserted" },
      { yr: 1756, label: "1756: 69 houses" },
      { yr: 1834, label: "1834: 127 houses" },
      { yr: 1910, label: "1910: peak 1,151" },
      { yr: 1945.5, label: "1945: expulsion" },
      { yr: 2001, label: "2001: Ben. low" }
    ],
    svgMilestones1869: [
      { yr: 1910, label: "1910: peak 1,151" },
      { yr: 1945.5, label: "1945/46: expulsion" },
      { yr: 1960, label: "1960: +Benkov" },
      { yr: 2001, label: "2001: Ben. low (34)" }
    ],
    svgPerHouse: "pers./house",
    estBadge: "house-count estimate",
    legendDl: "Dlouhomilov (incl. Medelské)",
    legendBen: "Benkov",
    legendTot: "Whole Municipality (annual ČSÚ balance)",
    legendHousesDl: "Dlouhomilov Houses / Holdings",
    legendHousesBen: "Benkov Houses / Holdings",
    tableHeaderTitle: "Complete Table of Houses & Population from Medieval Foundation to Today (1275–2026)",
    tableSubCount: "11 historical horizons (1275–1834) + 15 decennial censuses + Jan 1, 2026 balance",
    thYear: "Year / Horizon",
    thDlPop: "Pop. Dlouhomilov",
    thDlHouses: "Houses Dl.",
    thBenPop: "Pop. Benkov",
    thBenHouses: "Houses Ben.",
    thTotPop: "Municipality Total",
    thTotHouses: "Total Houses",
    thNotes: "Source / Medelské Breakdown & Methodological Note (~ = estimated from houses)",
    recentColDate: "Reference Date (OBY02A)",
    recentColTot: "Total Population",
    recentColMen: "Men",
    recentColWomen: "Women",
    recentColAvgAge: "Average Age (Dec 31)",
    recentColAgeing: "Ageing Index 65+/0–14",
    recentFoot: "* Average age and ageing index on the Jan 1, 2026 row reflect the Dec 31, 2025 state (59 children aged 0–14, 272 aged 15–64, 123 seniors 65+).",
    sourcesLabel: "Verified Primary Sources (1275–2026):"
  },
  de: {
    tabLabel: "750-Jahre-Kurve & ČSÚ (1275–2026)",
    headerBadge: "Historische Demografie (1275–2026) & Statistikamt ČSÚ",
    headerMeta: (housesCnt, recCnt) => `1275–2026 • ${housesCnt} Anwesen in Zählbögen (${recCnt} Einträge) • ČSÚ zum 1. 1. 2026`,
    headerSubtitle: "Siedlungs- und Häuserentwicklung seit der mittelalterlichen Ortsgründung (um 1275) über Urbar 1585, Lahnregister, Theresianischen und Stabilen Kataster bis zu den Volkszählungen und der ČSÚ-Bilanz zum 1. 1. 2026.",
    sectionBadge: "750 Jahre Siedlungsentwicklung (1275–2026) • Kataster & ČSÚ",
    sectionTitle: "Vom Gründer Dlúhomil (um 1275) bis heute: Häuser & Bevölkerung in Lomigsdorf, Dreihofen & Benke",
    sectionSub: "Verknüpfung der ermittelten Häuser- und Hofzahlen aus Landtafel (1356–1368), Urbar (1585), Lahnregister (1657–1677), Theresianischem (1749–1756) und Stabilem Kataster (1834) mit den amtlichen ČSÚ-Daten (Gemeinde 533688, 10,43 km²).",
    mdDocBtn: "📄 Studie .md ↗",
    mermaidBtn: "📊 Mermaid-Grafiken (GitHub) ↗",
    kpi1Title: "Bevölkerung zum 1. 1. 2026",
    kpi1Value: "454 Einw.",
    kpi1Sub: "<strong>224 Männer</strong> (49,3 %) und <strong>230 Frauen</strong> (50,7 %). Bevölkerungsdichte <strong>43,5 Einw./km²</strong> (Fläche 1 043,36 ha).",
    kpi1Foot: "Reihe zum 1. 1.: 2021: 486 → 2023: 481 → 2025: 463 → 2026: 454",
    kpi2Title: "Alter & Alterung (31. 12. 2025)",
    kpi2Value: "45,94 J.",
    kpi2Sub: "Männer <strong>44,45 J.</strong>, Frauen <strong>47,39 J.</strong> (1921 nur 32,1 J.). <strong>Altersindex 208,5 %</strong> (Anstieg von 175,0 % im Jahr 2021).",
    kpi2Foot: "0–14 J.: 59 (13,0 %) • 15–64: 272 (59,9 %) • 65+: 123 (27,1 %)",
    kpi3Title: "Bevölkerungsbewegung 2025",
    kpi3Value: "−9 Pers.",
    kpi3Sub: "Lebendgeborene <strong>3</strong>, Gestorbene <strong>8</strong> (natürl. Saldo <strong>−5</strong>). Zuzüge <strong>10</strong>, Fortzüge <strong>14</strong> (Wanderungssaldo <strong>−4</strong>).",
    kpi3Foot: "Mittlerer Stand (1. 7. 2025): 457 Einw. • Eheschließungen: 0 • Scheidungen: 2",
    kpi4Title: "Häuser 1275 → 2021 (Zensus)",
    kpi4Value: "~7 → 193 Häuser",
    kpi4Sub: "Von <strong>~7 ersten Rodungshöfen</strong> (um 1275) und <strong>37 Anwesen</strong> (1585–1677) auf <strong>193 Familienhäuser</strong> (2021).",
    kpi4Foot: "1756: 69 H. • 1834: 127 H. • 1910: 160 H. • 2021: 230 Wohnungen",
    splitHeading: "Vergleich der Ortsteile laut Volks-, Häuser- und Wohnungszählung (SLDB 2021)",
    splitMethodBadge: "ČSÚ-Methodik: Jahresbilanzen (2025/2026) erfassen die Gesamtgemeinde (533688); die Aufschlüsselung nach Ortsteilen stammt aus dem Zensus 2021.",
    dlTitle: "Ortsteil Dlouhomilov / Lomigsdorf (inkl. Dreihofen / Medelské)",
    dlCodes: "Ortsteilcode 026646 • Kataster Dlouhomilov (626643) • 7,31 km² (730,72 ha)",
    dlStats: [
      ["Üblicher Aufenthalt (Zensus 2021)", "407 Einw. (88,9 %)"],
      ["Gemeldeter Hauptwohnsitz", "433 Personen"],
      ["Hausbestand gesamt", "158 Familienhäuser"],
      ["Bewohnte vs. unbewohnte Häuser", "134 bew. (84,8 %) / 24 unbew. (15,2 %)"],
      ["Wohnungsbestand", "193 Wohnungen (156 bewohnt – 80,8 %)"]
    ],
    dlBarLabel: "Dauerhaft bewohnte Häuser: 84,8 % (134 von 158)",
    dlNote: "Die Ansiedlung <strong>Dreihofen (Medelské)</strong> bildet im Register RÚIAN keinen eigenen Ortsteil und wird unter Dlouhomilov (026646) erfasst.",
    benTitle: "Ortsteil Benkov / Benke (1960 eingemeindet)",
    benCodes: "Ortsteilcode 026638 • Kataster Benkov u Dlouhomilova (626635) • 3,13 km² (312,65 ha)",
    benStats: [
      ["Üblicher Aufenthalt (Zensus 2021)", "51 Einw. (11,1 %)"],
      ["Gemeldeter Hauptwohnsitz", "49 Personen"],
      ["Hausbestand gesamt", "35 Familienhäuser"],
      ["Bewohnte vs. unbewohnte Häuser", "23 bew. (65,7 %) / 12 unbew. (34,3 %)"],
      ["Wohnungsbestand", "37 Wohnungen (23 bewohnt – 62,2 %)"]
    ],
    benBarLabel: "Bewohnte Häuser: 65,7 % • Erholung/unbewohnt: 34,3 % (12 von 35)",
    benNote: "Nach dem historischen Tiefstand im Jahr 2001 (<strong>34 Einw.</strong>) wuchs Benke wieder auf <strong>46</strong> (2011) und <strong>51 Einwohner</strong> (2021); ein Drittel der Häuser dient der Erholung.",
    econTitle: "Erwerbsstruktur der Einwohner (Zensus 2021, N = 458):",
    econPills: [
      "💼 Erwerbspersonen: 200 (186 Erwerbstätige [inkl. 22 arb. Rentner] + 14 Arbeitslose)",
      "🧓 Nicht erwerbstätige Rentner: 136",
      "🎓 Schüler & Studierende: 69",
      "👶 Elternzeit: 13",
      "🏠 Vorschulkinder & im Haushalt: 36"
    ],
    chartTitle: "750-jährige Siedlungs- und Häuserkurve (1275–2026)",
    span1275: "🏰 1275–2026 (750 J.)",
    span1585: "📜 1585–2026 (Urbar → ČSÚ)",
    span1869: "📊 1869–2026 (Nur ČSÚ)",
    viewSvg: "📈 SVG-Kurvendiagramm",
    viewStacked: "📊 Stapelbalken",
    viewBenkov: "⛰️ Detail Benke",
    viewHouses: "🏘️ Hausbestand",
    viewRecent: "📅 Jahresbilanz (2021–2026)",
    svgLayerTot: "Gemeinde gesamt (Einw.)",
    svgLayerDl: "Lomigsdorf (inkl. Dreihofen)",
    svgLayerBen: "Benke / Benkov",
    svgLayerHouses: "Häuser / Höfe gesamt (rechte Achse)",
    svgAxisLeft: "Einwohner (linke Achse 0–1 200)",
    svgAxisRight: "Häuser / Höfe (rechte Achse 0–240)",
    svgPre1869Zone: "1275–1869: Rekonstruktion nach Häuserzahlen, Urbar & Katastern (gestrichelt = Einw.-Schätzung)",
    svgCsuZone: "1869–2026: ČSÚ-Zählungen",
    svgHint: "💡 Gestrichelte Bevölkerungskurven (1275–1869) zeigen Schätzungen anhand der überlieferten Hof-/Häuserzahlen und Topographien (Schwoy, Wolny); durchgezogene Linien (1869–2026) amtliche ČSÚ-Volkszählungen.",
    svgMilestones1275: [
      { yr: 1275, label: "1275: Gründung (~7 H.)" },
      { yr: 1585, label: "1585: Urbar (37 H.)" },
      { yr: 1657, label: "1657: 0 Ödungen" },
      { yr: 1756, label: "1756: Garnboom (69 H.)" },
      { yr: 1834, label: "1834: Kataster (127 H.)" },
      { yr: 1910, label: "1910: Max. 1 151" },
      { yr: 1945.5, label: "1945: Vertreibung" }
    ],
    svgMilestones1585: [
      { yr: 1585, label: "1585: Urbar (37 H.)" },
      { yr: 1657, label: "1657: 0 Ödungen" },
      { yr: 1756, label: "1756: 69 Häuser" },
      { yr: 1834, label: "1834: 127 Häuser" },
      { yr: 1910, label: "1910: Max. 1 151" },
      { yr: 1945.5, label: "1945: Vertreibung" },
      { yr: 2001, label: "2001: Tief Ben." }
    ],
    svgMilestones1869: [
      { yr: 1910, label: "1910: Max. 1 151" },
      { yr: 1945.5, label: "1945/46: Vertreibung" },
      { yr: 1960, label: "1960: +Benke" },
      { yr: 2001, label: "2001: Tief Ben. (34)" }
    ],
    svgPerHouse: "Einw./Haus",
    estBadge: "Rekonstruktion aus Häuserzahl",
    legendDl: "Lomigsdorf / Dlouhomilov (inkl. Dreihofen)",
    legendBen: "Benke / Benkov",
    legendTot: "Gesamtgemeinde (ČSÚ-Jahresbilanz)",
    legendHousesDl: "Häuser / Höfe Dlouhomilov",
    legendHousesBen: "Häuser / Höfe Benkov",
    tableHeaderTitle: "Vollständige Übersicht der Häuser- und Einwohnerzahlen seit der Ortsgründung (1275–2026)",
    tableSubCount: "11 historische Horizonte (1275–1834) + 15 Volkszählungen + Bilanz zum 1. 1. 2026",
    thYear: "Jahr / Horizont",
    thDlPop: "Einw. Dlouhomilov",
    thDlHouses: "Häuser Dl.",
    thBenPop: "Einw. Benkov",
    thBenHouses: "Häuser Ben.",
    thTotPop: "Gemeinde ges.",
    thTotHouses: "Häuser ges.",
    thNotes: "Quelle / Detail Dreihofen (Medelské) & Methodik (~ = Schätzung aus Häuserzahl)",
    recentColDate: "Stichtag (OBY02A)",
    recentColTot: "Einwohner gesamt",
    recentColMen: "Männer",
    recentColWomen: "Frauen",
    recentColAvgAge: "Durchschnittsalter (31. 12.)",
    recentColAgeing: "Altersindex 65+/0–14",
    recentFoot: "* Durchschnittsalter und Altersindex beim Stichtag 1. 1. 2026 entsprechen dem Endstand zum 31. 12. 2025 (59 Kinder 0–14 J., 272 Personen 15–64 J., 123 Senioren 65+).",
    sourcesLabel: "Geprüfte Primärquellen (1275–2026):"
  }
};

function setDemographyCsuView(view) {
  currentDemographyCsuView = view;
  renderDemographyCsuSection();
}

function setDemographyCsuSpan(span) {
  currentCsuTimeSpan = span;
  const minYr = Number(span) || 1275;
  if (CSU_CENSUS_SERIES[selectedCsuSvgIndex] && CSU_CENSUS_SERIES[selectedCsuSvgIndex].numYear < minYr) {
    selectedCsuSvgIndex = CSU_CENSUS_SERIES.length - 1;
  }
  renderDemographyCsuSection();
}

function toggleCsuSvgLayer(layerKey) {
  if (!csuSvgLayers || !(layerKey in csuSvgLayers)) return;
  csuSvgLayers[layerKey] = !csuSvgLayers[layerKey];
  if (!csuSvgLayers.tot && !csuSvgLayers.dl && !csuSvgLayers.ben && !csuSvgLayers.houses) {
    csuSvgLayers[layerKey] = true;
  }
  renderDemographyCsuSection();
}

function renderCsuSvgInspectorContent(idx, lang, t) {
  const fmt = (num) => num == null ? "—" : num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  const r = CSU_CENSUS_SERIES[idx] || CSU_CENSUS_SERIES[CSU_CENSUS_SERIES.length - 1];
  const popShort = lang === "en" ? "inhab." : lang === "de" ? "Einw." : "obyv.";
  const houseShort = lang === "en" ? "houses" : lang === "de" ? "Häuser" : "domů";
  const tag = lang === "en" ? r.tagEn : lang === "de" ? r.tagDe : r.tagCs;
  const med = lang === "en" ? r.medNoteEn : lang === "de" ? r.medNoteDe : r.medNoteCs;
  const avgPerHouse = (r.totPop && r.totHouses) ? (r.totPop / r.totHouses).toFixed(1).replace(".", lang === "en" ? "." : ",") : null;
  const pfx = r.popEst ? "~" : "";
  const hpfx = r.housesEst ? "~" : "";

  return `
    <div class="flex flex-wrap items-center justify-between gap-2 text-xs">
      <div class="flex flex-wrap items-center gap-2 sm:gap-3">
        <span class="px-2.5 py-0.5 rounded-lg ${r.era === 'pre1869' ? 'bg-amber-900 text-amber-50' : 'bg-indigo-950 text-white'} font-mono font-extrabold text-xs">${r.year}</span>
        <span class="font-bold text-indigo-950">🔵 ${pfx}${fmt(r.totPop)} ${popShort}</span>
        ${r.dlPop != null ? `<span class="font-semibold text-amber-900">🟠 Dl.: ${pfx}${fmt(r.dlPop)} ${r.dlHouses != null ? `(${hpfx}${r.dlHouses}${r.year === '1961' ? '*' : ''})` : ""}</span>` : ""}
        ${r.benPop > 0 ? `<span class="font-semibold text-emerald-800">🟢 Ben.: ${ r.numYear === 1793 ? '' : pfx }${fmt(r.benPop)} ${r.benHouses != null ? `(${hpfx}${r.benHouses})` : ""}</span>` : ""}
        ${r.totHouses != null ? `<span class="font-semibold text-rose-800">🔴 ${hpfx}${r.totHouses} ${houseShort}${avgPerHouse ? ` (${avgPerHouse} ${t.svgPerHouse})` : ""}</span>` : ""}
      </div>
      <div class="text-[11px] text-slate-600 flex flex-wrap items-center gap-1.5">
        ${r.popEst ? `<span class="px-2 py-0.5 rounded bg-amber-100 text-amber-950 border border-amber-300 font-semibold">📜 ${t.estBadge}</span>` : ""}
        ${tag ? `<span class="px-2 py-0.5 rounded bg-indigo-100 text-indigo-950 font-bold">${tag}</span>` : ""}
        ${med ? `<span class="italic">${med}</span>` : ""}
      </div>
    </div>
  `;
}

function selectCsuSvgPoint(idx) {
  if (idx < 0 || idx >= CSU_CENSUS_SERIES.length) return;
  selectedCsuSvgIndex = idx;
  const lang = (typeof window !== "undefined" && window.currentLang) || "cs";
  const t = CSU_I18N[lang] || CSU_I18N.cs;
  const insp = document.getElementById("csu-svg-inspector");
  if (insp) {
    insp.innerHTML = renderCsuSvgInspectorContent(idx, lang, t);
    protectLocalizedDomSubtree(insp, lang);
  }
  document.querySelectorAll("[data-csu-svg-col]").forEach(el => {
    const isSel = Number(el.getAttribute("data-csu-svg-col")) === idx;
    el.setAttribute("opacity", isSel ? "1" : "0");
  });
}

function renderDemographyCsuSvgChart(lang, t) {
  const W = 920, H = 390;
  const padL = 52, padR = 50, padT = 38, padB = 48;
  const plotW = W - padL - padR;
  const plotH = H - padT - padB;
  const minYr = Number(currentCsuTimeSpan) || 1275;
  const maxYr = 2026;
  const maxPop = 1200, maxH = 240;

  const visibleIndexed = CSU_CENSUS_SERIES
    .map((r, globalIdx) => ({ r, globalIdx }))
    .filter(({ r }) => r.numYear >= minYr);

  const xOf = (yr) => +(padL + ((yr - minYr) / (maxYr - minYr)) * plotW).toFixed(1);
  const yPop = (v) => +(padT + plotH - (v / maxPop) * plotH).toFixed(1);
  const yHouse = (v) => +(padT + plotH - (v / maxH) * plotH).toFixed(1);
  const baseY = padT + plotH;

  const buildPath = (items, valFn, yFn) => {
    const pts = items.filter(({ r }) => valFn(r) != null).map(({ r, globalIdx }) => [xOf(r.numYear), yFn(valFn(r)), r, globalIdx]);
    if (!pts.length) return { line: "", area: "", pts: [] };
    const line = pts.map((p, i) => `${i === 0 ? "M" : "L"}${p[0]},${p[1]}`).join(" ");
    const area = `${line} L${pts[pts.length - 1][0]},${baseY} L${pts[0][0]},${baseY} Z`;
    return { line, area, pts };
  };

  // Split population curves at 1869 (pre-1869 dashed estimate vs 1869+ solid census), sharing the 1869 anchor point
  const preItems = visibleIndexed.filter(({ r }) => r.numYear <= 1869);
  const csuItems = visibleIndexed.filter(({ r }) => r.numYear >= 1869);

  const totFull = buildPath(visibleIndexed, r => r.totPop, yPop);
  const totPre = buildPath(preItems, r => r.totPop, yPop);
  const totCsu = buildPath(csuItems, r => r.totPop, yPop);

  const dlFull = buildPath(visibleIndexed, r => r.dlPop, yPop);
  const dlPre = buildPath(preItems, r => r.dlPop, yPop);
  const dlCsu = buildPath(csuItems, r => r.dlPop, yPop);

  const benFull = buildPath(visibleIndexed, r => (r.benPop > 0 ? r.benPop : null), yPop);
  const benPre = buildPath(preItems, r => (r.benPop > 0 ? r.benPop : null), yPop);
  const benCsu = buildPath(csuItems, r => r.benPop, yPop);

  // Houses: medieval estimated (<=1585) vs documented urbaria/cadastres/censuses (>=1585)
  const houseMedItems = visibleIndexed.filter(({ r }) => r.numYear <= 1585);
  const houseDocItems = visibleIndexed.filter(({ r }) => r.numYear >= 1585);
  const houseAll = buildPath(visibleIndexed, r => r.totHouses, yHouse);
  const houseMed = buildPath(houseMedItems, r => r.totHouses, yHouse);
  const houseDoc = buildPath(houseDocItems, r => r.totHouses, yHouse);

  const yTicks = [0, 300, 600, 900, 1200];
  const hTicks = [0, 60, 120, 180, 240];

  const pillBtn = (key, colorHex, label) => {
    const on = csuSvgLayers[key];
    return `
      <button type="button" onclick="toggleCsuSvgLayer('${key}')"
        class="px-2.5 py-1 rounded-full text-[11px] font-bold border transition-all flex items-center gap-1.5 cursor-pointer ${on ? 'bg-white text-slate-900 border-slate-300 shadow-2xs' : 'bg-slate-100 text-slate-400 border-slate-200 line-through opacity-70'}">
        <span class="w-2.5 h-2.5 rounded-full inline-block" style="background:${colorHex}"></span>
        <span>${label}</span>
      </button>
    `;
  };

  // Hit-box columns across visible points
  const hitColumns = visibleIndexed.map(({ r, globalIdx }, localIdx) => {
    const cx = xOf(r.numYear);
    const prevX = localIdx === 0 ? padL : (xOf(visibleIndexed[localIdx - 1].r.numYear) + cx) / 2;
    const nextX = localIdx === visibleIndexed.length - 1 ? padL + plotW : (cx + xOf(visibleIndexed[localIdx + 1].r.numYear)) / 2;
    return { globalIdx, r, cx, x: +(prevX).toFixed(1), w: +(nextX - prevX).toFixed(1) };
  });

  // Non-overlapping X-axis text ticks per zoom level
  const labeledYears = minYr === 1275
    ? new Set([1275, 1310, 1368, 1492, 1585, 1657, 1749, 1793, 1834, 1869, 1910, 1950, 1991, 2026])
    : minYr === 1585
      ? new Set([1585, 1657, 1677, 1749, 1793, 1834, 1869, 1900, 1921, 1950, 1980, 2001, 2026])
      : null;

  const milestones = minYr === 1275 ? t.svgMilestones1275 : minYr === 1585 ? t.svgMilestones1585 : t.svgMilestones1869;
  const x1869 = xOf(1869);

  return `
    <div class="space-y-3">
      <!-- Přepínače vrstev grafu a popisky os -->
      <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-2">
        <div class="flex flex-wrap items-center gap-1.5">
          ${pillBtn("tot", "#312e81", t.svgLayerTot)}
          ${pillBtn("dl", "#b45309", t.svgLayerDl)}
          ${pillBtn("ben", "#059669", t.svgLayerBen)}
          ${pillBtn("houses", "#be123c", t.svgLayerHouses)}
        </div>
        <div class="flex items-center gap-3 text-[10px] font-mono text-slate-500">
          <span class="text-indigo-900 font-semibold">◀ ${t.svgAxisLeft}</span>
          <span class="text-rose-800 font-semibold">${t.svgAxisRight} ▶</span>
        </div>
      </div>

      <!-- Interaktivní informační lišta pro vybraný rok -->
      <div id="csu-svg-inspector" class="p-2.5 sm:p-3 rounded-xl bg-gradient-to-r from-indigo-50/90 via-white to-amber-50/70 border border-indigo-200 shadow-2xs">
        ${renderCsuSvgInspectorContent(selectedCsuSvgIndex, lang, t)}
      </div>

      <!-- Vektorové plátno SVG (proporcionální časová osa 1275–2026) -->
      <div class="rounded-xl border border-slate-200 bg-gradient-to-b from-amber-50/25 via-white to-slate-50/40 p-1.5 sm:p-3 overflow-x-auto">
        <svg viewBox="0 0 ${W} ${H}" class="w-full min-w-[660px] h-auto select-none" role="img" aria-label="${t.chartTitle}">
          <defs>
            <linearGradient id="csuGradTot" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#312e81" stop-opacity="0.18"/>
              <stop offset="100%" stop-color="#312e81" stop-opacity="0.01"/>
            </linearGradient>
            <linearGradient id="csuGradDl" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#b45309" stop-opacity="0.20"/>
              <stop offset="100%" stop-color="#b45309" stop-opacity="0.02"/>
            </linearGradient>
            <linearGradient id="csuGradBen" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#059669" stop-opacity="0.22"/>
              <stop offset="100%" stop-color="#059669" stop-opacity="0.02"/>
            </linearGradient>
          </defs>

          <!-- Pás rekonstrukce před rokem 1869 vs. moderní sčítání ČSÚ -->
          ${minYr < 1869 ? `
            <rect x="${padL}" y="${padT}" width="${+(x1869 - padL).toFixed(1)}" height="${plotH}" fill="#fef3c7" fill-opacity="0.30" />
            <line x1="${x1869}" y1="${padT - 8}" x2="${x1869}" y2="${baseY}" stroke="#b45309" stroke-width="1.3" stroke-dasharray="5,3" />
            <text x="${padL + 6}" y="${padT + 13}" text-anchor="start" font-size="9.5" font-family="sans-serif" font-weight="700" fill="#92400e">${t.svgPre1869Zone}</text>
            <text x="${x1869 + 6}" y="${padT + 13}" text-anchor="start" font-size="9.5" font-family="sans-serif" font-weight="700" fill="#312e81">${t.svgCsuZone}</text>
          ` : ""}

          <!-- Vodorovná mřížka a popisky levé i pravé osy Y -->
          ${yTicks.map((val, i) => {
            const y = yPop(val);
            const hVal = hTicks[i];
            const valLbl = val >= 1000 ? (lang === "en" ? "1,200" : "1 200") : String(val);
            return `
              <line x1="${padL}" y1="${y}" x2="${padL + plotW}" y2="${y}" stroke="${val === 0 ? '#94a3b8' : '#e2e8f0'}" stroke-width="${val === 0 ? '1.4' : '1'}" ${val === 0 ? '' : 'stroke-dasharray="3,3"'} />
              <text x="${padL - 8}" y="${y + 4}" text-anchor="end" font-size="11" font-family="monospace" fill="#334155" font-weight="600">${valLbl}</text>
              ${csuSvgLayers.houses ? `<text x="${padL + plotW + 8}" y="${y + 4}" text-anchor="start" font-size="11" font-family="monospace" fill="#9f1239" font-weight="600">${hVal}</text>` : ""}
            `;
          }).join("")}

          <!-- Svislé historické milníky -->
          ${milestones.map((m, mi) => {
            const mx = xOf(m.yr);
            const badgeY = mi % 2 === 0 ? 14 : 26;
            const anchor = mx < padL + 55 ? "start" : mx > padL + plotW - 55 ? "end" : "middle";
            return `
              <line x1="${mx}" y1="${padT - 4}" x2="${mx}" y2="${baseY}" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4,3" />
              <text x="${mx}" y="${badgeY}" text-anchor="${anchor}" font-size="9.3" font-family="sans-serif" font-weight="700" fill="#475569">${m.label}</text>
            `;
          }).join("")}

          <!-- Plošné výplně pod křivkami -->
          ${csuSvgLayers.tot ? `<path d="${totFull.area}" fill="url(#csuGradTot)" />` : ""}
          ${csuSvgLayers.dl ? `<path d="${dlFull.area}" fill="url(#csuGradDl)" />` : ""}
          ${csuSvgLayers.ben ? `<path d="${benFull.area}" fill="url(#csuGradBen)" />` : ""}

          <!-- Křivky obyvatel: před r. 1869 přerušovaně (odhad z počtu domů), od r. 1869 plně (ČSÚ) -->
          ${csuSvgLayers.tot && totPre.pts.length > 1 ? `<path d="${totPre.line}" fill="none" stroke="#312e81" stroke-width="2.4" stroke-dasharray="5,3.5" opacity="0.85" stroke-linecap="round" stroke-linejoin="round" />` : ""}
          ${csuSvgLayers.tot && totCsu.pts.length > 1 ? `<path d="${totCsu.line}" fill="none" stroke="#312e81" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />` : ""}

          ${csuSvgLayers.dl && dlPre.pts.length > 1 ? `<path d="${dlPre.line}" fill="none" stroke="#b45309" stroke-width="2.1" stroke-dasharray="5,3.5" opacity="0.85" stroke-linecap="round" stroke-linejoin="round" />` : ""}
          ${csuSvgLayers.dl && dlCsu.pts.length > 1 ? `<path d="${dlCsu.line}" fill="none" stroke="#b45309" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />` : ""}

          ${csuSvgLayers.ben && benPre.pts.length > 1 ? `<path d="${benPre.line}" fill="none" stroke="#059669" stroke-width="2.1" stroke-dasharray="5,3.5" opacity="0.85" stroke-linecap="round" stroke-linejoin="round" />` : ""}
          ${csuSvgLayers.ben && benCsu.pts.length > 1 ? `<path d="${benCsu.line}" fill="none" stroke="#059669" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />` : ""}

          <!-- Křivka domovního fondu (1275–1585 jemně čárkovaně, 1585–2021 výrazně ze zjištěných počtů domů) -->
          ${csuSvgLayers.houses && houseMed.pts.length > 1 ? `<path d="${houseMed.line}" fill="none" stroke="#be123c" stroke-width="2" stroke-dasharray="3,3" opacity="0.85" />` : ""}
          ${csuSvgLayers.houses && houseDoc.pts.length > 1 ? `<path d="${houseDoc.line}" fill="none" stroke="#be123c" stroke-width="2.5" stroke-dasharray="7,3.5" stroke-linecap="round" stroke-linejoin="round" />` : ""}
          ${csuSvgLayers.houses ? `<line x1="${xOf(2021)}" y1="${yHouse(193)}" x2="${xOf(2026)}" y2="${yHouse(193)}" stroke="#be123c" stroke-width="1.8" stroke-dasharray="2,3" opacity="0.7" />` : ""}

          <!-- Datové body (dutý střed u odhadů před r. 1869, plný u úředních sčítání) -->
          ${csuSvgLayers.tot ? totFull.pts.map(([x, y, r]) => `<circle cx="${x}" cy="${y}" r="${r.highlight ? '4.6' : '3.4'}" fill="${r.popEst ? '#ffffff' : '#312e81'}" stroke="${r.popEst ? '#312e81' : '#ffffff'}" stroke-width="${r.popEst ? '2' : '1.4'}" />`).join("") : ""}
          ${csuSvgLayers.dl ? dlFull.pts.map(([x, y, r]) => `<circle cx="${x}" cy="${y}" r="3.1" fill="${r.popEst ? '#ffffff' : '#b45309'}" stroke="${r.popEst ? '#b45309' : '#ffffff'}" stroke-width="${r.popEst ? '1.8' : '1.2'}" />`).join("") : ""}
          ${csuSvgLayers.ben ? benFull.pts.map(([x, y, r]) => `<circle cx="${x}" cy="${y}" r="3.1" fill="${r.popEst && r.numYear !== 1793 ? '#ffffff' : '#059669'}" stroke="${r.popEst && r.numYear !== 1793 ? '#059669' : '#ffffff'}" stroke-width="1.5" />`).join("") : ""}
          ${csuSvgLayers.houses ? houseAll.pts.map(([x, y, r]) => `<rect x="${(x - 2.9).toFixed(1)}" y="${(y - 2.9).toFixed(1)}" width="5.8" height="5.8" rx="1" fill="${r.housesEst ? '#ffffff' : '#be123c'}" stroke="${r.housesEst ? '#be123c' : '#ffffff'}" stroke-width="1.4" />`).join("") : ""}

          <!-- Popisky letopočtů na ose X -->
          ${visibleIndexed.map(({ r }) => {
            const cx = xOf(r.numYear);
            const showLbl = !labeledYears || labeledYears.has(r.numYear);
            const tx = !labeledYears && r.numYear === 2021 ? cx - 7 : !labeledYears && r.numYear === 2026 ? cx + 6 : cx;
            const shortYr = r.numYear === 1275 ? "1275" : r.numYear === 1310 ? "1310" : r.numYear === 1368 ? "1368" : r.numYear === 2026 ? "2026" : r.year;
            return `
              <line x1="${cx}" y1="${baseY}" x2="${cx}" y2="${baseY + (showLbl ? 5.5 : 3)}" stroke="${showLbl ? '#475569' : '#cbd5e1'}" stroke-width="${showLbl ? '1.3' : '1'}" />
              ${showLbl ? `<text x="${tx}" y="${baseY + 18}" text-anchor="middle" font-size="10" font-family="monospace" font-weight="${r.highlight ? '800' : '600'}" fill="${r.era === 'pre1869' ? '#92400e' : r.numYear === 2026 ? '#312e81' : '#334155'}" transform="rotate(-30 ${tx} ${baseY + 18})">${shortYr}</text>` : ""}
            `;
          }).join("")}

          <!-- Aktivní zvýraznění vybraného roku + interaktivní sloupce pro najetí myší / dotyk -->
          ${hitColumns.map(({ globalIdx, r, cx, x, w }) => {
            const isSel = globalIdx === selectedCsuSvgIndex;
            const ty = yPop(r.totPop);
            const pillW = r.year.length > 6 ? 64 : 42;
            const pillX = Math.min(Math.max(cx - pillW / 2, padL), padL + plotW - pillW);
            return `
              <g data-csu-svg-col="${globalIdx}" opacity="${isSel ? '1' : '0'}" pointer-events="none">
                <line x1="${cx}" y1="${padT}" x2="${cx}" y2="${baseY}" stroke="#4338ca" stroke-width="1.6" />
                ${csuSvgLayers.tot ? `<circle cx="${cx}" cy="${ty}" r="6.8" fill="none" stroke="#312e81" stroke-width="2" />` : ""}
                ${csuSvgLayers.dl && r.dlPop != null ? `<circle cx="${cx}" cy="${yPop(r.dlPop)}" r="6.2" fill="none" stroke="#b45309" stroke-width="2" />` : ""}
                ${csuSvgLayers.ben && r.benPop != null ? `<circle cx="${cx}" cy="${yPop(r.benPop)}" r="6.2" fill="none" stroke="#059669" stroke-width="2" />` : ""}
                ${csuSvgLayers.houses && r.totHouses != null ? `<circle cx="${cx}" cy="${yHouse(r.totHouses)}" r="6.2" fill="none" stroke="#be123c" stroke-width="2" />` : ""}
                <rect x="${pillX.toFixed(1)}" y="${baseY + 24}" width="${pillW}" height="16" rx="4" fill="#1e1b4b" />
                <text x="${(pillX + pillW / 2).toFixed(1)}" y="${baseY + 35}" text-anchor="middle" font-size="9.5" font-family="monospace" font-weight="700" fill="#ffffff">${r.numYear === 2026 ? "2026" : r.year}</text>
              </g>
              <rect x="${x}" y="${padT}" width="${w}" height="${plotH + 28}" fill="transparent" class="cursor-pointer"
                onmouseenter="selectCsuSvgPoint(${globalIdx})" onclick="selectCsuSvgPoint(${globalIdx})" />
            `;
          }).join("")}
        </svg>
      </div>
      <p class="text-[11px] text-slate-500 leading-relaxed">${t.svgHint}</p>
    </div>
  `;
}

function protectLocalizedDomSubtree(container, lang) {
  if (!container || lang === "cs" || typeof i18nData === "undefined" || !i18nData.exactUiMap) return;
  const map = i18nData.exactUiMap[lang];
  if (!map || typeof document === "undefined") return;
  const walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT, null, false);
  let n;
  while ((n = walker.nextNode())) {
    const trimmed = (n.nodeValue || "").replace(/\s+/g, " ").trim();
    if (trimmed) map[trimmed] = trimmed;
  }
}

function renderDemographyCsuChartHtml(lang, t) {
  const fmt = (num) => num == null ? "—" : num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  const houseUnitShort = lang === "en" ? "h." : lang === "de" ? "H." : "d.";
  const jointShort = lang === "en" ? "joint" : lang === "de" ? "gem." : "spol.";
  const minYr = Number(currentCsuTimeSpan) || 1275;
  const filteredSeries = CSU_CENSUS_SERIES.filter(r => r.numYear >= minYr);

  if (currentDemographyCsuView === "svg") {
    return renderDemographyCsuSvgChart(lang, t);
  }

  if (currentDemographyCsuView === "recent") {
    return `
      <div class="overflow-x-auto rounded-xl border border-indigo-200 bg-white">
        <table class="w-full text-left text-xs border-collapse mobile-responsive-table">
          <thead class="bg-indigo-950 text-indigo-100 text-[11px] uppercase tracking-wider font-heading">
            <tr>
              <th class="p-2.5">${t.recentColDate}</th>
              <th class="p-2.5 text-center">${t.recentColTot}</th>
              <th class="p-2.5 text-center">${t.recentColMen}</th>
              <th class="p-2.5 text-center">${t.recentColWomen}</th>
              <th class="p-2.5 text-center">${t.recentColAvgAge}</th>
              <th class="p-2.5 text-center">${t.recentColAgeing}</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-indigo-100">
            ${CSU_RECENT_ANNUAL.map(r => {
              const isLatest = r.refYear === 2026;
              const pctBar = ((r.total / 500) * 100).toFixed(1);
              return `
                <tr class="${isLatest ? 'bg-indigo-50/90 font-bold' : 'hover:bg-slate-50'}">
                  <td class="p-2.5 font-mono font-bold text-indigo-950" data-label="${t.recentColDate}">${r.date}</td>
                  <td class="p-2.5 text-center" data-label="${t.recentColTot}">
                    <div class="inline-flex items-center gap-2">
                      <span class="font-mono font-extrabold text-sm text-indigo-900">${r.total}</span>
                      <span class="hidden sm:inline-block w-20 h-2 bg-slate-100 rounded-full overflow-hidden">
                        <span class="block h-full bg-indigo-600 rounded-full" style="width:${pctBar}%"></span>
                      </span>
                    </div>
                  </td>
                  <td class="p-2.5 text-center font-mono text-slate-700" data-label="${t.recentColMen}">${r.men}</td>
                  <td class="p-2.5 text-center font-mono text-slate-700" data-label="${t.recentColWomen}">${r.women}</td>
                  <td class="p-2.5 text-center font-mono text-amber-900 font-semibold" data-label="${t.recentColAvgAge}">${r.avgAge}</td>
                  <td class="p-2.5 text-center font-mono text-rose-800 font-semibold" data-label="${t.recentColAgeing}">${r.ageingIdx}</td>
                </tr>
              `;
            }).join("")}
          </tbody>
        </table>
      </div>
      <p class="text-[11px] text-slate-500 mt-2 italic">${t.recentFoot}</p>
    `;
  }

  if (currentDemographyCsuView === "benkov") {
    const benRows = filteredSeries.filter(r => r.benPop != null && r.benPop > 0);
    const maxBen = 319;
    return `
      <div class="space-y-2">
        ${benRows.map(r => {
          const w = ((r.benPop / maxBen) * 100).toFixed(1);
          const tag = lang === "en" ? r.tagEn : lang === "de" ? r.tagDe : r.tagCs;
          const pfx = r.popEst && r.numYear !== 1793 ? "~" : "";
          const hpfx = r.housesEst ? "~" : "";
          return `
            <div class="grid grid-cols-12 items-center gap-2 text-xs">
              <div class="col-span-3 sm:col-span-2 font-mono font-bold ${r.era === 'pre1869' ? 'text-amber-900' : 'text-slate-800'}">${r.year}</div>
              <div class="col-span-6 sm:col-span-7 bg-slate-100 rounded-lg h-5 overflow-hidden p-0.5 border border-slate-200/80">
                <div class="h-full rounded-md bg-gradient-to-r ${r.era === 'pre1869' ? 'from-emerald-600/75 to-teal-400/80' : 'from-emerald-700 to-teal-500'} transition-all" style="width:${w}%"></div>
              </div>
              <div class="col-span-3 text-right font-mono font-bold text-emerald-900">
                ${pfx}${r.benPop} <span class="text-[10px] font-normal text-slate-500">${r.benHouses != null ? `(${hpfx}${r.benHouses} ${houseUnitShort})` : ""}</span>
                ${tag ? `<span class="hidden xl:inline-block ml-1 px-1.5 py-0.2 text-[10px] rounded bg-emerald-100 text-emerald-900 font-sans">${tag}</span>` : ""}
              </div>
            </div>
          `;
        }).join("")}
      </div>
    `;
  }

  if (currentDemographyCsuView === "houses") {
    const houseRows = filteredSeries.filter(r => r.totHouses != null);
    const maxH = 195;
    return `
      <div class="flex flex-wrap items-center gap-4 text-[11px] text-slate-600 mb-2.5">
        <span class="inline-flex items-center gap-1.5"><span class="w-3 h-3 rounded-xs bg-amber-700 inline-block"></span> ${t.legendHousesDl}</span>
        <span class="inline-flex items-center gap-1.5"><span class="w-3 h-3 rounded-xs bg-emerald-600 inline-block"></span> ${t.legendHousesBen}</span>
      </div>
      <div class="space-y-2">
        ${houseRows.map(r => {
          const dlW = r.benHouses != null ? ((r.dlHouses / maxH) * 100).toFixed(1) : ((r.totHouses / maxH) * 100).toFixed(1);
          const benW = r.benHouses != null ? ((r.benHouses / maxH) * 100).toFixed(1) : "0";
          const hpfx = r.housesEst ? "~" : "";
          return `
            <div class="grid grid-cols-12 items-center gap-2 text-xs">
              <div class="col-span-3 sm:col-span-2 font-mono font-bold ${r.era === 'pre1869' ? 'text-amber-900' : 'text-slate-800'}">${r.year}</div>
              <div class="col-span-6 sm:col-span-7 bg-slate-100 rounded-lg h-5 overflow-hidden flex border border-slate-200/80">
                <div class="h-full bg-amber-700" style="width:${dlW}%" title="Dlouhomilov: ${hpfx}${r.dlHouses}"></div>
                ${r.benHouses != null ? `<div class="h-full bg-emerald-600" style="width:${benW}%" title="Benkov: ${hpfx}${r.benHouses}"></div>` : ""}
              </div>
              <div class="col-span-3 text-right font-mono font-bold text-slate-900">
                ${hpfx}${r.totHouses} <span class="text-[10px] font-normal text-slate-500 hidden sm:inline">(${r.benHouses != null ? `${hpfx}${r.dlHouses}+${hpfx}${r.benHouses}` : jointShort})</span>
              </div>
            </div>
          `;
        }).join("")}
      </div>
    `;
  }

  // 'stacked' population 1275–2026
  const maxPop = 1151;
  return `
    <div class="flex flex-wrap items-center gap-4 text-[11px] text-slate-600 mb-2.5">
      <span class="inline-flex items-center gap-1.5"><span class="w-3 h-3 rounded-xs bg-amber-700 inline-block"></span> ${t.legendDl}</span>
      <span class="inline-flex items-center gap-1.5"><span class="w-3 h-3 rounded-xs bg-emerald-600 inline-block"></span> ${t.legendBen}</span>
      <span class="inline-flex items-center gap-1.5"><span class="w-3 h-3 rounded-xs bg-indigo-700 inline-block"></span> ${t.legendTot}</span>
    </div>
    <div class="space-y-2">
      ${filteredSeries.map(r => {
        const isLatest = r.highlight === "latest";
        const isPeak = r.highlight === "peak";
        const dlW = r.dlPop != null ? ((r.dlPop / maxPop) * 100).toFixed(1) : "0";
        const benW = r.benPop != null ? ((r.benPop / maxPop) * 100).toFixed(1) : "0";
        const totW = r.dlPop == null ? ((r.totPop / maxPop) * 100).toFixed(1) : "0";
        const tag = lang === "en" ? r.tagEn : lang === "de" ? r.tagDe : r.tagCs;
        const pfx = r.popEst ? "~" : "";
        return `
          <div class="grid grid-cols-12 items-center gap-2 text-xs ${isLatest ? 'bg-indigo-50/80 p-1 rounded-lg border border-indigo-200' : isPeak ? 'bg-amber-50/90 p-1 rounded-lg border border-amber-200' : ''}">
            <div class="col-span-3 sm:col-span-2 font-mono font-bold ${isLatest ? 'text-indigo-950' : r.era === 'pre1869' ? 'text-amber-900' : 'text-slate-800'}">${r.year}</div>
            <div class="col-span-6 sm:col-span-7 bg-slate-100 rounded-lg h-5 overflow-hidden flex border border-slate-200/80">
              ${r.dlPop != null ? `
                <div class="h-full ${r.popEst ? 'bg-amber-600/80' : 'bg-amber-700'} transition-all" style="width:${dlW}%" title="Dlouhomilov: ${pfx}${r.dlPop}"></div>
                <div class="h-full ${r.popEst ? 'bg-emerald-500/80' : 'bg-emerald-600'} transition-all" style="width:${benW}%" title="Benkov: ${pfx}${r.benPop}"></div>
              ` : `
                <div class="h-full bg-gradient-to-r from-indigo-700 to-indigo-500 transition-all" style="width:${totW}%" title="${r.totPop}"></div>
              `}
            </div>
            <div class="col-span-3 text-right font-mono font-extrabold ${isLatest ? 'text-indigo-950' : 'text-amber-950'}">
              ${pfx}${fmt(r.totPop)}
              ${r.dlPop != null ? `<span class="text-[10px] font-normal text-slate-500 hidden md:inline">(${pfx}${r.dlPop}+${r.numYear === 1793 ? '' : pfx}${r.benPop})</span>` : ""}
              ${tag ? `<span class="hidden xl:inline-block ml-1 px-1.5 py-0.2 text-[10px] rounded ${isLatest ? 'bg-indigo-200 text-indigo-950' : 'bg-amber-200/80 text-amber-950'} font-sans font-semibold">${tag}</span>` : ""}
            </div>
          </div>
        `;
      }).join("")}
    </div>
  `;
}

function renderDemographyCsuSection() {
  const container = document.getElementById("demography-csu-wrapper");
  if (!container) return;

  const lang = (typeof window !== "undefined" && window.currentLang) || "cs";
  const t = CSU_I18N[lang] || CSU_I18N.cs;
  const fmt = (num) => num == null ? "—" : num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  const popShort = lang === "en" ? "inhab." : lang === "de" ? "Einw." : "obyv.";
  const inclDlLabel = lang === "en" ? "incl. Dl.*" : lang === "de" ? "inkl. Dl.*" : "vč. Dl.*";

  // Update header metadata & CSU tab label dynamically
  const housesWithCensusCnt = (typeof housesData !== "undefined" && Array.isArray(housesData))
    ? housesData.filter(h => h.census && h.census.length > 0).length
    : 158;
  const totalCensusRecordsCnt = (typeof censusRegistryData !== "undefined" && Array.isArray(censusRegistryData))
    ? censusRegistryData.length
    : 1267;

  const tabLabelEl = document.getElementById("demo-tab-csu-label");
  if (tabLabelEl) { tabLabelEl.textContent = t.tabLabel; protectLocalizedDomSubtree(tabLabelEl, lang); }
  const badgeEl = document.getElementById("demography-header-badge");
  if (badgeEl) { badgeEl.textContent = t.headerBadge; protectLocalizedDomSubtree(badgeEl, lang); }
  const metaEl = document.getElementById("demography-header-meta");
  if (metaEl) { metaEl.textContent = t.headerMeta(housesWithCensusCnt, fmt(totalCensusRecordsCnt)); protectLocalizedDomSubtree(metaEl, lang); }
  const subEl = document.getElementById("demography-header-subtitle");
  if (subEl) { subEl.textContent = t.headerSubtitle; protectLocalizedDomSubtree(subEl, lang); }

  const viewBtnClass = (v) => v === currentDemographyCsuView
    ? "px-2.5 py-1.5 text-xs font-bold rounded-lg bg-indigo-900 text-white shadow-2xs transition-all cursor-pointer"
    : "px-2.5 py-1.5 text-xs font-semibold rounded-lg bg-white hover:bg-indigo-50 text-slate-700 border border-slate-200 transition-all cursor-pointer";

  const spanBtnClass = (s) => s === currentCsuTimeSpan
    ? "px-2.5 py-1 text-[11px] font-bold rounded-lg bg-amber-800 text-white shadow-2xs transition-all cursor-pointer"
    : "px-2.5 py-1 text-[11px] font-semibold rounded-lg bg-amber-50 hover:bg-amber-100 text-amber-950 border border-amber-200 transition-all cursor-pointer";

  container.innerHTML = `
    <div class="p-4 sm:p-6 bg-gradient-to-br from-indigo-50/60 via-white to-emerald-50/50 rounded-2xl border-2 border-indigo-200/90 shadow-xs space-y-6">
      <!-- Záhlaví modulu 1275–2026 -->
      <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-3 pb-4 border-b border-indigo-100">
        <div>
          <div class="flex flex-wrap items-center gap-2 mb-1">
            <span class="text-xl">📈</span>
            <span class="text-[11px] font-bold uppercase tracking-wider bg-indigo-900 text-indigo-50 px-2.5 py-0.5 rounded-full">
              ${t.sectionBadge}
            </span>
          </div>
          <h3 class="text-lg sm:text-xl font-extrabold text-slate-900 font-heading">
            ${t.sectionTitle}
          </h3>
          <p class="text-xs text-slate-600 mt-1 max-w-4xl leading-relaxed">
            ${t.sectionSub}
          </p>
        </div>
        <div class="flex flex-wrap items-center gap-2 shrink-0 self-start lg:self-auto">
          <a href="docs/demografie_csu_1869_2026.md" target="_blank" rel="noopener noreferrer"
            class="px-3 py-1.5 text-xs font-bold rounded-lg bg-amber-100 hover:bg-amber-200 text-amber-950 border border-amber-300 transition-colors shadow-2xs">
            ${t.mdDocBtn}
          </a>
          <a href="https://github.com/KarelBerka/Dlouhomilov/blob/main/docs/demografie_csu_1869_2026.md" target="_blank" rel="noopener noreferrer"
            class="px-3 py-1.5 text-xs font-bold rounded-lg bg-indigo-900 hover:bg-indigo-800 text-white border border-indigo-950 transition-colors shadow-2xs">
            ${t.mermaidBtn}
          </a>
        </div>
      </div>

      <!-- 4 klíčové KPI karty (ČSÚ 2025/2026 & 750 let domovního fondu) -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        <div class="p-4 rounded-xl bg-white border border-indigo-200 shadow-2xs flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-1">
              <span class="text-[11px] font-bold text-indigo-950 uppercase tracking-wider">${t.kpi1Title}</span>
              <span class="text-lg">👥</span>
            </div>
            <div class="text-2xl font-extrabold text-indigo-900">${t.kpi1Value}</div>
            <p class="text-xs text-slate-600 mt-1.5 leading-relaxed">${t.kpi1Sub}</p>
          </div>
          <div class="mt-2.5 pt-2 border-t border-slate-100 text-[10px] font-mono text-indigo-800">${t.kpi1Foot}</div>
        </div>

        <div class="p-4 rounded-xl bg-white border border-amber-200 shadow-2xs flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-1">
              <span class="text-[11px] font-bold text-amber-950 uppercase tracking-wider">${t.kpi2Title}</span>
              <span class="text-lg">⏳</span>
            </div>
            <div class="text-2xl font-extrabold text-amber-900">${t.kpi2Value}</div>
            <p class="text-xs text-slate-600 mt-1.5 leading-relaxed">${t.kpi2Sub}</p>
          </div>
          <div class="mt-2.5 pt-2 border-t border-slate-100 text-[10px] font-mono text-amber-900">${t.kpi2Foot}</div>
        </div>

        <div class="p-4 rounded-xl bg-white border border-rose-200 shadow-2xs flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-1">
              <span class="text-[11px] font-bold text-rose-950 uppercase tracking-wider">${t.kpi3Title}</span>
              <span class="text-lg">🔄</span>
            </div>
            <div class="text-2xl font-extrabold text-rose-800">${t.kpi3Value}</div>
            <p class="text-xs text-slate-600 mt-1.5 leading-relaxed">${t.kpi3Sub}</p>
          </div>
          <div class="mt-2.5 pt-2 border-t border-slate-100 text-[10px] font-mono text-slate-600">${t.kpi3Foot}</div>
        </div>

        <div class="p-4 rounded-xl bg-white border border-emerald-200 shadow-2xs flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-1">
              <span class="text-[11px] font-bold text-emerald-950 uppercase tracking-wider">${t.kpi4Title}</span>
              <span class="text-lg">🏡</span>
            </div>
            <div class="text-2xl font-extrabold text-emerald-900">${t.kpi4Value}</div>
            <p class="text-xs text-slate-600 mt-1.5 leading-relaxed">${t.kpi4Sub}</p>
          </div>
          <div class="mt-2.5 pt-2 border-t border-slate-100 text-[10px] font-mono text-emerald-900">${t.kpi4Foot}</div>
        </div>
      </div>

      <!-- Interaktivní graf vývoje 1275–2026 (hned pod KPI kartami pro maximální přehlednost) -->
      <div class="bg-white p-4 sm:p-5 rounded-xl border border-indigo-200 shadow-2xs space-y-4">
        <div class="flex flex-col xl:flex-row xl:items-center justify-between gap-3 pb-3 border-b border-slate-100">
          <div class="space-y-1.5">
            <h4 class="text-sm font-bold text-slate-900 font-heading flex items-center gap-1.5">
              <span>📊</span> <span>${t.chartTitle}</span>
            </h4>
            ${currentDemographyCsuView !== "recent" ? `
              <div class="flex flex-wrap items-center gap-1.5">
                <button type="button" onclick="setDemographyCsuSpan('1275')" class="${spanBtnClass('1275')}">${t.span1275}</button>
                <button type="button" onclick="setDemographyCsuSpan('1585')" class="${spanBtnClass('1585')}">${t.span1585}</button>
                <button type="button" onclick="setDemographyCsuSpan('1869')" class="${spanBtnClass('1869')}">${t.span1869}</button>
              </div>
            ` : ""}
          </div>
          <div class="flex flex-wrap items-center gap-1.5 self-start xl:self-auto">
            <button onclick="setDemographyCsuView('svg')" class="${viewBtnClass('svg')}">${t.viewSvg}</button>
            <button onclick="setDemographyCsuView('stacked')" class="${viewBtnClass('stacked')}">${t.viewStacked}</button>
            <button onclick="setDemographyCsuView('benkov')" class="${viewBtnClass('benkov')}">${t.viewBenkov}</button>
            <button onclick="setDemographyCsuView('houses')" class="${viewBtnClass('houses')}">${t.viewHouses}</button>
            <button onclick="setDemographyCsuView('recent')" class="${viewBtnClass('recent')}">${t.viewRecent}</button>
          </div>
        </div>
        <div>
          ${renderDemographyCsuChartHtml(lang, t)}
        </div>
      </div>

      <!-- Srovnání místních částí Dlouhomilov vs. Benkov (SLDB 2021) -->
      <div class="space-y-3">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-2">
          <h4 class="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
            <span>⚖️</span> <span>${t.splitHeading}</span>
          </h4>
          <span class="text-[11px] text-indigo-900 bg-indigo-50 px-2.5 py-1 rounded-lg border border-indigo-200">
            ℹ️ ${t.splitMethodBadge}
          </span>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <!-- Karta Dlouhomilov (vč. Medelského) -->
          <div class="p-4 bg-white rounded-xl border border-amber-300 shadow-2xs space-y-3">
            <div>
              <div class="flex items-center justify-between">
                <span class="text-sm font-extrabold text-amber-950 font-heading">🏘️ ${t.dlTitle}</span>
                <span class="px-2 py-0.5 text-[11px] font-mono font-bold rounded bg-amber-100 text-amber-950 border border-amber-300">407 ${popShort}</span>
              </div>
              <div class="text-[11px] font-mono text-slate-500 mt-0.5">${t.dlCodes}</div>
            </div>
            <div class="divide-y divide-amber-100 text-xs">
              ${t.dlStats.map(([k, v]) => `
                <div class="py-1.5 flex items-center justify-between gap-2">
                  <span class="text-slate-600">${k}</span>
                  <span class="font-bold text-slate-900 font-mono text-right">${v}</span>
                </div>
              `).join("")}
            </div>
            <div>
              <div class="text-[11px] font-semibold text-amber-950 mb-1">${t.dlBarLabel}</div>
              <div class="w-full h-2.5 bg-slate-200 rounded-full overflow-hidden flex">
                <div class="h-full bg-amber-700" style="width:84.8%"></div>
                <div class="h-full bg-slate-400" style="width:15.2%"></div>
              </div>
            </div>
            <p class="text-[11px] text-slate-600 bg-amber-50/80 p-2.5 rounded-lg border border-amber-200/80 leading-relaxed">${t.dlNote}</p>
          </div>

          <!-- Karta Benkov -->
          <div class="p-4 bg-white rounded-xl border border-emerald-300 shadow-2xs space-y-3">
            <div>
              <div class="flex items-center justify-between">
                <span class="text-sm font-extrabold text-emerald-950 font-heading">⛰️ ${t.benTitle}</span>
                <span class="px-2 py-0.5 text-[11px] font-mono font-bold rounded bg-emerald-100 text-emerald-950 border border-emerald-300">51 ${popShort}</span>
              </div>
              <div class="text-[11px] font-mono text-slate-500 mt-0.5">${t.benCodes}</div>
            </div>
            <div class="divide-y divide-emerald-100 text-xs">
              ${t.benStats.map(([k, v]) => `
                <div class="py-1.5 flex items-center justify-between gap-2">
                  <span class="text-slate-600">${k}</span>
                  <span class="font-bold text-slate-900 font-mono text-right">${v}</span>
                </div>
              `).join("")}
            </div>
            <div>
              <div class="text-[11px] font-semibold text-emerald-950 mb-1">${t.benBarLabel}</div>
              <div class="w-full h-2.5 bg-slate-200 rounded-full overflow-hidden flex">
                <div class="h-full bg-emerald-600" style="width:65.7%"></div>
                <div class="h-full bg-amber-400" style="width:34.3%"></div>
              </div>
            </div>
            <p class="text-[11px] text-slate-600 bg-emerald-50/80 p-2.5 rounded-lg border border-emerald-200/80 leading-relaxed">${t.benNote}</p>
          </div>
        </div>

        <!-- Pás ekonomické aktivity (SLDB 2021) -->
        <div class="p-3 bg-white rounded-xl border border-slate-200 flex flex-wrap items-center gap-2 text-xs">
          <span class="font-bold text-slate-800 mr-1">${t.econTitle}</span>
          ${t.econPills.map(p => `<span class="px-2.5 py-1 rounded-full bg-slate-100 text-slate-800 border border-slate-200 text-[11px] font-medium">${p}</span>`).join("")}
        </div>
      </div>

      <!-- Kompletní tabulka domů a obyvatel 1275–2026 -->
      <div class="bg-white rounded-xl border border-amber-200 overflow-hidden shadow-2xs">
        <div class="p-3 bg-amber-950 text-amber-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-heading">
          <span class="font-bold tracking-wide">${t.tableHeaderTitle}</span>
          <span class="text-[11px] font-sans text-amber-200 font-normal">${t.tableSubCount}</span>
        </div>
        <div class="overflow-x-auto">
          <table class="w-full text-left text-xs border-collapse mobile-responsive-table">
            <thead class="bg-amber-100 text-amber-950 text-[11px] uppercase tracking-wider">
              <tr>
                <th class="p-2.5">${t.thYear}</th>
                <th class="p-2.5 text-center">${t.thDlPop}</th>
                <th class="p-2.5 text-center">${t.thDlHouses}</th>
                <th class="p-2.5 text-center">${t.thBenPop}</th>
                <th class="p-2.5 text-center">${t.thBenHouses}</th>
                <th class="p-2.5 text-center">${t.thTotPop}</th>
                <th class="p-2.5 text-center">${t.thTotHouses}</th>
                <th class="p-2.5">${t.thNotes}</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-amber-100">
              ${CSU_CENSUS_SERIES.map(r => {
                const isLatest = r.highlight === "latest";
                const isPeak = r.highlight === "peak";
                const isSldb = r.highlight === "sldb";
                const isPre = r.era === "pre1869";
                const rowCls = isLatest
                  ? "bg-indigo-50/90 font-semibold"
                  : isPeak
                    ? "bg-amber-100/70"
                    : isSldb
                      ? "bg-emerald-50/60"
                      : isPre
                        ? "bg-amber-50/45 hover:bg-amber-50/80"
                        : "hover:bg-amber-50/40";
                const medNote = lang === "en" ? r.medNoteEn : lang === "de" ? r.medNoteDe : r.medNoteCs;
                const tag = lang === "en" ? r.tagEn : lang === "de" ? r.tagDe : r.tagCs;
                const pfx = r.popEst ? "~" : "";
                const hpfx = r.housesEst ? "~" : "";
                return `
                  <tr class="${rowCls} transition-colors ${r.numYear === 1869 ? 'border-t-2 border-amber-400' : ''}">
                    <td class="p-2.5 font-mono font-bold ${isPre ? 'text-amber-950' : 'text-slate-900'}" data-label="${t.thYear}">${r.year}</td>
                    <td class="p-2.5 text-center font-mono text-amber-950 font-semibold" data-label="${t.thDlPop}">${r.dlPop != null ? pfx + fmt(r.dlPop) : "—"}</td>
                    <td class="p-2.5 text-center font-mono ${isPre && !r.housesEst ? 'text-rose-900 font-bold' : 'text-slate-600'}" data-label="${t.thDlHouses}">${r.dlHouses != null ? (r.year === "1961" ? "174*" : hpfx + r.dlHouses) : "—"}</td>
                    <td class="p-2.5 text-center font-mono text-emerald-900 font-semibold" data-label="${t.thBenPop}">${r.benPop > 0 ? (r.numYear === 1793 ? "" : pfx) + fmt(r.benPop) : "—"}</td>
                    <td class="p-2.5 text-center font-mono ${isPre && !r.housesEst ? 'text-rose-900 font-bold' : 'text-slate-600'}" data-label="${t.thBenHouses}">${r.benHouses > 0 ? hpfx + r.benHouses : (r.year === "1961" ? inclDlLabel : "—")}</td>
                    <td class="p-2.5 text-center font-mono font-extrabold ${isLatest ? 'text-indigo-900' : 'text-slate-950'}" data-label="${t.thTotPop}">${pfx}${fmt(r.totPop)}</td>
                    <td class="p-2.5 text-center font-mono font-bold ${isPre ? 'text-rose-900' : 'text-slate-700'}" data-label="${t.thTotHouses}">${r.totHouses != null ? hpfx + fmt(r.totHouses) : "—"}</td>
                    <td class="p-2.5 text-slate-600 mobile-stack-cell" data-label="${t.thNotes}">
                      ${tag ? `<span class="inline-block px-1.5 py-0.5 mr-1 rounded text-[10px] font-bold ${isLatest ? 'bg-indigo-200 text-indigo-950' : isPeak ? 'bg-amber-200 text-amber-950' : isPre ? 'bg-amber-200/70 text-amber-950' : 'bg-slate-200 text-slate-800'}">${tag}</span>` : ""}
                      <span>${medNote || "—"}</span>
                    </td>
                  </tr>
                `;
              }).join("")}
            </tbody>
          </table>
        </div>
      </div>

      <!-- Citace a odkazy na prameny a otevřená data ČSÚ -->
      <div class="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[11px] text-slate-600 pt-1">
        <span class="font-bold text-slate-800">📚 ${t.sourcesLabel}</span>
        <a href="docs/demografie_csu_1869_2026.md" target="_blank" rel="noopener noreferrer" class="text-indigo-800 hover:text-indigo-950 underline font-semibold">${t.mdDocBtn}</a>
        <a href="docs/puvod_dluhomila_a_zdo_1356_1447.md" target="_blank" rel="noopener noreferrer" class="text-amber-900 hover:text-amber-950 underline font-medium">ZDO I–X (1275–1447) ↗</a>
        <a href="docs/lanove_rejstriky_a_rektifikace_1657_1756.md" target="_blank" rel="noopener noreferrer" class="text-amber-900 hover:text-amber-950 underline font-medium">MZA D 1–D 3 (1585–1756) ↗</a>
        <a href="https://vdb.czso.cz/vdbvo2/faces/cs/index.jsf?page=profil-uzemi&uzemiprofil=31588&u=__VUZEMI__43__533688" target="_blank" rel="noopener noreferrer" class="text-indigo-800 hover:text-indigo-950 underline font-medium">ČSÚ Profil obce (533688) ↗</a>
        <a href="https://data.csu.gov.cz/" target="_blank" rel="noopener noreferrer" class="text-indigo-800 hover:text-indigo-950 underline font-medium">DataStat API (2025/2026) ↗</a>
        <a href="https://csu.gov.cz/produkty/historicky-lexikon-obci-ceske-republiky-1869-2011" target="_blank" rel="noopener noreferrer" class="text-indigo-800 hover:text-indigo-950 underline font-medium">Historický lexikon obcí ČR ↗</a>
      </div>
    </div>
  `;

  protectLocalizedDomSubtree(container, lang);
}

function renderDemographyYearFilters() {
  const container = document.getElementById("demography-year-filter-btns");
  if (!container) return;

  const fmtNum = n => Number(n).toLocaleString('cs-CZ').replace(/\u00a0/g, ' ');
  const labels = {};
  DEMOGRAPHY_YEARS.forEach(yr => {
    const inh = getInhabitantsForYear(yr);
    if (yr === 'all') {
      labels[yr] = `Všechna sčítání (${fmtNum(inh.length)} záznamů)`;
    } else {
      const houseCount = new Set(inh.map(x => x.houseId)).size;
      labels[yr] = houseCount >= 20
        ? `${yr} (${fmtNum(inh.length)} osob – ${houseCount} stavení)`
        : `${yr} (${fmtNum(inh.length)} os.)`;
    }
  });

  container.innerHTML = DEMOGRAPHY_YEARS.map(yr => {
    const isActive = yr === currentDemographyYear;
    const activeClass = isActive 
      ? "bg-amber-800 text-white font-extrabold shadow-xs" 
      : "bg-amber-50 hover:bg-amber-100 text-slate-700 font-semibold";
    return `
      <button onclick="setDemographyYear('${yr}')" data-year="${yr}"
        class="demo-year-btn px-2.5 py-1 text-xs rounded-lg transition-all cursor-pointer ${activeClass}">
        ${labels[yr] || yr}
      </button>
    `;
  }).join("");
}

function setDemographyYear(yearStr) {
  const yr = yearStr === 'all' ? 'all' : parseInt(yearStr);
  currentDemographyYear = yr;
  renderDemographyYearFilters();
  renderDemographyAgeHistogram(yr);
}

function renderDemographyAgeHistogram(year) {
  const data = calculateHistogramData(year);
  if (!data) return;

  const metricsGrid = document.getElementById("demography-year-metrics-grid");
  if (metricsGrid) {
    const isSingleYear = data.year !== 'all';
    metricsGrid.innerHTML = `
      <div class="p-2.5 bg-white rounded-xl border border-amber-200 shadow-2xs text-center">
        <span class="text-[10px] uppercase font-bold text-slate-500">Záznamů</span>
        <div class="text-lg font-extrabold text-amber-950">${data.total}</div>
        <span class="text-[10px] text-slate-400">${isSingleYear ? 'osob v operátech' : 'záznamů celkem'}</span>
      </div>
      <div class="p-2.5 bg-white rounded-xl border border-amber-200 shadow-2xs text-center">
        <span class="text-[10px] uppercase font-bold text-slate-500">Průměrný věk</span>
        <div class="text-lg font-extrabold text-indigo-900">${data.avgAge} let</div>
        <span class="text-[10px] text-slate-400">aritmetický průměr</span>
      </div>
      <div class="p-2.5 bg-white rounded-xl border border-amber-200 shadow-2xs text-center">
        <span class="text-[10px] uppercase font-bold text-slate-500">Medián věku</span>
        <div class="text-lg font-extrabold text-teal-800">${data.medAge} let</div>
        <span class="text-[10px] text-slate-400">střední hodnota</span>
      </div>
      <div class="p-2.5 bg-white rounded-xl border border-amber-200 shadow-2xs text-center">
        <span class="text-[10px] uppercase font-bold text-slate-500">Děti (0–9 let)</span>
        <div class="text-lg font-extrabold text-rose-700">${data.binData[0].pct} %</div>
        <span class="text-[10px] text-slate-400">${data.binData[0].count} dětí</span>
      </div>
      <div class="p-2.5 bg-white rounded-xl border border-amber-200 shadow-2xs text-center">
        <span class="text-[10px] uppercase font-bold text-slate-500">Senioři (60+)</span>
        <div class="text-lg font-extrabold text-amber-800">${data.cohorts.seniors.pct} %</div>
        <span class="text-[10px] text-slate-400">${data.cohorts.seniors.count} výměnkářů</span>
      </div>
      <div class="p-2.5 bg-white rounded-xl border border-amber-200 shadow-2xs text-center">
        <span class="text-[10px] uppercase font-bold text-slate-500">Nejstarší obyvatel</span>
        <div class="text-xs font-bold text-amber-950 truncate" title="${data.oldest.name} (${data.oldest.age} let, čp. ${data.oldest.houseNumber})">${data.oldest.name}</div>
        <span class="text-[10px] font-extrabold text-amber-700">${data.oldest.age} let (čp. ${data.oldest.houseNumber})</span>
      </div>
    `;
  }

  const barsContainer = document.getElementById("demography-histogram-bars");
  if (barsContainer) {
    barsContainer.innerHTML = data.binData.map(bin => {
      const widthPct = Math.max((bin.count / data.maxCount) * 100, 3);
      return `
        <div class="space-y-1">
          <div class="flex items-center justify-between text-xs">
            <span class="font-bold text-slate-800 flex items-center gap-1.5">
              <span>${bin.label}</span>
              <span class="text-[11px] font-normal text-slate-500 hidden sm:inline">(${bin.sublabel})</span>
            </span>
            <span class="font-mono text-xs font-extrabold text-amber-950">
              ${bin.count} os. <span class="text-slate-400 font-normal">(${bin.pct} %)</span>
            </span>
          </div>
          <div class="w-full bg-slate-100 rounded-full h-3.5 overflow-hidden border border-slate-200/70 p-0.5">
            <div class="h-full rounded-full bg-gradient-to-r ${bin.barClass} transition-all duration-500" style="width: ${widthPct}%"></div>
          </div>
        </div>
      `;
    }).join("");
  }

  const cohortsGrid = document.getElementById("demography-cohorts-grid");
  if (cohortsGrid) {
    cohortsGrid.innerHTML = `
      <div class="p-3 bg-white rounded-xl border border-amber-200 shadow-2xs flex items-center justify-between">
        <div>
          <span class="text-[10px] uppercase font-bold text-rose-800">Děti a školáci (0–14 let)</span>
          <div class="text-xl font-extrabold text-slate-900">${data.cohorts.kids.count} osob</div>
          <span class="text-[11px] text-slate-500">Zastoupení: <strong>${data.cohorts.kids.pct} %</strong> populace</span>
        </div>
        <span class="text-3xl">🧒</span>
      </div>
      <div class="p-3 bg-white rounded-xl border border-amber-200 shadow-2xs flex items-center justify-between">
        <div>
          <span class="text-[10px] uppercase font-bold text-emerald-800">Produktivní věk (15–59 let)</span>
          <div class="text-xl font-extrabold text-slate-900">${data.cohorts.adults.count} osob</div>
          <span class="text-[11px] text-slate-500">Hospodáři, čeleď, dělníci: <strong>${data.cohorts.adults.pct} %</strong></span>
        </div>
        <span class="text-3xl">🔨</span>
      </div>
      <div class="p-3 bg-white rounded-xl border border-amber-200 shadow-2xs flex items-center justify-between">
        <div>
          <span class="text-[10px] uppercase font-bold text-amber-900">Výměnek a stáří (60+ let)</span>
          <div class="text-xl font-extrabold text-slate-900">${data.cohorts.seniors.count} osob</div>
          <span class="text-[11px] text-slate-500">Senioři a výměnkáři: <strong>${data.cohorts.seniors.pct} %</strong></span>
        </div>
        <span class="text-3xl">👴</span>
      </div>
    `;
  }

  const insightsContainer = document.getElementById("demography-age-insights");
  if (insightsContainer) {
    let insightText = "";
    if (data.year === 1921) {
      insightText = `
        <strong>💡 Historický vhled (Sčítání 1921 – kompletní obec: 155 stavení, 1 031 obyvatel, 210 bytů):</strong><br>
        První sčítání lidu v samostatné Československé republice (15. února 1921) zachycuje celou politickou obec (Dlouhomilov, Medelské i Benkov). Poprvé v dějinách překročil průměrný věk 32 let (<strong>32,1 let</strong>, medián <strong>28 let</strong>) a podíl seniorů nad 60 let dosáhl <strong>15,3 % (158 osob)</strong>. Oslabení kohorty dětí do 9 let (17,9 %) jasně odráží propad porodnosti a nepřítomnost mužů během první světové války. Nejstarší obyvatelkou byla 93letá výměnkářka <strong>Kateřina Hrubá (*1828)</strong> na čp. 20, nejmladší teprve 18denní novorozenec <strong>Jitřenka Ptáčková (*28. 1. 1921)</strong> na rychtě čp. 7. V obci žilo 124 textilních dělníků a řada dálkových migrantů (Oděsa 1 085 km, Rachov 566 km, Donawitz 315 km).
      `;
    } else if (data.year === 1910) {
      insightText = `
        <strong>💡 Historický vhled (Sčítání 1910 – historické maximum: 146 stavení, 1 177 obyvatel, 198 bytů):</strong><br>
        Absolutní populační vrchol obce v novodobých dějinách (1 177 osob v operátech, 1 168 se známým věkem). Šlo o mimořádně mladou společnost – téměř třetinu populace (<strong>32,3 % – 377 osob</strong>) tvořily děti do 14 let a medián věku byl pouhých <strong>23 let</strong> (průměr <strong>27,8 let</strong>). Vzkvétala práce pro šumperská bělidla firmy <em>Eduard Oberleithner a synové</em>. Nejstarší pamětnicí byla 95letá <strong>Marie Körnerová (*1815)</strong> na čp. 71, nejmladším kojenec <strong>Josef Koš (*1910)</strong> na čp. 5. Sčítání 1910 zároveň zachytilo italské dělníky z Abruzza (Constantin Jammarelli a Ascanio Piedra) na usedlosti v Benkově čp. 13 i schovanku z uherského Marmaroše (Markéta Eibová) v Medelském čp. 37.
      `;
    } else if (data.year === 1900) {
      insightText = `
        <strong>💡 Historický vhled (Sčítání 1900 – přelom století: 149 stavení, 1 140 obyvatel, 212 bytů):</strong><br>
        Přelom 19. a 20. století představoval vrchol tradiční venkovské natality. Děti a školáci do 14 let tvořili plných <strong>33,6 % (383 dětí!)</strong> a medián věku byl pouhých <strong>23 let</strong> (průměr <strong>28,3 let</strong>). V rodinách rolníků, domkářů i tkalců běžně vyrůstalo 6 až 9 sourozenců. Na velkých selských gruntech (čp. 7, 10, 22, 29) sloužily desítky mladých čeledínů a děveček. Nejstarším pamětníkem byl 86letý výměnkář <strong>Ignác Dvořák (*1814)</strong> na čp. 9, 81letá výměnkářka <strong>Josefa Jílková (*1819)</strong> na čp. 10 a 80letá <strong>Anna Mertová (*1820)</strong> na rychtě čp. 7. Nejmladším byl novorozený <strong>Josef Dvořák (*1900)</strong> na čp. 46.
      `;
    } else if (data.year === 1890) {
      insightText = `
        <strong>💡 Historický vhled (Sčítání 1890 – kompletní fond: 143 stavení, 1 095 obyvatel, 191 bytů):</strong><br>
        První sčítání lidu, z něhož se pro Dlouhomilov, Medelské i Benkov dochoval kompletní fond všech sčítacích archů. Obec poprvé překročila tisíc obyvatel (1 095 osob se známým věkem). Silný produktivní věk (<strong>57,5 % – 630 osob</strong>) a vysoký podíl dětí (<strong>32,6 % – 357 dětí</strong>) dokládají dynamický rozvoj řemesel, zemědělství i textilnictva. Nejstarším občanem byl úctyhodný 97letý <strong>Jan Hejgr (*1793)</strong> na usedlosti čp. 14 – jeden z nejstarších doložených pamětníků v historii obce. Nejmladší byla novorozená <strong>Zdeňka Mertová (*1890)</strong> na dědičné rychtě čp. 7.
      `;
    } else if (data.year === 1880) {
      insightText = `
        <strong>💡 Historický vhled (Sčítání 1880 – kompletní Dlouhomilov &amp; Medelské: 92 obydlených z 96 domů, 735 zapsaných / 699 přítomných obyvatel = 100 % ČSÚ, 143 bytů):</strong><br>
        První zcela dochovaný obraz celé obce Dlouhomilova (543 přítomných / 576 zapsaných v 75 domech, vč. zbořených či neobydlených čp. 19, 29 a 81) spolu s osadou Medelské (156 přítomných / 159 zapsaných ve 21 domech vč. čp. 3). Průměrný věk činil <strong>27,3 let</strong> (medián <strong>23 let</strong>), děti do 14 let tvořily <strong>33,1 % (243 dětí)</strong>, produktivní věk <strong>59,5 % (437 osob)</strong> a senioři nad 60 let <strong>7,5 % (55 osob)</strong>. Odhaluje výrazný nástup textilní industrializace – <strong>63 obyvatel</strong> už pracovalo v mechanických přádelnách lnu a dalších 14 v tkalcovství – vedle c. k. poštmistra Karla Katzera (čp. 8), faráře P. Antonína Riedla (čp. 47) a desítek řemeslnických učňů. Raritou celého století je 98letý výměnkář <strong>Jan Poisel (*1782)</strong> na čp. 54; nejmladším byl kojenec <strong>Jan Boxan (*1. 11. 1880)</strong> na rychtě čp. 7.
      `;
    } else if (data.year === 1869) {
      insightText = `
        <strong>💡 Historický vhled (Sčítání 1869 – 4 stavení, 56 obyvatel, 4 selské dvory):</strong><br>
        První celorakouské moderní sčítání lidu (31. prosince 1869) dochované pro dědičnou rychtu čp. 7 a grunty čp. 10, 22 a 29. Zobrazuje ranou fázi demografického přechodu s extrémní porodností: děti do 14 let tvořily více než třetinu populace (<strong>35,7 % – 20 dětí</strong>; samotné děti 0–9 let tvořily 26,8 %) a průměrný věk byl pouhých <strong>24,5 let</strong> (medián <strong>23 let</strong>). Senioři nad 60 let tvořili pouze 3,6 %, s výjimkou 76letého patriarchy <strong>Petra Dvořáka st. (*1793)</strong> na gruntě čp. 22. Na čp. 29 hospodařil Karel Dvořák s chotí Karolínou z Poděbrad a choval 49 ovcí.
      `;
    } else if (data.year === 1857) {
      insightText = `
        <strong>💡 Historický vhled (Sčítání 1857 – 4 stavení, 24 obyvatel, 4 selské dvory):</strong><br>
        Nejstarší dochované sčítací archy z předbřeznového a bachovského období na rychtě čp. 7 a gruntech čp. 10, 22 a 29. Průměrný věk byl <strong>24,9 let</strong> (medián <strong>24 let</strong>), děti do 14 let tvořily <strong>29,2 %</strong> a produktivní dospělí <strong>62,5 %</strong>. Zásadním zápisem na gruntě čp. 29 je syn sedláka Johanna Dvořáka <strong>Jan Dvořák (*1826)</strong>, zapsaný jako <em>„Jurist in Prag II“</em>, budoucí doktor práv (JUDr.), zemský advokát a poslanec Českého zemského sněmu. Nejstarším byl 64letý <strong>Petr Dvořák (*1793)</strong> na čp. 22, nejmladším novorozenec <strong>Johann Merta ml. (*1857)</strong> na rychtě čp. 7.
      `;
    } else {
      insightText = `
        <strong>💡 Dlouhodobý historický trend (1857–1921 – celkem 5 258 záznamů, 167 stavení):</strong><br>
        Longitudinální demografický profil mapuje 64 let vývoje moravské podhorské vesnice. Dokumentuje postupný přechod od agrární společnosti s vysokou dětskou natalitou (kolem 35 % dětí a medián 21–23 let v 19. století) přes průmyslový boom a kulminaci populace kolem roku 1910 (1 177 obyvatel, 124 textilních dělníků) až k demografickému stárnutí a hlubokým ztrátám první světové války patrným při sčítání 1921 (průměrný věk 32,1 let, 15,3 % seniorů).
      `;
    }
    insightsContainer.innerHTML = insightText;
  }

  renderDemographyLivelihoodComic(year);
}

function renderDemographyLivelihoodComic(year) {
  const container = document.getElementById("demography-livelihood-comic-card");
  if (!container || typeof censusLivelihoodAtlas === "undefined") return;

  const censusYearsOrder = [1857, 1869, 1880, 1890, 1900, 1910, 1921];

  if (year === "all" || !censusLivelihoodAtlas[year]) {
    container.innerHTML = `
      <div class="bg-gradient-to-br from-amber-50 via-white to-orange-50/70 p-4 sm:p-5 rounded-2xl border-2 border-amber-300 shadow-xs space-y-4">
        <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-3 pb-3 border-b border-amber-200">
          <div>
            <div class="flex flex-wrap items-center gap-2">
              <span class="px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider bg-amber-900 text-amber-50 rounded-full">
                🎨 Komiksový atlas obživy (1857–1921)
              </span>
              <span class="text-xs font-bold text-amber-900">
                7 sčítání lidu • 5 258 archivních záznamů • Zemědělství, řemesla, domáčtí tkalci &amp; továrny
              </span>
            </div>
            <h4 class="text-base sm:text-lg font-extrabold text-amber-950 font-heading mt-1">
              Čemu se věnovali obyvatelé Dlouhomilova, Medelského a Benkova v jednotlivých letech sčítání?
            </h4>
            <p class="text-xs text-slate-600 mt-0.5">
              Kliknutím na libovolný rok otevřete detailní rozbor profesí a věkovou pyramidu daného sčítání, nebo si komiksový obraz zvětšete:
            </p>
          </div>
          <a href="pribeh.html?page=census#comic" class="px-3 py-2 text-xs font-extrabold rounded-xl bg-amber-800 hover:bg-amber-900 text-white shadow-xs transition-all shrink-0 self-start lg:self-auto flex items-center gap-1.5">
            <span>📖</span> <span>Otevřít v Komiksové kronice (Str. VI–VII) →</span>
          </a>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5">
          ${censusYearsOrder.map(yr => {
            const item = censusLivelihoodAtlas[yr];
            if (!item) return "";
            const safeHead = (item.headline || "").replace(/'/g, "\'");
            const safeSum = (item.summary || "").replace(/'/g, "\'");
            return `
              <div class="bg-white rounded-xl border border-amber-300 overflow-hidden shadow-2xs flex flex-col justify-between hover:shadow-md transition-all">
                <div>
                  <div class="bg-stone-900 text-amber-50 px-3 py-1.5 flex items-center justify-between gap-2">
                    <span class="font-heading font-extrabold text-xs text-amber-300">Sčítání ${yr}</span>
                    <span class="text-[10px] font-mono text-amber-100/90">${item.totalRecords} zápisů (${item.housesCount} d.)</span>
                  </div>
                  <div class="relative group cursor-pointer overflow-hidden bg-stone-100 aspect-[4/3]"
                       onclick="openArchiveViewer('${item.image}', 'Sčítání ${yr}: ${safeHead}', '${safeSum}')">
                    <img src="${item.image}" alt="Obživa obyvatel Dlouhomilova – sčítání ${yr}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy">
                    <div class="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-stone-950/80 text-amber-100 text-[10px] font-bold">
                      🔍 Zvětšit komiks
                    </div>
                  </div>
                  <div class="p-3 space-y-1.5">
                    <h5 class="text-xs font-extrabold text-amber-950 font-heading leading-snug">${item.headline}</h5>
                    <p class="text-[11px] text-slate-600 leading-relaxed line-clamp-3">${item.summary}</p>
                  </div>
                </div>
                <div class="px-3 pb-3 pt-1 flex items-center justify-between gap-1.5">
                  <button type="button" onclick="setDemographyYear(${yr})" class="w-full px-2.5 py-1.5 text-[11px] font-extrabold bg-amber-100 hover:bg-amber-300 text-amber-950 rounded-lg border border-amber-400 transition-colors cursor-pointer">
                    📊 Detail obživy &amp; profesí ${yr}
                  </button>
                </div>
              </div>
            `;
          }).join("")}
        </div>
      </div>
    `;
    return;
  }

  const item = censusLivelihoodAtlas[year];
  let panelObj = null;
  if (typeof comicData !== "undefined" && Array.isArray(comicData.pages)) {
    comicData.pages.forEach(p => {
      (p.panels || []).forEach(pan => {
        if (pan.censusYear === Number(year) || pan.id === item.panelId) {
          panelObj = pan;
        }
      });
    });
  }

  const safeHead = (item.headline || "").replace(/'/g, "\'");
  const safeSum = (item.summary || "").replace(/'/g, "\'");
  const bubblesHtml = panelObj && Array.isArray(panelObj.bubbles)
    ? panelObj.bubbles.map((b, idx) => `
        <div class="p-2.5 rounded-xl bg-amber-50/90 border border-amber-300 text-xs shadow-2xs">
          <div class="font-extrabold text-amber-950 text-[11px] mb-0.5">💬 ${b.speaker}</div>
          <p class="italic text-slate-800">„${b.text}“</p>
        </div>
      `).join("")
    : "";

  container.innerHTML = `
    <div class="bg-gradient-to-br from-amber-50/90 via-white to-orange-50/70 p-4 sm:p-5 rounded-2xl border-2 border-amber-300 shadow-xs space-y-4">
      <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-3 pb-3 border-b border-amber-200">
        <div>
          <div class="flex flex-wrap items-center gap-2">
            <span class="px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider bg-amber-900 text-amber-50 rounded-full">
              🎨 Komiksový pohled na obživu • ${item.badge}
            </span>
            <span class="text-xs font-mono font-bold text-amber-950 bg-amber-100 px-2 py-0.5 rounded border border-amber-300">
              ${item.estVillagePop}
            </span>
          </div>
          <h4 class="text-base sm:text-lg font-extrabold text-amber-950 font-heading mt-1">
            Čemu se věnovali obyvatelé v roce ${year}: ${item.headline}
          </h4>
        </div>
        <div class="flex flex-wrap items-center gap-1.5 shrink-0">
          <button type="button" onclick="setDemographyYear('all')" class="px-2.5 py-1.5 text-xs font-bold rounded-xl bg-white hover:bg-amber-100 text-amber-950 border border-amber-300 cursor-pointer">
            🖼️ Všech 7 komiksů sčítání (1857–1921)
          </button>
          <a href="pribeh.html?page=census#comic" class="px-2.5 py-1.5 text-xs font-extrabold rounded-xl bg-amber-800 hover:bg-amber-900 text-white shadow-2xs">
            📖 Komiksová kronika →
          </a>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
        <!-- Levý sloupec: Komiksový obraz + dialogové bubliny -->
        <div class="lg:col-span-6 space-y-3">
          <div class="rounded-xl overflow-hidden border-2 border-stone-900 shadow-md bg-stone-900 group cursor-pointer relative"
               onclick="openArchiveViewer('${item.image}', 'Sčítání ${year}: ${safeHead}', '${safeSum}')">
            <img src="${item.image}" alt="Komiksový pohled na obživu obyvatel Dlouhomilova v roce ${year}" class="w-full h-auto block group-hover:scale-[1.02] transition-transform duration-300">
            <div class="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-md bg-stone-950/80 text-amber-100 text-[11px] font-bold shadow">
              🔍 Kliknutím zvětšit obraz
            </div>
          </div>
          ${bubblesHtml ? `<div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">${bubblesHtml}</div>` : ""}
        </div>

        <!-- Pravý sloupec: Rozbor obživy a profesních skupin v daném roce sčítání -->
        <div class="lg:col-span-6 space-y-3.5">
          <p class="text-xs sm:text-sm text-slate-700 leading-relaxed bg-white p-3.5 rounded-xl border border-amber-200 shadow-2xs">
            ${item.summary}
          </p>

          <div class="bg-white p-3.5 sm:p-4 rounded-xl border border-amber-200 shadow-2xs space-y-3">
            <div class="flex items-center justify-between text-xs font-extrabold text-amber-950 uppercase tracking-wider pb-1.5 border-b border-amber-100">
              <span>Hlavní skupiny obživy a povolání (${year})</span>
              <span>Počet &amp; podíl v operátech</span>
            </div>
            <div class="space-y-3">
              ${(item.sectors || []).map(sec => `
                <div class="space-y-1">
                  <div class="flex items-center justify-between gap-2 text-xs">
                    <span class="font-bold text-slate-900 flex items-center gap-1.5">
                      <span>${sec.icon}</span> <span>${sec.label}</span>
                    </span>
                    <span class="font-mono font-extrabold text-amber-950 shrink-0">
                      ${sec.count} os. <span class="text-slate-500 font-normal">(${sec.pct} %)</span>
                    </span>
                  </div>
                  <div class="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden border border-slate-200/80">
                    <div class="h-full ${sec.color} rounded-full" style="width: ${Math.max(sec.pct, 3)}%"></div>
                  </div>
                  <div class="text-[11px] text-slate-600 leading-snug">
                    <strong>Příklady z archů:</strong> ${sec.examples}
                  </div>
                </div>
              `).join("")}
            </div>
          </div>

          <div class="flex flex-wrap items-center justify-between gap-2 pt-1">
            <div class="flex flex-wrap items-center gap-1.5">
              ${censusYearsOrder.map(yr => `
                <button type="button" onclick="setDemographyYear(${yr})"
                  class="px-2.5 py-1 text-xs font-mono rounded-lg border transition-all cursor-pointer ${Number(yr) === Number(year) ? 'bg-amber-900 text-white border-amber-950 font-extrabold' : 'bg-white hover:bg-amber-100 text-amber-950 border-amber-300 font-bold'}">
                  🎨 ${yr}
                </button>
              `).join("")}
            </div>
            <a href="obyvatele.html?year=${year}" class="px-3 py-1.5 text-xs font-extrabold rounded-xl bg-amber-100 hover:bg-amber-300 text-amber-950 border border-amber-400 transition-colors">
              👥 Všichni obyvatelé r. ${year} v rejstříku →
            </a>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderDemographyYearsComparisonTable() {
  const container = document.getElementById("demography-years-comparison-table-wrapper");
  if (!container || typeof housesData === "undefined") return;

  const fmtNum = n => Number(n).toLocaleString('cs-CZ').replace(/\u00a0/g, ' ');
  const yearsList = [1857, 1869, 1880, 1890, 1900, 1910, 1921, 'all'];

  const rows = yearsList.map(yr => {
    const inh = getInhabitantsForYear(yr);
    const housesSet = new Set(inh.map(x => x.houseId));
    
    const bytySet = new Set();
    housesData.forEach(h => {
      (h.census || []).forEach(c => {
        if (yr === 'all' || c.year === yr) {
          (c.inhabitants || []).forEach(i => {
            const m = (i.relation || '').match(/Byt\s*(?:č\.\s*)?(\d+)/i);
            if (m) bytySet.add(h.id + '_b' + m[1]);
          });
        }
      });
    });

    inh.sort((a, b) => a.age - b.age);
    const ages = inh.map(x => x.age);
    const avgAge = ages.length ? (ages.reduce((s, x) => s + x, 0) / ages.length).toFixed(1) : '—';
    const medAge = ages.length ? ages[Math.floor(ages.length / 2)] : '—';
    const kids = inh.filter(x => x.age <= 14).length;
    const adults = inh.filter(x => x.age >= 15 && x.age <= 59).length;
    const seniors = inh.filter(x => x.age >= 60).length;

    const oldest = inh[inh.length - 1];
    const youngest = inh[0];
    const isActive = (yr === currentDemographyYear);

    return {
      year: yr,
      yearLabel: yr === 'all' ? 'Všechna sčítání' : yr,
      housesCount: housesSet.size,
      bytyCount: bytySet.size || housesSet.size,
      totalPop: inh.length,
      avgAge,
      medAge,
      kidsCount: kids,
      kidsPct: inh.length ? ((kids / inh.length) * 100).toFixed(1) : '0',
      adultsCount: adults,
      adultsPct: inh.length ? ((adults / inh.length) * 100).toFixed(1) : '0',
      seniorsCount: seniors,
      seniorsPct: inh.length ? ((seniors / inh.length) * 100).toFixed(1) : '0',
      oldest,
      youngest,
      isActive
    };
  });

  container.innerHTML = `
    <div class="p-3.5 sm:p-4 bg-gradient-to-r from-amber-900 to-stone-900 text-amber-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-amber-800">
      <div class="flex items-center gap-2">
        <span class="text-xl">📊</span>
        <div>
          <h4 class="font-bold text-sm sm:text-base font-heading text-white">
            Srovnávací demografický přehled podle jednotlivých let sčítání (1857–1921)
          </h4>
          <p class="text-[11px] text-amber-200/80">
            Vývoj věkového složení, kohort dětí, dospělých a seniorů napříč 7 sčítáními lidu v Dlouhomilově, Medelském a Benkově.
          </p>
        </div>
      </div>
      <div class="text-[11px] text-amber-200/90 font-mono">
        Kliknutím na řádek aktivujete věkový histogram
      </div>
    </div>
    <div class="overflow-x-auto">
      <table class="w-full text-left text-xs border-collapse mobile-responsive-table">
        <thead class="bg-amber-100/90 text-amber-950 text-[11px] uppercase tracking-wider font-heading sticky top-0">
          <tr>
            <th class="p-2.5">Rok sčítání</th>
            <th class="p-2.5 text-center">Stavení</th>
            <th class="p-2.5 text-center">Byty</th>
            <th class="p-2.5 text-center">Obyvatelé</th>
            <th class="p-2.5 text-center">Průměr věk</th>
            <th class="p-2.5 text-center">Medián</th>
            <th class="p-2.5 text-center">Děti (0–14)</th>
            <th class="p-2.5 text-center">Produktivní (15–59)</th>
            <th class="p-2.5 text-center">Senioři (60+)</th>
            <th class="p-2.5">Nejstarší obyvatel v operátu</th>
            <th class="p-2.5 text-right">Akce</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-amber-100">
          ${rows.map(r => {
            const rowClass = r.isActive 
              ? 'bg-amber-100/90 font-bold border-l-4 border-amber-800' 
              : 'hover:bg-amber-50/70 transition-colors cursor-pointer';
            return `
              <tr onclick="setDemographyYear('${r.year}')" class="${rowClass}">
                <td class="p-2.5 font-bold text-slate-900 whitespace-nowrap">
                  <span class="inline-flex items-center gap-1.5">
                    ${r.isActive ? '<span class="text-amber-800">▶</span>' : ''}
                    <span>${r.yearLabel}</span>
                  </span>
                </td>
                <td class="p-2.5 text-center font-mono text-slate-700">${r.housesCount}</td>
                <td class="p-2.5 text-center font-mono text-slate-700">${r.bytyCount}</td>
                <td class="p-2.5 text-center font-mono font-extrabold text-amber-950">${fmtNum(r.totalPop)}</td>
                <td class="p-2.5 text-center font-mono font-bold text-indigo-900">${r.avgAge} let</td>
                <td class="p-2.5 text-center font-mono font-semibold text-teal-800">${r.medAge} let</td>
                <td class="p-2.5 text-center font-mono text-rose-800">
                  ${r.kidsPct} % <span class="text-[10px] text-slate-400 font-normal">(${r.kidsCount})</span>
                </td>
                <td class="p-2.5 text-center font-mono text-emerald-800">
                  ${r.adultsPct} % <span class="text-[10px] text-slate-400 font-normal">(${r.adultsCount})</span>
                </td>
                <td class="p-2.5 text-center font-mono text-amber-800">
                  ${r.seniorsPct} % <span class="text-[10px] text-slate-400 font-normal">(${r.seniorsCount})</span>
                </td>
                <td class="p-2.5 text-[11px] text-slate-700">
                  ${r.oldest ? `<span class="font-semibold text-slate-900">${r.oldest.name}</span> (${r.oldest.age} let, čp. ${r.oldest.houseNumber})` : '—'}
                </td>
                <td class="p-2.5 text-right whitespace-nowrap">
                  <button type="button" onclick="event.stopPropagation(); setDemographyYear('${r.year}')" 
                    class="px-2 py-1 text-[10px] font-bold rounded-md ${r.isActive ? 'bg-amber-800 text-white' : 'bg-amber-100 hover:bg-amber-200 text-amber-950 border border-amber-300'} transition-all cursor-pointer">
                    ${r.isActive ? 'Aktivní ✓' : 'Zobrazit ➔'}
                  </button>
                </td>
              </tr>
            `;
          }).join('')}
        </tbody>
      </table>
    </div>
  `;
}

function renderDemographyOriginFilters() {
  const container = document.getElementById("demography-origin-filter-btns");
  if (!container) return;

  const filters = [
    { id: 'all', label: 'Všechna místa původu (220+)' },
    { id: 'local', label: 'Pouze místní (Dlouhomilov, Medelské, Benkov)' },
    { id: 'nearby', label: 'Sousedství (do 7,5 km)' },
    { id: 'broader', label: 'Zábřežsko & Šumpersko (7,5–18 km)' },
    { id: 'regional', label: 'Regionální Morava & Slezsko (18–60 km)' },
    { id: 'distant', label: 'Dálková migrace (> 60 km)' }
  ];

  container.innerHTML = filters.map(f => {
    const isActive = f.id === currentDemographyOriginFilter;
    const activeClass = isActive 
      ? "bg-amber-800 text-white font-extrabold shadow-xs" 
      : "bg-amber-50 hover:bg-amber-100 text-slate-700 font-semibold";
    return `
      <button onclick="setDemographyOriginFilter('${f.id}')" data-filter="${f.id}"
        class="demo-origin-btn px-2.5 py-1 text-xs rounded-lg transition-all cursor-pointer ${activeClass}">
        ${f.label}
      </button>
    `;
  }).join("");
}

function setDemographyOriginFilter(filter) {
  currentDemographyOriginFilter = filter;
  renderDemographyOriginFilters();
  renderDemographyOrigins(filter);
}

function renderDemographyOrigins(filter) {
  const data = calculateOriginsData(filter);
  if (!data) return;

  const ringsContainer = document.getElementById("demography-rings-container");
  if (ringsContainer) {
    const totalWithDist = data.allInhabitants.filter(x => x.distKm !== null && x.distKm >= 0).length || 1;
    ringsContainer.innerHTML = data.rings.map(ring => {
      const pct = ((ring.count / totalWithDist) * 100).toFixed(1);
      return `
        <div class="p-3 bg-white rounded-xl border border-amber-200 shadow-2xs space-y-1.5">
          <div class="flex items-center justify-between text-xs">
            <span class="font-bold text-slate-900 flex items-center gap-2">
              <span class="w-2.5 h-2.5 rounded-full ${ring.color}"></span>
              <span>${ring.name}</span>
            </span>
            <span class="font-mono text-xs font-extrabold text-amber-950">
              ${ring.count} osob <span class="text-slate-400 font-normal">(${pct} %)</span>
            </span>
          </div>
          <div class="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
            <div class="h-full rounded-full ${ring.color} transition-all duration-500" style="width: ${Math.max(pct, 2)}%"></div>
          </div>
        </div>
      `;
    }).join("");
  }

  const recordsGrid = document.getElementById("demography-distance-records-grid");
  if (recordsGrid) {
    recordsGrid.innerHTML = data.distantRecords.map(rec => `
      <div class="p-3.5 bg-white rounded-xl border border-amber-200 shadow-2xs hover:shadow-md transition-shadow space-y-2">
        <div class="flex items-center justify-between">
          <span class="px-2 py-0.5 text-xs font-extrabold rounded-md bg-amber-100 text-amber-900 border border-amber-300">
            ${rec.medal} ${rec.distKm} km
          </span>
          <span class="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
            sčítání ${rec.year} • ${rec.houseDisplay || ('čp. ' + rec.houseNumber)}
          </span>
        </div>
        <div>
          <div class="text-sm font-bold text-slate-900">${rec.name}</div>
          <div class="text-xs text-amber-900 font-semibold">${rec.place} <span class="text-slate-500 font-normal">(${rec.region})</span></div>
        </div>
        <p class="text-[11px] text-slate-600 leading-relaxed border-t border-amber-100 pt-1.5">
          <strong>${rec.role}:</strong> ${rec.desc}
        </p>
        <div class="pt-1 flex items-center justify-between">
          <button onclick="openHouseDetail('${rec.houseId}')" class="text-[11px] font-bold text-amber-800 hover:underline flex items-center gap-1 cursor-pointer">
            <span>🏠</span> <span>Otevřít stavení ${rec.houseDisplay || ('čp. ' + rec.houseNumber)}</span>
          </button>
        </div>
      </div>
    `).join("") + `
      <div class="p-3.5 bg-gradient-to-br from-indigo-50 to-white rounded-xl border border-indigo-200 shadow-2xs space-y-2">
        <div class="flex items-center justify-between">
          <span class="px-2 py-0.5 text-xs font-extrabold rounded-md bg-indigo-100 text-indigo-900 border border-indigo-300">
            🎓 ~186 km (Opačný směr)
          </span>
          <span class="text-[11px] font-bold text-indigo-700 uppercase tracking-wider">
            sčítání 1857 • čp. 29
          </span>
        </div>
        <div>
          <div class="text-sm font-bold text-slate-900">JUDr. Jan Dvořák (*1826)</div>
          <div class="text-xs text-indigo-900 font-semibold">Praha <span class="text-slate-500 font-normal">(hlavní město)</span></div>
        </div>
        <p class="text-[11px] text-slate-600 leading-relaxed border-t border-indigo-100 pt-1.5">
          <strong>Doktor práv (JUDr.):</strong> Nejstarší doložená vysokoškolská dráha rodáka z Dlouhomilova. Ve sčítacím operátu 1857 u sedláka Johanna Dvořáka zapsán syn Jan jako <em>„Jurist in Prag II“</em>, v operátu 1869 je již evidován s titulem Doktor.
        </p>
        <div class="pt-1">
          <button onclick="openPersonModal('p_dr_jan_dvorak_1826')" class="text-[11px] font-bold text-indigo-800 hover:underline flex items-center gap-1 cursor-pointer">
            <span>👤</span> <span>Zobrazit životopis doktora práv ➔</span>
          </button>
        </div>
      </div>
    `;
  }

  const tableBody = document.getElementById("demography-origins-table-body");
  const tableCount = document.getElementById("demography-origin-table-count");
  if (tableBody) {
    let filteredPlaces = [...data.placesList];
    if (filter === 'local') {
      filteredPlaces = filteredPlaces.filter(p => p.distKm !== null && p.distKm <= 2.0);
    } else if (filter === 'nearby') {
      filteredPlaces = filteredPlaces.filter(p => p.distKm !== null && p.distKm > 2.0 && p.distKm <= 7.5);
    } else if (filter === 'broader') {
      filteredPlaces = filteredPlaces.filter(p => p.distKm !== null && p.distKm > 7.5 && p.distKm <= 18.0);
    } else if (filter === 'regional') {
      filteredPlaces = filteredPlaces.filter(p => p.distKm !== null && p.distKm > 18.0 && p.distKm <= 60.0);
    } else if (filter === 'distant') {
      filteredPlaces = filteredPlaces.filter(p => p.distKm !== null && p.distKm > 60.0);
    }

    filteredPlaces.sort((a, b) => (b.distKm || 0) - (a.distKm || 0));

    if (tableCount) {
      tableCount.textContent = `Zobrazeno: ${filteredPlaces.length} obcí`;
    }

    tableBody.innerHTML = filteredPlaces.map(p => {
      const distLabel = p.distKm !== null && p.distKm >= 0 ? `${p.distKm} km` : (p.distKm === -1 ? 'Morava' : '—');
      const ringBadge = p.ring ? `<span class="px-2 py-0.5 rounded text-[10px] font-bold ${p.ring.badge}">${p.ring.name}</span>` : '—';
      const housesStr = Array.from(p.houses).sort((a,b)=>parseInt(a)-parseInt(b)).map(h => `čp. ${h}`).join(', ');
      const peopleSample = p.people.slice(0, 3).map(x => `${x.name} (*${x.birthDate})`).join(', ') + (p.people.length > 3 ? ` a dalších ${p.people.length - 3}` : '');

      return `
        <tr class="hover:bg-amber-50/70 transition-colors">
          <td class="p-2.5 font-bold text-slate-900">${p.name}</td>
          <td class="p-2.5 text-center font-mono font-bold text-amber-950" data-label="Vzdálenost">${distLabel}</td>
          <td class="p-2.5 text-center font-mono font-extrabold text-slate-800" data-label="Počet osob">${p.count}</td>
          <td class="p-2.5" data-label="Migrační pásmo">${ringBadge}</td>
          <td class="p-2.5 text-slate-600 text-[11px] mobile-stack-cell" data-label="Zastoupená stavení">
            <span class="font-semibold text-amber-950">${housesStr}</span>: ${peopleSample}
          </td>
        </tr>
      `;
    }).join("");
  }
}

function renderDemographyWealthFilters() {
  const container = document.getElementById("demography-wealth-filter-btns");
  if (!container) return;

  const filters = [
    { id: 'all', label: 'Všechna stavení (158)' },
    { id: 'rychta', label: 'I. Rychta & Velkostatek (1)' },
    { id: 'grunt', label: 'II. Selské grunty (18)' },
    { id: 'malorolnik', label: 'III. Malorolníci (53)' },
    { id: 'domkar', label: 'IV. Domkáři & Textil (86)' }
  ];

  container.innerHTML = filters.map(f => {
    const isActive = f.id === currentDemographyWealthFilter;
    const activeClass = isActive 
      ? "bg-amber-800 text-white font-extrabold shadow-xs" 
      : "bg-amber-50 hover:bg-amber-100 text-slate-700 font-semibold";
    return `
      <button onclick="setDemographyWealthFilter('${f.id}')" data-filter="${f.id}"
        class="demo-wealth-btn px-2.5 py-1 text-xs rounded-lg transition-all cursor-pointer ${activeClass}">
        ${f.label}
      </button>
    `;
  }).join("");
}

function setDemographyWealthFilter(filter) {
  currentDemographyWealthFilter = filter;
  renderDemographyWealthFilters();
  renderDemographyHouseholds();
}

function applyDemographyHouseSearch(query) {
  currentDemographyHouseSearch = query;
  renderDemographyHouseholds();
}

function renderDemographyHouseholds() {
  const housesDataList = calculateHouseholdsData(currentDemographyWealthFilter, currentDemographyHouseSearch);

  const tiersGrid = document.getElementById("demography-wealth-tiers-grid");
  if (tiersGrid) {
    tiersGrid.innerHTML = `
      <div class="p-3.5 bg-white rounded-xl border border-amber-900 shadow-2xs space-y-1.5">
        <div class="flex items-center justify-between">
          <span class="px-2 py-0.5 text-[10px] font-bold uppercase rounded bg-amber-950 text-amber-100">I. Rychta & Velkostatek</span>
          <span class="text-xl">👑</span>
        </div>
        <div class="text-sm font-bold text-slate-900">Dědičná rychta (čp. 7)</div>
        <p class="text-[11px] text-slate-600 leading-relaxed">
          Uzavřený zděný dvůr, <strong>4–6 koní</strong>, <strong>15–25 ks skotu</strong>, <strong>4–7 stálých čeledínů/děveček</strong>, 3–5 bytů, hostinec, kovárna a zkoušená porodní bába.
        </p>
      </div>

      <div class="p-3.5 bg-white rounded-xl border border-emerald-300 shadow-2xs space-y-1.5">
        <div class="flex items-center justify-between">
          <span class="px-2 py-0.5 text-[10px] font-bold uppercase rounded bg-emerald-800 text-white">II. Selské grunty (18)</span>
        </div>
        <div class="text-sm font-bold text-slate-900">Dlouhomilov, Medelské i Benkov</div>
        <p class="text-[11px] text-slate-600 leading-relaxed">
          Velké usedlosti s potahem (<strong>pár koní</strong>), <strong>6–12 ks skotu</strong>, stálá čeleď a výměnek. V r. 1869 na čp. 29 chov <strong>49 ovcí</strong>.
        </p>
      </div>

      <div class="p-3.5 bg-white rounded-xl border border-amber-300 shadow-2xs space-y-1.5">
        <div class="flex items-center justify-between">
          <span class="px-2 py-0.5 text-[10px] font-bold uppercase rounded bg-amber-600 text-white">III. Malorolníci (53)</span>
          <span class="text-xl">🌾</span>
        </div>
        <div class="text-sm font-bold text-slate-900">Usedlosti & živnosti</div>
        <p class="text-[11px] text-slate-600 leading-relaxed">
          Menší polnosti bez koní (orba s kravami), <strong>2–5 ks skotu</strong>, obdělávání vlastní rodinou, kombinace s řemeslem (obuvníci, stolaři, zedníci, kováři).
        </p>
      </div>

      <div class="p-3.5 bg-white rounded-xl border border-slate-300 shadow-2xs space-y-1.5">
        <div class="flex items-center justify-between">
          <span class="px-2 py-0.5 text-[10px] font-bold uppercase rounded bg-slate-700 text-white">IV. Domkáři & Textil (86)</span>
          <span class="text-xl">🏚️</span>
        </div>
        <div class="text-sm font-bold text-slate-900">Dělnická stavení & chalupy</div>
        <p class="text-[11px] text-slate-600 leading-relaxed">
          Chalupy bez polního potahu, 1–3 byty v domě, obživa v šumperských bělidlech fy <strong>Eduard Oberleithner a synové</strong> (124 osob v 63 domech), železnice ČSD a živností.
        </p>
      </div>`;
  }

  const tableBody = document.getElementById("demography-houses-table-body");
  const countBadge = document.getElementById("demography-house-table-count");
  if (countBadge) {
    countBadge.textContent = `Zobrazeno: ${housesDataList.length} stavení`;
  }

  if (tableBody) {
    if (housesDataList.length === 0) {
      tableBody.innerHTML = `<tr><td colspan="9" class="p-4 text-center text-slate-400 italic">Žádné stavení neodpovídá zvoleným filtrům.</td></tr>`;
      return;
    }

    tableBody.innerHTML = housesDataList.map(item => {
      const occupationsStr = [
        ...item.textilPersons.map(t => `<span class="inline-block px-1.5 py-0.5 rounded text-[10px] font-semibold bg-amber-100 text-amber-950 border border-amber-300">🧵 ${t}</span>`),
        ...item.remesloPersons.map(r => `<span class="inline-block px-1.5 py-0.5 rounded text-[10px] font-semibold bg-blue-100 text-blue-950 border border-blue-300">🔨 ${r}</span>`)
      ].join(" ") || '<span class="text-slate-400 italic">Zemědělství</span>';

      const livestockStr = item.livestockBadges.length > 0 
        ? `<div class="space-y-0.5 font-mono text-[11px] text-slate-700">${item.livestockBadges.map(b => `<div>${b}</div>`).join("")}</div>`
        : '<span class="text-slate-400 italic">Neuvedeno v operátu</span>';

      return `
        <tr class="hover:bg-amber-50/70 transition-colors">
          <td class="p-3">
            <button onclick="openHouseDetail('${item.houseId}')" class="text-left group cursor-pointer">
              <div class="font-extrabold text-amber-950 group-hover:text-amber-700 transition-colors flex items-center gap-1">
                <span>${item.houseDisplay || ('čp. ' + item.houseNumber)}</span>
                <span class="text-[10px] text-slate-400 font-normal">(${item.houseId})</span>
              </div>
              <div class="text-[11px] text-slate-600 line-clamp-1">${item.houseName}</div>
            </button>
          </td>
          <td class="p-3">
            <span class="inline-block px-2 py-0.5 rounded-full text-[10px] font-bold border ${item.wealth.badgeClass}">
              ${item.wealth.icon} ${item.wealth.label.split('.')[1] || item.wealth.label}
            </span>
          </td>
          <td class="p-3 text-center font-mono font-bold text-slate-800" data-label="Byty (1921)">${item.apt1921}</td>
          <td class="p-3 text-center font-mono font-extrabold text-amber-950" data-label="Osob (1921)">${item.pop1921}</td>
          <td class="p-3 text-center font-mono font-bold ${item.celedCount > 0 ? 'text-amber-900 bg-amber-50 rounded font-extrabold' : 'text-slate-400'}" data-label="Čeleď">${item.celedCount}</td>
          <td class="p-3 text-center font-mono font-bold ${item.vymenekCount > 0 ? 'text-stone-800' : 'text-slate-400'}" data-label="Výměnek">${item.vymenekCount}</td>
          <td class="p-3 max-w-xs space-y-1 mobile-stack-cell" data-label="Zaměstnání / Textil">${occupationsStr}</td>
          <td class="p-3 max-w-sm mobile-stack-cell" data-label="Chovaný dobytek">${livestockStr}</td>
          <td class="p-3 text-right">
            <button onclick="openHouseDetail('${item.houseId}')" 
              class="px-2.5 py-1 text-xs font-bold rounded-lg bg-amber-800 hover:bg-amber-700 text-white shadow-2xs transition-all whitespace-nowrap cursor-pointer">
              Detail ➔
            </button>
          </td>
        </tr>
      `;
    }).join("");
  }
}
