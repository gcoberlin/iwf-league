import { summerIwf, trips } from '../data/trips'

export default function Reisen() {
  const futureTrips = trips.filter(trip => trip.type === 'future' || trip.type === 'next')
  const pastTrips = trips.filter(trip => trip.type === 'past')

  return (
    <main>
      <section className="shell pageHero">
        <p className="eyebrow">Seit 2004 unterwegs</p>
        <h1>Die IWF-Reisen</h1>
        <p>Vier Tage Stadt, Kultur, Gespräche, Bier, Kulinarik und Geschichten, die mit jedem Jahr etwas besser werden.</p>
      </section>

      <section className="shell travelIntro">
        <div className="travelMark">IWF</div>
        <div>
          <h2>Die Tradition hinter der Liga</h2>
          <p>Einmal im Jahr wird aus der digitalen Comunio-Rivalität eine gemeinsame Reise. Das Ziel darf groß oder klein sein – entscheidend sind die Menschen, die Gespräche und der gemeinsame Ausnahmezustand.</p>
          <p>Von den frühen Berliner Jahren bis nach Lissabon: Die Reisechronik ist inzwischen fast so lang wie die Liste der Ausreden nach einem verlorenen Spieltag.</p>
        </div>
      </section>

      <section className="shell travelFuture">
        <div className="sectionHeading"><span>Die nächsten Auswärtsfahrten</span></div>
        <div className="travelFeatureGrid">
          {futureTrips.map(trip => (
            <article key={trip.year} className={trip.type === 'next' ? 'nextTrip' : ''}>
              <div className="tripFlag">{trip.flag}</div>
              <span>{trip.year}</span>
              <h2>{trip.city}</h2>
              <p>{trip.status}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="shell summerSection">
        <div className="sectionHeading"><span>Sommer-IWF bei Henning</span></div>
        <div className="summerLead">
          <div className="summerIcon">☀️</div>
          <div>
            <p className="eyebrow">Die zweite Tradition</p>
            <h2>Vom Novembertrip in den Garten</h2>
            <p>Seit drei Jahren lädt Henning zusätzlich zur Sommer-IWF in seinen Garten. Weniger Flughafen, mehr Grill – der sportliche Ernst bleibt trotzdem derselbe.</p>
          </div>
        </div>
        <div className="summerYears">
          {summerIwf.map(event => (
            <div key={event.year}>
              <b>{event.year}</b>
              <span>{event.place}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="shell travelArchive">
        <div className="sectionHeading"><span>Die komplette Reisechronik</span></div>
        <div className="travelTimeline">
          {pastTrips.map(trip => (
            <article key={`${trip.year}-${trip.city}`}>
              <div className="timelineYear">{trip.year}</div>
              <div className="timelineFlag">{trip.flag}</div>
              <div className="timelineContent">
                <h3>{trip.city}</h3>
                <p>{trip.status}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
