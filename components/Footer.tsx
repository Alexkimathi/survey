import Link from 'next/link';
import Image from 'next/image';
import { AiFillPhone } from 'react-icons/ai';
import { MdAttachEmail } from 'react-icons/md';
import { IoLocation } from 'react-icons/io5';
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { FaFacebookSquare } from 'react-icons/fa';
import { CONTACT } from '@/lib/data';

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/contact', label: 'Contact' },
];

const serviceLinks = [
  { href: '/services', label: 'Boundary Survey' },
  { href: '/services', label: 'Construction Survey' },
  { href: '/services', label: 'Permitting' },
  { href: '/services', label: 'Digital Mapping' },
];

const socials = [
  { href: 'https://instagram.com', icon: <AiOutlineInstagram />, label: 'Instagram' },
  { href: 'https://twitter.com', icon: <AiOutlineTwitter />, label: 'Twitter' },
  { href: 'https://facebook.com', icon: <FaFacebookSquare />, label: 'Facebook' },
];

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/img/map.jpeg"
                alt="PointMapSolutions logo"
                width={40}
                height={40}
                className="rounded-full object-cover"
              />
              <span className="font-display font-extrabold text-sm tracking-widest uppercase">
                POINT<span className="text-primary">MAP</span>SOLUTIONS
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Professional land surveying and digital mapping services you can trust,
              powered by precision technology.
            </p>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-primary hover:text-white transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-widest mb-5 text-white/90">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2">
              {quickLinks.map((l) => (
                <li key={l.href + l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/60 hover:text-primary transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-widest mb-5 text-white/90">
              Our Services
            </h4>
            <ul className="flex flex-col gap-2">
              {serviceLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/60 hover:text-primary transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-widest mb-5 text-white/90">
              Contact
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href={`tel:${CONTACT.phone}`}
                className="flex items-center gap-3 text-sm text-white/60 hover:text-primary transition-colors"
              >
                <AiFillPhone className="text-primary flex-shrink-0" />
                {CONTACT.phone}
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-3 text-sm text-white/60 hover:text-primary transition-colors"
              >
                <MdAttachEmail className="text-primary flex-shrink-0" />
                {CONTACT.email}
              </a>
              <div className="flex items-start gap-3 text-sm text-white/60">
                <IoLocation className="text-primary flex-shrink-0 mt-0.5" />
                <span>
                  International House, Mezzanine Floor,
                  <br />
                  Njuri Ncheke Street, Meru
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-white/40">
          &copy; {new Date().getFullYear()} PointMapSolutions. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
