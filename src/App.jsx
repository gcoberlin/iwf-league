import { Link, NavLink, Route, Routes, useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { articles } from './data/articles'
import { managers } from './data/managers'

function Layout({children}) {
  return <>
    <header className="siteHeader">
      <div className="topline">DAS MAGAZIN DER IWF LEAGUE</div>
      <div className="brandRow">
        <Link className="brand" to="/">ANSTOSS<span>.</span></Link>
        <div className="motto">Zehn Freunde. Eine Liga. Unzählige Geschichten.</div>
      </div>
      <nav>
        {[
          ['/', 'Home'], ['/magazin','Magazin'], ['/saisoncheck','Saisoncheck'],
          ['/manager','Manager'], ['/reisen','IWF-Reisen'], ['/redaktion','Redaktion'],
          ['/editor','Redaktionsmodus']
        ].map(([to,label]) => <NavLink key={to} to={to} end={to==='/'}
          className={({isActive})=>isActive?'active':''}>{label}</NavLink>)}
      </nav>
    </header>
    <main>{children}</main>
    <footer>ANSTOSS · Das unabhängige, völlig parteiische Magazin der IWF League</footer>
  </>
}

function Home(){
  const top = articles.find(a=>a.topStory)
  const rest = articles.filter(a=>!a.topStory)
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
      <div className="cardGrid">
        {rest.map(a=><ArticleCard key={a.slug} article={a}/>)}
      </div>
      <div className="quoteBlock">
        <div className="quoteMark">“</div>
        <blockquote>Mir fehlt noch etwas die Motivation …</blockquote>
        <strong>SEBASTIAN · ERSTER KANDIDAT FÜRS PHRASENSCHWEIN</strong>
      </div>
    </section>
  </Layout>
}

function ArticleCard({article}){
  return <Link className="articleCard" to={`/artikel/${article.slug}`}>
    <div className="cardCategory">{article.category}</div>
    <h3>{article.title}</h3>
    <p>{article.excerpt}</p>
    <small>{article.author} · {article.readTime}</small>
  </Link>
}

function Magazine(){
  return <Layout><section className="page">
    <div className="sectionHeading"><span>Alle Artikel</span></div>
    <div className="cardGrid">{articles.map(a=><ArticleCard key={a.slug} article={a}/>)}</div>
  </section></Layout>
}

function Article(){
  const {slug}=useParams()
  const article=articles.find(a=>a.slug===slug)
  if(!article) return <Layout><section className="page"><h1>Artikel nicht gefunden</h1></section></Layout>
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

function Saisoncheck(){ return <ArticleRedirect slug="saisoncheck-2026-27"/> }
function ArticleRedirect({slug}){ const a=articles.find(x=>x.slug===slug); return <Layout><section className="page centered"><div className="eyebrow">{a.kicker}</div><h1>{a.title}</h1><p>{a.excerpt}</p><Link className="button" to={`/artikel/${slug}`}>Saisoncheck öffnen</Link></section></Layout>}

function Manager(){
  return <Layout><section className="page">
    <div className="sectionHeading"><span>Die zehn Manager</span></div>
    <p className="introText">Alle Kader im ANSTOSS-Check: Marktwert, Schlüsselspieler, Stärken, Schwächen und die Prognose der Redaktion. Stand: 20. Juli 2026.</p>
    <div className="rankingStrip">{managers.map(m=><a href={`#${m.name.toLowerCase()}`} key={m.name}><b>{m.rank}</b>{m.name}</a>)}</div>
    <div className="managerProfiles">{managers.map(m=><article className="managerProfile" id={m.name.toLowerCase()} key={m.name}>
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

function Reisen(){
  return <Layout><section className="page">
    <div className="sectionHeading"><span>IWF-Reisen</span></div>
    <div className="travelGrid">
      <div><strong>2025</strong><h2>🇵🇹 Lissabon</h2><p>Die letzte große Reise.</p></div>
      <div><strong>2026</strong><h2>🇮🇹 Rom</h2><p>26.–29. November 2026</p></div>
      <div><strong>2028</strong><h2>🇹🇭 Bangkok</h2><p>Bereits beschlossen.</p></div>
    </div>
  </section></Layout>
}

function Redaktion(){
  return <Layout><section className="page">
    <div className="sectionHeading"><span>Die Redaktion</span></div>
    <img className="teamImage" src="./images/redaktion.png" alt="Ingo, Werner und Franz"/>
    <div className="editorGrid">
      <div><h2>Ingo</h2><p>Chefredakteur. Geschichten, Humor und ein Herz für Außenseiter.</p></div>
      <div><h2>Werner</h2><p>Analyse, Noten, Zahlen und die gelegentliche Spitze bei schwacher Leistung.</p></div>
      <div><h2>Franz</h2><p>Frech, laut, reißerisch – und immer für eine Schlagzeile gut.</p></div>
    </div>
  </section></Layout>
}

function Editor(){
  const template = `# Überschrift\n\n## Einleitung\n\nHier beginnt der Artikel.\n\n## Zwischenüberschrift\n\nWeiterer Text.`
  function download(){
    const title=document.getElementById('ed-title').value.trim()||'neuer-artikel'
    const author=document.getElementById('ed-author').value
    const category=document.getElementById('ed-category').value
    const content=document.getElementById('ed-content').value
    const slug=title.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'')
    const payload = {slug,title,kicker:`ANSTOSS · ${category}`,excerpt:'Teaser hier ergänzen',author,date:new Date().toLocaleDateString('de-DE'),readTime:'5 Min.',category,topStory:false,hero:'./images/redaktion.png',content}
    const blob=new Blob([`export default ${JSON.stringify(payload,null,2)}\n`],{type:'text/javascript'})
    const a=document.createElement('a'); a.href=URL.createObjectURL(blob); a.download=`${slug}.js`; a.click(); URL.revokeObjectURL(a.href)
  }
  return <Layout><section className="page">
    <div className="sectionHeading"><span>Redaktionsmodus</span></div>
    <div className="notice"><b>So einfach geht es:</b> Artikel schreiben, Datei herunterladen und mir schicken. Ich pflege sie in die Website ein und gebe dir das fertige Update zurück.</div>
    <div className="editorForm">
      <label>Titel<input id="ed-title" placeholder="Zum Beispiel: Der Transfer-Hammer"/></label>
      <label>Autor<select id="ed-author"><option>Ingo</option><option>Werner</option><option>Franz</option><option>Redaktion</option></select></label>
      <label>Kategorie<select id="ed-category"><option>Magazin</option><option>Saisoncheck</option><option>Transfermarkt</option><option>Spieltag</option><option>Gerüchteküche</option></select></label>
      <label>Artikeltext<textarea id="ed-content" defaultValue={template}/></label>
      <button className="button" onClick={download}>Artikeldatei herunterladen</button>
    </div>
  </section></Layout>
}

export default function App(){
  return <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/magazin" element={<Magazine/>}/>
    <Route path="/artikel/:slug" element={<Article/>}/>
    <Route path="/saisoncheck" element={<Saisoncheck/>}/>
    <Route path="/manager" element={<Manager/>}/>
    <Route path="/reisen" element={<Reisen/>}/>
    <Route path="/redaktion" element={<Redaktion/>}/>
    <Route path="/editor" element={<Editor/>}/>
    <Route path="*" element={<Home/>}/>
  </Routes>
}
