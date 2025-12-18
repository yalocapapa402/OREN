import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logoHeader from '../assets/logo-header.png'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Variantes para la animación del menú móvil
  const menuVariants = {
    closed: { opacity: 0, x: "100%", transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
    opened: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <>
      <nav className="fixed top-0 w-full z-[60] flex justify-between items-center px-6 md:px-[62px] py-6">
        
        {/* 1. IZQUIERDA: LOGO */}
        <Link 
          to="/" 
          onClick={() => setIsOpen(false)}
          className="w-[80px] md:w-[122px] h-[80px] md:h-[122px] flex items-center justify-start cursor-pointer z-[70]"
        >
          <img 
            src={logoHeader} 
            alt="O'REN" 
            className="w-full h-full object-contain" 
          />
        </Link>

        {/* 2. CENTRO: MENÚ (Escritorio) */}
        <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 gap-8 font-anton uppercase tracking-wider text-[#F5F5F0]">
          <a href="/#proyectos" className="transition-opacity hover:opacity-70">Proyectos</a>
          <a href="/#nosotros" className="transition-opacity hover:opacity-70">Sobre Nosotros</a>
          <a href="/#contacto" className="transition-opacity hover:opacity-70">Contáctanos</a>
        </div>

        {/* 3. DERECHA: COPYRIGHT (Escritorio) / HAMBURGUESA (Móvil) */}
        <div className="font-anton text-[#F5F5F0] uppercase hidden md:block">
          ©2025
        </div>

        {/* BOTÓN HAMBURGUESA (Solo Móvil) */}
        <button 
          onClick={toggleMenu}
          className="flex md:hidden flex-col justify-center items-center gap-1.5 z-[70] w-10 h-10"
        >
          <motion.span 
            animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            className="w-8 h-[2px] bg-[#F5F5F0] block"
          />
          <motion.span 
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-8 h-[2px] bg-[#F5F5F0] block"
          />
          <motion.span 
            animate={isOpen ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }}
            className="w-8 h-[2px] bg-[#F5F5F0] block"
          />
        </button>
      </nav>

      {/* MENÚ MÓVIL PANTALLA COMPLETA */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="opened"
            exit="closed"
            className="fixed inset-0 bg-[#0F0E0E] z-[55] flex flex-col justify-center items-center md:hidden"
          >
            <div className="flex flex-col gap-8 font-anton text-[3rem] text-center uppercase tracking-tighter text-[#F5F5F0]">
              <a href="/#proyectos" onClick={toggleMenu} className="hover:text-[#E6E1D1] transition-colors">Proyectos</a>
              <a href="/#nosotros" onClick={toggleMenu} className="hover:text-[#E6E1D1] transition-colors">Nosotros</a>
              <a href="/#contacto" onClick={toggleMenu} className="hover:text-[#E6E1D1] transition-colors">Contacto</a>
            </div>
            
            <div className="absolute bottom-10 font-anton text-[#F5F5F0] opacity-30">
              ©2025 O'REN STUDIO
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;