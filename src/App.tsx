import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar, {
    NavBody,
    NavItems,
    MobileNav,
    MobileNavHeader,
    MobileNavMenu,
    MobileNavToggle,
    NavbarLogo
} from './components/sections/Navbar'
import Switch from './components/reusable/Switch'
import Footer from './components/sections/Footer'
import Home from './pages/Home'
import { useTranslation } from 'react-i18next'
import { VersionProvider, useVersion } from './context/VersionContext'


function AppContent() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const version = useVersion();

  useEffect(() => {
    if (version !== 'pro') return
    let timerId: ReturnType<typeof setTimeout>
    const tryInit = () => {
      if (!window.Calendly) return
      window.Calendly.initBadgeWidget({
        url: 'https://calendly.com/anishammouche50',
        text: 'Schedule time with me',
        color: '#0069ff',
        textColor: '#ffffff',
        branding: false
      })
    }
    // Defer to avoid DOM manipulation during React render
    timerId = setTimeout(tryInit, 500)
    return () => {
      clearTimeout(timerId)
      // Defer cleanup too to avoid unmount race condition
      setTimeout(() => {
        document.querySelector('.calendly-badge-widget')?.remove()
        document.querySelector('.calendly-overlay')?.remove()
      }, 0)
    }
  }, [version])

  const navItems = [
    { name: t("navbar.about"), link: "#about" },
    ...(version === 'pro' ? [{ name: t("navbar.services") || "Services", link: "#services" }] : []),
    { name: t("navbar.projects"), link: "#projects" },
    { name: t("navbar.contact"), link: "#contact" }
  ];

  return (
      <div className="min-h-screen flex flex-col bg-surface-base">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <Switch />
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isOpen}
              onClick={() => setIsOpen(!isOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isOpen}
          >
            {navItems.map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                className="text-neutral-600 dark:text-neutral-300"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="mt-4 flex justify-center">
              <Switch />
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
        <main className="grow">
          <Home/>
        </main>
        <Footer />
      </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/etudiant" element={
        <VersionProvider><AppContent /></VersionProvider>
      } />
      <Route path="/*" element={
        <VersionProvider><AppContent /></VersionProvider>
      } />
    </Routes>
  )
}

export default App
