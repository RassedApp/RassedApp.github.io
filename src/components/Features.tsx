'use client'

import { motion } from 'framer-motion'
import { Smartphone, Wifi, Cpu, RotateCcw, Shield, Zap, BarChart3, FileText, Globe, Cloud, LayoutGrid, Clock, CheckCircle } from 'lucide-react'

const features = [
  {
    icon: Smartphone,
    title: 'One Click Transfer',
    description: 'Transfer balance with a single tap. Fast, simple, and reliable.',
  },
  {
    icon: Cpu,
    title: 'Syriatel Support',
    description: 'Full support for Syriatel network balance transfers.',
  },
  {
    icon: Wifi,
    title: 'MTN Support',
    description: 'Seamless balance transfer for MTN network users.',
  },
  {
    icon: RotateCcw,
    title: 'Smart Operator Detection',
    description: 'Automatically detects the operator and optimizes the transfer.',
  },
  {
    icon: Cpu,
    title: 'Dual SIM Support',
    description: 'Works perfectly with dual SIM devices.',
  },
  {
    icon: Smartphone,
    title: 'Automatic SIM Selection',
    description: 'Intelligently selects the right SIM for each transfer.',
  },
  {
    icon: CheckCircle,
    title: 'Balance Inquiry',
    description: 'Check your balance instantly with USSD codes.',
  },
  {
    icon: Wifi,
    title: 'Offline Operation',
    description: 'Works even without internet for balance inquiries.',
  },
  {
    icon: FileText,
    title: 'Detailed Reports',
    description: 'Comprehensive transfer history and transaction reports.',
  },
  {
    icon: BarChart3,
    title: 'Statistics Dashboard',
    description: 'Track your transfer activity with beautiful statistics.',
  },
  {
    icon: Shield,
    title: 'Secure License System',
    description: 'Enterprise-grade security for your license and data.',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Optimized for speed with minimal latency.',
  },
  {
    icon: Globe,
    title: 'Arabic & English',
    description: 'Full bilingual support for Arabic and English.',
  },
  {
    icon: LayoutGrid,
    title: 'Modern UI/UX',
    description: 'Clean, intuitive, and beautiful interface design.',
  },
  {
    icon: Cloud,
    title: 'Auto Backup',
    description: 'Your data is automatically backed up and safe.',
  },
  {
    icon: Clock,
    title: '24/7 Availability',
    description: 'Transfer balance anytime, anywhere.',
  },
]

export default function Features() {
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
          <h2 className="section-title">Powerful Features</h2>
          <p className="section-subtitle mx-auto">
            Everything you need for quick, secure, and reliable balance transfers
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