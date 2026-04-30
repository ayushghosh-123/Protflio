"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { ArrowUpRight } from "lucide-react";

export default function Contact() {
  const socials = [
    { name: "GitHub", icon: <FaGithub size={20} />, href: "https://github.com/ayushghosh-123" },
    { name: "LinkedIn", icon: <FaLinkedin size={20} />, href: "https://www.linkedin.com/in/ayush-ghosh-9659772b0/" },
    { name: "Twitter", icon: <FaXTwitter size={20} />, href: "https://x.com/AyushGhosh30804" },
    { name: "Email", icon: <SiGmail size={20} />, href: "mailto:ghosyayush910@gmail.com" }
  ];

  return (
    <section id="contact" className="relative py-32 bg-black text-white overflow-hidden">
      {/* Massive Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none opacity-[0.02]">
        <h2 className="text-[25vw] font-black uppercase leading-none">Contact</h2>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          
          {/* Left: Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[#FF5722] font-black tracking-[0.4em] uppercase text-sm mb-6 block">
                Let&apos;s Connect
              </span>
              <h2 className="text-6xl md:text-8xl font-black uppercase leading-[0.9] mb-12">
                Have a <br />
                <span className="text-transparent" style={{ WebkitTextStroke: '1px white' }}>Project?</span>
              </h2>
              
              <p className="text-gray-400 text-xl mb-16 max-w-md leading-relaxed">
                I&apos;m currently available for freelance work and full-time opportunities. 
                Let&apos;s build something extraordinary together.
              </p>

              <div className="space-y-12">

                <div className="flex gap-4 flex-wrap">
                  {socials.map((social, i) => (
                    <a 
                      key={i} 
                      href={social.href} 
                      className="px-6 py-3 border border-white/10 hover:border-[#FF5722] hover:text-[#FF5722] transition-all flex items-center gap-3 text-xs font-black uppercase tracking-widest"
                    >
                      {social.icon}
                      {social.name}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-[#FF5722]/5 -rotate-3 -z-10" />
            <div className="bg-[#111] p-8 md:p-12 border border-white/5">
              <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2 group">
                  <label className="text-[10px] uppercase tracking-widest font-black text-gray-500 group-focus-within:text-[#FF5722] transition-colors">Your Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-[#FF5722] transition-colors placeholder:text-gray-800 text-xl font-bold uppercase" 
                  />
                </div>
                <div className="space-y-2 group">
                  <label className="text-[10px] uppercase tracking-widest font-black text-gray-500 group-focus-within:text-[#FF5722] transition-colors">Your Email</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-[#FF5722] transition-colors placeholder:text-gray-800 text-xl font-bold uppercase" 
                  />
                </div>
                <div className="space-y-2 group">
                  <label className="text-[10px] uppercase tracking-widest font-black text-gray-500 group-focus-within:text-[#FF5722] transition-colors">Message</label>
                  <textarea 
                    rows={4} 
                    placeholder="Hello, I'd like to talk about..."
                    className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-[#FF5722] transition-colors placeholder:text-gray-800 text-xl font-bold uppercase resize-none" 
                  />
                </div>
                <button className="w-full py-6 bg-[#FF5722] text-white font-black uppercase tracking-[0.3em] text-xs hover:bg-white hover:text-black transition-all duration-500 flex items-center justify-center gap-3">
                  Send Message
                  <ArrowUpRight size={18} />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
