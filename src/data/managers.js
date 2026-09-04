const managerImage = filename => `${import.meta.env.BASE_URL}images/managers/${filename}`
const seasonNote = 'Stand 04.09.2026 vor Spieltag 2. Das Power Ranking bewertet Kaderqualität, erwartbare Startelf, Stammplatzsicherheit, Punktepotenzial und Tiefe – nicht die reine Marktwertsumme oder nur die Tabelle nach einem Spieltag.'

export const managers = [
{
 name:'Sebastian', team:'DieseHaine', profileTitle:'Der Laptoptrainer', claim:'Der Laptop lief bis zur letzten Minute – jetzt muss der Kader liefern.', image:managerImage('sebastian.png'),
 profileText:`Häjne geht mit 69,76 Mio. € und dem höchsten Kaderwert der Liga in den ersten Spieltag. Entscheidender als die Zahl ist sein Mittelfeld: García, Veerman und Stiller geben dem Team drei hochklassige Punkteachsen, Nusa bringt vorne Upside. Der Laptoptrainer hat erneut aggressiv umgebaut – inklusive eines Gutiérrez-Verkaufs, der ausgerechnet José stärkte. ${seasonNote}`,
 runningGag:'„Macht ihr mal … :)“ bleibt die höflichste Form einer Transferdrohung. Neu im Archiv: „Passiert nicht nochmal.“', rank:1, value:'74,86 Mio. €', grade:'1,4', verdict:'Favorit', trend:'↑', trendText:'komplettester Mix', lastTransfer:'Doué · 5,46 Mio. €', chance:'sehr hoch', status:'Tiago Tomás ist aktuell muskulär verletzt; dafür hat Häjne mit Doué, Lukeba und Assignon weiter Tiefe gekauft.',
 players:['Nusa','Tiago Tomás','Sylla','García','Obermair','Stiller','Stöger','Nebel','Juranović','Caci','Lukeba','Gyamerah','Rohr','Pieper','Assignon','Doué','Schwäbe','James'], keys:['García','Veerman','Stiller'], key:'García',
 strength:'García, Veerman und Stiller bilden das stärkste und vielseitigste Mittelfeld der Liga. Dazu Nusa als offensiver Unterschiedsspieler.', weakness:'Im Sturm fehlt hinter Nusa ein zweiter Premiumanker. Außerdem ist Häjnes größte Stärke zugleich ein Risiko: Er kann einen guten Kader nur schwer in Ruhe lassen.',
 ingo:'Sebastian ist heute mein Favorit – nicht wegen 69,76 Millionen, sondern weil die erste Elf eine klare Idee hat. Jetzt Laptop zuklappen und Punkte sammeln.', werner:'Das Mittelfeld ist Meisterschaftsniveau. Wenn Nusa liefert und die günstige Abwehr stabil punktet, ist das der Maßstab.', franz:'Häjne bunkert altes Herforder, verkauft Gutiérrez versehentlich an José und sagt „passiert nicht nochmal“. Die Saison ist noch nicht angepfiffen und wir haben schon Material bis Weihnachten.'
},
{
 name:'Jose', team:'stjosse', profileTitle:'Der Raumdeuter', claim:'Kane vorne, Gutiérrez hinten – José hat aus dem Königstransfer einen Kader gebaut.', image:managerImage('jose.png'),
 profileText:`José steht bei 64,19 Mio. €. Kane bleibt der alles überragende Premiumanker, doch der Kader ist inzwischen deutlich weniger eindimensional: Gutiérrez, Ginter, Suzuki, Banzuzi und Tietz geben Substanz. Besonders süß: Gutiérrez kam für 8,21 Mio. € direkt von Sebastian. ${seasonNote}`,
 runningGag:'Er erklärt den Fußball gern vollständig. Bei Kane reicht inzwischen „Welcome Harry“.', rank:2, value:'67,34 Mio. €', grade:'1,5', verdict:'Kane-Kader', trend:'↑', trendText:'deutlich kompletter', lastTransfer:'Klaas · 0,24 Mio. €', chance:'sehr hoch', status:'69 Punkte zum Auftakt, Suzuki als Rakete – José ergänzt danach nur punktuell und lässt den starken Kern stehen.',
 players:['Kane','Tietz','Suzuki','Maina','Schäfer','Banzuzi','Klaas','Ginter','Gutiérrez','Lochoshvili','Deman','Kobel','Meyer'], keys:['Kane','Gutiérrez','Ginter'], key:'Kane',
 strength:'Kane besitzt ein absurd hohes Punktepotenzial. Gutiérrez und Ginter stabilisieren die Defensive, Tietz und Suzuki verbreitern die Optionen.', weakness:'Die Mannschaft bleibt stärker als andere Topkader von einem einzigen Superstar abhängig.',
 ingo:'Kane war der Königstransfer. Dass José danach weitergebaut hat, ist fast wichtiger. Dieser Kader ist heute näher an Sebastian als vor acht Tagen.', werner:'Kane plus eine funktionierende Achse dahinter. Das reicht für echte Titelchancen.', franz:'Sebastian: „Passiert nicht nochmal.“ José vermutlich: Bitte doch.'
},
{
 name:'Luca', team:'LucaCosta', profileTitle:'Der kreative Italo', claim:'Kimmich bleibt der Anker – aber die Konkurrenz ist in der letzten Woche näher gekommen.', image:managerImage('luca.png'),
 profileText:`Luca geht mit 62,69 Mio. € in die Saison. Kimmich, Moreira, Ache, Seiwald und Ryerson geben dem Team einen hohen Boden. Günther und Karius kamen hinzu, Honorát wurde zuletzt wieder verkauft. Rang eins aus der Sitzung vom 20. August hält die Redaktion heute nicht mehr aufrecht. ${seasonNote}`,
 runningGag:'Der dritte Platz verfolgt Luca seit Jahren. Passenderweise startet er diesmal im Power Ranking auf drei.', rank:3, value:'69,02 Mio. €', grade:'1,7', verdict:'Titelkader', trend:'↓', trendText:'weiter Spitzengruppe', lastTransfer:'Weiser · 2,20 Mio. €', chance:'hoch', status:'Ebnoutalib ist der spannende neue Angriffspfeil; Weiser ist nach langer Pause eher eine Wette auf spätere Wochen.',
 players:['Ebnoutalib','Ache','Moreira','Kimmich','Seiwald','Remberg','Aouchiche','Querfeld','Ryerson','Günther','Weiser','Karius'], keys:['Kimmich','Moreira','Ryerson'], key:'Kimmich',
 strength:'Kimmich ist ein Premiumanker mit sehr hohem Punkteboden. Moreira, Ache und Ryerson geben Qualität in mehreren Mannschaftsteilen.', weakness:'Der Kader ist klein und im Angriff fehlt neben Moreira/Ache die ganz große Premiumspitze.',
 ingo:'Am 20. August hatte ich Luca auf eins. Heute auf drei. Nicht weil sein Kader schlechter geworden ist – die anderen haben stärker nachgelegt.', werner:'Kimmich bleibt einer der sichersten Bausteine der Liga. Titelkandidat, ohne Diskussion.', franz:'Acht Tage Tabellenführer im Power Ranking. Luca sollte den Screenshot einrahmen.'
},
{
 name:'Henning', team:'Arsene W.', profileTitle:'Der Gastgeber', claim:'Guirassy und Burkardt bleiben die Doppelspitze, vor der niemand gern spielt.', image:managerImage('henning.png'),
 profileText:`Henning steht bei 58,54 Mio. €. Guirassy und Burkardt sind weiterhin das stärkste Sturmduo der IWF. Prömel, Nmecha, Karaman und Larsson liefern Substanz; Yamamoto kam als zusätzliche Option. Der Kader bleibt kompakt und qualitativ konzentriert. ${seasonNote}`,
 runningGag:'Wenn Henning nüchtern „Was ist denn daran real?“ hören will, muss Tomi nur wieder Realtaria reizen.', rank:4, value:'58,92 Mio. €', grade:'1,8', verdict:'Luxussturm', trend:'→', trendText:'starke Achse', lastTransfer:'Jeltsch & Shkiri · je 3,778 Mio. €', chance:'hoch', status:'Henning hat am heftigsten umgebaut: Karaman, Larsson, Poku und Ayhan raus; Scherhant, Shkiri und Jeltsch rein.',
 players:['Guirassy','Burkardt','Scherhant','Shkiri','F. Nmecha','Prömel','Hong','Yamamoto','Widmer','G. Mensah','Jeltsch','Baumann'], keys:['Guirassy','Burkardt','F. Nmecha'], key:'Guirassy',
 strength:'Guirassy plus Burkardt ist die stärkste Doppelspitze der Liga; dahinter stehen mehrere verlässliche Bundesliga-Rollen.', weakness:'Der Kader ist nicht tief. Zwei Ausfälle treffen Henning stärker als die breiteren Konkurrenten.',
 ingo:'Henning muss niemanden beeindrucken. Er braucht nur Guirassy und Burkardt auf dem Platz.', werner:'Qualität vor Quantität. Das ist ein sehr guter Comunio-Kader.', franz:'Andere haben 20 Spieler. Henning hat Guirassy und Burkardt. Kann reichen.'
},
{
 name:'Jan', team:'Greifbramo', profileTitle:'Der Entertainer', claim:'Undav verändert alles – aus der Baustelle ist in einer Woche ein gefährlicher Kader geworden.', image:managerImage('jan.png'),
 profileText:`Jan macht den größten Sprung der letzten Woche. Undav kam für 13,888888 Mio. €, dazu Laimer. Mit Tillman, Baku, Engelhardt und Chema Andrés steht nun ein deutlich stärkeres Gerüst. Der Kaderwert springt auf 59,08 Mio. €. Kane ist weg – aber Bangkok hat wieder Hoffnung. ${seasonNote}`,
 runningGag:'Er wollte Kane nach Bangkok holen. Jetzt muss Undav den Reiseplan retten.', rank:5, value:'54,61 Mio. €', grade:'2,0', verdict:'Aufsteiger', trend:'↑', trendText:'größter Sprung', lastTransfer:'keine großen Käufe diese Woche', chance:'gut', status:'Undav bleibt der Premiumanker. Nach 24 Punkten war die Woche auf dem Markt auffällig ruhig.',
 players:['Höler','Undav','Moerstedt','Burke','Bülter','Tillman','Y. Engelhardt','Martel','Chema Andrés','Baku','Mwene','Laimer','Scally','Flekken'], keys:['Undav','Tillman','Baku'], key:'Undav',
 strength:'Undav hebt die offensive Decke massiv. Tillman, Baku und Laimer sorgen für weitere Punktequalität.', weakness:'Hinter den Topnamen bleibt die Tiefe etwas wechselhaft.',
 ingo:'Jan ist der Beweis, warum die Sitzung vom 20. August zu früh für endgültige Urteile war.', werner:'Undav ist ein Transfer, der ein Ranking verändert. Platz fünf ist verdient.', franz:'Kane wollte nicht nach Bangkok. Undav offenbar schon.'
},
{
 name:'Gregor', team:'Griesgram1', profileTitle:'Der Dino', claim:'Peroni im Urlaub, Schick im Sturm – Greg ist verdächtig gut vorbereitet.', image:managerImage('greg.png'),
 profileText:`Gregor steht bei 57,25 Mio. €. Schick, Grifo, Kramarić, Pavlović und Schlotterbeck sind echte Punktequellen; Kabak und Friedl geben defensive Stabilität. Während der Dino im Urlaub Peroni-Bilder mit „Immer dieser stechende Durst“ versieht, sieht sein Kader erstaunlich erwachsen aus. ${seasonNote}`,
 runningGag:'Der Dino ist im Urlaub. Der Durst bleibt im Trainingslager.', rank:6, value:'61,08 Mio. €', grade:'2,1', verdict:'Dino-Alarm', trend:'↑', trendText:'besser als sein Ruf', lastTransfer:'Grüll · 3,698 Mio. €', chance:'gut', status:'45 Punkte zum Auftakt und jetzt Grüll dazu. Der Dino scoutet aus Pisa – sportlich wirkt der Kader erstaunlich wach.',
 players:['Schick','Grüll','Batista Meier','Pavlović','Onyeka','Grifo','Kramarić','Kabak','Friedl','N. Schlotterbeck','Engels','Urbig'], keys:['Schick','Grifo','N. Schlotterbeck'], key:'Schick',
 strength:'Viele bewährte Scorer und Stammspieler. Schick, Grifo, Kramarić und Pavlović können jede Woche liefern.', weakness:'Kleiner Kader und hinter den Leistungsträgern wenig Puffer.',
 ingo:'Gregor ist gefährlicher, als seine Urlaubsbilder vermuten lassen.', werner:'Das ist ein echter Punkte-Kader. Platz sechs kann schnell zu niedrig sein.', franz:'„Immer dieser stechende Durst.“ Endlich eine Leistungskennzahl, bei der Greg konstant Weltklasse ist.'
},
{
 name:'Tomi', team:'VADDERN 79', profileTitle:'Der Ausredenkönig', claim:'Titelkandidat? Vielleicht. Fünf Millionen Nothilfe? Eher nicht.', image:managerImage('tomi.png'),
 profileText:`Tomi steht bei 56,09 Mio. €. Demirović, Baumgartner, Doan, Brown, Diks und Quansah bilden weiterhin ein gutes Gerüst. Trotzdem muss die Redaktion ihre Titelkandidaten-Euphorie vom 20. August etwas einfangen. Tomis jüngster Finanzplan: „5 Mio. würden schon helfen.“ Begründung: „Ich bin doch jetzt Titelkandidat, hat die Redaktion gesagt.“ ${seasonNote}`,
 runningGag:'Eine Redaktionsprognose ist keine Bürgschaft. Das musste diese Woche eigens geklärt werden.', rank:7, value:'52,50 Mio. €', grade:'2,2', verdict:'Guter Kader', trend:'↓', trendText:'Prognose korrigiert', lastTransfer:'keine großen Käufe diese Woche', chance:'gut', status:'26 Punkte sind okay, aber der Kader blieb praktisch unverändert. Tomi setzt auf Bestand statt Aktionismus.',
 players:['Königsdörffer','Demirović','Bakayoko','Andrich','Neuhaus','Baumgartner','Doan','Weißhaupt','Alvero','Quansah','Bernardo','Diks','Brown','Dahmen'], keys:['Demirović','Brown','Baumgartner'], key:'Demirović',
 strength:'Breiter, vernünftiger Kader mit mehreren klaren Stammspielern und guter Abwehr.', weakness:'Kein Premiumspieler auf Kane/Kimmich/Guirassy-Niveau. Die Spitze ist weniger dominant als bei den Topteams.',
 ingo:'Gutes Team – da hat Häjne recht. Aber zwischen gutem Team und Titelkandidat liegt noch ein Spielplan.', werner:'Unsere Prognose vom 20. August war offensiv. Ich korrigiere: erweiterter Kreis.', franz:'„5 Mio. würden schon helfen.“ Wir haben den Antrag an die Abteilung für Fantasiefinanzierung weitergeleitet.'
},
{
 name:'Matthias', team:'mazzephase', profileTitle:'Der Pumper', claim:'Uzun, Karl, Onyedika – viel Upside, aber die Startelf muss jetzt sichtbar werden.', image:managerImage('matthias.png'),
 profileText:`Matthias besitzt mit 56,05 Mio. € weiterhin einen riesigen Kader. Uzun, Karl und Onyedika sind die spannendsten Assets; Fabio Silva, Harder, Dinkçi und die breite Defensive liefern viele Optionen. Die Transferwoche brachte weitere Umschichtungen. ${seasonNote}`,
 runningGag:'Er kennt das nächste Talent oft früher als die Verkaufsfunktion – und das alte Herforder-Etikett besser als jede neue Designrichtlinie.', rank:8, value:'52,59 Mio. €', grade:'2,3', verdict:'Upside-Kader', trend:'↓', trendText:'viel Projektion', lastTransfer:'Rômulo · 5,77 Mio. €', chance:'offen', status:'Nach fünf Punkten reagiert Matze. Rômulo ist ein Upside-Kauf, befindet sich laut LigaInsider aber erst auf dem Weg zurück ins Mannschaftstraining.',
 players:['Dinkçi','Topp','Rômulo','Fábio Silva','Sambi Lokonga','Uzun','Karl','Darvich','Onyedika','Kaba','Badé','Herold','Castro-Montes','Rothe','Finkgräfe','Malatini','Sebulonsen','Backhaus','Blaswich'], keys:['Uzun','Karl','Onyedika'], key:'Uzun',
 strength:'Viele Spieler mit Marktwert- und Punktepotenzial; Uzun und Karl können den Kader nach oben ziehen.', weakness:'Zu viele Rollen sind weniger sicher als bei der Konkurrenz. Breite allein gewinnt kein Comunio.',
 ingo:'Matthias hat weiterhin einen Kader, der in sechs Wochen ganz anders bewertet werden kann.', werner:'Potenzial ist vorhanden. Ab heute interessieren mich Minuten und Punkte.', franz:'Beim Herforder-Logo ist Matthias entschlossener als bei manchen Kaderplätzen: „Was ist das für eine Scheiße?“'
},
{
 name:'Wassilios', team:'Wasko23', profileTitle:'Der Dino-Coach', claim:'Olise ist Weltklasse – die Frage bleibt, wer daneben den zweiten Unterschied macht.', image:managerImage('wassili.png'),
 profileText:`Wassilios steht bei 48,56 Mio. €. Olise ist mit 20,41 Mio. € der klare Superstar, dahinter folgen Reitz, Gadou, Sander und Chaïbi. Der Kader ist breit, aber weiterhin sehr stark auf einen Premiumspieler zugeschnitten. ${seasonNote}`,
 runningGag:'Ohne Wassili findet die IWF weder Unterkunft noch Richtung – auf dem Platz muss Olise den Weg zeigen.', rank:9, value:'48,29 Mio. €', grade:'2,6', verdict:'Olise-Wette', trend:'→', trendText:'starabhängig', lastTransfer:'keine großen Käufe diese Woche', chance:'Außenseiter+', status:'31 Punkte zum Auftakt. Olise bleibt der Fixstern; Reitz und Gadou sind die wichtigsten Helfer.',
 players:['Olise','Kownacki','Dardari','Albert','Reitz','Chaïbi','Sander','Geiger','Wätjen','Swider','Castrop','Condé','Gadou','Kohr','V. Becker','Reggiani','Ramaj','Köbbing','Schlager'], keys:['Olise','Reitz','Gadou'], key:'Olise',
 strength:'Olise ist einer der stärksten Einzelspieler der gesamten Liga. Dahinter gibt es mehrere solide Rollen.', weakness:'Zu viel Punktefantasie hängt an Olise; die zweite Premiumebene fehlt.',
 ingo:'Mit Olise kann Wassili jeden Spieltag gewinnen. Für eine Saisonprognose brauche ich mehr.', werner:'Ein Superstar und viele ordentliche Spieler. Platz neun klingt hart, zeigt aber die Qualität der Liga.', franz:'Olise trägt nicht nur Bayern – gefühlt trägt er auch Wassilis Power Ranking.'
},
{
 name:'Uwe', team:'uje', profileTitle:'Der X-Faktor', claim:'Orbán, Lee, Kofane – die Basis ist da. Jetzt müsste nur noch Uwe dauerhaft da sein.', image:managerImage('uwe.png'),
 profileText:`Uwe geht mit 36,73 Mio. € in die Saison. Orbán, Lee, Kofane, Futkeu und Nicolas sind brauchbare Bausteine. Das größte Fragezeichen bleibt wie immer nicht das Fußballwissen, sondern die Aktivität. ${seasonNote}`,
 runningGag:'Bei Uwe ist schon der Login eine Breaking News.', rank:10, value:'38,57 Mio. €', grade:'3,0', verdict:'Wildcard', trend:'→', trendText:'unberechenbar', lastTransfer:'kein Transfer seit Spieltag 1', chance:'Außenseiter', status:'Nach null Punkten wegen fehlender Aufstellung folgt: nichts. Kein sichtbarer Einkauf in der Woche vor Spieltag 2.',
 players:['Kofane','Adamu','Futkeu','Curda','Jeong','Lee','Maloney','R. Wagner','Micheler','W. Orbán','Rosenfelder','Koudossou','Coulibaly','Nicolas','Bredlow'], keys:['W. Orbán','Kofane','Lee'], key:'W. Orbán',
 strength:'Orbán ist ein verlässlicher Punkteanker, Lee und Kofane geben offensive Möglichkeiten.', weakness:'Zu wenig Premiumqualität und weiterhin das höchste Managementrisiko der Liga.',
 ingo:'Uwe ist nie völlig abzuschreiben. Aber der Kader startet klar hinter der Konkurrenz.', werner:'Für Platz zehn braucht es keine Pointe. Die Qualitätsdichte ist aktuell niedriger.', franz:'UWE IST ONLINE. Bitte Screenshot machen.'
}
]
