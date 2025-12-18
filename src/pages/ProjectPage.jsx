import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion'; // Para animaciones fluidas
import Navbar from '../components/Navbar';
import { PROJECT_DETAILS } from '../data/galleryData';

const ProjectPage = () => {
    const { projectSlug } = useParams();
    const navigate = useNavigate();
    const project = PROJECT_DETAILS[projectSlug];
    
    // ESTADO PARA EL LIGHTBOX
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [projectSlug]);

    if (!project) {
        return (
            <div className="bg-[#0F0E0E] min-h-screen flex flex-col items-center justify-center font-['Inter']">
                <h2 className="text-white text-xl uppercase tracking-widest mb-4">Proyecto no encontrado</h2>
                <button onClick={() => navigate('/')} className="text-white/50 border border-white/20 px-6 py-2 rounded-full">
                    VOLVER AL INICIO
                </button>
            </div>
        );
    }

    return (
        <div className="bg-[#0F0E0E] min-h-screen w-full flex flex-col font-['Inter'] overflow-x-hidden relative">
            <Navbar />
            
            {/* ===============================================
                COMPONENTES DEL LIGHTBOX (OVERLAY)
            =============================================== */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm cursor-zoom-out"
                    >
                        {/* Botón Cerrar */}
                        <motion.button 
                            className="absolute top-10 right-10 text-white/50 hover:text-white text-sm tracking-widest uppercase z-[110]"
                            onClick={() => setSelectedImage(null)}
                        >
                            Cerrar [ESC]
                        </motion.button>

                        {/* Imagen en Alta Resolución */}
                        <motion.img 
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            src={selectedImage} 
                            className="max-w-[90vw] max-h-[85vh] object-contain shadow-2xl"
                            alt="Enlarged view"
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* ===============================================
                CONTENIDO DE LA PÁGINA
            =============================================== */}
            <main className="pt-32 w-full flex flex-col items-center">
                <div className="px-6 md:px-[62px] w-full max-w-[1600px]">
                    <span className="text-[10px] md:text-xs text-white/50 tracking-[0.3em] uppercase mb-8 block">/ GALERÍA</span>
                    <h1 className="text-white text-5xl md:text-8xl leading-[1] uppercase mb-20 max-w-5xl font-['Anton']">{project.title}</h1>

                    {/* METADATOS */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 border-t border-white/10 pt-10">
                        {Object.entries({
                            CATEGORÍA: project.category,
                            CLIENTE: project.client,
                            FECHA: project.date,
                            AUTOR: project.author
                        }).map(([label, value]) => (
                            <div key={label}>
                                <span className="text-[10px] md:text-xs text-white/50 tracking-[0.2em] uppercase block mb-3">/ {label}</span>
                                <p className="text-white text-sm md:text-base font-semibold uppercase">{value}</p>
                            </div>
                        ))}
                    </div>

                    {/* 1. HERO IMAGE */}
                    <div 
                        className="w-full mb-24 overflow-hidden rounded-sm cursor-zoom-in group"
                        onClick={() => setSelectedImage(project.images[0].high)}
                    >
                        <img src={project.images[0].low} alt={project.title} className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-[1.02]" />
                    </div>

                    {/* 2. DESCRIPCIÓN + VERTICAL */}
                    <div className="flex flex-col md:flex-row gap-12 md:gap-24 mb-32 items-start">
                        <div className="w-full md:w-1/2">
                            <span className="text-[10px] md:text-xs text-white/50 tracking-[0.2em] uppercase block mb-6">/ ACERCA DEL PROYECTO</span>
                            <p className="text-white/80 text-lg md:text-2xl leading-relaxed font-light italic">{project.description}</p>
                        </div>
                        <div className="w-full md:w-1/2">
                            <div 
                                className="aspect-[3/4] md:aspect-[2/3] w-full overflow-hidden rounded-sm bg-white/5 cursor-zoom-in group"
                                onClick={() => setSelectedImage(project.images[1].high)}
                            >
                                <img src={project.images[1].low} alt="Detail" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
                            </div>
                        </div>
                    </div>

                    {/* 3. ANCHA CENTRAL */}
                    <div className="w-full mb-40">
                        <div 
                            className="aspect-[4/3] md:aspect-[16/10] w-full overflow-hidden rounded-sm bg-white/5 cursor-zoom-in group"
                            onClick={() => setSelectedImage(project.images[2].high)}
                        >
                            <img src={project.images[2].low} alt="Showcase" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.02]" />
                        </div>
                    </div>

                    {/* 4. PAR ASIMÉTRICO 1 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 mb-32 items-start">
                        <div className="w-full aspect-[3/4] overflow-hidden rounded-sm bg-white/5 cursor-zoom-in group" onClick={() => setSelectedImage(project.images[3].high)}>
                            <img src={project.images[3].low} alt="L1" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" />
                        </div>
                        <div className="w-full aspect-[3/4] overflow-hidden rounded-sm bg-white/5 md:mt-32 cursor-zoom-in group" onClick={() => setSelectedImage(project.images[4].high)}>
                            <img src={project.images[4].low} alt="R1" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" />
                        </div>
                    </div>

                    {/* 5. PAR ASIMÉTRICO 2 */}
                    <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-12 md:gap-20 mb-40 items-center">
                        <div className="w-full md:w-[92%] cursor-zoom-in group" onClick={() => setSelectedImage(project.images[5].high)}> 
                            <div className="aspect-[16/11] overflow-hidden rounded-sm bg-white/5 shadow-xl">
                                <img src={project.images[5].low} alt="L2" className="w-full h-full object-cover group-hover:scale-[1.02] transition-all duration-700" />
                            </div>
                        </div>
                        <div className="w-full aspect-[3/4] md:aspect-[2/3] overflow-hidden rounded-sm bg-white/5 cursor-zoom-in group" onClick={() => setSelectedImage(project.images[6].high)}>
                            <img src={project.images[6].low} alt="R2" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" />
                        </div>
                    </div>
                </div>

                {/* 6. FULL WIDTH FINAL */}
                <div 
                    className="w-full mb-24 overflow-hidden cursor-zoom-in group" 
                    onClick={() => setSelectedImage(project.images[7].high)}
                >
                    <div className="w-screen h-[70vh] md:h-[90vh] relative">
                        <img src={project.images[7].low} alt="Final" className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black/10"></div>
                    </div>
                </div>

                {/* FOOTER */}
                <div className="px-6 md:px-[62px] w-full max-w-[1600px] mb-20 border-t border-white/10 pt-10 flex justify-between items-center">
                    <button onClick={() => navigate(-1)} className="text-white/40 hover:text-white transition-colors text-xs uppercase tracking-widest">
                        ← REGRESAR
                    </button>
                    <span className="text-white/10 text-[10px] uppercase tracking-widest">O'REN STUDIO © 2025</span>
                </div>
            </main>

            {/* Efecto de Grano */}
            <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: "url('/noise.png')" }}></div>
        </div>
    );
};

export default ProjectPage;