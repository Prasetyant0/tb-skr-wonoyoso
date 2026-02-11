import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Products from './components/sections/Products';
import About from './components/sections/About';
import Consultation from './components/sections/Consultation';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="font-body text-gray-800 bg-metal-100 overflow-x-hidden flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        <Hero />
        <Products />
        <About />
        <Consultation />
      </main>

      <Footer />
    </div>
  );
}

export default App;
