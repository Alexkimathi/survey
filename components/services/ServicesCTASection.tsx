'use client';

import Link from 'next/link';
import { useFadeIn } from '@/hooks/useFadeIn';

export default function ServicesCTASection() {
  const ref = useFadeIn();

  return (
    <section className="py-20 bg-white" ref={ref as React.RefObject<HTMLElement>}>
      <div className="container">
        <div className="fade-in bg-gradient-to-r from-primary to-accent rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-display font-extrabold text-white text-2xl md:text-3xl mb-2">
              Ready to Start Your Project?
            </h2>
            <p className="text-white/80 text-sm">
              Get a free, no-obligation quote from our team within 24 hours.
            </p>
          </div>
          <Link
            href="/contact"
            className="flex-shrink-0 bg-white text-primary font-bold px-8 py-4 rounded-full hover:bg-gray-100 transition-colors shadow-lg whitespace-nowrap"
          >
            Get a Free Quote →
          </Link>
        </div>
      </div>
    </section>
  );
}
