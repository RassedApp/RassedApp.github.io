'use client'

import { motion } from 'framer-motion'
import { Smartphone, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'

const screenshots = [
  { 
    label: 'Home Screen', 
    color: 'from-primary-100 to-primary-50',
    features: ['Quick Transfer', 'Balance Check', 'History']
  },
  { 
    label: 'Transfer', 
    color: 'from-emerald-100 to-emerald-50',
    features: ['One Tap', 'Auto Detect', 'Confirm']
  },
  { 
    label: 'Reports', 
    color: 'from-cyan-100 to-cyan-50',
    features: ['History', 'Analytics', 'Export']
  },
  { 
    label: 'Settings', 
    color: 'from-blue-100 to-blue-50',
    features: ['License', 'Language', 'Theme']
  },
]

export default function Screenshots() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => setCurrentIndex((prev) => (prev + 1) % screenshots.length)
  const prev = () => setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length)

  return (
    <section id="screenshots" className="py-20 sm:py-24 lg:py-32 bg-white">
      <div className="container-custom">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">See It in Action</h2>
          <p className="section-subtitle mx-auto">
            Beautiful, intuitive interface designed for speed and ease of use
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="relative">
            <div className="overflow-hidden">
              <motion.div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {screenshots.map((ss, i) => (
                  <div key={i} className="w-full flex-shrink-0 px-4">
                    <motion.div
                      className="group relative"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.15 }}
                    >
                      <div className="relative w-full max-w-sm mx-auto">
                        <div className="relative w-full h-[480px] rounded-[3rem] border-4 border-gray-200 bg-gradient-to-b from-white to-gray-50 p-3 shadow-2xl group-hover:shadow-primary-100 transition-shadow duration-500 group-hover:-translate-y-2">
                          <div className={`w-full h-full rounded-[2rem] bg-gradient-to-br ${ss.color} flex items-center justify-center overflow-hidden relative`}>
                            <div className="text-center space-y-3 p-6 z-10">
                              <div className="w-16 h-16 rounded-2xl bg-primary-100 mx-auto flex items-center justify-center">
                                <Smartphone className="w-8 h-8 text-primary-600" />
                              </div>
                              <p className="text-sm font-medium text-gray-800">
                                {ss.label}
                              </p>
                              <div className="space-y-2 mt-4 flex flex-col items-center">
                                {ss.features.map((f, idx) => (
                                  <div key={idx} className="h-2 w-20 rounded-full bg-primary-200" />
                                ))}
                              </div>
                            </div>
                          </div>
                          <div className="absolute top-6 left-1/2 -translate-x-1/2 w-20 h-1 bg-gray-300 rounded-full" />
                          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-16 h-1 bg-gray-200 rounded-full" />
                        </div>
                      </div>
                      <p className="text-center text-sm text-gray-500 mt-4">
                        {ss.label}
                      </p>
                    </motion.div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          <div className="flex justify-center gap-3 mt-8">
            <button
              onClick={prev}
              className="p-3 rounded-full bg-white border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-colors"
              aria-label="Previous screenshot"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <div className="flex items-center gap-2">
              {screenshots.map((_, i) => (
                <motion.button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    i === currentIndex
                      ? 'bg-primary-600 w-8'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to screenshot ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="p-3 rounded-full bg-white border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-colors"
              aria-label="Next screenshot"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}