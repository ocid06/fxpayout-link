'use client';

import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import { FileText, Link2, Languages, TrendingUp, UserRound, Wallet, Star } from 'lucide-react';
import { brokers } from '@/lib/brokers';
import { translations, type Locale } from '@/locales';

export default function FXPayoutPage() {
  type RegionTab = 'indonesia' | 'global' | 'all';
  type RebateFilter = 'all' | 'auto' | 'manual';
  type ReviewLocale = Locale;

  const indonesiaBrokerNames = ['Finex', 'MIFX', 'HSB'];
  const regionTabs: { key: RegionTab }[] = [
    { key: 'indonesia' },
    { key: 'global' },
    { key: 'all' },
  ];

  const [selectedTab, setSelectedTab] = useState<RegionTab>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [rebateFilter, setRebateFilter] = useState<RebateFilter>('all');
  const [locale, setLocale] = useState<Locale>('en');
  const [isLocaleReady, setIsLocaleReady] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);

  type Review = {
    id: number;
    name: string;
    country: string;
    localeCode: ReviewLocale;
    rating: number;
    comment: string;
    date: string;
  };

  const languageOrder: ReviewLocale[] = ['id', 'en', 'ar', 'ru', 'zh'];

  const localeCountryMap: Record<ReviewLocale, string> = {
    id: 'Indonesia',
    en: 'United Kingdom',
    ar: 'United Arab Emirates',
    ru: 'Russia',
    zh: 'China',
  };

  const initialReviews: Review[] = [
    {
      id: 1,
      country: 'Indonesia',
      localeCode: 'id',
      name: 'Ari Setiawan',
      rating: 5,
      comment: 'Alur daftar sangat jelas. Akun broker saya berhasil terhubung kurang dari 10 menit.',
      date: '2026-05-18',
    },
    {
      id: 2,
      country: 'United Kingdom',
      localeCode: 'en',
      name: 'Daniel Brooks',
      rating: 5,
      comment: 'The onboarding details are very clear, and cashback tracking works exactly as explained.',
      date: '2026-05-22',
    },
    {
      id: 3,
      country: 'United Arab Emirates',
      localeCode: 'ar',
      name: 'Noura Al Mansoori',
      rating: 4,
      comment: 'الشرح واضح جداً، وفريق الدعم ساعدني حتى تم تفعيل الحساب بالكامل.',
      date: '2026-06-02',
    },
    {
      id: 4,
      country: 'Russia',
      localeCode: 'ru',
      name: 'Mikhail Orlov',
      rating: 5,
      comment: 'Отличный сервис: зарегистрировался, подключил счет и сразу начал получать кэшбэк.',
      date: '2026-06-17',
    },
    {
      id: 5,
      country: 'China',
      localeCode: 'zh',
      name: 'Li Wei',
      rating: 5,
      comment: '流程很清晰，客服响应很快，返利记录也非常透明。',
      date: '2026-06-20',
    },
  ];

  const [reviews, setReviews] = useState<Review[]>(initialReviews);
  const [reviewName, setReviewName] = useState('');
  const [reviewRating, setReviewRating] = useState(5);
  const [reviewComment, setReviewComment] = useState('');
  const [showAllReviews, setShowAllReviews] = useState(false);

  const t = translations[locale];

  const rebateOptions = [
    { key: 'all' as const, label: t.broker.rebateOptions.all },
    { key: 'auto' as const, label: t.broker.rebateOptions.auto },
    { key: 'manual' as const, label: t.broker.rebateOptions.manual },
  ];

  const languageOptions: { code: Locale; label: string }[] = [
    { code: 'id', label: t.language.options.id },
    { code: 'en', label: t.language.options.en },
    { code: 'ar', label: t.language.options.ar },
    { code: 'ru', label: t.language.options.ru },
    { code: 'zh', label: t.language.options.zh },
  ];

  useEffect(() => {
    const storedLanguage = window.localStorage.getItem('fxpayout-locale') as Locale | null;
    const hasManualLanguage = window.localStorage.getItem('fxpayout-locale-manual') === '1';
    const storedTab = window.sessionStorage.getItem('fxpayout-broker-tab');
    if (storedTab === 'indonesia' || storedTab === 'global' || storedTab === 'all') {
      setSelectedTab(storedTab);
    }

    const resolveLocaleFromCookie = (): Locale | null => {
      const cookieValue = document.cookie
        .split('; ')
        .find((entry) => entry.startsWith('locale=') || entry.startsWith('lang=') || entry.startsWith('NEXT_LOCALE='))
        ?.split('=')[1];

      if (!cookieValue) {
        return null;
      }

      const normalized = cookieValue.toLowerCase();
      if (normalized.startsWith('id')) return 'id';
      if (normalized.startsWith('ar')) return 'ar';
      if (normalized.startsWith('ru')) return 'ru';
      if (normalized.startsWith('zh')) return 'zh';
      if (normalized.startsWith('en')) return 'en';
      return null;
    };

    const resolveLocaleFromBrowser = (): Locale | null => {
      const browserLocale = navigator.language?.toLowerCase() ?? '';
      if (browserLocale.startsWith('id')) return 'id';
      if (browserLocale.startsWith('ar')) return 'ar';
      if (browserLocale.startsWith('ru')) return 'ru';
      if (browserLocale.startsWith('zh')) return 'zh';
      if (browserLocale.startsWith('en')) return 'en';
      return null;
    };

    if (
      hasManualLanguage &&
      (storedLanguage === 'en' || storedLanguage === 'id' || storedLanguage === 'ar' || storedLanguage === 'ru' || storedLanguage === 'zh')
    ) {
      setLocale(storedLanguage);
      setIsLocaleReady(true);
      return;
    }

    const preferredLocale = resolveLocaleFromCookie();
    if (preferredLocale) {
      setLocale(preferredLocale);
      setIsLocaleReady(true);
      return;
    }

    const browserLocale = resolveLocaleFromBrowser();
    if (browserLocale) {
      setLocale(browserLocale);
      setIsLocaleReady(true);
      return;
    }

    let isMounted = true;

    fetch('https://www.cloudflare.com/cdn-cgi/trace', { cache: 'no-store' })
      .then((response) => response.text())
      .then((traceData) => {
        if (!isMounted) return;

        const location = traceData
          .split('\n')
          .find((line) => line.startsWith('loc='))
          ?.split('=')[1]?.trim();

        if (location === 'ID') {
          setLocale('id');
          if (!storedTab) {
            setSelectedTab('indonesia');
          }
        } else {
          setLocale('en');
          if (!storedTab) {
            setSelectedTab('global');
          }
        }
      })
      .catch(() => {
        if (isMounted) {
          setLocale('en');
          if (!storedTab) {
            setSelectedTab('global');
          }
        }
      })
      .finally(() => {
        if (isMounted) {
          setIsLocaleReady(true);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    const storedReviews = window.localStorage.getItem('fxpayout-reviews');

    if (storedReviews) {
      try {
        const parsedReviews = JSON.parse(storedReviews) as Partial<Review>[];

        if (Array.isArray(parsedReviews) && parsedReviews.length > 0) {
          const normalizedReviews: Review[] = parsedReviews
            .map((review, index) => {
              if (!review.name || !review.comment || typeof review.rating !== 'number') {
                return null;
              }

              const localeCode = languageOrder.includes(review.localeCode as ReviewLocale)
                ? (review.localeCode as ReviewLocale)
                : 'en';

              return {
                id: typeof review.id === 'number' ? review.id : Date.now() + index,
                name: review.name,
                comment: review.comment,
                rating: Math.min(5, Math.max(1, review.rating)),
                date: typeof review.date === 'string' ? review.date : new Date().toLocaleDateString(),
                localeCode,
                country: typeof review.country === 'string' ? review.country : localeCountryMap[localeCode],
              };
            })
            .filter((review): review is Review => review !== null);

          if (normalizedReviews.length > 0) {
            setReviews(normalizedReviews);
          }
        }
      } catch {
        window.localStorage.removeItem('fxpayout-reviews');
      }
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('fxpayout-reviews', JSON.stringify(reviews));
  }, [reviews]);

  useEffect(() => {
    window.sessionStorage.setItem('fxpayout-broker-tab', selectedTab);
  }, [selectedTab]);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr';
  }, [locale]);

  useEffect(() => {
    if (!isLocaleReady) {
      return;
    }

    if (!window.sessionStorage.getItem('fxpayout-broker-tab')) {
      setSelectedTab(locale === 'id' ? 'indonesia' : 'global');
    }
  }, [locale, isLocaleReady]);

  const visibleBrokers = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    return brokers.filter((broker) => {
      const brokerName = broker.name.trim().toLowerCase();
      const isIndonesiaTab = selectedTab === 'indonesia';
      const isGlobalTab = selectedTab === 'global';

      const matchesRegion =
        selectedTab === 'all' ||
        (isIndonesiaTab && indonesiaBrokerNames.includes(broker.name.trim())) ||
        (isGlobalTab && !indonesiaBrokerNames.includes(broker.name.trim()));

      const matchesSearch = brokerName.includes(normalizedSearch);

      const matchesRebate = rebateFilter === 'all' || broker.type === rebateFilter;

      return matchesRegion && matchesSearch && matchesRebate;
    });
  }, [searchTerm, selectedTab, rebateFilter]);

  const brokerCountLabel =
    visibleBrokers.length === brokers.length
      ? t.broker.countAvailable(brokers.length)
      : t.broker.countShowing(visibleBrokers.length, brokers.length);

  const averageRating = reviews.length
    ? (reviews.reduce((total, review) => total + review.rating, 0) / reviews.length).toFixed(1)
    : '0.0';

  const sortedReviews = useMemo(() => {
    const shuffledReviews = [...reviews];

    for (let index = shuffledReviews.length - 1; index > 0; index -= 1) {
      const randomIndex = Math.floor(Math.random() * (index + 1));
      const current = shuffledReviews[index];
      shuffledReviews[index] = shuffledReviews[randomIndex];
      shuffledReviews[randomIndex] = current;
    }

    return shuffledReviews;
  }, [reviews]);

  const visibleReviews = showAllReviews ? sortedReviews : sortedReviews.slice(0, 5);

  const handleSubmitReview = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const name = reviewName.trim();
    const comment = reviewComment.trim();

    if (!name || !comment) {
      return;
    }

    const newReview: Review = {
      id: Date.now(),
      name,
      country: localeCountryMap[locale],
      localeCode: locale,
      rating: reviewRating,
      comment,
      date: new Date().toLocaleDateString(),
    };

    setReviews((currentReviews) => [newReview, ...currentReviews]);
    setReviewName('');
    setReviewRating(5);
    setReviewComment('');
    setShowAllReviews(true);
  };

  const resetFilters = () => {
    setSearchTerm('');
    setRebateFilter('all');
  };

  return (
    <div className="relative overflow-hidden min-h-screen bg-premium">
      {/* Animated Background Chart */}
      <svg
        className="animated-chart absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="chartGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#2F5BFF" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#3C66F5" stopOpacity="0.05" />
          </linearGradient>

          <linearGradient id="chartGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.02" />
          </linearGradient>
        </defs>

        <line x1="100" y1="200" x2="1100" y2="200" stroke="#e5e7eb" strokeWidth="1" opacity="0.3" />
        <line x1="100" y1="400" x2="1100" y2="400" stroke="#e5e7eb" strokeWidth="1" opacity="0.3" />
        <line x1="100" y1="600" x2="1100" y2="600" stroke="#e5e7eb" strokeWidth="1" opacity="0.3" />

        <path
          d="M 100 500 Q 300 350, 500 300 T 900 200 L 1100 200"
          fill="none"
          stroke="#2F5BFF"
          strokeWidth="3"
          opacity="0.6"
        />

        <path
          d="M 100 500 Q 300 350, 500 300 T 900 200 L 1100 200 L 1100 800 L 100 800 Z"
          fill="url(#chartGradient1)"
        />

        <path
          d="M 100 550 Q 300 420, 500 380 T 900 300 L 1100 280"
          fill="none"
          stroke="#60A5FA"
          strokeWidth="2.5"
          opacity="0.5"
        />

        <path
          d="M 100 550 Q 300 420, 500 380 T 900 300 L 1100 280 L 1100 800 L 100 800 Z"
          fill="url(#chartGradient2)"
        />

        <circle cx="500" cy="300" r="4" fill="#2F5BFF" opacity="0.4" />
        <circle cx="900" cy="200" r="4" fill="#2F5BFF" opacity="0.4" />
      </svg>

      <div className="relative z-10 flex flex-col items-center justify-center px-4 py-12 lg:px-8 lg:py-14">
        <div className="relative w-full max-w-md glass-container lg:max-w-[1400px] lg:rounded-[30px] lg:border lg:border-white/50 lg:bg-white/20 lg:backdrop-blur-xl lg:shadow-[0_30px_90px_-45px_rgba(47,91,255,0.65)] lg:px-10 lg:py-8 xl:px-12 xl:py-10">
          <div className="lg:grid lg:grid-cols-[0.98fr_1.02fr] lg:gap-16 lg:items-center">
            <div className="lg:sticky lg:top-10">
              {/* PROFILE */}
              <div className="text-center mb-10 lg:text-left lg:mb-6">
                <div className="w-32 h-32 mx-auto mb-6 relative lg:mx-0 lg:w-32 lg:h-32 lg:mb-3">
                  <div className="blue-radial-glow" />

                  <div className="w-full h-full bg-gradient-to-br from-[#2F5BFF] to-[#3C66F5] rounded-full flex items-center justify-center shadow-lg relative z-10 overflow-hidden">
                    <Image
                      src="/logo.png"
                      alt="FXPayout Logo"
                      width={128}
                      height={128}
                      className="object-contain filter drop-shadow-lg rounded-full"
                      priority
                    />
                  </div>
                </div>

                <h1 className="text-4xl font-bold mb-3 lg:text-5xl lg:leading-tight lg:mb-2" style={{ color: '#111827' }}>
                  {t.brand.name}
                </h1>

                <p className="text-sm leading-relaxed mb-8 lg:max-w-[440px] lg:text-[16px] lg:leading-7 lg:mb-0" style={{ color: '#374151' }}>
                  {t.hero.description}
                </p>
              </div>

              <div className={`mb-6 flex justify-end lg:absolute lg:top-6 lg:z-30 lg:mb-0 ${locale === 'ar' ? 'lg:left-6 lg:right-auto' : 'lg:right-6 lg:left-auto'}`}>
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setIsLanguageMenuOpen((prev) => !prev)}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#2F5BFF]/20 bg-white/75 text-sm font-semibold text-[#2F5BFF] shadow-[0_10px_20px_-18px_rgba(47,91,255,0.9)] lg:w-auto lg:min-w-[104px] lg:gap-2 lg:px-3"
                    aria-label={t.language.changeLanguage}
                  >
                    <Languages className="h-5 w-5" aria-hidden="true" />
                    <span className="hidden text-[10px] font-bold uppercase tracking-[0.28em] text-[#2F5BFF] lg:inline-block">
                      {locale.toUpperCase()}
                    </span>
                  </button>

                  {isLanguageMenuOpen && (
                    <div className="absolute right-0 top-12 z-20 w-36 rounded-2xl border border-gray-200 bg-white/95 p-1 shadow-[0_16px_40px_-24px_rgba(15,23,42,0.7)] backdrop-blur-xl">
                      {languageOptions.map((option) => (
                        <button
                          key={option.code}
                          type="button"
                          onClick={() => {
                            setLocale(option.code);
                            window.localStorage.setItem('fxpayout-locale', option.code);
                            window.localStorage.setItem('fxpayout-locale-manual', '1');
                            setIsLanguageMenuOpen(false);
                          }}
                          className="flex w-full items-center justify-between rounded-xl px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-blue-50 hover:text-[#2F5BFF]"
                        >
                          <span>{option.label}</span>
                          <span className="text-xs text-gray-400">{option.code.toUpperCase()}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="mb-12 lg:mb-0 lg:mt-6">
                <div className="grid grid-cols-2 gap-4 lg:items-center">
                  {/* WEBSITE */}
                  <div className="cta-button">
                    <a
                      href="https://fxpayout.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex min-h-[68px] w-full items-center justify-center rounded-2xl bg-gradient-to-r from-[#2F5BFF] to-[#3C66F5] px-6 py-4 text-base font-semibold leading-none tracking-[-0.01em] text-white shadow-[0_10px_26px_-18px_rgba(47,91,255,0.9)]"
                    >
                      {t.hero.officialWebsite}
                    </a>
                  </div>

                  {/* CALCULATOR */}
                  <div className="cta-button">
                    <a
                      href="https://www.fxpayout.com/calculator"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex min-h-[68px] w-full items-center justify-center rounded-2xl border-2 border-[#2F5BFF] px-6 py-4 text-base font-semibold leading-none tracking-[-0.01em] text-[#2F5BFF] bg-white/60 shadow-[0_10px_26px_-18px_rgba(47,91,255,0.7)]"
                    >
                      {t.hero.calculateRebate}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="premium-card-shell group rounded-[28px] border border-white/45 bg-[linear-gradient(180deg,rgba(255,255,255,0.62),rgba(237,244,255,0.72))] p-5 shadow-[0_24px_60px_-36px_rgba(47,91,255,0.72)] backdrop-blur-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#2F5BFF]">{t.summary.brokerPartner}</p>
                    <h3 className="text-[22px] font-bold text-gray-900 leading-none">{t.summary.partnerCount}</h3>
                  </div>
                  <div className="rounded-2xl bg-[linear-gradient(135deg,#2F5BFF,#4A7CFF,#78B6FF)] px-3 py-1.5 text-[11px] font-semibold tracking-[0.18em] text-white shadow-[0_10px_24px_-14px_rgba(47,91,255,0.9)] ring-1 ring-white/20">
                    {t.summary.badge}
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  {brokers.slice(0, 4).map((broker, idx) => (
                    <div key={idx} className="card-3d-soft rounded-[20px] border border-[#E8F0FF] bg-white/72 p-3 shadow-[0_14px_30px_-28px_rgba(47,91,255,0.65)] backdrop-blur-md">
                      <div className="flex items-center gap-2.5">
                        <img
                          src={broker.name === 'Headway' ? '/headway-logo.png' : `https://www.google.com/s2/favicons?sz=128&domain=${broker.domain}`}
                          alt={broker.name}
                          width={32}
                          height={32}
                          className="h-8 w-8 rounded-xl border border-[#E8F0FF] bg-white"
                        />
                        <div>
                          <p className="text-xs font-semibold text-gray-900">{broker.name}</p>
                          <p className="text-[9px] text-gray-500">{broker.type === 'auto' ? t.broker.typeLabels.auto : broker.type === 'manual' ? t.broker.typeLabels.manual : broker.type === 'volume' ? t.broker.typeLabels.volume : broker.type}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 rounded-[26px] bg-[linear-gradient(135deg,#12245F,#2447B9,#4A7CFF)] p-4 text-white shadow-[0_20px_48px_-30px_rgba(15,23,42,0.92)] ring-1 ring-white/10">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.42em] text-blue-100/72">{t.summary.averageRebateLabel}</span>
                    <span className="text-[32px] font-black leading-none tracking-[-0.08em] text-white drop-shadow-[0_0_18px_rgba(125,211,252,0.3)]">{t.summary.averageRebateValue}</span>
                  </div>
                  <div className="mt-4 h-2 rounded-full bg-white/12 ring-1 ring-inset ring-white/10 overflow-hidden">
                    <div className="progress-shimmer h-full w-[78%] rounded-full bg-[linear-gradient(135deg,#ffffff_0%,#90d9ff_18%,#2f5bff_48%,#4f7dff_72%,#85d6ff_100%)] shadow-[0_0_20px_rgba(47,91,255,0.42),0_0_10px_rgba(255,255,255,0.18)]" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:pt-8 lg:col-span-2">
            {/* BROKER LIST */}
            <div className="mb-12 w-full lg:mb-10">
              <h2 className="text-2xl font-bold text-center mb-8 lg:text-left lg:mb-5" style={{ color: '#111827' }}>
                {t.broker.sectionTitle}
              </h2>

              <div className="card-3d mb-6 rounded-[28px] border border-[#E8F0FF] bg-[linear-gradient(180deg,#F8FBFF_0%,#EEF4FF_100%)] p-5 shadow-[0_20px_50px_-38px_rgba(47,91,255,0.7)] lg:p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#2F5BFF] to-[#4A7CFF] text-white shadow-[0_14px_30px_-18px_rgba(47,91,255,0.9)]">
                    <FileText className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-900">{t.onboarding.title}</h3>
                    <p className="text-sm text-gray-600">{t.onboarding.subtitle}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {t.onboarding.steps.map((step, index) => (
                    <details key={index} className="card-3d-soft group rounded-2xl border border-white/70 bg-white/70 px-4 py-3 shadow-[0_12px_24px_-24px_rgba(47,91,255,0.55)]">
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#EFF4FF] text-sm font-semibold text-[#2F5BFF]">
                            {index + 1}
                          </span>
                          <span className="text-sm font-semibold text-gray-900">{step.title}</span>
                        </div>
                        <span className="text-[#2F5BFF] transition group-open:rotate-180">
                          <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
                            <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                      </summary>
                      <p className="mt-3 pl-11 text-sm leading-6 text-gray-600">{step.description}</p>
                    </details>
                  ))}
                </div>

                <div className="card-3d-soft mt-4 rounded-2xl border border-[#D9E7FF] bg-white/80 p-4 shadow-[0_10px_24px_-22px_rgba(47,91,255,0.7)]">
                  <p className="text-sm leading-6 text-gray-700">{t.onboarding.helpCta}</p>
                  <a
                    href="#support-admin"
                    className="mt-3 inline-flex items-center rounded-xl bg-gradient-to-r from-[#2F5BFF] to-[#3C66F5] px-4 py-2.5 text-sm font-semibold text-white shadow-[0_12px_24px_-18px_rgba(47,91,255,0.9)] transition hover:opacity-95"
                  >
                    {t.onboarding.helpButton}
                  </a>
                </div>
              </div>

              <div className="card-3d mb-6 rounded-[28px] border border-[#E8F0FF] bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FBFF_100%)] p-4 shadow-[0_18px_48px_-32px_rgba(47,91,255,0.65)] backdrop-blur-xl">
                <div className="mb-4 inline-flex w-full items-center rounded-2xl bg-[#EEF3FF] p-1.5">
                  {regionTabs.map((tab) => {
                    const isActive = selectedTab === tab.key;

                      return (
                        <button
                          key={tab.key}
                          type="button"
                          onClick={() => setSelectedTab(tab.key)}
                          className={`flex-1 rounded-xl px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                            isActive
                              ? 'bg-gradient-to-r from-[#2F5BFF] to-[#3C66F5] text-white shadow-[0_8px_20px_-14px_rgba(47,91,255,0.9)]'
                              : 'text-gray-600 hover:text-gray-900'
                          }`}
                        >
                          {t.broker.regionTabs[tab.key]}
                        </button>
                      );
                    })}
                </div>

                <div className="mb-4">
                  <div className="relative">
                    <span className="pointer-events-none absolute inset-y-0 left-4 flex items-center text-gray-400">
                      <svg viewBox="0 0 24 24" fill="none" className="h-4.5 w-4.5" aria-hidden="true">
                        <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
                      </svg>
                    </span>
                    <input
                      type="search"
                      value={searchTerm}
                      onChange={(event) => setSearchTerm(event.target.value)}
                      placeholder={t.broker.searchPlaceholder}
                      className="w-full rounded-2xl border border-gray-200 bg-white/80 py-3 pl-12 pr-4 text-sm text-gray-900 outline-none transition focus:border-[#2F5BFF] focus:ring-2 focus:ring-[#2F5BFF]/10"
                    />
                  </div>
                </div>

                <div className="mb-4 flex justify-center">
                  <div className="inline-flex w-full max-w-2xl items-stretch rounded-2xl border border-gray-200 bg-white p-1 shadow-[0_10px_30px_-24px_rgba(15,23,42,0.45)]">
                    {rebateOptions.map((option) => {
                      const isActive = rebateFilter === option.key;

                      return (
                        <button
                          key={option.key}
                          type="button"
                          onClick={() => setRebateFilter(option.key)}
                          className={`group relative flex-1 rounded-xl px-3 py-3 text-sm font-semibold transition-all duration-200 ease-out active:scale-[0.98] ${
                            isActive
                              ? 'bg-gradient-to-r from-[#2F5BFF] to-[#3C66F5] text-white shadow-[0_10px_24px_-14px_rgba(47,91,255,0.9)]'
                              : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                          }`}
                        >
                          <span className="relative z-10 flex items-center justify-center whitespace-nowrap">
                            {option.label}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-sm font-semibold text-gray-900">
                    {brokerCountLabel}
                  </span>
                </div>
              </div>

              <div className="space-y-3 max-w-full lg:grid lg:grid-cols-2 xl:grid-cols-3 lg:gap-4 lg:items-stretch">
                {visibleBrokers.length > 0 ? (
                  visibleBrokers.map((broker, idx) => (
                    <a
                      key={idx}
                      href={broker.ibLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card-3d block rounded-[24px] border border-[#EAF1FF] bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FBFF_100%)] p-4 shadow-[0_16px_36px_-28px_rgba(47,91,255,0.6)] transition hover:-translate-y-1 hover:border-[#CFE0FF] hover:shadow-[0_20px_52px_-32px_rgba(47,91,255,0.7)] lg:p-4"
                    >
                      <div className="flex items-center gap-4 mb-3 pb-3 border-b border-gray-200 lg:gap-3 lg:mb-3 lg:pb-3">
                        <img
                          src={broker.name === 'Headway' ? '/headway-logo.png' : `https://www.google.com/s2/favicons?sz=128&domain=${broker.domain}`}
                          alt={broker.name}
                          width={36}
                          height={36}
                          className="w-9 h-9 rounded-lg"
                        />

                        <div className="flex-1">
                          <h3 className="font-bold text-base" style={{ color: '#111827' }}>
                            {broker.name}
                          </h3>
                        </div>

                        <span
                          className="text-xs px-3 py-1 rounded-full font-semibold whitespace-nowrap"
                          style={{
                            backgroundColor: broker.type === 'auto' ? '#DBEAFE' : '#FEF3C7',
                            color: broker.type === 'auto' ? '#0369A1' : '#92400E',
                          }}
                        >
                          {broker.type === 'auto' ? t.broker.typeLabels.auto : broker.type === 'manual' ? t.broker.typeLabels.manual : broker.type === 'volume' ? t.broker.typeLabels.volume : broker.type}
                        </span>
                      </div>

                      <div className="grid grid-cols-3 gap-2">
                        {broker.instruments.map((instrument, iIdx) => (
                          <div
                            key={iIdx}
                            className="card-3d-soft rounded-xl border border-[#E6F0FF] bg-[linear-gradient(180deg,#F8FBFF_0%,#EEF4FF_100%)] p-2.5 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]"
                          >
                            <p className="font-semibold text-gray-800 text-[11px] mb-1">
                              {t.broker.instruments?.[instrument.name as keyof typeof t.broker.instruments] ?? instrument.name}
                            </p>

                            {instrument.rebate !== undefined && (
                              <p className="text-[#2F5BFF] font-bold text-sm">
                                ${instrument.rebate.toFixed(2)}
                              </p>
                            )}

                            {instrument.rebateText && (
                              <p className="text-gray-600 text-[10px] mt-1 leading-tight">
                                {t.broker.rebateTextLabels?.[instrument.rebateText as keyof typeof t.broker.rebateTextLabels] ?? instrument.rebateText}
                              </p>
                            )}
                          </div>
                        ))}
                      </div>

                      <div className="mt-3 text-right">
                        <span className="inline-block px-3 py-1.5 bg-[#2F5BFF] text-white text-[11px] font-semibold rounded-lg">
                          {t.broker.applyNow}
                        </span>
                      </div>
                    </a>
                  ))
                ) : (
                  <div className="col-span-full rounded-[28px] border border-dashed border-gray-300 bg-white/60 px-8 py-14 text-center lg:col-span-3">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#2F5BFF] to-[#3C66F5] text-white shadow-[0_16px_40px_-18px_rgba(47,91,255,0.9)]">
                      <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8" aria-hidden="true">
                        <path d="M12 3v18M3 12h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </div>
                    <h3 className="mt-5 text-lg font-semibold text-gray-900">No broker found.</h3>
                    <button
                      type="button"
                      onClick={resetFilters}
                      className="mt-5 rounded-2xl bg-[#2F5BFF] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_14px_28px_-18px_rgba(47,91,255,0.9)] transition hover:opacity-90"
                    >
                      Reset Filters
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* SUPPORT / ADMIN */}
            <div id="support-admin" className="mb-12 w-full lg:mb-10">
              <div className="card-3d bg-white/70 backdrop-blur-md rounded-2xl p-6 border border-gray-200 shadow-sm lg:p-7">
                <h2 className="text-xl font-bold text-center mb-2 text-gray-900">
                  {t.support.title}
                </h2>

                <p className="text-sm text-center text-gray-600 mb-6">
                  {t.support.description}
                </p>

                <div className="space-y-3">
                  <a
                    href="https://wa.me/6282125597634"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-3d-soft flex items-center justify-between px-5 py-4 rounded-xl border border-gray-200 bg-white hover:bg-blue-50 transition"
                  >
                    <span className="font-medium text-gray-800">
                      {t.support.one}
                    </span>

                    <span className="text-[#2F5BFF] font-semibold text-sm">
                      {t.support.whatsapp}
                    </span>
                  </a>

                  <a
                    href="https://wa.me/639386828446"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-3d-soft flex items-center justify-between px-5 py-4 rounded-xl border border-gray-200 bg-white hover:bg-blue-50 transition"
                  >
                    <span className="font-medium text-gray-800">
                      {t.support.two}
                    </span>

                    <span className="text-[#2F5BFF] font-semibold text-sm">
                      {t.support.whatsapp}
                    </span>
                  </a>

                  <a
                    href="https://whatsapp.com/channel/0029VbBwSxf8fewzsFqX8B2f"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-3d-soft flex items-center justify-between px-5 py-4 rounded-xl bg-gradient-to-r from-[#2F5BFF] to-[#3C66F5] text-white shadow-md hover:opacity-90 transition"
                  >
                    <span className="font-semibold">
                      {t.support.channel}
                    </span>

                    <span className="text-sm">
                      {t.support.join}
                    </span>
                  </a>
                </div>
              </div>
            </div>

            <div className="mb-12 w-full lg:mb-10">
              <div className="card-3d rounded-[28px] border border-[#E8F0FF] bg-[linear-gradient(180deg,#F8FBFF_0%,#EEF4FF_100%)] p-5 shadow-[0_20px_50px_-38px_rgba(47,91,255,0.7)] lg:p-6">
                <div className="mb-3 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.34em] text-[#2F5BFF]">{t.reviews.title}</p>
                    <span className="text-lg font-semibold text-gray-900">{averageRating}</span>
                  </div>
                  <div className="flex items-center gap-1 rounded-full bg-[#EFF4FF] px-3 py-1 text-[#2F5BFF]">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="text-sm font-semibold">{averageRating}</span>
                  </div>
                </div>

                <form onSubmit={handleSubmitReview} className="space-y-3">
                  <div>
                    <input
                      type="text"
                      value={reviewName}
                      onChange={(event) => setReviewName(event.target.value)}
                      placeholder={t.reviews.namePlaceholder}
                      className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-[#2F5BFF] focus:ring-2 focus:ring-[#2F5BFF]/10"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.24em] text-gray-500">
                      {t.reviews.ratingLabel}
                    </label>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((value) => (
                        <button
                          key={value}
                          type="button"
                          onClick={() => setReviewRating(value)}
                          className="rounded-lg p-1"
                          aria-label={`Rate ${value} stars`}
                        >
                          <Star className={`h-5 w-5 ${value <= reviewRating ? 'fill-current text-[#F59E0B]' : 'text-gray-300'}`} />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <textarea
                      value={reviewComment}
                      onChange={(event) => setReviewComment(event.target.value)}
                      placeholder={t.reviews.commentPlaceholder}
                      rows={3}
                      className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-[#2F5BFF] focus:ring-2 focus:ring-[#2F5BFF]/10"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-2xl bg-gradient-to-r from-[#2F5BFF] to-[#3C66F5] px-4 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_-16px_rgba(47,91,255,0.9)]"
                  >
                    {t.reviews.submit}
                  </button>
                </form>

                <div className="mt-4 space-y-3">
                  {visibleReviews.map((review) => (
                    <div key={review.id} className="card-3d-soft rounded-2xl border border-gray-100 bg-gray-50 px-3 py-3">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-sm font-semibold text-gray-900">{review.name}</span>
                        <span className="text-[10px] text-gray-400">{review.date}</span>
                      </div>
                      <div className="mt-1 flex gap-1">
                        {[...Array(5)].map((_, index) => (
                          <Star key={index} className={`h-3.5 w-3.5 ${index < review.rating ? 'fill-current text-[#F59E0B]' : 'text-gray-300'}`} />
                        ))}
                      </div>
                      <p className="mt-2 text-sm leading-5 text-gray-600">{review.comment}</p>
                    </div>
                  ))}
                </div>

                {sortedReviews.length > 5 && (
                  <button
                    type="button"
                    onClick={() => setShowAllReviews((current) => !current)}
                    className="mt-4 w-full rounded-xl border border-[#D6E5FF] bg-white px-4 py-2.5 text-sm font-semibold text-[#2F5BFF] transition hover:bg-[#F4F8FF]"
                  >
                    {showAllReviews ? t.reviews.showLess : `${t.reviews.viewAll} (${sortedReviews.length})`}
                  </button>
                )}
              </div>
            </div>

            {/* FOOTER */}
            <div className="text-center text-xs space-y-3 border-t border-[#e5e7eb] pt-10" style={{ color: '#374151' }}>
              <p className="font-semibold">{t.footer.disclaimerTitle}</p>

              <p>
                {t.footer.disclaimer}
              </p>

              <p className="pt-2 font-medium">
                {t.footer.copyright}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}