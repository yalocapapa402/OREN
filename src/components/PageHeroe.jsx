import React from 'react';
import { motion } from 'framer-motion';

const PageHeroe = ({ title, description, collageBg, color }) => {

  return (
    // Contenedor principal
    <div className="relative w-full min-h-screen flex flex-col items-center justify-start pt-20 pb-20 px-0 md:px-6">

      
      {/* 1. Contenedor del Collage - Responsive y Centrado */}
      <div
        className="
          absolute z-0
          w-[70vw] sm:w-[75vw] md:w-[647.28px] 
          aspect-[647/469]
          left-1/2 -translate-x-1/2
          top-20 md:top-[150px]
          pointer-events-none
        "
      >
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }} 
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <img 
            src={collageBg}
            alt={`Collage ${title}`} 
            className="w-full h-full object-contain"
            style={{ 
              imageRendering: 'high-quality', 
              transform: 'translateZ(0)', 
              backfaceVisibility: 'hidden', 
              willChange: 'transform',
            }}
          />
        </motion.div>
      </div>

      {/* 2. Título Principal - Centrado Absoluto y Responsive (Tamaño/Posición Y) */}
      <motion.h1 
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
       className="
  font-anton uppercase absolute z-20
  text-center leading-none
  w-screen
  left-1/2 -translate-x-1/2
  top-[340px] md:top-[504px]
"

        style={{
          color: color,
          fontSize: 'clamp(3rem, 15vw, 180px)', // Tamaño de fuente dinámico
          letterSpacing: '0.08em',
          filter: 'drop-shadow(0px 4px 12px rgba(0,0,0,0.6))',
        }}
      >
        {title}
      </motion.h1>

      {/* 3. Bloque de Texto y Botón - Centrado y Responsive (Posición Y) */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
      className="
  absolute z-30 text-center flex flex-col items-center
  w-[90vw] sm:w-[85vw] md:w-auto
  px-4
  top-[420px] md:top-auto
  md:bottom-[280px]
  left-1/2 -translate-x-1/2
"

      >
        <p className="font-inter text-[#E6E1D1] max-w-xl mx-auto text-sm md:text-lg mb-8 opacity-90 leading-relaxed drop-shadow-md">
          {description}
        </p>
        
        <button 
          className="bg-transparent font-inter font-bold text-xs px-10 py-4 uppercase tracking-widest transition-all duration-300 rounded-[18px]"
          style={{ borderColor: color, color: color }}
        >
          Ver Más
        </button>
      </motion.div>
    </div>
  );
};

export default PageHeroe;