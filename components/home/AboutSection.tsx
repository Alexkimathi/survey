'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useFadeIn } from '@/hooks/useFadeIn';

export default function AboutSection() {
  const ref = useFadeIn();

  return (
    <section id="about" className="py-24 bg-white" ref={ref as React.RefObject<HTMLElement>}>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="fade-in">
            <span className="section-label">Who We Are</span>
            <h2 className="section-title">
              Precision Surveying
              <br />
              You Can Trust
            </h2>

            <div className="flex gap-4 mt-6 mb-5 fade-in fade-in-delay-1">
              <div className="text-2xl flex-shrink-0">🎯</div>
              <div>
                <h3 className="font-display font-bold text-base text-text-base mb-1">Our Vision</h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  To be the leading land surveying and digital mapping firm in East Africa,
                  delivering precise, reliable, and technologically advanced solutions to
                  clients across all sectors.
                </p>
              </div>
            </div>

            <div className="flex gap-4 mb-8 fade-in fade-in-delay-2">
              <div className="text-2xl flex-shrink-0">🚀</div>
              <div>
                <h3 className="font-display font-bold text-base text-text-base mb-1">Our Mission</h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  To provide accurate and timely surveying services using cutting-edge
                  technology, enabling our clients to make informed decisions about
                  their land and property investments.
                </p>
              </div>
            </div>

            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-6 py-3 rounded-full hover:bg-primary-dark transition-colors fade-in fade-in-delay-3"
            >
              Our Services →
            </Link>
          </div>

          {/* Image grid */}
          <div className="relative fade-in fade-in-delay-1">
            <div className="grid grid-cols-2 gap-3">
              <div className="relative h-72 rounded-2xl overflow-hidden row-span-2">
                <Image
                  src="/img/s1.jpg"
                  alt="Land surveying work"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div className="relative h-[138px] rounded-2xl overflow-hidden">
                <Image
                  src="/img/s4.jpg"
                  alt="Digital mapping"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div className="relative h-[138px] rounded-2xl overflow-hidden">
                <Image
                  src="/img/s5.jpg"
                  alt="Survey team"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Badge */}
            <div className="absolute -bottom-4 -left-4 bg-primary text-white rounded-2xl px-5 py-4 shadow-lg">
              <div className="font-display font-extrabold text-3xl leading-none">15+</div>
              <div className="text-white/80 text-xs mt-1">Years of Excellence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
