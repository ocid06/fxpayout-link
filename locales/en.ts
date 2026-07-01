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
          'Before registering a broker, create your FXPayout account at https://fxpayout.com. The Trader Dashboard is used to validate your trading accounts, monitor cashback, and withdraw rebates.',
      },
      {
        title: 'Register Your Broker',
        description:
          'Return to this page and register with your preferred broker using the same email address as your FXPayout account whenever possible.',
      },
      {
        title: 'Link Your Trading Account',
        description:
          'After your broker account has been created, log in to the FXPayout Trader Dashboard, open the Brokers page, and add your trading account number so the system can automatically detect your trading activity and calculate rebates accurately.',
      },
      {
        title: 'Set Your Withdrawal Method',
        description:
          'Add your preferred withdrawal method, such as a bank account or crypto wallet, to receive cashback payments securely.',
      },
      {
        title: 'Start Trading & Earn Cashback',
        description:
          'Once your trading account has been successfully validated, your cashback will be tracked automatically inside the Trader Dashboard and can be withdrawn according to the FXPayout withdrawal policy.',
      },
    ],
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
