import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import ServicesCardsSection from '@/components/services/ServicesCardsSection';
import ServicesProcessSection from '@/components/services/ServicesProcessSection';
import ServicesCTASection from '@/components/services/ServicesCTASection';

export const metadata: Metadata = {
  title: 'Our Services — PointMapSolutions',
  description:
    'Comprehensive land surveying and mapping solutions: boundary surveys, construction surveys, permitting, and digital mapping.',
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="What We Do"
        title="Our Services"
        subtitle="Comprehensive land surveying and mapping solutions powered by modern technology and local expertise."
      />
      <ServicesCardsSection />
      <ServicesProcessSection />
      <ServicesCTASection />
    </>
  );
}
