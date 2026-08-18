const managerImage = filename => `${import.meta.env.BASE_URL}images/managers/${filename}`
const seasonNote = 'Aktueller Comunio-Kaderstand. Das Power Ranking bewertet ausdrücklich die sportliche Qualität des Kaders – nicht den reinen Marktwert. Kontostände sind unbekannt.'

export const managers = [
{
 name:'Sebastian', team:'DieseHaine', profileTitle:'Der Laptoptrainer', claim:'Nusa, Stiller, Gnabry, Rômulo – der Laptop läuft wieder im Leistungsmodus.', image:managerImage('sebastian.png'),
 profileText:`Sebastian führt den Kaderwert mit 65,20 Mio. € an. Entscheidend für Rang eins ist aber die Mischung: Nusa, Gnabry, Stiller und Rômulo liefern Spitze, dahinter gibt es ungewöhnlich viel brauchbare Tiefe. ${seasonNote}`,
 runningGag:'„Macht ihr mal … :)“ klingt bei Sebastian traditionell weniger nach Rückzug als nach Drohung.', rank:1, value:'65,20 Mio. €', grade:'1,4', verdict:'Favorit', trend:'↑', trendText:'stärkster Gesamtmix', lastTransfer:'Nebel · 3,65 Mio. €', chance:'sehr hoch', status:'Die Redaktion sieht aktuell den komplettesten Kader der Liga.',
 players:['Nusa','Rômulo','Gnabry','Sylla','Marino','Stiller','Nebel','Nartey','Stöger','Krauß','Vermeeren','Poreba','Mohr','Obermair','Pieper','Arthur','Caci','Rohr','Schwäbe'], keys:['Nusa','Stiller','Gnabry'], key:'Nusa',
 strength:'Sehr starke offensive Spitze, ein Premium-Mittelfeldspieler mit Stiller und viel verwertbare Breite.', weakness:'Die hohen Ausgaben der letzten Tage reduzieren vermutlich die Flexibilität. Der Kader muss jetzt liefern.',
 ingo:'Sebastian steht nicht wegen 65 Millionen oben, sondern weil die erste Elf inzwischen kaum noch echte Löcher zeigt.', werner:'Nusa, Stiller, Gnabry und Rômulo sind ein sehr gutes Gerüst. Dazu genug Tiefe für einen langen Comunio-Winter.', franz:'„MACHT IHR MAL :)“ – der Mann kauft vorher halb Leipzig und stellt sich dann unschuldig an die Seitenlinie.'
},
{
 name:'Luca', team:'LucaCosta', profileTitle:'Der kreative Italo', claim:'Nusa ist weg – aber Kimmich bleibt das teuerste Schweizer Taschenmesser der Liga.', image:managerImage('luca.png'),
 profileText:`Luca steht bei 64,28 Mio. €. Der Nusa-Verkauf kostet ihn im Ranking etwas Spitze, doch Kimmich, Moreira, Ache, Ryerson und eine starke Mittelfeldbreite halten ihn ganz oben. ${seasonNote}`,
 runningGag:'Der dritte Platz verfolgt ihn seit Jahren. Dieses Mal will Luca offenbar gar nicht erst in seine Nähe.', rank:2, value:'64,28 Mio. €', grade:'1,5', verdict:'Titelkader', trend:'→', trendText:'weiter ganz oben', lastTransfer:'Stange · 1,40 Mio. €', chance:'sehr hoch', status:'Kimmich als Anker, dazu Qualität in fast jedem Mannschaftsteil.',
 players:['Ache','Hack','Stange','Silas','Moreira','Kimmich','Seiwald','Remberg','Aouchiche','Ryerson','Querfeld','Kübler','Zetterer','Kauã Santos'], keys:['Kimmich','Moreira','Ryerson'], key:'Kimmich',
 strength:'Kimmich ist einer der wertvollsten Comunio-Bausteine überhaupt. Moreira, Ache und Ryerson geben zusätzliche Substanz.', weakness:'Nach Nusas Abgang fehlt im Sturm ein zweiter Spieler mit echtem Starpotenzial.',
 ingo:'Luca verliert Nusa, aber keinen Titelkader. Kimmich hält dieses Team auf einem sehr hohen Boden.', werner:'Weniger spektakulär als Sebastian, dafür mit Kimmich der vielleicht sicherste Einzelbaustein der Liga.', franz:'NUSA WEG, KIMMICH NOCH DA. Italienische Gelassenheit oder innerer Vulkan – wir werden es erfahren.'
},
{
 name:'Henning', team:'Arsene W.', profileTitle:'Der Gastgeber', claim:'Guirassy plus Burkardt: zwei Stürmer, bei denen die Redaktion nicht lange rechnen muss.', image:managerImage('henning.png'),
 profileText:`Henning kommt auf 57,43 Mio. €. Sein Rang drei ist ein Qualitätsurteil: Guirassy und Burkardt bilden das stärkste Sturmduo der Liga, Nmecha, Prömel und Karaman geben dem Mittelfeld Substanz. ${seasonNote}`,
 runningGag:'Wenn Henning etwas ankündigt, folgt entweder ein Transfer, eine Grundsatzdebatte oder Leffe.', rank:3, value:'57,43 Mio. €', grade:'1,7', verdict:'Luxussturm', trend:'→', trendText:'starke Achse', lastTransfer:'Ben Seghir verkauft · 1,25 Mio. €', chance:'hoch', status:'Weniger Breite als die Top zwei, dafür enorme Qualität an der Spitze.',
 players:['Guirassy','Burkardt','Prömel','Poku','F. Nmecha','Larsson','Karaman','Hong','Widmer','Ayhan','G. Mensah','Baumann'], keys:['Guirassy','Burkardt','F. Nmecha'], key:'Guirassy',
 strength:'Guirassy und Burkardt können eine Comunio-Saison fast im Alleingang tragen.', weakness:'Nur zwölf Spieler. Fällt einer der Stars aus, ist die Fallhöhe größer als bei Sebastian oder Luca.',
 ingo:'Henning hat weniger Spieler, aber sehr viele davon würde jeder Manager sofort nehmen.', werner:'Qualität vor Quantität. Das ist hier keine Floskel, sondern die Begründung für Platz drei.', franz:'ZWÖLF SPIELER, ZWEI KANONEN. Henning spart sich einfach den ganzen Kleinkram.'
},
{
 name:'Gregor', team:'Griesgram1', profileTitle:'Der Transferwirbel', claim:'Schick, Kramarić, Grifo, Pavlović, Schlotterbeck – aus Versehen ziemlich gut.', image:managerImage('greg.png'),
 profileText:`Gregor steht bei 54,24 Mio. €. Sein Kaderwert ist nur Mittel zum Zweck: Schick, Kramarić, Grifo, Pavlović und Schlotterbeck sind eine erstaunlich erwachsene Achse. ${seasonNote}`,
 runningGag:'Der Fußball-Laie besitzt inzwischen auffällig viele Spieler, die Fußball können.', rank:4, value:'54,24 Mio. €', grade:'1,8', verdict:'Dark Horse', trend:'↑', trendText:'verdächtig komplett', lastTransfer:'Dompé · 0,88 Mio. €', chance:'hoch', status:'Viele etablierte Punktelieferanten statt reiner Marktwertfantasie.',
 players:['Schick','Dompé','Ngankam','Quetant','Kramarić','Grifo','Pavlović','Onyeka','N. Schlotterbeck','Kabak','Friedl','Neuendorf','Engels','Urbig','Hellstern'], keys:['Schick','Grifo','N. Schlotterbeck'], key:'Schick',
 strength:'Mehrere bewährte Scorer und Stammspieler in allen Mannschaftsteilen.', weakness:'Hinter den Leistungsträgern wird es dünner; einige Kaderplätze sind klare Spekulation.',
 ingo:'Gregor ist der unangenehme Gegner dieses Rankings: wenig Glamour, aber sehr viele echte Punktequellen.', werner:'Schick, Grifo, Kramarić, Pavlović, Schlotterbeck – das ist qualitativ besser als Platz sechs nach Marktwert vermuten lässt.', franz:'ICH FORDERE EINE UNTERSUCHUNG. Greg hat plötzlich einen Plan – oder unfassbares Glück.'
},
{
 name:'Jose', team:'stjosse', profileTitle:'Der Raumdeuter', claim:'Welcome Harry. Mehr muss man zu diesem Morgen eigentlich nicht sagen.', image:managerImage('jose.png'),
 profileText:`José springt mit Harry Kane auf 54,75 Mio. € Kaderwert. Der Königstransfer verändert alles: Kane ist der beste Einzelspieler dieses Kaders und vermutlich der mächtigste Comunio-Stürmer der Liga. Tietz, Suzuki, Mohya und Ginter bilden das Gerüst dahinter. ${seasonNote}`,
 runningGag:'Er erklärt den Fußball vollständig. Diesmal erklärt Harry Kane den anderen Managern den Unterschied.', rank:5, value:'54,75 Mio. €', grade:'1,9', verdict:'Kane-Faktor', trend:'↑', trendText:'Königstransfer', lastTransfer:'Kane · 26,30 Mio. €', chance:'hoch', status:'Der beste Einzeltransfer der Vorbereitung katapultiert José in die erweiterte Spitzengruppe.',
 players:['Kane','Tietz','Alfa-Ruprecht','Suzuki','Banzuzi','Mohya','Ginter','Deman','Jaquez','Lochoshvili','Kobel','Meyer'], keys:['Kane','Tietz','Ginter'], key:'Kane',
 strength:'Harry Kane. Dazu mit Tietz, Suzuki, Mohya und Ginter ein brauchbares Fundament.', weakness:'Nur zwölf Spieler und sehr starke Konzentration auf Kane. Die Tiefe bleibt deutlich schwächer als bei den Top vier.',
 ingo:'Kane macht aus einem unfertigen Kader sofort einen gefährlichen Kader. Für ganz oben fehlt mir noch etwas Breite.', werner:'26,3 Millionen sind brutal – sportlich aber nachvollziehbar. Kein anderer Einzeltransfer verändert ein Ranking so stark.', franz:'WELCOME HARRY! Während Jan trauert und Tomi Wortspiele macht, hält José einfach das Trikot hoch.'
},
{
 name:'Matthias', team:'mazzephase', profileTitle:'Der Pumper', claim:'Viele Talente, viel Kapital, viel Hoffnung – jetzt muss aus Masse Klasse werden.', image:managerImage('matthias.png'),
 profileText:`Matthias besitzt einen 59,89-Mio.-€-Kader mit enormer Breite. Uzun, Karl, Onyedika, Fabio Silva und Ansah haben Qualität und Fantasie – die Redaktion sieht aber mehr offene Wetten als bei den fünf Teams vor ihm. ${seasonNote}`,
 runningGag:'Er kennt das nächste Talent oft früher als die Verkaufsfunktion.', rank:6, value:'59,89 Mio. €', grade:'2,0', verdict:'Upside-Kader', trend:'→', trendText:'viel Potenzial', lastTransfer:'Finkgräfe · 0,59 Mio. €', chance:'gut', status:'Hohe Decke, aber mehr Projektion und Konkurrenzkämpfe als bei der Spitze.',
 players:['Ansah','Fábio Silva','Harder','Dinkçi','Topp','Milošević','Campbell','Karl','Sambi Lokonga','Uzun','Darvich','Kaba','Onyedika','Badé','Castro-Montes','Rothe','Belocian','Günter','Finkgräfe','Boey','Malatini','Backhaus','Blaswich'], keys:['Uzun','Karl','Onyedika'], key:'Uzun',
 strength:'Enorme Breite und mehrere Spieler mit großem Entwicklungspotenzial.', weakness:'Viele Namen müssen ihre Rolle erst festigen. Der hohe Kaderwert garantiert hier weniger Punkte als bei etablierten Stars.',
 ingo:'Matthias kann in einem Monat deutlich höher stehen. Heute sind mir noch zu viele Rollen nicht endgültig geklärt.', werner:'Sehr guter Spekulationskader, aber ein Power Ranking ist keine Depotbewertung.', franz:'23 SPIELER! Matthias hat offenbar beschlossen, einfach alle zu kaufen und später nachzuzählen.'
},
{
 name:'Tomi', team:'VADDERN 79', profileTitle:'Der Ausredenkönig', claim:'Pleite und ahnungslos? Der Kader sieht deutlich weniger hilflos aus als sein Manager.', image:managerImage('tomi.png'),
 profileText:`Tomi steht bei 58,22 Mio. €. Demirović, Doan, Brown, Diks und Quansah sind ein solides Fundament. Sein öffentliches Urteil zum neuen Comunio-Design fällt deutlich schlechter aus als das Urteil der Redaktion über seinen Kader. ${seasonNote}`,
 runningGag:'„Pleite und Ahnungslos“ ist ab sofort entweder Zustandsbeschreibung oder neue Vereinsphilosophie.', rank:7, value:'58,22 Mio. €', grade:'2,2', verdict:'Solide Substanz', trend:'→', trendText:'besser als die Laune', lastTransfer:'Kaderstand aktuell', chance:'gut', status:'Breit und ordentlich, aber weniger echte Premiumspitze als die Konkurrenz davor.',
 players:['Demirović','Grüll','Königsdörffer','Bakayoko','Reyna','Doan','Andrich','Neuhaus','Alvero','Weißhaupt','Brown','Diks','Quansah','Bernardo','N. Banks','Juranović','Pinckert','Dahmen'], keys:['Demirović','Doan','Brown'], key:'Demirović',
 strength:'Gute Breite und mehrere verlässliche Bundesliga-Spieler.', weakness:'Kein Spieler besitzt aktuell den Kane-, Kimmich-, Guirassy- oder Nusa-Faktor.',
 ingo:'Tomi ist nicht ahnungslos aufgestellt. Der Kader ist solide und deutlich besser als die Selbstbeschreibung.', werner:'Das neue Design mag Scheiße sein – Demirović und Doan werden dadurch nicht schlechter.', franz:'PLEITE UND AHNUNGSLOS! Matthias sagt „richtig Scheiße“. Endlich wieder echte Geschlossenheit in der IWF.'
},
{
 name:'Wassilios', team:'Wasko23', profileTitle:'Der Dino-Coach', claim:'Olise trägt die Krone – und ziemlich viel vom restlichen Kader gleich mit.', image:managerImage('wassili.png'),
 profileText:`Wassilios kommt auf 47,12 Mio. €. Olise ist der klare Superstar, dahinter folgen Reitz, Gadou, Chaïbi und Sander. Für die Redaktion ist das weiterhin eine starke Ein-Mann-Spitze mit ordentlichem Unterbau. ${seasonNote}`,
 runningGag:'Ohne Wassili findet die IWF weder Unterkunft noch Richtung.', rank:8, value:'47,12 Mio. €', grade:'2,5', verdict:'Olise-Wette', trend:'→', trendText:'starabhängig', lastTransfer:'Kaderstand aktuell', chance:'offen', status:'Ein Superstar hält den Kader gefährlich; die zweite Premiumebene fehlt.',
 players:['Olise','Dardari','Kownacki','Albert','Reitz','Sander','Chaïbi','Castrop','Geiger','Wätjen','Swider','Condé','Kohr','Reggiani','V. Becker','Gadou','Ramaj','Köbbing','Schlager'], keys:['Olise','Reitz','Gadou'], key:'Olise',
 strength:'Olise kann Spiele und Comunio-Duelle allein entscheiden.', weakness:'Zu viel Last auf einem Spieler; hinter Olise fehlt der zweite große Punkteanker.',
 ingo:'Wassili bleibt wegen Olise gefährlich. Für mehr als Platz acht brauche ich noch einen zweiten echten Unterschiedsspieler.', werner:'Die Spitze ist Champions-League-Niveau, die Breite eher Donnerstagabend.', franz:'OLISE UND DIE 18 ZWERGE! Das klingt unfair, ist aber ein gutes Magazincover.'
},
{
 name:'Uwe', team:'uje', profileTitle:'Der X-Faktor', claim:'Kofane, Orbán, Lee – nicht leer, aber der X-Faktor bleibt vor allem Uwes Aktivität.', image:managerImage('uwe.png'),
 profileText:`Uwe steht bei 36,57 Mio. €. Kofane, Orbán, Lee, Futkeu und Nicolas ergeben eine brauchbare Basis. Wie immer entscheidet aber nicht nur der Kader, sondern die Frage, wie oft der Manager ihn tatsächlich anschaut. ${seasonNote}`,
 runningGag:'Niemand weiß, ob Uwe schläft, plant oder längst den nächsten wilden Transfer vorbereitet.', rank:9, value:'36,57 Mio. €', grade:'2,9', verdict:'Wildcard', trend:'→', trendText:'unberechenbar', lastTransfer:'Kaderstand aktuell', chance:'Außenseiter', status:'Ein paar gute Bausteine, insgesamt aber klar weniger Qualität als die obere Hälfte.',
 players:['Kofane','Adamu','Futkeu','Lee','Jeong','Maloney','R. Wagner','Micheler','Curda','W. Orbán','Coulibaly','Rosenfelder','Koudossou','Nicolas','Bredlow'], keys:['Kofane','W. Orbán','Lee'], key:'Kofane',
 strength:'Kofane, Orbán und Lee geben dem Team ein solides Gerüst.', weakness:'Zu wenig hochwertige Tiefe – und Aktivität bleibt die größte unbekannte Variable.',
 ingo:'Uwe hat genug Qualität, um nicht abgeschrieben zu werden. Für mehr braucht es aber Transfers und Aufmerksamkeit.', werner:'Der Kader ist derzeit schlicht schwächer als die acht davor.', franz:'UWE IST DER EINZIGE MANAGER, BEI DEM DER LOGIN SELBST EIN TRANSFERGERÜCHT IST.'
},
{
 name:'Jan', team:'Greifbramo', profileTitle:'Der Entertainer', claim:'Kane wollte nach Bangkok. Kane ging zu Muhle. Das Leben ist hart.', image:managerImage('jan.png'),
 profileText:`Jan steht bei 34,05 Mio. €. Baku, Chema Andrés, Tillman, Bülter und Flekken sind brauchbar, aber der Kader ist klein und ohne echten Premiumspieler. Besonders bitter: Kane, sein Star der Vorsaison, landet ausgerechnet bei José. ${seasonNote}`,
 runningGag:'Bangkok, Bayern und Bilderrätsel – und jetzt auch noch Kane-Liebeskummer.', rank:10, value:'34,05 Mio. €', grade:'3,0', verdict:'Noch Baustelle', trend:'↓', trendText:'Kane verpasst', lastTransfer:'Höler · 2,55 Mio. €', chance:'Außenseiter', status:'Gute Einzelteile, aber aktuell der dünnste Qualitätskader der Liga.',
 players:['Bülter','Höler','Burke','Moerstedt','Tillman','Martel','Y. Engelhardt','Chema Andrés','Baku','Mwene','Flekken'], keys:['Baku','Tillman','Chema Andrés'], key:'Baku',
 strength:'Baku, Tillman und Chema Andrés sind brauchbare Bausteine; der Kader lässt noch Raum für große Einkäufe.', weakness:'Zu wenig Spitze und nur elf Spieler. Kane hätte genau das Problem gelöst.',
 ingo:'Jan ist nicht chancenlos, aber im aktuellen Qualitätsvergleich fehlt ihm der Spieler, vor dem Gegner Respekt haben.', werner:'Kane wäre der Sprung gewesen. Ohne ihn bleibt der Kader vorerst auf Platz zehn.', franz:'„KANE BEI MUHLE :(“ – Bangkok trauert. José antwortet mit „Welcome Harry“. Fußball kann grausam sein.'
}
]
