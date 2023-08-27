import React from 'react';
import { render, screen } from '@testing-library/react';
import SectionProducts from './Section-Products';
import '@testing-library/jest-dom/extend-expect';

describe('SectionProducts', () => {
  it('renderizar correctamente', () => {
    render(<SectionProducts />);
    
    const titleElement = screen.getByText('Ropa y Accesorios');
    expect(titleElement).toBeInTheDocument();

    const products = [
      { title: 'Zapatillas', altText: 'Zapatillas' },
      { title: 'Camisas', altText: 'Camisas' },
      { title: 'Pesas', altText: 'Pesas' },
      { title: 'Equipo', altText: 'Equipo' },
      { title: 'Caminadoras', altText: 'Caminadoras' },
      { title: 'Pantalones', altText: 'Pantalones' },
      { title: 'Morrales', altText: 'Morrales' },
      { title: 'Termos', altText: 'Termos' },
      { title: 'Guantes', altText: 'Guantes' },
      { title: 'Binoculares', altText: 'Binoculares' },
    ];

    products.forEach(product => {
      const productTitle = screen.getByText(product.title);
      const productImage = screen.getByAltText(product.altText);

      expect(productTitle).toBeInTheDocument();
      expect(productImage).toBeInTheDocument();
    });
  });
});
