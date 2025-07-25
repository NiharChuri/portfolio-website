import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/niharchuri',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 .5C5.7.5.5 5.7.5 12a11.5 11.5 0 008 11c.5.1.7-.2.7-.5v-2c-3.3.7-4-1.6-4-1.6a3 3 0 00-1.3-1.7c-1-.7.1-.7.1-.7a2.5 2.5 0 011.9 1.3 2.5 2.5 0 003.4 1 2.5 2.5 0 01.8-1.6c-2.7-.3-5.5-1.3-5.5-6A4.5 4.5 0 017.5 6a4 4 0 01.1-3s1-.3 3.3 1.3a11 11 0 016 0C16.4 3 17.5 3 17.5 3a4 4 0 01.1 3 4.5 4.5 0 011.2 3c0 4.7-2.8 5.7-5.5 6a2.8 2.8 0 01.9 2v3c0 .3.2.6.7.5A11.5 11.5 0 0023.5 12C23.5 5.7 18.3.5 12 .5z" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/NiharChuri',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4.98 3.5A2.5 2.5 0 002.5 6a2.5 2.5 0 002.48 2.5A2.5 2.5 0 007.5 6a2.5 2.5 0 00-2.52-2.5zM3 8.98h3.96v12H3v-12zM9.95 8.98H14v1.7h.06c.56-1.1 1.9-2.26 3.94-2.26 4.2 0 4.97 2.76 4.97 6.35v7.91H19v-7.02c0-1.67-.03-3.8-2.3-3.8-2.3 0-2.65 1.8-2.65 3.67v7.15H9.95v-12z" />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com/niharchuri',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-2a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
        </svg>
      ),
    },
    {
      name: 'Email',
      href: 'mailto:nihar.churi@gmail.com',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 6h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2z" />
        </svg>
      ),
    },
  ];

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#work' },
    { name: 'Contact', href: '#contact' },
  ];

  const smoothScrollTo = (targetId) => {
    const targetElement = document.getElementById(targetId.replace('#', ''));
    if (targetElement) {
      targetElement.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'nearest' 
      });
    }
  };

  return (
    <footer className="bg-primary-100/50 dark:bg-dark-800/50 border-t border-primary-200/50 dark:border-dark-700/50 transition-colors duration-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-primary-900 dark:text-dark-50 font-sora text-xl tracking-wider font-semibold">
              Nihar. C
            </h3>
            <p className="text-primary-600/70 dark:text-dark-300/70 font-sora text-sm leading-relaxed max-w-xs">
              Crafting digital experiences with attention to detail and purposeful design.
            </p>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-primary-900 dark:text-dark-50 font-sora text-sm uppercase tracking-widest font-medium">
              Navigation
            </h4>
            <nav className="space-y-3">
              {navLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    smoothScrollTo(link.href);
                  }}
                  className="block text-primary-700/80 hover:text-primary-900 dark:text-dark-200/80 dark:hover:text-dark-50 font-sora text-sm uppercase tracking-widest transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-primary-900 dark:text-dark-50 font-sora text-sm uppercase tracking-widest font-medium">
              Connect
            </h4>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-700/80 hover:text-primary-900 dark:text-dark-200/80 dark:hover:text-dark-50 transition-colors duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={link.name}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-primary-200/50 dark:border-dark-700/50"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-600/60 dark:text-dark-300/60 font-sora text-xs uppercase tracking-widest">
              © {currentYear} Nihar Churi. All rights reserved.
            </p>
            
            <motion.div
              className="flex items-center space-x-4 text-primary-600/60 dark:text-dark-300/60 font-sora text-xs uppercase tracking-widest"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <span>Made with</span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="text-red-500"
              >
                ♥
              </motion.span>
              <span>in React</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
