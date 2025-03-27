// src/components/Header.jsx
export default function Header({ brand, model, year }) {
    return (
      <header className="header">
        <h1>{brand} {model} {year}</h1>
        <p className="subtitle">¡Una excelente oportunidad!</p>
      </header>
    )
  }