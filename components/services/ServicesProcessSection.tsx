'use client';

import { servicesProcessSteps } from '@/lib/data';
import { useFadeIn } from '@/hooks/useFadeIn';

export default function ServicesProcessSection() {
  const ref = useFadeIn();

  return (
    <section className="py-24 bg-bg" ref={ref as React.RefObject<HTMLElement>}>
      <div className="container">
        <div className="text-center fade-in mb-16">
          <span className="section-label">How It Works</span>
          <h2 className="section-title">Our Survey Process</h2>
          <p className="section-subtitle mx-auto">
            A clear, structured approach that keeps you informed at every stage.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {servicesProcessSteps.map((step, i) => (
            <div
              key={step.number}
              className="fade-in relative flex flex-col items-center text-center"
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              <div className="w-16 h-16 bg-primary text-white font-display font-extrabold text-xl rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-primary/30">
                {step.number}
              </div>
              {/* Connector line */}
              {i < servicesProcessSteps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(50%+2rem)] right-[-50%] h-0.5 bg-primary/20" />
              )}
              <h3 className="font-display font-bold text-base text-text-base mb-2">
                {step.title}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
