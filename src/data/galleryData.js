// src/data/galleryData.js

// ===============================================
// 1. IMPORTACIONES: PROYECTO MERCEDES (HIGH & LOW)
// ===============================================
// Versiones de Alta Calidad (High)
import m0_high from '../assets/Photography/mercedes/proyecto-mercedes.jpg'; 
import m1_high from '../assets/Photography/mercedes/proyecto-mercedes-foto2.jpg'; 
import m2_high from '../assets/Photography/mercedes/proyecto-mercedes-foto3.jpg'; 
import m3_high from '../assets/Photography/mercedes/proyecto-mercedes-foto4.jpg'; 
import m4_high from '../assets/Photography/mercedes/proyecto-mercedes-foto5.jpg'; 
import m5_high from '../assets/Photography/mercedes/proyecto-mercedes-foto6.jpg'; 
import m6_high from '../assets/Photography/mercedes/proyecto-mercedes-foto7.jpg'; 
import m7_high from '../assets/Photography/mercedes/proyecto-mercedes-foto8.jpg'; 

// Versiones de Baja Calidad (Low)
import m0_low from '../assets/Photography/mercedes/proyecto-mercedes-low.jpg'; 
import m1_low from '../assets/Photography/mercedes/proyecto-mercedes-foto2-low.jpg'; 
import m2_low from '../assets/Photography/mercedes/proyecto-mercedes-foto3-low.jpg'; 
import m3_low from '../assets/Photography/mercedes/proyecto-mercedes-foto4-low.jpg'; 
import m4_low from '../assets/Photography/mercedes/proyecto-mercedes-foto5-low.jpg'; 
import m5_low from '../assets/Photography/mercedes/proyecto-mercedes-foto6-low.jpg'; 
import m6_low from '../assets/Photography/mercedes/proyecto-mercedes-foto7-low.jpg'; 
import m7_low from '../assets/Photography/mercedes/proyecto-mercedes-foto8-low.jpg'; 

// ===============================================
// 2. IMPORTACIONES: RESTO DE PHOTOGRAPHY
// ===============================================
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
// 3. IMPORTACIONES: DISEÑO GRÁFICO Y WEB
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

import w1 from '../assets/WebDesign/proyecto-popcorn.jpg'; 
import w2 from '../assets/WebDesign/foto1.jpg';
import w4 from '../assets/DisenoGrafico/Noro.png'; 

// ===============================================
// 4. DATA PARA LA GRILLA PRINCIPAL (INDEX)
// Usamos la versión LOW para que la Home cargue rápido
// ===============================================
export const SEGMENTED_GALLERY_DATA = {
    'Photography': [m0_low, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16], 
    'Produccion multimedia': [m0_low], 
    'Diseño Grafico': [g1, g2, g3, g4, g5, g6, g7, g8, g9],
    'WebDesign': [w1],
};

// ===============================================
// 5. DETALLES EXTENDIDOS (PARA PROJECTPAGE)
// Aquí guardamos ambas versiones para el Lightbox
// ===============================================
export const PROJECT_DETAILS = {
    "mercedes": {
        title: "MERCEDES",
        category: "PORTRAIT / EDITORIAL",
        client: "O'REN STUDIO",
        date: "FEBRUARY 2025",
        author: "CARLO OREN",
        description: "Una narrativa visual que captura la elegancia atemporal en un entorno decadente. 'Mercedes' explora el contraste entre la textura del tejido satinado y la piedra fría de una arquitectura clásica.",
        images: [
            { low: m0_low, high: m0_high }, // [0] Hero
            { low: m1_low, high: m1_high }, // [1] Vertical
            { low: m2_low, high: m2_high }, // [2] Ancha
            { low: m3_low, high: m3_high }, // [3] Par 1 Izq
            { low: m4_low, high: m4_high }, // [4] Par 1 Der
            { low: m5_low, high: m5_high }, // [5] Par 2 Izq Ancha
            { low: m6_low, high: m6_high }, // [6] Par 2 Der Alta
            { low: m7_low, high: m7_high }  // [7] Final Full Width
        ]
    }
};

// ===============================================
// 6. MAPEO DE SLUGS
// ===============================================
export const SLUG_TO_IMAGE_MAP = {};
let imageCounter = 0;

Object.keys(SEGMENTED_GALLERY_DATA).forEach(serviceKey => {
    SEGMENTED_GALLERY_DATA[serviceKey].forEach((imageURL, index) => {
        let slug;
        if (serviceKey === 'Photography' && index === 0) {
            slug = "mercedes";
        } else {
            slug = `imagen-${imageCounter}`;
        }
        SLUG_TO_IMAGE_MAP[slug] = imageURL;
        imageCounter++; 
    });
});

export const TOTAL_PROJECT_COUNT = imageCounter;