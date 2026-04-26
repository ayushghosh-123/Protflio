"use client";

import { motion } from "framer-motion";
import { Briefcase, CheckCircle, Users } from "lucide-react";

export default function About() {
  const stats = [
    {
      label: "Years Experience",
      value: "10+",
      icon: <Briefcase className="text-[#FF5722]" size={24} />,
    },
    {
      label: "Completed Projects",
      value: "64+",
      icon: <CheckCircle className="text-[#FF5722]" size={24} />,
    },
    {
      label: "Happy Clients",
      value: "151+",
      icon: <Users className="text-[#FF5722]" size={24} />,
    },
  ];

  return (
    <section id="about" className="py-24 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#FF5722] font-black tracking-[0.3em] uppercase text-sm mb-4 block">
              Hello
            </span>
            <h2 className="text-5xl md:text-6xl font-black uppercase mb-8 leading-tight">
              I’m <span className="text-transparent" style={{ WebkitTextStroke: '1px white' }}>Alex Dev</span>
            </h2>
            
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
              I am a UI/UX Designer and Full Stack Developer based in San Francisco. 
              I have a passion for creating clean, functional, and user-centered digital 
              experiences. With over a decade of experience, I specialize in solving 
              complex problems through elegant design and robust code.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t border-white/10">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <div className="mb-2">{stat.icon}</div>
                  <span className="text-3xl font-black">{stat.value}</span>
                  <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Decorative Background Box */}
            <div className="absolute -top-6 -right-6 w-full h-full border-2 border-[#FF5722] -z-0" />
            
            <div className="relative z-10 grayscale hover:grayscale-0 transition-all duration-700 aspect-[4/5] bg-gray-900 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop"
                alt="Developer working with coffee"
                className="w-full h-full object-cover"
              />
              
              {/* Subtle Overlay */}
              <div className="absolute inset-0 bg-black/20" />
            </div>

            {/* Orange Accent Badge */}
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#FF5722] hidden md:flex items-center justify-center p-6 text-center leading-tight">
              <span className="font-black text-xs uppercase tracking-tighter">
                Design Thinking
              </span>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
