// src/components/PriceSection.jsx
export default function PriceSection({ price, currency }) {
    // Formatear el precio con separadores de miles
    const formattedPrice = new Intl.NumberFormat('es-ES').format(price);
    
    return (
      <section className="price-section">
        <h2>Precio</h2>
        <div className="price-container">
          <span className="price-currency">{currency}</span>
          <span className="price-amount">{formattedPrice}</span>
        </div>
        <p className="price-note">Precio negociable</p>
      </section>
    )
  }