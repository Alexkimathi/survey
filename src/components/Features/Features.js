import React from "react";
import "./feature.css";

function Features() {
  return (
    <section class="section-features">
      <h2 className="heading-secondary-1">What we do</h2>

      <div class="row">
        <div class="col-1-of-4">
          <div class="feature-box">
            <i class="feature-box__icon icon-basic-world"></i>
            <h3 class="heading-tertiary u-margin-bottom-small">
              Explore the world
            </h3>
            <p class="feature-box-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              nisi officiis accusantium temporibus corporis molestias dolore
              dicta, eveniet cumque ea porro enim aliquam expedita illum
              cupiditate. Tenetur, nam. Vel, numquam.
            </p>
          </div>
        </div>

        <div class="col-1-of-4">
          <div class="feature-box">
            <i class="feature-box__icon icon-basic-compass"></i>
            <h3 class="heading-tertiary u-margin-bottom-small">Meet Nature</h3>
            <p class="feature-box-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              nisi officiis accusantium temporibus corporis molestias dolore
              dicta, eveniet cumque ea porro enim aliquam expedita illum
              cupiditate. Tenetur, nam. Vel, numquam.
            </p>
          </div>
        </div>

        <div class="col-1-of-4">
          <div class="feature-box">
            <i class="feature-box__icon icon-basic-map"></i>
            <h3 class="heading-tertiary u-margin-bottom-small">
              Find Your Way
            </h3>
            <p class="feature-box-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              nisi officiis accusantium temporibus corporis molestias dolore
              dicta, eveniet cumque ea porro enim aliquam expedita illum
              cupiditate. Tenetur, nam. Vel, numquam.
            </p>
          </div>
        </div>

        <div class="col-1-of-4">
          <div class="feature-box">
            <i class="feature-box__icon icon-basic-heart"></i>
            <h3 class="heading-tertiary u-margin-bottom-small">
              Live A Healthier Life
            </h3>
            <p class="feature-box-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              nisi officiis accusantium temporibus corporis molestias dolore
              dicta, eveniet cumque ea porro enim aliquam expedita illum
              cupiditate. Tenetur, nam. Vel, numquam.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
