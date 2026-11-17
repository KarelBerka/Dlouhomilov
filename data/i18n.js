// ============================================================================
// MULTILINGUAL LOCALIZATION (CZ / EN / DE) – DLOUHOMILOV, MEDELSKÉ & BENKOV
// Kompletní jazyková podpora: Čeština (cs), Angličtina (en), Němčina (de)
// V německé verzi jsou použity autentické historické místopisné názvy
// (Lomigsdorf, Dreihofen / Medelské, Benke, Hohenstadt, Mährisch Schönberg)
// se závorkovým českým ekvivalentem pro snadnou orientaci v matrikách.
// ============================================================================

const i18nData = {
  // 1. PŘEKLADY UŽIVATELSKÉHO ROZHRANÍ (UI, NAVIGACE, FILTRY, MODÁLY, DEMOGRAFIE)
  ui: {
    cs: {
      htmlTitle: "Historická Wiki obce Dlouhomilov & Benkov – Genealogie, Sčítání lidu a Stabilní katastr",
      headerTitle: "Dlouhomilov & Benkov",
      headerSubtitle: "Historická Wiki, sčítací operáty, matriky N/O/Z a kronika rodů",
      navStory: "📖 Příběh obce",
      navMap: "🗺️ Mapa & Stavení",
      navInhabitants: "👥 Obyvatelé & Rodopis",
      navHub: "🧭 Badatelna, Mapy & Analýzy",
      navAddHouse: "Přidat stavení",
      mobStory: "📖 Příběh",
      mobMap: "🗺️ Mapa & Domy",
      mobInhabitants: "👥 Obyvatelé",
      mobDemography: "📊 Demografie",
      mobAtlas: "📜 Atlas map",
      mobGuide: "🧭 Průvodce",
      mobClusters: "🧬 Clustery ↗",
      storyPillarBadge: "1. Pilíř • Kronika údolí (1269–2006)",
      storyLocalitiesBadge: "Dlouhomilov • Medelské • Benkov",
      storyTabChapters: "Kapitoly příběhu (11)",
      storyTabFacts: "Zajímavosti z matrik (18)",
      storyTabComic: "Komiksová kronika (14)",
      storyTabAll: "Vše",
      tocTitle: "Výběr kapitoly příběhu (I.–XI.):",
      tocAllShown: "Zobrazeno všech 11 kapitol pod sebou",
      tocSingleShown: "Čtení po kapitolách (aktivní Kapitola",
      tocBtnSingle: "Přepnout na čtečku po 1 kapitole",
      tocBtnAll: "Rozbalit všech 11 kapitol pod sebou",
      tocMdLink: "📄 Dokument .md ↗",
      chapterWord: "Kapitola",
      chapterReaderBadge: "Čtečka kapitol",
      relatedInApp: "Související v aplikaci:",
      prevChapter: "Předchozí:",
      nextChapter: "Další kapitola:",
      showAll10Chapters: "📖 Zobrazit všech 11 kapitol",
      goToFacts: "✨ Přejít na Zajímavosti z matrik (18)",
      factsHeading: "Zajímavosti z matrik, gruntovních knih a sčítání lidu",
      factsSubheading: "Osmnáct mikrohistorických příběhů a badatelských objevů přímo z rukopisných pramenů a zemských desek (1356–2006)",
      factsMdBtn: "📄 Plný text v Markdownu ↗",
      comicBadge: "🎨 Grafický výstup z pramenů",
      comicMeta: "5 kapitol • 14 ilustrovaných obrazů • Mapa kolonizace & památkové objekty (ÚSKP)",
      comicHeading: "Kronika údolí v obrazech: Komiks o historii Dlouhomilova, Medelského a Benkova (1269–1949)",
      comicDesc: "Každý obraz vychází ze skutečných zápisů v gruntovních knihách, farních matrikách a sčítacích operátech. Kliknutím na ilustraci ji zvětšíte, tlačítky pod panelem přejdete přímo na dané stavení, rodopis nebo archivní sken.",
      comicPage: "Strana",
      comicAllPages: "Vše (I.–V.)",
      comicPrintBtn: "Tisk / PDF",
      mapBaseLabel: "Podklad:",
      mapBaseOsm: "🗺️ OpenStreetMap",
      mapBaseOrtho: "🛰️ Letecká (Ortofoto)",
      mapBaseTopo: "🏔️ Topografická",
      mapHistLabel: "📜 Historická mapa:",
      mapOpt1834: "📜 Stabilní katastr 1834 (Císařský otisk – zástavba)",
      mapOpt1764: "⚔️ I. vojenské mapování (1764–1783 Josefské)",
      mapOpt1838: "⚔️ II. vojenské mapování (1838 Františkovo)",
      mapOpt1874: "⚔️ III. vojenské mapování (1874 – 1:25 000)",
      mapOpt1937: "🇨🇿 Topografická mapa ČSR (1937 – 1:25 000)",
      mapOpt1952: "🗺️ Topografická mapa S-1952 (1952)",
      mapOpacityLabel: "Průhlednost:",
      mapPresetToday: "Dnes",
      mapPresetHistory: "Historie",
      mapSideBySide: "Vedle sebe",
      mapCalibration: "Kalibrace",
      mapDisplayLabel: "Zobrazení na mapě:",
      mapHighlightLocalities: "🟨 Zvýraznění lokalit (Dlouhomilov & Benkov – žlutý podkres)",
      mapHouseMarkers: "📍 Značky stavení (čp.)",
      mapAuthenticNote: "💡 Autentické archivní mapy bez rušivých překryvů (1716–1983)",
      houseListTitle: "Seznam stavení",
      feedbackBtn: "Zpětná vazba",
      filterAllHouses: "Všechny domy",
      filterHeritageOnly: "Pouze památky",
      houseSearchPlaceholder: "Hledat číslo popisné, rod, památku...",
      heritageStripTitle: "Památkově chráněné objekty v Dlouhomilově (VPZ 2350)",
      heritageStripSub: "Kliknutím zobrazíte kartu památky výše:",
      inhabitantsBadge: "Genealogie & Sčítání lidu (1857–1921) & Matriky N/O/Z",
      inhabitantsTitle: "Obyvatelé a rodopis obce Dlouhomilov",
      viewRecords: "Záznamy",
      viewUnified: "Sjednocené osoby",
      viewProfiles: "Biografické profily (11)",
      viewDemography: "Demografie obce",
      viewLinker: "Spojování osob",
      viewClusterApp: "Clustrovací aplikace ↗",
      catLabel: "Kategorie:",
      catAll: "Všichni",
      catGrunt: "Držitelé gruntů",
      catVymenek: "Výměnkáři",
      catCeled: "Čeleď",
      catRemeslo: "Řemeslníci",
      catPodruh: "Podruzi",
      catRodina: "Rodinní příslušníci",
      catVzdelanec: "Učitelé & Duchovní",
      surnameQuickLabel: "Rychlý výběr rodu:",
      resetFiltersBtn: "Resetovat všechny filtry",
      registrySearchPlaceholder: "Hledat jméno, povolání, vztah, číslo domu (např. držitelé gruntů, Alois, kovář)...",
      hubPillarBadge: "4. Sekce • Rozšířená badatelna & Kartografie (Zobrazení na vyžádání)",
      hubTitle: "🧭 Badatelna, Demografické analýzy & Atlas historických map",
      hubSubtitle: "Pro lepší přehlednost stránky se podrobné analytické a metodické moduly otevírají jednotlivě podle vašeho výběru:",
      hubBtnDemo: "Demografie & Bohatství",
      hubBtnAtlas: "Atlas map (18)",
      hubBtnGuide: "Průvodce & Slovníček",
      hubBtnCluster: "Clustrování osob ↗",
      hubBtnCollapse: "🔽 Sbalit",
      demoBadge: "Historická demografie & Sociální skladba obce",
      demoTitle: "Demografická a majetková analýza Dlouhomilova",
      demoSubtitle: "Komplexní statistický rozbor všech 3 449 dochovaných sčítacích záznamů (1857–1921) a 158 stavení v Dlouhomilově, Medelském a Benkově: věková pyramida, odkud přicházeli obyvatelé a majetková stratifikace podle chovu dobytka a čeledi.",
      demoTabAll: "Zobrazit vše",
      demoTabHistogram: "Věková pyramida",
      demoTabOrigins: "Původ & Dálka",
      demoTabWealth: "Bohatství & Dobytek",
      demoTopic1Title: "1. Jak se měnil histogram obyvatel podle věku v čase?",
      demoTopic1Sub: "Vyberte konkrétní rok sčítání lidu nebo prozkoumejte celkový souhrnný profil:",
      demoTopic2Title: "2. Odkud byli obyvatelé Dlouhomilova a kdo přišel z největší dálky?",
      demoTopic2Sub: "Analýza migračních okruhů, sňatkové mobility a dálkového přistěhovalectví podle vzdušné vzdálenosti (km).",
      demoTopic3Title: "3. Jak bohaté domácnosti byly? (Majetková stratifikace a chov zvířat)",
      demoTopic3Sub: "Rozdělení do 4 majetkových tříd podle tažného dobytka (koně), stavu skotu, čeledi a zaměstnání v šumperských textilkách."
    },
    en: {
      htmlTitle: "Historical Wiki of Dlouhomilov & Benkov (Lomigsdorf & Benke) – Genealogy, Census & Stable Cadastre",
      headerTitle: "Dlouhomilov & Benkov",
      headerSubtitle: "Historical Wiki, Census Returns (1857–1921), Parish Registers & Family Chronicles",
      navStory: "📖 Village Story",
      navMap: "🗺️ Map & Homesteads",
      navInhabitants: "👥 Inhabitants & Genealogy",
      navHub: "🧭 Research Hub & Analytics",
      navAddHouse: "Add House",
      mobStory: "📖 Story",
      mobMap: "🗺️ Map & Houses",
      mobInhabitants: "👥 People",
      mobDemography: "📊 Demography",
      mobAtlas: "📜 Map Atlas",
      mobGuide: "🧭 Guide",
      mobClusters: "🧬 Clusters ↗",
      storyPillarBadge: "Pillar 1 • Valley Chronicle (1269–2006)",
      storyLocalitiesBadge: "Dlouhomilov (Lomigsdorf) • Medelské (Dreihofen) • Benkov (Benke)",
      storyTabChapters: "Story Chapters (11)",
      storyTabFacts: "Parish Curiosities (18)",
      storyTabComic: "Illustrated Chronicle (14)",
      storyTabAll: "All",
      tocTitle: "Select Story Chapter (I–XI):",
      tocAllShown: "Showing all 11 chapters stacked",
      tocSingleShown: "Single-chapter reader (active Chapter",
      tocBtnSingle: "Switch to single-chapter reader",
      tocBtnAll: "Expand all 11 chapters stacked",
      tocMdLink: "📄 .md Document ↗",
      chapterWord: "Chapter",
      chapterReaderBadge: "Chapter Reader",
      relatedInApp: "Related in the Wiki:",
      prevChapter: "Previous:",
      nextChapter: "Next Chapter:",
      showAll10Chapters: "📖 Show all 11 chapters",
      goToFacts: "✨ Go to Parish Curiosities (18)",
      factsHeading: "Curiosities & Discoveries from Parish Registers, Land Books & Censuses",
      factsSubheading: "Eighteen micro-historical stories and archival discoveries directly from manuscript sources and land registers (1356–2006)",
      factsMdBtn: "📄 Full text in Markdown ↗",
      comicBadge: "🎨 Illustrated Archival Chronicle",
      comicMeta: "5 Chapters • 14 Illustrated Panels • Colonization Map & Heritage Monuments (ÚSKP)",
      comicHeading: "Valley Chronicle in Pictures: The Story of Dlouhomilov, Medelské & Benkov (1269–1949)",
      comicDesc: "Every panel is based on authentic entries in land books, parish registers, and census returns. Click any illustration to zoom in, or use the buttons below each panel to jump directly to the homestead, family profile, or archival scan.",
      comicPage: "Page",
      comicAllPages: "All (I–V)",
      comicPrintBtn: "Print / PDF",
      mapBaseLabel: "Base Map:",
      mapBaseOsm: "🗺️ OpenStreetMap",
      mapBaseOrtho: "🛰️ Aerial (Orthophoto)",
      mapBaseTopo: "🏔️ Topographic",
      mapHistLabel: "📜 Historical Map:",
      mapOpt1834: "📜 Stable Cadastre 1834 (Imperial Imprint – Lomigsdorf)",
      mapOpt1764: "⚔️ First Military Survey (1764–1783 Josephinian)",
      mapOpt1838: "⚔️ Second Military Survey (1838 Franciscan)",
      mapOpt1874: "⚔️ Third Military Survey (1874 – 1:25,000)",
      mapOpt1937: "🇨🇿 Topographic Map of Czechoslovakia (1937 – 1:25,000)",
      mapOpt1952: "🗺️ Topographic Map S-1952 (1952)",
      mapOpacityLabel: "Opacity:",
      mapPresetToday: "Today",
      mapPresetHistory: "History",
      mapSideBySide: "Side-by-Side",
      mapCalibration: "Calibrate",
      mapDisplayLabel: "Map Layers:",
      mapHighlightLocalities: "🟨 Highlight Localities (Dlouhomilov & Benkov – yellow tint)",
      mapHouseMarkers: "📍 House Numbers (No.)",
      mapAuthenticNote: "💡 Authentic archival maps without distracting overlays (1716–1983)",
      houseListTitle: "List of Homesteads",
      feedbackBtn: "Feedback",
      filterAllHouses: "All Houses",
      filterHeritageOnly: "Listed Monuments",
      houseSearchPlaceholder: "Search house number, family name, monument...",
      heritageStripTitle: "Protected Cultural Monuments in Dlouhomilov (Heritage Zone VPZ 2350)",
      heritageStripSub: "Click any monument to open its detailed card above:",
      inhabitantsBadge: "Genealogy & Census Returns (1857–1921) & Parish Registers (B/M/D)",
      inhabitantsTitle: "Inhabitants & Family Genealogy of Dlouhomilov",
      viewRecords: "Records",
      viewUnified: "Unified Persons",
      viewProfiles: "Biographical Profiles (11)",
      viewDemography: "Village Demography",
      viewLinker: "Person Linker",
      viewClusterApp: "Clustering Lab ↗",
      catLabel: "Category:",
      catAll: "All",
      catGrunt: "Farmstead Holders",
      catVymenek: "Retired Farmers",
      catCeled: "Farmhands & Maids",
      catRemeslo: "Artisans & Craftsmen",
      catPodruh: "Lodgers (Inwohner)",
      catRodina: "Family Members",
      catVzdelanec: "Teachers & Clergy",
      surnameQuickLabel: "Quick Family Filter:",
      resetFiltersBtn: "Reset all filters",
      registrySearchPlaceholder: "Search name, occupation, relation, house number (e.g. Dvořák, farmer, blacksmith)...",
      hubPillarBadge: "Section 4 • Extended Research Hub & Cartography (On-Demand View)",
      hubTitle: "🧭 Research Hub, Demographic Analytics & Historical Map Atlas",
      hubSubtitle: "To keep the page clean and readable, detailed analytical and methodological modules open individually upon selection:",
      hubBtnDemo: "Demography & Wealth",
      hubBtnAtlas: "Map Atlas (18)",
      hubBtnGuide: "Archival Guide & Glossary",
      hubBtnCluster: "Person Clustering ↗",
      hubBtnCollapse: "🔽 Collapse",
      demoBadge: "Historical Demography & Social Structure (1857–1921)",
      demoTitle: "Demographic & Household Wealth Analysis",
      demoSubtitle: "Comprehensive statistical analysis of all 3,449 preserved census records (1857–1921) and 158 homesteads across Dlouhomilov, Medelské, and Benkov: age pyramid, migration origins, and household wealth stratification based on livestock and farm servants.",
      demoTabAll: "Show All",
      demoTabHistogram: "Age Pyramid",
      demoTabOrigins: "Origins & Distance",
      demoTabWealth: "Wealth & Livestock",
      demoTopic1Title: "1. How did the age distribution of inhabitants change over time (1857–1921)?",
      demoTopic1Sub: "Select a specific census year or explore the combined historical profile:",
      demoTopic2Title: "2. Where did inhabitants come from & who came from farthest away?",
      demoTopic2Sub: "Analysis of migration rings, marriage mobility, and long-distance migration by straight-line distance (km).",
      demoTopic3Title: "3. How wealthy were the households? (Social Stratification & Livestock)",
      demoTopic3Sub: "Classification into 4 social tiers based on draft horses, cattle, farm servants, and employment in Mährisch Schönberg (Šumperk) textile mills."
    },
    de: {
      htmlTitle: "Historisches Wiki von Lomigsdorf & Benke (Dlouhomilov & Benkov) – Genealogie, Volkszählung & Stabiler Kataster",
      headerTitle: "Lomigsdorf & Benke (Dlouhomilov & Benkov)",
      headerSubtitle: "Historisches Wiki, Volkszählungsbögen (1857–1921), Kirchenbücher & Hofchronik",
      navStory: "📖 Ortsgeschichte",
      navMap: "🗺️ Karte & Häuser",
      navInhabitants: "👥 Einwohner & Familien",
      navHub: "🧭 Forschung & Analysen",
      navAddHouse: "Haus hinzufügen",
      mobStory: "📖 Chronik",
      mobMap: "🗺️ Karte & Höfe",
      mobInhabitants: "👥 Einwohner",
      mobDemography: "📊 Demografie",
      mobAtlas: "📜 Kartenatlas",
      mobGuide: "🧭 Leitfaden",
      mobClusters: "🧬 Cluster-Labor ↗",
      storyPillarBadge: "1. Säule • Chronik des Tals (1269–2006)",
      storyLocalitiesBadge: "Lomigsdorf (Dlouhomilov) • Dreihofen (Medelské) • Benke (Benkov)",
      storyTabChapters: "Kapitel der Chronik (11)",
      storyTabFacts: "Aus den Matriken (18)",
      storyTabComic: "Bilderchronik (14)",
      storyTabAll: "Alle",
      tocTitle: "Kapitelauswahl der Ortschronik (I.–XI.):",
      tocAllShown: "Alle 11 Kapitel untereinander angezeigt",
      tocSingleShown: "Einzelkapitel-Leseansicht (aktiv: Kapitel",
      tocBtnSingle: "Zur Einzelkapitel-Ansicht wechseln",
      tocBtnAll: "Alle 11 Kapitel untereinander aufklappen",
      tocMdLink: "📄 .md-Dokument ↗",
      chapterWord: "Kapitel",
      chapterReaderBadge: "Kapitel-Leser",
      relatedInApp: "Verknüpfungen im Wiki:",
      prevChapter: "Vorheriges:",
      nextChapter: "Nächstes Kapitel:",
      showAll10Chapters: "📖 Alle 11 Kapitel anzeigen",
      goToFacts: "✨ Zu den Besonderheiten aus den Matriken (18)",
      factsHeading: "Besonderheiten aus Kirchenbüchern, Grundbüchern und Volkszählungen",
      factsSubheading: "Achtzehn mikrohistorische Geschichten und Entdeckungen direkt aus den Handschriften und der Landtafel (1356–2006)",
      factsMdBtn: "📄 Volltext als Markdown ↗",
      comicBadge: "🎨 Illustrierte Quellenchronik",
      comicMeta: "5 Kapitel • 14 historische Bilder • Kolonisationskarte & Denkmäler (ÚSKP)",
      comicHeading: "Chronik des Tals in Bildern: Die Geschichte von Lomigsdorf, Dreihofen und Benke (1269–1949)",
      comicDesc: "Jedes Bild beruht auf authentischen Einträgen in Grundbüchern, Pfarrmatriken und Volkszählungsbögen. Durch Anklicken lässt sich die Illustration vergrößern; die Schaltflächen führen direkt zum jeweiligen Gehöft, Lebenslauf oder Archivscan.",
      comicPage: "Seite",
      comicAllPages: "Alle (I.–V.)",
      comicPrintBtn: "Drucken / PDF",
      mapBaseLabel: "Grundkarte:",
      mapBaseOsm: "🗺️ OpenStreetMap",
      mapBaseOrtho: "🛰️ Luftbild (Orthofoto)",
      mapBaseTopo: "🏔️ Topografisch",
      mapHistLabel: "📜 Historische Karte:",
      mapOpt1834: "📜 Stabiler Kataster 1834 (Kaiserlicher Pflichtabdruck – Lomigsdorf)",
      mapOpt1764: "⚔️ I. Josephinische Landesaufnahme (1764–1783)",
      mapOpt1838: "⚔️ II. Franziszeische Landesaufnahme (1838)",
      mapOpt1874: "⚔️ III. Franzisco-Josephinische Landesaufnahme (1874 – 1:25 000)",
      mapOpt1937: "🇨🇿 Topografische Karte der ČSR (1937 – 1:25 000)",
      mapOpt1952: "🗺️ Topografische Karte S-1952 (1952)",
      mapOpacityLabel: "Deckkraft:",
      mapPresetToday: "Heute",
      mapPresetHistory: "Historisch",
      mapSideBySide: "Nebeneinander",
      mapCalibration: "Kalibrierung",
      mapDisplayLabel: "Kartenebenen:",
      mapHighlightLocalities: "🟨 Ortslagen hervorheben (Lomigsdorf, Dreihofen & Benke)",
      mapHouseMarkers: "📍 Hausnummern (Konskr.-Nr.)",
      mapAuthenticNote: "💡 Authentische Archivkarten ohne störende Überlagerungen (1716–1983)",
      houseListTitle: "Häuser- & Hofverzeichnis",
      feedbackBtn: "Rückmeldung",
      filterAllHouses: "Alle Häuser",
      filterHeritageOnly: "Nur Kulturdenkmale",
      houseSearchPlaceholder: "Hausnummer, Hofname, Familie oder Denkmal suchen...",
      heritageStripTitle: "Denkmalgeschützte Bauwerke in Lomigsdorf / Dlouhomilov (Denkmalzone VPZ 2350)",
      heritageStripSub: "Klicken Sie auf ein Denkmal, um die Detailkarte oben zu öffnen:",
      inhabitantsBadge: "Genealogie & Volkszählung (1857–1921) & Pfarrmatriken (T/H/S)",
      inhabitantsTitle: "Einwohner und Familiengeschichte von Lomigsdorf, Dreihofen & Benke",
      viewRecords: "Einträge",
      viewUnified: "Zusammengeführte Personen",
      viewProfiles: "Biografische Profile (11)",
      viewDemography: "Ortsdemografie",
      viewLinker: "Personen-Verknüpfung",
      viewClusterApp: "Cluster-Labor ↗",
      catLabel: "Kategorie:",
      catAll: "Alle",
      catGrunt: "Hofbesitzer & Bauern",
      catVymenek: "Ausgedinger",
      catCeled: "Gesinde (Knechte & Mägde)",
      catRemeslo: "Handwerker",
      catPodruh: "Inwohner (Mieter)",
      catRodina: "Familienangehörige",
      catVzdelanec: "Lehrer & Geistliche",
      surnameQuickLabel: "Schnellwahl der Geschlechter:",
      resetFiltersBtn: "Alle Filter zurücksetzen",
      registrySearchPlaceholder: "Name, Beruf, Stellung, Hausnummer suchen (z. B. Dvořák, Bauer, Schmied)...",
      hubPillarBadge: "4. Bereich • Erweiterte Forschungsstelle & Kartografie (Ansicht auf Abruf)",
      hubTitle: "🧭 Forschungsstelle, Demografische Analysen & Historischer Kartenatlas",
      hubSubtitle: "Für eine bessere Übersichtlichkeit öffnen sich die analytischen und methodischen Module einzeln nach Ihrer Auswahl:",
      hubBtnDemo: "Demografie & Besitzstand",
      hubBtnAtlas: "Kartenatlas (18)",
      hubBtnGuide: "Archivleitfaden & Glossar",
      hubBtnCluster: "Personen-Clustering ↗",
      hubBtnCollapse: "🔽 Einklappen",
      demoBadge: "Historische Demografie & Sozialstruktur (1857–1921)",
      demoTitle: "Demografische und Besitzstandsanalyse (Lomigsdorf, Dreihofen & Benke)",
      demoSubtitle: "Statistische Gesamtauswertung aller 3.449 erhaltenen Volkszählungseinträge (1857–1921) und 158 Anwesen in Lomigsdorf (Dlouhomilov), Dreihofen (Medelské) und Benke (Benkov): Alterspyramide, Herkunftsorte und soziale Schichtung nach Viehbestand und Gesinde.",
      demoTabAll: "Alles anzeigen",
      demoTabHistogram: "Alterspyramide",
      demoTabOrigins: "Herkunft & Distanz",
      demoTabWealth: "Besitzstand & Vieh",
      demoTopic1Title: "1. Wie veränderte sich die Altersstruktur der Bevölkerung im Laufe der Zeit (1857–1921)?",
      demoTopic1Sub: "Wählen Sie ein Volkszählungsjahr oder betrachten Sie das Gesamtprofil:",
      demoTopic2Title: "2. Woher stammten die Einwohner und wer kam aus der größten Entfernung?",
      demoTopic2Sub: "Analyse der Migrationskreise, Heiratsmobilität und Fernwanderung nach Luftliniendistanz (km).",
      demoTopic3Title: "3. Wie wohlhabend waren die Haushalte? (Soziale Schichtung & Viehhaltung)",
      demoTopic3Sub: "Einteilung in 4 Besitzklassen nach Zugpferden, Rinderbestand, Gesinde und Arbeit in den Textilfabriken von Mährisch Schönberg (Šumperk)."
    }
  }
};

// 2. KOMPLETNÍ PŘEKLAD PŘÍBĚHU OBCE A ZAJÍMAVOSTÍ Z PRAMENŮ (EN & DE)
i18nData.story = {
  en: {
    title: "The Story of Dlouhomilov, Medelské and Benkov",
    subtitle: "From a medieval forest-field village beneath Brníčko Castle through a Baroque parish, hereditary farmsteads, and the hamlet of Medelské to coexistence with German-speaking Benkov and 20th-century transformations (1356–2006).",
    stats: [
      { label: "First Written Mention", value: "1356", detail: "ZDO I, No. 482 • Local Squires" },
      { label: "Historical Settlements", value: "3 Villages", detail: "Dlouhomilov • Medelské • Benkov" },
      { label: "Continuity at No. 22 & 29", value: "1679–1949", detail: "Dvořák family for over 270 years" },
      { label: "Processed Registers & Sheets", value: "928 + 3,449", detail: "Parish entries & census records" }
    ],
    chapters: {
      "kap-0": {
        badge: "Dlúhomil of Haná & Squires",
        title: "Founder Dlúhomil of Haná, Three Squire Courts, and the Rise of the Hereditary Rychta",
        imageCaption: "Illustration for Chapter I (1275–1602): Granting of the location charter at Olomouc Castle and departure of the colonizing expedition through the Litovel Gate into the foothills.",
        secondaryImageCaption: "Colonization Map (1266–1356): Forested foothills, marshes near Brníčko (Brně), and main settlement routes — from Dubicko via Kolšov, Sluhoňov, and Dlouhomilov to Olešná and Frankštát, via Rohle to Benkov, and from Úsov to Hrabišín (younger hamlets Strupšín and Nedvězí).",
        summary: "Where founder Dlúhomil came from and when he lived, what all 32 entries of the Moravian Land Registers (1356–1447) reveal about the three courts in the village, and how they evolved into the hereditary magistrate's estate.",
        paragraphs: [
          "The forest-field layout of the valley and linguistic-diplomatic screening demonstrate that Dlouhomilov (<em>Dluhomilow</em>) arose in the <strong>last third of the 13th century (ca. 1275–1300)</strong>. The Old Czech compound name of its founder <strong>Dlúhomil</strong> (<em>'long/enduringly beloved'</em>, b. ca. 1240–1265, † ca. 1295–1320) was an aristocratic status name of native gentry; its central Moravian (Haná) sound shift <em>Dlúhomilov → Dlóhomilov → Dlómilov</em> produced the early-modern German exonym <em>Lomigsdorf</em>, while alternating forms <em>dvuor Dlúhomiluov / za dvuor v Dluhomile</em> prove that his free squire court formed the settlement's core. An Olomouc Castle charter of <strong>1269</strong> (<em>CDM IV, p. 36 / RBM II, No. 672</em>, alongside the May 26, 1266 Mírov location charter, <em>RBM II, No. 517</em>) brings together the colonizers of these foothills from <strong>southern and central Haná</strong>: <strong>Všebor and Hrabiše I of Úsov</strong> of the Lords of Švábenice (cf. <em>Hrabišín</em>), cousins <strong>Vilém of Náměšť and Kojata of Drnovice</strong> (cf. <em>Kojišov = Kolšov</em>, lying west across Bukovická hora ridge, from which a transverse strip ran via Studénky and Sluhoňov into Dlouhomilov before Brníčko Castle was built above Lesnice at Loučka's mouth), and royal master huntsman <strong>Beneda of Dubicko with his son Vilém</strong> (builders of <em>Otaslavice</em> in Haná, patrons of <strong>Dubicko</strong> parish attested in 1297 to which Dlouhomilov belonged until 1720/1722, and ancestors of the builders of <em>Brníčko</em>) – precisely in whose Haná heartland (between Švábenice, Ivanovice na Hané, Soběbřichy, and Olomouc) the rare name <em>Dlúhomil</em> circulated. Locator privileges – free hides, tavern, butchery, smithy, and mill – later anchored at <button onclick=\"openHouseDetail('cp7')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">Hereditary Rychta (No. 7)</button> and <button onclick=\"openHouseDetail('cp3')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">Mill (No. 3)</button>.",
          "When the village enters the Olomouc <strong>Moravian Land Registers</strong> in <strong>1356</strong> (<em>ZDO I, Nos. 482 &amp; 484</em>), Dlúhomil's original estate had already split after two to three generations into <strong>three free squire courts</strong>. <strong>Ondřej of Dlouhomilov</strong> sold to <strong>Arnold of Dlouhomilov</strong> for <strong>60 marks groschen</strong> the first court (<em>curia</em>), six hides (<em>lanei</em>), and one tavern (<em>taberna</em>), while <strong>Pešek of Dlouhomilov</strong> sold for 60 marks to <strong>Bohuněk and Dětmar of Kolšov</strong> a second court, one mark of rent, and a <strong>watermill</strong>. In 1358, <strong>Bohuněk of Dlouhomilov</strong> settled 100 marks of dower on his wife Gertruda on a court with two tributary hides and Kolšov forest (<em>No. 493</em>).",
          "Complete extraction of all <strong>32 entries in ZDO I–X (1356–1447)</strong> traced both the <strong>third squire court with a quarter-hide</strong> – from widow <em>Čáslava of Dlouhomilov</em> (1365, <em>Nos. 859–860</em>) via <em>Vilém</em> (1368, <em>No. 1028</em>), <em>Ondřej &amp; Hyluš</em>, and <em>Ondřejek Chylec</em> to <em>Martin</em> and <em>Ctibor of Dlouhomilov</em> (1371–1378, <em>ZDO II, No. 23; III, No. 435</em>) – and the main allodial court: in 1368 <strong>Bohuněk of Kolšov</strong> sold to <strong>Vok [of Sovinec] and his brothers</strong> a court, five hides, <strong>two taverns</strong>, nine crofts (<em>curticulae</em>), 1.5 quarters, five gardens, mill, and forest (<em>ZDO I, No. 1124</em>), passing via brothers <strong>Doman, Svatobor, and Výšek of Závořice called Ganzar</strong> until in <strong>1398</strong> (<em>ZDO VI, No. 879</em>) <strong>Doman of Závořice</strong> sold the main allodial court to <strong>Proček of Bouzov (Wildenberg)</strong>. In <strong>1385</strong> (<em>ZDO IV, No. 543</em>), <strong>Mikuláš of Brníčko called Morava</strong> settled 24 sexagenae dower on his wife Markéta on nearby <strong>Benkov (<em>Benkow</em>) and Medelské (<em>Medilsk</em>)</strong> (cf. <button onclick=\"openHouseDetail('medelske_cp3')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">Homestead No. 3 in Medelské</button>).",
          "The fragmented squire holdings were consolidated in the mid-15th century by the rising <strong>Tunkl family of Brníčko and Drahanovice</strong> in two documented steps (<em>Sitta 2018</em>): in <strong>1436</strong> Jan Tunkl of Eichholz married Eliška of Lesnice, gaining half of Dlouhomilov (entered in the 1437 Land Tables, <em>ZDO X, Nos. 311 &amp; 348</em>, and bought in <strong>1446</strong> by Jan Sr. Tunkl, <em>No. 449</em>); in <strong>1447</strong> he acquired the second half with an allodial court and fishponds from the guarantors of late Proček of Wildenberg (<em>No. 566</em>), alongside Brníčko, <strong>Medelské</strong> (incl. the Medelské forest), and <strong>Benkov</strong> from the estate of Jan of Šumvald (<em>No. 560</em>). Lawsuits over the hereditary <em>dvuor Dluhomiluov</em> continued in 1463–1466 (<em>KP IV/2, Nos. 525, 543, 866</em>; in the 1466 partition all three villages fell to Jan Jr. Tunkl). The <strong>1490</strong> Tunkl intabulation (<em>ZDO XIII, No. 84</em>) already names emphyteutic reeve seats (<em>se všemi rychtami zákupními</em>), and two <strong>1492</strong> peasant flights (ploughman <strong>Jan Števík</strong>, <em>KP VI, No. 1775</em>, and beadle <strong>Duchek</strong> to a mill near Šilperk, <em>No. 1962</em>) reveal harsh labor pressure. In <strong>1510</strong> (the original parchment <em>MZA A 3 Kniha XVII, sn. 10/32</em> reads <em>'wes dluhomilow s kaplu ... trzy lany w olessnem, wes medelske, wes wenkow'</em>, correcting later printed regests linking those three hides to Hrabišín) and on <strong>June 24, 1513</strong> (<em>sn. 22/32</em>), the estate passed via Mikuláš Trčka of Lípa to <strong>Ladislav of Boskovice</strong>, descending to <strong>Jan of Boskovice († Aug 1, 1589)</strong>, his sister <strong>Kunhuta</strong>, and <strong>Ladislav Velen of Žerotín</strong>. Freed peasants (<em>dvořáci</em> / <em>Befreytte Bauern</em>) endured: the <strong>1585 Urbarial Register</strong> (<em>URB00015585</em>) lists all <strong>22 settlers</strong> in Dlouhomilov, <strong>8 holders</strong> on 5 entries in Medelské, and <strong>10 settlers</strong> in Benkov led by reeve <em>Mikuláš</em>, followed by land registers from <strong>1584</strong>/<strong>1617</strong> and the <strong>1602</strong> hereditary <em>rychta</em> record (<button onclick=\"openHouseDetail('cp7')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">House No. 7</button>, held in 1657/1677 by <em>Jíra Blahařek(?)</em> and <em>Ilia Zaoralný</em>) plus ancient holdings <button onclick=\"openHouseDetail('cp29')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">No. 29</button> and <button onclick=\"openHouseDetail('benkov_cp5')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">Benkov No. 5</button>."
        ],
        links: [
          "🧭 Illustrated Map of Colonization",
          "🍺 Hereditary Rychta (No. 7)",
          "⚙️ Mill beneath the Castle (No. 3)",
          "🗺️ 1834 Stable Cadastre"
        ]
      },
      "kap-1": {
        badge: "Landscape & Parish",
        title: "The Valley beneath Brníčko, Aretin's Map and the Moving Parish",
        imageCaption: "Illustration for Chapter II (1510–1793): Cartographer Pavel Aretin over the Zábřeh estate map and All Saints' Church in the valley.",
        summary: "How the village beneath Brníčko and Zábřeh estates appears on the oldest manuscript map of 1623 and why ancestors walked across Dubicko, Zábřeh, Lesnice, and Rohle for baptisms and weddings.",
        paragraphs: [
          "Under the Lords of Boskovice and later the Žerotíns, Dlouhomilov (<em>Lomigsdorf</em>) stabilized as a sprawling mountain forest-field village beneath Bukovická Mountain (526 m) and the ruins of Brníčko Castle. The post-war <strong>Lán Cadastre</strong> of the Zábřeh estate closed on <strong>October 13, 1677</strong> (<em>MZA Brno, D 1, sign. 141, fol. 76r–77v</em>) and compared against the 1656–1657 visitation recorded full occupancy with <strong>27 householders and zero abandoned farms</strong> (<code>0</code> <em>Ödungen</em>) cultivating <strong>830 <em>Metzen</em></strong> of arable land (<code>6</code> hides <code>3 1/4</code> eighths) – led by hereditary reeve <em>Ilia Zaoralný</em> (90 <em>Metzen</em>) and large estates of <em>Dvořák</em> (<em>Hanß</em> after <em>Pavel</em>), <em>Vlček, Vokšan, Jílek</em>, and <em>Vachutka</em> – alongside the millrace (<button onclick=\"openHouseDetail('cp3')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">House No. 3</button>). Subsequent <strong>Rectification Acts (1749–1756, MZA D 2)</strong> and <strong>Dominical Declarations (1750, MZA D 3)</strong> confirmed that no manorial court (<em>Meierhof</em>) stood in the valley, the courts of <strong>Medelské</strong> (<em>Dreihöfen</em>) survived inside Dlouhomilov field names (<em>bey Medelsker grundt</em>, <em>u Medla gruntes mihle</em>) until the 1770 house numbering, and local <em>Befreytte Bauern</em> commuted corvée into cash while spinning linen yarn for the Šumperk markets; in the 19th century, small-scale iron ore mining added to local livelihoods.",
          "An extraordinary cartographic source is <strong>Aretin's manuscript map of the Zábřeh estate from 1623</strong> (ZAO Olomouc, <em>Velkostatek Zábřeh, NAD 1549, inv. No. 831, map 1</em> – protected as Archival Cultural Monument <strong>AKP ČR No. 81</strong>). Measuring <strong>137 × 98 cm</strong> at ca. <strong>1 : 20,800</strong>, it was drawn by <strong>Pavel Aretin of Ehrenfeld</strong> during Karl I of Liechtenstein's confiscation of Ladislav Velen of Žerotín's estate; as the <strong>oldest surviving estate map in the Czech lands</strong>, it captures villages beneath Brníčko alongside Tunkl's large fishponds (Závořický 107 ha, Dubický 82.5 ha). Printed Moravian maps – <strong>Müller (1716)</strong> and <strong>Wieland (1726)</strong> – show twin <em>Lomigsdorf / Dlohomilow</em> and upland <em>Bentke</em> (Benkov), while the <strong>First Military Survey (1764–1768)</strong> draws the church, farmsteads, and path to <strong>Medelské</strong> (<em>Dreihofen</em>).",
          "Ecclesiastical records reveal a remarkable <strong>migration of the parish</strong>: a chapel stood in Dlouhomilov by <strong>1510</strong>, and the village was named in <strong>1585</strong>. However, the earliest surviving baptisms, marriages, and burials lie in neighboring parishes – first <strong>Dubicko</strong> (<em>Zá IV 1</em> from <strong>1617–1694</strong>, incl. weddings celebrated right <em>w Dlauhomilowie</em> in 1653 and Pavel Dvořák & son Hanß witnessing on Sept 27, 1654, and <em>Zá IV 2</em> with a dedicated <strong>1695–1722</strong> baptism section on pp. <code>948–1095</code>), occasionally <strong>Zábřeh</strong> (<em>Zá I 1, inv. No. 8332</em>, 1649–1692), <strong>Brníčko</strong> (<em>Zá VI 5</em> from 1653, where marriages of Brníčko brides such as Pavel Dvořák Jr.'s 1786 wedding were held) and <strong>Lesnice</strong> (inv. No. 8399, from 1676/1688), and already from <strong>1720–1785/1786</strong> the restored parish of <strong>Rohle</strong> (<em>Zá VIII 1, 6, 10, 14, 15</em>). After a Baroque church begun in June <strong>1707</strong> (for which <strong>64,800 bricks</strong> were fired according to account books), the present late Baroque <button onclick=\"openHouseDetail('cp1')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">Church of All Saints (No. 1)</button> was erected in <strong>1767–1770</strong> (extended with a presbytery in 1864). In <strong>1785/1786</strong> Josephinian reforms established an independent local chaplaincy at <button onclick=\"openHouseDetail('cp2')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">Rectory (No. 2)</button> (served by 26 pastors through 1986 and producing <strong>7 native priests</strong>) with registers <em>Zá II</em> for Dlouhomilov (incl. Medelské) and both Olešnás—whereas <strong>Benkov</strong> stayed with Rohle until <strong>1932</strong>—followed in <strong>1793</strong> by the <button onclick=\"openHouseDetail('cp12')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">School building (No. 12)</button>. At the turn of the century served here priest-writer <strong>Fr. František Saleský Kužela (Adam Chlumecký, 1891–1907)</strong>, founder of the St. Roch Society (1897) and Czech parish chronicle (1899), who received a congratulatory letter from <strong>Émile Zola</strong> right at the rectory."
        ],
        links: [
          "⛪ Church of All Saints (No. 1)",
          "🏛️ Baroque Rectory (No. 2)",
          "🗺️ First Military Survey (1764)"
        ]
      },
      "kap-2": {
        badge: "Three Settlements",
        title: "Three Worlds in One Valley: Dlouhomilov, Medelské and Benkov",
        imageCaption: "Illustration for Chapter III (1770–1949): Czech Dlouhomilov in the valley, the hamlet of Three Farms (Medelské), and highland Benkov with its chapel.",
        summary: "A Czech farming village in the valley, the northern hamlet of Three Farms (Medelské / Dreihofen) with its own house-number series, and the upland German village of Benkov (Benke) sharing the same valley cadastre.",
        paragraphs: [
          "Across the parish registers of <strong>Rohle</strong> (which kept Benkov until 1932) and <strong>Dlouhomilov</strong> (<em>Zá II 1</em> to <em>Zá II 10</em>, 1786–1949) as well as the census sheets, the fates of <strong>three distinct settlements</strong> intertwine, each with its own house numbering and its own landscape and linguistic character:",
          "<strong>1. Dlouhomilov (<em>Lomigsdorf</em>, Nos. 1–133):</strong> A prosperous Czech farming and craft village in the valley with an exceptionally preserved ensemble of North Moravian brick folk architecture (today Village Heritage Zone ÚSKP 2350). The house numbering introduced under Maria Theresa in <strong>1770–1771</strong> (Nos. 1–80) was never renumbered – newer cottages simply received numbers at the end of the sequence (1834: 80 houses, 1900: 106 houses, 1921: 118 houses).",
          "<strong>2. Hamlet of Medelské (<em>Dreihofen</em> / <em>Three Farms</em>, own series Nos. 1–10):</strong> A cluster of farmsteads and cottages on the northern edge of the cadastre toward Brníčko, home for generations to the <strong>Šafář</strong> (<em>Schafarz</em>), <strong>Minář</strong> (<button onclick=\"openHouseDetail('medelske_cp1')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">Medelské No. 1</button>), and <strong>Nejedlý</strong> (<button onclick=\"openHouseDetail('medelske_cp2')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">Medelské No. 2</button>) families. Because Medelské had its own numbering starting from No. 1, only the 1921 census solved the mystery of 1938–1948 parish entries where 'No. 2' for the Nejedlý family meant not the Baroque rectory, but Medelské No. 2!",
          "<strong>3. Benkov (<em>Benke</em> / <em>Bentkow</em>, own series Nos. 1–49):</strong> An upland village on the plateau southeast above Dlouhomilov around the <button onclick=\"openHouseDetail('benkov_kaple')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">Chapel of St. Anthony of Padua</button>. On <strong>Chytil's Nationality Map of Moravia (1906)</strong>, the linguistic border ran between the valley and the hill: Dlouhomilov and Medelské are marked in red as Czech, while Benkov is marked in green as German (families <em>Kauer, Heger, Rössner, Blaschke, Bischof, Weiser, Schmid, Körner, Mertlík</em>, alongside Czech families <em>Crhák, Halámek, and Krobot</em>)."
        ],
        links: [
          "🏡 Medelské No. 1 (Minář family)",
          "🏡 Medelské No. 2 (Nejedlý family)",
          "⛪ Chapel in Benkov",
          "🗺️ Nationality Map of Moravia (1906)"
        ]
      },
      "kap-3": {
        badge: "Heraldry & Symbols",
        title: "Municipal Coat of Arms: Spades, Golden Coulter and Two Apple Blossoms",
        imageCaption: "Illustration for Chapter IV (1749–2004): The village seal and coat of arms with crossed spades, golden coulter, and apple blossoms in a spring orchard.",
        summary: "How old peasant village seals and the union of Dlouhomilov with Benkov were reflected in the municipal coat of arms (REKOS No. 37 / 2004).",
        paragraphs: [
          "The historical bond between Dlouhomilov and Benkov received a fitting heraldic expression on <strong>June 8, 2004</strong> (Decision No. 37 of the Speaker of the Chamber of Deputies) in the official municipal coat of arms and flag:",
          "<em>'In a shield party per pale Argent and Gules, two upright crossed spades between two five-petalled apple blossoms with golden centers, all counterchanged, surmounted by a golden coulter turned to the sinister.'</em>",
          "<strong>The two crossed spades and golden plow coulter</strong> refer to the historical village seal of agricultural Dlouhomilov and centuries of toil by farming and cottager families. <strong>The two five-petalled apple blossoms in counterchanged tinctures</strong> commemorate both the famous orchards surrounding the farmsteads and the fraternal union of the two historical municipalities – <strong>Dlouhomilov and Benkov</strong>."
        ],
        links: [
          "🛡️ View Coat of Arms (REKOS)"
        ]
      },
      "kap-4": {
        badge: "Village Governance",
        title: "Hereditary Reeve's Estate No. 7: Administrative Heart of the Village",
        imageCaption: "Illustration for Chapter V (1804–1921): The hereditary reeve with the municipal chest, teacher Eliška Ptáčková, and eighteen-day-old Jitřenka before Rychta No. 7.",
        summary: "From the Merta family of hereditary reeves (Erbrichter) through the Krobots and Pavlíks to three households, a needlework teacher, and 18-day-old Jitřenka in February 1921.",
        paragraphs: [
          "The grandest secular building in the village since the 18th century was the <button onclick=\"openHouseDetail('cp7')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">former Hereditary Reeve's Estate (Erbgericht, No. 7)</button> on the eastern side of the village green – a massive two-story manor house with a Baroque core and four-wing courtyard (Cultural Monument ÚSKP 51795/9-103). The reeve guarded the village chest and seal, supervised corvée labor obligations, and settled neighborly disputes.",
          "Census returns from <strong>1857–1921</strong> show Estate No. 7 as a bustling large farmstead housing up to <strong>23 people</strong> under one roof (in 1869). In the mid-19th century, the hereditary reeve family <strong>Merta</strong> (<em>Franz Merta</em>, *1804) farmed here, followed by the <strong>Krobot</strong> and <strong>Cink</strong> families, and around 1900 by farmer <strong>František Pavlík</strong> (*1855).",
          "In the census of <strong>February 15, 1921</strong>, No. 7 was home to three separate households (14 residents): in the main farmstead lived farmer <strong>František Hvížď</strong> (*1879 from Třeština) with his wife Anna (*1886), five children, and farmhands. The second apartment housed widow <strong>Mathilda Ptáčková</strong> (*1863 from Rovensko) with her daughter <strong>Eliška Ptáčková</strong> (*1889, needlework teacher at the Dlouhomilov elementary school), married daughter Marie Kvapilová (*1894), and 18-day-old granddaughter <strong>Jitřenka Kvapilová</strong> (*Jan 28, 1921 in Olomouc). The third household consisted of retired farmers Jakub and Anna Navrátil."
        ],
        links: [
          "🏛️ Hereditary Reeve's Estate (No. 7)",
          "📜 Stable Cadastre 1834"
        ]
      },
      "kap-5": {
        badge: "Dvořák Family • No. 29",
        title: "Farmstead No. 29 (Dvořák Estate): From 1679 via a Prague Lawyer to the Bludov Fire",
        imageCaption: "Illustration for Chapter VI (1679–1947): A farmer with the land book, Prague lawyer JUDr. Jan Dvořák, and Fr. Alois Dvořák before Farmstead No. 29.",
        summary: "The oldest land-book entries from 1679, Prague lawyer JUDr. Jan Dvořák (*1826), Zábřeh dean Fr. Alois Dvořák, and the heroic death of wheelwright Antonín Motyka.",
        paragraphs: [
          "Among the six listed heritage farmsteads in Dlouhomilov, <button onclick=\"openHouseDetail('cp29')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">Homestead No. 29 (Dvořák Estate)</button> stands out for the breadth of its preserved sources. Entries in the <strong>Zábřeh Manor Land Book (Inv. No. 164, fol. 191)</strong> trace the <strong>Dvořák</strong> (<em>Dworzak</em>) family here back to <strong>1679</strong> (Jan Dvořák, from 1720 Pavel Dvořák).",
          "In the oldest census sheet of <strong>1857</strong>, farmer <button onclick=\"openPersonModal('p_johann_dvorak_1795')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">Johann Dvořák (*1795)</button> headed No. 29. His elder son <button onclick=\"openPersonModal('p_dr_jan_dvorak_1826')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">Jan Dvořák (*1826)</button> studied law at Charles-Ferdinand University in Prague and is recorded in the 1857 census as <em>'Jurist in Prag II'</em>, later earning his doctorate in law (listed in 1869 as <em>'Doktor'</em>). The farm passed to younger brother <button onclick=\"openPersonModal('p_alois_dvorak_1830')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">Alois Dvořák (*1830)</button>, while a related branch produced Zábřeh parish priest <strong>Fr. Alois Dvořák</strong>, who on July 15, 1907 personally officiated the wedding of the new farmer <button onclick=\"openPersonModal('p_josef_dvorak_1877')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">Josef Dvořák (*1879)</button> to 19-year-old <strong>Amálie Motyková</strong> (*1888 from Bludov).",
          "Bride Amálie Motyková brought a dramatic family memory to No. 29: her father <strong>Antonín Motyka</strong>, wheelwright at Bludov No. 113, died a hero's death when, during a great fire at Bludov Chateau, he ran back into the burning stables to save the manor cattle. His widow Františka Motyková (*1844 in Chromeč) spent her retirement at No. 29. Josef and Amálie Dvořák raised son Josef (*1913) and daughter <strong>Marie Dvořáková (*June 15, 1920)</strong>, who married pharmacist <strong>PhMr. Jaroslav Berka</strong>, born on the exact same day and year (June 15, 1920)."
        ],
        links: [
          "🏡 Farmstead No. 29 (Dvořák Estate)",
          "👤 Johann Dvořák (*1795)",
          "👤 Dr. Jan Dvořák (*1826)",
          "👤 Alois Dvořák (*1830)",
          "👤 Josef Dvořák (*1879)"
        ]
      },
      "kap-6": {
        badge: "Dvořák & Kouřil Families • No. 22 & 24",
        title: "Farmsteads No. 22 and No. 24: 163 Years at One Number and the Double Wedding of 1878",
        imageCaption: "Illustration for Chapter VII (1786–1949): The double wedding of the Dvořák brothers and Kouřil sisters before the arcade of Farmstead No. 24 on July 29, 1878.",
        summary: "How two Dvořák brothers married two Kouřil sisters from No. 24 on the same day, just thirteen days before their father's death.",
        paragraphs: [
          "Historic <button onclick=\"openHouseDetail('cp22')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">Farmstead No. 22 (Dvořák Estate)</button> provides the strongest proof of continuous house numbering in Dlouhomilov: already in <strong>1786</strong>, 21-year-old farmer's son <strong>Pavel Dvořák (*1763) 'from Dlouhomilov No. 22'</strong> married Marina Weinlich in Brníčko. Their son <strong>Petr Dvořák (*1793)</strong> died at No. 22 as a retired farmer on December 9, 1878 at the age of 84.",
          "On <strong>July 29, 1878</strong>, All Saints Church witnessed a famous <strong>double wedding</strong>: farmer <strong>František Kouřil (*1819)</strong> of neighboring heritage farmstead <button onclick=\"openHouseDetail('cp24')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">No. 24</button>, gravely ill with tuberculosis, gave away both of his daughters on the same day to two Dvořák brothers – 20-year-old <strong>Anna Kouřilová (*1857)</strong> married <button onclick=\"openPersonModal('p_josef_dvorak_1857')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">Josef Dvořák (*1857)</button> and her sister <strong>Ludmila Kouřilová</strong> married the groom's brother <strong>Karel Dvořák</strong>. Just 13 days after the wedding (August 11, 1878), the brides' father František Kouřil passed away.",
          "Newlyweds Josef and Anna Dvořák farmed No. 22 for over sixty years: Josef died on July 10, 1940 aged <strong>83</strong>, and Anna née Kouřilová died at No. 22 on May 29, 1949 aged <strong>91 years and 5 months</strong>. They were succeeded by their son <button onclick=\"openPersonModal('p_karel_dvorak_1880')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">Karel Dvořák (*1880, †1942)</button>."
        ],
        links: [
          "🏡 Farmstead No. 22 (Dvořák family)",
          "🏡 Farmstead No. 24 (Kouřil family)",
          "👤 Josef Dvořák (*1857, †1940)",
          "👤 Karel Dvořák (*1880, †1942)"
        ]
      },
      "kap-7": {
        badge: "Jílek & Šafář Families • No. 10 & 6",
        title: "Farmsteads No. 10 and No. 6: The Jílek Farmers and the Arrival of the Šafář Family from Medelské",
        imageCaption: "Illustration for Chapter VIII (1815–1921): Conscript Vincenc Jílek's farewell in 1869, the arrival of the Šafář family at No. 10, and widow Marie Jílková farming at No. 6.",
        summary: "Half a century of the Jílek (Gilek) family, son Vincenc's conscription into the army in 1869, and the arrival of the Šafář family from Medelské No. 1.",
        paragraphs: [
          "At farmstead <button onclick=\"openHouseDetail('cp10')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">No. 10 (Jílek & Šafář Estate)</button> in the central part of the village, full-hide farmer <button onclick=\"openPersonModal('p_josef_jilek_1815')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">Josef Jílek (*1815, <em>Gilek</em>)</button> and his wife Anna (*1814) farmed from the first half of the 19th century. In 1869 their son <button onclick=\"openPersonModal('p_karel_jilek_1845')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">Karel Jílek (*1845)</button> took over the farm, while his 19-year-old brother Vincenc (*1850) has the laconic note <em>'Beim Militär'</em> (in the army).",
          "Around 1900, the ancient <strong>Šafář (<em>Schafarz</em>)</strong> family from the hamlet of Medelské No. 1 moved to No. 10. In 1910 and 1921, farmer <button onclick=\"openPersonModal('p_frantisek_safar_1874')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">František Šafář (*1874)</button> farmed here with his wife Aloisie (*1881 from Klopina), four children, and retired farmer <button onclick=\"openPersonModal('p_jan_safar_1859')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">Jan Šafář (*1859 in Medelské)</button>.",
          "At neighboring farmstead <button onclick=\"openHouseDetail('cp6')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">No. 6</button>, 71-year-old widow <strong>Marie Jílková (*1849 in Bratrušov)</strong> firmly held the reins of the estate in 1921, assisted by the five-member family of field helper Jan Šindler (*1863 from Horní Olešná) and three unmarried farmhands."
        ],
        links: [
          "🏡 Farmstead No. 10 (Jílek & Šafář)",
          "🏡 Farmstead No. 6 (Jílek family)",
          "👤 František Šafář (*1874)"
        ]
      },
      "kap-8": {
        badge: "Crafts & Industry",
        title: "Cottagers, Blacksmiths of No. 110 and Weavers at Oberleithner's Mills",
        imageCaption: "Illustration for Chapter IX (1860–1921): František Berka's smithy at No. 110 and weavers and bleachers walking at dawn to Eduard Oberleithner's mills in Šumperk.",
        summary: "František Berka's village smithy at No. 110, cottage No. 46, and the daily commute of bleachery workers and weavers to Eduard Oberleithner's factories in Šumperk.",
        paragraphs: [
          "From the second half of the 19th century, smaller cottager homes grew on the slopes and edges of the village, whose residents combined smallholding with crafts or employment in the textile mills of Šumperk (<em>Mährisch Schönberg</em>).",
          "At house <button onclick=\"openHouseDetail('cp110')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">No. 110</button>, village blacksmith <strong>František Berka (*1866 from Leština)</strong> worked in 1910 with his wife Marie (*1864 from Hrabová) and son, blacksmith's assistant <strong>Jan Berka (*1894)</strong>; in 1921, 87-year-old retiree <strong>Terezie Podhorná (*1834)</strong> and weaver Anna Podhorná (*1877) lived here. In cottage <button onclick=\"openHouseDetail('cp46')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">No. 46</button>, cottager <button onclick=\"openPersonModal('p_alois_dvorak_1840')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">Alois Dvořák (*1840)</button> lived with his son, bricklayer <button onclick=\"openPersonModal('p_jan_dvorak_1873')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">Jan Dvořák (*1873)</button>.",
          "The 1921 census sheets reveal that the largest industrial employer of local cottagers was the renowned firm <strong>'Eduard Oberleithner & Sons, Weaving Mill and Bleachery in Šumperk'</strong>. Commuting there daily were bleachery worker <button onclick=\"openPersonModal('p_jan_minar_1861')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">Jan Minář (*1861)</button>, yarn bleacher Josef Minář (*1886), and weaver Pavlína Minářová (*1894) from <button onclick=\"openHouseDetail('medelske_cp1')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">Medelské No. 1</button>, as well as their neighbors Josef and Marie Nejedlý from <button onclick=\"openHouseDetail('medelske_cp2')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">Medelské No. 2</button>."
        ],
        links: [
          "🔨 Smithy No. 110 (Berka & Podhorný)",
          "🏡 Cottage No. 46",
          "👤 Jan Minář (*1861, Medelské No. 1)"
        ]
      },
      "kap-9": {
        badge: "1921 Census",
        title: "February 1921: Mirror of the Village on the Threshold of Czechoslovakia",
        imageCaption: "Illustration for Chapter X (Feb 15, 1921): The census commissioner before Langr's inn with Dean Fr. Kožušníček, a ČSD railwayman, and a war widow.",
        summary: "Handwritten signatures on census sheets, Dean Fr. František Kožušníček at the rectory, railwaymen, apprentices, and the scars of World War I.",
        paragraphs: [
          "The first Czechoslovak census at midnight between <strong>February 15 and 16, 1921</strong> lets us peer directly into each household. At the Baroque rectory <button onclick=\"openHouseDetail('cp2')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">No. 2</button> served Dean <strong>Fr. František Kožušníček (*1860 from Tovačov)</strong>, while <button onclick=\"openHouseDetail('cp4')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">No. 4</button> was home to locksmith <strong>Josef Vénos (*1877)</strong> working at the Czechoslovak State Railways depot in Šumperk and lodger <strong>Julie Janků (*1879)</strong> serving at the post office in Brníčko.",
          "From farmstead <button onclick=\"openHouseDetail('cp5')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">No. 5</button> (home to the Koš and Lukas families), 10-year-old <strong>Josef Koš (*1911)</strong> commuted to the secondary school (Realschule) in Šumperk, while his brother František (*1904) apprenticed as a locksmith in Dolní Olešná.",
          "At <button onclick=\"openHouseDetail('cp8')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">No. 8</button>, the scars of World War I were still visible: alongside widower Josef Hošek (*1856) and his mute daughter Anna (*1900) lived war widow <strong>Amálie Šafářová (*1885)</strong> with three young daughters and unmarried farmer and <strong>war invalid František Drlík (*1876)</strong>."
        ],
        links: [
          "🏛️ Rectory No. 2 (Dean Fr. Kožušníček)",
          "🏡 Homestead No. 4 (Vénos family)",
          "🏡 Farmstead No. 5 (Koš & Lukas)",
          "🏡 Homestead No. 8 (Hošek & Šafář)"
        ]
      },
      "kap-10": {
        badge: "20th–21st Century",
        title: "Coexistence on the Border, Post-War Transformation & 20th-Century Fates (1938–2006)",
        imageCaption: "Illustration for Chapter XI (1938–1960): Post-war expulsion of original German residents and the uncertain arrival of new settlers in Benkov in 1946.",
        summary: "Sudetenland annexation and loss of Sokol in 1938, liberation on May 7, 1945, Benkov resettlement, resistance at Rectory No. 2 in the 1950s, ČJA dialect point 647 & 650th anniversary.",
        paragraphs: [
          "In autumn <strong>1938</strong>, the Munich Agreement incorporated the entire valley into the Reichsgau <em>Sudetenland</em> (Landkreis Hohenstadt under Landrat Gerhard Hotop), as shown on the <button onclick=\"openMapCompareModal('sudety1940')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">1940 administrative map of the Zábřeh and Šumperk districts</button>. Dissertation research confirmed that <strong>Sokol Dlouhomilov</strong> (founded 1907, Sokol Hall 1925) was among the <strong>42 Sokol branches of Župa Severomoravská</strong> lost in 1938 (<em>Uhlíř 2006</em>). Liberation reached neighboring Strupšín and Brníčko on <strong>May 7, 1945</strong> (<em>Stejskal 2010</em>).",
          "After <strong>1945</strong>, neighboring German-speaking <strong>Benkov (Benke)</strong> underwent profound transformation during the 1946 expulsion and arrival of settlers from inland Bohemia and Moravia (<em>Zbranek, Mičulka, Chrastina, Sitař, Rýznar, and Krejčí</em> families in <em>Zá II 10</em>), alongside Zábřeh retribution courts (<em>Lukáč 2017</em>) and the 1952–1953 collectivization crisis (<em>Mrňka 2013</em>). On <strong>Sept 11, 1946</strong>, longtime Dlouhomilov priest <strong>Fr. František Reichel (1934–1964)</strong> took interim charge of Rohle and later defied Communist church secretaries—securing one of only two public Corpus Christi processions in the entire Šumperk district in <strong>1959</strong> (revived <strong>June 16, 1968</strong>; followed in 1979–1980 by former PTP priest <strong>Mons. Antonín Pospíšil</strong>). United with Benkov in <strong>1960</strong>, recorded as point <strong>No. 647 Dlouhomilov</strong> of the <em>Czech Linguistic Atlas</em>, the village marked its 650th anniversary in <strong>2006</strong>."
        ],
        links: [
          "🏛️ Rectory No. 2 (Fr. Reichel 1934–1964)",
          "⛪ Church of All Saints (No. 1)",
          "🗺️ Map of Zábřeh & Šumperk Districts (1940)",
          "🗺️ Topographic Map of Czechoslovakia (1937)"
        ]
      }
    },
    funFacts: {
      "fact-1": {
        tag: "163 Years in One House",
        title: "163 Years of the Dvořák Family at the Same House Number (No. 22)",
        text: "When 21-year-old Pavel Dvořák (*1763) married in Brníčko in 1786, the priest recorded his origin as 'from Dlouhomilov No. 22'. 163 years later, on May 29, 1949, retired farmer's widow Anna Dvořáková née Kouřilová died in that very same house No. 22. Across more than five generations, neither the family surname nor the number on the gable ever changed.",
        actionLabel: "Open Farmstead No. 22"
      },
      "fact-2": {
        tag: "Last-Minute Wedding",
        title: "Double Wedding Thirteen Days Before the Father's Death (July 29, 1878)",
        text: "On July 29, 1878, two brothers and two sisters stood simultaneously before the altar of All Saints Church: Josef and Karel Dvořák married Anna and Ludmila Kouřilová from Farmstead No. 24 in a single ceremony. The brides' father, 59-year-old farmer František Kouřil, was dying of tuberculosis and passed away just 13 days later (August 11, 1878).",
        actionLabel: "Open Farmstead No. 24"
      },
      "fact-3": {
        tag: "Incredible Coincidence",
        title: "Spouses Born on the Exact Same Day and Year (June 15, 1920)",
        text: "At Farmstead No. 29, daughter Marie Dvořáková was born to farmer Josef Dvořák and Amálie née Motyková on June 15, 1920. She married pharmacist PhMr. Jaroslav Berka, who was born on the exact same day and year – June 15, 1920!",
        actionLabel: "Open Farmstead No. 29"
      },
      "fact-4": {
        tag: "Archival Mystery",
        title: "Which 'No. 2'? The Mystery of the Rectory and Hamlet of Medelské",
        text: "In the 1938–1948 register, marriages and deaths of the Nejedlý family (including Bohumil Nejedlý's wedding on Oct 16, 1948) list 'No. 2'. Yet in Dlouhomilov, No. 2 is the Baroque rectory! The 1921 census solved the puzzle: it was not the rectory, but the hamlet of Medelské No. 2, which had its own house-number series.",
        actionLabel: "Open Medelské No. 2"
      },
      "fact-5": {
        tag: "Social Mobility",
        title: "A Farmer's Son from No. 29 Becomes a Lawyer in Prague (1857)",
        text: "In the 1857 census sheet for Farmstead No. 29, beside the farmer's son Jan Dvořák (*1826), we find an extraordinary entry for a mid-19th-century village: 'Jurist in Prag II' (lawyer in Prague). Jan graduated in law from Charles-Ferdinand University in Prague and in the 1869 census is recorded with the title Doctor (JUDr.).",
        actionLabel: "Profile of Dr. Jan Dvořák (*1826)"
      },
      "fact-6": {
        tag: "Family Memory",
        title: "Heroic Death in the Flames of Bludov Chateau",
        text: "Retired widow Františka Motyková (*1844) at No. 29 lost her husband under dramatic circumstances: Antonín Motyka, wheelwright at Bludov No. 113, ran into the burning stables during a great fire at Bludov Chateau to rescue the manor cattle and perished in the flames.",
        actionLabel: "Open Farmstead No. 29"
      },
      "fact-7": {
        tag: "Longevity in the Valley",
        title: "91 Years of Anna Dvořáková and 87 Years of Terezie Podhorná",
        text: "Despite hard field labor, many locals reached remarkable ages: retired farmer Petr Dvořák died in 1878 aged 84, Josef Dvořák (*1857) aged 83, his wife Anna née Kouřilová (*1857, †1949) aged 91 years and 5 months, and Terezie Podhorná (*1834) at No. 110 signed the 1921 census sheet at age 87.",
        actionLabel: "Profile of Josef Dvořák (*1857)"
      },
      "fact-8": {
        tag: "Youngest Resident in 1921",
        title: "18-Day-Old Jitřenka and the Needlework Teacher at Estate No. 7",
        text: "On census day, February 15, 1921, the youngest person in the village was 18-day-old Jitřenka Kvapilová (*Jan 28, 1921), living at Estate No. 7 in the all-female household of grandmother Mathilda Ptáčková and aunt Eliška Ptáčková, industrial needlework teacher.",
        actionLabel: "Open Hereditary Estate No. 7"
      },
      "fact-9": {
        tag: "Faithful Service",
        title: "Farmhand Jan Kamler (*1861, †1940) – A Lifetime on One Estate",
        text: "Unmarried farmhand Jan Kamler (*Feb 20, 1861 in Rovensko) served at Farmstead No. 29 with the Dvořák family in 1921 and remained there until his death in 1940 (aged 79). His death entry in register Zá II 10 helped decipher his surname in the 1921 census sheet a century later.",
        actionLabel: "Open Farmstead No. 29"
      },
      "fact-10": {
        tag: "Industrial Šumperk",
        title: "Yarn Bleachers and Weavers at Eduard Oberleithner & Sons",
        text: "The 1921 census shows that the hamlet of Medelské and cottagers in Dlouhomilov were closely tied to the textile empire 'Eduard Oberleithner & Sons in Šumperk' – bleachery workers and weavers from the Minář, Nejedlý, and Podhorný families commuted there daily on foot or by train from Brníčko.",
        actionLabel: "Open Medelské No. 1"
      },
      "fact-11": {
        tag: "Origin of Place Names",
        title: "What Do the Names Dlouhomilov, Benkov, Medelské, Brníčko and Šebená Mean?",
        text: "All settlements in the valley have medieval Slavic origins (13th–14th c.): Dlouhomilov (1356 Dluhomilow) means 'Dlúhomil's Court' from the Old Czech personal name Dlúhomil; German Lomigsdorf arose by phonetic adaptation. Benkov (1385, German Benke) means 'Benek's estate' (from Benedict/Beneš). Medelské (1385 Medilsk) derives from Old Czech medlý ('poor, stony soil') or personal name Medel, while German Dreihofen ('Three Farms') described its three original farmsteads. Neighboring Brníčko (1350 Brnieczko, German Brünles) comes from Old Czech brn ('muddy place'), Olešná (Ullischen) from alder trees, and Šebená Hill from 'Šibenná hora' (Gallows Hill), site of the medieval manorial gallows.",
        actionLabel: "View Oldest Map (1716)"
      },
      "fact-12": {
        tag: "Moravian Land Registers 1356–1447",
        title: "60 Marks of Groschen for a Court, Six Hides and a Tavern: What Does the 1356 Record Literally Say?",
        text: "The oldest surviving record of Dlouhomilov in the Olomouc Land Registers (ZDO I, No. 482, 1356) reads verbatim: 'Andreas de Dluhomilow vendidit Arnoldo de Dluhomilow pro LX marcis grossorum vnam Curiam VI laneos vnam Tabernam hereditarie...' – the hereditary sale of a free court, six hides, and a tavern for 60 marks of groschen. Two entries further (No. 484), Pešek of Dlouhomilov sold a second court, one mark of rent, and a watermill (molendinum) for 60 marks; in 1368 Bohuněk of Kohusov transferred two taverns, nine crofts (curticulae), five gardens, a mill, and forest (No. 1124). In 1385 neighboring Benkov (Benkow) and Medelské (Medilsk) first appear together as a 24-sexagenae dower for Markéta, wife of Mikuláš of Brníčko called Morava (ZDO IV, No. 543). Village tavern and butchery rights show over five centuries of continuity: from medieval tabernae (1356–1368) and the 1602 hereditary rychta to the inn and smithy at House No. 7 in the 19th–20th centuries.",
        actionLabel: "Open Hereditary Rychta No. 7"
      },
      "fact-13": {
        tag: "1585 Urbar & Land Books 1617–1946",
        title: "The 1585 Linguistic Border and Seven Generations of the Schön Family at Benkov No. 5",
        text: "Comparison of the 1585 Zábřeh Estate Urbar (URB00015585) reveals a sharp pre-Thirty Years' War linguistic divide: in Dlouhomilov (22 holders, pp. 82–84; incl. Vokšan, Vlček, Vachutka, Sládek, Pospíšil) and Medelské (8 holders across 5 entries with co-holdings, pp. 80–81; incl. Kouřil, Horníček, Šumerda) 28 of 30 names were Czech, while neighboring Benkov (Venkov, p. 47, 10 holders led by reeve Mikuláš) already combined German and Czech names (Knaur, Khaur/Kauer, Šmid, Hayndl). Land books (Dlouhomilov from 1584, inv. No. 164; Benkov 1617–1879), registers of Dubicko (Zá IV 1 from 1617) and Zábřeh (Zá I 1: 1651 Pavel Dvořák in Dlouhomilov, 1658 Martin Schön in Benkov), and the 1669–1671 Lán Cadastre (MZA D 1, sign. 141, fol. 79: Tobias Schön) trace seven unbroken generations of the Schön family at Benkov No. 5 – from Georg Schön's purchase on Feb 5, 1696 for 175 marks (fol. 210) and Johann Schön's 1837 marriage to Eleonora Dworžák of Dlouhomilov up to the 1921 census and the expulsion of Adolf Schön on July 11, 1946.",
        actionLabel: "Open Benkov Homestead No. 5"
      },
      "fact-14": {
        tag: "Lán Cadastres & Rectification 1657–1756",
        title: "27 Settled Farmers of 1677, Zero Abandoned Farms and Hidden 'Dreihöfen' in Theresian Rolls",
        text: "A complete paleographic transcription of the Zábřeh Estate Lán Cadastre closed on Oct 13, 1677 (MZA Brno, D 1, sign. 141, fol. 76r–77v) proved that despite the Thirty Years' War neither Dlouhomilov nor Benkov (10 farmers, fol. 79r) had a single abandoned farm (0 Ödungen). All 27 Dlouhomilov householders – 1 hereditary reeve (Ilia Zaoralný, formerly Jíra Blahařek(?), 90 Metzen), 18 landed farmers (incl. Hanß Dvořák after Pavel 60 m., Mikuláš Jílek after Jan 40 m., Martin Vachutka after Jan with 6 horses), and 8 landless cottagers – farmed 830 Metzen of arable land (6 hides 3 1/4 eighths), with 18 of 27 holdings changing holder names since the 1656–1657 visitation. Cross-checking Fonds D 2 (1749–1756) and D 3 (1750) further showed no manorial court (Meierhof) existed in Medelské; its three former farms (Dreihöfen) were fiscally merged into Dlouhomilov and survived inside peasant plot names ('ein stückl bey Medelsker grundt', 'u Medla gruntes mihle', 'w Medelsky Strani') until 1770, while local Befreytte Bauern commuted corvée and spun flax yarn for the Šumperk market.",
        actionLabel: "Open Homestead No. 29 (Dvořák 1657/1677)"
      },
      "fact-15": {
        tag: "Court Citations & Land Tables 1463–1589",
        title: "Beadle Duchek at the Mill near Šilperk, Ploughman Števík & 'Brníčko Castle Demolished'",
        text: "Examination of the Moravian Court Citation Books (Libri citationum) and original Olomouc Land Table folios (MZA Brno, fond A 3) illuminated the post-1447 transition from the Tunkls to the Lords of Boskovice and Žerotíns: in 1463–1466 Kateřina of Wildenberg and guarantor Výšek of Střítež sued Jan Tunkl over the hereditary Dlouhomilov court ('dvuor Dluhomiluov', 80 sexagenae bond); in 1490 (ZDO XIII, No. 84) the Tunkls transferred Dlouhomilov, Medelské, and Benkov explicitly 'se všemi rychtami zákupními' (with all emphyteutic reeve seats, 112 years before 1602); and in 1492 Jiřík and Jindřich Tunkl sued neighbors over two Dlouhomilov subjects – ploughman Jan Števík unlawfully manumitted by Znat of Zvole (KP VI, No. 1775) and manorial beadle (pochop) Duchek, who fled his farm ('ušel z dědiny') to a mill near Šilperk/Štíty, leaving his holding waste (KP VI, No. 1962). In 1510 and on June 24, 1513 (Kniha XVII, fol. 10r & 21v), Dlouhomilov passed to Ladislav of Boskovice already 'with a chapel' (wes dluhomilow s kaplu) beneath demolished Brníčko Castle (hrad Brniczko zborzenj), and from Jan of Boskovice († 1589, patron of the 1585 Urbar) via Kunhuta († 1590) to Ladislav Velen of Žerotín.",
        actionLabel: "Open Homestead No. 29 (dvořáci & Tunkl era)"
      },
      "fact-16": {
        tag: "Dubicko & Rohle Registers 1653–1786",
        title: "Witness Pavel Dvořák with Son Hanß (1654), the 1763 Father Correction & Benkov Judge Jan Schön",
        text: "Systematic transcription of the pre-1786 registers of Dubicko (Zá IV 1–2) and Rohle (Zá VIII 1, 6, 10, 14, 15) overturned three common assumptions: (1) On Sept 27, 1654 (Dubicko Zá IV 1, p. 313), 'Pawel Dworžák z Dlauhomilowa a Hanß geho Syn' jointly witnessed the wedding of Jiřík from Medelské ('z Medelskýho')—directly confirming the father-son bond before the 1657/1677 Lán Cadastre at No. 29—while ceremonies took place right 'w Dlauhomilowie' in 1653 alongside Benkov judge Jan Schön (Sskůn). (2) Dlouhomilov and Benkov baptisms left Dubicko not in 1762, but after a 1695–1722 section (Zá IV 2, pp. 948–1095), moving to Rohle in 1720 where Index Zá VIII 14 logs over thirty Dvořák baptisms. (3) The original Sept 9, 1763 baptism of Paulus Dworžak (Rohle Zá VIII 1, p. 405) proved his father was farmer Pavel Dvořák Sr. & Barbara—not Jiří; and while Dlouhomilov & Medelské entered Zá II in 1786 (11 weddings in 1786–1787 incl. local chaplain's brother Joseph Schubert at No. 7), Benkov remained with Rohle until 1932.",
        actionLabel: "Open Profile of Petr Dvořák (*1793)"
      },
      "fact-17": {
        tag: "Rectory No. 2 & Parish History (1707–1968)",
        title: "Émile Zola's Letter to the Dlouhomilov Rectory, 64,800 Bricks & the District's Last Corpus Christi Processions",
        text: "Mining 15 open university theses and archdiocesan archives uncovered vivid stories of Church No. 1 and Rectory No. 2: 64,800 bricks were fired in June 1707 for the Baroque church; out of four 1910 bells only the 1752 bell survived WWI requisitions (21 organ pipes were also seized on Feb 28, 1918), and the village produced 7 native priests incl. Fr. Alois Dvořák (1830–1908). From 1891–1907 priest-writer Fr. František Kužela (pen name Adam Chlumecký) lived at the cold hilltop rectory with its 24m rock-cut well: he founded the St. Roch Society (1897), started the Czech parish chronicle (1899–1986), navigated fierce Czech–German pew disputes with Olešná, and received a personal congratulatory letter from Émile Zola! In 1958, successor Fr. František Reichel (1934–1964) told Communist officials he worked for peace 'out in the field', and in 1959 held Dlouhomilov's Corpus Christi procession as one of just two parishes left in the entire Šumperk district.",
        actionLabel: "Open Rectory No. 2"
      },
      "fact-18": {
        tag: "Onomastics & Charters 1266–1398",
        title: "Where Did Founder Dlúhomil Come From & When Did He Live? Linguistic Clues from Haná, the Ridge Strip & 32 ZDO Entries",
        text: "Historical phonology combined with full screening of Moravian diplomataries (CDM I–IX, RBM II) and all 32 entries in the first volume of the Olomouc Land Registers (ZDO I–X, 1356–1447) reconstructed the village founder: the Old Czech compound name Dlúhomil ('long/enduringly beloved') was in the 13th century an aristocratic status name of native gentry. The sound shift Dlúhomilov → Haná Dlóhomilov → contracted Dlómilov → early-modern German Lomigsdorf proves Central Moravian (Haná) speech, while alternating dvuor Dlúhomiluov / za dvuor v Dluhomile shows his free squire court formed the village's nucleus. Because by 1356 it had split into three squire courts (including a third court held by widow Čáslava → Vilém → Ondřej & Hyluš → Martin & Ctibor of Dlouhomilov 1365–1378, and the main allodial court sold in 1398 by Doman of Závořice to Proček of Bouzov/Wildenberg in ZDO VI, No. 879), Dlúhomil lived ca. 1240/1265–1295/1320 and surveyed the settlement in the last third of the 13th century (ca. 1275–1300). An Olomouc Castle charter of 1269 (CDM IV, p. 36 / RBM II, No. 672) unites the colonizers from southern Haná: Všebor & Hrabiše I of Úsov/Švábenice (cf. Hrabišín), cousins Vilém of Náměšť & Kojata of Drnovice (cf. Kojišov = Kolšov, lying west across Bukovická hora ridge, from which a transverse strip crossed via Studénky and Sluhoňov into Dlouhomilov before Brníčko Castle rose above Lesnice at Loučka's mouth), and royal huntsman Beneda of Dubicko with son Vilém (builders of Otaslavice in Haná and patrons of Dubicko parish 1297, to which Dlouhomilov belonged until 1720/1722) – precisely in whose Haná heartland (between Švábenice, Ivanovice na Hané, Soběbřichy, and Olomouc) the name Dlúhomil circulated, whereas royal witness Dluhomil of Veselí (1267, 1289) belonged to South Bohemian Veselí nad Lužnicí.",
        actionLabel: "Inspect 1834 Stable Cadastre Strip-Fields"
      }
    }
  },
  de: {
    title: "Die Geschichte von Lomigsdorf (Dlouhomilov), Dreihofen (Medelské) und Benke (Benkov)",
    subtitle: "Vom mittelalterlichen Waldhufendorf unter der Burg Brünles (Brníčko) über die barocke Pfarre, die Erbhöfe und den Weiler Dreihofen (Medelské) bis zum Zusammenleben mit der deutschen Nachbargemeinde Benke (Benkov) und den Wandlungen des 20. Jahrhunderts (1356–2006).",
    stats: [
      { label: "Erste urkundliche Erwähnung", value: "1356", detail: "ZDO I, Nr. 482 • Ortsadel" },
      { label: "Historische Ortsteile", value: "3 Orte", detail: "Lomigsdorf • Dreihofen • Benke" },
      { label: "Kontinuität Nr. 22 & 29", value: "1679–1949", detail: "Geschlecht Dvořák über 270 Jahre" },
      { label: "Erfasste Matriken & Bögen", value: "928 + 3.449", detail: "Matrikeneinträge & Zählbögen" }
    ],
    chapters: {
      "kap-0": {
        badge: "Dlúhomil aus der Hanna & Landadel",
        title: "Gründer Dlúhomil aus der Hanna, drei Freihöfe und die Entstehung des Erbgerichts",
        imageCaption: "Illustration zu Kapitel I (1275–1602): Verleihung der Lokationsurkunde auf der Olmützer Burg und Aufbruch des Kolonisationszugs durch das Littauer Tor in das Vorgebirge.",
        secondaryImageCaption: "Kolonisationskarte (1266–1356): Urwald, Sümpfe bei Brünles (Brně) und die Hauptrouten der Besiedlung – von Dubitzko über Kolšov, Sluhoňov und Lomigsdorf nach Olešná und Frankstadt, über Rohle nach Benke sowie von Aussee (Úsov) nach Rabenseifen (Hrabišín; jüngere Weiler Strupšín und Nedvězí).",
        summary: "Woher Gründer Dlúhomil stammte und wann er lebte, was alle 32 Einträge der Mährischen Landtafeln (1356–1447) über die drei Freihöfe im Dorf berichten und wie daraus das Erbgericht hervorging.",
        paragraphs: [
          "Der Grundriss des Waldhufendorfes und die sprachlich-urkundliche Analyse belegen, dass Lomigsdorf (tschechisch <strong>Dlouhomilov</strong>, älter <em>Dluhomilow</em>) im <strong>letzten Drittel des 13. Jahrhunderts (um 1275–1300)</strong> angelegt wurde. Der alttschechische zweigliedrige Name des Gründers <strong>Dlúhomil</strong> (<em>„lange/beständig lieb“</em>, * um 1240–1265, † um 1295–1320) war im 13. Jahrhundert ein Standesname des heimischen Landadels; seine mittelmährische (hannakische) Lautentwicklung <em>Dlúhomilov → Dlóhomilov → Dlómilov</em> führte erst in der frühen Neuzeit zum deutschen Exonym <em>Lomigsdorf</em>, und der Wechsel <em>dvuor Dlúhomiluov / za dvuor v Dluhomile</em> zeigt, dass sein freier Edelhof den Siedlungskern bildete. Eine Urkunde auf der Olmützer Burg von <strong>1269</strong> (<em>CDM IV, S. 36 / RBM II, Nr. 672</em>, neben der Mürauer Lokationsurkunde vom 26. 5. 1266, <em>RBM II, Nr. 517</em>) vereint die Kolonisatoren dieses Vorlandes aus der <strong>südlichen und mittleren Hanna</strong>: <strong>Všebor und Hrabiše I. von Aussee (Úsov)</strong> aus dem Haus Švábenice (vgl. <em>Hrabišín</em>), die Vettern <strong>Wilhelm von Náměšť und Kojata von Drnovice</strong> (vgl. <em>Kojišov = Kolšov</em> westlich hinter dem Kamm der Bukovická hora, von wo ein Querstreifen über Studénky und Sluhoňov nach Dlouhomilov reichte, ehe Burg Brünles oberhalb der Loučka-Mündung bei Lesnice entstand) sowie den landesfürstlichen Jägermeister <strong>Beneda von Dubitzko (Dubicko) mit Sohn Wilhelm</strong> (Erbauer von <em>Otaslavice</em> in der Hanna, Patrone der 1297 belegten Pfarre <strong>Dubitzko</strong>, zu der Lomigsdorf bis 1720/1722 gehörte, und Ahnen der Erbauer von <em>Brünles / Brníčko</em>) – genau in deren hannakischem Hinterland (zwischen Švábenice, Ivanovice na Hané, Soběbřichy und Olmütz) vererbte sich der Name <em>Dlúhomil</em>. Die Lokatorenrechte – Freihufen, Schank-, Metzger-, Schmiede- und Mühlrecht – lebten im <button onclick=\"openHouseDetail('cp7')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">Erbgericht Nr. 7</button> und der <button onclick=\"openHouseDetail('cp3')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">Mühle Nr. 3</button> fort.",
          "Als das Dorf <strong>1356</strong> erstmals in der Olmützer Reihe der <strong>Mährischen Landtafeln</strong> erscheint (<em>ZDO I, Nr. 482 &amp; 484</em>), ist Dlúhomils ursprüngliches Gut nach zwei bis drei Generationen bereits in <strong>drei freie Edelhöfe</strong> geteilt. <strong>Ondřej von Dlouhomilov</strong> verkaufte an <strong>Arnold von Dlouhomilov</strong> für <strong>60 Mark Groschen</strong> den ersten Hof (<em>curia</em>), sechs Hufen und eine Schenke (<em>taberna</em>), während <strong>Pešek von Dlouhomilov</strong> ebenfalls für 60 Mark an die Brüder <strong>Bohuněk und Dětmar von Kolšov</strong> einen zweiten Hof, eine Mark Zins und eine <strong>Wassermühle</strong> veräußerte. 1358 verschrieb <strong>Bohuněk von Dlouhomilov</strong> seiner Frau Gertruda 100 Mark Wittum auf einem Hof mit zwei Zinshufen und Kolšover Wald (<em>Nr. 493</em>).",
          "Die Gesamtauswertung aller <strong>32 Einträge in ZDO I–X (1356–1447)</strong> legte sowohl die Linie des <strong>dritten Freihofs mit Viertelhufe</strong> frei – von der Witwe <em>Čáslava von Dlouhomilov</em> (1365, <em>Nr. 859–860</em>) über <em>Wilhelm</em> (1368, <em>Nr. 1028</em>), <em>Ondřej &amp; Hyluš</em> und <em>Ondřejek Chylec</em> bis zu <em>Martin</em> und <em>Ctibor von Dlouhomilov</em> (1371–1378, <em>ZDO II, Nr. 23; III, Nr. 435</em>) – als auch den Weg des Haupt-Allodialhofs: 1368 verkaufte <strong>Bohuněk von Kolšov</strong> an <strong>Vok [von Eulenburg / Sovinec] und dessen Brüder</strong> Hof, fünf Hufen, <strong>zwei Schenken</strong>, neun Gärtnerstellen (<em>curticulae</em>), eineinhalb Viertel, fünf Gärten, Mühle und Wald (<em>ZDO I, Nr. 1124</em>); über die Brüder <strong>Doman, Svatobor und Výšek von Závořice genannt Ganzar</strong> gelangte der Allodialhof <strong>1398</strong> (<em>ZDO VI, Nr. 879</em>) durch Verkauf <strong>Domans von Závořice</strong> an <strong>Proček von Busau (Wildenberg)</strong>. Im Jahr <strong>1385</strong> (<em>ZDO IV, Nr. 543</em>) verschrieb <strong>Nikolaus von Brünles genannt Morava</strong> seiner Gattin Margaretha 24 Schock Groschen Wittum auf <strong>Benke (<em>Benkow</em>) und Medelské / Dreihofen (<em>Medilsk</em>)</strong> (vgl. <button onclick=\"openHouseDetail('medelske_cp3')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">Hof Nr. 3 in Medelské</button>).",
          "Die zersplitterten Anteile vereinigte Mitte des 15. Jahrhunderts das aufstrebende Geschlecht der <strong>Tunkl von Brünles und Drahanowitz</strong> in zwei belegten Schritten (<em>Sitta 2018</em>): <strong>1436</strong> erheiratete Jan Tunkl von Eichholz mit Eliška von Lesnice die erste Dorfhälfte (1437 intabuliert, <em>ZDO X, Nr. 311, 348</em>; <strong>1446</strong> von Jan d. Ä. Tunkl gekauft, <em>Nr. 449</em>); <strong>1447</strong> erwarb er die zweite Hälfte samt Freihof und Teichen nach Proček von Wildenberg (<em>Nr. 566</em>) sowie Burg Brünles samt <strong>Dreihofen</strong> (inkl. Wald <em>u Medelského</em>) und <strong>Benke</strong> nach Jan von Schönwald (<em>Nr. 560</em>). Prozesse um den Hof <em>dvuor Dluhomiluov</em> zogen sich <strong>1463–1466</strong> hin (<em>KP IV/2, Nr. 525, 543, 866</em>; in der Bruderteilung 1466 fiel das Tal an Jan d. J. Tunkl). <strong>1490</strong> nennt die Landtafel (<em>ZDO XIII, Nr. 84</em>) bereits alle Kauf-Erbgerichte (<em>se všemi rychtami zákupními</em>), während harte Robotpflichten <strong>1492</strong> zwei belegte Untertanenfluchten auslösten – Pferdeknecht <strong>Jan Števík</strong> (<em>KP VI, Nr. 1775</em>) und Büttel <strong>Duchek</strong> in die Mühle bei Schildberg (<em>Nr. 1962</em>). <strong>1510</strong> (die Originalhandschrift <em>MZA A 3 Kniha XVII, Scan 10/32</em> liest <em>„wes dluhomilow s kaplu ... trzy lany w olessnem, wes medelske, wes wenkow“</em>, wodurch ältere gedruckte Regesten berichtigt werden) und am <strong>24. Juni 1513</strong> (<em>Scan 22/32</em>) gingen Dorf und <em>abgebrochene Burg Brünles</em> über Nikolaus Trčka an <strong>Ladislaus von Boskowitz</strong> über und vererbten sich über <strong>Jan von Boskowitz († 1. 8. 1589)</strong> und dessen Schwester <strong>Kunhuta</strong> († 1590) an <strong>Ladislaus Velen von Žerotín</strong>. Dennoch hielten sich befreite Bauern (<em>dvořáci</em> / <em>Befreytte Bauern</em>) und stabile Hofstellen: Das <strong>Urbar der Herrschaft Hohenstadt von 1585</strong> (<em>URB00015585</em>) nennt alle <strong>22 Wirte</strong> in Lomigsdorf/Dlouhomilov (S. 82–84; u. a. <em>Vokšan, Vlček, Vachutka, Sládek, Pospíšil, Horný Němec</em>), <strong>8 Inhaber</strong> auf 5 Stellen samt Mitbesitz in Dreihofen/Medelské (S. 80–81; <em>Valauch, Vítek, Hrabovský &amp; Šumerda, Horníček &amp; Stejskal, Kouřil &amp; Vykoukal</em>) und <strong>10 Wirte</strong> in Benke/<em>Venkov</em> (S. 47) unter Erbrichter <em>Mikuláš</em> – ein Beleg für die bereits vor 1620 bestehende deutsch-tschechische Sprachgrenze. Es folgen die ältesten Grundbücher (Lomigsdorf &amp; Dreihofen ab <strong>1584</strong>, <em>Inv.-Nr. 164</em>; Benke ab <strong>1617</strong>), die ausdrückliche Nennung des <strong>Erbgerichts 1602</strong> unter Žerotín-Herrschaft (<button onclick=\"openHouseDetail('cp7')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">Nr. 7</button>, im Lahnregister 1657/1677 unter <em>Jíra Blahařek(?)</em> und <em>Ilia Zaoralný</em>) sowie Althöfe wie <button onclick=\"openHouseDetail('cp29')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">Nr. 29</button> und <button onclick=\"openHouseDetail('benkov_cp5')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">Benke Nr. 5</button>."
        ],
        links: [
          "🧭 Illustrierte Kolonisationskarte",
          "🍺 Erbgericht (Nr. 7)",
          "⚙️ Mühle unter der Burg (Nr. 3)",
          "🗺️ Stabiler Kataster (1834)"
        ]
      },
      "kap-1": {
        badge: "Landschaft & Pfarre",
        title: "Das Tal unter der Burg Brünles, Aretins Karte und die Wanderung der Pfarre",
        imageCaption: "Illustration zu Kapitel II (1510–1793): Kartograf Pavel Aretin über der Karte der Herrschaft Hohenstadt und die Allerheiligenkirche im Tal.",
        summary: "Wie die Dörfer auf der ältesten handschriftlichen Herrschaftskarte von 1623 erscheinen und warum die Vorfahren zu Taufen und Trauungen über Dubitzko, Hohenstadt, Lesnice und Rohle pilgern mussten.",
        paragraphs: [
          "Unter den Herren von Boskowitz und später den Žerotín festigte sich Lomigsdorf (<strong>Dlouhomilov</strong>) als ausgedehntes Gebirgs-Waldhufendorf unter dem Berg Bukovická (526 m ü. M.) und der Burgruine Brünles (<em>Brníčko</em>). Das am <strong>13. Oktober 1677</strong> geschlossene <strong>Lahnenregister der Herrschaft Hohenstadt</strong> (<em>MZA Brünn, D 1, Sign. 141, Fol. 76r–77v</em>) belegt im Abgleich mit der Erstvisitation von 1656–1657 die volle Besetzung aller <strong>27 Wirte ohne eine einzige Ödung</strong> (<code>0</code> <em>Ödungen</em>) auf <strong>830 Metzen</strong> Ackerland (<code>6</code> Lahnen <code>3 1/4</code> Achtel) – angeführt von Erbrichter <em>Ilia Zaoralný</em> (90 Mz.) sowie Großbauern der Familien <em>Dvořák</em> (<em>Hanß</em> nach <em>Pavel</em>), <em>Vlček, Vokšan, Jílek</em> und <em>Vachutka</em> – oberhalb des Mühlgrabens (<button onclick=\"openHouseDetail('cp3')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">Nr. 3</button>). Die <strong>Rektifikationsakten (1749–1756, MZA D 2)</strong> und die <strong>Dominikalfassion (1750, MZA D 3)</strong> beweisen, dass im Tal kein herrschaftlicher Meierhof lag, die drei Höfe von <strong>Dreihofen</strong> (<em>Medelské</em>) bis 1770 in Flurnamen der Lomigsdorfer Fassionen fortlebten (<em>bey Medelsker grundt</em>, <em>u Medla gruntes mihle</em>) und die hiesigen <em>Befreytten Bauern</em> statt Naturalrobot Geld zinsten sowie Leinengarn für den Markt in Mährisch Schönberg (Šumperk) spannen.",
          "Eine außergewöhnliche Quelle bildet die erhaltene handschriftliche <strong>Aretin-Karte der Herrschaft Hohenstadt aus dem Jahr 1623</strong> (ZAO Olmütz, <em>Velkostatek Zábřeh, NAD 1549, Inv.-Nr. 831, Karte Nr. 1</em> – geschützt als Archiv-Kulturdenkmal <strong>AKP ČR Nr. 81</strong>). Das <strong>137 × 98 cm</strong> große kolorierte Manuskript im Maßstab ca. <strong>1 : 20 800</strong> fertigte Kartograph <strong>Pavel Aretin von Ehrenfeld</strong> bei der Konfiskation des Gutes von Ladislav Velen von Žerotín für Karl I. von Liechtenstein; als <strong>älteste erhaltene Herrschaftskarte der böhmischen Länder</strong> zeigt es neben den Dörfern um Brünles auch die Tunkl-Teichkette (Závořický 107 ha, Dubický 82,5 ha). Gedruckte Landkarten Mährens – <strong>Müller (1716)</strong> und <strong>Wieland (1726)</strong> – bilden <em>Lomigsdorf / Dlohomilow</em> und <em>Bentke</em> (Benkov) ab, während die <strong>I. Josephinische Landesaufnahme (1764–1768)</strong> Kirche, Gehöfte und den Weg nach <strong>Dreihofen / Medelské</strong> exakt zeichnet.",
          "Die kirchlichen Quellen beleuchten die bemerkenswerte <strong>Wanderung der Pfarre</strong>: Eine Kapelle bestand bereits um <strong>1510</strong>, <strong>1585</strong> wird der Ort geistlich genannt. Die ältesten überlieferten Taufen, Trauungen und Begräbnisse der Talbewohner liegen jedoch in den Nachbarpfarren – zuerst <strong>Dubitzko / Dubicko</strong> (<em>Zá IV 1</em> bereits <strong>1617–1694</strong>, u. a. mit Trauungen <em>w Dlauhomilowie</em> 1653 sowie Pavel &amp; Hanß Dvořák als Zeugen am 27. 9. 1654, und <em>Zá IV 2</em> mit eigener Taufabteilung <strong>1695–1722</strong> auf S. <code>948–1095</code>), vereinzelt <strong>Hohenstadt / Zábřeh</strong> (<em>Zá I 1, Inv.-Nr. 8332</em>, 1649–1692), <strong>Brünles / Brníčko</strong> (<em>Zá VI 5</em> ab 1653, Traupfarre u. a. 1786), <strong>Lesnice</strong> (Inv.-Nr. 8399, ab 1676/1688) sowie bereits <strong>1720–1785/1786</strong> in der wiedererrichteten Pfarre <strong>Rohle</strong> (<em>Zá VIII 1, 6, 10, 14, 15</em>). Nach einem im Juni <strong>1707</strong> begonnenen Vorgängerbau (für den laut Rechnungen <strong>64.800 Ziegel</strong> gebrannt wurden) entstand zwischen <strong>1767 und 1770</strong> die spätbarocke <button onclick=\"openHouseDetail('cp1')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">Allerheiligenkirche (Nr. 1)</button> (mit Inventar aus dem aufgehobenen Schönberger Kloster; 1864 durch das Presbyterium erweitert). <strong>1785/1786</strong> folgte die eigene Lokalie am <button onclick=\"openHouseDetail('cp2')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">Pfarrhof (Nr. 2)</button> (bis 1986 wirkten hier 26 Seelsorger; <strong>7 gebürtige Priester</strong> stammten aus dem Dorf) mit Matriken <em>Zá II</em> für Lomigsdorf, Dreihofen und beide Olleschau – während <strong>Benke (Benkov)</strong> bis <strong>1932</strong> bei Rohle blieb –, und <strong>1793</strong> das <button onclick=\"openHouseDetail('cp12')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">Schulgebäude (Nr. 12)</button>. Um 1900 wirkte hier der Dichter-Pfarrer <strong>P. František Saleský Kužela (Adam Chlumecký, 1891–1907)</strong>, Gründer des St.-Rochus-Vereins (1897) und der tschechischen Pfarrchronik (1899), der direkt in das Dlouhomilover Pfarrhaus einen Glückwunschbrief von <strong>Émile Zola</strong> erhielt."
        ],
        links: [
          "⛪ Allerheiligenkirche (Nr. 1)",
          "🏛️ Barocker Pfarrhof (Nr. 2)",
          "🗺️ I. Josephinische Landesaufnahme (1764)"
        ]
      },
      "kap-2": {
        badge: "Drei Siedlungen",
        title: "Drei Welten in einem Tal: Lomigsdorf (Dlouhomilov), Dreihofen (Medelské) und Benke (Benkov)",
        imageCaption: "Illustration zu Kapitel III (1770–1949): Das tschechische Lomigsdorf (Dlouhomilov) im Tal, der Weiler Dreihofen (Medelské) und das Bergdorf Benke (Benkov) mit seiner Kapelle.",
        summary: "Das tschechische Bauerndorf im Tal, der nördliche Weiler Dreihofen (Medelské) mit eigener Hausnummernreihe und das deutsche Höhendorf Benke (Benkov) in einer gemeinsamen Katastralgemeinde.",
        paragraphs: [
          "In den Matrikenbüchern der Pfarreien <strong>Rohle</strong> (Benke bis 1932) und <strong>Lomigsdorf / Dlouhomilov</strong> (<em>Zá II 1</em> bis <em>Zá II 10</em>, 1786–1949) sowie in den Volkszählungen verflechten sich ständig die Schicksale <strong>dreier unterschiedlicher Siedlungen</strong>, von denen jede ihre eigene Konskriptionsnummerierung sowie einen eigenen landschaftlichen und sprachlichen Charakter besaß:",
          "<strong>1. Lomigsdorf / Dlouhomilov (Nr. 1–133):</strong> Ein wohlhabendes tschechisches Bauern- und Handwerkerdorf im Tal mit einem hervorragend erhaltenen Ensemble nordmährischer gemauerter Volksarchitektur (heute dörfliche Denkmalzone ÚSKP 2350). Die unter Maria Theresia <strong>1770–1771</strong> eingeführte Hausnummerierung (Nr. 1–80) wurde hier nie umnummeriert – neue Häuslerstellen erhielten einfach Nummern am Ende der Reihe (1834: 80 Häuser, 1900: 106 Häuser, 1921: 118 Häuser).",
          "<strong>2. Weiler Dreihofen / Medelské (eigene Reihe Nr. 1–10):</strong> Eine Gruppe von Höfen und Häuseln am Nordrand der Gemarkung Richtung Brünles (Brníčko), wo über Generationen die Familien <strong>Schafarz / Šafář</strong>, <strong>Minář</strong> (<button onclick=\"openHouseDetail('medelske_cp1')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">Dreihofen / Medelské Nr. 1</button>) und <strong>Nejedlý</strong> (<button onclick=\"openHouseDetail('medelske_cp2')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">Dreihofen / Medelské Nr. 2</button>) lebten. Da Dreihofen eine eigene Nummerierung ab Nr. 1 besaß, löste erst der Zählbogen von 1921 das Rätsel der Matrikeneinträge von 1938–1948, in denen „Nr. 2“ bei der Familie Nejedlý nicht den Pfarrhof, sondern Medelské Nr. 2 bedeutete!",
          "<strong>3. Benke / Benkov (<em>Bentkow</em>, eigene Reihe Nr. 1–49):</strong> Ein Höhendorf auf dem Plateau südöstlich über Lomigsdorf rund um die <button onclick=\"openHouseDetail('benkov_kaple')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">Kapelle des hl. Antonius von Padua</button>. Auf <strong>Chytils Nationalitätenkarte Mährens von 1906</strong> verlief zwischen Tal und Anhöhe die Sprachgrenze: Lomigsdorf (Dlouhomilov) mit Dreihofen (Medelské) sind rot als tschechische Orte eingezeichnet, Benke (Benkov) grün als deutsche Gemeinde (Familien <em>Kauer, Heger, Rössner, Blaschke, Bischof, Weiser, Schmid, Körner, Mertlík</em>, neben denen hier auch tschechische Familien wie <em>Crhák, Halámek und Krobot</em> lebten)."
        ],
        links: [
          "🏡 Dreihofen / Medelské Nr. 1 (Familie Minář)",
          "🏡 Dreihofen / Medelské Nr. 2 (Familie Nejedlý)",
          "⛪ Kapelle in Benke (Benkov)",
          "🗺️ Nationalitätenkarte Mährens (1906)"
        ]
      },
      "kap-3": {
        badge: "Heraldik & Symbole",
        title: "Das Gemeindewappen: Spaten, goldenes Pflugmesser und zwei Apfelblüten",
        imageCaption: "Illustration zu Kapitel IV (1749–2004): Gemeindesiegel und Wappen mit gekreuzten Spaten, goldenem Pflugmesser und Apfelblüten im Obstgarten.",
        summary: "Wie alte bäuerliche Gemeindesiegel und die Verbindung von Lomigsdorf (Dlouhomilov) mit Benke (Benkov) Eingang in das Gemeindewappen fanden (REKOS Nr. 37 / 2004).",
        paragraphs: [
          "Die historische Verbindung von Lomigsdorf (Dlouhomilov) und Benke (Benkov) erhielt am <strong>8. Juni 2004</strong> (Beschluss Nr. 37 des Präsidenten des Abgeordnetenhauses) ihren heraldischen Ausdruck im offiziellen Wappen und Banner der Gemeinde:",
          "<em>„Im silbern-rot gespaltenen Schild zwei schräggekreuzte aufrechte Spaten zwischen zwei fünfblättrigen Apfelblüten mit goldenen Butzen, alles in verwechselten Farben, belegt mit einem nach links gewendeten goldenen Pflugmesser (Sech).“</em>",
          "<strong>Die beiden gekreuzten Spaten und das goldene Pflugmesser</strong> knüpfen an die alte Siegelsymbolik der Landgemeinde Lomigsdorf und die jahrhundertelange Arbeit der Bauern- und Häuslerfamilien an. <strong>Die zwei fünfblättrigen Apfelblüten in verwechselten Tinkturen</strong> erinnern sowohl an den berühmten Obstbau und die Apfelgärten rund um die Höfe als auch an den brüderlichen Zusammenschluss der beiden historischen Gemeinden – <strong>Lomigsdorf (Dlouhomilov) und Benke (Benkov)</strong>."
        ],
        links: [
          "🛡️ Gemeindewappen anzeigen (REKOS)"
        ]
      },
      "kap-4": {
        badge: "Ortsverwaltung",
        title: "Das Erbgericht Nr. 7: Verwaltungszentrum des Dorfes",
        imageCaption: "Illustration zu Kapitel V (1804–1921): Der Erbrichter mit der Gemeindetruhe, Lehrerin Eliška Ptáčková und die achtzehntägige Jitřenka vor dem Erbgericht Nr. 7.",
        summary: "Vom Erbrichtergeschlecht Merta über die Familien Krobot und Pavlík bis zu drei Haushalten, einer Handarbeitslehrerin und der 18 Tage alten Jitřenka im Februar 1921.",
        paragraphs: [
          "Das stattlichste weltliche Gebäude im Ort war seit dem 18. Jahrhundert das <button onclick=\"openHouseDetail('cp7')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">ehemalige Erbgericht (Nr. 7)</button> an der Ostseite des Dorfplatzes – ein mächtiger zweigeschossiger Bau mit barockem Kern und Vierkanthof (Kulturdenkmal ÚSKP 51795/9-103). Der Erbrichter verwahrte die Gemeindetruhe und das Gemeindesiegel, überwachte die Robotpflichten und schlichtete Nachbarschaftsstreitigkeiten.",
          "Die Volkszählungsbögen von <strong>1857–1921</strong> zeigen das Erbgericht Nr. 7 als lebendigen Großhof, in dem unter einem Dach bis zu <strong>23 Personen</strong> lebten (im Jahr 1869). Mitte des 19. Jahrhunderts wirtschaftete hier das Erbrichtergeschlecht <strong>Merta</strong> (<em>Franz Merta</em>, *1804), gefolgt von den Familien <strong>Krobot</strong>, <strong>Cink</strong> und um die Jahrhundertwende dem Landwirt <strong>František Pavlík</strong> (*1855).",
          "Bei der Volkszählung am <strong>15. Februar 1921</strong> bewohnten Nr. 7 drei getrennte Haushalte (14 Personen): Im Hauptteil wirtschaftete Landwirt <strong>František Hvížď</strong> (*1879 aus Tritschein / Třeština) mit Gattin Anna (*1886), fünf Kindern und Gesinde. In der zweiten Wohnung lebte die Witwe <strong>Mathilda Ptáčková</strong> (*1863 aus Rowenz / Rovensko) mit ihrer Tochter <strong>Eliška Ptáčková</strong> (*1889, Industriallehrerin an der Volksschule in Lomigsdorf), der verheirateten Tochter Marie Kvapilová (*1894) und der erst 18 Tage alten Enkelin <strong>Jitřenka Kvapilová</strong> (*28. 1. 1921 in Olmütz). Den dritten Haushalt bildeten die Ausgedinger Jakub und Anna Navrátil."
        ],
        links: [
          "🏛️ Detail des Erbgerichts (Nr. 7)",
          "📜 Stabiler Kataster 1834"
        ]
      },
      "kap-5": {
        badge: "Geschlecht Dvořák • Nr. 29",
        title: "Bauerngut Nr. 29 (Dvořák-Hof): Von 1679 über einen Prager Juristen bis zum Schlossbrand von Blauda",
        imageCaption: "Illustration zu Kapitel VI (1679–1947): Bauer mit Grundbuch, der Prager Jurist JUDr. Jan Dvořák und Pfarrer P. Alois Dvořák vor dem Hof Nr. 29.",
        summary: "Die ältesten Grundbucheinträge von 1679, der Prager Doktor der Rechte JUDr. Jan Dvořák (*1826), der Hohenstädter Pfarrer P. Alois Dvořák und der Heldentod des Wagners Antonín Motyka.",
        paragraphs: [
          "Unter den sechs denkmalgeschützten Bauerngütern in Lomigsdorf (Dlouhomilov) nimmt das <button onclick=\"openHouseDetail('cp29')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">Anwesen Nr. 29 (Bauerngut Dvořák)</button> durch die Fülle überlieferter Quellen eine Ausnahmestellung ein. Einträge im <strong>Grundbuch der Herrschaft Hohenstadt / Zábřeh (Inv.-Nr. 164, Fol. 191)</strong> führen die Spur der Hofbesitzer aus dem Geschlecht <strong>Dvořák</strong> (<em>Dworzak</em>) bis ins Jahr <strong>1679</strong> zurück (Jan Dvořák, ab 1720 Pavel Dvořák).",
          "Im ältesten Zählbogen von <strong>1857</strong> wirtschaftete auf Nr. 29 der Bauer <button onclick=\"openPersonModal('p_johann_dvorak_1795')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">Johann Dvořák (*1795)</button>. Sein älterer Sohn <button onclick=\"openPersonModal('p_dr_jan_dvorak_1826')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">Jan Dvořák (*1826)</button> studierte Rechtswissenschaften an der Karl-Ferdinands-Universität in Prag und ist im Bogen authentisch als <em>„Jurist in Prag II“</em> verzeichnet; später promovierte er zum Doktor der Rechte (1869 als <em>„Doktor“</em> geführt). Den Hof übernahm der jüngere Bruder <button onclick=\"openPersonModal('p_alois_dvorak_1830')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">Alois Dvořák (*1830)</button>, während aus einem verwandten Zweig der Hohenstädter Pfarrer <strong>P. Alois Dvořák</strong> hervorging, der am 15. Juli 1907 persönlich den neuen Hofbesitzer <button onclick=\"openPersonModal('p_josef_dvorak_1877')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">Josef Dvořák (*1879)</button> mit der 19-jährigen <strong>Amálie Motyková</strong> (*1888 aus Blauda / Bludov) traute.",
          "Die Braut Amálie Motyková brachte eine bewegende Familiengeschichte auf Nr. 29 mit: Ihr Vater <strong>Antonín Motyka</strong>, Wagnermeister in Blauda (Bludov) Nr. 113, starb den Heldentod, als er beim großen Brand des Schlosses Blauda in die Flammen zurücklief, um das herrschaftliche Vieh zu retten. Die Witwe Františka Motyková (*1844 in Krumpisch / Chromeč) verbrachte ihren Lebensabend im Ausgedinge auf Nr. 29. Josef und Amálie Dvořák zogen hier den Sohn Josef (*1913) und die Tochter <strong>Marie Dvořáková (*15. 6. 1920)</strong> groß, die den Magister der Pharmazie <strong>PhMr. Jaroslav Berka</strong> heiratete – geboren exakt am selben Tag und im selben Jahr (15. 6. 1920)."
        ],
        links: [
          "🏡 Bauerngut Nr. 29 (Hof Dvořák)",
          "👤 Johann Dvořák (*1795)",
          "👤 Dr. Jan Dvořák (*1826)",
          "👤 Alois Dvořák (*1830)",
          "👤 Josef Dvořák (*1879)"
        ]
      },
      "kap-6": {
        badge: "Familien Dvořák & Kouřil • Nr. 22 & 24",
        title: "Die Höfe Nr. 22 und Nr. 24: 163 Jahre unter derselben Hausnummer und die Doppelhochzeit von 1878",
        imageCaption: "Illustration zu Kapitel VII (1786–1949): Doppelhochzeit der Brüder Dvořák und der Schwestern Kouřil vor dem Laubengang des Hofes Nr. 24 am 29. Juli 1878.",
        summary: "Wie zwei Brüder Dvořák an einem einzigen Tag zwei Schwestern Kouřil aus Nr. 24 heirateten – nur dreizehn Tage vor dem Tod des Brautvaters.",
        paragraphs: [
          "Das historische <button onclick=\"openHouseDetail('cp22')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">Bauerngut Nr. 22 (bei Dvořák)</button> liefert den stärksten Beweis für die Kontinuität der Hausnummern in Lomigsdorf: Bereits <strong>1786</strong> heiratete in Brünles (Brníčko) der 21-jährige Bauernsohn <strong>Pavel Dvořák (*1763) „aus Lomigsdorf Nr. 22“</strong> Marina Weinlich. Ihr Sohn <strong>Petr Dvořák (*1793)</strong> starb auf Nr. 22 als Ausgedinger am 9. Dezember 1878 im Alter von 84 Jahren.",
          "Am <strong>29. Juli 1878</strong> erlebte die Allerheiligenkirche eine berühmte <strong>Doppelhochzeit</strong>: Der Bauer <strong>František Kouřil (*1819)</strong> vom benachbarten Denkmalhof <button onclick=\"openHouseDetail('cp24')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">Nr. 24</button>, schwer an Tuberkulose (<em>Abzehrung</em>) erkrankt, verheiratete an einem einzigen Tag seine beiden Töchter mit zwei Brüdern Dvořák – die 20-jährige <strong>Anna Kouřilová (*1857)</strong> nahm <button onclick=\"openPersonModal('p_josef_dvorak_1857')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">Josef Dvořák (*1857)</button> zum Mann, und ihre Schwester <strong>Ludmila Kouřilová</strong> heiratete dessen Bruder <strong>Karel Dvořák</strong>. Nur 13 Tage nach der Trauung (11. August 1878) verstarb der Brautvater František Kouřil.",
          "Die Jungvermählten Josef und Anna Dvořák bewirtschafteten Nr. 22 über sechzig Jahre lang: Josef starb am 10. Juli 1940 mit <strong>83 Jahren</strong>, und Anna geb. Kouřilová starb auf Nr. 22 am 29. Mai 1949 im Alter von <strong>91 Jahren und 5 Monaten</strong>. Ihnen folgte Sohn <button onclick=\"openPersonModal('p_karel_dvorak_1880')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">Karel Dvořák (*1880, †1942)</button>."
        ],
        links: [
          "🏡 Bauerngut Nr. 22 (Familie Dvořák)",
          "🏡 Bauerngut Nr. 24 (Familie Kouřil)",
          "👤 Josef Dvořák (*1857, †1940)",
          "👤 Karel Dvořák (*1880, †1942)"
        ]
      },
      "kap-7": {
        badge: "Familien Jílek & Šafář • Nr. 10 & 6",
        title: "Die Höfe Nr. 10 und Nr. 6: Die Lahner Jílek (Gilek) und der Zuzug der Familie Šafář aus Dreihofen",
        imageCaption: "Illustration zu Kapitel VIII (1815–1921): Abschied des Rekruten Vincenc Jílek 1869, Ankunft der Familie Šafář auf Nr. 10 und Witwe Marie Jílková auf Nr. 6.",
        summary: "Ein halbes Jahrhundert der Lahnerfamilie Jílek (Gilek), die Einrückung des Sohnes Vincenc zum Militär 1869 und der Antritt des Geschlechts Šafář aus Dreihofen (Medelské) Nr. 1.",
        paragraphs: [
          "Auf dem Bauerngut <button onclick=\"openHouseDetail('cp10')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">Nr. 10 (Hof Jílek & Šafář)</button> im mittleren Ortsteil wirtschaftete seit der ersten Hälfte des 19. Jahrhunderts der Ganzlahner <button onclick=\"openPersonModal('p_josef_jilek_1815')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">Josef Jílek (*1815, <em>Gilek</em>)</button> mit seiner Ehefrau Anna (*1814). 1869 übernahm Sohn <button onclick=\"openPersonModal('p_karel_jilek_1845')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">Karel Jílek (*1845)</button> das Gut, während bei seinem 19-jährigen Bruder Vincenc (*1850) in der Anmerkungsspalte knapp vermerkt ist: <em>„Beim Militär“</em>.",
          "Um 1900 zieht auf Nr. 10 das alte Geschlecht <strong>Šafář (<em>Schafarz</em>)</strong> aus dem Weiler Dreihofen (Medelské) Nr. 1 ein. In den Jahren 1910 und 1921 wirtschaftet hier der Landwirt <button onclick=\"openPersonModal('p_frantisek_safar_1874')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">František Šafář (*1874)</button> mit Ehefrau Aloisie (*1881 aus Kloppe / Klopina), vier Kindern und dem Ausgedinger <button onclick=\"openPersonModal('p_jan_safar_1859')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">Jan Šafář (*1859 in Dreihofen / Medelské)</button>.",
          "Auf dem Nachbargut <button onclick=\"openHouseDetail('cp6')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">Nr. 6</button> hielt im Jahr 1921 die 71-jährige Witwe <strong>Marie Jílková (*1849 inGrumberg / Bratrušov)</strong> fest die Zügel des Hofes in der Hand, unterstützt von der fünfköpfigen Familie des Feldgehilfen Jan Šindler (*1863 aus Ober-Ullischen / Horní Olešná) und drei ledigen Knechten."
        ],
        links: [
          "🏡 Bauerngut Nr. 10 (Jílek & Šafář)",
          "🏡 Bauerngut Nr. 6 (Familie Jílek)",
          "👤 František Šafář (*1874)"
        ]
      },
      "kap-8": {
        badge: "Handwerk & Industrie",
        title: "Häusler, die Schmiede von Nr. 110 und die Weber bei Oberleithner in Mährisch Schönberg",
        imageCaption: "Illustration zu Kapitel IX (1860–1921): Die Schmiede von František Berka in Nr. 110 und der morgendliche Weg der Weber und Bleicher zu Eduard Oberleithner nach Mährisch Schönberg.",
        summary: "Die Dorfschmiede von František Berka in Nr. 110, das Häusel Nr. 46 und der tägliche Fußmarsch der Bleicher und Weberinnen in die Schönberger Textilfabriken von Eduard Oberleithner.",
        paragraphs: [
          "Seit der zweiten Hälfte des 19. Jahrhunderts entstanden an den Hängen und Ortsrändern kleinere Häuslerstellen, deren Bewohner kleine Landwirtschaft mit einem Handwerk oder der Arbeit in den Textilfabriken von Mährisch Schönberg (<em>Šumperk</em>) verbanden.",
          "Im Haus <button onclick=\"openHouseDetail('cp110')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">Nr. 110</button> arbeitete bei der Volkszählung 1910 der Dorfschmied <strong>František Berka (*1866 aus Lesche / Leština)</strong> mit seiner Frau Marie (*1864 aus Raabe / Hrabová) und dem Sohn, Schmiedegehilfen <strong>Jan Berka (*1894)</strong>; 1921 lebten hier die 87-jährige Ausgedingerin <strong>Terezie Podhorná (*1834)</strong> und die Weberin Anna Podhorná (*1877). Im denkmalwürdigen Häusel <button onclick=\"openHouseDetail('cp46')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">Nr. 46</button> wirtschaftete der Häusler <button onclick=\"openPersonModal('p_alois_dvorak_1840')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">Alois Dvořák (*1840)</button> mit seinem Sohn, dem Maurer <button onclick=\"openPersonModal('p_jan_dvorak_1873')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">Jan Dvořák (*1873)</button>.",
          "Die Zählbögen von 1921 zeigen, dass der größte industrielle Arbeitgeber der hiesigen Häusler die berühmte Firma <strong>„Eduard Oberleithner & Söhne, Weberei und Bleiche in Mährisch Schönberg (Šumperk)“</strong> war. Täglich pendelten dorthin etwa der Bleichereiarbeiter <button onclick=\"openPersonModal('p_jan_minar_1861')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">Jan Minář (*1861)</button>, der Garnbleicher Josef Minář (*1886) und die Weberin Pavlína Minářová (*1894) aus <button onclick=\"openHouseDetail('medelske_cp1')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">Dreihofen (Medelské) Nr. 1</button> sowie ihre Nachbarn Josef und Marie Nejedlý aus <button onclick=\"openHouseDetail('medelske_cp2')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">Dreihofen (Medelské) Nr. 2</button>."
        ],
        links: [
          "🔨 Schmiede Nr. 110 (Berka & Podhorný)",
          "🏡 Häusel Nr. 46",
          "👤 Jan Minář (*1861, Dreihofen / Medelské Nr. 1)"
        ]
      },
      "kap-9": {
        badge: "Volkszählung 1921",
        title: "Februar 1921: Spiegelbild des Dorfes an der Schwelle der Tschechoslowakei",
        imageCaption: "Illustration zu Kapitel X (15. 2. 1921): Der Zählungskommissär vor dem Gasthaus Langr mit Dechant P. Kožušníček, einem ČSD-Eisenbahner und einer Kriegswitwe.",
        summary: "Eigenhändige Unterschriften auf den Zählbögen, Dechant P. František Kožušníček im Pfarrhof, Eisenbahner, Lehrlinge und die Wunden des Ersten Weltkriegs.",
        paragraphs: [
          "Die erste tschechoslowakische Volkszählung um Mitternacht vom <strong>15. auf den 16. Februar 1921</strong> erlaubt uns einen direkten Blick in die einzelnen Stuben. Im barocken Pfarrhof <button onclick=\"openHouseDetail('cp2')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">Nr. 2</button> wirkte damals Dechant <strong>P. František Kožušníček (*1860 aus Tobitschau / Tovačov)</strong>, während in <button onclick=\"openHouseDetail('cp4')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">Nr. 4</button> der Schlosser <strong>Josef Vénos (*1877)</strong> vom Heizhaus der Staatsbahn ČSD in Mährisch Schönberg sowie die Untermieterin <strong>Julie Janků (*1879)</strong> vom Postamt in Brünles (Brníčko) lebten.",
          "Vom Hof <button onclick=\"openHouseDetail('cp5')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">Nr. 5</button> (bei der Familie Koš und der Ausgedingerin Marie Krobotová) pendelte der zehnjährige <strong>Josef Koš (*1911)</strong> als Realschüler nach Mährisch Schönberg, während sein Bruder František (*1904) in Nieder-Ullischen (Dolní Olešná) das Schlosserhandwerk erlernte.",
          "In <button onclick=\"openHouseDetail('cp8')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">Nr. 8</button> sind die Wunden des Ersten Weltkriegs deutlich sichtbar: Neben dem Witwer Josef Hošek (*1856) mit seiner stummen Tochter Anna (*1900) lebten hier die Kriegerwitwe <strong>Amálie Šafářová (*1885)</strong> mit drei kleinen Töchtern sowie der ledige Landwirt und <strong>Kriegsinvalide František Drlík (*1876)</strong>."
        ],
        links: [
          "🏛️ Pfarrhof Nr. 2 (Dechant P. Kožušníček)",
          "🏡 Anwesen Nr. 4 (Familie Vénos)",
          "🏡 Hof Nr. 5 (Familien Koš & Lukas)",
          "🏡 Anwesen Nr. 8 (Familien Hošek & Šafář)"
        ]
      },
      "kap-10": {
        badge: "20.–21. Jahrhundert",
        title: "Zusammenleben an der Grenze, Nachkriegswandel und Schicksale im 20. Jahrhundert (1938–2006)",
        imageCaption: "Illustration zu Kapitel XI (1938–1960): Nachkriegsvertreibung der deutschen Altbevölkerung und Ankunft neuer Siedler in Benke (Benkov) im Jahr 1946.",
        summary: "Angliederung an das Sudetenland und Verlust des Sokol 1938, Befreiung am 7. 5. 1945, Neubesiedlung von Benke, Mut des Pfarrers Reichel in den 1950er Jahren, Dialektpunkt ČJA 647 & 650-Jahr-Feier.",
        paragraphs: [
          "Der Herbst <strong>1938</strong> und das Münchner Abkommen gliederten das gesamte Tal in den Reichsgau <em>Sudetenland</em> (Landkreis Hohenstadt unter Landrat Gerhard Hotop) ein, wie die <button onclick=\"openMapCompareModal('sudety1940')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">Karte der Kreise Hohenstadt (Zábřeh) und Mährisch Schönberg (Šumperk) von 1940</button> zeigt. Der Turnverein <strong>Sokol Dlouhomilov</strong> (gegr. 1907, Sokolhaus 1925) gehörte dabei zu den <strong>42 verlorenen Einheiten des Gaues Župa Severomoravská</strong> (<em>Uhlíř 2006</em>). Die Befreiung erreichte die Nachbardörfer Strupšín und Brníčko am <strong>7. Mai 1945</strong> (<em>Stejskal 2010</em>).",
          "Nach <strong>1945</strong> erlebte das deutsche <strong>Benke (Benkov)</strong> mit der Aussiedlung (April–September 1946) und dem Zuzug neuer Familien (<em>Zbranek, Mičulka, Chrastina, Sitař, Rýznar, Krejčí</em> in <em>Zá II 10</em>) den tiefsten Umbruch, begleitet von Volksgerichten in Hohenstadt (<em>Lukáč 2017</em>) und der Kollektivierungskrise 1952–1953 (<em>Mrňka 2013</em>). Am <strong>11. September 1946</strong> übernahm Langzeitpfarrer <strong>P. František Reichel (1934–1964)</strong> auch die Nachbarpfarre Rohle und setzte im <strong>Pfarrhof Nr. 2</strong> gegen kommunistische Kirchensekretäre <strong>1959</strong> eine der beiden letzten öffentlichen Fronleichnamsprozessionen im Bezirk Šumperk durch (erneuert am <strong>16. 6. 1968</strong>; 1979–1980 wirkte hier der ehemalige PTP-Geistliche <strong>Mons. Antonín Pospíšil</strong>). <strong>1960</strong> vereint, wurde Dlouhomilov als fester Dialektpunkt Nr. <strong>647</strong> im <em>Tschechischen Sprachatlas</em> erfasst und feierte <strong>2006</strong> sein 650-jähriges Bestehen."
        ],
        links: [
          "🏛️ Pfarrhof Nr. 2 (P. Reichel 1934–1964)",
          "⛪ Allerheiligenkirche (Nr. 1)",
          "🗺️ Karte der Kreise Hohenstadt & Mährisch Schönberg (1940)",
          "🗺️ Topografische Karte der ČSR (1937)"
        ]
      }
    },
    funFacts: {
      "fact-1": {
        tag: "163 Jahre in einem Haus",
        title: "163 Jahre des Geschlechts Dvořák unter derselben Hausnummer (Nr. 22)",
        text: "Als 1786 in Brünles (Brníčko) der 21-jährige Pavel Dvořák (*1763) heiratete, trug der Pfarrer seine Herkunft mit den Worten „aus Lomigsdorf Nr. 22“ ein. 163 Jahre später, am 29. Mai 1949, stirbt im selben Haus Nr. 22 die Ausgedingerin Anna Dvořáková geb. Kouřilová. Über mehr als fünf Generationen änderten sich hier weder der Familienname noch die Nummer am Hofgiebel.",
        actionLabel: "Hof Nr. 22 öffnen"
      },
      "fact-2": {
        tag: "Trauung in letzter Stunde",
        title: "Doppelhochzeit dreizehn Tage vor dem Tod des Vaters (29. 7. 1878)",
        text: "Am 29. Juli 1878 standen vor dem Altar der Allerheiligenkirche gleichzeitig zwei Brüder und zwei Schwestern: Josef und Karel Dvořák heirateten in derselben Stunde Anna und Ludmila Kouřilová vom Hof Nr. 24. Der Brautvater, der 59-jährige Bauer František Kouřil, lag an Tuberkulose im Sterben und verschied nur 13 Tage nach der Feier (11. 8. 1878).",
        actionLabel: "Hof Nr. 24 öffnen"
      },
      "fact-3": {
        tag: "Unglaubliche Datumsübereinstimmung",
        title: "Eheleute geboren am exakt selben Tag und Jahr (15. Juni 1920)",
        text: "Auf dem Hof Nr. 29 wurde dem Bauern Josef Dvořák und Amálie geb. Motyková am 15. Juni 1920 die Tochter Marie Dvořáková geboren. Sie heiratete den Pharmazierat PhMr. Jaroslav Berka, der exakt am selben Tag und im selben Jahr zur Welt kam – am 15. Juni 1920!",
        actionLabel: "Hof Nr. 29 öffnen"
      },
      "fact-4": {
        tag: "Forschungsrätsel",
        title: "Welche „Nr. 2“? Das Rätsel um den Pfarrhof und den Weiler Dreihofen (Medelské)",
        text: "In der Matrik von 1938–1948 ist bei Trauungen und Sterbefällen der Familie Nejedlý (darunter die Hochzeit von Bohumil Nejedlý am 16. 10. 1948) „Nr. 2“ vermerkt. In Lomigsdorf (Dlouhomilov) ist Nr. 2 jedoch der barocke Pfarrhof! Erst der Volkszählungsbogen von 1921 löste das Rätsel: Es handelte sich um Dreihofen (Medelské) Nr. 2 mit eigener Hausnummernreihe.",
        actionLabel: "Dreihofen / Medelské Nr. 2 öffnen"
      },
      "fact-5": {
        tag: "Sozialer Aufstieg",
        title: "Ein Bauernsohn aus Nr. 29 als Jurist und Doktor der Rechte in Prag (1857)",
        text: "Im Zählbogen des Hofes Nr. 29 aus dem Jahr 1857 findet sich beim Bauernsohn Jan Dvořák (*1826) ein für damalige dörfliche Verhältnisse außergewöhnlicher Eintrag: „Jurist in Prag II“. Jan studierte an der Prager Karl-Ferdinands-Universität und wird 1869 bereits als Doktor der Rechte (JUDr.) geführt.",
        actionLabel: "Profil von Dr. Jan Dvořák (*1826)"
      },
      "fact-6": {
        tag: "Familiengedächtnis",
        title: "Heldentod in den Flammen des Schlosses Blauda (Bludov)",
        text: "Die Ausgedingerin Františka Motyková (*1844) auf Nr. 29 wurde unter dramatischen Umständen Witwe: Ihr Mann Antonín Motyka, Wagner in Blauda Nr. 113, lief beim großen Brand des Schlosses Blauda in die brennenden Stallungen, um das herrschaftliche Vieh zu retten, und kam in den Flammen um.",
        actionLabel: "Hof Nr. 29 öffnen"
      },
      "fact-7": {
        tag: "Langlebigkeit im Tal",
        title: "91 Jahre von Anna Dvořáková und 87 Jahre von Terezie Podhorná",
        text: "Trotz harter Feldarbeit erreichten viele Altansässige ein hohes Alter: Ausgedinger Petr Dvořák starb 1878 mit 84 Jahren, Josef Dvořák (*1857) mit 83 Jahren, seine Frau Anna geb. Kouřilová (*1857, †1949) mit 91 Jahren und 5 Monaten, und Terezie Podhorná (*1834) aus Nr. 110 unterschrieb 1921 den Zählbogen mit 87 Jahren.",
        actionLabel: "Profil von Josef Dvořák (*1857)"
      },
      "fact-8": {
        tag: "Jüngste Einwohnerin 1921",
        title: "Die 18 Tage alte Jitřenka und die Handarbeitslehrerin auf dem Erbgericht Nr. 7",
        text: "Am Stichtag der Volkszählung, dem 15. Februar 1921, war die jüngste Bewohnerin des Ortes die 18 Tage alte Jitřenka Kvapilová (*28. 1. 1921), die im Erbgericht Nr. 7 im Frauenhaushalt ihrer Großmutter Mathilda Ptáčková und ihrer Tante Eliška Ptáčková, Industriallehrerin, lebte.",
        actionLabel: "Erbgericht Nr. 7 öffnen"
      },
      "fact-9": {
        tag: "Treuer Dienst",
        title: "Knecht Jan Kamler (*1861, †1940) – Ein ganzes Leben auf demselben Hof",
        text: "Der ledige Pferdeknecht Jan Kamler (*20. 2. 1861 in Rowenz / Rovensko) diente 1921 auf dem Hof Nr. 29 bei der Familie Dvořák und blieb dort bis zu seinem Tod im Jahr 1940 (im Alter von 79 Jahren). Sein Sterbeeintrag in der Matrik Zá II 10 half nach hundert Jahren, seinen Namen im schwer lesbaren Zählbogen eindeutig zu entziffern.",
        actionLabel: "Hof Nr. 29 öffnen"
      },
      "fact-10": {
        tag: "Industriestadt Mährisch Schönberg",
        title: "Garnbleicher und Weberinnen bei Eduard Oberleithner & Söhne",
        text: "Die Volkszählung 1921 zeigt, dass der Weiler Dreihofen (Medelské) und die Häusler in Lomigsdorf (Dlouhomilov) eng mit dem Textilimperium „Eduard Oberleithner & Söhne in Mährisch Schönberg“ verbunden waren – täglich pendelten Bleicher und Weberinnen der Familien Minář, Nejedlý und Podhorný zu Fuß oder mit der Bahn ab Brünles dorthin.",
        actionLabel: "Dreihofen / Medelské Nr. 1 öffnen"
      },
      "fact-11": {
        tag: "Herkunft der Ortsnamen (Hosák–Šrámek)",
        title: "Was bedeuten die Namen Lomigsdorf (Dlouhomilov), Benke (Benkov), Dreihofen (Medelské), Brünles (Brníčko) und Šebená?",
        text: "Alle Siedlungen im Tal haben mittelalterlichen Ursprung (13.–14. Jh.): Dlouhomilov (1356 Dluhomilow) bedeutet „Hof des Dlúhomil“; das deutsche Lomigsdorf entstand durch lautliche Eindeutschung. Benke / Benkov (1385) bedeutet „Gut des Benek“ (Kurzform von Benedikt/Beneš). Medelské (1385 Medilsk) geht auf alttschechisch medlý (karger, steiniger Boden) zurück, während der deutsche Name Dreihofen („Drei Höfe“) die drei ursprünglichen Bauernhöfe beschrieb. Brünles / Brníčko (1350 Brnieczko) stammt von brn („Sumpf, Lehm“), Ullischen / Olešná von Erlenbeständen und der Berg Šebená vom „Galgenberg“ (Šibenná hora), der alten Richtstätte der Herrschaft.",
        actionLabel: "Älteste Karte betrachten (1716)"
      },
      "fact-12": {
        tag: "Landtafel 1356–1447",
        title: "60 Mark Groschen für Hof, sechs Hufen und Schenke: Was steht wörtlich im Eintrag von 1356?",
        text: "Der älteste Eintrag über Dlouhomilov in der Olmützer Landtafel (ZDO I, Nr. 482, 1356) lautet wörtlich: „Andreas de Dluhomilow vendidit Arnoldo de Dluhomilow pro LX marcis grossorum vnam Curiam VI laneos vnam Tabernam hereditarie...“ – der erbliche Verkauf eines Freihofs, von sechs Hufen und einer Schenke für 60 Mark Groschen. Zwei Einträge weiter (Nr. 484) verkauft Pešek von Dlouhomilov einen zweiten Hof, eine Mark Zins und eine Wassermühle (molendinum) für 60 Mark; 1368 überträgt Bohuněk von Kohusov zwei Schenken, neun Gärtnerstellen (curticulae), fünf Gärten, Mühle und Wald (Nr. 1124). Im Jahr 1385 erscheinen Benke (Benkow) und Medelské / Dreihofen (Medilsk) erstmals gemeinsam als Wittum von 24 Schock Groschen für Margaretha, Gattin des Nikolaus von Brünles genannt Morava (ZDO IV, Nr. 543). Schank- und Metzgerrecht bewahrten über fünf Jahrhunderte Kontinuität: von mittelalterlichen Tabernen (1356–1368) über das Erbgericht (1602) bis zu Gasthaus und Schmiede in Nr. 7 im 19.–20. Jahrhundert.",
        actionLabel: "Erbgericht Nr. 7 öffnen"
      },
      "fact-13": {
        tag: "Urbar 1585 & Grundbuch 1617–1946",
        title: "Die Sprachgrenze von 1585 und sieben Generationen Schön auf dem Hof Benke Nr. 5",
        text: "Der Auszug aus dem Urbar der Herrschaft Hohenstadt von 1585 (URB00015585) belegt die deutsch-tschechische Sprachgrenze bereits vor dem Dreißigjährigen Krieg: In Lomigsdorf/Dlouhomilov (22 Wirte, S. 82–84; u. a. Vokšan, Vlček, Vachutka, Sládek, Pospíšil) und Dreihofen/Medelské (8 Inhaber auf 5 Stellen samt Mitbesitz, S. 80–81; u. a. Kouřil, Horníček, Šumerda) überwogen im Verhältnis 28 : 2 tschechische Namen, während in Benke (Venkov, S. 47, 10 Wirte unter Erbrichter Mikuláš) bereits Namen wie Knaur, Khaur/Kauer, Šmid und Hayndl standen. Über die Grundbücher (Lomigsdorf ab 1584, Inv.-Nr. 164; Benke 1617–1879), Kirchenbücher in Dubitzko (Zá IV 1 ab 1617) und Hohenstadt (Zá I 1: 1651 Pavel Dvořák in Lomigsdorf, 1658 Martin Schön in Benke) sowie das Lahnregister 1669–1671 (MZA D 1, Sign. 141, Fol. 79: Tobias Schön) lässt sich auf Benke Nr. 5 eine ununterbrochene Reihe von sieben Generationen Schön verfolgen – vom Kauf durch Georg Schön am 5. 2. 1696 um 175 Mark (Fol. 210) über Johann Schöns Hochzeit mit Eleonora Dvořáková aus Lomigsdorf (21. 8. 1837) bis zur Volkszählung 1921 und Aussiedlung am 11. 7. 1946.",
        actionLabel: "Hof Benke Nr. 5 öffnen"
      },
      "fact-14": {
        tag: "Lahnenregister & Rektifikation 1657–1756",
        title: "27 ansässige Wirte im Jahr 1677, null Ödungen und die Spur von „Dreihofen“ in den Fassionen",
        text: "Die vollständige paläographische Transkription des am 13. 10. 1677 geschlossenen Lahnenregisters der Herrschaft Hohenstadt (MZA Brünn, D 1, Sign. 141, Fol. 76r–77v) bewies, dass in Lomigsdorf (27 Wirte) und Benke (10 Wirte, Fol. 79r) trotz des Dreißigjährigen Krieges keine einzige Ödung (0 Ödungen) bestand. Alle 27 Wirte – 1 Erbrichter (Ilia Zaoralný, vor Jíra Blahařek(?), 90 Metzen), 18 Bauern (u. a. Hanß Dvořák vor Pavel 60 Mz., Mikuláš Jílek vor Jan 40 Mz., Martin Vachutka vor Jan mit 6 Pferden) und 8 Häusler ohne Acker – bestellten 830 Metzen Ackerland (6 Lahnen 3 1/4 Achtel), wobei 18 von 27 Stellen seit 1656–1657 den Wirt wechselten. Abgleiche mit D 2 (1749–1756) und D 3 (1750) zeigen zudem, dass kein herrschaftlicher Meierhof in Dreihofen lag: Die drei Ursprungshöfe gingen steuerlich in Lomigsdorf auf und lebten in Flurbezeichnungen ('ein stückl bey Medelsker grundt', 'u Medla gruntes mihle', 'w Medelsky Strani') bis 1770 fort, während die hiesigen Befreytten Bauern Robot in Geld ablösten und Leinengarn für den Schönberger Markt spannen.",
        actionLabel: "Bauerngut Nr. 29 öffnen (Dvořák 1657/1677)"
      },
      "fact-15": {
        tag: "Ladungsbücher & Landtafel 1463–1589",
        title: "Büttel Duchek auf der Mühle bei Schildberg, Pferdeknecht Števík & „abgebrochene Burg Brünles“",
        text: "Die systematische Auswertung der Mährischen Ladungsbücher (Libri citationum) und Originalfolien der Olmützer Landtafel (MZA Brünn, Bestand A 3) beleuchtet den Übergang von den Tunkl zu den Herren von Boskowitz und Žerotín: 1463–1466 klagten Katharina von Wildenberg und ihr Bürge Výšek von Střítež gegen Jan Tunkl um den Erbhof in Dlouhomilov ('dvuor Dluhomiluov', Bürgschaft 80 Schock); 1490 (ZDO XIII, Nr. 84) übertrugen die Tunkl Lomigsdorf, Dreihofen und Benke ausdrücklich 'se všemi rychtami zákupními' (mit allen Kauf-Erbgerichten, 112 Jahre vor 1602); und 1492 klagten Jiřík und Jindřich Tunkl wegen zweier entlaufener bzw. rechtswidrig entlassener Untertanen – des Pferdeknechts (rataj) Jan Števík (KP VI, Nr. 1775) und des herrschaftlichen Büttels (pochop) Duchek, der von seinem Gut in eine Mühle bei Schildberg (Šilperk/Štíty) floh und eine wüste Hufe hinterließ (KP VI, Nr. 1962). 1510 und am 24. Juni 1513 (Kniha XVII, Fol. 10r & 21v) gelangte das Dorf bereits 'mit Kapelle' (wes dluhomilow s kaplu) unterhalb der abgebrochenen Burg Brünles (hrad Brniczko zborzenj) an Ladislav von Boskowitz und vererbte sich über Jan von Boskowitz († 1589, Auftraggeber des Urbars 1585) und Kunhuta († 1590) an Ladislav Velen von Žerotín.",
        actionLabel: "Hof Nr. 29 öffnen (dvořáci & Tunkl-Zeit)"
      },
      "fact-16": {
        tag: "Matriken Dubitzko & Rohle 1653–1786",
        title: "Trauzeuge Pavel Dvořák mit Sohn Hanß (1654), Vaterskorrektur 1763 & Benker Richter Jan Schön",
        text: "Die systematische Auswertung der ältesten Matriken von Dubitzko (Zá IV 1–2) und Rohle (Zá VIII 1, 6, 10, 14, 15) berichtigte drei Annahmen: (1) Bereits am 27. 9. 1654 (Dubitzko Zá IV 1, S. 313) bezeugten „Pawel Dworžák z Dlauhomilowa a Hanß geho Syn“ gemeinsam die Trauung des Jiřík aus Dreihofen („z Medelskýho“) – ein direkter Matrikenbeleg für Vater und Sohn vor dem Lahnregister 1657/1677 auf Nr. 29 –, und schon 1653 wurde direkt „w Dlauhomilowie“ getraut neben Benkes Richter Jan Schön (Sskůn). (2) Die Taufen von Lomigsdorf und Benke endeten in Dubitzko nicht 1762, sondern mit einer Sonderabteilung 1695–1722 (Zá IV 2, S. 948–1095) und gingen bereits 1720 an Rohle über, wo Index Zá VIII 14 über dreißig Dvořák-Taufen verzeichnet. (3) Der Taufeintrag vom 9. 9. 1763 für Paulus Dworžak (Rohle Zá VIII 1, S. 405) widerlegte Jiří als Vater – es war Bauer Pavel Dvořák d. Ä. & Barbara; während Lomigsdorf/Dreihofen 1786 eigene Matriken Zá II erhielten (11 Trauungen 1786–1787 inkl. Bruder des Lokalisten Joseph Schubert auf Erbgericht Nr. 7), blieb Benke bis 1932 bei Rohle.",
        actionLabel: "Profil Petr Dvořák (*1793) öffnen"
      },
      "fact-17": {
        tag: "Pfarrhof Nr. 2 & Kirchengeschichte (1707–1968)",
        title: "Ein Brief von Émile Zola ans Pfarrhaus, 64.800 Ziegel für die Kirche & die letzte Fronleichnamsprozession",
        text: "Die Auswertung von 15 Hochschulschriften und kirchlichen Beständen enthüllte bewegende Details zu Kirche Nr. 1 und Pfarrhof Nr. 2: Für den Barockbau von 1707 wurden 64.800 Ziegel gebrannt; von vier Glocken (1910) überstand nur die Glocke von 1752 den Ersten Weltkrieg (am 28. 2. 1918 wurden zudem 21 Orgelpfeifen requiriert), und sieben gebürtige Priester stammten aus dem Dorf (inkl. P. Alois Dvořák 1830–1908). Von 1891–1907 lebte im kalten Pfarrhaus mit dem 24 m tiefen Felsbrunnen der Dichter-Pfarrer P. František Kužela (Adam Chlumecký): Er gründete 1897 den St.-Rochus-Verein und 1899 die tschechische Pfarrchronik (bis 1986), schlichtete deutsch-tschechische Kirchenbankstreite mit Olleschau und erhielt sogar einen persönlichen Glückwunschbrief von Émile Zola! Sein Nachfolger P. František Reichel (1934–1964) antwortete 1958 dem Bezirksvorsitzenden auf die Frage nach seiner Friedensarbeit knapp, er arbeite „auf dem Feld“, und hielt 1959 als eine der letzten beiden Pfarreien im ganzen Bezirk Šumperk eine öffentliche Fronleichnamsprozession ab.",
        actionLabel: "Pfarrhof Nr. 2 öffnen"
      },
      "fact-18": {
        tag: "Onomastik & Urkunden 1266–1398",
        title: "Woher kam und wann lebte Gründer Dlúhomil? Sprachspur aus der Hanna, Querstreifen über die Bukovická hora & 32 Landtafel-Einträge",
        text: "Historische Lautlehre in Verbindung mit den mährischen Urkundenbüchern (CDM I–IX, RBM II) und allen 32 Einträgen im ersten Band der Olmützer Landtafel (ZDO I–X, 1356–1447) rekonstruierte die Gestalt des Ortsgründers: Der alttschechische zweigliedrige Name Dlúhomil („lange/beständig lieb“) war im 13. Jh. ein exklusiver Standesname des heimischen Adels. Die Lautreihe Dlúhomilov → hannakisch Dlóhomilov → kontrahiert Dlómilov → frühneuzeitlich deutsch Lomigsdorf beweist mittelmährische (hannakische) Mundart, während dvuor Dlúhomiluov / za dvuor v Dluhomile seinen freien Edelhof als Siedlungskern ausweist. Da dieser 1356 bereits erblich in drei Freihöfe geteilt war (darunter der dritte Hof der Witwe Čáslava → Wilhelm → Ondřej & Hyluš → Martin & Ctibor von Dlouhomilov 1365–1378 sowie der 1398 von Doman von Závořice an Proček von Busau/Wildenberg verkaufte Allodialhof in ZDO VI, Nr. 879), lebte Dlúhomil um 1240/1265–1295/1320 und vermaß das Dorf im letzten Drittel des 13. Jh. (um 1275–1300). Die Olmützer Urkunde von 1269 (CDM IV, S. 36 / RBM II, Nr. 672) zeigt vereint die Kolonisatoren aus der Süd-Hanna: Všebor & Hrabiše I. von Aussee/Švábenice (vgl. Hrabišín), die Vettern Wilhelm von Náměšť & Kojata von Drnovice (vgl. Kojišov = Kolšov westlich hinter der Bukovická hora, von wo ein alter Querstreifen über Studénky und Sluhoňov nach Dlouhomilov zog, während die Loučka bei Lesnice mündet) und Jägermeister Beneda von Dubitzko mit Sohn Wilhelm (Erbauer von Otaslavice in der Hanna und Patrone der Pfarre Dubitzko 1297, zu der Lomigsdorf bis 1720/1722 gehörte) – genau in deren hannakischem Hinterland zwischen Švábenice, Ivanovice na Hané, Soběbřichy und Olmütz vererbte sich der Name Dlúhomil (während der Königszeuge Dluhomil von Veselí 1267/1289 zum südböhmischen Veselí nad Lužnicí gehörte).",
        actionLabel: "Stabilen Kataster der Waldhufen (1834) öffnen"
      }
    }
  }
};


// Part 1: i18nData.comic, i18nData.people, i18nData.maps, i18nData.guide

i18nData.comic = {
  en: {
    title: "Chronicle of the Valley in Pictures: The Story of Dlouhomilov, Medelské & Benkov (1269–1949)",
    subtitle: "Fourteen illustrated scenes from the 1269 Olomouc charter and colonization map to the 20th century • Click any panel to enlarge",
    pages: {
      "page-0": {
        title: "Sheet I: Dawn of Colonization — Olomouc Castle Charter & Foothill Settlement Map (1269–1300)",
        subtitle: "From the granting of location charters at Olomouc Castle and departure through the Litovel Gate to clearing forest-hide villages from the Morava River and Dubicko to Dlouhomilov and Benkov",
        panels: {
          "panel-00a": {
            location: "Olomouc Castle • Přemyslid Palace & Litovel Gate",
            title: "Granting the Location Charter & Expedition from Haná",
            realPhotoTitle: "Hereditary Magistrate's Estate No. 7 — Administrative Successor to the Locator's Court",
            narrator: "An Olomouc Castle charter of 1269 (CDM IV, p. 36 / RBM II, No. 672) unites the lords of Švábenice/Úsov, cousins of Náměšť and Drnovice, and royal huntsman Beneda of Dubicko. From their Haná heartland set out founder Dlúhomil to lay out a forest-hide village beneath Brníčko Castle.",
            bubbles: [
              { speaker: "Royal Huntsman Beneda of Dubicko (1269)", text: "Take this sealed location charter for your journey! March out through the Litovel Gate northward from the Morava River and lay out new villages in our forest!" },
              { speaker: "Founder Dlúhomil of Haná", text: "The settlers are ready with plows, axes, and spades — past Dubicko and Kolšov we will push into the wooded valley beneath Šebená!" }
            ],
            sourceNote: "Olomouc Charter of 1269 (CDM IV, p. 36 / RBM II, No. 672) • Mírov Charter May 26, 1266 (RBM II, No. 517) • Hereditary Rychta No. 7.",
            actions: ["📖 Chapter I (Dlúhomil of Haná)", "🏛️ Hereditary Rychta (No. 7)", "⚙️ Mill at the Millrace (No. 3)"]
          },
          "panel-00b": {
            location: "Morava & Loučka Basins • From Dubicko & Kolšov to Dlouhomilov, Benkov & Hrabišín",
            title: "Map of Medieval Foothill Colonization & Marshes near Brníčko",
            realPhotoTitle: "1834 Stable Cadastre — Fan of Medieval Strip-Fields in Dlouhomilov Valley",
            narrator: "While the lowlands around Brníčko (Brně) were covered by extensive marshes, the main colonization stream pushed from Haná via Dubicko and Kolšov (with a branch to Sudkov) across Sluhoňov and Studénky into Dlouhomilov, then up through Olešná to Frankštát; a southern branch climbed via Rohle to Benkov, and lords of Úsov settled Hrabišín.",
            bubbles: [
              { speaker: "Colonists from Dubicko & Kolšov", text: "We skirt the marshes around Brně along dry terraces! Past Kolšov and Sluhoňov we lay out the hides at Dlouhomilov Mill and push on past Olešná toward Frankštát." },
              { speaker: "Settlers via Rohle & Úsov", text: "Another stream climbs from Dubicko via Rohle onto the upland plateau at Benkov, while the lords of Úsov settle neighboring Hrabišín!" }
            ],
            sourceNote: "Moravian Land Registers (ZDO I–X, 1356–1447) • Dubicko Parish (attested 1297) • Lords of Úsov & Drnovice (Kolšov).",
            actions: ["🗺️ 1834 Stable Cadastre", "🏘️ Medelské No. 3 (from 1385)", "⛪ Benkov Chapel"]
          }
        }
      },
      "page-1": {
        title: "Sheet II: Foundations of the Valley, the Church & Ancient Farmsteads (1356–1857)",
        subtitle: "From the first written mention beneath Brníčko Castle through the Baroque church to the oldest peasant lineages in the land registers",
        panels: {
          "panel-01": {
            location: "Brníčko & Valley of the Loučka Stream",
            title: "In the Shadow of Brníčko Castle & Three Neighboring Settlements",
            realPhotoTitle: "I. Military Survey (1764–1768) – Dlouhomilov, Medelské & Benkov",
            narrator: "In 1356, 'Dluhomilow' appears in the land records for the first time. In a narrow valley beneath Brníčko Castle lies the farming village of Dlouhomilov, to the north the hamlet of Medelské (Dreihofen), and high on the eastern ridge the upland settlement of Benkov (Benke).",
            bubbles: [
              { speaker: "Knight Beneš of Valdštejn (1356)", text: "Here in the valley beneath Brníčko Castle I enter the village of Dluhomilow into the land tables—the fields, forests, and pastures from the stream up to the ridge!" },
              { speaker: "People of the Valley", text: "Three neighboring settlements, one landscape—in the valley we clear the forest along the stream, while our neighbors in Benkov plow the stony upland fields." }
            ],
            sourceNote: "Moravian Land Tables (1356) • I. Military Survey (1764–1768).",
            actions: ["🗺️ Map of 1764", "📖 Chapter I of the Story", "⛪ Benkov Chapel"]
          },
          "panel-03": {
            location: "Dlouhomilov No. 1 (Church) & No. 2 (Rectory)",
            title: "Migration of the Parish & Birth of All Saints' Church",
            realPhotoTitle: "Parish Church of All Saints (No. 1) & Baroque Rectory (No. 2)",
            narrator: "For centuries, villagers walked to Dubicko for baptisms and weddings, and in 1763–1784 over the hill to Rohle. Between 1770 and 1784 they built the late Baroque Church of All Saints (No. 1) and the Catholic Rectory (No. 2), where parish registers Zá II 1–10 were kept.",
            bubbles: [
              { speaker: "Catholic Priest (1784)", text: "Anno Domini 1784 I open the first register of births, marriages, and deaths directly at the new Rectory No. 2 in Dlouhomilov!" },
              { speaker: "Residents of the Valley", text: "We no longer have to carry newborns through snowdrifts to Dubicko or Rohle—the bell of All Saints rings right over our village green." }
            ],
            sourceNote: "Registers of Dubicko (from 1617), Zábřeh (from 1649), Rohle (1763–1785) & Dlouhomilov Zá II 1 (from 1784) • NPÚ Monument No. 1 (ÚSKP 26886/8-865).",
            actions: ["⛪ Church No. 1", "🏛️ Baroque Rectory No. 2", "📖 Chapter II of the Story"]
          },
          "panel-04": {
            location: "Farmstead No. 29 (Dvořák) & Prague",
            title: "From the 1679 Land Register to a Lawyer in Prague",
            realPhotoTitle: "Protected Peasant Farmstead No. 29 (Dvořák Estate) & 1834 Cadastre",
            narrator: "In the 1679 land register for Dlouhomilov and Medelské (fol. 191), the section 'Farmstead of Pavel Dvořák' opens at No. 29. Nearly two centuries later, in the 1857 census, farmer Johann Dvořák (*1795) proudly records that his older son Jan (*1826) is studying law in Prague ('Jurist in Prag II', later JUDr.).",
            bubbles: [
              { speaker: "Johann Dvořák (*1795, Farmer at No. 29)", text: "Since 1679 our lineage has held this farmstead No. 29—my younger son Alois will take over the fields, and my older son Jan has gone to Prague to study law!" },
              { speaker: "Dr. Jan Dvořák (*1826)", text: "Even in Prague's lecture halls and courts of law, I remain a native of the Dlouhomilov farmstead No. 29." }
            ],
            sourceNote: "Land Register Dlouhomilov Inv. No. 164, fol. 191 (1679) • 1857 & 1869 Census of No. 29 • NPÚ Monument No. 29.",
            actions: ["🏡 Farmstead No. 29", "👤 Profile of Dr. Jan Dvořák (*1826)", "📜 1679 Land Register"]
          }
        }
      },
      "page-2": {
        title: "Sheet III: The Hereditary Magistrate's Estate, the 1878 Double Wedding & the Bludov Fire (1869–1907)",
        subtitle: "Life on the largest peasant estates, a dramatic wedding thirteen days before the father's death, and the union of two Dvořák branches",
        panels: {
          "panel-05": {
            location: "Hereditary Magistrate's Estate No. 7 & Farmstead No. 10",
            title: "Twenty-Three Souls at the Rychta & Full-Hide Peasant Estates",
            realPhotoTitle: "Former Hereditary Magistrate's Estate No. 7 (NPÚ Monument) on the Village Green",
            narrator: "In the 1869 census, the two-story Baroque Hereditary Magistrate's Estate (Rychta, No. 7) is a bustling agricultural court with 23 residents—the farmer's family, retirees in their dower rooms, stable hands, and maids. Nearby at No. 10, the Jílek (Gilek) and Šafář families farm another major estate.",
            bubbles: [
              { speaker: "Farmer at the Rychta No. 7", text: "Twenty-three people sit down to supper under the roof of the Rychta—from the retirees in the dower house to the stable hands by the horses and cattle!" },
              { speaker: "František Šafář (*1822, Medelské & No. 10)", text: "Our families—Merta, Pavlík, Jílek, Krobot, and Šafář—have held the large estates in the valley from generation to generation." }
            ],
            sourceNote: "1857–1921 Census of Dlouhomilov No. 7 & No. 10 • NPÚ Cultural Monument No. 7 (ÚSKP 51795/9-103).",
            actions: ["🏛️ Magistrate's Estate No. 7", "🏡 Farmstead No. 10 (Jílek & Šafář)", "👤 František Šafář (*1822)"]
          },
          "panel-06": {
            location: "Farmstead No. 24 (Kouřil), No. 22 (Dvořák) & All Saints' Church",
            title: "Double Wedding Thirteen Days Before the Father's Death",
            realPhotoTitle: "Protected Homestead No. 24 with Classicist Gate & Homestead No. 22",
            narrator: "At Estate No. 24, 59-year-old farmer František Kouřil (*1819) is dying of tuberculosis. To secure his daughters and the farmstead before his death, a double wedding takes place on July 29, 1878: sisters Anna (*1857) and Ludmila (*1855) Kouřilová marry brothers Josef and Karel Dvořák in the same hour. Thirteen days later, their father passes away.",
            bubbles: [
              { speaker: "František Kouřil (*1819, Farmer at No. 24)", text: "My strength is failing... Give your hands to the Dvořák brothers at the altar today, my daughters, so I may depart in peace knowing the farmsteads are in good hands." },
              { speaker: "Brothers Josef (*1857) & Karel (*1853) Dvořák", text: "We vow before God and before you, Father—we shall care for Anna, Ludmila, and both estates!" }
            ],
            sourceNote: "Marriage Register Zá II 7 & Death Register Zá II 9 (July/August 1878) • NPÚ Monuments No. 24 & No. 22.",
            actions: ["🏡 Estate No. 24 (Kouřil)", "🏡 Estate No. 22 (Dvořák)", "👤 Josef Dvořák (*1857)"]
          },
          "panel-07": {
            location: "Bludov No. 113 & Dlouhomilov No. 29",
            title: "Heroic Sacrifice in the Bludov Fire & The 1907 Wedding at No. 29",
            realPhotoTitle: "1921 Census Sheet of Farmstead No. 29 (Josef & Amálie Dvořák and Widow Františka Motyková)",
            narrator: "Wheelwright Antonín Motyka of Bludov No. 113 ran into the burning Bludov Chateau stables to save the manor cattle and perished in the flames. On July 15, 1907, his 19-year-old daughter Amálie Motyková (*1888) marries Josef Dvořák (*1879 from No. 22) at Farmstead No. 29, uniting both Dvořák branches; the wedding is officiated by kinsman Rev. Alois Dvořák.",
            bubbles: [
              { speaker: "Rev. Alois Dvořák (Retired Parish Priest, July 15, 1907)", text: "By this marriage of Josef from No. 22 and Amálie at No. 29, both old branches of the Dvořák family are joined into one!" },
              { speaker: "Widow Františka Motyková (*1844, Retiree at No. 29)", text: "My husband Antonín gave his life saving cattle in the burning chateau stables in Bludov—and here at No. 29 with my daughter Amálie I have found a second home." }
            ],
            sourceNote: "Marriage Register Zá II 7, fol. 38 (July 15, 1907) • 1921 Census of No. 29 • Family Chronicle.",
            actions: ["🏡 Farmstead No. 29", "👤 Josef Dvořák (*1879)", "📜 1921 Census Sheet No. 29"]
          }
        }
      },
      "page-3": {
        title: "Sheet IV: Protected Folk Architecture & Stories of Estates No. 8, No. 5 & No. 43",
        subtitle: "Brick gables, pillared arcades (žudry), timbered granaries, and everyday life in the valley (1834–1925)",
        panels: {
          "panel-cp8": {
            location: "Dlouhomilov No. 8 (Lower Village)",
            title: "Country Homestead No. 8: From the Braný Farmers to the Postwar Generation",
            realPhotoTitle: "1921 Census Sheet of House No. 8 (Braný, Dvořák & Krestin Families)",
            narrator: "In the lower village, House No. 8 stood as a neighbor to the large estates. In February 1921, three households lived under its roof: 75-year-old retired farmer Antonín Braný (*1845) with his housekeeper, widowed agricultural worker Jan Dvořák (*1865) with his daughters, and field watchman František Krestin (*1894) from Chromeč.",
            bubbles: [
              { speaker: "Retiree Antonín Braný (*1845, No. 8)", text: "For over seventy years I have watched the lower village from No. 8—today three households share our roof in peace." },
              { speaker: "Worker Jan Dvořák (*1865) & Watchman František Krestin (*1894)", text: "Whether working in the fields or guarding the parish pastures, we each sign our own household sheet for the 1921 census!" }
            ],
            sourceNote: "1921 Census of Dlouhomilov No. 8 (Apartments 1–3, Sn. 0522–0525) • Register Zá II 10.",
            actions: ["🏡 Homestead No. 8", "📜 1921 Census Sheet (No. 8)"]
          },
          "panel-cp5": {
            location: "Dlouhomilov No. 5 (Cultural Monument ÚSKP 27339/8-866)",
            title: "Farmstead No. 5 with Pillared Arcade: The Vainlich & Koš Families",
            realPhotoTitle: "Protected Homestead No. 5 with Arcade (Žudr) & 1921 Census Sheet",
            narrator: "Protected Farmstead No. 5 with its classicist arcade (žudr) and stucco gable is a gem of North Moravian architecture. Parish registers record the tragic winter of February 1898, when 30-year-old farmer's wife Rosalie Vainlichová and her infant son died here three days apart. In 1921, widow Marie Košová (*1872) farmed the estate while her sons studied locksmithing and attended secondary school in Šumperk.",
            bubbles: [
              { speaker: "Parish Priest (Register Zá II 10, Feb 1898)", text: "Lord, grant eternal peace to young Rosalie Vainlichová and her newborn son František at Farmstead No. 5..." },
              { speaker: "Marie Košová (*1872, Farmer at No. 5 in 1921)", text: "Even without a husband, we keep the farmstead and 14 head of cattle in order—while František trains as a locksmith and young Pepík commutes to the Šumperk secondary school!" }
            ],
            sourceNote: "NPÚ Monument ÚSKP 27339/8-866 • Register Zá II 10 (fol. 142, 179) • 1921 Census of No. 5.",
            actions: ["🏛️ Protected Farmstead No. 5", "📜 1921 Census Sheet (No. 5)"]
          },
          "panel-cp43": {
            location: "Dlouhomilov No. 43 (Cultural Monument ÚSKP 33784/8-870)",
            title: "Homestead on the Slope No. 43: Timbered Granary & Gravity Water Conduit",
            realPhotoTitle: "Protected Homestead No. 43 with Timbered Granary (1836) & 1921 Census Sheet",
            narrator: "High on the eastern slope above the valley stands Homestead No. 43 (built 1836) with a rare timbered two-story granary daubed with clay and its own wooden gravity water conduit bringing hillside spring water into the yard. In 1921, widowed farmer Terezie Jílková (*1864) farmed here alongside her parents, retirees František (*1856) and Anna Ptáček.",
            bubbles: [
              { speaker: "Retiree František Ptáček (*1856, No. 43)", text: "Our wooden conduit brings pure spring water straight from the hillside into the yard, and the 1836 clay-daubed granary keeps the grain safe from fire!" },
              { speaker: "Farmer Terezie Jílková (*1864, No. 43)", text: "With my daughters Anežka and Marie and farmhand František Krobot, we work the steep fields above the village just as our ancestors did in 1834." }
            ],
            sourceNote: "NPÚ Monument ÚSKP 33784/8-870 • 1834 Stable Cadastre • 1921 Census of No. 43.",
            actions: ["🏛️ Protected Homestead No. 43", "📜 1921 Census Sheet (No. 43)"]
          }
        }
      },
      "page-4": {
        title: "Sheet V: Village Craftsmen, the Language Border & 163 Years in One House (1906–1949)",
        subtitle: "Blacksmiths at No. 110, yarn bleachers from Medelské, German neighbors in Benkov, and five generations at Estate No. 22",
        panels: {
          "panel-08": {
            location: "Smithy No. 110, Cottage No. 46 & Hamlet of Medelské No. 1",
            title: "Ringing Anvils at Smithy No. 110 & Yarn Bleachers from Medelské",
            realPhotoTitle: "1921 Census Sheets of Smithy No. 110 & Medelské No. 1",
            narrator: "Alongside the large farmers lived the craftsmen and factory workers: at Smithy No. 110 master blacksmith František Berka (*1866) shoed horses with his son Jan, at No. 46 bricklayer Jan Dvořák (*1873) lived with his parents, and from Medelské No. 1 the Minář family walked daily to the Oberleithner bleachery and weaving mills in Šumperk.",
            bubbles: [
              { speaker: "Master Blacksmith František Berka (*1866, No. 110)", text: "Keep the forge glowing, Jan! The farmers from Dlouhomilov and Medelské need their plows sharpened and horses shod before spring sowing." },
              { speaker: "Yarn Bleacher Jan Minář (*1861, Medelské No. 1)", text: "And we from the hamlet of Medelské head out at dawn to the Eduard Oberleithner bleachery and weaving mill in Šumperk!" }
            ],
            sourceNote: "1900, 1910 & 1921 Census of No. 110, No. 46 & Medelské No. 1–2 (ZAO Opava).",
            actions: ["🔨 Smithy No. 110 (Berka)", "🏡 Medelské No. 1 (Minář)", "👤 František Berka (*1866)"]
          },
          "panel-09": {
            location: "Upland Settlement of Benkov (Benke) & Language Border (1906)",
            title: "Czech Valley & German Ridge: Neighbors Across the Language Border",
            realPhotoTitle: "Chytil's 1906 Nationality Map – Red Czech Dlouhomilov & Green German Benkov",
            narrator: "Chytil's 1906 nationality map clearly shows the historical language border: Dlouhomilov and Medelské in the valley are Czech (red), while upland Benkov (Benke) on the plateau is German (green). Yet both communities shared the same parish church of All Saints, exchanged children on custom ('handl') to learn both languages, and were united into one municipality in 1960.",
            bubbles: [
              { speaker: "Neighbor from Benkov (Benke)", text: "Up on the ridge in Benke we speak German, and around St. Anthony's Chapel stand the farmsteads of the Kauer, Heger, Rössner, and Blaschke families." },
              { speaker: "Neighbor from Dlouhomilov", text: "And on Sunday morning we all meet together at All Saints' Church in Dlouhomilov—good neighbors across the language border!" }
            ],
            sourceNote: "Chytil's Nationality Map of Moravia (1906) • 1834 Stable Cadastre • Registers for Benkov.",
            actions: ["⛪ Chapel of St. Anthony in Benkov", "🗺️ 1906 Nationality Map", "📖 Chapter VIII of the Story"]
          },
          "panel-12": {
            location: "Farmstead No. 22 & Valley of Dlouhomilov, Medelské & Benkov",
            title: "163 Years Under the Same Roof & The Coat of Arms With Apple Blossoms",
            realPhotoTitle: "Protected Farmstead No. 22 (Village Conservation Zone ÚSKP 2350) & Municipal Coat of Arms",
            narrator: "On May 29, 1949, 91-year-old retiree Anna Dvořáková née Kouřilová (*1857) passes away at Farmstead No. 22, closing a documented 163-year era (1786–1949) of the Dvořák family under the exact same house number. In 2004, the municipal coat of arms with crossed spades, a golden colter, and two apple blossoms symbolically united Dlouhomilov, Medelské, and Benkov.",
            bubbles: [
              { speaker: "Anna Dvořáková née Kouřilová (*1857, †1949 at No. 22)", text: "Since Pavel Dvořák's wedding in 1786 until my ninety-first year in 1949—for 163 years our family never left house number 22." },
              { speaker: "Voice of the Valley Chronicle", text: "Crossed spades, a golden plow colter, and two apple blossoms in the coat of arms forever preserve the memory of all generations of Dlouhomilov, Medelské, and Benkov." }
            ],
            sourceNote: "Register Zá II 10 (1862–1949) • REKOS Decree No. 37 (2004) • NPÚ Monument No. 22.",
            actions: ["🏡 Farmstead No. 22 (163 Years)", "✨ 13 Archival Discoveries", "👥 Inhabitants Registry"]
          }
        }
      }
    }
  },
  de: {
    title: "Talchronik in Bildern: Die Geschichte von Lomigsdorf (Dlouhomilov), Dreihofen (Medelské) & Benke (Benkov) (1269–1949)",
    subtitle: "Vierzehn illustrierte Szenen von der Olmützer Urkunde und Kolonisationskarte bis ins 20. Jahrhundert • Klick zum Vergrößern",
    pages: {
      "page-0": {
        title: "Bogen I: Beginn der Besiedlung — Olmützer Burgurkunde & Kolonisationskarte (1269–1300)",
        subtitle: "Von der Verleihung der Lokationsurkunden auf der Olmützer Burg und dem Aufbruch durch das Littauer Tor bis zur Gründung der Waldhufendörfer zwischen March, Dubitzko, Aussee und Lomigsdorf",
        panels: {
          "panel-00a": {
            location: "Olmützer Burg • Přemyslidenpalast & Littauer Tor",
            title: "Verleihung der Lokationsurkunde & Aufbruch aus der Hanna",
            realPhotoTitle: "Erbgericht Nr. 7 — Nachfolger des mittelalterlichen Lokatorenhofes",
            narrator: "Eine Olmützer Burgurkunde von 1269 (CDM IV, S. 36 / RBM II, Nr. 672) vereint die Herren von Švábenice/Aussee, Vettern von Náměšť und Drnovice sowie den Jägermeister Beneda von Dubitzko. Aus ihrem hannakischen Hinterland brach Gründer Dlúhomil auf, um im Tal unter der Burg Brünles das Waldhufendorf anzulegen.",
            bubbles: [
              { speaker: "Königlicher Jägermeister Beneda von Dubitzko (1269)", text: "Nehmt diese gesiegelte Lokationsurkunde mit auf den Weg! Zieht durch das Littauer Tor von der March nach Norden und legt neue Dörfer in unserem Urwald an!" },
              { speaker: "Gründer Dlúhomil aus der Hanna", text: "Die Siedler stehen mit Pflügen, Äxten und Spaten bereit – über Dubitzko und Kolšov dringen wir bis ins Waldtal unter der Šebená vor!" }
            ],
            sourceNote: "Olmützer Urkunde von 1269 (CDM IV, S. 36 / RBM II, Nr. 672) • Mürauer Urkunde 26. 5. 1266 (RBM II, Nr. 517) • Erbgericht Nr. 7.",
            actions: ["📖 Kapitel I (Dlúhomil aus der Hanna)", "🏛️ Erbgericht (Nr. 7)", "⚙️ Mühle am Mühlgraben (Nr. 3)"]
          },
          "panel-00b": {
            location: "Einzugsgebiet von March & Loučka • Von Dubitzko & Kolšov bis Lomigsdorf, Benke & Rabenseifen",
            title: "Karte der mittelalterlichen Kolonisation & der Sümpfe bei Brünles",
            realPhotoTitle: "Stabiler Kataster 1834 — Fächer der mittelalterlichen Hufen im Tal von Lomigsdorf",
            narrator: "Während die Auen bei Brünles (Brně) von ausgedehnten Sümpfen bedeckt waren, drang der Hauptstrom der Kolonisation aus der Hanna über Dubitzko und Kolšov (mit Abzweigung nach Sudkov) über Sluhoňov und Studénky nach Lomigsdorf vor und weiter über Olešná Richtung Frankstadt; ein südlicher Zug stieg über Rohle nach Benke hinauf, während die Herren von Aussee Rabenseifen (Hrabišín) besiedelten.",
            bubbles: [
              { speaker: "Kolonisten aus Dubitzko & Kolšov", text: "Die Sümpfe bei Brně umgehen wir über die trockenen Terrassen! Hinter Kolšov und Sluhoňov vermessen wir die Hufen an der Mühle von Lomigsdorf und ziehen über Olešná weiter Richtung Frankstadt." },
              { speaker: "Siedler bei Rohle & Aussee (Úsov)", text: "Ein zweiter Zug steigt von Dubitzko über Rohle auf das Hochplateau nach Benke, und die Herren von Aussee besiedeln das benachbarte Rabenseifen (Hrabišín)!" }
            ],
            sourceNote: "Mährische Landtafel (ZDO I–X, 1356–1447) • Pfarre Dubitzko (belegt 1297) • Herren von Aussee & Drnovice (Kolšov).",
            actions: ["🗺️ Stabiler Kataster (1834)", "🏘️ Dreihofen / Medelské Nr. 3 (ab 1385)", "⛪ Kapelle in Benke"]
          }
        }
      },
      "page-1": {
        title: "Bogen II: Die Wurzeln des Tals, die Kirche & die ältesten Stammhöfe (1356–1857)",
        subtitle: "Von der ersten urkundlichen Erwähnung unter der Burg Brünles über die Barockkirche bis zu den ältesten Bauerngeschlechtern in den Grundbüchern",
        panels: {
          "panel-01": {
            location: "Burg Brünles (Brníčko) & Tal des Loučka-Baches",
            title: "Im Schatten der Burg Brünles & Drei Nachbarsiedlungen",
            realPhotoTitle: "I. Josephinische Landesaufnahme (1764–1768) – Lomigsdorf, Dreihofen & Benke",
            narrator: "Im Jahr 1356 wird „Dluhomilow“ erstmals in der Mährischen Landtafel genannt. Im engen Tal unter der Burg Brünles (Brníčko) liegt das Bauerndorf Lomigsdorf (Dlouhomilov), nördlich der Weiler Dreihofen (Medelské) und hoch auf dem östlichen Kamm das Höhendorf Benke (Benkov).",
            bubbles: [
              { speaker: "Ritter Beneš von Waldstein (1356)", text: "Hier im Tal unter der Burg Brünles lasse ich das Dorf Dluhomilow in die Landtafel eintragen – samt Äckern, Wäldern und Weiden vom Bach bis auf den Kamm!" },
              { speaker: "Bewohner des Tals", text: "Drei Nachbarsiedlungen, eine Heimat – im Tal roden wir den Wald längs des Baches, während unsere Nachbarn oben in Benke die steinigen Höhenfelder pflügen." }
            ],
            sourceNote: "Mährische Landtafel (1356) • I. Josephinische Landesaufnahme (1764–1768).",
            actions: ["🗺️ Karte von 1764", "📖 Kapitel I der Chronik", "⛪ Kapelle in Benke (Benkov)"]
          },
          "panel-03": {
            location: "Lomigsdorf Nr. 1 (Kirche) & Nr. 2 (Pfarrhof)",
            title: "Die Wanderung der Pfarre & Der Bau der Allerheiligenkirche",
            realPhotoTitle: "Pfarrkirche Allerheiligen (Nr. 1) & Barocker Pfarrhof (Nr. 2)",
            narrator: "Jahrhundertelang gingen die Talbewohner zu Taufen und Trauungen nach Dubitzko (Dubicko) und 1763–1784 über den Berg nach Rohle. Zwischen 1770 und 1784 errichteten sie die spätbarocke Allerheiligenkirche (Nr. 1) und den Pfarrhof (Nr. 2), wo fortan die Matriken Zá II 1–10 geführt wurden.",
            bubbles: [
              { speaker: "Katholischer Geistlicher (1784)", text: "Anno Domini 1784 eröffne ich die erste Geburts-, Trauungs- und Sterbematrik direkt im neuen Pfarrhof Nr. 2 in Lomigsdorf!" },
              { speaker: "Bewohner des Tals", text: "Endlich müssen wir die Neugeborenen im Winter nicht mehr durch Schneewehen nach Dubitzko oder Rohle tragen – die Glocke von Allerheiligen läutet über unserem Dorfplatz." }
            ],
            sourceNote: "Matriken Dubitzko (ab 1617), Hohenstadt (ab 1649), Rohle (1763–1785) & Lomigsdorf Zá II 1 (ab 1784) • Kulturdenkmal Nr. 1 (ÚSKP 26886/8-865).",
            actions: ["⛪ Kirche Nr. 1", "🏛️ Barocker Pfarrhof Nr. 2", "📖 Kapitel II der Chronik"]
          },
          "panel-04": {
            location: "Bauerngut Nr. 29 (Dvořák) & Prag",
            title: "Vom Grundbuch 1679 zum Doktor der Rechte in Prag",
            realPhotoTitle: "Denkmalgeschütztes Bauerngut Nr. 29 (Hof Dvořák) & Kataster 1834",
            narrator: "Im Grundbuch von 1679 für Lomigsdorf und Dreihofen (Fol. 191) beginnt auf Nr. 29 der Abschnitt „Grunt Pawla Dworzaka“. Fast zwei Jahrhunderte später, bei der Volkszählung 1857, lässt Bauer Johann Dvořák (*1795) stolz eintragen, dass sein älterer Sohn Jan (*1826) in Prag Jus studiert („Jurist in Prag II“, später JUDr.).",
            bubbles: [
              { speaker: "Johann Dvořák (*1795, Bauer auf Nr. 29)", text: "Seit 1679 hält unser Geschlecht diesen Hof Nr. 29 – der jüngere Sohn Alois übernimmt die Wirtschaft, und der ältere Jan studiert die Rechte in Prag!" },
              { speaker: "Dr. Jan Dvořák (*1826)", text: "Auch in den Prager Hörsälen und Gerichtsstuben bleibe ich ein Bauernsohn vom Stammhof Nr. 29 in Lomigsdorf." }
            ],
            sourceNote: "Grundbuch Lomigsdorf Inv.-Nr. 164, Fol. 191 (1679) • Volkszählung 1857 & 1869 Nr. 29 • Kulturdenkmal Nr. 29.",
            actions: ["🏡 Bauerngut Nr. 29", "👤 Profil Dr. Jan Dvořák (*1826)", "📜 Grundbuch 1679"]
          }
        }
      },
      "page-2": {
        title: "Bogen III: Das Erbgericht, die Doppelhochzeit von 1878 & der Brand von Blauda (1869–1907)",
        subtitle: "Das Leben auf den großen Bauerngütern, eine dramatische Trauung dreizehn Tage vor dem Tod des Vaters und die Verbindung zweier Linien Dvořák",
        panels: {
          "panel-05": {
            location: "Erbgericht Nr. 7 & Bauerngut Nr. 10",
            title: "Dreiundzwanzig Seelen im Erbgericht & die großen Ganzlahnerhöfe",
            realPhotoTitle: "Ehemaliges Erbgericht Nr. 7 (Kulturdenkmal) am Dorfplatz",
            narrator: "Bei der Volkszählung 1869 ist das zweigeschossige barocke Erbgericht (Rychta, Nr. 7) ein geschäftiger Wirtschaftshof mit 23 Bewohnern – der Bauernfamilie, den Ausgedingern, Pferdeknechten und Mägden. Unweit davon wirtschaften auf Nr. 10 die Familien Jílek (Gilek) und Šafář.",
            bubbles: [
              { speaker: "Bauer im Erbgericht Nr. 7", text: "Dreiundzwanzig Menschen sitzen unter dem Dach des Erbgerichts am Abendbrottisch – vom Ausgedinger bis zu den Knechten und Mägden bei den Pferden!" },
              { speaker: "František Šafář (*1822, Dreihofen & Nr. 10)", text: "Unsere Geschlechter – Merta, Pavlík, Jílek, Krobot und Šafář – halten die großen Höfe im Tal von Generation zu Generation." }
            ],
            sourceNote: "Volkszählung 1857–1921 Lomigsdorf Nr. 7 & Nr. 10 • Kulturdenkmal Nr. 7 (ÚSKP 51795/9-103).",
            actions: ["🏛️ Erbgericht Nr. 7", "🏡 Bauerngut Nr. 10 (Jílek & Šafář)", "👤 František Šafář (*1822)"]
          },
          "panel-06": {
            location: "Hof Nr. 24 (Kouřil), Nr. 22 (Dvořák) & Allerheiligenkirche",
            title: "Doppelhochzeit dreizehn Tage vor dem Tod des Brautvaters",
            realPhotoTitle: "Denkmalhof Nr. 24 mit klassizistischer Toreinfahrt & Hof Nr. 22",
            narrator: "Auf dem Hof Nr. 24 liegt der 59-jährige Bauer František Kouřil (*1819) an Tuberkulose im Sterben. Um seine Töchter und das Gut noch zu Lebzeiten versorgt zu wissen, findet am 29. Juli 1878 eine Doppelhochzeit statt: Die Schwestern Anna (*1857) und Ludmila (*1855) Kouřilová heiraten in derselben Stunde die Brüder Josef und Karel Dvořák. Dreizehn Tage später stirbt der Vater.",
            bubbles: [
              { speaker: "František Kouřil (*1819, Bauer auf Nr. 24)", text: "Meine Kräfte schwinden... Reicht heute den Brüdern Dvořák vor dem Altar die Hand, meine Töchter, damit ich in Frieden scheiden kann." },
              { speaker: "Brüder Josef (*1857) & Karel (*1853) Dvořák", text: "Wir geloben es vor Gott und vor Euch, Vater – wir werden für Anna, Ludmila und beide Höfe treu sorgen!" }
            ],
            sourceNote: "Trauungsmatrik Zá II 7 & Sterbematrik Zá II 9 (Juli/August 1878) • Kulturdenkmale Nr. 24 & Nr. 22.",
            actions: ["🏡 Hof Nr. 24 (Kouřil)", "🏡 Hof Nr. 22 (Dvořák)", "👤 Josef Dvořák (*1857)"]
          },
          "panel-07": {
            location: "Blauda (Bludov) Nr. 113 & Lomigsdorf Nr. 29",
            title: "Heldentod im Feuer von Blauda & Die Hochzeit von 1907 auf Nr. 29",
            realPhotoTitle: "Zählbogen 1921 des Hofes Nr. 29 (Josef & Amálie Dvořák und Witwe Františka Motyková)",
            narrator: "Der Wagnermeister Antonín Motyka aus Blauda (Bludov) Nr. 113 lief beim Brand des Schlosses Blauda in die brennenden Stallungen, um das herrschaftliche Vieh zu retten, und kam in den Flammen um. Am 15. Juli 1907 heiratet seine 19-jährige Tochter Amálie Motyková (*1888) auf Nr. 29 den Bauern Josef Dvořák (*1879 aus Nr. 22) und verbindet beide Linien Dvořák; getraut werden sie vom Verwandten P. Alois Dvořák.",
            bubbles: [
              { speaker: "P. Alois Dvořák (Pfarrer i. R., 15. 7. 1907)", text: "Durch diesen Ehebund von Josef aus Nr. 22 und Amálie auf Nr. 29 verbinden sich beide alten Zweige des Geschlechts Dvořák zu einer Familie!" },
              { speaker: "Witwe Františka Motyková (*1844, Ausgedingerin auf Nr. 29)", text: "Mein Mann Antonín gab in Blauda sein Leben, um das Vieh aus den brennenden Schlossställen zu retten – und hier auf Nr. 29 fand ich bei Tochter Amálie ein zweites Zuhause." }
            ],
            sourceNote: "Trauungsmatrik Zá II 7, Fol. 38 (15. 7. 1907) • Volkszählung 1921 Nr. 29 • Familienchronik.",
            actions: ["🏡 Bauerngut Nr. 29", "👤 Josef Dvořák (*1879)", "📜 Zählbogen 1921 Nr. 29"]
          }
        }
      },
      "page-3": {
        title: "Bogen IV: Denkmalgeschützte Volksarchitektur & Geschichten der Höfe Nr. 8, Nr. 5 & Nr. 43",
        subtitle: "Gemauerte Giebel, Pfeilerlaubengänge (Žudry), gezimmerte Speicher und der Alltag im Tal (1834–1925)",
        panels: {
          "panel-cp8": {
            location: "Lomigsdorf Nr. 8 (Unterdorf)",
            title: "Anwesen Nr. 8: Von den Bauern Braný bis zur Nachkriegsgeneration",
            realPhotoTitle: "Zählbogen 1921 des Hauses Nr. 8 (Familien Braný, Dvořák & Krestin)",
            narrator: "Im Unterdorf stand das Haus Nr. 8 in Nachbarschaft der großen Höfe. Im Februar 1921 lebten unter seinem Dach drei Haushalte: der 75-jährige pensionierte Landwirt Antonín Braný (*1845) mit seiner Wirtschafterin, der verwitwete Landarbeiter Jan Dvořák (*1865) mit seinen Töchtern sowie der Feldhüter František Krestin (*1894) aus Krumpisch (Chromeč).",
            bubbles: [
              { speaker: "Pensionist Antonín Braný (*1845, Nr. 8)", text: "Seit über siebzig Jahren blicke ich aus Nr. 8 auf das Unterdorf – heute teilen sich drei Haushalte friedlich unser Dach." },
              { speaker: "Arbeiter Jan Dvořák (*1865) & Feldhüter František Krestin (*1894)", text: "Ob bei der Feldarbeit oder beim Hüten der Gemeindefluren – jeder von uns unterschreibt ordentlich seinen Wohnungsbogen zur Volkszählung 1921!" }
            ],
            sourceNote: "Volkszählung 1921 Lomigsdorf Nr. 8 (Wohnungen 1–3, Aufn. 0522–0525) • Matrik Zá II 10.",
            actions: ["🏡 Anwesen Nr. 8", "📜 Zählbogen 1921 (Nr. 8)"]
          },
          "panel-cp5": {
            location: "Lomigsdorf Nr. 5 (Kulturdenkmal ÚSKP 27339/8-866)",
            title: "Denkmalhof Nr. 5 mit Laubengang: Die Geschlechter Vainlich & Koš",
            realPhotoTitle: "Denkmalgeschütztes Bauerngut Nr. 5 mit Laubengang (Žudr) & Zählbogen 1921",
            narrator: "Das denkmalgeschützte Bauerngut Nr. 5 mit seinem klassizistischen Vorlaubengang (Žudr) und Stuckgiebel ist ein Juwel nordmährischer Volksarchitektur. Die Matriken berichten vom tragischen Februar 1898, als hier binnen drei Tagen die 30-jährige Bäuerin Rosalie Vainlichová und ihr kleiner Sohn starben. 1921 führte die Witwe Marie Košová (*1872) den Hof mit 14 Stück Vieh, während ihre Söhne Schlosser lernten bzw. die Realschule in Mährisch Schönberg besuchten.",
            bubbles: [
              { speaker: "Seelsorger (Matrik Zá II 10, Feb. 1898)", text: "Herr, schenke der jungen Bäuerin Rosalie Vainlichová und ihrem neugeborenen Söhnchen František auf Nr. 5 die ewige Ruhe..." },
              { speaker: "Marie Košová (*1872, Bäuerin auf Nr. 5 im Jahr 1921)", text: "Auch als Witwe halte ich den Hof und 14 Stück Vieh in Ordnung – während František Schlosser lernt und der kleine Pepík in die Realschule nach Mährisch Schönberg fährt!" }
            ],
            sourceNote: "Kulturdenkmal ÚSKP 27339/8-866 • Matrik Zá II 10 (Fol. 142, 179) • Volkszählung 1921 Nr. 5.",
            actions: ["🏛️ Denkmalhof Nr. 5", "📜 Zählbogen 1921 (Nr. 5)"]
          },
          "panel-cp43": {
            location: "Lomigsdorf Nr. 43 (Kulturdenkmal ÚSKP 33784/8-870)",
            title: "Anwesen am Hang Nr. 43: Gezimmerter Speicher & Eigene Quellwasserleitung",
            realPhotoTitle: "Denkmalgeschütztes Anwesen Nr. 43 mit gezimmertem Speicher (1836) & Zählbogen 1921",
            narrator: "Am Osthang über dem Tal steht das Anwesen Nr. 43 (Baukern 1836) mit einem seltenen zweigeschossigen gezimmerten Speicher mit Lehmbewurf und einer eigenen Gefälle-Wasserleitung aus dem Berghang. 1921 wirtschaftete hier die verwitwete Landwirtin Terezie Jílková (*1864) gemeinsam mit ihren Eltern, den Ausgedingern František (*1856) und Anna Ptáček.",
            bubbles: [
              { speaker: "Ausgedinger František Ptáček (*1856, Nr. 43)", text: "Unsere eigene Wasserleitung führt frisches Bergquellwasser direkt in den Hof, und der lehmbeworfene Speicher von 1836 schützt das Korn vor Feuer!" },
              { speaker: "Landwirtin Terezie Jílková (*1864, Nr. 43)", text: "Mit meinen Töchtern Anežka und Marie und dem Knecht František Krobot bestellen wir die steilen Hangfelder genau wie unsere Vorfahren im Jahr 1834." }
            ],
            sourceNote: "Kulturdenkmal ÚSKP 33784/8-870 • Stabiler Kataster 1834 • Volkszählung 1921 Nr. 43.",
            actions: ["🏛️ Denkmalanwesen Nr. 43", "📜 Zählbogen 1921 (Nr. 43)"]
          }
        }
      },
      "page-4": {
        title: "Bogen V: Dorfhandwerker, die Sprachgrenze & 163 Jahre in einem Haus (1906–1949)",
        subtitle: "Die Schmiede Nr. 110, Garnbleicher aus Dreihofen, deutsche Nachbarn in Benke und fünf Generationen auf Hof Nr. 22",
        panels: {
          "panel-08": {
            location: "Schmiede Nr. 110, Häusel Nr. 46 & Weiler Dreihofen (Medelské) Nr. 1",
            title: "Klingende Ambosse in der Schmiede Nr. 110 & Garnbleicher aus Dreihofen",
            realPhotoTitle: "Zählbögen 1921 der Schmiede Nr. 110 & Dreihofen (Medelské) Nr. 1",
            narrator: "Neben den großen Bauern lebten im Tal geschickte Handwerker und Textilarbeiter: In der Schmiede Nr. 110 beschlug Schmiedemeister František Berka (*1866) mit seinem Sohn Jan die Pferde, in Nr. 46 lebte der Maurer Jan Dvořák (*1873) bei seinen Eltern, und aus Dreihofen (Medelské) Nr. 1 pendelte die Familie Minář täglich in die Oberleithner-Bleiche und Weberei nach Mährisch Schönberg (Šumperk).",
            bubbles: [
              { speaker: "Schmiedemeister František Berka (*1866, Nr. 110)", text: "Halt das Schmiedefeuer heiß, Jan! Die Bauern aus Lomigsdorf und Dreihofen brauchen vor der Frühjahrssaat scharfe Pflugscharen und feste Hufeisen." },
              { speaker: "Garnbleicher Jan Minář (*1861, Dreihofen Nr. 1)", text: "Und wir aus dem Weiler Dreihofen brechen im Morgengrauen zur Bleiche und Weberei von Eduard Oberleithner nach Mährisch Schönberg auf!" }
            ],
            sourceNote: "Volkszählung 1900, 1910 & 1921 von Nr. 110, Nr. 46 & Dreihofen Nr. 1–2 (ZAO Opava).",
            actions: ["🔨 Schmiede Nr. 110 (Berka)", "🏡 Dreihofen / Medelské Nr. 1 (Minář)", "👤 František Berka (*1866)"]
          },
          "panel-09": {
            location: "Höhendorf Benke (Benkov) & Sprachgrenze (1906)",
            title: "Tschechisches Tal & Deutscher Kamm: Nachbarn an der Sprachgrenze",
            realPhotoTitle: "Chytils Nationalitätenkarte von 1906 – Rotes Lomigsdorf & Grünes Benke",
            narrator: "Chytils Nationalitätenkarte von 1906 zeigt deutlich die historische Sprachgrenze: Lomigsdorf (Dlouhomilov) und Dreihofen (Medelské) im Tal sind tschechisch (rot), während das Höhendorf Benke (Benkov) auf dem Kamm rein deutschsprachig (grün) ist. Dennoch teilten beide Gemeinden dieselbe Pfarrkirche Allerheiligen, schickten Kinder auf „Handl“ zum Spracherwerb und wurden 1960 zu einer Gemeinde vereint.",
            bubbles: [
              { speaker: "Nachbar aus Benke (Benkov)", text: "Oben auf dem Kamm in Benke sprechen wir Deutsch, und rund um die Antoniuskapelle stehen die Höfe der Familien Kauer, Heger, Rössner und Blaschke." },
              { speaker: "Nachbar aus Lomigsdorf (Dlouhomilov)", text: "Und am Sonntagmorgen treffen wir uns alle gemeinsam in der Allerheiligenkirche in Lomigsdorf – gute Nachbarn über die Sprachgrenze hinweg!" }
            ],
            sourceNote: "Chytils Nationalitätenkarte von Mähren (1906) • Stabiler Kataster 1834 • Matriken für Benke (Benkov).",
            actions: ["⛪ Kapelle hl. Antonius in Benke", "🗺️ Nationalitätenkarte 1906", "📖 Kapitel VIII der Chronik"]
          },
          "panel-12": {
            location: "Bauerngut Nr. 22 & Tal von Lomigsdorf, Dreihofen & Benke",
            title: "163 Jahre unter demselben Dach & Das Gemeindewappen mit Apfelblüten",
            realPhotoTitle: "Denkmalgeschütztes Bauerngut Nr. 22 (Dörfliche Denkmalzone ÚSKP 2350) & Gemeindewappen",
            narrator: "Am 29. Mai 1949 stirbt auf dem Hof Nr. 22 die 91-jährige Ausgedingerin Anna Dvořáková geb. Kouřilová (*1857) und beschließt damit eine urkundlich belegte Ära von 163 Jahren (1786–1949) des Geschlechts Dvořák unter exakt derselben Hausnummer. Im Jahr 2004 vereinte das Gemeindewappen mit gekreuzten Spaten, goldenem Pflugmesser und zwei Apfelblüten symbolisch Lomigsdorf, Dreihofen und Benke.",
            bubbles: [
              { speaker: "Anna Dvořáková geb. Kouřilová (*1857, †1949 auf Nr. 22)", text: "Seit der Hochzeit von Pavel Dvořák im Jahr 1786 bis zu meinem einundneunzigsten Lebensjahr 1949 – 163 Jahre lang hat unser Geschlecht das Haus Nr. 22 nie verlassen." },
              { speaker: "Stimme der Talchronik", text: "Gekreuzte Spaten, ein goldenes Pflugmesser und zwei Apfelblüten im Wappen bewahren für immer das Gedächtnis aller Generationen von Lomigsdorf, Dreihofen und Benke." }
            ],
            sourceNote: "Matrik Zá II 10 (1862–1949) • REKOS-Dekret Nr. 37 (2004) • Kulturdenkmal Nr. 22.",
            actions: ["🏡 Bauerngut Nr. 22 (163 Jahre)", "✨ 13 Archiventdeckungen", "👥 Einwohnerregister"]
          }
        }
      }
    }
  }
};

i18nData.people = {
  en: {
    "p_alois_dvorak_1830": {
      categoryLabel: "Estate Holder / Farmer",
      role: "Farmer on Own Estate & Linen Weaver",
      father: "Johann Dvořák (*1795)",
      mother: "Elisabeth Frank (*ca. 1800)",
      spouse: "Magdalena Dvořáková (*1830)",
      children: ["Jan Dvořák (*1866)", "Emílie Dvořáková (*1870)", "Josef Dvořák (*1874)"],
      biography: "Prominent farmer at Peasant Farmstead No. 29 in the second half of the 19th century. Alongside farming, he also practiced linen weaving. He lived to the age of 78 and died in Dlouhomilov in 1908.",
      events: [
        { type: "Birth", date: "Sep 2, 1830", place: "Dlouhomilov No. 29", description: "Birth and baptism at All Saints' Church in Dlouhomilov. Father Johann Dvořák (peasant farmer), mother Elisabeth née Frank.", translation: "Born and baptized on Sep 2, 1830: Alois. Catholic, male, legitimate. Father: Johann Dvořák, local farmer. Mother: Elisabeth, daughter of Georg Frank, smallholder of Dlouhomilov.", scanTitle: "Birth Register (1830) – Baptism of Alois Dvořák" },
        { type: "Marriage", date: "ca. 1858", place: "Dlouhomilov", description: "Marriage to Magdalena (*1830)." },
        { type: "Population Census", date: "Dec 31, 1890", place: "Dlouhomilov No. 29", description: "Recorded as head of household and farmer/weaver with wife Magdalena and children Jan, Josef, and Emílie.", scanTitle: "1890 Census – Household of Alois Dvořák" },
        { type: "Death", date: "Oct 14, 1908", place: "Dlouhomilov No. 29", description: "Died at age 78 of old age. Buried at the local cemetery by All Saints' Church.", translation: "Died Oct 14, 1908, buried Oct 16. Alois Dvořák, retiree and former farmer at Dlouhomilov No. 29, legitimate son of Johann Dvořák, farmer in Dlouhomilov. Cause of death: old age.", scanTitle: "Death Register (1908) – Death Entry of Alois Dvořák" }
      ]
    },
    "p_johann_dvorak_1795": {
      lifeSpan: "1795 – ca. 1865",
      categoryLabel: "Estate Holder / Farmer",
      role: "Master of Farmstead No. 29 (Grundbesitzer / Hausbesitzer)",
      father: "Pavel Dvořák (18th-century estate holder)",
      mother: "Unknown",
      spouse: "Elisabeth Frank (*ca. 1800)",
      children: ["Dr. Jan Dvořák (*1826)", "Alois Dvořák (*1830)", "Karel Dvořák (*1839)"],
      biography: "Master of Farmstead No. 29 in the first half of the 19th century at the time of the 1834 Stable Cadastre. His eldest son Jan studied law in Prague and earned a doctorate of laws (JUDr.).",
      events: [
        { type: "Birth", date: "Aug 2, 1795", place: "Dlouhomilov No. 29", description: "Birth record at the ancestral farmstead in the Dlouhomilov parish birth register.", translation: "Born and baptized Aug 2, 1795: Johann. Catholic, legitimate. Father: Georg Dvořák, smallholder. Mother: Elisabeth née Frank. Godparents: Johann Wölfl, hereditary magistrate; Anna, wife of Joseph Schaniel.", scanTitle: "Birth Register (1795) – Dvořák Family" },
        { type: "Land Register / Cadastre", date: "1834", place: "Dlouhomilov No. 29", description: "Recorded in the 1834 Stable Cadastre (Imperial Imprint) for building parcel st. 38 as Rustikal-Besitzer (peasant estate holder).", translation: "Building parcel No. 38, courtyard and house No. 29. Rustical holder: Johann Dvořák, farmer in Lomigsdorf.", scanTitle: "1834 Imperial Imprint – Building Parcel st. 38 (No. 29)" },
        { type: "Population Census", date: "Oct 31, 1857", place: "Dlouhomilov No. 29", description: "Recorded as Hausbesitzer / Grundbesitzer. The sheet lists his sons Johann (*1826, Jurist in Prag) and Karl (*1839).", scanTitle: "1857 Census Sheet – Johann Dvořák" }
      ]
    },
    "p_dr_jan_dvorak_1826": {
      categoryLabel: "Scholar / Administration / Clergy",
      role: "Doctor of Laws & Attorney in Prague (Jurist in Prag)",
      father: "Johann Dvořák (*1795)",
      mother: "Elisabeth Frank",
      spouse: "Not listed",
      biography: "Eldest son of farmer Johann Dvořák of No. 29. He completed a university law degree in Prague. In the 1857 census he is recorded as 'Jurist in Prag', and in the 1869 census he is listed as the farmer's brother holding the title of Doctor of Laws.",
      events: [
        { type: "Birth", date: "Mar 29, 1826", place: "Dlouhomilov No. 29", description: "Born at Farmstead No. 29.", scanTitle: "Baptismal Record of Jan Dvořák" },
        { type: "Population Census", date: "Oct 31, 1857", place: "Dlouhomilov No. 29 / Prague", description: "Note in the census sheet: 'Jurist in Prag' (law student/lawyer in Prague).", scanTitle: "1857 Census Sheet – Note 'Jurist in Prag'" },
        { type: "Population Census", date: "Dec 31, 1869", place: "Dlouhomilov No. 29", description: "Listed in his brother Karel Dvořák's household as 'Jan Dvořák, brother, Doctor'.", scanTitle: "1869 Census Sheet – Dr. Jan Dvořák" }
      ]
    },
    "p_karel_dvorak_1839": {
      lifeSpan: "*1839 – after 1890",
      categoryLabel: "Estate Holder / Farmer",
      role: "Farmer at Estate No. 29 (Bauer / Peasant)",
      father: "Johann Dvořák (*1795)",
      mother: "Elisabeth Frank",
      spouse: "Karolína Dvořáková (*1840, native of Poděbrady)",
      children: ["Oswald Dvořák (*1866)", "Emilie Dvořáková (*1868)", "Paulina Dvořáková (*1869)"],
      biography: "Farmer at Estate No. 29 during the 1860s. Under his management, the farmstead kept a large flock of 49 sheep alongside draft horses and cattle. He later also farmed in Hrotovice.",
      events: [
        { type: "Birth", date: "Jul 3, 1839", place: "Dlouhomilov No. 29", description: "Born at Farmstead No. 29. Baptismal certificate attached to the 1857 census file.", scanTitle: "Baptismal Record of Karel Dvořák" },
        { type: "Population Census", date: "Dec 31, 1869", place: "Dlouhomilov No. 29", description: "Head of household at Estate No. 29. The census sheet includes a detailed inventory of livestock (2 horses, 9 cattle, 49 sheep).", scanTitle: "1869 Census Sheet – Karel Dvořák" }
      ]
    },
    "p_josef_dvorak_1877": {
      categoryLabel: "Estate Holder / Farmer",
      role: "Independent Farmer & Owner of Estate No. 29 in the First Republic",
      father: "Josef Dvořák (1857–1940), farmer at No. 22, native of Temenice",
      mother: "Anna Dvořáková née Kouřilová (1857–1949) from No. 24",
      spouse: "Amálie Dvořáková née Motyková (*Jul 18, 1888 Bludov), married Jul 15, 1907",
      children: ["Josef Dvořák Jr. (*Jun 28, 1913)", "Marie Dvořáková (*Jun 15, 1920)"],
      biography: "Born on June 3, 1879 at ancestral Farmstead No. 22 as the son of Josef Dvořák and Anna née Kouřilová. By his marriage to Amálie Motyková (July 15, 1907), who lived at No. 29, he became the farmer of Estate No. 29, uniting both Dvořák branches. He died there on September 8, 1938.",
      events: [
        { type: "Birth", date: "Jun 3, 1879", place: "Dlouhomilov No. 22", description: "Birth and baptism in Dlouhomilov.", scanTitle: "Birth Index Zá II 3 (Letter D)" },
        { type: "Marriage", date: "Jul 15, 1907", place: "Dlouhomilov", description: "Marriage to Amálie Motyková (*Jul 18, 1888 Bludov), residing at Dlouhomilov No. 29; officiated by retired parish priest Rev. Alois Dvořák.", scanTitle: "Marriage Index Zá II 7 (Letter D)" },
        { type: "Population Census", date: "Dec 31, 1910", place: "Dlouhomilov No. 29", description: "Recorded as farm owner with his wife Amálie, mother-in-law Amálie Motyková, and farm servants.", scanTitle: "1910 Census Sheet – Josef Dvořák" },
        { type: "Population Census", date: "Feb 15, 1921", place: "Dlouhomilov No. 29", description: "First Czechoslovak Census: independent farmer and estate owner with wife Amálie, children Josef and Marie, and 4 farm servants.", scanTitle: "1921 Census Sheet – Josef Dvořák" },
        { type: "Death", date: "Sep 8, 1938", place: "Dlouhomilov No. 29", description: "Death of farmer Josef Dvořák at Estate No. 29 aged 59 years, 3 months, and 5 days." }
      ]
    },
    "p_amalie_dvorakova_1878": {
      lifeSpan: "1888 – after 1947",
      categoryLabel: "Farmer's Family Member",
      role: "Mistress of Farmstead No. 29",
      father: "Antonín Motyka, wheelwright in Bludov",
      mother: "Amálie Motyková née Dvořáková (*1846), daughter of Petr Dvořák, cottager in Dlouhomilov",
      spouse: "Josef Dvořák (1879–1938), married Jul 15, 1907",
      children: ["Josef Dvořák Jr. (*Jun 28, 1913)", "Marie Dvořáková (*Jun 15, 1920)"],
      biography: "Descended from the Motyka family of Bludov (her father Antonín Motyka perished heroically saving manor cattle from the burning Bludov Chateau stables). In Dlouhomilov she managed the large farm household at Estate No. 29.",
      events: [
        { type: "Birth", date: "Jul 18, 1888", place: "Bludov No. 224", description: "Born in Bludov as daughter of wheelwright Antonín Motyka and Amálie née Dvořáková." },
        { type: "Population Census", date: "Dec 31, 1910", place: "Dlouhomilov No. 29", description: "Recorded as wife of the farmer at No. 29.", scanTitle: "1910 Census Sheet" },
        { type: "Population Census", date: "Feb 15, 1921", place: "Dlouhomilov No. 29", description: "Recorded in the 1921 Czechoslovak census sheet at No. 29.", scanTitle: "1921 Census Sheet" }
      ]
    },
    "p_pavel_dvorak_1750": {
      name: "Pavel Dvořák (Witness 1654, Holder 1657–1679)",
      lifeSpan: "documented 1651–1679",
      categoryLabel: "Estate Holder / Farmer",
      role: "Peasant Farmer in Dlouhomilov Documented 1651–1679 (Zábřeh/Dubicko Registers, Lán Cadastre & No. 29 Land Book)",
      father: "Unknown",
      mother: "Unknown",
      spouse: "Unknown",
      children: ["Jan (Hanß) Dvořák (documented on Sept 27, 1654 alongside his father Pavel in Dubicko register Zá IV 1, p. 313; 60-Metzen farmer in the 1677 Lán Cadastre)"],
      biography: "Oldest personally documented ancestor of the Dvořák lineage at No. 29 in Dlouhomilov: after an entry in the Zábřeh register in 1651 (Zá I 1, p. 263), on September 27, 1654 he appears jointly with his son Hanß in the Dubicko marriage register (Zá IV 1, scan 160, p. 313) as witnesses ('Pawel Dworžák z Dlauhomilowa a Hanß geho Syn') at the wedding of Jiřík from Medelské and Anežka from Benkov. In the first Lán visitation (1656–1657) he held a full 60-Metzen farmstead succeeded by his son Hanß by 1677 (MZA Brno D 1, sign. 141, fol. 76v). The land book section 'Grunt Pawla Dworzaka' (fol. 191, inv. No. 164) opens under his name in 1679. Distinct from Pavel Dvořák (*Sep 9, 1763), father of Petr Dvořák of No. 22.",
      events: [
        { type: "Marriage Witness", date: "Sept 27, 1654", place: "Dubicko / Dlouhomilov & Medelské", description: "Dubicko marriage register (scan 160, p. 313): Jiřík, son of late Jakub from Medelské ('z Medelskýho'), marries Anežka from Benkov; Pavel Dvořák of Dlouhomilov and his son Hanß appear together as witnesses—directly verifying the father-to-son succession recorded in the 1657/1677 Lán Cadastre for No. 29.", translation: "Sept 27, 1654: Groom Jiřík, son of late Jakub from Medelské, and bride Anežka, daughter of late Jan from Benkov. Married in Dubicko. Witnesses: Pavel Dvořák of Dlouhomilov and Hanß his son of the same place.", scanTitle: "Dubicko Zá IV 1 (p. 313, Sept 27, 1654) – Witnesses Pavel Dvořák & Son Hanß; 'z Medelskýho'" },
        { type: "Land Register", date: "1679 & subsequent years", place: "Dlouhomilov No. 29", description: "Land book section 'Grunt Pawla Dworzaka' (fol. 191 ff.), entries from 1679; followed by 'Purchase of Jakub Dvořák' (1684).", translation: "Farmstead of Pavel Dvořák. Anno 1679 [...] Purchase of Jakub Dvořák, Anno Domini 1684, May 12 [...]", scanTitle: "Dlouhomilov Land Book – Farmstead of Pavel Dvořák (fol. 191)" }
      ]
    },
    "p_petr_dvorak_1793": {
      categoryLabel: "Estate Holder / Farmer",
      role: "Peasant Farmer & Retiree at Estate No. 22",
      father: "Pavel Dvořák (*Sep 9, 1763, son of farmer Pavel Dvořák Sr. & Barbara; Rohle register Zá VIII 1, p. 405)",
      mother: "Marina née Weinlichová from Brníčko (married 1786 in bride's parish Brníčko)",
      spouse: "Anna Dvořáková (*1811/1814 Vyšehoří)",
      children: ["Josef Dvořák (*1816 Dlouhomilov, farmer in Temenice and at No. 22)"],
      biography: "Peasant farmer and later retiree at ancestral Farmstead No. 22, son of Pavel Dvořák Jr. (*Sep 9, 1763) and Marina née Weinlichová of Brníčko. His father's original baptismal entry in the Rohle parish register (Zá VIII 1, p. 405) overturned the older assumption naming Jiří Dvořák as father: Petr's grandfather was farmer Pavel Dvořák Sr. with wife Barbara (a Dworžak godmother in the right column caused the earlier confusion). Their 1786 wedding lies in Brníčko (Zá VI 5) rather than Dlouhomilov Zá II 4, following custom in the bride's parish. In 1857 Petr lived at No. 22 with his wife Anna of Vyšehoří while his son Josef (*1816) farmed in Temenice before returning; Petr died in retirement at No. 22 on Dec 9, 1878 aged 84.",
      events: [
        { type: "Father's Baptism", date: "Sept 9, 1763", place: "Dlouhomilov (Rohle Parish)", description: "Rohle baptismal register (scan 207, p. 405): baptism of Paulus, son of peasant farmer Pavel Dvořák Sr. ('Paulus Dworžak rusticus Dlomilovio') and Barbara—correcting the earlier misattribution to Jiří Dvořák.", translation: "Sept 9, 1763: Baptized Paulus; Parents: Paulus Dworžak, farmer in Dlouhomilov, and Barbara; Godparents: Wenceslaus [...] and Marina, wife of [Georgius?] Dworžak, farmer in Dlouhomilov.", scanTitle: "Rohle Zá VIII 1 (p. 405, Sept 9, 1763) – Baptism of Pavel Dvořák, Son of Pavel & Barbara" },
        { type: "Birth", date: "ca. 1793", place: "Dlouhomilov No. 22", description: "Born at Dlouhomilov No. 22 as son of peasant farmer Pavel Dvořák (*Sep 9, 1763) and Marina née Weinlichová." },
        { type: "Population Census", date: "Nov 25, 1857", place: "Dlouhomilov No. 22", description: "Recorded in Apartment II as Peter Dworžak (*1793, Grundbesitzer) with wife Anna (*1811). His son Josef Dvořák is listed as house owner in the sheet header.", scanTitle: "1857 Census Sheet – Petr Dvořák (*1793) at No. 22" },
        { type: "Population Census", date: "Dec 31, 1869", place: "Dlouhomilov No. 22", description: "Recorded on line 10 as retired farmer Petr Dvořák (*1793) with wife Anna (*1813 Vyšehoří) in the household of his son Josef Dvořák (*1816).", scanTitle: "1869 Census Sheet – Retiree Petr Dvořák (*1793) & Family of Josef Dvořák (*1816)" },
        { type: "Death", date: "Dec 9, 1878", place: "Dlouhomilov No. 22", description: "Died at No. 22 aged 84 as a retired farmer, son of Pavel Dvořák and Mariana née Weinlichová." }
      ]
    },
    "p_josef_dvorak_1857": {
      name: "Josef Dvořák Sr.",
      categoryLabel: "Estate Holder / Farmer",
      role: "Peasant Farmer at Estate No. 22 (1878–1919)",
      father: "Josef Dvořák (*1816 Dlouhomilov), farmer in Temenice and at No. 22",
      mother: "Anna Dvořáková (*1828 Dlouhomilov, daughter of Antonín Dvořák)",
      spouse: "Anna Dvořáková née Kouřilová (*Dec 9, 1857 No. 24 – †May 29, 1949 No. 22), married Jul 29, 1878",
      children: ["Josef Dvořák (*Jun 3, 1879, farmer at No. 29)", "Karel Dvořák (*Nov 7, 1880, farmer at No. 22)", "Anna Dvořáková (*Nov 20, 1885)", "Marie Anna Dvořáková (*May 7, 1888)", "Jaromír Dvořák (*Jul 27, 1890)", "Ludmila Podhorná née Dvořáková (*Apr 21, 1893)", "Bernardina Dvořáková (*Oct 17, 1895)"],
      biography: "Born on February 9, 1857 in Temenice near Šumperk, where his parents Josef (*1816) and Anna (*1828) Dvořák from Dlouhomilov No. 22 were farming at the time. Around 1869 he returned with his parents to ancestral Farmstead No. 22 in Dlouhomilov. On July 29, 1878 he married Anna Kouřilová from neighboring No. 24 in a double wedding (while his brother Karel married her sister Ludmila) and ran Estate No. 22 for over forty years. His eldest son Josef (*1879) moved by marriage in 1907 to No. 29, while his younger son Karel (*1880) took over No. 22. He died in retirement at No. 22 on July 10, 1940 aged 83.",
      events: [
        { type: "Birth", date: "Feb 9, 1857", place: "Temenice No. 35 (near Šumperk)", description: "Born in Temenice No. 35 as son of farmer Josef Dvořák (*1816) and Anna née Dvořáková (*1828)." },
        { type: "Population Census", date: "Dec 31, 1869", place: "Dlouhomilov No. 22", description: "Recorded as a 12-year-old schoolboy in the family of his father Josef Dvořák (*1816) and grandfather Petr Dvořák (*1793) after returning from Temenice to No. 22.", scanTitle: "1869 Census Sheet – Dlouhomilov No. 22" },
        { type: "Marriage", date: "Jul 29, 1878", place: "Dlouhomilov (No. 22 & No. 24)", description: "Double wedding in Dlouhomilov: Josef Dvořák (*1857) marries Anna Kouřilová (*1857) from No. 24 while his brother Karel marries her sister Ludmila." },
        { type: "Population Census", date: "Dec 31, 1880", place: "Dlouhomilov No. 22", description: "Young farmer at No. 22 with wife Anna, sons Josef (*1879) and Karel (*1880), 3 maids, and grandmother Anna (*1814) in retirement.", scanTitle: "1880 Census Sheet – Josef Dvořák at No. 22" },
        { type: "Population Census", date: "Dec 31, 1890", place: "Dlouhomilov No. 22", description: "Farmer at No. 22 with wife Anna, 5 children, and attached baptismal certificate of son Josef (*1879).", scanTitle: "1890 Census Sheet – Josef Dvořák at No. 22" },
        { type: "Population Census", date: "Dec 31, 1900", place: "Dlouhomilov No. 22", description: "Farmer at No. 22 with wife Anna and 7 children.", scanTitle: "1900 Census Sheet – Josef Dvořák at No. 22" },
        { type: "Population Census", date: "Dec 31, 1910", place: "Dlouhomilov No. 22", description: "Owner of Estate No. 22 with wife Anna and 6 children.", scanTitle: "1910 Census Sheet – Josef Dvořák at No. 22" },
        { type: "Population Census", date: "Feb 15, 1921", place: "Dlouhomilov No. 22", description: "Retired farmer in Apartment No. 2 at No. 22 with wife Anna, daughters Ludmila Podhorná and Bernardina, and grandson Jaromír.", scanTitle: "1921 Census Sheet – Dlouhomilov No. 22" },
        { type: "Death", date: "Jul 10, 1940", place: "Dlouhomilov No. 22", description: "Died at No. 22 as a retired farmer aged 83 years, 5 months, and 1 day." }
      ]
    },
    "p_anna_dvorakova_1857": {
      name: "Anna Dvořáková (née Kouřilová)",
      categoryLabel: "Farmer's Family Member",
      role: "Farmer's Wife & Co-Owner of Estate No. 22 (Born at No. 24)",
      father: "František Kouřil (†Aug 11, 1878), hereditary peasant farmer at No. 24",
      mother: "Mariana née Vlčková, daughter of retiree Josef Vlček at No. 24",
      spouse: "Josef Dvořák Sr. (1857–1940), married Jul 29, 1878",
      children: ["Josef Dvořák (*Jun 3, 1879, No. 29)", "Karel Dvořák (*Nov 7, 1880, No. 22)", "Anna Dvořáková (*Nov 20, 1885)", "Marie Anna Dvořáková (*May 7, 1888)", "Jaromír Dvořák (*Jul 27, 1890)", "Ludmila Podhorná née Dvořáková (*Apr 21, 1893)", "Bernardina Dvořáková (*Oct 17, 1895)"],
      biography: "Born on December 9, 1857 at Protected Farmstead No. 24 as daughter of peasant farmer František Kouřil and Mariana née Vlčková. On July 29, 1878 she married Josef Dvořák (*1857) of neighboring Estate No. 22 in a double wedding while her sister Ludmila married his brother Karel (who took over No. 24 after their father František Kouřil died on Aug 11, 1878). She raised seven children at No. 22 and lived to the venerable age of 91 (†May 29, 1949).",
      events: [
        { type: "Birth", date: "Dec 9, 1857", place: "Dlouhomilov No. 24", description: "Born at No. 24 as daughter of hereditary farmer František Kouřil and Mariana née Vlčková." },
        { type: "Marriage", date: "Jul 29, 1878", place: "Dlouhomilov (No. 24 & No. 22)", description: "Double wedding of sisters Anna and Ludmila Kouřilová from No. 24 to brothers Josef and Karel Dvořák from No. 22." },
        { type: "Population Census", date: "Dec 31, 1880", place: "Dlouhomilov No. 22", description: "Recorded as farmer's wife and co-owner of Estate No. 22.", scanTitle: "1880 Census Sheet – Anna Dvořáková at No. 22" },
        { type: "Population Census", date: "Feb 15, 1921", place: "Dlouhomilov No. 22", description: "Recorded with her husband Josef in retirement in Apartment No. 2 at No. 22.", scanTitle: "1921 Census Sheet – Dlouhomilov No. 22" },
        { type: "Death", date: "May 29, 1949", place: "Dlouhomilov No. 22", description: "Died at No. 22 as a retired farmer's widow aged 91 years, 5 months, and 20 days." }
      ]
    },
    "p_karel_dvorak_1880": {
      categoryLabel: "Estate Holder / Farmer",
      role: "Independent Farmer at Estate No. 22 (1919–1942)",
      father: "Josef Dvořák Sr. (1857–1940), farmer at No. 22",
      mother: "Anna Dvořáková née Kouřilová (1857–1949) from No. 24",
      spouse: "Anna / Ludmila née Maulerová (married Sep 13, 1919)",
      children: ["Ludmila Dvořáková (*Mar 24, 1916, married Karel Šafář of No. 10 in 1936)", "Karel Dvořák Jr. (*1918)", "Drahomíra Dvořáková (*1921)"],
      biography: "Second-born son of Josef Dvořák (*1857) and Anna née Kouřilová (*1857) at No. 22, younger brother of Josef Dvořák (*1879) of No. 29. While his older brother Josef moved by marriage in 1907 to No. 29, Karel remained on ancestral Estate No. 22, taking over after WWI and farming it until his death on May 5, 1942. His daughter Ludmila (*1916) married neighbor Karel Šafář of Estate No. 10 in 1936.",
      events: [
        { type: "Birth", date: "Nov 7, 1880", place: "Dlouhomilov No. 22", description: "Born at No. 22 as son of farmer Josef Dvořák and Anna née Kouřilová; recorded as a two-month-old infant in the Dec 31, 1880 census.", scanTitle: "1880 Census Sheet – Infant Karel Dvořák (*Nov 7, 1880)" },
        { type: "Population Census", date: "Feb 15, 1921", place: "Dlouhomilov No. 22", description: "Independent farmer and owner of Estate No. 22 with his family and 4 farm servants.", scanTitle: "1921 Census Sheet – Farmer Karel Dvořák at No. 22" },
        { type: "Death", date: "May 5, 1942", place: "Dlouhomilov No. 22", description: "Died at No. 22 as farmer aged 61 years, 5 months, and 28 days." }
      ]
    }
  },
  de: {
    "p_alois_dvorak_1830": {
      categoryLabel: "Hofbesitzer / Bauer",
      role: "Bauer auf eigenem Hof & Leinweber",
      father: "Johann Dvořák (*1795)",
      mother: "Elisabeth Frank (*um 1800)",
      spouse: "Magdalena Dvořáková (*1830)",
      children: ["Jan Dvořák (*1866)", "Emílie Dvořáková (*1870)", "Josef Dvořák (*1874)"],
      biography: "Bedeutender Bauer auf dem Stammhof Nr. 29 in der zweiten Hälfte des 19. Jahrhunderts. Neben der Landwirtschaft betrieb er auch die Weberei. Er erreichte ein Alter von 78 Jahren und starb 1908 in Lomigsdorf (Dlouhomilov).",
      events: [
        { type: "Geburt", date: "2. Sept. 1830", place: "Lomigsdorf (Dlouhomilov) Nr. 29", description: "Geburt und Taufe in der Allerheiligenkirche in Lomigsdorf. Vater Johann Dvořák (Bauer), Mutter Elisabeth geb. Frank.", translation: "Am 2. September 1830 geboren und getauft: Aloisius. Katholisch, männlich, ehelich. Vater: Johann Dworzak, Bauer allda. Mutter: Elisabeth, Tochter des Georg Frank, Gärtlers von Lomigsdorf.", scanTitle: "Geburtsmatrik (1830) – Taufe von Alois Dvořák" },
        { type: "Trauung", date: "um 1858", place: "Lomigsdorf (Dlouhomilov)", description: "Heirat mit Magdalena (*1830)." },
        { type: "Volkszählung", date: "31. Dez. 1890", place: "Lomigsdorf (Dlouhomilov) Nr. 29", description: "Eingetragen als Haushaltsvorstand, Bauer und Weber mit Ehefrau Magdalena sowie den Kindern Jan, Josef und Emílie.", scanTitle: "Volkszählung 1890 – Haushalt Alois Dvořák" },
        { type: "Sterbefall", date: "14. Okt. 1908", place: "Lomigsdorf (Dlouhomilov) Nr. 29", description: "Verstorben im Alter von 78 Jahren an Altersschwäche. Beigesetzt auf dem Ortsfriedhof bei der Allerheiligenkirche.", translation: "Gestorben am 14. Oktober 1908, begraben am 16. Oktober. Alois Dvořák, Auszügler und gewesener Bauer in Lomigsdorf Nr. 29, ehelicher Sohn des Johann Dvořák. Todesursache: Altersschwäche.", scanTitle: "Sterbematrik (1908) – Sterbeeintrag Alois Dvořák" }
      ]
    },
    "p_johann_dvorak_1795": {
      lifeSpan: "1795 – um 1865",
      categoryLabel: "Hofbesitzer / Bauer",
      role: "Hofbesitzer auf Nr. 29 (Grundbesitzer / Hausbesitzer)",
      father: "Pavel Dvořák (Hofbesitzer im 18. Jh.)",
      mother: "Unbekannt",
      spouse: "Elisabeth Frank (*um 1800)",
      children: ["Dr. Jan Dvořák (*1826)", "Alois Dvořák (*1830)", "Karel Dvořák (*1839)"],
      biography: "Bauer auf dem Stammhof Nr. 29 in der ersten Hälfte des 19. Jahrhunderts zur Zeit der Anlage des Stabilen Katasters (1834). Sein ältester Sohn Jan studierte Rechtswissenschaften in Prag und wurde Doktor der Rechte (JUDr.).",
      events: [
        { type: "Geburt", date: "2. Aug. 1795", place: "Lomigsdorf (Dlouhomilov) Nr. 29", description: "Geburtseintrag auf dem Stammhof in der Geburtsmatrik der Pfarre Lomigsdorf.", translation: "Am 2. August 1795 geboren und getauft: Johann. Katholisch, ehelich. Vater: Georg Dworzak, Gärtler. Mutter: Elisabeth geb. Frank. Paten: Johann Wölfl, Erbrichter; Anna, Eheweib des Joseph Schaniel.", scanTitle: "Geburtsmatrik (1795) – Geschlecht Dvořák" },
        { type: "Grundbuch / Kataster", date: "1834", place: "Lomigsdorf (Dlouhomilov) Nr. 29", description: "Eintrag im Stabilen Kataster (Kaiserlicher Pflichtabdruck) für die Bauparzelle Bp. 38 als Rustikal-Besitzer.", translation: "Bauparzelle Nr. 38, Hofraum und Wohnhaus Nr. 29. Rustikal-Besitzer: Johann Dworžak, Bauer in Lomigsdorf.", scanTitle: "Kaiserlicher Pflichtabdruck 1834 – Bauparzelle Bp. 38 (Nr. 29)" },
        { type: "Volkszählung", date: "31. Okt. 1857", place: "Lomigsdorf (Dlouhomilov) Nr. 29", description: "Eingetragen als Hausbesitzer / Grundbesitzer mit den Söhnen Johann (*1826, Jurist in Prag) und Karl (*1839).", scanTitle: "Zählbogen 1857 – Johann Dvořák" }
      ]
    },
    "p_dr_jan_dvorak_1826": {
      categoryLabel: "Gelehrter / Verwaltung / Geistlicher",
      role: "Doktor der Rechte & Rechtsanwalt in Prag (Jurist in Prag)",
      father: "Johann Dvořák (*1795)",
      mother: "Elisabeth Frank",
      spouse: "Nicht angegeben",
      biography: "Ältester Sohn des Bauern Johann Dvořák aus Nr. 29. Er absolvierte das rechtswissenschaftliche Studium an der Universität in Prag. Bei der Volkszählung 1857 ist er als „Jurist in Prag“ vermerkt, 1869 als Bruder des Hofbesitzers mit Doktortitel.",
      events: [
        { type: "Geburt", date: "29. März 1826", place: "Lomigsdorf (Dlouhomilov) Nr. 29", description: "Geboren auf dem Hof Nr. 29.", scanTitle: "Taufeintrag von Jan Dvořák" },
        { type: "Volkszählung", date: "31. Okt. 1857", place: "Lomigsdorf Nr. 29 / Prag", description: "Vermerk im Zählbogen: „Jurist in Prag“.", scanTitle: "Zählbogen 1857 – Vermerk „Jurist in Prag“" },
        { type: "Volkszählung", date: "31. Dez. 1869", place: "Lomigsdorf (Dlouhomilov) Nr. 29", description: "Eingetragen beim Bruder Karel Dvořák als „Jan Dvořák, Bruder, Doktor“.", scanTitle: "Zählbogen 1869 – Dr. Jan Dvořák" }
      ]
    },
    "p_karel_dvorak_1839": {
      lifeSpan: "*1839 – nach 1890",
      categoryLabel: "Hofbesitzer / Bauer",
      role: "Bauer auf dem Hof Nr. 29 (Bauer / Grundbesitzer)",
      father: "Johann Dvořák (*1795)",
      mother: "Elisabeth Frank",
      spouse: "Karolína Dvořáková (*1840, geb. aus Podiebrad / Poděbrady)",
      children: ["Oswald Dvořák (*1866)", "Emilie Dvořáková (*1868)", "Paulina Dvořáková (*1869)"],
      biography: "Bauer auf dem Hof Nr. 29 in den 1860er Jahren. Unter seiner Wirtschaftsführung wurden auf dem Gut neben Zugpferden und Rindern auch 49 Schafe gehalten. Später wirkte er auch in Hrottowitz (Hrotovice).",
      events: [
        { type: "Geburt", date: "3. Juli 1839", place: "Lomigsdorf (Dlouhomilov) Nr. 29", description: "Geboren auf dem Hof Nr. 29. Taufschein den Akten vom 6. 10. 1857 beigelegt.", scanTitle: "Taufeintrag von Karel Dvořák" },
        { type: "Volkszählung", date: "31. Dez. 1869", place: "Lomigsdorf (Dlouhomilov) Nr. 29", description: "Haushaltsvorstand auf Nr. 29 mit detailliertem Viehverzeichnis (2 Pferde, 9 Rinder, 49 Schafe).", scanTitle: "Zählbogen 1869 – Karel Dvořák" }
      ]
    },
    "p_josef_dvorak_1877": {
      categoryLabel: "Hofbesitzer / Bauer",
      role: "Selbständiger Landwirt & Hofbesitzer auf Nr. 29 in der Ersten Republik",
      father: "Josef Dvořák (1857–1940), Bauer auf Nr. 22, gebürtig aus Hermesdorf (Temenice)",
      mother: "Anna Dvořáková geb. Kouřilová (1857–1949) aus Nr. 24",
      spouse: "Amálie Dvořáková geb. Motyková (*18. 7. 1888 Blauda / Bludov), Heirat 15. 7. 1907",
      children: ["Josef Dvořák d. J. (*28. 6. 1913)", "Marie Dvořáková (*15. 6. 1920)"],
      biography: "Geboren am 3. 6. 1879 auf dem Stammhof Nr. 22 als Sohn von Josef Dvořák und Anna geb. Kouřilová. Durch seine Heirat mit Amálie Motyková (1907), die auf Nr. 29 lebte, wurde er Bauer auf dem Hof Nr. 29 und verband beide Zweige Dvořák. Er starb dort am 8. 9. 1938.",
      events: [
        { type: "Geburt", date: "3. Juni 1879", place: "Lomigsdorf (Dlouhomilov) Nr. 22", description: "Geburt und Taufe in Lomigsdorf.", scanTitle: "Geburtsindex Zá II 3 (Buchstabe D)" },
        { type: "Trauung", date: "15. Juli 1907", place: "Lomigsdorf (Dlouhomilov)", description: "Trauung mit Amálie Motyková (*18. 7. 1888 Blauda / Bludov), wohnhaft in Lomigsdorf Nr. 29; getraut von P. Alois Dvořák, Pfarrer i. R.", scanTitle: "Trauungsindex Zá II 7 (Buchstabe D)" },
        { type: "Volkszählung", date: "31. Dez. 1910", place: "Lomigsdorf (Dlouhomilov) Nr. 29", description: "Eingetragen als Grundbesitzer mit Ehefrau Amálie, Schwiegermutter Amálie Motyková und Gesinde.", scanTitle: "Zählbogen 1910 – Josef Dvořák" },
        { type: "Volkszählung", date: "15. Feb. 1921", place: "Lomigsdorf (Dlouhomilov) Nr. 29", description: "Erste Volkszählung der ČSR: selbständiger Landwirt und Hofbesitzer mit Ehefrau Amálie, den Kindern Josef und Marie sowie 4 Dienstboten.", scanTitle: "Zählbogen 1921 – Josef Dvořák" },
        { type: "Sterbefall", date: "8. Sept. 1938", place: "Lomigsdorf (Dlouhomilov) Nr. 29", description: "Tod des Bauern Josef Dvořák auf Nr. 29 im Alter von 59 Jahren, 3 Monaten und 5 Tagen." }
      ]
    },
    "p_amalie_dvorakova_1878": {
      name: "Amalie Dvořáková (geb. Motyková)",
      lifeSpan: "1888 – nach 1947",
      categoryLabel: "Familienangehörige des Hofbesitzers",
      role: "Bäuerin und Hauswirtin auf dem Hof Nr. 29",
      father: "Antonín Motyka, Wagner in Blauda (Bludov)",
      mother: "Amálie Motyková geb. Dvořáková (*1846), Tochter des Häuslers Petr Dvořák in Lomigsdorf",
      spouse: "Josef Dvořák (1879–1938), Heirat 15. 7. 1907",
      children: ["Josef Dvořák d. J. (*28. 6. 1913)", "Marie Dvořáková (*15. 6. 1920)"],
      biography: "Entstammte der Wagnerfamilie Motyka aus Blauda / Bludov. In Lomigsdorf (Dlouhomilov) führte sie den großen bäuerlichen Haushalt auf dem Hof Nr. 29.",
      events: [
        { type: "Geburt", date: "18. Juli 1888", place: "Blauda (Bludov) Nr. 224", description: "Geboren in Blauda als Tochter des Wagners Antonín Motyka und der Amálie geb. Dvořáková." },
        { type: "Volkszählung", date: "31. Dez. 1910", place: "Lomigsdorf (Dlouhomilov) Nr. 29", description: "Eingetragen als Ehefrau des Hofbesitzers.", scanTitle: "Zählbogen 1910" },
        { type: "Volkszählung", date: "15. Feb. 1921", place: "Lomigsdorf (Dlouhomilov) Nr. 29", description: "Eingetragen im Zählbogen 1921 auf Nr. 29.", scanTitle: "Zählbogen 1921" }
      ]
    },
    "p_pavel_dvorak_1750": {
      name: "Pavel Dvořák (Trauzeuge 1654, Hofbesitzer 1657–1679)",
      lifeSpan: "belegt 1651–1679",
      categoryLabel: "Hofbesitzer / Bauer",
      role: "Bauer in Lomigsdorf, belegt 1651–1679 (Matriken Hohenstadt/Dubitzko, Lahnregister & Grundbuch Nr. 29)",
      father: "Unbekannt",
      mother: "Unbekannt",
      spouse: "Unbekannt",
      children: ["Jan (Hanß) Dvořák (belegt am 27. 9. 1654 mit seinem Vater Pavel in Dubitzko Zá IV 1, S. 313; 60-Metzen-Bauer im Lahnenregister 1677)"],
      biography: "Ältester namentlich belegter Vorfahr des Geschlechts Dvořák auf Nr. 29 in Lomigsdorf (Dlouhomilov): Nach einer Nennung in der Hohenstädter Matrik 1651 (Zá I 1, S. 263) erscheint er am 27. September 1654 gemeinsam mit seinem Sohn Hanß in der Traumatrik von Dubitzko (Zá IV 1, Scan 160, S. 313) als Trauzeuge („Pawel Dworžák z Dlauhomilowa a Hanß geho Syn“) bei der Hochzeit des Jiřík aus Dreihofen (Medelské) und der Anežka aus Benke. In der ersten Lahnvisitation 1656–1657 bewirtschaftete er einen ganzen 60-Metzen-Hof, den bis 1677 sein Sohn Hanß übernahm (MZA Brünn D 1, Sign. 141, Fol. 76v). Der Grundbuchabschnitt „Grunt Pawla Dworzaka“ (Fol. 191, Inv.-Nr. 164) beginnt 1679. Nicht zu verwechseln mit Pavel Dvořák (*9. 9. 1763), dem Vater von Petr Dvořák aus Nr. 22.",
      events: [
        { type: "Trauzeuge", date: "27. Sept. 1654", place: "Dubitzko / Lomigsdorf & Dreihofen", description: "Traumatrik der Pfarre Dubitzko (Scan 160, S. 313): Jiřík, Sohn des verst. Jakub aus Dreihofen („z Medelskýho“), heiratet Anežka aus Benke; als Zeugen stehen Pavel Dvořák aus Dlouhomilov und sein Sohn Hanß – direkter Matrikenbeleg für die Vater-Sohn-Folge des Lahnregisters 1657/1677 auf Nr. 29.", translation: "27. Sept. 1654: Bräutigam Jiřík, Sohn des verst. Jakub aus Dreihofen, und Braut Anežka, Tochter des verst. Jan aus Benke. Getraut in Dubitzko. Zeugen: Pavel Dvořák aus Dlouhomilov und Hanß sein Sohn ebendaher.", scanTitle: "Dubitzko Zá IV 1 (S. 313, 27. 9. 1654) – Zeugen Pavel Dvořák & Sohn Hanß; „z Medelskýho“" },
        { type: "Grundbuch", date: "1679 u. Folgejahre", place: "Lomigsdorf (Dlouhomilov) Nr. 29", description: "Grundbuchabschnitt „Grunt Pawla Dworzaka“ (Fol. 191 ff.), Einträge ab 1679; danach „Kauf des Jakub Dvořák“ (1684).", translation: "Grund des Pavel Dvořák. Anno 1679 [...] Kauf des Jakub Dvořák, Anno Domini 1684 den 12. Mai [...]", scanTitle: "Grundbuch Lomigsdorf – Hof des Pavel Dvořák (Fol. 191)" }
      ]
    },
    "p_petr_dvorak_1793": {
      categoryLabel: "Hofbesitzer / Bauer",
      role: "Bauer und Ausgedinger auf dem Hof Nr. 22",
      father: "Pavel Dvořák (*9. 9. 1763, Sohn des Bauern Pavel Dvořák d. Ä. & Barbara; Matrik Rohle Zá VIII 1, S. 405)",
      mother: "Marina geb. Weinlichová aus Brünles / Brníčko (Heirat 1786 in der Brautpfarre Brünles)",
      spouse: "Anna Dvořáková (*1811/1814 Hochkirchen / Vyšehoří)",
      children: ["Josef Dvořák (*1816 Lomigsdorf, Bauer in Hermesdorf / Temenice und auf Nr. 22)"],
      biography: "Bauer und späterer Ausgedinger auf dem Stammhof Nr. 22, Sohn von Pavel Dvořák d. J. (*9. 9. 1763) und Marina geb. Weinlichová aus Brünles. Der originale Taufeintrag seines Vaters in Rohle (Zá VIII 1, S. 405) widerlegte die frühere Vermutung einer Vaterschaft des Jiří Dvořák: Petrs Großvater war der Bauer Pavel Dvořák d. Ä. mit Ehefrau Barbara (der Familienname Dworžak einer Patin in der rechten Spalte führte einst zur Verwechslung). Die Trauung der Eltern 1786 liegt in Brünles (Zá VI 5), der Heimatpfarre der Braut, nicht in Zá II 4. Bei der Zählung 1857 bewohnte Petr Nr. 22 mit seiner Frau Anna aus Vyšehoří, während Sohn Josef (*1816) zeitweise in Hermesdorf wirtschaftete und vor 1869 heimkehrte; Petr starb am 9. 12. 1878 mit 84 Jahren im Ausgedinge auf Nr. 22.",
      events: [
        { type: "Taufe des Vaters", date: "9. Sept. 1763", place: "Lomigsdorf (Pfarre Rohle)", description: "Taufmatrik der Pfarre Rohle (Scan 207, S. 405): Taufe des Paulus, Sohn des Bauern Pavel Dvořák d. Ä. („Paulus Dworžak rusticus Dlomilovio“) und der Barbara – berichtigt die ältere Fehldeutung auf Jiří Dvořák.", translation: "9. Sept. 1763: Getauft Paulus; Eltern: Paulus Dworžak, Bauer in Lomigsdorf, und Barbara; Paten: Wenceslaus [...] und Marina, Ehefrau des [Georgius?] Dworžak, Bauern in Lomigsdorf.", scanTitle: "Rohle Zá VIII 1 (S. 405, 9. 9. 1763) – Taufe Pavel Dvořák, Sohn von Pavel & Barbara" },
        { type: "Geburt", date: "um 1793", place: "Lomigsdorf (Dlouhomilov) Nr. 22", description: "Geboren in Lomigsdorf Nr. 22 als Sohn des Bauern Pavel Dvořák (*9. 9. 1763) und der Marina geb. Weinlichová." },
        { type: "Volkszählung", date: "25. Nov. 1857", place: "Lomigsdorf (Dlouhomilov) Nr. 22", description: "Eingetragen in Wohnung II als Peter Dworžak (*1793, Grundbesitzer) mit Ehefrau Anna (*1811).", scanTitle: "Zählbogen 1857 – Petr Dvořák (*1793) auf Nr. 22" },
        { type: "Volkszählung", date: "31. Dez. 1869", place: "Lomigsdorf (Dlouhomilov) Nr. 22", description: "Eingetragen in Zeile 10 als Ausgedinger Petr Dvořák (*1793) mit Ehefrau Anna (*1813) im Haushalt seines Sohnes Josef Dvořák (*1816).", scanTitle: "Zählbogen 1869 – Ausgedinger Petr Dvořák (*1793) & Familie Josef Dvořák (*1816)" },
        { type: "Sterbefall", date: "9. Dez. 1878", place: "Lomigsdorf (Dlouhomilov) Nr. 22", description: "Verstorben auf Nr. 22 im Alter von 84 Jahren als Ausgedinger." }
      ]
    },
    "p_josef_dvorak_1857": {
      name: "Josef Dvořák d. Ä.",
      categoryLabel: "Hofbesitzer / Bauer",
      role: "Bauer und Hofwirt auf dem Hof Nr. 22 (1878–1919)",
      father: "Josef Dvořák (*1816 Lomigsdorf), Bauer in Hermesdorf (Temenice) und auf Nr. 22",
      mother: "Anna Dvořáková (*1828 Lomigsdorf, Tochter des Antonín Dvořák)",
      spouse: "Anna Dvořáková geb. Kouřilová (*9. 12. 1857 Nr. 24 – †29. 5. 1949 Nr. 22), Heirat 29. 7. 1878",
      children: ["Josef Dvořák (*3. 6. 1879, Bauer auf Nr. 29)", "Karel Dvořák (*7. 11. 1880, Bauer auf Nr. 22)", "Anna Dvořáková (*20. 11. 1885)", "Marie Anna Dvořáková (*7. 5. 1888)", "Jaromír Dvořák (*27. 7. 1890)", "Ludmila Podhorná geb. Dvořáková (*21. 4. 1893)", "Bernardina Dvořáková (*17. 10. 1895)"],
      biography: "Geboren am 9. Februar 1857 in Hermesdorf (Temenice) bei Mährisch Schönberg, wo seine Eltern Josef (*1816) und Anna (*1828) Dvořák aus Lomigsdorf Nr. 22 damals wirtschafteten. Um 1869 kehrte er mit den Eltern auf den Stammhof Nr. 22 zurück. Am 29. Juli 1878 heiratete er bei der Doppelhochzeit Anna Kouřilová aus dem Nachbarhof Nr. 24 und führte über vierzig Jahre lang die Wirtschaft Nr. 22. Sein ältester Sohn Josef (*1879) wechselte 1907 durch Heirat auf Nr. 29, der jüngere Sohn Karel (*1880) übernahm den Stammhof Nr. 22. Er starb am 10. Juli 1940 im Alter von 83 Jahren im Ausgedinge auf Nr. 22.",
      events: [
        { type: "Geburt", date: "9. Feb. 1857", place: "Hermesdorf / Temenice Nr. 35 (bei Mährisch Schönberg)", description: "Geboren in Hermesdorf Nr. 35 als Sohn des Bauern Josef Dvořák (*1816) und der Anna geb. Dvořáková (*1828)." },
        { type: "Volkszählung", date: "31. Dez. 1869", place: "Lomigsdorf (Dlouhomilov) Nr. 22", description: "Eingetragen als 12-jähriger Schüler in der Familie seines Vaters Josef Dvořák (*1816) und Großvaters Petr Dvořák (*1793) nach der Rückkehr aus Hermesdorf.", scanTitle: "Zählbogen 1869 – Lomigsdorf Nr. 22" },
        { type: "Trauung", date: "29. Juli 1878", place: "Lomigsdorf (Nr. 22 & Nr. 24)", description: "Doppelhochzeit in Lomigsdorf: Josef Dvořák (*1857) heiratet Anna Kouřilová (*1857) aus Nr. 24, sein Bruder Karel heiratet deren Schwester Ludmila." },
        { type: "Volkszählung", date: "31. Dez. 1880", place: "Lomigsdorf (Dlouhomilov) Nr. 22", description: "Junger Bauer auf Nr. 22 mit Ehefrau Anna, den Söhnen Josef (*1879) und Karel (*1880), 3 Mägden und Großmutter Anna (*1814) im Ausgedinge.", scanTitle: "Zählbogen 1880 – Josef Dvořák auf Nr. 22" },
        { type: "Volkszählung", date: "31. Dez. 1890", place: "Lomigsdorf (Dlouhomilov) Nr. 22", description: "Hofwirt auf Nr. 22 mit Ehefrau Anna, 5 Kindern und angeklebtem Taufschein des Sohnes Josef (*1879).", scanTitle: "Zählbogen 1890 – Josef Dvořák auf Nr. 22" },
        { type: "Volkszählung", date: "31. Dez. 1900", place: "Lomigsdorf (Dlouhomilov) Nr. 22", description: "Bauer auf Nr. 22 mit Ehefrau Anna und 7 Kindern.", scanTitle: "Zählbogen 1900 – Josef Dvořák auf Nr. 22" },
        { type: "Volkszählung", date: "31. Dez. 1910", place: "Lomigsdorf (Dlouhomilov) Nr. 22", description: "Hofbesitzer auf Nr. 22 mit Ehefrau Anna und 6 Kindern.", scanTitle: "Zählbogen 1910 – Josef Dvořák auf Nr. 22" },
        { type: "Volkszählung", date: "15. Feb. 1921", place: "Lomigsdorf (Dlouhomilov) Nr. 22", description: "Ausgedinger in Wohnung Nr. 2 auf Nr. 22 mit Ehefrau Anna, den Töchtern Ludmila Podhorná und Bernardina sowie Enkel Jaromír.", scanTitle: "Zählbogen 1921 – Lomigsdorf Nr. 22" },
        { type: "Sterbefall", date: "10. Juli 1940", place: "Lomigsdorf (Dlouhomilov) Nr. 22", description: "Verstorben auf Nr. 22 als Ausgedinger im Alter von 83 Jahren, 5 Monaten und 1 Tag." }
      ]
    },
    "p_anna_dvorakova_1857": {
      name: "Anna Dvořáková (geb. Kouřilová)",
      categoryLabel: "Familienangehörige des Hofbesitzers",
      role: "Bäuerin und Mitbesitzerin des Hofes Nr. 22 (geboren auf Nr. 24)",
      father: "František Kouřil (†11. 8. 1878), Erbbauer auf Nr. 24",
      mother: "Mariana geb. Vlčková, Tochter des Ausgedingers Josef Vlček auf Nr. 24",
      spouse: "Josef Dvořák d. Ä. (1857–1940), Heirat 29. 7. 1878",
      children: ["Josef Dvořák (*3. 6. 1879, Nr. 29)", "Karel Dvořák (*7. 11. 1880, Nr. 22)", "Anna Dvořáková (*20. 11. 1885)", "Marie Anna Dvořáková (*7. 5. 1888)", "Jaromír Dvořák (*27. 7. 1890)", "Ludmila Podhorná geb. Dvořáková (*21. 4. 1893)", "Bernardina Dvořáková (*17. 10. 1895)"],
      biography: "Geboren am 9. Dezember 1857 auf dem denkmalgeschützten Hof Nr. 24 als Tochter des Bauern František Kouřil und der Mariana geb. Vlčková. Am 29. Juli 1878 heiratete sie bei der Doppelhochzeit Josef Dvořák (*1857) vom Nachbarhof Nr. 22, während ihre Schwester Ludmila dessen Bruder Karel heiratete. Auf Nr. 22 zog sie sieben Kinder groß und erreichte das hohe Alter von 91 Jahren (†29. Mai 1949).",
      events: [
        { type: "Geburt", date: "9. Dez. 1857", place: "Lomigsdorf (Dlouhomilov) Nr. 24", description: "Geboren auf Nr. 24 als Tochter des Bauern František Kouřil und der Mariana geb. Vlčková." },
        { type: "Trauung", date: "29. Juli 1878", place: "Lomigsdorf (Nr. 24 & Nr. 22)", description: "Doppelhochzeit der Schwestern Anna und Ludmila Kouřilová aus Nr. 24 mit den Brüdern Josef und Karel Dvořák aus Nr. 22." },
        { type: "Volkszählung", date: "31. Dez. 1880", place: "Lomigsdorf (Dlouhomilov) Nr. 22", description: "Eingetragen als Ehefrau des Hofwirts und Mitbesitzerin der Wirtschaft Nr. 22.", scanTitle: "Zählbogen 1880 – Anna Dvořáková auf Nr. 22" },
        { type: "Volkszählung", date: "15. Feb. 1921", place: "Lomigsdorf (Dlouhomilov) Nr. 22", description: "Eingetragen mit Ehemann Josef im Ausgedinge in Wohnung Nr. 2 auf Nr. 22.", scanTitle: "Zählbogen 1921 – Lomigsdorf Nr. 22" },
        { type: "Sterbefall", date: "29. Mai 1949", place: "Lomigsdorf (Dlouhomilov) Nr. 22", description: "Verstorben auf Nr. 22 als Ausgedingerin und Witwe nach Josef Dvořák im gesegneten Alter von 91 Jahren, 5 Monaten und 20 Tagen." }
      ]
    },
    "p_karel_dvorak_1880": {
      categoryLabel: "Hofbesitzer / Bauer",
      role: "Selbständiger Landwirt und Hofwirt auf Nr. 22 (1919–1942)",
      father: "Josef Dvořák d. Ä. (1857–1940), Bauer auf Nr. 22",
      mother: "Anna Dvořáková geb. Kouřilová (1857–1949) aus Nr. 24",
      spouse: "Anna / Ludmila geb. Maulerová (Heirat 13. 9. 1919)",
      children: ["Ludmila Dvořáková (*24. 3. 1916, verh. 1936 mit Karel Šafář auf Nr. 10)", "Karel Dvořák d. J. (*1918)", "Drahomíra Dvořáková (*1921)"],
      biography: "Zweitgeborener Sohn von Josef Dvořák (*1857) und Anna geb. Kouřilová (*1857) auf Nr. 22, jüngerer Bruder von Josef Dvořák (*1879) auf Nr. 29. Während der ältere Bruder Josef 1907 durch Heirat auf Nr. 29 wechselte, blieb Karel auf dem Stammhof Nr. 22, den er nach dem Ersten Weltkrieg übernahm und bis zu seinem Tod am 5. Mai 1942 bewirtschaftete. Seine Tochter Ludmila (*1916) heiratete 1936 den Nachbarn Karel Šafář vom Hof Nr. 10.",
      events: [
        { type: "Geburt", date: "7. Nov. 1880", place: "Lomigsdorf (Dlouhomilov) Nr. 22", description: "Geboren auf Nr. 22 als Sohn des Bauern Josef Dvořák und der Anna geb. Kouřilová; bei der Zählung vom 31. 12. 1880 als zweimonatiger Säugling verzeichnet.", scanTitle: "Zählbogen 1880 – Säugling Karel Dvořák (*7. 11. 1880)" },
        { type: "Volkszählung", date: "15. Feb. 1921", place: "Lomigsdorf (Dlouhomilov) Nr. 22", description: "Selbständiger Landwirt und Hofbesitzer auf Nr. 22 mit Familie und 4 Dienstboten.", scanTitle: "Zählbogen 1921 – Bauer Karel Dvořák auf Nr. 22" },
        { type: "Sterbefall", date: "5. Mai 1942", place: "Lomigsdorf (Dlouhomilov) Nr. 22", description: "Verstorben auf Nr. 22 als Landwirt im Alter von 61 Jahren, 5 Monaten und 28 Tagen." }
      ]
    }
  }
};

i18nData.maps = {
  en: {
    "muller1716": {
      title: "Tabula Generalis Marchionatus Moraviae In Sex Circulos Divisae",
      subTitle: "Müller's Map of Moravia – Olomouc Circle (Homann Edition)",
      period: "Baroque (Reign of Charles VI)",
      description: "The oldest detailed map of Moravia by Jan Kryštof Müller (1673–1721), surveyed in 1708–1712 and engraved by Johann Baptist Homann in Nuremberg. Clearly depicts Dlouhomilov (Lomigsdorf) with church symbol, upland Benkov (Benke), and neighboring Brníčko (Brünles) with castle ruins.",
      keyFeatures: [
        "Oldest printed cartographic depiction of Lomigsdorf and Benke",
        "Symbol of the filial church in Dlouhomilov and castle ruin in Brníčko",
        "Baroque shaded relief of the Jeseníky foothills"
      ]
    },
    "wieland1726": {
      title: "Map of Bohemia & Borderland by J. W. Wieland (Sheet 4)",
      subTitle: "Baroque borderland map of Eastern Bohemia and North-West Moravia",
      period: "Early 18th Century",
      description: "Baroque regional map by military engineer Johann Wolfgang Wieland capturing the Bohemian-Moravian borderland and the Zábřeh (Hohenstadt) domain.",
      keyFeatures: [
        "Depiction of the Zábřeh (Hohenstadt) and Šumperk (Mährisch Schönberg) area",
        "Hydrographic network of the Morava, Desná, and Loučka streams",
        "Historical road network of North-West Moravia"
      ]
    },
    "atlas1758": {
      title: "Atlas Topographique et Militaire, Qui comprend les Etats de la Couronne de Boheme",
      subTitle: "French military atlas from the Seven Years' War (R. J. Julien, Paris)",
      period: "Seven Years' War (1756–1763)",
      description: "French military campaign atlas published in Paris by Roch-Joseph Julien during the Seven Years' War between Empress Maria Theresa and King Frederick II of Prussia, derived from Müller's map for military movements in North Moravia.",
      keyFeatures: [
        "French military cartography from the Seven Years' War",
        "Strategic passes and roads between Zábřeh, Šumperk, and Uničov",
        "Historical spelling Lomigsdorf and Benke"
      ]
    },
    "dieceze1762": {
      title: "Map of the Diocese of Olomouc by J. V. X. Frey von Freyenfels",
      subTitle: "Ecclesiastical map of the Olomouc Diocese before the Josephinian reforms",
      period: "Theresian Era (1762)",
      description: "Rare ecclesiastical map showing the parish network of the Diocese of Olomouc in 1762—right at the moment when Dlouhomilov and Benkov were transitioning from the parish of Dubicko to the closer parish of Rohle (1763–1784).",
      keyFeatures: [
        "Ecclesiastical boundaries of deaneries and parishes in 1762",
        "Shows Dlouhomilov as a filial church before establishing its own parish in 1784",
        "Baroque copperplate engraving dedicated to Bishop Hamilton"
      ]
    },
    "vojenske1_1764": {
      title: "I. Military Survey (Josephinian Survey)",
      subTitle: "Hand-drawn color military topography at 1 : 28,800 scale",
      period: "Reign of Maria Theresa & Joseph II",
      description: "First large-scale topographic survey of the Habsburg monarchy (1 : 28,800, 1764–1768). Captures every farmstead along the valley stream in Lomigsdorf, the wooden precursor / construction of All Saints' Church, the northern hamlet of Dreihofen (Medelské), and upland Benke (Benkov).",
      keyFeatures: [
        "Individual farmsteads, mills, and gardens rendered in color",
        "Historical road network, streams, and wet meadows",
        "Toponyms: Lomigsdorf, Dreihofen (Medelské), Benke (Benkov)"
      ]
    },
    "maehren1810": {
      title: "Mähren Und Oesterreichisch Schlesien",
      subTitle: "Overview map of Moravia and Austrian Silesia from the Napoleonic Wars",
      period: "Napoleonic Era (1810)",
      description: "Early 19th-century administrative and postal map of the Margraviate of Moravia and Duchy of Silesia showing circle boundaries and post roads.",
      keyFeatures: [
        "Administrative division into Moravian circles (Olomouc Circle)",
        "Main imperial post roads and towns (Hohenstadt, Mährisch Schönberg)",
        "Copperplate print from 1810"
      ]
    },
    "cadastre1834": {
      title: "Imperial Mandatory Imprint of the Stable Cadastre (Lomigsdorf)",
      subTitle: "Hand-colored parcel map at 1 : 2,880 scale (Sheet IV)",
      period: "Reign of Emperor Francis I (1834)",
      description: "The most important genealogical and architectural map of Dlouhomilov (Lomigsdorf) from 1834 at 1 : 2,880 scale. Every single building, courtyard, barn, garden, and field parcel is plotted with geodetic accuracy: yellow indicates wooden/timbered buildings, red/pink indicates stone or brick buildings (such as All Saints' Church No. 1, Rectory No. 2, Rychta No. 7, and Farmstead No. 29).",
      keyFeatures: [
        "Exact parcel numbers matching the 1834 land protocol",
        "Color coding: red = brick/stone masonry, yellow = timbered/wooden structures",
        "Historical layout of all farmsteads, barns, and orchards in 1834"
      ]
    },
    "vojenske2_1838": {
      title: "II. Military Survey (Franciscan Survey)",
      subTitle: "Detailed topographic map based on the Stable Cadastre network",
      period: "Vormärz / Pre-1848 Era (1838)",
      description: "Military survey based directly on the trigonometric network of the 1834 Stable Cadastre. Features fine hachured relief of the Bukovická hora slopes, accurate village floorplan, and the hamlet of Dreihofen (Medelské).",
      keyFeatures: [
        "Topographic relief with slope hachures",
        "Depiction of the hamlets Tři Dvory / Dreihofen (Medelské)",
        "High planimetric accuracy derived from the 1834 cadastre"
      ]
    },
    "vojenske3_1874": {
      title: "III. Military Survey – Topographic Section 1 : 25,000",
      subTitle: "Detailed Austro-Hungarian topographic section",
      period: "Austria-Hungary",
      description: "First modern large-scale topographic map (1 : 25,000) with 20-meter contour lines. Records field paths, wayside shrines, crosses, and spot elevations, listing bilingual toponyms Lomigsdorf / Dlouhomilow, Dreihofen for Medelské, and Benke for Benkov.",
      keyFeatures: [
        "Historical toponyms: Lomigsdorf / Dlouhomilow, Dreihofen, Benke",
        "Contour relief alongside terrain shading",
        "Wayside crosses, chapels, and all valley homesteads"
      ]
    },
    "vojenske3_1879": {
      title: "III. Military Survey – Mähr. Neustadt und Schönberg (1 : 75,000)",
      subTitle: "Special Map of the Uničov and Šumperk Sheet",
      period: "Austria-Hungary (1879, rev. 1904)",
      description: "Special Map (Spezialkarte 1 : 75,000) of the Uničov and Šumperk sheet published in 1879 with revisions up to 1904. Essential for studying the regional railway and road network with toponyms Lomigsdf. (Dlouhomilo), Dreihofen, and Benke.",
      keyFeatures: [
        "Regional Special Map at 1 : 75,000 scale",
        "Period names: Lomigsdf. (Dlouhomilo), Dreihofen, Benke",
        "Railways and district roads across the Zábřeh and Hanušovice highlands"
      ]
    },
    "narodnostni1906": {
      title: "Nationality Map of Moravia – Northern Moravia & Eastern Bohemia",
      subTitle: "Chytil's Ethnographic and Linguistic Map (1906)",
      period: "Turn of the 20th Century (1906)",
      description: "Unique nationality map by Alois Chytil capturing the sharp linguistic border between Czech and German settlement. While Dlouhomilov and Medelské lie in the Czech language area (colored red), neighboring upland Benkov (Benke) is marked as purely German (colored green).",
      keyFeatures: [
        "Authentic language border: Czech Dlouhomilov & Medelské (red) vs. German Benkov (green)",
        "Clear visualization of the ethnic boundary between Zábřeh and Šumperk",
        "Full-color map with original ethnographic legend"
      ]
    },
    "vojenske3_1937": {
      title: "III. Military Survey – Topographic Map of Czechoslovakia (5th Edition)",
      subTitle: "Pre-WWII topographic map 1 : 25,000 completed in 1937",
      period: "First Czechoslovak Republic (1937)",
      description: "High-precision prewar Czechoslovak topographic map at 1 : 25,000 scale completed just before the 1938 Munich Crisis. Documents the municipality during the First Republic with official Czech toponyms Dlouhomilov, Medelské, and Benkov.",
      keyFeatures: [
        "Official Czechoslovak nomenclature and trigonometric points",
        "Road network prior to World War II",
        "Floorplan of all farmsteads and houses in 1937"
      ]
    },
    "sudetenland1940": {
      title: "Reichsgau Sudetenland. Regierungsbezirk Troppau",
      subTitle: "Administrative Map of Reichsgau Sudetenland (Opava Government Region)",
      period: "German Occupation (1938–1945)",
      description: "Official administrative map of Reichsgau Sudetenland (Regierungsbezirk Troppau / Opava). Shows the wartime district division (1938–1945): Dlouhomilov (Lomigsdorf) belonged to Landkreis Hohenstadt (Zábřeh), while Benkov (Benke) belonged to Landkreis Mährisch Schönberg (Šumperk).",
      keyFeatures: [
        "District boundary: Lomigsdorf under Hohenstadt vs. Benke under Mährisch Schönberg",
        "Official German wartime nomenclature (Lomigsdorf, Benke)",
        "Overview of Regierungsbezirk Troppau in Reichsgau Sudetenland"
      ]
    },
    "vojenske3_1945": {
      title: "III. Military Survey – Postwar Print (August 1945)",
      subTitle: "Postwar topographic section 1 : 25,000 issued right after liberation",
      period: "Postwar Czechoslovakia (Aug 1945)",
      description: "Postwar print of the 1 : 25,000 topographic section issued in August 1945 immediately after liberation, documenting the landscape and settlements prior to the postwar transfer of the German population.",
      keyFeatures: [
        "Historical August 1945 print",
        "Cadastral boundary between Dlouhomilov and Benkov",
        "Settlement state immediately at the end of WWII"
      ]
    },
    "topo1952": {
      title: "Topographic Map in the S-1952 System (1 : 25,000)",
      subTitle: "Military topographic map in the Warsaw Pact coordinate system",
      period: "Postwar Czechoslovakia (1952)",
      description: "Postwar military topographic map in the S-1952 coordinate system (Gauss-Krüger projection), accurately depicting Dlouhomilov, Medelské, Benkov, Brníčko, and Kolšov in the early 1950s.",
      keyFeatures: [
        "S-1952 coordinate system (Gauss-Krüger projection)",
        "Early 1950s postwar settlement state",
        "Detailed contour lines and elevation points"
      ]
    },
    "en1960": {
      title: "Real Estate Registration Map (EN 1960)",
      subTitle: "Cadastral economic map from the year of unification of Dlouhomilov & Benkov",
      period: "Socialist Era (1960)",
      description: "Cadastral map from the period of agricultural collectivization (JZD) and the administrative unification of Dlouhomilov, Medelské, and Benkov in 1960.",
      keyFeatures: [
        "Consolidation of private strips into cooperative fields",
        "Building parcels and new agricultural cooperative buildings",
        "State of the village in the unification year 1960"
      ]
    }
  },
  de: {
    "muller1716": {
      title: "Tabula Generalis Marchionatus Moraviae In Sex Circulos Divisae",
      subTitle: "Müllers Karte von Mähren – Olmützer Kreis (Homann-Ausgabe)",
      period: "Barock (Regierungszeit Karls VI.)",
      description: "Die älteste detaillierte Karte Mährens von Johann Christoph Müller (1673–1721), aufgenommen 1708–1712 und gestochen von Johann Baptist Homann in Nürnberg. Zeigt deutlich Lomigsdorf (Dlouhomilov) mit Kirchensymbol, das Höhendorf Benke (Benkov) sowie Brünles (Brníčko) mit der Burgruine.",
      keyFeatures: [
        "Älteste gedruckte kartographische Darstellung von Lomigsdorf und Benke",
        "Symbol der Filialkirche in Lomigsdorf und der Burgruine in Brünles",
        "Barocke Geländeschraffur des Altvater-Vorlandes"
      ]
    },
    "wieland1726": {
      title: "Karte von Böhmen & Grenzgebiet von J. W. Wieland (Blatt 4)",
      subTitle: "Barocke Grenzkarte Ostböhmens und Nordwestmährens",
      period: "Frühes 18. Jahrhundert (1726)",
      description: "Barocke Regionalkarte des Militäringenieurs Johann Wolfgang Wieland mit Darstellung des böhmisch-mährischen Grenzraumes und der Herrschaft Hohenstadt (Zábřeh).",
      keyFeatures: [
        "Darstellung des Raumes Hohenstadt (Zábřeh) und Mährisch Schönberg (Šumperk)",
        "Gewässernetz von March, Tess und Loučka-Bach",
        "Historisches Wegenetz Nordwestmährens"
      ]
    },
    "atlas1758": {
      title: "Atlas Topographique et Militaire, Qui comprend les Etats de la Couronne de Boheme",
      subTitle: "Französischer Militäratlas aus dem Siebenjährigen Krieg (R. J. Julien, Paris)",
      period: "Siebenjähriger Krieg (1756–1763)",
      description: "In Paris von Roch-Joseph Julien herausgegebener französischer Militäratlas aus dem Siebenjährigen Krieg zwischen Kaiserin Maria Theresia und König Friedrich II. von Preußen.",
      keyFeatures: [
        "Französische Militärkartographie aus dem Siebenjährigen Krieg",
        "Strategische Wege zwischen Hohenstadt, Mährisch Schönberg und Mährisch Neustadt",
        "Historische Schreibweise Lomigsdorf und Benke"
      ]
    },
    "dieceze1762": {
      title: "Karte des Bistums Olmütz von J. V. X. Frey von Freyenfels",
      subTitle: "Kirchenkarte der Olmützer Diözese vor den Josephinischen Reformen",
      period: "Theresianische Zeit (1762)",
      description: "Seltene Diözesankarte des Bistums Olmütz aus dem Jahr 1762 – genau aus jener Zeit, als Lomigsdorf (Dlouhomilov) und Benke (Benkov) von der Pfarre Dubitzko (Dubicko) zur näheren Pfarre Rohle (1763–1784) wechselten.",
      keyFeatures: [
        "Kirchliche Grenzen der Dekanate und Pfarreien im Jahr 1762",
        "Zeigt Lomigsdorf als Filialkirche vor Errichtung der eigenen Lokalie 1784",
        "Barocker Kupferstich, gewidmet Fürstbischof Hamilton"
      ]
    },
    "vojenske1_1764": {
      title: "I. Militärische Landesaufnahme (Josephinische Aufnahme)",
      subTitle: "Handgezeichnete farbige Militärtopographie im Maßstab 1 : 28 800",
      period: "Regierungszeit Maria Theresias & Josephs II.",
      description: "Erste großmaßstäbige topographische Landesaufnahme der Habsburgermonarchie (1 : 28 800, 1764–1768). Erfasst jedes einzelne Gehöft längs des Talbaches in Lomigsdorf (Dlouhomilov), die Kirche Allerheiligen, den nördlichen Weiler Dreihofen (Medelské) und das Höhendorf Benke (Benkov).",
      keyFeatures: [
        "Einzelne Bauernhöfe, Mühlen und Gärten farbig eingezeichnet",
        "Historisches Wegenetz, Bäche und Feuchtwiesen",
        "Toponyme: Lomigsdorf, Dreihofen (Medelské), Benke (Benkov)"
      ]
    },
    "maehren1810": {
      title: "Mähren Und Oesterreichisch Schlesien",
      subTitle: "Übersichtskarte von Mähren und Österreichisch-Schlesien aus den Napoleonischen Kriegen",
      period: "Napoleonische Ära (1810)",
      description: "Verwaltungs- und Postkarte der Markgrafschaft Mähren und des Herzogtums Schlesien aus dem Jahr 1810 mit Kreisgrenzen und Poststraßen.",
      keyFeatures: [
        "Verwaltungsgliederung in mährische Kreise (Olmützer Kreis)",
        "Kaiserliche Poststraßen und Städte (Hohenstadt, Mährisch Schönberg)",
        "Kupferstich aus dem Jahr 1810"
      ]
    },
    "cadastre1834": {
      title: "Kaiserlicher Pflichtabdruck des Stabilen Katasters (Lomigsdorf)",
      subTitle: "Handkolorierte Parzellenkarte im Maßstab 1 : 2 880 (Blatt IV)",
      period: "Regierungszeit Kaiser Franz I. (1834)",
      description: "Die wichtigste genealogische und bauhistorische Karte von Lomigsdorf (Dlouhomilov) aus dem Jahr 1834 im Maßstab 1 : 2 880. Jedes Wohngebäude, jeder Hof, jede Scheune und jede Ackerparzelle ist geodätisch exakt vermessen: Gelb bezeichnet Holz-/Blockbauten, Rot/Rosa bezeichnet Stein- und Ziegelbauten (wie die Allerheiligenkirche Nr. 1, den Pfarrhof Nr. 2, das Erbgericht Nr. 7 und den Hof Nr. 29).",
      keyFeatures: [
        "Exakte Bauparzellennummern passend zum Parzellenprotokoll von 1834",
        "Farbkodierung: Rot = Massiv-/Steinbau, Gelb = Holz-/Blockbau",
        "Historischer Grundriss aller Höfe, Scheunen und Gärten im Jahr 1834"
      ]
    },
    "vojenske2_1838": {
      title: "II. Militärische Landesaufnahme (Franziszeische Aufnahme)",
      subTitle: "Detaillierte topographische Karte auf Basis des Stabilen Katasters",
      period: "Vormärz (1838)",
      description: "Militärische Landesaufnahme direkt auf Grundlage des trigonometrischen Netzes des Stabilen Katasters von 1834. Besticht durch plastische Geländeschraffur der Hänge, genauen Ortsgrundriss und Einzeichnung des Weilers Dreyhofen (Dreihofen / Medelské).",
      keyFeatures: [
        "Topographisches Relief mit Böschungsschraffen",
        "Einzeichnung des Weilers Dreyhofen / Dreihofen (Medelské)",
        "Hohe Lagegenauigkeit dank des Katasters von 1834"
      ]
    },
    "vojenske3_1874": {
      title: "III. Militärische Landesaufnahme – Topographische Sektion 1 : 25 000",
      subTitle: "Detaillierte österreichisch-ungarische Aufnahmesektion",
      period: "Österreich-Ungarn (1874–1920)",
      description: "Erste moderne topographische Karte im großen Maßstab 1 : 25 000 mit exakten 20-Meter-Höhenlinien. Verzeichnet Feldwege, Bildstöcke, Wegkreuze und Höhenkoten mit den zeitgenössischen Ortsnamen Lomigsdorf / Dlouhomilow, Dreihofen (Medelské) und Benke (Benkov).",
      keyFeatures: [
        "Zeitgenössische Ortsnamen: Lomigsdorf / Dlouhomilow, Dreihofen, Benke",
        "Höhenlinienrelief kombiniert mit Geländeschraffur",
        "Wegkreuze, Kapellen und sämtliche Einschichten im Tal"
      ]
    },
    "vojenske3_1879": {
      title: "III. Militärische Landesaufnahme – Mähr. Neustadt und Schönberg (1 : 75 000)",
      subTitle: "Spezialkarte des Blattes Mährisch Neustadt und Mährisch Schönberg",
      period: "Österreich-Ungarn (1879, Nachträge bis 1904)",
      description: "Spezialkarte 1 : 75 000 des Blattes Mährisch Neustadt und Mährisch Schönberg (Uničov a Šumperk) von 1879 mit Nachträgen bis 1904. Wichtig für das Studium des Bahn- und Straßennetzes mit den Namensformen Lomigsdf. (Dlouhomilo), Dreihofen und Benke.",
      keyFeatures: [
        "Übersichtliche Spezialkarte im Maßstab 1 : 75 000",
        "Historische Namensformen: Lomigsdf. (Dlouhomilo), Dreihofen, Benke",
        "Eisenbahnlinien und Bezirksstraßen des Hohenstädter und Hannsdorfer Berglandes"
      ]
    },
    "narodnostni1906": {
      title: "Nationalitätenkarte von Mähren – Nordmähren und Ostböhmen",
      subTitle: "Chytils ethnographische und sprachliche Karte (1906)",
      period: "Jahrhundertwende (1906)",
      description: "Einzigartige Nationalitätenkarte von Alois Chytil, welche die scharfe Sprachgrenze zwischen tschechischer und deutscher Besiedlung festhält: Während Lomigsdorf (Dlouhomilov) und Dreihofen (Medelské) im tschechischen Sprachgebiet liegen (rot), ist das benachbarte Höhendorf Benke (Benkov) als rein deutschsprachig (grün) ausgewiesen.",
      keyFeatures: [
        "Authentische Sprachgrenze: tschechisches Lomigsdorf & Dreihofen (rot) vs. deutsches Benke (grün)",
        "Anschauliche Darstellung der Nationalitätengrenze zwischen Hohenstadt und Mährisch Schönberg",
        "Farbige Karte mit originaler ethnographischer Legende"
      ]
    },
    "vojenske3_1937": {
      title: "III. Militärische Landesaufnahme – Topographische Karte der ČSR (5. Ausgabe)",
      subTitle: "Topographische Vorkriegskarte 1 : 25 000 aus dem Jahr 1937",
      period: "Erste Tschechoslowakische Republik (1937)",
      description: "Präzise topographische Karte der Ersten Republik im Maßstab 1 : 25 000 kurz vor dem Münchner Abkommen 1938 mit den amtlichen Ortsnamen Dlouhomilov, Medelské und Benkov.",
      keyFeatures: [
        "Amtliche tschechoslowakische Nomenklatur und Trigonometrische Punkte",
        "Zustand des Straßennetzes vor dem Zweiten Weltkrieg",
        "Grundriss aller Höfe und Anwesen im Jahr 1937"
      ]
    },
    "sudetenland1940": {
      title: "Reichsgau Sudetenland. Regierungsbezirk Troppau",
      subTitle: "Verwaltungskarte des Reichsgaus Sudetenland (Regierungsbezirk Troppau)",
      period: "Deutsches Reich / Sudetenland (1938–1945)",
      description: "Amtliche Verwaltungskarte des Reichsgaus Sudetenland (Regierungsbezirk Troppau / Opava) von 1940. Zeigt die Kreiseinteilung in den Jahren 1938–1945: Lomigsdorf (Dlouhomilov) gehörte zum Landkreis Hohenstadt (Zábřeh), während Benke (Benkov) zum Landkreis Mährisch Schönberg (Šumperk) gehörte.",
      keyFeatures: [
        "Kreisgrenze: Lomigsdorf beim Landkreis Hohenstadt vs. Benke beim Landkreis Mährisch Schönberg",
        "Amtliche deutsche Ortsnamen (Lomigsdorf, Benke)",
        "Übersicht des Regierungsbezirks Troppau im Reichsgau Sudetenland"
      ]
    },
    "vojenske3_1945": {
      title: "III. Militärische Landesaufnahme – Nachkriegsdruck (August 1945)",
      subTitle: "Topographische Sektion 1 : 25 000 unmittelbar nach Kriegsende",
      period: "Nachkriegs-Tschechoslowakei (Aug. 1945)",
      description: "Nachkriegsdruck der topographischen Sektion vom August 1945 unmittelbar nach Kriegsende. Dokumentiert den Zustand der Landschaft und Bebauung vor der Aussiedlung der deutschen Bevölkerung.",
      keyFeatures: [
        "Historischer Druck vom August 1945",
        "Historische Katastergrenze zwischen Lomigsdorf (Dlouhomilov) und Benke (Benkov)",
        "Bebauungsstand unmittelbar bei Kriegsende 1945"
      ]
    },
    "topo1952": {
      title: "Topographische Karte im System S-1952 (1 : 25 000)",
      subTitle: "Militärtopographische Karte im Koordinatensystem S-1952",
      period: "Nachkriegs-Tschechoslowakei (1952)",
      description: "Militärische Nachkriegskarte im neuen Koordinatensystem S-1952 (Gauß-Krüger-Abbildung) mit exakter Darstellung von Lomigsdorf (Dlouhomilov), Dreihofen (Medelské), Benke (Benkov), Brünles (Brníčko) und Kolleschau (Kolšov).",
      keyFeatures: [
        "Koordinatensystem S-1952 (Gauß-Krüger-Abbildung)",
        "Bebauungsstand der frühen 1950er Jahre",
        "Präzise Höhenlinien und Höhenkoten"
      ]
    },
    "en1960": {
      title: "Karte der Liegenschaftsevidenz (EN 1960)",
      subTitle: "Katastrale Wirtschaftskarte aus dem Jahr der Gemeindezusammenlegung 1960",
      period: "Sozialistische Ära (1960)",
      description: "Katasterkarte aus der Zeit der Gründung der landwirtschaftlichen Produktionsgenossenschaft (JZD) und der administrativen Vereinigung von Dlouhomilov, Medelské und Benkov im Jahr 1960.",
      keyFeatures: [
        "Zusammenlegung der Bauernfelder zu Genossenschaftsschlägen",
        "Bauparzellen und neue Wirtschaftsgebäude",
        "Ortszustand im Vereinigungsjahr 1960"
      ]
    }
  }
};

i18nData.guide = {
  en: {
    jurisdiction: {
      village: "Dlouhomilov (German: Lomigsdorf) & Hamlet of Medelské (Dreihofen)",
      associatedVillage: "Benkov (German: Benke – united with Dlouhomilov in 1960)",
      parish: "Roman Catholic Parish of Dlouhomilov (Church of All Saints – from 1785/1786 for Dlouhomilov incl. Medelské & both Olešnás; pre-1786 registers in Dubicko Zá IV 1–2 [1617–1722], Zábřeh [from 1649], Brníčko [from 1653], Lesnice [from 1676] & Rohle Zá VIII [1720–1786, where Benkov stayed until 1932])",
      politicalDistrict: "Zábřeh (Hohenstadt) • today Šumperk District (Olomouc Region)",
      judicialDistrict: "Zábřeh (for Dlouhomilov & Medelské) / Šumperk (for Benkov)",
      cadastralTerritory: "Dlouhomilov [626597] (incl. Medelské) & Benkov u Dlouhomilova [626589]",
      feudalDomain: "Zábřeh Estate (Herrschaft Hohenstadt – Princes of Liechtenstein)",
      heritageZone: "Dlouhomilov Village Monument Zone (ÚSKP 2350, declared 1995)",
      stateArchiveDistrict: "State District Archive (SOkA) Šumperk (1857–1921 censuses, municipal and school chronicles)",
      provincialArchive: "Provincial Archive in Opava – ZAO, Olomouc Branch (vital registers 1617–1949; 1585 Urbar; 1584/1617 land registers; 1623 Aretin map AKP No. 81)",
      coatOfArms: {
        grantedBy: "Speaker of the Chamber of Deputies of the Parliament of the Czech Republic (Lubomír Zaorálek)",
        decision: "Decree No. 37 of May 24, 2004 (REKOS)",
        blazon: "In a silver-and-red party per pale shield, two crossed upright spades between two five-petaled apple blossoms with golden centers, all counterchanged, surmounted by a golden plow colter facing sinister.",
        symbolism: "The silver-and-red divided shield expresses the historical and administrative union of Dlouhomilov (with the hamlet of Medelské) and upland Benkov (Benke), which have formed a single municipality since 1960. The two crossed spades and golden plow colter (krojidlo) refer to the centuries-old agricultural character of the valley and the clearing of foothill forests since the first written mention in 1356; the two apple blossoms symbolize the two main parts of the municipality and the famous fruit orchards on the slopes of Dlouhomilov and Benkov."
      }
    },
    houseNumberingContinuity: {
      title: "Continuity of House Numbers (čp.) Between 1771, 1834, 1857–1921 and Today",
      subtitle: "Comparison of the Stable Cadastre (1834), Population Censuses (1857–1921), and Parish Registers (1786–1949)",
      overview: "Comparison of the Imperial Imprint of the Stable Cadastre (1834), six population censuses (1857, 1869, 1880, 1890, 1900, 1910, 1921), and the vital registers of the Dlouhomilov parish (1786–1949) confirms that Dlouhomilov was NEVER renumbered across the entire village. House numbers assigned during the first Theresian conscription (1770–1771) have remained tied to the exact same homesteads up to the present day!",
      numberingSeries: [
        {
          locality: "1. Dlouhomilov (Main Village)",
          range: "Nos. 1 – 141+",
          cadastralNote: "Continuous numbering from the Baroque core (No. 1 Church, No. 2 Rectory, No. 7 Rychta, No. 10, No. 22, No. 24, No. 29). Newer cottages built in the 19th and 20th centuries received higher numbers at the end of the series (e.g. Smithy No. 110)."
        },
        {
          locality: "2. Hamlet of Medelské (Dreihofen)",
          range: "Medelské Nos. 1 – 10",
          cadastralNote: "Independent numbering series inside the Dlouhomilov cadastre! In parish registers and censuses it is distinguished by the prefix 'Medelské No. 1' (Šafář/Minář) or 'Medelské No. 2' (Nejedlý—solved the mystery of why 'No. 2' was not the rectory!)."
        },
        {
          locality: "3. Settlement of Benkov (Benke)",
          range: "Benkov Nos. 1 – 49",
          cadastralNote: "Independent cadastral territory and municipality in the Šumperk District (OÚ Šumperk – I, NAD 999) until the 1960 merger; belonged ecclesiastically to Rohle until 1932. Fully processed on this portal for 1910 (45 houses, 275 residents) and 1921 (211 residents + all 45 House Summary Sheets from 219/219 scans), plus 109 Zá II parish entries across 40 houses (1889–1949)."
        }
      ],
      evolution: [
        { period: "1834", source: "Stable Cadastre (Parcel Protocol)", count: "80 houses (+ 8 in Medelské)", note: "Original peasant and smallholder network Nos. 1–80" },
        { period: "1857 & 1869", source: "Population Census (Boxes 253, 300)", count: "80 houses", note: "Unchanged numbering range (Nos. 1–80)" },
        { period: "1900", source: "Population Census (Box 397)", count: "106 houses", note: "New cottages and subdivided homesteads (Nos. 81–106)" },
        { period: "1910", source: "Population Census (Box 436)", count: "115 houses", note: "Expansion along village edges (Nos. 107–115, incl. No. 110)" },
        { period: "1921", source: "Population Census (Fascicle 3)", count: "118 houses (+ 10 in Medelské)", note: "First Republic state (Nos. 1–118)" },
        { period: "1889–1949", source: "Parish Registers B/M/D (Zá II 7, Zá II 10)", count: "154 recorded Nos.", note: "Continuous series up to No. 141 + interwar construction" }
      ],
      keyHouses: [
        { houseId: "cp3", label: "No. 3 (Dvořák Cottage)", parcel1834: "st. 5", parcel1910: "st. 5", continuity: "Continuous (1834–1921+)", families: "Dvořák family (widow Kateřina *1845, son Jan *1892)", parishRecords: "1921 Census (4 residents)" },
        { houseId: "cp4", label: "No. 4 (Koš & Vénos House)", parcel1834: "st. 6", parcel1910: "st. 6", continuity: "Continuous (1834–1921+)", families: "Antonín Koš (*1873) • Františka Vénosová (*1853) • Josef Vénos (*1871)", parishRecords: "1921 Census (3 apartments, 8 residents)" },
        { houseId: "cp5", label: "No. 5 (Lukas Farmstead – Protected Monument)", parcel1834: "st. 7", parcel1910: "st. 7", continuity: "Continuous (1834–1949)", families: "Merta / Pavlík → Karel (*1860) & Filomena (*1864) Lukas", parishRecords: "7 entries (1889–1949) + 1921 Census" },
        { houseId: "cp6", label: "No. 6 (Jílek Farmstead)", parcel1834: "st. 9", parcel1910: "st. 9", continuity: "Continuous (1834–1921+)", families: "Marie Jílková (*1849) • family of Jan Šindler (*1855)", parishRecords: "1921 Census (2 apartments, 8 residents)" },
        { houseId: "cp7", label: "No. 7 (Hereditary Rychta – Protected Monument)", parcel1834: "st. 10", parcel1910: "st. 10", continuity: "Continuous (1786–1949)", families: "Merta (magistrates) → Krobot → Cink → Pavlík • 1921: Hvížď, Ptáčková, Navrátil", parishRecords: "8 entries (1889–1949) + 100 census records" },
        { houseId: "cp8", label: "No. 8 (Braný Homestead)", parcel1834: "st. 11", parcel1910: "st. 11", continuity: "Continuous (1834–1921+)", families: "Isidor Braný (*1860) with wife Sidonie (*1862)", parishRecords: "1921 Census (4 residents)" },
        { houseId: "cp10", label: "No. 10 (Jílek & Šafář Full-Hide Estate)", parcel1834: "st. 14", parcel1910: "st. 14", continuity: "Continuous (1815–1949)", families: "Gilek (Jílek) → Šafář (from Medelské No. 1)", parishRecords: "6 entries (1889–1949) + 71 census records" },
        { houseId: "cp22", label: "No. 22 (Dvořák Farmstead)", parcel1834: "st. 30", parcel1910: "st. 30", continuity: "Continuous (1786–1949)", families: "Petr Dvořák (*1793) → Josef (*1821) → Josef (*1857) → Karel (*1880)", parishRecords: "7 entries (1889–1949) + 71 census records" },
        { houseId: "cp24", label: "No. 24 (Gated Peasant Farmstead)", parcel1834: "st. 32", parcel1910: "st. 32", continuity: "Continuous (1834–1949)", families: "Kouřil (1834–1878) → Krobot (František, Jan, Štěpán)", parishRecords: "10 entries (1889–1949)" },
        { houseId: "cp29", label: "No. 29 (Dvořák Ancestral Estate – Protected Monument)", parcel1834: "st. 63", parcel1910: "st. 62", continuity: "Continuous (1679–1949)", families: "Pavel Dvořák (1679) → Johann (*1795) → Alois (*1830) → Josef (*1879, from No. 22)", parishRecords: "12 entries (1889–1949) + 86 census records" },
        { houseId: "cp46", label: "No. 46 (Krobot, Dvořák & Berka Cottage)", parcel1834: "st. 60", parcel1910: "st. 60", continuity: "Continuous (1834–1949)", families: "Jurenka (1834) → Krobot / Dvořák / Hejtman → Berka (1920)", parishRecords: "9 entries (1889–1949) + 19 census records" },
        { houseId: "cp110", label: "No. 110 (Berka Smithy & Cottage)", parcel1834: "— (built before 1910)", parcel1910: "st. 120", continuity: "From turn of 19th/20th cent.", families: "František Berka (*1866, blacksmith) → Jan Berka (*1894)", parishRecords: "1 entry (death 1945) + 16 census records" },
        { houseId: "medelske_cp1", label: "Medelské No. 1 (Šafář & Minář Homestead)", parcel1834: "st. 1 (Medelské)", parcel1910: "st. 1 (Medelské)", continuity: "Continuous (1815–1921+)", families: "Schafarz (Šafář) → Jan Minář Sr. (*1847) & Jan Minář Jr. (*1876)", parishRecords: "1921 Census (2 apartments, 13 residents)" },
        { houseId: "medelske_cp2", label: "Medelské No. 2 (Nejedlý & Minář Homestead)", parcel1834: "st. 2 (Medelské)", parcel1910: "st. 2 (Medelské)", continuity: "Continuous (1834–1948+)", families: "Alois Nejedlý (*1869) • Adolf Minář (*1892) with wife Ludmila (*1895)", parishRecords: "1921 Census (2 apartments, 6 residents)" }
      ]
    },
    archives: [
      {
        name: "Provincial Archive in Opava – Olomouc Branch (ZAO)",
        badge: "Parish Registers B/M/D (1617–1949)",
        description: "Primary archive for vital records of Dlouhomilov and affiliated villages. Fonds: Collection of Vital Registers of North Moravia – Roman Catholic Parish Offices of Dlouhomilov (from 1786 for Dlouhomilov incl. Medelské & both Olešnás), Rohle (1720–1786; Benkov remained with Rohle until 1932!), and Dubicko (1617–1722).",
        signatures: "Dlouhomilov: sign. Zá II 1–10 (Inv. Nos. 8359–8364, 11248; 1786–1949). Pre-1786 registers: Dubicko (Zá IV 1, 1617–1694; Zá IV 2, inv. No. 8377 baptisms 1695–1722 on pp. 948–1095), Zábřeh (Zá I 1, inv. No. 8332, 1649–1692), Brníčko (from 1653, Zá VI 5), Lesnice (inv. No. 8399, from 1676) & Rohle (Zá VIII 1, 6, 10, 14, 15, already 1720–1786; Benkov until 1932).",
        steps: [
          "Open digi.archives.cz and select 'Vital Registers' (Matriky).",
          "From 1786 search 'Dlouhomilov' ('Za II') for Dlouhomilov, Medelské & both Olešnás; for Benkov (1720–1932) and the 1720–1786 period search 'Rohle' ('Zá VIII'), and up to 1722 search 'Dubicko' ('Zá IV 1–2').",
          "Always start with alphabetical indexes (Index N, Index O, Index Z — e.g. Rohle Zá VIII 14 & 15), and check the bride's parish (e.g. Brníčko Zá VI 5) for weddings.",
          "Detailed signatures, permalinks & transcripts (1650–1787): <a href=\"docs/matriky_dubicko_a_rohle_1650_1785.md\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"underline font-bold text-amber-900\">matriky_dubicko_a_rohle_1650_1785.md ↗</a>."
        ]
      },
      {
        name: "State District Archive (SOkA) Šumperk",
        badge: "Population Censuses, Chronicles & ONV",
        description: "Essential source for reconstructing households (1857–1921) and 20th-century history: for Dlouhomilov & Medelské, District Office Zábřeh (NAD 1000, Aid 411) and Municipal Archive Dlouhomilov; for Benkov (Benke), District Office Šumperk – I (NAD 999, Aid 409). Also holds the Dlouhomilov Parish Chronicle (1899 [1356]–1986), municipal chronicle (from 1924), and ONV Zábřeh / ONV Šumperk fonds (boxes 679, 682, K 35 on 1948–1968 church affairs).",
        signatures: "Dlouhomilov & Medelské (NAD 1000): Boxes 253 (1857), 300 (1869), 330 (1880), 356 (1890), 397 (1900), 436 (1910), Fascicle 3 (1921). Benkov (NAD 999): Boxes 158 (1857), 205 (1869), 247 (1880), 281 (1890), 326 (1900 – 120 scans mapped), 365 (1910 – 45 houses, 275 res.), Fascicle 2 (1921 – all 219/219 scans, 45 House Summary Sheets + 211 res.). Parish Chronicle 1899–1986; ONV Šumperk & Zábřeh.",
        steps: [
          "On digi.archives.cz search 'Okresní úřad Zábřeh' (NAD 1000) for Dlouhomilov/Medelské or 'Okresní úřad Šumperk – I' (NAD 999) for Benkov.",
          "Select the census year (1857–1921)—sheets are ordered sequentially by house number (Dlouhomilov Nos. 1–118, Medelské Nos. 1–5, Benkov Nos. 1–45).",
          "For 20th-century studies (parish chronicle, Sokol, postwar retribution, collectivization & church surveillance), see <a href=\"docs/kvalifikacni_prace_a_literatura.md\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"underline font-bold text-amber-900\">kvalifikacni_prace_a_literatura.md ↗</a>.",
          "Each house sheet lists all residents, birth dates, birthplaces, language, religion, employers, and livestock."
        ]
      },
      {
        name: "Moravian Provincial Archive in Brno (ARON) / ZAO – Land Tables, Hide Registers & Land Books",
        badge: "Land Tables (A 3), Hide Registers & Land Books",
        description: "Earliest estate transfers and peasant farmstead records prior to 1850. MZA Brno digital fonds (ARON portal): A 3 Estates Manuscripts – Olomouc Land Tables (inv. Nos. 82–154) & Libri citationum (KP I, IV/2, VI), D 1 Hide Registers (1656–1677), D 2 Rectification Acts (1749/1756) & D 3 Dominical Declarations (1750), alongside Jan of Boskovice's 1585 Urbar and Land Books in ZAO (NAD 1549).",
        signatures: "1585 Zábřeh Estate Urbar of Jan of Boskovice (URB00015585: Benkov p. 47, Medelské pp. 80–81, Dlouhomilov pp. 82–84). MZA Brno (ARON): A 3 Olomouc Land Tables – Kniha XVII (inv. No. 98: 1510 fol. 10r, 1513 fol. 21v–22r) & Kniha XXX (inv. No. 111, 1589); Court Citation Books KP I, IV/2 & VI (1407–1492); D 1 Hide Registers sign. 141 (13 Oct 1677, fol. 76r–77v Lomigsdorf, fol. 79r–79v Benke); D 2 Rectification Acts Series I sign. 141 Part 1 (14 Oct 1749) & Part 2 (17 Aug 1756); D 3 Dominical Declarations sign. 172/1, box 32 (1750). Land Books (ZAO Olomouc): Dlouhomilov & Medelské (Inv. No. 164, sign. 428, 1584–1880); Benkov (1617–1879).",
        steps: [
          "Search RBM II (Nos. 517 & 672) and all 32 entries of ZDO I–X (<a href=\"docs/puvod_dluhomila_a_zdo_1356_1447.md\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"underline font-bold text-amber-900\">puvod_dluhomila_a_zdo_1356_1447.md ↗</a>), plus MZA Brno ARON fonds A 3 (inv. Nos. 82–154) and digitized CMS Libri citationum (KP IV/2 & VI) for 15th–16th century transfers and peasant flights (<a href=\"docs/zemske_desky_a_puhony_1466_1622.md\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"underline font-bold text-amber-900\">zemske_desky_a_puhony_1466_1622.md ↗</a>).",
          "Use the Hide Registers (D 1 sign. 141: 1656–1657 & 1677) and Theresian Rectification Acts (D 2 sign. 141 Part 1, 1749 & Part 2, 1756; D 3 sign. 172/1, 1750) on MZA ARON for 17th–18th century settlement lists (<a href=\"docs/lanove_rejstriky_a_rektifikace_1657_1756.md\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"underline font-bold text-amber-900\">lanove_rejstriky_a_rektifikace_1657_1756.md ↗</a>).",
          "Land books in ZAO Opava (Velkostatek Zábřeh fonds, NAD 1549) record the succession of farm holders, marriage contracts, dower agreements (výměnky), and estate valuations."
        ]
      },
      {
        name: "Central Archive of Surveying and Cadastre (ÚAZK ČÚZK)",
        badge: "1834 Imperial Imprints & Indication Sketches",
        description: "The most accurate 19th-century cadastral map series: Imperial Mandatory Imprints of the Stable Cadastre for Moravia and Silesia at 1 : 2,880 scale.",
        signatures: "Cadastral Territory Dlouhomilov (Lomigsdorf), code 626431, map signature MOR102618340. Color Indication Sketch and Parcel Protocol from 1834.",
        steps: [
          "Open archivnimapy.cuzk.cz or use our interactive map overlay directly above.",
          "Enter cadastral territory 'Dlouhomilov' or signature MOR102618340.",
          "Check building parcel numbers (red = building st., black = land parcel p. č.).",
          "Compare brick/stone buildings (red) and wooden structures (yellow) with today's aerial orthophoto."
        ]
      },
      {
        name: "National Heritage Institute (NPÚ) – Monument Catalog & ÚSKP",
        badge: "Cultural Monuments (VPZ ÚSKP 2350)",
        description: "Central List of Cultural Monuments of the Czech Republic and digital archive of original monument registration sheets (MIS IISPP).",
        signatures: "Dlouhomilov Village Monument Zone (ÚSKP 2350, declared 1995). Monuments: Church of All Saints No. 1 (26886/8-865), Farmstead No. 5 (27339/8-866), Former Rychta No. 7 (51795/9-103), Farmstead No. 8 (35007/8-867), Gated Farmstead No. 24 (22688/8-868), Farmstead No. 29 (19977/8-869), Slope Homestead No. 43 (33784/8-870), Benkov Chapel (28584/8-871).",
        steps: [
          "Open the municipality of Dlouhomilov in the NPÚ Monument Catalog.",
          "Inspect architectural descriptions, heritage protection status, and building history.",
          "Open the MIS IISPP links in our House Detail panel to view original heritage registration sheets."
        ]
      },
      {
        name: "Wikipedia, Wikidata & Wikimedia Commons",
        badge: "Encyclopedia & Open Data",
        description: "Structured list of cultural monuments in Dlouhomilov linked to Wikidata items and free photo galleries on Wikimedia Commons.",
        signatures: "Wikidata Q-identifiers of municipal monuments, geographic coordinates, and historical and modern architectural photography on Wikimedia Commons.",
        steps: [
          "Open the article 'List of Cultural Monuments in Dlouhomilov' on Wikipedia.",
          "Use Wikidata links to connect with regional geographical and historical databases.",
          "Browse freely licensed photographs of local folk architecture."
        ]
      }
    ],
    dictionary: [
      { term: "Grunt / Rustikalist / Bauer / Grundbesitzer", cz: "Settled peasant farmer owning a full, half, or quarter hide of farmland (lán) and draft horses/cattle, subject to manor labor obligations (robota) until 1848." },
      { term: "Lán / Pololáník / Čtvrtláník (Ganzlahner / Halblahner)", cz: "Historical land measure (1 hide = approx. 18–25 hectares). Large farmers in Dlouhomilov (Nos. 7, 10, 22, 24, 29) were full-hide or half-hide peasants." },
      { term: "Dědičná rychta / Erbgericht / Rychtář (Scholz)", cz: "Hereditary Magistrate's Estate (in Dlouhomilov House No. 7)—a privileged free estate whose holder represented the manor lord in the village, collected taxes, and kept order." },
      { term: "Výměnek / Výměnkář / Auszügler / Ausgedinger", cz: "Retired farmer and his wife living in a separate dower apartment (výměnek) on the farmstead after handing ownership to their heir, receiving a contractually guaranteed annual allowance of grain, milk, firewood, and lodging." },
      { term: "Chalupník / Zahradník (Chalupner / Gärtler)", cz: "Smallholder owning a cottage and a small plot of land (garden or a few acres), often supplementing income with weaving or seasonal craft work." },
      { term: "Domkář / Häusler", cz: "Cottager owning a small house without farmland (or only a tiny garden), earning a living as an agricultural day laborer, bricklayer, or textile worker." },
      { term: "Podruh / Podruhyně (Inmann / Inwohner)", cz: "Landless lodger or subtenant who did not own a house and rented a room or corner in a farmer's or cottager's home in exchange for rent or farm labor." },
      { term: "Čeledín / Pacholek / Služka / Děvečka (Knecht / Magd)", cz: "Unmarried farm servants (čeleď) living directly on the farmstead and receiving room, board, and annual wages—stable hands cared for the horses and plowing, maids tended the cowshed and household." },
      { term: "Bělič příze / Tkadlec (Garnbleicher / Lohnweber / Fabriksweber)", cz: "Key proto-industrial and industrial occupations in Dlouhomilov, Medelské, and Benkov—home linen weavers and bleachers commuting to the Eduard Oberleithner & Sons textile works in Šumperk." },
      { term: "Žudr (Sloupové podstřeší / Nájezd)", cz: "Characteristic North Moravian projecting pillared porch or arcade on the front facade of a brick farmstead (preserved e.g. at Dlouhomilov No. 5 and No. 29)." },
      { term: "Srubový špýchar s hliněnou omazávkou", cz: "Fireproof two-story timbered granary daubed externally with a thick layer of clay to protect stored grain and family valuables against fire (preserved at No. 43 from 1836)." },
      { term: "Kurent (Německé novogotické kurzívní písmo)", cz: "German neo-Gothic cursive script (Kurrentschrift) used in almost all Austrian parish registers, land books, and census sheets until the early 20th century." }
    ]
  },
  de: {
    jurisdiction: {
      village: "Lomigsdorf (Dlouhomilov) & Weiler Dreihofen (Medelské)",
      associatedVillage: "Benke (Benkov – 1960 mit Lomigsdorf / Dlouhomilov vereinigt)",
      parish: "Röm.-kath. Pfarre Lomigsdorf / Dlouhomilov (Allerheiligenkirche – ab 1785/1786 für Lomigsdorf samt Dreihofen und beide Olleschau; vor 1786 Matriken in Dubitzko Zá IV 1–2 [1617–1722], Hohenstadt [ab 1649], Brünles [ab 1653], Lesnice [ab 1676] & Rohle Zá VIII [1720–1786, Benke blieb bis 1932 bei Rohle])",
      politicalDistrict: "Hohenstadt (Zábřeh) • heute Bezirk Mährisch Schönberg / Šumperk (Olmützer Region)",
      judicialDistrict: "Hohenstadt / Zábřeh (für Lomigsdorf & Dreihofen) / Mährisch Schönberg (für Benke)",
      cadastralTerritory: "Lomigsdorf / Dlouhomilov [626597] (inkl. Dreihofen) & Benke / Benkov [626589]",
      feudalDomain: "Herrschaft Hohenstadt / Velkostatek Zábřeh (Fürsten von Liechtenstein)",
      heritageZone: "Dörfliche Denkmalzone Dlouhomilov / Lomigsdorf (ÚSKP 2350, erklärt 1995)",
      stateArchiveDistrict: "Staatliches Bezirksarchiv (SOkA) Mährisch Schönberg / Šumperk (Zählbögen 1857–1921, Gemeinde- und Schulchroniken)",
      provincialArchive: "Landesarchiv Troppau / Opava – Zweigstelle Olmütz (Matriken 1617–1949; Urbar 1585; Grundbücher ab 1584/1617; Aretin-Karte 1623 AKP Nr. 81)",
      coatOfArms: {
        grantedBy: "Vorsitzender des Abgeordnetenhauses des Parlaments der Tschechischen Republik (Lubomír Zaorálek)",
        decision: "Dekret Nr. 37 vom 24. Mai 2004 (REKOS)",
        blazon: "Im silbern-rot gespaltenen Schild zwei schräggekreuzte aufrechte Spaten zwischen zwei fünfblättrigen Apfelblüten mit goldenen Butzen in verwechselten Farben, belegt mit einem nach links gewendeten goldenen Pflugmesser (Sech).",
        symbolism: "Der silbern-rot gespaltene Schild versinnbildlicht die historische Verbindung von Lomigsdorf (Dlouhomilov mit dem Weiler Dreihofen / Medelské) und dem Höhendorf Benke (Benkov), die seit 1960 eine gemeinsame Gemeinde bilden. Die gekreuzten Spaten und das goldene Pflugmesser (Sech / krojidlo) verweisen auf die jahrhundertealte Rodungs- und Bauerntradition im Tal seit der Ersterwähnung 1356; die beiden Apfelblüten stehen für die beiden Ortsteile sowie den traditionsreichen Obstbau an den Hängen von Lomigsdorf und Benke."
      }
    },
    houseNumberingContinuity: {
      title: "Kontinuität der Hausnummern (Konskriptionsnummern) zwischen 1771, 1834, 1857–1921 und heute",
      subtitle: "Vergleich des Stabilen Katasters (1834), der Volkszählungen (1857–1921) und der Pfarrmatriken (1786–1949)",
      overview: "Der Vergleich des Kaiserlichen Pflichtabdrucks des Stabilen Katasters (1834), der sechs Volkszählungen (1857, 1869, 1880, 1890, 1900, 1910, 1921) und der Pfarrmatriken von Lomigsdorf / Dlouhomilov (1786–1949) belegt eindeutig: In Lomigsdorf (Dlouhomilov) fand NIEMALS eine allgemeine Umnummerierung der Häuser statt. Die bei der ersten Theresianischen Konskription (1770–1771) vergebenen Hausnummern gehören bis heute zu exakt denselben Höfen!",
      numberingSeries: [
        {
          locality: "1. Lomigsdorf / Dlouhomilov (Hauptort)",
          range: "Nr. 1 – 141+",
          cadastralNote: "Durchgehende Nummerierung ab dem barocken Ortskern (Nr. 1 Kirche, Nr. 2 Pfarrhof, Nr. 7 Erbgericht, Nr. 10, Nr. 22, Nr. 24, Nr. 29). Neuere Häuslerbauten des 19. und 20. Jahrhunderts erhielten fortlaufend höhere Nummern (z. B. Schmiede Nr. 110)."
        },
        {
          locality: "2. Weiler Dreihofen / Medelské",
          range: "Dreihofen Nr. 1 – 10",
          cadastralNote: "Eigene Konskriptionsnummernreihe innerhalb der Katastralgemeinde Lomigsdorf! In Matriken und Zählbögen durch den Zusatz „Dreihofen / Medelské Nr. 1“ (Šafář/Minář) bzw. „Dreihofen Nr. 2“ (Nejedlý – löste das Rätsel, warum „Nr. 2“ nicht der Pfarrhof war!) gekennzeichnet."
        },
        {
          locality: "3. Höhendorf Benke / Benkov",
          range: "Benke Nr. 1 – 49",
          cadastralNote: "Selbständige Katastralgemeinde und eigene Gemeinde im Bezirk Mährisch Schönberg (OÚ Šumperk – I, NAD 999) bis zur Zusammenlegung 1960; kirchlich bis 1932 bei der Pfarre Rohle. Vollständig bearbeitet für 1910 (45 Häuser, 275 Ew.) und 1921 (211 Ew. + alle 45 Haussammelbögen aus 219/219 Scans), dazu 109 Einträge in Matriken Zá II (1889–1949)."
        }
      ],
      evolution: [
        { period: "1834", source: "Stabiler Kataster (Parzellenprotokoll)", count: "80 Häuser (+ 8 in Dreihofen)", note: "Ursprüngliches Bauern- und Gärtlernetz Nr. 1–80" },
        { period: "1857 & 1869", source: "Volkszählung (Karton 253, 300)", count: "80 Häuser", note: "Unveränderter Nummerierungsbereich (Nr. 1–80)" },
        { period: "1900", source: "Volkszählung (Karton 397)", count: "106 Häuser", note: "Neubau von Häuslerstellen und geteilten Höfen (Nr. 81–106)" },
        { period: "1910", source: "Volkszählung (Karton 436)", count: "115 Häuser", note: "Ausbau an den Ortsrändern (Nr. 107–115, inkl. Nr. 110)" },
        { period: "1921", source: "Volkszählung (Faszikel 3)", count: "118 Häuser (+ 10 in Dreihofen)", note: "Stand in der Ersten Republik (Nr. 1–118)" },
        { period: "1889–1949", source: "Matriken G/T/S (Sign. Zá II 7, Zá II 10)", count: "154 erfasste Nr.", note: "Durchgehende Reihe bis Nr. 141 + Zwischenkriegsbauten" }
      ],
      keyHouses: [
        { houseId: "cp3", label: "Nr. 3 (Häusel bei Dvořák)", parcel1834: "Bp. 5", parcel1910: "Bp. 5", continuity: "Durchgehend (1834–1921+)", families: "Familie Dvořák (Witwe Kateřina *1845, Sohn Jan *1892)", parishRecords: "Zählung 1921 (4 Bewohner)" },
        { houseId: "cp4", label: "Nr. 4 (Haus Koš & Vénos)", parcel1834: "Bp. 6", parcel1910: "Bp. 6", continuity: "Durchgehend (1834–1921+)", families: "Antonín Koš (*1873) • Františka Vénosová (*1853) • Josef Vénos (*1871)", parishRecords: "Zählung 1921 (3 Wohnungen, 8 Bewohner)" },
        { houseId: "cp5", label: "Nr. 5 (Denkmalhof Lukas)", parcel1834: "Bp. 7", parcel1910: "Bp. 7", continuity: "Durchgehend (1834–1949)", families: "Merta / Pavlík → Karel (*1860) & Filomena (*1864) Lukas", parishRecords: "7 Matrikeneinträge (1889–1949) + Zählung 1921" },
        { houseId: "cp6", label: "Nr. 6 (Bauerngut Jílek)", parcel1834: "Bp. 9", parcel1910: "Bp. 9", continuity: "Durchgehend (1834–1921+)", families: "Marie Jílková (*1849) • Familie Jan Šindler (*1855)", parishRecords: "Zählung 1921 (2 Wohnungen, 8 Bewohner)" },
        { houseId: "cp7", label: "Nr. 7 (Erbgericht – Kulturdenkmal)", parcel1834: "Bp. 10", parcel1910: "Bp. 10", continuity: "Durchgehend (1786–1949)", families: "Merta (Erbrichter) → Krobot → Cink → Pavlík • 1921: Hvížď, Ptáčková, Navrátil", parishRecords: "8 Matrikeneinträge (1889–1949) + 100 Zählungseinträge" },
        { houseId: "cp8", label: "Nr. 8 (Anwesen Braný)", parcel1834: "Bp. 11", parcel1910: "Bp. 11", continuity: "Durchgehend (1834–1921+)", families: "Isidor Braný (*1860) mit Ehefrau Sidonie (*1862)", parishRecords: "Zählung 1921 (4 Bewohner)" },
        { houseId: "cp10", label: "Nr. 10 (Ganzlahnerhof Jílek & Šafář)", parcel1834: "Bp. 14", parcel1910: "Bp. 14", continuity: "Durchgehend (1815–1949)", families: "Gilek (Jílek) → Šafář (aus Dreihofen Nr. 1)", parishRecords: "6 Matrikeneinträge (1889–1949) + 71 Zählungseinträge" },
        { houseId: "cp22", label: "Nr. 22 (Denkmalhof Dvořák)", parcel1834: "Bp. 30", parcel1910: "Bp. 30", continuity: "Durchgehend (1786–1949)", families: "Petr Dvořák (*1793) → Josef (*1821) → Josef (*1857) → Karel (*1880)", parishRecords: "7 Matrikeneinträge (1889–1949) + 71 Zählungseinträge" },
        { houseId: "cp24", label: "Nr. 24 (Denkmalhof mit Toreinfahrt)", parcel1834: "Bp. 32", parcel1910: "Bp. 32", continuity: "Durchgehend (1834–1949)", families: "Kouřil (1834–1878) → Krobot (František, Jan, Štěpán)", parishRecords: "10 Matrikeneinträge (1889–1949)" },
        { houseId: "cp29", label: "Nr. 29 (Stammhof Dvořák – Kulturdenkmal)", parcel1834: "Bp. 63", parcel1910: "Bp. 62", continuity: "Durchgehend (1679–1949)", families: "Pavel Dvořák (1679) → Johann (*1795) → Alois (*1830) → Josef (*1879, aus Nr. 22)", parishRecords: "12 Matrikeneinträge (1889–1949) + 86 Zählungseinträge" },
        { houseId: "cp46", label: "Nr. 46 (Häusel Krobot, Dvořák & Berka)", parcel1834: "Bp. 60", parcel1910: "Bp. 60", continuity: "Durchgehend (1834–1949)", families: "Jurenka (1834) → Krobot / Dvořák / Hejtman → Berka (1920)", parishRecords: "9 Matrikeneinträge (1889–1949) + 19 Zählungseinträge" },
        { houseId: "cp110", label: "Nr. 110 (Dorfschmiede & Häusel Berka)", parcel1834: "— (erbaut vor 1910)", parcel1910: "Bp. 120", continuity: "Seit der Wende 19./20. Jh.", families: "František Berka (*1866, Schmied) → Jan Berka (*1894)", parishRecords: "1 Matrikeneintrag (Tod 1945) + 16 Zählungseinträge" },
        { houseId: "medelske_cp1", label: "Dreihofen (Medelské) Nr. 1 (Hof Šafář & Minář)", parcel1834: "Bp. 1 (Dreihofen)", parcel1910: "Bp. 1 (Dreihofen)", continuity: "Durchgehend (1815–1921+)", families: "Schafarz (Šafář) → Jan Minář d. Ä. (*1847) & Jan Minář d. J. (*1876)", parishRecords: "Zählung 1921 (2 Wohnungen, 13 Bewohner)" },
        { houseId: "medelske_cp2", label: "Dreihofen (Medelské) Nr. 2 (Anwesen Nejedlý & Minář)", parcel1834: "Bp. 2 (Dreihofen)", parcel1910: "Bp. 2 (Dreihofen)", continuity: "Durchgehend (1834–1948+)", families: "Alois Nejedlý (*1869) • Adolf Minář (*1892) mit Ehefrau Ludmila (*1895)", parishRecords: "Zählung 1921 (2 Wohnungen, 6 Bewohner)" }
      ]
    },
    archives: [
      {
        name: "Landesarchiv Troppau – Zweigstelle Olmütz (ZAO Opava)",
        badge: "Pfarrmatriken G/T/S (1617–1949)",
        description: "Hauptquelle für die Matrikenforschung in Lomigsdorf (Dlouhomilov), Dreihofen (Medelské) und Benke (Benkov). Bestände: Matrikensammlung Nordmährens – Pfarre Lomigsdorf (ab 1786 für Lomigsdorf, Dreihofen und beide Olleschau), Rohle (1720–1786; Benke verblieb hier bis 1932!) und Dubitzko (1617–1722).",
        signatures: "Lomigsdorf: Sign. Zá II 1–10 (Inv.-Nr. 8359–8364, 11248; 1786–1949). Ältere Matriken: Dubitzko (Zá IV 1, 1617–1694; Zá IV 2, Inv.-Nr. 8377 Taufen 1695–1722 auf S. 948–1095), Hohenstadt (Zá I 1, Inv.-Nr. 8332, 1649–1692), Brünles (ab 1653, Zá VI 5), Lesnice (Inv.-Nr. 8399, ab 1676) & Rohle (Zá VIII 1, 6, 10, 14, 15, bereits 1720–1786; Benke bis 1932).",
        steps: [
          "Öffnen Sie digi.archives.cz und wählen Sie die Sektion „Matriky“ (Kirchenbücher).",
          "Ab 1786 „Dlouhomilov“ („Za II“) für Lomigsdorf, Dreihofen und Olleschau suchen; für Benke (1720–1932) sowie die Jahre 1720–1786 unter „Rohle“ („Zá VIII“) und bis 1722 unter „Dubicko“ („Zá IV 1–2“).",
          "Beginnen Sie stets mit den alphabetischen Registern (z. B. Rohle Zá VIII 14 & 15) und prüfen Sie bei Trauungen primär die Heimatpfarre der Braut (z. B. Brünles Zá VI 5).",
          "Signaturen, Permalinks & Transkriptionen (1650–1787): <a href=\"docs/matriky_dubicko_a_rohle_1650_1785.md\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"underline font-bold text-amber-900\">matriky_dubicko_a_rohle_1650_1785.md ↗</a>."
        ]
      },
      {
        name: "Staatliches Bezirksarchiv Mährisch Schönberg (SOkA Šumperk)",
        badge: "Volkszählungen, Chroniken & ONV",
        description: "Grundlegende Quelle für Hausbewohner (1857–1921) und das 20. Jh.: für Lomigsdorf & Dreihofen Bezirksamt Hohenstadt (NAD 1000, Findbuch 411), für das bis 1960 selbständige Benke (Benkov) Bezirksamt Mährisch Schönberg I (NAD 999, Findbuch 409). Verwahrt zudem die tschechische Pfarrchronik (1899 [1356]–1986), Gemeindechronik (ab 1924) und die Bestände ONV Zábřeh / ONV Šumperk (K. 679, 682, K 35 zur Kirchenpolitik 1948–1968).",
        signatures: "Lomigsdorf & Dreihofen (NAD 1000): Karton 253 (1857), 300 (1869), 330 (1880), 356 (1890), 397 (1900), 436 (1910), Fasz. 3 (1921). Benke (NAD 999): Karton 158 (1857), 205 (1869), 247 (1880), 281 (1890), 326 (1900 – 120 Scans kartiert), 365 (1910 – 45 Häuser, 275 Ew.), Fasz. 2 (1921 – alle 219/219 Scans, 45 Haussammelbögen + 211 Ew.). Pfarrchronik 1899–1986.",
        steps: [
          "Suchen Sie im Portal digi.archives.cz unter „Okresní úřad Zábřeh“ (NAD 1000) für Lomigsdorf/Dreihofen oder „Okresní úřad Šumperk – I“ (NAD 999) für Benke.",
          "Wählen Sie das Zählungsjahr (1857–1921); die Bögen sind nach Hausnummern geordnet (Lomigsdorf Nr. 1–118, Dreihofen Nr. 1–5, Benke Nr. 1–45).",
          "Für Studien des 20. Jh. (Pfarrchronik, Sokol, Retribution, Kollektivierung & Kirchensekretäre) siehe <a href=\"docs/kvalifikacni_prace_a_literatura.md\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"underline font-bold text-amber-900\">kvalifikacni_prace_a_literatura.md ↗</a>.",
          "Jeder Hausbogen enthält Namen, Geburtsdaten/-orte, Umgangssprache, Religion, Arbeitgeber und Viehbestand."
        ]
      },
      {
        name: "Mährisches Landesarchiv Brünn (ARON) / ZAO – Landtafel, Lahnenregister & Grundbücher",
        badge: "Landtafel (A 3), Lahnenregister & Grundbücher",
        description: "Älteste Güterübertragungen und bäuerliche Hofnachweise vor 1850. Digitale Bestände des MZA Brünn (ARON): A 3 Ständische Handschriften – Olmützer Landtafel (Inv.-Nr. 82–154) & Ladungsbücher (KP I, IV/2, VI), D 1 Lahnenregister (1656–1677), D 2 Rektifikationsakten (1749/1756) & D 3 Dominikal-Fassionen (1750) sowie Bestand Velkostatek Zábřeh (NAD 1549) – Urbar 1585 des Jan von Boskowitz & Grundbücher im ZAO.",
        signatures: "Urbar 1585 des Jan von Boskowitz (URB00015585: Benke S. 47, Dreihofen S. 80–81, Lomigsdorf S. 82–84). MZA Brünn (ARON): A 3 Olmützer Landtafel – Kniha XVII (Inv.-Nr. 98: 1510 Fol. 10r, 1513 Fol. 21v–22r) & Kniha XXX (Inv.-Nr. 111, 1589); Ladungsbücher KP I, IV/2 & VI (1407–1492); D 1 Lahnenregister Sign. 141 (13. 10. 1677, Fol. 76r–77v Lomigsdorf, Fol. 79r–79v Benke); D 2 Rektifikationsakten Reihe I Sign. 141 Teil 1 (14. 10. 1749) & Teil 2 (17. 8. 1756); D 3 Dominikal-Fassionen Sign. 172/1, Karton 32 (1750). Grundbücher (ZAO Olmütz): Lomigsdorf & Dreihofen (Inv.-Nr. 164, Sign. 428, 1584–1880); Benke (1617–1879).",
        steps: [
          "Für die Ortsgründung und alle 32 Einträge in ZDO I–X (1266–1447) siehe <a href=\"docs/puvod_dluhomila_a_zdo_1356_1447.md\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"underline font-bold text-amber-900\">puvod_dluhomila_a_zdo_1356_1447.md ↗</a>; für Herrschaftsübergänge und Untertanenfluchten des 15.–16. Jh. nutzen Sie im MZA Brünn (ARON) den Bestand A 3 (Inv.-Nr. 82–154) sowie die digitalen Libri citationum (KP IV/2 & VI; <a href=\"docs/zemske_desky_a_puhony_1466_1622.md\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"underline font-bold text-amber-900\">zemske_desky_a_puhony_1466_1622.md ↗</a>).",
          "Für Besitzverhältnisse nach dem Dreißigjährigen Krieg und die Theresianische Steuerrektifikation nutzen Sie auf ARON die Bestände D 1 Sign. 141 (1656–1657 & 1677), D 2 Sign. 141 Teil 1 (1749) & Teil 2 (1756) sowie D 3 Sign. 172/1 (1750; <a href=\"docs/lanove_rejstriky_a_rektifikace_1657_1756.md\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"underline font-bold text-amber-900\">lanove_rejstriky_a_rektifikace_1657_1756.md ↗</a>).",
          "Das Grundbuch (ZAO Olmütz, Herrschaft Hohenstadt, NAD 1549) verzeichnet die Abfolge der Hofwirte, Heiratsverträge, Ausgedinge und Hofschätzungen."
        ]
      },
      {
        name: "Zentralarchiv für Landvermessung und Kataster (ÚAZK ČÚZK)",
        badge: "Stabiler Kataster 1834 & Indikationsskizzen",
        description: "Das genaueste Karten- und Grundsteuerwerk des 19. Jahrhunderts: Kaiserliche Pflichtabdrucke des Stabilen Katasters für Mähren und Schlesien im Maßstab 1 : 2 880.",
        signatures: "Katastralgemeinde Lomigsdorf (Dlouhomilov), Gemeindecode 626431, Kartensignatur MOR102618340. Farbige Indikationsskizze und Parzellenprotokoll von 1834.",
        steps: [
          "Öffnen Sie archivnimapy.cuzk.cz oder nutzen Sie direkt unsere interaktive Kartenüberlagerung.",
          "Geben Sie die Katastralgemeinde „Dlouhomilov“ oder die Signatur MOR102618340 ein.",
          "Prüfen Sie die Parzellennummer des Anwesens (rot = Bauparzelle Bp., schwarz = Grundparzelle).",
          "Vergleichen Sie die Massivbauten (rot) und Holzbauten (gelb) mit dem heutigen Orthofoto."
        ]
      },
      {
        name: "Nationales Denkmalinstitut (NPÚ) – Denkmalkatalog & ÚSKP",
        badge: "Kulturdenkmale (Denkmalzone ÚSKP 2350)",
        description: "Zentralverzeichnis der Kulturdenkmale der Tschechischen Republik und digitales Archiv der originalen Denkmalerfassungsbögen (MIS IISPP).",
        signatures: "Dörfliche Denkmalzone Lomigsdorf / Dlouhomilov (ÚSKP 2350, erklärt 1995). Kulturdenkmale: Allerheiligenkirche Nr. 1 (26886/8-865), Hof Nr. 5 (27339/8-866), Erbgericht Nr. 7 (51795/9-103), Hof Nr. 8 (35007/8-867), Hof Nr. 24 (22688/8-868), Hof Nr. 29 (19977/8-869), Anwesen Nr. 43 (33784/8-870), Kapelle in Benke (28584/8-871).",
        steps: [
          "Öffnen Sie im Denkmalkatalog des NPÚ die Gemeinde Dlouhomilov.",
          "Betrachten Sie die Baubeschreibungen, den Denkmalwert und die Baugeschichte.",
          "Über die IISPP-Links in unserer Hausdetailansicht öffnen Sie die originalen Erfassungsbögen."
        ]
      },
      {
        name: "Wikipedia, Wikidata & Wikimedia Commons",
        badge: "Enzyklopädie & Offene Daten",
        description: "Strukturiertes Verzeichnis der Kulturdenkmale in Lomigsdorf (Dlouhomilov) mit Verknüpfung zu Wikidata-Objekten und Fotogalerien auf Wikimedia Commons.",
        signatures: "Wikidata-Q-Identifikatoren der Baudenkmale, Koordinaten sowie historische und moderne Fotodokumentation auf Wikimedia Commons.",
        steps: [
          "Öffnen Sie den Artikel „Seznam kulturních památek v Dlouhomilově“.",
          "Nutzen Sie die Wikidata-Verknüpfungen zu internationalen historischen und geographischen Datenbanken.",
          "Betrachten Sie frei verfügbare Aufnahmen der nordmährischen Volksarchitektur."
        ]
      }
    ],
    dictionary: [
      { term: "Grunt / Rustikalist / Bauer / Grundbesitzer", cz: "Angesessener Bauer mit eigenem Bauerngut (Ganz-, Halb- oder Viertellahner) und Zuggespann (Pferde/Rinder), bis 1848 der Grundherrschaft zu Robot (Frondienst) verpflichtet." },
      { term: "Lán / Pololáník / Čtvrtláník (Ganzlahner / Halblahner)", cz: "Historisches Ackermaß (1 Lahn / Hufe = ca. 18–25 Hektar). Die großen Höfe in Lomigsdorf (Nr. 7, 10, 22, 24, 29) waren Ganz- oder Halblahnerhöfe." },
      { term: "Dědičná rychta / Erbgericht / Rychtář (Erbrichter / Scholz)", cz: "Erbgericht (in Lomigsdorf Haus Nr. 7) – privilegierter Freihof, dessen Inhaber (Erbrichter) die Obrigkeit im Dorf vertrat, Steuern einhob und die niedere Gerichtsbarkeit ausübte." },
      { term: "Výměnek / Výměnkář / Auszügler / Ausgedinger", cz: "Altenteil / Ausgedinge: Nach Übergabe des Hofes an den Erben wohnten die alten Bauersleute (Ausgedinger) in einer eigenen Ausgedingewohnung am Hof und erhielten vertraglich gesicherte Naturalien (Getreide, Milch, Brennholz)." },
      { term: "Chalupník / Zahradník (Chalupner / Gärtler)", cz: "Kleinbauer / Gärtler mit eigenem Häusel und kleinem Grundbesitz (Garten oder wenige Metzen Acker), oft ergänzt durch Heimweberei oder Handwerk." },
      { term: "Domkář / Häusler", cz: "Kleinhäusler ohne nennenswerten Ackerbesitz, der seinen Lebensunterhalt als landwirtschaftlicher Taglöhner, Maurer oder Textilarbeiter verdiente." },
      { term: "Podruh / Podruhyně (Inmann / Inwohner)", cz: "Hausloser Mieter (Inwohner), der kein eigenes Haus besaß und gegen Miete oder Abarbeit auf einem Bauernhof oder in einem Häusel zur Untermiete wohnte." },
      { term: "Čeledín / Pacholek / Služka / Děvečka (Knecht / Magd)", cz: "Lediges landwirtschaftliches Gesinde (Dienstboten), das direkt auf dem Bauernhof gegen Kost, Logis und Jahreslohn diente – Pferdeknechte beim Gespann, Mägde im Kuhstall und Haushalt." },
      { term: "Bělič příze / Tkadlec (Garnbleicher / Lohnweber / Fabriksweber)", cz: "Typische Textilberufe in Lomigsdorf, Dreihofen und Benke – Heimweber und Garnbleicher, die täglich in die Textilwerke Eduard Oberleithner & Söhne nach Mährisch Schönberg pendelten." },
      { term: "Žudr (Pfeilerlaubengang / Vorlaube)", cz: "Charakteristischer nordmährischer gemauerter Pfeilerlaubengang an der Hofseite eines Bauerngutes (erhalten z. B. bei Nr. 5 und Nr. 29 in Lomigsdorf)." },
      { term: "Srubový špýchar s hliněnou omazávkou", cz: "Feuersicherer zweigeschossiger gezimmertem Getreidespeicher mit äußerem Lehmbewurf zum Schutz von Saatgut und Vorräten vor Bränden (erhalten bei Nr. 43 aus dem Jahr 1836)." },
      { term: "Kurent (Deutsche Kurrentschrift)", cz: "Deutsche neugotische Schreibschrift (Kurrent), in der bis zum Beginn des 20. Jahrhunderts fast alle österreichischen Matriken, Grundbücher und Zählbögen verfasst wurden." }
    ]
  }
};


// Part 2: i18nData.houses, i18nData.terms, i18nData.exactUiMap, translateProseAndUi, DOM & Data engine

i18nData.houses = {
  en: {
    cp1: {
      name: "House No. 1 (All Saints' Church)",
      localName: "Parish Church of All Saints & Cemetery (1767–1770, ÚSKP)",
      type: "Sacral Monument / Cultural Monument CZ",
      description: "Landmark of the Dlouhomilov Village Monument Zone (ÚSKP 26886/8-865). A chapel is first recorded here in 1510 ('wes dluhomilow s kaplu'). Following a Baroque predecessor begun in June 1707 (64,800 bricks fired per account books), the present late-Baroque church was built in 1767–1770 and extended with a presbytery in 1864 (altarpiece by J. Stautejský 1885; main altar by F. Celler & Heinz tower clock 1900). Of four 1910 bells, only the 1752 bell survived WWI requisitions (alongside 21 organ pipes seized on Feb 28, 1918); 7 native priests originated from the parish."
    },
    cp2: {
      name: "House No. 2 (Baroque Rectory)",
      localName: "Catholic Rectory & Parish Office (No. 2, 1785–1986)",
      type: "Heritage Building / Parish Office",
      description: "Seat of the Dlouhomilov parish pastors next to All Saints' Church (26 administrators from 1785/1786 to 1986; registers Zá II 1–10 and the Czech parish chronicle 1899 [1356]–1986). Rebuilt to two stories in 1843 yet plagued by a deep 24m rock well, it housed priest-writer Fr. František Kužela (Adam Chlumecký, 1891–1907—founder of St. Roch Society 1897 & recipient of Émile Zola's congratulatory letter), Dean Fr. Kožušníček (1921), courageous Fr. František Reichel (1934–1964—who kept the 1959 Corpus Christi procession), Fr. Karel Goldmann (1964–1979), and former PTP priest Mons. Antonín Pospíšil (1979–1980)."
    },
    cp3: {
      name: "House No. 3 (Homestead at the Dvořáks')",
      localName: "Dvořák Homestead by the Stream",
      type: "Peasant Homestead",
      description: "Historical homestead in the lower part of Dlouhomilov near the church. In the 1921 census, farmer František Dvořák (*1878) lived here with his wife Anna (*1883 in Rohle) and sons František (*1909) and Josef (*1911)."
    },
    cp4: {
      name: "House No. 4",
      localName: "Koš, Vénos & Janků Homestead (1921)",
      type: "Homestead / Railway & Postal Household",
      description: "Homestead near the church and rectory. In February 1921, two households lived here: retiree František Koš (*1867) with his wife Josefa (*1867), and railway locksmith Josef Vénos (*1877) employed at the ČSD locomotive depot in Šumperk alongside postal assistant Julie Janků (*1879)."
    },
    cp5: {
      name: "House No. 5",
      localName: "Lukas, Vainlich & Koš Protected Farmstead",
      type: "Protected Peasant Farmstead (NPÚ)",
      description: "Protected three-winged peasant farmstead (cultural monument ÚSKP 27339/8-866) with an early 19th-century Empire brick gable, pillared arcade (žudr), and two-story granary. Farmed in 1834 by Anton Lukas, in the 1890s by the Vainlich family, and in 1921 by widow Marie Košová (*1872) with her sons František (locksmith apprentice) and Josef (*1911, Šumperk secondary school student)."
    },
    cp6: {
      name: "House No. 6",
      localName: "Jílek Farmstead",
      type: "Peasant Farmstead",
      description: "Large peasant farmstead in the lower village. In 1921, 71-year-old widow Marie Jílková (*1849 from Bratrušov) ran the estate with the five-member family of field assistant Jan Šindler (*1863) and three unmarried farmhands."
    },
    cp7: {
      name: "House No. 7 (Hereditary Magistrate's Estate)",
      localName: "Former Rychta (Merta, Pavlík, Hvížď & Ptáček)",
      type: "Hereditary Magistrate's Estate (NPÚ)",
      description: "The largest secular building in Dlouhomilov: the two-story Baroque Hereditary Magistrate's Estate (Rychta, cultural monument ÚSKP 51795/9-103) on the eastern side of the village green. Home to the Merta hereditary magistrates in 1857, later the Krobot and Pavlík families (up to 23 residents in 1869). In February 1921 it housed 3 households (14 people): farmer František Hvížď, needlework teacher Eliška Ptáčková with 18-day-old baby Jitřenka Kvapilová (*Jan 28, 1921), and the Navrátil retirees."
    },
    cp8: {
      name: "House No. 8",
      localName: "Braný, Dvořák & Krestin Homestead",
      type: "Country Homestead",
      description: "Homestead near the village green. In February 1921, three households lived under its roof: 75-year-old retired farmer Antonín Braný (*1845) with his housekeeper, widowed agricultural worker Jan Dvořák (*1865) with his daughters, and field watchman František Krestin (*1894)."
    },
    cp10: {
      name: "House No. 10",
      localName: "Jílek (Gilek) & Šafář Farmstead",
      type: "Peasant Farmstead",
      description: "Major peasant farmstead in the middle village. From the early 19th century until the 1890s it was farmed by the full-hide peasant family Jílek (spelled Gilek in 1857: Josef Jílek *1815, Karel Jílek *1845). Around 1900 the ancient Šafář (Schafarz) family moved here from Medelské No. 1 (František Šafář *1874 and retiree Jan Šafář *1859)."
    },
    cp12: {
      name: "House No. 12 (Old School)",
      localName: "Parish & Municipal School",
      type: "School Building",
      description: "Historical school building near the church and rectory where generations of children from Dlouhomilov and Medelské learned to read and write. In 1921, headmaster Konrád Soural (*1872) lived and taught here."
    },
    cp22: {
      name: "House No. 22 (At the Dvořáks')",
      localName: "Dvořák Protected Farmstead (163 Years in One Family)",
      type: "Protected Peasant Farmstead (NPÚ)",
      description: "Protected North Moravian brick farmstead (Village Conservation Zone ÚSKP 2350) with documented continuity of the Dvořák family under the exact same house number from at least 1786 (wedding of Pavel Dvořák 'from Dlouhomilov No. 22') until 1949 (death of Anna Dvořáková née Kouřilová aged 91). Site of the famous double wedding of July 29, 1878, when Josef Dvořák (*1857) married Anna Kouřilová from No. 24."
    },
    cp24: {
      name: "House No. 24",
      localName: "Kouřil & Kubíček Protected Farmstead",
      type: "Protected Peasant Farmstead (NPÚ)",
      description: "Protected peasant farmstead (cultural monument ÚSKP 22688/8-868) neighboring No. 22. In 1878 farmer František Kouřil (*1819), terminally ill with tuberculosis, gave both his daughters Anna and Ludmila in marriage on the same day (July 29, 1878) to brothers Josef and Karel Dvořák, just 13 days before his death."
    },
    cp29: {
      name: "House No. 29 (Dvořák Farmstead)",
      localName: "Ancestral Dvořák Farmstead (from 1679)",
      type: "Protected Peasant Farmstead (NPÚ)",
      description: "One of the best-documented farmsteads in the village (cultural monument ÚSKP 19977/8-869). Land registers of the Zábřeh estate trace the Dvořák family here back to 1679. Birthplace of Prague lawyer JUDr. Jan Dvořák (*1826, listed in 1857 as 'Jurist in Prag II') and home of Alois Dvořák (*1830), Josef Dvořák (*1879) & Amálie née Motyková (*1888, daughter of heroic Bludov wheelwright Antonín Motyka), and their daughter Marie (*June 15, 1920), wife of PhMr. Jaroslav Berka."
    },
    cp43: {
      name: "House No. 43",
      localName: "Merta, Ptáček & Jílek Protected Homestead (1836)",
      type: "Protected Homestead & Timbered Granary (NPÚ)",
      description: "Protected folk homestead with an 1836 core, rare timbered granary with clay daubing, and its own gravity spring-water conduit (cultural monument ÚSKP 33784/8-870). In 1921, widowed farmer Terezie Jílková (*1864) farmed here with her parents, retirees František (*1856) and Anna Ptáček."
    },
    cp46: {
      name: "House No. 46",
      localName: "Krobot, Dvořák & Berka Cottage",
      type: "Cottage / Bricklayer Household",
      description: "Foothill cottage at the edge of the village where cottager Alois Dvořák (*1840) lived with his wife Mariana (*1838) and son, bricklayer Jan Dvořák (*1873), and in 1921 the Berka family."
    },
    cp110: {
      name: "House No. 110",
      localName: "Berka Smithy & Podhorný House",
      type: "Village Smithy / Cottage",
      description: "Cottage and smithy built in the late 19th century. In the 1910 census, master blacksmith František Berka (*1866 from Leština) worked here with his wife Marie (*1864) and apprentice son Jan Berka (*1894). In February 1921 it was home to 87-year-old retiree Terezie Podhorná (*1834) and weaver Anna Podhorná (*1877)."
    },
    medelske_cp1: {
      name: "Medelské No. 1",
      localName: "Šafář (Schafarz) & Minář Homestead in Medelské",
      type: "Homestead in Hamlet of Medelské",
      description: "First house of the northern hamlet of Medelské (German Dreihofen), which had its own house numbering series (Nos. 1–10). Ancestral seat of the Šafář (Schafarz) family in 1857–1890 before they moved to Dlouhomilov No. 10. In 1921 it housed the 7-member family of Jan Minář (*1861), yarn bleachers and weavers at Eduard Oberleithner & Sons in Šumperk."
    },
    medelske_cp2: {
      name: "Medelské No. 2",
      localName: "Nejedlý Homestead (Solution to the 'No. 2' Mystery)",
      type: "Homestead in Hamlet of Medelské",
      description: "Second house in the hamlet of Medelské (German Dreihofen). The 1921 census sheet for the Nejedlý family (Josef Nejedlý *1855, bleachery worker at Oberleithner in Šumperk) solved the parish register mystery of 1938–1948: entries listing 'No. 2' for the Nejedlý family referred not to the Baroque rectory in Dlouhomilov, but to Medelské No. 2!"
    },
    kaple_benkov: {
      name: "Chapel of St. Anthony of Padua (Benkov)",
      localName: "Heart of the Upland Settlement of Benkov (Benke)",
      type: "Chapel / Landmark of Benkov",
      description: "Chapel of St. Anthony of Padua in the center of the upland village of Benkov (German Benke, 1385 Bentkow) on the plateau southeast of Dlouhomilov. Until 1945 Benkov was a predominantly German farming village (Kauer, Heger, Rössner, Blaschke, Bischof, Weiser families) belonging to the Dlouhomilov parish; in 1960 both municipalities were united."
    },
    benkov_kaple: {
      name: "Chapel of St. Anthony of Padua (Benkov)",
      localName: "Heart of the Upland Settlement of Benkov (Benke)",
      type: "Chapel / Landmark of Benkov",
      description: "Chapel of St. Anthony of Padua in the center of the upland village of Benkov (German Benke, 1385 Bentkow) on the plateau southeast of Dlouhomilov. Until 1945 Benkov was a predominantly German farming village (Kauer, Heger, Rössner, Blaschke, Bischof, Weiser families) belonging to the Dlouhomilov parish; in 1960 both municipalities were united."
    }
  },
  de: {
    cp1: {
      name: "Nr. 1 (Allerheiligenkirche)",
      localName: "Pfarrkirche Allerheiligen & Friedhof (1767–1770, ÚSKP)",
      type: "Kulturdenkmal / Pfarrkirche",
      description: "Wahrzeichen der Dorfschutz-Denkmalzone Dlouhomilov (ÚSKP 26886/8-865). Eine Kapelle ist erstmals 1510 belegt („wes dluhomilow s kaplu“). Nach einem ab Juni 1707 errichteten Vorgängerbau (64.800 gebrannte Ziegel laut Rechnungsbuch) entstand 1767–1770 die heutige spätbarocke Kirche (1864 um das Presbyterium erweitert; Altarbild von J. Stautejský 1885; Hauptaltar von F. Celler & Turmuhr Heinz 1900). Von vier Glocken (1910) überlebte nur die barocke Glocke von 1752 den Ersten Weltkrieg (am 28. 2. 1918 zudem 21 Orgelpfeifen requiriert); 7 gebürtige Priester gingen aus der Gemeinde hervor."
    },
    cp2: {
      name: "Nr. 2 (Barocker Pfarrhof)",
      localName: "Katholischer Pfarrhof & Pfarramt (Nr. 2, 1785–1986)",
      type: "Denkmalwürdiges Gebäude / Pfarramt",
      description: "Sitz der Lomigsdorfer Pfarrer neben der Allerheiligenkirche (26 Seelsorger von 1785/1786 bis 1986; Führung der Matriken Zá II 1–10 und der tschechischen Pfarrchronik 1899 [1356]–1986). 1843 zweigeschossig ausgebaut (mit einem 24 m tiefen Felsbrunnen), beherbergte er den Dichter-Pfarrer P. František Kužela (Adam Chlumecký, 1891–1907 – Gründer des St.-Rochus-Vereins 1897 & Empfänger eines Glückwunschbriefs von Émile Zola), Dechant Kožušníček (1921), den unerschrockenen P. František Reichel (1934–1964 – Fronleichnamsprozession 1959), P. Karel Goldmann (1964–1979) und den ehemaligen PTP-Priester Mons. Antonín Pospíšil (1979–1980)."
    },
    cp3: {
      name: "Nr. 3 (Anwesen bei Dvořák)",
      localName: "Anwesen Dvořák am Talbach",
      type: "Bauerngut",
      description: "Historisches Anwesen im unteren Teil von Lomigsdorf (Dlouhomilov) nahe der Kirche. Bei der Volkszählung 1921 lebte hier der Landwirt František Dvořák (*1878) mit seiner Ehefrau Anna (*1883 in Rohle) und den Söhnen František (*1909) und Josef (*1911)."
    },
    cp4: {
      name: "Nr. 4",
      localName: "Anwesen Koš, Vénos & Janků (1921)",
      type: "Anwesen / Eisenbahner- & Posthaushalt",
      description: "Anwesen nahe Kirche und Pfarrhof. Im Februar 1921 wohnten hier zwei Haushalte: der Ausgedinger František Koš (*1867) mit seiner Frau Josefa (*1867) sowie der Eisenbahnschlosser Josef Vénos (*1877) vom Heizhaus der Staatsbahn ČSD in Mährisch Schönberg (Šumperk) und die Postgehilfin Julie Janků (*1879)."
    },
    cp5: {
      name: "Nr. 5",
      localName: "Denkmalhof Lukas, Vainlich & Koš",
      type: "Denkmalgeschütztes Bauerngut (NPÚ)",
      description: "Dreiflügeliges denkmalgeschütztes Bauerngut (ÚSKP 27339/8-866) mit gemauertem Empire-Giebel aus dem frühen 19. Jahrhundert, Pfeilerlaubengang (Žudr) und zweigeschossigem Speicher. 1834 bewirtschaftet von Anton Lukas, in den 1890er Jahren von der Familie Vainlich und 1921 von der Witwe Marie Košová (*1872) mit den Söhnen František (Schlosserlehrling) und Josef (*1911, Realschüler in Mährisch Schönberg)."
    },
    cp6: {
      name: "Nr. 6",
      localName: "Bauerngut Jílek",
      type: "Bauerngut",
      description: "Großes Bauerngut im Unterdorf. 1921 führte hier die 71-jährige Witwe Marie Jílková (*1849 aus Grumberg / Bratrušov) die Wirtschaft zusammen mit der fünfköpfigen Familie des Feldgehilfen Jan Šindler (*1863) und drei ledigen Knechten."
    },
    cp7: {
      name: "Nr. 7 (Ehemaliges Erbgericht)",
      localName: "Erbgericht / Rychta (Merta, Pavlík, Hvížď & Ptáček)",
      type: "Erbgericht / Kulturdenkmal (NPÚ)",
      description: "Der stattlichste weltliche Bau in Lomigsdorf (Dlouhomilov): das zweigeschossige barocke Erbgericht (ÚSKP 51795/9-103) an der Ostseite des Dorfplatzes. 1857 Sitz des Erbrichtergeschlechts Merta, später der Familien Krobot und Pavlík (1869 bis zu 23 Bewohner). Im Februar 1921 lebten hier 3 Haushalte (14 Personen): Landwirt František Hvížď, Industriallehrerin Eliška Ptáčková mit der 18 Tage alten Jitřenka Kvapilová (*28. 1. 1921) sowie die Ausgedinger Navrátil."
    },
    cp8: {
      name: "Nr. 8",
      localName: "Anwesen Braný, Dvořák & Krestin",
      type: "Landwirtschaftliches Anwesen",
      description: "Anwesen nahe dem Dorfplatz. Im Februar 1921 lebten unter seinem Dach drei Haushalte: der 75-jährige pensionierte Landwirt Antonín Braný (*1845) mit seiner Wirtschafterin, der verwitwete Landarbeiter Jan Dvořák (*1865) mit seinen Töchtern sowie der Feldhüter František Krestin (*1894)."
    },
    cp10: {
      name: "Nr. 10",
      localName: "Bauerngut Jílek (Gilek) & Šafář",
      type: "Bauerngut",
      description: "Bedeutendes Bauerngut im mittleren Ortsteil. Seit der ersten Hälfte des 19. Jahrhunderts bis in die 1890er Jahre bewirtschaftet von der Ganzlahnerfamilie Jílek (1857 Gilek geschrieben: Josef Jílek *1815, Karel Jílek *1845). Um 1900 zog hierher das alte Geschlecht Šafář (Schafarz) aus Dreihofen / Medelské Nr. 1 (František Šafář *1874 und Ausgedinger Jan Šafář *1859)."
    },
    cp12: {
      name: "Nr. 12 (Alte Schule)",
      localName: "Pfarr- und Volksschule",
      type: "Schulgebäude",
      description: "Historisches Schulgebäude unweit von Kirche und Pfarrhof, in dem Generationen von Kindern aus Lomigsdorf (Dlouhomilov) und Dreihofen (Medelské) unterrichtet wurden. 1921 wirkte hier Oberlehrer Konrád Soural (*1872)."
    },
    cp22: {
      name: "Nr. 22 (Bei Dvořák)",
      localName: "Denkmalhof Dvořák (163 Jahre in einer Familie)",
      type: "Denkmalgeschütztes Bauerngut (NPÚ)",
      description: "Denkmalgeschütztes nordmährisches Bauerngut (Dörfliche Denkmalzone ÚSKP 2350) mit urkundlich belegter Kontinuität des Geschlechts Dvořák unter exakt derselben Hausnummer von mindestens 1786 (Trauung von Pavel Dvořák „aus Lomigsdorf Nr. 22“) bis 1949 (Tod der 91-jährigen Anna Dvořáková geb. Kouřilová). Schauplatz der berühmten Doppelhochzeit vom 29. Juli 1878."
    },
    cp24: {
      name: "Nr. 24",
      localName: "Denkmalhof Kouřil & Kubíček",
      type: "Denkmalgeschütztes Bauerngut (NPÚ)",
      description: "Denkmalgeschütztes Bauerngut (ÚSKP 22688/8-868) neben Nr. 22. Im Juli 1878 verheiratete der schwer an Tuberkulose erkrankte Bauer František Kouřil (*1819) an einem einzigen Tag (29. 7. 1878) seine beiden Töchter Anna und Ludmila mit den Brüdern Josef und Karel Dvořák – nur 13 Tage vor seinem Tod."
    },
    cp29: {
      name: "Nr. 29 (Bauerngut Dvořák)",
      localName: "Stammhof Dvořák (seit 1679)",
      type: "Denkmalgeschütztes Bauerngut (NPÚ)",
      description: "Eines der am besten dokumentierten Bauerngüter im Ort (Kulturdenkmal ÚSKP 19977/8-869). Die Grundbücher der Herrschaft Hohenstadt (Zábřeh) belegen das Geschlecht Dvořák hier bereits seit 1679. Geburtshaus des Prager Juristen JUDr. Jan Dvořák (*1826, 1857 als „Jurist in Prag II“ geführt) und Wirkungsstätte von Alois Dvořák (*1830), Josef Dvořák (*1879) & Amálie geb. Motyková (*1888) sowie deren Tochter Marie (*15. 6. 1920), Ehefrau von PhMr. Jaroslav Berka."
    },
    cp43: {
      name: "Nr. 43",
      localName: "Denkmalanwesen Merta, Ptáček & Jílek (1836)",
      type: "Denkmalgeschütztes Anwesen & Speicher (NPÚ)",
      description: "Denkmalgeschütztes Anwesen mit Baukern von 1836, seltenem gezimmertem Speicher mit Lehmbewurf und eigener Quellwasser-Gefälleleitung (ÚSKP 33784/8-870). 1921 wirtschaftete hier die verwitwete Landwirtin Terezie Jílková (*1864) mit ihren Eltern, den Ausgedingern František (*1856) und Anna Ptáček."
    },
    cp46: {
      name: "Nr. 46",
      localName: "Häusel Krobot, Dvořák & Berka",
      type: "Häusleranwesen",
      description: "Häusleranwesen am Ortsrand, in dem der Häusler Alois Dvořák (*1840) mit seiner Ehefrau Mariana (*1838) und dem Sohn, dem Maurer Jan Dvořák (*1873), sowie 1921 die Familie Berka lebte."
    },
    cp110: {
      name: "Nr. 110",
      localName: "Schmiede Berka & Haus Podhorný",
      type: "Dorfschmiede / Häusel",
      description: "Ende des 19. Jahrhunderts errichtetes Haus mit Schmiede. Bei der Volkszählung 1910 arbeitete hier der Schmiedemeister František Berka (*1866 aus Lesche / Leština) mit seiner Frau Marie (*1864) und dem Sohn, Schmiedegehilfen Jan Berka (*1894). Im Februar 1921 lebten hier die 87-jährige Ausgedingerin Terezie Podhorná (*1834) und die Weberin Anna Podhorná (*1877)."
    },
    medelske_cp1: {
      name: "Dreihofen (Medelské) Nr. 1",
      localName: "Hof Šafář (Schafarz) & Minář in Dreihofen",
      type: "Anwesen im Weiler Dreihofen (Medelské)",
      description: "Erstes Haus des nördlichen Weilers Dreihofen / Medelské mit eigener Konskriptionsnummerierung (Nr. 1–10). In den Jahren 1857–1890 Stammsitz des Geschlechts Šafář (Schafarz) vor dem Umzug nach Lomigsdorf Nr. 10. 1921 lebte hier die 7-köpfige Familie von Jan Minář (*1861), Garnbleicher und Weberinnen bei Eduard Oberleithner & Söhne in Mährisch Schönberg."
    },
    medelske_cp2: {
      name: "Dreihofen (Medelské) Nr. 2",
      localName: "Anwesen Nejedlý (Lösung des Rätsels um „Nr. 2“)",
      type: "Anwesen im Weiler Dreihofen (Medelské)",
      description: "Zweites Haus im Weiler Dreihofen / Medelské. Der Zählbogen von 1921 für die Familie Nejedlý (Josef Nejedlý *1855, Bleichereiarbeiter bei Oberleithner in Mährisch Schönberg) löste das Matrikenrätsel von 1938–1948: Die Angabe „Nr. 2“ bei der Familie Nejedlý bedeutete nicht den barocken Pfarrhof in Lomigsdorf, sondern Dreihofen (Medelské) Nr. 2!"
    },
    kaple_benkov: {
      name: "Kapelle des hl. Antonius von Padua (Benke / Benkov)",
      localName: "Zentrum des deutschen Höhendorfes Benke (Benkov)",
      type: "Kapelle / Wahrzeichen von Benke (Benkov)",
      description: "Kapelle des hl. Antonius von Padua in der Ortsmitte des Höhendorfes Benke / Benkov (1385 Bentkow) auf dem Plateau südöstlich über Lomigsdorf. Bis 1945 war Benke eine überwiegend deutsche Bauerngemeinde (Familien Kauer, Heger, Rössner, Blaschke, Bischof, Weiser), eingepfarrt nach Lomigsdorf; 1960 wurden beide Gemeinden zusammengeschlossen."
    },
    benkov_kaple: {
      name: "Kapelle des hl. Antonius von Padua (Benke / Benkov)",
      localName: "Zentrum des deutschen Höhendorfes Benke (Benkov)",
      type: "Kapelle / Wahrzeichen von Benke (Benkov)",
      description: "Kapelle des hl. Antonius von Padua in der Ortsmitte des Höhendorfes Benke / Benkov (1385 Bentkow) auf dem Plateau südöstlich über Lomigsdorf. Bis 1945 war Benke eine überwiegend deutsche Bauerngemeinde (Familien Kauer, Heger, Rössner, Blaschke, Bischof, Weiser), eingepfarrt nach Lomigsdorf; 1960 wurden beide Gemeinden zusammengeschlossen."
    }
  }
};

i18nData.exactUiMap = {
  en: {
    "Dlouhomilov & Benkov": "Dlouhomilov & Benkov",
    "Lomigsdorf & Benke": "Lomigsdorf & Benke",
    "Historická Wiki, sčítací operáty, matriky N/O/Z a kronika rodů": "Historical Wiki, Census Sheets, Vital Registers & Family Chronicle",
    "Příběh obce": "Village Story",
    "Mapa & Stavení": "Map & Homesteads",
    "Badatelna, Mapy & Analýzy": "Research Hub, Maps & Analytics",
    "Přidat stavení": "Add Homestead",
    "Příběh": "Story",
    "Mapa & Domy": "Map & Houses",
    "Obyvatelé": "Inhabitants",
    "Demografie": "Demography",
    "Atlas map": "Map Atlas",
    "Průvodce": "Guide",
    "Clustery ↗": "Clusters ↗",
    "Kapitoly příběhu (10)": "Story Chapters (10)",
    "Kapitoly příběhu (11)": "Story Chapters (11)",
    "Zajímavosti z matrik": "Parish Register Highlights",
    "Komiksová kronika": "Illustrated Chronicle",
    "Interaktivní mapa": "Interactive Map",
    "Seznam stavení": "Homestead List",
    "Detail vybraného domu": "Selected House Detail",
    "Rejstřík obyvatel": "Inhabitants Registry",
    "Biografické profily": "Biographical Profiles",
    "Demografie & Bohatství": "Demography & Wealth",
    "Atlas map (18)": "Map Atlas (18)",
    "Průvodce & Slovníček": "Guide & Glossary",
    "Clustrování osob ↗": "Person Clustering ↗",
    "1. Pilíř • Kronika údolí (1356–1949)": "1st Pillar • Chronicle of the Valley (1356–1949)",
    "Dlouhomilov • Medelské • Benkov": "Dlouhomilov • Medelské • Benkov",
    "📖 Příběh Dlouhomilova, Medelského a Benkova": "📖 The Story of Dlouhomilov, Medelské & Benkov",
    "Vyprávění o třech sousedních sídlech, dědičné rychtě, selských rodech, řemeslnících a soužití na jazykové hranici Sudet podle dochovaných matrik, gruntovních knih a sčítacích operátů.": "A chronicle of three neighboring settlements, the hereditary magistrate's estate, peasant lineages, craftsmen, and coexistence on the Sudeten language border based on surviving parish registers, land books, and census sheets.",
    "Zajímavosti z matrik (11)": "Archival Highlights (11)",
    "Zajímavosti z matrik (12)": "Archival Highlights (12)",
    "Zajímavosti z matrik (13)": "Archival Highlights (13)",
    "Zajímavosti z matrik (14)": "Archival Highlights (14)",
    "Zajímavosti z matrik (15)": "Archival Highlights (15)",
    "Zajímavosti z matrik (16)": "Archival Highlights (16)",
    "Zajímavosti z matrik (17)": "Archival Highlights (17)",
    "Zajímavosti z matrik (18)": "Archival Highlights (18)",
    "📋 Sběrný arch domovní": "📋 House Summary Sheet",
    "Zemský archiv v Opavě & SOkA Šumperk (fond Okresní úřad Šumperk – I, NAD 999 – Sčítání lidu 1857–1921)": "Provincial Archives Opava & SOkA Šumperk (District Office Šumperk I, NAD 999 – 1857–1921 Censuses)",
    "Zemský archiv v Opavě & SOkA Šumperk (fond Okresní úřad Zábřeh, NAD 1000 – Sčítání lidu 1857–1921)": "Provincial Archives Opava & SOkA Šumperk (District Office Zábřeh, NAD 1000 – 1857–1921 Censuses)",
    "Komiksová kronika (12)": "Comic Chronicle (12)",
    "Komiksová kronika (14)": "Illustrated Chronicle (14)",
    "Komiks (14)": "Comic (14)",
    "Vše": "All",
    "🎨 Grafický výstup z pramenů": "🎨 Illustrated Archival Chronicle",
    "4 kapitoly • 12 ilustrovaných obrazů • Všechny památkově chráněné objekty (ÚSKP)": "4 sheets • 12 illustrated scenes • All protected cultural monuments (ÚSKP)",
    "5 kapitol • 14 ilustrovaných obrazů • Mapa kolonizace & památkové objekty (ÚSKP)": "5 sheets • 14 illustrated scenes • Colonization Map & heritage monuments (ÚSKP)",
    "Kronika údolí v obrazech: Komiks o historii Dlouhomilova, Medelského a Benkova (1356–1949)": "Chronicle of the Valley in Pictures: The Story of Dlouhomilov, Medelské & Benkov (1356–1949)",
    "Kronika údolí v obrazech: Komiks o historii Dlouhomilova, Medelského a Benkova (1269–1949)": "Chronicle of the Valley in Pictures: The Story of Dlouhomilov, Medelské & Benkov (1269–1949)",
    "Každý obraz vychází ze skutečných zápisů v gruntovních knihách, farních matrikách a sčítacích operátech. Kliknutím na ilustraci ji zvětšíte, tlačítky pod panelem přejdete přímo na dané stavení, rodopis nebo archivní sken.": "Every scene is based on authentic entries in land books, parish registers, and census sheets. Click any illustration to zoom in, or use the buttons below each panel to jump directly to the homestead, family profile, or archival scan.",
    "Strana I.": "Sheet I",
    "Strana II.": "Sheet II",
    "Strana III.": "Sheet III",
    "Strana IV.": "Sheet IV",
    "Strana V.": "Sheet V",
    "Vše (I.–IV.)": "All (I–IV)",
    "Vše (I.–V.)": "All (I–V)",
    "📖 Zobrazit všechny strany (I.–V.)": "📖 Show all sheets (I–V)",
    "🔍 Zvětšit mapu": "🔍 Enlarge map",
    "Tisk / PDF": "Print / PDF",
    "Zajímavosti z matrik, gruntovních knih a sčítání lidu": "Highlights from Parish Registers, Land Books & Censuses",
    "Jedenáct mikrohistorických příběhů a badatelských objevů přímo z rukopisných pramenů farnosti Dlouhomilov (1356–1949)": "Eleven micro-historical stories and archival discoveries directly from the manuscript sources of the Dlouhomilov parish (1356–1949)",
    "Dvanáct mikrohistorických příběhů a badatelských objevů přímo z rukopisných pramenů a zemských desek (1356–1949)": "Twelve micro-historical stories and archival discoveries directly from manuscript sources and land registers (1356–1949)",
    "Třináct mikrohistorických příběhů a badatelských objevů přímo z rukopisných pramenů a zemských desek (1356–1949)": "Thirteen micro-historical stories and archival discoveries directly from manuscript sources and land registers (1356–1949)",
    "Čtrnáct mikrohistorických příběhů a badatelských objevů přímo z rukopisných pramenů a zemských desek (1356–1949)": "Fourteen micro-historical stories and archival discoveries directly from manuscript sources and land registers (1356–1949)",
    "Patnáct mikrohistorických příběhů a badatelských objevů přímo z rukopisných pramenů a zemských desek (1356–1949)": "Fifteen micro-historical stories and archival discoveries directly from manuscript sources and land registers (1356–1949)",
    "Šestnáct mikrohistorických příběhů a badatelských objevů přímo z rukopisných pramenů a zemských desek (1356–1949)": "Sixteen micro-historical stories and archival discoveries directly from manuscript sources and land registers (1356–1949)",
    "Sedmnáct mikrohistorických příběhů a badatelských objevů přímo z rukopisných pramenů a zemských desek (1356–2006)": "Seventeen micro-historical stories and archival discoveries directly from manuscript sources and land registers (1356–2006)",
    "Osmnáct mikrohistorických příběhů a badatelských objevů přímo z rukopisných pramenů a zemských desek (1356–2006)": "Eighteen micro-historical stories and archival discoveries directly from manuscript sources and land registers (1356–2006)",
    "📄 Plný text v Markdownu ↗": "📄 Full Text in Markdown ↗",
    "Podklad:": "Base Map:",
    "🗺️ OpenStreetMap": "🗺️ OpenStreetMap",
    "🛰️ Letecká (Ortofoto)": "🛰️ Aerial (Orthophoto)",
    "🏔️ Topografická": "🏔️ Topographic",
    "📜 Historická mapa:": "📜 Historical Map:",
    "📜 Stabilní katastr 1834 (Císařský otisk – zástavba)": "📜 1834 Stable Cadastre (Imperial Imprint – Buildings)",
    "⚔️ I. vojenské mapování (1764–1783 Josefské)": "⚔️ I. Military Survey (1764–1783 Josephinian)",
    "⚔️ II. vojenské mapování (1838 Františkovo)": "⚔️ II. Military Survey (1838 Franciscan)",
    "⚔️ III. vojenské mapování (1874 – 1:25 000)": "⚔️ III. Military Survey (1874 – 1:25,000)",
    "🇨🇿 Topografická mapa ČSR (1937 – 1:25 000)": "🇨🇿 Topographic Map of ČSR (1937 – 1:25,000)",
    "🗺️ Topografická mapa S-1952 (1952)": "🗺️ Topographic Map S-1952 (1952)",
    "Průhlednost:": "Opacity:",
    "Dnes": "Today",
    "Historie": "History",
    "Vedle sebe": "Side by Side",
    "Kalibrace": "Calibration",
    "Zobrazení na mapě:": "Map Overlays:",
    "🟨 Zvýraznění lokalit (Dlouhomilov & Benkov – žlutý podkres)": "🟨 Highlight Localities (Dlouhomilov & Benkov – Yellow Frame)",
    "📍 Značky stavení (čp.)": "📍 House Markers (No.)",
    "💡 Autentické archivní mapy bez rušivých překryvů (1716–1983)": "💡 Authentic Archival Maps Without Overlays (1716–1983)",
    "Kalibrace historické mapy": "Historical Map Calibration",
    "Přizpůsobení přeložení vrstvy na OpenStreetMap": "Adjust Historical Layer Alignment Over OpenStreetMap",
    "🗺️ Kalibrovaná mapa:": "🗺️ Calibrated Map:",
    "📜 Císařský otisk (1834)": "📜 Imperial Imprint (1834)",
    "⚔️ I. vojenské mapování (1764)": "⚔️ I. Military Survey (1764)",
    "⚔️ II. vojenské mapování (1838)": "⚔️ II. Military Survey (1838)",
    "⚔️ III. vojenské mapování (1874)": "⚔️ III. Military Survey (1874)",
    "🇨🇿 Topografická mapa ČSR (1937)": "🇨🇿 Topographic Map of ČSR (1937)",
    "🎯 Prvek ke kalibraci:": "🎯 Target Element:",
    "🗺️ Celá mapa": "🗺️ Entire Map",
    "🟨 Dlouhomilov": "🟨 Dlouhomilov",
    "🟨 Benkov": "🟨 Benkov",
    "🟨 Medelské": "🟨 Medelské",
    "Identické budovy (GCP):": "Ground Control Points (GCP):",
    "Vyberte budovu (např. kostel, statek čp. 29) a klikněte na její polohu v historické mapě. Algoritmus dopočítá posun, měřítko i rotaci.": "Select a known building (e.g. Church No. 1, Farmstead No. 29) and click its position on the historical map. The algorithm computes offset, scale, and rotation.",
    "Výběr známé budovy / bodu:": "Select Known Building / Point:",
    "Kostel Všech svatých (čp. 1)": "All Saints' Church (No. 1)",
    "Statek čp. 29 (u Dvořáků)": "Farmstead No. 29 (Dvořák)",
    "Bývalá rychta (čp. 7)": "Former Rychta (No. 7)",
    "Usedlost čp. 5": "Homestead No. 5",
    "Usedlost s bránou (čp. 24)": "Homestead with Gate (No. 24)",
    "Usedlost ve svahu (čp. 43)": "Homestead on the Slope (No. 43)",
    "✏️ Vlastní bod (klikem do levé mapy)": "✏️ Custom Point (Click Left Map)",
    "Zaměřit": "Locate",
    "Zatím nezadány žádné body": "No control points added yet",
    "Povolit rotaci": "Allow Rotation",
    "⚡ Spočítat a přiložit": "⚡ Compute & Align",
    "Průhlednost vrstvy:": "Layer Opacity:",
    "0% (podklad OSM)": "0% (OSM Base)",
    "50% (srovnání)": "50% (Compare)",
    "100% (plná)": "100% (Full)",
    "Posun mapy:": "Map Offset:",
    "Krok:": "Step:",
    "Přetahovat myší": "Drag with Mouse",
    "Měřítko (velikost):": "Scale (Size):",
    "Rotace (natočení):": "Rotation (Angle):",
    "Doladění směru silnic a údolí vůči ortofotu": "Fine-tune road and valley orientation against orthophoto",
    "Uložit do prohlížeče": "Save in Browser",
    "Reset": "Reset",
    "Kód": "Code",
    "Zpětná vazba": "Feedback",
    "Všechny domy": "All Houses",
    "Pouze památky": "Monuments Only",
    "Mapa údolí": "Valley Map",
    "🏡 Seznam domů ↓": "🏡 House List ↓",
    "📋 Detail čp. ↓": "📋 House Detail ↓",
    "Dnešní mapa (OSM / Ortofoto)": "Modern Map (OSM / Orthophoto)",
    "Historická mapa": "Historical Map",
    "✕ Zavřít": "✕ Close",
    "Dnešní podklad & Značky domů": "Modern Base & House Markers",
    "Památkově chráněné objekty v Dlouhomilově (VPZ 2350)": "Protected Cultural Monuments in Dlouhomilov (VPZ 2350)",
    "Wikipedie ↗": "Wikipedia ↗",
    "Kliknutím zobrazíte kartu památky výše:": "Click to open the monument card above:",
    "🏛️ čp. 29 (U Dvořáků)": "🏛️ No. 29 (Dvořák Estate)",
    "🏛️ čp. 7 (Bývalá rychta)": "🏛️ No. 7 (Former Rychta)",
    "🏛️ čp. 5 (Usedlost)": "🏛️ No. 5 (Farmstead)",
    "🏛️ čp. 24 (Usedlost s bránou)": "🏛️ No. 24 (Gated Estate)",
    "🏛️ čp. 43 (Usedlost ve svahu)": "🏛️ No. 43 (Slope Homestead)",
    "⛪ čp. 1 (Kostel Všech svatých)": "⛪ No. 1 (All Saints' Church)",
    "Genealogie & Sčítání lidu (1857–1921) & Matriky N/O/Z": "Genealogy, Population Censuses (1857–1921) & Vital Registers",
    "Obyvatelé a rodopis obce Dlouhomilov": "Inhabitants & Genealogy of Dlouhomilov",
    "Kompletní genealogická databáze": "Complete genealogical database of",
    "ze sčítacích operátů (1857–1921),": "from census sheets (1857–1921),",
    "držitelů gruntů": "estate holders",
    "a podrobných": "and detailed",
    "životních osudů rodů": "family biographies",
    "s ověřenými vazbami na matriky a archivní scany Zemského archivu v Opavě.": "with verified links to parish registers and archival scans from the Provincial Archive in Opava.",
    "Sjednocené osoby": "Unified People",
    "Demografie obce": "Village Demography",
    "Spojování osob": "Record Linkage",
    "Clustrovací aplikace ↗": "Clustering App ↗",
    "Potřebujete vysvětlit dobové pojmy (výměnkář, podruh, rusticus) nebo jak najít další předky v ZAO Opava?": "Need an explanation of historical terms (výměnkář, podruh, rusticus) or how to find ancestors in ZAO Opava?",
    "Slovníček pojmů ➔": "Historical Glossary ➔",
    "Archivní průvodce (ZAO, SOkA) ➔": "Archival Guide (ZAO, SOkA) ➔",
    "Kategorie:": "Category:",
    "Rychlý výběr rodu:": "Quick Family Filter:",
    "Všichni": "All",
    "Dvořák (čp. 3, 22, 29, 46)": "Dvořák (Nos. 3, 22, 29, 46)",
    "Šafář (čp. 10, Medelské)": "Šafář (No. 10, Medelské)",
    "Jílek / Gilek (čp. 6, 10)": "Jílek / Gilek (Nos. 6, 10)",
    "Krobot (čp. 7, 24, 46)": "Krobot (Nos. 7, 24, 46)",
    "Berka (čp. 46, 110)": "Berka (Nos. 46, 110)",
    "Minář (Medelské čp. 1, 2)": "Minář (Medelské Nos. 1, 2)",
    "Merta (čp. 7, 43)": "Merta (Nos. 7, 43)",
    "Pavlík (čp. 5, 7, 46)": "Pavlík (Nos. 5, 7, 46)",
    "Resetovat všechny filtry": "Reset All Filters",
    "Všechny roky sčítání": "All Census Years",
    "Kliknutím na jméno osoby otevřete biografický profil s matrikami N/O/Z, kliknutím na stavení zobrazíte polohu na mapě": "Click a person's name to open their biographical profile with vital records, or click a house number to locate it on the map",
    "Jméno a příjmení": "Full Name",
    "Kategorie / Postavení": "Category / Status",
    "Rok sčítání": "Census Year",
    "Stavení": "Homestead",
    "Vztah v rodině": "Family Relation",
    "Narození": "Birth",
    "Povolání / Role": "Occupation / Role",
    "Poznámka / Kontext": "Note / Context",
    "Archivní scan": "Archival Scan",
    "Sjednocená osoba": "Unified Person",
    "Narození / Věk": "Birth / Age",
    "Propojené zápisy v pramenech (Sčítání lidu / Matriky)": "Linked Source Records (Censuses / Parish Registers)",
    "Akce": "Action",
    "4. Sekce • Rozšířená badatelna & Kartografie (Zobrazení na vyžádání)": "4th Pillar • Extended Research Hub & Cartography (On-Demand View)",
    "🧭 Badatelna, Demografické analýzy & Atlas historických map": "🧭 Research Hub, Demographic Analytics & Historical Map Atlas",
    "Pro lepší přehlednost stránky se podrobné analytické a metodické moduly otevírají jednotlivě podle vašeho výběru:": "To keep the page clean and readable, detailed analytical and methodological modules open individually on demand:",
    "🔽 Sbalit": "🔽 Collapse",
    "Historická demografie & Sociální skladba obce": "Historical Demography & Social Structure of the Municipality",
    "1857–1921 • 28 stavení • 469 sčítacích záznamů": "1857–1921 • 28 Homesteads • 469 Census Records",
    "Demografická a majetková analýza domácností": "Demographic & Wealth Analysis of Households",
    "Odkud přicházeli obyvatelé Dlouhomilova a Medelského, kdo byl z největší dálky, jak se v čase vyvíjel věkový profil populace a jak bohaté byly zdejší selské a domkářské usedlosti. Všechna data jsou dynamicky počítána ze zpracovaných operátů a katastru.": "Where the residents of Dlouhomilov, Medelské, and Benkov came from, who traveled from farthest away, how the age pyramid evolved over time, and how wealthy local peasant and cottager households were. All metrics are dynamically computed from transcribed census sheets and the cadastre.",
    "Zobrazit vše": "Show All",
    "Věková pyramida": "Age Pyramid",
    "Původ & Dálka": "Origins & Distance",
    "Bohatství & Dobytek": "Wealth & Livestock",
    "1. Jak se měnil histogram obyvatel podle věku v čase?": "1. How Did the Population Age Distribution Evolve Over Time?",
    "Vyberte konkrétní rok sčítání lidu nebo prozkoumejte celkový souhrnný profil:": "Select a specific census year or explore the combined historical profile:",
    "Věková skupina": "Age Group",
    "Podíl z populace a počet osob": "Population Share & Headcount",
    "2. Odkud byli obyvatelé Dlouhomilova a kdo přišel z největší dálky?": "2. Where Did Residents Come From & Who Came From Farthest Away?",
    "Analýza migračních okruhů, sňatkové mobility a dálkového přistěhovalectví podle vzdušné vzdálenosti (km).": "Analysis of migration rings, marriage mobility, and long-distance migration by straight-line distance (km).",
    "Žebříček rekordmanů: Obyvatelé z největší vzdálenosti (> 60 km)": "Long-Distance Record Holders: Residents Born Farthest Away (> 60 km)",
    "Vzdušnou čarou z Dlouhomilova (49.9069° N, 16.9896° E)": "Straight-line distance from Dlouhomilov (49.9069° N, 16.9896° E)",
    "Přehled všech 40+ obcí původu v sčítacích operátech": "Overview of All 40+ Municipalities of Origin in the Census Sheets",
    "Obec / Místo narození": "Municipality / Birthplace",
    "Vzdálenost": "Distance",
    "Počet osob": "Persons",
    "Migrační pásmo": "Migration Ring",
    "Zastoupená stavení & Příklad osob": "Represented Houses & Example Persons",
    "3. Jak bohaté domácnosti byly? (Majetková stratifikace a chov zvířat)": "3. How Wealthy Were Local Households? (Wealth Stratification & Livestock)",
    "Rozdělení do 4 majetkových tříd podle tažného dobytka (koně), stavu skotu, čeledi a zaměstnání v šumperských textilkách.": "Classification into 4 wealth tiers based on draft horses, cattle, farm servants, and employment in Šumperk textile mills.",
    "• Kliknutím na stavení otevřete jeho detail a mapu": "• Click any homestead to open its detail card and map location",
    "Stavení a rod": "Homestead & Family",
    "Majetková třída": "Wealth Tier",
    "Byty (1921)": "Apts (1921)",
    "Osob (1921)": "Persons (1921)",
    "Čeleď": "Servants",
    "Výměnek": "Retirees",
    "Zaměstnání / Textil": "Occupation / Textile",
    "Chovaný dobytek v operátech": "Livestock Recorded in Censuses",
    "Kartografický atlas obce (1716–1983)": "Cartographic Atlas of the Municipality (1716–1983)",
    "Historické mapy Dlouhomilova & Benkova": "Historical Maps of Dlouhomilov, Medelské & Benkov",
    "Unikátní badatelská sbírka 16 historických map zachycujících obec od barokních rukopisů (1716), přes tereziánská vojenská mapování, Stabilní katastr (1834) až po poválečné velkoměřítkové Státní mapy 1 : 5 000. Kliknutím můžete mapy přiblížit nebo aktivovat na interaktivní mapě.": "A curated collection of 16 historical maps capturing the valley from Baroque maps (1716), Theresian military surveys, and the 1834 Stable Cadastre up to postwar topographic maps. Click any map to inspect its high-resolution scan or activate it as a live overlay on the interactive map.",
    "Všechny (16)": "All Maps (16)",
    "⚔️ Vojenská": "⚔️ Military",
    "📐 Katastrální": "📐 Cadastral",
    "🗺️ Regionální": "🗺️ Regional",
    "Archivní metodika & Prameny & Slovníček": "Archival Methodology, Sources & Glossary",
    "Badatelský & Archivní průvodce pro Dlouhomilov": "Research & Archival Guide for Dlouhomilov, Medelské & Benkov",
    "Přehled historického správního zařazení obce, digitálních archivních portálů (ZAO Opava, SOkA Šumperk, ČÚZK, NPÚ), návod na čtení starého písma (kurentu) a interaktivní slovníček pojmů s přímým napojením do sčítání lidu.": "Overview of the municipality's historical administrative and parish jurisdiction, digital archive portals (ZAO Opava, SOkA Šumperk, ČÚZK, NPÚ), a guide to reading German Kurrent script, and an interactive glossary linked directly to the census registry.",
    "Textový průvodce ↗": "Text Guide ↗",
    "Historické správní a církevní zařazení Dlouhomilova & Benkova": "Historical Administrative & Ecclesiastical Jurisdiction of Dlouhomilov & Benkov",
    "Kde bádat: Přehled archivních institucí a portálů": "Where to Research: Overview of Archival Institutions & Portals",
    "Jak číst staré písmo (Německý novogotický kurent)": "How to Read Old Handwriting (German Neo-Gothic Kurrent Script)",
    "Písmo matrik do r. 1918": "Script of Registers Until 1918",
    "Většina záznamů v matrikách a gruntovních knihách do poloviny 19. století je psána německy novogotickým kurzívním písmem (kurentem). Zde jsou tři nejčastější úskalí při čtení:": "Most entries in parish registers and land books up to the late 19th century are written in German neo-Gothic cursive script (Kurrent). Here are the three most common pitfalls when deciphering it:",
    "Slovníček dobových pojmů & sociálních rolí": "Glossary of Historical Terms & Social Roles",
    "Přehled historických rolí (Bauer, výměnkář, podruh, čeleď) s možností okamžitého vyhledání osob v sčítání lidu.": "Overview of historical social roles (Bauer, výměnkář, podruh, čeleď) with one-click filtering in the census registry.",
    "Historická Wiki obce Dlouhomilov, osady Medelské & obce Benkov": "Historical Wiki of Dlouhomilov, Hamlet of Medelské & Benkov",
    "Znak obce (REKOS č. 37/2004):": "Municipal Coat of Arms (REKOS No. 37/2004):",
    "Ve stříbrno-červeně polceném štítě dva zkřížené vztyčené rýče mezi dvěma pětilistými jabloňovými květy se zlatými středy, vše opačných barev, přeložené doleva obráceným zlatým krojidlem.": "In a silver-and-red party per pale shield, two crossed upright spades between two five-petaled apple blossoms with golden centers, all counterchanged, surmounted by a golden plow colter facing sinister.",
    "Prameny: ZAO Opava • SOkA Šumperk • ÚAZK ČÚZK • NPÚ": "Sources: ZAO Opava • SOkA Šumperk • ÚAZK ČÚZK • NPÚ",
    "Licence: Creative Commons BY-NC-SA 4.0": "License: Creative Commons BY-NC-SA 4.0",
    "Historická Wiki obce Dlouhomilov & Benkov": "Historical Wiki of Dlouhomilov & Benkov",
    "Nekomerční badatelská a vzdělávací aplikace. Založeno na historických mapách z Mapové sbírky PřF UK a VÚGTK (projekt NAKI DF11P01OVV021 / Chartae Antiquae), fondech ÚAZK ČÚZK (Stabilní katastr 1834, SMO-5), sčítacích operátech a matrikách Zemského archivu v Opavě (ZAO) a Památkovém katalogu NPÚ.": "Non-commercial research and educational application. Based on historical maps from Charles University & VÚGTK (NAKI DF11P01OVV021 / Chartae Antiquae), ÚAZK ČÚZK fonds (1834 Stable Cadastre, SMO-5), census sheets and vital registers of the Provincial Archive in Opava (ZAO), and the NPÚ Monument Catalog.",
    "Licence & Citace pramenů (ČSN ISO 690)": "License & Source Citations (ISO 690)",
    "Zpětná vazba na GitHubu": "Feedback on GitHub",
    "🌐 Portál Chartae Antiquae ↗": "🌐 Chartae Antiquae Portal ↗",
    "🏛️ Geoportál ÚAZK ČÚZK ↗": "🏛️ ÚAZK ČÚZK Geoportal ↗",
    "Jméno osoby": "Person's Name",
    "🏡 Držitel gruntu": "🏡 Estate Holder",
    "Rolník na vlastním gruntě": "Farmer on Own Estate",
    "Rodinné vazby:": "Family Ties:",
    "Otec:": "Father:",
    "Matka:": "Mother:",
    "Manžel / Manželka:": "Spouse:",
    "Děti:": "Children:",
    "Příslušnost ke stavení:": "Associated Homestead:",
    "Usedlost:": "Homestead:",
    "🏡 Zobrazit stavení na mapě ↗": "🏡 Show Homestead on Map ↗",
    "Připojit další zápis": "Link Another Record",
    "Zde jsou sloučeny všechny archivní výskyty této osoby napříč sčítáními lidu a gruntovními zápisy (včetně pravopisných variant jako Dworák / Dvořák):": "All archival occurrences of this person across censuses and land registers (including spelling variants such as Dworák / Dvořák) are unified here:",
    "Životní dráha osoby v archivních pramenech": "Life Timeline in Archival Sources",
    "Zavřít profil": "Close Profile",
    "Archivní dokument": "Archival Document",
    "Zemský archiv v Opavě / SOkA Šumperk": "Provincial Archive in Opava / SOkA Šumperk",
    "🏛️ Původní archiv": "🏛️ Original Archive",
    "🔍 Celý obrázek": "🔍 Full Image",
    "Umístění:": "File Path:",
    "Kolečkem myši nebo tlačítky lupy můžete dokument libovolně přibližovat": "Use the mouse wheel or zoom buttons to magnify the archival scan",
    "Přidat nové stavení do Wiki": "Add New Homestead to Wiki",
    "Číslo popisné (čp.) *": "House Number (No.) *",
    "Místní název / Jméno rodu": "Local Name / Family Name",
    "Typ stavení": "Building Type",
    "🏛️ Nemovitá kulturní památka ČR": "🏛️ Protected Cultural Monument of the Czech Republic",
    "GPS Šířka (Lat)": "GPS Latitude (Lat)",
    "GPS Délka (Lng)": "GPS Longitude (Lng)",
    "Popis a stavební historie": "Description & Building History",
    "Zrušit": "Cancel",
    "Uložit stavení": "Save Homestead",
    "Rozumím, zavřít": "Got it, Close",
    "Zavřít okno": "Close Window",
    // Dynamic app.js strings
    "Nemovitá kulturní památka České republiky": "Protected Cultural Monument of the Czech Republic",
    "Památkový katalog NPÚ ↗": "NPÚ Monument Catalog ↗",
    "Katastrální parcela (1834)": "Building Parcel (1834)",
    "Pozemkové parcely": "Land Parcels",
    "Příběh & Držitelé": "Story & Holders",
    "Sčítání lidu": "Population Census",
    "Listiny & Scany": "Documents & Scans",
    "Vše pod sebou": "Show All",
    "Popis a historie usedlosti": "Description & History of the Homestead",
    "Stabilní katastr (1834)": "Stable Cadastre (1834)",
    "Rodinná historie, matriky & paměti stavení": "Family History, Parish Registers & Homestead Chronicles",
    "Časová osa držby gruntu a matričních událostí": "Timeline of Estate Ownership & Vital Events",
    "Chované hospodářské zvířectvo": "Recorded Livestock on the Homestead",
    "Koně": "Horses",
    "Skot / Krávy": "Cattle / Cows",
    "Prasata": "Pigs",
    "Kozy / Ovce": "Goats / Sheep",
    "Drůbež": "Poultry",
    "Úly": "Beehives",
    "Dochované listiny, mapy a přepisy pramenů": "Surviving Documents, Maps & Source Transcriptions",
    "Otevřít velký scan": "Open Full Scan",
    "Přepis / Citace z pramene:": "Transcription / Source Quote:",
    "Zobrazit scan sčítacího archu": "View Census Sheet Scan",
    "Sčítací operát pro tento rok nebyl dosud přepsán.": "The census sheet for this year has not been transcribed yet.",
    "Zvětšit v prohlížeči": "Zoom in Viewer",
    "Detail scanu": "Scan Detail",
    "Přesný zdroj ↗": "Original Source ↗",
    "Na mapě": "On Map",
    "Archivní záznam a parametry:": "Archival Record & Specifications:",
    "Dobový zápis názvů na mapě:": "Historical Place Names on the Map:",
    "Klíčové prvky na mapě:": "Key Features on the Map:",
    "Komunální znak a heraldika obce Dlouhomilov & Benkov": "Municipal Coat of Arms & Heraldry of Dlouhomilov & Benkov",
    "🏡 Obec & osada:": "🏡 Municipality & Hamlet:",
    "🏛️ Farní příslušnost:": "🏛️ Parish Jurisdiction:",
    "Matriky N/O/Z uloženy v ZAO Opava": "Vital registers (B/M/D) held in ZAO Opava",
    "⚖️ Správní & soudní okres:": "⚖️ Political & Judicial District:",
    "🏛️ Památková zóna & archivy:": "🏛️ Monument Zone & Archives:",
    "✔ Ověřeno: Stabilní katastr 1834 + Sčítání 1857–1921 + Matriky 1786–1949": "✔ Verified: 1834 Stable Cadastre + 1857–1921 Censuses + 1786–1949 Registers",
    "Stavení (čp.)": "Homestead (No.)",
    "Stavební parcela (1834 → 1910)": "Building Parcel (1834 → 1910)",
    "Kontinuita čísla": "Number Continuity",
    "Posloupnost rodů (17.–20. stol.)": "Family Succession (17th–20th Cent.)",
    "Matriky (1889–1949)": "Parish Registers (1889–1949)",
    "📑 Použité fondy, signatury & inventáře:": "📑 Archival Fonds, Signatures & Inventories:",
    "Jak postupovat v badatelně:": "How to Research in the Archive:",
    "Archivní fond": "Archival Fonds",
    "Otevřít portál ↗": "Open Portal ↗",
    "Nenalezen žádný odpovídající výraz.": "No matching glossary term found.",
    "Hledat tyto osoby v sčítání lidu ➔": "Find These People in the Census Registry ➔",
    "🔍 Zvětšit obraz": "🔍 Enlarge Scene",
    "🔍 Zvětšit ilustraci": "🔍 Enlarge Illustration",
    "Pramen:": "Source:",
    "Související v aplikaci:": "Related in the App:",
    "📄 Dokument .md ↗": "📄 Markdown Doc ↗",
    "Doplnit / opravit dům": "Suggest Edit / Correction",
    "Historická Wiki obce Dlouhomilov & Benkov – Genealogie, Sčítání lidu a Stabilní katastr": "Historical Wiki of Dlouhomilov & Benkov – Genealogy, Censuses & Stable Cadastre",
    "S/J: 0 m, V/Z: 0 m": "N/S: 0 m, E/W: 0 m",
    "Písmeno": "The letter",
    "má nad sebou vždy rozlišovací oblouček (": "always has a distinguishing crescent above it (",
    "jsou dvě úzké svislé čárky těsně u sebe,": "consists of two narrow vertical strokes close together,",
    "má ostré lomení.": "has sharp angular strokes.",
    "má zřetelnou tečku, zatímco": "has a distinct dot, whereas",
    "nikoliv. U dvojhlásky": "does not. In the diphthong",
    "pozor na záměnu s": "watch out for confusion with",
    "Dlouhé písmeno": "The tall letter",
    "(s příčnou čárkou) a": "(with a crossbar) and",
    "mají horní i dolní smyčku, liší se vázáním tahu a dříkem.": "have both upper and lower loops, differing in stroke connection and stem.",
    "Sjednocené zápisy ze sčítání lidu & matrik (": "Unified Census & Parish Register Records (",
    "Nástroje pro georeferencování historických map": "Tools for Georeferencing Historical Maps",
    "Jak propojit naskenované staré plány s dnešními mapovými podklady": "How to align scanned historical maps with modern base maps",
    "1. MapWarper (Online bez instalace)": "1. MapWarper (Online Without Installation)",
    "Otevřít MapWarper.net ↗": "Open MapWarper.net ↗",
    "Nejpopulárnější webový nástroj pro badatele a genealogy. Umožňuje nahrát libovolný JPEG/PNG a naklikat společné body:": "Popular web tool for researchers and genealogists allowing you to upload any JPEG/PNG and click control points:",
    "Nahrajte naskenovanou mapu (záložka": "Upload the scanned map (tab",
    "V záložce": "In the tab",
    "klikněte v levém okně na starou mapu a v pravém okně na tentýž bod v OpenStreetMap.": "click a point on the old map on the left and the same point in OpenStreetMap on the right.",
    "Zvolte kontrolní body:": "Choose control points:",
    "Kostel Všech svatých": "All Saints' Church",
    "Klikněte na": "Click",
    "a v záložce": "and in the tab",
    "získáte hotový WMS odkaz nebo GeoTIFF.": "you will get a ready-to-use WMS link or GeoTIFF.",
    "2. QGIS – Desktopový Georeferencer (Profesionální přesnost)": "2. QGIS – Desktop Georeferencer (Professional Precision)",
    "Stáhnout QGIS zdarma ↗": "Download QGIS for Free ↗",
    "Open-source geografický informační systém se špičkovým vestavěným nástrojem:": "Open-source geographic information system with a built-in georeferencing tool:",
    "V horním menu otevřete": "In the top menu open",
    "Rastr → Georeferencer": "Raster → Georeferencer",
    "Otevřete soubor": "Open the file",
    "(List IV Dlouhomilov).": "(Sheet IV Dlouhomilov).",
    "Klikněte na nástroj": "Click the tool",
    "Přidat bod": "Add Point",
    "a zadejte souřadnice nebo klikněte na mapové plátno (s načtenou vrstvou OpenStreetMap / Ortofoto ČÚZK).": "and enter coordinates or click the map canvas (with OpenStreetMap / ČÚZK Orthophoto loaded).",
    "Pro zachování tvaru bez deformace zvolte": "To preserve shape without local distortion select",
    ". Pro lokální přizpůsobení každého stavení zvolte": ". For local warping of every homestead select",
    "Rychlý online nástroj pro vizuální prolínání a přímé porovnání starých a nových map přes interaktivní lupu.": "Fast online tool for visual blending and direct comparison of old and modern maps.",
    "Navštívit Georeferencer.com ↗": "Visit Georeferencer.com ↗",
    "4. Mapy.cz & ČÚZK WMS": "4. Mapy.cz & ČÚZK WMS",
    "Vrstvy II. i III. vojenského mapování a letecké snímkování z 50. let přímo integrované přes národní geoportály.": "Layers of the II and III Military Surveys and 1950s aerial photography integrated via national geoportals.",
    "Zobrazit Dlouhomilov na Mapy.cz ↗": "View Dlouhomilov on Mapy.cz ↗",
    "Autorská práva, licence a citace pramenů": "Copyright, Licenses & Source Citations",
    "Právní rámec, ochrana děl a metodika citování pro badatelské a vzdělávací účely": "Legal framework, copyright status, and citation methodology for research and educational use",
    "1. Autorskoprávní status historických map (Public Domain / Volná díla)": "1. Copyright Status of Historical Maps (Public Domain)",
    "volnými díly (Public Domain)": "Public Domain works",
    "a nepodléhají autorskoprávní ochraně původních tvůrců.": "and are no longer subject to copyright protection of their original creators.",
    "2. Digitalizace: Mapová sbírka PřF UK & VÚGTK (Projekt NAKI)": "2. Digitization: Map Collection of Charles University & VÚGTK (NAKI Project)",
    "Většina digitalizovaných historických mapových listů byla zpřístupněna prostřednictvím portálu": "Most digitized historical map sheets were made accessible through the portal",
    "Digitalizaci provedl Výzkumný ústav geodetický, topografický a kartografický, v.v.i. (VÚGTK) a Mapová sbírka PřF UK v rámci projektu Ministerstva kultury ČR:": "Digitized by the Research Institute of Geodesy, Topography and Cartography (VÚGTK) and the Map Collection of the Faculty of Science, Charles University under the Ministry of Culture NAKI project:",
    "\"Kartografické zdroje jako kulturní dědictví. Výzkum nových metodik a technologií digitalizace, zpřístupnění a využití starých map, plánů, atlasů a glóbů.\"": "\"Cartographic Sources as Cultural Heritage: Research of New Methodologies and Technologies for Digitization, Access and Use of Old Maps, Plans, Atlases and Globes.\"",
    "(Identifikační kód projektu:": "(Project ID:",
    "Spolupracující paměťové instituce (vlastníci originálů):": "Cooperating Memory Institutions (Owners of Originals):",
    "Historický ústav AV ČR, Národní archiv ČR, Národní knihovna ČR, Fakulta životního prostředí UJEP, Vlastivědné muzeum v Olomouci, Muzeum Brněnska, Moravská zemská knihovna.": "Institute of History of the Czech Academy of Sciences, National Archives, National Library, UJEP, Regional Museum in Olomouc, Moravian Library.",
    "3. Katastrální a geodetické podklady ČÚZK / ÚAZK": "3. Cadastral & Geodetic Data of ČÚZK / ÚAZK",
    "Císařské povinné otisky stabilního katastru (1834), Státní mapy 1 : 5 000 (SMO-5) a vektorová data katastru nemovitostí (WMS) jsou poskytována Českým úřadem zeměměřickým a katastrálním (ČÚZK) a Ústředním archivem zeměměřictví a katastru (ÚAZK) v režimu otevřených dat a veřejných archivních fondů.": "The 1834 Imperial Mandatory Imprints of the Stable Cadastre, State Maps 1 : 5,000 (SMO-5), and cadastral vector data (WMS) are provided by the Czech Office for Surveying, Mapping and Cadastre (ČÚZK) and the Central Archive of Surveying and Cadastre (ÚAZK).",
    "4. Doporučený tvar citace dle ČSN ISO 690 pro badatele": "4. Recommended Citation Format (ISO 690) for Researchers",
    "I. vojenské mapování:": "I. Military Survey:",
    "I. vojenské mapování (1764–1783): Morava.": "I. Military Survey (1764–1783): Moravia.",
    "[1 : 28 800]. Uloženo: Österreichisches Staatsarchiv / FŽP UJEP. Digitalizoval VÚGTK / PřF UK (NAKI DF11P01OVV021). Dostupné z: https://chartae-antiquae.cz/cs/maps/12689/": "[1 : 28,800]. Held at: Österreichisches Staatsarchiv / FŽP UJEP. Digitized by VÚGTK / Charles Univ. (NAKI DF11P01OVV021). Available at: https://chartae-antiquae.cz/cs/maps/12689/",
    "Stabilní katastr:": "Stable Cadastre:",
    "Císařské povinné otisky stabilního katastru 1 : 2 880 – Morava a Slezsko: k. ú. Lomigsdorf (Dlouhomilov).": "Imperial Mandatory Imprints of the Stable Cadastre 1 : 2,880 – Moravia & Silesia: Lomigsdorf (Dlouhomilov).",
    "1834, sign. MOR102618340. Ústřední archiv zeměměřictví a katastru (ÚAZK ČÚZK).": "1834, sign. MOR102618340. Central Archive of Surveying and Cadastre (ÚAZK ČÚZK).",
    "Spojování a ztotožňování osob (Record Linkage)": "Record Linkage & Entity Resolution",
    "Propojení různých zápisů téže osoby napříč sčítacími operáty (1857–1921) a matrikami (např.": "Link multiple records of the same person across census sheets (1857–1921) and parish registers (e.g.",
    "Automatické návrhy (": "Automatic Suggestions (",
    "Ruční spojení": "Manual Linking",
    "Správa spojených osob (": "Manage Linked Persons (",
    "💡 Inteligentní párovací algoritmus prohledal databázi sčítání lidu": "💡 Smart entity-matching algorithm scanned the census database",
    "Vyhledává záznamy se shodným jménem (vč. fonetických a historických variant": "Finds records with matching names (including phonetic and historical variants",
    "), shodným rokem narození a číslem stavení.": "), matching birth year, and house number.",
    "Propojit vše doporučené": "Link All Recommended",
    "Vyberte dva archivní záznamy nebo přiřaďte záznam k existující osobě:": "Select two archival records or assign a record to an existing person:",
    "Můžete ručně spojit libovolný záznam ze sčítání lidu s existujícím biografickým profilem nebo vytvořit novou sjednocenou osobu.": "You can manually link any census record to an existing biographical profile or create a new unified person.",
    "Záznam ze sčítání lidu (A)": "Census Record (A)",
    "Vyberte záznam...": "Select record...",
    "Cílová osoba nebo záznam (B)": "Target Person or Record (B)",
    "Existující osoba": "Existing Person",
    "Jiný sčítací záznam": "Another Census Record",
    "Vyberte cíl...": "Select target...",
    "Spojit tyto záznamy do jedné osoby": "Link These Records Into One Person",
    "Přehled všech sjednocených osob v databázi": "Overview of All Unified Persons in the Database",
    "Změny jsou bezpečně uloženy ve vašem prohlížeči (LocalStorage) a lze je kdykoliv exportovat.": "Changes are saved locally in your browser (LocalStorage) and can be exported at any time.",
    "Obnovit výchozí": "Restore Defaults",
    "Počet propojených zápisů": "Linked Records Count",
    "Zahrnuté zápisy": "Included Records",
    "Znak obce Dlouhomilov & Benkov (kliknutím zobrazíte erb a heraldický popis)": "Coat of Arms of Dlouhomilov & Benkov (click to view heraldic description)",
    "Zobrazit všechny podsekce příběhu pod sebou": "Show all story subsections continuously",
    "Vytisknout komiks nebo uložit jako PDF brožuru (4 strany A4)": "Print the comic chronicle or save as a 4-page A4 PDF booklet",
    "Vytisknout komiks nebo uložit jako PDF brožuru (5 stran A4)": "Print the comic chronicle or save as a 5-page A4 PDF booklet",
    "Otevřít interaktivní panel pro ladění polohy, měřítka a rotace mapy": "Open interactive panel for fine-tuning map position, scale, and rotation",
    "Návod pro online i offline georeferencování (MapWarper, QGIS, Mapy.cz)": "Guide to online and desktop georeferencing (MapWarper, QGIS, Mapy.cz)",
    "Jemný průhledný žlutý podkres intravilánu obcí Dlouhomilov a Benkov": "Subtle translucent yellow highlight of the built-up areas of Dlouhomilov and Benkov",
    "Zobrazit či skrýt čísla popisná stavení pro úplně čistý pohled na mapu": "Show or hide house number markers for an unobstructed map view",
    "Minimalizovat / Rozbalit panel": "Minimize / Expand Panel",
    "Návod ke kalibraci": "Calibration Guide",
    "Zavřít kalibrační panel": "Close Calibration Panel",
    "Kalibrovat celou mapovou vrstvu (posun, měřítko, rotace)": "Calibrate entire map layer (offset, scale, rotation)",
    "Kalibrovat označující čtverec Dlouhomilova na této mapě": "Calibrate highlight box of Dlouhomilov on this map",
    "Kalibrovat označující čtverec Benkova na této mapě": "Calibrate highlight box of Benkov on this map",
    "Kalibrovat označující čtverec Medelského na této mapě": "Calibrate highlight box of Medelské on this map",
    "Vymazat všechny body": "Clear all points",
    "Posun na sever": "Move North",
    "Posun na západ": "Move West",
    "Posun na východ": "Move East",
    "Posun na jih": "Move South",
    "Otočit vlevo o 0.1°": "Rotate left by 0.1°",
    "Otočit vpravo o 0.1°": "Rotate right by 0.1°",
    "Vrátit na původní kalibraci": "Reset to default calibration",
    "Zkopírovat souřadnicový bounding box": "Copy coordinate bounding box",
    "Zpětná vazba k mapě nebo stavením na GitHubu": "Feedback on map or homesteads on GitHub",
    "Hledat číslo popisné, rod, památku...": "Search house No., family name, monument...",
    "Přejít na demografickou a majetkovou analýzu obce": "Go to demographic and wealth analysis of the municipality",
    "Nástroj pro ztotožňování a propojování zápisů téže osoby": "Tool for matching and linking records of the same person",
    "Otevřít samostatnou clustrovací aplikaci jednotlivých osob (Entity Resolution, K-Means, Síť vazeb a migrací)": "Open standalone person clustering app (Entity Resolution, K-Means, Kinship & Migration Network)",
    "Vymazat hledání": "Clear search",
    "Skrýt rozbalenou badatelskou sekci": "Hide expanded research section",
    "Hledat dům, majitele, řemeslo nebo textil...": "Search house, owner, craft, or textile...",
    "Navrhnout mapu, opravu datace nebo zpětnou vazbu": "Suggest a map, dating correction, or feedback",
    "Otevřít kompletního průvodce v Markdownu": "Open full guide in Markdown",
    "Navrhnout doplnění archivního pramene nebo metodiky": "Suggest an archival source or methodology addition",
    "Přiblížit (+)": "Zoom in (+)",
    "Oddálit (-)": "Zoom out (-)",
    "Původní velikost (100%)": "Original size (100%)",
    "Otevřít digitální badatelnu / původní archiv": "Open digital archive / original source",
    "Nahlásit chybu v přepisu nebo doplnit údaje k tomuto dokumentu na GitHubu": "Report a transcription error or add details for this document on GitHub",
    "Např. 32": "E.g. 32",
    "Např. Grunt u Nováků": "E.g. Novák Farmstead",
    "Např. Selský grunt / Chalupa": "E.g. Peasant Farmstead / Cottage",
    "Základní popis stavení, poloha v obci...": "Basic description of the homestead, location in the village...",
    "Nahlásit chybu, doplnění nebo připomínku na GitHubu": "Report an issue, addition, or comment on GitHub",
    "Stáhnout spojení ve formátu JSON": "Download linked records as JSON",
    "Vrátit všechna spojení na původní výchozí stav": "Reset all record links to default state",
    "Nahlásit chybu, doplnění nebo zpětnou vazbu k této stránce/pozici na GitHubu (s automatickou lokalizací)": "Report an error, addition, or feedback for this section on GitHub",
    "Zastoupená stavení": "Represented Houses",
    "Chovaný dobytek": "Livestock",
    "Rozcestník": "Overview",
    "Úvod": "Home",
    "Úvod & Aktuality": "Home & News",
    "Aktuality": "News",
    "Reference": "References",
    "Reference & Prameny": "References & Sources",
    "Novinky & aktuality projektu": "Project News & Updates",
    "Nejnovější aktualizace výzkumu": "Latest Research Updates",
    "Katalog pramenů, literatury a citační návod": "Sources Catalog, Literature & Citation Guide",
    "Katalog pramenů & literatury": "Sources & Literature Catalog",
    "Jak citovat & Licence": "How to Cite & License",
    "Badatelský průvodce & Slovníček": "Research Guide & Glossary",
    "Zobrazit vše": "Show All",
    "Atlas map (16)": "Map Atlas (16)",
    "Atlas historických map (16)": "Historical Map Atlas (16)",
    "Interaktivní mapa & Stavení": "Interactive Map & Homesteads",
    "Otevřít sekci ↗": "Open Section ↗",
    "Otevřít modul →": "Open Module →",
    "Zpět na rozcestník": "Back to Overview",
    "Hledat pramen, archiv, autora, signaturu...": "Search source, archive, author, signature...",
    "Hlavní rozcestník archivu, aktuality výzkumu a přehled dostupných modulů": "Main archive hub, research updates and module directory",
    "Kronika údolí v 10 kapitolách, 11 zajímavostí z matrik a tisknutelný 12panelový komiks": "10-chapter valley chronicle, 11 register highlights & printable 12-panel comic",
    "Kronika údolí v 11 kapitolách, 13 zajímavostí z matrik a tisknutelný 12panelový komiks": "11-chapter valley chronicle, 13 register highlights & printable 12-panel comic",
    "Kronika údolí v 11 kapitolách, 14 zajímavostí z matrik a tisknutelný 12panelový komiks": "11-chapter valley chronicle, 14 register highlights & printable 12-panel comic",
    "Kronika údolí v 11 kapitolách, 15 zajímavostí z matrik a tisknutelný 12panelový komiks": "11-chapter valley chronicle, 15 register highlights & printable 12-panel comic",
    "Kronika údolí v 11 kapitolách, 16 zajímavostí z matrik a tisknutelný 12panelový komiks": "11-chapter valley chronicle, 16 register highlights & printable 12-panel comic",
    "Kronika údolí v 11 kapitolách, 17 zajímavostí z matrik a literatury a 12panelový komiks": "11-chapter valley chronicle, 17 archival & scholarly highlights & 12-panel comic",
    "Kronika údolí v 11 kapitolách, 18 zajímavostí z matrik a literatury a 12panelový komiks": "11-chapter valley chronicle, 18 archival & scholarly highlights & 12-panel comic",
    "Kronika údolí v 11 kapitolách, 18 zajímavostí z matrik a literatury a 14panelový komiks": "11-chapter valley chronicle, 18 archival & scholarly highlights & 14-panel comic",
    "1. Pilíř • Kronika údolí (1269–1949)": "Pillar 1 • Valley Chronicle (1269–1949)",
    "11 kapitol": "11 chapters",
    "Zajímavosti (13)": "Highlights (13)",
    "Zajímavosti (14)": "Highlights (14)",
    "Zajímavosti (15)": "Highlights (15)",
    "Zajímavosti (16)": "Highlights (16)",
    "Zajímavosti (17)": "Highlights (17)",
    "Zajímavosti (18)": "Highlights (18)",
    "Interaktivní mapa (1764–1983), Side-by-Side kalibrace a karty všech 157 stavení": "Interactive map (1764–1983), Side-by-Side calibration & cards for all 157 houses",
    "Stránkovaný rejstřík 1 350 obyvatel (1857–1921), sjednocené osoby a 11 biografií": "Paginated registry of 1,350 inhabitants (1857–1921), unified persons & 11 biographies",
    "Stránkovaný rejstřík 3 449 obyvatel (1857–1921), sjednocené osoby a 11 biografií": "Paginated registry of 3,449 inhabitants (1857–1921), unified persons & 11 biographies",
    "Hledat mezi 3 449 obyvateli": "Search 3,449 Residents",
    "3 449 záznamů": "3,449 records",
    "Benkov 1910 (275)": "Benkov 1910 (275)",
    "1275–2026 • ČSÚ": "1275–2026 • CZSO",
    "Demografie (1275–2026: Domy, katastry & ČSÚ) & Majetkové vrstvy": "Demography (1275–2026: Houses, Cadastres & CZSO) & Social Stratification",
    "Demografická a majetková analýza obce (1275–2026)": "Demographic & Household Wealth Analysis (1275–2026)",
    "Historická křivka domů a obyvatel (1275–2026), statistiky ČSÚ, věkové pyramidy a migrace": "Historical curve of houses & population (1275–2026), CZSO statistics, age pyramids & migration",
    "Statistiky ČSÚ (1869–2026), věkové pyramidy, migrace rodišť a textilní bělidla": "CZSO statistics (1869–2026), age pyramids, migration rings & linen bleacheries",
    "Archivní fondy (ZAO, MZA, SOkA), kartografie, literatura (ČSN ISO 690) a metodika": "Archival funds (ZAO, MZA, SOkA), cartography, literature & archival guide",
    "Archivní prameny & literatura": "Archival Sources & Literature",
    "Kompletní seznam archivních fondů, map, statistik a literatury": "Complete catalog of archival funds, maps, statistics & literature"
  },
  de: {
    "Dlouhomilov & Benkov": "Lomigsdorf (Dlouhomilov) & Benke (Benkov)",
    "Lomigsdorf & Benke": "Dlouhomilov • Medelské (Dreihofen) • Benkov",
    "Historická Wiki, sčítací operáty, matriky N/O/Z a kronika rodů": "Historisches Wiki, Volkszählungsbögen, Matriken G/T/S & Familienchronik",
    "Příběh obce": "Ortschronik",
    "Mapa & Stavení": "Karte & Höfe",
    "Badatelna, Mapy & Analýzy": "Forschung, Karten & Analysen",
    "Přidat stavení": "Hof hinzufügen",
    "Příběh": "Chronik",
    "Mapa & Domy": "Karte & Höfe",
    "Obyvatelé": "Einwohner",
    "Demografie": "Demographie",
    "Atlas map": "Kartenatlas",
    "Průvodce": "Leitfaden",
    "Clustery ↗": "Cluster ↗",
    "Kapitoly příběhu (10)": "Kapitel der Chronik (10)",
    "Kapitoly příběhu (11)": "Kapitel der Chronik (11)",
    "Zajímavosti z matrik": "Entdeckungen aus den Matriken",
    "Komiksová kronika": "Bilderchronik",
    "Interaktivní mapa": "Interaktive Karte",
    "Seznam stavení": "Häuserverzeichnis",
    "Detail vybraného domu": "Hausdetailansicht",
    "Rejstřík obyvatel": "Einwohnerregister",
    "Biografické profily": "Biographische Profile",
    "Demografie & Bohatství": "Demographie & Besitz",
    "Atlas map (18)": "Kartenatlas (18)",
    "Průvodce & Slovníček": "Archivführer & Glossar",
    "Clustrování osob ↗": "Personen-Clustering ↗",
    "1. Pilíř • Kronika údolí (1356–1949)": "1. Säule • Chronik des Tals (1356–1949)",
    "Dlouhomilov • Medelské • Benkov": "Lomigsdorf (Dlouhomilov) • Dreihofen (Medelské) • Benke (Benkov)",
    "📖 Příběh Dlouhomilova, Medelského a Benkova": "📖 Die Geschichte von Lomigsdorf (Dlouhomilov), Dreihofen (Medelské) & Benke (Benkov)",
    "Vyprávění o třech sousedních sídlech, dědičné rychtě, selských rodech, řemeslnících a soužití na jazykové hranici Sudet podle dochovaných matrik, gruntovních knih a sčítacích operátů.": "Erzählung über drei benachbarte Siedlungen, das Erbgericht, alte Bauerngeschlechter, Handwerker und das Zusammenleben an der Sprachgrenze Nordmährens nach erhaltenen Pfarrmatriken, Grundbüchern und Volkszählungsbögen.",
    "Zajímavosti z matrik (11)": "Matriken-Entdeckungen (11)",
    "Zajímavosti z matrik (12)": "Matriken-Entdeckungen (12)",
    "Zajímavosti z matrik (13)": "Matriken-Entdeckungen (13)",
    "Zajímavosti z matrik (14)": "Matriken-Entdeckungen (14)",
    "Zajímavosti z matrik (15)": "Matriken-Entdeckungen (15)",
    "Zajímavosti z matrik (16)": "Matriken-Entdeckungen (16)",
    "Zajímavosti z matrik (17)": "Matriken-Entdeckungen (17)",
    "Zajímavosti z matrik (18)": "Matriken-Entdeckungen (18)",
    "📋 Sběrný arch domovní": "📋 Haussammelbogen",
    "Zemský archiv v Opavě & SOkA Šumperk (fond Okresní úřad Šumperk – I, NAD 999 – Sčítání lidu 1857–1921)": "Landesarchiv Troppau & SOkA Šumperk (Bezirksamt Mährisch Schönberg I, NAD 999 – Volkszählung 1857–1921)",
    "Zemský archiv v Opavě & SOkA Šumperk (fond Okresní úřad Zábřeh, NAD 1000 – Sčítání lidu 1857–1921)": "Landesarchiv Troppau & SOkA Šumperk (Bezirksamt Hohenstadt, NAD 1000 – Volkszählung 1857–1921)",
    "Komiksová kronika (12)": "Bilderchronik (12)",
    "Komiksová kronika (14)": "Bilderchronik (14)",
    "Komiks (14)": "Comic (14)",
    "Vše": "Alle",
    "🎨 Grafický výstup z pramenů": "🎨 Illustrierte Quellenchronik",
    "4 kapitoly • 12 ilustrovaných obrazů • Všechny památkově chráněné objekty (ÚSKP)": "4 Bögen • 12 illustrierte Szenen • Alle denkmalgeschützten Objekte (ÚSKP)",
    "5 kapitol • 14 ilustrovaných obrazů • Mapa kolonizace & památkové objekty (ÚSKP)": "5 Bögen • 14 illustrierte Szenen • Kolonisationskarte & Denkmäler (ÚSKP)",
    "Kronika údolí v obrazech: Komiks o historii Dlouhomilova, Medelského a Benkova (1356–1949)": "Talchronik in Bildern: Die Geschichte von Lomigsdorf (Dlouhomilov), Dreihofen (Medelské) & Benke (Benkov) (1356–1949)",
    "Kronika údolí v obrazech: Komiks o historii Dlouhomilova, Medelského a Benkova (1269–1949)": "Talchronik in Bildern: Die Geschichte von Lomigsdorf (Dlouhomilov), Dreihofen (Medelské) & Benke (Benkov) (1269–1949)",
    "Každý obraz vychází ze skutečných zápisů v gruntovních knihách, farních matrikách a sčítacích operátech. Kliknutím na ilustraci ji zvětšíte, tlačítky pod panelem přejdete přímo na dané stavení, rodopis nebo archivní sken.": "Jedes Bild beruht auf authentischen Einträgen in den Grundbüchern, Pfarrmatriken und Volkszählungsbögen. Klicken Sie auf eine Illustration zum Vergrößern oder nutzen Sie die Schaltflächen unter dem Bild für den direkten Sprung zum Hof, Familienprofil oder Archivscan.",
    "Strana I.": "Bogen I",
    "Strana II.": "Bogen II",
    "Strana III.": "Bogen III",
    "Strana IV.": "Bogen IV",
    "Strana V.": "Bogen V",
    "Vše (I.–IV.)": "Alle (I–IV)",
    "Vše (I.–V.)": "Alle (I–V)",
    "📖 Zobrazit všechny strany (I.–V.)": "📖 Alle Bögen anzeigen (I–V)",
    "🔍 Zvětšit mapu": "🔍 Karte vergrößern",
    "Tisk / PDF": "Druck / PDF",
    "Zajímavosti z matrik, gruntovních knih a sčítání lidu": "Entdeckungen aus Pfarrmatriken, Grundbüchern und Volkszählungen",
    "Jedenáct mikrohistorických příběhů a badatelských objevů přímo z rukopisných pramenů farnosti Dlouhomilov (1356–1949)": "Elf mikrohistorische Geschichten und Forschungsfunde direkt aus den Handschriftenquellen der Pfarre Lomigsdorf / Dlouhomilov (1356–1949)",
    "Dvanáct mikrohistorických příběhů a badatelských objevů přímo z rukopisných pramenů a zemských desek (1356–1949)": "Zwölf mikrohistorische Geschichten und Forschungsfunde direkt aus den Handschriftenquellen und der Landtafel (1356–1949)",
    "Třináct mikrohistorických příběhů a badatelských objevů přímo z rukopisných pramenů a zemských desek (1356–1949)": "Dreizehn mikrohistorische Geschichten und Forschungsfunde direkt aus den Handschriftenquellen und der Landtafel (1356–1949)",
    "Čtrnáct mikrohistorických příběhů a badatelských objevů přímo z rukopisných pramenů a zemských desek (1356–1949)": "Vierzehn mikrohistorische Geschichten und Forschungsfunde direkt aus den Handschriftenquellen und der Landtafel (1356–1949)",
    "Patnáct mikrohistorických příběhů a badatelských objevů přímo z rukopisných pramenů a zemských desek (1356–1949)": "Fünfzehn mikrohistorische Geschichten und Forschungsfunde direkt aus den Handschriftenquellen und der Landtafel (1356–1949)",
    "Šestnáct mikrohistorických příběhů a badatelských objevů přímo z rukopisných pramenů a zemských desek (1356–1949)": "Sechzehn mikrohistorische Geschichten und Forschungsfunde direkt aus den Handschriftenquellen und der Landtafel (1356–1949)",
    "Sedmnáct mikrohistorických příběhů a badatelských objevů přímo z rukopisných pramenů a zemských desek (1356–2006)": "Siebzehn mikrohistorische Geschichten und Forschungsfunde direkt aus den Handschriftenquellen und der Landtafel (1356–2006)",
    "Osmnáct mikrohistorických příběhů a badatelských objevů přímo z rukopisných pramenů a zemských desek (1356–2006)": "Achtzehn mikrohistorische Geschichten und Forschungsfunde direkt aus den Handschriftenquellen und der Landtafel (1356–2006)",
    "📄 Plný text v Markdownu ↗": "📄 Volltext in Markdown ↗",
    "Podklad:": "Basiskarte:",
    "🗺️ OpenStreetMap": "🗺️ OpenStreetMap",
    "🛰️ Letecká (Ortofoto)": "🛰️ Luftbild (Orthofoto)",
    "🏔️ Topografická": "🏔️ Topographisch",
    "📜 Historická mapa:": "📜 Historische Karte:",
    "📜 Stabilní katastr 1834 (Císařský otisk – zástavba)": "📜 Stabiler Kataster 1834 (Kaiserlicher Pflichtabdruck)",
    "⚔️ I. vojenské mapování (1764–1783 Josefské)": "⚔️ I. Landesaufnahme (1764–1783 Josephinisch)",
    "⚔️ II. vojenské mapování (1838 Františkovo)": "⚔️ II. Landesaufnahme (1838 Franziszeisch)",
    "⚔️ III. vojenské mapování (1874 – 1:25 000)": "⚔️ III. Landesaufnahme (1874 – 1:25 000)",
    "🇨🇿 Topografická mapa ČSR (1937 – 1:25 000)": "🇨🇿 Topographische Karte ČSR (1937 – 1:25 000)",
    "🗺️ Topografická mapa S-1952 (1952)": "🗺️ Topographische Karte S-1952 (1952)",
    "Průhlednost:": "Transparenz:",
    "Dnes": "Heute",
    "Historie": "Historisch",
    "Vedle sebe": "Nebeneinander",
    "Kalibrace": "Kalibrierung",
    "Zobrazení na mapě:": "Kartenebenen:",
    "🟨 Zvýraznění lokalit (Dlouhomilov & Benkov – žlutý podkres)": "🟨 Orte hervorheben (Lomigsdorf & Benke – gelbe Umrandung)",
    "📍 Značky stavení (čp.)": "📍 Hausnummern (Nr.)",
    "💡 Autentické archivní mapy bez rušivých překryvů (1716–1983)": "💡 Authentische Archivkarten ohne Überlagerung (1716–1983)",
    "Kalibrace historické mapy": "Kalibrierung der historischen Karte",
    "Přizpůsobení přeložení vrstvy na OpenStreetMap": "Anpassung der Kartenüberlagerung auf OpenStreetMap",
    "🗺️ Kalibrovaná mapa:": "🗺️ Kalibrierte Karte:",
    "📜 Císařský otisk (1834)": "📜 Pflichtabdruck (1834)",
    "⚔️ I. vojenské mapování (1764)": "⚔️ I. Landesaufnahme (1764)",
    "⚔️ II. vojenské mapování (1838)": "⚔️ II. Landesaufnahme (1838)",
    "⚔️ III. vojenské mapování (1874)": "⚔️ III. Landesaufnahme (1874)",
    "🇨🇿 Topografická mapa ČSR (1937)": "🇨🇿 Topographische Karte ČSR (1937)",
    "🎯 Prvek ke kalibraci:": "🎯 Kalibrierungselement:",
    "🗺️ Celá mapa": "🗺️ Gesamte Karte",
    "🟨 Dlouhomilov": "🟨 Lomigsdorf (Dlouhomilov)",
    "🟨 Benkov": "🟨 Benke (Benkov)",
    "🟨 Medelské": "🟨 Dreihofen (Medelské)",
    "Identické budovy (GCP):": "Identische Passpunkte (GCP):",
    "Vyberte budovu (např. kostel, statek čp. 29) a klikněte na její polohu v historické mapě. Algoritmus dopočítá posun, měřítko i rotaci.": "Wählen Sie ein Gebäude (z. B. Kirche Nr. 1, Hof Nr. 29) und klicken Sie auf dessen Position in der historischen Karte. Der Algorithmus berechnet Verschiebung, Maßstab und Drehung.",
    "Výběr známé budovy / bodu:": "Auswahl eines bekannten Gebäudes / Punktes:",
    "Kostel Všech svatých (čp. 1)": "Allerheiligenkirche (Nr. 1)",
    "Statek čp. 29 (u Dvořáků)": "Bauerngut Nr. 29 (Dvořák)",
    "Bývalá rychta (čp. 7)": "Ehemaliges Erbgericht (Nr. 7)",
    "Usedlost čp. 5": "Bauerngut Nr. 5",
    "Usedlost s bránou (čp. 24)": "Hof mit Toreinfahrt (Nr. 24)",
    "Usedlost ve svahu (čp. 43)": "Anwesen am Hang (Nr. 43)",
    "✏️ Vlastní bod (klikem do levé mapy)": "✏️ Eigener Punkt (Klick in linke Karte)",
    "Zaměřit": "Zentrieren",
    "Zatím nezadány žádné body": "Noch keine Passpunkte gesetzt",
    "Povolit rotaci": "Drehung erlauben",
    "⚡ Spočítat a přiložit": "⚡ Berechnen & Anpassen",
    "Průhlednost vrstvy:": "Ebenentransparenz:",
    "0% (podklad OSM)": "0 % (OSM-Basis)",
    "50% (srovnání)": "50 % (Vergleich)",
    "100% (plná)": "100 % (Voll)",
    "Posun mapy:": "Kartenverschiebung:",
    "Krok:": "Schritt:",
    "Přetahovat myší": "Mit Maus ziehen",
    "Měřítko (velikost):": "Maßstab (Größe):",
    "Rotace (natočení):": "Drehung (Winkel):",
    "Doladění směru silnic a údolí vůči ortofotu": "Feinabstimmung der Straßen- und Talrichtung zum Luftbild",
    "Uložit do prohlížeče": "Im Browser speichern",
    "Reset": "Zurücksetzen",
    "Kód": "Code",
    "Zpětná vazba": "Feedback",
    "Všechny domy": "Alle Häuser",
    "Pouze památky": "Nur Denkmale",
    "Mapa údolí": "Talkarte",
    "🏡 Seznam domů ↓": "🏡 Häuserliste ↓",
    "📋 Detail čp. ↓": "📋 Hausdetail ↓",
    "Dnešní mapa (OSM / Ortofoto)": "Heutige Karte (OSM / Luftbild)",
    "Historická mapa": "Historische Karte",
    "✕ Zavřít": "✕ Schließen",
    "Dnešní podklad & Značky domů": "Heutige Karte & Hausnummern",
    "Památkově chráněné objekty v Dlouhomilově (VPZ 2350)": "Denkmalgeschützte Objekte in Lomigsdorf / Dlouhomilov (VPZ 2350)",
    "Wikipedie ↗": "Wikipedia ↗",
    "Kliknutím zobrazíte kartu památky výše:": "Klicken Sie, um das Denkmal oben anzuzeigen:",
    "🏛️ čp. 29 (U Dvořáků)": "🏛️ Nr. 29 (Hof Dvořák)",
    "🏛️ čp. 7 (Bývalá rychta)": "🏛️ Nr. 7 (Erbgericht)",
    "🏛️ čp. 5 (Usedlost)": "🏛️ Nr. 5 (Bauerngut)",
    "🏛️ čp. 24 (Usedlost s bránou)": "🏛️ Nr. 24 (Hof mit Tor)",
    "🏛️ čp. 43 (Usedlost ve svahu)": "🏛️ Nr. 43 (Anwesen am Hang)",
    "⛪ čp. 1 (Kostel Všech svatých)": "⛪ Nr. 1 (Allerheiligenkirche)",
    "Genealogie & Sčítání lidu (1857–1921) & Matriky N/O/Z": "Genealogie, Volkszählungen (1857–1921) & Pfarrmatriken G/T/S",
    "Obyvatelé a rodopis obce Dlouhomilov": "Einwohner & Familienforschung von Lomigsdorf (Dlouhomilov)",
    "Kompletní genealogická databáze": "Vollständige genealogische Datenbank mit",
    "ze sčítacích operátů (1857–1921),": "aus den Volkszählungsbögen (1857–1921),",
    "držitelů gruntů": "Hofbesitzern",
    "a podrobných": "und detaillierten",
    "životních osudů rodů": "Familienschicksalen",
    "s ověřenými vazbami na matriky a archivní scany Zemského archivu v Opavě.": "mit geprüften Verknüpfungen zu den Matriken und Archivscans des Landesarchivs Troppau (ZAO Opava).",
    "Sjednocené osoby": "Zusammengeführte Personen",
    "Demografie obce": "Ortsdemographie",
    "Spojování osob": "Personenverknüpfung",
    "Clustrovací aplikace ↗": "Clustering-App ↗",
    "Potřebujete vysvětlit dobové pojmy (výměnkář, podruh, rusticus) nebo jak najít další předky v ZAO Opava?": "Möchten Sie historische Begriffe (Ausgedinger, Inwohner, Rustikalist) nachschlagen oder weitere Vorfahren im ZAO Opava finden?",
    "Slovníček pojmů ➔": "Historisches Glossar ➔",
    "Archivní průvodce (ZAO, SOkA) ➔": "Archivführer (ZAO, SOkA) ➔",
    "Kategorie:": "Kategorie:",
    "Rychlý výběr rodu:": "Schnellauswahl Geschlecht:",
    "Všichni": "Alle",
    "Dvořák (čp. 3, 22, 29, 46)": "Dvořák (Nr. 3, 22, 29, 46)",
    "Šafář (čp. 10, Medelské)": "Šafář (Nr. 10, Dreihofen)",
    "Jílek / Gilek (čp. 6, 10)": "Jílek / Gilek (Nr. 6, 10)",
    "Krobot (čp. 7, 24, 46)": "Krobot (Nr. 7, 24, 46)",
    "Berka (čp. 46, 110)": "Berka (Nr. 46, 110)",
    "Minář (Medelské čp. 1, 2)": "Minář (Dreihofen Nr. 1, 2)",
    "Merta (čp. 7, 43)": "Merta (Nr. 7, 43)",
    "Pavlík (čp. 5, 7, 46)": "Pavlík (Nr. 5, 7, 46)",
    "Resetovat všechny filtry": "Alle Filter zurücksetzen",
    "Všechny roky sčítání": "Alle Zählungsjahre",
    "Kliknutím na jméno osoby otevřete biografický profil s matrikami N/O/Z, kliknutím na stavení zobrazíte polohu na mapě": "Klick auf den Namen öffnet das biographische Profil mit Matriken G/T/S, Klick auf das Haus zeigt die Lage auf der Karte",
    "Jméno a příjmení": "Vor- und Familienname",
    "Kategorie / Postavení": "Kategorie / Stand",
    "Rok sčítání": "Zählungsjahr",
    "Stavení": "Haus / Hof",
    "Vztah v rodině": "Verhältnis im Haushalt",
    "Narození": "Geburt",
    "Povolání / Role": "Beruf / Stellung",
    "Poznámka / Kontext": "Anmerkung / Kontext",
    "Archivní scan": "Archivscan",
    "Sjednocená osoba": "Zusammengeführte Person",
    "Narození / Věk": "Geburt / Alter",
    "Propojené zápisy v pramenech (Sčítání lidu / Matriky)": "Verknüpfte Quelleneinträge (Volkszählung / Matriken)",
    "Akce": "Aktion",
    "4. Sekce • Rozšířená badatelna & Kartografie (Zobrazení na vyžádání)": "4. Säule • Erweiterte Forschung & Kartographie (Ansicht auf Abruf)",
    "🧭 Badatelna, Demografické analýzy & Atlas historických map": "🧭 Forschungszentrum, Demographische Analysen & Historischer Kartenatlas",
    "Pro lepší přehlednost stránky se podrobné analytické a metodické moduly otevírají jednotlivě podle vašeho výběru:": "Für eine bessere Übersichtlichkeit öffnen sich die detaillierten Analyse- und Methodenmodule einzeln nach Ihrer Auswahl:",
    "🔽 Sbalit": "🔽 Einklappen",
    "Historická demografie & Sociální skladba obce": "Historische Demographie & Sozialstruktur der Gemeinde",
    "1857–1921 • 28 stavení • 469 sčítacích záznamů": "1857–1921 • 28 Anwesen • 469 Volkszählungseinträge",
    "Demografická a majetková analýza domácností": "Demographische und soziale Analyse der Haushalte",
    "Odkud přicházeli obyvatelé Dlouhomilova a Medelského, kdo byl z největší dálky, jak se v čase vyvíjel věkový profil populace a jak bohaté byly zdejší selské a domkářské usedlosti. Všechna data jsou dynamicky počítána ze zpracovaných operátů a katastru.": "Woher die Bewohner von Lomigsdorf (Dlouhomilov), Dreihofen (Medelské) und Benke (Benkov) stammten, wer aus der größten Entfernung kam, wie sich die Alterspyramide entwickelte und wie wohlhabend die Bauern- und Häuslerwirtschaften waren. Alle Werte werden dynamisch aus den Zählbögen berechnet.",
    "Zobrazit vše": "Alles anzeigen",
    "Věková pyramida": "Alterspyramide",
    "Původ & Dálka": "Herkunft & Distanz",
    "Bohatství & Dobytek": "Besitz & Viehbestand",
    "1. Jak se měnil histogram obyvatel podle věku v čase?": "1. Wie veränderte sich der Altersaufbau der Bevölkerung im Laufe der Zeit?",
    "Vyberte konkrétní rok sčítání lidu nebo prozkoumejte celkový souhrnný profil:": "Wählen Sie ein Volkszählungsjahr oder betrachten Sie das gesamte historische Profil:",
    "Věková skupina": "Altersgruppe",
    "Podíl z populace a počet osob": "Bevölkerungsanteil & Personenanzahl",
    "2. Odkud byli obyvatelé Dlouhomilova a kdo přišel z největší dálky?": "2. Woher stammten die Einwohner und wer kam aus der größten Ferne?",
    "Analýza migračních okruhů, sňatkové mobility a dálkového přistěhovalectví podle vzdušné vzdálenosti (km).": "Analyse der Migrationskreise, Heiratsmobilität und Fernwanderung nach Luftliniendistanz (km).",
    "Žebříček rekordmanů: Obyvatelé z největší vzdálenosti (> 60 km)": "Entfernungsrekorde: Einwohner aus der größten Distanz (> 60 km)",
    "Vzdušnou čarou z Dlouhomilova (49.9069° N, 16.9896° E)": "Luftlinie ab Lomigsdorf / Dlouhomilov (49.9069° N, 16.9896° E)",
    "Přehled všech 40+ obcí původu v sčítacích operátech": "Übersicht aller 40+ Herkunftsgemeinden in den Volkszählungsbögen",
    "Obec / Místo narození": "Gemeinde / Geburtsort",
    "Vzdálenost": "Entfernung",
    "Počet osob": "Personen",
    "Migrační pásmo": "Migrationszone",
    "Zastoupená stavení & Příklad osob": "Vertretene Höfe & Beispielpersonen",
    "3. Jak bohaté domácnosti byly? (Majetková stratifikace a chov zvířat)": "3. Wie wohlhabend waren die Haushalte? (Besitzschichtung & Viehbestand)",
    "Rozdělení do 4 majetkových tříd podle tažného dobytka (koně), stavu skotu, čeledi a zaměstnání v šumperských textilkách.": "Einteilung in 4 Besitzklassen nach Zugpferden, Rinderbestand, Gesinde und Arbeit in den Mährisch Schönberger Textilfabriken.",
    "• Kliknutím na stavení otevřete jeho detail a mapu": "• Klick auf ein Anwesen öffnet dessen Detailansicht und Karte",
    "Stavení a rod": "Anwesen & Geschlecht",
    "Majetková třída": "Besitzklasse",
    "Byty (1921)": "Wohn. (1921)",
    "Osob (1921)": "Pers. (1921)",
    "Čeleď": "Gesinde",
    "Výměnek": "Ausgedinge",
    "Zaměstnání / Textil": "Beruf / Textil",
    "Chovaný dobytek v operátech": "Erfasster Viehbestand in den Zählbögen",
    "Kartografický atlas obce (1716–1983)": "Kartographischer Atlas der Gemeinde (1716–1983)",
    "Historické mapy Dlouhomilova & Benkova": "Historische Karten von Lomigsdorf (Dlouhomilov), Dreihofen & Benke",
    "Unikátní badatelská sbírka 16 historických map zachycujících obec od barokních rukopisů (1716), přes tereziánská vojenská mapování, Stabilní katastr (1834) až po poválečné velkoměřítkové Státní mapy 1 : 5 000. Kliknutím můžete mapy přiblížit nebo aktivovat na interaktivní mapě.": "Einzigartige Sammlung von 16 historischen Karten von barocken Drucken (1716) über die Theresianische Landesaufnahme und den Stabilen Kataster (1834) bis zu topographischen Karten der Nachkriegszeit. Klicken Sie zum Vergrößern oder zum Aktivieren auf der interaktiven Karte.",
    "Všechny (16)": "Alle Karten (16)",
    "⚔️ Vojenská": "⚔️ Militärkarten",
    "📐 Katastrální": "📐 Katasterkarten",
    "🗺️ Regionální": "🗺️ Regionalkarten",
    "Archivní metodika & Prameny & Slovníček": "Archivmethodik, Quellen & Glossar",
    "Badatelský & Archivní průvodce pro Dlouhomilov": "Forschungs- & Archivführer für Lomigsdorf, Dreihofen & Benke",
    "Přehled historického správního zařazení obce, digitálních archivních portálů (ZAO Opava, SOkA Šumperk, ČÚZK, NPÚ), návod na čtení starého písma (kurentu) a interaktivní slovníček pojmů s přímým napojením do sčítání lidu.": "Übersicht der historischen Verwaltungs- und Pfarrzugehörigkeit, der digitalen Archivportale (ZAO Opava, SOkA Šumperk, ČÚZK, NPÚ), Anleitung zum Lesen der deutschen Kurrentschrift und interaktives Glossar mit direkter Verknüpfung zur Volkszählung.",
    "Textový průvodce ↗": "Textleitfaden ↗",
    "Historické správní a církevní zařazení Dlouhomilova & Benkova": "Historische Verwaltungs- und Pfarrzugehörigkeit von Lomigsdorf & Benke",
    "Kde bádat: Přehled archivních institucí a portálů": "Wo forschen: Übersicht der Archive und Online-Portale",
    "Jak číst staré písmo (Německý novogotický kurent)": "Alte Handschriften lesen (Deutsche Kurrentschrift)",
    "Písmo matrik do r. 1918": "Schrift der Matriken bis 1918",
    "Většina záznamů v matrikách a gruntovních knihách do poloviny 19. století je psána německy novogotickým kurzívním písmem (kurentem). Zde jsou tři nejčastější úskalí při čtení:": "Die meisten Einträge in Kirchenbüchern und Grundbüchern bis Ende des 19. Jahrhunderts sind in deutscher Kurrentschrift verfasst. Hier sind die drei häufigsten Lesehürden:",
    "Slovníček dobových pojmů & sociálních rolí": "Glossar historischer Begriffe & sozialer Stände",
    "Přehled historických rolí (Bauer, výměnkář, podruh, čeleď) s možností okamžitého vyhledání osob v sčítání lidu.": "Übersicht der historischen sozialen Rollen (Bauer, Ausgedinger, Inwohner, Gesinde) mit direkter Suchfunktion im Einwohnerregister.",
    "Historická Wiki obce Dlouhomilov, osady Medelské & obce Benkov": "Historisches Wiki von Lomigsdorf (Dlouhomilov), Dreihofen (Medelské) & Benke (Benkov)",
    "Znak obce (REKOS č. 37/2004):": "Gemeindewappen (REKOS Nr. 37/2004):",
    "Ve stříbrno-červeně polceném štítě dva zkřížené vztyčené rýče mezi dvěma pětilistými jabloňovými květy se zlatými středy, vše opačných barev, přeložené doleva obráceným zlatým krojidlem.": "Im silbern-rot gespaltenen Schild zwei schräggekreuzte aufrechte Spaten zwischen zwei fünfblättrigen Apfelblüten mit goldenen Butzen in verwechselten Farben, belegt mit einem nach links gewendeten goldenen Pflugmesser.",
    "Prameny: ZAO Opava • SOkA Šumperk • ÚAZK ČÚZK • NPÚ": "Quellen: ZAO Opava • SOkA Šumperk • ÚAZK ČÚZK • NPÚ",
    "Licence: Creative Commons BY-NC-SA 4.0": "Lizenz: Creative Commons BY-NC-SA 4.0",
    "Historická Wiki obce Dlouhomilov & Benkov": "Historisches Wiki von Lomigsdorf (Dlouhomilov) & Benke (Benkov)",
    "Nekomerční badatelská a vzdělávací aplikace. Založeno na historických mapách z Mapové sbírky PřF UK a VÚGTK (projekt NAKI DF11P01OVV021 / Chartae Antiquae), fondech ÚAZK ČÚZK (Stabilní katastr 1834, SMO-5), sčítacích operátech a matrikách Zemského archivu v Opavě (ZAO) a Památkovém katalogu NPÚ.": "Nichtkommerzielle Forschungs- und Bildungsanwendung. Basierend auf historischen Karten der Kartensammlung der Karls-Universität & VÚGTK (Projekt NAKI DF11P01OVV021 / Chartae Antiquae), Beständen des ÚAZK ČÚZK (Stabiler Kataster 1834), Volkszählungsbögen und Matriken des Landesarchivs Troppau (ZAO Opava) sowie dem Denkmalkatalog des NPÚ.",
    "Licence & Citace pramenů (ČSN ISO 690)": "Lizenz & Quellenzitate (ISO 690)",
    "Zpětná vazba na GitHubu": "Feedback auf GitHub",
    "🌐 Portál Chartae Antiquae ↗": "🌐 Portal Chartae Antiquae ↗",
    "🏛️ Geoportál ÚAZK ČÚZK ↗": "🏛️ Geoportal ÚAZK ČÚZK ↗",
    "Jméno osoby": "Name der Person",
    "🏡 Držitel gruntu": "🏡 Hofbesitzer",
    "Rolník na vlastním gruntě": "Bauer auf eigenem Hof",
    "Rodinné vazby:": "Familienbeziehungen:",
    "Otec:": "Vater:",
    "Matka:": "Mutter:",
    "Manžel / Manželka:": "Ehepartner:",
    "Děti:": "Kinder:",
    "Příslušnost ke stavení:": "Zugehöriges Anwesen:",
    "Usedlost:": "Anwesen:",
    "🏡 Zobrazit stavení na mapě ↗": "🏡 Anwesen auf der Karte zeigen ↗",
    "Připojit další zápis": "Weiteren Eintrag verknüpfen",
    "Zde jsou sloučeny všechny archivní výskyty této osoby napříč sčítáními lidu a gruntovními zápisy (včetně pravopisných variant jako Dworák / Dvořák):": "Hier sind alle archivalischen Nennungen dieser Person über alle Volkszählungen und Grundbucheinträge hinweg zusammengeführt (einschließlich Schreibvarianten wie Dworák / Dvořák):",
    "Životní dráha osoby v archivních pramenech": "Lebensweg der Person in den Archivquellen",
    "Zavřít profil": "Profil schließen",
    "Archivní dokument": "Archivdokument",
    "Zemský archiv v Opavě / SOkA Šumperk": "Landesarchiv Troppau (Opava) / SOkA Mährisch Schönberg",
    "🏛️ Původní archiv": "🏛️ Originalarchiv",
    "🔍 Celý obrázek": "🔍 Vollbild",
    "Umístění:": "Dateipfad:",
    "Kolečkem myši nebo tlačítky lupy můžete dokument libovolně přibližovat": "Mit dem Mausrad oder den Lupentasten können Sie das Dokument beliebig vergrößern",
    "Přidat nové stavení do Wiki": "Neues Anwesen zum Wiki hinzufügen",
    "Číslo popisné (čp.) *": "Hausnummer (Nr.) *",
    "Místní název / Jméno rodu": "Hofname / Familienname",
    "Typ stavení": "Gebäudetyp",
    "🏛️ Nemovitá kulturní památka ČR": "🏛️ Kulturdenkmal der Tschechischen Republik",
    "GPS Šířka (Lat)": "GPS-Breitengrad (Lat)",
    "GPS Délka (Lng)": "GPS-Längengrad (Lng)",
    "Popis a stavební historie": "Beschreibung & Baugeschichte",
    "Zrušit": "Abbrechen",
    "Uložit stavení": "Anwesen speichern",
    "Rozumím, zavřít": "Verstanden, schließen",
    "Zavřít okno": "Fenster schließen",
    // Dynamic app.js strings
    "Nemovitá kulturní památka České republiky": "Unbewegliches Kulturdenkmal der Tschechischen Republik",
    "Památkový katalog NPÚ ↗": "Denkmalkatalog NPÚ ↗",
    "Katastrální parcela (1834)": "Bauparzelle (1834)",
    "Pozemkové parcely": "Grundparzellen",
    "Příběh & Držitelé": "Geschichte & Besitzer",
    "Sčítání lidu": "Volkszählung",
    "Listiny & Scany": "Urkunden & Scans",
    "Vše pod sebou": "Alles untereinander",
    "Popis a historie usedlosti": "Beschreibung und Geschichte des Anwesens",
    "Stabilní katastr (1834)": "Stabiler Kataster (1834)",
    "Rodinná historie, matriky & paměti stavení": "Familiengeschichte, Matriken & Hauschronik",
    "Časová osa držby gruntu a matričních událostí": "Zeitleiste der Hofbesitzer und Matrikeneinträge",
    "Chované hospodářské zvířectvo": "Gehaltener Viehbestand auf dem Hof",
    "Koně": "Pferde",
    "Skot / Krávy": "Rinder / Kühe",
    "Prasata": "Schweine",
    "Kozy / Ovce": "Ziegen / Schafe",
    "Drůbež": "Geflügel",
    "Úly": "Bienenstöcke",
    "Dochované listiny, mapy a přepisy pramenů": "Erhaltene Urkunden, Karten und Quellentranskriptionen",
    "Otevřít velký scan": "Großen Scan öffnen",
    "Přepis / Citace z pramene:": "Transkription / Quellenzitat:",
    "Zobrazit scan sčítacího archu": "Scan des Zählbogens anzeigen",
    "Sčítací operát pro tento rok nebyl dosud přepsán.": "Der Volkszählungsbogen für dieses Jahr wurde noch nicht transkribiert.",
    "Zvětšit v prohlížeči": "Im Viewer vergrößern",
    "Detail scanu": "Scan-Detail",
    "Přesný zdroj ↗": "Originalquelle ↗",
    "Na mapě": "Auf Karte",
    "Archivní záznam a parametry:": "Archiveintrag & Parameter:",
    "Dobový zápis názvů na mapě:": "Historische Ortsnamen auf der Karte:",
    "Klíčové prvky na mapě:": "Schlüsselelemente auf der Karte:",
    "Komunální znak a heraldika obce Dlouhomilov & Benkov": "Gemeindewappen und Heraldik von Lomigsdorf (Dlouhomilov) & Benke (Benkov)",
    "🏡 Obec & osada:": "🏡 Gemeinde & Weiler:",
    "🏛️ Farní příslušnost:": "🏛️ Pfarrzugehörigkeit:",
    "Matriky N/O/Z uloženy v ZAO Opava": "Matriken G/T/S im Landesarchiv Troppau (ZAO Opava)",
    "⚖️ Správní & soudní okres:": "⚖️ Politischer & Gerichtsbezirk:",
    "🏛️ Památková zóna & archivy:": "🏛️ Denkmalzone & Archive:",
    "✔ Ověřeno: Stabilní katastr 1834 + Sčítání 1857–1921 + Matriky 1786–1949": "✔ Geprüft: Stabiler Kataster 1834 + Volkszählungen 1857–1921 + Matriken 1786–1949",
    "Stavení (čp.)": "Anwesen (Nr.)",
    "Stavební parcela (1834 → 1910)": "Bauparzelle (1834 → 1910)",
    "Kontinuita čísla": "Nummernkontinuität",
    "Posloupnost rodů (17.–20. stol.)": "Geschlechterfolge (17.–20. Jh.)",
    "Matriky (1889–1949)": "Matriken (1889–1949)",
    "📑 Použité fondy, signatury & inventáře:": "📑 Verwendete Bestände, Signaturen & Inventare:",
    "Jak postupovat v badatelně:": "Vorgehensweise bei der Archivforschung:",
    "Archivní fond": "Archivbestand",
    "Otevřít portál ↗": "Portal öffnen ↗",
    "Nenalezen žádný odpovídající výraz.": "Kein passender Begriff gefunden.",
    "Hledat tyto osoby v sčítání lidu ➔": "Diese Personen in der Volkszählung suchen ➔",
    "🔍 Zvětšit obraz": "🔍 Bild vergrößern",
    "🔍 Zvětšit ilustraci": "🔍 Illustration vergrößern",
    "Pramen:": "Quelle:",
    "Související v aplikaci:": "Verknüpft in der Anwendung:",
    "📄 Dokument .md ↗": "📄 Markdown-Dok. ↗",
    "Doplnit / opravit dům": "Ergänzung / Korrektur vorschlagen",
    "Historická Wiki obce Dlouhomilov & Benkov – Genealogie, Sčítání lidu a Stabilní katastr": "Historisches Wiki von Lomigsdorf (Dlouhomilov) & Benke (Benkov) – Genealogie, Volkszählung & Stabiler Kataster",
    "S/J: 0 m, V/Z: 0 m": "N/S: 0 m, O/W: 0 m",
    "Písmeno": "Der Buchstabe",
    "má nad sebou vždy rozlišovací oblouček (": "trägt oben stets einen Unterscheidungsbogen (",
    "jsou dvě úzké svislé čárky těsně u sebe,": "besteht aus zwei engen senkrechten Strichen,",
    "má ostré lomení.": "hat eine scharfe Brechung.",
    "má zřetelnou tečku, zatímco": "hat einen deutlichen Punkt, während",
    "nikoliv. U dvojhlásky": "keinen hat. Beim Diphthong",
    "pozor na záměnu s": "ist auf Verwechslung zu achten mit",
    "Dlouhé písmeno": "Das lange",
    "(s příčnou čárkou) a": "(mit Querstrich) und",
    "mají horní i dolní smyčku, liší se vázáním tahu a dříkem.": "besitzen Ober- und Unterschleife und unterscheiden sich durch Schaft und Bindung.",
    "Sjednocené zápisy ze sčítání lidu & matrik (": "Zusammengeführte Einträge aus Volkszählung & Matriken (",
    "Nástroje pro georeferencování historických map": "Werkzeuge zur Georeferenzierung historischer Karten",
    "Jak propojit naskenované staré plány s dnešními mapovými podklady": "Wie man gescannte historische Pläne mit heutigen Kartengrundlagen verknüpft",
    "1. MapWarper (Online bez instalace)": "1. MapWarper (Online ohne Installation)",
    "Otevřít MapWarper.net ↗": "MapWarper.net öffnen ↗",
    "Nejpopulárnější webový nástroj pro badatele a genealogy. Umožňuje nahrát libovolný JPEG/PNG a naklikat společné body:": "Beliebtes Online-Werkzeug für Forscher und Genealogen zum Hochladen von JPEG/PNG-Karten und Setzen von Passpunkten:",
    "Nahrajte naskenovanou mapu (záložka": "Laden Sie die gescannte Karte hoch (Reiter",
    "V záložce": "Im Reiter",
    "klikněte v levém okně na starou mapu a v pravém okně na tentýž bod v OpenStreetMap.": "klicken Sie links in die alte Karte und rechts auf denselben Punkt in OpenStreetMap.",
    "Zvolte kontrolní body:": "Wählen Sie Passpunkte:",
    "Kostel Všech svatých": "Allerheiligenkirche",
    "Klikněte na": "Klicken Sie auf",
    "a v záložce": "und im Reiter",
    "získáte hotový WMS odkaz nebo GeoTIFF.": "erhalten Sie einen fertigen WMS-Link oder ein GeoTIFF.",
    "2. QGIS – Desktopový Georeferencer (Profesionální přesnost)": "2. QGIS – Desktop-Georeferenzierer (Professionelle Genauigkeit)",
    "Stáhnout QGIS zdarma ↗": "QGIS kostenlos herunterladen ↗",
    "Open-source geografický informační systém se špičkovým vestavěným nástrojem:": "Open-Source-Geoinformationssystem mit integriertem Georeferenzierungswerkzeug:",
    "V horním menu otevřete": "Öffnen Sie im oberen Menü",
    "Rastr → Georeferencer": "Raster → Georeferenzierer",
    "Otevřete soubor": "Öffnen Sie die Datei",
    "(List IV Dlouhomilov).": "(Blatt IV Lomigsdorf / Dlouhomilov).",
    "Klikněte na nástroj": "Klicken Sie auf das Werkzeug",
    "Přidat bod": "Punkt hinzufügen",
    "a zadejte souřadnice nebo klikněte na mapové plátno (s načtenou vrstvou OpenStreetMap / Ortofoto ČÚZK).": "und geben Sie Koordinaten ein oder klicken Sie in das Kartenfenster (mit OpenStreetMap / ČÚZK-Orthofoto).",
    "Pro zachování tvaru bez deformace zvolte": "Zur Formerhaltung ohne Verzerrung wählen Sie",
    ". Pro lokální přizpůsobení každého stavení zvolte": ". Für die lokale Anpassung jedes Hofes wählen Sie",
    "Rychlý online nástroj pro vizuální prolínání a přímé porovnání starých a nových map přes interaktivní lupu.": "Schnelles Online-Werkzeug zum visuellen Überblenden und Vergleichen alter und neuer Karten.",
    "Navštívit Georeferencer.com ↗": "Georeferencer.com besuchen ↗",
    "4. Mapy.cz & ČÚZK WMS": "4. Mapy.cz & ČÚZK WMS",
    "Vrstvy II. i III. vojenského mapování a letecké snímkování z 50. let přímo integrované přes národní geoportály.": "Ebenen der II. und III. Landesaufnahme sowie Luftbilder der 1950er Jahre direkt über die nationalen Geoportale.",
    "Zobrazit Dlouhomilov na Mapy.cz ↗": "Lomigsdorf (Dlouhomilov) auf Mapy.cz anzeigen ↗",
    "Autorská práva, licence a citace pramenů": "Urheberrecht, Lizenzen und Quellenzitate",
    "Právní rámec, ochrana děl a metodika citování pro badatelské a vzdělávací účely": "Rechtlicher Rahmen, Schutzstatus und Zitierweise für Forschungs- und Bildungszwecke",
    "1. Autorskoprávní status historických map (Public Domain / Volná díla)": "1. Urheberrechtlicher Status historischer Karten (Gemeinfreiheit / Public Domain)",
    "volnými díly (Public Domain)": "gemeinfreie Werke (Public Domain)",
    "a nepodléhají autorskoprávní ochraně původních tvůrců.": "und unterliegen keinem Urheberrechtsschutz der ursprünglichen Schöpfer mehr.",
    "2. Digitalizace: Mapová sbírka PřF UK & VÚGTK (Projekt NAKI)": "2. Digitalisierung: Kartensammlung der Karls-Universität & VÚGTK (Projekt NAKI)",
    "Většina digitalizovaných historických mapových listů byla zpřístupněna prostřednictvím portálu": "Die meisten digitalisierten historischen Kartenblätter wurden zugänglich gemacht über das Portal",
    "Digitalizaci provedl Výzkumný ústav geodetický, topografický a kartografický, v.v.i. (VÚGTK) a Mapová sbírka PřF UK v rámci projektu Ministerstva kultury ČR:": "Digitalisiert durch das Forschungsinstitut für Geodäsie, Topographie und Kartographie (VÚGTK) und die Kartensammlung der Karls-Universität im Rahmen des NAKI-Projekts des Kulturministeriums der ČSR:",
    "\"Kartografické zdroje jako kulturní dědictví. Výzkum nových metodik a technologií digitalizace, zpřístupnění a využití starých map, plánů, atlasů a glóbů.\"": "\"Kartographische Quellen als Kulturerbe. Erforschung neuer Methoden und Technologien zur Digitalisierung, Erschließung und Nutzung alter Karten, Pläne, Atlanten und Globen.\"",
    "(Identifikační kód projektu:": "(Projekt-ID:",
    "Spolupracující paměťové instituce (vlastníci originálů):": "Beteiligte Gedächtnisinstitutionen (Eigentümer der Originale):",
    "Historický ústav AV ČR, Národní archiv ČR, Národní knihovna ČR, Fakulta životního prostředí UJEP, Vlastivědné muzeum v Olomouci, Muzeum Brněnska, Moravská zemská knihovna.": "Historisches Institut der Akademie der Wissenschaften (AV ČR), Nationalarchiv, Nationalbibliothek, UJEP, Heimatkundliches Museum Olmütz, Mährische Landesbibliothek.",
    "3. Katastrální a geodetické podklady ČÚZK / ÚAZK": "3. Kataster- und Geodäsieunterlagen des ČÚZK / ÚAZK",
    "Císařské povinné otisky stabilního katastru (1834), Státní mapy 1 : 5 000 (SMO-5) a vektorová data katastru nemovitostí (WMS) jsou poskytována Českým úřadem zeměměřickým a katastrálním (ČÚZK) a Ústředním archivem zeměměřictví a katastru (ÚAZK) v režimu otevřených dat a veřejných archivních fondů.": "Die Kaiserlichen Pflichtabdrucke des Stabilen Katasters (1834), die Staatskarten 1 : 5 000 (SMO-5) und die Kataster-Vektordaten (WMS) werden vom Tschechischen Vermessungs- und Katasteramt (ČÚZK) und dem Zentralarchiv für Landvermessung und Kataster (ÚAZK) bereitgestellt.",
    "4. Doporučený tvar citace dle ČSN ISO 690 pro badatele": "4. Empfohlene Zitierweise nach ISO 690 für Forscher",
    "I. vojenské mapování:": "I. Landesaufnahme:",
    "I. vojenské mapování (1764–1783): Morava.": "I. Militärische Landesaufnahme (1764–1783): Mähren.",
    "[1 : 28 800]. Uloženo: Österreichisches Staatsarchiv / FŽP UJEP. Digitalizoval VÚGTK / PřF UK (NAKI DF11P01OVV021). Dostupné z: https://chartae-antiquae.cz/cs/maps/12689/": "[1 : 28 800]. Aufbewahrt: Österreichisches Staatsarchiv / UJEP. Digitalisiert von VÚGTK / Karls-Univ. (NAKI DF11P01OVV021). Verfügbar unter: https://chartae-antiquae.cz/cs/maps/12689/",
    "Stabilní katastr:": "Stabiler Kataster:",
    "Císařské povinné otisky stabilního katastru 1 : 2 880 – Morava a Slezsko: k. ú. Lomigsdorf (Dlouhomilov).": "Kaiserliche Pflichtabdrucke des Stabilen Katasters 1 : 2 880 – Mähren und Schlesien: KG Lomigsdorf (Dlouhomilov).",
    "1834, sign. MOR102618340. Ústřední archiv zeměměřictví a katastru (ÚAZK ČÚZK).": "1834, Sign. MOR102618340. Zentralarchiv für Landvermessung und Kataster (ÚAZK ČÚZK).",
    "Spojování a ztotožňování osob (Record Linkage)": "Personenverknüpfung und Identitätsabgleich (Record Linkage)",
    "Propojení různých zápisů téže osoby napříč sčítacími operáty (1857–1921) a matrikami (např.": "Verknüpfung verschiedener Einträge derselben Person über die Volkszählungen (1857–1921) und Matriken hinweg (z. B.",
    "Automatické návrhy (": "Automatische Vorschläge (",
    "Ruční spojení": "Manuelle Verknüpfung",
    "Správa spojených osob (": "Verwaltung verknüpfter Personen (",
    "💡 Inteligentní párovací algoritmus prohledal databázi sčítání lidu": "💡 Intelligenter Abgleichalgorithmus hat die Volkszählungsdatenbank durchsucht",
    "Vyhledává záznamy se shodným jménem (vč. fonetických a historických variant": "Sucht Einträge mit gleichem Namen (inkl. phonetischer und historischer Varianten",
    "), shodným rokem narození a číslem stavení.": "), gleichem Geburtsjahr und gleicher Hausnummer.",
    "Propojit vše doporučené": "Alle empfohlenen verknüpfen",
    "Vyberte dva archivní záznamy nebo přiřaďte záznam k existující osobě:": "Wählen Sie zwei Archiveinträge oder ordnen Sie einen Eintrag einer bestehenden Person zu:",
    "Můžete ručně spojit libovolný záznam ze sčítání lidu s existujícím biografickým profilem nebo vytvořit novou sjednocenou osobu.": "Sie können jeden Volkszählungseintrag manuell mit einem biographischen Profil verknüpfen oder eine neue zusammengeführte Person anlegen.",
    "Záznam ze sčítání lidu (A)": "Volkszählungseintrag (A)",
    "Vyberte záznam...": "Eintrag wählen...",
    "Cílová osoba nebo záznam (B)": "Zielperson oder Eintrag (B)",
    "Existující osoba": "Bestehende Person",
    "Jiný sčítací záznam": "Anderer Zählungseintrag",
    "Vyberte cíl...": "Ziel wählen...",
    "Spojit tyto záznamy do jedné osoby": "Diese Einträge zu einer Person verbinden",
    "Přehled všech sjednocených osob v databázi": "Übersicht aller zusammengeführten Personen in der Datenbank",
    "Změny jsou bezpečně uloženy ve vašem prohlížeči (LocalStorage) a lze je kdykoliv exportovat.": "Änderungen werden sicher lokal im Browser (LocalStorage) gespeichert und können jederzeit exportiert werden.",
    "Obnovit výchozí": "Standard wiederherstellen",
    "Počet propojených zápisů": "Anzahl verknüpfter Einträge",
    "Zahrnuté zápisy": "Enthaltene Einträge",
    "Znak obce Dlouhomilov & Benkov (kliknutím zobrazíte erb a heraldický popis)": "Wappen der Gemeinde Lomigsdorf & Benke (Klick zeigt Wappenbeschreibung)",
    "Zobrazit všechny podsekce příběhu pod sebou": "Alle Teilbereiche der Ortschronik untereinander anzeigen",
    "Vytisknout komiks nebo uložit jako PDF brožuru (4 strany A4)": "Bilderchronik drucken oder als 4-seitige A4-PDF-Broschüre speichern",
    "Vytisknout komiks nebo uložit jako PDF brožuru (5 stran A4)": "Bilderchronik drucken oder als 5-seitige A4-PDF-Broschüre speichern",
    "Otevřít interaktivní panel pro ladění polohy, měřítka a rotace mapy": "Interaktives Panel zur Feinabstimmung von Position, Maßstab und Drehung öffnen",
    "Návod pro online i offline georeferencování (MapWarper, QGIS, Mapy.cz)": "Anleitung zur Online- und Offline-Georeferenzierung (MapWarper, QGIS, Mapy.cz)",
    "Jemný průhledný žlutý podkres intravilánu obcí Dlouhomilov a Benkov": "Dezente gelbe Hervorhebung der Ortslagen Lomigsdorf (Dlouhomilov) und Benke (Benkov)",
    "Zobrazit či skrýt čísla popisná stavení pro úplně čistý pohled na mapu": "Hausnummern ein- oder ausblenden für eine freie Kartenansicht",
    "Minimalizovat / Rozbalit panel": "Panel minimieren / aufklappen",
    "Návod ke kalibraci": "Kalibrierungsanleitung",
    "Zavřít kalibrační panel": "Kalibrierungspanel schließen",
    "Kalibrovat celou mapovou vrstvu (posun, měřítko, rotace)": "Gesamte Kartenebene kalibrieren (Verschiebung, Maßstab, Drehung)",
    "Kalibrovat označující čtverec Dlouhomilova na této mapě": "Markierungsrahmen von Lomigsdorf (Dlouhomilov) kalibrieren",
    "Kalibrovat označující čtverec Benkova na této mapě": "Markierungsrahmen von Benke (Benkov) kalibrieren",
    "Kalibrovat označující čtverec Medelského na této mapě": "Markierungsrahmen von Dreihofen (Medelské) kalibrieren",
    "Vymazat všechny body": "Alle Passpunkte löschen",
    "Posun na sever": "Nach Norden verschieben",
    "Posun na západ": "Nach Westen verschieben",
    "Posun na východ": "Nach Osten verschieben",
    "Posun na jih": "Nach Süden verschieben",
    "Otočit vlevo o 0.1°": "Um 0,1° nach links drehen",
    "Otočit vpravo o 0.1°": "Um 0,1° nach rechts drehen",
    "Vrátit na původní kalibraci": "Auf ursprüngliche Kalibrierung zurücksetzen",
    "Zkopírovat souřadnicový bounding box": "Koordinaten-Bounding-Box kopieren",
    "Zpětná vazba k mapě nebo stavením na GitHubu": "Feedback zu Karte oder Höfen auf GitHub",
    "Hledat číslo popisné, rod, památku...": "Hausnummer, Familienname, Denkmal suchen...",
    "Přejít na demografickou a majetkovou analýzu obce": "Zur demographischen und sozialen Analyse der Gemeinde wechseln",
    "Nástroj pro ztotožňování a propojování zápisů téže osoby": "Werkzeug zum Abgleichen und Verknüpfen von Einträgen derselben Person",
    "Otevřít samostatnou clustrovací aplikaci jednotlivých osob (Entity Resolution, K-Means, Síť vazeb a migrací)": "Eigenständige Personen-Clustering-App öffnen (Entity Resolution, K-Means, Verwandtschafts- & Migrationsnetz)",
    "Vymazat hledání": "Suche löschen",
    "Skrýt rozbalenou badatelskou sekci": "Ausgeklapptes Forschungsmodul schließen",
    "Hledat dům, majitele, řemeslo nebo textil...": "Haus, Besitzer, Handwerk oder Textil suchen...",
    "Navrhnout mapu, opravu datace nebo zpětnou vazbu": "Karte, Datierungskorrektur oder Feedback vorschlagen",
    "Otevřít kompletního průvodce v Markdownu": "Vollständigen Leitfaden in Markdown öffnen",
    "Navrhnout doplnění archivního pramene nebo metodiky": "Ergänzung einer Archivquelle oder Methodik vorschlagen",
    "Přiblížit (+)": "Vergrößern (+)",
    "Oddálit (-)": "Verkleinern (-)",
    "Původní velikost (100%)": "Originalgröße (100 %)",
    "Otevřít digitální badatelnu / původní archiv": "Digitales Archiv / Originalquelle öffnen",
    "Nahlásit chybu v přepisu nebo doplnit údaje k tomuto dokumentu na GitHubu": "Transkriptionsfehler melden oder Angaben zu diesem Dokument auf GitHub ergänzen",
    "Např. 32": "Z. B. 32",
    "Např. Grunt u Nováků": "Z. B. Bauerngut Novák",
    "Např. Selský grunt / Chalupa": "Z. B. Bauerngut / Häusel",
    "Základní popis stavení, poloha v obci...": "Grundbeschreibung des Anwesens, Lage im Ort...",
    "Nahlásit chybu, doplnění nebo připomínku na GitHubu": "Fehler, Ergänzung oder Hinweis auf GitHub melden",
    "Stáhnout spojení ve formátu JSON": "Verknüpfungen als JSON herunterladen",
    "Vrátit všechna spojení na původní výchozí stav": "Alle Verknüpfungen auf den Ausgangszustand zurücksetzen",
    "Nahlásit chybu, doplnění nebo zpětnou vazbu k této stránce/pozici na GitHubu (s automatickou lokalizací)": "Fehler, Ergänzung oder Feedback zu diesem Abschnitt auf GitHub melden",
    "Zastoupená stavení": "Vertretene Anwesen",
    "Chovaný dobytek": "Viehbestand",
    "Rozcestník": "Übersicht",
    "Úvod": "Start",
    "Úvod & Aktuality": "Start & Aktuelles",
    "Aktuality": "Aktuelles",
    "Reference": "Referenzen",
    "Reference & Prameny": "Referenzen & Quellen",
    "Novinky & aktuality projektu": "Neuigkeiten & Projektfortschritt",
    "Nejnovější aktualizace výzkumu": "Neueste Forschungs-Updates",
    "Katalog pramenů, literatury a citační návod": "Quellenkatalog, Fachliteratur & Zitierhinweise",
    "Katalog pramenů & literatury": "Quellen- & Literaturkatalog",
    "Jak citovat & Licence": "Zitierweise & Lizenz",
    "Badatelský průvodce & Slovníček": "Forschungsleitfaden & Glossar",
    "Zobrazit vše": "Alle anzeigen",
    "Atlas map (16)": "Kartenatlas (16)",
    "Atlas historických map (16)": "Historischer Kartenatlas (16)",
    "Interaktivní mapa & Stavení": "Interaktive Karte & Höfe",
    "Otevřít sekci ↗": "Bereich öffnen ↗",
    "Otevřít modul →": "Modul öffnen →",
    "Zpět na rozcestník": "Zurück zur Übersicht",
    "Hledat pramen, archiv, autora, signaturu...": "Quelle, Archiv, Autor, Signatur suchen...",
    "Hlavní rozcestník archivu, aktuality výzkumu a přehled dostupných modulů": "Zentrale Übersicht, Forschungsneuigkeiten und Modulverzeichnis",
    "Kronika údolí v 10 kapitolách, 11 zajímavostí z matrik a tisknutelný 12panelový komiks": "Talchronik in 10 Kapiteln, 11 Fundstücke & druckbarer 12-Felder-Comic",
    "Kronika údolí v 11 kapitolách, 13 zajímavostí z matrik a tisknutelný 12panelový komiks": "Talchronik in 11 Kapiteln, 13 Fundstücke & druckbarer 12-Felder-Comic",
    "Kronika údolí v 11 kapitolách, 14 zajímavostí z matrik a tisknutelný 12panelový komiks": "Talchronik in 11 Kapiteln, 14 Fundstücke & druckbarer 12-Felder-Comic",
    "Kronika údolí v 11 kapitolách, 15 zajímavostí z matrik a tisknutelný 12panelový komiks": "Talchronik in 11 Kapiteln, 15 Fundstücke & druckbarer 12-Felder-Comic",
    "Kronika údolí v 11 kapitolách, 16 zajímavostí z matrik a tisknutelný 12panelový komiks": "Talchronik in 11 Kapiteln, 16 Fundstücke & druckbarer 12-Felder-Comic",
    "Kronika údolí v 11 kapitolách, 17 zajímavostí z matrik a literatury a 12panelový komiks": "Talchronik in 11 Kapiteln, 17 Archiv- & Literaturfunde & 12-Felder-Comic",
    "Kronika údolí v 11 kapitolách, 18 zajímavostí z matrik a literatury a 12panelový komiks": "Talchronik in 11 Kapiteln, 18 Archiv- & Literaturfunde & 12-Felder-Comic",
    "Kronika údolí v 11 kapitolách, 18 zajímavostí z matrik a literatury a 14panelový komiks": "Talchronik in 11 Kapiteln, 18 Archiv- & Literaturfunde & 14-Felder-Comic",
    "1. Pilíř • Kronika údolí (1269–1949)": "1. Säule • Talchronik (1269–1949)",
    "11 kapitol": "11 Kapitel",
    "Zajímavosti (13)": "Entdeckungen (13)",
    "Zajímavosti (14)": "Entdeckungen (14)",
    "Zajímavosti (15)": "Entdeckungen (15)",
    "Zajímavosti (16)": "Entdeckungen (16)",
    "Zajímavosti (17)": "Entdeckungen (17)",
    "Zajímavosti (18)": "Entdeckungen (18)",
    "Interaktivní mapa (1764–1983), Side-by-Side kalibrace a karty všech 157 stavení": "Interaktive Karte (1764–1983), Side-by-Side-Kalibrierung & 157 Hofkarten",
    "Stránkovaný rejstřík 1 350 obyvatel (1857–1921), sjednocené osoby a 11 biografií": "Seitenweises Register von 1.350 Einwohnern, verknüpfte Personen & 11 Biografien",
    "Stránkovaný rejstřík 3 449 obyvatel (1857–1921), sjednocené osoby a 11 biografií": "Seitenweises Register von 3.449 Einwohnern, verknüpfte Personen & 11 Biografien",
    "Hledat mezi 3 449 obyvateli": "Unter 3.449 Einwohnern suchen",
    "3 449 záznamů": "3.449 Einträge",
    "Benkov 1910 (275)": "Benke 1910 (275)",
    "1275–2026 • ČSÚ": "1275–2026 • ČSÚ",
    "Demografie (1275–2026: Domy, katastry & ČSÚ) & Majetkové vrstvy": "Demografie (1275–2026: Häuser, Kataster & ČSÚ) & Sozialstruktur",
    "Demografická a majetková analýza obce (1275–2026)": "Demografische und Besitzstandsanalyse der Gemeinde (1275–2026)",
    "Historická křivka domů a obyvatel (1275–2026), statistiky ČSÚ, věkové pyramidy a migrace": "Historische Häuser- und Bevölkerungskurve (1275–2026), ČSÚ-Statistiken, Alterspyramiden & Migration",
    "Statistiky ČSÚ (1869–2026), věkové pyramidy, migrace rodišť a textilní bělidla": "ČSÚ-Statistiken (1869–2026), Altersstruktur, Herkunft & Textilbleichen",
    "Archivní fondy (ZAO, MZA, SOkA), kartografie, literatura (ČSN ISO 690) a metodika": "Archivbestände (ZAO, MZA, SOkA), Kartografie, Literatur & Forschungsleitfaden",
    "Archivní prameny & literatura": "Archivquellen & Fachliteratur",
    "Kompletní seznam archivních fondů, map, statistik a literatury": "Vollständiger Katalog der Archivbestände, Karten, Statistik & Literatur"
  }
};


// Part 3: i18nData.terms, translateProseAndUi, Data Overlay & DOM Observer Engine

i18nData.terms = {
  en: {
    "Venkovská usedlost / Dům": "Country Homestead / House",
    "Venkovská usedlost": "Country Homestead",
    "Selský grunt": "Peasant Farmstead",
    "Selská usedlost": "Peasant Farmstead",
    "Velká selská usedlost": "Large Peasant Farmstead",
    "Velká venkovská usedlost s byty a výměnkem": "Large Country Homestead with Apartments & Dower House",
    "Chalupa / Domkářské stavení": "Cottage / Smallholder House",
    "Domkářské stavení": "Cottager House",
    "Tradiční domkářské stavení": "Traditional Cottager House",
    "Domkářská stavení s více byty": "Multi-Apartment Cottager Houses",
    "Domkářské stavení / řemeslnická živnost": "Cottager House / Craft Workshop",
    "Domkářská usedlost / chalupa": "Cottager Homestead / Cottage",
    "Domkářská usedlost / živnost": "Cottager Homestead / Craft Trade",
    "Tradiční zemědělská usedlost": "Traditional Agricultural Homestead",
    "Zemědělská usedlost": "Agricultural Homestead",
    "Rolnická usedlost / malorolnické stavení": "Farming Homestead / Smallholding",
    "Venkovské stavení a hospodářství": "Country House & Smallholding",
    "Obytný dům": "Residential House",
    "Tradiční venkovská chalupa": "Traditional Country Cottage",
    "Tradiční venkovská chalupa / tkalcovské stavení": "Traditional Country & Weaver's Cottage",
    "Venkovská chalupa (osada Medelské)": "Country Cottage (Hamlet of Medelské)",
    "Venkovská chalupa (osada Medelské – Pančava)": "Country Cottage (Hamlet of Medelské – Pančava)",
    "Venkovská usedlost (osada Medelské)": "Country Homestead (Hamlet of Medelské)",
    "Venkovská chalupa a živnost (osada Medelské)": "Country Cottage & Trade (Hamlet of Medelské)",
    "Venkovská chalupa": "Country Cottage",
    "Venkovská chalupa / řemeslnická živnost": "Country Cottage / Craft Workshop",
    "Venkovská chalupa a živnost": "Country Cottage & Trade",
    "Venkovská usedlost / obchod": "Country Homestead / Shop",
    "Venkovský dům": "Country House",
    "Venkovský dům / živnost": "Country House / Trade",
    "Venkovský dům / obchod smíšeným zbožím": "Country House / General Store",
    "Venkovský dům / Obecní dům": "Country House / Municipal House",
    "Hostinec a řeznictví": "Village Inn & Butcher's Shop",
    "Hostinec / venkovská usedlost": "Village Inn / Country Homestead",
    "Kovárna a venkovský dům": "Village Smithy & House",
    "Veřejná budova / škola a pošta": "Public Building / School & Post Office",
    "Fara / Památkově hodnotný objekt v památkové zóně": "Catholic Rectory / Heritage Building in Monument Zone",
    "Památkově hodnotný objekt v památkové zóně": "Heritage Building in the Village Monument Zone",
    "Archivní záznam mimo číslované domy": "Archival Record Outside Numbered Houses",
    "Venkovská usedlost (kulturní památka)": "Protected Country Homestead (Cultural Monument)",
    "Bývalá dědičná rychta (kulturní památka)": "Former Hereditary Magistrate's Estate (Cultural Monument)",
    "Farní kostel (kulturní památka)": "Parish Church (Cultural Monument)",
    "Kulturní památka ČR (ÚSKP)": "Cultural Monument of the Czech Republic (ÚSKP)",
    "Sakrální památka": "Sacral Monument",
    "Kaple": "Chapel",
    "Škola": "School",
    "Kovárna": "Smithy",
    "Fara": "Catholic Rectory",
    "Usedlost v osadě Medelské": "Homestead in the Hamlet of Medelské",
    "Usedlost v Benkově (historický katastr 1834)": "Homestead in Benkov (1834 Historical Cadastre)",
    "Usedlost": "Homestead"
  },
  de: {
    "Venkovská usedlost / Dům": "Landwirtschaftliches Anwesen / Haus",
    "Venkovská usedlost": "Landwirtschaftliches Anwesen",
    "Selský grunt": "Bauerngut (Erbhof)",
    "Selská usedlost": "Bauerngut",
    "Velká selská usedlost": "Großes Bauerngut",
    "Velká venkovská usedlost s byty a výměnkem": "Großes Anwesen mit Wohnungen und Ausgedinge",
    "Chalupa / Domkářské stavení": "Häusel / Häusleranwesen",
    "Domkářské stavení": "Häusleranwesen",
    "Tradiční domkářské stavení": "Traditionelles Häusleranwesen",
    "Domkářská stavení s více byty": "Häusleranwesen mit mehreren Wohnungen",
    "Domkářské stavení / řemeslnická živnost": "Häusleranwesen / Handwerksbetrieb",
    "Domkářská usedlost / chalupa": "Häusleranwesen / Häusel",
    "Domkářská usedlost / živnost": "Häusleranwesen / Gewerbe",
    "Tradiční zemědělská usedlost": "Traditionelles landwirtschaftliches Anwesen",
    "Zemědělská usedlost": "Landwirtschaftliches Anwesen",
    "Rolnická usedlost / malorolnické stavení": "Bauerngut / Kleinbauernanwesen",
    "Venkovské stavení a hospodářství": "Landhaus und Wirtschaft",
    "Obytný dům": "Wohnhaus",
    "Tradiční venkovská chalupa": "Traditionelles Landhäusel",
    "Tradiční venkovská chalupa / tkalcovské stavení": "Traditionelles Häusel / Weberhaus",
    "Venkovská chalupa (osada Medelské)": "Häusel (Weiler Dreihofen / Medelské)",
    "Venkovská chalupa (osada Medelské – Pančava)": "Häusel (Weiler Dreihofen / Medelské – Pantschawa)",
    "Venkovská usedlost (osada Medelské)": "Anwesen (Weiler Dreihofen / Medelské)",
    "Venkovská chalupa a živnost (osada Medelské)": "Häusel & Gewerbe (Weiler Dreihofen / Medelské)",
    "Venkovská chalupa": "Häusel",
    "Venkovská chalupa / řemeslnická živnost": "Häusel / Handwerksbetrieb",
    "Venkovská chalupa a živnost": "Häusel und Gewerbe",
    "Venkovská usedlost / obchod": "Anwesen / Kaufmannsladen",
    "Venkovský dům": "Landhaus",
    "Venkovský dům / živnost": "Landhaus / Gewerbe",
    "Venkovský dům / obchod smíšeným zbožím": "Landhaus / Gemischtwarenhandlung",
    "Venkovský dům / Obecní dům": "Landhaus / Gemeindehaus",
    "Hostinec a řeznictví": "Gasthaus und Fleischhauerei",
    "Hostinec / venkovská usedlost": "Gasthaus / Anwesen",
    "Kovárna a venkovský dům": "Dorfschmiede und Wohnhaus",
    "Veřejná budova / škola a pošta": "Öffentliches Gebäude / Schule und Postamt",
    "Fara / Památkově hodnotný objekt v památkové zóně": "Katholischer Pfarrhof / Denkmalwertes Objekt",
    "Památkově hodnotný objekt v památkové zóně": "Denkmalwertes Objekt in der Denkmalzone",
    "Archivní záznam mimo číslované domy": "Archiveintrag außerhalb der Hausnummernreihe",
    "Venkovská usedlost (kulturní památka)": "Denkmalgeschütztes Bauerngut (Kulturdenkmal)",
    "Bývalá dědičná rychta (kulturní památka)": "Ehemaliges Erbgericht (Kulturdenkmal)",
    "Farní kostel (kulturní památka)": "Pfarrkirche (Kulturdenkmal)",
    "Kulturní památka ČR (ÚSKP)": "Kulturdenkmal der Tschechischen Republik (ÚSKP)",
    "Sakrální památka": "Sakraldenkmal",
    "Kaple": "Kapelle",
    "Škola": "Schule",
    "Kovárna": "Dorfschmiede",
    "Fara": "Katholischer Pfarrhof",
    "Usedlost v osadě Medelské": "Anwesen im Weiler Dreihofen (Medelské)",
    "Usedlost v Benkově (historický katastr 1834)": "Anwesen in Benke / Benkov (Historischer Kataster 1834)",
    "Usedlost": "Anwesen"
  }
};

// Phrase replacement rules for dynamic UI, Demography, Census, and Map annotations
const REGEX_REPLACEMENTS_EN = [
  // Dynamic counters & buttons
  [/^Obyvatelé & Rodopis \((\d+)\)$/i, "Inhabitants & Genealogy ($1)"],
  [/^👥 Obyvatelé & Rodopis \((\d+)\)$/i, "👥 Inhabitants & Genealogy ($1)"],
  [/^(\d+) historických zápisů$/i, "$1 historical records"],
  [/^Záznamy \((\d+)\)$/i, "Records ($1)"],
  [/^Biografické profily \((\d+)\)$/i, "Biographical Profiles ($1)"],
  [/^Zobrazeno:\s*(\d+)\s*osob$/i, "Showing: $1 people"],
  [/^Zobrazeno:\s*(\d+)\s*obcí$/i, "Showing: $1 municipalities"],
  [/^Zobrazeno:\s*(\d+)\s*stavení$/i, "Showing: $1 homesteads"],
  [/^Zobrazeno:\s*(\d+)\s*sjednocených osob\s*\((\d+)\s*zápisů\)$/i, "Showing: $1 unified people ($2 records)"],
  [/^Všechna stavení \((\d+) záznamů\)$/i, "All Homesteads ($1 records)"],
  [/^Všichni \((\d+)\)$/i, "All ($1)"],
  [/^Držitelé gruntů \((\d+)\)$/i, "Estate Holders ($1)"],
  [/^Výměnkáři \((\d+)\)$/i, "Retirees ($1)"],
  [/^Čeleď \((\d+)\)$/i, "Farm Servants ($1)"],
  [/^Řemeslníci \((\d+)\)$/i, "Craftsmen ($1)"],
  [/^Podruzi \((\d+)\)$/i, "Lodgers ($1)"],
  [/^Rodinní příslušníci \((\d+)\)$/i, "Family Members ($1)"],
  [/^Učitelé & Duchovní \((\d+)\)$/i, "Teachers & Clergy ($1)"],
  [/^Dlouhomilov \((\d+)\)$/i, "Dlouhomilov ($1)"],
  [/^Osada Medelské \((\d+)\)$/i, "Hamlet of Medelské ($1)"],
  [/^Benkov \((\d+)\)$/i, "Benkov ($1)"],
  [/^Vše \((\d+)\)$/i, "All ($1)"],
  [/^Pouze památky \((\d+)\)$/i, "Monuments Only ($1)"],
  [/^Jen památky \((\d+)\)$/i, "Monuments Only ($1)"],
  [/^📍 Body:\s*(\d+)$/i, "📍 Points: $1"],
  // Story & Comic reader chrome (including Roman numerals with dots)
  [/Výběr kapitoly příběhu \(I\.–([IVX]+)\.\):/g, "Select Story Chapter (I–$1):"],
  [/Zobrazeno všech (\d+) kapitol pod sebou/g, "Showing all $1 chapters continuously"],
  [/Čtení po kapitolách \(aktivní Kapitola ([0-9IVX.]+)\)/g, "Chapter-by-chapter reader (active Chapter $1)"],
  [/Přepnout na čtečku po 1 kapitole/g, "Switch to single-chapter reader"],
  [/Rozbalit všech (\d+) kapitol pod sebou/g, "Expand all $1 chapters continuously"],
  [/Čtečka kapitol \((\d+) z (\d+)\)/g, "Chapter Reader ($1 of $2)"],
  [/Kapitola ([0-9IVX.]+) \/ ([0-9IVX.]+)/g, "Chapter $1 / $2"],
  [/^Kap\.\s*([0-9IVX.]+)$/g, "Ch. $1"],
  [/Předchozí:\s*([0-9IVX.]+)/g, "Previous: $1"],
  [/Další kapitola:\s*([0-9IVX.]+)/g, "Next Chapter: $1"],
  [/📖 Zobrazit všech (\d+) kapitol/g, "📖 Show All $1 Chapters"],
  [/✨ Přejít na Zajímavosti z matrik \((\d+)\)/g, "✨ Go to Archival Highlights ($1)"],
  [/STRANA\s+([0-9IVX.]+)\s*\/\s*([0-9IVX.]+)/g, "SHEET $1 / $2"],
  [/^STRANA\s+([0-9IVX.]+)$/g, "SHEET $1"],
  [/Období\s+/g, "Period "],
  [/Kronika Dlouhomilova • List\s+([0-9IVX.]+)/g, "Chronicle of Dlouhomilov • Sheet $1"],
  [/← Předchozí strana \(([^)]+)\)/g, "← Previous Sheet ($1)"],
  [/📖 Zobrazit všechny strany \(I\.–I?V\.\)/g, "📖 Show All Sheets (I–IV)"],
  [/Další strana komiksu \(([^)]+)\) →/g, "Next Comic Sheet ($1) →"],
  // Demography KPIs, age bins, cohorts, insights, origins, distance records & wealth
  [/Zpracovaná stavení/g, "Processed Homesteads"],
  [/(\d+)\s*domů/g, "$1 houses"],
  [/V roce 1921:/g, "In 1921:"],
  [/(\d+)\s*bytů/g, "$1 apartments"],
  [/průměr\s*([\d.]+)\s*os\.\/dům/g, "avg. $1 pers./house"],
  [/([\d.]+)\s*os\.\/dům/g, "$1 pers./house"],
  [/([\d.]+)\s*os\.\/byt/g, "$1 pers./apt"],
  [/Původ obyvatel/g, "Inhabitant Origins"],
  [/([\d.]+)\s*%\s*rodáků/g, "$1% local natives"],
  [/Věkový průměr \(1921\)/g, "Average Age (1921)"],
  [/Stárnutí obce:/g, "Village aging:"],
  [/v r\.\s*(\d+)\s*byl průměr/g, "in $1 the average was"],
  [/medián/g, "median"],
  [/Textil Oberleithner/g, "Oberleithner Textile Works"],
  [/(\d+)\s*osob/g, "$1 people"],
  [/V\s*(\d+)\s*ze\s*(\d+)\s*domů žili běliči, tkalci a textilní dělníci šumperských továren\./g, "In $1 of $2 houses lived bleachers, weavers, and textile workers of Šumperk factories."],
  [/Všechna sčítání \(1857–1921\)/g, "All Censuses (1857–1921)"],
  [/Sčítání\s+(\d+)/g, "$1 Census"],
  [/sčítání\s+(\d+)/g, "$1 census"],
  [/Záznamů\s*\(([^)]+)\)/g, "Records ($1)"],
  [/osob v operátech/g, "people in census sheets"],
  [/záznamů celkem/g, "total records"],
  [/Průměrný věk/g, "Average Age"],
  [/aritmetický průměr/g, "arithmetic mean"],
  [/Medián věku/g, "Median Age"],
  [/střední hodnota/g, "median value"],
  [/Děti \(0–9 let\)/g, "Children (0–9 yrs)"],
  [/(\d+)\s*dětí/g, "$1 children"],
  [/Senioři \(60\+\)/g, "Seniors (60+)"],
  [/(\d+)\s*výměnkářů/g, "$1 retirees"],
  [/Nejstarší obyvatel/g, "Oldest Resident"],
  [/Kojenci a mladší děti/g, "Infants & younger children"],
  [/Školáci, učni a mladá čeleď/g, "Schoolchildren, apprentices & young servants"],
  [/Mladí dospělí, svobodná čeleď/g, "Young adults & unmarried servants"],
  [/Hospodáři a mladé rodiny/g, "Farmers & young families"],
  [/Zkušení hospodáři a hospodyně/g, "Experienced farmers & housewives"],
  [/Zralí hospodáři na statcích/g, "Mature estate holders"],
  [/Výměnkáři a starší hospodáři/g, "Retirees & older farmers"],
  [/Vysoký věk a pamětníci/g, "Advanced age & village elders"],
  [/Děti a školáci \(0–14 let\)/g, "Children & SchoolYouth (0–14 yrs)"],
  [/Produktivní věk \(15–59 let\)/g, "Working Age (15–59 yrs)"],
  [/Výměnek a stáří \(60\+ let\)/g, "Retirement & Old Age (60+ yrs)"],
  [/Demografická transformace \(1857 → 1921\):/g, "Demographic Transformation (1857 → 1921):"],
  [/Zatímco v polovině 19\. století tvořily děti a mládež do 19 let téměř polovinu obyvatel selských gruntů, v roce 1921 se věková pyramida výrazně posouvá směrem ke střednímu a vyššímu věku\./g, "While in the mid-19th century children and youth under 19 made up nearly half the population of peasant estates, by 1921 the age pyramid shifted markedly toward middle and older age."],
  [/Průměrný věk v obci vzrostl z/g, "The average age in the municipality rose from"],
  [/na/g, "to"],
  [/v roce 1921\./g, "in 1921."],
  [/Instituce výměnku a dlouhověkost:/g, "The Dower Institution (Výměnek) & Longevity:"],
  [/Vysoký podíl seniorů nad 60 let/g, "The high share of seniors over 60"],
  [/odráží demografickou stabilitu i dopady 1\. světové války\. Nejstarším doloženým pamětníkem byla 93letá výměnkářka/g, "reflects both demographic stability and the impact of WWI. The oldest documented resident was 93-year-old retiree"],
  [/v Rovensku/g, "in Rovensko"],
  [/na čp\.\s*(\d+)\s*a\s*87letá/g, "at No. $1 and 87-year-old"],
  [/na čp\.\s*(\d+)/g, "at No. $1"],
  [/Všechna místa původu \((\d+)\+\)/g, "All Birthplaces ($1+)"],
  [/Pouze místní \(Dlouhomilov, Medelské, Benkov\)/g, "Local Only (Dlouhomilov, Medelské, Benkov)"],
  [/Sousedství \(do 7,5 km\)/g, "Neighborhood (up to 7.5 km)"],
  [/Zábřežsko & Šumpersko \(7,5–18 km\)/g, "Zábřeh & Šumperk Area (7.5–18 km)"],
  [/Regionální Morava & Slezsko \(18–60 km\)/g, "Regional Moravia & Silesia (18–60 km)"],
  [/Dálková migrace \(> 60 km\)/g, "Long-Distance Migration (> 60 km)"],
  [/0\. Místní rodáci \(Dlouhomilov, Medelské, Benkov\)/g, "0. Local Natives (Dlouhomilov, Medelské, Benkov)"],
  [/1\. Bezprostřední sousedství \(do 7,5 km\)/g, "1. Immediate Neighborhood (up to 7.5 km)"],
  [/2\. Širší Zábřežsko & Šumpersko \(7,5–18 km\)/g, "2. Wider Zábřeh & Šumperk Area (7.5–18 km)"],
  [/3\. Regionální Morava & Slezsko \(18–60 km\)/g, "3. Regional Moravia & Silesia (18–60 km)"],
  [/4\. Dálková migrace \(> 60 km\)/g, "4. Long-Distance Migration (> 60 km)"],
  [/Obecně Morava/g, "Moravia (General)"],
  [/z celkem/g, "of"],
  [/zápisů/g, "records"],
  // Distant records in Demography
  [/Oděsa \(Ukrajina \/ Rusko\)/g, "Odesa (Ukraine / Russian Empire)"],
  [/Černomořský přístav/g, "Black Sea Port"],
  [/Služebná děvečka při rolnictví/g, "Agricultural Maidservant"],
  [/Narozená v černomořském přístavu Oděsa v Ruském impériu\. Po 1\. světové válce doložena jako zemědělská děvečka na velkém selském gruntě Václava Mertlíka v Benkově\./g, "Born in the Black Sea port of Odesa in the Russian Empire. After WWI documented as an agricultural maidservant on the large peasant estate of Václav Mertlík in Benkov No. 12."],
  [/Rachov \(Rahovo, Podkarpatská Rus\)/g, "Rakhiv (Subcarpathian Rus')"],
  [/Karpatská Rus \(dnes Ukrajina\)/g, "Carpathian Ruthenia (today Ukraine)"],
  [/Silniční dělník s rodinou/g, "Road Worker with Family"],
  [/Rodák z horského Rachova na Podkarpatské Rusi \(tehdejší součást nově vzniklé ČSR\)\. Žil v podnájmu s rodinou v Benkově čp\. 21 jako silniční dělník\./g, "Native of mountain Rakhiv in Subcarpathian Rus' (then part of newly formed Czechoslovakia). Lived as a subtenant with his family at Benkov No. 21 working as a road laborer."],
  [/Donawitz u Leobenu \(Rakousko\)/g, "Donawitz near Leoben (Austria)"],
  [/Štýrsko \(Steiermark\)/g, "Styria (Steiermark)"],
  [/Schovanka \/ válečný sirotek/g, "Foster Daughter / War Orphan"],
  [/Narozená ve štýrském hutním středisku Donawitz; v r\. 1921 evidována jako 18letá schovanka v domácnosti železničního zřízence Johanna Rottera\./g, "Born in the Styrian ironworks center of Donawitz; recorded in 1921 as an 18-year-old foster daughter in the household of railway employee Johann Rotter at Benkov No. 20."],
  [/Chlumčany, okres Louny/g, "Chlumčany, Louny District"],
  [/Severozápadní Čechy/g, "North-West Bohemia"],
  [/Dcera tkadlce a podruha/g, "Daughter of Weaver & Lodger"],
  [/Rodina tkadlce Hynka Churavého\/Churaného pracovala v severozápadních Čechách u Loun a kolem roku 1890 se vrátila na Moravu na statek čp\. 29\./g, "The family of weaver Hynek Churavý worked in North-West Bohemia near Louny and around 1890 returned to Moravia as lodgers at Farmstead No. 29."],
  [/Perotín \(Beroun\)/g, "Perotín (Beroun District)"],
  [/Střední Čechy \(Mladoboleslavsko\)/g, "Central Bohemia (Mladá Boleslav)"],
  [/Střední Čechy \(Polabí\)/g, "Central Bohemia (Elbe Valley)"],
  [/Střední Čechy/g, "Central Bohemia"],
  [/Podnájemníci \/ majetníci v Bytě č\. 2/g, "Subtenants in Apartment No. 2"],
  [/Manželský pár ze středočeského Perotína u Berouna žijící v podnájmu na selském gruntě Karla Dvořáka při sčítání 1869\./g, "Married couple from Central Bohemian Perotín near Beroun living as subtenants at Karel Dvořák's Farmstead No. 29 during the 1869 census."],
  [/Hostivice u Prahy/g, "Hostivice near Prague"],
  [/Bratr mladého hospodáře rychty/g, "Brother of the Young Magistrate"],
  [/Desetiletý školák, bratr rychtáře Arnošta Merty\. Otec Jan Merta řídil panské velkostatky v Čechách i na Moravě\./g, "Ten-year-old schoolboy, brother of magistrate Arnošt Merta. Their father Jan Merta managed manor estates in Bohemia and Moravia."],
  [/Vídeň \(Rakousko\)/g, "Vienna (Austria)"],
  [/Dolní Rakousy \/ Vídeň/g, "Lower Austria / Vienna"],
  [/Syn samostatného krejčovského mistra/g, "Son of Master Tailor"],
  [/Osmiletý žák narozený v císařské Vídni, kde rodina žila před válkou \(s domovskou příslušností do Rakouska\)\. Po válce se usadili na čp\. 23\./g, "Eight-year-old schoolboy born in imperial Vienna, where the family lived before WWI. After the war they settled at Dlouhomilov No. 23."],
  [/Manželka rolníka Gustava Körnera/g, "Wife of Farmer Gustav Körner"],
  [/Rodilá Středočeška z Mladoboleslavska provdaná za rolníka Gustava Körnera na gruntě v Benkově čp\. 14\./g, "Native of Central Bohemia married to farmer Gustav Körner on the farmstead at Benkov No. 14."],
  [/Rosina u Žiliny \(Slovensko\)/g, "Rosina near Žilina (Slovakia)"],
  [/Severozápadní Slovensko/g, "North-West Slovakia"],
  [/Čeledín při rolnictví/g, "Agricultural Farmhand"],
  [/Slovenský zemědělský dělník ze Žilinska sloužící u rolníka Josefa Körnera na gruntě v Benkově čp\. 6\./g, "Slovak agricultural worker from the Žilina region serving farmer Josef Körner at Benkov No. 6."],
  [/Manželka sedláka Karla Dvořáka/g, "Wife of Farmer Karel Dvořák"],
  [/Nevěsta ze středních Čech, švagrová právníka JUDr\. Jana Dvořáka \(\*1826 Dlouhomilov čp\. 29\), advokáta a zemského poslance v Praze\./g, "Bride from Central Bohemia (Poděbrady), sister-in-law of Prague lawyer JUDr. Jan Dvořák (*1826 Dlouhomilov No. 29)."],
  [/Úsobí u Havlíčkova Brodu/g, "Úsobí near Havlíčkův Brod"],
  [/Českomoravská vrchovina/g, "Bohemian-Moravian Highlands"],
  [/Manželka dělníka/g, "Worker's Wife"],
  [/Rodačka z havlíčkobrodské Vysočiny provdaná do textilní dělnické rodiny na domkářském čp\. 76\./g, "Native of the Bohemian-Moravian Highlands married into a textile worker family at Cottage No. 76."],
  [/Hrotovice u Třebíče/g, "Hrotovice near Třebíč"],
  [/Jihozápadní Morava/g, "South-West Moravia"],
  [/Dcera majitele dědičné rychty/g, "Daughter of Hereditary Magistrate"],
  [/Roční dcera rychtáře Jana Merty \(\*1826\), který v té době spravoval panský dvůr v Hrotovicích\./g, "One-year-old daughter of magistrate Jan Merta (*1826), who at that time managed the manor court in Hrotovice."],
  [/Otevřít stavení\s+/g, "Open Homestead "],
  [/\(Opačný směr\)/g, "(Opposite Direction)"],
  [/\(hlavní město\)/g, "(Capital City)"],
  [/Doktor práv \(JUDr\.\):/g, "Doctor of Laws (JUDr.):"],
  [/Nejstarší doložená vysokoškolská dráha rodáka z Dlouhomilova\. Ve sčítacím operátu 1857 u sedláka Johanna Dvořáka zapsán syn Jan jako/g, "Earliest documented university career of a Dlouhomilov native. In the 1857 census sheet of farmer Johann Dvořák, his son Jan is recorded as"],
  [/, v operátu 1869 je již evidován s titulem Doktor\./g, ", and in the 1869 sheet he is listed with the title of Doctor."],
  [/Zobrazit životopis doktora práv ➔/g, "View Lawyer's Biography ➔"],
  [/a dalších\s+(\d+)/g, "and $1 more"],
  // Wealth filter buttons & cards
  [/Všechna stavení \((\d+)\)/g, "All Homesteads ($1)"],
  [/I\. Rychta & Velkostatek \(1\)/g, "I. Hereditary Rychta & Large Estate (1)"],
  [/I\. Rychta & Velkostatek/g, "I. Hereditary Rychta & Large Estate"],
  [/I\. Dědičná rychta & Velkostatek/g, "I. Hereditary Rychta & Large Estate"],
  [/Dědičná rychta \(čp\. 7\)/g, "Hereditary Rychta (No. 7)"],
  [/Uzavřený zděný dvůr,/g, "Enclosed brick court,"],
  [/4–6 koní/g, "4–6 horses"],
  [/15–25 ks skotu/g, "15–25 head of cattle"],
  [/4–7 stálých čeledínů\/děveček/g, "4–7 permanent farmhands/maids"],
  [/, 3–5 bytů, hostinec, kovárna a zkoušená porodní bába\./g, ", 3–5 apartments, village inn, smithy, and certified midwife."],
  [/II\. Selské grunty \((\d+)\)/g, "II. Peasant Farmsteads ($1)"],
  [/II\. Plnohodnotný selský grunt & Dvorec/g, "II. Full Peasant Farmstead & Court"],
  [/Dlouhomilov, Medelské i Benkov/g, "Dlouhomilov, Medelské & Benkov"],
  [/Velké usedlosti s potahem \(/g, "Large farmsteads with draft team ("],
  [/pár koní/g, "pair of horses"],
  [/6–12 ks skotu/g, "6–12 head of cattle"],
  [/, stálá čeleď a výměnek\. V r\. 1869 na čp\. 29 chov/g, ", permanent servants, and dower house. In 1869 No. 29 kept"],
  [/49 ovcí/g, "49 sheep"],
  [/III\. Malorolníci \((\d+)\)/g, "III. Smallholders ($1)"],
  [/III\. Malorolník, Chalupník & Živnost/g, "III. Smallholder, Cottager & Trade"],
  [/Usedlosti & živnosti/g, "Smallholdings & Craft Trades"],
  [/Menší polnosti bez koní \(orba s kravami\),/g, "Smaller plots without horses (plowing with cows),"],
  [/2–5 ks skotu/g, "2–5 head of cattle"],
  [/, obdělávání vlastní rodinou, kombinace s řemeslem \(obuvníci, stolaři, zedníci, kováři\)\./g, ", farmed by the family alongside crafts (shoemakers, joiners, bricklayers, blacksmiths)."],
  [/IV\. Domkáři & Textil \((\d+)\)/g, "IV. Cottagers & Textile ($1)"],
  [/IV\. Domkář & Dělník \(Oberleithner, dráha, tkalci\)/g, "IV. Cottager & Worker (Oberleithner, Railway, Weavers)"],
  [/Dělnická stavení & chalupy/g, "Workers' Houses & Cottages"],
  [/Chalupy bez polního potahu, 1–3 byty v domě, obživa v šumperských bělidlech fy/g, "Cottages without draft animals, 1–3 apartments per house, livelihood in the Šumperk bleacheries of"],
  [/Eduard Oberleithner a synové/g, "Eduard Oberleithner & Sons"],
  [/\(124 osob v 63 domech\), železnice ČSD a živností\./g, "(124 people in 63 houses), ČSD railways, and local trades."],
  [/Žádné stavení neodpovídá zvoleným filtrům\./g, "No homestead matches the selected filters."],
  [/Zemědělství/g, "Agriculture"],
  [/Neuvedeno v operátu/g, "Not listed in sheet"],
  // Livestock badges
  [/(\d+)\s*kůň/g, "$1 horse"],
  [/(\d+)\s*koně/g, "$1 horses"],
  [/(\d+)\s*koní/g, "$1 horses"],
  [/(\d+)\s*ks skotu/g, "$1 cattle"],
  [/(\d+)\s*skotu/g, "$1 cattle"],
  [/(\d+)\s*kráva/g, "$1 cow"],
  [/(\d+)\s*krávy/g, "$1 cows"],
  [/(\d+)\s*krav/g, "$1 cows"],
  [/(\d+)\s*prase\b/g, "$1 pig"],
  [/(\d+)\s*prasata/g, "$1 pigs"],
  [/(\d+)\s*prasat/g, "$1 pigs"],
  [/(\d+)\s*ovce/g, "$1 sheep"],
  [/(\d+)\s*ovcí/g, "$1 sheep"],
  [/(\d+)\s*koza/g, "$1 goat"],
  [/(\d+)\s*kozy/g, "$1 goats"],
  [/(\d+)\s*koz\b/g, "$1 goats"],
  [/(\d+)\s*drůbeže/g, "$1 poultry"],
  [/(\d+)\s*včelstev/g, "$1 beehives"],
  [/(\d+)\s*úly/g, "$1 beehives"],
  [/(\d+)\s*úlů/g, "$1 beehives"],
  // Common terms & relations in tables and cards (longest first, word-bounded)
  [/gramotnost:\s*čte i píše/gi, "literacy: reads & writes"],
  [/gramotnost:\s*číst a psát/gi, "literacy: reads & writes"],
  [/gramotnost:\s*nečte ani nepíše/gi, "literacy: neither reads nor writes"],
  [/gramotnost:\s*nečte/gi, "literacy: does not read"],
  [/čte i píše/gi, "reads & writes"],
  [/číst a psát/gi, "reads & writes"],
  [/nečte ani nepíše/gi, "neither reads nor writes"],
  [/Hlava rodiny \/ Majitel usedlosti/gi, "Head of Household / Homestead Owner"],
  [/Hlava rodiny \/ Majitel velkostatku/gi, "Head of Household / Estate Owner"],
  [/Hlava rodiny \/ Majitel statku/gi, "Head of Household / Farm Owner"],
  [/Hlava rodiny \/ Hospodář/gi, "Head of Household / Farmer"],
  [/Hlava rodiny \/ Rolník nájemník/gi, "Head of Household / Tenant Farmer"],
  [/Hlava rodiny \/ Sedlák/gi, "Head of Household / Peasant Farmer"],
  [/Hlava rodiny/gi, "Head of Household"],
  [/Člen rodiny hospodáře/gi, "Farmer's Family Member"],
  [/Obyvatel obce/gi, "Village Resident"],
  [/Držitel gruntu \/ Hospodář/gi, "Estate Holder / Farmer"],
  [/Držitel gruntu/gi, "Estate Holder"],
  [/Rodinný příslušník/gi, "Family Member"],
  [/Výměnkář \/ Výměnkářka/gi, "Retiree (Výměnkář)"],
  [/Čeleď \/ Služebnictvo/gi, "Farm Servant"],
  [/Řemeslník \/ Živnostník/gi, "Craftsman / Tradesman"],
  [/Podruh \/ Nájemník/gi, "Lodger / Subtenant"],
  [/Vzdělanec \/ Správa \/ Duchovní/gi, "Scholar / Administration / Clergy"],
  [/Vzdělanec \/ Duchovní/gi, "Scholar / Clergy"],
  [/Sčítací operát (\d+)/g, "Census Sheet $1"],
  [/Sčítání lidu (\d+)/g, "$1 Population Census"],
  [/Bytový arch stavení/g, "Household Census Sheet of"],
  [/Bytový arch domu/g, "Household Census Sheet of House"],
  [/Originální sčítací arch/g, "Original census sheet of"],
  [/Originální česko-německý sčítací arch/g, "Original Czech-German census sheet of"],
  [/Nemovitá kulturní památka zapsaná v Ústředním seznamu kulturních památek ČR\./g, "Protected cultural monument registered in the Central List of Cultural Monuments of the Czech Republic."],
  [/Venkovská usedlost čp\./g, "Country Homestead No."],
  [/Zemědělská usedlost čp\./g, "Agricultural Homestead No."],
  [/Rolnická usedlost čp\./g, "Farming Homestead No."],
  [/Malorolnická usedlost čp\./g, "Smallholding No."],
  [/Domkářské stavení čp\./g, "Cottager House No."],
  [/Domkářská stavení/g, "Cottager Houses"],
  [/Domkářská usedlost čp\./g, "Cottager Homestead No."],
  [/Venkovská chalupa čp\./g, "Country Cottage No."],
  [/Venkovský dům čp\./g, "Country House No."],
  [/Dům čp\./g, "House No."],
  [/Usedlost čp\./g, "Homestead No."],
  [/Stavení čp\./g, "Building No."],
  [/v osadě Medelské/g, "in the hamlet of Medelské"],
  [/v osadě Benkov/g, "in the settlement of Benkov"],
  [/v horské osadě Benkov/g, "in the upland settlement of Benkov"],
  [/v Benkově/g, "in Benkov"],
  [/v Dlouhomilově/g, "in Dlouhomilov"],
  [/čp\.\s*(\d+)/g, "No. $1"],
  [/(\d+)\s*letá/g, "$1-year-old"],
  [/(\d+)\s*letý/g, "$1-year-old"],
  [/(\d+)\s*leté/g, "$1-year-old"],
  [/(\d+)\s*\+\s*let/g, "$1+ yrs"],
  [/(\d+[–-]\d+)\s*let/g, "$1 yrs"],
  [/(\d+)\s*let\b/g, "$1 yrs"],
  [/(\d+)\s*obyvatel\b/g, "$1 residents"]
];

const REGEX_REPLACEMENTS_DE = [
  // Dynamic counters & buttons
  [/^Obyvatelé & Rodopis \((\d+)\)$/i, "Einwohner & Genealogie ($1)"],
  [/^👥 Obyvatelé & Rodopis \((\d+)\)$/i, "👥 Einwohner & Genealogie ($1)"],
  [/^(\d+) historických zápisů$/i, "$1 historische Einträge"],
  [/^Záznamy \((\d+)\)$/i, "Einträge ($1)"],
  [/^Biografické profily \((\d+)\)$/i, "Biographische Profile ($1)"],
  [/^Zobrazeno:\s*(\d+)\s*osob$/i, "Angezeigt: $1 Personen"],
  [/^Zobrazeno:\s*(\d+)\s*obcí$/i, "Angezeigt: $1 Gemeinden"],
  [/^Zobrazeno:\s*(\d+)\s*stavení$/i, "Angezeigt: $1 Anwesen"],
  [/^Zobrazeno:\s*(\d+)\s*sjednocených osob\s*\((\d+)\s*zápisů\)$/i, "Angezeigt: $1 zusammengeführte Personen ($2 Einträge)"],
  [/^Všechna stavení \((\d+) záznamů\)$/i, "Alle Anwesen ($1 Einträge)"],
  [/^Všichni \((\d+)\)$/i, "Alle ($1)"],
  [/^Držitelé gruntů \((\d+)\)$/i, "Hofbesitzer ($1)"],
  [/^Výměnkáři \((\d+)\)$/i, "Ausgedinger ($1)"],
  [/^Čeleď \((\d+)\)$/i, "Gesinde ($1)"],
  [/^Řemeslníci \((\d+)\)$/i, "Handwerker ($1)"],
  [/^Podruzi \((\d+)\)$/i, "Inwohner ($1)"],
  [/^Rodinní příslušníci \((\d+)\)$/i, "Familienangehörige ($1)"],
  [/^Učitelé & Duchovní \((\d+)\)$/i, "Lehrer & Geistliche ($1)"],
  [/^Dlouhomilov \((\d+)\)$/i, "Lomigsdorf / Dlouhomilov ($1)"],
  [/^Osada Medelské \((\d+)\)$/i, "Weiler Dreihofen / Medelské ($1)"],
  [/^Benkov \((\d+)\)$/i, "Benke / Benkov ($1)"],
  [/^Vše \((\d+)\)$/i, "Alle ($1)"],
  [/^Pouze památky \((\d+)\)$/i, "Nur Denkmale ($1)"],
  [/^Jen památky \((\d+)\)$/i, "Nur Denkmale ($1)"],
  [/^📍 Body:\s*(\d+)$/i, "📍 Punkte: $1"],
  // Story & Comic reader chrome
  [/Výběr kapitoly příběhu \(I\.–([IVX]+)\.\):/g, "Auswahl des Chronik-Kapitels (I.–$1.):"],
  [/Zobrazeno všech (\d+) kapitol pod sebou/g, "Alle $1 Kapitel untereinander angezeigt"],
  [/Čtení po kapitolách \(aktivní Kapitola ([0-9IVX.]+)\)/g, "Kapitelweise lesen (aktiv: Kapitel $1)"],
  [/Přepnout na čtečku po 1 kapitole/g, "Auf Einzelkapitel-Ansicht umschalten"],
  [/Rozbalit všech (\d+) kapitol pod sebou/g, "Alle $1 Kapitel untereinander aufklappen"],
  [/Čtečka kapitol \((\d+) z (\d+)\)/g, "Kapitel-Leser ($1 von $2)"],
  [/Kapitola ([0-9IVX.]+) \/ ([0-9IVX.]+)/g, "Kapitel $1 / $2"],
  [/^Kap\.\s*([0-9IVX.]+)$/g, "Kap. $1"],
  [/Předchozí:\s*([0-9IVX.]+)/g, "Vorheriges: $1"],
  [/Další kapitola:\s*([0-9IVX.]+)/g, "Nächstes Kapitel: $1"],
  [/📖 Zobrazit všech (\d+) kapitol/g, "📖 Alle $1 Kapitel anzeigen"],
  [/✨ Přejít na Zajímavosti z matrik \((\d+)\)/g, "✨ Zu den Matriken-Entdeckungen ($1)"],
  [/STRANA\s+([0-9IVX.]+)\s*\/\s*([0-9IVX.]+)/g, "BOGEN $1 / $2"],
  [/^STRANA\s+([0-9IVX.]+)$/g, "BOGEN $1"],
  [/Období\s+/g, "Zeitraum "],
  [/Kronika Dlouhomilova • List\s+([0-9IVX.]+)/g, "Chronik von Lomigsdorf • Bogen $1"],
  [/← Předchozí strana \(([^)]+)\)/g, "← Vorheriger Bogen ($1)"],
  [/📖 Zobrazit všechny strany \(I\.–I?V\.\)/g, "📖 Alle Bögen anzeigen (I.–IV.)"],
  [/Další strana komiksu \(([^)]+)\) →/g, "Nächster Bilderbogen ($1) →"],
  // Demography KPIs, age bins, cohorts, insights, origins, distance records & wealth
  [/Zpracovaná stavení/g, "Erfasste Anwesen"],
  [/(\d+)\s*domů/g, "$1 Häuser"],
  [/V roce 1921:/g, "Im Jahr 1921:"],
  [/(\d+)\s*bytů/g, "$1 Wohnungen"],
  [/průměr\s*([\d.]+)\s*os\.\/dům/g, "Ø $1 Pers./Haus"],
  [/([\d.]+)\s*os\.\/dům/g, "$1 Pers./Haus"],
  [/([\d.]+)\s*os\.\/byt/g, "$1 Pers./Wohn."],
  [/Původ obyvatel/g, "Herkunft der Einwohner"],
  [/([\d.]+)\s*%\s*rodáků/g, "$1 % Einheimische"],
  [/Věkový průměr \(1921\)/g, "Durchschnittsalter (1921)"],
  [/Stárnutí obce:/g, "Alterung der Gemeinde:"],
  [/v r\.\s*(\d+)\s*byl průměr/g, "im J. $1 lag der Schnitt bei"],
  [/medián/g, "Median"],
  [/Textil Oberleithner/g, "Textilwerke Oberleithner"],
  [/(\d+)\s*osob/g, "$1 Personen"],
  [/V\s*(\d+)\s*ze\s*(\d+)\s*domů žili běliči, tkalci a textilní dělníci šumperských továren\./g, "In $1 von $2 Häusern lebten Garnbleicher, Weber und Textilarbeiter der Mährisch Schönberger Fabriken."],
  [/Všechna sčítání \(1857–1921\)/g, "Alle Volkszählungen (1857–1921)"],
  [/Sčítání\s+(\d+)/g, "Zählung $1"],
  [/sčítání\s+(\d+)/g, "Zählung $1"],
  [/Záznamů\s*\(([^)]+)\)/g, "Einträge ($1)"],
  [/osob v operátech/g, "Personen in den Zählbögen"],
  [/záznamů celkem/g, "Einträge insgesamt"],
  [/Průměrný věk/g, "Durchschnittsalter"],
  [/aritmetický průměr/g, "arithmetisches Mittel"],
  [/Medián věku/g, "Medianalter"],
  [/střední hodnota/g, "Medianwert"],
  [/Děti \(0–9 let\)/g, "Kinder (0–9 J.)"],
  [/(\d+)\s*dětí/g, "$1 Kinder"],
  [/Senioři \(60\+\)/g, "Senioren (60+)"],
  [/(\d+)\s*výměnkářů/g, "$1 Ausgedinger"],
  [/Nejstarší obyvatel/g, "Ältester Einwohner"],
  [/Kojenci a mladší děti/g, "Säuglinge & jüngere Kinder"],
  [/Školáci, učni a mladá čeleď/g, "Schüler, Lehrlinge & junges Gesinde"],
  [/Mladí dospělí, svobodná čeleď/g, "Junge Erwachsene & lediges Gesinde"],
  [/Hospodáři a mladé rodiny/g, "Hauswirte & junge Familien"],
  [/Zkušení hospodáři a hospodyně/g, "Erfahrene Hauswirte & Hausfrauen"],
  [/Zralí hospodáři na statcích/g, "Reife Hofbesitzer"],
  [/Výměnkáři a starší hospodáři/g, "Ausgedinger & ältere Landwirte"],
  [/Vysoký věk a pamětníci/g, "Hohes Alter & Zeitzeugen"],
  [/Děti a školáci \(0–14 let\)/g, "Kinder & Schüler (0–14 J.)"],
  [/Produktivní věk \(15–59 let\)/g, "Erwerbsalter (15–59 J.)"],
  [/Výměnek a stáří \(60\+ let\)/g, "Ausgedinge & Alter (60+ J.)"],
  [/Demografická transformace \(1857 → 1921\):/g, "Demographischer Wandel (1857 → 1921):"],
  [/Zatímco v polovině 19\. století tvořily děti a mládež do 19 let téměř polovinu obyvatel selských gruntů, v roce 1921 se věková pyramida výrazně posouvá směrem ke střednímu a vyššímu věku\./g, "Während Mitte des 19. Jahrhunderts Kinder und Jugendliche unter 19 Jahren fast die Hälfte der Bewohner auf den Bauernhöfen stellten, verschob sich die Alterspyramide bis 1921 deutlich zu mittleren und höheren Jahrgängen."],
  [/Průměrný věk v obci vzrostl z/g, "Das Durchschnittsalter im Ort stieg von"],
  [/v roce 1921\./g, "im Jahr 1921."],
  [/Instituce výměnku a dlouhověkost:/g, "Institution des Ausgedinges & Langlebigkeit:"],
  [/Vysoký podíl seniorů nad 60 let/g, "Der hohe Anteil von Senioren über 60 Jahren"],
  [/odráží demografickou stabilitu i dopady 1\. světové války\. Nejstarším doloženým pamětníkem byla 93letá výměnkářka/g, "spiegelt die demographische Stabilität sowie die Folgen des 1. Weltkriegs wider. Älteste belegte Einwohnerin war die 93-jährige Ausgedingerin"],
  [/v Rovensku/g, "in Rowenz (Rovensko)"],
  [/na čp\.\s*(\d+)\s*a\s*87letá/g, "auf Nr. $1 sowie die 87-jährige"],
  [/na čp\.\s*(\d+)/g, "auf Nr. $1"],
  [/Všechna místa původu \((\d+)\+\)/g, "Alle Herkunftsorte ($1+)"],
  [/Pouze místní \(Dlouhomilov, Medelské, Benkov\)/g, "Nur Einheimische (Lomigsdorf, Dreihofen, Benke)"],
  [/Sousedství \(do 7,5 km\)/g, "Nachbarschaft (bis 7,5 km)"],
  [/Zábřežsko & Šumpersko \(7,5–18 km\)/g, "Raum Hohenstadt & Mährisch Schönberg (7,5–18 km)"],
  [/Regionální Morava & Slezsko \(18–60 km\)/g, "Regionales Mähren & Schlesien (18–60 km)"],
  [/Dálková migrace \(> 60 km\)/g, "Fernwanderung (> 60 km)"],
  [/0\. Místní rodáci \(Dlouhomilov, Medelské, Benkov\)/g, "0. Einheimische (Lomigsdorf, Dreihofen, Benke)"],
  [/1\. Bezprostřední sousedství \(do 7,5 km\)/g, "1. Unmittelbare Nachbarschaft (bis 7,5 km)"],
  [/2\. Širší Zábřežsko & Šumpersko \(7,5–18 km\)/g, "2. Weiteres Hohenstädter & Schönberger Land (7,5–18 km)"],
  [/3\. Regionální Morava & Slezsko \(18–60 km\)/g, "3. Regionales Mähren & Schlesien (18–60 km)"],
  [/4\. Dálková migrace \(> 60 km\)/g, "4. Fernwanderung (> 60 km)"],
  [/Obecně Morava/g, "Mähren (allgemein)"],
  [/z celkem/g, "von insgesamt"],
  [/zápisů/g, "Einträgen"],
  // Distant records in Demography
  [/Oděsa \(Ukrajina \/ Rusko\)/g, "Odessa (Ukraine / Russisches Reich)"],
  [/Černomořský přístav/g, "Schwarzmeerhafen"],
  [/Služebná děvečka při rolnictví/g, "Landwirtschaftliche Dienstmagd"],
  [/Narozená v černomořském přístavu Oděsa v Ruském impériu\. Po 1\. světové válce doložena jako zemědělská děvečka na velkém selském gruntě Václava Mertlíka v Benkově\./g, "Geboren im Schwarzmeerhafen Odessa im Russischen Reich. Nach dem 1. Weltkrieg als landwirtschaftliche Magd auf dem großen Bauerngut von Václav Mertlík in Benke (Benkov) Nr. 12 belegt."],
  [/Rachov \(Rahovo, Podkarpatská Rus\)/g, "Rachiw (Karpatenrussland)"],
  [/Karpatská Rus \(dnes Ukrajina\)/g, "Karpatenrussland (heute Ukraine)"],
  [/Silniční dělník s rodinou/g, "Straßenarbeiter mit Familie"],
  [/Rodák z horského Rachova na Podkarpatské Rusi \(tehdejší součást nově vzniklé ČSR\)\. Žil v podnájmu s rodinou v Benkově čp\. 21 jako silniční dělník\./g, "Gebürtig aus Rachiw in Karpatenrussland (damals Teil der jungen ČSR). Lebte mit seiner Familie zur Untermiete in Benke (Benkov) Nr. 21 als Straßenarbeiter."],
  [/Donawitz u Leobenu \(Rakousko\)/g, "Donawitz bei Leoben (Österreich)"],
  [/Štýrsko \(Steiermark\)/g, "Steiermark"],
  [/Schovanka \/ válečný sirotek/g, "Pflegetochter / Kriegswaise"],
  [/Narozená ve štýrském hutním středisku Donawitz; v r\. 1921 evidována jako 18letá schovanka v domácnosti železničního zřízence Johanna Rottera\./g, "Geboren im steirischen Hüttenort Donawitz; 1921 als 18-jährige Pflegetochter im Haushalt des Bahnbediensteten Johann Rotter in Benke Nr. 20 verzeichnet."],
  [/Chlumčany, okres Louny/g, "Chlumtschan, Bezirk Laun (Louny)"],
  [/Severozápadní Čechy/g, "Nordwestböhmen"],
  [/Dcera tkadlce a podruha/g, "Tochter eines Webers und Inwohners"],
  [/Rodina tkadlce Hynka Churavého\/Churaného pracovala v severozápadních Čechách u Loun a kolem roku 1890 se vrátila na Moravu na statek čp\. 29\./g, "Die Familie des Webers Hynek Churavý arbeitete in Nordwestböhmen bei Laun und kehrte um 1890 nach Mähren auf den Hof Nr. 29 zurück."],
  [/Perotín \(Beroun\)/g, "Perotín (Bezirk Beraun / Beroun)"],
  [/Střední Čechy \(Mladoboleslavsko\)/g, "Mittelböhmen (Jungbunzlau)"],
  [/Střední Čechy \(Polabí\)/g, "Mittelböhmen (Elbeland)"],
  [/Střední Čechy/g, "Mittelböhmen"],
  [/Podnájemníci \/ majetníci v Bytě č\. 2/g, "Untermieter in Wohnung Nr. 2"],
  [/Manželský pár ze středočeského Perotína u Berouna žijící v podnájmu na selském gruntě Karla Dvořáka při sčítání 1869\./g, "Ehepaar aus dem mittelböhmischen Perotín bei Beraun, das bei der Zählung 1869 zur Untermiete auf dem Hof Nr. 29 von Karel Dvořák lebte."],
  [/Hostivice u Prahy/g, "Hostiwitz bei Prag"],
  [/Bratr mladého hospodáře rychty/g, "Bruder des jungen Erbrichters"],
  [/Desetiletý školák, bratr rychtáře Arnošta Merty\. Otec Jan Merta řídil panské velkostatky v Čechách i na Moravě\./g, "Zehnjähriger Schüler, Bruder des Erbrichters Arnošt Merta. Vater Jan Merta verwaltete herrschaftliche Güter in Böhmen und Mähren."],
  [/Vídeň \(Rakousko\)/g, "Wien (Österreich)"],
  [/Dolní Rakousy \/ Vídeň/g, "Niederösterreich / Wien"],
  [/Syn samostatného krejčovského mistra/g, "Sohn des selbständigen Schneidermeisters"],
  [/Osmiletý žák narozený v císařské Vídni, kde rodina žila před válkou \(s domovskou příslušností do Rakouska\)\. Po válce se usadili na čp\. 23\./g, "Achtjähriger Schüler, geboren im kaiserlichen Wien, wo die Familie vor dem Krieg lebte. Nach dem Krieg ließ sich die Familie auf Nr. 23 nieder."],
  [/Manželka rolníka Gustava Körnera/g, "Ehefrau des Landwirts Gustav Körner"],
  [/Rodilá Středočeška z Mladoboleslavska provdaná za rolníka Gustava Körnera na gruntě v Benkově čp\. 14\./g, "Gebürtige Mittelböhmin aus der Gegend von Jungbunzlau, verheiratet mit dem Landwirt Gustav Körner auf dem Hof Benke (Benkov) Nr. 14."],
  [/Rosina u Žiliny \(Slovensko\)/g, "Rosina bei Sillein / Žilina (Slowakei)"],
  [/Severozápadní Slovensko/g, "Nordwestslowakei"],
  [/Čeledín při rolnictví/g, "Landwirtschaftlicher Knecht"],
  [/Slovenský zemědělský dělník ze Žilinska sloužící u rolníka Josefa Körnera na gruntě v Benkově čp\. 6\./g, "Slowakischer Landarbeiter aus der Gegend von Sillein (Žilina), Knecht beim Landwirt Josef Körner in Benke (Benkov) Nr. 6."],
  [/Manželka sedláka Karla Dvořáka/g, "Ehefrau des Bauern Karel Dvořák"],
  [/Nevěsta ze středních Čech, švagrová právníka JUDr\. Jana Dvořáka \(\*1826 Dlouhomilov čp\. 29\), advokáta a zemského poslance v Praze\./g, "Braut aus Mittelböhmen (Podiebrad), Schwägerin des Prager Juristen JUDr. Jan Dvořák (*1826 Lomigsdorf Nr. 29)."],
  [/Úsobí u Havlíčkova Brodu/g, "Pollerskirchen (Úsobí) bei Deutschbrod"],
  [/Českomoravská vrchovina/g, "Böhmisch-Mährische Höhe"],
  [/Manželka dělníka/g, "Arbeitersgattin"],
  [/Rodačka z havlíčkobrodské Vysočiny provdaná do textilní dělnické rodiny na domkářském čp\. 76\./g, "Gebürtig aus der Böhmisch-Mährischen Höhe, eingeheiratet in eine Textilarbeiterfamilie im Häusel Nr. 76."],
  [/Hrotovice u Třebíče/g, "Hrottowitz (Hrotovice) bei Trebitsch"],
  [/Jihozápadní Morava/g, "Südwestmähren"],
  [/Dcera majitele dědičné rychty/g, "Tochter des Erbrichters"],
  [/Roční dcera rychtáře Jana Merty \(\*1826\), který v té době spravoval panský dvůr v Hrotovicích\./g, "Einjährige Tochter des Erbrichters Jan Merta (*1826), der damals den Gutshof in Hrottowitz verwaltete."],
  [/Otevřít stavení\s+/g, "Anwesen öffnen "],
  [/\(Opačný směr\)/g, "(Gegenrichtung)"],
  [/\(hlavní město\)/g, "(Hauptstadt)"],
  [/Doktor práv \(JUDr\.\):/g, "Doktor der Rechte (JUDr.):"],
  [/Nejstarší doložená vysokoškolská dráha rodáka z Dlouhomilova\. Ve sčítacím operátu 1857 u sedláka Johanna Dvořáka zapsán syn Jan jako/g, "Älteste belegte Universitätslaufbahn eines gebürtigen Lomigsdorfers. Im Zählbogen 1857 des Bauern Johann Dvořák ist Sohn Jan eingetragen als"],
  [/, v operátu 1869 je již evidován s titulem Doktor\./g, ", im Bogen von 1869 wird er bereits mit dem Titel Doktor geführt."],
  [/Zobrazit životopis doktora práv ➔/g, "Lebenslauf des Juristen anzeigen ➔"],
  [/a dalších\s+(\d+)/g, "und $1 weitere"],
  // Wealth filter buttons & cards
  [/Všechna stavení \((\d+)\)/g, "Alle Anwesen ($1)"],
  [/I\. Rychta & Velkostatek \(1\)/g, "I. Erbgericht & Großgut (1)"],
  [/I\. Rychta & Velkostatek/g, "I. Erbgericht & Großgut"],
  [/I\. Dědičná rychta & Velkostatek/g, "I. Erbgericht & Großgut"],
  [/Dědičná rychta \(čp\. 7\)/g, "Erbgericht (Nr. 7)"],
  [/Uzavřený zděný dvůr,/g, "Geschlossener Vierkanthof,"],
  [/4–6 koní/g, "4–6 Pferde"],
  [/15–25 ks skotu/g, "15–25 Rinder"],
  [/4–7 stálých čeledínů\/děveček/g, "4–7 ständige Knechte/Mägde"],
  [/, 3–5 bytů, hostinec, kovárna a zkoušená porodní bába\./g, ", 3–5 Wohnungen, Gasthaus, Schmiede und geprüfte Hebamme."],
  [/II\. Selské grunty \((\d+)\)/g, "II. Bauerngüter ($1)"],
  [/II\. Plnohodnotný selský grunt & Dvorec/g, "II. Vollbauerngut & Hofanlage"],
  [/Dlouhomilov, Medelské i Benkov/g, "Lomigsdorf, Dreihofen & Benke"],
  [/Velké usedlosti s potahem \(/g, "Große Höfe mit Pferdegespann ("],
  [/pár koní/g, "ein Paar Pferde"],
  [/6–12 ks skotu/g, "6–12 Rinder"],
  [/, stálá čeleď a výměnek\. V r\. 1869 na čp\. 29 chov/g, ", ständiges Gesinde und Ausgedinge. 1869 auf Nr. 29 Haltung von"],
  [/49 ovcí/g, "49 Schafen"],
  [/III\. Malorolníci \((\d+)\)/g, "III. Kleinbauern ($1)"],
  [/III\. Malorolník, Chalupník & Živnost/g, "III. Kleinbauer, Gärtler & Gewerbe"],
  [/Usedlosti & živnosti/g, "Kleinwirtschaften & Gewerbe"],
  [/Menší polnosti bez koní \(orba s kravami\),/g, "Kleinere Felder ohne Pferde (Ackerbau mit Kühen),"],
  [/2–5 ks skotu/g, "2–5 Rinder"],
  [/, obdělávání vlastní rodinou, kombinace s řemeslem \(obuvníci, stolaři, zedníci, kováři\)\./g, ", Bewirtschaftung durch die eigene Familie, kombiniert mit Handwerk (Schuster, Tischler, Maurer, Schmiede)."],
  [/IV\. Domkáři & Textil \((\d+)\)/g, "IV. Häusler & Textil ($1)"],
  [/IV\. Domkář & Dělník \(Oberleithner, dráha, tkalci\)/g, "IV. Häusler & Arbeiter (Oberleithner, Bahn, Weber)"],
  [/Dělnická stavení & chalupy/g, "Arbeiterhäuser & Häuslerstellen"],
  [/Chalupy bez polního potahu, 1–3 byty v domě, obživa v šumperských bělidlech fy/g, "Häusel ohne Gespann, 1–3 Wohnungen im Haus, Erwerb in den Mährisch Schönberger Bleichen der Fa."],
  [/Eduard Oberleithner a synové/g, "Eduard Oberleithner & Söhne"],
  [/\(124 osob v 63 domech\), železnice ČSD a živností\./g, "(124 Personen in 63 Häusern), Staatsbahn ČSD und Gewerbe."],
  [/Žádné stavení neodpovídá zvoleným filtrům\./g, "Kein Anwesen entspricht den gewählten Filtern."],
  [/Zemědělství/g, "Landwirtschaft"],
  [/Neuvedeno v operátu/g, "Nicht im Bogen angegeben"],
  // Livestock badges
  [/(\d+)\s*kůň/g, "$1 Pferd"],
  [/(\d+)\s*koně/g, "$1 Pferde"],
  [/(\d+)\s*koní/g, "$1 Pferde"],
  [/(\d+)\s*ks skotu/g, "$1 Rinder"],
  [/(\d+)\s*skotu/g, "$1 Rinder"],
  [/(\d+)\s*kráva/g, "$1 Kuh"],
  [/(\d+)\s*krávy/g, "$1 Kühe"],
  [/(\d+)\s*krav/g, "$1 Kühe"],
  [/(\d+)\s*prase\b/g, "$1 Schwein"],
  [/(\d+)\s*prasata/g, "$1 Schweine"],
  [/(\d+)\s*prasat/g, "$1 Schweine"],
  [/(\d+)\s*ovce/g, "$1 Schafe"],
  [/(\d+)\s*ovcí/g, "$1 Schafe"],
  [/(\d+)\s*koza/g, "$1 Ziege"],
  [/(\d+)\s*kozy/g, "$1 Ziegen"],
  [/(\d+)\s*koz\b/g, "$1 Ziegen"],
  [/(\d+)\s*drůbeže/g, "$1 Geflügel"],
  [/(\d+)\s*včelstev/g, "$1 Bienenvölker"],
  [/(\d+)\s*úly/g, "$1 Bienenstöcke"],
  [/(\d+)\s*úlů/g, "$1 Bienenstöcke"],
  // Common terms & relations
  [/gramotnost:\s*čte i píše/gi, "Alphabetisierung: liest u. schreibt"],
  [/gramotnost:\s*číst a psát/gi, "Alphabetisierung: lesen u. schreiben"],
  [/gramotnost:\s*nečte ani nepíše/gi, "Alphabetisierung: weder lesen noch schreiben"],
  [/gramotnost:\s*nečte/gi, "Alphabetisierung: liest nicht"],
  [/čte i píše/gi, "liest u. schreibt"],
  [/číst a psát/gi, "lesen u. schreiben"],
  [/nečte ani nepíše/gi, "weder lesen noch schreiben"],
  [/Hlava rodiny \/ Majitel usedlosti/gi, "Haushaltsvorstand / Hofbesitzer"],
  [/Hlava rodiny \/ Majitel velkostatku/gi, "Haushaltsvorstand / Gutsbesitzer"],
  [/Hlava rodiny \/ Majitel statku/gi, "Haushaltsvorstand / Hofbesitzer"],
  [/Hlava rodiny \/ Hospodář/gi, "Haushaltsvorstand / Hauswirt"],
  [/Hlava rodiny \/ Rolník nájemník/gi, "Haushaltsvorstand / Gutspächter"],
  [/Hlava rodiny \/ Sedlák/gi, "Haushaltsvorstand / Bauer"],
  [/Hlava rodiny/gi, "Haushaltsvorstand"],
  [/Člen rodiny hospodáře/gi, "Familienangehöriger des Hofwirts"],
  [/Obyvatel obce/gi, "Ortsbewohner"],
  [/Držitel gruntu \/ Hospodář/gi, "Hofbesitzer / Bauer"],
  [/Držitel gruntu/gi, "Hofbesitzer"],
  [/Rodinný příslušník/gi, "Familienangehöriger"],
  [/Výměnkář \/ Výměnkářka/gi, "Ausgedinger / Ausgedingerin"],
  [/Čeleď \/ Služebnictvo/gi, "Gesinde / Dienstboten"],
  [/Řemeslník \/ Živnostník/gi, "Handwerker / Gewerbetreibender"],
  [/Podruh \/ Nájemník/gi, "Inwohner / Mieter"],
  [/Vzdělanec \/ Správa \/ Duchovní/gi, "Gelehrter / Verwaltung / Geistlicher"],
  [/Vzdělanec \/ Duchovní/gi, "Gelehrter / Geistlicher"],
  [/Sčítací operát (\d+)/g, "Volkszählungsbogen $1"],
  [/Sčítání lidu (\d+)/g, "Volkszählung $1"],
  [/Bytový arch stavení/g, "Wohnungsbogen des Anwesens"],
  [/Bytový arch domu/g, "Wohnungsbogen des Hauses"],
  [/Originální sčítací arch/g, "Originaler Zählbogen von"],
  [/Originální česko-německý sčítací arch/g, "Originaler tschechisch-deutscher Zählbogen von"],
  [/Nemovitá kulturní památka zapsaná v Ústředním seznamu kulturních památek ČR\./g, "Unbewegliches Kulturdenkmal, eingetragen im Zentralverzeichnis der Kulturdenkmale der Tschechischen Republik."],
  [/Venkovská usedlost čp\./g, "Bauerngut Nr."],
  [/Zemědělská usedlost čp\./g, "Landwirtschaftliches Anwesen Nr."],
  [/Rolnická usedlost čp\./g, "Bauerngut Nr."],
  [/Malorolnická usedlost čp\./g, "Kleinbauernanwesen Nr."],
  [/Domkářské stavení čp\./g, "Häusleranwesen Nr."],
  [/Domkářská stavení/g, "Häusleranwesen"],
  [/Domkářská usedlost čp\./g, "Häusleranwesen Nr."],
  [/Venkovská chalupa čp\./g, "Häusel Nr."],
  [/Venkovský dům čp\./g, "Landhaus Nr."],
  [/Dům čp\./g, "Haus Nr."],
  [/Usedlost čp\./g, "Anwesen Nr."],
  [/Stavení čp\./g, "Gebäude Nr."],
  [/v osadě Medelské/g, "im Weiler Dreihofen (Medelské)"],
  [/v osadě Benkov/g, "im Höhendorf Benke (Benkov)"],
  [/v horské osadě Benkov/g, "im Höhendorf Benke (Benkov)"],
  [/v Benkově/g, "in Benke (Benkov)"],
  [/v Dlouhomilově/g, "in Lomigsdorf (Dlouhomilov)"],
  [/čp\.\s*(\d+)/g, "Nr. $1"],
  [/(\d+)\s*letá/g, "$1-jährige"],
  [/(\d+)\s*letý/g, "$1-jähriger"],
  [/(\d+)\s*leté/g, "$1-jährige"],
  [/(\d+)\s*\+\s*let/g, "$1+ J."],
  [/(\d+[–-]\d+)\s*let/g, "$1 J."],
  [/(\d+)\s*let\b/g, "$1 J."],
  [/(\d+)\s*obyvatel\b/g, "$1 Einwohner"]
];

// Dedicated translator for census relation, occupation, and notes fields
const CENSUS_FIELD_RULES_EN = [
  [/Majitelka domu a bytu/gi, "House & Apartment Owner (f.)"],
  [/Majitel domu a bytu/gi, "House & Apartment Owner"],
  [/Majitelka bytu č\.\s*(\d+)/gi, "Owner of Apt. No. $1 (f.)"],
  [/Majitel bytu č\.\s*(\d+)/gi, "Owner of Apt. No. $1"],
  [/Majitelka bytu/gi, "Apartment Holder (f.)"],
  [/Majitel bytu/gi, "Apartment Holder"],
  [/Majitelka domu/gi, "House Owner (f.)"],
  [/Majitel domu/gi, "House Owner"],
  [/Majitel usedlosti/gi, "Homestead Owner"],
  [/Majitel statku/gi, "Farm Owner"],
  [/Majitel velkostatku/gi, "Estate Owner"],
  [/Hlava bytu č\.\s*(\d+)/gi, "Head of Apt. No. $1"],
  [/Hlava rodiny/gi, "Head of Household"],
  [/Byt č\.\s*(\d+)/gi, "Apt. No. $1"],
  [/Byt\s+(\d+)/gi, "Apt. $1"],
  [/v bytě č\.\s*(\d+)/gi, "in Apt. No. $1"],
  [/u bytu č\.\s*(\d+)/gi, "in Apt. No. $1"],
  [/Manželka/gi, "Wife"],
  [/Manžel/gi, "Husband"],
  [/Družka/gi, "Partner (f.)"],
  [/Nevlastní syn/gi, "Stepson"],
  [/Nevlastní dcera/gi, "Stepdaughter"],
  [/Synovec/gi, "Nephew"],
  [/Neteř/gi, "Niece"],
  [/Vnuk/gi, "Grandson"],
  [/Vnučka/gi, "Granddaughter"],
  [/Syn/gi, "Son"],
  [/Dcera/gi, "Daughter"],
  [/Otec/gi, "Father"],
  [/Matka/gi, "Mother"],
  [/Bratr hospodáře/gi, "Farmer's Brother"],
  [/Bratr/gi, "Brother"],
  [/Sestra/gi, "Sister"],
  [/Tchyně|Tchýně/gi, "Mother-in-Law"],
  [/Tchán/gi, "Father-in-Law"],
  [/Švagrová/gi, "Sister-in-Law"],
  [/Švagr/gi, "Brother-in-Law"],
  [/Zeť/gi, "Son-in-Law"],
  [/Snacha/gi, "Daughter-in-Law"],
  [/Schovanka/gi, "Foster Daughter"],
  [/Schovanec/gi, "Foster Son"],
  [/Příbuzná/gi, "Relative (f.)"],
  [/Příbuzný/gi, "Relative"],
  [/Výměnkářka/gi, "Retiree (f.)"],
  [/Výměnkář/gi, "Retiree"],
  [/Podnájemnice/gi, "Subtenant (f.)"],
  [/Podnájemník/gi, "Subtenant"],
  [/Nájemnice/gi, "Tenant (f.)"],
  [/Nájemník/gi, "Tenant"],
  [/Podruhyně/gi, "Lodger (f.)"],
  [/Podruh/gi, "Lodger"],
  [/Hospodyně/gi, "Housekeeper"],
  [/Služebná děvečka/gi, "Maidservant"],
  [/Služebná/gi, "Maidservant"],
  [/Služka/gi, "Maidservant"],
  [/Děvečka/gi, "Maidservant"],
  [/Čeledín/gi, "Farmhand"],
  [/Pacholek u koní/gi, "Horse Stable Hand"],
  [/Pacholek/gi, "Stable Hand"],
  [/Kočí/gi, "Coachman / Teamster"],
  [/Nádenice/gi, "Day Laborer (f.)"],
  [/Nádeník|Nádenník/gi, "Day Laborer"],
  [/Samostatný rolník/gi, "Independent Farmer"],
  [/Rolník na vlastním statku/gi, "Farmer on Own Estate"],
  [/Rolník/gi, "Farmer"],
  [/Sedlák/gi, "Peasant Farmer"],
  [/Selka/gi, "Farmer's Wife"],
  [/Chalupník/gi, "Smallholder"],
  [/Domkářka/gi, "Cottager (f.)"],
  [/Domkář/gi, "Cottager"],
  [/Vedení domácnosti a hospodářství/gi, "Managing Household & Farm"],
  [/Obstarává domácnost a hospodářství/gi, "Manages Household & Farm"],
  [/Vedení vlastní domácnosti/gi, "Managing Own Household"],
  [/Vedení domácnosti/gi, "Housekeeping"],
  [/V domácnosti a hospodářství/gi, "In Household & Farm"],
  [/V domácnosti/gi, "In Household"],
  [/Pomocnice v domácnosti/gi, "Household Helper (f.)"],
  [/Pomocnice při hospodářství/gi, "Farm Helper (f.)"],
  [/Pomocník při hospodářství/gi, "Farm Helper"],
  [/Při polním hospodářství/gi, "In Field Agriculture"],
  [/Při rolnictví/gi, "In Agriculture"],
  [/Při hospodářství/gi, "On the Farm"],
  [/Školačka/gi, "Schoolgirl"],
  [/Školák/gi, "Schoolboy"],
  [/Žákyně/gi, "Pupil (f.)"],
  [/Žák/gi, "Pupil"],
  [/Dítě v rodině/gi, "Child in Family"],
  [/Dítě v opatrování/gi, "Foster Child"],
  [/Kojenec/gi, "Infant"],
  [/Dítě/gi, "Child"],
  [/Bělič příze/gi, "Yarn Bleacher"],
  [/Běličská dělnice/gi, "Bleachery Worker (f.)"],
  [/Běličský dělník/gi, "Bleachery Worker"],
  [/Běličství/gi, "Yarn Bleaching"],
  [/Čistička příze/gi, "Yarn Cleaner (f.)"],
  [/Tkadlena/gi, "Weaver (f.)"],
  [/Tkadlec/gi, "Weaver"],
  [/Přadlena/gi, "Spinner (f.)"],
  [/Textilní dělnice/gi, "Textile Worker (f.)"],
  [/Textilní dělník/gi, "Textile Worker"],
  [/Dělnice v textilce/gi, "Textile Mill Worker (f.)"],
  [/Dělník v bělidle/gi, "Bleachery Worker"],
  [/Kovářský mistr/gi, "Master Blacksmith"],
  [/Kovář a podkovář/gi, "Blacksmith & Farrier"],
  [/Kovář/gi, "Blacksmith"],
  [/Zedník/gi, "Bricklayer"],
  [/Tesař/gi, "Carpenter"],
  [/Stolař/gi, "Joiner"],
  [/Kolář/gi, "Wheelwright"],
  [/Obuvník/gi, "Shoemaker"],
  [/Krejčí/gi, "Tailor"],
  [/Zámečník/gi, "Locksmith"],
  [/Řezník/gi, "Butcher"],
  [/Hostinský/gi, "Innkeeper"],
  [/Hostinská/gi, "Innkeeper (f.)"],
  [/Obchodník/gi, "Merchant / Shopkeeper"],
  [/Porodní bába/gi, "Midwife"],
  [/Industriální učitelka/gi, "Needlework Teacher"],
  [/Řídící učitel/gi, "Headmaster"],
  [/Učitelka/gi, "Teacher (f.)"],
  [/Učitel/gi, "Teacher"],
  [/Farář/gi, "Parish Priest"],
  [/Děkan/gi, "Dean"],
  [/Obecní chudý/gi, "Municipal Pauper"],
  [/ovdovělá|ovdovělý/gi, "widowed"],
  [/vdova/gi, "widow"],
  [/vdovec/gi, "widower"],
  [/svobodná|svobodný/gi, "unmarried"],
  [/ženatý|vdaná/gi, "married"],
  [/nepřítomen/gi, "absent"],
  [/v obci od/gi, "in village since"]
];

const CENSUS_FIELD_RULES_DE = [
  [/Majitelka domu a bytu/gi, "Haus- u. Wohnungsbesitzerin"],
  [/Majitel domu a bytu/gi, "Haus- u. Wohnungsbesitzer"],
  [/Majitelka bytu č\.\s*(\d+)/gi, "Besitzerin der Wohn. Nr. $1"],
  [/Majitel bytu č\.\s*(\d+)/gi, "Besitzer der Wohn. Nr. $1"],
  [/Majitelka bytu/gi, "Wohnungsinhaberin"],
  [/Majitel bytu/gi, "Wohnungsinhaber"],
  [/Majitelka domu/gi, "Hausbesitzerin"],
  [/Majitel domu/gi, "Hausbesitzer"],
  [/Majitel usedlosti/gi, "Hofbesitzer"],
  [/Majitel statku/gi, "Gutsbesitzer"],
  [/Majitel velkostatku/gi, "Großgrundbesitzer"],
  [/Hlava bytu č\.\s*(\d+)/gi, "Vorstand der Wohn. Nr. $1"],
  [/Hlava rodiny/gi, "Haushaltsvorstand"],
  [/Byt č\.\s*(\d+)/gi, "Wohn. Nr. $1"],
  [/Byt\s+(\d+)/gi, "Wohn. $1"],
  [/v bytě č\.\s*(\d+)/gi, "in Wohn. Nr. $1"],
  [/u bytu č\.\s*(\d+)/gi, "in Wohn. Nr. $1"],
  [/Manželka/gi, "Ehegattin"],
  [/Manžel/gi, "Ehegatte"],
  [/Družka/gi, "Lebensgefährtin"],
  [/Nevlastní syn/gi, "Stiefsohn"],
  [/Nevlastní dcera/gi, "Stieftochter"],
  [/Synovec/gi, "Neffe"],
  [/Neteř/gi, "Nichte"],
  [/Vnuk/gi, "Enkel"],
  [/Vnučka/gi, "Enkelin"],
  [/Syn/gi, "Sohn"],
  [/Dcera/gi, "Tochter"],
  [/Otec/gi, "Vater"],
  [/Matka/gi, "Mutter"],
  [/Bratr hospodáře/gi, "Bruder des Hofwirts"],
  [/Bratr/gi, "Bruder"],
  [/Sestra/gi, "Schwester"],
  [/Tchyně|Tchýně/gi, "Schwiegermutter"],
  [/Tchán/gi, "Schwiegervater"],
  [/Švagrová/gi, "Schwägerin"],
  [/Švagr/gi, "Schwager"],
  [/Zeť/gi, "Schwiegersohn"],
  [/Snacha/gi, "Schwiegertochter"],
  [/Schovanka/gi, "Pflegetochter"],
  [/Schovanec/gi, "Pflegesohn"],
  [/Příbuzná/gi, "Verwandte"],
  [/Příbuzný/gi, "Verwandter"],
  [/Výměnkářka/gi, "Ausgedingerin"],
  [/Výměnkář/gi, "Ausgedinger"],
  [/Podnájemnice/gi, "Untermieterin"],
  [/Podnájemník/gi, "Untermieter"],
  [/Nájemnice/gi, "Mieterin"],
  [/Nájemník/gi, "Mieter"],
  [/Podruhyně/gi, "Inwohnerin"],
  [/Podruh/gi, "Inwohner"],
  [/Hospodyně/gi, "Wirtschafterin"],
  [/Služebná děvečka/gi, "Dienstmagd"],
  [/Služebná/gi, "Dienstmagd"],
  [/Služka/gi, "Dienstmagd"],
  [/Děvečka/gi, "Magd"],
  [/Čeledín/gi, "Knecht"],
  [/Pacholek u koní/gi, "Pferdeknecht"],
  [/Pacholek/gi, "Pferdeknecht"],
  [/Kočí/gi, "Kutscher"],
  [/Nádenice/gi, "Taglöhnerin"],
  [/Nádeník|Nádenník/gi, "Taglöhner"],
  [/Samostatný rolník/gi, "Selbständiger Landwirt"],
  [/Rolník na vlastním statku/gi, "Bauer auf eigenem Gut"],
  [/Rolník/gi, "Landwirt"],
  [/Sedlák/gi, "Bauer"],
  [/Selka/gi, "Bäuerin"],
  [/Chalupník/gi, "Gärtler / Chaluppner"],
  [/Domkářka/gi, "Häuslerin"],
  [/Domkář/gi, "Häusler"],
  [/Vedení domácnosti a hospodářství/gi, "Führung des Haushalts u. der Wirtschaft"],
  [/Obstarává domácnost a hospodářství/gi, "Besorgt Haushalt u. Wirtschaft"],
  [/Vedení vlastní domácnosti/gi, "Führung des eigenen Haushalts"],
  [/Vedení domácnosti/gi, "Haushaltsführung"],
  [/V domácnosti a hospodářství/gi, "Im Haushalt u. in der Wirtschaft"],
  [/V domácnosti/gi, "Im Haushalt"],
  [/Pomocnice v domácnosti/gi, "Haushaltsgehilfin"],
  [/Pomocnice při hospodářství/gi, "Wirtschaftsgehilfin"],
  [/Pomocník při hospodářství/gi, "Wirtschaftsgehilfe"],
  [/Při polním hospodářství/gi, "In der Feldwirtschaft"],
  [/Při rolnictví/gi, "In der Landwirtschaft"],
  [/Při hospodářství/gi, "In der Wirtschaft"],
  [/Školačka/gi, "Schülerin"],
  [/Školák/gi, "Schüler"],
  [/Žákyně/gi, "Schülerin"],
  [/Žák/gi, "Schüler"],
  [/Dítě v rodině/gi, "Kind in der Familie"],
  [/Dítě v opatrování/gi, "Pflegekind"],
  [/Kojenec/gi, "Säugling"],
  [/Dítě/gi, "Kind"],
  [/Bělič příze/gi, "Garnbleicher"],
  [/Běličská dělnice/gi, "Bleichereiarbeiterin"],
  [/Běličský dělník/gi, "Bleichereiarbeiter"],
  [/Běličství/gi, "Garnbleiche"],
  [/Čistička příze/gi, "Garnputzerin"],
  [/Tkadlena/gi, "Weberin"],
  [/Tkadlec/gi, "Weber"],
  [/Přadlena/gi, "Spinnerin"],
  [/Textilní dělnice/gi, "Textilarbeiterin"],
  [/Textilní dělník/gi, "Textilarbeiter"],
  [/Dělnice v textilce/gi, "Fabriksarbeiterin (Textil)"],
  [/Dělník v bělidle/gi, "Bleichereiarbeiter"],
  [/Kovářský mistr/gi, "Schmiedemeister"],
  [/Kovář a podkovář/gi, "Huf- u.Wagenschmied"],
  [/Kovář/gi, "Schmied"],
  [/Zedník/gi, "Maurer"],
  [/Tesař/gi, "Zimmermann"],
  [/Stolař/gi, "Tischler"],
  [/Kolář/gi, "Wagner"],
  [/Obuvník/gi, "Schuhmacher"],
  [/Krejčí/gi, "Schneider"],
  [/Zámečník/gi, "Schlosser"],
  [/Řezník/gi, "Fleischhauer"],
  [/Hostinský/gi, "Gastwirt"],
  [/Hostinská/gi, "Gastwirtin"],
  [/Obchodník/gi, "Kaufmann"],
  [/Porodní bába/gi, "Hebamme"],
  [/Industriální učitelka/gi, "Industriallehrerin"],
  [/Řídící učitel/gi, "Oberlehrer"],
  [/Učitelka/gi, "Lehrerin"],
  [/Učitel/gi, "Lehrer"],
  [/Farář/gi, "Pfarrer"],
  [/Děkan/gi, "Dechant"],
  [/Obecní chudý/gi, "Ortsarmer"],
  [/ovdovělá|ovdovělý/gi, "verwitwet"],
  [/vdova/gi, "Witwe"],
  [/vdovec/gi, "Witwer"],
  [/svobodná|svobodný/gi, "ledig"],
  [/ženatý|vdaná/gi, "verheiratet"],
  [/nepřítomen/gi, "abwesend"],
  [/v obci od/gi, "im Ort seit"]
];

function translateCensusField(text, lang) {
  if (!text || typeof text !== "string" || lang === "cs") return text;
  let out = translateProseAndUi(text, lang);
  const rules = lang === "de" ? CENSUS_FIELD_RULES_DE : CENSUS_FIELD_RULES_EN;
  for (let i = 0; i < rules.length; i++) {
    out = out.replace(rules[i][0], rules[i][1]);
  }
  return out;
}

function translateProseAndUi(text, lang) {
  if (!text || typeof text !== "string" || lang === "cs") return text;
  const trimmed = text.replace(/\s+/g, " ").trim();
  if (!trimmed) return text;

  const exactMap = i18nData.exactUiMap && i18nData.exactUiMap[lang];
  if (exactMap && exactMap[trimmed]) {
    const lead = text.match(/^\s*/)[0];
    const trail = text.match(/\s*$/)[0];
    return lead + exactMap[trimmed] + trail;
  }
  const tMap = i18nData.terms && i18nData.terms[lang];
  if (tMap && tMap[trimmed]) {
    const lead = text.match(/^\s*/)[0];
    const trail = text.match(/\s*$/)[0];
    return lead + tMap[trimmed] + trail;
  }

  let out = text;
  const rules = lang === "de" ? REGEX_REPLACEMENTS_DE : REGEX_REPLACEMENTS_EN;
  for (let i = 0; i < rules.length; i++) {
    out = out.replace(rules[i][0], rules[i][1]);
  }
  return out;
}

// Synthesize clean, 100% localized English / German house metadata & prose from structured census data
function localizeHouseFromStructuredData(h, lang, explicit) {
  const isDe = lang === "de";
  const num = h.number || h.id;
  const settlement = h.settlement || (h.id.startsWith("medelske_") ? "Medelské" : h.id.startsWith("benkov_") ? "Benkov" : "Dlouhomilov");
  const locSettlement = isDe
    ? (settlement === "Medelské" ? "Dreihofen (Medelské)" : settlement === "Benkov" ? "Benke (Benkov)" : "Lomigsdorf (Dlouhomilov)")
    : settlement;
  const parcel = (h.location && h.location.cadastralParcel) ? h.location.cadastralParcel : "—";

  // Extract main surnames from census or localName
  const surnames = [];
  if (Array.isArray(h.census)) {
    h.census.forEach(c => {
      (c.inhabitants || []).forEach(p => {
        if (!p.name || p.name === "Hospodář rychty") return;
        const parts = p.name.replace(/\(.*?\)/g, "").trim().split(/\s+/);
        let last = parts[parts.length - 1] || "";
        last = last.replace(/ová$/, "");
        if (last && last.length > 2 && !surnames.includes(last)) surnames.push(last);
      });
    });
  }
  const topSurnames = surnames.slice(0, 3).join(", ");

  // 1. Type
  if (explicit && explicit.type) {
    h.type = explicit.type;
  } else if (h.type) {
    h.type = translateProseAndUi(h.type, lang);
  } else {
    h.type = isDe ? "Landwirtschaftliches Anwesen" : "Country Homestead";
  }

  // 2. Name & localName
  if (explicit && explicit.name) {
    h.name = explicit.name;
  } else {
    if (settlement === "Medelské") {
      h.name = isDe ? `Dreihofen (Medelské) Nr. ${num}` : `Medelské No. ${num}`;
    } else if (settlement === "Benkov") {
      h.name = isDe ? `Benke (Benkov) Nr. ${num}` : `Benkov No. ${num}`;
    } else {
      h.name = isDe ? `Haus Nr. ${num}` : `House No. ${num}`;
    }
  }

  if (explicit && explicit.localName) {
    h.localName = explicit.localName;
  } else {
    const prefix = settlement === "Medelské"
      ? (isDe ? `Dreihofen Nr. ${num}` : `Medelské No. ${num}`)
      : settlement === "Benkov"
      ? (isDe ? `Benke Nr. ${num}` : `Benkov No. ${num}`)
      : (isDe ? `Anwesen Nr. ${num}` : `Homestead No. ${num}`);
    h.localName = topSurnames
      ? (isDe ? `${prefix} (${topSurnames})` : `${prefix} (${topSurnames} Family)`)
      : prefix;
  }

  // 3. Heritage & Cadastre status
  if (h.isHeritage && h.uskpNumber) {
    h.heritageDescription = isDe
      ? `Denkmalgeschütztes Objekt im Zentralverzeichnis der Kulturdenkmale der Tschechischen Republik (ÚSKP ${h.uskpNumber}) in der Dörflichen Denkmalzone ${locSettlement}.`
      : `Protected cultural monument registered in the Central List of Cultural Monuments of the Czech Republic (ÚSKP ${h.uskpNumber}) within the ${locSettlement} Village Monument Zone.`;
  } else {
    h.heritageDescription = isDe
      ? `Historisches Anwesen Nr. ${num} in ${locSettlement} (Bauparzelle ${parcel}).`
      : `Historical homestead No. ${num} in ${locSettlement} (building parcel ${parcel}).`;
  }

  h.statusStableCadastre = isDe
    ? `Erfasst im Kaiserlichen Pflichtabdruck des Stabilen Katasters von 1834 in der Katastralgemeinde ${locSettlement} (Bauparzelle ${parcel}).`
    : `Recorded in the 1834 Imperial Imprint of the Stable Cadastre in the cadastral territory of ${locSettlement} (building parcel ${parcel}).`;

  // 4. Description
  if (explicit && explicit.description) {
    h.description = explicit.description;
  } else if (Array.isArray(h.census) && h.census.length > 0) {
    const years = h.census.map(c => c.year).sort();
    const cLatest = h.census[h.census.length - 1];
    const inh = cLatest.inhabitants || [];
    const aptCount = cLatest.familiesCount || 1;
    const samplePeople = inh.slice(0, 4).map(p => `${p.name} (*${p.birthDate || "?"}${p.birthPlace ? ", " + p.birthPlace : ""})`).join("; ");
    if (isDe) {
      h.description = `${h.type} Nr. ${num} in ${locSettlement} (Bauparzelle ${parcel}). Urkundlich erfasst in den Volkszählungen (${years.join(", ")}). Im Zählungsjahr ${cLatest.year} umfasste das Haus ${aptCount} Haushalt(e) mit insgesamt ${inh.length} Bewohnern: ${samplePeople}${inh.length > 4 ? ` u. a.` : "."}`;
    } else {
      h.description = `${h.type} No. ${num} in ${locSettlement} (building parcel ${parcel}). Documented in the population censuses (${years.join(", ")}). In the ${cLatest.year} census, the house comprised ${aptCount} household(s) with ${inh.length} residents: ${samplePeople}${inh.length > 4 ? ` and others.` : "."}`;
    }
  } else {
    h.description = isDe
      ? `Historisches Anwesen Nr. ${num} in ${locSettlement}.`
      : `Historical homestead No. ${num} in ${locSettlement}.`;
  }

  // 5. Stories
  if (Array.isArray(h.stories) && h.stories.length > 0) {
    h.stories.forEach(st => {
      st.title = isDe
        ? `Hauschronik & Bewohner von ${h.localName}`
        : `House Chronicle & Residents of ${h.localName}`;
      st.content = h.description;
      st.text = h.description;
      if (st.source) st.source = translateProseAndUi(st.source, lang);
    });
  }

  // 6. Timeline
  if (Array.isArray(h.timeline)) {
    h.timeline.forEach(tl => {
      if (tl.owner) tl.owner = translateCensusField(tl.owner, lang);
      if (tl.year === "1834") {
        tl.event = isDe
          ? `Verzeichnet im Kaiserlichen Pflichtabdruck des Stabilen Katasters 1834 (${locSettlement}, Bauparzelle ${parcel}).`
          : `Recorded in the 1834 Imperial Imprint of the Stable Cadastre (${locSettlement}, building parcel ${parcel}).`;
      } else if (tl.year === "1679") {
        tl.event = isDe
          ? `Ersteintrag im Grundbuch für Lomigsdorf und Dreihofen (Herrschaft Hohenstadt, Fol. 191, ab 1679).`
          : `Earliest entry in the Land Book for Dlouhomilov and Medelské (Zábřeh Estate, fol. 191, from 1679).`;
      } else {
        const matchCensus = (h.census || []).find(c => String(c.year) === String(tl.year));
        if (matchCensus) {
          const names = (matchCensus.inhabitants || []).slice(0, 4).map(p => `${p.name} (*${p.birthDate || "?"})`).join(", ");
          tl.event = isDe
            ? `Volkszählung ${matchCensus.year}: ${(matchCensus.inhabitants || []).length} Bewohner (${names}${(matchCensus.inhabitants || []).length > 4 ? " u. a." : ""}).`
            : `${matchCensus.year} Population Census: ${(matchCensus.inhabitants || []).length} residents (${names}${(matchCensus.inhabitants || []).length > 4 ? " et al." : ""}).`;
        } else if (tl.event) {
          tl.event = translateCensusField(tl.event, lang);
        }
      }
      if (tl.source) tl.source = translateProseAndUi(tl.source, lang);
      if (tl.scanTitle) tl.scanTitle = translateProseAndUi(tl.scanTitle, lang);
    });
  }

  // 7. Documents
  if (Array.isArray(h.documents)) {
    h.documents.forEach((doc, idx) => {
      const yr = doc.year || "1921";
      doc.title = isDe
        ? `Archivdokument (${yr}) – ${h.name} (#${idx + 1})`
        : `Archival Document (${yr}) – ${h.name} (#${idx + 1})`;
      doc.description = isDe
        ? `Originaler Archivscan (${yr}) für ${h.localName} in ${locSettlement}.`
        : `Original archival scan (${yr}) for ${h.localName} in ${locSettlement}.`;
      if (doc.scanTitle) doc.scanTitle = doc.title;
    });
  }
}

// ============================================================================
// LANGUAGE SWITCHING & DOM / DATA OVERLAY ENGINE (CS / EN / DE)
// ============================================================================

window.currentLang = localStorage.getItem("dlouhomilov_lang") || "cs";
let isTranslatingDom = false;
let domObserverInitialized = false;

function captureBaseCzechData() {
  if (window.__baseCzData) return;
  window.__baseCzData = {
    storyData: typeof storyData !== "undefined" ? JSON.parse(JSON.stringify(storyData)) : null,
    comicData: typeof comicData !== "undefined" ? JSON.parse(JSON.stringify(comicData)) : null,
    housesData: typeof housesData !== "undefined" ? JSON.parse(JSON.stringify(housesData)) : null,
    peopleData: typeof peopleData !== "undefined" ? JSON.parse(JSON.stringify(peopleData)) : null,
    censusRegistryData: typeof censusRegistryData !== "undefined" ? JSON.parse(JSON.stringify(censusRegistryData)) : null,
    historicalMapsData: typeof historicalMapsData !== "undefined" ? JSON.parse(JSON.stringify(historicalMapsData)) : null,
    guideData: typeof guideData !== "undefined" ? JSON.parse(JSON.stringify(guideData)) : null
  };
}

function applyDataOverlay(lang) {
  captureBaseCzechData();
  if (!window.__baseCzData) return;

  // 1. Restore all base Czech data cleanly
  if (window.__baseCzData.storyData && typeof storyData !== "undefined") {
    Object.assign(storyData, JSON.parse(JSON.stringify(window.__baseCzData.storyData)));
  }
  if (window.__baseCzData.comicData && typeof comicData !== "undefined") {
    Object.assign(comicData, JSON.parse(JSON.stringify(window.__baseCzData.comicData)));
  }
  if (window.__baseCzData.housesData && typeof housesData !== "undefined") {
    const clonedH = JSON.parse(JSON.stringify(window.__baseCzData.housesData));
    housesData.length = 0;
    clonedH.forEach(h => housesData.push(h));
  }
  if (window.__baseCzData.peopleData && typeof peopleData !== "undefined") {
    const clonedP = JSON.parse(JSON.stringify(window.__baseCzData.peopleData));
    peopleData.length = 0;
    clonedP.forEach(p => peopleData.push(p));
  }
  if (window.__baseCzData.censusRegistryData && typeof censusRegistryData !== "undefined") {
    const clonedR = JSON.parse(JSON.stringify(window.__baseCzData.censusRegistryData));
    censusRegistryData.length = 0;
    clonedR.forEach(r => censusRegistryData.push(r));
  }
  if (window.__baseCzData.historicalMapsData && typeof historicalMapsData !== "undefined") {
    const clonedM = JSON.parse(JSON.stringify(window.__baseCzData.historicalMapsData));
    historicalMapsData.length = 0;
    clonedM.forEach(m => historicalMapsData.push(m));
  }
  if (window.__baseCzData.guideData && typeof guideData !== "undefined") {
    Object.assign(guideData, JSON.parse(JSON.stringify(window.__baseCzData.guideData)));
  }

  if (lang === "cs") return;

  // 2. Overlay Story Data
  const sOv = i18nData.story && i18nData.story[lang];
  if (sOv && typeof storyData !== "undefined") {
    if (sOv.title) storyData.title = sOv.title;
    if (sOv.subtitle) storyData.subtitle = sOv.subtitle;
    if (sOv.stats && Array.isArray(storyData.stats)) {
      sOv.stats.forEach((st, idx) => {
        if (storyData.stats[idx]) Object.assign(storyData.stats[idx], st);
      });
    }
    if (sOv.chapters && Array.isArray(storyData.chapters)) {
      storyData.chapters.forEach(ch => {
        const chOv = sOv.chapters[ch.id];
        if (chOv) {
          if (chOv.badge) ch.badge = chOv.badge;
          if (chOv.title) ch.title = chOv.title;
          if (chOv.imageCaption) ch.imageCaption = chOv.imageCaption;
          if (chOv.secondaryImageCaption) ch.secondaryImageCaption = chOv.secondaryImageCaption;
          if (chOv.summary) ch.summary = chOv.summary;
          if (chOv.paragraphs) ch.paragraphs = chOv.paragraphs.slice();
          if (chOv.links && Array.isArray(ch.links)) {
            ch.links.forEach((lnk, idx) => {
              if (chOv.links[idx]) lnk.label = chOv.links[idx];
            });
          }
        }
      });
    }
    if (sOv.funFacts && Array.isArray(storyData.funFacts)) {
      storyData.funFacts.forEach(ff => {
        const ffOv = sOv.funFacts[ff.id];
        if (ffOv) {
          if (ffOv.tag) ff.tag = ffOv.tag;
          if (ffOv.title) ff.title = ffOv.title;
          if (ffOv.text) ff.text = ffOv.text;
          if (ffOv.actionLabel) ff.actionLabel = ffOv.actionLabel;
        }
      });
    }
  }

  // 3. Overlay Comic Data
  const cOv = i18nData.comic && i18nData.comic[lang];
  if (cOv && typeof comicData !== "undefined") {
    if (cOv.title) comicData.title = cOv.title;
    if (cOv.subtitle) comicData.subtitle = cOv.subtitle;
    if (cOv.pages && Array.isArray(comicData.pages)) {
      comicData.pages.forEach(pg => {
        const pgOv = cOv.pages[pg.id];
        if (pgOv) {
          if (pgOv.title) pg.title = pgOv.title;
          if (pgOv.subtitle) pg.subtitle = pgOv.subtitle;
          if (pgOv.panels && Array.isArray(pg.panels)) {
            pg.panels.forEach(pn => {
              const pnOv = pgOv.panels[pn.id];
              if (pnOv) {
                if (pnOv.location) pn.location = pnOv.location;
                if (pnOv.title) pn.title = pnOv.title;
                if (pnOv.realPhotoTitle) pn.realPhotoTitle = pnOv.realPhotoTitle;
                if (pnOv.narrator) pn.narrator = pnOv.narrator;
                if (pnOv.sourceNote) pn.sourceNote = pnOv.sourceNote;
                if (pnOv.bubbles && Array.isArray(pn.bubbles)) {
                  pn.bubbles.forEach((b, idx) => {
                    if (pnOv.bubbles[idx]) {
                      b.speaker = pnOv.bubbles[idx].speaker;
                      b.text = pnOv.bubbles[idx].text;
                    }
                  });
                }
                if (pnOv.actions && Array.isArray(pn.actions)) {
                  pn.actions.forEach((act, idx) => {
                    if (pnOv.actions[idx]) act.label = pnOv.actions[idx];
                  });
                }
              }
            });
          }
        }
      });
    }
  }

  // 4. Overlay People Data (all 11 profiles)
  const pOv = i18nData.people && i18nData.people[lang];
  if (pOv && typeof peopleData !== "undefined" && Array.isArray(peopleData)) {
    peopleData.forEach(p => {
      const ov = pOv[p.id];
      if (ov) {
        if (ov.name) p.name = ov.name;
        if (ov.lifeSpan) p.lifeSpan = ov.lifeSpan;
        if (ov.role) p.role = ov.role;
        if (ov.categoryLabel) p.categoryLabel = ov.categoryLabel;
        if (ov.father) p.father = ov.father;
        if (ov.mother) p.mother = ov.mother;
        if (ov.spouse) p.spouse = ov.spouse;
        if (ov.children) p.children = ov.children.slice();
        if (ov.biography) p.biography = ov.biography;
        if (ov.events && Array.isArray(p.events)) {
          p.events.forEach((ev, idx) => {
            if (ov.events[idx]) {
              if (ov.events[idx].type) ev.type = ov.events[idx].type;
              if (ov.events[idx].date) ev.date = ov.events[idx].date;
              if (ov.events[idx].place) ev.place = ov.events[idx].place;
              if (ov.events[idx].description) ev.description = ov.events[idx].description;
              if (ov.events[idx].translation) ev.translation = ov.events[idx].translation;
              if (ov.events[idx].scanTitle) ev.scanTitle = ov.events[idx].scanTitle;
            }
          });
        }
      }
    });
  }

  // 5. Overlay Historical Maps Data (including annotation)
  const mOv = i18nData.maps && i18nData.maps[lang];
  if (mOv && typeof historicalMapsData !== "undefined" && Array.isArray(historicalMapsData)) {
    historicalMapsData.forEach(m => {
      const ov = mOv[m.id];
      if (ov) {
        if (ov.title) m.title = ov.title;
        if (ov.subTitle) m.subTitle = ov.subTitle;
        if (ov.period) m.period = ov.period;
        if (ov.description) m.description = ov.description;
        if (ov.keyFeatures) m.keyFeatures = ov.keyFeatures.slice();
        m.annotation = ov.annotation || ov.description || m.annotation;
      }
    });
  }

  // 6. Overlay Guide Data
  const gOv = i18nData.guide && i18nData.guide[lang];
  if (gOv && typeof guideData !== "undefined") {
    if (gOv.jurisdiction && guideData.jurisdiction) {
      const origCoa = guideData.jurisdiction.coatOfArms || {};
      Object.assign(guideData.jurisdiction, gOv.jurisdiction);
      if (gOv.jurisdiction.coatOfArms) {
        guideData.jurisdiction.coatOfArms = Object.assign({}, origCoa, gOv.jurisdiction.coatOfArms);
      }
    }
    if (gOv.houseNumberingContinuity && guideData.houseNumberingContinuity) {
      Object.assign(guideData.houseNumberingContinuity, gOv.houseNumberingContinuity);
    }
    if (gOv.archives && Array.isArray(guideData.archives)) {
      guideData.archives.forEach((arc, idx) => {
        if (gOv.archives[idx]) Object.assign(arc, gOv.archives[idx]);
      });
    }
    if (gOv.dictionary && Array.isArray(guideData.dictionary)) {
      guideData.dictionary.forEach((item, idx) => {
        if (gOv.dictionary[idx]) Object.assign(item, gOv.dictionary[idx]);
      });
    }
  }

  // 7. Overlay Houses Data (all 158 houses)
  const hOvMap = (i18nData.houses && i18nData.houses[lang]) || {};
  if (typeof housesData !== "undefined" && Array.isArray(housesData)) {
    housesData.forEach(h => {
      // First translate census inhabitant fields
      if (Array.isArray(h.census)) {
        h.census.forEach(c => {
          if (c.status) c.status = translateCensusField(c.status, lang);
          if (c.note) c.note = translateCensusField(c.note, lang);
          if (Array.isArray(c.inhabitants)) {
            c.inhabitants.forEach(p => {
              if (p.relation) p.relation = translateCensusField(p.relation, lang);
              if (p.occupation) p.occupation = translateCensusField(p.occupation, lang);
              if (p.notes) p.notes = translateCensusField(p.notes, lang);
              if (p.literacy) p.literacy = translateCensusField(p.literacy, lang);
            });
          }
        });
      }
      localizeHouseFromStructuredData(h, lang, hOvMap[h.id]);
    });
  }

  // 8. Overlay Census Registry Data
  if (typeof censusRegistryData !== "undefined" && Array.isArray(censusRegistryData)) {
    censusRegistryData.forEach(r => {
      if (r.categoryLabel) r.categoryLabel = translateCensusField(r.categoryLabel, lang);
      if (r.relation) r.relation = translateCensusField(r.relation, lang);
      if (r.occupation) r.occupation = translateCensusField(r.occupation, lang);
      if (r.notes) r.notes = translateCensusField(r.notes, lang);
    });
  }
}

function translateDomTree(rootEl, lang) {
  if (!rootEl || typeof document === "undefined") return;
  isTranslatingDom = true;
  try {
    // 1. Walk all text nodes
    const walker = document.createTreeWalker(rootEl, NodeFilter.SHOW_TEXT, null, false);
    let node;
    while ((node = walker.nextNode())) {
      const parent = node.parentElement;
      if (!parent) continue;
      const tag = parent.tagName;
      if (tag === "SCRIPT" || tag === "STYLE" || tag === "NOSCRIPT") continue;
      if (parent.hasAttribute("data-lang-btn")) continue;

      if (node.__origCz === undefined) {
        node.__origCz = node.nodeValue;
      }
      if (lang === "cs") {
        if (node.nodeValue !== node.__origCz) {
          node.nodeValue = node.__origCz;
        }
      } else {
        const translated = translateProseAndUi(node.__origCz, lang);
        if (node.nodeValue !== translated) {
          node.nodeValue = translated;
        }
      }
    }

    // 2. Walk translatable attributes (placeholder, title, data-label)
    const attrEls = rootEl.querySelectorAll ? rootEl.querySelectorAll("[placeholder],[title],[data-label]") : [];
    attrEls.forEach(el => {
      if (!el.__origCzAttrs) el.__origCzAttrs = {};
      ["placeholder", "title", "data-label"].forEach(attr => {
        if (!el.hasAttribute(attr)) return;
        if (el.__origCzAttrs[attr] === undefined) {
          el.__origCzAttrs[attr] = el.getAttribute(attr);
        }
        if (lang === "cs") {
          el.setAttribute(attr, el.__origCzAttrs[attr]);
        } else {
          el.setAttribute(attr, translateProseAndUi(el.__origCzAttrs[attr], lang));
        }
      });
    });
  } finally {
    isTranslatingDom = false;
  }
}

function setupDomTranslationObserver() {
  if (domObserverInitialized || typeof MutationObserver === "undefined" || typeof document === "undefined" || !document.body) return;
  domObserverInitialized = true;
  const observer = new MutationObserver(mutations => {
    if (isTranslatingDom || !window.currentLang || window.currentLang === "cs") return;
    isTranslatingDom = true;
    try {
      mutations.forEach(m => {
        if (m.type === "childList") {
          m.addedNodes.forEach(n => {
            if (n.nodeType === 1) {
              translateDomTree(n, window.currentLang);
            } else if (n.nodeType === 3 && n.parentElement) {
              if (n.__origCz === undefined) n.__origCz = n.nodeValue;
              n.nodeValue = translateProseAndUi(n.__origCz, window.currentLang);
            }
          });
        }
      });
    } finally {
      isTranslatingDom = false;
    }
  });
  observer.observe(document.body, { childList: true, subtree: true });
}

function applyDomTranslations(lang) {
  const ui = (i18nData.ui && i18nData.ui[lang]) || i18nData.ui.cs;
  document.documentElement.lang = lang;
  if (ui.htmlTitle) document.title = ui.htmlTitle;

  // Update active state on language buttons
  document.querySelectorAll("[data-lang-btn]").forEach(btn => {
    const bLang = btn.getAttribute("data-lang-btn");
    if (bLang === lang) {
      btn.classList.add("bg-amber-600", "text-white", "border-amber-400", "shadow-sm");
      btn.classList.remove("bg-amber-950/80", "text-amber-200", "border-amber-700/80");
    } else {
      btn.classList.remove("bg-amber-600", "text-white", "border-amber-400", "shadow-sm");
      btn.classList.add("bg-amber-950/80", "text-amber-200", "border-amber-700/80");
    }
  });

  // Update Story main title & subtitle explicitly from storyData
  if (typeof storyData !== "undefined") {
    const stTitleEl = document.getElementById("story-main-title");
    const stSubEl = document.getElementById("story-main-subtitle");
    if (stTitleEl && storyData.title) {
      stTitleEl.innerHTML = `<span>📖</span> ${storyData.title}`;
      stTitleEl.childNodes.forEach(n => { delete n.__origCz; });
    }
    if (stSubEl && storyData.subtitle) {
      stSubEl.textContent = storyData.subtitle;
      if (stSubEl.firstChild) delete stSubEl.firstChild.__origCz;
    }
  }

  // Translate entire DOM tree (all static HTML + all dynamically rendered sections)
  if (document.body) {
    translateDomTree(document.body, lang);
  }
}

window.switchLanguage = function(lang) {
  if (!["cs", "en", "de"].includes(lang)) lang = "cs";
  window.currentLang = lang;
  try {
    localStorage.setItem("dlouhomilov_lang", lang);
  } catch (e) {}

  applyDataOverlay(lang);

  // Re-render all dynamic sections so they pick up the localized data
  if (typeof updateDynamicCounters === "function" && typeof housesData !== "undefined") updateDynamicCounters();
  if (typeof renderNewsSection === "function") renderNewsSection();
  if (typeof renderReferencesSection === "function") renderReferencesSection();
  if (typeof renderStorySection === "function") renderStorySection();
  if (typeof renderHouseCards === "function" && typeof housesData !== "undefined") renderHouseCards();
  if (typeof renderMapMarkers === "function" && typeof map !== "undefined" && map) {
    try { renderMapMarkers(); } catch (e) {}
  }
  if (typeof currentHouseId !== "undefined" && currentHouseId && typeof housesData !== "undefined" && typeof renderHouseDetailContent === "function") {
    const updatedHouse = housesData.find(h => h.id === currentHouseId);
    if (updatedHouse) renderHouseDetailContent(updatedHouse);
  }
  if (typeof populateHouseFilterDropdown === "function" && typeof censusRegistryData !== "undefined") populateHouseFilterDropdown();
  if (typeof applyRegistryFilters === "function" && document.getElementById("census-registry-table-body") && typeof censusRegistryData !== "undefined") {
    applyRegistryFilters(false);
  } else if (typeof renderCensusRegistryTable === "function" && typeof censusRegistryData !== "undefined") {
    renderCensusRegistryTable();
  }
  if (typeof renderPeopleSection === "function" && typeof peopleData !== "undefined") renderPeopleSection();
  if (typeof renderDemographySection === "function" && typeof housesData !== "undefined") renderDemographySection();
  if (typeof renderHistoricalMapsSection === "function" && typeof historicalMapsData !== "undefined") renderHistoricalMapsSection();
  if (typeof renderGuideSection === "function" && typeof guideData !== "undefined") renderGuideSection();
  if (typeof renderDictionary === "function" && typeof guideData !== "undefined") renderDictionary();

  applyDomTranslations(lang);
};

window.initI18n = function() {
  captureBaseCzechData();
  // Snapshot original Czech text nodes in static HTML before any language switch
  if (document.body) {
    translateDomTree(document.body, "cs");
  }
  setupDomTranslationObserver();
  if (window.currentLang && window.currentLang !== "cs") {
    window.switchLanguage(window.currentLang);
  } else {
    applyDomTranslations("cs");
  }
};
