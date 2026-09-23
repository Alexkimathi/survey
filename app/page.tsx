import type { Metadata } from 'next';
import Link from 'next/link';
import HeroSection from '@/components/home/HeroSection';
import StatsSection from '@/components/home/StatsSection';
import AboutSection from '@/components/home/AboutSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import ProcessSection from '@/components/home/ProcessSection';
import ReviewsSection from '@/components/home/ReviewsSection';
import FAQSection from '@/components/home/FAQSection';
import CTASection from '@/components/home/CTASection';
import ContactSection from '@/components/home/ContactSection';

export const metadata: Metadata = {
  title: 'PointMapSolutions — Land Surveying & Digital Mapping in Kenya',
  description:
    'Professional boundary, construction, and digital mapping surveys across Kenya. Based in Meru, serving the whole country.',
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <div className="text-center py-6 bg-white">
        <Link href="/about" className="text-primary font-semibold hover:underline text-sm">
          Learn more about us →
        </Link>
      </div>
      <FeaturesSection />
      <div className="text-center py-6 bg-bg">
        <Link href="/services" className="text-primary font-semibold hover:underline text-sm">
          View all services →
        </Link>
      </div>
      <ProcessSection />
      <ReviewsSection />
      <div className="text-center py-6 bg-bg">
        <Link href="/portfolio" className="text-primary font-semibold hover:underline text-sm">
          See our work →
        </Link>
      </div>
      <FAQSection />
      <CTASection />
      <ContactSection />
    </>
  );
}
