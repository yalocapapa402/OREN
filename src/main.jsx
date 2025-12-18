import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

// Importamos tus páginas
import App from './App';
import Photography from './pages/Photography';
import Branding from './pages/Produccion multimedia';
import Digital from './pages/Diseño Grafico';
import WebDesign from './pages/WebDesign';
import PortafolioCompleto from './pages/PortafolioCompleto';
import ProjectPage from './pages/ProjectPage';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Ruta Principal */}
        <Route path="/" element={<App />} />
        
        {/* Rutas de Servicios */}
        <Route path="/fotografia" element={<Photography />} />
        <Route path="/Produccion multimedia" element={<Branding />} />
        <Route path="/Diseño Grafico" element={<Digital />} />
        <Route path="/web" element={<WebDesign />} /> 
        <Route path="/portafolio" element={<PortafolioCompleto />} />

        {/* RUTA DINÁMICA UNIFICADA:
          Cambiamos "/proyectos/" por "/project/" para que coincida 
          con la navegación de Projects.js y el mapeo de Mercedes.
        */}
        <Route path="/project/:projectSlug" element={<ProjectPage />} />
        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);