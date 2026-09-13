/**
 * Aplikační logika pro Historickou Wiki a prohlídku Dlouhomilova
 * S integrovaným biografickým modulem obyvatel, souborným rejstříkem sčítání lidu s kategoriemi a Archivním prohlížečem scanů
 */

let map;
let markers = {};
let baseLayers = {};
let overlayLayers = {};
let currentHouseId = "cp29";
let selectedCensusYear = 1921;
let currentHeritageFilter = "all";
let currentPeopleFilter = "all";
let currentRegistrySurnameFilter = "all";
let currentRegistryCategoryFilter = "all";
let currentScanZoom = 1.0;

// Pomocná normalizační funkce pro české vyhledávání (odstranění diakritiky)
function normalizeSearchText(text) {
  if (!text) return '';
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
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
    'hausbesitzer', 'grundbesitzer', 'lanik', 'lanici'
  ],
  rodina: [
    'rodina', 'rodiny', 'rodine',
    'manzelka', 'manzelky', 'manzel', 'manzele', 'zena',
    'syn', 'synove', 'syna', 'dcera', 'dcery', 'dceru',
    'bratr', 'bratri', 'bratra', 'sestra', 'sestry',
    'matka', 'matky', 'otec', 'otce', 'tchyne'
  ],
  vymenek: [
    'vymenek', 'vymenku', 'vymenkar', 'vymenkari', 'vymenkarka', 'vymenkarce',
    'ausgeding', 'ausgedinger'
  ],
  celed: [
    'celed', 'celedi', 'celedin', 'celedini', 'celedina',
    'pohunek', 'pohunci', 'pohunka', 'pacholek', 'pacholci',
    'devecka', 'devecky', 'devecce', 'slouzka', 'slouzky', 'slouzce',
    'sluzebna', 'sluzebne', 'sluzebnik', 'komornik'
  ],
  remeslo: [
    'remeslo', 'remesla', 'remeslnik', 'remeslnici',
    'tkadlec', 'tkadlci', 'tkalcovstvi',
    'zednik', 'zednici', 'zamecnik', 'zamecnici',
    'obuvnik', 'obuvnici', 'mlynar', 'mlynari',
    'siti', 'prastlena', 'pradlena', 'delnik', 'delnici', 'delnice',
    'kovar', 'truhlar'
  ],
  vzdelanec: [
    'vzdelanec', 'vzdelanci', 'jurist', 'doktor', 'doktori', 'pravnik', 'pravnici',
    'advokat', 'farar', 'farari', 'knez', 'knezi', 'ucitel', 'ucitele'
  ],
  podruh: [
    'podruh', 'podruzi', 'podruha', 'podnajemnik', 'podnajemnici',
    'domkar', 'domkari', 'domkarske', 'najemnik', 'hausler', 'inwohner'
  ],
  dite: [
    'dite', 'deti', 'detem', 'kojenec', 'kojenci', 'chovi',
    'skolak', 'skolaci', 'skolacka', 'zak', 'zaci', 'zacka'
  ]
};

// Inicializace po načtení stránky
document.addEventListener("DOMContentLoaded", () => {
  initMap();
  renderHouseCards();
  renderCensusRegistryTable();
  renderPeopleSection();
  renderGuideSection();
  renderDictionary();
  setupEventListeners();
  openHouseDetail(currentHouseId);
});

// Inicializace mapy (Leaflet s přesnými souřadnicemi Dlouhomilova)
function initMap() {
  const dlouhomilovCenter = [49.9075, 16.9908];
  
  map = L.map("map", {
    center: dlouhomilovCenter,
    zoom: 16,
    zoomControl: true
  });

  // 1. Podkladové mapy (Base Layers)
  baseLayers.osm = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> přispěvatelé',
    maxZoom: 19
  }).addTo(map);

  baseLayers.ortho = L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}", {
    attribution: "Letecké snímky &copy; Esri, Maxar, ČÚZK",
    maxZoom: 19
  });

  baseLayers.topo = L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
    attribution: 'Map data &copy; OpenStreetMap, SRTM | Map style &copy; OpenTopoMap',
    maxZoom: 17
  });

  // 2. Georeferencovaný historický stabilní katastr (1834) přesně nad Dlouhomilovem
  const boundsCadastre = [
    [49.9010, 16.9850],
    [49.9140, 16.9970]
  ];

  const svgOverlayUrl = createStableCadastreOverlaySVG();
  overlayLayers.cadastre1834 = L.imageOverlay(svgOverlayUrl, boundsCadastre, {
    opacity: 0.75,
    interactive: false
  }).addTo(map);

  // Ovládání vrstev v pravém horním rohu
  const baseMaps = {
    "🗺️ OpenStreetMap (Dnešní)": baseLayers.osm,
    "🛰️ Dnešní letecká (Ortofoto)": baseLayers.ortho,
    "🏔️ Topografická mapa": baseLayers.topo
  };

  const overlayMaps = {
    "📜 Císařský otisk stabilního katastru (1834)": overlayLayers.cadastre1834
  };

  L.control.layers(baseMaps, overlayMaps, { position: "topright" }).addTo(map);

  // Přidání markerů pro jednotlivá stavení
  renderMapMarkers();
}

// Vykreslení markerů na mapě
function renderMapMarkers() {
  Object.values(markers).forEach(m => map.removeLayer(m));
  markers = {};

  housesData.forEach((house) => {
    const isFeatured = house.id === "cp29";
    const isHeritage = house.isHeritage;
    
    let markerClass = "custom-house-marker";
    if (isFeatured) markerClass += " featured";
    else if (isHeritage) markerClass += " bg-red-700 text-white border-red-300";

    const customIcon = L.divIcon({
      className: markerClass,
      html: `<span>${house.isHeritage ? '🏛️' : ''}${house.number}</span>`,
      iconSize: [38, 38],
      iconAnchor: [19, 19]
    });

    const marker = L.marker([house.location.lat, house.location.lng], { icon: customIcon })
      .addTo(map)
      .bindTooltip(`<strong>${house.isHeritage ? '🏛️ ' : ''}čp. ${house.number}</strong><br>${house.localName}${house.isHeritage ? '<br><span class="text-[10px] text-red-600 font-bold">Kulturní památka ČR</span>' : ''}`, {
        direction: "top",
        offset: [0, -10]
      });

    marker.on("click", () => {
      openHouseDetail(house.id);
      document.getElementById("house-detail-container")?.scrollIntoView({ behavior: "smooth" });
    });

    markers[house.id] = marker;
  });
}

// Generování georeferencovaného vektorového překryvu stabilního katastru (1834)
function createStableCadastreOverlaySVG() {
  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" width="1000" height="1000">
    <path d="M 520 950 Q 510 500 500 50" fill="none" stroke="#d97706" stroke-width="14" opacity="0.3" stroke-dasharray="8 4"/>
    <path d="M 540 980 Q 530 520 520 20" fill="none" stroke="#0284c7" stroke-width="8" opacity="0.4"/>

    <!-- Dlouhomilov čp. 29 (st. 38) -->
    <g transform="translate(420, 540)">
      <rect x="0" y="0" width="44" height="22" fill="#dc2626" opacity="0.9" stroke="#991b1b" stroke-width="2"/>
      <rect x="0" y="22" width="18" height="32" fill="#f59e0b" opacity="0.85" stroke="#d97706" stroke-width="2"/>
      <rect x="24" y="34" width="42" height="20" fill="#f59e0b" opacity="0.85" stroke="#d97706" stroke-width="2"/>
      <text x="16" y="15" font-size="11" font-weight="bold" fill="#ffffff" font-family="sans-serif">29</text>
      <text x="28" y="28" font-size="9" fill="#78350f" font-family="sans-serif">st. 38</text>
    </g>

    <!-- Kostel Všech svatých čp. 1 (st. 1) -->
    <g transform="translate(515, 395)">
      <path d="M 0 10 L 25 0 L 50 10 L 50 35 L 0 35 Z" fill="#b91c1c" opacity="0.95" stroke="#7f1d1d" stroke-width="2"/>
      <ellipse cx="25" cy="22" rx="42" ry="32" fill="none" stroke="#78350f" stroke-width="2" stroke-dasharray="4 2" opacity="0.6"/>
      <text x="18" y="24" font-size="12" font-weight="bold" fill="#ffffff">1</text>
    </g>

    <!-- Rychta čp. 7 (st. 10) -->
    <g transform="translate(525, 320)">
      <rect x="0" y="0" width="48" height="25" fill="#dc2626" opacity="0.9" stroke="#991b1b" stroke-width="2"/>
      <rect x="0" y="25" width="48" height="25" fill="#f59e0b" opacity="0.85" stroke="#d97706" stroke-width="2"/>
      <text x="18" y="17" font-size="11" font-weight="bold" fill="#ffffff">7</text>
      <text x="10" y="42" font-size="8" fill="#78350f">Rychta</text>
    </g>

    <!-- Usedlost čp. 5 (st. 7) -->
    <g transform="translate(535, 455)">
      <rect x="0" y="0" width="36" height="20" fill="#dc2626" opacity="0.85" stroke="#991b1b" stroke-width="2"/>
      <rect x="0" y="20" width="36" height="18" fill="#f59e0b" opacity="0.85" stroke="#d97706" stroke-width="2"/>
      <text x="12" y="14" font-size="10" font-weight="bold" fill="#ffffff">5</text>
    </g>

    <!-- Usedlost čp. 24 (st. 32) -->
    <g transform="translate(410, 350)">
      <rect x="0" y="0" width="38" height="22" fill="#dc2626" opacity="0.85" stroke="#991b1b" stroke-width="2"/>
      <rect x="0" y="22" width="38" height="25" fill="#f59e0b" opacity="0.85" stroke="#d97706" stroke-width="2"/>
      <text x="10" y="15" font-size="10" font-weight="bold" fill="#ffffff">24</text>
    </g>

    <!-- Usedlost ve svahu čp. 43 (st. 55) -->
    <g transform="translate(620, 880)">
      <rect x="0" y="0" width="35" height="22" fill="#dc2626" opacity="0.85" stroke="#991b1b" stroke-width="2"/>
      <text x="10" y="15" font-size="10" font-weight="bold" fill="#ffffff">43</text>
    </g>

    <!-- Škola čp. 12 (st. 18) -->
    <g transform="translate(460, 160)">
      <rect x="0" y="0" width="32" height="22" fill="#dc2626" opacity="0.85" stroke="#991b1b" stroke-width="2"/>
      <text x="9" y="15" font-size="10" font-weight="bold" fill="#ffffff">12</text>
    </g>
  </svg>
  `;
  return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
}

// Změna průhlednosti historické mapy stabilního katastru
function updateCadastreOpacity(val) {
  const opacity = parseFloat(val) / 100;
  if (overlayLayers.cadastre1834) {
    overlayLayers.cadastre1834.setOpacity(opacity);
  }
  const label = document.getElementById("opacity-value-label");
  if (label) label.textContent = `${val}%`;
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

  if (overlayLayers.cadastre1834 && !map.hasLayer(overlayLayers.cadastre1834)) {
    overlayLayers.cadastre1834.addTo(map);
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

function openArchiveViewer(scanUrl, title, sourceInfo, localPath) {
  const modal = document.getElementById("archive-viewer-modal");
  const img = document.getElementById("viewer-scan-img");
  const titleEl = document.getElementById("viewer-doc-title");
  const sourceEl = document.getElementById("viewer-doc-source");
  const pathEl = document.getElementById("viewer-file-path");
  const downloadBtn = document.getElementById("viewer-download-btn");

  if (!modal || !img) return;

  currentScanZoom = 1.0;
  img.style.transform = `scale(${currentScanZoom})`;
  img.src = scanUrl;

  if (titleEl) titleEl.textContent = title || "Archivní dokument";
  if (sourceEl) sourceEl.textContent = sourceInfo || "Zemský archiv v Opavě / SOkA Šumperk";
  if (pathEl) pathEl.textContent = localPath || scanUrl;
  if (downloadBtn) downloadBtn.href = scanUrl;

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
// SOUBORNÝ REJSTŘÍK OBYVATEL ZE SČÍTÁNÍ LIDU S KATEGORIEMI (306 OSOB)
// ==========================================================================

function renderCensusRegistryTable(filteredData = null) {
  const tableBody = document.getElementById("census-registry-table-body");
  const countBadge = document.getElementById("registry-count-badge");
  if (!tableBody || typeof censusRegistryData === "undefined") return;

  const records = filteredData || censusRegistryData;

  if (countBadge) {
    let extraFilterNote = "";
    if (currentRegistryCategoryFilter === "grunt") {
      extraFilterNote = " (Držitelé gruntů & hospodáři)";
    } else if (currentRegistryCategoryFilter !== "all") {
      extraFilterNote = ` (${currentRegistryCategoryFilter})`;
    }
    countBadge.textContent = `Zobrazeno: ${records.length} osob${extraFilterNote}`;
  }

  if (records.length === 0) {
    tableBody.innerHTML = `
      <tr>
        <td colspan="9" class="p-8 text-center text-slate-500 italic space-y-2">
          <p class="text-sm font-semibold text-slate-700">Nebyly nalezeny žádné záznamy odpovídající zadaným filtrům.</p>
          <p class="text-xs text-slate-400">Zkuste resetovat hledání nebo zvolit jinou kategorii / stavení.</p>
          <button onclick="resetAllRegistryFilters()" class="mt-2 px-3 py-1.5 bg-amber-800 text-white font-bold text-xs rounded-lg shadow hover:bg-amber-900 transition-all">
            Zobrazit všechny obyvatele (306)
          </button>
        </td>
      </tr>
    `;
    return;
  }

  tableBody.innerHTML = records.map(r => {
    // Check if we have an expanded biography profile in peopleData
    const hasPersonProfile = typeof peopleData !== "undefined" && peopleData.some(p => 
      p.name.toLowerCase().includes(r.firstName.toLowerCase()) && 
      p.name.toLowerCase().includes(r.lastName.toLowerCase().split('ová')[0])
    );

    const badgeClass = r.categoryBadgeClass || 'bg-slate-100 text-slate-800 border-slate-300';
    const icon = r.categoryIcon || '👤';
    const catLabel = r.categoryLabel || 'Obyvatel obce';

    return `
      <tr class="hover:bg-amber-50/70 transition-colors border-b border-amber-100 ${r.categoryKey === 'grunt' ? 'bg-emerald-50/20' : ''}">
        <td class="p-3 font-semibold text-slate-900">
          <div class="flex items-center gap-1.5">
            <span class="text-amber-900 font-bold">${r.fullName}</span>
            ${hasPersonProfile ? `
              <button onclick="openPersonModalByName('${r.fullName}')" title="Otevřít životopis a matriky N/O/Z" class="px-1.5 py-0.5 bg-amber-100 hover:bg-amber-200 text-amber-900 text-[10px] rounded border border-amber-300 font-bold whitespace-nowrap">
                👤 Profil
              </button>
            ` : ''}
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
            čp. ${r.houseNumber} ↗
          </button>
        </td>
        <td class="p-3 text-slate-700 text-xs">${r.relation || '-'}</td>
        <td class="p-3 text-xs">
          <strong>${r.birthDate}</strong><br>
          <span class="text-slate-500 text-[11px]">${r.birthPlace}</span>
        </td>
        <td class="p-3 text-xs">
          <span class="bg-amber-50 px-2 py-0.5 rounded border border-amber-200 font-medium text-slate-800">${r.occupation}</span>
        </td>
        <td class="p-3 text-[11px] text-slate-600 max-w-xs truncate" title="${r.notes}">
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

      // Direct string match
      const directMatch = normFullName.includes(normSearch) ||
        normOccupation.includes(normSearch) ||
        normRelation.includes(normSearch) ||
        normNotes.includes(normSearch) ||
        normCategoryLabel.includes(normSearch) ||
        normBirthPlace.includes(normSearch) ||
        normHouseNum === normSearch;

      // Semantic category match (e.g. searching "drzitele", "drzitele gruntu", "sedlaci")
      const catMatch = queryTargetsCategoryKey && (r.categoryKey === queryTargetsCategoryKey);

      matchesSearch = directMatch || catMatch;
    }

    // 2. House filter
    const matchesHouse = (houseVal === "all") || (r.houseNumber === houseVal);

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

  renderCensusRegistryTable(filtered);
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
function filterByGruntHolders() {
  setRegistryCategoryFilter('grunt');
  
  const target = document.getElementById("rejstrik-scitani-section");
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
        <p class="text-xs text-slate-600 line-clamp-2 leading-relaxed">${p.biography}</p>
      </div>

      <div class="mt-4 pt-3 border-t border-amber-100 flex items-center justify-between text-xs">
        <span class="text-[11px] text-slate-500">📚 ${p.events.length} archivních záznamů</span>
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
    if (btn.dataset.rod === type) {
      btn.classList.add("bg-amber-800", "text-white");
      btn.classList.remove("bg-white", "text-slate-700", "text-emerald-950");
    } else {
      btn.classList.remove("bg-amber-800", "text-white");
      btn.classList.add("bg-white");
    }
  });

  if (type === 'all') {
    renderPeopleSection(peopleData);
  } else if (type === 'grunt') {
    renderPeopleSection(peopleData.filter(p => p.categoryKey === 'grunt'));
  } else if (type === 'dvorak') {
    renderPeopleSection(peopleData.filter(p => p.name.includes('Dvořák') || p.father?.includes('Dvořák')));
  } else if (type === 'cp29') {
    renderPeopleSection(peopleData.filter(p => p.houseNumber === '29'));
  }
}

function openPersonModal(personId) {
  if (typeof peopleData === "undefined") return;
  const person = peopleData.find(p => p.id === personId);
  if (!person) return;

  const modal = document.getElementById("person-detail-modal");
  if (!modal) return;

  document.getElementById("modal-person-name").textContent = person.name;
  document.getElementById("modal-person-lifespan").textContent = person.lifeSpan;
  document.getElementById("modal-person-role").textContent = person.role;
  
  const badgeEl = document.getElementById("modal-person-badge");
  if (badgeEl) {
    badgeEl.textContent = `${person.categoryIcon || '🏡'} ${person.categoryLabel || 'Držitel gruntu'}`;
    badgeEl.className = `px-2 py-0.5 text-[11px] font-bold rounded border ${person.categoryBadgeClass || 'bg-emerald-100 text-emerald-950 border-emerald-300'}`;
  }

  document.getElementById("modal-person-father").textContent = person.father || "-";
  document.getElementById("modal-person-mother").textContent = person.mother || "-";
  document.getElementById("modal-person-spouse").textContent = person.spouse || "-";
  document.getElementById("modal-person-children").textContent = person.children?.join(', ') || "-";
  document.getElementById("modal-person-house").textContent = `Usedlost čp. ${person.houseNumber}`;
  document.getElementById("modal-person-bio").textContent = person.biography;

  const houseBtn = document.getElementById("modal-person-house-btn");
  if (houseBtn) {
    houseBtn.onclick = () => {
      closePersonModal();
      openHouseDetail(person.houseId);
      document.getElementById("house-detail-container")?.scrollIntoView({ behavior: "smooth" });
    };
  }

  // Vykreslení životní osy osoby s prokliky na scany
  const eventsList = document.getElementById("modal-person-events-list");
  if (eventsList) {
    eventsList.innerHTML = person.events.map(ev => `
      <div class="p-3.5 bg-white rounded-xl border border-amber-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div class="space-y-1">
          <div class="flex items-center gap-2">
            <span class="text-xs font-extrabold text-amber-900 bg-amber-100 px-2 py-0.5 rounded">${ev.year}</span>
            <span class="text-xs font-bold text-slate-800">${ev.date} (${ev.place})</span>
          </div>
          <p class="text-xs text-slate-700 leading-relaxed">${ev.description}</p>
          <p class="text-[10px] text-slate-400">📚 <em>${ev.source}</em></p>
        </div>

        ${ev.scanFile ? `
          <button onclick="openArchiveViewer('${ev.scanFile}', '${ev.scanTitle || ev.description}', '${ev.source}', '${ev.scanFile}')"
            class="px-3 py-1.5 text-xs font-bold bg-amber-800 hover:bg-amber-900 text-white rounded-lg whitespace-nowrap transition-colors self-start sm:self-center flex items-center gap-1 shadow-sm">
            🔍 Zobrazit scan
          </button>
        ` : ''}
      </div>
    `).join('');
  }

  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function openPersonModalByName(name) {
  if (typeof peopleData === "undefined") return;
  const normName = normalizeSearchText(name);
  const match = peopleData.find(p => {
    const normPName = normalizeSearchText(p.name);
    return normPName.includes(normName.split(' ')[0]) && (normPName.includes('dvorak') || normName.includes('dvorak'));
  });

  if (match) {
    openPersonModal(match.id);
  } else {
    // If not in people biographies, filter the census table to this person!
    const regSearch = document.getElementById("registry-search-input");
    if (regSearch) {
      regSearch.value = name;
      applyRegistryFilters();
      document.getElementById("rejstrik-scitani-section")?.scrollIntoView({ behavior: "smooth" });
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

// Zobrazení detailu domu
function openHouseDetail(houseId) {
  const house = housesData.find(h => h.id === houseId);
  if (!house) return;

  currentHouseId = houseId;

  Object.keys(markers).forEach(id => {
    const el = markers[id].getElement();
    if (el) {
      if (id === houseId) {
        el.classList.add("active");
      } else {
        el.classList.remove("active");
      }
    }
  });

  map.setView([house.location.lat, house.location.lng], 17, { animate: true });

  const container = document.getElementById("house-detail-container");
  if (!container) return;

  if (house.census && house.census.length > 0) {
    selectedCensusYear = house.census[0].year;
  }

  renderHouseDetailContent(house);
}

// Vykreslení obsahu karty stavení s důsledným ozdrojováním
function renderHouseDetailContent(house) {
  const container = document.getElementById("house-detail-container");
  const npuLink = getNpuUrl(house);

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
          <p class="text-xs text-red-800 mt-1">${house.heritageDescription}</p>
          <p class="text-[10px] text-red-700 font-semibold mt-1">📚 <strong>Zdroj:</strong> ${house.heritageSource}</p>
        </div>
      </div>
      
      <!-- Akční tlačítka k památce -->
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

  const censusSection = house.census && house.census.length > 0 ? `
    <div class="mt-8 pt-6 border-t border-amber-200">
      <div class="flex flex-wrap items-center justify-between gap-4 mb-4">
        <div>
          <div class="flex items-center gap-2">
            <h3 class="text-xl font-bold text-slate-800 flex items-center gap-2">
              <span class="text-amber-700">📜</span> Sčítání lidu & Obyvatelé
            </h3>
            ${house.census[0].isSample ? '<span class="text-[10px] font-bold text-amber-900 bg-amber-200 px-2 py-0.5 rounded-full border border-amber-400">Vzorová šablona</span>' : '<span class="text-[10px] font-bold text-green-900 bg-green-100 px-2 py-0.5 rounded-full border border-green-300">✓ Autentický archivní záznam</span>'}
          </div>
          <p class="text-xs text-slate-500 mt-0.5">Zemský archiv v Opavě & SOkA Šumperk (fond Okresní úřad Zábřeh)</p>
        </div>
        
        <div class="flex gap-1.5 bg-amber-100/70 p-1 rounded-lg border border-amber-300">
          ${house.census.map(c => `
            <button onclick="switchCensusYear(${c.year})" 
              class="px-3 py-1.5 text-xs md:text-sm font-semibold rounded-md transition-all ${
                c.year === selectedCensusYear 
                  ? 'bg-amber-800 text-white shadow-sm' 
                  : 'text-amber-900 hover:bg-amber-200'
              }">
              ${c.year}
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
      ℹ️ Pro toto stavení zatím nejsou sčítací operáty zdigitalizovány. Můžete je doplnit pomocí formuláře.
    </div>
  `;

  // Grafická vizuální časová osa držitelů s ozdrojováním
  const timelineSection = house.timeline && house.timeline.length > 0 ? `
    <div class="mt-8 pt-6 border-t border-amber-200">
      <div class="flex items-center justify-between mb-2">
        <h3 class="text-xl font-bold text-slate-800 flex items-center gap-2">
          <span class="text-amber-700">⏳</span> Grafická časová osa držby gruntu
        </h3>
        <span class="text-xs font-semibold text-amber-800 bg-amber-100 px-2.5 py-1 rounded-full border border-amber-300">
          Generační posloupnost & Zdroje
        </span>
      </div>

      <div class="mt-4 mb-2">
        <div class="timeline-era-bar text-[10px] sm:text-xs">
          <div style="width: 25%;" class="era-monarchy" title="Habsburská monarchie (do 1867)">18. stol. – 1867 Monarchie</div>
          <div style="width: 35%;" class="era-dualism" title="Rakousko-Uhersko (1867–1918)">1867–1918 Rakousko-Uhersko</div>
          <div style="width: 20%;" class="era-csr" title="První republika (1918–1938)">1918–1938 ČSR</div>
          <div style="width: 20%;" class="era-modern" title="Poválečné období a současnost">1945 – Současnost</div>
        </div>
      </div>

      <div class="visual-timeline-nodes">
        ${house.timeline.map((item, idx) => `
          <div class="visual-timeline-card group flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-1.5">
                <span class="text-xs font-extrabold text-amber-900 bg-amber-100 px-2.5 py-0.5 rounded-full border border-amber-300">${item.year}</span>
                <span class="text-[9px] font-bold ${item.sourceType === 'verified' ? 'text-green-800 bg-green-100' : 'text-amber-800 bg-amber-100'} px-1.5 py-0.5 rounded">
                  ${item.sourceType === 'verified' ? '✓ Ověřený pramen' : '🧪 Vzor k ověření'}
                </span>
              </div>
              <h4 class="font-bold text-slate-900 text-sm mb-1 group-hover:text-amber-800 transition-colors">${item.owner}</h4>
              <p class="text-xs text-slate-600 leading-relaxed">${item.event}</p>
            </div>
            
            <div class="mt-2 pt-2 border-t border-slate-100 flex items-center justify-between gap-1">
              <span class="text-[9px] text-slate-400 truncate" title="${item.source}">📚 ${item.source}</span>
              ${item.scanFile ? `
                <button onclick="openArchiveViewer('${item.scanFile}', '${item.scanTitle || item.event}', '${item.source}', '${item.scanFile}')"
                  class="px-2 py-0.5 text-[10px] font-bold bg-amber-100 hover:bg-amber-200 text-amber-900 rounded border border-amber-300 flex items-center gap-1 whitespace-nowrap">
                  🔍 Scan
                </button>
              ` : ''}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  ` : '';

  // Přepisy archiválií s ozdrojováním a proklikem na scan
  const documentsSection = house.documents && house.documents.length > 0 ? `
    <div class="mt-8 pt-6 border-t border-amber-200">
      <h3 class="text-xl font-bold text-slate-800 flex items-center gap-2 mb-4">
        <span class="text-amber-700">✒️</span> Přepisy historických pramenů & Scany
      </h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        ${house.documents.map(doc => `
          <div class="parchment-card p-5 rounded-xl border border-amber-200 flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between text-xs font-semibold text-amber-800 mb-1">
                <span class="flex items-center gap-1.5">
                  <span>${doc.type}</span>
                  ${doc.isSample ? '<span class="text-[9px] bg-amber-200 text-amber-900 px-1.5 py-0.2 rounded font-bold">Vzorová formulace</span>' : '<span class="text-[9px] bg-green-100 text-green-900 px-1.5 py-0.2 rounded font-bold">Ověřený zápis</span>'}
                </span>
                <span class="bg-amber-200/80 px-2 py-0.5 rounded font-mono">${doc.year}</span>
              </div>
              <h4 class="font-bold text-slate-900 mb-1">${doc.title}</h4>
              <p class="text-[11px] text-slate-500 mb-2">${doc.description}</p>
              <div class="transcription-box p-3 rounded-lg text-sm text-slate-800 italic mb-2">
                "${doc.transcription}"
              </div>
            </div>

            <div class="mt-3 pt-2 border-t border-amber-200/80 flex items-center justify-between gap-2 text-[10px] text-slate-500">
              <span>📚 <strong>Pramen:</strong> ${doc.source}</span>
              ${doc.scanFile ? `
                <button onclick="openArchiveViewer('${doc.scanFile}', '${doc.scanTitle || doc.title}', '${doc.source}', '${doc.scanFile}')"
                  class="px-2.5 py-1 text-xs font-bold bg-amber-800 hover:bg-amber-900 text-white rounded-lg flex items-center gap-1 whitespace-nowrap shadow-sm">
                  🔍 Zobrazit scan
                </button>
              ` : ''}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  ` : '';

  // Příběhy, etnografie a rodinná historie
  const storiesSection = house.stories && house.stories.length > 0 ? `
    <div class="mt-8 pt-6 border-t border-amber-200">
      <h3 class="text-xl font-bold text-slate-800 flex items-center gap-2 mb-3">
        <span class="text-amber-700">📖</span> Rodinná historie & Paměti
      </h3>
      <div class="space-y-3">
        ${house.stories.map(story => typeof story === 'string' ? `
          <div class="p-4 bg-white rounded-xl border border-amber-200 text-sm text-slate-700 leading-relaxed shadow-sm">
            ${story}
          </div>
        ` : `
          <div class="p-4 bg-white rounded-xl border ${story.isSample ? 'border-amber-300 bg-amber-50/40' : 'border-green-200 bg-green-50/20'} text-xs md:text-sm text-slate-700 leading-relaxed shadow-sm">
            <div class="flex items-center justify-between mb-1.5">
              <h5 class="font-bold text-slate-900 text-xs uppercase tracking-wide">${story.title}</h5>
              ${story.isSample ? '<span class="text-[9px] bg-amber-200 text-amber-900 px-2 py-0.5 rounded font-bold">Vzorová poznámka</span>' : '<span class="text-[9px] bg-green-100 text-green-900 px-2 py-0.5 rounded font-bold">✓ Ověřeno z archivu</span>'}
            </div>
            <p>${story.text}</p>
            <div class="mt-2 pt-2 border-t border-amber-200/80 text-[10px] text-slate-500">
              📚 <strong>Zdroj / Fond:</strong> ${story.source}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  ` : '';

  container.innerHTML = `
    <div class="parchment-card p-6 md:p-8 rounded-2xl border border-amber-200 shadow-md">
      ${heritageBanner}

      <!-- Hlavička domu -->
      <div class="flex flex-col md:flex-row md:items-start justify-between gap-4">
        <div>
          <div class="flex flex-wrap items-center gap-2 mb-1">
            <span class="bg-amber-800 text-white font-bold text-sm px-3 py-0.5 rounded-full shadow-sm">
              čp. ${house.number}
            </span>
            <span class="text-xs font-semibold text-amber-900 bg-amber-100 px-2.5 py-0.5 rounded-full border border-amber-300">
              ${house.type}
            </span>
            ${house.isHeritage ? '<span class="text-xs font-bold text-red-900 bg-red-100 px-2.5 py-0.5 rounded-full border border-red-300">🏛️ Památka ČR</span>' : ''}
          </div>
          <h2 class="text-2xl md:text-3xl font-extrabold text-slate-900 font-heading">
            ${house.localName}
          </h2>
          <p class="text-xs text-slate-500 mt-1">
            📍 Katastrální parcela (1834): <strong>${house.location.cadastralParcel}</strong> | Pozemkové parcely: <strong>${house.location.landParcels}</strong>
          </p>
          <p class="text-[10px] text-slate-400 mt-0.5">📚 Zdroj lokalizace: ${house.location.source || 'ČÚZK'}</p>
        </div>

        <div class="flex gap-2">
          <button onclick="window.print()" class="px-3.5 py-1.5 text-xs font-semibold bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 rounded-lg shadow-sm flex items-center gap-1.5">
            🖨️ Tisknout badatelský list
          </button>
        </div>
      </div>

      <!-- Popis a stav ve Stabilním katastru -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <div class="md:col-span-2 bg-white/80 p-4 rounded-xl border border-amber-200/80 text-sm text-slate-700 leading-relaxed">
          <h4 class="font-bold text-slate-900 mb-1">Popis usedlosti</h4>
          <p>${house.description}</p>
        </div>
        <div class="bg-amber-50/80 p-4 rounded-xl border border-amber-200 text-xs text-slate-700 flex flex-col justify-between">
          <div>
            <h4 class="font-bold text-amber-900 mb-1">🗺️ Stabilní katastr (1834)</h4>
            <p>${house.statusStableCadastre}</p>
          </div>
          <div class="mt-3 pt-2 border-t border-amber-200 flex items-center justify-between gap-1">
            <span class="text-[9px] text-slate-400">📚 ${house.cadastreSource || 'ÚAZK ČÚZK 1834'}</span>
            ${house.cadastreScan ? `
              <button onclick="openArchiveViewer('${house.cadastreScan}', 'Stabilní katastr 1834 – čp. ${house.number}', '${house.cadastreSource}', '${house.cadastreScan}')"
                class="px-2 py-1 text-[11px] font-bold bg-amber-800 hover:bg-amber-900 text-white rounded flex items-center gap-1 whitespace-nowrap shadow-sm">
                🔍 Otisk 1834
              </button>
            ` : ''}
          </div>
        </div>
      </div>

      ${timelineSection}
      ${censusSection}
      ${documentsSection}
      ${storiesSection}
    </div>
  `;
}

// Přepnutí roku sčítání lidu
function switchCensusYear(year) {
  selectedCensusYear = year;
  const house = housesData.find(h => h.id === currentHouseId);
  if (!house) return;

  const wrapper = document.getElementById("census-content-wrapper");
  if (wrapper) {
    wrapper.innerHTML = renderCensusYearDetail(house, year);
  }

  renderHouseDetailContent(house);
}

// Vykreslení konkrétního roku sčítání s ozdrojováním a tlačítkem scanu
function renderCensusYearDetail(house, year) {
  const census = house.census?.find(c => c.year === year);
  if (!census) return `<p class="text-sm text-slate-500">Záznam pro rok ${year} nebyl nalezen.</p>`;

  const livestockBadges = census.livestock ? `
    <div class="mt-4 p-3.5 bg-amber-50/90 rounded-xl border border-amber-200/80">
      <h5 class="text-xs font-bold text-amber-900 mb-2 uppercase tracking-wide">Chované hospodářské zvířectvo (${census.year})</h5>
      <div class="grid grid-cols-3 sm:grid-cols-6 gap-2 text-center text-xs">
        <div class="p-2 bg-white rounded-lg border border-amber-200"><span class="block font-extrabold text-base text-amber-800">${census.livestock.horses}</span> 🐎 Koně</div>
        <div class="p-2 bg-white rounded-lg border border-amber-200"><span class="block font-extrabold text-base text-amber-800">${census.livestock.cattle}</span> 🐄 Skot / Krávy</div>
        <div class="p-2 bg-white rounded-lg border border-amber-200"><span class="block font-extrabold text-base text-amber-800">${census.livestock.pigs}</span> 🐖 Prasata</div>
        <div class="p-2 bg-white rounded-lg border border-amber-200"><span class="block font-extrabold text-base text-amber-800">${census.livestock.goats}</span> 🐐 Kozy</div>
        <div class="p-2 bg-white rounded-lg border border-amber-200"><span class="block font-extrabold text-base text-amber-800">${census.livestock.poultry}</span> 🐔 Drůbež</div>
        <div class="p-2 bg-white rounded-lg border border-amber-200"><span class="block font-extrabold text-base text-amber-800">${census.livestock.beehives}</span> 🐝 Úly</div>
      </div>
    </div>
  ` : '';

  return `
    <div class="space-y-3">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-600 bg-white/70 p-2.5 rounded-lg border border-amber-200 gap-2">
        <div>
          <span><strong>Datum soupisu:</strong> ${census.date}</span> | 
          <span>📚 <strong>Fond:</strong> ${census.archiveSource}</span>
        </div>
        
        ${census.scanFile ? `
          <button onclick="openArchiveViewer('${census.scanFile}', '${census.scanTitle || 'Sčítací operát ' + census.year}', '${census.archiveSource}', '${census.scanFile}')"
            class="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold bg-amber-800 hover:bg-amber-900 text-white rounded-lg transition-colors shadow-sm self-start sm:self-center">
            🔍 Prohlédnout archivní scan sčítacího listu
          </button>
        ` : ''}
      </div>

      <div class="overflow-x-auto bg-white rounded-xl border border-amber-200 shadow-sm">
        <table class="w-full text-left text-xs md:text-sm text-slate-700">
          <thead class="bg-amber-100/70 text-amber-950 font-bold uppercase text-[11px]">
            <tr>
              <th class="p-3">Jméno a příjmení</th>
              <th class="p-3">Postavení v rodině</th>
              <th class="p-3">Narození (datum / místo)</th>
              <th class="p-3">Povolání / Zaměstnání</th>
              <th class="p-3">Gramotnost</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-amber-100">
            ${census.inhabitants.map(person => `
              <tr class="hover:bg-amber-50/60 transition-colors">
                <td class="p-3 font-semibold text-slate-900">
                  <button onclick="openPersonModalByName('${person.name}')" class="text-amber-900 hover:text-amber-700 hover:underline font-bold text-left flex items-center gap-1">
                    <span>👤</span> ${person.name}
                  </button>
                </td>
                <td class="p-3 text-slate-600">${person.relation}</td>
                <td class="p-3">${person.birthDate} <br><span class="text-xs text-slate-500">${person.birthPlace}</span></td>
                <td class="p-3"><span class="bg-amber-50 px-2 py-1 rounded border border-amber-200">${person.occupation}</span></td>
                <td class="p-3 text-xs">${person.literacy}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>

      ${livestockBadges}
      <p class="text-xs text-slate-500 italic mt-2">📌 Poznámka: ${census.note}</p>
    </div>
  `;
}

// Vykreslení karet domů v přehledu
function renderHouseCards(filteredHouses = housesData) {
  const container = document.getElementById("house-cards-list");
  if (!container) return;

  if (filteredHouses.length === 0) {
    container.innerHTML = `<p class="text-xs text-slate-500 p-4 text-center">Nenalezeno žádné odpovídající stavení.</p>`;
    return;
  }

  container.innerHTML = filteredHouses.map(house => `
    <div onclick="openHouseDetail('${house.id}')" 
      class="parchment-card p-3.5 rounded-xl border ${house.isHeritage ? 'border-red-300 bg-red-50/30' : 'border-amber-200'} hover:border-amber-500 cursor-pointer transition-all hover:shadow-md ${house.id === currentHouseId ? 'ring-2 ring-amber-700' : ''}">
      <div class="flex items-center justify-between mb-1.5">
        <span class="bg-amber-800 text-white font-bold text-xs px-2.5 py-0.5 rounded-full">čp. ${house.number}</span>
        <span class="text-[10px] font-semibold ${house.isHeritage ? 'text-red-900 bg-red-100 border border-red-300' : 'text-amber-900 bg-amber-100'} px-2 py-0.5 rounded">
          ${house.isHeritage ? '🏛️ Kulturní památka' : house.type}
        </span>
      </div>
      <h3 class="font-bold text-slate-900 text-sm mb-1">${house.localName}</h3>
      <p class="text-[11px] text-slate-600 line-clamp-2">${house.description}</p>
    </div>
  `).join('');
}

// Vykreslení sekce badatelského průvodce
function renderGuideSection() {
  const container = document.getElementById("guide-cards-container");
  if (!container || !guideData) return;

  container.innerHTML = guideData.archives.map(arc => `
    <div class="bg-white p-6 rounded-2xl border border-amber-200 shadow-sm flex flex-col justify-between">
      <div>
        <div class="flex items-center justify-between mb-2">
          <span class="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-100 px-2.5 py-1 rounded-full border border-amber-300">
            ${arc.badge}
          </span>
        </div>
        <h3 class="text-lg font-bold text-slate-900 mb-2">${arc.name}</h3>
        <p class="text-xs text-slate-600 mb-4 leading-relaxed">${arc.description}</p>
        
        <div class="space-y-2 bg-amber-50/60 p-3.5 rounded-xl border border-amber-200/80 mb-4">
          <h5 class="text-xs font-bold text-slate-800">Jak postupovat:</h5>
          <ol class="list-decimal list-inside text-xs text-slate-700 space-y-1.5">
            ${arc.steps.map(s => `<li>${s}</li>`).join('')}
          </ol>
        </div>
      </div>

      <a href="${arc.url}" target="_blank" rel="noopener noreferrer" 
        class="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl text-xs font-bold bg-amber-800 hover:bg-amber-900 text-white transition-colors shadow-sm">
        Otevřít portál ↗
      </a>
    </div>
  `).join('');
}

// Vykreslení slovníčku kurentu a pojmů
function renderDictionary() {
  const container = document.getElementById("dictionary-table-body");
  if (!container || !guideData) return;

  container.innerHTML = guideData.dictionary.map(item => `
    <tr class="hover:bg-amber-50/50">
      <td class="p-3 font-semibold text-amber-950">${item.term}</td>
      <td class="p-3 text-slate-700">${item.cz}</td>
    </tr>
  `).join('');
}

// Filtrování a vyhledávání
function setupEventListeners() {
  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const rawQ = e.target.value;
      const q = normalizeSearchText(rawQ);

      let baseList = housesData;
      if (currentHeritageFilter === 'heritage') {
        baseList = housesData.filter(h => h.isHeritage);
      }
      if (!q) {
        renderHouseCards(baseList);
        return;
      }

      // If user typed "drzitele gruntu", "grunt", "hospodar", find all houses with grunt holders
      const isGruntQuery = categorySearchKeywords.grunt.some(kw => q.includes(kw) || kw.includes(q));

      const filtered = baseList.filter(h => {
        const normNum = normalizeSearchText(h.number);
        const normName = normalizeSearchText(h.localName);
        const normDesc = normalizeSearchText(h.description);
        const normUskp = normalizeSearchText(h.uskpNumber);
        const normWiki = normalizeSearchText(h.wikidataId);

        const directMatch = normNum.includes(q) ||
          normName.includes(q) ||
          normDesc.includes(q) ||
          normUskp.includes(q) ||
          normWiki.includes(q);

        const inhabitantMatch = h.census?.some(c => c.inhabitants.some(p => {
          const normPName = normalizeSearchText(p.name);
          const normPOcc = normalizeSearchText(p.occupation);
          return normPName.includes(q) || normPOcc.includes(q);
        }));

        const registryMatch = typeof censusRegistryData !== "undefined" && censusRegistryData.some(r => {
          if (r.houseNumber !== h.number) return false;
          if (isGruntQuery && r.categoryKey === 'grunt') return true;
          return normalizeSearchText(r.fullName).includes(q) || normalizeSearchText(r.occupation).includes(q);
        });

        return directMatch || inhabitantMatch || registryMatch;
      });

      renderHouseCards(filtered);
    });
  }

  // Podpora klávesy ESC pro zavření modálů
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeArchiveViewer();
      closePersonModal();
      closeAddHouseModal();
    }
  });
}

// Funkce pro otevření editoru / přidání nového domu
function openAddHouseModal() {
  const modal = document.getElementById("add-house-modal");
  if (modal) modal.classList.remove("hidden");
}

function closeAddHouseModal() {
  const modal = document.getElementById("add-house-modal");
  if (modal) modal.classList.add("hidden");
}

// Uložení nového domu z formuláře
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
