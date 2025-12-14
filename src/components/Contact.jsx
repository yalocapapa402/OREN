import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section className="relative w-full z-20 pb-20 px-6 md:px-[62px] pt-20">
      
      {/* --- BLOQUE 1: ¿POR QUÉ ELEGIR O'REN? --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 mb-40 items-start">
        
        {/* COLUMNA IZQUIERDA: Título y Botón */}
        <div className="flex flex-col items-start">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-anton text-[3.5rem] md:text-[5rem] uppercase text-[#F5F5F0] leading-[0.9] mb-8"
          >
            ¿POR QUÉ <br />
            ELEGIR O'REN?
          </motion.h2>

          <motion.button 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#E6E1D1] text-[#0F0E0E] font-inter font-bold text-xs px-8 py-3 uppercase tracking-wider hover:bg-white transition-colors"
          >
            Contactanos
          </motion.button>
        </div>

        {/* COLUMNA DERECHA: Párrafo */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, delay: 0.3 }}
          className="font-inter text-[#E6E1D1] text-[15px] md:text-[16px] leading-relaxed md:leading-loose opacity-80 text-justify md:text-left"
        >
          <p>
            O'REN es un estudio creativo de vanguardia que empodera a las marcas 
            para construir campañas impactantes y soluciones digitales sólidas. 
            Desde hace una década, lideramos el camino en la evolución del diseño 
            y la estrategia visual, combinando innovación con autenticidad en el 
            núcleo de todo lo que hacemos. Creemos profundamente en el poder 
            transformador de la creatividad multidisciplinaria para redefinir la 
            publicidad tradicional, creando conexiones significativas y entregando 
            resultados que verdaderamente importan.
          </p>
        </motion.div>

      </div>

      {/* --- BLOQUE 2: MÁNDANOS TU IDEA (CIERRE) --- */}
      <div className="flex flex-col items-center justify-center text-center mt-20 md:mt-40 mb-20">
        
        {/* TÍTULO GIGANTE */}
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-anton text-[5rem] md:text-[11rem] uppercase text-[#E6E1D1] leading-[0.85] tracking-tight"
        >
          MÁNDANOS <br />
          TU IDEA
        </motion.h2>

        {/* EMAIL */}
        <motion.a 
          href="mailto:orendising@gmail.com"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, delay: 0.5 }}
          className="font-inter text-[#F5F5F0] mt-8 text-lg md:text-xl opacity-60 hover:opacity-100 transition-opacity cursor-pointer tracking-wider"
        >
          orendising@gmail.com
        </motion.a>

      </div>

    </section>
  );
};

export default Contact;