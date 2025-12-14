import React from 'react';
import { motion } from 'framer-motion';
import logoImg from '../assets/logo-oren.png'; 

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-4 z-40">
      
      {/* 1. Logo Gigante */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-full max-w-5xl mb-8"
      >
        <img 
          src={logoImg} 
          alt="O'REN Logo" 
          // CAMBIO AQUÍ: Usamos style={{ filter: ... }} para precisión milimétrica con tus valores
          // X=10px, Y=20px, Blur=40px, Color=rgba(0,0,0,0.25)
          style={{ 
            filter: 'drop-shadow(10px 20px 40px rgba(0, 0, 0, 0.25))' 
          }}
          className="w-full h-auto object-contain"
        />
      </motion.div>

      {/* 2. Texto Descriptivo */}
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="text-center"
      >
        <span className="
          font-inter 
          font-medium 
          text-[25px] 
          text-[#E6E1D1] 
          leading-tight 
          block 
          max-w-3xl 
          mx-auto
        ">
          Rompemos moldes para crear identidades con carácter. 
          Transformamos conceptos abstractos en experiencias visuales 
          que tu audiencia no podrá ignorar.
        </span>
      </motion.p>

    </section>
  );
};

export default Hero;