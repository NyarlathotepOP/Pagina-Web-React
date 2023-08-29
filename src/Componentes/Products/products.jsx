import React, { useState } from "react";
import './products.css'
import Producto1 from '../../Images/disco-olimpico.jpg'
import Producto2 from '../../Images/MANCUERNAS20KG.jpg'
import Producto3 from '../../Images/kettlebell.jpg'
import Producto4 from '../../Images/Zapatilla.png'
import Producto5 from '../../Images/Camiseta azul.jpg'
import Producto6 from '../../Images/BalonFutbol.jpg'
import Producto7 from '../../Images/GuantesBoxeo.jpg'
import Producto8 from '../../Images/RaquetaTenis.jpg'
import Producto9 from '../../Images/camiseta-trail-lurbel-samba-pixel .jpg'
import Producto10 from '../../Images/lurbel-camiseta-sm-samba-singlet .jpg'
import Producto11 from '../../Images/dare2b-botella-insulated-bottle .jpg'
import Producto12 from '../../Images/cebe-cinetik-20-matt-grafite-lime-cbs091.jpg'
import Producto13 from '../../Images/ledlenser-frontal-ne06r .jpg'
import Producto14 from '../../Images/salomon-adv-skin-5-mujer .jpg'
import Producto15 from '../../Images/Balon Nike.jpg'
import Producto16 from '../../Images/Balon-Basquetbol.jpg'

export default function Products() {
    const [productShow, setProductsShow] = useState(4);
    const products = [
        {
            image: Producto1,
            name: "Discos Olimpicos",
            brand: "Sport Elite",
            description: "Perfectos para el gimnasio",
            price: "725.000",
        },
        {
            image: Producto2,
            name: "Mancuernas De 20 KG",
            brand: "Sport Elite",
            description: "Construcción duradera y de alta calidad para un uso prolongado.",
            price: "100.000",
        },
        {
            image: Producto3,
            name: "Pesa Rusa",
            brand: "Sport Elite",
            description: "Alta durabilidad",
            price: "45.000",
        },
        {
            image: Producto4,
            name: "Zapatilla",
            brand: "Sport Elite",
            description: "Son calzado diseñado para actividades físicas. Hechas con materiales duraderos y transpirables.",
            price: "125.000",
        },
        {
            image: Producto5,
            name: "Camiseta",
            brand: "Sport Elite",
            description: "Diseñada para actividades físicas y deportivas, hecha de materiales ligeros y transpirables.",
            price: "95.000",
        },
        {
            image: Producto6,
            name: "Balón de fútbol",
            brand: "Sport Elite",
            description: "Este balón garantiza un control preciso y una durabilidad excepcional.",
            price: "145.000",
        },
        {
            image: Producto7,
            name: "Guantes para boxeo",
            brand: "Sport Elite",
            description: "Fabricados con capas de acolchado avanzado y materiales de primera calidad.",
            price: "325.000",
        },
        {
            image: Producto8,
            name: "Raqueta para tenis",
            brand: "Sport Elite",
            description: " Construida con materiales de vanguardia como grafito y compuestos de alta tecnología.",
            price: "395.000",
        },
        {
            image: Producto9,
            name: "Camiseta De Trai",
            brand: "Sport Elite",
            description: " Camiseta de trail con tejido ergonómico ajustable perfectamente a tu cuerpo. Elaborado sin costura en su perímetro con unión en las mangas planas evitand.",
            price: "195.000",
        },
        {
            image: Producto10,
            name: "lurbel Camiseta singlet",
            brand: "Sport Elite",
            description: "Camiseta ergonomia masculina de tirantes Samba de Lurbel.",
            price: "155.000",
        },
        {
            image: Producto11,
            name: "Botella Insulated Bottle",
            brand: "Sport Elite",
            description: "Botella de 650 ml, con boquilla, para llevar líquidos sobre la marcha. ",
            price: "55.000",
        },
        {
            image: Producto12,
            name: "Cinetik",
            brand: "Sport Elite",
            description: "Las CINETIK 2.0 de Cébé son las gafas de sol para hacer deporte y aventuras, que combinan un diseño depurado y colores llamativo.",
            price: "125.000",
        },
        {
            image: Producto13,
            name: "Ledlenser Frontal",
            brand: "Sport Elite",
            description: "Frontal Ledlenser con 250 lumens.",
            price: "215.000",
        }, 
        {
            image: Producto14,
            name: "Chaleco De Trail",
            brand: "Sport Elite",
            description: "Chaleco de trail running diseñado para mujer con bidones incluidos",
            price: "305.000",
        },
        {
            image: Producto15,
            name: "Balon Nike",
            brand: "Sport Elite",
            description: "BALÓN #NIKE PRESTIGE-FCB. Durabilidad y orgullo por tu equipo",
            price: "405.000",
        },
        {
            image: Producto16,
            name: "Balón Basquetbol Baloncesto Molten Original Pvc Gh7x",
            brand: "Sport Elite",
            description: "Balón basquetbol basketball baloncesto molten bgh7x original, cuero sintetico pvc 12 paneles.",
            price: "365.000",
        }
    ];

    return (
        <section className="products container">
            <h2>Productos</h2>
            <div className="box-container">
                {products.slice(0, productShow).map((product) => (
                    <div className="box">
                        <img src={product.image} alt={product.name} />
                        <div className="product-txt">
                            <h3>{product.name}</h3>
                            <p>{product.brand}</p>
                            {product.description && <p>{product.description}</p>}
                            <p className="precio">{product.price}</p>
                            <button className="agregar-carrito btn-3" onClick={(e) => e.preventDefault()}>Agregar al carrito</button>
                        </div>
                    </div>
                ))}
            </div>

            {productShow < products.length && (

                <div className="btn-2" id="load-more" onClick={() => setProductsShow(productShow + 4)}>
                    Cargar Más
                </div>)}
        </section>
    );
}