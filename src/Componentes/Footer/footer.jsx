import FacebookIcon from "../../Images/bxl-facebook-square.svg";
import InstagramIcon from "../../Images/bxl-instagram.svg";
import TelegramIcon from "../../Images/bxl-telegram.svg";
import TwitterIcon from "../../Images/bxl-twitter.svg";
import React from "react";
import './footer.css';
import Map from "../Google-Maps/google-maps";

const footerSections = [
  {
    title: 'Comunidad',
    links: [
      { label: 'Codigo de conducta', href: '#' },
      { label: 'Conoce al equipo', href: '#' },
      { label: 'Colaboradores', href: '#' },
      { label: 'Agradecimientos', href: '#' }
    ]
  },
  {
    title: 'Proyectos',
    links: [
      { label: 'Estado', href: '#' },
      { label: 'Mision', href: '#' },
      { label: 'Vision', href: '#' },
      { label: 'PQR', href: '#' }
    ]
  },
  {
    title: 'Sedes',
    links: [
      { label: 'Bogota', href: '#' },
      { label: 'Cali', href: '#' },
      { label: 'Medellin', href: '#' },
      { label: 'Valledupar', href: '#' }
    ]
  }
];


export default function Footer() {
  return (
    <footer className='footer'>
      <div className="footer-content container">
        <div className="links">
          {footerSections.map((section, index) => (
            <div className="link" key={index}>
              <h3>{section.title}</h3>
              <ul>
                {section.links.map((link, index) => (
                  <li key={index}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="link">
          <a 
          href="https://www.facebook.com/SamsungUS"
          rel="nofollow noopener noreferrer"
          target="_blank"
          >
            <img src={FacebookIcon} alt="Facebook" />
            </a>
            <img src={InstagramIcon} alt="Instagram" />
            <img src={TelegramIcon} alt="Telegram" />
            <img src={TwitterIcon} alt="Twitter" />
          </div>
        </div>
        <div className="footer-map">
          <Map />
        </div>
      </div>
    </footer>
  );
}