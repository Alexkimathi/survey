import React from "react";
import "./feature.css";
import {RiMapPinFill} from 'react-icons/ri';
import {RiMap2Fill} from 'react-icons/ri';
import {SiGooglemaps} from 'react-icons/si';
import {FaFileSignature} from 'react-icons/fa'

function Features() {
  return (
    <section class="section-features">
      <h2 className="heading-secondary-1">What we do</h2>

      <div class="row">
        <div class="col-1-of-4">
          <div class="feature-box">
            <i class="feature-box__icon"> <RiMapPinFill /> </i>
            <h3 class="heading-tertiary u-margin-bottom-small">
              Boundary Survey
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
            <i class="feature-box__icon"><RiMap2Fill /> </i>
            <h3 class="heading-tertiary u-margin-bottom-small">
              Construction Survey
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
            <i class="feature-box__icon icon-basic-map"><FaFileSignature /></i>
            <h3 class="heading-tertiary u-margin-bottom-small">
              Permmiting
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
            <i class="feature-box__icon"><SiGooglemaps /></i>
            <h3 class="heading-tertiary u-margin-bottom-small">
              Mapping
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
