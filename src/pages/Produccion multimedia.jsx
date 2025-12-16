import React, { useEffect } from 'react'; 
import Navbar from '../components/Navbar';
import MasonryGrid from '../components/MasonryGrid'; 
import PageHeroe from '../components/PageHeroe'; 

// 🛑 ELIMINAMOS las importaciones locales que daban error (img1, img2, etc.)
// 🛑 IMPORTAMOS LA DATA CENTRALIZADA
import { SEGMENTED_GALLERY_DATA } from '../data/galleryData';

// --- DATA ESPECÍFICA DE BRANDING ---
const BRANDING_COLOR = '#FFFFFF'; 
const BRANDING_TITLE = 'DISEÑO GRÁFICO'; // Cambié a Diseño Gráfico para coincidir con tu galería
const BRANDING_DESCRIPTION = 'Creamos la identidad visual y estratégica que tu marca necesita para destacar y conectar con su audiencia.';

// --- LÓGICA DE SINCRONIZACIÓN ---
// 1. Obtenemos las imágenes de la categoría "Diseño Grafico"
const brandingImagesURLs = SEGMENTED_GALLERY_DATA['Diseño Grafico'] || [];

// 2. Calculamos el offset (Photography tiene 16 imágenes + Producción tiene 1)
const photographyCount = SEGMENTED_GALLERY_DATA['Photography']?.length || 0;
const multimediaCount = SEGMENTED_GALLERY_DATA['Produccion multimedia']?.length || 0;
const globalOffset = photographyCount + multimediaCount;

// 3. Formateamos para el MasonryGrid { src, slug }
const formattedImages = brandingImagesURLs.map((url, index) => ({
    src: url,
    slug: `imagen-${index + globalOffset}`
}));

const Branding = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#0F0E0E] min-h-screen w-full relative overflow-x-hidden flex flex-col">
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
             {/* 🛑 PASAMOS LAS IMÁGENES REALES DE DISEÑO GRÁFICO */}
             <MasonryGrid rawImages={formattedImages} />
        </div>
        
      </div>

      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.08] mix-blend-overlay"
           style={{ backgroundImage: "url('/noise.png')" }}>
      </div>

    </div>
  );
};

export default Branding;