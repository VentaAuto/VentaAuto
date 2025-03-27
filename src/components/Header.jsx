// src/components/Header.jsx
import { useEffect, useState } from 'react';

export default function Header({ brand, model, year }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-content">
        <a href="#home" className="logo">
          <i className="fas fa-car-side logo-icon"></i>
          <span className="logo-text">{brand} {model}</span>
        </a>
        <div className="nav-items">
          <a href="#gallery" data-aos="fade-down" data-aos-delay="100">Galería</a>
          <a href="#specs" data-aos="fade-down" data-aos-delay="200">Especificaciones</a>
          <a href="#features" data-aos="fade-down" data-aos-delay="300">Características</a>
          <a href="#price" data-aos="fade-down" data-aos-delay="400">Precio</a>
          <a href="#contact" data-aos="fade-down" data-aos-delay="500">Contacto</a>
        </div>
        <button className="mobile-menu-button">
          <i className="fas fa-bars"></i>
        </button>
      </div>
    </nav>
  );
}