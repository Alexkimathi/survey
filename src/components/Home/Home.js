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

      <Reviews />
      <div className="home__see-more">
        <Link to="/portfolio" className="home__see-more-link">See our work →</Link>
      </div>

      <FAQ />
      <Contact />
      <Links />
    </div>
  );
}

export default Home;
