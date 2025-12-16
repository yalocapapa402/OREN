// src/data/galleryData.js

// ===============================================
// IMPORTACIONES: Photography
// ===============================================
import p1 from '../assets/Photography/proyecto-guitarra.jpg'; 
import p2 from '../assets/Photography/foto-1.jpeg'; 
import p3 from '../assets/Photography/foto-2.jpeg'; 
import p4 from '../assets/Photography/foto-3.jpeg'; 
import p5 from '../assets/Photography/foto-4.jpeg'; 
import p6 from '../assets/Photography/foto-5.jpeg'; 
import p7 from '../assets/Photography/foto-6.jpeg'; 
import p8 from '../assets/Photography/Laufey by 1883 music.jpeg';
import p9 from '../assets/Photography/Sadness is silent - Polina Washington.jpeg'; 
import p10 from '../assets/Photography/Cinematic Subway Portrait – Slow Shutter Street Photography.jpeg'; 
import p11 from '../assets/Photography/BLUR.jpeg'; 
import p12 from '../assets/Photography/53St7Av.jpeg'; 
import p13 from '../assets/Photography/La metamorfosis de Robert Pattinson.jpeg'; 
import p14 from '../assets/Photography/marias-obsession.jpeg'; 
import p15 from '../assets/Photography/Toto.jpeg'; 
import p16 from '../assets/Photography/laufey.jpeg'; 

// ===============================================
// IMPORTACIONES: Diseño Grafico
// ===============================================
import g1 from '../assets/DisenoGrafico/proyecto-cereza.jpg'; 
import g2 from '../assets/DisenoGrafico/proyecto-star.jpg'; 
import g3 from '../assets/DisenoGrafico/foto1.jpg'; 
import g4 from '../assets/DisenoGrafico/foto2.jpeg';
import g5 from '../assets/DisenoGrafico/foto3.jpeg'; 
import g6 from '../assets/DisenoGrafico/foto4.jpeg';  
import g7 from '../assets/DisenoGrafico/foto5.jpeg'; 
import g8 from '../assets/DisenoGrafico/Magdalena Bay.jpeg';
import g9 from '../assets/DisenoGrafico/Flea-Market-Sale.jpeg';

// ===============================================
// IMPORTACIONES: Diseño Web
// ===============================================
import w1 from '../assets/WebDesign/proyecto-popcorn.jpg'; 
import w2 from '../assets/WebDesign/foto1.jpg';
// Agregué placeholders para el resto de WebDesign si los necesitas:
import w4 from '../assets/DisenoGrafico/Noro.png'; 

// ===============================================
// 1. OBJETO CENTRAL DE DATA SEGMENTADA
// ===============================================
export const SEGMENTED_GALLERY_DATA = {
    'Photography': [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16], 
    
    'Produccion multimedia': [p1], // Usando p1 como demo

    'Diseño Grafico': [g1, g2, g3, g4, g5, g6, g7, g8, g9],

    'WebDesign': [w1],
};

// ===============================================
// 2. MAPEO GLOBAL PARA EL PROJECT PAGE (VITAL)
// ===============================================
export const SLUG_TO_IMAGE_MAP = {};
let imageCounter = 0;

Object.keys(SEGMENTED_GALLERY_DATA).forEach(serviceKey => {
    SEGMENTED_GALLERY_DATA[serviceKey].forEach(imageURL => {
        const slug = `imagen-${imageCounter++}`; 
        SLUG_TO_IMAGE_MAP[slug] = imageURL;
    });
});

export const TOTAL_PROJECT_COUNT = imageCounter;