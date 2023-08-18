import React from 'react';
import { render } from '@testing-library/react';
import Footer from './footer';
import '@testing-library/jest-dom/extend-expect';

describe('Footer', () => {
  it('renderizar sin errores', () => {
    render(<Footer />);
  });

  it('iconos de redes sociales', () => {
    const { getByAltText } = render(<Footer />);
    const facebookIcon = getByAltText('Facebook');
    const instagramIcon = getByAltText('Instagram');
    const telegramIcon = getByAltText('Telegram');
    const twitterIcon = getByAltText('Twitter');

    expect(facebookIcon).toBeInTheDocument();
    expect(instagramIcon).toBeInTheDocument();
    expect(telegramIcon).toBeInTheDocument();
    expect(twitterIcon).toBeInTheDocument();
  });
});
