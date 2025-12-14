import React, { useEffect } from 'react'; // <--- 1. IMPORTAR useEffect
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';

// --- IMÁGENES ---
import img1 from '../assets/proyecto-guitarra.jpg'; 
import img2 from '../assets/proyecto-cereza.jpg';
import img3 from '../assets/servicio-branding.jpg';
import img4 from '../assets/servicio-digital.jpg';
import collageBg from '../assets/collage-bg.png'; 

// Lista de imágenes
const rawImages = [
  img3, img1, img4, img2, img1, 
  img3, img2, img4, img1, img3, 
  img2, img4, img1, img3, img2, 
  img4, img1, img3, img2, img1,
  img3, img4, img2, img1
];

// LÓGICA MÓVIL (S-M-L)
const mobileSizes = [
  "aspect-[130.13/130.13]", 
  "aspect-[130.14/165]",    
  "aspect-[130.14/200]"     
];

const generateFixedColumn = (sizeIndex, colId) => {
  return Array.from({ length: 6 }).map((_, i) => {
    const imgIndex = (i + colId) % rawImages.length;
    return {
      id: `col-${colId}-row-${i}`,
      src: rawImages[imgIndex],
      aspectClass: mobileSizes[sizeIndex] 
    };
  });
};

const mobileCol1 = generateFixedColumn(0, 0);
const mobileCol2 = generateFixedColumn(1, 1);
const mobileCol3 = generateFixedColumn(2, 2);

// LÓGICA ESCRITORIO
const desktopPhotos = rawImages.map((src, index) => {
  const positionInCycle = index % 3; 
  let aspectClass = "";
  if (positionInCycle === 0) aspectClass = "aspect-[310.71/320.36]"; 
  else if (positionInCycle === 1) aspectClass = "aspect-[310.71/403.34]"; 
  else aspectClass = "aspect-[310.71/488.25]"; 
  return { id: `desk-${index}`, src: src, aspectClass: aspectClass };
});


const Photography = () => {
  
  // --- 2. CÓDIGO NUEVO: SCROLL TO TOP ---
  // Esto se ejecuta una sola vez cuando entras a esta página
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // -------------------------------------

  return (
    <div className="bg-[#0F0E0E] min-h-screen w-full relative overflow-x-hidden flex flex-col">
      <Navbar />

      <div className="w-full flex flex-col">
        
        {/* HERO SECTION */}
        <div className="relative w-full min-h-[90vh] flex flex-col items-center justify-center pt-20 pb-20 px-6">
          <div className="relative flex items-center justify-center w-full max-w-[647.28px] aspect-[647/469]">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }} 
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 z-0 flex items-center justify-center"
            >
              <img 
                src={collageBg} 
                alt="Collage Artístico" 
                className="w-full h-full object-contain"
                style={{ imageRendering: 'high-quality', transform: 'translateZ(0)', backfaceVisibility: 'hidden', willChange: 'transform' }}
              />
            </motion.div>

            <motion.h1 
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-anton uppercase relative z-10 text-center drop-shadow-2xl leading-none"
              style={{ color: '#B00601', fontSize: 'clamp(3rem, 10vw, 120px)', letterSpacing: '0.16em' }}
            >
              FOTOGRAFÍA
            </motion.h1>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative z-10 mt-12 text-center px-4 flex flex-col items-center"
          >
            <p className="font-inter text-[#E6E1D1] max-w-xl mx-auto text-sm md:text-lg mb-8 opacity-90 leading-relaxed drop-shadow-md">
              Rompemos moldes para crear identidades con carácter. 
              Transformamos conceptos abstractos en experiencias visuales.
            </p>
            <button className="bg-transparent border border-[#B00601] text-[#B00601] hover:bg-[#B00601] hover:text-white font-inter font-bold text-xs px-10 py-4 uppercase tracking-widest transition-all duration-300 rounded-[18px]">
              Ver Más
            </button>
          </motion.div>
        </div>

        {/* GRID CONTAINER */}
        <div className="px-6 md:px-[62px] pb-40 relative z-20 bg-[#0F0E0E]">
          
          {/* MÓVIL */}
          <div className="flex md:hidden flex-row gap-4 justify-center">
            <div className="flex flex-col gap-4 w-1/3">
              {mobileCol1.map((photo, i) => (
                <PhotoCard key={photo.id} photo={photo} index={i} rounded="rounded-md" />
              ))}
            </div>
            <div className="flex flex-col gap-4 w-1/3">
              {mobileCol2.map((photo, i) => (
                <PhotoCard key={photo.id} photo={photo} index={i} rounded="rounded-md" />
              ))}
            </div>
            <div className="flex flex-col gap-4 w-1/3">
              {mobileCol3.map((photo, i) => (
                <PhotoCard key={photo.id} photo={photo} index={i} rounded="rounded-md" />
              ))}
            </div>
          </div>

          {/* ESCRITORIO */}
          <div className="hidden md:block columns-3 lg:columns-4 xl:columns-5 gap-4">
             {desktopPhotos.map((photo, index) => (
               <motion.div
                 key={photo.id}
                 initial={{ opacity: 0, y: 50 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true, margin: "-50px" }}
                 transition={{ duration: 0.5, delay: index * 0.05 }}
                 className="break-inside-avoid mb-4 relative group cursor-pointer overflow-hidden rounded-xl"
               >
                 <div className={`w-full ${photo.aspectClass} relative`}>
                    <img 
                      src={photo.src} 
                      alt="Galería"
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out hover:scale-105 rounded-xl absolute inset-0"
                    />
                 </div>
               </motion.div>
             ))}
          </div>

        </div>

      </div>

      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.08] mix-blend-overlay"
           style={{ backgroundImage: "url('/noise.png')" }}>
      </div>

    </div>
  );
};

const PhotoCard = ({ photo, index, rounded }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "10%" }}
    transition={{ duration: 0.4, delay: index * 0.02 }}
    className={`relative group cursor-pointer overflow-hidden ${rounded} w-full`}
  >
    <div className={`w-full ${photo.aspectClass} relative`}>
      <img 
        src={photo.src} 
        alt="Galería Móvil"
        className={`w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out hover:scale-105 ${rounded} absolute inset-0`}
      />
    </div>
  </motion.div>
);

export default Photography;