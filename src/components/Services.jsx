import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; 

// Importa tus imágenes
import imgBranding from '../assets/servicio-branding.jpg';
import imgDigital from '../assets/servicio-digital.jpg';
import imgFoto from '../assets/servicio-foto.jpg';
import imgWeb from '../assets/servicio-web.jpg';

const services = [
  { 
    id: 1, 
    title: "Branding", 
    img: imgBranding,
    link: "/branding" // Ahora SÍ funcionará
  },
  { 
    id: 2, 
    title: "Diseño Digital", 
    img: imgDigital,
    link: "/digital" 
  },
  { 
    id: 3, 
    title: "Fotografía", 
    img: imgFoto,
    link: "/fotografia" 
  },
  { 
    id: 4, 
    title: "Diseño Web", 
    img: imgWeb,
    link: "/web" 
  }
];

const Services = () => {
  return (
    <section className="relative w-full z-20 pb-40 px-6 md:px-[62px]">
      
      {/* CABECERA */}
      <div className="flex flex-col items-center text-center mb-20">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-anton text-[4rem] md:text-[6rem] uppercase text-[#F5F5F0] leading-none mb-6"
        >
          Nuestros Servicios
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, delay: 0.2 }}
          className="font-inter text-[#E6E1D1] max-w-2xl text-[18px] opacity-80"
        >
          Rompemos moldes para crear identidades con carácter. 
          Transformamos conceptos abstractos en experiencias visuales.
        </motion.p>
      </div>

      {/* GRID 2x2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        
        {services.map((service, index) => (
          
          /* --- CORRECCIÓN --- */
          /* Quitamos el 'if' (service.id === 3). */
          /* Ahora TODOS son Links y usan su propiedad 'service.link' */
          
          <Link key={service.id} to={service.link} className="block w-full">
             <ServiceCard service={service} index={index} />
          </Link>

        ))}
      </div>
    </section>
  );
};

/* COMPONENTE DE TARJETA (Sin cambios) */
const ServiceCard = ({ service, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    className="w-full relative group cursor-pointer overflow-hidden"
  >
    <div className="aspect-[748/694] w-full relative">
      <img 
        src={service.img} 
        alt={service.title} 
        className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105 filter grayscale-0"
      />
      
      <div className="absolute inset-0 bg-black/60 md:bg-black/40 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="absolute inset-0 flex flex-col justify-center items-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 transform translate-y-0 md:translate-y-4 md:group-hover:translate-y-0">
        <h3 className="font-anton text-4xl md:text-6xl text-[#F5F5F0] uppercase tracking-wide px-2 text-center">
          {service.title}
        </h3>
        <p className="font-inter text-[#E6E1D1] mt-2 text-sm uppercase tracking-widest hidden md:block">
          Ver portafolio
        </p>
      </div>
    </div>
  </motion.div>
);

export default Services;