import React from 'react';
import './Testimonials.css';

const reviews = [
  {
    name: 'Priya Sharma',
    role: 'Food Blogger',
    review: 'These brownies are absolutely divine! The Belgian truffle brownie melted in my mouth. Best I\'ve ever had in Chennai!',
    rating: 5,
    avatar: '👩',
  },
  {
    name: 'Arun Kumar',
    role: 'Regular Customer',
    review: 'I order every week for my office. The salted caramel brownie is a hit with everyone. Packaging is beautiful too!',
    rating: 5,
    avatar: '👨',
  },
  {
    name: 'Meera Iyer',
    role: 'Home Baker',
    review: 'As a baker myself, I\'m very particular. Brownie Bakers nails the perfect fudgy texture every single time.',
    rating: 5,
    avatar: '👩‍🍳',
  },
  {
    name: 'Rahul Nair',
    role: 'Event Planner',
    review: 'Ordered 200 brownies for a corporate event. Professional delivery, stunning presentation, rave reviews from guests!',
    rating: 5,
    avatar: '🧑',
  },
  {
    name: 'Divya Patel',
    role: 'Loyal Customer',
    review: 'The gulab jamun fusion brownie is genius! Such a creative take. It\'s become my go-to gifting option.',
    rating: 5,
    avatar: '👩',
  },
  {
    name: 'Sanjay Reddy',
    role: 'Chocolatier',
    review: 'The quality of chocolate used is exceptional. You can taste the difference. True artisan craftsmanship!',
    rating: 5,
    avatar: '👨‍🍳',
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials">
      <div className="testimonials__container">
        <div className="testimonials__header">
          <span className="testimonials__section-label">Reviews</span>
          <h2 className="testimonials__title">What Our Customers Say</h2>
          <p className="testimonials__subtitle">10,000+ happy customers and counting! 🍫</p>
        </div>

        <div className="testimonials__grid">
          {reviews.map((review, i) => (
            <div key={i} className="testimonials__card">
              <div className="testimonials__stars">
                {'★'.repeat(review.rating)}
              </div>
              <p className="testimonials__text">"{review.review}"</p>
              <div className="testimonials__author">
                <span className="testimonials__avatar">{review.avatar}</span>
                <div>
                  <p className="testimonials__name">{review.name}</p>
                  <p className="testimonials__role">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
