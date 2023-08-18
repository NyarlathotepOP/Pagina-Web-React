import React from 'react';
import { render } from '@testing-library/react';
import SectionContent from './section-content';
import '@testing-library/jest-dom/extend-expect';

describe('SectionContent', () => {
  it('renderizar sin errores', () => {
    render(<SectionContent />);
  });

  it('mostrar el mensaje de bienvenida', () => {
    const { getByText } = render(<SectionContent />);
    expect(getByText('¡Bienvenido a la mejor tienda de artículos deportivos!')).toBeInTheDocument();
  });

  it('mostrar el texto de descripción', () => {
    const { getByText } = render(<SectionContent />);
    expect(getByText(/Explora nuestras categorías cuidadosamente seleccionadas,/)).toBeInTheDocument();
  });

  it('mostrar el botón de información', () => {
    const { getByText } = render(<SectionContent />);
    expect(getByText('Informacion')).toBeInTheDocument();
  });

  it('mostrar la imagen', () => {
    const { getByAltText } = render(<SectionContent />);
    const image = getByAltText('Logo');
    expect(image).toBeInTheDocument();
    expect(image.getAttribute('src')).toBe('head-logo.png');
  });
});
