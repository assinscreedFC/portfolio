import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import Hero from "../components/sections/Hero"
import HeroPro from "../components/sections/HeroPro"
import Services from "../components/sections/Services"
import Project from "../components/sections/Project"
import Stack from "../components/sections/Stack"
import Contact from "../components/sections/Contact"
import WhatIUse from "../components/sections/WhatIUse"
import { useVersion } from "../context/VersionContext"

function updateMeta(name: string, content: string, isProperty = false) {
  const attr = isProperty ? 'property' : 'name'
  let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, name)
    document.head.appendChild(el)
  }
  el.content = content
}

function Home() {
  const version = useVersion()
  const { i18n } = useTranslation()
  const lang = i18n.language

  const seo = version === 'pro'
    ? {
        title: lang === 'fr'
          ? 'SolidScale — Automatisation Python sur-mesure pour startups'
          : 'SolidScale — Custom Python Automation for Startups',
        description: lang === 'fr'
          ? 'Je remplace vos outils no-code limites par des scripts Python custom 10x plus rapides. Audit gratuit.'
          : 'I replace your limited no-code tools with custom Python scripts 10x faster. Free audit.',
      }
    : {
        title: lang === 'fr'
          ? 'Anis Hammouche — Developpeur Python & Ingenieur IA'
          : 'Anis Hammouche — Python Developer & AI Engineer',
        description: lang === 'fr'
          ? 'Portfolio de Anis Hammouche — projets Python, IA, scraping et automatisation.'
          : 'Anis Hammouche portfolio — Python, AI, scraping and automation projects.',
      }

  useEffect(() => {
    document.title = seo.title
    document.documentElement.lang = lang
    updateMeta('description', seo.description)
    updateMeta('og:title', seo.title, true)
    updateMeta('og:description', seo.description, true)
    updateMeta('twitter:title', seo.title)
    updateMeta('twitter:description', seo.description)
  }, [seo.title, seo.description, lang])

  return (
    <section className="flex flex-col items-center justify-center">
      {version === 'pro' ? <HeroPro /> : <Hero />}
      {version === 'pro' && <Services />}
      <Stack />
      <WhatIUse />
      <Project />
      <Contact />
    </section>
  )
}

export default Home
