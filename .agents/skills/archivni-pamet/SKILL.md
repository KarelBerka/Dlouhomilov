---
name: archivni-pamet
description: Sdílená archivní paměť pro agenty pracující se skilly rodokmen (sarsonj), dejiny-domu (vzoha) a obecními projekty (Dlouhomilov, České Petrovice). Zjišťuje orientační body T0, písařské profily, dříve přečtené zápisy v hybridním režimu MCP a synchronizuje data zpět přes sync-all.
---

# Archivní paměť (`ArchivniPamet`) – pracovní postup agenta (hybridní režim)

Používej tento skill **před každým otevřením webového portálu archivu** (ZAO Opava, ARON, Porta fontium, MZA Brno, SOA Praha, SOA Třeboň, AHMP). Šetříš tím denní limity badatelen (CAPTCHA) i tokeny.

## 1. Spuštění a MCP na Windows (Antigravity)
Globálně zaregistrovaný MCP server `archivni-pamet` běží v **hybridním režimu**:
- **Živě čte** orientační body `T0`, písařské profily, fulltext FTS5 a již přečtené zápisy.
- **Živě zapisuje pouze `T0` navigační body** (`submit_landmark`: začátek roku/obce/rejstříku, prázdné ruby, neúspěšně prohledané rozsahy).
- **Hotové přepisy zápisů** zapisuj vždy čistě do souborů zdrojového projektu (`data/`, `houses.js`, `domy_1771_1921.json`), odkud se do Archivní paměti načtou dávkově příkazem `pamet.py sync-all` (prevence duplicitního dvojhlasu).

Příkaz pro CLI (Python 3.14):
```powershell
$py = "C:\Users\krapn\AppData\Local\Python\pythoncore-3.14-64\python.exe"
& $py -X utf8 e:\Dropbox\Antigravity\ArchivniPamet\pamet.py --help
```

## 2. Povinný postup před listováním v archivu
1. **Najdi svazek a startovní snímek (`T0`):**
   - MCP: `lookup_volume(place="Dlouhomilov", year=1907, record_type="O")` nebo `lookup_volume(place="České Petrovice", year=1921, record_type="S")`
   - CLI: `pamet.py lookup-volume "Dlouhomilov" --year 1907 --type O`
   - Zkontroluj `skip_scans` (prázdné ruby a už prohledané negativní rozsahy), ať neotevíráš zbytečné snímky.
2. **Stáhni si písařský tahák knihy:**
   - MCP: `get_scribe_profile(volume_or_url="Zá II 7", format="markdown")`
   - Získáš přesná jména sloupců `[Sloupec]`, místní varianty příjmení a ověřené vzorové přepisy.
3. **Ověř, zda snímek už nebyl přečten (`lookup_scan`):**
   - MCP: `lookup_scan(volume_or_url="Zá II 7", scan_index=38)`
   - Pokud je zápis na stupni **`T3` nebo `T4`**, text můžeš přímo převzít s citací.
   - Pokud je zápis ve stavu **`T1`**, nástroj záměrně skryje podrobný přepis (`reveal_draft=false`), abys neopsal cizí chybu. Přečti snímek sám v plném rozlišení (`--split`) a ulož výsledek do zdrojového projektu.
4. **Ulož nově objevenou orientaci v knize (`submit_landmark`):**
   - Jakmile v archivu zjistíš, kde začíná rok, obec, index nebo které snímky jsou prázdné/negativní, pošli to přes `submit_landmark(..., source_project="mcp-<projekt>")`.
5. **Fulltext před hledáním naslepo:**
   - MCP: `search_archive_memory(query="Dvořák 1879", settlement="Dlouhomilov")`

## 3. Synchronizace a Korektovna po dokončení práce
* **Nikdy neposílej binární snímky** (`.jpg`, `.png`) do `commons/` ani `exports/`.
* Ochranné lhůty (`privacy.py`) automaticky drží živé osoby (`N < 100`, `O < 75`, `Z < 30`, `S > 1921`) a záznamy bez archivního zdroje jen v lokální SQLite cache.
* Po dokončení kola bádání spusť jednotnou synchronizaci přes všechny projekty:
  ```powershell
  & $py -X utf8 e:\Dropbox\Antigravity\ArchivniPamet\pamet.py sync-all
  ```
* Pro kontrolu sporných čtení s lupou, filtrováním a rozdělením falešných sporů spusť **Korektovnu**:
  ```powershell
  & $py -X utf8 e:\Dropbox\Antigravity\ArchivniPamet\pamet.py serve --port 8765
  ```
* Vyřešené opravy exportuj jako read-only seznam pro zdrojové projekty:
  ```powershell
  & $py -X utf8 e:\Dropbox\Antigravity\ArchivniPamet\pamet.py export-fixes --format markdown
  ```
