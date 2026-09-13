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
    heritageZone: "Vesnická památková zóna Dlouhomilov (ÚSKP 2350)"
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
  ]
};
