import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

// Importamos tus páginas
import App from './App';
import Photography from './pages/Photography';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* BrowserRouter es el "cerebro" que permite usar <Link> */}
    <BrowserRouter>
      <Routes>
        {/* Ruta Principal (Tu Landing Page) */}
        <Route path="/" element={<App />} />
        
        {/* Ruta de Fotografía */}
        <Route path="/fotografia" element={<Photography />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);