"use client";

import { motion } from "framer-motion";
import { ArrowRight, Shield, Zap, Users } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-electric-blue/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-cyan/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 px-3 py-1 rounded-full glass border-white/10 text-cyan text-xs font-bold tracking-wider uppercase mb-6"
            >
              <Zap className="w-3 h-3" />
              <span>Next-Gen IT Managed Services</span>
            </motion.div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
              Reliable IT Support & <br />
              <span className="text-gradient">Scalable Tech Teams</span>
            </h1>
            
            <p className="text-xl text-light-gray mb-10 max-w-xl leading-relaxed">
              A 5-minute IT issue shouldn&apos;t become a 5-hour delay. We provide the 
              infrastructure and talent to keep your growing business running 24/7.
            </p>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="px-8 py-4 rounded-xl bg-electric-blue hover:bg-cyan text-white font-bold transition-all duration-300 flex items-center justify-center space-x-2 group shadow-[0_0_20px_rgba(0,102,204,0.3)]">
                <span>Book a Free Consultation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 rounded-xl glass border-white/10 hover:bg-white/5 text-white font-bold transition-all duration-300">
                View Services
              </button>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-white/5 pt-8">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white">24/7</span>
                <span className="text-xs text-light-gray uppercase tracking-widest">Support</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white">99.9%</span>
                <span className="text-xs text-light-gray uppercase tracking-widest">Uptime</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white">5min</span>
                <span className="text-xs text-light-gray uppercase tracking-widest">Response</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 glass-card p-8 rounded-3xl border-white/10">
              <div className="flex items-center justify-between mb-8">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <div className="text-xs text-light-gray font-mono">system_monitor.sh</div>
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
                    className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5"
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`p-2 rounded-lg bg-white/5 ${item.color}`}>
                        <item.icon className="w-5 h-5" />
                      </div>
                      <span className="font-medium">{item.label}</span>
                    </div>
                    <span className={`text-xs font-mono ${item.color}`}>{item.status}</span>
                  </motion.div>
                ))}
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-cyan/20 rounded-full blur-3xl -z-10" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-electric-blue/20 rounded-full blur-3xl -z-10" />
            </div>
            
            {/* Animated Grid Background */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
