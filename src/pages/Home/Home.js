import React from 'react';
import { 
  Cake, Utensils, IceCream, Sparkles, Award, Star, Truck, 
  Leaf, ArrowRight, User, Store, PhoneCall 
} from 'lucide-react';
import './Home.css';

const Home = ({ onNavigate }) => {
  const categories = [
    { id: 'cakes', icon: <Cake size={24} />, name: 'Brownies & Cakes', count: '30+ items', color: '#3b1a12' },
    { id: 'fastfood', icon: <Utensils size={24} />, name: 'Pasta & Fast Food', count: '40+ items', color: '#6b2c1e' },
    { id: 'desserts', icon: <IceCream size={24} />, name: 'Desserts & Pastry', count: '25+ items', color: '#924a3a' },
    { id: 'custom', icon: <Sparkles size={24} />, name: 'Custom & Theme Cakes', count: 'Made to Order', color: '#3b1a12' },
  ];

  const featuredItems = [
    { name: 'Karuppu Kavuni Brownie', price: '₹89', tag: 'Speciality', tagColor: '#f06292', image: '/images/hero_brownie.png', desc: 'Traditional black rice healthy fusion brownie' },
    { name: 'Special Milky Nuts Cake', price: '₹649', tag: 'Top Seller', tagColor: '#d9a86c', image: '/images/category_cakes.png', desc: 'Rich milky flavor topped with crunchy premium nuts (½ kg)' },
    { name: 'Penne Arrabbiata Pasta', price: '₹220', tag: 'Italian', tagColor: '#ffb300', image: '/images/category_fastfood.png', desc: 'Spicy tomato sauce with garlic, chili peppers, and fresh basil' },
    { name: 'Tres Leches Pastry', price: '₹99', tag: 'Popular', tagColor: '#f06292', image: '/images/category_desserts.png', desc: 'Ultra-moist Mexican three-milk sponge dessert' },
    { name: 'Korean Bun', price: '₹129', tag: 'Trending', tagColor: '#ffb300', image: '/images/category_desserts.png', desc: 'Sweet & savory garlic cream cheese filled soft bun' },
    { name: 'White Forest Fresh Cream', price: '₹399', tag: 'Top Seller', tagColor: '#d9a86c', image: '/images/category_cakes.png', desc: 'Light fresh cream with white chocolate curls (½ kg)' },
  ];

  const stats = [
    { value: 'ESTD 2021', label: 'Established' },
    { value: '4 Branches', label: 'Bodi | Chinnamanur | Cumbum | Theni' },
    { value: '5.0★', label: 'Customer Rating' },
    { value: '₹14 L', label: 'Franchise Cost' },
  ];

  const testimonials = [
    { name: 'Karthik Raja', role: 'Bodinayakkanur Branch', text: 'Karuppu Kavuni brownie was amazing! Best place for cakes & desserts in Bodi.', rating: 5 },
    { name: 'Subashini M', role: 'Chinnamanur Branch', text: 'Their Tres Leches and Red Velvet pastries are absolute perfection. Super affordable!', rating: 5 },
    { name: 'Venkatesh S', role: 'Cumbum Branch', text: 'Ordered a customized Fondant cake for birthday. Looked stunning and tasted rich.', rating: 5 },
  ];

  return (
    <div className="home">

      {/* ===== HERO SECTION ===== */}
      <section className="home__hero">
        <div className="home__hero-bg">
          <div className="home__hero-gradient"></div>
          <div className="home__hero-pattern"></div>
        </div>
        <div className="home__hero-content">
          <div className="home__hero-text">
            <span className="home__hero-eyebrow">ESTD 2021 · BODI | CHINNAMANUR | CUMBUM | THENI</span>
            <h1 className="home__hero-title">
              Bringing Affordable <br />
              <em>Delights</em> <br />
              to Tamil Nadu
            </h1>
            <p className="home__hero-desc">
              At Brownie Bakers, we dream of making Tamil Nadu a sweeter place with our cakes and desserts. 
              Delicious treats at prices that are easy on your pocket.
            </p>
            <div className="home__hero-actions">
              <button className="btn-primary" onClick={() => onNavigate('cakes')}>
                Explore Menu
              </button>
              <button className="btn-outline-light" onClick={() => onNavigate('contact')}>
                Order / Franchise
              </button>
            </div>
            <div className="home__hero-stats">
              {stats.map((s, i) => (
                <div key={i} className="home__stat">
                  <span className="home__stat-value">{s.value}</span>
                  <span className="home__stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="home__hero-visual">
            <div className="home__hero-showcase">
              <img src="/images/hero_brownie.png" alt="Brownie Bakers Special" className="home__hero-img" />
              <div className="home__hero-badge home__hero-badge--1">
                <Award size={16} /> ESTD 2021 Tamil Nadu
              </div>
              <div className="home__hero-badge home__hero-badge--2">
                <Star size={16} fill="#ffb300" color="#ffb300" /> 5.0/5 Rating
              </div>
              <div className="home__hero-badge home__hero-badge--3">
                <Truck size={16} /> Free Delivery Available
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CATEGORIES ===== */}
      <section className="home__categories">
        <div className="home__container">
          <div className="home__section-header">
            <span className="home__section-eyebrow">What We Offer</span>
            <h2 className="home__section-title">Crafted for Every Craving</h2>
          </div>
          <div className="home__categories-grid">
            {categories.map((cat) => (
              <button key={cat.id} className="home__category-card" onClick={() => onNavigate(cat.id)}>
                <div className="home__category-icon">{cat.icon}</div>
                <h3 className="home__category-name">{cat.name}</h3>
                <span className="home__category-count">{cat.count}</span>
                <span className="home__category-arrow"><ArrowRight size={18} /></span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURED ITEMS ===== */}
      <section className="home__featured">
        <div className="home__container">
          <div className="home__section-header">
            <span className="home__section-eyebrow">Customer Favourites</span>
            <h2 className="home__section-title">Most Loved Items</h2>
            <p className="home__section-desc">Handpicked delicacies loved across all our branches.</p>
          </div>
          <div className="home__featured-grid">
            {featuredItems.map((item, i) => (
              <div key={i} className="home__product-card">
                {item.tag && (
                  <span className="home__product-tag" style={{ background: item.tagColor }}>
                    {item.tag}
                  </span>
                )}
                <div className="home__product-img-wrapper">
                  <img src={item.image} alt={item.name} className="home__product-real-img" />
                </div>
                <div className="home__product-info">
                  <h3 className="home__product-name">{item.name}</h3>
                  <p className="home__product-desc">{item.desc}</p>
                  <div className="home__product-footer">
                    <span className="home__product-price">{item.price}</span>
                    <button className="home__product-add" onClick={() => onNavigate('contact')}>+</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="home__featured-cta">
            <button className="btn-secondary" onClick={() => onNavigate('cakes')}>
              View Full Menu <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* ===== WHY US / VISION ===== */}
      <section className="home__why">
        <div className="home__container">
          <div className="home__why-inner">
            <div className="home__why-content">
              <span className="home__section-eyebrow home__section-eyebrow--light">Our Vision</span>
              <h2 className="home__section-title home__section-title--light">Bringing Affordable Delights to Tamil Nadu</h2>
              <p className="home__why-text">
                At Brownie Bakers, we dream of making Tamil Nadu a sweeter place with our cakes and desserts. We believe everyone deserves a treat, without spending too much. Each slice we serve is made with love, care, and a promise of quality.
              </p>
              <div className="home__why-features">
                {[
                  { icon: <Leaf size={22} />, title: 'Pocket Friendly', desc: 'Delicious desserts at prices easy on the pocket' },
                  { icon: <Award size={22} />, title: 'Quality Promise', desc: 'Made with love, care, and fine ingredients' },
                  { icon: <Store size={22} />, title: '4 Active Branches', desc: 'Bodi, Chinnamanur, Cumbum & Theni' },
                  { icon: <PhoneCall size={22} />, title: 'Franchise Partner', desc: 'Franchise Cost: ₹14,00,000 — Grow with us!' },
                ].map((f, i) => (
                  <div key={i} className="home__why-feature">
                    <span className="home__why-feature-icon">{f.icon}</span>
                    <div>
                      <h4>{f.title}</h4>
                      <p>{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="btn-gold" onClick={() => onNavigate('franchise')}>
                Franchise Enquiry <ArrowRight size={16} />
              </button>
            </div>
            <div className="home__why-visual">
              <img src="/images/baker_chef.png" alt="Brownie Bakers Vision" className="home__why-chef-img" />
              <div className="home__why-img-card">
                <div className="home__why-year">ESTD 2021</div>
                <div>Spreading Smiles One Slice at a Time</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="home__testimonials">
        <div className="home__container">
          <div className="home__section-header">
            <span className="home__section-eyebrow">Reviews</span>
            <h2 className="home__section-title">What Our Customers Say</h2>
            <p className="home__section-desc">Rated 5/5 ⭐ across all our branches!</p>
          </div>
          <div className="home__testimonials-grid">
            {testimonials.map((t, i) => (
              <div key={i} className="home__testimonial-card">
                <div className="home__testimonial-stars">{'★'.repeat(t.rating)}</div>
                <p className="home__testimonial-text">"{t.text}"</p>
                <div className="home__testimonial-author">
                  <div className="home__testimonial-avatar-icon">
                    <User size={20} color="#d9a86c" />
                  </div>
                  <div>
                    <p className="home__testimonial-name">{t.name}</p>
                    <p className="home__testimonial-role">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="home__featured-cta">
            <button className="btn-secondary" onClick={() => onNavigate('branches')}>
              See All Branches & Reviews <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="home__cta-banner">
        <div className="home__container">
          <div className="home__cta-inner">
            <div>
              <h2 className="home__cta-title">Be a Part of Our Journey</h2>
              <p className="home__cta-sub">Let's grow together and share the sweetness across Tamil Nadu. Franchise Cost: ₹14,00,000</p>
            </div>
            <div className="home__cta-actions">
              <button className="btn-gold" onClick={() => onNavigate('franchise')}>Franchise Enquiry</button>
              <button className="btn-outline-light" onClick={() => onNavigate('contact')}>Call: 95789 09434</button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;

