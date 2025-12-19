// src/pages/Photography.jsx

import React, { useEffect } from 'react'; 
import Navbar from '../components/Navbar';
import MasonryGrid from '../components/MasonryGrid'; 
import PageHeroe from '../components/PageHeroe'; 

// 🛑 IMPORTAMOS TAMBIÉN EL MAPA DE SLUGS
import { SEGMENTED_GALLERY_DATA, SLUG_TO_IMAGE_MAP } from '../data/galleryData';

const WD_COLOR = '#B00601'; 
const WD_TITLE = 'FOTOGRAFIA';
const WD_DESCRIPTION = 'Capturamos la esencia de cada momento a través de una lente editorial y cinematográfica.';

const Photography = () => {
  
  // 🛑 LÓGICA CORREGIDA DENTRO DEL COMPONENTE
  // Obtenemos la lista de URLs de la categoría Photography
  const photographyImagesURLs = SEGMENTED_GALLERY_DATA['Photography']; 

  // Mapeamos buscando el SLUG REAL en el diccionario global
  const rawImages = photographyImagesURLs.map((url) => {
    // Buscamos qué slug (ej: "mercedes") tiene asignada esta URL exacta
    const realSlug = Object.keys(SLUG_TO_IMAGE_MAP).find(
      (slug) => SLUG_TO_IMAGE_MAP[slug] === url
    );

    return {
      src: url,
      slug: realSlug || "imagen-desconocida" // Usa el slug real o uno por defecto
    };
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#0F0E0E] min-h-screen w-full relative overflow-x-hidden flex flex-col font-['Inter']">
      <Navbar />

      <div className="w-full flex flex-col">
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

      {/* Efecto de Grano */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] mix-blend-overlay"
           style={{ backgroundImage: "url('/noise.png')" }}>
      </div>
    </div>
  );
};

export default Photography;