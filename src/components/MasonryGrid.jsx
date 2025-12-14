import React from 'react';
import { motion } from 'framer-motion';

const PhotoCard = ({ photo, index, rounded }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "10%" }}
    transition={{ duration: 0.4, delay: index * 0.02 }}
    className={`relative group cursor-pointer overflow-hidden ${rounded} w-full`}
  >
    <div className={`w-full ${photo.aspectClass} relative`}>
      <img 
        src={photo.src} 
        alt="Galería Móvil"
        className={`w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out hover:scale-105 ${rounded} absolute inset-0`}
      />
    </div>
  </motion.div>
);

const MasonryGrid = ({ rawImages }) => {

  // LÓGICA MÓVIL (S-M-L)
  const mobileSizes = [
    "aspect-[130.13/130.13]", 
    "aspect-[130.14/165]",    
    "aspect-[130.14/200]"     
  ];

  // Necesitamos la lógica del `generateFixedColumn` y `desktopPhotos` aquí
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
    <div className="px-6 md:px-[62px] pb-40 relative z-20 bg-[#0F0E0E] pt-16">
          
      {/* MÓVIL */}
      <div className="flex md:hidden flex-row gap-4 justify-center">
        <div className="flex flex-col gap-4 w-1/3">
          {mobileCol1.map((photo, i) => (
            <PhotoCard key={photo.id} photo={photo} index={i} rounded="rounded-md" />
          ))}
        </div>
        <div className="flex flex-col gap-4 w-1/3">
          {mobileCol2.map((photo, i) => (
            <PhotoCard key={photo.id} photo={photo} index={i} rounded="rounded-md" />
          ))}
        </div>
        <div className="flex flex-col gap-4 w-1/3">
          {mobileCol3.map((photo, i) => (
            <PhotoCard key={photo.id} photo={photo} index={i} rounded="rounded-md" />
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
            >
              <div className={`w-full ${photo.aspectClass} relative`}>
                  <img 
                    src={photo.src} 
                    alt="Galería"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out hover:scale-105 rounded-xl absolute inset-0"
                  />
              </div>
            </motion.div>
          ))}
      </div>

    </div>
  );
};

export default MasonryGrid;