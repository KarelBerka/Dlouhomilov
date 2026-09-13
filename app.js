/**
 * Aplikační logika pro Historickou Wiki a prohlídku Dlouhomilova
 * S integrovaným modulem historických map (1716–1983), biografickým modulem a kalibrátorem
 */

let map;
let markers = {};
let baseLayers = {};
let overlayLayers = {};
let currentHouseId = "cp29";
let currentPersonId = null;
let currentArchiveDoc = null;
let selectedCensusYear = 1921;
let currentHeritageFilter = "all";
let currentPeopleFilter = "all";
let currentScanZoom = 1.0;
let currentHistoricalLayerKey = "cadastre1834";
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
  initPersonLinkage();
  initMap();
  renderHouseCards();
  renderCensusRegistryTable();
  renderPeopleSection();
  renderHistoricalMapsSection();
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

  // 1b. Oficiální WMS Katastrální mapa ČÚZK (živé vektorové parcely)
  baseLayers.cuzk_km = L.tileLayer.wms("https://services.cuzk.cz/wms/wms.asp", {
    layers: "prehledka_krajskich_hranic,prehledka_okresnich_hranic,prehledka_katastralnich_hranic,hranice_parcel,obrazy_parcel,parcelni_cisla",
    format: "image/png",
    transparent: true,
    version: "1.3.0",
    attribution: "Katastr nemovitostí &copy; ČÚZK",
    maxZoom: 20
  });

  // 2. Georeferencované historické mapové vrstvy
  // 2a. Stabilní katastr 1834 (Císařský otisk – kalibrováno)
  const boundsCadastre1834 = [
    [49.905502, 16.986672],
    [49.910894, 16.994724]
  ];
  overlayLayers.cadastre1834 = L.imageOverlay("assets/maps/dlouhomilov_cadastre_1834_web.jpg", boundsCadastre1834, {
    opacity: 0.75,
    interactive: false,
    attribution: "Stabilní katastr 1834 (List IV Lomigsdorf) &copy; ÚAZK ČÚZK (sign. MOR102618340)"
  }).addTo(map);

  // 2b. I. vojenské mapování (1764–1783 Josefské – kalibrováno)
  const boundsVojenske1_1764 = [
    [49.884288, 16.973586],
    [49.915788, 17.027586]
  ];
  overlayLayers.vojenske1_1764 = L.imageOverlay("assets/maps/dlouhomilov_1764_vojenske_1.jpg", boundsVojenske1_1764, {
    opacity: 0.75,
    interactive: false,
    attribution: "I. vojenské mapování (1764–1783) &copy; ÖStA / ČÚZK"
  });

  // 2c. II. vojenské mapování (1838 Františkovo – kalibrováno)
  const boundsVojenske2_1838 = [
    [49.901834, 16.981195],
    [49.912034, 17.000983]
  ];
  overlayLayers.vojenske2_1838 = L.imageOverlay("assets/maps/dlouhomilov_1838_vojenske_2.jpg", boundsVojenske2_1838, {
    opacity: 0.75,
    interactive: false,
    attribution: "II. vojenské mapování (1838) &copy; ÖStA / ČÚZK"
  });

  // 2d. III. vojenské mapování – Topografická sekce (1874)
  const boundsVojenske3_1874 = [
    [49.888116, 16.966853],
    [49.918116, 17.028853]
  ];
  overlayLayers.vojenske3_1874 = L.imageOverlay("assets/maps/dlouhomilov_1874_vojenske_3.jpg", boundsVojenske3_1874, {
    opacity: 0.75,
    interactive: false,
    attribution: "III. vojenské mapování 1:25 000 (1874) &copy; ÚAZK"
  });

  // 2e. III. vojenské mapování – Topografická mapa ČSR (1937)
  const boundsVojenske3_1937 = [
    [49.887645, 16.96267],
    [49.925145, 17.04017]
  ];
  overlayLayers.vojenske3_1937 = L.imageOverlay("assets/maps/dlouhomilov_1937_vojenske_3.jpg", boundsVojenske3_1937, {
    opacity: 0.75,
    interactive: false,
    attribution: "Topografická mapa ČSR 1:25 000 (1937) &copy; VZÚ Praha / ÚAZK"
  });

  // 2f. Topografická mapa v systému S-1952 (1952)
  const boundsTopo1952 = [
    [49.89417, 16.93931],
    [49.92583, 17.00862]
  ];
  overlayLayers.topo1952 = L.imageOverlay("assets/maps/dlouhomilov_topomap_1952_web.jpg", boundsTopo1952, {
    opacity: 0.75,
    interactive: false,
    attribution: "Topografická mapa S-1952 &copy; ÚAZK ČÚZK"
  });

  // 3. Překryvná vrstva: Živá katastrální mapa ČÚZK
  overlayLayers.cuzk_km = L.tileLayer.wms("https://services.cuzk.cz/wms/wms.asp", {
    layers: "hranice_parcel,obrazy_parcel,parcelni_cisla",
    format: "image/png",
    transparent: true,
    version: "1.3.0",
    attribution: "Katastrální mapa ČÚZK &copy; ČÚZK",
    maxZoom: 20
  });

  // 4. Vektorové vrstvy mapování budov
  initBuildingLayers();

  // Ovládání vrstev v pravém horním rohu
  const baseMaps = {
    "🗺️ OpenStreetMap (Dnešní)": baseLayers.osm,
    "🛰️ Dnešní letecká (Ortofoto)": baseLayers.ortho,
    "🏔️ Topografická mapa": baseLayers.topo,
    "🏛️ Katastr nemovitostí ČÚZK": baseLayers.cuzk_km
  };

  const overlayMaps = {
    "📜 Císařský otisk (1834)": overlayLayers.cadastre1834,
    "⚔️ I. vojenské mapování (1764)": overlayLayers.vojenske1_1764,
    "⚔️ II. vojenské mapování (1838)": overlayLayers.vojenske2_1838,
    "⚔️ III. vojenské mapování (1874)": overlayLayers.vojenske3_1874,
    "🇨🇿 Topografická mapa ČSR (1937)": overlayLayers.vojenske3_1937,
    "🗺️ Topografická mapa S-1952 (1952)": overlayLayers.topo1952,
    "🏛️ Živá katastrální mapa ČÚZK (WMS)": overlayLayers.cuzk_km,
    "🟨 Zvýraznění lokalit (žlutý podkres)": overlayLayers.localityHighlights,
    "📍 Čísla popisná stavení (čp.)": overlayLayers.houseMarkers
  };

  L.control.layers(baseMaps, overlayMaps, { position: "topright" }).addTo(map);

  // Inicializace georeferenčního modulu (načtení uložených kalibrací)
  initGeorefEngine();

  // Přidání markerů pro jednotlivá stavení
  renderMapMarkers();
}

// Vykreslení markerů na mapě (čísla popisná stavení)
function renderMapMarkers() {
  if (!overlayLayers.houseMarkers) {
    overlayLayers.houseMarkers = L.layerGroup();
    overlayLayers.houseMarkers.addTo(map);
  }
  overlayLayers.houseMarkers.clearLayers();
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
      .bindTooltip(`<strong>${house.isHeritage ? '🏛️ ' : ''}čp. ${house.number}</strong><br>${house.localName}${house.isHeritage ? '<br><span class="text-[10px] text-red-600 font-bold">Kulturní památka ČR</span>' : ''}`, {
        direction: "top",
        offset: [0, -10]
      });

    marker.on("click", () => {
      openHouseDetail(house.id);
      document.getElementById("house-detail-container")?.scrollIntoView({ behavior: "smooth" });
    });

    overlayLayers.houseMarkers.addLayer(marker);
    markers[house.id] = marker;
  });
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
function switchHistoricalOverlay(layerKey) {
  currentHistoricalLayerKey = layerKey;

  // Odstraníme všechny historické rastrové vrstvy z mapy
  const historicalKeys = [
    "cadastre1834", 
    "vojenske1_1764", 
    "vojenske2_1838", 
    "vojenske3_1874", 
    "vojenske3_1937", 
    "topo1952"
  ];
  
  historicalKeys.forEach(k => {
    if (overlayLayers[k] && map.hasLayer(overlayLayers[k])) {
      map.removeLayer(overlayLayers[k]);
    }
  });

  // Přidáme vybranou vrstvu
  const activeLayer = overlayLayers[layerKey];
  if (activeLayer) {
    activeLayer.addTo(map);
    const slider = document.getElementById("cadastre-opacity-slider");
    const val = slider ? slider.value : 75;
    updateCadastreOpacity(val);
  }

  // Synchronizace s kalibračním nástrojem
  if (typeof georefState !== "undefined") {
    georefState.activeMap = layerKey;
    const georefMapSelect = document.getElementById("georef-map-select");
    if (georefMapSelect && georefMapSelect.value !== layerKey) {
      georefMapSelect.value = layerKey;
    }
    if (georefState.isOpen) {
      updateGeorefUI();
    }
  }

  // Aktualizujeme jemný podkres lokalit odpovídající zvolené mapě
  updateLocalityHighlights(layerKey);
}

// Změna průhlednosti aktivní historické mapy
function updateCadastreOpacity(val) {
  const opacity = parseFloat(val) / 100;
  const activeLayer = overlayLayers[currentHistoricalLayerKey];
  if (activeLayer) {
    activeLayer.setOpacity(opacity);
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

// Inicializace vrstvy zvýraznění lokalit (jemný průhledný žlutý podkres Dlouhomilova a Benkova)
function initBuildingLayers() {
  overlayLayers.localityHighlights = L.layerGroup();
  updateLocalityHighlights(currentHistoricalLayerKey);
  overlayLayers.localityHighlights.addTo(map);

  // Zpětná kompatibilita
  overlayLayers.toponyms = overlayLayers.localityHighlights;
}

// Aktualizace a vykreslení jemného žlutého podkresu kolem lokalizace Dlouhomilova, Benkova a Medelského
function updateLocalityHighlights(layerKey) {
  if (!overlayLayers.localityHighlights) overlayLayers.localityHighlights = L.layerGroup();
  overlayLayers.localityHighlights.clearLayers();

  if (typeof historicalMapsData === "undefined") return;
  const actualMapKey = layerKey || currentHistoricalLayerKey || "cadastre1834";
  const mapMeta = historicalMapsData.find(m => m.overlayKey === actualMapKey || m.id === actualMapKey) || historicalMapsData.find(m => m.id === "cadastre1834");
  const toponyms = (mapMeta && mapMeta.toponyms) ? mapMeta.toponyms : {
    dlouhomilov: "Dlouhomilov",
    benkov: "Benkov",
    medelske: "Nedělské"
  };

  const yearLabel = mapMeta ? mapMeta.year : "1834";

  // Helper pro zjištění, zda je daný čtverec právě vybrán v kalibračním panelu
  const isTargetSelected = (locKey) => (
    typeof georefState !== "undefined" && 
    georefState.isOpen && 
    georefState.activeMap === actualMapKey && 
    georefState.activeTarget === locKey
  );

  // Funkce stylu pro čtverce: při aktivní kalibraci má čtverec zřetelnější orámování a vyšší krytí
  const getHighlightStyle = (locKey) => {
    const isSel = isTargetSelected(locKey);
    return {
      color: isSel ? "#b45309" : "#ca8a04",
      weight: isSel ? 3 : 1.5,
      dashArray: isSel ? "6, 3" : "4, 4",
      fillColor: isSel ? "#f59e0b" : "#facc15",
      fillOpacity: isSel ? 0.32 : 0.12,
      interactive: true
    };
  };

  // 1. Dlouhomilov – obdélník kolem intravilánu obce pro tuto konkrétní mapu
  const boundsDlouhomilov = (typeof computeLocalityBounds === "function") 
    ? computeLocalityBounds(actualMapKey, "dlouhomilov") 
    : [[49.9020, 16.9845], [49.9130, 16.9965]];
  const isSelD = isTargetSelected("dlouhomilov");
  const rectD = L.rectangle(boundsDlouhomilov, getHighlightStyle("dlouhomilov"))
    .bindTooltip(`<strong>Dlouhomilov</strong>${isSelD ? ' <span class="text-amber-900 font-bold bg-amber-200 px-1 rounded">[Kalibrace]</span>' : ''} (${yearLabel}: <em>${toponyms.dlouhomilov || 'Dlouhomilov'}</em>)`, {
      sticky: true
    });
  rectD.on("click", (e) => {
    L.DomEvent.stopPropagation(e);
    if (typeof georefSelectMap === "function") georefSelectMap(actualMapKey);
    if (typeof georefSelectTarget === "function") georefSelectTarget("dlouhomilov");
    toggleGeorefPanel(true);
  });
  overlayLayers.localityHighlights.addLayer(rectD);

  // 2. Benkov – obdélník kolem intravilánu Benkova pro tuto konkrétní mapu
  const boundsBenkov = (typeof computeLocalityBounds === "function") 
    ? computeLocalityBounds(actualMapKey, "benkov") 
    : [[49.8935, 16.9805], [49.9005, 16.9915]];
  const isSelB = isTargetSelected("benkov");
  const rectB = L.rectangle(boundsBenkov, getHighlightStyle("benkov"))
    .bindTooltip(`<strong>Benkov</strong>${isSelB ? ' <span class="text-amber-900 font-bold bg-amber-200 px-1 rounded">[Kalibrace]</span>' : ''} (${yearLabel}: <em>${toponyms.benkov || 'Benkov'}</em>)`, {
      sticky: true
    });
  rectB.on("click", (e) => {
    L.DomEvent.stopPropagation(e);
    if (typeof georefSelectMap === "function") georefSelectMap(actualMapKey);
    if (typeof georefSelectTarget === "function") georefSelectTarget("benkov");
    toggleGeorefPanel(true);
  });
  overlayLayers.localityHighlights.addLayer(rectB);

  // 3. Medelské / Nedělské / Tři Dvory pro tuto konkrétní mapu
  if (toponyms.medelske) {
    const boundsMedelske = (typeof computeLocalityBounds === "function") 
      ? computeLocalityBounds(actualMapKey, "medelske") 
      : [[49.9165, 16.9920], [49.9230, 17.0015]];
    const isSelM = isTargetSelected("medelske");
    const rectM = L.rectangle(boundsMedelske, getHighlightStyle("medelske"))
      .bindTooltip(`<strong>Medelské / Nedělské</strong>${isSelM ? ' <span class="text-amber-900 font-bold bg-amber-200 px-1 rounded">[Kalibrace]</span>' : ''} (${yearLabel}: <em>${toponyms.medelske}</em>)`, {
        sticky: true
      });
    rectM.on("click", (e) => {
      L.DomEvent.stopPropagation(e);
      if (typeof georefSelectMap === "function") georefSelectMap(actualMapKey);
      if (typeof georefSelectTarget === "function") georefSelectTarget("medelske");
      toggleGeorefPanel(true);
    });
    overlayLayers.localityHighlights.addLayer(rectM);
  }
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

  // Ujistíme se, že aktivní historická vrstva zůstane nahoře
  const activeHist = overlayLayers[currentHistoricalLayerKey];
  if (activeHist && !map.hasLayer(activeHist)) {
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

  currentArchiveDoc = { scanUrl, title, sourceInfo, localPath, directArchiveUrl };
  currentScanZoom = 1.0;
  img.style.transform = `scale(${currentScanZoom})`;
  img.src = scanUrl;

  if (titleEl) titleEl.textContent = title || "Archivní dokument";
  if (sourceEl) sourceEl.textContent = sourceInfo || "Zemský archiv v Opavě / SOkA Šumperk";
  if (pathEl) pathEl.textContent = localPath || scanUrl;
  if (downloadBtn) downloadBtn.href = scanUrl;

  // Určení odkazu na online digitální archiv
  let portalUrl = directArchiveUrl;
  let portalName = "Digitální badatelna";

  const lowerSrc = (sourceInfo + " " + (localPath || scanUrl)).toLowerCase();
  if (!portalUrl) {
    if (lowerSrc.includes("zao") || lowerSrc.includes("matrik") || lowerSrc.includes("sčítání") || lowerSrc.includes("scitani") || lowerSrc.includes("zábřeh") || lowerSrc.includes("opav")) {
      portalUrl = "https://vademecum.archives.cz/vademecum/";
      portalName = "🏛️ DigiArchiv ZAO (Vademecum)";
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

const STORAGE_KEY_PERSON_LINKS = "dlouhomilov_person_links_v1";
const STORAGE_KEY_CUSTOM_PEOPLE = "dlouhomilov_custom_people_v1";
const STORAGE_KEY_DISMISSED_PAIRS = "dlouhomilov_dismissed_pairs_v1";

let personLinksState = {
  // Mapování: censusRecordId -> personId
  recordToPerson: {},
  // Vlastní sjednocené osoby vytvořené uživatelem
  customPeople: {},
  // Ignorované / zamítnuté dvojice návrhů: Set klíčů "idA:idB"
  dismissedPairs: new Set()
};

let currentManualTargetMode = "person"; // "person" | "record"

// Výchozí seedované spojení pro historicky doložené profily
const defaultSeedPersonLinks = {
  "p_johann_dvorak_1795": ["cen_2", "cen_5"], // Johann Dworák (*1795) = Johann Dvořák (*1795)
  "p_alois_dvorak_1830": ["cen_35", "cen_45", "cen_55"], // Alois Dvořák
  "p_dr_jan_dvorak_1826": ["cen_3", "cen_25"], // Johann / Jan Dvořák (*1826)
  "p_karel_dvorak_1839": ["cen_4", "cen_7", "cen_8", "cen_19", "cen_26", "cen_30", "cen_56"], // Karl / Karel Dvořák (*1829/1839)
  "p_josef_dvorak_1877": ["cen_76", "cen_112"],
  "p_amalie_dvorakova_1878": ["cen_77", "cen_113"]
};

// Inicializace stavu propojení osob
function initPersonLinkage(forceReset = false) {
  personLinksState = {
    recordToPerson: {},
    customPeople: {},
    dismissedPairs: new Set()
  };

  // 1. Načtení z peopleData (pokud obsahují linkedCensusIds)
  if (typeof peopleData !== "undefined") {
    peopleData.forEach(p => {
      if (p.linkedCensusIds && Array.isArray(p.linkedCensusIds)) {
        p.linkedCensusIds.forEach(cenId => {
          personLinksState.recordToPerson[cenId] = p.id;
        });
      }
    });
  }

  // 2. Aplikace výchozích seedovaných spojení
  Object.entries(defaultSeedPersonLinks).forEach(([pId, cenIds]) => {
    cenIds.forEach(cenId => {
      personLinksState.recordToPerson[cenId] = pId;
    });
  });

  if (forceReset) {
    try {
      localStorage.removeItem(STORAGE_KEY_PERSON_LINKS);
      localStorage.removeItem(STORAGE_KEY_CUSTOM_PEOPLE);
      localStorage.removeItem(STORAGE_KEY_DISMISSED_PAIRS);
    } catch (e) {
      console.warn("LocalStorage clear error:", e);
    }
    return;
  }

  // 3. Načtení z LocalStorage (uživatelské úpravy mají přednost)
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
  } catch (e) {
    console.warn("Chyba při ukládání do LocalStorage:", e);
  }
}

// Získání sjednocené osoby pro daný sčítací záznam
function getLinkedPersonForRecord(censusRecordId) {
  const personId = personLinksState.recordToPerson[censusRecordId];
  if (!personId) return null;

  // Hledat v peopleData
  if (typeof peopleData !== "undefined") {
    const p = peopleData.find(item => item.id === personId);
    if (p) return p;
  }

  // Hledat ve vlastních vytvořených osobách
  if (personLinksState.customPeople[personId]) {
    return personLinksState.customPeople[personId];
  }

  return null;
}

// Získání všech archivních zápisů pro danou osobu
function getLinkedRecordsForPerson(personId) {
  if (typeof censusRegistryData === "undefined") return [];

  const recordIds = [];
  Object.entries(personLinksState.recordToPerson).forEach(([recId, pId]) => {
    if (pId === personId) {
      recordIds.push(recId);
    }
  });

  return censusRegistryData.filter(r => recordIds.includes(r.id));
}

// Získání seznamu všech sjednocených osob (jak z peopleData, tak vytvořených za běhu)
function getAllUnifiedPeople() {
  const people = [];

  if (typeof peopleData !== "undefined") {
    peopleData.forEach(p => {
      const linked = getLinkedRecordsForPerson(p.id);
      people.push({
        ...p,
        linkedRecords: linked,
        isCustom: false
      });
    });
  }

  Object.values(personLinksState.customPeople).forEach(cp => {
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

// Generování automatických návrhů na propojení (vyloučí již spojené nebo zamítnuté)
function getAutoLinkSuggestions() {
  if (typeof censusRegistryData === "undefined") return [];

  const records = censusRegistryData;
  const suggestions = [];

  for (let i = 0; i < records.length; i++) {
    for (let j = i + 1; j < records.length; j++) {
      const a = records[i];
      const b = records[j];

      // Ignorovat, pokud jsou již spojeny k téže osobě
      const personA = personLinksState.recordToPerson[a.id];
      const personB = personLinksState.recordToPerson[b.id];
      if (personA && personB && personA === personB) continue;

      // Ignorovat, pokud uživatel tuto dvojici dříve zamítl
      const pairKey = [a.id, b.id].sort().join(':');
      if (personLinksState.dismissedPairs.has(pairKey)) continue;

      const sim = computePersonSimilarity(a, b);
      if (sim.isMatch) {
        suggestions.push({
          recordA: a,
          recordB: b,
          pairKey,
          score: sim.score,
          reasons: sim.reasons,
          yearA: sim.yearA,
          yearB: sim.yearB
        });
      }
    }
  }

  // Seřadit od nejvyšší shody
  return suggestions.sort((x, y) => y.score - x.score);
}

// Spojení dvou záznamů nebo záznamu k existující osobě
function linkCensusRecords(recordIdA, targetPersonIdOrRecordId) {
  if (typeof censusRegistryData === "undefined") return;

  const recA = censusRegistryData.find(r => r.id === recordIdA);
  if (!recA) return;

  let targetPersonId = null;

  // Zjistit, zda je cíl existující profil v peopleData nebo customPeople
  const isExistingProfile = (typeof peopleData !== "undefined" && peopleData.some(p => p.id === targetPersonIdOrRecordId)) ||
    (personLinksState.customPeople[targetPersonIdOrRecordId]);

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
  personLinksState.recordToPerson[recA.id] = targetPersonId;
  if (!isExistingProfile) {
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

  container.innerHTML = suggestions.map(s => `
    <div class="p-4 bg-white rounded-xl border border-amber-300 shadow-2xs space-y-3 hover:border-amber-500 transition-all">
      <div class="flex items-center justify-between flex-wrap gap-2">
        <div class="flex items-center gap-2">
          <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-900 border border-amber-300">
            ⭐ Shoda ${s.score}%
          </span>
          <span class="text-xs font-bold text-slate-700">Usedlost čp. ${s.recordA.houseNumber}</span>
        </div>
        <div class="flex items-center gap-2">
          <button onclick="linkCensusRecords('${s.recordA.id}', '${s.recordB.id}')" 
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
            <span>Zápis 1 (Sčítání ${s.recordA.censusYear})</span>
            <span class="text-[10px] font-mono bg-amber-200/80 px-1.5 py-0.5 rounded">${s.recordA.id}</span>
          </div>
          <p class="font-bold text-slate-900 text-sm">${s.recordA.fullName}</p>
          <p class="text-slate-600">Narození: <strong>${s.recordA.birthDate}</strong> (${s.recordA.birthPlace || 'Dlouhomilov'})</p>
          <p class="text-slate-600">Postavení / role: ${s.recordA.relation || '-'}, ${s.recordA.occupation || '-'}</p>
        </div>

        <div class="p-2.5 bg-amber-50/70 rounded-lg border border-amber-200 space-y-1">
          <div class="flex items-center justify-between font-bold text-amber-950">
            <span>Zápis 2 (Sčítání ${s.recordB.censusYear})</span>
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
  `).join('');
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

function renderUnifiedPeopleTable() {
  const tableBody = document.getElementById("unified-people-table-body");
  const countBadge = document.getElementById("registry-count-badge");
  if (!tableBody) return;

  const people = getAllUnifiedPeople().filter(p => p.linkedRecords.length > 0);

  if (countBadge && currentInhabitantViewMode === "unified") {
    countBadge.textContent = `Sjednoceno: ${people.length} osob (${Object.keys(personLinksState.recordToPerson).length} archivních zápisů)`;
  }

  if (people.length === 0) {
    tableBody.innerHTML = `
      <tr>
        <td colspan="6" class="p-8 text-center text-slate-500 italic space-y-2">
          <p class="text-sm font-semibold text-slate-700">Zatím nebyly vytvořeny žádné sjednocené osoby.</p>
          <p class="text-xs text-slate-400">Klikněte na "Spojování osob" nebo použijte automatické návrhy.</p>
        </td>
      </tr>
    `;
    return;
  }

  tableBody.innerHTML = people.map(p => {
    // Sesbírat všechny varianty jmen a pravopisu
    const variantNames = [...new Set(p.linkedRecords.map(r => r.fullName))];
    const years = [...new Set(p.linkedRecords.map(r => r.censusYear))].sort();
    const badgeClass = p.categoryBadgeClass || 'bg-amber-100 text-amber-950 border-amber-300';
    const icon = p.categoryIcon || '👤';
    const catLabel = p.categoryLabel || 'Obyvatel obce';

    return `
      <tr class="hover:bg-amber-50/70 transition-colors border-b border-amber-100">
        <td class="p-3 font-semibold text-slate-900">
          <div class="space-y-1">
            <div class="flex items-center gap-1.5 flex-wrap">
              <span class="text-amber-900 font-bold text-sm cursor-pointer hover:underline" onclick="openPersonModal('${p.id}')">${p.name}</span>
              ${p.isCustom ? '<span class="text-[9px] bg-amber-200 text-amber-950 px-1.5 py-0.2 rounded font-semibold">vlastní</span>' : ''}
            </div>
            ${variantNames.length > 1 ? `
              <div class="flex flex-wrap gap-1 text-[11px] text-slate-500">
                <span>Varianty v pramenech:</span>
                ${variantNames.map(v => `<span class="bg-amber-50 px-1.5 py-0.2 rounded border border-amber-200 italic">${v}</span>`).join('')}
              </div>
            ` : ''}
          </div>
        </td>
        <td class="p-3 text-xs">
          <strong>${p.lifeSpan || p.birthYear || '-'}</strong>
        </td>
        <td class="p-3 text-center">
          <button onclick="openHouseDetailFromRegistry('${p.houseId || 'cp' + p.houseNumber}')" 
            class="text-xs font-bold text-amber-900 hover:text-amber-700 bg-amber-50 hover:bg-amber-200 border border-amber-300 px-2 py-0.5 rounded transition-all" title="Přejít na stavení na mapě">
            čp. ${p.houseNumber} ↗
          </button>
        </td>
        <td class="p-3 text-xs">
          <span class="px-2 py-0.5 text-[11px] font-bold rounded-lg border inline-flex items-center gap-1 whitespace-nowrap ${badgeClass}">
            <span>${icon}</span> ${catLabel}
          </span>
          <div class="text-[11px] text-slate-600 mt-0.5">${p.role || ''}</div>
        </td>
        <td class="p-3 text-xs">
          <div class="space-y-1.5 max-w-md">
            <div class="text-[11px] text-amber-950 font-bold flex items-center gap-1">
              <span>📚 Propojeno ${p.linkedRecords.length} zápisů v letech:</span>
              <span class="font-mono bg-amber-100 px-1.5 py-0.2 rounded text-amber-900">${years.join(', ')}</span>
            </div>
            <div class="flex flex-wrap gap-1.5">
              ${p.linkedRecords.map(r => `
                <div class="inline-flex items-center gap-1 bg-white px-2 py-1 rounded-lg border border-amber-200 shadow-2xs text-[11px]">
                  <span class="font-bold text-amber-950">${r.censusYear}:</span>
                  <span class="text-slate-800 italic">${r.fullName}</span>
                  ${r.scanFile ? `
                    <button onclick="openArchiveViewer('${r.scanFile}', '${r.scanTitle || r.fullName + ' – ' + r.censusYear}', 'ZAO Opava', '${r.scanFile}')" 
                      class="text-[10px] text-amber-800 hover:text-amber-950 font-bold ml-1" title="Zobrazit archivní scan">
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

  if (countBadge && currentInhabitantViewMode !== "unified") {
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

function openPersonModal(personId) {
  if (typeof peopleData === "undefined") return;
  currentPersonId = personId;
  
  // Hledat v peopleData nebo v customPeople
  let person = peopleData.find(p => p.id === personId);
  if (!person && personLinksState && personLinksState.customPeople[personId]) {
    person = personLinksState.customPeople[personId];
  }
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
    houseBadge.textContent = `čp. ${person.houseNumber}`;
  }

  const fatherEl = document.getElementById("modal-person-father");
  if (fatherEl) fatherEl.textContent = (person.father && person.father !== "-") ? person.father : "Neuvedeno";

  const motherEl = document.getElementById("modal-person-mother");
  if (motherEl) motherEl.textContent = (person.mother && person.mother !== "-") ? person.mother : "Neuvedeno";

  const spouseEl = document.getElementById("modal-person-spouse");
  if (spouseEl) spouseEl.textContent = (person.spouse && person.spouse !== "-") ? person.spouse : "Neuvedeno";

  const childrenEl = document.getElementById("modal-person-children");
  if (childrenEl) childrenEl.textContent = (person.children && person.children.length > 0) ? person.children.join(', ') : "Neuvedeno";

  const houseEl = document.getElementById("modal-person-house");
  if (houseEl) houseEl.textContent = person.houseNumber ? `Usedlost čp. ${person.houseNumber}` : "Neuvedeno";

  const bioEl = document.getElementById("modal-person-bio");
  if (bioEl) bioEl.textContent = person.biography || person.bio || '';

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
            <span class="text-slate-500 text-[11px]">(*${rec.birthDate || '-'}, čp. ${rec.houseNumber}, ${rec.occupation})</span>
          </div>
          <div class="flex items-center gap-2 shrink-0 self-end sm:self-auto">
            ${rec.scanFile ? `
              <button onclick="openArchiveViewer('${rec.scanFile}', '${rec.scanTitle || rec.fullName}', 'ZAO Opava', '${rec.scanFile}')" class="px-2 py-1 text-[11px] font-bold bg-amber-800 hover:bg-amber-900 text-white rounded transition-colors flex items-center gap-1 shadow-2xs">
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

  // Kompletní životní dráha osoby
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
            <button onclick="openArchiveViewer('${ev.scanFile}', '${(ev.scanTitle || person.name + ' – ' + getEventTypeName(ev.type)).replace(/'/g, "\\'")}', '${(ev.source || 'Archiv').replace(/'/g, "\\'")}', '${ev.scanFile}')"
              class="px-3 py-1.5 text-xs font-bold bg-amber-800 hover:bg-amber-900 text-white rounded-lg shadow-xs flex items-center gap-1.5 self-start sm:self-center shrink-0 transition-colors">
              <span>📜</span> <span>Zobrazit scan</span>
            </button>
          ` : ''}
        </div>
      `).join('');
    } else {
      eventsList.innerHTML = `
        <div class="p-4 bg-amber-50/50 rounded-xl border border-amber-200 text-xs text-slate-600 italic">
          K této sjednocené osobě jsou aktuálně připojeny výše uvedené zápisy ze sčítání lidu. Podrobnější matriční životní dráha (N/O/Z) zatím nebyla zpracována.
        </div>
      `;
    }
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
      setInhabitantViewMode("table"); document.getElementById("obyvatele-section")?.scrollIntoView({ behavior: "smooth" });
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

function renderHouseCards(filteredHouses = null) {
  const container = document.getElementById("houses-list-container");
  if (!container) return;

  const list = filteredHouses || housesData;

  container.innerHTML = list.map(house => {
    const isHeritage = house.isHeritage;
    const isSelected = house.id === currentHouseId;
    return `
      <div onclick="openHouseDetail('${house.id}')"
        class="parchment-card p-4 rounded-xl border ${isSelected ? 'border-amber-700 ring-2 ring-amber-500 bg-amber-50' : 'border-amber-200 hover:border-amber-400'} cursor-pointer transition-all shadow-xs flex items-start justify-between gap-3">
        <div>
          <div class="flex items-center gap-2 mb-1">
            <span class="text-sm font-extrabold ${isHeritage ? 'text-red-800' : 'text-amber-950'} font-heading">
              ${isHeritage ? '🏛️ ' : ''}čp. ${house.number}
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
      if (r.houseNumber !== h.number) return false;
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
  map.setView([house.location.lat, house.location.lng], 18, { animate: true });
  if (markers[houseId]) markers[houseId].openTooltip();
  panel.scrollIntoView({ behavior: "smooth", block: "start" });
}

// ==========================================================================
// ATLAS A GALERIE HISTORICKÝCH MAP DLOUHOMILOVA (1716–1983)
// ==========================================================================

function renderHistoricalMapsSection(filterCategory = "all") {
  const container = document.getElementById("historical-maps-grid");
  if (!container || typeof historicalMapsData === "undefined") return;

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
             onclick="openArchiveViewer('${mapItem.imageFile}', '${mapItem.title.replace(/'/g, "\\'")} (${mapItem.year})', '${(mapItem.author + ' – ' + mapItem.archive).replace(/'/g, "\\'")}', '${mapItem.externalUrl || mapItem.imageFile}')">
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
              <span class="px-2 py-0.5 bg-white text-amber-950 font-bold rounded-lg border border-amber-300 shadow-2xs" title="Benkov">
                🏘️ ${mapItem.toponyms.benkov}
              </span>
              ${mapItem.toponyms.medelske ? `
                <span class="px-2 py-0.5 bg-white text-amber-950 font-bold rounded-lg border border-amber-300 shadow-2xs" title="Medelské / Nedělské / Tři Dvory">
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
      </div>

      <div class="pt-4 border-t border-amber-200 flex flex-wrap items-center justify-between gap-2 mt-4">
        <div class="flex flex-wrap items-center gap-1.5">
          <button onclick="openArchiveViewer('${mapItem.imageFile}', '${mapItem.title.replace(/'/g, "\\'")} (${mapItem.year})', '${(mapItem.author + ' – ' + mapItem.archive).replace(/'/g, "\\'")}', '${mapItem.externalUrl || mapItem.imageFile}')"
                  class="px-2.5 py-1.5 text-xs font-semibold bg-white hover:bg-amber-100 text-slate-800 rounded-lg border border-amber-300 transition-colors flex items-center gap-1">
            <span>📜</span> <span>Detail scanu</span>
          </button>
          ${mapItem.externalUrl ? `
            <a href="${mapItem.externalUrl}" target="_blank" rel="noopener noreferrer"
               class="px-2.5 py-1.5 text-xs font-bold bg-blue-50 hover:bg-blue-100 text-blue-900 rounded-lg border border-blue-300 transition-colors flex items-center gap-1 shadow-2xs" title="Otevřít přímo zdrojový originál: ${mapItem.externalUrl}">
              <span>🌐</span> <span>Přesný zdroj ↗</span>
            </a>
          ` : ''}
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

function activateMapOverlayFromAtlas(overlayKey) {
  const select = document.getElementById("historical-map-select");
  if (select) select.value = overlayKey;
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
// ARCHIVNÍ PRŮVODCE A SLOVNÍK
// ==========================================================================

function renderGuideSection() {
  const jurContainer = document.getElementById("guide-jurisdiction-container");
  if (jurContainer && typeof guideData !== "undefined" && guideData.jurisdiction) {
    const j = guideData.jurisdiction;
    jurContainer.innerHTML = `
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
  setInhabitantViewMode("table");
  setRegistryCategoryFilter(categoryKey);
  const target = document.getElementById("obyvatele-section");
  if (target) {
    target.scrollIntoView({ behavior: "smooth" });
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
  dlouhomilov: [[49.9020, 16.9845], [49.9130, 16.9965]],
  benkov: [[49.8935, 16.9805], [49.9005, 16.9915]],
  medelske: [[49.9165, 16.9920], [49.9230, 17.0015]]
};

const georefState = {
  isOpen: false,
  activeMap: "cadastre1834",
  activeTarget: "map", // "map" | "dlouhomilov" | "benkov" | "medelske"
  target: "cadastre1834", // Zpětná kompatibilita
  stepMeters: 5,
  isDragging: false,
  dragStartLatLng: null,
  layers: {
    cadastre1834: {
      name: "Stabilní katastr 1834",
      baseBounds: [[49.905502, 16.986672], [49.910894, 16.994724]],
      deltaLat: 0,
      deltaLng: 0,
      scale: 1.0,
      rotation: 0
    },
    vojenske1_1764: {
      name: "I. vojenské mapování (1764)",
      baseBounds: [[49.884288, 16.973586], [49.915788, 17.027586]],
      deltaLat: 0,
      deltaLng: 0,
      scale: 1.0,
      rotation: 0
    },
    vojenske2_1838: {
      name: "II. vojenské mapování (1838)",
      baseBounds: [[49.901834, 16.981195], [49.912034, 17.000983]],
      deltaLat: 0,
      deltaLng: 0,
      scale: 1.0,
      rotation: 0
    },
    vojenske3_1874: {
      name: "III. vojenské mapování (1874)",
      baseBounds: [[49.888116, 16.966853], [49.918116, 17.028853]],
      deltaLat: 0,
      deltaLng: 0,
      scale: 1.0,
      rotation: 0
    },
    vojenske3_1937: {
      name: "Topografická mapa ČSR (1937)",
      baseBounds: [[49.887645, 16.96267], [49.925145, 17.04017]],
      deltaLat: 0,
      deltaLng: 0,
      scale: 1.0,
      rotation: 0
    },
    topo1952: {
      name: "Topografická mapa S-1952 (1952)",
      baseBounds: [[49.89417, 16.93931], [49.92583, 17.00862]],
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
    if (mapMeta && mapMeta.localityBounds && mapMeta.localityBounds[locKey]) {
      return JSON.parse(JSON.stringify(mapMeta.localityBounds[locKey]));
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

// Aplikace změn aktivního prvku do Leafletu
function applyActiveGeorefTransform() {
  if (georefState.activeTarget === "map") {
    const mapId = georefState.activeMap;
    const bounds = computeCurrentBounds(mapId);
    if (overlayLayers[mapId]) {
      overlayLayers[mapId].setBounds(bounds);
      const el = overlayLayers[mapId].getElement();
      if (el) {
        el.style.transformOrigin = "center center";
        el.style.rotate = `${georefState.layers[mapId].rotation || 0}deg`;
      }
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

// Inicializace modulu – načtení z localStorage
function initGeorefEngine() {
  try {
    const saved = localStorage.getItem("dlouhomilov_georef_calibrations");
    if (saved) {
      const parsed = JSON.parse(saved);
      const layersData = parsed.layers || parsed;
      Object.keys(georefState.layers).forEach(k => {
        if (layersData[k]) {
          georefState.layers[k].deltaLat = layersData[k].deltaLat || 0;
          georefState.layers[k].deltaLng = layersData[k].deltaLng || 0;
          georefState.layers[k].scale = layersData[k].scale || 1.0;
          georefState.layers[k].rotation = layersData[k].rotation || 0;
          if (overlayLayers[k]) {
            overlayLayers[k].setBounds(computeCurrentBounds(k));
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
    const checkbox = document.getElementById("toggle-highlights-checkbox");
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
  const cur = getActiveGeorefObject();
  if (!cur) return;
  const bounds = getActiveCurrentBounds();

  // 1. Synchronizace výběru mapy a štítku roku
  const mapSelect = document.getElementById("georef-map-select");
  if (mapSelect) mapSelect.value = mapId;

  const meta = (typeof historicalMapsData !== "undefined") ? historicalMapsData.find(m => m.overlayKey === mapId || m.id === mapId) : null;
  const yearBadge = document.getElementById("georef-map-year-badge");
  if (yearBadge && meta) yearBadge.textContent = meta.year;

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
}

// Uložení do LocalStorage
function georefSave() {
  try {
    const dataToSave = {
      layers: georefState.layers,
      localities: georefState.localities
    };
    localStorage.setItem("dlouhomilov_georef_calibrations", JSON.stringify(dataToSave));
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

  // 1. Zjištění viditelné sekce a pozice scrollu
  let currentSection = "Interaktivní mapa & Stavení";
  let currentSectionAnchor = "#mapa-section";
  const scrollY = window.scrollY || window.pageYOffset;

  const secPruvodce = document.getElementById("badatelsky-pruvodce");
  const secObyvatele = document.getElementById("obyvatele-section");
  const secAtlas = document.getElementById("atlas-map-section");
  const secMapa = document.getElementById("mapa-section");

  if (secPruvodce && scrollY >= secPruvodce.offsetTop - 300) {
    currentSection = "Archivní průvodce & Metodika";
    currentSectionAnchor = "#badatelsky-pruvodce";
  } else if (secObyvatele && scrollY >= secObyvatele.offsetTop - 300) {
    currentSection = "Obyvatelé & Rodopis";
    currentSectionAnchor = "#obyvatele-section";
  } else if (secAtlas && scrollY >= secAtlas.offsetTop - 300) {
    currentSection = "Atlas historických map (1716–1983)";
    currentSectionAnchor = "#atlas-map-section";
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

