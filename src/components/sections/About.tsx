"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Globe, Shield, Clock } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Globe, label: "U.S. Based Support", value: "100%" },
    { icon: Shield, label: "Compliance Certified", value: "SOC2" },
    { icon: Clock, label: "Average Response", value: "< 5min" },
  ];

  return (
    <section id="about" className="py-24 bg-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">
              Why Businesses Trust <br />
              <span className="text-gradient">Sanmina Solutions</span>
            </h2>
            <p className="text-light-gray text-lg mb-8 leading-relaxed">
              Founded on the principle that reliable IT is the backbone of sustainable growth, 
              Sanmina Business Solutions provides U.S.-based small and mid-sized businesses with 
              the enterprise-grade tech support they deserve.
            </p>
            <p className="text-light-gray text-lg mb-10 leading-relaxed">
              We specialize in bridging the gap between complex technology and business 
              objectives. Our team of certified engineers works around the clock to ensure 
              your infrastructure isn&apos;t just running—it&apos;s accelerating your success.
            </p>

            <div className="space-y-4">
              {[
                "100% U.S. Based Support Engineers",
                "Scalable Tech Teams for MSPs",
                "Proactive 24/7 System Monitoring",
                "Sustainable Growth-Focused Strategy",
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-8 rounded-3xl text-center flex flex-col items-center justify-center"
              >
                <div className="p-3 bg-electric-blue/20 rounded-2xl mb-4">
                  <stat.icon className="w-8 h-8 text-cyan" />
                </div>
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-light-gray uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-electric-blue p-8 rounded-3xl text-center flex flex-col items-center justify-center shadow-[0_0_30px_rgba(0,102,204,0.3)]"
            >
              <div className="text-3xl font-bold mb-1">500+</div>
              <div className="text-sm text-white/80 uppercase tracking-widest">Endpoints Managed</div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
