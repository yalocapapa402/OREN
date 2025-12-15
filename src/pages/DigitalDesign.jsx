// src/pages/DigitalDesign.jsx

import React, { useEffect } from 'react'; 
import Navbar from '../components/Navbar';
import MasonryGrid from '../components/MasonryGrid'; 
import PageHeroe from '../components/PageHeroe'; 

// --- IMÁGENES DE EJEMPLO DEL GRID (Se mantienen) ---
import img1 from '../assets/proyecto-guitarra.jpg'; 
import img2 from '../assets/proyecto-cereza.jpg';
import img3 from '../assets/servicio-branding.jpg';
import img4 from '../assets/servicio-digital.jpg';

// 🛑 ELIMINAMOS LA IMPORTACIÓN DEL COLLAGE ANTERIOR (collageBg)
// import collageBg from '../assets/collage-dd.png'; // No necesario

// --- DATA ESPECÍFICA DE DISEÑO GRÁFICO (DigitalDesign) ---
const DD_COLOR = '#00FFC0'; // Verde/Cyan
const DD_TITLE = 'DISEÑO GRÁFICO'; // Cambiamos el título
const DD_DESCRIPTION = 'Diseñamos experiencias digitales fluidas y atractivas que convierten a visitantes en clientes leales.';

// Lista de imágenes para el Grid (igual que en Branding por ahora)
const rawImages = [
  img4, img2, img1, img3, img4, 
  img1, img3, img2, img4, img1, 
  img3, img2, img4, img1, img3, 
  img2, img4, img1, img3, img2, 
  img1, img3, img4, img2
];


const DigitalDesign = () => {
  
  // --- SCROLL TO TOP ---
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#0F0E0E] min-h-screen w-full relative overflow-x-hidden flex flex-col">
      <Navbar />

      <div className="w-full flex flex-col">
        
        {/* HERO SECTION - AHORA CON LAS DOS RUTAS ABSOLUTAS */}
        <PageHeroe 
          title={DD_TITLE} // Usamos el título corregido
          description={DD_DESCRIPTION}
          
          // 🛑 RUTAS ABSOLUTAS DESDE LA CARPETA PUBLIC
          collageBgDesktop="/images/collage-disenografico-desktop.png" // Usa el nombre exacto
          collageBgMobile="/images/collage-disenografico-mobile.png"   // Usa el nombre exacto
          
          color={DD_COLOR} 
        />

        {/* GRID CONTAINER - MANTENEMOS EL MARGEN NEGATIVO PARA SUBIRLO */}
        <div className="-mt-64 relative z-20"> 
             <MasonryGrid rawImages={rawImages} />
        </div>
        
      </div>

      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.08] mix-blend-overlay"
           style={{ backgroundImage: "url('/noise.png')" }}>
      </div>

    </div>
  );
};
export default DigitalDesign;