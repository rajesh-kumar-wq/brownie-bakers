import React, { useState } from 'react';
import './Menu.css';

const menuData = {
  Classic: [
    { name: 'Original Fudge Brownie', price: '₹120', desc: 'Classic dark chocolate, dense and fudgy', emoji: '🍫', tag: 'Bestseller' },
    { name: 'Walnut Crunch Brownie', price: '₹140', desc: 'Rich chocolate with California walnuts', emoji: '🌰', tag: null },
    { name: 'Double Chocolate', price: '₹150', desc: 'Cocoa batter loaded with chocolate chips', emoji: '✨', tag: 'Popular' },
    { name: 'Cream Cheese Swirl', price: '₹160', desc: 'Fudgy brownie with creamy cheese swirl', emoji: '🤍', tag: null },
  ],
  Premium: [
    { name: 'Belgian Truffle', price: '₹220', desc: 'Imported Belgian 70% dark chocolate', emoji: '👑', tag: 'Chef Special' },
    { name: 'Salted Caramel', price: '₹200', desc: 'Brownie layered with house-made caramel', emoji: '🍯', tag: 'Bestseller' },
    { name: 'Nutella Lava', price: '₹210', desc: 'Warm brownie with molten Nutella center', emoji: '🌋', tag: 'New' },
    { name: 'Oreo Overload', price: '₹190', desc: 'Crushed Oreos baked into rich chocolate', emoji: '🍪', tag: null },
  ],
  Seasonal: [
    { name: 'Mango Choco', price: '₹180', desc: 'Summer mango compote meets dark chocolate', emoji: '🥭', tag: 'Summer' },
    { name: 'Rose Pistachio', price: '₹195', desc: 'Persian rose water, pistachio crumble', emoji: '🌹', tag: 'Limited' },
    { name: 'Gulab Jamun Brownie', price: '₹170', desc: 'Desi fusion with soft gulab jamun pieces', emoji: '🍬', tag: 'Fusion' },
    { name: 'Elaichi Cardamom', price: '₹165', desc: 'Subtly spiced with aromatic cardamom', emoji: '🌿', tag: 'Signature' },
  ],
};

const Menu = () => {
  const [activeTab, setActiveTab] = useState('Classic');

  return (
    <section id="menu" className="menu">
      <div className="menu__container">
        <div className="menu__header">
          <span className="menu__section-label">Our Menu</span>
          <h2 className="menu__title">Crafted for Every Craving</h2>
          <p className="menu__subtitle">
            From timeless classics to bold seasonal specials — there's a brownie for every mood.
          </p>
        </div>

        <div className="menu__tabs">
          {Object.keys(menuData).map((tab) => (
            <button
              key={tab}
              className={`menu__tab ${activeTab === tab ? 'menu__tab--active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="menu__grid">
          {menuData[activeTab].map((item, i) => (
            <div key={i} className="menu__card">
              {item.tag && <span className="menu__card-tag">{item.tag}</span>}
              <div className="menu__card-emoji">{item.emoji}</div>
              <h3 className="menu__card-name">{item.name}</h3>
              <p className="menu__card-desc">{item.desc}</p>
              <div className="menu__card-footer">
                <span className="menu__card-price">{item.price}</span>
                <button className="menu__card-btn">Add to Order</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
