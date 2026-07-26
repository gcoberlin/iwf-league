// Zentrale, konsistente Markt-Datenquelle für ANSTOSS.
//
// Wichtig:
// - Jeder Spielerwert steht nur EINMAL in `players`.
// - Gewinner, Verlierer und Rankings greifen auf dieselben Spielerobjekte zu.
// - Dadurch kann derselbe Spieler nicht mehr gleichzeitig mit zwei Marktwerten erscheinen.
// - Bis eine belastbare öffentliche Schnittstelle angebunden ist, werden ausschließlich
//   redaktionell geprüfte Werte angezeigt.

const players = {
  kimmich: {
    name: 'Joshua Kimmich',
    shortName: 'Kimmich',
    club: 'FC Bayern',
    value: '12,93 Mio. €'
  },
  brown: {
    name: 'Brown',
    shortName: 'Brown',
    club: 'Eintracht Frankfurt',
    value: '7,35 Mio. €'
  },
  nusa: {
    name: 'Nusa',
    shortName: 'Nusa',
    club: 'RB Leipzig',
    value: '7,33 Mio. €'
  },
  nmecha: {
    name: 'F. Nmecha',
    shortName: 'F. Nmecha',
    club: 'Borussia Dortmund',
    value: '6,76 Mio. €'
  },
  gnabry: {
    name: 'Gnabry',
    shortName: 'Gnabry',
    club: 'FC Bayern',
    value: '6,07 Mio. €'
  }
}

const withChange = (player, change) => ({
  name: player.shortName ?? player.name,
  club: player.club,
  change,
  value: player.value
})

const ranked = player => ({
  name: player.name,
  club: player.club,
  value: player.value
})

export const comunioMarket = {
  updatedAt: '26.07.2026 · 08:00 Uhr',
  dataStatus: 'Redaktionell geprüft',

  winners: [
    withChange(players.nusa, '+1,34 Mio. €'),
    withChange(players.brown, '+0,92 Mio. €'),
    withChange(players.nmecha, '+0,71 Mio. €'),
    withChange(players.gnabry, '+0,58 Mio. €'),
    withChange(players.kimmich, '+0,44 Mio. €')
  ],

  // Keine Fantasiedaten: Solange keine geprüften Verliererdaten vorliegen,
  // bleibt dieser Bereich bewusst leer.
  losers: [],

  mostExpensive: [
    ranked(players.kimmich),
    ranked(players.brown),
    ranked(players.nusa),
    ranked(players.nmecha),
    ranked(players.gnabry)
  ],

  // Die Saison hat noch nicht begonnen. Deshalb werden noch keine Spieler
  // mit erfundenen Punktwerten ausgegeben.
  pointsCollectors: [],

  editorial: {
    editor: 'Werner',
    role: 'Analyse',
    headline: 'Der Markt läuft heiß – aber nicht jeder Anstieg ist Qualität',
    text: 'Dynamik ersetzt keine Leistung. Wer ausschließlich den Tagesgewinnern hinterherläuft, bezahlt häufig die Euphorie anderer Manager mit.',
    managerAngle: 'Luca hat mit Kimmich bereits ein Ausrufezeichen gesetzt. Sebastian dürfte den Markt weiter mit dem Laptop sezieren, während Greg vermutlich erst später erfährt, warum alle plötzlich über Nusa sprechen.'
  }
}
