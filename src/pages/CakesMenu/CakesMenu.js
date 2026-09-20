import React, { useState } from 'react';
import './CakesMenu.css';

const items = [
  // Signature Cakes (Page 11) - (½ kg / 1 kg)
  { name: 'Special Milky Nuts', price: '½kg: ₹649 | 1kg: ₹1298', tag: 'Signature', tagColor: '#d9a86c', image: '/images/category_cakes.png', desc: 'Loaded with rich condensed milk, roasted cashews & almonds', cat: 'Signature Cakes' },
  { name: 'Brownie Truffle Cake', price: '½kg: ₹599 | 1kg: ₹1099', tag: 'Bestseller', tagColor: '#f06292', image: '/images/hero_brownie.png', desc: 'Layered Belgian dark chocolate truffle with dense brownie sponge', cat: 'Signature Cakes' },
  { name: 'Biscoff Cake', price: '½kg: ₹899 | 1kg: ₹1598', tag: 'Premium', tagColor: '#d9a86c', image: '/images/category_cakes.png', desc: 'Lotus Biscoff spread, speculoos cookies and caramelized buttercream', cat: 'Signature Cakes' },
  { name: 'Special Rasamalai Cake', price: '½kg: ₹799 | 1kg: ₹1598', tag: 'Fusion Special', tagColor: '#ffb300', image: '/images/category_cakes.png', desc: 'Infused with real saffron milk, cardamom & soft Rasamalai pieces', cat: 'Signature Cakes' },
  { name: 'Delicious Honey Almond Cake', price: '½kg: ₹729 | 1kg: ₹1458', tag: null, image: '/images/category_cakes.png', desc: 'Pure honey infused sponge topped with roasted sliced almonds', cat: 'Signature Cakes' },
  { name: 'Special Fudge Nuts Cake', price: '½kg: ₹649 | 1kg: ₹1298', tag: null, image: '/images/category_cakes.png', desc: 'Fudgy dark chocolate cake loaded with crunchy mixed nuts', cat: 'Signature Cakes' },
  { name: 'Lovable Butterscotch Cake', price: '½kg: ₹559 | 1kg: ₹1118', tag: null, image: '/images/category_cakes.png', desc: 'Crunchy butterscotch praline with brown sugar caramel cream', cat: 'Signature Cakes' },
  { name: 'Milky Nuts', price: '½kg: ₹729 | 1kg: ₹1458', tag: null, image: '/images/category_cakes.png', desc: 'Rich milk cream frosting blended with premium dry fruits', cat: 'Signature Cakes' },

  // Chocolate Cake (Page 12) - (½ kg / 1 kg)
  { name: 'Milky Chocolate Truffle Cake', price: '½kg: ₹599 | 1kg: ₹1199', tag: 'Top Seller', tagColor: '#f06292', image: '/images/category_cakes.png', desc: 'Rich milk chocolate ganache with chocolate sponge layers', cat: 'Chocolate Cakes' },
  { name: 'Belgium Chocolate Truffle Cake', price: '½kg: ₹669 | 1kg: ₹1398', tag: 'Chef Special', tagColor: '#d9a86c', image: '/images/category_cakes.png', desc: 'Imported 70% Belgian dark chocolate truffle ganache', cat: 'Chocolate Cakes' },
  { name: 'Yummy Gulab Jamun Cake', price: '½kg: ₹479 | 1kg: ₹958', tag: 'Top Seller', tagColor: '#ffb300', image: '/images/category_cakes.png', desc: 'Unique Indian fusion cake layered with juicy Gulab Jamuns', cat: 'Chocolate Cakes' },
  { name: 'Ferrero Rocher Cake', price: '1kg: ₹2199 (1 kg only)', tag: 'Luxury', tagColor: '#d9a86c', image: '/images/category_cakes.png', desc: 'Loaded with whole Ferrero Rocher chocolates & hazelnut Nutella ganache', cat: 'Chocolate Cakes' },
  { name: 'Chocolate Truffle', price: '½kg: ₹549 | 1kg: ₹1099', tag: null, image: '/images/category_cakes.png', desc: 'Classic rich dark chocolate truffle cake with cocoa dusting', cat: 'Chocolate Cakes' },
  { name: 'Yummy White Chocolate Cake', price: '½kg: ₹549 | 1kg: ₹1099', tag: null, image: '/images/category_cakes.png', desc: 'Silky smooth Belgian white chocolate frosting & sponge', cat: 'Chocolate Cakes' },
  { name: 'Delicious Choco Vancho Cake', price: '½kg: ₹559 | 1kg: ₹1260', tag: null, image: '/images/category_cakes.png', desc: 'Combination of dark chocolate ganache and white chocolate layers', cat: 'Chocolate Cakes' },

  // Fresh Cream Cakes (Page 13) - (½ kg / 1 kg)
  { name: 'White Forest Cake', price: '½kg: ₹399 | 1kg: ₹749', tag: 'Top Seller', tagColor: '#f06292', image: '/images/category_cakes.png', desc: 'Vanilla sponge, white chocolate flakes, maraschino cherries', cat: 'Fresh Cream' },
  { name: 'Blackcurrant Cake', price: '½kg: ₹449 | 1kg: ₹799', tag: 'Top Seller', tagColor: '#ffb300', image: '/images/category_cakes.png', desc: 'Tangy blackcurrant crushed compote with whipped fresh cream', cat: 'Fresh Cream' },
  { name: 'Red Velvet Fresh Cream', price: '½kg: ₹549 | 1kg: ₹1098', tag: null, image: '/images/category_cakes.png', desc: 'Classic red velvet crumb sponge with velvety cream frosting', cat: 'Fresh Cream' },
  { name: 'Black Forest Cake', price: '½kg: ₹399 | 1kg: ₹749', tag: 'Classic', tagColor: '#4caf50', image: '/images/category_cakes.png', desc: 'Dark chocolate shavings, fresh whipped cream & sour cherries', cat: 'Fresh Cream' },
  { name: 'Blueberry Fresh Cream', price: '½kg: ₹449 | 1kg: ₹799', tag: null, image: '/images/category_cakes.png', desc: 'Sweet blueberry compote layered with light vanilla cream', cat: 'Fresh Cream' },
  { name: 'German Forest Cake', price: '½kg: ₹499 | 1kg: ₹998', tag: null, image: '/images/category_cakes.png', desc: 'Rich chocolate sponge loaded with cherry compote & dark truffle', cat: 'Fresh Cream' },
  { name: 'Vanilla Fresh Cream', price: '½kg: ₹369 | 1kg: ₹649', tag: null, image: '/images/category_cakes.png', desc: 'Light, fluffy vanilla bean sponge with fresh whip cream', cat: 'Fresh Cream' },
  { name: 'Pineapple Fresh Cream', price: '½kg: ₹369 | 1kg: ₹649', tag: null, image: '/images/category_cakes.png', desc: 'Juicy Hawaiian pineapple crush with soft whipped cream', cat: 'Fresh Cream' },
  { name: 'Strawberry Fresh Cream', price: '½kg: ₹369 | 1kg: ₹649', tag: null, image: '/images/category_cakes.png', desc: 'Fresh strawberry crush layered in soft vanilla sponge', cat: 'Fresh Cream' },
];

const CakesMenu = () => {
  const [filter, setFilter] = useState('All');
  const cats = ['All', 'Signature Cakes', 'Chocolate Cakes', 'Fresh Cream'];
  const filtered = filter === 'All' ? items : items.filter(i => i.cat === filter);

  return (
    <div className="menu-page">
      <div className="menu-page__hero">
        <div className="menu-page__hero-content">
          <span className="menu-page__eyebrow">FRESHLY BAKED DAILY · ½ KG / 1 KG</span>
          <h1 className="menu-page__title">Cakes & Celebration Menu</h1>
          <p className="menu-page__desc">Signature Cakes, Chocolate Truffles & Fresh Cream Cakes.</p>
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

export default CakesMenu;
