import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import SearchFilters from './SearchFilters';

test('Renderiza el componente de filtros de búsqueda', () => {
  render(<SearchFilters />);
  const filtersElement = screen.getByText('Filtros Avanzados');
  expect(filtersElement).toBeInTheDocument();
});

test('Selecciona una categoría y aplica filtros', () => {
  render(<SearchFilters />);
  const categorySelect = screen.getByLabelText('Categoría:');
  const applyFiltersButton = screen.getByText('Aplicar Filtros');

  fireEvent.change(categorySelect, { target: { value: 'ropa' } });
  fireEvent.click(applyFiltersButton);


});
