export const zh = {
  language: {
    switchLabel: 'ZH',
    changeLanguage: '切换语言',
    switchToId: 'ID',
    switchToEn: 'EN',
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
    logoAlt: 'FXPayout 标志',
  },
  hero: {
    title: 'FXPayout.com',
    description:
      '通过来自可靠经纪商的返现和回扣，最大化您的交易表现。继续正常交易，同时在每一手交易中获得额外收益。',
    officialWebsite: 'FXPayout 官方网站',
    calculateRebate: '计算返利',
  },
  summary: {
    brokerPartner: '合作经纪商',
    partnerCount: '+20 家经纪商',
    badge: '返现',
    averageRebateLabel: '平均返利',
    averageRebateValue: '高达 90%',
  },
  onboarding: {
    title: '开始使用 FXPayout',
    subtitle:
      '完成以下步骤，确保您的交易账户成功接入 FXPayout 的返利系统。',
    iconLabel: '入门指南',
    steps: [
      {
        title: '创建你的 FXPayout 账户',
        description:
          '在注册经纪商之前，请先在 https://fxpayout.com 创建您的 FXPayout 账户。Trader Dashboard 用于验证您的交易账户、监控 cashback，并提取返利。',
      },
      {
        title: '注册你的经纪商',
        description:
          '返回此页面，并尽量使用与 FXPayout 账户相同的电子邮箱注册您 preferred 的经纪商。',
      },
      {
        title: '绑定你的交易账户',
        description:
          '在您的经纪商账户创建完成后，登录 FXPayout Trader Dashboard，打开 Brokers 页面，并添加您的交易账户号码，以便系统自动检测您的交易活动并准确计算返利。',
      },
      {
        title: '设置提款方式',
        description:
          '添加您偏好的提款方式，例如银行账户或加密钱包，以安全地接收 cashback 支付。',
      },
      {
        title: '开始交易并赚取返现',
        description:
          '一旦您的交易账户成功通过验证，cashback 将会在 Trader Dashboard 中自动追踪，并根据 FXPayout 的提款政策进行提取。',
      },
    ],
  },
  broker: {
    sectionTitle: '合作经纪商列表',
    regionTabs: {
      indonesia: '印尼',
      global: '全球',
      all: '所有经纪商',
    },
    searchPlaceholder: '搜索经纪商...',
    rebateOptions: {
      all: '所有返利',
      auto: '自动返利',
      manual: '手动返利',
    },
    countAvailable: (count: number) => `${count} 家经纪商可用`,
    countShowing: (shown: number, total: number) => `显示 ${shown} / ${total} 家经纪商`,
    applyNow: '立即注册 →',
    instruments: {
      eurUsd: 'EUR/USD',
      xauUsd: 'XAU/USD',
      audUsd: 'AUD/USD',
      crypto: '加密货币',
      forex: '外汇',
      gold: '黄金',
    },
    rebateTextLabels: {
      upTo40TradingFee: '高达 40% 交易费',
      volumeCommission: '成交量佣金',
      spreadRevshare: '30% 点差分成',
    },
    typeLabels: {
      auto: '自动',
      manual: '手动',
      volume: '按量',
    },
    emptyTitle: '未找到经纪商。',
    emptyButton: '重置筛选',
  },
  support: {
    title: '需要帮助吗？',
    description:
      'FXPayout 管理团队随时准备协助您处理经纪商注册、账户验证和返利申领。',
    one: '联系 FXPayout 支持 1',
    two: '联系 FXPayout 支持 2',
    channel: '加入 WhatsApp 频道',
    whatsapp: 'WhatsApp →',
    join: '加入 →',
  },
  footer: {
    disclaimerTitle: '外汇风险声明',
    disclaimer:
      '外汇交易涉及高风险。在进行任何交易前，请确保您了解相关风险。FXPayout 对您可能遭受的任何财务损失不承担责任。',
    copyright: '© 2026 FXPayout',
  },
} as const;
