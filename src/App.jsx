
// src/App.jsx
import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import CarDetails from './components/CarDetails'
import PriceSection from './components/PriceSection'
import ContactButtons from './components/ContactButtons'
import Footer from './components/Footer'
function App() {
  // Datos del auto (puedes modificarlos según las características de tu vehículo)
  const carData = {
    brand: 'Toyota',
    model: 'Corolla',
    year: 2020,
    color: 'Plata',
    mileage: 45000,
    transmission: 'Automática',
    fuel: 'Gasolina',
    features: [
      'Aire acondicionado',
      'Ventanas eléctricas',
      'Cierre centralizado',
      'Dirección asistida',
      'Frenos ABS',
      'Airbags',
      'Sistema de sonido premium'
    ],
    images: [
      '/img/car-front.jpg',
      '/img/car-side.jpg',
      '/img/car-interior.jpg'
    ],
    price: 15000,
    currency: 'USD',
    contact: {
      phone: '+123456789',
      whatsapp: '+123456789',
      email: 'tuemail@ejemplo.com'
    }
  }

  return (
    <div className="app-container">
      <Header brand={carData.brand} model={carData.model} year={carData.year} />
      <main>
        <CarDetails carData={carData} />
        <PriceSection price={carData.price} currency={carData.currency} />
        <ContactButtons contact={carData.contact} />
      </main>
      <Footer />
    </div>
  )
}

export default App