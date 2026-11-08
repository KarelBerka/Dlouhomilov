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

### Krok 1: Bezpečné stažení master scanu (Full resolution)
* **Pravidlo nulového scrapingu:** Nikdy nesahat na webové rozhraní `digi.archives.cz`. Stahovat pouze dlaždice přímo ze serveru `images.archives.cz` s povinnou hlavičkou `'Referer': 'https://digi.archives.cz/'`.
* **Nástroj:** Skript `pracovni/scitani_1921/dlouhomilov_zoomify.py`.
* **Příkaz:**
  ```powershell
  python pracovni/scitani_1921/dlouhomilov_zoomify.py <URL> 1 temp_inspect.jpg
  ```
  *(Úroveň přiblížení `1` odpovídá plnému rozlišení, obvykle 3127 × 2186 px).*

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

### Krok 4: Paleografický přepis a demografická analýza
Agent provede detailní ořez a analýzu:
1. **Záhlaví:**
   * Osada: např. `Medelsky u. 3 dvory` (Dreihöfen / Tři Dvory)
   * Číslo domu: orientační/popisné (pozor na označení křídel, např. `3 1` až `3 5`)
   * Číslo bytu a bytová strana (hlava rodiny / majitel bytu)
2. **Tabulka obyvatel (sloupce 1–20):**
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
```powershell
git add assets/archives/ data/houses.js data/census_registry.js
git commit -m "feat(scitani1921): <stručné shrnutí domu, bytu a obyvatel>"
git push origin main
```

### Krok 8: Zpětná vazba pro badatele
V odpovědi badateli:
1. Zobrazit přehlednou markdown tabulku všech přepsaných osob s běžnými čísly.
2. Zmínit zajímavé mikrohistorické nálezy (povolání, firmy, původ).
3. Jasně uvést číslo následujícího snímku v archivu a odkud mají pokračovat běžná čísla obyvatel.

---

## 4. Důležitá pravidla a úskalí

1. **Pravidlo diakritiky pro osady:**
   * Vždy striktně **Medelské** (s diakritikou, nikdy *Nedelske* ani *Medelske*).
   * Stejně tak **Benkov** a **Dlouhomilov**.
2. **Kódování v Python skriptech (Windows cp1250 vs. UTF-8):**
   * Všechny pomocné Python skripty musí začínat:
     ```python
     import sys
     sys.stdout.reconfigure(encoding='utf-8')
     ```
   * Soubory otevírat výhradně s `encoding='utf-8'`.
3. **Komplexní dvory a číslování stavení:**
   * V osadě Medelské (Tři Dvory / *Dreihöfen*) komisař čísloval stavení areálu čp. 3 jako `3 1`, `3 2.`, `3 3.`, `3 4.`, `3 5.`. Stavení `3 5` obsahovalo dva byty (Byt 1 – Knírovi, Byt 2 – Leharovi).
   * Při transkripci vždy pečlivě rozlišovat číslo stavení a číslo bytu.
