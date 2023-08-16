import React from 'react';
import './index.css';
import Header from './Componentes/Header/header';
import Map from './Componentes/Google-Maps/google-maps'

function App() {
    return (
        <div>
            <img className='image-1'></img>
            <img className='image-2'></img>
            <Header />
            <Map />
        </div>

    )
}

export default App;