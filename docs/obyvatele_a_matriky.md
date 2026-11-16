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
1. **Dlouhomilov (`1786–1949`) – Kniha narozených (N) `1786–1855`** – inv. č. 8359, sign. `Zá II 1`; **Kniha oddaných (O) `1786–1855`** – inv. č. 8362, sign. `Zá II 4` (obsahuje Dlouhomilov vč. Medelského, Horní a Dolní Olešnou).
2. **Dlouhomilov – Kniha narozených (N) `1864–1890`** – inv. č. 8361, sign. `Zá II 3`.
3. **Dlouhomilov – Kniha oddaných a zemřelých (O, Z) `1889–1929`** – inv. č. 11248, sign. `Zá II 7`.
4. **Předlokální matriky Dubicko (`1617–1722`) & Rohle (`1720–1786`, Benkov do r. `1932`):** *Dubicko* `Zá IV 1` (inv. č. 8376) a `Zá IV 2` (inv. č. 8377, oddíl N `1695–1722` str. `948–1095`), *Rohle* `Zá VIII 1, 6, 10, 14, 15` (inv. č. 8409–8423) — podrobné signatury, permalinky a přepisy viz [studie matrik Dubicko a Rohle 1650–1785](matriky_dubicko_a_rohle_1650_1785.md).

### B. Sčítací operáty (SOkA Šumperk / ZAO Opava)
- **Dlouhomilov & osada Medelské – Okresní úřad / hejtmanství Zábřeh (`NAD 1000`, pomůcka `411`):**
  - **1857** – inv. č. 1299, karton 253 (nejstarší jmenovité sčítání)
  - **1869** – inv. č. 1392, karton 300 (soupisy dobytka a řemesel)
  - **1880** – inv. č. 1476, karton 330
  - **1890** – inv. č. 1560, karton 356
  - **1900** – inv. č. 1664, karton 397
  - **1910** – inv. č. 1765, karton 436 (kompletně přepsáno: `769` os. v Dlouhomilově + `112` os. v Medelském)
  - **1921** – inv. č. 1863, fascikl 3 (první československé sčítání lidu: `727` os. v Dlouhomilově + `93` os. v Medelském)
- **Benkov (*Benke*) – Okresní úřad / hejtmanství Šumperk – I (`NAD 999`, pomůcka `409`):**
  - **1857–1900** – inv. č. 725, 787, 857, 934, 1010 (kartony 158, 205, 247, 281, 326)
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
