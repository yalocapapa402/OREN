import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// IMPORTAMOS LA DATA CENTRALIZADA
import { SEGMENTED_GALLERY_DATA } from '../data/galleryData';

const Projects = () => {
  const navigate = useNavigate();

  // --- OBTENCIÓN DE IMÁGENES DESDE LAS CATEGORÍAS ---
  // Extraemos cada una de su lugar correspondiente en galleryData.js
  const imgGuitarra = SEGMENTED_GALLERY_DATA['Photography'][0];    // p1 (Guitarra)
  const imgCereza = SEGMENTED_GALLERY_DATA['Diseño Grafico'][0];   // g1 (Cereza)
  const imgStar = SEGMENTED_GALLERY_DATA['Photography'][2];        // p3 (Estrella/Noro)
  const imgPopcorn = SEGMENTED_GALLERY_DATA['WebDesign'][0];       // w1 (Popcorn/Bloomly)

  // --- LÓGICA DE NAVEGACIÓN DINÁMICA ---
  // Esta función calcula el ID (imagen-X) buscando la posición real de la imagen en toda la data
  const handleProjectClick = (category, indexInCategory) => {
    let offset = 0;
    const categories = Object.keys(SEGMENTED_GALLERY_DATA);
    
    for (let cat of categories) {
      if (cat === category) break;
      offset += SEGMENTED_GALLERY_DATA[cat].length;
    }
    
    const globalId = offset + indexInCategory;
    navigate(`/proyectos/imagen-${globalId}`);
  };

  return (
    <section className="relative w-full z-20 pb-40">
      
      {/* 1. ESPACIO VERTICAL (Spacer) */}
      <div className="h-[40vh] md:h-[50vh] w-full" />

      {/* 2. TÍTULO MARQUEE */}
      <div className="overflow-hidden w-full mb-12 border-y border-white/10 py-4 bg-black/20 backdrop-blur-sm">
        <motion.div 
          className="flex whitespace-nowrap"
          animate={{ x: [0, -1000] }} 
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        >
          {[...Array(4)].map((_, i) => (
            <span key={i} className="text-[5rem] md:text-[8rem] font-anton text-[#F5F5F0] mr-24 leading-none uppercase tracking-tighter">
              Proyectos Recientes — 
            </span>
          ))}
        </motion.div>
      </div>

      {/* --- FILA 1: GUITARRA (Photography) y CEREZA (Diseño Gráfico) --- */}
      <div className="w-full px-6 md:px-[62px] grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start mb-24">
        
        {/* PROYECTO: GUITARRA */}
        <div className="md:col-span-4 flex flex-col gap-4">
            <motion.div
                className="cursor-pointer"
                onClick={() => handleProjectClick('Photography', 0)}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className="w-full relative group">
                    <div className="aspect-[489/369] w-full overflow-hidden">
                        <img 
                            src={imgGuitarra} 
                            alt="Expogan" 
                            className="w-full h-full object-cover grayscale-0 group-hover:grayscale transition-all duration-700 ease-in-out transform group-hover:scale-105"
                        />
                    </div>
                </div>
                <div className="pt-2">
                    <h3 className="font-anton text-3xl uppercase text-[#F5F5F0] mb-1 leading-none tracking-wide">Expogan</h3>
                    <p className="font-inter text-[14px] text-[#E6E1D1] max-w-xs leading-tight opacity-80">Expogan Sonora, la feria ganadera más grande del noroeste del país.</p>
                </div>
            </motion.div>
        </div>

        {/* PROYECTO: CEREZA */}
        <div className="md:col-span-8 flex flex-col gap-4">
            <motion.div
                className="cursor-pointer"
                onClick={() => handleProjectClick('Diseño Grafico', 0)}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
                <div className="w-full relative group">
                    <div className="aspect-[1050/826] w-full overflow-hidden">
                        <img 
                            src={imgCereza} 
                            alt="Gata Rompe Hogares" 
                            className="w-full h-full object-cover grayscale-0 group-hover:grayscale transition-all duration-700 ease-in-out transform group-hover:scale-105"
                        />
                    </div>
                </div>
                <div className="pt-2">
                    <h3 className="font-anton text-3xl uppercase text-[#F5F5F0] mb-1 leading-none tracking-wide">GATA ROMPE HOGARES</h3>
                    <p className="font-inter text-[14px] text-[#E6E1D1] max-w-md leading-tight opacity-80">Transformamos conceptos abstractos en experiencias visuales memorables.</p>
                </div>
            </motion.div>
        </div>
      </div>

      {/* --- FILA 2: ESTRELLA (Photography) y POPCORN (Web Design) --- */}
      <div className="w-full px-6 md:px-[62px] grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start mb-32">
        
        {/* PROYECTO: ESTRELLA (Noro) */}
        <div className="md:col-span-8 flex flex-col gap-4">
            <motion.div
                className="cursor-pointer"
                onClick={() => handleProjectClick('Photography', 2)}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className="w-full relative group">
                    <div className="aspect-[1052/813] w-full overflow-hidden">
                        <img src={imgStar} alt="Noro" className="w-full h-full object-cover grayscale-0 group-hover:grayscale transition-all duration-700 ease-in-out transform group-hover:scale-105" />
                    </div>
                </div>
                <div className="pt-2">
                    <h3 className="font-anton text-3xl uppercase text-[#F5F5F0] mb-1 leading-none tracking-wide">NORO</h3>
                    <p className="font-inter text-[14px] text-[#E6E1D1] max-w-md leading-tight opacity-80">Juntada exclusiva de mujeres skaters en el Parque Madero.</p>
                </div>
            </motion.div>
        </div>

        {/* PROYECTO: POPCORN (Bloomly) */}
        <div className="md:col-span-4 flex flex-col gap-4">
            <motion.div
                className="cursor-pointer"
                onClick={() => handleProjectClick('WebDesign', 0)}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
                <div className="w-full relative group">
                    <div className="aspect-[466/365] w-full overflow-hidden">
                        <img src={imgPopcorn} alt="Bloomly" className="w-full h-full object-cover grayscale-0 group-hover:grayscale transition-all duration-700 ease-in-out transform group-hover:scale-105" />
                    </div>
                </div>
                <div className="pt-2">
                    <h3 className="font-anton text-3xl uppercase text-[#F5F5F0] mb-1 leading-none tracking-wide">Bloomly.</h3>
                    <p className="font-inter text-[14px] text-[#E6E1D1] max-w-xs leading-tight opacity-80">Diseños florales personalizados para eventos especiales.</p>
                </div>
            </motion.div>
        </div>
      </div>

      {/* --- BOTÓN VER MÁS --- */}
      <div className="w-full flex justify-center pb-20">
        <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/fotografia')} // O la ruta general de portafolio
            className="bg-[#E6E1D1] text-[#0F0E0E] font-inter font-bold text-sm px-10 py-4 uppercase tracking-wider hover:bg-white transition-colors"
        >
            Ver Más
        </motion.button>
      </div>

    </section>
  );
};

export default Projects;