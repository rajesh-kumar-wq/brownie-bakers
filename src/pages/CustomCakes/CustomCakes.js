import React, { useState } from 'react';
import { Cake, Heart, Gift, Sparkles, Flame, Car, Smile, Star, CheckCircle } from 'lucide-react';
import './CustomCakes.css';

const themes = [
  { name: 'Photo Cake', price: '+₹299 / +₹399', icon: <Cake size={28} />, desc: 'Custom edible photo printed directly onto fresh cream cake' },
  { name: 'Barbie Cake', price: '+₹450', tag: 'Top Seller', icon: <Heart size={28} />, desc: '3D handcrafted Barbie princess gown cake for birthday girls' },
  { name: 'Car Cake', price: '+₹549', tag: 'Top Seller', icon: <Car size={28} />, desc: 'Custom 3D sculpted race car / sports car theme cake' },
  { name: 'Pull Me Up Cake', price: '+₹699', tag: 'Top Seller', icon: <Sparkles size={28} />, desc: 'Trending cascade cake with molten ganache pull-up sleeve' },
  { name: 'Fire Theme Cake', price: '+₹499', icon: <Flame size={28} />, desc: 'Dramatic burning candle / flame theme effect celebration cake' },
  { name: 'Pinata Cake', price: '+₹999', icon: <Gift size={28} />, desc: 'Chocolate shell surprise cake with hammer & treats inside' },
  { name: 'Fondant Cake', price: '₹799 / ₹1399', tag: 'Top Seller', icon: <Star size={28} />, desc: 'Custom 3D fondant art sculpturing (½ kg / 1 kg)' },
  { name: 'Tier Cakes', price: 'Custom Quote', icon: <Cake size={28} />, desc: 'Grand multi-tier wedding, anniversary & reception milestone cakes' },
  { name: 'Unicorn & Cartoon Cakes', price: 'Custom Quote', icon: <Smile size={28} />, desc: 'Magical Unicorn, Marvel Avengers, Chhota Bheem, Cocomelon themes' },
  { name: 'Bomb Cake', price: 'Rent ₹249', icon: <Flame size={28} />, desc: 'Exploding bomb shell opening reveal cake casing' },
];

const steps = [
  { step: '01', title: 'Choose Theme', desc: 'Browse our design catalogue or share your inspiration photo' },
  { step: '02', title: 'Customise', desc: 'Pick size, flavour, frosting type, and add-ons' },
  { step: '03', title: 'Place Order', desc: 'Book at least 3 days in advance with 30% advance payment' },
  { step: '04', title: 'Pick Up / Deliver', desc: 'Fresh on your chosen date, guaranteed on-time delivery' },
];

const CustomCakes = () => {
  const [form, setForm] = useState({ name: '', phone: '', date: '', size: '1 kg', msg: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="custom-page">
      <div className="custom-page__hero">
        <div className="custom-page__hero-content">
          <span className="custom-page__eyebrow">Made to Order</span>
          <h1 className="custom-page__title">Custom & Theme Cakes</h1>
          <p className="custom-page__desc">Every occasion deserves a cake as unique as the moment. We bring your vision to life.</p>
        </div>
      </div>

      <div className="custom-page__container">
        <div className="custom-page__themes">
          <h2 className="custom-page__section-title">Popular Themes</h2>
          <div className="custom-page__themes-grid">
            {themes.map((t, i) => (
              <div key={i} className="custom-page__theme-card">
                {t.tag && <span className="custom-page__tag">{t.tag}</span>}
                <div className="custom-page__theme-icon">{t.icon}</div>
                <h3>{t.name}</h3>
                <p className="custom-page__price-badge">{t.price}</p>
                <p>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="custom-page__how">
          <h2 className="custom-page__section-title">How It Works</h2>
          <div className="custom-page__steps">
            {steps.map((s, i) => (
              <div key={i} className="custom-page__step">
                <div className="custom-page__step-num">{s.step}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="custom-page__order">
          <h2 className="custom-page__section-title">Request a Custom Cake</h2>
          <form className="custom-page__form" onSubmit={handleSubmit}>
            {submitted && <div className="custom-page__success"><CheckCircle size={18} /> Request received! We will call you within 2 hours.</div>}
            <div className="custom-page__form-row">
              <div className="custom-page__field">
                <label>Your Name</label>
                <input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Full name" required />
              </div>
              <div className="custom-page__field">
                <label>Phone Number</label>
                <input value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="+91 XXXXX XXXXX" required />
              </div>
            </div>
            <div className="custom-page__form-row">
              <div className="custom-page__field">
                <label>Required Date</label>
                <input type="date" value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} required />
              </div>
              <div className="custom-page__field">
                <label>Cake Size</label>
                <select value={form.size} onChange={e => setForm({ ...form, size: e.target.value })}>
                  <option>500g</option>
                  <option>1 kg</option>
                  <option>1.5 kg</option>
                  <option>2 kg</option>
                  <option>Custom</option>
                </select>
              </div>
            </div>
            <div className="custom-page__field">
              <label>Theme / Message</label>
              <textarea rows="4" value={form.msg} onChange={e => setForm({ ...form, msg: e.target.value })} placeholder="Describe your vision, message to write, colours, any special requirements..."></textarea>
            </div>
            <button type="submit" className="custom-page__submit">
              <CheckCircle size={18} /> Submit Custom Cake Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CustomCakes;
