import { Link, NavLink, Route, Routes, useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { articles } from './data/articles'
import { managers } from './data/managers'
import { weeklyQuotes } from './data/quotes'
import { seasons, allTimeTable, titleRanking, records } from './data/history'
import { trips, summerIwf } from './data/trips'
import BundesligaCountdown from './components/widgets/BundesligaCountdown'
import BundesligaMatchday from './components/widgets/BundesligaMatchday'
import TravelCountdown from './components/widgets/TravelCountdown'

const navItems = [
  ['/', 'Home'],
  ['/magazin', 'Magazin'],
  ['/saisoncheck', 'Saisoncheck'],
  ['/manager', 'Manager'],
  ['/hall-of-fame', 'Hall of Fame'],
  ['/saisonarchiv', 'Saisonarchiv'],
  ['/reisen', 'IWF-Reisen'],
  ['/redaktion', 'Redaktion'],
  ['/ueber-die-iwf', 'Über die IWF']
]

function Layout({ children }) {
  return <>
    <header className="siteHeader">
      <div className="topline">DAS MAGAZIN DER IWF LEAGUE</div>
      <div className="brandRow">
        <Link className="brand" to="/">ANSTOSS<span>.</span></Link>
        <div className="motto">Zehn Freunde. Eine Liga. Unzählige Geschichten.</div>
      </div>
      <nav>
        {navItems.map(([to, label]) => <NavLink key={to} to={to} end={to === '/'}
          className={({ isActive }) => isActive ? 'active' : ''}>{label}</NavLink>)}
      </nav>
    </header>
    <main>{children}</main>
    <footer>ANSTOSS · Das unabhängige, völlig parteiische Magazin der IWF League</footer>
  </>
}

function Home() {
  const top = articles.find(a => a.topStory)
  const rest = articles.filter(a => !a.topStory)
  return <Layout>
    <section className="hero">
      <div className="heroText">
        <div className="eyebrow">{top.kicker}</div>
        <h1>{top.title}</h1>
        <p>{top.excerpt}</p>
        <Link className="button" to={`/artikel/${top.slug}`}>Ausgabe lesen</Link>
      </div>
      <img src={top.hero} alt="ANSTOSS Redaktion" />
    </section>
    <section className="page">
      <div className="sectionHeading"><span>Heute bei ANSTOSS</span></div>
      <div className="liveWidgetGrid">
        <BundesligaCountdown />
        <TravelCountdown compact />
      </div>
      <BundesligaMatchday />
      <WeeklyQuotes />
      <div className="sectionHeading magazineHeading"><span>Neu im Magazin</span></div>
      <div className="cardGrid">{rest.map(a => <ArticleCard key={a.slug} article={a} />)}</div>
    </section>
  </Layout>
}

function WeeklyQuotes() {
  return <section className="weeklyQuotes">
    <div className="sectionHeading"><span>Zitate der Woche</span></div>
    <div className="quoteGrid">{weeklyQuotes.map((item, index) => <article className={index === 0 ? 'weeklyQuote leadQuote' : 'weeklyQuote'} key={`${item.speaker}-${item.date}`}>
      <div className="quoteMeta"><span>{item.date}</span><b>{item.speaker}</b></div>
      <blockquote>„{item.quote}“</blockquote>
      <p className="quoteContext">{item.context}</p>
      <div className="editorVerdict"><strong>{item.editor}:</strong> {item.verdict}</div>
    </article>)}</div>
  </section>
}

function ArticleCard({ article }) {
  return <Link className="articleCard" to={`/artikel/${article.slug}`}>
    <div className="cardCategory">{article.category}</div>
    <h3>{article.title}</h3>
    <p>{article.excerpt}</p>
    <small>{article.author} · {article.readTime}</small>
  </Link>
}

function Magazine() {
  return <Layout><section className="page">
    <div className="sectionHeading"><span>Alle Artikel</span></div>
    <div className="cardGrid">{articles.map(a => <ArticleCard key={a.slug} article={a} />)}</div>
  </section></Layout>
}

function Article() {
  const { slug } = useParams()
  const article = articles.find(a => a.slug === slug)
  if (!article) return <Layout><section className="page"><h1>Artikel nicht gefunden</h1></section></Layout>
  return <Layout>
    <article className="article">
      <div className="eyebrow">{article.kicker}</div>
      <h1>{article.title}</h1>
      <div className="meta">{article.author} · {article.date} · {article.readTime}</div>
      <img className="articleHero" src={article.hero} alt="" />
      <div className="articleBody"><ReactMarkdown remarkPlugins={[remarkGfm]}>{article.content}</ReactMarkdown></div>
    </article>
  </Layout>
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
    <div className="sectionHeading"><span>Die zehn Manager</span></div>
    <p className="introText">Alle Kader im ANSTOSS-Check: Marktwert, Schlüsselspieler, Stärken, Schwächen und die Prognose der Redaktion. Stand: 20. Juli 2026.</p>
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
    <div className="sectionHeading"><span>Hall of Fame</span></div>
    <div className="hallHero"><div className="trophy">🏆</div><div><div className="eyebrow">Zehn dokumentierte Saisons</div><h1>Die Titelträger der IWF</h1><p>Vom ersten Champion Luca bis zur Rekordsaison des Laptoptrainers: Die Hall of Fame basiert jetzt auf den historischen Abschlusstabellen von 2016/17 bis 2025/26.</p></div></div>
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
    <div className="sectionHeading"><span>Saisonarchiv</span></div>
    <p className="introText">Zehn komplette Abschlusstabellen bilden das statistische Gedächtnis der IWF. Jede Saison zeigt Meister, Podium und die vollständige Reihenfolge.</p>
    <article className="archiveCurrent"><span>AKTUELL</span><h2>2026/27</h2><p>Die neue Saison beginnt am 28. August. Bis dahin gilt das Power Ranking der ANSTOSS-Redaktion.</p><Link className="textLink" to="/saisoncheck">Zur Saisonvorschau →</Link></article>
    <div className="seasonArchive">{[...seasons].reverse().map(season=><details key={season.season} className="seasonCard"><summary><div><span>{season.season}</span><h2>{season.champion}</h2></div><strong>{season.championPoints.toLocaleString('de-DE')} Punkte</strong></summary><div className="seasonTable">{season.table.map(([name,points],index)=><div key={name}><b>{index+1}</b><span>{name}</span><strong>{points.toLocaleString('de-DE')}</strong></div>)}</div></details>)}</div>
  </section></Layout>
}

function Reisen() {
  const pastTrips = trips.filter(trip => trip.year <= 2026).sort((a,b)=>b.year-a.year)
  return <Layout><section className="page">
    <div className="sectionHeading"><span>IWF-Reisen</span></div>
    <TravelCountdown />
    <div className="travelIntro"><div className="eyebrow">Seit 2004 unterwegs</div><h1>Vom Berliner Auftakt bis Rom</h1><p>Die jährliche IWF-Reise ist das zweite große Saisonfinale. Sie führte die Gruppe von Berlin über Prag, Bratislava, Athen und Lissabon bis zur nächsten Ausgabe in Rom.</p></div>
    <div className="tripTimeline">{pastTrips.map(trip=><article className={trip.type === 'next' ? 'nextTrip' : ''} key={`${trip.year}-${trip.city}`}><div className="tripYear">{trip.year}</div><div><span>{trip.flag} {trip.country}</span><h2>{trip.city}</h2><p>{trip.status}</p>{trip.year === 2025 && <p className="tripStory">Wassilios war angeschlagen – und die Gruppe merkte, wie kopflos sie ohne ihren fitten Organisator für Unterkunft und Programm agiert.</p>}{trip.year === 2019 && <p className="tripStory">Bratislava brachte der IWF nicht nur eine Reise, sondern auch den Rapper Pink Panther alias Sebastian.</p>}</div></article>)}</div>
    <div className="sectionHeading"><span>Sommer-IWF bei Henning</span></div>
    <div className="summerLead"><h2>Die Familienausgabe im Garten</h2><p>Seit 2024 lädt Henning zur Sommer-IWF. Anders als auf der klassischen Reise sind Partnerinnen, Partner und Kinder ausdrücklich dabei. Grill, Garten und Saisonvorfreude machen das Treffen zum familiären Auftakt des IWF-Jahres.</p></div>
    <div className="summerGrid">{summerIwf.map(item=><article key={item.year}><span>☀️ {item.year}</span><h3>{item.place}</h3><p>Sommer-IWF · mit Familien</p></article>)}</div>
    <div className="hymnBlock"><div><span>Die IWF-Hymne</span><h2>Journey – Don't Stop Believin'</h2><p>Ein Song als gemeinsamer Nenner: Die Hymne gehört zur IWF-Tradition und begleitet die Geschichten, Reisen und langen Nächte der Liga.</p></div><div className="hymnNote">♪</div></div>
  </section></Layout>
}

function Redaktion() {
  return <Layout><section className="page">
    <div className="sectionHeading"><span>Die Redaktion</span></div>
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
    <div className="sectionHeading"><span>Über die IWF</span></div>
    <div className="aboutLead"><div className="eyebrow">Seit 2004</div><h1>Zehn Freunde. Eine Liga. Unzählige Geschichten.</h1><p>Die IWF ist Comunio-Wettbewerb, Freundeskreis und Reisegemeinschaft zugleich. ANSTOSS dokumentiert die aktuelle Saison und bewahrt die Geschichten, die weit über Punkte und Marktwerte hinausgehen.</p></div>
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
