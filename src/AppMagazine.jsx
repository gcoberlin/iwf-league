import { Link, NavLink, Route, Routes } from 'react-router-dom'
import App from './App'
import { articles } from './data/articles/index.js'
import { weeklyQuotes } from './data/quotes'
import { comunioMarket } from './data/comunioMarket'
import { fridayEdition } from './data/fridayEdition'
import TravelCountdown from './components/widgets/TravelCountdown'
import './magazine-home.css'

const navItems = [
  ['/', 'Home'], ['/magazin', 'News'], ['/comunio-markt', 'Transfermarkt'],
  ['/saisoncheck', 'Power Ranking'], ['/manager', 'Manager'],
  ['/hall-of-fame', 'Statistiken'], ['/reisen', 'Historie'], ['/ueber-die-iwf', 'Über uns']
]

const news = fridayEdition.breaking

const rankings = fridayEdition.rosterValues.slice(0, 5).map(item => [
  item.manager,
  item.value,
  item.trend,
  item.stars
])

function Header() {
  return <>
    <header className="magHeader">
      <div className="magClaim"><span>Das Magazin der IWF League</span><b>Für Manager. Für Freunde. Für die Ewigkeit.</b><em>● LIVE · Marktcheck</em></div>
      <div className="magBrandRow">
        <Link className="magSeal" to="/"><strong>IWF</strong><small>LEAGUE</small></Link>
        <Link className="magBrand" to="/">ANSTOSS</Link>
      </div>
      <nav className="magNav">
        {navItems.map(([to, label]) => <NavLink key={to} to={to} end={to === '/'} className={({ isActive }) => isActive ? 'active' : ''}>{label}</NavLink>)}
      </nav>
    </header>
    <div className="magBreaking"><b>🔥 BREAKING</b><div className="tickerViewport"><span>REDaktionskonferenz: Luca übernimmt Platz 1 · Sebastian und Tomi im Titelkreis · José setzt auf Kane · Matthias muss seinen XXL-Kader verdichten ·</span></div></div>
  </>
}

function PanelTitle({ children, link, tone = '' }) {
  return <div className={`magPanelTitle ${tone}`}><h2>{children}</h2>{link && <Link to={link}>Alle ansehen →</Link>}</div>
}

function MarketCenter() {
  const winners = comunioMarket.winners.slice(0, 5)
  const losers = comunioMarket.losers.slice(0, 5)
  return <section className="magPanel marketCenter">
    <PanelTitle link="/comunio-markt">↗ Marktcenter</PanelTitle>
    {winners.length || losers.length ? <>
      <h3>Gewinner des Tages</h3>
      {winners.map(player => <div className="marketLine" key={player.name}><span><b>{player.name}</b><small>{player.club}</small></span><em className="up">{player.change}</em></div>)}
      <h3 className="lossTitle">Verlierer des Tages</h3>
      {losers.map(player => <div className="marketLine" key={player.name}><span><b>{player.name}</b><small>{player.club}</small></span><em className="down">{player.change}</em></div>)}
    </> : <>
      <h3>Teuerste Spieler der IWF</h3>
      {comunioMarket.mostExpensive.slice(0,5).map(player => <div className="marketLine" key={player.name}><span><b>{player.name}</b><small>{player.club}</small></span><em className="up">{player.value}</em></div>)}
    </>}
    <small className="dataState">Stand: {comunioMarket.updatedAt} · redaktionelle Startdaten</small>
  </section>
}

function HomeMagazine() {
  const top = articles.find(article => article.topStory) || articles[0]
  const cards = articles.filter(article => article.slug !== top.slug).slice(0, 3)
  const quote = weeklyQuotes[0]
  const editorImage = `${import.meta.env.BASE_URL}images/redaktion.png`

  return <div className="magSite">
    <Header />
    <main className="magPage">
      <div className="magLeadGrid">
        <div className="magMainColumn">
          <article className="magHero">
            <img src={top.hero} alt="ANSTOSS Topstory" />
            <div className="magHeroShade" />
            <div className="magHeroCopy">
              <span>Top Story</span>
              <h1>{fridayEdition.headline}</h1>
              <h2>{fridayEdition.subheadline}</h2>
              <p>{fridayEdition.teaser}</p>
              <div className="heroActions"><Link to={`/artikel/${top.slug}`}>Artikel lesen →</Link><small>{top.author} · {top.date} · {top.readTime}</small></div>
            </div>
          </article>
          <div className="preSeasonNote"><b>Einordnung:</b> {fridayEdition.preSeasonNote}</div>

          <div className="magStoryGrid">
            {cards.map((article, index) => <Link className="magStory" to={`/artikel/${article.slug}`} key={article.slug}>
              <div className="storyVisual" style={{backgroundImage:`linear-gradient(180deg,transparent 15%,rgba(0,0,0,.92)),url(${article.hero})`}}>
                <span>{article.category}</span>
              </div>
              <div className="storyCopy"><h3>{article.title}</h3><p>{article.excerpt}</p><b>Mehr lesen →</b></div>
            </Link>)}
          </div>

          <section className="magPanel editorsPanel">
            <PanelTitle link="/redaktion">Unsere Redakteure</PanelTitle>
            <div className="editorGridNew">
              {[
                ['Werner', 'Analysiert', fridayEdition.editorial.werner.text],
                ['Ingo', 'Erzählt', fridayEdition.editorial.ingo.text],
                ['Franz', 'Kommentiert', fridayEdition.editorial.franz.text]
              ].map(([name, role, text], index) => <Link to="/redaktion" className="editorCardNew" key={name}>
                <div className={`editorPhoto editorPhoto${index + 1}`} style={{backgroundImage:`linear-gradient(180deg,transparent 25%,rgba(3,5,3,.96)),url(${editorImage})`}} />
                <div className="editorText"><h3>{name}<span>{role}</span></h3><p>{text}</p><b>Zur Redaktion →</b></div>
              </Link>)}
            </div>
          </section>
        </div>

        <aside className="magSidebar">
          <section className="magPanel newsPanel"><PanelTitle>🔥 Breaking News</PanelTitle>{news.map(([time, text]) => <div className="newsLine" key={time}><time>{time}</time><span>{text}</span></div>)}<Link className="panelLink" to="/magazin">Zum Newsticker →</Link></section>
          <MarketCenter />
          <section className="magPanel rumorPanel"><PanelTitle tone="pink">♟ Gerüchteküche</PanelTitle><p>{fridayEdition.rumor}</p><b>Nur Satire!</b></section>
        </aside>
      </div>

      <div className="magDashboard">
        <section className="magPanel rankingPanel"><PanelTitle link="/saisoncheck">🏆 Power Ranking</PanelTitle>{rankings.map(([name, chance, trend, stars], index) => <div className="rankCard" key={name}><b>#{index + 1}</b><div><strong>{name}</strong><span>{'★'.repeat(stars)}{'☆'.repeat(5-stars)}</span></div><em className={trend === '↓' ? 'down' : 'up'}>{trend}</em><small>{chance}</small></div>)}</section>
        <section className="magPanel barometerPanel"><PanelTitle link="/manager">☺ Manager-Barometer</PanelTitle>{['Jose','Sebastian','Luca','Henning','Greg'].map((name, index) => <div className="barometerLine" key={name}><span>{['😎','🔥','🙂','🤔','🤯'][index]} <b>{name}</b></span><i><b style={{width:`${88-index*14}%`}} /></i></div>)}</section>
        <section className="magPanel quoteLarge"><PanelTitle>Zitat der Woche</PanelTitle><div className="quoteMark">“</div><blockquote>„{quote.quote}“</blockquote><b>— {quote.speaker}</b></section>
      </div>

      <div className="magBottomGrid">
        <section className="magPanel transferCompact"><PanelTitle link="/comunio-markt">⇄ Transfer-Ticker</PanelTitle>{fridayEdition.transfers.map((row,index)=><div className="transferLine" key={row.join('-')}><time>{['19:10','18:35','17:50','17:05','16:20'][index]}</time><b>{row[0]}</b><span>{row[1]} {row[2]}</span><strong>{row[3]}</strong></div>)}</section>
        <section className="magPanel romCompact"><TravelCountdown compact /></section>
        <section className="magPanel bundesligaCompact"><PanelTitle>Bundesliga News</PanelTitle><p><time>10:40</time> Die Saisonvorbereitung läuft – ANSTOSS beobachtet den Markt.</p><p><time>09:55</time> Freitag folgt das nächste Liga-Update.</p><Link className="panelLink" to="/magazin">Zu den News →</Link></section>
      </div>
    </main>
    <footer className="magFooter"><span>IWF LEAGUE</span><p>ANSTOSS – Das Magazin der IWF League<br/>Für Manager. Für Freunde. Für die Ewigkeit.</p><nav><Link to="/ueber-die-iwf">Impressum</Link><Link to="/ueber-die-iwf">Datenschutz</Link><Link to="/ueber-die-iwf">Kontakt</Link></nav></footer>
  </div>
}

export default function AppMagazine() {
  return <Routes><Route path="/" element={<HomeMagazine />} /><Route path="*" element={<App />} /></Routes>
}
