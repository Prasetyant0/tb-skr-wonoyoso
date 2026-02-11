import React from 'react';
import { motion } from 'framer-motion';
import { PRODUCTS } from '../../constants';
import { Reveal } from '../ui/Reveal';

const Products = () => {
  return (
    <section id="products" className="py-20 bg-metal-100">
      <div className="container-custom">
        {/* Header Section */}
        <div className="text-center mb-16">
          <Reveal width="100%">
            <h2 className="text-4xl md:text-5xl font-bold text-metal-500 mb-4 font-display uppercase tracking-tight">
              Kategori <span className="text-accent-orange">Produk</span>
            </h2>
            <div className="h-1 w-24 bg-accent-orange mx-auto rounded-full"></div>
          </Reveal>
        </div>

        {/* Grid System */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }} // Efek muncul bergantian
              viewport={{ once: true }}
              className="group relative h-64 rounded-lg overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all"
            >
              {/* Gambar Background */}
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay Gradient (Industrial Look) */}
              <div className="absolute inset-0 bg-gradient-to-t from-metal-500/90 via-metal-500/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

              {/* Teks Konten */}
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <h3 className="text-2xl font-bold text-white font-display mb-1 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  {product.title}
                </h3>
                <p className="text-metal-200 text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75">
                  {product.desc}
                </p>
              </div>

              {/* Aksen Garis Orange */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-accent-orange group-hover:w-full transition-all duration-500 ease-in-out"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
