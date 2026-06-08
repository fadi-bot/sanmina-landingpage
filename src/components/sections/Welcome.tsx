"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Welcome = () => {
  return (
    <section className="py-24 bg-white/5 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-electric-blue/10 rounded-full blur-[80px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image with decorative elements */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Decorative wave/curve */}
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-electric-blue/20 rounded-full blur-[60px]" />
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-cyan/20 rounded-full blur-[80px]" />

            {/* Dot grid pattern */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-10">
              <div className="grid grid-cols-8 gap-4">
                {Array.from({ length: 64 }).map((_, i) => (
                  <div key={i} className="w-2 h-2 bg-cyan rounded-full" />
                ))}
              </div>
            </div>

            {/* Main image placeholder */}
            <div className="relative bg-linear-to-br from-electric-blue/20 to-cyan/20 rounded-3xl p-8 shadow-xl border border-white/10">
              <div className="aspect-4/3 bg-white/5 rounded-2xl overflow-hidden relative">
                <Image
                  src="/welcome-image.jpg"
                  alt="Professional at work"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Right Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            {/* Small label */}
            <div className="text-cyan font-semibold text-sm uppercase tracking-widest mb-4">
              Welcome to Big Entities
            </div>

            {/* Main heading */}
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
              We always try to give smart solution for business
            </h2>

            {/* Subheading paragraph */}
            <p className="text-light-gray text-lg mb-10 leading-relaxed">
              The dedicated team of designers, engineers, and experienced software developers is committed to delivering superior-quality solutions that align with our clients' unique requirements.
            </p>

            {/* Feature grid */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              <div className="space-y-3">
                {[
                  "Innovation Hub",
                  "Agile and Adaptive",
                  "Work-Life-Balance"
                ].map((feature, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <div className="w-6 h-6 rounded-full bg-cyan flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-medium text-white">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-3">
                {[
                  "Collaborative Environment",
                  "Learning Culture",
                  "Ethical Values"
                ].map((feature, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <div className="w-6 h-6 rounded-full bg-cyan flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-medium text-white">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <Link
              href="/about-us"
              className="inline-block px-8 py-4 bg-electric-blue hover:bg-cyan text-white font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Discover More
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
