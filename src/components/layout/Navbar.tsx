"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image"; 
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false); // Navbar ko hide/show karne ki state

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // 1. Check karega ke 20px se neechay aye hain ya nahi (Color aur blur ke liye)
      setScrolled(currentScrollY > 20);

      // 2. Hide/Show logic (Scroll Direction check karne ke liye)
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Agar pehle se zyada neechay aye hain (Scroll Down) aur top pe nahi hain -> Hide kar do
        setHidden(true);
      } else {
        // Agar upar ki taraf wapis gaye (Scroll Up) -> Show kar do
        setHidden(false);
      }

      lastScrollY = currentScrollY; // Current scroll ko save kar lo agli dafa match karne ke liye
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "About Us", href: "/about-us" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      // Yahan humne transform aur -translate-y-full lagaya hai hide karne ke liye
      className={`fixed top-0 w-full z-50 transition-all duration-300 transform ${
        hidden ? "-translate-y-full" : "translate-y-0"
      } ${
        scrolled 
          ? "glass shadow-lg py-3" 
          : "bg-sky-500/20 backdrop-blur-sm py-5" 
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-60 h-20 shrink-0">
              <Image
                src="/logo.png" 
                alt="Sanmina Business Solutions"
                fill
                className="object-contain object-left scale-125" 
                priority 
              />
            </div>
          </Link>

          {/* Desktop Nav */}
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
            <button className="px-5 py-2 rounded-full bg-electric-blue hover:bg-cyan text-white text-sm font-semibold transition-all duration-300 shadow-[0_0_15px_rgba(0,102,204,0.4)]">
              Free Consultation
            </button>
          </div>

          {/* Mobile Menu Button */}
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

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-white/5"
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
              <button className="w-full py-3 rounded-xl bg-electric-blue text-white font-semibold">
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