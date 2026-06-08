"use client";

import { motion, Variants } from "framer-motion"; 
import { Headphones, Cloud, Moon, ShieldCheck, Users, Database, ArrowRight, CheckCircle2, Workflow, Clock, Award } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const ServicesPage = () => {
  const services = [
    {
      icon: Headphones,
      title: "24/7 Managed Help Desk",
      description: "Comprehensive remote desktop support keeping your operations running smoothly around the clock. We handle troubleshooting, system glitches, and daily end-user issues with rapid response times.",
    },
    {
      icon: Cloud,
      title: "Microsoft 365 Setup & Support",
      description: "End-to-end administration and optimization of your cloud productivity ecosystem to ensure secure, seamless team collaboration.",
    },
    {
      icon: Moon,
      title: "After-Hours U.S. MSP Support",
      description: "White-label night-shift and weekend coverage designed specifically for U.S.-based Managed Service Providers looking to scale their capacity cost-effectively.",
    },
    {
      icon: ShieldCheck,
      title: "Proactive Patch Management",
      description: "Regular, non-disruptive software maintenance and patch automation to keep systems secure and up to date.",
    },
    {
      icon: Users,
      title: "Scalable Team Extension",
      description: "Build dedicated outsourced technical teams in Pakistan to expand capability and reduce operational overhead.",
    },
    {
      icon: Database,
      title: "CRM & Back-Office Support",
      description: "Specialized CRM administration to improve automation, data pipelines, and sales efficiency.",
    }
  ];

  const methodologies = [
    {
      icon: Workflow,
      title: "Seamless Integration",
      description: "We don't just work for you; we work with you. Our teams seamlessly integrate into your existing communication channels (Slack, Teams) and ticketing systems, acting as a natural extension of your internal workforce."
    },
    {
      icon: Clock,
      title: "Follow-the-Sun Coverage",
      description: "Leveraging our strategic location, we provide true 24/7 coverage. While your local team rests, our offshore experts manage overnight updates, security patching, and after-hours alerts."
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Every service we provide is backed by stringent quality control measures. We perform regular audits, monitor call and ticket quality, and ensure compliance with US-standard data security protocols."
    }
  ];

  // Animation variants for Framer Motion
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const openConsultationModal = () => {
    // Triggers the global modal defined in Navbar.tsx
    window.dispatchEvent(new CustomEvent('openModal'));
  };

  return (
    <main className="min-h-screen bg-[#050b14] text-white selection:bg-cyan selection:text-black">
      <Navbar />

      {/* Hero Section */}
      <div className="relative pt-40 pb-20 overflow-hidden border-b border-white/5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-electric-blue/10 rounded-full blur-[150px] -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              Our Premium <span className="text-cyan drop-shadow-md">Services</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              We deliver enterprise-grade IT solutions tailored for modern businesses. 
              Explore our core offerings designed to optimize, secure, and scale your operations without the overhead.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Core Services Grid Section */}
      <div className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What We Do Best</h2>
            <div className="w-24 h-1 bg-cyan mx-auto rounded-full" />
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="group relative p-8 rounded-3xl bg-[#0a1128]/50 border border-white/10 backdrop-blur-sm hover:bg-[#0a1128] hover:border-cyan/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,229,255,0.15)] flex flex-col h-full"
              >
                <div className="absolute top-0 left-0 w-full h-[2px] bg-linear-to-r from-transparent via-cyan to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-3xl" />

                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-cyan/10 group-hover:border-cyan/30 transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-cyan" strokeWidth={1.5} />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed grow">
                  {service.description}
                </p>

              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* New Section: Our Methodology / How We Work */}
      <div className="py-24 bg-[#080d1c] relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-cyan/5 rounded-full blur-[100px]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                How We Deliver <br />
                <span className="text-cyan">Excellence</span>
              </h2>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                We believe that outsourcing shouldn't feel disconnected. Our delivery model is built entirely around transparency, rapid communication, and aligning our technical teams directly with your business goals.
              </p>

              <div className="space-y-6">
                {[
                  "Dedicated Account Managers for single-point communication.",
                  "Strict compliance with data privacy and security standards.",
                  "Customized SLAs tailored to your specific business needs.",
                  "Continuous training programs for our technical staff."
                ].map((point, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <CheckCircle2 className="w-6 h-6 text-cyan shrink-0" />
                    <span className="text-gray-300">{point}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {methodologies.map((method, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors duration-300"
                >
                  <div className="flex items-start space-x-6">
                    <div className="p-3 rounded-xl bg-electric-blue/20 text-cyan">
                      <method.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{method.title}</h3>
                      <p className="text-gray-400 leading-relaxed text-sm">
                        {method.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </div>
      </div>

      

      <Footer />
    </main>
  );
};

export default ServicesPage;