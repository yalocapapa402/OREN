import React from 'react';
import { motion } from 'framer-motion';
// Imágenes Fila 1
import imgGuitarra from '../assets/proyecto-guitarra.jpg'; 
import imgCereza from '../assets/proyecto-cereza.jpg'; 
// Imágenes Fila 2 (Nuevas)
import imgStar from '../assets/proyecto-star.jpg'; 
import imgPopcorn from '../assets/proyecto-popcorn.jpg';

const Projects = () => {
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

      {/* --- FILA 1: GUITARRA (Izq) y CEREZA (Der) --- */}
      <div className="w-full px-6 md:px-[62px] grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start mb-24">
        
        {/* GUITARRA (Pequeña - col-span-4) */}
        <div className="md:col-span-4 flex flex-col gap-4">
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className="w-full relative group cursor-pointer">
                    <div className="aspect-[489/369] w-full overflow-hidden">
                        <img 
                            src={imgGuitarra} 
                            alt="Urban Culture" 
                            className="w-full h-full object-cover grayscale-0 group-hover:grayscale transition-all duration-700 ease-in-out transform group-hover:scale-105"
                        />
                    </div>
                </div>
                <div className="pt-2">
                    <h3 className="font-anton text-3xl uppercase text-[#F5F5F0] mb-1 tracking-wide leading-none">
                        Urban Culture
                    </h3>
                    <p className="font-inter text-[14px] text-[#E6E1D1] max-w-xs leading-tight opacity-80">
                        Rompemos moldes para crear identidades con carácter. Diseño web y fotografía.
                    </p>
                </div>
            </motion.div>
        </div>

        {/* CEREZA (Grande - col-span-8) */}
        <div className="md:col-span-8 flex flex-col gap-4">
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
                <div className="w-full relative group cursor-pointer">
                    <div className="aspect-[1050/826] w-full overflow-hidden">
                        <img 
                            src={imgCereza} 
                            alt="Pop Corn The System" 
                            className="w-full h-full object-cover grayscale-0 group-hover:grayscale transition-all duration-700 ease-in-out transform group-hover:scale-105"
                        />
                    </div>
                </div>
                <div className="pt-2">
                    <h3 className="font-anton text-3xl uppercase text-[#F5F5F0] mb-1 tracking-wide leading-none">
                        Pop Corn The System
                    </h3>
                    <p className="font-inter text-[14px] text-[#E6E1D1] max-w-md leading-tight opacity-80">
                        Transformamos conceptos abstractos en experiencias visuales que tu audiencia no podrá ignorar.
                    </p>
                </div>
            </motion.div>
        </div>
      </div>

      {/* --- FILA 2: ESTRELLA (Izq/Grande) y POPCORN (Der/Pequeña) --- */}
      <div className="w-full px-6 md:px-[62px] grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start mb-32">
        
        {/* ESTRELLA (Grande - col-span-8) */}
        <div className="md:col-span-8 flex flex-col gap-4">
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className="w-full relative group cursor-pointer">
                    {/* Aspect Ratio 1052/813 */}
                    <div className="aspect-[1052/813] w-full overflow-hidden">
                        <img 
                            src={imgStar} 
                            alt="Proyecto Estrella" 
                            className="w-full h-full object-cover grayscale-0 group-hover:grayscale transition-all duration-700 ease-in-out transform group-hover:scale-105"
                        />
                    </div>
                </div>
                <div className="pt-2">
                    <h3 className="font-anton text-3xl uppercase text-[#F5F5F0] mb-1 tracking-wide leading-none">
                        Proyectos Recientes
                    </h3>
                    <p className="font-inter text-[14px] text-[#E6E1D1] max-w-md leading-tight opacity-80">
                        Rompemos moldes para crear identidades con carácter.
                    </p>
                </div>
            </motion.div>
        </div>

        {/* POPCORN (Pequeña - col-span-4) */}
        <div className="md:col-span-4 flex flex-col gap-4">
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
                <div className="w-full relative group cursor-pointer">
                    {/* Aspect Ratio 466/365 */}
                    <div className="aspect-[466/365] w-full overflow-hidden">
                        <img 
                            src={imgPopcorn} 
                            alt="Deliciously Unique" 
                            className="w-full h-full object-cover grayscale-0 group-hover:grayscale transition-all duration-700 ease-in-out transform group-hover:scale-105"
                        />
                    </div>
                </div>
                <div className="pt-2">
                    <h3 className="font-anton text-3xl uppercase text-[#F5F5F0] mb-1 tracking-wide leading-none">
                        Deliciously Unique
                    </h3>
                    <p className="font-inter text-[14px] text-[#E6E1D1] max-w-xs leading-tight opacity-80">
                        Meet the crew. French Popcorn.
                    </p>
                </div>
            </motion.div>
        </div>
      </div>

      {/* --- BOTÓN VER MÁS --- */}
      <div className="w-full flex justify-center pb-20">
        <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#E6E1D1] text-[#0F0E0E] font-inter font-bold text-sm px-10 py-4 uppercase tracking-wider hover:bg-white transition-colors"
        >
            Ver Más
        </motion.button>
      </div>

    </section>
  );
};

export default Projects;