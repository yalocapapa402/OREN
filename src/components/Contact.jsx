import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  // Detectamos si es móvil para simplificar animaciones de alto consumo
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <section className="relative w-full z-20 pb-20 px-6 md:px-[62px] pt-32 bg-[#0F0E0E] overflow-hidden">
      
      {/* TEXTO DE FONDO: Animado en PC, Estático en Móvil para rendimiento óptimo */}
      <motion.div 
        initial={isMobile ? { x: 0, opacity: 0.02 } : { x: "10%", opacity: 0.02 }}
        animate={!isMobile ? { x: "-10%" } : {}}
        transition={{ duration: 20, repeat: Infinity, repeatType: "mirror", ease: "linear" }}
        className="absolute top-0 left-0 whitespace-nowrap pointer-events-none select-none"
      >
        <span className="font-anton text-[15rem] md:text-[20rem] uppercase text-white">GET IN TOUCH • BE CREATIVE • </span>
      </motion.div>

      {/* --- BLOQUE 1: PROPUESTA DE VALOR --- */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-40 items-start relative z-10">
        
        <div className="md:col-span-7 flex flex-col items-start">
          <motion.div
            initial={{ opacity: 0, y: isMobile ? 10 : 30 }} // Salto más corto en móvil
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: isMobile ? 0.4 : 0.8 }} // Animación más rápida en móvil
          >
            <span className="text-[#E6E1D1] font-inter text-[10px] tracking-[0.5em] uppercase mb-4 block opacity-50">
              Sobre el estudio
            </span>
            <h2 className="font-anton text-[3.8rem] md:text-[7rem] uppercase text-[#F5F5F0] leading-[0.9] mb-12 tracking-tighter">
              ¿POR QUÉ <br />
              <span className="text-transparent" style={{ WebkitTextStroke: isMobile ? '0.5px #E6E1D1' : '1px #E6E1D1' }}>ELEGIR O'REN?</span>
            </h2>
          </motion.div>

          <motion.button 
            whileHover={!isMobile ? { scale: 1.05, letterSpacing: "0.3em" } : {}}
            whileTap={{ scale: 0.95 }}
            className="bg-[#E6E1D1] text-[#0F0E0E] font-inter font-bold text-[10px] md:text-xs px-10 py-4 uppercase tracking-[0.2em] transition-all duration-500 w-[248px] h-[60px] rounded-[50px] shadow-2xl hover:bg-white will-change-transform"
          >
            Contáctanos
          </motion.button>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: isMobile ? 0.1 : 0.4 }}
          className="md:col-span-5 pt-4 md:pt-24"
        >
          <div className="w-12 h-[1px] bg-[#E6E1D1] mb-8 opacity-50" /> 
          <p className="font-inter text-[#E6E1D1] text-[16px] md:text-[19px] leading-[1.7] opacity-60 font-light italic">
            "Empoderamos marcas para construir campañas impactantes y soluciones digitales sólidas, donde la <span className="text-white opacity-100 not-italic font-medium">innovación</span> se encuentra con la <span className="text-white opacity-100 not-italic font-medium">autenticidad</span>."
          </p>
        </motion.div>
      </div>

      {/* --- BLOQUE 2: EL "BIG CALL TO ACTION" --- */}
      <div className="flex flex-col items-center justify-center text-center py-10 md:py-32 relative">
        
        <div className="relative group">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`font-anton text-[4.2rem] md:text-[14rem] uppercase text-[#E6E1D1] leading-[0.8] tracking-tighter transition-all duration-700 ${!isMobile ? 'group-hover:tracking-normal' : ''}`}
          >
            MÁNDANOS <br />
            <span className={`transition-colors duration-700 ${!isMobile ? 'text-transparent hover:text-[#E6E1D1]' : 'text-transparent'}`} style={{ WebkitTextStroke: isMobile ? '1px #E6E1D1' : '1.5px #E6E1D1' }}>TU IDEA</span>
          </motion.h2>
          
          {/* OPTIMIZACIÓN DE BLUR: Menos radio en móvil para no saturar la GPU */}
          <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E6E1D1] opacity-[0.05] pointer-events-none ${isMobile ? 'w-[200px] h-[200px] blur-[50px]' : 'w-[400px] h-[400px] blur-[150px]'}`} />
        </div>

        {/* EMAIL */}
        <div className="mt-12 md:mt-16 group relative inline-block">
            <motion.a 
              href="mailto:orendising@gmail.com"
              className={`font-inter text-[#F5F5F0] text-xl md:text-4xl font-light tracking-tighter block transition-transform duration-500 ${!isMobile ? 'group-hover:-translate-y-2' : ''}`}
            >
              orendising@gmail.com
            </motion.a>
            <div className="h-[1px] w-full bg-white/20 mt-2 overflow-hidden">
                <div className={`h-full w-full bg-[#E6E1D1] translate-x-[-100%] transition-transform duration-700 ${!isMobile ? 'group-hover:translate-x-[0%]' : ''}`} />
            </div>
        </div>

        {/* SOCIAL LINKS */}
        <div className="flex gap-8 md:gap-12 mt-20 md:mt-24">
           {['Instagram', 'Behance', 'LinkedIn'].map((link, i) => (
             <motion.a 
               key={link} 
               href="#" 
               initial={isMobile ? { opacity: 0.4 } : { opacity: 0 }}
               whileInView={{ opacity: 0.4 }}
               whileHover={!isMobile ? { opacity: 1, y: -5 } : {}}
               viewport={{ once: true, delay: isMobile ? 0 : i * 0.1 }}
               className="font-inter text-[9px] md:text-[10px] uppercase tracking-[0.3em] transition-all"
             >
               {link}
             </motion.a>
           ))}
        </div>
      </div>

    </section>
  );
};

export default Contact;