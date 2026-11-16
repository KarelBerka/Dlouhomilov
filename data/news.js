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
    id: "news_2026_11_16_scitani_1910_dlouhomilov_cp5_19",
    date: "2026-11-16",
    category: "census",
    badge: "Sčítání 1910 • Dlouhomilov čp. 5–19",
    badgeEn: "1910 Census • Dlouhomilov Nos. 5–19",
    badgeDe: "Zählung 1910 • Lomigsdorf Nr. 5–19",
    title: "Doplněno Sčítání lidu 1910 v jádru Dlouhomilova (čp. 5–19, +93 obyvatel) – rejstřík vzrostl na 2 382 záznamů",
    titleEn: "Added 1910 Census for Central Dlouhomilov (Nos. 5–19, +93 Residents) – Registry Reaches 2,382 Records",
    titleDe: "Volkszählung 1910 im Ortskern von Lomigsdorf (Nr. 5–19, +93 Einwohner) ergänzt – Register steigt auf 2.382 Einträge",
    summary: "Z doskenované úvodní části kartonu 436 (ZAO Opava, OÚ Zábřeh, NAD 1000, inv. č. 1765) bylo přepsáno a propojeno 12 obydlených domů v jádru Dlouhomilova (čp. 5, 6, 8, 9, 11–16, 18–19; +93 osob a 24 náhledů obou stran archů) včetně titulního archu čp. 17 (Antonín Kožoušek). Mezi nově zpracovanými domy jsou památková usedlost čp. 5 Karla Lukáše, grunt čp. 6 Jana Jílka, čp. 8 Isidora Braného, kostelník Antonín Šekl na čp. 9, stará škola čp. 12 sčítacího komisaře Josefa Mináře, grunt čp. 13 Františka Jílka se služebnou z Uherského Hradiště, čp. 15 Jana Skoumala a Matyldy Lipenské z Rejchartic i výměnkář Jan Vlček (*1834) na čp. 18. Současně byla odstraněna archivní duplicita starého průběžného číslování čp. 1–2 (šlo o archy osady Medelské čp. 1 a čp. 2 omylem přiřazené ke kostelu čp. 1 a faře čp. 2, jež r. 1910 nesla čp. 47) a doplněno geokódování zbývajících rodišť (Chválkovice, Kopřivná, Uherské Hradiště, Janovice, Vojtěchov). Ročník 1910 tak zahrnuje 1 156 osob ve 146 domech (769 Dlouhomilov + 112 Medelské + 275 Benkov).",
    summaryEn: "Transcribed and integrated 12 inhabited houses from the newly processed opening bundle of Box 436 (ZAO Opava, District Office Zábřeh, NAD 1000, inv. No. 1765) in central Dlouhomilov (Nos. 5, 6, 8, 9, 11–16, 18–19; +93 residents and 24 dual-sided sheet previews) alongside the title sheet for No. 17 (Antonín Kožoušek). Highlights include heritage homestead No. 5 (Karel Lukáš), No. 6 (Jan Jílek), No. 8 (Isidor Braný), sexton Antonín Šekl at No. 9, old schoolhouse No. 12 of census commissioner Josef Minář, No. 13 (František Jílek with a maid from Uherské Hradiště), No. 15 (Jan Skoumal & Matylda Lipenská from Rejchartice), and retired farmer Jan Vlček (*1834) at No. 18. Simultaneously resolved a historic numbering duplicate where serial Nos. 1–2 (actually Medelské Nos. 1–2) had been duplicated onto All Saints Church (No. 1) and the Rectory (listed under No. 47 in 1910), and geocoded the remaining birthplaces. The 1910 cohort now totals 1,156 residents across 146 houses, bringing the registry to 2,382 records.",
    summaryDe: "Aus dem neu bearbeiteten Anfangsteil des Kartons 436 (ZAO Troppau, Bezirksamt Hohenstadt, NAD 1000, Inv.-Nr. 1765) wurden 12 bewohnte Häuser im Ortskern von Lomigsdorf / Dlouhomilov transkribiert und verknüpft (Nr. 5, 6, 8, 9, 11–16, 18–19; +93 Einwohner und 24 doppelseitige Vorschauen) sowie das Titelblatt Nr. 17 (Antonín Kožoušek). Zu den Neuzugängen zählen der Denkmalhof Nr. 5 (Karel Lukáš), Nr. 6 (Jan Jílek), Nr. 8 (Isidor Braný), Mesner Antonín Šekl in Nr. 9, die alte Schule Nr. 12 des Zählkommissars Josef Minář, Nr. 13 (František Jílek mit Dienstmagd aus Ungarisch Hradisch), Nr. 15 (Jan Skoumal & Matylda Lipenská aus Reigersdorf/Rejchartice) sowie Ausgedinger Jan Vlček (*1834) in Nr. 18. Zugleich wurde eine historische Nummerierungs-Dublette bereinigt (lfd. Nr. 1–2 gehörten zu Dreihofen/Medelské Nr. 1–2, nicht zu Kirche Nr. 1 bzw. Pfarrhaus Nr. 47) und alle verbliebenen Geburtsorte geokodiert. Der Jahrgang 1910 umfasst nun 1.156 Personen in 146 Häusern (Gesamtregister: 2.382 Einträge).",
    links: [
      { label: "👥 Dlouhomilov v roce 1910 (769 os.)", labelEn: "👥 Dlouhomilov in 1910 (769 res.)", labelDe: "👥 Lomigsdorf 1910 (769 Ew.)", href: "obyvatele.html#year=1910&settlement=dlouhomilov" },
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
