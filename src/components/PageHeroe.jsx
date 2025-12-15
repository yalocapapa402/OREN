import React from 'react';
import { motion } from 'framer-motion';

// Definición de Estilos (Simplificado)
const STYLES = {
  // Estilos de la descripción 
  description: {
    base: "text-white text-center font-light uppercase tracking-wider",
    // Ancho adaptable
    width: "w-full max-w-[700px] px-8 md:w-[600px] lg:w-[700px] md:px-0", 
    
    // === PUNTO CLAVE PARA AJUSTAR LA ALTURA ===
    // top-[55vh] en móviles: Reduce este número (e.g., 50vh) para SUBIR el texto, o auméntalo (e.g., 60vh) para BAJAR el texto.
    // md:top-[63vh] en escritorio: Este es el valor para pantallas grandes.
    position: "absolute top-[55vh] md:top-[63vh] z-30" 
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
            ${STYLES.description.position} // <- Controla la altura.
            left-1/2 -translate-x-1/2 
            ${STYLES.description.width} 
            p-4 md:p-0 
            flex flex-col items-center justify-center
        `}
      >
        <p className="text-white text-center font-light uppercase tracking-wider text-sm md:text-base">
          {description}
        </p>

        {/* ELIMINACIÓN DEL BOTÓN "Ver Proyectos"
        <a href="#galeria">
            <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={STYLES.button.base}
                style={{ borderColor: color, color: color }}
            >
                Ver Proyectos
            </motion.button>
        </a>
        */}
      </motion.div>
      
    </div>
  );
};

export default PageHeroe;