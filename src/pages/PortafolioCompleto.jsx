import React, { useEffect, useMemo } from 'react'; 
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import MasonryGrid from '../components/MasonryGrid'; 
import PageHeroe from '../components/PageHeroe'; 
import { SEGMENTED_GALLERY_DATA } from '../data/galleryData';

const PortafolioCompleto = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // --- LÓGICA DE MEZCLA (SHUFFLE) ---
    // Usamos useMemo para que no se re-mezclen las imágenes cada vez que la página se actualice
    const shuffledImages = useMemo(() => {
        const allImages = [];
        let globalCounter = 0;

        // 1. Primero creamos la lista plana con sus slugs correctos (importante mantener el orden para los enlaces)
        Object.keys(SEGMENTED_GALLERY_DATA).forEach(category => {
            SEGMENTED_GALLERY_DATA[category].forEach(url => {
                allImages.push({
                    src: url,
                    slug: `imagen-${globalCounter++}`
                });
            });
        });

        // 2. Algoritmo de barajado (Fisher-Yates) para mezclar las categorías
        const shuffled = [...allImages];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        
        return shuffled;
    }, []);

    return (
        <div className="bg-[#0F0E0E] min-h-screen w-full relative overflow-x-hidden flex flex-col">
            <Navbar />

            <div className="w-full flex flex-col">
                {/* Hero con título genérico (PORTAFOLIO) y color crema */}
                <PageHeroe 
                    title="PORTAFOLIO"
                    description="Explora nuestra visión creativa a través de una selección mezclada de fotografía, diseño y multimedia."
                    collageBgDesktop="/images/collage-branding-desktop.png" 
                    collageBgMobile="/images/collage-branding-mobile.png"   
                    color="#E6E1D1" 
                />

                <div className="-mt-64 relative z-20 px-6 md:px-[62px]"> 
                     {/* Pasamos las imágenes mezcladas */}
                     <MasonryGrid rawImages={shuffledImages} />

                     <div className="w-full flex flex-col items-center mt-32 pb-32 gap-8">
                        <div className="h-[1px] w-20 bg-white/10"></div>
                        <button 
                            onClick={() => navigate('/')}
                            className="text-white/40 hover:text-white transition-all duration-300 text-[10px] md:text-xs font-['Inter'] uppercase tracking-[0.3em]"
                        >
                            ← VOLVER AL INICIO
                        </button>
                     </div>
                </div>
            </div>

            <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.08] mix-blend-overlay"
                 style={{ backgroundImage: "url('/noise.png')" }}>
            </div>
        </div>
    );
};

export default PortafolioCompleto;