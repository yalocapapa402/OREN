import React from 'react';
import { motion } from 'framer-motion';

// Definición de Estilos
const STYLES = {
  // Estilos de la descripción 
  description: {
    // AJUSTE CLAVE EN MÓVIL: top-[520px] -> top-[450px]
    // Esto lo coloca justo debajo del nuevo collage más pequeño (400px de alto).
    position: "absolute top-[450px] md:top-[780px] z-30", 
    
    // Ancho adaptable (no necesita cambio, ya usa w-full)
    width: "w-full max-w-[700px] px-8 md:w-[600px] lg:w-[700px] md:px-0", 
  }
};


// Componente principal PageHeroe
const PageHeroe = ({ title, description, collageBg, color }) => { 
  
  return (
    // AJUSTE 1: min-h-[90vh] para que la altura sea más flexible en móvil.
    <div className="relative w-full min-h-[90vh] md:h-[100vh] flex flex-col items-center justify-start pointer-events-none">
      
      {/* 1. CONTENEDOR DE LA IMAGEN COMBINADA (Collage + Título) */}
        <div
            className={`
                absolute z-0
                // AJUSTE 2: Ancho reducido en móvil (w-[90vw] -> w-[75vw])
                w-[75vw] sm:w-[80vw] md:w-[780px] 
                left-1/2 -translate-x-1/2
                top-20 md:top-[180px] 
                // AJUSTE 3: Alto reducido en móvil (h-[500px] -> h-[400px])
                h-[400px] md:h-[600px] 
            `}
        >
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }} 
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative w-full h-full flex items-center justify-center"
            >
                <img 
                    src={collageBg} 
                    alt={`Collage y Título ${title}`} 
                    className="w-full h-full object-cover" 
                />
            </motion.div>
        </div>

     {/* 2. EL BLOQUE DE DESCRIPCIÓN */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        
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