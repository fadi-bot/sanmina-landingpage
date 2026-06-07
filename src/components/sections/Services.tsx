"use client";

import { motion } from "framer-motion";
import {
  Headphones,
  Cloud,
  Moon,
  ShieldCheck,
  Users,
  Database
} from "lucide-react";

const services = [
  {
    title: "24/7 Managed Help Desk",
    description: "Comprehensive remote desktop support keeping your operations running smoothly around the clock. We handle troubleshooting, system glitches, and daily end-user issues with rapid response times.",
    icon: Headphones
  },
  {
    title: "Microsoft 365 Setup & Support",
    description: "End-to-end administration and optimization of your cloud productivity ecosystem to ensure secure, seamless team collaboration.",
    icon: Cloud
  },
  {
    title: "After-Hours U.S. MSP Support",
    description: "White-label night-shift and weekend coverage designed specifically for U.S.-based Managed Service Providers looking to scale their capacity cost-effectively.",
    icon: Moon
  },
  {
    title: "Proactive Patch Management",
    description: "Regular, non-disruptive software maintenance and patch automation to keep systems secure and up to date.",
    icon: ShieldCheck
  },
  {
    title: "Scalable Team Extension",
    description: "Build dedicated outsourced technical teams in Pakistan to expand capability and reduce operational overhead.",
    icon: Users
  },
  {
    title: "CRM & Back-Office Support",
    description: "Specialized CRM administration to improve automation, data pipelines, and sales efficiency.",
    icon: Database
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold mb-4"
          >
            Our <span className="text-gradient">Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-light-gray max-w-2xl mx-auto text-lg"
          >
            We don&apos;t just fix problems; we prevent them. Explore our suite of managed 
            services designed for the modern enterprise.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 rounded-3xl group hover:border-cyan/30 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 text-cyan">
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-cyan transition-colors">
                {service.title}
              </h3>
              <p className="text-light-gray leading-relaxed mb-6">
                {service.description}
              </p>
              <div className="border-t border-white/10 pt-4">
                {/* <h4 className="text-sm font-semibold text-cyan mb-3">Key Deliverables:</h4> */}
                <ul className="space-y-2">
                  {/* {service.deliverables.map((deliverable, idx) => (
                    <li key={idx} className="text-sm text-light-gray flex items-start">
                      <span className="text-cyan mr-2">•</span>
                      {deliverable}
                    </li>
                  ))} */}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Background Decorative Circles */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-electric-blue/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan/5 rounded-full blur-[100px] -z-10" />
    </section>
  );
};

export default Services;
