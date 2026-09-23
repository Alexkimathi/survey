import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import PortfolioGrid from '@/components/portfolio/PortfolioGrid';

export const metadata: Metadata = {
  title: 'Portfolio — PointMapSolutions',
  description:
    "A selection of surveying and mapping projects we've delivered across Kenya.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        label="Our Work"
        title="Project Portfolio"
        subtitle="A selection of surveying and mapping projects we've delivered across Kenya."
      />
      <PortfolioGrid />
    </>
  );
}
