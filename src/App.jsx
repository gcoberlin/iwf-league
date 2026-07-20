import { Link, NavLink, Route, Routes, useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { articles } from './data/articles'
import { managers } from './data/managers'

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
      <div className="sectionHeading"><span>Neu im Magazin</span></div>
      <div className="cardGrid">{rest.map(a => <ArticleCard key={a.slug} article={a} />)}</div>
      <div className="quoteBlock">
        <div className="quoteMark">“</div>
        <blockquote>Mir fehlt noch etwas die Motivation …</blockquote>
        <strong>SEBASTIAN · STATUS DER MOTIVATION: WIRD GESUCHT</strong>
      </div>
    </section>
  </Layout>
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
    <div className="hallHero"><div className="trophy">🏆</div><div><div className="eyebrow">Die Geschichte der IWF League</div><h1>Meister, Legenden und große Namen</h1><p>Hier werden die Champions der Liga verewigt. Der Rekordmeister steht fest, doch jedes neue Kapitel beginnt wieder bei null Punkten.</p></div></div>
    <div className="hofGrid">
      <article><span>Rekordmeister</span><h2>Sebastian</h2><p>Der Maßstab der Liga. Transferstark, erfahren und regelmäßig erst dann motiviert, wenn es ernst wird.</p></article>
      <article><span>Erster Meister</span><h2>Luca</h2><p>Der Mann des ersten Titels und damit für immer Teil der Gründungsgeschichte.</p></article>
      <article><span>Einmaliger Champion</span><h2>Matthias</h2><p>Der Überraschungsmeister, dessen Titel bis heute zwischen Lucky Shot und großer Managerkunst diskutiert wird.</p></article>
    </div>
    <div className="notice"><b>Archivhinweis:</b> Weitere Meister, Vizemeister, Punkterekorde und Saisonbestwerte werden ergänzt, sobald die historischen Abschlusstabellen vorliegen.</div>
  </section></Layout>
}

function Saisonarchiv() {
  return <Layout><section className="page">
    <div className="sectionHeading"><span>Saisonarchiv</span></div>
    <p className="introText">Das Gedächtnis der IWF League. Künftig findet jede Saison hier ihre Abschlusstabelle, ihre großen Transfers und ihre schönsten Fehleinschätzungen.</p>
    <div className="archiveGrid">
      <article className="archiveCurrent"><span>AKTUELL</span><h2>2026/27</h2><p>Der große Saisoncheck ist eröffnet. Zehn Manager, zehn Kader und drei Redakteure mit zu viel Meinung.</p><Link className="textLink" to="/saisoncheck">Zur Saisonvorschau →</Link></article>
      <article><span>2025/26</span><h2>Die vergangene Saison</h2><p>Abschlusstabelle und Rückblick folgen mit den historischen Daten.</p></article>
      <article><span>Archiv</span><h2>Frühere Spielzeiten</h2><p>Die Liga-Historie wird Schritt für Schritt ergänzt.</p></article>
    </div>
  </section></Layout>
}

function Reisen() {
  return <Layout><section className="page">
    <div className="sectionHeading"><span>IWF-Reisen</span></div>
    <div className="travelGrid">
      <div><strong>2025</strong><h2>🇵🇹 Lissabon</h2><p>Die letzte große Reise.</p></div>
      <div><strong>2026</strong><h2>🇮🇹 Rom</h2><p>26.–29. November 2026</p></div>
      <div><strong>2028</strong><h2>🇹🇭 Bangkok</h2><p>Bereits beschlossen.</p></div>
    </div>
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
    <div className="aboutLead"><div className="eyebrow">Mehr als Comunio</div><h1>Zehn Freunde. Eine Liga. Unzählige Geschichten.</h1><p>Die IWF League ist eine private Comunio-Liga, in der nicht nur Punkte und Marktwerte zählen. Sie lebt von Freundschaft, Rivalität, Reisen, wilden Transfers und den Geschichten, die zwischen zwei Spieltagen entstehen.</p></div>
    <div className="aboutGrid">
      <article><h2>Die Liga</h2><p>Zehn Manager kämpfen über eine komplette Bundesliga-Saison um den Titel. Jeder hat seinen eigenen Stil: vom Rekordmeister bis zum Außenseiter, vom Taktiker bis zum Transferzocker.</p></article>
      <article><h2>Das Magazin</h2><p>ANSTOSS begleitet die Saison mit Analysen, Satire, Gerüchteküche, Zitaten und Transfergeschichten. Die Redaktion urteilt laut, aber immer mit einem Augenzwinkern.</p></article>
      <article><h2>Die Tradition</h2><p>Gemeinsame Reisen gehören genauso zur Liga wie der Transfermarkt. Lissabon, Rom und Bangkok sind Teil einer Geschichte, die weit über eine Tabelle hinausgeht.</p></article>
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
