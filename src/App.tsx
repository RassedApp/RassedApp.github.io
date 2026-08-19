import { HashRouter, Routes, Route } from 'react-router-dom'
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
import { apkUrl } from './lib/media'

const FALLBACK_APK_LINK = 'YOUR_APK_DOWNLOAD_LINK'

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
  const apkLink = config.app.apkLink || apkUrl || FALLBACK_APK_LINK

  return (
    <HashRouter>
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/" element={<LandingPage apkLink={apkLink} />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
        </Routes>
      </div>
    </HashRouter>
  )
}

export default App
