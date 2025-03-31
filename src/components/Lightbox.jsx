// src/components/Lightbox.jsx
import { useState, useEffect } from 'react';

export default function Lightbox({ isOpen, onClose, images, startIndex = 0 }) {
  const [currentIndex, setCurrentIndex] = useState(startIndex);
  
  // Actualizar el índice cuando cambie el startIndex
  useEffect(() => {
    setCurrentIndex(startIndex);
  }, [startIndex]);
  
  // Si la galería está cerrada, no renderizar nada
  if (!isOpen) return null;
  
  // Funciones para navegar entre imágenes
  const nextImage = (e) => {
    e.stopPropagation(); // Evitar que el clic se propague al overlay
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };
  
  const prevImage = (e) => {
    e.stopPropagation(); // Evitar que el clic se propague al overlay
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleClose = (e) => {
    e.stopPropagation();
    onClose();
  };

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <div className="lightbox-container" onClick={(e) => e.stopPropagation()}>
        <button className="lightbox-close" onClick={handleClose}>×</button>
        
        <img 
          src={images[currentIndex]} 
          alt={`Imagen ${currentIndex + 1}`} 
          className="lightbox-image"
        />
        
        <button className="lightbox-nav lightbox-prev" onClick={prevImage}>
          &#10094;
        </button>
        
        <button className="lightbox-nav lightbox-next" onClick={nextImage}>
          &#10095;
        </button>
        
        <div className="lightbox-counter">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
    </div>
  );
}