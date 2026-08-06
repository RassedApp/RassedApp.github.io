'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Ahmed Al-Hassan',
    role: 'MTN User',
    text: 'Quick USSD Dial is a game changer. Transferring balance takes seconds now instead of minutes. The interface is clean and easy to use.',
    rating: 5,
  },
  {
    name: 'Sara Mahmoud',
    role: 'Syriatel User',
    text: 'I\'ve been using this app for over a year. The dual SIM support is amazing and the automatic operator detection works perfectly every time.',
    rating: 5,
  },
  {
    name: 'Omar Khalil',
    role: 'Business Owner',
    text: 'We use Quick USSD Dial for our team. The license system is secure and the reports feature helps us track all transfers efficiently.',
    rating: 5,
  },
  {
    name: 'Layla Haddad',
    role: 'Daily User',
    text: 'The offline mode is a lifesaver. I can check my balance even without internet. Best balance transfer app available.',
    rating: 5,
  },
]

export default function Testimonials() {
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
          <h2 className="section-title">What Our Users Say</h2>
          <p className="section-subtitle mx-auto">
            Trusted by thousands of users across Syria
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              className="card p-6 hover:-translate-y-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Quote className="w-8 h-8 text-primary-200 mb-4" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary-500 text-primary-500" />
                ))}
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                  <span className="text-sm font-bold text-primary-600">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-sm text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}