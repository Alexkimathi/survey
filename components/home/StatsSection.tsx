'use client';

import { ElementType } from 'react';
import * as RiIcons from 'react-icons/ri';
import { statsData } from '@/lib/data';
import { useFadeIn } from '@/hooks/useFadeIn';
import { useCounter } from '@/hooks/useCounter';

function StatItem({
  stat,
  delay,
}: {
  stat: (typeof statsData)[0];
  delay: number;
}) {
  const { count, ref } = useCounter(stat.value);
  const Icon = (RiIcons as Record<string, ElementType>)[stat.iconName];

  return (
    <div
      className="stats__item fade-in flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-sm border border-gray-100"
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary text-2xl mb-4">
        {Icon && <Icon />}
      </div>
      <div className="font-display font-extrabold text-4xl text-text-base mb-1">
        <span ref={ref}>{count}</span>
        {stat.suffix}
      </div>
      <div className="text-text-muted text-sm">{stat.label}</div>
    </div>
  );
}

export default function StatsSection() {
  const ref = useFadeIn();

  return (
    <section id="stats" className="bg-bg py-20" ref={ref as React.RefObject<HTMLElement>}>
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((stat, i) => (
            <StatItem key={stat.label} stat={stat} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
