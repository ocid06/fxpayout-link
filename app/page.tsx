'use client';

import Image from 'next/image';
import { brokers } from '@/lib/brokers';

export default function FXPayoutPage() {
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
              <a
                href="https://t.me/+P5ylfSvx1e1jMmI1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block px-6 py-4 bg-gradient-to-r from-[#2F5BFF] to-[#3C66F5] text-white rounded-[14px] hover:shadow-2xl hover:shadow-blue-500/50 hover:-translate-y-1 hover:scale-105 text-center"
                style={{
                  fontWeight: 'bold',
                  fontSize: '1.125rem',
                  transition: 'all 0.3s ease'
                }}
              >
                Grup Khusus Clipper Fxpayout
              </a>
              <p className="text-sm mt-2 text-center" style={{ color: '#374151' }}>
                Akses sinyal, edukasi, dan update rebate terbaru.
              </p>
            </div>

            {/* Button 2: Perkalian Rebate */}
            <div className="cta-button">
                <a
                  href="https://www.fxpayout.com/calculator"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block px-6 py-4 border-2 border-[#2F5BFF] text-[#2F5BFF] rounded-[14px] bg-white hover:shadow-2xl hover:shadow-blue-500/30 hover:-translate-y-1 hover:scale-105 text-center"
                style={{
                  fontWeight: 'bold',
                  fontSize: '1.125rem',
                  transition: 'all 0.3s ease'
                }}
              >
                Perkalian Rebate
              </a>
              <p className="text-slate-600 text-sm mt-2 text-center">
                Maksimalkan profit dari setiap lot trading Anda.
              </p>
            </div>
          </div>

          {/* Broker List Section */}
          <div className="mb-12 w-full">
            <h2 className="text-2xl font-bold text-center mb-8" style={{ color: '#111827' }}>
              List Broker Partner
            </h2>
            <div className="space-y-3 max-w-full">
              {brokers.map((broker, idx) => (
                <a
                  key={idx}
                  href={broker.ibLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white rounded-xl p-5 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 border border-gray-100"
                >
                  {/* Broker Header with Logo */}
                  <div className="flex items-center gap-4 mb-4 pb-3 border-b border-gray-200">
                    <img 
                      src={broker.name === 'Headway' ? '/headway-logo.png' : `https://www.google.com/s2/favicons?sz=128&domain=${broker.domain}`}
                      alt={`${broker.name} logo`}
                      width={40}
                      height={40}
                      className="w-10 h-10 rounded-lg flex-shrink-0"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 128'%3E%3Crect fill='%232F5BFF' width='128' height='128'/%3E%3Ctext x='50%25' y='50%25' font-size='64' fill='white' text-anchor='middle' dy='.3em'%3E${broker.name.charAt(0)}%3C/text%3E%3C/svg%3E`;
                      }}
                    />
                    <div className="flex-1">
                      <h3 className="font-bold text-base" style={{ color: '#111827' }}>
                        {broker.name}
                      </h3>
                    </div>
                    <span className="text-xs px-3 py-1 rounded-full font-semibold whitespace-nowrap" style={{ 
                      backgroundColor: broker.type === 'auto' ? '#DBEAFE' : broker.type === 'manual' ? '#FEF3C7' : '#DBEAFE',
                      color: broker.type === 'auto' ? '#0369A1' : broker.type === 'manual' ? '#92400E' : '#0369A1'
                    }}>
                      {broker.type.toUpperCase()}
                    </span>
                  </div>
                  
                  {/* Instruments Grid */}
                  <div className="grid grid-cols-3 gap-3">
                    {broker.instruments.map((instrument, iIdx) => (
                      <div key={iIdx} className="bg-gradient-to-b from-blue-50 to-blue-100/50 rounded-lg p-3 text-center border border-blue-200/50">
                        <p className="font-semibold text-gray-800 text-sm mb-1">{instrument.name}</p>
                        {instrument.rebate !== undefined && (
                          <p className="text-[#2F5BFF] font-bold text-base">${instrument.rebate.toFixed(2)}</p>
                        )}
                        {instrument.rebateText && (
                          <p className="text-gray-600 text-xs mt-1">{instrument.rebateText}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </a>
              ))}
            </div>
          </div>
          {/* ================= WHATSAPP ADMIN ================= */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-center mb-6" style={{ color: '#111827' }}>
              Hubungi Admin FXPayout
            </h2>

            <div className="space-y-4">

              <a
                href="https://wa.me/6282125597634"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block px-6 py-4 bg-gradient-to-r from-[#2F5BFF] to-[#3C66F5] text-white rounded-[14px] hover:shadow-2xl hover:shadow-blue-500/50 hover:-translate-y-1 hover:scale-105 text-center"
                style={{
                  fontWeight: 'bold',
                  fontSize: '1.125rem',
                  transition: 'all 0.3s ease'
                }}
              >
                <span className="flex items-center justify-center gap-2">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="20" height="20" fill="currentColor">
    <path d="M16 .5C7.5.5.5 7.4.5 16c0 2.8.7 5.4 2.1 7.7L.5 31.5l8-2.1c2.2 1.2 4.7 1.8 7.5 1.8 8.5 0 15.5-6.9 15.5-15.5S24.5.5 16 .5zm0 28.2c-2.4 0-4.7-.6-6.8-1.8l-.5-.3-4.8 1.3 1.3-4.7-.3-.5C3.7 20.6 3 18.4 3 16 3 9 9 3 16 3s13 6 13 13-6 12.7-13 12.7zm7.2-9.5c-.4-.2-2.3-1.1-2.6-1.2-.4-.1-.6-.2-.9.2s-1 1.2-1.2 1.4c-.2.2-.4.3-.8.1-.4-.2-1.6-.6-3-1.9-1.1-1-1.9-2.3-2.1-2.7-.2-.4 0-.6.2-.8.2-.2.4-.4.6-.7.2-.3.3-.5.5-.8.2-.3.1-.6 0-.8-.1-.2-.9-2.1-1.2-2.8-.3-.7-.6-.6-.9-.6h-.8c-.3 0-.8.1-1.2.6-.4.5-1.6 1.6-1.6 3.9s1.6 4.5 1.8 4.8c.2.3 3.1 4.8 7.6 6.7 1 .4 1.8.6 2.4.8 1 .3 1.9.3 2.6.2.8-.1 2.3-.9 2.7-1.8.3-.9.3-1.7.2-1.8-.1-.2-.3-.3-.7-.5z"/>
  </svg>
                Chat Admin 1
</span>
              </a>

              <a
                href="https://wa.me/628984785573"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block px-6 py-4 bg-gradient-to-r from-[#2F5BFF] to-[#3C66F5] text-white rounded-[14px] hover:shadow-2xl hover:shadow-blue-500/50 hover:-translate-y-1 hover:scale-105 text-center"
                style={{
                  fontWeight: 'bold',
                  fontSize: '1.125rem',
                  transition: 'all 0.3s ease'
                }}
              >
                <span className="flex items-center justify-center gap-2">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="20" height="20" fill="currentColor">
    <path d="M16 .5C7.5.5.5 7.4.5 16c0 2.8.7 5.4 2.1 7.7L.5 31.5l8-2.1c2.2 1.2 4.7 1.8 7.5 1.8 8.5 0 15.5-6.9 15.5-15.5S24.5.5 16 .5zm0 28.2c-2.4 0-4.7-.6-6.8-1.8l-.5-.3-4.8 1.3 1.3-4.7-.3-.5C3.7 20.6 3 18.4 3 16 3 9 9 3 16 3s13 6 13 13-6 12.7-13 12.7zm7.2-9.5c-.4-.2-2.3-1.1-2.6-1.2-.4-.1-.6-.2-.9.2s-1 1.2-1.2 1.4c-.2.2-.4.3-.8.1-.4-.2-1.6-.6-3-1.9-1.1-1-1.9-2.3-2.1-2.7-.2-.4 0-.6.2-.8.2-.2.4-.4.6-.7.2-.3.3-.5.5-.8.2-.3.1-.6 0-.8-.1-.2-.9-2.1-1.2-2.8-.3-.7-.6-.6-.9-.6h-.8c-.3 0-.8.1-1.2.6-.4.5-1.6 1.6-1.6 3.9s1.6 4.5 1.8 4.8c.2.3 3.1 4.8 7.6 6.7 1 .4 1.8.6 2.4.8 1 .3 1.9.3 2.6.2.8-.1 2.3-.9 2.7-1.8.3-.9.3-1.7.2-1.8-.1-.2-.3-.3-.7-.5z"/>
  </svg>
                Chat Admin 2
</span>
              </a>

              <a
                href="https://whatsapp.com/channel/0029VbBwSxf8fewzsFqX8B2f"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block px-6 py-4 border-2 border-[#2F5BFF] text-[#2F5BFF] rounded-[14px] bg-white hover:shadow-2xl hover:shadow-blue-500/30 hover:-translate-y-1 hover:scale-105 text-center"
                style={{
                  fontWeight: 'bold',
                  fontSize: '1.125rem',
                  transition: 'all 0.3s ease'
                }}
              >
                <span className="flex items-center justify-center gap-2">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M3 3h18v2H3zm2 5h14v2H5zm-2 5h18v2H3zm2 5h14v2H5z"/>
  </svg>
  Gabung Saluran WhatsApp
</span>
              </a>

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
