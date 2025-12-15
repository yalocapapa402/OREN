// PageHeroe.jsx (CÓDIGO CORREGIDO)

import React from 'react';
import { motion } from 'framer-motion';
import ResponsiveImage from './ResponsiveImage'; 

// Definición de Estilos
const STYLES = {
  // Estilos de la descripción 
  description: {
    // Posición Móvil (Mantenemos 400px, está bien)
    // 🛑 NUEVA POSICIÓN ESCRITORIO: Lo subimos de 850px a 800px.
    position: "absolute top-[400px] md:top-[800px] z-30", 
    
    // Ancho adaptable
    width: "w-full max-w-[700px] px-8 md:w-[600px] lg:w-[700px] md:px-0", 
  }
};


// Componente principal PageHeroe (El resto del código se mantiene)
const PageHeroe = ({ title, description, collageBgMobile, collageBgDesktop, color }) => { 
  
  return (
    <div className="relative w-full min-h-[90vh] md:h-[100vh] flex flex-col items-center justify-start pointer-events-none">
      
      {/* 1. CONTENEDOR DE LA IMAGEN COMBINADA (No cambia) */}
        <div
            className={`
                absolute z-0
                w-[65vw] sm:w-[80vw] md:w-[780px] 
                left-1/2 -translate-x-1/2
                top-20 md:top-[180px] 
                h-[350px] md:h-[800px] 
            `}
        >
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }} 
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative w-full h-full flex items-center justify-center"
            >
                <ResponsiveImage
                    srcMobile={collageBgMobile}
                    srcDesktop={collageBgDesktop} 
                    alt={`Collage y Título ${title}`}
                />
            </motion.div>
        </div>

     {/* 2. EL BLOQUE DE DESCRIPCIÓN (Usa la nueva posición) */}
      <motion.div 
        // ... (transiciones)
        className={`
            ${STYLES.description.position} 
            left-1/2 -translate-x-1/2 
            ${STYLES.description.width} 
            p-4 md:p-0 
            flex flex-col items-center justify-center
        `}
      >
        <p className="text-white text-center font-light uppercase tracking-wider text-sm md:text-base">
          {description}
        </p>
      </motion.div>
    </div>
  );
};

export default PageHeroe;