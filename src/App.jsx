import React from 'react';
import './index.css';
import Header from './Componentes/Header/header';
import Footer from './Componentes/Footer/footer';

export default function App() {
    return (
        <main className='container'>
            <img className='image-1'></img>
            <img className='image-2'></img>
            <Header />
            <Footer />
        </main>
    )
}