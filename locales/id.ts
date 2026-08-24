export const id = {
  language: {
    switchLabel: 'ID',
    changeLanguage: 'Ubah bahasa',
    switchToId: 'English',
    switchToEn: 'Bahasa Indonesia',
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
    logoAlt: 'Logo FXPayout',
  },
  hero: {
    title: 'FXPayout.com',
    description:
      'Maksimalkan performa trading Anda dengan cashback dan rebate dari broker terpercaya. Lanjutkan trading seperti biasa sambil mendapatkan nilai tambah pada setiap lot yang Anda jalankan.',
    officialWebsite: 'FXPayout Resmi',
    calculateRebate: 'Hitung Rebate',
  },
  summary: {
    brokerPartner: 'Broker Partner',
    partnerCount: '+20 Broker',
    badge: 'Cashback',
    averageRebateLabel: 'Rebate Rata-rata',
    averageRebateValue: 'Hingga 90%',
  },
  onboarding: {
    title: 'Memulai dengan FXPayout',
    subtitle:
      'Lengkapi langkah-langkah berikut untuk memastikan akun trading Anda berhasil terhubung ke sistem rebate FXPayout.',
    iconLabel: 'Panduan onboarding',
    steps: [
      {
        title: 'Buat Akun FXPayout Anda',
        description:
          'Buat akun resmi di https://fxpayout.com terlebih dahulu. Semua proses validasi akun trading dan pencairan rebate hanya diproses melalui dashboard FXPayout.',
      },
      {
        title: 'Daftarkan Broker Anda',
        description:
          'Pilih broker dari daftar partner lalu daftar menggunakan email yang sama seperti akun FXPayout agar proses sinkronisasi lebih cepat.',
      },
      {
        title: 'Hubungkan Akun Trading Anda',
        description:
          'Masuk ke Trader Dashboard FXPayout, buka menu Brokers, lalu input nomor akun trading Anda supaya sistem membaca histori trading secara otomatis.',
      },
      {
        title: 'Atur Metode Penarikan Anda',
        description:
          'Atur metode penarikan (bank atau crypto wallet) di dashboard FXPayout. Rebate hanya bisa di-withdraw melalui website FXPayout.com.',
      },
      {
        title: 'Mulai Trading & Dapatkan Cashback',
        description:
          'Setelah akun tervalidasi, Anda bisa trading seperti biasa dan cashback akan tercatat otomatis di dashboard untuk ditarik saat sudah tersedia.',
      },
    ],
    helpCta: 'Jika belum paham, hubungi admin sekarang. Tim admin akan bantu sampai Anda berhasil terdaftar.',
    helpButton: 'Hubungi Admin Sekarang',
  },
  reviews: {
    title: 'Ulasan Pengguna',
    subtitle: 'Dipercaya oleh trader',
    namePlaceholder: 'Nama Anda',
    ratingLabel: 'Rating Anda',
    commentPlaceholder: 'Bagikan pengalaman Anda tentang pendaftaran atau cashback.',
    submit: 'Kirim ulasan',
    viewAll: 'Lihat semua ulasan',
    showLess: 'Tampilkan lebih sedikit',
  },
  broker: {
    sectionTitle: 'Daftar Broker Partner',
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
    countAvailable: (count: number) => `${count} Broker Tersedia`,
    countShowing: (shown: number, total: number) => `Menampilkan ${shown} dari ${total} Broker`,
    applyNow: 'Daftar Sekarang →',
    copyIbLink: 'Salin Link IB',
    copied: 'Tersalin!',
    instruments: {
      eurUsd: 'EUR/USD',
      xauUsd: 'XAU/USD',
      audUsd: 'AUD/USD',
      crypto: 'Crypto',
      forex: 'Forex',
      gold: 'Gold',
    },
    rebateTextLabels: {
      upTo40TradingFee: 'Sampai 40% Biaya Trading',
      volumeCommission: 'Komisi Volume',
      spreadRevshare: '30% Spread Revshare',
    },
    typeLabels: {
      auto: 'Auto',
      manual: 'Manual',
      volume: 'Volume',
    },
    emptyTitle: 'Tidak ada broker yang ditemukan.',
    emptyButton: 'Reset Filter',
  },
  support: {
    title: 'Butuh Bantuan?',
    description:
      'Tim admin FXPayout siap membantu Anda terkait pendaftaran broker, validasi akun, maupun klaim rebate.',
    one: 'Hubungi Admin FXPayout 1',
    two: 'Hubungi Admin FXPayout 2',
    channel: 'Gabung Saluran WhatsApp',
    whatsapp: 'WhatsApp →',
    join: 'Gabung →',
  },
  footer: {
    disclaimerTitle: 'Syarat Risiko Forex',
    disclaimer:
      'Trading forex melibatkan risiko tinggi. Pastikan Anda memahami risikonya sebelum melakukan transaksi. FXPayout tidak bertanggung jawab atas kerugian finansial yang mungkin terjadi.',
    copyright: '© 2026 FXPayout',
  },
} as const;
