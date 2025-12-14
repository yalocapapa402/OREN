import React from 'react';
import { motion } from 'framer-motion';
import logoImg from '../assets/logo-oren.png'; 

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-6 z-40">
      
      {/* 1. LOGO GIGANTE (Ajustado para celular) */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        // CAMBIO CLAVE: w-[70%] en móvil, w-full en PC
        className="w-[70%] md:w-full max-w-5xl mb-8 md:mb-12" 
      >
        <img 
          src={logoImg} 
          alt="O'REN Logo" 
          style={{ 
            filter: 'drop-shadow(10px 20px 40px rgba(0, 0, 0, 0.25))' 
          }}
          className="w-full h-auto object-contain"
        />
      </motion.div>

      {/* 2. TEXTO DESCRIPTIVO (Más pequeño en celular) */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="text-center w-full"
      >
        <span className="
          font-inter 
          font-medium 
          text-[16px] md:text-[25px] /* <--- CAMBIO: 16px en cel, 25px en PC */
          text-[#E6E1D1] 
          leading-relaxed md:leading-tight 
          block 
          max-w-xs md:max-w-3xl /* <--- CAMBIO: max-w-xs (angosto) en cel para que no se estire */
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