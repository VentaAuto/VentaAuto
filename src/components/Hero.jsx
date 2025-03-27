// src/components/Hero.jsx
import { useEffect } from 'react';

export default function Hero({ carData }) {
  useEffect(() => {
    // Inicializar GSAP animations
    if (window.gsap) {
      const gsap = window.gsap;
      gsap.from('.hero-title', { 
        opacity: 0, 
        y: 50, 
        duration: 1, 
        delay: 0.2 
      });
      gsap.from('.hero-subtitle', { 
        opacity: 0, 
        y: 30, 
        duration: 1, 
        delay: 0.4 
      });
      gsap.from('.hero-buttons .btn', { 
        opacity: 0, 
        y: 20, 
        duration: 0.8, 
        stagger: 0.2, 
        delay: 0.6 
      });
    }
  }, []);

  return (
    <section className="hero" id="home">
      <div className="animated-bg">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>
      <div className="hero-content" id="hero-content">
        <h1 className="hero-title" data-aos="fade-up">
          {carData.brand} {carData.model} <span className="year-text">{carData.year}</span>
        </h1>
        <p className="hero-subtitle" data-aos="fade-up" data-aos-delay="200">
          Descubre una experiencia de conducción excepcional con este sedan compacto, 
          elegante y económico. Un auto diseñado para quienes buscan estilo, 
          confort y rendimiento.
        </p>
        <div className="hero-buttons">
          <a href="#gallery" className="btn btn-primary glow" data-aos="fade-up" data-aos-delay="400">
            <i className="fas fa-car btn-icon"></i> Ver Galería
          </a>
          <a href="#contact" className="btn btn-secondary" data-aos="fade-up" data-aos-delay="500">
            <i className="fas fa-phone btn-icon"></i> Contactar
          </a>
        </div>
      </div>
    </section>
  );
}