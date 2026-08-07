export interface HeroStat {
  value: string
  label: string
}

export interface PricingPlan {
  name: string
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
    name: 'Quick USSD Dial',
    company: 'Blue Orbit Technologies',
    email: 'support@blueorbit.tech',
    whatsapp: 'https://wa.me/963999123456',
    telegram: 'https://t.me/QuickUssdDial',
    copyrightYear: '2026',
    apkLink: '',
  },
  hero: {
    stats: [
      { value: '50K+', label: 'Downloads' },
      { value: '4.9★', label: 'Rating' },
      { value: '24/7', label: 'Support' },
      { value: '2', label: 'Networks' },
    ],
  },
  pricing: {
    currency: 'SYP',
    plans: [
      {
        name: 'One Year',
        price: '120,000',
        currency: 'SYP',
        period: 'year',
        features: [
          'Technical Support',
          'All Updates',
          'License for 1 Device',
          'All Features Included',
        ],
        popular: false,
        bestValue: false,
      },
      {
        name: 'Two Years',
        price: '200,000',
        currency: 'SYP',
        period: '2 years',
        features: [
          'Technical Support',
          'All Updates',
          'License for 1 Device',
          'All Features Included',
          'Save 16%',
          'Priority Support',
        ],
        popular: true,
        bestValue: false,
      },
      {
        name: 'Three Years',
        price: '300,000',
        currency: 'SYP',
        period: '3 years',
        features: [
          'Technical Support',
          'All Updates',
          'License for 1 Device',
          'All Features Included',
          'Save 37%',
          'Priority Support',
          'Extended Warranty',
        ],
        popular: false,
        bestValue: true,
      },
    ],
  },
  comparison: {
    manualTitle: 'Manual Transfer',
    appTitle: 'Quick USSD Dial',
    manualCons: [
      'Memorize complex USSD codes for each network',
      'Manual SIM switching on dual SIM devices',
      'No transaction history or reports',
      'Frequent failures and retries needed',
      'No customer support',
      'Time-consuming process',
    ],
    items: [
      { label: 'Transfer Speed', manual: '5-15 minutes', app: 'Under 10 seconds' },
      { label: 'Ease of Use', manual: 'Complex USSD codes', app: 'One tap transfer' },
      { label: 'Reliability', manual: 'Often fails', app: '99.9% success rate' },
      { label: 'Offline Support', manual: 'No', app: 'Yes (balance check)' },
      { label: 'Transaction History', manual: 'No', app: 'Full reports' },
      { label: 'Languages', manual: 'Arabic only', app: 'Arabic & English' },
      { label: 'Dual SIM', manual: 'Manual selection', app: 'Auto selection' },
      { label: 'Support', manual: 'None', app: '24/7 priority' },
    ],
  },
  download: {
    features: [
      'Free to download',
      'Secure license system',
      'No hidden fees',
      '24/7 support',
      'Regular updates',
      'Works offline',
    ],
  },
}
