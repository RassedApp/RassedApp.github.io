export interface HeroStat {
  value: string
  label: string
}

export interface PricingPlan {
  name: string
  description: string
  price: string
  currency: string
  period: string
  features: string[]
  popular: boolean
  bestValue: boolean
}

export interface ComparisonItem {
  label: string
  manual: string
  app: string
}

export interface SiteConfig {
  app: {
    name: string
    company: string
    email: string
    whatsapp: string
    telegram: string
    copyrightYear: string
    apkLink: string
  }
  hero: {
    stats: HeroStat[]
  }
  pricing: {
    currency: string
    plans: PricingPlan[]
  }
  comparison: {
    manualTitle: string
    appTitle: string
    manualCons: string[]
    items: ComparisonItem[]
  }
  download: {
    features: string[]
  }
}

export const defaultConfig: SiteConfig = {
  app: {
    name: 'Raseed',
    company: 'Blue Orbit Technologies',
    email: 'aslive@liva.com',
    whatsapp: 'https://wa.me/963940716331',
    telegram: 'https://t.me/BoTechRaseed',
    copyrightYear: '2026',
    apkLink: '',
  },
  hero: {
    stats: [
      { value: 'Try it free', label: 'No payment required' },
      { value: 'Offline', label: 'Works after activation' },
      { value: 'Dual SIM', label: 'MTN & Syriatel' },
      { value: 'Arabic UI', label: 'Simple and clear' },
    ],
  },
  pricing: {
    currency: 'SYP',
    plans: [
      {
        name: 'One Year',
        description: 'Ideal for new shops wanting to try Raseed at the lowest cost.',
        price: '1200',
        currency: 'SYP',
        period: 'year',
        features: [
          'All app features',
          'Free trial before buying',
          'Activation on one device',
          'Updates all year',
        ],
        popular: false,
        bestValue: false,
      },
      {
        name: 'Two Years',
        description: 'The best balance between price and long-term value.',
        price: '2000',
        currency: 'SYP',
        period: '2 years',
        features: [
          'All app features',
          'Priority support',
          'Activation on one device',
          'Updates for the full period',
          'Save 400 SYP',
        ],
        popular: true,
        bestValue: false,
      },
      {
        name: 'Three Years',
        description: 'Perfect for established businesses looking for the best long-term investment.',
        price: '3000',
        currency: 'SYP',
        period: '3 years',
        features: [
          'All app features',
          'Priority support',
          'Activation on one device',
          'Updates for the full period',
          'Save 600 SYP',
          'Price locked for three years',
        ],
        popular: false,
        bestValue: true,
      },
    ],
  },
  comparison: {
    manualTitle: 'Manual Transfers',
    appTitle: 'Raseed',
    manualCons: [
      'Typing USSD codes for every single transfer',
      'Manually switching SIM cards all day long',
      'No record of your transactions',
      'Mistakes when entering numbers',
      'Losing time with every customer',
      'Tiring work during rush hours',
    ],
    items: [
      { label: 'Transfer Speed', manual: 'Type code manually', app: 'One-tap transfer' },
      { label: 'SIM Selection', manual: 'Manual switching', app: 'Automatic' },
      { label: 'Balance Check', manual: 'Codes for each network', app: 'One tap' },
      { label: 'Transaction Record', manual: 'None', app: 'Daily reports' },
      { label: 'Offline', manual: 'No', app: 'Yes, after activation' },
      { label: 'Error Risk', manual: 'High', app: 'Lower' },
      { label: 'Interface', manual: 'Complex codes', app: 'Simple Arabic' },
      { label: 'Support', manual: 'None', app: 'Our team' },
    ],
  },
  download: {
    features: [
      'Free direct download',
      'Trial without payment',
      'No hidden fees',
      'Works offline after activation',
      'Activation by request from the app',
      'Support for shops',
    ],
  },
}
