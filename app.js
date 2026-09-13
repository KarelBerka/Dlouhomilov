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
    [49.8940, 16.9600],
    [49.9240, 17.0220]
  ];
  overlayLayers.vojenske3_1874 = L.imageOverlay("assets/maps/dlouhomilov_1874_vojenske_3.jpg", boundsVojenske3_1874, {
    opacity: 0.75,
    interactive: false,
    attribution: "III. vojenské mapování 1:25 000 (1874) &copy; ÚAZK"
  });

  // 2e. III. vojenské mapování – Topografická mapa ČSR (1937)
  const boundsVojenske3_1937 = [
    [49.8940, 16.9600],
    [49.9240, 17.0220]
  ];
  overlayLayers.vojenske3_1937 = L.imageOverlay("assets/maps/dlouhomilov_1937_vojenske_3.jpg", boundsVojenske3_1937, {
    opacity: 0.75,
    interactive: false,
    attribution: "Topografická mapa ČSR 1:25 000 (1937) &copy; VZÚ Praha / ÚAZK"
  });

  // 2f. Státní mapa 1:5 000 odvozená (1951 SMO-5)
  const boundsSmo5_1951 = [
    [49.8980, 16.9680],
    [49.9200, 17.0120]
  ];
  overlayLayers.smo5_1951 = L.imageOverlay("assets/maps/dlouhomilov_1951_smo5.jpg", boundsSmo5_1951, {
    opacity: 0.75,
    interactive: false,
    attribution: "Státní mapa 1:5 000 (1951) &copy; ÚAZK ČÚZK"
  });

  // 2g. Topografická mapa v systému S-1952 (1952)
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
    "📐 Státní mapa 1:5 000 (1951)": overlayLayers.smo5_1951,
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
    "smo5_1951", 
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
  const mapMeta = historicalMapsData.find(m => m.overlayKey === layerKey || m.id === layerKey) || historicalMapsData.find(m => m.id === "cadastre1834");
  const toponyms = (mapMeta && mapMeta.toponyms) ? mapMeta.toponyms : {
    dlouhomilov: "Dlouhomilov",
    benkov: "Benkov",
    medelske: "Nedělské"
  };

  const yearLabel = mapMeta ? mapMeta.year : "1834";

  // Styl: velmi decentní, poloprůhledný žlutý podkres (fillOpacity 0.12), tenká zlatá linka – mapa je pod ním 100% čitelná
  const highlightStyle = {
    color: "#ca8a04",      // zlatavý / jantarový okraj
    weight: 1.5,
    dashArray: "4, 4",
    fillColor: "#facc15",  // žlutá barva
    fillOpacity: 0.12,     // vysoce transparentní
    interactive: true
  };

  // 1. Dlouhomilov – jemný obdélník kolem intravilánu obce
  const boundsDlouhomilov = [
    [49.9020, 16.9845],
    [49.9130, 16.9965]
  ];
  const rectD = L.rectangle(boundsDlouhomilov, highlightStyle)
    .bindTooltip(`<strong>Dlouhomilov</strong> (${yearLabel}: <em>${toponyms.dlouhomilov || 'Dlouhomilov'}</em>)`, {
      sticky: true
    });
  overlayLayers.localityHighlights.addLayer(rectD);

  // 2. Benkov – jemný obdélník kolem intravilánu Benkova
  const boundsBenkov = [
    [49.8935, 16.9805],
    [49.9005, 16.9915]
  ];
  const rectB = L.rectangle(boundsBenkov, highlightStyle)
    .bindTooltip(`<strong>Benkov</strong> (${yearLabel}: <em>${toponyms.benkov || 'Benkov'}</em>)`, {
      sticky: true
    });
  overlayLayers.localityHighlights.addLayer(rectB);

  // 3. Medelské / Nedělské / Tři Dvory
  if (toponyms.medelske) {
    const boundsMedelske = [
      [49.9165, 16.9920],
      [49.9230, 17.0015]
    ];
    const rectM = L.rectangle(boundsMedelske, highlightStyle)
      .bindTooltip(`<strong>Medelské / Nedělské</strong> (${yearLabel}: <em>${toponyms.medelske}</em>)`, {
        sticky: true
      });
    overlayLayers.localityHighlights.addLayer(rectM);
  }
}

// Přepínání viditelnosti podkresu lokalit
function toggleLocalityHighlights(isChecked) {
  const layer = overlayLayers.localityHighlights;
  if (!layer) return;
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
// Přepínání zobrazení v jednotné sekci obyvatel (Jmenný rejstřík vs Biografické karty)
function setInhabitantViewMode(mode) {
  currentInhabitantViewMode = mode;
  const tableView = document.getElementById("inhabitant-table-view");
  const cardsView = document.getElementById("inhabitant-cards-view");
  const tableBtn = document.getElementById("view-mode-table-btn");
  const cardsBtn = document.getElementById("view-mode-cards-btn");

  if (mode === "table") {
    tableView?.classList.remove("hidden");
    cardsView?.classList.add("hidden");
    tableBtn?.classList.add("bg-amber-800", "text-white");
    tableBtn?.classList.remove("bg-white", "text-slate-700");
    cardsBtn?.classList.remove("bg-amber-800", "text-white");
    cardsBtn?.classList.add("bg-white", "text-slate-700");
  } else {
    tableView?.classList.add("hidden");
    cardsView?.classList.remove("hidden");
    cardsBtn?.classList.add("bg-amber-800", "text-white");
    cardsBtn?.classList.remove("bg-white", "text-slate-700");
    tableBtn?.classList.remove("bg-amber-800", "text-white");
    tableBtn?.classList.add("bg-white", "text-slate-700");
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
  const filtered = peopleData.filter(p => 
    p.name.toLowerCase().includes(q) ||
    p.houseNumber.toString().includes(q) ||
    p.role.toLowerCase().includes(q) ||
    p.bio.toLowerCase().includes(q) ||
    (p.tags && p.tags.some(t => t.toLowerCase().includes(q)))
  );
  renderPeopleSection(filtered);
}

function openPersonModal(personId) {
  if (typeof peopleData === "undefined") return;
  currentPersonId = personId;
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

  const houseBadge = document.getElementById("modal-person-house-badge");
  if (houseBadge) {
    houseBadge.textContent = `čp. ${person.houseNumber}`;
  }

  const fatherEl = document.getElementById("modal-person-father");
  if (fatherEl) fatherEl.textContent = person.father || "-";

  const motherEl = document.getElementById("modal-person-mother");
  if (motherEl) motherEl.textContent = person.mother || "-";

  const spouseEl = document.getElementById("modal-person-spouse");
  if (spouseEl) spouseEl.textContent = person.spouse || "-";

  const childrenEl = document.getElementById("modal-person-children");
  if (childrenEl) childrenEl.textContent = person.children?.join(', ') || "-";

  const houseEl = document.getElementById("modal-person-house");
  if (houseEl) houseEl.textContent = `Usedlost čp. ${person.houseNumber}`;

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

  const eventsList = document.getElementById("modal-person-events-list");
  if (eventsList && person.events) {
    eventsList.innerHTML = person.events.map(ev => `
      <div class="p-3.5 bg-white rounded-xl border border-amber-200 shadow-sm flex flex-col sm:flex-row sm:items-start justify-between gap-3">
        <div class="space-y-1">
          <div class="flex items-center gap-2">
            <span class="text-xs font-extrabold text-amber-900 bg-amber-100 px-2 py-0.5 rounded">${ev.year || ev.date}</span>
            <span class="text-xs font-bold text-slate-800">${ev.type || ''} ${ev.place ? '(' + ev.place + ')' : ''}</span>
          </div>
          <p class="text-xs text-slate-700 leading-relaxed">${ev.description}</p>
          <p class="text-[10px] text-slate-400 font-mono">🏛️ <em>${ev.source}</em></p>
        </div>

        ${ev.scanFile ? `
          <button onclick="openArchiveViewer('${ev.scanFile}', '${ev.scanTitle || person.name + ' – ' + (ev.type || 'Záznam')}', '${ev.source}', '${ev.scanFile}')"
            class="px-3 py-1.5 text-xs font-bold bg-amber-800 hover:bg-amber-900 text-white rounded-lg shadow-xs flex items-center gap-1.5 self-start sm:self-center shrink-0 transition-colors">
            <span>📜</span> <span>Zobrazit scan</span>
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

const georefState = {
  isOpen: false,
  target: "cadastre1834",
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
      baseBounds: [[49.8940, 16.9600], [49.9240, 17.0220]],
      deltaLat: 0,
      deltaLng: 0,
      scale: 1.0,
      rotation: 0
    },
    vojenske3_1937: {
      name: "Topografická mapa ČSR (1937)",
      baseBounds: [[49.8940, 16.9600], [49.9240, 17.0220]],
      deltaLat: 0,
      deltaLng: 0,
      scale: 1.0,
      rotation: 0
    },
    smo5_1951: {
      name: "Státní mapa 1:5 000 (1951)",
      baseBounds: [[49.8980, 16.9680], [49.9200, 17.0120]],
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
  }
};

// Inicializace modulu – načtení z localStorage
function initGeorefEngine() {
  try {
    const saved = localStorage.getItem("dlouhomilov_georef_calibrations");
    if (saved) {
      const parsed = JSON.parse(saved);
      Object.keys(georefState.layers).forEach(k => {
        if (parsed[k]) {
          // Načteme deltaLat, deltaLng, scale, rotation, ale zachováme nové baseBounds z kódu
          georefState.layers[k].deltaLat = parsed[k].deltaLat || 0;
          georefState.layers[k].deltaLng = parsed[k].deltaLng || 0;
          georefState.layers[k].scale = parsed[k].scale || 1.0;
          georefState.layers[k].rotation = parsed[k].rotation || 0;
          applyGeorefTransform(k);
        }
      });
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
    updateGeorefUI();
    // Ensure map is smoothly scrolled into view when opening calibration
    document.getElementById("mapa-section")?.scrollIntoView({ behavior: "smooth" });
  } else {
    panel.classList.add("hidden");
    btn?.classList.remove("bg-amber-900", "text-amber-200");
    btn?.classList.add("bg-white", "text-slate-800");
    if (georefState.isDragging) georefToggleDrag(false);
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


function switchGeorefTarget(target) {
  georefState.target = target;
  switchHistoricalOverlay(target);
  document.getElementById("historical-map-select").value = target;
  updateGeorefUI();
}

// Posun vrstvy tlačítky (Nudge)
function georefNudge(dir) {
  const cur = georefState.layers[georefState.target];
  const stepM = georefState.stepMeters;
  const dLat = stepM / 111320.0;
  const dLng = stepM / 71500.0;

  if (dir === "up") cur.deltaLat += dLat;
  else if (dir === "down") cur.deltaLat -= dLat;
  else if (dir === "left") cur.deltaLng -= dLng;
  else if (dir === "right") cur.deltaLng += dLng;

  applyGeorefTransform(georefState.target);
  updateGeorefUI();
}

// Volba kroku posunu (1m, 5m, 25m, 100m)
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
  const cur = georefState.layers[georefState.target];
  cur.scale = Math.max(0.01, parseFloat(val) / 100.0);
  applyGeorefTransform(georefState.target);
  updateGeorefUI();
}

// Krok měřítka (+/-)
function georefStepScale(deltaPct) {
  const cur = georefState.layers[georefState.target];
  cur.scale = Math.max(0.01, Math.min(10.0, cur.scale + deltaPct / 100.0));
  applyGeorefTransform(georefState.target);
  updateGeorefUI();
}

// Nastavení přesného měřítka (předvolbami 25%, 50%, 75%, 100%, 150%, 200%)
function georefSetScaleExact(ratio) {
  const cur = georefState.layers[georefState.target];
  cur.scale = Math.max(0.01, ratio);
  applyGeorefTransform(georefState.target);
  updateGeorefUI();
}

// Změna rotace posuvníkem
function georefUpdateRotation(val) {
  const cur = georefState.layers[georefState.target];
  cur.rotation = parseFloat(val);
  applyGeorefTransform(georefState.target);
  updateGeorefUI();
}

// Krok rotace (+/-)
function georefStepRotation(deltaDeg) {
  const cur = georefState.layers[georefState.target];
  cur.rotation = parseFloat((cur.rotation + deltaDeg).toFixed(2));
  applyGeorefTransform(georefState.target);
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
  const cur = georefState.layers[georefState.target];
  const dLat = e.latlng.lat - startPointerLatLng.lat;
  const dLng = e.latlng.lng - startPointerLatLng.lng;
  cur.deltaLat += dLat;
  cur.deltaLng += dLng;
  startPointerLatLng = e.latlng;
  applyGeorefTransform(georefState.target);
  updateGeorefUI();
}

function onGeorefMouseUp() {
  isPointerDown = false;
  startPointerLatLng = null;
}

// Výpočet a aplikace transformovaných hranic do Leafletu
function computeCurrentBounds(targetKey) {
  const cur = georefState.layers[targetKey];
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
  const bounds = computeCurrentBounds(targetKey);
  if (overlayLayers[targetKey]) {
    overlayLayers[targetKey].setBounds(bounds);
    
    // Aplikace CSS rotace na element rastru, pokud je nastavena
    const el = overlayLayers[targetKey].getElement();
    if (el) {
      el.style.transformOrigin = "center center";
      el.style.rotate = `${georefState.layers[targetKey].rotation}deg`;
    }
  }
}

// Aktualizace ovládacích prvků v panelu
function updateGeorefUI() {
  const cur = georefState.layers[georefState.target];
  const bounds = computeCurrentBounds(georefState.target);

  const sel = document.getElementById("georef-layer-select");
  if (sel) sel.value = georefState.target;

  const scaleSlider = document.getElementById("georef-scale-slider");
  const scaleVal = document.getElementById("georef-scale-val");
  if (scaleSlider) scaleSlider.value = Math.round(cur.scale * 100);
  if (scaleVal) scaleVal.textContent = `${(cur.scale * 100).toFixed(1)}%`;

  const rotSlider = document.getElementById("georef-rotation-slider");
  const rotVal = document.getElementById("georef-rotation-val");
  if (rotSlider) rotSlider.value = cur.rotation;
  if (rotVal) rotVal.textContent = `${cur.rotation > 0 ? '+' : ''}${cur.rotation.toFixed(2)}°`;

  const deltaMetersLat = Math.round(cur.deltaLat * 111320);
  const deltaMetersLng = Math.round(cur.deltaLng * 71500);
  const shiftVal = document.getElementById("georef-shift-val");
  if (shiftVal) shiftVal.textContent = `S/J: ${deltaMetersLat > 0 ? '+' : ''}${deltaMetersLat} m, V/Z: ${deltaMetersLng > 0 ? '+' : ''}${deltaMetersLng} m`;

  const boundsCode = document.getElementById("georef-bounds-code");
  if (boundsCode) {
    const varName = `bounds_${georefState.target}`;
    boundsCode.textContent = `const ${varName} = [\n  [${bounds[0][0]}, ${bounds[0][1]}],\n  [${bounds[1][0]}, ${bounds[1][1]}]\n];`;
  }
}

// Uložení do LocalStorage
function georefSave() {
  try {
    localStorage.setItem("dlouhomilov_georef_calibrations", JSON.stringify(georefState.layers));
    showGeorefToast("✅ Nastavení kalibrace všech vrstev bylo uloženo do vašeho prohlížeče.");
  } catch (e) {
    alert("Chyba při ukládání: " + e.message);
  }
}

// Reset kalibrace na výchozí hodnoty
function georefReset() {
  if (!confirm(`Opravdu chcete resetovat kalibraci pro vrstvu ${georefState.layers[georefState.target].name}?`)) return;
  const cur = georefState.layers[georefState.target];
  cur.deltaLat = 0;
  cur.deltaLng = 0;
  cur.scale = 1.0;
  cur.rotation = 0;
  applyGeorefTransform(georefState.target);
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

