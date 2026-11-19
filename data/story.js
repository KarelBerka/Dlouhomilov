// ============================================================================
// PŘÍBĚH DLOUHOMILOVA, MEDELSKÉHO A BENKOVA & ZAJÍMAVOSTI Z PRAMENŮ
// Zpracováno v duchu vyprávěcí metodiky projektů Rodokmeny a Genealogie
// ============================================================================

const storyData = {
  title: "Příběh Dlouhomilova, Medelského a Benkova",
  subtitle: "Od středověké lesní lánové vsi pod hradem Brníčkem přes barokní farnost, selské grunty a osadu Medelské až po soužití s německým Benkovem a proměny 20. století (1356–2006).",
  stats: [
    { label: "První písemná zmínka", value: "1356", detail: "ZDO I, č. 482 • Vladykové ze vsi" },
    { label: "Historické části", value: "3 sídla", detail: "Dlouhomilov • Medelské • Benkov" },
    { label: "Kontinuita čp. 22 & 29", value: "1679–1949", detail: "Rod Dvořáků přes 270 let" },
    { label: "Zpracované matriky & archy", value: "928 + 4 712", detail: "Matriční zápisy a sčítací záznamy" }
  ],
  chapters: [
    {
      id: "kap-0",
      number: "I.",
      era: "1269–1602",
      category: "krajina",
      badge: "Dlúhomil, družina Benedy & vladykové",
      title: "Zakladatel Dlúhomil z Hané, družina Benedy z Dubicka, tři dvorce a zrod dědičné rychty",
      image: "assets/comic/story_kap_00.jpg?v=20261117",
      imageCaption: "Ilustrace ke kapitole I (1269–1602): Udělení lokační listiny na Olomouckém hradě a odchod kolonizační výpravy Litovelskou branou do podhůří.",
      secondaryImage: "assets/comic/story_kolonizace_mapa.jpg?v=20261117",
      secondaryImageCaption: "Komiksová mapa kolonizace (1266–1356): Hvozd, bažiny u Brníčka (stč. brnie = lesní bažina, nad níž Ctibor Morava vystavěl hrad Brníčko až v 30.–40. letech 14. století) a suché směry osídlování – přes hřeben Bukovické hory z Kolšova, Sluhoňova a Dlouhomilova k Olešné a Frankštátu, přes Rohli a křižovatku U Cikánského buku k Benkovu a z Úsova na Hrabišín.",
      summary: "Odkud přišel zakladatel Dlúhomil v okně let 1270–1277, jak čtyřstupňová hierarchie kolem vrchního lovčího Benedy z Dubicka (velmož – zeman – druho – sluhoň) otiskla jména Benkov, Dlouhomilov a Sluhoňov do krajiny a co odhaluje všech 32 vkladů ZDO (1356–1447).",
      paragraphs: [
        "Lesní lánový půdorys údolí i jazykovědný a diplomatický rozbor pramenů dokládají, že Dlouhomilov (<em>Dluhomilow</em>) vznikl v <strong>poslední třetině 13. století – v primárním okně let 1270–1277 (nejpozději 1286–1295, po válečném zmrazení regionu v letech 1278–1285)</strong>. Staročeské dvoučlenné jméno zakladatele <strong>Dlúhomila</strong> (<em>„dlouho/trvale milý“</em>, nar. cca 1240–1265, † cca 1295–1320) bylo ve 13. století výsadním stavovským jménem domácí šlechty a zemanů; jeho středomoravský (hanácký) vývoj <em>Dlúhomilov → Dlóhomilov → Dlómilov</em> vedl až v raném novověku k německému exonymu <em>Lomigsdorf</em> a střídání tvarů <em>dvuor Dlúhomiluov / za dvuor v Dluhomile</em> ukazuje, že zárodkem vsi byl jeho svobodný zemanský dvůr. Olomoucká listina z roku <strong>1269</strong> (<em>CDM IV, s. 36 / RBM II, č. 672</em>; spolu s mírovským lokačním privilegiem z 26. 5. 1266, <em>RBM II, č. 517</em>, a mohelnickou listinou z 26. 11. 1279, <em>CDM IV, s. 232</em>) zachycuje bok po boku kolonizátory našeho podhůří z <strong>jižní a střední Hané</strong>: <strong>Všebora a Hrabiše I. z Úsova</strong> z rodu ze Švábenic (držitele Úsova pouze v úzkém okně <em>1269–1274/1275</em>, <em>CDM IV, s. 178</em>; srov. <em>Hrabišín</em>), bratrance <strong>Viléma z Náměště a Kojatu z Drnovic</strong> (srov. <em>Kojišov = Kolšov</em>, ležící západně za hřbetem Bukovické hory, odkud vedl příčný kolonizační pás přes Studénky a Sluhoňov do Dlouhomilova ještě před vznikem hradu Brníčka), lokátora <strong>Sudka</strong> (<em>Sudkov</em>) a královského vrchního lovčího <strong>Benedu z Dubicka se syny</strong> – právě v jejich hanáckém zázemí (mezi Švábenicemi, Ivanovicemi na Hané, Soběbřichami a Olomoucí) se jméno <em>Dlúhomil</em> dědilo. Výsady lokátora – svobodné lány, šenk, řeznictví, kovárna a mlýn – se v novověku promítly do areálu <button onclick=\"openHouseDetail('cp7')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">dědičné rychty čp. 7</button> a <button onclick=\"openHouseDetail('cp3')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">mlýna čp. 3</button>.",
        "Úplná excerpce listin <em>CDM II–VII a XV</em> přitom odhalila jak samotný životopis <strong>Benedy z Dubicka (1226–1269+)</strong>, tak <strong>čtyřstupňovou společensko-právní hierarchii v jeho bezprostředním okolí</strong>, která se přímo otiskla do jmen sousedních vsí (<a href=\"docs/puvod_dluhomila_a_zdo_1356_1447.md\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-amber-800 font-bold underline hover:text-amber-950\">podrobná studie ↗</a>). Syn Ctiborův Beneda doložený od r. <strong>1226</strong> působil jako královský vrchní lovčí (<em>magister venatorum</em>, česky r. 1253/1256 <em>Lowci / Lowcki</em>) a výslovně též jako královský <strong>vytyčovatel zemských hranic a přidělovatel lesních újezdů ke kolonizaci</strong> (<em>„perambulator terrarum et assignator simul et metarum distinctor“</em>, r. <strong>1239</strong>, <em>CDM II, s. 361–362</em>); držel raně gotickou tvrz v <strong>Dubicku</strong>, hanáckou ves <strong>Krčmaň</strong> u Olomouce (darovanou 1259 a 1266 pod vlastní pečetí olomouckému dómu za zesnulého syna, kanovníka Markvarta) i <strong>šlechtický dům přímo na Olomouckém hradě</strong> (1267, <em>CDM III, s. 391</em>) a zanechal syny <em>Předbora, Viléma, Mikuláše</em> (spoludržitele otaslavické a dubické větve; srov. papežskou bulu z 31. 3. 1297 ve <em>Velehradském kodexu</em>, <em>MZA Brno E 7, sign. G 191, fol. 107v–108r</em> žalující vedle Mikuláše i záhadného <em>Lubomína z Dubicka</em>) a <em>Přeška</em>, než Benedův pravnuk <em>Ctibor Morava</em> vystavěl ve 30.–40. letech 14. století nad zamokřenou kotlinou (<em>stč. brnie = lesní bažina</em>) <strong>hrad Brníčko</strong>. Okruh kolem Benedy se členil na čtyři zřetelná patra: (<strong>1. Velmoži – <em>domini</em>:</strong> <em>Beneda z Dubicka</em>, <em>Hrabiše z Úsova</em>, <em>Kojata z Drnovic</em> → <em>Hrabišín</em>, <em>Kolšov</em> a náhorní <strong>Benkov</strong> (<em>Benkow</em> od téhož kořene <em>Benek/Beneda</em>, vysazený na slunné plošině 440–470 m n. m. po suchém hřebeni z Dubicka přes Rohli a středověkou lesní křižovatku <em>U Cikánského buku</em> – trojmezí lesů <em>Silua Wenkowsky</em>, <em>Silua nigra</em> a <em>Žďár</em> v <em>ZDO X, č. 560</em> – patrně souběžně již koncem 13. století, jen skrytý v neděleném panství až do r. 1385); <strong>2. Plně urození zemané v družině / příbuzní – <em>nobiles minores</em>:</strong> muži se stavovskými dvoučlennými jmény držící <strong>svobodný deskový alod</strong> (<em>Curia allodialis</em>) → zakladatel <strong>Dlúhomil (Dlouhomilov)</strong>, jehož potomci se píší <em>z Dlouhomilova</em> a v letech 1356–1397 nesou stejných pět rodových jmen jako dubicko-otaslavičtí páni (<em>Ondřej, Pešek/Přešek, Vilém, Ctibor, Mikšík</em>); <strong>3. Osobně svobodní družiníci – <em>druho</em>:</strong> ozbrojení klienti na prahu nižší šlechty vymezení v moravských statutech let 1229 a 1237 (<em>„nobilis vir, et non druho“</em>) a doložení přímo u Benedy r. <strong>1263</strong> jako <em><strong>Cunratecz, druho domini Benede</strong></em> (<em>CDM III, s. 353</em>), z jejichž řad vyrůstali drobní panoši, manové a <strong>dědiční rychtáři či fojtové</strong>; <strong>4. Vrchnostenští služební lidé – <em>sluhoň / zluhones</em>:</strong> neurození lovci a lesní hlídači z listin biskupa Bruna z let <strong>1263–1272</strong> (<em>„de allodio tuo, de zluhonibus et de manso iudicis nichil dabis“</em>) → sousední <strong>Sluhoňov</strong> (doložen 1349, <em>Sluchunowek</em> 1412, jen šest poplatných usedlostí bez svobodného dvora či vladyckého predikátu).",
        "<div class=\"my-4 p-4 sm:p-5 rounded-2xl bg-amber-50/70 border border-amber-200/90 shadow-xs space-y-3\"><div class=\"grid grid-cols-1 md:grid-cols-12 gap-4 items-center\"><figure class=\"md:col-span-5 rounded-xl overflow-hidden border border-amber-300 bg-stone-900 shadow-xs group\"><div class=\"relative cursor-pointer overflow-hidden\" onclick=\"openArchiveViewer('assets/comic/rekonstrukce_dluhomil_1275.jpg', 'Rekonstrukce zakladatele Dlúhomila (kol. 1275)', 'Antropologická, oděvní a heraldická rekonstrukce hanáckého zemana Dlúhomila při vyměřování údolí Loučky kol. r. 1275 se svisle půleným mřížovaným štítem rodu z Dubicka a Otaslavic (Sedláček, ČMH II, s. 310).')\"><img src=\"assets/comic/rekonstrukce_dluhomil_1275.jpg\" alt=\"Rekonstrukce zakladatele Dlúhomila kol. 1275\" loading=\"lazy\" class=\"w-full h-auto object-cover aspect-[4/3] transition-transform duration-300 group-hover:scale-[1.03]\"><span class=\"absolute bottom-2 right-2 px-2 py-0.5 rounded-md bg-stone-900/85 text-amber-100 text-[10px] font-sans font-bold\">🔍 Zvětšit rekonstrukci</span></div><figcaption class=\"px-2.5 py-1.5 text-[11px] font-sans text-amber-950 bg-amber-100/80 border-t border-amber-200\">🛡️ Vizuální rekonstrukce zemana <strong>Dlúhomila (kol. 1275)</strong> při vyměřování <em>dvora Dlúhomilova</em> u potoka Loučky</figcaption></figure><div class=\"md:col-span-7 text-sm sm:text-[15px] text-slate-800 space-y-2 leading-relaxed\"><h4 class=\"font-heading font-extrabold text-amber-950 text-base\">Jak mohl zakladatel Dlúhomil kolem roku 1275 vypadat?</h4><p>Ze 13. ani 14. století se po <strong>Benedovi z Dubicka</strong>, <strong>Ctiboru Moravovi</strong> ani členech jejich rodu nedochoval realistický portrét či hrob (individuální portrét přinesla až parléřovská huť kol. r. 1375 a hrady v Otaslavicích i Brníčku zanikly v letech 1423 a 1471). Podobu hanáckého zemana ve věku <code>25–40 let</code> (s vyšší jezdeckou postavou <code>~172–178 cm</code> typickou pro masitou stravou živenou nižší šlechtu) však lze věrně odvodit z dobové ikonografie dvora Přemysla Otakara II., archeologických nálezů z nedalekého hradu <strong>Hoštejna († 1286)</strong> a sfragistiky Benedova rodu:</p><ul class=\"list-disc pl-5 space-y-1 text-xs sm:text-sm\"><li><strong>Hladce oholená tvář a účes:</strong> Rytířská móda let <code>1260–1295</code> velela aktivním zemanům hladce oholenou tvář (nikoli plnovous!) a polodlouhý sestřih po šíji s rovnou ofinou.</li><li><strong>Oděv a zbroj (horizont Hoštejna † 1286):</strong> Vlněná suknice (<em>cotte</em>) barvená mořenou, kroužková kapuce (<em>brň</em> – plátová zbroj ještě neexistovala), plášť podšitý kožešinou sepnutý na pravém rameni (pro volnou pravici s měřickým provazcem, kolíkem a jednoručním mečem s terčovou hlavicí) a škorně s <strong>bodcovými ostruhami</strong>.</li><li><strong>Erb dubicko-otaslavického rodu (<em>Sedláček, ČMH II, s. 310</em>):</strong> Voskové pečeti Benedových potomků z Otaslavic a Brníčka (<em>Vojtěch 1353, Mikuláš a Jimram 1367, Mikeš Morava 1388–1414, Ctibor 1450</em>) nesou <strong>svisle půlený trojhranný štít s jednou polovinou kosodélně mřížovanou</strong> – ten visí u Dlúhomilova sedla, zatímco v pozadí osadníci klučí les a vztyčují <em>dvuor Dlúhomiluov</em>.</li></ul></div></div></div>",
        "Když obec roku <strong>1356</strong> poprvé vstupuje do olomoucké řady <strong>Moravských zemských desek</strong> (<em>ZDO I, č. 482 a 484</em>), je původní Dlúhomilův statek po dvou až třech generacích již rozdělen na <strong>tři svobodné vladycké dvorce</strong> a v celé osadě žije odhadem <strong>25–30 samostatných hospodářství (cca 130–180 stálých obyvatel)</strong>. <strong>Ondřej z Dlouhomilova</strong> tehdy prodal <strong>Arnoldovi z Dlouhomilova</strong> za <strong>60 hřiven grošů</strong> první dvůr (<em>curia</em>), šest lánů a jednu krčmu (<em>taberna</em>), zatímco <strong>Pešek z Dlouhomilova</strong> prodal za 60 hřiven <strong>Bohuňkovi a Dětmarovi z Kolšova</strong> druhý dvůr, hřivnu platu a <strong>vodní mlýn</strong>; roku 1358 zapsal <strong>Bohuněk z Dlouhomilova</strong> své manželce Gertrudě 100 hřiven věna na dvoře se dvěma poplatnými lány a lese v Kolšově (<em>č. 493</em>). Přítomnost hned <strong>dvou až tří krčem</strong> (<em>duas tabernas</em> r. 1368 v <em>č. 1124</em> + krčma na díle Petra Šišmy r. 1371 v <em>ZDO II, č. 44</em>) odráží jak právo každého vladyky mít vlastní pivní výčep s pekárnou a jatkami (<em>propinační přímus</em>), tak provoz na stezce z Dubicka a Kolšova k železnorudným dolům na Hrabišíně.",
        "Úplná excerpce všech <strong>32 vkladů v ZDO I–X (1356–1447)</strong> odhalila jak samostatnou linii <strong>třetího dvorce se čtvrtlánem</strong> – od vdovy <em>Čáslavy z Dlouhomilova</em> (1365, <em>č. 859–860</em>) přes <em>Viléma</em> (1368, <em>č. 1028</em>), <em>Ondřeje a Hyluše</em> a <em>Ondřejka Chylce</em> k <em>Martinovi</em> a <em>Ctiborovi z Dlouhomilova</em> (1371–1378, <em>ZDO II, č. 23; III, č. 435</em>) – tak přechod hlavního alodního dvora: roku 1368 prodal <strong>Bohuněk z Kolšova</strong> <strong>Vokovi [ze Sovince] a jeho bratřím</strong> dvůr, pět lánů, <strong>dvě krčmy</strong>, devět chalup (<em>curticulae</em>), půldruhého čtvrtce, pět zahrad, mlýn a les (<em>ZDO I, č. 1124</em>), od Voka přešel dvůr na bratry <strong>Domana, Svatobora a Výška ze Závořic řečené Ganzary</strong> a roku <strong>1398</strong> (<em>ZDO VI, č. 879</em>) prodal <strong>Doman ze Závořic</strong> hlavní alodní dvůr přímo <strong>Pročkovi z Bouzova (Vildenberka)</strong>. Roku <strong>1385</strong> (<em>ZDO IV, č. 543</em>) pak <strong>Mikuláš z Brníčka řečený Morava</strong> zapsal manželce Markétě věno 24 kop grošů mj. na sousedním <strong>Benkově (<em>Benkow</em>) a Medelském (<em>Medilsk</em>)</strong> (srov. <button onclick=\"openHouseDetail('medelske_cp3')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">usedlost čp. 3 v Medelském</button>).",
        "Tříšť drobných vladyckých statků scelil v polovině 15. století vzestup rodu <strong>Tunklů z Brníčka a Drahanovic</strong> ve dvou přesně doložených krocích (<em>Sitta 2018</em>): první polovinu vsi vyženil roku <strong>1436</strong> Jan Tunkl z Eichholze s Eliškou z Lesnice, vložil ji roku <strong>1437</strong> do desek (<em>ZDO X, č. 311, 348</em>) a roku <strong>1446</strong> ji odkoupil Jan st. Tunkl z Brníčka (<em>č. 449</em>); roku <strong>1447</strong> pak získal od poručníků po zemřelém Pročkovi z Vildenberka druhou polovinu vsi se svobodným dvorem (<em>č. 566</em>) a zároveň od poručníků Jana ze Šumvaldu hrad Brníčko s vesnicemi <strong>Medelské</strong> (včetně <em>lesa u Medelského</em>) a <strong>Benkov</strong> (<em>č. 560</em>). Spor s Kateřinou z Vildenberka a ručitelem Výškem ze Stříteže o <em>dvuor Dluhomiluov</em> se táhl v půhonných knihách ještě v letech 1463–1466 (<em>KP IV/2, č. 525, 543, 866</em>; při bratrském dělení r. <strong>1466</strong> připadlo celé údolí Janu ml. Tunklovi). Roku <strong>1490</strong> zapsaly desky hrad Brníčko s Dlouhomilovem, Medelským a Venkovem již <strong>„se všemi rychtami zákupními“</strong> Jiříku Tunklovi staršímu (<em>ZDO XIII, č. 84</em>), avšak tvrdá tunklovská robota vyvolala v roce <strong>1492</strong> doložené útěky poddaných – roku 1492 žaloval Jiřík Tunkl st. Znatu ze Zvole pro neoprávněné přijetí <strong>Jana rataje Števíka</strong> (<em>KP VI, č. 1775</em>) a syn Jindřich Tunkl poháněl Jana z Dalčic o uprchlého <strong>pochopa (= drába) Duchka z Dlúhomilova</strong> zadrženého na mlýně u Šilperka (<em>KP VI, č. 1962</em>). Od zadluženého Jindřicha Tunkla přešlo panství roku <strong>1510</strong> (originální rukopis <em>MZA A 3 Kniha XVII, sn. 10/32</em> uvádí <em>„wes dluhomilow s kaplu ... trzy lany w olessnem, wes medelske, wes wenkow“</em>, což opravuje zjednodušení novodobých edic spojujících tři lány s Hrabišínem) na Mikuláše ml. Trčku z Lípy a dne <strong>24. 6. 1513</strong> (<em>sn. 22/32</em>) na <strong>pány z Boskovic</strong> (při <em>hradu Brníčku zbořeném</em>), od nichž je roku <strong>1589</strong> po smrti <strong>Jana z Boskovic</strong> zdědila sestra Kunka a její syn <strong>Ladislav Velen ze Žerotína</strong>. Ze starých dvorů v údolí mezitím vyrostli osvobození <strong>sedláci – dvořáci</strong> (<em>Befreytte Bauern</em>), stejně jako severní osada Medelské (česky 1605–1657 též <em>Tři lány</em>, něm. <em>Dreihöfen</em>). V <strong>urbáři panství Zábřeh z roku 1585</strong> (<em>URB00015585</em>) je zachyceno všech <strong>22 usedlíků</strong> v Dlouhomilově (str. 82–84; mj. <em>Vokšan, Vlček, Vachutka, Sládek, Pospíšil, Horný Němec</em>), <strong>8 držitelů</strong> na 5 položkách včetně spoludržeb v Medelském (str. 80–81; <em>Valauch, Vítek, Hrabovský &amp; Šumerda, Horníček &amp; Stejskal, Kouřil &amp; Vykoukal</em>) i <strong>10 usedlíků</strong> v Benkově (<em>Venkov</em>, str. 47) v čele s fojtem <em>Mikulášem</em> – hotová jazyková hranice již před rokem 1620. Navazují pozemkové knihy (Dlouhomilov od r. <strong>1584</strong>, <em>inv. č. 164</em>; Benkov od r. <strong>1617</strong>) a listinná zmínka <strong>dědičné rychty</strong> roku <strong>1602</strong> (<button onclick=\"openHouseDetail('cp7')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">čp. 7</button>, v Lánovém rejstříku 1657/1677 <em>Jíra Blahařek(?)</em> a <em>Ilia Zaoralný</em>) i grunty typu <button onclick=\"openHouseDetail('cp29')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">čp. 29</button> či <button onclick=\"openHouseDetail('benkov_cp5')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">benkovského čp. 5</button>."
      ],
      links: [
        { label: "🧭 Komiksová mapa kolonizace", action: "openArchiveViewer('assets/comic/story_kolonizace_mapa.jpg?v=20261117', 'Směry středověké kolonizace okolí Dlouhomilova', 'Hvozd, bažiny u Brníčka (Brně) a hlavní směry kolonizace: z Dubicka přes Kolšov, Sluhoňov, Dlouhomilov a Olešnou k Frankštátu i přes Rohli k Benkovu; z Úsova na Hrabišín (mladší osady Strupšín a Nedvězí).')" },
        { label: "🍺 Dědičná rychta (čp. 7)", action: "openHouseDetail('cp7')" },
        { label: "⚙️ Mlýn pod hradem (čp. 3)", action: "openHouseDetail('cp3')" },
        { label: "🗺️ Stabilní katastr (1834)", action: "activateMapOverlayFromAtlas('cadastre1834')" },
        { label: "📖 Slovníček: vladyka, druho & sluhoň", action: "window.location.href='reference.html#dictionary-container'" },
        { label: "🛡️ Rekonstrukce Dlúhomila (1275)", action: "openArchiveViewer('assets/comic/rekonstrukce_dluhomil_1275.jpg', 'Rekonstrukce zakladatele Dlúhomila (kol. 1275)', 'Antropologická, oděvní a heraldická rekonstrukce hanáckého zemana Dlúhomila při vyměřování údolí Loučky kol. r. 1275 se svisle půleným mřížovaným štítem rodu z Dubicka a Otaslavic (Sedláček, ČMH II, s. 310).')" }
      ]
    },
    {
      id: "kap-1",
      number: "II.",
      era: "1510–1793",
      category: "krajina",
      badge: "Krajina & farnost",
      title: "Údolí pod Brníčkem, Aretinova mapa a putování farnosti",
      image: "assets/comic/story_kap_01.jpg",
      imageCaption: "Ilustrace ke kapitole II (1510–1793): Kartograf Pavel Aretin nad mapou zábřežského panství a kostel Všech svatých v údolí.",
      summary: "Jak se ves pod brníčským a zábřežským panstvím zrcadlí na nejstarší rukopisné mapě z roku 1623 a proč museli předkové za křty a svatbami putovat přes Dubicko, Zábřeh, Lesnici a Rohli.",
      paragraphs: [
        "Pod správou pánů z Boskovic a později Žerotínů se Dlouhomilov (<em>Lomigsdorf</em>) ustálil jako rozlehlá horská lánová obec v sevřeném údolí pod Bukovickou horou (526 m n. m.) a zříceninou hradu Brníčka. Pobělohorský <strong>Lánový rejstřík</strong> zábřežského panství uzavřený <strong>13. října 1677</strong> (<em>MZA Brno, fond D 1, sign. 141, fol. 76r–77v</em>) a porovnaný s první vizitací z let <strong>1656–1657</strong> zde zachytil plnou osedlost <strong>27 hospodářů bez jediné poustky</strong> (<code>0</code> <em>Ödungen</em>) na <strong>830 měřicích</strong> orné půdy (<code>6</code> lánů <code>3 1/4</code> osminy) – v čele s dědičným rychtářem <em>Iliou Zaoralným</em> (90 měřic), velkými grunty rodů <em>Dvořák</em> (<em>Hanß</em> po <em>Pavlovi</em>), <em>Vlček, Vokšan, Jílek</em> či <em>Vachutka</em> – a s mlýnským náhonem (<button onclick=\"openHouseDetail('cp3')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">čp. 3</button>). Následná <strong>Rektifikační akta (1749–1756, MZA D 2)</strong> a <strong>Dominikální fase (1750, MZA D 3)</strong> prokázaly, že v údolí neležel panský dvůr, osada <strong>Medelské</strong> (<em>Dreihöfen</em>) přežívala v pomístních tratích dlouhomilovských sedláků (<em>bey Medelsker grundt</em>, <em>u Medla gruntes mihle</em>) až do tereziánského číslování 1770 a zdejší <em>Befreytte Bauern</em> vykupovali robotu penězi při zimním předení lněné příze pro trhy v Šumperku; v 19. století krajinu poznamenala i drobná těžba železné rudy.",
        "Zcela mimořádným obrazovým pramenem je dochovaná rukopisná <strong>Aretinova mapa zábřežského panství z roku 1623</strong> (ZAO Olomouc, fond <em>Velkostatek Zábřeh, NAD 1549, inv. č. 831, mapa č. 1</em> – prohlášena archivní kulturní památkou <strong>AKP ČR č. 81</strong>). Barevný rukopis o rozměrech <strong>137 × 98 cm</strong> v měřítku cca <strong>1 : 20 800</strong> vyhotovil kartograf <strong>Pavel Aretin z Ehrenfeldu</strong> při konfiskaci panství Ladislava Velena ze Žerotína pro Karla I. z Lichtenštejna; jako <strong>nejstarší dochovaná velkostatková mapa v českých zemích</strong> zachycuje vedle vsí pod Brníčkem i tunklovskou soustavu velkých rybníků (Závořický 107 ha, Dubický 82,5 ha). Tištěné mapy Moravy – <strong>Müllerova (1716)</strong> a <strong>Wielandova (1726)</strong> – pak zobrazují sesterský <em>Lomigsdorf / Dlohomilow</em> a výše položený <em>Bentke</em> (Benkov), zatímco <strong>I. vojenské mapování (1764–1768)</strong> kreslí kostel, grunty i cestu do <strong>Medelského</strong> (<em>Dreihofen</em>).",
        "Duchovní dějiny údolí dokládají pozoruhodné <strong>putování dlouhomilovské farnosti</strong>: původní kaple stávala v Dlouhomilově již kolem roku <strong>1510</strong> a obec je jako duchovní středisko zmiňována roku <strong>1585</strong>. Nejstarší dochované křty, sňatky a pohřby obyvatel údolí jsou však uloženy v matrikách sousedních farností – nejprve <strong>Dubicko</strong> (<em>Zá IV 1</em> z let <strong>1617–1694</strong>, mj. sňatky přímo <em>w Dlauhomilowie</em> r. 1653 a svědectvím <em>Pavla Dvořáka a syna Hanße</em> r. 1654, a <em>Zá IV 2</em> s vyčleněným oddílem křtů Dlouhomilova, Medelského a Benkova <strong>1695–1722</strong> na str. <code>948–1095</code>), ojediněle <strong>Zábřeh</strong> (<em>Zá I 1, inv. č. 8332</em>, 1649–1692), <strong>Brníčko</strong> (<em>Zá VI 5</em> od r. 1653, kde se konávaly sňatky nevěst z Brníčka vč. svatby Pavla Dvořáka r. 1786) či <strong>Lesnice</strong> (inv. č. 8399 od r. 1676/1688) a již od roku <strong>1720–1785/1786</strong> obnovená farnost <strong>Rohle</strong> (<em>Zá VIII 1, 6, 10, 14, 15</em>). Po stavbě barokního chrámu zahájené v červnu <strong>1707</strong> (na nějž se dle účtů vypálilo <strong>64 800 cihel</strong>) vznikl v letech <strong>1767–1770</strong> nynější pozdně barokní <button onclick=\"openHouseDetail('cp1')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">kostel Všech svatých (čp. 1)</button> (částečně vybavený ze zrušeného šumperského klášterního kostela; r. 1864 rozšířen o presbytář). Roku <strong>1785/1786</strong> vznikla samostatná lokálie s <button onclick=\"openHouseDetail('cp2')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">farou (čp. 2)</button> (do r. 1986 zde sloužilo 26 duchovních správců a z farnosti vzešlo <strong>7 kněží-rodáků</strong>) a matrikami <em>Zá II</em> (pro Dlouhomilov s Medelským a obě Olešné, zatímco <strong>Benkov</strong> zůstal u Rohle až do r. <strong>1932</strong>), a roku <strong>1793</strong> první budova <button onclick=\"openHouseDetail('cp12')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">školy (čp. 12)</button>. Na přelomu 19. a 20. století zde působil kněz a spisovatel <strong>P. František Saleský Kužela (Adam Chlumecký, 1891–1907)</strong>, jenž roku <strong>1897</strong> založil <em>Spolek sv. Rocha</em>, roku <strong>1899</strong> otevřel česky psanou <em>Pamětní knihu farnosti dlouhoveské</em> a přímo do Dlouhomilova obdržel blahopřejný list od <strong>Émila Zoly</strong>."
      ],
      links: [
        { label: "⛪ Kostel Všech svatých (čp. 1)", action: "openHouseDetail('cp1')" },
        { label: "🏛️ Barokní fara (čp. 2)", action: "openHouseDetail('cp2')" },
        { label: "🗺️ I. vojenské mapování (1764)", action: "activateMapOverlayFromAtlas('vojenske1_1764')" }
      ]
    },
    {
      id: "kap-2",
      number: "III.",
      era: "1770–1949",
      category: "krajina",
      badge: "Tři sídla",
      title: "Tři světy v jednom údolí: Dlouhomilov, Medelské a Benkov",
      image: "assets/comic/story_kap_02.jpg",
      imageCaption: "Ilustrace ke kapitole III (1770–1949): Český Dlouhomilov v údolí, osada Tři Dvory (Medelské) a horský Benkov s kapličkou.",
      summary: "Česká selská vesnice v údolí, severní osada Tři Dvory (Medelské) s vlastní číselnou řadou a horská německá obec Benkov v jednom katastru.",
      paragraphs: [
        "V matričních knihách farností <strong>Rohle</strong> (Benkov do r. 1932) a <strong>Dlouhomilov</strong> (<em>Zá II 1</em> až <em>Zá II 10</em>, 1786–1949) i ve sčítacích operátech se neustále prolínají osudy <strong>tří odlišných sídel</strong>, z nichž každé mělo vlastní číslování domů a vlastní krajinný i jazykový ráz:",
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
      number: "IV.",
      era: "1749–2004",
      category: "krajina",
      badge: "Heraldika & symboly",
      title: "Znak obce: rýče, zlaté krojidlo a dva jabloňové květy",
      image: "assets/comic/story_kap_03.jpg",
      imageCaption: "Ilustrace ke kapitole IV (1749–2004): Obecní pečetidlo a znak se zkříženými rýči, krojidlem a jabloňovými květy v jarním sadu.",
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
      number: "V.",
      era: "1804–1921",
      category: "grunty",
      badge: "Správa obce",
      title: "Dědičná rychta čp. 7: správní srdce obce",
      image: "assets/comic/story_kap_04.jpg",
      imageCaption: "Ilustrace ke kapitole V (1804–1921): Rychtář s obecní truhlicí, učitelka Eliška Ptáčková a osmnáctidenní Jitřenka před rychtou čp. 7.",
      summary: "Od rychtářského rodu Mertů přes Kroboty a Pavlíky až po tři domácnosti, industriální učitelku a osmnáctidenní Jitřenku v únoru 1921.",
      paragraphs: [
        "Nejvýstavnějším světským stavením v obci byla od 18. století <button onclick=\"openHouseDetail('cp7')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">bývalá dědičná rychta (čp. 7)</button> na východní straně návsi – mohutný patrový dům s barokním jádrem a hospodářským dvorem (kulturní památka ÚSKP 51795/9-103). Rychtář opatroval obecní truhlici, pečetidlo, dohlížel na robotní povinnosti a urovnával sousedské spory.",
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
      number: "VI.",
      era: "1679–1947",
      category: "grunty",
      badge: "Rod Dvořáků • čp. 29",
      title: "Statek čp. 29 u Dvořáků: od roku 1679 přes pražského právníka po bludovský požár",
      image: "assets/comic/story_kap_05.jpg",
      imageCaption: "Ilustrace ke kapitole VI (1679–1947): Sedlák s gruntovní knihou, pražský právník JUDr. Jan Dvořák a farář P. Alois Dvořák před statkem čp. 29 s koňmi ve vratech.",
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
      number: "VII.",
      era: "1786–1949",
      category: "grunty",
      badge: "Rod Dvořáků & Kouřilů • čp. 22 & 24",
      title: "Grunt čp. 22 a čp. 24: sto šedesát let na jednom čísle a dvojitá svatba roku 1878",
      image: "assets/comic/story_kap_06.jpg",
      imageCaption: "Ilustrace ke kapitole VII (1786–1949): Dvojitá svatba bratří Dvořáků a sester Kouřilových před podloubím gruntu čp. 24 dne 29. července 1878.",
      summary: "Jak dva bratři Dvořákovi pojali v jediný den za manželky dvě sestry Kouřilovy z čp. 24 pouhých třináct dní před smrtí jejich otce.",
      paragraphs: [
        "Historická <button onclick=\"openHouseDetail('cp22')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">usedlost čp. 22 (u Dvořáků)</button> přináší nejpevnější důkaz o neměnnosti čísel popisných v Dlouhomilově: už roku <strong>1786</strong> se v Brníčku ženil jedenadvacetiletý selský syn <strong>Pavel Dvořák (*1763) „z Dlouhomilova č. 22“</strong> s Marinou Weinlichovou. Jejich syn <strong>Petr Dvořák (*1793)</strong> zemřel na čp. 22 jako výměnkář 9. prosince 1878 ve věku 84 let.",
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
      number: "VIII.",
      era: "1815–1921",
      category: "grunty",
      badge: "Rod Jílků & Šafářů • čp. 10 & 6",
      title: "Grunty čp. 10 a čp. 6: láníci Jílkové a příchod Šafářů z Medelského",
      image: "assets/comic/story_kap_07.jpg",
      imageCaption: "Ilustrace ke kapitole VIII (1815–1921): Loučení brance Vincence Jílka roku 1869, příjezd Šafářů na čp. 10 a hospodaření vdovy Marie Jílkové na čp. 6.",
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
      number: "IX.",
      era: "1860–1921",
      category: "remesla",
      badge: "Řemesla & průmysl",
      title: "Domkáři, kováři z čp. 110 a tkalci u Oberleithnerů",
      image: "assets/comic/story_kap_08.jpg",
      imageCaption: "Ilustrace ke kapitole IX (1860–1921): Kovárna Františka Berky v čp. 110 a ranní cesta tkalců a běličů do šumperských továren Eduarda Oberleithnera.",
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
      number: "X.",
      era: "15. 2. 1921",
      category: "moderni",
      badge: "Sčítání lidu 1921",
      title: "Únor 1921: zrcadlo obce na prahu Československa",
      image: "assets/comic/story_kap_09.jpg",
      imageCaption: "Ilustrace ke kapitole X (15. 2. 1921): Sčítací komisař před hospodou u Langrů s děkanem P. Kožušníčkem, železničářem ČSD a válečnou vdovou.",
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
      number: "XI.",
      era: "1938–2006",
      category: "moderni",
      badge: "20.–21. století",
      title: "Soužití na hranici, poválečná proměna a osudy obce ve 20. století (1938–2006)",
      image: "assets/comic/story_kap_10.jpg",
      imageCaption: "Ilustrace ke kapitole XI (1938–1960): Poválečný odsun původních německých obyvatel a nejistý příchod nových osídlenců do Benkova roku 1946.",
      summary: "Záběr Sudet a ztráta Sokola r. 1938, konec války 7. 5. 1945, dosídlení Benkova, odpor fary čp. 2 v padesátých letech, dialekt ČJA 647 i 650 let obce.",
      paragraphs: [
        "Podzim roku <strong>1938</strong> a Mnichovská dohoda začlenily celé údolí do říšské župy <em>Sudetenland</em> (<em>Landkreis Hohenstadt</em>, landrát Gerhard Hotop), jak dokládá dobová <button onclick=\"openMapCompareModal('sudety1940')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">mapa okresů Zábřeh a Šumperk z roku 1940</button>. Vědecký výzkum prokázal, že <strong>Tělocvičná jednota Sokol Dlouhomilov</strong> (založená r. 1907, vlastní sokolovna r. 1925) tehdy patřila ke <strong>42 sokolským jednotám Župy Severomoravské</strong> odtrženým záboru (<em>Uhlíř 2006</em>). Český Dlouhomilov s osadou Medelské si přesto udržel rodovou kontinuitu na selských gruntech; osvobození dorazilo do bezprostředního sousedství <strong>7. května 1945</strong> postupem předvoje Rudé armády přes Strupšín do Brníčka.",
        "Po roce <strong>1945</strong> prošel nejhlubší proměnou sousední německý <strong>Benkov</strong> (administrativně pod Šumperkem, <em>OÚ Šumperk – I</em>). Po odsunu většiny německých rodin (duben–září 1946 přes Mohelnici) přicházeli do benkovských usedlostí noví osídlenci z českého vnitrozemí a Valašska (v matrice <em>Zá II 10</em> se v letech 1945–1949 objevují rody <em>Zbranků, Mičulků, Chrastinů, Sitařů, Rýznarů či Krejčích</em>), zatímco zábřežský okres procházel poválečnou retribucí (TNK Zábřeh, <em>Lukáč 2017</em>) a krizí rané kolektivizace v letech 1952–1953 (<em>Mrňka 2013</em>). Po odsunu rohelského faráře převzal dne <strong>11. září 1946</strong> prozatímní správu Rohle dlouholetý dlouhomilovský farář <strong>P. František Reichel</strong> (1934–1964), který na <button onclick=\"openHouseDetail('cp2')\" class=\"text-amber-800 font-bold underline hover:text-amber-950 cursor-pointer\">faře čp. 2</button> vzdoroval církevním tajemníkům a v roce <strong>1959</strong> prosadil průvod Božího Těla jako jeden ze dvou posledních v celém šumperském okrese (znovu povolen <strong>16. 6. 1968</strong>; v letech 1979–1980 zde působil bývalý pétépák <strong>Mons. Antonín Pospíšil</strong>). Roku <strong>1960</strong> se Benkov s Dlouhomilovem a Medelským administrativně spojil v jednu obec; <em>Český jazykový atlas</em> pak obec zapsal jako pevný nářeční bod č. <strong>647 Dlouhomilov</strong> a roku <strong>2006</strong> obec oslavila 650. výročí první písemné zmínky."
      ],
      links: [
        { label: "🏛️ Fara čp. 2 (P. Reichel 1934–1964)", action: "openHouseDetail('cp2')" },
        { label: "⛪ Kostel Všech svatých (čp. 1)", action: "openHouseDetail('cp1')" },
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
    },
    {
      id: "fact-11",
      icon: "🏷️",
      tag: "Původ jmen obcí (Hosák–Šrámek)",
      title: "Co znamenají jména Dlouhomilov, Benkov, Medelské, Brníčko a Šebená?",
      text: "Všechna sídla v údolí mají středověký český původ (13.–14. stol.): Dlouhomilov (1356 Dluhomilow, nářečně Dlóhomilov) znamená „Dlúhomilův dvůr“ od staročeského osobního jména Dlúhomil; německé Lomigsdorf vzniklo až hláskovým zkomolením českého jména. Benkov (1385) znamená „Benkův majetek“ (od domácké podoby jména Benedikt/Beneš, něm. Benke). Medelské (1385 Medilsk) vychází ze staročeského medlý/mdlý (chudší kamenitá půda) či osobního jména Medel, zatímco německé Dreihöfen („Tři Dvory“) popisovalo tři původní selské dvory. Sousední Brníčko (1350 Brnieczko, něm. Brünnles) pochází ze staročeského brn = „hlína, kal, bahnité místo“, Olešná (Ullischen) z porostu olší a kopec Šebená z „Šibenné (Šibeniční) hory“, kde stávalo hrdelní popraviště panství.",
      actionLabel: "Prohlédnout nejstarší mapu (1716)",
      action: "openMapCompareModal('muller1716')"
    },
    {
      id: "fact-12",
      icon: "📜",
      tag: "Zemské desky 1356–1447",
      title: "60 hřiven grošů za dvůr, šest lánů a krčmu: co přesně stojí v první zmínce z roku 1356?",
      text: "Nejstarší zápis o Dlouhomilově v olomouckých zemských deskách (ZDO I, č. 482, r. 1356) zní doslova: „Andreas de Dluhomilow vendidit Arnoldo de Dluhomilow pro LX marcis grossorum vnam Curiam VI laneos vnam Tabernam hereditarie...“ – tedy dědičný prodej svobodného dvora, šesti lánů a jedné krčmy za 60 hřiven grošů. Hned o dva zápisy dále (č. 484) prodává Pešek z Dlouhomilova za dalších 60 hřiven druhý dvůr, hřivnu platu a vodní mlýn (molendinum), v roce 1368 pak Bohuněk z Kohusova postupuje ve vsi již dvě krčmy, devět chalup (curticulae), pět zahrad, mlýn a les (č. 1124). V roce 1385 se poprvé společně objevují i sousední Benkov (Benkow) a Medelské (Medilsk) jako věno 24 kop grošů Markétě, manželce Mikuláše z Brníčka řečeného Morava (ZDO IV, č. 543). Také instituce šenku a řeznictví měla ve vsi mimořádnou dlouhověkost: od středověkých krčem (1356–1368) přes jmenovitě doloženou dědičnou rychtu (1602) až po hostinec a kovárnu na čp. 7 v 19.–20. století.",
      actionLabel: "Otevřít dědičnou rychtu čp. 7",
      action: "openHouseDetail('cp7')"
    },
    {
      id: "fact-13",
      icon: "📖",
      tag: "Urbář 1585 & gruntovnice 1617–1946",
      title: "Jazyková hranice roku 1585 a sedm generací rodu Schönů v Benkově čp. 5",
      text: "Při srovnání zábřežského urbáře z roku 1585 (URB00015585) vysvitne ostrá jazyková hranice již před třicetiletou válkou: v Dlouhomilově (22 usedlíků, str. 82–84; mj. Vokšan, Vlček, Vachutka, Sládek, Pospíšil) a Medelském (8 držitelů na 5 položkách včetně spoludržeb, str. 80–81; mj. Kouřil, Horníček, Šumerda) převažovala v poměru 28 : 2 česká jména, kdežto sousední Benkov (Venkov, str. 47, 10 usedlíků v čele s fojtem Mikulášem) již nesl jména Knaur, Khaur/Kauer, Šmid či Hayndl. V gruntovních knihách (Dlouhomilov od r. 1584, inv. č. 164; Benkov 1617–1879), matrikách Dubicka (Zá IV 1 od r. 1617) a Zábřeha (Zá I 1: r. 1651 Pavel Dvořák v Dlouhomilově, r. 1658 Martin Schön v Benkově) i Lánovém rejstříku 1669–1671 (MZA D 1, sign. 141, fol. 79: Tobias Schön) lze pak v Benkově čp. 5 vysledovat nepřerušenou linii sedmi generací rodu Schönů – od koupě Georgem Schönem 5. 2. 1696 za 175 hřiven (fol. 210) přes sňatek Johanna Schöna s Eleonorou Dvořákovou z Dlouhomilova (21. 8. 1837) až ke sčítání 1921 a odsunu Adolfa Schöna 11. 7. 1946.",
      actionLabel: "Otevřít grunt čp. 5 v Benkově",
      action: "openHouseDetail('benkov_cp5')"
    },
    {
      id: "fact-14",
      icon: "🌾",
      tag: "Lánové rejstříky & rektifikace 1657–1756",
      title: "27 usedlíků z roku 1677, nula poustek a ztracené „Dreihöfen“ v tereziánských fasích",
      text: "Úplná paleografická transkripce Lánového rejstříku panství Zábřeh uzavřeného 13. 10. 1677 (MZA Brno, fond D 1, sign. 141, fol. 76r–77v) prokázala, že navzdory třicetileté válce nestála v Dlouhomilově ani v Benkově (10 usedlíků, fol. 79r) jediná pustá usedlost (0 Ödungen). Všech 27 dlouhomilovských hospodářů – 1 rychtář (Ilia Zaoralný, dříve Jíra Blahařek(?), 90 měřic), 18 sedláků (mj. Hanß Dvořák po Pavlovi 60 m., Mikuláš Jílek po Janovi 40 m., Martin Vachutka po Janovi s 6 koňmi) a 8 domkařů bez polí – obdělávalo 830 měřic orné půdy (6 lánů 3 1/4 osminy), přičemž 18 z 27 gruntů změnilo od první vizitace 1656–1657 hospodáře. Zkoumání fondů D 2 (1749–1756) a D 3 (1750) dále potvrdilo, že v Medelském neležel panský dvůr (Meierhof); tři někdejších dvorce (Dreihöfen) byly berně spojeny s Dlouhomilovem a přežívaly v názvech tratí sedláků (ein stückl bey Medelsker grundt, u Medla gruntes mihle, w Medelsky Strani) až do roku 1770, zatímco místní Befreytte Bauern vykupovali robotu penězi a předli přízi na šumperský trh.",
      actionLabel: "Otevřít grunt čp. 29 (Dvořák 1657/1677)",
      action: "openHouseDetail('cp29')"
    },
    {
      id: "fact-15",
      icon: "⚖️",
      tag: "Zemské desky & půhony 1463–1589",
      title: "Pochop Duchek na mlýně u Šilperka, rataj Števík a „hrad Brníčko zbořený“",
      text: "Průzkum Knih půhonných a originálních folií Moravských zemských desek (MZA Brno, fond A 3) vynesl přímé příběhy poddaných a panstva dávno před matrikami: v letech 1463–1466 (KP IV/2, č. 525, 543, 866) se dědička Kateřina z Vildenberka, ručitel Výšek ze Stříteže a Jan Tunkl soudili o dvuor Dluhomiluov (200 hř. gr.); roku 1490 (ZDO XIII, č. 84) jmenuje vklad Brníčka Dlouhomilov, Medelské i Venkov již „se všemi rychtami zákupními“. V roce 1492 (KP VI, zasedání od 18. 5.) pak Tunklové hnali Znatu ze Zvole pro přijetí Jana rataje Števíka z Dlúhomilova vlastním výhostním listem (č. 1775) i Jana z Dalčic na Šilperku o uprchlého dlouhomilovského pochopa (= drába) Duchka, který se ukryl na mlýně u Šilperka a „ta dědina i podnes pusta stojí“ (č. 1962). Roku 1510 (Kniha XVII, sn. 10/32) vložil Jindřich Tunkl Mikuláši ml. Trčkovi „wes dluhomilow s kaplu“ a 24. 6. 1513 (sn. 22/32) přebíral Ladislav z Boskovic Zábřeh i „hrad Brniczko zborzenj“. Po bezdětné smrti Jana z Boskovic na Třebové a Zábřehu dne 1. 8. 1589 přešlo údolí přes sestru Kunku na Ladislava Velena ze Žerotína.",
      actionLabel: "Otevřít dědičnou rychtu čp. 7",
      action: "openHouseDetail('cp7')"
    },
    {
      id: "fact-16",
      icon: "⛪",
      tag: "Matriky Dubicko & Rohle 1653–1786",
      title: "Svědek Pavel Dvořák se synem Hanßem (1654), omyl otce z r. 1763 a benkovský rychtář Jan Schön",
      text: "Systematická excerpce matrik farností Dubicko (Zá IV 1–2) a Rohle (Zá VIII 1, 6, 10, 14, 15) převrátila tři zažité představy: (1) Už 27. 9. 1654 (Dubicko Zá IV 1, pag. 313) svědčili na sňatku Jiříka z Medelského („z Medelskýho“) společně „Pawel Dworžák z Dlauhomilowa a Hanß geho Syn“ — přímý matriční doklad otce a syna před Lánovým rejstříkem 1657/1677 na čp. 29 — a též roku 1653–1654 se oddávalo přímo „w Dlauhomilowie“ za přítomnosti benkovského rychtáře Jana Schöna (Sskůna). (2) Křty Dlouhomilova a Benkova nekončily v Dubicku roku 1762, nýbrž oddílem 1695–1722 (Zá IV 2, str. 948–1095) a již roku 1720 přešly do Rohle, kde index Zá VIII 14 uvádí přes třicet dlouhomilovských Dvořáků. (3) Originál křtu Pavla Dvořáka ze dne 9. 9. 1763 (Rohle Zá VIII 1, pag. 405) opravil tradovaný omyl: nebyl synem Jiřího, ale sedláka Pavla Dvořáka st. a Barbory, a zatímco Dlouhomilov s Medelským přešly r. 1786 do Zá II (prvních 11 sňatků vč. bratra lokalisty Josepha Schuberta na rychtě čp. 7), Benkov zůstal v Rohli až do r. 1932.",
      actionLabel: "Otevřít profil Petra Dvořáka (*1793)",
      action: "openPersonModal('p_petr_dvorak_1793')"
    },
    {
      id: "fact-17",
      icon: "✉️",
      tag: "Fara čp. 2 & církevní dějiny (1707–1968)",
      title: "Dopis od Émila Zoly na dlouhomilovskou faru, 64 800 cihel na kostel a poslední průvod Božího Těla v okrese",
      text: "Vytěžení 15 vysokoškolských prací a církevních archivů odhalilo nečekané osudy kostela čp. 1 a fary čp. 2: na stavbu barokního chrámu zahájenou v červnu 1707 se vypálilo 64 800 cihel; z jeho čtyř zvonů přežil válečné rekvizice 1916–1917 jen zvon z r. 1752 (28. 2. 1918 navíc úřady odebraly 21 varhanních píšťal) a obec dala církvi 7 kněží-rodáků vč. P. Aloise Dvořáka (1830–1908). V letech 1891–1907 působil na studené faře s 24m studnou ve skále kněz-spisovatel P. František Kužela (Adam Chlumecký): r. 1897 založil Spolek sv. Rocha, r. 1899 otevřel česky psanou Pamětní knihu farnosti dlouhoveské (1899–1986), čelil ostrým sporům Čechů a Němců z Olešné o lavice a přímo do Dlouhomilova obdržel blahopřejný list od Émila Zoly. Roku 1958 pak jeho nástupce P. František Reichel (1934–1964) na mírové besedě odpověděl předsedovi ONV, že na míru pracuje „na poli“, a roku 1959 udržel veřejný průvod Božího Těla jako jedna ze dvou posledních farností v celém okrese Šumperk!",
      actionLabel: "Otevřít faru čp. 2",
      action: "openHouseDetail('cp2')"
    },
    {
      id: "fact-18",
      icon: "🧬",
      tag: "Onomastika & družina Benedy 1226–1398",
      title: "Kdo byl zakladatel Dlúhomil a jak družina lovčího Benedy z Dubicka (zeman – druho – sluhoň) otiskla jména vsí do krajiny",
      text: "Kombinace historického hláskosloví a excerpce moravských diplomatářů (CDM II–VII, XV; RBM II) i všech 32 vkladů prvního svazku zemských desek (ZDO I–X, 1356–1447) zúžila založení Dlouhomilova do primárního okna let 1270–1277 (nejpozději 1286–1295, po válečném zmrazení 1278–1285). Dvoučlenné staročeské jméno Dlúhomil („dlouho/trvale milý“) bylo ve 13. st. výsadním stavovským jménem domácí šlechty, jeho hanácký vývoj Dlúhomilov → Dlóhomilov → Dlómilov → Lomigsdorf dokazuje středomoravské osadníky a dvuor Dlúhomiluov potvrzuje svobodný zemanský alod. Ústřední postavou kolonizace ze střední Hané byl královský vrchní lovčí Beneda z Dubicka (1226–1269+, v r. 1239 výslovně zvaný „perambulator terrarum et assignator simul et metarum distinctor“, majitel tvrze v Dubicku, Krčmaně i domu na Olomouckém hradě 1267). Okruh kolem něj tvořil přesnou čtyřstupňovou hierarchii zrcadlící se v názvech okolních sídel: (1) velmoži Beneda z Dubicka, Hrabiše z Úsova (1269–1275) a Kojata z Drnovic → Benkov (Benkow < Benek/Beneda po suchém hřebeni přes Rohli a křižovatku U Cikánského buku), Hrabišín a Kolšov (Kojišov); (2) plně urození zemané s deskovým alodem (nobiles minores) → zakladatel Dlúhomil (Dlouhomilov, jehož vladykové let 1356–1397 sdílejí s potomky Benedy pět rodových jmen Ondřej, Pešek/Přešek, Vilém, Ctibor a Mikšík; srov. též r. 1297 Lubominus de Dubich ve Velehradském kodexu MZA Brno E 7, sign. G 191, fol. 107v–108r); (3) osobně svobodní družiníci zvaní druho (statuta 1229/1237 „nobilis vir, et non druho“; u Benedy r. 1263 doložen Cunratecz, druho domini Benede) → líheň panošů a dědičných rychtářů; (4) vrchnostenští služebníci sluhoni (listiny biskupa Bruna 1263–1272 „de zluhonibus“) → sousední Sluhoňov (1349) bez jediného svobodného dvora.",
      actionLabel: "Prohlédnout stabilní katastr lánů (1834)",
      action: "activateMapOverlayFromAtlas('cadastre1834')"
    }
  ]
};
