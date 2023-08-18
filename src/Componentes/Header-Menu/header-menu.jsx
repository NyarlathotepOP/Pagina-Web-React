import React from "react";
import './header-menu.css';

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
    </header>
  );
}