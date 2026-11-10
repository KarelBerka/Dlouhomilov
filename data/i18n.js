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
      storyPillarBadge: "1. Pilíř • Kronika údolí (1356–1949)",
      storyLocalitiesBadge: "Dlouhomilov • Medelské • Benkov",
      storyTabChapters: "Kapitoly příběhu (10)",
      storyTabFacts: "Zajímavosti z matrik (11)",
      storyTabComic: "Komiksová kronika (12)",
      storyTabAll: "Vše",
      tocTitle: "Výběr kapitoly příběhu (I.–X.):",
      tocAllShown: "Zobrazeno všech 10 kapitol pod sebou",
      tocSingleShown: "Čtení po kapitolách (aktivní Kapitola",
      tocBtnSingle: "Přepnout na čtečku po 1 kapitole",
      tocBtnAll: "Rozbalit všech 10 kapitol pod sebou",
      tocMdLink: "📄 Dokument .md ↗",
      chapterWord: "Kapitola",
      chapterReaderBadge: "Čtečka kapitol",
      relatedInApp: "Související v aplikaci:",
      prevChapter: "Předchozí:",
      nextChapter: "Další kapitola:",
      showAll10Chapters: "📖 Zobrazit všech 10 kapitol",
      goToFacts: "✨ Přejít na Zajímavosti z matrik (11)",
      factsHeading: "Zajímavosti z matrik, gruntovních knih a sčítání lidu",
      factsSubheading: "Jedenáct mikrohistorických příběhů a badatelských objevů přímo z rukopisných pramenů farnosti Dlouhomilov (1356–1949)",
      factsMdBtn: "📄 Plný text v Markdownu ↗",
      comicBadge: "🎨 Grafický výstup z pramenů",
      comicMeta: "4 kapitoly • 12 ilustrovaných obrazů • Všechny památkově chráněné objekty (ÚSKP)",
      comicHeading: "Kronika údolí v obrazech: Komiks o historii Dlouhomilova, Medelského a Benkova (1356–1949)",
      comicDesc: "Každý obraz vychází ze skutečných zápisů v gruntovních knihách, farních matrikách a sčítacích operátech. Kliknutím na ilustraci ji zvětšíte, tlačítky pod panelem přejdete přímo na dané stavení, rodopis nebo archivní sken.",
      comicPage: "Strana",
      comicAllPages: "Vše (I.–IV.)",
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
      demoSubtitle: "Komplexní statistický rozbor všech 1 267 dochovaných sčítacích záznamů (1857–1921) a 158 stavení v Dlouhomilově, Medelském a Benkově: věková pyramida, odkud přicházeli obyvatelé a majetková stratifikace podle chovu dobytka a čeledi.",
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
      storyPillarBadge: "Pillar 1 • Valley Chronicle (1356–1949)",
      storyLocalitiesBadge: "Dlouhomilov (Lomigsdorf) • Medelské (Dreihofen) • Benkov (Benke)",
      storyTabChapters: "Story Chapters (10)",
      storyTabFacts: "Parish Curiosities (11)",
      storyTabComic: "Illustrated Chronicle (12)",
      storyTabAll: "All",
      tocTitle: "Select Story Chapter (I–X):",
      tocAllShown: "Showing all 10 chapters stacked",
      tocSingleShown: "Single-chapter reader (active Chapter",
      tocBtnSingle: "Switch to single-chapter reader",
      tocBtnAll: "Expand all 10 chapters stacked",
      tocMdLink: "📄 .md Document ↗",
      chapterWord: "Chapter",
      chapterReaderBadge: "Chapter Reader",
      relatedInApp: "Related in the Wiki:",
      prevChapter: "Previous:",
      nextChapter: "Next Chapter:",
      showAll10Chapters: "📖 Show all 10 chapters",
      goToFacts: "✨ Go to Parish Curiosities (11)",
      factsHeading: "Curiosities & Discoveries from Parish Registers, Land Books & Censuses",
      factsSubheading: "Eleven micro-historical stories and archival discoveries directly from manuscript sources of the Dlouhomilov parish (1356–1949)",
      factsMdBtn: "📄 Full text in Markdown ↗",
      comicBadge: "🎨 Illustrated Archival Chronicle",
      comicMeta: "4 Chapters • 12 Illustrated Panels • All Listed Heritage Homesteads (ÚSKP)",
      comicHeading: "Valley Chronicle in Pictures: The Story of Dlouhomilov, Medelské & Benkov (1356–1949)",
      comicDesc: "Every panel is based on authentic entries in land books, parish registers, and census returns. Click any illustration to zoom in, or use the buttons below each panel to jump directly to the homestead, family profile, or archival scan.",
      comicPage: "Page",
      comicAllPages: "All (I–IV)",
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
      demoSubtitle: "Comprehensive statistical analysis of all 1,267 preserved census records (1857–1921) and 158 homesteads across Dlouhomilov, Medelské, and Benkov: age pyramid, migration origins, and household wealth stratification based on livestock and farm servants.",
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
      storyPillarBadge: "1. Säule • Chronik des Tals (1356–1949)",
      storyLocalitiesBadge: "Lomigsdorf (Dlouhomilov) • Dreihofen (Medelské) • Benke (Benkov)",
      storyTabChapters: "Kapitel der Chronik (10)",
      storyTabFacts: "Aus den Matriken (11)",
      storyTabComic: "Bilderchronik (12)",
      storyTabAll: "Alle",
      tocTitle: "Kapitelauswahl der Ortschronik (I.–X.):",
      tocAllShown: "Alle 10 Kapitel untereinander angezeigt",
      tocSingleShown: "Einzelkapitel-Leseansicht (aktiv: Kapitel",
      tocBtnSingle: "Zur Einzelkapitel-Ansicht wechseln",
      tocBtnAll: "Alle 10 Kapitel untereinander aufklappen",
      tocMdLink: "📄 .md-Dokument ↗",
      chapterWord: "Kapitel",
      chapterReaderBadge: "Kapitel-Leser",
      relatedInApp: "Verknüpfungen im Wiki:",
      prevChapter: "Vorheriges:",
      nextChapter: "Nächstes Kapitel:",
      showAll10Chapters: "📖 Alle 10 Kapitel anzeigen",
      goToFacts: "✨ Zu den Besonderheiten aus den Matriken (11)",
      factsHeading: "Besonderheiten aus Kirchenbüchern, Grundbüchern und Volkszählungen",
      factsSubheading: "Elf mikrohistorische Geschichten und Entdeckungen direkt aus den Handschriften der Pfarre Lomigsdorf / Dlouhomilov (1356–1949)",
      factsMdBtn: "📄 Volltext als Markdown ↗",
      comicBadge: "🎨 Illustrierte Quellenchronik",
      comicMeta: "4 Kapitel • 12 historische Bilder • Alle denkmalgeschützten Höfe (ÚSKP)",
      comicHeading: "Chronik des Tals in Bildern: Die Geschichte von Lomigsdorf, Dreihofen und Benke (1356–1949)",
      comicDesc: "Jedes Bild beruht auf authentischen Einträgen in Grundbüchern, Pfarrmatriken und Volkszählungsbögen. Durch Anklicken lässt sich die Illustration vergrößern; die Schaltflächen führen direkt zum jeweiligen Gehöft, Lebenslauf oder Archivscan.",
      comicPage: "Seite",
      comicAllPages: "Alle (I.–IV.)",
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
      demoSubtitle: "Statistische Gesamtauswertung aller 1 267 erhaltenen Volkszählungseinträge (1857–1921) und 158 Anwesen in Lomigsdorf (Dlouhomilov), Dreihofen (Medelské) und Benke (Benkov): Alterspyramide, Herkunftsorte und soziale Schichtung nach Viehbestand und Gesinde.",
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
    subtitle: "From a medieval forest-field village beneath Brníčko Castle through a Baroque parish, hereditary farmsteads, and the hamlet of Medelské to coexistence with German-speaking Benkov on the Sudetenland language border (1356–1949).",
    stats: [
      { label: "First Written Mention", value: "1356", detail: "Under Brníčko Castle" },
      { label: "Historical Settlements", value: "3 Villages", detail: "Dlouhomilov • Medelské • Benkov" },
      { label: "Continuity at No. 22 & 29", value: "1679–1949", detail: "Dvořák family for over 270 years" },
      { label: "Processed Registers & Sheets", value: "928 + 380", detail: "Parish entries & census records" }
    ],
    chapters: {
      "kap-1": {
        badge: "Landscape & Parish",
        title: "The Valley beneath Brníčko and the Moving Parish",
        summary: "How a medieval forest-field village grew along the Dlouhomilov stream and why ancestors had to travel first to Dubicko and then to Rohle for baptisms and weddings.",
        paragraphs: [
          "Dlouhomilov (<em>Lomigsdorf</em>, in older sources <em>Dluhomilow</em>) developed from the High Middle Ages as a classic <strong>forest-field village (Waldhufendorf)</strong> in the narrow valley of the Dlouhomilov stream beneath Bukovická Mountain (526 m) and the ruins of Brníčko Castle (<em>Brünles</em>). Its first written mention in <strong>1356</strong> already records a well-established subject village belonging to the Brníčko and later Zábřeh (<em>Hohenstadt</em>) manor. The spine of the village was the stream floodplain with a millrace (documented at <button onclick=\"openHouseDetail('cp3')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">House No. 3</button>), from which long strip-fields of peasant farmsteads stretched perpendicularly up to the wooded ridges.",
          "On the oldest maps of Moravia – <strong>Müller's Map of 1716</strong> and <strong>Wieland's Map of 1726</strong> – two sister villages appear side by side: valley <em>Lomigsdorf / Dlohomilow</em> and upland <em>Bentke</em> (Benkov). The <strong>First Military (Josephinian) Survey of 1764–1768</strong> faithfully depicts the brick church in red on the rise in the center of Dlouhomilov, the rows of farmsteads along both banks of the stream, and the meadow road climbing north to the hamlet of <strong>Medelské</strong> (<em>Dreihofen</em>).",
          "Anyone tracing the oldest inhabitants in parish registers encounters the remarkable <strong>journey of the Dlouhomilov parish</strong>: until <strong>1762</strong>, residents of Dlouhomilov, Medelské, and Benkov walked for baptisms, weddings, and funerals to the parish of <strong>Dubicko</strong> (registers from 1650), between <strong>1763 and 1784/1786</strong> to neighboring <strong>Rohle</strong>, and only the reforms of Emperor Joseph II brought an independent parish curation in <strong>1784/1786</strong> directly at the late-Baroque <button onclick=\"openHouseDetail('cp1')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">Church of All Saints (No. 1)</button>, the <button onclick=\"openHouseDetail('cp2')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">Rectory (No. 2)</button>, and the <button onclick=\"openHouseDetail('cp12')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">Old School (No. 12)</button>."
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
        summary: "A Czech farming village in the valley, the northern hamlet of Three Farms (Medelské / Dreihofen) with its own house-number series, and the upland German village of Benkov (Benke) sharing the same parish church.",
        paragraphs: [
          "In the parish registers of Dlouhomilov (<em>Zá II 1</em> to <em>Zá II 10</em>, 1784–1949), the fates of <strong>three distinct settlements</strong> intertwine, each with its own house numbering and its own landscape and linguistic character:",
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
        summary: "From the Merta family of hereditary reeves (Erbrichter) through the Krobots and Pavlíks to three households, a needlework teacher, and 18-day-old Jitřenka in February 1921.",
        paragraphs: [
          "The grandest secular building in the village since the 18th century was the <button onclick=\"openHouseDetail('cp7')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">former Hereditary Reeve's Estate (Erbgericht, No. 7)</button> on the eastern side of the village green – a massive two-story manor house with a Baroque core and four-wing courtyard (Cultural Monument ÚSKP 20137/8-2353). The reeve guarded the village chest and seal, supervised corvée labor obligations, and settled neighborly disputes.",
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
        summary: "How two Dvořák brothers married two Kouřil sisters from No. 24 on the same day, just thirteen days before their father's death.",
        paragraphs: [
          "Listed heritage <button onclick=\"openHouseDetail('cp22')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">Farmstead No. 22 (Dvořák Estate)</button> provides the strongest proof of continuous house numbering in Dlouhomilov: already in <strong>1786</strong>, 21-year-old farmer's son <strong>Pavel Dvořák (*1763) 'from Dlouhomilov No. 22'</strong> married Marina Weinlich in Brníčko. Their son <strong>Petr Dvořák (*1793)</strong> died at No. 22 as a retired farmer on December 9, 1878 at the age of 84.",
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
        badge: "20th Century",
        title: "Coexistence on the Border and Post-War Transformation (1938–1960)",
        summary: "Annexation into the Sudetenland in 1938, the war years, and the post-war resettlement of Benkov before the administrative merger of 1960.",
        paragraphs: [
          "In autumn <strong>1938</strong>, the Munich Agreement incorporated the entire valley into the Reichsgau <em>Sudetenland</em>, as shown on the <button onclick=\"openMapCompareModal('sudety1940')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">1940 administrative map of the Hohenstadt (Zábřeh) and Mährisch Schönberg (Šumperk) districts</button>. Czech Dlouhomilov and Medelské nevertheless preserved their family continuity on the farmsteads throughout the war years, when parish priest <strong>Fr. Mořic Špaček</strong> served at Rectory No. 2.",
          "After <strong>1945</strong>, neighboring German-speaking <strong>Benkov (Benke)</strong> underwent the deepest transformation. Following the post-war expulsion of most German families, new settlers from inland Bohemia, Moravia, and Wallachia moved into the Benkov homesteads (in register <em>Zá II 10</em> for 1945–1949 appear the <em>Zbranek, Mičulka, Chrastina, Sitař, Rýznar, and Krejčí</em> families). In <strong>1960</strong>, Benkov was administratively united with Dlouhomilov and Medelské into a single municipality."
        ],
        links: [
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
      }
    }
  },
  de: {
    title: "Die Geschichte von Lomigsdorf (Dlouhomilov), Dreihofen (Medelské) und Benke (Benkov)",
    subtitle: "Vom mittelalterlichen Waldhufendorf unter der Burg Brünles (Brníčko) über die barocke Pfarre, die Erbhöfe und den Weiler Dreihofen (Medelské) bis zum Zusammenleben mit der deutschen Nachbargemeinde Benke (Benkov) an der Sprachgrenze des Sudetenlandes (1356–1949).",
    stats: [
      { label: "Erste urkundliche Erwähnung", value: "1356", detail: "Unter der Burg Brünles (Brníčko)" },
      { label: "Historische Ortsteile", value: "3 Orte", detail: "Lomigsdorf • Dreihofen • Benke" },
      { label: "Kontinuität Nr. 22 & 29", value: "1679–1949", detail: "Geschlecht Dvořák über 270 Jahre" },
      { label: "Erfasste Matriken & Bögen", value: "928 + 380", detail: "Matrikeneinträge & Zählbögen" }
    ],
    chapters: {
      "kap-1": {
        badge: "Landschaft & Pfarre",
        title: "Das Tal unter der Burg Brünles (Brníčko) und die Wanderung der Pfarre",
        summary: "Wie das mittelalterliche Waldhufendorf im Tal des Lomigsdorfer Baches entstand und warum die Vorfahren zu Taufen und Trauungen zuerst nach Dubitzko (Dubicko) und später nach Rohle pilgern mussten.",
        paragraphs: [
          "Lomigsdorf (tschechisch <strong>Dlouhomilov</strong>, in älteren Quellen <em>Dluhomilow</em>) wuchs seit dem Hochmittelalter als klassisches <strong>Waldhufendorf</strong> im engen Tal des Lomigsdorfer Baches unterhalb des Berges Bukovická (526 m ü. M.) und der Burgruine Brünles (<em>Brníčko</em>). Die erste urkundliche Erwähnung aus dem Jahr <strong>1356</strong> zeigt es bereits als entwickeltes untertäniges Dorf der Herrschaft Brünles und später Hohenstadt (<em>Zábřeh</em>). Das Rückgrat des Ortes bildete die Bachaue mit dem Mühlgraben (belegt bei <button onclick=\"openHouseDetail('cp3')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">Nr. 3</button>), an die sich beiderseits lange Waldhufen der Bauerngüter bis zu den bewaldeten Kämmen anschlossen.",
          "Auf den ältesten Karten Mährens – der <strong>Müller-Karte von 1716</strong> und der <strong>Wieland-Karte von 1726</strong> – erscheinen zwei Schwesterdörfer in unmittelbarer Nachbarschaft: im Tal <em>Lomigsdorf / Dlohomilow</em> und höher auf den Hügeln <em>Bentke / Benke</em> (Benkov). Die <strong>I. Josephinische Landesaufnahme (1764–1768)</strong> zeichnet bereits detailgetreu die rot markierte gemauerte Kirche auf der Anhöhe in der Ortsmitte von Lomigsdorf, die Bauernhöfe beiderseits des Baches sowie den Wiesenweg nach Norden in den Weiler <strong>Dreihofen / Medelské</strong>.",
          "Wer die ältesten Vorfahren in den Kirchenbüchern sucht, stößt auf die bemerkenswerte <strong>Wanderung der Pfarre Lomigsdorf</strong>: Bis <strong>1762</strong> gingen die Einwohner von Lomigsdorf (Dlouhomilov), Dreihofen (Medelské) und Benke (Benkov) zu Taufen, Trauungen und Begräbnissen in die Pfarre <strong>Dubitzko (Dubicko)</strong> (Matriken ab 1650), in den Jahren <strong>1763–1784/1786</strong> ins benachbarte <strong>Rohle</strong>, und erst die Josephinischen Reformen brachten <strong>1784/1786</strong> eine eigene Lokalie direkt bei der spätbarocken <button onclick=\"openHouseDetail('cp1')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">Allerheiligenkirche (Nr. 1)</button>, dem <button onclick=\"openHouseDetail('cp2')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">Pfarrhof (Nr. 2)</button> und der <button onclick=\"openHouseDetail('cp12')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">Alten Schule (Nr. 12)</button>."
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
        summary: "Das tschechische Bauerndorf im Tal, der nördliche Weiler Dreihofen (Medelské) mit eigener Hausnummernreihe und das deutsche Höhendorf Benke (Benkov), eingepfarrt zur selben Kirche.",
        paragraphs: [
          "In den Matrikenbüchern des Pfarramtes Lomigsdorf / Dlouhomilov (<em>Zá II 1</em> bis <em>Zá II 10</em> aus den Jahren 1784–1949) verflechten sich ständig die Schicksale <strong>dreier unterschiedlicher Siedlungen</strong>, von denen jede ihre eigene Konskriptionsnummerierung sowie einen eigenen landschaftlichen und sprachlichen Charakter besaß:",
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
        summary: "Vom Erbrichtergeschlecht Merta über die Familien Krobot und Pavlík bis zu drei Haushalten, einer Handarbeitslehrerin und der 18 Tage alten Jitřenka im Februar 1921.",
        paragraphs: [
          "Das stattlichste weltliche Gebäude im Ort war seit dem 18. Jahrhundert das <button onclick=\"openHouseDetail('cp7')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">ehemalige Erbgericht (Nr. 7)</button> an der Ostseite des Dorfplatzes – ein mächtiger zweigeschossiger Bau mit barockem Kern und Vierkanthof (Kulturdenkmal ÚSKP 20137/8-2353). Der Erbrichter verwahrte die Gemeindetruhe und das Gemeindesiegel, überwachte die Robotpflichten und schlichtete Nachbarschaftsstreitigkeiten.",
          "Die Volkszählungsbögen von <strong>1857–1921</strong> zeigen das Erbgericht Nr. 7 als lebendigen Großhof, in dem unter einem Dach bis zu <strong>23 Personen</strong> lebten (im Jahr 1869). Mitte des 19. Jahrhunderts wirtschaftete hier das Erbrichtergeschlecht <strong>Merta</strong> (<em>Franz Merta</em>, *1804), gefolgt von den Familien <strong>Krobot</strong>, <strong>Cink</strong> und um die Jahrhundertwende dem Landwirt <strong>František Pavlík</strong> (*1855).",
          "Bei der Volkszählung am <strong>15. Februar 1921</strong> bewohnten Nr. 7 drei getrennte Haushalte (14 Personen): Im Hauptteil wirtschaftete Landwirt <strong>František Hvížď</strong> (*1879 aus Триtschein / Třeština) mit Gattin Anna (*1886), fünf Kindern und Gesinde. In der zweiten Wohnung lebte die Witwe <strong>Mathilda Ptáčková</strong> (*1863 aus Rowenz / Rovensko) mit ihrer Tochter <strong>Eliška Ptáčková</strong> (*1889, Industriallehrerin an der Volksschule in Lomigsdorf), der verheirateten Tochter Marie Kvapilová (*1894) und der erst 18 Tage alten Enkelin <strong>Jitřenka Kvapilová</strong> (*28. 1. 1921 in Olmütz). Den dritten Haushalt bildeten die Ausgedinger Jakub und Anna Navrátil."
        ],
        links: [
          "🏛️ Detail des Erbgerichts (Nr. 7)",
          "📜 Stabiler Kataster 1834"
        ]
      },
      "kap-5": {
        badge: "Geschlecht Dvořák • Nr. 29",
        title: "Bauerngut Nr. 29 (Dvořák-Hof): Von 1679 über einen Prager Juristen bis zum Schlossbrand von Blauda",
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
        summary: "Wie zwei Brüder Dvořák an einem einzigen Tag zwei Schwestern Kouřil aus Nr. 24 heirateten – nur dreizehn Tage vor dem Tod des Brautvaters.",
        paragraphs: [
          "Das denkmalgeschützte <button onclick=\"openHouseDetail('cp22')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">Bauerngut Nr. 22 (bei Dvořák)</button> liefert den stärksten Beweis für die Kontinuität der Hausnummern in Lomigsdorf: Bereits <strong>1786</strong> heiratete in Brünles (Brníčko) der 21-jährige Bauernsohn <strong>Pavel Dvořák (*1763) „aus Lomigsdorf Nr. 22“</strong> Marina Weinlich. Ihr Sohn <strong>Petr Dvořák (*1793)</strong> starb auf Nr. 22 als Ausgedinger am 9. Dezember 1878 im Alter von 84 Jahren.",
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
        badge: "20. Jahrhundert",
        title: "Zusammenleben an der Sprachgrenze und Nachkriegswandel (1938–1960)",
        summary: "Die Eingliederung in den Reichsgau Sudetenland 1938, die Kriegsjahre und die Neubesiedlung von Benke (Benkov) vor dem Zusammenschluss beider Gemeinden 1960.",
        paragraphs: [
          "Der Herbst <strong>1938</strong> und das Münchner Abkommen gliederten das gesamte Tal in den Reichsgau <em>Sudetenland</em> (Landkreis Hohenstadt) ein, wie die zeitgenössische <button onclick=\"openMapCompareModal('sudety1940')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">Karte der Kreise Hohenstadt (Zábřeh) und Mährisch Schönberg (Šumperk) von 1940</button> dokumentiert. Das tschechische Lomigsdorf (Dlouhomilov) mit dem Weiler Dreihofen (Medelské) bewahrte dennoch seine familiäre Kontinuität auf den Bauerngütern auch während der Kriegsjahre, als im Pfarrhof Nr. 2 Pfarrer <strong>P. Mořic Špaček</strong> wirkte.",
          "Nach <strong>1945</strong> erlebte das benachbarte deutsche <strong>Benke (Benkov)</strong> den tiefgreifendsten Wandel. Nach der Aussiedlung der meisten deutschen Familien kamen neue Siedler aus dem Binnenland und der Mährischen Walachei auf die Höfe in Benke (in der Matrik <em>Zá II 10</em> erscheinen 1945–1949 die Familien <em>Zbranek, Mičulka, Chrastina, Sitař, Rýznar und Krejčí</em>). Im Jahr <strong>1960</strong> wurden Benke (Benkov), Lomigsdorf (Dlouhomilov) und Dreihofen (Medelské) administrativ zu einer Gemeinde zusammengeschlossen."
        ],
        links: [
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
      }
    }
  }
};


i18nData.comic = {
  en: {
    title: "Illustrated Chronicle of Dlouhomilov",
    subtitle: "Four historical comic panels from archival sources (1679–1949) • Switch between illustrated scene and real archival photograph",
    pages: {
      "page-1": {
        title: "Sheet I: The Valley Beneath Brníčko & The 1878 Double Wedding",
        subtitle: "From the medieval village of 1356 and the migration of the parish to the dramatic wedding of two brothers and two sisters at Nos. 22 and 24",
        panels: {
          "panel-01": {
            location: "Dlouhomilov, Medelské & Benkov • 1356–1786",
            title: "Three Settlements in One Valley and the Migration of the Parish",
            realPhotoTitle: "I. Military Survey (1764–1768) – All Saints' Church & Valley",
            narrator: "Beneath the ruins of Brníčko Castle (1356), three settlements grew in the valley: Czech farming Dlouhomilov in the valley floor, the northern hamlet of Medelské (Nos. 1–10), and on the plateau to the southeast the German village of Benkov (Benke). Until 1762 ancestors walked to Dubicko for baptisms and weddings, in 1763–1784 to Rohle, and from 1784/1786 to their own Baroque Church of All Saints (No. 1).",
            bubbles: [
              { speaker: "Rector at Rectory No. 2 (1786)", text: "Since Emperor Joseph II's decree we finally keep our own registers here at All Saints' Church – for Dlouhomilov, Medelské, and Benkov up on the hill!" }
            ],
            sourceNote: "Sources: Charter of 1356 • I. Military Survey (1764–1768) • Parish Registers of Dubicko (from 1650), Rohle (1763–1784) & Dlouhomilov (Zá II 1 from 1784).",
            actions: ["⛪ Church No. 1", "🏛️ Baroque Rectory No. 2", "🗺️ Map 1764"]
          },
          "panel-03": {
            location: "All Saints' Church & Estates No. 22 and No. 24 • July 29, 1878",
            title: "Double Wedding Thirteen Days Before the Father's Death",
            realPhotoTitle: "Historic Homestead No. 22 (Dvořák Family – 163 Years in One House)",
            narrator: "At Estate No. 22 the Dvořák family farmed continuously from at least 1786 until 1949 (163 years under the same house number). On July 29, 1878, Farmer František Kouřil (*1819) from neighboring No. 24, dying of tuberculosis, gave both his daughters in marriage in a single hour to two Dvořák brothers. Just 13 days later, on August 11, 1878, the bride's father passed away.",
            bubbles: [
              { speaker: "František Kouřil (*1819, No. 24)", text: "My consumption leaves me little time... May I see both my daughters Anna and Ludmila wed to the brothers Josef and Karel Dvořák before the Lord calls me!" },
              { speaker: "Josef Dvořák (*1857) & Anna Kouřilová (*1857)", text: "We promise, Father! Together we shall tend Farmstead No. 22 for more than sixty years." }
            ],
            sourceNote: "Sources: Marriage & Death Registers of Dlouhomilov (1878) • Census 1880–1921 • NPÚ Monument No. 22 (ÚSKP 45002/8-2355) & No. 24 (ÚSKP 35225/8-2356).",
            actions: ["🏡 Estate No. 22 (Dvořák)", "🏡 Estate No. 24 (Kouřil)", "👤 Josef Dvořák (*1857)"]
          },
          "panel-04": {
            location: "Farmstead No. 29 (Dvořák) & Prague • 1679–1869",
            title: "From the 1679 Land Register to a Lawyer in Prague",
            realPhotoTitle: "Historic Farmstead No. 29 (Dvořák Estate – Monument Zone)",
            narrator: "Land registers of the Zábřeh estate trace the Dvořák family at No. 29 back to 1679. In the 1857 census, Farmer Johann Dvořák (*1795) recorded two sons: younger Alois (*1830) took over the farmstead, while older Jan (*1826) went to Prague to study law and is listed as 'Jurist in Prag II' (and in 1869 as Doctor of Laws, JUDr.).",
            bubbles: [
              { speaker: "Johann Dvořák (*1795, Farmer at No. 29)", text: "Write in the census sheet, Commissioner: my younger son Alois stays on our ancestral farm No. 29, and my older son Jan is studying law in Prague!" },
              { speaker: "JUDr. Jan Dvořák (*1826)", text: "From our timbered parlor in Dlouhomilov all the way to the Charles-Ferdinand University law faculty in Prague!" }
            ],
            sourceNote: "Sources: Zábřeh Land Register Inv. No. 164, fol. 191 (1679) • 1857 & 1869 Census of Dlouhomilov No. 29 (ZAO Opava).",
            actions: ["🏡 Farmstead No. 29", "👤 Dr. Jan Dvořák (*1826)", "👤 Johann Dvořák (*1795)"]
          }
        }
      },
      "page-2": {
        title: "Sheet II: Flames of Bludov Chateau & The 1907 Wedding at No. 29",
        subtitle: "The heroic sacrifice of wheelwright Antonín Motyka, the wedding officiated by Rev. Alois Dvořák, and the Hereditary Magistrate's Estate No. 7",
        panels: {
          "panel-05": {
            location: "Bludov Chateau No. 113 & Dlouhomilov No. 29 • Late 19th Century",
            title: "Heroic Death of Wheelwright Antonín Motyka in the Bludov Fire",
            realPhotoTitle: "Courtyard & Arcade of Farmstead No. 29 (Where Widow Františka Motyková Lived)",
            narrator: "Before young Amálie Motyková (*1888) married into Farmstead No. 29, tragedy struck her native Bludov: a massive fire engulfed the Bludov Chateau stables. Her father Antonín Motyka, master wheelwright at Bludov No. 113, ran into the blazing stables to unchain and rescue the manor cattle—and perished in the flames.",
            bubbles: [
              { speaker: "Antonín Motyka (Wheelwright in Bludov)", text: "We cannot let the cattle burn alive in the chateau stables! Hand me the wet sack—I am going inside to untie the chains!" },
              { speaker: "Widow Františka Motyková (*1844)", text: "Your father gave his life to save those creatures, Amálka... We will never forget his courage at No. 29." }
            ],
            sourceNote: "Sources: Berka & Dvořák Family Chronicle • 1921 Census of Dlouhomilov No. 29 (retired widow Františka Motyková, *Dec 4, 1844 in Chromeč).",
            actions: ["🏡 Farmstead No. 29", "📜 1921 Census Sheet (No. 29)"]
          },
          "panel-06": {
            location: "All Saints' Church & Farmstead No. 29 • July 15, 1907 & June 15, 1920",
            title: "Wedding Officiated by Rev. Alois Dvořák and Spouses Born on the Same Day",
            realPhotoTitle: "1921 Census Sheet of Farmstead No. 29 with Signatures and Daughter Marie (*1920)",
            narrator: "On July 15, 1907, a kinsman of the family—Rev. Alois Dvořák, parish priest in Zábřeh—blessed the marriage of farmer Josef Dvořák (*1879) of No. 29 and 19-year-old Amálie Motyková (*1888). On June 15, 1920, their daughter Marie was born at No. 29; she later married Pharmacist PhMr. Jaroslav Berka, born on the exact same day and year (June 15, 1920)!",
            bubbles: [
              { speaker: "Rev. Alois Dvořák (Parish Priest of Zábřeh, 1907)", text: "As priest and kinsman of the Dvořák house, I bless your union, Josef and Amálie, at Farmstead No. 29!" },
              { speaker: "Marie Dvořáková (*June 15, 1920) & PhMr. Jaroslav Berka (*June 15, 1920)", text: "Can you believe it? Both of us were born on the exact same day—June 15, 1920!" }
            ],
            sourceNote: "Sources: Marriage Register of Dlouhomilov (July 15, 1907) • 1921 Census Sheet No. 29 • Family Archive of PhMr. Jaroslav Berka.",
            actions: ["👤 Josef Dvořák (*1879)", "🏡 Farmstead No. 29"]
          },
          "panel-07": {
            location: "Hereditary Magistrate's Estate No. 7 • February 15, 1921",
            title: "Three Households at the Rychta and 18-Day-Old Jitřenka",
            realPhotoTitle: "Former Hereditary Magistrate's Estate (Rychta) No. 7 on the Village Green",
            narrator: "The stately two-story Baroque Magistrate's Estate (Rychta, No. 7) housed up to 23 people in the 19th century under the Merta, Krobot, and Pavlík families. On census night, February 15, 1921, three separate households (14 people) lived here: farmer František Hvížď's family, the Navrátil retirees, and the female household of Mathilda Ptáčková with needlework teacher Eliška Ptáčková and 18-day-old baby Jitřenka Kvapilová (*Jan 28, 1921).",
            bubbles: [
              { speaker: "Eliška Ptáčková (*1889, Teacher at No. 7)", text: "Our little niece Jitřenka is only eighteen days old today—she is the very youngest resident of Dlouhomilov in the 1921 census!" },
              { speaker: "František Hvížď (*1879, Farmer at No. 7)", text: "Three households under the roof of the old Rychta, fourteen souls in all—sign the sheet, neighbors!" }
            ],
            sourceNote: "Sources: 1857–1921 Census of Dlouhomilov No. 7 • NPÚ Cultural Monument ÚSKP 20137/8-2353.",
            actions: ["🏛️ Magistrate's Estate No. 7", "📜 1921 Census Sheet (No. 7)"]
          }
        }
      },
      "page-3": {
        title: "Sheet III: Traces of the Great War & Craftsmen in the Valley",
        subtitle: "War widows and invalids at No. 8, the folk farmstead No. 5, and the water conduit with threshing barn at No. 43",
        panels: {
          "panel-cp8": {
            location: "Homestead No. 8 • February 15, 1921",
            title: "Scars of the Great War Under the Roof of No. 8",
            realPhotoTitle: "1921 Census Sheet of Homestead No. 8 (Hošek, Šafář & Drlík Families)",
            narrator: "The 1921 census at Homestead No. 8 reveals the human cost of World War I in a single house: widower Josef Hošek (*1856) lived here with his mute daughter Anna (*1900), alongside war widow Amálie Šafářová (*1885) raising three young daughters, and unmarried farmer and war invalid František Drlík (*1876).",
            bubbles: [
              { speaker: "Amálie Šafářová (*1885, Widow at No. 8)", text: "The Great War took my husband, leaving me with three little girls—Anna, Marie, and Josefa..." },
              { speaker: "František Drlík (*1876, War Invalid)", text: "I returned from the front with ruined health, written down as a war invalid, yet here at No. 8 we help each other survive." }
            ],
            sourceNote: "Sources: 1921 Census of Dlouhomilov No. 8 (ZAO Opava, Inv. No. 1863).",
            actions: ["🏡 Homestead No. 8", "📜 1921 Census Sheet (No. 8)"]
          },
          "panel-cp5": {
            location: "Historic Farmstead No. 5 • 1834–1921",
            title: "Empire Gable of Estate No. 5 and Students Commuting to Šumperk",
            realPhotoTitle: "Protected Homestead No. 5 with Arcade and Granary (NPÚ Monument)",
            narrator: "Protected Farmstead No. 5 (ÚSKP 33696/8-2352), long held by the Lukas, Krobot, and Koš families, preserves an early 19th-century Empire gable and pillared arcade. In 1921, under widow Marie Košová (*1872), 16-year-old František Koš trained as a locksmith in Dolní Olešná while 10-year-old Josef Koš (*1911) commuted daily to the secondary school in Šumperk.",
            bubbles: [
              { speaker: "Marie Košová (*1872, Farmer at No. 5)", text: "Run along, Pepík, or you'll miss the morning train to the secondary school in Šumperk! And František is already at the locksmith workshop in Olešná." },
              { speaker: "Marie Krobotová (*1849, Retiree at No. 5)", text: "Our arcade and granary at No. 5 have stood firm since the Lukas family farmed here a century ago." }
            ],
            sourceNote: "Sources: 1857–1921 Census of Dlouhomilov No. 5 • NPÚ Cultural Monument ÚSKP 33696/8-2352.",
            actions: ["🏡 Farmstead No. 5", "📜 1921 Census Sheet (No. 5)"]
          },
          "panel-cp43": {
            location: "Cottage No. 43 • 1836–1921",
            title: "Spring Water Conduit, Threshing Barn, and Wheelwrights at No. 43",
            realPhotoTitle: "Historic Cottage No. 43 with Preserved Timbered Granary (1836)",
            narrator: "Cottage No. 43 (ÚSKP 34058/8-2358) with its 1836 folk core and rare timbered granary with clay daubing had its own wooden gravity water conduit bringing spring water straight into the yard. In the 19th century theTempír wheelwright family worked here; in 1921 retiree František Drlík (*1855) and cooper/farmer JosefLinhart (*1883) lived under its roof.",
            bubbles: [
              { speaker: "Josef Linhart (*1883, Farmer at No. 43)", text: "Fresh spring water flows straight into our yard through the old conduit, and our 1836 clay-daubed granary still keeps the grain dry!" }
            ],
            sourceNote: "Sources: 1857–1921 Census of Dlouhomilov No. 43 • NPÚ Cultural Monument ÚSKP 34058/8-2358.",
            actions: ["🏡 Cottage No. 43", "📜 1921 Census Sheet (No. 43)"]
          }
        }
      },
      "page-4": {
        title: "Sheet IV: Village Blacksmiths, Bleachers in Medelské & The Mystery of 'No. 2'",
        subtitle: "The Berka smithy at No. 110, textile workers at Oberleithner in Šumperk, and how the 1921 census solved the rectory vs. Medelské puzzle",
        panels: {
          "panel-08": {
            location: "Smithy No. 110 & Cottage No. 46 • 1900–1921",
            title: "Ringing Anvils at Smithy No. 110 and 87-Year-Old Terezie Podhorná",
            realPhotoTitle: "1921 Census Sheet of House No. 110 (Podhorný Family)",
            narrator: "At House No. 110, master blacksmith František Berka (*1866 from Leština) and his son Jan (*1894) shoed horses and forged plows in 1910. By February 1921, 87-year-old retiree Terezie Podhorná (*1834) and weaver Anna Podhorná (*1877) lived here, while at nearby Cottage No. 46 cottager Alois Dvořák (*1840) lived with his son, master bricklayer Jan Dvořák (*1873).",
            bubbles: [
              { speaker: "František Berka (*1866, Blacksmith at No. 110)", text: "Strike the iron while it's glowing, Jan! Every farmer's team from Dlouhomilov and Medelské needs strong horseshoes." },
              { speaker: "Terezie Podhorná (*1834, aged 87 in 1921)", text: "Born under Emperor Francis I in 1834, and today in February 1921 I still sign the Czechoslovak census sheet at No. 110!" }
            ],
            sourceNote: "Sources: 1900, 1910 & 1921 Census of Dlouhomilov No. 110 & No. 46.",
            actions: ["🔨 House No. 110", "🏡 Cottage No. 46", "👤 Alois Dvořák (*1840)"]
          },
          "panel-09": {
            location: "Hamlet of Medelské No. 1 & Šumperk • February 15, 1921",
            title: "Bleachers and Weavers Commuting to Eduard Oberleithner & Sons",
            realPhotoTitle: "1921 Census Sheet of Medelské No. 1 (Minář Family – Oberleithner Bleachery)",
            narrator: "In the northern hamlet of Medelské (German Dreihofen), the ancient Šafář family farmed for centuries before moving to Dlouhomilov No. 10. In 1921, Medelské No. 1 was home to the Minář family, who commuted daily to Šumperk to the famous linen and cotton textile works of Eduard Oberleithner & Sons as yarn bleachers and weavers.",
            bubbles: [
              { speaker: "Jan Minář (*1861, Bleachery Worker, Medelské No. 1)", text: "Dawn is breaking over Medelské—time to walk out to the Oberleithner bleachery and weaving mills in Šumperk!" },
              { speaker: "Josef Minář (*1886) & Pavlína Minářová (*1894)", text: "In column 15 of the census sheet we all wrote our employer: 'Ed. Oberleithner & Sons, Bleachery and Weaving Mill in Šumperk'!" }
            ],
            sourceNote: "Sources: 1857–1921 Census of Medelské No. 1 (ZAO Opava).",
            actions: ["🏡 Medelské No. 1", "👤 Jan Minář (*1861)", "🏡 Estate No. 10 (Šafář)"]
          },
          "panel-12": {
            location: "Medelské No. 2, Baroque Rectory No. 2 & Benkov • 1921–1960",
            title: "Mystery of 'No. 2' Solved and the Unification of the Valley",
            realPhotoTitle: "1921 Census Sheet of Medelské No. 2 (Nejedlý Family)",
            narrator: "Why did 1938–1948 parish registers record weddings and deaths of the Nejedlý family at 'No. 2', when Dlouhomilov No. 2 was the Baroque Catholic rectory? The 1921 census solved the mystery: the hamlet of Medelské had its own numbering series starting at No. 1, and 'No. 2' was the Nejedlý homestead in Medelské! In 1960, Dlouhomilov, Medelské, and upland Benkov united into a single municipality.",
            bubbles: [
              { speaker: "Josef Nejedlý (*1855, Medelské No. 2)", text: "We don't live at the Catholic rectory! Our house is Medelské No. 2—our hamlet has had its own house numbers since Maria Theresa's time!" },
              { speaker: "Archival Chronicler", text: "And in 2004 the crossed spades, golden colter, and two apple blossoms united Dlouhomilov and Benkov on the municipal coat of arms." }
            ],
            sourceNote: "Sources: Register Zá II 10 (1862–1949) • 1921 Census of Medelské No. 2 • REKOS Coat of Arms Decree No. 37 (2004).",
            actions: ["🏡 Medelské No. 2 (Nejedlý)", "🏛️ Rectory No. 2", "⛪ Benkov Chapel"]
          }
        }
      }
    }
  },
  de: {
    title: "Illustrierte Chronik von Lomigsdorf (Dlouhomilov)",
    subtitle: "Vier historische Bilderchronik-Bögen nach Archivquellen (1679–1949) • Umschaltbar zwischen Illustration und echtem Archivfoto",
    pages: {
      "page-1": {
        title: "Bogen I: Das Tal unter der Burg Brünles & Die Doppelhochzeit von 1878",
        subtitle: "Vom mittelalterlichen Waldhufendorf 1356 und der Wanderung der Pfarre bis zur dramatischen Trauung zweier Brüder und zweier Schwestern auf Nr. 22 und 24",
        panels: {
          "panel-01": {
            location: "Lomigsdorf, Dreihofen & Benke • 1356–1786",
            title: "Drei Siedlungen in einem Tal und die Wanderung der Pfarre",
            realPhotoTitle: "I. Josephinische Landesaufnahme (1764–1768) – Allerheiligenkirche & Tal",
            narrator: "Unterhalb der Burgruine Brünles (Brníčko, 1356) wuchsen drei Siedlungen: im Tal das tschechische Bauerndorf Lomigsdorf (Dlouhomilov), nördlich der Weiler Dreihofen (Medelské, Nr. 1–10) und auf der Anhöhe im Südosten das deutsche Höhendorf Benke (Benkov). Bis 1762 gingen die Vorfahren nach Dubitzko (Dubicko) zur Kirche, 1763–1784 nach Rohle und ab 1784/1786 in die eigene spätbarocke Allerheiligenkirche (Nr. 1).",
            bubbles: [
              { speaker: "Lokalvikar im Pfarrhof Nr. 2 (1786)", text: "Seit dem Dekret Kaiser Josephs II. führen wir hier bei der Allerheiligenkirche endlich eigene Matriken – für Lomigsdorf, Dreihofen und Benke auf der Höh'!" }
            ],
            sourceNote: "Quellen: Urkunde von 1356 • I. Josephinische Landesaufnahme (1764–1768) • Matriken Dubitzko (ab 1650), Rohle (1763–1784) & Lomigsdorf (Zá II 1 ab 1784).",
            actions: ["⛪ Kirche Nr. 1", "🏛️ Barocker Pfarrhof Nr. 2", "🗺️ Karte 1764"]
          },
          "panel-03": {
            location: "Allerheiligenkirche & Höfe Nr. 22 und Nr. 24 • 29. Juli 1878",
            title: "Doppelhochzeit dreizehn Tage vor dem Tod des Brautvaters",
            realPhotoTitle: "Denkmalhof Nr. 22 (Geschlecht Dvořák – 163 Jahre unter derselben Nummer)",
            narrator: "Auf dem Hof Nr. 22 wirtschaftete das Geschlecht Dvořák durchgehend mindestens von 1786 bis 1949 (163 Jahre unter derselben Hausnummer). Am 29. Juli 1878 verheiratete der an Tuberkulose sterbende Bauer František Kouřil (*1819) aus dem Nachbarhof Nr. 24 in einer einzigen Stunde seine beiden Töchter mit zwei Brüdern Dvořák. Nur 13 Tage später, am 11. August 1878, starb der Brautvater.",
            bubbles: [
              { speaker: "František Kouřil (*1819, Hof Nr. 24)", text: "Die Abzehrung lässt mir nicht mehr viel Zeit... Möge ich noch erleben, wie meine Töchter Anna und Ludmila vor den Altar treten!" },
              { speaker: "Josef Dvořák (*1857) & Anna Kouřilová (*1857)", text: "Wir versprechen es, Vater! Gemeinsam werden wir über sechzig Jahre lang auf dem Hof Nr. 22 wirtschaften." }
            ],
            sourceNote: "Quellen: Trauungs- und Sterbematrik Lomigsdorf (1878) • Volkszählung 1880–1921 • Kulturdenkmale Nr. 22 (ÚSKP 45002/8-2355) & Nr. 24 (ÚSKP 35225/8-2356).",
            actions: ["🏡 Hof Nr. 22 (Dvořák)", "🏡 Hof Nr. 24 (Kouřil)", "👤 Josef Dvořák (*1857)"]
          },
          "panel-04": {
            location: "Bauerngut Nr. 29 (Dvořák) & Prag • 1679–1869",
            title: "Vom Grundbuch 1679 zum Doktor der Rechte in Prag",
            realPhotoTitle: "Denkmalgeschütztes Bauerngut Nr. 29 (Hof Dvořák – Denkmalzone)",
            narrator: "Die Grundbücher der Herrschaft Hohenstadt (Zábřeh) belegen die Familie Dvořák auf Nr. 29 bereits seit 1679. Im Zählbogen von 1857 ließ Bauer Johann Dvořák (*1795) zwei Söhne eintragen: Der jüngere Alois (*1830) übernahm den Hof, während der ältere Jan (*1826) in Prag Jus studierte und als „Jurist in Prag II“ (1869 als Doktor der Rechte, JUDr.) verzeichnet ist.",
            bubbles: [
              { speaker: "Johann Dvořák (*1795, Bauer auf Nr. 29)", text: "Schreiben Sie in den Bogen, Herr Kommissär: Mein jüngerer Sohn Alois übernimmt den Stammhof Nr. 29, und mein älterer Sohn Jan ist Jurist in Prag!" },
              { speaker: "JUDr. Jan Dvořák (*1826)", text: "Aus unserer Bauernstube in Lomigsdorf bis an die juristische Fakultät der Karl-Ferdinands-Universität in Prag!" }
            ],
            sourceNote: "Quellen: Grundbuch Hohenstadt Inv.-Nr. 164, Fol. 191 (1679) • Volkszählung 1857 & 1869 Lomigsdorf Nr. 29 (ZAO Opava).",
            actions: ["🏡 Bauerngut Nr. 29", "👤 Dr. Jan Dvořák (*1826)", "👤 Johann Dvořák (*1795)"]
          }
        }
      },
      "page-2": {
        title: "Bogen II: Flammen von Schloss Blauda & Die Hochzeit von 1907 auf Nr. 29",
        subtitle: "Der Heldentod des Wagners Antonín Motyka, die Trauung durch Pfarrer P. Alois Dvořák und das Erbgericht Nr. 7",
        panels: {
          "panel-05": {
            location: "Schloss Blauda (Bludov) Nr. 113 & Lomigsdorf Nr. 29 • Ende 19. Jh.",
            title: "Heldentod des Wagners Antonín Motyka beim Schlossbrand von Blauda",
            realPhotoTitle: "Hof und Laubengang des Bauerngutes Nr. 29 (Ausgedinge der Witwe Františka Motyková)",
            narrator: "Bevor die junge Amálie Motyková (*1888) auf den Hof Nr. 29 einheiratete, traf ihre Heimatgemeinde Blauda (Bludov) ein schweres Unglück: Ein Großbrand erfasste die Stallungen des Schlosses Blauda. Ihr Vater Antonín Motyka, Wagnermeister in Blauda Nr. 113, lief in die brennenden Ställe zurück, um das herrschaftliche Vieh loszubinden, und fand in den Flammen den Tod.",
            bubbles: [
              { speaker: "Antonín Motyka (Wagnermeister in Blauda)", text: "Wir können das Vieh in den Schlossställen nicht bei lebendigem Leib verbrennen lassen! Reicht mir den nassen Sack – ich binde die Ketten los!" },
              { speaker: "Witwe Františka Motyková (*1844)", text: "Dein Vater hat sein Leben gegeben, um die Tiere zu retten, Amálka... Seinen Mut werden wir hier auf Nr. 29 nie vergessen." }
            ],
            sourceNote: "Quellen: Familienchronik Berka & Dvořák • Volkszählung 1921 Lomigsdorf Nr. 29 (Ausgedingerin Witwe Františka Motyková, *4. 12. 1844 in Krumpisch / Chromeč).",
            actions: ["🏡 Bauerngut Nr. 29", "📜 Zählbogen 1921 (Nr. 29)"]
          },
          "panel-06": {
            location: "Allerheiligenkirche & Bauerngut Nr. 29 • 15. Juli 1907 & 15. Juni 1920",
            title: "Trauung durch Pfarrer P. Alois Dvořák und Eheleute vom selben Geburtstag",
            realPhotoTitle: "Zählbogen 1921 des Hofes Nr. 29 mit Unterschriften und Tochter Marie (*1920)",
            narrator: "Am 15. Juli 1907 segnete ein Verwandter der Familie – der Hohenstädter Pfarrer P. Alois Dvořák – die Ehe des Bauern Josef Dvořák (*1879) von Nr. 29 mit der 19-jährigen Amálie Motyková (*1888). Am 15. Juni 1920 kam auf Nr. 29 Tochter Marie zur Welt, die später den Apotheker PhMr. Jaroslav Berka heiratete – geboren exakt am selben Tag und im selben Jahr (15. Juni 1920)!",
            bubbles: [
              { speaker: "P. Alois Dvořák (Pfarrer in Hohenstadt, 1907)", text: "Als Priester und Verwandter des Hauses Dvořák segne ich euren Bund, Josef und Amálie, auf dem Hof Nr. 29!" },
              { speaker: "Marie Dvořáková (*15. 6. 1920) & PhMr. Jaroslav Berka (*15. 6. 1920)", text: "Kaum zu glauben – wir beide sind am exakt selben Tag und im selben Jahr geboren: am 15. Juni 1920!" }
            ],
            sourceNote: "Quellen: Trauungsmatrik Lomigsdorf (15. 7. 1907) • Zählbogen 1921 Nr. 29 • Familienarchiv PhMr. Jaroslav Berka.",
            actions: ["👤 Josef Dvořák (*1879)", "🏡 Bauerngut Nr. 29"]
          },
          "panel-07": {
            location: "Ehemaliges Erbgericht Nr. 7 • 15. Februar 1921",
            title: "Drei Haushalte im Erbgericht und die 18 Tage alte Jitřenka",
            realPhotoTitle: "Ehemaliges Erbgericht (Rychta) Nr. 7 am Dorfplatz von Lomigsdorf",
            narrator: "Das stattliche zweigeschossige Erbgericht (Nr. 7) beherbergte im 19. Jahrhundert unter den Familien Merta, Krobot und Pavlík bis zu 23 Personen. Bei der Volkszählung am 15. Februar 1921 lebten hier drei getrennte Haushalte (14 Personen): die Familie des Landwirts František Hvížď, die Ausgedinger Navrátil sowie der Frauenhaushalt von Mathilda Ptáčková mit der Industriallehrerin Eliška Ptáčková und der 18 Tage alten Jitřenka Kvapilová (*28. 1. 1921).",
            bubbles: [
              { speaker: "Eliška Ptáčková (*1889, Lehrerin auf Nr. 7)", text: "Unsere kleine Nichte Jitřenka ist heute erst achtzehn Tage alt – damit ist sie das jüngste Kind im ganzen Dorf bei der Volkszählung 1921!" },
              { speaker: "František Hvížď (*1879, Landwirt auf Nr. 7)", text: "Drei Haushalte unter dem Dach des alten Erbgerichts, vierzehn Seelen insgesamt – unterschreibt den Bogen, Nachbarn!" }
            ],
            sourceNote: "Quellen: Volkszählung 1857–1921 Lomigsdorf Nr. 7 • Kulturdenkmal ÚSKP 20137/8-2353.",
            actions: ["🏛️ Erbgericht Nr. 7", "📜 Zählbogen 1921 (Nr. 7)"]
          }
        }
      },
      "page-3": {
        title: "Bogen III: Spuren des Großen Krieges & Handwerker im Tal",
        subtitle: "Kriegerwitwen und Invaliden in Nr. 8, der Denkmalhof Nr. 5 und die Quellwasserleitung mit gezimmerter Scheune in Nr. 43",
        panels: {
          "panel-cp8": {
            location: "Anwesen Nr. 8 • 15. Februar 1921",
            title: "Die Wunden des Ersten Weltkriegs unter dem Dach von Nr. 8",
            realPhotoTitle: "Zählbogen 1921 des Hauses Nr. 8 (Familien Hošek, Šafář & Drlík)",
            narrator: "Der Zählbogen von 1921 für das Haus Nr. 8 zeigt die Folgen des Ersten Weltkriegs unter einem einzigen Dach: Neben dem Witwer Josef Hošek (*1856) mit seiner stummen Tochter Anna (*1900) lebten hier die Kriegerwitwe Amálie Šafářová (*1885) mit drei kleinen Töchtern sowie der ledige Landwirt und Kriegsinvalide František Drlík (*1876).",
            bubbles: [
              { speaker: "Amálie Šafářová (*1885, Witwe auf Nr. 8)", text: "Der Weltkrieg hat mir den Mann genommen und mich mit drei kleinen Mädchen – Anna, Marie und Josefa – zurückgelassen..." },
              { speaker: "František Drlík (*1876, Kriegsinvalide)", text: "Mit zerrütteter Gesundheit kehrte ich als Kriegsinvalide von der Front heim, aber hier auf Nr. 8 halten wir zusammen." }
            ],
            sourceNote: "Quellen: Volkszählung 1921 Lomigsdorf Nr. 8 (ZAO Opava, Inv.-Nr. 1863).",
            actions: ["🏡 Anwesen Nr. 8", "📜 Zählbogen 1921 (Nr. 8)"]
          },
          "panel-cp5": {
            location: "Denkmalhof Nr. 5 • 1834–1921",
            title: "Der Empire-Giebel von Hof Nr. 5 und die Schülerfahrt nach Mährisch Schönberg",
            realPhotoTitle: "Denkmalgeschütztes Bauerngut Nr. 5 mit Laubengang und Speicher",
            narrator: "Das denkmalgeschützte Bauerngut Nr. 5 (ÚSKP 33696/8-2352), auf dem die Familien Lukas, Krobot und Koš wirtschafteten, bewahrt einen Empire-Giebel und einen Pfeilerlaubengang aus dem frühen 19. Jahrhundert. 1921 lernte unter der Witwe Marie Košová (*1872) der 16-jährige František Koš Schlosser in Nieder-Ullischen (Dolní Olešná), während der zehnjährige Josef Koš (*1911) die Realschule in Mährisch Schönberg (Šumperk) besuchte.",
            bubbles: [
              { speaker: "Marie Košová (*1872, Bäuerin auf Nr. 5)", text: "Lauf, Pepík, sonst verpasst du den Frühzug in die Realschule nach Mährisch Schönberg! Und František steht schon in der Schlosserwerkstatt in Ullischen." },
              { speaker: "Marie Krobotová (*1849, Ausgedingerin auf Nr. 5)", text: "Unser Laubengang und der Speicher von Nr. 5 stehen fest, seit hier vor hundert Jahren die Familie Lukas wirtschaftete." }
            ],
            sourceNote: "Quellen: Volkszählung 1857–1921 Lomigsdorf Nr. 5 • Kulturdenkmal ÚSKP 33696/8-2352.",
            actions: ["🏡 Bauerngut Nr. 5", "📜 Zählbogen 1921 (Nr. 5)"]
          },
          "panel-cp43": {
            location: "Häusel Nr. 43 • 1836–1921",
            title: "Eigene Quellwasserleitung, gezimmerte Scheune und Wagner auf Nr. 43",
            realPhotoTitle: "Denkmalgeschütztes Häusel Nr. 43 mit gezimmerter Scheune (1836)",
            narrator: "Das Häusel Nr. 43 (ÚSKP 34058/8-2358) mit Baukern von 1836 und einer seltenen gezimmerten Scheune mit Lehmbewurf besaß eine eigene Gefälle-Wasserleitung, die Quellwasser direkt in den Hof führte. Im 19. Jahrhundert arbeiteten hier die Wagner Tempír; 1921 lebten hier der Ausgedinger František Drlík (*1855) und der Landwirt Josef Linhart (*1883).",
            bubbles: [
              { speaker: "Josef Linhart (*1883, Landwirt auf Nr. 43)", text: "Frisches Quellwasser fließt durch die alte Leitung direkt in unseren Hof, und die lehmbeworfene Scheune von 1836 hält das Getreide trocken!" }
            ],
            sourceNote: "Quellen: Volkszählung 1857–1921 Lomigsdorf Nr. 43 • Kulturdenkmal ÚSKP 34058/8-2358.",
            actions: ["🏡 Häusel Nr. 43", "📜 Zählbogen 1921 (Nr. 43)"]
          }
        }
      },
      "page-4": {
        title: "Bogen IV: Dorfschmiede, Garnbleicher in Dreihofen & Das Rätsel um „Nr. 2“",
        subtitle: "Die Schmiede Berka in Nr. 110, Textilarbeiter bei Oberleithner in Mährisch Schönberg und die Lösung des Rätsels um Dreihofen (Medelské) Nr. 2",
        panels: {
          "panel-08": {
            location: "Schmiede Nr. 110 & Häusel Nr. 46 • 1900–1921",
            title: "Klingende Ambosse in Nr. 110 und die 87-jährige Terezie Podhorná",
            realPhotoTitle: "Zählbogen 1921 des Hauses Nr. 110 (Familie Podhorný)",
            narrator: "Im Haus Nr. 110 beschlugen 1910 der Schmiedemeister František Berka (*1866 aus Lesche / Leština) und sein Sohn Jan (*1894) die Pferde der Bauern. Im Februar 1921 lebten hier die 87-jährige Ausgedingerin Terezie Podhorná (*1834) und die Weberin Anna Podhorná (*1877), während im nahen Häusel Nr. 46 der Häusler Alois Dvořák (*1840) mit seinem Sohn, dem Maurer Jan Dvořák (*1873), wohnte.",
            bubbles: [
              { speaker: "František Berka (*1866, Schmied in Nr. 110)", text: "Schmiede das Eisen, solange es glüht, Jan! Jedes Gespann aus Lomigsdorf und Dreihofen braucht feste Hufeisen." },
              { speaker: "Terezie Podhorná (*1834, 87 Jahre alt im Jahr 1921)", text: "Noch unter Kaiser Franz I. im Jahr 1834 geboren, und heute im Februar 1921 unterschreibe ich mit 87 Jahren den Zählbogen auf Nr. 110!" }
            ],
            sourceNote: "Quellen: Volkszählung 1900, 1910 & 1921 Lomigsdorf Nr. 110 & Nr. 46.",
            actions: ["🔨 Haus Nr. 110", "🏡 Häusel Nr. 46", "👤 Alois Dvořák (*1840)"]
          },
          "panel-09": {
            location: "Weiler Dreihofen (Medelské) Nr. 1 & Mährisch Schönberg • 15. Februar 1921",
            title: "Garnbleicher und Weberinnen bei Eduard Oberleithner & Söhne",
            realPhotoTitle: "Zählbogen 1921 von Dreihofen / Medelské Nr. 1 (Familie Minář – Bleiche Oberleithner)",
            narrator: "Im nördlichen Weiler Dreihofen (Medelské) saß über Jahrhunderte das Geschlecht Šafář (Schafarz), bevor es auf Nr. 10 nach Lomigsdorf zog. 1921 wohnte in Dreihofen Nr. 1 die Familie Minář, die täglich in die berühmten Textilwerke von Eduard Oberleithner & Söhne nach Mährisch Schönberg (Šumperk) als Garnbleicher und Weberinnen pendelte.",
            bubbles: [
              { speaker: "Jan Minář (*1861, Bleichereiarbeiter, Dreihofen Nr. 1)", text: "Es dämmert über Dreihofen – Zeit für den Fußmarsch in die Oberleithner-Bleiche und Weberei nach Mährisch Schönberg!" },
              { speaker: "Josef Minář (*1886) & Pavlína Minářová (*1894)", text: "In Spalte 15 des Zählbogens steht bei uns allen derselbe Arbeitgeber: „Ed. Oberleithner & Söhne, Bleiche und Weberei in Mährisch Schönberg“!" }
            ],
            sourceNote: "Quellen: Volkszählung 1857–1921 Dreihofen / Medelské Nr. 1 (ZAO Opava).",
            actions: ["🏡 Dreihofen / Medelské Nr. 1", "👤 Jan Minář (*1861)", "🏡 Hof Nr. 10 (Šafář)"]
          },
          "panel-12": {
            location: "Dreihofen (Medelské) Nr. 2, Pfarrhof Nr. 2 & Benke (Benkov) • 1921–1960",
            title: "Das gelöste Rätsel um „Nr. 2“ und die Vereinigung des Tals",
            realPhotoTitle: "Zählbogen 1921 von Dreihofen / Medelské Nr. 2 (Familie Nejedlý)",
            narrator: "Warum verzeichneten die Matriken von 1938–1948 Trauungen und Sterbefälle der Familie Nejedlý unter „Nr. 2“, obwohl Nr. 2 in Lomigsdorf der barocke Pfarrhof war? Der Zählbogen von 1921 löste das Rätsel: Der Weiler Dreihofen (Medelské) hatte eine eigene Nummerierung ab Nr. 1, und „Nr. 2“ war das Anwesen Nejedlý in Dreihofen! 1960 wurden Lomigsdorf, Dreihofen und Benke zu einer Gemeinde vereint.",
            bubbles: [
              { speaker: "Josef Nejedlý (*1855, Dreihofen / Medelské Nr. 2)", text: "Wir wohnen doch nicht im katholischen Pfarrhof! Unser Haus ist Dreihofen (Medelské) Nr. 2 – unser Weiler hat seit Maria Theresia eigene Hausnummern!" },
              { speaker: "Archivchronist", text: "Und 2004 verbanden die gekreuzten Spaten, das goldene Pflugmesser und zwei Apfelblüten Lomigsdorf und Benke im gemeinsamen Gemeindewappen." }
            ],
            sourceNote: "Quellen: Matrik Zá II 10 (1862–1949) • Volkszählung 1921 Dreihofen / Medelské Nr. 2 • Wappenbeschluss REKOS Nr. 37 (2004).",
            actions: ["🏡 Dreihofen / Medelské Nr. 2", "🏛️ Pfarrhof Nr. 2", "⛪ Kapelle Benke (Benkov)"]
          }
        }
      }
    }
  }
};

i18nData.houses = {
  en: {
    cp1: {
      name: "House No. 1 (All Saints' Church)",
      localName: "Parish Church of All Saints (1770–1784)",
      type: "Sacral Monument / Church",
      description: "Late Baroque single-nave parish Church of All Saints built on the elevated village green in the center of Dlouhomilov (cultural monument ÚSKP 26675/8-2351). An older filial wooden church stood here before the late Baroque reconstruction; since 1784/1786 it served as the seat of an independent parish (lokálie) for Dlouhomilov, Medelské, and Benkov."
    },
    cp2: {
      name: "House No. 2 (Baroque Rectory)",
      localName: "Catholic Rectory & Parish Office (from 1784)",
      type: "Rectory / Parish Office",
      description: "Baroque Catholic rectory next to All Saints' Church, seat of the parish office keeping registers Zá II 1 through Zá II 10 (1784–1949). In the 1921 census, Dean Rev. František Kožušníček (*1860 from Tovačov) lived and served here; during WWII Rev. Mořic Špaček served here."
    },
    cp3: {
      name: "House No. 3 (Water Mill & Homestead)",
      localName: "Valley Mill Race Homestead",
      type: "Water Mill / Homestead",
      description: "Historical homestead in the valley center by the mill race of the Dlouhomilov stream. In the 19th and early 20th centuries the Krobot, Tempír, and Jílek families lived here."
    },
    cp4: {
      name: "House No. 4",
      localName: "Vénos & Janků Homestead (1921)",
      type: "Homestead / Railway & Postal Household",
      description: "Homestead near the church and rectory. In February 1921, locksmith Josef Vénos (*1877) employed at the Czechoslovak State Railways (ČSD) locomotive depot in Šumperk lived here with his family alongside subtenant Julie Janků (*1879), postal assistant at the Brníčko post office."
    },
    cp5: {
      name: "House No. 5",
      localName: "Lukas, Krobot & Koš Protected Farmstead",
      type: "Protected Peasant Farmstead (NPÚ)",
      description: "Protected three-winged peasant farmstead (cultural monument ÚSKP 33696/8-2352) with an early 19th-century Empire brick gable, pillared arcade (žudr), and two-story granary. Farmed in the 19th century by the Lukas and Krobot families, and in 1921 by widow Marie Košová (*1872) with her sons František (locksmith apprentice) and Josef (*1911, Šumperk secondary school student)."
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
      description: "The largest secular building in Dlouhomilov: the two-story Baroque Hereditary Magistrate's Estate (Rychta, cultural monument ÚSKP 20137/8-2353) on the eastern side of the village green. Home to the Merta hereditary magistrates in 1857, later the Krobot and Pavlík families (up to 23 residents in 1869). In February 1921 it housed 3 households (14 people): farmer František Hvížď, needlework teacher Eliška Ptáčková with 18-day-old baby Jitřenka Kvapilová (*Jan 28, 1921), and the Navrátil retirees."
    },
    cp8: {
      name: "House No. 8",
      localName: "Hošek, Šafář & Drlík Homestead",
      type: "Country Homestead",
      description: "Homestead near the village green. In the 1921 census it vividly reflects the aftermath of WWI: widower Josef Hošek (*1856) with his mute daughter Anna (*1900), war widow Amálie Šafářová (*1885) with three young daughters, and unmarried farmer and war invalid František Drlík (*1876)."
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
      description: "Historical school building near the church and rectory where generations of children from Dlouhomilov and Medelské learned to read and write."
    },
    cp22: {
      name: "House No. 22 (At the Dvořáks')",
      localName: "Dvořák Protected Farmstead (163 Years in One Family)",
      type: "Protected Peasant Farmstead (NPÚ)",
      description: "Protected North Moravian brick farmstead (cultural monument ÚSKP 45002/8-2355) with documented continuity of the Dvořák family under the exact same house number from at least 1786 (wedding of Pavel Dvořák 'from Dlouhomilov No. 22') until 1949 (death of Anna Dvořáková née Kouřilová aged 91). Site of the famous double wedding of July 29, 1878, when Josef Dvořák (*1857) married Anna Kouřilová from No. 24."
    },
    cp24: {
      name: "House No. 24",
      localName: "Kouřil Protected Farmstead",
      type: "Protected Peasant Farmstead (NPÚ)",
      description: "Protected peasant farmstead (cultural monument ÚSKP 35225/8-2356) neighboring No. 22. In 1878 farmer František Kouřil (*1819), terminally ill with tuberculosis, gave both his daughters Anna and Ludmila in marriage on the same day (July 29, 1878) to brothers Josef and Karel Dvořák, just 13 days before his death."
    },
    cp29: {
      name: "House No. 29 (Dvořák Farmstead)",
      localName: "Ancestral Dvořák Farmstead (from 1679)",
      type: "Protected Peasant Farmstead (NPÚ)",
      description: "One of the best-documented farmsteads in the village (cultural monument ÚSKP 31135/8-2357). Land registers of the Zábřeh estate trace the Dvořák family here back to 1679. Birthplace of Prague lawyer JUDr. Jan Dvořák (*1826, listed in 1857 as 'Jurist in Prag II') and home of Alois Dvořák (*1830), Josef Dvořák (*1879) & Amálie née Motyková (*1888, daughter of heroic Bludov wheelwright Antonín Motyka), and their daughter Marie (*June 15, 1920), wife of PhMr. Jaroslav Berka."
    },
    cp43: {
      name: "House No. 43",
      localName: "Tempír & Linhart Historic Cottage (1836)",
      type: "Protected Cottage & Timbered Granary (NPÚ)",
      description: "Protected folk cottage with an 1836 core, rare timbered granary with clay daubing, and its own gravity spring-water conduit (cultural monument ÚSKP 34058/8-2358). Home to the Tempír wheelwrights in the 19th century and to František Drlík (*1855) and Josef Linhart (*1883) in 1921."
    },
    cp46: {
      name: "House No. 46",
      localName: "Dvořák Cottage",
      type: "Cottage / Bricklayer Household",
      description: "Foothill cottage at the edge of the village where cottager Alois Dvořák (*1840) lived with his wife Mariana (*1838) and son, bricklayer Jan Dvořák (*1873)."
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
      localName: "Pfarrkirche Allerheiligen (1770–1784)",
      type: "Sakraldenkmal / Pfarrkirche",
      description: "Spätbarocke einschiffige Pfarrkirche Allerheiligen auf der Anhöhe des Dorfplatzes in der Mitte von Lomigsdorf / Dlouhomilov (Kulturdenkmal ÚSKP 26675/8-2351). Seit den Josephinischen Reformen 1784/1786 Sitz einer eigenen Lokalie (später Pfarre) für Lomigsdorf (Dlouhomilov), Dreihofen (Medelské) und Benke (Benkov)."
    },
    cp2: {
      name: "Nr. 2 (Barocker Pfarrhof)",
      localName: "Katholischer Pfarrhof & Pfarramt (ab 1784)",
      type: "Pfarrhof / Pfarramt",
      description: "Barocker Pfarrhof neben der Allerheiligenkirche, Sitz des Pfarramtes, in dem die Matriken Zá II 1 bis Zá II 10 (1784–1949) geführt wurden. Bei der Volkszählung 1921 wirkte hier Dechant P. František Kožušníček (*1860 aus Tobitschau / Tovačov), während des Zweiten Weltkriegs Pfarrer P. Mořic Špaček."
    },
    cp3: {
      name: "Nr. 3 (Wassermühle & Anwesen)",
      localName: "Anwesen am Mühlgraben",
      type: "Wassermühle / Anwesen",
      description: "Historisches Anwesen in der Talmitte am Mühlgraben des Lomigsdorfer Baches. Im 19. und frühen 20. Jahrhundert lebten hier die Familien Krobot, Tempír und Jílek."
    },
    cp4: {
      name: "Nr. 4",
      localName: "Anwesen Vénos & Janků (1921)",
      type: "Anwesen / Eisenbahner- & Posthaushalt",
      description: "Anwesen nahe Kirche und Pfarrhof. Im Februar 1921 wohnten hier der Schlosser Josef Vénos (*1877) vom Heizhaus der Staatsbahn ČSD in Mährisch Schönberg (Šumperk) mit Familie sowie als Untermieterin die Postgehilfin Julie Janků (*1879) vom Postamt in Brünles (Brníčko)."
    },
    cp5: {
      name: "Nr. 5",
      localName: "Denkmalhof Lukas, Krobot & Koš",
      type: "Denkmalgeschütztes Bauerngut (NPÚ)",
      description: "Dreiflügeliges denkmalgeschütztes Bauerngut (ÚSKP 33696/8-2352) mit gemauertem Empire-Giebel aus dem frühen 19. Jahrhundert, Pfeilerlaubengang (Žudr) und zweigeschossigem Speicher. Im 19. Jh. bewirtschaftet von den Familien Lukas und Krobot, 1921 von der Witwe Marie Košová (*1872) mit den Söhnen František (Schlosserlehrling) und Josef (*1911, Realschüler in Mährisch Schönberg)."
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
      description: "Der stattlichste weltliche Bau in Lomigsdorf (Dlouhomilov): das zweigeschossige barocke Erbgericht (ÚSKP 20137/8-2353) an der Ostseite des Dorfplatzes. 1857 Sitz des Erbrichtergeschlechts Merta, später der Familien Krobot und Pavlík (1869 bis zu 23 Bewohner). Im Februar 1921 lebten hier 3 Haushalte (14 Personen): Landwirt František Hvížď, Industriallehrerin Eliška Ptáčková mit der 18 Tage alten Jitřenka Kvapilová (*28. 1. 1921) sowie die Ausgedinger Navrátil."
    },
    cp8: {
      name: "Nr. 8",
      localName: "Anwesen Hošek, Šafář & Drlík",
      type: "Landwirtschaftliches Anwesen",
      description: "Anwesen nahe dem Dorfplatz. Der Zählbogen von 1921 zeigt eindringlich die Folgen des Ersten Weltkriegs: Hier lebten der Witwer Josef Hošek (*1856) mit seiner stummen Tochter Anna (*1900), die Kriegerwitwe Amálie Šafářová (*1885) mit drei kleinen Töchtern sowie der ledige Landwirt und Kriegsinvalide František Drlík (*1876)."
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
      description: "Historisches Schulgebäude unweit von Kirche und Pfarrhof, in dem Generationen von Kindern aus Lomigsdorf (Dlouhomilov) und Dreihofen (Medelské) unterrichtet wurden."
    },
    cp22: {
      name: "Nr. 22 (Bei Dvořák)",
      localName: "Denkmalhof Dvořák (163 Jahre in einer Familie)",
      type: "Denkmalgeschütztes Bauerngut (NPÚ)",
      description: "Denkmalgeschütztes nordmährisches Bauerngut (ÚSKP 45002/8-2355) mit urkundlich belegter Kontinuität des Geschlechts Dvořák unter exakt derselben Hausnummer von mindestens 1786 (Trauung von Pavel Dvořák „aus Lomigsdorf Nr. 22“) bis 1949 (Tod der 91-jährigen Anna Dvořáková geb. Kouřilová). Schauplatz der berühmten Doppelhochzeit vom 29. Juli 1878."
    },
    cp24: {
      name: "Nr. 24",
      localName: "Denkmalhof Kouřil",
      type: "Denkmalgeschütztes Bauerngut (NPÚ)",
      description: "Denkmalgeschütztes Bauerngut (ÚSKP 35225/8-2356) neben Nr. 22. Im Juli 1878 verheiratete der schwer an Tuberkulose erkrankte Bauer František Kouřil (*1819) an einem einzigen Tag (29. 7. 1878) seine beiden Töchter Anna und Ludmila mit den Brüdern Josef und Karel Dvořák – nur 13 Tage vor seinem Tod."
    },
    cp29: {
      name: "Nr. 29 (Bauerngut Dvořák)",
      localName: "Stammhof Dvořák (seit 1679)",
      type: "Denkmalgeschütztes Bauerngut (NPÚ)",
      description: "Eines der am besten dokumentierten Bauerngüter im Ort (Kulturdenkmal ÚSKP 31135/8-2357). Die Grundbücher der Herrschaft Hohenstadt (Zábřeh) belegen das Geschlecht Dvořák hier bereits seit 1679. Geburtshaus des Prager Juristen JUDr. Jan Dvořák (*1826, 1857 als „Jurist in Prag II“ geführt) und Wirkungsstätte von Alois Dvořák (*1830), Josef Dvořák (*1879) & Amálie geb. Motyková (*1888) sowie deren Tochter Marie (*15. 6. 1920), Ehefrau von PhMr. Jaroslav Berka."
    },
    cp43: {
      name: "Nr. 43",
      localName: "Denkmalhäusel Tempír & Linhart (1836)",
      type: "Denkmalgeschütztes Häusel & Scheune (NPÚ)",
      description: "Denkmalgeschütztes Häusleranwesen mit Baukern von 1836, seltener gezimmerter Scheune mit Lehmbewurf und eigener Quellwasser-Gefälleleitung (ÚSKP 34058/8-2358). Im 19. Jahrhundert Sitz der Wagnerfamilie Tempír, 1921 bewohnt vom Ausgedinger František Drlík (*1855) und dem Landwirt Josef Linhart (*1883)."
    },
    cp46: {
      name: "Nr. 46",
      localName: "Häusel Dvořák",
      type: "Häusleranwesen",
      description: "Häusleranwesen am Ortsrand, in dem der Häusler Alois Dvořák (*1840) mit seiner Ehefrau Mariana (*1838) und dem Sohn, dem Maurer Jan Dvořák (*1873), lebte."
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
    benkov_kaple: {
      name: "Kapelle des hl. Antonius von Padua (Benke / Benkov)",
      localName: "Zentrum des deutschen Höhendorfes Benke (Benkov)",
      type: "Kapelle / Wahrzeichen von Benke (Benkov)",
      description: "Kapelle des hl. Antonius von Padua in der Ortsmitte des Höhendorfes Benke / Benkov (1385 Bentkow) auf dem Plateau südöstlich über Lomigsdorf. Bis 1945 war Benke eine überwiegend deutsche Bauerngemeinde (Familien Kauer, Heger, Rössner, Blaschke, Bischof, Weiser), eingepfarrt nach Lomigsdorf; 1960 wurden beide Gemeinden zusammengeschlossen."
    }
  }
};

i18nData.terms = {
  en: {
    "Venkovská usedlost / Dům": "Country Homestead / House",
    "Selský grunt": "Peasant Farmstead",
    "Selská usedlost": "Peasant Farmstead",
    "Chalupa / Domkářské stavení": "Cottage / Smallholder House",
    "Venkovská usedlost (kulturní památka)": "Protected Country Homestead (Cultural Monument)",
    "Bývalá dědičná rychta (kulturní památka)": "Former Hereditary Magistrate's Estate (Cultural Monument)",
    "Farní kostel (kulturní památka)": "Parish Church (Cultural Monument)",
    "Fara": "Catholic Rectory",
    "Usedlost v osadě Medelské": "Homestead in the Hamlet of Medelské",
    "Usedlost v Benkově (historický katastr 1834)": "Homestead in Benkov (1834 Historical Cadastre)",
    "Usedlost čp.": "Homestead No.",
    "Dům čp.": "House No.",
    "Benkov čp.": "Benkov No.",
    "Medelské čp.": "Medelské No.",
    "Dlouhomilov čp.": "Dlouhomilov No.",
    "Památkově chráněno": "Heritage Protected",
    "Kulturní památka": "Cultural Monument",
    "Zobrazit na mapě": "Show on Map",
    "Otevřít detail domu": "Open House Detail",
    "Zavřít": "Close",
    "Sčítání lidu": "Population Census",
    "Pozemková kniha": "Land Register",
    "Matrika": "Parish Register",
    "Majitel domu": "House Owner",
    "Držitel domu": "House Holder",
    "Jméno a příjmení": "Full Name",
    "Vztah k hlavě domácnosti": "Relation to Head",
    "Povolání / Stav": "Occupation / Status",
    "Rok narození": "Birth Year",
    "Místo narození": "Birthplace",
    "Poznámka": "Note",
    "manželka": "wife",
    "syn": "son",
    "dcera": "daughter",
    "otec": "father",
    "matka": "mother",
    "výměnkář": "retiree (výměnkář)",
    "výměnkářka": "retiree (výměnkářka)",
    "služka": "maidservant",
    "čeledín": "farmhand",
    "pacholek": "stable hand",
    "hospodyně": "housekeeper",
    "podruh": "lodger (podruh)",
    "podruhyně": "lodger (podruhyně)",
    "sedlák": "farmer (peasant)",
    "rolník": "farmer",
    "domkář": "cottager",
    "chalupník": "smallholder",
    "výměník": "retiree",
    "kovář": "blacksmith",
    "kolář": "wheelwright",
    "tkadlec": "weaver",
    "tkadlena": "weaver",
    "bělič": "yarn bleacher",
    "zedník": "bricklayer",
    "zámečník": "locksmith",
    "farář": "parish priest",
    "děkan": "dean (parish priest)"
  },
  de: {
    "Venkovská usedlost / Dům": "Landwirtschaftliches Anwesen / Haus",
    "Selský grunt": "Bauerngut (Erbhof)",
    "Selská usedlost": "Bauerngut",
    "Chalupa / Domkářské stavení": "Häusel / Häusleranwesen",
    "Venkovská usedlost (kulturní památka)": "Denkmalgeschütztes Bauerngut (Kulturdenkmal)",
    "Bývalá dědičná rychta (kulturní památka)": "Ehemaliges Erbgericht (Kulturdenkmal)",
    "Farní kostel (kulturní památka)": "Pfarrkirche (Kulturdenkmal)",
    "Fara": "Katholischer Pfarrhof",
    "Usedlost v osadě Medelské": "Anwesen im Weiler Dreihofen (Medelské)",
    "Usedlost v Benkově (historický katastr 1834)": "Anwesen in Benke / Benkov (Historischer Kataster 1834)",
    "Usedlost čp.": "Anwesen Nr.",
    "Dům čp.": "Haus Nr.",
    "Benkov čp.": "Benke (Benkov) Nr.",
    "Medelské čp.": "Dreihofen (Medelské) Nr.",
    "Dlouhomilov čp.": "Lomigsdorf (Dlouhomilov) Nr.",
    "Památkově chráněno": "Denkmalgeschützt",
    "Kulturní památka": "Kulturdenkmal",
    "Zobrazit na mapě": "Auf der Karte zeigen",
    "Otevřít detail domu": "Hausdetail öffnen",
    "Zavřít": "Schließen",
    "Sčítání lidu": "Volkszählung",
    "Pozemková kniha": "Grundbuch",
    "Matrika": "Kirchenbuch (Matrik)",
    "Majitel domu": "Hausbesitzer",
    "Držitel domu": "Hausinhaber",
    "Jméno a příjmení": "Vor- und Familienname",
    "Vztah k hlavě domácnosti": "Verhältnis zum Haushaltsvorstand",
    "Povolání / Stav": "Beruf / Stand",
    "Rok narození": "Geburtsjahr",
    "Místo narození": "Geburtsort",
    "Poznámka": "Anmerkung",
    "manželka": "Ehegattin",
    "syn": "Sohn",
    "dcera": "Tochter",
    "otec": "Vater",
    "matka": "Mutter",
    "výměnkář": "Ausgedinger",
    "výměnkářka": "Ausgedingerin",
    "služka": "Dienstmagd",
    "čeledín": "Knecht",
    "pacholek": "Pferdeknecht",
    "hospodyně": "Wirtschafterin",
    "podruh": "Inwohner",
    "podruhyně": "Inwohnerin",
    "sedlák": "Bauer (Grundbesitzer)",
    "rolník": "Landwirt",
    "domkář": "Häusler",
    "chalupník": "Gärtler / Chaluppner",
    "výměník": "Ausgedinger",
    "kovář": "Schmied",
    "kolář": "Wagner",
    "tkadlec": "Weber",
    "tkadlena": "Weberin",
    "bělič": "Garnbleicher",
    "zedník": "Maurer",
    "zámečník": "Schlosser",
    "farář": "Pfarrer",
    "děkan": "Dechant"
  }
};

// ============================================================================
// LANGUAGE SWITCHING ENGINE (CS / EN / DE)
// ============================================================================

window.currentLang = localStorage.getItem("dlouhomilov_lang") || "cs";

function captureBaseCzechData() {
  if (window.__baseCzData) return;
  window.__baseCzData = {
    storyData: typeof storyData !== "undefined" ? JSON.parse(JSON.stringify(storyData)) : null,
    comicData: typeof comicData !== "undefined" ? JSON.parse(JSON.stringify(comicData)) : null,
    housesMeta: {}
  };
  if (typeof housesData !== "undefined" && Array.isArray(housesData)) {
    housesData.forEach(h => {
      window.__baseCzData.housesMeta[h.id] = {
        name: h.name,
        localName: h.localName,
        type: h.type,
        description: h.description
      };
    });
  }
}

function applyDataOverlay(lang) {
  captureBaseCzechData();
  if (!window.__baseCzData) return;

  // 1. Restore Czech base data first
  if (window.__baseCzData.storyData && typeof storyData !== "undefined") {
    const baseS = JSON.parse(JSON.stringify(window.__baseCzData.storyData));
    Object.assign(storyData, baseS);
  }
  if (window.__baseCzData.comicData && typeof comicData !== "undefined") {
    const baseC = JSON.parse(JSON.stringify(window.__baseCzData.comicData));
    Object.assign(comicData, baseC);
  }
  if (typeof housesData !== "undefined" && Array.isArray(housesData)) {
    housesData.forEach(h => {
      const orig = window.__baseCzData.housesMeta[h.id];
      if (orig) {
        h.name = orig.name;
        h.localName = orig.localName;
        h.type = orig.type;
        h.description = orig.description;
      }
    });
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

  // 4. Overlay Houses Data (explicit + pattern-based fallback for all 190+ houses)
  const hOvMap = (i18nData.houses && i18nData.houses[lang]) || {};
  const tMap = (i18nData.terms && i18nData.terms[lang]) || {};
  if (typeof housesData !== "undefined" && Array.isArray(housesData)) {
    housesData.forEach(h => {
      const explicit = hOvMap[h.id];
      if (explicit) {
        if (explicit.name) h.name = explicit.name;
        if (explicit.localName) h.localName = explicit.localName;
        if (explicit.type) h.type = explicit.type;
        if (explicit.description) h.description = explicit.description;
      } else {
        // Pattern-based translation for remaining homesteads
        if (lang === "en") {
          if (h.name) {
            h.name = h.name
              .replace(/^Dům čp\.\s*/i, "House No. ")
              .replace(/^Usedlost čp\.\s*/i, "Homestead No. ")
              .replace(/^Benkov čp\.\s*/i, "Benkov No. ")
              .replace(/^Medelské čp\.\s*/i, "Medelské No. ");
          }
          if (h.localName) {
            h.localName = h.localName
              .replace(/^Usedlost čp\.\s*/i, "Homestead No. ")
              .replace(/^Dům čp\.\s*/i, "House No. ")
              .replace(/^Benkov čp\.\s*/i, "Benkov No. ")
              .replace(/^Medelské čp\.\s*/i, "Medelské No. ")
              .replace(/historický katastr 1834/gi, "1834 historical cadastre");
          }
          if (h.description) {
            h.description = h.description
              .replace(/Historická usedlost v Dlouhomilově zachycená ve sčítáních lidu a pozemkových knihách\./g, "Historical homestead in Dlouhomilov recorded in population censuses and land registers.")
              .replace(/Historická usedlost v horní vsi Benkov \(něm\. Benke\) zakreslená na Císařském povinném otisku stabilního katastru z roku 1834\./g, "Historical homestead in the upland village of Benkov (German: Benke) plotted on the 1834 Imperial Imprint of the Stable Cadastre.");
          }
        } else if (lang === "de") {
          if (h.name) {
            h.name = h.name
              .replace(/^Dům čp\.\s*/i, "Haus Nr. ")
              .replace(/^Usedlost čp\.\s*/i, "Anwesen Nr. ")
              .replace(/^Benkov čp\.\s*/i, "Benke (Benkov) Nr. ")
              .replace(/^Medelské čp\.\s*/i, "Dreihofen (Medelské) Nr. ");
          }
          if (h.localName) {
            h.localName = h.localName
              .replace(/^Usedlost čp\.\s*/i, "Anwesen Nr. ")
              .replace(/^Dům čp\.\s*/i, "Haus Nr. ")
              .replace(/^Benkov čp\.\s*/i, "Benke (Benkov) Nr. ")
              .replace(/^Medelské čp\.\s*/i, "Dreihofen (Medelské) Nr. ")
              .replace(/historický katastr 1834/gi, "Historischer Kataster 1834");
          }
          if (h.description) {
            h.description = h.description
              .replace(/Historická usedlost v Dlouhomilově zachycená ve sčítáních lidu a pozemkových knihách\./g, "Historisches Anwesen in Lomigsdorf (Dlouhomilov), erfasst in den Volkszählungsbögen und Grundbüchern.")
              .replace(/Historická usedlost v horní vsi Benkov \(něm\. Benke\) zakreslená na Císařském povinném otisku stabilního katastru z roku 1834\./g, "Historisches Anwesen im Höhendorf Benke (Benkov), eingezeichnet auf dem Kaiserlichen Pflichtabdruck des Stabilen Katasters von 1834.");
          }
        }
        if (h.type && tMap[h.type]) {
          h.type = tMap[h.type];
        }
      }
    });
  }
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

  // Helper to set text or HTML safely by selector
  const setTxt = (sel, val) => {
    const el = document.querySelector(sel);
    if (el && val) el.textContent = val;
  };
  const setHtml = (sel, val) => {
    const el = document.querySelector(sel);
    if (el && val) el.innerHTML = val;
  };
  const setPlaceholder = (sel, val) => {
    const el = document.querySelector(sel);
    if (el && val) el.setAttribute("placeholder", val);
  };

  // Header & Desktop Navigation
  setTxt("header h1", ui.headerTitle);
  setTxt("header p.font-serif-body", ui.headerSubtitle);
  const navLinks = document.querySelectorAll("header nav a");
  if (navLinks[0]) navLinks[0].innerHTML = `<span>📖</span> <span>${ui.navStory.replace(/^📖\s*/, "")}</span>`;
  if (navLinks[1]) navLinks[1].innerHTML = `<span>🗺️</span> <span>${ui.navMap.replace(/^🗺️\s*/, "")}</span>`;
  if (navLinks[2]) {
    const countMatch = navLinks[2].textContent.match(/\(\d+\)/);
    const countStr = countMatch ? ` ${countMatch[0]}` : "";
    navLinks[2].innerHTML = `<span>👥</span> <span>${ui.navInhabitants.replace(/^👥\s*/, "")}${countStr}</span>`;
  }
  if (navLinks[3]) navLinks[3].innerHTML = `<span>🧭</span> <span>${ui.navHub.replace(/^🧭\s*/, "")}</span>`;
  const addBtnDesktop = document.querySelector("header nav button[onclick*='openAddHouseModal'] span.hidden");
  if (addBtnDesktop) addBtnDesktop.textContent = ui.navAddHouse;

  // Mobile quick bar
  const mobBarLinks = document.querySelectorAll("header > div.lg\\:hidden.flex.items-center.gap-1\\.5.overflow-x-auto a");
  if (mobBarLinks[0]) mobBarLinks[0].innerHTML = `<span>📖</span> <span>${ui.mobStory.replace(/^📖\s*/, "")}</span>`;
  if (mobBarLinks[1]) mobBarLinks[1].innerHTML = `<span>🗺️</span> <span>${ui.mobMap.replace(/^🗺️\s*/, "")}</span>`;
  if (mobBarLinks[2]) mobBarLinks[2].innerHTML = `<span>👥</span> <span>${ui.mobInhabitants.replace(/^👥\s*/, "")}</span>`;
  if (mobBarLinks[3]) mobBarLinks[3].innerHTML = `<span>📊</span> <span>${ui.mobDemography.replace(/^📊\s*/, "")}</span>`;
  if (mobBarLinks[4]) mobBarLinks[4].innerHTML = `<span>📜</span> <span>${ui.mobAtlas.replace(/^📜\s*/, "")}</span>`;
  if (mobBarLinks[5]) mobBarLinks[5].innerHTML = `<span>🧭</span> <span>${ui.mobGuide.replace(/^🧭\s*/, "")}</span>`;
  if (mobBarLinks[6]) mobBarLinks[6].innerHTML = `<span>🧬</span> <span>${ui.mobClusters.replace(/^🧬\s*/, "")}</span>`;

  // Story Section Header & Tabs
  setHtml("#story-tab-chapters", `<span>📜</span> <span>${ui.storyTabChapters}</span>`);
  setHtml("#story-tab-facts", `<span>✨</span> <span>${ui.storyTabFacts}</span>`);
  setHtml("#story-tab-comic", `<span>🎨</span> <span>${ui.storyTabComic}</span>`);
  setHtml("#story-tab-all", `<span>📑</span> <span class="hidden xl:inline">${ui.storyTabAll}</span>`);

  // Comic Header & Page Buttons
  const comicWrapper = document.getElementById("story-comic-wrapper");
  if (comicWrapper) {
    const badges = comicWrapper.querySelectorAll("span");
    if (badges[0]) badges[0].textContent = ui.comicBadge;
    if (badges[1]) badges[1].textContent = ui.comicMeta;
    const h3 = comicWrapper.querySelector("h3");
    if (h3) h3.textContent = ui.comicHeading;
    const p = comicWrapper.querySelector("p");
    if (p) p.textContent = ui.comicDesc;
    comicWrapper.querySelectorAll(".comic-page-btn").forEach(btn => {
      const pg = btn.getAttribute("data-comic-page");
      if (pg === "all") {
        btn.textContent = ui.comicAllPages;
      } else {
        const romans = { "1": "I.", "2": "II.", "3": "III.", "4": "IV." };
        btn.textContent = `${ui.comicPage} ${romans[pg] || pg}`;
      }
    });
    const printBtn = comicWrapper.querySelector("button[onclick*='printComicBrochure']");
    if (printBtn) printBtn.innerHTML = `<span>🖨️</span> <span>${ui.comicPrintBtn}</span>`;
  }

  // Story Facts Header
  const factsWrapper = document.getElementById("story-facts-wrapper");
  if (factsWrapper) {
    const h3 = factsWrapper.querySelector("h3");
    if (h3) h3.innerHTML = `<span>✨</span> ${ui.factsHeading}`;
    const p = factsWrapper.querySelector("p");
    if (p) p.textContent = ui.factsSubheading;
    const mdA = factsWrapper.querySelector("a[href*='pribeh_dlouhomilova.md']");
    if (mdA) mdA.textContent = ui.factsMdBtn;
  }

  // Map Controls
  setTxt("button.map-layer-btn[data-layer='osm']", ui.mapBaseOsm);
  setTxt("button.map-layer-btn[data-layer='ortho']", ui.mapBaseOrtho);
  setTxt("button.map-layer-btn[data-layer='topo']", ui.mapBaseTopo);
  setTxt("#historical-map-select option[value='cadastre1834']", ui.mapOpt1834);
  setTxt("#historical-map-select option[value='vojenske1_1764']", ui.mapOpt1764);
  setTxt("#historical-map-select option[value='vojenske2_1838']", ui.mapOpt1838);
  setTxt("#historical-map-select option[value='vojenske3_1874']", ui.mapOpt1874);
  setTxt("#historical-map-select option[value='vojenske3_1937']", ui.mapOpt1937);
  setTxt("#historical-map-select option[value='topo1952']", ui.mapOpt1952);
  setTxt("button.blend-preset-btn[data-preset='modern']", ui.mapPresetToday);
  setTxt("button.blend-preset-btn[data-preset='historical']", ui.mapPresetHistory);
  setHtml("#toggle-split-btn", `<span>🗔</span> <span>${ui.mapSideBySide}</span>`);
  setHtml("#toggle-georef-btn", `<span>🎯</span> <span>${ui.mapCalibration}</span>`);

  // House List Panel
  setHtml("#houses-list-card h2", `<span>🏡</span> ${ui.houseListTitle}`);
  setTxt("button.heritage-filter-btn[data-filter='all']", ui.filterAllHouses);
  setHtml("button.heritage-filter-btn[data-filter='heritage']", `<span>🏛️</span> ${ui.filterHeritageOnly}`);
  setPlaceholder("#house-search-input", ui.houseSearchPlaceholder);

  // Inhabitants Section
  const inhSec = document.getElementById("obyvatele-section");
  if (inhSec) {
    const h2 = inhSec.querySelector("h2");
    if (h2) h2.textContent = ui.inhabitantsTitle;
    setHtml("#view-mode-unified-btn", `<span>🔗</span> <span>${ui.viewUnified}</span>`);
    setPlaceholder("#registry-search-input", ui.registrySearchPlaceholder);
  }

  // Badatelna Hub Section
  const hubSec = document.getElementById("badatelna-hub-section");
  if (hubSec) {
    const h2 = hubSec.querySelector("h2");
    if (h2) h2.textContent = ui.hubTitle;
    setHtml("#hub-btn-demografie", `<span>📊</span> <span>${ui.hubBtnDemo}</span>`);
    setHtml("#hub-btn-atlas", `<span>📜</span> <span>${ui.hubBtnAtlas}</span>`);
    setHtml("#hub-btn-pruvodce", `<span>🧭</span> <span>${ui.hubBtnGuide}</span>`);
    setTxt("#hub-btn-none", ui.hubBtnCollapse);
  }

  // Demography Section
  const demoSec = document.getElementById("demografie-section");
  if (demoSec) {
    const h2 = demoSec.querySelector("h2");
    if (h2) h2.textContent = ui.demoTitle;
    setHtml("#demo-tab-all", `<span>📑</span> <span>${ui.demoTabAll}</span>`);
    setHtml("#demo-tab-histogram", `<span>🎂</span> <span>${ui.demoTabHistogram}</span>`);
    setHtml("#demo-tab-origins", `<span>🌍</span> <span>${ui.demoTabOrigins}</span>`);
    setHtml("#demo-tab-wealth", `<span>🏡</span> <span>${ui.demoTabWealth}</span>`);
    const ageH3 = document.querySelector("#demography-age-wrapper h3");
    if (ageH3) ageH3.textContent = ui.demoTopic1Title;
    const origH3 = document.querySelector("#demography-origins-wrapper h3");
    if (origH3) origH3.textContent = ui.demoTopic2Title;
    const wealthH3 = document.querySelector("#demography-wealth-wrapper h3");
    if (wealthH3) wealthH3.textContent = ui.demoTopic3Title;
  }

  // Floating feedback button
  const fbSpan = document.querySelector("#floating-feedback-btn span.hidden");
  if (fbSpan) fbSpan.textContent = ui.feedbackBtn;
}

window.switchLanguage = function(lang) {
  if (!["cs", "en", "de"].includes(lang)) lang = "cs";
  window.currentLang = lang;
  try {
    localStorage.setItem("dlouhomilov_lang", lang);
  } catch (e) {}

  applyDataOverlay(lang);

  // Re-render dynamic sections
  if (typeof renderStorySection === "function") renderStorySection();
  if (typeof renderHouseCards === "function") renderHouseCards();
  if (typeof currentHouseId !== "undefined" && currentHouseId && typeof housesData !== "undefined" && typeof renderHouseDetailContent === "function") {
    const updatedHouse = housesData.find(h => h.id === currentHouseId);
    if (updatedHouse) renderHouseDetailContent(updatedHouse);
  }
  if (typeof renderDemographySection === "function") renderDemographySection();
  if (typeof renderHistoricalMapsSection === "function") renderHistoricalMapsSection();

  applyDomTranslations(lang);
};

window.initI18n = function() {
  captureBaseCzechData();
  if (window.currentLang && window.currentLang !== "cs") {
    window.switchLanguage(window.currentLang);
  } else {
    applyDomTranslations("cs");
  }
};
