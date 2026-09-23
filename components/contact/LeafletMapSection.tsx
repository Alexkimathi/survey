'use client';

import dynamic from 'next/dynamic';
import { useFadeIn } from '@/hooks/useFadeIn';

const MapWithNoSSR = dynamic(() => import('./LeafletMap'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-bg text-text-muted text-sm">
      Loading map...
    </div>
  ),
});

export default function LeafletMapSection() {
  const ref = useFadeIn();

  return (
    <section className="py-20 bg-bg" ref={ref as React.RefObject<HTMLElement>}>
      <div className="container">
        <div className="text-center fade-in mb-10">
          <span className="section-label">Find Us</span>
          <h2 className="section-title">Our Location</h2>
        </div>
        <div className="fade-in fade-in-delay-1 rounded-2xl overflow-hidden h-96 shadow-sm border border-gray-100">
          <MapWithNoSSR />
        </div>
      </div>
    </section>
  );
}
