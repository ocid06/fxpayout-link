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
          'Создайте аккаунт FXPayout на https://fxpayout.com.',
      },
      {
        title: 'Зарегистрируйте брокера',
        description:
          'Зарегистрируйте брокера с тем же email, что и у FXPayout.',
      },
      {
        title: 'Привяжите торговый счёт',
        description:
          'Подключите брокерский счёт в Trader Dashboard.',
      },
      {
        title: 'Укажите способ вывода',
        description:
          'Выберите способ вывода для выплат ревардов.',
      },
      {
        title: 'Начните торговать и получайте кэшбэк',
        description:
          'Торгуйте как обычно и получайте кэшбэк автоматически.',
      },
    ],
    helpCta: 'Если что-то осталось непонятно, свяжитесь с администратором прямо сейчас. Команда поможет до успешной регистрации.',
    helpButton: 'Связаться с администратором',
  },
  reviews: {
    title: 'Отзывы пользователей',
    subtitle: 'Нам доверяют трейдеры',
    namePlaceholder: 'Ваше имя',
    ratingLabel: 'Ваша оценка',
    commentPlaceholder: 'Поделитесь своим опытом регистрации или получения кэшбэка.',
    submit: 'Отправить отзыв',
    viewAll: 'Показать все отзывы',
    showLess: 'Показать меньше отзывов',
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
    copyIbLink: 'Копировать ссылку IB',
    copied: 'Скопировано!',
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
