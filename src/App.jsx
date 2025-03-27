// src/App.jsx
import { useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import CarDetails from './components/CarDetails'
import PriceSection from './components/PriceSection'
import ContactButtons from './components/ContactButtons'
import Footer from './components/Footer'

function App() {
  // Datos del auto Great Wall C30 2015
  const carData = {
    brand: 'Great Wall',
    model: 'C30',
    year: 2015,
    color: 'Negro',
    mileage: 85000,
    transmission: 'Manual',
    fuel: 'Gasolina',
    engine: '1.5L',
    horsepower: '105 HP',
    features: [
      'Aire acondicionado',
      'Ventanas eléctricas',
      'Cierre centralizado',
      'Dirección asistida',
      'Frenos ABS',
      'Airbags frontales',
      'Sistema de audio con USB/MP3',
      'Llantas de aleación',
      'Espejos eléctricos',
      'Asientos tapizados en tela de alta calidad',
      'Computadora de viaje',
      'Control de estabilidad'
    ],
    images: [
      '/img/greatwall-front.jpg',
      '/img/greatwall-side.jpg',
      '/img/greatwall-interior.jpg',
      '/img/greatwall-dashboard.jpg'
    ],
    price: 5800000,
    currency: 'CLP',
    contact: {
      phone: '+123456789',
      whatsapp: '+123456789',
      email: 'tuemail@ejemplo.com'
    }
  };

  useEffect(() => {
    // Inicializar animaciones al cargar la página
    window.scrollTo(0, 0);
    
    // Crear partículas de fondo si gsap está disponible
    if (window.gsap) {
      createParticles();
    }
    
    // Smooth scrolling para navegación
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 70,
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  // Función para crear partículas animadas en el fondo
  const createParticles = () => {
    const gsap = window.gsap;
    const container = document.querySelector('.app-container');
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'animated-bg';
    container.appendChild(particlesContainer);
    
    // Crear 50 partículas
    for (let i = 0; i < 50; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      
      // Tamaño aleatorio
      const size = Math.random() * 5 + 2;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      // Posición inicial aleatoria
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      
      particlesContainer.appendChild(particle);
      
      // Animar la partícula
      gsap.to(particle, {
        x: `random(-100, 100)`,
        y: `random(-100, 100)`,
        opacity: Math.random() * 0.5 + 0.1,
        duration: Math.random() * 20 + 10,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
    }
  };

  return (
    <div className="app-container">
      <Header brand={carData.brand} model={carData.model} year={carData.year} />
      <Hero carData={carData} />
      <CarDetails carData={carData} />
      <PriceSection price={carData.price} currency={carData.currency} />
      <ContactButtons contact={carData.contact} />
      <Footer brand={carData.brand} model={carData.model} />
    </div>
  );
}

export default App;