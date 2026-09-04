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

const allPeople = [];
let idCounter = 1;

// 1. Dlouhomilov čp. 29
const f29 = 'C:/Users/krapn/Dropbox/CV/!Rodokmen/Dokumenty_Berkove/Scitaci_archy/Dlouhomilov_29/cleaned_genealogy_data_29.csv';
const d29 = parseCSV(f29, ';');
d29.forEach(r => {
  const firstName = r['Jméno'] || '';
  const lastName = r['Příjmení'] || '';
  if (firstName && firstName !== 'null' && firstName !== 'Neobydleno') {
    allPeople.push({
      id: `cen_${idCounter++}`,
      censusYear: parseInt(r['Datum záznamu']) || 1890,
      houseNumber: '29',
      houseId: 'cp29',
      fullName: `${firstName} ${lastName}`,
      firstName: firstName,
      lastName: lastName,
      birthDate: r['Datum narození'] && r['Datum narození'] !== 'null' ? r['Datum narození'] : '-',
      relation: r['profese'] && r['profese'] !== 'null' ? r['profese'] : (r['Profese'] || 'obyvatel'),
      birthPlace: r['Misto narozeni'] && r['Misto narozeni'] !== 'null' ? r['Misto narozeni'] : 'Dlouhomilov',
      religion: r['nabozenstvi'] || 'římskokatolické',
      language: r['jazyk'] || 'česká / moravská',
      occupation: r['Profese'] && r['Profese'] !== 'null' ? r['Profese'] : (r['profese'] || '-'),
      notes: r['Poznámka'] && r['Poznámka'] !== 'null' ? r['Poznámka'] : '',
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
    allPeople.push({
      id: `cen_${idCounter++}`,
      censusYear: parseInt(r['rok_scitani']) || 1910,
      houseNumber: '10',
      houseId: 'cp10',
      fullName: `${firstName} ${lastName}`,
      firstName: firstName,
      lastName: lastName,
      birthDate: r['datum_narozeni'] && r['datum_narozeni'] !== 'null' ? r['datum_narozeni'] : '-',
      relation: r['vztah_k_hospodari'] && r['vztah_k_hospodari'] !== 'null' ? r['vztah_k_hospodari'] : 'člen domácnosti',
      birthPlace: r['rodiste'] && r['rodiste'] !== 'null' ? r['rodiste'] : 'Dlouhomilov',
      religion: r['nabozenstvi'] || 'římskokatolické',
      language: r['jazyk'] || 'česká',
      occupation: r['povolani'] && r['povolani'] !== 'null' ? r['povolani'] : '-',
      notes: r['poznamka'] && r['poznamka'] !== 'null' ? r['poznamka'] : '',
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
    allPeople.push({
      id: `cen_${idCounter++}`,
      censusYear: parseInt(r['rok_scitani']) || 1910,
      houseNumber: houseNum,
      houseId: `cp${houseNum}`,
      fullName: `${firstName} ${lastName}`,
      firstName: firstName,
      lastName: lastName,
      birthDate: r['datum_narozeni'] && r['datum_narozeni'] !== 'null' ? r['datum_narozeni'] : '-',
      relation: r['vztah_k_hospodari'] && r['vztah_k_hospodari'] !== 'null' ? r['vztah_k_hospodari'] : 'člen domácnosti',
      birthPlace: r['rodiste'] && r['rodiste'] !== 'null' ? r['rodiste'] : 'Dlouhomilov',
      religion: r['nabozenstvi'] || 'římskokatolické',
      language: r['jazyk'] || 'česká',
      occupation: r['povolani'] && r['povolani'] !== 'null' ? r['povolani'] : '-',
      notes: r['poznamka'] && r['poznamka'] !== 'null' ? r['poznamka'] : '',
      scanFile: r['zdroj_soubor'] && r['zdroj_soubor'] !== 'null' ? `assets/archives/dlouhomilov/${r['zdroj_soubor']}` : '',
      scanTitle: `Sčítací arch ${r['rok_scitani'] || ''} – Dlouhomilov čp. ${houseNum} (${firstName} ${lastName})`
    });
  }
});

console.log('Total registry records compiled:', allPeople.length);

const outputContent = `/**
 * Rejstřík všech obyvatel obce Dlouhomilov zaznamenaných ve sčítáních lidu (1857–1921)
 * Obsahuje celkem ${allPeople.length} archivních záznamů se všemi údaji o narození, povolání, vztahu k hospodáři a scanem archu.
 */
const censusRegistryData = ${JSON.stringify(allPeople, null, 2)};
`;

fs.writeFileSync('c:/Users/krapn/Dropbox/Antigravity/Dlouhomilov/data/census_registry.js', outputContent, 'utf-8');
console.log('Successfully written data/census_registry.js!');
