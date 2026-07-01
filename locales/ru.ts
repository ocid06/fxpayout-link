export const ru = {
  language: {
    switchLabel: 'RU',
    changeLanguage: 'Сменить язык',
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
    logoAlt: 'Логотип FXPayout',
  },
  hero: {
    title: 'FXPayout.com',
    description:
      'Максимизируйте результат своей торговли с помощью кэшбэка и ревардов от надёжных брокеров. Продолжайте торговать как обычно, получая дополнительную выгоду с каждого лота.',
    officialWebsite: 'Официальный FXPayout',
    calculateRebate: 'Рассчитать ревард',
  },
  summary: {
    brokerPartner: 'Партнёр-брокер',
    partnerCount: '+20 брокеров',
    badge: 'Кэшбэк',
    averageRebateLabel: 'Средний ревард',
    averageRebateValue: 'До 90%',
  },
  onboarding: {
    title: 'Начало работы с FXPayout',
    subtitle:
      'Выполните следующие шаги, чтобы гарантировать успешное подключение вашего торгового счёта к системе ревардов FXPayout.',
    iconLabel: 'Руководство по старту',
    steps: [
      {
        title: 'Создайте аккаунт FXPayout',
        description:
          'Перед регистрацией брокера создайте аккаунт FXPayout на https://fxpayout.com. Trader Dashboard используется для проверки торговых счетов, отслеживания кэшбэка и вывода ревардов.',
      },
      {
        title: 'Зарегистрируйте брокера',
        description:
          'Вернитесь на эту страницу и зарегистрируйтесь у предпочитаемого брокера, используя тот же адрес электронной почты, что и у аккаунта FXPayout, когда это возможно.',
      },
      {
        title: 'Привяжите торговый счёт',
        description:
          'После создания брокерского счёта войдите в FXPayout Trader Dashboard, откройте страницу Brokers и добавьте номер вашего торгового счёта, чтобы система могла автоматически обнаруживать торговую активность и точно рассчитывать реварды.',
      },
      {
        title: 'Укажите способ вывода',
        description:
          'Добавьте предпочитаемый способ вывода, например банковский счёт или криптокошелёк, чтобы безопасно получать выплаты кэшбэка.',
      },
      {
        title: 'Начните торговать и получайте кэшбэк',
        description:
          'После успешной валидации торгового счёта ваш кэшбэк будет автоматически отслеживаться внутри Trader Dashboard и может быть выведен в соответствии с политикой вывода FXPayout.',
      },
    ],
  },
  broker: {
    sectionTitle: 'Список партнёрских брокеров',
    regionTabs: {
      indonesia: 'Индонезия',
      global: 'Глобально',
      all: 'Все брокеры',
    },
    searchPlaceholder: 'Найти брокера...',
    rebateOptions: {
      all: 'Все реварды',
      auto: 'Авто ревард',
      manual: 'Ручной ревард',
    },
    countAvailable: (count: number) => `${count} доступных брокеров`,
    countShowing: (shown: number, total: number) => `Показано ${shown} из ${total} брокеров`,
    applyNow: 'Зарегистрироваться →',
    instruments: {
      eurUsd: 'EUR/USD',
      xauUsd: 'XAU/USD',
      audUsd: 'AUD/USD',
      crypto: 'Крипто',
      forex: 'Форекс',
      gold: 'Золото',
    },
    rebateTextLabels: {
      upTo40TradingFee: 'До 40% комиссии за торговлю',
      volumeCommission: 'Комиссия за объём',
      spreadRevshare: '30% Spread Revshare',
    },
    typeLabels: {
      auto: 'Авто',
      manual: 'Ручной',
      volume: 'Объём',
    },
    emptyTitle: 'Брокер не найден.',
    emptyButton: 'Сбросить фильтры',
  },
  support: {
    title: 'Нужна помощь?',
    description:
      'Административная команда FXPayout готова помочь с регистрацией брокера, валидацией аккаунта и заявками на ревард.',
    one: 'Связаться с поддержкой FXPayout 1',
    two: 'Связаться с поддержкой FXPayout 2',
    channel: 'Присоединиться к WhatsApp-каналу',
    whatsapp: 'WhatsApp →',
    join: 'Присоединиться →',
  },
  footer: {
    disclaimerTitle: 'Предупреждение о рисках Forex',
    disclaimer:
      'Торговля на форексе связана с высоким риском. Перед совершением сделок убедитесь, что понимаете риски. FXPayout не несёт ответственности за возможные финансовые потери.',
    copyright: '© 2026 FXPayout',
  },
} as const;
