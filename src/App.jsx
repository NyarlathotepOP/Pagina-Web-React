import React from 'react';
import './index.css';
import Header from './Componentes/Header-Menu/header-menu';
import Footer from './Componentes/Footer/footer';
import SectionContent from './Componentes/Section-Content/section-content';
import SearchFilters from './Componentes/SearchFilters/SearchFilters';
import SectionProducts from './Componentes/Section-Products/Section-Products';
import Products from './Componentes/Products/products'
export default function App() {
    return (
        <main className='container'>
            <img className='image-1'></img>
            <img className='image-2'></img>
            <Header />
            <SectionContent/>
            <SearchFilters />
            <SectionProducts />
            <Products />
            <Footer />
        </main>
    )
}