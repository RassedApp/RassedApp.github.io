'use client'

import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { ArrowLeft, Shield, Database, Smartphone, Globe, Lock, User, Mail, MessageCircle, Send } from 'lucide-react'
import Link from './Link'
import { useConfig } from '../config/ConfigContext'

export default function PrivacyPolicy() {
  const { t } = useTranslation()
  const config = useConfig()
  const app = config.app

  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  const arabicDate = new Date().toLocaleDateString('ar-SA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gray-50 border-b border-gray-200 py-12 md:py-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-primary-600 transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{t('privacy.backToHome')}</span>
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('privacy.title')}
            </h1>
            <p className="text-gray-600 text-lg">
              {t('privacy.subtitle', { app: app.name })}
            </p>
            <div className="flex items-center justify-center gap-4 mt-6 text-sm text-gray-500">
              <span>{t('privacy.lastUpdated')}</span>
              <span className="font-medium">
                {currentDate} / {arabicDate}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-12">
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="prose prose-gray max-w-none"
            >
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-primary-600" />
                    {t('privacy.sections.intro.title')}
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    {t('privacy.sections.intro.content', { app: app.name, company: app.company })}
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Database className="w-5 h-5 text-primary-600" />
                    {t('privacy.sections.dataCollected.title')}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {t('privacy.sections.dataCollected.intro')}
                  </p>
                  <ul className="space-y-3 list-disc list-inside text-gray-600">
                    <li>{t('privacy.sections.dataCollected.items.account')}</li>
                    <li>{t('privacy.sections.dataCollected.items.phoneNumber')}</li>
                    <li>{t('privacy.sections.dataCollected.items.deviceId')}</li>
                    <li>{t('privacy.sections.dataCollected.items.license')}</li>
                    <li>{t('privacy.sections.dataCollected.items.transactions')}</li>
                    <li>{t('privacy.sections.dataCollected.items.contacts')}</li>
                    <li>{t('privacy.sections.dataCollected.items.sync')}</li>
                    <li>{t('privacy.sections.dataCollected.items.errors')}</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Smartphone className="w-5 h-5 text-primary-600" />
                    {t('privacy.sections.usage.title')}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {t('privacy.sections.usage.intro')}
                  </p>
                  <ul className="space-y-3 list-disc list-inside text-gray-600">
                    <li>{t('privacy.sections.usage.items.provide')}</li>
                    <li>{t('privacy.sections.usage.items.activate')}</li>
                    <li>{t('privacy.sections.usage.items.sync')}</li>
                    <li>{t('privacy.sections.usage.items.support')}</li>
                    <li>{t('privacy.sections.usage.items.improve')}</li>
                    <li>{t('privacy.sections.usage.items.compliance')}</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Database className="w-5 h-5 text-primary-600" />
                    {t('privacy.sections.storage.title')}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {t('privacy.sections.storage.content')}
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Globe className="w-5 h-5 text-primary-600" />
                    {t('privacy.sections.sync.title')}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {t('privacy.sections.sync.content')}
                  </p>
                  <ul className="space-y-3 list-disc list-inside text-gray-600">
                    <li>{t('privacy.sections.sync.items.supabase')}</li>
                    <li>{t('privacy.sections.sync.items.activation')}</li>
                    <li>{t('privacy.sections.sync.items.optional')}</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Lock className="w-5 h-5 text-primary-600" />
                    {t('privacy.sections.security.title')}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {t('privacy.sections.security.content')}
                  </p>
                  <ul className="space-y-3 list-disc list-inside text-gray-600">
                    <li>{t('privacy.sections.security.items.local')}</li>
                    <li>{t('privacy.sections.security.items.transport')}</li>
                    <li>{t('privacy.sections.security.items.access')}</li>
                    <li>{t('privacy.sections.security.items.retention')}</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <User className="w-5 h-5 text-primary-600" />
                    {t('privacy.sections.thirdParty.title')}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {t('privacy.sections.thirdParty.intro')}
                  </p>
                  <ul className="space-y-3 list-disc list-inside text-gray-600">
                    <li>
                      <strong>Supabase:</strong> {t('privacy.sections.thirdParty.items.supabase')}
                    </li>
                    <li>
                      <strong>{t('privacy.sections.thirdParty.items.googlePlay')}</strong>: {t('privacy.sections.thirdParty.items.googlePlayDesc')}
                    </li>
                    <li>
                      <strong>{t('privacy.sections.thirdParty.items.carrier')}</strong>: {t('privacy.sections.thirdParty.items.carrierDesc')}
                    </li>
                  </ul>
                  <p className="text-gray-600 leading-relaxed mt-4">
                    {t('privacy.sections.thirdParty.noSale')}
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Smartphone className="w-5 h-5 text-primary-600" />
                    {t('privacy.sections.deviceLicense.title')}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {t('privacy.sections.deviceLicense.content')}
                  </p>
                  <ul className="space-y-3 list-disc list-inside text-gray-600">
                    <li>{t('privacy.sections.deviceLicense.items.deviceBinding')}</li>
                    <li>{t('privacy.sections.deviceLicense.items.activation')}</li>
                    <li>{t('privacy.sections.deviceLicense.items.transfer')}</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <MessageCircle className="w-5 h-5 text-primary-600" />
                    {t('privacy.sections.contacts.title')}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {t('privacy.sections.contacts.content')}
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Database className="w-5 h-5 text-primary-600" />
                    {t('privacy.sections.retention.title')}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {t('privacy.sections.retention.content')}
                  </p>
                  <ul className="space-y-3 list-disc list-inside text-gray-600">
                    <li>{t('privacy.sections.retention.items.local')}</li>
                    <li>{t('privacy.sections.retention.items.server')}</li>
                    <li>{t('privacy.sections.retention.items.deletion')}</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <User className="w-5 h-5 text-primary-600" />
                    {t('privacy.sections.rights.title')}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {t('privacy.sections.rights.content')}
                  </p>
                  <ul className="space-y-3 list-disc list-inside text-gray-600">
                    <li>{t('privacy.sections.rights.items.access')}</li>
                    <li>{t('privacy.sections.rights.items.correction')}</li>
                    <li>{t('privacy.sections.rights.items.deletion')}</li>
                    <li>{t('privacy.sections.rights.items.portability')}</li>
                    <li>{t('privacy.sections.rights.items.objection')}</li>
                    <li>{t('privacy.sections.rights.items.withdrawal')}</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-primary-600" />
                    {t('privacy.sections.children.title')}
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    {t('privacy.sections.children.content')}
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Send className="w-5 h-5 text-primary-600" />
                    {t('privacy.sections.changes.title')}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {t('privacy.sections.changes.content')}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {t('privacy.sections.changes.notification')}
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Mail className="w-5 h-5 text-primary-600" />
                    {t('privacy.sections.contact.title')}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {t('privacy.sections.contact.content')}
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-gray-600">
                      <Mail className="w-5 h-5 text-primary-600 flex-shrink-0" />
                      <a href={`mailto:${app.email}`} className="hover:text-primary-600 transition-colors">
                        {app.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <MessageCircle className="w-5 h-5 text-primary-600 flex-shrink-0" />
                      <a href={app.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-primary-600 transition-colors">
                        {t('privacy.sections.contact.whatsapp')}
                      </a>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <Send className="w-5 h-5 text-primary-600 flex-shrink-0" />
                      <a href="https://www.facebook.com/RaseedApp" target="_blank" rel="noopener noreferrer" className="hover:text-primary-600 transition-colors">
                        {t('privacy.sections.contact.facebook')}
                      </a>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <Smartphone className="w-5 h-5 text-primary-600 flex-shrink-0" />
                      <a href="tel:+963940716331" className="hover:text-primary-600 transition-colors">
                        +963 940 716 331
                      </a>
                    </div>
                  </div>
                </section>
              </div>
            </motion.article>
          </div>
        </div>
      </section>
    </div>
  )
}