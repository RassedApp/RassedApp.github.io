'use client'

import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Smartphone, Wifi, Cpu, RotateCcw, Shield, Zap, BarChart3, FileText, Globe, Cloud, LayoutGrid, Clock, CheckCircle } from 'lucide-react'

const featureIcons = [
  Smartphone, Cpu, Wifi, RotateCcw, Cpu, Smartphone, CheckCircle, Wifi,
  FileText, BarChart3, Shield, Zap, Globe, LayoutGrid, Cloud, Clock,
]

interface FeatureItem {
  title: string
  description: string
}

export default function Features() {
  const { t } = useTranslation()
  const items = t('features.items', { returnObjects: true }) as FeatureItem[]
  const features = items.map((item, i) => ({
    icon: featureIcons[i] ?? Smartphone,
    title: item.title,
    description: item.description,
  }))
  return (
    <section id="features" className="py-20 sm:py-24 lg:py-32 bg-white">
      <div className="container-custom">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">{t('features.title')}</h2>
          <p className="section-subtitle mx-auto">
            {t('features.subtitle')}
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.05 },
            },
          }}
        >
          {features.map((feature, i) => (
            <motion.div
              key={i}
              className="card p-6 group"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4 }}
              whileHover={{ y: -4 }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center mb-4 group-hover:bg-primary-100 transition-colors">
                <feature.icon className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}