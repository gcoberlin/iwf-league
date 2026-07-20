import { useState } from 'react'

const nav = [
  ['home', 'Home'],
  ['magazin', 'Magazin'],
  ['manager', 'Manager'],
  ['redaktion', 'Redaktion'],
  ['hall', 'Hall of Fame'],
  ['reisen', 'IWF-Reisen'],
]

export default function Header({ active }) {
  const [open, setOpen] = useState(false)

  return (
    <header>
      <div className="ticker">
        <div className="shell tickerInner">
          <b>TRANSFER-TICKER</b>
          <span>Die Liga ist eröffnet.</span>
          <span>Uwe gilt offiziell als online.</span>
          <span>Jan wartet auf den ersten Bayern-Spieler.</span>
        </div>
      </div>

      <div className="shell masthead">
        <a className="brand" href="#/home" onClick={() => setOpen(false)}>
          <strong>ANSTOSS</strong>
          <small>DAS MAGAZIN DER IWF LEAGUE</small>
        </a>

        <button className="menu" onClick={() => setOpen(!open)} aria-label="Menü öffnen">
          {open ? '×' : '☰'}
        </button>

        <nav className={open ? 'open' : ''}>
          {nav.map(([key, label]) => (
            <a
              key={key}
              href={`#/${key}`}
              className={active === key ? 'active' : ''}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
