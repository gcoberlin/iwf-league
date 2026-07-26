import { Link, NavLink, Route, Routes } from 'react-router-dom'
import App from './App'
import { articles } from './data/articles/index.js'
import { weeklyQuotes } from './data/quotes'
import { comunioMarket } from './data/comunioMarket'
import { managers } from './data/managers'
import TravelCountdown from './components/widgets/TravelCountdown'
import './magazine-home.css'

const navItems = [
  ['/', 'Home'], ['/magazin', 'News'], ['/comunio-markt', 'Transfermarkt'],
  ['/saisoncheck', 'Power Ranking'], ['/manager', 'Manager'],
  ['/hall-of-fame', 'Statistiken'], ['/reisen', 'Historie'], ['/ueber-die-iwf', 'Über uns']
]

const news = [
  ['10:21', 'Luca verpflichtet Kimmich für 17,10 Mio. €'],
  ['09:47', 'Greg verkauft Beste'],
  ['09:12', 'Das neue Power Ranking ist online'],
  ['08:33', 'Sebastian beobachtet den Markt weiter']
]

const rankings = [
  ['Sebastian', '34 %', '↑'], ['Jose', '26 %', '↑'], ['Luca', '18 %', '↓'],
  ['Henning', '10 %', '–'], ['Greg', '5 %', '↓']
]

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
    <div className="magBreaking"><b>🔥 BREAKING</b><span>Luca landet Kimmich · Power Ranking online · Countdown Rom läuft · Freitag ist Redaktionsschluss</span></div>
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
    <h3>Gewinner des Tages</h3>
    {winners.map(player => <div className="marketLine" key={player.name}><span><b>{player.name}</b><small>{player.club}</small></span><em className="up">{player.change}</em></div>)}
    <h3 className="lossTitle">Verlierer des Tages</h3>
    {losers.map(player => <div className="marketLine" key={player.name}><span><b>{player.name}</b><small>{player.club}</small></span><em className="down">{player.change}</em></div>)}
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
            <div className="magHeroCopy"><span>Top Story</span><h1>{top.title}</h1><p>{top.excerpt}</p><Link to={`/artikel/${top.slug}`}>Artikel lesen →</Link></div>
          </article>

          <div className="magStoryGrid">
            {cards.map((article, index) => <Link className="magStory" to={`/artikel/${article.slug}`} key={article.slug}>
              <div className={`storyVisual storyVisual${index + 1}`}><span>{article.category}</span></div>
              <h3>{article.title}</h3><b>Mehr lesen →</b>
            </Link>)}
          </div>

          <section className="magPanel editorsPanel">
            <PanelTitle link="/redaktion">Unsere Redakteure</PanelTitle>
            <div className="editorGridNew">
              {[['Werner', 'Analysiert', 'Der Markt läuft heiß – aber wer handelt klug und wer zahlt drauf?'], ['Ingo', 'Erzählt', 'Geschichten aus der Liga, die nur das Leben schreibt.'], ['Franz', 'Kommentiert', 'Boulevard, Gerüchte und die Wahrheit irgendwo dazwischen.']].map(([name, role, text], index) => <Link to="/redaktion" className="editorCardNew" key={name}>
                <div className={`editorPhoto editorPhoto${index + 1}`} style={{backgroundImage:`linear-gradient(90deg,rgba(4,7,4,.20),rgba(4,7,4,.92)),url(${editorImage})`}} />
                <div><h3>{name}<br/><span>{role}</span></h3><p>{text}</p><b>Zur Redaktion →</b></div>
              </Link>)}
            </div>
          </section>
        </div>

        <aside className="magSidebar">
          <section className="magPanel newsPanel"><PanelTitle>🔥 Breaking News</PanelTitle>{news.map(([time, text]) => <div className="newsLine" key={time}><time>{time}</time><span>{text}</span></div>)}<Link className="panelLink" to="/magazin">Zum Newsticker →</Link></section>
          <MarketCenter />
          <section className="magPanel rumorPanel"><PanelTitle tone="pink">♟ Gerüchteküche</PanelTitle><p>Aus gewöhnlich gut informierten Kreisen heißt es, Greg habe versehentlich auf einen Torwart geboten, weil er das Vereinslogo schön fand.</p><b>Nur Satire!</b></section>
        </aside>
      </div>

      <div className="magDashboard">
        <section className="magPanel"><PanelTitle link="/saisoncheck">🏆 Power Ranking</PanelTitle>{rankings.map(([name, chance, trend], index) => <div className="rankLine" key={name}><b>{index + 1}</b><span>{name}</span><em className={trend === '↓' ? 'down' : 'up'}>{trend}</em><strong>{chance}</strong></div>)}</section>
        <section className="magPanel"><PanelTitle link="/manager">☺ Manager-Barometer</PanelTitle>{['Jose','Sebastian','Luca','Henning','Greg'].map((name, index) => <div className="barometerLine" key={name}><span>{['😎','🔥','🙂','🤔','🤯'][index]} {name}</span><i><b style={{width:`${88-index*14}%`}} /></i></div>)}</section>
        <section className="magPanel quoteLarge"><PanelTitle>Zitat der Woche</PanelTitle><blockquote>„{quote.quote}“</blockquote><b>— {quote.speaker}</b></section>
      </div>

      <div className="magBottomGrid">
        <section className="magPanel transferCompact"><PanelTitle link="/comunio-markt">⇄ Transfer-Ticker</PanelTitle>{[['Luca','kauft','Joshua Kimmich','17,10 Mio. €'],['Greg','verkauft','Jan-Niklas Beste','–'],['Sebastian','kauft','Caci','2,03 Mio. €'],['Henning','kauft','G. Mensah','2,03 Mio. €']].map((row,index)=><div className="transferLine" key={row.join('-')}><time>{['10:21','09:47','09:12','08:33'][index]}</time><b>{row[0]}</b><span>{row[1]} {row[2]}</span><strong>{row[3]}</strong></div>)}</section>
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
