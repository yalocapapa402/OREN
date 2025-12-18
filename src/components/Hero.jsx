// Hero.jsx (VERSIÓN OPTIMIZADA PARA MÓVIL)
import React from 'react';
import { motion } from 'framer-motion';
import logoImg from '../assets/logo-oren.png'; 

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-6 z-40 overflow-hidden">
      
      {/* 1. LOGO DINÁMICO (Optimizado para evitar cortes en móvil) */}
      <motion.div
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }} // Ease tipo "expo" para más elegancia
        className="w-[85vw] h-auto md:w-full md:max-w-5xl mb-6 md:mb-12" 
      >
        <img 
          src={logoImg} 
          alt="O'REN Logo" 
          className="w-full h-full object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
        />
      </motion.div>

      {/* 2. TEXTO DESCRIPTIVO (Ajuste de lectura) */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="text-center w-full -mt-2 md:-mt-24"
      >
        <p className="
          font-inter 
          font-light 
          text-[13px] md:text-[18px] 
          text-[#E6E1D1] 
          leading-relaxed 
          block 
          max-w-[280px] md:max-w-3xl 
          mx-auto
          opacity-90
          tracking-wide
        ">
          Rompemos moldes para crear identidades con carácter. 
          <span className="hidden md:inline"> </span> {/* Espaciador condicional */}
          Transformamos conceptos abstractos en experiencias visuales 
          que tu audiencia no podrá ignorar.
        </p>
      </motion.div>

    </section>
  );
};

export default Hero;