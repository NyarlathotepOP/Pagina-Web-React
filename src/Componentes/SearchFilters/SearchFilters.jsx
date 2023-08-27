import React, { useState, useEffect } from 'react';
import './SearchFilters.css';
import SearchBar from "../SearchBar/SearchBar";

function SearchFilters() {
  const [category, setCategory] = useState('');
  const [priceRange, setPriceRange] = useState('');

  const [categories, setCategories] = useState([]);
  const [priceRanges, setPriceRanges] = useState([]);

  useEffect(() => {
    const fetchedCategories = ['Todo', 'Ropa', 'Calzado', 'Accesorios'];
    setCategories(fetchedCategories);

    const fetchedPriceRanges = ['Cualquier Precio', 'Bajo', 'Medio', 'Alto'];
    setPriceRanges(fetchedPriceRanges);
  }, []);

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
    <section>
      <div className="search-filters">
        <h3>Filtros Avanzados</h3>
        <div className="filter-row">
          <div className="filter-item">
            <label>Categoría:</label>
            <select value={category} onChange={handleCategoryChange}>
              {categories.map((category) => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
          <div className="filter-item">
            <label>Rango de Precio:</label>
            <select value={priceRange} onChange={handlePriceRangeChange}>
              {priceRanges.map((priceRange) => (
                <option key={priceRange} value={priceRange}>{priceRange}</option>
              ))}
            </select>
          </div>
        </div>
        <button onClick={handleApplyFilters}>Aplicar Filtros</button>
      </div>
      <div className='search'>
        <SearchBar />
      </div>
    </section>
  );
}

export default SearchFilters;
