/**
 * Databáze historických map pro obec Dlouhomilov & Benkov (1716–1983)
 * Obsahuje autentická metadata, popisy, měřítka, anotace, přesné adresy na zdroj
 * z Mapové sbírky PřF UK / Chartae Antiquae a georeferenční parametry.
 */

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
    annotation: "Rukopisná kolorovaná mapa v měřítku 1 : 28 800. Digitalizaci provedl VÚGTK v rámci projektu NAKI DF11P01OVV021.",
    imageFile: "assets/maps/dlouhomilov_1764_vojenske_1.jpg",
    externalUrl: "https://chartae-antiquae.cz/cs/maps/12689/?view=-23.21875,76.1484375,7",
    isOverlay: true,
    overlayKey: "vojenske1_1764",
    defaultBounds: [
      [49.884288, 16.973586],
      [49.915788, 17.027586]
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
      benkov: null,
      medelske: null
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
    subTitle: "Katastrální mapa k. ú. Dlouhomilov (sign. MOR102618340)",
    year: "1834",
    period: "Habsburská monarchie (František I.)",
    scale: "1 : 2 880",
    author: "Geometři c. k. vyměřovacího úřadu (k.ú. Lomigsdorf)",
    archive: "Ústřední archiv zeměměřictví a katastru (ÚAZK ČÚZK)",
    annotation: "Originální kolorovaný císařský otisk stabilního katastru 1 : 2 880. Zobrazuje všechny domy, parcely, barvy staveb (červená = nespalná, žlutá = spalná) i parcelní čísla.",
    imageFile: "assets/maps/dlouhomilov_cadastre_1834_web.png",
    externalUrl: "https://ags.cuzk.cz/archiv/openmap.html?typ=skic&idrost=MOR102618340",
    isOverlay: true,
    overlayKey: "cadastre1834",
    defaultBounds: [
      [49.905502, 16.986672],
      [49.910894, 16.994724]
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
    description: "Nejdokonalejší katastrální pramen 19. století. Zachycuje každý dům, stodolu, zahradu i pole s parcelními čísly a jmény majitelů v indikačních skicách. Grunt u Dvořáků čp. 29 je zakreslen jako dvůr (st. 63) se samostatnou stodolou (st. 62).",
    keyFeatures: [
      "Měřítko 1 : 2 880 (1 sáh na mapě = 100 sáhů ve skutečnosti)",
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
    archive: "Fakulta životního prostředí Univerzita J. E. Purkyně v Ústí nad Labem (FŽP UJEP)",
    annotation: "Rukopisné mapování založené na triangulační síti Stabilního katastru. Digitalizoval VÚGTK v rámci projektu NAKI DF11P01OVV021.",
    imageFile: "assets/maps/dlouhomilov_1838_vojenske_2.jpg",
    externalUrl: "https://chartae-antiquae.cz/cs/maps/13472/?view=-29.96875,185.953125,6",
    isOverlay: true,
    overlayKey: "vojenske2_1838",
    defaultBounds: [
      [49.901834, 16.981195],
      [49.912034, 17.000983]
    ],
    localityBounds: {
      dlouhomilov: [
        [49.9025, 16.9850],
        [49.9125, 16.9970]
      ]
    },
    category: "military",
    toponyms: {
      dlouhomilov: "Dlouhomilov",
      benkov: null,
      medelske: null
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
    annotation: "1 mapa : černobílý tisk, 55 x 72 cm na listu 60 x 81,5 cm. Digitalizaci provedl VÚGTK v rámci projektu NAKI DF11P01OVV021.",
    imageFile: "assets/maps/dlouhomilov_1874_vojenske_3.jpg",
    externalUrl: "https://chartae-antiquae.cz/cs/maps/6178/?view=-109.15625,130.96875,5",
    isOverlay: true,
    overlayKey: "vojenske3_1874",
    defaultBounds: [
      [49.888116, 16.966853],
      [49.918116, 17.028853]
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
    annotation: "Rozměr: 97,5 x 75 cm, Jazyk: něm., Provedení: tisk, Druh mapy: Topografická mapová díla, Rozměr mapového pole: 72 x 55,5 cm. Projekt NAKI DF11P01OVV021.",
    imageFile: "assets/maps/dlouhomilov_1937_vojenske_3.jpg",
    externalUrl: "https://chartae-antiquae.cz/cs/maps/44149/?view=-97.96875,111.4375,5",
    isOverlay: true,
    overlayKey: "vojenske3_1937",
    defaultBounds: [
      [49.887645, 16.96267],
      [49.925145, 17.04017]
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
    annotation: "1 mapa : černobílý tisk, 55 x 72 cm na listu 57 x 72 cm. Mapa podlepená plátnem. Vydáno VIII. 1945. Projekt NAKI DF11P01OVV021.",
    imageFile: "assets/maps/dlouhomilov_1945_vojenske_3.jpg",
    externalUrl: "https://chartae-antiquae.cz/cs/maps/6177/?view=-107.40625,119.78125,5",
    isOverlay: false,
    category: "military",
    toponyms: {
      dlouhomilov: "Dlouhomilov",
      benkov: "Benkov",
      medelske: "Medelske"
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
    annotation: "Topografická mapa ČSR v systému S-1952 (Gaussovo-Krügerovo zobrazení). Přesné vrstevnice, kóty a vojenský polohopis.",
    imageFile: "assets/maps/dlouhomilov_topomap_1952_web.jpg",
    externalUrl: "https://ags.cuzk.cz/archiv/",
    isOverlay: true,
    overlayKey: "topo1952",
    defaultBounds: [
      [49.899851, 16.946987],
      [49.925179, 17.002435]
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
      benkov: "Benkov",
      medelske: "Medelské"
    },
    description: "Poválečná vojenská mapa v novém souřadnicovém systému S-1952 (systém Varšavské smlouvy). Přesně zobrazuje Dlouhomilov, Benkov, Brníčko a Kolšov.",
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
  }
];
