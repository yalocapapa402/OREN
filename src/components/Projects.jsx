import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// IMPORTAMOS LA DATA CENTRALIZADA Y EL MAPA DE SLUGS
import { SEGMENTED_GALLERY_DATA, SLUG_TO_IMAGE_MAP } from '../data/galleryData';

const Projects = () => {
  const navigate = useNavigate();

  // --- OBTENCIÓN DE IMÁGENES DESDE LAS CATEGORÍAS ---
  const imgGuitarra = SEGMENTED_GALLERY_DATA['Photography'][0];
  const imgCereza = SEGMENTED_GALLERY_DATA['Diseño Grafico'][0];
  const imgStar = SEGMENTED_GALLERY_DATA['Diseño Grafico'][1];
  const imgPopcorn = SEGMENTED_GALLERY_DATA['WebDesign'][0];

  // --- LÓGICA DE NAVEGACIÓN DINÁMICA (ACTUALIZADA) ---
  const handleProjectClick = (category, indexInCategory) => {
    const targetImageURL = SEGMENTED_GALLERY_DATA[category][indexInCategory];
    
    const projectSlug = Object.keys(SLUG_TO_IMAGE_MAP).find(
      (slug) => SLUG_TO_IMAGE_MAP[slug] === targetImageURL
    );

    if (projectSlug) {
      navigate(`/project/${projectSlug}`);
    }
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

      {/* --- FILA 1: Mercedes (Photography) y CEREZA (Diseño Gráfico) --- */}
      <div className="w-full px-6 md:px-[62px] grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start mb-24">
        
        {/* PROYECTO: Mercedes */}
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
                            className="w-full h-full object-cover transition-all duration-700 ease-in-out transform group-hover:scale-105"
                        />
                    </div>
                </div>
                <div className="pt-2">
                    <h3 className="font-anton text-3xl uppercase text-[#F5F5F0] mb-1 leading-none tracking-wide">Mercedes</h3>
                    <p className="font-inter text-[14px] text-[#E6E1D1] max-w-xs leading-tight opacity-80">Una narrativa visual que captura la elegancia atemporal en un entorno decadente. 'Mercedes' explora el contraste entre la textura del tejido satinado y la piedra fría de una arquitectura clásica..</p>
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
                            className="w-full h-full object-cover transition-all duration-700 ease-in-out transform group-hover:scale-105"
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

      {/* --- FILA 2: ESTRELLA (Diseño Gráfico) y POPCORN (Web Design) --- */}
      <div className="w-full px-6 md:px-[62px] grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start mb-32">
        
        {/* PROYECTO: ESTRELLA (Noro) */}
        <div className="md:col-span-8 flex flex-col gap-4">
            <motion.div
                className="cursor-pointer"
                onClick={() => handleProjectClick('Diseño Grafico', 1)} 
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className="w-full relative group">
                    <div className="aspect-[1052/813] w-full overflow-hidden">
                        <img src={imgStar} alt="Noro" className="w-full h-full object-cover transition-all duration-700 ease-in-out transform group-hover:scale-105" />
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
                        <img src={imgPopcorn} alt="Bloomly" className="w-full h-full object-cover transition-all duration-700 ease-in-out transform group-hover:scale-105" />
                    </div>
                </div>
                <div className="pt-2">
                    <h3 className="font-anton text-3xl uppercase text-[#F5F5F0] mb-1 leading-none tracking-wide">Bloomly.</h3>
                    <p className="font-inter text-[14px] text-[#E6E1D1] max-w-xs leading-tight opacity-80">Diseños florales personalizados para eventos especiales.</p>
                </div>
            </motion.div>
        </div>
      </div>

      {/* --- SECCIÓN FINAL--- */}
      <div className="relative w-full overflow-hidden group/teaser -mt-32 md:-mt-20"> 
        
        {/* Fondo Parallax */}
        <motion.div 
          initial={{ y: 0 }}
          whileInView={{ y: -50 }} 
          transition={{ duration: 3, ease: "easeOut" }}
          className="w-full px-6 md:px-[62px] grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 opacity-30 md:opacity-20 blur-xl md:blur-2xl group-hover/teaser:blur-xl group-hover/teaser:opacity-30 transition-all duration-1000 pointer-events-none select-none"
        >
          {/* Imagen de fondo izquierda */}
          <div className="md:col-span-8 aspect-[1050/500] overflow-hidden rounded-sm bg-white/5">
              <img src={SEGMENTED_GALLERY_DATA['Photography'][8]} alt="teaser" className="w-full h-full object-cover" />
          </div>

          {/* Imagen de fondo derecha */}
          <div className="md:col-span-4 aspect-[489/369] overflow-hidden rounded-sm bg-white/5">
              <img src={SEGMENTED_GALLERY_DATA['Diseño Grafico'][5]} alt="teaser" className="w-full h-full object-cover" />
          </div>
        </motion.div>

        {/* Degradado */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F0E0E] via-transparent to-[#0F0E0E] z-10" />

        {/* CONTENEDOR DEL BOTÓN CENTRAL */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mb-6 text-center"
          >
            <span className="text-[10px] text-white/40 tracking-[0.5em] uppercase block">Explora el portafolio completo</span>
          </motion.div>

          <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: "#ffffff" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/portafolio')} 
              className="bg-[#E6E1D1] text-[#0F0E0E] font-inter font-bold text-sm uppercase tracking-widest flex items-center justify-center w-[248px] h-[60px] rounded-[50px] transition-all duration-500 shadow-[0_0_40px_rgba(0,0,0,0.5)]"
          >
              Ver Más
          </motion.button>
        </div>
      </div>

    </section>
  );
};

export default Projects;