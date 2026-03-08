import { BrowserRouter, Routes, Route, useLocation } from 'react-router'
import { useEffect } from 'react'
import { Layout } from './components/Layout'
import HomePage from './pages/HomePage'

const PAGE_TITLES: Record<string, string> = {
  '/': 'Home — Launchfire',
  '/about': 'About — Launchfire',
  '/contact': 'Contact — Launchfire',
}

function TitleUpdater() {
  const location = useLocation()
  useEffect(() => {
    document.title = PAGE_TITLES[location.pathname] ?? 'Launchfire'
  }, [location.pathname])
  return null
}

function AboutPage() {
  return <div style={{ padding: '2rem' }}>About</div>
}

function ContactPage() {
  return <div style={{ padding: '2rem' }}>Contact</div>
}

export default function App() {
  return (
    <BrowserRouter>
      <TitleUpdater />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
