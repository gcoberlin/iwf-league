import { useEffect, useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Managers from './pages/Managers'
import Redaktion from './pages/Redaktion'
import Magazin from './pages/Magazin'
import HallOfFame from './pages/HallOfFame'
import Reisen from './pages/Reisen'

const routes = {
  home: Home,
  magazin: Magazin,
  manager: Managers,
  redaktion: Redaktion,
  hall: HallOfFame,
  reisen: Reisen,
}

export default function App() {
  const routeFromHash = () => window.location.hash.replace('#/', '') || 'home'
  const [route, setRoute] = useState(routeFromHash())

  useEffect(() => {
    const onHash = () => {
      setRoute(routeFromHash())
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  const Page = routes[route] || Home

  return (
    <>
      <Header active={route} />
      <Page />
      <Footer />
    </>
  )
}
