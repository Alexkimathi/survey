'use client';

import { useState } from 'react';
import { AiFillPhone, AiFillClockCircle } from 'react-icons/ai';
import { MdAttachEmail } from 'react-icons/md';
import { IoLocation } from 'react-icons/io5';
import { useFadeIn } from '@/hooks/useFadeIn';
import { CONTACT } from '@/lib/data';

export default function ContactFormSection() {
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
    setTimeout(() => setFormStatus('Send Message'), 3000);
  };

  return (
    <section className="py-24 bg-white" ref={ref as React.RefObject<HTMLElement>}>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Info */}
          <div className="fade-in">
            <h3 className="font-display font-bold text-2xl text-text-base mb-2">
              Contact Information
            </h3>
            <p className="text-text-muted text-sm leading-relaxed mb-8">
              Visit our office or reach out through any of the channels below. We&apos;re available
              Monday to Friday and Saturday mornings.
            </p>

            <div className="flex flex-col gap-6">
              <a href={`tel:${CONTACT.phone}`} className="flex items-start gap-4 group">
                <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                  <AiFillPhone />
                </div>
                <div>
                  <div className="text-xs font-bold text-text-muted uppercase tracking-wider mb-0.5">
                    Phone
                  </div>
                  <div className="text-sm font-medium text-text-base">
                    {CONTACT.phoneDisplay}
                  </div>
                </div>
              </a>

              <a href={`mailto:${CONTACT.email}`} className="flex items-start gap-4 group">
                <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                  <MdAttachEmail />
                </div>
                <div>
                  <div className="text-xs font-bold text-text-muted uppercase tracking-wider mb-0.5">
                    Email
                  </div>
                  <div className="text-sm font-medium text-text-base">{CONTACT.email}</div>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                  <IoLocation />
                </div>
                <div>
                  <div className="text-xs font-bold text-text-muted uppercase tracking-wider mb-0.5">
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
                <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                  <AiFillClockCircle />
                </div>
                <div>
                  <div className="text-xs font-bold text-text-muted uppercase tracking-wider mb-0.5">
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
          <form onSubmit={onSubmit} className="fade-in fade-in-delay-1 flex flex-col gap-5">
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="cp-name"
                className="text-xs font-bold text-text-muted uppercase tracking-wider"
              >
                Full Name
              </label>
              <input
                type="text"
                id="cp-name"
                name="name"
                placeholder="John Doe"
                required
                className="px-4 py-3 bg-bg border border-gray-200 rounded-xl text-sm text-text-base placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="cp-email"
                className="text-xs font-bold text-text-muted uppercase tracking-wider"
              >
                Email Address
              </label>
              <input
                type="email"
                id="cp-email"
                name="email"
                placeholder="john@example.com"
                required
                className="px-4 py-3 bg-bg border border-gray-200 rounded-xl text-sm text-text-base placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="cp-message"
                className="text-xs font-bold text-text-muted uppercase tracking-wider"
              >
                Message
              </label>
              <textarea
                id="cp-message"
                name="message"
                rows={6}
                placeholder="Tell us about your project..."
                required
                className="px-4 py-3 bg-bg border border-gray-200 rounded-xl text-sm text-text-base placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition resize-none"
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
