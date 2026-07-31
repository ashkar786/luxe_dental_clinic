import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { Services } from './components/sections/Services'
import { Doctors } from './components/sections/Doctors'
import { WhyChooseUs } from './components/sections/WhyChooseUs'
import { Reviews } from './components/sections/Reviews'
import { BeforeAfter } from './components/sections/BeforeAfter'
import { FAQ } from './components/sections/FAQ'
import { Contact } from './components/sections/Contact'
import { MapSection } from './components/sections/MapSection'
import { FloatingWhatsApp } from './components/ui/FloatingWhatsApp'
import { BackToTop } from './components/ui/BackToTop'
import { Loader } from './components/ui/Loader'

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1400)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence>{loading ? <Loader key="loader" /> : null}</AnimatePresence>

      <div className={loading ? 'overflow-hidden h-screen' : ''}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[110] focus:rounded-xl focus:bg-white focus:px-4 focus:py-2 focus:text-secondary"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main">
          <Hero />
          <About />
          <Services />
          <Doctors />
          <WhyChooseUs />
          <Reviews />
          <BeforeAfter />
          <FAQ />
          <Contact />
          <MapSection />
        </main>
        <Footer />
        <FloatingWhatsApp />
        <BackToTop />
      </div>
    </>
  )
}
