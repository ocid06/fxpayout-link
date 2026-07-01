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
