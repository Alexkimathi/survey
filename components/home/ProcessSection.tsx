'use client';

import { ElementType } from 'react';
import * as RiIcons from 'react-icons/ri';
import { processSteps } from '@/lib/data';
import { useFadeIn } from '@/hooks/useFadeIn';

export default function ProcessSection() {
  const ref = useFadeIn();

  return (
    <section className="py-24 bg-white" ref={ref as React.RefObject<HTMLElement>}>
      <div className="container">
        <div className="text-center fade-in mb-16">
          <span className="section-label">Our Process</span>
          <h2 className="section-title">How We Work</h2>
          <p className="section-subtitle mx-auto">
            A clear, structured approach to every project — from the first call
            to the final certified document.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, i) => {
            const Icon = (RiIcons as Record<string, ElementType>)[step.iconName];
            return (
              <div
                key={step.num}
                className="fade-in flex flex-col items-center text-center"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary text-2xl">
                    {Icon && <Icon />}
                  </div>
                  <span className="absolute -top-2 -right-2 w-7 h-7 bg-primary text-white text-xs font-bold rounded-full flex items-center justify-center font-display">
                    {step.num}
                  </span>
                </div>
                <h3 className="font-display font-bold text-base text-text-base mb-2">
                  {step.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">{step.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
