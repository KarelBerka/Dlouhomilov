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
            "owner": "František Hvízd (*1874)",
            "event": "Sčítání 1921: Majitelem rychty je František Hvízd z Hvozdce. Na výměnku žije Mathilda Ptáčková roz. Všetečková (z původního dědičného rychtářského rodu Všetečků) s dcerou Eliškou (industriální učitelka) a synem Zdeňkem (posluchač techniky v Brně), a penzionovaní rolníci Jakub a Anna Navrátilovi z Drahanovic.",
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
    census: [
      {
            "year": 1921,
            "date": "15. února 1921",
            "isSample": false,
            "archiveSource": "Zemský archiv v Opavě, fond Okresní úřad Zábřeh, Sčítání lidu 1921, fascikl 3, arch čp. 7 (snímky 0036, 0038, 0040, 0042)",
            "note": "Originální sčítací operát ČSR 1921. Dům byl rozdělen na 3 byty (14 obyvatel): Byt č. 1 (rodina nového majitele Františka Hvízda a čeleď, 7 osob), Byt č. 2 (výměnek rychtářského rodu – Mathilda Ptáčková roz. Všetečková s dětmi industriální učitelkou a vysokoškolákem techniky, 5 osob) a Byt č. 3 (výměnkář Jakub Navrátil s chotí z Hané, 2 osoby).",
            "scanFile": "assets/archives/cp7/su1000_c_pom_411_inv_c_1863_fascikl_3_null_dlouhomilov_serie_cp_1_118_1921_0036.jpg",
            "scanTitle": "Sčítací operát 1921 – Bývalá dědičná rychta čp. 7",
            "inhabitants": [
                  {
                        "name": "František Hvízd",
                        "relation": "Hlava rodiny / Majitel usedlosti",
                        "birthDate": "22. 11. 1874",
                        "birthPlace": "Hvozdec",
                        "religion": "římskokatolické",
                        "nationality": "československá",
                        "occupation": "Rolník na vlastním statku",
                        "literacy": "čte i píše"
                  },
                  {
                        "name": "Hedvika Hvízdová",
                        "relation": "Manželka",
                        "birthDate": "4. 5. 1893",
                        "birthPlace": "Drahany",
                        "religion": "římskokatolické",
                        "nationality": "československá",
                        "occupation": "V domácnosti a hospodářství",
                        "literacy": "čte i píše"
                  },
                  {
                        "name": "Libuše Hvízdová",
                        "relation": "Dcera",
                        "birthDate": "23. 4. 1913",
                        "birthPlace": "Hvozdec",
                        "religion": "římskokatolické",
                        "nationality": "československá",
                        "occupation": "Dítě / školačka",
                        "literacy": "čte i píše"
                  },
                  {
                        "name": "Pavla Hvízdová",
                        "relation": "Dcera",
                        "birthDate": "18. 12. 1918",
                        "birthPlace": "Dlouhomilov",
                        "religion": "římskokatolické",
                        "nationality": "československá",
                        "occupation": "Dítě",
                        "literacy": "nečte"
                  },
                  {
                        "name": "Anna Kandlová",
                        "relation": "Služebná děvečka",
                        "birthDate": "6. 6. 1900",
                        "birthPlace": "Rohle",
                        "religion": "římskokatolické",
                        "nationality": "československá",
                        "occupation": "Služebná při polním hospodářství",
                        "literacy": "čte i píše"
                  },
                  {
                        "name": "Pavlína Švábová",
                        "relation": "Služebná děvečka",
                        "birthDate": "24. 10. 1901",
                        "birthPlace": "Horní Studénky",
                        "religion": "římskokatolické",
                        "nationality": "československá",
                        "occupation": "Služebná při polním hospodářství",
                        "literacy": "čte i píše"
                  },
                  {
                        "name": "Alois Augustýn",
                        "relation": "Čeledín",
                        "birthDate": "31. 1. 1902",
                        "birthPlace": "Janoušov",
                        "religion": "římskokatolické",
                        "nationality": "československá",
                        "occupation": "Zemědělský čeledín při statku",
                        "literacy": "čte i píše"
                  },
                  {
                        "name": "Mathilda Ptáčková roz. Všetečková",
                        "relation": "Majitelka bytu č. 2 (výměnkářka)",
                        "birthDate": "2. 10. 1860",
                        "birthPlace": "Dlouhomilov",
                        "religion": "římskokatolické",
                        "nationality": "československá",
                        "occupation": "Soukromnice / výměnkářka (z rodu Všetečků)",
                        "literacy": "čte i píše"
                  },
                  {
                        "name": "Eliška Ptáčková",
                        "relation": "Dcera",
                        "birthDate": "30. 10. 1894",
                        "birthPlace": "Dlouhomilov",
                        "religion": "římskokatolické",
                        "nationality": "československá",
                        "occupation": "Industriální učitelka na obecné škole ve Strupšíně",
                        "literacy": "čte i píše"
                  },
                  {
                        "name": "Zdeněk Ptáček",
                        "relation": "Syn",
                        "birthDate": "20. 3. 1899",
                        "birthPlace": "Dlouhomilov",
                        "religion": "římskokatolické",
                        "nationality": "československá",
                        "occupation": "Posluchač České vysoké školy technické v Brně",
                        "literacy": "čte i píše"
                  },
                  {
                        "name": "Gertruda Ptáčková",
                        "relation": "Vnučka",
                        "birthDate": "4. 7. 1914",
                        "birthPlace": "Bruntál",
                        "religion": "římskokatolické",
                        "nationality": "československá",
                        "occupation": "Dítě / školačka",
                        "literacy": "čte i píše"
                  },
                  {
                        "name": "Františka Kleselová",
                        "relation": "Služebná u bytu č. 2",
                        "birthDate": "2. 8. 1846",
                        "birthPlace": "Nedvězí",
                        "religion": "římskokatolické",
                        "nationality": "československá",
                        "occupation": "Služebná u výměnkářky",
                        "literacy": "čte i píše"
                  },
                  {
                        "name": "Jakub Navrátil",
                        "relation": "Majitel bytu č. 3 (výměnkář)",
                        "birthDate": "2. 8. 1861",
                        "birthPlace": "Drahanovice",
                        "religion": "římskokatolické",
                        "nationality": "československá",
                        "occupation": "Výměnkář / dříve samostatný rolník",
                        "literacy": "čte i píše"
                  },
                  {
                        "name": "Anna Navrátilová",
                        "relation": "Manželka v bytě č. 3",
                        "birthDate": "listopad 1860",
                        "birthPlace": "Stařechovice",
                        "religion": "římskokatolické",
                        "nationality": "československá",
                        "occupation": "Výměnkářka v domácnosti",
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
    documents: [
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
    stories: [
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
    localName: "Usedlost čp. 10 (Grunt u Jílků a Šafářů)",
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
    description: "Tradiční zemědělská usedlost doložená ve všech sedmi novodobých sčítáních lidu (1857–1921). Statek je spojen s rodem Pilchů/Jílků a s pozoruhodným životním osudem Františka Šafáře, který zde v roce 1890 začínal jako šestnáctiletý čeledín a o dvacet let později se stal váženým hospodářem a majitelem celého gruntu.",
    timeline: [
      {
            "year": "1834",
            "owner": "Selský grunt",
            "event": "Zděné obytné stavení (st. 14) s navazujícím hospodářským dvorem zachyceno v indikační skice stabilního katastru.",
            "sourceType": "verified",
            "source": "ÚAZK ČÚZK, Stabilní katastr 1834, k.ú. Dlouhomilov."
      },
      {
            "year": "1857",
            "owner": "Josef Pilch / Pilek (*1807)",
            "event": "Sčítání lidu 1857: Josef Pilch (Pelich) hospodaří s manželkou Josefou a dětmi Johannem, Franzem, Karlem a Josefou.",
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
            "event": "Sčítání lidu 1921: Samostatně hospodařící rolník František Šafář s manželkou a 6 dětmi; ve výminku bydlí ovdovělý 76letý Karel Jílek se synem Isidorem a hospodyní Josefou Vitáskovou.",
            "sourceType": "verified",
            "source": "ZAO Olomouc, fond Okresní úřad Zábřeh, Sčítání 1921, fascikl 3, arch čp. 10 (snímky 0058, 0060, 0062).",
            "scanFile": "assets/archives/cp10/su1000_c_pom_411_inv_c_1863_fascikl_3_null_dlouhomilov_serie_cp_1_118_1921_0058.jpg",
            "scanTitle": "Sčítací arch 1921 – Dlouhomilov čp. 10"
      }
],
    census: [
      {
            "year": 1921,
            "date": "15. února 1921",
            "isSample": false,
            "archiveSource": "Zemský archiv v Opavě, fond Okresní úřad Zábřeh, Sčítání lidu 1921, fascikl 3, arch čp. 10 (snímky 0058, 0060, 0062)",
            "note": "Originální sčítací operát ČSR 1921. Dům byl rozdělen na 2 byty (11 obyvatel): Byt č. 1 (rodina samostatného rolníka Františka Šafáře, 8 osob) a Byt č. 2 (výměnek dřívějšího hospodáře Karla Jílka, 3 osoby).",
            "scanFile": "assets/archives/cp10/su1000_c_pom_411_inv_c_1863_fascikl_3_null_dlouhomilov_serie_cp_1_118_1921_0058.jpg",
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
                        "birthDate": "1. 1. 1883",
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
                        "name": "Markéta Šafářová",
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
            "note": "Nejstarší moderní sčítací operát pro čp. 10. Hospodářem je padesátiletý Josef Pilch (Pelich/Pilek) s druhou chotí Josefou a syny Johannem, Franzem a dvanáctiletým Karlem (budoucím sedlákem Karlem Jílkem).",
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
    documents: [
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
            "title": "Sčítací operát 1921 – Usedlost čp. 10 (František Šafář)",
            "type": "census",
            "year": "1921",
            "source": "ZAO Olomouc, fascikl 3, inv. č. 1863, snímky 0058, 0060, 0062",
            "file": "assets/archives/cp10/su1000_c_pom_411_inv_c_1863_fascikl_3_null_dlouhomilov_serie_cp_1_118_1921_0058.jpg",
            "description": "Sčítací arch ČSR s rodinou rolníka Františka Šafáře a 76letým výměnkářem Karlem Jílkem."
      }
],
    stories: [
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

