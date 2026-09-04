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
      name: "Zemský archiv v Opavě (ZAO) – Matriky & Sčítání",
      url: "https://digi.archives.cz",
      vademecumUrl: "https://vademecum.archives.cz",
      badge: "Oficiální & Zdarma",
      description: "Hlavní zdroj pro moravské archiválie. Obsahuje digitalizované farní matriky (N, O, Z) a sčítací operáty okresu Zábřeh / Šumperk (1869–1921).",
      steps: [
        "Otevřete digi.archives.cz a zvolte sekci 'Matriky' nebo přejděte na vademecum.archives.cz pro sčítací operáty.",
        "Zadejte do vyhledávání obec 'Dlouhomilov' nebo 'Benkov'.",
        "V matrikách začínejte vždy písmennými indexy (Index N, Index O, Index Z).",
        "Ve sčítacích operátech vyberte příslušný rok (1869, 1880, 1890, 1900, 1910, 1921) a vyhledejte požadované číslo popisné (např. čp. 29)."
      ]
    },
    {
      name: "NPÚ – Památkový katalog & IISPP MIS",
      url: "https://www.pamatkovykatalog.cz/soupis-pamatek?obec=Dlouhomilov",
      badge: "Památková péče & Evidenční listy",
      description: "Oficiální databáze kulturních památek ČR a digitální archiv původních evidenčních listů nemovitých památek (MIS IISPP).",
      steps: [
        "Vyhledejte obec Dlouhomilov nebo zadejte rejstříkové číslo ÚSKP.",
        "Prohlédněte si stavebně-historický popis, původní fotografie a plány.",
        "Pro evidenční listiny (např. čp. 29) otevřete odkaz do systému IISPP (dokument ID 1139925)."
      ]
    },
    {
      name: "Wikipedie & Wikidata & Commons",
      url: "https://cs.wikipedia.org/wiki/Seznam_kulturn%C3%ADch_pam%C3%A1tek_v_Dlouhomilov%C4%9B",
      badge: "Otevřená encyklopedie",
      description: "Strukturovaný seznam památek Dlouhomilova s propojením na Wikidata položky a fotogalerii na Wikimedia Commons.",
      steps: [
        "Otevřete článek 'Seznam kulturních památek v Dlouhomilově'.",
        "Využijte Wikidata Q-identifikátory pro propojení s mezinárodními rodopisnými a geografickými bázemi.",
        "Prohlédněte si volně dostupné historické i moderní fotografie na Wikimedia Commons."
      ]
    },
    {
      name: "ČÚZK – Archivní mapy & Císařské otisky (1834)",
      url: "https://archivnimapy.cuzk.cz",
      badge: "Stabilní katastr",
      description: "Císařské povinné otisky stabilního katastru pro Moravu a Slezsko. Zobrazují přesné půdorysy domů a rozlišení dřevěných (žlutá) a zděných (červená) staveb.",
      steps: [
        "Otevřete archivnimapy.cuzk.cz a zvolte 'Císařské povinné otisky stabilního katastru'.",
        "Zadejte k.ú. 'Dlouhomilov' (kód 626431).",
        "Najděte parcelu stavení podle červených stavebních čísel a porovnejte s dnešním stavem."
      ]
    },
    {
      name: "MyHeritage & FamilySearch",
      url: "https://www.familysearch.org",
      badge: "Rodokmeny & Indexy",
      description: "Globální genealogické databáze pro rychlé vyhledávání osob v indexovaných matrikách a sčítáních lidu.",
      steps: [
        "Využijte bezplatné vyhledávání na FamilySearch pro rodiny z Dlouhomilova.",
        "Na MyHeritage zjistěte shodu a originální digitalizát si otevřete zdarma v ZAO (digi.archives.cz)."
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
