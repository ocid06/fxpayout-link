import { Headphones, Megaphone, MessageCircle, UserCheck } from 'lucide-react';
import { SUPPORT_LINKS } from '@/lib/site-links';

type SupportText = {
  title: string;
  description: string;
  one: string;
  two: string;
  channel: string;
  whatsapp: string;
  join: string;
};

const extra: Record<string, { alternative: string; cs: string; csHint: string; ba: string; baHint: string; channel: string; channelHint: string }> = {
  en: {
    alternative: 'Alternative Support',
    cs: 'Customer Support',
    csHint: 'Fast response via WhatsApp',
    ba: 'Contact BA',
    baHint: 'If Customer Support has not replied yet, contact BA via WhatsApp',
    channel: 'FXPAYOUT WhatsApp Channel',
    channelHint: 'Official updates and announcements',
  },
  id: {
    alternative: 'Dukungan Alternatif',
    cs: 'Customer Support',
    csHint: 'Respon cepat via WhatsApp',
    ba: 'Hubungi BA',
    baHint: 'Jika CS belum membalas, hubungi BA melalui WhatsApp',
    channel: 'FXPAYOUT WhatsApp Channel',
    channelHint: 'Update dan pengumuman resmi',
  },
};

function ContactCard({ href, icon: Icon, title, hint, action }: { href: string; icon: typeof Headphones; title: string; hint: string; action: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="card-3d-soft flex h-full flex-wrap items-center gap-x-4 gap-y-3 rounded-2xl border border-[#E3E9FF] bg-white p-4 transition hover:border-[#4160FF]/40 hover:bg-[#F7F9FF] lg:flex-nowrap"
    >
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#EEF2FF] text-[#3150E8]">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </span>
      <span className="min-w-0 flex-1 basis-[calc(100%-4rem)] lg:basis-auto">
        <span className="block font-semibold text-[#152B71]">{title}</span>
        <span className="block text-xs leading-5 text-gray-500">{hint}</span>
      </span>
      <span className="w-full shrink-0 rounded-full bg-gradient-to-r from-[#3150E8] to-[#4160FF] px-4 py-2.5 text-center text-xs font-semibold text-white lg:w-auto">
        {action}
      </span>
    </a>
  );
}

export function SupportSection({ locale, text }: { locale: string; text: SupportText }) {
  const x = extra[locale] ?? extra.en;
  const cs = [
    { href: SUPPORT_LINKS.cs1, title: `${x.cs} 1` },
    { href: SUPPORT_LINKS.cs2, title: `${x.cs} 2` },
  ].filter((c): c is { href: string; title: string } => Boolean(c.href));

  const alternatives = [
    SUPPORT_LINKS.ba && { href: SUPPORT_LINKS.ba, icon: UserCheck, title: x.ba, hint: x.baHint, action: text.whatsapp },
    SUPPORT_LINKS.channel && { href: SUPPORT_LINKS.channel, icon: Megaphone, title: x.channel, hint: x.channelHint, action: text.join },
  ].filter(Boolean) as { href: string; icon: typeof Headphones; title: string; hint: string; action: string }[];

  return (
    <section id="support-admin" data-scroll-reveal className="mb-12 w-full scroll-mt-24 lg:mb-10">
      <div className="rounded-[22px] border border-[#E3E9FF] bg-white p-6 shadow-[0_14px_40px_-24px_rgba(16,35,100,0.3)] lg:p-8">
        <h2 className="mb-2 text-center text-2xl font-bold text-[#152B71]">{text.title}</h2>
        <p className="mx-auto mb-6 max-w-2xl text-center text-sm leading-6 text-gray-600">{text.description}</p>

        <div className="grid gap-3 lg:grid-cols-2">
          {cs.map((c) => (
            <ContactCard key={c.href} href={c.href} icon={MessageCircle} title={c.title} hint={x.csHint} action={text.whatsapp} />
          ))}
        </div>

        {alternatives.length > 0 && (
          <>
            <h3 className="mb-3 mt-8 text-sm font-bold uppercase tracking-wider text-[#3150E8]">{x.alternative}</h3>
            <div className="grid gap-3 lg:grid-cols-2">
              {alternatives.map((a) => (
                <ContactCard key={a.href} {...a} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
