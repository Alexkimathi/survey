'use client';

import Image from 'next/image';
import { RiStarFill, RiDoubleQuotesL } from 'react-icons/ri';
import { reviews } from '@/lib/data';
import { useFadeIn } from '@/hooks/useFadeIn';

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 text-yellow-400 text-sm">
      {Array.from({ length: 5 }).map((_, i) => (
        <RiStarFill key={i} className={i < count ? '' : 'text-gray-200'} />
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  const ref = useFadeIn();

  return (
    <section className="py-24 bg-bg" ref={ref as React.RefObject<HTMLElement>}>
      <div className="container">
        <div className="text-center fade-in mb-16">
          <span className="section-label">Testimonials</span>
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle mx-auto">
            Client satisfaction is our top priority. Here&apos;s what some of our clients
            have to say about working with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((review, i) => (
            <div
              key={review.name}
              className="fade-in bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <RiDoubleQuotesL className="text-primary/30 text-4xl mb-4" />
              <h4 className="font-display font-bold text-base text-text-base mb-3">
                &ldquo;{review.title}&rdquo;
              </h4>
              <p className="text-text-muted text-sm leading-relaxed mb-6">{review.text}</p>
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={review.img}
                    alt={review.name}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-display font-bold text-sm text-text-base">{review.name}</h3>
                  <p className="text-text-muted text-xs mb-1">{review.role}</p>
                  <Stars count={review.rating} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
