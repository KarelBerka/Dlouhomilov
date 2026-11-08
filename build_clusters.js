/**
 * build_clusters.js
 * Sestaví souborný datový model, osobní clustery a KOMPLETNÍ ZNALOSTNÍ A ZÁVISLOSTNÍ GRAF
 * pro aplikaci cluster.html.
 *
 * STRIKTNĚ OMEZENO pouze na osoby, které měly přímou vazbu na:
 *   - Dlouhomilov (Lomigsdorf)
 *   - Medelské (Dreihofen)
 *   - Benkov (Benke)
 *
 * Všechna data jsou současně popsána jako heterogenní graf (knowledgeGraph),
 * jehož uzly jsou:
 *   - person (osobní clustery)
 *   - house (stavení a grunty čp. v Dlouhomilově, Medelském a Benkově)
 *   - clan (rody / příjmení)
 *   - employer (zaměstnavatelé, továrny Oberleithner / Seidl, dráha, škola, řemesla)
 *   - origin (obce původu přistěhovalých obyvatel)
 * a jehož orientované hrany popisují vzájemné závislosti:
 *   - SPOUSE_OF (manželé)
 *   - PARENT_OF (rodič ➔ dítě, vč. tchán/tchyně ➔ manželka)
 *   - SIBLING_OF (sourozenci v domácnosti)
 *   - HOUSEHOLD_DEPENDENCY (hospodář ➔ čeleď, služebnictvo, výměnkáři, podruzi)
 *   - RESIDES_AT (osoba ➔ stavení čp. a byt)
 *   - MIGRATED_BETWEEN (přesuny mezi čp. a příchody z obcí původu)
 *   - WORKS_AT (osoba ➔ zaměstnavatel / profese)
 *   - BELONGS_TO_CLAN (osoba ➔ rod / rodné příjmení)
 */

const fs = require('fs');
const path = require('path');
const vm = require('vm');

// ---------------------------------------------------------------------------
// 1. Pomocné funkce pro čtení CSV a normalizaci
// ---------------------------------------------------------------------------
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

function parseCSV(filePath) {
  if (!fs.existsSync(filePath)) return [];
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split(/\r?\n/).filter(l => l.trim().length > 0);
  if (lines.length === 0) return [];
  const firstLine = lines[0].replace(/^\uFEFF/, '');
  const delim = firstLine.includes(';') ? ';' : ',';
  const header = parseLine(firstLine, delim);
  const results = [];
  for (let i = 1; i < lines.length; i++) {
    const row = parseLine(lines[i], delim);
    if (row.length >= 3) {
      const obj = {};
      header.forEach((h, idx) => {
        obj[h.trim()] = (row[idx] || '').trim();
      });
      results.push(obj);
    }
  }
  return results;
}

function normalizeNameToken(str) {
  if (!str) return '';
  let s = str.toString().toLowerCase()
    .replace(/\(.*?\)/g, ' ')
    .replace(/\b(judr|mudr|dr|p|ing|mgr|st|ml)\.\s*/g, '')
    .replace(/\broz\.\s+[a-záčďéěíňóřšťúůýž]+/g, '')
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  s = s.replace(/w/g, 'v');
  s = s.replace(/rz/g, 'r');
  s = s.replace(/th/g, 't');
  s = s.replace(/cz/g, 'c');
  s = s.replace(/tz/g, 'c');
  s = s.replace(/ss/g, 's');
  s = s.replace(/ff/g, 'f');
  s = s.replace(/ll/g, 'l');
  s = s.replace(/nn/g, 'n');
  s = s.replace(/mm/g, 'm');
  s = s.replace(/pp/g, 'p');
  s = s.replace(/y/g, 'i');
  s = s.replace(/gilek/g, 'jilek');
  s = s.replace(/gilkova/g, 'jilkova');
  s = s.replace(/zilka/g, 'jilek');
  s = s.replace(/minar/g, 'minar');

  const givenMap = {
    'johann': 'jan',
    'johannes': 'jan',
    'jan': 'jan',
    'joseph': 'josef',
    'josephus': 'josef',
    'jozef': 'josef',
    'karl': 'karel',
    'carolus': 'karel',
    'aloisius': 'alois',
    'aloys': 'alois',
    'franz': 'frantisek',
    'franciscus': 'frantisek',
    'georg': 'jiri',
    'georgius': 'jiri',
    'anton': 'antonin',
    'antonius': 'antonin',
    'adalbert': 'vojtech',
    'ignaz': 'ignat',
    'ignatius': 'ignat',
    'ignatz': 'ignat',
    'hynek': 'ignat',
    'hinek': 'ignat',
    'mathias': 'matej',
    'matthias': 'matej',
    'wendelin': 'vendelin',
    'vinzenz': 'vincenc',
    'vincenz': 'vincenc',
    'moritz': 'moric',
    'mauric': 'moric',
    'augustin': 'augustin',
    'augustyn': 'augustin',
    'elisabeth': 'alzbeta',
    'elisabetha': 'alzbeta',
    'mariana': 'marie',
    'marianna': 'marie',
    'maria': 'marie',
    'majdalena': 'magdalena',
    'magdalena': 'magdalena',
    'catharina': 'katerina',
    'katharina': 'katerina',
    'theresia': 'terezie',
    'teresia': 'terezie',
    'terezia': 'terezie',
    'viktoria': 'viktorie',
    'victoria': 'viktorie',
    'franziska': 'frantiska',
    'francisca': 'frantiska',
    'amalia': 'amalie',
    'emilia': 'emilie',
    'mathilda': 'matilda',
    'barbara': 'barbora',
    'philomena': 'filomena',
    'agnes': 'anezka',
    'paul': 'pavel',
    'paulus': 'pavel',
    'petr': 'petr',
    'peter': 'petr'
  };

  const tokens = s.replace(/[^a-z0-9\s]/g, ' ').split(/\s+/).filter(Boolean);
  const mapped = tokens.map(t => {
    if (givenMap[t]) return givenMap[t];
    let stem = t.replace(/ova$/, '').replace(/ove$/, '');
    if (givenMap[stem]) return givenMap[stem];
    return stem;
  });

  return mapped.join(' ').trim();
}

function extractBirthYear(birthDateStr, notesStr = '', eventYear = null) {
  if (birthDateStr && birthDateStr !== '-' && birthDateStr !== 'null') {
    const s = birthDateStr.toString();
    const m4 = s.match(/\b(1[6789]\d\d|19[01234]\d)\b/);
    if (m4) return parseInt(m4[1], 10);
  }
  if (notesStr) {
    const mBorn = notesStr.match(/(?:\*|nar\.|narozen[aá]?)\s*(?:dne\s*)?(?:\d{1,2}\.\s*\d{1,2}\.\s*)?(?:cca\s*)?(1[6789]\d\d|19[01234]\d)/i);
    if (mBorn) return parseInt(mBorn[1], 10);
    const mAge = notesStr.match(/věk[u]?\s+(\d{1,2})\s*let/i);
    if (mAge && eventYear) {
      return parseInt(eventYear, 10) - parseInt(mAge[1], 10);
    }
  }
  return null;
}

function extractDayMonth(birthDateStr) {
  if (!birthDateStr || birthDateStr === '-' || birthDateStr === 'null') return null;
  const s = birthDateStr.toString().trim();
  const mNum = s.match(/^(\d{1,2})\.\s*(\d{1,2})\.\s*(1[6789]\d\d|19\d\d)$/);
  if (mNum) {
    return `${parseInt(mNum[1], 10)}.${parseInt(mNum[2], 10)}.`;
  }
  return null;
}

function extractMaidenName(fullName, notes) {
  const combined = `${fullName || ''} ${notes || ''}`;
  const m = combined.match(/(?:roz\.|rozená|geb\.|geborene|dcera\s+[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ][a-záčďéěíňóřšťúůýž]+\s+)([A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ][a-záčďéěíňóřšťúůýž]+)/i);
  if (m) return normalizeNameToken(m[1]);
  return null;
}

function extractApartmentNumber(relationStr, notesStr) {
  const txt = `${relationStr || ''} ${notesStr || ''}`;
  const m = txt.match(/Byt\s*(?:č\.\s*)?([0-9]+|I{1,3}|IV)/i);
  if (!m) return '1';
  const raw = m[1].toUpperCase();
  if (raw === 'I') return '1';
  if (raw === 'II') return '2';
  if (raw === 'III') return '3';
  if (raw === 'IV') return '4';
  return raw;
}

function normalizeLocality(loc, houseId = '') {
  if (houseId && houseId.startsWith('medelske')) return 'Medelské';
  if (houseId && houseId.includes('benkov')) return 'Benkov';
  if (!loc || loc === 'null' || loc === '-') return 'Dlouhomilov';
  const l = loc.toString().trim().replace(/,.*$/, '').trim();
  if (/medelsk|nedelsk|dreihofen/i.test(l)) return 'Medelské';
  if (/benkov|benke/i.test(l)) return 'Benkov';
  if (/dlouhomilov|l[oö]migsdorf|k[oö]nigsdorf|bluhomilov|bludomilov|hlouhomil|louhomil|slouberu|drahomilov|pluhonice|sluhonice|bohumilov|hluboměřice/i.test(l)) return 'Dlouhomilov';
  if (/zábřeh|hohenstadt/i.test(l)) return 'Zábřeh';
  if (/brníčko|beníčko/i.test(l)) return 'Brníčko';
  if (/hradečná/i.test(l)) return 'Hradečná';
  if (/horní studénky|studénky|studýnky/i.test(l)) return 'Horní Studénky';
  if (/dolní olešná|horní olešná|olešná/i.test(l)) return 'Olešná';
  if (/hrabišín/i.test(l)) return 'Hrabišín';
  if (/svébohov/i.test(l)) return 'Svébohov';
  if (/kolšov/i.test(l)) return 'Kolšov';
  if (/lesnice|knallersdorf/i.test(l)) return 'Lesnice';
  if (/bludov/i.test(l)) return 'Bludov';
  if (/šumperk|temenice/i.test(l)) return 'Šumperk';
  if (/sudkov/i.test(l)) return 'Sudkov';
  if (/rovensko/i.test(l)) return 'Rovensko';
  if (/bohutín/i.test(l)) return 'Bohutín';
  if (/drahanovice/i.test(l)) return 'Drahanovice';
  if (/strupšín/i.test(l)) return 'Strupšín';
  if (/jedlí/i.test(l)) return 'Jedlí';
  if (/vyšehoří/i.test(l)) return 'Vyšehoří';
  return l;
}

// ---------------------------------------------------------------------------
// 2. Načtení jádra Dlouhomilova (census_registry.js, people.js, houses.js)
// ---------------------------------------------------------------------------
const ctx = {};
vm.runInNewContext(fs.readFileSync(path.join(__dirname, 'data/census_registry.js'), 'utf8').replace('const censusRegistryData', 'var censusRegistryData'), ctx);
vm.runInNewContext(fs.readFileSync(path.join(__dirname, 'data/people.js'), 'utf8').replace('const peopleData', 'var peopleData'), ctx);
try {
  vm.runInNewContext(fs.readFileSync(path.join(__dirname, 'data/houses.js'), 'utf8').replace('const housesData', 'var housesData'), ctx);
} catch (e) {
  ctx.housesData = [];
}

const censusRegistryData = ctx.censusRegistryData || [];
const peopleData = ctx.peopleData || [];
const housesData = ctx.housesData || [];

const allRecords = [];
const recordById = new Map();

function addRecord(rec) {
  const cleanFull = (rec.fullName || '').replace(/\(\*.*?\)/g, '').replace(/\(†.*?\)/g, '').trim();
  const normFull = normalizeNameToken(cleanFull);
  if (!normFull) return null;
  const parts = normFull.split(' ').filter(Boolean);
  const normFirst = normalizeNameToken(rec.firstName || parts[0] || '');
  const normLast = normalizeNameToken(rec.lastName || parts.slice(1).join(' ') || '');
  const bYear = rec.birthYear || extractBirthYear(rec.birthDate, rec.notes, rec.year);
  const dm = extractDayMonth(rec.birthDate);
  const maiden = rec.maidenName || extractMaidenName(rec.fullName, rec.notes);
  const apt = extractApartmentNumber(rec.relation, rec.notes);

  const enriched = {
    ...rec,
    fullName: cleanFull,
    normFull,
    normFirst,
    normLast,
    birthYear: bYear,
    birthDayMonth: dm,
    maidenName: maiden,
    apartment: apt,
    locality: normalizeLocality(rec.locality || 'Dlouhomilov', rec.houseId)
  };
  allRecords.push(enriched);
  recordById.set(enriched.id, enriched);
  return enriched;
}

// 2A. Záznamy z data/census_registry.js (Dlouhomilov a Medelské)
censusRegistryData.forEach(r => {
  addRecord({
    id: r.id,
    sourceGroup: 'dlouhomilov_census',
    sourceTypeLabel: `Sčítání lidu ${r.censusYear}`,
    recordKind: 'census',
    year: Number(r.censusYear) || 1910,
    locality: r.houseId && r.houseId.startsWith('medelske') ? 'Medelské' : (r.houseId && r.houseId.includes('benkov') ? 'Benkov' : 'Dlouhomilov'),
    houseNumber: String(r.houseNumber || ''),
    houseId: r.houseId || `cp${r.houseNumber}`,
    fullName: r.fullName,
    firstName: r.firstName,
    lastName: r.lastName,
    birthDate: r.birthDate || '-',
    birthPlace: r.birthPlace || 'Dlouhomilov',
    relation: r.relation || 'člen domácnosti',
    occupation: r.occupation || '-',
    categoryKey: r.categoryKey || 'ostatni',
    categoryLabel: r.categoryLabel || 'Obyvatel obce',
    categoryIcon: r.categoryIcon || '👤',
    notes: r.notes || '',
    scanFile: r.scanFile || '',
    scanTitle: r.scanTitle || ''
  });
});

// Obohacení čp. 29 o poznámky revize z cleaned_genealogy_data_29.csv
const f29 = path.join(__dirname, 'assets/archives/cp29/cleaned_genealogy_data_29.csv');
if (fs.existsSync(f29)) {
  const rows29 = parseCSV(f29);
  rows29.forEach(r => {
    const y = parseInt(r['Datum záznamu'], 10);
    const fn = `${r['Jméno'] || ''} ${r['Příjmení'] || ''}`.trim();
    const rev = r['Stav Revize'] || '';
    if (y && fn && rev) {
      const match = allRecords.find(x => x.houseId === 'cp29' && x.year === y && x.fullName === fn);
      if (match && !match.notes.includes(rev)) {
        match.reviewNote = rev;
      }
    }
  });
}

// 2B. Matriční a pozemkové události z data/people.js
let matCounter = 1;
peopleData.forEach(p => {
  (p.events || []).forEach(ev => {
    const isCensus = /sčítání/i.test(ev.type || '');
    if (isCensus) return;
    const evYear = extractBirthYear(ev.year) || extractBirthYear(ev.date) || Number(p.birthYear) || 1850;
    const nameParts = p.name.replace(/^JUDr\.\s*/i, '').trim().split(/\s+/);
    const fName = nameParts[0] || '';
    const lName = nameParts.slice(1).join(' ') || '';
    addRecord({
      id: `mat_${matCounter++}`,
      seedPersonId: p.id,
      sourceGroup: 'matriky',
      sourceTypeLabel: `Matrika / Archiv (${ev.type})`,
      recordKind: ev.type === 'Narození' ? 'birth' : (ev.type === 'Sňatek' ? 'marriage' : (ev.type === 'Úmrtí' ? 'death' : 'land_record')),
      year: evYear,
      locality: p.houseId && p.houseId.startsWith('medelske') ? 'Medelské' : 'Dlouhomilov',
      houseNumber: String(p.houseNumber || ''),
      houseId: p.houseId || `cp${p.houseNumber}`,
      fullName: p.name,
      firstName: fName,
      lastName: lName,
      birthDate: p.birthYear || '-',
      birthPlace: ev.place || 'Dlouhomilov',
      relation: ev.type || 'Matriční zápis',
      occupation: p.role || '-',
      categoryKey: p.categoryKey || 'grunt',
      categoryLabel: p.categoryLabel || 'Držitel gruntu / Hospodář',
      categoryIcon: p.categoryIcon || '📜',
      notes: `${ev.description || ''}${ev.translation ? ' | Překlad: ' + ev.translation : ''}`,
      fatherHint: p.father || null,
      motherHint: p.mother || null,
      spouseHint: p.spouse || null,
      scanFile: ev.scanFile || '',
      scanTitle: ev.scanTitle || `${ev.type} – ${p.name} (${ev.year})`
    });
  });
});

// 2C. Matriční a pozemkové milníky jednotlivých osob z data/houses.js (všech 56 stavení)
housesData.forEach(h => {
  const houseLoc = h.id && h.id.startsWith('medelske') ? 'Medelské' : (h.id && h.id.includes('benkov') ? 'Benkov' : 'Dlouhomilov');
  (h.timeline || []).forEach(t => {
    const evText = t.event || '';
    const ownerText = t.owner || '';
    if (/sčítání/i.test(evText)) return;
    if (/památková ochrana|kulturní památka|svobodný rychtář|dědičný rychtář|sedlák čp\.|stavení čp\.|usedlost čp\.|výměna držitelů|kaplička|kostel|farnost|farní úřad|obec |místní školní|osada medelské|domkář čp\.|hospodář čp\.|chalupník čp\.|majitel domu čp\.|selský grunt|domkářské stavení|venkovská chalupa|hospodář ve svahu|duchovní správa|stabilní katastr|vznik čp\./i.test(ownerText)) {
      return;
    }

    const yearMatch = String(t.year || '').match(/\b(1[6789]\d\d|19[01234]\d)\b/);
    if (!yearMatch) return;
    const evYear = parseInt(yearMatch[1], 10);

    let recKind = 'parish_event';
    let labelPrefix = 'Matriční / archivní záznam';
    if (/sňatek|svatba|oženil|provdala|×/i.test(`${ownerText} ${evText}`)) {
      recKind = 'marriage';
      labelPrefix = `Matrika oddaných (${evYear})`;
    } else if (/úmrtí|umírá|zemřel|†/i.test(`${ownerText} ${evText}`)) {
      recKind = 'death';
      labelPrefix = `Matrika zemřelých (${evYear})`;
    } else if (/narození|narodil/i.test(`${ownerText} ${evText}`)) {
      recKind = 'birth';
      labelPrefix = `Matrika narozených (${evYear})`;
    } else if (/katastr|gruntovní|koupě/i.test(`${ownerText} ${evText}`)) {
      recKind = 'land_record';
      labelPrefix = `Katastr / Gruntovnice (${evYear})`;
    } else if (/příchod|přistěhování|návrat/i.test(`${ownerText} ${evText}`)) {
      recKind = 'migration_record';
      labelPrefix = `Domovský / matriční záznam příchodu (${evYear})`;
    }

    const rawPersons = ownerText
      .replace(/^(Úmrtí hospodáře|Sňatky synů|Úmrtí)\s+/i, '')
      .split(/\s*(?:×|&|\ba\b|,)\s*/)
      .map(s => s.trim())
      .filter(s => s.length >= 4 && !/^(rodina|rod|faráři|dvojitá)/i.test(s));

    rawPersons.forEach(pStr => {
      const bYearMatch = pStr.match(/\*(\d{4})/);
      const bYear = bYearMatch ? parseInt(bYearMatch[1], 10) : extractBirthYear('', evText, null);
      const cleanName = pStr
        .replace(/\(.*?\)/g, '')
        .replace(/\b(st|ml|kolářský mistr)\.?/gi, '')
        .trim();

      const words = cleanName.split(/\s+/).filter(Boolean);
      if (words.length < 2) return;

      const fName = words[0];
      const lName = words.slice(1).join(' ');

      const normCandidate = normalizeNameToken(cleanName);
      const alreadyExists = allRecords.some(r =>
        r.sourceGroup === 'matriky' &&
        r.year === evYear &&
        r.houseId === h.id &&
        r.normFull === normCandidate
      );
      if (alreadyExists) return;

      addRecord({
        id: `mat_${matCounter++}`,
        sourceGroup: 'matriky',
        sourceTypeLabel: labelPrefix,
        recordKind: recKind,
        year: evYear,
        locality: houseLoc,
        houseNumber: String(h.number || ''),
        houseId: h.id,
        fullName: cleanName,
        firstName: fName,
        lastName: lName,
        birthYear: bYear,
        birthDate: bYear ? `*${bYear}` : '-',
        birthPlace: houseLoc,
        relation: recKind === 'marriage' ? 'Sňatek' : (recKind === 'death' ? 'Úmrtí' : (recKind === 'birth' ? 'Narození' : 'Držba / Pobyt')),
        occupation: h.localName || '-',
        categoryKey: 'grunt',
        categoryLabel: 'Matriční / Gruntovní záznam',
        categoryIcon: recKind === 'marriage' ? '💍' : (recKind === 'death' ? '✝️' : '📜'),
        notes: evText,
        scanFile: t.scanFile || '',
        scanTitle: t.scanTitle || `${labelPrefix} – ${cleanName} (${houseLoc} čp. ${h.number})`
      });
    });
  });
});

// 2D. Samostatné matriční listiny z Dokumenty_Berkove se vztahem k Dlouhomilovu
const explicitDlouhomilovParishDocs = [
  {
    year: 1879,
    recordKind: 'birth',
    sourceTypeLabel: 'Matrika narozených Dlouhomilov (1879)',
    locality: 'Dlouhomilov',
    houseNumber: '22',
    houseId: 'cp22',
    fullName: 'Josef Dvořák',
    firstName: 'Josef',
    lastName: 'Dvořák',
    birthDate: '3. 6. 1879',
    birthPlace: 'Dlouhomilov čp. 22',
    relation: 'Narozený syn',
    occupation: 'Syn sedláka Josefa Dvořáka (*1857) a Anny roz. Kouřilové (*1857)',
    categoryKey: 'grunt',
    categoryLabel: 'Držitel gruntu / Hospodář',
    categoryIcon: '📜',
    seedPersonId: 'p_josef_dvorak_1877',
    notes: 'Kniha narozených: Josef Dvořák, narozen 3. 6. 1879 v Dlouhomilově čp. 22, později převzal grunt čp. 29.',
    scanFile: 'assets/archives/matriky/N_inv_c_8361_sig_Za_II_3_1864_-_1890_Dlouhomilov-_Horni_Olesna-_Dolni_Olesna_0089.jpg',
    scanTitle: 'Kniha narozených (3. 6. 1879) – Josef Dvořák čp. 22'
  },
  {
    year: 1888,
    recordKind: 'birth',
    sourceTypeLabel: 'Matrika narozených Bludov (1888) – hospodyně z čp. 29',
    locality: 'Dlouhomilov',
    houseNumber: '29',
    houseId: 'cp29',
    fullName: 'Amálie Vincencia Motyková',
    firstName: 'Amálie',
    lastName: 'Motyková',
    birthDate: '18. 7. 1888',
    birthPlace: 'Bludov čp. 224',
    relation: 'Narození budoucí hospodyně na čp. 29',
    occupation: 'Od sňatku 15. 7. 1907 hospodyně v Dlouhomilově čp. 29',
    categoryKey: 'rodina',
    categoryLabel: 'Člen rodiny hospodáře',
    categoryIcon: '📜',
    seedPersonId: 'p_amalie_dvorakova_1878',
    notes: 'Křestní list (Bludov čp. 224): Amálie Vincencia Motyková (*18. 7. 1888), provdaná roku 1907 do Dlouhomilova čp. 29 za Josefa Dvořáka (*1879).',
    scanFile: '',
    scanTitle: 'Křestní list (18. 7. 1888) – Amálie Vincencia Motyková'
  },
  {
    year: 1920,
    recordKind: 'marriage',
    sourceTypeLabel: 'Sňatek a odchod z Dlouhomilova čp. 46 do Zábřeha (1920)',
    locality: 'Dlouhomilov',
    houseNumber: '46',
    houseId: 'cp46',
    fullName: 'Aloisie Berková roz. Dvořáková',
    firstName: 'Aloisie',
    lastName: 'Berková',
    maidenName: 'dvorak',
    birthDate: '27. 5. 1896',
    birthPlace: 'Dlouhomilov čp. 46',
    relation: 'Dcera z čp. 46 / Nevěsta (1920)',
    occupation: 'Provdaná za železničního zřízence Jaroslava Berku (*1894)',
    categoryKey: 'rodina',
    categoryLabel: 'Člen rodiny hospodáře',
    categoryIcon: '💍',
    notes: 'Rodačka z Dlouhomilova čp. 46 (dcera Jana Dvořáka *1873 a Aloisie *1873), v r. 1920 provdána za Jaroslava Berku (*1894), společně žili v Zábřehu Nádražní čp. 43 (syn Jaroslav Vojtěch Berka *15. 6. 1920).',
    scanFile: '',
    scanTitle: 'Matriční záznam (1920) – Aloisie Berková roz. Dvořáková (*1896 Dlouhomilov čp. 46)'
  }
];

explicitDlouhomilovParishDocs.forEach(doc => {
  const already = allRecords.some(r => r.seedPersonId && r.seedPersonId === doc.seedPersonId && r.year === doc.year && r.recordKind === doc.recordKind);
  if (!already) {
    addRecord({
      id: `mat_${matCounter++}`,
      sourceGroup: 'matriky',
      ...doc
    });
  }
});

// ---------------------------------------------------------------------------
// 3. Načtení ověřeného přesunu rodiny Aloisie Berkové roz. Dvořákové z čp. 46
// ---------------------------------------------------------------------------
const berkoveDir = 'C:/Users/krapn/Dropbox/CV/!Rodokmen/Dokumenty_Berkove';
const externalCsvSources = [
  { file: 'Scitaci_archy/Zabreh/genealogicky-export-2026-02-17 (1).csv' }
];

let extCounter = 1;
const seenSignatures = new Set();

allRecords.forEach(r => {
  const sig = `${r.locality}|${r.houseNumber}|${r.year}|${r.normFull}|${r.birthYear || ''}`;
  seenSignatures.add(sig);
});

externalCsvSources.forEach(({ file }) => {
  const fullPath = path.join(berkoveDir, file);
  if (!fs.existsSync(fullPath)) return;
  const rows = parseCSV(fullPath);

  rows.forEach(r => {
    const firstName = (r.jmeno || '').trim();
    const lastName = (r.prijmeni || '').trim();
    if (!firstName || firstName === 'null' || !lastName || lastName === 'null') return;
    if (!/berk/i.test(lastName)) return;

    const fullName = `${firstName} ${lastName}`.trim();
    const rawYear = parseInt(r.rok_scitani, 10);
    if (!rawYear) return;

    const rawTown = r.obec_scitani || '';
    const houseNum = (r.cislo_domu && r.cislo_domu !== 'null') ? r.cislo_domu.trim().replace(/\s*\/\s*/g, '/') : '-';
    const locality = normalizeLocality(rawTown);
    const notes = (r.poznamka && r.poznamka !== 'null') ? r.poznamka : '';
    const rel = (r.vztah_k_hospodari && r.vztah_k_hospodari !== 'null') ? r.vztah_k_hospodari : '-';
    const occ = (r.povolani && r.povolani !== 'null') ? r.povolani : '-';
    const birthDate = (r.datum_narozeni && r.datum_narozeni !== 'null') ? r.datum_narozeni : '-';
    const birthPlace = (r.rodiste && r.rodiste !== 'null') ? r.rodiste : locality;

    const normFull = normalizeNameToken(fullName);
    const bYear = extractBirthYear(birthDate, notes, rawYear);

    const sig = `${locality}|${houseNum}|${rawYear}|${normFull}|${bYear || ''}`;
    if (seenSignatures.has(sig)) return;
    seenSignatures.add(sig);

    addRecord({
      id: `ext_${extCounter++}`,
      sourceGroup: 'regional_csv',
      sourceTypeLabel: `Sčítání ${rawYear} (${locality} – přesun z Dlouhomilova čp. 46)`,
      recordKind: 'census',
      year: rawYear,
      locality,
      houseNumber: houseNum,
      houseId: `zabreh_cp${houseNum}`,
      fullName,
      firstName,
      lastName,
      maidenName: /aloisie/i.test(firstName) ? 'dvorak' : null,
      birthDate: birthDate !== '-' ? birthDate : (bYear ? `cca ${bYear}` : '-'),
      birthPlace,
      relation: rel,
      occupation: occ,
      categoryKey: 'rodina',
      categoryLabel: 'Rodina z Dlouhomilova čp. 46',
      categoryIcon: '🚂',
      notes: `${notes} (Vazba na Dlouhomilov čp. 46 – rodina Aloisie Berkové roz. Dvořákové)`.trim(),
      scanFile: '',
      scanTitle: `Sčítací arch ${rawYear} – ${locality} čp. ${houseNum} (${fullName})`
    });
  });
});

console.log(`Celkem načteno primárních záznamů (Dlouhomilov, Medelské, Benkov): ${allRecords.length}`);

// ---------------------------------------------------------------------------
// 4. Vícekriteriální skórovací a shlukovací algoritmus (Entity Resolution)
// ---------------------------------------------------------------------------
const seedPersonLinks = {};

peopleData.forEach(p => {
  seedPersonLinks[p.id] = [];
  (p.linkedCensusIds || []).forEach(cid => {
    if (!seedPersonLinks[p.id].includes(cid)) seedPersonLinks[p.id].push(cid);
  });
});

allRecords.forEach(r => {
  if (r.seedPersonId && seedPersonLinks[r.seedPersonId]) {
    if (!seedPersonLinks[r.seedPersonId].includes(r.id)) {
      seedPersonLinks[r.seedPersonId].push(r.id);
    }
  }
});

function scoreRecordPair(a, b) {
  if (!a.normFirst || !b.normFirst) return { score: 0, reasons: [], conflict: true };
  if (a.normFirst !== b.normFirst) return { score: 0, reasons: [], conflict: true };

  const lastExact = a.normLast && b.normLast && a.normLast === b.normLast;
  const maidenMatch = (a.maidenName && a.maidenName === b.normLast) ||
                      (b.maidenName && b.maidenName === a.normLast);
  if (!lastExact && !maidenMatch) {
    return { score: 0, reasons: [], conflict: true };
  }

  const yearDiff = (a.birthYear && b.birthYear) ? Math.abs(a.birthYear - b.birthYear) : null;

  if (yearDiff !== null && yearDiff >= 11) {
    return {
      score: 25,
      isHomonymGeneration: true,
      reasons: [`Jmenovci z různých generací (rozdíl narození ${yearDiff} let: *${a.birthYear} vs *${b.birthYear})`],
      conflict: true
    };
  }

  if (a.recordKind === 'census' && b.recordKind === 'census' && a.year === b.year && a.locality === b.locality && a.houseNumber === b.houseNumber) {
    const relA = (a.relation || '').toLowerCase();
    const relB = (b.relation || '').toLowerCase();
    const oneIsChildOneIsHead = (relA.includes('syn') && (relB.includes('hospodář') || relB.includes('hlava') || relB.includes('majitel') || relB.includes('výměn'))) ||
                                (relB.includes('syn') && (relA.includes('hospodář') || relA.includes('hlava') || relA.includes('majitel') || relA.includes('výměn')));
    if (oneIsChildOneIsHead) {
      return {
        score: 20,
        isHomonymGeneration: true,
        reasons: [`Současný výskyt ve sčítání ${a.year} na čp. ${a.houseNumber} v rolích rodič vs. dítě`],
        conflict: true
      };
    }
  }

  let score = 0;
  const reasons = [];

  if (lastExact) {
    score += 40;
    reasons.push(`Shoda jména (${a.fullName} ↔ ${b.fullName})`);
  } else if (maidenMatch) {
    score += 38;
    reasons.push(`Shoda křestního a rodného příjmení po sňatku (${a.fullName} ↔ ${b.fullName})`);
  }

  if (a.birthDayMonth && b.birthDayMonth && a.birthDayMonth === b.birthDayMonth && yearDiff !== null && yearDiff <= 2) {
    score += 38;
    reasons.push(`Přesná shoda dne a měsíce narození (${a.birthDayMonth})`);
  } else if (yearDiff !== null) {
    if (yearDiff === 0) {
      score += 30;
      reasons.push(`Přesná shoda roku narození (*${a.birthYear})`);
    } else if (yearDiff === 1) {
      score += 24;
      reasons.push(`Blízký rok narození (*${a.birthYear} ↔ *${b.birthYear}, odchylka 1 rok)`);
    } else if (yearDiff <= 3) {
      score += 15;
      reasons.push(`Tolerovaná dobová odchylka roku narození (*${a.birthYear} ↔ *${b.birthYear})`);
    } else if (yearDiff <= 5) {
      score += 5;
      reasons.push(`Větší odchylka roku narození (*${a.birthYear} ↔ *${b.birthYear})`);
    } else {
      score -= 20;
    }
  }

  if (a.locality === b.locality && a.houseNumber && b.houseNumber && a.houseNumber === b.houseNumber && a.houseNumber !== '-') {
    score += 25;
    reasons.push(`Stejné stavení (${a.locality} čp. ${a.houseNumber})`);
  } else if (a.locality === b.locality) {
    score += 10;
    reasons.push(`Stejná obec (${a.locality}, přesun mezi čp. ${a.houseNumber} ↔ čp. ${b.houseNumber})`);
  } else if (
    (a.birthPlace && normalizeLocality(a.birthPlace) === b.locality) ||
    (b.birthPlace && normalizeLocality(b.birthPlace) === a.locality)
  ) {
    score += 14;
    reasons.push(`Migrační vazba rodiště ↔ bydliště (${a.locality} ↔ ${b.locality})`);
  }

  return {
    score: Math.max(0, Math.min(100, score)),
    isHomonymGeneration: false,
    reasons,
    conflict: false
  };
}

// ---------------------------------------------------------------------------
// 5. Sestavení clusterů identit osob
// ---------------------------------------------------------------------------
const recordClusterMap = new Map();
const clustersById = new Map();

peopleData.forEach(p => {
  const clusterId = p.id;
  const recIds = (seedPersonLinks[p.id] || []).filter(id => recordById.has(id));
  const clusterObj = {
    id: clusterId,
    isVerifiedProfile: true,
    personProfileId: p.id,
    canonicalName: p.name,
    birthYear: Number(p.birthYear) || null,
    deathYear: p.deathYear && p.deathYear !== '-' ? p.deathYear : null,
    lifeSpan: p.lifeSpan || `*${p.birthYear}`,
    primaryLocality: p.houseId && p.houseId.startsWith('medelske') ? 'Medelské' : 'Dlouhomilov',
    primaryHouseNumber: String(p.houseNumber || ''),
    primaryHouseId: p.houseId || `cp${p.houseNumber}`,
    categoryKey: p.categoryKey || 'grunt',
    categoryLabel: p.categoryLabel || 'Držitel gruntu / Hospodář',
    categoryIcon: p.categoryIcon || '🏡',
    role: p.role || '',
    father: p.father || null,
    mother: p.mother || null,
    spouse: p.spouse || null,
    children: p.children || [],
    biography: p.biography || '',
    recordIds: [...recIds],
    confidence: 99,
    matchReasons: ['Ověřený biografický a matriční profil (people.js)']
  };
  clustersById.set(clusterId, clusterObj);
  recIds.forEach(rid => recordClusterMap.set(rid, clusterId));
});

const unclustered = allRecords.filter(r => !recordClusterMap.has(r.id));

unclustered.forEach(rec => {
  let bestCluster = null;
  let bestScore = 0;

  for (const cl of clustersById.values()) {
    const memberRecs = cl.recordIds.map(id => recordById.get(id)).filter(Boolean);
    let hasConflict = false;
    let maxSim = 0;
    for (const m of memberRecs) {
      const sim = scoreRecordPair(rec, m);
      if (sim.conflict && sim.isHomonymGeneration) {
        hasConflict = true;
        break;
      }
      if (sim.score > maxSim) maxSim = sim.score;
    }
    if (!hasConflict && maxSim >= 84 && maxSim > bestScore) {
      bestScore = maxSim;
      bestCluster = cl;
    }
  }

  if (bestCluster) {
    bestCluster.recordIds.push(rec.id);
    recordClusterMap.set(rec.id, bestCluster.id);
  }
});

const remaining = allRecords.filter(r => !recordClusterMap.has(r.id));
let autoClusterCounter = 1;

const allCandidateEdges = [];
for (let i = 0; i < allRecords.length; i++) {
  for (let j = i + 1; j < allRecords.length; j++) {
    const a = allRecords[i];
    const b = allRecords[j];
    const sim = scoreRecordPair(a, b);
    if (sim.score >= 50 || sim.isHomonymGeneration) {
      allCandidateEdges.push({
        recA: a.id,
        recB: b.id,
        score: sim.score,
        isHomonymGeneration: sim.isHomonymGeneration,
        reasons: sim.reasons,
        conflict: sim.conflict
      });
    }
  }
}

const mergeEdges = allCandidateEdges
  .filter(e => !e.conflict && e.score >= 75)
  .sort((x, y) => y.score - x.score);

const tempClusters = new Map();
remaining.forEach(r => {
  const cid = `cl_auto_${autoClusterCounter++}`;
  tempClusters.set(cid, {
    id: cid,
    recordIds: [r.id],
    reasons: new Set()
  });
  recordClusterMap.set(r.id, cid);
});

function canMergeClusters(clA, clB) {
  if (clA.isVerifiedProfile && clB.isVerifiedProfile) return false;
  const recsA = clA.recordIds.map(id => recordById.get(id)).filter(Boolean);
  const recsB = clB.recordIds.map(id => recordById.get(id)).filter(Boolean);

  for (const a of recsA) {
    for (const b of recsB) {
      const sim = scoreRecordPair(a, b);
      if (sim.isHomonymGeneration) return false;
      if (a.birthYear && b.birthYear && Math.abs(a.birthYear - b.birthYear) >= 8) return false;
      if (a.recordKind === 'census' && b.recordKind === 'census' && a.year === b.year && a.locality === b.locality && a.houseNumber === b.houseNumber && a.id !== b.id) {
        if (a.birthYear && b.birthYear && Math.abs(a.birthYear - b.birthYear) > 2) {
          return false;
        }
        const relA = (a.relation || '').toLowerCase();
        const relB = (b.relation || '').toLowerCase();
        if ((relA.includes('syn') && relB.includes('hospodář')) || (relB.includes('syn') && relA.includes('hospodář'))) {
          return false;
        }
      }
    }
  }
  return true;
}

mergeEdges.forEach(edge => {
  const cidA = recordClusterMap.get(edge.recA);
  const cidB = recordClusterMap.get(edge.recB);
  if (!cidA || !cidB || cidA === cidB) return;

  const clA = clustersById.get(cidA) || tempClusters.get(cidA);
  const clB = clustersById.get(cidB) || tempClusters.get(cidB);
  if (!clA || !clB) return;

  if (!canMergeClusters(clA, clB)) return;

  if (clA.isVerifiedProfile) {
    clB.recordIds.forEach(rid => {
      clA.recordIds.push(rid);
      recordClusterMap.set(rid, clA.id);
    });
    tempClusters.delete(cidB);
  } else if (clB.isVerifiedProfile) {
    clA.recordIds.forEach(rid => {
      clB.recordIds.push(rid);
      recordClusterMap.set(rid, clB.id);
    });
    tempClusters.delete(cidA);
  } else {
    clB.recordIds.forEach(rid => {
      clA.recordIds.push(rid);
      recordClusterMap.set(rid, clA.id);
    });
    edge.reasons.forEach(r => clA.reasons.add(r));
    if (clB.reasons) clB.reasons.forEach(r => clA.reasons.add(r));
    tempClusters.delete(cidB);
  }
});

let finalAutoIdx = 1;
for (const tc of tempClusters.values()) {
  const recs = tc.recordIds.map(id => recordById.get(id)).filter(Boolean).sort((a, b) => a.year - b.year);
  if (recs.length === 0) continue;

  const censusRecs = recs.filter(r => r.recordKind === 'census');
  const latestRec = censusRecs.length > 0 ? censusRecs[censusRecs.length - 1] : recs[recs.length - 1];
  const birthYears = recs.map(r => r.birthYear).filter(Boolean);
  const bYear = birthYears.length > 0 ? birthYears[0] : null;
  const years = [...new Set(recs.map(r => r.year))].sort((a, b) => a - b);

  const adultRec = recs.find(r => r.categoryKey !== 'dite' && r.categoryKey !== 'ostatni') || latestRec;

  const newId = `cl_${String(finalAutoIdx++).padStart(3, '0')}`;
  tc.recordIds.forEach(rid => recordClusterMap.set(rid, newId));

  clustersById.set(newId, {
    id: newId,
    isVerifiedProfile: false,
    personProfileId: null,
    canonicalName: latestRec.fullName,
    birthYear: bYear,
    deathYear: null,
    lifeSpan: bYear ? `*${bYear} (doloženo ${years[0]}–${years[years.length - 1]})` : `Doloženo ${years.join(', ')}`,
    primaryLocality: latestRec.locality,
    primaryHouseNumber: latestRec.houseNumber,
    primaryHouseId: latestRec.houseId,
    categoryKey: adultRec.categoryKey,
    categoryLabel: adultRec.categoryLabel,
    categoryIcon: adultRec.categoryIcon,
    role: adultRec.occupation && adultRec.occupation !== '-' ? adultRec.occupation : adultRec.relation,
    father: null,
    mother: null,
    spouse: null,
    children: [],
    biography: recs.length > 1
      ? `Sjednocený cluster osoby (${recs.length} záznamů v letech ${years.join(', ')}).`
      : `Archivní záznam z roku ${latestRec.year} (${latestRec.locality} čp. ${latestRec.houseNumber}).`,
    recordIds: tc.recordIds,
    confidence: recs.length > 1 ? 90 : 75,
    matchReasons: tc.reasons.size > 0 ? [...tc.reasons] : ['Jednotlivý výskyt v pramenech']
  });
}

// ---------------------------------------------------------------------------
// 6. Výpočet demografických a typologických rysů pro každý cluster
// ---------------------------------------------------------------------------
const allIdentityClusters = [...clustersById.values()].map(cl => {
  const recs = cl.recordIds.map(id => recordById.get(id)).filter(Boolean).sort((a, b) => a.year - b.year);
  const years = [...new Set(recs.map(r => r.year))].sort((a, b) => a - b);
  const houses = [];
  const localities = [];
  recs.forEach(r => {
    const hKey = `${r.locality} čp. ${r.houseNumber}`;
    if (r.houseNumber && r.houseNumber !== '-' && !houses.includes(hKey)) {
      houses.push(hKey);
    }
    if (r.locality && !localities.includes(r.locality)) {
      localities.push(r.locality);
    }
  });

  const variantNames = [...new Set(recs.map(r => r.fullName))];
  const birthPlaces = [...new Set(recs.map(r => r.birthPlace).filter(bp => bp && bp !== '-'))];
  const birthPlaceNorm = birthPlaces.length > 0 ? normalizeLocality(birthPlaces[0]) : cl.primaryLocality;
  const isNative = birthPlaceNorm === cl.primaryLocality;
  const isMigrant = houses.length > 1 || localities.length > 1 || !isNative;
  const spanYears = years.length > 1 ? (years[years.length - 1] - years[0]) : 0;

  let archetypeKey = 'rodinne_zazemi';
  let archetypeLabel = 'Stabilní rodinné zázemí a děti na gruntech';
  let archetypeColor = '#0284c7';

  const allText = recs.map(r => `${r.relation} ${r.occupation} ${r.notes} ${r.categoryKey}`).join(' ').toLowerCase();

  if (cl.categoryKey === 'grunt' || /grunt|sedlák|rolník na vlastním|dědičný rychtář|hausbesitzer|grundbesitzer|malorolník|malozemědělec/.test(allText)) {
    archetypeKey = 'sedlaci_grunty';
    archetypeLabel = 'Držitelé gruntů a kmenoví hospodáři';
    archetypeColor = '#059669';
  } else if (cl.categoryKey === 'vymenek' || /výměn|ausgeding|auszügler/.test(allText)) {
    archetypeKey = 'vymenkari_generace';
    archetypeLabel = 'Výměnkáři a generace předávající grunt';
    archetypeColor = '#57534e';
  } else if (cl.categoryKey === 'celed' || /čeled|služeb|pacholek|děvečk|pohůnek|knecht|taglöhner|nádení/.test(allText)) {
    archetypeKey = 'mobilni_celed';
    archetypeLabel = 'Mobilní zemědělská čeleď a služebnictvo';
    archetypeColor = '#d97706';
  } else if (/oberleit|seidl|bělič|tkadl|přadlen|předení|továrn|železni|topírn|učeň|zámečník|kovář|mlynář|obuvník|zedník|krejč|kolář|tesař|hrnčíř|stolař|weber|weberei|spuler/.test(allText) || cl.categoryKey === 'remeslo') {
    archetypeKey = 'prumysl_remeslo';
    archetypeLabel = 'Textilní dělníci (Oberleithner, Seidl), železničáři a řemeslníci';
    archetypeColor = '#2563eb';
  } else if (cl.categoryKey === 'vzdelanec' || /jurist|doktor|advokát|učitel|řídící|farář|kněz|student|reálk|poštovní|poštmistr/.test(allText)) {
    archetypeKey = 'inteligence_sprava';
    archetypeLabel = 'Vzdělanci, duchovní, učitelé, poštovní úředníci a studenti';
    archetypeColor = '#4f46e5';
  } else if (cl.categoryKey === 'podruh' || /domkař|domkar|podruh|podnájem/.test(allText)) {
    archetypeKey = 'domkari_podruzi';
    archetypeLabel = 'Domkáři, chalupníci a podruzi';
    archetypeColor = '#ea580c';
  }

  const socioScoreMap = {
    'grunt': 85,
    'vzdelanec': 92,
    'vymenek': 72,
    'remeslo': 60,
    'rodina': 52,
    'podruh': 38,
    'celed': 25,
    'dite': 45,
    'ostatni': 40
  };
  const baseSocio = socioScoreMap[cl.categoryKey] || 45;
  const mobilityIndex = Math.min(100, (houses.length - 1) * 35 + (isNative ? 0 : 30) + (localities.length - 1) * 25);

  return {
    ...cl,
    recordCount: recs.length,
    censusCount: recs.filter(r => r.recordKind === 'census').length,
    parishCount: recs.filter(r => r.recordKind !== 'census').length,
    yearsObserved: years,
    firstYear: years[0] || 1900,
    lastYear: years[years.length - 1] || 1900,
    spanYears,
    housesVisited: houses,
    localitiesVisited: localities,
    distinctHousesCount: houses.length,
    variantNames,
    birthPlace: birthPlaces[0] || cl.primaryLocality,
    birthPlaceNorm,
    isNative,
    isMigrant,
    archetypeKey,
    archetypeLabel,
    archetypeColor,
    features: {
      birthYearNum: cl.birthYear || (years[0] ? years[0] - 25 : 1875),
      socioStatusIndex: baseSocio,
      mobilityIndex,
      longevityInSources: spanYears,
      recordDensity: recs.length
    }
  };
});

allIdentityClusters.sort((a, b) => {
  if (a.isVerifiedProfile !== b.isVerifiedProfile) return a.isVerifiedProfile ? -1 : 1;
  if (b.recordCount !== a.recordCount) return b.recordCount - a.recordCount;
  return (a.birthYear || 9999) - (b.birthYear || 9999);
});

const clusterByIdMap = new Map(allIdentityClusters.map(c => [c.id, c]));

// ---------------------------------------------------------------------------
// 7. Fronta kandidátů pro interaktivní revizi
// ---------------------------------------------------------------------------
const clusterPairSuggestions = [];
const seenClusterPairs = new Set();

allCandidateEdges.forEach(edge => {
  const cidA = recordClusterMap.get(edge.recA);
  const cidB = recordClusterMap.get(edge.recB);
  if (!cidA || !cidB || cidA === cidB) return;

  const pairKey = [cidA, cidB].sort().join('::');
  if (seenClusterPairs.has(pairKey)) return;
  seenClusterPairs.add(pairKey);

  const clA = clusterByIdMap.get(cidA);
  const clB = clusterByIdMap.get(cidB);
  if (!clA || !clB) return;

  clusterPairSuggestions.push({
    id: `sug_${clusterPairSuggestions.length + 1}`,
    clusterIdA: clA.id,
    clusterIdB: clB.id,
    nameA: clA.canonicalName,
    nameB: clB.canonicalName,
    birthYearA: clA.birthYear,
    birthYearB: clB.birthYear,
    houseA: `${clA.primaryLocality} čp. ${clA.primaryHouseNumber}`,
    houseB: `${clB.primaryLocality} čp. ${clB.primaryHouseNumber}`,
    score: edge.score,
    relationType: edge.isHomonymGeneration ? 'homonym_generation' : 'candidate_merge',
    reasons: edge.reasons
  });
});

clusterPairSuggestions.sort((a, b) => b.score - a.score);

// ---------------------------------------------------------------------------
// 8. SESTAVENÍ HETEROGENNÍHO GFU VZÁJEMNÝCH ZÁVISLOSTÍ (knowledgeGraph)
// ---------------------------------------------------------------------------
const graphNodes = [];
const graphNodeById = new Map();
const graphEdges = [];
const seenGraphEdgeKeys = new Set();

function addGraphNode(node) {
  if (graphNodeById.has(node.id)) return graphNodeById.get(node.id);
  const fullNode = {
    degree: 0,
    inDegree: 0,
    outDegree: 0,
    ...node
  };
  graphNodes.push(fullNode);
  graphNodeById.set(fullNode.id, fullNode);
  return fullNode;
}

function addGraphEdge(source, target, edgeType, label, metadata = {}) {
  if (!source || !target || source === target) return null;
  if (!graphNodeById.has(source) || !graphNodeById.has(target)) return null;

  // Pro symetrické hrany (SPOUSE_OF, SIBLING_OF, CLAN_ALLIANCE) kanonizovat pořadí pro deduplikaci
  const isSymmetric = edgeType === 'SPOUSE_OF' || edgeType === 'SIBLING_OF' || edgeType === 'CLAN_ALLIANCE';
  const key = isSymmetric
    ? `${[source, target].sort().join('<->')}|${edgeType}`
    : `${source}->${target}|${edgeType}|${metadata.year || ''}`;

  if (seenGraphEdgeKeys.has(key)) return null;
  seenGraphEdgeKeys.add(key);

  const edgeObj = {
    id: `ge_${graphEdges.length + 1}`,
    source,
    target,
    edgeType,
    label,
    ...metadata
  };
  graphEdges.push(edgeObj);

  const srcNode = graphNodeById.get(source);
  const tgtNode = graphNodeById.get(target);
  if (srcNode) { srcNode.degree++; srcNode.outDegree++; }
  if (tgtNode) { tgtNode.degree++; tgtNode.inDegree++; }
  return edgeObj;
}

// 8A. Uzly stavení (house)
housesData.forEach(h => {
  const loc = h.id && h.id.startsWith('medelske') ? 'Medelské' : (h.id && h.id.includes('benkov') ? 'Benkov' : 'Dlouhomilov');
  addGraphNode({
    id: `house_${h.id}`,
    nodeType: 'house',
    houseId: h.id,
    houseNumber: String(h.number || ''),
    locality: loc,
    label: `${loc} čp. ${h.number}`,
    subtitle: h.localName || `${loc} čp. ${h.number}`
  });
});

// Zajistit uzly domů i pro všechna čp. navštívená v záznamech
allRecords.forEach(r => {
  if (r.houseId) {
    addGraphNode({
      id: `house_${r.houseId}`,
      nodeType: 'house',
      houseId: r.houseId,
      houseNumber: String(r.houseNumber || ''),
      locality: r.locality,
      label: `${r.locality} čp. ${r.houseNumber}`,
      subtitle: `${r.locality} čp. ${r.houseNumber}`
    });
  }
});

// 8B. Uzly zaměstnavatelů / profesních skupin (employer)
const employerDefs = [
  { id: 'emp_oberleithner', label: 'Textilka Ed. Oberleithner a synové (Šumperk)', icon: '🏭', category: 'Průmysl' },
  { id: 'emp_seidl', label: 'Přádelna Ign. Seidla a spol. (Sudkov)', icon: '🧶', category: 'Průmysl' },
  { id: 'emp_building', label: 'Stavební a hrnčířské firmy (Adolf Berka Frankštát, Ing. H. Gässinger)', icon: '🧱', category: 'Stavebnictví' },
  { id: 'emp_foundry', label: 'Strojírny a slévárny v Postřelmově (Viktor Jossa, Josef Vítek)', icon: '⚙️', category: 'Průmysl' },
  { id: 'emp_flesch_sawmill', label: 'Parní pila Herman Flesch (Mor. Šumperk) a dřevoprůmysl', icon: '🌲', category: 'Průmysl' },
  { id: 'emp_csd', label: 'ČSD / Železnice a lokomotivní topírna', icon: '🚂', category: 'Doprava' },
  { id: 'emp_grunt', label: 'Samostatné rolnictví / Držba gruntu', icon: '🌾', category: 'Zemědělství' },
  { id: 'emp_service', label: 'Zemědělská čeleď a námezdní služba', icon: '🐎', category: 'Zemědělství' },
  { id: 'emp_crafts', label: 'Místní řemesla a živnosti (stolař, kolář, krejčí, zedník, kovář, obuvník)', icon: '🔨', category: 'Řemesla' },
  { id: 'emp_state_school_post', label: 'Národní škola, Poštovní úřad, Fara a správa', icon: '🎓', category: 'Správa & Vzdělání' },
  { id: 'emp_benkov_poor_fund', label: 'Chudinský fond obce Benkov (Armenfond)', icon: '🏚️', category: 'Veřejná podpora' },
  { id: 'emp_vymenek', label: 'Výměnek (odpočinek po předání gruntu)', icon: '👴', category: 'Výměnek' }
];
employerDefs.forEach(emp => {
  addGraphNode({
    id: emp.id,
    nodeType: 'employer',
    label: emp.label,
    icon: emp.icon,
    subtitle: emp.category
  });
});

// 8C. Uzly osob (person) + vazby na domy (RESIDES_AT), zaměstnavatele (WORKS_AT), rody (BELONGS_TO_CLAN) a obce původu (MIGRATED_BETWEEN)
const clanCounts = new Map();
allIdentityClusters.forEach(cl => {
  const recs = cl.recordIds.map(id => recordById.get(id)).filter(Boolean);
  const lastStem = recs[0]?.normLast || normalizeNameToken(cl.canonicalName.split(' ').slice(-1)[0]);
  if (lastStem) {
    clanCounts.set(lastStem, (clanCounts.get(lastStem) || 0) + 1);
  }
});

// Vytvořit uzly rodů s >= 3 členy
const clanDisplayNames = {
  'dvorak': 'Rod Dvořáků',
  'jilek': 'Rod Jílků / Žilků',
  'minar': 'Rod Minářů',
  'safar': 'Rod Šafářů',
  'kouril': 'Rod Kouřilů',
  'linhart': 'Rod Linhartů',
  'sindler': 'Rod Šindlerů',
  'vlcek': 'Rod Vlčků',
  'veprek': 'Rod Vepřeků',
  'hrubi': 'Rod Hrubých',
  'sladek': 'Rod Sládků',
  'merta': 'Rod Mertů',
  'hibl': 'Rod Hýblů',
  'konecni': 'Rod Konečných',
  'sokl': 'Rod Soklů',
  'kos': 'Rod Košů',
  'venos': 'Rod Vénosů / Venešů',
  'lukas': 'Rod Lukasů',
  'stupni': 'Rod Stupňů',
  'knir': 'Rod Knírů',
  'pospisil': 'Rod Pospíšilů',
  'lehar': 'Rod Leharů',
  'ptacek': 'Rod Ptáčků',
  'vitasek': 'Rod Vitásků',
  'mazurka': 'Rod Mazurků',
  'john': 'Rod Johnů',
  'boxan': 'Rod Boxanů',
  'podhorni': 'Rod Podhorných',
  'sadil': 'Rod Sadilů',
  'gecl': 'Rod Geclů',
  'katzer': 'Rod Katzerů / Katcerů',
  'katcer': 'Rod Katzerů / Katcerů',
  'ryznar': 'Rod Ryznarů',
  'clupni': 'Rod Člupných',
  'blazek': 'Rod Blažků',
  'korner': 'Rod Körnerů / Kernerů',
  'poisel': 'Rod Poiselů',
  'schon': 'Rod Schönů',
  'hornicek': 'Rod Horníčků',
  'kauer': 'Rod Kauerů',
  'novak': 'Rod Nováků',
  'urban': 'Rod Urbanů',
  'navratil': 'Rod Navrátilů',
  'dolezel': 'Rod Doleželů'
};

for (const [stem, cnt] of clanCounts.entries()) {
  if (cnt >= 3 || clanDisplayNames[stem]) {
    const label = clanDisplayNames[stem] || `Rod ${stem.charAt(0).toUpperCase() + stem.slice(1)}`;
    addGraphNode({
      id: `clan_${stem}`,
      nodeType: 'clan',
      clanStem: stem,
      label,
      subtitle: `${cnt} osob v databázi`
    });
  }
}

allIdentityClusters.forEach(cl => {
  addGraphNode({
    id: cl.id,
    nodeType: 'person',
    label: cl.canonicalName,
    birthYear: cl.birthYear,
    lifeSpan: cl.lifeSpan,
    categoryKey: cl.categoryKey,
    archetypeKey: cl.archetypeKey,
    archetypeColor: cl.archetypeColor,
    isVerified: cl.isVerifiedProfile,
    recordCount: cl.recordCount,
    primaryLocality: cl.primaryLocality,
    primaryHouseNumber: cl.primaryHouseNumber,
    subtitle: `${cl.lifeSpan} • ${cl.role || cl.categoryLabel}`
  });

  const recs = cl.recordIds.map(id => recordById.get(id)).filter(Boolean).sort((a, b) => a.year - b.year);

  // Vazba RESIDES_AT (Osoba ➔ Dům čp.)
  const byHouse = new Map();
  recs.forEach(r => {
    const hNodeId = `house_${r.houseId}`;
    if (!byHouse.has(hNodeId)) byHouse.set(hNodeId, { years: [], apts: new Set(), roles: new Set() });
    byHouse.get(hNodeId).years.push(r.year);
    if (r.apartment) byHouse.get(hNodeId).apts.add(`Byt ${r.apartment}`);
    if (r.relation) byHouse.get(hNodeId).roles.add(r.relation);
  });

  for (const [hNodeId, info] of byHouse.entries()) {
    const yrs = [...new Set(info.years)].sort().join(', ');
    addGraphEdge(cl.id, hNodeId, 'RESIDES_AT', `pobyt (${yrs})`, {
      years: info.years,
      apartments: [...info.apts]
    });
  }

  // Vazba MIGRATED_BETWEEN (přesuny mezi čp. a příchody z obcí původu)
  if (cl.birthPlaceNorm && !['Dlouhomilov', 'Medelské', 'Benkov'].includes(cl.birthPlaceNorm)) {
    const origId = `orig_${normalizeNameToken(cl.birthPlaceNorm).replace(/\s+/g, '_')}`;
    addGraphNode({
      id: origId,
      nodeType: 'origin',
      label: cl.birthPlaceNorm,
      subtitle: 'Obec původu / rodiště'
    });
    const firstHouseId = recs[0] ? `house_${recs[0].houseId}` : null;
    addGraphEdge(origId, cl.id, 'MIGRATED_FROM_ORIGIN', `původ: ${cl.birthPlaceNorm}`, {
      origin: cl.birthPlaceNorm
    });
    if (firstHouseId) {
      addGraphEdge(origId, firstHouseId, 'MIGRATED_BETWEEN', `příchod z ${cl.birthPlaceNorm}`, {
        personId: cl.id,
        personName: cl.canonicalName
      });
    }
  }

  for (let i = 0; i < recs.length - 1; i++) {
    const hA = `house_${recs[i].houseId}`;
    const hB = `house_${recs[i + 1].houseId}`;
    if (hA !== hB) {
      addGraphEdge(hA, hB, 'MIGRATED_BETWEEN', `přesun: ${cl.canonicalName} (${recs[i].year}➔${recs[i + 1].year})`, {
        personId: cl.id,
        personName: cl.canonicalName,
        fromYear: recs[i].year,
        toYear: recs[i + 1].year
      });
    }
  }

  // Vazba WORKS_AT (Osoba ➔ Zaměstnavatel / Obživa)
  const allOccText = recs.map(r => `${r.occupation} ${r.relation} ${r.notes}`).join(' ').toLowerCase();
  if (/oberleit/.test(allOccText)) {
    addGraphEdge(cl.id, 'emp_oberleithner', 'WORKS_AT', 'dělník / bělič / tkadlec u f. Oberleithner');
  }
  if (/seidl/.test(allOccText)) {
    addGraphEdge(cl.id, 'emp_seidl', 'WORKS_AT', 'přádelna Ign. Seidla v Sudkově');
  }
  if (/adolf berka|gässinger|gassinger/.test(allOccText)) {
    addGraphEdge(cl.id, 'emp_building', 'WORKS_AT', 'stavební / hrnčířská firma (Berka / Gässinger)');
  }
  if (/jossa|vítek|vitek/.test(allOccText)) {
    addGraphEdge(cl.id, 'emp_foundry', 'WORKS_AT', 'strojírna / slévárna v Postřelmově (Jossa / Vítek)');
  }
  if (/flesch|pila herman|parní pila/.test(allOccText)) {
    addGraphEdge(cl.id, 'emp_flesch_sawmill', 'WORKS_AT', 'parní pila Herman Flesch v Mor. Šumperku');
  }
  if (/železni|topírn|vlak|nádraž/.test(allOccText)) {
    addGraphEdge(cl.id, 'emp_csd', 'WORKS_AT', 'železniční služba / topírna');
  }
  if (/učitel|řídící|nadUčitel|pošt|farář|kněz|jurist|doktor|advokát/i.test(allOccText)) {
    addGraphEdge(cl.id, 'emp_state_school_post', 'WORKS_AT', cl.role || 'veřejná / duchovní správa');
  }
  if (/stolař|kolář|krejč|zedník|kovář|zámečník|tesař|obuvník|mlynář|hrnčíř/.test(allOccText)) {
    addGraphEdge(cl.id, 'emp_crafts', 'WORKS_AT', cl.role || 'řemeslná živnost');
  }
  if (/chudinský fond|ortsarmer|obecní chudý|armenfond/i.test(allOccText)) {
    addGraphEdge(cl.id, 'emp_benkov_poor_fund', 'WORKS_AT', 'obecní chudý / chudinský fond v Benkově');
  }
  if (cl.categoryKey === 'grunt') {
    addGraphEdge(cl.id, 'emp_grunt', 'WORKS_AT', 'samostatný hospodář / rolník');
  } else if (cl.categoryKey === 'celed') {
    addGraphEdge(cl.id, 'emp_service', 'WORKS_AT', 'zemědělská čeleď / služba');
  } else if (cl.categoryKey === 'vymenek') {
    addGraphEdge(cl.id, 'emp_vymenek', 'WORKS_AT', 'výměnkář na odpočinku');
  }

  // Vazba BELONGS_TO_CLAN (Osoba ➔ Rod)
  const lastStem = recs[recs.length - 1]?.normLast;
  if (lastStem && graphNodeById.has(`clan_${lastStem}`)) {
    addGraphEdge(cl.id, `clan_${lastStem}`, 'BELONGS_TO_CLAN', 'příslušnost k rodu');
  }
  const maidStem = recs.find(r => r.maidenName)?.maidenName;
  if (maidStem && maidStem !== lastStem && graphNodeById.has(`clan_${maidStem}`)) {
    addGraphEdge(cl.id, `clan_${maidStem}`, 'BELONGS_TO_CLAN', 'rodné příjmení (rozená)');
    if (lastStem && graphNodeById.has(`clan_${lastStem}`)) {
      addGraphEdge(`clan_${maidStem}`, `clan_${lastStem}`, 'CLAN_ALLIANCE', `sňatková aliance (${cl.canonicalName})`);
    }
  }
});

// 8D. AUTOMATICKÁ EXTRAKCE VZÁJEMNÝCH ZÁVISLOSTÍ UVNITŘ DOMÁCNOSTÍ A BYTŮ
// Seskupit sčítací záznamy podle (houseId, year, apartment)
const householdsMap = new Map();
allRecords.filter(r => r.recordKind === 'census').forEach(r => {
  const key = `${r.houseId}|${r.year}|${r.apartment || '1'}`;
  if (!householdsMap.has(key)) householdsMap.set(key, []);
  householdsMap.get(key).push(r);
});

for (const [hhKey, members] of householdsMap.entries()) {
  if (members.length < 2) continue;
  const [houseId, yearStr, apt] = hhKey.split('|');
  const year = parseInt(yearStr, 10);

  // Najít hlavu domácnosti / hospodáře / majitele bytu
  let headRec = members.find(m => /hlava|hospodář|majitel|vlastník|hospodyně na usedlosti|vdova po rolníku/i.test(m.relation)) || members[0];
  const headClusterId = recordClusterMap.get(headRec.id);
  if (!headClusterId) continue;

  // Najít manželku hospodáře
  const wifeRec = members.find(m => m.id !== headRec.id && /manželka|choť|žena/i.test(m.relation) && !/syn manželky|otec manželky|matka manželky/i.test(m.relation));
  const wifeClusterId = wifeRec ? recordClusterMap.get(wifeRec.id) : null;

  if (wifeClusterId && wifeClusterId !== headClusterId) {
    addGraphEdge(headClusterId, wifeClusterId, 'SPOUSE_OF', `manželé (${year}, čp. ${headRec.houseNumber})`, {
      year,
      houseId
    });
  }

  const childClusterIds = [];

  members.forEach(m => {
    if (m.id === headRec.id) return;
    const mClusterId = recordClusterMap.get(m.id);
    if (!mClusterId || mClusterId === headClusterId) return;

    const rel = (m.relation || '').toLowerCase();
    const occ = (m.occupation || '').toLowerCase();

    // 1. Děti hospodáře (syn, dcera, schovanec)
    if (/\b(syn|dcera|dítě)\b/.test(rel) && !/vnuk|vnučka|otec|matka|tchán|tchyně/.test(rel)) {
      addGraphEdge(headClusterId, mClusterId, 'PARENT_OF', `rodič ➔ dítě (${year})`, { year, houseId });
      if (wifeClusterId && wifeClusterId !== mClusterId) {
        addGraphEdge(wifeClusterId, mClusterId, 'PARENT_OF', `matka ➔ dítě (${year})`, { year, houseId });
      }
      childClusterIds.push(mClusterId);
    }
    // 2. Rodiče hospodáře (otec, matka na výměnku v téže domácnosti)
    else if (/\b(otec|matka)\b/.test(rel) && !/tchán|tchyně|manželky/.test(rel)) {
      addGraphEdge(mClusterId, headClusterId, 'PARENT_OF', `rodič (výměnkář) ➔ hospodář (${year})`, { year, houseId });
    }
    // 3. Tchán / Tchyně (rodiče manželky!)
    else if (/tchán|tchyně|otec manželky|matka manželky/.test(rel)) {
      if (wifeClusterId) {
        addGraphEdge(mClusterId, wifeClusterId, 'PARENT_OF', `rodič (tchán/tchyně) ➔ manželka (${year})`, { year, houseId });
      }
      addGraphEdge(headClusterId, mClusterId, 'HOUSEHOLD_DEPENDENCY', `zeť (hospodář) ➔ výměnek tchyně/tchána (${year})`, { year, houseId });
    }
    // 4. Sourozenci hospodáře (bratr, sestra)
    else if (/\b(bratr|sestra)\b/.test(rel)) {
      addGraphEdge(headClusterId, mClusterId, 'SIBLING_OF', `sourozenci (${year})`, { year, houseId });
    }
    // 5. Čeleď, služebnictvo, pomocníci, učni a podruzi závislí na hospodáři
    else if (/čeled|služ|děvečk|pacholek|pohůnek|pomocn|výměn|podruh|nájem/.test(`${rel} ${occ}`)) {
      addGraphEdge(headClusterId, mClusterId, 'HOUSEHOLD_DEPENDENCY', `hospodář ➔ ${m.relation} (${year})`, {
        year,
        houseId,
        dependencyRole: m.relation
      });
    }
  });

  // Propojit sourozence v téže domácnosti hranou SIBLING_OF
  for (let i = 0; i < childClusterIds.length; i++) {
    for (let j = i + 1; j < childClusterIds.length; j++) {
      addGraphEdge(childClusterIds[i], childClusterIds[j], 'SIBLING_OF', `sourozenci (${year}, čp. ${headRec.houseNumber})`, {
        year,
        houseId
      });
    }
  }
}

// 8E. Doplnit rodinné vazby z people.js a matričních sňatků v houses.js
allIdentityClusters.forEach(cl => {
  if (cl.father) {
    const fNorm = normalizeNameToken(cl.father);
    const fYear = extractBirthYear(cl.father);
    const matchFather = allIdentityClusters.find(other =>
      other.id !== cl.id &&
      other.canonicalName &&
      normalizeNameToken(other.canonicalName).includes(fNorm.split(' ')[0]) &&
      (!fYear || (other.birthYear && Math.abs(other.birthYear - fYear) <= 3))
    );
    if (matchFather) {
      addGraphEdge(matchFather.id, cl.id, 'PARENT_OF', 'otec ➔ dítě (matrika)');
    }
  }
  if (cl.spouse && cl.spouse !== 'Neuvedeno') {
    const sNorm = normalizeNameToken(cl.spouse);
    const matchSpouse = allIdentityClusters.find(other =>
      other.id !== cl.id &&
      normalizeNameToken(other.canonicalName) === sNorm
    );
    if (matchSpouse) {
      addGraphEdge(cl.id, matchSpouse.id, 'SPOUSE_OF', 'manželé (matrika)');
    }
  }
});

// Mezigenerační jmenovci na stejném čp.
clusterPairSuggestions
  .filter(s => s.relationType === 'homonym_generation' && s.houseA === s.houseB)
  .forEach(s => {
    const olderFirst = (s.birthYearA || 9999) < (s.birthYearB || 9999);
    const src = olderFirst ? s.clusterIdA : s.clusterIdB;
    const tgt = olderFirst ? s.clusterIdB : s.clusterIdA;
    addGraphEdge(src, tgt, 'PARENT_OF', `generační jmenovci na ${s.houseA} (*${olderFirst ? s.birthYearA : s.birthYearB} ➔ *${olderFirst ? s.birthYearB : s.birthYearA})`, {
      isHomonymLineage: true
    });
  });

// Obohatit každý cluster o seznam jeho přímých grafových závislostí (pro rychlé vykreslení v inspektoru)
allIdentityClusters.forEach(cl => {
  const incidentEdges = graphEdges.filter(e => e.source === cl.id || e.target === cl.id);
  cl.graphDegree = incidentEdges.length;
  cl.dependenciesSummary = incidentEdges.map(e => {
    const isOut = e.source === cl.id;
    const otherId = isOut ? e.target : e.source;
    const otherNode = graphNodeById.get(otherId);
    return {
      edgeId: e.id,
      edgeType: e.edgeType,
      direction: isOut ? 'out' : 'in',
      label: e.label,
      targetId: otherId,
      targetType: otherNode?.nodeType || 'unknown',
      targetLabel: otherNode?.label || otherId
    };
  });
});

// ---------------------------------------------------------------------------
// 9. Migrační toky a kompatibilita výstupu
// ---------------------------------------------------------------------------
const migrationFlows = [];
allIdentityClusters.forEach(cl => {
  const recs = cl.recordIds.map(id => recordById.get(id)).filter(Boolean).sort((a, b) => a.year - b.year);
  if (recs.length > 0) {
    const first = recs[0];
    const bpNorm = normalizeLocality(first.birthPlace);
    if (first.birthPlace && first.birthPlace !== '-' && bpNorm !== first.locality) {
      migrationFlows.push({
        clusterId: cl.id,
        personName: cl.canonicalName,
        birthYear: cl.birthYear,
        fromLabel: first.birthPlace,
        toLabel: `${first.locality} čp. ${first.houseNumber}`,
        year: first.year,
        flowType: 'immigration',
        role: cl.role
      });
    }
  }
  for (let i = 0; i < recs.length - 1; i++) {
    const cur = recs[i];
    const nxt = recs[i + 1];
    const curLoc = `${cur.locality} čp. ${cur.houseNumber}`;
    const nxtLoc = `${nxt.locality} čp. ${nxt.houseNumber}`;
    if (cur.houseNumber && nxt.houseNumber && cur.houseNumber !== '-' && nxt.houseNumber !== '-' && curLoc !== nxtLoc) {
      migrationFlows.push({
        clusterId: cl.id,
        personName: cl.canonicalName,
        birthYear: cl.birthYear,
        fromLabel: curLoc,
        toLabel: nxtLoc,
        fromYear: cur.year,
        year: nxt.year,
        flowType: 'house_move',
        role: nxt.occupation && nxt.occupation !== '-' ? nxt.occupation : nxt.relation
      });
    }
  }
});

const kinshipEdges = graphEdges
  .filter(e => ['PARENT_OF', 'SPOUSE_OF', 'SIBLING_OF', 'HOUSEHOLD_DEPENDENCY'].includes(e.edgeType))
  .map(e => ({
    source: e.source,
    target: e.target,
    type: e.edgeType.toLowerCase(),
    edgeType: e.edgeType,
    label: e.label
  }));

const multiRecordClustersCount = allIdentityClusters.filter(c => c.recordCount > 1).length;
console.log(`Vytvořeno ${allIdentityClusters.length} osobních clusterů (${multiRecordClustersCount} vícezáznamových).`);
console.log(`Sestaven heterogenní graf závislostí: ${graphNodes.length} uzlů a ${graphEdges.length} hran vzájemných závislostí!`);

const outputPayload = {
  generatedAt: new Date().toISOString(),
  stats: {
    totalRecords: allRecords.length,
    dlouhomilovCensusRecords: allRecords.filter(r => r.sourceGroup === 'dlouhomilov_census').length,
    parishRecords: allRecords.filter(r => r.sourceGroup === 'matriky').length,
    regionalCsvRecords: allRecords.filter(r => r.sourceGroup === 'regional_csv').length,
    totalIdentityClusters: allIdentityClusters.length,
    multiRecordClusters: multiRecordClustersCount,
    verifiedProfilesCount: allIdentityClusters.filter(c => c.isVerifiedProfile).length,
    candidatePairsCount: clusterPairSuggestions.length,
    migrationFlowsCount: migrationFlows.length,
    graphNodesCount: graphNodes.length,
    graphEdgesCount: graphEdges.length,
    kinshipAndHouseholdEdgesCount: kinshipEdges.length
  },
  records: allRecords,
  identityClusters: allIdentityClusters,
  candidatePairs: clusterPairSuggestions,
  migrationFlows,
  kinshipEdges,
  knowledgeGraph: {
    nodes: graphNodes,
    edges: graphEdges
  }
};

const jsContent = `/**
 * Automaticky generovaný datový soubor a kompletní graf vzájemných závislostí (cluster.html)
 * Strikně omezeno na Dlouhomilov, Medelské a Benkov.
 * Generováno skriptem build_clusters.js
 */
const clusterDataset = ${JSON.stringify(outputPayload, null, 2)};
`;

fs.writeFileSync(path.join(__dirname, 'data/cluster_dataset.js'), jsContent, 'utf8');
console.log('Úspěšně uloženo do data/cluster_dataset.js!');
