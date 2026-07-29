import React, { useState } from "react";
import "./PortfolioPage.css";
import Navbar from "../../components/Navbar/NavBar";
import PageHero from "../../components/PageHero/PageHero";
import Links from "../../components/footer/Links";

import nat1 from "../../img/nat-1.jpg";
import nat2 from "../../img/nat-2.jpg";
import nat3 from "../../img/nat-3.jpg";
import nat4 from "../../img/nat-4.jpg";
import nat5 from "../../img/nat-5.jpg";
import nat6 from "../../img/nat-6.jpg";
import nat7 from "../../img/nat-7.jpg";
import nat8 from "../../img/nat-8.jpg";
import nat9 from "../../img/nat-9.jpg";
import s1 from "../../img/s1.jpg";
import s2 from "../../img/s2.jpg";
import s4 from "../../img/s4.jpg";

const projects = [
  {
    image: nat1,
    type: "Boundary",
    name: "Tigania West Land Demarcation",
    location: "Tigania West, Meru County",
    description: "Boundary survey for 28-acre agricultural parcel with multi-party ownership resolution.",
  },
  {
    image: nat2,
    type: "Construction",
    name: "Meru Township Commercial Block",
    location: "Meru Town Centre",
    description: "Construction layout and as-built survey for a 6-storey commercial building.",
  },
  {
    image: nat3,
    type: "Mapping",
    name: "Tharaka-Nithi Topographic Survey",
    location: "Tharaka-Nithi County",
    description: "Large-scale drone photogrammetry and GIS mapping for county road planning.",
  },
  {
    image: nat4,
    type: "Permitting",
    name: "Kiirua Estate Subdivision",
    location: "Kiirua, Buuri Sub-County",
    description: "Subdivision of 14-acre tract into 42 residential plots with full permit processing.",
  },
  {
    image: nat5,
    type: "Boundary",
    name: "Nkubu Smallholder Parcels",
    location: "Nkubu, Meru County",
    description: "Re-establishment of boundary begs for 16 smallholder farms following road widening.",
  },
  {
    image: nat6,
    type: "Construction",
    name: "Maua-Isiolo Road Alignment",
    location: "Maua, Igembe North",
    description: "Route survey and construction staking for 12 km rural road rehabilitation project.",
  },
  {
    image: nat7,
    type: "Mapping",
    name: "Mt. Kenya Footprint Mapping",
    location: "Chuka, Tharaka-Nithi",
    description: "High-resolution 3D terrain model of forest boundary for conservation authority.",
  },
  {
    image: nat8,
    type: "Boundary",
    name: "Imenti North Agricultural Land",
    location: "Imenti North, Meru",
    description: "Boundary demarcation for cooperative society land covering 110 acres.",
  },
  {
    image: nat9,
    type: "Permitting",
    name: "Timau Gated Community",
    location: "Timau, Buuri Sub-County",
    description: "Change of user and subdivision permits for 20-plot gated community development.",
  },
  {
    image: s1,
    type: "Construction",
    name: "Meru Water Board Pipeline",
    location: "Meru County",
    description: "Alignment survey and setting out for 8 km water distribution pipeline upgrade.",
  },
  {
    image: s2,
    type: "Mapping",
    name: "Meru CBD Digital Basemap",
    location: "Meru Town",
    description: "Comprehensive GIS basemap of Meru CBD for urban planning and infrastructure inventory.",
  },
  {
    image: s4,
    type: "Boundary",
    name: "Laare Tea Farm Survey",
    location: "Laare, North Imenti",
    description: "Boundary re-survey and title deed mutation for 340-acre commercial tea estate.",
  },
];

const filters = ["All", "Boundary", "Construction", "Mapping", "Permitting"];

function PortfolioPage() {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? projects : projects.filter((p) => p.type === active);

  return (
    <div>
      <Navbar />
      <PageHero
        label="Our Work"
        title="Project Portfolio"
        subtitle="A selection of surveying and mapping projects we've delivered across Kenya."
      />

      <section className="portfolio-page">
        <div className="container">
          {/* Filter Tabs */}
          <div className="portfolio-page__filters fade-in">
            {filters.map((f) => (
              <button
                key={f}
                className={`portfolio-filter-btn${active === f ? " portfolio-filter-btn--active" : ""}`}
                onClick={() => setActive(f)}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Project Grid */}
          <div className="portfolio-page__grid">
            {filtered.map((p, i) => (
              <div
                key={`${p.name}-${i}`}
                className="portfolio-card fade-in"
                style={{ transitionDelay: `${(i % 3) * 0.08}s` }}
              >
                <div className="portfolio-card__img-wrap">
                  <img src={p.image} alt={p.name} className="portfolio-card__img" />
                  <div className="portfolio-card__overlay">
                    <span className="portfolio-card__view">View Details</span>
                  </div>
                  <span className="portfolio-card__badge">{p.type}</span>
                </div>
                <div className="portfolio-card__body">
                  <h3 className="portfolio-card__name">{p.name}</h3>
                  <span className="portfolio-card__location">{p.location}</span>
                  <p className="portfolio-card__desc">{p.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Links />
    </div>
  );
}

export default PortfolioPage;
