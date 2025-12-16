// src/pages/Photography.jsx

import React, { useEffect } from 'react'; 
import Navbar from '../components/Navbar';
import MasonryGrid from '../components/MasonryGrid'; 
import PageHeroe from '../components/PageHeroe'; 

// 🛑 IMPORTAR LA DATA CENTRAL
import { SEGMENTED_GALLERY_DATA } from '../data/galleryData';


// --- DATA ESPECÍFICA DE FOTOGRAFÍA (Se mantiene) ---
const WD_COLOR = '#B00601'; 
const WD_TITLE = 'FOTOGRAFIA';
const WD_DESCRIPTION = 'Diseñamos experiencias digitales fluidas y atractivas que convierten a visitantes en clientes leales.';


// 🛑 NUEVO CÓDIGO: OBTENER Y MAPEAR LA DATA

// 1. Obtenemos la lista de URLs (solo la foto-1.jpeg)
const photographyImagesURLs = SEGMENTED_GALLERY_DATA['Photography']; 

// 2. Mapeamos los URLs a objetos { src, slug } que MasonryGrid necesita para navegar
const rawImages = photographyImagesURLs.map((url, index) => {
    return {
        src: url,
        // El slug debe coincidir con la lógica del ProjectPage
        slug: `imagen-${index}` 
    };
});

const Photography = () => {
  
  // --- SCROLL TO TOP ---
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#0F0E0E] min-h-screen w-full relative overflow-x-hidden flex flex-col">
      <Navbar />

      <div className="w-full flex flex-col">
        
        {/* HERO SECTION */}
        <PageHeroe 
          title={WD_TITLE}
          description={WD_DESCRIPTION}
          collageBgDesktop="/images/collage-fotografia-desktop.png" 
          collageBgMobile="/images/collage-fotografia-mobile.png"   
          color={WD_COLOR} 
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
export default Photography;