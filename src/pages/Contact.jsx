import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    return (
        <div className="bg-[#0F0E0E] min-h-screen w-full relative overflow-x-hidden flex flex-col font-['Inter'] selection:bg-white selection:text-black">
            <Navbar />

            <main className="pt-48 pb-20 px-6 md:px-[62px] w-full max-w-[1600px] mx-auto flex-grow">
                
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24"
                >
                    {/* COLUMNA IZQUIERDA: TÍTULO Y FORMULARIO */}
                    <div className="lg:col-span-7 space-y-24">
                        <motion.div variants={itemVariants} className="relative">
                            <span className="text-[10px] text-white/30 tracking-[0.6em] uppercase block mb-12">/ CONTACTO</span>
                            
                            <div className="flex flex-col space-y-2"> 
                                <h1 className="text-white text-6xl md:text-[9.5rem] font-['Anton'] uppercase leading-none tracking-tighter">
                                    ¿TIENES UNA
                                </h1>
                                <h1 className="text-transparent text-6xl md:text-[11rem] font-['Anton'] uppercase leading-[0.9] tracking-tighter" 
                                    style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>
                                    VISIÓN?
                                </h1>
                            </div>
                        </motion.div>

                        {/* FORMULARIO CONECTADO A FORMSPREE */}
                        <motion.form 
                            action="https://formspree.io/f/mojawaqo" 
                            method="POST"
                            variants={itemVariants} 
                            className="space-y-12 max-w-2xl pt-10"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div className="group space-y-3 border-b border-white/10 pb-4 focus-within:border-white/50 transition-all">
                                    <label className="text-[9px] text-white/30 uppercase tracking-[0.3em] group-focus-within:text-white transition-colors">Nombre</label>
                                    <input name="nombre" type="text" placeholder="Tu nombre" required className="bg-transparent w-full text-white text-sm outline-none placeholder:text-white/5" />
                                </div>
                                <div className="group space-y-3 border-b border-white/10 pb-4 focus-within:border-white/50 transition-all">
                                    <label className="text-[9px] text-white/30 uppercase tracking-[0.3em] group-focus-within:text-white transition-colors">Email</label>
                                    <input name="email" type="email" placeholder="orendising@gmail.com" required className="bg-transparent w-full text-white text-sm outline-none placeholder:text-white/5" />
                                </div>
                            </div>
                            
                            <div className="group space-y-3 border-b border-white/10 pb-4 focus-within:border-white/50 transition-all">
                                <label className="text-[9px] text-white/30 uppercase tracking-[0.3em] group-focus-within:text-white transition-colors">Servicio de Interés</label>
                                <select name="servicio" className="bg-transparent w-full text-white text-sm outline-none cursor-pointer appearance-none">
                                    <option className="bg-[#0F0E0E]" value="Fotografia">Fotografía / Retrato</option>
                                    <option className="bg-[#0F0E0E]" value="Diseno Grafico">Diseño Gráfico</option>
                                    <option className="bg-[#0F0E0E]" value="Web Design">Web Design / UI-UX</option>
                                    <option className="bg-[#0F0E0E]" value="Multimedia">Producción Multimedia</option>
                                </select>
                            </div>

                            <div className="group space-y-3 border-b border-white/10 pb-4 focus-within:border-white/50 transition-all">
                                <label className="text-[9px] text-white/30 uppercase tracking-[0.3em] group-focus-within:text-white transition-colors">Tu Mensaje</label>
                                <textarea name="mensaje" rows="3" placeholder="Cuéntanos un poco más..." required className="bg-transparent w-full text-white text-sm outline-none placeholder:text-white/5 resize-none"></textarea>
                            </div>

                            <motion.button 
                                type="submit"
                                whileHover={{ backgroundColor: "#ffffff", color: "#000000" }}
                                whileTap={{ scale: 0.98 }}
                                className="px-12 py-5 border border-white/10 text-white text-[10px] uppercase tracking-[0.4em] font-bold transition-all duration-500 hover:border-white cursor-pointer"
                            >
                                Enviar Propuesta
                            </motion.button>
                        </motion.form>
                    </div>

                    {/* COLUMNA DERECHA: INFO DE CONTACTO */}
                    <div className="lg:col-span-5 lg:pt-72 space-y-24">
                        <motion.div variants={itemVariants} className="space-y-16">
                            <div className="space-y-4">
                                <h4 className="text-[9px] text-white/20 uppercase tracking-[0.5em]">/ EMAIL</h4>
                                <a href="mailto:orendising@gmail.com" className="text-white text-2xl md:text-3xl font-light hover:opacity-50 transition-opacity block italic">
                                    orendising@gmail.com
                                </a>
                            </div>

                            <div className="space-y-4">
                                <h4 className="text-[9px] text-white/20 uppercase tracking-[0.5em]">/ UBICACIÓN</h4>
                                <p className="text-white text-2xl md:text-3xl font-light tracking-tight italic">
                                    HERMOSILLO, SONORA. <br /> MÉXICO
                                </p>
                            </div>
                        </motion.div>

                        <motion.div variants={itemVariants} className="pt-20 border-t border-white/5">
                            <h4 className="text-[9px] text-white/20 uppercase tracking-[0.5em] mb-10">/ SOCIAL</h4>
                            <div className="flex flex-wrap gap-x-12 gap-y-6">
                                {['Instagram', 'Behance', 'LinkedIn'].map((social) => (
                                    <a key={social} href="#" className="text-white/40 text-[10px] uppercase tracking-[0.3em] hover:text-white transition-colors font-bold">
                                        {social}
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </main>

            <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.02] mix-blend-overlay"
                 style={{ backgroundImage: "url('/noise.png')" }}>
            </div>
        </div>
    );
};

export default Contact;