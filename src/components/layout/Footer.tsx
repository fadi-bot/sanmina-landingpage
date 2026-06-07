"use client";

import Link from "next/link";
import { Cpu, Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="pt-24 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <Cpu className="w-8 h-8 text-cyan" />
              <span className="text-2xl font-bold tracking-tight">
                Sanmina<span className="text-cyan">Solutions</span>
              </span>
            </Link>
            <p className="text-light-gray mb-6 leading-relaxed">
              Empowering U.S. businesses with reliable IT support and scalable tech teams. 
              Sustainable growth through smart technology.
            </p>
            <div className="flex space-x-4">
              {[Linkedin, Twitter, Github].map((Icon, i) => (
                <Link
                  key={i}
                  href="#"
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-light-gray hover:text-cyan transition-all"
                >
                  <Icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-4">
              {[
                "Managed Help Desk",
                "After-Hour MSP",
                "Microsoft 365 Support",
                "Team Extension",
                "Remote IT Support",
              ].map((item) => (
                <li key={item}>
                  <Link href="#services" className="text-light-gray hover:text-cyan transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Company</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/about-us" className="text-light-gray hover:text-cyan transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-light-gray hover:text-cyan transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-light-gray">
                <MapPin className="w-5 h-5 text-cyan shrink-0" />
                <span>123 Tech Plaza, Suite 400<br />Austin, TX 78701</span>
              </li>
              <li className="flex items-center space-x-3 text-light-gray">
                <Phone className="w-5 h-5 text-cyan shrink-0" />
                <span>+1 (800) SANMINA</span>
              </li>
              <li className="flex items-center space-x-3 text-light-gray">
                <Mail className="w-5 h-5 text-cyan shrink-0" />
                <span>support@sanmina.tech</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-light-gray">
          <p>© {new Date().getFullYear()} Sanmina Business Solutions. All rights reserved.</p>
          <div className="flex space-x-8">
            <Link href="/privacy-policy" className="hover:text-cyan transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-cyan transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>

      {/* Background Decorative */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-electric-blue/5 blur-[120px] -z-10" />
    </footer>
  );
};

export default Footer;
