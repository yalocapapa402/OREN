import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { SLUG_TO_IMAGE_MAP } from '../data/galleryData';

// --- MOCK DATA ACTUALIZADO ---
const generateProjectDetails = () => {
    const data = {};
    const categories = ["PORTRAITS", "BRANDING", "EDITORIAL", "PRODUCTION"];
    const clients = ["AMELIA REED", "O'REN STUDIO", "VOGUE", "SOMA RECORDS"];
    // Agregamos autores de ejemplo
    const authors = ["O'REN STUDIO", "CARLO OREN", "ESTUDIO OREN"];
    
    Object.keys(SLUG_TO_IMAGE_MAP).forEach((slug, i) => {
        data[slug] = {
            title: i === 0 ? "LUMINOUS NIGHTS: A DISCO-INSPIRED PORTRAIT" : `PROJECT TITLE ${i + 1}`,
            category: categories[i % categories.length],
            client: clients[i % clients.length],
            date: "FEBRUARY 7, 2025",
            author: authors[i % authors.length], // Nuevo campo
            mainImage: SLUG_TO_IMAGE_MAP[slug],
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
        <div className="bg-[#0F0E0E] min-h-screen w-full flex flex-col font-['Inter']">
            <Navbar />
            
            <main className="pt-32 px-6 md:px-[62px] w-full max-w-[1600px] mx-auto">
                
                {/* ETIQUETA SUPERIOR */}
                <span className="text-[10px] md:text-xs text-white/50 tracking-[0.3em] font-['Inter'] uppercase mb-8 block">
                    / GALERÍA
                </span>

                {/* TÍTULO PRINCIPAL */}
                <h1 className="text-white text-5xl md:text-8xl leading-[1] uppercase mb-20 max-w-5xl tracking-normal font-['Anton']">
                    {project.title}
                </h1>

                {/* GRILLA DE METADATOS CORREGIDA */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 border-t border-white/10 pt-10 font-['Inter']">
                    <div>
                        <span className="text-[10px] md:text-xs text-white/50 tracking-[0.2em] uppercase block mb-3">/ CATEGORÍA</span>
                        <p className="text-white text-sm md:text-base font-semibold uppercase">{project.category}</p>
                    </div>
                    <div>
                        <span className="text-[10px] md:text-xs text-white/50 tracking-[0.2em] uppercase block mb-3">/ CLIENTE</span>
                        <p className="text-white text-sm md:text-base font-semibold uppercase">{project.client}</p>
                    </div>
                    <div>
                        <span className="text-[10px] md:text-xs text-white/50 tracking-[0.2em] uppercase block mb-3">/ FECHA</span>
                        <p className="text-white text-sm md:text-base font-semibold uppercase">{project.date}</p>
                    </div>
                    {/* CUARTO ELEMENTO AHORA DENTRO DE SU DIV */}
                    <div>
                        <span className="text-[10px] md:text-xs text-white/50 tracking-[0.2em] uppercase block mb-3">/ AUTOR</span>
                        <p className="text-white text-sm md:text-base font-semibold uppercase">{project.author}</p>
                    </div>
                </div>

                {/* IMAGEN PRINCIPAL */}
                <div className="w-full mb-20 overflow-hidden rounded-sm">
                    <img 
                        src={project.mainImage} 
                        alt={project.title} 
                        className="w-full h-auto object-cover"
                    />
                </div>
                
                {/* BOTÓN REGRESAR */}
                <button 
                    onClick={() => navigate(-1)}
                    className="text-white/40 hover:text-white transition-colors text-[10px] md:text-xs font-['Inter'] uppercase tracking-[0.2em] mb-20"
                >
                    ← REGRESAR
                </button>
            </main>

            <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] mix-blend-overlay"
                 style={{ backgroundImage: "url('/noise.png')" }}>
            </div>
        </div>
    );
};

export default ProjectPage;