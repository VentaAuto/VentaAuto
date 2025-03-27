// src/components/ContactButtons.jsx
export default function ContactButtons({ contact }) {
    return (
      <section className="contact-section" id="contact">
        <div className="contact-container">
          <h2 className="section-title" data-aos="fade-up">Contáctame</h2>
          <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
            ¿Interesado? Ponte en contacto conmigo por cualquiera de estos medios
          </p>
          
          <div className="contact-grid">
            <div className="contact-card" data-aos="fade-up" data-aos-delay="200">
              <i className="fas fa-phone contact-icon"></i>
              <h3 className="contact-title">Llamada</h3>
              <div className="contact-info">{contact.phone}</div>
              <p className="contact-description">
                Respondo llamadas de lunes a sábado de 9:00 a 20:00 hrs.
              </p>
              <a href={`tel:${contact.phone}`} className="contact-button">
                Llamar ahora
              </a>
            </div>
            
            <div className="contact-card" data-aos="fade-up" data-aos-delay="300">
              <i className="fab fa-whatsapp contact-icon"></i>
              <h3 className="contact-title">WhatsApp</h3>
              <div className="contact-info">{contact.whatsapp}</div>
              <p className="contact-description">
                Respuesta inmediata por WhatsApp, incluso puedes solicitar más fotos.
              </p>
              <a 
                href={`https://wa.me/${contact.whatsapp.replace('+', '')}`} 
                className="contact-button"
                target="_blank" 
                rel="noopener noreferrer"
              >
                Enviar mensaje
              </a>
            </div>
            
            <div className="contact-card" data-aos="fade-up" data-aos-delay="400">
              <i className="fas fa-envelope contact-icon"></i>
              <h3 className="contact-title">Email</h3>
              <div className="contact-info">{contact.email}</div>
              <p className="contact-description">
                Para consultas detalladas, puedes escribirme un correo electrónico.
              </p>
              <a href={`mailto:${contact.email}`} className="contact-button">
                Enviar email
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }