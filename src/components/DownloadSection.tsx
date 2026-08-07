'use client'

import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Download, Smartphone, ArrowRight, Check } from 'lucide-react'
import { useConfig } from '../config/ConfigContext'

interface DownloadSectionProps {
  apkLink: string
}

export default function DownloadSection({ apkLink }: DownloadSectionProps) {
  const { t } = useTranslation()
  const config = useConfig()
  const features = config.download.features
  return (
    <section id="download" className="py-20 sm:py-24 lg:py-32 relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-emerald-50">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-100/50 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="relative z-10 container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-20 h-20 rounded-2xl bg-primary-100 flex items-center justify-center mx-auto mb-8">
            <Smartphone className="w-10 h-10 text-primary-600" />
          </div>

          <h2 className="section-title mb-4">
            {t('download.title')}
          </h2>
          <p className="section-subtitle mx-auto mb-10">
            {t('download.subtitle')}
          </p>

          <a href={apkLink} target="_blank" rel="noopener noreferrer">
            <button className="btn-primary group">
              <Download className="w-6 h-6 me-3" />
              {t('download.downloadApk')}
              <ArrowRight className="w-6 h-6 ms-3 rtl:rotate-180 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
            </button>
          </a>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-2 text-sm text-gray-600 justify-center"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.5 + i * 0.05 }}
              >
                <Check className="w-4 h-4 text-primary-600 shrink-0" />
                <span>{t(feature)}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}