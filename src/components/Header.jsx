// src/components/Header.jsx
import { useEffect, useState } from 'react';

export default function Header({ brand, model, year }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-content">
        <a href="#gallery" className="logo">
          <i className="fas fa-car-side logo-icon"></i>
          <span className="logo-text">{brand} {model}</span>
        </a>
        <div className={`nav-items ${menuOpen ? 'active' : ''}`}>
          <a href="#gallery" onClick={() => setMenuOpen(false)}>Galería</a>
          <a href="#specs" onClick={() => setMenuOpen(false)}>Especificaciones</a>
          <a href="#features" onClick={() => setMenuOpen(false)}>Características</a>
          <a href="#price" onClick={() => setMenuOpen(false)}>Precio</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contacto</a>
        </div>
        <button 
          className="mobile-menu-button" 
          onClick={toggleMenu}
          aria-label="Menú de navegación"
          aria-expanded={menuOpen}
        >
          <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>
    </nav>
  );
}