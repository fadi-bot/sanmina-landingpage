"use client";

import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
// Framer motion thori smooth animations ke liye add ki hai
import { motion } from "framer-motion"; 

export default function AboutUs() {
  return (
    <main className="min-h-screen relative bg-[#050b14] text-white">
      <Navbar />

      {/* --- Premium Background Image Section --- */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/about-bg.jpg" // Yeh image public folder mein honi chahiye
          alt="Sanmina Business Solutions Team"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark Overlay - Iski transparency adjust karne ke liye bg-[#050b14]/90 ko kam zyada kar sakte hain */}
        <div className="absolute inset-0 bg-[#050b14]/90 backdrop-blur-[2px]" />
      </div>
      {/* -------------------------------------- */}

      {/* Main Content - z-10 lagaya taake image ke upar aye */}
      <div className="relative z-10 pt-40 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white tracking-tight">
              Who We <span className="text-cyan drop-shadow-md">Are</span>
            </h1>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto space-y-6 text-gray-300 bg-white/5 p-8 md:p-12 rounded-3xl backdrop-blur-md border border-white/10 shadow-2xl"
          >
            <p className="text-lg md:text-xl leading-relaxed">
              We are a Pakistan-based offshore services company on a mission to help US businesses and non-profit organizations operate smarter — without sacrificing quality. We deliver high-caliber IT help desk support, customer care, telemarketing, application management, and medical billing — all staffed by English-proficient, professionally trained teams available across US business hours.
            </p>
            <p className="text-lg md:text-xl leading-relaxed">
              Think of us as your in-house operations team, just without the overhead. We partner with small businesses, growing startups, and mission-driven non-profits that need dependable, scalable support — the kind that keeps things running smoothly without the complexity and cost of local hiring. Our clients don't just save money; they gain a reliable extension of their team that shows up every day, ready to deliver.
            </p>
            <p className="text-lg md:text-xl leading-relaxed font-semibold text-white">
              Whether you need a single dedicated agent or a full support team, we scale with you.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { number: "60%", label: "Average cost savings vs. US-based hiring" },
              { number: "24/7", label: "Coverage across all US time zones" },
              { number: "No", label: "Long-term contracts required to start" }
            ].map((stat) => (
              <div key={stat.label} className="text-center p-10 rounded-3xl bg-linear-to-b from-white/10 to-transparent border border-white/10 backdrop-blur-sm hover:-translate-y-2 transition-transform duration-300">
                <div className="text-5xl font-extrabold text-cyan mb-4 drop-shadow-lg">{stat.number}</div>
                <div className="text-gray-300 text-lg">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-32"
          >
            <h2 className="text-4xl font-bold mb-12 text-center text-white">Our Core Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "IT Help Desk Support",
                  description: "Tier-1 & Tier-2 technical support, remote troubleshooting, ticketing management, and user onboarding."
                },
                {
                  title: "Customer Support",
                  description: "Inbound voice and chat support, complaint resolution, CRM updates, and customer satisfaction follow-ups."
                },
                {
                  title: "Medical Billing",
                  description: "Claims submission, denial management, insurance follow-ups, and AR management for clinics and practices."
                },
                {
                  title: "Telemarketing & Lead Gen",
                  description: "Outbound calling, appointment setting, lead qualification, and pipeline building for your sales team."
                }
              ].map((service) => (
                <div key={service.title} className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors duration-300 group">
                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-cyan transition-colors">{service.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 p-8 rounded-2xl bg-linear-to-r from-electric-blue/20 to-cyan/10 border border-cyan/20 backdrop-blur-md">
              <h3 className="text-2xl font-bold mb-3 text-white">Application Management & Technical Support</h3>
              <p className="text-gray-300 leading-relaxed">Ongoing support, monitoring, updates, and user management for SaaS tools, internal apps, and business software platforms.</p>
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="relative z-10">
        <Footer />
      </div>
    </main>
  );
}