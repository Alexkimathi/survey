import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import ContactFormSection from '@/components/contact/ContactFormSection';
import LeafletMapSection from '@/components/contact/LeafletMapSection';

export const metadata: Metadata = {
  title: 'Contact Us — PointMapSolutions',
  description:
    "Ready to start your project? Reach out and we'll get back to you within 24 hours.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Contact"
        title="Get in Touch"
        subtitle="Ready to start your project? Reach out and we'll get back to you within 24 hours."
      />
      <ContactFormSection />
      <LeafletMapSection />
    </>
  );
}
