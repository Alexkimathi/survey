import React from "react";
import "./feature.css";
import { RiMapPinFill, RiMap2Fill, RiFileList3Line, RiGlobalLine } from "react-icons/ri";

const services = [
  {
    number: "01",
    icon: <RiMapPinFill />,
    title: "Boundary Survey",
    description:
      "Precise determination of property lines and corners using GPS and total station equipment. We provide legally binding survey documents for land registration and dispute resolution.",
    color: "#22c55e",
  },
  {
    number: "02",
    icon: <RiMap2Fill />,
    title: "Construction Survey",
    description:
      "Expert layout surveys to ensure structures are built to design specifications. We support engineers and contractors with grading, staking, and as-built surveys.",
    color: "#10b981",
  },
  {
    number: "03",
    icon: <RiFileList3Line />,
    title: "Permitting",
    description:
      "Comprehensive assistance with land subdivision approvals, title documentation, and permit acquisition from county and national government bodies.",
    color: "#06b6d4",
  },
  {
    number: "04",
    icon: <RiGlobalLine />,
    title: "Digital Mapping",
    description:
      "High-resolution aerial and ground mapping using drone technology and GIS software. We create detailed topographic maps and accurate 3D terrain models.",
    color: "#a78bfa",
  },
];

function Features() {
  return (
    <section id="features" className="features">
      <div className="container">
        <div className="text-center fade-in" style={{ marginBottom: "60px" }}>
          <span className="section-label">What We Do</span>
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            Comprehensive land surveying and mapping solutions powered by modern technology
            and decades of expertise.
          </p>
        </div>

        <div className="features__grid">
          {services.map((service, i) => (
            <div
              key={i}
              className="feature-card fade-in"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <span className="feature-card__number">{service.number}</span>
              <div className="feature-card__icon" style={{ color: service.color }}>
                {service.icon}
              </div>
              <h3 className="feature-card__title">{service.title}</h3>
              <p className="feature-card__text">{service.description}</p>
              <span className="feature-card__arrow" style={{ color: service.color }}>
                Learn more →
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
