import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion'; 
import Navbar from '../components/Navbar';
import { PROJECT_DETAILS } from '../data/galleryData';

const ProjectPage = () => {
    const { projectSlug } = useParams();
    const navigate = useNavigate();
    const project = PROJECT_DETAILS[projectSlug];
    
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [projectSlug]);

    // Cerrar con tecla ESC
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') setSelectedImage(null);
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, []);

    if (!project) {
        return (
            <div className="bg-[#0F0E0E] min-h-screen flex flex-col items-center justify-center font-['Inter']">
                <h2 className="text-white text-xl uppercase tracking-widest mb-4">Proyecto no encontrado</h2>
                <button onClick={() => navigate('/')} className="text-white/50 border border-white/20 px-6 py-2 rounded-full font-inter">
                    VOLVER AL INICIO
                </button>
            </div>
        );
    }

    const totalImages = project.images.length;
    const lastImageIndex = totalImages - 1;
    const lastImage = project.images[lastImageIndex];

    return (
        <div className="bg-[#0F0E0E] min-h-screen w-full flex flex-col font-['Inter'] overflow-x-hidden relative">
            <Navbar />
            
            <AnimatePresence>
                {selectedImage && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md cursor-zoom-out"
                    >
                        <motion.button 
                            className="absolute top-8 right-8 md:top-12 md:right-12 text-white/40 hover:text-white transition-colors z-[110]"
                            onClick={() => setSelectedImage(null)}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </motion.button>

                        <motion.img 
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            src={selectedImage} 
                            className="max-w-[92vw] max-h-[88vh] object-contain shadow-2xl pointer-events-none"
                            alt="Visualización ampliada"
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            <main className="pt-32 w-full flex flex-col items-center">
                <div className="px-6 md:px-[62px] w-full max-w-[1600px]">
                    
                    <div className="mb-12 flex justify-between items-center border-b border-white/5 pb-6">
                        <button 
                            onClick={() => navigate(-1)} 
                            className="group flex items-center gap-2 text-white/40 hover:text-white transition-all text-[10px] uppercase tracking-[0.3em]"
                        >
                            <span className="transition-transform group-hover:-translate-x-1">←</span> 
                            REGRESAR
                        </button>
                        <span className="text-[10px] text-white/20 tracking-[0.3em] uppercase">/ PORTAFOLIO</span>
                    </div>

                    <h1 className="text-white text-5xl md:text-8xl leading-[1] uppercase mb-20 max-w-5xl font-['Anton'] tracking-tighter">
                        {project.title}
                    </h1>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 border-t border-white/10 pt-10">
                        <div>
                            <span className="text-[10px] md:text-xs text-white/30 tracking-[0.2em] uppercase block mb-3 font-medium">/ CATEGORÍA</span>
                            <p className="text-[#F5F5F0] text-xs md:text-sm font-semibold uppercase tracking-wider">{project.category}</p>
                        </div>
                        <div>
                            <span className="text-[10px] md:text-xs text-white/30 tracking-[0.2em] uppercase block mb-3 font-medium">/ CLIENTE</span>
                            <p className="text-[#F5F5F0] text-xs md:text-sm font-semibold uppercase tracking-wider">{project.client}</p>
                        </div>
                        <div>
                            <span className="text-[10px] md:text-xs text-white/30 tracking-[0.2em] uppercase block mb-3 font-medium">/ FECHA</span>
                            <p className="text-[#F5F5F0] text-xs md:text-sm font-semibold uppercase tracking-wider">{project.date}</p>
                        </div>
                        <div>
                            <span className="text-[10px] md:text-xs text-white/30 tracking-[0.2em] uppercase block mb-3 font-medium">/ AUTOR</span>
                            <p className="text-[#F5F5F0] text-xs md:text-sm font-semibold uppercase tracking-wider">{project.author}</p>
                        </div>
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
                        {project.images[1] && lastImageIndex > 0 && (
                            <div className="w-full md:w-1/2">
                                <div 
                                    className="aspect-[3/4] md:aspect-[2/3] w-full overflow-hidden rounded-sm bg-white/5 cursor-zoom-in group"
                                    onClick={() => setSelectedImage(project.images[1].high)}
                                >
                                    {/* SE ELIMINÓ 'grayscale' Y 'group-hover:grayscale-0' */}
                                    <img src={project.images[1].low} alt="Detail" className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105" />
                                </div>
                            </div>
                        )}
                    </div>

                    {/* 3. ANCHA CENTRAL */}
                    {project.images[2] && lastImageIndex > 1 && (
                        <div className="w-full mb-40">
                            <div 
                                className="aspect-[4/3] md:aspect-[16/10] w-full overflow-hidden rounded-sm bg-white/5 cursor-zoom-in group"
                                onClick={() => setSelectedImage(project.images[2].high)}
                            >
                                <img src={project.images[2].low} alt="Showcase" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.02]" />
                            </div>
                        </div>
                    )}

                    {/* 4. PAR ASIMÉTRICO 1 */}
                    {project.images[3] && project.images[4] && lastImageIndex > 3 && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 mb-32 items-start">
                            <div className="w-full aspect-[3/4] overflow-hidden rounded-sm bg-white/5 cursor-zoom-in group" onClick={() => setSelectedImage(project.images[3].high)}>
                                <img src={project.images[3].low} alt="L1" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" />
                            </div>
                            <div className="w-full aspect-[3/4] overflow-hidden rounded-sm bg-white/5 md:mt-32 cursor-zoom-in group" onClick={() => setSelectedImage(project.images[4].high)}>
                                <img src={project.images[4].low} alt="R1" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" />
                            </div>
                        </div>
                    )}

                    {/* 5. PAR ASIMÉTRICO 2 */}
                    {project.images[5] && project.images[6] && lastImageIndex > 5 && (
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
                    )}
                </div>

                <div 
                    className="w-full mb-24 overflow-hidden cursor-zoom-in group" 
                    onClick={() => setSelectedImage(lastImage.high)}
                >
                    <div className="w-screen h-[70vh] md:h-[90vh] relative">
                        <img src={lastImage.low} alt="Final View" className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black/10"></div>
                    </div>
                </div>

                <div className="px-6 md:px-[62px] w-full max-w-[1600px] mb-20 border-t border-white/10 pt-10 flex justify-end items-center">
                    <span className="text-white/10 text-[10px] uppercase tracking-widest font-light italic">
                        O'REN STUDIO — VISUAL NARRATIVES © 2025
                    </span>
                </div>
            </main>

            <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: "url('/noise.png')" }}></div>
        </div>
    );
};

export default ProjectPage;