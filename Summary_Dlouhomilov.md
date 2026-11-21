# Summary_Dlouhomilov.md

Aktualizovano: 2026-11-19

---

## PROJEKT

**Dlouhomilov - Interaktivni historicko-genealogicka mapa a databaze obyvatel obce**

Staticka webova aplikace (Leaflet.js + Tailwind CSS) nasazena pres GitHub Pages.
- **Live web:** https://karelberka.github.io/Dlouhomilov/
- **Repozitar:** https://github.com/KarelBerka/Dlouhomilov.git (vetev `main`)
- **Lokalni workspace:** e:\Dropbox\Antigravity\Dlouhomilov
- **Licence:** Creative Commons BY-NC-SA 4.0

---

## HOTOVO

### Aktualizace 2026-11-21 (Kompletní Sčítání lidu 1880 pro celý Dlouhomilov, 156 skenů, Record Linkage nad 5 258 záznamy & kalibrace komiksu)
- **Kompletní Sčítání lidu 1880 pro celý Dlouhomilov (`ZAO Opava, OÚ Zábřeh, NAD 1000, inv. č. 1476, karton 330`, `228` snímků):**
  - Přepsány všechny zbývající domy (`72` cílových domů + `3` chráněná čp. `7, 10, 22` = všech **75 domů** Dlouhomilova, vč. neobydlených/zbořených čp. `19 Demolirt`, `29 Neobydleno`, `81 Demolirt`): přesně **543 přítomných / 576 zapsaných obyvatel** (= **100 % shoda s ČSÚ**), plus **156 nových webových náhledů (`<=1400px`)** v `assets/archives/cp*/1880_*.jpg` a součtových archů `assets/archives/medelske_cp1/1880_sammelbogen_01..02.jpg`.
  - Spolu s dříve přepsanou osadou **Medelské** (`21` domů vč. čp. `3 Demolirt`, `156` přít. / `159` zaps.) je **celý katastr Dlouhomilova a Medelského v roce 1880 100% kompletní**: **96 domů (`92` obydlených), `143` bytů, `699` přítomných / `735` zapsaných obyvatel** (`292` archivních snímků).
- **Rejstřík (`5 258` záznamů), Record Linkage & graf znalostí (`data/census_registry.js`, `data/census_links.js`, `data/cluster_dataset.js`):**
  - `censusRegistryData` vzrostl na **`5 258` operátních záznamů** (`+546` z r. 1880).
  - Přepočtem v `build_clusters.js` vzrostlo propojení napříč sčítáními na **`1 312` sjednocených osob** (`+116`), **`3 539` propojených záznamů** (`+423`, z toho `602` osob ve `3+` sčítáních a `513` stěhování mezi čp., `234` kandidátů `prob`), **`3 275` osobních clusterů** (`1 365` vícezáznamových `doc`), **`1 542` přechodů / `1 967` migračních toků** na časové ose a znalostní graf vzrostl na **`3 894` uzlů a `19 465` hran** (`9 015` příbuzenských a domovních).
  - Doplněno geokódování všech nových rodišť z r. 1880 v `app.js` (*Felwies* = Rejvíz, *Zimmischl* = Třemešek, *Spitzenthal* = Špičky, *Beňov, Chropyně, Choceň, Bartoňov, Palonín, Loučky, Starý Jičín, Pivonín*), aktualizována `demografie.html` / `censusLivelihoodAtlas[1880]`, `linkedCensusIds` v `data/people.js`, `data/references.js`, `data/guide.js`, `data/i18n.js` i komiksové perspektivy (`panel_01, 06, 09`, `panel_census_1857..1921`).

### Aktualizace 2026-11-20 (Časová osa stěhování 1850–1925, 7 komiksových obrazů obživy, přepočet demografie 1857–1921 & Práce ke stažení)
- **7 komiksových obrazů obživy pro sčítání 1857–1921 (`data/comic.js`, `pribeh.html#comic-census`, `demografie.html#histogram`):**
  - Komiksová kronika rozšířena o listy **VI. (`page-5`, 1857–1890)** a **VII. (`page-6`, 1900–1921)** se 7 novými ilustracemi `assets/comic/panel_census_1857.jpg`–`panel_census_1921.jpg` (celkem **21 panelů na 7 stranách**) a strukturovaným objektem `censusLivelihoodAtlas` (`renderDemographyLivelihoodComic()` v `app.js`), jenž přímo v `demografie.html` propojuje věkové kohorty s profesní strukturou a konkrétními obyvateli z archů.
- **Interaktivní časová osa přechodů mezi staveními & migrace zvenčí `1850–1925` (`cluster.html#tab=timeline`, `cluster_app.js`, `build_clusters.js`, `data/cluster_dataset.js`):**
  - Přidána nová hlavní karta `#view-timeline` s interaktivním HTML5 plátnem (`<canvas id="timeline-canvas">`) nad **`1 414` přechody a `1 780` migračními toky** v **`3 042` osobních clusterech** (`3 645` uzlů, `17 724` hran), vizuálním rozlišením stěhování mezi čp. a příchodů zvenčí, výpočtem dominantních rodů v `houseStats`, filtry osad/typů/řazení a novým modalem **Obyvatelé stavení** (`#house-inhabitants-modal`).
- **Nová sekce „📥 Práce ke stažení“ & rozšířené Reference (`reference.html#prace`, `data/references.js`, `app.js`):**
  - Přidána filtrovatelná záložka `#prace-ke-stazeni` (`renderDownloadableWorksSection()`), jež přehledně sdružuje **24 VŠ prací, monografií v NDK/Krameriu a volně dostupných PDF studií ve 3 skupinách** (6 na `theses.cz`/`is.muni.cz`, 8 digitalizovaných svazků v NDK/Krameriu vč. Knöbla 1931 a Nasadila 1925–1931, 10 plně stažených PDF studií z UPOL/UK/VMO) plus přehled prezenčních prací.
- **Kompletní přepočet demografických přehledů, věkových pyramid a kohort pro všech 7 sčítacích ročníků:**
  - Aktuální plný fond **5 258 operátních záznamů** (`5 249` se známým věkem) napříč **167 evidovanými staveními** a **345 byty** v celém údolí (Dlouhomilov, Medelské, Benkov):
    - **1857:** 4 stavení, 4 byty, **24 obyvatel** (průměrný věk 24,9 let, medián 24 let, děti 0–14: 29,2 %, senioři 60+: 8,3 %). Nejstarší Petr Dvořák (*1793, 64 let, čp. 22).
    - **1869:** 4 stavení, 4 byty, **56 obyvatel** (průměr 24,5 let, medián 23 let, děti 0–14: 35,7 %, senioři 60+: 3,6 %). Nejstarší Petr Dvořák st. (*1793, 76 let, čp. 22).
    - **1880:** 92 obydlených z 96 domů (kompletní Dlouhomilov + Medelské), 143 bytů, **735 zaps. / 699 přít. obyvatel** (průměr 27,3 let, medián 23 let, děti 0–14: 33,1 %, senioři 60+: 7,5 %). Nejstarší Jan Poisel (*1782, 98 let, čp. 54).
    - **1890:** 143 stavení (kompletní obec), 191 bytů, **1 095 obyvatel** (průměr 27,7 let, medián 24 let, děti 0–14: 32,6 %, senioři 60+: 9,9 %). Nejstarší Jan Hejgr (*1793, 97 let, čp. 14).
    - **1900:** 149 stavení (kompletní obec), 212 bytů, **1 140 obyvatel** (průměr 28,3 let, medián 23 let, děti 0–14: 33,6 %, senioři 60+: 10,5 %). Nejstarší Ignác Dvořák (*1814, 86 let, čp. 9).
    - **1910:** 146 stavení (historické populační maximum), 198 bytů, **1 177 obyvatel** (1 168 s věkem; průměr 27,8 let, medián 23 let, děti 0–14: 32,3 %, senioři 60+: 9,3 %). Nejstarší Marie Körnerová (*1815, 95 let, čp. 71).
    - **1921:** 155 stavení (1. sčítání ČSR), 210 bytů, **1 031 obyvatel** (průměr 32,1 let, medián 28 let, děti 0–14: 28,8 %, senioři 60+: 15,3 %). Nejstarší Kateřina Hrubá (*1828, 93 let, čp. 20).
    - **Všechna sčítání (all):** 167 stavení, 345 bytů, **5 249 obyvatel s věkem / 5 258 celkem** (průměr 28,6 let, medián 24 let, děti 32,1 %, senioři 10,6 %).
- **Nová interaktivní srovnávací tabulka v aplikaci (`demografie.html` & `app.js`):**
  - Implementována funkce `renderDemographyYearsComparisonTable()`, která generuje přehlednou responzivní srovnávací tabulku všech ročníků s indikací aktivního roku a možností jedním kliknutím přepnout věkový histogram i metriky.
  - V `renderDemographyAgeHistogram()` doplněny specifické mikrohistorické glosy (`insightsContainer`) pro každý jednotlivý sčítací rok.
  - V `renderDemographyKPIs()` zaktualizovány souhrnné karty pro zohlednění plného fondu 4 712 operátních záznamů a vývoje věkového průměru (24,5 → 32,1 let).
  - V artefaktu `analyza_domacnosti_dlouhomilov.md` kompletně přepsány srovnávací demografické tabulky a Mermaid grafy.

### Aktualizace 2026-11-19 (Kompletní Sčítání lidu 1890 pro Dlouhomilov & Medelské, 100% revize Sčítání 1900 & 1910 dle Sammelbogen a Record Linkage 4 262 záznamů)
- **Kompletní Sčítání lidu 1890 pro Dlouhomilov a osadu Medelské (`ZAO Opava, OÚ Zábřeh, NAD 1000, inv. č. 1560, karton 356`, `292` sn.):** Přepsáno a propojeno všech **100 domů** (`78` v jádru Dlouhomilova + `21` v osadě **Medelské** / historickém obvodu, vč. čp. 27a/27b a neobydleného čp.) s **806 zapsanými záznamy** (`641` Dlouhomilov + `165` Medelské; `772` přítomných osob dle součtových archů) a **`208` novými webovými náhledy `1890_*.jpg`**.
- **100% křížová revize Sčítání 1900 & 1910 dle originálního sběrného archu (*Sammelbogen* z 17. 1. 1901):** Doplněno vypadlé `čp. 12` (rodiny Josefa a Františka Minářových), dočteny rubové a pokračovací archy u `čp. 7, 48, 50, 64, 67, 74, 80, 87, 90, 91, 93` a opraveno přiřazení `čp. 86` a `čp. 96` (ročník `1900` má plných **`1 138` zapsaných osob ve `149` domech** celého údolí = `715` Dlouhomilov + `151` Medelské + `272` Benkov); v ročníku `1910` deduplikováno a zpřesněno `čp. 110`.
- **Rejstřík (`4 262` záznamů), Record Linkage & graf znalostí (`data/census_links.js`, `data/cluster_dataset.js`):** Rejstřík rozšířen o dalších `813` záznamů na **`4 262` osobních zápisů**, sjednoceno **`970` propojených osob** (`2 361` záznamů, `253` návrhů `prob` v `census_links.js`), vygenerováno **`3 158` osobních clusterů** (`1 028` vícezáznamových) a znalostní graf narostl na **`3 783` uzlů a `17 132` hran**. Doplněno geokódování všech nových rodišť z r. 1890 a 1900 (`app.js`, `0` nerozpoznaných záznamů) a aktualizován `.gitignore`.

### Aktualizace 2026-11-18 (Gruntovní a pozemkové knihy Dlouhomilova 1596–1881 – 4 svazky ZAO Olomouc, předjosefínské číslování a 23 archivních skenů)
- **Systematické zmapování 4 digitalizovaných gruntovních knih ([gruntovni_knihy_dlouhomilov_1596_1881.md](docs/gruntovni_knihy_dlouhomilov_1596_1881.md)):** Vytěženy svazky fondu *Velkostatek Zábřeh* v ZAO Olomouc (`NAD 1549, pom. č. 370`): `inv. č. 164` (`sign. 428, (1596)1635–1767`), `inv. č. 207` (`sign. 20000, 1768–1881`), chalupnická `inv. č. 225` (`sign. 20118, Auen Häusel Grundt Buch 1768–1880`) a tištěný rejstřík `inv. č. 275` (`sign. 20001, 1827–1881`).
- **Klíčové objevy, oprava datace a předjosefínské číslování:** Opravena dřívější datace nejstarší knihy `inv. č. 164` (končí r. **1767**, pokračování do r. 1881 leží v `inv. č. 207` a `225`), přepsán lichtenštejnský obnovovací dekret z r. **1635** (`sn. 3`) a rozuzleno číslování před r. 1770 (`čp. 7` = staré `č. 1`, `čp. 24` = staré `č. 3`, `čp. 29` = staré `č. 12` na `fol. 194–215 / sn. 191–212`).
- **Archivní skeny a integrace do portálu:** Získáno **23 optimalizovaných skenů** v `assets/archives/gruntovnice/` a zapracovány nové přepisy do časových os i dokumentů domů **`čp. 7, 11, 21, 22, 24, 29, 41, 46 a 49`** v `data/houses.js`, do životopisů rodu Dvořáků (`data/people.js`), katalogu `data/references.js`, průvodců (`data/guide.js`, `docs/badatelsky_pruvodce.md`), trojjazyčných dat `data/i18n.js` a aktualit `data/news.js`.

### Aktualizace 2026-11-17 (Kompletní Sčítání lidu 1900 pro Dlouhomilov, Record Linkage v2, demografická křivka 1275–2026 & 14panelová komiksová kronika s mapou kolonizace: 3 449 záznamů)
- **Kompletní Sčítání lidu 1900 pro Dlouhomilov (`ZAO Opava, OÚ Zábřeh, NAD 1000, inv. č. 1664, kartony 396–397`):** Dokončen přepis a napojení všech **85 obydlených domů jádra Dlouhomilova (`660` os.)** i **21 domů osady Medelské (`151` os., vč. správně přiřazeného čp. 1 rodiny Jana Mináře st. \*1847)** – dohromady **106 obydlených domů a 811 obyvatel** v politické obci Dlouhomilov (shoda s úředním sčítáním ČSÚ). Spolu se samostatným Benkovem (`43` domů, `272` os.) dosáhl ročník **1900** celkem **1 083 obyvatel** ve **149 obydlených domech** a celý rejstřík `data/census_registry.js` vzrostl na **3 449 záznamů** (`208` nových webových náhledů archů v `assets/archives/`). Opravou prošel i zápis faráře P. Františka Kužely (*Adam Chlumecký*) na `čp. 47` a doplněno bylo geokódování všech `31` nových podob rodišť (`MUNICIPALITY_COORDINATES` & `normalizePlaceName` v `app.js`).
- **Record Linkage v2 & Knowledge Graph (`data/census_links.js`, `data/cluster_dataset.js`, `cluster.html`, `obyvatele.html`):** Vygenerován nový index vazeb napříč ročníky `1857–1921` (`2 710` osobních clusterů, z toho `798` vícezáznamových `doc` a `256` pravděpodobnostních `prob`, resp. `735` propojených osob / `1 709` záznamů v `census_links.js`, a heterogenní graf znalostí s `3 291` uzly a `14 247` hranami).
- **Rekonstrukce dlouhodobé demografie `1275–2026` (`demografie.html`, `docs/demografie_csu_1869_2026.md`):** Zapracována 750letá vývojová křivka počtu domů a obyvatel od středověké lokace (`1275–1300`) přes urbář `1585`, lánové rejstříky `1677`, tereziánský katastr `1749/1756`, Josefínský katastr, Stabilní katastr `1834` až po řadu ČSÚ `1869–2026`.
- **Rozšíření komiksové kroniky (`data/story.js`, `data/comic.js`, `pribeh.html`, `data/i18n.js`):** Kapitola I. doplněna o dvojitou ilustraci s **komiksovou mapou kolonizace `1266–1356`** (`assets/comic/story_kolonizace_mapa.jpg`) a komiksová kronika rozšířena na **5 listů (`I.–V.`) / 14 panelů (`1269–1949`)**.

### Aktualizace 2026-11-16 (Sčítání lidu 1900 – Benkov & osada Medelské kompletní: 63 domů, 414 os. + pokračovací archy 1910 & ilustrace Kapitoly I: 2 817 záznamů)
- **Dokončeno Sčítání lidu 1900 pro samostatnou obec Benkov (`NAD 999, inv. č. 1010, karton 326`, 120 sn.):** Přepsáno všech **43 obydlených domů** (`benkov_cp1`–`19`, `21`–`44`) a **272 obyvatel** (`261` s obcovací řečí německou, `11` českou) vč. domácích tkalců lnu, železničářů a přistěhovalců z Vídně, Mödlingu a Vídeňského Nového Města (`benkov_cp20` a `45` v roce 1900 neobydleny / nezachyceny).
- **Dokončeno Sčítání lidu 1900 pro sčítací obvod osady Medelské (`NAD 1000, inv. č. 1664, karton 397`, 57 sn.):** Přepsáno všech **20 domů** historického číslování (`čp. 2` přesunuto z `cp2` na `medelske_cp2`, `čp. 31–42` založeny jako nové karty a `čp. 43, 51, 54, 60, 62, 75, 76`) se **142 obyvateli**, přičemž všechny skeny (`sourceArchives`, vč. 4 stran u `cp51`), roky narození, národnost i strukturovaný chov zvířectva (`livestock`) byly znormalizovány. Spolu s dřívějšími přepisy (`37` os. na `cp7`, `cp10`, `cp22`, `cp29`) má ročník **1900** celkem **451 záznamů**.
- **Technická stabilizace portálu (`2 817` záznamů):** Rozšířeno `build_registry.js` i `app.js` (`normalizeHousesData()`, podpora německých socioekonomických kategorií, oprava `map.setView` proti `null` souřadnicím u `cp31`–`cp42` a `benkov_cp18`–`45`, osadní filtr `isMedelskeRegistryRecord` pro `settlement:medelske` v r. 1900 a geokódování všech českých i německých toponym r. 1900). Součástí této vlny jsou i pokračovací archy 1910 (`cp4/1910_03.jpg`, `cp8/1910_03.jpg`) a nová ilustrace Kapitoly I (`assets/comic/story_kap_00.jpg`).

### Aktualizace 2026-11-16 (Doplnění Sčítání lidu 1910 v jádru Dlouhomilova čp. 4–19 & deduplikace čp. 1–2: 2 403 záznamů)
- **Zpracována další část kartonu 436 (`ZAO Opava, OÚ Zábřeh, NAD 1000, inv. č. 1765`, `1910`):** Přepsáno a integrováno **12 nově zpracovaných obydlených domů** historického jádra Dlouhomilova (`cp5`, `cp6`, `cp8`, `cp9`, `cp11`–`cp16`, `cp18`–`cp19`), titulní arch `cp17` (*Antonín Kožoušek*) a **pokračovací 2. archy** pro `čp. 4` (Byt 2–3: rodiny Františka a Josefa Vénosových a Teresie Fišarové, `+9` osob, celkem `18` přítomných + `1` nepřítomný) a `čp. 8` (Byt 3–4: rodiny Petra Dvořáka a Isidora Krestýna `*1829`, `+12` osob) – celkem **`+114` obyvatel** a **26 webových náhledů** (mj. památková usedlost `čp. 5` Karla Lukáše, grunt `čp. 6` Jana Jílka, `čp. 8` Isidora Braného a sousedních bytů, kostelník Antonín Šekl na `čp. 9`, stará škola `čp. 12` sčítacího komisaře Josefa Mináře, `čp. 13` Františka Jílka se služebnou z Uherského Hradiště, `čp. 15` Jana Skoumala & Matyldy Lipenské z Rejchartic, výměnkář Jan Vlček `*1834` na `čp. 18`).
- **Vyřešena duplicita průběžného číslování `čp. 1–2`, sjednocena evidence (`2 403` záznamů) & upravena ilustrace Kapitoly I:** Odstraněno mylné zdvojení záznamů osady **Medelské** `čp. 1` (*Jan Minář ml.*) a `čp. 2` (*Alois Nejedlý*) z karet kostela `cp1` a fary `cp2` (fara nesla `čp. 47`), doplněno paleografické čtení rodišť (`Dolní Olešná` u `cp5`, `Rejchartice` u `cp15`), do `app.js` přidáno geokódování zbývajících 5 obcí (`Chválkovice`, `Kopřivná`, `Uherské Hradiště`, `Janovice`, `Vojtěchov`). Ročník 1910 nyní čítá **1 177 obyvatel** ve **146 domech** (`790` Dlouhomilov / 96 domů + `112` Medelské / 5 domů + `275` Benkov / 45 domů) a `censusRegistryData` vzrostl na **2 403 záznamů**. Současně byla aktualizována úvodní komiksová ilustrace `assets/comic/story_kap_00.jpg` (udělení lokační listiny na Olomouckém hradě a kolonizační výprava z Hané) včetně CZ/EN/DE popisků.

### Aktualizace 2026-11-16 (Původ zakladatele Dlúhomila z Hané, kolonizátoři z r. 1269 a kompletní regestář 32 vkladů ZDO I–X 1356–1447)
- **Jazykovědná (onomastická a historicko-dialektologická) a diplomatická analýza (`docs/puvod_dluhomila_a_zdo_1356_1447.md`):**
  - Dvoučlenné staročeské jméno **`Dlúhomil`** (`*Dl̥gomilъ`, *„dlouho/trvale milý“*) prokázáno jako výlučné šlechticko-zemanské jméno 12.–14. století (`0` poddanských nositelů v `CDM I–IX` a `RBM II–IV`). Hláskový vývoj **`Dlúhomilov` → hanácké `Dlóhomilov` → stažené `Dlómilov` → raně novověké německé `Lomigsdorf`** vylučuje slezsko-polský i německý lokační původ a dokládá středomoravské (hanácké) nářečí; střídání tvarů *dvuor Dlúhomiluov / za dvuor v Dluhomile* potvrzuje jako jádro vsi svobodný zemanský dvůr zakladatele (lokace **cca 1275–1300**, život Dlúhomila **cca 1240/1265 – 1295/1320**).
  - Křížovou verifikací listin `RBM II, č. 556` (1267) a `č. 1466` (1289) vyloučena homonymní stopa *Dluhomila z Veselí* (jihočeské Veselí nad Lužnicí). Naopak olomoucká listina z r. **1269** (`CDM IV, s. 36 / RBM II, č. 672`) a mírovské privilegium z 26. 5. 1266 (`RBM II, č. 517`) zachycují pohromadě kolonizátory našeho podhůří z **jižní Hané**: **Všebora a Hrabiše I. z Úsova** z rodu ze Švábenic (erb rozsoch; srov. *Hrabišín*), bratrance **Viléma z Náměště a Kojatu z Drnovic** (srov. *Kojišov = Kolšov*), královského lovčího **Benedu z Dubicka se synem Vilémem** (stavitele hanáckých *Otaslavic*, patrony fary v *Dubicku* 1297, kam Dlouhomilov patřil do let 1720/1722, a předky stavitelů *Brníčka*) i **Kunu z Kunštátu** – přesně v jejich hanáckém zázemí (Ivanovice na Hané, Soběbřichy, Olomouc) se jméno *Dlúhomil* dědilo.
  - **Hydrografie a příčný směr kolonizace:** Potok Loučka teče z Hrabišína přes Dlouhomilov a Sluhoňov/Brníčko k ústí u **Lesnice** (`ZDO I, č. 483`), kdežto **Kolšov** leží západně za hřbetem Bukovické hory; majetkový pás *Kolšov – Studénky – polovina Sluhoňova – polovina Dlouhomilova – Hrabišín* (`ZDO I, č. 493`; `ZDO X, č. 311, 449`) tak dokládá příčný postup kolonizace přes hřbet před stavbou hradu Brníčka.
  - **Kompletní excerpce všech 32 vkladů v `ZDO I–X` (`1356–1447`):** Rekonstruována linie **třetího dvorce se čtvrtlánem** (*Čáslava 1365 → Vilém 1368 → Ondřej a Hyluš → Ondřejek Chylec → Martin 1371 a Ctibor z Dlouhomilova 1378*, `ZDO I č. 859–860, 1028; II č. 23; III č. 435`) i prodej hlavního alodního dvora **Domanem ze Závořic** roku **1398** (`ZDO VI, č. 879`) **Pročkovi z Bouzova (Vildenberka)**.
- **Integrace do portálu (CZ / EN / DE):** Rozšířena Kapitola I. (`kap-0`, při plném zachování komiksové ilustrace `story_kap_00.jpg` i Sittova dvoufázového scelení Tunklů z `main`), přidána **Zajímavost #18** (`fact-18`), vložena úvodní aktualita v `data/news.js`, obohacena položka `ref_mzd_1356_1447` v `data/references.js` a rozcestníky v `data/guide.js`, `docs/badatelsky_pruvodce.md`, `docs/pribeh_dlouhomilova.md`, `data/i18n.js`, `index.html`, `pribeh.html` a `README.md`.

### Aktualizace 2026-11-16 (Rešerše 15 kvalifikačních prací, církevních fondů a dějin 20. století)
- **Systematická rešerše akademických repozitářů a regionální literatury (`docs/kvalifikacni_prace_a_literatura.md`):** Vytěženo **15 otevřených VŠ prací** z UPOL Olomouc (`library.upol.cz`) a UK Praha (`dspace.cuni.cz`), **3 recenzované články** (*Š. Kohout 2009*, *S. Balík 2010*, *J. Lukáč 2017*), *Bibliografie okresu Šumperk* (2002 v Kramerius MZK, pol. 4540–4555), historie farnosti Postřelmov a svědectví *Paměti národa*.
- **Hlubší historie a nové prameny na webu:**
  - Katalog `data/references.js` rozšířen o odbornou studii Š. Kohouta (2009), korpus 15 VŠ prací a nově lokalizované církevní fondy v ZAO Olomouc (*Arcibiskupská konzistoř Olomouc* `sign. E7, G1, G2`, *Arcibiskupství Olomouc* `inv. č. 2740, kt. 1219` s vizitací 1897 a soupisem kaplí i farní knihovny) a SOkA Šumperk (*Pamětní kniha farnosti dlouhoveské 1899 [1356]–1986*, `ONV Šumperk kt. 679, 682, K 35`, `ONV Zábřeh kt. 302–307`) – celkem **32 položek**.
  - Rozšířeny karty **kostela Všech svatých (`cp1`)** (64 800 cihel na stavbu r. 1707, oltáře 1885/1900, rekvizice 3 zvonů a 21 varhanních píšťal 1916–1918, 7 kněží-rodáků vč. P. Aloise Dvořáka) a **fary (`cp2`)** (24 m studna ve skále, kněz-spisovatel **P. František Kužela / Adam Chlumecký 1891–1907**, *Spolek sv. Rocha* 1897, blahopřejný list **Émila Zoly**, statečný **P. František Reichel 1934–1964** & průvod Božího Těla 1959/1968, **Mons. Antonín Pospíšil 1979–1980**).
  - Doplněny kapitoly **I., II. a XI.** v `data/story.js` a `docs/pribeh_dlouhomilova.md` (Sittova analýza dvou kroků tunklovského scelení 1436/1446–1447 a kritika `trzy lany w olessnem` 1510, *Sokol Dlouhomilov* 1907–1938, postup Rudé armády 7. 5. 1945 přes Strupšín a Brníčko, krize JZD 1952–1953, dialektologický bod **ČJA č. 647 Dlouhomilov**), přidána **Zajímavost #17** (`fact-17`), opravena typová hlavička `ref_mzd_1356_1447`, aktualizovány `data/guide.js`, `data/news.js`, `data/i18n.js` (CZ/EN/DE), `README.md`, `index.html` a `pribeh.html`.

### Aktualizace 2026-11-16 (Benkov 1921 – všech 45 sběrných archů domovních, 82 Zoomify odkazů & příprava Benkova 1900)
- **Benkov 1921 kompletně revidován (`OÚ Šumperk – I, NAD 999, inv. č. 1163, fascikl 2`, `219/219` snímků v `scitani_1921_benkov/`):** Doplněno všech **45 webových náhledů sběrných archů domovních** (`assets/archives/benkov_cp1..45/benkov_cp*_1921_domovni.jpg`) a **82 přímých Zoomify odkazů** na originály ZAO Opava (`originalUrl`).
- **Opravy cest a prohlížeče v portálu:** Opraveno všech 45 zpětných lomítek (`\` → `/`) v `data/houses.js` a rozšířeno `app.js` (`normalizeHousesData()`, `openHouseDetail()` dynamický název fondu `NAD 999` vs. `NAD 1000`, `documentsSection` s předáním `originalUrl` a `renderCensusYearDetail()` s tlačítky pro domovní sběrný arch i jednotlivé bytové archy a přímým Zoomify odkazem).
- **Benkov 1900 připraven k přepisu (`inv. č. 1010, karton 326`):** Kompletně staženo a zmapováno všech **120 snímků** do `.gitignore` složky `scitani_1900_benkov/` (`pracovni/benkov_1900_mapovani.json` & `pracovni/katalog_scitani_dlouhomilov_benkov.json`) a aktualizována sekce sčítání v `data/references.js`, `data/guide.js`, `docs/badatelsky_pruvodce.md` i `data/news.js`.

### Aktualizace 2026-11-16 (Sčítání lidu 1910 – Benkov & Dlouhomilov kompletní: 2 289 záznamů v rejstříku)
- **Dokončeno Sčítání lidu 1910 pro samostatnou obec Benkov (`benkov_cp1`–`benkov_cp45`, OÚ Šumperk – I, NAD 999, inv. č. 1086, karton 365, 122 sn.):** Kompletně přepsáno všech **45 domů** a **275 obyvatel** (`270` s obcovací řečí německou, `3` českou, `2` italskou – stavební/zemědělští dělníci *Constantin Jammarelli* a *Ascanio Piedra* z Barisciana a Paganicy u L'Aquily na čp. 13).
- **Kompletní ročník 1910 pro celé údolí (`1 063` obyvatel):** Dlouhomilov (`84` domů, `676` os., karton 436), osada Medelské (`5` čp., `112` os.) a Benkov (`45` domů, `275` os.). Spolu s ročníkem 1921 (`1 031` os.) a výběrem 1857–1900 čítá `censusRegistryData` nyní **2 289 archivních záznamů** (`0` chybějících náhledů).
- **Integrace do webu:** Opraveny posunuté `linkedCensusIds` u `cp29` v `data/people.js` i `app.js`, přidány osadní filtry a deep-linky (`#year=1910&settlement=benkov`, rychlé filtry *Körner, Schön, Poisel*), geokódovány nově přibyvší lokality z r. 1910 v `MUNICIPALITY_COORDINATES`, aktualizován žebříček dálkové migrace, opravena provenience Benkova (`NAD 999 / OÚ Šumperk – I`) v `data/references.js` & `data/guide.js` a přidána aktualita do `data/news.js`.

### Aktualizace 2026-11-16 (Krok 3 – Nejstarší matriky okolních farností ZAO Opava: Dubicko 1650–1722, Rohle 1720–1786 & přechod k Zá II)
- **Zpřesnění farní příslušnosti (`ZAO Opava – pobočka Olomouc, NAD 165`):** Ověřením archivních svazků a originálních snímků potvrzeno, že Dlouhomilov, Medelské i Benkov nebyly v Dubicku u křtů až do r. 1762, nýbrž do **1720/1722** (`Dubicko Zá IV 2`, inv. č. 8377, vyčleněný oddíl `N 1695–1722` str. `948–1095`), odkud přešly do obnovené farnosti **Rohle** (`Zá VIII 1, 6, 10, 14, 15`). Po vzniku samostatné lokálie **Dlouhomilov (`Zá II 1–10`, 1785/1786)** pro Dlouhomilov s Medelským a obě Olešné zůstal **Benkov (*Benke*) nadále v Rohli až do roku 1932** (`Zá VIII 2–18`, inv. č. 11251).
- **Klíčové paleografické nálezy z originálů:**
  - `Dubicko Zá IV 1` (`inv. č. 8376`, sn. 160, `pag. 312–313`, `1653–1654`): sňatek `2. 11. 1653` přímo **`w Dlauhomilowie`**; **`Jan Sskůn [Schön] Rychtář z Benkowa`** (`22. 11. 1653` & `15. 2. 1654`) a rod *Pejzel*; dne **`27. 9. 1654`** sňatek *Giržjka [Jiříka] po n. Jakubowi [...] **`z Medelskýho`*** & *Angšky [Anežky] z Benkowa* za společného svědectví **`Pawel Dworžák z Dlauhomilowa a Hanß geho Syn`** — přímá filiace otec → syn před Lánovým rejstříkem 1657/1677 na čp. 29 (`60` m.); na sn. 100 (`pag. 195`, `9. 11. 1683`) marginálie `Z dlúhomilowa`.
  - `Rohle Zá VIII 14` (`sn. 5, D 1721–1770`) & `Zá VIII 1` (`sn. 207, pag. 405`): souvislá řada `30+` dlouhomilovských křtů rodu *Dworžak* (`1722–1770`, vč. `1735 fol. 163` a `1763 fol. 405`) a zásadní oprava otce **Pavla Dvořáka ml. (`* 9. 9. 1763`)**: nebyl synem Jiřího, ale **sedláka Pavla Dvořáka st. a Barbory** (*Paulus Dworžak rusticus Dlomilovio, Barbara*). Dále první záznamy po zavedení čp. (`1772` Benkov `sn. 313, Fol. 99`: *Antonius Schön*, rychtář *Joannes Poisl*; `1774–1775` Dlouhomilov `sn. 342, pag. 624–625`: `čp. 4, 27, 32` *Franciscus Gílek, Paulus Wlček*).
  - `Dlouhomilov Zá II 4` (`inv. č. 8362`, sn. 2, `pag. 1`, `1786–1787`): přepsáno všech 11 prvních sňatků nové lokálie (`2. 10. 1786 čp. 5 Johann Dworžak & Anna Maria Hartmännin`; `12. 2. 1787 čp. 7` bratr lokalisty *Joseph Schubert*; `20. 8. 1787 čp. 10`; `22. 10. 1787 čp. 29` *Franz Greißl*, svědek *Jakob Kořil [Kouřil]*).
- **Studie, náhledy a portál:** Sepsána studie `docs/matriky_dubicko_a_rohle_1650_1785.md`, vyexportovány 4 archivní náhledy (`1400 px`) v `assets/archives/zao_matriky_pred1786/`, doplněna **Zajímavost #16** (`fact-16`) v CZ/EN/DE, opraveny a rozšířeny profily `p_pavel_dvorak_1750` a `p_petr_dvorak_1793`, opraveno předání `directArchiveUrl` jako 5. argumentu `openArchiveViewer(...)` v `app.js`, obohaceny domy `cp29`, `cp22`, `cp5`, `cp7`, `cp10`, `medelske_cp3`, `benkov_cp5` a aktualizovány `data/references.js`, `data/guide.js`, `data/news.js`, `docs/`, `README.md`, `index.html` a `pribeh.html`.

### Aktualizace 2026-11-16 (Krok 2 – Olomoucké zemské desky po r. 1466 a půhonné knihy: Tunklové, Boskovicové, Žerotínové & svobodní dvořáci)
- **Knihy půhonné a nálezové (*Libri citationum* `KP I, IV/2, VI, VII` na `sources.cms.flu.cas.cz`):** Ověřeny doslovné žaloby o *dvuor Dluhomiluov* v letech **1463–1466** (`KP IV/2, č. 525, 543, 547, 866`: *Kateřina z Vildenberka* & ručitel *Výšek ze Stříteže* vs. *Jan Tunkl z Brníčka*), kontext r. **1407** (`KP I, č. 800`: 3 hř. platu v Dlúhomilově) i oba útěky z Dlouhomilova v r. **1492** (`KP VI`): *Jan rathaj Števík z Dlúhomilova* (`s. 294, č. 1775` — neoprávněné *odpuštění listem svým* od Znáty ze Zvole) a **pochop (= dráb) Duchek z Dlúhomilova** (`s. 324, č. 1962` — zběhl na **mlýn u Šilperka** pod Jana z Dalčic, *„a ta dědina i podnes pusta stojí“*).
- **Moravské zemské desky olomoucké (`MZA Brno, A 3 Stavovské rukopisy` v ARON & `MZD II`):** Ověřen vklad r. **1490** (`ZDO XIII, č. 84` — *ves Dlúhomilov, Medelské, Venkov ... se všemi rychtami zákupními* na *Jiříka Tunkla st.*), r. **1506** (`ZDO XVI, č. 241` — rybniční soustava), **1510** (`Kniha XVII`, ARON `sn. 10/32`, `fol. 10r`: *Jindřich Tunkl → Mikuláš ml. Trčka z Lípy*, *wes dluhomilow s kaplu, wes medelske, wes wenkow*) a **24. 6. 1513** (`sn. 22/32`, `fol. 21v`: *Mikuláš ml. Trčka → Ladislav z Boskovic*, *hrad Brniczko zborzenj*). Doloženo upřesnění posloupnosti **Kryštof → Ladislav Velen → Jan z Boskovic na Moravské Třebové a Zábřehu († 1. 8. 1589**, zadavatel **Urbáře 1585**, nikoli jeho bratranec Jan Šembera †1597) → sestra Kunka z Boskovic → Ladislav Velen ze Žerotína (`1589–1622`)** a osud *Medelského* jako **Tří lánů** (`1605–1657`) i zrod **svobodných dvořáků**.
- **Studie, náhledy a portál:** Sepsána studie `docs/zemske_desky_a_puhony_1466_1622.md`, vyexportovány 4 archivní náhledy v `assets/archives/mza_a3_zdo/`, doplněna **Zajímavost #15** (`fact-15`) v CZ/EN/DE, obohaceny časové osy `cp29`, `cp7` a `medelske_cp3`, aktualizovány `data/references.js`, `data/guide.js`, `data/news.js`, `app.js`, `docs/`, `README.md`, `index.html` a `pribeh.html`.

### Aktualizace 2026-11-16 (Krok 1 – MZA Brno: D 1 Lánové rejstříky 1657/1677, D 2 Rektifikační akta 1749/1756 a D 3 Dominikální fase 1750)
- **Úplná paleografická transkripce všech 27 usedlých hospodářů Dlouhomilova (1677) a 10 usedlých Benkova (`MZA Brno D 1, sign. 141, fol. 76r–79v`, ARON `d4a61780-da2e-4276-89f2-5d47d83230ba`):** Zachyceni všichni sedláci a domkaři včetně předchůdců z první vizitace **1656–1657** (*vor ...*; mj. *Ilia Zaoralný / Jíra Blahařek(?)* na rychtě `90` m., *Hanß Dvořák / Pavel Dvořák* `60` m., *Mikuláš Jílek / Jan Jílek* `40` m., *Tobias Schön / Georg Puchmann* v Benkově), **`830` měřic** orné půdy (`6` lánů `3 1/4` osm.) a **`0` poustek** (`Extract Lomigsdorff`).
- **Tereziánská rektifikace (`MZA D 2, sign. 141, Část 1 [1749]` a `Část 2 [17. 8. 1756]`) & Dominikální fase (`MZA D 3, sign. 172/1, 1750`):** Propojení všech `27` gruntů z r. 1677 na držitele r. 1749 (`40` položek; v r. 1756 `48` položek vč. obecní pastoušky), protokol *Ad Generalia* ze 17. 8. 1756 (*Befreytte Bauern* bez naturální roboty, předení příze pro trhy v Šumperku) a vysvětlení právního postavení **Medelského (*Dreihöfen*)** bez panského dvora (traťové doklady *bey Medelsker grundt*, *u Medla gruntes mihle*, *w Medelsky Strani*).
- **Studie, náhledy a portál:** Vytvořena studie `docs/lanove_rejstriky_a_rektifikace_1657_1756.md`, vyexportovány 4 archivní náhledy v `assets/archives/mza_d1_d2/`, doplněna **Zajímavost #14** (`fact-14`) v CZ/EN/DE, obohaceny časové osy `cp7`, `cp29`, `cp10`, `medelske_cp1`, `benkov_cp5` (s přímými odkazy do ARON v `app.js`), aktualizovány `data/references.js`, `data/news.js`, `docs/`, `README.md`, `index.html` a `pribeh.html`.

### Aktualizace 2026-11-14 (Pokračování archivního pátrání: Urbář 1585, Aretinova mapa 1623 AKP č. 81, matriky 1617+ a Benkov čp. 5)
- **Urbář panství Zábřeh 1585 (*URB00015585*, fond *Velkostatek Zábřeh, NAD 1549*):** Extrahováno všech **22 usedlíků v Dlouhomilově** (`str. 82–84`), **8 držitelů na 5 položkách se spoludržbami v Medelském** (`str. 80–81`) a **10 usedlíků v Benkově / Venkově** v čele s fojtem *Mikulášem* (`str. 47`) – prokázána předbělohorská česko-německá jazyková hranice i dlouhodobá kontinuita místních příjmení.
- **Aretinova mapa 1623 & předfarní matriky (1617–1786):** Doplněna archivní signatura `NAD 1549, inv. č. 831, mapa č. 1, AKP ČR č. 81`, rozměry (`137 × 98 cm`), měřítko (`1 : 20 800`), tunklovské rybníky a správná datace nejstarších matrik: **Dubicko** *Zá IV 1* od r. **1617** (`1617–1694`), **Zábřeh** *Zá I 1* od r. **1649** (mj. `1651 Pavel Dvořák` v Dlouhomilově, `1658 Martin Schön` v Benkově), **Brníčko** od r. **1653**, **Lesnice** od r. **1676/1688** a **Rohle** (`1720–1786`).
- **Gruntovní knihy a Lánové rejstříky (`inv. č. 164`, Benkov `1617–1879`, `MZA D 1` `1669–1671` & `1675–1677`):** Zrekonstruována 7generační posloupnost rodu **Schönů** v `benkov_cp5` (`1669–1946`), doplněny milníky `cp29`, `cp7`, `medelske_cp3`, sjednocena čísla ÚSKP napříč všemi datovými soubory (rychta čp. 7 = `51795/9-103`) a přidána **Zajímavost #13** (`fact-13`) včetně EN/DE lokalizace.

### Aktualizace 2026-11-14 (Výzkum lokátorů, Moravských zemských desek 1356–1447 a nová kapitola I.)
- **Primární archivní výzkum (*Moravské zemské desky – kraj olomoucký*, ed. Chlumecký 1856):** Ověřeny doslovné latinské zápisy z let **1356–1447** (`ZDO I, č. 482, 484, 493, 674, 742, 744, 859–860, 1028, 1124`; `ZDO IV, č. 543` z r. 1385 s nejstarší společnou zmínkou **Benkova a Medelského**; `ZDO X, č. 311, 566` z let 1437–1447 ke scelení vsi rodem Tunklů) a prameny k dědičné rychtě (**1602**, čp. 7), farnosti (**1510** kaple, **1585** filiálka Lesnice, **1767–1770** kostel Všech svatých, **1793** škola), **Aretinově mapě (1623)** a lánovému rejstříku (**1677** – 27 sedláků).
- **Kronika a data (`docs/pribeh_dlouhomilova.md`, `data/story.js`):** Přidána úvodní kapitola **I. (1300–1602: Lokátoři, vladykové z Dlouhomilova a zrod dědičné rychty)**, rozšířena kapitola **II.** (přečíslování stávajících kapitol na **II.–XI.** při zachování ID `kap-1`..`kap-10`), přidána Zajímavost **#12** (`fact-12`) a aktualizovány zdroje v `data/references.js`, časová osa čp. 7 v `data/houses.js`, `data/news.js`, `docs/badatelsky_pruvodce.md`, dynamické počty v `app.js` / HTML rozhraní i kompletní CZ/EN/DE překlady v `data/i18n.js`.

### Aktualizace 2026-11-08 (Završení interaktivní demografie a analýzy domácností: 155 obydlených domů, 242 bytů, 1 016 obyvatel)
- **Kompletní demografický přepočet a vizualizace sčítání lidu 1921 pro celou obec (Dlouhomilov, Medelské, Benkov):**
  - **Populace 1921:** 1 016 obyvatel žijících v 242 bytech / domácnostech napříč 155 obydlenými staveními (Dlouhomilov: 81 domů, 570 os., 127 bytů; Medelské: 29 domů, 235 os., 59 bytů; Benkov: 45 domů, 211 os., 56 bytů).
  - **Průměrný věk a věkové kohorty 1921:** Průměrný věk 32,1 roku, medián 28 let. Děti (0–14 let) 293 osob (28,8 %), produktivní věk (15–59 let) 567 osob (55,8 %), senioři (60+ let) 156 osob (15,4 %).
  - **Geografický původ (100% geokódováno 226 lokalit):** 73,2 % místních rodáků (744 osob v r. 1921), 11,2 % ze sousedství do 7,5 km, 11,4 % z širšího regionu do 18 km, 2,6 % z Moravy a Slezska (18–60 km), 1,6 % dálková migrace (> 60 km).
  - **Senzační mezinárodní a dálkové migrační rekordy:**
    1. Oděsa (Ukrajina / carské Rusko, 1 085 km) – služebná Marie Mračková (*1897) na selském gruntě Václava Mertlíka v Benkově čp. 12.
    2. Rachov (Rahovo, Podkarpatská Rus, 566 km) – silniční dělník Franz Brandis (*1884) s rodinou v Benkově čp. 21.
    3. Donawitz u Leobenu (Štýrsko / Rakousko, 315 km) – 18letá schovanka Marie Rotter (*1903) u rodiny železničáře v Benkově čp. 20.
    4. Chlumčany u Loun (229 km) – dcera tkadlce Anna Churavá (*1873) na gruntě čp. 29 (1890).
    5. Perotín u Berouna (209 km) – podruzi František a Terezie Finclovi na gruntě čp. 29 (1869).
    6. Hostivice u Prahy (196 km) – Emil Merta (*1870) na rychtě čp. 7 (1880).
    7. Vídeň (194 km) – Eduard Meixner ml. (*1913) na čp. 23 (1921).
    8. Horní Cetno u Benátek n. J. (166 km) – Antonie Körnerová (*1882) v Benkově čp. 14 (1921).
    9. Rosina u Žiliny, Slovensko (151 km) – čeledín Matheus Malica (*1880) na gruntě v Benkově čp. 6 (1921).
    10. Poděbrady (136 km) – Karolína Dvořáková (*1840) na gruntě čp. 29 (1869).
  - **Majetková stratifikace všech 158 objektů v obci:**
    - I. Rychta & Velkostatek: 1 dům (čp. 7)
    - II. Selské grunty & dvorce: 18 domů (včetně dvorců Medelské čp. 3 a selských gruntů v Benkově)
    - III. Malorolníci, chalupníci a řemeslné živnosti: 53 domů
    - IV. Domkáři, dělnická stavení a chalupy: 86 domů (124 pracovníků v textilu u bělidel Eduard Oberleithner a synové, přádelny Saidl v Sudkově a domácích tkalců).
  - Aktualizována interaktivní sekce `#demografie-section` v `app.js` i hloubkový analytický artefakt `analyza_domacnosti_dlouhomilov.md`.

### Aktualizace 2026-11-08 (Kompletní přečtení a zpracování: 158 domů, 1 267 sčítacích záznamů a 6 264 závislostních hran)
- **Dosaženo 100% pokrytí celého sčítacího operátu 1921 pro všechny tři části obce:**
  - Plně integrováno všech **158 stavení** v `data/houses.js` (kompletní Dlouhomilov čp. 1–118, osada Medelské čp. 1–5, osada Benkov čp. 1–45, kaple sv. Floriána v Benkově a arch pro osobu bez stálého bytu `bez_cp`).
  - Rejstřík `censusRegistryData` vzrostl na **1 267 sčítacích záznamů** (+320 nových obyvatel z Benkova a závěru Dlouhomilova).
  - Celkový badatelský fond primárních záznamů dosáhl **1 654 položek** (včetně 302 matričních událostí a regionálních migrací z čp. 46).
  - Vytvořeno **1 371 unikátních osobních clusterů**, z toho **201 longitudinálních životních drah** doložených ve více pramenech v čase.
  - **Heterogenní orientovaný graf závislostí (`knowledgeGraph`)** nyní čítá **1 797 uzlů** (`1 371` osob, `160` domů čp., `91` rodových klanů, `12` socio-ekonomických zaměstnavatelů a obživ, `163` obcí původu) a **6 264 orientovaných/neorientovaných hran** vzájemných závislostí.
  - V Modulu 4 grafu přibyla specializovaná vrstva pro Benkov (`benkov_network`) a podpora klíčových německých a česko-německých rodů (Körner, Poisel, Schön, Horníček, Kauer, Katzer).
  - Přidán zaměstnavatelský uzel chudinského fondu obce Benkov (`emp_benkov_poor_fund`) a domáckého tkalcovství lnu.
  - Klíč stavu zvýšen na `dlouhomilov_clustering_app_state_v6`.

### Aktualizace 2026-11-08 (Masivní expanze na 94 domů, 947 sčítacích záznamů a 4 695 závislostních hran)
- **Kompletní synchronizace a přepočet grafu závislostí po doskenování domů čp. 78 až čp. 99:**
  - Do znalostní databáze a clustrovacího modelu bylo začleněno všech **94 stavení** z `data/houses.js` (domy až do **čp. 99** v Dlouhomilově a osadě Medelské) a **947 sčítacích záznamů** z `data/census_registry.js` (+180 nových záznamů z operátu 1921 pro čp. 78–99).
  - Celkový fond primárních záznamů dosáhl **1 259 položek** (včetně matrik a gruntovnic).
  - Vytvořeno **997 unikátních osobních clusterů**, z toho **180 vícezáznamových longitudinálních životních drah** sledovaných v čase.
  - **Heterogenní orientovaný graf závislostí (`knowledgeGraph`)** nyní čítá **1 294 uzlů** (`997` osob, `96` domů čp., `82` rodových klanů, `11` socio-ekonomických zaměstnavatelů a obživ, `108` obcí původu) a **4 695 orientovaných/neorientovaných hran** vzájemných závislostí.
  - Zahrnuti noví zaměstnavatelé v grafu: parní pila Herman Flesch v Mor. Šumperku, strojírna Josef Vítek v Postřelmově, stavební firmy Adolf Berka a Ing. Hubert Gässinger.
  - Zvýšen stavový klíč aplikace na `dlouhomilov_clustering_app_state_v5` pro okamžité automatické načtení nového rozsahu v prohlížeči.

### Aktualizace 2026-11-08 (Aktualizace clustrovací aplikace a znalostního grafu na 72 domů a 1 024 záznamů)
- **Kompletní synchronizace a přepočet grafu závislostí po rozšíření datového fondu:**
  - Do clustrovacího modelu bylo začleněno všech **72 stavení** z `data/houses.js` (domy až do **čp. 77** v Dlouhomilově a osadě Medelské) a **767 sčítacích záznamů** z `data/census_registry.js`.
  - Celkový fond primárních záznamů dosáhl **1 024 položek** (včetně matričních a gruntovních pramenů).
  - Vytvořeno **777 unikátních osobních clusterů**, z toho **170 vícezáznamových longitudinálních životních drah** sledovaných v čase.
  - **Heterogenní orientovaný graf závislostí (`knowledgeGraph`)** nyní čítá **1 014 uzlů** (`777` osob, `74` domů čp., `73` rodových klanů, `10` socio-ekonomických zaměstnavatelů a obživ, `80` obcí původu) a **3 649 orientovaných/neorientovaných hran** vzájemných závislostí (`RESIDES_AT`, `PARENT_OF`, `SPOUSE_OF`, `SIBLING_OF`, `HOUSEHOLD_DEPENDENCY`, `WORKS_AT`, `BELONGS_TO_CLAN`, `CLAN_ALLIANCE`, `MIGRATED_BETWEEN`, `MIGRATED_FROM_ORIGIN`).
  - Doplněny nové zaměstnavatelské uzly: stavební a hrnčířské firmy (Adolf Berka Frankštát, Ing. H. Gässinger) a slévárna Viktor Jossa v Postřelmově.
  - Zvýšen stavový klíč aplikace na `dlouhomilov_clustering_app_state_v4` pro okamžité automatické načtení nového rozsahu v prohlížeči.

### Aktualizace 2026-11-08 (Aktualizace demografické analýzy po doskenování Medelského čp. 3 a čp. 4)
- **Rozšíření datového vzorku a nové mikrohistorické objevy:**
  - Vzorek pro rok 1921 vzrostl z 218 na **327 obyvatel** žijících v **70 bytech / domácnostech** napříč **36 domy**. Celkový rejstřík `censusRegistryData` dosáhl **563 záznamů**.
  - **Průlomové zjištění – Dvorcový areál Medelské čp. 3 (Tři Dvory / Dreihöfen):** Největší dvorcový celek v obci s 12 byty a 55 obyvateli! Unikátní symbióza 4 selských hospodářů (Pospíšil, Sládek, Poisel, Kernerová) a zázemí pro stavební dělníky (zedníci a hrnčířský dělník fa Adolf Berka z Frankštátu, tesař fa Ing. Hubert Gässinger), textilní tkadleny (Ed. Oberleithner a synové) a přadláky (přádelna J. Saidla v Sudkově).
  - **Medelské čp. 4 (stavení 40 a 41):** 4 byty, 12 obyvatel – slévači Viktor Jossa v Postřelmově, běliči textilu Ed. Oberleithner a synové, železničáři ČSD.
  - V `app.js` doplněno 16 nově identifikovaných geografických lokalit do `MUNICIPALITY_COORDINATES` (Rejvíz v Jeseníkách ~47 km, Hynčina, Německá Libina, Police, Lukavice, Janoslavice, Crhov, Žleb/Zlehov u Štítů, Špičky u Hranic na Moravě ~71 km). Celkem je 100 % všech specifických rodných obcí (87 lokalit) přesně geokódováno pro výpočet migračních vzdáleností.
  - Aktualizován výzkumný report v artefaktu `analyza_domacnosti_dlouhomilov.md`.

### Aktualizace 2026-11-08 (Interaktivní demografická a majetková analýza obce Dlouhomilov 1857–1921)
- **Komplexní historicko-statistická analýza složení domácností a obyvatel:**
  - Vytvořen samostatný hloubkový badatelský report v artefaktu `analyza_domacnosti_dlouhomilov.md` odpovídající na klíčové otázky vývoje populace obce Dlouhomilov.
  - Implementována interaktivní sekce **"Demografie a statistiky obce"** (`#demografie-section`) přímo v aplikaci (`index.html`, `app.js` a `styles.css`) s okamžitým dynamickým přepočtem z živých dat `housesData` a `censusRegistryData`:
    1. **Klíčové metriky (KPIs):** Dynamické souhrnné karty pro rok 1921 i celkový rozsah (počet obyvatel, domácnosti/byty, průměrný a mediánový věk, podíl dětí a seniorů, podíl rodáků vs. přistěhovalců).
    2. **Věková pyramida a histogram:** Dynamické věkové kohorty (0–9 let, 10–19, 20–29, atd.), porovnání let 1857, 1869, 1880, 1890, 1900, 1910 a 1921. Zobrazení historického omlazení v 19. století (např. 1869: průměrný věk 24,5 roku, 26,8 % dětí 0–9 let) versus stárnutí a dopady první světové války v r. 1921 (průměrný věk 32,3 roku).
    3. **Geografický původ obyvatel a rekordy vzdáleností:** Geografické prstence podle vzdálenosti Haversine z centra Dlouhomilova (místní rodáci 0 km, mikroregion 1–5 km, Zábřežsko/Šumpersko 5–15 km, širší Morava 15–50 km, dálková migrace 50+ km). Žebříček nejvzdálenějších přistěhovalců (Chlumčany u Loun 229 km, Perotín/Beroun 209 km, Hostivice 196 km, Vídeň 194 km, Poděbrady 136 km, Hrotovice 111 km, Trotina 98 km) a zpětná migrace rodáků (JUDr. Jan Dvořák z čp. 29 – vysokoškolská studia práv na Karlo-Ferdinandově univerzitě v Praze, v operátu 1869 uváděn s titulem Doktor).
    4. **Socioekonomická a majetková stratifikace domácností:** Kategorizace domů (Dědičná rychta čp. 7, velké grunty, malorolníci, chalupníci a domkáři s textilní dělnickou chudinou u fy Eduard Oberleithner a synové), statistika hospodářského zvířectva (koně, hovězí dobytek, prasata, kozy, včelstva), ubytovaná čeleď a nájemníci. Interaktivní tabulka s vyhledáváním a přímými prokliky `Detail ➔` na profil stavení.
  - **Navigace a responzivita:**
    - Doplněna navigační tlačítka v hlavičce (`📊 Demografie & Analýza`) a v přepínači zobrazení (`📊 Demografie obce`).
    - Plná podpora přímého URL hashe `#demografie-section` a `#demografie`.

### Aktualizace 2026-11-07 (Sčítání lidu 1921 – Systematické zpracování operátů z inv. č. 1863, fascikl 3)
- **Kompletní transkripce a verifikace z autentických archivních skenů:**
  - **Medelské čp. 1 (Domkářské stavení rodiny Minářovy):** 2 byty, 13 obyvatel. V Bytě 1 tovární bělič Jan Minář ml. (*1876, Eduard Oberleithner a synové) s manželkou Anežkou a 7 dětmi (Jan *1906, zámečnický učeň u Eduarda Urbana v Lesnici; Vladimír *1919 – opraveno chybné datum z dřívějších sekundárních poznámek). V Bytě 2 výměnkář a samostatný malorolník Jan Minář st. (*1847) se synem Josefem (*1884), dcerou Marií (*1889) a vnučkou Jarmilou (*1911). Webové náhledy: `assets/archives/cp1/medelske_cp1_1921_byt1.jpg`, `byt1_p2.jpg`, `byt2.jpg`.
  - **Medelské čp. 2 (Domkářské stavení rodin Nejedlých a Minářových):** 2 byty, 6 obyvatel. Byt 1: bělič příze Alois Nejedlý (*1869 Svébohov, Ed. Oberleithner) s chotí Ludmilou a dcerou Marií Kupkovou. Byt 2: silniční dělník Adolf Minář (*1892, dříve pěší voják) s manželkou Ludmilou roz. Nejedlou (*1895, přadlena u Oberleithnera) a dcerou Ludmilou (*1920). *Klíčová oprava:* objasněn matriční zápis z r. 1948, který mylně uváděl rodinu Adolfa Mináře na faře čp. 2 – rodina žila v osadě Medelské čp. 2. Webové náhledy: `assets/archives/medelske_cp2/medelske_cp2_1921_byt1.jpg`, `byt1.jpg`.
  - **Dlouhomilov čp. 3 (Domkářské stavení rodiny Dvořákovy):** 1 byt, 4 obyvatelé. Pětasedmdesátiletá vdova Kateřina Dvořáková (*1845 Horní Studénky, v obci od sňatku 1865), syn Jan Dvořák (*1892, malorolník / pomocník), dcera Jana (*1883, hospodyně) a dcera Anežka Dvořáková (*1891, pomocnice u matky – ve sčítacím archu výslovně uvedena jako hluchoněmá). Webové náhledy: `assets/archives/cp3/dlouhomilov_1921_cp3_sberny.jpg`, `obyvatele.jpg`.
  - **Dlouhomilov čp. 4 (Dům se třemi byty – textiláci, železnice a studenti):** 3 byty, 8 obyvatel. Byt 1: bělič příze Antonín Koš (*1873 Kolšov, Ed. Oberleithner) s manželkou Sidonií a synem Josefem (*1911, student České státní reálky v Šumperku). Byt 2: vdova Františka Vénosová (*1853 Hradečná) s dcerou Marií (*1900, tovární tkadlena u Oberleithnera). Byt 3: železničář z šumperské lokomotivní topírny Josef Vénos (*1871) s manželkou Barborou a synem Františkem (*1906, zámečnický učeň u mistra Josefa Trojana v Dolní Olešné). Webové náhledy: `assets/archives/cp4/dlouhomilov_1921_cp4_obyvatele.jpg`, `byt2.jpg`, `byt3.jpg`.
  - **Dlouhomilov čp. 5 (Kulturní památka ČR, ÚSKP 27339/8-866 – Usedlost rodiny Lukasovy):** 1 byt, 2 obyvatelé. Samostatný malorolník na vlastní usedlosti Karel Lukas (*1860 Dolní Olešná, v obci od 1893) s manželkou Filomenou Lukasovou (*1864 Dlouhomilov). Přesně navazuje na matriční úmrtí Karla (†1923) a Filomeny (†1932). Webový náhled: `assets/archives/cp5/dlouhomilov_1921_cp5_obyvatele.jpg`.
  - **Dlouhomilov čp. 6 (Velká selská usedlost u Jílků v sousedství rychty):** 2 byty, 8 obyvatel. Byt 1: ovdovělá hospodyně na usedlosti Marie Jílková (*1849 Hradečná, v obci od 1867) s celoročně ubytovanou čeledí: služebné Filipína Šemberová (*1893 H. Heřmanice) a Berta Vepřková (*1897 Plinkout / Sukolom), čeledín Jaroslav Konečný (*1886 Dlouhomilov). Byt 2: stálý hospodářský pomocník u Marie Jílkové Jan Šindler (*1855 Hrabišín) s manželkou Josefou (*1868 Dlouhomilov) a syny Otou (*1898) a Janem (*1900). Webové náhledy: `assets/archives/cp6/dlouhomilov_1921_cp6_obyvatele.jpg`, `byt2.jpg`.
  - **Dlouhomilov čp. 7 (Bývalá dědičná rychta):** 3 byty, 14 obyvatel. Vizuálně ověřeny všechny 3 byty z primárních skenů (e538, 812b, 67da – běžná čísla 23–36): Byt 3: výměnkáři Jakub Navrátil (*1861 Drahanovice) a Anna Navrátilová (*1860 Stařechovice, č. 23–24). Byt 2: výměnkářka a pensistka Mathilda Ptáčková roz. Všetečková (*1852 Hrabenov), dcera Eliška Ptáčková (*1896, industriální učitelka ve Strupšíně), vnoučata Zdeněk (*1919) a novorozená Jitřenka (*28. 1. 1921, stáří 14 dní), služebná Anastasie Mlčochová (*1904 Hrabenov, č. 25–29). Byt 1: rolník František Hvížď (*1874 Hvozdec), manželka Hedvika (*1893 Drahanovice), dcery Libuše (*1913) a Pavla (*1918), služebné Anna Hándlová (*1900 Brníčko) a Pavlína Tašková (*1901 H. Studénky), čeledín Alois Augustyn (*1902 Janoušov, č. 30–36).
  - **Dlouhomilov čp. 8 (Venkovská usedlost u Braných v sousedství rychty):** 2 byty, 9 obyvatel (běžná čísla 37–45). Byt 1: samostatný rolník Isidor Braný (*16. 9. 1860 Dlouhomilov) s manželkou Sidonií (*10. 6. 1862 Dlouhomilov), hospodářský dělník Jaroslav Minář (*8. 6. 1901 Dlouhomilov) a služebná Anna Blažková (*12. 6. 1901 Dlouhomilov, č. 37–40). Byt 2: rodina Petra Dvořáka (*12. 5. 1886 Dlouhomilov), továrního bělice textilu u firmy Eduard Oberleithner a synové v Šumperku, manželka Josefa (*24. 8. 1886 Mladoňov, před válkou tovární tkadlena), syn Petr (*18. 1. 1909), dcera Marie (*2. 5. 1911) a ovdovělá matka Františka Dvořáková (*11. 7. 1856 Dlouhomilov, č. 41–45). Webové náhledy: `assets/archives/cp8/dlouhomilov_1921_cp8_obyvatele.jpg`, `byt2.jpg`.
- **Integrita a webová infrastruktura:**
  - Všechny originální snímky uloženy v plném rozlišení do `Dokumenty_Berkove\Scitaci_archy\Dlouhomilov_1921\`.
  - Webové náhledy optimalizovány na JPEG max šířka 1400 px, kvalita 70, velikost 100–145 kB.
  - Databáze `data/houses.js` rozšířena na 18 plnohodnotných profilů, rejstřík `data/census_registry.js` čítá 404 záznamů se 100% ověřenou integritou vazeb na `data/people.js`.
  - Vyvinut a ověřen rychlý skript `pracovni/scitani_1921/dlouhomilov_zoomify.py` pro bezpečné stahování dlaždic ze serveru `images.archives.cz` s refererem `https://digi.archives.cz/`.

### Aktualizace 2026-11-07 (Bloky 1, 2, 3, 4)
- **Blok 4 – Udrzba a integrita dat:**
  - `.gitignore` doplnen o `pracovni/` a `*.bak`.
  - `cleaned_genealogy_data_29.csv` synchronizovan s `Dokumenty_Berkove` a `build_registry.js` upraven na lokalni cestu a automatickou kontrolu integrity vazeb `linkedCensusIds` v `data/people.js`.
  - Opraveny posunute identifikatory `cen_*` v `data/people.js` a `defaultSeedPersonLinks` v `app.js`.
- **Blok 1 – Vizualni verifikace skenu 1857–1900 a nahledy pro cp. 10 a cp. 22:**
  - Vygenerovany komprimovane webove nahledy (max 1400 px, JPEG q=68, ~92–161 kB) pro vsechny sčítací operáty **čp. 10** (17 souborů v `assets/archives/cp10/`) a **čp. 22** (14 nových souborů pro 1857–1900 v `assets/archives/cp22/`).
  - Vizuálně ověřeny skeny 1857–1900 pro **čp. 22** (vyřešeny badatelské otazníky z r. 1857 a 1869: výměnkář Petr Dvořák *1793 s dcerami Terezií *1828, Annou *1830, Viktorií *1833 a Františkou *1835; hospodář Josef Dvořák *1821 s manželkou Terezií roz. Pospíšilovou z Brníčka a synem Josefem *13. 3. 1857) a pro **čp. 10** (potvrzen odchod Vincence Jílka *1850 k vojsku v r. 1869 a převzetí gruntu Janem Šafářem *1859 z Medelského čp. 1 v r. 1890).
  - Odstraněny štítky `NEOVĚŘENO` u čp. 10 a čp. 22, nastaveno `sourceType: "verified"`, `isSample: false` a propojeny všechny `scanFile`.
  - Sjednocena a dynamizována počítadla v `index.html` a `app.js` (**376** záznamů, **11** biografických profilů, kompletní filtr domů v rejstříku).
- **Blok 2 – Integrace matričního výzkumu (1679–1949) a nové biografické profily:**
  - Časové osy (`timeline`) a příběhy (`stories`) v `data/houses.js` obohaceny o matriční milníky a posun počátků držby pro **čp. 29** (od r. 1679 – Jan Dvořák), **čp. 22** (od r. 1786 – Petr Dvořák *1793 až po úmrtí Josefa *1857 v r. 1940 a Anny roz. Kouřilové v r. 1949), **čp. 10** (rod Gilek/Jílek od r. 1815 a Šafář z Medelského čp. 1), **čp. 5**, **čp. 24**, **čp. 43**, **čp. 2** (fara – děkan P. Františekčar, farář P. Mořic Špaček), **čp. 12** a **čp. 46** (sňatek Jaroslava Berky 1920 a osudy dětí).
  - Do `data/people.js` přidány 4 nové biografické profily: **Petr Dvořák (*1793, čp. 22)**, **Josef Dvořák (1857–1940, čp. 22)**, **Anna Dvořáková roz. Kouřilová (1857–1949, čp. 22)** a **Karel Dvořák (*1880, čp. 22)** + doplněno úmrtí **Josefa Dvořáka (1879–1938, čp. 29)**.
- **Blok 3 – Nové funkce v UI a Badatelském průvodci:**
  - Obnovena a vylepšena funkce `openHouseDetail()` s vizuálními odznaky stavu ověření (`✔ Ověřeno skenem` vs. `⏳ Přečteno pomocníkem / k ověření`).
  - Do `data/guide.js` a `index.html` vložena sekce **Kontinuita číslování domů a přehled matrik po domech (1770–1949)** (vývoj počtu domů 80 → 106 → 115 → 118 → 154, samostatné řady Dlouhomilov / Medelské čp. 1–10 / Benkov čp. 1–49 a klikací tabulka klíčových gruntů).
  - V modálu detailu osoby (`openPersonModal`) zprovozněny klikací rodinné vazby (otec, matka, manžel/ka, děti).
  - Doplněno URL hash routování (`#house=cp22`, `#person=p_josef_dvorak_1857`, `#map=vojenske2_1838`).

### Webova aplikace
- Interaktivni mapa usedlosti na Leaflet.js se zvyraznenim lokalit (zlute pruhledne polygony).
- Historicky atlas map s prolinalem vrstev:
  - Stabilni katastr 1834 (cadastre1834)
  - I. vojenske mapovani 1764 (vojenske1_1764) - Benkov a Medelske skryty
  - II. vojenske mapovani 1838 (vojenske2_1838) - Benkov a Medelske skryty
  - III. vojenske mapovani 1874 (vojenske3_1874)
  - Topograficka mapa CSR 1937 (vojenske3_1937)
  - Topograficka mapa S-1952 (topo1952)
- Georeferncni a kalibracni nastroj (klavesa G nebo klik na ctverec lokality):
  - Kalibrace celych vrstev + per-mapa kalibrace ctvercu lokalit
  - **Identifikace identickych budov (GCP – Ground Control Points):**
    - Rychly vyber klicovych budov (Kostel Vsech svatych cp. 1, Statek cp. 29 u Dvoraku, Rychta cp. 7, cp. 5, cp. 24, cp. 43) nebo vlastni bod kliknutim do leve mapy
    - Automaticky vypocet posunu (1 bod) nebo posunu, meritka a rotace (2 a vice bodu rigidni podobnostni transformace)
  - **Rezim Side-by-Side (Vedle sebe):**
    - Dualni split-screen okna (vlevo dnesni podklad s cisly popisnymi, vpravo cista historicka mapa)
    - Synchronizovany pohyb a zoom obou oken, prehledne vizualni markery bodu (#1, #2)
  - Ukladani do LocalStorage + generovani JS kodu
  - Kalibrace vsech 6 map dokoncena a commitnuta
- Databaze obyvatel a scitani lidu (census_registry.js, 406 zaznamu):
  - Kompletne zpracovane operaty 1857–1921 pro **cp. 29** (usedlost u Dvoraku) a **cp. 7** (byvala dedicna rychta, 100 overenych zaznamu)
  - Vycisteny duplicity: cp. 46, cp. 110, cp. 1
  - Kategorizace do socio-ekonomickych trid (hospodar, rodina, vymenek, celed, remeslo, vzdelanec/sprava, podruh, dite)
- Archivni prohliZec (Lightbox): skeny, zoom, stazeni, citace fondu
- Badelsky pruvodce a slovnicek kurentu (data/guide.js)
- System propojovani osob / record linkage (commit 53bacef)
- GitHub Issues zpetna vazba RDMkit styl (commit 356f6b8):
  - Plovouci tlacitko Zpetna vazba vzdy pritomne vpravo dole
  - Tlacitka v kazde sekci, detailu usedlosti, osoby, archivnim prohliZeci
  - openFeedbackIssue() detekuje kontext automaticky

### Infrastruktura
- Nasazeni pres GitHub Pages (vetev main, adresar root)
- Optimalizovane obrazky < 20 MB celkem
- README.md s popisem a live odkazem

### Dokumentace
- docs/badatelsky_pruvodce.md + GitHub feedback banner
- docs/obyvatele_a_matriky.md + GitHub feedback banner
- docs/organizace_souboru.md + GitHub feedback banner

---

## SOUBORY

| Soubor | Popis |
|--------|-------|
| index.html | Hlavni kostra, modalni okna, UI, kalibracni panel |
| app.js | Veskera logika: Leaflet, vrstvy, updateLocalityHighlights, georef engine, openFeedbackIssue() |
| data/maps.js | Metadata historickych map, defaultBounds, per-mapa localityBounds a toponyms |
| data/houses.js | Databaze staveni ~52 kB |
| data/census_registry.js | Zaznamy scitani lidu 1869-1921 ~196 kB |
| data/people.js | Profily obyvatel a rodu |
| data/guide.js | Slovnicek kurentu, archivni rozcestnik |
| build_registry.js | Node.js skript pro generovani/validaci rejstriku |
| README.md | Popis projektu a live odkaz |
| Summary_Dlouhomilov.md | Tento soubor |

---

## AKTUALNI UKOL

Dokonceno zpracovani dedicne rychty cp. 7, usedlosti cp. 10 (Jilkovi a Safarovi), usedlosti cp. 22 (u Dvoraku), domkarskeho staveni cp. 46 (Dvorakovi), staveni cp. 110 (Podhorni) a domkarskeho staveni Medelske cp. 1 (rod Minaru). Rejstrik byl kompletne vycisten od vsech starych OCR posunu a nesmyslnych cisel (zbylych phantom cisel 2, 4, 31, 567, null). Dalsim krokem je zamereni na Faru cp. 2 a pristup do ZAO Opava (digi.archives.cz) podle bezpecnostniho protokolu proti blokovani robotu.

**Dokonceno u Medelske cp. 1 (rod Minaru):**
- Skeny z roku 1921 zmenseny a ulozeny v `assets/archives/cp1/` (4 ilustracni nahledy, ~102–158 kB).
- Integrovano 13 overenych obyvatel ve dvou bytech:
  - Byt 1: Jan Minar ml. (*1876, tovarni delic u firmy Eduard Oberleitner a synove), manzelka Anezka (*1884), syn Jan (*1906, zamecnicky ucen v Lesnici) a 6 dalsich deti.
  - Byt 2: Jan Minar st. (*1847, malorolnik na vlastnim hospodarstvi), syn Josef (*1884, delnik), dcera Marie a vnucka Jarmila.
- Doplneny 2 mikrohistoricke pribehy a plna archivalni citace (SOkA Sumperk, OSP Zabreh, scitani 1921, Medelske).

**Stav databaze a rejstriku:**
- `data/houses.js`: 12 detailne zpracovanych objektu.
- `data/census_registry.js`: 376 stoprocentne overenych, cistych zaznamu bez jedine duplicity.

**Navazujici kroky:**
1. Zpracovani Fary cp. 2 (duchovni sprava, farari napr. M. Spacek, farni hospodyne a sluzebnictvo).
2. Dohledavani v ZAO Opava (digi.archives.cz) pro Dlouhomilov za pouziti protokolu ze skillu Genealogie:
   - Dlouhe nahodne prodlevy 8-15 s mezi akcemi
   - Zadne cyklicke proklikavani strankovanim v katalogu
   - Prime entityuuid dotazy
   - Stahovani dlazdic vylucne pres `tools/soal_zoomify.py` z CLI s `py -3 -I -X utf8` (images.archives.cz neblokuje)
   - Vyreseni pripadne CAPTCHA uzivatelem v okne prohlizece.

---

## KONTEXT

### Kriticka pravidla
- Nazev osady: vzdy **Medelske** (nikdy Nedelske, nikdy bez diakritiky)
- **Zveřejňování archiválií a scanů online:** Nikdy nevystavovat online originální plné scany ve vysokém rozlišení (4000+ px, 3–5 MB). Do složky `assets/archives/` pro web a GitHub vkládat výhradně komprimované zmenšené náhledy (max rozměr ~1400 px, JPEG kvalita 65–70, cílová velikost ~100–180 kB) sloužící jako ilustrace zjištění.
- **Přesná provenience a citace zdrojů:** U každého operátu a dokumentu striktně uvádět kompletní archivní citaci (archiv, fond, číslo pomůcky, inv. číslo, karton/fascikl, série a čísla snímků).
- Validace JS pred commitem: node -c app.js a node -c data/maps.js a node -c data/houses.js a node -c data/census_registry.js
- PowerShell heredoc: pro soubory s backticky vzdy @'...'@ (single-quoted), nikdy @"..."@
- Historicke mapy 1764 a 1838 nezahrnuji Benkov a Medelske - toponyma maji hodnotu null

### Technicke detaily
- GitHub Issue prefill: https://github.com/KarelBerka/Dlouhomilov/issues/new?title=...&body=...
- Georef panel: klavesa G nebo klik na ctverec; ulozeni do localStorage
- Leaflet map objekt: globalni promenna map v app.js
- Tracking promenne: currentPersonId, currentArchiveDoc (globalni v app.js)

### Postup pro navazani v nove konverzaci
1. Otevrit tento soubor jako prvni kontext
2. Spustit: git status && git log --oneline -5
3. Nahrat relevantni soubory dle ukolu (app.js, data/maps.js, data/houses.js atd.)
4. Pred push: node -c app.js && node -c data/maps.js
