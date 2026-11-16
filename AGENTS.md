# Pravidla projektu Dlouhomilov, Medelské & Benkov

## 1. Správa Gitu a souběžná práce více agentů (Dropbox)

- **Commit a push pouze na vyžádání v určené konverzaci:** Na projektu v `E:\Dropbox\Antigravity\Dlouhomilov` často pracuje více nezávislých konverzací současně. Nikdy nespouštěj `git add`, `git commit` ani `git push` automaticky na konci dílčího úkolu – prováděj je pouze na výslovný pokyn uživatele v konverzaci určené pro správu Gitu (v režimu **Turbo**).
- **Kontrola před commitem:** Před každým `git add` vždy zkontroluj `git status --short` a `git diff --stat`, aby se do commitu nepřibalily rozpracované dočasné soubory nebo surové skeny.
- **Zákaz verzování surových pracovních skenů:** Složky se surovými master skeny, výřezy a mezivýsledky (`pracovni/`, `scitani_1910/`, `scratch/`, `tmp*/`) nesmí být přidány do Gitu (musí zůstat v `.gitignore`). Do repozitáře patří pouze optimalizované webové náhledy v `assets/archives/`.
- **Kódování commit zpráv na Windows:** Víceřádkové zprávy commitů s českou diakritikou předávej přes UTF-8 soubor (`git commit -F <cesta>`), aby nedošlo k poškození znaků v PowerShellu.

## 2. Sekce Aktuality (`data/news.js`) při commitech

- **Automatická příprava aktuality u větších změn:** Kdykoli připravuješ `git commit`, vyhodnoť rozsah změn. Pokud jde o dostatečně významnou změnu (nová etapa archivního výzkumu, nová kapitola či studie, větší dávka přepsaných sčítacích archů, nový modul nebo podstatná funkce webu) a odpovídající záznam ještě není v `data/news.js`, před commitem jej doplň na začátek pole `newsData`.
- **Povinná struktura položky v `data/news.js`:**
  - `id`: `news_YYYY_MM_DD_<slug>`
  - `date`: `YYYY-MM-DD`
  - `category`: `"feature"` | `"census"` | `"analysis"`
  - Plně trojjazyčné texty (**CZ / EN / DE**): `badge` / `badgeEn` / `badgeDe`, `title` / `titleEn` / `titleDe`, `summary` / `summaryEn` / `summaryDe` a pole `links` (`label`, `labelEn`, `labelDe`, `href`) odkazující na příslušné podstránky.

## 3. Architektura webu, prameny a názvosloví

- **Vícestránková struktura:** Web je rozdělen na samostatné stránky `index.html` (rozcestník + Aktuality), `pribeh.html`, `mapa.html` (mapa + Atlas 16 map), `obyvatele.html` (stránkovaný rejstřík + profily), `demografie.html`, `reference.html` (katalog pramenů ČSN ISO 690 + Badatelský průvodce) a `cluster.html`. Nepoužívej zastaralé odkazy na `#badatelna-hub-section` ani `switchHubSection(...)`.
- **Evidence pramenů a překladů:** Nově zapracované archivní fondy, mapy a literaturu doplňuj do `data/references.js` dle normy ČSN ISO 690 a textové novinky udržuj v souladu s překlady CZ / EN / DE v `data/i18n.js`.
- **Pravopis osad:** Vždy striktně **Medelské** (s diakritikou, nikdy *Nedelské* ani *Medelske*), **Dlouhomilov** (*Lomigsdorf*) a **Benkov** (*Benke*).
