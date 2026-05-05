import { useState, useEffect } from 'react';
import logo from '../assets/logo.png';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav id="nav" className={scrolled ? 'scrolled' : ''}>
        <a className="logo-link" href="#"><img className="logo-nav" src={logo} alt="Moston Property" /></a>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#services">Buy &amp; Sell</a></li>
          <li><a href="#rent">Rent</a></li>
          <li><a href="#commercial">Commercial</a></li>
          <li><a href="#commercial">Relocation</a></li>
          <li><a href="#contact" className="nav-cta">Get in Touch</a></li>
        </ul>
        <button className="hamburger" onClick={() => setMenuOpen(o => !o)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </nav>

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        <a href="#about" onClick={closeMenu}>About Us</a>
        <a href="#services" onClick={closeMenu}>Buy &amp; Sell</a>
        <a href="#rent" onClick={closeMenu}>Rent</a>
        <a href="#commercial" onClick={closeMenu}>Commercial</a>
        <a href="#contact" onClick={closeMenu}>Get in Touch</a>
      </div>
    </>
  );
}
