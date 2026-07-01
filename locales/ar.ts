export const ar = {
  language: {
    switchLabel: 'AR',
    changeLanguage: 'تغيير اللغة',
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
    logoAlt: 'شعار FXPayout',
  },
  hero: {
    title: 'FXPayout.com',
    description:
      'عزز أداء تداولك من خلال استرداد النقد ومزايا الخصومات من الوسطاء الموثوقين. واصل التداول كما المعتاد بينما تكسب قيمة إضافية على كل lote تنفذه.',
    officialWebsite: 'FXPayout الرسمي',
    calculateRebate: 'احسب الاسترداد',
  },
  summary: {
    brokerPartner: 'شريك الوسيط',
    partnerCount: '+20 وسيطًا',
    badge: 'استرداد نقدي',
    averageRebateLabel: 'متوسط الاسترداد',
    averageRebateValue: 'حتى 90%',
  },
  onboarding: {
    title: 'البدء مع FXPayout',
    subtitle:
      'اتبع الخطوات التالية لضمان اتصال حساب التداول الخاص بك بنظام استرداد FXPayout بنجاح.',
    iconLabel: 'دليل الإعداد',
    steps: [
      {
        title: 'أنشئ حساب FXPayout',
        description:
          'قبل تسجيل وسيط، أنشئ حساب FXPayout على https://fxpayout.com. تُستخدم لوحة المتداول للتحقق من حسابات التداول الخاصة بك ومراقبة الاسترداد والسحب.',
      },
      {
        title: 'سجل الوسيط الخاص بك',
        description:
          'عد إلى هذه الصفحة وسجل مع الوسيط المفضل لديك باستخدام نفس البريد الإلكتروني الخاص بحساب FXPayout كلما أمكن.',
      },
      {
        title: 'ربط حساب التداول',
        description:
          'بعد إنشاء حساب الوسيط، سجّل الدخول إلى FXPayout Trader Dashboard وافتح صفحة Brokers وأضف رقم حساب التداول الخاص بك حتى يتمكن النظام من اكتشاف نشاط التداول وحساب الاستردادات بدقة.',
      },
      {
        title: 'حدد طريقة السحب',
        description:
          'أضف طريقة السحب المفضلة لديك، مثل الحساب البنكي أو محفظة العملات المشفرة، لتلقي مدفوعات الاسترداد بشكل آمن.',
      },
      {
        title: 'ابدأ التداول وابدأ في كسب الاسترداد',
        description:
          'بمجرد التحقق من حساب التداول بنجاح، سيتم تتبع الاسترداد تلقائيًا داخل Trader Dashboard ويمكن سحبه وفق سياسة السحب الخاصة بـ FXPayout.',
      },
    ],
  },
  broker: {
    sectionTitle: 'قائمة شركاء الوسطاء',
    regionTabs: {
      indonesia: 'إندونيسيا',
      global: 'عالمي',
      all: 'جميع الوسطاء',
    },
    searchPlaceholder: 'ابحث عن وسيط...',
    rebateOptions: {
      all: 'جميع الاستردادات',
      auto: 'استرداد تلقائي',
      manual: 'استرداد يدوي',
    },
    countAvailable: (count: number) => `${count} وسيطًا متاحًا`,
    countShowing: (shown: number, total: number) => `عرض ${shown} من ${total} وسيطًا`,
    applyNow: 'سجل الآن →',
    instruments: {
      eurUsd: 'EUR/USD',
      xauUsd: 'XAU/USD',
      audUsd: 'AUD/USD',
      crypto: 'العملات الرقمية',
      forex: 'الفوركس',
      gold: 'الذهب',
    },
    rebateTextLabels: {
      upTo40TradingFee: 'حتى 40% من رسوم التداول',
      volumeCommission: 'عمولة الحجم',
      spreadRevshare: '30% من Spread Revshare',
    },
    typeLabels: {
      auto: 'تلقائي',
      manual: 'يدوي',
      volume: 'حجم',
    },
    emptyTitle: 'لم يتم العثور على وسيط.',
    emptyButton: 'إعادة تعيين الفلاتر',
  },
  support: {
    title: 'هل تحتاج إلى مساعدة؟',
    description:
      'فريق FXPayout الإداري جاهز لمساعدتك في تسجيل الوسيط والتحقق من الحسابات وطلبات الاسترداد.',
    one: 'تواصل مع دعم FXPayout 1',
    two: 'تواصل مع دعم FXPayout 2',
    channel: 'انضم إلى قناة واتساب',
    whatsapp: 'واتساب →',
    join: 'انضم →',
  },
  footer: {
    disclaimerTitle: 'تنويه المخاطر Forex',
    disclaimer:
      'يتضمن التداول في الفوركس مخاطر عالية. تأكد من فهم المخاطر قبل إجراء أي عمليات. لا تتحمل FXPayout مسؤولية أي خسائر مالية قد تتعرض لها.',
    copyright: '© 2026 FXPayout',
  },
} as const;
