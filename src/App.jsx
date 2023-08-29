import React from 'react';
import './index.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Componentes/Home/home';
import Login from './Componentes/Login/login';
import Register from './Componentes/Register/register';
export default function App() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
        </Routes>
    )
}