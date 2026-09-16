# Summary_Dlouhomilov.md

Aktualizovano: 2026-09-16

---

## PROJEKT

**Dlouhomilov - Interaktivni historicko-genealogicka mapa a databaze obyvatel obce**

Staticka webova aplikace (Leaflet.js + Tailwind CSS) nasazena pres GitHub Pages.
- **Live web:** https://karelberka.github.io/Dlouhomilov/
- **Repozitar:** https://github.com/KarelBerka/Dlouhomilov.git (vetev `main`)
- **Lokalni workspace:** c:\Users\krapn\Dropbox\Antigravity\Dlouhomilov
- **Licence:** Creative Commons BY-NC-SA 4.0

---

## HOTOVO

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
  - Ukladani do LocalStorage + generovani JS kodu
  - Kalibrace vsech 6 map dokoncena a commitnuta
- Databaze obyvatel a scitani lidu (census_registry.js) s filtry a propojenimi
  - Vycisteny duplicity: cp. 46, cp. 110, cp. 1, cp. 29
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

Zadny otevrely ukol. Pracovni strom je cisty, vse pushnuto (posledni commit: bf0f5f9).

**Mozne navazujici kroky:**
1. Doplneni dalsich usedlosti / obyvatel do databaze
2. Kalibrace novych mapovych vrstev (pokud pribudou)
3. Rozsireni record linkage pres vice scitani
4. Pridani matricnich zaznamu do archivniho prohliZece

---

## KONTEXT

### Kriticka pravidla
- Nazev osady: vzdy **Medelske** (nikdy Nedelske, nikdy bez diakritiky)
- Validace JS pred commitem: node -c app.js a node -c data/maps.js
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
