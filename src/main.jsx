import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import AppMagazine from './AppMagazine'
import './styles.css'
import './magazine-home.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <AppMagazine />
    </HashRouter>
  </React.StrictMode>,
)