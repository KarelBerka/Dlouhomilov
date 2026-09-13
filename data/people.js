/**
 * Biografická a genealogická databáze obyvatel obce Dlouhomilov
 * Propojuje záznamy z matrik narození (N), oddaných (O), zemřelých (Z),
 * sčítacích operátů (1857–1921) a gruntovních knih s přímými vazbami na archivní scany.
 */
const peopleData = [
  {
    id: "p_alois_dvorak_1830",
    name: "Alois Dvořák",
    birthYear: "1830",
    deathYear: "1908",
    lifeSpan: "1830 – 1908",
    houseNumber: "29",
    houseId: "cp29",
    categoryKey: "grunt",
    categoryLabel: "Držitel gruntu / Hospodář",
    categoryIcon: "🏡",
    categoryBadgeClass: "bg-emerald-100 text-emerald-950 border-emerald-300",
    role: "Rolník na vlastním gruntě a tkadlec",
    father: "Johann Dvořák (*1795)",
    mother: "Elisabeth Frank (*cca 1800)",
    spouse: "Magdalena Dvořáková (*1830)",
    children: ["Jan Dvořák (*1866)", "Emílie Dvořáková (*1870)", "Josef Dvořák (*1874)"],
    biography: "Významný hospodář selského gruntu čp. 29 ve druhé polovině 19. století. Vedle zemědělství provozoval tkalcovství. Dožil se 78 let a zemřel v Dlouhomilově roku 1908.",
    events: [
      {
        type: "birth",
        year: "1830",
        date: "2. září 1830",
        place: "Dlouhomilov čp. 29",
        description: "Narození a křest v kostele Všech svatých v Dlouhomilově. Otec Johann Dvořák (sedlák), matka Elisabeth roz. Frank.",
        source: "Farní úřad Dlouhomilov, Kniha narozených 1786–1855, sign. Za II 1, ZAO.",
        scanFile: "assets/archives/matriky/N_inv_c_8359_sig_Za_II_1_1786_-_1855_Dlouhomilov-_Horni_Olesna-_Dolni_Olesna_0062.jpg",
        scanTitle: "Matrika narozených (1830) – křest Aloise Dvořáka"
      },
      {
        type: "marriage",
        year: "cca 1858",
        date: "kolem 1858",
        place: "Dlouhomilov",
        description: "Sňatek s Magdalenou (*1830).",
        source: "Farní matrika oddaných Dlouhomilov.",
        scanFile: null
      },
      {
        type: "census",
        year: "1890",
        date: "31. prosince 1890",
        place: "Dlouhomilov čp. 29",
        description: "Zapsán jako hlava rodiny a hospodář (rolník a tkadlec) s manž. Magdalenou a dětmi Janem, Josefem a Emílií.",
        source: "Sčítání lidu 1890, fond Okresní hejtmanství Zábřeh, ZAO.",
        scanFile: "assets/archives/cp29/su1000_c_pom_411_inv_c_1560_karton_356_null_dlouhomilov_serie_cp_1_3_50_52_53_1890_0084.jpg",
        scanTitle: "Sčítání lidu 1890 – domácnost Aloise Dvořáka"
      },
      {
        type: "death",
        year: "1908",
        date: "14. října 1908",
        place: "Dlouhomilov čp. 29",
        description: "Úmrtí ve věku 78 let na sešlost věkem. Pohřben na místním hřbitově u kostela Všech svatých.",
        source: "Farní úřad Dlouhomilov, Kniha zemřelých 1889–1929, inv. č. 11248, sign. Za II 7, ZAO.",
        scanFile: "assets/archives/matriky/O-_I-O-_Z-_I-Z_inv_c_11248_sig_Za_II_7_1889_-_1929_Dlouhomilov-_Horni_Olesna-_Dolni_Olesna_0342.jpg",
        scanTitle: "Kniha zemřelých (1908) – úmrtní zápis Aloise Dvořáka"
      }
    ]
  },

  {
    id: "p_johann_dvorak_1795",
    name: "Johann (Jan) Dvořák",
    birthYear: "1795",
    deathYear: "cca 1865",
    lifeSpan: "1795 – cca 1865",
    houseNumber: "29",
    houseId: "cp29",
    categoryKey: "grunt",
    categoryLabel: "Držitel gruntu / Hospodář",
    categoryIcon: "🏡",
    categoryBadgeClass: "bg-emerald-100 text-emerald-950 border-emerald-300",
    role: "Majitel gruntu (Grundbesitzer / Hausbesitzer)",
    father: "Pavel Dvořák (držitel gruntu v 18. stol.)",
    mother: "-",
    spouse: "Elisabeth Frank (*cca 1800)",
    children: ["Dr. Jan Dvořák (*1826)", "Alois Dvořák (*1830)", "Karel Dvořák (*1839)"],
    biography: "Hospodář na gruntě čp. 29 v první polovině 19. století v době vzniku Stabilního katastru (1834). Jeho nejstarší syn Jan vystudoval práva v Praze a stal se doktorem práv.",
    events: [
      {
        type: "birth",
        year: "1795",
        date: "2. srpna 1795",
        place: "Dlouhomilov čp. 29",
        description: "Narození na rodném gruntě v Dlouhomilově.",
        source: "Farní matrika narozených Dlouhomilov (ZAO).",
        scanFile: "assets/archives/matriky/N_inv_c_8359_sig_Za_II_1_1786_-_1855_Dlouhomilov-_Horni_Olesna-_Dolni_Olesna_0062.jpg",
        scanTitle: "Matrika narozených – rod Dvořáků"
      },
      {
        type: "cadastre",
        year: "1834",
        date: "1834",
        place: "Dlouhomilov čp. 29",
        description: "Zápis ve Stabilním katastru (Císařský otisk) pro stavební parcelu st. 38 jako Rustikal-Besitzer.",
        source: "ÚAZK ČÚZK, Stabilní katastr 1834, sign. MOR102618340.",
        scanFile: "assets/archives/cp29/katastr_1834.svg",
        scanTitle: "Císařský otisk 1834 – parcela st. 38"
      },
      {
        type: "census",
        year: "1857",
        date: "31. října 1857",
        place: "Dlouhomilov čp. 29",
        description: "Zapsán jako Hausbesitzer / Grundbesitzer. Na archu jsou uvedeni synové Johann (*1826, Jurist in Prag) a Karl (*1839).",
        source: "ZAO, Sčítání lidu 1857, karton 253, dům čp. 29.",
        scanFile: "assets/archives/cp29/su1000_c_pom_411_inv_c_1299_karton_253_null_dlouhomilov_serie_cp_1_80_1857_0119.jpg",
        scanTitle: "Sčítací arch 1857 – Johann Dvořák"
      }
    ]
  },

  {
    id: "p_dr_jan_dvorak_1826",
    name: "JUDr. Jan Dvořák",
    birthYear: "1826",
    deathYear: "-",
    lifeSpan: "*1826",
    houseNumber: "29",
    houseId: "cp29",
    categoryKey: "vzdelanec",
    categoryLabel: "Vzdělanec / Správa / Duchovní",
    categoryIcon: "🎓",
    categoryBadgeClass: "bg-indigo-100 text-indigo-950 border-indigo-300",
    role: "Doktor práv (Jurist in Prag / Advokát)",
    father: "Johann Dvořák (*1795)",
    mother: "Elisabeth Frank",
    spouse: "-",
    children: [],
    biography: "Syn sedláka Johanna Dvořáka z čp. 29. Získal vysokoškolské právnické vzdělání na univerzitě v Praze. Ve sčítání 1857 je zaznamenán jako 'Jurist in Prag', ve sčítání 1869 je zapsán jako bratr hospodáře s titulem doktor.",
    events: [
      {
        type: "birth",
        year: "1826",
        date: "29. března 1826",
        place: "Dlouhomilov čp. 29",
        description: "Narození na gruntě čp. 29.",
        source: "Farní matrika Dlouhomilov.",
        scanFile: "assets/archives/matriky/N_inv_c_8359_sig_Za_II_1_1786_-_1855_Dlouhomilov-_Horni_Olesna-_Dolni_Olesna_0062.jpg",
        scanTitle: "Křestní zápis Jana Dvořáka"
      },
      {
        type: "census",
        year: "1857",
        date: "31. října 1857",
        place: "Dlouhomilov čp. 29 / Praha",
        description: "Poznámka ve sčítacím archu: 'Jurist in Prag' (studující právník v Praze).",
        source: "ZAO, Sčítání 1857, karton 253, snímek 0120.",
        scanFile: "assets/archives/cp29/su1000_c_pom_411_inv_c_1299_karton_253_null_dlouhomilov_serie_cp_1_80_1857_0120.jpg",
        scanTitle: "Sčítací arch 1857 – záznam Jurist in Prag"
      },
      {
        type: "census",
        year: "1869",
        date: "31. prosince 1869",
        place: "Dlouhomilov čp. 29",
        description: "Zapsán u bratra Karla Dvořáka jako 'Jan Dvořák, bratr, doktor'.",
        source: "ZAO, Sčítání 1869, karton 300, snímek 0106.",
        scanFile: "assets/archives/cp29/su1000_c_pom_411_inv_c_1392_karton_300_null_dlouhomilov_serie_cp_1_80_1869_0106.jpg",
        scanTitle: "Sčítací arch 1869 – Dr. Jan Dvořák"
      }
    ]
  },

  {
    id: "p_karel_dvorak_1839",
    name: "Karel Dvořák",
    birthYear: "1839",
    deathYear: "-",
    lifeSpan: "*1839",
    houseNumber: "29",
    houseId: "cp29",
    categoryKey: "grunt",
    categoryLabel: "Držitel gruntu / Hospodář",
    categoryIcon: "🏡",
    categoryBadgeClass: "bg-emerald-100 text-emerald-950 border-emerald-300",
    role: "Hospodář na gruntě (Bauer / Sedlák)",
    father: "Johann Dvořák (*1795)",
    mother: "Elisabeth Frank",
    spouse: "Karolína Dvořáková (*1840, roz. z Poděbrad)",
    children: ["Oswald Dvořák (*1866)", "Emilie Dvořáková (*1868)", "Paulina Dvořáková (*1869)"],
    biography: "Hospodář na gruntě čp. 29 v 60. letech 19. století. Za jeho držby byl na usedlosti vykazován rozsáhlý chov 49 ovcí a tažných koní. Později působil též v Hrotovicích.",
    events: [
      {
        type: "birth",
        year: "1839",
        date: "3. července 1839",
        place: "Dlouhomilov čp. 29",
        description: "Narození na gruntě čp. 29. Křestní list přiložen k archiváliím ze 6. 10. 1857.",
        source: "Farní matrika narozených Dlouhomilov & křestní list.",
        scanFile: "assets/archives/cp29/su1000_c_pom_411_inv_c_1299_karton_253_null_dlouhomilov_serie_cp_1_80_1857_0119.jpg",
        scanTitle: "Křestní záznam Karla Dvořáka"
      },
      {
        type: "census",
        year: "1869",
        date: "31. prosince 1869",
        place: "Dlouhomilov čp. 29",
        description: "Hlava rodiny na usedlosti. Sčítací arch obsahuje podrobný soupis polního hospodářství a chovaného zvířectva.",
        source: "ZAO, Sčítání 1869, karton 300, snímky 0105–0108.",
        scanFile: "assets/archives/cp29/su1000_c_pom_411_inv_c_1392_karton_300_null_dlouhomilov_serie_cp_1_80_1869_0105.jpg",
        scanTitle: "Sčítací arch 1869 – Karel Dvořák"
      }
    ]
  },

  {
    id: "p_josef_dvorak_1877",
    name: "Josef Dvořák",
    birthYear: "1877",
    deathYear: "po 1930",
    lifeSpan: "1877 – po 1930",
    houseNumber: "29",
    houseId: "cp29",
    categoryKey: "grunt",
    categoryLabel: "Držitel gruntu / Hospodář",
    categoryIcon: "🏡",
    categoryBadgeClass: "bg-emerald-100 text-emerald-950 border-emerald-300",
    role: "Samostatný rolník a majitel usedlosti v období 1. ČSR",
    father: "Alois Dvořák (1830–1908)",
    mother: "Magdalena Dvořáková (*1830)",
    spouse: "Amalie Dvořáková (*1878/1888, roz. Motyková z Bludova)",
    children: ["Josef Dvořák ml. (*1903)", "Marie Dvořáková (*1906)"],
    biography: "Klíčový hospodář přelomu 19. a 20. století a první československé republiky. Pevně vedl selský grunt, zaměstnával čeleď a rozvíjel chov skotu a koní.",
    events: [
      {
        type: "birth",
        year: "1877",
        date: "22. února 1877 (dle sčítání 1921) / 3. června 1879 (dle sčítání 1910)",
        place: "Dlouhomilov čp. 29",
        description: "Narození a křest v Dlouhomilově.",
        source: "Farní matrika narozených Dlouhomilov, ZAO.",
        scanFile: "assets/archives/matriky/N_inv_c_8361_sig_Za_II_3_1864_-_1890_Dlouhomilov-_Horni_Olesna-_Dolni_Olesna_0287.jpg",
        scanTitle: "Matrika narozených – křest Josefa Dvořáka"
      },
      {
        type: "marriage",
        year: "1902",
        date: "kolem 1902",
        place: "Bludov / Dlouhomilov",
        description: "Sňatek s Amalií Motykovou (*1878/1888) z Bludova.",
        source: "Farní matrika oddaných.",
        scanFile: "assets/archives/matriky/O-_I-O-_Z-_I-Z_inv_c_11248_sig_Za_II_7_1889_-_1929_Dlouhomilov-_Horni_Olesna-_Dolni_Olesna_0342.jpg",
        scanTitle: "Matrika oddaných – sňatek Josefa Dvořáka"
      },
      {
        type: "census",
        year: "1910",
        date: "31. prosince 1910",
        place: "Dlouhomilov čp. 29",
        description: "Zapsán jako rolnický majitel se svou ženou Amalií, tchyní Amalií Motykovou a čeledí.",
        source: "ZAO, Sčítání 1910, karton 436, snímek 0083.",
        scanFile: "assets/archives/cp29/su1000_c_pom_411_inv_c_1765_karton_436_null_dlouhomilov_serie_cp_1_115_1910_0083.jpg",
        scanTitle: "Sčítací arch 1910 – Josef Dvořák"
      },
      {
        type: "census",
        year: "1921",
        date: "15. února 1921",
        place: "Dlouhomilov čp. 29",
        description: "První sčítání lidu ČSR: samostatný rolník a majitel usedlosti s manž. Amalií, dětmi Josefem a Marií a 4 zaměstnanci.",
        source: "SOkA Šumperk / ZAO, Sčítání 1921, fascikl 3, snímek 0160.",
        scanFile: "assets/archives/cp29/su1000_c_pom_411_inv_c_1863_fascikl_3_null_dlouhomilov_serie_cp_1_118_1921_0160.jpg",
        scanTitle: "Sčítací arch 1921 – Josef Dvořák"
      }
    ]
  },

  {
    id: "p_amalie_dvorakova_1878",
    name: "Amalie Dvořáková (roz. Motyková)",
    birthYear: "1878",
    deathYear: "po 1930",
    lifeSpan: "1878 – po 1930",
    houseNumber: "29",
    houseId: "cp29",
    categoryKey: "rodina",
    categoryLabel: "Člen rodiny hospodáře",
    categoryIcon: "👨‍👩‍👧",
    categoryBadgeClass: "bg-sky-100 text-sky-950 border-sky-300",
    role: "Hospodyně na usedlosti čp. 29",
    father: "Hospodář Motyka (Bludov)",
    mother: "Amalie Motyková (*1846, Dlouhomilov)",
    spouse: "Josef Dvořák (*1877)",
    children: ["Josef Dvořák ml. (*1903)", "Marie Dvořáková (*1906)"],
    biography: "Pocházela z rodu Motyků z Bludova. V Dlouhomilově vedla velkou selskou domácnost a podílela se na správě hospodářství usedlosti čp. 29.",
    events: [
      {
        type: "birth",
        year: "1878",
        date: "22. října 1878",
        place: "Bludov",
        description: "Narození v Bludově.",
        source: "Farní matrika Bludov.",
        scanFile: null
      },
      {
        type: "census",
        year: "1910",
        date: "31. prosince 1910",
        place: "Dlouhomilov čp. 29",
        description: "Zapsána jako manželka hospodáře.",
        source: "ZAO, Sčítání 1910.",
        scanFile: "assets/archives/cp29/su1000_c_pom_411_inv_c_1765_karton_436_null_dlouhomilov_serie_cp_1_115_1910_0083.jpg",
        scanTitle: "Sčítací arch 1910"
      },
      {
        type: "census",
        year: "1921",
        date: "15. února 1921",
        place: "Dlouhomilov čp. 29",
        description: "Zapsána v sčítacím archu ČSR 1921.",
        source: "SOkA Šumperk / ZAO, Sčítání 1921.",
        scanFile: "assets/archives/cp29/su1000_c_pom_411_inv_c_1863_fascikl_3_null_dlouhomilov_serie_cp_1_118_1921_0160.jpg",
        scanTitle: "Sčítací arch 1921"
      }
    ]
  },

  {
    id: "p_pavel_dvorak_1750",
    name: "Pavel Dvořák",
    birthYear: "cca 1750",
    deathYear: "cca 1815",
    lifeSpan: "cca 1750 – cca 1815",
    houseNumber: "29",
    houseId: "cp29",
    categoryKey: "grunt",
    categoryLabel: "Držitel gruntu / Hospodář",
    categoryIcon: "🏡",
    categoryBadgeClass: "bg-emerald-100 text-emerald-950 border-emerald-300",
    role: "Láník a držitel gruntu v 18. století",
    father: "-",
    mother: "-",
    spouse: "-",
    children: ["Johann Dvořák (*1795)"],
    biography: "Předek rodu Dvořáků zapsaný v dochované Gruntovní knize pro vsi Dlouhomilov a Medelské (fond Velkostatku Zábřeh).",
    events: [
      {
        type: "land_book",
        year: "1780–1800",
        date: "kolem 1785",
        place: "Dlouhomilov čp. 29",
        description: "Zápis v gruntovní knize o držení a povinnostech selského gruntu čp. 29 vůči vrchnosti panství Zábřeh.",
        source: "Zemský archiv v Opavě, fond Velkostatek Zábřeh, Gruntovní kniha pro vsi Dlouhomilov a Medelské, inv. č. 164, sign. 428, fol. 191–212.",
        scanFile: "assets/archives/gruntovnice/Gruntovni_kniha_pro_vsi_Dluhomilov_a_Medelske_inv_c_164_sig_428_191.jpg",
        scanTitle: "Gruntovní kniha Dlouhomilov – Grunt Pavla Dvořáka čp. 29"
      }
    ]
  }
];
