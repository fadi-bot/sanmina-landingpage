"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image"; 
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 20);

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const openConsultationModal = () => {
    window.dispatchEvent(new CustomEvent('openModal'));
    setIsOpen(false); 
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About Us", href: "/about-us" },
    { name: "Contact Us", href: "/contact-us" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 transform ${
        hidden ? "-translate-y-full" : "translate-y-0"
      } ${
        scrolled ? "backdrop-blur-md bg-navy/80 shadow-lg py-3" : "py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-30 h-10 shrink-0">
              <Image
                src="/logo.png" 
                alt="Sanmina Business Solutions"
                fill
                className="object-contain object-left scale-125" 
                priority 
              />
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-white hover:text-cyan transition-colors"
              >
                {link.name}
              </Link>
            ))}
           
            <button 
              onClick={openConsultationModal}
              className="px-5 py-2 rounded-full bg-electric-blue hover:bg-cyan text-white text-sm font-semibold transition-all duration-300 shadow-[0_0_15px_rgba(0,102,204,0.4)]"
            >
              Free Consultation
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-sky-700 border-t border-white/5"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-lg font-medium text-white hover:text-cyan"
                >
                  {link.name}
                </Link>
              ))}

              <button 
                onClick={openConsultationModal}
                className="w-full py-3 rounded-xl bg-electric-blue text-white font-semibold"
              >
                Free Consultation
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;