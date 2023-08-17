import FacebookIcon from "../Images/bxl-facebook-square.svg";
import InstagramIcon from "../Images/bxl-instagram.svg";
import TelegramIcon from "../Images/bxl-telegram.svg";
import TwitterIcon from "../Images/bxl-twitter.svg";
import React from "react";
import './footer.css';
import Map from "../Google-Maps/google-maps";

export default function Footer() {
    return (
        <footer className='footer'>
            <div className="footer-content container">
                <div className="links">
                    <div className="link">
                        <h3>Comunidad</h3>
                        <ul>
                            <li><a href="#">Codigo de conducta</a></li>
                            <li><a href="#">Conoce al equipo</a></li>
                            <li><a href="#">Colaboradores</a></li>
                            <li><a href="#">Agradecimientos</a></li>
                        </ul>

                    </div>

                    <div className="link">
                        <h3>Proyectos</h3>
                        <ul>
                            <li><a href="#">Estado</a></li>
                            <li><a href="#">Mision</a></li>
                            <li><a href="#">Vision</a></li>
                            <li><a href="#">PQR</a></li>
                        </ul>
                    </div>

                    <div className="link">
                        <h3>Sedes</h3>
                        <ul>
                            <li><a href="#">Bogota</a></li>
                            <li><a href="#">Cali</a></li>
                            <li><a href="#">Medellin</a></li>
                            <li><a href="#">Valledupar</a></li>
                        </ul>
                    </div>

                    <div className="link">
                        <img src={FacebookIcon} alt="" />
                        <img src={InstagramIcon} alt="" />
                        <img src={TelegramIcon} alt="" />
                        <img src={TwitterIcon} alt="" />
                    </div>
                </div>

                <div className="footer-map">
                    <Map />
                </div>

            </div>

        </footer>
    );
}