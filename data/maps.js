/**
 * Databáze historických map a leteckého snímkování pro obec Dlouhomilov & Benkov (1716–2026)
 * Obsahuje autentická metadata, popisy, měřítka, anotace, přesné adresy na zdroj
 * z Mapové sbírky PřF UK / Chartae Antiquae, ČÚZK / ÚAZK (LMS & WMS-ORTOARCHIV), CENIA a georeferenční parametry.
 */

const warpedMapsManifest = {
  "version": 1,
  "generatedAt": "2026-11-22T00:16:53.844018Z",
  "crs": "EPSG:3857",
  "basePath": "assets/maps/warped/",
  "layers": {
    "orto1953": {
      "id": "orto1953",
      "delivery": "quadrants",
      "bounds": [
        [
          49.882,
          16.96
        ],
        [
          49.929,
          17.044
        ]
      ],
      "quadrants": [
        {
          "id": "q00",
          "file": "orto1953_q00.webp",
          "bounds": [
            [
              49.905505724207224,
              16.96
            ],
            [
              49.929000000000016,
              17.002000000000002
            ]
          ],
          "width": 2800,
          "height": 2432,
          "bytes": 522010,
          "quality": 82
        },
        {
          "id": "q01",
          "file": "orto1953_q01.webp",
          "bounds": [
            [
              49.905505724207224,
              17.002000000000002
            ],
            [
              49.929000000000016,
              17.044
            ]
          ],
          "width": 2800,
          "height": 2432,
          "bytes": 467144,
          "quality": 82
        },
        {
          "id": "q10",
          "file": "orto1953_q10.webp",
          "bounds": [
            [
              49.882,
              16.96
            ],
            [
              49.905505724207224,
              17.002000000000002
            ]
          ],
          "width": 2800,
          "height": 2432,
          "bytes": 647740,
          "quality": 82
        },
        {
          "id": "q11",
          "file": "orto1953_q11.webp",
          "bounds": [
            [
              49.882,
              17.002000000000002
            ],
            [
              49.905505724207224,
              17.044
            ]
          ],
          "width": 2800,
          "height": 2432,
          "bytes": 622356,
          "quality": 82
        }
      ],
      "totalBytes": 2259250,
      "totalWidth": 5600,
      "totalHeight": 4864,
      "method": "analytical_5514_to_3857_poly2",
      "metrics": {
        "polyMaxResidualM": 0.00025398356745951655
      }
    },
    "vojenske2_1838": {
      "id": "vojenske2_1838",
      "delivery": "single",
      "bounds": [
        [
          49.882,
          16.96
        ],
        [
          49.929,
          17.044
        ]
      ],
      "file": "vojenske2_1838.webp",
      "totalBytes": 1427086,
      "totalWidth": 3200,
      "totalHeight": 2780,
      "method": "residual_tps_rbf_over_cenia",
      "metrics": {
        "nGcps": 12,
        "smoothing": 0.0,
        "minDetJ": 203.8008,
        "trainRmseM": 0.0,
        "loocvRmseM": 25.95,
        "loocvMaxM": 55.51
      }
    },
    "vojenske3_1874": {
      "id": "vojenske3_1874",
      "delivery": "single",
      "bounds": [
        [
          49.882,
          16.96
        ],
        [
          49.929,
          17.044
        ]
      ],
      "file": "vojenske3_1874.webp",
      "totalBytes": 2329432,
      "totalWidth": 3200,
      "totalHeight": 2780,
      "method": "tps_rbf",
      "metrics": {
        "nGcps": 15,
        "smoothing": 0.0,
        "minDetJ": 306.6741,
        "trainRmseM": 0.0,
        "loocvRmseM": 11.58,
        "loocvMaxM": 22.12
      }
    },
    "vojenske3_1937": {
      "id": "vojenske3_1937",
      "delivery": "single",
      "bounds": [
        [
          49.882,
          16.96
        ],
        [
          49.929,
          17.044
        ]
      ],
      "file": "vojenske3_1937.webp",
      "totalBytes": 1357126,
      "totalWidth": 3200,
      "totalHeight": 2780,
      "method": "tps_rbf",
      "metrics": {
        "nGcps": 14,
        "smoothing": 0.0,
        "minDetJ": 164.3917,
        "trainRmseM": 0.0,
        "loocvRmseM": 9.53,
        "loocvMaxM": 14.92
      }
    },
    "vojenske3_1945": {
      "id": "vojenske3_1945",
      "delivery": "single",
      "bounds": [
        [
          49.882,
          16.96
        ],
        [
          49.929,
          17.044
        ]
      ],
      "file": "vojenske3_1945.webp",
      "totalBytes": 2833776,
      "totalWidth": 3200,
      "totalHeight": 2780,
      "method": "tps_rbf",
      "metrics": {
        "nGcps": 15,
        "smoothing": 0.0,
        "minDetJ": 312.5708,
        "trainRmseM": 0.0,
        "loocvRmseM": 6.62,
        "loocvMaxM": 13.27
      }
    },
    "vojenske1_1764": {
      "id": "vojenske1_1764",
      "delivery": "single",
      "bounds": [
        [
          49.882,
          16.96
        ],
        [
          49.929,
          17.044
        ]
      ],
      "file": "vojenske1_1764.webp",
      "totalBytes": 1794700,
      "totalWidth": 3000,
      "totalHeight": 2606,
      "method": "tps_rbf_with_007m_affine",
      "metrics": {
        "nGcps": 12,
        "smoothing": 0.0,
        "minDetJ": 53.6256,
        "trainRmseM": 0.0,
        "loocvRmseM": 1103.44,
        "loocvMaxM": 1652.17
      }
    },
    "topo1952": {
      "id": "topo1952",
      "delivery": "single",
      "bounds": [
        [
          49.90042065531134,
          16.946386603006943
        ],
        [
          49.91732370096802,
          16.999735836657134
        ]
      ],
      "file": "topo1952.webp",
      "totalBytes": 245334,
      "totalWidth": 1800,
      "totalHeight": 886,
      "method": "tps_rbf",
      "metrics": {
        "nGcps": 9,
        "smoothing": 0.0,
        "minDetJ": 21.2887,
        "trainRmseM": 0.0,
        "loocvRmseM": 12.89,
        "loocvMaxM": 19.85
      }
    },
    "cadastre1834": {
      "id": "cadastre1834",
      "delivery": "quadrants",
      "bounds": [
        [
          49.888,
          16.97
        ],
        [
          49.9285,
          17.0165
        ]
      ],
      "quadrants": [
        {
          "id": "q00",
          "file": "cadastre1834_q00.webp",
          "bounds": [
            [
              49.90825425081273,
              16.97
            ],
            [
              49.92849999999999,
              16.99325
            ]
          ],
          "width": 2200,
          "height": 2970,
          "bytes": 204908,
          "quality": 82
        },
        {
          "id": "q01",
          "file": "cadastre1834_q01.webp",
          "bounds": [
            [
              49.90825425081273,
              16.99325
            ],
            [
              49.92849999999999,
              17.0165
            ]
          ],
          "width": 2200,
          "height": 2970,
          "bytes": 114914,
          "quality": 82
        },
        {
          "id": "q10",
          "file": "cadastre1834_q10.webp",
          "bounds": [
            [
              49.888000000000005,
              16.97
            ],
            [
              49.90825425081273,
              16.99325
            ]
          ],
          "width": 2200,
          "height": 2970,
          "bytes": 161336,
          "quality": 82
        },
        {
          "id": "q11",
          "file": "cadastre1834_q11.webp",
          "bounds": [
            [
              49.888000000000005,
              16.99325
            ],
            [
              49.90825425081273,
              17.0165
            ]
          ],
          "width": 2200,
          "height": 2970,
          "bytes": 180964,
          "quality": 82
        }
      ],
      "totalBytes": 662122,
      "totalWidth": 4400,
      "totalHeight": 5940,
      "method": "multi_sheet_tps_mosaic_with_central_web",
      "metrics": {
        "sheets": {
          "I": {
            "n_gcps": 11,
            "smoothing": 0.05,
            "min_det_j": 285.4842,
            "train_rmse_m": 1.62,
            "loocv_rmse_m": 11.73,
            "loocv_max_m": 19.29
          },
          "II": {
            "n_gcps": 15,
            "smoothing": 0.015,
            "min_det_j": 164.2898,
            "train_rmse_m": 1.22,
            "loocv_rmse_m": 18.04,
            "loocv_max_m": 44.17
          },
          "III": {
            "n_gcps": 14,
            "smoothing": 0.015,
            "min_det_j": 83.2981,
            "train_rmse_m": 1.18,
            "loocv_rmse_m": 14.69,
            "loocv_max_m": 32.59
          },
          "IV": {
            "n_gcps": 17,
            "smoothing": 0.005,
            "min_det_j": 112.3739,
            "train_rmse_m": 2.28,
            "loocv_rmse_m": 8.9,
            "loocv_max_m": 20.6
          },
          "V": {
            "n_gcps": 24,
            "smoothing": 0.005,
            "min_det_j": 142.5253,
            "train_rmse_m": 0.8,
            "loocv_rmse_m": 9.35,
            "loocv_max_m": 21.95
          },
          "VI": {
            "n_gcps": 17,
            "smoothing": 0.003,
            "min_det_j": 114.3524,
            "train_rmse_m": 0.46,
            "loocv_rmse_m": 9.02,
            "loocv_max_m": 14.79
          },
          "central_web": {
            "n_gcps": 12,
            "smoothing": 0.001,
            "min_det_j": 1224.6716,
            "train_rmse_m": 0.0,
            "loocv_rmse_m": 0.34,
            "loocv_max_m": 0.81
          }
        },
        "sheetIvLoocvRmseM": 8.9,
        "centralWebLoocvRmseM": 0.34,
        "minDetJAllSheets": 83.2981
      }
    }
  }
};

const historicalMapsData = [
  {
    id: "muller1716",
    title: "Tabula Generalis Marchionatus Moraviae In Sex Circulos Divisae",
    subTitle: "Müllerova mapa Moravy rozdělená do šesti krajů",
    year: "1716–1730",
    period: "Barokní období (Habsburská monarchie)",
    scale: "1 : 630 000",
    author: "Johann Christoph Müller (1673–1721), Johann Baptist Homann (1664–1724)",
    archive: "Vlastivědné muzeum v Olomouci",
    annotation: "1 mapa; mědirytina, kolorovaná; 48,5 x 58,0 cm, na listu 52,5 x 60,0 cm. Digitalizaci provedl VÚGTK v rámci projektu NAKI DF11P01OVV021.",
    imageFile: "assets/maps/dlouhomilov_1716_muller.jpg",
    externalUrl: "https://chartae-antiquae.cz/cs/maps/84803/?view=-38.328125,82.4375,6",
    isOverlay: false,
    category: "regional",
    toponyms: {
      dlouhomilov: "Lomigsdorf",
      benkov: "Bentke",
      medelske: null
    },
    description: "Nejstarší monumentální topografické dílo Moravy vytvořené na císařský příkaz Karla VI. Zobrazuje Dlouhomilov pod dobovým názvem Lomigsdorf a sousední Benkov jako Bentke. Obsahuje zákres farního kostela Všech svatých, tvrziště/rychtu a starou formanskou stezku spojující Zábřeh se Šumperskem.",
    keyFeatures: [
      "Dobové toponymum: Lomigsdorf & Bentke",
      "Symbol farního kostela a fary",
      "Původní průběh formanské stezky údolím",
      "První exaktní vyměření moravských krajů"
    ]
  },
  {
    id: "wieland1726",
    title: "Mapa Čech J. W. Wielanda (4. list)",
    subTitle: "Wielandova mapa Čech a Moravy",
    year: "1726",
    period: "Barokní období",
    scale: "1 : 231 000",
    author: "Johann Wolfgang Wieland (????–1736), Johann Christoph Müller (1673–1721)",
    archive: "Vlastivědné muzeum v Olomouci",
    annotation: "4. list ze 4 listů, kolorovaná mědirytina, papír podlepený plátnem, rozměry listu: 71,5 x 85,0 cm, rozměry celé mapy: 143,0 x 170,0 cm. Projekt NAKI DF11P01OVV021.",
    imageFile: "assets/maps/dlouhomilov_1726_wieland.jpg",
    externalUrl: "https://chartae-antiquae.cz/cs/maps/69510/?view=-9.109375,186.625,6",
    isOverlay: false,
    category: "regional",
    toponyms: {
      dlouhomilov: "Bomigsdorf / B. Dlohomilow",
      benkov: "Bentke / B. Bentkow",
      medelske: null
    },
    description: "Rukopisné a tiskové dílo vojenského inženýra J. W. Wielanda. Vyznačuje Dlouhomilov (Bomigsdorf / Dlohomilow) i Benkov (Bentkow / Bentke) s důrazem na lesní porosty, vodní toky a terénní konfiguraci Zábřežské vrchoviny.",
    keyFeatures: [
      "Dvojjazyčné označení obcí (česky i německy)",
      "Zákres zalesnění kopců v okolí Dlouhomilova",
      "Detailní konfigurace údolí Dlouhomilovského potoka"
    ]
  },
  {
    id: "atlas1758",
    title: "Atlas Topographique et Militaire, Qui comprend les Etats de la Couronne de Boheme",
    subTitle: "Sedmiletá válka – Válečné divadlo v Čechách a na Moravě",
    year: "1758",
    period: "Sedmiletá válka (Tereziánské období)",
    scale: "ca 1 : 1 900 000",
    author: "Julien, J.R.",
    archive: "Muzeum Brněnska",
    annotation: "1 mapa, mědirytina, 192 x 312 cm, složeno na 44 x 28 cm. Mapa má 16 dílů, každý díl je rozdělen na čtyři části a podlepen plátnem. Projekt NAKI DF11P01OVV021.",
    imageFile: "assets/maps/dlouhomilov_1758_atlas_militaire.jpg",
    externalUrl: "https://chartae-antiquae.cz/cs/maps/8692/?view=-67.546875,23.734375,6",
    isOverlay: false,
    category: "military",
    toponyms: {
      dlouhomilov: "Bomigsdorf",
      benkov: "Bentke",
      medelske: null
    },
    description: "Vojenská mapa bojišť Sedmileté války (1756–1763) zachycující strategické cesty na severní Moravě mezi Zábřehem, Šumperkem a Olomoucí v době pruských vpádů.",
    keyFeatures: [
      "Vojenské komunikace a přechody přes vrchovinu",
      "Opevněná a strategická místa v regionu",
      "Vyznačení zemských hranic s Kladskem a Slezskem"
    ]
  },
  {
    id: "dieceze1762",
    title: "Mapa olomoucké diecéze J. V. X. Freye von Freyenfelsu",
    subTitle: "Církevní správní mapa Olomouckého biskupství",
    year: "1762",
    period: "Církevní správa 18. století",
    scale: "1 : 180 000",
    author: "Johann Wenzel Xaver Frey von Freyenfels (1705–1776), Johann Christoph Müller (1673–1721)",
    archive: "Vlastivědné muzeum v Olomouci",
    annotation: "2. list ze 4 listů, mědirytina, černobílá, rozměry mapy: 52,0 x 70,5 cm, rozměry celé mapy: 101,0 x 141,0 cm. Projekt NAKI DF11P01OVV021.",
    imageFile: "assets/maps/dlouhomilov_1762_olomoucka_dieceze.jpg",
    externalUrl: "https://chartae-antiquae.cz/cs/maps/69545/?view=-68.0625,36.03125,6",
    isOverlay: false,
    category: "regional",
    toponyms: {
      dlouhomilov: "Dlouhomilov",
      benkov: "Bentke",
      medelske: "Medelské"
    },
    description: "Církevní správní mapa znázorňující hranice děkanátů a farností. Kostel Všech svatých v Dlouhomilově je zde vyznačen jako významné duchovní centrum se spádovými obcemi Benkov a Medelské.",
    keyFeatures: [
      "Vyznačení farního obvodu Dlouhomilov",
      "Vazba na děkanát Zábřeh / Šumperk",
      "Historické hranice církevních panství"
    ]
  },
  {
    id: "vojenske1_1764",
    title: "I. vojenské mapování (Josefské)",
    subTitle: "První vojensko-topografické mapování habsburské monarchie",
    year: "1764–1783",
    period: "Josefínské období",
    scale: "1 : 28 800",
    author: "Důstojníci císařského generálního štábu",
    archive: "Fakulta životního prostředí Univerzita J. E. Purkyně v Ústí nad Labem (FŽP UJEP)",
    annotation: "Rukopisná kolorovaná mapa v měřítku 1 : 28 800 (sekční listy 011_M + severní pás 007_M z Chartae Antiquae). Nelineární TPS georeferencování do EPSG:3857 přes celé údolí (projekt NAKI DF11P01OVV021).",
    imageFile: "assets/maps/dlouhomilov_1764_vojenske_1.jpg",
    externalUrl: "https://chartae-antiquae.cz/cs/maps/12689/?view=-23.21875,76.1484375,7",
    isOverlay: true,
    overlayKey: "vojenske1_1764",
    defaultBounds: [
      [49.882, 16.96],
      [49.929, 17.044]
    ],
    localityBounds: {
      dlouhomilov: [
        [49.904872, 16.984525],
        [49.914882, 16.995445]
      ]
    },
    category: "military",
    toponyms: {
      dlouhomilov: "Lomigsdorf",
      benkov: "Benke",
      medelske: "Dreihofen (Medelské)"
    },
    description: "První detailní celoplošné vojenské mapování habsburské monarchie v měřítku 1 : 28 800. Barevně rozlišuje nespalné zděné budovy (červené) a spalné dřevěné chalupy (žluté), původní meandry potoka, rybníčky v údolí a pastviny před melioracemi.",
    keyFeatures: [
      "První podrobné zobrazení jednotlivých usedlostí obce",
      "Barevné rozlišení zděných (červená) a dřevěných (žlutá) staveb",
      "Původní neregulovaný tok Dlouhomilovského potoka",
      "Historické rybníky a mokřady pod vsí"
    ]
  },
  {
    id: "maehren1810",
    title: "Mähren Und Oesterreichisch Schlesien",
    subTitle: "Podrobná mapa Markrabství moravského a rakouského Slezska",
    year: "1810",
    period: "Napoleonské války",
    scale: "ca 1 : 270 000",
    author: "Christoph von Passy",
    archive: "Národní knihovna České republiky",
    annotation: "1 mapa na 4 listech; mědirytina, podlepeno plátnem; celá mapa 76 x 109 cm. Mapový rám se stupňovým dělením a zeměpisnou sítí. Vlastivědný obsah: prameny řek, jeskyně, bojiště, památná místa. Projekt NAKI DF11P01OVV021.",
    imageFile: "assets/maps/dlouhomilov_1810_maehren.jpg",
    externalUrl: "https://chartae-antiquae.cz/cs/maps/5498/?view=-101.1875,196.59375,5",
    isOverlay: false,
    category: "regional",
    toponyms: {
      dlouhomilov: "Dlouhomilov",
      benkov: "Bentka",
      medelske: null
    },
    description: "Mědirytinová mapa Moravy a rakouského Slezska na 4 listech doplněná tabelárním přehledem astronomicky zjištěných poloh a vlastivědným obsahem z období napoleonských válek.",
    keyFeatures: [
      "Toponyma: Dlouhomilov & Bentka",
      "Zeměpisná síť se souřadnicemi a stupňovým dělením",
      "Císařské silnice a poštovní trasy severní Moravy"
    ]
  },
  {
    id: "cadastre1834",
    title: "Císařský povinný otisk stabilního katastru (Lomigsdorf)",
    subTitle: "Katastrální mapa celého k. ú. Dlouhomilov (6 listů I–VI + detail středu, sign. MOR102618340)",
    year: "1834",
    period: "Habsburská monarchie (František I.)",
    scale: "1 : 2 880",
    author: "Geometři c. k. vyměřovacího úřadu (k.ú. Lomigsdorf)",
    archive: "Ústřední archiv zeměměřictví a katastru (ÚAZK ČÚZK)",
    annotation: "Bezšvová georeferencovaná mozaika všech 6 sekčních listů (I–VI) + detailu jádra vsi (EPSG:3857, jádro LOOCV 0,34 m). Pokrývá celé k. ú. Dlouhomilov včetně osady Medelské (samostatné k. ú. Benkov doplníme v další etapě).",
    imageFile: "assets/maps/dlouhomilov_cadastre_1834_web.jpg",
    externalUrl: "https://ags.cuzk.cz/archiv/openmap.html?typ=skic&idrastru=MOR102618340",
    isOverlay: true,
    overlayKey: "cadastre1834",
    defaultBounds: [
      [49.888, 16.97],
      [49.9285, 17.0165]
    ],
    localityBounds: {
      dlouhomilov: [
        [49.904687, 16.9835],
        [49.914407, 16.9979]
      ],
      benkov: [
        [49.88963, 17.016049],
        [49.89663, 17.027049]
      ],
      medelske: [
        [49.897983, 16.989424],
        [49.904483, 16.998924]
      ]
    },
    category: "cadastral",
    toponyms: {
      dlouhomilov: "Lomigsdorf (Dlouhomilow)",
      benkov: "Benkow",
      medelske: "Medelské"
    },
    description: "Nejdokonalejší katastrální pramen 19. století v bezšvové mozaice všech 6 listů celého k. ú. Dlouhomilov (včetně osady Medelské) s vysokorozlišovacím detailem středu vsi (ořez RÚIAN k.ú. 626643; samostatný katastr Benkova bude doplněn v navazující etapě). Zachycuje každý dům, stodolu, zahradu i pole (červená = zděné, žlutá = dřevěné) — grunt u Dvořáků čp. 29 je zakreslen jako dvůr (st. 63) se samostatnou stodolou (st. 62).",
    keyFeatures: [
      "Měřítko 1 : 2 880 – kompletní mozaika listů I–VI pro Dlouhomilov i Medelské",
      "Půdorysy všech stavení v obci v barvách červená (zděné) / žlutá (dřevěné)",
      "Stavební a pozemkové parcely (st. p. č.)",
      "Základ dnešního katastru nemovitostí"
    ]
  },
  {
    id: "vojenske2_1838",
    title: "II. vojenské mapování (Františkovo)",
    subTitle: "Topografická sekce severní Moravy v měřítku 1 : 28 800",
    year: "1838",
    period: "Předbřeznové období (Vormärz)",
    scale: "1 : 28 800",
    author: "Militär-Geographisches Institut Wien",
    archive: "ÖStA / CENIA WMS (II_vojenske_mapovani) • FŽP UJEP",
    annotation: "Souvislá mozaika přes CENIA WMS (II_vojenske_mapovani) se zpřesněním reziduální TPS transformací do EPSG:3857 přes celé údolí (LOOCV 26,0 m).",
    imageFile: "assets/maps/dlouhomilov_1838_vojenske_2.jpg",
    externalUrl: "https://chartae-antiquae.cz/cs/maps/13472/?view=-29.96875,185.953125,6",
    isOverlay: true,
    overlayKey: "vojenske2_1838",
    defaultBounds: [
      [49.882, 16.96],
      [49.929, 17.044]
    ],
    localityBounds: {
      dlouhomilov: [
        [49.9025, 16.9850],
        [49.9125, 16.9970]
      ]
    },
    category: "military",
    toponyms: {
      dlouhomilov: "Lomigsdorf / Dlouhomilov",
      benkov: "Benke",
      medelske: "Dreyhofen (Medelské)"
    },
    description: "Mapování založené přímo na trigonometrické síti Stabilního katastru. Vyniká plastickým šrafovaným reliéfem svahů Bukovické hory, přesným půdorysem intravilánu a vyznačením Tří Dvorů (Dreyhofen).",
    keyFeatures: [
      "Topografický reliéf s vrstevními šrafami",
      "Zákres samot Tři Dvory a Medelské",
      "Vysoká polohopisná přesnost"
    ]
  },
  {
    id: "vojenske3_1874",
    title: "III. vojenské mapování – Topografická sekce 1 : 25 000",
    subTitle: "Podrobná topografická sekce rakousko-uherského mapování",
    year: "1874–1920",
    period: "Rakousko-Uhersko",
    scale: "1 : 25 000",
    author: "K. u. k. Militärgeographisches Institut Wien",
    archive: "Historický ústav Akademie věd České republiky",
    annotation: "1 mapa : černobílý tisk, 55 x 72 cm na listu 60 x 81,5 cm (Chartae Antiquae 4058_1_02). Nelineární TPS georeferencování do EPSG:3857 přes celé údolí (LOOCV 11,6 m, projekt NAKI DF11P01OVV021).",
    imageFile: "assets/maps/dlouhomilov_1874_vojenske_3.jpg",
    externalUrl: "https://chartae-antiquae.cz/cs/maps/6178/?view=-109.15625,130.96875,5",
    isOverlay: true,
    overlayKey: "vojenske3_1874",
    defaultBounds: [
      [49.882, 16.96],
      [49.929, 17.044]
    ],
    localityBounds: {
      dlouhomilov: [
        [49.904487, 16.983126],
        [49.915487, 16.995126]
      ],
      benkov: [
        [49.887145, 17.010382],
        [49.894145, 17.021382]
      ],
      medelske: [
        [49.896823, 16.989338],
        [49.903323, 16.998838]
      ]
    },
    category: "military",
    toponyms: {
      dlouhomilov: "Lomigsdorf / Dlouhomilow",
      benkov: "Benke",
      medelske: "Dreihofen"
    },
    description: "První moderní topografická mapa ve velkém měřítku 1 : 25 000 s exaktními vrstevnicemi po 20 metrech. Detailně zaznamenává polní cesty, boží muka, kříže a výškové kóty. Uvádí dobová toponyma Lomigsdorf / Dlouhomilow, Dreihofen pro Medelské a Benke pro Benkov.",
    keyFeatures: [
      "Dobová toponyma: Lomigsdorf / Dlouhomilow, Dreihofen, Benke",
      "Vrstevnicový reliéf namísto pouhých šraf",
      "Polní kříže, kapličky a památná místa",
      "Všechny samoty a usedlosti v údolí"
    ]
  },
  {
    id: "vojenske3_1879",
    title: "III. vojenské mapování – Mähr. Neustadt und Schönberg",
    subTitle: "Speciální mapa listu Uničov a Šumperk",
    year: "1879 (úpravy do 1904)",
    period: "Rakousko-Uhersko",
    scale: "1 : 75 000",
    author: "Schrift u. Gerippe v. Feuerwkr Heller; Terrainschraffirung v Oberlt. Wytlačil",
    archive: "Historický ústav Akademie věd České republiky",
    annotation: "1 mapa; černobílý tisk; 38 x 49,5 cm na listu 44,5 x 56,5 cm; Vydáno 1879 s úpravami do 15. IV. 1904. Projekt NAKI DF11P01OVV021.",
    imageFile: "assets/maps/dlouhomilov_1879_vojenske_3.jpg",
    externalUrl: "https://chartae-antiquae.cz/cs/maps/70573/?view=-43.2734375,48.09375,7",
    isOverlay: false,
    category: "military",
    toponyms: {
      dlouhomilov: "Lomigsdf. (Dlouhomilo)",
      benkov: "Benke",
      medelske: "Dreihofen"
    },
    description: "Speciální mapa listu Uničov a Šumperk (Mähr. Neustadt und Schönberg) vydaná v roce 1879 s úpravami do roku 1904. Významná pro studium komunikační sítě celého regionu se zněním Lomigsdf. (Dlouhomilo), Dreihofen a Benke.",
    keyFeatures: [
      "Přehledná speciální mapa 1 : 75 000",
      "Dobové znění: Lomigsdf. (Dlouhomilo), Dreihofen, Benke",
      "Šrafovaný reliéf svahů Zábřežské a Hanušovické vrchoviny",
      "Železniční tratě a okresní silnice"
    ]
  },
  {
    id: "narodnostni1906",
    title: "Národnostní mapa Moravy. – Severní Morava a východní Čechy",
    subTitle: "Chytilova národnostní a etnická mapa",
    year: "1906",
    period: "Přelom 19. a 20. století",
    scale: "1 : 150 000",
    author: "Chytil, Alois",
    archive: "Historický ústav Akademie věd České republiky",
    annotation: "1 mapa; barevná, podlepená plátnem; 62 x 65 cm, na listu 70 x 88 cm; Mapa obsahuje legendu. Digitalizována ve spolupráci s vlastníkem.",
    imageFile: "assets/maps/dlouhomilov_1906_narodnostni_mapa.jpg",
    externalUrl: "https://chartae-antiquae.cz/cs/maps/85770/?view=-71.0625,141.15625,5",
    isOverlay: false,
    category: "regional",
    toponyms: {
      dlouhomilov: "Dlouhomilov (česká oblast – červená)",
      benkov: "Benke / Benkov (čistě německá oblast – zelená)",
      medelske: "Medelsko (česká oblast – červená)"
    },
    description: "Unikátní Chytilova národnostní mapa zachycující zřetelnou jazykovou hranici mezi českým a německým osídlením. Zatímco Dlouhomilov a Medelsko jsou na mapě v české jazykové oblasti (vyznačeny červenou barvou), sousední obec Benkov (Benke) je vyznačena jako čistě německá (zelená barva).",
    keyFeatures: [
      "Autentická jazyková hranice: český Dlouhomilov a Medelsko (červená) vs. německý Benkov (zelená)",
      "Zřetelné zobrazení národnostního rozhraní Zábřežska a Šumperska",
      "Barevná mapa včetně původní národnostní legendy"
    ]
  },
  {
    id: "vojenske3_1937",
    title: "III. vojenské mapování – Topografická mapa ČSR (Vydání 5)",
    subTitle: "Předválečná topografická mapa 1 : 25 000 dokončená před rokem 1938",
    year: "1937",
    period: "První Československá republika",
    scale: "1 : 25 000",
    author: "Vojenský zeměpisný ústav Praha (VZÚ)",
    archive: "Národní archiv",
    annotation: "Rozměr: 97,5 x 75 cm (Chartae Antiquae 10001_0517). Nelineární TPS georeferencování do EPSG:3857 přes celé údolí (LOOCV 9,5 m, projekt NAKI DF11P01OVV021).",
    imageFile: "assets/maps/dlouhomilov_1937_vojenske_3.jpg",
    externalUrl: "https://chartae-antiquae.cz/cs/maps/44149/?view=-97.96875,111.4375,5",
    isOverlay: true,
    overlayKey: "vojenske3_1937",
    defaultBounds: [
      [49.882, 16.96],
      [49.929, 17.044]
    ],
    localityBounds: {
      dlouhomilov: [
        [49.905102, 16.983429],
        [49.918852, 16.998429]
      ],
      benkov: [
        [49.887086, 17.0127],
        [49.894086, 17.0237]
      ],
      medelske: [
        [49.898426, 16.991055],
        [49.904926, 17.000555]
      ]
    },
    category: "military",
    toponyms: {
      dlouhomilov: "Dlouhomilov",
      benkov: "Benkov",
      medelske: "Medelské"
    },
    description: "Špičková předválečná topografická mapa ČSR v měřítku 1 : 25 000 dokončená těsně před mnichovskou krizí. Zaznamenává stav obce v době první republiky s českými toponymy.",
    keyFeatures: [
      "Československé názvosloví a trigonometrické body",
      "Stav silniční sítě před druhou světovou válkou",
      "Půdorys všech usedlostí a hospodářství v roce 1937"
    ]
  },
  {
    id: "sudetenland1940",
    title: "Reichsgau Sudetenland. Regierungsbezirk Troppau",
    subTitle: "Správní mapa Říšské župy Sudety (vládní obvod Opava)",
    year: "1940",
    period: "Německá okupace (1938–1945)",
    scale: "1 : 200 000",
    author: "C. Flemming",
    archive: "Historický ústav Akademie věd České republiky",
    annotation: "1 list; tisk, rozměry 66 x 82,5 cm. Mapa digitalizována ve spolupráci s vlastníkem (HÚ AV ČR).",
    imageFile: "assets/maps/dlouhomilov_1940_sudetenland.jpg",
    externalUrl: "https://chartae-antiquae.cz/cs/maps/86424/?view=-84.40625,80.78125,5",
    isOverlay: false,
    category: "regional",
    toponyms: {
      dlouhomilov: "Lomigsdorf (Landkreis Hohenstadt)",
      benkov: "Benke (Landkreis Mährisch Schönberg)",
      medelske: "Nezakresleno (drobná osada)"
    },
    description: "Oficiální správní mapa Říšské župy Sudety (vládní obvod Opava / Regierungsbezirk Troppau). Zachycuje správní rozdělení za německé okupace (1938–1945): Dlouhomilov (Lomigsdorf) spadal pod Landkreis Hohenstadt (Zábřeh), zatímco německý Benkov (Benke) spadal pod Landkreis Mährisch Schönberg (Šumperk). Drobnější osady jako Medelské v tomto měřítku nejsou zakresleny.",
    keyFeatures: [
      "Správní hranice okresů: Dlouhomilov pod Zábřehem vs. Benkov pod Šumperkem",
      "Německé úřední názvosloví (Lomigsdorf, Benke)",
      "Přehled vládního obvodu Opava v Říšské župě Sudety"
    ]
  },
  {
    id: "vojenske3_1945",
    title: "III. vojenské mapování – poválečný tisk (VIII. 1945)",
    subTitle: "Poválečná topografická sekce 1 : 25 000 těsně po osvobození",
    year: "1945",
    period: "Poválečné Československo",
    scale: "1 : 25 000",
    author: "Vojenský zeměpisný ústav Praha",
    archive: "Historický ústav Akademie věd České republiky",
    annotation: "1 mapa : černobílý tisk, 55 x 72 cm (Chartae Antiquae 4058_1_01, vydáno VIII. 1945). Nelineární TPS georeferencování do EPSG:3857 přes celé údolí (LOOCV 6,6 m, projekt NAKI DF11P01OVV021).",
    imageFile: "assets/maps/dlouhomilov_1945_vojenske_3.jpg",
    externalUrl: "https://chartae-antiquae.cz/cs/maps/6177/?view=-107.40625,119.78125,5",
    isOverlay: true,
    overlayKey: "vojenske3_1945",
    defaultBounds: [
      [49.882, 16.96],
      [49.929, 17.044]
    ],
    category: "military",
    toponyms: {
      dlouhomilov: "Dlouhomilov",
      benkov: "Benkov",
      medelske: "Medelské"
    },
    description: "Poválečný tisk topografické sekce vydaný v srpnu 1945 těsně po osvobození. Dokumentuje stav krajiny a stavení před odsunem německého obyvatelstva z pohraničí.",
    keyFeatures: [
      "Poválečný tisk ze srpna 1945",
      "Historická hranice katastrů Dlouhomilov a Benkov",
      "Stav zástavby bezprostředně po ukončení války"
    ]
  },
  {
    id: "topo1952",
    title: "Topografická mapa v systému S-1952 (1 : 25 000)",
    subTitle: "Vojenská topografická mapa v souřadnicovém systému Varšavské smlouvy",
    year: "1952",
    period: "Poválečné Československo",
    scale: "1 : 25 000",
    author: "Topografická služba Československé armády",
    archive: "Vojenský historický archiv / ÚAZK",
    annotation: "Topografická mapa ČSR v systému S-1952 (oříznutý západní list v projekci EPSG:3857, LOOCV 12,9 m). Zobrazuje Dlouhomilov, Medelské, Brníčko a Kolšov; navazující východní list s Benkovem doplníme v další etapě.",
    imageFile: "assets/maps/dlouhomilov_topomap_1952_web.jpg",
    externalUrl: "https://ags.cuzk.cz/archiv/",
    isOverlay: true,
    overlayKey: "topo1952",
    defaultBounds: [
      [49.90042065531134, 16.946386603006943],
      [49.91732370096802, 16.999735836657134]
    ],
    localityBounds: {
      dlouhomilov: [
        [49.9020, 16.9845],
        [49.9130, 16.9965]
      ],
      benkov: [
        [49.8935, 16.9805],
        [49.9005, 16.9915]
      ],
      medelske: [
        [49.9165, 16.9920],
        [49.9230, 17.0015]
      ]
    },
    category: "military",
    toponyms: {
      dlouhomilov: "Dlouhomilov",
      benkov: null,
      medelske: "Medelské"
    },
    description: "Poválečná vojenská mapa v systému S-1952 (oříznutý západní list v projekci EPSG:3857, LOOCV 12,9 m). Zobrazuje Dlouhomilov, Medelské, Brníčko a Kolšov; navazující východní list s Benkovem doplníme v další etapě.",
    keyFeatures: [
      "Souřadnicový systém S-1952 (Gaussovo-Krügerovo zobrazení)",
      "Poválečný stav zástavby v 50. letech",
      "Přesné vrstevnice a kótované výškové body"
    ]
  },
  {
    id: "en1960",
    title: "Mapa evidence nemovitostí (EN)",
    subTitle: "Katastrální hospodářská mapa z období socialistického hospodaření",
    year: "1960",
    period: "Socialistické období",
    scale: "1 : 2 880",
    author: "Středisko geodézie Šumperk",
    archive: "Katastrální úřad pro Olomoucký kraj / SOkA Šumperk",
    annotation: "Hospodářská mapa evidence nemovitostí (EN) navazující na stabilní katastr. Dokumentuje zakládání JZD a slučování pozemků.",
    imageFile: "assets/maps/dlouhomilov_1960_en.jpg",
    externalUrl: "https://ags.cuzk.cz/archiv/",
    isOverlay: false,
    category: "cadastral",
    toponyms: {
      dlouhomilov: "Dlouhomilov",
      benkov: "Benkov",
      medelske: "Medelské"
    },
    description: "Katastrální mapa z období vzniku JZD v Dlouhomilově dokumentující sloučení pozemků a nové hospodářské objekty.",
    keyFeatures: [
      "Slučování polností do družstevních lánů",
      "Stavební parcely a nové bytovky",
      "Zemědělský areál na okraji obce"
    ]
  },
  {
    id: "orto1953",
    title: "Historická ortofotomapa z 50. let (1953–1954)",
    subTitle: "Černobílé letecké snímkování údolí před scelováním pozemků JZD",
    year: "1953–1954",
    period: "Poválečné Československo (před kolektivizací lánů)",
    scale: "cca 0,5 m/px (LMS 1 : 20 000)",
    author: "Vojenský zeměpisný ústav / Topografická služba ČSLA • CENIA",
    archive: "ÚAZK ČÚZK / VGHMÚř Dobruška / CENIA (CC-BY 4.0)",
    annotation: "Souvislá mozaika leteckých měřických snímků z let 1953 (Dlouhomilov: 9. 9. 1953, WMSA08.1953.ZABR51.11298) a 1954 (Medelské, Benkov: WMSA08.1954.ZABR51.03310). V interaktivní mapě je živě streamována v nativním rozlišení 0,5 m/px ze služby CENIA WMS (EPSG:5514 → EPSG:3857) až do zoomu 20 s offline zálohou WebP.",
    imageFile: "assets/maps/dlouhomilov_1953_orto_historicke.jpg",
    externalUrl: "https://ags.cuzk.gov.cz/archiv/openmap.html?typ=lms&idrastru=WMSA08.1953.ZABR51.11298&bz=-562206.33,-1084600.40",
    sourceLinks: [
      {
        label: "Archiv ČÚZK (LMS 1953)",
        labelEn: "ČÚZK Archive (LMS 1953)",
        labelDe: "ČÚZK-Archiv (LMS 1953)",
        url: "https://ags.cuzk.gov.cz/archiv/openmap.html?typ=lms&idrastru=WMSA08.1953.ZABR51.11298&bz=-562206.33,-1084600.40"
      },
      {
        label: "Archiv ČÚZK (LMS 1954)",
        labelEn: "ČÚZK Archive (LMS 1954)",
        labelDe: "ČÚZK-Archiv (LMS 1954)",
        url: "https://ags.cuzk.gov.cz/archiv/openmap.html?typ=lms&idrastru=WMSA08.1954.ZABR51.03310&bz=-562206.33,-1084600.40"
      },
      {
        label: "CENIA WMS (CC-BY 4.0)",
        labelEn: "CENIA WMS (CC-BY 4.0)",
        labelDe: "CENIA WMS (CC-BY 4.0)",
        url: "https://gis.cenia.cz/mapcache/ortofotomapa_historicka/wms?SERVICE=WMS&REQUEST=GetCapabilities"
      }
    ],
    citationIso690: "CENIA, VOJENSKÝ GEOGRAFICKÝ A HYDROMETEOROLOGICKÝ ÚŘAD DOBRUŠKA & MINISTERSTVO OBRANY ČR. Historická ortofotomapa ČR (50. léta, 1953–1954) [online WMS vrstva orto, licence CC-BY 4.0; zákl. snímky LMS WMSA08.1953.ZABR51.11298 & WMSA08.1954.ZABR51.03310]. Praha: CENIA & ČÚZK. Dostupné z: https://gis.cenia.cz/mapcache/ortofotomapa_historicka/wms?SERVICE=WMS&REQUEST=GetCapabilities",
    isOverlay: true,
    overlayKey: "orto1953",
    isWms: false,
    defaultBounds: [
      [49.882, 16.96],
      [49.929, 17.044]
    ],
    category: "aerial",
    toponyms: {
      dlouhomilov: "Dlouhomilov",
      benkov: "Benkov",
      medelske: "Medelské"
    },
    description: "Unikátní poválečné letecké snímkování z let 1953–1954 zachycující ještě nerozorané úzké lány, meze, remízky a ovocné sady jednotlivých selských gruntů před plošnou kolektivizací JZD. Ukazuje také poválečný stav stavení v Benkově po odsunu německého obyvatelstva, původní zástavbu Dlouhomilova, osady Medelské a zříceninu hradu Brníčko.",
    keyFeatures: [
      "Úzká záhumenková políčka, meze a polní cesty před scelením do lánů JZD",
      "Autentický pohled na statky Dlouhomilova, Medelského a Benkova v letech 1953–1954",
      "Zřetelná struktura lesů a zříceniny hradu Brníčko před pozdějším zalesněním",
      "Přesná geodetická transformace S-JTSK → Web Mercator & živé 0,5 m/px CENIA WMS dlaždice do zoomu 20"
    ]
  },
  {
    id: "orto2000",
    title: "Archivní ortofoto ČÚZK – Černobílé (2000)",
    subTitle: "První celoplošné digitální letecké snímkování v archivu ČÚZK",
    year: "2000",
    period: "Přelom tisíciletí (5 let po vyhlášení VPZ 1995)",
    scale: "0,5 m/px (ČB)",
    author: "Zeměměřický úřad / ČÚZK",
    archive: "ČÚZK – WMS-ORTOARCHIV",
    annotation: "První digitální ortofoto ČR nad údolím z roku 2000 (černobílá série 1998–2001). Živě streamováno přes OGC WMS ČÚZK (vrstva 2000).",
    imageFile: "assets/maps/dlouhomilov_2000_orto_cuzk.jpg",
    externalUrl: "https://ags.cuzk.gov.cz/archiv/",
    sourceLinks: [
      {
        label: "Archiv ČÚZK (LMS)",
        labelEn: "ČÚZK Archive (LMS)",
        labelDe: "ČÚZK-Archiv (LMS)",
        url: "https://ags.cuzk.gov.cz/archiv/"
      },
      {
        label: "ČÚZK WMS-ORTOARCHIV",
        labelEn: "ČÚZK WMS-ORTOARCHIV",
        labelDe: "ČÚZK WMS-ORTOARCHIV",
        url: "https://geoportal.cuzk.gov.cz/geoserver/wms_ortofoto_archiv/wms?SERVICE=WMS&REQUEST=GetCapabilities"
      }
    ],
    citationIso690: "ČESKÝ ÚŘAD ZEMĚMĚŘICKÝ A KATASTRÁLNÍ & ZEMĚMĚŘICKÝ ÚŘAD. Archivní ortofoto ČR – černobílá série 2000 [online WMS vrstva 2000 ve službě WMS-ORTOARCHIV, © ČÚZK]. Praha: ČÚZK. Dostupné z: https://geoportal.cuzk.gov.cz/geoserver/wms_ortofoto_archiv/wms?SERVICE=WMS&REQUEST=GetCapabilities | https://ags.cuzk.gov.cz/archiv/",
    isOverlay: true,
    overlayKey: "orto2000",
    isWms: true,
    wmsUrl: "https://geoportal.cuzk.gov.cz/geoserver/wms_ortofoto_archiv/wms",
    wmsLayer: "2000",
    defaultBounds: [
      [49.8820, 16.9680],
      [49.9290, 17.0440]
    ],
    category: "aerial",
    toponyms: {
      dlouhomilov: "Dlouhomilov",
      benkov: "Benkov",
      medelske: "Medelské"
    },
    description: "První celoplošné digitální černobílé ortofoto České republiky zachycující údolí Dlouhomilova, Medelského a Benkova v roce 2000 – pět let po vyhlášení vesnické památkové zóny Dlouhomilov (1995). Umožňuje bezprostřední srovnání velkých scelených polních lánů s rokem 1953 i dneškem.",
    keyFeatures: [
      "První digitální archivní ortofoto ČÚZK nad naším regionem (rozlišení 0,5 m/px)",
      "Stav vesnické památkové zóny Dlouhomilov a zemědělského areálu na přelomu tisíciletí",
      "Živá OGC WMS vrstva s možností plynulého přiblížení na jednotlivá stavení"
    ]
  },
  {
    id: "orto2003",
    title: "Archivní ortofoto ČÚZK – První barevné (2003)",
    subTitle: "První barevné letecké snímkování údolí (cyklus 2003)",
    year: "2003",
    period: "Počátek 21. století",
    scale: "0,5 m/px (RGB)",
    author: "Zeměměřický úřad / ČÚZK",
    archive: "ČÚZK – WMS-ORTOARCHIV & Archiv LMS",
    annotation: "První barevné ortofoto údolí Dlouhomilova, Medelského a Benkova z roku 2003 (LMS WMSA24.2003.ZABR51.00006). Živě streamováno přes OGC WMS ČÚZK (vrstva 2003).",
    imageFile: "assets/maps/dlouhomilov_2003_orto_cuzk.jpg",
    externalUrl: "https://ags.cuzk.gov.cz/archiv/openmap.html?typ=lms&idrastru=WMSA24.2003.ZABR51.00006&bz=-562206.33,-1084600.40",
    sourceLinks: [
      {
        label: "Archiv ČÚZK (LMS 2003)",
        labelEn: "ČÚZK Archive (LMS 2003)",
        labelDe: "ČÚZK-Archiv (LMS 2003)",
        url: "https://ags.cuzk.gov.cz/archiv/openmap.html?typ=lms&idrastru=WMSA24.2003.ZABR51.00006&bz=-562206.33,-1084600.40"
      },
      {
        label: "ČÚZK WMS-ORTOARCHIV",
        labelEn: "ČÚZK WMS-ORTOARCHIV",
        labelDe: "ČÚZK WMS-ORTOARCHIV",
        url: "https://geoportal.cuzk.gov.cz/geoserver/wms_ortofoto_archiv/wms?SERVICE=WMS&REQUEST=GetCapabilities"
      }
    ],
    citationIso690: "ČESKÝ ÚŘAD ZEMĚMĚŘICKÝ A KATASTRÁLNÍ & ZEMĚMĚŘICKÝ ÚŘAD. Archivní ortofoto ČR 2003 & Letecké měřické snímky (LMS WMSA24.2003.ZABR51.00006) [online, © ČÚZK]. Praha: ČÚZK. Dostupné z: https://ags.cuzk.gov.cz/archiv/",
    isOverlay: true,
    overlayKey: "orto2003",
    isWms: true,
    wmsUrl: "https://geoportal.cuzk.gov.cz/geoserver/wms_ortofoto_archiv/wms",
    wmsLayer: "2003",
    defaultBounds: [
      [49.8820, 16.9680],
      [49.9290, 17.0440]
    ],
    category: "aerial",
    toponyms: {
      dlouhomilov: "Dlouhomilov",
      benkov: "Benkov",
      medelske: "Medelské"
    },
    description: "Historicky první barevné celoplošné ortofoto údolí z roku 2003. Zaznamenává střechy historických usedlostí, zeleň pastvin a zdravé jehličnaté lesy Zábřežské a Hanušovické vrchoviny před kůrovcovou kalamitou.",
    keyFeatures: [
      "První barevná (RGB) letecká vrstva ČÚZK nad Dlouhomilovem, Medelským a Benkovem",
      "Souvislé lesní porosty na Bukovické hoře a nad Benkovem",
      "Přímý odkaz na původní barevný měřický snímek LMS v Archivu ČÚZK"
    ]
  },
  {
    id: "orto2012",
    title: "Archivní ortofoto ČÚZK (2012)",
    subTitle: "Detailní digitální snímkování údolí před kůrovcovou kalamitou",
    year: "2012",
    period: "Současná epocha (2010–2015)",
    scale: "0,25 m/px (RGB)",
    author: "Zeměměřický úřad / ČÚZK",
    archive: "ČÚZK – WMS-ORTOARCHIV & Archiv LMS",
    annotation: "Barevné digitální ortofoto ČR z roku 2012 pořízené digitální leteckou kamerou (LMS WMSD24.2012.ZABR51.00070). Živá WMS vrstva ČÚZK (vrstva 2012).",
    imageFile: "assets/maps/dlouhomilov_2012_orto_cuzk.jpg",
    externalUrl: "https://ags.cuzk.gov.cz/archiv/openmap.html?typ=lms&idrastru=WMSD24.2012.ZABR51.00070&bz=-562206.33,-1084600.40",
    sourceLinks: [
      {
        label: "Archiv ČÚZK (LMS 2012)",
        labelEn: "ČÚZK Archive (LMS 2012)",
        labelDe: "ČÚZK-Archiv (LMS 2012)",
        url: "https://ags.cuzk.gov.cz/archiv/openmap.html?typ=lms&idrastru=WMSD24.2012.ZABR51.00070&bz=-562206.33,-1084600.40"
      },
      {
        label: "ČÚZK WMS-ORTOARCHIV",
        labelEn: "ČÚZK WMS-ORTOARCHIV",
        labelDe: "ČÚZK WMS-ORTOARCHIV",
        url: "https://geoportal.cuzk.gov.cz/geoserver/wms_ortofoto_archiv/wms?SERVICE=WMS&REQUEST=GetCapabilities"
      }
    ],
    citationIso690: "ČESKÝ ÚŘAD ZEMĚMĚŘICKÝ A KATASTRÁLNÍ & ZEMĚMĚŘICKÝ ÚŘAD. Archivní ortofoto ČR 2012 (0,25 m/px) & Letecké měřické snímky (LMS WMSD24.2012.ZABR51.00070) [online, © ČÚZK]. Praha: ČÚZK. Dostupné z: https://ags.cuzk.gov.cz/archiv/",
    isOverlay: true,
    overlayKey: "orto2012",
    isWms: true,
    wmsUrl: "https://geoportal.cuzk.gov.cz/geoserver/wms_ortofoto_archiv/wms",
    wmsLayer: "2012",
    defaultBounds: [
      [49.8820, 16.9680],
      [49.9290, 17.0440]
    ],
    category: "aerial",
    toponyms: {
      dlouhomilov: "Dlouhomilov",
      benkov: "Benkov",
      medelske: "Medelské"
    },
    description: "Vysokorozlišovací barevné ortofoto z roku 2012 pořízené digitální leteckou kamerou s rozlišením 25 cm/px. Zachytává krajinu těsně před velkoplošnými změnami lesních porostů i rozvoj novostaveb v údolí.",
    keyFeatures: [
      "Vysoké rozlišení 0,25 m/px z digitální letecké kamery",
      "Lesní porosty před kůrovcovou kalamitou na konci dekády",
      "Přesné zobrazení stavebních úprav a rekonstrukcí stavení po roce 2010"
    ]
  },
  {
    id: "orto2022",
    title: "Archivní ortofoto ČÚZK (2022)",
    subTitle: "Aktuální historizující vrstva zachycující proměnu lesů a obce",
    year: "2022",
    period: "Současná epocha (2020–2026)",
    scale: "0,125 m/px (RGB)",
    author: "Zeměměřický úřad / ČÚZK",
    archive: "ČÚZK – WMS-ORTOARCHIV & Archiv LMS",
    annotation: "Archivní digitální ortofoto ČR z roku 2022 s vysokým rozlišením (LMS WMSD24.2022.ZABR42.00798). Živá WMS vrstva ČÚZK (vrstva 2022).",
    imageFile: "assets/maps/dlouhomilov_2022_orto_cuzk.jpg",
    externalUrl: "https://ags.cuzk.gov.cz/archiv/openmap.html?typ=lms&idrastru=WMSD24.2022.ZABR42.00798&bz=-562206.33,-1084600.40",
    sourceLinks: [
      {
        label: "Archiv ČÚZK (LMS 2022)",
        labelEn: "ČÚZK Archive (LMS 2022)",
        labelDe: "ČÚZK-Archiv (LMS 2022)",
        url: "https://ags.cuzk.gov.cz/archiv/openmap.html?typ=lms&idrastru=WMSD24.2022.ZABR42.00798&bz=-562206.33,-1084600.40"
      },
      {
        label: "ČÚZK WMS-ORTOARCHIV",
        labelEn: "ČÚZK WMS-ORTOARCHIV",
        labelDe: "ČÚZK WMS-ORTOARCHIV",
        url: "https://geoportal.cuzk.gov.cz/geoserver/wms_ortofoto_archiv/wms?SERVICE=WMS&REQUEST=GetCapabilities"
      }
    ],
    citationIso690: "ČESKÝ ÚŘAD ZEMĚMĚŘICKÝ A KATASTRÁLNÍ & ZEMĚMĚŘICKÝ ÚŘAD. Archivní ortofoto ČR 2022 (0,125 m/px) & Letecké měřické snímky (LMS WMSD24.2022.ZABR42.00798) [online, © ČÚZK]. Praha: ČÚZK. Dostupné z: https://ags.cuzk.gov.cz/archiv/",
    isOverlay: true,
    overlayKey: "orto2022",
    isWms: true,
    wmsUrl: "https://geoportal.cuzk.gov.cz/geoserver/wms_ortofoto_archiv/wms",
    wmsLayer: "2022",
    defaultBounds: [
      [49.8820, 16.9680],
      [49.9290, 17.0440]
    ],
    category: "aerial",
    toponyms: {
      dlouhomilov: "Dlouhomilov",
      benkov: "Benkov",
      medelske: "Medelské"
    },
    description: "Archivní letecké snímkování z roku 2022 s mimořádnou ostrostí (12,5 cm/px). Ve srovnání s rokem 2012 zřetelně dokumentuje rozsáhlé kůrovcové těžby v lesích nad Benkovem a Medelským i současnou podobu všech tří sídel.",
    keyFeatures: [
      "Mimořádné rozlišení 0,125 m/px pro detailní pohled na střechy a dvory",
      "Dokumentace proměny lesních porostů mezi lety 2012 a 2022",
      "Živá OGC WMS vrstva v interaktivní mapě i srovnání Vedle sebe"
    ]
  }
];

/**
 * Všechny ověřené ročníky živé služby ČÚZK WMS-ORTOARCHIV pokrývající údolí
 * Dlouhomilov, Medelské a Benkov (2000–2022).
 */
const cuzkArchivOrthoLayers = [
  {
    key: "orto2000",
    year: "2000",
    wmsLayer: "2000",
    isColor: false,
    label: "✈️ Archivní ortofoto ČÚZK 2000 (ČB – 50 cm)",
    labelEn: "✈️ ČÚZK Archival Orthophoto 2000 (B&W – 50 cm)",
    labelDe: "✈️ ČÚZK Archiv-Orthofoto 2000 (S/W – 50 cm)"
  },
  {
    key: "orto2003",
    year: "2003",
    wmsLayer: "2003",
    isColor: true,
    label: "✈️ Archivní ortofoto ČÚZK 2003 (první barevné)",
    labelEn: "✈️ ČÚZK Archival Orthophoto 2003 (First Color)",
    labelDe: "✈️ ČÚZK Archiv-Orthofoto 2003 (Erstes Farbbild)"
  },
  {
    key: "orto2006",
    year: "2006",
    wmsLayer: "2006",
    isColor: true,
    label: "✈️ Archivní ortofoto ČÚZK 2006 (RGB)",
    labelEn: "✈️ ČÚZK Archival Orthophoto 2006 (RGB)",
    labelDe: "✈️ ČÚZK Archiv-Orthofoto 2006 (RGB)"
  },
  {
    key: "orto2009",
    year: "2009",
    wmsLayer: "2009",
    isColor: true,
    label: "✈️ Archivní ortofoto ČÚZK 2009 (RGB)",
    labelEn: "✈️ ČÚZK Archival Orthophoto 2009 (RGB)",
    labelDe: "✈️ ČÚZK Archiv-Orthofoto 2009 (RGB)"
  },
  {
    key: "orto2012",
    year: "2012",
    wmsLayer: "2012",
    isColor: true,
    label: "✈️ Archivní ortofoto ČÚZK 2012 (RGB – 25 cm)",
    labelEn: "✈️ ČÚZK Archival Orthophoto 2012 (RGB – 25 cm)",
    labelDe: "✈️ ČÚZK Archiv-Orthofoto 2012 (RGB – 25 cm)"
  },
  {
    key: "orto2014",
    year: "2014",
    wmsLayer: "2014",
    isColor: true,
    label: "✈️ Archivní ortofoto ČÚZK 2014 (RGB)",
    labelEn: "✈️ ČÚZK Archival Orthophoto 2014 (RGB)",
    labelDe: "✈️ ČÚZK Archiv-Orthofoto 2014 (RGB)"
  },
  {
    key: "orto2016",
    year: "2016",
    wmsLayer: "2016",
    isColor: true,
    label: "✈️ Archivní ortofoto ČÚZK 2016 (RGB)",
    labelEn: "✈️ ČÚZK Archival Orthophoto 2016 (RGB)",
    labelDe: "✈️ ČÚZK Archiv-Orthofoto 2016 (RGB)"
  },
  {
    key: "orto2018",
    year: "2018",
    wmsLayer: "2018",
    isColor: true,
    label: "✈️ Archivní ortofoto ČÚZK 2018 (RGB)",
    labelEn: "✈️ ČÚZK Archival Orthophoto 2018 (RGB)",
    labelDe: "✈️ ČÚZK Archiv-Orthofoto 2018 (RGB)"
  },
  {
    key: "orto2020",
    year: "2020",
    wmsLayer: "2020",
    isColor: true,
    label: "✈️ Archivní ortofoto ČÚZK 2020 (RGB)",
    labelEn: "✈️ ČÚZK Archival Orthophoto 2020 (RGB)",
    labelDe: "✈️ ČÚZK Archiv-Orthofoto 2020 (RGB)"
  },
  {
    key: "orto2022",
    year: "2022",
    wmsLayer: "2022",
    isColor: true,
    label: "✈️ Archivní ortofoto ČÚZK 2022 (RGB – 12,5 cm)",
    labelEn: "✈️ ČÚZK Archival Orthophoto 2022 (RGB – 12.5 cm)",
    labelDe: "✈️ ČÚZK Archiv-Orthofoto 2022 (RGB – 12,5 cm)"
  }
];

/**
 * Kompletní ověřený katalog leteckých měřických snímků ČÚZK (LMS 1937–2026)
 * z portálu https://ags.cuzk.gov.cz/archiv/ pro Dlouhomilov, Medelské a Benkov.
 */
const aerialLmsArchiveData = {
  portalUrl: "https://ags.cuzk.gov.cz/archiv/",
  viewerBaseUrl: "https://ags.cuzk.gov.cz/archiv/openmap.html?typ=lms",
  bzCoords: {
    dlouhomilov: "-562206.33,-1084600.40",
    benkov: "-560158.07,-1086744.67"
  },
  nonDigitizedYears: {
    dlouhomilov: [1981, 1983, 1984, 1985, 1989],
    medelske: [1981, 1983, 1984, 1985, 1989],
    benkov: [1981, 1984, 1985, 1987, 1989]
  },
  years: [
    {
      year: 1937,
      type: "bw_analog",
      milestone: true,
      counts: { dlouhomilov: 2, medelske: 4, benkov: 6 },
      dlouhomilovFrame: "WMSA08.1937.ZABR52.08020",
      benkovFrame: "WMSA08.1937.ZABR42.08021",
      sm5: "ZABR52 / ZABR42",
      dateUtc: "01.07.1937",
      overlayKey: null,
      note: "Nejstarší dochované letecké snímkování údolí z doby První republiky (1. 7. 1937).",
      noteEn: "Oldest surviving aerial survey of the valley from the First Czechoslovak Republic (July 1, 1937).",
      noteDe: "Älteste erhaltene Luftbildaufnahme des Tals aus der Ersten Tschechoslowakischen Republik (1. 7. 1937)."
    },
    {
      year: 1953,
      type: "bw_analog",
      milestone: true,
      counts: { dlouhomilov: 3, medelske: 0, benkov: 0 },
      dlouhomilovFrame: "WMSA08.1953.ZABR51.11298",
      benkovFrame: null,
      sm5: "ZABR51 / ZABR41",
      dateUtc: "09.09.1953",
      overlayKey: "orto1953",
      note: "Dlouhomilov před kolektivizací (9. 9. 1953); součást historické ortofotomapy z 50. let.",
      noteEn: "Dlouhomilov prior to collectivization (Sept 9, 1953); included in the 1950s historical orthophoto.",
      noteDe: "Lomigsdorf/Dlouhomilov vor der Kollektivierung (9. 9. 1953); Teil des historischen Orthofotos der 1950er."
    },
    {
      year: 1954,
      type: "bw_analog",
      milestone: true,
      counts: { dlouhomilov: 5, medelske: 5, benkov: 3 },
      dlouhomilovFrame: "WMSA08.1954.ZABR51.03310",
      benkovFrame: null,
      sm5: "ZABR51 / ZABR41 / ZABR53",
      dateUtc: null,
      overlayKey: "orto1953",
      note: "Celoplošné snímkování Dlouhomilova, Medelského i Benkova před scelením polí JZD.",
      noteEn: "Full-valley survey of Dlouhomilov, Medelské, and Benkov prior to JZD field consolidation.",
      noteDe: "Flächendeckende Befliegung von Dlouhomilov, Medelské und Benkov vor der Flurbereinigung."
    },
    {
      year: 1961,
      type: "bw_analog",
      milestone: true,
      counts: { dlouhomilov: 4, medelske: 5, benkov: 2 },
      dlouhomilovFrame: "WMSA08.1961.ZABR52.12082",
      benkovFrame: null,
      sm5: "ZABR52 / ZABR41",
      dateUtc: null,
      overlayKey: null,
      note: "Období po administrativním sloučení Dlouhomilova a Benkova (1960) a rozvoje JZD.",
      noteEn: "Period right after the 1960 municipal merger of Dlouhomilov and Benkov and early JZD consolidation.",
      noteDe: "Zeit unmittelbar nach der Gemeindezusammenlegung von Dlouhomilov und Benkov (1960)."
    },
    {
      year: 1968,
      type: "bw_analog",
      milestone: true,
      counts: { dlouhomilov: 6, medelske: 6, benkov: 6 },
      dlouhomilovFrame: "WMSA08.1968.ZABR52.10436",
      benkovFrame: null,
      sm5: "ZABR52 / ZABR42 / ZABR50",
      dateUtc: null,
      overlayKey: null,
      note: "Plné pokrytí všech tří osad v závěru 60. let (6 snímků pro každé sídlo).",
      noteEn: "Full coverage of all three settlements in the late 1960s (6 frames for each locality).",
      noteDe: "Vollständige Abdeckung aller drei Orte Ende der 1960er Jahre (je 6 Aufnahmen)."
    },
    {
      year: 1969,
      type: "bw_analog",
      milestone: true,
      counts: { dlouhomilov: 0, medelske: 0, benkov: 2 },
      dlouhomilovFrame: null,
      benkovFrame: "WMSA08.1969.ZABR32.23312",
      sm5: "ZABR32 / ZABR33",
      dateUtc: null,
      overlayKey: null,
      note: "Unikátní snímkování dostupné výhradně nad východní částí údolí (Benkov).",
      noteEn: "Unique survey exclusively covering the eastern valley around Benkov.",
      noteDe: "Einzigartige Befliegung exklusiv für den östlichen Talabschnitt bei Benkov."
    },
    {
      year: 1971,
      type: "bw_analog",
      milestone: false,
      counts: { dlouhomilov: 7, medelske: 2, benkov: 3 },
      dlouhomilovFrame: "WMSA08.1971.ZABR52.18995",
      benkovFrame: null,
      sm5: "ZABR52 / ZABR50 / ZABR53",
      dateUtc: null,
      overlayKey: null,
      note: "Podrobné snímkování 70. let s vysokým počtem snímků nad Dlouhomilovem.",
      noteEn: "Detailed early-1970s survey with dense frame coverage over Dlouhomilov.",
      noteDe: "Detaillierte Befliegung der frühen 1970er Jahre über Dlouhomilov."
    },
    {
      year: 1976,
      type: "bw_analog",
      milestone: false,
      counts: { dlouhomilov: 5, medelske: 3, benkov: 6 },
      dlouhomilovFrame: "WMSA08.1976.ZABR52.06149",
      benkovFrame: null,
      sm5: "ZABR52 / ZABR42 / ZABR51",
      dateUtc: null,
      overlayKey: null,
      note: "Krajina po scelení velkých zemědělských lánů v polovině 70. let.",
      noteEn: "Valley landscape after large-scale agricultural field consolidation in the mid-1970s.",
      noteDe: "Landschaft nach der großflächigen Flurzusammenlegung Mitte der 1970er Jahre."
    },
    {
      year: 1977,
      type: "bw_analog",
      milestone: false,
      counts: { dlouhomilov: 10, medelske: 9, benkov: 9 },
      dlouhomilovFrame: "WMSA08.1977.ZABR52.14025",
      benkovFrame: null,
      sm5: "ZABR52 / ZABR51 / ZABR42",
      dateUtc: null,
      overlayKey: null,
      note: "Nejpočetnější série analogových snímků 70. let (10 snímků nad Dlouhomilovem).",
      noteEn: "Largest analog frame series of the 1970s (10 frames over Dlouhomilov, 9 each over Medelské and Benkov).",
      noteDe: "Umfangreichste analoge Bildserie der 1970er Jahre (10 Aufnahmen über Dlouhomilov)."
    },
    {
      year: 1978,
      type: "color_analog",
      milestone: true,
      counts: { dlouhomilov: 0, medelske: 0, benkov: 5 },
      dlouhomilovFrame: null,
      benkovFrame: "WMSA24.1978.ZABR42.28218",
      sm5: "ZABR42 / ZABR33 / ZABR43",
      dateUtc: null,
      overlayKey: null,
      note: "Unikátní první barevné analogové LMS snímky (24bit RGB) – v údolí dostupné pouze pro Benkov!",
      noteEn: "Rare early color analog LMS photography (24-bit RGB) – available exclusively for Benkov!",
      noteDe: "Seltene frühe analoge Farb-Luftbilder (24-Bit-RGB) – im Tal exklusiv für Benkov verfügbar!"
    },
    {
      year: 1993,
      type: "bw_analog",
      milestone: true,
      counts: { dlouhomilov: 8, medelske: 6, benkov: 5 },
      dlouhomilovFrame: "WMSA08.1993.ZABR52.01809",
      benkovFrame: null,
      sm5: "ZABR52 / ZABR51 / ZABR43",
      dateUtc: null,
      overlayKey: null,
      note: "Počátek 90. let po roce 1989 (8 snímků Dlouhomilov, 6 Medelské, 5 Benkov).",
      noteEn: "Early post-1989 landscape survey (8 frames over Dlouhomilov, 6 Medelské, 5 Benkov).",
      noteDe: "Befliegung der frühen 1990er Jahre (8 Aufnahmen Dlouhomilov, 6 Medelské, 5 Benkov)."
    },
    {
      year: 1994,
      type: "bw_analog",
      milestone: true,
      counts: { dlouhomilov: 6, medelske: 3, benkov: 3 },
      dlouhomilovFrame: "WMSA08.1994.ZABR52.02671",
      benkovFrame: null,
      sm5: "ZABR52 / ZABR50 / ZABR43",
      dateUtc: null,
      overlayKey: null,
      note: "Rok před vyhlášením vesnické památkové zóny Dlouhomilov (VPZ 2350, 1995).",
      noteEn: "Surveyed one year prior to the declaration of the Dlouhomilov Village Monument Zone (1995).",
      noteDe: "Befliegung ein Jahr vor Ausweisung der Dorfschutz-Denkmalzone Dlouhomilov (1995)."
    },
    {
      year: 2003,
      type: "color_analog",
      milestone: true,
      counts: { dlouhomilov: 6, medelske: 3, benkov: 3 },
      dlouhomilovFrame: "WMSA24.2003.ZABR51.00006",
      benkovFrame: null,
      sm5: "ZABR51 / ZABR42 / ZABR52",
      dateUtc: null,
      overlayKey: "orto2003",
      note: "První plošně barevná série pro celé údolí (dostupná i jako živá vrstva ČÚZK WMS).",
      noteEn: "First valley-wide color series (also available as a live ČÚZK WMS map overlay).",
      noteDe: "Erste talweite Farbserie (auch als Live-WMS-Kartenebene der ČÚZK verfügbar)."
    },
    {
      year: 2006,
      type: "color_analog",
      milestone: false,
      counts: { dlouhomilov: 6, medelske: 3, benkov: 3 },
      dlouhomilovFrame: "WMSA24.2006.ZABR52.00080",
      benkovFrame: null,
      sm5: "ZABR52 / ZABR50 / ZABR42",
      dateUtc: null,
      overlayKey: "orto2006",
      note: "Barevné snímkování 2006 (WMS-ORTOARCHIV + LMS).",
      noteEn: "2006 color survey (WMS-ORTOARCHIV + LMS).",
      noteDe: "Farbbefliegung 2006 (WMS-ORTOARCHIV + LMS)."
    },
    {
      year: 2009,
      type: "color_analog",
      milestone: false,
      counts: { dlouhomilov: 2, medelske: 4, benkov: 3 },
      dlouhomilovFrame: "WMSA24.2009.ZABR42.00487",
      benkovFrame: null,
      sm5: "ZABR42 / ZABR52",
      dateUtc: null,
      overlayKey: "orto2009",
      note: "Poslední analogová barevná série před přechodem na digitální kamery.",
      noteEn: "Last analog color film series before the transition to digital aerial cameras.",
      noteDe: "Letzte analoge Farbfilmserie vor dem Übergang zu digitalen Luftbildkameras."
    },
    {
      year: 2011,
      type: "digital",
      milestone: true,
      counts: { dlouhomilov: 4, medelske: 2, benkov: 3 },
      dlouhomilovFrame: "WMSD24.2011.ZABR41.00172",
      benkovFrame: null,
      sm5: "ZABR41 / ZABR51 / ZABR53",
      dateUtc: null,
      overlayKey: null,
      note: "První snímkování digitální leteckou kamerou (WMSD24) nad naším údolím.",
      noteEn: "First digital aerial camera survey (WMSD24) over the valley.",
      noteDe: "Erste Befliegung des Tals mit einer digitalen Luftbildkamera (WMSD24)."
    },
    {
      year: 2012,
      type: "digital",
      milestone: false,
      counts: { dlouhomilov: 6, medelske: 2, benkov: 2 },
      dlouhomilovFrame: "WMSD24.2012.ZABR51.00070",
      benkovFrame: null,
      sm5: "ZABR51 / ZABR43 / ZABR53",
      dateUtc: null,
      overlayKey: "orto2012",
      note: "Digitální snímky 2012 (25 cm/px); součástí živých WMS vrstev mapy.",
      noteEn: "2012 digital imagery (25 cm/px); included in live WMS overlays.",
      noteDe: "Digitalaufnahmen 2012 (25 cm/px); als Live-WMS-Ebene integriert."
    },
    {
      year: 2014,
      type: "digital",
      milestone: false,
      counts: { dlouhomilov: 6, medelske: 3, benkov: 2 },
      dlouhomilovFrame: "WMSD24.2014.ZABR51.00798",
      benkovFrame: null,
      sm5: "ZABR51 / ZABR43 / ZABR53",
      dateUtc: null,
      overlayKey: "orto2014",
      note: "Digitální snímkování 2014 (WMS-ORTOARCHIV + LMS).",
      noteEn: "2014 digital survey (WMS-ORTOARCHIV + LMS).",
      noteDe: "Digitale Befliegung 2014 (WMS-ORTOARCHIV + LMS)."
    },
    {
      year: 2016,
      type: "digital",
      milestone: false,
      counts: { dlouhomilov: 6, medelske: 3, benkov: 6 },
      dlouhomilovFrame: "WMSD24.2016.ZABR52.00144",
      benkovFrame: null,
      sm5: "ZABR52 / ZABR41 / ZABR51",
      dateUtc: null,
      overlayKey: "orto2016",
      note: "Digitální snímkování 2016 (WMS-ORTOARCHIV + LMS).",
      noteEn: "2016 digital survey (WMS-ORTOARCHIV + LMS).",
      noteDe: "Digitale Befliegung 2016 (WMS-ORTOARCHIV + LMS)."
    },
    {
      year: 2018,
      type: "digital",
      milestone: false,
      counts: { dlouhomilov: 6, medelske: 3, benkov: 6 },
      dlouhomilovFrame: "WMSD24.2018.ZABR52.00789",
      benkovFrame: null,
      sm5: "ZABR52 / ZABR41 / ZABR51",
      dateUtc: null,
      overlayKey: "orto2018",
      note: "Digitální snímkování 2018 v počátku kůrovcové kalamity (WMS + LMS).",
      noteEn: "2018 digital survey at the onset of the bark beetle forest disturbance (WMS + LMS).",
      noteDe: "Digitale Befliegung 2018 zu Beginn der Borkenkäfer-Kalamität (WMS + LMS)."
    },
    {
      year: 2020,
      type: "digital",
      milestone: false,
      counts: { dlouhomilov: 6, medelske: 3, benkov: 6 },
      dlouhomilovFrame: "WMSD24.2020.ZABR52.01115",
      benkovFrame: null,
      sm5: "ZABR52 / ZABR41 / ZABR51",
      dateUtc: null,
      overlayKey: "orto2020",
      note: "Digitální snímkování 2020 (WMS-ORTOARCHIV + LMS).",
      noteEn: "2020 digital survey (WMS-ORTOARCHIV + LMS).",
      noteDe: "Digitale Befliegung 2020 (WMS-ORTOARCHIV + LMS)."
    },
    {
      year: 2022,
      type: "digital",
      milestone: false,
      counts: { dlouhomilov: 6, medelske: 3, benkov: 6 },
      dlouhomilovFrame: "WMSD24.2022.ZABR42.00798",
      benkovFrame: null,
      sm5: "ZABR42 / ZABR52",
      dateUtc: null,
      overlayKey: "orto2022",
      note: "Detailní digitální ortofoto 2022 (12,5 cm/px) i jednotlivé snímky LMS.",
      noteEn: "High-resolution 2022 digital orthophoto (12.5 cm/px) and LMS frames.",
      noteDe: "Hochauflösendes Digital-Orthofoto 2022 (12,5 cm/px) samt LMS-Einzelaufnahmen."
    },
    {
      year: 2024,
      type: "digital",
      milestone: false,
      counts: { dlouhomilov: 4, medelske: 3, benkov: 5 },
      dlouhomilovFrame: "WMSD24.2024.ZABR42.00756",
      benkovFrame: null,
      sm5: "ZABR42 / ZABR52",
      dateUtc: null,
      overlayKey: null,
      note: "Nové digitální měřické snímky z roku 2024 v Archivu LMS.",
      noteEn: "Recent 2024 digital survey frames in the ČÚZK LMS Archive.",
      noteDe: "Aktuelle digitale Messbilder aus dem Jahr 2024 im ČÚZK-LMS-Archiv."
    },
    {
      year: 2026,
      type: "digital",
      milestone: true,
      counts: { dlouhomilov: 3, medelske: 6, benkov: 6 },
      dlouhomilovFrame: "WMSD32.2026.ZABR52.00704",
      benkovFrame: null,
      sm5: "ZABR52 / ZABR42",
      dateUtc: null,
      overlayKey: null,
      note: "Nejnovější letecké měřické snímky z roku 2026 (WMSD32).",
      noteEn: "Most recent 2026 aerial survey frames (WMSD32).",
      noteDe: "Neueste Luftbild-Messaufnahmen aus dem Jahr 2026 (WMSD32)."
    }
  ]
};
