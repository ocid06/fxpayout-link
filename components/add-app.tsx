import { Download, Gauge, Bell, ShieldCheck } from 'lucide-react';
import { BrandMark } from '@/components/brand-mark';
import { APP_DOWNLOAD_URL } from '@/lib/site-links';

const copy: Record<string, { title: string; subtitle: string; description: string; features: string[]; download: string; soon: string }> = {
  en: {
    title: 'ADD APP',
    subtitle: 'FXPayout App',
    description: 'Install the FXPayout app to monitor your rebates, broker accounts, and withdrawals faster from your phone.',
    features: ['Fast access to the Trader Dashboard', 'Rebate and withdrawal updates', 'Secure, no account access'],
    download: 'Download App',
    soon: 'Download link coming soon',
  },
  id: {
    title: 'ADD APP',
    subtitle: 'Aplikasi FXPayout',
    description: 'Pasang aplikasi FXPayout untuk memantau rebate, akun broker, dan penarikan dengan lebih cepat dari ponsel Anda.',
    features: ['Akses cepat ke Trader Dashboard', 'Update rebate dan penarikan', 'Aman, tanpa akses akun trading'],
    download: 'Unduh Aplikasi',
    soon: 'Link unduhan segera tersedia',
  },
};

const icons = [Gauge, Bell, ShieldCheck];

export function AddApp({ locale }: { locale: string }) {
  const t = copy[locale] ?? copy.en;

  return (
    <section id="add-app" data-scroll-reveal className="mb-12 w-full scroll-mt-24 lg:mb-10">
      <div className="card-3d overflow-hidden rounded-[22px] bg-gradient-to-br from-[#3150E8] via-[#4160FF] to-[#3B77EB] relative p-6 text-white shadow-[0_14px_40px_0_rgba(16,35,100,0.2)] lg:p-10">
        <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10" aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-20 left-1/3 h-48 w-48 rounded-full bg-sky-300/10" aria-hidden="true" />
        <div className="relative flex flex-col items-center gap-6 text-center lg:flex-row lg:text-left">
          <div className="flex h-20 w-20 shrink-0 items-center justify-center">
            <BrandMark variant="app-icon" size={80} />
          </div>

          <div className="flex-1">
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-sky-200">{t.subtitle}</p>
            <h2 className="mb-2 text-3xl font-bold lg:text-4xl">{t.title}</h2>
            <p className="mb-4 text-sm leading-6 text-blue-100">{t.description}</p>
            <ul className="grid gap-2 text-sm sm:grid-cols-3">
              {t.features.map((f, i) => {
                const Icon = icons[i];
                return (
                  <li key={f} className="flex items-center justify-center gap-2 rounded-xl bg-white/10 px-3 py-2 lg:justify-start">
                    <Icon className="h-4 w-4 shrink-0 text-sky-200" aria-hidden="true" />
                    <span>{f}</span>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="w-full shrink-0 lg:w-56">
            {APP_DOWNLOAD_URL ? (
              <a
                href={APP_DOWNLOAD_URL}
                className="flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl bg-white px-6 text-sm font-bold text-[#2343C4] shadow-lg"
              >
                <Download className="h-5 w-5" aria-hidden="true" />
                {t.download}
              </a>
            ) : (
              <>
                <button
                  type="button"
                  disabled
                  className="flex min-h-[52px] w-full cursor-not-allowed items-center justify-center gap-2 rounded-xl bg-white/25 px-6 text-sm font-bold text-white/85"
                >
                  <Download className="h-5 w-5" aria-hidden="true" />
                  {t.download}
                </button>
                <p className="mt-2 text-xs text-blue-200">{t.soon}</p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
