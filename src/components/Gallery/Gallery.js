import React from 'react';
import './Gallery.css';

const galleryItems = [
  { emoji: '🍫', label: 'Classic Fudge', size: 'large' },
  { emoji: '🌰', label: 'Walnut Crunch', size: 'small' },
  { emoji: '🍯', label: 'Salted Caramel', size: 'small' },
  { emoji: '👑', label: 'Belgian Truffle', size: 'medium' },
  { emoji: '🌋', label: 'Nutella Lava', size: 'medium' },
  { emoji: '🥭', label: 'Mango Choco', size: 'small' },
  { emoji: '🌹', label: 'Rose Pistachio', size: 'small' },
  { emoji: '🍪', label: 'Oreo Overload', size: 'large' },
];

const Gallery = () => {
  return (
    <section id="gallery" className="gallery">
      <div className="gallery__container">
        <div className="gallery__header">
          <span className="gallery__section-label">Gallery</span>
          <h2 className="gallery__title">A Feast for the Eyes</h2>
          <p className="gallery__subtitle">Every brownie is a work of art, crafted to perfection.</p>
        </div>

        <div className="gallery__grid">
          {galleryItems.map((item, i) => (
            <div key={i} className={`gallery__item gallery__item--${item.size}`}>
              <div className="gallery__item-inner">
                <span className="gallery__item-emoji">{item.emoji}</span>
                <div className="gallery__item-overlay">
                  <span className="gallery__item-label">{item.label}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
