'use client';

import { useState } from 'react';
import { AiFillPhone, AiFillClockCircle } from 'react-icons/ai';
import { MdAttachEmail } from 'react-icons/md';
import { IoLocation } from 'react-icons/io5';
import { useFadeIn } from '@/hooks/useFadeIn';
import { CONTACT } from '@/lib/data';

export default function ContactSection() {
  const [formStatus, setFormStatus] = useState('Send Message');
  const ref = useFadeIn();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('Submitting...');
    const form = e.target as HTMLFormElement;
    const formData = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    };
    console.log(formData);
    // TODO: wire up to email service (e.g. EmailJS, Formspree)
    setTimeout(() => setFormStatus('Send Message'), 3000);
  };

  return (
    <section id="contact" className="py-24 bg-bg" ref={ref as React.RefObject<HTMLElement>}>
      <div className="container">
        <div className="text-center fade-in mb-16">
          <span className="section-label">Contact</span>
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle mx-auto">
            Ready to start your project? Reach out and we&apos;ll get back to you within 24 hours.
          </p>
        </div>

        {/* Google Maps embed */}
        <div className="fade-in rounded-2xl overflow-hidden mb-12 h-72">
          <iframe
            title="Office Location"
            src="https://maps.google.com/maps?q=International+House,Njuri+Ncheke+Street,Meru,Kenya&output=embed"
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Info */}
          <div className="fade-in">
            <h3 className="font-display font-bold text-xl text-text-base mb-6">
              Contact Information
            </h3>
            <div className="flex flex-col gap-5">
              <a
                href={`tel:${CONTACT.phone}`}
                className="flex items-start gap-4 group"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                  <AiFillPhone />
                </div>
                <div>
                  <div className="text-xs font-semibold text-text-muted uppercase tracking-wide mb-0.5">
                    Phone
                  </div>
                  <div className="text-sm font-medium text-text-base">{CONTACT.phone}</div>
                </div>
              </a>
              <a href={`mailto:${CONTACT.email}`} className="flex items-start gap-4 group">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                  <MdAttachEmail />
                </div>
                <div>
                  <div className="text-xs font-semibold text-text-muted uppercase tracking-wide mb-0.5">
                    Email
                  </div>
                  <div className="text-sm font-medium text-text-base">{CONTACT.email}</div>
                </div>
              </a>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                  <IoLocation />
                </div>
                <div>
                  <div className="text-xs font-semibold text-text-muted uppercase tracking-wide mb-0.5">
                    Address
                  </div>
                  <div className="text-sm font-medium text-text-base">
                    International House, Mezzanine Floor,
                    <br />
                    Njuri Ncheke Street, Meru
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                  <AiFillClockCircle />
                </div>
                <div>
                  <div className="text-xs font-semibold text-text-muted uppercase tracking-wide mb-0.5">
                    Business Hours
                  </div>
                  <div className="text-sm font-medium text-text-base">
                    Mon–Fri: 8AM–5PM
                    <br />
                    Sat: 9AM–1PM &nbsp;·&nbsp; Sun: Closed
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={onSubmit}
            className="fade-in fade-in-delay-1 flex flex-col gap-5"
          >
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="text-xs font-semibold text-text-muted uppercase tracking-wide">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="John Doe"
                required
                className="px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm text-text-base placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-xs font-semibold text-text-muted uppercase tracking-wide">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="john@example.com"
                required
                className="px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm text-text-base placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="text-xs font-semibold text-text-muted uppercase tracking-wide">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Tell us about your project..."
                required
                className="px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm text-text-base placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition resize-none"
              />
            </div>
            <button
              type="submit"
              className="bg-primary text-white font-semibold py-4 rounded-full hover:bg-primary-dark transition-colors mt-2"
            >
              {formStatus}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
