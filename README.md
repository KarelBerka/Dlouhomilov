# 🗺️ Dlouhomilov – Interaktivní historicko-genealogická mapa obce

[![License: MIT](https://img.shields.io/badge/Code_License-MIT-yellow.svg)](LICENSE)
[![License: CC BY-SA 4.0](https://img.shields.io/badge/Data_License-CC_BY--SA_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-sa/4.0/)
[![Web: Vanilla JS](https://img.shields.io/badge/Stack-Vanilla_JS_|_Leaflet_|_Tailwind-blue.svg)](index.html)

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

## 🚀 Spuštění projektu

Projekt je vytvořen jako čistá klientská webová aplikace (Single Page Application bez nutnosti kompilace či Node.js backendu).

### 1. Lokální spuštění
Stačí otevřít soubor index.html v libovolném moderním webovém prohlížeči, nebo spustit lokální HTTP server:
`ash
# Pomocí Pythonu
python -m http.server 8000
`
A v prohlížeči otevřít: http://localhost:8000

### 2. Nasazení na GitHub Pages
1. V nastavení tohoto repozitáře na GitHubu přejděte do **Settings** -> **Pages**.
2. V sekci **Build and deployment** zvolte:
   - **Source:** Deploy from a branch
   - **Branch:** main / / (root)
3. Uložte nastavení. Během minuty bude web dostupný na adrese:  
   https://karelberka.github.io/Dlouhomilov/

---

## 📂 Struktura projektu

`	ext
├── index.html              # Hlavní HTML struktura aplikace a modální dialogy
├── app.js                  # Aplikační logika, inicializace Leaflet mapy, filtry a vrstvy
├── styles.css              # Vlastní CSS styly a design
├── data/
│   ├── maps.js             # Databáze a metadata historických map (1716–1983)
│   ├── houses.js           # Databáze stavení, gruntů a časových os držby
│   ├── people.js           # Genealogická a biografická databáze obyvatel
│   └── guide.js            # Texty a metodika badatelského průvodce
├── assets/
│   ├── maps/               # Optimalizované rastry georeferencovaných a historických map
│   └── archives/           # Náhledy archivních scanů (matriky, sčítání lidu, gruntovnice)
├── docs/                   # Podrobná badatelská a genealogická dokumentace v Markdownu
├── LICENSE                 # Licenční ujednání (MIT + CC BY-SA 4.0)
└── README.md               # Dokumentace projektu
`

---

## ⚖️ Licence & Právní doložka

- **Kód aplikace:** Licencován pod [MIT License](LICENSE) – volné použití a modifikace.
- **Texty a strukturovaná data:** Licencovány pod [Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)](https://creativecommons.org/licenses/by-sa/4.0/).
- **Data třetích stran:**
  - Podkladová mapa a budovy: © OpenStreetMap contributors (licence ODbL).
  - Katastrální a geodetická data: © ČÚZK / ÚAZK (Otevřená data a volná díla).
  - Archivní reprodukce: Zemský archiv v Opavě (§ 27a Autorského zákona).
- **Ochrana osobních údajů (GDPR):** Projekt obsahuje výhradně historická data již zesnulých osob (do roku 1921). V souladu s recitálem 27 nařízení GDPR se nařízení nevztahuje na osobní údaje zesnulých osob.
