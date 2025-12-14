import React, { useEffect } from 'react'; 
import Navbar from '../components/Navbar';
import MasonryGrid from '../components/MasonryGrid'; // Componente de Galería
import PageHeroe from '../components/PageHeroe'; // Nuevo Componente Héroe

// --- IMÁGENES (Solo importamos lo que usaremos aquí) ---
import img1 from '../assets/proyecto-guitarra.jpg'; 
import img2 from '../assets/proyecto-cereza.jpg';
import img3 from '../assets/servicio-branding.jpg';
import img4 from '../assets/servicio-digital.jpg';
import collageBg from '../assets/collage-bd.png'; 

// --- DATA ESPECÍFICA DE BRANDING ---
const BRANDING_COLOR = '#FF4D00'; // Naranja
const BRANDING_TITLE = 'BRANDING';
const BRANDING_DESCRIPTION = 'Rompemos moldes para crear identidades con carácter. Transformamos conceptos abstractos en experiencias visuales.';

// Lista de imágenes para el Grid
const rawImages = [
  img3, img1, img4, img2, img1, 
  img3, img2, img4, img1, img3, 
  img2, img4, img1, img3, img2, 
  img4, img1, img3, img2, img1,
  img3, img4, img2, img1
];


const Branding = () => {
  
  // --- SCROLL TO TOP ---
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#0F0E0E] min-h-screen w-full relative overflow-x-hidden flex flex-col">
      <Navbar />

      <div className="w-full flex flex-col">
        
        {/* HERO SECTION - Ahora es una sola línea de código */}
        <PageHeroe 
          title={BRANDING_TITLE}
          description={BRANDING_DESCRIPTION}
          collageBg={collageBg}
          color={BRANDING_COLOR}
        />

        {/* GRID CONTAINER */}
        <div className="-mt-64 relative z-20"></div>
        <MasonryGrid rawImages={rawImages} />
        <div className="-mt-64 relative z-20"></div>
        
      </div>

      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.08] mix-blend-overlay"
           style={{ backgroundImage: "url('/noise.png')" }}>
      </div>

    </div>
  );
};
export default Branding;