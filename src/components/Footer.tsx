'use client'

import { motion } from 'framer-motion'
import { Heart, Mail, MessageCircle, Send, Smartphone, Zap, Shield, Globe } from 'lucide-react'
import Link from './Link'

export default function Footer() {
  const footerLinks = {
    product: [
      { label: 'Features', href: '#features' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Download', href: '#download' },
      { label: 'FAQ', href: '#faq' },
    ],
    company: [
      { label: 'About', href: '#' },
      { label: 'Contact', href: '#contact' },
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
    ],
    support: [
      { label: 'Help Center', href: '#' },
      { label: 'Documentation', href: '#' },
      { label: 'License', href: '#' },
      { label: 'Updates', href: '#' },
    ],
  }

  const socialLinks = [
    { icon: Mail, href: 'mailto:support@blueorbit.tech', label: 'Email' },
    { icon: MessageCircle, href: 'https://wa.me/963999123456', label: 'WhatsApp' },
    { icon: Send, href: 'https://t.me/QuickUssdDial', label: 'Telegram' },
  ]

  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          <motion.div className="lg:col-span-2" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Link to="/" className="inline-flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary-600 flex items-center justify-center">
                <Smartphone className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Quick USSD Dial</span>
            </Link>
            <p className="text-gray-600 text-sm max-w-sm leading-relaxed mb-6">
              The fastest and easiest way to transfer balance between MTN and Syriatel networks. Built by Blue Orbit Technologies.
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
            <h4 className="font-semibold text-gray-900 mb-4">Product</h4>
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
            <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
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

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
            <h4 className="font-semibold text-gray-900 mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              {footerLinks.support.map((link, i) => (
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
            © 2026 Blue Orbit Technologies. All rights reserved.
          </motion.p>
          <motion.p className="text-xs text-gray-500 flex items-center gap-1" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            Made with
            <Heart className="w-3 h-3 text-red-500 fill-red-500" />
            in Syria
          </motion.p>
        </div>
      </div>
    </footer>
  )
}