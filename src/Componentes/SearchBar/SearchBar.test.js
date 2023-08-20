import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';

import SearchBar from './SearchBar';

test('Realiza una búsqueda al hacer clic en el botón', () => {
  render(<SearchBar />);
  const searchInput = screen.getByPlaceholderText('Buscar...');
  const searchButton = screen.getByText('Buscar');

  fireEvent.change(searchInput, { target: { value: 'mi búsqueda' } });
  fireEvent.click(searchButton);
});
