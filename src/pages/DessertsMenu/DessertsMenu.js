import React, { useState } from 'react';
import './DessertsMenu.css';

const items = [
  // Cheesecakes
  { name: 'Oreo Cheesecake', price: '₹149', tag: 'Popular', tagColor: '#f06292', image: '/images/category_cakes.png', desc: 'Rich cheesecake baked with Oreo cookie crust', cat: 'Cheesecake' },
  { name: 'Brownie Cheesecake', price: '₹149', tag: 'Bestseller', tagColor: '#d9a86c', image: '/images/hero_brownie.png', desc: 'Dense brownie base topped with smooth cheesecake layer', cat: 'Cheesecake' },
  { name: 'Blueberry Cheesecake', price: '₹149', tag: null, image: '/images/category_cakes.png', desc: 'Creamy cheesecake topped with wild blueberry compote', cat: 'Cheesecake' },
  { name: 'Rasamalai Cheesecake', price: '₹149', tag: 'Fusion', tagColor: '#ffb300', image: '/images/category_cakes.png', desc: 'Desi fusion cheesecake infused with saffron Rasamalai', cat: 'Cheesecake' },
  { name: 'Blueberry Basque Cheesecake', price: '₹149', tag: 'Special', tagColor: '#d9a86c', image: '/images/category_cakes.png', desc: 'Caramelized burnt Basque cheesecake with blueberry', cat: 'Cheesecake' },
  { name: 'Baked Cheesecake', price: '₹149', tag: null, image: '/images/category_cakes.png', desc: 'Classic New York style baked cheesecake slice', cat: 'Cheesecake' },

  // Brownies
  { name: 'Karuppu Kavuni Brownie', price: '₹89', tag: 'Heritage Special', tagColor: '#ffb300', image: '/images/hero_brownie.png', desc: 'Healthy black rice (Karuppu Kavuni) rich fudgy brownie', cat: 'Brownie' },
  { name: 'Nutella Brownie', price: '₹89', tag: 'Bestseller', tagColor: '#f06292', image: '/images/hero_brownie.png', desc: 'Loaded with authentic hazelnut Nutella spread', cat: 'Brownie' },
  { name: 'White Chocolate Brownie', price: '₹89', tag: null, image: '/images/category_desserts.png', desc: 'Creamy Belgian white chocolate swirled brownie', cat: 'Brownie' },
  { name: 'Red Velvet Brownie', price: '₹89', tag: null, image: '/images/category_cakes.png', desc: 'Red velvet cocoa batter with cream cheese swirls', cat: 'Brownie' },
  { name: 'Dark Chocolate Brownie', price: '₹69', tag: 'Popular', tagColor: '#d9a86c', image: '/images/hero_brownie.png', desc: '70% Belgian dark chocolate, dense fudgy texture', cat: 'Brownie' },
  { name: 'Ragi Brownie', price: '₹69', tag: 'Healthy', tagColor: '#4caf50', image: '/images/hero_brownie.png', desc: 'Nutritious finger millet ragi cocoa brownie', cat: 'Brownie' },
  { name: 'Sizzling Brownie', price: '₹249', tag: 'Chef Special', tagColor: '#f06292', image: '/images/hero_brownie.png', desc: 'Hot brownie on sizzling sizzler plate with vanilla gelato & fudge', cat: 'Brownie' },
  { name: 'Brownie with Ice Cream', price: '₹149', tag: null, image: '/images/hero_brownie.png', desc: 'Warm fudge brownie served with a scoop of vanilla ice cream', cat: 'Brownie' },

  // Pastry & Bakery
  { name: 'Korean Bun', price: '₹129', tag: 'Trending', tagColor: '#ffb300', image: '/images/category_desserts.png', desc: 'Sweet garlic cream cheese filled soft Korean brioche bun', cat: 'Pastry' },
  { name: 'Tres Leches Pastry', price: '₹99', tag: 'Bestseller', tagColor: '#d9a86c', image: '/images/category_cakes.png', desc: 'Mexican three-milk soaked ultra soft cake slice', cat: 'Pastry' },
  { name: 'Chocolate Truffle Pastry', price: '₹99', tag: null, image: '/images/category_cakes.png', desc: 'Rich chocolate sponge with dark ganache coating', cat: 'Pastry' },
  { name: 'Red Velvet Pastry', price: '₹99', tag: null, image: '/images/category_cakes.png', desc: 'Classic red velvet layers with cream cheese frosting', cat: 'Pastry' },
  { name: 'Jar Cake', price: '₹149', tag: 'Gift', tagColor: '#f06292', image: '/images/category_cakes.png', desc: 'Layered cake dessert served in a glass jar', cat: 'Pastry' },
  { name: 'Doughnut', price: '₹69', tag: null, image: '/images/category_desserts.png', desc: 'Soft glazed chocolate glazed doughnut', cat: 'Pastry' },
  { name: 'Cookies', price: '₹99', tag: null, image: '/images/category_desserts.png', desc: 'Freshly baked chocolate chip butter cookies', cat: 'Pastry' },

  // Mousse & Panna Cotta
  { name: 'Panna Cotta (Biscoff / Caramel / Choco)', price: '₹79', tag: 'Special', tagColor: '#d9a86c', image: '/images/category_desserts.png', desc: 'Silky Italian panna cotta in Choco Vanilla, Mango, Strawberry, Biscoff, Caramel', cat: 'Mousse & Panna Cotta' },
  { name: 'Fruit & Chocolate Mousse', price: '₹79', tag: null, image: '/images/category_desserts.png', desc: 'Light fluffy mousse cups in Blueberry, Mango, Strawberry, Chocolate', cat: 'Mousse & Panna Cotta' },

  // Drinks & Mojito & Milkshake
  { name: 'Refreshing Mojito', price: '₹50', tag: null, image: '/images/category_desserts.png', desc: 'Chilled refreshing drinks in Blue Mojito, Mint, Green Apple', cat: 'Drinks & Milkshake' },
  { name: 'Special Milkshake (Regular / Large)', price: '₹70 / ₹149', tag: 'Popular', tagColor: '#d9a86c', image: '/images/category_desserts.png', desc: 'Thick creamy milkshakes in Blueberry, Mango, Strawberry, Black Currant, Oreo, Choco, Biscoff', cat: 'Drinks & Milkshake' },
];

const DessertsMenu = () => {
  const [filter, setFilter] = useState('All');
  const cats = ['All', 'Cheesecake', 'Brownie', 'Pastry', 'Mousse & Panna Cotta', 'Drinks & Milkshake'];
  const filtered = filter === 'All' ? items : items.filter(i => i.cat === filter);

  return (
    <div className="menu-page">
      <div className="menu-page__hero" style={{ background: 'linear-gradient(135deg, #1e1b17, #3b1a12)' }}>
        <div className="menu-page__hero-content">
          <span className="menu-page__eyebrow">DESSERTS & PASTRY · CLASSIC DELIGHTS</span>
          <h1 className="menu-page__title">Dessert Menu</h1>
          <p className="menu-page__desc">A ready-to-eat slice of heaven. Crafted fresh daily.</p>
        </div>
      </div>
      <div className="menu-page__body">
        <div className="menu-page__container">
          <div className="menu-page__filters">
            {cats.map(c => (
              <button key={c} className={`menu-page__filter ${filter === c ? 'menu-page__filter--active' : ''}`} onClick={() => setFilter(c)}>{c}</button>
            ))}
          </div>
          <div className="menu-page__grid">
            {filtered.map((item, i) => (
              <div key={i} className="menu-page__card">
                {item.tag && <span className="menu-page__tag" style={{ background: item.tagColor }}>{item.tag}</span>}
                <div className="menu-page__img-container">
                  <img src={item.image} alt={item.name} className="menu-page__card-img" />
                </div>
                <div className="menu-page__info">
                  <h3 className="menu-page__name">{item.name}</h3>
                  <p className="menu-page__item-desc">{item.desc}</p>
                  <div className="menu-page__footer">
                    <span className="menu-page__price">{item.price}</span>
                    <button className="menu-page__add">Add +</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DessertsMenu;
