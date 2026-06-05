"use client";

import { motion } from "framer-motion";
import { 
  Headphones, 
  Moon, 
  Cloud, 
  UserPlus, 
  Monitor, 
  ShieldCheck 
} from "lucide-react";

const services = [
  {
    title: "Managed Help Desk",
    description: "24/7 ticket support for your team. Real people, real solutions, real fast.",
    icon: Headphones,
    color: "text-blue-400",
  },
  {
    title: "After-Hour MSP",
    description: "Night shift coverage ensuring your systems stay healthy while you sleep.",
    icon: Moon,
    color: "text-purple-400",
  },
  {
    title: "Microsoft 365",
    description: "Expert setup, migration, and management of your productivity suite.",
    icon: Cloud,
    color: "text-orange-400",
  },
  {
    title: "Team Extension",
    description: "Scalable tech teams that plug directly into your existing workflow.",
    icon: UserPlus,
    color: "text-cyan",
  },
  {
    title: "Remote IT Support",
    description: "Instant VPN setup and expert troubleshooting from anywhere in the world.",
    icon: Monitor,
    color: "text-yellow-400",
  },
  {
    title: "Patch Management",
    description: "Scheduled updates and security patches to keep your infrastructure secure.",
    icon: ShieldCheck,
    color: "text-green-400",
  },
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
            Comprehensive <span className="text-gradient">IT Solutions</span>
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
              className="glass-card p-8 rounded-3xl group cursor-pointer"
            >
              <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 ${service.color}`}>
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-cyan transition-colors">
                {service.title}
              </h3>
              <p className="text-light-gray leading-relaxed mb-6">
                {service.description}
              </p>
              <div className="flex items-center text-sm font-bold text-cyan opacity-0 group-hover:opacity-100 transition-opacity">
                <span>Learn More</span>
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="9 5l7 7-7 7" />
                </svg>
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
