// Classements : données ESPN (site.api.espn.com), lues directement par l'appli.
(function (root) {
  const LEAGUES = [
    { code: "fra.1", name: "Ligue 1", comp: ["Ligue 1"] },
    { code: "fra.2", name: "Ligue 2", comp: ["Ligue 2"] },
    { code: "eng.1", name: "Premier League", comp: ["Premier League"] },
    { code: "esp.1", name: "Liga", comp: ["Liga"] },
    { code: "ita.1", name: "Serie A", comp: ["Serie A"] },
    { code: "ger.1", name: "Bundesliga", comp: ["Bundesliga"] },
    { code: "uefa.champions", name: "Ligue des Champions", comp: ["Ligue des Champions"] },
    { code: "uefa.europa", name: "Ligue Europa", comp: ["Ligue Europa"] },
    { code: "uefa.europa.conf", name: "Ligue Conference", comp: ["Ligue Conference"] },
    { code: "eng.2", name: "Championship", comp: ["Championship"] },
    { code: "por.1", name: "D1 Portugal", comp: ["D1 Portugal"] },
    { code: "ned.1", name: "D1 Pays-Bas", comp: ["D1 Pays-Bas"] },
    { code: "tur.1", name: "D1 Turquie", comp: ["D1 Turquie"] },
    { code: "ger.2", name: "D2 Allemagne", comp: ["D2 Allemagne"] },
    { code: "ksa.1", name: "D1 Arabie s.", comp: ["D1 Arabie s."] },
    { code: "usa.1", name: "MLS", comp: ["MLS"] }
  ];
  const url = code => "https://site.api.espn.com/apis/v2/sports/soccer/" + code + "/standings";

  function stat(e, ...names) {
    for (const s of e.stats || []) if (names.includes(s.name) || names.includes(s.type) || names.includes(s.abbreviation)) {
      const v = typeof s.value === "number" ? s.value : parseFloat(s.displayValue);
      if (!isNaN(v)) return v;
    }
    return null;
  }
  // Renvoie [{ group, rows: [{rank, team, short, logo, played, w, d, l, gf, ga, gd, pts, note}] }]
  function parseEspn(json) {
    const groups = [];
    const walk = (node, label) => {
      if (!node || typeof node !== "object") return;
      const entries = node.standings && node.standings.entries;
      if (Array.isArray(entries) && entries.length) {
        const rows = entries.map(e => {
          const t = e.team || {};
          const r = {
            team: t.displayName || t.name || t.shortDisplayName || "?",
            short: t.shortDisplayName || t.abbreviation || "",
            logo: (t.logos && t.logos[0] && t.logos[0].href) || "",
            rank: stat(e, "rank"),
            played: stat(e, "gamesPlayed", "GP"),
            w: stat(e, "wins", "W"), d: stat(e, "ties", "D"), l: stat(e, "losses", "L"),
            gf: stat(e, "pointsFor", "F"), ga: stat(e, "pointsAgainst", "A"),
            gd: stat(e, "pointDifferential", "GD"),
            pts: stat(e, "points", "P"),
            note: (e.note && (e.note.color || "")) || "",
            noteText: (e.note && e.note.description) || ""
          };
          if (r.gd == null && r.gf != null && r.ga != null) r.gd = r.gf - r.ga;
          return r;
        });
        rows.sort((a, b) => (a.rank != null && b.rank != null) ? a.rank - b.rank
          : (b.pts - a.pts) || (b.gd - a.gd) || (b.gf - a.gf));
        rows.forEach((r, i) => { if (r.rank == null) r.rank = i + 1; });
        groups.push({ group: node.name || node.abbreviation || label || "", rows });
      }
      for (const c of node.children || []) walk(c, c.name);
    };
    walk(json, json && json.name);
    return groups;
  }

  // Rapprocher un nom footao ("Paris PSG", "Barcelone") d'un nom ESPN ("Paris Saint-Germain", "Barcelona")
  const ALIAS = {
    "paris psg": "paris saint germain", "lyon ol": "lyon", "marseille om": "marseille", "rennes": "stade rennais",
    "barcelone": "barcelona", "seville fc": "sevilla", "valence cf": "valencia", "atletico": "atletico madrid",
    "bilbao": "athletic club", "la corogne": "deportivo la coruna", "r sociedad": "real sociedad", "betis": "real betis",
    "espanyol b": "espanyol", "santander": "racing santander", "levante ud": "levante", "rayo v": "rayo vallecano", "alaves": "alaves",
    "naples": "napoli", "milan": "ac milan", "inter": "internazionale", "roma": "as roma", "parme": "parma", "bologne": "bologna",
    "venise": "venezia", "hellas": "hellas verona", "palerme": "palermo", "torino": "torino",
    "bayern": "bayern munich", "dortmund": "borussia dortmund", "leverkusen": "bayer leverkusen", "francfort e": "eintracht frankfurt",
    "cologne": "fc cologne", "mayence fsv": "mainz", "monchengladbach": "borussia monchengladbach", "wolfsbourg": "wolfsburg",
    "fribourg": "freiburg", "hambourg": "hamburg", "augsbourg": "augsburg", "werder": "werder bremen", "union b": "union berlin",
    "st pauli": "st pauli", "heidenheim": "heidenheim", "hertha": "hertha berlin", "nuremberg": "nurnberg", "hanovre": "hannover",
    "manchester c": "manchester city", "manchester u": "manchester united", "crystal p": "crystal palace",
    "nottingham": "nottingham forest", "tottenham": "tottenham hotspur", "wolverhampton": "wolverhampton wanderers",
    "west brom": "west bromwich albion", "sporting c p": "sporting cp", "gil v": "gil vicente", "guimaraes": "vitoria guimaraes",
    "psv": "psv eindhoven", "alkmaar az": "az alkmaar", "la haye": "den haag", "groningue": "groningen", "nimegue": "nec",
    "galatasaray": "galatasaray", "fenerbahce": "fenerbahce", "besiktas": "besiktas", "trabzon": "trabzonspor",
    "basaksehir": "istanbul basaksehir", "saint etienne": "saint etienne", "dijon fco": "dijon", "amiens sc": "amiens",
    "bastia sc": "bastia", "new york c": "new york city", "new york rb": "new york red bulls", "los angeles g": "la galaxy",
    "los angeles fc": "lafc", "salt lake": "real salt lake", "kansas": "sporting kansas city", "philadelphie": "philadelphia",
    "al hilal r": "al hilal", "al ittihad d": "al ittihad", "al ahli dj": "al ahli", "club bruges": "club brugge",
    "celtic g": "celtic", "olympiakos lp": "olympiacos", "etoile rouge": "red star belgrade", "d zagreb": "dinamo zagreb",
    "st gilloise u": "union st gilloise", "shakhtar d": "shakhtar donetsk", "salzbourg": "red bull salzburg", "copenhague": "fc copenhagen"
  };
  const STOP = new Set(["fc", "sc", "cf", "ac", "as", "afc", "cd", "ud", "sv", "vfl", "vfb", "tsg", "fsv", "rc", "sd", "us", "ss", "ogc", "losc", "the", "de", "club", "1"]);
  const norm = s => (s || "").normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase()
    .replace(/[^a-z0-9 ]+/g, " ").replace(/\s+/g, " ").trim();
  const words = s => norm(s).split(" ").filter(w => w && !STOP.has(w));
  function score(footao, espn) {
    const f = norm(footao);
    const tw = words(ALIAS[f] || f).join(" "), ew = words(espn).join(" ");
    if (!tw || !ew) return 0;
    if (tw === ew) return 3;
    if ((" " + ew + " ").includes(" " + tw + " ")) return 2;
    if ((" " + tw + " ").includes(" " + ew + " ") && ew.length > 3) return 1;
    return 0;
  }
  // La ligne du classement qui correspond à une équipe footao, ou null si aucune ou ambiguë.
  function findRow(footao, rows) {
    let best = 0, hits = [];
    for (const r of rows) {
      const sc = Math.max(score(footao, r.team), score(footao, r.short));
      if (sc > best) { best = sc; hits = [r]; } else if (sc && sc === best && !hits.includes(r)) hits.push(r);
    }
    return hits.length === 1 ? hits[0] : null;
  }

  const api = { LEAGUES, url, parseEspn, findRow, norm };
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  root.STD = api;
})(typeof window !== "undefined" ? window : globalThis);
