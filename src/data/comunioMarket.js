// Redaktionell erfasster Comunio-Stand der IWF League.
// Stand: 07.08.2026. Tagesbewegungen werden nur gezeigt, wenn sie verifiziert vorliegen.
const ranked = (name, club, value) => ({ name, club, value })

export const comunioMarket = {
  updatedAt: '07.08.2026 · 16:22 Uhr',
  dataStatus: 'Redaktionell geprüft',
  winners: [],
  losers: [],
  mostExpensive: [
    ranked('Joshua Kimmich', 'FC Bayern', '15,09 Mio. €'),
    ranked('Guirassy', 'Borussia Dortmund', '11,83 Mio. €'),
    ranked('Schick', 'Bayer Leverkusen', '10,95 Mio. €'),
    ranked('Demirović', 'VfB Stuttgart', '9,00 Mio. €'),
    ranked('F. Nmecha', 'Borussia Dortmund', '8,48 Mio. €')
  ],
  pointsCollectors: [],
  editorial: {
    editor: 'Werner',
    role: 'Wochenanalyse',
    headline: 'Luca bleibt vorne – dahinter wird es eng',
    text: '59,76 Millionen Euro reichen Luca weiter für Platz eins. Tomi, Henning und Gregor liegen aber eng dahinter. Sebastian sorgt mit drei Einkäufen für die auffälligste Bewegung der Woche.',
    managerAngle: 'Der Transfer der Woche geht an Gregor: Kramarić kommt für 7,93 Millionen Euro. Die Tagesgewinner und -verlierer bleiben leer, bis neue verifizierte Marktbewegungen vorliegen.'
  }
}
