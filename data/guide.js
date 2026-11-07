/**
 * Badatelský průvodce a archivní rozcestník pro obec Dlouhomilov
 */
const guideData = {
  jurisdiction: {
    village: "Dlouhomilov (něm. Lomigsdorf)",
    associatedVillage: "Benkov (něm. Benke)",
    politicalDistrict: "Zábřeh (Hohenstadt) / Šumperk (Mährisch Schönberg)",
    judicialDistrict: "Zábřeh",
    parish: "Dlouhomilov (kostel Všech svatých)",
    stateArchiveDistrict: "Státní okresní archiv Šumperk (SOkA Šumperk)",
    provincialArchive: "Zemský archiv v Opavě (ZAO)",
    heritageZone: "Vesnická památková zóna Dlouhomilov (ÚSKP 2350)",
    coatOfArms: {
      decision: "Rozhodnutí předsedy PSP ČR č. 37 ze dne 8. června 2004 (REKOS ID 4261)",
      blazon: "Ve stříbrno-červeně polceném štítě dva zkřížené vztyčené rýče mezi dvěma pětilistými jabloňovými květy se zlatými středy, vše opačných barev, přeložené doleva obráceným zlatým krojidlem.",
      symbolism: "Zkřížené rýče a radličné krojidlo vycházejí z historické obecní pečeti a symbolizují poctivou zemědělskou práci generací místních sedláků a chalupníků. Pětilisté jabloňové květy odkazují na proslulé ovocnářství v chráněném údolí podhůří Jeseníků, stříbrno-červené polcení štítu pak vyjadřuje spojení obou historických obcí – Dlouhomilova (s osadou Medelské) a Benkova.",
      rekosUrl: "https://rekos.psp.cz/detail-symbolu/id/4261",
      svgPath: "assets/icons/dlouhomilov_erb.svg",
      pngPath: "assets/icons/dlouhomilov_erb.png",
      fullImagePath: "assets/icons/dlouhomilov_znak_rekos.jpg"
    }
  },
  archives: [
    {
      name: "Zemský archiv v Opavě – pobočka Olomouc (ZAO)",
      url: "https://digi.archives.cz",
      vademecumUrl: "https://vademecum.archives.cz",
      badge: "Farní matriky N/O/Z (1786–1949)",
      description: "Hlavní pramen pro matriční výzkum obce Dlouhomilov a přifařených obcí. Fond: Sbírka matrik Severomoravského kraje – Římskokatolický farní úřad Dlouhomilov (kostel Všech svatých).",
      signatures: "Sign. Za II 1 až Za II 7 (inv. č. 8359–8364, 11248). Knihy narozených (1786–1890), oddaných (1786–1929) a zemřelých (1786–1929) pro Dlouhomilov, Benkov, Horní a Dolní Olešnou.",
      steps: [
        "Otevřete digi.archives.cz a zvolte sekci 'Matriky' (nebo vademecum.archives.cz).",
        "Do pole Původce zadejte 'Dlouhomilov' nebo číslo fary 'Za II'.",
        "Vždy začínejte abecedními indexy (Index N, Index O, Index Z) pro zjištění čísla strany a data.",
        "Originální snímky s vysokým rozlišením lze volně prohlížet i stahovat bez poplatku."
      ]
    },
    {
      name: "Státní okresní archiv Šumperk (SOkA Šumperk)",
      url: "https://vademecum.archives.cz",
      badge: "Sčítání lidu & Archiv obce",
      description: "Základní pramen pro rekonstrukci osídlení jednotlivých domů (čp.) v letech 1869–1921. Fond: Okresní úřad Zábřeh – Sčítání lidu a Fond: Archiv obce Dlouhomilov (1650–1945).",
      signatures: "Sčítací operáty: karton 253 (rok 1857), karton 300 (1869), karton 330 (1880), karton 356 (1890), karton 397 (1900), karton 436 (1910), fascikl 3 (1921). Kronika obce Dlouhomilov (pamětní kniha od roku 1924).",
      steps: [
        "Na portálu vademecum.archives.cz vyhledejte fond 'Okresní úřad Zábřeh – sčítání lidu'.",
        "Zvolte obec Dlouhomilov a příslušný sčítací rok (1869, 1880, 1890, 1900, 1910, 1921).",
        "Archy jsou seřazeny vzestupně podle čísel popisných (čp. 1 až čp. 118).",
        "Každý dům obsahuje jmenný seznam obyvatel, jejich data narození, náboženství, profesi a soupis hospodářského zvířectva."
      ]
    },
    {
      name: "Moravský zemský archiv v Brně / ZAO – Gruntovní knihy",
      url: "https://www.mza.cz",
      badge: "Pozemkové knihy & Urbáře",
      description: "Prvopočátky držby selských gruntů a chalup před rokem 1850. Fond: Velkostatek Zábřeh (panství Zábřeh) – Gruntovní knihy a Lánové rejstříky.",
      signatures: "Gruntovní kniha pro vsi Dlouhomilov a Medelské (inv. č. 164, sign. 428, léta 1584–1880, fol. 191–212 pro statek čp. 29). Lánový rejstřík panství Zábřeh z let 1675–1677 (sign. D 1).",
      steps: [
        "Pro lánovou vizitaci a držitele usedlostí po třicetileté válce využijte Lánové rejstříky panství Zábřeh.",
        "Gruntovní kniha uvádí posloupnost hospodářů, svatební smlouvy, výměnky a odhady hodnoty gruntu.",
        "Fyzicky uloženo v ZAO Opava (fond Velkostatek Zábřeh), badatelské přepisy a výpisy jsou součástí projektu."
      ]
    },
    {
      name: "ÚAZK ČÚZK – Stabilní katastr (1834)",
      url: "https://archivnimapy.cuzk.cz",
      badge: "Císařské otisky & Indikační skici",
      description: "Nejdokonalejší mapové a pozemkové dílo 19. století. Císařské povinné otisky stabilního katastru pro Moravu a Slezsko v měřítku 1 : 2 880.",
      signatures: "Katastrální území Dlouhomilov (Lomigsdorf), kód obce 626431, signatura mapy MOR102618340. Indikační skica (barevná) a parcelní protokol z roku 1834.",
      steps: [
        "Otevřete archivnimapy.cuzk.cz nebo ags.cuzk.cz/archiv/.",
        "Zadejte k.ú. 'Dlouhomilov' nebo signaturu MOR102618340.",
        "Zkontrolujte parcelní číslo stavení (červené = stavební st., černé = pozemkové p. č.).",
        "Porovnejte zděné (červená barva) a spalné dřevěné (žlutá barva) konstrukce s dnešním ortofotem."
      ]
    },
    {
      name: "NPÚ – Památkový katalog & ÚSKP ČR",
      url: "https://www.pamatkovykatalog.cz/soupis-pamatek?obec=Dlouhomilov",
      badge: "Kulturní památky (VPZ ÚSKP 2350)",
      description: "Ústřední seznam kulturních památek České republiky a digitální archiv původních evidenčních listů nemovitých památek (MIS IISPP).",
      signatures: "Vesnická památková zóna Dlouhomilov (rejstř. č. ÚSKP 2350, prohlášena 1995). Rychta čp. 24 (r. č. 47000/8-839), usedlost čp. 29 (r. č. 23547/8-2022), kostel Všech svatých (r. č. 29080/8-838), kaple sv. Barbory (r. č. 35567/8-842).",
      steps: [
        "V Památkovém katalogu NPÚ otevřete obec Dlouhomilov.",
        "Prohlédněte si architektonický popis, památkovou hodnotu a stavební historii.",
        "Pro původní evidenční listy památkářů otevřete odkaz do systému IISPP (dokument ID 1139925 pro čp. 29)."
      ]
    },
    {
      name: "Wikipedie & Wikidata & Commons",
      url: "https://cs.wikipedia.org/wiki/Seznam_kulturn%C3%ADch_pam%C3%A1tek_v_Dlouhomilov%C4%9B",
      badge: "Encyklopedie & Otevřená data",
      description: "Strukturovaný seznam památek Dlouhomilova s propojením na Wikidata položky a fotogalerii na Wikimedia Commons.",
      signatures: "Wikidata Q-identifikátory památek obce, souřadnice památných objektů a historická i moderní fotodokumentace na Wikimedia Commons.",
      steps: [
        "Otevřete článek 'Seznam kulturních památek v Dlouhomilově'.",
        "Využijte Wikidata propojení na mezinárodní rodopisné a geografické databáze.",
        "Prohlédněte si volně dostupné historické i moderní fotografie lidové architektury."
      ]
    }
  ],
  dictionary: [
    { term: "Bauer / Rusticus", cz: "Sedlák, rolník, láník (držitel celého gruntu)" },
    { term: "Gärtner / Chalupner", cz: "Zahradník, chalupník (menší hospodář s malým polem)" },
    { term: "Häusler / Domkař", cz: "Domkař (vlastník domku bez orné půdy)" },
    { term: "Inmann / Podruh", cz: "Podruh (nájemník v cizím stavení, často nádeník či řemeslník)" },
    { term: "Auszügler / Ausgedinger", cz: "Výměnkář (bývalý hospodář na odpočinku na výminku)" },
    { term: "Knecht / Magd", cz: "Čeledín / Děvečka" },
    { term: "Wirtshaus / Schenke", cz: "Hostinec, hospoda, nálevna" },
    { term: "Schmiede", cz: "Kovárna" },
    { term: "Mühle", cz: "Mlýn" },
    { term: "Weber", cz: "Tkadlec (časté vedlejší řemeslo na Zábřežsku)" },
    { term: "Schuhmacher / Schuster", cz: "Švec, obuvník" },
    { term: "Schneider", cz: "Krejčí" }
  ],
  houseNumberingContinuity: {
    title: "Kontinuita číslování domů a přehled matrik po domech (1770–1949)",
    subtitle: "Srovnání Stabilního katastru (1834), sčítacích operátů (1857–1921) a farních matrik (1786–1949)",
    overview: "Analýza archivních pramenů prokázala mimořádnou stabilitu číslování domů v Dlouhomilově. Základní selské grunty a chalupy v historickém jádru obce (čp. 1 až čp. 80) si podržely svá tereziánská/josefínská čísla popisná beze změny od konce 18. století až do poloviny 20. století. Nová čísla popisná (od čp. 81 výše) vznikala postupným přiřazováním na konec číselné řady při dělení gruntů, výstavbě výměnků a domkařské zástavbě.",
    numberingSeries: [
      {
        locality: "Dlouhomilov (Lomigsdorf)",
        range: "čp. 1 – 141 (+ odlehlá čp.)",
        cadastralNote: "Hlavní katastrální území Dlouhomilov (kód 626431). Do roku 1869 stabilně 80 domů, do roku 1921 nárůst na 118 domů, v matrikách do r. 1949 zachyceno 154 čísel (493 matričních zápisů v letech 1889–1949)."
      },
      {
        locality: "Medelské (Dreihofen / Tři Dvory)",
        range: "Medelské čp. 1 – 10",
        cadastralNote: "Osada na severním okraji k. ú. Dlouhomilov měla vlastní samostatnou číselnou řadu čp. 1–10 (stavební parcely st. 1–11). V katastru z roku 1834 zapsáno 8 domů (čp. 1 rodina Schafarz / Šafář), v roce 1921 celkem 10 domů."
      },
      {
        locality: "Benkov (Benke)",
        range: "Benkov čp. 1 – 49",
        cadastralNote: "Samostatné katastrální území i vlastní číselná řada domů přifařená k farnosti Dlouhomilov (spolu s Horní a Dolní Olešnou). V matrikách z let 1889–1949 je v Benkově podchyceno 109 zápisů ve 40 domech."
      }
    ],
    evolution: [
      { period: "1834", source: "Stabilní katastr (parcelní protokol)", count: "80 domů (+ 8 v Medelském)", note: "Původní gruntovní a chalupnická síť čp. 1–80" },
      { period: "1857 & 1869", source: "Sčítání lidu (karton 253, 300)", count: "80 domů", note: "Beze změny rozsahu číslování (čp. 1–80)" },
      { period: "1900", source: "Sčítání lidu (karton 397)", count: "106 domů", note: "Nová výstavba domků a rozdělených usedlostí (čp. 81–106)" },
      { period: "1910", source: "Sčítání lidu (karton 436)", count: "115 domů", note: "Rozšíření zástavby na okrajích obce (čp. 107–115, vč. čp. 110)" },
      { period: "1921", source: "Sčítání lidu (fascikl 3)", count: "118 domů (+ 10 v Medelském)", note: "Prvorepublikový stav (čp. 1–118)" },
      { period: "1889–1949", source: "Matriky N/O/Z (sign. Zá II 7, Zá II 10)", count: "154 evidovaných čp.", note: "Souvislá řada po čp. 141 + nová meziválečná výstavba" }
    ],
    keyHouses: [
      { houseId: "cp3", label: "čp. 3 (Domkářské stavení u Dvořáků)", parcel1834: "st. 5", parcel1910: "st. 5", continuity: "Nepřetržitá (1834–1921+)", families: "rodina Dvořákova (vdova Kateřina *1845, syn Jan *1892)", parishRecords: "Sčítání 1921 (4 obyvatelé)" },
      { houseId: "cp4", label: "čp. 4 (Dům u Košů a Vénosů)", parcel1834: "st. 6", parcel1910: "st. 6", continuity: "Nepřetržitá (1834–1921+)", families: "Antonín Koš (*1873) • Františka Vénosová (*1853) • Josef Vénos (*1871)", parishRecords: "Sčítání 1921 (3 byty, 8 obyvatel)" },
      { houseId: "cp5", label: "čp. 5 (Usedlost u Lukasů – památka ČR)", parcel1834: "st. 7", parcel1910: "st. 7", continuity: "Nepřetržitá (1834–1949)", families: "Merta / Pavlík → Karel (*1860) a Filomena (*1864) Lukasovi", parishRecords: "7 zápisů (1889–1949) + Sčítání 1921" },
      { houseId: "cp6", label: "čp. 6 (Selská usedlost u Jílků)", parcel1834: "st. 9", parcel1910: "st. 9", continuity: "Nepřetržitá (1834–1921+)", families: "Marie Jílková (*1849) • rodina Jana Šindlera (*1855)", parishRecords: "Sčítání 1921 (2 byty, 8 obyvatel)" },
      { houseId: "cp7", label: "čp. 7 (Dědičná rychta – památka ČR)", parcel1834: "st. 10", parcel1910: "st. 10", continuity: "Nepřetržitá (1786–1949)", families: "Merta (rychtáři) → Krobot → Cink → Pavlík • 1921: Hvížď, Ptáčková, Navrátil", parishRecords: "8 zápisů (1889–1949) + 100 zápisů sčítání" },
      { houseId: "cp8", label: "čp. 8 (Venkovská usedlost u Braných)", parcel1834: "st. 11", parcel1910: "st. 11", continuity: "Nepřetržitá (1834–1921+)", families: "Isidor Braný (*1860) s manželkou Sidonií (*1862)", parishRecords: "Sčítání 1921 (4 obyvatelé)" },
      { houseId: "cp10", label: "čp. 10 (Láník u Jílků a Šafářů)", parcel1834: "st. 14", parcel1910: "st. 14", continuity: "Nepřetržitá (1815–1949)", families: "Gilek (Jílek) → Šafář (z Medelského čp. 1)", parishRecords: "6 zápisů (1889–1949) + 71 zápisů sčítání" },
      { houseId: "cp22", label: "čp. 22 (Grunt u Dvořáků)", parcel1834: "st. 30", parcel1910: "st. 30", continuity: "Nepřetržitá (1786–1949)", families: "Petr Dvořák (*1793) → Josef (*1821) → Josef (*1857) → Karel (*1880)", parishRecords: "7 zápisů (1889–1949) + 71 zápisů sčítání" },
      { houseId: "cp24", label: "čp. 24 (Selská usedlost s bránou)", parcel1834: "st. 32", parcel1910: "st. 32", continuity: "Nepřetržitá (1834–1949)", families: "Krobot (František, Jan, Štěpán)", parishRecords: "10 zápisů (1889–1949)" },
      { houseId: "cp29", label: "čp. 29 (Statek u Dvořáků – památka ČR)", parcel1834: "st. 63", parcel1910: "st. 62", continuity: "Nepřetržitá (1679–1949)", families: "Jan Dvořák (1679) → Johann (*1795) → Alois (*1830) → Josef (*1879, z čp. 22)", parishRecords: "12 zápisů (1889–1949) + 86 zápisů sčítání" },
      { houseId: "cp46", label: "čp. 46 (Chalupa u Krobotů a Berkových)", parcel1834: "st. 60", parcel1910: "st. 60", continuity: "Nepřetržitá (1834–1949)", families: "Jurenka (1834) → Krobot / Pavlík / Hejtman → Berka (1920)", parishRecords: "9 zápisů (1889–1949) + 19 zápisů sčítání" },
      { houseId: "cp110", label: "čp. 110 (Kovárna a domek u Berkových)", parcel1834: "— (vznik před 1910)", parcel1910: "st. 120", continuity: "Od přelomu 19./20. stol.", families: "František Berka (*1866, kovář) → Jan Berka (*1894)", parishRecords: "1 zápis (úmrtí 1945) + 16 zápisů sčítání" },
      { houseId: "medelske_cp1", label: "Medelské čp. 1 (Statek u Šafářů a Minářů)", parcel1834: "st. 1 (Medelské)", parcel1910: "st. 1 (Medelské)", continuity: "Nepřetržitá (1815–1921+)", families: "Schafarz (Šafář) → Jan Minář st. (*1847) & Jan Minář ml. (*1876)", parishRecords: "Sčítání 1921 (2 byty, 13 obyvatel)" },
      { houseId: "medelske_cp2", label: "Medelské čp. 2 (Domkářské stavení u Nejedlých a Minářů)", parcel1834: "st. 2 (Medelské)", parcel1910: "st. 2 (Medelské)", continuity: "Nepřetržitá (1834–1948+)", families: "Alois Nejedlý (*1869) • Adolf Minář (*1892) s chotí Ludmilou (*1895)", parishRecords: "Sčítání 1921 (2 byty, 6 obyvatel)" }
    ]
  }
};
