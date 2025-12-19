// src/pages/Branding.jsx

import React, { useEffect } from 'react'; 
import Navbar from '../components/Navbar';
import MasonryGrid from '../components/MasonryGrid'; 
import PageHeroe from '../components/PageHeroe'; 

// 🛑 IMPORTAMOS LA DATA CENTRALIZADA Y EL MAPA DE SLUGS
import { SEGMENTED_GALLERY_DATA, SLUG_TO_IMAGE_MAP } from '../data/galleryData';

// --- DATA ESPECÍFICA DE BRANDING ---
const BRANDING_COLOR = '#FFFFFF'; 
const BRANDING_TITLE = 'DISEÑO GRÁFICO'; 
const BRANDING_DESCRIPTION = 'Creamos la identidad visual y estratégica que tu marca necesita para destacar y conectar con su audiencia.';

const Branding = () => {
  
  // 🛑 LÓGICA DE MAPEO DINÁMICA
  // 1. Obtenemos las imágenes de la categoría "Diseño Grafico"
  const brandingImagesURLs = SEGMENTED_GALLERY_DATA['Diseño Grafico'] || [];

  // 2. Mapeamos buscando el SLUG REAL (ej: "gata-rompe-hogares" o "noro")
  const formattedImages = brandingImagesURLs.map((url) => {
    // Buscamos el slug exacto asociado a esta URL en el diccionario global
    const realSlug = Object.keys(SLUG_TO_IMAGE_MAP).find(
      (slug) => SLUG_TO_IMAGE_MAP[slug] === url
    );

    return {
      src: url,
      slug: realSlug || "imagen-branding-pendiente"
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
          title={BRANDING_TITLE}
          description={BRANDING_DESCRIPTION}
          collageBgDesktop="/images/collage-branding-desktop.png" 
          collageBgMobile="/images/collage-branding-mobile.png"   
          color={BRANDING_COLOR} 
        />

        {/* GRID CONTAINER */}
        <div className="-mt-64 relative z-20"> 
             {/* PASAMOS LAS IMÁGENES SINCRONIZADAS DINÁMICAMENTE */}
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

export default Branding;