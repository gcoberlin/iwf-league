const managerImage = filename => `${import.meta.env.BASE_URL}images/managers/${filename}`

const seasonNote = 'Stand 14.08.2026 – Kader und Kaderwerte entsprechen dem aktuell erfassten Comunio-Stand. Kontostände sind nicht bekannt; Manager können im Minus sein.'

export const managers = [
  {
    name:'Luca', team:'LucaCosta', profileTitle:'Der kreative Italo', claim:'71 Millionen Kaderwert – und diesmal ist es nicht nur Masse.', image:managerImage('luca.png'),
    profileText:`Luca besitzt mit 71,25 Mio. € den wertvollsten Kader der Liga. Kimmich, Nusa, Moreira, Ache und Ryerson ergeben bereits eine sehr klare Achse. ${seasonNote}`,
    runningGag:'Der dritte Platz verfolgt ihn treu – aktuell läuft Luca allerdings vorneweg.', rank:1, value:'71,25 Mio. €', grade:'1,4', verdict:'Der Maßstab', trend:'↑', trendText:'klar vorne', lastTransfer:'Moreira · 8,80 Mio. €', chance:'sehr hoch', status:'Höchster Kaderwert und aus Sicht der Redaktion aktuell auch der stärkste Kader.',
    players:['Nusa','Ache','Hack','Silas','Moreira','Kimmich','Seiwald','Remberg','Aouchiche','Ryerson','Querfeld','Kübler','Zetterer','Kauã Santos'], keys:['Kimmich','Nusa','Moreira'], key:'Kimmich',
    strength:'Spitzenqualität und Breite passen zusammen. Kimmich ist der Fixpunkt, Nusa und Moreira bringen enormes Potenzial.', weakness:'Der hohe Kaderwert ist kein Kontostand. Wie viel finanzieller Spielraum noch vorhanden ist, bleibt offen.',
    ingo:'Luca ist derzeit der Maßstab. Nicht nur wegen der 71 Millionen, sondern weil man schon jetzt eine echte Startelf erkennt.', werner:'Kimmich, Nusa, Moreira, Ache und Ryerson – das ist Substanz. Platz eins im Power Ranking ist verdient.', franz:'71 MILLIONEN! Luca ist entweder reich oder sehr, sehr tief im Dispo.'
  },
  {
    name:'Henning', team:'Arsene W.', profileTitle:'Der Gastgeber', claim:'Leffe auf, Guirassy und Burkardt vorne rein – läuft.', image:managerImage('henning.png'),
    profileText:`Henning steht bei 56,83 Mio. €. Guirassy und Burkardt bilden das teuerste Sturmduo der Liga, dahinter warten Nmecha, Prömel und Karaman. Zurück aus dem Urlaub wird erst einmal Leffe genossen. ${seasonNote}`,
    runningGag:'Wenn Henning etwas ankündigt, beginnt entweder ein Transfer oder eine Grundsatzdebatte.', rank:2, value:'56,83 Mio. €', grade:'1,7', verdict:'Titelreif', trend:'↑', trendText:'starke Achse', lastTransfer:'Can verkauft · 0,618 Mio. €', chance:'hoch', status:'Konzentrierter Kader mit sehr starker Spitze.',
    players:['Guirassy','Burkardt','Ben Seghir','Prömel','Poku','F. Nmecha','Larsson','Karaman','Hong','Widmer','Ayhan','G. Mensah','Baumann'], keys:['Guirassy','Burkardt','F. Nmecha'], key:'Guirassy',
    strength:'Guirassy und Burkardt sind ein enormes Fundament. Viel Kapital steckt in Spielern, die tatsächlich tragen sollen.', weakness:'Der Kader ist schmaler als bei Matthias oder Sebastian. Verletzungen würden schneller durchschlagen.',
    ingo:'Henning hat keine 23 Spieler nötig. Seine Qualität sitzt sehr konzentriert in einer starken Achse.', werner:'Die Struktur gefällt mir besser als der reine Marktwert vermuten lässt. Ein klarer Titelkandidat.', franz:'LEFFE UND LUXUSSTURM! Henning hat die Vorbereitung verstanden.'
  },
  {
    name:'Sebastian', team:'DieseHaine', profileTitle:'Der Laptoptrainer', claim:'Schmid war nicht real. Der anschließende Großeinkauf schon.', image:managerImage('sebastian.png'),
    profileText:`Sebastian ist auf 55,66 Mio. € hochgeschossen. Schmid wurde nach dessen Wechsel zu Frosinone mit rund 1,05 Mio. € Verlust verkauft; danach kamen unter anderem Stiller, Rômulo, Schwäbe, Pieper und Vermeeren. ${seasonNote}`,
    runningGag:'Er verbrennt Praktikanten, Excel-Dateien – und diesmal eine Million mit Romano Schmid.', rank:3, value:'55,66 Mio. €', grade:'1,8', verdict:'Laptop hochgefahren', trend:'↑', trendText:'Großumbau', lastTransfer:'Stiller · 9,34 Mio. €', chance:'hoch', status:'Nach dem Schmid-Fehler sofort reagiert und den Kader massiv aufgewertet.',
    players:['Rômulo','Gnabry','Sylla','Marino','Stiller','Nartey','Stöger','Krauß','Aséko','Vermeeren','Poreba','Mohr','Obermair','Pieper','Vagnoman','Arthur','Caci','Rohr','Schwäbe'], keys:['Stiller','Gnabry','Rômulo'], key:'Stiller',
    strength:'Viele relevante Spieler und inzwischen deutlich mehr Breite. Stiller, Gnabry und Rômulo geben dem Kader Spitze.', weakness:'Der Schmid-Fehlgriff zeigt das Risiko des aggressiven Tradings. Auch hier kennen wir den Kontostand nicht.',
    ingo:'Der Fehler mit Schmid ist real. Noch realer ist aber, wie schnell Sebastian danach den nächsten Kader gebaut hat.', werner:'Fehler erkannt, Verlust realisiert, Kapital neu eingesetzt. Sportlich ist der Kader jetzt klar stärker.', franz:'SCHMID INS KLO, LAPTOP WIEDER AN! Eine Million weg und trotzdem schon wieder 55 Millionen auf dem Hof.'
  },
  {
    name:'Gregor', team:'Griesgram1', profileTitle:'Der Transferwirbel', claim:'Bier mit Sebastian – und nebenbei einen erstaunlich guten Kader gebaut.', image:managerImage('greg.png'),
    profileText:`Gregor steht bei 54,73 Mio. €. Schick, Pavlović, Grifo, Kramarić und Schlotterbeck lesen sich erstaunlich stark. Beim Besuch von Sebastian in Bayern soll allerdings eher Bier als Kaderanalyse Thema gewesen sein. ${seasonNote}`,
    runningGag:'Keine Ahnung vom Fußball – aber inzwischen verdächtig viele gute Spieler.', rank:4, value:'54,73 Mio. €', grade:'1,9', verdict:'Dark Horse', trend:'↑', trendText:'verdächtig stark', lastTransfer:'Skhiri verkauft · 1,465 Mio. €', chance:'hoch', status:'Der vielleicht überraschend kompletteste Kader hinter der Spitze.',
    players:['Schick','Ngankam','Quetant','Kramarić','Grifo','Pavlović','João Palhinha','Onyeka','N. Schlotterbeck','Kabak','Friedl','Neuendorf','Engels','Urbig','Hellstern'], keys:['Schick','Pavlović','N. Schlotterbeck'], key:'Schick',
    strength:'Mehrere etablierte Punktelieferanten und starke Namen in allen Mannschaftsteilen.', weakness:'Einige billige Kaderplätze sind Wetten. Außerdem bleibt offen, ob Greg weiß, warum sein Kader so gut ist.',
    ingo:'Vielleicht wurde beim Biergipfel doch fünf Minuten über Fußball gesprochen.', werner:'Schick, Pavlović, Grifo und Schlotterbeck sind kein Zufall mehr. Gregor gehört in die Spitzengruppe.', franz:'ERMITTLUNGEN EINGELEITET! Greg hat plötzlich einen guten Kader.'
  },
  {
    name:'Matthias', team:'mazzephase', profileTitle:'Der Pumper', claim:'Vom Kiosk-Hellen zum 31-Millionen-Shoppingrausch.', image:managerImage('matthias.png'),
    profileText:`Matthias explodiert auf 62,14 Mio. € Kaderwert. Uzun, Karl, Onyedika, Ansah, Fabio Silva, Milošević und Malatini kamen in wenigen Tagen – rund 31,8 Mio. € Einkaufsvolumen allein für diese sieben. ${seasonNote}`,
    runningGag:'Er kennt das nächste Talent oft früher als die Verkaufsfunktion.', rank:5, value:'62,14 Mio. €', grade:'2,0', verdict:'Großinvestor', trend:'↑', trendText:'explodiert', lastTransfer:'Uzun · 8,10 Mio. €', chance:'hoch', status:'Zweithöchster Kaderwert, aber 23 Spieler und unbekannter Kontostand bremsen die Euphorie.',
    players:['Uzun','Ansah','Mbangula','Fábio Silva','Harder','Dinkçi','Topp','Milošević','Sieb','Campbell','Karl','Sambi Lokonga','Castro-Montes','Darvich','Kaba','Onyedika','Badé','Rothe','Belocian','Günter','Malatini','Backhaus','Blaswich'], keys:['Karl','Uzun','Onyedika'], key:'Karl',
    strength:'Enorme Breite und mehrere teure Neuzugänge mit echtem Potenzial. Die Mannschaft ist in einer Woche komplett verändert.', weakness:'23 Spieler binden sehr viel Kapital. 62 Millionen Kaderwert können bei aggressivem Einkauf auch einen tiefroten Kontostand bedeuten.',
    ingo:'Matthias ist die große Bewegung der Woche. Aus einem unscheinbaren Kader wurde binnen Tagen ein Schwergewicht.', werner:'Der Marktwert beeindruckt, die Effizienz muss sich erst zeigen. Ich möchte den Kontostand sehen.', franz:'31 MILLIONEN SHOPPING! Das Helle vom Kiosk war offenbar ein Pre-Workout.'
  },
  {
    name:'Tomi', team:'VADDERN 79', profileTitle:'Der Ausredenkönig', claim:'Zurück aus dem Urlaub – beim Biertermin trotzdem verhindert.', image:managerImage('tomi.png'),
    profileText:`Tomi ist zurück aus dem Urlaub und steht bei 56,86 Mio. €. Demirović, Brown, Doan, Diks und Quansah ergeben einen breiten Kader. Zum Bier mit Christoph, Wassili, Uwe und Luca schaffte er es trotzdem nicht. ${seasonNote}`,
    runningGag:'Für Transfers reicht die Zeit immer. Für Treffen findet sich zuverlässig eine Ausrede.', rank:6, value:'56,86 Mio. €', grade:'2,1', verdict:'Stark, aber still', trend:'→', trendText:'solide', lastTransfer:'Kaderstand 14.08.', chance:'gut', status:'Gute Breite, aber weniger Spitzenwert als die Manager vor ihm im Power Ranking.',
    players:['Demirović','Grüll','Königsdörffer','Bakayoko','Reyna','Doan','Andrich','Neuhaus','Alvero','Weißhaupt','Brown','Diks','Quansah','Bernardo','N. Banks','Juranović','Pinckert','Dahmen'], keys:['Demirović','Brown','Doan'], key:'Demirović',
    strength:'Sehr ordentliche Breite und mehrere sichere, wertvolle Säulen.', weakness:'Im direkten Vergleich fehlt derzeit der eine absolute Premiumanker. Und die Finanzlage bleibt nach Hilferufen nebulös.',
    ingo:'Tomi ist sportlich besser aufgestellt, als seine Finanzkommunikation vermuten lässt.', werner:'56,86 Millionen sind stark. Im Power Ranking sehe ich fünf Kader mit etwas mehr Spitze oder Dynamik.', franz:'57 MILLIONEN KADER UND TROTZDEM NICHT ZUM BIER! Wo geht das ganze Geld hin?'
  },
  {
    name:'Wassilios', team:'Wasko23', profileTitle:'Der Dino-Coach', claim:'Zurück aus Italien – jetzt wieder Bierdienst in der Heimat.', image:managerImage('wassili.png'),
    profileText:`Wassilios ist aus dem Urlaub zurück und steht bei 44,64 Mio. €. Beim Treffen mit Christoph, Uwe und Luca war der IWF-Dino natürlich dabei. Sportlich steckt mit 17,00 Mio. € ein großer Teil des Kaderwerts in Olise. ${seasonNote}`,
    runningGag:'Ohne Wassili findet die IWF weder Unterkunft noch Richtung.', rank:7, value:'44,64 Mio. €', grade:'2,4', verdict:'Topstar-Wette', trend:'→', trendText:'konzentriert', lastTransfer:'Kaderstand 14.08.', chance:'offen', status:'Ein Superstar, dahinter deutlich weniger Marktwert als bei der Spitzengruppe.',
    players:['Olise','Dardari','Kownacki','Albert','Reitz','Sander','Chaïbi','Castrop','Geiger','Wätjen','Swider','Condé','Kohr','Reggiani','V. Becker','Gadou','Ramaj','Köbbing','Schlager'], keys:['Olise','Reitz','Gadou'], key:'Olise',
    strength:'Olise ist ein echter Unterschiedsspieler. Reitz, Sander und Gadou geben zusätzliche Substanz.', weakness:'Rund 38 Prozent des gesamten Kaderwerts stecken in Olise. Hinter dem Superstar fehlt aktuell die zweite Premiumebene.',
    ingo:'Wassili hat den Star. Jetzt braucht er um ihn herum noch ein wenig mehr Mannschaft.', werner:'Die Konzentration auf Olise ist sportlich nachvollziehbar, erhöht aber das Risiko deutlich.', franz:'DINO ZURÜCK! Peroni ausgetrunken, jetzt muss der Rest des Kaders wachsen.'
  },
  {
    name:'Jan', team:'Greifbramo', profileTitle:'Der Entertainer', claim:'Zurück in Bangkok: Kader klein, Bilderrätsel groß.', image:managerImage('jan.png'),
    profileText:`Jan ist zurück in BKK, verschickt wieder Bilderrätsel und hat seinen Kader auf zehn Spieler reduziert. Tillman, Baku und Chema Andrés führen einen Kader von 30,95 Mio. € an. Verkäufe könnten allerdings viel Cash freigemacht haben. ${seasonNote}`,
    runningGag:'Bangkok, Bayern und Bilderrätsel – selten ist klar, was als Nächstes kommt.', rank:8, value:'30,95 Mio. €', grade:'2,7', verdict:'Cash unbekannt', trend:'↓', trendText:'Kader bereinigt', lastTransfer:'Tillman · 5,556 Mio. €', chance:'offen', status:'Nur zehn Spieler; der niedrige Kaderwert kann bewusst aufgebautem Cash gegenüberstehen.',
    players:['Bülter','Burke','Moerstedt','Tillman','Martel','Y. Engelhardt','Chema Andrés','Baku','Mwene','Flekken'], keys:['Tillman','Baku','Chema Andrés'], key:'Tillman',
    strength:'Kompakter Kader mit brauchbaren Bausteinen. Viele Verkäufe könnten finanziellen Spielraum geschaffen haben.', weakness:'Aktuell fehlt Breite und ein echter Topstar. Ohne Kontostand ist die Lage schwer zu bewerten.',
    ingo:'Bei Jan ist Platz acht ausdrücklich vorläufig. Zehn Spieler sprechen dafür, dass noch etwas kommen kann.', werner:'Marktwert allein wäre hier irreführend. Erst die nächsten Einkäufe zeigen, ob die Bereinigung sinnvoll war.', franz:'KAAS-KIND, YANKEE, BANGKOK! Ich verstehe das Rätsel nicht – und den Kontostand erst recht nicht.'
  },
  {
    name:'Uwe', team:'uje', profileTitle:'Der X-Faktor', claim:'Beim Bier zuverlässig – bei Comunio bleibt die Aktivität die offene Frage.', image:managerImage('uwe.png'),
    profileText:`Uwe steht bei 33,93 Mio. €. Kofane und Orbán sind mit je rund 6,5 Mio. € die Säulen. Beim Bier mit Christoph, Wassili und Luca war der X-Faktor präsent – jetzt müsste diese Aktivität nur noch auf Comunio überspringen. ${seasonNote}`,
    runningGag:'Niemand weiß, ob Uwe schläft, plant oder längst den nächsten Coup vorbereitet.', rank:9, value:'33,93 Mio. €', grade:'2,9', verdict:'Wildcard', trend:'→', trendText:'unberechenbar', lastTransfer:'Kaderstand 14.08.', chance:'offen', status:'Brauchbare Basis, aber weiterhin abhängig von der Aktivität des Managers.',
    players:['Kofane','Adamu','Futkeu','Lee','Jeong','Maloney','R. Wagner','Micheler','Curda','W. Orbán','Coulibaly','Rosenfelder','Koudossou','Nicolas','Bredlow'], keys:['Kofane','W. Orbán','Nicolas'], key:'Kofane',
    strength:'Kofane, Orbán, Lee und Nicolas geben dem Team ein brauchbares Gerüst.', weakness:'Der Kader braucht weitere Qualität – und vor allem regelmäßige Pflege.',
    ingo:'Uwes Kader ist nicht hoffnungslos. Die eigentliche Variable bleibt Uwe selbst.', werner:'Mit Aktivität wäre mehr möglich. Ohne Aktivität ist Rang neun plausibel.', franz:'BEIM BIER ONLINE! Jetzt bitte denselben Login-Reflex bei Comunio.'
  },
  {
    name:'Jose', team:'stjosse', profileTitle:'Der Raumdeuter', claim:'Kleiner Kader, klare Achse – aber noch zu wenig Material.', image:managerImage('jose.png'),
    profileText:`Jose kommt auf 28,98 Mio. €. Tietz, Palacios, Mohya und Suzuki bilden eine ordentliche Achse, doch zwölf Spieler sind für den Saisonstart noch knapp. Meyer und Alfa-Ruprecht kamen günstig dazu. ${seasonNote}`,
    runningGag:'Er erklärt den Fußball vollständig. Sebastian nimmt ihm trotzdem regelmäßig die Trophäe ab.', rank:10, value:'28,98 Mio. €', grade:'3,0', verdict:'Noch unfertig', trend:'→', trendText:'kleine Schritte', lastTransfer:'Alfa-Ruprecht · 0,770 Mio. €', chance:'offen', status:'Solides Fundament, aber noch klarer Handlungsbedarf.',
    players:['Tietz','Alfa-Ruprecht','Suzuki','Palacios','Banzuzi','Mohya','Deman','Jaquez','Lochoshvili','Kobel','Meyer'], keys:['Tietz','Palacios','Mohya'], key:'Palacios',
    strength:'Vier Spieler um oder über vier Millionen geben dem Kader eine klare Basis.', weakness:'Zu wenig Breite und aktuell kein Premiumspieler. Für einen Sprung im Ranking braucht es noch zwei bis drei Treffer.',
    ingo:'Jose ist noch nicht fertig. Der Kader wirkt eher wie ein Grundriss als wie das fertige Haus.', werner:'Die Achse ist ordentlich, aber im Vergleich zur Spitze fehlt schlicht Kapital auf dem Platz.', franz:'RAUMDEUTER SUCHT NOCH RÄUME IM KADER! Elf Namen sind ein Anfang.'
  }
]
