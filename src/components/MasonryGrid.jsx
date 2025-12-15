import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// ============================================
// 1. COMPONENTE MODAL/LIGHTBOX
// ============================================

const GalleryModal = ({ src, alt, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[999] bg-black bg-opacity-90 flex items-center justify-center p-4 cursor-zoom-out"
      onClick={onClose}
    >
      <div className="max-w-4xl max-h-full">
        <img
          src={src}
          alt={alt}
          className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl cursor-default"
          onClick={(e) => e.stopPropagation()} // Evita cerrar si hace click en la imagen
        />
      </div>
      <button 
        className="absolute top-4 right-4 text-white text-3xl font-light p-2 transition-transform hover:scale-110"
        onClick={onClose}
      >
        &times;
      </button>
    </motion.div>
  );
};


// ============================================
// 2. PhotoCard COMPONENT
// ============================================

const PhotoCard = ({ photo, index, rounded, onClick }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "10%" }}
    transition={{ duration: 0.4, delay: index * 0.02 }}
    className={`relative group cursor-pointer overflow-hidden ${rounded} w-full`}
    onClick={() => onClick(photo)}
  >
    <div className={`w-full ${photo.aspectClass} relative`}>
      <img 
        src={photo.src} 
        alt="Galería Móvil"
        // Se quitó el filtro grayscale para que las imágenes se vean en color
        className={`w-full h-full object-cover transition-all duration-700 ease-in-out hover:scale-105 ${rounded} absolute inset-0`}
      />
    </div>
  </motion.div>
);


// ============================================
// 3. MasonryGrid COMPONENT (Lógica principal)
// ============================================

const MasonryGrid = ({ rawImages }) => {
  const [selectedPhoto, setSelectedPhoto] = useState(null); 

  // Manejadores del Modal
  const openModal = (photo) => setSelectedPhoto(photo);
  const closeModal = () => setSelectedPhoto(null);
  
  // EFECTO SECUNDARIO PARA CONGELAR EL SCROLL DEL BODY
  useEffect(() => {
    if (selectedPhoto) {
      document.body.style.overflow = 'hidden'; 
    } else {
      document.body.style.overflow = 'unset'; 
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedPhoto]);


  // LÓGICA MÓVIL (S-M-L) - Se mantiene
  const mobileSizes = [
    "aspect-[130.13/130.13]", 
    "aspect-[130.14/165]",    
    "aspect-[130.14/200]"     
  ];

  const generateFixedColumn = (sizeIndex, colId) => {
    return Array.from({ length: 6 }).map((_, i) => {
      const imgIndex = (i + colId) % rawImages.length;
      return {
        id: `col-${colId}-row-${i}`,
        src: rawImages[imgIndex],
        aspectClass: mobileSizes[sizeIndex] 
      };
    });
  };

  const mobileCol1 = generateFixedColumn(0, 0);
  const mobileCol2 = generateFixedColumn(1, 1);
  const mobileCol3 = generateFixedColumn(2, 2);

  const desktopPhotos = rawImages.map((src, index) => {
    const positionInCycle = index % 3; 
    let aspectClass = "";
    if (positionInCycle === 0) aspectClass = "aspect-[310.71/320.36]"; 
    else if (positionInCycle === 1) aspectClass = "aspect-[310.71/403.34]"; 
    else aspectClass = "aspect-[310.71/488.25]"; 
    return { id: `desk-${index}`, src: src, aspectClass: aspectClass };
  });


  return (
    <>
      <div className="px-6 md:px-[62px] pb-40 relative z-20 bg-[#0F0E0E] pt-16">
            
        {/* MÓVIL */}
        <div className="flex md:hidden flex-row gap-4 justify-center">
          <div className="flex flex-col gap-4 w-1/3">
            {mobileCol1.map((photo, i) => (
              <PhotoCard key={photo.id} photo={photo} index={i} rounded="rounded-md" onClick={openModal} />
            ))}
          </div>
          <div className="flex flex-col gap-4 w-1/3">
            {mobileCol2.map((photo, i) => (
              <PhotoCard key={photo.id} photo={photo} index={i} rounded="rounded-md" onClick={openModal} />
            ))}
          </div>
          <div className="flex flex-col gap-4 w-1/3">
            {mobileCol3.map((photo, i) => (
              <PhotoCard key={photo.id} photo={photo} index={i} rounded="rounded-md" onClick={openModal} />
            ))}
          </div>
        </div>

        {/* ESCRITORIO */}
        <div className="hidden md:block columns-3 lg:columns-4 xl:columns-5 gap-4">
            {desktopPhotos.map((photo, index) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="break-inside-avoid mb-4 relative group cursor-pointer overflow-hidden rounded-xl"
                onClick={() => openModal(photo)}
              >
                <div className={`w-full ${photo.aspectClass} relative`}>
                    <img 
                      src={photo.src} 
                      alt="Galería"
                      // Se quitó el filtro grayscale para que las imágenes se vean en color
                      className="w-full h-full object-cover transition-all duration-700 ease-in-out hover:scale-105 rounded-xl absolute inset-0"
                    />
                </div>
              </motion.div>
            ))}
        </div>

      </div>

      {/* RENDERIZADO CONDICIONAL DEL MODAL CON ANIMATEPRESENCE */}
      <AnimatePresence>
        {selectedPhoto && (
          <GalleryModal 
            src={selectedPhoto.src} 
            alt={selectedPhoto.id} 
            onClose={closeModal} 
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default MasonryGrid;