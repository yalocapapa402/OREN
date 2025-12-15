import React from 'react';
import { motion } from 'framer-motion';

// Definición de Estilos (Simplificado)
const STYLES = {
  // Estilos de la descripción 
  description: {
    base: "text-white text-center font-light uppercase tracking-wider",
    // Ancho adaptable (móvil: w-full, escritorio: ancho fijo)
    width: "w-full max-w-[700px] px-8 md:w-[600px] lg:w-[700px] md:px-0", 
    
    // === AJUSTE PARA SUBIR EL TEXTO EN MÓVILES ===
    // top-[45%] lo sube 10% más que antes. 
    // 💡 PARA SUBIR AÚN MÁS: Reduce el 45% (ej: 40%).
    // 💡 PARA BAJAR UN POCO: Aumenta el 45% (ej: 50%).
    position: "absolute top-[45%] md:top-[63vh] z-30" 
  },
  // Estilos del botón (se mantienen, pero ya no se usan)
  button: {
    base: "text-xs font-bold uppercase transition-colors duration-300 tracking-[0.2em] mt-8 py-3 px-8 rounded-full border-2 hover:bg-opacity-80",
  }
};


// Componente principal PageHeroe
const PageHeroe = ({ title, description, collageBg, color }) => { 
  
  return (
    <div className="relative w-full h-[100vh] flex flex-col items-center justify-start pointer-events-none">
      
      {/* 1. CONTENEDOR DE LA IMAGEN COMBINADA (Collage + Título) */}
      <div
        className={`
          absolute z-0
          w-[90vw] sm:w-[80vw] md:w-[780px] 
          aspect-[780/550] 
          left-1/2 -translate-x-1/2
          top-20 md:top-[120px] 
        `}
      >
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }} 
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          {/* USAMOS LA ÚNICA IMAGEN */}
          <img 
            src={collageBg} 
            alt={`Collage y Título ${title}`} 
            className="w-full h-full object-contain"
          />
        </motion.div>
      </div>

     {/* 2. EL BLOQUE DE DESCRIPCIÓN (SIN BOTÓN) */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        
        className={`
            ${STYLES.description.position} // <- ¡Aquí está tu ajuste de altura!
            left-1/2 -translate-x-1/2 
            ${STYLES.description.width} 
            p-4 md:p-0 
            flex flex-col items-center justify-center
        `}
      >
        <p className="text-white text-center font-light uppercase tracking-wider text-sm md:text-base">
          {description}
        </p>
        
        {/* El botón "Ver Proyectos" ha sido eliminado, como solicitaste. */}
      </motion.div>
    </div>
  );
};

export default PageHeroe;