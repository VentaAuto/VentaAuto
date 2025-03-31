// src/components/PriceSection.jsx
export default function PriceSection({ price, currency }) {
  // Formatear el precio con separadores de miles
  const formattedPrice = new Intl.NumberFormat('es-ES').format(price);
  
  return (
    <section className="price-section" id="price">
      <div className="animated-bg">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </div>
      
      <div className="price-container">
        <h2 className="section-title" data-aos="fade-up">Precio Especial</h2>
        <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
          Una oportunidad única para adquirir este vehículo a un precio inmejorable
        </p>
        
        <div className="price-card" data-aos="zoom-in" data-aos-delay="200">
          <div className="price-label">PRECIO DE VENTA</div>
          <div className="price-value">
            <span className="price-currency">{currency}</span>
            {formattedPrice}
          </div>
          <p className="price-description">
            Precio negociable para compradores serios
          </p>
          
          <ul className="price-features">
            <li className="price-feature">
              <i className="fas fa-check feature-check"></i>
              Documentación al día
            </li>
            <li className="price-feature">
              <i className="fas fa-check feature-check"></i>
              Mantenciones al día
            </li>
            <li className="price-feature">
              <i className="fas fa-check feature-check"></i>
              Sin multas ni gravámenes
            </li>

          </ul>
        
        </div>
      </div>
    </section>
  );
}
