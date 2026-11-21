// ============================================================================
// KOMIKSOVÁ KRONIKA ÚDOLÍ: DLOUHOMILOV, MEDELSKÉ A BENKOV (1356–1949)
// Hybridní komiksový modul: dobové ilustrace vycházející z reálných fotografií
// všech památkově chráněných stavení (NPÚ ÚSKP & Google Earth) + ostré HTML/CSS
// bubliny a interaktivní prokliky.
// ============================================================================

const comicData = {
  title: "Kronika údolí v obrazech: Příběh Dlouhomilova, Medelského a Benkova",
  subtitle: "Jedenadvacet komiksových obrazů ze sedmi staletí dějin od olomoucké listiny a kolonizace hvozdu až po poválečnou proměnu (1269–1949) – včetně mapy středověkého osídlování, všech památkově chráněných objektů (ÚSKP) a sedmi komiksových pohledů na obživu a řemesla v jednotlivých sčítáních lidu (1857–1921).",
  pages: [
    {
      id: "page-0",
      pageNumber: 1,
      roman: "I.",
      era: "1269–1300",
      title: "Zrod kolonizace: Olomoucký hrad a mapa osídlování podhůří",
      subtitle: "Od udělení lokačních výsad na Olomouckém hradě a odchodu kolonistů Litovelskou branou po vytyčení lesních lánových vsí mezi řekou Moravou, Dubickem, Úsovem a Dlouhomilovem.",
      panels: [
        {
          id: "panel-00a",
          number: 1,
          year: "1269",
          location: "Olomoucký hrad • přemyslovský palác a Litovelská brána",
          title: "Udělení lokační listiny a výprava kolonistů z Hané",
          image: "assets/comic/story_kap_00.jpg?v=20261117",
          realPhoto: "assets/photos/cp7_real.jpg",
          realPhotoTitle: "Dědičná rychta čp. 7 – správní nástupce středověkého lokátorského dvora",
          narrator: "Královský vrchní lovčí a vytyčovatel zemských hranic Beneda z Dubicka (1226–1269+, perambulator terrarum 1239, majitel domu na Olomouckém hradě 1267 i osobního družiníka Kunrátka – druho domini Benede 1263) spojuje v listině z r. 1269 pány ze Švábenic/Úsova a Drnovic. Právě z okruhu jeho družiny vyrazil urozený zeman (nobilis minor) Dlúhomil z Hané, aby v letech 1270–1277 založil lesní lánovou ves.",
          bubbles: [
            {
              speaker: "Vrchní lovčí a vytyčovatel hranic Beneda z Dubicka (1269)",
              position: "bottom-left",
              tail: "top-left",
              text: "Tuto lokační listinu s pečetí berte na cestu! Vyražte Litovelskou branou od řeky Moravy na sever a vytyčte nové vsi v našem hvozdu!"
            },
            {
              speaker: "Urozený zeman Dlúhomil z Hané",
              position: "bottom-right",
              tail: "top-right",
              text: "Osadníci jsou připraveni s pluhy, sekerami a rýči – přes Dubicko a Kolšov pronikneme do údolí a vyměříme můj svobodný zemanský dvůr!"
            }
          ],
          sourceNote: "CDM II, s. 361 (Beneda perambulator terrarum 1239); CDM III, s. 353 (Kunrátek, druho pana Benedy 1263) & s. 391 (dům na Olomouckém hradě 1267); CDM IV, s. 36 (1269); mírovská listina 1266 (RBM II, č. 517).",
          actions: [
            { label: "📖 Kapitola I (Dlúhomil z Hané)", onclick: "switchStoryTab('chapters'); selectStoryChapter(0, true)" },
            { label: "🏛️ Dědičná rychta (čp. 7)", onclick: "openHouseDetail('cp7')" },
            { label: "⚙️ Mlýn u náhonu (čp. 3)", onclick: "openHouseDetail('cp3')" }
          ]
        },
        {
          id: "panel-00b",
          number: 2,
          year: "1269–1300",
          location: "Povodí Moravy a Loučky • od Dubicka a Kolšova po Dlouhomilov, Benkov, Sluhoňov a Hrabišín",
          title: "Mapa středověkého osídlování podhůří, družiny Benedy a bažin u Brníčka",
          image: "assets/comic/story_kolonizace_mapa.jpg?v=20261117",
          realPhoto: "assets/maps/dlouhomilov_cadastre_1834_web.jpg",
          realPhotoTitle: "Stabilní katastr 1834 – vějíř středověkých lánů v údolí Dlouhomilova",
          narrator: "Krajina kolem Loučky přesně otiskla čtyři vrstvy kolem Benedy z Dubicka dávno před tím, než pravnuk Ctibor Morava postavil hrad Brníčko (1335–1350) nad bažinou Brné (stč. brnie): velmoži dali jméno Benkovu (Benek/Beneda po suchém hřebeni přes Rohli a křižovatku U Cikánského buku), Kolšovu (Kojiš/Kojata) a Hrabišínu; urozený zeman Dlúhomil v letech 1270–1277 Dlouhomilovu; svobodní druhové rychtám a vrchnostenští služebníci sluhoni (1263–1272) Sluhoňovu nad mokřadem.",
          bubbles: [
            {
              speaker: "Zemané a osadníci přes Kolšov & Sluhoňov",
              position: "bottom-left",
              tail: "top-left",
              text: "Bažiny u Brně obejdeme po suchých hřbetech! Nad služebním Sluhoňovem vyměří zeman Dlúhomil svobodný dvůr s mlýnem a lány (1270–1277) a postoupí k Olešné!"
            },
            {
              speaker: "Lovci a osadníci přes Rohli & U Cikánského buku",
              position: "bottom-right",
              tail: "top-right",
              text: "Druhá větev stoupá z Dubicka přes Rohli a bukovou křižovatku na slunnou plošinu do Benedova Benkova, zatímco Hrabiše z Úsova (1269–1275) osídluje Hrabišín!"
            }
          ],
          sourceNote: "CDM II–IV (1229/1237 druho, 1263–1272 zluhones, 1269/1279); MZA E 7 sign. G 191 (1297 Lubominus de Dubich); ZDO I–X (1356–1447); farní správa Dubicko (1297–1722).",
          actions: [
            { label: "🗺️ Stabilní katastr (1834)", onclick: "activateMapOverlayFromAtlas('cadastre1834')" },
            { label: "🏘️ Medelské čp. 3 (od 1385)", onclick: "openHouseDetail('medelske_cp3')" },
            { label: "⛪ Kaple v Benkově", onclick: "openHouseDetail('kaple_benkov')" }
          ]
        }
      ]
    },
    {
      id: "page-1",
      pageNumber: 2,
      roman: "II.",
      era: "1356–1857",
      title: "Zrození údolí, vlastní farnost a nejstarší selské grunty",
      subtitle: "Od středověké lesní lánové vsi s rybníky pod kopcem Šebená a hradem Brníčkem přes založení farnosti u kostela Všech svatých roku 1784 až po statek čp. 29.",
      panels: [
        {
          id: "panel-01",
          number: 3,
          year: "1356",
          location: "Údolí Dlouhomilovského potoka • pod kopcem Šebená a Brníčkem",
          title: "Lesní lánová ves, rybníky a hrad Brníčko za Šebenou",
          image: "assets/comic/panel_01.jpg",
          realPhoto: "assets/photos/brnicko_real.jpg",
          realPhotoTitle: "Hrad Brníčko na ostrohu kopce Šebená (současná podoba zříceniny)",
          narrator: "Léta Páně 1356. V údolí pod širším zalesněným kopcem Šebená, zpoza jehož ostrohu vykukují věže strážního hradu Brníčka, vzkvétá lesní lánová ves Dluhomilow (Lomigsdorf). Od potoční nivy s rybníky a mlýnským náhonem u čp. 3 stoupají k lesům dlouhé záhumenicové lány.",
          bubbles: [
            {
              speaker: "Lokátor a osadník",
              position: "bottom-left",
              tail: "top-left",
              text: "Rýčem a zlatým krojidlem vyměříme lány od rybníků a potoka až po hřeben – tady zapustí naše rody kořeny!"
            },
            {
              speaker: "Mlynář od náhonu (čp. 3)",
              position: "bottom-right",
              tail: "top-right",
              text: "Za hřebenem Šebené nám drží stráž hrad Brníčko a voda z rybníků požene mlýnské kolo po celé věky."
            }
          ],
          sourceNote: "První písemná zmínka r. 1356 (panství Brníčko / Zábřeh); pečetní symbolika rýčů a zlatého krojidla (REKOS č. 37/2004).",
          actions: [
            { label: "📷 Reálné foto: Hrad Brníčko", onclick: "openArchiveViewer('assets/photos/brnicko_real.jpg', 'Hrad Brníčko na ostrohu kopce Šebená', 'Skutečná podoba dvou věží a paláce hradu Brníčka na konci ostrohu kopce Šebená.')" },
            { label: "🏡 Usedlost u náhonu (čp. 3)", onclick: "openHouseDetail('cp3')" },
            { label: "🛡️ Erb obce (rýče & krojidlo)", onclick: "openArchiveViewer('assets/icons/dlouhomilov_znak_rekos.jpg', 'Znak obce Dlouhomilov & Benkov (REKOS č. 37 / 8. 6. 2004)', 'Blason: Ve stříbrno-červeně polceném štítě dva zkřížené vztyčené rýče mezi dvěma pětilistými jabloňovými květy se zlatými středy, vše opačných barev, přeložené doleva obráceným zlatým krojidlem.', 'assets/icons/dlouhomilov_erb.svg', 'https://rekos.psp.cz/detail-symbolu/id/4261')" }
          ]
        },
        {
          id: "panel-03",
          number: 4,
          year: "1784–1786",
          location: "Kostel Všech svatých čp. 1 (ÚSKP 26886/8-865) & Fara čp. 2",
          title: "Josefínská reforma: vlastní kostel, fara a škola",
          image: "assets/comic/panel_03.jpg",
          realPhoto: "assets/photos/cp1_real.jpg",
          realPhotoTitle: "Kostel Všech svatých v Dlouhomilově (ÚSKP 26886/8-865)",
          narrator: "Do roku 1762 museli osadníci putovat ke křtům a svatbám do Dubicka a poté do Rohle. Až reformy císaře Josefa II. v letech 1784–1786 zřizují u bílého kostela Všech svatých (čp. 1) vlastní farnost s farou (čp. 2) a školou (čp. 12).",
          bubbles: [
            {
              speaker: "První lokalista (fara čp. 2)",
              position: "bottom-left",
              tail: "top-left",
              text: "Otevírám první knihu farní matriky Zá II 1! Už žádné putování přes kopce do Dubicka a Rohle – křty i svatby zapisujeme přímo zde."
            },
            {
              speaker: "Sousedé z údolí",
              position: "bottom-right",
              tail: "top-right",
              text: "Zaplať Pánbůh! Bílý kostel Všech svatých na návrší bude navždy bít v srdci Dlouhomilova."
            }
          ],
          sourceNote: "ZAO Olomouc, Sbírka matrik, farní úřad Dlouhomilov, sign. Zá II 1 (N 1784–1855); kulturní památka ÚSKP 26886/8-865.",
          actions: [
            { label: "📷 Reálné foto: Kostel čp. 1", onclick: "openArchiveViewer('assets/photos/cp1_real.jpg', 'Kostel Všech svatých (čp. 1) – Kulturní památka ČR', 'Skutečná podoba pozdně barokního kostela Všech svatých v Dlouhomilově (ÚSKP 26886/8-865) s hodinovou věží, cibulovou bání a sanktusníkem.')" },
            { label: "⛪ Detail kostela (čp. 1)", onclick: "openHouseDetail('cp1')" },
            { label: "🏛️ Barokní fara (čp. 2)", onclick: "openHouseDetail('cp2')" }
          ]
        },
        {
          id: "panel-04",
          number: 5,
          year: "1679–1857",
          location: "Památkový statek čp. 29 • Grunt u Dvořáků (ÚSKP 19977/8-869)",
          title: "Dva bratři ze statku čp. 29: hospodář a pražský právník",
          image: "assets/comic/panel_04.jpg",
          realPhoto: "assets/photos/cp29_real.jpg",
          realPhotoTitle: "Venkovská usedlost čp. 29 – Grunt u Dvořáků (ÚSKP 19977/8-869)",
          narrator: "Na památkově chráněném statku čp. 29 (s polovalbovým štítem, freskou Panny Marie v nice a zděnou bránou s brankou) hospodaří rod Dvořáků od roku 1679. V archu z roku 1857 zde vedle sedláka Johanna Dvořáka (*1795) nacházíme jeho syna Jana Dvořáka (*1826) se zápisem „Jurist in Prag II“.",
          bubbles: [
            {
              speaker: "Hospodář Johann Dvořák (*1795)",
              position: "bottom-left",
              tail: "top-left",
              text: "Náš rod drží grunt čp. 29 už od roku 1679! Ty, Aloisi, převezmeš pluh a polnosti pod ochranou Panny Marie v našem štítě..."
            },
            {
              speaker: "JUDr. Jan Dvořák (*1826)",
              position: "bottom-right",
              tail: "top-right",
              text: "...a já budu našemu jménu dělat čest v Praze na univerzitních studiích práv a jako doktor práv!"
            }
          ],
          sourceNote: "Gruntovní kniha velkostatku Zábřeh (inv. č. 164, fol. 191, od r. 1679); Sčítání 1857 čp. 29; kulturní památka ÚSKP 19977/8-869.",
          actions: [
            { label: "📷 Reálné foto: Statek čp. 29", onclick: "openArchiveViewer('assets/photos/cp29_real.jpg', 'Venkovská usedlost čp. 29 (Grunt u Dvořáků) – ÚSKP 19977/8-869', 'Skutečná podoba památkově chráněného statku čp. 29 s polovalbovým štítem, malbou Panny Marie v nice a pilířovou bránou s klenutou brankou.')" },
            { label: "🏡 Detail statku čp. 29", onclick: "openHouseDetail('cp29')" },
            { label: "👤 Johann Dvořák (*1795)", onclick: "openPersonModal('p_johann_dvorak_1795')" }
          ]
        }
      ]
    },
    {
      id: "page-2",
      pageNumber: 3,
      roman: "III.",
      era: "1869–1907",
      title: "Dědičná rychta, dvojitá svatba a oheň v Bludově",
      subtitle: "Od správního srdce vsi na památkové rychtě čp. 7 přes slavnou dvojitou svatbu u gruntu čp. 24 roku 1878 až k hrdinskému činu koláře Antonína Motyky a sňatku na čp. 29 roku 1907.",
      panels: [
        {
          id: "panel-05",
          number: 6,
          year: "1869",
          location: "Bývalá dědičná rychta čp. 7 (ÚSKP 51795/9-103) & Grunt čp. 10",
          title: "Správní srdce obce na rychtě a odvod k vojsku",
          image: "assets/comic/panel_05.jpg",
          realPhoto: "assets/photos/cp7_real.jpg",
          realPhotoTitle: "Bývalá dědičná rychta čp. 7 (ÚSKP 51795/9-103)",
          narrator: "Mohutná patrová budova dědičné rychty čp. 7 se slepými arkádami v přízemí a valbovou střechou byla správním srdcem vsi – roku 1869 zde žilo 23 osob! Ze sousedního gruntu čp. 10 odchází téhož roku k armádě devatenáctiletý Vincenc Jílek (*1850).",
          bubbles: [
            {
              speaker: "Rychtář na čp. 7",
              position: "bottom-left",
              tail: "top-left",
              text: "Obecní truhlice, pečetidlo i sčítací archy jsou v pořádku – na rychtě nás letos žije třiadvacet!"
            },
            {
              speaker: "Karel Jílek (*1845, čp. 10)",
              position: "bottom-right",
              tail: "top-right",
              text: "Drž se u pluku, brachu Vincenci! V archu ti píší „Beim Militär“, já zatím s Františkou povedu náš grunt čp. 10."
            }
          ],
          sourceNote: "SOkA Šumperk, Sčítání lidu 1869 (karton 300): Dědičná rychta čp. 7 (ÚSKP 51795/9-103) a grunt čp. 10 (rod Jílků).",
          actions: [
            { label: "📷 Reálné foto: Rychta čp. 7", onclick: "openArchiveViewer('assets/photos/cp7_real.jpg', 'Bývalá dědičná rychta čp. 7 – ÚSKP 51795/9-103', 'Skutečná podoba patrové empírově-klasicistní dědičné rychty čp. 7 se čtyřosým průčelím a slepými arkádami v přízemí.')" },
            { label: "🏛️ Detail rychty (čp. 7)", onclick: "openHouseDetail('cp7')" },
            { label: "🏡 Grunt u Jílků (čp. 10)", onclick: "openHouseDetail('cp10')" }
          ]
        },
        {
          id: "panel-06",
          number: 7,
          year: "29. 7. 1878",
          location: "Památkový grunt čp. 24 (ÚSKP 22688/8-868) & čp. 22",
          title: "Slavná dvojitá svatba třináct dní před smrtí otce",
          image: "assets/comic/panel_06.jpg",
          realPhoto: "assets/photos/cp24_real.jpg",
          realPhotoTitle: "Venkovská usedlost čp. 24 – Grunt u Kouřilů (ÚSKP 22688/8-868)",
          narrator: "29. července 1878 vypravil těžce nemocný sedlák František Kouřil (*1819) ze statku čp. 24 (s typickým klenutým náspím / žudrem) dvojitou svatbu svých dvou dcer (Anně a Ludmile) se dvěma bratry Dvořákovými (Josefem a Karlem z čp. 22). O 13 dní později zemřel.",
          bubbles: [
            {
              speaker: "Otec nevěst František Kouřil (čp. 24)",
              position: "bottom-left",
              tail: "top-left",
              text: "Síly mi ubývají, ale dnes před podloubím našeho čp. 24 mohu klidně vydechnout... Obě dcery zůstávají na gruntech v rodné vsi."
            },
            {
              speaker: "Novomanželé Josef a Anna (čp. 22)",
              position: "bottom-right",
              tail: "top-right",
              text: "Slibujeme vám, tatínku, že grunt čp. 22 udržíme v úctě po celý život!"
            }
          ],
          sourceNote: "Matrika oddaných a zemřelých farnosti Dlouhomilov (29. 7. 1878 dvojitý sňatek Dvořák–Kouřilová; 11. 8. 1878 úmrtí Františka Kouřila na čp. 24); ÚSKP 22688/8-868.",
          actions: [
            { label: "📷 Reálné foto: Statek čp. 24", onclick: "openArchiveViewer('assets/photos/cp24_real.jpg', 'Venkovská usedlost čp. 24 (Grunt u Kouřilů) – ÚSKP 22688/8-868', 'Skutečná podoba památkově chráněného gruntu čp. 24 s trojúhelným štítem a bílými obloukovými arkádami do dvora.')" },
            { label: "🏡 Grunt čp. 24 (u Kouřilů)", onclick: "openHouseDetail('cp24')" },
            { label: "🏡 Grunt čp. 22 (u Dvořáků)", onclick: "openHouseDetail('cp22')" }
          ]
        },
        {
          id: "panel-07",
          number: 8,
          year: "1907",
          location: "Bludovský zámek & Statek čp. 29 v Dlouhomilově (ÚSKP 19977/8-869)",
          title: "Hrdinská smrt v plamenech a nový domov na čp. 29",
          image: "assets/comic/panel_07.jpg",
          realPhoto: "assets/photos/cp29_real.jpg",
          realPhotoTitle: "Venkovská usedlost čp. 29 – štít s freskou Panny Marie a bránou",
          narrator: "Nevěsta Amálie Motyková (*1888) přinesla roku 1907 na statek čp. 29 silný příběh: její otec, bludovský kolář Antonín Motyka, zahynul v plamenech při záchraně panského dobytka z hořícího bludovského zámku. Sňatek s Josefem Dvořákem (*1879) před štítem čp. 29 požehnal farář P. Alois Dvořák.",
          bubbles: [
            {
              speaker: "Kolář Antonín Motyka (v plamenech)",
              position: "top-left",
              tail: "bottom-left",
              text: "Nenechám ta němá zvířata uhořet v panských chlévech, musím je vyvést ven!"
            },
            {
              speaker: "Farář P. Alois Dvořák (15. 7. 1907)",
              position: "bottom-right",
              tail: "top-right",
              text: "Žehnám vašemu sňatku, Josefe a Amálie – ať statek čp. 29 poskytne láskyplný výměnek i ovdovělé mamince Františce."
            }
          ],
          sourceNote: "Matrika oddaných Zá II 7 (sňatek 15. 7. 1907 Josef Dvořák a Amálie Motyková); sčítání 1910 a 1921 čp. 29 (výměnkářka Františka Motyková *1844).",
          actions: [
            { label: "📷 Reálné foto: Statek čp. 29", onclick: "openArchiveViewer('assets/photos/cp29_real.jpg', 'Venkovská usedlost čp. 29 (Grunt u Dvořáků)', 'Skutečná podoba štítu čp. 29 s obrazem Panny Marie a bránou s klenutou brankou.')" },
            { label: "🏡 Statek čp. 29", onclick: "openHouseDetail('cp29')" },
            { label: "👤 Josef Dvořák (*1879, †1938)", onclick: "openPersonModal('p_josef_dvorak_1879')" }
          ]
        }
      ]
    },
    {
      id: "page-3",
      pageNumber: 4,
      roman: "IV.",
      era: "1834–1930",
      title: "Památkové usedlosti na návsi a ve svahu: čp. 8, čp. 5 a čp. 43",
      subtitle: "Tři architektonické skvosty Národního památkového ústavu v Dlouhomilově – klasicistní grunt čp. 8 se štítem ANNO 1845, usedlost čp. 5 u koláře Vainlicha a usedlost ve svahu čp. 43 s dvouramenným schodištěm.",
      panels: [
        {
          id: "panel-cp8",
          number: 9,
          year: "1845–1921",
          location: "Památková usedlost čp. 8 (ÚSKP 35007/8-867) • u Braných, Dvořákových a Krestinů",
          title: "Klasicistní grunt se štítem ANNO 1845, klenutou bránou a výměnkem",
          image: "assets/comic/panel_cp8.jpg",
          realPhoto: "assets/photos/cp8_real.jpg",
          realPhotoTitle: "Venkovská usedlost čp. 8 se štítem ANNO 1845 a výměnkem (ÚSKP 35007/8-867)",
          narrator: "Hned vedle rychty stojí památkově chráněná klasicistní trojboká usedlost čp. 8 z roku 1845 s pásovou rustikou, mansardovým štítem s toskánskými pilastry, klenutou bránou a vysunutým výměnkem na kamenné podezdívce. V roce 1921 zde v souladu žily tři domácnosti (12 osob): rolník Isidor Braný (*1864), bělič textilu Petr Dvořák (*1879) s matkou Františkou (*1848) a rolník Isidor Krestin (*1883).",
          bubbles: [
            {
              speaker: "Rolník Isidor Braný (*1864, čp. 8)",
              position: "bottom-left",
              tail: "top-left",
              text: "Od roku 1845 stojí náš klenutý vjezd i výměnek na kamenném soklu pevně jako skála – pod jednou střechou tu hospodaříme tři rodiny!"
            },
            {
              speaker: "Bělič Petr Dvořák (*1879) a matka Františka",
              position: "bottom-right",
              tail: "top-right",
              text: "Zatímco vy, sousede, zapřaháte k oru, já mířím do bělidla v Šumperku a babička Františka dohlédne na vnoučata u výměnku."
            }
          ],
          sourceNote: "NPÚ Památkový katalog, ÚSKP 35007/8-867 (kat. č. 1000146753, datováno ANNO 1845); Sčítání lidu 1921 čp. 8 (byty č. 1–3: Braný, Dvořák, Krestin).",
          actions: [
            { label: "📷 Reálné foto: Usedlost čp. 8", onclick: "openArchiveViewer('assets/photos/cp8_real.jpg', 'Venkovská usedlost čp. 8 (ANNO 1845) – ÚSKP 35007/8-867', 'Skutečná podoba památkově chráněné usedlosti čp. 8 s klasicistním mansardovým štítem, klenutou vjezdovou bránou a vysunutým výměnkem na kamenné podezdívce.')" },
            { label: "🏡 Detail usedlosti čp. 8", onclick: "openHouseDetail('cp8')" },
            { label: "🏛️ Sousední rychta (čp. 7)", onclick: "openHouseDetail('cp7')" }
          ]
        },
        {
          id: "panel-cp5",
          number: 10,
          year: "1834–1925",
          location: "Památková usedlost čp. 5 (ÚSKP 27339/8-866) • u Lukasů, Košů a koláře Vainlicha",
          title: "Mansardový štít s Božím okem, loukoťové kolo a student reálky",
          image: "assets/comic/panel_cp5.jpg",
          realPhoto: "assets/photos/cp5_real.jpg",
          realPhotoTitle: "Venkovská usedlost čp. 5 s mansardovým štítem a Božím okem (ÚSKP 27339/8-866)",
          narrator: "V dolní východní řadě obce vyniká památkově chráněná usedlost čp. 5 z roku 1834 se slepými arkádami, toskánskými polosloupy, věncovými okénky a Božím okem v tympanonu. Na dvoře se záhumenní bránou působil kolářský učeň a později mistr Bohumil Vainlich (*1904 z Hrabišína), zatímco synovec hospodářů Josef Koš (*1911) odtud vyrážel na studia šumperské reálky.",
          bubbles: [
            {
              speaker: "Kolář Bohumil Vainlich (*1904, čp. 5)",
              position: "bottom-left",
              tail: "top-left",
              text: "Ještě osadím jasanové loukotě a obruč na vůz – poctivé kolářské řemeslo z čp. 5 pozná každý hospodář v údolí!"
            },
            {
              speaker: "Student Josef Koš (*1911) a Lukasovi",
              position: "bottom-right",
              tail: "top-right",
              text: "Sbohem strýčku Karle a teto Filomeno! Utíkám s brašnou do Šumperka na reálku, ať vám ve škole udělám radost."
            }
          ],
          sourceNote: "NPÚ Památkový katalog, ÚSKP 27339/8-866 (kat. č. 1000138575, z r. 1834); Sčítání 1921 čp. 5 (Františka Košová *1849, Karel a Filomena Lukasovi, kolář Bohumil Vainlich *1904, student Josef Koš *1911).",
          actions: [
            { label: "📷 Reálné foto: Usedlost čp. 5", onclick: "openArchiveViewer('assets/photos/cp5_real.jpg', 'Venkovská usedlost čp. 5 – ÚSKP 27339/8-866', 'Skutečná podoba klasicistního průčelí a mansardového štítu usedlosti čp. 5 s toskánskými polosloupy, oválnými větracími otvory a loukoťovým kolem na fasádě.')" },
            { label: "🏡 Detail usedlosti čp. 5", onclick: "openHouseDetail('cp5')" }
          ]
        },
        {
          id: "panel-cp43",
          number: 11,
          year: "1834–1921",
          location: "Památková usedlost ve svahu čp. 43 (ÚSKP 33784/8-870) • u Ptáčků a přadleny Jílkové",
          title: "Usedlost ve svahu s dvouramenným schodištěm a studnou s pumpou",
          image: "assets/comic/panel_cp43.jpg",
          realPhoto: "assets/photos/cp43_real.jpg",
          realPhotoTitle: "Venkovská usedlost čp. 43 ve svahu s dvouramenným schodištěm (foto NPÚ, ÚSKP 33784/8-870)",
          narrator: "V dolní části Dlouhomilova stojí ve výrazném svahu ojedinělá památkově chráněná usedlost čp. 43 z 1. třetiny 19. století: ze dvora působí jako patrová a její průčelí zdobí symetrické zděné dvouramenné schodiště s klenutým podchodem do suterénu s valenou klenbou. Roku 1921 zde hospodařil malorolník František Ptáček (*1891) s manželkou Annou (*1892 z Brníčka) a v podnájmu žila přadlena Anna Jílková (*1873).",
          bubbles: [
            {
              speaker: "František (*1891) a Anna Ptáčkovi (na pavlači)",
              position: "top-right",
              tail: "bottom-right",
              text: "Z našeho dvouramenného schodiště máme celé údolí jako na dlani – a kamenný klenutý sklep pod námi udrží úrodu v chládku po celý rok!"
            },
            {
              speaker: "Přadlena Anna Jílková (*1873, u studny)",
              position: "bottom-left",
              tail: "top-left",
              text: "Načerpám si u naší studny čerstvou vodu před cestou do šumperské přádelny – příze už je přichystaná."
            }
          ],
          sourceNote: "NPÚ Památkový katalog, ÚSKP 33784/8-870 (kat. č. 1000145448, foto NPÚ MIS id=16042); Sčítání 1921 čp. 43 (malorolník František Ptáček *1891 a přadlena Anna Jílková *1873).",
          actions: [
            { label: "📷 Reálné foto NPÚ: Usedlost čp. 43", onclick: "openArchiveViewer('assets/photos/cp43_real.jpg', 'Venkovská usedlost čp. 43 ve svahu – ÚSKP 33784/8-870 (foto NPÚ)', 'Autentická fotografie Národního památkového ústavu: usedlost ve svahu čp. 43 se symetrickým dvouramenným schodištěm, valeně klenutým závětřím do suterénu a kamennou studnou s litinovou pumpou.')" },
            { label: "🏡 Detail usedlosti čp. 43", onclick: "openHouseDetail('cp43')" }
          ]
        }
      ]
    },
    {
      id: "page-4",
      pageNumber: 5,
      roman: "V.",
      era: "1906–1949",
      title: "Kovárna, soužití tří sídel a 163 let věrnosti rodu",
      subtitle: "Venkovská kovárna v čp. 110, cesta z Medelského za prací, památková kaplička v Benkově na jazykové hranici a paměť rodu Dvořáků na čp. 22.",
      panels: [
        {
          id: "panel-08",
          number: 12,
          year: "1910–1921",
          location: "Kovárna čp. 110 & Osada Medelské čp. 1 a 2",
          title: "Venkovská kovárna u Berkových a tkalci u Oberleithnerů",
          image: "assets/comic/panel_08.jpg",
          realPhoto: "assets/photos/medelske_real.jpg",
          realPhotoTitle: "Osada Medelské (Dreihofen / Tři Dvory) na severním okraji Dlouhomilova",
          narrator: "Zatímco v čp. 110 zvonila kovadlina kováře Františka Berky (*1866) a jeho syna Jana (*1894), obyvatelé chalup v osadě Medelské čp. 1 a čp. 2 (rody Minářů a Nejedlých) denně docházeli přes kopec do šumperských textilek a bělidel Eduarda Oberleithnera.",
          bubbles: [
            {
              speaker: "Kovář František Berka (čp. 110)",
              position: "bottom-left",
              tail: "top-left",
              text: "Dobré jitro sousedé z Medelského! Zase za rozbřesku přes kopec na směnu k Oberleithnerům do Šumperka?"
            },
            {
              speaker: "Jan Minář (Medelské čp. 1)",
              position: "bottom-right",
              tail: "top-right",
              text: "Každé ráno, mistře! Já s Josefem do bělidla příze a dcery ke tkalcovským stavům."
            }
          ],
          sourceNote: "SOkA Šumperk, Sčítání 1910 čp. 110 (kovář František Berka *1866) a Sčítání 1921 Medelské čp. 1 a čp. 2 (Eduard Oberleithner a synové, Šumperk).",
          actions: [
            { label: "📷 Reálné foto: Osada Medelské", onclick: "openArchiveViewer('assets/photos/medelske_real.jpg', 'Osada Medelské (Dreihofen)', 'Skutečná podoba zástavby v osadě Medelské podél cesty směrem k Brníčku.')" },
            { label: "🔨 Kovárna čp. 110", onclick: "openHouseDetail('cp110')" },
            { label: "🏡 Medelské čp. 1 (Minářovi)", onclick: "openHouseDetail('medelske_cp1')" }
          ]
        },
        {
          id: "panel-09",
          number: 13,
          year: "1906",
          location: "Kaple v Benkově (ÚSKP 28584/8-871) & Údolí Dlouhomilova",
          title: "Tři světy v jednom údolí na jazykové hranici",
          image: "assets/comic/panel_09.jpg",
          realPhoto: "assets/photos/benkov_kaple_real.jpg",
          realPhotoTitle: "Památkově chráněná kaple v Benkově (ÚSKP 28584/8-871)",
          narrator: "Na Chytilově národnostní mapě Moravy (1906) procházela mezi údolím a kopcem jazyková hranice: český Dlouhomilov a osada Medelské ležely pod horským německým Benkovem s bílou kapličkou s osmibokou zvoničkou, avšak všichni patřili k téže farnosti.",
          bubbles: [
            {
              speaker: "Hospodář z Dlouhomilova",
              position: "bottom-left",
              tail: "top-left",
              text: "Dole v údolí a na Třech Dvorech v Medelském se mluví česky, nahoře u kaple v Benkově zase německy..."
            },
            {
              speaker: "Soused z Benkova",
              position: "bottom-right",
              tail: "top-right",
              text: "...ale v kostele Všech svatých sedíme v jedné lavici a chodíme si navzájem za kmotry i svědky!"
            }
          ],
          sourceNote: "Chytilova národnostní mapa Moravy (1906); kaple v Benkově (ÚSKP 28584/8-871); matriky farnosti Dlouhomilov (109 zápisů pro Benkov).",
          actions: [
            { label: "📷 Reálné foto: Kaple v Benkově", onclick: "openArchiveViewer('assets/photos/benkov_kaple_real.jpg', 'Kaplička v Benkově – ÚSKP 28584/8-871', 'Skutečná podoba památkově chráněné kaple v Benkově se stanovou břidlicovou střechou a osmibokou lucernovou zvoničkou.')" },
            { label: "⛪ Detail kaple v Benkově", onclick: "openHouseDetail('kaple_benkov')" },
            { label: "🗺️ Národnostní mapa (1906)", onclick: "openMapCompareModal('narodnostni1906')" }
          ]
        },
        {
          id: "panel-12",
          number: 14,
          year: "1786–1949",
          location: "Vesnická památková zóna Dlouhomilov (ÚSKP 2350) • grunt čp. 22 & jabloňové sady",
          title: "163 let věrnosti jednomu číslu a dva jabloňové květy",
          image: "assets/comic/panel_12.jpg",
          realPhoto: "assets/photos/dlouhomilov_udoli_real.jpg",
          realPhotoTitle: "Pohled do údolí Vesnické památkové zóny Dlouhomilov (ÚSKP 2350)",
          narrator: "Přes bouře let 1938–1945 přetrvala v údolí (dnes chráněném jako Vesnická památková zóna Dlouhomilov, ÚSKP 2350) obdivuhodná kontinuita zděných severomoravských statků se štukovými štíty: když 29. května 1949 umírá na čp. 22 ve věku 91 let Anna Dvořáková roz. Kouřilová, uzavírá se 163 let doložené držby jediného rodu na témže čísle popisném.",
          bubbles: [
            {
              speaker: "Prababička Anna Dvořáková (91 let, čp. 22)",
              position: "bottom-left",
              tail: "top-left",
              text: "Od svatby Pavla Dvořáka roku 1786 až po dnešní jaro 1949 – sto šedesát tři let jsme neopustili náš rodný štít."
            },
            {
              speaker: "Hlas kroniky údolí",
              position: "bottom-right",
              tail: "top-right",
              text: "A dva jabloňové květy ve znaku obce dnes navždy spojují paměť Dlouhomilova, Medelského a Benkova!"
            }
          ],
          sourceNote: "Matrika oddaných Brníčko 1786 (Pavel Dvořák z čp. 22) až Matrika zemřelých Dlouhomilov Zá II 10 (29. 5. 1949 Anna Dvořáková roz. Kouřilová, 91 let a 5 měsíců); Vesnická památková zóna Dlouhomilov (ÚSKP 2350).",
          actions: [
            { label: "📷 Reálné foto: Údolí Dlouhomilova", onclick: "openArchiveViewer('assets/photos/dlouhomilov_udoli_real.jpg', 'Vesnická památková zóna Dlouhomilov (ÚSKP 2350)', 'Pohled na historické jádro obce Dlouhomilov v údolí pod kopcem Šebená a hradem Brníčkem.')" },
            { label: "🏡 Grunt u Dvořáků (čp. 22)", onclick: "openHouseDetail('cp22')" },
            { label: "👤 Anna Dvořáková (1857–1949)", onclick: "openPersonModal('p_anna_dvorakova_1857')" }
          ]
        }
      ]
    },
    {
      id: "page-5",
      pageNumber: 6,
      roman: "VI.",
      category: "census",
      era: "Sčítání 1857–1890",
      title: "Čemu se věnovali obyvatelé I.: Od selských gruntů k přádelnám a domáckým stavům",
      subtitle: "Čtyři komiksové pohledy na proměnu obživy v Dlouhomilově, Medelském a Benkově podle sčítacích operátů z let 1857, 1869, 1880 a 1890.",
      panels: [
        {
          id: "panel-census-1857",
          censusYear: 1857,
          number: 15,
          year: "Sčítání 1857",
          location: "Pohled od statku čp. 29 (JZ) k SV údolím přes kostel čp. 1 na rychtu čp. 7 • 24 dochovaných zápisů",
          title: "1857: Svobodní sedláci po zrušení poddanství, čeleď a první právník v Praze",
          image: "assets/comic/panel_census_1857.jpg",
          realPhoto: "assets/photos/cp7_real.jpg",
          realPhotoTitle: "Dědičná rychta čp. 7 a sousední selské grunty v Dlouhomilově",
          narrator: "Devět let po zrušení roboty (1848) je Dlouhomilov ještě čistě agrární obcí: páteř tvoří držitelé selských gruntů a dědičné rychty (Grundbesitzer, 25 % zapsaných osob), rodinní pomocníci (33,3 %) a zemědělská čeleď (čeledíni a děvečky, 12,5 %). Rychtář Johann Merta (*1825) hospodaří s čeledínem Antonem Fučíkem (*1833), na čp. 10 Josef Pilch/Jílek se služebníkem Johannem Hoškem a ze statku čp. 29 odchází sedlákův syn Johann Dvořák ml. (*1826) jako první vysokoškolák z údolí na práva do Prahy („Jurist in Prag“).",
          bubbles: [
            {
              speaker: "Rychtář Johann Merta (*1825, čp. 7) a sedlák Josef Pilch (čp. 10)",
              position: "bottom-left",
              tail: "top-left",
              text: "Robota je minulostí! S našimi koňmi, čeledíny a děvečkami teď oráme a sklízíme na svobodných selských lánech od potoka až k lesu."
            },
            {
              speaker: "Johann Dvořák ml. (*1826, čp. 29 – Jurist in Prag)",
              position: "bottom-right",
              tail: "top-right",
              text: "Sbohem, tatínku! Bratři podrží pluh na gruntě čp. 29 a já v Praze dokážu, že i syn dlouhomilovského sedláka může být doktorem práv."
            }
          ],
          sourceNote: "SOkA Šumperk, Sčítání lidu 1857 (dochované archy čp. 7, 10, 22, 29): 25 % držitelé gruntů, 33,3 % rodinní pomocníci, 12,5 % čeleď, 4,2 % výměnek, 4,2 % vysokoškoláci.",
          actions: [
            { label: "📊 Demografie & sčítání 1857", onclick: "window.location.href='demografie.html?year=1857#histogram'" },
            { label: "👥 Rejstřík 1857", onclick: "window.location.href='obyvatele.html?year=1857'" },
            { label: "🏛️ Rychta čp. 7", onclick: "openHouseDetail('cp7')" },
            { label: "🏡 Statek čp. 29", onclick: "openHouseDetail('cp29')" }
          ]
        },
        {
          id: "panel-census-1869",
          censusYear: 1869,
          number: 16,
          year: "Sčítání 1869",
          location: "Pohled z horní návsi od rychty čp. 7 k jihu na čp. 8 a kostel čp. 1 • 982 obyv. v obci",
          title: "1869: Šenkýřka, řezník, obchodník s máslem, porodní bába a první přadleny lnu",
          image: "assets/comic/panel_census_1869.jpg",
          realPhoto: "assets/photos/cp7_real.jpg",
          realPhotoTitle: "Bývalá dědičná rychta čp. 7 – v roce 1869 domov 23 osob a 7 různých profesí",
          narrator: "První moderní sčítání roku 1869 ukazuje pestrou dělbu práce přímo v centru vsi: na rychtě čp. 7 vede šenk hostinská Johanna Katzerová (*1831), její muž Antonín Katzer (*1831) bourá maso jako řezník (Fleischer), Josef Polách (*1839) rozváží na trakaři máslo a vejce jako samostatný obchodník, zkoušená porodní babička (Hebamme) Františka Kauerová (*1830) spěchá s brašnou k rodičce, její muž Josef Kauer (*1842) tká plátno a mladé ženy Marie Wagnerová (*1845) s Terezií Königovou (*1856) už docházejí do mechanické přádelny lnu.",
          bubbles: [
            {
              speaker: "Hostinská Johanna Katzerová, řezník Antonín a obchodník Josef Polách",
              position: "bottom-left",
              tail: "top-left",
              text: "Pivo ze šenku i čerstvé maso jsou na stole – a já už mám naložené koše másla a vajec od našich hospodyň na městský trh!"
            },
            {
              speaker: "Porodní bába Františka Kauerová (*1830) a přadleny lnu",
              position: "bottom-right",
              tail: "top-right",
              text: "Pánbůh požehnej novorozenému děťátku! A my dvě už spěcháme s přadýnky lnu na směnu do mechanické přádelny."
            }
          ],
          sourceNote: "SOkA Šumperk, Sčítání lidu 1869 (karton 300, čp. 7, 10, 22, 29 – 56 přepsaných osob; celá obec 982 obyv. ve 122 domech).",
          actions: [
            { label: "📊 Demografie & sčítání 1869", onclick: "window.location.href='demografie.html?year=1869#histogram'" },
            { label: "👥 Rejstřík 1869", onclick: "window.location.href='obyvatele.html?year=1869'" },
            { label: "🏛️ Rychta čp. 7 (23 obyv.)", onclick: "openHouseDetail('cp7')" }
          ]
        },
        {
          id: "panel-census-1880",
          censusYear: 1880,
          number: 17,
          year: "Sčítání 1880",
          location: "Pohled ze dvora čp. 24 (Z) k VJV přes náves na rychtu čp. 7 a kostel čp. 1 • 735 zápisů v 96 domech Dlouhomilova a Medelského (699 přít. = 100 % ČSÚ)",
          title: "1880: Nádeníci z přádelen lnu, zahradníci a mladá generace řemeslnických učňů",
          image: "assets/comic/panel_census_1880.jpg",
          realPhoto: "assets/photos/cp24_real.jpg",
          realPhotoTitle: "Klenuté podloubí (žudr) usedlosti čp. 24",
          narrator: "V kompletním sčítání roku 1880 pro Dlouhomilov a Medelské (735 zapsaných osob / 699 přítomných v 92 obydlených z 96 domů) se vesnice proměňuje v obec drobných rolníků-zahradníků, řemeslníků a přádelnických dělníků: již 63 obyvatel (např. Antonín Dvořák z čp. 2, Josef Jílek z čp. 51 či Albert Pláček z čp. 54) pracuje v mechanických přádelnách lnu a 14 u tkalcovských stavů. V chalupách a dílnách působí 45 řemeslníků a učňů (krejčovský mistr Vincenc Braný čp. 25, stolařský mistr Antonín Hrubý čp. 43, ševcovský učeň Alois Vitásek čp. 75, sedlářský učeň Jan Horníček čp. 76, švadlena Sidonie Pláčková čp. 54), na čp. 8 úřaduje c. k. poštmistr Karel Katzer, obchod vedou Tomáš Jílek (čp. 5) a Antonín Vitásek (čp. 53) a v Medelském čp. 54 žije 98letý Jan Poisel (*1782).",
          bubbles: [
            {
              speaker: "Ševcovský učeň Alois Vitásek (*1864), sedlář Jan Horníček a švadlena Sidonie",
              position: "bottom-left",
              tail: "top-left",
              text: "Pod klenutým náspím jde řemeslo pěkně od ruky – obujeme sousedy, ušijeme postroje pro koně i nové kabáty a čtyřicet pět řemeslníků s učni rozvíjí celou ves!"
            },
            {
              speaker: "Nádeníci z přádelny lnu (Antonín Dvořák čp. 2 a Albert Pláček čp. 54)",
              position: "bottom-right",
              tail: "top-right",
              text: "Šedesát tři nás už spřádá len v mechanických přádelnách a navečer okopáváme záhumenky u svých chalup."
            }
          ],
          sourceNote: "SOkA Šumperk / ZAO Opava, Sčítání lidu 1880 (NAD 1000, inv. č. 1476, karton 330 – kompletních 96 domů / 735 zaps. / 699 přít. osob): 28,7 % rolníci a rodina v hospodářství, 16,2 % čeleď a polní nádeníci, 10,5 % přádelny lnu (63) & tkalci (14), 10,3 % řemesla, pošta, škola & obchod (76).",
          actions: [
            { label: "📊 Demografie & sčítání 1880", onclick: "window.location.href='demografie.html?year=1880#histogram'" },
            { label: "👥 Rejstřík 1880", onclick: "window.location.href='obyvatele.html?year=1880'" },
            { label: "🏡 Usedlost čp. 24", onclick: "openHouseDetail('cp24')" },
            { label: "🏡 Chalupa čp. 75 (Vitáskovi)", onclick: "openHouseDetail('cp75')" }
          ]
        },
        {
          id: "panel-census-1890",
          censusYear: 1890,
          number: 18,
          year: "Sčítání 1890",
          location: "Pohled od Z přes ulici na východní řadu návsi (čp. 8 vlevo/S, čp. 5 vpravo/J) • 1 095 obyv. ve 143 domech",
          title: "1890: Domáčtí tkalci lnu u stavů, tkadleny hedvábí, krejčovská dílna, kovář, hajný a ponocný",
          image: "assets/comic/panel_census_1890.jpg",
          realPhoto: "assets/photos/cp5_real.jpg",
          realPhotoTitle: "Klasicistní štít usedlosti čp. 5 na návsi v Dlouhomilově",
          narrator: "Kompletní sčítání roku 1890 (1 095 obyvatel!) zachycuje vrchol domáckého i továrního tkalcovství: ve světnicích klapou ruční stavy 37 námezdních domáckých tkalců lnu (Johann Lorenz, Josef Hönig, Steffan Urban, Hynek Churaný na čp. 29), 100 dělníků dochází do mechanických tkalcoven a 17 tkalců a tkadlen už tká ušlechtilé hedvábí v Šumperku (Benjamin Podhorný čp. 51, sourozenci Braní čp. 6). V čp. 6 šije mistr krejčí Vincenc Braný se třemi tovaryši, na návsi kove koně podkovář František Vlach (čp. 7), 24 obchodníků prodává potraviny a máslo (Antonín Vitásek čp. 53, Františka Venusová čp. 68), u školy čp. 56 učí nadučitel Josef Tiefenbach s industriální učitelkou Terezií Kolářovou, les hlídá hajný Josef Körner (čp. 39) a noc v údolí ponocný Josef Krátký (čp. 30).",
          bubbles: [
            {
              speaker: "Domácký tkadlec lnu, krejčovský mistr Vincenc Braný (čp. 6) a kovář František Vlach",
              position: "bottom-left",
              tail: "top-left",
              text: "Od svítání bzučí v chalupách tkalcovské člunky i kolovrátky, v krejčovské dílně stříháme sukno so třemi tovaryši a před kovárnou zvoní podkovy!"
            },
            {
              speaker: "Tkadleny hedvábí, učitelka Terezie Kolářová, hajný Körner a ponocný Krátký",
              position: "bottom-right",
              tail: "top-right",
              text: "V šumperských továrnách tkáme jemné hedvábí, děti (317 školáků a dětí!) se učí číst i šít a hajný s ponocným bdí nad klidem celé vsi."
            }
          ],
          sourceNote: "SOkA Šumperk, Sčítání lidu 1890 (143 domů, 1 095 osob): 137 tkalců lnu a plátna, 17 tkalců hedvábí, 16 přadlen, 111 držitelů gruntů, 24 obchodníků, 13 kovářů a zámečníků, 11 krejčích.",
          actions: [
            { label: "📊 Demografie & sčítání 1890", onclick: "window.location.href='demografie.html?year=1890#histogram'" },
            { label: "👥 Rejstřík 1890 (1 095 os.)", onclick: "window.location.href='obyvatele.html?year=1890'" },
            { label: "🏡 Usedlost čp. 5", onclick: "openHouseDetail('cp5')" },
            { label: "🏫 Škola čp. 56", onclick: "openHouseDetail('cp56')" }
          ]
        }
      ]
    },
    {
      id: "page-6",
      pageNumber: 7,
      roman: "VII.",
      category: "census",
      era: "Sčítání 1900–1921",
      title: "Čemu se věnovali obyvatelé II.: Přelom století, bělidla plátna a první republika",
      subtitle: "Tři komiksové pohledy na vrcholnou éru obce v letech 1900 (1 140 obyv.), 1910 (historické maximum 1 177 obyv.) a při prvním československém sčítání roku 1921 (1 031 obyv.).",
      panels: [
        {
          id: "panel-census-1900",
          censusYear: 1900,
          number: 19,
          year: "Sčítání 1900",
          location: "Pohled od statku čp. 29 (JZ) k SV k usedlosti čp. 5 a kostelu čp. 1 • 1 140 obyv. ve 149 domech",
          title: "1900: Stolařští mistři, kolář, poštovní postilion s trubkou, železničáři a tkalci",
          image: "assets/comic/panel_census_1900.jpg",
          realPhoto: "assets/photos/cp29_real.jpg",
          realPhotoTitle: "Statek čp. 29 – domov starosty Aloise Dvořáka a poštovního postiliona Josefa Dvořáka",
          narrator: "Na přelomu století (1900, 1 140 obyvatel) rozkvétají v Dlouhomilově dřevozpracující a dopravní profese: v dílně čp. 58 hobluje stolařský mistr František John s tovaryšem Bedřichem Pechem a učněm Jarolímem Soklem (čp. 9), na čp. 43 vyrábí vozy kolářský mistr Hynek Chura, v čp. 78 kove mistr Jan Kupka a v čp. 86 zámečník František Sadil. Ze statku čp. 29 řídí obec starosta Alois Dvořák a vyjíždí odtud poštovní postilion Josef Dvořák s poštovní trubkou, kolem prochází farář P. František Kužela (čp. 47) a z Benkova čp. 31 nastupují na trať železniční průvodčí (Eisenbahn-Schaffner) Viktor Körner a traťový dělník Richard Körner vedle 40 domáckých tkalců lnu (Leinenweber).",
          bubbles: [
            {
              speaker: "Stolařský mistr František John (čp. 58) a kolářský mistr Hynek Chura (čp. 43)",
              position: "bottom-left",
              tail: "top-left",
              text: "Patnáct stolařů a tesařů spolu s jedenácti zedníky staví a vybavuje nové domy v údolí – od dubových oken a židlí až po pevná loukoťová kola!"
            },
            {
              speaker: "Starosta Alois Dvořák, postilion Josef Dvořák (čp. 29) a průvodčí Viktor Körner",
              position: "bottom-right",
              tail: "top-right",
              text: "Poštovní trubka i železniční lucerna už spojují naše údolí a čtyřicet domáckých tkalců lnu s celým světem!"
            }
          ],
          sourceNote: "SOkA Šumperk, Sčítání lidu 1900 (149 domů, 1 140 osob): 138 rolníků, 54 čeledínů a děveček, 40 domáckých tkalců lnu, 49 továrních textiláků, 15 stolařů a tesařů, 11 zedníků, 10 krejčích.",
          actions: [
            { label: "📊 Demografie & sčítání 1900", onclick: "window.location.href='demografie.html?year=1900#histogram'" },
            { label: "👥 Rejstřík 1900 (1 140 os.)", onclick: "window.location.href='obyvatele.html?year=1900'" },
            { label: "🏡 Statek čp. 29 (starosta & postilion)", onclick: "openHouseDetail('cp29')" },
            { label: "🪑 Stolařství čp. 58 (Fr. John)", onclick: "openHouseDetail('cp58')" }
          ]
        },
        {
          id: "panel-census-1910",
          censusYear: 1910,
          number: 20,
          year: "Sčítání 1910",
          location: "Pohled od východního potoka k ZSZ na kostel čp. 1, čp. 5, čp. 8 a hřeben Šebené • 1 177 obyv. (maximum!)",
          title: "1910: Historické maximum obce – 64 běličů plátna a příze, 75 domáckých tkalců a 15 obchodů",
          image: "assets/comic/panel_census_1910.jpg",
          realPhoto: "assets/photos/dlouhomilov_udoli_real.jpg",
          realPhotoTitle: "Údolí Dlouhomilova pod Šebenou – v roce 1910 domov rekordních 1 177 obyvatel",
          narrator: "Roku 1910 dosahuje obec svého absolutního populačního maxima (1 177 zapsaných osob ve 146 domech) a textilní obživa poprvé převyšuje zemědělství! Celkem 64 obyvatel pracuje jako běliči a běličky plátna a příze na bělidlech (Isidor a Božena Braní čp. 110, Jan Minář Medelské čp. 1), 75 osob tká doma jako domáčtí tkalci a tkadleny (Hausweber / Hausweberin) a dalších 130 pracuje v továrních tkalcovnách plátna, hedvábí a přádelnách (rodina Blažkova a Ludmila Ptáčková na čp. 43). V obci kvete 15 obchodů (smíšený obchod Aloise Rýznara čp. 85, obchod s máslem Anny Podhorné čp. 110) a tesařský mistr Jan Podhorný (čp. 110) vztyčuje nové krovy.",
          bubbles: [
            {
              speaker: "Běliči plátna a příze (Isidor a Božena Braní čp. 110, Jan Minář čp. 1) a domácká tkadlena",
              position: "bottom-left",
              tail: "top-left",
              text: "Šedesát čtyři běličů z naší obce bělí a suší sněhobílé lněné plátno a přízi, zatímco sedmdesát pět domáckých tkalců a tkadlen tká na ručních stavech!"
            },
            {
              speaker: "Obchodník Alois Rýznar (čp. 85), máslířka Anna Podhorná a tesař Jan Podhorný (čp. 110)",
              position: "bottom-right",
              tail: "top-right",
              text: "V údolí nás žije už bezmála dvanáct set! Váhy v patnácti obchodech se nezastaví a tesaři se zedníky staví jeden nový krov za druhým."
            }
          ],
          sourceNote: "SOkA Šumperk, Sčítání lidu 1910 (146 domů, 1 177 osob): 130 továrních tkalců a přadlen, 75 domáckých tkalců (Hausweber), 64 běličů plátna a příze, 81 rolníků, 66 čeledínů, 15 obchodníků.",
          actions: [
            { label: "📊 Demografie & sčítání 1910", onclick: "window.location.href='demografie.html?year=1910#histogram'" },
            { label: "👥 Rejstřík 1910 (1 177 os.)", onclick: "window.location.href='obyvatele.html?year=1910'" },
            { label: "🏡 Chalupa čp. 110 (Podhorní & Braní)", onclick: "openHouseDetail('cp110')" },
            { label: "🏪 Obchod čp. 85 (Rýznarovi)", onclick: "openHouseDetail('cp85')" }
          ]
        },
        {
          id: "panel-census-1921",
          censusYear: 1921,
          number: 21,
          year: "Sčítání 1921",
          location: "Pohled od JZ podél čp. 8 (vpravo/V) k SSZ na kostel čp. 1 (vlevo/Z) a rychtu čp. 7 • 1 031 obyv. ve 155 domech",
          title: "1921: První republika – Oberleithner a Primavesi, železniční topírna, stavitelé, poštmistrová a reálka",
          image: "assets/comic/panel_census_1921.jpg",
          realPhoto: "assets/photos/cp8_real.jpg",
          realPhotoTitle: "Památková usedlost čp. 8 – v roce 1921 domov rolníka Isidora Braného i běliče Petra Dvořáka",
          narrator: "První československé sčítání (15. 2. 1921, 1 031 obyvatel) jmenovitě uvádí i zaměstnavatele: 117 textiláků dochází do šumperských závodů Eduard Oberleithner a synové (běliči Jan Minář Medelské čp. 1, Alois Nejedlý čp. 2, Antonín Koš čp. 4, Petr Dvořák čp. 8; tkadleny Marie Vénosová čp. 4, Františka Minářová čp. 12), Primavesi (Marie Sadilová čp. 9), hedvábek Fel. Reiter a Frybyc či přádelny p. Seidla v Sudkově (Anna Jílková čp. 43). Devatenáct mužů pracuje u ČSD (Josef Vénos z čp. 4 v železniční topírně v Šumperku, František Gecl z čp. 44) a na silnicích (Adolf Minář), zedníci a tesaři u stavitelů Gässingera, Strohala a Kučery, drvoštěpové Michal Kantor (čp. 60) a Jan Pospíšil (čp. 100) v lesích, na čp. 56 úřaduje vrchní poštmistrová Emilie Pospíšilová s řídícím učitelem Engelbertem Pospíšilem a studenti Josef Koš (čp. 4), Antonín Vitásek (čp. 57) a Karel Šafář (čp. 88) míří na šumperskou reálku.",
          bubbles: [
            {
              speaker: "Stavbaři, drvoštěp Michal Kantor (čp. 60) a poštmistrová Emilie Pospíšilová (čp. 56)",
              position: "bottom-left",
              tail: "top-left",
              text: "V mladé republice máme v Dlouhomilově vlastní poštovní úřad! Tesaři a zedníci míří s plány na stavby, drvoštěpové do brnického revíru a chlapci na šumperskou reálku."
            },
            {
              speaker: "Běliči a tkadleny od Oberleithnerů a železničář Josef Vénos (čp. 4, topírna Šumperk)",
              position: "bottom-right",
              tail: "top-right",
              text: "A my vyrážíme z údolí a z Medelského na ranní směnu – přes stovku nás dělá v bělidlech a tkalcovnách u Oberleithnerů a Primavesi a devatenáct u státní dráhy a v topírně!"
            }
          ],
          sourceNote: "SOkA Šumperk, Sčítání lidu 15. 2. 1921 (155 domů, 1 031 osob): 117 továrních textiláků a běličů (Oberleithner, Primavesi, Reiter, Seidl), 30 domáckých tkalců, 90 rolníků, 51 čeledínů, 19 železničářů a silničářů.",
          actions: [
            { label: "📊 Demografie & sčítání 1921", onclick: "window.location.href='demografie.html?year=1921#histogram'" },
            { label: "👥 Rejstřík 1921 (1 031 os.)", onclick: "window.location.href='obyvatele.html?year=1921'" },
            { label: "🏡 Usedlost čp. 8", onclick: "openHouseDetail('cp8')" },
            { label: "📮 Škola a pošta čp. 56", onclick: "openHouseDetail('cp56')" }
          ]
        }
      ]
    }
  ]
};

// ============================================================================
// STRUKTUROVANÝ ATLAS OBŽIVY A POVOLÁNÍ PRO JEDNOTLIVÉ ROKY SČÍTÁNÍ (1857–1921)
// Používá se v demografie.html i pro přímé filtrování v komiksové kronice.
// ============================================================================
const censusLivelihoodAtlas = {
  1857: {
    year: 1857,
    panelId: "panel-census-1857",
    image: "assets/comic/panel_census_1857.jpg",
    badge: "Sčítání 1857 • 9 let po zrušení poddanství",
    headline: "Svobodné selské grunty, čeledíni, děvečky a první pražský právník ze statku čp. 29",
    totalRecords: 24,
    housesCount: 4,
    estVillagePop: "~1 000 obyv. (dochovány 4 archy: čp. 7, 10, 22, 29)",
    summary: "První sčítání po zrušení roboty (1848) zachycuje ještě tradiční agrární svět velkých selských gruntů a dědičné rychty. Každá usedlost funguje jako soběstačná hospodářská jednotka s vlastními koňmi, dobytkem, neprovdanými sourozenci a najatou čeledí (Dienstboten), ale z bohatého gruntu čp. 29 už odchází první syn studovat práva na pražskou univerzitu.",
    sectors: [
      { label: "Držitelé gruntů a rodinní pomocníci", count: 14, pct: 58.3, icon: "🌾", color: "bg-emerald-600", examples: "Johann Merta (*1825, rychtář čp. 7), Josef Pilch/Jílek (čp. 10), Josef Dvořák (*1813, čp. 22), Johann Dvořák st. (*1795, čp. 29)" },
      { label: "Zemědělská čeleď (čeledíni a služebníci)", count: 3, pct: 12.5, icon: "🐎", color: "bg-amber-600", examples: "Anton Fučík (*1833, čeledín na rychtě čp. 7), Johann Hošek (*1836, služebník na čp. 10)" },
      { label: "Vysokoškolští studenti a právníci", count: 1, pct: 4.2, icon: "🎓", color: "bg-indigo-600", examples: "Johann Dvořák ml. (*1826, čp. 29) – zapsán jako „Jurist in Prag“ (právník v Praze)" },
      { label: "Výměnkáři a děti na gruntech", count: 6, pct: 25.0, icon: "🏡", color: "bg-stone-500", examples: "Výměnkáři a mladší děti hospodářů na čp. 7, 10, 22 a 29" }
    ]
  },
  1869: {
    year: 1869,
    panelId: "panel-census-1869",
    image: "assets/comic/panel_census_1869.jpg",
    badge: "Sčítání 1869 • 1. moderní sčítání (982 obyv. v obci)",
    headline: "Šenk a řeznictví na rychtě, obchodník s máslem a vejci, porodní bába a první přadleny lnu",
    totalRecords: 56,
    housesCount: 4,
    estVillagePop: "982 obyv. (663 Dlouhomilov + 319 Benkov ve 122 domech)",
    summary: "Roku 1869 vrcholí počet obyvatel horského Benkova (319 osob) a přímo v centru Dlouhomilova na rychtě čp. 7 (kde žije 23 osob v několika domácnostech!) vidíme nástup venkovských živností, obchodu a prvních dělnic docházejících do mechanických přádelen lnu.",
    sectors: [
      { label: "Sedláci, rodinní pomocníci a polní nádeníci", count: 23, pct: 41.1, icon: "🌾", color: "bg-emerald-600", examples: "Jan Merta (čp. 7, nájemce dvora v Hrotovicích), Karel Jílek (sedlák čp. 10), Josef Dvořák (sedlák čp. 22), polní nádeníci Jan Taláček a Josef Vepřek" },
      { label: "Hostinec, řezník a obchod s máslem a vejci", count: 3, pct: 5.4, icon: "🍺", color: "bg-amber-600", examples: "Johanna Katzerová (*1831, hostinská na rychtě čp. 7), Antonín Katzer (*1831, řezník / Fleischer), Josef Polách (*1839, samostatný obchodník s máslem a vejci)" },
      { label: "Přadleny lnu a tkadlec", count: 3, pct: 5.4, icon: "🧵", color: "bg-rose-600", examples: "Marie Wagnerová (*1845, přadlena lnu čp. 7), Terezie Königová (*1856, dělnice v přádelně čp. 7), Josef Kauer (*1842, tkadlec)" },
      { label: "Porodní babička (Hebamme) a student reálky", count: 2, pct: 3.6, icon: "🩺", color: "bg-indigo-600", examples: "Františka Kauerová (*1830, zkoušená porodní babička čp. 7), Arnošt Merta (*1855, student reálky ve Znojmě)" },
      { label: "Zemědělská čeleď, výměnkáři a školáci", count: 25, pct: 44.6, icon: "🎒", color: "bg-stone-500", examples: "Čeledíni Jan a František Jílkovi (čp. 10), služka Anna Maturová, 17 dětí a žáků obecné školy" }
    ]
  },
  1880: {
    year: 1880,
    panelId: "panel-census-1880",
    image: "assets/comic/panel_census_1880.jpg",
    badge: "Sčítání 1880 • Kompletní Dlouhomilov & Medelské (735 osob v 96 domech)",
    headline: "Nástup mechanických přádelen lnu, rolníci-zahradníci a mladá generace řemeslnických učňů",
    totalRecords: 735,
    housesCount: 96,
    estVillagePop: "982 přít. obyv. v celém údolí (543 Dlouhomilov + 156 Medelské = 100 % přepsáno [735 zaps.] + 283 Benkov)",
    summary: "Kompletní sčítání 1880 pro Dlouhomilov a osadu Medelské (92 obydlených z 96 domů, 699 přít. / 735 zaps. osob = 100 % shoda s ČSÚ) zachycuje nástup průmyslu: již 63 obyvatel pracuje v mechanických přádelnách lnu a 14 v tkalcovství (často jako vedlejší obživa k polnímu hospodářství), vedle 45 řemeslníků a učňů, c. k. poštmistra Karla Katzera (čp. 8) a 98letého Jana Poisela (*1782).",
    sectors: [
      { label: "Sedláci, rolníci-zahradníci a rodina v hospodářství", count: 211, pct: 28.7, icon: "🌾", color: "bg-emerald-600", examples: "Arnošt Merta (čp. 7), Karel Jílek (čp. 10), Josef Dvořák (čp. 22), rolníci-zahradníci na chalupách a spolumajetnice" },
      { label: "Zemědělská čeleď (sloužící) a polní nádeníci", count: 119, pct: 16.2, icon: "🐎", color: "bg-amber-600", examples: "Sloužící při rolnictví (čeledíni a děvečky na rychtě čp. 7, čp. 10, čp. 22) a polní nádeníci a nádenice" },
      { label: "Dělníci v přádelnách lnu (63) a tkalci (14)", count: 77, pct: 10.5, icon: "🧵", color: "bg-rose-600", examples: "63 nádeníků a nádenic v přádelnách lnu (Antonín Dvořák čp. 2, Josef Jílek čp. 51, Albert Pláček čp. 54) a 14 tkalcovských pomocníků" },
      { label: "Řemeslníci a učni (45), obchodníci, pošta, škola & fara (31)", count: 76, pct: 10.3, icon: "🔨", color: "bg-indigo-600", examples: "Krejčovský mistr Vincenc Braný (čp. 25), stolařský mistr Antonín Hrubý (čp. 43), švec Alois Vitásek (*1864, čp. 75), c. k. poštmistr Karel Katzer (čp. 8), obchodníci Tomáš Jílek (čp. 5) a Antonín Vitásek (čp. 53), farář P. Antonín Riedl (čp. 47)" },
      { label: "Výměnkáři, školáci (128) a děti v domácnosti (95)", count: 252, pct: 34.3, icon: "🎒", color: "bg-stone-500", examples: "128 školáků („chodí do školy“), 95 malých dětí a 98letý výměnkář Jan Poisel (*1782, čp. 54)" }
    ]
  },
  1890: {
    year: 1890,
    panelId: "panel-census-1890",
    image: "assets/comic/panel_census_1890.jpg",
    badge: "Sčítání 1890 • Kompletních 1 095 obyvatel ve 143 domech",
    headline: "Rozmach domáckých tkalců lnu, továrních tkalců plátna i hedvábí, 24 obchodníků a venkovská řemesla",
    totalRecords: 1095,
    housesCount: 143,
    estVillagePop: "1 095 přepsaných osob (772 Dlouhomilov s Medelským + 273 Benkov)",
    summary: "První kompletně dochované sčítání celé obce (143 domů, 1 095 osob) odhaluje fascinující průmyslově-agrární symbiózu: 179 obyvatel pracuje v textilním odvětví (100 továrních tkalců, 37 domáckých tkalců lnu, 17 tkalců hedvábí, 16 přadlen a 9 běličů) a 84 v tradičních řemeslech, obchodu a veřejné službě!",
    sectors: [
      { label: "Textilní výroba (tkalci lnu, plátna, hedvábí, přadleny a bělidla)", count: 179, pct: 16.3, icon: "🧵", color: "bg-rose-600", examples: "37 domáckých tkalců lnu (Johann Lorenz, Josef Hönig, Steffan Urban), 100 továrních tkalců (Petr Dvořák čp. 2, Anna Jílková čp. 43), 17 tkalců hedvábí (Benjamin Podhorný čp. 51, bratři Ptáčkovi čp. 54, sourozenci Braní čp. 6), 16 přadlen, 9 běličů" },
      { label: "Sedláci, rolníci, čeleď a polní nádeníci", count: 170, pct: 15.5, icon: "🌾", color: "bg-emerald-600", examples: "111 držitelů pozemků a pachtýřů (Arnošt Merta čp. 7, Karel Jílek čp. 10, Alois Dvořák čp. 29), 37 čeledínů (Ignác Němec, Jan Starý) a 22 polních nádeníků" },
      { label: "Řemeslníci (kováři, krejčí, tesaři, bednář, ševci, řezníci, zedníci)", count: 48, pct: 4.4, icon: "⚒️", color: "bg-amber-600", examples: "Kovář a podkovář František Vlach (čp. 7), krejčovský mistr Vincenc Braný se 3 tovaryši (čp. 6), bednářský mistr Julius Březina (čp. 8), ševcovští mistři Isidor Braný (čp. 61) a Adolf Minář (čp. 74)" },
      { label: "Obchodníci (24), hostinští (8), učitelé, farář, hajný a ponocný", count: 42, pct: 3.8, icon: "🏪", color: "bg-indigo-600", examples: "Obchodník v potravinách Antonín Vitásek (čp. 53), obchodnice s máslem Františka Venusová (čp. 68), hostinští Pavel Vlčík (čp. 4) a Antonín Katzer (čp. 88), nadučitel Josef Tiefenbach (čp. 56), učitelka Terezie Kolářová (čp. 7), farář P. Antonín Riedl (čp. 47), porodní bába Marie Bezobohatá (čp. 5), hajný Josef Körner (čp. 39), ponocný a hrobař Josef Krátký (čp. 30)" },
      { label: "Rodinní příslušníci v domácnosti, výměnkáři a 317 dětí", count: 656, pct: 59.9, icon: "👨‍👩‍👧‍👦", color: "bg-stone-500", examples: "294 rodinných příslušníků v domácnosti (mnohé ženy s přípisem „pomáhá při tkalcovství“), 45 výměnkářů a 317 dětí a žáků" }
    ]
  },
  1900: {
    year: 1900,
    panelId: "panel-census-1900",
    image: "assets/comic/panel_census_1900.jpg",
    badge: "Sčítání 1900 • Přelom století (1 140 obyvatel ve 149 domech)",
    headline: "Stolařští a kolářští mistři, železniční průvodčí, poštovní postilion a 40 domáckých tkalců lnu",
    totalRecords: 1140,
    housesCount: 149,
    estVillagePop: "1 140 přepsaných osob (847 Dlouhomilov s Medelským + 243 Benkov)",
    summary: "Na přelomu 19. a 20. století roste počet obyvatel Dlouhomilova na 847 (spolu s Benkovem 1 140 zapsaných osob). Vedle selských gruntů a 91 textilních pracovníků zažívají rozkvět stavební a dřevozpracující řemesla (15 stolařů a tesařů, 11 zedníků, kolář) a moderní doprava s poštou a železnicí.",
    sectors: [
      { label: "Sedláci, rolníci, čeleď (pacholci a děvečky) a nádeníci", count: 220, pct: 19.3, icon: "🌾", color: "bg-emerald-600", examples: "138 držitelů gruntů a rolníků (Arnošt Merta čp. 7, Karel Jílek čp. 10, Josef Dvořák čp. 22), 54 pacholků a děveček (Richard Doležel, Gustav Šindler, Ignác Kamler) a 28 polních nádeníků" },
      { label: "Domáčtí tkalci lnu (Leinenweber), tovární tkalci, hedvábníci a přadleny", count: 91, pct: 8.0, icon: "🧵", color: "bg-rose-600", examples: "40 domáckých tkalců lnu (Anton Schinzel, Anton Urban, Johann Schmid), 20 továrních tkalců, 20 dělnic v přádelnách lnu (Anna a Ludmila Dvořákovy), 9 tkaček hedvábí (Anežka Soklová čp. 9, Anna Dvořáková čp. 11) a 2 běliči" },
      { label: "Stolaři, tesaři, zedníci, krejčí, kováři, ševci a kolář", count: 52, pct: 4.6, icon: "🪚", color: "bg-amber-600", examples: "Stolařský mistr František John (čp. 58) s tovaryšem Bedřichem Pechem a učněm Jarolímem Soklem (čp. 9), 11 zedníků (Jan Ston čp. 44, Karel Vitásek čp. 57), krejčovští mistři Vincenc Braný (čp. 8) a Josef Hroch (čp. 13), kovář Jan Kupka (čp. 78), zámečník František Sadil (čp. 86), kolář Hynek Chura (čp. 43), 6 obuvníků" },
      { label: "Pošta, železnice, samospráva, škola, fara a hostince", count: 51, pct: 4.5, icon: "📯", color: "bg-indigo-600", examples: "Starosta obce Alois Dvořák (čp. 29), poštovní posel Alois Dvořák st. a poštovní postilion Josef Dvořák (čp. 29), železniční průvodčí Viktor Körner a traťový dělník Richard Körner (Benkov čp. 31), učitelé Engelbert Pospíšil a Alois Svoboda (čp. 56), farář P. František Kužela (čp. 47), hostinský Antonín Katzer (čp. 88)" },
      { label: "Rodinní příslušníci, výměnkáři a 349 dětí a školáků", count: 726, pct: 63.7, icon: "👨‍👩‍👧‍👦", color: "bg-stone-500", examples: "339 rodinných příslušníků v hospodářství, 34 výměnkářů a rekordních 349 dětí a žáků" }
    ]
  },
  1910: {
    year: 1910,
    panelId: "panel-census-1910",
    image: "assets/comic/panel_census_1910.jpg",
    badge: "Sčítání 1910 • Historické maximum obce (1 177 přepsaných osob)",
    headline: "Zlatý věk bělidel plátna a příze (64 běličů!), 75 domáckých tkalců a 130 továrních textiláků",
    totalRecords: 1177,
    housesCount: 146,
    estVillagePop: "1 177 přepsaných osob (historické maximum Dlouhomilova, Medelského a Benkova)",
    summary: "V roce 1910 dosahuje populace údolí historického vrcholu. Textilní výroba a bělení plátna jsou na absolutním vrcholu: 269 obyvatel (téměř polovina všech ekonomicky aktivních dospělých!) pracuje v továrních tkalcovnách plátna a hedvábí (130), jako domáčtí tkalci a tkadleny (75 Hausweber/Hausweberinnen) nebo na bělidlech plátna a příze (64 běličů)!",
    sectors: [
      { label: "Textilní průmysl: tovární tkalci (104), domáčtí tkalci (75), běliči (64), hedvábí (18) a přádelny (8)", count: 269, pct: 22.9, icon: "🧵", color: "bg-rose-600", examples: "64 běličů plátna a příze (Isidor a Božena Braní čp. 110, Jan Minář čp. 1), 75 domáckých tkalců a tkadlen (Adolf Schinzel, Franz Jakisch, Josef Hönig), 104 továrních tkalců plátna (rodina Blažkova čp. 43), 18 tkalců hedvábí (Ludmila Ptáčková a Aloisie Blažková čp. 43)" },
      { label: "Sedláci, rolníci, čeleď a polní nádeníci", count: 162, pct: 13.8, icon: "🌾", color: "bg-emerald-600", examples: "81 majitelů gruntů (Eduard Koryčán čp. 7, František Šafář čp. 10, Josef Dvořák čp. 22 a čp. 29), 66 čeledínů, kočích a děveček, 15 polních nádeníků" },
      { label: "Stavební a výrobní řemesla (tesaři, stolaři, zedníci, krejčí, ševci, kováři, soustružník)", count: 53, pct: 4.5, icon: "🔨", color: "bg-amber-600", examples: "Tesařský mistr Jan Podhorný (čp. 110), 12 zedníků (Jan Podhorný ml., Bohumil Dvořák čp. 14), 12 krejčích, 9 obuvníků (František Krejčí čp. 29, František Závodný čp. 64), kovář Antonín Kupka (čp. 78), strojní zámečník František Jílek (čp. 65), soustružník železa Josef Hrubý (čp. 14)" },
      { label: "Obchody (15), hostince (7), pošta, lesní služba, škola a fara", count: 38, pct: 3.2, icon: "🏪", color: "bg-indigo-600", examples: "Smíšený obchod Aloise a Terezie Rýznarových (čp. 85), obchod s máslem Anny Podhorné (čp. 110), hostinští Ferdinand Doležel (čp. 77) a Vilém Šafář (čp. 88), výpravčí pošty Josef Dvořák (čp. 28), lesní strážník Karel Lukáš (čp. 5), nadučitel Evžen Pospíšil, učitelé Bohumil Tilcer a Ladislav Kubíček, farář P. Matěj Vaněk (čp. 47), porodní bába Anna Pelcová (čp. 106)" },
      { label: "Rodinní příslušníci v domácnosti, výměnkáři a 301 dětí", count: 655, pct: 55.6, icon: "👨‍👩‍👧‍👦", color: "bg-stone-500", examples: "300 rodinných příslušníků v domácnosti, 54 výměnkářů a 301 dětí a školáků" }
    ]
  },
  1921: {
    year: 1921,
    panelId: "panel-census-1921",
    image: "assets/comic/panel_census_1921.jpg",
    badge: "Sčítání 15. 2. 1921 • 1. sčítání ČSR (1 031 obyvatel ve 155 domech)",
    headline: "Textilky Oberleithner a Primavesi, železniční topírna ČSD, stavitelé, poštmistrová a studenti reálky",
    totalRecords: 1031,
    housesCount: 155,
    estVillagePop: "1 031 přepsaných osob (820 Dlouhomilov s Medelským + 211 Benkov ve 155 domech)",
    summary: "První československé sčítání z 15. února 1921 přináší nejpodrobnější pohled na zaměstnavatele obyvatel: 147 lidí působí v textilním průmyslu (zejména v šumperských závodech Eduard Oberleithner a synové, Primavesi, hedvábkách Fel. Reiter a Frybyc či přádelně p. Seidla v Sudkově), 19 mužů pracuje na železnici (v šumperské topírně a u trati) a na silnicích, 51 ve stavebních a kovodělných řemeslech a v obci funguje vlastní poštovní úřad.",
    sectors: [
      { label: "Textilky a bělidla (Oberleithner, Primavesi, Reiter, Seidl) & domáčtí tkalci", count: 147, pct: 14.3, icon: "🏭", color: "bg-rose-600", examples: "69 továrních tkalců a dělníků (Františka Minářová čp. 12, Marie Vénosová čp. 4), 31 běličů příze a plátna u Oberleithnerů (Jan Minář Medelské čp. 1, Alois Nejedlý čp. 2, Antonín Koš čp. 4, Petr Dvořák čp. 8, Marie Sadilová čp. 9, Alois Konečný čp. 11), 30 domáckých tkalců lnu (Adolf Schinzel, Stephan Urban, Josef Hönig), 14 přadlen (Anna Jílková čp. 43, Ludmila Minářová čp. 2), 3 tkalci hedvábí (František Minář čp. 17, Marie Soklová čp. 109)" },
      { label: "Samostatní rolníci, zemědělská čeleď a lesní drvoštěpové", count: 146, pct: 14.2, icon: "🌾", color: "bg-emerald-600", examples: "90 samostatných rolníků (František Hvížď čp. 7, František Šafář čp. 10, Karel Dvořák čp. 22, Josef Dvořák čp. 29, Isidor Braný a Isidor Krestin čp. 8), 51 čeledínů a služebných, lesní drvoštěpové Michal Kantor (čp. 60, brnický revír) a Jan Pospíšil (čp. 100, Lichtenštejnovy lesy)" },
      { label: "Zedníci, tesaři, stolaři, kováři, zámečníci, kolář, ševci a krejčí", count: 55, pct: 5.3, icon: "🛠️", color: "bg-amber-600", examples: "13 zedníků (Oldřich Dvořák čp. 46 u stavitele Fr. Strohala, Petr Linhart u stavitele Ad. Berky), tesaři a stolaři (František Dvořák u stavitele J. Kučery v Zábřehu, stolařský mistr František John čp. 58), kolář Bohumil Vainlich (*1904, čp. 5), kovář Antonín Kupka (čp. 78), zámečničtí učni Jan Minář a František Vénos, 10 obuvníků, 9 krejčích (mistr Eduard Meixner čp. 23)" },
      { label: "Železničáři ČSD (19), pošta, škola, obchody, hostince a studenti reálky", count: 97, pct: 9.4, icon: "🚂", color: "bg-indigo-600", examples: "19 železničářů a silničářů (Josef Vénos čp. 4 – železniční topírna Šumperk, František Gecl čp. 44 – ČSD Olomouc, Adolf Minář Medelské čp. 2), vrchní poštmistrová Emilie Pospíšilová a řídící učitel Engelbert Pospíšil (čp. 56), farář P. Matěj Vaněk (čp. 47), obchodníci František Dvořák (čp. 96), Alois Ryznar (čp. 85) a Rudolf Merta (čp. 82), hostinští Anežka Doleželová (čp. 77) a Vilém Šafář (čp. 88), studenti šumperské reálky Josef Koš (čp. 4), Antonín Vitásek (čp. 57) a Karel Šafář (čp. 88)" },
      { label: "Rodinní příslušníci v domácnosti, výměnkáři a 240 dětí a žáků", count: 586, pct: 56.8, icon: "👨‍👩‍👧‍👦", color: "bg-stone-500", examples: "311 rodinných příslušníků v domácnosti, 35 výměnkářů a 240 dětí a žáků obecné školy" }
    ]
  }
};

