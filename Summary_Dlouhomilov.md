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
