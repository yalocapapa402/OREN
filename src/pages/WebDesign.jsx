import React, { useEffect } from 'react'; 
import Navbar from '../components/Navbar';
import MasonryGrid from '../components/MasonryGrid'; 
import PageHeroe from '../components/PageHeroe'; 

// 🛑 IMPORTACIÓN DE DATA CENTRAL
import { SEGMENTED_GALLERY_DATA } from '../data/galleryData';

// --- DATA ESPECÍFICA DE DISEÑO WEB ---
const WD_COLOR = '#00FFC0'; 
const WD_TITLE = 'DISEÑO WEB';
const WD_DESCRIPTION = 'Diseñamos experiencias digitales fluidas y atractivas que convierten a visitantes en clientes leales.';

// 🛑 LÓGICA DE MAPEO PARA NAVEGACIÓN GLOBAL
// 1. Obtenemos las URLs de la sección WebDesign
const webImagesURLs = SEGMENTED_GALLERY_DATA['WebDesign'] || []; 

// 2. Calculamos el offset global:
// Sumamos las imágenes de todas las categorías anteriores para obtener el índice correcto
const photographyCount = SEGMENTED_GALLERY_DATA['Photography']?.length || 0;
const multimediaCount = SEGMENTED_GALLERY_DATA['Produccion multimedia']?.length || 0;
const designCount = SEGMENTED_GALLERY_DATA['Diseño Grafico']?.length || 0;

const globalOffset = photographyCount + multimediaCount + designCount;

// 3. Formateamos para el MasonryGrid { src, slug }
const formattedImages = webImagesURLs.map((url, index) => ({
    src: url,
    slug: `imagen-${index + globalOffset}`
}));

const WebDesign = () => {
  
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
          collageBgDesktop="/images/collage-disenoweb-desktop.png" 
          collageBgMobile="/images/collage-disenoweb-mobile.png"
          color={WD_COLOR} 
        />

        {/* GRID CONTAINER */}
        <div className="-mt-64 relative z-20"> 
             {/* 🛑 PASAMOS LAS IMÁGENES SINCRONIZADAS */}
             <MasonryGrid rawImages={formattedImages} />
        </div>
        
      </div>

      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.08] mix-blend-overlay"
           style={{ backgroundImage: "url('/noise.png')" }}>
      </div>

    </div>
  );
};

export default WebDesign;