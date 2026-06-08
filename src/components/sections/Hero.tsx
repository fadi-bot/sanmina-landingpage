"use client";

import { motion } from "framer-motion";
import { ArrowRight, Shield, Zap, Users } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-24 overflow-hidden">
      
      {/* --- Premium Video Background Section --- */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/tech-bg.mp4" type="video/mp4" />
        </video>
        {/* Halka Dark Overlay */}
        <div className="absolute inset-0 bg-[#0f172a]/60" />
      </div>
      {/* -------------------------------------- */}

      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-electric-blue/30 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-cyan/20 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6 text-white">
              Reliable IT Support & <br />
              <span className="text-cyan drop-shadow-lg">Scalable Tech Teams</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-10 max-w-xl leading-relaxed">
              A 5-minute IT issue shouldn&apos;t become a 5-hour delay. We provide the 
              infrastructure and talent to keep your growing business running 24/7.
            </p>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/services">
                <button className="px-8 py-4 rounded-xl backdrop-blur-md bg-white/5 border border-white/20 hover:bg-white/10 text-white font-bold transition-all duration-300">
                  View Services
                </button>
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white">24/7</span>
                <span className="text-xs text-gray-400 uppercase tracking-widest">Support</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white">99.9%</span>
                <span className="text-xs text-gray-400 uppercase tracking-widest">Uptime</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white">5min</span>
                <span className="text-xs text-gray-400 uppercase tracking-widest">Response</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 backdrop-blur-xl bg-[#0a1128]/40 p-8 rounded-3xl border border-white/10 shadow-2xl">
              <div className="flex items-center justify-between mb-8">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="text-xs text-gray-400 font-mono">system_monitor.sh</div>
              </div>
              
              <div className="space-y-6">
                {[
                  { icon: Shield, label: "Patch Management", status: "Active", color: "text-green-400" },
                  { icon: Users, label: "Team Extension", status: "Syncing", color: "text-cyan" },
                  { icon: Zap, label: "Remote Support", status: "Connected", color: "text-yellow-400" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + (i * 0.1) }}
                    className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`p-2 rounded-lg bg-white/5 ${item.color}`}>
                        <item.icon className="w-5 h-5" />
                      </div>
                      <span className="font-medium text-white">{item.label}</span>
                    </div>
                    <span className={`text-xs font-mono ${item.color}`}>{item.status}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;