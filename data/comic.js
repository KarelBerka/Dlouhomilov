// ============================================================================
// KOMIKSOVÁ KRONIKA ÚDOLÍ: DLOUHOMILOV, MEDELSKÉ A BENKOV (1356–1949)
// Hybridní komiksový modul: dobové ilustrace vycházející z reálných fotografií
// všech památkově chráněných stavení (NPÚ ÚSKP & Google Earth) + ostré HTML/CSS
// bubliny a interaktivní prokliky.
// ============================================================================

const comicData = {
  title: "Kronika údolí v obrazech: Příběh Dlouhomilova, Medelského a Benkova",
  subtitle: "Dvanáct komiksových obrazů ze sedmi staletí dějin pod kopcem Šebená a hradem Brníčkem (1356–1949) – každý památkově chráněný objekt (ÚSKP) má svůj vlastní obraz podle ověřených matrik, sčítacích operátů a reálných fotografií z Národního památkového ústavu a Google Earth.",
  pages: [
    {
      id: "page-1",
      pageNumber: 1,
      roman: "I.",
      era: "1356–1857",
      title: "Zrození údolí, vlastní farnost a nejstarší selské grunty",
      subtitle: "Od středověké lesní lánové vsi s rybníky pod kopcem Šebená a hradem Brníčkem přes založení farnosti u kostela Všech svatých roku 1784 až po statek čp. 29.",
      panels: [
        {
          id: "panel-01",
          number: 1,
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
          number: 2,
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
          number: 3,
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
      pageNumber: 2,
      roman: "II.",
      era: "1869–1907",
      title: "Dědičná rychta, dvojitá svatba a oheň v Bludově",
      subtitle: "Od správního srdce vsi na památkové rychtě čp. 7 přes slavnou dvojitou svatbu u gruntu čp. 24 roku 1878 až k hrdinskému činu koláře Antonína Motyky a sňatku na čp. 29 roku 1907.",
      panels: [
        {
          id: "panel-05",
          number: 4,
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
          number: 5,
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
          number: 6,
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
      pageNumber: 3,
      roman: "III.",
      era: "1834–1930",
      title: "Památkové usedlosti na návsi a ve svahu: čp. 8, čp. 5 a čp. 43",
      subtitle: "Tři architektonické skvosty Národního památkového ústavu v Dlouhomilově – klasicistní grunt čp. 8 se štítem ANNO 1845, usedlost čp. 5 u koláře Vainlicha a usedlost ve svahu čp. 43 s dvouramenným schodištěm.",
      panels: [
        {
          id: "panel-cp8",
          number: 7,
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
          number: 8,
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
          number: 9,
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
      pageNumber: 4,
      roman: "IV.",
      era: "1906–1949",
      title: "Kovárna, soužití tří sídel a 163 let věrnosti rodu",
      subtitle: "Venkovská kovárna v čp. 110, cesta z Medelského za prací, památková kaplička v Benkově na jazykové hranici a paměť rodu Dvořáků na čp. 22.",
      panels: [
        {
          id: "panel-08",
          number: 10,
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
          number: 11,
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
          number: 12,
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
    }
  ]
};
