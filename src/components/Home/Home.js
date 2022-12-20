import React from "react";
import "./home.css";
import About from "../About/About";

import Navbar from "../NavBar";
import Features from "./../Features/Features";
import Reviews from "./../Review/Reviews";
import Footer from "./../footer/Footer"

function Home() {
  return (
    <div>
      <header class="header">
        <Navbar />

        <div class="header__text-box">
          <h1 class="heading-primary">
            <span class="heading-primary--main">Best Land Surveying</span>
            <span class="heading-primary--sub">& Digital Mapping Service</span>
          </h1>
          <a href="/" className="btn btn--white btn--animated">
            Explore &rarr;
          </a>
        </div>
      </header>

      <About />

      <Features />
      <Reviews />
      <Footer />
    </div>
  );
}

export default Home;
