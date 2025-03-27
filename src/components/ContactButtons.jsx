// src/components/ContactButtons.jsx
export default function ContactButtons({ contact }) {
    return (
      <section className="contact-section">
        <h2>¿Interesado? Contáctame</h2>
        <div className="buttons-container">
          <a href={`tel:${contact.phone}`} className="contact-button phone-button">
            Llamar
          </a>
          <a href={`https://wa.me/${contact.whatsapp.replace('+', '')}`} className="contact-button whatsapp-button" target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
          <a href={`mailto:${contact.email}`} className="contact-button email-button">
            Email
          </a>
        </div>
      </section>
    )
  }