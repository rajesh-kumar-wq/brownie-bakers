import React from 'react';
import { MapPin, Phone, Clock, Store, ShoppingBag, Star, Sparkles, User } from 'lucide-react';
import './BranchesReviews.css';

const branches = [
  { name: 'Bodinayakkanur (Bodi)', address: 'Savari Complex, Near ZKM School, Bodinayakkanur, Theni', phone: '73977 01009 / 88074 47004', hours: 'Daily 9:00 AM - 9:30 PM', icon: <Store size={24} />, flagship: true },
  { name: 'Chinnamanur', address: 'At Merina Cake Shop, Opp Bharath Theatre, Chinnamanur', phone: '73974 61009', hours: 'Daily 9:00 AM - 9:30 PM', icon: <Store size={24} />, flagship: false },
  { name: 'Cumbum', address: 'Opp Vasanth & Co, Way to Bus Stand, Cumbum', phone: '73971 91009', hours: 'Daily 9:00 AM - 9:30 PM', icon: <Store size={24} />, flagship: false },
  { name: 'Theni (Corporate & Support)', address: 'Franchise Enquiry & Complaint Support, Theni', phone: '95789 09434', hours: 'Support Hotline', icon: <ShoppingBag size={24} />, flagship: false },
];

const reviews = [
  { name: 'Karthik Raja', rating: 5, text: 'Best brownie & cake spot in Bodi! Karuppu Kavuni brownie & Sizzling Brownie are absolute must-tries!', branch: 'Bodinayakkanur' },
  { name: 'Sujatha M.', rating: 5, text: 'Super affordable prices and top quality! White Forest cake and Korean Bun were delicious.', branch: 'Chinnamanur' },
  { name: 'Vigneshwaran', rating: 5, text: 'Ordered Penne Arrabbiata and Crispy Chicken Burger. Great taste and fast free delivery!', branch: 'Cumbum' },
  { name: 'Anitha P.', rating: 5, text: 'Customized Pinata & Pull Me Up cake for my son\'s birthday was super grand! Loved the quality.', branch: 'Theni' },
];

const BranchesReviews = () => (
  <div className="branches-page">
    <div className="branches-page__hero">
      <div className="branches-page__hero-content">
        <span className="branches-page__eyebrow">BODI | CHINNAMANUR | CUMBUM | THENI</span>
        <h1 className="branches-page__title">Our Branches & Reviews</h1>
        <p className="branches-page__desc">Bringing Affordable Delights to Tamil Nadu. 5/5 Star Rated Quality!</p>
      </div>
    </div>

    <div className="branches-page__container">
      <section className="branches-page__branches">
        <h2 className="branches-page__section-title"><MapPin size={24} color="#d9a86c" /> All Branches</h2>
        <div className="branches-page__branches-grid">
          {branches.map((b, i) => (
            <div key={i} className={`branches-page__branch-card ${b.flagship ? 'branches-page__branch-card--flagship' : ''}`}>
              {b.flagship && <span className="branches-page__flagship-tag"><Sparkles size={14} /> Flagship Store</span>}
              <div className="branches-page__branch-icon">{b.icon}</div>
              <h3 className="branches-page__branch-name">{b.name}</h3>
              <p className="branches-page__branch-addr"><MapPin size={16} /> {b.address}</p>
              <p className="branches-page__branch-phone"><Phone size={16} /> {b.phone}</p>
              <p className="branches-page__branch-hours"><Clock size={16} /> {b.hours}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="branches-page__reviews">
        <h2 className="branches-page__section-title"><Star size={24} fill="#d9a86c" color="#d9a86c" /> Customer Reviews</h2>
        <div className="branches-page__reviews-grid">
          {reviews.map((r, i) => (
            <div key={i} className="branches-page__review-card">
              <div className="branches-page__review-stars">
                {[...Array(r.rating)].map((_, idx) => (
                  <Star key={idx} size={16} fill="#d9a86c" color="#d9a86c" />
                ))}
              </div>
              <p className="branches-page__review-text">"{r.text}"</p>
              <div className="branches-page__review-author">
                <div className="branches-page__review-avatar">
                  <User size={20} color="#d9a86c" />
                </div>
                <div>
                  <p className="branches-page__review-name">{r.name}</p>
                  <p className="branches-page__review-branch">{r.branch} Branch</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  </div>
);

export default BranchesReviews;
