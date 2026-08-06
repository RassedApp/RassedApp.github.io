'use client'

import { motion } from 'framer-motion'
import { Zap, Shield, CheckCircle, Clock, Globe, BarChart3, XCircle } from 'lucide-react'

const comparisonItems = [
  { label: 'Transfer Speed', manual: '5-15 minutes', app: 'Under 10 seconds', icon: Zap, winner: 'app' },
  { label: 'Ease of Use', manual: 'Complex USSD codes', app: 'One tap transfer', icon: Shield, winner: 'app' },
  { label: 'Reliability', manual: 'Often fails', app: '99.9% success rate', icon: Shield, winner: 'app' },
  { label: 'Offline Support', manual: 'No', app: 'Yes (balance check)', icon: Globe, winner: 'app' },
  { label: 'Transaction History', manual: 'No', app: 'Full reports', icon: BarChart3, winner: 'app' },
  { label: 'Languages', manual: 'Arabic only', app: 'Arabic & English', icon: Globe, winner: 'app' },
  { label: 'Dual SIM', manual: 'Manual selection', app: 'Auto selection', icon: Zap, winner: 'app' },
  { label: 'Support', manual: 'None', app: '24/7 priority', icon: Shield, winner: 'app' },
]

const manualCons = [
  'Memorize complex USSD codes for each network',
  'Manual SIM switching on dual SIM devices',
  'No transaction history or reports',
  'Frequent failures and retries needed',
  'No customer support',
  'Time-consuming process',
]

export default function Comparison() {
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
          <h2 className="section-title">Why Quick USSD Dial?</h2>
          <p className="section-subtitle mx-auto">
            Stop wasting time with manual transfers. Switch to the smarter way.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            className="p-8 rounded-2xl bg-white border border-gray-200 shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center">
                <XCircle className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Manual Transfer</h3>
            </div>
            <ul className="space-y-4">
              {manualCons.map((con, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-3 text-gray-600"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                >
                  <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <span>{con}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="p-8 rounded-2xl bg-gradient-to-br from-primary-600 to-emerald-600 text-white shadow-xl shadow-primary-500/25"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold">Quick USSD Dial</h3>
            </div>
            <ul className="space-y-4">
              {comparisonItems.map((item, i) => (
                <motion.li
                  key={i}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                >
                  <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                    <item.icon className="w-4 h-4" />
                  </div>
                  <span>{item.app}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full max-w-5xl mx-auto">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-4 px-4 text-gray-500 font-medium">Feature</th>
                <th className="text-center py-4 px-4 text-gray-500 font-medium">Manual Transfer</th>
                <th className="text-center py-4 px-4 text-primary-600 font-medium">Quick USSD Dial</th>
              </tr>
            </thead>
            <tbody>
              {comparisonItems.map((item, i) => (
                <motion.tr
                  key={i}
                  className="border-b border-gray-100 hover:bg-gray-50"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <td className="py-4 px-4 font-medium flex items-center gap-2 text-gray-900">
                    <item.icon className="w-5 h-5 text-primary-600" />
                    {item.label}
                  </td>
                  <td className="py-4 px-4 text-center text-gray-500">
                    {item.manual}
                  </td>
                  <td className="py-4 px-4 text-center">
                    <span className="inline-flex items-center gap-1 text-primary-600 font-semibold">
                      {item.app}
                    </span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}