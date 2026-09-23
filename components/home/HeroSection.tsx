'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function HeroSection() {
  const router = useRouter();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center bg-dark overflow-hidden"
      style={{ paddingTop: 0, paddingBottom: 0 }}
    >
      {/* Background texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-2 to-dark-3" />

      {/* Glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative z-10 flex flex-col items-center text-center py-32">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase mb-8 animate-hero-fade">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse-dot" />
          Professional Land Surveying Services — Meru, Kenya
        </div>

        <h1
          className="font-display font-extrabold text-white leading-tight mb-6 animate-hero-fade"
          style={{
            fontSize: 'clamp(2.8rem, 7vw, 5rem)',
            letterSpacing: '-0.04em',
            animationDelay: '0.1s',
          }}
        >
          Best Land Surveying
          <br />
          <span className="text-gradient">&amp; Digital Mapping</span>
          <br />
          Service
        </h1>

        <p
          className="text-white/70 text-lg max-w-xl leading-relaxed mb-10 animate-hero-fade"
          style={{ animationDelay: '0.2s' }}
        >
          Precision-driven boundary, construction, and digital mapping solutions
          for clients across Kenya — delivered with accuracy you can trust.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 mb-16 animate-hero-fade"
          style={{ animationDelay: '0.3s' }}
        >
          <button
            onClick={() => router.push('/contact')}
            className="bg-primary text-white font-semibold px-8 py-4 rounded-full hover:bg-primary-dark transition-colors shadow-lg"
          >
            Get a Free Quote
          </button>
          <button
            onClick={() => router.push('/about')}
            className="border border-white/30 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10 transition-colors"
          >
            Learn More →
          </button>
        </div>

        {/* Trust bar */}
        <div
          className="flex flex-col sm:flex-row items-center gap-4 animate-hero-fade"
          style={{ animationDelay: '0.4s' }}
        >
          <div className="flex -space-x-2">
            {[
              { initials: 'MK', bg: '#10b981' },
              { initials: 'AK', bg: '#3b82f6' },
              { initials: 'JO', bg: '#f59e0b' },
              { initials: 'NW', bg: '#ec4899' },
            ].map((a) => (
              <div
                key={a.initials}
                className="w-9 h-9 rounded-full border-2 border-dark flex items-center justify-center text-white text-xs font-bold"
                style={{ background: a.bg }}
              >
                {a.initials}
              </div>
            ))}
          </div>
          <div className="w-px h-8 bg-white/20 hidden sm:block" />
          <div className="flex flex-col items-center sm:items-start">
            <div className="text-yellow-400 text-sm">★★★★★</div>
            <span className="text-white/70 text-sm">Trusted by 200+ clients across Kenya</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/50 hover:text-white/80 transition-colors cursor-pointer"
        onClick={() => scrollTo('stats')}
        aria-label="Scroll down"
        style={{ background: 'none', border: 'none' }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center pt-2">
          <div className="w-1.5 h-1.5 bg-white/60 rounded-full animate-scroll-bounce" />
        </div>
      </button>
    </section>
  );
}
