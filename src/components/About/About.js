import React from 'react';
import { Leaf, Award, ChefHat, Package } from 'lucide-react';
import './About.css';

const About = () => {
  const features = [
    { icon: <Leaf size={22} />, title: 'All Natural', desc: 'Only the finest natural ingredients, no preservatives.' },
    { icon: <Award size={22} />, title: 'Belgian Chocolate', desc: 'Imported premium Belgian dark & milk chocolate.' },
    { icon: <ChefHat size={22} />, title: 'Handcrafted', desc: 'Each brownie lovingly made by expert bakers.' },
    { icon: <Package size={22} />, title: 'Fresh Daily', desc: 'Baked fresh every morning, delivered the same day.' },
  ];

  return (
    <section id="about" className="about">
      <div className="about__container">
        <div className="about__visual">
          <div className="about__image-stack">
            <div className="about__image-card about__image-card--main">
              <img src="/images/baker_chef.png" alt="Our Master Baker" className="about__real-img" />
              <p>Our Master Baker</p>
            </div>
            <div className="about__image-card about__image-card--secondary">
              <img src="/images/storefront_branch.png" alt="Flagship Store" className="about__real-img" />
              <p>Est. 2018</p>
            </div>
          </div>
          <div className="about__experience-badge">
            <span className="about__experience-number">6+</span>
            <span className="about__experience-text">Years of Sweet Perfection</span>
          </div>
        </div>

        <div className="about__content">
          <span className="about__section-label">Our Story</span>
          <h2 className="about__title">
            Born from a <em>Passion</em> for Chocolate
          </h2>
          <p className="about__text">
            Brownie Bakers started in a small home kitchen in 2018 with one simple dream —
            to create the world's most indulgent brownie. What began as weekend baking experiments
            has grown into Chennai's most-loved artisan bakery.
          </p>
          <p className="about__text">
            We source our chocolate from Belgium, our nuts from California, and our dairy
            from local farms. Every ingredient is chosen with care, every recipe perfected
            with years of passion.
          </p>

          <div className="about__features">
            {features.map((f, i) => (
              <div key={i} className="about__feature">
                <span className="about__feature-icon">{f.icon}</span>
                <div>
                  <h4 className="about__feature-title">{f.title}</h4>
                  <p className="about__feature-desc">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
