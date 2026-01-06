
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import OurProject from './pages/OurProject.jsx'
import Gallery from './pages/Gallery.jsx'
import Contact from './pages/Contact.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'
import TermsOfService from './pages/TermsOfService.jsx'
import PropertyDetails from './pages/PropertyDetails.jsx'
import TestimonialsPage from './pages/TestimonialsPage.jsx'
import Loader from './components/Loader.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import WhatsAppButton from './components/WhatsAppButton.jsx'
import ScrollToTopButton from './components/ScrollToTopButton.jsx'
import './App.css'

function App() {
  const [loading, setLoading] = useState(true)
  const [initialLoad, setInitialLoad] = useState(true)

  useEffect(() => {
    // Only show loader on initial app load
    if (initialLoad) {
      const timer = setTimeout(() => {
        setLoading(false)
        setInitialLoad(false)
      }, 2000)

      return () => clearTimeout(timer)
    }
  }, [])

  if (loading && initialLoad) {
    return <Loader />
  }

  return (
    <Router>
      <ScrollToTop />
      <WhatsAppButton />
      <ScrollToTopButton />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<OurProject />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
      </Routes>
    </Router>
  )
}

export default App
