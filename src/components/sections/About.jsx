import React from 'react';
import { DollarSign, Zap, ShieldCheck } from 'lucide-react';
import { ABOUT_CONTENT, FEATURES } from '../../constants';
import { Reveal } from '../ui/Reveal';

// Mapping Icon di luar component agar tidak re-render
const iconMap = {
  DollarSign: DollarSign,
  Zap: Zap,
  ShieldCheck: ShieldCheck
};

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container-custom">

        {/* --- SECTION 1: HERO IMAGE & DESCRIPTION --- */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-24">

          {/* Left Column: Image with Badge */}
          <div className="w-full lg:w-1/2 relative">
            <Reveal>
              <div className="relative rounded-lg overflow-hidden shadow-2xl border-4 border-metal-200 group">
                <img
                  src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop"
                  alt="Tentang TB SKR"
                  className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Stats Badge */}
                <div className="absolute bottom-0 right-0 bg-metal-500 text-white p-6 rounded-tl-xl border-t-4 border-l-4 border-white shadow-lg">
                  <p className="text-4xl font-bold text-accent-orange font-display">
                    {ABOUT_CONTENT.stats}
                  </p>
                  <p className="text-xs font-light uppercase tracking-wider mt-1">
                    {ABOUT_CONTENT.statsLabel}
                  </p>
                </div>
              </div>
            </Reveal>
            {/* Decorative Border */}
            <div className="absolute -z-10 top-[-20px] left-[-20px] w-full h-full border-2 border-accent-orange rounded-lg"></div>
          </div>

          {/* Right Column: Text Content */}
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
              <div className="flex gap-4 items-start">
                <div className="w-1 h-16 bg-accent-orange rounded-full flex-shrink-0"></div>
                <p className="text-lg text-gray-600 leading-relaxed italic">
                  "{ABOUT_CONTENT.desc2}"
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        <div id="why-us" className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {FEATURES.map((feature, index) => {
            const IconComponent = iconMap[feature.icon];

            return (
              <Reveal key={index} delay={index * 0.1} width='100%' className="h-full">
                <div className="h-full flex flex-col bg-metal-100 p-8 rounded-lg border border-transparent hover:bg-white hover:shadow-xl hover:border-metal-200 transition-all duration-300 group">

                  {/* Icon Wrapper */}
                  <div className="w-16 h-16 bg-accent-orange rounded-full flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <IconComponent className="text-white w-8 h-8" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-metal-500 mb-3 font-display">
                    {feature.title}
                  </h3>

                  {/* Description - flex-grow ensures it fills space equally */}
                  <p className="text-gray-600 flex-grow leading-relaxed">
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
