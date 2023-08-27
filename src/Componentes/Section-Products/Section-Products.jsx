import React from "react";
import './Section-Products.css';
import ImageZapatillas from '../../Images/zapatilla.jpg'
import ImagePesas from '../../Images/pesas.jpg'
import ImageCamisas from '../../Images/camisa.jpg'
import ImageEquipo from '../../Images/pelota-fut.jpg'
import ImageCaminadoras from '../../Images/caminadora.jpg'
import ImagePantalones  from '../../Images/pantalones.jpg'
import ImageMorrales from '../../Images/morrales.jpg'
import ImageTermos from '../../Images/termo.jpg'
import ImageGuantes from '../../Images/guantes.jpg'
import ImageBinoculares from '../../Images/binoculares.jpg'

export default function SectionProducts() {
    return (
        <section className="info" id="servicios">
            <section className="ropa container">
                <h2>Ropa y Accesorios</h2>
                <div className="ropa-content">
                    <div className="ropa-1">
                        <h3>Zapatillas</h3>
                        <img src={ImageZapatillas} alt="Zapatillas" />
                    </div>
                    <div className="ropa-1">
                        <h3>Camisas</h3>
                        <img src={ImageCamisas} alt="Camisas" />
                    </div>
                    <div className="ropa-1">
                        <h3>Pesas</h3>
                        <img src={ImagePesas} alt="Pesas" />
                    </div>
                    <div className="ropa-1">
                        <h3>Equipo</h3>
                        <img src={ImageEquipo} alt="Equipo" />
                    </div>
                    <div className="ropa-1">
                        <h3>Caminadoras</h3>
                        <img src={ImageCaminadoras} alt="Caminadoras" />
                    </div>
                    <div className="ropa-1">
                        <h3>Pantalones</h3>
                        <img src={ImagePantalones} alt="Pantalones" />
                    </div>
                    <div className="ropa-1">
                        <h3>Morrales</h3>
                        <img src={ImageMorrales} alt="Morrales" />
                    </div>
                    <div className="ropa-1">
                        <h3>Termos</h3>
                        <img src={ImageTermos} alt="Termos" />
                    </div>
                    <div className="ropa-1">
                        <h3>Guantes</h3>
                        <img src={ImageGuantes} alt="Guantes" />
                    </div>
                    <div className="ropa-1">
                        <h3>Binoculares</h3>
                        <img src={ImageBinoculares} alt="Binoculares" />
                    </div>
                </div>
            </section>
        </section >
    );
}