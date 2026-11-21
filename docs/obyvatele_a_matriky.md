# Metodika propojení pramenů obyvatel & rodopisná databáze Dlouhomilova

Tento dokument popisuje způsob propojení jednotlivých archivních pramenů do jednotné biografické a rodopisné databáze obyvatel obce Dlouhomilov.

---

## 1. Struktura životního profilu osoby

Každá osoba v databázi `data/people.js` propojuje události z celého svého života s přímými odkazy na originální archivní scany:

```javascript
{
  id: "p_alois_dvorak_1830",
  name: "Alois Dvořák",
  birthYear: "1830",
  deathYear: "1908",
  lifeSpan: "1830 – 1908",
  houseNumber: "29",
  houseId: "cp29",
  role: "Rolník na vlastním gruntě a tkadlec",
  father: "Johann Dvořák (*1795)",
  mother: "Elisabeth Frank (*cca 1800)",
  spouse: "Magdalena Dvořáková (*1830)",
  children: ["Jan Dvořák (*1866)", "Emílie Dvořáková (*1870)", "Josef Dvořák (*1874)"],
  events: [
    {
      type: "birth",       // Narození (Křestní matrika N)
      year: "1830",
      scanFile: "assets/archives/matriky/N_..._0062.jpg"
    },
    {
      type: "census",      // Sčítání lidu (1857, 1869, 1890, 1910, 1921)
      year: "1890",
      scanFile: "assets/archives/cp29/su1000_..._1890_0084.jpg"
    },
    {
      type: "death",       // Kniha zemřelých (Z)
      year: "1908",
      scanFile: "assets/archives/matriky/O-_I-O-_Z-_I-Z_..._0342.jpg"
    }
  ]
}
```

---

## 2. Přehled použitých archivních fondů

### A. Matriky římskokatolického farního úřadu Dlouhomilov a předchozích farností (Zemský archiv v Opavě)
Kompletní katalog všech svazků včetně permalinků, vnitřních rozsahů oddílů a pilotního plánu oddacích knih viz [katalog matrik Dlouhomilova, Medelského a Benkova](katalog_matrik_dlouhomilov_benkov.md).

1. **Dlouhomilov (`1786–1949`) – řada `Zá II 1–10` (obsahuje Dlouhomilov vč. Medelského, Horní a Dolní Olešnou, od r. 1932 i Benkov):**
   - **Knihy narozených (`N`, `I-N`):** `Zá II 1` (`1786–1855`, inv. č. `8359`), `Zá II 2` (`1856–1863`, inv. č. `8360`), `Zá II 3` (`1864–1890`, inv. č. `8361`), `Zá II 8` (`1891–1913`), a živá kniha `Zá II 9` (`1914–1949` – dosud na **Obecním úřadě Brníčko**).
   - **Knihy oddaných a zemřelých (`O`, `Z`, `I-O`, `I-Z`):** `Zá II 4` (`O 1786–1855`, inv. č. `8362`), `Zá II 6` (`Z 1786–1855`, inv. č. `8364`), `Zá II 5` (`O, Z, I-O, I-Z 1856–1888`, inv. č. `8363`), `Zá II 7` (`O, Z, I-O, I-Z 1889–1929`, inv. č. `11248`), `Zá II 10` (`O, Z, I-O, I-Z 1930–1949`, inv. č. `14834`).
2. **Rohle (`1720–1786` celé údolí; `1786–1932` Benkov):** `Zá VIII 1, 6, 10, 14, 15` (inv. č. `8409–8423`) a novodobé svazky pro Benkov (`Zá VIII 2–5, 7–9, 11–13, 16–18`, mj. inv. č. `11251`) až do přefaření k Dlouhomilovu roku **1932**.
3. **Předlokální a přespolní matriky:** *Dubicko* `Zá IV 1` (`1617–1694`, inv. č. `8376`) a `Zá IV 2` (`1695–1762`, inv. č. `8377`, oddíl N `1695–1722` str. `948–1095`), přespolní sňatky v *Lesnici/Brníčku* (`Zá VI 5, 6, 19`, inv. č. `8395, 8396, 12328`) — podrobné signatury a přepisy před r. 1786 viz [studie matrik Dubicko a Rohle 1650–1785](matriky_dubicko_a_rohle_1650_1785.md).

### B. Sčítací operáty (SOkA Šumperk / ZAO Opava)
- **Dlouhomilov & osada Medelské – Okresní úřad / hejtmanství Zábřeh (`NAD 1000`, pomůcka `411`):**
  - **1857** – inv. č. 1299, karton 253 (nejstarší jmenovité sčítání)
  - **1869** – inv. č. 1392, karton 300 (soupisy dobytka a řemesel)
  - **1880** – inv. č. 1476, karton 330
  - **1890** – inv. č. 1560, karton 356 (292 sn., kompletně přepsán celý Dlouhomilov i osada Medelské: `100` domů, `806` zaps. / `772` přít. os. = `641` Dlouhomilov + `165` Medelské)
  - **1900** – inv. č. 1664, kartony 396–397 (100% kompletní po revizi dle *Sammelbogen*: `106` obydlených domů, `866` zaps. / `847` přít. os. = `715` Dlouhomilov + `151` Medelské)
  - **1910** – inv. č. 1765, karton 436 (kompletně přepsáno: `790` os. v Dlouhomilově + `112` os. v Medelském)
  - **1921** – inv. č. 1863, fascikl 3 (první československé sčítání lidu: `727` os. v Dlouhomilově + `93` os. v Medelském)
- **Benkov (*Benke*) – Okresní úřad / hejtmanství Šumperk – I (`NAD 999`, pomůcka `409`):**
  - **1857–1890** – inv. č. 725, 787, 857, 934 (kartony 158, 205, 247, 281)
  - **1900** – inv. č. 1010, karton 326 (120 snímků, kompletně přepsáno: `43` obydlených domů `čp. 1–19, 21–44`, `272` os.)
  - **1910** – inv. č. 1086, karton 365 (122 snímků, čp. 1–45, kompletně přepsáno: `275` os. vč. 2 italských stavebních dělníků na čp. 13)
  - **1921** – inv. č. 1163, fascikl 2 (219 snímků, čp. 1–45, kompletně přepsáno: `211` os.)

### C. Pozemkové a gruntovní knihy (Velkostatek Zábřeh)
- **Gruntovní kniha pro vsi Dlouhomilov a Medelské** – inv. č. 164, sign. 428, fol. 191–212 (Grunt Pavla Dvořáka na čp. 29).

---

## 3. Jak přidat další osobu

Chcete-li přidat nového předka či obyvatele obce:
1. Otevřete `data/people.js`.
2. Zkopírujte existující šablonu osoby.
3. Vyplňte data narození, sňatku a úmrtí z příslušné matriky.
4. Uveďte relativní cestu k naskenovanému listu v `assets/archives/matriky/` nebo `assets/archives/cpXX/`.
5. Uložte soubor. Na webu se okamžitě vytvoří interaktivní karta osoby s životní časovou osou.

---

> 💬 **Zpětná vazba k rodopisu & obyvatelům:**  
> Máte doplňující informace k obyvatelům Dlouhomilova či Benkova nebo jste našli chybu v přepisu? [Otevřete issue na GitHubu](https://github.com/KarelBerka/Dlouhomilov/issues/new?title=%5BZp%C4%9Btn%C3%A1%20vazba%5D%3A%20Obyvatel%C3%A9%20a%20matriky&body=%23%23%23%20%F0%9F%93%9D%20Popis%20p%C5%99ipom%C3%ADnky%0A%3C%21--%20Popi%C5%A1te%20svou%20p%C5%99ipom%C3%ADnku%20k%20osob%C3%A1m%20nebo%20matrik%C3%A1m%20--%3E%0A%0A---%0A%F0%9F%93%8D%20**Dokument%3A**%20docs%2Fobyvatele_a_matriky.md) s předvyplněnou lokalizací.
