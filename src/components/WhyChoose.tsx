'use client'

import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Zap, Timer, ShieldAlert, Search, FileText, Smartphone, Wifi, Languages } from 'lucide-react'

const benefitIcons = [Zap, Timer, ShieldAlert, Search, FileText, Smartphone, Wifi, Languages]

interface BenefitItem {
  title: string
  description: string
}

export default function WhyChoose() {
  const { t } = useTranslation()
  const items = t('whyChoose.items', { returnObjects: true }) as BenefitItem[]

  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-gray-50">
      <div className="container-custom">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">{t('whyChoose.title')}</h2>
          <p className="section-subtitle mx-auto">
            {t('whyChoose.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => {
            const Icon = benefitIcons[i] ?? Zap
            return (
              <motion.div
                key={i}
                className="card p-6 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ y: -4 }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center mb-4 group-hover:bg-primary-100 transition-colors">
                  <Icon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
