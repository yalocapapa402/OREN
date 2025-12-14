import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact'; // <--- IMPORTAR

function App() {
  return (
    <div className="relative min-h-screen w-full">
      <Navbar />
      <Hero />
      <Projects />
      <Services />

      {/* AQUÍ AGREGAMOS EL CIERRE */}
      <Contact />

    </div>
  );
}

export default App;