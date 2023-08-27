import React, { useState } from "react";
import './products.css'
import Producto1 from '../../Images/disco-olimpico.jpg'
import Producto2 from '../../Images/MANCUERNAS20KG.jpg'
import Producto3 from '../../Images/kettlebell.jpg'
import Producto4 from '../../Images/Zapatilla.png'
import Producto5 from '../../Images/Camiseta azul.jpg'

export default function Products() {
    const [productShow, setProductsShow] = useState(4);
    const products = [
        {
            image: Producto1,
            name: "Discos Olimpicos",
            brand: "Sport Elite",
            description: "Perfectas para el deporte",
            price: "725.000",
            id: 1
        },
        {
            image: Producto2,
            name: "Mancuernas De 20 KG",
            brand: "Sport Elite",
            description: "Construcción duradera y de alta calidad para un uso prolongado.",
            price: "100.000",
            id: 2
        },
        {
            image: Producto3,
            name: "Pesa Rusa",
            brand: "Sport Elite",
            description: "Alta durabilidad",
            price: "45.000",
            id: 3
        },
        {
            image: Producto4,
            name: "Zapatilla",
            brand: "Sport Elite",
            description: "Son calzado diseñado para actividades físicas. Hechas con materiales duraderos y transpirables.",
            price: "125.000",
            id: 4
        },
        {
            image: Producto5,
            name: "Camiseta",
            brand: "Sport Elite",
            description: "Diseñada para actividades físicas y deportivas, hecha de materiales ligeros y transpirables.",
            price: "95.000",
            id: 5
        }
    ];

    return (
        <section className="products container">
            <h2>Productos</h2>
            <div className="box-container" id="lista-1">
                {products.slice(0, productShow).map((product) => (
                    <div className="box">
                        <img src={product.image} alt={product.name} />
                        <div className="product-txt">
                            <h3>{product.name}</h3>
                            <p>{product.brand}</p>
                            {product.description && <p>{product.description}</p>}
                            <p className="precio">{product.price}</p>
                            <button className="agregar-carrito btn-3" data-id={product.id} onClick={(e) => e.preventDefault()}>Agregar al carrito</button>
                        </div>
                    </div>
                ))}
            </div>

            {productShow < products.length && (

                <div className="btn-2" id="load-more" onClick={() => setProductsShow(productShow + 3)}>
                    Cargar Más
                </div>)}
        </section>
    );
}