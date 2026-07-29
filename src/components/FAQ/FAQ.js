import React, { useState } from "react";
import "./faq.css";
import { RiAddLine, RiSubtractLine } from "react-icons/ri";

const faqs = [
  {
    question: "What types of surveys do you offer?",
    answer:
      "We offer boundary surveys, construction surveys, topographic surveys, digital mapping, and permitting assistance. Our team uses modern GPS and total station equipment to handle both small residential and large commercial projects.",
  },
  {
    question: "How long does a typical survey take?",
    answer:
      "Survey duration depends on project scope. A standard residential boundary survey typically takes 1–3 days. Larger commercial or mapping projects may take 1–3 weeks. We provide accurate timelines during the initial consultation.",
  },
  {
    question: "Are your surveys legally recognized?",
    answer:
      "Yes. All surveys are conducted by licensed professionals and comply with Kenya's Survey Act. Our documents are accepted by county governments, the Ministry of Lands, and financial institutions for property transactions.",
  },
  {
    question: "Do you serve areas outside of Meru?",
    answer:
      "Yes, we operate across Kenya. While our headquarters is in Meru (International House, Njuri Ncheke Street), our team is mobile and can handle projects throughout the country.",
  },
  {
    question: "How do I get a quote for my project?",
    answer:
      "Fill out the contact form below or call us at 0712345678. We'll schedule a brief consultation to understand your needs and provide a detailed quote within 24 hours.",
  },
];

function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" className="faq">
      <div className="container">
        <div className="text-center fade-in" style={{ marginBottom: "60px" }}>
          <span className="section-label">FAQ</span>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            Have questions? We've got answers. If you don't see what you're
            looking for, reach out directly.
          </p>
        </div>

        <div className="faq__list">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`faq__item fade-in${open === i ? " faq__item--open" : ""}`}
              style={{ transitionDelay: `${i * 0.07}s` }}
            >
              <button
                className="faq__question"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span>{faq.question}</span>
                <span className="faq__icon">
                  {open === i ? <RiSubtractLine /> : <RiAddLine />}
                </span>
              </button>
              <div className="faq__answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
