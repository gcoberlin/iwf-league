import { trips } from '../../data/trips'
import { daysUntil, isBetween } from '../../utils/dateHelpers'

export default function TravelCountdown({ compact = false }) {
  const now = new Date()
  const active = trips.find(trip => isBetween(now, trip.start, trip.end))
  const next = active || trips.find(trip => new Date(trip.start) > now)

  if (!next) return null
  if (active) {
    return <article className={`liveWidget travelWidget ${compact ? 'compact' : ''}`}>
      <div className="widgetKicker">{active.flag} IWF League on Tour</div>
      <div className="travelCity">{active.city}</div>
      <h2>Die IWF League ist unterwegs!</h2>
      <p>{active.status}</p>
    </article>
  }

  const days = daysUntil(next.start, now)
  return <article className={`liveWidget travelWidget ${compact ? 'compact' : ''}`}>
    <div className="widgetKicker">{next.flag} IWF League on Tour</div>
    <div className="countdownNumber">{days}</div>
    <h2>{days === 1 ? 'Tag' : 'Tage'} bis {next.city}</h2>
    <p>{next.status}</p>
  </article>
}
