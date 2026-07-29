import React, { useState, useEffect } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import image1 from "../../img/map.jpeg";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`navbar${scrolled ? " navbar--scrolled" : ""}${menuOpen ? " navbar--open" : ""}`}>
      <div className="navbar__container">
        <Link to="/" className="navbar__brand" onClick={closeMenu}>
          <img src={image1} alt="PointMapSolutions" className="navbar__logo" />
          <div className="navbar__brand-text">
            <span className="navbar__brand-name">
              POINT<span className="navbar__brand-accent">MAP</span>SOLUTIONS
            </span>
            <span className="navbar__brand-tagline">Land Surveying & Digital Mapping</span>
          </div>
        </Link>

        <ul className={`navbar__links${menuOpen ? " navbar__links--open" : ""}`}>
          <li><Link to="/" className="navbar__link" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/about" className="navbar__link" onClick={closeMenu}>About</Link></li>
          <li><Link to="/services" className="navbar__link" onClick={closeMenu}>Services</Link></li>
          <li><Link to="/portfolio" className="navbar__link" onClick={closeMenu}>Portfolio</Link></li>
          <li>
            <Link to="/contact" className="navbar__cta" onClick={closeMenu}>
              Contact Us
            </Link>
          </li>
        </ul>

        <button
          className="navbar__hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <RiCloseLine /> : <RiMenuLine />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
