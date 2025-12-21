import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.3 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    return (
        <div className="bg-[#0F0E0E] min-h-screen w-full relative overflow-x-hidden flex flex-col font-['Inter'] selection:bg-white selection:text-black">
            <Navbar />

            <main className="pt-48 pb-32 px-6 md:px-[62px] w-full max-w-[1600px] mx-auto flex-grow">
                
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24"
                >
                    {/* COLUMNA IZQUIERDA: MANIFIESTO */}
                    <div className="lg:col-span-7 space-y-16">
                        <motion.div variants={itemVariants}>
                            <span className="text-[10px] text-white/30 tracking-[0.6em] uppercase block mb-8">/ EL ESTUDIO</span>
                            <h1 className="text-white text-6xl md:text-[8rem] font-['Anton'] uppercase leading-[0.85] tracking-tighter">
                                CREAMOS <br /> 
                                <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>NARRATIVAS</span> <br />
                                VISUALES.
                            </h1>
                        </motion.div>

                        <motion.div variants={itemVariants} className="max-w-xl space-y-8">
                            <p className="text-white/80 text-lg md:text-2xl leading-relaxed font-light italic">
                                "En O'REN STUDIO, no solo diseñamos; construimos puentes entre las marcas y su audiencia a través de la autenticidad y la innovación visual."
                            </p>
                            <p className="text-white/50 text-base md:text-lg leading-relaxed">
                                Basados en Hermosillo, Sonora, nos especializamos en transformar conceptos complejos en experiencias visuales memorables. Nuestra filosofía se centra en el minimalismo estratégico y la excelencia técnica en cada detalle.
                            </p>
                        </motion.div>
                    </div>

                    {/* COLUMNA DERECHA: ENFOQUE Y SERVICIOS */}
                    <div className="lg:col-span-5 lg:pt-40 space-y-24">
                        <motion.div variants={itemVariants} className="space-y-12">
                            <div className="space-y-6">
                                <h4 className="text-[9px] text-white/30 uppercase tracking-[0.5em]">/ NUESTRO ENFOQUE</h4>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4">
                                        <span className="text-white/20 font-mono text-xs pt-1">01</span>
                                        <p className="text-white text-lg">Estrategia visual coherente y disruptiva.</p>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <span className="text-white/20 font-mono text-xs pt-1">02</span>
                                        <p className="text-white text-lg">Atención obsesiva al detalle y la composición.</p>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <span className="text-white/20 font-mono text-xs pt-1">03</span>
                                        <p className="text-white text-lg">Innovación constante en medios digitales.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-16 border-t border-white/5 space-y-8">
                                <h4 className="text-[9px] text-white/30 uppercase tracking-[0.5em]">/ CAPACIDADES</h4>
                                <ul className="grid grid-cols-2 gap-y-4 gap-x-8 text-white/60 text-xs uppercase tracking-widest font-bold">
                                    <li className="hover:text-white transition-colors">• Fotografía</li>
                                    <li className="hover:text-white transition-colors">• Diseño Gráfico</li>
                                    <li className="hover:text-white transition-colors">• Web Design</li>
                                    <li className="hover:text-white transition-colors">• Multimedia</li>
                                    <li className="hover:text-white transition-colors">• Branding</li>
                                    <li className="hover:text-white transition-colors">• UI / UX</li>
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* SECCIÓN INFERIOR: BIG STATEMENT */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    viewport={{ once: true }}
                    className="mt-40 pt-40 border-t border-white/5 text-center"
                >
                    <h2 className="text-white/5 text-[12vw] font-['Anton'] uppercase leading-none select-none">
                        O'REN STUDIO
                    </h2>
                    <div className="max-w-2xl mx-auto -mt-10 md:-mt-20">
                         <p className="text-white/40 text-sm md:text-base tracking-[0.2em] uppercase mb-12">
                            Listo para llevar tu marca al siguiente nivel.
                         </p>
                         <motion.a 
                            href="/contacto"
                            whileHover={{ scale: 1.05, backgroundColor: "#ffffff", color: "#000000" }}
                            className="inline-block px-16 py-6 border border-white/10 text-white text-[10px] uppercase tracking-[0.5em] font-bold transition-all duration-500"
                         >
                            Hablemos de tu proyecto
                         </motion.a>
                    </div>
                </motion.div>
            </main>

            {/* Ruido sutil */}
            <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.02] mix-blend-overlay"
                 style={{ backgroundImage: "url('/noise.png')" }}>
            </div>
        </div>
    );
};

export default About;