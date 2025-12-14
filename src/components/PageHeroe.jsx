import React from 'react';
import { motion } from 'framer-motion';

// ============================================
// 🎨 CONFIGURACIÓN DE ESTILOS
// ============================================
// Aquí puedes modificar TODOS los aspectos visuales fácilmente

const STYLES = {
  // Contenedor principal
  container: {
    padding: {
      vertical: 'pt-20 pb-20',
      horizontal: 'px-0 md:px-6'
    }
  },

  // Collage de fondo
  collage: {
    // Tamaño del collage
    width: 'w-[70vw] sm:w-[75vw] md:w-[647.28px]',
    aspectRatio: 'aspect-[647/469]',
    
    // Posición vertical
    position: {
      mobile: 'top-20',
      desktop: 'md:top-[150px]'
    },
    
    // Animación
    animation: {
      duration: 0.8,
      initial: { opacity: 0, scale: 0.9 },
      animate: { opacity: 1, scale: 1 }
    }
  },

  // Título principal
  title: {
    // Tamaño de fuente (min, preferido, max)
    fontSize: {
      min: '3rem',
      preferred: '15vw',
      max: '180px'
    },
    
    // Posición vertical
    position: {
      mobile: 'top-[340px]',
      desktop: 'md:top-[504px]'
    },
    
    // Espaciado de letras
    letterSpacing: '0.08em',
    
    // Sombra
    shadow: '0px 4px 12px rgba(0,0,0,0.6)',
    
    // Animación
    animation: {
      duration: 0.8,
      delay: 0.2,
      initial: { y: 30, opacity: 0 },
      animate: { y: 0, opacity: 1 }
    }
  },

  // Descripción
  description: {
    // Ancho
    width: 'w-[90vw] sm:w-[85vw] md:w-auto',
    
    // Padding horizontal
    padding: 'px-4',
    
    // Posición vertical
    position: {
      mobile: 'top-[400px]',
      desktop: 'md:top-auto md:bottom-[370px]'
    },
    
    // Opacidad del texto
    opacity: 'opacity-90',
    
    // Animación
    animation: {
      duration: 0.8,
      delay: 0.4,
      initial: { opacity: 0, y: 30 },
      animate: { opacity: 1, y: 0 }
    }
  }
};

// ============================================
// 📦 COMPONENTE PRINCIPAL
// ============================================

const PageHeroe = ({ title, description, collageBg, color }) => {
  return (
    <div className={`relative w-full min-h-screen flex flex-col items-center justify-start ${STYLES.container.padding.vertical} ${STYLES.container.padding.horizontal}`}>
      
      {/* Collage de fondo */}
      <div
        className={`
          absolute z-0
          ${STYLES.collage.width}
          ${STYLES.collage.aspectRatio}
          left-1/2 -translate-x-1/2
          ${STYLES.collage.position.mobile} ${STYLES.collage.position.desktop}
          pointer-events-none
        `}
      >
        <motion.div 
          initial={STYLES.collage.animation.initial}
          whileInView={STYLES.collage.animation.animate}
          viewport={{ once: true }}
          transition={{ duration: STYLES.collage.animation.duration }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <img 
            src={collageBg}
            alt={`Collage ${title}`} 
            className="w-full h-full object-contain"
            style={{ 
              imageRendering: 'high-quality', 
              transform: 'translateZ(0)', 
              backfaceVisibility: 'hidden', 
              willChange: 'transform',
            }}
          />
        </motion.div>
      </div>

      {/* Título principal */}
      <motion.h1 
        initial={STYLES.title.animation.initial}
        whileInView={STYLES.title.animation.animate}
        viewport={{ once: true }}
        transition={{ 
          duration: STYLES.title.animation.duration, 
          delay: STYLES.title.animation.delay 
        }}
        className={`
          font-anton uppercase absolute z-20
          text-center leading-none w-screen
          left-1/2 -translate-x-1/2
          ${STYLES.title.position.mobile} ${STYLES.title.position.desktop}
        `}
        style={{
          color: color,
          fontSize: `clamp(${STYLES.title.fontSize.min}, ${STYLES.title.fontSize.preferred}, ${STYLES.title.fontSize.max})`,
          letterSpacing: STYLES.title.letterSpacing,
          filter: `drop-shadow(${STYLES.title.shadow})`,
        }}
      >
        {title}
      </motion.h1>

      {/* Descripción */}
      <motion.div 
        initial={STYLES.description.animation.initial}
        whileInView={STYLES.description.animation.animate}
        viewport={{ once: true }}
        transition={{ 
          duration: STYLES.description.animation.duration, 
          delay: STYLES.description.animation.delay 
        }}
        className={`
          absolute z-30 text-center flex flex-col items-center
          ${STYLES.description.width}
          ${STYLES.description.padding}
          ${STYLES.description.position.mobile} ${STYLES.description.position.desktop}
          left-1/2 -translate-x-1/2
        `}
      >
        <p className={`font-inter leading-relaxed drop-shadow-md ${STYLES.description.opacity}`}>
          {description}
        </p>
      </motion.div>
    </div>
  );
};

export default PageHeroe;