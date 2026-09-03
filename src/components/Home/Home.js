import React from "react";
import "./home.css";
import { useNavigate, Link } from "react-router-dom";
import About from "../About/About";
import Navbar from "../Navbar/NavBar";
import Features from "../Features/Features";
import Reviews from "../Review/Reviews";
import Links from "../footer/Links";
import Contact from "../Contact/Contact";
import Stats from "../Stats/Stats";
import FAQ from "../FAQ/FAQ";
import {
  RiPhoneLine,
  RiMapPin2Line,
  RiComputerLine,
  RiFileTextLine,
  RiCheckLine,
} from "react-icons/ri";
import { AiFillPhone } from "react-icons/ai";

const processSteps = [
  {
    num: "01",
    icon: <RiPhoneLine />,
    title: "Consultation",
    text: "We discuss your project scope, boundaries, and requirements to give you a precise quote and clear timeline.",
  },
  {
    num: "02",
    icon: <RiMapPin2Line />,
    title: "Field Survey",
    text: "Our certified surveyors visit the site with GPS and total station equipment to capture accurate data.",
  },
  {
    num: "03",
    icon: <RiComputerLine />,
    title: "Data Processing",
    text: "We process all field data using industry-leading GIS and CAD software to produce precise deliverables.",
  },
  {
    num: "04",
    icon: <RiFileTextLine />,
    title: "Final Delivery",
    text: "You receive certified survey documents, digital maps, and all supporting materials within the agreed timeline.",
  },
];

function Home() {
  const navigate = useNavigate();

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Navbar />

      {/* ---- HERO ---- */}
      <section id="hero" className="hero">
        <div className="hero__bg" />
        <div className="hero__glow hero__glow--1" />
        <div className="hero__glow hero__glow--2" />

        <div className="hero__content">
          <div className="hero__badge">
            <span className="hero__badge-dot" />
            Professional Land Surveying Services — Meru, Kenya
          </div>

          <h1 className="hero__title">
            Best Land Surveying<br />
            <span className="text-gradient">&amp; Digital Mapping</span><br />
            Service
          </h1>

          <p className="hero__subtitle">
            Precision-driven boundary, construction, and digital mapping solutions
            for clients across Kenya — delivered with accuracy you can trust.
          </p>

          <div className="hero__actions">
            <button onClick={() => navigate("/contact")} className="btn-primary">
              Get a Free Quote
            </button>
            <button onClick={() => navigate("/about")} className="btn-ghost">
              Learn More →
            </button>
          </div>

          {/* Trust bar */}
          <div className="hero__trust">
            <div className="hero__trust-avatars">
              <div className="hero__trust-avatar" style={{ background: "#10b981" }}>MK</div>
              <div className="hero__trust-avatar" style={{ background: "#3b82f6" }}>AK</div>
              <div className="hero__trust-avatar" style={{ background: "#f59e0b" }}>JO</div>
              <div className="hero__trust-avatar" style={{ background: "#ec4899" }}>NW</div>
            </div>
            <div className="hero__trust-divider" />
            <div className="hero__trust-text">
              <div className="hero__trust-stars">★★★★★</div>
              <span>Trusted by 200+ clients across Kenya</span>
            </div>
          </div>
        </div>

        <button className="hero__scroll-indicator" onClick={() => scrollTo("stats")} aria-label="Scroll down">
          <div className="hero__scroll-mouse">
            <div className="hero__scroll-dot" />
          </div>
        </button>
      </section>

      <Stats />

      <About />
      <div className="home__see-more">
        <Link to="/about" className="home__see-more-link">Learn more about us →</Link>
      </div>

      <Features />
      <div className="home__see-more">
        <Link to="/services" className="home__see-more-link">View all services →</Link>
      </div>

      {/* ---- HOW WE WORK ---- */}
      <section className="process">
        <div className="container">
          <div className="text-center fade-in" style={{ marginBottom: "60px" }}>
            <span className="section-label">Our Process</span>
            <h2 className="section-title">How We Work</h2>
            <p className="section-subtitle" style={{ margin: "0 auto" }}>
              A clear, structured approach to every project — from the first call
              to the final certified document.
            </p>
          </div>

          <div className="process__grid">
            {processSteps.map((step, i) => (
              <div
                key={i}
                className="process__step fade-in"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="process__step-num">{step.num}</div>
                <div className="process__step-icon">{step.icon}</div>
                <h3 className="process__step-title">{step.title}</h3>
                <p className="process__step-text">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Reviews />
      <div className="home__see-more">
        <Link to="/portfolio" className="home__see-more-link">See our work →</Link>
      </div>

      <FAQ />

      {/* ---- CTA BAND ---- */}
      <section className="cta-band">
        <div className="container">
          <div className="cta-band__inner">
            <div className="cta-band__content fade-in">
              <span className="cta-band__label">Get Started Today</span>
              <h2 className="cta-band__title">
                Ready to start your<br />
                <span className="text-gradient">land survey project?</span>
              </h2>
              <p className="cta-band__text">
                Get precise, legally binding survey documents delivered within your
                agreed timeline. Our certified team is ready to help you.
              </p>
              <ul className="cta-band__list">
                <li><RiCheckLine /> Free initial consultation</li>
                <li><RiCheckLine /> GPS &amp; total station accuracy</li>
                <li><RiCheckLine /> Certified government documents</li>
              </ul>
            </div>
            <div className="cta-band__actions fade-in fade-in-delay-1">
              <button
                onClick={() => navigate("/contact")}
                className="cta-band__btn-primary"
              >
                Get a Free Quote →
              </button>
              <a href="tel:+254708353465" className="cta-band__btn-ghost">
                <AiFillPhone /> +254 708 353 465
              </a>
            </div>
          </div>
        </div>
      </section>

      <Contact />
      <Links />
    </div>
  );
}

export default Home;
