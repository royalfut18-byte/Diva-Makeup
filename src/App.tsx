import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { motion } from 'framer-motion'
import IntroReveal from './components/IntroReveal'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustStrip from './components/TrustStrip'
import Services from './components/Services'
import BridalFeature from './components/BridalFeature'
import Gallery from './components/Gallery'
import About from './components/About'
import Reviews from './components/Reviews'
import BookingForm from './components/BookingForm'
import Contact from './components/Contact'
import Footer from './components/Footer'
import MobileCTA from './components/MobileCTA'
import AdminDashboard from './components/AdminDashboard'

function HomePage() {
  const [introComplete, setIntroComplete] = useState(
    sessionStorage.getItem('diva_intro_played') === '1'
  )

  return (
    <>
      {!introComplete && <IntroReveal onComplete={() => setIntroComplete(true)} />}
      <motion.div
        initial={introComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        animate={introComplete ? { opacity: 1, y: 0 } : undefined}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={introComplete ? '' : 'pointer-events-none'}
      >
        <Navbar />
        <main>
          <Hero />
          <TrustStrip />
          <Services />
          <BridalFeature />
          <Gallery />
          <About />
          <Reviews />
          <BookingForm />
          <Contact />
        </main>
        <Footer />
        <MobileCTA />
        <div className="h-20 lg:hidden" />
      </motion.div>
    </>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/admin" element={<AdminDashboard />} />
    </Routes>
  )
}
