import React from 'react';
import { Camera, Share2, Globe, Video, MapPin, Phone, Mail, ShoppingBag } from 'lucide-react';
import './Footer.css';

const Footer = ({ onNavigate }) => {
  const menuLinks = [
    { label: 'Brownies & Cakes', id: 'cakes' },
    { label: 'Fast Food', id: 'fastfood' },
    { label: 'Desserts & Pastry', id: 'desserts' },
    { label: 'Custom Cakes', id: 'custom' },
  ];

  const companyLinks = [
    { label: 'Our Story', id: 'home' },
    { label: 'Branches', id: 'branches' },
    { label: 'Franchise', id: 'franchise' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__top">
          {/* Brand */}
          <div className="footer__brand">
            <div className="footer__logo">
              <img src="/images/logo.png" alt="Brownie Baker's" className="footer__logo-img" />
              <span className="footer__logo-name">Brownie Baker's</span>
            </div>
            <p className="footer__tagline">
              Bringing Affordable Delights to Tamil Nadu. 
              ESTD 2021 · Bodi | Chinnamanur | Cumbum | Theni.
            </p>
            <div className="footer__social">
              <button className="footer__social-btn" aria-label="Instagram"><Camera size={18} /></button>
              <button className="footer__social-btn" aria-label="Share"><Share2 size={18} /></button>
              <button className="footer__social-btn" aria-label="Website"><Globe size={18} /></button>
              <button className="footer__social-btn" aria-label="Video"><Video size={18} /></button>
            </div>
          </div>

          {/* Menu */}
          <div className="footer__col">
            <h4 className="footer__col-title">Menu</h4>
            <ul className="footer__links">
              {menuLinks.map((l) => (
                <li key={l.id}>
                  <button className="footer__link" onClick={() => onNavigate(l.id)}>{l.label}</button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="footer__col">
            <h4 className="footer__col-title">Company</h4>
            <ul className="footer__links">
              {companyLinks.map((l) => (
                <li key={l.id}>
                  <button className="footer__link" onClick={() => onNavigate(l.id)}>{l.label}</button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer__col">
            <h4 className="footer__col-title">Contact</h4>
            <div className="footer__contact-items">
              <p><MapPin size={16} className="footer__icon" /> Bodi | Chinnamanur | Cumbum | Theni</p>
              <p><Phone size={16} className="footer__icon" /> Franchise: 95789 09434</p>
              <p><Phone size={16} className="footer__icon" /> Bodi: 73977 01009 / 88074 47004</p>
              <p><Mail size={16} className="footer__icon" /> support@browniebakers.in</p>
            </div>
            <button className="footer__order-btn" onClick={() => onNavigate('contact')}>
              <ShoppingBag size={18} /> Order Online
            </button>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© 2024 Brownie Bakers. All rights reserved. Spreading joy across Tamil Nadu.</p>
          <div className="footer__bottom-links">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Food Safety</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
