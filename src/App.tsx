import { useState, lazy, Suspense } from 'react'
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

const AdminDashboard = lazy(() => import('./components/AdminDashboard'))

function HomePage() {
  const [introComplete, setIntroComplete] = useState(
    sessionStorage.getItem('diva_intro_played') === '1'
  )

  return (
    <>
      {!introComplete && <IntroReveal onComplete={() => setIntroComplete(true)} />}
      <div
        style={{ opacity: introComplete ? 1 : 0, transition: 'opacity 0.8s ease' }}
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
      </div>
    </>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/admin" element={<Suspense fallback={null}><AdminDashboard /></Suspense>} />
    </Routes>
  )
}
