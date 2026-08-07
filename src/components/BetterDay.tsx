'use client'

import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Store } from 'lucide-react'

export default function BetterDay() {
  const { t } = useTranslation()

  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-white">
      <div className="container-custom">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-20 h-20 rounded-2xl bg-primary-100 flex items-center justify-center mx-auto mb-8">
            <Store className="w-10 h-10 text-primary-600" />
          </div>
          <h2 className="section-title mb-8">{t('betterDay.title')}</h2>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-6">
            {t('betterDay.p1')}
          </p>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8">
            {t('betterDay.p2')}
          </p>
          <motion.p
            className="text-xl sm:text-2xl font-bold text-primary-600"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {t('betterDay.closing')}
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
