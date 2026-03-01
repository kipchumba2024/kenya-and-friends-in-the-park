import { useEffect, useMemo, useState } from 'react'
import { eventDetails } from '../components/eventDetails'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import { menuItems, pageContent } from '../components/siteData'
import { ContactPage } from '../pages/ContactPage'
import { EventDetailPage } from '../pages/EventDetailPage'
import { EventsPage } from '../pages/EventsPage'
import { HomePage } from '../pages/HomePage'
import { InnerPage } from '../pages/InnerPage'
import { ParkingPage } from '../pages/ParkingPage'
import { PhotoGalleryPage } from '../pages/PhotoGalleryPage'
import { RulesPage } from '../pages/RulesPage'
import { TravelPage } from '../pages/TravelPage'

function normalizePath(path: string) {
  if (path === '/') {
    return '/'
  }

  return path.replace(/\/+$/, '')
}

export function Layout() {
  const [currentPath, setCurrentPath] = useState<string>(normalizePath(window.location.pathname))
  const [isDark, setIsDark] = useState<boolean>(() => {
    const storedTheme = window.localStorage.getItem('theme')

    if (storedTheme) {
      return storedTheme === 'dark'
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  const validPaths = useMemo(
    () => [
      ...menuItems.map((item) => item.path),
      ...menuItems.flatMap((item) => item.children?.map((child) => child.path) ?? []),
      ...Object.keys(pageContent),
      ...Object.keys(eventDetails),
    ],
    [],
  )

  useEffect(() => {
    const onPopState = () => {
      setCurrentPath(normalizePath(window.location.pathname))
    }

    window.addEventListener('popstate', onPopState)

    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  useEffect(() => {
    if (!validPaths.includes(currentPath)) {
      setCurrentPath('/')
      window.history.replaceState({}, '', '/')
    }
  }, [currentPath, validPaths])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
    document.body.classList.toggle('dark', isDark)
    window.localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])

  const navigateTo = (path: string) => {
    if (path === currentPath) {
      return
    }

    window.history.pushState({}, '', path)
    setCurrentPath(path)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const renderPage = () => {
    switch (currentPath) {
      case '/':
        return <HomePage />
      case '/parking':
        return <ParkingPage />
      case '/contact-us':
        return <ContactPage />
      case '/travel-and-accommodation-2024':
        return <TravelPage />
      case '/photo-gallery':
        return <PhotoGalleryPage />
      case '/rules-and-regulations':
        return <RulesPage />
      case '/events':
        return <EventsPage />
      default:
        if (eventDetails[currentPath]) {
          return <EventDetailPage currentPath={currentPath} />
        }

        return <InnerPage currentPath={currentPath} />
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors dark:bg-slate-950 dark:text-slate-100">
      <Navbar
        menuItems={menuItems}
        currentPath={currentPath}
        onNavigate={navigateTo}
        isDark={isDark}
        onToggleTheme={() => setIsDark((prev) => !prev)}
      />
      <main className="min-h-[80vh]">{renderPage()}</main>
      <Footer
        menuItems={menuItems}
        onNavigate={navigateTo}
        isDark={isDark}
        onToggleTheme={() => setIsDark((prev) => !prev)}
      />
    </div>
  )
}
