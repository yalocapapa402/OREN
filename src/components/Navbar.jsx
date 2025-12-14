import React from 'react';
import { Link } from 'react-router-dom';
import logoHeader from '../assets/logo-header.png'; 

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-6 md:px-[62px] py-6">
      
      {/* 1. IZQUIERDA: LOGO */}
      <Link to="/" className="w-[80px] md:w-[122px] h-[80px] md:h-[122px] flex items-center justify-start cursor-pointer z-50">
        <img 
          src={logoHeader} 
          alt="O'REN" 
          className="w-full h-full object-contain" 
        />
      </Link>

      {/* 2. CENTRO: MENÚ (Solo en PC) */}
      {/* - Quité 'text-sm' para que tenga su tamaño normal. */}
      {/* - Quité el 'hover:text-red' para que no cambie de color. */}
      <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 gap-8 font-anton uppercase tracking-wider text-[#F5F5F0]">
        <a href="/#proyectos" className="transition-opacity hover:opacity-70">Proyectos</a>
        <a href="/#nosotros" className="transition-opacity hover:opacity-70">Sobre Nosotros</a>
        <a href="/#contacto" className="transition-opacity hover:opacity-70">Contáctanos</a>
      </div>

      {/* 3. DERECHA: COPYRIGHT ©2025 */}
      <div className="font-anton text-[#F5F5F0] uppercase hidden md:block">
        ©2025
      </div>

    </nav>
  );
};

export default Navbar;