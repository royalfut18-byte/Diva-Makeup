import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
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
      <div className={introComplete ? 'opacity-100' : 'opacity-0'} style={{ transition: 'opacity 0.5s ease' }}>
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
        {/* Spacer for mobile CTA bar */}
        <div className="h-20 lg:hidden" />
      </div>
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
