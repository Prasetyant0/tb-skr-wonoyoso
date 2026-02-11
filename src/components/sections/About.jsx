import React from 'react';
import { DollarSign, Zap, ShieldCheck } from 'lucide-react';
import { ABOUT_CONTENT, FEATURES } from '../../constants';
import { Reveal } from '../ui/Reveal';

const iconMap = {
  DollarSign: DollarSign,
  Zap: Zap,
  ShieldCheck: ShieldCheck
};

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container-custom">

        {/* --- Bagian Atas: Tentang Kami (Split Layout) --- */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-24">
          {/* Kiri: Gambar */}
          <div className="w-full lg:w-1/2 relative">
            <Reveal>
              <div className="relative rounded-lg overflow-hidden shadow-2xl border-4 border-metal-200">
                <img
                  src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop"
                  alt="Tentang TB SKR"
                  className="w-full h-[400px] object-cover"
                />
                {/* Badge Pengalaman */}
                <div className="absolute bottom-0 right-0 bg-metal-500 text-white p-6 rounded-tl-xl border-t-4 border-l-4 border-white">
                  <p className="text-4xl font-bold text-accent-orange font-display">{ABOUT_CONTENT.stats}</p>
                  <p className="text-sm font-light uppercase tracking-wider">{ABOUT_CONTENT.statsLabel}</p>
                </div>
              </div>
            </Reveal>
            <div className="absolute -z-10 top-[-20px] left-[-20px] w-full h-full border-2 border-accent-orange rounded-lg"></div>
          </div>

          {/* Kanan: Teks */}
          <div className="w-full lg:w-1/2">
            <Reveal>
              <h2 className="text-4xl font-bold text-metal-500 mb-6 font-display">
                {ABOUT_CONTENT.title}
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {ABOUT_CONTENT.desc1}
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="text-lg text-gray-600 leading-relaxed border-l-4 border-accent-orange pl-4 italic">
                {ABOUT_CONTENT.desc2}
              </p>
            </Reveal>
          </div>
        </div>

        {/* --- Bagian Bawah: Keunggulan (3 Kolom) --- */}
        <div id="why-us" className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURES.map((feature, index) => {
            const IconComponent = iconMap[feature.icon];
            return (
              <Reveal key={index} delay={index * 0.2}>
                <div className="bg-metal-100 p-8 rounded-lg hover:bg-white hover:shadow-xl transition-all duration-300 group border border-transparent hover:border-metal-200">
                  <div className="w-16 h-16 bg-accent-orange rounded-full flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                    <IconComponent className="text-white w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-metal-500 mb-3 font-display">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.desc}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default About;
