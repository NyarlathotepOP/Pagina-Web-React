import React, { useState } from 'react';
import './SearchFilters.css';

function SearchFilters() {
  const [category, setCategory] = useState('todos');
  const [priceRange, setPriceRange] = useState('cualquier_precio');

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handlePriceRangeChange = (event) => {
    setPriceRange(event.target.value);
  };

  const handleApplyFilters = () => {
    // Aquí se pueden aplicar los filtros a la búsqueda
    console.log(`Filtro de categoría: ${category}, Rango de precio: ${priceRange}`);
  };

  return (
    <div className="search-filters">
      <h3>Filtros Avanzados</h3>
      <label>Categoría:</label>
      <select value={category} onChange={handleCategoryChange}>
        <option value="todos">Todos</option>
        <option value="ropa">Ropa</option>
        <option value="calzado">Calzado</option>
        <option value="accesorios">Accesorios</option>
      </select>
      <label>Rango de Precio:</label>
      <select value={priceRange} onChange={handlePriceRangeChange}>
        <option value="cualquier_precio">Cualquier Precio</option>
        <option value="bajo">Bajo</option>
        <option value="medio">Medio</option>
        <option value="alto">Alto</option>
      </select>
      <button onClick={handleApplyFilters}>Aplicar Filtros</button>
    </div>
  );
}

export default SearchFilters;
