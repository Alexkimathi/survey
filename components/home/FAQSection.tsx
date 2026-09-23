'use client';

import { useState } from 'react';
import { RiAddLine, RiSubtractLine } from 'react-icons/ri';
import { faqs } from '@/lib/data';
import { useFadeIn } from '@/hooks/useFadeIn';

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);
  const ref = useFadeIn();

  return (
    <section id="faq" className="py-24 bg-white" ref={ref as React.RefObject<HTMLElement>}>
      <div className="container">
        <div className="text-center fade-in mb-16">
          <span className="section-label">FAQ</span>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle mx-auto">
            Have questions? We&apos;ve got answers. If you don&apos;t see what you&apos;re
            looking for, reach out directly.
          </p>
        </div>

        <div className="max-w-2xl mx-auto flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`fade-in bg-bg rounded-2xl border transition-all duration-200 overflow-hidden ${
                open === i ? 'border-primary/30' : 'border-gray-100'
              }`}
              style={{ transitionDelay: `${i * 0.07}s` }}
            >
              <button
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-display font-semibold text-sm text-text-base">
                  {faq.question}
                </span>
                <span className="text-primary flex-shrink-0 text-lg">
                  {open === i ? <RiSubtractLine /> : <RiAddLine />}
                </span>
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <p className="text-text-muted text-sm leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
