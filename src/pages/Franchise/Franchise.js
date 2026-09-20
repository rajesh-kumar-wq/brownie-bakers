import React, { useState } from 'react';
import { TrendingUp, Award, GraduationCap, Megaphone, Package, Trophy, ChevronDown, ChevronUp, CheckCircle } from 'lucide-react';
import './Franchise.css';

const benefits = [
  { icon: <TrendingUp size={28} />, title: 'Low Investment', desc: 'Start from ₹8 Lakhs. High ROI within 18 months guaranteed.' },
  { icon: <Award size={28} />, title: 'Premium Products', desc: 'Access to our secret recipes and Belgian chocolate supply chain.' },
  { icon: <GraduationCap size={28} />, title: 'Full Training', desc: 'Complete training for you and your staff with ongoing support.' },
  { icon: <Megaphone size={28} />, title: 'Marketing Support', desc: 'National campaigns and dedicated social media assistance.' },
  { icon: <Package size={28} />, title: 'Supply Chain', desc: 'Centralized ingredient supply at negotiated lower prices.' },
  { icon: <Trophy size={28} />, title: 'Brand Power', desc: '6+ year established brand with 50,000+ loyal customers.' },
];

const faqs = [
  { q: 'What is the total investment required?', a: 'The franchise fee is ₹3.5 Lakhs. Total investment including setup is ₹8-12 Lakhs depending on location size and fit-out requirements.' },
  { q: 'How long does it take to set up?', a: 'From signing the agreement to grand opening typically takes 45-60 days, including training and setup.' },
  { q: 'What is the royalty structure?', a: 'A flat 6% royalty on monthly net revenue, which covers ongoing training, support, and brand usage rights.' },
  { q: 'Do you provide the recipes?', a: 'Yes, complete recipe manuals and standardized processes are provided. All key ingredients are centrally supplied to maintain quality consistency.' },
  { q: 'What is the expected monthly revenue?', a: 'Our franchisees average ₹3-5 Lakhs monthly net revenue in the first year, with significant growth in subsequent years.' },
];

const Franchise = () => {
  const [open, setOpen] = useState(null);
  const [form, setForm] = useState({ name: '', phone: '', city: '', investment: '₹8-10 Lakhs' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="franchise-page">
      <div className="franchise-page__hero">
        <div className="franchise-page__hero-content">
          <span className="franchise-page__eyebrow">Bringing Affordable Delights to Tamil Nadu</span>
          <h1 className="franchise-page__title">Franchise Cost: ₹14,00,000</h1>
          <p className="franchise-page__desc">
            At Brownie Bakers, we dream of making Tamil Nadu a sweeter place with our cakes and desserts.
            Our goal is simple: to offer delicious desserts at prices that are easy on the pocket.
            Be a part of our journey. Let's grow together!
          </p>
          <div className="franchise-page__hero-stats">
            <div><span className="franchise-page__stat-val">₹14 Lakhs</span><span>Total Investment</span></div>
            <div><span className="franchise-page__stat-val">95789 09434</span><span>Franchise Helpline</span></div>
            <div><span className="franchise-page__stat-val">4 Outlets</span><span>Bodi | Chinnamanur | Cumbum | Theni</span></div>
          </div>
        </div>
      </div>

      <div className="franchise-page__container">
        <section className="franchise-page__benefits">
          <h2 className="franchise-page__section-title">Why Partner With Us?</h2>
          <div className="franchise-page__benefits-grid">
            {benefits.map((b, i) => (
              <div key={i} className="franchise-page__benefit-card">
                <div className="franchise-page__benefit-icon">{b.icon}</div>
                <h3>{b.title}</h3>
                <p>{b.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="franchise-page__faq">
          <h2 className="franchise-page__section-title">Frequently Asked Questions</h2>
          {faqs.map((f, i) => (
            <div key={i} className="franchise-page__faq-item">
              <button className="franchise-page__faq-q" onClick={() => setOpen(open === i ? null : i)}>
                {f.q} <span>{open === i ? <ChevronUp size={18} /> : <ChevronDown size={18} />}</span>
              </button>
              {open === i && <p className="franchise-page__faq-a">{f.a}</p>}
            </div>
          ))}
        </section>

        <section className="franchise-page__apply">
          <h2 className="franchise-page__section-title">Apply for Franchise</h2>
          <form className="franchise-page__form" onSubmit={handleSubmit}>
            {submitted && <div className="franchise-page__success"><CheckCircle size={18} /> Application received! Our franchise team will contact you within 24 hours.</div>}
            <div className="franchise-page__form-row">
              <div className="franchise-page__field">
                <label>Full Name</label>
                <input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Your name" required />
              </div>
              <div className="franchise-page__field">
                <label>Phone</label>
                <input value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="+91 XXXXX XXXXX" required />
              </div>
            </div>
            <div className="franchise-page__form-row">
              <div className="franchise-page__field">
                <label>Preferred City</label>
                <input value={form.city} onChange={e => setForm({ ...form, city: e.target.value })} placeholder="City / Location" required />
              </div>
              <div className="franchise-page__field">
                <label>Investment Capacity</label>
                <select value={form.investment} onChange={e => setForm({ ...form, investment: e.target.value })}>
                  <option>₹8-10 Lakhs</option>
                  <option>₹10-15 Lakhs</option>
                  <option>₹15+ Lakhs</option>
                </select>
              </div>
            </div>
            <button type="submit" className="franchise-page__submit">
              <CheckCircle size={18} /> Submit Franchise Application
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Franchise;
