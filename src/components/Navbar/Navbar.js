import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = ({ activePage, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'Brownies & Cakes', id: 'cakes' },
    { label: 'Fast Food', id: 'fastfood' },
    { label: 'Desserts', id: 'desserts' },
    { label: 'Custom Cakes', id: 'custom' },
    { label: 'Branches', id: 'branches' },
    { label: 'Franchise', id: 'franchise' },
  ];

  const handleNav = (id) => {
    onNavigate(id);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Mobile Backdrop Overlay */}
      {menuOpen && (
        <div className="navbar__overlay" onClick={() => setMenuOpen(false)} aria-hidden="true" />
      )}

      <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''} ${activePage !== 'home' ? 'navbar--solid' : ''}`}>
        <div className="navbar__container">
          {/* Logo */}
          <button className="navbar__logo" onClick={() => handleNav('home')}>
            <img src="/images/logo.png" alt="Brownie Baker's" className="navbar__logo-img" />
            <div className="navbar__logo-text">
              <span className="navbar__logo-name">Brownie Baker's</span>
              <span className="navbar__logo-sub">Artisan Bakery</span>
            </div>
          </button>

          {/* Nav Links */}
          <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  className={`navbar__link ${activePage === link.id ? 'navbar__link--active' : ''}`}
                  onClick={() => handleNav(link.id)}
                >
                  {link.label}
                </button>
              </li>
            ))}
            <li>
              <button className="navbar__order-btn" onClick={() => handleNav('contact')}>
                Order Now
              </button>
            </li>
          </ul>

          {/* Hamburger */}
          <button
            className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
