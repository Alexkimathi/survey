import React, { useState } from "react";
import "./ContactPage.css";
import Navbar from "../../components/Navbar/NavBar";
import PageHero from "../../components/PageHero/PageHero";
import Links from "../../components/footer/Links";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { AiFillPhone, AiFillClockCircle } from "react-icons/ai";
import { MdAttachEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";

// Fix default marker icons broken by webpack
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const MERU_COORDS = [-0.0469, 37.649];

function ContactPage() {
  const [formStatus, setFormStatus] = useState("Send Message");

  const onSubmit = (e) => {
    e.preventDefault();
    setFormStatus("Submitting...");
    const { name, email, message } = e.target.elements;
    const formData = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    console.log(formData);
    setTimeout(() => setFormStatus("Send Message"), 3000);
  };

  return (
    <div>
      <Navbar />
      <PageHero
        label="Contact"
        title="Get in Touch"
        subtitle="Ready to start your project? Reach out and we'll get back to you within 24 hours."
      />

      <section className="contact-page">
        <div className="container">
          <div className="contact-page__grid">
            {/* Contact Info */}
            <div className="contact-page__info fade-in">
              <h3 className="contact-page__info-title">Contact Information</h3>
              <p className="contact-page__info-intro">
                Visit our office or reach out through any of the channels below. We're available
                Monday to Friday and Saturday mornings.
              </p>
              <div className="contact-page__info-items">
                <a href="tel:0712345678" className="contact-page__info-item">
                  <div className="contact-page__info-icon"><AiFillPhone /></div>
                  <div>
                    <span className="contact-page__info-label">Phone</span>
                    <span className="contact-page__info-value">0712 345 678</span>
                  </div>
                </a>
                <a href="mailto:piontmap@gmail.com" className="contact-page__info-item">
                  <div className="contact-page__info-icon"><MdAttachEmail /></div>
                  <div>
                    <span className="contact-page__info-label">Email</span>
                    <span className="contact-page__info-value">piontmap@gmail.com</span>
                  </div>
                </a>
                <div className="contact-page__info-item">
                  <div className="contact-page__info-icon"><IoLocation /></div>
                  <div>
                    <span className="contact-page__info-label">Address</span>
                    <span className="contact-page__info-value">
                      International House, Mezzanine Floor,<br />
                      Njuri Ncheke Street, Meru
                    </span>
                  </div>
                </div>
                <div className="contact-page__info-item">
                  <div className="contact-page__info-icon"><AiFillClockCircle /></div>
                  <div>
                    <span className="contact-page__info-label">Business Hours</span>
                    <span className="contact-page__info-value">
                      Mon–Fri: 8AM–5PM<br />
                      Sat: 9AM–1PM &nbsp;·&nbsp; Sun: Closed
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={onSubmit} className="contact-page__form fade-in fade-in-delay-1">
              <div className="form-group">
                <label htmlFor="cp-name">Full Name</label>
                <input type="text" id="cp-name" name="name" placeholder="John Doe" required />
              </div>
              <div className="form-group">
                <label htmlFor="cp-email">Email Address</label>
                <input type="email" id="cp-email" name="email" placeholder="john@example.com" required />
              </div>
              <div className="form-group">
                <label htmlFor="cp-message">Message</label>
                <textarea
                  id="cp-message"
                  name="message"
                  rows="6"
                  placeholder="Tell us about your project..."
                  required
                />
              </div>
              <button type="submit" className="contact-page__submit">
                {formStatus}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Leaflet Map */}
      <section className="contact-page__map-section">
        <div className="container">
          <div className="text-center fade-in" style={{ marginBottom: "32px" }}>
            <span className="section-label">Find Us</span>
            <h2 className="section-title">Our Location</h2>
          </div>
          <div className="contact-page__map-wrap fade-in fade-in-delay-1">
            <MapContainer
              center={MERU_COORDS}
              zoom={15}
              scrollWheelZoom={false}
              className="contact-page__map"
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={MERU_COORDS}>
                <Popup>
                  <strong>PointMap Solutions</strong><br />
                  International House, Mezzanine Floor<br />
                  Njuri Ncheke Street, Meru, Kenya
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </section>

      <Links />
    </div>
  );
}

export default ContactPage;
