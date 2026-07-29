import React from "react";
import "./AboutPage.css";
import Navbar from "../../components/Navbar/NavBar";
import PageHero from "../../components/PageHero/PageHero";
import Links from "../../components/footer/Links";
import {
  RiShieldCheckLine,
  RiToolsLine,
  RiTimeLine,
  RiMoneyDollarCircleLine,
  RiMapPinLine,
} from "react-icons/ri";
import nat1 from "../../img/nat-1.jpg";
import nat2 from "../../img/nat-2.jpg";
import nat3 from "../../img/nat-3.jpg";
import nat4 from "../../img/nat-4.jpg";

const teamMembers = [
  {
    name: "James Mwangi",
    role: "Lead Surveyor",
    image: nat1,
    bio: "Licensed land surveyor with 18 years of field experience across Kenya. Specialises in boundary surveys and complex terrain analysis.",
  },
  {
    name: "Grace Njiru",
    role: "Senior Surveyor",
    image: nat2,
    bio: "Expert in construction layout and as-built surveys. Grace has delivered over 400 projects for residential and commercial clients.",
  },
  {
    name: "Peter Kirimi",
    role: "GIS Analyst",
    image: nat3,
    bio: "Certified GIS professional skilled in drone photogrammetry, spatial data modelling, and producing high-accuracy digital terrain models.",
  },
  {
    name: "Alice Murithi",
    role: "Office Manager",
    image: nat4,
    bio: "Ensures seamless project coordination, client communication, and permit processing. Alice keeps every project on time and on budget.",
  },
];

const whyUs = [
  {
    icon: <RiShieldCheckLine />,
    title: "Fully Licensed",
    text: "Registered with the Institution of Surveyors of Kenya and compliant with the Survey Act.",
  },
  {
    icon: <RiToolsLine />,
    title: "Modern Equipment",
    text: "We use RTK GPS, robotic total stations, and commercial drones for maximum precision.",
  },
  {
    icon: <RiTimeLine />,
    title: "Fast Turnaround",
    text: "Most surveys are completed and documented within 3–5 business days.",
  },
  {
    icon: <RiMoneyDollarCircleLine />,
    title: "Affordable Rates",
    text: "Transparent, competitive pricing with no hidden costs. We offer package deals for large projects.",
  },
  {
    icon: <RiMapPinLine />,
    title: "Local Expertise",
    text: "Deep knowledge of Meru County terrain, regulations, and county government requirements.",
  },
];

const certifications = [
  "Survey Act Compliance",
  "County Government Approved",
  "ISO Standards",
  "ISK Registered",
  "EARSC Member",
];

function AboutPage() {
  return (
    <div>
      <Navbar />
      <PageHero
        label="Who We Are"
        title="Precision Surveying You Can Trust"
        subtitle="PointMap Solutions has been delivering accurate, technology-driven surveying and mapping services across Kenya since 2009."
      />

      {/* Our Story */}
      <section className="about-page__story">
        <div className="container">
          <div className="about-page__story-grid fade-in">
            <div>
              <span className="section-label">Our Story</span>
              <h2 className="section-title">15+ Years of Excellence</h2>
              <p className="about-page__para">
                PointMap Solutions was founded in Meru, Kenya in 2009 by a team of passionate
                surveyors who believed that precision and technology could transform how land
                is measured, mapped, and managed in East Africa.
              </p>
              <p className="about-page__para">
                Starting with a single GPS unit and a commitment to accuracy, we have grown
                into a full-service surveying firm trusted by homeowners, developers,
                engineers, and county governments. Our work spans boundary demarcation,
                construction layout, subdivision permitting, and large-scale digital mapping
                across Meru and the wider Mt. Kenya region.
              </p>
              <p className="about-page__para">
                Today, our team of licensed surveyors and GIS specialists combine decades of
                field experience with the latest drone photogrammetry and RTK GPS technology
                to deliver results that are accurate, legally sound, and delivered on time.
              </p>
            </div>
            <div className="about-page__story-stats fade-in fade-in-delay-1">
              {[
                { num: "15+", label: "Years in Business" },
                { num: "1,200+", label: "Projects Completed" },
                { num: "40+", label: "Counties Served" },
                { num: "98%", label: "Client Satisfaction" },
              ].map((s, i) => (
                <div key={i} className="about-page__stat-card">
                  <span className="about-page__stat-num">{s.num}</span>
                  <span className="about-page__stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="about-page__team">
        <div className="container">
          <div className="text-center fade-in" style={{ marginBottom: "60px" }}>
            <span className="section-label">The Team</span>
            <h2 className="section-title">Meet Our Experts</h2>
            <p className="section-subtitle" style={{ margin: "0 auto" }}>
              Experienced professionals committed to delivering accurate results on every project.
            </p>
          </div>
          <div className="about-page__team-grid">
            {teamMembers.map((m, i) => (
              <div
                key={i}
                className="team-card fade-in"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="team-card__img-wrap">
                  <img src={m.image} alt={m.name} className="team-card__img" />
                </div>
                <div className="team-card__body">
                  <h3 className="team-card__name">{m.name}</h3>
                  <span className="team-card__role">{m.role}</span>
                  <p className="team-card__bio">{m.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="about-page__why">
        <div className="container">
          <div className="text-center fade-in" style={{ marginBottom: "60px" }}>
            <span className="section-label">Why Us</span>
            <h2 className="section-title">Why Choose PointMap?</h2>
          </div>
          <div className="about-page__why-grid">
            {whyUs.map((item, i) => (
              <div
                key={i}
                className="why-card fade-in"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <div className="why-card__icon">{item.icon}</div>
                <h3 className="why-card__title">{item.title}</h3>
                <p className="why-card__text">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="about-page__certs">
        <div className="container">
          <div className="text-center fade-in" style={{ marginBottom: "40px" }}>
            <span className="section-label">Accreditations</span>
            <h2 className="section-title">Our Certifications</h2>
          </div>
          <div className="about-page__certs-row fade-in fade-in-delay-1">
            {certifications.map((cert, i) => (
              <span key={i} className="cert-badge">{cert}</span>
            ))}
          </div>
        </div>
      </section>

      <Links />
    </div>
  );
}

export default AboutPage;
