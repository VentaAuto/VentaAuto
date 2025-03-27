// src/components/Footer.jsx
export default function Footer({ brand, model }) {
    const year = new Date().getFullYear();
    
    return (
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-logo" data-aos="fade-up">
              <span>{brand}</span> {model}
            </div>
            
            <p className="footer-description" data-aos="fade-up" data-aos-delay="100">
              Gracias por tu interés en mi vehículo. Si tienes alguna pregunta adicional,
              no dudes en contactarme.
            </p>
            
            <div className="footer-social" data-aos="fade-up" data-aos-delay="200">
              <a href="#" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
            
            <div className="footer-links" data-aos="fade-up" data-aos-delay="300">
              <a href="#home" className="footer-link">Inicio</a>
              <a href="#gallery" className="footer-link">Galería</a>
              <a href="#specs" className="footer-link">Especificaciones</a>
              <a href="#features" className="footer-link">Características</a>
              <a href="#price" className="footer-link">Precio</a>
              <a href="#contact" className="footer-link">Contacto</a>
            </div>
            
            <div className="footer-copyright">
              © {year} Venta de auto particular. Todos los derechos reservados.
            </div>
          </div>
        </div>
      </footer>
    );
  }