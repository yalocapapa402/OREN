// src/pages/DigitalDesign.jsx

import React, { useEffect } from 'react'; 
import Navbar from '../components/Navbar';
import MasonryGrid from '../components/MasonryGrid'; 
import PageHeroe from '../components/PageHeroe'; 

// 🛑 IMPORTACIÓN DE DATA CENTRAL Y MAPA DE SLUGS
import { SEGMENTED_GALLERY_DATA, SLUG_TO_IMAGE_MAP } from '../data/galleryData';

// --- DATA ESPECÍFICA DE DISEÑO GRÁFICO ---
const DD_COLOR = '#00FFC0'; 
const DD_TITLE = 'DISEÑO GRÁFICO'; 
const DD_DESCRIPTION = 'Transformamos conceptos abstractos en narrativas visuales potentes que definen la identidad de marca.';

const DigitalDesign = () => {
  
  // 🛑 LÓGICA DE MAPEO DINÁMICA
  // 1. Obtenemos las URLs de Diseño Gráfico
  const designImagesURLs = SEGMENTED_GALLERY_DATA['Diseño Grafico']; 

  // 2. Mapeamos buscando el SLUG REAL (ej: "gata-rompe-hogares" o "noro")
  const formattedImages = designImagesURLs.map((url) => {
    const realSlug = Object.keys(SLUG_TO_IMAGE_MAP).find(
      (slug) => SLUG_TO_IMAGE_MAP[slug] === url
    );

    return {
      src: url,
      slug: realSlug || "imagen-pendiente" // Asigna el slug real del diccionario
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
          title={DD_TITLE} 
          description={DD_DESCRIPTION}
          collageBgDesktop="/images/collage-disenografico-desktop.png" 
          collageBgMobile="/images/collage-disenografico-mobile.png" 
          color={DD_COLOR} 
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

export default DigitalDesign;