import { Download, Smartphone } from 'lucide-react';
import { BrandMark } from '@/components/brand-mark';
import { APP_DOWNLOAD_URL } from '@/lib/site-links';

export function TopAppBanner() {
  return (
    <aside aria-label="FXPayout Android App" className="relative z-10 w-full bg-gradient-to-r from-[#3150E8] via-[#4160FF] to-[#3B77EB] text-white">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-4 px-4 py-5 text-center lg:flex-row lg:justify-between lg:gap-6 lg:px-8 lg:py-6 lg:text-left">
        <div className="flex flex-col items-center gap-4 lg:flex-row lg:gap-5">
          <BrandMark variant="app-icon" size={64} />
          <div>
            <span className="mb-1.5 inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider">
              <Smartphone className="h-3.5 w-3.5" aria-hidden="true" />
              Android App
            </span>
            <p className="font-[family-name:var(--font-heading)] text-xl font-bold leading-tight lg:text-2xl">Trade Smarter with FXPayout App</p>
            <p className="mt-1 text-sm leading-6 text-blue-100">Enjoy easier access to FXPayout rebates right from your smartphone.</p>
          </div>
        </div>

        {APP_DOWNLOAD_URL && (
          <a
            href={APP_DOWNLOAD_URL}
            className="inline-flex min-h-[48px] w-full shrink-0 items-center justify-center gap-2 rounded-full bg-white px-7 text-sm font-bold text-[#2343C4] shadow-lg transition hover:bg-[#F0F4FF] sm:w-auto"
          >
            <Download className="h-5 w-5" aria-hidden="true" />
            Download for Android
          </a>
        )}
      </div>
    </aside>
  );
}
