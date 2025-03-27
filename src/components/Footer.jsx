// src/components/Footer.jsx
export default function Footer() {
    const year = new Date().getFullYear();
    
    return (
      <footer className="footer">
        <p>© {year} - Venta de Auto Particular</p>
        <p className="footer-notice">Las imágenes son ilustrativas del vehículo en venta</p>
      </footer>
    )
  }