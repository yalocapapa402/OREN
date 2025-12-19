// src/pages/WebDesign.jsx

import React, { useEffect } from 'react'; 
import Navbar from '../components/Navbar';
import MasonryGrid from '../components/MasonryGrid'; 
import PageHeroe from '../components/PageHeroe'; 

// 🛑 IMPORTACIÓN DE DATA CENTRAL Y MAPA DE SLUGS
import { SEGMENTED_GALLERY_DATA, SLUG_TO_IMAGE_MAP } from '../data/galleryData';

// --- DATA ESPECÍFICA DE DISEÑO WEB ---
const WD_COLOR = '#00FFC0'; 
const WD_TITLE = 'DISEÑO WEB';
const WD_DESCRIPTION = 'Diseñamos experiencias digitales fluidas y atractivas que convierten a visitantes en clientes leales.';

const WebDesign = () => {
  
  // 🛑 LÓGICA DE MAPEO DINÁMICA (Sincronizada con Bloomly)
  // 1. Obtenemos las URLs de la sección WebDesign
  const webImagesURLs = SEGMENTED_GALLERY_DATA['WebDesign'] || []; 

  // 2. Mapeamos buscando el SLUG REAL en el diccionario global
  const formattedImages = webImagesURLs.map((url) => {
    // Buscamos el slug (ej: "bloomly") asociado a esta URL
    const realSlug = Object.keys(SLUG_TO_IMAGE_MAP).find(
      (slug) => SLUG_TO_IMAGE_MAP[slug] === url
    );

    return {
      src: url,
      slug: realSlug || "imagen-web-pendiente"
    };
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#0F0E0E] min-h-screen w-full relative overflow-x-hidden flex flex-col font-['Inter']">
      <Navbar />

      <div className="w-full flex flex-col">
        
        {/* HERO SECTION */}
        <PageHeroe 
          title={WD_TITLE}
          description={WD_DESCRIPTION}
          collageBgDesktop="/images/collage-disenoweb-desktop.png" 
          collageBgMobile="/images/collage-disenoweb-mobile.png"
          color={WD_COLOR} 
        />

        {/* GRID CONTAINER */}
        <div className="-mt-64 relative z-20"> 
             <MasonryGrid rawImages={formattedImages} />
        </div>
        
      </div>

      {/* Efecto de Grano */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] mix-blend-overlay"
           style={{ backgroundImage: "url('/noise.png')" }}>
      </div>

    </div>
  );
};

export default WebDesign;