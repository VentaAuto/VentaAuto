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
        
        <div className="price-content">
          <div className="price-card" data-aos="zoom-in" data-aos-delay="200">
            <div className="price-badge">¡OFERTA ESPECIAL!</div>
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
              <li className="price-feature">
                <i className="fas fa-check feature-check"></i>
                Posibilidad de financiamiento bancario
              </li>
            </ul>
            
            <a href="#contact" className="btn btn-primary glow">
              <i className="fas fa-comment-dollar"></i> Consultar
            </a>
          </div>
          
          <div className="price-info" data-aos="fade-left" data-aos-delay="300">
            <div className="price-info-item">
              <i className="fas fa-calendar-check price-info-icon"></i>
              <div className="price-info-content">
                <h3 className="price-info-title">Transferencia inmediata</h3>
                <p className="price-info-text">Todos los documentos listos para transferir en el mismo día.</p>
              </div>
            </div>
            
            <div className="price-info-item">
              <i className="fas fa-hand-holding-dollar price-info-icon"></i>
              <div className="price-info-content">
                <h3 className="price-info-title">Formas de pago</h3>
                <p className="price-info-text">Acepto transferencia bancaria, efectivo o financiamiento a través de su banco.</p>
              </div>
            </div>
            
            <div className="price-info-item">
              <i className="fas fa-file-signature price-info-icon"></i>
              <div className="price-info-content">
                <h3 className="price-info-title">Documentación completa</h3>
                <p className="price-info-text">Permiso de circulación, revisión técnica y seguro obligatorio vigentes.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}