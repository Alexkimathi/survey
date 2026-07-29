import React, { useState } from "react";
import "./FloatingCTA.css";
import { FaWhatsapp } from "react-icons/fa";
import { AiFillPhone } from "react-icons/ai";

const PHONE = "254708353465";
const PHONE_DISPLAY = "+254 708 353 465";
const WA_MESSAGE = encodeURIComponent(
  "Hello PointMap Solutions, I would like to enquire about your land surveying services."
);

function FloatingCTA() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`fcta${expanded ? " fcta--open" : ""}`}>
      {/* Tooltip labels — visible when expanded */}
      <div className="fcta__items">
        <a
          href={`tel:+${PHONE}`}
          className="fcta__item fcta__item--call"
          aria-label={`Call us at ${PHONE_DISPLAY}`}
        >
          <AiFillPhone className="fcta__icon" />
          <span className="fcta__label">Call Us</span>
        </a>

        <a
          href={`https://wa.me/${PHONE}?text=${WA_MESSAGE}`}
          target="_blank"
          rel="noopener noreferrer"
          className="fcta__item fcta__item--wa"
          aria-label="Chat on WhatsApp"
        >
          <FaWhatsapp className="fcta__icon" />
          <span className="fcta__label">WhatsApp</span>
        </a>
      </div>

      {/* Main toggle button */}
      <button
        className="fcta__toggle"
        onClick={() => setExpanded(!expanded)}
        aria-label="Contact options"
        aria-expanded={expanded}
      >
        <FaWhatsapp className={`fcta__toggle-icon fcta__toggle-icon--wa${expanded ? " fcta__toggle-icon--hidden" : ""}`} />
        <span className={`fcta__toggle-icon fcta__toggle-close${expanded ? "" : " fcta__toggle-icon--hidden"}`}>✕</span>
      </button>

      {/* Pulse ring (only when closed) */}
      {!expanded && <span className="fcta__pulse" aria-hidden="true" />}
    </div>
  );
}

export default FloatingCTA;
