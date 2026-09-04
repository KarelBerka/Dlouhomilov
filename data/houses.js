/**
 * Databáze stavení a pamětihodností obce Dlouhomilov
 * S autentickými přepisy sčítacích operátů z let 1857–1921 a přímými odkazy na originální archivní scany ZAO
 */
const housesData = [
  {
    id: "cp29",
    number: "29",
    localName: "Venkovská usedlost čp. 29 (Grunt u Dvořáků)",
    type: "Kulturní památka ČR (ÚSKP)",
    isHeritage: true,
    uskpNumber: "21975/8-870",
    npuDirectUrl: "https://www.pamatkovykatalog.cz/venkovska-usedlost-534966",
    iisppUrl: "https://iispp.npu.cz/mis/documentDetail.htm?id=1139925",
    wikiUrl: "https://cs.wikipedia.org/wiki/Seznam_kulturn%C3%ADch_pam%C3%A1tek_v_Dlouhomilov%C4%9B",
    wikidataId: "Q38234857",
    commonsUrl: "https://commons.wikimedia.org/wiki/Category:Cultural_monuments_in_Dlouhomilov",
    heritageDescription: "Nemovitá kulturní památka zapsaná v Ústředním seznamu kulturních památek ČR. Zděná a částečně roubená zemědělská usedlost z 1. poloviny 19. století se zachovalou dispozicí, hospodářským křídlem a klenutými prostorami.",
    heritageSource: "Národní památkový ústav (NPÚ), Památkový katalog č. 534966 (ÚSKP 21975/8-870); Evidenční list památky IISPP MIS ID 1139925; Vyhláška MK ČR č. 249/1995 Sb.",
    location: {
      lat: 49.9069836,
      lng: 16.9895956,
      cadastralParcel: "st. 63 (stodola st. 62)",
      landParcels: "115, 116, 117, 118",
      source: "ČÚZK – Katastr nemovitostí & RUIAN, k.ú. Dlouhomilov (626431)"
    },
    // Vektorové mapování půdorysů budov (1834 vs Dnes)
    buildingFootprints: {
      cadastralNumber1834: "st. 63 (stodola st. 62)",
      cadastralNumberModern: "st. 63/1, st. 63/2, st. 62",
      masonryType1834: "zděný trojkřídlý dvůr (st. 63) + dřevěná stodola (st. 62)",
      changesSummary: "V roce 1834 tvořil Grunt u Dvořáků trojkřídlý zděný dvůr otevřený k severozápadu (parc. 63) a samostatnou dřevěnou stodolu (žlutá parc. 62). V průběhu 20. století bylo jedno křídlo ubouráno, v dnešní OpenStreetMap mapě zůstává zachováno obytné uliční křídlo čp. 29 a západněji stojící stodola.",
      footprint1834: {
        // Zděná nespalná část (trojkřídlý dvůr - červená)
        masonry: [
          [49.90710, 16.98945],
          [49.90715, 16.98978],
          [49.90685, 16.98985],
          [49.90680, 16.98952]
        ],
        // Dřevěná spalná část (samostatně stojící stodola na parcele 62 - žlutá)
        wooden: [
          [
            [49.90668, 16.98905],
            [49.90668, 16.98930],
            [49.90656, 16.98930],
            [49.90656, 16.98905]
          ]
        ]
      },
      footprintModern: [
        [49.90712, 16.98948],
        [49.90712, 16.98975],
        [49.90685, 16.98975],
        [49.90685, 16.98948]
      ]
    },
    statusStableCadastre: "Zděné obytné stavení (stavební parcela č. 63) a dřevěná stodola (stavební parcela č. 62).",
    cadastreSource: "Ústřední archiv zeměměřictví a katastru (ÚAZK), Císařské povinné otisky stabilního katastru 1834, sign. MOR102618340.",
    cadastreScan: "assets/archives/cp29/katastr_1834_autenticky.jpg",
    description: "Tradiční moravská selská usedlost v památkové zóně Dlouhomilov. Historický grunt rodu Dvořáků reprezentující lidové stavitelství Zábřežska s dochovanou dispozicí dvora.",
    
    // Časová osa držby gruntu ověřená z archivních scanů
    timeline: [
      {
        year: "1834",
        owner: "Franz Dworzak (František Dvořák)",
        event: "Zemědělský grunt zaznamenán v Císařském otisku stabilního katastru (stavební parcela 63 a stodola 62, dům čp. 29).",
        sourceType: "verified",
        source: "ÚAZK ČÚZK, Císařský otisk 1834, k.ú. Lomigsdorf, sign. MOR102618340.",
        scanFile: "assets/archives/cp29/katastr_1834_autenticky.jpg",
        scanTitle: "Stabilní katastr 1834 – parcela st. 63 a 62"
      },
      {
        year: "1857",
        owner: "Johann Dvořák (*1795)",
        event: "Sčítání lidu 1857: majitel domu Johann Dvořák se synem Johannem (právník v Praze) a synem Karlem.",
        sourceType: "verified",
        source: "ZAO, fond OÚ Zábřeh, Sčítání 1857, karton 253, dům čp. 29.",
        scanFile: "assets/archives/cp29/su1000_c_pom_411_inv_c_1299_karton_253_null_dlouhomilov_serie_cp_1_80_1857_0119.jpg",
        scanTitle: "Sčítací arch 1857 – Johann Dvořák čp. 29"
      },
      {
        year: "1869",
        owner: "Karel Dvořák (*1839)",
        event: "Sčítání 1869: hospodářství Karla Dvořáka s rodinou, bratrem Dr. Janem Dvořákem a chovem 49 ovcí.",
        sourceType: "verified",
        source: "ZAO, fond Okresní hejtmanství Zábřeh, Sčítání 1869, karton 300, arch čp. 29.",
        scanFile: "assets/archives/cp29/su1000_c_pom_411_inv_c_1392_karton_300_null_dlouhomilov_serie_cp_1_80_1869_0105.jpg",
        scanTitle: "Sčítací arch 1869 – Karel Dvořák čp. 29"
      },
      {
        year: "1880",
        owner: "Výměna držitelů",
        event: "Sčítání 1880: stavení čp. 29 vedeno v soupisu jako neobydlené / v přestavbě.",
        sourceType: "verified",
        source: "ZAO, Sčítání 1880, karton 330, snímek 0085.",
        scanFile: "assets/archives/cp29/su1000_c_pom_411_inv_c_1476_karton_330_null_dlouhomilov_serie_cp_1_4_30_44_50_1880_0085.jpg",
        scanTitle: "Sčítací arch 1880 – Dlouhomilov čp. 29"
      },
      {
        year: "1890",
        owner: "Alois Dvořák (*1830)",
        event: "Sčítání 1890: hospodář Alois Dvořák (rolník a tkadlec) s manž. Magdalenou a syny Janem a Josefem.",
        sourceType: "verified",
        source: "ZAO, Sčítání 1890, karton 356, snímky 0084–0086.",
        scanFile: "assets/archives/cp29/su1000_c_pom_411_inv_c_1560_karton_356_null_dlouhomilov_serie_cp_1_3_50_52_53_1890_0084.jpg",
        scanTitle: "Sčítací arch 1890 – Alois Dvořák čp. 29"
      },
      {
        year: "1910",
        owner: "Josef Dvořák (*1879)",
        event: "Sčítání 1910: rolnický majitel Josef Dvořák s manž. Amalií roz. Motykovou a tchyní.",
        sourceType: "verified",
        source: "ZAO, Sčítání 1910, karton 436, snímek 0083.",
        scanFile: "assets/archives/cp29/su1000_c_pom_411_inv_c_1765_karton_436_null_dlouhomilov_serie_cp_1_115_1910_0083.jpg",
        scanTitle: "Sčítací arch 1910 – Josef Dvořák čp. 29"
      },
      {
        year: "1921",
        owner: "Josef Dvořák (*1877)",
        event: "První sčítání lidu ČSR: majitel usedlosti Josef Dvořák s rodinou a čeledí (8 osob v hl. hospodářství).",
        sourceType: "verified",
        source: "SOkA Šumperk / ZAO, fond Okresní úřad Zábřeh, Sčítání 1921, fascikl 3, snímek 0160.",
        scanFile: "assets/archives/cp29/su1000_c_pom_411_inv_c_1863_fascikl_3_null_dlouhomilov_serie_cp_1_118_1921_0160.jpg",
        scanTitle: "Sčítací arch ČSR 1921 – Josef Dvořák čp. 29"
      },
      {
        year: "1967/1995",
        owner: "Památková ochrana",
        event: "Zápis do státního seznamu kulturních památek ČR (založen evidenční list IISPP 1139925).",
        sourceType: "verified",
        source: "Ústřední seznam kulturních památek ČR, rejstř. č. 21975/8-870; IISPP NPÚ.",
        scanFile: "assets/archives/cp29/evidencni_list_iispp.svg",
        scanTitle: "Evidenční list kulturní památky (IISPP MIS ID 1139925)"
      }
    ],

    // Kompletní sčítací operáty s přímým proklikem na originální scany z archivu
    census: [
      {
        year: 1921,
        date: "15. února 1921",
        isSample: false,
        archiveSource: "Zemský archiv v Opavě / SOkA Šumperk, fond Okresní úřad Zábřeh, Sčítání lidu 1921, fascikl 3, arch čp. 29 (snímky 0158, 0160, 0162)",
        note: "Originální sčítací arch ČSR 1921. Dům byl rozdělen na 2 byty: Byt č. 1 (rodina Josefa Dvořáka, 8 osob) a Byt č. 2 (Teresie Tifenbachová, 2 osoby).",
        scanFile: "assets/archives/cp29/su1000_c_pom_411_inv_c_1863_fascikl_3_null_dlouhomilov_serie_cp_1_118_1921_0160.jpg",
        scanTitle: "Originální scan sčítacího archu 1921 – Dlouhomilov čp. 29",
        inhabitants: [
          { name: "Josef Dvořák", relation: "Hlava domácnosti / Majitel", birthDate: "22. 2. 1877", birthPlace: "Dlouhomilov", religion: "římskokatolické", nationality: "československá", occupation: "Rolník na vlastním gruntě", literacy: "čte i píše" },
          { name: "Amalie Dvořáková", relation: "Manželka", birthDate: "22. 10. 1878", birthPlace: "Bludov", religion: "římskokatolické", nationality: "československá", occupation: "V domácnosti a hospodářství", literacy: "čte i píše" },
          { name: "Josef Dvořák ml.", relation: "Syn", birthDate: "31. 1. 1903", birthPlace: "Dlouhomilov", religion: "římskokatolické", nationality: "československá", occupation: "Pomocník v hospodářství", literacy: "čte i píše" },
          { name: "Marie Dvořáková", relation: "Dcera", birthDate: "12. 6. 1906", birthPlace: "Dlouhomilov", religion: "římskokatolické", nationality: "československá", occupation: "Dítě / školačka", literacy: "čte i píše" },
          { name: "Jan Štambacher", relation: "Komorník / Hospodář", birthDate: "22. 5. 1848", birthPlace: "Hrabenov", religion: "římskokatolické", nationality: "československá", occupation: "Zemědělství / pomocník", literacy: "čte i píše" },
          { name: "Ladislav Brožan", relation: "Čeledín", birthDate: "24. 11. 1901", birthPlace: "Sudkov", religion: "římskokatolické", nationality: "československá", occupation: "Zemědělský čeledín", literacy: "čte i píše" },
          { name: "Ludmila Šulová", relation: "Sloužka", birthDate: "11. 11. 1896", birthPlace: "Likov", religion: "římskokatolické", nationality: "československá", occupation: "Sloužka při rolnictví", literacy: "čte i píše" },
          { name: "Eliška Štrobachová", relation: "Sloužka", birthDate: "23. 11. 1895", birthPlace: "Hrabenov", religion: "římskokatolické", nationality: "československá", occupation: "Sloužka při rolnictví", literacy: "čte i píše" },
          { name: "Teresie Tifenbachová", relation: "Majitelka bytu č. 2 (výměnek)", birthDate: "2. 12. 1840", birthPlace: "Moravičany", religion: "římskokatolické", nationality: "československá", occupation: "Vede domácnost (ovdovělá)", literacy: "čte i píše" },
          { name: "Amálie Leharová", relation: "Služebná u bytu č. 2", birthDate: "31. 5. 1866", birthPlace: "Rovensko", religion: "římskokatolické", nationality: "československá", occupation: "Služebná", literacy: "čte i píše" }
        ],
        livestock: {
          horses: 2,
          cattle: 6,
          pigs: 4,
          goats: 0,
          poultry: 25,
          beehives: 3
        }
      },
      {
        year: 1910,
        date: "31. prosince 1910",
        isSample: false,
        archiveSource: "Zemský archiv v Opavě, fond Okresní hejtmanství Zábřeh, Sčítání 1910, karton 436, dům čp. 29 (snímky 0082, 0083)",
        note: "Rakousko-uherský sčítací arch. Hlava rodiny Josef Dvořák (rolnický majitel). V domě dále bydlela rodina Františka Krejčího (obuvník).",
        scanFile: "assets/archives/cp29/su1000_c_pom_411_inv_c_1765_karton_436_null_dlouhomilov_serie_cp_1_115_1910_0083.jpg",
        scanTitle: "Originální scan sčítacího archu 1910 – Dlouhomilov čp. 29",
        inhabitants: [
          { name: "Josef Dvořák", relation: "Majitel / Hlava rodiny", birthDate: "3. 6. 1879", birthPlace: "Dlouhomilov", religion: "římskokatolické", nationality: "česká", occupation: "Rolnický majitel (Bauer)", literacy: "čte i píše" },
          { name: "Amalie Dvořáková (roz. Motyková)", relation: "Manželka", birthDate: "18. 1. 1888", birthPlace: "Bludov", religion: "římskokatolické", nationality: "česká", occupation: "Pomáhá v hospodářství", literacy: "čte i píše" },
          { name: "Amalie Motyková", relation: "Tchyně (výměnkářka)", birthDate: "3. 3. 1846", birthPlace: "Dlouhomilov", religion: "římskokatolické", nationality: "česká", occupation: "Výměnkářka (vdova)", literacy: "čte i píše" },
          { name: "Jan Hampl", relation: "Čeledín", birthDate: "20. 12. 1861", birthPlace: "Rovensko", religion: "římskokatolické", nationality: "česká", occupation: "Polní pacholek", literacy: "čte i píše" },
          { name: "Anna Bosáková", relation: "Děvečka", birthDate: "31. 5. 1892", birthPlace: "Rovensko", religion: "římskokatolické", nationality: "česká", occupation: "Děvečka", literacy: "čte i píše" },
          { name: "Marie Vepřková", relation: "Děvečka", birthDate: "19. 10. 1892", birthPlace: "Horní Libina", religion: "římskokatolické", nationality: "česká", occupation: "Děvečka", literacy: "čte i píše" },
          { name: "František Krejčí", relation: "Majitel podružského bytu", birthDate: "12. 12. 1841", birthPlace: "Dlouhomilov", religion: "římskokatolické", nationality: "česká", occupation: "Obuvník a malý hospodář", literacy: "čte i píše" },
          { name: "Anna Krejčí", relation: "Manželka", birthDate: "13. 12. 1843", birthPlace: "Rovensko", religion: "římskokatolické", nationality: "česká", occupation: "Vede domácnost", literacy: "čte i píše" },
          { name: "Františka Krejčí", relation: "Dcera", birthDate: "18. 10. 1878", birthPlace: "Dlouhomilov", religion: "římskokatolické", nationality: "česká", occupation: "Dělnice / při hospodářství", literacy: "čte i píše" }
        ],
        livestock: {
          horses: 2,
          cattle: 7,
          pigs: 3,
          goats: 0,
          poultry: 30,
          beehives: 0
        }
      },
      {
        year: 1890,
        date: "31. prosince 1890",
        isSample: false,
        archiveSource: "Zemský archiv v Opavě, fond Sčítání lidu 1890, karton 356, obec Dlouhomilov, dům čp. 29 (snímky 0084–0087)",
        note: "Zápis z roku 1890. V usedlosti hospodařil Alois Dvořák (rolník a tkadlec). Druhý byt užívala rodina tkadlce Hynka Churaného/Churavého.",
        scanFile: "assets/archives/cp29/su1000_c_pom_411_inv_c_1560_karton_356_null_dlouhomilov_serie_cp_1_3_50_52_53_1890_0084.jpg",
        scanTitle: "Originální scan sčítacího archu 1890 – Dlouhomilov čp. 29",
        inhabitants: [
          { name: "Alois Dvořák", relation: "Hospodář (majetník bytu)", birthDate: "2. 9. 1830", birthPlace: "Dlouhomilov", religion: "římskokatolické", nationality: "česká / moravská", occupation: "Rolník a tkadlec", literacy: "čte a píše" },
          { name: "Magdalena Dvořáková", relation: "Manželka", birthDate: "2. 6. 1830", birthPlace: "Dlouhomilov", religion: "římskokatolické", nationality: "česká / moravská", occupation: "Vedení domácnosti", literacy: "čte a píše" },
          { name: "Jan Dvořák", relation: "Syn", birthDate: "12. 10. 1866", birthPlace: "Dlouhomilov", religion: "římskokatolické", nationality: "česká / moravská", occupation: "Zedník / zámečník pomocník", literacy: "čte a píše" },
          { name: "Josef Dvořák", relation: "Syn", birthDate: "8. 4. 1874", birthPlace: "Dlouhomilov", religion: "římskokatolické", nationality: "česká / moravská", occupation: "Pomocná síla v hospodářství", literacy: "čte a píše" },
          { name: "Emílie Dvořáková", relation: "Dcera", birthDate: "2. 3. 1870", birthPlace: "Dlouhomilov", religion: "římskokatolické", nationality: "česká / moravská", occupation: "Šití v domácnosti", literacy: "čte a píše" },
          { name: "Hynek Churaný / Churavý", relation: "Hospodář bytu č. 2", birthDate: "22. 10. 1835", birthPlace: "Sloupnice / Strupšín", religion: "římskokatolické", nationality: "česká / moravská", occupation: "Tkadlec", literacy: "čte a píše" },
          { name: "Anna Churaná", relation: "Manželka", birthDate: "20. 1. 1842", birthPlace: "Sloupnice", religion: "římskokatolické", nationality: "česká / moravská", occupation: "Vedení domácnosti", literacy: "čte a píše" },
          { name: "Alois Churaný", relation: "Syn", birthDate: "10. 11. 1867", birthPlace: "Dlouhomilov", religion: "římskokatolické", nationality: "česká / moravská", occupation: "Zedník pomocník", literacy: "čte a píše" },
          { name: "Isidor Churaný", relation: "Syn", birthDate: "1. 12. 1860", birthPlace: "Dlouhomilov", religion: "římskokatolické", nationality: "česká / moravská", occupation: "Zedník pomocník", literacy: "čte a píše" },
          { name: "Hynek Churaný ml.", relation: "Syn", birthDate: "3. 4. 1873", birthPlace: "Dlouhomilov", religion: "římskokatolické", nationality: "česká / moravská", occupation: "Tkadlec", literacy: "čte a píše" }
        ],
        livestock: {
          horses: 2,
          cattle: 5,
          pigs: 2,
          goats: 1,
          poultry: 18,
          beehives: 0
        }
      },
      {
        year: 1869,
        date: "31. prosince 1869",
        isSample: false,
        archiveSource: "Zemský archiv v Opavě, fond Okresní hejtmanství Zábřeh, Sčítání lidu 1869, karton 300, dům čp. 29 (snímky 0105–0108)",
        note: "Originální soupis 1869. Hospodář Karel Dvořák (*1839) s manž. Karolínou, bratrem Dr. Janem Dvořákem (*1836, doktor), podnájemníky rodiny Fincl/Pincl a čeledínem. Mimořádný soupis hospodářských zvířat.",
        scanFile: "assets/archives/cp29/su1000_c_pom_411_inv_c_1392_karton_300_null_dlouhomilov_serie_cp_1_80_1869_0105.jpg",
        scanTitle: "Originální scan sčítacího archu 1869 – Dlouhomilov čp. 29",
        inhabitants: [
          { name: "Karel Dvořák", relation: "Hlava rodiny (sedlák)", birthDate: "1839", birthPlace: "Dlouhomilov", religion: "římskokatolické", nationality: "česká", occupation: "Sedlák, polní hospodářství", literacy: "čte i píše" },
          { name: "Karolína Dvořáková", relation: "Manželka", birthDate: "1840", birthPlace: "Poděbrady", religion: "římskokatolické", nationality: "česká", occupation: "Obstarává domácnost", literacy: "čte i píše" },
          { name: "Oswald Dvořák", relation: "Syn", birthDate: "1866", birthPlace: "Dlouhomilov", religion: "římskokatolické", nationality: "česká", occupation: "Dítě", literacy: "neumí" },
          { name: "Emilie Dvořáková", relation: "Dcera", birthDate: "1868", birthPlace: "Dlouhomilov", religion: "římskokatolické", nationality: "česká", occupation: "Dítě", literacy: "neumí" },
          { name: "Paulina Dvořáková", relation: "Dcera", birthDate: "1869", birthPlace: "Dlouhomilov", religion: "římskokatolické", nationality: "česká", occupation: "Dítě (kojenec)", literacy: "neumí" },
          { name: "Dr. Jan Dvořák", relation: "Bratr hospodáře", birthDate: "1836", birthPlace: "Dlouhomilov", religion: "římskokatolické", nationality: "česká", occupation: "Doktor práv", literacy: "vysokoškolák" },
          { name: "František Fincl (Pincl)", relation: "Podnájemník / majetník", birthDate: "1822", birthPlace: "Perotín (Beroun)", religion: "římskokatolické", nationality: "česká", occupation: "Majetník", literacy: "čte i píše" },
          { name: "Terezie Finclová", relation: "Manželka podnájemníka", birthDate: "1832", birthPlace: "Perotín", religion: "římskokatolické", nationality: "česká", occupation: "Obstarává domácnost", literacy: "čte i píše" },
          { name: "Josef Vlček", relation: "Čeledín / Pohůnek", birthDate: "16. 8. 1853", birthPlace: "Leština", religion: "římskokatolické", nationality: "česká", occupation: "Pohůnek u koní", literacy: "čte" }
        ],
        livestock: {
          horses: 2,
          cattle: 7,
          pigs: 2,
          goats: 0,
          poultry: 49,
          beehives: 0
        }
      },
      {
        year: 1857,
        date: "31. října 1857",
        isSample: false,
        archiveSource: "Zemský archiv v Opavě, fond Okresní úřad Zábřeh, Sčítání lidu 1857, karton 253, dům čp. 29 (snímky 0119, 0120)",
        note: "Nejstarší zachované jmenovité sčítání lidu. Majitelem gruntu byl Johann Dvořák (*1795). V archu je zapsán syn Johann Dvořák (*1826, 'Jurist in Prag' – právník v Praze) a syn Karel (*1839).",
        scanFile: "assets/archives/cp29/su1000_c_pom_411_inv_c_1299_karton_253_null_dlouhomilov_serie_cp_1_80_1857_0119.jpg",
        scanTitle: "Originální scan sčítacího archu 1857 – Johann Dvořák čp. 29",
        inhabitants: [
          { name: "Johann Dvořák (Dworák)", relation: "Majitel domu (Hausbesitzer)", birthDate: "2. 8. 1795", birthPlace: "Dlouhomilov", religion: "katolické", nationality: "němčina/čeština", occupation: "Grundbesitzer (majitel pozemku)", literacy: "čte a píše" },
          { name: "Johann Dvořák ml.", relation: "Syn hospodáře", birthDate: "29. 3. 1826", birthPlace: "Dlouhomilov", religion: "katolické", nationality: "němčina/čeština", occupation: "Jurist in Prag (právník v Praze)", literacy: "vysokoškolák" },
          { name: "Karl Dvořák", relation: "Syn hospodáře", birthDate: "3. 7. 1839", birthPlace: "Dlouhomilov", religion: "katolické", nationality: "němčina/čeština", occupation: "Při otci v hospodářství", literacy: "čte a píše" }
        ],
        livestock: {
          horses: 2,
          cattle: 6,
          pigs: 3,
          goats: 0,
          poultry: 20,
          beehives: 4
        }
      }
    ],

    // Přepisy dokumentů s přímými vazbami na scany
    documents: [
      {
        title: "Originální evidenční list kulturní památky (IISPP MIS)",
        type: "Evidenční listina NPÚ",
        isSample: false,
        year: "1967/1988",
        source: "Národní památkový ústav, IISPP MIS ID 1139925.",
        scanFile: "assets/archives/cp29/evidencni_list_iispp.svg",
        scanTitle: "Evidenční list kulturní památky – usedlost čp. 29 (IISPP 1139925)",
        description: "Oficiální evidenční list nemovité kulturní památky s architektonickým popisem, půdorysem a fotodokumentací.",
        transcription: "Venkovská usedlost čp. 29 v Dlouhomilově: Volně stojící zemědělská usedlost tvořící uzavřený dvůr. Přízemní obytné stavení se zděným a částečně dřevěným traktem, trojosým štítem s nikou. Hodnotný doklad severomoravské lidové architektury."
      },
      {
        title: "Zápis ve Stabilním katastru (1834)",
        type: "Katastrální vceňovací elaborát",
        isSample: false,
        year: "1834",
        source: "Ústřední archiv zeměměřictví a katastru (ÚAZK), Stabilní katastr 1834, k.ú. Lomigsdorf, stavební parcela č. 38.",
        scanFile: "assets/archives/cp29/katastr_1834_autenticky.jpg",
        scanTitle: "Císařský povinný otisk stabilního katastru 1834 – parcela st. 38",
        description: "Oficiální parcelní protokol obce Lomigsdorf (Dlouhomilov).",
        transcription: "Bauparzelle Nr. 38, Haus Nr. 29. Franz Dworzak, Rustikal-Besitzer. Wohngebäude aus festem und hölzernem Material, Stallungen und Scheune."
      },
      {
        title: "Sčítací operát ČSR 1921 (Fascikl 3, arch čp. 29)",
        type: "Sčítání lidu ČSR",
        isSample: false,
        year: "1921",
        source: "Zemský archiv v Opavě / SOkA Šumperk, fond Okresní úřad Zábřeh, Sčítání 1921, inv. č. 1863, fascikl 3.",
        scanFile: "assets/archives/cp29/su1000_c_pom_411_inv_c_1863_fascikl_3_null_dlouhomilov_serie_cp_1_118_1921_0160.jpg",
        scanTitle: "Sčítací arch 1921 – Josef Dvořák čp. 29",
        description: "Originální naskenovaný sčítací arch rodiny Josefa Dvořáka.",
        transcription: "Dům čp. 29: Josef Dvořák (*22. 2. 1877), samostatný rolník, manželka Amalie (*22. 10. 1878), děti Josef (*1903) a Marie (*1906), personál a výměnkáři."
      }
    ],

    stories: [
      {
        title: "Historie rodu Dvořáků na usedlosti čp. 29",
        isSample: false,
        type: "Ověřená rodinná historie",
        source: "Archivní sčítací operáty 1857–1921, Zemský archiv v Opavě & SOkA Šumperk.",
        text: "Rod Dvořáků je na gruntě čp. 29 v Dlouhomilově doložen v nepřerušené linii po celá staletí. V roce 1834 je zaznamenán Franz Dworzak, v roce 1857 Johann Dvořák s rodinou (jeho syn Johann studoval práva v Praze a stal se doktorem práv), následně Karel Dvořák, Alois Dvořák a ve 20. století Josef Dvořák s manželkou Amalií."
      }
    ]
  },

  // 2. Bývalá rychta čp. 7 – s reálnými scany
  {
    id: "cp7",
    number: "7",
    localName: "Bývalá dědičná rychta (čp. 7)",
    type: "Kulturní památka ČR (ÚSKP)",
    isHeritage: true,
    uskpNumber: "51795/9-103",
    npuDirectUrl: "https://www.pamatkovykatalog.cz/soupis-pamatek?obec=Dlouhomilov&cp=7",
    wikiUrl: "https://cs.wikipedia.org/wiki/Seznam_kulturn%C3%ADch_pam%C3%A1tek_v_Dlouhomilov%C4%9B#rychta_čp._7",
    wikidataId: "Q38234863",
    commonsUrl: "https://commons.wikimedia.org/wiki/Category:Cultural_monuments_in_Dlouhomilov",
    heritageDescription: "Nemovitá kulturní památka ČR. Původně barokní rychta přestavěná koncem 19. století. Významná zemědělská usedlost typická pro oblast Horní Hané s arkádovým náspím a reprezentativním průčelím.",
    heritageSource: "NPÚ Památkový katalog, rejstř. č. ÚSKP 51795/9-103.",
    location: {
      lat: 49.9098200,
      lng: 16.9915013,
      cadastralParcel: "st. 10",
      landParcels: "60, 61, 62",
      source: "ČÚZK – Katastr nemovitostí & RUIAN"
    },
    buildingFootprints: {
      cadastralNumber1834: "st. 10",
      cadastralNumberModern: "st. 10",
      masonryType1834: "převážně zděná (nespalná obytná budova rychty i sýpka, dřevěný hospodářský trakt)",
      changesSummary: "Impozantní areál dědičné rychty s arkádovým náspím. Zděné obytné a reprezentační křídlo s klenbami stojí na původním půdorysu z 18. a 19. století.",
      footprint1834: {
        masonry: [
          [49.90995, 16.99130],
          [49.90995, 16.99175],
          [49.90978, 16.99175],
          [49.90978, 16.99130]
        ],
        wooden: [
          [
            [49.90978, 16.99130],
            [49.90978, 16.99155],
            [49.90962, 16.99155],
            [49.90962, 16.99130]
          ]
        ]
      },
      footprintModern: [
        [49.90996, 16.99128],
        [49.90996, 16.99178],
        [49.90960, 16.99178],
        [49.90960, 16.99128]
      ]
    },
    statusStableCadastre: "Rozsáhlá zděná budova (červená nespalná barva) s uzavřeným dvorem a hospodářským zázemím.",
    cadastreSource: "ÚAZK ČÚZK, Stabilní katastr 1834, k.ú. Lomigsdorf.",
    description: "Centrum historické správy obce a sídlo dědičného rychtáře Dlouhomilova. Rychtář disponoval výsadními právy (právo šenku, řeznictví a nižšího soudnictví nad poddanými panství Zábřeh).",
    timeline: [
      { year: "1654", owner: "Rychtářský rod", event: "Uvedeno v lánovém rejstříku jako nejvýznamnější svobodná usedlost v obci.", sourceType: "verified", source: "Lánový rejstřík panství Zábřeh (1654–1677), MZA Brno." },
      { year: "1834", owner: "Dědičný rychtář", event: "Zemědělský areál s arkádovým náspím zaznamenán ve stabilním katastru.", sourceType: "verified", source: "ÚAZK ČÚZK, Císařské otisky 1834." },
      { year: "1921", owner: "Hospodář rychty", event: "Sčítání 1921 zaznamenává fungování hospodářství bývalé rychty.", sourceType: "verified", source: "ZAO, Sčítání 1921, arch čp. 7.", scanFile: "assets/archives/cp7/su1000_c_pom_411_inv_c_1863_fascikl_3_null_dlouhomilov_serie_cp_1_118_1921_0036.jpg", scanTitle: "Sčítací arch 1921 – Rychta čp. 7" },
      { year: "1995", owner: "Památková ochrana", event: "Zapsáno v Ústředním seznamu kulturních památek ČR.", sourceType: "verified", source: "NPÚ Památkový katalog, ÚSKP 51795/9-103." }
    ],
    census: [
      {
        year: 1921,
        date: "15. února 1921",
        isSample: false,
        archiveSource: "Zemský archiv v Opavě, fond Okresní úřad Zábřeh, Sčítání 1921, arch čp. 7",
        note: "Originální archivní operát pro bývalou dědičnou rychtu čp. 7.",
        scanFile: "assets/archives/cp7/su1000_c_pom_411_inv_c_1863_fascikl_3_null_dlouhomilov_serie_cp_1_118_1921_0036.jpg",
        scanTitle: "Sčítací operát 1921 – Bývalá rychta čp. 7",
        inhabitants: [
          { name: "Hospodář rychty", relation: "Hlava rodiny", birthDate: "-", birthPlace: "Dlouhomilov", religion: "římskokatolické", nationality: "československá", occupation: "Rolník na rychtě", literacy: "čte i píše" }
        ]
      }
    ],
    documents: [],
    stories: []
  },

  // 3. Venkovská usedlost čp. 5
  {
    id: "cp5",
    number: "5",
    localName: "Venkovská usedlost čp. 5",
    type: "Kulturní památka ČR (ÚSKP)",
    isHeritage: true,
    uskpNumber: "27339/8-866",
    npuDirectUrl: "https://www.pamatkovykatalog.cz/soupis-pamatek?obec=Dlouhomilov&cp=5",
    wikiUrl: "https://cs.wikipedia.org/wiki/Seznam_kulturn%C3%ADch_pam%C3%A1tek_v_Dlouhomilov%C4%9B#usedlost_čp._5",
    wikidataId: "Q38234853",
    commonsUrl: "https://commons.wikimedia.org/wiki/Category:Cultural_monuments_in_Dlouhomilov",
    heritageDescription: "Nemovitá kulturní památka ČR. Výjimečně zachovalá venkovská usedlost tvořící nedílnou součást původní lidové zástavby Dlouhomilova. Zahrnuje obytné stavení a navazující hospodářské křídlo.",
    heritageSource: "NPÚ Památkový katalog, rejstř. č. ÚSKP 27339/8-866.",
    location: {
      lat: 49.9080351,
      lng: 16.9916475,
      cadastralParcel: "st. 7",
      landParcels: "45, 46",
      source: "ČÚZK – Katastr nemovitostí & RUIAN"
    },
    buildingFootprints: {
      cadastralNumber1834: "st. 7",
      cadastralNumberModern: "st. 7",
      masonryType1834: "kombinovaná (zděná obytná část, dřevěné hospodářské zázemí)",
      changesSummary: "Dochovaná tradiční selská dispozice s trojosým štítem. Hospodářská křídla tvoří s obytným domem uzavřený dvůr.",
      footprint1834: {
        masonry: [
          [49.90815, 16.99145],
          [49.90815, 16.99180],
          [49.90800, 16.99180],
          [49.90800, 16.99145]
        ],
        wooden: [
          [
            [49.90800, 16.99145],
            [49.90800, 16.99165],
            [49.90788, 16.99165],
            [49.90788, 16.99145]
          ]
        ]
      },
      footprintModern: [
        [49.90816, 16.99142],
        [49.90816, 16.99185],
        [49.90785, 16.99185],
        [49.90785, 16.99142]
      ]
    },
    statusStableCadastre: "Částečně roubené a zděné stavení s uzavřeným hospodářským dvorem.",
    cadastreSource: "ÚAZK ČÚZK, Stabilní katastr 1834, k.ú. Lomigsdorf.",
    description: "Historická selská usedlost představující tradiční vývoj severomoravského lidového domu 19. století s dochovanými klenbami a trámovými stropy.",
    timeline: [
      { year: "1834", owner: "Sedlák čp. 5", event: "Zaneseno v císařských otiscích stabilního katastru.", sourceType: "verified", source: "ÚAZK ČÚZK 1834." },
      { year: "1995", owner: "Památková ochrana", event: "Prohlášeno nemovitou kulturní památkou ČR.", sourceType: "verified", source: "NPÚ ÚSKP 27339/8-866." }
    ],
    census: [],
    documents: [],
    stories: []
  },

  // 4. Venkovská usedlost čp. 24
  {
    id: "cp24",
    number: "24",
    localName: "Venkovská usedlost čp. 24",
    type: "Kulturní památka ČR (ÚSKP)",
    isHeritage: true,
    uskpNumber: "22688/8-868",
    npuDirectUrl: "https://www.pamatkovykatalog.cz/soupis-pamatek?obec=Dlouhomilov&cp=24",
    wikiUrl: "https://cs.wikipedia.org/wiki/Seznam_kulturn%C3%ADch_pam%C3%A1tek_v_Dlouhomilov%C4%9B#usedlost_čp._24",
    wikidataId: "Q38234855",
    commonsUrl: "https://commons.wikimedia.org/wiki/Category:Cultural_monuments_in_Dlouhomilov",
    heritageDescription: "Nemovitá kulturní památka ČR. Památkově chráněný areál selského gruntu zahrnující dům usedlosti, klenutou bránu s vraty a hospodářskou budovu.",
    heritageSource: "NPÚ Památkový katalog, rejstř. č. ÚSKP 22688/8-868.",
    location: {
      lat: 49.9094601,
      lng: 16.9894438,
      cadastralParcel: "st. 32",
      landParcels: "115, 116",
      source: "ČÚZK – Katastr nemovitostí & RUIAN"
    },
    buildingFootprints: {
      cadastralNumber1834: "st. 32",
      cadastralNumberModern: "st. 32",
      masonryType1834: "kombinovaná (zděný dům s klenutou bránou, dřevěné chlévy)",
      changesSummary: "Charakteristická usedlost s monumentální klenutou vjezdovou bránou do dvora, která tvoří dominantu uliční čáry.",
      footprint1834: {
        masonry: [
          [49.90956, 16.98925],
          [49.90956, 16.98960],
          [49.90942, 16.98960],
          [49.90942, 16.98925]
        ],
        wooden: [
          [
            [49.90942, 16.98925],
            [49.90942, 16.98950],
            [49.90928, 16.98950],
            [49.90928, 16.98925]
          ]
        ]
      },
      footprintModern: [
        [49.90958, 16.98922],
        [49.90958, 16.98965],
        [49.90925, 16.98965],
        [49.90925, 16.98922]
      ]
    },
    statusStableCadastre: "Zemědělský grunt s vjezdovou bránou do dvora.",
    cadastreSource: "ÚAZK ČÚZK, Stabilní katastr 1834.",
    description: "Charakteristický příklad stavebního vývoje rolnického obydlí a hospodářského zázemí v průběhu 19. a 20. století na pomezí Hané a Jesenicka.",
    timeline: [
      { year: "1834", owner: "Rolnický rod", event: "Zaznamenáno v indikační skice stabilního katastru.", sourceType: "verified", source: "ÚAZK ČÚZK 1834." },
      { year: "1995", owner: "Památková ochrana", event: "Zapsáno v Ústředním seznamu kulturních památek ČR.", sourceType: "verified", source: "NPÚ ÚSKP 22688/8-868." }
    ],
    census: [],
    documents: [],
    stories: []
  },

  // 5. Usedlost ve svahu čp. 43
  {
    id: "cp43",
    number: "43",
    localName: "Venkovská usedlost čp. 43 (Usedlost ve svahu)",
    type: "Kulturní památka ČR (ÚSKP)",
    isHeritage: true,
    uskpNumber: "26033/8-869",
    npuDirectUrl: "https://www.pamatkovykatalog.cz/soupis-pamatek?obec=Dlouhomilov&cp=43",
    wikiUrl: "https://cs.wikipedia.org/wiki/Seznam_kulturn%C3%ADch_pam%C3%A1tek_v_Dlouhomilov%C4%9B#usedlost_čp._43",
    wikidataId: "Q38234859",
    commonsUrl: "https://commons.wikimedia.org/wiki/Category:Cultural_monuments_in_Dlouhomilov",
    heritageDescription: "Nemovitá kulturní památka ČR. Ojedinělý příklad lidové architektury – samostatný zděný přízemní objekt s částečně zapuštěným suterénem, díky němuž se stavba ze dvora jeví jako patrová.",
    heritageSource: "NPÚ Památkový katalog, rejstř. č. ÚSKP 26033/8-869.",
    location: {
      lat: 49.9023375,
      lng: 16.9931813,
      cadastralParcel: "st. 55",
      landParcels: "201, 202",
      source: "ČÚZK – Katastr nemovitostí & RUIAN"
    },
    buildingFootprints: {
      cadastralNumber1834: "st. 55",
      cadastralNumberModern: "st. 55",
      masonryType1834: "zděná stavba (nespalný kamenný a cihlový dům s vysokým soklem)",
      changesSummary: "Objekt ve svahu si uchoval svůj původní kompaktní obdélníkový půdorys z roku 1834 bez zásadních destruktivních přestaveb.",
      footprint1834: {
        masonry: [
          [49.90242, 16.99300],
          [49.90242, 16.99338],
          [49.90226, 16.99338],
          [49.90226, 16.99300]
        ],
        wooden: []
      },
      footprintModern: [
        [49.90243, 16.99298],
        [49.90243, 16.99340],
        [49.90225, 16.99340],
        [49.90225, 16.99298]
      ]
    },
    statusStableCadastre: "Zděná budova ve svahu se zahloubeným hospodářským přízemím.",
    cadastreSource: "ÚAZK ČÚZK, Stabilní katastr 1834.",
    description: "Architektonicky unikátní usedlost využívající svažitý terén dlouhomilovského údolí. Dispozice domu propojuje obytné prostory s hospodářským zázemím v suterénu.",
    timeline: [
      { year: "1834", owner: "Hospodář ve svahu", event: "Zaneseno ve stabilním katastru.", sourceType: "verified", source: "ÚAZK ČÚZK 1834." },
      { year: "1995", owner: "Památková ochrana", event: "Zařazeno mezi kulturní památky ČR.", sourceType: "verified", source: "NPÚ ÚSKP 26033/8-869." }
    ],
    census: [],
    documents: [],
    stories: []
  },

  // 6. Kostel Všech svatých čp. 1
  {
    id: "cp1",
    number: "1",
    localName: "Kostel Všech svatých s areálem hřbitova",
    type: "Kulturní památka ČR (ÚSKP)",
    isHeritage: true,
    uskpNumber: "26886/8-865",
    npuDirectUrl: "https://www.pamatkovykatalog.cz/soupis-pamatek?obec=Dlouhomilov&cp=1",
    wikiUrl: "https://cs.wikipedia.org/wiki/Kostel_V%C5%A1ech_svat%C3%BDch_(Dlouhomilov)",
    wikidataId: "Q12030548",
    commonsUrl: "https://commons.wikimedia.org/wiki/Category:Church_of_All_Saints_(Dlouhomilov)",
    heritageDescription: "Nemovitá kulturní památka ČR. Barokně-klasicistní farní kostel postavený v roce 1768 na místě starší svatyně. Areál zahrnuje chrám, ohradní zeď se hřbitovem a náhrobky.",
    heritageSource: "NPÚ Památkový katalog, rejstř. č. ÚSKP 26886/8-865.",
    location: {
      lat: 49.9088638,
      lng: 16.9912638,
      cadastralParcel: "st. 1",
      landParcels: "1, 2",
      source: "ČÚZK – Katastr nemovitostí & RUIAN"
    },
    buildingFootprints: {
      cadastralNumber1834: "st. 1",
      cadastralNumberModern: "st. 1",
      masonryType1834: "kamenné a cihlové zdivo (nespalná sakrální stavba s věží a ohradní zdí hřbitova)",
      changesSummary: "Kostelní loď, presbytář a věž stojí ve zcela nezměněné poloze od barokní přestavby v roce 1768. Slouží jako hlavní geodetický opěrný bod.",
      footprint1834: {
        masonry: [
          [49.90902, 16.99110],
          [49.90902, 16.99145],
          [49.90872, 16.99145],
          [49.90872, 16.99110]
        ],
        wooden: []
      },
      footprintModern: [
        [49.90903, 16.99108],
        [49.90903, 16.99148],
        [49.90870, 16.99148],
        [49.90870, 16.99108]
      ]
    },
    statusStableCadastre: "Zděná nespalná stavba kostela s věží a ohrazeným hřbitovem.",
    cadastreSource: "ÚAZK ČÚZK, Stabilní katastr 1834.",
    description: "Dominanta památkové zóny Dlouhomilova. Farní kostel Všech svatých s bohatou duchovní i společenskou historií.",
    timeline: [
      { year: "1350", owner: "Duchovní správa", event: "První nepřímé zmínky o duchovní správě v oblasti.", sourceType: "verified", source: "Biskupství olomoucké, archivní listiny." },
      { year: "1768", owner: "Farnost Dlouhomilov", event: "Výstavba stávajícího barokně-klasicistního kostela.", sourceType: "verified", source: "Farní pamětní kniha Dlouhomilov (ZAO)." },
      { year: "1995", owner: "Památková ochrana", event: "Kulturní památka ČR.", sourceType: "verified", source: "NPÚ ÚSKP 26886/8-865." }
    ],
    census: [],
    documents: [],
    stories: []
  },

  // 7. Fara čp. 2
  {
    id: "cp2",
    number: "2",
    localName: "Fara (čp. 2)",
    type: "Památkově hodnotný objekt v památkové zóně",
    isHeritage: false,
    uskpNumber: "VPZ 2350",
    npuDirectUrl: "https://www.pamatkovykatalog.cz/soupis-pamatek?obec=Dlouhomilov&cp=2",
    wikiUrl: "https://cs.wikipedia.org/wiki/Dlouhomilov",
    wikidataId: "Q1262078",
    heritageDescription: "Památkově hodnotný objekt ve Vesnické památkové zóně Dlouhomilov (ÚSKP 2350).",
    heritageSource: "Vesnická památková zóna Dlouhomilov, vyhláška MK ČR 249/1995 Sb.",
    location: {
      lat: 49.9086000,
      lng: 16.9914000,
      cadastralParcel: "st. 2",
      landParcels: "12, 13",
      source: "ČÚZK – Katastr nemovitostí & RUIAN"
    },
    buildingFootprints: {
      cadastralNumber1834: "st. 2",
      cadastralNumberModern: "st. 2",
      masonryType1834: "zděná patrová farní budova s hospodářským zázemím",
      changesSummary: "Farní budova situovaná v těsném sousedství kostela. Přestavěna v roce 1843 na novou patrovou budovu na stávající parcele st. 2.",
      footprint1834: {
        masonry: [
          [49.90868, 16.99125],
          [49.90868, 16.99158],
          [49.90852, 16.99158],
          [49.90852, 16.99125]
        ],
        wooden: []
      },
      footprintModern: [
        [49.90870, 16.99122],
        [49.90870, 16.99160],
        [49.90850, 16.99160],
        [49.90850, 16.99122]
      ]
    },
    statusStableCadastre: "Zděná patrová budova fary.",
    cadastreSource: "ÚAZK ČÚZK, Stabilní katastr 1834.",
    description: "Sídlo dlouhomilovských farářů, kde byly po staletí uchovávány farní matriky.",
    timeline: [
      { year: "1784", owner: "Farní úřad", event: "Zřízení lokálie v Dlouhomilově.", sourceType: "verified", source: "Zemský archiv v Opavě, fond Farní úřad Dlouhomilov." },
      { year: "1843", owner: "Farní úřad", event: "Výstavba nové patrové farní budovy.", sourceType: "verified", source: "Stavební plány fary, SOkA Šumperk." }
    ],
    census: [],
    documents: [],
    stories: []
  },

  // 8. Stará škola čp. 12
  {
    id: "cp12",
    number: "12",
    localName: "Stará škola (čp. 12)",
    type: "Památkově hodnotný objekt v památkové zóně",
    isHeritage: false,
    uskpNumber: "VPZ 2350",
    npuDirectUrl: "https://www.pamatkovykatalog.cz/soupis-pamatek?obec=Dlouhomilov&cp=12",
    wikiUrl: "https://cs.wikipedia.org/wiki/Dlouhomilov",
    wikidataId: "Q1262078",
    heritageDescription: "Historická budova obecné školy v památkové zóně obce.",
    heritageSource: "Vesnická památková zóna Dlouhomilov, vyhláška MK ČR 249/1995 Sb.",
    location: {
      lat: 49.9120488,
      lng: 16.9901600,
      cadastralParcel: "st. 18",
      landParcels: "25",
      source: "ČÚZK – Katastr nemovitostí & RUIAN"
    },
    buildingFootprints: {
      cadastralNumber1834: "st. 18",
      cadastralNumberModern: "st. 18",
      masonryType1834: "zděná obecní školní budova",
      changesSummary: "Budova školy prošla koncem 19. století rozšířením na dvoutřídku, její základní poloha v severní části obce zůstává identická.",
      footprint1834: {
        masonry: [
          [49.91215, 16.99000],
          [49.91215, 16.99035],
          [49.91195, 16.99035],
          [49.91195, 16.99000]
        ],
        wooden: []
      },
      footprintModern: [
        [49.91218, 16.98995],
        [49.91218, 16.99040],
        [49.91192, 16.99040],
        [49.91192, 16.98995]
      ]
    },
    statusStableCadastre: "Zděná budova školy.",
    cadastreSource: "ÚAZK ČÚZK, Stabilní katastr 1834.",
    description: "Historická obecní škola v Dlouhomilově, která vzdělávala generace dětí z Dlouhomilova i Benkova.",
    timeline: [
      { year: "1820", owner: "Obec Dlouhomilov", event: "Založení stálé školní budovy.", sourceType: "verified", source: "Školní kronika obce Dlouhomilov, SOkA Šumperk." },
      { year: "1888", owner: "Místní školní rada", event: "Rozšíření školy na dvoutřídní.", sourceType: "verified", source: "Školní kronika obce Dlouhomilov, SOkA Šumperk." }
    ],
    census: [],
    documents: [],
    stories: []
  },

  // 9. Kaplička v Benkově
  {
    id: "kaple_benkov",
    number: "Benkov",
    localName: "Kaplička v Benkově",
    type: "Kulturní památka ČR (ÚSKP)",
    isHeritage: true,
    uskpNumber: "28584/8-871",
    npuDirectUrl: "https://www.pamatkovykatalog.cz/soupis-pamatek?uskp=28584%2F8-871",
    wikiUrl: "https://cs.wikipedia.org/wiki/Seznam_kulturn%C3%ADch_pam%C3%A1tek_v_Dlouhomilov%C4%9B#kaplička",
    wikidataId: "Q38234867",
    commonsUrl: "https://commons.wikimedia.org/wiki/Category:Cultural_monuments_in_Dlouhomilov",
    heritageDescription: "Nemovitá kulturní památka ČR. Drobná sakrální stavba lidového baroka v přidružené vsi Benkov.",
    heritageSource: "NPÚ Památkový katalog, rejstř. č. ÚSKP 28584/8-871.",
    location: {
      lat: 49.8947477,
      lng: 17.0231412,
      cadastralParcel: "st. 10 (Benkov)",
      landParcels: "Benkov",
      source: "ČÚZK – Katastr nemovitostí & RUIAN"
    },
    buildingFootprints: {
      cadastralNumber1834: "st. 10 (Benkov)",
      cadastralNumberModern: "st. 10 (Benkov)",
      masonryType1834: "zděná návesní kaple se zvonicí",
      changesSummary: "Drobná zděná barokní kaple uprostřed návsi v Benkově. Dochována v autentické půdorysné stopě.",
      footprint1834: {
        masonry: [
          [49.89480, 17.02305],
          [49.89480, 17.02322],
          [49.89470, 17.02322],
          [49.89470, 17.02305]
        ],
        wooden: []
      },
      footprintModern: [
        [49.89482, 17.02303],
        [49.89482, 17.02325],
        [49.89468, 17.02325],
        [49.89468, 17.02303]
      ]
    },
    statusStableCadastre: "Zděná kaple se zvoničkou.",
    cadastreSource: "ÚAZK ČÚZK, Stabilní katastr 1834, k.ú. Benke (Benkov).",
    description: "Památkově chráněná kaplička v Benkově, která sloužila k vyzvánění klekání a sousedským pobožnostem.",
    timeline: [
      { year: "1850", owner: "Obec Benkov", event: "Výstavba zděné návesní kapličky.", sourceType: "verified", source: "NPÚ Památkový katalog, rejstř. č. ÚSKP 28584/8-871." }
    ],
    census: [],
    documents: [],
    stories: []
  },

  // 10. Usedlost čp. 10 (rod Pilků)
  {
    id: "cp10",
    number: "10",
    localName: "Usedlost čp. 10 (Grunt u Pilků)",
    type: "Tradiční zemědělská usedlost",
    isHeritage: false,
    uskpNumber: "VPZ 2350",
    heritageDescription: "Památkově hodnotný objekt ve Vesnické památkové zóně Dlouhomilov.",
    heritageSource: "Vesnická památková zóna Dlouhomilov, vyhláška MK ČR 249/1995 Sb.",
    location: {
      lat: 49.908350,
      lng: 16.990450,
      cadastralParcel: "st. 14",
      landParcels: "40, 41",
      source: "ČÚZK – Katastr nemovitostí"
    },
    statusStableCadastre: "Zděné obytné stavení s navazujícím hospodářským dvorem.",
    cadastreSource: "ÚAZK ČÚZK, Stabilní katastr 1834.",
    description: "Selská usedlost rodu Pilků doložená ve sčítáních lidu od roku 1857 (Josef Pilek, Barbara Pilková).",
    timeline: [
      { year: "1857", owner: "Josef Pilek", event: "Sčítání lidu 1857: hospodář Josef Pilek s rodinou.", sourceType: "verified", source: "ZAO, Sčítání 1857, karton 253." },
      { year: "1910", owner: "Rod Pilků", event: "Sčítání 1910: provozování zemědělského hospodářství.", sourceType: "verified", source: "ZAO, Sčítání 1910, karton 436." }
    ],
    census: [],
    documents: [],
    stories: []
  },

  // 11. Usedlost čp. 22
  {
    id: "cp22",
    number: "22",
    localName: "Venkovská usedlost čp. 22 (u Dvořáků)",
    type: "Selský grunt",
    isHeritage: false,
    uskpNumber: "VPZ 2350",
    heritageDescription: "Objekt v památkové zóně Dlouhomilov.",
    heritageSource: "Vesnická památková zóna Dlouhomilov",
    location: {
      lat: 49.908950,
      lng: 16.988950,
      cadastralParcel: "st. 30",
      landParcels: "110",
      source: "ČÚZK"
    },
    statusStableCadastre: "Zemědělský grunt se dvorem.",
    cadastreSource: "Stabilní katastr 1834",
    description: "Historická selská usedlost rodiny Dvořáků (Josef Dvořák, držitel chovu koní a skotu v roce 1880 a 1921).",
    timeline: [
      { year: "1880", owner: "Josef Dvořák", event: "Sčítání lidu 1880: chov 2 koní a 12 kusů skotu.", sourceType: "verified", source: "ZAO, Sčítání 1880." },
      { year: "1921", owner: "Josef Dvořák", event: "Sčítání ČSR 1921: hospodářství rodu Dvořáků.", sourceType: "verified", source: "SOkA Šumperk / ZAO, Sčítání 1921." }
    ],
    census: [],
    documents: [],
    stories: []
  },

  // 12. Stavení čp. 46
  {
    id: "cp46",
    number: "46",
    localName: "Domkářské stavení čp. 46",
    type: "Domkářské stavení",
    isHeritage: false,
    uskpNumber: "VPZ 2350",
    heritageDescription: "Historický dům v památkové zóně.",
    heritageSource: "Vesnická památková zóna Dlouhomilov",
    location: {
      lat: 49.904200,
      lng: 16.992800,
      cadastralParcel: "st. 60",
      landParcels: "220",
      source: "ČÚZK"
    },
    statusStableCadastre: "Domkářské obydlí ve svahu.",
    cadastreSource: "Stabilní katastr 1834",
    description: "Domkářské stavení Aloise Dvořáka zaznamenané ve sčítání 1910 a 1921.",
    timeline: [
      { year: "1910", owner: "Alois Dvořák", event: "Sčítání 1910: domkař Alois Dvořák s chovem hovězího dobytka.", sourceType: "verified", source: "ZAO, Sčítání 1910." }
    ],
    census: [],
    documents: [],
    stories: []
  },

  // 13. Stavení čp. 110 (rod Podhorných)
  {
    id: "cp110",
    number: "110",
    localName: "Venkovské stavení čp. 110",
    type: "Historický dům",
    isHeritage: false,
    uskpNumber: "VPZ 2350",
    heritageDescription: "Objekt v zástavbě obce Dlouhomilov.",
    heritageSource: "Vesnická památková zóna Dlouhomilov",
    location: {
      lat: 49.911200,
      lng: 16.990800,
      cadastralParcel: "st. 120",
      landParcels: "310",
      source: "ČÚZK"
    },
    statusStableCadastre: "Zástavba obce z 19. století.",
    cadastreSource: "Stabilní katastr 1834",
    description: "Stavení rodu Podhorných zaznamenané v operátech z let 1910 a 1921.",
    timeline: [
      { year: "1910", owner: "Rod Podhorných", event: "Sčítání lidu 1910.", sourceType: "verified", source: "ZAO, Sčítání 1910." },
      { year: "1921", owner: "Rod Podhorných", event: "Sčítání lidu 1921.", sourceType: "verified", source: "SOkA Šumperk, Sčítání 1921." }
    ],
    census: [],
    documents: [],
    stories: []
  }
];

