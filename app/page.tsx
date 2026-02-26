'use client';

import Image from 'next/image';

export default function FXPayoutPage() {
  const brokers = [
    { name: 'EXNESS', domain: 'exness.com', link: 'https://one.exnessonelink.com/a/8cegzmlbpk' },
    { name: 'VALETAX', domain: 'valetax.com', link: 'https://ma.valetax-indonesia.com/p/5808172' },
    { name: 'PU PRIME', domain: 'puprime.com', link: 'https://puvip.co/la-partners/id/0bGTzP0i' },
    { name: 'XM', domain: 'xm.com', link: 'https://affs.click/4gFt7' },
    { name: 'ZFX', domain: 'zfx.com', link: 'https://my.zm-area.com/reg/truely?agentnumber=Z940752S4' },
    { name: 'HFM', domain: 'hfm.com', link: 'https://register.hfmtrade-ind.com/sv/en/new-live-account/?refid=30494425' },
    { name: 'VT MARKETS', domain: 'vtmarkets.com', link: 'https://www.vtmarkets.com/trade-now/?affid=22395035' },
    { name: 'FBS', domain: 'fbs.com', link: 'https://fbs.partners/?ibl=569605&ibp=17852638' },
    { name: 'TICKMILL', domain: 'tickmill.com', link: 'https://secure.itr-tickmill.com/?utm_campaign=ib_link&utm_content=IB89045395&utm_medium=Open+Account&utm_source=link&lp=https%3A%2F%2Fsecure.itr-tickmill.com%2Fid%2Fsign-up%2F' },
    { name: 'DERIV', domain: 'deriv.com', link: 'https://deriv.partners/rx?sidc=07DDC1C5-AE63-4FC9-A23D-C6DA444F9225&utm_campaign=dynamicworks&utm_medium=affiliate&utm_source=CU279711' },
    { name: 'FP MARKETS', domain: 'fpmarkets.com', link: 'https://portal.fpmarkets.com/register?redir=stv&fpm-affiliate-utm-source=IB&fpm-affiliate-agt=64952' },
    { name: 'OCTAFX', domain: 'octafx.com', link: 'https://octa.click/bJLCLmX8zDZ?ib=47807098' },
    { name: 'PEPPERSTONE', domain: 'pepperstone.com', link: 'https://trk.pepperstonepartners.com/aff_c?offer_id=367&aff_id=42191' },
    { name: 'AXI', domain: 'axi.com', link: 'https://www.axi.com/int/live-account?promocode=4736053' },
    { name: 'FINEX', domain: 'finex.co.id', link: 'https://track.finex.co.id/click?pid=5759&offer_id=12' },
    { name: 'VANTAGE', domain: 'vantagemarkets.com', link: 'https://www.vantagemarketsea.com/id/open-live-account/?affid=MjA3OTY2Mzk=' },
    { name: 'EC MARKETS', domain: 'ecmarkets.com', link: 'https://i.ecmarkets.sc/api/client/pm/2/JTX4W' },
    { name: 'HEADWAY', domain: 'headway.com', link: 'https://headway.partners/user/signup?hwp=8435da' },
    { name: 'OANDA', domain: 'oanda.com', link: 'https://go.oanda.com/visit/?bta=39193&brand=oanda' },
  ];

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
        {/* Grid lines - subtle */}
        <line x1="100" y1="200" x2="1100" y2="200" stroke="#e5e7eb" strokeWidth="1" opacity="0.3" />
        <line x1="100" y1="400" x2="1100" y2="400" stroke="#e5e7eb" strokeWidth="1" opacity="0.3" />
        <line x1="100" y1="600" x2="1100" y2="600" stroke="#e5e7eb" strokeWidth="1" opacity="0.3" />
        
        {/* Chart Line 1 - Main uptrend */}
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
        
        {/* Chart Line 2 - Secondary trend */}
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
        
        {/* Accent points */}
        <circle cx="500" cy="300" r="4" fill="#2F5BFF" opacity="0.4" />
        <circle cx="900" cy="200" r="4" fill="#2F5BFF" opacity="0.4" />
      </svg>

      <div className="relative z-10 flex flex-col items-center justify-center px-4 py-12">
        <div className="w-full max-w-md glass-container">
          {/* Profile Section */}
          <div className="text-center mb-12">
            {/* Logo/Avatar with subtle blue glow */}
            <div className="w-32 h-32 mx-auto mb-6 relative">
              {/* glow effect */}
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

            {/* Profile Info */}
            <h1 className="text-4xl font-bold mb-3" style={{ color: '#111827' }}>
              Fxpayout.com
            </h1>
            <p className="text-sm leading-relaxed mb-8" style={{ color: '#374151' }}>
              Maksimalkan profit trading Anda dengan cashback & rebate hingga 90% dari berbagai broker terpercaya. Trading tetap berjalan seperti biasa, dan Anda mendapatkan keuntungan tambahan dari setiap lot yang diperdagangkan.
            </p>
          </div>

          {/* Main CTA Buttons */}
          <div className="space-y-4 mb-12">
            {/* Button 0: Website Resmi */}
            <div className="cta-button">
              <a
                href="https://fxpayout.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block px-6 py-4 bg-gradient-to-r from-[#2F5BFF] to-[#3C66F5] text-white rounded-[14px] hover:shadow-2xl hover:shadow-blue-500/50 hover:-translate-y-1 hover:scale-105 text-center"
                style={{
                  fontWeight: 'bold',
                  fontSize: '1.125rem',
                  transition: 'all 0.3s ease'
                }}
              >
                Kunjungi Website Resmi
              </a>
              <p className="text-sm mt-2 text-center" style={{ color: '#374151' }}>
                Lihat penawaran dan informasi lengkap.
              </p>
            </div>

            {/* Button 1: Join Grup */}
            <div className="cta-button">
              <button
                className="w-full px-6 py-4 bg-gradient-to-r from-[#2F5BFF] to-[#3C66F5] text-white rounded-[14px] hover:shadow-2xl hover:shadow-blue-500/50 hover:-translate-y-1 hover:scale-105"
                style={{
                  fontWeight: 'bold',
                  fontSize: '1.125rem',
                  transition: 'all 0.3s ease'
                }}
              >
                Grup Khusus Clipper Fxpayout
              </button>
              <p className="text-sm mt-2 text-center" style={{ color: '#374151' }}>
                Akses sinyal, edukasi, dan update rebate terbaru.
              </p>
            </div>

            {/* Button 2: Perkalian Rebate */}
            <div className="cta-button">
                <button
                  className="w-full px-6 py-4 border-2 border-[#2F5BFF] text-[#2F5BFF] rounded-[14px] bg-white hover:shadow-2xl hover:shadow-blue-500/30 hover:-translate-y-1 hover:scale-105"
                style={{
                  fontWeight: 'bold',
                  fontSize: '1.125rem',
                  transition: 'all 0.3s ease'
                }}
              >
                Perkalian Rebate
              </button>
              <p className="text-slate-600 text-sm mt-2 text-center">
                Maksimalkan profit dari setiap lot trading Anda.
              </p>
            </div>
          </div>

          {/* Broker List Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-center mb-8" style={{ color: '#111827' }}>
              List Broker Partner
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {brokers.map((broker, idx) => (
                <a
                  key={idx}
                  href={broker.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="broker-card flex flex-col items-center justify-center gap-3 p-4"
                >
                  <img
                    src={broker.name === 'HEADWAY' ? '/headway-logo.png' : `https://www.google.com/s2/favicons?sz=128&domain=${broker.domain}`}
                    alt={`${broker.name} logo`}
                    width={40}
                    height={40}
                    style={{
                      objectFit: 'contain',
                      borderRadius: '8px'
                    }}
                  />
                  {/* Broker Name */}
                  <span className="text-xs font-semibold text-center transition-colors duration-300 group-hover:text-[#2F5BFF]">
                    {broker.name}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="text-center text-xs space-y-3 border-t border-[#e5e7eb] pt-8" style={{ color: '#374151' }}>
            <p className="font-semibold">
              Forex Risk Disclaimer
            </p>
            <p className="leading-relaxed">
              Trading forex melibatkan risiko tinggi. Pastikan Anda memahami risiko sebelum melakukan transaksi. FXPayout tidak bertanggung jawab atas kerugian finansial yang mungkin terjadi.
            </p>
            <p className="pt-2 font-medium">
              © 2026 FXPayout. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
