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
