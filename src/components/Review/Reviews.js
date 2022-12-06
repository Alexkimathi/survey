import React from "react";
import pic5 from "../../img/nat-8.jpg";
import pic6 from "../../img/nat-9.jpg";

import "./review.css";

function Reviews() {
  return (
    <section class="section-stories">
      <div class="u-center-text u-margin-bottom-big">
        <h2 class="heading-secondary">A Happy And satisfied Client is our Priority</h2>
      </div>

      <div class="row">
        <div class="story">
          <figure class="story__shape">
            <img src={pic5} alt="tour" class="story__img" />
            <ficaption class="story__caption">Mabel Kinya</ficaption>
          </figure>
          <div class="story__text">
            <h3 class="heading-tertiary u-margin-bottom-small">
              I had the best week ever with my family
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              aspernatur est rerum? Eveniet aut minus a corporis voluptatem est,
              accusamus saepe quaerat mollitia repellendus, perferendis,
              perspiciatis sit repellat. Laborum, aperiam?
            </p>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="story">
          <figure class="story__shape">
            <img src={pic6} alt="tour" class="story__img" />
            <ficaption class="story__caption">Alex Kim</ficaption>
          </figure>
          <div class="story__text">
            <h3 class="heading-tertiary u-margin-bottom-small">
              Wow! i had fun
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              aspernatur est rerum? Eveniet aut minus a corporis voluptatem est,
              accusamus saepe quaerat mollitia repellendus, perferendis,
              perspiciatis sit repellat. Laborum, aperiam?
            </p>
          </div>
        </div>
      </div>

      <div class="u-center-text u-margin-top-huge">
        <a href="/" class="btn-text">
          Read all stories &rarr;
        </a>
      </div>
    </section>
  );
}

export default Reviews;
