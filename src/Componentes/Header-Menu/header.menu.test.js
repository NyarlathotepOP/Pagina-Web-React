import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './header-menu';
import '@testing-library/jest-dom/extend-expect';

describe('Header', () => {
  it('renderizar el logo correctamente', () => {
    render(<Header />);
    const logoElement = screen.getByText('Sport Elite');
    expect(logoElement).toBeInTheDocument();
  });
});