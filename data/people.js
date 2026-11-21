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
    aliases: ["Alois Dvořák", "Alois Dworák", "Aloisius Dworzak"],
    linkedCensusIds: ["cen_345", "cen_362"],
    biography: "Významný hospodář selského gruntu čp. 29 ve druhé polovině 19. století. Vedle zemědělství provozoval tkalcovství. Dožil se 78 let a zemřel v Dlouhomilově roku 1908.",
    events: [
      {
        type: "Narození",
        year: "1830",
        date: "2. září 1830",
        place: "Dlouhomilov čp. 29",
        description: "Narození a křest v kostele Všech svatých v Dlouhomilově. Otec Johann Dvořák (sedlák), matka Elisabeth roz. Frank.",
        transcription: "Den 2. September 1830 geboren und getauft: Aloisius. Religion: katholisch, Geschlecht: männlich, ehelich. Vater: Johann Dworzak, Bauer allda. Mutter: Elisabeth Tochter des Georg Frank, Gärtlers von Lomigsdorf.",
        translation: "Dne 2. září 1830 narozen a pokřtěn: Alois. Náboženství: katolické, pohlaví: mužské, lože manželské. Otec: Jan (Johann) Dvořák, zdejší sedlák. Matka: Alžběta, dcera Jiřího Franka, chalupníka z Dlouhomilova.",
        source: "Farní úřad Dlouhomilov, Kniha narozených 1786–1855, inv. č. 8359, sign. Za II 1, ZAO.",
        scanFile: "assets/archives/matriky/N_inv_c_8359_sig_Za_II_1_1786_-_1855_Dlouhomilov-_Horni_Olesna-_Dolni_Olesna_0062.jpg",
        scanTitle: "Matrika narozených (1830) – křest Aloise Dvořáka"
      },
      {
        type: "Sňatek",
        year: "cca 1858",
        date: "kolem 1858",
        place: "Dlouhomilov",
        description: "Sňatek s Magdalenou (*1830).",
        source: "Farní matrika oddaných Dlouhomilov.",
        scanFile: null
      },
      {
        type: "Sčítání lidu",
        year: "1890",
        date: "31. prosince 1890",
        place: "Dlouhomilov čp. 29",
        description: "Zapsán jako hlava rodiny a hospodář (rolník a tkadlec) s manž. Magdalenou a dětmi Janem, Josefem a Emílií.",
        source: "Sčítání lidu 1890, fond Okresní hejtmanství Zábřeh, ZAO.",
        scanFile: "assets/archives/cp29/su1000_c_pom_411_inv_c_1560_karton_356_null_dlouhomilov_serie_cp_1_3_50_52_53_1890_0084.jpg",
        scanTitle: "Sčítací lidu 1890 – domácnost Aloise Dvořáka"
      },
      {
        type: "Úmrtí",
        year: "1908",
        date: "14. října 1908",
        place: "Dlouhomilov čp. 29",
        description: "Úmrtí ve věku 78 let na sešlost věkem. Pohřben na místním hřbitově u kostela Všech svatých.",
        transcription: "Gestorben am 14. October 1908, begraben am 16. October. Alois Dvořák, Auszügler und gewesener Bauer in Lomigsdorf Nr. 29, ehelicher Sohn des Johann Dvořák, Bauers in Lomigsdorf. Todesursache: Altersschwäche.",
        translation: "Zemřel 14. října 1908, pohřben 16. října. Alois Dvořák, výměnkář a bývalý sedlák v Dlouhomilově čp. 29, manželský syn Jana Dvořáka, sedláka v Dlouhomilově. Příčina úmrtí: sešlost věkem (Altersschwäche).",
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
    deathYear: "1868",
    lifeSpan: "1795 – 1868",
    houseNumber: "29",
    houseId: "cp29",
    categoryKey: "grunt",
    categoryLabel: "Držitel gruntu / Hospodář",
    categoryIcon: "🏡",
    categoryBadgeClass: "bg-emerald-100 text-emerald-950 border-emerald-300",
    role: "Majitel gruntu (Grundbesitzer / Hausbesitzer)",
    father: "Jan Dvořák (hospodář na čp. 29 od r. 1777, syn rychtáře Pavla Dvořáka)",
    mother: "Marianna Dvořáková",
    spouse: "Elisabeth Frank (*cca 1800, svatební smlouva 1819/1820)",
    children: ["Dr. Jan Dvořák (*1826)", "Alois Dvořák (*1830)", "Karel Dvořák (*1839)"],
    aliases: ["Johann (Jan) Dvořák", "Johann Dworák", "Johann Dvořák", "Jan Dvořák", "Johann Dworžak"],
    linkedCensusIds: ["cen_333"],
    biography: "Hospodář na gruntě čp. 29 v první polovině 19. století (1819–1868). Pozemková kniha (inv. č. 207, fol. 126v–127) dokládá, že grunt převzal po † otci Janovi 3. ledna / 9. června 1819 za 2000 fl. W.W. (s podíly pro bratra Petra a matku Mariannu) a s manželkou Alžbětou roz. Frankovou uzavřel svatební smlouvu (8. 1. 1819 / 4. 4. 1820). Zemřel 4. dubna 1868 (odevzdací listina pro syna Karla z 29. 8. 1868, inv. 207 fol. 131v). Jeho nejstarší syn Jan vystudoval práva v Praze a stal se doktorem práv.",
    events: [
      {
        type: "Narození",
        year: "1795",
        date: "2. srpna 1795",
        place: "Dlouhomilov čp. 29",
        description: "Zápis o narození na rodném gruntě v matrice narozených farnosti Dlouhomilov.",
        transcription: "Den 2. August 1795 geboren und getauft: Johann. Religion: katholisch, ehelich. Vater: Georg Dworzak Gärtler. Mutter: Elisabeth geborene Frank. Pathen: Johann Wolfl Erbrichter, Anna des Joseph Schaniel Eheweib.",
        translation: "Dne 2. srpna 1795 narozen a pokřtěn: Johann (Jan). Náboženství: katolické, manželské. Otec: Jiří (Georg) Dvořák, zahradník (domkář). Matka: Alžběta (Elisabeth) rozená Franková. Kmotři: Johann Wölfl, dědičný rychtář; Anna, manželka Josefa Šaněla.",
        source: "Farní matrika narozených Dlouhomilov, inv. č. 8359, sign. Za II 1, ZAO.",
        scanFile: "assets/archives/matriky/N_inv_c_8359_sig_Za_II_1_1786_-_1855_Dlouhomilov-_Horni_Olesna-_Dolni_Olesna_0062.jpg",
        scanTitle: "Matrika narozených (1795) – rod Dvořáků"
      },
      {
        type: "Gruntovní kniha",
        year: "1819",
        date: "3. ledna / 9. června 1819",
        place: "Dlouhomilov čp. 29",
        description: "Převzetí selského gruntu čp. 29 po † otci Janu Dvořákovi v ceně 2000 fl. W.W. (podíly bratru Petru 1500 fl. a matce Marianně 500 fl.) a svatební smlouva s Elisabeth Frankovou z 8. 1. 1819 / 4. 4. 1820 (2200 fl.). Zemřel 4. dubna 1868.",
        source: "ZAO Opava – pobočka Olomouc, fond Velkostatek Zábřeh (NAD 1549), Gruntovní kniha inv. č. 207, fol. 126v–127 (sn. 62) a fol. 131v (sn. 67).",
        scanFile: "assets/archives/gruntovnice/zao_gk_inv207_sn062_cp29_johann_dvorak_1819.jpg",
        scanTitle: "Pozemková kniha Dlouhomilov (inv. 207, sn. 62) – Johann Dvořák 1819/1820"
      },
      {
        type: "Pozemková kniha / Katastr",
        year: "1834",
        date: "1834",
        place: "Dlouhomilov čp. 29",
        description: "Zápis ve Stabilním katastru (Císařský povinný otisk) pro stavební parcelu st. 38 jako Rustikal-Besitzer (držitel gruntu).",
        transcription: "Bauparzelle Nr. 38, Hofraum und Wohnhaus Nr. 29. Rustikal-Besitzer: Johann Dworžak, Bauer in Lomigsdorf.",
        translation: "Stavební parcela č. 38, hospodářský dvůr a obytný dům čp. 29. Rustikální držitel: Jan (Johann) Dvořák, sedlák v Dlouhomilově.",
        source: "ÚAZK ČÚZK, Stabilní katastr 1834, sign. MOR102618340.",
        scanFile: "assets/archives/cp29/katastr_1834_autenticky.jpg",
        scanTitle: "Císařský povinný otisk 1834 – stavební parcela st. 38 (čp. 29)"
      },
      {
        type: "Sčítání lidu",
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
    spouse: "Neuvedeno",
    children: [],
    aliases: ["JUDr. Jan Dvořák", "Dr. Jan Dvořák", "Johann Dworák", "Johann Dvořák", "Jan Dvořák"],
    linkedCensusIds: ["cen_334", "cen_341"],
    biography: "Syn sedláka Johanna Dvořáka z čp. 29. Získal vysokoškolské právnické vzdělání na univerzitě v Praze. Ve sčítání 1857 je zaznamenán jako 'Jurist in Prag', ve sčítání 1869 je zapsán jako bratr hospodáře s titulem doktor.",
    events: [
      {
        type: "Narození",
        year: "1826",
        date: "29. března 1826",
        place: "Dlouhomilov čp. 29",
        description: "Narození na gruntě čp. 29.",
        source: "Farní matrika Dlouhomilov, ZAO.",
        scanFile: "assets/archives/matriky/N_inv_c_8359_sig_Za_II_1_1786_-_1855_Dlouhomilov-_Horni_Olesna-_Dolni_Olesna_0062.jpg",
        scanTitle: "Křestní zápis Jana Dvořáka"
      },
      {
        type: "Sčítání lidu",
        year: "1857",
        date: "31. října 1857",
        place: "Dlouhomilov čp. 29 / Praha",
        description: "Poznámka ve sčítacím archu: 'Jurist in Prag' (studující právník v Praze).",
        source: "ZAO, Sčítání 1857, karton 253, snímek 0120.",
        scanFile: "assets/archives/cp29/su1000_c_pom_411_inv_c_1299_karton_253_null_dlouhomilov_serie_cp_1_80_1857_0120.jpg",
        scanTitle: "Sčítací arch 1857 – záznam Jurist in Prag"
      },
      {
        type: "Sčítání lidu",
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
    deathYear: "po 1890",
    lifeSpan: "*1839 – po 1890",
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
    aliases: ["Karel Dvořák", "Karl Dworák", "Karl Dvořák"],
    linkedCensusIds: ["cen_335", "cen_336"],
    biography: "Hospodář na gruntě čp. 29 v 60. letech 19. století. Za jeho držby byl na usedlosti vykazován rozsáhlý chov 49 ovcí a tažných koní. Později působil též v Hrotovicích.",
    events: [
      {
        type: "Narození",
        year: "1839",
        date: "3. července 1839",
        place: "Dlouhomilov čp. 29",
        description: "Narození na gruntě čp. 29. Křestní list přiložen k archiváliím ze 6. 10. 1857.",
        source: "Farní matrika narozených Dlouhomilov & křestní list.",
        scanFile: "assets/archives/cp29/su1000_c_pom_411_inv_c_1299_karton_253_null_dlouhomilov_serie_cp_1_80_1857_0119.jpg",
        scanTitle: "Křestní záznam Karla Dvořáka"
      },
      {
        type: "Sčítání lidu",
        year: "1869",
        date: "31. prosince 1869",
        place: "Dlouhomilov čp. 29",
        description: "Hlava rodiny na usedlosti. Sčítací arch obsahuje podrobný soupis polního hospodářství a chovaného zvířectva.",
        source: "ZAO, Sčítání 1869, karton 300, snímky 0105–0108.",
        scanFile: "assets/archives/cp29/su1000_c_pom_411_inv_c_1392_karton_300_null_dlouhomilov_serie_cp_1_80_1869_0105.jpg",
        scanTitle: "Sčítací arch 1869 – Karel Dvořák"
      },
      {
        type: "Gruntovní kniha",
        year: "1868",
        date: "29. srpna 1868 / 8. května 1869",
        place: "Dlouhomilov čp. 29",
        description: "Dědictví selského gruntu čp. 29 spolu s činžovní loukou Haltýř v ceně 6000 fl. po otci Johannu Dvořákovi zemřelém 4. 4. 1868 (zmiňuje sourozence Johanna, Annu, Mariannu a Terezii; navazující zápůjčky a exekuce z let 1873–1878).",
        source: "ZAO Opava – pobočka Olomouc, fond Velkostatek Zábřeh (NAD 1549), Gruntovní kniha inv. č. 207, fol. 131v–133 (sn. 67–68).",
        scanFile: "assets/archives/gruntovnice/zao_gk_inv207_sn067_cp29_karl_dvorak_1868.jpg",
        scanTitle: "Pozemková kniha Dlouhomilov (inv. 207, sn. 67) – odevzdací listina Karla Dvořáka 1868/1869"
      }
    ]
  },

  {
    id: "p_josef_dvorak_1877",
    name: "Josef Dvořák",
    birthYear: "1879",
    deathYear: "1938",
    lifeSpan: "1879 – 1938",
    houseNumber: "29",
    houseId: "cp29",
    categoryKey: "grunt",
    categoryLabel: "Držitel gruntu / Hospodář",
    categoryIcon: "🏡",
    categoryBadgeClass: "bg-emerald-100 text-emerald-950 border-emerald-300",
    role: "Samostatný rolník a majitel usedlosti v období 1. ČSR",
    father: "Josef Dvořák (1857–1940), sedlák na čp. 22, rodem z Temenice",
    mother: "Anna Dvořáková roz. Kouřilová (1857–1949) z čp. 24",
    spouse: "Amálie Dvořáková roz. Motyková (* 18. 7. 1888 Bludov), sňatek 15. 7. 1907",
    children: ["Josef Dvořák ml. (* 28. 6. 1913)", "Marie Dvořáková (* 15. 6. 1920)"],
    aliases: ["Josef Dvořák", "Joseph Dworzak"],
    linkedCensusIds: ["cen_196", "cen_204", "cen_365", "cen_374"],
    biography: "Narodil se 3. 6. 1879 na rodovém gruntě čp. 22 jako syn Josefa Dvořáka z Temenice a Anny roz. Kouřilové. Sňatkem s Amálií Motykovou (1907), která bydlela na čp. 29, se stal hospodářem usedlosti čp. 29. Zemřel tam 8. 9. 1938. Pozor: Josef Dvořák * 8. 4. 1874, syn Aloise a Magdaleny (čp. 29 v roce 1890), je jiná osoba.",
    events: [
      {
        type: "Narození",
        year: "1879",
        date: "3. června 1879",
        place: "Dlouhomilov čp. 22",
        description: "Narození a křest v Dlouhomilově.",
        source: "ZAO, matrika narozených Dlouhomilov, sign. Zá II 3, fol. 63 (zobrazený snímek je jen stránka rejstříku).",
        scanFile: "assets/archives/matriky/N_inv_c_8361_sig_Za_II_3_1864_-_1890_Dlouhomilov-_Horni_Olesna-_Dolni_Olesna_0287.jpg",
        scanTitle: "Rejstřík narozených Zá II 3 (písmeno D)"
      },
      {
        type: "Sňatek",
        year: "1907",
        date: "15. července 1907",
        place: "Dlouhomilov",
        description: "Sňatek s Amálií Motykovou (* 18. 7. 1888 Bludov), bytem v Dlouhomilově čp. 29; oddával Alois Dvořák, farář na odpočinku.",
        source: "ZAO, matrika oddaných Dlouhomilov, sign. Zá II 7, sn. 38 (zobrazený snímek je jen stránka rejstříku).",
        scanFile: "assets/archives/matriky/O-_I-O-_Z-_I-Z_inv_c_11248_sig_Za_II_7_1889_-_1929_Dlouhomilov-_Horni_Olesna-_Dolni_Olesna_0342.jpg",
        scanTitle: "Rejstřík Zá II 7 (písmeno D)"
      },
      {
        type: "Sčítání lidu",
        year: "1910",
        date: "31. prosince 1910",
        place: "Dlouhomilov čp. 29",
        description: "Zapsán jako rolnický majitel se svou ženou Amalií, tchyní Amalií Motykovou a čeledí.",
        source: "ZAO, Sčítání 1910, karton 436, snímek 0083.",
        scanFile: "assets/archives/cp29/su1000_c_pom_411_inv_c_1765_karton_436_null_dlouhomilov_serie_cp_1_115_1910_0083.jpg",
        scanTitle: "Sčítací arch 1910 – Josef Dvořák"
      },
      {
        type: "Sčítání lidu",
        year: "1921",
        date: "15. února 1921",
        place: "Dlouhomilov čp. 29",
        description: "První sčítání lidu ČSR: samostatný rolník a majitel usedlosti s manž. Amalií, dětmi Josefem a Marií a 4 zaměstnanci.",
        source: "SOkA Šumperk / ZAO, Sčítání 1921, fascikl 3, snímek 0160.",
        scanFile: "assets/archives/cp29/su1000_c_pom_411_inv_c_1863_fascikl_3_null_dlouhomilov_serie_cp_1_118_1921_0160.jpg",
        scanTitle: "Sčítací arch 1921 – Josef Dvořák"
      },
      {
        type: "Úmrtí",
        year: "1938",
        date: "8. září 1938",
        place: "Dlouhomilov čp. 29",
        description: "Úmrtí hospodáře Josefa Dvořáka na usedlosti čp. 29 ve věku 59 let, 3 měsíců a 5 dnů (syn Josefa Dvořáka, rolníka v Dlouhomilově čp. 22, a Anny roz. Kouřilové; sezdán 15. 7. 1907).",
        source: "ZAO Opava, Sbírka matrik, farnost Dlouhomilov, sign. Zá II 10 (Z 1930–1949), snímek 175 (rejstřík sn. 219).",
        scanFile: null
      }
    ]
  },

  {
    id: "p_amalie_dvorakova_1878",
    name: "Amalie Dvořáková (roz. Motyková)",
    birthYear: "1888",
    deathYear: "po 1930",
    lifeSpan: "1888 – po 1947",
    houseNumber: "29",
    houseId: "cp29",
    categoryKey: "rodina",
    categoryLabel: "Člen rodiny hospodáře",
    categoryIcon: "👨‍👩‍👧",
    categoryBadgeClass: "bg-sky-100 text-sky-950 border-sky-300",
    role: "Hospodyně na usedlosti čp. 29",
    father: "Antonín Motyka, kolář v Bludově",
    mother: "Amálie Motyková roz. Dvořáková (*1846), dcera Petra Dvořáka, domkaře v Dlouhomilově",
    spouse: "Josef Dvořák (1879–1938), sňatek 15. 7. 1907",
    children: ["Josef Dvořák ml. (* 28. 6. 1913)", "Marie Dvořáková (* 15. 6. 1920)"],
    aliases: ["Amalie Dvořáková", "Amalie Motyková", "Amálie Dvořáková", "Amalia Dworzak"],
    linkedCensusIds: ["cen_357", "cen_366", "cen_375"],
    biography: "Pocházela z rodu Motyků z Bludova. V Dlouhomilově vedla velkou selskou domácnost a podílela se na správě hospodářství usedlosti čp. 29.",
    events: [
      {
        type: "Narození",
        year: "1888",
        date: "18. července 1888",
        place: "Bludov čp. 224",
        description: "Narozena v Bludově jako dcera koláře Antonína Motyky a Amálie roz. Dvořákové.",
        source: "ZAO, matrika narozených Bludov 1888 (inv. č. 8055), str. 48.",
        scanFile: null
      },
      {
        type: "Sčítání lidu",
        year: "1910",
        date: "31. prosince 1910",
        place: "Dlouhomilov čp. 29",
        description: "Zapsána jako manželka hospodáře.",
        source: "ZAO, Sčítání 1910.",
        scanFile: "assets/archives/cp29/su1000_c_pom_411_inv_c_1765_karton_436_null_dlouhomilov_serie_cp_1_115_1910_0083.jpg",
        scanTitle: "Sčítací arch 1910"
      },
      {
        type: "Sčítání lidu",
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
    name: "Pavel Dvořák (svědek 1654, držitel gruntu 1657–1679)",
    birthYear: "?",
    deathYear: "?",
    lifeSpan: "doložen 1651–1679",
    houseNumber: "29",
    houseId: "cp29",
    categoryKey: "grunt",
    categoryLabel: "Držitel gruntu / Hospodář",
    categoryIcon: "🏡",
    categoryBadgeClass: "bg-emerald-100 text-emerald-950 border-emerald-300",
    role: "Sedlák v Dlouhomilově doložený 1651–1679 (matrika Zábřeh/Dubicko, Lánový rejstřík & gruntovnice čp. 29)",
    father: "Neznámý",
    mother: "Neznámá",
    spouse: "Neznámá",
    children: ["Jan (Hanß) Dvořák (doložen 27. 9. 1654 se svým otcem Pavlem v matrice Dubicko Zá IV 1, pag. 313; hospodář na 60 měřicích v Lánovém rejstříku 1677)"],
    biography: "Nejstarší jmenovitě doložený příslušník rodu Dvořáků na čp. 29 v Dlouhomilově: po zmínce v zábřežské matrice roku 1651 (Zá I 1, str. 263) vystupuje dne 27. září 1654 v matrice farnosti Dubicko (Zá IV 1, sn. 160, pag. 313) společně se svým synem Hanßem jako svědek („Pawel Dworžák z Dlauhomilowa a Hanß geho Syn“) na sňatku Jiříka z Medelského a Anežky z Benkova. V první lánové vizitaci 1656–1657 držel plný velký grunt o výměře 60 měřic, který nejpozději roku 1677 převzal syn Hanß (= Jan) Dvořák (MZA Brno D 1, sign. 141, fol. 76v). Roku 1679 v nejstarší gruntovní knize (inv. č. 164, fol. 194 / sn. 191, původní staré č. 12) kupuje grunt „po Neb: Janowi Dworžakowi“ jeho syn Pavel Dvořák za 800 zl., a 13. května 1684 následuje koupě Jakuba Dvořáka. Nejde o pozdějšího Pavla Dvořáka (* 9. 9. 1763), otce Petra Dvořáka z čp. 22.",
    events: [
      {
        type: "Svědek na svatbě",
        year: "1654",
        date: "27. září 1654",
        place: "Dubicko / Dlouhomilov & Medelské",
        description: "Matrika oddaných farnosti Dubicko (sn. 160, pag. 313): Jiřík po neb. Jakubovi z Medelského bere si Anežku po neb. Janovi z Benkova („w Dubicžku“); jako svědkové zapsáni společně Pavel Dvořák z Dlouhomilova a jeho syn Hanß — přímý doklad otcovsko-synovské návaznosti doložené i v Lánovém rejstříku 1657/1677 na čp. 29.",
        transcription: "27. Septembris [1654]: p. m. Giržjk po n. Jakubowi [...] z Medelskýho, s p. d. Angškau po n. Janowj [...] z Benkowa. Copulati w Dubicžku. Testes: Pawel Dworžák z Dlauhomilowa a Hanß geho Syn [Odtudž].",
        translation: "27. září 1654: Poctivý mládenec Jiřík po nebožtíku Jakubovi z Medelského s poctivou děvečkou Anežkou po nebožtíku Janovi z Benkova. Oddáni v Dubicku. Svědkové: Pavel Dvořák z Dlouhomilova a Jan (Hanß), jeho syn odtudž.",
        source: "ZAO Opava – pobočka Olomouc, Sbírka matrik, farnost Dubicko, sign. Zá IV 1 (inv. č. 8376), sn. 160, pag. 313.",
        scanFile: "assets/archives/zao_matriky_pred1786/zao_dubicko_zaIV1_p312_313_1653_1654_snatek.jpg",
        scanTitle: "Dubicko Zá IV 1 (pag. 313, 27. 9. 1654) – svědci Pavel Dvořák a syn Hanß; z Medelskýho",
        archiveUrl: "https://digi.archives.cz/da/permalink?xid=be97a52e-f13c-102f-8255-0050568c0263"
      },
      {
        type: "Gruntovní kniha",
        year: "1679",
        date: "1679 & 13. května 1684",
        place: "Dlouhomilov čp. 29 (staré č. 12)",
        description: "Gruntovní kniha (inv. č. 164, fol. 194 / sn. 191, původní staré č. 12): oddíl „Grunt Pawla Dworžaka“, kde roku 1679 kupuje grunt po † Janu Dvořákovi jeho syn Pavel za 800 fl., a dne 13. 5. 1684 následuje koupě Jakuba Dvořáka.",
        transcription: "Grunt Pawla Dworžaka. Letha 1679. Prži Saudě, od Rychtarže a Konselůw Prodan Grunt po Neb: Janowi Dworžakowi, Pawlowi Synu geho za Summu 800 fl. […] Kup Jakuba Dworžaka. Letha Panie 1684 dne 13. Maj. Kaupil Jakub Dworžak od Rychtarže a Konsselů grůnt po Neb: Pawla Dworžaka w Summie za 800 zl. m.",
        translation: "Grunt Pavla Dvořáka. Léta 1679. Při soudě, od rychtáře a konšelů prodán grunt po nebožtíku Janu Dvořákovi, Pavlovi synu jeho, za sumu 800 zl. […] Koupě Jakuba Dvořáka, léta Páně 1684 dne 13. května…",
        source: "Zemský archiv v Opavě – pobočka Olomouc, fond Velkostatek Zábřeh (NAD 1549), Gruntovní kniha inv. č. 164, sign. 428, fol. 194 (sn. 191).",
        scanFile: "assets/archives/gruntovnice/Gruntovni_kniha_pro_vsi_Dluhomilov_a_Medelske_inv_c_164_sig_428_191.jpg",
        scanTitle: "Gruntovní kniha Dlouhomilov (inv. 164, fol. 194 / sn. 191) – Grunt Pavla Dvořáka (1679)"
      }
    ]
  },

  {
    id: "p_petr_dvorak_1793",
    name: "Petr Dvořák",
    birthYear: "1793",
    deathYear: "1878",
    lifeSpan: "1793 – 1878",
    houseNumber: "22",
    houseId: "cp22",
    categoryKey: "grunt",
    categoryLabel: "Držitel gruntu / Hospodář",
    categoryIcon: "🏡",
    categoryBadgeClass: "bg-emerald-100 text-emerald-950 border-emerald-300",
    role: "Sedlák a výměnkář na gruntě čp. 22",
    father: "Pavel Dvořák (* 9. 9. 1763, syn sedláka Pavla Dvořáka st. a Barbory; matrika Rohle Zá VIII 1, pag. 405)",
    mother: "Marina roz. Weinlichová z Brníčka (sňatek 1786 ve farnosti nevěsty v Brníčku)",
    spouse: "1. Anna Dvořáková († 12. 12. 1850, matka Josefa *1816); 2. Anna Dvořáková (*1811/1814 Vyšehoří, svatební smlouva březen 1855)",
    children: ["Josef Dvořák (*1816 Dlouhomilov, hospodář v Temenici a na čp. 22)"],
    aliases: ["Petr Dvořák", "Peter Dworžak", "Peter Dvořák"],
    linkedCensusIds: ["cen_176", "cen_187"],
    biography: "Sedlák a pozdější výměnkář na rodovém gruntě čp. 22, syn Pavla Dvořáka ml. (* 9. 9. 1763) a Mariny roz. Weinlichové z Brníčka. Dne 1. 5. 1818 koupil statek čp. 22 od otce Pavla za 2500 fl. W.W. (inv. č. 207, fol. 274). Originální křestní zápis jeho otce v matrice farnosti Rohle (Zá VIII 1, pag. 405) vyvrátil dřívější omyl o otcovství Jiřího Dvořáka: Petrův děd byl sedlák Pavel Dvořák st. s manželkou Barborou roz. Boxanovou. Dne 7. 1. 1847 předal Petr grunt synovi Josefu Dvořákovi (*1816) za 2400 fl. C.M.; odevzdací listina ze 31. 1. 1851 po jeho 1. manželce Anně Dvořákové (zemřelé 12. 12. 1850) převádí její pohledávku 400 fl. C.M. přímo na syna Josefa. V březnu 1855 uzavřel svatební smlouvu s 2. manželkou Annou z Vyšehoří (*1811/1814), s níž pak žil na výměnku čp. 22 až do své smrti 9. 12. 1878 ve věku 84 let.",
    events: [
      {
        type: "Křest otce",
        year: "1763",
        date: "9. září 1763",
        place: "Dlouhomilov (farnost Rohle)",
        description: "Matrika narozených farnosti Rohle (sn. 207, pag. 405): pokřtěn Paulus, syn sedláka Pavla Dvořáka st. („Paulus Dworžak rusticus Dlomilovio“) a jeho manželky Barbory — přímý doklad opravující starší domněnku o otcovství Jiřího Dvořáka.",
        transcription: "In Septembri 1763 | Dies: 9 | Baptizans: A. R. D. Parochus. | Baptizatus: Paulus | Parentes: Paulus Dworžak rusticus Dlomilovio, Barbara . | Patrini: Wenceslaus [...] et Marina uxor [Georgii(?)] Dworžak rustici Dlomilovio.",
        translation: "V září 1763, dne 9.: Křtící velebníček pan farář. Pokřtěný: Pavel. Rodiče: Pavel Dvořák, sedlák v Dlouhomilově, a Barbora. Kmotři: Václav [...] a Marina, manželka [Jiřího?] Dvořáka, sedláka v Dlouhomilově.",
        source: "ZAO Opava – pobočka Olomouc, Sbírka matrik, farnost Rohle, sign. Zá VIII 1 (inv. č. 8409), sn. 207, pag. 405 (index Zá VIII 14 fol. 405).",
        scanFile: "assets/archives/zao_matriky_pred1786/zao_rohle_zaVIII1_p405_1763_pavel_dvorak.jpg",
        scanTitle: "Rohle Zá VIII 1 (pag. 405, 9. 9. 1763) – křest Pavla Dvořáka, syna Pavla a Barbory",
        archiveUrl: "https://digi.archives.cz/da/permalink?xid=be97b69a-f13c-102f-8255-0050568c0263"
      },
      {
        type: "Narození",
        year: "1793",
        date: "kolem 1793",
        place: "Dlouhomilov čp. 22",
        description: "Narozen v Dlouhomilově čp. 22 jako syn sedláka Pavla Dvořáka (* 9. 9. 1763) a Mariny roz. Weinlichové.",
        source: "Farní matrika Dlouhomilov & sčítací operáty 1857 a 1869.",
        scanFile: null
      },
      {
        type: "Gruntovní kniha",
        year: "1818",
        date: "1. května / 8. srpna 1818",
        place: "Dlouhomilov čp. 22",
        description: "Koupě selského gruntu čp. 22 od otce Pavla Dvořáka za 2500 fl. W.W. (330 fl. hotově, 300 fl. sirotčí dluh, 870 fl. po vkladu, 1000 fl. v deseti splátkách po 100 fl. v letech 1819–1828; Urkundenbuch N. I. Fol. 170).",
        source: "ZAO Opava – pobočka Olomouc, fond Velkostatek Zábřeh (NAD 1549), Gruntovní kniha inv. č. 207, fol. 274–274v (sn. 121–122).",
        scanFile: "assets/archives/gruntovnice/zao_gk_inv207_sn121_cp22_petr_dvorak_1818.jpg",
        scanTitle: "Pozemková kniha Dlouhomilov (inv. 207, sn. 121) – koupě Petra Dvořáka 1818"
      },
      {
        type: "Gruntovní kniha",
        year: "1847",
        date: "7. ledna 1847 / 1851 / 1855",
        place: "Dlouhomilov čp. 22",
        description: "Prodej usedlosti synu Josefu Dvořákovi (*1816) za 2400 fl. C.M. (podíly bratru Johannovi 1600 fl., otci Petrovi 400 fl., Anně Dvořákové 400 fl. a výměnek strýci Ignáci). Odevzdací listina ze 31. 1. 1851 po 1. manželce Anně († 12. 12. 1850) převádí její podíl 400 fl. C.M. na syna Josefa; 14. 3. / 5. 4. 1855 vložena svatební smlouva s 2. manželkou Annou.",
        source: "ZAO Opava – pobočka Olomouc, fond Velkostatek Zábřeh (NAD 1549), Gruntovní kniha inv. č. 207, fol. 274v–275 (sn. 122).",
        scanFile: "assets/archives/gruntovnice/zao_gk_inv207_sn122_cp22_josef_dvorak_1847_anna_1850.jpg",
        scanTitle: "Pozemková kniha Dlouhomilov (inv. 207, sn. 122) – předání 1847, úmrtí Anny 1850 a sňatek 1855"
      },
      {
        type: "Sčítání lidu",
        year: "1857",
        date: "25. listopadu 1857",
        place: "Dlouhomilov čp. 22",
        description: "Zapsán v bytě č. II jako Peter Dworžak (*1793, Grundbesitzer) s manželkou Annou (*1811). Jako majitel domu je v záhlaví archu uveden jeho syn Josef Dvořák.",
        source: "ZAO Opava, Sčítání lidu 1857, karton 253, dům čp. 22 (snímek b).",
        scanFile: "assets/archives/cp22/1857-Dlouhomilov_22-b.jpg",
        scanTitle: "Sčítací arch 1857 – Petr Dvořák (*1793) na čp. 22"
      },
      {
        type: "Sčítání lidu",
        year: "1869",
        date: "31. prosince 1869",
        place: "Dlouhomilov čp. 22",
        description: "Zapsán na řádku 10 jako sedlácký výměnkář Petr Dvořák (*1793) s manželkou Annou (*1813 Vyšehoří) v domácnosti svého syna Josefa Dvořáka (*1816), který se s rodinou vrátil z Temenice.",
        source: "ZAO Opava, Sčítání lidu 1869, karton 300, dům čp. 22 (snímek b).",
        scanFile: "assets/archives/cp22/1869-Dlouhomilov_22-b.jpg",
        scanTitle: "Sčítací arch 1869 – výměnkář Petr Dvořák (*1793) a rodina Josefa Dvořáka (*1816)"
      },
      {
        type: "Úmrtí",
        year: "1878",
        date: "9. prosince 1878",
        place: "Dlouhomilov čp. 22",
        description: "Zemřel na čp. 22 ve věku 84 let jako výměnkář, syn Pavla Dvořáka a Mariany roz. Weinlichové.",
        source: "ZAO Opava, Sbírka matrik, farnost Dlouhomilov, sign. Zá II 5 (Z), snímek 147.",
        scanFile: null
      }
    ]
  },

  {
    id: "p_josef_dvorak_1857",
    name: "Josef Dvořák st.",
    birthYear: "1857",
    deathYear: "1940",
    lifeSpan: "1857 – 1940",
    houseNumber: "22",
    houseId: "cp22",
    categoryKey: "grunt",
    categoryLabel: "Držitel gruntu / Hospodář",
    categoryIcon: "🏡",
    categoryBadgeClass: "bg-emerald-100 text-emerald-950 border-emerald-300",
    role: "Sedlák a hospodář na gruntě čp. 22 (1878–1919)",
    father: "Josef Dvořák (*1816 Dlouhomilov), sedlák v Temenici a na čp. 22",
    mother: "Anna Dvořáková (*1828 Dlouhomilov, dcera Antonína Dvořáka)",
    spouse: "Anna Dvořáková roz. Kouřilová (* 9. 12. 1857 čp. 24 – † 29. 5. 1949 čp. 22), sňatek 29. 7. 1878",
    children: ["Josef Dvořák (* 3. 6. 1879, hospodář na čp. 29)", "Karel Dvořák (* 7. 11. 1880, hospodář na čp. 22)", "Anna Dvořáková (* 20. 11. 1885)", "Marie Anna Dvořáková (* 7. 5. 1888)", "Jaromír Dvořák (* 27. 7. 1890)", "Ludmila Podhorná roz. Dvořáková (* 21. 4. 1893)", "Bernardina Dvořáková (* 17. 10. 1895)"],
    aliases: ["Josef Dvořák", "Josef Dvořák st.", "Joseph Dworzak"],
    linkedCensusIds: ["cen_182", "cen_194", "cen_202", "cen_212", "cen_220", "cen_237"],
    biography: "Narodil se 9. února 1857 v Temenici u Šumperka, kde tehdy jeho rodiče Josef (*1816) a Anna (*1828) Dvořákovi z Dlouhomilova čp. 22 hospodařili. Kolem roku 1869 se s rodiči a sourozenci vrátil na rodový grunt čp. 22 v Dlouhomilově. Dne 29. července 1878 se při dvojité svatbě oženil s Annou Kouřilovou ze sousedního gruntu čp. 24 (zatímco jeho bratr Karel si vzal její sestru Ludmilu) a více než čtyřicet let vedl hospodářství čp. 22. Jeho nejstarší syn Josef (*1879) přešel sňatkem roku 1907 na čp. 29, mladší syn Karel (*1880) převzal rodný grunt čp. 22. Zemřel na výměnku čp. 22 dne 10. července 1940 ve věku 83 let.",
    events: [
      {
        type: "Narození",
        year: "1857",
        date: "9. února 1857",
        place: "Temenice čp. 35 (u Šumperka)",
        description: "Narozen v Temenici čp. 35 jako syn sedláka Josefa Dvořáka (*1816) a Anny roz. Dvořákové (*1828).",
        source: "ZAO Opava, Sbírka matrik, farnost Šumperk (Temenice), sign. Šu XVI 13, snímek 160.",
        scanFile: null
      },
      {
        type: "Sčítání lidu",
        year: "1869",
        date: "31. prosince 1869",
        place: "Dlouhomilov čp. 22",
        description: "Zapsán jako dvanáctiletý žák v rodině otce Josefa Dvořáka (*1816) a děda Petra Dvořáka (*1793) po návratu rodiny z Temenice na čp. 22.",
        source: "ZAO Opava, Sčítání lidu 1869, karton 300, arch čp. 22.",
        scanFile: "assets/archives/cp22/1869-Dlouhomilov_22-b.jpg",
        scanTitle: "Sčítací arch 1869 – Dlouhomilov čp. 22"
      },
      {
        type: "Sňatek",
        year: "1878",
        date: "29. července 1878",
        place: "Dlouhomilov (čp. 22 a čp. 24)",
        description: "Dvojitá svatba v Dlouhomilově: Josef Dvořák (*1857) si bere Annu Kouřilovou (*1857) z čp. 24 a jeho bratr Karel si bere její sestru Ludmilu.",
        source: "ZAO Opava, Sbírka matrik, farnost Dlouhomilov, sign. Zá II 5 (O), snímek 30.",
        scanFile: null
      },
      {
        type: "Gruntovní kniha",
        year: "1879",
        date: "8. května 1879 / vklad 2. března 1880",
        place: "Dlouhomilov čp. 22",
        description: "Postupní smlouvou s otcem Josefem Dvořákem (*1816) nabývají spoluvlastnictví gruntu čp. 22 v ceně 6500 fl. ö.W. (včetně pozemku/domku Haltýř fol. 123) po jedné polovině Josef Dvořák (*1857) a Anna roz. Kouřilová (*1857), se zajištěním odbytného 3000 fl. ö.W. a výměnku pro rodiče.",
        source: "ZAO Opava – pobočka Olomouc, fond Velkostatek Zábřeh (NAD 1549), Gruntovní kniha inv. č. 207, fol. 275v (sn. 123).",
        scanFile: "assets/archives/gruntovnice/zao_gk_inv207_sn123_cp22_josef_anna_dvorak_1879.jpg",
        scanTitle: "Pozemková kniha Dlouhomilov (inv. 207, sn. 123) – převod na Josefa a Annu Dvořákovy 1879/1880"
      },
      {
        type: "Sčítání lidu",
        year: "1880",
        date: "31. prosince 1880",
        place: "Dlouhomilov čp. 22",
        description: "Mladý sedlák a hospodář na čp. 22 s manželkou Annou, syny Josefem (*1879) a Karlem (*1880), 3 děvečkami a babičkou Annou (*1814) na výměnku.",
        source: "ZAO Opava, Sčítání lidu 1880, karton 330, arch čp. 22.",
        scanFile: "assets/archives/cp22/1880-Dlouhomilov_22-a.jpg",
        scanTitle: "Sčítací arch 1880 – Josef Dvořák na čp. 22"
      },
      {
        type: "Sčítání lidu",
        year: "1890",
        date: "31. prosince 1890",
        place: "Dlouhomilov čp. 22",
        description: "Hospodář na čp. 22 s manželkou Annou, 5 dětmi a přilepeným křestním listem syna Josefa (*1879).",
        source: "ZAO Opava, Sčítání lidu 1890, karton 356, arch čp. 22.",
        scanFile: "assets/archives/cp22/1890-Dlouhomilov_22-a.jpg",
        scanTitle: "Sčítací arch 1890 – Josef Dvořák na čp. 22"
      },
      {
        type: "Sčítání lidu",
        year: "1900",
        date: "31. prosince 1900",
        place: "Dlouhomilov čp. 22",
        description: "Sedlák na čp. 22 s manželkou Annou a 7 dětmi (s přilepeným křestním listem syna Jaromíra *1890).",
        source: "ZAO Opava, Sčítání lidu 1900, karton 397, arch čp. 22.",
        scanFile: "assets/archives/cp22/1900-Dlouhomilov_22-a.jpg",
        scanTitle: "Sčítací arch 1900 – Josef Dvořák na čp. 22"
      },
      {
        type: "Sčítání lidu",
        year: "1910",
        date: "31. prosince 1910",
        place: "Dlouhomilov čp. 22",
        description: "Majitel gruntu čp. 22 s manželkou Annou a 6 dětmi.",
        source: "ZAO Opava, Sčítání lidu 1910, karton 436, arch čp. 22.",
        scanFile: "assets/archives/cp22/1910-Dlouhomilov_22-Dvorak-a.jpg",
        scanTitle: "Sčítací arch 1910 – Josef Dvořák na čp. 22"
      },
      {
        type: "Sčítání lidu",
        year: "1921",
        date: "15. února 1921",
        place: "Dlouhomilov čp. 22",
        description: "Rolnický výměnkář v bytě č. 2 na čp. 22 s manželkou Annou, dcerami Ludmilou Podhornou a Bernardinou a vnukem Jaromírem.",
        source: "SOkA Šumperk / ZAO, Sčítání lidu 1921, fascikl 3, arch čp. 22.",
        scanFile: "assets/archives/cp22/1921-Dlouhomilov_22a-Dvorak.jpg",
        scanTitle: "Sčítací arch 1921 – Dlouhomilov čp. 22"
      },
      {
        type: "Úmrtí",
        year: "1940",
        date: "10. července 1940",
        place: "Dlouhomilov čp. 22",
        description: "Zemřel na čp. 22 jako selský výměnkář ve věku 83 let, 5 měsíců a 1 dne.",
        source: "ZAO Opava, Sbírka matrik, farnost Dlouhomilov, sign. Zá II 10 (Z 1930–1949), snímek 178.",
        scanFile: null
      }
    ]
  },

  {
    id: "p_anna_dvorakova_1857",
    name: "Anna Dvořáková (roz. Kouřilová)",
    birthYear: "1857",
    deathYear: "1949",
    lifeSpan: "1857 – 1949",
    houseNumber: "22",
    houseId: "cp22",
    categoryKey: "rodina",
    categoryLabel: "Člen rodiny hospodáře",
    categoryIcon: "👨‍👩‍👧",
    categoryBadgeClass: "bg-sky-100 text-sky-950 border-sky-300",
    role: "Selka a spolumajitelka gruntu čp. 22 (rozená na čp. 24)",
    father: "František Kouřil († 11. 8. 1878), dědičný sedlák na čp. 24",
    mother: "Mariana roz. Vlčková, dcera výměnkáře Josefa Vlčka na čp. 24",
    spouse: "Josef Dvořák st. (1857–1940), sňatek 29. 7. 1878",
    children: ["Josef Dvořák (* 3. 6. 1879, čp. 29)", "Karel Dvořák (* 7. 11. 1880, čp. 22)", "Anna Dvořáková (* 20. 11. 1885)", "Marie Anna Dvořáková (* 7. 5. 1888)", "Jaromír Dvořák (* 27. 7. 1890)", "Ludmila Podhorná roz. Dvořáková (* 21. 4. 1893)", "Bernardina Dvořáková (* 17. 10. 1895)"],
    aliases: ["Anna Dvořáková", "Anna Kouřilová", "Anna Dworzak"],
    linkedCensusIds: ["cen_195", "cen_203", "cen_213", "cen_221", "cen_238"],
    biography: "Narodila se 9. prosince 1857 na památkově chráněném gruntě čp. 24 jako dcera sedláka Františka Kouřila a Mariany roz. Vlčkové. Dne 29. července 1878 se při dvojité svatbě provdala za Josefa Dvořáka (*1857) ze sousedního gruntu čp. 22, zatímco její sestra Ludmila si vzala jeho bratra Karla (kteří po smrti otce Františka Kouřila 11. 8. 1878 převzali grunt čp. 24). Na čp. 22 vychovala sedm dětí a dožila se úctyhodného věku 91 let († 29. května 1949).",
    events: [
      {
        type: "Narození",
        year: "1857",
        date: "9. prosince 1857",
        place: "Dlouhomilov čp. 24",
        description: "Narozena na čp. 24 jako dcera dědičného sedláka Františka Kouřila a Mariany roz. Vlčkové.",
        source: "ZAO Opava, Sbírka matrik, farnost Dlouhomilov, sign. Zá II 2 (N 1856–1864), snímek 12.",
        scanFile: null
      },
      {
        type: "Sňatek",
        year: "1878",
        date: "29. července 1878",
        place: "Dlouhomilov (čp. 24 a čp. 22)",
        description: "Dvojitá svatba sester Anny a Ludmily Kouřilových z čp. 24 s bratry Josefem a Karlem Dvořákovými z čp. 22.",
        source: "ZAO Opava, Sbírka matrik, farnost Dlouhomilov, sign. Zá II 5 (O), snímek 30.",
        scanFile: null
      },
      {
        type: "Gruntovní kniha",
        year: "1879",
        date: "8. května 1879 / vklad 2. března 1880",
        place: "Dlouhomilov čp. 22",
        description: "Postupní smlouvou s Josefem Dvořákem (*1816) nabývají spoluvlastnické právo na grunt čp. 22 (6500 fl. ö.W. vč. Haltýře) po jedné polovině Josef Dvořák (*1857) a Anna roz. Kouřilová (*1857).",
        source: "ZAO Opava – pobočka Olomouc, fond Velkostatek Zábřeh (NAD 1549), Gruntovní kniha inv. č. 207, fol. 275v (sn. 123).",
        scanFile: "assets/archives/gruntovnice/zao_gk_inv207_sn123_cp22_josef_anna_dvorak_1879.jpg",
        scanTitle: "Pozemková kniha Dlouhomilov (inv. 207, sn. 123) – spoluvlastnictví čp. 22 (1879/1880)"
      },
      {
        type: "Sčítání lidu",
        year: "1880",
        date: "31. prosince 1880",
        place: "Dlouhomilov čp. 22",
        description: "Zapsána jako manželka hospodáře a spolumajitelka rolnictví na čp. 22.",
        source: "ZAO Opava, Sčítání lidu 1880, karton 330, arch čp. 22.",
        scanFile: "assets/archives/cp22/1880-Dlouhomilov_22-a.jpg",
        scanTitle: "Sčítací arch 1880 – Anna Dvořáková na čp. 22"
      },
      {
        type: "Sčítání lidu",
        year: "1921",
        date: "15. února 1921",
        place: "Dlouhomilov čp. 22",
        description: "Zapsána s manželem Josefem na výměnku v bytě č. 2 na čp. 22.",
        source: "SOkA Šumperk / ZAO, Sčítání lidu 1921, fascikl 3, arch čp. 22.",
        scanFile: "assets/archives/cp22/1921-Dlouhomilov_22a-Dvorak.jpg",
        scanTitle: "Sčítací arch 1921 – Dlouhomilov čp. 22"
      },
      {
        type: "Úmrtí",
        year: "1949",
        date: "29. května 1949",
        place: "Dlouhomilov čp. 22",
        description: "Zemřela na čp. 22 jako rolnice-výměnice, vdova po Josefu Dvořákovi, v požehnaném věku 91 let, 5 měsíců a 20 dnů.",
        source: "ZAO Opava, Sbírka matrik, farnost Dlouhomilov, sign. Zá II 10 (Z 1930–1949), snímek 198 (rejstřík sn. 219).",
        scanFile: null
      }
    ]
  },

  {
    id: "p_karel_dvorak_1880",
    name: "Karel Dvořák",
    birthYear: "1880",
    deathYear: "1942",
    lifeSpan: "1880 – 1942",
    houseNumber: "22",
    houseId: "cp22",
    categoryKey: "grunt",
    categoryLabel: "Držitel gruntu / Hospodář",
    categoryIcon: "🏡",
    categoryBadgeClass: "bg-emerald-100 text-emerald-950 border-emerald-300",
    role: "Samostatný rolník a hospodář na gruntě čp. 22 (1919–1942)",
    father: "Josef Dvořák st. (1857–1940), sedlák na čp. 22",
    mother: "Anna Dvořáková roz. Kouřilová (1857–1949) z čp. 24",
    spouse: "Anna / Ludmila roz. Maulerová (sňatek 13. 9. 1919)",
    children: ["Ludmila Dvořáková (* 24. 3. 1916, provd. 1936 za Karla Šafáře na čp. 10)", "Karel Dvořák ml. (*1918)", "Drahomíra Dvořáková (*1921)"],
    aliases: ["Karel Dvořák", "Karl Dworzak"],
    linkedCensusIds: ["cen_197", "cen_205", "cen_214", "cen_222", "cen_228"],
    biography: "Druhorozený syn Josefa Dvořáka (*1857) a Anny roz. Kouřilové (*1857) na čp. 22, mladší bratr Josefa Dvořáka (*1879) z čp. 29. Zatímco starší bratr Josef přešel roku 1907 sňatkem na čp. 29, Karel zůstal na rodném gruntě čp. 22, který po první světové válce převzal a vedl až do své smrti 5. května 1942. Jeho dcera Ludmila (*1916) se roku 1936 provdala za souseda Karla Šafáře z gruntu čp. 10.",
    events: [
      {
        type: "Narození",
        year: "1880",
        date: "7. listopadu 1880",
        place: "Dlouhomilov čp. 22",
        description: "Narozen na čp. 22 jako syn sedláka Josefa Dvořáka a Anny roz. Kouřilové; ve sčítání z 31. 12. 1880 je zapsán jako dvouměsíční kojenec.",
        source: "ZAO Opava, Sčítání lidu 1880, karton 330, arch čp. 22.",
        scanFile: "assets/archives/cp22/1880-Dlouhomilov_22-a.jpg",
        scanTitle: "Sčítací arch 1880 – kojenec Karel Dvořák (*7. 11. 1880)"
      },
      {
        type: "Sčítání lidu",
        year: "1921",
        date: "15. února 1921",
        place: "Dlouhomilov čp. 22",
        description: "Samostatný rolník a majitel usedlosti čp. 22 s rodinou a 4 čeledními silami.",
        source: "SOkA Šumperk / ZAO, Sčítání lidu 1921, fascikl 3, arch čp. 22.",
        scanFile: "assets/archives/cp22/1921-Dlouhomilov_22a-Dvorak.jpg",
        scanTitle: "Sčítací arch 1921 – hospodář Karel Dvořák na čp. 22"
      },
      {
        type: "Úmrtí",
        year: "1942",
        date: "5. května 1942",
        place: "Dlouhomilov čp. 22",
        description: "Zemřel na čp. 22 jako rolník ve věku 61 let, 5 měsíců a 28 dnů (sezdán 13. 9. 1919).",
        source: "ZAO Opava, Sbírka matrik, farnost Dlouhomilov, sign. Zá II 10 (Z 1930–1949), snímek 181 (rejstřík sn. 219).",
        scanFile: null
      }
    ]
  }
];
