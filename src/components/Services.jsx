import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; 

import imgBranding from '../assets/servicio-branding.jpg';
import imgDigital from '../assets/servicio-digital.jpg';
import imgFoto from '../assets/servicio-foto.jpg';
import imgWeb from '../assets/servicio-web.jpg';

const services = [
  { 
    id: 1, 
    title: "Produccion Multimedia", 
    img: imgBranding,
    link: "/Produccion multimedia",
    offering: "Grabación de video | Reels & TikTok | Edición Profesional"
  },
  { 
    id: 2, 
    title: "Diseño Grafico", 
    img: imgDigital,
    link: "/Diseño Grafico",
    offering: "Flyers y Posters | Contenido para Redes | Identidad Visual"
  },
  { 
    id: 3, 
    title: "Fotografía", 
    img: imgFoto,
    link: "/fotografia",
    offering: "Fotografía de Producto | Retrato Corporativo | Eventos"
  },
  { 
    id: 4, 
    title: "Diseño Web", 
    img: imgWeb,
    link: "/web",
    offering: "E-Commerce | Landing Pages | Blogs & Portafolios"
  }
];

const Services = () => {
  return (
    <section className="relative w-full z-20 pb-40 px-6 md:px-[62px]">
      <div className="flex flex-col items-center text-center mb-20">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-anton text-[3.5rem] md:text-[6rem] uppercase text-[#F5F5F0] leading-none mb-6"
        >
          Nuestros Servicios
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, delay: 0.2 }}
          className="font-inter text-[#E6E1D1] max-w-2xl text-[16px] md:text-[18px] opacity-80"
        >
          Rompemos moldes para crear identidades con carácter. 
          Transformamos conceptos abstractos en experiencias visuales.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {services.map((service, index) => (
          <Link key={service.id} to={service.link} className="block w-full">
              <ServiceCard service={service} index={index} />
          </Link>
        ))}
      </div>
    </section>
  );
};

const ServiceCard = ({ service, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    className="w-full relative group cursor-pointer overflow-hidden rounded-sm"
  >
    <div className="aspect-[748/694] w-full relative">
      <img 
        src={service.img} 
        alt={service.title} 
        className="w-full h-full object-cover transition-transform duration-1000 ease-in-out md:group-hover:scale-110"
      />
      
      {/* Overlay: Siempre visible en móvil con opacidad fija, animado en Desktop */}
      <div className="absolute inset-0 bg-black/60 md:bg-black/40 md:group-hover:bg-black/75 transition-all duration-500" />
      
      {/* Contenido Central */}
      <div className="absolute inset-0 flex flex-col justify-center items-center p-8 text-center">
        
        {/* TÍTULO H3: Siempre visible */}
        <h3 className="font-anton text-4xl md:text-6xl text-[#F5F5F0] uppercase tracking-wide leading-tight mb-4">
          {service.title}
        </h3>
        
        {/* LÍNEA DIVISORA: Más ancha en móvil por defecto, animada en Desktop */}
        <div className="w-20 md:w-12 h-[1px] bg-[#E6E1D1] opacity-50 mb-6 transition-all duration-500 md:group-hover:w-24" />

        {/* --- H4 MEJORADO --- */}
        {/* Visible en móvil (opacity-100), oculto en Desktop (md:opacity-0) hasta el hover */}
        <h4 className="font-inter text-[#E6E1D1] text-[11px] md:text-[13px] uppercase tracking-[0.15em] leading-relaxed max-w-[90%] md:max-w-[80%] opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500 md:delay-100">
          {service.offering}
        </h4>

        {/* BOTÓN "VER PORTAFOLIO": Visible en móvil, oculto en Desktop hasta el hover */}
        <span className="font-inter text-[#E6E1D1] mt-8 text-[10px] uppercase tracking-[0.3em] font-bold border border-white/20 px-4 py-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500 md:delay-200">
          Ver portafolio
        </span>

      </div>
    </div>
  </motion.div>
);

export default Services;