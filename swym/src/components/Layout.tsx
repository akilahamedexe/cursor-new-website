import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import BackgroundFX from './BackgroundFX'
import Footer from './Footer'
import Header from './Header'

export default function Layout() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [location.pathname])

  return (
    <div className="min-h-dvh">
      <BackgroundFX />
      <Header />
      <main id="content" className="min-h-[calc(100dvh-4rem)]">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

