// src/components/CarDetails.jsx
import { useEffect, useState } from 'react';

export default function CarDetails({ carData }) {
  // Estado para controlar si las imágenes están cargadas
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    console.log("CarDetails montado, carData:", carData);
    console.log("Imágenes a cargar:", carData.images);
    
    // Código de diagnóstico para la consola
    document.querySelectorAll('.gallery-item').forEach((item, i) => {
      console.log(`Elemento de galería ${i} encontrado:`, item);
    });
    
    // Asegurarse de que las imágenes estén cargadas
    let loadedCount = 0;
    const totalImages = carData.images.length;
    
    carData.images.forEach((src, index) => {
      const img = new Image();
      img.onload = () => {
        console.log(`Imagen ${index} cargada correctamente: ${src}`);
        loadedCount++;
        if (loadedCount === totalImages) {
          console.log("Todas las imágenes cargadas");
          setImagesLoaded(true);
        }
      };
      img.onerror = () => {
        console.error(`Error al cargar imagen ${index}: ${src}`);
        // Incrementamos el contador incluso para imágenes fallidas para no quedarnos esperando
        loadedCount++;
        if (loadedCount === totalImages) {
          console.log("Proceso de carga de imágenes completado, algunas fallaron");
          setImagesLoaded(true);
        }
      };
      img.src = src;
    });
    
    // Configurar los filtros de galería solo después de que las imágenes carguen
    const setupGalleryFilters = () => {
      const filterButtons = document.querySelectorAll('.gallery-filter-btn');
      const galleryItems = document.querySelectorAll('.gallery-item');
      
      console.log("Configurando filtros. Botones:", filterButtons.length, "Items:", galleryItems.length);
      
      filterButtons.forEach(button => {
        button.addEventListener('click', () => {
          console.log("Botón de filtro clickeado:", button.getAttribute('data-filter'));
          
          // Actualizar botones activos
          filterButtons.forEach(btn => btn.classList.remove('active'));
          button.classList.add('active');
          
          // Filtrar elementos
          const filter = button.getAttribute('data-filter');
          
          galleryItems.forEach(item => {
            console.log("Evaluando item:", item, "tiene clase:", item.classList.contains(filter));
            if (filter === 'all' || item.classList.contains(filter)) {
              item.style.display = 'block';
            } else {
              item.style.display = 'none';
            }
          });
        });
      });
    };
    
    // Si todas las imágenes ya están cargadas o si hay error, configurar filtros
    if (imagesLoaded) {
      setupGalleryFilters();
    }
    
    // Limpieza
    return () => {
      console.log("CarDetails desmontado - limpieza");
    };
  }, [carData, imagesLoaded]);

  return (
    <>
      {/* Sección de Galería como sección principal */}
      <section className="car-gallery" id="gallery">
        <div className="gallery-container">
          <div className="gallery-heading">
            <h1 className="section-title main-title">
              {carData.brand} {carData.model} <span className="year-text">{carData.year}</span>
            </h1>
            <p className="section-subtitle">
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
          
          <div className="gallery-grid" style={{ border: '1px solid red' }}>
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
                  style={{ 
                    border: '2px solid yellow',
                    minHeight: '200px',
                    backgroundColor: '#2D2D2D'
                  }}
                >
                  <div className="gallery-img-wrapper" style={{ border: '1px solid green' }}>
                    <img 
                      src={img} 
                      alt={`${carData.brand} ${carData.model} ${title}`} 
                      className="gallery-img"
                      loading={index === 0 ? "eager" : "lazy"}
                      style={{ maxWidth: '100%', height: 'auto' }}
                      onLoad={() => console.log(`Imagen ${index} renderizada correctamente`)}
                      onError={() => console.error(`Error al renderizar imagen ${index}`)}
                    />
                  </div>
                  <div className="gallery-overlay" style={{ opacity: 1, transform: 'translateY(0)' }}>
                    <h3 className="gallery-title">{title}</h3>
                    <p className="gallery-caption">{carData.brand} {carData.model} {carData.year}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="gallery-action-buttons">
            <a href="#specs" className="btn btn-primary gallery-btn">
              <i className="fas fa-info-circle btn-icon"></i> Ver Especificaciones
            </a>
            <a href="#contact" className="btn btn-secondary gallery-btn">
              <i className="fas fa-phone btn-icon"></i> Contactar
            </a>
          </div>
        </div>
      </section>

      {/* Otras secciones que has definido */}
    </>
  );
}