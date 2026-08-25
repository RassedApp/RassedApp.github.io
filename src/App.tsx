import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Screenshots from './components/Screenshots'
import Comparison from './components/Comparison'
import Pricing from './components/Pricing'
import WhyChoose from './components/WhyChoose'
import BetterDay from './components/BetterDay'
import TrustSection from './components/TrustSection'
import FAQ from './components/FAQ'
import DownloadSection from './components/DownloadSection'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import About from './components/About'
import PrivacyPolicy from './components/PrivacyPolicy'
import { useConfig } from './config/ConfigContext'
import { fetchLatestReleaseApk } from './lib/media'

const FALLBACK_APK_LINK = 'https://github.com/mobi1298-del/ussd/releases/latest'

function LandingPage({ apkLink }: { apkLink: string }) {
  return (
    <>
      <Navbar apkLink={apkLink} />
      <main>
        <Hero apkLink={apkLink} />
        <About />
        <Features />
        <HowItWorks />
        <Screenshots />
        <Comparison />
        <Pricing />
        <WhyChoose />
        <BetterDay />
        <TrustSection />
        <FAQ />
        <DownloadSection apkLink={apkLink} />
      </main>
      <Footer />
    </>
  )
}

function App() {
  const config = useConfig()
  const [apkLink, setApkLink] = useState(FALLBACK_APK_LINK)

  useEffect(() => {
    if (config.app.apkLink) {
      setApkLink(config.app.apkLink)
      return
    }
    fetchLatestReleaseApk().then((url) => {
      if (url) setApkLink(url)
    })
  }, [config])

  return (
    <BrowserRouter basename="/">
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/" element={<LandingPage apkLink={apkLink} />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
