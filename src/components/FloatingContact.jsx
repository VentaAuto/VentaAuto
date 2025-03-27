// src/components/FloatingContact.jsx
import { useState, useEffect } from 'react';

export default function FloatingContact({ contact }) {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Mostrar el botón flotante después de 5 segundos
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);
    
    // Mostrar el botón cuando el usuario scrollea hacia abajo
    const handleScroll = () => {
      if (window.scrollY > 300 && !isVisible) {
        setIsVisible(true);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isVisible]);
  
  return (
    <div className={`floating-contact ${isVisible ? 'visible' : ''}`}>
      <a 
        href={`https://wa.me/${contact.whatsapp.replace('+', '')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp pulse-animation"
        aria-label="Contactar por WhatsApp"
        title="Contactar por WhatsApp"
      >
        <i className="fab fa-whatsapp"></i>
      </a>
      <a 
        href={`tel:${contact.phone}`}
        className="floating-call"
        aria-label="Llamar ahora"
        title="Llamar ahora"
      >
        <i className="fas fa-phone-alt"></i>
      </a>
    </div>
  );
}