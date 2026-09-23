import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import AboutStorySection from '@/components/about/AboutStorySection';
import AboutTeamSection from '@/components/about/AboutTeamSection';
import AboutWhySection from '@/components/about/AboutWhySection';
import AboutCertsSection from '@/components/about/AboutCertsSection';

export const metadata: Metadata = {
  title: 'About Us — PointMapSolutions',
  description:
    'PointMap Solutions has been delivering accurate, technology-driven surveying and mapping services across Kenya since 2009.',
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="Who We Are"
        title="Precision Surveying You Can Trust"
        subtitle="PointMap Solutions has been delivering accurate, technology-driven surveying and mapping services across Kenya since 2009."
      />
      <AboutStorySection />
      <AboutTeamSection />
      <AboutWhySection />
      <AboutCertsSection />
    </>
  );
}
