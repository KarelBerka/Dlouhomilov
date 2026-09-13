const fs = require('fs');
const path = require('path');

function parseLine(line, delimiter) {
  const values = [];
  let current = '';
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === delimiter && !inQuotes) {
      values.push(current.trim().replace(/^"|"$/g, ''));
      current = '';
    } else {
      current += char;
    }
  }
  values.push(current.trim().replace(/^"|"$/g, ''));
  return values;
}

function parseCSV(filePath, delimiter = ',') {
  if (!fs.existsSync(filePath)) return [];
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split(/\r?\n/).filter(l => l.trim().length > 0);
  if (lines.length === 0) return [];
  
  const header = parseLine(lines[0].replace(/^\uFEFF/, ''), delimiter);
  const results = [];
  
  for (let i = 1; i < lines.length; i++) {
    const row = parseLine(lines[i], delimiter);
    if (row.length >= 3) {
      const obj = {};
      header.forEach((h, idx) => {
        obj[h] = row[idx] || '';
      });
      results.push(obj);
    }
  }
  return results;
}

// Funkce pro určení historické sociálně-ekonomické kategorie osoby
function getPersonCategory(relation, occupation, notes) {
  const rel = (relation || '').toLowerCase();
  const occ = (occupation || '').toLowerCase();
  const not = (notes || '').toLowerCase();
  const allText = `${rel} ${occ} ${not}`.toLowerCase();

  // 1. Výměnkáři
  if (allText.includes('výměnk') || allText.includes('vymenk') || allText.includes('ausgeding') || allText.includes('výměnek')) {
    return {
      key: 'vymenek',
      label: 'Výměnkář / Výměnkářka',
      icon: '👴',
      badgeClass: 'bg-stone-100 text-stone-900 border-stone-300'
    };
  }

  // 2. Vzdělanci, správa a duchovní
  if (allText.includes('jurist') || allText.includes('doktor') || allText.includes('advokát') || allText.includes('farář') || allText.includes('učitel') || allText.includes('kněz')) {
    return {
      key: 'vzdelanec',
      label: 'Vzdělanec / Správa / Duchovní',
      icon: '🎓',
      badgeClass: 'bg-indigo-100 text-indigo-950 border-indigo-300'
    };
  }

  // 3. Čeleď a služebnictvo
  if (allText.includes('čeled') || allText.includes('celed') || allText.includes('pohůnek') || allText.includes('pacholek') || allText.includes('děvečk') || allText.includes('deveck') || allText.includes('slouž') || allText.includes('sluzeb') || allText.includes('služeb') || allText.includes('pacholek')) {
    return {
      key: 'celed',
      label: 'Čeleď a služebnictvo',
      icon: '🐎',
      badgeClass: 'bg-amber-100 text-amber-950 border-amber-300'
    };
  }

  // 4. Držitelé gruntů, hospodáři a majitelé
  if (allText.includes('grundbesitzer') || allText.includes('hausbesitzer') || allText.includes('majitel domu') || allText.includes('majitel hospod') || allText.includes('rolnický majitel') || allText.includes('rolník na vlastním') || allText.includes('samostatný rolník') || allText.includes('sedlák') || allText.includes('hlava') || rel.includes('hospodář') || allText.includes('vlastník domu') || rel === 'majitel' || occ.includes('bauer') || rel.includes('bauer')) {
    return {
      key: 'grunt',
      label: 'Držitel gruntu / Hospodář',
      icon: '🏡',
      badgeClass: 'bg-emerald-100 text-emerald-950 border-emerald-300'
    };
  }

  // 5. Řemeslníci a živnostníci
  if (allText.includes('tkadlec') || allText.includes('zedník') || allText.includes('zámečník') || allText.includes('obuvník') || allText.includes('mlynář') || allText.includes('šití') || allText.includes('přástlen') || allText.includes('továrn') || allText.includes('dělník') || allText.includes('dělnice') || allText.includes('kovář') || allText.includes('truhlář')) {
    return {
      key: 'remeslo',
      label: 'Řemeslník / Živnostník / Dělník',
      icon: '🔨',
      badgeClass: 'bg-blue-100 text-blue-950 border-blue-300'
    };
  }

  // 6. Domkáři a podruzi / podnájemníci
  if (allText.includes('domkař') || allText.includes('domkar') || allText.includes('podnájem') || allText.includes('podnajem') || allText.includes('nájem') || allText.includes('podruh') || allText.includes('majetník bytu')) {
    return {
      key: 'podruh',
      label: 'Domkář / Podnájemník',
      icon: '🏚️',
      badgeClass: 'bg-orange-100 text-orange-950 border-orange-300'
    };
  }

  // 7. Děti, kojenci a školáci
  if (allText.includes('dítě') || allText.includes('dite') || allText.includes('kojenec') || allText.includes('v choví') || allText.includes('škola') || allText.includes('žák') || allText.includes('školačka')) {
    return {
      key: 'dite',
      label: 'Dítě / Školák',
      icon: '🧒',
      badgeClass: 'bg-pink-100 text-pink-950 border-pink-300'
    };
  }

  // 8. Členové rodiny hospodáře
  if (rel.includes('manželka') || rel.includes('žena') || rel.includes('syn') || rel.includes('dcera') || rel.includes('bratr') || rel.includes('sestra') || rel.includes('matka') || rel.includes('otec') || rel.includes('tchyně') || allText.includes('domácnost') || allText.includes('hospodářství') || allText.includes('při otci')) {
    return {
      key: 'rodina',
      label: 'Člen rodiny hospodáře',
      icon: '👨‍👩‍👧',
      badgeClass: 'bg-sky-100 text-sky-950 border-sky-300'
    };
  }

  return {
    key: 'ostatni',
    label: 'Obyvatel obce',
    icon: '👤',
    badgeClass: 'bg-slate-100 text-slate-800 border-slate-300'
  };
}

const allPeople = [];
let idCounter = 1;

// 1. Dlouhomilov čp. 29
const f29 = 'C:/Users/krapn/Dropbox/CV/!Rodokmen/Dokumenty_Berkove/Scitaci_archy/Dlouhomilov_29/cleaned_genealogy_data_29.csv';
const d29 = parseCSV(f29, ';');
d29.forEach(r => {
  const firstName = r['Jméno'] || '';
  const lastName = r['Příjmení'] || '';
  if (firstName && firstName !== 'null' && firstName !== 'Neobydleno') {
    const rel = r['profese'] && r['profese'] !== 'null' ? r['profese'] : (r['Profese'] || 'obyvatel');
    const occ = r['Profese'] && r['Profese'] !== 'null' ? r['Profese'] : (r['profese'] || '-');
    const notes = r['Poznámka'] && r['Poznámka'] !== 'null' ? r['Poznámka'] : '';
    const cat = getPersonCategory(rel, occ, notes);

    allPeople.push({
      id: `cen_${idCounter++}`,
      censusYear: parseInt(r['Datum záznamu']) || 1890,
      houseNumber: '29',
      houseId: 'cp29',
      fullName: `${firstName} ${lastName}`,
      firstName: firstName,
      lastName: lastName,
      categoryKey: cat.key,
      categoryLabel: cat.label,
      categoryIcon: cat.icon,
      categoryBadgeClass: cat.badgeClass,
      birthDate: r['Datum narození'] && r['Datum narození'] !== 'null' ? r['Datum narození'] : '-',
      relation: rel,
      birthPlace: r['Misto narozeni'] && r['Misto narozeni'] !== 'null' ? r['Misto narozeni'] : 'Dlouhomilov',
      religion: r['nabozenstvi'] || 'římskokatolické',
      language: r['jazyk'] || 'česká / moravská',
      occupation: occ,
      notes: notes,
      scanFile: r['Zdroj'] && r['Zdroj'] !== 'null' ? `assets/archives/cp29/${r['Zdroj']}` : '',
      scanTitle: `Sčítací arch ${r['Datum záznamu'] || ''} – Dlouhomilov čp. 29 (${firstName} ${lastName})`
    });
  }
});

// 2. Dlouhomilov čp. 10
const f10 = 'C:/Users/krapn/Dropbox/CV/!Rodokmen/Dokumenty_Berkove/Scitaci_archy/Dlouhomilov_10/genealogicky-export-2026-04-03 (1).csv';
const d10 = parseCSV(f10, ',');
d10.forEach(r => {
  const firstName = r['jmeno'] || '';
  const lastName = r['prijmeni'] || '';
  if (firstName && firstName !== 'null' && firstName !== 'neuvedeno') {
    const rel = r['vztah_k_hospodari'] && r['vztah_k_hospodari'] !== 'null' ? r['vztah_k_hospodari'] : 'člen domácnosti';
    const occ = r['povolani'] && r['povolani'] !== 'null' ? r['povolani'] : '-';
    const notes = r['poznamka'] && r['poznamka'] !== 'null' ? r['poznamka'] : '';
    const cat = getPersonCategory(rel, occ, notes);

    allPeople.push({
      id: `cen_${idCounter++}`,
      censusYear: parseInt(r['rok_scitani']) || 1910,
      houseNumber: '10',
      houseId: 'cp10',
      fullName: `${firstName} ${lastName}`,
      firstName: firstName,
      lastName: lastName,
      categoryKey: cat.key,
      categoryLabel: cat.label,
      categoryIcon: cat.icon,
      categoryBadgeClass: cat.badgeClass,
      birthDate: r['datum_narozeni'] && r['datum_narozeni'] !== 'null' ? r['datum_narozeni'] : '-',
      relation: rel,
      birthPlace: r['rodiste'] && r['rodiste'] !== 'null' ? r['rodiste'] : 'Dlouhomilov',
      religion: r['nabozenstvi'] || 'římskokatolické',
      language: r['jazyk'] || 'česká',
      occupation: occ,
      notes: notes,
      scanFile: r['zdroj_soubor'] && r['zdroj_soubor'] !== 'null' ? `assets/archives/dlouhomilov/${r['zdroj_soubor']}` : '',
      scanTitle: `Sčítací arch ${r['rok_scitani'] || ''} – Dlouhomilov čp. 10 (${firstName} ${lastName})`
    });
  }
});

// 3. Další stavení z Dlouhomilova (čp. 1, 7, 22, 46, 110)
const fg = 'C:/Users/krapn/Dropbox/CV/!Rodokmen/Dokumenty_Berkove/Scitaci_archy/Dlouhomilov/genealogicky-export-2026-02-17.csv';
const dg = parseCSV(fg, ',');
dg.forEach(r => {
  const firstName = r['jmeno'] || '';
  const lastName = r['prijmeni'] || '';
  const houseNum = r['cislo_domu'] || '';
  if (firstName && firstName !== 'null' && houseNum && houseNum !== '29' && houseNum !== '10') {
    const rel = r['vztah_k_hospodari'] && r['vztah_k_hospodari'] !== 'null' ? r['vztah_k_hospodari'] : 'člen domácnosti';
    const occ = r['povolani'] && r['povolani'] !== 'null' ? r['povolani'] : '-';
    const notes = r['poznamka'] && r['poznamka'] !== 'null' ? r['poznamka'] : '';
    const cat = getPersonCategory(rel, occ, notes);

    allPeople.push({
      id: `cen_${idCounter++}`,
      censusYear: parseInt(r['rok_scitani']) || 1910,
      houseNumber: houseNum,
      houseId: `cp${houseNum}`,
      fullName: `${firstName} ${lastName}`,
      firstName: firstName,
      lastName: lastName,
      categoryKey: cat.key,
      categoryLabel: cat.label,
      categoryIcon: cat.icon,
      categoryBadgeClass: cat.badgeClass,
      birthDate: r['datum_narozeni'] && r['datum_narozeni'] !== 'null' ? r['datum_narozeni'] : '-',
      relation: rel,
      birthPlace: r['rodiste'] && r['rodiste'] !== 'null' ? r['rodiste'] : 'Dlouhomilov',
      religion: r['nabozenstvi'] || 'římskokatolické',
      language: r['jazyk'] || 'česká',
      occupation: occ,
      notes: notes,
      scanFile: r['zdroj_soubor'] && r['zdroj_soubor'] !== 'null' ? `assets/archives/dlouhomilov/${r['zdroj_soubor']}` : '',
      scanTitle: `Sčítací arch ${r['rok_scitani'] || ''} – Dlouhomilov čp. ${houseNum} (${firstName} ${lastName})`
    });
  }
});

console.log('Total registry records compiled:', allPeople.length);

const outputContent = `/**
 * Rejstřík všech obyvatel obce Dlouhomilov zaznamenaných ve sčítáních lidu (1857–1921)
 * Obsahuje celkem ${allPeople.length} archivních záznamů s rozdělením do socio-ekonomických kategorií.
 */
const censusRegistryData = ${JSON.stringify(allPeople, null, 2)};
`;

fs.writeFileSync('c:/Users/krapn/Dropbox/Antigravity/Dlouhomilov/data/census_registry.js', outputContent, 'utf-8');
console.log('Successfully updated data/census_registry.js with categories!');
