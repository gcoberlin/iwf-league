import { Link, NavLink, Route, Routes, useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { articles } from './data/articles/index.js'
import { managers } from './data/managers'
import { weeklyQuotes } from './data/quotes'
import { seasons, allTimeTable, titleRanking, records } from './data/history'
import { trips, summerIwf } from './data/trips'
import BundesligaCountdown from './components/widgets/BundesligaCountdown'
import BundesligaMatchday from './components/widgets/BundesligaMatchday'
import TravelCountdown from './components/widgets/TravelCountdown'

const navItems = [
  ['/', 'Home'], ['/magazin', 'Magazin'], ['/manager', 'Manager'],
  ['/hall-of-fame', 'Hall of Fame'], ['/saisonarchiv', 'Saisonarchiv'],
  ['/reisen', 'Reisen'], ['/redaktion', 'Redaktion'], ['/ueber-die-iwf', 'IWF']
]

const transferTicker = [
  ['Svensson', '3,80 Mio. €', 'Luca', 'in'],
  ['Kobel', '2,78 Mio. €', 'Jose', 'in'],
  ['Manzambi', '5,05 Mio. €', 'Matthias', 'out'],
  ['Kompolya', '2,35 Mio. €', 'Sebastian', 'in'],
  ['Vagnoman', '1,46 Mio. €', 'Sebastian', 'in']
]

const marketPlayers = [
  ['Joshua Kimmich', '13,15 Mio. €'], ['Inácio', '3,00 Mio. €'],
  ['Caci', '2,03 Mio. €'], ['Gruber', '1,54 Mio. €'], ['Kauã Santos', '1,30 Mio. €']
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
  return <div className="siteShell">
    <header className="siteHeader v2Header">
      <div className="headerInner">
        <Logo />
        <nav>{navItems.map(([to, label]) => <NavLink key={to} to={to} end={to === '/'} className={({isActive}) => isActive ? 'active' : ''}>{label}</NavLink>)}</nav>
        <div className="liveDot">LIVE-CENTER <i /></div>
      </div>
    </header>
    <main>{children}</main>
    <footer>© 2026 ANSTOSS IWF · Zehn Freunde. Eine Liga. Unzählige Geschichten.</footer>
  </div>
}

function TransferTicker() {
  return <section className="portalWidget transferTicker">
    <div className="widgetTitle"><h2>Transfer-Ticker</h2><Link to="/magazin">Alle anzeigen</Link></div>
    {transferTicker.map(([player, fee, manager, direction], index) => <div className="tickerRow" key={player}>
      <time>{['14:32','11:47','11:30','10:58','09:41'][index]}</time>
      <b className={direction}>➜</b><span>{player}</span><strong>{fee}</strong><em>{manager}</em>
    </div>)}
    <Link className="widgetMore" to="/artikel/kimmich-eroeffnet-transferpoker">Alle Transfers →</Link>
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
    <div className="widgetTitle"><h2>Marktcheck</h2><Link to="/artikel/kimmich-eroeffnet-transferpoker">Alle Spieler</Link></div>
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

function Manager() {
  return <Layout><section className="page">
    <PageHero eyebrow="Die zehn Manager" title="Zehn Charaktere. Ein Titel." text="Kader, Stärken, Schwächen und die Prognosen der ANSTOSS-Redaktion – mit all den Eigenheiten, die diese Liga seit Jahren prägen." stat={{value:"10",label:"Manager"}} />
    <div className="rankingStrip">{managers.map(m => <a href={`#${m.name.toLowerCase()}`} key={m.name}><b>{m.rank}</b>{m.name}</a>)}</div>
    <div className="managerProfiles">{managers.map(m => <article className="managerProfile" id={m.name.toLowerCase()} key={m.name}>
      <div className="managerTop">
        <div><span className="rankLabel">POWER RANKING #{m.rank}</span><h2>{m.name}</h2><p>{m.team}</p></div>
        <div className="managerFacts"><span><b>{m.value}</b> Kaderwert</span><span><b>Note {m.grade}</b> Redaktion</span><span><b>{m.verdict}</b> Prognose</span></div>
      </div>
      <div className="squadLine"><b>Kader:</b> {m.players.join(' · ')}</div>
      <div className="managerIdentity">
        <span>MANAGERPROFIL</span>
        <h3>{m.profileTitle}</h3>
        <p>{m.profileText}</p>
        <div className="runningGag"><b>Running Gag:</b> {m.runningGag}</div>
      </div>
      <div className="managerColumns">
        <div><h3>Schlüsselspieler</h3><p className="keyPlayer">{m.key}</p><h3>Stärke</h3><p>{m.strength}</p><h3>Schwäche</h3><p>{m.weakness}</p></div>
        <div className="editorVoices"><blockquote><b>Ingo:</b> {m.ingo}</blockquote><blockquote><b>Werner:</b> {m.werner}</blockquote><blockquote className="franz"><b>Franz:</b> {m.franz}</blockquote></div>
      </div>
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
    <img className="teamImage" src="./images/redaktion.png" alt="Ingo, Werner und Franz" />
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
    <Route path="/hall-of-fame" element={<HallOfFame />} />
    <Route path="/saisonarchiv" element={<Saisonarchiv />} />
    <Route path="/reisen" element={<Reisen />} />
    <Route path="/redaktion" element={<Redaktion />} />
    <Route path="/ueber-die-iwf" element={<UeberDieIwf />} />
    <Route path="*" element={<Home />} />
  </Routes>
}
