// Hero.jsx (CÓDIGO CON DIMENSIONES FIJAS)

import React from 'react';
import { motion } from 'framer-motion';
import logoImg from '../assets/logo-oren.png'; 

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-6 z-40">
      
      {/* 1. LOGO GIGANTE (Ajustado para celular con 410px) */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        // 🛑 CAMBIO CLAVE: Aplicamos width y height fijos (410px) en móvil.
        // En pantallas medianas (md:), volvemos al ancho completo (w-full max-w-5xl).
        className="w-[410px] h-[410px] md:w-full md:h-auto max-w-5xl mb-8 md:mb-12" 
      >
        <img 
          src={logoImg} 
          alt="O'REN Logo" 
          style={{ 
            filter: 'drop-shadow(10px 20px 40px rgba(0, 0, 0, 0.25))' 
          }}
          className="w-full h-full object-contain" // El img llena el div contenedor de 410px
        />
      </motion.div>

      {/* 2. TEXTO DESCRIPTIVO (No cambia) */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="text-center w-full"
      >
        <span className="
          font-inter 
          font-medium 
          text-[16px] md:text-[25px] 
          text-[#E6E1D1] 
          leading-relaxed md:leading-tight 
          block 
          max-w-xs md:max-w-3xl 
          mx-auto
        ">
          Rompemos moldes para crear identidades con carácter. 
          Transformamos conceptos abstractos en experiencias visuales 
          que tu audiencia no podrá ignorar.
        </span>
      </motion.div>

    </section>
  );
};

export default Hero;