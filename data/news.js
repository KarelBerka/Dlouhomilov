// ==========================================================================
// DATA AKTUALIT & VÝVOJE PROJEKTU DLOUHOMILOV & BENKOV
// Generováno a udržováno nad ověřenými milníky badatelského archivu
// ==========================================================================

const newsCategories = [
  { key: "all", label: "Vše", labelEn: "All", labelDe: "Alle", icon: "📰" },
  { key: "feature", label: "Nové funkce webu", labelEn: "Site Features", labelDe: "Web-Funktionen", icon: "✨" },
  { key: "census", label: "Sčítání lidu & domy", labelEn: "Census & Houses", labelDe: "Volkszählung & Höfe", icon: "📜" },
  { key: "analysis", label: "Demografie & Mapy", labelEn: "Demography & Maps", labelDe: "Demografie & Karten", icon: "📊" }
];

const newsData = [
  {
    id: "news_2026_11_21_scitani_1880_dlouhomilov_komplet_5258",
    date: "2026-11-21",
    category: "census",
    badge: "Sčítání 1880 Dlouhomilov komplet • 5 258 záznamů",
    badgeEn: "1880 Dlouhomilov Census Complete • 5,258 Records",
    badgeDe: "Zählung 1880 Lomigsdorf komplett • 5.258 Einträge",
    title: "Kompletní Sčítání lidu 1880 pro celý Dlouhomilov (75 domů, 543/576 osob = 100 % ČSÚ, 156 skenů) – rejstřík vzrostl na 5 258 záznamů a 1 312 sjednocených osob",
    titleEn: "Complete 1880 Census for All of Dlouhomilov (75 Houses, 543/576 Residents = 100% ČSÚ, 156 Scans) – Registry Grows to 5,258 Records & 1,312 Linked Persons",
    titleDe: "Vollständige Volkszählung 1880 für Lomigsdorf / Dlouhomilov (75 Häuser, 543/576 Einwohner = 100 % ČSÚ, 156 Scans) – Register wächst auf 5.258 Einträge & 1.312 verknüpfte Personen",
    summary: "Byl dokončen úplný přepis Sčítání lidu 1880 pro celý Dlouhomilov (ZAO Opava, OÚ Zábřeh, NAD 1000, inv. č. 1476, karton 330, 228 snímků: všech 75 evidenčních domů – 72 obydlených + 3 neobydlené/zbořené čp. 19 Demolirt, čp. 29 Neobydleno a čp. 81 Demolirt – přesně 543 přítomných / 576 zapsaných obyvatel = 100 % shoda s úřední statistikou ČSÚ) včetně 156 nových webových náhledů archů (1880_*.jpg a 2 listů součtového archu u medelske_cp1). Spolu s osadou Medelské (21 domů, 156 přít. / 159 zaps.) je tak celý katastr Dlouhomilova a Medelského v ročníku 1880 kompletně zpracován (96 domů / 92 obydlených, 143 bytů, 699 přítomných / 735 zapsaných obyvatel na 292 snímcích; 63 dělníků v přádelnách lnu, 45 řemeslníků a učňů, c. k. poštmistr Karel Katzer na čp. 8 a 98letý Jan Poisel *1782 na čp. 54). Celý rejstřík vzrostl na 5 258 záznamů (+546) a po přepočtu Record Linkage i znalostního grafu (build_clusters.js) stoupl počet sjednocených osob na 1 312 (+116), propojených záznamů na 3 539 (+423 = 67,3 %), osob sledovaných ve 3+ sčítáních na 602 a stěhování mezi čp. na 513 (3 275 clusterů, 1 542 přechodů na časové ose, 3 894 uzlů a 19 465 hran). Doplněno bylo geokódování všech nových rodišť (Felwies = Rejvíz, Zimmischl = Třemešek, Špičky, Beňov, Chropyně, Choceň, Bartoňov aj.), aktualizován komiks a demografie 1880 i zkalibrovány komiksové perspektivy údolí.",
    summaryEn: "Completed the full transcription of the 1880 census for all of Dlouhomilov (ZAO Opava, District Office Zábřeh, NAD 1000, inv. No. 1476, box 330, 228 scans: all 75 houses — 72 inhabited + 3 uninhabited/demolished Nos. 19, 29, and 81 — matching 543 present / 576 recorded residents = 100% ČSÚ) together with 156 new archival sheet web previews and the municipal Sammelbogen. Combined with Medelské (21 houses, 156 present / 159 recorded), the entire 1880 Dlouhomilov & Medelské cadastre is now 100% transcribed (96 houses / 92 inhabited, 143 apartments, 699 present / 735 recorded residents across 292 scans; 63 flax-mill workers, 45 craftsmen & apprentices, imperial postmaster Karel Katzer at No. 8, and 98-year-old Jan Poisel *1782 at No. 54). The master registry expanded to 5,258 records (+546), lifting cross-census Record Linkage & Knowledge Graph results to 1,312 unified persons (+116), 3,539 linked records (+423 = 67.3%), 602 persons tracked across 3+ censuses, 513 house moves, 3,275 identity clusters, 1,542 timeline transitions, 3,894 nodes, and 19,465 edges. Also added geocoding for all new 1880 birthplaces (Felwies = Rejvíz, Zimmischl = Třemešek, Špičky, Beňov, Chropyně, Choceň, Bartoňov, etc.), updated 1880 livelihood/demography stats, and calibrated comic panel vistas.",
    summaryDe: "Vollständige Transkription der Volkszählung 1880 für ganz Lomigsdorf / Dlouhomilov abgeschlossen (ZAO Troppau, Bezirksamt Hohenstadt, NAD 1000, Inv.-Nr. 1476, Karton 330, 228 Scans: alle 75 Häuser – 72 bewohnte + 3 unbewohnte/abgebrochene Nr. 19, 29 und 81 – genau 543 anwesende / 576 erfasste Einwohner = 100 % ČSÚ) samt 156 neuen Web-Vorschauen und Gemeindesammelbogen. Gemeinsam mit Dreihofen / Medelské (21 Häuser, 156/159 Ew.) ist der Jahrgang 1880 für die gesamte Gemeinde vollständig erschlossen (96 Häuser / 92 bewohnte, 143 Wohnungen, 699 anwesende / 735 erfasste Einwohner auf 292 Scans; 63 Flachsspinnerei-Arbeiter, 45 Handwerker & Lehrlinge, k. k. Postmeister Karel Katzer Nr. 8 und 98-jähriger Jan Poisel *1782 Nr. 54). Das Gesamtregister wuchs auf 5.258 Einträge (+546), die Verknüpfung in build_clusters.js auf 1.312 verknüpfte Personen (+116), 3.539 verknüpfte Einträge (+423 = 67,3 %), 602 Personen über 3+ Zählungen, 513 Hauswechsel, 3.275 Cluster, 1.542 Zeitleisten-Übergänge, 3.894 Knoten und 19.465 Kanten. Ergänzt wurden die Geokodierung aller neuen Geburtsorte 1880 (Felwies = Rejvíz, Zimmischl = Třemešek, Špičky, Beňov, Chropyně, Choceň, Bartoňov usw.), die aktualisierte Demografie/Erwerbsstatistik 1880 sowie kalibrierte Comic-Perspektiven.",
    links: [
      { label: "👥 Sčítání 1880 (735 osob)", labelEn: "👥 1880 Census (735 Res.)", labelDe: "👥 Zählung 1880 (735 Ew.)", href: "obyvatele.html#year=1880" },
      { label: "🔗 Sjednocené osoby (1 312)", labelEn: "🔗 Unified Persons (1,312)", labelDe: "🔗 Verknüpfte Personen (1.312)", href: "obyvatele.html#view=unified" },
      { label: "📈 Časová osa stěhování", labelEn: "📈 Migration Timeline", labelDe: "📈 Umzugs-Zeitleiste", href: "cluster.html#tab=timeline" },
      { label: "🎂 Demografie & obživa 1880", labelEn: "🎂 1880 Demography & Livelihoods", labelDe: "🎂 Demografie & Erwerb 1880", href: "demografie.html?year=1880#histogram" }
    ]
  },
  {
    id: "news_2026_11_20_komiks_obziva_demografie_srovnani_1857_1921",
    date: "2026-11-20",
    category: "analysis",
    badge: "7 komiksů obživy • Demografie 1857–1921",
    badgeEn: "7 Livelihood Comics • 1857–1921 Demography",
    badgeDe: "7 Erwerbs-Comics • Demografie 1857–1921",
    title: "7 komiksových obrazů obživy pro každé sčítání (1857–1921, celkem 21 panelů), přepočet demografie 4 712 osob a srovnávací tabulka ročníků",
    titleEn: "7 Livelihood Comic Panels Across Every Census Year (1857–1921, 21 Panels Total), Full 4,712-Record Demography Recalculation & Year Comparison Table",
    titleDe: "7 Erwerbs-Comicbilder für jede Zählung (1857–1921, gesamt 21 Tafeln), Neuberechnung aller 4.712 Demografie-Einträge & Jahresvergleich",
    summary: "Komiksová kronika v příloze Příběhu obce byla rozšířena o listy VI. (1857–1890) a VII. (1900–1921) se sedmi novými obrazy (panel_census_1857.jpg–1921.jpg) na celkových 21 panelů na 7 stranách, a přes nový strukturovaný atlas censusLivelihoodAtlas se přímo promítá i do modulu Demografie. Návštěvníci tak pro každý ročník vidí přechod od svobodných gruntů a prvního pražského právníka Johanna Dvořáka (1857) přes šenk, řezníka, obchodníka s máslem a porodní bábu na rychtě čp. 7 (1869), přádelnické nádeníky a učně (1880), 137 tkalců lnu a 17 tkalců hedvábí (1890), stolaře, koláře, poštovního postiliona a železničáře (1900), populační maximum 1 177 osob v roce 1910 (64 běličů plátna a příze, 75 domáckých tkalců, 130 továrních textiláků, 15 obchodů) až po první republiku 1921 (závody Oberleithner, Primavesi, Reiter a Seidl, 19 železničářů a silničářů ČSD, vrchní poštmistrová Emilie Pospíšilová a studenti reálky). Současně proběhl úplný přepočet věkových pyramid, kohort a velikosti domácností nad plným fondem 4 712 operátních záznamů (4 703 se známým věkem ve 167 staveních a 337 bytech; nárůst průměrného věku z 24,5 let v r. 1869 na 32,1 let v r. 1921 a podílu seniorů 60+ na 15,3 %), doplněných o novou klikací srovnávací tabulku ročníků (renderDemographyYearsComparisonTable).",
    summaryEn: "The Comic Chronicle has been expanded with Sheets VI (1857–1890) and VII (1900–1921), adding seven census livelihood scenes (panel_census_1857.jpg–1921.jpg) for 21 panels across 7 sheets total, wired directly into the Demography module via the new structured censusLivelihoodAtlas. Each census year pairs real census jobs with visual storytelling: post-1848 free farmsteads and Prague law student Johann Dvořák (1857), innkeeper/butcher/butter trader/midwife & first flax spinners at Rychta No. 7 (1869), flax-mill day laborers & craft apprentices (1880), 137 linen & 17 silk weavers (1890), joiners, wheelwright, mail postilion & railwaymen (1900), the 1910 peak of 1,177 residents (64 yarn/linen bleachers, 75 home weavers, 130 factory textile workers, 15 shops), and First Republic employers in 1921 (Oberleithner, Primavesi, Reiter, Seidl, 19 ČSD railwaymen & roadmen, postmistress Emilie Pospíšilová, Šumperk Realschule students). Alongside it, all age pyramids, cohorts, and household stats were recalculated over the complete 4,712-record archive (4,703 with known age across 167 houses & 337 apartments; mean age rising 24.5 → 32.1 years, 60+ seniors reaching 15.3% in 1921), accompanied by a new one-click year comparison table.",
    summaryDe: "Die Comic-Chronik wurde um die Bögen VI (1857–1890) und VII (1900–1921) mit sieben neuen Erwerbsbildern (panel_census_1857.jpg–1921.jpg) auf insgesamt 21 Tafeln auf 7 Bögen erweitert und über den neuen strukturierten Atlas censusLivelihoodAtlas direkt in das Demografie-Modul eingebunden. Für jeden Zählungsjahrgang zeigt sich der Wandel der Lebensgrundlagen in Dlouhomilov (Lomigsdorf), Medelské (Dreihofen) und Benkov (Benke): freie Bauernhöfe und der erste Prager Jurastudent Johann Dvořák (1857), Schenke, Fleischer, Butterhändler, Hebamme und erste Flachsspinnerinnen im Erbgericht Nr. 7 (1869), Spinnereitagelöhner und Lehrlinge (1880), 137 Leinen- und 17 Seidenweber (1890), Tischler, Wagner, Postillon und Eisenbahner (1900), das Bevölkerungshoch von 1.177 Einwohnern 1910 (64 Garn-/Leinwandbleicher, 75 Hausweber, 130 Fabrikweber, 15 Läden) bis zur Ersten Republik 1921 (Oberleithner, Primavesi, Reiter, Seidl, 19 ČSD-Eisenbahner & Straßenwärter, Postmeisterin Emilie Pospíšilová, Realschüler). Zugleich wurden Alterspyramiden, Kohorten und Haushaltsgrößen für alle 4.712 Zählungseinträge neu berechnet (4.703 mit bekanntem Alter in 167 Häusern und 337 Wohnungen; Durchschnittsalter 24,5 → 32,1 Jahre) und um eine interaktive Jahresvergleichstabelle ergänzt.",
    links: [
      { label: "👷 Komiks obživy (1857–1921)", labelEn: "👷 Livelihood Comics (1857–1921)", labelDe: "👷 Erwerbs-Comics (1857–1921)", href: "pribeh.html#comic-census" },
      { label: "🎂 Věková pyramida & srovnání let", labelEn: "🎂 Age Pyramid & Year Comparison", labelDe: "🎂 Alterspyramide & Jahresvergleich", href: "demografie.html#histogram" },
      { label: "🎨 Komiksová kronika (21 panelů)", labelEn: "🎨 Comic Chronicle (21 Panels)", labelDe: "🎨 Comic-Chronik (21 Bilder)", href: "pribeh.html#comic" }
    ]
  },
  {
    id: "news_2026_11_20_casova_osa_stehovani_migrace_1850_1925",
    date: "2026-11-20",
    category: "feature",
    badge: "Časová osa stěhování 1850–1925 • Clustery",
    badgeEn: "1850–1925 Migration Timeline • Clusters",
    badgeDe: "Umzugs-Zeitleiste 1850–1925 • Cluster",
    title: "Interaktivní časová osa přechodů mezi staveními a migrace zvenčí (1850–1925) nad 1 414 přesuny a modální detail obyvatel stavení",
    titleEn: "Interactive House-Transition & External Migration Timeline (1850–1925) Across 1,414 Moves Plus Homestead Residents Modal",
    titleDe: "Interaktive Zeitleiste der Hauswechsel & Zuwanderung (1850–1925) über 1.414 Umzüge samt Hausbewohner-Modalansicht",
    summary: "Modul Clustery & Síť vztahů (cluster.html) získal novou hlavní záložku Časová osa přechodů mezi staveními & migrace zvenčí (1850–1925) vykreslenou na interaktivním HTML5 plátně (cluster_app.js, build_clusters.js, cluster_dataset.js). Zachycuje 1 414 zřetězených přechodů a 1 780 migračních toků napříč 3 042 osobními clustery (3 645 uzlů, 17 724 hran) ve všech staveních Dlouhomilova, Medelského a Benkova, přičemž barevně odlišuje vnitroobecní stěhování mezi čp. od příchodů z okolních obcí, počítá dominantní rody každého domu (houseStats), nabízí filtry osady, typu přechodu a řazení i interaktivní inspektor a nový modal Obyvatelé stavení.",
    summaryEn: "The Clusters & Knowledge Graph app (cluster.html) now features a dedicated HTML5 Canvas tab: House-Transition & External Migration Timeline (1850–1925). Powered by an upgraded build_clusters.js & cluster_dataset.js pipeline covering 1,414 transitions and 1,780 migration flows across 3,042 identity clusters (3,645 nodes, 17,724 edges) across Dlouhomilov, Medelské, and Benkov, it distinguishes intra-village moves between house numbers from external arrivals, computes dominant family lineages per homestead (houseStats), provides settlement/type/sort filters and live search, and adds an interactive Homestead Residents modal (#house-inhabitants-modal).",
    summaryDe: "Das Cluster- & Wissensgraph-Modul (cluster.html) erhielt einen neuen Hauptreiter: Interaktive Zeitleiste der Hauswechsel & Außenmigration (1850–1925) auf HTML5-Canvas-Basis. Über alle Anwesen von Lomigsdorf / Dlouhomilov, Dreihofen / Medelské und Benke / Benkov visualisiert sie 1.414 Übergänge und 1.780 Migrationsflüsse aus 3.042 Personenclustern (3.645 Knoten, 17.724 Kanten), unterscheidet innerörtliche Umzüge von Zuwanderung von außerhalb, berechnet dominante Familiengeschlechter pro Haus (houseStats), bietet Siedlungs-, Typ- und Sortierfilter und ergänzt das neue Detailfenster der Hausbewohner.",
    links: [
      { label: "📈 Časová osa stěhování (1850–1925)", labelEn: "📈 Migration Timeline (1850–1925)", labelDe: "📈 Umzugs-Zeitleiste (1850–1925)", href: "cluster.html#tab=timeline" },
      { label: "🏛️ Rychta čp. 7 na časové ose", labelEn: "🏛️ Rychta No. 7 on Timeline", labelDe: "🏛️ Erbgericht Nr. 7 auf der Zeitleiste", href: "cluster.html#tab=timeline&house=cp7" },
      { label: "🕸️ Clustery & síť vztahů (3 042)", labelEn: "🕸️ Clusters & Network (3,042)", labelDe: "🕸️ Cluster & Beziehungsnetz (3.042)", href: "cluster.html" }
    ]
  },
  {
    id: "news_2026_11_20_prace_ke_stazeni_rozsirene_reference",
    date: "2026-11-20",
    category: "feature",
    badge: "Práce ke stažení • 24 studií & monografií",
    badgeEn: "Downloadable Works • 24 Theses & Books",
    badgeDe: "Arbeiten zum Download • 24 Studien & Bücher",
    title: "Nová sekce „📥 Práce ke stažení“ v Referencích: 24 vysokoškolských prací, monografií v NDK/Krameriu a volně dostupných PDF studií ve 3 skupinách",
    titleEn: "New “📥 Downloadable Works” Tab in References: 24 Theses, Digitized NDK/Kramerius Monographs & Open-Access Studies in 3 Groups",
    titleDe: "Neuer Bereich „📥 Arbeiten zum Download“ unter Referenzen: 24 Hochschulschriften, NDK-/Kramerius-Bücher & Open-Access-Studien in 3 Gruppen",
    summary: "Stránka reference.html byla rozšířena o novou záložku Práce ke stažení (reference.html#prace, data/references.js, app.js), která přehledně třídí 24 odborných prací o Dlouhomilově, Medelském a Benkově do tří skupin: (1) 6 vysokoškolských prací na theses.cz a is.muni.cz (Poislová 2018, Dudová, Urban 2022, Lukáč 2014, Roztomilá 2017, Bureš 2008/2010), (2) 8 digitalizovaných monografií a regionálních příruček v NDK/Krameriu (mj. Knöbl 1931 o Benkově, Čermáková 1974, Zapletal 1966, Nezbeda 1974 o letci Jaroslavu Kauerovi, Rusinský 1984 o Janu Jílkovi, Nasadil 1925–1931 o pověstech z Dlouhomilova a sokolovně, Vlastivěda moravská 1932) a (3) 10 volně otevřených studií z UPOL, UK Praha a VMO (Sitta 2018, Kohout 2009, Snášelová 2012, Skoumalová 2021, Sittová 2006, Uhlíř 2006, Lukáč 2017, Balík 2010 aj.), doplněných o přehled prací dostupných pouze prezenčně.",
    summaryEn: "Added a dedicated, filterable Downloadable Works tab to reference.html (reference.html#prace, data/references.js, app.js), organizing 24 key academic theses, digitized books, and open-access studies on Dlouhomilov, Medelské, and Benkov into three groups: (1) 6 theses on theses.cz / is.muni.cz (Poislová 2018, Dudová, Urban 2022, Lukáč 2014, Roztomilá 2017, Bureš 2008/2010), (2) 8 NDK/Kramerius digitized monographs (incl. Knöbl 1931 on Benkov, Čermáková 1974, Zapletal 1966, Nezbeda 1974 on pilot Jaroslav Kauer, Rusinský 1984 on Jan Jílek, Nasadil 1925–1931 on Dlouhomilov legends & Sokol Hall, and Vlastivěda moravská 1932), and (3) 10 directly open-access studies from UPOL, Charles University & VMO (Sitta 2018, Kohout 2009, Snášelová 2012, Skoumalová 2021, Sittová 2006, Uhlíř 2006, Lukáč 2017, Balík 2010, etc.), plus an inventory of in-person library-only titles.",
    summaryDe: "Die Seite reference.html wurde um den filterbaren Reiter „Arbeiten zum Download“ (reference.html#prace, data/references.js, app.js) erweitert. Er bündelt 24 Facharbeiten, NDK-/Kramerius-Digitalisate und Open-Access-Studien über Lomigsdorf / Dlouhomilov, Dreihofen / Medelské und Benke / Benkov in drei Gruppen: (1) 6 Hochschulschriften auf theses.cz / is.muni.cz, (2) 8 digitalisierte Monographien in NDK/Kramerius (u. a. Knöbl 1931 über Benke, Čermáková 1974, Zapletal 1966, Nezbeda 1974 über Flugkapitän Jaroslav Kauer, Rusinský 1984 über Jan Jílek, Nasadil 1925–1931 und Vlastivěda moravská 1932) sowie (3) 10 frei herunterladbare Studien (Sitta 2018, Kohout 2009, Snášelová 2012, Skoumalová 2021, Sittová 2006, Uhlíř 2006, Lukáč 2017, Balík 2010 u. a.) samt Übersicht der Präsenzbestände.",
    links: [
      { label: "📥 Práce ke stažení (24 titulů)", labelEn: "📥 Downloadable Works (24 Titles)", labelDe: "📥 Arbeiten zum Download (24 Titel)", href: "reference.html#prace" },
      { label: "📚 Katalog pramenů & literatury", labelEn: "📚 Sources & Literature Catalog", labelDe: "📚 Quellen- & Literaturkatalog", href: "reference.html" },
      { label: "🧭 Badatelský průvodce", labelEn: "🧭 Research Guide", labelDe: "🧭 Forscherhandbuch", href: "reference.html#pruvodce" }
    ]
  },
  {
    id: "news_2026_11_19_konsolidace_prijmeni_propojeni_osob",
    date: "2026-11-19",
    category: "analysis",
    badge: "Record Linkage v3 • 1 196 sjednocených osob (3 116 zápisů)",
    badgeEn: "Record Linkage v3 • 1,196 Linked Persons (3,116 Records)",
    badgeDe: "Record Linkage v3 • 1.196 verknüpfte Personen (3.116 Einträge)",
    title: "Paleografická revize 129 příjmení podle skenů a nové propojení osob: 1 196 životních drah (3 116 záznamů), 504 osob ve 3+ sčítáních a 431 stěhování mezi čp.",
    titleEn: "Scan-Verified Consolidation of 129 Surnames & Record Linkage v3: 1,196 Unified Lifespans (3,116 Records), 504 Across 3+ Censuses & 431 House Moves",
    titleDe: "Paläografische Namensrevision (129 Einträge) & Record Linkage v3: 1.196 Lebensläufe (3.116 Einträge), 504 über 3+ Zählungen & 431 Hauswechsel",
    summary: "Na základě kontroly archivních skenů sčítacích archů bylo v data/houses.js paleograficky ověřeno a sjednoceno 129 česko-německých variant příjmení, v app.js bylo rozšířeno rozpoznávání osady Medelské i na ročník 1880 a v párovacím enginu build_clusters.js zpřesněno odvozování rodných příjmení provdaných žen i kontextu domácností. Výsledkem přepočtu census_links.js a cluster_dataset.js je skokový nárůst propojení z 1 082 na 1 196 sjednocených osob (+114) a z 2 663 na 3 116 propojených záznamů (+453 = 66,1 % z celkových 4 712 sčítacích záznamů; z toho 504 osob sledovaných napříč 3 a více sčítáními a 431 osob se zachyceným stěhováním mezi čp.), přičemž počet nejednoznačných kandidátů prob klesl ze 300 na 198 a znalostní multigraf se konsolidoval na 3 036 osobních clusterů (1 249 vícezáznamových), 1 777 stěhovacích přesunů, 3 637 uzlů a 17 692 hran (8 090 příbuzenských a domovních vazeb).",
    summaryEn: "Based on verification against original census sheet scans, 129 Czech–German surname spellings were paleographically consolidated in data/houses.js, Medelské house-ID recognition in app.js was extended to the 1880 census, and build_clusters.js enhanced household kinship and maiden-name inference across marriages. Recomputation of census_links.js and cluster_dataset.js lifted linked identities from 1,082 to 1,196 unified persons (+114) and from 2,663 to 3,116 linked census records (+453 = 66.1% of all 4,712 registry entries, including 504 people tracked across 3+ censuses and 431 house-to-house moves), while cutting unresolved prob candidates from 300 down to 198 and consolidating the knowledge graph to 3,036 identity clusters (1,249 multi-record), 1,777 migration flows, 3,637 nodes, and 17,692 edges (8,090 kinship & household ties).",
    summaryDe: "Durch Abgleich mit den Originalschriften der Zählbögen wurden 129 tschechisch-deutsche Familiennamensvarianten in data/houses.js paläografisch bereinigt, die Dreihofen/Medelské-Zuordnung in app.js auf 1880 ausgeweitet sowie in build_clusters.js die Herleitung von Geburtsnamen verheirateter Frauen und Haushaltsverwandtschaften verfeinert. Die Neuberechnung von census_links.js und cluster_dataset.js steigerte die Zusammenführung von 1.082 auf 1.196 verknüpfte Personen (+114) und von 2.663 auf 3.116 verknüpfte Zählungseinträge (+453 = 66,1 % aller 4.712 Registereinträge; darunter 504 Personen über 3+ Zählungen und 431 Hauswechsel), senkte offene prob-Kandidaten von 300 auf 198 und verdichtete den Wissensgraphen auf 3.036 Personencluster (1.249 mehrfache), 1.777 Migrationsbewegungen, 3.637 Knoten und 17.692 Kanten (8.090 Familien- und Hausbindungen).",
    links: [
      { label: "🔗 Sjednocené osoby (1 196)", labelEn: "🔗 Unified Persons (1,196)", labelDe: "🔗 Verknüpfte Personen (1.196)", href: "obyvatele.html#view=unified" },
      { label: "🕸️ Osobní clustery (3 036)", labelEn: "🕸️ Personal Clusters (3,036)", labelDe: "🕸️ Personencluster (3.036)", href: "cluster.html" },
      { label: "🛠️ Revize kandidátů prob (198)", labelEn: "🛠️ Review prob Candidates (198)", labelDe: "🛠️ Kandidatenprüfung prob (198)", href: "cluster.html" }
    ]
  },
  {
    id: "news_2026_11_19_benkov_1890_medelske_1880",
    date: "2026-11-19",
    category: "census",
    badge: "Benkov 1890 • Medelské 1880 • 4 712 záznamů",
    badgeEn: "Benkov 1890 • Medelské 1880 • 4,712 Records",
    badgeDe: "Benke 1890 • Dreihofen 1880 • 4.712 Einträge",
    title: "Kompletní Benkov 1890 (44 domů) a Medelské 1880 (21 domů, 100 % ČSÚ): celé údolí 1890–1921 kompletně přepsáno a rejstřík vzrostl na 4 712 osob",
    titleEn: "Complete 1890 Census of Benkov (44 Houses) & 1880 Census of Medelské (21 Houses, 100% ČSÚ) – Registry Grows to 4,712 Records",
    titleDe: "Vollständige Volkszählung 1890 für Benke (44 Häuser) & 1880 für Dreihofen (21 Häuser) – Register wächst auf 4.712 Einträge",
    summary: "Byl dokončen úplný přepis Sčítání lidu 1890 pro celý Benkov (ZAO Opava, OÚ Šumperk I, NAD 999, inv. č. 934, karton 281, 124 snímků: všech 44 domů čp. 1–44, přesně 273 přítomných / 288 zapsaných obyvatel dle obecního sběrného archu) a kompletní Sčítání lidu 1880 pro osadu Medelské (ZAO Opava, OÚ Zábřeh, NAD 1000, inv. č. 1476, karton 330, 64 snímků: 20 obydlených domů + zbořeniště čp. 3, přesně 156 přítomných / 159 zapsaných osob = 100 % statistiky ČSÚ), včetně 149 nových webových náhledů archů a sběrných archů. Tím jsou všechna čtyři sčítání 1890, 1900, 1910 a 1921 kompletně zpracována pro celé údolí (Dlouhomilov, Medelské i Benkov). Současně proběhlo finální dočištění revize 1890–1910 (11. osoba u Dlouhomilova čp. 29 v r. 1890, Barbara Sladek v Benkově čp. 8 a Henriette Seisel v čp. 9 r. 1900 a upřesnění přítomnosti v Benkově čp. 17–18 r. 1910), geokódování nových rodišť (Bedřichov, Lazce, Veleboř, Újezd, Tvrdkov), paleografická konsolidace příjmení podle snímků (129 záznamů) i sjednocení napříč sčítáními: 4 712 archivních záznamů, 1 196 sjednocených osob (3 116 propojených záznamů, 504 osob ve 3+ sčítáních a 198 prob návrhů v census_links.js), 3 036 osobních clusterů (1 249 vícezáznamových doc), 3 637 uzlů a 17 692 hran.",
    summaryEn: "Completed the full transcription of the 1890 census for Benkov (ZAO Opava, District Office Šumperk I, NAD 999, inv. No. 934, box 281, 124 scans: all 44 houses Nos. 1–44, matching 273 present / 288 recorded residents per the municipal Sammelbogen) and the 1880 census for the Medelské hamlet (NAD 1000, inv. No. 1476, box 330, 64 scans: 20 inhabited houses + demolished cottage No. 3, matching 156 present / 159 recorded persons = 100% ČSÚ), adding 149 new sheet and Sammelbogen previews. With this milestone, all four censuses (1890, 1900, 1910, and 1921) are now 100% covered across the entire valley (Dlouhomilov, Medelské, and Benkov). Following final audit fixes across 1890–1910 (Dlouhomilov No. 29 in 1890, Benkov Nos. 8–9 in 1900, and Nos. 17–18 in 1910), birthplace geocoding, scan-verified paleographic surname consolidation (129 entries), and cross-census identity linking, the compiled databases now comprise 4,712 registry records, 1,196 linked persons (3,116 linked records, 504 trajectories across 3+ censuses, and 198 prob candidates), 3,036 personal clusters (1,249 multi-record doc clusters), 3,637 graph nodes, and 17,692 edges.",
    summaryDe: "Die vollständige Transkription der Volkszählung 1890 für die gesamte Gemeinde Benke / Benkov (ZAO Troppau, Bezirksamt Mährisch Schönberg I, NAD 999, Inv.-Nr. 934, Karton 281, 124 Scans: alle 44 Häuser Nr. 1–44, genau 273 anwesende / 288 erfasste Personen laut Sammelbogen) sowie der Volkszählung 1880 für Dreihofen / Medelské (NAD 1000, Inv.-Nr. 1476, Karton 330, 64 Scans: 20 bewohnte Häuser + abgebrochenes Haus Nr. 3, genau 156 anwesende / 159 erfasste Personen) wurde samt 149 neuen Web-Vorschauen abgeschlossen. Damit sind die Zählungen 1890, 1900, 1910 und 1921 für das gesamte Tal vollständig erschlossen. Nach Detailkorrekturen (Lomigsdorf Nr. 29/1890, Benke Nr. 8–9/1900, Nr. 17–18/1910), Geokodierung neuer Geburtsorte, scan-geprüfter Namensbereinigung (129 Einträge) und neuer Personenzusammenführung umfasst die Datenbank nun 4.712 Registereinträge, 1.196 verknüpfte Personen (3.116 Einträge, 504 über 3+ Zählungen, 198 prob-Vorschläge), 3.036 Personencluster (1.249 mehrfache doc-Cluster), 3.637 Graphknoten und 17.692 Kanten.",
    links: [
      { label: "👥 Rejstřík (4 712 záznamů)", labelEn: "👥 Registry (4,712 Recs)", labelDe: "👥 Register (4.712 Eintr.)", href: "obyvatele.html" },
      { label: "🏘️ Medelské 1880 (159)", labelEn: "🏘️ Medelské 1880 (159)", labelDe: "🏘️ Dreihofen 1880 (159)", href: "obyvatele.html#year=1880" },
      { label: "🕸️ Clustery & graf (3 036)", labelEn: "🕸️ Clusters & Graph (3,036)", labelDe: "🕸️ Cluster & Graph (3.036)", href: "cluster.html" }
    ]
  },
  {
    id: "news_2026_11_19_beneda_dubicko_hierarchie_kolonizace",
    date: "2026-11-19",
    category: "analysis",
    badge: "Beneda z Dubicka (1226–1269+) • Rekonstrukce Dlúhomila & 4 vrstvy",
    badgeEn: "Beneda of Dubicko (1226–1269+) • Dlúhomil Reconstruction & 4 Tiers",
    badgeDe: "Beneda von Dubitzko (1226–1269+) • Rekonstruktion Dlúhomils & 4 Schichten",
    title: "Vrchní lovčí Beneda z Dubicka (1226–1269+), rekonstrukce zakladatele Dlúhomila a čtyři patra společnosti v názvech Benkova, Dlouhomilova a Sluhoňova",
    titleEn: "Master Huntsman Beneda of Dubicko (1226–1269+), Visual Reconstruction of Founder Dlúhomil & Four Social Tiers Imprinted on Local Villages",
    titleDe: "Oberjägermeister Beneda von Dubitzko (1226–1269+), Rekonstruktion Dlúhomils & vier Sozialschichten in den Ortsnamen des Tals",
    summary: "Medievistická studie původu zakladatele (docs/puvod_dluhomila_a_zdo_1356_1447.md, kap. 1.2) i texty v Kapitole I, Zajímavosti #18, Komiksové kronice, Průvodci a Katalogu pramenů byly rozšířeny o úplný portrét královského vrchního lovčího Benedy z Dubicka (1226–1269+, v r. 1239 výslovně titulovaného „perambulator terrarum et assignator simul et metarum distinctor“, držitele tvrze v Dubicku, Krčmaně darované 1259/1266 olomouckému dómu i domu na Olomouckém hradě 1267), ověření papežské buly z 31. 3. 1297 ve Velehradském kodexu (MZA Brno E 7, sign. G 191, fol. 107v–108r: Nicolaus & Lubominus de Dubich) a o vědecky podloženou vizuální, antropologickou a heraldickou rekonstrukci zakladatele Dlúhomila kol. r. 1275 (assets/comic/rekonstrukce_dluhomil_1275.jpg – oděv a zbroj horizontu hradu Hoštejna † 1286 + svisle půlený kosodélně mřížovaný štít dubicko-otaslavického rodu dle Sedláčka ČMH II, s. 310). Zakládací okno Dlouhomilova se zúžilo na léta 1270–1277 (s odhadem ~25–30 usedlostí, 130–180 obyvatel a 2–3 krčem r. 1356) a okolní sídla zrcadlí čtyři patra kolem Benedy dávno před stavbou hradu Brníčka (1335–1350) nad bažinou brnie: (1) velmože (Benkov < Benek/Beneda po suchém hřebeni přes Rohli a U Cikánského buku, Hrabišín, Kolšov); (2) plně urozené zemany s deskovým alodem (Dlúhomil → Dlouhomilov); (3) osobně svobodné družiníky – druho (statuta 1229/1237; Kunrátek, druho pana Benedy 1263 → panoši a dědiční rychtáři); (4) vrchnostenské služebníky – sluhony (listiny biskupa Bruna 1263–1272 → Sluhoňov). Do slovníčku na reference.html přibyla trojjazyčná hesla Vladyka/Zeman, Druho a Sluhoň.",
    summaryEn: "Expanded the medieval origins monograph (docs/puvod_dluhomila_a_zdo_1356_1447.md, § 1.2), Chapter I, Highlight #18, Comic Sheet I, Research Guide, Glossary, and Sources Catalog with the full biography of royal master huntsman Beneda of Dubicko (1226–1269+, styled 'perambulator terrarum et assignator simul et metarum distinctor' in 1239, lord of Dubicko, Krčmaň donated 1259/1266, and an Olomouc Castle townhouse in 1267), archival verification of Boniface VIII's March 31, 1297 bull in the Velehrad Codex (MZA Brno E 7, sign. G 191, fol. 107v–108r: Nicolaus & Lubominus de Dubich), and a visual, anthropological, and heraldic reconstruction of founder Dlúhomil ca. 1275 (assets/comic/rekonstrukce_dluhomil_1275.jpg — attire and mail coif matching Hoštejn Castle † 1286 finds and the per-pale fretty shield of the Dubicko–Otaslavice kindred per Sedláček ČMH II, p. 310). Dlouhomilov's founding narrowed to 1270–1277 (ca. 25–30 homesteads / 130–180 residents and 2–3 taverns in 1356), revealing all four social tiers around Beneda decades before Brníčko Castle rose (1335–1350) above the brnie marsh: (1) magnates (Benkov < Benek/Beneda via Rohle and the U Cikánského buku crossroads, Hrabišín, Kolšov); (2) noble squires holding Land-Table allodia (Dlúhomil → Dlouhomilov); (3) personally free retainers – druho (1229/1237 statutes; Cunratecz, druho domini Benede 1263 → lesser squires and hereditary reeves); (4) manorial sluhones (Bishop Bruno's 1263–1272 charters → Sluhoňov). Added trilingual glossary entries for Vladyka/Zeman, Druho, and Sluhoň.",
    summaryDe: "Die Mediävistik-Studie (docs/puvod_dluhomila_a_zdo_1356_1447.md, Kap. 1.2) sowie Kapitel I, Fundstück #18, Comic-Bogen I, Forscherhandbuch, Glossar und Quellenkatalog wurden um das Lebensbild des königlichen Oberjägermeisters Beneda von Dubitzko (1226–1269+, 1239 ausdrücklich „perambulator terrarum et assignator simul et metarum distinctor“, Herr von Dubitzko, Krčmaň 1259/1266 und eines Adelshauses auf der Olmützer Burg 1267), die Verifizierung der Bulle vom 31. 3. 1297 im Velehrader Codex (MZA Brünn E 7, Sign. G 191, Fol. 107v–108r: Nicolaus & Lubominus de Dubich) sowie eine anthropologisch-heraldische Rekonstruktion des Gründers Dlúhomil um 1275 (assets/comic/rekonstrukce_dluhomil_1275.jpg – Tracht und Kettenhaube vom Horizont Hoštejn † 1286 samt gespaltenem gegittertem Schild nach Sedláček ČMH II, S. 310) erweitert. Das Gründungsfenster von Dlouhomilov verdichtet sich auf 1270–1277 (~25–30 Hofstellen / 130–180 Einwohner und 2–3 Schenken 1356) und spiegelt alle vier Schichten um Beneda lange vor dem Bau der Burg Brünles (1335–1350) über dem Waldsumpf brnie wider: (1) Magnaten (Benke/Benkov < Benek/Beneda über Rohle und U Cikánského buku, Hrabišín, Kolšov); (2) vollfreie Edelleute mit Landtafel-Allod (Dlúhomil → Dlouhomilov); (3) persönlich freie Gefolgsleute – druho (Statuten 1229/1237; Cunratecz, druho domini Benede 1263 → Knappen und Erbrichter); (4) herrschaftliche Dienstleute – sluhones (Urkunden 1263–1272 → Sluhoňov). Das Glossar erhielt die Einträge Vladyka/Zeman, Druho und Sluhoň.",
    links: [
      { label: "🛡️ Rekonstrukce Dlúhomila (1275)", labelEn: "🛡️ Dlúhomil Reconstruction (1275)", labelDe: "🛡️ Rekonstruktion Dlúhomils (1275)", href: "pribeh.html#kap-0" },
      { label: "✨ Zajímavost #18 (4 patra kolonizace)", labelEn: "✨ Highlight #18 (4 Tiers of Colonization)", labelDe: "✨ Fundstück #18 (4 Schichten der Besiedlung)", href: "pribeh.html#facts" },
      { label: "📄 Studie: Dlúhomil & 32 vkladů ZDO ↗", labelEn: "📄 Study: Dlúhomil & 32 ZDO Entries ↗", labelDe: "📄 Studie: Dlúhomil & 32 ZDO-Einträge ↗", href: "docs/puvod_dluhomila_a_zdo_1356_1447.md" },
      { label: "📖 Slovníček: vladyka, druho & sluhoň", labelEn: "📖 Glossary: Squire, Druho & Sluhoň", labelDe: "📖 Glossar: Edelmann, Druho & Sluhoň", href: "reference.html#dictionary-container" }
    ]
  },
  {
    id: "news_2026_11_19_scitani_1890_dlouhomilov_medelske_revize_1900",
    date: "2026-11-19",
    category: "census",
    badge: "Sčítání 1890 komplet • 100% revize 1900 • 4 262 záznamů",
    badgeEn: "1890 Census Complete • 100% Audit of 1900 • 4,262 Records",
    badgeDe: "Zählung 1890 komplett • 100%-Revision 1900 • 4.262 Einträge",
    title: "Kompletní Sčítání lidu 1890 pro celý Dlouhomilov a Medelské (100 domů, 806 záznamů), 100% revize 1900 dle Sammelbogen & rejstřík vzrostl na 4 262 osob",
    titleEn: "Complete 1890 Census for All of Dlouhomilov & Medelské (100 Houses, 806 Records), 100% Sammelbogen Audit of 1900 – 4,262 Registry Records",
    titleDe: "Vollständige Volkszählung 1890 für Lomigsdorf & Dreihofen (100 Häuser, 806 Einträge), 100%-Revision 1900 nach Sammelbogen – 4.262 Registereinträge",
    summary: "Byl dokončen úplný přepis Sčítání lidu 1890 pro celé katastrální území Dlouhomilova i osady Medelské (ZAO Opava, OÚ Zábřeh, NAD 1000, inv. č. 1560, karton 356, 292 snímků: 100 domů [78 v jádru Dlouhomilova + 21 v osadě a historickém obvodu Medelského vč. čp. 27a/27b a 1 neobydleného stavení], 806 zapsaných záznamů / 772 přítomných obyvatel dle součtových archů = 641 Dlouhomilov + 165 Medelské, včetně 208 nových webových náhledů archů). Současně proběhla 100% křížová revize Sčítání lidu 1900 proti originálnímu obecnímu sběrnému archu (Sammelbogen ze 17. 1. 1901): bylo doplněno chybějící čp. 12 (rodiny Josefa a Františka Minářových), dočteny rubové a pokračovací archy u čp. 7, 48, 50, 64, 67, 74, 80, 87, 90, 91 a 93 a opraveno přiřazení čp. 86 (zámečník František Sadil *1829) a čp. 96 (kupec obilím František Dvořák *1860), takže ročník 1900 nyní čítá plných 1 138 zapsaných osob ve všech 149 obydlených domech údolí (715 Dlouhomilov + 151 Medelské + 272 Benkov). Ve Sčítání 1910 bylo deduplikováno a zpřesněno čp. 110 (Podhorní a Braní), doplněno geokódování všech nových rodišť a přepočten Record Linkage i znalostní graf: rejstřík obyvatel vzrostl na 4 262 záznamů, počet automaticky sjednocených osob dosáhl 970 (2 361 propojených záznamů a 253 kandidátů prob v census_links.js) a clusterový graf má 3 158 osobních clusterů, 3 783 uzlů a 17 132 hran.",
    summaryEn: "Completed the full transcription and web integration of the 1890 census across both core Dlouhomilov and the Medelské settlement (ZAO Opava, District Office Zábřeh, NAD 1000, inv. No. 1560, box 356, 292 scans: 100 houses [78 core Dlouhomilov + 21 in the Medelské enumeration district incl. Nos. 27a/27b and 1 uninhabited cottage], 806 recorded residents / 772 present according to municipal summary sheets, plus 208 new sheet previews). Simultaneously, a 100% line-by-line audit of the 1900 census against the original Sammelbogen (Jan 17, 1901) restored missing House No. 12 (Josef & František Minář), transcribed all remaining verso and continuation sheets at Nos. 7, 48, 50, 64, 67, 74, 80, 87, 90, 91, and 93, and fixed sheet assignments at Nos. 86 and 96, bringing 1900 to 1,138 recorded residents across all 149 inhabited valley houses (715 Dlouhomilov + 151 Medelské + 272 Benkov). House No. 110 (1910) was deduplicated and refined, all new 1890/1900 birthplaces geocoded, and Record Linkage & Knowledge Graph v2 recomputed: 4,262 census registry records, 970 linked persons (2,361 records and 253 prob candidates in census_links.js), 3,158 personal clusters, 3,783 graph nodes, and 17,132 dependency edges.",
    summaryDe: "Vollständige Transkription und Integration der Volkszählung 1890 für die gesamte Gemeinde Lomigsdorf / Dlouhomilov samt Ansiedlung Dreihofen / Medelské (ZAO Troppau, Bezirksamt Hohenstadt, NAD 1000, Inv.-Nr. 1560, Karton 356, 292 Scans: 100 Häuser [78 im Ortskern + 21 im Zählsprengel Dreihofen inkl. Nr. 27a/27b und 1 unbewohntes Haus], 806 erfasste / 772 anwesende Personen laut Sammelbogen sowie 208 neue Web-Vorschauen). Zudem wurde eine 100%-Abgleichprüfung der Volkszählung 1900 anhand des amtlichen Sammelbogens (17. 1. 1901) abgeschlossen: Wiederherstellung von Haus Nr. 12, Nachtrag sämtlicher Rückseiten und Fortsetzungsbögen bei Nr. 7, 48, 50, 64, 67, 74, 80, 87, 90, 91 und 93 sowie Korrektur von Nr. 86 und Nr. 96 (nun 1.138 Personen in allen 149 bewohnten Häusern des Tals: 715 Lomigsdorf + 151 Dreihofen + 272 Benke). Nach der Bereinigung von Nr. 110 (1910) und vollständiger Geburtsort-Geokodierung umfasst das Register nun 4.262 Einträge, 970 verknüpfte Personen (2.361 Einträge, 253 prob-Kandidaten) sowie 3.158 Personencluster bzw. 3.783 Knoten und 17.132 Kanten im Wissensgraphen.",
    links: [
      { label: "👥 Sčítání 1890 (806 osob)", labelEn: "👥 1890 Census (806 Res.)", labelDe: "👥 Zählung 1890 (806 Ew.)", href: "obyvatele.html#year=1890" },
      { label: "📜 Revize 1900 (1 138 osob)", labelEn: "📜 Audited 1900 (1,138 Res.)", labelDe: "📜 Revision 1900 (1.138 Ew.)", href: "obyvatele.html#year=1900" },
      { label: "🕸️ Clustery & graf (3 158 osob)", labelEn: "🕸️ Clusters & Graph (3,158)", labelDe: "🕸️ Cluster & Graph (3.158)", href: "cluster.html" }
    ]
  },
  {
    id: "news_2026_11_18_gruntovni_knihy_dlouhomilov_1596_1881",
    date: "2026-11-18",
    category: "census",
    badge: "Gruntovní knihy 1596–1881 • ZAO Olomouc",
    badgeEn: "Land Books 1596–1881 • ZAO Olomouc",
    badgeDe: "Grundbücher 1596–1881 • ZAO Olmütz",
    title: "Zmapovány všechny 4 gruntovní knihy Dlouhomilova (1596–1881), rozuzleno staré číslování před r. 1770 a připojeno 23 archivních skenů",
    titleEn: "All 4 Land Books of Dlouhomilov Mapped (1596–1881), Pre-1770 House Numbering Solved & 23 Archival Scans Linked",
    titleDe: "Alle 4 Grundbücher von Lomigsdorf / Dlouhomilov erschlossen (1596–1881), altes Nummernsystem vor 1770 gelöst & 23 Scans verknüpft",
    summary: "Byla dokončena souborná studie a archivní edice všech čtyř digitalizovaných pozemkových a gruntovních knih obce Dlouhomilov a Medelského v ZAO Olomouc (fond Velkostatek Zábřeh, NAD 1549, pom. č. 370: inv. č. 164 z let (1596)1635–1767, hlavní kniha selských gruntů inv. č. 207 z let 1768–1881, Auen Häusel Grundt Buch inv. č. 225 z let 1768–1880 a rejstřík inv. č. 275 z let 1827–1881; docs/gruntovni_knihy_dlouhomilov_1596_1881.md). Studium opravilo dřívější dataci nejstarší knihy inv. č. 164 (končí r. 1767, nikoli 1880) a rozuzlilo předjosefínské číslování před r. 1770 (čp. 7 = staré č. 1, čp. 24 = staré č. 3, čp. 29 = staré č. 12 na fol. 194–215 / sn. 191–212), doložilo lichtenštejnský obnovovací dekret z r. 1635 a propojilo 23 nových archivních skenů (assets/archives/gruntovnice/) přímo do časových os i přepisů u usedlostí a chalup čp. 7, 11, 21, 22, 24, 29, 41, 46 a 49 i do životopisů Pavla, Petra, Johanna a Josefa Dvořákových.",
    summaryEn: "Completed a comprehensive archival study and edition of all four digitized manorial land books for Dlouhomilov and Medelské at ZAO Olomouc (Zábřeh Estate fonds, NAD 1549, aid 370: Inv. No. 164 covering (1596)1635–1767, main peasant land book Inv. No. 207 for 1768–1881, cottager book Inv. No. 225 for 1768–1880, and Inv. No. 275 for 1827–1881; docs/gruntovni_knihy_dlouhomilov_1596_1881.md). The research corrects the terminal year of Inv. No. 164 (ending in 1767 rather than 1880), resolves the pre-1770 house numbering (No. 7 = old No. 1, No. 24 = old No. 3, No. 29 = old No. 12 on fol. 194–215 / scans 191–212), transcribes the 1635 Liechtenstein renewal decree, and embeds 23 archival scans across homesteads Nos. 7, 11, 21, 22, 24, 29, 41, 46, and 49 as well as Dvořák family biographies.",
    summaryDe: "Umfassende Erschließung aller vier digitalisierten herrschaftlichen Grund- und Auenhäusel-Bücher von Lomigsdorf / Dlouhomilov und Dreihofen / Medelské im Landesarchiv Olmütz (Herrschaft Hohenstadt, NAD 1549, Findbuch 370: Inv.-Nr. 164 für (1596)1635–1767, Hauptgrundbuch Inv.-Nr. 207 für 1768–1881, Auenhäuselbuch Inv.-Nr. 225 für 1768–1880 und Inv.-Nr. 275 für 1827–1881; docs/gruntovni_knihy_dlouhomilov_1596_1881.md). Dabei wurde das Endjahr von Inv.-Nr. 164 korrigiert (1767 statt 1880), das vorjosephinische Nummernsystem vor 1770 entschlüsselt (Nr. 7 = alt Nr. 1, Nr. 24 = alt Nr. 3, Nr. 29 = alt Nr. 12 auf Fol. 194–215 / Scans 191–212), das Liechtensteiner Erneuerungsdekret von 1635 ediert und 23 neue Archivscans in die Zeitachsen der Häuser Nr. 7, 11, 21, 22, 24, 29, 41, 46 und 49 sowie in die Dvořák-Biografien integriert.",
    links: [
      { label: "📖 Studie gruntovních knih (1596–1881)", labelEn: "📖 Land Books Study (1596–1881)", labelDe: "📖 Grundbuchstudie (1596–1881)", href: "docs/gruntovni_knihy_dlouhomilov_1596_1881.md" },
      { label: "🏡 Grunt čp. 22 (od r. 1623)", labelEn: "🏡 Homestead No. 22 (since 1623)", labelDe: "🏡 Bauerngut Nr. 22 (ab 1623)", href: "mapa.html#house=cp22" },
      { label: "🏡 Statek čp. 29 (od r. 1679)", labelEn: "🏡 Farmstead No. 29 (since 1679)", labelDe: "🏡 Stammhof Nr. 29 (ab 1679)", href: "mapa.html#house=cp29" },
      { label: "📚 Prameny v katalogu", labelEn: "📚 Archival Sources", labelDe: "📚 Quellenkatalog", href: "reference.html#archivy" }
    ]
  },
  {
    id: "news_2026_11_17_prezentace_ai_genealogie",
    date: "2026-11-17",
    category: "feature",
    badge: "Přednáška • 13. 11. 2026 • Sokolovna Dlouhomilov",
    badgeEn: "Lecture • Nov 13, 2026 • Sokolovna Dlouhomilov",
    badgeDe: "Vortrag • 13. Nov. 2026 • Sokolovna Dlouhomilov",
    title: "Přidána prezentace z přednášky „Když umělá inteligence čte historii“ (13. 11. 2026, Sokolovna Dlouhomilov)",
    titleEn: "Added Lecture Presentation “When Artificial Intelligence Reads History” (Nov 13, 2026, Sokolovna Dlouhomilov)",
    titleDe: "Vortragspräsentation „Wenn künstliche Intelligenz Geschichte liest“ ergänzt (13. Nov. 2026, Sokolovna Dlouhomilov)",
    summary: "Do sekce Reference & Prameny byla začleněna veřejná přednáška prof. RNDr. Karla Berky, Ph.D. (PřF UPOL) ze dne 13. listopadu 2026 v Sokolovně Dlouhomilov (14 snímků ve webově optimalizovaném PDF, 2,9 MB). Prezentace přibližuje využití autonomních AI agentů (Claude Code, rodokmen-skill J. Šaršona, dejiny-domu-skill V. Žohy) při čtení matrik, sčítacích operátů a rekonstrukci dějin Dlouhomilova, Medelského a Benkova, včetně plné citace ČSN ISO 690.",
    summaryEn: "The public lecture presentation by Prof. RNDr. Karel Berka, Ph.D. (Faculty of Science, Palacký University Olomouc) held on November 13, 2026 at Sokolovna Dlouhomilov (14 slides in web-optimized PDF, 2.9 MB) has been integrated into Reference & Sources. It showcases autonomous AI agent workflows (Claude Code, J. Šaršon's rodokmen-skill, V. Žoha's dejiny-domu-skill) for reading parish registers, census sheets, and reconstructing the history of Dlouhomilov, Medelské, and Benkov, complete with ČSN ISO 690 citation.",
    summaryDe: "Der öffentliche Vortrag von Prof. RNDr. Karel Berka, Ph.D. (Naturwissenschaftliche Fakultät, Palacký-Universität Olmütz) vom 13. November 2026 in der Sokolovna Dlouhomilov (14 Folien als weboptimiertes PDF, 2,9 MB) wurde in den Bereich Quellen & Referenzen aufgenommen. Er zeigt den Einsatz autonomer KI-Agenten (Claude Code, rodokmen-skill von J. Šaršon, dejiny-domu-skill von V. Žoha) bei der Auswertung von Matriken, Volkszählungsbögen und der Ortsgeschichte von Dlouhomilov, Medelské und Benkov samt Zitation nach ČSN ISO 690.",
    links: [
      { label: "🎤 Prezentace v sekci Reference", labelEn: "🎤 Presentation in References", labelDe: "🎤 Präsentation in Quellen", href: "reference.html#prezentace" },
      { label: "📄 Otevřít PDF (2,9 MB) ↗", labelEn: "📄 Open PDF (2.9 MB) ↗", labelDe: "📄 PDF öffnen (2,9 MB) ↗", href: "assets/presentations/Berka_AI_Genealogy_Dlouhomilov_261112.pdf" }
    ]
  },
  {
    id: "news_2026_11_17_scitani_1900_komplet_clustery_demografie",
    date: "2026-11-17",
    category: "census",
    badge: "Sčítání 1900 • Clustery v2 • Demografie 1275–2026",
    badgeEn: "1900 Census • Clusters v2 • Demography 1275–2026",
    badgeDe: "Zählung 1900 • Cluster v2 • Demografie 1275–2026",
    title: "Kompletní Sčítání 1900 pro celé údolí (1 083 os. ve 149 domech), Record Linkage v2, křivka 1275–2026 & mapa kolonizace – rejstřík má 3 449 záznamů",
    titleEn: "Complete 1900 Valley Census (1,083 Res. in 149 Houses), Record Linkage v2, 1275–2026 Demography & Colonization Map – 3,449 Registry Records",
    titleDe: "Vollständige Volkszählung 1900 im ganzen Tal (1.083 Ew. in 149 Häusern), Record Linkage v2, Kurve 1275–2026 & Kolonisationskarte – 3.449 Einträge",
    summary: "Byl dokončen úplný přepis Sčítání lidu 1900 pro celý Dlouhomilov (ZAO Opava, OÚ Zábřeh, NAD 1000, inv. č. 1664, kartony 396–397: všech 85 obydlených domů jádra vsi s 660 obyvateli i 21 domů osady Medelské se 151 obyvateli = přesně 106 domů a 811 obyvatel dle úřední statistiky ČSÚ; spolu s Benkovem celkem 1 083 obyvatel ve 149 domech a +208 webových náhledů archů). Včetně opravy přiřazení čp. 1 k Medelskému čp. 1 (Jan Minář *1847), zápisu faráře-spisovatele P. Františka Kužely (čp. 47) a geokódování všech nových rodišť vzrostl rejstřík obyvatel na 3 449 záznamů. Na nová data navazuje druhá generace algoritmického propojování osob napříč sčítáními 1857–1921 (data/census_links.js a cluster.html: 2 710 osobních clusterů, rozlišení doložených doc a pravděpodobnostních prob vazeb a heterogenní graf znalostí s 3 291 uzly a 14 247 hranami), nová 750letá demografická rekonstrukce počtu domů a obyvatel 1275–2026 (demografie.html, docs/demografie_csu_1869_2026.md) i rozšíření komiksové kroniky na 14 panelů (listy I.–V., 1269–1949) s novou mapou středověké kolonizace podhůří z jižní Hané (story_kolonizace_mapa.jpg).",
    summaryEn: "Completed the full transcription and integration of the 1900 census across all of Dlouhomilov (ZAO Opava, District Office Zábřeh, NAD 1000, inv. No. 1664, boxes 396–397: all 85 inhabited houses in core Dlouhomilov with 660 residents plus all 21 houses in the Medelské settlement with 151 residents — matching the official Czech Statistical Office count of 106 houses and 811 residents; together with Benkov, 1,083 residents across 149 inhabited houses and +208 archival sheet previews). Following the reassignment of house No. 1 (Jan Minář *1847) to Medelské No. 1, correction of priest-writer František Kužela at Rectory No. 47, and complete birthplace geocoding, the registry now holds 3,449 records. Building on this unified corpus, Record Linkage & Knowledge Graph v2 (data/census_links.js and cluster.html) connects 2,710 personal clusters across 1857–1921 with documented (doc) vs. probabilistic (prob) links and 3,291 graph nodes / 14,247 edges; demografie.html adds a 750-year house and population reconstruction (1275–2026, docs/demografie_csu_1869_2026.md); and the Comic Chronicle expands to 5 sheets / 14 panels (1269–1949) with a new medieval Haná colonization map (story_kolonizace_mapa.jpg).",
    summaryDe: "Vollständige Transkription und Integration der Volkszählung 1900 für ganz Lomigsdorf / Dlouhomilov (ZAO Troppau, Bezirksamt Hohenstadt, NAD 1000, Inv.-Nr. 1664, Kartons 396–397: alle 85 bewohnten Häuser im Ortskern mit 660 Einwohnern sowie 21 Häuser der Ansiedlung Dreihofen / Medelské mit 151 Einwohnern = exakt 106 Häuser und 811 Einwohner gemäß amtlicher ČSÚ-Statistik; zusammen mit Benke 1.083 Einwohner in 149 Häusern und +208 Archivvorschauen). Nach der Korrektur von Nr. 1 zu Dreihofen Nr. 1 (Jan Minář *1847), Pfarrer František Kužela im Pfarrhaus Nr. 47 sowie vollständiger Geburtsort-Geokodierung umfasst das Register nun 3.449 Einträge. Zugleich gingen Record Linkage & Wissensgraph v2 (data/census_links.js, cluster.html: 2.710 Personencluster mit belegten doc- und wahrscheinlichen prob-Verknüpfungen, 3.291 Knoten / 14.247 Kanten), die 750-jährige Siedlungs- und Bevölkerungskurve 1275–2026 (demografie.html, docs/demografie_csu_1869_2026.md) sowie die auf 5 Blätter / 14 Panels (1269–1949) erweiterte Comic-Chronik samt Kolonisationskarte aus der Hanna (story_kolonizace_mapa.jpg) online.",
    links: [
      { label: "👥 Sčítání 1900 (1 083 osob)", labelEn: "👥 1900 Census (1,083 Res.)", labelDe: "👥 Volkszählung 1900 (1.083 Ew.)", href: "obyvatele.html#year=1900" },
      { label: "🕸️ Record Linkage & graf znalostí", labelEn: "🕸️ Record Linkage & Knowledge Graph", labelDe: "🕸️ Record Linkage & Wissensgraph", href: "cluster.html" },
      { label: "📊 Demografie 1275–2026", labelEn: "📊 Demography 1275–2026", labelDe: "📊 Demografie 1275–2026", href: "demografie.html" },
      { label: "🗺️ Komiks & mapa kolonizace", labelEn: "🗺️ Comic & Colonization Map", labelDe: "🗺️ Comic & Kolonisationskarte", href: "pribeh.html#komiks" }
    ]
  },
  {
    id: "news_2026_11_16_scitani_1900_benkov_medelske",
    date: "2026-11-16",
    category: "census",
    badge: "Sčítání 1900 • Benkov & Medelské",
    badgeEn: "1900 Census • Benkov & Medelské",
    badgeDe: "Zählung 1900 • Benke & Dreihofen",
    title: "Dokončeno Sčítání lidu 1900 pro Benkov (43 domů, 272 os.) i osadu Medelské (20 domů, 142 os.) + nová ilustrace Kapitoly I – rejstřík vzrostl na 2 817 záznamů",
    titleEn: "Completed 1900 Census for Benkov (43 Houses, 272 Res.) & Medelské (20 Houses, 142 Res.) + New Chapter I Illustration – 2,817 Registry Records",
    titleDe: "Volkszählung 1900 für Benke (43 Häuser, 272 Ew.) & Dreihofen (20 Häuser, 142 Ew.) + neue Kapitel-I-Illustration – 2.817 Einträge",
    summary: "Byl dokončen úplný přepis Sčítání lidu 1900 pro samostatnou obec Benkov (ZAO Opava, OÚ Šumperk – I, NAD 999, inv. č. 1010, karton 326, 120 sn.: všech 43 obydlených domů čp. 1–19, 21–44 a 272 obyvatel – 261 německy a 11 česky hovořících, včetně domácích tkalců lnu, železničářů a přistěhovalců z Vídně, Mödlingu a Vídeňského Nového Města) i pro sčítací obvod osady Medelské (ZAO Opava, OÚ Zábřeh, NAD 1000, inv. č. 1664, karton 397, 57 sn.: všech 20 domů historického číslování čp. 2, 31–43, 51, 54, 60, 62, 75–76 a 142 obyvatel, vč. dělnic přádelny v Sudkově i bělidel Ed. Oberleithnera a Kateřiny Horníčkové z Floridsdorfu u Vídně). Současně byl arch čp. 2 správně přiřazen pod Medelské čp. 2, zkompletováno geokódování německých i českých toponym a osadní filtr pro rok 1900, doplněny pokračovací archy 1910 (čp. 4 a čp. 8) a aktualizována úvodní ilustrace Kapitoly I (story_kap_00.jpg – udělení lokační listiny na Olomouckém hradě). Celkový rejstřík tak dosáhl 2 817 záznamů (ročník 1900: 451 osob).",
    summaryEn: "Completed full transcription and web integration of the 1900 census for both Benkov / Benke (ZAO Opava, District Office Šumperk I, NAD 999, inv. No. 1010, box 326, 120 scans: all 43 inhabited houses Nos. 1–19, 21–44 and 272 residents – 261 German- and 11 Czech-speaking, incl. home linen weavers, railway workers, and migrants from Vienna, Mödling, and Wiener Neustadt) and the Medelské enumeration district (ZAO Opava, District Office Zábřeh, NAD 1000, inv. No. 1664, box 397, 57 scans: all 20 houses under pre-1921 numbering Nos. 2, 31–43, 51, 54, 60, 62, 75–76 and 142 residents). Also reassigned 1900 No. 2 from the Rectory to Medelské No. 2, added German occupational categorization and complete 1900 bilingual place geocoding, integrated the 1910 continuation sheets (Nos. 4 & 8), and updated Chapter I's opening illustration (story_kap_00.jpg – granting the location charter at Olomouc Castle). The census registry now totals 2,817 records (451 in 1900).",
    summaryDe: "Vollständige Transkription und Integration der Volkszählung 1900 für Benke / Benkov (ZAO Troppau, Bezirksamt Mährisch Schönberg I, NAD 999, Inv.-Nr. 1010, Karton 326, 120 Scans: alle 43 bewohnten Häuser Nr. 1–19, 21–44 und 272 Einwohner – 261 deutsch- und 11 tschechischsprachig, darunter Heimleinenweber, Eisenbahner und Zuwanderer aus Wien, Mödling und Wiener Neustadt) sowie für den Zählsprengel Dreihofen / Medelské (ZAO Troppau, Bezirksamt Hohenstadt, NAD 1000, Inv.-Nr. 1664, Karton 397, 57 Scans: alle 20 Häuser alter Zählung Nr. 2, 31–43, 51, 54, 60, 62, 75–76 mit 142 Einwohnern). Zudem wurde Nr. 2 (1900) korrekt Dreihofen Nr. 2 zugeordnet, die zweisprachige Berufs- und Orts-Geokodierung ergänzt, die Fortsetzungsbögen 1910 (Nr. 4 & 8) integriert und die Eingangsillustration zu Kapitel I (story_kap_00.jpg) aktualisiert. Das Gesamtregister erreicht nun 2.817 Einträge (451 im Jahr 1900).",
    links: [
      { label: "👥 Benkov v roce 1900 (272 os.)", labelEn: "👥 Benkov in 1900 (272 res.)", labelDe: "👥 Benke 1900 (272 Ew.)", href: "obyvatele.html#year=1900&settlement=benkov" },
      { label: "🏘️ Medelské v roce 1900 (142 os.)", labelEn: "🏘️ Medelské in 1900 (142 res.)", labelDe: "🏘️ Dreihofen 1900 (142 Ew.)", href: "obyvatele.html#year=1900&settlement=medelske" },
      { label: "📜 Kapitola I (nová ilustrace)", labelEn: "📜 Chapter I (New Illustration)", labelDe: "📜 Kapitel I (neue Illustration)", href: "pribeh.html#kap-0" },
      { label: "🌍 Původ & dálková migrace", labelEn: "🌍 Origins & Migration", labelDe: "🌍 Herkunft & Migration", href: "demografie.html#origins" }
    ]
  },
  {
    id: "news_2026_11_16_scitani_1910_dlouhomilov_cp5_19",
    date: "2026-11-16",
    category: "census",
    badge: "Sčítání 1910 • Dlouhomilov čp. 4–19",
    badgeEn: "1910 Census • Dlouhomilov Nos. 4–19",
    badgeDe: "Zählung 1910 • Lomigsdorf Nr. 4–19",
    title: "Doplněno Sčítání lidu 1910 v jádru Dlouhomilova (čp. 4–19, +114 obyvatel) – rejstřík vzrostl na 2 403 záznamů",
    titleEn: "Added 1910 Census for Central Dlouhomilov (Nos. 4–19, +114 Residents) – Registry Reaches 2,403 Records",
    titleDe: "Volkszählung 1910 im Ortskern von Lomigsdorf (Nr. 4–19, +114 Einwohner) ergänzt – Register steigt auf 2.403 Einträge",
    summary: "Z doskenované úvodní části kartonu 436 (ZAO Opava, OÚ Zábřeh, NAD 1000, inv. č. 1765) bylo přepsáno a propojeno 12 nově zpracovaných obydlených domů v jádru Dlouhomilova (čp. 5, 6, 8, 9, 11–16, 18–19) včetně titulního archu čp. 17 (Antonín Kožoušek) a doplněny pokračovací 2. archy pro čp. 4 (Byt 2–3: rodiny Františka a Josefa Vénosových a Teresie Fišarové, +9 osob) a čp. 8 (Byt 3–4: rodiny Petra Dvořáka a Isidora Krestýna *1829, +12 osob) – celkem +114 osob a 26 náhledů archů. Mezi nově zpracovanými domy jsou památková usedlost čp. 5 Karla Lukáše, grunt čp. 6 Jana Jílka, čp. 8 Isidora Braného a jeho podružských bytů, kostelník Antonín Šekl na čp. 9, stará škola čp. 12 sčítacího komisaře Josefa Mináře, grunt čp. 13 Františka Jílka se služebnou z Uherského Hradiště, čp. 15 Jana Skoumala a Matyldy Lipenské z Rejchartic i výměnkář Jan Vlček (*1834) na čp. 18. Současně byla odstraněna archivní duplicita starého průběžného číslování čp. 1–2 (šlo o archy osady Medelské čp. 1 a čp. 2 omylem přiřazené ke kostelu čp. 1 a faře čp. 2, jež r. 1910 nesla čp. 47) a doplněno geokódování zbývajících rodišť (Chválkovice, Kopřivná, Uherské Hradiště, Janovice, Vojtěchov). Ročník 1910 tak zahrnuje 1 177 osob ve 146 domech (790 Dlouhomilov + 112 Medelské + 275 Benkov).",
    summaryEn: "Transcribed and integrated 12 inhabited houses from the newly processed opening bundle of Box 436 (ZAO Opava, District Office Zábřeh, NAD 1000, inv. No. 1765) in central Dlouhomilov (Nos. 5, 6, 8, 9, 11–16, 18–19), the title sheet for No. 17 (Antonín Kožoušek), and the 2nd continuation sheets for No. 4 (Units 2–3: František & Josef Vénos and Teresie Fišarová, +9 residents) and No. 8 (Units 3–4: Petr Dvořák and Isidor Krestýn *1829, +12 residents), adding +114 residents and 26 archival sheet previews in total. Highlights include heritage homestead No. 5 (Karel Lukáš), No. 6 (Jan Jílek), No. 8 (Isidor Braný), sexton Antonín Šekl at No. 9, old schoolhouse No. 12 of census commissioner Josef Minář, No. 13 (František Jílek with a maid from Uherské Hradiště), No. 15 (Jan Skoumal & Matylda Lipenská from Rejchartice), and retired farmer Jan Vlček (*1834) at No. 18. Simultaneously resolved a historic numbering duplicate where serial Nos. 1–2 (actually Medelské Nos. 1–2) had been duplicated onto All Saints Church (No. 1) and the Rectory (listed under No. 47 in 1910), and geocoded the remaining birthplaces. The 1910 cohort now totals 1,177 residents across 146 houses, bringing the registry to 2,403 records.",
    summaryDe: "Aus dem neu bearbeiteten Anfangsteil des Kartons 436 (ZAO Troppau, Bezirksamt Hohenstadt, NAD 1000, Inv.-Nr. 1765) wurden 12 bewohnte Häuser im Ortskern von Lomigsdorf / Dlouhomilov transkribiert und verknüpft (Nr. 5, 6, 8, 9, 11–16, 18–19), das Titelblatt Nr. 17 (Antonín Kožoušek) sowie die 2. Fortsetzungsbögen zu Nr. 4 (Wohnungen 2–3: Familien František und Josef Vénos sowie Teresie Fišarová, +9 Einwohner) und Nr. 8 (Wohnungen 3–4: Familien Petr Dvořák und Isidor Krestýn *1829, +12 Einwohner) ergänzt – insgesamt +114 Einwohner und 26 Archivblatt-Vorschauen. Zu den Neuzugängen zählen der Denkmalhof Nr. 5 (Karel Lukáš), Nr. 6 (Jan Jílek), Nr. 8 (Isidor Braný), Mesner Antonín Šekl in Nr. 9, die alte Schule Nr. 12 des Zählkommissars Josef Minář, Nr. 13 (František Jílek mit Dienstmagd aus Ungarisch Hradisch), Nr. 15 (Jan Skoumal & Matylda Lipenská aus Reigersdorf/Rejchartice) sowie Ausgedinger Jan Vlček (*1834) in Nr. 18. Zugleich wurde eine historische Nummerierungs-Dublette bereinigt (lfd. Nr. 1–2 gehörten zu Dreihofen/Medelské Nr. 1–2, nicht zu Kirche Nr. 1 bzw. Pfarrhaus Nr. 47) und alle verbliebenen Geburtsorte geokodiert. Der Jahrgang 1910 umfasst nun 1.177 Personen in 146 Häusern (Gesamtregister: 2.403 Einträge).",
    links: [
      { label: "👥 Dlouhomilov v roce 1910 (790 os.)", labelEn: "👥 Dlouhomilov in 1910 (790 res.)", labelDe: "👥 Lomigsdorf 1910 (790 Ew.)", href: "obyvatele.html#year=1910&settlement=dlouhomilov" },
      { label: "🏡 Památkový grunt čp. 5 (Karel Lukáš)", labelEn: "🏡 Heritage Homestead No. 5", labelDe: "🏡 Denkmalhof Nr. 5 (Karel Lukáš)", href: "mapa.html#house=cp5" },
      { label: "🏫 Stará škola čp. 12 (Josef Minář)", labelEn: "🏫 Old Schoolhouse No. 12", labelDe: "🏫 Alte Schule Nr. 12 (Josef Minář)", href: "mapa.html#house=cp12" },
      { label: "🌍 Původ & migrace (1857–1921)", labelEn: "🌍 Origins & Migration", labelDe: "🌍 Herkunft & Migration", href: "demografie.html#origins" }
    ]
  },
  {
    id: "news_2026_11_16_puvod_dluhomila_zdo",
    date: "2026-11-16",
    category: "analysis",
    badge: "Onomastika & ZDO I–X (1266–1447)",
    badgeEn: "Onomastics & ZDO I–X (1266–1447)",
    badgeDe: "Onomastik & ZDO I–X (1266–1447)",
    title: "Kdo byl zakladatel Dlúhomil, odkud přišel a kdy žil? Jazykový rozbor, kolonizátoři z r. 1269 a všech 32 vkladů ZDO (1356–1447)",
    titleEn: "Who Was Founder Dlúhomil, Where Did He Come From & When Did He Live? Linguistic Proof, 1269 Colonizers & All 32 ZDO Entries (1356–1447)",
    titleDe: "Wer war Gründer Dlúhomil, woher kam er und wann lebte er? Sprachanalyse, Kolonisatoren von 1269 & alle 32 Landtafel-Einträge (1356–1447)",
    summary: "Propojení historického hláskosloví (Dlúhomilov → hanácké Dlóhomilov → Dlómilov → Lomigsdorf) s excerpcí diplomatářů (CDM I–IX, RBM II) a všech 32 zápisů ZDO I–X (1356–1447) vymezilo zakladatele Dlúhomila jako česky mluvícího zemana z Hané (nar. cca 1240–1265), který v poslední třetině 13. století (cca 1275–1300) vyměřil záhumenicové lány a svobodný „dvuor Dlúhomiluov“. Olomoucká listina z r. 1269 (RBM II, č. 672) zachytila kolonizátory našeho podhůří z jižní Hané (Všebora a Hrabiše I. z Úsova ze Švábenic, Viléma z Náměště a Kojatu z Drnovic, lovčího Benedu a Viléma z Dubicka/Otaslavic), hydrografický rozbor vyložil příčný pás Kolšov – Studénky – Sluhoňov – Dlouhomilov – Hrabišín přes hřbet Bukovické hory (oproti ústí Loučky v Lesnici) a revize ZDO odkryla jak 3. dvorec v letech 1365–1378 (Čáslava → Vilém → Martin a Ctibor), tak prodej alodního dvora Domanem ze Závořic Pročkovi z Bouzova/Vildenberka r. 1398 (ZDO VI, č. 879). Přibyla Zajímavost #18 a samostatná studie.",
    summaryEn: "Combining historical phonology (Dlúhomilov → Haná Dlóhomilov → Dlómilov → Lomigsdorf) with diplomatic screening (CDM I–IX, RBM II) and all 32 ZDO I–X entries (1356–1447) identified founder Dlúhomil as a Czech-speaking squire from central Moravia / Haná (b. ca. 1240–1265) who laid out the forest hides and free 'dvuor Dlúhomiluov' ca. 1275–1300. An Olomouc Castle charter of 1269 (RBM II, No. 672) unites the Haná colonizers (Všebor & Hrabiše I of Úsov/Švábenice, Vilém of Náměšť & Kojata of Drnovice, huntsman Beneda & Vilém of Dubicko/Otaslavice), hydrographic analysis explained the transverse Kolšov–Dlouhomilov strip over Bukovická hora ridge (vs. Lesnice at Loučka's mouth), and ZDO VI, No. 879 (1398) revealed how Doman of Závořice sold the allodial court to Proček of Bouzov/Wildenberg. Added Highlight #18 and a full monograph.",
    summaryDe: "Die Verbindung historischer Lautlehre (Dlúhomilov → hannakisch Dlóhomilov → Dlómilov → Lomigsdorf) mit den Urkundenbüchern (CDM I–IX, RBM II) und allen 32 Einträgen der Olmützer Landtafel ZDO I–X (1356–1447) identifiziert Gründer Dlúhomil als tschechischsprachigen Landadeligen aus der Hanna (* ca. 1240–1265), der um 1275–1300 die Waldhufen und den freien 'dvuor Dluhomiluov' anlegte. Die Olmützer Urkunde von 1269 (RBM II, Nr. 672) vereint die Kolonisatoren aus der Süd-Hanna (Všebor & Hrabiše I. von Aussee/Švábenice, Wilhelm von Náměšť & Kojata von Drnovice, Jägermeister Beneda & Wilhelm von Dubitzko/Otaslavice), die Topografie klärt den Querstreifen Kolšov–Dlouhomilov über den Kamm der Bukovická hora (gegenüber der Loučka-Mündung bei Lesnice), und ZDO VI, Nr. 879 (1398) belegt den Verkauf des Allodialhofs an Proček von Busau/Wildenberg. Ergänzt um Fundstück #18 und Studie.",
    links: [
      { label: "✨ Zajímavost #18 (Původ Dlúhomila)", labelEn: "✨ Highlight #18 (Origin of Dlúhomil)", labelDe: "✨ Fundstück #18 (Herkunft Dlúhomils)", href: "pribeh.html#facts" },
      { label: "📜 Kapitola I (Dlúhomil & 3 dvorce)", labelEn: "📜 Chapter I (Dlúhomil & 3 Courts)", labelDe: "📜 Kapitel I (Dlúhomil & 3 Freihöfe)", href: "pribeh.html#kap-0" },
      { label: "📄 Studie & 32 vkladů ZDO ↗", labelEn: "📄 Study & 32 ZDO Entries ↗", labelDe: "📄 Studie & 32 ZDO-Einträge ↗", href: "docs/puvod_dluhomila_a_zdo_1356_1447.md" },
      { label: "📚 Prameny (RBM II & ZDO I–X)", labelEn: "📚 Sources (RBM II & ZDO I–X)", labelDe: "📚 Quellen (RBM II & ZDO I–X)", href: "reference.html" }
    ]
  },
  {
    id: "news_2026_11_16_literatura_farnost_20stol",
    date: "2026-11-16",
    category: "analysis",
    badge: "Rešerše literatury • 15 VŠ prací",
    badgeEn: "Academic Synthesis • 15 Theses",
    badgeDe: "Fachliteratur • 15 Hochschulschriften",
    title: "Kvalifikační práce a hlubší historie (1436–2006): dopis Émila Zoly na faru čp. 2, Sokol (1938) i Boží Tělo 1959",
    titleEn: "15 Theses & Deeper Parish History (1436–2006): Émile Zola's Letter to Rectory No. 2, Sokol 1938 & 1959 Processions",
    titleDe: "15 Hochschulschriften & Tiefenforschung (1436–2006): Émile Zolas Brief an das Pfarrhaus Nr. 2, Sokol 1938 & Fronleichnam 1959",
    summary: "Systematická rešerše 15 vysokoškolských prací z UPOL a UK Praha, recenzovaných studií (Š. Kohout 2009, J. Lukáč 2017, S. Balík 2010), farní historie a Paměti národa (docs/kvalifikacni_prace_a_literatura.md) obohatila karty kostela čp. 1 (64 800 cihel r. 1707, válečné rekvizice zvonů 1916–1918, 7 kněží-rodáků), fary čp. 2 (P. František Kužela / Adam Chlumecký 1891–1907, Pamětní kniha 1899–1986, P. František Reichel 1934–1964, Mons. Antonín Pospíšil), kapitoly I, II a XI příběhu obce (mj. Tunklové 1436–1466, Sokol Dlouhomilov 1938, ČJA bod 647), novou Zajímavost #17 a rozšířila katalog Reference na 32 položek.",
    summaryEn: "A systematic synthesis of 15 open-access theses from Palacký and Charles Universities, peer-reviewed studies (Kohout 2009, Lukáč 2017, Balík 2010), parish records, and Memory of Nations (docs/kvalifikacni_prace_a_literatura.md) enriched All Saints Church No. 1 (64,800 bricks in 1707, WWI bell requisitions, 7 native priests), Rectory No. 2 (Fr. František Kužela / Adam Chlumecký 1891–1907 & Émile Zola's letter, Fr. František Reichel 1934–1964, Mons. Antonín Pospíšil), Story Chapters I, II & XI (Tunkl consolidation 1436–1466, Sokol 1938, ČJA dialect point 647), added Highlight #17, and expanded the References catalog to 32 entries.",
    summaryDe: "Eine systematische Auswertung von 15 Hochschulschriften der Universitäten Olmütz und Prag, Fachstudien (Kohout 2009, Lukáč 2017, Balík 2010) und Zeitzeugenberichten (docs/kvalifikacni_prace_a_literatura.md) bereicherte Kirche Nr. 1 (64.800 Ziegel 1707, Glockenrequirierung 1916–1918, 7 Ortsgeistliche), Pfarrhof Nr. 2 (P. František Kužela / Adam Chlumecký 1891–1907 samt Brief Émile Zolas, P. František Reichel 1934–1964, Mons. A. Pospíšil), die Chronikkapitel I, II & XI (Tunkl 1436–1466, Sokol 1938, Dialektpunkt ČJA 647), ergänzte Fundstück #17 und erweiterte den Quellenkatalog auf 32 Einträge.",
    links: [
      { label: "✨ Zajímavost #17 (Dopis Émila Zoly)", labelEn: "✨ Highlight #17 (Émile Zola's Letter)", labelDe: "✨ Fundstück #17 (Brief Émile Zolas)", href: "pribeh.html#facts" },
      { label: "🏛️ Fara čp. 2 (Kužela & Reichel)", labelEn: "🏛️ Rectory No. 2 (Kužela & Reichel)", labelDe: "🏛️ Pfarrhof Nr. 2 (Kužela & Reichel)", href: "mapa.html#house=cp2" },
      { label: "⛪ Kostel čp. 1 (1510–2018)", labelEn: "⛪ Church No. 1 (1510–2018)", labelDe: "⛪ Kirche Nr. 1 (1510–2018)", href: "mapa.html#house=cp1" },
      { label: "📚 Reference (32 pramenů & studií)", labelEn: "📚 References (32 Sources & Studies)", labelDe: "📚 Referenzen (32 Quellen & Studien)", href: "reference.html" }
    ]
  },
  {
    id: "news_2026_11_16_benkov_1921_domovni_archy",
    date: "2026-11-16",
    category: "census",
    badge: "Sčítání Benkov • 1921 & 1900",
    badgeEn: "Benkov Census • 1921 & 1900",
    badgeDe: "Volkszählung Benke • 1921 & 1900",
    title: "Benkov 1921: Ověřeno všech 219/219 snímků, 45 sběrných archů domovních + příprava Benkova 1900",
    titleEn: "Benkov 1921: All 219/219 Scans Verified with 45 House Summary Sheets & Zoomify Links + 1900 Mapped",
    titleDe: "Benke 1921: Alle 219/219 Scans verifiziert samt 45 Haussammelbögen & Zoomify-Links + 1900 kartiert",
    summary: "Byla dokončena úplná revize sčítání lidu 1921 pro Benkov (OÚ Šumperk – I, NAD 999, inv. č. 1163, fascikl 2): ze všech 219 ověřených snímků bylo do webu doplněno všech 45 náhledů sběrných archů domovních (benkov_cp1–benkov_cp45) a 82 přímých Zoomify odkazů na originály v ZAO Opava (nyní přístupných přímo na kartě ročníku 1921 u každého domu). Současně byl stažen a zmapován kompletní ročník Benkov 1900 (inv. č. 1010, karton 326, 120 snímků) pro navazující přepis.",
    summaryEn: "Completed full verification of all 219/219 scans in the 1921 Benkov census (District Office Šumperk I, NAD 999, inv. No. 1163, fasc. 2): integrated all 45 House Summary Sheets (benkov_cp1–benkov_cp45) and 82 direct Zoomify links to ZAO Opava originals directly into every house's 1921 census view, alongside downloading and mapping all 120 scans of the 1900 Benkov census (box 326) for upcoming transcription.",
    summaryDe: "Vollständige Revision aller 219/219 Scans der Volkszählung 1921 für Benke / Benkov abgeschlossen (Bezirksamt Mährisch Schönberg I, NAD 999, Inv.-Nr. 1163, Fasz. 2): Alle 45 Haussammelbögen (benkov_cp1–benkov_cp45) sowie 82 direkte Zoomify-Links zu den Originalen im ZAO Troppau sind nun direkt in den Hauskarten verknüpft; zudem wurden alle 120 Scans von Benke 1900 (Karton 326) heruntergeladen und kartiert.",
    links: [
      { label: "🏡 Benkov čp. 1 (domovní & bytové archy)", labelEn: "🏡 Benkov No. 1 (House & Flat Sheets)", labelDe: "🏡 Benke Nr. 1 (Haus- & Wohnungsbögen)", href: "mapa.html#house=benkov_cp1" },
      { label: "🏡 Benkov čp. 25 (sběrný arch + Zoomify)", labelEn: "🏡 Benkov No. 25 (Summary + Zoomify)", labelDe: "🏡 Benke Nr. 25 (Sammelbogen + Zoomify)", href: "mapa.html#house=benkov_cp25" },
      { label: "👥 Benkov v roce 1921 (211 os.)", labelEn: "👥 Benkov in 1921 (211 res.)", labelDe: "👥 Benke 1921 (211 Ew.)", href: "obyvatele.html#year=1921&settlement=benkov" },
      { label: "📚 Prameny (OÚ Šumperk NAD 999)", labelEn: "📚 Sources (Šumperk NAD 999)", labelDe: "📚 Quellen (Mähr. Schönberg NAD 999)", href: "reference.html" }
    ]
  },
  {
    id: "news_2026_11_16_scitani_1910_benkov",
    date: "2026-11-16",
    category: "census",
    badge: "Sčítání 1910 • Benkov",
    badgeEn: "1910 Census • Benkov",
    badgeDe: "Zählung 1910 • Benke",
    title: "Dokončeno Sčítání lidu 1910 pro Benkov (45 domů, 275 obyvatel) – rejstřík vzrostl na 2 289 záznamů",
    titleEn: "Completed 1910 Census for Benkov (45 Houses, 275 Residents) – Registry Expands to 2,289 Records",
    titleDe: "Volkszählung 1910 für Benke (Benkov) abgeschlossen (45 Häuser, 275 Bewohner) – Register auf 2.289 Einträge angewachsen",
    summary: "Byl dokončen úplný přepis sčítání lidu 1910 pro tehdy samostatnou obec Benkov (SOkA Šumperk / ZAO Opava, OÚ Šumperk – I, NAD 999, inv. č. 1086, karton 365, 122 snímků): všech 45 domů (čp. 1–45) a 275 obyvatel (270 německy, 3 česky a 2 italsky hovořící stavební dělníci z Abruzza na čp. 13). Spolu s Dlouhomilovem (676 os.) a Medelským (112 os.) tak má ročník 1910 celkem 1 063 osob a celý rejstřík dosáhl 2 289 záznamů (1857–1921). Přidán osadní filtr i přímé odkazy do rejstříku a geokódování všech rodišť.",
    summaryEn: "Completed full transcription and web integration of the 1910 census for Benkov / Benke (SOkA Šumperk / ZAO Opava, District Office Šumperk I, NAD 999, inv. No. 1086, box 365, 122 scans): all 45 houses and 275 residents (270 German, 3 Czech, plus 2 Italian builders from Abruzzo at No. 13). Combined with Dlouhomilov (676) and Medelské (112), the 1910 cohort totals 1,063 residents and the overall registry reaches 2,289 records (1857–1921), featuring new settlement filters and complete birthplace geocoding.",
    summaryDe: "Vollständige Transkription und Web-Integration der Volkszählung 1910 für Benke / Benkov (Bezirksamt Mährisch Schönberg I, NAD 999, Inv.-Nr. 1086, Karton 365, 122 Scans): alle 45 Häuser und 275 Einwohner (270 deutsch-, 3 tschechischsprachig sowie 2 italienische Bauarbeiter aus den Abruzzen in Nr. 13). Gemeinsam mit Lomigsdorf (676) und Dreihofen (112) umfasst 1910 nun 1.063 Personen; das Gesamtregister steigt auf 2.289 Einträge inkl. neuer Siedlungsfilter und vollständiger Geburtsort-Geokodierung.",
    links: [
      { label: "👥 Benkov v roce 1910 (275 os.)", labelEn: "👥 Benkov in 1910 (275 res.)", labelDe: "👥 Benke im Jahr 1910 (275 Ew.)", href: "obyvatele.html#year=1910&settlement=benkov" },
      { label: "🇮🇹 Italští dělníci v Benkově čp. 13", labelEn: "🇮🇹 Italian Workers at Benkov No. 13", labelDe: "🇮🇹 Italienische Arbeiter in Benke Nr. 13", href: "mapa.html#house=benkov_cp13" },
      { label: "🌍 Dálková migrace & původ", labelEn: "🌍 Migration & Origins", labelDe: "🌍 Herkunft & Migration", href: "demografie.html#origins" },
      { label: "📚 Prameny (OÚ Šumperk NAD 999)", labelEn: "📚 Sources (Šumperk NAD 999)", labelDe: "📚 Quellen (Mähr. Schönberg NAD 999)", href: "reference.html" }
    ]
  },
  {
    id: "news_2026_11_16_zao_matriky_1650_1785",
    date: "2026-11-16",
    category: "census",
    badge: "ZAO Matriky • Krok 3",
    badgeEn: "ZAO Parish Registers • Step 3",
    badgeDe: "ZAO Pfarrmatriken • Schritt 3",
    title: "Matriky Dubicko a Rohle (1650–1785): svědek Pavel Dvořák se synem Hanßem (1654), oprava křtu 1763 & přechod k Zá II",
    titleEn: "Dubicko & Rohle Parish Registers (1650–1785): Witnesses Pavel & Hanß Dvořák (1654), 1763 Baptism Correction & Transition to Zá II",
    titleDe: "Matriken Dubitzko & Rohle (1650–1785): Zeugen Pavel & Hanß Dvořák (1654), Taufkorrektur 1763 & Übergang zu Zá II",
    summary: "Systematický průzkum originálních skenů ZAO v Dubicku (Zá IV 1–2) a Rohli (Zá VIII 1, 6, 10, 14, 15) přesně zmapoval matriční řady před rokem 1786: Dlouhomilov, Medelské a Benkov nepřešly do Rohle až r. 1762, nýbrž již kolem r. 1720/1722 (Dubicko Zá IV 2 str. 948–1095); a po vzniku lokálie Zá II (1786) zůstal Benkov v Rohli až do r. 1932! Zápis ze 27. 9. 1654 (Dubicko Zá IV 1, pag. 313) přináší přímé svědectví „Pawel Dworžák z Dlauhomilowa a Hanß geho Syn“ na sňatku Jiříka z Medelského, zatímco zápis z 9. 9. 1763 (Rohle Zá VIII 1, pag. 405) opravuje otce Pavla Dvořáka na sedláka Pavla st. a Barboru. Doplněny 4 náhledy, Zajímavost #16, profily osob i samostatná studie.",
    summaryEn: "Completed Step 3 across ZAO Opava parish registers of Dubicko (Zá IV 1–2) and Rohle (Zá VIII 1, 6, 10, 14, 15): Dlouhomilov and Benkov moved from Dubicko to Rohle as early as 1720–1722 (Zá IV 2 pp. 948–1095), and Benkov remained affiliated with Rohle until 1932 even after Dlouhomilov Zá II opened in 1786! The Sept 27, 1654 entry (Dubicko Zá IV 1, p. 313) proves Pavel Dvořák and his son Hanß witnessing a Medelské wedding, while the Sept 9, 1763 baptism (Rohle Zá VIII 1, p. 405) corrects Petr Dvořák's grandfather to farmer Pavel Dvořák Sr. & Barbara. Added 4 previews, Highlight #16, updated person/house timelines, and a monograph.",
    summaryDe: "Schritt 3 in den Originalmatriken Dubitzko (Zá IV 1–2) und Rohle (Zá VIII 1, 6, 10, 14, 15) abgeschlossen: Lomigsdorf und Benke wechselten bereits um 1720–1722 von Dubitzko nach Rohle (Zá IV 2 S. 948–1095), und Benke verblieb bis 1932 bei der Pfarre Rohle! Der Eintrag vom 27. 9. 1654 (Dubitzko Zá IV 1, S. 313) belegt Pavel Dvořák mit Sohn Hanß als Trauzeugen für Dreihofen (Medelské), während der Taufeintrag vom 9. 9. 1763 (Rohle Zá VIII 1, S. 405) Pavels Vater auf den Bauern Pavel Dvořák d. Ä. & Barbara berichtigt. Ergänzt um 4 Scans, Fundstück #16, Biografien und Studie.",
    links: [
      { label: "✨ Zajímavost #16 (Matriky 1653–1786)", labelEn: "✨ Highlight #16 (Registers 1653–1786)", labelDe: "✨ Fundstück #16 (Matriken 1653–1786)", href: "pribeh.html#facts" },
      { label: "👤 Oprava rodokmenu Dvořáků (1654 & 1763)", labelEn: "👤 Dvořák Lineage Correction (1654 & 1763)", labelDe: "👤 Korrektur Stammbaum Dvořák (1654 & 1763)", href: "obyvatele.html" },
      { label: "📖 Kapitola II (Putování farnosti)", labelEn: "📖 Chapter II (Parish Migration)", labelDe: "📖 Kapitel II (Pfarrwechsel)", href: "pribeh.html#kap-1" },
      { label: "📚 Prameny (Dubicko & Rohle)", labelEn: "📚 Sources (Dubicko & Rohle)", labelDe: "📚 Quellen (Dubitzko & Rohle)", href: "reference.html" }
    ]
  },
  {
    id: "news_2026_11_16_ilustrace_kapitol_pribehu",
    date: "2026-11-16",
    category: "feature",
    badge: "Komiksové ilustrace",
    badgeEn: "Comic Illustrations",
    badgeDe: "Comic-Illustrationen",
    title: "Kronika údolí v obrazech: Všech 11 kapitol příběhu obce doplněno o nové komiksové ilustrace",
    titleEn: "Illustrated Valley Chronicle: All 11 Story Chapters Now Feature Custom Comic Illustrations",
    titleDe: "Illustrierte Talchronik: Alle 11 Kapitel der Ortsgeschichte mit neuen Comic-Illustrationen ergänzt",
    summary: "Sekce Příběh obce i textová kronika byly obohaceny o 11 nových autorských komiksových ilustrací (story_kap_00 až story_kap_10), které provázejí každou kapitolu od středověké lokace pod hradem Brníčkem a Aretinovy mapy (1623) přes dědičnou rychtu čp. 7, dvojitou svatbu roku 1878, kovárnu čp. 110 a sčítání lidu 1921 až po poválečnou proměnu Benkova.",
    summaryEn: "All 11 chapters of the Story section now feature custom comic-style illustrations (story_kap_00 to story_kap_10) spanning 1300–1960: from medieval locators beneath Brníčko Castle and Aretin's 1623 map through Hereditary Rychta No. 7, the 1878 double wedding at No. 24, smithy No. 110, and the 1921 census to post-war Benkov.",
    summaryDe: "Alle 11 Kapitel der Ortschronik wurden um neue Comic-Illustrationen (story_kap_00 bis story_kap_10) aus den Jahren 1300–1960 erweitert: von den mittelalterlichen Lokatoren unter der Burg Brünles und Aretins Karte (1623) über das Erbgericht Nr. 7, die Doppelhochzeit von 1878, die Schmiede Nr. 110 und die Volkszählung 1921 bis zum Nachkriegswandel in Benke (Benkov).",
    links: [
      { label: "📖 Ilustrované kapitoly (11)", labelEn: "📖 Illustrated Chapters (11)", labelDe: "📖 Illustrierte Kapitel (11)", href: "pribeh.html#chapters" },
      { label: "🏰 Kapitola I (Lokátoři 1300–1602)", labelEn: "🏰 Chapter I (Locators 1300–1602)", labelDe: "🏰 Kapitel I (Lokatoren 1300–1602)", href: "pribeh.html#kap-0" },
      { label: "🎨 Komiksová kronika (12)", labelEn: "🎨 Comic Chronicle (12)", labelDe: "🎨 Comic-Chronik (12)", href: "pribeh.html#comic" }
    ]
  },
  {
    id: "news_2026_11_16_zdo_puhony_1466_1622",
    date: "2026-11-16",
    category: "analysis",
    badge: "MZA A 3 & Půhony • Krok 2",
    badgeEn: "MZA A 3 & Citations • Step 2",
    badgeDe: "MZA A 3 & Ladungen • Schritt 2",
    title: "Zemské desky po r. 1466 a půhonné knihy: pochop Duchek na Šilperku, rataj Števík a přechod Tunklové → Boskovicové → Žerotínové",
    titleEn: "Olomouc Land Tables After 1466 & Citation Books: Constable Duchek at Šilperk, Bailiff Števík & Estate Transfers",
    titleDe: "Olmützer Landtafel nach 1466 & Ladungsbücher: Büttel Duchek bei Schildberg, Schaffer Števík & Herrschaftswechsel",
    summary: "Druhá etapa výzkumu v originálních pergamenových foliích Moravských zemských desek (MZA Brno, fond A 3, NKP č. 2) a edicích Libri citationum odhalila přesná jména i texty dlouho před matrikami: čtveřici sporů o „dvuor Dluhomiluov“ (1463–1466), zmínku zákupních rychet již r. 1490 (ZDO XIII, č. 84) i dva doložené útěky z r. 1492 – Jana rataje Števíka (KP VI, č. 1775) a pochopa (= drába) Duchka z Dlúhomilova na mlýn u Šilperka (č. 1962). Doloženy jsou také pergaménové zápisy převodů z let 1510 („wes dluhomilow s kaplu“), 1513 („hrad Brniczko zborzenj“) i dědictví po Janovi z Boskovic († 1. 8. 1589) na Ladislava Velena ze Žerotína. Doplněny 4 náhledy, Zajímavost #15 a samostatná studie.",
    summaryEn: "Completed Step 2 across the Olomouc Land Tables (MZA Brno A 3) and Libri citationum I, IV/2 & VI: uncovered four 1463–1466 lawsuits over the Dlouhomilov free court, the 1490 reference to emphyteutic rychty, two documented 1492 flights from Dlouhomilov (Jan Števík and bailiff/pochop Duchek at a mill near Šilperk), the 1510/1513 parchment charters ('wes dluhomilow s kaplu', 'hrad Brniczko zborzenj'), and the 1589 inheritance from Jan of Boskovice († Aug 1, 1589) to Ladislav Velen of Žerotín. Added 4 previews, Highlight #15, and a dedicated monograph.",
    summaryDe: "Schritt 2 in der Olmützer Landtafel (MZA Brünn A 3) und den Libri citationum (I, IV/2, VI) abgeschlossen: vier Prozesse um den Freihof (1463–1466), Kauf-Erbgerichte 1490, zwei Untertanenfluchten von 1492 (Jan Števík sowie Büttel/pochop Duchek in die Schildberger Mühle), Pergament-Einträge 1510/1513 ('wes dluhomilow s kaplu', zerstörte Burg Brünles) und das Erbe Jans von Boskowitz († 1. 8. 1589) an Ladislav Velen von Žerotín. Ergänzt um 4 Scans, Fundstück #15 und Studie.",
    links: [
      { label: "✨ Zajímavost #15 (Pochop Duchek 1492)", labelEn: "✨ Highlight #15 (Bailiff Duchek 1492)", labelDe: "✨ Fundstück #15 (Büttel Duchek 1492)", href: "pribeh.html#facts" },
      { label: "📜 Kapitola I (Zemské desky & půhony)", labelEn: "📜 Chapter I (Land Tables & Citations)", labelDe: "📜 Kapitel I (Landtafel & Ladungen)", href: "pribeh.html#kap-0" },
      { label: "🍺 Rychta čp. 7 (1490/1513)", labelEn: "🍺 Rychta No. 7 (1490/1513)", labelDe: "🍺 Erbgericht Nr. 7 (1490/1513)", href: "mapa.html#house=cp7" },
      { label: "📚 Prameny (MZA A 3 & KP VI)", labelEn: "📚 Sources (MZA A 3 & KP VI)", labelDe: "📚 Quellen (MZA A 3 & KP VI)", href: "reference.html" }
    ]
  },
  {
    id: "news_2026_11_16_mza_d1_d2_1657_1756",
    date: "2026-11-16",
    category: "analysis",
    badge: "MZA Brno • Krok 1",
    badgeEn: "MZA Brno • Step 1",
    badgeDe: "MZA Brünn • Schritt 1",
    title: "MZA Brno (1657–1756): Kompletní soupis všech 27 sedláků z r. 1677, rektifikační akta a rozluštění Medelského",
    titleEn: "MZA Brno (1657–1756): All 27 Settled Farmers of 1677, Rectification Acts & the Mystery of Medelské",
    titleDe: "MZA Brünn (1657–1756): Alle 27 Wirte von 1677, Rektifikationsakten & das Rätsel um Dreihofen (Medelské)",
    summary: "Byl dokončen úplný paleografický přepis Lánového rejstříku panství Zábřeh z 13. 10. 1677 (MZA Brno D 1, sign. 141, fol. 76r–79v): všech 27 hospodářů Dlouhomilova (830 měřic, 0 poustek!) a 10 usedlých Benkova včetně předchůdců z let 1656–1657. Navazující fasiony z let 1749 a 1756 (D 2) spolu s Dominikální fasí 1750 (D 3) prokázaly, že v Medelském neležel panský dvůr a jeho původní dvorce přežívaly přímo v tratích dlouhomilovských gruntů („bey Medelsker grundt“, „u Medla gruntes mihle“). Doplněny archivní náhledy, Zajímavost #14 a nová studie.",
    summaryEn: "Completed full paleographic transcription of the 1677 Zábřeh Lán Cadastre (MZA D 1, sign. 141, fol. 76r–79v): all 27 Dlouhomilov farmers (830 Metzen, 0 abandoned farms) and 10 Benkov holders with 1656–1657 predecessors, paired with 1749/1756 Rectification Acts (D 2) and 1750 Dominical Declarations (D 3) revealing Medelské's fiscal fusion inside Dlouhomilov field names ('bey Medelsker grundt'). Added 4 archive previews, Highlight #14, and a dedicated study.",
    summaryDe: "Vollständige Transkription des Lahnenregisters 1677 (MZA D 1, Sign. 141, Fol. 76r–79v): alle 27 Wirte in Lomigsdorf (830 Metzen, 0 Ödungen) und 10 in Benke samt Vorgängern 1656–1657 sowie Rektifikationsakten 1749/1756 (D 2) und Dominikalfassion 1750 (D 3), die das Fortleben von Dreihofen/Medelské in Flurnamen ('bey Medelsker grundt') belegen. Ergänzt um 4 Scans, Fundstück #14 und Studie.",
    links: [
      { label: "✨ Zajímavost #14 (27 usedlých 1677)", labelEn: "✨ Highlight #14 (27 Farmers 1677)", labelDe: "✨ Fundstück #14 (27 Wirte 1677)", href: "pribeh.html#facts" },
      { label: "📖 Kapitola II (Lánové rejstříky)", labelEn: "📖 Chapter II (Lán Cadastres)", labelDe: "📖 Kapitel II (Lahnenregister)", href: "pribeh.html#kap-1" },
      { label: "🍺 Rychta čp. 7 (Ilia Zaoralný 1677)", labelEn: "🍺 Rychta No. 7 (1677–1756)", labelDe: "🍺 Erbgericht Nr. 7 (1677–1756)", href: "mapa.html#house=cp7" },
      { label: "📚 Prameny (MZA D 1–D 3)", labelEn: "📚 Sources (MZA D 1–D 3)", labelDe: "📚 Quellen (MZA D 1–D 3)", href: "reference.html" }
    ]
  },
  {
    id: "news_2026_11_14_vs_zabreh_1585_aretin",
    date: "2026-11-14",
    category: "analysis",
    badge: "Archivní průlom",
    badgeEn: "Archival Breakthrough",
    badgeDe: "Archiv-Durchbruch",
    title: "Velkostatek Zábřeh (NAD 1549): Urbář 1585, Aretinova mapa 1623 (AKP č. 81), matriky od 1617 a 7 generací Schönů v Benkově",
    titleEn: "Zábřeh Estate (NAD 1549): 1585 Urbar, 1623 Aretin Map (AKP No. 81), 1617+ Parish Books & 7 Generations of Schön in Benkov",
    titleDe: "Herrschaft Hohenstadt (NAD 1549): Urbar 1585, Aretin-Karte 1623 (AKP Nr. 81), Matriken ab 1617 & 7 Generationen Schön in Benke",
    summary: "Druhá vlna archivního výzkumu vynesla přepis všech 40 předbělohorských usedlíků z Urbáře panství Zábřeh 1585 (22 v Dlouhomilově, 8 se spoludržbami v Medelském, 10 v čele s fojtem Mikulášem v Benkově), technické údaje Aretinovy mapy z r. 1623 (AKP ČR č. 81, 137 × 98 cm, 1 : 20 800), nejstarší matriky Dubicka od r. 1617 a Zábřeha od r. 1649 (1651 Pavel Dvořák) i sedmigenerační řetěz rodu Schönů v Benkově čp. 5 (1669–1946). Opraveny byly také evidenční odkazy ÚSKP (rychta čp. 7: 51795/9-103) a přibyla Zajímavost #13.",
    summaryEn: "Completed the 1585 Zábřeh Urbar extraction across all three settlements (22 farmers in Dlouhomilov, 8 with co-holdings in Medelské, 10 under reeve Mikuláš in Benkov/Venkov), full details on Aretin's 1623 manuscript map (AKP No. 81, 137 × 98 cm, 1 : 20,800), pre-1786 registers in Dubicko (from 1617) and Zábřeh (from 1649), and the seven-generation Schön lineage at Benkov No. 5 (1669–1946), alongside unified NPÚ ÚSKP numbers and Archival Highlight #13.",
    summaryDe: "Das Urbar 1585 belegt bereits die vorkriegszeitliche Sprachgrenze (22 Wirte in Lomigsdorf, 8 samt Mitbesitz in Dreihofen/Medelské, 10 unter Erbrichter Nikolaus in Benke). Ergänzt wurden Detaildaten zu Aretins Karte 1623 (AKP Nr. 81, 137 × 98 cm, ca. 1 : 20 800), Matriken ab 1617 (Dubitzko) bzw. 1649 (Hohenstadt), die sieben Generationen Schön in Benke Nr. 5 (1669–1946), bereinigte NPÚ-Denkmalnummern (Rychta Nr. 7: 51795/9-103) sowie Entdeckung #13.",
    links: [
      { label: "✨ Zajímavost #13 (Urbář 1585 & Benkov)", labelEn: "✨ Highlight #13 (1585 Urbar & Benkov)", labelDe: "✨ Entdeckung #13 (Urbar 1585 & Benke)", href: "pribeh.html#facts" },
      { label: "🏡 Benkov čp. 5 (7 generací Schönů)", labelEn: "🏡 Benkov No. 5 (Schön lineage)", labelDe: "🏡 Benke Nr. 5 (Geschlecht Schön)", href: "mapa.html#house=benkov_cp5" },
      { label: "📖 Kapitoly I.–II. (ZDO, Urbář, Aretin)", labelEn: "📖 Chapters I–II (ZDO, Urbar, Aretin)", labelDe: "📖 Kapitel I–II (Landtafel, Urbar, Aretin)", href: "pribeh.html#kap-1" },
      { label: "📚 Prameny (NAD 1549 & Urbář 1585)", labelEn: "📚 Sources (NAD 1549 & Urbar 1585)", labelDe: "📚 Quellen (NAD 1549 & Urbar 1585)", href: "reference.html" }
    ]
  },
  {
    id: "news_2026_11_14_lokatori_zdo",
    date: "2026-11-14",
    category: "analysis",
    badge: "Archivní výzkum",
    badgeEn: "Archival Research",
    badgeDe: "Archivforschung",
    title: "Výzkum Moravských zemských desek (1356–1447): lokátoři, vladykové z Dlouhomilova a nejstarší dědičná rychta",
    titleEn: "Moravian Land Registers Research (1356–1447): Locators, Nobles of Dlouhomilov & the Hereditary Rychta",
    titleDe: "Forschung in den Mährischen Landtafeln (1356–1447): Lokatoren, Adelige von Dlouhomilov & Erbgericht",
    summary: "Do Příběhu Dlouhomilova přibyla nová úvodní kapitola (I.) a Zajímavost #12 vycházející přímo z doslovných latinských zápisů olomoucké řady Zemských desek (ZDO I, IV, X). Dokumentují prodeje dvorů, lánů, dvou krčem a mlýna (1356–1368), nejstarší zmínku Benkova a Medelského (1385), scelení vsi rodem Tunklů (1437–1447) i prameny k dědičné rychtě čp. 7 (od r. 1602) a Aretinově mapě (1623).",
    summaryEn: "Added a new opening chapter (I.) and Archival Highlight #12 to the Story of Dlouhomilov based directly on verbatim Latin entries in the Olomouc Land Registers (ZDO I, IV, X, 1356–1447), documenting medieval courts, taverns, watermill, Benkov and Medelské (1385), Tunkl consolidation (1437–1447), the 1602 hereditary rychta (House No. 7), and Aretin's 1623 estate map.",
    summaryDe: "Neues Eröffnungskapitel (I.) und Matriken-Entdeckung #12 auf Grundlage wörtlicher lateinischer Einträge der Olmützer Landtafel (ZDO I, IV, X, 1356–1447): Höfe, Hufen, zwei Schenken und eine Mühle (1356–1368), Ersterwähnung von Benke und Medelské/Dreihofen (1385), Vereinigung durch die Herren von Tunkl (1437–1447), das Erbgericht Nr. 7 (1602) und Aretins Karte von 1623.",
    links: [
      { label: "📜 Kapitola I: Lokátoři & vladykové", labelEn: "📜 Chapter I: Locators & Squires", labelDe: "📜 Kapitel I: Lokatoren & Adel", href: "pribeh.html#kap-0" },
      { label: "✨ Zajímavost #12 (Zemské desky)", labelEn: "✨ Highlight #12 (Land Registers)", labelDe: "✨ Entdeckung #12 (Landtafel)", href: "pribeh.html#facts" },
      { label: "🍺 Dědičná rychta čp. 7", labelEn: "🍺 Hereditary Rychta No. 7", labelDe: "🍺 Erbgericht Nr. 7", href: "mapa.html#house=cp7" },
      { label: "📚 Prameny (ZDO & Aretin)", labelEn: "📚 Sources (ZDO & Aretin)", labelDe: "📚 Quellen (ZDO & Aretin)", href: "reference.html" }
    ]
  },
  {
    id: "news_2026_11_14_multipage",
    date: "2026-11-14",
    category: "feature",
    badge: "Web & Navigace",
    badgeEn: "Site & Navigation",
    badgeDe: "Web & Navigation",
    title: "Nová přehledná struktura webu, sekce Aktuality a katalog Reference",
    titleEn: "New Multi-Page Architecture, News & References Catalog",
    titleDe: "Neue mehrseitige Struktur, Aktuelles & Quellenkatalog",
    summary: "Rozsáhlý badatelský archiv byl rozdělen z jedné dlouhé stránky do specializovaných modulů (Příběh, Interaktivní mapa & Atlas, Obyvatelé se stránkováním tabulky, Demografie, Clustery & Grafy a Reference). Přibyl rozcestník s aktualitami a kompletní soupis archivních fondů, literatury a návod, jak projekt citovat.",
    summaryEn: "The archival portal has been reorganized from a single long page into dedicated modules (Story, Interactive Map & Atlas, Residents with table pagination, Demography, Clusters & Graphs, and References), adding project news and a full bibliography with citation templates.",
    summaryDe: "Das Archivportal wurde von einer langen Einzelseite in übersichtliche Fachseiten aufgeteilt (Ortschronik, Karte & Atlas, Einwohner mit Seitenumbruch, Demografie, Cluster & Graphen sowie Referenzen), ergänzt um Neuigkeiten und Zitiervorlagen.",
    links: [
      { label: "📚 Otevřít Reference", labelEn: "📚 Open References", labelDe: "📚 Referenzen öffnen", href: "reference.html" },
      { label: "👥 Rejstřík obyvatel", labelEn: "👥 Inhabitants Registry", labelDe: "👥 Einwohnerregister", href: "obyvatele.html" },
      { label: "🗺️ Mapa & Atlas (16)", labelEn: "🗺️ Map & Atlas (16)", labelDe: "🗺️ Karte & Atlas (16)", href: "mapa.html" }
    ]
  },
  {
    id: "news_2026_11_14_csu_2026",
    date: "2026-11-14",
    category: "analysis",
    badge: "Statistika ČSÚ",
    badgeEn: "CZSO Statistics",
    badgeDe: "ČSÚ-Statistik",
    title: "Doplněna oficiální časová řada ČSÚ (1869–2026) pro Dlouhomilov a Benkov",
    titleEn: "Added Official CZSO Population Time Series (1869–2026)",
    titleDe: "Offizielle ČSÚ-Zeitreihe (1869–2026) für Lomigsdorf & Benke ergänzt",
    summary: "Sekce Demografie byla rozšířena o oficiální statistickou řadu Českého statistického úřadu od prvního moderního sčítání v roce 1869 až po stav k 1. 1. 2026 (454 obyvatel v obci Dlouhomilov), včetně oddělených řad pro osadu Medelské a místní část Benkov i počtu domů.",
    summaryEn: "The Demography module now includes official Czech Statistical Office series from the 1869 census up to Jan 1, 2026 (454 inhabitants in Dlouhomilov municipality), tracking Medelské, Benkov, and total house counts.",
    summaryDe: "Der Bereich Demografie enthält nun offizielle Daten des Tschechischen Statistikamtes von 1869 bis 1. 1. 2026 (454 Einwohner in Dlouhomilov) inklusive Aufschlüsselung nach Medelské, Benkov und Häuserzahl.",
    links: [
      { label: "📊 Grafy ČSÚ 1869–2026", labelEn: "📊 CZSO Charts 1869–2026", labelDe: "📊 ČSÚ-Diagramme 1869–2026", href: "demografie.html#csu" }
    ]
  },
  {
    id: "news_2026_11_12_last_4_apts",
    date: "2026-11-12",
    category: "census",
    badge: "Sčítání 1921",
    badgeEn: "1921 Census",
    badgeDe: "Zählung 1921",
    title: "Dokončen přepis posledních 4 chybějících bytů ze sčítání lidu 1921",
    titleEn: "Completed Transcription of the Final 4 Missing 1921 Census Apartments",
    titleDe: "Transkription der letzten 4 fehlenden Wohnungen der Zählung 1921 abgeschlossen",
    summary: "Zpracováním bytů ve staveních Dlouhomilov čp. 63 (byt 2), čp. 74 (byt 2), čp. 78 (byt 2) a čp. 84 (byt 1) – celkem 15 osob – byl uzavřen systematický přepis dochovaných sčítacích archů ZAO Opava (inv. č. 1863, fasc. 3). Databáze nyní eviduje 157 stavení a 1 350 záznamů obyvatel z let 1857–1921.",
    summaryEn: "With apartments in houses No. 63, 74, 78, and 84 (15 residents) added, the transcription of surviving 1921 census sheets (ZAO Opava, inv. No. 1863, fasc. 3) is complete. The database now covers 157 homesteads and 1,350 census records (1857–1921).",
    summaryDe: "Mit der Erfassung der Wohnungen in den Häusern Nr. 63, 74, 78 und 84 (15 Personen) ist die Transkription der Volkszählungsbögen 1921 (ZAO Opava, Inv.-Nr. 1863, Fasz. 3) abgeschlossen. Die Datenbank umfasst nun 157 Anwesen und 1.350 Einträge.",
    links: [
      { label: "👥 Všech 1 350 záznamů", labelEn: "👥 All 1,350 Records", labelDe: "👥 Alle 1.350 Einträge", href: "obyvatele.html" },
      { label: "🏠 Stavení čp. 63", labelEn: "🏠 House No. 63", labelDe: "🏠 Haus Nr. 63", href: "mapa.html#house=cp63" }
    ]
  },
  {
    id: "news_2026_11_10_i18n",
    date: "2026-11-10",
    category: "feature",
    badge: "Lokalizace",
    badgeEn: "Localization",
    badgeDe: "Mehrsprachigkeit",
    title: "Plná podpora češtiny, angličtiny a němčiny (CZ / EN / DE)",
    titleEn: "Full Multilingual Support: Czech, English & German (CZ / EN / DE)",
    titleDe: "Vollständige Mehrsprachigkeit: Tschechisch, Englisch & Deutsch",
    summary: "Celý portál byl opatřen přepínačem jazyků v hlavičce včetně překladu kapitol příběhu, povolání, sociálních kategorií i dobových německých místních názvů (Lomigsdorf, Dreihofen, Benke) pro zahraniční badatele a potomky rodáků.",
    summaryEn: "Added a site-wide language switcher covering story chapters, occupations, social statuses, and historical German toponyms (Lomigsdorf, Dreihofen, Benke) for international genealogists.",
    summaryDe: "Das Portal verfügt nun über eine vollständige Übersetzung in CZ, EN und DE inklusive historischer Ortsnamen (Lomigsdorf, Dreihofen, Benke) und historischer Berufsbezeichnungen.",
    links: [
      { label: "📖 Příběh údolí", labelEn: "📖 Story of the Valley", labelDe: "📖 Ortschronik", href: "pribeh.html" }
    ]
  },
  {
    id: "news_2026_11_08_clusters",
    date: "2026-11-08",
    category: "feature",
    badge: "Genealogie & Graf",
    badgeEn: "Genealogy & Graph",
    badgeDe: "Genealogie & Graph",
    title: "Nasazena samostatná aplikace Clustery & Síť vztahů obyvatel",
    titleEn: "Deployed Person Clustering & Knowledge Graph App",
    titleDe: "Eigenständige Anwendung für Personen-Clustering & Beziehungsnetz",
    summary: "Spuštěn specializovaný modul cluster.html pro automatické i ruční propojování záznamů téže osoby (Record Linkage), K-Means shlukování domácností, ego-grafy rodinných a pracovních vazeb a export do JSON.",
    summaryEn: "Launched the dedicated cluster.html workbench for cross-census Record Linkage, K-Means household clustering, family/employment ego-graphs, and JSON state export.",
    summaryDe: "Start des Moduls cluster.html zur automatischen und manuellen Personenverknüpfung (Record Linkage), K-Means-Analyse, Ego-Graphen familiärer und beruflicher Bindungen sowie JSON-Export.",
    links: [
      { label: "🕸️ Otevřít Clustery & Grafy", labelEn: "🕸️ Open Clusters & Graphs", labelDe: "🕸️ Cluster & Graphen öffnen", href: "cluster.html" }
    ]
  },
  {
    id: "news_2026_11_08_demography",
    date: "2026-11-08",
    category: "analysis",
    badge: "Analýza dat",
    badgeEn: "Data Analysis",
    badgeDe: "Datenanalyse",
    title: "Interaktivní demografie, migrace rodišť a majetkové vrstvy (1857–1921)",
    titleEn: "Interactive Demography, Birthplace Migration & Wealth Layers",
    titleDe: "Interaktive Demografie, Herkunftsstatistik & Sozialschichten",
    summary: "Zprovozněny dynamické analýzy počítané přímo nad daty stavení: věkové histogramy po dekádách (1857–1921), vzdálenostní prstence původu obyvatel a vliv textilních bělidel firmy Oberleithner na strukturu domácností.",
    summaryEn: "Released live analytics computed directly over the census dataset: decade-by-decade age histograms, migration distance rings, and socio-economic stratification around the Oberleithner linen bleacheries.",
    summaryDe: "Neue Live-Auswertungen des Datensatzes: Altersverteilungen nach Jahrzehnten, Entfernungsringe der Herkunftsorte sowie Sozialstruktur rund um die Bleichereien Oberleithner.",
    links: [
      { label: "🎂 Věkové histogramy", labelEn: "🎂 Age Histograms", labelDe: "🎂 Altersverteilung", href: "demografie.html#histogram" },
      { label: "🧭 Původ & migrace", labelEn: "🧭 Birthplaces & Migration", labelDe: "🧭 Herkunft & Migration", href: "demografie.html#origins" },
      { label: "⚖️ Majetková struktura", labelEn: "⚖️ Social Stratification", labelDe: "⚖️ Besitzstruktur", href: "demografie.html#wealth" }
    ]
  },
  {
    id: "news_2026_11_08_medelske",
    date: "2026-11-08",
    category: "census",
    badge: "Osada Medelské",
    badgeEn: "Medelské Hamlet",
    badgeDe: "Ortsteil Dreihofen",
    title: "Zpracován dědičný dvůr Medelské (čp. 1–4 / stavení 36–43)",
    titleEn: "Completed Transcription of the Medelské Estates (No. 1–4 / 36–43)",
    titleDe: "Erschließung des Freiguts Medelské / Dreihofen (Nr. 1–4 / 36–43)",
    summary: "Do databáze byly zapsány všechny dochované byty v osadě Medelské včetně rozsáhlého dědičného dvora čp. 1 a čp. 3 (u Sládků) s desítkami podnájemníků, zedníků, tesařů, slévačů dojíždějících do Postřelmova či Sudkova a textilních dělnic.",
    summaryEn: "Added all surviving households in Medelské (Dreihofen), including the large hereditary complex No. 1 and No. 3 with dozens of mason, foundry, and textile tenant families.",
    summaryDe: "Alle erhaltenen Wohnparteien der Ansiedlung Medelské (Dreihofen), darunter der große Erb- und Meierhof Nr. 1 sowie Nr. 3 mit zahlreichen Handwerker- und Textilarbeiterfamilien, sind erfasst.",
    links: [
      { label: "🏡 Medelské čp. 1", labelEn: "🏡 Medelské No. 1", labelDe: "🏡 Medelské Nr. 1", href: "mapa.html#house=medelske_cp1" },
      { label: "🏡 Medelské čp. 3", labelEn: "🏡 Medelské No. 3", labelDe: "🏡 Medelské Nr. 3", href: "mapa.html#house=medelske_cp3" }
    ]
  },
  {
    id: "news_2026_11_08_georef_comic",
    date: "2026-11-08",
    category: "analysis",
    badge: "Kartografie & Kronika",
    badgeEn: "Cartography & Comic",
    badgeDe: "Kartografie & Chronik",
    title: "Kalibrační engine historických map (GCP) & 12panelová komiksová kronika",
    titleEn: "Historical Map Calibration Engine (GCP) & 12-Panel Comic Chronicle",
    titleDe: "Georeferenzierungs-Engine (GCP) & 12-teilige Comic-Chronik",
    summary: "Do mapového prohlížeče přibyl režim Side-by-Side porovnání a bodová kalibrace (GCP) nad stabilním katastrem z roku 1834. Zároveň byla doplněna čtečka 10 kapitol příběhu údolí a tisknutelná 12panelová komiksová kronika.",
    summaryEn: "Added Side-by-Side map comparison and interactive Ground Control Point (GCP) calibration over the 1834 Stable Cadastre, alongside the 10-chapter valley reader and printable 12-panel comic.",
    summaryDe: "Seiten-an-Seiten-Kartenvergleich und Passpunktkalibrierung (GCP) für den Stabilen Kataster 1834 sowie ein Lesemodus für 10 Kapitel und die druckbare 12-Felder-Chronik wurden ergänzt.",
    links: [
      { label: "📜 Atlas historických map", labelEn: "📜 Historical Map Atlas", labelDe: "📜 Historischer Kartenatlas", href: "mapa.html#atlas" },
      { label: "🎨 Komiksová kronika", labelEn: "🎨 Comic Chronicle", labelDe: "🎨 Comic-Chronik", href: "pribeh.html#comic" }
    ]
  },
  {
    id: "news_2026_11_07_dlouhomilov_core",
    date: "2026-11-07",
    category: "census",
    badge: "Sčítání 1921",
    badgeDe: "Zählung 1921",
    badgeEn: "1921 Census",
    title: "Přepis historického jádra Dlouhomilova (čp. 14–30) včetně památkového gruntu čp. 24",
    titleEn: "Transcribed Historic Core Homesteads (No. 14–30) Including Heritage Farmstead No. 24",
    titleDe: "Transkription der Stammhöfe in Lomigsdorf (Nr. 14–30) inkl. Denkmalsgut Nr. 24",
    summary: "Systematický přepis sčítacích archů klíčových selských usedlostí horní a střední části obce (čp. 14–30), včetně památkově chráněného statku čp. 24 (ÚSKP 2350) a gruntů rodu Dvořáků na čp. 22 a čp. 29.",
    summaryEn: "Systematic transcription of the upper and central core farmsteads (No. 14–30), highlighting listed heritage farmstead No. 24 (ÚSKP 2350) and the Dvořák estates at No. 22 and No. 29.",
    summaryDe: "Systematische Erfassung der zentralen Bauernhöfe (Nr. 14–30), darunter des denkmalgeschützten Vierseithofs Nr. 24 (ÚSKP 2350) und der Höfe der Familie Dvořák (Nr. 22 & 29).",
    links: [
      { label: "🏛️ Památkový grunt čp. 24", labelEn: "🏛️ Listed Farmstead No. 24", labelDe: "🏛️ Denkmalsgut Nr. 24", href: "mapa.html#house=cp24" },
      { label: "👥 Hledat v rejstříku", labelEn: "👥 Search Registry", labelDe: "👥 Im Register suchen", href: "obyvatele.html" }
    ]
  }
];
