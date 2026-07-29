import React from "react";
import "./ServicesPage.css";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/NavBar";
import PageHero from "../../components/PageHero/PageHero";
import Links from "../../components/footer/Links";
import { RiMapPinFill, RiMap2Fill, RiFileList3Line, RiGlobalLine, RiCheckLine } from "react-icons/ri";

const services = [
  {
    icon: <RiMapPinFill />,
    color: "#22c55e",
    title: "Boundary Survey",
    description:
      "Precise determination of property lines and corners using GPS and total station equipment. We provide legally binding survey documents accepted by the Lands Registry and county governments for land registration, purchase, sale, and dispute resolution.",
    included: [
      "Field reconnaissance and title deed review",
      "RTK GPS and total station measurements",
      "Boundary peg placement and marking",
      "Survey plan drawn to Kenya Survey Act standards",
      "Title deed mutation documents",
      "Court-admissible survey report",
    ],
  },
  {
    icon: <RiMap2Fill />,
    color: "#10b981",
    title: "Construction Survey",
    description:
      "Expert layout surveys to ensure your structures are built exactly to design specifications. We support engineers, architects, and contractors through every phase — from initial grading to final as-built documentation.",
    included: [
      "Site control network establishment",
      "Foundation and column staking",
      "Road and pipeline alignment surveys",
      "Grade and elevation checking",
      "As-built survey and documentation",
      "Building setback verification reports",
    ],
  },
  {
    icon: <RiFileList3Line />,
    color: "#06b6d4",
    title: "Permitting & Subdivision",
    description:
      "End-to-end assistance with land subdivision approvals, title documentation, and permit acquisition from county and national government offices. We handle the paperwork so you can focus on your project.",
    included: [
      "Land subdivision scheme design",
      "County government application preparation",
      "Survey plan submission to Ministry of Lands",
      "Title deed processing and follow-up",
      "Change of user and land use applications",
      "Green card and mutation registration",
    ],
  },
  {
    icon: <RiGlobalLine />,
    color: "#a78bfa",
    title: "Digital Mapping & GIS",
    description:
      "High-resolution aerial and ground mapping using commercial drones and professional GIS software. We create detailed topographic maps, accurate 3D terrain models, and rich spatial datasets for planning, engineering, and environmental purposes.",
    included: [
      "Drone aerial photogrammetry",
      "Topographic survey and contouring",
      "Orthomosaic and DSM generation",
      "GIS layer creation and analysis",
      "3D terrain and volumetric models",
      "Data delivery in GIS-ready formats",
    ],
  },
];

const steps = [
  { number: "01", title: "Consultation", text: "We discuss your project needs, review existing documents, and provide a detailed quote and timeline." },
  { number: "02", title: "Field Survey", text: "Our licensed surveyors mobilise to site with GPS, total stations, and drones to collect precise measurements." },
  { number: "03", title: "Data Processing", text: "Raw field data is processed in our office using professional CAD and GIS software to produce accurate outputs." },
  { number: "04", title: "Final Delivery", text: "Survey plans, reports, and digital files are delivered and submitted to the relevant government offices on your behalf." },
];

function ServicesPage() {
  return (
    <div>
      <Navbar />
      <PageHero
        label="What We Do"
        title="Our Services"
        subtitle="Comprehensive land surveying and mapping solutions powered by modern technology and local expertise."
      />

      {/* Service Cards */}
      <section className="services-page__cards">
        <div className="container">
          <div className="services-page__grid">
            {services.map((s, i) => (
              <div
                key={i}
                className="service-detail-card fade-in"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="service-detail-card__icon" style={{ color: s.color }}>
                  {s.icon}
                </div>
                <h3 className="service-detail-card__title">{s.title}</h3>
                <p className="service-detail-card__desc">{s.description}</p>
                <ul className="service-detail-card__list">
                  {s.included.map((item, j) => (
                    <li key={j} className="service-detail-card__item">
                      <RiCheckLine className="service-detail-card__check" style={{ color: s.color }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Survey Process */}
      <section className="services-page__process">
        <div className="container">
          <div className="text-center fade-in" style={{ marginBottom: "60px" }}>
            <span className="section-label">How It Works</span>
            <h2 className="section-title">Our Survey Process</h2>
            <p className="section-subtitle" style={{ margin: "0 auto" }}>
              A clear, structured approach that keeps you informed at every stage.
            </p>
          </div>
          <div className="services-page__steps">
            {steps.map((step, i) => (
              <div
                key={i}
                className="process-step fade-in"
                style={{ transitionDelay: `${i * 0.12}s` }}
              >
                <div className="process-step__number">{step.number}</div>
                <h3 className="process-step__title">{step.title}</h3>
                <p className="process-step__text">{step.text}</p>
                {i < steps.length - 1 && <div className="process-step__connector" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="services-page__cta">
        <div className="container">
          <div className="services-cta-banner fade-in">
            <div>
              <h2 className="services-cta-banner__title">Ready to Start Your Project?</h2>
              <p className="services-cta-banner__sub">
                Get a free, no-obligation quote from our team within 24 hours.
              </p>
            </div>
            <Link to="/contact" className="services-cta-banner__btn">
              Get a Free Quote →
            </Link>
          </div>
        </div>
      </section>

      <Links />
    </div>
  );
}

export default ServicesPage;
