export const en = {
  language: {
    switchLabel: 'EN',
    changeLanguage: 'Change language',
    switchToId: 'Bahasa Indonesia',
    switchToEn: 'English',
    options: {
      id: 'ID',
      en: 'EN',
      ar: 'AR',
      ru: 'RU',
      zh: 'ZH',
    },
  },
  brand: {
    name: 'FXPayout.com',
    logoAlt: 'FXPayout Logo',
  },
  hero: {
    title: 'FXPayout.com',
    description:
      'Maximize your trading performance with cashback and rebates from trusted brokers. Continue trading normally while earning extra value on every lot you execute.',
    officialWebsite: 'Official FXPayout',
    calculateRebate: 'Calculate Rebate',
  },
  summary: {
    brokerPartner: 'Broker Partner',
    partnerCount: '+20 Broker',
    badge: 'Cashback',
    averageRebateLabel: 'Average Rebate',
    averageRebateValue: 'Up to 90%',
  },
  onboarding: {
    title: 'Getting Started with FXPayout',
    subtitle:
      'Complete the following steps to ensure your trading account is successfully connected to the FXPayout rebate system.',
    iconLabel: 'Onboarding guide',
    steps: [
      {
        title: 'Create Your FXPayout Account',
        description:
          'Create your official account at https://fxpayout.com first. All trading-account validation and rebate withdrawals are handled only through FXPayout.',
      },
      {
        title: 'Register Your Broker',
        description:
          'Choose a partner broker and register using the same email as your FXPayout account so account matching is faster and cleaner.',
      },
      {
        title: 'Link Your Trading Account',
        description:
          'Log in to the FXPayout Trader Dashboard, open Brokers, and add your trading account number so activity can be tracked automatically.',
      },
      {
        title: 'Set Your Withdrawal Method',
        description:
          'Set your preferred withdrawal method (bank or crypto wallet) in the FXPayout dashboard. Rebate withdrawals are available only on FXPayout.com.',
      },
      {
        title: 'Start Trading & Earn Cashback',
        description:
          'Once validated, trade normally and your cashback will be recorded automatically in the dashboard for future withdrawal.',
      },
    ],
    helpCta: 'If you are still unsure, contact admin now. Our team will guide you until your registration is complete.',
    helpButton: 'Contact Admin Now',
  },
  reviews: {
    title: 'User Reviews',
    subtitle: 'Trusted by traders',
    namePlaceholder: 'Your name',
    ratingLabel: 'Your rating',
    commentPlaceholder: 'Share your experience with registration or cashback.',
    submit: 'Submit review',
    viewAll: 'View all reviews',
    showLess: 'Show fewer reviews',
  },
  broker: {
    sectionTitle: 'List Broker Partner',
    regionTabs: {
      indonesia: 'Indonesia',
      global: 'Global',
      all: 'All Brokers',
    },
    searchPlaceholder: 'Search broker...',
    rebateOptions: {
      all: 'All Rebates',
      auto: 'Auto Rebates',
      manual: 'Manual Rebates',
    },
    countAvailable: (count: number) => `${count} Brokers Available`,
    countShowing: (shown: number, total: number) => `Showing ${shown} of ${total} Brokers`,
    applyNow: 'Register Now →',
    copyIbLink: 'Copy IB link',
    copied: 'Copied!',
    instruments: {
      eurUsd: 'EUR/USD',
      xauUsd: 'XAU/USD',
      audUsd: 'AUD/USD',
      crypto: 'Crypto',
      forex: 'Forex',
      gold: 'Gold',
    },
    rebateTextLabels: {
      upTo40TradingFee: 'Up to 40% Trading Fee',
      volumeCommission: 'Volume Commission',
      spreadRevshare: '30% Spread Revshare',
    },
    typeLabels: {
      auto: 'Auto',
      manual: 'Manual',
      volume: 'Volume',
    },
    emptyTitle: 'No broker found.',
    emptyButton: 'Reset Filters',
  },
  support: {
    title: 'Need Help?',
    description:
      'The FXPayout admin team is ready to help you with broker registration, account validation, and rebate claims.',
    one: 'Contact Support FXPayout 1',
    two: 'Contact Support FXPayout 2',
    channel: 'Join WhatsApp Channel',
    whatsapp: 'WhatsApp →',
    join: 'Join →',
  },
  footer: {
    disclaimerTitle: 'Forex Risk Disclaimer',
    disclaimer:
      'Trading forex involves high risk. Make sure you understand the risks before placing any trades. FXPayout is not responsible for any financial losses you may incur.',
    copyright: '© 2026 FXPayout',
  },
} as const;
