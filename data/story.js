// ============================================================================
// PŘÍBĚH DLOUHOMILOVA, MEDELSKÉHO A BENKOVA & ZAJÍMAVOSTI Z PRAMENŮ
// Zpracováno v duchu vyprávěcí metodiky projektů Rodokmeny a Genealogie
// ============================================================================

const storyData = {
  title: "Příběh Dlouhomilova, Medelského a Benkova",
  subtitle: "Od středověké lesní lánové vsi pod hradem Brníčkem přes barokní farnost, selské grunty a osadu Medelské až po soužití s německým Benkovem na jazykové hranici Sudet (1356–1949).",
  stats: [
    { label: "První písemná zmínka", value: "1356", detail: "Pod hradem Brníčkem" },
    { label: "Historické části", value: "3 sídla", detail: "Dlouhomilov • Medelské • Benkov" },
    { label: "Kontinuita čp. 22 & 29", value: "1679–1949", detail: "Rod Dvořáků přes 270 let" },
    { label: "Zpracované matriky & archy", value: "928 + 380", detail: "Matriční zápisy a sčítací záznamy" }
  ],
  chapters: [
    {
      id: "kap-1",
      number: "I.",
      era: "1356–1786",
      category: "krajina",
      badge: "Krajina & farnost",
      title: "Údolí pod Brníčkem a stěhování farnosti",
      summary: "Jak vznikla lesní lánová ves v údolí Dlouhomilovského potoka a proč museli předkové za křty a svatbami putovat nejprve do Dubicka a poté do Rohle.",
      paragraphs: [
        "Dlouhomilov (<em>Lomigsdorf</em>, ve starších pramenech též <em>Dluhomilow</em>) vyrůstal od vrcholného středověku jako typická <strong>lesní lánová ves</strong> v sevřeném údolí Dlouhomilovského potoka pod Bukovickou horou (526 m n. m.) a zříceninou hradu Brníčka. První písemná zmínka z roku <strong>1356</strong> jej zachycuje již jako rozvinutou poddanskou obec náležející k brníčskému a později zábřežskému panství. Páteří vsi byla potoční niva s mlýnským náhonem (doloženým u <button onclick=\"openHouseDetail('cp3')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">čp. 3</button>), na niž z obou stran kolmo navazovaly dlouhé záhumenicové lány selských gruntů šplhající až k lesním hřebenům.",
        "Na nejstarších mapách Moravy – <strong>Müllerově mapě z roku 1716</strong> a <strong>Wielandově mapě z roku 1726</strong> – se v těsném sousedství objevují dvě sesterské vsi: údolní <em>Lomigsdorf / Dlohomilow</em> a výše v kopcích položený <em>Bentke</em> (Benkov). <strong>I. vojenské (josefínské) mapování z let 1764–1768</strong> již věrně vykresluje červeně vyznačený zděný kostel na vyvýšenině uprostřed Dlouhomilova, soustavu selských statků po obou březích potoka i luční cestu stoupající k severu do osady <strong>Medelské</strong> (<em>Dreihofen</em>).",
        "Kdo hledá nejstarší obyvatele v matrikách, narazí na pozoruhodné <strong>putování dlouhomilovské farnosti</strong>: až <strong>do roku 1762</strong> chodili obyvatelé Dlouhomilova, Medelského i Benkova ke křtům, svatbám a pohřbům do farnosti <strong>Dubicko</strong> (matriky od r. 1650), v letech <strong>1763–1784/1786</strong> do sousední <strong>Rohle</strong> a teprve reformy císaře Josefa II. přinesly roku <strong>1784/1786</strong> samostatnou duchovní správu přímo u pozdně barokního <button onclick=\"openHouseDetail('cp1')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">kostela Všech svatých (čp. 1)</button>, <button onclick=\"openHouseDetail('cp2')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">fary (čp. 2)</button> a <button onclick=\"openHouseDetail('cp12')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">staré školy (čp. 12)</button>."
      ],
      links: [
        { label: "⛪ Kostel Všech svatých (čp. 1)", action: "openHouseDetail('cp1')" },
        { label: "🏛️ Barokní fara (čp. 2)", action: "openHouseDetail('cp2')" },
        { label: "🗺️ I. vojenské mapování (1764)", action: "activateMapOverlayFromAtlas('vojenske1_1764')" }
      ]
    },
    {
      id: "kap-2",
      number: "II.",
      era: "1770–1949",
      category: "krajina",
      badge: "Tři sídla",
      title: "Tři světy v jednom údolí: Dlouhomilov, Medelské a Benkov",
      summary: "Česká selská vesnice v údolí, severní osada Tři Dvory (Medelské) s vlastní číselnou řadou a horská německá obec Benkov přifařená k témuž kostelu.",
      paragraphs: [
        "V matričních knihách farního úřadu v Dlouhomilově (<em>Zá II 1</em> až <em>Zá II 10</em> z let 1784–1949) se neustále prolínají osudy <strong>tří odlišných sídel</strong>, z nichž každé mělo vlastní číslování domů a vlastní krajinný i jazykový ráz:",
        "<strong>1. Dlouhomilov (<em>Lomigsdorf</em>, čp. 1–133):</strong> Bohatá česká selská a řemeslnická ves v údolí s mimořádně zachovaným souborem zděné lidové architektury severomoravského typu (dnes vesnická památková zóna ÚSKP 2350). Číslování domů zavedené za Marie Terezie v letech <strong>1770–1771</strong> (čp. 1–80) se zde nikdy nepřečíslovávalo – nové domky prostě dostávaly čísla na konec řady (1834: 80 domů, 1900: 106 domů, 1921: 118 domů).",
        "<strong>2. Osada Medelské (<em>Dreihofen</em> / <em>Tři Dvory</em>, vlastní řada čp. 1–10):</strong> Skupinka dvorů a chalup na severním okraji katastru směrem k Brníčku, kde po generace žily rody <strong>Šafářů</strong> (<em>Schafarz</em>), <strong>Minářů</strong> (<button onclick=\"openHouseDetail('medelske_cp1')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">Medelské čp. 1</button>) a <strong>Nejedlých</strong> (<button onclick=\"openHouseDetail('medelske_cp2')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">Medelské čp. 2</button>). Protože mělo Medelské vlastní řadu čísel popisných od čp. 1, vyřešilo teprve sčítání 1921 záhadu matričních zápisů z let 1938–1948, kde „čp. 2“ u rodiny Nejedlých neznamenalo faru, ale Medelské čp. 2!",
        "<strong>3. Benkov (<em>Benke</em> / <em>Bentkow</em>, vlastní řada čp. 1–49):</strong> Horská vesnice na náhorní plošině jihovýchodně nad Dlouhomilovem kolem <button onclick=\"openHouseDetail('benkov_kaple')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">kaple sv. Antonína Paduánského</button>. Na <strong>Chytilově národnostní mapě Moravy z roku 1906</strong> procházela mezi údolím a kopcem jazyková hranice: Dlouhomilov s Medelským jsou označeny červeně jako české obce, Benkov zeleně jako obec německá (rody <em>Kauer, Heger, Rössner, Blaschke, Bischof, Weiser, Schmid</em>, vedle nichž zde však žily i české rodiny <em>Crháků, Halámků a Krobotů</em>)."
      ],
      links: [
        { label: "🏡 Medelské čp. 1 (rod Minářů)", action: "openHouseDetail('medelske_cp1')" },
        { label: "🏡 Medelské čp. 2 (rod Nejedlých)", action: "openHouseDetail('medelske_cp2')" },
        { label: "⛪ Kaple v Benkově", action: "openHouseDetail('benkov_kaple')" },
        { label: "🗺️ Národnostní mapa Moravy (1906)", action: "openMapCompareModal('narodnostni1906')" }
      ]
    },
    {
      id: "kap-3",
      number: "III.",
      era: "1749–2004",
      category: "krajina",
      badge: "Heraldika & symboly",
      title: "Znak obce: rýče, zlaté krojidlo a dva jabloňové květy",
      summary: "Jak se stará selská pečetidla a spojení Dlouhomilova s Benkovem promítly do obecního znaku (REKOS č. 37 / 2004).",
      paragraphs: [
        "Spojení Dlouhomilova a Benkova dostalo dne <strong>8. června 2004</strong> (rozhodnutím předsedy Poslanecké sněmovny č. 37) výstižné heraldické vyjádření v oficiálním znaku a vlajce obce:",
        "<em>„Ve stříbrno-červeně polceném štítě dva zkřížené vztyčené rýče mezi dvěma pětilistými jabloňovými květy se zlatými středy, vše opačných barev, přeložené doleva obráceným zlatým krojidlem.“</em>",
        "<strong>Dva zkřížené rýče a zlaté krojidlo (radlice)</strong> odkazují na starou pečetní symboliku zemědělské obce Dlouhomilov a staletou práci selských i domkářských rodů. <strong>Dva pětilisté jabloňové květy se zlatými středy v opačných tinkturách</strong> připomínají jednak proslulé ovocnářství a jabloňové sady obklopující selské grunty, jednak bratrské spojení obou historických obcí – <strong>Dlouhomilova a Benkova</strong>."
      ],
      links: [
        { label: "🛡️ Zobrazit znak obce (REKOS)", action: "openArchiveViewer('assets/icons/dlouhomilov_znak_rekos.jpg', 'Znak obce Dlouhomilov & Benkov (REKOS č. 37 / 8. 6. 2004)', 'Blason: Ve stříbrno-červeně polceném štítě dva zkřížené vztyčené rýče mezi dvěma pětilistými jabloňovými květy se zlatými středy, vše opačných barev, přeložené doleva obráceným zlatým krojidlem.', 'assets/icons/dlouhomilov_erb.svg', 'https://rekos.psp.cz/detail-symbolu/id/4261')" }
      ]
    },
    {
      id: "kap-4",
      number: "IV.",
      era: "1804–1921",
      category: "grunty",
      badge: "Správa obce",
      title: "Dědičná rychta čp. 7: správní srdce obce",
      summary: "Od rychtářského rodu Mertů přes Kroboty a Pavlíky až po tři domácnosti, industriální učitelku a osmnáctidenní Jitřenku v únoru 1921.",
      paragraphs: [
        "Nejvýstavnějším světským stavením v obci byla od 18. století <button onclick=\"openHouseDetail('cp7')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">bývalá dědičná rychta (čp. 7)</button> na východní straně návsi – mohutný patrový dům s barokním jádrem a hospodářským dvorem (kulturní památka ÚSKP 20137/8-2353). Rychtář opatroval obecní truhlici, pečetidlo, dohlížel na robotní povinnosti a urovnával sousedské spory.",
        "Sčítací operáty z let <strong>1857–1921</strong> ukazují rychtu čp. 7 jako živý velkostatek, kde pod jednou střechou pobývalo až <strong>23 osob</strong> (roku 1869). V polovině 19. století zde hospodařil rychtářský rod <strong>Mertů</strong> (<em>Franz Merta</em>, *1804), po němž se na rychtě vystřídali <strong>Krobotové</strong>, <strong>Cinkové</strong> a na přelomu století rolník <strong>František Pavlík</strong> (*1855).",
        "Při sčítání <strong>15. února 1921</strong> obývaly čp. 7 tři samostatné domácnosti (14 osob): v hlavní části hospodařil rolník <strong>František Hvížď</strong> (*1879 z Třeštiny) s manželkou Annou (*1886), pěti dětmi a čeledí. Ve druhém bytě žila vdova <strong>Mathilda Ptáčková</strong> (*1863 z Rovenska) s dcerou <strong>Eliškou Ptáčkovou</strong> (*1889, industriální učitelkou na obecné škole v Dlouhomilově), provdanou dcerou Marií Kvapilovou (*1894) a sotva osmnáctidenní vnučkou <strong>Jitřenkou Kvapilovou</strong> (*28. 1. 1921 v Olomouci). Třetí domácnost tvořili výměnkáři Jakub a Anna Navrátilovi."
      ],
      links: [
        { label: "🏛️ Detail dědičné rychty (čp. 7)", action: "openHouseDetail('cp7')" },
        { label: "📜 Stabilní katastr 1834", action: "activateMapOverlayFromAtlas('cadastre1834')" }
      ]
    },
    {
      id: "kap-5",
      number: "V.",
      era: "1679–1947",
      category: "grunty",
      badge: "Rod Dvořáků • čp. 29",
      title: "Statek čp. 29 u Dvořáků: od roku 1679 přes pražského právníka po bludovský požár",
      summary: "Nejstarší gruntovní zápisy z roku 1679, pražský právník a doktor práv JUDr. Jan Dvořák (*1826), zábřežský farář P. Alois Dvořák a hrdinská smrt koláře Antonína Motyky.",
      paragraphs: [
        "Mezi šesti památkově chráněnými selskými grunty v Dlouhomilově zaujímá <button onclick=\"openHouseDetail('cp29')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">usedlost čp. 29 (Grunt u Dvořáků)</button> výjimečné místo šíří dochovaných pramenů. Zápisy v <strong>gruntovní knize velkostatku Zábřeh (inv. č. 164, fol. 191)</strong> vedou stopu zdejších hospodářů z rodu <strong>Dvořáků</strong> (<em>Dworzak</em>) až do roku <strong>1679</strong> (Jan Dvořák, od r. 1720 Pavel Dvořák).",
        "V nejstarším sčítacím archu z roku <strong>1857</strong> hospodařil na čp. 29 sedlák <button onclick=\"openPersonModal('p_johann_dvorak_1795')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">Johann Dvořák (*1795)</button>. Jeho starší syn <button onclick=\"openPersonModal('p_dr_jan_dvorak_1826')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">Jan Dvořák (*1826)</button> vystudoval práva na Karlo-Ferdinandově univerzitě v Praze a v archu má autenticky zapsáno: <em>„Jurist in Prag II“</em>. Později získal titul doktora práv (v operátu 1869 je již uveden jako <em>„Doktor“</em>). Grunt převzal mladší bratr <button onclick=\"openPersonModal('p_alois_dvorak_1830')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">Alois Dvořák (*1830)</button>, zatímco ze spřízněné větve vzešel zábřežský farář <strong>P. Alois Dvořák</strong>, který 15. července 1907 osobně oddal nového hospodáře <button onclick=\"openPersonModal('p_josef_dvorak_1877')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">Josefa Dvořáka (*1879)</button> s devatenáctiletou <strong>Amálií Motykovou</strong> (*1888 z Bludova).",
        "Nevěsta Amálie Motyková přinesla na čp. 29 silný příběh: její otec <strong>Antonín Motyka</strong>, kolář v Bludově čp. 113, zahynul hrdinskou smrtí, když se při velkém požáru bludovského zámku vrátil do plamenů, aby zachránil panský dobytek. Vdova Františka Motyková (*1844 v Chromeči) pak dožila na výměnku v čp. 29. Josef a Amálie Dvořákovi zde vychovali syna Josefa (*1913) a dceru <strong>Marii Dvořákovou (*15. 6. 1920)</strong>, která se provdala za magistra farmacie <strong>PhMr. Jaroslava Berku</strong> narozeného přesně v tentýž den a rok (15. 6. 1920)."
      ],
      links: [
        { label: "🏡 Statek čp. 29 (Grunt u Dvořáků)", action: "openHouseDetail('cp29')" },
        { label: "👤 Johann Dvořák (*1795)", action: "openPersonModal('p_johann_dvorak_1795')" },
        { label: "👤 Dr. Jan Dvořák (*1826)", action: "openPersonModal('p_dr_jan_dvorak_1826')" },
        { label: "👤 Alois Dvořák (*1830)", action: "openPersonModal('p_alois_dvorak_1830')" },
        { label: "👤 Josef Dvořák (*1879)", action: "openPersonModal('p_josef_dvorak_1877')" }
      ]
    },
    {
      id: "kap-6",
      number: "VI.",
      era: "1786–1949",
      category: "grunty",
      badge: "Rod Dvořáků & Kouřilů • čp. 22 & 24",
      title: "Grunt čp. 22 a čp. 24: sto šedesát let na jednom čísle a dvojitá svatba roku 1878",
      summary: "Jak dva bratři Dvořákovi pojali v jediný den za manželky dvě sestry Kouřilovy z čp. 24 pouhých třináct dní před smrtí jejich otce.",
      paragraphs: [
        "Památkově chráněná <button onclick=\"openHouseDetail('cp22')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">usedlost čp. 22 (u Dvořáků)</button> přináší nejpevnější důkaz o neměnnosti čísel popisných v Dlouhomilově: už roku <strong>1786</strong> se v Brníčku ženil jedenadvacetiletý selský syn <strong>Pavel Dvořák (*1763) „z Dlouhomilova č. 22“</strong> s Marinou Weinlichovou. Jejich syn <strong>Petr Dvořák (*1793)</strong> zemřel na čp. 22 jako výměnkář 9. prosince 1878 ve věku 84 let.",
        "Dne <strong>29. července 1878</strong> zažil kostel Všech svatých slavnou <strong>dvojitou svatbu</strong>: sedlák <strong>František Kouřil (*1819)</strong> ze sousedního památkového gruntu <button onclick=\"openHouseDetail('cp24')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">čp. 24</button>, těžce nemocný tuberkulózou (<em>úbytěmi</em>), provdal v jediný den obě své dcery za dva bratry Dvořákovy – dvacetiletá <strong>Anna Kouřilová (*1857)</strong> si vzala <button onclick=\"openPersonModal('p_josef_dvorak_1857')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">Josefa Dvořáka (*1857)</button> a její sestra <strong>Ludmila Kouřilová</strong> si vzala ženichova bratra <strong>Karla Dvořáka</strong>. Pouhých 13 dní po svatbě (11. srpna 1878) otec nevěst František Kouřil zemřel.",
        "Novomanželé Josef a Anna Dvořákovi hospodařili na čp. 22 přes šedesát let: Josef zemřel 10. července 1940 ve věku <strong>83 let</strong> a Anna roz. Kouřilová zemřela na čp. 22 dne 29. května 1949 ve věku <strong>91 let a 5 měsíců</strong>. Po nich grunt držel syn <button onclick=\"openPersonModal('p_karel_dvorak_1880')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">Karel Dvořák (*1880, †1942)</button>."
      ],
      links: [
        { label: "🏡 Usedlost čp. 22 (u Dvořáků)", action: "openHouseDetail('cp22')" },
        { label: "🏡 Usedlost čp. 24 (u Kouřilů)", action: "openHouseDetail('cp24')" },
        { label: "👤 Josef Dvořák (*1857, †1940)", action: "openPersonModal('p_josef_dvorak_1857')" },
        { label: "👤 Karel Dvořák (*1880, †1942)", action: "openPersonModal('p_karel_dvorak_1880')" }
      ]
    },
    {
      id: "kap-7",
      number: "VII.",
      era: "1815–1921",
      category: "grunty",
      badge: "Rod Jílků & Šafářů • čp. 10 & 6",
      title: "Grunty čp. 10 a čp. 6: láníci Jílkové a příchod Šafářů z Medelského",
      summary: "Půl století láníků Jílků (Gilek), odchod syna Vincence k vojsku roku 1869 a nástup rodu Šafářů z Medelského čp. 1.",
      paragraphs: [
        "Na selském gruntě <button onclick=\"openHouseDetail('cp10')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">čp. 10 (Grunt u Jílků a Šafářů)</button> v centrální části obce hospodařil od první poloviny 19. století láník <button onclick=\"openPersonModal('p_josef_jilek_1815')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">Josef Jílek (*1815, <em>Gilek</em>)</button> s manželkou Annou (*1814). Roku 1869 převzal statek syn <button onclick=\"openPersonModal('p_karel_jilek_1845')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">Karel Jílek (*1845)</button>, zatímco jeho devatenáctiletý bratr Vincenc (*1850) má v kolonce poznámek lakonický přípis: <em>„Beim Militär“</em> (u vojska).",
        "Kolem roku 1900 přichází na čp. 10 starobylý rod <strong>Šafářů (<em>Schafarz</em>)</strong> z osady Medelské čp. 1. V letech 1910 a 1921 zde hospodaří rolník <button onclick=\"openPersonModal('p_frantisek_safar_1874')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">František Šafář (*1874)</button> s manželkou Aloisií (*1881 z Klopiny), čtyřmi dětmi a výměnkářem <button onclick=\"openPersonModal('p_jan_safar_1859')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">Janem Šafářem (*1859 v Medelském)</button>.",
        "Na sousedním statku <button onclick=\"openHouseDetail('cp6')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">čp. 6</button> zase v roce 1921 pevně držela otěže hospodářství jednasedmdesátiletá vdova <strong>Marie Jílková (*1849 v Bratrušově)</strong>, které se statkem pomáhala pětičlenná rodina polního pomocníka Jana Šindlera (*1863 z Horní Olešné) a tři svobodní čeledíni."
      ],
      links: [
        { label: "🏡 Grunt čp. 10 (u Jílků a Šafářů)", action: "openHouseDetail('cp10')" },
        { label: "🏡 Usedlost čp. 6 (u Jílků)", action: "openHouseDetail('cp6')" },
        { label: "👤 František Šafář (*1874)", action: "openPersonModal('p_frantisek_safar_1874')" }
      ]
    },
    {
      id: "kap-8",
      number: "VIII.",
      era: "1860–1921",
      category: "remesla",
      badge: "Řemesla & průmysl",
      title: "Domkáři, kováři z čp. 110 a tkalci u Oberleithnerů",
      summary: "Venkovská kovárna Františka Berky v čp. 110, chalupa čp. 46 a každodenní docházení bělidlových dělníků a tkadlen do šumperských továren Eduarda Oberleithnera.",
      paragraphs: [
        "Od druhé poloviny 19. století vyrůstala na svazích a okrajích obce menší domkářská stavení, jejichž obyvatelé spojovali drobné hospodářství s řemeslem nebo prací v šumperských textilkách.",
        "V domě <button onclick=\"openHouseDetail('cp110')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">čp. 110</button> působil při sčítání roku 1910 venkovský kovář <strong>František Berka (*1866 z Leštiny)</strong> s manželkou Marií (*1864 z Hrabové) a synem, kovářským pomocníkem <strong>Janem Berkou (*1894)</strong>; roku 1921 zde žila sedmaosmdesátiletá výměnkářka <strong>Terezie Podhorná (*1834)</strong> a tkadlena Anna Podhorná (*1877). V památkově hodnotné chalupě <button onclick=\"openHouseDetail('cp46')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">čp. 46</button> zase hospodařil domkář <button onclick=\"openPersonModal('p_alois_dvorak_1840')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">Alois Dvořák (*1840)</button> se synem zedníkem <button onclick=\"openPersonModal('p_jan_dvorak_1873')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">Janem Dvořákem (*1873)</button>.",
        "Sčítací archy z roku 1921 odhalují, že největším průmyslovým zaměstnavatelem zdejších domkářů byla slavná firma <strong>„Eduard Oberleithner a synové, tkalcovna a bělidlo v Šumperku“</strong>. Denně tam docházeli například bělidlový dělník <button onclick=\"openPersonModal('p_jan_minar_1861')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">Jan Minář (*1861)</button>, bělič příze Josef Minář (*1886) a tkadlena Pavlína Minářová (*1894) z <button onclick=\"openHouseDetail('medelske_cp1')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">Medelského čp. 1</button> i jejich sousedé Josef a Marie Nejedlí z <button onclick=\"openHouseDetail('medelske_cp2')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">Medelského čp. 2</button>."
      ],
      links: [
        { label: "🔨 Stavení čp. 110 (u Berkových a Podhorných)", action: "openHouseDetail('cp110')" },
        { label: "🏡 Chalupa čp. 46", action: "openHouseDetail('cp46')" },
        { label: "👤 Jan Minář (*1861, Medelské čp. 1)", action: "openPersonModal('p_jan_minar_1861')" }
      ]
    },
    {
      id: "kap-9",
      number: "IX.",
      era: "15. 2. 1921",
      category: "moderni",
      badge: "Sčítání lidu 1921",
      title: "Únor 1921: zrcadlo obce na prahu Československa",
      summary: "Vlastnoruční podpisy na sčítacích arších, děkan P. František Kožušníček na faře, železničáři, učni a šrámy první světové války.",
      paragraphs: [
        "První československé sčítání lidu o půlnoci z <strong>15. na 16. února 1921</strong> nám umožňuje nahlédnout přímo do jednotlivých světnic. Na barokní faře <button onclick=\"openHouseDetail('cp2')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">čp. 2</button> tehdy působil děkan <strong>P. František Kožušníček (*1860 z Tovačova)</strong>, zatímco v <button onclick=\"openHouseDetail('cp4')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">čp. 4</button> žil zámečník <strong>Josef Vénos (*1877)</strong> pracující ve výtopně ČSD v Šumperku a podnájemnice <strong>Julie Janků (*1879)</strong> sloužící u poštovního úřadu v Brníčku.",
        "Ze statku <button onclick=\"openHouseDetail('cp5')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">čp. 5</button> (u rodiny Košových a výměnkářky Marie Krobotové) dojížděl desetiletý <strong>Josef Koš (*1911)</strong> jako student na reálku do Šumperka, zatímco jeho bratr František (*1904) se učil zámečníkem v Dolní Olešné.",
        "V <button onclick=\"openHouseDetail('cp8')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">čp. 8</button> jsou dodnes patrné rány první světové války: vedle vdovce Josefa Hoška (*1856) s němou dcerou Annou (*1900) zde žila válečná vdova <strong>Amálie Šafářová (*1885)</strong> se třemi malými dcerami a svobodný rolník, válečný <strong>invalida František Drlík (*1876)</strong>."
      ],
      links: [
        { label: "🏛️ Fara čp. 2 (děkan P. Kožušníček)", action: "openHouseDetail('cp2')" },
        { label: "🏡 Usedlost čp. 4 (rod Vénosů)", action: "openHouseDetail('cp4')" },
        { label: "🏡 Statek čp. 5 (rod Košů a Krobotů)", action: "openHouseDetail('cp5')" },
        { label: "🏡 Usedlost čp. 8 (rod Hošků a Šafářů)", action: "openHouseDetail('cp8')" }
      ]
    },
    {
      id: "kap-10",
      number: "X.",
      era: "1938–1960",
      category: "moderni",
      badge: "20. století",
      title: "Soužití na hranici a poválečná proměna (1938–1960)",
      summary: "Záběr Sudet roku 1938, válečná léta a poválečné dosídlení Benkova před spojením obou obcí roku 1960.",
      paragraphs: [
        "Podzim roku <strong>1938</strong> a Mnichovská dohoda začlenily celé údolí do říšské župy <em>Sudetenland</em>, jak dokládá dobová <button onclick=\"openMapCompareModal('sudety1940')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">mapa okresů Zábřeh a Šumperk z roku 1940</button>. Český Dlouhomilov s osadou Medelské si přesto udržel rodovou kontinuitu na selských gruntech i během válečných let, kdy na faře čp. 2 sloužil farář <strong>P. Mořic Špaček</strong>.",
        "Po roce <strong>1945</strong> prošel nejhlubší proměnou sousední německý <strong>Benkov</strong>. Po odsunu většiny německých rodin přicházeli do benkovských usedlostí noví osídlenci z českého vnitrozemí a Valašska (v matrice <em>Zá II 10</em> se v letech 1945–1949 objevují rody <em>Zbranků, Mičulků, Chrastinů, Sitařů, Rýznarů či Krejčích</em>). Roku <strong>1960</strong> se Benkov s Dlouhomilovem a Medelským administrativně spojil v jednu obec."
      ],
      links: [
        { label: "🗺️ Mapa okresů Zábřeh a Šumperk (1940)", action: "openMapCompareModal('sudety1940')" },
        { label: "🗺️ Topografická mapa ČSR (1937)", action: "activateMapOverlayFromAtlas('vojenske3_1937')" }
      ]
    }
  ],
  funFacts: [
    {
      id: "fact-1",
      icon: "🏠",
      tag: "Sto šedesát let v jednom domě",
      title: "163 let rodu Dvořáků na stejném čísle popisném (čp. 22)",
      text: "Když se roku 1786 v Brníčku ženil jednadvacetiletý Pavel Dvořák (*1763), zapsal farář jeho původ slovy „z Dlouhomilova č. 22“. O 163 let později, 29. května 1949, umírá v témže domě čp. 22 výměnkářka Anna Dvořáková roz. Kouřilová. Po více než pět generací se zde nezměnilo ani příjmení hospodáře, ani číslo na štítu statku.",
      actionLabel: "Otevřít grunt čp. 22",
      action: "openHouseDetail('cp22')"
    },
    {
      id: "fact-2",
      icon: "💍",
      tag: "Svatba na poslední chvíli",
      title: "Dvojitá svatba třináct dní před smrtí otce (29. 7. 1878)",
      text: "Dne 29. července 1878 stáli před oltářem kostela Všech svatých současně dva bratři a dvě sestry: Josef a Karel Dvořákovi si v jediné hodině brali Annu a Ludmilu Kouřilovy ze statku čp. 24. Otec obou nevěst, devětapadesátiletý sedlák František Kouřil, umíral na tuberkulózu (úbytě) a zemřel pouhých 13 dní po obřadu (11. 8. 1878).",
      actionLabel: "Otevřít grunt čp. 24",
      action: "openHouseDetail('cp24')"
    },
    {
      id: "fact-3",
      icon: "🎂",
      tag: "Neuvěřitelná shoda dat",
      title: "Manželé narození v tentýž den a rok (15. června 1920)",
      text: "Na statku čp. 29 se sedláku Josefu Dvořákovi a Amálii roz. Motykové narodila 15. června 1920 dcera Marie Dvořáková. Provdala se za magistra farmacie PhMr. Jaroslava Berku, který se narodil přesně v tentýž den a rok – 15. června 1920!",
      actionLabel: "Otevřít statek čp. 29",
      action: "openHouseDetail('cp29')"
    },
    {
      id: "fact-4",
      icon: "🕵️",
      tag: "Badatelská záhada",
      title: "Které „čp. 2“? Záhada fary a osady Medelské",
      text: "V matrice z let 1938–1948 mají sňatky a úmrtí rodiny Nejedlých (včetně svatby Bohumila Nejedlého 16. 10. 1948) zapsáno „čp. 2“. V Dlouhomilově je ale čp. 2 barokní fara! Záhadu rozluštil až sčítací arch z roku 1921: nešlo o faru, nýbrž o osadu Medelské čp. 2, která měla vlastní číselnou řadu.",
      actionLabel: "Otevřít Medelské čp. 2",
      action: "openHouseDetail('medelske_cp2')"
    },
    {
      id: "fact-5",
      icon: "⚖️",
      tag: "Společenský vzestup",
      title: "Selský syn z čp. 29 právníkem v Praze a doktorem práv (1857)",
      text: "Ve sčítacím archu statku čp. 29 z roku 1857 najdeme u syna hospodáře Jana Dvořáka (*1826) na tehdejší vesnické poměry mimořádný záznam: „Jurist in Prag II“ (právník v Praze). Jan vystudoval práva na pražské Karlo-Ferdinandově univerzitě a v operátu 1869 je již evidován s titulem Doktor (JUDr.).",
      actionLabel: "Profil Dr. Jana Dvořáka (*1826)",
      action: "openPersonModal('p_dr_jan_dvorak_1826')"
    },
    {
      id: "fact-6",
      icon: "🔥",
      tag: "Rodinná paměť",
      title: "Hrdinská smrt v plamenech bludovského zámku",
      text: "Výměnkářka Františka Motyková (*1844) na čp. 29 ovdověla za dramatických okolností: její muž Antonín Motyka, kolář v Bludově čp. 113, vběhl při velkém požáru bludovského zámku do hořících chlévů, aby zachránil panský dobytek, a v plamenech zahynul.",
      actionLabel: "Otevřít statek čp. 29",
      action: "openHouseDetail('cp29')"
    },
    {
      id: "fact-7",
      icon: "⏳",
      tag: "Dlouhověkost v údolí",
      title: "91 let Anny Dvořákové a 87 let Terezie Podhorné",
      text: "Navzdory tvrdé polní práci se řada zdejších starousedlíků dožila vysokého věku: výměnkář Petr Dvořák zemřel roku 1878 ve 84 letech, Josef Dvořák (*1857) ve 83 letech, jeho žena Anna roz. Kouřilová (*1857, †1949) v 91 letech a 5 měsících a Terezie Podhorná (*1834) z čp. 110 podepsala roku 1921 arch v 87 letech.",
      actionLabel: "Profil Josefa Dvořáka (*1857)",
      action: "openPersonModal('p_josef_dvorak_1857')"
    },
    {
      id: "fact-8",
      icon: "👶",
      tag: "Nejmladší obyvatelka 1921",
      title: "Osmnáctidenní Jitřenka a industriální učitelka na rychtě čp. 7",
      text: "V den sčítání lidu 15. února 1921 byla nejmladším člověkem v obci osmnáctidenní Jitřenka Kvapilová (*28. 1. 1921), žijící na rychtě čp. 7 v ženské domácnosti babičky Mathildy Ptáčkové a tety Elišky Ptáčkové, industriální učitelky ručních prací.",
      actionLabel: "Otevřít dědičnou rychtu čp. 7",
      action: "openHouseDetail('cp7')"
    },
    {
      id: "fact-9",
      icon: "🌾",
      tag: "Věrná služba",
      title: "Čeledín Jan Kamler (*1861, †1940) – celý život na jednom statku",
      text: "Svobodný čeledín Jan Kamler (*20. 2. 1861 v Rovensku) sloužil na statku čp. 29 u Dvořáků v roce 1921 a zůstal zde až do své smrti v roce 1940 (ve věku 79 let). Právě jeho úmrtní zápis v matrice Zá II 10 pomohl po sto letech přesně rozluštit jeho příjmení v hůře čitelném sčítacím archu.",
      actionLabel: "Otevřít statek čp. 29",
      action: "openHouseDetail('cp29')"
    },
    {
      id: "fact-10",
      icon: "🧵",
      tag: "Průmyslový Šumperk",
      title: "Běliči příze a tkadleny u Eduarda Oberleithnera",
      text: "Sčítání 1921 ukazuje, že osada Medelské i domkáři v Dlouhomilově byli úzce provázáni s textilním impériem „Eduard Oberleithner a synové v Šumperku“ – docházeli tam pěšky nebo vlakem z Brníčka bělidloví dělníci a tkadleny z rodů Minářů, Nejedlých i Podhorných.",
      actionLabel: "Otevřít Medelské čp. 1",
      action: "openHouseDetail('medelske_cp1')"
    }
  ]
};
