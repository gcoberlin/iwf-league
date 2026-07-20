const editors = [
  {
    letter: 'I',
    className: 'ingo',
    role: 'Chefredakteur',
    name: 'Ingo',
    subtitle: 'Hüter des guten Tons',
    quote: '„Fußball ist zu wichtig, um ihn nur ernst zu nehmen.“',
    text: 'Mitte 40, ehemaliger Fußballer, analytisch und grundsätzlich neutral. Ingo verbindet Fußballromantik mit klarer Einordnung und einer leichten Sympathie für Außenseiter.',
    facts: ['Stil: 11FREUNDE', 'Spezialgebiet: große Linien und kleine Geschichten', 'Schwäche: romantisiert gelegentlich Tabellenplatz 14'],
  },
  {
    letter: 'W',
    className: 'werner',
    role: 'Chefanalyst',
    name: 'Werner',
    subtitle: 'Mann für klare Worte',
    quote: '„Die Tabelle lügt nicht. Manager manchmal schon.“',
    text: 'Mitte 50 und früher Schiedsrichter. Werner bewertet nach Leistung, nicht nach Sympathie. Erfolg gibt recht, schwache Auftritte werden zuverlässig angepiekt.',
    facts: ['Stil: kicker', 'Spezialgebiet: Analyse und Fehlentscheidungen', 'Schwäche: verzeiht schlechte Leistung erst nach Videobeweis'],
  },
  {
    letter: 'F',
    className: 'franz',
    role: 'Boulevard',
    name: 'Franz',
    subtitle: 'Kontrollierter Wahnsinn',
    quote: '„Exklusiv ist auch, was sonst noch keiner behauptet hat.“',
    text: '30 Jahre alt und noch aktiv. Franz schreibt laut, schnell und manchmal leicht drüber. Kleine Fehler gehören zum Stil – behauptet jedenfalls Franz.',
    facts: ['Stil: SPORT BILD mit Satire', 'Spezialgebiet: Gerüchte und Eskalation', 'Schwäche: kennt „zurückhaltend“ nur vom Hörensagen'],
  },
]

export default function Redaktion() {
  return (
    <main>
      <section className="shell pageHero">
        <p className="eyebrow">Über uns</p>
        <h1>Die Redaktion</h1>
        <p>Drei Redakteure, drei Schreibweisen und gemeinsam trotzdem keine Garantie auf eine richtige Prognose.</p>
      </section>

      <section className="shell editorGrid">
        {editors.map(e => (
          <article className="editorCard" key={e.name}>
            <div className={`portrait ${e.className}`}>{e.letter}</div>
            <p className="eyebrow">{e.role}</p>
            <h2>{e.name}</h2>
            <h3>{e.subtitle}</h3>
            <blockquote>{e.quote}</blockquote>
            <p>{e.text}</p>
            <ul>{e.facts.map(f => <li key={f}>{f}</li>)}</ul>
          </article>
        ))}
      </section>

      <section className="shell newsroom">
        <p className="eyebrow">Redaktionskonferenz</p>
        <h2>So entsteht eine ANSTOSS-Schlagzeile</h2>
        <div className="newsroomGrid">
          <div><b>1</b><strong>Ingo</strong><span>sucht die Geschichte.</span></div>
          <div><b>2</b><strong>Werner</strong><span>prüft, ob sie stimmt.</span></div>
          <div><b>3</b><strong>Franz</strong><span>macht sie trotzdem größer.</span></div>
        </div>
      </section>
    </main>
  )
}
