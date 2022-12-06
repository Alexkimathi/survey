import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
import image1 from "../img/map.jpeg";


function Navbar() {
  return (
    <div className="navbar">
      <nav className="nav">
        <div className="header__logo-box">
          <img src={image1} alt="food-1" className="header__logo" />
          <div>
            <h1>
              POINT<span className="span-1">MAP</span>SOLUTIONS
            </h1>
            <p>LandSurveying & Digital Mapping</p>
          </div>
          <div className="items">
            <ul>
              <NavLink to={"/"} exact="true" className="btn-text-1">
                Home
              </NavLink>

              <NavLink to={"/"} exact="true" className="btn-text-1">
                About us
              </NavLink>

              <NavLink to={"/"} exact="true" className="btn-text-1">
                FAQ
              </NavLink>

              <NavLink to={"/"} exact="true" className="btn-text-1">
                Contact us
              </NavLink>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
