import React, { useState } from 'react';
import { MapPin, Phone, Truck, MessageCircle, Send, CheckCircle } from 'lucide-react';
import './ContactOrder.css';

const ContactOrder = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', type: 'Regular Order', msg: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="contact-page">
      <div className="contact-page__hero">
        <div className="contact-page__hero-content">
          <span className="contact-page__eyebrow">Contact Us</span>
          <h1 className="contact-page__title">Order / Get in Touch</h1>
          <p className="contact-page__desc">Place an order, ask about bulk deals, or just say hello to the team!</p>
        </div>
      </div>

      <div className="contact-page__container">
        <div className="contact-page__layout">
          {/* Contact Info */}
          <div className="contact-page__info">
            <h2 className="contact-page__info-title">Find Us</h2>
            {[
              { icon: <MapPin size={22} />, title: 'Main Branches', val: 'Bodi (Near ZKM School) | Chinnamanur (Opp Bharath Theatre) | Cumbum (Way to Bus Stand) | Theni' },
              { icon: <Phone size={22} />, title: 'Franchise & Support', val: '95789 09434' },
              { icon: <Phone size={22} />, title: 'Bodi Branch Phone', val: '73977 01009 / 88074 47004' },
              { icon: <Phone size={22} />, title: 'Chinnamanur Branch', val: '73974 61009' },
              { icon: <Phone size={22} />, title: 'Cumbum Branch', val: '73971 91009' },
              { icon: <Truck size={22} />, title: 'Free Delivery', val: 'Free delivery available for branch local areas!' },
            ].map((c, i) => (
              <div key={i} className="contact-page__info-card">
                <div className="contact-page__info-icon">{c.icon}</div>
                <div>
                  <h4>{c.title}</h4>
                  <p>{c.val}</p>
                </div>
              </div>
            ))}
            <div className="contact-page__whatsapp">
              <a href="https://wa.me/919578909434" className="contact-page__wa-btn" target="_blank" rel="noopener noreferrer">
                <MessageCircle size={18} /> Order on WhatsApp (95789 09434)
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form className="contact-page__form" onSubmit={handleSubmit}>
            <h2 className="contact-page__form-title">Send Us a Message</h2>
            {submitted && <div className="contact-page__success"><CheckCircle size={18} /> Message sent! We will get back to you within 2 hours.</div>}
            <div className="contact-page__form-row">
              <div className="contact-page__field">
                <label>Full Name</label>
                <input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Your name" required />
              </div>
              <div className="contact-page__field">
                <label>Phone</label>
                <input value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="+91 XXXXX XXXXX" required />
              </div>
            </div>
            <div className="contact-page__field">
              <label>Email</label>
              <input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="your@email.com" required />
            </div>
            <div className="contact-page__field">
              <label>Type of Order</label>
              <select value={form.type} onChange={e => setForm({ ...form, type: e.target.value })}>
                <option>Regular Order</option>
                <option>Bulk / Corporate</option>
                <option>Custom Cake</option>
                <option>Wedding / Event</option>
                <option>Franchise Inquiry</option>
                <option>General Inquiry</option>
              </select>
            </div>
            <div className="contact-page__field">
              <label>Message</label>
              <textarea rows="5" value={form.msg} onChange={e => setForm({ ...form, msg: e.target.value })} placeholder="Tell us about your order or inquiry..."></textarea>
            </div>
            <button type="submit" className="contact-page__submit">
              <Send size={18} /> Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactOrder;
