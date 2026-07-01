import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'FXPayout | Cashback Rebate Forex Broker',
  description: 'FXPayout helps traders earn rebate and cashback from trusted brokers worldwide. Compare broker rebates and register with global broker partners.',
  generator: 'v0.app',
  keywords: [
    'FXPayout',
    'forex cashback',
    'broker rebate',
    'forex rebate',
    'cashback broker',
    'trading rebate',
    'global broker rebate',
    'best forex rebate',
    'indonesia broker rebate',
  ],
  icons: {
    icon: '/logo.png',
  },
  alternates: {
    canonical: 'https://fxpayout.com',
    languages: {
      en: 'https://fxpayout.com',
      id: 'https://fxpayout.com',
      ar: 'https://fxpayout.com',
      ru: 'https://fxpayout.com',
      zh: 'https://fxpayout.com',
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    userScalable: false,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
