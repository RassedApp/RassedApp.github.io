'use client'

import { motion } from 'framer-motion'
import { Download, CheckCircle, Rocket } from 'lucide-react'
import Link from './Link'

const steps = [
  {
    icon: Download,
    number: '01',
    title: 'Download',
    description: 'Download Quick USSD Dial from the website or get the APK directly.',
  },
  {
    icon: CheckCircle,
    number: '02',
    title: 'Activate',
    description: 'Purchase a license and activate your app. Simple and secure.',
  },
  {
    icon: Rocket,
    number: '03',
    title: 'Start Using',
    description: 'Start transferring balance instantly with just one tap.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 sm:py-24 lg:py-32 bg-gray-50">
      <div className="container-custom">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle mx-auto">
            Get started in three simple steps
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary-200 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                className="relative text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
              >
                <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary-50 border-2 border-primary-100 mb-6 mx-auto">
                  <step.icon className="w-8 h-8 text-primary-600" />
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary-600 text-white text-sm font-bold flex items-center justify-center">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 max-w-xs mx-auto">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Link to="#pricing" className="btn-primary">
            Get Started Now
          </Link>
        </motion.div>
      </div>
    </section>
  )
}