import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Products from './products';
import '@testing-library/jest-dom/extend-expect';

describe('Products', () => {
  it('renderizar correctamente y mostrar los productos iniciales', () => {
    render(<Products />);
    
    const titleElement = screen.getByText('Productos');
    expect(titleElement).toBeInTheDocument();

    // productos iniciales
    const initialProducts = [
      { name: 'Discos Olimpicos' },
      { name: 'Mancuernas De 20 KG' },
      { name: 'Pesa Rusa' },
      { name: 'Zapatilla' },
    ];

    initialProducts.forEach(product => {
      const productTitle = screen.getByText(product.name);
      expect(productTitle).toBeInTheDocument();
    });
  });

  it('debería cargar más productos al hacer clic en "Cargar Más"', () => {
    render(<Products />);
    

    const loadMoreButton = screen.getByText('Cargar Más');
    fireEvent.click(loadMoreButton);

    // cargan más productos
    const additionalProducts = [
      { name: 'Camiseta' },
      { name: 'Balón de fútbol' },
      { name: 'Guantes para boxeo' },
      { name: 'Raqueta para tenis' },
    ];

    additionalProducts.forEach(product => {
      const productTitle = screen.getByText(product.name);
      expect(productTitle).toBeInTheDocument();
    });
  });
});
