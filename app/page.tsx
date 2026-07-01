'use client';

import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import { brokers } from '@/lib/brokers';

export default function FXPayoutPage() {
  type RegionTab = 'indonesia' | 'global' | 'all';
  type RebateFilter = 'all' | 'auto' | 'manual';
  type Locale = 'en' | 'id';

  const indonesiaBrokerNames = ['Finex', 'MIFX', 'HSB'];
  const regionTabs: { key: RegionTab }[] = [
    { key: 'indonesia' },
    { key: 'global' },
    { key: 'all' },
  ];

  const rebateOptions: { key: RebateFilter; label: string }[] = [
    { key: 'all', label: 'All Rebates' },
    { key: 'auto', label: 'Auto Rebate' },
    { key: 'manual', label: 'Manual Rebate' },
  ];

  const [selectedTab, setSelectedTab] = useState<RegionTab>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [rebateFilter, setRebateFilter] = useState<RebateFilter>('all');
  const [locale, setLocale] = useState<Locale>('en');

  const translations = {
    en: {
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
      sectionTitle: 'List Broker Partner',
      infoTitle: 'Getting Started with FXPayout',
      infoSubtitle: 'Complete the following steps to ensure your trading account is successfully connected to the FXPayout rebate system.',
      stepLabel: 'Step',
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
      countAvailable: `${brokers.length} Brokers Available`,
      countShowing: (shown: number, total: number) => `Showing ${shown} of ${total} Brokers`,
      applyNow: 'Register Now →',
      supportTitle: 'Need Help?',
      supportDescription: 'The FXPayout admin team is ready to help you with broker registration, account validation, and rebate claims.',
      supportOne: 'Contact Support FXPayout 1',
      supportTwo: 'Contact Support FXPayout 2',
      supportChannel: 'Join WhatsApp Channel',
    },
    id: {
      regionTabs: {
        indonesia: 'Indonesia',
        global: 'Global',
        all: 'Semua Broker',
      },
      searchPlaceholder: 'Cari broker...',
      rebateOptions: {
        all: 'Semua Rebate',
        auto: 'Auto Rebate',
        manual: 'Manual Rebate',
      },
      sectionTitle: 'Daftar Broker Partner',
      infoTitle: 'Memulai dengan FXPayout',
      infoSubtitle: 'Lengkapi langkah-langkah berikut untuk memastikan akun trading Anda berhasil terhubung ke sistem rebate FXPayout.',
      stepLabel: 'Langkah',
      steps: [
        {
          title: 'Buat Akun FXPayout Anda',
          description:
            'Sebelum mendaftar broker, buat akun FXPayout Anda di https://fxpayout.com. Trader Dashboard digunakan untuk memvalidasi akun trading, memantau cashback, dan menarik rebate.',
        },
        {
          title: 'Daftarkan Broker Anda',
          description:
            'Kembali ke halaman ini dan daftarkan broker pilihan Anda menggunakan alamat email yang sama dengan akun FXPayout Anda sebisa mungkin.',
        },
        {
          title: 'Hubungkan Akun Trading Anda',
          description:
            'Setelah akun broker Anda dibuat, masuk ke FXPayout Trader Dashboard, buka halaman Brokers, lalu tambahkan nomor akun trading Anda agar sistem dapat mendeteksi aktivitas trading dan menghitung rebate secara otomatis.',
        },
        {
          title: 'Atur Metode Penarikan Anda',
          description:
            'Tambahkan metode penarikan pilihan Anda, seperti rekening bank atau dompet crypto, untuk menerima pembayaran cashback dengan aman.',
        },
        {
          title: 'Mulai Trading & Dapatkan Cashback',
          description:
            'Setelah akun trading Anda berhasil divalidasi, cashback Anda akan dilacak secara otomatis di Trader Dashboard dan dapat ditarik sesuai kebijakan penarikan FXPayout.',
        },
      ],
      countAvailable: `${brokers.length} Broker Tersedia`,
      countShowing: (shown: number, total: number) => `Menampilkan ${shown} dari ${total} Broker`,
      applyNow: 'Daftar Sekarang →',
      supportTitle: 'Butuh Bantuan?',
      supportDescription: 'Tim admin FXPayout siap membantu Anda terkait pendaftaran broker, validasi akun, maupun klaim rebate.',
      supportOne: 'Hubungi Admin FXPayout 1',
      supportTwo: 'Hubungi Admin FXPayout 2',
      supportChannel: 'Gabung Saluran WhatsApp',
    },
  } as const;

  const t = locale === 'id' ? translations.id : translations.en;

  useEffect(() => {
    const storedTab = window.sessionStorage.getItem('fxpayout-broker-tab');
    if (storedTab === 'indonesia' || storedTab === 'global' || storedTab === 'all') {
      setSelectedTab(storedTab);
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
        } else if (location) {
          setLocale('en');
          if (!storedTab) {
            setSelectedTab('global');
          }
        } else {
          setLocale('en');
          if (!storedTab) {
            setSelectedTab('all');
          }
        }
      })
      .catch(() => {
        if (isMounted) {
          setLocale('en');
          if (!storedTab) {
            setSelectedTab('all');
          }
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    window.sessionStorage.setItem('fxpayout-broker-tab', selectedTab);
  }, [selectedTab]);

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
      ? t.countAvailable
      : t.countShowing(visibleBrokers.length, brokers.length);

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
        <div className="w-full max-w-md glass-container lg:max-w-[1400px] lg:rounded-[30px] lg:border lg:border-white/50 lg:bg-white/20 lg:backdrop-blur-xl lg:shadow-[0_30px_90px_-45px_rgba(47,91,255,0.65)] lg:px-10 lg:py-8 xl:px-12 xl:py-10">
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
                  Fxpayout.com
                </h1>

                <p className="text-sm leading-relaxed mb-8 lg:max-w-[440px] lg:text-[16px] lg:leading-7 lg:mb-0" style={{ color: '#374151' }}>
                  Maksimalkan profit trading Anda dengan cashback & rebate hingga 90% dari berbagai broker terpercaya. Trading tetap berjalan seperti biasa, dan Anda mendapatkan keuntungan tambahan dari setiap lot yang diperdagangkan.
                </p>
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
                      Official FXPayout
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
                      Calculate Rebate
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="premium-card-shell group p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#2F5BFF]">Broker Partner</p>
                    <h3 className="text-[22px] font-bold text-gray-900 leading-none">+20 Broker</h3>
                  </div>
                  <div className="rounded-2xl bg-[linear-gradient(135deg,rgba(255,255,255,0.35),rgba(164,205,255,0.42),rgba(47,91,255,0.72))] px-3 py-1.5 text-[11px] font-semibold tracking-[0.18em] text-white shadow-[0_10px_24px_-14px_rgba(47,91,255,0.9)] ring-1 ring-white/20 backdrop-blur-md">
                    Cashback
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  {brokers.slice(0, 4).map((broker, idx) => (
                    <div key={idx} className="rounded-[20px] border border-white/35 bg-white/22 p-3 shadow-[0_12px_34px_-28px_rgba(15,23,42,0.7)] backdrop-blur-md">
                      <div className="flex items-center gap-2.5">
                        <img
                          src={broker.name === 'Headway' ? '/headway-logo.png' : `https://www.google.com/s2/favicons?sz=128&domain=${broker.domain}`}
                          alt={broker.name}
                          width={32}
                          height={32}
                          className="h-8 w-8 rounded-xl"
                        />
                        <div>
                          <p className="text-xs font-semibold text-gray-900">{broker.name}</p>
                          <p className="text-[9px] text-gray-500">{broker.type}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 rounded-[26px] bg-[linear-gradient(180deg,rgba(11,26,56,0.22),rgba(14,30,62,0.14))] p-4 text-white shadow-[0_18px_50px_-32px_rgba(15,23,42,0.92)] ring-1 ring-white/12 backdrop-blur-xl">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.42em] text-blue-100/72">Rebate Rata-rata</span>
                    <span className="text-[32px] font-black leading-none tracking-[-0.08em] text-white drop-shadow-[0_0_18px_rgba(125,211,252,0.3)]">Up to 90%</span>
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
                {t.sectionTitle}
              </h2>

              <div className="mb-6 rounded-[28px] border border-[#E5F0FF] bg-[linear-gradient(180deg,#F8FBFF_0%,#EEF4FF_100%)] p-5 shadow-[0_20px_50px_-38px_rgba(47,91,255,0.7)] lg:p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#2F5BFF] to-[#4A7CFF] text-white shadow-[0_14px_30px_-18px_rgba(47,91,255,0.9)]">
                    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
                      <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm0 3a1 1 0 1 1-1 1 1 1 0 0 1 1-1Zm1.5 11h-3a.75.75 0 0 1 0-1.5h1.25V12h-1.25a.75.75 0 0 1 0-1.5h2a.75.75 0 0 1 .75.75v3.75h1.25a.75.75 0 0 1 0 1.5Z" fill="currentColor" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-900">{t.infoTitle}</h3>
                    <p className="text-sm text-gray-600">{t.infoSubtitle}</p>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute left-[1.45rem] top-3 bottom-3 w-px bg-gradient-to-b from-[#2F5BFF] via-[#89B8FF] to-transparent" aria-hidden="true" />
                  <div className="space-y-4">
                    {t.steps.map((step, index) => (
                      <div key={index} className="relative pl-14">
                        <div className="absolute left-0 top-1.5 flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#2F5BFF] to-[#4A7CFF] text-sm font-semibold text-white shadow-[0_16px_28px_-18px_rgba(47,91,255,0.95)]">
                          {index + 1}
                        </div>
                        <div className="rounded-2xl border border-white/70 bg-white/70 px-4 py-4 shadow-[0_14px_30px_-24px_rgba(47,91,255,0.55)]">
                          <div className="flex items-center gap-2">
                            <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-[#EFF4FF] text-base" aria-hidden="true">
                              {index === 0 ? '👤' : index === 1 ? '🧾' : index === 2 ? '🔗' : index === 3 ? '💳' : '📈'}
                            </span>
                            <span className="text-sm font-semibold text-gray-900">{step.title}</span>
                          </div>
                          <p className="mt-3 text-sm leading-6 text-gray-600">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mb-6 rounded-[28px] border border-gray-200/70 bg-white/60 p-4 shadow-[0_16px_48px_-32px_rgba(47,91,255,0.7)] backdrop-blur-xl">
                <div className="mb-4 inline-flex w-full items-center rounded-2xl bg-gray-100 p-1.5">
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
                          {t.regionTabs[tab.key]}
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
                      placeholder={t.searchPlaceholder}
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
                            {t.rebateOptions[option.key]}
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
                      className="block bg-white rounded-[20px] p-4 hover:shadow-lg transition border border-gray-100 lg:p-4 lg:hover:-translate-y-1 lg:hover:shadow-[0_18px_42px_-24px_rgba(47,91,255,0.6)]"
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
                          {broker.type.toUpperCase()}
                        </span>
                      </div>

                      <div className="grid grid-cols-3 gap-2">
                        {broker.instruments.map((instrument, iIdx) => (
                          <div
                            key={iIdx}
                            className="bg-gradient-to-b from-blue-50/80 to-blue-100/60 rounded-xl p-2.5 text-center border border-blue-200/50"
                          >
                            <p className="font-semibold text-gray-800 text-[11px] mb-1">
                              {instrument.name}
                            </p>

                            {instrument.rebate !== undefined && (
                              <p className="text-[#2F5BFF] font-bold text-sm">
                                ${instrument.rebate.toFixed(2)}
                              </p>
                            )}

                            {instrument.rebateText && (
                              <p className="text-gray-600 text-[10px] mt-1 leading-tight">
                                {instrument.rebateText}
                              </p>
                            )}
                          </div>
                        ))}
                      </div>

                      <div className="mt-3 text-right">
                        <span className="inline-block px-3 py-1.5 bg-[#2F5BFF] text-white text-[11px] font-semibold rounded-lg">
                          {t.applyNow}
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
            <div className="mb-12 w-full lg:mb-10">
              <div className="bg-white/70 backdrop-blur-md rounded-2xl p-6 border border-gray-200 shadow-sm lg:p-7">
                <h2 className="text-xl font-bold text-center mb-2 text-gray-900">
                  {t.supportTitle}
                </h2>

                <p className="text-sm text-center text-gray-600 mb-6">
                  {t.supportDescription}
                </p>

                <div className="space-y-3">
                  <a
                    href="https://wa.me/6282125597634"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-5 py-4 rounded-xl border border-gray-200 bg-white hover:bg-blue-50 transition"
                  >
                    <span className="font-medium text-gray-800">
                      {t.supportOne}
                    </span>

                    <span className="text-[#2F5BFF] font-semibold text-sm">
                      WhatsApp →
                    </span>
                  </a>

                  <a
                    href="https://wa.me/628984785573"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-5 py-4 rounded-xl border border-gray-200 bg-white hover:bg-blue-50 transition"
                  >
                    <span className="font-medium text-gray-800">
                      {t.supportTwo}
                    </span>

                    <span className="text-[#2F5BFF] font-semibold text-sm">
                      WhatsApp →
                    </span>
                  </a>

                  <a
                    href="https://whatsapp.com/channel/0029VbBwSxf8fewzsFqX8B2f"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-5 py-4 rounded-xl bg-gradient-to-r from-[#2F5BFF] to-[#3C66F5] text-white shadow-md hover:opacity-90 transition"
                  >
                    <span className="font-semibold">
                      {t.supportChannel}
                    </span>

                    <span className="text-sm">
                      Join →
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* FOOTER */}
            <div className="text-center text-xs space-y-3 border-t border-[#e5e7eb] pt-10" style={{ color: '#374151' }}>
              <p className="font-semibold">Forex Risk Disclaimer</p>

              <p>
                Trading forex melibatkan risiko tinggi. Pastikan Anda memahami risiko sebelum melakukan transaksi. FXPayout tidak bertanggung jawab atas kerugian finansial yang mungkin terjadi.
              </p>

              <p className="pt-2 font-medium">
                © 2026 FXPayout
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}