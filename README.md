# 🗺️ Dlouhomilov – Interaktivní historicko-genealogická mapa obce

[![Live Demo](https://img.shields.io/badge/🌐_Živá_aplikace-karelberka.github.io%2FDlouhomilov-success?style=for-the-badge&logo=githubpages)](https://karelberka.github.io/Dlouhomilov/)
[![License: MIT](https://img.shields.io/badge/Code_License-MIT-yellow.svg)](LICENSE)
[![License: CC BY-SA 4.0](https://img.shields.io/badge/Data_License-CC_BY--SA_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-sa/4.0/)
[![Web: Vanilla JS](https://img.shields.io/badge/Stack-Vanilla_JS_|_Leaflet_|_Tailwind-blue.svg)](index.html)

> 🔗 **Spuštěná webová aplikace (Live Web):**  
> 👉 **[https://karelberka.github.io/Dlouhomilov/](https://karelberka.github.io/Dlouhomilov/)**

---

Interaktivní webová aplikace, historický atlas a badatelský průvodce historií, parcelní držbou, domovní zástavbou a obyvateli obce **Dlouhomilov** a osady **Benkov** (okres Šumperk, dříve politický okres Zábřeh na Moravě).

Projekt propojuje **Císařské povinné otisky stabilního katastru (1834)**, **vojenská mapování (1764–1945)**, **živá vektorová data ČÚZK**, **sčítací operáty (1857–1921)**, **farní matriky** a **gruntovní knihy** do jednoho přehledného mapového rozhraní.

---

## 🌟 Klíčové funkce

- 🧭 **Multi-vrstvá georeferencovaná mapa:**
  - Plynulé prolínání Císařského otisku stabilního katastru (1834) přes dnešní ortofotomapu nebo OpenStreetMap.
  - Georeferencovaná historická vojenská mapování (I. josefské 1764, II. františko-josefské 1838, III. vojenské 1874/1879, topografické mapy 1937, 1952 a SMO-5 1951).
  - Živá vektorová katastrální mapa ČÚZK (WMS) s parcelními hranicemi.
  - Vektorové půdorysy budov (porovnání stavu 1834 vs. současnost dle OSM a RÚIAN).
- 🏘️ **Kartotéka gruntů a památek:**
  - Podrobné profily selských usedlostí a památek (čp. 7, čp. 24, památkově chráněný grunt čp. 29, rychta čp. 1, kaple v Benkově aj.).
  - Časové osy držby gruntu s přepisy historických pramenů.
- 👥 **Genealogická & biografická databáze:**
  - Evidence obyvatel, hospodářů a rodin propojená s konkrétními domy.
  - Přepisy sčítacích archů (1857, 1869, 1880, 1890, 1900, 1910, 1921).
  - Záznamy z matrik narození, oddaných a zemřelých.
- 📜 **Archivní prohlížeč (Lightbox Viewer) s přímými odkazy:**
  - Zvětšovací prohlížeč pro archivní dokumenty a mapové listy.
  - **Tlačítko pro přímý přechod do příslušné online digitální badatelny / archivu** pro zobrazení originálu v maximálním rozlišení.
- 📖 **Badatelský průvodce:**
  - Metodické návody pro čtení starých písem (kurent, novogotické písmo), strukturu archivních fondů SOkA Šumperk a ZAO Opava.

---

## 🏛️ Odkazy na originální archivní fondy (Archival Sources)

Všechny archivní dokumenty a mapy použité v projektu pocházejí z veřejných digitálních badatelen a archivů:

| Instituce / Archiv | Fond / Sbírka | Přímý odkaz na originál |
| :--- | :--- | :--- |
| **Zemský archiv v Opavě (ZAO)** | Farní úřad Dlouhomilov (Matriky N, O, Z 1786–1929) | [DigiArchiv ZAO (Vademecum)](https://vademecum.archives.cz/vademecum/) |
| **Zemský archiv v Opavě (ZAO)** | Okresní hejtmanství / úřad Zábřeh (Sčítání lidu 1857–1921) | [DigiArchiv ZAO – Sčítací operáty](https://vademecum.archives.cz/vademecum/) |
| **Ústřední archiv zeměměřictví a katastru (ÚAZK ČÚZK)** | Stabilní katastr 1834 – Císařský otisk (sign. MOR102618340) | [Geoportál ÚAZK – k.ú. Lomigsdorf](https://ags.cuzk.cz/archiv/openmap.html?typ=skicm&idrastru=MOR102618340) |
| **Český úřad zeměměřický a katastrální (ČÚZK)** | Státní mapa 1 : 5 000 (SMO-5), Ortofoto a Katastr nemovitostí | [Geoprohlížeč ČÚZK](https://ags.cuzk.cz/geoprohlizec/) |
| **Mapová sbírka PřF UK & VÚGTK** | I., II. a III. vojenské mapování, Müllerova mapa Moravy (1716) | [Chartae Antiquae](https://chartae-antiquae.cz/) |
| **Národní památkový ústav (NPÚ)** | Ústřední seznam kulturních památek ČR & Památkový katalog | [Památkový katalog NPÚ](https://pamatkovykatalog.cz/) |

---

## ⚡ Optimalizace pro online web

Obrázky v repozitáři jsou zkomprimovány a optimalizovány pro rychlé načítání ve webovém prohlížeči:
- Celková velikost všech médií byla zredukována z původních **316 MB na méně než 20 MB** (~94% úspora).
- Pro detailní badatelskou práci v plném gigapixelovém rozlišení slouží integrovaná tlačítka **„🏛️ Původní archiv“**, která otevírají přímo zdrojové badatelny.

---

## 🚀 Spuštění a nasazení

### 🌐 Živý web (GitHub Pages)
Aplikace je nasazena a přístupná na:  
👉 **[https://karelberka.github.io/Dlouhomilov/](https://karelberka.github.io/Dlouhomilov/)**

*(Při případné změně nastavení: **Settings** -> **Pages** -> **Branch:** main / / (root))*

### 💻 Lokální spuštění
Projekt je čistá klientská webová aplikace (SPA) bez nutnosti kompilace. Stačí otevřít `index.html` v prohlížeči, nebo spustit lokální HTTP server:
```bash
# Spuštění lokálního serveru v Pythonu
python -m http.server 8000
```
A v prohlížeči otevřít: `http://localhost:8000`

---

## 📂 Struktura projektu

```text
Dlouhomilov/
├── 🌐 index.html          # Hlavní prezentační rozhraní a interaktivní modály
├── ⚙️ app.js              # Inicializace mapy (Leaflet), logika vrstev, přepočty a filtry
├── 🎨 styles.css          # Styly uživatelského rozhraní
│
├── 📁 data/               # Strukturované databáze v JavaScriptu
│   ├── maps.js            # Metadata a georeference historických map (1716–1983)
│   ├── houses.js          # Kartotéka stavení, gruntů a časových os držby
│   ├── people.js          # Genealogická databáze obyvatel (matriky + sčítání)
│   └── guide.js           # Metodické texty badatelského průvodce
│
├── 📁 assets/             # Optimalizovaná multimediální data
│   ├── maps/              # Rastery historických a katastrálních map (JPEG/PNG)
│   └── archives/          # Archivní skeny (sčítací operáty, gruntovnice, matriky)
│
├── 📁 docs/               # Podrobné badatelské a metodické příručky (Markdown)
│   ├── badatelsky_pruvodce.md
│   ├── obyvatele_a_matriky.md
│   └── organizace_souboru.md
│
├── 📄 LICENSE             # Dvojí licence (MIT pro kód, CC BY-SA 4.0 pro data)
└── 📄 README.md           # Průvodní dokumentace projektu
```

### 📋 Přehled klíčových komponent

| Složka / Soubor | Typ | Účel a obsah |
| :--- | :--- | :--- |
| **`index.html`** | Aplikace | Jednostránková aplikace (SPA), modální okna pro detaily budov, osob a map. |
| **`app.js`** | Aplikační logika | Řízení Leaflet mapy, prolínání WMS vrstev ČÚZK, historických map a vyhledávání. |
| **`data/`** | Datové moduly | Propojené biografické a topografické záznamy pro rychlé načtení bez nutnosti backendu. |
| **`assets/maps/`** | Mapové podklady | Webově optimalizované rastry (Müller 1716, Stabilní katastr 1834, I.–III. vojenské mapování). |
| **`assets/archives/`** | Archiválie | Odlehčené náhledy sčítacích archů a matrik s přímou vazbou na originály v ZAO. |
| **`docs/`** | Badatelská příručka | Návody ke čtení kurentu, rozboru parcelních knih a orientaci v archivních fondech. |

---

## ⚖️ Licence & Právní doložka

- **Kód aplikace:** Licencován pod [MIT License](LICENSE) – volné použití a modifikace.
- **Texty a strukturovaná data:** Licencovány pod [Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)](https://creativecommons.org/licenses/by-sa/4.0/).
- **Data třetích stran:**
  - Podkladová mapa a budovy: © OpenStreetMap contributors (licence ODbL).
  - Katastrální a geodetická data: © ČÚZK / ÚAZK (Otevřená data a volná díla).
  - Archivní reprodukce: Zemský archiv v Opavě (§ 27a Autorského zákona).
- **Ochrana osobních údajů (GDPR):** Projekt obsahuje výhradně historická data již zesnulých osob (do roku 1921). V souladu s recitálem 27 nařízení GDPR se nařízení nevztahuje na osobní údaje zesnulých osob.
