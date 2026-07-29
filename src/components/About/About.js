import React from "react";
import "./about.css";
import { Link } from "react-router-dom";
import pic2 from "../../img/s1.jpg";
import pic3 from "../../img/s4.jpg";
import pic4 from "../../img/s5.jpg";

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about__grid">
          <div className="about__content fade-in">
            <span className="section-label">Who We Are</span>
            <h2 className="section-title">
              Precision Surveying<br />You Can Trust
            </h2>

            <div className="about__block fade-in fade-in-delay-1">
              <div className="about__block-icon">🎯</div>
              <div>
                <h3 className="about__block-title">Our Vision</h3>
                <p className="about__block-text">
                  To be the leading land surveying and digital mapping firm in East Africa,
                  delivering precise, reliable, and technologically advanced solutions to
                  clients across all sectors.
                </p>
              </div>
            </div>

            <div className="about__block fade-in fade-in-delay-2">
              <div className="about__block-icon">🚀</div>
              <div>
                <h3 className="about__block-title">Our Mission</h3>
                <p className="about__block-text">
                  To provide accurate and timely surveying services using cutting-edge
                  technology, enabling our clients to make informed decisions about
                  their land and property investments.
                </p>
              </div>
            </div>

            <Link
              to="/services"
              className="about__cta fade-in fade-in-delay-3"
            >
              Our Services →
            </Link>
          </div>

          <div className="about__images fade-in fade-in-delay-1">
            <div className="about__img-grid">
              <img src={pic2} alt="Land surveying work" className="about__img about__img--tall" />
              <img src={pic3} alt="Digital mapping" className="about__img" />
              <img src={pic4} alt="Survey team" className="about__img" />
              <div className="about__badge">
                <span className="about__badge-num">15+</span>
                <span className="about__badge-text">Years of Excellence</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
