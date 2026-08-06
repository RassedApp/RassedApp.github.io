'use client'

import { motion, useState } from 'react'
import { motion as motionDiv } from 'framer-motion'
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react'

const faqs = [
  {
    question: 'How does Quick USSD Dial work?',
    answer: 'Quick USSD Dial uses USSD codes to transfer balance between mobile numbers on MTN and Syriatel networks. Simply enter the recipient number and amount, and the app handles the rest automatically.',
  },
  {
    question: 'Is it safe and secure?',
    answer: 'Yes, our app uses enterprise-grade security. Your license is protected, and all transactions are encrypted. We never store your personal data on our servers.',
  },
  {
    question: 'Can I use it on dual SIM phones?',
    answer: 'Absolutely! Quick USSD Dial fully supports dual SIM devices with automatic SIM selection, so you can transfer from either SIM card.',
  },
  {
    question: 'Do I need internet to use the app?',
    answer: 'Balance inquiries work offline via USSD codes. Transfers require a brief data connection to process the transaction, but the app works primarily through USSD.',
  },
  {
    question: 'What networks are supported?',
    answer: 'Quick USSD Dial supports both MTN and Syriatel networks in Syria. We plan to add more networks in future updates.',
  },
  {
    question: 'How do I activate my license?',
    answer: 'After purchasing a license, you will receive a license key via email. Enter the key in the app settings to activate your premium features.',
  },
  {
    question: 'Can I get a refund?',
    answer: 'We offer a 7-day money-back guarantee if you are not satisfied with the app. Contact our support team for assistance.',
  },
  {
    question: 'How often are updates released?',
    answer: 'We release updates regularly with new features, bug fixes, and performance improvements. All updates are free for license holders.',
  },
]

interface FAQItemProps {
  faq: typeof faqs[0]
  index: number
  isOpen: boolean
  onToggle: () => void
}

function FAQItem({ faq, index, isOpen, onToggle }: FAQItemProps) {
  return (
    <motionDiv
      className="rounded-xl border border-gray-200 bg-white overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <button
        onClick={onToggle}
        className="w-full px-6 py-5 text-left font-semibold text-gray-900 flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
      >
        <span className="flex items-center gap-3">
          <HelpCircle className="w-5 h-5 text-primary-600 shrink-0" />
          {faq.question}
        </span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-gray-400" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-400" />
        )}
      </button>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-100">
          {faq.answer}
        </div>
      </motion.div>
    </motionDiv>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 sm:py-24 lg:py-32 bg-white">
      <div className="container-custom max-w-3xl">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle mx-auto">
            Everything you need to know about Quick USSD Dial
          </p>
        </motion.div>

        <motionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-3"
        >
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => toggleFAQ(i)}
            />
          ))}
        </motionDiv>
      </div>
    </section>
  )
}