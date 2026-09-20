import React, { useState } from 'react';
import './FastFoodMenu.css';

const items = [
  // La Pasta Italiana (Page 4)
  { name: 'Cheese Penne Pasta', price: '₹220', tag: 'Italian', tagColor: '#d9a86c', image: '/images/category_fastfood.png', desc: 'Rich cheese flavor with silky cream sauce tossed with penne pasta', cat: 'Pasta' },
  { name: 'Penne Arrabbiata', price: '₹220', tag: 'Spicy', tagColor: '#ff5722', image: '/images/category_fastfood.png', desc: 'Spicy tomato sauce with garlic, chili peppers, and fresh basil, tossed with penne pasta', cat: 'Pasta' },
  { name: 'Red Sauce Pasta', price: '₹220', tag: 'Popular', tagColor: '#d9a86c', image: '/images/category_fastfood.png', desc: 'Spicy tomato sauce with garlic, chili peppers, and fresh herbs tossed with penne pasta', cat: 'Pasta' },

  // Burgers (Page 5)
  { name: 'Crispy Chicken Burger', price: '₹150', tag: 'Bestseller', tagColor: '#f06292', image: '/images/category_fastfood.png', desc: 'Crispy fried chicken patty, lettuce, chipotle mayo', cat: 'Burgers' },
  { name: 'Double Decker Burger', price: '₹190', tag: 'Special', tagColor: '#ffb300', image: '/images/category_fastfood.png', desc: 'Loaded double chicken patties, double cheese layers', cat: 'Burgers' },
  { name: 'No Bun Burger', price: '₹199', tag: 'Low Carb', tagColor: '#4caf50', image: '/images/category_fastfood.png', desc: 'Keto friendly grilled chicken patty with fresh greens', cat: 'Burgers' },
  { name: 'Chicken Burger', price: '₹119', tag: null, image: '/images/category_fastfood.png', desc: 'Juicy chicken patty with house special mayo sauce', cat: 'Burgers' },
  { name: 'Tandoori Burger', price: '₹119', tag: null, image: '/images/category_fastfood.png', desc: 'Spiced tandoori chicken patty with mint chutney', cat: 'Burgers' },
  { name: 'BBQ Burger', price: '₹149', tag: null, image: '/images/category_fastfood.png', desc: 'Smoky BBQ sauce drizzled chicken burger', cat: 'Burgers' },
  { name: 'Egg Burger', price: '₹99', tag: null, image: '/images/category_fastfood.png', desc: 'Fluffy egg omelette patty with veggies & mayo', cat: 'Burgers' },
  { name: 'Paneer Burger', price: '₹119', tag: 'Veg Special', tagColor: '#ffb300', image: '/images/category_fastfood.png', desc: 'Crispy cottage cheese paneer patty with herbs', cat: 'Burgers' },
  { name: 'Veggie Burger', price: '₹80', tag: null, image: '/images/category_fastfood.png', desc: 'Classic garden veggie patty with fresh lettuce', cat: 'Burgers' },

  // Pizzas (Pages 6 & 7) - R: 6", M: 8", L: 12"
  { name: 'Cheesy Chicken Pizza', price: 'R: ₹159 | M: ₹309 | L: ₹409', tag: 'Bestseller', tagColor: '#f06292', image: '/images/category_fastfood.png', desc: 'Loaded chicken chunks with molten mozzarella cheese', cat: 'Pizza' },
  { name: 'Chicken Tikka Pizza', price: 'R: ₹220 | M: ₹370 | L: ₹499', tag: 'Top Seller', tagColor: '#ffb300', image: '/images/category_fastfood.png', desc: 'Tandoori chicken tikka, onions, capsicum, mozzarella', cat: 'Pizza' },
  { name: 'BBQ Chicken Pizza', price: 'R: ₹210 | M: ₹399 | L: ₹499', tag: null, image: '/images/category_fastfood.png', desc: 'Smoky BBQ chicken chunks, sweet corn, melted cheese', cat: 'Pizza' },
  { name: 'Peri Peri Chicken Pizza', price: 'R: ₹220 | M: ₹399 | L: ₹499', tag: null, image: '/images/category_fastfood.png', desc: 'Spicy peri peri marinated chicken with jalapenos', cat: 'Pizza' },
  { name: 'Double Chicken Combo Pizza', price: 'R: ₹220 | M: ₹399 | L: ₹499', tag: null, image: '/images/category_fastfood.png', desc: 'Double chicken toppings with extra cheese layer', cat: 'Pizza' },
  { name: 'Triple Chicken Pizza', price: 'R: ₹229 | M: ₹409 | L: ₹509', tag: 'Supreme', tagColor: '#d9a86c', image: '/images/category_fastfood.png', desc: 'Tikka, BBQ & Peri Peri chicken trio pizza supreme', cat: 'Pizza' },
  { name: 'Paneer Tikka Pizza', price: 'R: ₹209 | M: ₹370 | L: ₹490', tag: null, image: '/images/category_fastfood.png', desc: 'Spiced paneer tikka, capsicum, onions, mozzarella', cat: 'Pizza' },
  { name: 'Mushroom Tikka Pizza', price: 'R: ₹209 | M: ₹370 | L: ₹490', tag: null, image: '/images/category_fastfood.png', desc: 'Herb marinated mushrooms, onions & mozzarella cheese', cat: 'Pizza' },
  { name: 'Margherita Pizza', price: 'R: ₹129 | M: ₹240 | L: ₹320', tag: 'Classic', tagColor: '#4caf50', image: '/images/category_fastfood.png', desc: 'Classic rich tomato sauce & 100% mozzarella cheese', cat: 'Pizza' },
  { name: 'Veg Delight Pizza', price: 'R: ₹139 | M: ₹299 | L: ₹399', tag: null, image: '/images/category_fastfood.png', desc: 'Capsicum, onions, tomatoes, sweet corn & mozzarella', cat: 'Pizza' },

  // Sandwiches (Pages 8 & 9)
  { name: 'Crispy Chicken Sandwich', price: '₹149', tag: 'Bestseller', tagColor: '#f06292', image: '/images/category_fastfood.png', desc: 'Golden crispy chicken strips with Mayo & lettuce', cat: 'Sandwiches' },
  { name: 'Chicken & Egg Mixed Sandwich', price: '₹139', tag: null, image: '/images/category_fastfood.png', desc: 'Chicken tikka & egg omelette combined sandwich', cat: 'Sandwiches' },
  { name: 'Peri Peri Chicken Sandwich', price: '₹129', tag: null, image: '/images/category_fastfood.png', desc: 'Spicy peri peri chicken filling toasted crisp', cat: 'Sandwiches' },
  { name: 'Chicken Tikka Sandwich', price: '₹129', tag: null, image: '/images/category_fastfood.png', desc: 'Tandoori chicken tikka with mint mayo sauce', cat: 'Sandwiches' },
  { name: 'Mayo Chicken Sandwich', price: '₹119', tag: null, image: '/images/category_fastfood.png', desc: 'Shredded chicken in rich creamy garlic mayo', cat: 'Sandwiches' },
  { name: 'Peri Peri Paneer Sandwich', price: '₹129', tag: null, image: '/images/category_fastfood.png', desc: 'Peri peri cottage cheese paneer grilled sandwich', cat: 'Sandwiches' },
  { name: 'Paneer Tikka Sandwich', price: '₹129', tag: null, image: '/images/category_fastfood.png', desc: 'Tandoori paneer tikka with green chutney', cat: 'Sandwiches' },
  { name: 'Corn Sandwich', price: '₹99', tag: null, image: '/images/category_fastfood.png', desc: 'Sweet corn & melted cheese grilled sandwich', cat: 'Sandwiches' },
  { name: 'Veg Loaded Sandwich', price: '₹89', tag: null, image: '/images/category_fastfood.png', desc: 'Triple layer vegetable loaded classic toast', cat: 'Sandwiches' },

  // French Fries & Loaded Fries (Page 10)
  { name: 'Crispy Chicken Loaded Fries', price: '₹169', tag: 'Supreme', tagColor: '#f06292', image: '/images/category_fastfood.png', desc: 'Hot fries topped with crispy chicken, cheese sauce & herbs', cat: 'Fries & Sides' },
  { name: 'Peri Peri Chicken Loaded Fries', price: '₹159', tag: 'Spicy', tagColor: '#ff5722', image: '/images/category_fastfood.png', desc: 'Peri peri fries topped with chicken & liquid cheese', cat: 'Fries & Sides' },
  { name: 'Paneer Peri Peri Loaded Fries', price: '₹159', tag: 'Veg Loaded', tagColor: '#ffb300', image: '/images/category_fastfood.png', desc: 'Fries topped with peri peri paneer cubes & cheese sauce', cat: 'Fries & Sides' },
  { name: 'Cheese Loaded Fries', price: '₹139', tag: 'Cheesy', tagColor: '#d9a86c', image: '/images/category_fastfood.png', desc: 'Crispy french fries drenched in warm liquid cheddar cheese', cat: 'Fries & Sides' },
  { name: 'Peri Peri Fries', price: '₹99', tag: null, image: '/images/category_fastfood.png', desc: 'French fries tossed in fiery African peri peri spice mix', cat: 'Fries & Sides' },
  { name: 'Classic French Fries', price: '₹79', tag: null, image: '/images/category_fastfood.png', desc: 'Golden salted crisp potato fries served with ketchup', cat: 'Fries & Sides' },
];

const FastFoodMenu = () => {
  const [filter, setFilter] = useState('All');
  const cats = ['All', 'Pasta', 'Burgers', 'Pizza', 'Sandwiches', 'Fries & Sides'];
  const filtered = filter === 'All' ? items : items.filter(i => i.cat === filter);

  return (
    <div className="menu-page">
      <div className="menu-page__hero" style={{ background: 'linear-gradient(135deg, #351f00, #6b2c1e)' }}>
        <div className="menu-page__hero-content">
          <span className="menu-page__eyebrow">SAVOR THE FLAVORS OF ITALY & MORE · FREE DELIVERY</span>
          <h1 className="menu-page__title">Fast Food Menu</h1>
          <p className="menu-page__desc">La Pasta Italiana, Gourmet Burgers, Pizzas, Sandwiches & Loaded Fries.</p>
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

export default FastFoodMenu;
