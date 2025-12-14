import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

// Importamos tus páginas
import App from './App';
import Photography from './pages/Photography';
import Branding from './pages/Branding';
import Digital from './pages/DigitalDesign';
import WebDesign from './pages/WebDesign';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* BrowserRouter es el "cerebro" que permite usar <Link> */}
    <BrowserRouter>
      <Routes>
        {/* Ruta Principal (Tu Landing Page) */}
        <Route path="/" element={<App />} />
        
        {/* Ruta de Fotografía */}
        <Route path="/fotografia" element={<Photography />} />
        <Route path="/branding" element={<Branding />} />
        <Route path="/digital" element={<Digital />} />
        <Route path="/web" element={<WebDesign />} /> 
      </Routes>
      
    </BrowserRouter>
  </React.StrictMode>,
);