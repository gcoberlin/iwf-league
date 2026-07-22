import { summerIwf, trips } from '../data/trips'

const tripMedia = {
  Bangkok: {
    code: 'TH', country: 'Thailand', image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1600&q=82',
    blurb: 'Die große Fernreise der IWF ist beschlossen. Bangkok wartet mit Lichtern, Hitze und dem maximalen Kontrastprogramm.',
  },
  Rom: {
    code: 'IT', country: 'Italien', image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1600&q=82',
    blurb: 'Vom 26. bis 29. November 2026 zieht die Liga nach Rom. Vier Tage zwischen Fußballromantik, Pasta und ewiger Stadt.',
  },
  Lissabon: {
    code: 'PT', country: 'Portugal', image: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1600&q=82',
    blurb: 'Sonne über den Dächern, lange Wege und ein angeschlagener Wassili. Ohne den Reiseorganisator wurde die IWF spürbar kopfloser.',
  },
  Madrid: {
    code: 'ES', country: 'Spanien', image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=1600&q=82',
    blurb: 'Jamón, reichlich Bier und der Besuch im Bernabéu. Seit dieser Reise gilt José in der IWF offiziell als enger Freund von Vini.',
  },
  Athen: {
    code: 'GR', country: 'Griechenland', image: 'https://images.unsplash.com/photo-1555993539-1732b0258235?auto=format&fit=crop&w=1600&q=82',
    blurb: 'Antike Kulisse, spätes Essen und eine Reise, die den kulturellen Anspruch der IWF zumindest auf dem Papier bestätigte.',
  },
  Mallorca: {
    code: 'ES', country: 'Spanien', image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1600&q=82',
    blurb: 'Inselmodus statt Großstadt. Eine Ausgabe zwischen Mittelmeer, langen Nächten und der üblichen sportlichen Aufarbeitung.',
  },
  Bratislava: {
    code: 'SK', country: 'Slowakei', image: 'https://images.unsplash.com/photo-1564399579883-451a5d44ec08?auto=format&fit=crop&w=1600&q=82',
    blurb: 'Die Reise, auf der eine Legende geboren wurde: Bratislava ist untrennbar mit der Entstehung des Pink-Panther-Mythos verbunden.',
  },
  Düsseldorf: {
    code: 'DE', country: 'Deutschland', image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1600&q=82',
    blurb: 'Eine deutsche Auswärtsfahrt mit kurzen Wegen, langen Abenden und genügend Raum für interne Tabellenanalysen.',
  },
  Prag: {
    code: 'CZ', country: 'Tschechien', image: 'https://images.unsplash.com/photo-1541849546-216549ae216d?auto=format&fit=crop&w=1600&q=82',
    blurb: 'Historische Gassen, böhmische Abende und eine jener Reisen, über die jedes Jahr ein Detail mehr erzählt wird.',
  },
  Köln: {
    code: 'DE', country: 'Deutschland', image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1600&q=82',
    blurb: 'Domstadt, Kölsch und eine kompakte IWF-Ausgabe mit Heimspielgefühl für Teile der Reisegruppe.',
  },
  München: {
    code: 'DE', country: 'Deutschland', image: 'https://images.unsplash.com/photo-1595867818082-083862f3d630?auto=format&fit=crop&w=1600&q=82',
    blurb: 'Frühe Reisejahre, süddeutsche Kulisse und bereits damals eine Gruppe, die Niederlagen lieber diskutierte als akzeptierte.',
  },
  Berlin: {
    code: 'DE', country: 'Deutschland', image: 'https://images.unsplash.com/photo-1560969184-10fe8719e047?auto=format&fit=crop&w=1600&q=82',
    blurb: 'Hier begann die dokumentierte Reisegeschichte der IWF. Berlin war Basislager, Testfeld und wiederkehrender Klassiker.',
  },
}

function getMedia(trip) {
  if (trip.city.includes('Berlin')) return tripMedia.Berlin
  if (trip.city.includes('Mallorca')) return tripMedia.Mallorca
  if (trip.city.includes('Köln')) return tripMedia.Köln
  if (trip.city.includes('Hamburg')) return tripMedia.Berlin
  if (trip.city.includes('Hustädte')) return { ...tripMedia.Berlin, code: 'DE', country: 'Deutschland', blurb: 'Die IWF blieb näher an der Heimat – der Ausnahmezustand fiel deshalb allerdings nicht kleiner aus.' }
  return tripMedia[trip.city] || tripMedia.Berlin
}

function TripCard({ trip, featured = false }) {
  const media = getMedia(trip)
  return (
    <article className={`journeyCard ${featured ? 'journeyCardFeatured' : ''}`}>
      <div className="journeyPhoto" style={{ backgroundImage: `url(${media.image})` }}>
        <div className="journeyPhotoShade" />
        <div className="journeyStamp">
          <span>{media.code}</span>
          <b>{media.country}</b>
        </div>
        <div className="journeyYear">{trip.year}</div>
        <div className="journeyTitle">
          <p>{trip.type === 'next' ? 'Nächste Reise' : trip.type === 'future' ? 'Fernziel' : 'IWF on Tour'}</p>
          <h2>{trip.city}</h2>
        </div>
      </div>
      <div className="journeyCopy">
        <p>{media.blurb}</p>
        <div className="journeyMeta">
          <span>{trip.status}</span>
          <b>Reisebericht →</b>
        </div>
      </div>
    </article>
  )
}

export default function Reisen() {
  const futureTrips = trips.filter(trip => trip.type === 'future' || trip.type === 'next')
  const pastTrips = trips.filter(trip => trip.type === 'past')
  const highlightedPast = pastTrips.slice(0, 9)
  const archiveTrips = pastTrips.slice(9)

  return (
    <main className="journeysPage">
      <section className="shell journeysHeader">
        <p className="eyebrow">Seit 2004 unterwegs</p>
        <div>
          <h1>Die IWF-Reisen</h1>
          <p>Vier Tage Stadt, Kultur, Bier und Geschichten, die mit jedem Jahr ein kleines bisschen größer werden.</p>
        </div>
      </section>

      <section className="shell journeysLeadGrid">
        {futureTrips.map(trip => <TripCard key={trip.year} trip={trip} featured />)}
      </section>

      <section className="shell journeysSection">
        <div className="journeysSectionHead">
          <span />
          <div>
            <p className="eyebrow">Die großen Auswärtsfahrten</p>
            <h2>Reisechronik</h2>
          </div>
          <p>Stadt für Stadt, Jahr für Jahr: die jüngere Geschichte der IWF als visuelles Reisemagazin.</p>
        </div>
        <div className="journeysGrid">
          {highlightedPast.map(trip => <TripCard key={`${trip.year}-${trip.city}`} trip={trip} />)}
        </div>
      </section>

      <section className="shell summerJourney">
        <div className="summerJourneyVisual">
          <span>DE</span>
          <h2>Sommer-IWF</h2>
          <p>Hennings Garten · Grill statt Gate</p>
        </div>
        <div className="summerJourneyCopy">
          <p className="eyebrow">Die zweite Tradition</p>
          <h2>Wenn die Liga in den Garten zieht</h2>
          <p>Seit drei Jahren lädt Henning zusätzlich zur Sommer-IWF. Weniger Flughafen, mehr Grill – der sportliche Ernst bleibt derselbe.</p>
          <div className="summerJourneyYears">
            {summerIwf.map(event => <span key={event.year}><b>{event.year}</b>{event.place}</span>)}
          </div>
        </div>
      </section>

      <section className="shell journeysArchive">
        <div className="journeysSectionHead compact">
          <span />
          <div><p className="eyebrow">Seit 2004</p><h2>Das komplette Archiv</h2></div>
        </div>
        <div className="journeysArchiveList">
          {archiveTrips.map(trip => {
            const media = getMedia(trip)
            return <article key={`${trip.year}-${trip.city}`}>
              <strong>{trip.year}</strong><span>{media.code}</span><h3>{trip.city}</h3><p>{trip.status}</p>
            </article>
          })}
        </div>
      </section>
    </main>
  )
}
