import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Aquí se puede realizar la lógica de búsqueda con la query 'searchQuery'
    console.log(`Realizando búsqueda para: ${searchQuery}`);
  };

  return (
    <section className='search-container'>
    <div className="search-bar">
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Buscar..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <button type="submit">Buscar</button>
      </form>
    </div>
    </section>
  );
}

export default SearchBar;
