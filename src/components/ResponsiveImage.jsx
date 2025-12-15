// ResponsiveImage.jsx (VERSIÓN FINAL Y CORRECTA)

import React from 'react';

const ResponsiveImage = ({ srcMobile, srcDesktop, alt }) => {
  return (
    <>
      {/* 1. IMAGEN PARA MÓVILES (Oculta a partir de MD) */}
      <img
        src={srcMobile}
        alt={`${alt} (Móvil)`}
        className="w-full h-full object-cover md:hidden"
      />

      {/* 2. IMAGEN PARA ESCRITORIO (DEBE TENER 'hidden' para ocultarse en móvil) */}
      <img
        src={srcDesktop}
        alt={`${alt} (Escritorio)`}
        className="w-full h-full object-cover hidden md:block" // 🛑 Asegúrate que 'hidden' esté aquí
      />
    </>
  );
};

export default ResponsiveImage;