import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      {/* Background decoration */}
      <div className="hero__bg-circles">
        <div className="hero__circle hero__circle--1"></div>
        <div className="hero__circle hero__circle--2"></div>
        <div className="hero__circle hero__circle--3"></div>
      </div>

      <div className="hero__container">
        <div className="hero__content">
          <span className="hero__badge">✨ Handcrafted Since 2018</span>

          <h1 className="hero__title">
            <span className="hero__title-top">Indulge in</span>
            <span className="hero__title-brand">Brownie</span>
            <span className="hero__title-accent">Bliss</span>
          </h1>

          <p className="hero__description">
            Artisan brownies crafted with the finest Belgian chocolate,
            baked fresh daily with love and passion. Every bite tells a story
            of rich flavors and handcrafted perfection.
          </p>

          <div className="hero__actions">
            <a href="#menu" className="hero__btn hero__btn--primary">
              Explore Menu
              <span className="hero__btn-arrow">→</span>
            </a>
            <a href="#about" className="hero__btn hero__btn--secondary">
              Our Story
            </a>
          </div>

          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-number">50+</span>
              <span className="hero__stat-label">Flavors</span>
            </div>
            <div className="hero__stat-divider"></div>
            <div className="hero__stat">
              <span className="hero__stat-number">10K+</span>
              <span className="hero__stat-label">Happy Customers</span>
            </div>
            <div className="hero__stat-divider"></div>
            <div className="hero__stat">
              <span className="hero__stat-number">4.9★</span>
              <span className="hero__stat-label">Rating</span>
            </div>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__image-frame">
            <div className="hero__image-glow"></div>
            <div className="hero__brownie-showcase">
              <div className="hero__brownie-emoji">🍫</div>
              <div className="hero__brownie-particles">
                <span>✨</span><span>🍪</span><span>⭐</span>
                <span>🌟</span><span>🍫</span><span>✨</span>
              </div>
            </div>
          </div>

          <div className="hero__floating-card hero__floating-card--1">
            <span>🏆</span>
            <span>Best Bakery 2024</span>
          </div>
          <div className="hero__floating-card hero__floating-card--2">
            <span>❤️</span>
            <span>Made with Love</span>
          </div>
        </div>
      </div>

      <div className="hero__scroll-indicator">
        <span>Scroll to explore</span>
        <div className="hero__scroll-line"></div>
      </div>
    </section>
  );
};

export default Hero;
