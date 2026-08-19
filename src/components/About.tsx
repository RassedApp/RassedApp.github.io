'use client'

import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Shield, Smartphone, Zap, Users, Globe, Lock } from 'lucide-react'

export default function About() {
  const { t } = useTranslation()

  const features = [
    {
      icon: Smartphone,
      title: 'about.items.app.title',
      desc: 'about.items.app.desc'
    },
    {
      icon: Zap,
      title: 'about.items.speed.title',
      desc: 'about.items.speed.desc'
    },
    {
      icon: Shield,
      title: 'about.items.security.title',
      desc: 'about.items.security.desc'
    },
    {
      icon: Users,
      title: 'about.items.team.title',
      desc: 'about.items.team.desc'
    },
    {
      icon: Globe,
      title: 'about.items.syria.title',
      desc: 'about.items.syria.desc'
    },
    {
      icon: Lock,
      title: 'about.items.offline.title',
      desc: 'about.items.offline.desc'
    }
  ]

  return (
    <section id="about" className="py-20 bg-white" aria-labelledby="about-heading">
      <div className="container-custom">
        <motion.div
          className="max-w-4xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 id="about-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('about.title')}
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            {t('about.subtitle')}
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {features.map((feature, i) => (
            <motion.div
              key={i}
              className="group p-6 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.1 }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center mb-4 group-hover:bg-primary-600 transition-colors">
                <feature.icon className="w-6 h-6 text-primary-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {t(feature.title)}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {t(feature.desc)}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-primary-600 via-emerald-500 to-cyan-500"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-4">
            {t('about.developer.title')}
          </h3>
          <p className="text-white/90 text-center max-w-2xl mx-auto leading-relaxed">
            {t('about.developer.desc')}
          </p>
        </motion.div>
      </div>
    </section>
  )
}