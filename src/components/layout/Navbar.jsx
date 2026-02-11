import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS } from '../../constants';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled
          ? 'bg-metal-500/90 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-6'
        }`}
    >
      <div className="container-custom flex justify-between items-center text-white">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wider font-display cursor-pointer">
          TB. SKR WONOYOSO
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {NAV_LINKS.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="relative group text-sm uppercase tracking-wide font-medium"
            >
              <span className="group-hover:text-accent-orange transition-colors duration-300">
                {link.name}
              </span>
              {/* Garis bawah animasi saat hover */}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-orange transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden fixed inset-0 top-[70px] bg-metal-500/95 backdrop-blur-xl z-40 overflow-hidden"
          >
            <div className="flex flex-col p-8 space-y-6 items-center justify-center h-full pb-32">
              {NAV_LINKS.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-2xl font-display text-white hover:text-accent-orange transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}
              <div className="w-16 h-1 bg-accent-orange mt-8 rounded-full"></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
