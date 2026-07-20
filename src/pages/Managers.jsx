const managers = [
  ['Sebastian','Rekordmeister, Laptoptrainer, Vielflieger und ewiger Rivale von Jose.'],
  ['Jose','Fußballromantiker, Bierliebhaber, Raumdeuter und Düsseldorfer Fachmann.'],
  ['Luca','Kreativer Ex-Meister, italienische Wurzeln und gefühlter Stammgast auf Platz drei.'],
  ['Tomi','Große Namen, große Klappe und bei Rückstand überraschend viele Schiedsrichterfehler.'],
  ['Matthias','Kölner Pumper, Bielefeld-Fan und Freund der Außenseiter.'],
  ['Greg','Der Nicht-Experte mit überraschend gutem Transferhändchen.'],
  ['Uwe','Viel Ahnung, gute Startkader und chronisch zu wenige Logins.'],
  ['Wassili','Trainer, Bundesliga-Kenner und gelegentlicher Gegner seiner selbst.'],
  ['Jan','Bayern-Botschafter aus Bangkok und kreativer Ausleger technischer Regeln.'],
  ['Henning','Engagiert, mutig und bei Transfers stets bereit für das Abenteuer.'],
]

export default function Managers() {
  return (
    <main>
      <section className="shell pageHero"><p className="eyebrow">Die zehn Freunde</p><h1>Manager, Charaktere, Ausreden</h1><p>Eine Liga ist nur so gut wie ihre Rivalitäten. Und ihre Running Gags.</p></section>
      <section className="shell managerGrid">
        {managers.map(([name,text],i)=><article key={name}><span>{String(i+1).padStart(2,'0')}</span><h2>{name}</h2><p>{text}</p></article>)}
      </section>
    </main>
  )
}
