import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', message: '', orderType: 'Regular'
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="contact">
      <div className="contact__container">
        <div className="contact__header">
          <span className="contact__section-label">Get in Touch</span>
          <h2 className="contact__title">Ready to Order?</h2>
          <p className="contact__subtitle">
            Place a custom order, ask about bulk orders, or just say hello!
          </p>
        </div>

        <div className="contact__content">
          <div className="contact__info">
            <div className="contact__info-card">
              <span className="contact__info-icon">📍</span>
              <div>
                <h4>Visit Us</h4>
                <p>No. 42, Baker Street, Nungambakkam, Chennai – 600 034</p>
              </div>
            </div>
            <div className="contact__info-card">
              <span className="contact__info-icon">📞</span>
              <div>
                <h4>Call Us</h4>
                <p>+91 98765 43210</p>
              </div>
            </div>
            <div className="contact__info-card">
              <span className="contact__info-icon">📧</span>
              <div>
                <h4>Email Us</h4>
                <p>hello@browniebakers.in</p>
              </div>
            </div>
            <div className="contact__info-card">
              <span className="contact__info-icon">🕐</span>
              <div>
                <h4>Hours</h4>
                <p>Mon–Sat: 9am – 9pm<br />Sunday: 10am – 7pm</p>
              </div>
            </div>
          </div>

          <form className="contact__form" onSubmit={handleSubmit}>
            {submitted && (
              <div className="contact__success">
                🎉 Order request sent! We'll contact you soon.
              </div>
            )}
            <div className="contact__form-row">
              <div className="contact__field">
                <label htmlFor="name">Full Name</label>
                <input id="name" name="name" type="text" placeholder="Your name" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="contact__field">
                <label htmlFor="phone">Phone</label>
                <input id="phone" name="phone" type="tel" placeholder="+91 XXXXX XXXXX" value={formData.phone} onChange={handleChange} required />
              </div>
            </div>
            <div className="contact__field">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" placeholder="your@email.com" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="contact__field">
              <label htmlFor="orderType">Order Type</label>
              <select id="orderType" name="orderType" value={formData.orderType} onChange={handleChange}>
                <option>Regular Order</option>
                <option>Bulk / Corporate</option>
                <option>Custom Gifting</option>
                <option>Wedding / Event</option>
                <option>General Enquiry</option>
              </select>
            </div>
            <div className="contact__field">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="4" placeholder="Tell us about your order..." value={formData.message} onChange={handleChange}></textarea>
            </div>
            <button type="submit" className="contact__submit-btn">
              Send Order Request 🍫
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
