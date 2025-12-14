import React from 'react';
import { motion } from 'framer-motion';
import logoSmall from '../assets/logo-header.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      // items-center es vital para centrar el texto con el logo alto
      className="fixed top-0 left-0 w-full flex justify-between items-center px-8 z-50 uppercase font-anton"
    >
      {/* IZQUIERDA: Logo (122x122) */}
      <Link to="/" className="w-[122px] h-[122px] flex items-center justify-start cursor-pointer">
        <img 
          src={logoSmall} 
          alt="O'REN" 
          className="w-full h-full object-contain" 
        />
      </Link>

      {/* CENTRO: Menú */}
      {/* CORRECCIÓN: Sin 'font-bold' y sin tracking extra para el look "condensed" original */}
      <ul className="flex gap-12 text-[18px] text-[#F3F3F3]">
        <li className="cursor-pointer hover:text-gray-300 transition-colors">Proyectos</li>
        <li className="cursor-pointer hover:text-gray-300 transition-colors">Sobre Nosotros</li>
        <li className="cursor-pointer hover:text-gray-300 transition-colors">Contáctanos</li>
      </ul>

      {/* DERECHA: Año */}
      {/* Mismas propiedades que el menú */}
      <div className="w-[122px] text-right text-[18px] flex items-center justify-end h-[122px] text-[#F3F3F3]">
        ©2025
      </div>
    </motion.nav>
  );
};

export default Navbar;