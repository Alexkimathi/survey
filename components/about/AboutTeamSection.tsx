'use client';

import Image from 'next/image';
import { teamMembers } from '@/lib/data';
import { useFadeIn } from '@/hooks/useFadeIn';

export default function AboutTeamSection() {
  const ref = useFadeIn();

  return (
    <section className="py-24 bg-bg" ref={ref as React.RefObject<HTMLElement>}>
      <div className="container">
        <div className="text-center fade-in mb-16">
          <span className="section-label">The Team</span>
          <h2 className="section-title">Meet Our Experts</h2>
          <p className="section-subtitle mx-auto">
            Experienced professionals committed to delivering accurate results on every project.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((m, i) => (
            <div
              key={m.name}
              className="fade-in bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="relative h-56">
                <Image
                  src={m.image}
                  alt={m.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display font-bold text-base text-text-base mb-0.5">
                  {m.name}
                </h3>
                <span className="inline-block text-xs font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-full mb-3">
                  {m.role}
                </span>
                <p className="text-text-muted text-xs leading-relaxed">{m.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
