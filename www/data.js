// Programme TV foot. Relevé sur footao.tv. Format par ligne :
// heure|domicile|extérieur|chaînes (séparées par +)|compétition
// "*" après l'heure = dans la nuit (lendemain). Extérieur vide = multiplex.
// Suffixe " Fém.", " Fém. U17", " U19" sur l'équipe extérieure = catégorie.
window.PROG = {
updated: "15 oct. 2026 à 05:45",
days: {
"2026-10-15":`12:00|Espagne|Israël Fém. U17|YouTube|Euro U17 f.
14:15|Tampines|Machida|YouTube|C2 Asie
18:45|Multiplex Ligue Europa / Conference||Canal+ Sport 360|Ligue Europa
18:45|Lyon OL|Crystal P.|Canal+ Foot|Ligue Europa
18:45|CSKA S.|Monaco|Canal+ Sport|Ligue Conference
18:45|Salzbourg|Milan|Canal+ Live 1|Ligue Europa
18:45|Torreense|Sunderland|Canal+ Live 4|Ligue Europa
18:45|St-Gilloise U.|R. Sociedad|Canal+ Live 5|Ligue Europa
18:45|Lech|Leverkusen|Canal+ Live 6|Ligue Europa
18:45|Gent|Aarhus|Canal+ Live 7|Ligue Conference
18:45|Panathinaikos|Borac|Canal+ Live 8|Ligue Conference
18:45|Craiova|Getafe|Canal+ Live 9|Ligue Conference
18:45|Hajduk|Ajax|Canal+ Live 10|Ligue Conference
18:45|KuPS|Trabzon|Canal+ Live 11|Ligue Conference
18:45|Alkmaar AZ|Beer-Sheva|Canal+ Live 12|Ligue Europa
18:45|Sparta Prague|Lillestrom|Canal+ Live 13|Ligue Europa
18:45|Celje|Omonoia|Canal+ Live 14|Ligue Europa
18:45|Lugano|Etoile Rouge|Canal+ Live 15|Ligue Conference
18:45|Egnatia|Midtjylland|Canal+ Live 16|Ligue Conference
18:45|Mjallby|Escaldes|Canal+ Live 17|Ligue Conference
18:45|Riga|Kairat|Canal+ Live 18|Ligue Conference
20:45|Caen|La Roche-s.-Y.|Ligue 1+|Ligue 3
21:00|Multiplex Ligue Europa / Conference||Canal+ Sport 360|Ligue Europa
21:00|Marseille OM|Olympiakos LP|Canal+|Ligue Europa
21:00|Rennes|OFI Crète|Canal+ Foot+Sport+|Ligue Europa
21:00|Celta Vigo|Juventus|Canal+ Sport|Ligue Europa
21:00|D. Zagreb|Anderlecht|Canal+ Live 4|Ligue Europa
21:00|Hoffenheim|Besiktas|Canal+ Live 5|Ligue Europa
21:00|Bournemouth|Sturm Graz|Canal+ Live 6|Ligue Europa
21:00|Brighton|Zalgiris|Canal+ Live 7|Ligue Conference
21:00|Nimègue|Levski|Canal+ Live 8|Ligue Europa
21:00|Benfica|Celtic G.|Canal+ Live 9|Ligue Europa
21:00|Fribourg|Jablonec|Canal+ Live 10|Ligue Conference
21:00|Atalanta|Pafos|Canal+ Live 11|Ligue Conference
21:00|Copenhague|Braga|Canal+ Live 12|Ligue Conference
21:00|Ferencvaros|Pilsen|Canal+ Live 13|Ligue Europa
21:00|Jagiellonia|Ararat|Canal+ Live 14|Ligue Europa
21:00|Hearts|Nordsjælland|Canal+ Live 15|Ligue Conference
21:00|Brann|Lincoln R. I.|Canal+ Live 16|Ligue Conference
21:00|St-Trond|Iberia T.|Canal+ Live 17|Ligue Conference
21:00|Twente|Thoune|Canal+ Live 18|Ligue Conference`,
"2026-10-16":`15:15|Al Qadsiah|Abha|DAZN|D1 Arabie s.
18:30|Fribourg|Leipzig Fém.|DAZN|D1 fem. Allemagne
20:00|Multiplex Ligue 2||beIN SPORTS 2|Ligue 2
20:00|Guingamp|Pau|beIN SPORTS MAX 4|Ligue 2
20:00|Laval|Clermont|beIN SPORTS site web|Ligue 2
20:00|Annecy|Nancy|beIN SPORTS MAX 5|Ligue 2
20:00|Grenoble|Boulogne|beIN SPORTS site web|Ligue 2
20:00|Reims|Dijon FCO|beIN SPORTS MAX 6|Ligue 2
20:30|Francfort E.|Cologne|beIN SPORTS MAX 8|Bundesliga
20:45|Le Mans|Toulouse|Ligue 1+|Ligue 1
20:45|Frosinone|Sassuolo|DAZN|Serie A
21:00|La Corogne|Levante UD|DAZN+Disney+|Liga`,
"2026-10-17":`12:30|Sassuolo|Naples Fém.|DAZN|D1 fem. Italie
13:30|Everton|Chelsea|Canal+|Premier League
13:30|Watford|Charlton|beIN SPORTS MAX 5|Championship
14:00|Nantes|Dunkerque|beIN SPORTS 1|Ligue 2
14:00|Metz|Sochaux|beIN SPORTS MAX 4|Ligue 2
14:00|Espanyol B.|Atlético|DAZN+Disney+|Liga
14:00|Leverkusen|Francfort E. Fém.|DAZN|D1 fem. Allemagne
14:45|Multiplex Ligue 3||Ligue 1+|Ligue 3
14:45|Quevilly|Orléans|Ligue 1+ add. 2|Ligue 3
14:45|Villefranche-s.-S.|Cannes|Ligue 1+ add. 3|Ligue 3
14:45|Valenciennes|Amiens SC|Ligue 1+ add. 4|Ligue 3
14:45|Thionville|Versailles|Ligue 1+ add. 5|Ligue 3
14:45|Aubagne|Le Puy-en-V.|Ligue 1+ add. 6|Ligue 3
14:45|Bourg-P.|Fleury|Ligue 1+ add. 7|Ligue 3
14:45|Paris 13|Rouen|Ligue 1+ add. 8|Ligue 3
14:45|Concarneau|Bastia SC|Ligue 1+ add. 9|Ligue 3
15:00|Venezia|Naples|DAZN|Serie A
15:30|Multiplex Bundesliga||beIN SPORTS 3|Bundesliga
15:30|Union B.|Dortmund|beIN SPORTS MAX 8|Bundesliga
15:30|Hambourg|Stuttgart|beIN SPORTS MAX 9|Bundesliga
16:00|Manchester C.|Ipswich|Canal+ Live 4|Premier League
16:00|Brentford|Liverpool|Canal+ Live 2|Premier League
16:00|Fulham|Hull|Canal+ Live 3|Premier League
16:00|Multiplex Premier League||Canal+ Foot|Premier League
16:15|Villarreal|Elche|DAZN+Disney+|Liga
16:30|La Haye|PSV|DAZN|D1 Pays-Bas
17:00|Genclerbirligi|Galatasaray|beIN SPORTS MAX 10|D1 Turquie
17:15|Strasbourg|Paris PSG|Ligue 1+|Ligue 1
18:00|Toulouse|Paris FC Fém.|YouTube|D1 fem. France
18:00|Montpellier|Le Havre Fém.|YouTube|D1 fem. France
18:00|Lens|Strasbourg Fém.|YouTube|D1 fem. France
18:00|St-Malo|Nantes Fém.|YouTube|D1 fem. France
18:00|Bologne|Inter|DAZN|Serie A
18:30|Bayern|Leipzig|beIN SPORTS MAX 4|Bundesliga
18:30|Newcastle|Aston Villa|Canal+ Foot|Premier League
18:30|Betis|Barcelone|DAZN+Disney+|Liga
19:00|Touraine UF|Nîmes|YouTube|National 1
20:00|Red Star|Saint-Etienne|beIN SPORTS 1|Ligue 2
20:00|Fenerbahçe|Alanya|beIN SPORTS MAX 5|D1 Turquie
20:00|Telstar|Feyenoord|DAZN|D1 Pays-Bas
20:30|Philadelphie|Charlotte|Apple TV|MLS
20:45|Lille|Brest|Ligue 1+|Ligue 1
20:45|Troyes|Lens|Ligue 1+ add. 2|Ligue 1
20:45|Roma|Genoa|DAZN|Serie A
21:00|Paris PSG|Lyon OL Fém.|Canal+ Foot|D1 fem. France
21:00|Valence CF|Bilbao|DAZN+Disney+|Liga
22:30|Minnesota|St. Louis|Apple TV|MLS
01:30*|Atlanta|Miami|Apple TV|MLS
01:30*|New England|Chicago|Apple TV|MLS
01:30*|New York C.|Los Angeles FC|Apple TV|MLS
01:30*|New York RB|Toronto|Apple TV|MLS
01:30*|Orlando|DC United|Apple TV|MLS
02:30*|Austin|Vancouver|Apple TV|MLS
02:30*|Houston|Dallas|Apple TV|MLS
02:30*|Kansas|Salt Lake|Apple TV|MLS
04:30*|Los Angeles G.|San Diego|Apple TV|MLS
04:30*|Portland|Colorado|Apple TV|MLS
04:30*|San Jose|Nashville|Apple TV|MLS
04:30*|Seattle|Montreal|Apple TV|MLS`,
"2026-10-18":`12:30|Udinese|Lecce|DAZN|Serie A
12:30|Juventus|Como Fém.|DAZN|D1 fem. Italie
13:00|Marseille OM|Fleury Fém.|Canal+ Foot|D1 fem. France
14:00|Osasuna|Santander|DAZN+Disney+|Liga
15:00|Leeds|Manchester U.|Canal+ Live 4|Premier League
15:00|Bournemouth|Sunderland|Canal+ Live 2|Premier League
15:00|Brighton|Crystal P.|Canal+ Live 3|Premier League
15:00|Angers|Marseille OM|Ligue 1+|Ligue 1
15:00|Fiorentina|Como|DAZN|Serie A
15:00|Multiplex Premier League||Canal+ Foot|Premier League
15:30|Leverkusen|Fribourg|beIN SPORTS 2|Bundesliga
16:15|Celta Vigo|Alavès|DAZN+Disney+|Liga
16:45|Groningue|Ajax|DAZN|D1 Pays-Bas
17:10|Al Taawoun|Al Qadsiah|DAZN|D1 Arabie s.
17:15|Multiplex Ligue 1||Ligue 1+|Ligue 1
17:15|Paris FC|Rennes|Ligue 1+ add. 2|Ligue 1
17:15|Lorient|Monaco|Ligue 1+ add. 3|Ligue 1
17:15|Le Havre|Auxerre|Ligue 1+ add. 4|Ligue 1
17:30|Nottingham|Arsenal|Canal+|Premier League
17:30|Monchengladbach|Hoffenheim|beIN SPORTS MAX 6|Bundesliga
18:00|Milan|Atalanta|DAZN|Serie A
18:00|Inter|Parme Fém.|DAZN|D1 fem. Italie
18:00|Basaksehir|Gaziantep|beIN SPORTS MAX 5|D1 Turquie
18:30|Malaga|R. Sociedad|DAZN+Disney+|Liga
18:30|Mayence FSV|Wolfsbourg Fém.|DAZN|D1 fem. Allemagne
20:45|Lyon OL|Nice|Ligue 1+|Ligue 1
20:45|Juventus|Lazio|DAZN|Serie A
21:00|Real Madrid|Séville FC|DAZN+Disney+|Liga
23:00|Cincinnati|Columbus|Apple TV|MLS`,
"2026-10-19":`17:05|Al Fayha|Al Ahli Dj.|DAZN|D1 Arabie s.
18:00|Bayern|Stuttgart Fém.|DAZN|D1 fem. Allemagne
18:30|Monza|Cagliari|DAZN|Serie A
19:00|Trabzon|Besiktas|beIN SPORTS 2|D1 Turquie
20:00|Al Hilal R.|Al Hazem|DAZN|D1 Arabie s.
20:45|Rodez|Montpellier|beIN SPORTS 1|Ligue 2
20:45|Parme|Torino|DAZN|Serie A
21:00|Tottenham|Coventry|Canal+ Foot|Premier League
21:00|Getafe|Rayo V.|DAZN+Disney+|Liga`,
"2026-10-20":`14:00|Paris PSG|Barcelone U19|Canal+ Foot|Youth League
18:45|Sabah|Dortmund|Canal+ Live 2|Ligue des Champions
18:45|Fenerbahçe|Slavia|Canal+ Sport|Ligue des Champions
20:00|Al Nassr|Neom|DAZN+YouTube|D1 Arabie s.
20:00|Ettifaq|Al Ittihad D.|DAZN|D1 Arabie s.
21:00|Multiplex Ligue des Champions||Canal+ Sport 360|Ligue des Champions
21:00|Paris PSG|Barcelone|Canal+ Foot|Ligue des Champions
21:00|Manchester C.|AEK|Canal+ Live 3|Ligue des Champions
21:00|Liverpool|Villarreal|Canal+ Sport|Ligue des Champions
21:00|Stuttgart|Atlético|Canal+ Live 4|Ligue des Champions
21:00|Roma|Bratislava|Canal+ Live 5|Ligue des Champions
21:00|Naples|Bodo Glimt|Canal+ Live 6|Ligue des Champions
21:00|Porto|PSV|Canal+ Live 7|Ligue des Champions
01:00*|Violette|Portmore|YouTube|L. Champions Caraïbes`,
"2026-10-21":`14:00|Lille|Galatasaray U19|Canal+ Foot|Youth League
18:45|Lille|Galatasaray|Canal+ Foot|Ligue des Champions
18:45|Como|Manchester U.|Canal+ Sport|Ligue des Champions
20:00|Levante UD|Bilbao|DAZN+Disney+|Liga
21:00|Multiplex Ligue des Champions||Canal+ Sport 360|Ligue des Champions
21:00|Club Bruges|Lens|Canal+|Ligue des Champions
21:00|Bayern|Arsenal|Canal+ Foot|Ligue des Champions
21:00|Real Madrid|Leipzig|Canal+ Sport|Ligue des Champions
21:00|Inter|Shakhtar D.|Canal+ Live 4|Ligue des Champions
21:00|Aston Villa|Viking|Canal+ Live 5|Ligue des Champions
21:00|Betis|Feyenoord|Canal+ Live 6|Ligue des Champions
21:00|Sporting C. P.|LASK|Canal+ Live 7|Ligue des Champions
01:00*|Cincinnati|DC United|Apple TV|MLS
04:30*|Cartaginès|Olimpia T.|YouTube|L. Champions Am. Centrale`,
"2026-10-22":`16:30|Kairat|Panathinaikos|Canal+ Live 1|Ligue Conference
16:45|Al Fateh|Al Shabab|DAZN|D1 Arabie s.
18:45|Multiplex Ligue Europa / Conference||Canal+ Sport 360|Ligue Europa
18:45|Sturm Graz|Marseille OM|Canal+ Foot|Ligue Europa
18:45|Juventus|Rennes|Canal+ Sport|Ligue Europa
18:45|Lech|Sunderland|Canal+ Live 3+Canal+ Live 4|Ligue Europa
18:45|OFI Crète|Leverkusen|Canal+ Live 5|Ligue Europa
18:45|St-Gilloise U.|Beer-Sheva|Canal+ Live 6|Ligue Europa
18:45|Ararat|Alkmaar AZ|Canal+ Live 7|Ligue Europa
18:45|Ferencvaros|Torreense|Canal+ Live 8|Ligue Europa
18:45|D. Zagreb|Nimègue|Canal+ Live 9|Ligue Europa
18:45|Jablonec|Brighton|Canal+ Live 10|Ligue Conference
18:45|Getafe|Lugano|Canal+ Live 11|Ligue Conference
18:45|Trabzon|Hearts|Canal+ Live 12|Ligue Conference
18:45|Pafos|Riga|Canal+ Live 13|Ligue Conference
18:45|Iberia T.|Mjallby|Canal+ Live 14|Ligue Conference
18:45|Nordsjælland|CSKA S.|Canal+ Live 15|Ligue Conference
18:45|Etoile Rouge|Copenhague|Canal+ Live 16|Ligue Conference
18:45|Zalgiris|Brann|Canal+ Live 17|Ligue Conference
18:45|Escaldes|Craiova|Canal+ Live 18|Ligue Conference
20:00|Al Ahli Dj.|Khaleej|DAZN|D1 Arabie s.
21:00|Multiplex Ligue Europa / Conference||Canal+ Sport 360|Ligue Europa
21:00|Hoffenheim|Lyon OL|Canal+|Ligue Europa
21:00|Monaco|Fribourg|Canal+ Foot|Ligue Conference
21:00|Bournemouth|Milan|Canal+ Sport|Ligue Europa
21:00|Besiktas|Crystal P.|Canal+ Live 4|Ligue Europa
21:00|Celtic G.|Celta Vigo|Canal+ Live 5|Ligue Europa
21:00|Lillestrom|R. Sociedad|Canal+ Live 6|Ligue Europa
21:00|Omonoia|Benfica|Canal+ Live 7|Ligue Europa
21:00|Pilsen|Levski|Canal+ Live 8|Ligue Europa
21:00|Jagiellonia|Anderlecht|Canal+ Live 9|Ligue Europa
21:00|Celje|Salzbourg|Canal+ Live 10|Ligue Europa
21:00|Olympiakos LP|Sparta Prague|Canal+ Live 11|Ligue Europa
21:00|Ajax|Atalanta|Canal+ Live 12|Ligue Conference
21:00|Braga|Gent|Canal+ Live 13|Ligue Conference
21:00|Aarhus|Egnatia|Canal+ Live 14|Ligue Conference
21:00|Midtjylland|St-Trond|Canal+ Live 15|Ligue Conference
21:00|Thoune|Hajduk|Canal+ Live 16|Ligue Conference
21:00|Borac|KuPS|Canal+ Live 17|Ligue Conference
21:00|Lincoln R. I.|Twente|Canal+ Live 18|Ligue Conference
01:00*|Mt Pleasant|Sando|YouTube|L. Champions Caraïbes
03:00*|Motagua|Alajuelense|YouTube|L. Champions Am. Centrale`,
"2026-10-23":`15:30|Al Faisaly|Al Nassr|DAZN+YouTube|D1 Arabie s.
17:30|Al Ittihad D.|Diriyah|DAZN|D1 Arabie s.
18:30|Leipzig|Bayern Fém.|DAZN|D1 fem. Allemagne
20:00|Multiplex Ligue 2||beIN SPORTS 1|Ligue 2
20:00|Sochaux|Annecy|beIN SPORTS MAX 4|Ligue 2
20:00|Dunkerque|Metz|beIN SPORTS MAX 5|Ligue 2
20:00|Clermont|Guingamp|beIN SPORTS MAX 6|Ligue 2
20:00|Nancy|Laval|beIN SPORTS MAX 7|Ligue 2
20:00|Pau|Grenoble|beIN SPORTS MAX 8|Ligue 2
20:00|Al Qadsiah|Al Hilal R.|DAZN|D1 Arabie s.
20:30|Stuttgart|Monchengladbach|beIN SPORTS MAX 9|Bundesliga
20:45|Brest|Nice|Ligue 1+|Ligue 1
20:45|Torino|Monza|DAZN|Serie A
21:00|Ipswich|Nottingham|Canal+ Live 2|Premier League
21:00|Alavès|Malaga|DAZN+Disney+|Liga
21:05|Paris PSG|Montpellier Fém.|Canal+ Foot|D1 fem. France`,
"2026-10-24":`12:00|Wolfsbourg|Cologne Fém.|DAZN|D1 fem. Allemagne
13:00|Hertha|Bielefeld|beIN SPORTS MAX 5|D2 Allemagne
13:30|Aston Villa|Manchester C.|Canal+|Premier League
13:30|Charlton|Norwich|beIN SPORTS MAX 10|Championship
14:00|Montpellier|Red Star|beIN SPORTS 1|Ligue 2
14:00|Dijon FCO|Rodez|beIN SPORTS 3|Ligue 2
14:00|Rayo V.|Elche|DAZN+Disney+|Liga
15:00|Como|Sassuolo|DAZN|Serie A
15:00|Cagliari|Bologne|DAZN|Serie A
15:30|Multiplex Bundesliga||beIN SPORTS 2|Bundesliga
15:30|Leipzig|Elversberg|beIN SPORTS MAX 4|Bundesliga
15:30|Augsbourg|Union B.|beIN SPORTS MAX 5|Bundesliga
15:30|Mayence FSV|Werder|beIN SPORTS MAX 6|Bundesliga
15:30|Cologne|Schalke|beIN SPORTS MAX 7|Bundesliga
15:30|Paderborn|Hambourg|beIN SPORTS MAX 8|Bundesliga
16:00|Arsenal|Everton|Canal+ Foot|Premier League
16:00|Coventry|Fulham|Canal+ Live 3|Premier League
16:00|Preston|West Brom.|beIN SPORTS MAX 10|Championship
16:15|Santander|Espanyol B.|DAZN+Disney+|Liga
17:15|Toulouse|Troyes|Ligue 1+|Ligue 1
18:00|St-Malo|Paris FC Fém.|YouTube|D1 fem. France
18:00|Fleury|Toulouse Fém.|YouTube|D1 fem. France
18:00|Le Havre|Lens Fém.|YouTube|D1 fem. France
18:00|Nantes|Strasbourg Fém.|YouTube|D1 fem. France
18:00|Naples|Roma|DAZN|Serie A
18:30|Chelsea|Tottenham|Canal+ Foot|Premier League
18:30|Dortmund|Francfort E.|beIN SPORTS MAX 4|Bundesliga
18:30|Valence CF|Villarreal|DAZN+Disney+|Liga
19:30|Montreal|Nashville|Apple TV|MLS
20:00|Saint-Etienne|Nantes|beIN SPORTS 1|Ligue 2
20:30|Nuremberg|Kaiserslautern|beIN SPORTS MAX 4|D2 Allemagne
20:45|Lens|Paris FC|Ligue 1+|Ligue 1
20:45|Lazio|Parme|DAZN|Serie A
21:00|Lyon OL|Marseille OM Fém.|Canal+ Foot+Sport+|D1 fem. France
21:00|Atlético|La Corogne|DAZN+Disney+|Liga
21:30|Gil V.|Porto|beIN SPORTS 2|D1 Portugal
21:30|Columbus|Toronto|Apple TV|MLS
23:30|New York RB|Miami|Apple TV|MLS
01:30*|Atlanta|Chicago|Apple TV|MLS
01:30*|DC United|Cincinnati|Apple TV|MLS
01:30*|Orlando|New York C.|Apple TV|MLS
01:30*|Philadelphie|New England|Apple TV|MLS
02:30*|Dallas|San Jose|Apple TV|MLS
02:30*|Houston|Minnesota|Apple TV|MLS
02:30*|Kansas|Austin|Apple TV|MLS
02:30*|Colorado|Vancouver|Apple TV|MLS
02:30*|Salt Lake|St. Louis|Apple TV|MLS
03:30*|Portland|Charlotte|Apple TV|MLS`
}
};
