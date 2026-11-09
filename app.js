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
  normalizeHousesData();
  initPersonLinkage();
  updateDynamicCounters();
  renderStorySection();
  try { initMap(); } catch (err) { console.error("Map init warning:", err); }
  renderHouseCards();
  renderCensusRegistryTable();
  renderPeopleSection();
  renderHistoricalMapsSection();
  renderGuideSection();
  renderDictionary();
  if (typeof renderDemographySection === "function") {
    renderDemographySection();
  }
  setupEventListeners();
  openHouseDetail(currentHouseId, false);
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
        if (!c.scanFile && Array.isArray(c.sourceArchives) && c.sourceArchives[0]?.file) {
          c.scanFile = c.sourceArchives[0].file;
          if (!c.scanTitle) c.scanTitle = c.sourceArchives[0].label || "";
        }
        if (Array.isArray(c.inhabitants)) {
          c.inhabitants.forEach((p) => {
            if (!p.notes && p.note) p.notes = p.note;
          });
        }
      });
    }
  });
}

// Pomocná funkce pro jednotné formátování označení domu (Dlouhomilov čp. X vs. Medelské čp. X)
function formatHouseLabel(houseId, houseNumber) {
  if (houseId && String(houseId).startsWith("medelske_cp")) {
    const num = houseNumber || String(houseId).replace("medelske_cp", "");
    return `Medelské čp. ${num}`;
  }
  if (houseId && String(houseId).startsWith("benkov_cp")) {
    const num = houseNumber || String(houseId).replace("benkov_cp", "");
    return `Benkov čp. ${num}`;
  }
  return `čp. ${houseNumber}`;
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
      const houseKeys = Object.keys(houseCounts).sort((a, b) => {
        const isMedA = a.startsWith("medelske_cp");
        const isMedB = b.startsWith("medelske_cp");
        if (isMedA !== isMedB) return isMedA ? 1 : -1;
        const numA = parseInt(a.replace(/\D+/g, ""), 10) || 0;
        const numB = parseInt(b.replace(/\D+/g, ""), 10) || 0;
        return numA - numB;
      });

      const optionsHtml = [`<option value="all">Všechna stavení (${total} záznamů)</option>`];
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

// Obsluha URL hash routování (#house=cp22, #person=p_josef_dvorak_1857, #map=vojenske2_1838)
function handleUrlHash() {
  const rawHash = window.location.hash ? window.location.hash.substring(1) : "";
  if (!rawHash) return;

  const params = new URLSearchParams(rawHash.includes("=") ? rawHash : "");
  const houseParam = params.get("house");
  const personParam = params.get("person");
  const mapParam = params.get("map");

  if (houseParam && typeof housesData !== "undefined") {
    const targetHouse = housesData.find(h => h.id === houseParam || h.number === houseParam);
    if (targetHouse) {
      openHouseDetail(targetHouse.id, false);
      setTimeout(() => {
        document.getElementById("house-detail-container")?.scrollIntoView({ behavior: "smooth" });
      }, 150);
    }
  }

  if (personParam && typeof peopleData !== "undefined") {
    const targetPerson = peopleData.find(p => p.id === personParam);
    if (targetPerson) {
      openPersonModal(targetPerson.id, false);
    }
  }

  if (mapParam) {
    const select = document.getElementById("historical-map-select");
    if (select) select.value = mapParam;
    switchHistoricalOverlay(mapParam, false);
  }

  if (rawHash === "comic" || params.get("tab") === "comic") {
    switchStoryTab("comic");
    setTimeout(() => {
      document.getElementById("pribeh-section")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }

  if (rawHash === "demografie" || rawHash === "demografie-section" || params.get("section") === "demografie") {
    switchHubSection("demografie", false);
    setTimeout(() => {
      document.getElementById("demografie-section")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }

  if (rawHash === "atlas-map-section" || rawHash === "atlas" || params.get("section") === "atlas") {
    switchHubSection("atlas", false);
    setTimeout(() => {
      document.getElementById("atlas-map-section")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }

  if (rawHash === "badatelsky-pruvodce" || rawHash === "dictionary-container" || params.get("section") === "pruvodce") {
    switchHubSection("pruvodce", false);
    setTimeout(() => {
      document.getElementById(rawHash === "dictionary-container" ? "dictionary-container" : "badatelsky-pruvodce")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }
}

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
    [49.899851, 16.946987],
    [49.925179, 17.002435]
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
    const lat = house.location?.lat ?? house.lat;
    const lng = house.location?.lng ?? house.lng;
    if (typeof lat !== "number" || typeof lng !== "number" || isNaN(lat) || isNaN(lng)) return;
    const isFeatured = house.id === "cp29";
    const isHeritage = house.isHeritage;
    
    let markerClass = "custom-house-marker";
    if (isFeatured) markerClass += " featured";
    else if (isHeritage) markerClass += " bg-red-700 text-white border-red-300";

    const isMedelske = String(house.id).startsWith("medelske_cp");
    const isBenkov = String(house.id).startsWith("benkov_cp");
    const markerBadge = isMedelske ? `M${house.number}` : isBenkov ? `B${house.number}` : `${house.isHeritage ? '🏛️' : ''}${house.number}`;
    const houseLabel = formatHouseLabel(house.id, house.number);

    const customIcon = L.divIcon({
      className: markerClass,
      html: `<span>${markerBadge}</span>`,
      iconSize: [38, 38],
      iconAnchor: [19, 19]
    });

    const marker = L.marker([lat, lng], { icon: customIcon })
      .bindTooltip(`<strong>${house.isHeritage ? '🏛️ ' : ''}${houseLabel}</strong><br>${house.localName}${house.isHeritage ? '<br><span class="text-[10px] text-red-600 font-bold">Kulturní památka ČR</span>' : ''}`, {
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
function switchHistoricalOverlay(layerKey, updateHash = true) {
  currentHistoricalLayerKey = layerKey;
  if (updateHash && window.history && window.history.replaceState) {
    window.history.replaceState(null, "", `#map=${layerKey}`);
  }

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

  // Přidáme vybranou vrstvu (pokud není aktivní režim vedle sebe, kde má být levá mapa čistá)
  const activeLayer = overlayLayers[layerKey];
  if (activeLayer) {
    if (!georefState?.isSideBySide) {
      activeLayer.addTo(map);
      const slider = document.getElementById("cadastre-opacity-slider");
      const val = slider ? slider.value : 75;
      updateCadastreOpacity(val);
    }
  }

  // Synchronizace s mapou v pravém okně v režimu Side-by-Side
  if (georefState?.isSideBySide && typeof updateHistoricalSideMapOverlay === "function") {
    updateHistoricalSideMapOverlay();
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
    medelske: "Medelské"
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
  if (toponyms.benkov) {
    const boundsBenkov = (typeof computeLocalityBounds === "function") 
      ? computeLocalityBounds(actualMapKey, "benkov") 
      : [[49.8935, 16.9805], [49.9005, 16.9915]];
    const isSelB = isTargetSelected("benkov");
    const rectB = L.rectangle(boundsBenkov, getHighlightStyle("benkov"))
      .bindTooltip(`<strong>Benkov</strong>${isSelB ? ' <span class="text-amber-900 font-bold bg-amber-200 px-1 rounded">[Kalibrace]</span>' : ''} (${yearLabel}: <em>${toponyms.benkov}</em>)`, {
        sticky: true
      });
    rectB.on("click", (e) => {
      L.DomEvent.stopPropagation(e);
      if (typeof georefSelectMap === "function") georefSelectMap(actualMapKey);
      if (typeof georefSelectTarget === "function") georefSelectTarget("benkov");
      toggleGeorefPanel(true);
    });
    overlayLayers.localityHighlights.addLayer(rectB);
  }

  // 3. Medelské / Tři Dvory pro tuto konkrétní mapu
  if (toponyms.medelske) {
    const boundsMedelske = (typeof computeLocalityBounds === "function") 
      ? computeLocalityBounds(actualMapKey, "medelske") 
      : [[49.9165, 16.9920], [49.9230, 17.0015]];
    const isSelM = isTargetSelected("medelske");
    const rectM = L.rectangle(boundsMedelske, getHighlightStyle("medelske"))
      .bindTooltip(`<strong>Medelské</strong>${isSelM ? ' <span class="text-amber-900 font-bold bg-amber-200 px-1 rounded">[Kalibrace]</span>' : ''} (${yearLabel}: <em>${toponyms.medelske}</em>)`, {
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

  let primaryScanUrl = scanUrl ? String(scanUrl).split(",")[0].trim() : "";
  if (primaryScanUrl === "assets/archives/medelske_cp1/1921-Dlouhomilov_1-Minar.jpg") {
    primaryScanUrl = "assets/archives/cp1/medelske_cp1_1921_byt1.jpg";
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
  "p_petr_dvorak_1793": ["cen_241", "cen_230"], // Petr Dvořák (*1793, čp. 22)
  "p_johann_dvorak_1795": ["cen_291"], // Johann Dvořák (Dworák) (*1795, čp. 29)
  "p_dr_jan_dvorak_1826": ["cen_292", "cen_299"], // Johann / Dr. Jan Dvořák (*1826, čp. 29)
  "p_alois_dvorak_1830": ["cen_303"], // Alois Dvořák (*1830, čp. 29)
  "p_karel_dvorak_1839": ["cen_293", "cen_294"], // Karl / Karel Dvořák (*1839, čp. 29)
  "p_josef_dvorak_1857": ["cen_225", "cen_213", "cen_203", "cen_194", "cen_186", "cen_181"], // Josef Dvořák (*1857, čp. 22)
  "p_anna_dvorakova_1857": ["cen_214", "cen_204", "cen_195", "cen_187", "cen_182"], // Anna Dvořáková roz. Kouřilová (*1857, čp. 22)
  "p_josef_dvorak_1877": ["cen_215", "cen_205", "cen_196", "cen_313", "cen_322"], // Josef Dvořák (*1879, čp. 22 -> čp. 29)
  "p_amalie_dvorakova_1878": ["cen_314", "cen_323"], // Amálie Dvořáková roz. Motyková (*1888, čp. 29)
  "p_karel_dvorak_1880": ["cen_216", "cen_206", "cen_197", "cen_188", "cen_172"] // Karel Dvořák (*1880, čp. 22)
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
        <td class="p-3 text-xs" data-label="Narození / Věk">
          <strong>${p.lifeSpan || p.birthYear || '-'}</strong>
        </td>
        <td class="p-3 text-center">
          <button onclick="openHouseDetailFromRegistry('${p.houseId || 'cp' + p.houseNumber}')" 
            class="text-xs font-bold text-amber-900 hover:text-amber-700 bg-amber-50 hover:bg-amber-200 border border-amber-300 px-2 py-0.5 rounded transition-all" title="Přejít na stavení na mapě">
            ${formatHouseLabel(p.houseId, p.houseNumber)} ↗
          </button>
        </td>
        <td class="p-3 text-xs" data-label="Narození / Věk">
          <span class="px-2 py-0.5 text-[11px] font-bold rounded-lg border inline-flex items-center gap-1 whitespace-nowrap ${badgeClass}">
            <span>${icon}</span> ${catLabel}
          </span>
          <div class="text-[11px] text-slate-600 mt-0.5">${p.role || ''}</div>
        </td>
        <td class="p-3 text-xs" data-label="Narození / Věk">
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
            Zobrazit všechny obyvatele (${censusRegistryData.length})
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

    // 2. House filter (supports both houseId e.g. 'medelske_cp1'/'cp7' and raw houseNumber)
    const rHouseKey = r.houseId || `cp${r.houseNumber}`;
    const matchesHouse = (houseVal === "all") || (rHouseKey === houseVal) || (r.houseNumber === houseVal);

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

// Pomocná funkce pro převod textu rodinného příslušníka na klikací odkaz do peopleData
function formatFamilyMemberItem(itemText) {
  if (!itemText || itemText === "-" || itemText === "Neuvedeno") return "Neuvedeno";
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

    // Kontrola shody křestního jména a příjmení
    const hasFirst = firstName && normText.includes(firstName);
    const hasLast = lastName && (normText.includes(lastName) || normText.includes("dvorak"));

    if (hasFirst && hasLast) {
      if (mentionedYear && p.birthYear) {
        if (Math.abs(mentionedYear - p.birthYear) <= 2) {
          matchedPerson = p;
          break;
        }
      } else if (!mentionedYear) {
        // Speciální případy bez roku v textu (např. Pavel Dvořák)
        if (p.id === "p_pavel_dvorak_1750" && normText.includes("pavel")) {
          matchedPerson = p;
          break;
        }
      }
    }
  }

  if (matchedPerson) {
    return `<button onclick="openPersonModal('${matchedPerson.id}')" class="inline-flex items-center gap-1 font-bold text-amber-900 hover:text-amber-700 underline decoration-amber-500/70 hover:decoration-amber-800 cursor-pointer text-left" title="Otevřít biografický profil: ${matchedPerson.name}"><span>👤</span><span>${itemText}</span></button>`;
  }
  return itemText;
}

function openPersonModal(personId, updateHash = true) {
  if (typeof peopleData === "undefined") return;
  currentPersonId = personId;
  if (updateHash && window.history && window.history.replaceState) {
    window.history.replaceState(null, "", `#person=${personId}`);
  }
  
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
  if (fatherEl) fatherEl.innerHTML = (person.father && person.father !== "-") ? formatFamilyMemberItem(person.father) : "Neuvedeno";

  const motherEl = document.getElementById("modal-person-mother");
  if (motherEl) motherEl.innerHTML = (person.mother && person.mother !== "-") ? formatFamilyMemberItem(person.mother) : "Neuvedeno";

  const spouseEl = document.getElementById("modal-person-spouse");
  if (spouseEl) spouseEl.innerHTML = (person.spouse && person.spouse !== "-") ? formatFamilyMemberItem(person.spouse) : "Neuvedeno";

  const childrenEl = document.getElementById("modal-person-children");
  if (childrenEl) {
    if (person.children && person.children.length > 0) {
      childrenEl.innerHTML = person.children.map(ch => formatFamilyMemberItem(ch)).join(", ");
    } else {
      childrenEl.textContent = "Neuvedeno";
    }
  }

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

function openPersonModalByName(name, birthDate = "", houseNum = "") {
  if (typeof peopleData === "undefined") return;
  const normName = normalizeForPersonMatching(name);
  const birthYear = extractBirthYearFromText(birthDate);

  let match = peopleData.find(p => {
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

function openHouseDetail(houseId, updateHash = true) {
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

  if (map && house.location) {
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
                <button onclick="openArchiveViewer('${item.scanFile}', '${(item.scanTitle || item.event || '').replace(/'/g, "\\'")}', '${(item.source || '').replace(/'/g, "\\'")}', '${item.scanFile}')"
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
          <p class="text-xs text-slate-500 mt-0.5">Zemský archiv v Opavě & SOkA Šumperk (fond Okresní úřad Zábřeh – Sčítání lidu 1857–1921)</p>
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
                <button onclick="openArchiveViewer('${scanUrl}', '${(doc.scanTitle || doc.title || '').replace(/'/g, "\\'")}', '${(doc.source || '').replace(/'/g, "\\'")}', '${scanUrl}')"
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

  return `
    <div class="space-y-3">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-600 bg-white/70 p-2.5 rounded-lg border border-amber-200 gap-2">
        <div>
          <span><strong>Datum soupisu:</strong> ${census.date || census.year}</span> | 
          <span>📚 <strong>Fond:</strong> ${census.archiveSource || 'SOkA Šumperk / ZAO Opava'}</span>
        </div>
        
        ${census.scanFile ? `
          <button onclick="openArchiveViewer('${census.scanFile}', '${(census.scanTitle || 'Sčítací operát ' + census.year).replace(/'/g, "\\'")}', '${(census.archiveSource || 'SOkA Šumperk').replace(/'/g, "\\'")}', '${census.scanFile}')"
            class="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold bg-amber-800 hover:bg-amber-900 text-white rounded-lg transition-colors shadow-sm self-start sm:self-center">
            🔍 Prohlédnout archivní scan sčítacího listu
          </button>
        ` : ''}
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
  map.setView([house.location.lat, house.location.lng], 18, { animate: true });
  if (markers[houseId]) markers[houseId].openTooltip();
  document.getElementById("mapa-section")?.scrollIntoView({ behavior: "smooth", block: "start" });
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
  isSideBySide: false,
  gcp: {
    points: [], // { id, name, ref: {lat, lng}, hist: {lat, lng} }
    currentRefPoint: null, // dočasně zvolený referenční bod před kliknutím na historickou mapu
    mode: "idle" // "idle" | "awaiting_ref_click" | "awaiting_hist_click"
  },
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
      baseBounds: [[49.899851, 16.946987], [49.925179, 17.002435]],
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

  const badgeText = document.getElementById("right-map-badge-text");
  if (badgeText) {
    badgeText.textContent = meta ? `${meta.title} (${meta.year})` : mapId;
  }

  if (mapHistOverlay) {
    mapHist.removeLayer(mapHistOverlay);
    mapHistOverlay = null;
  }

  const bounds = computeCurrentBounds(mapId);
  const imgUrl = (overlayLayers[mapId] && overlayLayers[mapId]._url)
    ? overlayLayers[mapId]._url
    : (meta ? meta.imageFile : "");

  if (imgUrl) {
    mapHistOverlay = L.imageOverlay(imgUrl, bounds, {
      opacity: 1.0,
      interactive: false
    }).addTo(mapHist);

    const el = mapHistOverlay.getElement();
    if (el) {
      el.style.transformOrigin = "center center";
      el.style.rotate = `${georefState.layers[mapId]?.rotation || 0}deg`;
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

  // 1. Zjištění viditelné sekce a pozice scrollu
  let currentSection = "Interaktivní mapa & Stavení";
  let currentSectionAnchor = "#mapa-section";
  const scrollY = window.scrollY || window.pageYOffset;

  const secPruvodce = document.getElementById("badatelsky-pruvodce");
  const secObyvatele = document.getElementById("obyvatele-section");
  const secAtlas = document.getElementById("atlas-map-section");
  const secMapa = document.getElementById("mapa-section");
  const secPribeh = document.getElementById("pribeh-section");

  if (secPruvodce && scrollY >= secPruvodce.offsetTop - 300) {
    currentSection = "Archivní průvodce & Metodika";
    currentSectionAnchor = "#badatelsky-pruvodce";
  } else if (secObyvatele && scrollY >= secObyvatele.offsetTop - 300) {
    currentSection = "Obyvatelé & Rodopis";
    currentSectionAnchor = "#obyvatele-section";
  } else if (secAtlas && scrollY >= secAtlas.offsetTop - 300) {
    currentSection = "Atlas historických map (1716–1983)";
    currentSectionAnchor = "#atlas-map-section";
  } else if (secMapa && scrollY >= secMapa.offsetTop - 300) {
    currentSection = "Interaktivní mapa & Stavení";
    currentSectionAnchor = "#mapa-section";
  } else if (secPribeh) {
    currentSection = "Příběh Dlouhomilova, Medelského a Benkova & Zajímavosti";
    currentSectionAnchor = "#pribeh-section";
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

  tocContainer.innerHTML = `
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3 pb-2.5 border-b border-amber-100">
      <div class="flex items-center gap-2 flex-wrap">
        <span class="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-amber-950 flex items-center gap-1.5">
          <span>🧭</span> Výběr kapitoly příběhu (I.–X.):
        </span>
        <span class="text-xs text-slate-500">
          ${showAllStoryChapters ? "Zobrazeno všech 10 kapitol pod sebou" : `Čtení po kapitolách (aktivní Kapitola ${storyData.chapters[currentStoryChapterIndex]?.number || "I"})`}
        </span>
      </div>
      <div class="flex flex-wrap items-center gap-2">
        <button type="button" onclick="toggleAllStoryChapters()" class="px-3 py-1.5 text-xs font-bold rounded-lg border transition-colors cursor-pointer flex items-center gap-1.5 ${showAllStoryChapters ? 'bg-amber-800 text-white border-amber-900' : 'bg-amber-100 hover:bg-amber-200 text-amber-950 border-amber-300'}">
          <span>${showAllStoryChapters ? '📑' : '📖'}</span>
          <span>${showAllStoryChapters ? 'Přepnout na čtečku po 1 kapitole' : 'Rozbalit všech 10 kapitol pod sebou'}</span>
        </button>
        <a href="docs/pribeh_dlouhomilova.md" target="_blank" class="px-2.5 py-1.5 text-xs font-bold text-amber-800 hover:text-amber-950 bg-amber-50 hover:bg-amber-100 rounded-lg border border-amber-200">
          📄 Dokument .md ↗
        </a>
      </div>
    </div>
    <div class="flex sm:grid sm:grid-cols-5 overflow-x-auto no-scrollbar gap-2 pb-1 snap-x">
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
              Kapitola ${ch.number} / X
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

        <div class="space-y-4 text-base sm:text-[17px] text-slate-800 font-serif-body leading-relaxed max-w-4xl">
          ${ch.paragraphs.map(p => `<p>${p}</p>`).join("")}
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
                📖 Zobrazit všech 10 kapitol
              </button>
              ${nextCh ? `
                <button type="button" onclick="selectStoryChapter(${idx + 1}, true)" class="px-4 py-2 text-xs sm:text-sm font-extrabold bg-amber-800 hover:bg-amber-900 text-amber-50 rounded-xl shadow-sm transition-colors cursor-pointer flex items-center gap-1.5">
                  <span>Další kapitola: ${nextCh.number}. ${nextCh.title}</span> <span>→</span>
                </button>
              ` : `
                <button type="button" onclick="switchStoryTab('facts')" class="px-4 py-2 text-xs sm:text-sm font-extrabold bg-amber-800 hover:bg-amber-900 text-amber-50 rounded-xl shadow-sm transition-colors cursor-pointer flex items-center gap-1.5">
                  <span>✨ Přejít na Zajímavosti z matrik (11)</span> <span>→</span>
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
              📖 Zobrazit všechny strany (I.–III.)
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

let currentDemographyTab = "all"; // 'all' default (KPI, věková pyramida, původ i bohatství zobrazeno) | 'histogram' | 'origins' | 'wealth'
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
};

function normalizePlaceName(p) {
  if (!p) return 'Dlouhomilov';
  let s = p.trim();
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
  if (s.toLowerCase().includes('libina') || s.toLowerCase().includes('liebau')) return 'Libina';
  if (s.toLowerCase().includes('studýn') || s.toLowerCase().includes('studén') || s.toLowerCase().includes('studen')) {
    if (s.toLowerCase().includes('horn')) return 'Horní Studénky';
    return 'Dolní Studénky';
  }
  if (s.toLowerCase().includes('krumpach')) return 'Krumpach';
  if (s.toLowerCase().includes('chromeč') || s.toLowerCase().includes('chromec')) return 'Chromeč';
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
  if (s.toLowerCase().includes('hrabišín') || s.toLowerCase().includes('rabersdorf')) return 'Hrabišín';
  if (s.toLowerCase().includes('olešná') || s.toLowerCase().includes('ullischen')) {
    if (s.toLowerCase().includes('horn') || s.toLowerCase().includes('ober') || s.toLowerCase().includes('ob.')) return 'Horní Olešná';
    return 'Dolní Olešná';
  }
  if (s.toLowerCase().includes('benkov') || s.toLowerCase().includes('benke')) return 'Benkov';
  if (s.toLowerCase().includes('medelsk') || s.toLowerCase().includes('dreihöfen')) return 'Medelské';
  if (s.toLowerCase().includes('dlouhomilov') || s.toLowerCase().includes('lomigsdorf')) return 'Dlouhomilov';

  s = s.replace(/\s*\([^)]*\)/g, '').trim();
  s = s.replace(/,\s*okr\..*$/i, '').trim();
  s = s.replace(/,\s*Čechy.*$/i, '').trim();
  s = s.replace(/\s*-\s*Medelsko/i, '').trim();
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
          const by = extractBirthYearFromDate(i.birthDate);
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
      rank: 3,
      medal: '🥉',
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
      rank: 4,
      medal: '4.',
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
      rank: 5,
      medal: '5.',
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
      rank: 6,
      medal: '6.',
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
      rank: 7,
      medal: '7.',
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
      rank: 8,
      medal: '8.',
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
      rank: 9,
      medal: '9.',
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
      rank: 10,
      medal: '10.',
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
      rank: 11,
      medal: '11.',
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
      rank: 12,
      medal: '12.',
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
  let total1921Pop = 0;
  let total1921Apts = 0;
  let local1921Count = 0;
  let textileCount = 0;
  const textileHouses = new Set();
  const ages1921 = [];

  housesWithCensus.forEach(h => {
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

  return `
    <div class="p-4 rounded-xl bg-white border border-amber-200 shadow-2xs">
      <div class="flex items-center justify-between mb-1">
        <span class="text-xs font-bold text-amber-950 uppercase tracking-wider">Zpracovaná stavení</span>
        <span class="text-xl">🏠</span>
      </div>
      <div class="text-2xl font-extrabold text-amber-950">${housesWithCensus.length} domů</div>
      <p class="text-xs text-slate-600 mt-1">
        V roce 1921: <strong>${total1921Apts} bytů</strong>, <strong>${total1921Pop} obyvatel</strong> (průměr <strong>${avgHousePop} os./dům</strong>, <strong>${avgAptPop} os./byt</strong>).
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
        <span class="text-xs font-bold text-amber-950 uppercase tracking-wider">Věkový průměr (1921)</span>
        <span class="text-xl">🎂</span>
      </div>
      <div class="text-2xl font-extrabold text-indigo-900">${avgAge1921} let</div>
      <p class="text-xs text-slate-600 mt-1">
        Stárnutí obce: vzestup z <strong>23,0–24,9 let</strong> v 19. století; v r. 1921 celkem <strong>15,4 % seniorů 60+</strong>.
      </p>
    </div>

    <div class="p-4 rounded-xl bg-white border border-amber-200 shadow-2xs">
      <div class="flex items-center justify-between mb-1">
        <span class="text-xs font-bold text-amber-950 uppercase tracking-wider">Textil Oberleithner</span>
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
  const ageW = document.getElementById("demography-age-wrapper");
  const origW = document.getElementById("demography-origins-wrapper");
  const wealthW = document.getElementById("demography-wealth-wrapper");

  if (mode === "histogram") {
    ageW?.classList.remove("hidden");
    origW?.classList.add("hidden");
    wealthW?.classList.add("hidden");
  } else if (mode === "origins") {
    ageW?.classList.add("hidden");
    origW?.classList.remove("hidden");
    wealthW?.classList.add("hidden");
  } else if (mode === "wealth") {
    ageW?.classList.add("hidden");
    origW?.classList.add("hidden");
    wealthW?.classList.remove("hidden");
  } else {
    ageW?.classList.remove("hidden");
    origW?.classList.remove("hidden");
    wealthW?.classList.remove("hidden");
  }

  const tabs = ["all", "histogram", "origins", "wealth"];
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

function renderDemographyYearFilters() {
  const container = document.getElementById("demography-year-filter-btns");
  if (!container) return;

  const labels = {
    1921: '1921 (1 016 osob – 155 stavení)',
    1910: '1910 (56 os.)',
    1900: '1900 (37 os.)',
    1890: '1890 (48 os.)',
    1880: '1880 (30 os.)',
    1869: '1869 (56 os.)',
    1857: '1857 (24 os.)',
    'all': 'Všechna sčítání (1 267 záznamů)'
  };

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
        <strong>💡 Historický vhled (Sčítání 1921 – kompletní obec: 155 stavení, 1 016 obyvatel):</strong><br>
        Průměrný věk <strong>32,1 let</strong> a medián <strong>28 let</strong> (podíl seniorů nad 60 let <strong>15,4 % – 156 osob</strong>) odráží demografickou stabilitu i dopady 1. světové války. Nejstarším doloženým pamětníkem byla 93letá výměnkářka <strong>Kateřina Hrubá (*1828)</strong> na čp. 20, nejmladší teprve 14denní <strong>Jitřenka Ptáčková (*28. 1. 1921)</strong> na rychtě čp. 7. Dětská kohorta (0–14 let) tvoří <strong>28,8 % (293 dětí)</strong>, produktivní věk (15–59 let) pak <strong>55,8 % (567 obyvatel)</strong>.
      `;
    } else if (data.year === 1869) {
      insightText = `
        <strong>💡 Historický vhled (Sčítání 1869 – 56 osob):</strong><br>
        Vysoká porodnost a mladá věková struktura: děti do 9 let tvořily více než čtvrtinu populace (<strong>26,8 %</strong>) a průměrný věk byl pouhých <strong>24,5 let</strong>. Seniorů nad 60 let bylo pouze 3,6 %, s výjimkou 76letého patriarchy <strong>Petra Dvořáka st. (*1793)</strong> na gruntě čp. 22.
      `;
    } else if (data.year === 1900) {
      insightText = `
        <strong>💡 Historický vhled (Sčítání 1900 – 37 osob na velkých gruntech):</strong><br>
        Mimořádně silná mládežnická kohorta 10–19 let (<strong>37,8 %</strong>) a medián pouhých <strong>19 let</strong> dokládají rozsáhlé zaměstnávání náctiletých čeledínů a děveček na rychtě čp. 7 (Arnošt Merta) a usedlostech čp. 10 a čp. 22. Výměnkářkou na čp. 10 byla tehdy 81letá <strong>Josefa Jílková (*1819)</strong>.
      `;
    } else {
      insightText = `
        <strong>💡 Historický trend (1857–1921):</strong><br>
        Sledujeme přechod od tradiční společnosti vysoké porodnosti v 60. a 80. letech 19. století (průměrný věk 23–25 let) k postupnému stárnutí obyvatelstva a prodlužování délky dožití v samostatném Československu (průměrný věk 32,3 let v r. 1921).
      `;
    }
    insightsContainer.innerHTML = insightText;
  }
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
