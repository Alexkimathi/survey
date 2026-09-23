'use client';

import { certifications } from '@/lib/data';
import { useFadeIn } from '@/hooks/useFadeIn';

export default function AboutCertsSection() {
  const ref = useFadeIn();

  return (
    <section className="py-20 bg-bg" ref={ref as React.RefObject<HTMLElement>}>
      <div className="container">
        <div className="text-center fade-in mb-10">
          <span className="section-label">Accreditations</span>
          <h2 className="section-title">Our Certifications</h2>
        </div>
        <div className="fade-in fade-in-delay-1 flex flex-wrap justify-center gap-4">
          {certifications.map((cert) => (
            <span
              key={cert}
              className="bg-white border border-gray-200 text-text-base font-semibold text-sm px-5 py-2.5 rounded-full shadow-sm"
            >
              {cert}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
