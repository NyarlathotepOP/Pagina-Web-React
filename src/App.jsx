import React from 'react';
import './index.css';
import Header from './Componentes/Header-Menu/header-menu';
import Footer from './Componentes/Footer/footer';
import SectionContent from './Componentes/Section-Content/section-content';

export default function App() {
    return (
        <main className='container'>
            <img className='image-1'></img>
            <img className='image-2'></img>
            <Header />
            <SectionContent/>
            <Footer />
        </main>
    )
}