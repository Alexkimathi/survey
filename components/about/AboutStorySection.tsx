'use client';

import { useFadeIn } from '@/hooks/useFadeIn';

const storyStats = [
  { num: '15+', label: 'Years in Business' },
  { num: '1,200+', label: 'Projects Completed' },
  { num: '40+', label: 'Counties Served' },
  { num: '98%', label: 'Client Satisfaction' },
];

export default function AboutStorySection() {
  const ref = useFadeIn();

  return (
    <section className="py-24 bg-white" ref={ref as React.RefObject<HTMLElement>}>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 fade-in">
          <div>
            <span className="section-label">Our Story</span>
            <h2 className="section-title">15+ Years of Excellence</h2>
            <p className="text-text-muted text-sm leading-relaxed mb-4">
              PointMap Solutions was founded in Meru, Kenya in 2009 by a team of passionate
              surveyors who believed that precision and technology could transform how land
              is measured, mapped, and managed in East Africa.
            </p>
            <p className="text-text-muted text-sm leading-relaxed mb-4">
              Starting with a single GPS unit and a commitment to accuracy, we have grown
              into a full-service surveying firm trusted by homeowners, developers,
              engineers, and county governments. Our work spans boundary demarcation,
              construction layout, subdivision permitting, and large-scale digital mapping
              across Meru and the wider Mt. Kenya region.
            </p>
            <p className="text-text-muted text-sm leading-relaxed">
              Today, our team of licensed surveyors and GIS specialists combine decades of
              field experience with the latest drone photogrammetry and RTK GPS technology
              to deliver results that are accurate, legally sound, and delivered on time.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 fade-in fade-in-delay-1">
            {storyStats.map((s) => (
              <div key={s.label} className="bg-bg rounded-2xl p-6 flex flex-col items-center text-center">
                <span className="font-display font-extrabold text-3xl text-primary mb-1">
                  {s.num}
                </span>
                <span className="text-text-muted text-sm">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
