'use client';

import { useState } from 'react';
import Image from 'next/image';
import { portfolioProjects, portfolioFilters } from '@/lib/data';
import { useFadeIn } from '@/hooks/useFadeIn';

export default function PortfolioGrid() {
  const [active, setActive] = useState('All');
  const ref = useFadeIn();

  const filtered =
    active === 'All' ? portfolioProjects : portfolioProjects.filter((p) => p.type === active);

  return (
    <section className="py-24 bg-bg" ref={ref as React.RefObject<HTMLElement>}>
      <div className="container">
        {/* Filter tabs */}
        <div className="fade-in flex flex-wrap justify-center gap-3 mb-12">
          {portfolioFilters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-colors ${
                active === f
                  ? 'bg-primary text-white shadow-md shadow-primary/30'
                  : 'bg-white text-text-muted border border-gray-200 hover:border-primary/30 hover:text-primary'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p, i) => (
            <div
              key={p.name}
              className="fade-in bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              style={{ transitionDelay: `${(i % 3) * 0.08}s` }}
            >
              <div className="relative h-52 group overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">View Details</span>
                </div>
                {/* Badge */}
                <span className="absolute top-3 left-3 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                  {p.type}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-display font-bold text-base text-text-base mb-1">
                  {p.name}
                </h3>
                <span className="text-primary text-xs font-semibold mb-2 block">
                  {p.location}
                </span>
                <p className="text-text-muted text-xs leading-relaxed">{p.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
