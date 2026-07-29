import React from "react";
import "./PageHero.css";

function PageHero({ label, title, subtitle }) {
  return (
    <section className="page-hero">
      <div className="page-hero__glow page-hero__glow--1" />
      <div className="page-hero__glow page-hero__glow--2" />
      <div className="page-hero__content">
        {label && <span className="section-label">{label}</span>}
        <h1 className="page-hero__title">{title}</h1>
        {subtitle && <p className="page-hero__subtitle">{subtitle}</p>}
      </div>
    </section>
  );
}

export default PageHero;
