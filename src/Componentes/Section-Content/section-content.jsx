import React from "react";
import './section-content.css';
import ImageSportelite from '../../Images/head-logo.png'

export default function SectionContent() {
    return (
      <section className='section1'>
        <div className="section1-content container">
          <div className="section1-txt">
            <h1><span>¡Bienvenido a la mejor tienda de artículos deportivos!</span></h1>
            <p>Explora nuestras categorías cuidadosamente seleccionadas, desde
              ropa deportiva de última moda hasta equipos especializados para deportes específicos.
              Nuestra misión es proporcionarte productos que te ayuden a rendir al máximo y disfrutar
              al máximo de tu actividad física.</p>
            <a href="#" className="btn-1">Informacion</a>
          </div>
          <div className="section1-img">
            <img src={ImageSportelite} alt="Logo" />
          </div>
        </div>
      </section>
    );
  }