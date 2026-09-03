import React from "react";
import pic5 from "../../img/nat-8.jpg";
import pic6 from "../../img/nat-9.jpg";
import "./review.css";
import { RiStarFill, RiDoubleQuotesL } from "react-icons/ri";

const reviews = [
  {
    img: pic5,
    name: "Mabel Kinya",
    role: "Property Developer",
    rating: 5,
    title: "Exceptional quality of work",
    text: "PointMapSolutions exceeded all our expectations. Their boundary survey was incredibly precise and delivered ahead of schedule. The team was professional, communicative, and thorough. I wouldn't hesitate to work with them again on future projects.",
  },
  {
    img: pic6,
    name: "Alex Kim",
    role: "Civil Engineer",
    rating: 5,
    title: "Outstanding level of professionalism",
    text: "Working with this team on our construction survey was a genuine pleasure. Their use of modern GPS equipment and detailed reporting gave us full confidence throughout the build process. The digital maps they produced were precise and easy to integrate.",
  },
];

function Stars({ count }) {
  return (
    <div className="review-stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <RiStarFill key={i} className={i < count ? "star star--filled" : "star"} />
      ))}
    </div>
  );
}

function Reviews() {
  return (
    <section className="reviews">
      <div className="container">
        <div className="text-center fade-in" style={{ marginBottom: "60px" }}>
          <span className="section-label">Testimonials</span>
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            Client satisfaction is our top priority. Here's what some of our clients
            have to say about working with us.
          </p>
        </div>

        <div className="reviews__grid">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="review-card fade-in"
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <RiDoubleQuotesL className="review-card__quote-icon" />
              <h4 className="review-card__title">"{review.title}"</h4>
              <p className="review-card__text">{review.text}</p>
              <div className="review-card__bottom">
                <img src={review.img} alt={review.name} className="review-card__img" />
                <div className="review-card__meta">
                  <h3 className="review-card__name">{review.name}</h3>
                  <p className="review-card__role">{review.role}</p>
                  <Stars count={review.rating} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Reviews;
