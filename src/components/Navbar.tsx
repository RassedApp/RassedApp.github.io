'use client'

import { motion } from 'framer-motion'
import { Smartphone, Download, X, Menu } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './LanguageSwitcher'

interface NavbarProps {
  apkLink: string
}

export default function Navbar({ apkLink }: NavbarProps) {
  const { t } = useTranslation()
  const links = [
    { label: t('nav.features'), href: '#features' },
    { label: t('nav.howItWorks'), href: '#how-it-works' },
    { label: t('nav.screenshots'), href: '#screenshots' },
    { label: t('nav.pricing'), href: '#pricing' },
    { label: t('nav.faq'), href: '#faq' },
  ]
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-sm' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container-custom h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); setIsOpen(false); }}>
          <div className="w-8 h-8 rounded-lg bg-primary-600 flex items-center justify-center">
            <Smartphone className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-gray-900 hidden sm:inline">{t('nav.brand')}</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-gray-600 hover:text-primary-600 font-medium transition-colors"
              onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
            >
              {link.label}
            </a>
          ))}
          <LanguageSwitcher />
          <a href={apkLink} target="_blank" rel="noopener noreferrer">
            <button className="btn-primary">
              <Download className="w-4 h-4 me-2" />
              {t('nav.download')}
            </button>
          </a>
        </div>

        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={t('nav.toggleMenu')}
        >
          {isOpen ? <X className="w-6 h-6 text-gray-900" /> : <Menu className="w-6 h-6 text-gray-900" />}
        </button>
      </div>

      {isOpen && (
        <motion.div
          className="md:hidden border-t border-gray-100 bg-white"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container-custom py-4 space-y-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-gray-600 hover:text-primary-600 font-medium py-2 transition-colors"
                onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
              >
                {link.label}
              </a>
            ))}
            <div className="py-2">
              <LanguageSwitcher />
            </div>
            <a href={apkLink} target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>
              <button className="btn-primary w-full">
                <Download className="w-4 h-4 me-2" />
                {t('nav.downloadApk')}
              </button>
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}