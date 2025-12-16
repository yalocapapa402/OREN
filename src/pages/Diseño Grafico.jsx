// src/pages/DigitalDesign.jsx

import React, { useEffect } from 'react'; 
import Navbar from '../components/Navbar';
import MasonryGrid from '../components/MasonryGrid'; 
import PageHeroe from '../components/PageHeroe'; 

// 🛑 IMPORTACIÓN DE DATA CENTRAL
import { SEGMENTED_GALLERY_DATA } from '../data/galleryData';

// --- DATA ESPECÍFICA DE DISEÑO GRÁFICO (DigitalDesign) ---
const DD_COLOR = '#00FFC0'; 
const DD_TITLE = 'DISEÑO GRÁFICO'; 
const DD_DESCRIPTION = 'Diseñamos experiencias digitales fluidas y atractivas que convierten a visitantes en clientes leales.';

// 🛑 LÓGICA DE MAPEO PARA NAVEGACIÓN
// 1. Obtenemos las URLs de la sección correspondiente
const designImagesURLs = SEGMENTED_GALLERY_DATA['Diseño Grafico']; 

// 2. Calculamos el offset (Photography tiene 15 imágenes) para que los slugs coincidan con el mapeo global
// Photography (15) + Producción Multimedia (1) = 16. Diseño Gráfico empieza en el slug 'imagen-16'
const photographyOffset = SEGMENTED_GALLERY_DATA['Photography'].length;
const multimediaOffset = SEGMENTED_GALLERY_DATA['Produccion multimedia'].length;
const globalOffset = photographyOffset + multimediaOffset;

// 3. Formateamos para el MasonryGrid { src, slug }
const formattedImages = designImagesURLs.map((url, index) => ({
    src: url,
    slug: `imagen-${index + globalOffset}`
}));

const DigitalDesign = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#0F0E0E] min-h-screen w-full relative overflow-x-hidden flex flex-col">
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
             {/* 🛑 PASAMOS LAS IMÁGENES FORMATEADAS DESDE GALLERYDATA */}
             <MasonryGrid rawImages={formattedImages} />
        </div>
        
      </div>

      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.08] mix-blend-overlay"
           style={{ backgroundImage: "url('/noise.png')" }}>
      </div>

    </div>
  );
};

export default DigitalDesign;