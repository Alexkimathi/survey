'use client';

import { ElementType } from 'react';
import * as RiIcons from 'react-icons/ri';
import { whyUs } from '@/lib/data';
import { useFadeIn } from '@/hooks/useFadeIn';

export default function AboutWhySection() {
  const ref = useFadeIn();

  return (
    <section className="py-24 bg-white" ref={ref as React.RefObject<HTMLElement>}>
      <div className="container">
        <div className="text-center fade-in mb-16">
          <span className="section-label">Why Us</span>
          <h2 className="section-title">Why Choose PointMap?</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {whyUs.map((item, i) => {
            const Icon = (RiIcons as Record<string, ElementType>)[item.iconName];
            return (
              <div
                key={item.title}
                className="fade-in bg-bg rounded-2xl p-6 flex flex-col items-center text-center border border-gray-100"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary text-2xl mb-4">
                  {Icon && <Icon />}
                </div>
                <h3 className="font-display font-bold text-sm text-text-base mb-2">
                  {item.title}
                </h3>
                <p className="text-text-muted text-xs leading-relaxed">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
