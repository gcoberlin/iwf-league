import { Link, NavLink, Route, Routes, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { articles } from './data/articles/index.js'
import { managers } from './data/managers'
import { weeklyQuotes } from './data/quotes'
import { seasons, allTimeTable, titleRanking, records } from './data/history'
import { trips, summerIwf } from './data/trips'
import { comunioMarket } from './data/comunioMarket'
import BundesligaCountdown from './components/widgets/BundesligaCountdown'
import BundesligaMatchday from './components/widgets/BundesligaMatchday'
import TravelCountdown from './components/widgets/TravelCountdown'

const navItems = [
  ['/', 'Home'], ['/magazin', 'Magazin'], ['/manager', 'Manager'],
  ['/comunio-markt', 'Transfermarkt'],
  ['/hall-of-fame', 'Hall of Fame'], ['/saisonarchiv', 'Saisonarchiv'],
  ['/reisen', 'Reisen'], ['/redaktion', 'Redaktion'], ['/ueber-die-iwf', 'IWF']
]

const transferTicker = [
  ['Kramarić', '7,93 Mio. €', 'Gregor', 'in'],
  ['Schmid', '5,73 Mio. €', 'Sebastian', 'in'],
  ['Ayhan', '1,68 Mio. €', 'Henning', 'in'],
  ['Campbell', '2,11 Mio. €', 'Matthias', 'in'],
  ['Krauß', '1,59 Mio. €', 'Sebastian', 'in'],
  ['Harder', '1,90 Mio. €', 'Matthias', 'in'],
  ['Poreba', '1,07 Mio. €', 'Sebastian', 'in'],
  ['Maina', '0,92 Mio. € verkauft', 'Jan', 'out']
]

const marketPlayers = [
  ['Joshua Kimmich', '15,09 Mio. €'], ['Guirassy', '11,83 Mio. €'],
  ['Schick', '10,95 Mio. €'], ['Demirović', '9,00 Mio. €'], ['F. Nmecha', '8,48 Mio. €']
]

function Logo() {
  return <Link className="iwfLogo iwfLogoV3" to="/" aria-label="ANSTOSS IWF Startseite">
    <span className="logoWord">ANSTOSS</span><span className="logoIwf">IWF</span>
    <small><b>IWF LEAGUE</b><i>SEIT 2004</i></small>
  </Link>
}

function PageHero({ eyebrow, title, text, stat, tone = 'green' }) {
  return <section className={`pageHero pageHero-${tone}`}>
    <div className="pageHeroOrb"><span>IWF</span><small>2004</small></div>
    <div className="pageHeroCopy"><span>{eyebrow}</span><h1>{title}</h1><p>{text}</p></div>
    {stat && <div className="pageHeroStat"><strong>{stat.value}</strong><span>{stat.label}</span></div>}
  </section>
}

function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('menuOpen', menuOpen)
    return () => document.body.classList.remove('menuOpen')
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return <div className="siteShell">
    <header className="siteHeader v2Header">
      <div className="headerInner">
        <Logo />
        <button
          className={`mobileMenuButton ${menuOpen ? 'isOpen' : ''}`}
          type="button"
          aria-label={menuOpen ? 'Menü schließen' : 'Menü öffnen'}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen(open => !open)}
        >
          <span /><span /><span />
        </button>
        <nav id="main-navigation" className={menuOpen ? 'mobileOpen' : ''}>
          {navItems.map(([to, label]) => <NavLink onClick={closeMenu} key={to} to={to} end={to === '/'} className={({isActive}) => isActive ? 'active' : ''}>{label}</NavLink>)}
          <span className="mobileLive">LIVE-CENTER <i /></span>
        </nav>
        <div className="liveDot">LIVE-CENTER <i /></div>
      </div>
    </header>
    <div className="breakingBar" aria-label="Aktuelle Meldungen">
      <b><i /> BREAKING</b>
      <div className="breakingViewport">
        <div className="breakingTrack">
          <span>Jan ist seit 06.08. verlobt – Glückwunsch!</span>
          <span>Gregor holt Kramarić für 7,93 Mio.</span>
          <span>Sebastian verpflichtet Schmid, Krauß und Poreba</span>
          <span>Luca führt mit 59,76 Mio. € Kaderwert</span>
          <span aria-hidden="true">Jan ist seit 06.08. verlobt – Glückwunsch!</span>
          <span aria-hidden="true">Gregor holt Kramarić für 7,93 Mio.</span>
          <span aria-hidden="true">Sebastian verpflichtet Schmid, Krauß und Poreba</span>
          <span aria-hidden="true">Luca führt mit 59,76 Mio. € Kaderwert</span>
        </div>
      </div>
    </div>
    <main>{children}</main>
    <footer>© 2026 ANSTOSS IWF · Zehn Freunde. Eine Liga. Unzählige Geschichten.</footer>
  </div>
}

function TransferTicker() {
  return <section className="portalWidget transferTicker">
    <div className="widgetTitle"><h2>Transfer-Ticker</h2><Link to="/magazin">Alle anzeigen</Link></div>
    {transferTicker.map(([player, fee, manager, direction], index) => <div className="tickerRow" key={player}>
      <time>{['14:32','11:47','11:30','10:58','10:21','09:58','09:41','09:05'][index]}</time>
      <b className={direction}>➜</b><span>{player}</span><strong>{fee}</strong><em>{manager}</em>
    </div>)}
    <Link className="widgetMore" to="/artikel/freitagsausgabe-07-08-2026">Alle Transfers →</Link>
  </section>
}

function QuoteWidget() {
  const quote = weeklyQuotes[0]
  return <section className="portalWidget quoteWidget">
    <div className="widgetTitle"><h2>Zitat der Woche</h2></div>
    <blockquote>„{quote.quote}“</blockquote><b>— {quote.speaker} —</b>
  </section>
}

function MarketWidget() {
  return <section className="portalWidget marketWidget">
    <div className="widgetTitle"><h2>Marktcheck</h2><Link to="/comunio-markt">Alle Spieler</Link></div>
    {marketPlayers.map(([name,value],i)=><div className={i===0?'marketRow leader':'marketRow'} key={name}><b>{i+1}.</b><span>{name}</span><strong>{value}</strong></div>)}
    <small>Spieler mit Marktwert über 1 Mio. €</small>
  </section>
}

function Home() {
  const top = articles.find(a => a.topStory)
  const rest = articles.filter(a => !a.topStory).slice(0,5)
  return <Layout>
    <section className="portalTopbar">
      <BundesligaCountdown />
      <TravelCountdown compact />
    </section>
    <section className="portalLayout">
      <div className="portalMain">
        <article className="portalHero">
          <img src={top.hero} alt="Die ANSTOSS-IWF-Redaktion" />
          <div className="heroShade" />
          <div className="heroCopy"><span className="heroTag">Topstory</span><h1>{top.title}</h1><p>{top.excerpt}</p>
            <div className="heroMeta"><Link className="limeButton" to={`/artikel/${top.slug}`}>Jetzt lesen →</Link><span>{top.author} · {top.date} · {top.readTime}</span></div>
          </div>
        </article>
        <div className="portalSectionTitle"><h2>Weitere Artikel</h2><span /></div>
        <div className="portalCards">{rest.map((a,i)=><ArticleCard key={a.slug} article={a} index={i}/>)}</div>
      </div>
      <aside className="portalSidebar"><TransferTicker/><QuoteWidget/><MarketWidget/><div className="sidebarMatchday"><BundesligaMatchday/></div></aside>
    </section>
  </Layout>
}

function ArticleCard({ article, index = 0 }) {
  return <Link className="portalCard" to={`/artikel/${article.slug}`}>
    <div className={`cardVisual visual${index+1}`}><span>{article.category}</span></div>
    <h3>{article.title}</h3><p>{article.excerpt}</p><small>{article.date} · {article.author} · {article.readTime}</small>
  </Link>
}

function Magazine() {
  return <Layout><section className="page v2Page"><div className="sectionHeading"><span>Alle Artikel</span></div><div className="portalCards magazineCards">{articles.map((a,i)=><ArticleCard key={a.slug} article={a} index={i%5}/>)}</div></section></Layout>
}

function Article() {
  const { slug } = useParams()
  const article = articles.find(a => a.slug === slug)
  if (!article) return <Layout><section className="page"><h1>Artikel nicht gefunden</h1></section></Layout>
  return <Layout><article className="article v2Article"><div className="eyebrow">{article.kicker}</div><h1>{article.title}</h1><div className="meta">{article.author} · {article.date} · {article.readTime}</div><img className="articleHero" src={article.hero} alt=""/><div className="articleBody"><ReactMarkdown remarkPlugins={[remarkGfm]}>{article.content}</ReactMarkdown></div></article></Layout>
}

function Saisoncheck() {
  const article = articles.find(a => a.slug === 'saisoncheck-2026-27')
  return <Layout><section className="page centered">
    <div className="eyebrow">{article.kicker}</div>
    <h1>{article.title}</h1>
    <p>{article.excerpt}</p>
    <Link className="button" to={`/artikel/${article.slug}`}>Kompletten Saisoncheck öffnen</Link>
  </section></Layout>
}


function MarketRanking({ title, icon, items, direction }) {
  return <section className="tmPanel">
    <header><span>{icon}</span><div><small>Comunio Marktcheck</small><h2>{title}</h2></div></header>
    <div className="tmRows">
      {items.length === 0 && <div className="tmEmpty"><b>Noch keine verifizierten Daten</b><span>Dieser Bereich wird aktualisiert, sobald belastbare Werte vorliegen.</span></div>}
      {items.map((player,index)=><article key={`${player.name}-${index}`}>
        <b>{index+1}</b>
        <div><strong>{player.name}</strong><small>{player.club}</small></div>
        {player.change && <em className={direction}>{player.change}</em>}
        <span>{player.value}</span>
      </article>)}
    </div>
  </section>
}

function ComunioMarkt() {
  const { winners, losers, mostExpensive, pointsCollectors, editorial, updatedAt } = comunioMarket
  return <Layout><section className="page transferMarketPage">
    <PageHero
      eyebrow="Live-Center · Comunio"
      title="Der Markt schläft nie."
      text="Gewinner, Verlierer, Preistreiber und aktuelle Transferalarme – eingeordnet von der ANSTOSS-Redaktion."
      stat={{value:"LIVE",label:`Stand: ${updatedAt}`}}
    />

    <div className="tmStatus"><b>ANSTOSS 1.2</b><span>Aktueller Kaderstand, neue Transfers und die Freitagsanalyse der ANSTOSS-Redaktion.</span></div>

    <div className="tmGrid">
      <MarketRanking title="Gewinner des Tages" icon="↗" items={winners} direction="up" />
      <MarketRanking title="Verlierer des Tages" icon="↘" items={losers} direction="down" />
      <MarketRanking title="Teuerste Spieler" icon="€" items={mostExpensive} />
      <MarketRanking title="Punktesammler" icon="★" items={pointsCollectors} />
    </div>

    <section className="tmEditorial">
      <div className="tmEditorBadge"><b>{editorial.editor.slice(0,1)}</b><span>{editorial.editor}<small>{editorial.role}</small></span></div>
      <div><span>IWF-REDAKTION · KOMMENTAR DES TAGES</span><h2>{editorial.headline}</h2><blockquote>„{editorial.text}“</blockquote><p>{editorial.managerAngle}</p></div>
    </section>

    <section className="tmRoadmap">
      <span>Transfer der Woche</span><h2>Gregor holt Kramarić</h2>
      <p><strong>7,93 Mio. € Ablöse.</strong> Gregor legt prominent nach. Sebastian kauft gleich dreifach ein, Henning holt Ayhan – und Luca verteidigt beim Kaderwert weiter die Spitze.</p>
    </section>
  </section></Layout>
}

function Manager() {
  const verdictClass = verdict => verdict.toLowerCase().replace(/[^a-z0-9]+/g, '-')
    const scrollToManager = name => {
    const target = document.getElementById(name.toLowerCase())
    target?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  return <Layout><section className="page managerPage">
    <PageHero eyebrow="Die zehn Manager" title="Zehn Charaktere. Ein Titel." text="Kader, Stärken, Schwächen und die Prognosen der ANSTOSS-Redaktion – mit all den Eigenheiten, die diese Liga seit Jahren prägen." stat={{value:"10",label:"Manager"}} />

    <nav className="managerIndex" aria-label="Manager Schnellnavigation">
      {managers.map(m => (
  <button
    type="button"
    onClick={() => scrollToManager(m.name)}
    key={m.name}
  >
    <b>{String(m.rank).padStart(2,'0')}</b>
    <span>{m.name}</span>
  </button>
))}
    </nav>

    <div className="managerProfiles">{managers.map(m => <article className="managerProfileV4" id={m.name.toLowerCase()} key={m.name}>
      <header className="managerCover" data-rank={String(m.rank).padStart(2,'0')}>
        <div className="managerPortrait"><img src={m.image} alt={`${m.name} – ${m.profileTitle}`} /><small>ANSTOSS IWF</small></div>
        <div className="managerCoverCopy">
          <span className="rankLabel">POWER RANKING #{m.rank}</span>
          <h2>{m.name}</h2>
          <p>{m.team}</p>
          <div className="managerTags"><span>{m.profileTitle}</span><span className={`verdict verdict-${verdictClass(m.verdict)}`}>{m.verdict}</span></div><blockquote className="managerClaim">„{m.claim}“</blockquote>
        </div>
        <div className="managerScoreboard">
          <div><strong>{m.value}</strong><span>Kaderwert</span></div>
          <div><strong>{m.grade}</strong><span>Redaktionsnote</span></div>
          <div><strong>#{m.rank}</strong><span>Power Ranking</span></div>
          <div className="scoreTrend"><strong>{m.trend}</strong><span>{m.trendText}</span></div>
        </div>
      </header>

      <div className="managerBodyV4">
        <section className="managerStory">
          <span>MANAGERPROFIL</span>
          <h3>{m.profileTitle}</h3>
          <p>{m.profileText}</p>
          <blockquote><b>Running Gag</b>{m.runningGag}</blockquote>
        </section>

        <section className="managerStatusStrip">
          <div><span>Aktuelle Form</span><strong>{m.trend} {m.trendText}</strong></div>
          <div><span>Letzter Transfer</span><strong>{m.lastTransfer}</strong></div>
          <div><span>Meisterchance</span><strong>{m.chance}</strong></div>
          <div><span>Redaktionsstatus</span><strong>{m.status}</strong></div>
        </section>

        <section className="managerAnalysis">
          <div className="analysisBlock keyBlock"><span>Schlüsselspieler</span><strong>{m.keys.join(" · ")}</strong></div>
          <div className="analysisBlock"><span>Stärke</span><p>{m.strength}</p></div>
          <div className="analysisBlock weaknessBlock"><span>Schwäche</span><p>{m.weakness}</p></div>
        </section>
      </div>

      <section className="squadPanel">
        <div className="panelHeadline"><span>KADER 2026/27</span><small>{m.players.length} Spieler</small></div>
        <div className="playerChips">{m.players.map((player,index)=><span className={player===m.key?'keyChip':''} key={`${player}-${index}`}>{player}</span>)}</div>
      </section>

      <section className="editorialPanel">
        <div className="panelHeadline"><span>DAS SAGT DIE REDAKTION</span><small>Drei Stimmen. Ein Urteil.</small></div>
        <div className="editorCards">
          <blockquote><header><b>I</b><span><strong>Ingo</strong><small>Chefredaktion</small></span></header><p>{m.ingo}</p></blockquote>
          <blockquote><header><b>W</b><span><strong>Werner</strong><small>Analyse</small></span></header><p>{m.werner}</p></blockquote>
          <blockquote className="franz"><header><b>F</b><span><strong>Franz</strong><small>Boulevard</small></span></header><p>{m.franz}</p></blockquote>
        </div>
      </section>
    </article>)}</div>
  </section></Layout>
}

function HallOfFame() {
  return <Layout><section className="page">
    <PageHero eyebrow="Hall of Fame" title="Die Größten der IWF" text="Meister, Rekorde und die ewige Rangordnung: das sportliche Gedächtnis der Liga von 2016/17 bis heute." stat={{value:titleRanking[0].titles,label:"Titel Rekord"}} tone="gold" />
    <div className="recordGrid">
      <article><span>Rekordmeister</span><h2>{titleRanking[0].name}</h2><p>{titleRanking[0].titles} Meisterschaften in zehn dokumentierten Spielzeiten.</p></article>
      <article><span>Punkterekord</span><h2>{records.recordChampion.championPoints.toLocaleString('de-DE')}</h2><p>{records.recordChampion.champion} · Saison {records.recordChampion.season}</p></article>
      <article><span>Knappstes Finale</span><h2>{records.closestTitle.margin} Punkte</h2><p>{records.closestTitle.champion} vor {records.closestTitle.runnerUp} · {records.closestTitle.season}</p></article>
      <article><span>Ewige Tabelle</span><h2>{records.allTimeLeader.name}</h2><p>{records.allTimeLeader.points.toLocaleString('de-DE')} Punkte · nur {records.allTimeGap} vor Sebastian.</p></article>
    </div>
    <div className="sectionHeading"><span>Titelranking</span></div>
    <div className="titleRanking">{titleRanking.map((item,index)=><article key={item.name}><b>{index+1}</b><div><h3>{item.name}</h3><p>{item.titles} {item.titles === 1 ? 'Titel' : 'Titel'}</p></div><span>{'★'.repeat(item.titles)}</span></article>)}</div>
    <div className="sectionHeading"><span>Alle Meister</span></div>
    <div className="championTimeline">{seasons.map(season=><article key={season.season}><span>{season.season}</span><h3>{season.champion}</h3><b>{season.championPoints.toLocaleString('de-DE')} Punkte</b></article>)}</div>
    <div className="sectionHeading"><span>Ewige Tabelle</span></div>
    <div className="historyTable"><div className="historyRow historyHead"><span>#</span><span>Manager</span><span>Punkte</span></div>{allTimeTable.map(row=><div className="historyRow" key={row.name}><b>{row.rank}</b><span>{row.name}</span><strong>{row.points.toLocaleString('de-DE')}</strong></div>)}</div>
    <p className="dataNote">Quelle: „Comunio IWF.xlsx“. Die dokumentierte Statistik beginnt mit der Saison 2016/17. Uwes Wert von 0 Punkten 2025/26 wurde unverändert aus der Datei übernommen.</p>
  </section></Layout>
}

function Saisonarchiv() {
  return <Layout><section className="page">
    <PageHero eyebrow="Saisonarchiv" title="Jede Saison. Jeder Meister." text="Zehn komplette Abschlusstabellen bilden das statistische Gedächtnis der IWF – vom Podium bis zum letzten Platz." stat={{value:"10",label:"Saisons"}} tone="red" />
    <article className="archiveCurrent"><span>AKTUELL</span><h2>2026/27</h2><p>Die neue Saison beginnt am 28. August. Bis dahin gilt das Power Ranking der ANSTOSS-Redaktion.</p><Link className="textLink" to="/saisoncheck">Zur Saisonvorschau →</Link></article>
    <div className="seasonArchive">{[...seasons].reverse().map(season=><details key={season.season} className="seasonCard"><summary><div><span>{season.season}</span><h2>{season.champion}</h2></div><strong>{season.championPoints.toLocaleString('de-DE')} Punkte</strong></summary><div className="seasonTable">{season.table.map(([name,points],index)=><div key={name}><b>{index+1}</b><span>{name}</span><strong>{points.toLocaleString('de-DE')}</strong></div>)}</div></details>)}</div>
  </section></Layout>
}

function Reisen() {
  const pastTrips = trips.filter(trip => trip.year <= 2026).sort((a,b)=>b.year-a.year)
  return <Layout><section className="page">
    <PageHero eyebrow="Seit 2004 unterwegs" title="22 Jahre auf Tour" text="Von Berlin über Prag, Bratislava, Athen und Lissabon bis Rom – die Reisen sind das zweite große Saisonfinale der IWF." stat={{value:"2026",label:"Nächster Halt: Rom"}} tone="red" />
    <TravelCountdown />
    <div className="tripTimeline">{pastTrips.map(trip=><article className={trip.type === 'next' ? 'nextTrip' : ''} key={`${trip.year}-${trip.city}`}><div className="tripYear">{trip.year}</div><div><span>{trip.flag} {trip.country}</span><h2>{trip.city}</h2><p>{trip.status}</p>{trip.year === 2025 && <p className="tripStory">Wassilios war angeschlagen – und die Gruppe merkte, wie kopflos sie ohne ihren fitten Organisator für Unterkunft und Programm agiert.</p>}{trip.year === 2019 && <p className="tripStory">Bratislava brachte der IWF nicht nur eine Reise, sondern auch den Rapper Pink Panther alias Sebastian.</p>}</div></article>)}</div>
    <div className="sectionHeading"><span>Sommer-IWF bei Henning</span></div>
    <div className="summerLead"><h2>Die Familienausgabe im Garten</h2><p>Seit 2024 lädt Henning zur Sommer-IWF. Anders als auf der klassischen Reise sind Partnerinnen, Partner und Kinder ausdrücklich dabei. Grill, Garten und Saisonvorfreude machen das Treffen zum familiären Auftakt des IWF-Jahres.</p></div>
    <div className="summerGrid">{summerIwf.map(item=><article key={item.year}><span>☀️ {item.year}</span><h3>{item.place}</h3><p>Sommer-IWF · mit Familien</p></article>)}</div>
    <div className="hymnBlock"><div><span>Die IWF-Hymne</span><h2>Journey – Don't Stop Believin'</h2><p>Ein Song als gemeinsamer Nenner: Die Hymne gehört zur IWF-Tradition und begleitet die Geschichten, Reisen und langen Nächte der Liga.</p></div><div className="hymnNote">♪</div></div>
  </section></Layout>
}

function Redaktion() {
  return <Layout><section className="page">
    <PageHero eyebrow="Die Redaktion" title="Drei Stimmen. Ein Magazin." text="Ingo erzählt die großen Geschichten, Werner zählt jeden Fehler und Franz macht daraus eine Schlagzeile." stat={{value:"3",label:"Redakteure"}} />
    <img className="teamImage" src={`${import.meta.env.BASE_URL}images/redaktion.png`} alt="Ingo, Werner und Franz" />
    <div className="editorGrid">
      <div><h2>Ingo</h2><p>Chefredakteur, ehemaliger Fußballer und Freund der langen Geschichte. Analytisch, humorvoll und mit leichter Sympathie für Außenseiter.</p></div>
      <div><h2>Werner</h2><p>Ehemaliger Schiedsrichter. Analyse, Noten, Zahlen und die gelegentliche Spitze bei schwacher Leistung.</p></div>
      <div><h2>Franz</h2><p>Spielt noch aktiv, schreibt frech, laut und reißerisch. Manchmal leicht drüber, meistens mit Absicht.</p></div>
    </div>
  </section></Layout>
}

function UeberDieIwf() {
  return <Layout><section className="page">
    <PageHero eyebrow="Seit 2004" title="Zehn Freunde. Eine Liga." text="Die IWF ist Comunio-Wettbewerb, Freundeskreis und Reisegemeinschaft zugleich. ANSTOSS bewahrt die Geschichten weit über Punkte und Marktwerte hinaus." stat={{value:"22+",label:"Jahre Geschichte"}} tone="gold" />
    <div className="iwfStats"><article><strong>2004</strong><span>erste dokumentierte IWF-Reise</span></article><article><strong>10</strong><span>Manager in der Liga</span></article><article><strong>23</strong><span>Reisejahre bis Rom 2026</span></article><article><strong>1</strong><span>gemeinsame Hymne</span></article></div>
    <div className="aboutGrid">
      <article><h2>Die Liga</h2><p>Zehn Manager kämpfen über eine Bundesliga-Saison um den Titel. Das dokumentierte Comunio-Archiv reicht bis 2016/17 zurück; Jose führt die Ewige Tabelle knapp vor Sebastian an.</p></article>
      <article><h2>Die Reisen</h2><p>Wassilios kümmert sich traditionell um Unterkunft und Programm. Lissabon 2025 zeigte besonders deutlich, wie schnell die Gruppe ohne ihren fitten Organisator die Orientierung verliert.</p></article>
      <article><h2>Die Sommer-IWF</h2><p>Seit 2024 wird Hennings Garten zur Familienausgabe der IWF. Partnerinnen, Partner und Kinder gehören hier ausdrücklich dazu.</p></article>
      <article><h2>Die Hymne</h2><p><b>Journey – Don't Stop Believin'</b> ist der musikalische Fixpunkt der IWF und gehört ebenso zur Tradition wie Transfers, Reisen und lange Abende.</p></article>
    </div>
  </section></Layout>
}

export default function App() {
  return <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/magazin" element={<Magazine />} />
    <Route path="/artikel/:slug" element={<Article />} />
    <Route path="/saisoncheck" element={<Saisoncheck />} />
    <Route path="/manager" element={<Manager />} />
    <Route path="/comunio-markt" element={<ComunioMarkt />} />
    <Route path="/hall-of-fame" element={<HallOfFame />} />
    <Route path="/saisonarchiv" element={<Saisonarchiv />} />
    <Route path="/reisen" element={<Reisen />} />
    <Route path="/redaktion" element={<Redaktion />} />
    <Route path="/ueber-die-iwf" element={<UeberDieIwf />} />
    <Route path="*" element={<Home />} />
  </Routes>
}
