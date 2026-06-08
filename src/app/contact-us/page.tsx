"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const ContactPage = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Office",
      details: "123 Tech Plaza, Suite 400\nAustin, TX 78701",
    },
    {
      icon: Phone,
      title: "Phone Number",
      details: "+1 (800) SANMINA",
    },
    {
      icon: Mail,
      title: "Email Address",
      details: "support@sanmina.tech",
    },
  ];

  return (
    <main className="min-h-screen relative bg-[#050b14] text-white">
      
      <Navbar />

      {/* Premium Background Image Section */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/contact-bg.jpg" 
          alt="Contact Sanmina Business Solutions"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-[#050b14]/90 backdrop-blur-[2px]" />
      </div>

      {/* Main content wrapper with relative positioning and z-index to sit above the image */}
      <div className="pt-32 pb-20 relative z-10 overflow-hidden">
        
        {/* Ambient Glow Effects */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
          <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] bg-electric-blue/20 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-cyan/10 rounded-full blur-[150px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Get in <span className="text-cyan">Touch</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Ready to transform your IT infrastructure? Reach out to us today and let's 
              build a scalable, secure, and future-proof tech environment for your business.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            
            {/* Left Column: Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="backdrop-blur-xl bg-white/5 p-8 rounded-3xl border border-white/10 shadow-2xl">
                <h2 className="text-2xl font-semibold text-white mb-8">Contact Information</h2>
                
                <div className="space-y-8">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-5 group">
                      <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-cyan group-hover:bg-cyan group-hover:text-[#050b14] transition-colors duration-300">
                        <info.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-gray-400 mb-1">{info.title}</h3>
                        <p className="text-lg text-white whitespace-pre-line">{info.details}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Global Support Card */}
              <div className="backdrop-blur-md bg-linear-to-br from-electric-blue/20 to-cyan/10 p-8 rounded-3xl border border-cyan/20">
                <h3 className="text-xl font-bold text-white mb-2">24/7 Global Support</h3>
                <p className="text-cyan/80 text-sm">
                  Our help desk never sleeps. Real people, real solutions, anytime you need us.
                </p>
              </div>
            </motion.div>

            {/* Right Column: Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="backdrop-blur-xl bg-[#0a1128]/60 p-8 md:p-10 rounded-3xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.3)] relative">
                
                <h2 className="text-2xl font-semibold text-white mb-8">Send us a Message</h2>
                
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">First Name</label>
                      <input 
                        type="text" 
                        className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-cyan focus:ring-1 focus:ring-cyan transition-all" 
                        placeholder="John" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Last Name</label>
                      <input 
                        type="text" 
                        className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-cyan focus:ring-1 focus:ring-cyan transition-all" 
                        placeholder="Doe" 
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Work Email</label>
                    <input 
                      type="email" 
                      className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-cyan focus:ring-1 focus:ring-cyan transition-all" 
                      placeholder="john@company.com" 
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                    <textarea 
                      rows={5} 
                      className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-cyan focus:ring-1 focus:ring-cyan transition-all resize-none" 
                      placeholder="Tell us about your IT requirements..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full py-4 mt-4 rounded-xl bg-electric-blue hover:bg-cyan text-white font-bold text-lg transition-all duration-300 shadow-[0_0_20px_rgba(0,102,204,0.4)] hover:shadow-[0_0_30px_rgba(0,229,255,0.6)] flex items-center justify-center space-x-2 group"
                  >
                    <span>Send Message</span>
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      <div className="relative z-10">
        <Footer />
      </div>
      
    </main>
  );
};

export default ContactPage;