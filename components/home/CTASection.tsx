'use client';

import { useRouter } from 'next/navigation';
import { RiCheckLine } from 'react-icons/ri';
import { AiFillPhone } from 'react-icons/ai';
import { useFadeIn } from '@/hooks/useFadeIn';
import { CONTACT } from '@/lib/data';

const bullets = [
  'Free initial consultation',
  'GPS & total station accuracy',
  'Certified government documents',
];

export default function CTASection() {
  const router = useRouter();
  const ref = useFadeIn();

  return (
    <section className="py-24 bg-dark overflow-hidden" ref={ref as React.RefObject<HTMLElement>}>
      <div className="container">
        <div className="relative bg-gradient-to-br from-primary/90 to-accent rounded-3xl p-10 md:p-16 overflow-hidden">
          {/* Background glows */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-10">
            <div className="fade-in">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-white/70 mb-3">
                Get Started Today
              </span>
              <h2
                className="font-display font-extrabold text-white mb-4 leading-tight"
                style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', letterSpacing: '-0.03em' }}
              >
                Ready to start your
                <br />
                land survey project?
              </h2>
              <p className="text-white/80 text-sm leading-relaxed mb-6 max-w-sm">
                Get precise, legally binding survey documents delivered within your
                agreed timeline. Our certified team is ready to help you.
              </p>
              <ul className="flex flex-col gap-2">
                {bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-white/90 text-sm">
                    <RiCheckLine className="text-white flex-shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            <div className="fade-in fade-in-delay-1 flex flex-col gap-4 flex-shrink-0">
              <button
                onClick={() => router.push('/contact')}
                className="bg-white text-primary font-bold px-8 py-4 rounded-full hover:bg-gray-100 transition-colors shadow-lg whitespace-nowrap"
              >
                Get a Free Quote →
              </button>
              <a
                href={`tel:+${CONTACT.floatingPhone}`}
                className="flex items-center justify-center gap-2 border border-white/40 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10 transition-colors whitespace-nowrap"
              >
                <AiFillPhone /> {CONTACT.floatingPhoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
