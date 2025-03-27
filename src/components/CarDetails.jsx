// src/components/CarDetails.jsx
import { useEffect } from 'react';

export default function CarDetails({ carData }) {
  // Configuración de íconos para cada especificación
  const specIcons = {
    engine: "fa-car-battery",
    horsepower: "fa-tachometer-alt",
    transmission: "fa-cogs",
    fuel: "fa-gas-pump",
    color: "fa-palette",
    mileage: "fa-road"
  };

  // Configuración de descripciones para cada especificación
  const specDescriptions = {
    engine: "Motor de alta eficiencia que combina potencia y economía de combustible.",
    horsepower: "Potencia suficiente para un manejo ágil tanto en ciudad como en carretera.",
    transmission: "Transmisión que ofrece una experiencia de conducción suave y precisa.",
    fuel: "Bajo consumo de combustible para mayor economía.",
    color: "Acabado elegante y resistente a rayones menores.",
    mileage: "Kilometraje verificable con mantenimientos al día."
  };

  useEffect(() => {
    // Inicializar filtros de galería
    const filterButtons = document.querySelectorAll('.gallery-filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Actualizar botones activos
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // Filtrar elementos
        const filter = button.getAttribute('data-filter');
        
        galleryItems.forEach(item => {
          if (filter === 'all' || item.classList.contains(filter)) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });

    // Inicializar lightbox para las imágenes si está disponible
    if (window.GLightbox) {
      window.GLightbox({
        selector: '.gallery-img'
      });
    }

    // Animación inicial para elementos principales
    const gsap = window.gsap;
    if (gsap) {
      // Animar el título de la galería con un efecto de entrada
      gsap.from('.gallery-heading', { 
        opacity: 0, 
        y: -30, 
        duration: 1,
        delay: 0.3
      });
      
      // Animar los botones de filtro con efecto escalonado
      gsap.from('.gallery-filter-btn', { 
        opacity: 0, 
        y: 20, 
        duration: 0.6,
        stagger: 0.1,
        delay: 0.5
      });
      
      // Animar las imágenes de la galería con efecto stagger
      gsap.from('.gallery-item', { 
        opacity: 0, 
        y: 50, 
        duration: 0.8,
        stagger: 0.15,
        delay: 0.8
      });
    }
  }, []);

  return (
    <>
      {/* Sección de Galería como sección principal */}
      <section className="car-gallery" id="gallery">
        <div className="gallery-container">
          <div className="gallery-heading">
            <h1 className="section-title main-title" data-aos="fade-up">
              {carData.brand} {carData.model} <span className="year-text">{carData.year}</span>
            </h1>
            <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
              Descubre una experiencia de conducción excepcional con este sedan compacto, 
              elegante y económico. Un auto diseñado para quienes buscan estilo, 
              confort y rendimiento.
            </p>
          </div>
          
          <div className="gallery-filter">
            <button className="gallery-filter-btn active" data-filter="all">Todas</button>
            <button className="gallery-filter-btn" data-filter="exterior">Exterior</button>
            <button className="gallery-filter-btn" data-filter="interior">Interior</button>
          </div>
          
          <div className="gallery-grid">
            {carData.images.map((img, index) => {
              // Asignar categorías a las imágenes
              const category = index <= 1 ? "exterior" : "interior";
              const title = index === 0 ? "Vista Frontal" : 
                          index === 1 ? "Vista Lateral" : 
                          index === 2 ? "Interior" : "Tablero";
              
              return (
                <div 
                  key={index} 
                  className={`gallery-item ${category}`}
                  data-aos="zoom-in" 
                  data-aos-delay={100 * index}
                >
                  <div className="gallery-img-wrapper">
                    <img 
                      src={img} 
                      alt={`${carData.brand} ${carData.model} ${title}`} 
                      className="gallery-img"
                      loading={index === 0 ? "eager" : "lazy"} // Carga rápida para la primera imagen
                    />
                  </div>
                  <div className="gallery-overlay">
                    <h3 className="gallery-title">{title}</h3>
                    <p className="gallery-caption">{carData.brand} {carData.model} {carData.year}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="gallery-action-buttons">
            <a href="#specs" className="btn btn-primary glow gallery-btn">
              <i className="fas fa-info-circle btn-icon"></i> Ver Especificaciones
            </a>
            <a href="#contact" className="btn btn-secondary gallery-btn">
              <i className="fas fa-phone btn-icon"></i> Contactar
            </a>
          </div>
        </div>
      </section>

      {/* Sección de Especificaciones */}
      <section className="car-details" id="specs">
        <div className="details-container">
          <h2 className="section-title" data-aos="fade-up">Especificaciones</h2>
          <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
            Conoce las características técnicas que hacen destacar a este vehículo
          </p>
          
          <div className="specs-grid">
            <div className="spec-card" data-aos="fade-up" data-aos-delay="100">
              <i className={`fas ${specIcons.engine} spec-icon`}></i>
              <h3 className="spec-title">Motor</h3>
              <div className="spec-value">{carData.engine}</div>
              <p className="spec-description">{specDescriptions.engine}</p>
            </div>
            
            <div className="spec-card" data-aos="fade-up" data-aos-delay="200">
              <i className={`fas ${specIcons.horsepower} spec-icon`}></i>
              <h3 className="spec-title">Potencia</h3>
              <div className="spec-value">{carData.horsepower}</div>
              <p className="spec-description">{specDescriptions.horsepower}</p>
            </div>
            
            <div className="spec-card" data-aos="fade-up" data-aos-delay="300">
              <i className={`fas ${specIcons.transmission} spec-icon`}></i>
              <h3 className="spec-title">Transmisión</h3>
              <div className="spec-value">{carData.transmission}</div>
              <p className="spec-description">{specDescriptions.transmission}</p>
            </div>
            
            <div className="spec-card" data-aos="fade-up" data-aos-delay="400">
              <i className={`fas ${specIcons.fuel} spec-icon`}></i>
              <h3 className="spec-title">Combustible</h3>
              <div className="spec-value">{carData.fuel}</div>
              <p className="spec-description">{specDescriptions.fuel}</p>
            </div>
            
            <div className="spec-card" data-aos="fade-up" data-aos-delay="500">
              <i className={`fas ${specIcons.color} spec-icon`}></i>
              <h3 className="spec-title">Color</h3>
              <div className="spec-value">{carData.color}</div>
              <p className="spec-description">{specDescriptions.color}</p>
            </div>
            
            <div className="spec-card" data-aos="fade-up" data-aos-delay="600">
              <i className={`fas ${specIcons.mileage} spec-icon`}></i>
              <h3 className="spec-title">Kilometraje</h3>
              <div className="spec-value">{carData.mileage.toLocaleString()} km</div>
              <p className="spec-description">{specDescriptions.mileage}</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Sección de Características */}
      <section className="features" id="features">
        <div className="features-container">
          <h2 className="section-title" data-aos="fade-up">Características</h2>
          <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
            Equipamiento y comodidades que hacen de este vehículo una excelente opción
          </p>
          
          <div className="features-grid">
            {carData.features.map((feature, index) => (
              <div 
                key={index} 
                className="feature-item" 
                data-aos="fade-up" 
                data-aos-delay={50 * index}
              >
                <i className="fas fa-check feature-icon"></i>
                <div className="feature-text">{feature}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}