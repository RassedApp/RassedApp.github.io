'use client'

import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Heart, Mail, MessageCircle, Smartphone, Facebook } from 'lucide-react'
import Link from './Link'
import { useConfig } from '../config/ConfigContext'

export default function Footer() {
  const { t } = useTranslation()
  const config = useConfig()
  const app = config.app

  const footerLinks = {
    product: [
      { label: t('Features'), href: '#features' },
      { label: t('Pricing'), href: '#pricing' },
      { label: t('Download'), href: '#download' },
      { label: t('FAQ'), href: '#faq' },
    ],
    company: [
      { label: t('About'), href: '#about' },
      { label: t('Contact'), href: '#contact' },
      { label: t('Privacy Policy'), href: '/privacy' },
    ],
  }

  const socialLinks = [
    { icon: Mail, href: `mailto:${app.email}`, label: t('Email') },
    { icon: MessageCircle, href: app.whatsapp, label: t('WhatsApp') },
    { icon: Facebook, href: 'https://www.facebook.com/RaseedApp', label: t('Facebook') },
  ]

  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <motion.div className="lg:col-span-2" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Link to="/" className="inline-flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary-600 flex items-center justify-center">
                <Smartphone className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">{t('nav.brand')}</span>
            </Link>
            <p className="text-gray-600 text-sm max-w-sm leading-relaxed mb-6">
              {t('footer.description', { company: app.company })}
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center hover:bg-primary-50 hover:border-primary-200 transition-colors"
                  aria-label={social.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
                >
                  <social.icon className="w-4 h-4 text-primary-600" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <h4 className="font-semibold text-gray-900 mb-4">{t('footer.product')}</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              {footerLinks.product.map((link, i) => (
                <li key={i}>
                  <Link to={link.href} className="hover:text-primary-600 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <h4 className="font-semibold text-gray-900 mb-4">{t('footer.company')}</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              {footerLinks.company.map((link, i) => (
                <li key={i}>
                  <Link to={link.href} className="hover:text-primary-600 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <motion.p className="text-xs text-gray-500" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            {t('footer.rights', { year: app.copyrightYear, company: app.company })}
          </motion.p>
          <motion.p className="text-xs text-gray-500 flex items-center gap-1" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            {t('footer.madeWith')}
            <Heart className="w-3 h-3 text-red-500 fill-red-500" />
            {t('footer.inSyria')}
          </motion.p>
        </div>
      </div>
    </footer>
  )
}