import { daysUntil, formatGermanDate } from '../../utils/dateHelpers'

const SEASON_START = new Date('2026-08-28T20:30:00+02:00')

export default function BundesligaCountdown() {
  const now = new Date()
  if (now >= SEASON_START) return null
  const days = daysUntil(SEASON_START, now)

  return <article className="liveWidget countdownWidget">
    <div className="widgetKicker">⚽ Saisonstart 2026/27</div>
    <div className="countdownNumber">{days}</div>
    <h2>{days === 1 ? 'Tag' : 'Tage'} bis zur Bundesliga</h2>
    <p>{formatGermanDate(SEASON_START, { weekday: 'long', month: 'long', year: 'numeric' })}</p>
  </article>
}
