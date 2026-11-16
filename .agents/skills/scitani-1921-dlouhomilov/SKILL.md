---
name: scitani-1921-dlouhomilov
description: Metodika a automatizovaný workflow pro systematické zpracování sčítacích operátů z roku 1921 (ZAO Opava, inv. č. 1863, fascikl 3) pro obec Dlouhomilov a osadu Medelské. Zahrnuje stahování Zoomify dlaždic, archivní ukládání, generování webových náhledů, transkripci obyvatel, aktualizaci data/houses.js, rebuild rejstříku obyvatel a publikaci na GitHub.
---

# Sčítání lidu 1921 – Metodika zpracování operátů (Dlouhomilov a Medelské)

Tento skill standardizuje a automatizuje proces zpracování originálních sčítacích archů ze sčítání lidu k 15./16. únoru 1921 z fondu Zemského archivu v Opavě (ZAO Opava) pro obec Dlouhomilov a přilehlé osady Medelské a Benkov.

---

## 1. Archivní pramen a provenience

* **Archiv:** Zemský archiv v Opavě (SOkA Šumperk / OSP Zábřeh)
* **Fond:** Sčítání lidu 1921
* **Lokalita:** Obec Dlouhomilov (politický a soudní okres Zábřeh, Morava)
* **Pomůcka:** su1000, č. pom. 411
* **Jednotka:** inv. č. 1863, fascikl 3 (Dlouhomilov, Medelské, Benkov)
* **Trvalý odkaz (permalink):** [digi.archives.cz – permalink](https://digi.archives.cz/da/permalink?xid=D36C5F62DA6211E2AE1C0019D13F29DB)

---

## 2. Rychlý postup pro badatele v prohlížeči

Badatel v digitálním prohlížeči archivu (`digi.archives.cz`) otevře požadovaný snímek a zkopíruje odkaz na Zoomify dlaždice:

1. Otevřít vývojářskou konzoli prohlížeče stiskem klávesy **F12** (nebo pravým tlačítkem myši -> *Prozkoumat* -> záložka *Console*).
2. Zadat jednořádkový příkaz:
   ```javascript
   copy(window.zoomifyImgPath); console.log("Zkopírováno:", window.zoomifyImgPath);
   ```
3. Odkaz dlaždic ve formátu `https://images.archives.cz/ximage/common/zoomify/.../<uuid>.jpg` vložit do chatu agentovi.

---

## 3. Workflow agenta (krok za krokem)

Při obdržení Zoomify URL provede agent následující sekvenci operací:

### Krok 1: Bezpečné a šetrné stažení master scanu (Full resolution)
* **Pravidlo nulového scrapingu a ochrany archivu:**
  * Nikdy nesahat skriptem na webové rozhraní `digi.archives.cz` a nikdy nespouštět paralelní smyčky ani dávky přes celé svazky.
  * **Omezení ZAO Opava (od 11/2026):** Archiv hlídá rychlé dotazy a má denní limit (cca **50 snímků/den**). Pokud server vrátí HTTP `403`, `429`, `503` nebo `404` či hlášku „Access blocked“ / „Server Exception“, **okamžitě skončit**, blokaci neobcházet a ten den už z ZAO Opava nestahovat. *(Pozn.: „Server Exception“ hned po CAPTCHA limit není – stačí znovu otevřít `https://digi.archives.cz/da/`).*
  * Před stažením vždy ověřit, zda už scan není v `pracovni/` nebo v archivu (stejný snímek nestahovat dvakrát).
* **Cesta A – šetrný Zoomify skript (pokud máš `zoomifyImgPath`):**
  * Nástroj: `pracovni/scitani_1921/dlouhomilov_zoomify.py` (sekvenční stahování s prodlevou `--delay 0.15`, povinný `'Referer': 'https://digi.archives.cz/'`, automatické rozdělení `--split` a případné zesílení `--enhance`).
  * Příkaz:
    ```powershell
    python -X utf8 pracovni/scitani_1921/dlouhomilov_zoomify.py <URL> 1 temp_inspect.jpg --split
    ```
    *(Úroveň přiblížení `1` odpovídá plnému rozlišení, obvykle 3127 × 2186 px. Pro vybledlé tužkové poznámky přidej `--enhance`.)*
* **Cesta B – záložní postup přes prohlížeč (když ZAO Opava skript odmítá):**
  * V prohlížeči otevřít snímek přímou adresou `/da/showZoomifySeparate?imageNumberSeparate=N&myEntityUuid=<entita>&myImageUuid=<uuid>` (pauza min. **5 s** mezi snímky, žádné `fetch` smyčky) a uložit snímek tlačítkem stažení v prohlížeči (nebo zachytit načtené dlaždice v Playwrightu bez dotazů navíc), poté nad uloženým souborem spustit `--split [--enhance]`.
  * **Záloha FamilySearch:** Matriky a pozemkové knihy ZAO Opava jsou i na FamilySearch v plném rozlišení bez CAPTCHA (párování přes `vol. NNNN` = inv. č. ZAO; **pozor na posun čísel snímků**, vždy ověřit podle folia, roku a jmen).

### Krok 2: Uložení master scanu do rodokmenového archivu
Scan se zkopíruje do trvalého archivu v plném rozlišení se standardizovanou archivní signaturou:
* **Adresář:** `c:\Users\krapn\Dropbox\CV\!Rodokmen\Dokumenty_Berkove\Scitaci_archy\Dlouhomilov_1921\`
* **Formát názvu:**
  `su1000_c_pom_411_inv_c_1863_fascikl_3_null_<osada>_cp<N>_1921_<scan_num>[_byt<M>].jpg`
  * Příklady:
    * `...null_medelske_cp3_1921_0583_byt6.jpg`
    * `...null_dlouhomilov_cp30_1921_0080.jpg`

### Krok 3: Generování optimalizovaného webového náhledu
Pro plynulé načítání v prohlížeči se vygeneruje zmenšený náhled:
* **Cíl:** `assets/archives/<house_id>/<house_id>_1921_<scan_label>.jpg`
* **Parametry:** Šířka přesně **1400 px** (poměr stran zachován, výška cca 978 px), komprese **JPEG kvalita 70**, optimalizováno pro web, cílová velikost souboru **110–150 kB**.

### Krok 4: Paleografický přepis, kontrola kvality a demografická analýza
Agent provede detailní ořez a ověření (nikdy nečíst jen z celkového zmenšeného náhledu):
1. **Půlení a zesílení snímku (prevence halucinací):**
   * Široký sčítací arch vždy číst z rozdělených výřezů (`--split` vytvoří `*_header.jpg`, `*_left.jpg` pro sl. 1–10, `*_right.jpg` pro sl. 11–20 a `*_bottom.jpg`).
   * U vybledlého inkoustu nebo tužkových poznámek použít `--enhance` (kontrastní šedá verze) a porovnat s originálem.
2. **Značení jistoty a poctivost přepisu:**
   * Nejisté čtení označit **`(?)`**, nečitelné místo **`[…]`** – **nic nedomýšlet** z kontextu.
   * Přísně rozlišovat **`doc`** (údaj přímo přečtený na snímku) vs. **`prob`** (odvozeno, shoda jména bez přímého dokladu, sporné čp.).
   * **Pravidlo dvou nezávislých znaků:** Osobu nebo dům ztotožnit s jiným záznamem (např. sčítání 1910, matrika) jen při shodě alespoň **dvou nezávislých znaků** (čp. + oba rodiče/manžel, přesné datum narození apod.).
   * Číst celý zápis včetně **okrajů a dodatečných vpisků tužkou** (poznámky o úmrtí, sňatku, změně bydliště, vojenské službě).
3. **Záhlaví:**
   * Osada: např. `Medelsky u. 3 dvory` (Dreihöfen / Tři Dvory)
   * Číslo domu: orientační/popisné (pozor na označení křídel, např. `3 1` až `3 5`)
   * Číslo bytu a bytová strana (hlava rodiny / majitel bytu)
4. **Tabulka obyvatel (sloupce 1–20):**
   * Sl. 20 (zcela vpravo): **Běžné číslo v obci** (klíčové pro posloupnost sčítání).
   * Sl. 1–3: Příjmení a jméno.
   * Sl. 4: Příbuzenský nebo jiný poměr k majiteli bytu.
   * Sl. 5–6: Pohlaví a rodinný stav.
   * Sl. 7–8: Datum a místo narození (obec, soudní okres, země).
   * Sl. 9–10: Od kdy bydlí v obci, domovská příslušnost.
   * Sl. 11–13: Národnost, náboženské vyznání, gramotnost.
   * Sl. 14–17: Povolání, postavení v zaměstnání, přesný název a sídlo firmy/zaměstnavatele (vyhledávat vazby na stavitelskou firmu **Adolfa Berky ve Frankštátě**, šumperské architekty jako **Ing. Hubert Gässinger**, textilky **Eduard Oberleithner**, bělidla v Sudkově atd.).
   * Sl. 18–19: Povolání a postavení k 16. červenci 1914.

### Krok 5: Aktualizace databáze domů (`data/houses.js`)
Do objektu daného domu (`dlouhomilov_cpX` nebo `medelske_cpX`) doplnit / aktualizovat:
* `localName`: Doplnit nově zjištěné rodiny.
* `description`: Aktualizovat souhrn obyvatel a bytových stran.
* `timeline`: Doplnit narození, příchody obyvatel a záznam k roku 1921.
* `census1921.scans`: Přidat nově zpracovaný scan s přesnou citací SOkA Šumperk.
* `census1921.inhabitants`: Doplnit pole obyvatel (`name`, `relation`, `birthDate`, `birthPlace`, `religion`, `nationality`, `occupation`, `literacy`, `scanFile`).
* `stories`: Zaznamenat mikrohistorické postřehy (řemeslné dílny, stavební ruch, rodopisné vazby).

### Krok 6: Rebuild a kontrola integrity rejstříku
Spustit kompilaci rejstříku:
```powershell
node build_registry.js
```
* **Kritéria úspěchu:**
  * Počet záznamů v `data/census_registry.js` vzroste přesně o počet nově zapsaných osob.
  * Hlášení: `Integrity check OK: Všechny linkedCensusIds v data/people.js odpovídají záznamům v rejstříku.` (přísně **0 chyb**).

### Krok 7: Verzování a odeslání do GitHubu
* **Pozor na souběh více agentů:** Prováděj pouze na výslovný pokyn badatele v konverzaci určené pro Git (režim **Turbo**). Při uzavření větší dávky archů nebo milníku sčítání před commitem doplň také trojjazyčný záznam do `data/news.js`.
```powershell
git add assets/archives/ data/houses.js data/census_registry.js data/news.js
git commit -m "feat(scitani1921): <stručné shrnutí domu, bytu a obyvatel>"
git push origin main
```

### Krok 8: Zpětná vazba pro badatele a evidence hledání
V odpovědi badateli:
1. Zobrazit přehlednou markdown tabulku všech přepsaných osob s běžnými čísly (včetně označení případných nejistot `(?)` / `[…]`).
2. Zmínit zajímavé mikrohistorické nálezy (povolání, firmy, původ, stopy do dalších pramenů).
3. Jasně uvést číslo následujícího snímku v archivu a odkud mají pokračovat běžná čísla obyvatel.
4. Průběžně evidovat prošlé (i prázdné/chybějící) snímky v `pracovni/scitani_1921/CHYBEJICI.md` nebo v deníku hledání, aby se stejný snímek v archivu neotvíral zbytečně víckrát.

---

## 4. Důležitá pravidla, licence a úskalí

1. **Podmínky publikování snímků (ZAO Opava):**
   * Vždy uvádět přesnou citaci (ZAO Opava / SOkA Šumperk, fond, inv. č., číslo snímku, permalink).
   * Přepisy, zjištění a odkazy lze publikovat volně; **veřejné publikování originálních snímků či výřezů ze ZAO Opava** podléhá souhlasu archivu (pro soukromý/badatelský web za heslem bez omezení).
2. **Pravidlo diakritiky pro osady:**
   * Vždy striktně **Medelské** (s diakritikou, nikdy *Nedelske* ani *Medelske*).
   * Stejně tak **Benkov** a **Dlouhomilov**.
2. **Kódování v Python skriptech (Windows cp1250 vs. UTF-8):**
   * Všechny pomocné Python skripty musí začínat:
     ```python
     import sys
     sys.stdout.reconfigure(encoding='utf-8')
     ```
   * Soubory otevírat výhradně s `encoding='utf-8'`, Python spouštět s `-X utf8`.
3. **Číslování domů v osadě Medelské (čp. 1–2 a čp. 31–42):**
   * Osada Medelské (Tři Dvory / *Dreihöfen*) měla ve sčítání 1921 dvě vlastní nízká čísla popisná (`medelske_cp1` = čp. 1, `medelske_cp2` = čp. 2) a dále domy zařazené do společné číselné řady Dlouhomilov–Medelské čp. 1–118.
   * Ověřením přímo na originálních bytových i sběrných arších bylo potvrzeno, že dříve uváděná označení `3 1` až `3 9` nejsou podčísla stavení u čp. 3, ale řádná **popisná čísla čp. 31–39** (v databázi historicky sdružená pod souhrnným ID `medelske_cp3`, např. čp. 35 mělo dva byty: Byt 1 – Knírovi, Byt 2 – Leharovi). Obdobně `medelske_cp4` odpovídá **čp. 40–41** a `medelske_cp5` odpovídá **čp. 42**.
   * Při transkripci vždy pečlivě rozlišovat skutečné číslo popisné (`popisné staré`), číslo bytu a případné přečíslování (číslo domu není automaticky totožnost domu bez ověření parcely/držitele).

---

## 5. Navazující prameny pro Dlouhomilov, Medelské a Benkov

Pro prohloubení historie domů a ověření nejasností ze sčítání 1921 využít osvědčené regionální prameny (Morava / pohraničí):
* **Starší sčítání lidu (1869–1910):** v projektu již rozpracováno v `scitani_1910/`.
* **Další fondy v ZAO Opava (`digi.archives.cz`):** matriky (podle čísla domu), pozemkové a gruntovní knihy, **evidenční karty domů s majiteli a obyvateli** a **Volkskartei / odsunové kartotéky** (dlaždice *Kartotéky*), **kroniky s OCR přepisem** (včetně kurentu – tlačítko *OCR* u snímku), **josefský katastr**.
* **Mapy a stabilní katastr (Archiv ČÚZK `ags.cuzk.gov.cz/archiv`):** **indikační skici** (červeně čp., černě stavební parcela – klíč k rozlišení přečíslování), pozemkový katastr, ortofoto CENIA z 50. let a stínovaný reliéf terénu DMR 5G (zaniklé cesty a stavby).
* **Vojáci 1. světové války (vazba na sl. 18–19 k 16. 7. 1914):** Evidence válečných hrobů MO ČR a rakouské seznamy ztrát 1914–1919 (ANNO).
* **Starší moravské a pohraniční prameny:** **lánové rejstříky** (1656–1679 v ARON MZA – moravský protějšek české berní ruly), **Heimatbücher** (hledat i pod německými názvy *Lomigsdorf*, *Medelsko* / *Dreihöfen*) a Národní archivní portál pro fondy obce v SOkA Šumperk (kroniky, škola, MNV, konfiskace po 1945).
