import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { SLUG_TO_IMAGE_MAP } from '../data/galleryData';

// --- MOCK DATA ---
const generateProjectDetails = () => {
    const data = {};
    const categories = ["PORTRAITS", "BRANDING", "EDITORIAL", "PRODUCTION"];
    const clients = ["AMELIA REED", "O'REN STUDIO", "VOGUE", "SOMA RECORDS"];
    const authors = ["O'REN STUDIO", "CARLO OREN", "ESTUDIO OREN"];
    
    Object.keys(SLUG_TO_IMAGE_MAP).forEach((slug, i) => {
        data[slug] = {
            title: i === 0 ? "LUMINOUS NIGHTS: A DISCO-INSPIRED PORTRAIT" : `PROJECT TITLE ${i + 1}`,
            category: categories[i % categories.length],
            client: clients[i % clients.length],
            date: "FEBRUARY 7, 2025",
            author: authors[i % authors.length],
            mainImage: SLUG_TO_IMAGE_MAP[slug],
            secondaryImage: SLUG_TO_IMAGE_MAP[slug], 
            description: "Este proyecto explora la intersección entre la estética editorial y la funcionalidad digital. Desarrollamos una narrativa visual que no solo presenta el contenido, sino que sumerge al usuario en una experiencia de marca cohesiva y minimalista."
        };
    });
    return data;
};

const PROJECT_DETAILS = generateProjectDetails();

const ProjectPage = () => {
    const { projectSlug } = useParams();
    const navigate = useNavigate();
    const project = PROJECT_DETAILS[projectSlug];
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [projectSlug]);

    if (!project) return <div className="text-white p-20 font-['Inter']">Proyecto no encontrado</div>;

    return (
        <div className="bg-[#0F0E0E] min-h-screen w-full flex flex-col font-['Inter'] overflow-x-hidden">
            <Navbar />
            
            <main className="pt-32 w-full flex flex-col items-center">
                {/* CONTENEDOR CON MARGENES PARA CONTENIDO ESTÁNDAR */}
                <div className="px-6 md:px-[62px] w-full max-w-[1600px]">
                    <span className="text-[10px] md:text-xs text-white/50 tracking-[0.3em] uppercase mb-8 block">/ GALERÍA</span>
                    <h1 className="text-white text-5xl md:text-8xl leading-[1] uppercase mb-20 max-w-5xl font-['Anton']">{project.title}</h1>

                    {/* METADATOS */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 border-t border-white/10 pt-10">
                        {['CATEGORÍA', 'CLIENTE', 'FECHA', 'AUTOR'].map((label, idx) => (
                            <div key={label}>
                                <span className="text-[10px] md:text-xs text-white/50 tracking-[0.2em] uppercase block mb-3">/ {label}</span>
                                <p className="text-white text-sm md:text-base font-semibold uppercase">
                                    {idx === 0 ? project.category : idx === 1 ? project.client : idx === 2 ? project.date : project.author}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* 1. IMAGEN PRINCIPAL */}
                    <div className="w-full mb-24 overflow-hidden rounded-sm">
                        <img src={project.mainImage} alt={project.title} className="w-full h-auto object-cover" />
                    </div>

                    {/* 2. DESCRIPCIÓN + VERTICAL */}
                    <div className="flex flex-col md:flex-row gap-12 md:gap-24 mb-32 items-start">
                        <div className="w-full md:w-1/2">
                            <span className="text-[10px] md:text-xs text-white/50 tracking-[0.2em] uppercase block mb-6">/ ACERCA DEL PROYECTO</span>
                            <p className="text-white/80 text-lg md:text-2xl leading-relaxed font-light italic">{project.description}</p>
                        </div>
                        <div className="w-full md:w-1/2">
                            <div className="aspect-[3/4] md:aspect-[2/3] w-full overflow-hidden rounded-sm bg-white/5">
                                <img src={project.secondaryImage} alt="Detail" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                            </div>
                        </div>
                    </div>

                    {/* 3. IMAGEN ANCHA CENTRAL */}
                    <div className="w-full mb-40">
                        <div className="aspect-[4/3] md:aspect-[16/10] w-full overflow-hidden rounded-sm bg-white/5">
                            <img src={project.mainImage} alt="Showcase" className="w-full h-full object-cover" />
                        </div>
                    </div>

                    {/* 4. PRIMER PAR ASIMÉTRICO */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 mb-32 items-start">
                        <div className="w-full aspect-[3/4] overflow-hidden rounded-sm bg-white/5">
                            <img src={project.secondaryImage} alt="Left 1" className="w-full h-full object-cover" />
                        </div>
                        <div className="w-full aspect-[3/4] overflow-hidden rounded-sm bg-white/5 md:mt-32">
                            <img src={project.secondaryImage} alt="Right 1" className="w-full h-full object-cover" />
                        </div>
                    </div>

                    {/* 5. SEGUNDO PAR ASIMÉTRICO */}
                    <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-12 md:gap-20 mb-40 items-center">
                        <div className="w-full md:w-[92%]"> 
                            <div className="aspect-[16/11] overflow-hidden rounded-sm bg-white/5 shadow-xl">
                                <img src={project.secondaryImage} alt="Left 2" className="w-full h-full object-cover" />
                            </div>
                        </div>
                        <div className="w-full aspect-[3/4] md:aspect-[2/3] overflow-hidden rounded-sm bg-white/5">
                            <img src={project.secondaryImage} alt="Right 2" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>

                {/* 6. IMAGEN FINAL: FULL WIDTH CORREGIDA */}
<div className="w-full mb-24 overflow-hidden">
    {/* Usamos w-[100vw] para asegurar el ancho total 
        y eliminamos el posicionamiento relativo que causaba el desfase 
    */}
    <div className="w-screen h-[70vh] md:h-[90vh]">
        <img 
            src={project.mainImage} 
            alt="Final Cinematic View" 
            className="w-full h-full object-cover"
        />
        {/* Overlay sutil para elegancia */}
        <div className="absolute inset-0 bg-black/10"></div>
    </div>
</div>

                {/* TEXTO DE CIERRE Y BOTÓN REGRESAR */}
                <div className="px-6 md:px-[62px] w-full max-w-[1600px] mb-20">
                    <div className="flex flex-col items-center mb-20">
                        <div className="h-[1px] w-20 bg-white/20 mb-6"></div>
                        <span className="text-[10px] text-white/40 tracking-[0.5em] uppercase text-center">
                            CONCLUYENDO / {project.title}
                        </span>
                    </div>

                    <div className="border-t border-white/10 pt-10 flex justify-between items-center">
                        <button onClick={() => navigate(-1)} className="text-white/40 hover:text-white transition-colors text-[10px] md:text-xs font-['Inter'] uppercase tracking-[0.2em]">
                            ← REGRESAR A GALERÍA
                        </button>
                        <span className="text-white/10 text-[10px] uppercase tracking-widest">O'REN STUDIO © 2025</span>
                    </div>
                </div>
            </main>

            <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: "url('/noise.png')" }}></div>
        </div>
    );
};

export default ProjectPage;