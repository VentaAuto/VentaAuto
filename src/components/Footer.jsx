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
            <div className="footer-copyright">
              © {year} Venta de auto particular. Todos los derechos reservados.
            </div>
          </div>
        </div>
      </footer>
    );
  }