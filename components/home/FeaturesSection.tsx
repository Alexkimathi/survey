'use client';

import { ElementType } from 'react';
import * as RiIcons from 'react-icons/ri';
import { services } from '@/lib/data';
import { useFadeIn } from '@/hooks/useFadeIn';

export default function FeaturesSection() {
  const ref = useFadeIn();

  return (
    <section id="features" className="py-24 bg-bg" ref={ref as React.RefObject<HTMLElement>}>
      <div className="container">
        <div className="text-center fade-in mb-16">
          <span className="section-label">What We Do</span>
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle mx-auto">
            Comprehensive land surveying and mapping solutions powered by modern technology
            and decades of expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => {
            const Icon = (RiIcons as Record<string, ElementType>)[service.iconName];
            return (
              <div
                key={service.number}
                className="fade-in bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <span className="text-xs font-bold text-gray-300 font-display mb-3">
                  {service.number}
                </span>
                <div className="text-2xl mb-3" style={{ color: service.color }}>
                  {Icon && <Icon />}
                </div>
                <h3 className="font-display font-bold text-base text-text-base mb-2">
                  {service.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed flex-1">
                  {service.description}
                </p>
                <span
                  className="text-sm font-semibold mt-4 inline-block"
                  style={{ color: service.color }}
                >
                  Learn more →
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
