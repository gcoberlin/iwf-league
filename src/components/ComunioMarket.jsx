import { Link } from 'react-router-dom'
import { comunioMarket } from '../data/comunioMarket'

function MarketTable({ title, items, trend }) {
  return (
    <section className="comunioPanel">
      <header>
        <span>{trend === 'up' ? '🔥' : trend === 'down' ? '📉' : '💎'}</span>
        <div>
          <small>Comunio Marktcheck</small>
          <h2>{title}</h2>
        </div>
      </header>
      <div className="comunioRows">
        {items.map((player, index) => (
          <article key={`${player.name}-${index}`}>
            <b>{index + 1}</b>
            <div><strong>{player.name}</strong><small>{player.club}</small></div>
            {player.change && <em className={trend}>{player.change}</em>}
            <span>{player.value}</span>
          </article>
        ))}
      </div>
    </section>
  )
}

export default function ComunioMarket() {
  const { winners, losers, mostExpensive, editorial, updatedAt, source } = comunioMarket

  return (
    <div className="comunioMarketPage">
      <header className="comunioTop">
        <Link to="/" className="comunioBack">← Zurück zu ANSTOSS</Link>
        <div>
          <span>ANSTOSS IWF · LIVE-CENTER</span>
          <h1>COMUNIO-MARKT</h1>
          <p>Marktwertgewinner, Verlierer und die wichtigsten Trends der Bundesliga.</p>
        </div>
        <aside><strong>LIVE</strong><small>Stand: {updatedAt}</small></aside>
      </header>

      <div className="comunioNotice">
        <b>Technisches Fundament aktiv</b>
        <span>Die Seite liest bereits eine zentrale Datendatei. Im nächsten Schritt ersetzt ein automatischer Cloudflare-Job die vorläufigen Daten täglich.</span>
      </div>

      <main className="comunioGrid">
        <MarketTable title="Gewinner des Tages" items={winners} trend="up" />
        <MarketTable title="Verlierer des Tages" items={losers} trend="down" />
        <MarketTable title="Teuerste Spieler" items={mostExpensive} />
        <section className="comunioEditorial">
          <span>IWF-REDAKTION</span>
          <h2>{editorial.headline}</h2>
          <blockquote>„{editorial.text}“</blockquote>
          <b>— {editorial.editor}, {editorial.role}</b>
        </section>
      </main>

      <footer className="comunioSource">Datenquelle: {source} · Automatisierung folgt in Phase 2.</footer>
    </div>
  )
}
