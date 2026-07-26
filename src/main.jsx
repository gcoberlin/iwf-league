import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Link, useLocation } from 'react-router-dom'
import App from './App'
import ComunioMarket from './components/ComunioMarket'
import './styles.css'
import './comunio-market.css'

function Root() {
  const location = useLocation()

  if (location.pathname === '/comunio-markt') {
    return <ComunioMarket />
  }

  return (
    <>
      <App />
      <Link className="comunioMarketShortcut" to="/comunio-markt">Comunio-Markt</Link>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Root />
    </HashRouter>
  </React.StrictMode>
)
