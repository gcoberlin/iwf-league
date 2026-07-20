const ranking = [
  ['1', 'Sebastian', 'Titelkandidat Nr. 1'],
  ['2', 'Jose', 'Der ewige Rivale'],
  ['3', 'Luca', 'Der kreative Herausforderer'],
  ['4', 'Wassili', 'Gefährlich, solange Outlook schweigt'],
  ['5', 'Tomi', 'Große Namen, große Klappe'],
  ['6', 'Jan', 'Bayern-Botschafter aus Bangkok'],
  ['7', 'Matthias', 'Außenseiter-Flüsterer'],
  ['8', 'Henning', 'Maximale Aktivität, variables Ergebnis'],
  ['9', 'Greg', 'Der gefährlichste Nicht-Experte'],
  ['10', 'Uwe', 'Potenzial trifft Login-Bildschirm'],
]

export default function Home() {
  return (
    <main>
      <section className="shell hero">
        <div className="heroVisual">
          <span>SONDERHEFT 2026/27</span>
          <div className="ball">⚽</div>
        </div>
        <div className="heroCopy">
          <p className="eyebrow">Titelstory</p>
          <h1>Zehn Manager. Ein Titel. Neun Ausreden.</h1>
          <p>Die Startkader sind zugelost, der Markt ist offen – und die ersten Manager reden sich ihre Mannschaft bereits schön.</p>
          <a className="button" href="#/magazin">Saisonvorschau lesen</a>
        </div>
      </section>

      <section className="shell newsLayout">
        <div>
          <p className="eyebrow">Aktuell</p>
          <h2>Aus der Redaktion</h2>
          <div className="cardGrid">
            <article><div className="emoji">👑</div><p className="eyebrow">Favoritencheck</p><h3>Sebastian wieder der Gejagte</h3><p>Rekordmeister, Laptoptrainer und vermutlich schon mit drei geöffneten Transfermarkt-Tabs unterwegs.</p></article>
            <article><div className="emoji">🍺</div><p className="eyebrow">Rivalität</p><h3>Jose plant den Gegenentwurf</h3><p>Fußballromantik, Fachwissen und die feste Überzeugung, dass man auch ohne Dortmunder Meister werden kann.</p></article>
            <article><div className="emoji">🌏</div><p className="eyebrow">Fernost</p><h3>Bangkoks heißer Draht nach München</h3><p>Jan lebt weit weg – beim ersten Bayern-Spieler ist er trotzdem als Erster am Gebotsknopf.</p></article>
            <article><div className="emoji">🎲</div><p className="eyebrow">Unberechenbar</p><h3>Greg und die Kunst des Zufallstreffers</h3><p>Keine Ahnung von Fußball, aber regelmäßig genau der Transfer, der den Experten die Laune verdirbt.</p></article>
          </div>
        </div>

        <aside>
          <div className="darkBox">
            <p className="eyebrow">Satz des Tages</p>
            <blockquote>„Die Meisterschaft wird nicht im Draft entschieden. Sie wird auf dem Transfermarkt verloren.“</blockquote>
          </div>
          <div className="rumours">
            <p className="eyebrow">Gerüchteküche</p>
            <h2>Was man hört</h2>
            <ol>
              <li>Sebastian soll 143 Transferszenarien vorbereitet haben.</li>
              <li>Tomi nennt seinen Kader intern bereits „Titelteam“.</li>
              <li>Uwe kennt sein Passwort angeblich noch.</li>
            </ol>
          </div>
        </aside>
      </section>

      <section className="goldBand">
        <div className="shell split">
          <div>
            <p className="eyebrow">Hinter den Schlagzeilen</p>
            <h2>Drei Redakteure. Drei Wahrheiten.</h2>
            <p>Ingo analysiert, Werner seziert und Franz macht daraus eine Schlagzeile, die mindestens 17 Prozent größer ist als die eigentliche Geschichte.</p>
            <a className="button light" href="#/redaktion">Redaktion kennenlernen</a>
          </div>
          <div className="editorMini">
            <div><b>Ingo</b><span>Chefredakteur</span></div>
            <div><b>Werner</b><span>Chefanalyst</span></div>
            <div><b>Franz</b><span>Boulevard</span></div>
          </div>
        </div>
      </section>

      <section className="redBand">
        <div className="shell split">
          <div><p className="eyebrow black">Mehr als Comunio</p><h2>Zehn Freunde, eine Liga und vier Tage Ausnahmezustand</h2></div>
          <div>
            <p>Die IWF League ist der digitale Ableger einer echten Freundschaft. Jedes Jahr am letzten Novemberwochenende geht es für vier Tage in eine große oder kleine Stadt.</p>
            <p>Kultur, gute Gespräche, Bierchen, kulinarische Entdeckungen und ein wohldosierter Anteil Nachtleben gehören fest zum Programm.</p>
            <p className="pull">Comunio liefert den täglichen Wettbewerb. Die IWF-Reise liefert die Geschichten.</p>
            <a className="button blackButton" href="#/reisen">Zu den IWF-Reisen</a>
          </div>
        </div>
      </section>

      <section className="ranking">
        <div className="shell">
          <p className="eyebrow">Redaktionsurteil</p>
          <h2>Power Ranking zum Saisonstart</h2>
          <div className="rankGrid">
            {ranking.map(([pos, name, note]) => <div key={name}><b>{pos}</b><strong>{name}</strong><span>{note}</span></div>)}
          </div>
        </div>
      </section>
    </main>
  )
}
