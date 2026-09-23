'use client';

import { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { AiFillPhone } from 'react-icons/ai';
import { CONTACT } from '@/lib/data';

export default function FloatingCTA() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Expandable items */}
      {expanded && (
        <div className="flex flex-col items-end gap-3">
          <a
            href={`tel:+${CONTACT.floatingPhone}`}
            aria-label={`Call us at ${CONTACT.floatingPhoneDisplay}`}
            className="flex items-center gap-3 bg-white text-gray-800 shadow-lg rounded-full px-4 py-2.5 text-sm font-semibold hover:bg-gray-50 transition-colors"
          >
            <span>Call Us</span>
            <div className="w-9 h-9 bg-blue-500 rounded-full flex items-center justify-center text-white">
              <AiFillPhone />
            </div>
          </a>
          <a
            href={`https://wa.me/${CONTACT.floatingPhone}?text=${CONTACT.waMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="flex items-center gap-3 bg-white text-gray-800 shadow-lg rounded-full px-4 py-2.5 text-sm font-semibold hover:bg-gray-50 transition-colors"
          >
            <span>WhatsApp</span>
            <div className="w-9 h-9 bg-[#25D366] rounded-full flex items-center justify-center text-white">
              <FaWhatsapp />
            </div>
          </a>
        </div>
      )}

      {/* Main toggle button */}
      <div className="relative">
        {!expanded && (
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-fcta-pulse" aria-hidden="true" />
        )}
        <button
          onClick={() => setExpanded(!expanded)}
          aria-label="Contact options"
          aria-expanded={expanded}
          className="relative w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center text-2xl shadow-lg hover:bg-[#1ebe5d] transition-colors"
        >
          {expanded ? (
            <span className="text-lg font-bold leading-none">✕</span>
          ) : (
            <FaWhatsapp />
          )}
        </button>
      </div>
    </div>
  );
}
