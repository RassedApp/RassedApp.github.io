import { motion } from 'framer-motion'
import { ArrowRight, Download, Smartphone, CheckCircle, Zap, Shield, Globe, BarChart3, FileText, Wifi, Sim, RotateCcw, Clock, Star, MessageCircle, Send, Mail, Menu, X, ChevronDown, ChevronUp } from 'lucide-react'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Screenshots from './components/Screenshots'
import Comparison from './components/Comparison'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import DownloadSection from './components/DownloadSection'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

const APK_DOWNLOAD_LINK = 'YOUR_APK_DOWNLOAD_LINK'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar apkLink={APK_DOWNLOAD_LINK} />
      <main>
        <Hero apkLink={APK_DOWNLOAD_LINK} />
        <Features />
        <HowItWorks />
        <Screenshots />
        <Comparison />
        <Pricing />
        <Testimonials />
        <FAQ />
        <DownloadSection apkLink={APK_DOWNLOAD_LINK} />
      </main>
      <Footer />
    </div>
  )
}

export default App