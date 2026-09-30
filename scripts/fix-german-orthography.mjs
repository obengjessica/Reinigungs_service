/**
 * Replaces ASCII German spellings with proper umlauts/ß.
 * Preserves route segments like /bueroreinigung-goettingen (URLs stay ASCII).
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

const SKIP_DIRS = new Set(["node_modules", ".next", ".git", "scripts"]);

const ROUTE_TOKEN =
  /\/(?:bueroreinigung|gebaeudereinigung|fensterreinigung|grundreinigung|reinigungsservice)-goettingen/g;

const REPLACEMENTS = [
  ["Reinigungsplaene", "Reinigungspläne"],
  ["reinigungsplaene", "reinigungspläne"],
  ["Kontaktmoeglichkeiten", "Kontaktmöglichkeiten"],
  ["Geschaeftskunden", "Geschäftskunden"],
  ["hartnaeckige", "hartnäckige"],
  ["Rueckstaende", "Rückstände"],
  ["Rueckmeldungen", "Rückmeldungen"],
  ["Rueckmeldung", "Rückmeldung"],
  ["zweiwoechentliche", "zweiwöchentliche"],
  ["zweiwoechentlichen", "zweiwöchentlichen"],
  ["woechentlichen", "wöchentlichen"],
  ["woechentlicher", "wöchentlicher"],
  ["woechentliche", "wöchentliche"],
  ["woechentlichem", "wöchentlichem"],
  ["Verfuegbarkeitspruefung", "Verfügbarkeitsprüfung"],
  ["Qualitaetskontrolle", "Qualitätskontrolle"],
  ["Qualitaetsstandards", "Qualitätsstandards"],
  ["Qualitaets", "Qualitäts"],
  ["qualitaets", "qualitäts"],
  ["Datenschutzerklaerung", "Datenschutzerklärung"],
  ["Datenuebertragbarkeit", "Datenübertragbarkeit"],
  ["Einschraenkung", "Einschränkung"],
  ["Loeschung", "Löschung"],
  ["Gewaehrleistung", "Gewährleistung"],
  ["Stabilitaet", "Stabilität"],
  ["Vervielfaeltigung", "Vervielfältigung"],
  ["ausserhalb", "außerhalb"],
  ["beduerfen", "bedürfen"],
  ["uebermittelte", "übermittelte"],
  ["uebermittelten", "übermittelten"],
  ["uebermittelt", "übermittelt"],
  ["ueberwachen", "überwachen"],
  ["Umstaenden", "Umständen"],
  ["Taetigkeit", "Tätigkeit"],
  ["uebernehmen", "übernehmen"],
  ["Gewaehr", "Gewähr"],
  ["gewaehr", "gewähr"],
  ["Sonderfaelle", "Sonderfälle"],
  ["Umzuege", "Umzüge"],
  ["Haeuser", "Häuser"],
  ["Zuverlaessige", "Zuverlässige"],
  ["Zuverlaessig", "Zuverlässig"],
  ["zuverlaessige", "zuverlässige"],
  ["zuverlaessigen", "zuverlässigen"],
  ["Einsaetze", "Einsätze"],
  ["Innenraeume", "Innenräume"],
  ["Wohnraeume", "Wohnräume"],
  ["regelmaessigem", "regelmäßigem"],
  ["regelmaessige", "regelmäßige"],
  ["Regelmaessige", "Regelmäßige"],
  ["Verfuegbarkeit", "Verfügbarkeit"],
  ["verfuegbar", "verfügbar"],
  ["Loesungen", "Lösungen"],
  ["Loesung", "Lösung"],
  ["Flaechen", "Flächen"],
  ["Flaeche", "Fläche"],
  ["Produktivitaet", "Produktivität"],
  ["Qualitaet", "Qualität"],
  ["qualitaet", "qualität"],
  ["verlaesslich", "verlässlich"],
  ["Verlaesslich", "Verlässlich"],
  ["staerkt", "stärkt"],
  ["koennen", "können"],
  ["Koennen", "Können"],
  ["moechten", "möchten"],
  ["fuer", "für"],
  ["Fuer", "Für"],
  ["ueber", "über"],
  ["Ueber", "Über"],
  ["gemaess", "gemäß"],
  ["Gemaess", "Gemäß"],
  ["Gebaeudereinigung", "Gebäudereinigung"],
  ["gebaeudereinigung", "gebäudereinigung"],
  ["Bueroreinigung", "Büroreinigung"],
  ["bueroreinigung", "büroreinigung"],
  ["Buero", "Büro"],
  ["buero", "büro"],
  ["spaeter", "später"],
  ["Ungueltige", "Ungültige"],
  ["moeglich", "möglich"],
  ["Ausfuehrung", "Ausführung"],
  ["foerdern", "fördern"],
  ["repraesentativ", "repräsentativ"],
  ["Gruendliche", "Gründliche"],
  ["gruendlich", "gründlich"],
  ["Waehlbare", "Wählbare"],
  ["waehlbare", "wählbare"],
  ["zusaetzlich", "zusätzlich"],
  ["puenktlich", "pünktlich"],
  ["fruehe", "frühe"],
  ["spaete", "späte"],
  ["vertraeglich", "verträglich"],
  ["ueberzeugenden", "überzeugenden"],
  ["Plaene", "Pläne"],
  ["plaene", "pläne"],
];

function walk(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (SKIP_DIRS.has(e.name)) continue;
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (/\.(tsx|ts)$/.test(e.name)) out.push(p);
  }
  return out;
}

function transform(content) {
  const matches = [...content.matchAll(ROUTE_TOKEN)];
  if (matches.length === 0) {
    let s = content;
    for (const [a, b] of REPLACEMENTS) s = s.split(a).join(b);
    return s;
  }

  const parts = [];
  let last = 0;
  for (const m of matches) {
    const chunk = content.slice(last, m.index);
    let s = chunk;
    for (const [a, b] of REPLACEMENTS) s = s.split(a).join(b);
    parts.push(s, m[0]);
    last = m.index + m[0].length;
  }
  let tail = content.slice(last);
  for (const [a, b] of REPLACEMENTS) tail = tail.split(a).join(b);
  parts.push(tail);
  return parts.join("");
}

const dirs = [path.join(root, "app"), path.join(root, "components"), path.join(root, "lib")];
const files = dirs.flatMap((d) => walk(d));
let changed = 0;
for (const file of files) {
  const before = fs.readFileSync(file, "utf8");
  const after = transform(before);
  if (after !== before) {
    fs.writeFileSync(file, after, "utf8");
    changed++;
  }
}
console.log(`Updated ${changed} files (German orthography).`);
