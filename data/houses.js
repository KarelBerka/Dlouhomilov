/**
 * Databáze stavení a pamětihodností obce Dlouhomilov
 * S autentickými přepisy sčítacích operátů z let 1857–1921 a přímými odkazy na originální archivní scany ZAO
 */
const housesData = [
  {
    "id": "cp29",
    "number": "29",
    "localName": "Venkovská usedlost čp. 29 (Grunt u Dvořáků)",
    "type": "Kulturní památka ČR (ÚSKP)",
    "isHeritage": true,
    "uskpNumber": "21975/8-870",
    "npuDirectUrl": "https://www.pamatkovykatalog.cz/venkovska-usedlost-534966",
    "iisppUrl": "https://iispp.npu.cz/mis/documentDetail.htm?id=1139925",
    "wikiUrl": "https://cs.wikipedia.org/wiki/Seznam_kulturn%C3%ADch_pam%C3%A1tek_v_Dlouhomilov%C4%9B",
    "wikidataId": "Q38234857",
    "commonsUrl": "https://commons.wikimedia.org/wiki/Category:Cultural_monuments_in_Dlouhomilov",
    "heritageDescription": "Nemovitá kulturní památka zapsaná v Ústředním seznamu kulturních památek ČR. Zděná a částečně roubená zemědělská usedlost z 1. poloviny 19. století se zachovalou dispozicí, hospodářským křídlem a klenutými prostorami.",
    "heritageSource": "Národní památkový ústav (NPÚ), Památkový katalog č. 534966 (ÚSKP 21975/8-870); Evidenční list památky IISPP MIS ID 1139925; Vyhláška MK ČR č. 249/1995 Sb.",
    "location": {
      "lat": 49.9069836,
      "lng": 16.9895956,
      "cadastralParcel": "st. 63 (stodola st. 62)",
      "landParcels": "115, 116, 117, 118",
      "source": "ČÚZK – Katastr nemovitostí & RUIAN, k.ú. Dlouhomilov (626431)"
    },
    "buildingFootprints": {
      "cadastralNumber1834": "st. 63 (stodola st. 62)",
      "cadastralNumberModern": "st. 63/1, st. 63/2, st. 62",
      "masonryType1834": "zděný trojkřídlý dvůr (st. 63) + dřevěná stodola (st. 62)",
      "changesSummary": "V roce 1834 tvořil Grunt u Dvořáků trojkřídlý zděný dvůr otevřený k severozápadu (parc. 63) a samostatnou dřevěnou stodolu (žlutá parc. 62). V průběhu 20. století bylo jedno křídlo ubouráno, v dnešní OpenStreetMap mapě zůstává zachováno obytné uliční křídlo čp. 29 a západněji stojící stodola.",
      "footprint1834": {
        "masonry": [
          [
            49.9071,
            16.98945
          ],
          [
            49.90715,
            16.98978
          ],
          [
            49.90685,
            16.98985
          ],
          [
            49.9068,
            16.98952
          ]
        ],
        "wooden": [
          [
            [
              49.90668,
              16.98905
            ],
            [
              49.90668,
              16.9893
            ],
            [
              49.90656,
              16.9893
            ],
            [
              49.90656,
              16.98905
            ]
          ]
        ]
      },
      "footprintModern": [
        [
          49.90712,
          16.98948
        ],
        [
          49.90712,
          16.98975
        ],
        [
          49.90685,
          16.98975
        ],
        [
          49.90685,
          16.98948
        ]
      ]
    },
    "statusStableCadastre": "Zděné obytné stavení (stavební parcela č. 63) a dřevěná stodola (stavební parcela č. 62).",
    "cadastreSource": "Ústřední archiv zeměměřictví a katastru (ÚAZK), Císařské povinné otisky stabilního katastru 1834, sign. MOR102618340.",
    "cadastreScan": "assets/archives/cp29/katastr_1834_autenticky.jpg",
    "description": "Tradiční moravská selská usedlost v památkové zóně Dlouhomilov. Historický grunt rodu Dvořáků reprezentující lidové stavitelství Zábřežska s dochovanou dispozicí dvora.",
    "timeline": [
      {
        "year": "1679",
        "owner": "Pavel Dvořák & Jakub Dvořák",
        "event": "Gruntovní kniha pro vsi Dlouhomilov a Medelské (fond Velkostatek Zábřeh): oddíl „Grunt Pawla Dworzaka“ (fol. 191 a násl.) se zápisy od roku 1679 a následnou „Koupí Jakuba Dvořáka“ (1684).",
        "sourceType": "verified",
        "source": "ZAO Opava, fond Velkostatek Zábřeh, Gruntovní kniha pro vsi Dlouhomilov a Medelské, inv. č. 164, sign. 428, fol. 191–212.",
        "scanFile": "assets/archives/gruntovnice/Gruntovni_kniha_pro_vsi_Dluhomilov_a_Medelske_inv_c_164_sig_428_191.jpg",
        "scanTitle": "Gruntovní kniha Dlouhomilov (1679) – Grunt Pavla Dvořáka (fol. 191)"
      },
      {
        "year": "1834",
        "owner": "Franz Dworzak (František Dvořák)",
        "event": "Zemědělský grunt zaznamenán v Císařském otisku stabilního katastru (stavební parcela 63 a stodola 62, dům čp. 29).",
        "sourceType": "verified",
        "source": "ÚAZK ČÚZK, Císařský otisk 1834, k.ú. Lomigsdorf, sign. MOR102618340.",
        "scanFile": "assets/archives/cp29/katastr_1834_autenticky.jpg",
        "scanTitle": "Stabilní katastr 1834 – parcela st. 63 a 62"
      },
      {
        "year": "1857",
        "owner": "Johann Dvořák (*1795)",
        "event": "Sčítání lidu 1857: majitel domu Johann Dvořák se synem Johannem (právník v Praze) a synem Karlem.",
        "sourceType": "verified",
        "source": "ZAO, fond OÚ Zábřeh, Sčítání 1857, karton 253, dům čp. 29.",
        "scanFile": "assets/archives/cp29/su1000_c_pom_411_inv_c_1299_karton_253_null_dlouhomilov_serie_cp_1_80_1857_0119.jpg",
        "scanTitle": "Sčítací arch 1857 – Johann Dvořák čp. 29"
      },
      {
        "year": "1869",
        "owner": "Karel Dvořák (*1839)",
        "event": "Sčítání 1869: hospodářství Karla Dvořáka s rodinou, bratrem Dr. Janem Dvořákem a chovem 49 ovcí.",
        "sourceType": "verified",
        "source": "ZAO, fond Okresní hejtmanství Zábřeh, Sčítání 1869, karton 300, arch čp. 29.",
        "scanFile": "assets/archives/cp29/su1000_c_pom_411_inv_c_1392_karton_300_null_dlouhomilov_serie_cp_1_80_1869_0105.jpg",
        "scanTitle": "Sčítací arch 1869 – Karel Dvořák čp. 29"
      },
      {
        "year": "1880",
        "owner": "Výměna držitelů",
        "event": "Sčítání 1880: stavení čp. 29 vedeno v soupisu jako neobydlené / v přestavbě.",
        "sourceType": "verified",
        "source": "ZAO, Sčítání 1880, karton 330, snímek 0085.",
        "scanFile": "assets/archives/cp29/su1000_c_pom_411_inv_c_1476_karton_330_null_dlouhomilov_serie_cp_1_4_30_44_50_1880_0085.jpg",
        "scanTitle": "Sčítací arch 1880 – Dlouhomilov čp. 29"
      },
      {
        "year": "1890",
        "owner": "Alois Dvořák (*1830)",
        "event": "Sčítání 1890: hospodář Alois Dvořák (rolník a tkadlec) s manž. Magdalenou a syny Janem a Josefem.",
        "sourceType": "verified",
        "source": "ZAO, Sčítání 1890, karton 356, snímky 0084–0086.",
        "scanFile": "assets/archives/cp29/su1000_c_pom_411_inv_c_1560_karton_356_null_dlouhomilov_serie_cp_1_3_50_52_53_1890_0084.jpg",
        "scanTitle": "Sčítací arch 1890 – Alois Dvořák čp. 29"
      },
      {
        "year": "1907",
        "owner": "Josef Dvořák (*1879) × Amálie Motyková (*1888)",
        "event": "Matriční zápis sňatku: Dne 15. 7. 1907 se oženil Josef Dvořák (* 3. 6. 1879 z čp. 22, syn Josefa Dvořáka a Anny roz. Kouřilové) s Amálií Motykovou (* 18. 7. 1888 Bludov), bytem na čp. 29. Oddával P. Alois Dvořák, farář na odpočinku.",
        "sourceType": "verified",
        "source": "ZAO Opava, Sbírka matrik, farnost Dlouhomilov, sign. Zá II 7 (O 1889–1929), snímek 38 (rejstřík sn. 342).",
        "scanFile": "assets/archives/matriky/O-_I-O-_Z-_I-Z_inv_c_11248_sig_Za_II_7_1889_-_1929_Dlouhomilov-_Horni_Olesna-_Dolni_Olesna_0342.jpg",
        "scanTitle": "Rejstřík matriky Zá II 7 – sňatek Josefa Dvořáka a Amálie Motykové (1907)"
      },
      {
        "year": "1910",
        "owner": "Josef Dvořák (*1879)",
        "event": "Sčítání 1910: rolnický majitel Josef Dvořák s manž. Amalií roz. Motykovou a tchyní.",
        "sourceType": "verified",
        "source": "ZAO, Sčítání 1910, karton 436, snímek 0083.",
        "scanFile": "assets/archives/cp29/su1000_c_pom_411_inv_c_1765_karton_436_null_dlouhomilov_serie_cp_1_115_1910_0083.jpg",
        "scanTitle": "Sčítací arch 1910 – Josef Dvořák čp. 29"
      },
      {
        "year": "1921",
        "owner": "Josef Dvořák (*1879)",
        "event": "První sčítání lidu ČSR: majitel usedlosti Josef Dvořák s rodinou a čeledí (8 osob v hl. hospodářství).",
        "sourceType": "verified",
        "source": "SOkA Šumperk / ZAO, fond Okresní úřad Zábřeh, Sčítání 1921, fascikl 3, snímek 0160.",
        "scanFile": "assets/archives/cp29/su1000_c_pom_411_inv_c_1863_fascikl_3_null_dlouhomilov_serie_cp_1_118_1921_0160.jpg",
        "scanTitle": "Sčítací arch ČSR 1921 – Josef Dvořák čp. 29"
      },
      {
        "year": "1938–1940",
        "owner": "Úmrtí hospodáře Josefa Dvořáka (†1938) a čeledína Jana Kamlera (†1940)",
        "event": "Matriční zápisy úmrtí na čp. 29: Dne 8. 9. 1938 umírá ve věku 59 let rolník Josef Dvořák (* 3. 6. 1879, syn Josefa Dvořáka a Anny roz. Kouřilové, sezdán 15. 7. 1907). V roce 1940 na čp. 29 umírá dlouholetý čeledín hospodářství Jan Kamler (* 20. 2. 1861 Rovensko), který na statku sloužil od roku 1888.",
        "sourceType": "verified",
        "source": "ZAO Opava, Sbírka matrik, farnost Dlouhomilov, sign. Zá II 10 (Z 1930–1949), snímky 175 a 177 (rejstřík sn. 219)."
      },
      {
        "year": "1947",
        "owner": "Josef Dvořák ml. (*1913) × Mária Katarína Zvonárová",
        "event": "Matriční zápis sňatku: Dne 7. 4. 1947 se oženil mladý hospodář Josef Dvořák (* 28. 6. 1913 na čp. 29, syn † Josefa Dvořáka a Amálie roz. Motykové) s Márií Katarínou Zvonárovou (* 21. 11. 1919 Dlhé Pole); za svědka byl švagr PhMr. Jaroslav Berka z Budišova nad Budišovkou (manžel sestry Marie *1920).",
        "sourceType": "verified",
        "source": "ZAO Opava, Sbírka matrik, farnost Dlouhomilov, sign. Zá II 10 (O 1930–1949), snímek 84 (rejstřík sn. 146)."
      },
      {
        "year": "1967/1995",
        "owner": "Památková ochrana",
        "event": "Zápis do státního seznamu kulturních památek ČR (založen evidenční list IISPP 1139925).",
        "sourceType": "verified",
        "source": "Ústřední seznam kulturních památek ČR, rejstř. č. 21975/8-870; IISPP NPÚ.",
        "scanFile": "assets/archives/cp29/evidencni_list_iispp.svg",
        "scanTitle": "Evidenční list kulturní památky (IISPP MIS ID 1139925)"
      }
    ],
    "census": [
      {
        "year": 1921,
        "date": "15. února 1921",
        "isSample": false,
        "archiveSource": "Zemský archiv v Opavě / SOkA Šumperk, fond Okresní úřad Zábřeh, Sčítání lidu 1921, fascikl 3, arch čp. 29 (snímky 0158, 0160, 0162)",
        "note": "Originální sčítací arch ČSR 1921. Dům byl rozdělen na 2 byty: Byt č. 1 (rodina Josefa Dvořáka, 8 osob) a Byt č. 2 (Teresie Tifenbachová, 2 osoby).",
        "scanFile": "assets/archives/cp29/su1000_c_pom_411_inv_c_1863_fascikl_3_null_dlouhomilov_serie_cp_1_118_1921_0160.jpg",
        "scanTitle": "Originální scan sčítacího archu 1921 – Dlouhomilov čp. 29",
        "inhabitants": [
          {
            "name": "Josef Dvořák",
            "relation": "Hlava domácnosti / Majitel",
            "birthDate": "3. 6. 1879",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "Rolník na vlastním gruntě",
            "literacy": "čte i píše"
          },
          {
            "name": "Amalie Dvořáková",
            "relation": "Manželka",
            "birthDate": "18. 7. 1888",
            "birthPlace": "Bludov",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "V domácnosti a hospodářství",
            "literacy": "čte i píše"
          },
          {
            "name": "Josef Dvořák ml.",
            "relation": "Syn",
            "birthDate": "28. 6. 1913",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "Dítě (školák)",
            "literacy": "čte i píše"
          },
          {
            "name": "Marie Dvořáková",
            "relation": "Dcera",
            "birthDate": "15. 6. 1920",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "Dítě (kojenec)",
            "literacy": "nečte"
          },
          {
            "name": "Jan Kamler",
            "relation": "Čeledín (zapsán původně jako hospodář, přeškrtnuto); v obci od 12. 11. 1888",
            "birthDate": "20. 2. 1861",
            "birthPlace": "Rovensko",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "Zemědělství / čeledín",
            "literacy": "čte i píše"
          },
          {
            "name": "Ladislav Brzan (?)",
            "relation": "Čeledín; v obci od 1. 1. 1919",
            "birthDate": "1901 (?)",
            "birthPlace": "Horní Olešná",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "Zemědělský čeledín",
            "literacy": "čte i píše"
          },
          {
            "name": "Ludmila Šulová",
            "relation": "Sloužka; v obci od 1. 1. 1916",
            "birthDate": "19. 11. 1896 (?)",
            "birthPlace": "Lukov (?)",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "Sloužka při rolnictví",
            "literacy": "čte i píše"
          },
          {
            "name": "Eliška Hrochová (?)",
            "relation": "Sloužka; v obci od 2. 3. 1898",
            "birthDate": "1897 (?)",
            "birthPlace": "Benkov",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "Sloužka při rolnictví",
            "literacy": "čte i píše"
          },
          {
            "name": "Teresie Tifenbachová",
            "relation": "Majitelka bytu č. 2 (výměnek)",
            "birthDate": "2. 12. 1840",
            "birthPlace": "Moravičany",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "Vede domácnost (ovdovělá)",
            "literacy": "čte i píše"
          },
          {
            "name": "Amálie Leharová",
            "relation": "Služebná u bytu č. 2",
            "birthDate": "31. 5. 1866",
            "birthPlace": "Rovensko",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "Služebná",
            "literacy": "čte i píše"
          }
        ],
        "livestock": {
          "horses": 2,
          "cattle": 6,
          "pigs": 4,
          "goats": 0,
          "poultry": 25,
          "beehives": 3
        }
      },
      {
        "year": 1910,
        "date": "31. prosince 1910",
        "isSample": false,
        "archiveSource": "Zemský archiv v Opavě, fond Okresní hejtmanství Zábřeh, Sčítání 1910, karton 436, dům čp. 29 (snímky 0082, 0083)",
        "note": "Rakousko-uherský sčítací arch. Hlava rodiny Josef Dvořák (rolnický majitel). V domě dále bydlela rodina Františka Krejčího (obuvník).",
        "scanFile": "assets/archives/cp29/su1000_c_pom_411_inv_c_1765_karton_436_null_dlouhomilov_serie_cp_1_115_1910_0083.jpg",
        "scanTitle": "Originální scan sčítacího archu 1910 – Dlouhomilov čp. 29",
        "inhabitants": [
          {
            "name": "Josef Dvořák",
            "relation": "Majitel / Hlava rodiny",
            "birthDate": "3. 6. 1879",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Rolnický majitel (Bauer)",
            "literacy": "čte i píše"
          },
          {
            "name": "Amalie Dvořáková (roz. Motyková)",
            "relation": "Manželka",
            "birthDate": "18. 7. 1888",
            "birthPlace": "Bludov",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Pomáhá v hospodářství",
            "literacy": "čte i píše"
          },
          {
            "name": "Amalie Motyková",
            "relation": "Tchyně (výměnkářka)",
            "birthDate": "3. 3. 1846",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Výměnkářka (vdova)",
            "literacy": "čte i píše"
          },
          {
            "name": "Jan Kamler",
            "relation": "Čeledín",
            "birthDate": "20. 2. 1861",
            "birthPlace": "Rovensko",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Polní pacholek",
            "literacy": "čte i píše"
          },
          {
            "name": "Anna Bosáková",
            "relation": "Děvečka",
            "birthDate": "31. 5. 1892",
            "birthPlace": "Rovensko",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Děvečka",
            "literacy": "čte i píše"
          },
          {
            "name": "Marie Vepřková",
            "relation": "Děvečka",
            "birthDate": "19. 10. 1892",
            "birthPlace": "Horní Libina",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Děvečka",
            "literacy": "čte i píše"
          },
          {
            "name": "František Krejčí",
            "relation": "Majitel podružského bytu",
            "birthDate": "12. 12. 1841",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Obuvník a malý hospodář",
            "literacy": "čte i píše"
          },
          {
            "name": "Anna Krejčí",
            "relation": "Manželka",
            "birthDate": "13. 12. 1843",
            "birthPlace": "Rovensko",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Vede domácnost",
            "literacy": "čte i píše"
          },
          {
            "name": "Františka Krejčí",
            "relation": "Dcera",
            "birthDate": "18. 10. 1878",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Dělnice / při hospodářství",
            "literacy": "čte i píše"
          }
        ],
        "livestock": {
          "horses": 2,
          "cattle": 7,
          "pigs": 3,
          "goats": 0,
          "poultry": 30,
          "beehives": 0
        }
      },
      {
        "year": 1890,
        "date": "31. prosince 1890",
        "isSample": false,
        "archiveSource": "Zemský archiv v Opavě, fond Sčítání lidu 1890, karton 356, obec Dlouhomilov, dům čp. 29 (snímky 0084–0087)",
        "note": "Zápis z roku 1890. V usedlosti hospodařil Alois Dvořák (rolník a tkadlec). Druhý byt užívala rodina tkadlce Hynka Churaného/Churavého.",
        "scanFile": "assets/archives/cp29/su1000_c_pom_411_inv_c_1560_karton_356_null_dlouhomilov_serie_cp_1_3_50_52_53_1890_0084.jpg",
        "scanTitle": "Originální scan sčítacího archu 1890 – Dlouhomilov čp. 29",
        "inhabitants": [
          {
            "name": "Alois Dvořák",
            "relation": "Hospodář (majetník bytu)",
            "birthDate": "2. 9. 1830",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "česká / moravská",
            "occupation": "Rolník a tkadlec",
            "literacy": "čte a píše"
          },
          {
            "name": "Magdalena Dvořáková",
            "relation": "Manželka",
            "birthDate": "2. 6. 1830",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "česká / moravská",
            "occupation": "Vedení domácnosti",
            "literacy": "čte a píše"
          },
          {
            "name": "Jan Dvořák",
            "relation": "Syn",
            "birthDate": "12. 10. 1866",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "česká / moravská",
            "occupation": "Zedník / zámečník pomocník",
            "literacy": "čte a píše"
          },
          {
            "name": "Josef Dvořák",
            "relation": "Syn",
            "birthDate": "8. 4. 1874",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "česká / moravská",
            "occupation": "Pomocná síla v hospodářství",
            "literacy": "čte a píše"
          },
          {
            "name": "Emílie Dvořáková",
            "relation": "Dcera",
            "birthDate": "2. 3. 1870",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "česká / moravská",
            "occupation": "Šití v domácnosti",
            "literacy": "čte a píše"
          },
          {
            "name": "Hynek Churaný / Churavý",
            "relation": "Hospodář bytu č. 2",
            "birthDate": "22. 10. 1835",
            "birthPlace": "Sloupnice / Strupšín",
            "religion": "římskokatolické",
            "nationality": "česká / moravská",
            "occupation": "Tkadlec",
            "literacy": "čte a píše"
          },
          {
            "name": "Anna Churaná",
            "relation": "Manželka",
            "birthDate": "20. 1. 1842",
            "birthPlace": "Sloupnice",
            "religion": "římskokatolické",
            "nationality": "česká / moravská",
            "occupation": "Vedení domácnosti",
            "literacy": "čte a píše"
          },
          {
            "name": "Alois Churaný",
            "relation": "Syn",
            "birthDate": "10. 11. 1867",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "česká / moravská",
            "occupation": "Zedník pomocník",
            "literacy": "čte a píše"
          },
          {
            "name": "Isidor Churaný",
            "relation": "Syn",
            "birthDate": "1. 12. 1860",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "česká / moravská",
            "occupation": "Zedník pomocník",
            "literacy": "čte a píše"
          },
          {
            "name": "Hynek Churaný ml.",
            "relation": "Syn",
            "birthDate": "3. 4. 1873",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "česká / moravská",
            "occupation": "Tkadlec",
            "literacy": "čte a píše"
          }
        ],
        "livestock": {
          "horses": 2,
          "cattle": 5,
          "pigs": 2,
          "goats": 1,
          "poultry": 18,
          "beehives": 0
        }
      },
      {
        "year": 1869,
        "date": "31. prosince 1869",
        "isSample": false,
        "archiveSource": "Zemský archiv v Opavě, fond Okresní hejtmanství Zábřeh, Sčítání lidu 1869, karton 300, dům čp. 29 (snímky 0105–0108)",
        "note": "Originální soupis 1869. Hospodář Karel Dvořák (*1839) s manž. Karolínou, bratrem Dr. Janem Dvořákem (*1836, doktor), podnájemníky rodiny Fincl/Pincl a čeledínem. Mimořádný soupis hospodářských zvířat.",
        "scanFile": "assets/archives/cp29/su1000_c_pom_411_inv_c_1392_karton_300_null_dlouhomilov_serie_cp_1_80_1869_0105.jpg",
        "scanTitle": "Originální scan sčítacího archu 1869 – Dlouhomilov čp. 29",
        "inhabitants": [
          {
            "name": "Karel Dvořák",
            "relation": "Hlava rodiny (sedlák)",
            "birthDate": "1839",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Sedlák, polní hospodářství",
            "literacy": "čte i píše"
          },
          {
            "name": "Karolína Dvořáková",
            "relation": "Manželka",
            "birthDate": "1840",
            "birthPlace": "Poděbrady",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Obstarává domácnost",
            "literacy": "čte i píše"
          },
          {
            "name": "Oswald Dvořák",
            "relation": "Syn",
            "birthDate": "1866",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Dítě",
            "literacy": "neumí"
          },
          {
            "name": "Emilie Dvořáková",
            "relation": "Dcera",
            "birthDate": "1868",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Dítě",
            "literacy": "neumí"
          },
          {
            "name": "Paulina Dvořáková",
            "relation": "Dcera",
            "birthDate": "1869",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Dítě (kojenec)",
            "literacy": "neumí"
          },
          {
            "name": "Dr. Jan Dvořák",
            "relation": "Bratr hospodáře",
            "birthDate": "1836",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Doktor práv",
            "literacy": "vysokoškolák"
          },
          {
            "name": "František Fincl (Pincl)",
            "relation": "Podnájemník / majetník",
            "birthDate": "1822",
            "birthPlace": "Perotín (Beroun)",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Majetník",
            "literacy": "čte i píše"
          },
          {
            "name": "Terezie Finclová",
            "relation": "Manželka podnájemníka",
            "birthDate": "1832",
            "birthPlace": "Perotín",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Obstarává domácnost",
            "literacy": "čte i píše"
          },
          {
            "name": "Josef Vlček",
            "relation": "Čeledín / Pohůnek",
            "birthDate": "16. 8. 1853",
            "birthPlace": "Leština",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Pohůnek u koní",
            "literacy": "čte"
          }
        ],
        "livestock": {
          "horses": 2,
          "cattle": 7,
          "pigs": 2,
          "goats": 0,
          "poultry": 49,
          "beehives": 0
        }
      },
      {
        "year": 1857,
        "date": "31. října 1857",
        "isSample": false,
        "archiveSource": "Zemský archiv v Opavě, fond Okresní úřad Zábřeh, Sčítání lidu 1857, karton 253, dům čp. 29 (snímky 0119, 0120)",
        "note": "Nejstarší zachované jmenovité sčítání lidu. Majitelem gruntu byl Johann Dvořák (*1795). V archu je zapsán syn Johann Dvořák (*1826, 'Jurist in Prag' – právník v Praze) a syn Karel (*1839).",
        "scanFile": "assets/archives/cp29/su1000_c_pom_411_inv_c_1299_karton_253_null_dlouhomilov_serie_cp_1_80_1857_0119.jpg",
        "scanTitle": "Originální scan sčítacího archu 1857 – Johann Dvořák čp. 29",
        "inhabitants": [
          {
            "name": "Johann Dvořák (Dworák)",
            "relation": "Majitel domu (Hausbesitzer)",
            "birthDate": "2. 8. 1795",
            "birthPlace": "Dlouhomilov",
            "religion": "katolické",
            "nationality": "němčina/čeština",
            "occupation": "Grundbesitzer (majitel pozemku)",
            "literacy": "čte a píše"
          },
          {
            "name": "Johann Dvořák ml.",
            "relation": "Syn hospodáře",
            "birthDate": "29. 3. 1826",
            "birthPlace": "Dlouhomilov",
            "religion": "katolické",
            "nationality": "němčina/čeština",
            "occupation": "Jurist in Prag (právník v Praze)",
            "literacy": "vysokoškolák"
          },
          {
            "name": "Karl Dvořák",
            "relation": "Syn hospodáře",
            "birthDate": "3. 7. 1839",
            "birthPlace": "Dlouhomilov",
            "religion": "katolické",
            "nationality": "němčina/čeština",
            "occupation": "Při otci v hospodářství",
            "literacy": "čte a píše"
          }
        ],
        "livestock": {
          "horses": 2,
          "cattle": 6,
          "pigs": 3,
          "goats": 0,
          "poultry": 20,
          "beehives": 4
        }
      }
    ],
    "documents": [
      {
        "title": "Originální evidenční list kulturní památky (IISPP MIS)",
        "type": "Evidenční listina NPÚ",
        "isSample": false,
        "year": "1967/1988",
        "source": "Národní památkový ústav, IISPP MIS ID 1139925.",
        "scanFile": "assets/archives/cp29/evidencni_list_iispp.svg",
        "scanTitle": "Evidenční list kulturní památky – usedlost čp. 29 (IISPP 1139925)",
        "description": "Oficiální evidenční list nemovité kulturní památky s architektonickým popisem, půdorysem a fotodokumentací.",
        "transcription": "Venkovská usedlost čp. 29 v Dlouhomilově: Volně stojící zemědělská usedlost tvořící uzavřený dvůr. Přízemní obytné stavení se zděným a částečně dřevěným traktem, trojosým štítem s nikou. Hodnotný doklad severomoravské lidové architektury."
      },
      {
        "title": "Zápis ve Stabilním katastru (1834)",
        "type": "Katastrální vceňovací elaborát",
        "isSample": false,
        "year": "1834",
        "source": "Ústřední archiv zeměměřictví a katastru (ÚAZK), Stabilní katastr 1834, k.ú. Lomigsdorf, stavební parcela č. 38.",
        "scanFile": "assets/archives/cp29/katastr_1834_autenticky.jpg",
        "scanTitle": "Císařský povinný otisk stabilního katastru 1834 – parcela st. 38",
        "description": "Oficiální parcelní protokol obce Lomigsdorf (Dlouhomilov).",
        "transcription": "Bauparzelle Nr. 38, Haus Nr. 29. Franz Dworzak, Rustikal-Besitzer. Wohngebäude aus festem und hölzernem Material, Stallungen und Scheune."
      },
      {
        "title": "Sčítací operát ČSR 1921 (Fascikl 3, arch čp. 29)",
        "type": "Sčítání lidu ČSR",
        "isSample": false,
        "year": "1921",
        "source": "Zemský archiv v Opavě / SOkA Šumperk, fond Okresní úřad Zábřeh, Sčítání 1921, inv. č. 1863, fascikl 3.",
        "scanFile": "assets/archives/cp29/su1000_c_pom_411_inv_c_1863_fascikl_3_null_dlouhomilov_serie_cp_1_118_1921_0160.jpg",
        "scanTitle": "Sčítací arch 1921 – Josef Dvořák čp. 29",
        "description": "Originální naskenovaný sčítací arch rodiny Josefa Dvořáka.",
        "transcription": "Dům čp. 29, byt 1: Josef Dvořák (* 3. 6. 1879), majitel bytu, ženatý, samostatný rolník; manželka Amálie (* 18. 7. 1888 Bludov); děti Josef (* 28. 6. 1913) a Marie (* 15. 6. 1920); čeledín Jan Kamler (* 20. 2. 1861 Rovensko, † 1940 na čp. 29), čeledín Ladislav Brzan (?) z Horní Olešné, služky Ludmila Šulová a Eliška Hrochová (?) z Benkova. Byt 2: Terezie Tifenbachová (* 2. 12. 1840) a služebná Amálie Leharová. (Přečteno ze skenu 1. 11. 2026.)"
      }
    ],
    "stories": [
      {
        "title": "Historie rodu Dvořáků na usedlosti čp. 29 (od roku 1679 do 20. století)",
        "isSample": false,
        "type": "Ověřená rodinná historie",
        "source": "Gruntovní kniha Dlouhomilov (1679), sčítací operáty 1857–1921 a matriky Zá II 1 – Zá II 10 (ZAO Opava & SOkA Šumperk).",
        "text": "Rod Dvořáků je na gruntě čp. 29 v Dlouhomilově doložen v nepřerušené linii po celá staletí. V gruntovní knize pro vsi Dlouhomilov a Medelské začínají na fol. 191 zápisy oddílu „Grunt Pawla Dworzaka“ již rokem 1679. V roce 1834 je ve stabilním katastru zaznamenán Franz Dworzak, v roce 1857 Johann Dvořák (*1795) se syny JUDr. Janem Dvořákem (*1826, právníkem v Praze) a Karlem (*1839), a roku 1890 hospodář a tkadlec Alois Dvořák (*1830, †1908)."
      },
      {
        "title": "Propojení větví z čp. 22 a čp. 29 sňatkem roku 1907 a mezigenerační věrnost",
        "isSample": false,
        "type": "Ověřená rodinná historie",
        "source": "Matriky farnosti Dlouhomilov Zá II 7 (sn. 38) a Zá II 10 (sn. 84, 175, 177).",
        "text": "Dne 15. července 1907 se na čp. 29 přiženil Josef Dvořák (* 3. 6. 1879 ze sousedního gruntu čp. 22, syn Josefa Dvořáka a Anny roz. Kouřilové), když si vzal devatenáctiletou Amálii Motykovou (* 18. 7. 1888 Bludov), jejíž matka Amálie roz. Dvořáková na čp. 29 hospodařila. Oddával je farář na odpočinku P. Alois Dvořák. Pozoruhodným dokladem soudržnosti statku je osud čeledína Jana Kamlera (* 20. 2. 1861 Rovensko), který na čp. 29 nastoupil do služby 12. 11. 1888 a zůstal zde nepřetržitě více než padesát let až do své smrti v roce 1940. Roku 1947 se mladý hospodář Josef Dvořák ml. (* 28. 6. 1913) oženil s Márií Katarínou Zvonárovou za svědectví švagra PhMr. Jaroslava Berky."
      }
    ]
  },
  {
    "id": "cp7",
    "number": "7",
    "localName": "Bývalá dědičná rychta (čp. 7)",
    "type": "Kulturní památka ČR (ÚSKP)",
    "isHeritage": true,
    "uskpNumber": "51795/9-103",
    "npuDirectUrl": "https://www.pamatkovykatalog.cz/soupis-pamatek?obec=Dlouhomilov&cp=7",
    "wikiUrl": "https://cs.wikipedia.org/wiki/Seznam_kulturn%C3%ADch_pam%C3%A1tek_v_Dlouhomilov%C4%9B#rychta_čp._7",
    "wikidataId": "Q38234863",
    "commonsUrl": "https://commons.wikimedia.org/wiki/Category:Cultural_monuments_in_Dlouhomilov",
    "heritageDescription": "Nemovitá kulturní památka ČR. Původně barokní rychta přestavěná koncem 19. století. Významná zemědělská usedlost typická pro oblast Horní Hané s arkádovým náspím a reprezentativním průčelím.",
    "heritageSource": "NPÚ Památkový katalog, rejstř. č. ÚSKP 51795/9-103.",
    "location": {
      "lat": 49.90982,
      "lng": 16.9915013,
      "cadastralParcel": "st. 10",
      "landParcels": "60, 61, 62",
      "source": "ČÚZK – Katastr nemovitostí & RUIAN"
    },
    "buildingFootprints": {
      "cadastralNumber1834": "st. 10",
      "cadastralNumberModern": "st. 10",
      "masonryType1834": "převážně zděná (nespalná obytná budova rychty i sýpka, dřevěný hospodářský trakt)",
      "changesSummary": "Impozantní areál dědičné rychty s arkádovým náspím. Zděné obytné a reprezentační křídlo s klenbami stojí na původním půdorysu z 18. a 19. století.",
      "footprint1834": {
        "masonry": [
          [
            49.90995,
            16.9913
          ],
          [
            49.90995,
            16.99175
          ],
          [
            49.90978,
            16.99175
          ],
          [
            49.90978,
            16.9913
          ]
        ],
        "wooden": [
          [
            [
              49.90978,
              16.9913
            ],
            [
              49.90978,
              16.99155
            ],
            [
              49.90962,
              16.99155
            ],
            [
              49.90962,
              16.9913
            ]
          ]
        ]
      },
      "footprintModern": [
        [
          49.90996,
          16.99128
        ],
        [
          49.90996,
          16.99178
        ],
        [
          49.9096,
          16.99178
        ],
        [
          49.9096,
          16.99128
        ]
      ]
    },
    "statusStableCadastre": "Rozsáhlá zděná budova (červená nespalná barva) s uzavřeným dvorem a hospodářským zázemím.",
    "cadastreSource": "ÚAZK ČÚZK, Stabilní katastr 1834, k.ú. Lomigsdorf.",
    "description": "Centrum historické správy obce a sídlo dědičného rychtáře Dlouhomilova. Rychtář disponoval výsadními právy (právo šenku, řeznictví a nižšího soudnictví nad poddanými panství Zábřeh).",
    "timeline": [
      {
        "year": "1654",
        "owner": "Svobodný rychtář",
        "event": "Sídlo dědičného rychtáře uvedeno v lánovém rejstříku jako nejvýznamnější svobodná usedlost a centrum obecní správy panství Zábřeh.",
        "sourceType": "verified",
        "source": "Lánový rejstřík panství Zábřeh (1654–1677), MZA Brno."
      },
      {
        "year": "1834",
        "owner": "Dědičný rychtář",
        "event": "Rozsáhlý hospodářský areál se zděnou obytnou budovou (st. 10), arkádovým náspím, sýpkou a uzavřeným dvorem zaznamenán v indikační skice stabilního katastru.",
        "sourceType": "verified",
        "source": "ÚAZK ČÚZK, Císařské povinné otisky 1834, k.ú. Dlouhomilov (Lomigsdorf)."
      },
      {
        "year": "1857",
        "owner": "Johann Merta (*1825)",
        "event": "Sčítání lidu 1857: Jan Merta hospodaří jako Grundbesitzer s manželkou Marií Annou, syny Ernestem a Janem, bratrem Rudolfem a čeledínem Antonem Fučíkem.",
        "sourceType": "verified",
        "source": "ZAO, Sčítání 1857, karton 253, arch čp. 7.",
        "scanFile": "assets/archives/cp7/su1000_c_pom_411_inv_c_1299_karton_253_null_dlouhomilov_serie_cp_1_80_1857_0035.jpg",
        "scanTitle": "Sčítací arch 1857 – Rychta čp. 7"
      },
      {
        "year": "1869",
        "owner": "Jan Merta (*1825)",
        "event": "Sčítání 1869: Jan Merta kromě rychty propachtoval panský dvůr v Hrotovicích, kde s rodinou pobývá; syn Ernest (Arnošt) studuje znojemskou reálku. Na rychtě žije celkem 23 osob v 5 domácnostech: funguje zde hostinec Antonína a Johanny Katzerových (řezník a hostinská), tkalcovská dílna obecní porodní babičky Františky Kauerové, obchod s vejci a máslem Josefa Polácha i polní nádeníci.",
        "sourceType": "verified",
        "source": "ZAO, Sčítání 1869, karton 300, arch čp. 7.",
        "scanFile": "assets/archives/cp7/su1000_c_pom_411_inv_c_1392_karton_300_null_dlouhomilov_serie_cp_1_80_1869_0023.jpg",
        "scanTitle": "Sčítací arch 1869 – Rychta čp. 7"
      },
      {
        "year": "1880",
        "owner": "Arnošt Merta (*1855)",
        "event": "Sčítání 1880: Statek přebírá syn Arnošt Merta s manželkou Josefou. Hospodářství disponuje 4 koňmi a 15 kusy hovězího dobytka; ve výminku/podruží žije nádenická rodina Roxanových.",
        "sourceType": "verified",
        "source": "ZAO, Sčítání 1880, karton 330, arch čp. 7.",
        "scanFile": "assets/archives/cp7/su1000_c_pom_411_inv_c_1476_karton_330_null_dlouhomilov_serie_cp_1_4_30_44_50_1880_0017.jpg",
        "scanTitle": "Sčítací arch 1880 – Rychta čp. 7"
      },
      {
        "year": "1890",
        "owner": "Arnošt Merta (*1858)",
        "event": "Sčítání 1890: Vrchol rozmachu gruntu za Arnošta Merty – 5 koní, 16 kusů skotu, 6 včelích úlů, 5 stálých čeledínů. V obytném traktu bydlí industriální učitelka ručních prací Terezie Kolářová a samostatný kovář a podkovář František Vlach s kovárnou.",
        "sourceType": "verified",
        "source": "ZAO, Sčítání 1890, karton 356, arch čp. 7.",
        "scanFile": "assets/archives/cp7/su1000_c_pom_411_inv_c_1560_karton_356_null_dlouhomilov_serie_cp_1_3_50_52_53_1890_0023.jpg",
        "scanTitle": "Sčítací arch 1890 – Rychta čp. 7"
      },
      {
        "year": "1900",
        "owner": "Arnošt Merta (*1858)",
        "event": "Sčítání 1900: Arnošt Merta po ovdovění hospodaří s druhou ženou Anežkou a 5 dětmi. Na statku slouží 6 čeledínů a děveček; na výměnku dožívá 80letá matka Anna Mertová se služkou a v nájmu bydlí obuvník Alois Poláček. Celkem 20 obyvatel.",
        "sourceType": "verified",
        "source": "ZAO, Sčítání 1900, karton 397, arch čp. 7.",
        "scanFile": "assets/archives/cp7/su1000_c_pom_411_inv_c_1664_karton_397_null_dlouhomilov_serie_cp_1_3_18_20_30_1900_0023.jpg",
        "scanTitle": "Sčítací arch 1900 – Rychta čp. 7"
      },
      {
        "year": "1910",
        "owner": "Eduard Koryčán (*1873)",
        "event": "Sčítání 1910: Statek přechází do rukou Eduarda Koryčána z Beňova u Přerova. Provozuje výjimečně velký chov s 6 koňmi, 25 kusy hovězího dobytka (14 dojnic) a 10 prasaty za pomoci kočího Kouřila a čeledi.",
        "sourceType": "verified",
        "source": "ZAO, Sčítání 1910, karton 436, arch čp. 7.",
        "scanFile": "assets/archives/cp7/su1000_c_pom_411_inv_c_1765_karton_436_null_dlouhomilov_serie_cp_1_115_1910_0022.jpg",
        "scanTitle": "Sčítací arch 1910 – Rychta čp. 7"
      },
      {
        "year": "1921",
        "owner": "František Hvížď (*1874)",
        "event": "Sčítání 1921: Majitelem rychty je František Hvížď z Hvozdce. Na výměnku žije Mathilda Ptáčková roz. Všetečková (*1852 Hrabenov, pensistka po výuce na obecné škole) s dcerou Eliškou (*1896, industriální učitelka ve Strupšíně), vnoučaty Zdeňkem (*1919) a novorozenou Jitřenkou (*28. 1. 1921), a mladou služkou Anastasií Mlčochovou (*1904 Hrabenov). Ve třetím bytě žijí penzionovaní rolníci Jakub a Anna Navrátilovi z Drahanovic.",
        "sourceType": "verified",
        "source": "ZAO, Sčítání 1921, fascikl 3, arch čp. 7.",
        "scanFile": "assets/archives/cp7/su1000_c_pom_411_inv_c_1863_fascikl_3_null_dlouhomilov_serie_cp_1_118_1921_0036.jpg",
        "scanTitle": "Sčítací arch 1921 – Rychta čp. 7"
      },
      {
        "year": "1995",
        "owner": "Kulturní památka ČR",
        "event": "Areál bývalé dědičné rychty čp. 7 prohlášen za nemovitou kulturní památku ČR pro své výjimečné arkádové náspí, barokní klenby a urbanistickou hodnotu.",
        "sourceType": "verified",
        "source": "NPÚ Památkový katalog, ÚSKP 51795/9-103."
      }
    ],
    "census": [
      {
        "year": 1921,
        "date": "15. února 1921",
        "isSample": false,
        "archiveSource": "Zemský archiv v Opavě, fond Okresní úřad Zábřeh, Sčítání lidu 1921, fascikl 3, arch čp. 7 (snímky 0036, 0038, 0040, 0042)",
        "note": "Originální sčítací operát ČSR 1921 (ověřeno z primárních skenů e538, 812b a 67da). Dům byl rozdělen na 3 byty (14 obyvatel): Byt č. 3 (výměnkář Jakub Navrátil s chotí Annou z Drahanovic, 2 osoby – běžné pořadové č. 23–24), Byt č. 2 (výměnek – Mathilda Ptáčková roz. Všetečková, dcera Eliška, vnoučata Zdeněk a Jitřenka, služka Anastasie Mlčochová, 5 osob – běžné pořadové č. 25–29) a Byt č. 1 (rodina nového majitele Františka Hvížďa a čeleď, 7 osob – běžné pořadové č. 30–36).",
        "scanFile": "assets/archives/cp7/su1000_c_pom_411_inv_c_1863_fascikl_3_null_dlouhomilov_serie_cp_1_118_1921_0036.jpg",
        "scanTitle": "Sčítací operát 1921 – Bývalá dědičná rychta čp. 7",
        "inhabitants": [
          {
            "name": "František Hvížď",
            "relation": "Hlava rodiny / Majitel usedlosti",
            "birthDate": "11. 10. 1874",
            "birthPlace": "Hvozdec",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "Rolník na vlastním statku (v obci od 1. 7. 1912)",
            "literacy": "čte i píše"
          },
          {
            "name": "Hedvika Hvížďová",
            "relation": "Manželka",
            "birthDate": "4. 5. 1893",
            "birthPlace": "Drahanovice",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "Vedení domácnosti a hospodářství (v obci od 1. 7. 1912)",
            "literacy": "čte i píše"
          },
          {
            "name": "Libuše Hvížďová",
            "relation": "Dcera",
            "birthDate": "23. 4. 1913",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "Dítě / školačka",
            "literacy": "čte i píše"
          },
          {
            "name": "Pavla Hvížďová",
            "relation": "Dcera",
            "birthDate": "12. 12. 1918",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "Dítě",
            "literacy": "nečte"
          },
          {
            "name": "Anna Hándlová",
            "relation": "Služebná děvečka",
            "birthDate": "6. 6. 1900",
            "birthPlace": "Brníčko",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "Služebná při polním hospodářství (v obci od 1. 11. 1919)",
            "literacy": "čte i píše"
          },
          {
            "name": "Pavlína Tašková",
            "relation": "Služebná děvečka",
            "birthDate": "24. 6. 1901",
            "birthPlace": "Horní Studénky",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "Služebná při polním hospodářství (v obci od 2. 10. 1908)",
            "literacy": "čte i píše"
          },
          {
            "name": "Alois Augustyn",
            "relation": "Čeledín",
            "birthDate": "31. 10. 1902",
            "birthPlace": "Janoušov",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "Zemědělský čeledín při statku (v obci od listopadu 1920)",
            "literacy": "čte i píše"
          },
          {
            "name": "Mathilda Ptáčková roz. Všetečková",
            "relation": "Majitelka bytu č. 2 (výměnkářka)",
            "birthDate": "3. 12. 1852",
            "birthPlace": "Hrabenov",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "Pensistka (bývalá industriální učitelka obecné školy, v obci od 16. 9. 1892)",
            "literacy": "čte i píše"
          },
          {
            "name": "Eliška Ptáčková",
            "relation": "Dcera",
            "birthDate": "30. 7. 1896",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "Industriální učitelka na obecné škole ve Strupšíně",
            "literacy": "čte i píše"
          },
          {
            "name": "Zdeněk Ptáček",
            "relation": "Vnuk Mathildy (syn Elišky)",
            "birthDate": "20. 10. 1919",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "Dítě v rodině",
            "literacy": "nečte ani nepíše"
          },
          {
            "name": "Jitřenka Ptáčková",
            "relation": "Vnučka Mathildy (dcera Elišky)",
            "birthDate": "28. 1. 1921",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "Kojenec (14 dní)",
            "literacy": "nečte ani nepíše"
          },
          {
            "name": "Anastasie Mlčochová",
            "relation": "Služebná u bytu č. 2",
            "birthDate": "28. 8. 1904",
            "birthPlace": "Hrabenov",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "Služebná v domácnosti (v obci od 13. 1. 1921)",
            "literacy": "čte i píše"
          },
          {
            "name": "Jakub Navrátil",
            "relation": "Majitel bytu č. 3 (výměnkář)",
            "birthDate": "16. 6. 1861",
            "birthPlace": "Drahanovice",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "Výměnkář / dříve samostatný sedlák (v obci od 22. 7. 1912)",
            "literacy": "čte i píše"
          },
          {
            "name": "Anna Navrátilová",
            "relation": "Manželka v bytě č. 3",
            "birthDate": "4. 11. 1860",
            "birthPlace": "Stařechovice",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "Výměnkářka / dříve selka (v obci od 22. 7. 1912)",
            "literacy": "čte i píše"
          }
        ],
        "livestock": {
          "horses": 4,
          "cattle": 16,
          "pigs": 5,
          "goats": 0,
          "poultry": 25
        }
      },
      {
        "year": 1910,
        "date": "31. prosince 1910",
        "isSample": false,
        "archiveSource": "Zemský archiv v Opavě, fond Okresní úřad Zábřeh, Sčítání lidu 1910, karton 436, arch čp. 7 (snímky 0021, 0022)",
        "note": "Sčítání lidu 1910 zaznamenává hospodaření velkostatkáře Eduarda Koryčána z Beňova u Přerova s velkým chovem dobytka (25 kusů skotu, 6 koní). V domě 2 byty, 8 stálých obyvatel.",
        "scanFile": "assets/archives/cp7/su1000_c_pom_411_inv_c_1765_karton_436_null_dlouhomilov_serie_cp_1_115_1910_0022.jpg",
        "scanTitle": "Sčítací arch 1910 – Bývalá dědičná rychta čp. 7",
        "inhabitants": [
          {
            "name": "Eduard Koryčán",
            "relation": "Hlava rodiny / Majitel velkostatku",
            "birthDate": "18. 3. 1873",
            "birthPlace": "Beňov (okr. Přerov)",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Rolník – majitel statku",
            "literacy": "čte i píše"
          },
          {
            "name": "Františka Koryčánová",
            "relation": "Manželka",
            "birthDate": "9. 3. 1872",
            "birthPlace": "Beňov (okr. Přerov)",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "V domácnosti a hospodářství",
            "literacy": "čte i píše"
          },
          {
            "name": "František Kouřil",
            "relation": "Kočí / Čeledín",
            "birthDate": "2. 5. 1873",
            "birthPlace": "Šternberk",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Kočí u rolníka",
            "literacy": "čte i píše"
          },
          {
            "name": "Františka Hudečková",
            "relation": "Služka",
            "birthDate": "14. 10. 1895",
            "birthPlace": "Šternberk",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Služka u rolníka",
            "literacy": "čte i píše"
          },
          {
            "name": "Jan Svoboda",
            "relation": "Majitel bytu č. 2 / Podnájemník",
            "birthDate": "16. 4. 1870",
            "birthPlace": "Šternberk",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Kočí / pomocný dělník",
            "literacy": "čte i píše"
          },
          {
            "name": "Marie Svobodová",
            "relation": "Manželka v bytě č. 2",
            "birthDate": "14. 3. 1880",
            "birthPlace": "Šumperk",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "V domácnosti",
            "literacy": "čte i píše"
          },
          {
            "name": "Terezie Osladilová",
            "relation": "Tchýně (vdova)",
            "birthDate": "10. 12. 1856",
            "birthPlace": "Šumperk",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Výměnkářka / vdova",
            "literacy": "čte i píše"
          },
          {
            "name": "Marie Klimešová",
            "relation": "Schovanka",
            "birthDate": "4. 12. 1907",
            "birthPlace": "Šumperk",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Dítě v opatrování",
            "literacy": "nečte"
          }
        ],
        "livestock": {
          "horses": 6,
          "cattle": 25,
          "pigs": 10,
          "goats": 0,
          "poultry": 30
        }
      },
      {
        "year": 1900,
        "date": "31. prosince 1900",
        "isSample": false,
        "archiveSource": "Zemský archiv v Opavě, fond Okresní úřad Zábřeh, Sčítání lidu 1900, karton 397, arch čp. 7 (snímky 0023–0029)",
        "note": "Rozsáhlý sčítací operát s přiloženými křestními listy dětí. Celkem 20 obyvatel ve 3 bytech: velká rolnická rodina Arnošta Merty (Byt 1 s 6 čeledíny a děvečkami), 80letá výměnkářka Anna Mertová se služkou (Byt 2) a obuvník Alois Poláček (Byt 3).",
        "scanFile": "assets/archives/cp7/su1000_c_pom_411_inv_c_1664_karton_397_null_dlouhomilov_serie_cp_1_3_18_20_30_1900_0023.jpg",
        "scanTitle": "Sčítací arch 1900 – Bývalá dědičná rychta čp. 7",
        "inhabitants": [
          {
            "name": "Arnošt Merta",
            "relation": "Hlava rodiny / Majitel statku",
            "birthDate": "10. 7. 1858",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Rolník – majitel usedlosti",
            "literacy": "čte i píše"
          },
          {
            "name": "Anežka Mertová",
            "relation": "Manželka",
            "birthDate": "21. 7. 1862",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "V domácnosti a hospodářství",
            "literacy": "čte i píše"
          },
          {
            "name": "Arnošt Merta ml.",
            "relation": "Syn",
            "birthDate": "6. 7. 1882",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Pomocník při hospodářství",
            "literacy": "čte i píše"
          },
          {
            "name": "Josef Merta",
            "relation": "Syn",
            "birthDate": "26. 10. 1883",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Pomocník při hospodářství",
            "literacy": "čte i píše"
          },
          {
            "name": "Josefa Mertová",
            "relation": "Dcera",
            "birthDate": "27. 6. 1885",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Při hospodářství",
            "literacy": "čte i píše"
          },
          {
            "name": "Jan Vladimír Merta",
            "relation": "Syn",
            "birthDate": "5. 2. 1887",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Žák / při hospodářství",
            "literacy": "čte i píše"
          },
          {
            "name": "Olga Anežka Mertová",
            "relation": "Dcera",
            "birthDate": "13. 3. 1892",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Dítě / školačka",
            "literacy": "čte i píše"
          },
          {
            "name": "Štěpánka Kroužková",
            "relation": "Schovanka / Příbuzná",
            "birthDate": "8. 5. 1891",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Školačka při hospodářství",
            "literacy": "čte i píše"
          },
          {
            "name": "Štěpánka Ptáčková",
            "relation": "Příbuzná",
            "birthDate": "1. 5. 1894",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Dítě",
            "literacy": "nečte"
          },
          {
            "name": "Richard Osladil",
            "relation": "Pacholek",
            "birthDate": "8. 9. 1878",
            "birthPlace": "Sobotín",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Pacholek u koní",
            "literacy": "čte i píše"
          },
          {
            "name": "Josef Černý",
            "relation": "Čeledín",
            "birthDate": "23. 11. 1881",
            "birthPlace": "Morava",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Zemědělský čeledín",
            "literacy": "čte i píše"
          },
          {
            "name": "Jan Sklenař",
            "relation": "Čeledín",
            "birthDate": "10. 6. 1873",
            "birthPlace": "Morava",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Zemědělský čeledín",
            "literacy": "čte i píše"
          },
          {
            "name": "Karolína Benešková",
            "relation": "Služebná děvečka",
            "birthDate": "31. 8. 1882",
            "birthPlace": "Morava",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Děvečka v hospodářství",
            "literacy": "čte i píše"
          },
          {
            "name": "Amálie Krebštová",
            "relation": "Služebná děvečka",
            "birthDate": "25. 1. 1880",
            "birthPlace": "Morava",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Děvečka v hospodářství",
            "literacy": "čte i píše"
          },
          {
            "name": "Františka Mertová",
            "relation": "Služebná děvečka",
            "birthDate": "12. 6. 1878",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Děvečka v hospodářství",
            "literacy": "čte i píše"
          },
          {
            "name": "Anna Mertová",
            "relation": "Majitelka bytu č. 2 (výměnkářka)",
            "birthDate": "23. 9. 1820",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Výměnkářka / vdova",
            "literacy": "čte i píše"
          },
          {
            "name": "Klára Křenová",
            "relation": "Služka u výměnkářky",
            "birthDate": "25. 12. 1881",
            "birthPlace": "Rohle",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Služebná v domácnosti",
            "literacy": "čte i píše"
          },
          {
            "name": "Alois Poláček",
            "relation": "Majitel bytu č. 3 / Nájemník",
            "birthDate": "13. 1. 1860",
            "birthPlace": "Rohle",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Obuvník (švec) a nádenník",
            "literacy": "čte i píše"
          },
          {
            "name": "Anna Poláčková roz. Blažková",
            "relation": "Manželka v bytě č. 3",
            "birthDate": "2. 3. 1857",
            "birthPlace": "Rohle",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "V domácnosti",
            "literacy": "čte i píše"
          },
          {
            "name": "Anna Blažková",
            "relation": "Nevlastní dcera",
            "birthDate": "4. 2. 1882",
            "birthPlace": "Rohle",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Dělnice v textilce",
            "literacy": "čte i píše"
          }
        ],
        "livestock": {
          "horses": 5,
          "cattle": 18,
          "pigs": 6,
          "goats": 0,
          "poultry": 30
        }
      },
      {
        "year": 1890,
        "date": "31. prosince 1890",
        "isSample": false,
        "archiveSource": "Zemský archiv v Opavě, fond Okresní úřad Zábřeh, Sčítání lidu 1890, karton 356, arch čp. 7 (snímky 0023–0026)",
        "note": "Sčítání lidu 1890 dokládá vrcholný hospodářský rozkvět rychty za Arnošta Merty (16 obyvatel ve 4 bytech, 5 koní, 16 kusů skotu, 6 úlů). V domě bydlí industriální učitelka dívčích ručních prací a obecní podkovář s kovářskou dílnou.",
        "scanFile": "assets/archives/cp7/su1000_c_pom_411_inv_c_1560_karton_356_null_dlouhomilov_serie_cp_1_3_50_52_53_1890_0023.jpg",
        "scanTitle": "Sčítací arch 1890 – Bývalá dědičná rychta čp. 7",
        "inhabitants": [
          {
            "name": "Arnošt Merta",
            "relation": "Hlava rodiny / Majitel usedlosti",
            "birthDate": "10. 7. 1858",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Rolník – majitel usedlosti",
            "literacy": "čte i píše"
          },
          {
            "name": "Josefa Mertová",
            "relation": "Manželka",
            "birthDate": "20. 8. 1859",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "V domácnosti a hospodářství",
            "literacy": "čte i píše"
          },
          {
            "name": "Arnošt Merta ml.",
            "relation": "Syn",
            "birthDate": "6. 7. 1882",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Dítě / žák",
            "literacy": "čte i píše"
          },
          {
            "name": "Josef Merta",
            "relation": "Syn",
            "birthDate": "26. 10. 1883",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Dítě / žák",
            "literacy": "čte i píše"
          },
          {
            "name": "Josefa Mertová",
            "relation": "Dcera",
            "birthDate": "27. 6. 1885",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Dítě / školačka",
            "literacy": "čte i píše"
          },
          {
            "name": "Jan Vladimír Merta",
            "relation": "Syn",
            "birthDate": "5. 2. 1887",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Dítě",
            "literacy": "nečte"
          },
          {
            "name": "Zdeňka Mertová",
            "relation": "Dcera",
            "birthDate": "26. 9. 1890",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Kojenec",
            "literacy": "nečte"
          },
          {
            "name": "Ignác Němec",
            "relation": "Čeledín",
            "birthDate": "10. 7. 1871",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Zemědělský čeledín",
            "literacy": "čte i píše"
          },
          {
            "name": "Jan Starý",
            "relation": "Čeledín",
            "birthDate": "9. 7. 1869",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Zemědělský čeledín",
            "literacy": "čte i píše"
          },
          {
            "name": "Valentin Veselý",
            "relation": "Čeledín",
            "birthDate": "14. 2. 1868",
            "birthPlace": "Libina",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Zemědělský čeledín",
            "literacy": "čte i píše"
          },
          {
            "name": "Severin Seidel",
            "relation": "Čeledín",
            "birthDate": "8. 1. 1874",
            "birthPlace": "Dolní Studénky",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Zemědělský čeledín",
            "literacy": "čte i píše"
          },
          {
            "name": "Ignác Švestka",
            "relation": "Čeledín",
            "birthDate": "4. 7. 1872",
            "birthPlace": "Libina",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Zemědělský čeledín",
            "literacy": "čte i píše"
          },
          {
            "name": "Anna Mertová",
            "relation": "Majitelka bytu č. 2 (výměnkářka)",
            "birthDate": "26. 7. 1820",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Výměnkářka / vdova",
            "literacy": "čte i píše"
          },
          {
            "name": "Emílie Mertová",
            "relation": "Dcera u výměnkářky",
            "birthDate": "23. 4. 1850",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Při matce / domácnost",
            "literacy": "čte i píše"
          },
          {
            "name": "Terezie Kolářová",
            "relation": "Majitelka bytu č. 3 / Nájemnice",
            "birthDate": "1. 11. 1857",
            "birthPlace": "Lesnice",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Industriální učitelka na obecné škole v Dlouhomilově",
            "literacy": "čte i píše"
          },
          {
            "name": "František Vlach",
            "relation": "Majitel bytu č. 4 / Nájemník",
            "birthDate": "24. 2. 1864",
            "birthPlace": "Dolní Studénky",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Samostatný kovář a podkovář",
            "literacy": "čte i píše"
          },
          {
            "name": "Sofie Vlachová",
            "relation": "Manželka v bytě č. 4",
            "birthDate": "25. 4. 1860",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "V domácnosti kováře",
            "literacy": "čte i píše"
          }
        ],
        "livestock": {
          "horses": 5,
          "cattle": 16,
          "pigs": 2,
          "goats": 0,
          "beehives": 6
        }
      },
      {
        "year": 1880,
        "date": "31. prosince 1880",
        "isSample": false,
        "archiveSource": "Zemský archiv v Opavě, fond Okresní úřad Zábřeh, Sčítání lidu 1880, karton 330, arch čp. 7 (snímky 0017–0019)",
        "note": "Sčítání lidu 1880 zachycuje mladého rolníka Arnošta Mertu s novomanželkou Josefou a bratrem Emilem. Statek chová 4 koně a 15 kusů skotu; v druhém bytě žije rodina nádeníka Františka Roxana.",
        "scanFile": "assets/archives/cp7/su1000_c_pom_411_inv_c_1476_karton_330_null_dlouhomilov_serie_cp_1_4_30_44_50_1880_0017.jpg",
        "scanTitle": "Sčítací arch 1880 – Bývalá dědičná rychta čp. 7",
        "inhabitants": [
          {
            "name": "Arnošt Merta",
            "relation": "Hlava rodiny / Rolník nájemník",
            "birthDate": "9. 7. 1855",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Rolník nájemník rychty",
            "literacy": "čte i píše"
          },
          {
            "name": "Josefa Mertová",
            "relation": "Manželka",
            "birthDate": "14. 11. 1857",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Obstarává domácnost a hospodářství",
            "literacy": "čte i píše"
          },
          {
            "name": "Emil Merta",
            "relation": "Bratr hospodáře",
            "birthDate": "15. 6. 1870",
            "birthPlace": "Hostivice",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Žák / chodí do školy",
            "literacy": "čte i píše"
          },
          {
            "name": "Johanna Heclová",
            "relation": "Služebná děvečka",
            "birthDate": "27. 8. 1859",
            "birthPlace": "Rovensko",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Služebná při rolnictví",
            "literacy": "čte i píše"
          },
          {
            "name": "Terezie Tučková",
            "relation": "Služebná děvečka",
            "birthDate": "11. 9. 1860",
            "birthPlace": "Kroměříž",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Služebná při rolnictví",
            "literacy": "čte i píše"
          },
          {
            "name": "Josef Unzeitig",
            "relation": "Nádenník",
            "birthDate": "1. 6. 1848",
            "birthPlace": "Jestřebí",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Nádenník při polním rolnictví",
            "literacy": "čte i píše"
          },
          {
            "name": "František Roxan",
            "relation": "Majitel bytu č. 2 / Nádenník",
            "birthDate": "3. 12. 1846",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Nádenník při rolnictví",
            "literacy": "čte i píše"
          },
          {
            "name": "Anna Roxanová",
            "relation": "Manželka v bytě č. 2",
            "birthDate": "1. 10. 1842",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Nádennice při rolnictví",
            "literacy": "čte i píše"
          },
          {
            "name": "Terezie Roxanová",
            "relation": "Dcera",
            "birthDate": "24. 4. 1869",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Školačka / chodí do školy",
            "literacy": "čte i píše"
          },
          {
            "name": "Anna Roxanová",
            "relation": "Dcera",
            "birthDate": "14. 2. 1873",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Dítě",
            "literacy": "nečte"
          },
          {
            "name": "Marie Roxanová",
            "relation": "Dcera",
            "birthDate": "7. 1. 1877",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Dítě",
            "literacy": "nečte"
          },
          {
            "name": "Jan Roxan",
            "relation": "Syn",
            "birthDate": "1. 11. 1880",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Kojenec",
            "literacy": "nečte"
          }
        ],
        "livestock": {
          "horses": 4,
          "cattle": 15,
          "pigs": 1,
          "goats": 0,
          "beehives": 1
        }
      },
      {
        "year": 1869,
        "date": "31. prosince 1869",
        "isSample": false,
        "archiveSource": "Zemský archiv v Opavě, fond Okresní úřad Zábřeh, Sčítání lidu 1869, karton 300, arch čp. 7 (snímky 0022–0027)",
        "note": "Pozoruhodný archivní záznam dokládající polyfunkční charakter dědičné rychty. Celkem 23 obyvatel v 5 domácnostech: majitel Jan Merta s rodinou hospodaří na panském dvoře v Hrotovicích a syn Ernest studuje reálku; na rychtě provozují Antonín a Johanna Katzerovi hostinec s řeznictvím, Josef Kauer s chotí Františkou vedou tkalcovství a porodnickou praxi zkoušené babičky (Hebamme), Josef Polách obchoduje s máslem a vejci a v dalších bytech bydlí rodiny polních nádeníků a přadlen lnu.",
        "scanFile": "assets/archives/cp7/su1000_c_pom_411_inv_c_1392_karton_300_null_dlouhomilov_serie_cp_1_80_1869_0023.jpg",
        "scanTitle": "Sčítací arch 1869 – Bývalá dědičná rychta čp. 7",
        "inhabitants": [
          {
            "name": "Jan Merta",
            "relation": "Majitel domu (nepřítomen – Hrotovice)",
            "birthDate": "1825",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "moravská / česká",
            "occupation": "Majitel domu a nájemce panského dvora v Hrotovicích",
            "literacy": "čte i píše"
          },
          {
            "name": "Mariana Mertová",
            "relation": "Manželka majitele (Hrotovice)",
            "birthDate": "1829",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "moravská / česká",
            "occupation": "V domácnosti a hospodářství",
            "literacy": "čte i píše"
          },
          {
            "name": "Ernest (Arnošt) Merta",
            "relation": "Syn majitele (nepřítomen – Znojmo)",
            "birthDate": "9. 7. 1855",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "moravská / česká",
            "occupation": "Student reálky ve Znojmě",
            "literacy": "čte i píše"
          },
          {
            "name": "Jan Merta ml.",
            "relation": "Syn majitele (Hrotovice)",
            "birthDate": "17. 9. 1857",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "moravská / česká",
            "occupation": "Žák / chodí do školy",
            "literacy": "čte i píše"
          },
          {
            "name": "Marie Mertová",
            "relation": "Dcera majitele (Hrotovice)",
            "birthDate": "1861",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "moravská / česká",
            "occupation": "Žákyně / chodí do školy",
            "literacy": "čte i píše"
          },
          {
            "name": "Anna Mertová",
            "relation": "Dcera majitele (Hrotovice)",
            "birthDate": "1868",
            "birthPlace": "Hrotovice",
            "religion": "římskokatolické",
            "nationality": "moravská / česká",
            "occupation": "Dítě",
            "literacy": "nečte"
          },
          {
            "name": "Antonín Katzer",
            "relation": "Hlava bytu č. 2 / Řezník na rychtě",
            "birthDate": "1831",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "moravská / česká",
            "occupation": "Řezník (Fleischer)",
            "literacy": "čte i píše"
          },
          {
            "name": "Johanna Katzerová",
            "relation": "Manželka v bytě č. 2 / Hostinská",
            "birthDate": "1831",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "moravská / česká",
            "occupation": "Hostinská (vede šenk a hostinec na rychtě)",
            "literacy": "čte i píše"
          },
          {
            "name": "Ludmila Katzerová",
            "relation": "Dcera v bytě č. 2",
            "birthDate": "1858",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "moravská / česká",
            "occupation": "Školačka / chodí do školy",
            "literacy": "čte i píše"
          },
          {
            "name": "Josef Kauer",
            "relation": "Hlava bytu č. 3 / Podruh",
            "birthDate": "1842",
            "birthPlace": "Rohle",
            "religion": "římskokatolické",
            "nationality": "moravská / česká",
            "occupation": "Tkadlec a pomocný dělník",
            "literacy": "čte i píše"
          },
          {
            "name": "Františka Kauerová",
            "relation": "Manželka v bytě č. 3 / Porodní bába",
            "birthDate": "1830",
            "birthPlace": "Dlouhá Loučka (Langendorf)",
            "religion": "římskokatolické",
            "nationality": "moravská / česká",
            "occupation": "Zkoušená porodní babička (Hebamme)",
            "literacy": "čte i píše"
          },
          {
            "name": "Terezie Königová",
            "relation": "Nevlastní dcera",
            "birthDate": "1856",
            "birthPlace": "Dlouhá Loučka",
            "religion": "římskokatolické",
            "nationality": "moravská / česká",
            "occupation": "Dělnice v textilní továrně / přádelně",
            "literacy": "čte i píše"
          },
          {
            "name": "Vilém König",
            "relation": "Nevlastní syn",
            "birthDate": "1860",
            "birthPlace": "Dlouhá Loučka",
            "religion": "římskokatolické",
            "nationality": "moravská / česká",
            "occupation": "Žák / chodí do školy",
            "literacy": "čte i píše"
          },
          {
            "name": "Rudolf Kauer",
            "relation": "Syn v bytě č. 3",
            "birthDate": "1867",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "moravská / česká",
            "occupation": "Dítě",
            "literacy": "nečte"
          },
          {
            "name": "Jan Taláček",
            "relation": "Hlava bytu č. 4 / Podruh",
            "birthDate": "1827",
            "birthPlace": "Strupšín",
            "religion": "římskokatolické",
            "nationality": "moravská / česká",
            "occupation": "Polní nádenník",
            "literacy": "čte i píše"
          },
          {
            "name": "Cecílie Taláčková",
            "relation": "Manželka v bytě č. 4",
            "birthDate": "1825",
            "birthPlace": "Špičky (Spitzenthal)",
            "religion": "římskokatolické",
            "nationality": "moravská / česká",
            "occupation": "Polní nádennice",
            "literacy": "čte i píše"
          },
          {
            "name": "Jan Taláček ml.",
            "relation": "Syn v bytě č. 4",
            "birthDate": "1862",
            "birthPlace": "Slavoňov",
            "religion": "římskokatolické",
            "nationality": "moravská / česká",
            "occupation": "Žák / chodí do školy",
            "literacy": "čte i píše"
          },
          {
            "name": "Emílie Taláčková",
            "relation": "Dcera v bytě č. 4",
            "birthDate": "1869",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "moravská / česká",
            "occupation": "Kojenec",
            "literacy": "nečte"
          },
          {
            "name": "Josef Polách",
            "relation": "Hlava bytu č. 5 / Obchodník",
            "birthDate": "1839",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "moravská / česká",
            "occupation": "Samostatný obchodník s máslem a vejci",
            "literacy": "čte i píše"
          },
          {
            "name": "Terezie Poláchová",
            "relation": "Manželka v bytě č. 5",
            "birthDate": "1835",
            "birthPlace": "Bušín",
            "religion": "římskokatolické",
            "nationality": "moravská / česká",
            "occupation": "Polní nádennice",
            "literacy": "čte i píše"
          },
          {
            "name": "Mariana Poláchová",
            "relation": "Dcera v bytě č. 5",
            "birthDate": "1864",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "moravská / česká",
            "occupation": "Dítě",
            "literacy": "nečte"
          },
          {
            "name": "Josef Polách ml.",
            "relation": "Syn v bytě č. 5",
            "birthDate": "1868",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "moravská / česká",
            "occupation": "Kojenec",
            "literacy": "nečte"
          },
          {
            "name": "Marie Wagnerová",
            "relation": "Švagrová v bytě č. 5",
            "birthDate": "1845",
            "birthPlace": "Bušín",
            "religion": "římskokatolické",
            "nationality": "moravská / česká",
            "occupation": "Přadlena / dělnice v přádelně lnu",
            "literacy": "čte i píše"
          }
        ],
        "livestock": {
          "horses": 0,
          "cattle": 2,
          "pigs": 4,
          "goats": 5
        }
      },
      {
        "year": 1857,
        "date": "25. listopadu 1857",
        "isSample": false,
        "archiveSource": "Zemský archiv v Opavě, fond Okresní úřad Zábřeh, Sčítání lidu 1857, karton 253, arch čp. 7 (snímky 0035, 0037)",
        "note": "Nejstarší dochovaný moderní sčítací operát pro dědičnou rychtu v Dlouhomilově (Lomigsdorf). Majitelem gruntu je Johann Merta s manželkou Marií Annou, dvěma malými syny, bratrem Rudolfem a čeledínem Antonem Fučíkem.",
        "scanFile": "assets/archives/cp7/su1000_c_pom_411_inv_c_1299_karton_253_null_dlouhomilov_serie_cp_1_80_1857_0035.jpg",
        "scanTitle": "Sčítací arch 1857 – Bývalá dědičná rychta čp. 7",
        "inhabitants": [
          {
            "name": "Johann (Jan) Merta",
            "relation": "Majitel rychty / Grundbesitzer",
            "birthDate": "10. 5. 1825",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "moravská / německá zápis",
            "occupation": "Majitel dědičné rychty (Grundbesitzer)",
            "literacy": "čte i píše"
          },
          {
            "name": "Maria Anna Mertová",
            "relation": "Manželka majitele",
            "birthDate": "20. 5. 1829",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "moravská",
            "occupation": "V domácnosti a hospodářství",
            "literacy": "čte i píše"
          },
          {
            "name": "Ernest (Arnošt) Merta",
            "relation": "Syn majitele",
            "birthDate": "1855",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "moravská",
            "occupation": "Dítě",
            "literacy": "nečte"
          },
          {
            "name": "Johann (Jan) Merta ml.",
            "relation": "Syn majitele",
            "birthDate": "1857",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "moravská",
            "occupation": "Kojenec",
            "literacy": "nečte"
          },
          {
            "name": "Rudolf Merta",
            "relation": "Bratr majitele",
            "birthDate": "1831",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "moravská",
            "occupation": "Svobodný pomocník na gruntě",
            "literacy": "čte i píše"
          },
          {
            "name": "Anton Fučík (Fuxik)",
            "relation": "Čeledín / Hilfsarbeiter",
            "birthDate": "1833",
            "birthPlace": "Morava",
            "religion": "římskokatolické",
            "nationality": "moravská",
            "occupation": "Zemědělský čeledín (Hilfsarbeiter der Landwirthschaft)",
            "literacy": "čte i píše"
          }
        ],
        "livestock": {
          "horses": 4,
          "cattle": 12,
          "pigs": 4,
          "goats": 0
        }
      }
    ],
    "documents": [
      {
        "title": "Stabilní katastr 1834 – Indikační skica (st. 10, rychta čp. 7)",
        "type": "map",
        "year": "1834",
        "source": "ÚAZK ČÚZK, Císařské otisky stabilního katastru, Dlouhomilov",
        "file": "assets/archives/cp7/katastr_1834_autenticky.jpg",
        "description": "Originální kolorovaná katastrální mapa zobrazující masivní zděnou obytnou budovu rychty, sýpku a dvůr."
      },
      {
        "title": "Sčítací operát 1857 – Rychta čp. 7 (Johann Merta)",
        "type": "census",
        "year": "1857",
        "source": "ZAO Olomouc, karton 253, inv. č. 1299, snímky 0035, 0037",
        "file": "assets/archives/cp7/su1000_c_pom_411_inv_c_1299_karton_253_null_dlouhomilov_serie_cp_1_80_1857_0035.jpg",
        "description": "Sčítací arch hospodáře Johanna Merty se 6 členy domácnosti."
      },
      {
        "title": "Sčítací operát 1869 – Rychta čp. 7 (Jan Merta, hostinec a podruzi)",
        "type": "census",
        "year": "1869",
        "source": "ZAO Olomouc, karton 300, inv. č. 1392, snímky 0022–0027",
        "file": "assets/archives/cp7/su1000_c_pom_411_inv_c_1392_karton_300_null_dlouhomilov_serie_cp_1_80_1869_0023.jpg",
        "description": "Popisný arch 23 obyvatel rychty včetně hostinské Johanny Katzerové, porodní báby Františky Kauerové a obchodníka Josefa Polácha."
      },
      {
        "title": "Sčítací operát 1880 – Rychta čp. 7 (Arnošt Merta)",
        "type": "census",
        "year": "1880",
        "source": "ZAO Olomouc, karton 330, inv. č. 1476, snímky 0017–0019",
        "file": "assets/archives/cp7/su1000_c_pom_411_inv_c_1476_karton_330_null_dlouhomilov_serie_cp_1_4_30_44_50_1880_0017.jpg",
        "description": "Zápis hospodáře Arnošta Merty s chovem 4 koní a 15 kusů skotu a nádeníka Roxana."
      },
      {
        "title": "Sčítací operát 1890 – Rychta čp. 7 (Arnošt Merta, kovář Vlach)",
        "type": "census",
        "year": "1890",
        "source": "ZAO Olomouc, karton 356, inv. č. 1560, snímky 0023–0026",
        "file": "assets/archives/cp7/su1000_c_pom_411_inv_c_1560_karton_356_null_dlouhomilov_serie_cp_1_3_50_52_53_1890_0023.jpg",
        "description": "Popisný arch s 5 čeledíny, industriální učitelkou Terezií Kolářovou a kovářem Františkem Vlachem."
      },
      {
        "title": "Sčítací operát 1900 – Rychta čp. 7 (Arnošt Merta, výměnek)",
        "type": "census",
        "year": "1900",
        "source": "ZAO Olomouc, karton 397, inv. č. 1664, snímky 0023–0029",
        "file": "assets/archives/cp7/su1000_c_pom_411_inv_c_1664_karton_397_null_dlouhomilov_serie_cp_1_3_18_20_30_1900_0023.jpg",
        "description": "Sčítací operát se 20 obyvateli, křestními listy dětí a 80letou výměnkářkou Annou Mertovou."
      },
      {
        "title": "Sčítací operát 1910 – Rychta čp. 7 (Eduard Koryčán)",
        "type": "census",
        "year": "1910",
        "source": "ZAO Olomouc, karton 436, inv. č. 1765, snímky 0021, 0022",
        "file": "assets/archives/cp7/su1000_c_pom_411_inv_c_1765_karton_436_null_dlouhomilov_serie_cp_1_115_1910_0022.jpg",
        "description": "Arch dokládající chov 6 koní, 25 kusů skotu a hospodaření Eduarda Koryčána z Beňova."
      },
      {
        "title": "Sčítací operát 1921 – Rychta čp. 7 (František Hvízd a výměnkáři)",
        "type": "census",
        "year": "1921",
        "source": "ZAO Olomouc, fascikl 3, inv. č. 1863, snímky 0036–0042",
        "file": "assets/archives/cp7/su1000_c_pom_411_inv_c_1863_fascikl_3_null_dlouhomilov_serie_cp_1_118_1921_0036.jpg",
        "description": "Sčítací arch ČSR s majitelem Františkem Hvízdem a výměnkářkou Mathildou Ptáčkovou roz. Všetečkovou."
      }
    ],
    "stories": [
      {
        "title": "Dědičná rychta jako centrum správy, šenku a obecního života",
        "era": "17.–19. století",
        "content": "Rychta čp. 7 představovala po staletí svrchované správní a společenské ohnisko Dlouhomilova. Dědičný rychtář disponoval výsadními právy zábřežského panství – vykonával nižší soudní pravomoc nad poddanými, vybíral poddanské dávky a držel výsadu provozovat šenk a řeznictví. Masivní areál se zděným obytným křídlem, klenutými stropy, sýpkou a arkádovým náspím do dvora byl koncipován nejen pro zemědělský provoz, ale pro shromažďování sousedů a obecní jednání."
      },
      {
        "title": "Od pohostinství a porodní báby k hanáckému velkozemědělství (1869–1910)",
        "era": "1869–1910",
        "content": "Archivní sčítací operáty odhalují neobyčejnou proměnu statku. V roce 1869 byla rychta doslova malým městečkem o 23 obyvatelích. Majitel Jan Merta si pronajal velký panský dvůr v Hrotovicích a syna Ernesta poslal na reálku do Znojma. Samotnou dlouhomilovskou rychtu mezitím obýval hostinský Antonín Katzer s manželkou Johannou, kteří vedli šenk a řeznictví, v dalších prostorách pracovala obecní zkoušená porodní bába (Hebamme) Františka Kauerová, samostatný obchodník s máslem a vejci Josef Polách i textilní dělníci. Koncem 19. století za Arnošta Merty se areál proměnil v modernizovaný agrární gigant (5 koní, 16 kusů dobytka, vlastní kovář a podkovář František Vlach na dvoře), který roku 1910 převzal Eduard Koryčán z Beňova u Přerova s impozantním stádem 25 kusů skotu a 6 koní."
      },
      {
        "title": "Rychtářská krev Všetečků a student techniky na výměnku (1921)",
        "era": "1921",
        "content": "Při sčítání lidu v roce 1921 již na statku hospodařil František Hvízd z Hvozdce. Ve druhém bytě usedlosti však na výměnku stále žila Mathilda Ptáčková rozená Všetečková (*1860) – dcera starobylého dlouhomilovského rodu Všetečků, z něhož pocházeli dřívější dědiční rychtáři. Záznam ukazuje pozoruhodnou vzdělanostní kontinuitu rodiny: její dcera Eliška působila jako industriální učitelka na obecné škole ve Strupšíně a syn Zdeněk Ptáček (*1899) studoval na České vysoké škole technické v Brně, což bylo v té době v podhorské vesnici naprosto výjimečné."
      }
    ]
  },
  {
    "id": "cp5",
    "number": "5",
    "localName": "Venkovská usedlost čp. 5",
    "type": "Kulturní památka ČR (ÚSKP)",
    "isHeritage": true,
    "uskpNumber": "27339/8-866",
    "npuDirectUrl": "https://www.pamatkovykatalog.cz/soupis-pamatek?obec=Dlouhomilov&cp=5",
    "wikiUrl": "https://cs.wikipedia.org/wiki/Seznam_kulturn%C3%ADch_pam%C3%A1tek_v_Dlouhomilov%C4%9B#usedlost_čp._5",
    "wikidataId": "Q38234853",
    "commonsUrl": "https://commons.wikimedia.org/wiki/Category:Cultural_monuments_in_Dlouhomilov",
    "heritageDescription": "Nemovitá kulturní památka ČR. Výjimečně zachovalá venkovská usedlost tvořící nedílnou součást původní lidové zástavby Dlouhomilova. Zahrnuje obytné stavení a navazující hospodářské křídlo.",
    "heritageSource": "NPÚ Památkový katalog, rejstř. č. ÚSKP 27339/8-866.",
    "location": {
      "lat": 49.9080351,
      "lng": 16.9916475,
      "cadastralParcel": "st. 7",
      "landParcels": "45, 46",
      "source": "ČÚZK – Katastr nemovitostí & RUIAN"
    },
    "buildingFootprints": {
      "cadastralNumber1834": "st. 7",
      "cadastralNumberModern": "st. 7",
      "masonryType1834": "kombinovaná (zděná obytná část, dřevěné hospodářské zázemí)",
      "changesSummary": "Dochovaná tradiční selská dispozice s trojosým štítem. Hospodářská křídla tvoří s obytným domem uzavřený dvůr.",
      "footprint1834": {
        "masonry": [
          [
            49.90815,
            16.99145
          ],
          [
            49.90815,
            16.9918
          ],
          [
            49.908,
            16.9918
          ],
          [
            49.908,
            16.99145
          ]
        ],
        "wooden": [
          [
            [
              49.908,
              16.99145
            ],
            [
              49.908,
              16.99165
            ],
            [
              49.90788,
              16.99165
            ],
            [
              49.90788,
              16.99145
            ]
          ]
        ]
      },
      "footprintModern": [
        [
          49.90816,
          16.99142
        ],
        [
          49.90816,
          16.99185
        ],
        [
          49.90785,
          16.99185
        ],
        [
          49.90785,
          16.99142
        ]
      ]
    },
    "statusStableCadastre": "Částečně roubené a zděné stavení s uzavřeným hospodářským dvorem.",
    "cadastreSource": "ÚAZK ČÚZK, Stabilní katastr 1834, k.ú. Lomigsdorf.",
    "description": "Historická selská usedlost představující tradiční vývoj severomoravského lidového domu 19. století s dochovanými klenbami a trámovými stropy. V první polovině 20. století je v matrikách spojena s rodinou Lukasových, kolářským mistrem Bohumilem Vainlichem (*1904 Lesnice) a rodinou Boxanových.",
    "timeline": [
      {
        "year": "1834",
        "owner": "Sedlák čp. 5",
        "event": "Zaneseno v císařských otiscích stabilního katastru (stavební parcela st. 7).",
        "sourceType": "verified",
        "source": "ÚAZK ČÚZK 1834."
      },
      {
        "year": "1907",
        "owner": "Josef Veneš (*1884) × Barbora Fišarová (*1881)",
        "event": "Matriční zápis sňatku na čp. 5: dělník Josef Veneš (* 12. 2. 1884 Dlouhomilov, syn podruha Františka Veneše a Františky roz. Dvořákové) si bere Barboru Fišarovou z Kosova.",
        "sourceType": "unverified",
        "source": "ZAO Opava, Sbírka matrik, farnost Dlouhomilov, sign. Zá II 7, snímek 37 (přečteno pomocníkem)."
      },
      {
        "year": "1921",
        "owner": "Karel Lukas (*1860) a Filomena Lukasová (*1864)",
        "event": "Sčítání lidu 1921: Na usedlosti hospodaří malorolník Karel Lukas s manželkou Filomenou.",
        "sourceType": "verified",
        "source": "SOkA Šumperk, fond OSP Zábřeh, Sčítání lidu 1921, obec Dlouhomilov, fascikl 3, arch čp. 5.",
        "scanFile": "assets/archives/cp5/dlouhomilov_1921_cp5_obyvatele.jpg",
        "scanTitle": "Sčítací operát 1921 – čp. 5"
      },
      {
        "year": "1923–1932",
        "owner": "Karel Lukas (†1923) a Filomena Lukasová (†1932)",
        "event": "Matriční rejstříky zemřelých uvádějí na čp. 5 úmrtí Karla Lukase (1923) a Filomeny Lukasové (1932).",
        "sourceType": "unverified",
        "source": "ZAO Opava, Sbírka matrik, farnost Dlouhomilov, sign. Zá II 7 (sn. 346) a Zá II 10 (sn. 226)."
      },
      {
        "year": "1930",
        "owner": "Bohumil Vainlich (*1904), kolářský mistr",
        "event": "Matriční zápis sňatku: kolářský mistr v Dlouhomilově čp. 5 Bohumil Vainlich (* 16. 7. 1904 Lesnice, syn rolníka Jana Vainlicha a Marie roz. Fixové) uzavírá sňatek.",
        "sourceType": "unverified",
        "source": "ZAO Opava, Sbírka matrik, farnost Dlouhomilov, sign. Zá II 10, snímek 5."
      },
      {
        "year": "1949",
        "owner": "Ladislav Boxan × Josefa Mynářová",
        "event": "Zápis sňatku v rejstříku oddaných farnosti Dlouhomilov pro čp. 5.",
        "sourceType": "unverified",
        "source": "ZAO Opava, Sbírka matrik, farnost Dlouhomilov, sign. Zá II 10, snímek 144."
      },
      {
        "year": "1995",
        "owner": "Památková ochrana",
        "event": "Prohlášeno nemovitou kulturní památkou ČR.",
        "sourceType": "verified",
        "source": "NPÚ ÚSKP 27339/8-866."
      }
    ],
    "census": [
      {
        "year": 1921,
        "censusDate": "16. února 1921",
        "houseNumber": "5",
        "settlement": "Dlouhomilov",
        "source": "SOkA Šumperk, fond Okresní správa politická Zábřeh, Sčítání lidu 1921, obec Dlouhomilov, fascikl 3, arch čp. 5",
        "sourceArchive": "SOkA Šumperk",
        "sourceFond": "Okresní správa politická Zábřeh",
        "sourceScan": "dlouhomilov_1921_cp5_obyvatele.jpg",
        "totalInhabitants": 2,
        "familiesCount": 1,
        "inhabitants": [
          {
            "name": "Karel Lukas",
            "relation": "Majitel usedlosti a bytu / hospodář",
            "birthDate": "28. 8. 1860",
            "birthPlace": "Dolní Olešná",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "Malorolník na vlastní usedlosti (v obci od 6. 5. 1893)",
            "literacy": "čte i píše"
          },
          {
            "name": "Filomena Lukasová",
            "relation": "Manželka Karla",
            "birthDate": "4. 9. 1864",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "Vedení domácnosti",
            "literacy": "čte i píše"
          }
        ],
        "livestock": {
          "horses": 0,
          "cattle": 0,
          "pigs": 0,
          "goats": 0
        }
      }
    ],
    "documents": [
      {
        "title": "Sčítací operát 1921 – Bytový arch usedlosti čp. 5 (Karel a Filomena Lukasovi)",
        "type": "census",
        "year": "1921",
        "source": "SOkA Šumperk, OSP Zábřeh, Sčítání 1921, obec Dlouhomilov, arch čp. 5",
        "file": "assets/archives/cp5/dlouhomilov_1921_cp5_obyvatele.jpg",
        "description": "Originální sčítací arch z 16. února 1921 zachycující malorolníka Karla Lukase s manželkou Filomenou na usedlosti čp. 5."
      }
    ],
    "stories": [
      {
        "title": "Kolářská živnost a obyvatelé památkové usedlosti čp. 5 ve 20. století",
        "era": "1907–1949",
        "content": "Matriční knihy farnosti Dlouhomilov (sign. Zá II 7 a Zá II 10) dokládají, že památkově chráněná usedlost čp. 5 nebyla jen čistě zemědělským gruntem, ale ve 30. letech 20. století zde působil také samostatný kolářský mistr Bohumil Vainlich (*1904, rodem ze sousední Lesnice). V předchozím desetiletí zde žili manželé Karel (†1923) a Filomena (†1932) Lukasovi."
      }
    ]
  },
  {
    "id": "cp24",
    "number": "24",
    "localName": "Venkovská usedlost čp. 24 (Grunt u Kouřilů a Dvořáků)",
    "type": "Kulturní památka ČR (ÚSKP)",
    "isHeritage": true,
    "uskpNumber": "22688/8-868",
    "npuDirectUrl": "https://www.pamatkovykatalog.cz/soupis-pamatek?obec=Dlouhomilov&cp=24",
    "wikiUrl": "https://cs.wikipedia.org/wiki/Seznam_kulturn%C3%ADch_pam%C3%A1tek_v_Dlouhomilov%C4%9B#usedlost_čp._24",
    "wikidataId": "Q38234855",
    "commonsUrl": "https://commons.wikimedia.org/wiki/Category:Cultural_monuments_in_Dlouhomilov",
    "heritageDescription": "Nemovitá kulturní památka ČR. Památkově chráněný areál selského gruntu zahrnující dům usedlosti, klenutou bránu s vraty a hospodářskou budovu.",
    "heritageSource": "NPÚ Památkový katalog, rejstř. č. ÚSKP 22688/8-868.",
    "location": {
      "lat": 49.9094601,
      "lng": 16.9894438,
      "cadastralParcel": "st. 32",
      "landParcels": "115, 116",
      "source": "ČÚZK – Katastr nemovitostí & RUIAN"
    },
    "buildingFootprints": {
      "cadastralNumber1834": "st. 32",
      "cadastralNumberModern": "st. 32",
      "masonryType1834": "kombinovaná (zděný dům s klenutou bránou, dřevěné chlévy)",
      "changesSummary": "Charakteristická usedlost s monumentální klenutou vjezdovou bránou do dvora, která tvoří dominantu uliční čáry.",
      "footprint1834": {
        "masonry": [
          [
            49.90956,
            16.98925
          ],
          [
            49.90956,
            16.9896
          ],
          [
            49.90942,
            16.9896
          ],
          [
            49.90942,
            16.98925
          ]
        ],
        "wooden": [
          [
            [
              49.90942,
              16.98925
            ],
            [
              49.90942,
              16.9895
            ],
            [
              49.90928,
              16.9895
            ],
            [
              49.90928,
              16.98925
            ]
          ]
        ]
      },
      "footprintModern": [
        [
          49.90958,
          16.98922
        ],
        [
          49.90958,
          16.98965
        ],
        [
          49.90925,
          16.98965
        ],
        [
          49.90925,
          16.98922
        ]
      ]
    },
    "statusStableCadastre": "Zemědělský grunt s vjezdovou bránou do dvora.",
    "cadastreSource": "ÚAZK ČÚZK, Stabilní katastr 1834.",
    "description": "Památkově chráněný selský grunt s monumentální klenutou vjezdovou bránou, úzce spjatý s historií rodů Vlčků, Kouřilů a Dvořáků. V polovině 19. století zde hospodařil dědičný sedlák (Erbrichter/Bauer) František Kouřil († 11. 8. 1878) s manželkou Marianou roz. Vlčkovou (dcerou výměnkáře Josefa Vlčka na čp. 24). Dne 29. 7. 1878 se zde konala slavná dvojitá svatba: dcery Anna (*1857) a Ludmila Kouřilovy se provdaly za bratry Josefa a Karla Dvořákovy ze sousedního gruntu čp. 22. Zatímco Anna odešla s Josefem na čp. 22, Karel Dvořák s Ludmilou převzali hospodářství na čp. 24, kde následně hospodařil jejich syn Karel Dvořák ml. (* 2. 2. 1888 – † 1934).",
    "timeline": [
      {
        "year": "1834",
        "owner": "Josef Vlček (sedlák na čp. 24)",
        "event": "Zemědělský grunt s klenutou bránou do dvora (st. 32) zaznamenán v indikační skice stabilního katastru.",
        "sourceType": "verified",
        "source": "ÚAZK ČÚZK 1834."
      },
      {
        "year": "1857",
        "owner": "František Kouřil × Mariana roz. Vlčková",
        "event": "Matriční zápis narození: Dne 9. 12. 1857 se na čp. 24 narodila Anna Kouřilová († 29. 5. 1949 na čp. 22), dcera dědičného sedláka Františka Kouřila a Mariany, dcery výměnkáře Josefa Vlčka na čp. 24.",
        "sourceType": "verified",
        "source": "ZAO Opava, Sbírka matrik, farnost Dlouhomilov, sign. Zá II 2 (N 1856–1864), snímek 12."
      },
      {
        "year": "1878",
        "owner": "Dvojitá svatba sester Kouřilových a úmrtí Františka Kouřila",
        "event": "Dne 29. 7. 1878 se na čp. 24 konala dvojitá svatba: sestry Anna (*1857) a Ludmila Kouřilovy si vzaly bratry Josefa (*1857) a Karla Dvořákovy z čp. 22. Jen o dva týdny později, 11. 8. 1878, umírá na čp. 24 ve věku 59 let hospodář František Kouřil a grunt přebírá zeť Karel Dvořák s Ludmilou roz. Kouřilovou.",
        "sourceType": "verified",
        "source": "ZAO Opava, Sbírka matrik, farnost Dlouhomilov, sign. Zá II 5 (O sn. 30, Z sn. 147)."
      },
      {
        "year": "1934",
        "owner": "Karel Dvořák ml. (*1888 – †1934)",
        "event": "Matriční zápis úmrtí: V roce 1934 umírá na čp. 24 ve věku 46 let rolník Karel Dvořák (* 2. 2. 1888 Dlouhomilov, sezdán 8. 5. 1920), syn Karla Dvořáka a Ludmily roz. Kouřilové.",
        "sourceType": "verified",
        "source": "ZAO Opava, Sbírka matrik, farnost Dlouhomilov, sign. Zá II 10 (Z 1930–1949), snímek 170 (rejstřík sn. 219)."
      },
      {
        "year": "1938",
        "owner": "Anna Dvořáková (*1921) × Karel Jílek (*1907)",
        "event": "Matriční zápis sňatku: Sedmnáctiletá Anna Dvořáková (* 12. 5. 1921 na čp. 24, dcera † rolníka Karla Dvořáka a Anny roz. Šlámové) se provdala za Karla Jílka (* 1. 8. 1907 Brníčko), majitele autodopravy v Dlouhomilově čp. 49.",
        "sourceType": "unverified",
        "source": "ZAO Opava, Sbírka matrik, farnost Dlouhomilov, sign. Zá II 10, snímek 39 (rejstřík sn. 151)."
      },
      {
        "year": "1995",
        "owner": "Památková ochrana",
        "event": "Zapsáno v Ústředním seznamu kulturních památek ČR pro svou mimořádnou architektonickou hodnotu s klenutou bránou.",
        "sourceType": "verified",
        "source": "NPÚ ÚSKP 22688/8-868."
      }
    ],
    "census": [],
    "documents": [],
    "stories": [
      {
        "title": "Grunt u Kouřilů a Dvořáků: Rodiště Anny Kouřilové (*1857) a dějiště dvojité svatby roku 1878",
        "era": "1857–1938",
        "content": "Památkově chráněná usedlost čp. 24 s typickou klenutou vjezdovou bránou je jedním z klíčových uzlů rodokmenu Dvořáků v Dlouhomilově. Dne 9. prosince 1857 se zde sedláku Františku Kouřilovi a jeho ženě Marianě roz. Vlčkové narodila dcera Anna Kouřilová (prababička z větve čp. 22 a čp. 29). Dne 29. července 1878 vystrojil František Kouřil svým dvěma dcerám – Anně a Ludmile – dvojitou svatbu s bratry Josefem a Karlem Dvořákovými z vedlejší usedlosti čp. 22. Jen třináct dní po veselce, 11. srpna 1878, devětapadesátiletý hospodář František Kouřil zemřel. Zatímco Anna odešla s Josefem Dvořákem hospodařit na čp. 22 (a dožila se úctyhodných 91 let až do roku 1949), její sestra Ludmila s manželem Karlem Dvořákem převzali rodný grunt čp. 24, kde ve 20. století pokračoval jejich syn Karel Dvořák ml. (*1888, †1934)."
      }
    ]
  },
  {
    "id": "cp43",
    "number": "43",
    "localName": "Venkovská usedlost čp. 43 (Usedlost ve svahu)",
    "type": "Kulturní památka ČR (ÚSKP)",
    "isHeritage": true,
    "uskpNumber": "26033/8-869",
    "npuDirectUrl": "https://www.pamatkovykatalog.cz/soupis-pamatek?obec=Dlouhomilov&cp=43",
    "wikiUrl": "https://cs.wikipedia.org/wiki/Seznam_kulturn%C3%ADch_pam%C3%A1tek_v_Dlouhomilov%C4%9B#usedlost_čp._43",
    "wikidataId": "Q38234859",
    "commonsUrl": "https://commons.wikimedia.org/wiki/Category:Cultural_monuments_in_Dlouhomilov",
    "heritageDescription": "Nemovitá kulturní památka ČR. Ojedinělý příklad lidové architektury – samostatný zděný přízemní objekt s částečně zapuštěným suterénem, díky němuž se stavba ze dvora jeví jako patrová.",
    "heritageSource": "NPÚ Památkový katalog, rejstř. č. ÚSKP 26033/8-869.",
    "location": {
      "lat": 49.9023375,
      "lng": 16.9931813,
      "cadastralParcel": "st. 55",
      "landParcels": "201, 202",
      "source": "ČÚZK – Katastr nemovitostí & RUIAN"
    },
    "buildingFootprints": {
      "cadastralNumber1834": "st. 55",
      "cadastralNumberModern": "st. 55",
      "masonryType1834": "zděná stavba (nespalný kamenný a cihlový dům s vysokým soklem)",
      "changesSummary": "Objekt ve svahu si uchoval svůj původní kompaktní obdélníkový půdorys z roku 1834 bez zásadních destruktivních přestaveb.",
      "footprint1834": {
        "masonry": [
          [
            49.90242,
            16.993
          ],
          [
            49.90242,
            16.99338
          ],
          [
            49.90226,
            16.99338
          ],
          [
            49.90226,
            16.993
          ]
        ],
        "wooden": []
      },
      "footprintModern": [
        [
          49.90243,
          16.99298
        ],
        [
          49.90243,
          16.9934
        ],
        [
          49.90225,
          16.9934
        ],
        [
          49.90225,
          16.99298
        ]
      ]
    },
    "statusStableCadastre": "Zděná budova ve svahu se zahloubeným hospodářským přízemím.",
    "cadastreSource": "ÚAZK ČÚZK, Stabilní katastr 1834.",
    "description": "Architektonicky unikátní usedlost využívající svažitý terén dlouhomilovského údolí. Dispozice domu propojuje obytné prostory s hospodářským zázemím v suterénu.",
    "timeline": [
      {
        "year": "1834",
        "owner": "Hospodář ve svahu",
        "event": "Zaneseno ve stabilním katastru (stavební parcela st. 55).",
        "sourceType": "verified",
        "source": "ÚAZK ČÚZK 1834."
      },
      {
        "year": "1940",
        "owner": "Rodina Huberta Kupky",
        "event": "Matriční zápis úmrtí: na čp. 43 umírá ve věku 31 let Bedřiška Kupková (* 29. 3. 1909 Lesnice), manželka Huberta Kupky, dělníka na pile v Dlouhomilově (sezdáni 5. 11. 1932).",
        "sourceType": "unverified",
        "source": "ZAO Opava, Sbírka matrik, farnost Dlouhomilov, sign. Zá II 10, snímek 178."
      },
      {
        "year": "1995",
        "owner": "Památková ochrana",
        "event": "Zařazeno mezi kulturní památky ČR.",
        "sourceType": "verified",
        "source": "NPÚ ÚSKP 26033/8-869."
      }
    ],
    "census": [],
    "documents": [],
    "stories": []
  },
  {
    "id": "cp1",
    "number": "1",
    "localName": "Kostel Všech svatých s areálem hřbitova",
    "type": "Kulturní památka ČR (ÚSKP)",
    "isHeritage": true,
    "uskpNumber": "26886/8-865",
    "npuDirectUrl": "https://www.pamatkovykatalog.cz/soupis-pamatek?obec=Dlouhomilov&cp=1",
    "wikiUrl": "https://cs.wikipedia.org/wiki/Kostel_V%C5%A1ech_svat%C3%BDch_(Dlouhomilov)",
    "wikidataId": "Q12030548",
    "commonsUrl": "https://commons.wikimedia.org/wiki/Category:Church_of_All_Saints_(Dlouhomilov)",
    "heritageDescription": "Nemovitá kulturní památka ČR. Barokně-klasicistní farní kostel postavený v roce 1768 na místě starší svatyně. Areál zahrnuje chrám, ohradní zeď se hřbitovem a náhrobky.",
    "heritageSource": "NPÚ Památkový katalog, rejstř. č. ÚSKP 26886/8-865.",
    "location": {
      "lat": 49.9088638,
      "lng": 16.9912638,
      "cadastralParcel": "st. 1",
      "landParcels": "1, 2",
      "source": "ČÚZK – Katastr nemovitostí & RUIAN"
    },
    "buildingFootprints": {
      "cadastralNumber1834": "st. 1",
      "cadastralNumberModern": "st. 1",
      "masonryType1834": "kamenné a cihlové zdivo (nespalná sakrální stavba s věží a ohradní zdí hřbitova)",
      "changesSummary": "Kostelní loď, presbytář a věž stojí ve zcela nezměněné poloze od barokní přestavby v roce 1768. Slouží jako hlavní geodetický opěrný bod.",
      "footprint1834": {
        "masonry": [
          [
            49.90902,
            16.9911
          ],
          [
            49.90902,
            16.99145
          ],
          [
            49.90872,
            16.99145
          ],
          [
            49.90872,
            16.9911
          ]
        ],
        "wooden": []
      },
      "footprintModern": [
        [
          49.90903,
          16.99108
        ],
        [
          49.90903,
          16.99148
        ],
        [
          49.9087,
          16.99148
        ],
        [
          49.9087,
          16.99108
        ]
      ]
    },
    "statusStableCadastre": "Zděná nespalná stavba kostela s věží a ohrazeným hřbitovem.",
    "cadastreSource": "ÚAZK ČÚZK, Stabilní katastr 1834.",
    "description": "Dominanta památkové zóny Dlouhomilova. Farní kostel Všech svatých s bohatou duchovní i společenskou historií.",
    "timeline": [
      {
        "year": "1350",
        "owner": "Duchovní správa",
        "event": "První nepřímé zmínky o duchovní správě v oblasti.",
        "sourceType": "verified",
        "source": "Biskupství olomoucké, archivní listiny."
      },
      {
        "year": "1768",
        "owner": "Farnost Dlouhomilov",
        "event": "Výstavba stávajícího barokně-klasicistního kostela.",
        "sourceType": "verified",
        "source": "Farní pamětní kniha Dlouhomilov (ZAO)."
      },
      {
        "year": "1995",
        "owner": "Památková ochrana",
        "event": "Kulturní památka ČR.",
        "sourceType": "verified",
        "source": "NPÚ ÚSKP 26886/8-865."
      }
    ],
    "census": [],
    "documents": [],
    "stories": []
  },
  {
    "id": "cp2",
    "number": "2",
    "localName": "Fara (čp. 2)",
    "type": "Památkově hodnotný objekt v památkové zóně",
    "isHeritage": false,
    "uskpNumber": "VPZ 2350",
    "npuDirectUrl": "https://www.pamatkovykatalog.cz/soupis-pamatek?obec=Dlouhomilov&cp=2",
    "wikiUrl": "https://cs.wikipedia.org/wiki/Dlouhomilov",
    "wikidataId": "Q1262078",
    "heritageDescription": "Památkově hodnotný objekt ve Vesnické památkové zóně Dlouhomilov (ÚSKP 2350).",
    "heritageSource": "Vesnická památková zóna Dlouhomilov, vyhláška MK ČR 249/1995 Sb.",
    "location": {
      "lat": 49.9086,
      "lng": 16.9914,
      "cadastralParcel": "st. 2",
      "landParcels": "12, 13",
      "source": "ČÚZK – Katastr nemovitostí & RUIAN"
    },
    "buildingFootprints": {
      "cadastralNumber1834": "st. 2",
      "cadastralNumberModern": "st. 2",
      "masonryType1834": "zděná patrová farní budova s hospodářským zázemím",
      "changesSummary": "Farní budova situovaná v těsném sousedství kostela. Přestavěna v roce 1843 na novou patrovou budovu na stávající parcele st. 2.",
      "footprint1834": {
        "masonry": [
          [
            49.90868,
            16.99125
          ],
          [
            49.90868,
            16.99158
          ],
          [
            49.90852,
            16.99158
          ],
          [
            49.90852,
            16.99125
          ]
        ],
        "wooden": []
      },
      "footprintModern": [
        [
          49.9087,
          16.99122
        ],
        [
          49.9087,
          16.9916
        ],
        [
          49.9085,
          16.9916
        ],
        [
          49.9085,
          16.99122
        ]
      ]
    },
    "statusStableCadastre": "Zděná patrová budova fary.",
    "cadastreSource": "ÚAZK ČÚZK, Stabilní katastr 1834.",
    "description": "Sídlo dlouhomilovských farářů, kde byly po staletí uchovávány farní matriky.",
    "timeline": [
      {
        "year": "1784",
        "owner": "Farní úřad",
        "event": "Zřízení lokálie v Dlouhomilově.",
        "sourceType": "verified",
        "source": "Zemský archiv v Opavě, fond Farní úřad Dlouhomilov."
      },
      {
        "year": "1843",
        "owner": "Farní úřad",
        "event": "Výstavba nové patrové farní budovy (st. 2).",
        "sourceType": "verified",
        "source": "Stavební plány fary, SOkA Šumperk."
      },
      {
        "year": "1890–1910",
        "owner": "Faráři Antonín Riedl a M. Špaček",
        "event": "Dlouhomilovští faráři P. Antonín Riedl (1890) a P. M. Špaček (1900, 1910) vedou farní matriky a vystavují úřední křestní listy přikládané ke sčítacím operátům.",
        "sourceType": "verified",
        "source": "ZAO Opava, Sčítání lidu 1890–1910 (křestní listy u čp. 22, 46, 110)."
      },
      {
        "year": "1948",
        "owner": "Rodina Adolfa Mináře",
        "event": "Poznámka k rodině Adolfa Mináře: Matrika uvádí čp. 2, jedná se však o usedlost v osadě Medelské čp. 2 (nikoli farní budovu v centru obce). Viz profil Medelské čp. 2.",
        "sourceType": "unverified",
        "source": "ZAO Opava, Sbírka matrik, farnost Dlouhomilov, sign. Zá II 10, snímek 111."
      }
    ],
    "census": [],
    "documents": [],
    "stories": []
  },
  {
    "id": "cp12",
    "number": "12",
    "localName": "Stará škola (čp. 12)",
    "type": "Památkově hodnotný objekt v památkové zóně",
    "isHeritage": false,
    "uskpNumber": "VPZ 2350",
    "npuDirectUrl": "https://www.pamatkovykatalog.cz/soupis-pamatek?obec=Dlouhomilov&cp=12",
    "wikiUrl": "https://cs.wikipedia.org/wiki/Dlouhomilov",
    "wikidataId": "Q1262078",
    "heritageDescription": "Historická budova obecné školy v památkové zóně obce.",
    "heritageSource": "Vesnická památková zóna Dlouhomilov, vyhláška MK ČR 249/1995 Sb.",
    "location": {
      "lat": 49.9120488,
      "lng": 16.99016,
      "cadastralParcel": "st. 18",
      "landParcels": "25",
      "source": "ČÚZK – Katastr nemovitostí & RUIAN"
    },
    "buildingFootprints": {
      "cadastralNumber1834": "st. 18",
      "cadastralNumberModern": "st. 18",
      "masonryType1834": "zděná obecní školní budova",
      "changesSummary": "Budova školy prošla koncem 19. století rozšířením na dvoutřídku, její základní poloha v severní části obce zůstává identická.",
      "footprint1834": {
        "masonry": [
          [
            49.91215,
            16.99
          ],
          [
            49.91215,
            16.99035
          ],
          [
            49.91195,
            16.99035
          ],
          [
            49.91195,
            16.99
          ]
        ],
        "wooden": []
      },
      "footprintModern": [
        [
          49.91218,
          16.98995
        ],
        [
          49.91218,
          16.9904
        ],
        [
          49.91192,
          16.9904
        ],
        [
          49.91192,
          16.98995
        ]
      ]
    },
    "statusStableCadastre": "Zděná budova školy.",
    "cadastreSource": "ÚAZK ČÚZK, Stabilní katastr 1834.",
    "description": "Historická obecní škola v Dlouhomilově, která vzdělávala generace dětí z Dlouhomilova i Benkova.",
    "timeline": [
      {
        "year": "1820",
        "owner": "Obec Dlouhomilov",
        "event": "Založení stálé školní budovy.",
        "sourceType": "verified",
        "source": "Školní kronika obce Dlouhomilov, SOkA Šumperk."
      },
      {
        "year": "1888",
        "owner": "Místní školní rada",
        "event": "Rozšíření školy na dvoutřídní.",
        "sourceType": "verified",
        "source": "Školní kronika obce Dlouhomilov, SOkA Šumperk."
      },
      {
        "year": "1901–1939",
        "owner": "Rodina Mynářů / Minářů na čp. 12",
        "event": "V matričních rejstřících a knihách zemřelých jsou na čp. 12 zaznamenáni členové rodiny Mynářů/Minářů, včetně úmrtí vdovy Františky Minářové roz. Kožouškové (* 5. 2. 1887 Dlouhomilov, vdovy po domkáři Josefu Minářovi) v roce 1939.",
        "sourceType": "unverified",
        "source": "ZAO Opava, Sbírka matrik, farnost Dlouhomilov, sign. Zá II 7 (sn. 346) a Zá II 10 (sn. 177)."
      }
    ],
    "census": [],
    "documents": [],
    "stories": []
  },
  {
    "id": "kaple_benkov",
    "number": "Benkov",
    "localName": "Kaplička v Benkově",
    "type": "Kulturní památka ČR (ÚSKP)",
    "isHeritage": true,
    "uskpNumber": "28584/8-871",
    "npuDirectUrl": "https://www.pamatkovykatalog.cz/soupis-pamatek?uskp=28584%2F8-871",
    "wikiUrl": "https://cs.wikipedia.org/wiki/Seznam_kulturn%C3%ADch_pam%C3%A1tek_v_Dlouhomilov%C4%9B#kaplička",
    "wikidataId": "Q38234867",
    "commonsUrl": "https://commons.wikimedia.org/wiki/Category:Cultural_monuments_in_Dlouhomilov",
    "heritageDescription": "Nemovitá kulturní památka ČR. Drobná sakrální stavba lidového baroka v přidružené vsi Benkov.",
    "heritageSource": "NPÚ Památkový katalog, rejstř. č. ÚSKP 28584/8-871.",
    "location": {
      "lat": 49.8947477,
      "lng": 17.0231412,
      "cadastralParcel": "st. 10 (Benkov)",
      "landParcels": "Benkov",
      "source": "ČÚZK – Katastr nemovitostí & RUIAN"
    },
    "buildingFootprints": {
      "cadastralNumber1834": "st. 10 (Benkov)",
      "cadastralNumberModern": "st. 10 (Benkov)",
      "masonryType1834": "zděná návesní kaple se zvonicí",
      "changesSummary": "Drobná zděná barokní kaple uprostřed návsi v Benkově. Dochována v autentické půdorysné stopě.",
      "footprint1834": {
        "masonry": [
          [
            49.8948,
            17.02305
          ],
          [
            49.8948,
            17.02322
          ],
          [
            49.8947,
            17.02322
          ],
          [
            49.8947,
            17.02305
          ]
        ],
        "wooden": []
      },
      "footprintModern": [
        [
          49.89482,
          17.02303
        ],
        [
          49.89482,
          17.02325
        ],
        [
          49.89468,
          17.02325
        ],
        [
          49.89468,
          17.02303
        ]
      ]
    },
    "statusStableCadastre": "Zděná kaple se zvoničkou.",
    "cadastreSource": "ÚAZK ČÚZK, Stabilní katastr 1834, k.ú. Benke (Benkov).",
    "description": "Památkově chráněná kaplička v Benkově, která sloužila k vyzvánění klekání a sousedským pobožnostem.",
    "timeline": [
      {
        "year": "1850",
        "owner": "Obec Benkov",
        "event": "Výstavba zděné návesní kapličky.",
        "sourceType": "verified",
        "source": "NPÚ Památkový katalog, rejstř. č. ÚSKP 28584/8-871."
      }
    ],
    "census": [],
    "documents": [],
    "stories": []
  },
  {
    "id": "cp10",
    "number": "10",
    "localName": "Usedlost čp. 10 (Grunt u Jílků a Šafářů)",
    "type": "Tradiční zemědělská usedlost",
    "isHeritage": false,
    "uskpNumber": "VPZ 2350",
    "heritageDescription": "Památkově hodnotný objekt ve Vesnické památkové zóně Dlouhomilov.",
    "heritageSource": "Vesnická památková zóna Dlouhomilov, vyhláška MK ČR 249/1995 Sb.",
    "location": {
      "lat": 49.90835,
      "lng": 16.99045,
      "cadastralParcel": "st. 14",
      "landParcels": "40, 41",
      "source": "ČÚZK – Katastr nemovitostí"
    },
    "statusStableCadastre": "Zděné obytné stavení s navazujícím hospodářským dvorem.",
    "cadastreSource": "ÚAZK ČÚZK, Stabilní katastr 1834.",
    "description": "Tradiční zemědělská usedlost doložená ve všech sedmi novodobých sčítáních lidu (1857–1921). Statek je spojen s rodem Pilchů/Jílků a s pozoruhodným životním osudem Františka Šafáře, který zde v roce 1890 začínal jako šestnáctiletý čeledín a o dvacet let později se stal váženým hospodářem a majitelem celého gruntu.",
    "timeline": [
      {
        "year": "1834",
        "owner": "Selský grunt",
        "event": "Zděné obytné stavení (st. 14) s navazujícím hospodářským dvorem zachyceno v indikační skice stabilního katastru.",
        "sourceType": "verified",
        "source": "ÚAZK ČÚZK, Stabilní katastr 1834, k.ú. Dlouhomilov."
      },
      {
        "year": "1857",
        "owner": "Josef Pilch / Jílek (*1807)",
        "event": "Sčítání lidu 1857: Josef Pilch (Jílek) hospodaří s manželkou Josefou a dětmi Johannem, Franzem, Karlem a Josefou; v druhém bytě žije pravděpodobně matka Barbara Jílková (*1792).",
        "sourceType": "verified",
        "source": "ZAO Olomouc, fond Okresní úřad Zábřeh, Sčítání 1857, karton 253, arch čp. 10 (snímky 0045, 0046, 0048).",
        "scanFile": "assets/archives/cp10/su1000_c_pom_411_inv_c_1299_karton_253_null_dlouhomilov_serie_cp_1_80_1857_0045.jpg",
        "scanTitle": "Sčítací arch 1857 – Dlouhomilov čp. 10"
      },
      {
        "year": "1869",
        "owner": "Karel Jílek (*1845)",
        "event": "Sčítání lidu 1869: Grunt přebírá syn Karel Jílek s chotí Marianou; na hospodářství pracují jako čeledíni bratři Jan a František Jílkovi, na výměnku žije ovdovělá matka Josefa. Celkem 8 obyvatel.",
        "sourceType": "verified",
        "source": "ZAO Olomouc, fond Okresní úřad Zábřeh, Sčítání 1869, karton 300, arch čp. 10 (snímky 0042, 0043).",
        "scanFile": "assets/archives/cp10/su1000_c_pom_411_inv_c_1392_karton_300_null_dlouhomilov_serie_cp_1_80_1869_0042.jpg",
        "scanTitle": "Sčítací arch 1869 – Dlouhomilov čp. 10"
      },
      {
        "year": "1880",
        "owner": "Karel Jílek (*1845)",
        "event": "Sčítání lidu 1880: Rozvíjející se selský grunt Karla Jílka s manželkou Marianou, dětmi Františkou a Josefem, bratry nádeníky a služebnými.",
        "sourceType": "verified",
        "source": "ZAO Olomouc, fond Okresní úřad Zábřeh, Sčítání 1880, karton 330, arch čp. 10 (snímky 0025, 0026).",
        "scanFile": "assets/archives/cp10/su1000_c_pom_411_inv_c_1476_karton_330_null_dlouhomilov_serie_cp_1_4_30_44_50_1880_0025.jpg",
        "scanTitle": "Sčítací arch 1880 – Dlouhomilov čp. 10"
      },
      {
        "year": "1890",
        "owner": "Karel Jílek (*1845)",
        "event": "Sčítání lidu 1890: Vrchol hospodaření Karla Jílka. V domě bydlí 11 obyvatel ve dvou bytech; jako mladý čeledín u koní a dobytka zde slouží šestnáctiletý František Šafář (*1874).",
        "sourceType": "verified",
        "source": "ZAO Olomouc, fond Okresní úřad Zábřeh, Sčítání 1890, karton 356, arch čp. 10 (snímky 0034, 0035).",
        "scanFile": "assets/archives/cp10/su1000_c_pom_411_inv_c_1560_karton_356_null_dlouhomilov_serie_cp_1_3_50_52_53_1890_0034.jpg",
        "scanTitle": "Sčítací arch 1890 – Dlouhomilov čp. 10"
      },
      {
        "year": "1900",
        "owner": "Karel Jílek (*1845)",
        "event": "Sčítání lidu 1900: Karel Jílek s rodinou a čeledí; na výměnku dožívá 81letá matka Josefa Jílková.",
        "sourceType": "verified",
        "source": "ZAO Olomouc, fond Okresní úřad Zábřeh, Sčítání 1900, karton 397, arch čp. 10 (snímky 0047, 0048).",
        "scanFile": "assets/archives/cp10/su1000_c_pom_411_inv_c_1664_karton_397_null_dlouhomilov_serie_cp_1_3_18_20_30_1900_0047.jpg",
        "scanTitle": "Sčítací arch 1900 – Dlouhomilov čp. 10"
      },
      {
        "year": "1910",
        "owner": "František Šafář (*1874)",
        "event": "Sčítání lidu 1910: Usedlost přebírá bývalý čeledín František Šafář s manželkou Marií a 5 dětmi. Dřívější hospodář Karel Jílek odchází na výměnek se synem Isidorem a bratrem Františkem. Celkem 14 obyvatel.",
        "sourceType": "verified",
        "source": "ZAO Olomouc, fond Okresní úřad Zábřeh, Sčítání 1910, karton 436, arch čp. 10 (snímky 0032, 0033, 0034).",
        "scanFile": "assets/archives/cp10/su1000_c_pom_411_inv_c_1765_karton_436_null_dlouhomilov_serie_cp_1_115_1910_0032.jpg",
        "scanTitle": "Sčítací arch 1910 – Dlouhomilov čp. 10"
      },
      {
        "year": "1921",
        "owner": "František Šafář (*1874)",
        "event": "Sčítání lidu 1921: Samostatně hospodařící rolník František Šafář s manželkou a 8 dětmi; ve výminku bydlí ovdovělý 76letý Karel Jílek se synem Isidorem a hospodyní Josefou Vitáskovou.",
        "sourceType": "verified",
        "source": "ZAO Olomouc, fond Okresní úřad Zábřeh, Sčítání 1921, fascikl 3, arch čp. 10 (snímky 0058, 0060, 0062).",
        "scanFile": "assets/archives/cp10/dlouhomilov_1921_cp10_byt1.jpg",
        "scanTitle": "Sčítací arch 1921 – Dlouhomilov čp. 10"
      },
      {
        "year": "1936",
        "owner": "Karel Šafář (*1905) × Ludmila Dvořáková (*1916)",
        "event": "Matriční zápis sňatku: Dne 27. 6. 1936 se oženil rolník Karel Šafář (* 25. 2. 1905 na čp. 10, syn Františka Šafáře a Marie roz. Jílkové) s Ludmilou Dvořákovou (* 24. 3. 1916 ze sousedního gruntu čp. 22, dcerou Karla Dvořáka a Ludmily roz. Maulerové).",
        "sourceType": "verified",
        "source": "ZAO Olomouc, Sbírka matrik, farnost Dlouhomilov, sig. Zá II 10 (O 1930–1949), snímek 30 (rejstřík sn. 159)."
      }
    ],
    "census": [
      {
        "year": 1921,
        "date": "15. února 1921",
        "isSample": false,
        "archiveSource": "Zemský archiv v Opavě, fond Okresní úřad Zábřeh, Sčítání lidu 1921, fascikl 3, arch čp. 10 (snímky 0058, 0060, 0062)",
        "note": "Originální sčítací operát ČSR 1921. Dům byl rozdělen na 2 byty (13 obyvatel): Byt č. 1 (rodina samostatného rolníka Františka Šafáře, 10 osob – manželka a 8 dětí, běžná čísla 54–63 na 2 listech) a Byt č. 2 (výměnek dřívějšího hospodáře Karla Jílka, 3 osoby).",
        "scanFile": "assets/archives/cp10/dlouhomilov_1921_cp10_byt1.jpg",
        "scanTitle": "Sčítací operát 1921 – Usedlost čp. 10",
        "inhabitants": [
          {
            "name": "František Šafář",
            "relation": "Hlava rodiny / Majitel usedlosti",
            "birthDate": "22. 11. 1874",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "Samostatný rolník na vlastním gruntě",
            "literacy": "čte i píše"
          },
          {
            "name": "Marie Šafářová",
            "relation": "Manželka",
            "birthDate": "6. 1. 1883",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "V domácnosti a hospodářství",
            "literacy": "čte i píše"
          },
          {
            "name": "Marie Šafářová ml.",
            "relation": "Dcera",
            "birthDate": "28. 8. 1901",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "Pomocnice v zemědělství",
            "literacy": "čte i píše"
          },
          {
            "name": "Františka Šafářová",
            "relation": "Dcera",
            "birthDate": "15. 8. 1903",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "Pomocnice v zemědělství",
            "literacy": "čte i píše"
          },
          {
            "name": "Karel Šafář",
            "relation": "Syn",
            "birthDate": "25. 10. 1905",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "Pomocník v zemědělství",
            "literacy": "čte i píše"
          },
          {
            "name": "Margaréta (Markéta) Šafářová",
            "relation": "Dcera",
            "birthDate": "13. 9. 1906",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "Pomocnice v zemědělství",
            "literacy": "čte i píše"
          },
          {
            "name": "Božena Šafářová",
            "relation": "Dcera",
            "birthDate": "1. 6. 1908",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "Dítě / školačka",
            "literacy": "čte i píše"
          },
          {
            "name": "František Šafář ml.",
            "relation": "Syn",
            "birthDate": "23. 3. 1911",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "Dítě / školák",
            "literacy": "čte i píše"
          },
          {
            "name": "Jan Šafář",
            "relation": "Syn",
            "birthDate": "27. 4. 1913",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "Dítě / žák školy",
            "literacy": "čte i píše"
          },
          {
            "name": "Miroslava Šafářová",
            "relation": "Dcera",
            "birthDate": "7. 11. 1914",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "Dítě",
            "literacy": "čte i píše"
          },
          {
            "name": "Karel Jílek",
            "relation": "Majitel bytu č. 2 (výměnkář)",
            "birthDate": "7. 3. 1845",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "Výměnkář / dřívější sedlák (vdovec)",
            "literacy": "čte i píše"
          },
          {
            "name": "Isidor Jílek",
            "relation": "Syn výměnkáře",
            "birthDate": "7. 12. 1895",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "Pomocník v zemědělství",
            "literacy": "čte i píše"
          },
          {
            "name": "Josefa Vitásková",
            "relation": "Hospodyně u výměnkáře",
            "birthDate": "1. 4. 1898",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "Hospodyně při výměnku",
            "literacy": "čte i píše"
          }
        ],
        "livestock": {
          "horses": 2,
          "cattle": 8,
          "pigs": 4,
          "goats": 0,
          "poultry": 15
        }
      },
      {
        "year": 1910,
        "date": "31. prosince 1910",
        "isSample": false,
        "archiveSource": "Zemský archiv v Opavě, fond Okresní úřad Zábřeh, Sčítání lidu 1910, karton 436, arch čp. 10 (snímky 0032, 0033, 0034)",
        "note": "Sčítání lidu 1910 zachycuje převzetí usedlosti Františkem Šafářem a odchod rodiny Karla Jílka na výměnek. Celkem 14 obyvatel ve 2 bytech.",
        "scanFile": "assets/archives/cp10/su1000_c_pom_411_inv_c_1765_karton_436_null_dlouhomilov_serie_cp_1_115_1910_0032.jpg",
        "scanTitle": "Sčítací arch 1910 – Usedlost čp. 10",
        "inhabitants": [
          {
            "name": "František Šafář",
            "relation": "Hlava rodiny / Majitel statku",
            "birthDate": "14. 11. 1874",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Rolník – majitel usedlosti",
            "literacy": "čte i píše"
          },
          {
            "name": "Marie Šafářová",
            "relation": "Manželka",
            "birthDate": "8. 1. 1886",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "V domácnosti a hospodářství",
            "literacy": "čte i píše"
          },
          {
            "name": "Marie Šafářová ml.",
            "relation": "Dcera",
            "birthDate": "29. 3. 1901",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Dítě / školačka",
            "literacy": "čte i píše"
          },
          {
            "name": "Františka Šafářová",
            "relation": "Dcera",
            "birthDate": "15. 8. 1903",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Dítě / školačka",
            "literacy": "čte i píše"
          },
          {
            "name": "Karel Šafář",
            "relation": "Syn",
            "birthDate": "25. 2. 1905",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Dítě",
            "literacy": "nečte"
          },
          {
            "name": "Markéta Šafářová",
            "relation": "Dcera",
            "birthDate": "13. 2. 1906",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Dítě",
            "literacy": "nečte"
          },
          {
            "name": "Božena Šafářová",
            "relation": "Dcera",
            "birthDate": "1. 6. 1908",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Dítě",
            "literacy": "nečte"
          },
          {
            "name": "Marie Dvořáková",
            "relation": "Služebná",
            "birthDate": "15. 11. 1870",
            "birthPlace": "Zvole",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Služka při hospodářství",
            "literacy": "čte i píše"
          },
          {
            "name": "Bohumila Šafářová",
            "relation": "Služebná",
            "birthDate": "7. 6. 1898",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Služebná děvečka",
            "literacy": "čte i píše"
          },
          {
            "name": "Jan Mlynář",
            "relation": "Čeledín",
            "birthDate": "11. 4. 1885",
            "birthPlace": "Zábřeh",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Pacholek u koní",
            "literacy": "čte i píše"
          },
          {
            "name": "Karel Jílek",
            "relation": "Majitel bytu č. 2 (výměnkář)",
            "birthDate": "7. 3. 1845",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Výměnkář",
            "literacy": "čte i píše"
          },
          {
            "name": "Marie Jílková",
            "relation": "Manželka výměnkáře",
            "birthDate": "5. 2. 1850",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "V domácnosti výměnku",
            "literacy": "čte i píše"
          },
          {
            "name": "Isidor Jílek",
            "relation": "Syn výměnkáře",
            "birthDate": "6. 12. 1893",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Pomocník v hospodářství",
            "literacy": "čte i píše"
          },
          {
            "name": "František Jílek",
            "relation": "Bratr výměnkáře",
            "birthDate": "20. 6. 1841",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Výměnkář (svobodný)",
            "literacy": "čte i píše"
          }
        ],
        "livestock": {
          "horses": 2,
          "cattle": 9,
          "pigs": 3,
          "goats": 0,
          "poultry": 20
        }
      },
      {
        "year": 1900,
        "date": "31. prosince 1900",
        "isSample": false,
        "archiveSource": "Zemský archiv v Opavě, fond Okresní úřad Zábřeh, Sčítání lidu 1900, karton 397, arch čp. 10 (snímky 0047, 0048)",
        "note": "Sčítací operát 1900 pro grunt Karla Jílka s rodinou, čeledí a 81letou výměnkářkou Josefou Jílkovou.",
        "scanFile": "assets/archives/cp10/su1000_c_pom_411_inv_c_1664_karton_397_null_dlouhomilov_serie_cp_1_3_18_20_30_1900_0047.jpg",
        "scanTitle": "Sčítací arch 1900 – Usedlost čp. 10",
        "inhabitants": [
          {
            "name": "Karel Jílek",
            "relation": "Hlava rodiny / Majitel statku",
            "birthDate": "7. 3. 1845",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Rolník – majitel usedlosti",
            "literacy": "čte i píše"
          },
          {
            "name": "Marie Jílková",
            "relation": "Manželka",
            "birthDate": "22. 3. 1850",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "V domácnosti a hospodářství",
            "literacy": "čte i píše"
          },
          {
            "name": "Marie Jílková ml.",
            "relation": "Dcera",
            "birthDate": "8. 1. 1885",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Pomáhá v hospodářství",
            "literacy": "čte i píše"
          },
          {
            "name": "Isidor Jílek",
            "relation": "Syn",
            "birthDate": "6. 12. 1893",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Školák",
            "literacy": "čte i píše"
          },
          {
            "name": "František Jílek",
            "relation": "Bratr hospodáře",
            "birthDate": "28. 6. 1841",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Pomocník při hospodářství",
            "literacy": "čte i píše"
          },
          {
            "name": "Antonín Minář",
            "relation": "Čeledín",
            "birthDate": "15. 1. 1882",
            "birthPlace": "Morava",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Zemědělský čeledín",
            "literacy": "čte i píše"
          },
          {
            "name": "Františka Minářová",
            "relation": "Služka",
            "birthDate": "14. 3. 1883",
            "birthPlace": "Morava",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Děvečka v hospodářství",
            "literacy": "čte i píše"
          },
          {
            "name": "Josefa Jílková",
            "relation": "Majitelka bytu č. 2 (výměnkářka)",
            "birthDate": "16. 2. 1819",
            "birthPlace": "Rovensko",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Výměnkářka (81 let, vdova)",
            "literacy": "čte i píše"
          }
        ],
        "livestock": {
          "horses": 2,
          "cattle": 8,
          "pigs": 3,
          "goats": 0,
          "poultry": 18
        }
      },
      {
        "year": 1890,
        "date": "31. prosince 1890",
        "isSample": false,
        "archiveSource": "Zemský archiv v Opavě, fond Okresní úřad Zábřeh, Sčítání lidu 1890, karton 356, arch čp. 10 (snímky 0034, 0035)",
        "note": "Sčítací operát 1890 dokládající vrchol hospodaření Karla Jílka. Jako čeledín zde slouží šestnáctiletý František Šafář (*1874), který se o dvacet let později stane majitelem celé usedlosti.",
        "scanFile": "assets/archives/cp10/su1000_c_pom_411_inv_c_1560_karton_356_null_dlouhomilov_serie_cp_1_3_50_52_53_1890_0034.jpg",
        "scanTitle": "Sčítací arch 1890 – Usedlost čp. 10",
        "inhabitants": [
          {
            "name": "Karel Jílek",
            "relation": "Hlava rodiny / Majitel usedlosti",
            "birthDate": "7. 3. 1845",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Rolník – hospodář",
            "literacy": "čte i píše"
          },
          {
            "name": "Marie Anna Jílková",
            "relation": "Manželka",
            "birthDate": "16. 6. 1850",
            "birthPlace": "Sudkov",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Vedení domácnosti a hospodářství",
            "literacy": "čte i píše"
          },
          {
            "name": "Františka Jílková",
            "relation": "Dcera",
            "birthDate": "9. 5. 1870",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Pomáhá v domácnosti",
            "literacy": "čte i píše"
          },
          {
            "name": "Josef Jílek",
            "relation": "Syn",
            "birthDate": "11. 7. 1878",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Školák",
            "literacy": "čte i píše"
          },
          {
            "name": "Marie Jílková",
            "relation": "Dcera",
            "birthDate": "6. 1. 1887",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Dítě",
            "literacy": "nečte"
          },
          {
            "name": "Jan Jílek",
            "relation": "Bratr hospodáře",
            "birthDate": "14. 2. 1833",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Nádenník při polním hospodářství",
            "literacy": "čte i píše"
          },
          {
            "name": "František Jílek",
            "relation": "Bratr hospodáře",
            "birthDate": "28. 6. 1841",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Nádenník při polním hospodářství",
            "literacy": "čte i píše"
          },
          {
            "name": "František Šafář",
            "relation": "Čeledín (pozdější majitel statku)",
            "birthDate": "11. 11. 1874",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Zemědělský čeledín u rolníka",
            "literacy": "čte i píše"
          },
          {
            "name": "Anna Poláchová",
            "relation": "Služka",
            "birthDate": "1871",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Služebná v hospodářství",
            "literacy": "čte i píše"
          },
          {
            "name": "Josefa Jílková",
            "relation": "Majitelka bytu č. 2 (výměnkářka)",
            "birthDate": "16. 2. 1819",
            "birthPlace": "Rovensko",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Výměnkářka (vdova)",
            "literacy": "čte i píše"
          },
          {
            "name": "Josef Vepřek",
            "relation": "Vnuk / syn výměnkářky",
            "birthDate": "14. 5. 1849",
            "birthPlace": "Postřelmov",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Dělník v cukrovaru",
            "literacy": "čte i píše"
          }
        ],
        "livestock": {
          "horses": 2,
          "cattle": 10,
          "pigs": 3,
          "goats": 0,
          "poultry": 15
        }
      },
      {
        "year": 1880,
        "date": "31. prosince 1880",
        "isSample": false,
        "archiveSource": "Zemský archiv v Opavě, fond Okresní úřad Zábřeh, Sčítání lidu 1880, karton 330, arch čp. 10 (snímky 0025, 0026)",
        "note": "Sčítací arch 1880 pro grunt Karla Jílka s rodinou, bratry nádeníky, dvěma služebnými a matkou Josefou na výměnku. Celkem 10 osob.",
        "scanFile": "assets/archives/cp10/su1000_c_pom_411_inv_c_1476_karton_330_null_dlouhomilov_serie_cp_1_4_30_44_50_1880_0025.jpg",
        "scanTitle": "Sčítací arch 1880 – Usedlost čp. 10",
        "inhabitants": [
          {
            "name": "Karel Jílek",
            "relation": "Hlava rodiny / Hospodář",
            "birthDate": "7. 3. 1845",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Rolník – sedlák na gruntě",
            "literacy": "čte i píše"
          },
          {
            "name": "Mariana Jílková",
            "relation": "Manželka",
            "birthDate": "22. 3. 1850",
            "birthPlace": "Svébohov",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Spolumajitelka rolnictví, vede domácnost",
            "literacy": "čte i píše"
          },
          {
            "name": "Františka Jílková",
            "relation": "Dcera",
            "birthDate": "7. 3. 1870",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Školačka / chodí do školy",
            "literacy": "čte i píše"
          },
          {
            "name": "Josef Jílek",
            "relation": "Syn",
            "birthDate": "11. 7. 1878",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Dítě",
            "literacy": "nečte"
          },
          {
            "name": "Jan Jílek",
            "relation": "Bratr hospodáře",
            "birthDate": "7. 7. 1833",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Nádenník při rolnictví",
            "literacy": "čte i píše"
          },
          {
            "name": "František Jílek",
            "relation": "Bratr hospodáře",
            "birthDate": "26. 6. 1841",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Nádenník při rolnictví",
            "literacy": "čte i píše"
          },
          {
            "name": "Josefa Hufová",
            "relation": "Služebná",
            "birthDate": "13. 2. 1861",
            "birthPlace": "Svébohov",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Služebná dívka při hospodářství",
            "literacy": "čte i píše"
          },
          {
            "name": "Terezie Kašparová",
            "relation": "Služebná",
            "birthDate": "12. 3. 1857",
            "birthPlace": "Kolšov",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Služebná při polním hospodářství",
            "literacy": "čte i píše"
          },
          {
            "name": "Josefa Jílková",
            "relation": "Matka hospodáře (výměnice)",
            "birthDate": "16. 2. 1819",
            "birthPlace": "Rovensko",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Sedlecká výměnice (vdova)",
            "literacy": "čte i píše"
          },
          {
            "name": "Josef Slepička",
            "relation": "Syn výměnice",
            "birthDate": "14. 5. 1849",
            "birthPlace": "Rovensko",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Zahradník / rolník",
            "literacy": "čte i píše"
          }
        ],
        "livestock": {
          "horses": 2,
          "cattle": 8,
          "pigs": 2,
          "goats": 0,
          "poultry": 12
        }
      },
      {
        "year": 1869,
        "date": "31. prosince 1869",
        "isSample": false,
        "archiveSource": "Zemský archiv v Opavě, fond Okresní úřad Zábřeh, Sčítání lidu 1869, karton 300, arch čp. 10 (snímky 0042, 0043)",
        "note": "Sčítací arch 1869 zachycuje mladého hospodáře Karla Jílka (*1845) krátce po převzetí gruntu. S rodinou žijí na statku jeho bratři Jan a František jako čeledíni a matka Josefa na výměnku.",
        "scanFile": "assets/archives/cp10/su1000_c_pom_411_inv_c_1392_karton_300_null_dlouhomilov_serie_cp_1_80_1869_0042.jpg",
        "scanTitle": "Sčítací arch 1869 – Usedlost čp. 10",
        "inhabitants": [
          {
            "name": "Karel Jílek",
            "relation": "Hlava rodiny / Sedlák",
            "birthDate": "7. 3. 1845",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "moravská / česká",
            "occupation": "Polní hospodářství – sedlák na gruntě",
            "literacy": "čte i píše"
          },
          {
            "name": "Mariana Jílková",
            "relation": "Manželka",
            "birthDate": "22. 3. 1850",
            "birthPlace": "Svébohov",
            "religion": "římskokatolické",
            "nationality": "moravská / česká",
            "occupation": "Pomáhá v hospodářství",
            "literacy": "čte i píše"
          },
          {
            "name": "Jan Jílek",
            "relation": "Bratr hospodáře",
            "birthDate": "14. 2. 1833",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "moravská / česká",
            "occupation": "Čeledín při polním hospodářství (Dienstknecht)",
            "literacy": "čte i píše"
          },
          {
            "name": "František Jílek",
            "relation": "Bratr hospodáře",
            "birthDate": "28. 6. 1841",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "moravská / česká",
            "occupation": "Čeledín při polním hospodářství (Dienstknecht)",
            "literacy": "čte i píše"
          },
          {
            "name": "Anna Maturová",
            "relation": "Služka",
            "birthDate": "1843",
            "birthPlace": "Rovensko",
            "religion": "římskokatolické",
            "nationality": "moravská / česká",
            "occupation": "Služka při hospodářství",
            "literacy": "čte i píše"
          },
          {
            "name": "Josefa Jílková",
            "relation": "Matka hospodáře (výměnice)",
            "birthDate": "16. 2. 1813",
            "birthPlace": "Rovensko",
            "religion": "římskokatolické",
            "nationality": "moravská / česká",
            "occupation": "Výměnkářka (žije ze sedlecké výměny, vdova)",
            "literacy": "čte i píše"
          },
          {
            "name": "Josef Vepřek",
            "relation": "Syn výměnice",
            "birthDate": "1849",
            "birthPlace": "Postřelmov",
            "religion": "římskokatolické",
            "nationality": "moravská / česká",
            "occupation": "Polní nádenník",
            "literacy": "čte i píše"
          },
          {
            "name": "Josefa Jílková ml.",
            "relation": "Dcera výměnice",
            "birthDate": "1854",
            "birthPlace": "Zábřeh",
            "religion": "římskokatolické",
            "nationality": "moravská / česká",
            "occupation": "Služebná",
            "literacy": "čte i píše"
          }
        ],
        "livestock": {
          "horses": 2,
          "cattle": 6,
          "pigs": 2,
          "goats": 0
        }
      },
      {
        "year": 1857,
        "date": "25. listopadu 1857",
        "isSample": false,
        "archiveSource": "Zemský archiv v Opavě, fond Okresní úřad Zábřeh, Sčítání lidu 1857, karton 253, arch čp. 10 (snímky 0045, 0046, 0048)",
        "note": "Nejstarší moderní sčítací operát pro čp. 10. Hospodářem je padesátiletý Josef Pilch (Pelich/Jílek) s druhou chotí Josefou a syny Johannem, Franzem a dvanáctiletým Karlem (budoucím sedlákem Karlem Jílkem); ve 2. bytě žije Barbara Jílková (*1792).",
        "scanFile": "assets/archives/cp10/su1000_c_pom_411_inv_c_1299_karton_253_null_dlouhomilov_serie_cp_1_80_1857_0045.jpg",
        "scanTitle": "Sčítací arch 1857 – Usedlost čp. 10",
        "inhabitants": [
          {
            "name": "Josef Pilch (Pelich)",
            "relation": "Hlava rodiny / Hospodář",
            "birthDate": "3. 3. 1807",
            "birthPlace": "Dlouhomilov (Lomigsdorf)",
            "religion": "římskokatolické",
            "nationality": "moravská",
            "occupation": "Hospodář na usedlosti (Taglöhner / Grundbesitzer)",
            "literacy": "čte i píše"
          },
          {
            "name": "Josefa Pilchová",
            "relation": "Manželka",
            "birthDate": "1818",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "moravská",
            "occupation": "V domácnosti a hospodářství",
            "literacy": "čte i píše"
          },
          {
            "name": "Johann Pilch",
            "relation": "Syn",
            "birthDate": "14. 2. 1833",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "moravská",
            "occupation": "Pomocník v hospodářství",
            "literacy": "čte i píše"
          },
          {
            "name": "Franz Pilch",
            "relation": "Syn",
            "birthDate": "28. 6. 1841",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "moravská",
            "occupation": "Pomocník v hospodářství",
            "literacy": "čte i píše"
          },
          {
            "name": "Karl Pilch (Karel Jílek)",
            "relation": "Syn (budoucí hospodář)",
            "birthDate": "7. 3. 1845",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "moravská",
            "occupation": "Dítě / pomáhá v hospodářství",
            "literacy": "čte i píše"
          },
          {
            "name": "Barbara Pilchová",
            "relation": "Dcera",
            "birthDate": "1842",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "moravská",
            "occupation": "Dcera při rodičích",
            "literacy": "čte i píše"
          },
          {
            "name": "Josefa Pilchová ml.",
            "relation": "Dcera",
            "birthDate": "11. 7. 1847",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "moravská",
            "occupation": "Dítě",
            "literacy": "nečte"
          },
          {
            "name": "Johann Hošek (Wojsick)",
            "relation": "Nevlastní syn / Čeledín",
            "birthDate": "13. 6. 1842",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "moravská",
            "occupation": "Služebník (Dienstbote)",
            "literacy": "čte i píše"
          },
          {
            "name": "Josef Vojtek (Wojsick)",
            "relation": "Nevlastní syn / Čeledín",
            "birthDate": "14. 5. 1849",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "moravská",
            "occupation": "Dítě / pomocník",
            "literacy": "nečte"
          }
        ],
        "livestock": {
          "horses": 2,
          "cattle": 6,
          "pigs": 2,
          "goats": 0
        }
      }
    ],
    "documents": [
      {
        "title": "Stabilní katastr 1834 – Indikační skica (st. 14, usedlost čp. 10)",
        "type": "map",
        "year": "1834",
        "source": "ÚAZK ČÚZK, Císařské otisky stabilního katastru, Dlouhomilov",
        "file": "assets/archives/cp10/katastr_1834_autenticky.jpg",
        "description": "Katastrální otisk st. 14 zobrazující půdorys usedlosti čp. 10 se dvorem."
      },
      {
        "title": "Sčítací operát 1857 – Usedlost čp. 10 (Josef Pilch)",
        "type": "census",
        "year": "1857",
        "source": "ZAO Olomouc, karton 253, inv. č. 1299, snímky 0045, 0046, 0048",
        "file": "assets/archives/cp10/su1000_c_pom_411_inv_c_1299_karton_253_null_dlouhomilov_serie_cp_1_80_1857_0045.jpg",
        "description": "Originální arch sčítání 1857 s rodinou hospodáře Josefa Pilcha."
      },
      {
        "title": "Sčítací operát 1869 – Usedlost čp. 10 (Karel Jílek)",
        "type": "census",
        "year": "1869",
        "source": "ZAO Olomouc, karton 300, inv. č. 1392, snímky 0042, 0043",
        "file": "assets/archives/cp10/su1000_c_pom_411_inv_c_1392_karton_300_null_dlouhomilov_serie_cp_1_80_1869_0042.jpg",
        "description": "Sčítací operát zachycující mladého sedláka Karla Jílka po převzetí gruntu."
      },
      {
        "title": "Sčítací operát 1880 – Usedlost čp. 10 (Karel Jílek)",
        "type": "census",
        "year": "1880",
        "source": "ZAO Olomouc, karton 330, inv. č. 1476, snímky 0025, 0026",
        "file": "assets/archives/cp10/su1000_c_pom_411_inv_c_1476_karton_330_null_dlouhomilov_serie_cp_1_4_30_44_50_1880_0025.jpg",
        "description": "Zápis 10 obyvatel gruntu Karla Jílka včetně matky na výměnku a čeledi."
      },
      {
        "title": "Sčítací operát 1890 – Usedlost čp. 10 (Karel Jílek, čeledín Šafář)",
        "type": "census",
        "year": "1890",
        "source": "ZAO Olomouc, karton 356, inv. č. 1560, snímky 0034, 0035",
        "file": "assets/archives/cp10/su1000_c_pom_411_inv_c_1560_karton_356_null_dlouhomilov_serie_cp_1_3_50_52_53_1890_0034.jpg",
        "description": "Popisný arch dokládající službu šestnáctiletého Františka Šafáře na gruntě Karla Jílka."
      },
      {
        "title": "Sčítací operát 1900 – Usedlost čp. 10 (Karel Jílek)",
        "type": "census",
        "year": "1900",
        "source": "ZAO Olomouc, karton 397, inv. č. 1664, snímky 0047, 0048",
        "file": "assets/archives/cp10/su1000_c_pom_411_inv_c_1664_karton_397_null_dlouhomilov_serie_cp_1_3_18_20_30_1900_0047.jpg",
        "description": "Sčítací arch s hospodářem Karlem Jílkem a 81letou výměnkářkou Josefou."
      },
      {
        "title": "Sčítací operát 1910 – Usedlost čp. 10 (František Šafář a výměnek Jílek)",
        "type": "census",
        "year": "1910",
        "source": "ZAO Olomouc, karton 436, inv. č. 1765, snímky 0032, 0033, 0034",
        "file": "assets/archives/cp10/su1000_c_pom_411_inv_c_1765_karton_436_null_dlouhomilov_serie_cp_1_115_1910_0032.jpg",
        "description": "Arch dokládající nástup Františka Šafáře na pozici majitele gruntu a výměnek Karla Jílka."
      },
      {
        "title": "Sčítací operát 1921 – Bytový arch 1, strana 1 (František Šafář, rolník)",
        "type": "census",
        "year": "1921",
        "source": "SOkA Šumperk, OSP Zábřeh, Sčítání 1921, obec Dlouhomilov, fascikl 3, arch čp. 10",
        "file": "assets/archives/cp10/dlouhomilov_1921_cp10_byt1.jpg",
        "description": "Originální bytový arch č. 1 s rodinou samostatného rolníka Františka Šafáře, manželky Marie a prvních 6 dětí (běžná čísla 54–61)."
      },
      {
        "title": "Sčítací operát 1921 – Bytový arch 1, strana 2 (děti Jan a Miroslava Šafářovi)",
        "type": "census",
        "year": "1921",
        "source": "SOkA Šumperk, OSP Zábřeh, Sčítání 1921, obec Dlouhomilov, fascikl 3, arch čp. 10",
        "file": "assets/archives/cp10/dlouhomilov_1921_cp10_byt1_p2.jpg",
        "description": "Druhá strana bytového archu č. 1 zachycující nejmladší děti Jana (*1913) a Miroslavu (*1914) s vlastnoručním podpisem hospodáře (běžná čísla 62–63)."
      },
      {
        "title": "Sčítací operát 1921 – Bytový arch 2 (Karel Jílek, výměnek)",
        "type": "census",
        "year": "1921",
        "source": "SOkA Šumperk, OSP Zábřeh, Sčítání 1921, obec Dlouhomilov, fascikl 3, arch čp. 10",
        "file": "assets/archives/cp10/dlouhomilov_1921_cp10_byt2.jpg",
        "description": "Originální bytový arch č. 2 zachycující 76letého výměnkáře Karla Jílka se synem Isidorem a hospodyní Josefou Vitáskovou z Brníčka (běžná čísla 64–66)."
      }
    ],
    "stories": [
      {
        "title": "Od chalupníka k sedlákovi: Rod Pilchů a Jílků na desítce",
        "era": "1857–1900",
        "content": "Usedlost čp. 10 byla po generace domovem rodu Pilchů (v matrikách psaných též jako Pelich či Pilek, později Jílek). V roce 1857 zde hospodařil Josef Pilch (*1807), který ještě v zápisech střídal označení chalupníka, nádeníka a držitele pozemků. Jeho syn Karel (*7. 3. 1845) však během druhé poloviny 19. století vybudoval z čp. 10 plnohodnotný selský grunt, na němž kromě rodiny zaměstnával své bratry Jana a Františka i stálou čeleď."
      },
      {
        "title": "Z šestnáctiletého čeledína váženým sedlákem: Životní cesta Františka Šafáře",
        "era": "1890–1921",
        "content": "Jeden z nejpozoruhodnějších sociálních vzestupů v dějinách Dlouhomilova zachytilo sčítání lidu v roce 1890. Tehdy na gruntě Karla Jílka sloužil jako obyčejný čeledín šestnáctiletý mládenec František Šafář (*11. 11. 1874 v Dlouhomilově). O dvacet let později, při sčítání 1910, už týž František Šafář vystupuje jako suverénní majitel a hospodář celého statku, kde s manželkou Marií vychovával početnou rodinu, zatímco původní hospodář Karel Jílek s bratrem Františkem pokojně dožívali na výměnku ve druhém bytě."
      },
      {
        "title": "Výměnek a mezigenerační pouta v průběhu půlstoletí",
        "era": "1869–1921",
        "content": "Archivní operáty usedlosti čp. 10 nabízejí vzácný vhled do fungování vesnického výměnku. V roce 1869 a 1880 zde nacházíme matku hospodáře Josefu Jílkovou (*1819) požívající sedleckou výměnu, která se dožila více než 81 let (naposledy zaznamenána roku 1900). V roce 1910 a 1921 se role vyměnily: do pozice výměnkáře nastoupil sám Karel Jílek, jemuž ve stáří pomáhal svobodný syn Isidor a najatá hospodyně Josefa Vitásková, v plném souladu s novým hospodářem Šafářem."
      }
    ]
  },
  {
    "id": "cp22",
    "number": "22",
    "localName": "Venkovská usedlost čp. 22 (u Dvořáků)",
    "type": "Selský grunt",
    "isHeritage": false,
    "uskpNumber": "VPZ 2350",
    "heritageDescription": "Objekt v památkové zóně Dlouhomilov.",
    "heritageSource": "Vesnická památková zóna Dlouhomilov",
    "location": {
      "lat": 49.90895,
      "lng": 16.98895,
      "cadastralParcel": "st. 30",
      "landParcels": "110",
      "source": "ČÚZK"
    },
    "statusStableCadastre": "Zemědělský grunt se dvorem.",
    "cadastreSource": "Stabilní katastr 1834",
    "description": "Tradiční zemědělský grunt se dvorem charakteristický výjimečnou rodovou stabilitou a kompletní řadou ověřených sčítacích operátů 1857–1921. Rod Dvořáků je na čp. 22 doložen matrikami nejméně od roku 1786 (Pavel Dvořák, *1763, syn Jiřího Dvořáka, × Marina Weinlichová z Brníčka) přes jeho syna Petra Dvořáka (*1793, † 9. 12. 1878 na výměnku čp. 22), vnuka Josefa Dvořáka (*1816, který přechodně hospodařil v Temenici u Šumperka a kolem r. 1869 se s rodinou vrátil na rodový grunt čp. 22) a pravnuka Josefa Dvořáka (* 9. 2. 1857 Temenice – † 10. 7. 1940 čp. 22, oženěného r. 1878 s Annou Kouřilovou z čp. 24) až po Karla Dvořáka (1880–1942).",
    "timeline": [
      {
        "year": "1786",
        "owner": "Pavel Dvořák (*1763) × Marina Weinlichová",
        "event": "Matriční zápis sňatku: 21letý selský syn Pavel Dvořák z Dlouhomilova čp. 22 (syn Jiřího Dvořáka) si bere Marinu Weinlichovou z Brníčka. Nejstarší přímý doklad nepřetržité držby čp. 22 rodem Dvořáků.",
        "sourceType": "verified",
        "source": "ZAO Olomouc, Sbírka matrik, farnost Brníčko, sig. Zá VI 5, snímek 70."
      },
      {
        "year": "1834",
        "owner": "Petr Dvořák (*1793)",
        "event": "Zemědělský grunt se dvorem (st. 30) zachycen v indikační skice stabilního katastru obce Dlouhomilov.",
        "sourceType": "verified",
        "source": "ÚAZK ČÚZK, Stabilní katastr 1834, k.ú. Dlouhomilov."
      },
      {
        "year": "1857",
        "owner": "Josef Dvořák (*1816) / Petr Dvořák (*1793)",
        "event": "Sčítání lidu 1857: Jako majitel domu (Hausbesitzer) je v záhlaví obou archů zapsán Josef Dvořák (*1816, který v té době hospodařil s rodinou na statku v Temenici). V bytě č. I v Dlouhomilově čp. 22 bydlí nájemce Isidor Braný (* 10. 11. 1820) s manželkou Marianou (*1824) a dětmi Emanuelem (*1851) a Johannou (*1857); v bytě č. II žije otec majitele Petr Dvořák (*1793, Grundbesitzer) s manželkou Annou (*1811).",
        "sourceType": "verified",
        "source": "ZAO Olomouc, fond Okresní úřad Zábřeh, Sčítání 1857, karton 253, arch čp. 22 (snímky a, b).",
        "scanFile": "assets/archives/cp22/1857-Dlouhomilov_22-b.jpg",
        "scanTitle": "Sčítací arch 1857 – Dlouhomilov čp. 22 (Petr Dvořák a Josef Dvořák)"
      },
      {
        "year": "1869",
        "owner": "Josef Dvořák (*1816)",
        "event": "Sčítání lidu 1869: Sedlák Josef Dvořák (*1816 v Dlouhomilově) se vrací z Temenice na rodový grunt čp. 22 s manželkou Annou (*1828) a 7 dětmi narozenými v Temenici (Anna *1848, Karel *1850 – pivovarský tovaryš/sládek, Josef *1857, František *1860, Adolf *1861, Petr *1864, Emilie *1866). Na výměnku žije jeho otec Petr Dvořák (*1793) s manželkou Annou (*1813 Vyšehoří) a ve 2. bytě podruh Ignác Dvořák (*1809) s rodinou. Celkem 16 obyvatel.",
        "sourceType": "verified",
        "source": "ZAO Olomouc, fond Okresní úřad Zábřeh, Sčítání 1869, karton 300, arch čp. 22 (snímky a, b, c).",
        "scanFile": "assets/archives/cp22/1869-Dlouhomilov_22-b.jpg",
        "scanTitle": "Sčítací arch 1869 – Dlouhomilov čp. 22 (Josef Dvořák *1816 a výměnkář Petr Dvořák *1793)"
      },
      {
        "year": "1878",
        "owner": "Josef Dvořák (*1857) × Anna Kouřilová (*1857) & † Petr Dvořák (*1793)",
        "event": "Matriční události roku 1878: Dne 29. 7. 1878 se koná dvojitá svatba dcer sedláka Františka Kouřila z čp. 24 – mladý hospodář Josef Dvořák (* 9. 2. 1857 v Temenici) si bere Annu Kouřilovou (* 9. 12. 1857 na čp. 24) a jeho bratr Karel Dvořák si bere její sestru Ludmilu. Dne 9. 12. 1878 umírá na čp. 22 ve věku 84 let výměnkář Petr Dvořák (syn Pavla Dvořáka a Mariany Weinlichové).",
        "sourceType": "verified",
        "source": "ZAO Olomouc, Sbírka matrik, farnost Dlouhomilov, sig. Zá II 5 (O sn. 30, Z sn. 147)."
      },
      {
        "year": "1880",
        "owner": "Josef Dvořák (*1857)",
        "event": "Sčítání lidu 1880: Grunt vede mladý sedlák Josef Dvořák (* 9. 2. 1857 v Temenici) s manželkou Annou roz. Kouřilovou (* 9. 12. 1857) a malými syny Josefem (* 3. 6. 1879, pozdějším hospodářem na čp. 29) a Karlem (* 7. 11. 1880). V hospodářství slouží 3 děvečky a na výměnku žije ovdovělá babička Anna Dvořáková (*1814 Vyšehoří, vdova po Petru Dvořákovi). Celkem 8 obyvatel.",
        "sourceType": "verified",
        "source": "ZAO Olomouc, fond Okresní úřad Zábřeh, Sčítání 1880, karton 330, arch čp. 22 (snímky a, b).",
        "scanFile": "assets/archives/cp22/1880-Dlouhomilov_22-a.jpg",
        "scanTitle": "Sčítací arch 1880 – Dlouhomilov čp. 22"
      },
      {
        "year": "1890",
        "owner": "Josef Dvořák (*1857)",
        "event": "Sčítání lidu 1890: Stabilní prosperita usedlosti za Josefa Dvořáka s manželkou Annou, 5 dětmi a služebnou; k archu je přilepen úřední křestní list syna Josefa (* 3. 6. 1879) podepsaný farářem Antonínem Riedlem. Na výměnku žije 76letá babička Anna Dvořáková (*1814) s neteří Annou Voglovou. Celkem 10 obyvatel.",
        "sourceType": "verified",
        "source": "ZAO Olomouc, fond Okresní úřad Zábřeh, Sčítání 1890, karton 356, arch čp. 22 (snímky a, b, c, d).",
        "scanFile": "assets/archives/cp22/1890-Dlouhomilov_22-a.jpg",
        "scanTitle": "Sčítací arch 1890 – Dlouhomilov čp. 22 (s křestním listem Josefa Dvořáka *1879)"
      },
      {
        "year": "1900",
        "owner": "Josef Dvořák (*1857)",
        "event": "Sčítání lidu 1900: Josef Dvořák s chotí Annou a 7 dětmi; nejstarší syn Josef (*1879) slouží ve vojsku císařské armády, u syna Jaromíra (* 27. 7. 1890) je přiložen křestní list. Celkem 9 obyvatel.",
        "sourceType": "verified",
        "source": "ZAO Olomouc, fond Okresní úřad Zábřeh, Sčítání 1900, karton 397, arch čp. 22 (snímky a, b, c).",
        "scanFile": "assets/archives/cp22/1900-Dlouhomilov_22-a.jpg",
        "scanTitle": "Sčítací arch 1900 – Dlouhomilov čp. 22"
      },
      {
        "year": "1910",
        "owner": "Josef Dvořák (*1857)",
        "event": "Sčítání lidu 1910: Usedlost Josefa Dvořáka s početnou rodinou; syn Jaromír (*1890) je evidován jako studující na vyšší škole. Celkem 8 obyvatel.",
        "sourceType": "verified",
        "source": "ZAO Olomouc, fond Okresní úřad Zábřeh, Sčítání 1910, karton 436, arch čp. 22.",
        "scanFile": "assets/archives/cp22/1910-Dlouhomilov_22-Dvorak-a.jpg",
        "scanTitle": "Sčítací arch 1910 – Dlouhomilov čp. 22"
      },
      {
        "year": "1921",
        "owner": "Karel Dvořák (*1880)",
        "event": "Sčítání lidu 1921: Samostatný rolník Karel Dvořák hospodaří s rodinou a 4 zaměstnanými silami (čeledín Josef Jílek a 3 děvečky); v druhém bytě žije na výměnku jeho otec Josef Dvořák (* 1857 Temenice) s manželkou Annou roz. Kouřilovou, dcerami Ludmilou Podhornou a Bernardinou a vnukem Jaromírem Podhorným. Celkem 14 obyvatel.",
        "sourceType": "verified",
        "source": "SOkA Šumperk / ZAO, fond Okresní úřad Zábřeh, Sčítání 1921, fascikl 3, arch čp. 22.",
        "scanFile": "assets/archives/cp22/1921-Dlouhomilov_22a-Dvorak.jpg",
        "scanTitle": "Sčítací arch 1921 – Dlouhomilov čp. 22"
      },
      {
        "year": "1940–1949",
        "owner": "Úmrtí výměnkářů a hospodáře na čp. 22",
        "event": "Matriční zápisy úmrtí na čp. 22: Dne 10. 7. 1940 umírá selský výměnkář Josef Dvořák (* 9. 2. 1857 Temenice, syn sedláka Josefa Dvořáka a Anny roz. Antonína Dvořáka, sezdán 29. 7. 1878). Dne 5. 5. 1942 umírá jeho syn, rolník Karel Dvořák (* 7. 11. 1880, sezdán 13. 9. 1919). Dne 29. 5. 1949 umírá ve věku 91 let výměnkářka Anna Dvořáková roz. Kouřilová (* 9. 12. 1857 na čp. 24).",
        "sourceType": "verified",
        "source": "ZAO Olomouc, Sbírka matrik, farnost Dlouhomilov, sig. Zá II 10 (Z 1930–1949), snímky 178, 181 a 198."
      }
    ],
    "census": [
      {
        "year": 1921,
        "date": "15. února 1921",
        "isSample": false,
        "archiveSource": "SOkA Šumperk / ZAO Olomouc, fond Okresní úřad Zábřeh, Sčítání lidu 1921, fascikl 3, arch čp. 22 (snímky 1921-Dlouhomilov_22-Dvorak, 22a, 22b, 22x)",
        "note": "Originální sčítací operát ČSR 1921. Dům měl 2 byty (14 obyvatel): Byt č. 1 (rodina samostatného rolníka Karla Dvořáka se 4 námezdními silami při zemědělství, 9 osob) a Byt č. 2 (arch „Dvořák Josef, rolnický výměnkář v Dlouhomilově“ – rodiče hospodáře Josef a Anna Dvořákovi s dcerami a vnukem, 5 osob).",
        "scanFile": "assets/archives/cp22/1921-Dlouhomilov_22a-Dvorak.jpg",
        "scanTitle": "Sčítací operát 1921 – Usedlost čp. 22",
        "inhabitants": [
          {
            "name": "Karel Dvořák",
            "relation": "Hlava rodiny / Majitel usedlosti",
            "birthDate": "7. 11. 1880",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "Samostatný rolník na gruntě",
            "literacy": "čte i píše"
          },
          {
            "name": "Anna Dvořáková",
            "relation": "Manželka",
            "birthDate": "25. 12. 1883 (?)",
            "birthPlace": "Drozdov (?)",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "V domácnosti a hospodářství",
            "literacy": "čte i píše"
          },
          {
            "name": "Ludmila Dvořáková",
            "relation": "Dcera",
            "birthDate": "24. 3. 1916",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "Dítě / školačka (dcera z 1. manželství s Ludmilou roz. Maulerovou)",
            "literacy": "čte i píše"
          },
          {
            "name": "Karel Dvořák ml.",
            "relation": "Syn",
            "birthDate": "11. ?. 1918 (?)",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "Dítě",
            "literacy": "čte i píše"
          },
          {
            "name": "Drahomíra Dvořáková",
            "relation": "Dcera",
            "birthDate": "1921 (?)",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "Dítě",
            "literacy": "nečte"
          },
          {
            "name": "Josef Jílek",
            "relation": "Čeledín",
            "birthDate": "25. 4. 1902",
            "birthPlace": "Brníčko",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "Zemědělský čeledín",
            "literacy": "čte i píše"
          },
          {
            "name": "Anna Somberová",
            "relation": "Služebná děvečka",
            "birthDate": "11. 7. 1902",
            "birthPlace": "Ohrozim (?)",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "Zemědělská děvečka",
            "literacy": "čte i píše"
          },
          {
            "name": "Marie Bartáková (?)",
            "relation": "Služebná děvečka",
            "birthDate": "15. 4. 1901",
            "birthPlace": "Jedlí",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "Zemědělská děvečka",
            "literacy": "čte i píše"
          },
          {
            "name": "Františka Jurásková",
            "relation": "Služebná děvečka",
            "birthDate": "24. 8. 1899",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "Zemědělská děvečka",
            "literacy": "čte i píše"
          },
          {
            "name": "Josef Dvořák",
            "relation": "Majitel bytu č. 2 / rolnický výměnkář (otec hospodáře); v obci od 29. 6. 1878 (?)",
            "birthDate": "9. 2. 1857",
            "birthPlace": "Temenice",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "Rolnický výměnkář",
            "literacy": "čte i píše"
          },
          {
            "name": "Anna Dvořáková (roz. Kouřilová)",
            "relation": "Manželka v bytě č. 2",
            "birthDate": "9. 12. 1857",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "Hospodyně na výměnku",
            "literacy": "čte i píše"
          },
          {
            "name": "Ludmila Podhorná (roz. Dvořáková)",
            "relation": "Dcera v bytě č. 2 (vdaná)",
            "birthDate": "21. 4. 1893",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "Pomáhá v zemědělství",
            "literacy": "čte i píše"
          },
          {
            "name": "Bernardina Dvořáková",
            "relation": "Dcera v bytě č. 2",
            "birthDate": "17. 10. 1895",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "Pomáhá v zemědělství",
            "literacy": "čte i píše"
          },
          {
            "name": "Jaromír Podhorný",
            "relation": "Vnuk v bytě č. 2",
            "birthDate": "22. 1. 1920",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "Dítě v domácí péči",
            "literacy": "nečte"
          }
        ],
        "livestock": {
          "horses": 2,
          "cattle": 10,
          "pigs": 4,
          "goats": 0,
          "poultry": 20
        }
      },
      {
        "year": 1910,
        "date": "31. prosince 1910",
        "isSample": false,
        "archiveSource": "Zemský archiv v Opavě, fond Okresní úřad Zábřeh, Sčítání lidu 1910, karton 436, arch čp. 22 (snímky 1910-Dlouhomilov_22-Dvorak, 22-Dvorak-a)",
        "note": "Sčítání lidu 1910 pro rodinu sedláka Josefa Dvořáka s manželkou Annou a 6 dětmi. Syn Jaromír (*1890) je zapsán jako studující na vyšší škole. Celkem 8 obyvatel.",
        "scanFile": "assets/archives/cp22/1910-Dlouhomilov_22-Dvorak-a.jpg",
        "scanTitle": "Sčítací arch 1910 – Usedlost čp. 22",
        "inhabitants": [
          {
            "name": "Josef Dvořák",
            "relation": "Hlava rodiny / Majitel statku",
            "birthDate": "9. 2. 1857",
            "birthPlace": "Temenice",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Rolník – majitel usedlosti",
            "literacy": "čte i píše"
          },
          {
            "name": "Anna Dvořáková",
            "relation": "Manželka",
            "birthDate": "9. 12. 1857",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "V domácnosti a hospodářství",
            "literacy": "čte i píše"
          },
          {
            "name": "Karel Dvořák",
            "relation": "Syn",
            "birthDate": "7. 11. 1880",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Pomocník v hospodářství",
            "literacy": "čte i píše"
          },
          {
            "name": "Anna Dvořáková ml.",
            "relation": "Dcera",
            "birthDate": "20. 11. 1885",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Pomáhá v hospodářství",
            "literacy": "čte i píše"
          },
          {
            "name": "Marie Dvořáková",
            "relation": "Dcera",
            "birthDate": "7. 5. 1888",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Pomáhá v hospodářství",
            "literacy": "čte i píše"
          },
          {
            "name": "Jaromír Dvořák",
            "relation": "Syn",
            "birthDate": "27. 7. 1890",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Studující (na vyšší škole)",
            "literacy": "čte i píše"
          },
          {
            "name": "Ludmila Dvořáková",
            "relation": "Dcera",
            "birthDate": "21. 4. 1893",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Pomáhá doma",
            "literacy": "čte i píše"
          },
          {
            "name": "Bernardina Dvořáková",
            "relation": "Dcera",
            "birthDate": "17. 10. 1895",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Pomáhá doma",
            "literacy": "čte i píše"
          }
        ],
        "livestock": {
          "horses": 2,
          "cattle": 12,
          "pigs": 3,
          "goats": 0,
          "poultry": 18
        }
      },
      {
        "year": 1900,
        "date": "31. prosince 1900",
        "isSample": false,
        "archiveSource": "Zemský archiv v Opavě, fond Okresní úřad Zábřeh, Sčítání lidu 1900, karton 397, arch čp. 22 (snímky 1900-Dlouhomilov_22-a, b, c)",
        "note": "Originální sčítací operát 1900 pro usedlost Josefa Dvořáka (* 9. 2. 1857 Temenice) s chotí Annou roz. Kouřilovou (* 9. 12. 1857) a 7 dětmi. Nejstarší syn Josef (*1879) vykonává vojenskou službu, k archu je přilepen křestní list syna Jaromíra (* 27. 7. 1890). Celkem 9 obyvatel.",
        "scanFile": "assets/archives/cp22/1900-Dlouhomilov_22-a.jpg",
        "scanTitle": "Sčítací arch 1900 – Usedlost čp. 22",
        "inhabitants": [
          {
            "name": "Josef Dvořák",
            "relation": "Hlava rodiny / Majitel statku",
            "birthDate": "9. 2. 1857",
            "birthPlace": "Temenice",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Rolník – majitel usedlosti",
            "literacy": "čte i píše"
          },
          {
            "name": "Anna Dvořáková",
            "relation": "Manželka",
            "birthDate": "9. 12. 1857",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "V domácnosti a hospodářství",
            "literacy": "čte i píše"
          },
          {
            "name": "Josef Dvořák ml.",
            "relation": "Syn (voják)",
            "birthDate": "3. 6. 1879",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Voják v činné službě císařské armády",
            "literacy": "čte i píše"
          },
          {
            "name": "Karel Dvořák",
            "relation": "Syn",
            "birthDate": "7. 11. 1880",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Pomocník v hospodářství",
            "literacy": "čte i píše"
          },
          {
            "name": "Anna Dvořáková ml.",
            "relation": "Dcera",
            "birthDate": "20. 11. 1885",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Pomáhá v hospodářství",
            "literacy": "čte i píše"
          },
          {
            "name": "Marie Dvořáková",
            "relation": "Dcera",
            "birthDate": "7. 5. 1888",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Školačka",
            "literacy": "čte i píše"
          },
          {
            "name": "Jaromír Dvořák",
            "relation": "Syn",
            "birthDate": "27. 7. 1890",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Školák (doloženo křestním listem)",
            "literacy": "čte i píše"
          },
          {
            "name": "Ludmila Dvořáková",
            "relation": "Dcera",
            "birthDate": "21. 4. 1893",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Dítě / školačka",
            "literacy": "čte i píše"
          },
          {
            "name": "Bernardina Dvořáková",
            "relation": "Dcera",
            "birthDate": "17. 10. 1895",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Dítě",
            "literacy": "nečte"
          }
        ],
        "livestock": {
          "horses": 2,
          "cattle": 10,
          "pigs": 3,
          "goats": 0,
          "poultry": 15
        }
      },
      {
        "year": 1890,
        "date": "31. prosince 1890",
        "isSample": false,
        "archiveSource": "Zemský archiv v Opavě, fond Okresní úřad Zábřeh, Sčítání lidu 1890, karton 356, arch čp. 22 (snímky 1890-Dlouhomilov_22-a, b, c, d)",
        "note": "Originální sčítací operát 1890 zachycuje rodinu Josefa Dvořáka (* 9. 2. 1857 Temenice) s 5 dětmi a služebnou Emílií Pospíšilovou; k archu je přilepen křestní list syna Josefa (* 3. 6. 1879). V druhém bytě žije babička Anna Dvořáková (*1814 Vyšehoří) na výměnku se svou neteří Annou Voglovou. Celkem 10 obyvatel.",
        "scanFile": "assets/archives/cp22/1890-Dlouhomilov_22-a.jpg",
        "scanTitle": "Sčítací arch 1890 – Usedlost čp. 22",
        "inhabitants": [
          {
            "name": "Josef Dvořák",
            "relation": "Hlava rodiny / Majitel usedlosti",
            "birthDate": "9. 2. 1857",
            "birthPlace": "Temenice",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Polní hospodář – držitel pozemků",
            "literacy": "čte i píše"
          },
          {
            "name": "Anna Dvořáková",
            "relation": "Manželka",
            "birthDate": "9. 12. 1857",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Vedení domácnosti a hospodářství",
            "literacy": "čte i píše"
          },
          {
            "name": "Josef Dvořák ml.",
            "relation": "Syn",
            "birthDate": "3. 6. 1879",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Školák (doloženo křestním listem)",
            "literacy": "čte i píše"
          },
          {
            "name": "Karel Dvořák",
            "relation": "Syn",
            "birthDate": "7. 11. 1880",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Školák",
            "literacy": "čte i píše"
          },
          {
            "name": "Anna Dvořáková ml.",
            "relation": "Dcera",
            "birthDate": "20. 11. 1885",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Dítě",
            "literacy": "nečte"
          },
          {
            "name": "Marie Anna Dvořáková",
            "relation": "Dcera",
            "birthDate": "7. 5. 1888",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Dítě",
            "literacy": "nečte"
          },
          {
            "name": "Jaromír Dvořák",
            "relation": "Syn",
            "birthDate": "27. 7. 1890",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Kojenec",
            "literacy": "nečte"
          },
          {
            "name": "Emílie Pospíšilová",
            "relation": "Služebná děvečka",
            "birthDate": "15. 12. 1871",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Služebná v zemědělství",
            "literacy": "čte i píše"
          },
          {
            "name": "Anna Dvořáková st.",
            "relation": "Majitelka bytu č. 2 (výměnkářka)",
            "birthDate": "5. 9. 1814",
            "birthPlace": "Vyšehoří",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Výměnkářka (vdova po Petru Dvořákovi)",
            "literacy": "čte i píše"
          },
          {
            "name": "Anna Voglová",
            "relation": "Neteř výměnkářky",
            "birthDate": "19. 2. 1864",
            "birthPlace": "Rovensko",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Pomáhá v domácnosti výměnku",
            "literacy": "čte i píše"
          }
        ],
        "livestock": {
          "horses": 2,
          "cattle": 11,
          "pigs": 3,
          "goats": 0,
          "poultry": 16
        }
      },
      {
        "year": 1880,
        "date": "31. prosince 1880",
        "isSample": false,
        "archiveSource": "Zemský archiv v Opavě, fond Okresní úřad Zábřeh, Sčítání lidu 1880, karton 330, arch čp. 22 (snímky 1880-Dlouhomilov_22-a, b)",
        "note": "Originální sčítací arch 1880 zachycuje mladého hospodáře Josefa Dvořáka (* 10. 2. 1857 v Temenici) s novomanželkou Annou roz. Kouřilovou (* 9. 12. 1857), malými syny Josefem a Karlem, 3 služebnými a ovdovělou babičkou Annou Dvořákovou (*1814 Vyšehoří) na výměnku. Celkem 8 obyvatel.",
        "scanFile": "assets/archives/cp22/1880-Dlouhomilov_22-a.jpg",
        "scanTitle": "Sčítací arch 1880 – Usedlost čp. 22",
        "inhabitants": [
          {
            "name": "Josef Dvořák",
            "relation": "Hlava rodiny / Hospodář",
            "birthDate": "10. 2. 1857",
            "birthPlace": "Temenice",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Rolník – sedlák na gruntě",
            "literacy": "čte i píše"
          },
          {
            "name": "Anna Dvořáková",
            "relation": "Manželka",
            "birthDate": "9. 12. 1857",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Rolnická spolumajitelka / obstarává domácnost",
            "literacy": "čte i píše"
          },
          {
            "name": "Josef Dvořák ml.",
            "relation": "Syn",
            "birthDate": "3. 6. 1879",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Dítě",
            "literacy": "nečte"
          },
          {
            "name": "Karel Dvořák",
            "relation": "Syn",
            "birthDate": "7. 11. 1880",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Kojenec",
            "literacy": "nečte"
          },
          {
            "name": "Genofefa Raková",
            "relation": "Služebná děvečka",
            "birthDate": "22. 9. 1864",
            "birthPlace": "Postřelmov",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Sloužící při rolnictví",
            "literacy": "čte i píše"
          },
          {
            "name": "Beata Johnová",
            "relation": "Služebná děvečka",
            "birthDate": "8. 10. 1855",
            "birthPlace": "Bušín / Budíkov",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Sloužící při rolnictví",
            "literacy": "čte i píše"
          },
          {
            "name": "Anna Fuglíková",
            "relation": "Služebná děvečka",
            "birthDate": "1. 5. 1864",
            "birthPlace": "Rovensko",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Sloužící při rolnictví",
            "literacy": "čte i píše"
          },
          {
            "name": "Anna Dvořáková",
            "relation": "Babička hospodáře (výměnkářka)",
            "birthDate": "1. 9. 1814",
            "birthPlace": "Vyšehoří",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Výměnkářka (vdova po Petru Dvořákovi)",
            "literacy": "čte i píše"
          }
        ],
        "livestock": {
          "horses": 2,
          "cattle": 12,
          "pigs": 2,
          "goats": 0
        }
      },
      {
        "year": 1869,
        "date": "31. prosince 1869",
        "isSample": false,
        "archiveSource": "Zemský archiv v Opavě, fond Okresní úřad Zábřeh, Sčítání lidu 1869, karton 300, arch čp. 22 (snímky 1869-Dlouhomilov_22-a, b, c)",
        "note": "Klíčový genealogický operát z roku 1869 s celkem 16 obyvateli: prokazuje, že sedlák Josef Dvořák (*1816 v Dlouhomilově) hospodařil předtím v Temenici (kde se narodily všechny jeho děti z let 1848–1866 včetně Josefa *1857) a vrátil se na rodný grunt čp. 22 ke svému otci, 76letému výměnkáři Petru Dvořákovi (*1793). Ve 2. bytě žije rodina podruha Ignáce Dvořáka (*1809).",
        "scanFile": "assets/archives/cp22/1869-Dlouhomilov_22-b.jpg",
        "scanTitle": "Sčítací arch 1869 – Usedlost čp. 22 (Josef Dvořák *1816 a Petr Dvořák *1793)",
        "inhabitants": [
          {
            "name": "Josef Dvořák",
            "relation": "Hlava rodiny / Sedlák",
            "birthDate": "1816",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "moravská / česká",
            "occupation": "Polní hospodář – sedlák na gruntě",
            "literacy": "čte i píše"
          },
          {
            "name": "Anna Dvořáková",
            "relation": "Manželka",
            "birthDate": "1828",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "moravská / česká",
            "occupation": "Pomáhá v hospodářství",
            "literacy": "čte i píše"
          },
          {
            "name": "Anna Dvořáková ml.",
            "relation": "Dcera",
            "birthDate": "1848",
            "birthPlace": "Temenice",
            "religion": "římskokatolické",
            "nationality": "moravská / česká",
            "occupation": "Pomáhá v hospodářství",
            "literacy": "čte i píše"
          },
          {
            "name": "Karel Dvořák",
            "relation": "Syn (sládek)",
            "birthDate": "1850",
            "birthPlace": "Temenice",
            "religion": "římskokatolické",
            "nationality": "moravská / česká",
            "occupation": "Sládek – pivovarský tovaryš (Braugehilfe)",
            "literacy": "čte i píše"
          },
          {
            "name": "Josef Dvořák ml.",
            "relation": "Syn (budoucí hospodář)",
            "birthDate": "1857",
            "birthPlace": "Temenice",
            "religion": "římskokatolické",
            "nationality": "moravská / česká",
            "occupation": "Žák / chodí do školy",
            "literacy": "čte i píše"
          },
          {
            "name": "František Dvořák",
            "relation": "Syn",
            "birthDate": "1860",
            "birthPlace": "Temenice",
            "religion": "římskokatolické",
            "nationality": "moravská / česká",
            "occupation": "Žák / chodí do školy",
            "literacy": "čte i píše"
          },
          {
            "name": "Adolf Dvořák",
            "relation": "Syn",
            "birthDate": "1861",
            "birthPlace": "Temenice",
            "religion": "římskokatolické",
            "nationality": "moravská / česká",
            "occupation": "Žák / chodí do školy",
            "literacy": "čte i píše"
          },
          {
            "name": "Petr Dvořák ml.",
            "relation": "Syn",
            "birthDate": "1864",
            "birthPlace": "Temenice",
            "religion": "římskokatolické",
            "nationality": "moravská / česká",
            "occupation": "Dítě",
            "literacy": "nečte"
          },
          {
            "name": "Emílie Dvořáková",
            "relation": "Dcera",
            "birthDate": "1866",
            "birthPlace": "Temenice",
            "religion": "římskokatolické",
            "nationality": "moravská / česká",
            "occupation": "Dítě",
            "literacy": "nečte"
          },
          {
            "name": "Petr Dvořák st.",
            "relation": "Výměnkář (otec sedláka)",
            "birthDate": "1793",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "moravská / česká",
            "occupation": "Výměnkář (žije ze sedlácké výměny)",
            "literacy": "čte i píše"
          },
          {
            "name": "Anna Dvořáková st.",
            "relation": "Manželka výměnkáře",
            "birthDate": "1813",
            "birthPlace": "Vyšehoří",
            "religion": "římskokatolické",
            "nationality": "moravská / česká",
            "occupation": "Obstarává domácnost výměnku",
            "literacy": "čte i píše"
          },
          {
            "name": "Ignác Dvořák",
            "relation": "Hlava bytu č. 2 / Podruh",
            "birthDate": "1809",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "moravská / česká",
            "occupation": "Podruh – polní hospodář a nájemce polností",
            "literacy": "čte i píše"
          },
          {
            "name": "Terezie Dvořáková",
            "relation": "Manželka v bytě č. 2",
            "birthDate": "1821",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "moravská / česká",
            "occupation": "Pomáhá při hospodářství",
            "literacy": "čte i píše"
          },
          {
            "name": "Magdalena Dvořáková",
            "relation": "Dcera v bytě č. 2",
            "birthDate": "1846",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "moravská / česká",
            "occupation": "Pomáhá při polním hospodářství",
            "literacy": "čte i píše"
          },
          {
            "name": "Mariana Dvořáková",
            "relation": "Dcera v bytě č. 2",
            "birthDate": "1850",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "moravská / česká",
            "occupation": "Pomáhá při polním hospodářství",
            "literacy": "čte i píše"
          },
          {
            "name": "Františka Dvořáková",
            "relation": "Dcera v bytě č. 2",
            "birthDate": "1852",
            "birthPlace": "M. Neustadt (Uničov) / Markersdorf",
            "religion": "římskokatolické",
            "nationality": "moravská / česká",
            "occupation": "Pomáhá při polním hospodářství",
            "literacy": "čte i píše"
          }
        ],
        "livestock": {
          "horses": 0,
          "cattle": 4,
          "pigs": 1,
          "goats": 0
        }
      },
      {
        "year": 1857,
        "date": "25. listopadu 1857",
        "isSample": false,
        "archiveSource": "Zemský archiv v Opavě, fond Okresní úřad Zábřeh, Sčítání lidu 1857, karton 253, arch čp. 22 (snímky 1857-Dlouhomilov_22-a, b)",
        "note": "Nejstarší novodobý sčítací arch pro čp. 22. V záhlaví obou archů je jako majitel domu (Hausbesitzer) uveden Josef Dvořák (*1816, tehdy hospodařící v Temenici). V bytě č. I žije nájemce Isidor Braný (*1820) s rodinou a v bytě č. II otec majitele Petr Dvořák (*1793, Grundbesitzer) s manželkou Annou (*1811). Celkem 6 obyvatel.",
        "scanFile": "assets/archives/cp22/1857-Dlouhomilov_22-b.jpg",
        "scanTitle": "Sčítací arch 1857 – Usedlost čp. 22 (Petr Dvořák *1793 a Josef Dvořák)",
        "inhabitants": [
          {
            "name": "Isidor Braný",
            "relation": "Hlava rodiny v bytě č. I (nájemce)",
            "birthDate": "10. 11. 1820",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "moravská",
            "occupation": "Držitel domu / nájemce (Haus- und Rentenbesitzer)",
            "literacy": "čte i píše"
          },
          {
            "name": "Mariana Braná",
            "relation": "Manželka v bytě č. I",
            "birthDate": "1824",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "moravská",
            "occupation": "V domácnosti a hospodářství",
            "literacy": "čte i píše"
          },
          {
            "name": "Emanuel Braný",
            "relation": "Syn v bytě č. I",
            "birthDate": "21. 8. 1851",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "moravská",
            "occupation": "Dítě",
            "literacy": "nečte"
          },
          {
            "name": "Johanna Braná",
            "relation": "Dcera v bytě č. I",
            "birthDate": "1857",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "moravská",
            "occupation": "Kojenec",
            "literacy": "nečte"
          },
          {
            "name": "Petr Dvořák",
            "relation": "Hlava bytu č. II / Otec majitele Josefa Dvořáka",
            "birthDate": "1793",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "moravská",
            "occupation": "Majitel pozemků / výměnkář (Grundbesitzer)",
            "literacy": "čte i píše"
          },
          {
            "name": "Anna Dvořáková",
            "relation": "Manželka Petra Dvořáka (Byt č. II)",
            "birthDate": "1811",
            "birthPlace": "Vyšehoří",
            "religion": "římskokatolické",
            "nationality": "moravská",
            "occupation": "V domácnosti",
            "literacy": "čte i píše"
          }
        ],
        "livestock": {
          "horses": 2,
          "cattle": 8,
          "pigs": 2,
          "goats": 0
        }
      }
    ],
    "documents": [
      {
        "title": "Stabilní katastr 1834 – Indikační skica (st. 30, usedlost čp. 22)",
        "type": "map",
        "year": "1834",
        "source": "ÚAZK ČÚZK, Císařské otisky stabilního katastru, Dlouhomilov",
        "file": "assets/archives/cp22/katastr_1834_autenticky.jpg",
        "description": "Katastrální otisk st. 30 zobrazující půdorys zemědělského gruntu rodu Dvořáků."
      },
      {
        "title": "Sčítací operát 1857 – Usedlost čp. 22 (Byt II: Petr Dvořák *1793, majitel Josef Dvořák)",
        "type": "census",
        "year": "1857",
        "source": "ZAO Olomouc, karton 253, inv. č. 1299, arch čp. 22 (snímky a, b)",
        "file": "assets/archives/cp22/1857-Dlouhomilov_22-b.jpg",
        "description": "Originální záznam sčítání lidu 1857 dokládající Petra Dvořáka (*1793) s chotí Annou a v záhlaví majitele Josefa Dvořáka."
      },
      {
        "title": "Sčítací operát 1857 – Usedlost čp. 22 (Byt I: rodina Isidora Braného)",
        "type": "census",
        "year": "1857",
        "source": "ZAO Olomouc, karton 253, inv. č. 1299, arch čp. 22 (snímek a)",
        "file": "assets/archives/cp22/1857-Dlouhomilov_22-a.jpg",
        "description": "První list sčítání 1857 pro čp. 22 se čtyřčlennou rodinou Isidora Braného (*1820)."
      },
      {
        "title": "Sčítací operát 1869 – Usedlost čp. 22 (Josef Dvořák *1816, děti z Temenice a Petr Dvořák *1793)",
        "type": "census",
        "year": "1869",
        "source": "ZAO Olomouc, karton 300, inv. č. 1392, arch čp. 22 (snímky a, b, c)",
        "file": "assets/archives/cp22/1869-Dlouhomilov_22-b.jpg",
        "description": "Klíčový operát propojující dlouhomilovský a temenický pobyt rodiny Josefa Dvořáka (*1816) s otcem Petrem Dvořákem (*1793) na výměnku."
      },
      {
        "title": "Sčítací operát 1880 – Usedlost čp. 22 (Josef Dvořák *1857 a výměnkářka Anna *1814)",
        "type": "census",
        "year": "1880",
        "source": "ZAO Olomouc, karton 330, inv. č. 1476, arch čp. 22 (snímky a, b)",
        "file": "assets/archives/cp22/1880-Dlouhomilov_22-a.jpg",
        "description": "Zápis mladého sedláka Josefa Dvořáka (*1857) s manželkou Annou roz. Kouřilovou, syny Josefem a Karlem a babičkou Annou (*1814)."
      },
      {
        "title": "Sčítací operát 1890 – Usedlost čp. 22 (Josef Dvořák s přilepeným křestním listem)",
        "type": "census",
        "year": "1890",
        "source": "ZAO Olomouc, karton 356, inv. č. 1560, arch čp. 22 (snímky a, b, c, d)",
        "file": "assets/archives/cp22/1890-Dlouhomilov_22-a.jpg",
        "description": "Popisný arch s 10 obyvateli, křestním listem Josefa Dvořáka (*1879) a výměnkářkou Annou Dvořákovou (*1814)."
      },
      {
        "title": "Sčítací operát 1900 – Usedlost čp. 22 (Josef Dvořák a křestní list Jaromíra *1890)",
        "type": "census",
        "year": "1900",
        "source": "ZAO Olomouc, karton 397, inv. č. 1664, arch čp. 22 (snímky a, b, c)",
        "file": "assets/archives/cp22/1900-Dlouhomilov_22-a.jpg",
        "description": "Sčítací arch s rodinou Josefa Dvořáka, synem vojákem v armádě a přilepeným křestním listem Jaromíra Dvořáka."
      },
      {
        "title": "Sčítací operát 1910 – Usedlost čp. 22 (Josef Dvořák, syn studující)",
        "type": "census",
        "year": "1910",
        "source": "ZAO Olomouc, karton 436, inv. č. 1765, arch čp. 22",
        "file": "assets/archives/cp22/1910-Dlouhomilov_22-Dvorak-a.jpg",
        "description": "Arch dokládající hospodaření Josefa Dvořáka a studium syna Jaromíra."
      },
      {
        "title": "Sčítací operát 1921 – Usedlost čp. 22 (Karel Dvořák a 4 sloužící)",
        "type": "census",
        "year": "1921",
        "source": "SOkA Šumperk / ZAO Olomouc, fascikl 3, inv. č. 1863, arch čp. 22",
        "file": "assets/archives/cp22/1921-Dlouhomilov_22a-Dvorak.jpg",
        "description": "Sčítací arch ČSR s novým hospodářem Karlem Dvořákem, čeledínem Josefem Jílkem a 3 děvečkami."
      }
    ],
    "stories": [
      {
        "title": "Rozluštěná záhada temenické větve: Šest generací Dvořáků na čp. 22 (1786–1949)",
        "era": "1786–1949",
        "content": "Usedlost čp. 22 patří k nejlépe zdokumentovaným selským gruntům v Dlouhomilově. Matriky a sčítací operáty z let 1786–1949 vyjasnily zdánlivou záhadu, proč měl hospodář Josef Dvořák (* 9. 2. 1857) jako rodiště zapsanou Temenici u Šumperka. Grunt na čp. 22 držel již v roce 1786 Pavel Dvořák (*1763, syn Jiřího Dvořáka) s manželkou Marinou roz. Weinlichovou z Brníčka. Po něm statek převzal syn Petr Dvořák (*1793, † 9. 12. 1878 na čp. 22). Petrova syna Josefa Dvořáka (*1816 v Dlouhomilově) osud na dvě desetiletí zavedl na statek do Temenice, kde se v letech 1848–1866 narodily všechny jeho děti (včetně Josefa *1857). Když v roce 1857 probíhalo první sčítání lidu, byl již Josef Dvořák zapsán jako majitel domu čp. 22, kde tehdy žil jeho otec Petr (*1793) a nájemce Isidor Braný. Před rokem 1869 se Josef Dvořák (*1816) s celou rodinou z Temenice vrátil do Dlouhomilova na rodný grunt čp. 22 a roku 1878 jej předal synovi Josefu Dvořákovi ml. (*1857), po němž nastoupil vnuk Karel Dvořák (*1880)."
      },
      {
        "title": "Od sládka k vyššímu vzdělání: Vzdělanostní vzestup selských synů",
        "era": "1869–1910",
        "content": "Záznamy z čp. 22 ukazují, jak si děti z předních dlouhomilovských usedlostí hledaly cestu k řemeslné i akademické specializaci. V roce 1869 zde vyrůstá devatenáctiletý Karel Dvořák (*1850), který se vyučil sládkem a působil jako tovaryš pivovarského řemesla. O dvě generace později, v roce 1910, zaznamenal sčítací komisař u dvacetiletého Jaromíra Dvořáka (*1890) status 'studující', což dokládá postupnou emancipaci a přístup selských dětí ke střednímu a vyššímu vzdělání v regionu."
      },
      {
        "title": "Dvojitá svatba roku 1878 a propojení gruntů čp. 22, čp. 24 a čp. 29",
        "era": "1878–1921",
        "content": "Dne 29. července 1878 zažil Dlouhomilov velkou dvojitou svatbu: dva bratři z čp. 22 – Josef Dvořák (*1857) a Karel Dvořák – si v jeden den vzali dvě sestry ze sousedního gruntu čp. 24 – Annu (*1857) a Ludmilu Kouřilovy, dcery sedláka Františka Kouřila a Mariany roz. Vlčkové. Z manželství Josefa a Anny na čp. 22 vzešli mimo jiné synové Josef Dvořák (* 3. 6. 1879), který se roku 1907 přiženil na památkově chráněný grunt čp. 29, a Karel Dvořák (* 7. 11. 1880), který po první světové válce převzal rodný statek čp. 22."
      }
    ]
  },
  {
    "id": "cp46",
    "number": "46",
    "localName": "Domkářské stavení čp. 46 (Aloise Dvořáka)",
    "type": "Domkářské stavení",
    "isHeritage": false,
    "uskpNumber": "VPZ 2350",
    "heritageDescription": "Historické venkovské stavení v památkové zóně Dlouhomilov.",
    "heritageSource": "Vesnická památková zóna Dlouhomilov",
    "location": {
      "lat": 49.9042,
      "lng": 16.9928,
      "cadastralParcel": "st. 60",
      "landParcels": "220",
      "source": "ČÚZK"
    },
    "statusStableCadastre": "Domkářské obydlí ve svahu nad obcí (st. 60).",
    "cadastreSource": "Stabilní katastr 1834",
    "description": "Tradiční domkářské stavení situované v horní části obce ve svahu. Po generace bylo spjato s větví rodu Dvořáků. Na počátku 20. století zde hospodařil ovdovělý domkař Alois Dvořák (*1840) společně se synem Janem Dvořákem (*1873), jehož synové se vyučili tesařskému a zednickému řemeslu pro stavební firmy v Zábřehu. Sčítací operáty z let 1910 a 1921 dokládají pozoruhodnou soudržnost rodiny, kdy ve dvou bytech pod jednou střechou žily tři generace.",
    "timeline": [
      {
        "year": "1834",
        "owner": "Domkářské stavení",
        "event": "Zděné domkářské stavení na stavební parcele st. 60 zaneseno v indikační skice stabilního katastru obce Dlouhomilov.",
        "sourceType": "verified",
        "source": "ÚAZK ČÚZK, Stabilní katastr 1834, k.ú. Dlouhomilov."
      },
      {
        "year": "1910",
        "owner": "Alois Dvořák (*1840)",
        "event": "Sčítání lidu 1910: 70letý domkař Alois Dvořák hospodaří na usedlosti s dcerami Josefou a Aloisií a vnukem Josefem (*1900). V druhém bytě žije syn Jan Dvořák (*1873), polní a železniční dělník, s manželkou Josefou a třemi školními syny (František, Oldřich, Ladislav). K archu byly farářem M. Špačkem přiloženy úřední výpisy z křestní matriky pro chlapce narozené v roce 1900. Chov: 5 kusů hovězího dobytka (3 krávy, 2 jalovice), 1 prase, 12 slepic a 4 husy. Celkem 9 obyvatel.",
        "sourceType": "verified",
        "source": "ZAO Olomouc, fond Okresní úřad Zábřeh, Sčítání lidu 1910, Dlouhomilov, arch čp. 46 (snímky 1910-Dlouhomilov_46-Dvorak*.jpg).",
        "scanFile": "assets/archives/cp46/1910-Dlouhomilov_46-Dvorak-a.jpg",
        "scanTitle": "Sčítací arch 1910 – Dlouhomilov čp. 46"
      },
      {
        "year": "1921",
        "owner": "Alois Dvořák (*1840) / Jan Dvořák (*1873)",
        "event": "Sčítání lidu 1921: V domě jsou hlášeny dvě samostatné bytové strany o celkem 10 osobách. Byt č. 1 obývá 81letý výměnkář a nájemce Alois Dvořák s dcerami Josefou (*1865) a Aloisií (*1868) a vnukem Josefem (*1900, rolníkem přihlášeným k nově vzniklé Církvi československé). Byt č. 2 vede Jan Dvořák (*1873), zemědělec, jehož syn František (*1900) je tesařským učněm, Oldřich (*1903) zednickým učněm u stavitele Františka Štourače v Zábřehu, Ladislav (*1904) nádeníkem a nejmladší Jan (*1910) žákem obecné školy.",
        "sourceType": "verified",
        "source": "SOkA Šumperk, fond Okresní správa politická Zábřeh, Sčítání lidu 1921, obec Dlouhomilov, přejímací č. 2/554, fascikl 3, arch čp. 46.",
        "scanFile": "assets/archives/cp46/1921-Dlouhomilov_46-Dvorak-a.jpg",
        "scanTitle": "Sčítací arch 1921 – Dlouhomilov čp. 46"
      },
      {
        "year": "1930–1933",
        "owner": "Sňatky synů Oldřicha (*1903) a Vladislava (*1904) Dvořákových",
        "event": "Matriční zápisy sňatků na čp. 46: V roce 1930 se žení Oldřich Dvořák (* 3. 2. 1903), tovární dělník, syn domkáře Jana Dvořáka a Josefy roz. Vitáskové. V roce 1933 se žení jeho bratr Vladislav (Ladislav) Dvořák (* 22. 10. 1904) s Emilií Boxanovou z čp. 47.",
        "sourceType": "unverified",
        "source": "ZAO Opava, Sbírka matrik, farnost Dlouhomilov, sign. Zá II 10, snímky 4, 130 a 146."
      },
      {
        "year": "1934–1938",
        "owner": "Úmrtí Josefy (*1865), Aloise (*1840) a Jana (*1873) Dvořákových",
        "event": "Matriční zápisy úmrtí na čp. 46: V roce 1934 umírá svobodná výměnice Josefa Dvořáková (* 1. 11. 1865 Úsov, dcera domkáře Aloise Dvořáka a Anny roz. Trávníčkové), roku 1936 je v rejstříku zemřelých zapsán Alois Dvořák a roku 1938 umírá ve věku 64 let domkář Jan Dvořák (* 10. 11. 1873, sezdán 20. 11. 1897, syn Aloise Dvořáka a Anny roz. Trávníčkové).",
        "sourceType": "verified",
        "source": "ZAO Opava, Sbírka matrik, farnost Dlouhomilov, sign. Zá II 10 (Z 1930–1949), snímky 170, 174 a 219."
      }
    ],
    "census": [
      {
        "year": 1910,
        "censusDate": "31. prosince 1910",
        "houseNumber": "46",
        "source": "ZAO Olomouc, fond Okresní úřad Zábřeh, Sčítání lidu 1910, obec Dlouhomilov, arch čp. 46",
        "sourceArchive": "ZAO Olomouc",
        "sourceFond": "Okresní úřad Zábřeh",
        "sourceScan": "1910-Dlouhomilov_46-Dvorak.jpg, 1910-Dlouhomilov_46-Dvorak-a.jpg, b, c",
        "totalInhabitants": 9,
        "familiesCount": 2,
        "inhabitants": [
          {
            "name": "Alois Dvořák",
            "relation": "Majitel domu / hospodář (Byt 1)",
            "birthDate": "1. 1. 1840",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Domkař a samostatný hospodář",
            "literacy": "čte i píše"
          },
          {
            "name": "Josefa Dvořáková",
            "relation": "Dcera (Byt 1)",
            "birthDate": "1. 1. 1865",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Pomáhá v polním hospodářství",
            "literacy": "čte i píše"
          },
          {
            "name": "Aloisie Dvořáková",
            "relation": "Dcera (Byt 1)",
            "birthDate": "19. 6. 1867",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Pomáhá v hospodářství a domácnosti",
            "literacy": "čte i píše"
          },
          {
            "name": "Josef Dvořák",
            "relation": "Vnuk, syn Aloisie (Byt 1)",
            "birthDate": "19. 2. 1900",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Žák obecné školy (doloženo křestním listem)",
            "literacy": "čte i píše"
          },
          {
            "name": "Jan Dvořák",
            "relation": "Syn Aloise / hlava rodiny (Byt 2)",
            "birthDate": "10. 11. 1873",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Železniční a polní dělník (FPK)",
            "literacy": "čte i píše"
          },
          {
            "name": "Josefa Dvořáková",
            "relation": "Manželka Jana (Byt 2)",
            "birthDate": "7. 6. 1876",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Vedení domácnosti",
            "literacy": "čte i píše"
          },
          {
            "name": "František Dvořák",
            "relation": "Syn Jana (Byt 2)",
            "birthDate": "10. 5. 1900",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Žák obecné školy (doloženo křestním listem)",
            "literacy": "čte i píše"
          },
          {
            "name": "Oldřich Dvořák",
            "relation": "Syn Jana (Byt 2)",
            "birthDate": "9. 2. 1903",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Žák obecné školy",
            "literacy": "čte i píše"
          },
          {
            "name": "Ladislav Dvořák",
            "relation": "Syn Jana (Byt 2)",
            "birthDate": "21. 10. 1904",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Dítě v rodině",
            "literacy": "čte i píše"
          }
        ],
        "livestock": {
          "horses": 0,
          "cattle": 5,
          "pigs": 1,
          "goats": 0,
          "poultry": 16
        }
      },
      {
        "year": 1921,
        "censusDate": "16. února 1921",
        "houseNumber": "46",
        "source": "SOkA Šumperk, fond Okresní správa politická Zábřeh, Sčítání lidu 1921, obec Dlouhomilov, přejímací č. 2/554, fascikl 3, arch čp. 46",
        "sourceArchive": "SOkA Šumperk",
        "sourceFond": "Okresní správa politická Zábřeh",
        "sourceScan": "1921-Dlouhomilov_46-Dvorak.jpg, 1921-Dlouhomilov_46-Dvorak-a.jpg, 1921-Dlouhomilov_46-Dvorak-b.jpg",
        "totalInhabitants": 10,
        "familiesCount": 2,
        "inhabitants": [
          {
            "name": "Alois Dvořák",
            "relation": "Majitel bytu / výměnkář (Byt 1)",
            "birthDate": "1. 1. 1840",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "Zemědělec – nájemce (výměnkář)",
            "literacy": "neumí číst ani psát"
          },
          {
            "name": "Josefa Dvořáková",
            "relation": "Dcera Aloise (Byt 1)",
            "birthDate": "2. 11. 1865",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "Výpomoc v domácnosti",
            "literacy": "neumí číst ani psát"
          },
          {
            "name": "Aloisie Dvořáková",
            "relation": "Dcera Aloise (Byt 1)",
            "birthDate": "19. 6. 1868",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "Vede domácnost otce",
            "literacy": "čte i píše"
          },
          {
            "name": "Josef Dvořák",
            "relation": "Vnuk Aloise (Byt 1)",
            "birthDate": "19. 2. 1900",
            "birthPlace": "Dlouhomilov",
            "religion": "československá (CČS)",
            "nationality": "československá",
            "occupation": "Zemědělství – pomáhá dědovi",
            "literacy": "čte i píše"
          },
          {
            "name": "Jan Dvořák",
            "relation": "Syn Aloise / majitel bytu (Byt 2)",
            "birthDate": "10. 11. 1873",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "Zemědělec – nájemník",
            "literacy": "čte i píše"
          },
          {
            "name": "Josefa Dvořáková",
            "relation": "Manželka Jana (Byt 2)",
            "birthDate": "2. 7. 1876",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "Vedení domácnosti",
            "literacy": "čte i píše"
          },
          {
            "name": "František Dvořák",
            "relation": "Syn Jana (Byt 2)",
            "birthDate": "10. 5. 1900",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "Tesař (učeň u stavitele v Zábřehu)",
            "literacy": "čte i píše"
          },
          {
            "name": "Oldřich Dvořák",
            "relation": "Syn Jana (Byt 2)",
            "birthDate": "9. 2. 1903",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "Zedník (učeň u stavitele Františka Štourače v Zábřehu)",
            "literacy": "čte i píše"
          },
          {
            "name": "Ladislav Dvořák",
            "relation": "Syn Jana (Byt 2)",
            "birthDate": "22. 10. 1904",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "Pomocný dělník / nádeník",
            "literacy": "čte i píše"
          },
          {
            "name": "Jan Dvořák",
            "relation": "Syn Jana (Byt 2)",
            "birthDate": "25. 7. 1910",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "Žák obecné školy",
            "literacy": "čte i píše"
          }
        ],
        "livestock": {
          "horses": 0,
          "cattle": 0,
          "pigs": 0,
          "goats": 0
        }
      }
    ],
    "documents": [
      {
        "title": "Stabilní katastr 1834 – Indikační skica (st. 60, stavení čp. 46)",
        "type": "map",
        "year": "1834",
        "source": "ÚAZK ČÚZK, Císařské otisky stabilního katastru, Dlouhomilov",
        "file": "assets/archives/cp46/1910-Dlouhomilov_46-Dvorak.jpg",
        "description": "Katastrální situace stavební parcely st. 60 domkářského stavení ve svahu obce."
      },
      {
        "title": "Sčítací operát 1910 – Titulní list a soupis zvířat čp. 46",
        "type": "census",
        "year": "1910",
        "source": "ZAO Olomouc, fond Okresní úřad Zábřeh, Sčítání 1910, Dlouhomilov, arch čp. 46",
        "file": "assets/archives/cp46/1910-Dlouhomilov_46-Dvorak.jpg",
        "description": "Titulní strana sčítacího operátu 1910 se soupisem hospodářských zvířat Aloise a Jana Dvořáka (5 kusů hovězího dobytka, 1 prase, 16 kusů drůbeže)."
      },
      {
        "title": "Sčítací operát 1910 – Seznam obyvatel s křestním listem Josefa Dvořáka",
        "type": "census",
        "year": "1910",
        "source": "ZAO Olomouc, fond Okresní úřad Zábřeh, Sčítání 1910, Dlouhomilov, arch čp. 46",
        "file": "assets/archives/cp46/1910-Dlouhomilov_46-Dvorak-a.jpg",
        "description": "Přední strana archu s vepsanými dvěma rodinami a nalepeným úředním výpisem z křestní matriky pro vnuka Josefa Dvořáka (*1900)."
      },
      {
        "title": "Sčítací operát 1910 – Sčítací arch s křestním listem Františka Dvořáka",
        "type": "census",
        "year": "1910",
        "source": "ZAO Olomouc, fond Okresní úřad Zábřeh, Sčítání 1910, Dlouhomilov, arch čp. 46",
        "file": "assets/archives/cp46/1910-Dlouhomilov_46-Dvorak-b.jpg",
        "description": "Sčítací arch s druhým nalepeným výpisem z křestní matriky pro Františka Dvořáka (*10. 5. 1900) podepsaným farářem M. Špačkem."
      },
      {
        "title": "Sčítací operát 1910 – Odkrytý soupis obyvatel obou bytů čp. 46",
        "type": "census",
        "year": "1910",
        "source": "ZAO Olomouc, fond Okresní úřad Zábřeh, Sčítání 1910, Dlouhomilov, arch čp. 46",
        "file": "assets/archives/cp46/1910-Dlouhomilov_46-Dvorak-c.jpg",
        "description": "Plně odkrytý sčítací formulář zachycující všech 9 členů domácnosti, profesní data na železnici (FPK) a školní docházku dětí."
      },
      {
        "title": "Sčítací operát 1921 – Sběrný arch domovní čp. 46",
        "type": "census",
        "year": "1921",
        "source": "SOkA Šumperk, OSP Zábřeh, Sčítání 1921, obec Dlouhomilov, přejímací č. 2/554, fascikl 3, arch čp. 46",
        "file": "assets/archives/cp46/1921-Dlouhomilov_46-Dvorak.jpg",
        "description": "Domovní sběrný arch z roku 1921 evidující 2 obývané byty s celkem 10 přítomnými obyvateli (Alois Dvořák a Jan Dvořák)."
      },
      {
        "title": "Sčítací operát 1921 – Bytový arch 1 (Alois Dvořák a dcera Aloisie)",
        "type": "census",
        "year": "1921",
        "source": "SOkA Šumperk, OSP Zábřeh, Sčítání 1921, obec Dlouhomilov, arch čp. 46",
        "file": "assets/archives/cp46/1921-Dlouhomilov_46-Dvorak-a.jpg",
        "description": "Bytový arch č. 1 s 81letým výměnkářem Aloisem Dvořákem, dcerami Josefou a Aloisií a vnukem Josefem (*1900)."
      },
      {
        "title": "Sčítací operát 1921 – Bytový arch 2 (Jan Dvořák a synové řemeslníci)",
        "type": "census",
        "year": "1921",
        "source": "SOkA Šumperk, OSP Zábřeh, Sčítání 1921, obec Dlouhomilov, arch čp. 46",
        "file": "assets/archives/cp46/1921-Dlouhomilov_46-Dvorak-b.jpg",
        "description": "Bytový arch č. 2 zachycující rodinu Jana Dvořáka a jeho dospívající syny učící se stavebním řemeslům (tesař, zedník u mistra Štourače v Zábřehu)."
      }
    ],
    "stories": [
      {
        "title": "Matriční výpisy vlepené do operátu: Příběh dvou chlapců roku 1900",
        "content": "Při sčítání lidu v prosinci 1910 nastala v domku čp. 46 kuriózní situace. Ve stavení žili dva chlapci s příjmením Dvořák, kteří se oba narodili v témže roce 1900 – vnuk Josef (*19. 2. 1900, syn neprovdané dcery Aloisie) a synovec František (*10. 5. 1900, syn Jana Dvořáka a Josefy). Aby sčítací komisař Josef Minařík předešel jakýmkoliv nesrovnalostem ve věku a původu dětí, nechal si od místního faráře M. Špačka vystavit bezplatné úřední 'Výpisy z matriky'. Tyto originální papírové lístky s kulatým farním razítkem zůstaly nalepeny přímo přes pravou stranu sčítacího formuláře a dochovaly se v archivním fondu dodnes jako unikátní svědectví o pečlivosti tehdejší evidence."
      },
      {
        "title": "Od polního nádenictví ke stavebním řemeslům",
        "content": "Zatímco starý domkař Alois Dvořák (*1840) ještě hospodařil tradičním způsobem na drobných parcelách ve svahu a choval 4 kusy skotu a prasnici, mladší generace Jana Dvořáka (*1873) již představovala přechod venkovského obyvatelstva k průmyslové a námezdní práci. Jan pracoval jako nádeník a železniční dělník při údržbě tratí (v kolonce poznamenáno 'FPK'). V roce 1921 pak jeho synové František (*1900) a Oldřich (*1903) nastoupili na dráhu kvalifikovaných stavebních řemesel – František jako tesařský tovaryš a Oldřich jako zedník u známé stavitelské firmy Františka Štourače v Zábřehu. Tento posun ilustruje modernizaci venkova a dojíždění za prací do blízkého průmyslového centra."
      },
      {
        "title": "Tři generace a náboženský kvas po vzniku republiky",
        "content": "V únoru 1921 sčítání zachytilo pod střechou domku čp. 46 celkem 10 lidí ve věkovém rozpětí od 81letého patriarchy Aloise Dvořáka až po 10letého školáka Jeníka. Záznam odráží také hluboký společenský zlom po vzniku samostatného Československa. Zatímco starší generace zůstávala věrná římskokatolickému vyznání, 21letý vnuk Josef Dvořák (*1900) využil náboženské svobody mladé republiky a přestoupil do nově ustavené Církve československé (husitské), což sčítací komisař zřetelně vyznačil v kolonce vyznání."
      }
    ]
  },
  {
    "id": "cp110",
    "number": "110",
    "localName": "Venkovské stavení čp. 110 (rod Podhorných)",
    "type": "Venkovské stavení a hospodářství",
    "isHeritage": false,
    "uskpNumber": "VPZ 2350",
    "heritageDescription": "Historický venkovský dům v památkové zóně Dlouhomilov.",
    "heritageSource": "Vesnická památková zóna Dlouhomilov",
    "location": {
      "lat": 49.9112,
      "lng": 16.9908,
      "cadastralParcel": "st. 120",
      "landParcels": "310",
      "source": "ČÚZK"
    },
    "statusStableCadastre": "Zástavba obce z 19. století, zemědělská usedlost.",
    "cadastreSource": "Stabilní katastr 1834",
    "description": "Tradiční venkovské stavení a hospodářství rodu Podhorných situované v severní části obce. Po generace zde hospodařil rod Podhorných, který kombinoval samostatné polní hospodaření se zednickým a tesařským řemeslem. V letech 1910 a 1921 zde žil hospodář Jan Podhorný starší (*1860) a následně jeho syn Jan Podhorný mladší (*1883) s rodinou. Operáty zachycují také ubytování rodiny podnájemníka a zedníka Isidora Branného.",
    "timeline": [
      {
        "year": "1834",
        "owner": "Rod Podhorných",
        "event": "Stavební parcela st. 120 v zástavbě Dlouhomilova evidována v indikační skice stabilního katastru.",
        "sourceType": "verified",
        "source": "ÚAZK ČÚZK, Stabilní katastr 1834, k.ú. Dlouhomilov."
      },
      {
        "year": "1910",
        "owner": "Jan Podhorný st. (*1854/1860)",
        "event": "Sčítání lidu 1910: Domkař a zednický mistr Jan Podhorný s manželkou Annou a dospělými syny Janem (*1883/1886, zedník) a Františkem (*1892, tesař). K archu byl farářem M. Špačkem přiložen úřední výpis z křestní matriky pro Františka Podhorného narozeného 8. dubna 1892. V podnájmu (Byt 2) žije rodina zedníka Isidora Branného (*1875) s chotí Boženou (*1884), dcerkou Jiřinou (*1908) a 73letou matkou Annou Brannou (*1837). Chov: 1 kráva, 1 jalovice, 1 prasnice, 5 slepic a 1 husa. Celkem 8 obyvatel.",
        "sourceType": "verified",
        "source": "ZAO Olomouc, fond Okresní úřad Zábřeh, Sčítání lidu 1910, Dlouhomilov, arch čp. 110 (snímky 1910-Dlouhomilov_110-Podhorny*.jpg).",
        "scanFile": "assets/archives/cp110/1910-Dlouhomilov_110-Podhorny-a.jpg",
        "scanTitle": "Sčítací arch 1910 – Dlouhomilov čp. 110"
      },
      {
        "year": "1921",
        "owner": "Jan Podhorný ml. (*1883)",
        "event": "Sčítání lidu 1921: Hospodářství přebírá syn Jan Podhorný mladší (*1883), samostatný rolník, s manželkou Marií (*1888), dcerami Radoslavou (*1912), Marií (*1914), synem Janem (*1917) a 26letou zemědělskou služkou Marií Dvořákovou (*1895). V druhém bytě na výměnku pokojně žijí rodiče Jan Podhorný starší (*1860) a Anna Podhorná (*1863). Celkem 8 obyvatel ve 2 bytech.",
        "sourceType": "verified",
        "source": "SOkA Šumperk, fond Okresní správa politická Zábřeh, Sčítání lidu 1921, obec Dlouhomilov, přejímací č. 2/554, fascikl 3, arch čp. 110.",
        "scanFile": "assets/archives/cp110/1921-Dlouhomilov_110-Podhorny-a.jpg",
        "scanTitle": "Sčítací arch 1921 – Dlouhomilov čp. 110"
      }
    ],
    "census": [
      {
        "year": 1910,
        "censusDate": "31. prosince 1910",
        "houseNumber": "110",
        "source": "ZAO Olomouc, fond Okresní úřad Zábřeh, Sčítání lidu 1910, obec Dlouhomilov, arch čp. 110",
        "sourceArchive": "ZAO Olomouc",
        "sourceFond": "Okresní úřad Zábřeh",
        "sourceScan": "1910-Dlouhomilov_110-Podhorny.jpg, 1910-Dlouhomilov_110-Podhorny-a.jpg, aa",
        "totalInhabitants": 8,
        "familiesCount": 2,
        "inhabitants": [
          {
            "name": "Jan Podhorný",
            "relation": "Majitel domu / hospodář (Byt 1)",
            "birthDate": "31. 12. 1854",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Domkař a hospodář",
            "literacy": "čte i píše"
          },
          {
            "name": "Anna Podhorná",
            "relation": "Manželka Jana st. (Byt 1)",
            "birthDate": "2. 12. 1862",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Pomáhá v hospodářství",
            "literacy": "čte i píše"
          },
          {
            "name": "Jan Podhorný",
            "relation": "Syn Jana st. (Byt 1)",
            "birthDate": "29. 9. 1886",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Zedník a polní hospodář",
            "literacy": "čte i píše"
          },
          {
            "name": "František Podhorný",
            "relation": "Syn Jana st. (Byt 1)",
            "birthDate": "8. 4. 1892",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Tesař (doloženo křestním listem)",
            "literacy": "čte i píše"
          },
          {
            "name": "Isidor Branný",
            "relation": "Podnájemce / hlava rodiny (Byt 2)",
            "birthDate": "9. 12. 1875",
            "birthPlace": "Václavov",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Zedník",
            "literacy": "čte i píše"
          },
          {
            "name": "Božena Branná",
            "relation": "Manželka Isidora (Byt 2)",
            "birthDate": "8. 3. 1884",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Dělnice v textilce / přadlena",
            "literacy": "čte i píše"
          },
          {
            "name": "Jiřina Branná",
            "relation": "Dcera Isidora (Byt 2)",
            "birthDate": "19. 12. 1908",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Dítě v rodině",
            "literacy": "malé dítě"
          },
          {
            "name": "Anna Branná",
            "relation": "Matka Isidora (Byt 2)",
            "birthDate": "2. 4. 1837",
            "birthPlace": "Václavov",
            "religion": "římskokatolické",
            "nationality": "česká",
            "occupation": "Obstarává domácnost (výměnkářka)",
            "literacy": "čte i píše"
          }
        ],
        "livestock": {
          "horses": 0,
          "cattle": 2,
          "pigs": 1,
          "goats": 0,
          "poultry": 6
        }
      },
      {
        "year": 1921,
        "censusDate": "16. února 1921",
        "houseNumber": "110",
        "source": "SOkA Šumperk, fond Okresní správa politická Zábřeh, Sčítání lidu 1921, obec Dlouhomilov, přejímací č. 2/554, fascikl 3, arch čp. 110",
        "sourceArchive": "SOkA Šumperk",
        "sourceFond": "Okresní správa politická Zábřeh",
        "sourceScan": "1921-Dlouhomilov_110-Podhorny.jpg, 1921-Dlouhomilov_110-Podhorny-a.jpg, 1921-Dlouhomilov_110-Podhorny-b.jpg",
        "totalInhabitants": 8,
        "familiesCount": 2,
        "inhabitants": [
          {
            "name": "Jan Podhorný",
            "relation": "Majitel bytu / rolník (Byt 1)",
            "birthDate": "20. 9. 1883",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "Samostatný rolník na čp. 110",
            "literacy": "čte i píše"
          },
          {
            "name": "Marie Podhorná",
            "relation": "Manželka Jana ml. (Byt 1)",
            "birthDate": "15. 1. 1888",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "Vedení hospodářství a domácnosti",
            "literacy": "čte i píše"
          },
          {
            "name": "Radoslava Podhorná",
            "relation": "Dcera Jana ml. (Byt 1)",
            "birthDate": "15. 8. 1912",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "Žákyně obecné školy",
            "literacy": "čte i píše"
          },
          {
            "name": "Marie Podhorná",
            "relation": "Dcera Jana ml. (Byt 1)",
            "birthDate": "24. 1. 1914",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "Žákyně obecné školy",
            "literacy": "čte i píše"
          },
          {
            "name": "Jan Podhorný",
            "relation": "Syn Jana ml. (Byt 1)",
            "birthDate": "15. 8. 1917",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "Dítě v rodině",
            "literacy": "předškolní dítě"
          },
          {
            "name": "Marie Dvořáková",
            "relation": "Zemědělská služka (Byt 1)",
            "birthDate": "15. 1. 1895",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "Služka v zemědělství u Jana Podhorného",
            "literacy": "čte i píše"
          },
          {
            "name": "Jan Podhorný",
            "relation": "Otec / výměnkář (Byt 2)",
            "birthDate": "22. 12. 1860",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "Výměnkář v zemědělství",
            "literacy": "čte i píše"
          },
          {
            "name": "Anna Podhorná",
            "relation": "Matka / výměnkářka (Byt 2)",
            "birthDate": "27. 12. 1863",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "Vedení výměnkářské domácnosti",
            "literacy": "čte i píše"
          }
        ],
        "livestock": {
          "horses": 0,
          "cattle": 0,
          "pigs": 0,
          "goats": 0
        }
      }
    ],
    "documents": [
      {
        "title": "Stabilní katastr 1834 – Stavení čp. 110 (st. 120)",
        "type": "map",
        "year": "1834",
        "source": "ÚAZK ČÚZK, Císařské otisky stabilního katastru, Dlouhomilov",
        "file": "assets/archives/cp110/1910-Dlouhomilov_110-Podhorny.jpg",
        "description": "Katastrální půdorys stavení st. 120 v indikační skice stabilního katastru."
      },
      {
        "title": "Sčítací operát 1910 – Titulní list a soupis zvířectva čp. 110",
        "type": "census",
        "year": "1910",
        "source": "ZAO Olomouc, fond Okresní úřad Zábřeh, Sčítání 1910, Dlouhomilov, arch čp. 110",
        "file": "assets/archives/cp110/1910-Dlouhomilov_110-Podhorny.jpg",
        "description": "Titulní strana sčítacího operátu 1910 s evidencí chovu Jana Podhorného (1 kráva, 1 jalovice, 1 prasnice, drůbež)."
      },
      {
        "title": "Sčítací operát 1910 – Soupis obyvatel s rodným listem Františka Podhorného",
        "type": "census",
        "year": "1910",
        "source": "ZAO Olomouc, fond Okresní úřad Zábřeh, Sčítání 1910, Dlouhomilov, arch čp. 110",
        "file": "assets/archives/cp110/1910-Dlouhomilov_110-Podhorny-a.jpg",
        "description": "Sčítací arch z roku 1910 s přilepeným výpisem z křestní matriky faráře Špačka pro Františka Podhorného (*8. 4. 1892)."
      },
      {
        "title": "Sčítací operát 1910 – Odkrytý arch s podnájemní rodinou Isidora Branného",
        "type": "census",
        "year": "1910",
        "source": "ZAO Olomouc, fond Okresní úřad Zábřeh, Sčítání 1910, Dlouhomilov, arch čp. 110",
        "file": "assets/archives/cp110/1910-Dlouhomilov_110-Podhorny-aa.jpg",
        "description": "Kompletně odkrytý formulář 1910 zachycující rodinu hospodáře Jana Podhorného a podnájemníka zedníka Isidora Branného z Václavova."
      },
      {
        "title": "Sčítací operát 1921 – Sběrný arch domovní čp. 110",
        "type": "census",
        "year": "1921",
        "source": "SOkA Šumperk, OSP Zábřeh, Sčítání 1921, obec Dlouhomilov, přejímací č. 2/554, fascikl 3, arch čp. 110",
        "file": "assets/archives/cp110/1921-Dlouhomilov_110-Podhorny.jpg",
        "description": "Domovní sběrný arch z roku 1921 stvrzující 2 byty o 8 obyvatelích (Jan Podhorný ml. a Jan Podhorný st.)."
      },
      {
        "title": "Sčítací operát 1921 – Bytový arch 1 (Jan Podhorný ml. a služka Marie Dvořáková)",
        "type": "census",
        "year": "1921",
        "source": "SOkA Šumperk, OSP Zábřeh, Sčítání 1921, obec Dlouhomilov, arch čp. 110",
        "file": "assets/archives/cp110/1921-Dlouhomilov_110-Podhorny-a.jpg",
        "description": "Bytový arch č. 1 mladého hospodáře Jana Podhorného, jeho ženy Marie, tří dětí a čelední služky Marie Dvořákové."
      },
      {
        "title": "Sčítací operát 1921 – Bytový arch 2 (výměnkáři Jan a Anna Podhorní)",
        "type": "census",
        "year": "1921",
        "source": "SOkA Šumperk, OSP Zábřeh, Sčítání 1921, obec Dlouhomilov, arch čp. 110",
        "file": "assets/archives/cp110/1921-Dlouhomilov_110-Podhorny-b.jpg",
        "description": "Bytový arch č. 2 stvrzující výměnek starých rodičů Jana Podhorného staršího (*1860) a Anny (*1863)."
      }
    ],
    "stories": [
      {
        "title": "Zedníci, tesaři a rolníci: Podhorští mistři stavebního řemesla",
        "content": "Stavení čp. 110 bylo v obci známé úzkým spojením selského hospodaření a stavebních řemesel. Jan Podhorný starší (*1860) i jeho syn Jan mladší (*1883) se vedle obdělávání polí věnovali zednictví, zatímco mladší syn František (*1892) se vyučil tesařem. Tato všestranná dovednost umožňovala rodině nejen udržovat vlastní hospodářství v prvotřídním stavu, ale také stavět a opravovat usedlosti a stodoly po celém Dlouhomilově i okolních vesnicích."
      },
      {
        "title": "Podnájemníci v domě: Václavovský zedník Isidor Branný",
        "content": "V roce 1910 našla v domku čp. 110 útočiště rodina Isidora Branného (*1875), zedníka původem ze sousedního Václavova. Isidor žil v odděleném bytě se svou mladou ženou Boženou (*1884), rozenou dlouhomilovskou tkadlenou, dvouletou dcerkou Jiřinkou a svou 73letou ovdovělou matkou Annou. Spolupráce dvou zednických rodin – domácího mistra Jana Podhorného a podnájemníka Isidora Branného – byla v době stavebního rozmachu před první světovou válkou přirozeným profesním i sousedským spojenectvím."
      },
      {
        "title": "Předání gruntu a výměnkářský klid v nové republice",
        "content": "Po skončení první světové války předal stárnoucí Jan Podhorný starší vedení hospodářství svému prvorozenému synovi Janovi mladšímu. V únoru 1921 tak sčítací komisař zaznamenal vzorové generační uspořádání: mladý hospodář Jan (*1883) řídil grunt s manželkou Marií, třemi malými dětmi a najatou služkou Marií Dvořákovou, zatímco staří rodiče si užívali zaslouženého odpočinku na výměnku ve druhém bytě. Rodová kontinuita Podhorných na čp. 110 tím pokračovala do další generace."
      }
    ]
  },
  {
    "id": "medelske_cp1",
    "number": "1",
    "settlement": "Medelské",
    "localName": "Domkářské stavení Medelské čp. 1 (rod Minářů)",
    "type": "Domkářské stavení",
    "isHeritage": false,
    "uskpNumber": null,
    "heritageDescription": "Tradiční venkovské stavení v historické osadě Medelské.",
    "heritageSource": "Územní plán a stabilní katastr obce Dlouhomilov",
    "location": {
      "lat": 49.9015,
      "lng": 16.9938,
      "cadastralParcel": "st. 1",
      "landParcels": "15",
      "source": "ČÚZK – k.ú. Dlouhomilov"
    },
    "statusStableCadastre": "Domkářské stavení v osadě Medelské (Dreihofen) zachycené na stabilním katastru 1834.",
    "cadastreSource": "Stabilní katastr 1834",
    "description": "Historické domkářské stavení v osadě Medelské (dříve Dreihofen), která tvoří nedílnou součást obce Dlouhomilov. V roce 1921 zde žila početná třináctičlenná rodina Minářových ve dvou samostatných domácnostech pod jednou střechou. Zatímco patriarcha rodu Jan Minář starší (*1847) zde hospodařil jako samostatný malorolník, jeho syn Jan Minář mladší (*1876) představoval nastupující generaci venkovského obyvatelstva dojíždějícího za prací do textilního průmyslu – pracoval jako tovární bělič u významné šumperské textilní firmy Eduard Oberleitner a synové. Nejstarší syn Jan (*1906) se učil zámečníkem v Lesnici.",
    "timeline": [
      {
        "year": "1834",
        "owner": "Osada Medelské",
        "event": "Zástavba osady Medelské (Dreihofen) vyměřena a evidována v indikační skice stabilního katastru obce Dlouhomilov.",
        "sourceType": "verified",
        "source": "ÚAZK ČÚZK, Stabilní katastr 1834, k.ú. Dlouhomilov."
      },
      {
        "year": "1921",
        "owner": "Jan Minář st. (*1847)",
        "event": "Sčítání lidu 1921: Sběrný arch domovní pro osadu Medelské čp. 1 stvrzuje 2 samostatné obývané byty s celkem 13 přítomnými obyvateli. V Bytě 1 žije tovární dělník Jan Minář ml. s manželkou Anežkou a 7 dětmi (syn Jan je zámečnickým učněm v Lesnici). V Bytě 2 žije ovdovělý malorolník Jan Minář st. se synem Josefem, dcerou Marií a vnučkou Jarmilou.",
        "sourceType": "verified",
        "source": "SOkA Šumperk, fond Okresní správa politická Zábřeh, Sčítání lidu 1921, obec Dlouhomilov, osada Medelské, přejímací č. 2/554, fascikl 3, arch čp. 1.",
        "scanFile": "assets/archives/cp1/1921-Dlouhomilov_1-Minar.jpg",
        "scanTitle": "Sčítací operát 1921 – Medelské čp. 1"
      }
    ],
    "census": [
      {
        "year": 1921,
        "censusDate": "16. února 1921",
        "houseNumber": "1",
        "settlement": "Medelské",
        "source": "SOkA Šumperk, fond Okresní správa politická Zábřeh, Sčítání lidu 1921, obec Dlouhomilov, osada Medelské, přejímací č. 2/554, fascikl 3, arch čp. 1",
        "sourceArchive": "SOkA Šumperk",
        "sourceFond": "Okresní správa politická Zábřeh",
        "sourceScan": "1921-Dlouhomilov_1-Minar.jpg, 1921-Dlouhomilov_1-Minar-a.jpg, 1921-Dlouhomilov_1b-Minar.jpg, 1921-Dlouhomilov_1c-Minar.jpg",
        "totalInhabitants": 13,
        "familiesCount": 2,
        "inhabitants": [
          {
            "name": "Jan Minář",
            "relation": "Majitel bytu / tovární dělník (Byt 1)",
            "birthDate": "2. 4. 1876",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "Běličství – tovární dělník (Eduard Oberleitner a synové)",
            "literacy": "čte i píše"
          },
          {
            "name": "Anežka Minářová",
            "relation": "Manželka Jana ml. (Byt 1)",
            "birthDate": "10. 5. 1884",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "Vedení domácnosti",
            "literacy": "čte i píše"
          },
          {
            "name": "Jan Minář",
            "relation": "Syn Jana ml. (Byt 1)",
            "birthDate": "25. 6. 1906",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "Zámečnický učeň (mistr: Eduard Urban, zámečník, Lesnice)",
            "literacy": "čte i píše"
          },
          {
            "name": "Jiří Minář",
            "relation": "Syn Jana ml. (Byt 1)",
            "birthDate": "18. 10. 1907",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "Žák obecné školy",
            "literacy": "čte i píše"
          },
          {
            "name": "Marie Minářová",
            "relation": "Dcera Jana ml. (Byt 1)",
            "birthDate": "29. 4. 1909",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "Žákyně obecné školy",
            "literacy": "čte i píše"
          },
          {
            "name": "Jaroslav Minář",
            "relation": "Syn Jana ml. (Byt 1)",
            "birthDate": "10. 10. 1912",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "Žák obecné školy",
            "literacy": "čte i píše"
          },
          {
            "name": "Vlasta Minářová",
            "relation": "Dcera Jana ml. (Byt 1)",
            "birthDate": "21. 3. 1914",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "Žákyně obecné školy",
            "literacy": "čte i píše"
          },
          {
            "name": "Anežka Minářová",
            "relation": "Dcera Jana ml. (Byt 1)",
            "birthDate": "20. 5. 1915",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "Dítě v rodině",
            "literacy": "předškolní dítě"
          },
          {
            "name": "Vladimír Minář",
            "relation": "Syn Jana ml. (Byt 1)",
            "birthDate": "21. 5. 1918",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "Dítě v rodině",
            "literacy": "předškolní dítě"
          },
          {
            "name": "Jan Minář",
            "relation": "Majitel domu a bytu / otec (Byt 2)",
            "birthDate": "21. 1. 1847",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "Malorolník na vlastním hospodářství",
            "literacy": "čte i píše"
          },
          {
            "name": "Josef Minář",
            "relation": "Syn Jana st. (Byt 2)",
            "birthDate": "21. 12. 1884",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "Dělník",
            "literacy": "čte i píše"
          },
          {
            "name": "Marie Minářová",
            "relation": "Dcera Jana st. (Byt 2)",
            "birthDate": "18. 9. 1893",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "Vedení domácnosti",
            "literacy": "čte i píše"
          },
          {
            "name": "Jarmila Minářová",
            "relation": "Vnučka Jana st. (Byt 2)",
            "birthDate": "25. 6. 1911",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "Žákyně obecné školy",
            "literacy": "čte i píše"
          }
        ],
        "livestock": {
          "horses": 0,
          "cattle": 0,
          "pigs": 0,
          "goats": 0
        }
      }
    ],
    "documents": [
      {
        "title": "Stabilní katastr 1834 – Osada Medelské (st. 1)",
        "type": "map",
        "year": "1834",
        "source": "ÚAZK ČÚZK, Císařské otisky stabilního katastru, Dlouhomilov / Medelské",
        "file": "assets/archives/cp1/katastr_1834_autenticky.jpg",
        "description": "Zákres půdorysu zástavby osady Medelské na indikační skice stabilního katastru."
      },
      {
        "title": "Sčítací operát 1921 – Bytový arch 1 (tovární dělník Jan Minář ml.)",
        "type": "census",
        "year": "1921",
        "source": "SOkA Šumperk, OSP Zábřeh, Sčítání 1921, obec Dlouhomilov, osada Medelské, arch čp. 1",
        "file": "assets/archives/cp1/medelske_cp1_1921_byt1.jpg",
        "description": "Bytový arch č. 1 zachycující továrního bělice textilu Jana Mináře, jeho choť Anežku a děti."
      },
      {
        "title": "Sčítací operát 1921 – Bytový arch 1 (pokračování: Vladimír Minář)",
        "type": "census",
        "year": "1921",
        "source": "SOkA Šumperk, OSP Zábřeh, Sčítání 1921, obec Dlouhomilov, osada Medelské, arch čp. 1",
        "file": "assets/archives/cp1/medelske_cp1_1921_byt1_p2.jpg",
        "description": "Pokračování bytového archu č. 1 s nejmladším synem Vladimírem Minářem (*1919)."
      },
      {
        "title": "Sčítací operát 1921 – Bytový arch 2 (malorolník Jan Minář st.)",
        "type": "census",
        "year": "1921",
        "source": "SOkA Šumperk, OSP Zábřeh, Sčítání 1921, obec Dlouhomilov, osada Medelské, arch čp. 1",
        "file": "assets/archives/cp1/medelske_cp1_1921_byt2.jpg",
        "description": "Bytový arch č. 2 s ovdovělým patriarchou Janem Minářem starším (*1847), synem Josefem, dcerou Marií a vnučkou Jarmilou."
      }
    ],
    "stories": [
      {
        "title": "Tovární bělič u Oberleitnera a zámečnický učeň v Lesnici",
        "content": "Stavení Medelské čp. 1 nabízí plastický obraz proměny moravského venkova v prvních letech Československé republiky. Zatímco starý otec Jan Minář (*1847) ještě žil z výnosu své drobné půdy jako samostatný malorolník, jeho syn Jan Minář mladší (*1876) představoval dělnickou sílu vzkvétajícího textilního průmyslu na Šumpersku – pracoval jako odborný bělič v proslulé bělidle a textilce firmy Eduard Oberleitner a synové. Jeho nejstarší patnáctiletý syn Jan (*1906) pak nastoupil do učení k zámečnickému mistrovi Eduardu Urbanovi v sousední Lesnici. Tři generace rodiny tak spojovaly tradiční půdu, tovární provoz i moderní strojírenské řemeslo."
      },
      {
        "title": "Třináct duší pod jednou střechou v osadě Medelské",
        "content": "V únoru 1921 žilo v domku na Medelském celkem třináct členů rodiny Minářových. Rozdělení do dvou samostatných bytových jednotek umožňovalo zachovat klid starého hospodáře Jana Mináře st. i provoz početné mladé rodiny se sedmi dětmi, z nichž nejstaršímu Janovi bylo patnáct let a nejmladšímu Vladimírovi necelé tři roky. Záznam sčítacího komisaře z 16. února 1921 ukazuje stoprocentní gramotnost dospělých i školních dětí a hluboké sepětí rodiny s regionem – všech 13 osob se narodilo přímo v Dlouhomilově."
      }
    ]
  },
  {
    "id": "cp3",
    "number": "3",
    "settlement": "Dlouhomilov",
    "localName": "Domkářské stavení čp. 3 (rodina Dvořákova)",
    "type": "Domkářské stavení",
    "isHeritage": false,
    "uskpNumber": null,
    "heritageDescription": "Tradiční venkovské stavení v jádru obce Dlouhomilov.",
    "heritageSource": "Územní plán a stabilní katastr obce Dlouhomilov",
    "location": {
      "lat": 49.9073,
      "lng": 16.9912,
      "cadastralParcel": "st. 3",
      "source": "ČÚZK – k.ú. Dlouhomilov"
    },
    "statusStableCadastre": "Domkářské stavení zanesené na stabilním katastru 1834.",
    "cadastreSource": "Stabilní katastr 1834",
    "description": "Historické domkářské stavení čp. 3 v Dlouhomilově. V únoru 1921 zde žila čtyřčlenná rodina Dvořákova vedená pětasedmdesátiletou vdovou Kateřinou Dvořákovou (*1845), která do Dlouhomilova přišla při sňatku roku 1865 z Horních Studének. Její syn Jan (*1892) pomáhal na malorolnickém hospodářství, dcera Jana (*1883) vedla domácnost a dcera Anežka (*1891) pomáhala matce; sčítací arch výslovně uvádí, že Anežka byla od narození hluchoněmá.",
    "timeline": [
      {
        "year": "1834",
        "owner": "Domkář čp. 3",
        "event": "Zaneseno v císařských otiscích stabilního katastru obce Dlouhomilov.",
        "sourceType": "verified",
        "source": "ÚAZK ČÚZK, Stabilní katastr 1834."
      },
      {
        "year": "1865",
        "owner": "Kateřina Dvořáková (přistěhování)",
        "event": "Kateřina Dvořáková se po sňatku přistěhovala do Dlouhomilova z rodných Horních Studének.",
        "sourceType": "verified",
        "source": "Sčítání lidu 1921, údaj o přistěhování v kolonce 9."
      },
      {
        "year": "1921",
        "owner": "Kateřina Dvořáková (*1845)",
        "event": "Sčítání lidu 1921: V domě žije ovdovělá hospodyně Kateřina Dvořáková se synem Janem (rolnický pomocník), dcerou Janou a dcerou Anežkou (hluchoněmá).",
        "sourceType": "verified",
        "source": "SOkA Šumperk, fond OSP Zábřeh, Sčítání lidu 1921, obec Dlouhomilov, fascikl 3, arch čp. 3."
      }
    ],
    "census": [
      {
        "year": 1921,
        "censusDate": "16. února 1921",
        "houseNumber": "3",
        "settlement": "Dlouhomilov",
        "source": "SOkA Šumperk, fond Okresní správa politická Zábřeh, Sčítání lidu 1921, obec Dlouhomilov, fascikl 3, arch čp. 3",
        "sourceArchive": "SOkA Šumperk",
        "sourceFond": "Okresní správa politická Zábřeh",
        "sourceScan": "dlouhomilov_1921_cp3_sberny.jpg, dlouhomilov_1921_cp3_obyvatele.jpg",
        "totalInhabitants": 4,
        "familiesCount": 1,
        "inhabitants": [
          {
            "name": "Kateřina Dvořáková",
            "relation": "Majitelka bytu / hlava domácnosti",
            "birthDate": "24. 12. 1845",
            "birthPlace": "Horní Studénky",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "Hospodyně na vlastním domku",
            "literacy": "čte i píše"
          },
          {
            "name": "Jan Dvořák",
            "relation": "Syn",
            "birthDate": "28. 3. 1892",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "Malorolník / pomocník při hospodářství",
            "literacy": "čte i píše"
          },
          {
            "name": "Jana Dvořáková",
            "relation": "Dcera",
            "birthDate": "17. 6. 1883",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "Vedení domácnosti",
            "literacy": "čte i píše"
          },
          {
            "name": "Anežka Dvořáková",
            "relation": "Dcera",
            "birthDate": "4. 4. 1891",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "Domácí služba u matky (hluchoněmá)",
            "literacy": "čte i píše"
          }
        ],
        "livestock": {
          "horses": 0,
          "cattle": 0,
          "pigs": 0,
          "goats": 0
        }
      }
    ],
    "documents": [
      {
        "title": "Sčítací operát 1921 – Sběrný arch domovní čp. 3",
        "type": "census",
        "year": "1921",
        "source": "SOkA Šumperk, OSP Zábřeh, Sčítání 1921, obec Dlouhomilov, arch čp. 3",
        "file": "assets/archives/cp3/dlouhomilov_1921_cp3_sberny.jpg",
        "description": "Titulní sběrný arch pro stavení čp. 3."
      },
      {
        "title": "Sčítací operát 1921 – Bytový arch rodiny Dvořákovy",
        "type": "census",
        "year": "1921",
        "source": "SOkA Šumperk, OSP Zábřeh, Sčítání 1921, obec Dlouhomilov, arch čp. 3",
        "file": "assets/archives/cp3/dlouhomilov_1921_cp3_obyvatele.jpg",
        "description": "Bytový arch rodiny Dvořákovy s výslovným záznamem o hluchoněmosti dcery Anežky."
      }
    ],
    "stories": [
      {
        "title": "Život rodiny Dvořákovy na čp. 3",
        "content": "Pětasedmdesátiletá vdova Kateřina Dvořáková prožila na domku čp. 3 přes půl století od svého příchodu z Horních Studének roku 1865. Spolu se synem Janem obhospodařovala drobné zemědělské pozemky, zatímco dcera Jana pečovala o chod domácnosti. Nejmladší dcera Anežka, ač od narození hluchoněmá, se plnohodnotně zapojovala do chodu rodiny jako pomocná síla u své matky."
      }
    ]
  },
  {
    "id": "cp4",
    "number": "4",
    "settlement": "Dlouhomilov",
    "localName": "Dům se třemi byty čp. 4 (rodiny Košova a Vénosova)",
    "type": "Obytný dům",
    "isHeritage": false,
    "uskpNumber": null,
    "heritageDescription": "Vícebytový venkovský dům v sousedství památkové usedlosti čp. 5.",
    "heritageSource": "Územní plán a stabilní katastr obce Dlouhomilov",
    "location": {
      "lat": 49.9077,
      "lng": 16.9914,
      "cadastralParcel": "st. 4",
      "source": "ČÚZK – k.ú. Dlouhomilov"
    },
    "statusStableCadastre": "Zástavba zachycená na stabilním katastru 1834.",
    "cadastreSource": "Stabilní katastr 1834",
    "description": "Vícebytový venkovský dům čp. 4 v těsném sousedství usedlosti čp. 5. V roce 1921 zde žily 3 rodiny v samostatných bytech (celkem 8 obyvatel). Byt 1 obýval bělič příze u šumperských Oberleithnerů Antonín Koš (*1873 Kolšov) s manželkou Sidonií a synem Josefem, studentem České státní reálky v Šumperku. Byt 2 obývala vdova Františka Vénosová (*1853 Hradečná) s dcerou Marií (*1900), tovární tkadlenou. Byt 3 obýval železniční zřízenec Josef Vénos (*1871), dělník v šumperské lokomotivní topírně, s chotí Barborou a synem Františkem (*1906), zámečnickým učněm u mistra Trojana v Olešné.",
    "timeline": [
      {
        "year": "1834",
        "owner": "Majitel domu čp. 4",
        "event": "Zaneseno v císařských otiscích stabilního katastru.",
        "sourceType": "verified",
        "source": "ÚAZK ČÚZK, Stabilní katastr 1834."
      },
      {
        "year": "1921",
        "owner": "Obyvatelé čp. 4 (Košovi a Vénosovi)",
        "event": "Sčítání lidu 1921: Dům rozdělen na 3 byty (8 obyvatel) – textiláci, železničáři a studenti.",
        "sourceType": "verified",
        "source": "SOkA Šumperk, fond OSP Zábřeh, Sčítání lidu 1921, obec Dlouhomilov, fascikl 3, arch čp. 4."
      }
    ],
    "census": [
      {
        "year": 1921,
        "censusDate": "16. února 1921",
        "houseNumber": "4",
        "settlement": "Dlouhomilov",
        "source": "SOkA Šumperk, fond Okresní správa politická Zábřeh, Sčítání lidu 1921, obec Dlouhomilov, fascikl 3, arch čp. 4",
        "sourceArchive": "SOkA Šumperk",
        "sourceFond": "Okresní správa politická Zábřeh",
        "sourceScan": "dlouhomilov_1921_cp4_obyvatele.jpg, dlouhomilov_1921_cp4_byt2.jpg, dlouhomilov_1921_cp4_byt3.jpg",
        "totalInhabitants": 8,
        "familiesCount": 3,
        "inhabitants": [
          {
            "name": "Antonín Koš",
            "relation": "Majitel bytu (Byt 1)",
            "birthDate": "2. 10. 1873",
            "birthPlace": "Kolšov",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "Bělič příze (Eduard Oberleithner a synové, Šumperk)",
            "literacy": "čte i píše"
          },
          {
            "name": "Sidonie Košová",
            "relation": "Manželka Antonína (Byt 1)",
            "birthDate": "16. 2. 1876",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "Vedení domácnosti",
            "literacy": "čte i píše"
          },
          {
            "name": "Josef Koš",
            "relation": "Syn Antonína (Byt 1)",
            "birthDate": "3. 3. 1911",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "Student České státní reálky v Šumperku",
            "literacy": "čte i píše"
          },
          {
            "name": "Františka Vénosová",
            "relation": "Majitelka bytu (Byt 2)",
            "birthDate": "1. 1. 1853",
            "birthPlace": "Hradečná",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "Vdova v domácnosti",
            "literacy": "čte i píše"
          },
          {
            "name": "Marie Vénosová",
            "relation": "Dcera Františky (Byt 2)",
            "birthDate": "15. 1. 1900",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "Tovární tkadlena (Eduard Oberleithner a synové, Šumperk)",
            "literacy": "čte i píše"
          },
          {
            "name": "Josef Vénos",
            "relation": "Majitel bytu (Byt 3)",
            "birthDate": "1. 2. 1871",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "Dělník v železniční topírně v Šumperku",
            "literacy": "čte i píše"
          },
          {
            "name": "Barbora Vénosová",
            "relation": "Manželka Josefa (Byt 3)",
            "birthDate": "2. 5. 1877",
            "birthPlace": "Kosov",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "Vedení domácnosti",
            "literacy": "čte i píše"
          },
          {
            "name": "František Vénos",
            "relation": "Syn Josefa (Byt 3)",
            "birthDate": "27. 8. 1906",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "Zámečnický učeň (mistr Josef Trojan, Dolní Olešná)",
            "literacy": "čte i píše"
          }
        ],
        "livestock": {
          "horses": 0,
          "cattle": 0,
          "pigs": 0,
          "goats": 0
        }
      }
    ],
    "documents": [
      {
        "title": "Sčítací operát 1921 – Byt č. 1 (Antonín Koš, bělič a student Josef)",
        "type": "census",
        "year": "1921",
        "source": "SOkA Šumperk, OSP Zábřeh, Sčítání 1921, obec Dlouhomilov, arch čp. 4",
        "file": "assets/archives/cp4/dlouhomilov_1921_cp4_obyvatele.jpg",
        "description": "Bytový arch rodiny Košových se studentem šumperské reálky Josefem Košem."
      },
      {
        "title": "Sčítací operát 1921 – Byt č. 2 (Františka Vénosová a tkadlena Marie)",
        "type": "census",
        "year": "1921",
        "source": "SOkA Šumperk, OSP Zábřeh, Sčítání 1921, obec Dlouhomilov, arch čp. 4",
        "file": "assets/archives/cp4/dlouhomilov_1921_cp4_byt2.jpg",
        "description": "Bytový arch vdovy Františky Vénosové a její dcery, tovární tkadleny Marie."
      },
      {
        "title": "Sčítací operát 1921 – Byt č. 3 (železničář Josef Vénos a učeň František)",
        "type": "census",
        "year": "1921",
        "source": "SOkA Šumperk, OSP Zábřeh, Sčítání 1921, obec Dlouhomilov, arch čp. 4",
        "file": "assets/archives/cp4/dlouhomilov_1921_cp4_byt3.jpg",
        "description": "Bytový arch železničáře z topírny v Šumperku Josefa Vénose a zámečnického učně Františka."
      }
    ],
    "stories": [
      {
        "title": "Tři byty na čp. 4: textil, železnice a šumperská reálka",
        "content": "Dům čp. 4 v roce 1921 demonstruje pestrou sociální mobilitu meziválečného Dlouhomilova. Pod jednou střechou zde vedle sebe žil bělič textilu Antonín Koš, jehož syn Josef dojížděl na Českou státní reálku do Šumperka, železničář z šumperské parní topírny Josef Vénos, jeho syn František učící se zámečníkem u mistra Trojana v sousední Olešné, a tovární tkadlena Marie Vénosová."
      }
    ]
  },
  {
    "id": "cp6",
    "number": "6",
    "settlement": "Dlouhomilov",
    "localName": "Venkovská usedlost u Jílků čp. 6",
    "type": "Venkovská usedlost",
    "isHeritage": false,
    "uskpNumber": null,
    "heritageDescription": "Významná venkovská usedlost sousedící s dědičnou rychtou čp. 7.",
    "heritageSource": "Územní plán a stabilní katastr obce Dlouhomilov",
    "location": {
      "lat": 49.9083,
      "lng": 16.9918,
      "cadastralParcel": "st. 8",
      "source": "ČÚZK – k.ú. Dlouhomilov"
    },
    "statusStableCadastre": "Rozsáhlá selská usedlost sousedící s dědičnou rychtou na stabilním katastru 1834.",
    "cadastreSource": "Stabilní katastr 1834",
    "description": "Významná selská usedlost čp. 6 situovaná v horní části obce v bezprostředním sousedství svobodné dědičné rychty čp. 7. V únoru 1921 usedlost spravovala ovdovělá hospodyně Marie Jílková (*1849 Hradečná), která usedlost řídila za pomoci tří stálých námezdních sil žijících přímo v domě (děvečky Filipína Šemberová a Berta Vepřková, čeledín Jaroslav Konečný). Ve druhém samostatném bytě na usedlosti žil stálý hospodářský pomocník Jan Šindler (*1855 Hrabišín) se svou chotí Josefou (*1868 Dlouhomilov) a dvěma syny Otou (*1898) a Janem (*1900).",
    "timeline": [
      {
        "year": "1834",
        "owner": "Sedlák u Jílků (čp. 6)",
        "event": "Zaneseno v císařských otiscích stabilního katastru jako velký hospodářský dvůr (st. 8).",
        "sourceType": "verified",
        "source": "ÚAZK ČÚZK, Stabilní katastr 1834."
      },
      {
        "year": "1867",
        "owner": "Marie Jílková (přistěhování)",
        "event": "Marie Jílková roz. z Hradečné přichází sňatkem do Dlouhomilova na usedlost čp. 6.",
        "sourceType": "verified",
        "source": "Sčítání lidu 1921, údaj o přistěhování v kolonce 9."
      },
      {
        "year": "1921",
        "owner": "Marie Jílková (*1849), ovdovělá selka",
        "event": "Sčítání lidu 1921: Usedlost obývá 8 osob ve 2 bytech. V bytě 1 hospodaří vdova Marie Jílková s čeledí (2 děvečky, 1 čeledín). V bytě 2 žije stálý hospodářský pomocník Jan Šindler s rodinou.",
        "sourceType": "verified",
        "source": "SOkA Šumperk, fond OSP Zábřeh, Sčítání lidu 1921, obec Dlouhomilov, fascikl 3, arch čp. 6."
      }
    ],
    "census": [
      {
        "year": 1921,
        "censusDate": "16. února 1921",
        "houseNumber": "6",
        "settlement": "Dlouhomilov",
        "source": "SOkA Šumperk, fond Okresní správa politická Zábřeh, Sčítání lidu 1921, obec Dlouhomilov, fascikl 3, arch čp. 6",
        "sourceArchive": "SOkA Šumperk",
        "sourceFond": "Okresní správa politická Zábřeh",
        "sourceScan": "dlouhomilov_1921_cp6_obyvatele.jpg, dlouhomilov_1921_cp6_byt2.jpg",
        "totalInhabitants": 8,
        "familiesCount": 2,
        "inhabitants": [
          {
            "name": "Marie Jílková",
            "relation": "Majitelka usedlosti a bytu / hospodyně (Byt 1)",
            "birthDate": "31. 5. 1849",
            "birthPlace": "Hradečná",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "Samostatná zemědělka na usedlosti",
            "literacy": "čte i píše"
          },
          {
            "name": "Filipína Šemberová",
            "relation": "Služebná / děvečka (Byt 1)",
            "birthDate": "1. 5. 1893",
            "birthPlace": "Horní Heřmanice",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "Služba při zemědělství",
            "literacy": "čte i píše"
          },
          {
            "name": "Berta Vepřková",
            "relation": "Služebná / děvečka (Byt 1)",
            "birthDate": "20. 10. 1897",
            "birthPlace": "Plinkout / Sukolom",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "Služba při zemědělství",
            "literacy": "čte i píše"
          },
          {
            "name": "Jaroslav Konečný",
            "relation": "Čeledín (Byt 1)",
            "birthDate": "24. 4. 1886",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "Čeledín při zemědělství",
            "literacy": "čte i píše"
          },
          {
            "name": "Jan Šindler",
            "relation": "Majitel bytu / zemědělský dělník (Byt 2)",
            "birthDate": "25. 9. 1855",
            "birthPlace": "Hrabišín",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "Pomocník při zemědělství u Marie Jílkové",
            "literacy": "čte i píše"
          },
          {
            "name": "Josefa Šindlerová",
            "relation": "Manželka Jana (Byt 2)",
            "birthDate": "13. 11. 1868",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "Vedení domácnosti",
            "literacy": "čte i píše"
          },
          {
            "name": "Ota Šindler",
            "relation": "Syn Jana (Byt 2)",
            "birthDate": "15. 3. 1898",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "Pomocník při hospodářství",
            "literacy": "čte i píše"
          },
          {
            "name": "Jan Šindler",
            "relation": "Syn Jana (Byt 2)",
            "birthDate": "18. 6. 1900",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "Pomocník při hospodářství",
            "literacy": "čte i píše"
          }
        ],
        "livestock": {
          "horses": 0,
          "cattle": 0,
          "pigs": 0,
          "goats": 0
        }
      }
    ],
    "documents": [
      {
        "title": "Sčítací operát 1921 – Byt č. 1 (Marie Jílková a čeleď)",
        "type": "census",
        "year": "1921",
        "source": "SOkA Šumperk, OSP Zábřeh, Sčítání 1921, obec Dlouhomilov, arch čp. 6",
        "file": "assets/archives/cp6/dlouhomilov_1921_cp6_obyvatele.jpg",
        "description": "Bytový arch pro selský dvůr Marie Jílkové s děvečkami Filipínou Šemberovou a Bertou Vepřkovou a čeledínem Jaroslavem Konečným."
      },
      {
        "title": "Sčítací operát 1921 – Byt č. 2 (pomocník Jan Šindler s rodinou)",
        "type": "census",
        "year": "1921",
        "source": "SOkA Šumperk, OSP Zábřeh, Sčítání 1921, obec Dlouhomilov, arch čp. 6",
        "file": "assets/archives/cp6/dlouhomilov_1921_cp6_byt2.jpg",
        "description": "Bytový arch pro druhý byt zachycující Jana Šindlera, jeho ženu Josefu a syny Otu a Jana."
      }
    ],
    "stories": [
      {
        "title": "Velký grunt u Jílků v sousedství rychty",
        "content": "Usedlost čp. 6 představovala typický příklad velkého selského gruntu v horní části Dlouhomilova. Hospodyně Marie Jílková, která přišla do vsi roku 1867 z Hradečné, řídila hospodářství jako samostatná zemědělka. Vedle stálé ubytované čeledi (dvě děvečky a čeledín) žila přímo na usedlosti ve druhém bytě čtyřčlenná rodina stálého hospodářského pomocníka Jana Šindlera, jehož dospělí synové Ota a Jan rovněž pomáhali v zemědělském provozu gruntu."
      }
    ]
  },
  {
    "id": "medelske_cp2",
    "number": "2",
    "settlement": "Medelské",
    "localName": "Domkářské stavení Medelské čp. 2 (rodiny Nejedlých a Minářových)",
    "type": "Domkářské stavení",
    "isHeritage": false,
    "uskpNumber": null,
    "heritageDescription": "Tradiční venkovské stavení v historické osadě Medelské.",
    "heritageSource": "Územní plán a stabilní katastr obce Dlouhomilov",
    "location": {
      "lat": 49.9018,
      "lng": 16.9942,
      "cadastralParcel": "st. 2",
      "source": "ČÚZK – k.ú. Dlouhomilov"
    },
    "statusStableCadastre": "Domkářské stavení v osadě Medelské (Dreihofen) zachycené na stabilním katastru 1834.",
    "cadastreSource": "Stabilní katastr 1834",
    "description": "Přízemní domkářské stavení v osadě Medelské čp. 2. Při sčítání lidu v únoru 1921 zde žily dvě spřízněné rodiny v samostatných bytech. V bytě č. 1 žil Alois Nejedlý (*1869), běličský dělník v bělidle Eduarda Oberleithnera v Šumperku, se svou manželkou Ludmilou a vyvdanou dcerou Marií Kupkovou. V bytě č. 2 žil jeho zeť Adolf Minář (*1892), stavební a silniční dělník u firmy F. Klement (dříve pěší voják), se svou manželkou Ludmilou roz. Nejedlou (*1895), která pracovala jako přadlena rovněž u Eduarda Oberleithnera, a jejich roční dcerou Ludmilou (*1920). V roce 1926 se zde narodila dcera Marie Minářová.",
    "timeline": [
      {
        "year": "1834",
        "owner": "Osada Medelské",
        "event": "Zástavba osady Medelské (Dreihofen) vyměřena v indikační skice stabilního katastru obce Dlouhomilov.",
        "sourceType": "verified",
        "source": "ÚAZK ČÚZK, Stabilní katastr 1834, k.ú. Dlouhomilov."
      },
      {
        "year": "1921",
        "owner": "Alois Nejedlý a Adolf Minář",
        "event": "Sčítání lidu 1921: Stavení Medelské čp. 2 čítá 2 samostatné byty a 6 obyvatel. V bytě 1 žije běličský dělník Alois Nejedlý (*1869) s manželkou Ludmilou a dcerou Marií Kupkovou. V bytě 2 žije silniční dělník Adolf Minář (*1892) s manželkou Ludmilou roz. Nejedlou (přadlena u Oberleithnera) a dcerou Ludmilou (*1920).",
        "sourceType": "verified",
        "source": "SOkA Šumperk, fond OSP Zábřeh, Sčítání lidu 1921, obec Dlouhomilov, osada Medelské, přejímací č. 2/554, fascikl 3, arch čp. 2."
      },
      {
        "year": "1948",
        "owner": "Rodina Adolfa Mináře",
        "event": "Matriční zápis sňatku: Marie Minářová (* 7. 1. 1926 Medelské čp. 2), dcera Adolfa Mináře, v té době mistra v textilní továrně, a Ludmily roz. Nejedlé.",
        "sourceType": "verified",
        "source": "ZAO Opava, Sbírka matrik, farnost Dlouhomilov, sign. Zá II 10, snímek 111."
      }
    ],
    "census": [
      {
        "year": 1921,
        "censusDate": "16. února 1921",
        "houseNumber": "2",
        "settlement": "Medelské",
        "source": "SOkA Šumperk, fond Okresní správa politická Zábřeh, Sčítání lidu 1921, obec Dlouhomilov, osada Medelské, fascikl 3, arch čp. 2",
        "sourceArchive": "SOkA Šumperk",
        "sourceFond": "Okresní správa politická Zábřeh",
        "sourceScan": "medelske_cp2_1921_byt1.jpg, medelske_cp2_1921_obyvatele.jpg",
        "totalInhabitants": 6,
        "familiesCount": 2,
        "inhabitants": [
          {
            "name": "Alois Nejedlý",
            "relation": "Majitel bytu / hlava rodiny (Byt 1)",
            "birthDate": "20. 11. 1869",
            "birthPlace": "Svébohov",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "Běličský dělník na bělidle (Eduard Oberleithner a synové, Šumperk)",
            "literacy": "čte i píše"
          },
          {
            "name": "Ludmila Nejedlá",
            "relation": "Manželka Aloise (Byt 1)",
            "birthDate": "18. 3. 1872",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "Vedení domácnosti",
            "literacy": "čte i píše"
          },
          {
            "name": "Marie Kupková",
            "relation": "Dcera Aloise (Byt 1)",
            "birthDate": "7. 2. 1897",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "Vdaná dcera v domácnosti",
            "literacy": "čte i píše"
          },
          {
            "name": "Adolf Minář",
            "relation": "Majitel bytu / zeť (Byt 2)",
            "birthDate": "15. 12. 1892",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "Stavební a silniční dělník (F. Klement, dříve pěší voják)",
            "literacy": "čte i píše"
          },
          {
            "name": "Ludmila Minářová",
            "relation": "Manželka Adolfa, roz. Nejedlá (Byt 2)",
            "birthDate": "7. 5. 1895",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "Přádka textilu (Eduard Oberleithner a synové, Šumperk)",
            "literacy": "čte i píše"
          },
          {
            "name": "Ludmila Minářová",
            "relation": "Dcera Adolfa a Ludmily (Byt 2)",
            "birthDate": "5. 3. 1920",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "Dítě v rodině",
            "literacy": "předškolní dítě"
          }
        ],
        "livestock": {
          "horses": 0,
          "cattle": 0,
          "pigs": 0,
          "goats": 0
        }
      }
    ],
    "documents": [
      {
        "title": "Sčítací operát 1921 – Byt č. 1 (Alois Nejedlý, bělič textilu)",
        "type": "census",
        "year": "1921",
        "source": "SOkA Šumperk, OSP Zábřeh, Sčítání 1921, obec Dlouhomilov, osada Medelské, arch čp. 2",
        "file": "assets/archives/medelske_cp2/medelske_cp2_1921_byt1.jpg",
        "description": "Bytový arch č. 1 zachycující běličského dělníka firmy Eduard Oberleithner Aloise Nejedlého s rodinou."
      },
      {
        "title": "Sčítací operát 1921 – Byt č. 2 (Adolf Minář, silniční dělník a přadlena Ludmila)",
        "type": "census",
        "year": "1921",
        "source": "SOkA Šumperk, OSP Zábřeh, Sčítání 1921, obec Dlouhomilov, osada Medelské, arch čp. 2",
        "file": "assets/archives/medelske_cp2/medelske_cp2_1921_obyvatele.jpg",
        "description": "Bytový arch č. 2 stvrzující rodinu Adolfa Mináře, jeho manželky Ludmily (přadleny u fy Oberleithner) a dcery Ludmily."
      }
    ],
    "stories": [
      {
        "title": "Běliči a přadleny z Medelského u šumperských Oberleithnerů",
        "content": "Stavení čp. 2 v osadě Medelské názorně dokládá provázanost života v podhůří s textilním průmyslem v Šumperku po první světové válce. Otec Alois Nejedlý pracoval v bělidle příze velké firmy Eduard Oberleithner a synové, zatímco jeho dcera Ludmila v téže továrně pracovala jako přadlena. Její manžel Adolf Minář, navrátilec z front první světové války, pracoval jako dělník na silničních stavbách a později dosáhl pozice textilního mistra."
      }
    ]
  },
  {
    "id": "cp8",
    "number": "8",
    "settlement": "Dlouhomilov",
    "localName": "Venkovská usedlost u Braných čp. 8",
    "type": "Venkovská usedlost",
    "isHeritage": false,
    "uskpNumber": null,
    "heritageDescription": "Tradiční venkovská usedlost v sousedství bývalé rychty čp. 7.",
    "heritageSource": "Územní plán a stabilní katastr obce Dlouhomilov",
    "location": {
      "lat": 49.9085,
      "lng": 16.9922,
      "cadastralParcel": "st. 10",
      "source": "ČÚZK – k.ú. Dlouhomilov"
    },
    "statusStableCadastre": "Selská usedlost v horní části obce zachycená na stabilním katastru 1834.",
    "cadastreSource": "Stabilní katastr 1834",
    "description": "Tradiční selská usedlost čp. 8 situovaná v horní části obce v těsném sousedství bývalé rychty čp. 7. V únoru 1921 v usedlosti existovaly 3 samostatné byty s celkem 14 obyvateli: V bytě č. 1 hospodařil samostatný rolník Isidor Braný (*1860) se svou chotí Sidonií (*1862) a dvěma mladými námezdními silami (čeledín Jaroslav Minář a služka Anna Blažková). V bytě č. 2 žila pětičlenná rodina Petra Dvořáka (*1886), továrního bělice textilu u firmy Eduard Oberleithner v Šumperku, jeho manželky Josefy (*1886 Mladoňov, před válkou tovární tkadleny), dětí Petra (*1909) a Marie (*1911) a staré ovdovělé matky Františky Dvořákové (*1856). V bytě č. 3 hospodařil rolník Isidor Krestin (Krestýn, *1887) s manželkou Josefou (*1889), synem Isidorem (*1915), bratrem Josefem Krestinem (*1896, čeledín) a služebnou Marií Blažkovou (*1901 Cotkytle).",
    "timeline": [
      {
        "year": "1834",
        "owner": "Sedlák čp. 8",
        "event": "Zaneseno v císařských otiscích stabilního katastru obce Dlouhomilov.",
        "sourceType": "verified",
        "source": "ÚAZK ČÚZK, Stabilní katastr 1834."
      },
      {
        "year": "1921",
        "owner": "Isidor Braný (*1860) & Isidor Krestin (*1887)",
        "event": "Sčítání lidu 1921: Usedlost čítá 3 byty a 14 obyvatel. V bytě 1 žije rolník Isidor Braný s chotí a čeledí, v bytě 2 rodina továrního bělice textilu Petra Dvořáka (fy Eduard Oberleithner a synové) s dětmi a ovdovělou matkou, v bytě 3 hospodaří rolník Isidor Krestin s rodinou, bratrem Josefem a služebnou Marií Blažkovou.",
        "sourceType": "verified",
        "source": "SOkA Šumperk, fond OSP Zábřeh, Sčítání lidu 1921, obec Dlouhomilov, fascikl 3, arch čp. 8.",
        "scanFile": "assets/archives/cp8/dlouhomilov_1921_cp8_obyvatele.jpg, assets/archives/cp8/dlouhomilov_1921_cp8_byt2.jpg, assets/archives/cp8/dlouhomilov_1921_cp8_byt3.jpg"
      }
    ],
    "census": [
      {
        "year": 1921,
        "censusDate": "16. února 1921",
        "houseNumber": "8",
        "settlement": "Dlouhomilov",
        "source": "SOkA Šumperk, fond Okresní správa politická Zábřeh, Sčítání lidu 1921, obec Dlouhomilov, fascikl 3, arch čp. 8",
        "sourceArchive": "SOkA Šumperk",
        "sourceFond": "Okresní správa politická Zábřeh",
        "sourceScan": "dlouhomilov_1921_cp8_obyvatele.jpg, dlouhomilov_1921_cp8_byt2.jpg, dlouhomilov_1921_cp8_byt3.jpg",
        "totalInhabitants": 14,
        "familiesCount": 3,
        "inhabitants": [
          {
            "name": "Isidor Braný",
            "relation": "Majitel usedlosti a bytu / hospodář (Byt 1)",
            "birthDate": "16. 9. 1860",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "Rolník na vlastní usedlosti",
            "literacy": "čte i píše"
          },
          {
            "name": "Sidonie Braná",
            "relation": "Manželka (Byt 1)",
            "birthDate": "10. 6. 1862",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "Vedení domácnosti",
            "literacy": "čte i píše"
          },
          {
            "name": "Jaroslav Minář",
            "relation": "Služebník / čeledín (Byt 1)",
            "birthDate": "8. 6. 1901",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "Dělník při polním hospodářství",
            "literacy": "čte i píše"
          },
          {
            "name": "Anna Blažková",
            "relation": "Služebnice / děvečka (Byt 1)",
            "birthDate": "12. 6. 1901",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "Služba při polním hospodářství",
            "literacy": "čte i píše"
          },
          {
            "name": "Petr Dvořák",
            "relation": "Majitel bytu / hlava rodiny (Byt 2)",
            "birthDate": "12. 5. 1886",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "Běličství – tovární dělník (Eduard Oberleithner a synové, Šumperk)",
            "literacy": "čte i píše"
          },
          {
            "name": "Josefa Dvořáková",
            "relation": "Manželka Petra (Byt 2)",
            "birthDate": "24. 8. 1886",
            "birthPlace": "Mladoňov",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "Vedení domácnosti (v r. 1914 tovární tkadlena)",
            "literacy": "čte i píše"
          },
          {
            "name": "Petr Dvořák",
            "relation": "Syn Petra (Byt 2)",
            "birthDate": "18. 1. 1909",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "Dítě / žák školy",
            "literacy": "čte i píše"
          },
          {
            "name": "Marie Dvořáková",
            "relation": "Dcera Petra (Byt 2)",
            "birthDate": "2. 5. 1911",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "Dítě / žákyně školy",
            "literacy": "čte i píše"
          },
          {
            "name": "Františka Dvořáková",
            "relation": "Matka Petra (Byt 2)",
            "birthDate": "11. 7. 1856",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "Ovdovělá výměnkářka v domácnosti",
            "literacy": "nečte"
          },
          {
            "name": "Isidor Krestin",
            "relation": "Majitel bytu / rolník (Byt 3)",
            "birthDate": "2. 11. 1887",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "Rolník na vlastní usedlosti",
            "literacy": "čte i píše"
          },
          {
            "name": "Josefa Krestinová",
            "relation": "Manželka Isidora (Byt 3)",
            "birthDate": "19. 3. 1889",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "Vedení domácnosti",
            "literacy": "čte i píše"
          },
          {
            "name": "Isidor Krestin",
            "relation": "Syn Isidora (Byt 3)",
            "birthDate": "5. 1. 1915",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "Dítě / při otci",
            "literacy": "-"
          },
          {
            "name": "Josef Krestin",
            "relation": "Bratr Isidora / čeledín (Byt 3)",
            "birthDate": "20. 11. 1896",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "Čeledín při polním hospodářství",
            "literacy": "čte i píše"
          },
          {
            "name": "Marie Blažková",
            "relation": "Služebná (Byt 3)",
            "birthDate": "18. 9. 1901",
            "birthPlace": "Cotkytle",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "Služka při polním hospodářství",
            "literacy": "čte i píše"
          }
        ],
        "livestock": {
          "horses": 0,
          "cattle": 0,
          "pigs": 0,
          "goats": 0
        }
      }
    ],
    "documents": [
      {
        "title": "Sčítací operát 1921 – Bytový arch usedlosti čp. 8 (Isidor Braný)",
        "type": "census",
        "year": "1921",
        "source": "SOkA Šumperk, OSP Zábřeh, Sčítání 1921, obec Dlouhomilov, arch čp. 8",
        "file": "assets/archives/cp8/dlouhomilov_1921_cp8_obyvatele.jpg",
        "description": "Bytový arch rodiny rolníka Isidora Braného se čeledí Jaroslavem Minářem a Annou Blažkovou (běžná čísla 37–40)."
      },
      {
        "title": "Sčítací operát 1921 – Bytový arch 2 (Petr Dvořák, tovární bělič textilu)",
        "type": "census",
        "year": "1921",
        "source": "SOkA Šumperk, OSP Zábřeh, Sčítání 1921, obec Dlouhomilov, arch čp. 8",
        "file": "assets/archives/cp8/dlouhomilov_1921_cp8_byt2.jpg",
        "description": "Bytový arch č. 2 stvrzující rodinu textilního dělníka Petra Dvořáka u firmy Eduard Oberleithner a synové v Šumperku (běžná čísla 41–45)."
      },
      {
        "title": "Sčítací operát 1921 – Bytový arch 3 (Isidor Krestin, rolník na usedlosti)",
        "type": "census",
        "year": "1921",
        "source": "SOkA Šumperk, OSP Zábřeh, Sčítání 1921, obec Dlouhomilov, arch čp. 8",
        "file": "assets/archives/cp8/dlouhomilov_1921_cp8_byt3.jpg",
        "description": "Bytový arch č. 3 rodiny rolníka Isidora Krestina (Krestýna) s chotí Josefou, synem Isidorem, bratrem čeledínem Josefem Krestinem a služebnou Marií Blažkovou z Cotkytle (běžná čísla 46–50)."
      }
    ],
    "stories": [
      {
        "title": "Selský život na usedlosti čp. 8 u Braných",
        "content": "Usedlost čp. 8 v horní části Dlouhomilova bezprostředně navazovala na dědičnou rychtu. V roce 1921 zde žil a samostatně hospodařil rolník Isidor Braný (*1860) se svou manželkou Sidonií (*1862). Oba manželé i jejich čeleď (devatenáctiletý Jaroslav Minář a Anna Blažková) byli rodáky přímo z Dlouhomilova a všichni byli plně gramotní."
      },
      {
        "title": "Dvě tváře meziválečného venkova: sedlák a textilák pod jednou střechou",
        "content": "Usedlost čp. 8 v roce 1921 skvěle vystihuje socio-ekonomickou strukturu Dlouhomilova. Zatímco v prvním bytě žil klasický hospodář Isidor Braný se služebnictvem, ve druhém bytě žila rodina Petra Dvořáka, který docházel za prací do šumperské textilky firmy Eduard Oberleithner a synové jako bělič příze. Jeho choť Josefa před válkou pracovala ve stejné továrně jako tkadlena."
      },
      {
        "title": "Tři byty v usedlosti čp. 8 a rod Krestýnů",
        "content": "Operát usedlosti čp. 8 z roku 1921 v plném rozsahu odkrývá rozsáhlé stavení s celkem 14 obyvateli ve třech bytech. Vedle starého hospodáře Isidora Braného a rodiny továrního textiláka Petra Dvořáka zde ve třetím bytě žila a hospodařila rodina mladého rolníka Isidora Krestina (*1887). Vedení hospodářství se opíralo o rodinnou i námezdní pracovní sílu – čeledínem byl hospodářův svobodný bratr Josef Krestin (*1896) a služebnou dvacetiletá Marie Blažková (*1901) původem z Cotkytle."
      }
    ]
  },
  {
    "id": "cp9",
    "number": "9",
    "settlement": "Dlouhomilov",
    "localName": "Domkářské stavení čp. 9 (u Sadilů a Soklů)",
    "type": "Domkářské stavení",
    "isHeritage": false,
    "uskpNumber": null,
    "heritageDescription": "Tradiční domkářské stavení v horní části obce situované v blízkosti usedlostí čp. 8 a čp. 10.",
    "heritageSource": "Územní plán a stabilní katastr obce Dlouhomilov",
    "location": {
      "lat": 49.9083,
      "lng": 16.9920,
      "cadastralParcel": "st. 12",
      "source": "ČÚZK – k.ú. Dlouhomilov"
    },
    "statusStableCadastre": "Domkářská zástavba v horní části obce zachycená v stabilním katastru 1834.",
    "cadastreSource": "Stabilní katastr 1834",
    "description": "Tradiční domkářské stavení čp. 9 v horní části Dlouhomilova. V únoru 1921 dům čítal 2 samostatné byty se 3 obyvatelkami: V bytě č. 1 žila dvoučlenná rodina vdovy Marie Sadilové (*1878) s dvacetiletou dcerou Marií (*1900). Život obou žen byl úzce svázán se šumperským textilním průmyslem: matka Marie pracovala jako dělnice (čistička příze) v bělidle firmy Eduard Oberleithner a synové v Šumperku, zatímco dcera Marie dojížděla za prací do šumperské textilní továrny firmy Primavesi jako přadlena a nitařka. V bytě č. 2 (výměnku stavení) žila osaměle 67letá vdova Marie Soklová (*1853 Zborov), pozůstalá po dřívějším dlouhomilovském domkáři Antonínu Soklovi.",
    "timeline": [
      {
        "year": "1834",
        "owner": "Domkář čp. 9",
        "event": "Zaneseno v císařských otiscích stabilního katastru obce Dlouhomilov.",
        "sourceType": "verified",
        "source": "ÚAZK ČÚZK, Stabilní katastr 1834."
      },
      {
        "year": "1921",
        "owner": "Marie Sadilová (*1878) & Marie Soklová (*1853)",
        "event": "Sčítání lidu 1921: Dům čítá 2 byty a 3 obyvatelky. V bytě 1 žije ovdovělá textilní dělnice Marie Sadilová s dcerou Marií (*1900, přadlena u fy Primavesi), v bytě 2 (výměnku) žije 67letá vdova Marie Soklová (*1853 Zborov). Celkem 3 obyvatelky.",
        "sourceType": "verified",
        "source": "SOkA Šumperk, fond OSP Zábřeh, Sčítání lidu 1921, obec Dlouhomilov, fascikl 3, arch čp. 9.",
        "scanFile": "assets/archives/cp9/dlouhomilov_1921_cp9_obyvatele.jpg, assets/archives/cp9/dlouhomilov_1921_cp9_byt2.jpg"
      }
    ],
    "census": [
      {
        "year": 1921,
        "censusDate": "16. února 1921",
        "houseNumber": "9",
        "settlement": "Dlouhomilov",
        "source": "SOkA Šumperk, fond Okresní správa politická Zábřeh, Sčítání lidu 1921, obec Dlouhomilov, fascikl 3, arch čp. 9",
        "sourceArchive": "SOkA Šumperk",
        "sourceFond": "Okresní správa politická Zábřeh",
        "sourceScan": "dlouhomilov_1921_cp9_obyvatele.jpg, dlouhomilov_1921_cp9_byt2.jpg",
        "totalInhabitants": 3,
        "familiesCount": 2,
        "inhabitants": [
          {
            "name": "Marie Sadilová",
            "relation": "Majitelka bytu / hlava rodiny (Byt 1)",
            "birthDate": "2. 6. 1878",
            "birthPlace": "Svébohov",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "Běličství – čistička příze v továrně (Eduard Oberleithner a synové, bělidlo Šumperk)",
            "literacy": "čte i píše"
          },
          {
            "name": "Marie Sadilová",
            "relation": "Dcera (Byt 1)",
            "birthDate": "23. 12. 1900",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "Textilní dělnice – přadlena a nitařka (firma Primavesi, Šumperk)",
            "literacy": "čte i píše"
          },
          {
            "name": "Marie Soklová",
            "relation": "Majitelka bytu / výměnkářka (Byt 2)",
            "birthDate": "22. 11. 1853",
            "birthPlace": "Zborov",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "Výměnkářka – vedení vlastní domácnosti (vdova po domkáři Antonínu Soklovi)",
            "literacy": "čte i píše"
          }
        ],
        "livestock": {
          "horses": 0,
          "cattle": 0,
          "pigs": 0,
          "goats": 0
        }
      }
    ],
    "documents": [
      {
        "title": "Sčítací operát 1921 – Bytový arch 1 (Marie Sadilová)",
        "type": "census",
        "year": "1921",
        "source": "SOkA Šumperk, OSP Zábřeh, Sčítání 1921, obec Dlouhomilov, arch čp. 9",
        "file": "assets/archives/cp9/dlouhomilov_1921_cp9_obyvatele.jpg",
        "description": "Originální bytový arch č. 1 domkářského stavení čp. 9 rodiny vdovy Marie Sadilové a její dcery Marie (běžná čísla 51–52)."
      },
      {
        "title": "Sčítací operát 1921 – Bytový arch 2 (Marie Soklová, výměnkářka)",
        "type": "census",
        "year": "1921",
        "source": "SOkA Šumperk, OSP Zábřeh, Sčítání 1921, obec Dlouhomilov, arch čp. 9",
        "file": "assets/archives/cp9/dlouhomilov_1921_cp9_byt2.jpg",
        "description": "Originální bytový arch č. 2 domkářského stavení čp. 9 zachycující 67letou vdovu Marii Soklovou na výměnku (běžné číslo 53)."
      }
    ],
    "stories": [
      {
        "title": "Ženy v textilním průmyslu meziválečného Šumperska",
        "content": "Stavení čp. 9 v roce 1921 představuje typickou dělnickou domácnost podhorské vsi. Ovdovělá Marie Sadilová (*1878) pocházející ze Svébohova zde žila se svou dvacetiletou svobodnou dcerou Marií (*1900). Obě ženy si vydělávaly na živobytí těžkou prací v šumperských textilních podnicích – matka docházela do bělidla příze rodiny Oberleithnerů, zatímco dcera pracovala jako nitařka a přadlena u známé šumperské firmy Primavesi. Obě pracovaly ve stejném oboru již před první světovou válkou."
      },
      {
        "title": "Vdovský výměnek Marie Soklové a kontinuita domku čp. 9",
        "content": "Bytový arch č. 2 domku čp. 9 doplňuje důležitou kapitolu o historii stavení. Zdejší obyvatelka Marie Soklová (*1853 Zborov) byla vdovou po dřívějším domkáři Antonínu Soklovi. V roce 1921 užívala samostatný byt na výměnku, kde žila až do své smrti v říjnu 1938, kdy zemřela ve věku téměř 85 let."
      }
    ]
  },
  {
    "id": "cp11",
    "number": "11",
    "settlement": "Dlouhomilov",
    "localName": "Domkářské stavení čp. 11 (u Konečných, Matějíčků a Soklů)",
    "type": "Domkářské stavení",
    "isHeritage": false,
    "uskpNumber": null,
    "heritageDescription": "Tradiční domkářské stavení v horní části obce situované mezi usedlostí čp. 10 a areálem staré školy čp. 12.",
    "heritageSource": "Územní plán a stabilní katastr obce Dlouhomilov",
    "location": {
      "lat": 49.9098,
      "lng": 16.9908,
      "cadastralParcel": "st. 16",
      "source": "ČÚZK – k.ú. Dlouhomilov"
    },
    "statusStableCadastre": "Domkářská zástavba zachycená v stabilním katastru 1834.",
    "cadastreSource": "Stabilní katastr 1834",
    "description": "Tradiční domkářské stavení čp. 11 v horní části Dlouhomilova na cestě ke staré škole. V únoru 1921 byl dům rozdělen na 2 samostatné byty s celkem 7 obyvateli. V bytě č. 1 žila pětičlenná rodina Aloise Konečného (*1882 v Chromči), textilního běliče u šumperské firmy Eduard Oberleithner a synové, jeho manželky Filomeny rozené Matějíčkové (*1884), dětí Jarmily a Bořivoje a ovdovělé tchyně Marie Matějíkové (*1850). V bytě č. 2 žila čtyřicetiletá ovdovělá podnájemnice Marie Soklová (*1880 Brníčko), hospodařící na najatém poli, se svou dvanáctiletou dcerou Zdeňkou (*1908). Všech 7 obyvatel domu bylo plně gramotných.",
    "timeline": [
      {
        "year": "1834",
        "owner": "Domkář čp. 11",
        "event": "Zaneseno v císařských otiscích stabilního katastru obce Dlouhomilov.",
        "sourceType": "verified",
        "source": "ÚAZK ČÚZK, Stabilní katastr 1834."
      },
      {
        "year": "1921",
        "owner": "Alois Konečný (*1882)",
        "event": "Sčítání lidu 1921: Dům čítá 2 byty a 7 obyvatel (běžná čísla obce 67–73). Byt 1 obývá textilní bělič Alois Konečný s rodinou a tchyní Marií Matějíkovou (5 osob), byt 2 obývá vdova Marie Soklová s dcerou Zdeňkou hospodařící na najatém poli (2 osoby). Všech 7 obyvatel stavení je plně gramotných.",
        "sourceType": "verified",
        "source": "SOkA Šumperk, fond OSP Zábřeh, Sčítání lidu 1921, obec Dlouhomilov, fascikl 3, arch čp. 11.",
        "scanFile": "assets/archives/cp11/dlouhomilov_1921_cp11_obyvatele.jpg, assets/archives/cp11/dlouhomilov_1921_cp11_byt2.jpg"
      }
    ],
    "census": [
      {
        "year": 1921,
        "censusDate": "16. února 1921",
        "houseNumber": "11",
        "settlement": "Dlouhomilov",
        "source": "SOkA Šumperk, fond Okresní správa politická Zábřeh, Sčítání lidu 1921, obec Dlouhomilov, fascikl 3, arch čp. 11",
        "sourceArchive": "SOkA Šumperk",
        "sourceFond": "Okresní správa politická Zábřeh",
        "sourceScan": "dlouhomilov_1921_cp11_obyvatele.jpg, dlouhomilov_1921_cp11_byt2.jpg",
        "totalInhabitants": 7,
        "familiesCount": 2,
        "inhabitants": [
          {
            "name": "Alois Konečný",
            "relation": "Majitel bytu / hlava rodiny (Byt 1)",
            "birthDate": "2. 8. 1882",
            "birthPlace": "Chromeč",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "Běličství – bělič v továrně (Eduard Oberleithner a synové, Šumperk)",
            "literacy": "čte i píše"
          },
          {
            "name": "Filomena Konečná",
            "relation": "Manželka (Byt 1)",
            "birthDate": "2. 4. 1884",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "Vedení domácnosti",
            "literacy": "čte i píše"
          },
          {
            "name": "Jarmila Konečná",
            "relation": "Dcera (Byt 1)",
            "birthDate": "21. 6. 1910",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "Žákyně",
            "literacy": "čte i píše"
          },
          {
            "name": "Bořivoj Konečný",
            "relation": "Syn (Byt 1)",
            "birthDate": "21. 9. 1913",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "Žák",
            "literacy": "čte i píše"
          },
          {
            "name": "Marie Matějíková",
            "relation": "Tchyně / v domácnosti (Byt 1)",
            "birthDate": "16. 9. 1850",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "V domácnosti (vdova po Karlu Matějíčkovi)",
            "literacy": "čte i píše"
          },
          {
            "name": "Marie Soklová",
            "relation": "Hlava domácnosti / podnájemnice (Byt 2)",
            "birthDate": "28. 3. 1880",
            "birthPlace": "Brníčko",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "Zemědělství – vede domácnost na poli najatém",
            "literacy": "čte i píše"
          },
          {
            "name": "Zdeňka Soklová",
            "relation": "Dcera (Byt 2)",
            "birthDate": "2. 8. 1908",
            "birthPlace": "Dlouhomilov",
            "religion": "římskokatolické",
            "nationality": "československá",
            "occupation": "Žákyně",
            "literacy": "čte i píše"
          }
        ],
        "livestock": {
          "horses": 0,
          "cattle": 0,
          "pigs": 0,
          "goats": 0
        }
      }
    ],
    "documents": [
      {
        "title": "Sčítací operát 1921 – Bytový arch 1 (Alois Konečný)",
        "type": "census",
        "year": "1921",
        "source": "SOkA Šumperk, OSP Zábřeh, Sčítání 1921, obec Dlouhomilov, arch čp. 11",
        "file": "assets/archives/cp11/dlouhomilov_1921_cp11_obyvatele.jpg",
        "description": "Originální bytový arch č. 1 domkářského stavení čp. 11 pětičlenné rodiny běliče Aloise Konečného a Marie Matějíkové (běžná čísla 67–71)."
      },
      {
        "title": "Sčítací operát 1921 – Bytový arch 2 (Marie Soklová)",
        "type": "census",
        "year": "1921",
        "source": "SOkA Šumperk, OSP Zábřeh, Sčítání 1921, obec Dlouhomilov, arch čp. 11",
        "file": "assets/archives/cp11/dlouhomilov_1921_cp11_byt2.jpg",
        "description": "Originální bytový arch č. 2 stavení čp. 11 dvoučlenné podnájemnické rodiny ovdovělé Marie Soklové hospodařící na najatém poli a její dcery Zdeňky (běžná čísla 72–73)."
      }
    ],
    "stories": [
      {
        "title": "Bělič Alois Konečný a práce pro textilku Oberleithner",
        "content": "Alois Konečný (*1882 v Chromči) představoval v Dlouhomilově typického představitele průmyslového dělnictva meziválečné éry. Do obce se přiženil sňatkem s dcerou místního rodu Matějíčků Filomenou (*1884). Pracoval v nedalekém Šumperku jako bělič textilu v proslulém podniku Eduard Oberleithner a synové, kde v téže době pracovali i další sousedé z Dlouhomilova (např. Petr Dvořák z čp. 8 či Marie Sadilová z čp. 9)."
      },
      {
        "title": "Podnájemnice Marie Soklová a hospodaření na najatém poli",
        "content": "Druhý byt stavení čp. 11 obývala čtyřicetiletá vdova Marie Soklová (*1880 v sousedním Brníčku), která se do Dlouhomilova přistěhovala v březnu 1900. Spolu se svou dcerou Zdeňkou (*1908) si zajišťovala obživu drobným hospodařením na najatém poli (v rubrice podniku výslovně uvedeno 'na poli najatém')."
      },
      {
        "title": "Vysoká míra gramotnosti v sousedství staré školy",
        "content": "Pozoruhodností sčítacího operátu domu čp. 11 z roku 1921 je stoprocentní gramotnost všech 7 obyvatel obou bytů. Čtení i psaní ovládaly obě hlavy domácností, děti školního věku (Jarmila, Bořivoj i Zdeňka) a dokonce i nejstarší členka stavení, jednasedmdesátiletá Marie Matějíková (*1850). Blízkost obecné školy (čp. 12) tak v této části obce nacházela přímý odraz v rodinné vzdělanosti."
      }
    ]
  }
];

if (typeof module !== 'undefined') {
  module.exports = { housesData };
}
