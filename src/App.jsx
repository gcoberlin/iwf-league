import { useEffect, useMemo, useState } from 'react'
import { editors, managers, trips } from './data.js'

const nav = [
  ['home', 'Start'], ['magazin', 'Magazin'], ['manager', 'Manager'],
  ['reisen', 'IWF-Reisen'], ['redaktion', 'Redaktion'], ['historie', 'Historie'],
]

function useCountdown(target) {
  const [now, setNow] = useState(Date.now())
  useEffect(() => {
    const timer = setInterval(() => setNow(Date.now()), 60_000)
    return () => clearInterval(timer)
  }, [])
  return Math.max(0, Math.ceil((new Date(target).getTime() - now) / 86_400_000))
}

function Header({ route }) {
  const [open, setOpen] = useState(false)
  return <>
    <div className="ticker"><div className="shell ticker-inner">
      <b>ANSTOSS LIVE</b><span>Rom 2026: 26.–29. November</span><span>Bangkok 2028 bestätigt</span><span>Historische Daten folgen</span>
    </div></div>
    <header>
      <div className="shell masthead">
        <a className="brand" href="#/home"><strong>ANSTOSS</strong><small>DAS MAGAZIN DER IWF LEAGUE</small></a>
        <button className="menu" onClick={() => setOpen(!open)} aria-label="Menü">☰</button>
        <nav className={open ? 'open' : ''}>{nav.map(([key, label]) =>
          <a className={route === key ? 'active' : ''} key={key} href={`#/${key}`} onClick={() => setOpen(false)}>{label}</a>
        )}</nav>
      </div>
    </header>
  </>
}

function Footer() {
  return <footer><div className="shell footer-inner"><div><strong>ANSTOSS</strong><span>Zehn Freunde. Eine Liga. Unzählige Geschichten.</span></div><div>🎵 Journey – Don't Stop Believin'</div></div></footer>
}

function Home() {
  const days = useCountdown('2026-11-26T00:00:00+01:00')
  return <main>
    <section className="shell hero">
      <div className="hero-visual"><span>SAISON 2026/27</span><div className="hero-mark">IWF</div></div>
      <div className="hero-copy"><p className="eyebrow">Die große Saisonvorschau</p><h1>Zehn Manager.<br/>Ein Titel.<br/>Neun Ausreden.</h1><p>Die IWF League startet in eine neue Spielzeit – zwischen Transfergenie, Regeloptimierung und gepflegter Selbstüberschätzung.</p><a className="button" href="#/magazin">Titelgeschichte lesen</a></div>
    </section>

    <section className="shell news-layout">
      <div><p className="eyebrow dark">Aktuelle Ausgabe</p><h2>Die Liga ist bereit. Behauptet sie jedenfalls.</h2><div className="card-grid">
        <article><span>👑</span><p className="eyebrow">Titelkampf</p><h3>Jagd auf Sebastian eröffnet</h3><p>Der Rekordmeister bleibt der Maßstab. Jose wartet, Luca lauert – und Tomi erklärt sich vorsorglich selbst zum Favoriten.</p></article>
        <article><span>🚨</span><p className="eyebrow">Franz exklusiv</p><h3>Geheimplan aus Bangkok?</h3><p>Jan soll bereits sämtliche Systemlücken geprüft haben. Beweise gibt es keine. Eine Schlagzeile trotzdem.</p></article>
        <article><span>📊</span><p className="eyebrow">Werner analysiert</p><h3>Aktivität schlägt Bauchgefühl</h3><p>Uwe widerspricht dieser These seit Jahren – meist durch Abwesenheit.</p></article>
        <article><span>🍺</span><p className="eyebrow">Ingos Kolumne</p><h3>Warum Außenseiter diese Liga brauchen</h3><p>Weil ohne Hoffnung nur noch Marktwerte übrig blieben. Und das wäre selbst für Comunio zu traurig.</p></article>
      </div></div>
      <aside><div className="countdown"><p className="eyebrow light-text">Nächste IWF-Reise</p><div className="days">{days}</div><b>Tage bis Rom</b><span>26.–29.11.2026 🇮🇹</span></div><div className="quote"><p className="eyebrow dark">Zitat der Woche</p><blockquote>„Mein Kader ist eigentlich gut. Die Punkte sind nur noch nicht informiert.“</blockquote><span>– anonymer IWF-Manager</span></div></aside>
    </section>

    <section className="red-band"><div className="shell split"><div><p className="eyebrow light-text">Die Redaktion</p><h2>Drei Stimmen.<br/>Keine Gnade.</h2><p>Ingo erzählt die Geschichte. Werner zerlegt die Zahlen. Franz macht daraus eine Eilmeldung.</p><a className="button pale" href="#/redaktion">Redaktion kennenlernen</a></div><img className="newsroom-photo" src={`${import.meta.env.BASE_URL}redaktion.png`} alt="Die ANSTOSS-Redaktion mit Ingo, Werner und Franz"/></div></section>

    <section className="shell section"><p className="eyebrow dark">IWF-Reisechronik</p><h2>Von Lissabon über Rom nach Bangkok</h2><div className="trip-grid">{trips.map(t => <article key={t.city}><div className="flag">{t.flag}</div><p className="eyebrow">{t.year} · {t.status}</p><h3>{t.city}</h3><p>{t.text}</p></article>)}</div></section>

    <section className="hymn"><div className="shell hymn-inner"><div><p className="eyebrow light-text">Die DNA der IWF</p><h2>Don't Stop Believin'</h2><p>Die offizielle Hymne der IWF League – von Journey.</p></div><div className="vinyl">♪</div></div></section>
  </main>
}

function Magazin() {
  return <Page title="Magazin" lead="Reportagen, Analysen und Boulevard aus der wichtigsten Liga, von der außerhalb der IWF noch niemand gehört hat."><div className="article-feature"><p className="eyebrow">Titelgeschichte · Ingo</p><h2>Zehn Manager, zehn Wahrheiten und mindestens elf Ausreden</h2><p>Eine Saisonvorschau zwischen berechtigtem Ehrgeiz, erstaunlicher Zuversicht und Kadern, die auf dem Papier immer besser aussehen als am Spieltag.</p><div className="article-rule"/><p>Sebastian startet als Rekordmeister und natürlicher Favorit. Jose bringt das größte Bundesliga-Wissen mit, Luca bleibt der kreative Daueranwärter. Hinter ihnen beginnt die Zone, in der Prognosen zu Satire werden – und genau dort fühlt sich die IWF League am wohlsten.</p><p>Die vollständigen historischen Einordnungen ergänzen wir, sobald Tabellen, Meisterlisten und Rekorde vorliegen.</p></div></Page>
}

function Managers() {
  return <Page title="Die Manager" lead="Zehn Charaktere, zehn Strategien und nur ein Pokal. Die Karrierewerte folgen mit den historischen Daten."><div className="manager-grid">{managers.map((m, i) => <article key={m.name}><span className="number">{String(i+1).padStart(2,'0')}</span><div className="manager-icon">{m.icon}</div><p className="eyebrow">{m.tag}</p><h3>{m.name}</h3><b>{m.club}</b><p>{m.text}</p><div className="rating"><span>Transferinstinkt</span><i style={{width: `${58 + (i*7)%38}%`}}/></div></article>)}</div></Page>
}

function Redaktion() {
  return <Page title="Die Redaktion" lead="Jede Geschichte hat drei Seiten: die von Ingo, die von Werner – und die von Franz."><img className="editor-hero" src={`${import.meta.env.BASE_URL}redaktion.png`} alt="Ingo, Werner und Franz in der Redaktion"/><div className="editor-grid">{editors.map((e, i) => <article key={e.name}><div className="editor-index">0{i+1}</div><p className="eyebrow">{e.role}</p><h3>{e.name}</h3><b>{e.style}</b><p>{e.text}</p><blockquote>{i === 0 ? 'Fußball ist mehr als Punkte. Außer bei Comunio.' : i === 1 ? 'Der Erfolg gibt recht. Die Tabelle meistens auch.' : 'Wir bleiben an der Story dran. Zur Not erfinden wir eine neue.'}</blockquote></article>)}</div></Page>
}

function Reisen() {
  const days = useCountdown('2026-11-26T00:00:00+01:00')
  return <Page title="IWF-Reisen" lead="Einmal im Jahr verlässt die Liga den Transfermarkt und fährt gemeinsam in die Welt hinaus. Kultur ist ausdrücklich vorgesehen."><div className="travel-count"><div><span>{days}</span><b>Tage bis Rom</b></div><p>26.–29. November 2026</p></div><div className="timeline">{trips.map((t, i) => <article key={t.city}><div className="timeline-year">{t.year}</div><div><p className="eyebrow">{t.status}</p><h2>{t.flag} {t.city}</h2><p>{t.text}</p>{i === 2 && <strong>Jan hat Heimrecht.</strong>}</div></article>)}</div></Page>
}

function Historie() {
  return <Page title="Hall of Fame & Historie" lead="Das Museum ist eröffnet, die Vitrinen warten noch auf ihre Exponate."><div className="placeholder"><div>🏆</div><h2>Historische Daten folgen</h2><p>Aus den kommenden Abschlusstabellen bauen wir Meisterlisten, Ewige Tabelle, Managerkarrieren, Rekorde und Saisonarchive – ohne Werte zu erfinden.</p><div className="coming-grid"><span>Meisterchronik</span><span>Ewige Tabelle</span><span>Rekorde</span><span>Saisonarchiv</span></div></div></Page>
}

function Page({ title, lead, children }) {
  return <main className="shell page"><section className="page-head"><p className="eyebrow dark">ANSTOSS · IWF LEAGUE</p><h1>{title}</h1><p>{lead}</p></section>{children}</main>
}

const routes = { home: Home, magazin: Magazin, manager: Managers, redaktion: Redaktion, reisen: Reisen, historie: Historie }

export default function App() {
  const readRoute = () => window.location.hash.replace('#/', '') || 'home'
  const [route, setRoute] = useState(readRoute())
  useEffect(() => {
    const onHash = () => { setRoute(readRoute()); window.scrollTo({top: 0, behavior: 'smooth'}) }
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])
  const Current = useMemo(() => routes[route] || Home, [route])
  return <><Header route={route}/><Current/><Footer/></>
}
