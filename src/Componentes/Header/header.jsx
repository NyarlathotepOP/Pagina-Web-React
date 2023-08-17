import React from "react";
import './header.css';

export default function Header() {
  return (
    <header className='header'>
      <div className="menu container">
        <a href="#" className="logo">Sport Elite</a>
        <label for="menu"></label>
        <nav className="cuentas">
          <ul>
            <li><a href="inicio.html">Inicio Sesion</a></li>
            <li><a href="crear">Crear Cuenta</a></li>
          </ul>
        </nav>
        <nav className="navbar">
          <ul>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#servicios">Servicios</a></li>
            <li><a href="#productos">Productos</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </nav>
      </div>
      <div className="header-content container">
        <div className="header-txt">
          <h1><span>¡Bienvenido a la mejor tienda de artículos deportivos!</span></h1>
          <p>Explora nuestras categorías cuidadosamente seleccionadas, desde
            ropa deportiva de última moda hasta equipos especializados para deportes específicos.
            Nuestra misión es proporcionarte productos que te ayuden a rendir al máximo y disfrutar
            al máximo de tu actividad física.</p>
          <a href="#" className="btn-1">Informacion</a>
        </div>
      </div>
    </header>
  );
}