import { useEffect, useMemo, useState } from 'react'
import { fetchBundesligaSeason, getMatchScore, selectRelevantMatchday } from '../../services/openLigaDb'
import { formatGermanDate, formatGermanTime } from '../../utils/dateHelpers'

export default function BundesligaMatchday() {
  const [matches, setMatches] = useState([])
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    const controller = new AbortController()
    fetchBundesligaSeason(controller.signal)
      .then(data => {
        setMatches(data)
        setStatus('ready')
      })
      .catch(error => {
        if (error.name !== 'AbortError') setStatus('error')
      })
    return () => controller.abort()
  }, [])

  const matchday = useMemo(() => selectRelevantMatchday(matches), [matches])

  return <section className="matchdayWidget">
    <div className="matchdayHeader">
      <div>
        <div className="widgetKicker">Live aus der Bundesliga</div>
        <h2>{matchday ? `${matchday.number}. Spieltag` : 'Bundesliga-Spieltag'}</h2>
      </div>
      <span className="apiBadge">OpenLigaDB</span>
    </div>

    {status === 'loading' && <div className="widgetState">Spielplan wird geladen …</div>}
    {status === 'error' && <div className="widgetState error">Der Spielplan ist gerade nicht erreichbar. ANSTOSS versucht es beim nächsten Aufruf erneut.</div>}
    {status === 'ready' && !matchday && <div className="widgetState">Für die neue Saison sind noch keine Paarungen hinterlegt.</div>}

    {matchday && <div className="fixtureList">
      {matchday.matches.map(match => {
        const score = getMatchScore(match)
        const date = match.matchDateTimeUTC || match.matchDateTime
        return <div className="fixture" key={match.matchID}>
          <div className="fixtureTime"><b>{formatGermanDate(date)}</b><span>{formatGermanTime(date)}</span></div>
          <div className="fixtureTeams"><span>{match.team1?.teamName || 'Heimteam'}</span><span>{match.team2?.teamName || 'Gastteam'}</span></div>
          <div className={`fixtureScore ${score ? 'finished' : ''}`}>{score || '–'}</div>
        </div>
      })}
    </div>}
  </section>
}
