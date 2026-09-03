import React from "react";
import "./contact.css";
import { AiFillPhone } from "react-icons/ai";
import { MdAttachEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { AiFillClockCircle } from "react-icons/ai";

const Contact = () => {
  const [formStatus, setFormStatus] = React.useState("Send Message");

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
    // TODO: wire up to email service (e.g. EmailJS, Formspree)
    setTimeout(() => setFormStatus("Send Message"), 3000);
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="text-center fade-in" style={{ marginBottom: "60px" }}>
          <span className="section-label">Contact</span>
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            Ready to start your project? Reach out and we'll get back to you within 24 hours.
          </p>
        </div>

        <div className="contact__map fade-in">
          <iframe
            title="Office Location"
            src="https://maps.google.com/maps?q=International+House,Njuri+Ncheke+Street,Meru,Kenya&output=embed"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="contact__grid">
          <div className="contact__info fade-in">
            <h3 className="contact__info-title">Contact Information</h3>
            <div className="contact__info-items">
              <a href="tel:0712345678" className="contact__info-item">
                <div className="contact__info-icon"><AiFillPhone /></div>
                <div>
                  <span className="contact__info-label">Phone</span>
                  <span className="contact__info-value">0712345678</span>
                </div>
              </a>

              <a href="mailto:piontmap@gmail.com" className="contact__info-item">
                <div className="contact__info-icon"><MdAttachEmail /></div>
                <div>
                  <span className="contact__info-label">Email</span>
                  <span className="contact__info-value">piontmap@gmail.com</span>
                </div>
              </a>

              <div className="contact__info-item">
                <div className="contact__info-icon"><IoLocation /></div>
                <div>
                  <span className="contact__info-label">Address</span>
                  <span className="contact__info-value">
                    International House, Mezzanine Floor,<br />
                    Njuri Ncheke Street, Meru
                  </span>
                </div>
              </div>

              <div className="contact__info-item">
                <div className="contact__info-icon"><AiFillClockCircle /></div>
                <div>
                  <span className="contact__info-label">Business Hours</span>
                  <span className="contact__info-value">
                    Mon–Fri: 8AM–5PM<br />
                    Sat: 9AM–1PM &nbsp;·&nbsp; Sun: Closed
                  </span>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={onSubmit} className="contact__form fade-in fade-in-delay-1">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" placeholder="John Doe" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" placeholder="john@example.com" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                rows="5"
                placeholder="Tell us about your project..."
                required
              />
            </div>
            <button type="submit" className="contact__submit">
              {formStatus}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
