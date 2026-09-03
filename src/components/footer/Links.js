import React from "react";
import logo from "../../img/map.jpeg";
import "./footer.css";
import data from "./data";
import { Link } from "react-router-dom";
import { AiFillPhone } from "react-icons/ai";
import { MdAttachEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";

function Links() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          {/* Brand */}
          <div className="footer__brand">
            <div className="footer__logo-wrap">
              <img src={logo} alt="PointMapSolutions logo" className="footer__logo" />
              <span className="footer__brand-name">
                POINT<span className="footer__brand-accent">MAP</span>SOLUTIONS
              </span>
            </div>
            <p className="footer__brand-desc">
              Professional land surveying and digital mapping services you can trust,
              powered by precision technology.
            </p>
            <div className="footer__socials">
              {data.map((item) => (
                <a
                  key={item.id}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__social-link"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer__col">
            <h4 className="footer__col-title">Quick Links</h4>
            <ul className="footer__links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer__col">
            <h4 className="footer__col-title">Our Services</h4>
            <ul className="footer__links">
              <li><Link to="/services">Boundary Survey</Link></li>
              <li><Link to="/services">Construction Survey</Link></li>
              <li><Link to="/services">Permitting</Link></li>
              <li><Link to="/services">Digital Mapping</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer__col">
            <h4 className="footer__col-title">Contact</h4>
            <div className="footer__contact">
              <a href="tel:0712345678" className="footer__contact-item">
                <AiFillPhone /> 0712345678
              </a>
              <a href="mailto:piontmap@gmail.com" className="footer__contact-item">
                <MdAttachEmail /> piontmap@gmail.com
              </a>
              <div className="footer__contact-item">
                <IoLocation />
                <span>
                  International House, Mezzanine Floor,<br />
                  Njuri Ncheke Street, Meru
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p>&copy; {new Date().getFullYear()} PointMapSolutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Links;
