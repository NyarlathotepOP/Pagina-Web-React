import React from 'react';
import './index.css';
import Header from './Componentes/Header-Menu/header-menu';
import Footer from './Componentes/Footer/footer';
import SectionContent from './Componentes/Section-Content/section-content';
import SearchBar from './Componentes/SearchBar/SearchBar'; // Se importa el componente

export default function App() {
    return (
        <main className='container'>
            <img className='image-1'></img>
            <img className='image-2'></img>
            <Header />
            <SearchBar /> {/* Se agrega el componente de búsqueda */}
            <SectionContent/>
            <Footer />
        </main>
    )
}