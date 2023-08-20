import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';

import SearchFilters from './SearchFilters';

test('Renderiza el componente de filtros de búsqueda', () => {
  render(<SearchFilters />);
});

test('Aplica filtros al hacer clic en el botón', () => {
  render(<SearchFilters />);
  const applyFiltersButton = screen.getByText('Aplicar Filtros');
  fireEvent.click(applyFiltersButton);

});
