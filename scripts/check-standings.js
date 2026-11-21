// Vérifie, au moment de la compilation, que les classements ESPN se lisent bien.
const S = require("../www/standings.js");
const checks = { "fra.1": ["Paris PSG", "Lyon OL", "Marseille OM", "Monaco", "Saint-Etienne", "Paris FC"], "eng.1": ["Manchester C.", "Liverpool", "Arsenal"], "esp.1": ["Real Madrid", "Barcelone", "Atlético"], "ger.1": ["Bayern", "Dortmund"], "ita.1": ["Inter", "Juventus", "Milan"], "uefa.champions": [] };
(async () => {
  const lines = []; let bad = 0;
  for (const [code, teams] of Object.entries(checks)) {
    try {
      const r = await fetch(S.url(code)); const json = await r.json();
      const groups = S.parseEspn(json); const rows = groups.flatMap(g => g.rows);
      const top = rows.slice(0, 3).map(x => `${x.rank}.${x.team} ${x.pts}pts J${x.played} ${x.gd}`).join(" | ");
      const found = teams.map(t => { const x = S.findRow(t, rows); return t + "=" + (x ? x.team + "(" + x.rank + ")" : "??"); }).join(", ");
      lines.push(`${code}: HTTP ${r.status}, ${groups.length} groupe(s), ${rows.length} équipes. ${top}. ${found}`);
      if (rows.length < 8 || rows.some(x => x.pts == null)) bad++;
    } catch (e) { lines.push(`${code}: ERREUR ${e.message}`); bad++; }
  }
  console.log(lines.join("\n"));
  const msg = lines.join("%0A");
  console.log((bad ? "::error title=Classements::" : "::notice title=Classements::") + msg);
  process.exit(bad ? 1 : 0);
})();
