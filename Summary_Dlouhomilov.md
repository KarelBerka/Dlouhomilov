# Summary_Dlouhomilov.md

PROJEKT: Dlouhomilov – Interaktivní historicko-genealogická mapa a databáze obyvatel obce

HOTOVO:
- Kompletní interaktivní webová aplikace (Leaflet.js + Tailwind CSS) propojující historické mapy (1716–1983), sčítání lidu (1857–1921), databázi usedlostí a genealogické profily obyvatel.
- Georeferenční a kalibrační nástroj (klávesa G / tlačítko na mapě):
  - Umožňuje interaktivně kalibrovat celé mapové vrstvy (posun, měřítko, rotace) i jednotlivé zvýrazňující obdélníky lokalit (Dlouhomilov, Benkov, Medelské) specificky pro každou mapu.
  - Podpora libovolného zmenšování/zvětšování (odstraněn limit 50 %), uložení do LocalStorage a export hotového JS kódu.
- Kompletní kalibrace a uložení všech historických mapových vrstev:
  - Stabilní katastr 1834 (`cadastre1834`) – odstraněny nepřesné polygonové půdorysy budov, ponechán čistý podklad s jemným žlutým zvýrazněním.
  - I. vojenské mapování 1764 (`vojenske1_1764`) – použit větší výřez mapy, nová přesná kalibrace, zobrazen pouze Dlouhomilov (Benkov a Medelské mimo výřez).
  - II. vojenské mapování 1838 (`vojenske2_1838`) – přesná kalibrace vrstvy i lokality, zobrazen pouze Dlouhomilov.
  - III. vojenské mapování 1874 (`vojenske3_1874`) – zkalibrovány lokality Dlouhomilov, Benkov, Medelské.
  - Topografická mapa ČSR 1937 (`vojenske3_1937`) – zkalibrovány lokality Dlouhomilov, Benkov, Medelské (včetně diakritiky).
  - Topografická mapa ČSR S-1952 (`topo1952`) – zkalibrována vrstva `bounds_topo1952` i lokality.
- Vylepšení vizualizace toponym v mapách:
  - Odstraněny plovoucí textové štítky; nahrazeny jemnými poloprůhlednými žlutými obdélníky (12% krytí) kolem intravilánů pro maximální čitelnost podkladu.
- Atlas historických map obohacen o autentická metadata:
  - Do `data/maps.js` doplněny přesné citace, archivní signatury, rozměry a přímé odkazy na Mapovou sbírku PřF UK / Chartae Antiquae.
- Vyčištění sčítání lidu (`data/census.js`):
  - Odstraněny duplicitní záznamy, opravena čísla domů (čp. 46, čp. 110, čp. 1 a čp. 29).
- Genealogicko-historická analýza čísel domů:
  - Vyjasněna stabilita číslování (od roku 1805 / Stabilního katastru 1834 jsou čp. v Dlouhomilově konstantní; nezaměňovat s parcelními čísly st. p. č. jako např. čp. 29 na parcele st. 63).

SOUBORY:
- `index.html`: Hlavní kostra aplikace, modální okna, UI ovládací prvky, kalibrační panel georeferencování.
- `app.js`: Aplikační logika, inicializace Leaflet mapy, přepínání a prolínání vrstev, zvýraznění lokalit (`updateLocalityHighlights`), kalibrační a georeferenční engine (`georefState`, `computeLocalityBounds`, `georefNudge`, drag & drop).
- `data/maps.js`: Metadata historických map (1716–1983), `defaultBounds`, map-specifické `localityBounds` a `toponyms` (Dlouhomilov, Benkov, Medelské).
- `data/houses.js`: Databáze stavení, souřadnice, historické názvy a popisy.
- `data/census.js`: Záznamy sčítání lidu (1857–1921), vazby na obyvatele a stavení.
- `data/inhabitants.js`: Profily obyvatel a rodů.
- `data/history.js`: Časová osa a historický přehled obce.
- `Summary_Dlouhomilov.md`: Kompaktní přehled stavu, klíčových souborů a návaznosti.

AKTUÁLNÍ ÚKOL:
- Otevřené problémy a oblasti k rozvoji:
  1. Genealogické vazby a databáze osob: další propojování záznamů ze sčítání lidu s kartami jednotlivých stavení v `data/houses.js`.
  2. Doplňování detailních popisů a historických pramenů ke klíčovým gruntům (např. památkově chráněný grunt čp. 29 u Dvořáků/Berků, rychta čp. 24, fara čp. 1, škola čp. 7).
  3. Možné zařazení historických leteckých ortofotomap (např. 50. léta 20. století), pokud budou k dispozici.
- Přesné kroky jak navázat v nové konverzaci:
  1. Zkontrolovat git status (`git status`, větev `main`) a potvrdit synchronizaci.
  2. Zadat požadavek na konkrétní datovou nebo funkční část (např. editace osob v `inhabitants.js`, doplnění stavení v `houses.js`, rozšíření sčítání lidu či úprava mapových vrstev).
  3. Při úpravách klientských skriptů vždy zkontrolovat syntaxi (`node -c <soubor>`) a pushnout změny na GitHub, aby se okamžitě projevily na webu.

KONTEXT:
- Repozitář: `https://github.com/KarelBerka/Dlouhomilov.git` (větev `main`), lokální adresář: `c:\Users\krapn\Dropbox\Antigravity\Dlouhomilov`.
- Dlouhomilov a Benkov jsou dvě samostatná historická katastrální území s nezávislými řadami čísel popisných od 1 (v Dlouhomilově čp. 1–130+, v Benkově čp. 1–60+).
- Název osady Medelské se striktně píše jako **Medelské** (nikdy „Nedělské“ ani bez diakritiky).
- Čísla popisná (čp.) jsou od roku 1805 / Stabilního katastru (1834) v Dlouhomilově stabilní; neplést s parcelními čísly stavebních parcel (st. p. č. ze stabilního katastru, např. usedlost čp. 29 stojí na stavební parcele st. 63).
- Kalibrační panel georeferencování se aktivuje klávesou `G` nebo kliknutím na žlutý obdélník lokality na mapě.
