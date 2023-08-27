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
    const products = [
        { name: "Zapatillas", image: ImageZapatillas },
        { name: "Camisas", image: ImageCamisas },
        { name: "Pesas", image: ImagePesas },
        { name: "Equipo", image: ImageEquipo },
        { name: "Caminadoras", image: ImageCaminadoras },
        { name: "Pantalones", image: ImagePantalones },
        { name: "Morrales", image: ImageMorrales },
        { name: "Termos", image: ImageTermos },
        { name: "Guantes", image: ImageGuantes },
        { name: "Binoculares", image: ImageBinoculares }
    ];

    return (
        <section className="info" id="servicios">
            <section className="ropa container">
                <h2>Ropa y Accesorios</h2>
                <div className="ropa-content">
                    {products.map((product, index) => (
                        <div className="ropa-1" key={index}>
                            <h3>{product.name}</h3>
                            <img src={product.image} alt={product.name} />
                        </div>
                    ))}
                </div>
            </section>
        </section>
    );
}