import React from 'react';
import { MapPin, Phone, Clock, Mail, Instagram, Facebook } from 'lucide-react';
import { NAV_LINKS } from '../../constants';

const Footer = () => {
  return (
    <footer className="bg-metal-500 text-metal-100 pt-16 pb-8 border-t-4 border-accent-orange">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* --- KOLOM 1: INFO KONTAK --- */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold font-display text-white tracking-wider">
              TB. SKR WONOYOSO
            </h3>
            <p className="text-sm text-metal-300 leading-relaxed max-w-xs">
              Pusat belanja bahan bangunan terlengkap dan termurah di Wonoyoso.
              Siap melayani kebutuhan proyek rumah hingga gedung bertingkat.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent-orange mt-1 shrink-0" />
                <span className="text-sm">
                  Jl. Karangbolong, Emprak, Wonoyoso, <br />
                  Kec. Kuwarasan, Kabupaten Kebumen, <br />
                  Jawa Tengah 54366
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent-orange shrink-0" />
                <span className="text-sm">+62 811-2222-3333 (WhatsApp)</span>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-accent-orange shrink-0" />
                <span className="text-sm">Senin - Minggu: 07.30 - 16.30 WIB</span>
              </div>
            </div>
          </div>

          {/* --- KOLOM 2: LINK CEPAT & SOSMED --- */}
          <div>
            <h4 className="text-xl font-bold font-display text-white mb-6">Link Cepat</h4>
            <ul className="space-y-3 mb-8">
              {NAV_LINKS.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-metal-300 hover:text-accent-orange transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-accent-orange rounded-full"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <h4 className="text-xl font-bold font-display text-white mb-4">Ikuti Kami</h4>
            <div className="flex gap-4">
              <a href="#" className="bg-metal-400 p-2 rounded hover:bg-accent-orange transition-colors text-white">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-metal-400 p-2 rounded hover:bg-accent-orange transition-colors text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-metal-400 p-2 rounded hover:bg-accent-orange transition-colors text-white">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* --- KOLOM 3: GOOGLE MAPS --- */}
          <div>
            <h4 className="text-xl font-bold font-display text-white mb-6">Lokasi Toko</h4>
            <div className="w-full h-64 bg-metal-400 rounded-lg overflow-hidden shadow-lg border border-metal-300 relative group">
              {/* PERBAIKAN: Style jadi object & atribut camelCase */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d587.8406447061375!2d109.4931729376269!3d-7.628741038397901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e654bcba4c4d82d%3A0x1f99e798eb609073!2sCv.%20Skr%20Gombong!5e0!3m2!1sid!2sid!4v1770811129866!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi TB SKR"
                className="w-full h-full"
              ></iframe>

              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[-1]">
                 <span className="text-metal-200 text-sm">Memuat Peta...</span>
              </div>
            </div>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-block text-sm text-accent-orange hover:underline"
            >
              Buka di Google Maps App →
            </a>
          </div>

        </div>

        {/* COPYRIGHT SECTION */}
        <div className="border-t border-metal-400 pt-8 text-center text-sm text-metal-300">
          <p>© {new Date().getFullYear()} TB. SKR Wonoyoso. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
