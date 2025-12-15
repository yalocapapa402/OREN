// src/pages/Branding.jsx

import React, { useEffect } from 'react'; 
import Navbar from '../components/Navbar';
import MasonryGrid from '../components/MasonryGrid'; 
import PageHeroe from '../components/PageHeroe'; 

// --- IMÁGENES DEL GRID (Se mantienen) ---
import img1 from '../assets/proyecto-guitarra.jpg'; 
import img2 from '../assets/proyecto-cereza.jpg';
import img3 from '../assets/servicio-branding.jpg';
import img4 from '../assets/servicio-digital.jpg';

// --- DATA ESPECÍFICA DE BRANDING ---
const BRANDING_COLOR = '#FFFFFF'; // Color de ejemplo
const BRANDING_TITLE = 'BRANDING';
const BRANDING_DESCRIPTION = 'Creamos la identidad visual y estratégica que tu marca necesita para destacar y conectar con su audiencia.';

// Lista de imágenes para el Grid 
const rawImages = [
  img4, img2, img1, img3, img4, 
  img1, img3, img2, img4, img1, 
  img3, img2, img4, img1, img3, 
  img2, img4, img1, img3, img2, 
  img1, img3, img4, img2
];


const Branding = () => {
  
  // --- SCROLL TO TOP ---
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#0F0E0E] min-h-screen w-full relative overflow-x-hidden flex flex-col">
      <Navbar />

      <div className="w-full flex flex-col">
        
        {/* HERO SECTION - USANDO RUTAS ABSOLUTAS */}
        <PageHeroe 
          title={BRANDING_TITLE}
          description={BRANDING_DESCRIPTION}
          
          // 🛑 RUTAS ABSOLUTAS DESDE LA CARPETA PUBLIC
          collageBgDesktop="/images/collage-branding-desktop.png" 
          collageBgMobile="/images/collage-branding-mobile.png"   
          color={BRANDING_COLOR} 
        />

        {/* GRID CONTAINER */}
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
export default Branding;