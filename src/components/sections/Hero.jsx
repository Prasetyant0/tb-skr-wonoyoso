import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { HERO_CONTENT } from '../../constants';
import { Reveal } from '../ui/Reveal';
import heroImage from '../../assets/heroimg.webp';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen w-full flex items-center overflow-hidden">

      {/* --- BACKGROUND IMAGE & GRADIENT LAYER --- */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Konstruksi"
          className="w-full h-full object-cover object-[75%]"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-metal-500 from-0% via-metal-500 via-40% to-transparent"></div>

        {/* Mobile Gradient (Biar di HP teksnya tetap kebaca jelas) */}
        <div className="absolute inset-0 bg-metal-500/80 md:hidden"></div>
      </div>

      {/* --- KONTEN TEKS (POSISI KIRI MUTLAK) --- */}
      <div className="container-custom relative z-10 text-white mt-10">

        {/* GRID LAYOUT: Membagi layar jadi 2 kolom. Teks cuma boleh di kolom kiri. */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* KOLOM KIRI (Teks) */}
          <div className="text-left">
            <Reveal>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 font-display drop-shadow-xl">
                {HERO_CONTENT.title.split(" dengan ")[0]} <br/>
                dengan <span className="text-accent-orange">Material Berkualitas</span>
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-lg md:text-xl text-metal-100 mb-8 max-w-lg font-light leading-relaxed drop-shadow-md">
                {HERO_CONTENT.subtitle}
              </p>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="flex justify-start">
                <a href="#products">
                  <motion.button
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-accent-orange hover:bg-accent-hover text-white font-bold py-4 px-8 rounded-sm flex items-center gap-2 shadow-xl shadow-orange-900/30 transition-all border-l-4 border-orange-800"
                  >
                    {HERO_CONTENT.cta}
                    <ArrowRight size={20} />
                  </motion.button>
                </a>
              </div>
            </Reveal>
          </div>

          {/* KOLOM KANAN (Kosong, biar gambar pekerja terlihat di sini) */}
          <div className="hidden md:block"></div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
