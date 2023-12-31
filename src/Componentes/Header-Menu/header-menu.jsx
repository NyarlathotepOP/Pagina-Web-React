import React from "react";
import './header-menu.css';

export default function Header() {
  return (
    <header className='header'>
      <div className="menu container">
        <a href="/" className="logo">Sport Elite</a>
        <label for="menu"></label>
        <nav className="cuentas">
          <ul>
            <li><a href="/login">Inicio Sesion</a></li>
            <li><a href="/register">Crear Cuenta</a></li>
          </ul>
        </nav>
        <nav className="navbar">
          <ul>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#servicios">Servicios</a></li>
            <li><a href="#productos">Productos</a></li>
            <li><a href="https://www.google.com/maps/@6.245543,-75.559242,13z?hl=es&entry=ttu"
            rel="nofollow nooperner noreferrer"
            target="_blank">Contacto</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}