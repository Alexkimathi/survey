'use client';

import { ElementType } from 'react';
import * as RiIcons from 'react-icons/ri';
import { RiCheckLine } from 'react-icons/ri';
import { servicesDetailed } from '@/lib/data';
import { useFadeIn } from '@/hooks/useFadeIn';

export default function ServicesCardsSection() {
  const ref = useFadeIn();

  return (
    <section className="py-24 bg-white" ref={ref as React.RefObject<HTMLElement>}>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesDetailed.map((s, i) => {
            const Icon = (RiIcons as Record<string, ElementType>)[s.iconName];
            return (
              <div
                key={s.title}
                className="fade-in bg-bg rounded-2xl p-8 border border-gray-100"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
                  style={{ color: s.color, background: `${s.color}18` }}
                >
                  {Icon && <Icon />}
                </div>
                <h3 className="font-display font-bold text-xl text-text-base mb-3">
                  {s.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed mb-6">
                  {s.description}
                </p>
                <ul className="flex flex-col gap-2">
                  {s.included.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-text-muted">
                      <RiCheckLine
                        className="flex-shrink-0 mt-0.5"
                        style={{ color: s.color }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
