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

// 🛑 IMPORTANTE: Importar la nueva página de detalles de proyecto
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

        {/* 🛑 NUEVA RUTA DINÁMICA: 
            Cualquier clic en el MasonryGrid navegará aquí. 
            El ":projectSlug" es la variable que recibirá "imagen-0", "imagen-1", etc. */}
        <Route path="/proyectos/:projectSlug" element={<ProjectPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);