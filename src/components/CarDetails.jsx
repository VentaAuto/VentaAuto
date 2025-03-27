// src/components/CarDetails.jsx
export default function CarDetails({ carData }) {
    return (
      <section className="car-details">
        <div className="car-images">
          {carData.images.map((img, index) => (
            <img 
              key={index} 
              src={img} 
              alt={`${carData.brand} ${carData.model} vista ${index + 1}`} 
              className="car-image"
            />
          ))}
        </div>
        
        <div className="details-container">
          <h2>Características</h2>
          <div className="specs">
            <div className="spec-item">
              <span className="spec-label">Marca:</span>
              <span className="spec-value">{carData.brand}</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">Modelo:</span>
              <span className="spec-value">{carData.model}</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">Año:</span>
              <span className="spec-value">{carData.year}</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">Color:</span>
              <span className="spec-value">{carData.color}</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">Kilometraje:</span>
              <span className="spec-value">{carData.mileage} km</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">Transmisión:</span>
              <span className="spec-value">{carData.transmission}</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">Combustible:</span>
              <span className="spec-value">{carData.fuel}</span>
            </div>
          </div>
  
          <h3>Equipamiento</h3>
          <ul className="features-list">
            {carData.features.map((feature, index) => (
              <li key={index} className="feature-item">{feature}</li>
            ))}
          </ul>
        </div>
      </section>
    )
  }