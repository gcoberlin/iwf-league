const managerImage = filename => `${import.meta.env.BASE_URL}images/managers/${filename}`
const seasonNote = 'Stand unmittelbar vor dem Saisonstart am 28.08.2026. Das Power Ranking bewertet sportliche Qualität, erwartbare Startelf, Stammplatzsicherheit, Punktepotenzial und Tiefe – ausdrücklich nicht die reine Marktwertsumme.'

export const managers = [
{
 name:'Sebastian', team:'DieseHaine', profileTitle:'Der Laptoptrainer', claim:'Der Laptop lief bis zur letzten Minute – jetzt muss der Kader liefern.', image:managerImage('sebastian.png'),
 profileText:`Häjne geht mit 69,76 Mio. € und dem höchsten Kaderwert der Liga in den ersten Spieltag. Entscheidender als die Zahl ist sein Mittelfeld: García, Veerman und Stiller geben dem Team drei hochklassige Punkteachsen, Nusa bringt vorne Upside. Der Laptoptrainer hat erneut aggressiv umgebaut – inklusive eines Gutiérrez-Verkaufs, der ausgerechnet José stärkte. ${seasonNote}`,
 runningGag:'„Macht ihr mal … :)“ bleibt die höflichste Form einer Transferdrohung. Neu im Archiv: „Passiert nicht nochmal.“', rank:1, value:'69,76 Mio. €', grade:'1,4', verdict:'Favorit', trend:'↑', trendText:'komplettester Mix', lastTransfer:'Gyamerah · 0,845 Mio. €', chance:'sehr hoch', status:'Top-Mittelfeld, klare Struktur – jetzt muss aus Aktivität Ertrag werden.',
 players:['Nusa','Sylla','Stöger','Nebel','Stiller','García','Obermair','Veerman','Pieper','Caci','Rohr','Gyamerah','Schwäbe','James'], keys:['García','Veerman','Stiller'], key:'García',
 strength:'García, Veerman und Stiller bilden das stärkste und vielseitigste Mittelfeld der Liga. Dazu Nusa als offensiver Unterschiedsspieler.', weakness:'Im Sturm fehlt hinter Nusa ein zweiter Premiumanker. Außerdem ist Häjnes größte Stärke zugleich ein Risiko: Er kann einen guten Kader nur schwer in Ruhe lassen.',
 ingo:'Sebastian ist heute mein Favorit – nicht wegen 69,76 Millionen, sondern weil die erste Elf eine klare Idee hat. Jetzt Laptop zuklappen und Punkte sammeln.', werner:'Das Mittelfeld ist Meisterschaftsniveau. Wenn Nusa liefert und die günstige Abwehr stabil punktet, ist das der Maßstab.', franz:'Häjne bunkert altes Herforder, verkauft Gutiérrez versehentlich an José und sagt „passiert nicht nochmal“. Die Saison ist noch nicht angepfiffen und wir haben schon Material bis Weihnachten.'
},
{
 name:'Jose', team:'stjosse', profileTitle:'Der Raumdeuter', claim:'Kane vorne, Gutiérrez hinten – José hat aus dem Königstransfer einen Kader gebaut.', image:managerImage('jose.png'),
 profileText:`José steht bei 64,19 Mio. €. Kane bleibt der alles überragende Premiumanker, doch der Kader ist inzwischen deutlich weniger eindimensional: Gutiérrez, Ginter, Suzuki, Banzuzi und Tietz geben Substanz. Besonders süß: Gutiérrez kam für 8,21 Mio. € direkt von Sebastian. ${seasonNote}`,
 runningGag:'Er erklärt den Fußball gern vollständig. Bei Kane reicht inzwischen „Welcome Harry“.', rank:2, value:'64,19 Mio. €', grade:'1,5', verdict:'Kane-Kader', trend:'↑', trendText:'deutlich kompletter', lastTransfer:'Nadir · 1,82 Mio. €', chance:'sehr hoch', status:'Der beste Einzelspieler der Liga hat inzwischen brauchbares Begleitpersonal.',
 players:['Tietz','Kane','Maina','Suzuki','Banzuzi','Boving','Nadir','Ginter','Deman','Lochoshvili','Gutiérrez','Kobel','Meyer'], keys:['Kane','Gutiérrez','Ginter'], key:'Kane',
 strength:'Kane besitzt ein absurd hohes Punktepotenzial. Gutiérrez und Ginter stabilisieren die Defensive, Tietz und Suzuki verbreitern die Optionen.', weakness:'Die Mannschaft bleibt stärker als andere Topkader von einem einzigen Superstar abhängig.',
 ingo:'Kane war der Königstransfer. Dass José danach weitergebaut hat, ist fast wichtiger. Dieser Kader ist heute näher an Sebastian als vor acht Tagen.', werner:'Kane plus eine funktionierende Achse dahinter. Das reicht für echte Titelchancen.', franz:'Sebastian: „Passiert nicht nochmal.“ José vermutlich: Bitte doch.'
},
{
 name:'Luca', team:'LucaCosta', profileTitle:'Der kreative Italo', claim:'Kimmich bleibt der Anker – aber die Konkurrenz ist in der letzten Woche näher gekommen.', image:managerImage('luca.png'),
 profileText:`Luca geht mit 62,69 Mio. € in die Saison. Kimmich, Moreira, Ache, Seiwald und Ryerson geben dem Team einen hohen Boden. Günther und Karius kamen hinzu, Honorát wurde zuletzt wieder verkauft. Rang eins aus der Sitzung vom 20. August hält die Redaktion heute nicht mehr aufrecht. ${seasonNote}`,
 runningGag:'Der dritte Platz verfolgt Luca seit Jahren. Passenderweise startet er diesmal im Power Ranking auf drei.', rank:3, value:'62,69 Mio. €', grade:'1,7', verdict:'Titelkader', trend:'↓', trendText:'weiter Spitzengruppe', lastTransfer:'Honorát verkauft · 4,485 Mio. €', chance:'hoch', status:'Sehr stabiler Kern, etwas weniger explosive Spitze als Sebastian und José.',
 players:['Hack','Ache','Moreira','Kimmich','Seiwald','Remberg','Aouchiche','Ryerson','Günther','Querfeld','Karius'], keys:['Kimmich','Moreira','Ryerson'], key:'Kimmich',
 strength:'Kimmich ist ein Premiumanker mit sehr hohem Punkteboden. Moreira, Ache und Ryerson geben Qualität in mehreren Mannschaftsteilen.', weakness:'Der Kader ist klein und im Angriff fehlt neben Moreira/Ache die ganz große Premiumspitze.',
 ingo:'Am 20. August hatte ich Luca auf eins. Heute auf drei. Nicht weil sein Kader schlechter geworden ist – die anderen haben stärker nachgelegt.', werner:'Kimmich bleibt einer der sichersten Bausteine der Liga. Titelkandidat, ohne Diskussion.', franz:'Acht Tage Tabellenführer im Power Ranking. Luca sollte den Screenshot einrahmen.'
},
{
 name:'Henning', team:'Arsene W.', profileTitle:'Der Gastgeber', claim:'Guirassy und Burkardt bleiben die Doppelspitze, vor der niemand gern spielt.', image:managerImage('henning.png'),
 profileText:`Henning steht bei 58,54 Mio. €. Guirassy und Burkardt sind weiterhin das stärkste Sturmduo der IWF. Prömel, Nmecha, Karaman und Larsson liefern Substanz; Yamamoto kam als zusätzliche Option. Der Kader bleibt kompakt und qualitativ konzentriert. ${seasonNote}`,
 runningGag:'Wenn Henning nüchtern „Was ist denn daran real?“ hören will, muss Tomi nur wieder Realtaria reizen.', rank:4, value:'58,54 Mio. €', grade:'1,8', verdict:'Luxussturm', trend:'→', trendText:'starke Achse', lastTransfer:'Yamamoto · 2,999 Mio. €', chance:'hoch', status:'Wenig Fett, sehr viel Qualität – Ausfälle würden aber sofort wehtun.',
 players:['Guirassy','Burkardt','Karaman','Prömel','F. Nmecha','Larsson','Hong','Poku','Yamamoto','Widmer','Ayhan','G. Mensah','Baumann'], keys:['Guirassy','Burkardt','F. Nmecha'], key:'Guirassy',
 strength:'Guirassy plus Burkardt ist die stärkste Doppelspitze der Liga; dahinter stehen mehrere verlässliche Bundesliga-Rollen.', weakness:'Der Kader ist nicht tief. Zwei Ausfälle treffen Henning stärker als die breiteren Konkurrenten.',
 ingo:'Henning muss niemanden beeindrucken. Er braucht nur Guirassy und Burkardt auf dem Platz.', werner:'Qualität vor Quantität. Das ist ein sehr guter Comunio-Kader.', franz:'Andere haben 20 Spieler. Henning hat Guirassy und Burkardt. Kann reichen.'
},
{
 name:'Jan', team:'Greifbramo', profileTitle:'Der Entertainer', claim:'Undav verändert alles – aus der Baustelle ist in einer Woche ein gefährlicher Kader geworden.', image:managerImage('jan.png'),
 profileText:`Jan macht den größten Sprung der letzten Woche. Undav kam für 13,888888 Mio. €, dazu Laimer. Mit Tillman, Baku, Engelhardt und Chema Andrés steht nun ein deutlich stärkeres Gerüst. Der Kaderwert springt auf 59,08 Mio. €. Kane ist weg – aber Bangkok hat wieder Hoffnung. ${seasonNote}`,
 runningGag:'Er wollte Kane nach Bangkok holen. Jetzt muss Undav den Reiseplan retten.', rank:5, value:'59,08 Mio. €', grade:'2,0', verdict:'Aufsteiger', trend:'↑', trendText:'größter Sprung', lastTransfer:'Undav · 13,889 Mio. €', chance:'gut', status:'Undav gibt Jan endlich den Premiumanker, der am 20. August noch fehlte.',
 players:['Burke','Höler','Bülter','Undav','Moerstedt','Martel','Tillman','Y. Engelhardt','Chema Andrés','Mwene','Laimer','Baku','Scally','Flekken'], keys:['Undav','Tillman','Baku'], key:'Undav',
 strength:'Undav hebt die offensive Decke massiv. Tillman, Baku und Laimer sorgen für weitere Punktequalität.', weakness:'Hinter den Topnamen bleibt die Tiefe etwas wechselhaft.',
 ingo:'Jan ist der Beweis, warum die Sitzung vom 20. August zu früh für endgültige Urteile war.', werner:'Undav ist ein Transfer, der ein Ranking verändert. Platz fünf ist verdient.', franz:'Kane wollte nicht nach Bangkok. Undav offenbar schon.'
},
{
 name:'Gregor', team:'Griesgram1', profileTitle:'Der Dino', claim:'Peroni im Urlaub, Schick im Sturm – Greg ist verdächtig gut vorbereitet.', image:managerImage('greg.png'),
 profileText:`Gregor steht bei 57,25 Mio. €. Schick, Grifo, Kramarić, Pavlović und Schlotterbeck sind echte Punktequellen; Kabak und Friedl geben defensive Stabilität. Während der Dino im Urlaub Peroni-Bilder mit „Immer dieser stechende Durst“ versieht, sieht sein Kader erstaunlich erwachsen aus. ${seasonNote}`,
 runningGag:'Der Dino ist im Urlaub. Der Durst bleibt im Trainingslager.', rank:6, value:'57,25 Mio. €', grade:'2,1', verdict:'Dino-Alarm', trend:'↑', trendText:'besser als sein Ruf', lastTransfer:'Batista Meier · 2,09 Mio. €', chance:'gut', status:'Mehr etablierte Punktelieferanten als Spekulation – für Greg fast revolutionär.',
 players:['Schick','Batista Meier','Grifo','Kramarić','Pavlović','Onyeka','Friedl','Kabak','N. Schlotterbeck','Engels','Urbig'], keys:['Schick','Grifo','N. Schlotterbeck'], key:'Schick',
 strength:'Viele bewährte Scorer und Stammspieler. Schick, Grifo, Kramarić und Pavlović können jede Woche liefern.', weakness:'Kleiner Kader und hinter den Leistungsträgern wenig Puffer.',
 ingo:'Gregor ist gefährlicher, als seine Urlaubsbilder vermuten lassen.', werner:'Das ist ein echter Punkte-Kader. Platz sechs kann schnell zu niedrig sein.', franz:'„Immer dieser stechende Durst.“ Endlich eine Leistungskennzahl, bei der Greg konstant Weltklasse ist.'
},
{
 name:'Tomi', team:'VADDERN 79', profileTitle:'Der Ausredenkönig', claim:'Titelkandidat? Vielleicht. Fünf Millionen Nothilfe? Eher nicht.', image:managerImage('tomi.png'),
 profileText:`Tomi steht bei 56,09 Mio. €. Demirović, Baumgartner, Doan, Brown, Diks und Quansah bilden weiterhin ein gutes Gerüst. Trotzdem muss die Redaktion ihre Titelkandidaten-Euphorie vom 20. August etwas einfangen. Tomis jüngster Finanzplan: „5 Mio. würden schon helfen.“ Begründung: „Ich bin doch jetzt Titelkandidat, hat die Redaktion gesagt.“ ${seasonNote}`,
 runningGag:'Eine Redaktionsprognose ist keine Bürgschaft. Das musste diese Woche eigens geklärt werden.', rank:7, value:'56,09 Mio. €', grade:'2,2', verdict:'Guter Kader', trend:'↓', trendText:'Prognose korrigiert', lastTransfer:'N. Banks verkauft · 2,2798 Mio. €', chance:'gut', status:'Gute Balance, aber die Redaktion war mit „Titelkandidat“ womöglich etwas schnell.',
 players:['Demirović','Königsdörffer','Bakayoko','Andrich','Neuhaus','Baumgartner','Doan','Weißhaupt','Alvero','Bernardo','Brown','Diks','Quansah','Dahmen'], keys:['Demirović','Brown','Baumgartner'], key:'Demirović',
 strength:'Breiter, vernünftiger Kader mit mehreren klaren Stammspielern und guter Abwehr.', weakness:'Kein Premiumspieler auf Kane/Kimmich/Guirassy-Niveau. Die Spitze ist weniger dominant als bei den Topteams.',
 ingo:'Gutes Team – da hat Häjne recht. Aber zwischen gutem Team und Titelkandidat liegt noch ein Spielplan.', werner:'Unsere Prognose vom 20. August war offensiv. Ich korrigiere: erweiterter Kreis.', franz:'„5 Mio. würden schon helfen.“ Wir haben den Antrag an die Abteilung für Fantasiefinanzierung weitergeleitet.'
},
{
 name:'Matthias', team:'mazzephase', profileTitle:'Der Pumper', claim:'Uzun, Karl, Onyedika – viel Upside, aber die Startelf muss jetzt sichtbar werden.', image:managerImage('matthias.png'),
 profileText:`Matthias besitzt mit 56,05 Mio. € weiterhin einen riesigen Kader. Uzun, Karl und Onyedika sind die spannendsten Assets; Fabio Silva, Harder, Dinkçi und die breite Defensive liefern viele Optionen. Die Transferwoche brachte weitere Umschichtungen. ${seasonNote}`,
 runningGag:'Er kennt das nächste Talent oft früher als die Verkaufsfunktion – und das alte Herforder-Etikett besser als jede neue Designrichtlinie.', rank:8, value:'56,05 Mio. €', grade:'2,3', verdict:'Upside-Kader', trend:'↓', trendText:'viel Projektion', lastTransfer:'Sebulonsen · 0,68 Mio. €', chance:'offen', status:'Große Decke, aber mehr offene Rollen als bei den sieben Teams davor.',
 players:['Dinkçi','Topp','Fábio Silva','Harder','Cardozo','Uzun','Karl','Darvich','Sambi Lokonga','Kaba','Onyedika','Rothe','Finkgräfe','Malatini','Sebulonsen','Badé','Castro-Montes','Herold','Blaswich','Backhaus'], keys:['Uzun','Karl','Onyedika'], key:'Uzun',
 strength:'Viele Spieler mit Marktwert- und Punktepotenzial; Uzun und Karl können den Kader nach oben ziehen.', weakness:'Zu viele Rollen sind weniger sicher als bei der Konkurrenz. Breite allein gewinnt kein Comunio.',
 ingo:'Matthias hat weiterhin einen Kader, der in sechs Wochen ganz anders bewertet werden kann.', werner:'Potenzial ist vorhanden. Ab heute interessieren mich Minuten und Punkte.', franz:'Beim Herforder-Logo ist Matthias entschlossener als bei manchen Kaderplätzen: „Was ist das für eine Scheiße?“'
},
{
 name:'Wassilios', team:'Wasko23', profileTitle:'Der Dino-Coach', claim:'Olise ist Weltklasse – die Frage bleibt, wer daneben den zweiten Unterschied macht.', image:managerImage('wassili.png'),
 profileText:`Wassilios steht bei 48,56 Mio. €. Olise ist mit 20,41 Mio. € der klare Superstar, dahinter folgen Reitz, Gadou, Sander und Chaïbi. Der Kader ist breit, aber weiterhin sehr stark auf einen Premiumspieler zugeschnitten. ${seasonNote}`,
 runningGag:'Ohne Wassili findet die IWF weder Unterkunft noch Richtung – auf dem Platz muss Olise den Weg zeigen.', rank:9, value:'48,56 Mio. €', grade:'2,6', verdict:'Olise-Wette', trend:'→', trendText:'starabhängig', lastTransfer:'Kaderstand 28.08.', chance:'Außenseiter+', status:'Olise hält jede Tür offen, der zweite Premiumanker fehlt weiterhin.',
 players:['Kownacki','Olise','Dardari','Albert','Geiger','Reitz','Chaïbi','Wätjen','Sander','Swider','Castrop','Condé','Kohr','Reggiani','V. Becker','Gadou','Ramaj','Köbbing','Schlager'], keys:['Olise','Reitz','Gadou'], key:'Olise',
 strength:'Olise ist einer der stärksten Einzelspieler der gesamten Liga. Dahinter gibt es mehrere solide Rollen.', weakness:'Zu viel Punktefantasie hängt an Olise; die zweite Premiumebene fehlt.',
 ingo:'Mit Olise kann Wassili jeden Spieltag gewinnen. Für eine Saisonprognose brauche ich mehr.', werner:'Ein Superstar und viele ordentliche Spieler. Platz neun klingt hart, zeigt aber die Qualität der Liga.', franz:'Olise trägt nicht nur Bayern – gefühlt trägt er auch Wassilis Power Ranking.'
},
{
 name:'Uwe', team:'uje', profileTitle:'Der X-Faktor', claim:'Orbán, Lee, Kofane – die Basis ist da. Jetzt müsste nur noch Uwe dauerhaft da sein.', image:managerImage('uwe.png'),
 profileText:`Uwe geht mit 36,73 Mio. € in die Saison. Orbán, Lee, Kofane, Futkeu und Nicolas sind brauchbare Bausteine. Das größte Fragezeichen bleibt wie immer nicht das Fußballwissen, sondern die Aktivität. ${seasonNote}`,
 runningGag:'Bei Uwe ist schon der Login eine Breaking News.', rank:10, value:'36,73 Mio. €', grade:'3,0', verdict:'Wildcard', trend:'→', trendText:'unberechenbar', lastTransfer:'Kaderstand 28.08.', chance:'Außenseiter', status:'Einzelne gute Bausteine, insgesamt aber klar weniger Qualität und Tiefe.',
 players:['Adamu','Futkeu','Kofane','Jeong','Maloney','Lee','R. Wagner','Micheler','Curda','W. Orbán','Koudossou','Rosenfelder','Coulibaly','Nicolas','Bredlow'], keys:['W. Orbán','Kofane','Lee'], key:'W. Orbán',
 strength:'Orbán ist ein verlässlicher Punkteanker, Lee und Kofane geben offensive Möglichkeiten.', weakness:'Zu wenig Premiumqualität und weiterhin das höchste Managementrisiko der Liga.',
 ingo:'Uwe ist nie völlig abzuschreiben. Aber der Kader startet klar hinter der Konkurrenz.', werner:'Für Platz zehn braucht es keine Pointe. Die Qualitätsdichte ist aktuell niedriger.', franz:'UWE IST ONLINE. Bitte Screenshot machen.'
}
]
