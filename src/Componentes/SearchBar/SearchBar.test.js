import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import SearchBar from './SearchBar';

test('Renderiza el componente de barra de búsqueda', () => {
  render(<SearchBar />);
  const searchBarElement = screen.getByPlaceholderText('Buscar...');
  expect(searchBarElement).toBeInTheDocument();
});

test('Captura la entrada del usuario', () => {
  render(<SearchBar />);
  const inputElement = screen.getByPlaceholderText('Buscar...');
  fireEvent.change(inputElement, { target: { value: 'fútbol' } });
  expect(inputElement.value).toBe('fútbol');
});

test('Realiza una búsqueda al enviar el formulario', () => {
  const mockSubmit = jest.fn();
  render(<SearchBar onSubmit={mockSubmit} />);
  const inputElement = screen.getByPlaceholderText('Buscar...');
  const buttonElement = screen.getByText('Buscar');

  fireEvent.change(inputElement, { target: { value: 'baloncesto' } });
  fireEvent.click(buttonElement);

  expect(mockSubmit).toHaveBeenCalledWith('baloncesto');
});
