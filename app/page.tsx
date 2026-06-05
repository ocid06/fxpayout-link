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

      <div className="relative z-10 flex flex-col items-center justify-center px-4 py-12">

        <div className="w-full max-w-md glass-container">

          {/* PROFILE */}
          <div className="text-center mb-12">

            <div className="w-32 h-32 mx-auto mb-6 relative">
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

            <h1 className="text-4xl font-bold mb-3" style={{ color: '#111827' }}>
              Fxpayout.com
            </h1>

            <p className="text-sm leading-relaxed mb-8" style={{ color: '#374151' }}>
              Maksimalkan profit trading Anda dengan cashback & rebate hingga 90% dari berbagai broker terpercaya. Trading tetap berjalan seperti biasa, dan Anda mendapatkan keuntungan tambahan dari setiap lot yang diperdagangkan.
            </p>

          </div>

          <div className="space-y-4 mb-12">

  {/* WEBSITE */}
  <div className="cta-button">
    <a
      href="https://fxpayout.com"
      target="_blank"
      rel="noopener noreferrer"
      className="w-full block px-6 py-4 bg-gradient-to-r from-[#2F5BFF] to-[#3C66F5] text-white rounded-[14px] text-center"
    >
      Kunjungi Website Resmi
    </a>
  </div>

  {/* GROUP CARD */}
  <div className="cta-button">
    <a
      href="https://t.me/+P5ylfSvx1e1jMmI1"
      target="_blank"
      rel="noopener noreferrer"
      className="block rounded-2xl p-[1px] bg-gradient-to-r from-[#2F5BFF] to-[#3C66F5] hover:shadow-xl transition-all duration-300"
    >
      <div className="flex items-center gap-4 bg-white rounded-2xl p-4">

        <img
          src="/group.jpg"
          alt="Bergabung dengan komunitas telegram fxpayout"
          className="w-14 h-14 rounded-full object-cover border border-gray-200"
        />

        <div className="flex-1 text-left">
          <h3 className="font-semibold text-[#111827] text-sm">
            bergabung dengan grup clipper telegram
          </h3>
          <p className="text-xs text-gray-500">
            Reward Clipper • Diskusi clipper & Task clipper
          </p>
        </div>

        <div className="text-[#2F5BFF] font-bold">
          →
        </div>

      </div>
    </a>
  </div>

  {/* CALCULATOR */}
  <div className="cta-button">
    <a
      href="https://www.fxpayout.com/calculator"
      target="_blank"
      rel="noopener noreferrer"
      className="w-full block px-6 py-4 border-2 border-[#2F5BFF] text-[#2F5BFF] rounded-[14px] text-center"
    >
      Perkalian Rebate
    </a>
  </div>

</div>

          {/* BROKER LIST */}
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
                  className="block bg-white rounded-xl p-5 hover:shadow-lg transition border border-gray-100"
                >

                  <div className="flex items-center gap-4 mb-4 pb-3 border-b border-gray-200">

                    <img
                      src={broker.name === 'Headway' ? '/headway-logo.png' :`https://www.google.com/s2/favicons?sz=128&domain=${broker.domain}`}
                      alt={broker.name}
                      width={40}
                      height={40}
                      className="w-10 h-10 rounded-lg"
                    />

                    <div className="flex-1">
                      <h3 className="font-bold text-base" style={{ color: '#111827' }}>
                        {broker.name}
                      </h3>
                    </div>

                    <span className="text-xs px-3 py-1 rounded-full font-semibold whitespace-nowrap"
                      style={{
                        backgroundColor: broker.type === 'auto' ? '#DBEAFE' : '#FEF3C7',
                        color: broker.type === 'auto' ? '#0369A1' : '#92400E'
                      }}
                    >
                      {broker.type.toUpperCase()}
                    </span>

                  </div>

                  <div className="grid grid-cols-3 gap-3">

                    {broker.instruments.map((instrument, iIdx) => (

                      <div
                        key={iIdx}
                        className="bg-gradient-to-b from-blue-50 to-blue-100/50 rounded-lg p-3 text-center border border-blue-200/50"
                      >

                        <p className="font-semibold text-gray-800 text-sm mb-1">
                          {instrument.name}
                        </p>

                        {instrument.rebate !== undefined && (
                          <p className="text-[#2F5BFF] font-bold text-base">
                            ${instrument.rebate.toFixed(2)}
                          </p>
                        )}

                        {instrument.rebateText && (
                          <p className="text-gray-600 text-xs mt-1">
                            {instrument.rebateText}
                          </p>
                        )}

                      </div>

                    ))}

                  </div>

                  {/* TOMBOL BARU */}
                  <div className="mt-4 text-right">
                    <span className="inline-block px-4 py-2 bg-[#2F5BFF] text-white text-xs font-semibold rounded-lg">
                      Daftar Sekarang →
                    </span>
                  </div>

                </a>

              ))}

            </div>

          </div>
{/* SUPPORT / ADMIN */}
<div className="mb-12 w-full">

  <div className="bg-white/70 backdrop-blur-md rounded-2xl p-6 border border-gray-200 shadow-sm">

    <h2 className="text-xl font-bold text-center mb-2 text-gray-900">
      Butuh Bantuan?
    </h2>

    <p className="text-sm text-center text-gray-600 mb-6">
      Tim admin FXPayout siap membantu Anda terkait pendaftaran broker,
      validasi akun, maupun klaim rebate.
    </p>

    <div className="space-y-3">

      <a
        href="https://wa.me/6282125597634"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-between px-5 py-4 rounded-xl border border-gray-200 bg-white hover:bg-blue-50 transition"
      >
        <span className="font-medium text-gray-800">
          Chat Admin FXPayout 1
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
          Chat Admin FXPayout 2
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
          Gabung Saluran WhatsApp
        </span>

        <span className="text-sm">
          Join →
        </span>
      </a>

    </div>

  </div>

</div>
          {/* FOOTER */}
          <div className="text-center text-xs space-y-3 border-t border-[#e5e7eb] pt-8" style={{ color: '#374151' }}>
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
  );
}