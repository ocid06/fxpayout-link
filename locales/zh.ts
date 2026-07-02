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
          '先在 https://fxpayout.com 创建 FXPayout 账户。',
      },
      {
        title: '注册你的经纪商',
        description:
          '使用与 FXPayout 相同的邮箱注册经纪商。',
      },
      {
        title: '绑定你的交易账户',
        description:
          '在 Trader Dashboard 中绑定经纪商账户。',
      },
      {
        title: '设置提款方式',
        description:
          '选择提款方式以接收返利。',
      },
      {
        title: '开始交易并赚取返现',
        description:
          '正常交易，返现会自动到账。',
      },
    ],
    helpCta: '如果您还不清楚，请立即联系管理员，我们会协助您直到成功完成注册。',
    helpButton: '立即联系管理员',
  },
  reviews: {
    title: '用户评价',
    subtitle: '受到交易者信赖',
    namePlaceholder: '您的名字',
    ratingLabel: '您的评分',
    commentPlaceholder: '分享您在注册或返现方面的体验。',
    submit: '提交评价',
    viewAll: '查看全部评价',
    showLess: '收起部分评价',
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
