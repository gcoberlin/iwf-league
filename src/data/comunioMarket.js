// Redaktionell geprüfte Marktwerte und Tagesbewegungen der IWF League.
// Stand: 02.08.2026. Werte werden erst ersetzt, wenn neue verifizierte Daten vorliegen.

const players = {
  olise: { name: 'Michael Olise', shortName: 'Olise', club: 'FC Bayern', value: '18,47 Mio. €' },
  kimmich: { name: 'Joshua Kimmich', shortName: 'Kimmich', club: 'FC Bayern', value: '12,93 Mio. €' },
  brown: { name: 'Brown', shortName: 'Brown', club: 'Eintracht Frankfurt', value: '7,35 Mio. €' },
  nusa: { name: 'Nusa', shortName: 'Nusa', club: 'RB Leipzig', value: '7,33 Mio. €' },
  nmecha: { name: 'F. Nmecha', shortName: 'F. Nmecha', club: 'Borussia Dortmund', value: '6,76 Mio. €' },
  gnabry: { name: 'Gnabry', shortName: 'Gnabry', club: 'FC Bayern', value: '6,07 Mio. €' }
}

const withChange = (player, change) => ({
  name: player.shortName ?? player.name,
  club: player.club,
  change,
  value: player.value
})

const ranked = player => ({ name: player.name, club: player.club, value: player.value })

export const comunioMarket = {
  updatedAt: '02.08.2026 · 10:00 Uhr',
  dataStatus: 'Redaktionell geprüft',
  winners: [
    withChange(players.nusa, '+1,34 Mio. €'),
    withChange(players.brown, '+0,92 Mio. €'),
    withChange(players.nmecha, '+0,71 Mio. €'),
    withChange(players.gnabry, '+0,58 Mio. €'),
    withChange(players.kimmich, '+0,44 Mio. €')
  ],
  losers: [],
  mostExpensive: [
    ranked(players.olise),
    ranked(players.kimmich),
    ranked(players.brown),
    ranked(players.nusa),
    ranked(players.nmecha)
  ],
  pointsCollectors: [],
  editorial: {
    editor: 'Franz',
    role: 'Breaking News',
    headline: 'Olise ist da – wer verliert zuerst die Nerven?',
    text: '18,47 Millionen Euro Marktwert, zehn Manager und vermutlich deutlich weniger gelassene Gesichter, als die Gruppe gerade vorgibt.',
    managerAngle: 'Während ligaweit Kontostände geprüft werden, laufen die Bier-Updates stabil weiter. Die Devise des Tages: erst das Bier, dann das Bieten.'
  }
}
