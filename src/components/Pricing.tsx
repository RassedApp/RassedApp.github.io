'use client'

import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Check } from 'lucide-react'
import { useConfig } from '../config/ConfigContext'

export default function Pricing() {
  const { t } = useTranslation()
  const config = useConfig()
  const pricing = config.pricing.plans
  return (
    <section id="pricing" className="py-20 sm:py-24 lg:py-32 bg-white">
      <div className="container-custom">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">{t('pricing.title')}</h2>
          <p className="section-subtitle mx-auto">
            {t('pricing.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricing.map((plan, i) => (
            <motion.div
              key={i}
              className={`relative p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1 ${
                plan.popular
                  ? 'border-2 border-primary-500 bg-primary-50 shadow-xl shadow-primary-500/10'
                  : plan.bestValue
                  ? 'border-2 border-emerald-500 bg-emerald-50 shadow-xl shadow-emerald-500/10'
                  : 'border border-gray-200 bg-white hover:shadow-lg'
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary-600 text-white text-sm font-semibold">
                  {t('pricing.mostPopular')}
                </div>
              )}
              {plan.bestValue && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-emerald-600 text-white text-sm font-semibold">
                  {t('pricing.bestValue')}
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {t(plan.name)}
                </h3>
                {plan.description && (
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">
                    {t(plan.description)}
                  </p>
                )}
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl sm:text-5xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  <span className="text-gray-500 self-end mb-1">
                    {plan.currency}
                  </span>
                </div>
                <p className="text-sm text-gray-500 mt-1">
                  {t('pricing.per')} {t(plan.period)}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm text-gray-600">
                    <Check className="w-4 h-4 text-primary-600 shrink-0" />
                    <span>{t(feature)}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-xl text-base font-semibold transition-all ${
                  plan.popular || plan.bestValue
                    ? 'bg-primary-600 text-white hover:bg-primary-700 shadow-lg shadow-primary-500/25'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                {plan.popular ? t('pricing.getStarted') : t('pricing.choosePlan')}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}