// src/components/MasonryGrid.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// ============================================
// 1. PhotoCard COMPONENT
// ============================================
const PhotoCard = ({ photo, index, rounded, navigateToProject }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "10%" }}
    transition={{ duration: 0.4, delay: index * 0.02 }}
    className={`relative group cursor-pointer overflow-hidden ${rounded} w-full mb-4`}
    onClick={() => navigateToProject(photo)}
  >
    <div className={`w-full ${photo.aspectClass} relative`}>
      <img
        src={photo.src}
        alt="Galería"
        className={`w-full h-full object-cover transition-all duration-700 ease-in-out hover:scale-105 ${rounded} absolute inset-0`}
      />
    </div>
  </motion.div>
);

// ============================================
// 2. MasonryGrid COMPONENT
// ============================================
const MasonryGrid = ({ rawImages }) => {
  const navigate = useNavigate();

  // --- LÓGICA DE NAVEGACIÓN CORREGIDA ---
  const navigateToProject = (photo) => {
    // Cambiamos "/proyectos/" por "/project/" para que coincida con main.jsx
    if (photo.slug) {
      navigate(`/project/${photo.slug}`);
    }
  };

  // Definimos 4 tamaños para que el patrón sea más dinámico en 4 columnas
  const sizes = [
    "aspect-[310.71/320.36]", // Pequeño
    "aspect-[310.71/403.34]", // Mediano
    "aspect-[310.71/488.25]", // Grande
    "aspect-[310.71/360.00]"  // Extra
  ];

  // --- LÓGICA DE DISTRIBUCIÓN PARA ESCRITORIO (4 COLUMNAS) ---
  const numColumns = 4;
  const desktopColumns = Array.from({ length: numColumns }, () => []);

  rawImages.forEach((photo, index) => {
    const aspectClass = sizes[index % sizes.length]; 
    
    const photoObj = {
      ...photo,
      id: `desk-${index}`,
      aspectClass: aspectClass
    };

    desktopColumns[index % numColumns].push(photoObj);
  });

  // --- LÓGICA PARA MÓVIL (3 columnas) ---
  const generateFixedColumn = (sizeIndex, colId) => {
    return Array.from({ length: 6 }).map((_, i) => {
      const imgIndex = (i + colId) % rawImages.length;
      return {
        id: `col-${colId}-row-${i}`,
        src: rawImages[imgIndex].src,
        slug: rawImages[imgIndex].slug,
        aspectClass: sizes[sizeIndex] 
      };
    });
  };

  const mobileCol1 = generateFixedColumn(0, 0);
  const mobileCol2 = generateFixedColumn(1, 1);
  const mobileCol3 = generateFixedColumn(2, 2);

  return (
    <div className="px-6 md:px-[62px] pb-40 relative z-20 bg-[#0F0E0E] pt-16">
      
      {/* MÓVIL: 3 columnas */}
      <div className="flex md:hidden flex-row gap-4 justify-center">
        {[mobileCol1, mobileCol2, mobileCol3].map((column, colIdx) => (
          <div key={`mob-col-${colIdx}`} className="flex flex-col gap-4 w-1/3">
            {column.map((photo, i) => (
              <PhotoCard 
                key={photo.id} 
                photo={photo} 
                index={i} 
                rounded="rounded-md" 
                navigateToProject={navigateToProject} 
              />
            ))}
          </div>
        ))}
      </div>

      {/* ESCRITORIO: 4 COLUMNAS */}
      <div className="hidden md:flex flex-row gap-4">
        {desktopColumns.map((column, colIdx) => (
          <div key={`desk-col-${colIdx}`} className="flex flex-col w-1/4 gap-4"> 
            {column.map((photo, i) => (
              <PhotoCard 
                key={photo.id} 
                photo={photo} 
                index={i} 
                rounded="rounded-xl" 
                navigateToProject={navigateToProject} 
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MasonryGrid;