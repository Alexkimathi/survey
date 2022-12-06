import React from "react";
import "./about.css";
import pic2 from "../../img/s1.jpg";
import pic3 from "../../img/s4.jpg";
import pic4 from "../../img/s5.jpg";

function About() {
  return (
    <section className="section-about">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">About-Us</h2>
      </div>

      <div className="row">
        <div className="col-1-of-2">
          <h3 className="heading-tertiary u-margin-bottom-small">VISION</h3>
          <p className="paragraph">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, enim
            distinctio! Dolore, culpa. Aspernatur soluta enim laboriosam, magnam
            est ad, sint vero officiis dolore, veniam tempora quos vitae eius
            eos?
          </p>

          <h3 className="heading-tertiary u-margin-bottom-small">MISSION</h3>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            natus vel minima cum sunt fugit quibusdam libero iste dignissimos
            reiciendis harum vitae,placeat dolore debitis accusamus recusandae
            quisquam molestiae numquam!
          </p>
          <a href="/" className="btn-text">
            Learn more &rarr;
          </a>
        </div>
        <div className="col-1-of-2">
          <div className="composition">
            <img
              src={pic2}
              alt="p-1"
              className="composition__photo composition__photo--p1"
            />
            <img
              src={pic3}
              alt="p-2"
              className="composition__photo composition__photo--p2"
            />
            <img
              src={pic4}
              alt="p-3"
              className="composition__photo composition__photo--p3"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
