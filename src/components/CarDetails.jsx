// src/components/CarDetails.jsx
export default function CarDetails({ carData }) {
  // Configuración de íconos para cada especificación
  const specIcons = {
    engine: "fa-engine",
    horsepower: "fa-gauge-high",
    transmission: "fa-gears",
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

  return (
    <>
      {/* Sección de Galería */}
      <section className="car-gallery" id="gallery">
        <div className="gallery-container">
          <h2 className="section-title" data-aos="fade-up">Galería</h2>
          <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
            Descubre cada detalle de este impresionante {carData.brand} {carData.model}
          </p>
          
          <div className="gallery-grid">
            {carData.images.map((img, index) => (
              <div 
                key={index} 
                className="gallery-item" 
                data-aos="zoom-in" 
                data-aos-delay={100 * index}
              >
                <img 
                  src={img} 
                  alt={`${carData.brand} ${carData.model} vista ${index + 1}`} 
                  className="gallery-img"
                />
                <div className="gallery-overlay">
                  <h3 className="gallery-title">
                    {index === 0 ? "Vista Frontal" : 
                     index === 1 ? "Vista Lateral" : 
                     index === 2 ? "Interior" : "Detalle"}
                  </h3>
                  <p className="gallery-caption">{carData.brand} {carData.model} {carData.year}</p>
                </div>
              </div>
            ))}
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