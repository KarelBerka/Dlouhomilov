# 📁 Organizace souborů a archivních scanů pro Dlouhomilov

Tento dokument slouží jako **metodický návod**, jak organizovat a ukládat naskenované dokumenty, historické mapy a fotografie z archivů do webové aplikace.

---

## 🏛️ 1. Složková struktura projektu

Všechny vizuální a archivní materiály jsou uloženy v hlavní složce `assets/`:

```
c:\Users\krapn\Dropbox\Antigravity\Dlouhomilov\
├── assets/
│   ├── archives/                  # Naskenované archiválie (sčítání, katastry, matriky, smlouvy)
│   │   ├── cp29/                  # Usedlost čp. 29 (Grunt u Dvořáků)
│   │   │   ├── scitani_1921.jpg   # Scan originálního sčítacího operátu 1921
│   │   │   ├── scitani_1910.jpg   # Scan sčítacího operátu 1910
│   │   │   ├── scitani_1890.jpg   # Scan sčítacího operátu 1890
│   │   │   ├── scitani_1869.jpg   # Scan sčítacího operátu 1869
│   │   │   ├── katastr_1834.jpg   # Výřez Císařského otisku stabilního katastru (st. 38)
│   │   │   ├── evidencni_list_iispp.jpg # Původní evidenční list památky NPÚ MIS ID 1139925
│   │   │   └── smlouva_1885.jpg   # Gruntovní / pozemková smlouva
│   │   ├── cp7/                   # Bývalá dědičná rychta (čp. 7)
│   │   ├── cp5/                   # Usedlost čp. 5
│   │   ├── cp24/                  # Usedlost čp. 24
│   │   ├── cp43/                  # Usedlost ve svahu čp. 43
│   │   └── cp1/                   # Kostel Všech svatých
│   ├── photos/                    # Historické i moderní fotografie objektů
│   │   ├── cp29/
│   │   │   ├── celkovy_pohled.jpg
│   │   │   ├── stit_malba.jpg
│   │   │   └── interier_klenby.jpg
│   │   └── cp7/
│   └── maps/                      # Mapové vrstvy a plány
│       ├── stabilni_katastr_1834_dlouhomilov.jpg
│       └── indikacni_skica_1834.jpg
├── data/
│   ├── houses.js                  # Databáze domů a vazby na soubory scanů
│   └── guide.js                   # Slovníček kurentu a archivní rozcestník
├── app.js                         # Logika mapy, vyhledávání a Archivního prohlížeče (Lightbox)
└── index.html                     # Webové rozhraní
```

---

## 🏷️ 2. Konvence pojmenování souborů

Aby byly soubory snadno dohledatelné a web na ně mohl spolehlivě odkazovat, dodržujte následující formát:

| Typ archiválie | Doporučený název souboru | Zdroj v archivu |
| :--- | :--- | :--- |
| **Sčítání lidu 1921** | `scitani_1921.jpg` | Zemský archiv v Opavě / SOkA Šumperk (fond OÚ Zábřeh) |
| **Sčítání lidu 1910** | `scitani_1910.jpg` | Zemský archiv v Opavě (fond Okresní hejtmanství Zábřeh) |
| **Sčítání lidu 1890** | `scitani_1890.jpg` | Zemský archiv v Opavě (digi.archives.cz) |
| **Sčítání lidu 1869** | `scitani_1869.jpg` | Zemský archiv v Opavě (digi.archives.cz) |
| **Stabilní katastr (1834)** | `katastr_1834.jpg` | Ústřední archiv zeměměřictví a katastru (ÚAZK ČÚZK) |
| **Evidenční list památky** | `evidencni_list_iispp.jpg` | NPÚ IISPP MIS |
| **Pozemková kniha / Smlouva** | `smlouva_[ROK].jpg` | SOkA Šumperk (Pozemková kniha k.ú. Dlouhomilov) |
| **Matriční záznam (N, O, Z)** | `matrika_[TYP]_[ROK]_[JMENO].jpg` | ZAO (digi.archives.cz) |

> [!TIP]
> **Podporované formáty souborů:**
> Webový prohlížeč nativně podporuje obrázky ve formátu **`.jpg`**, **`.jpeg`**, **`.png`**, **`.webp`** a **`.svg`**.
> Pro nejlepší kvalitu a rychlé načítání doporučujeme ukládat skeny v rozlišení cca 2000–3000 px s kvalitou JPEG 85–90 %.

---

## 🔍 3. Jak funguje proklik na webu

V aplikaci funguje **interaktivní Archivní prohlížeč (Lightbox Viewer)**:
1. **Ve sčítání lidu:** Kliknutím na tlačítko **„🔍 Prohlédnout archivní scan sčítacího listu“** se otevře naskenovaný originál přímo v prohlížeči.
2. **V časové ose:** Každý časový bod má ikonku náhledu scanu.
3. **V přepisech pramenů:** U každého dokumentu je tlačítko **„📄 Zobrazit originální scan z archivu“**.
4. **V kartě Stabilního katastru:** Tlačítko **„🗺️ Zobrazit císařský otisk 1834“**.

Archivní prohlížeč nabízí:
- Zvětšení / zmenšení scanu (Zoom)
- Prohlížení detailů v plném rozlišení
- Tlačítko pro stažení originálního souboru
- Zobrazení přesné archivní citace a fondu.
