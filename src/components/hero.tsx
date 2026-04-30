"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full bg-black flex items-center justify-center overflow-hidden pt-20">
      {/* Background Typography - Outlined Effect */}
      <div className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none select-none opacity-20">
        <h2 
          className="text-[15vw] leading-none font-black uppercase text-transparent"
          style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}
        >
          Developer
        </h2>
        <h2 
          className="text-[15vw] leading-none font-black uppercase text-transparent"
          style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}
        >
          Software Engineer
        </h2>
      </div>


      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-center">
        {/* Main Headline */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black uppercase leading-none text-white flex flex-col">
              <span className="block">I&apos;m an Agentic AI </span>
              <span 
                className="block text-transparent"
                style={{ WebkitTextStroke: '2px white' }}
              >
              & Fullstack Developer
              </span>
            </h1>
          </motion.div>
        </div>

        {/* Grayscale Subject Image */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative w-full max-w-sm md:max-w-lg aspect-square flex items-end justify-center"
        >
          {/* Portrait image */}
          <div className="w-full h-full relative rounded-full overflow-hidden shadow-2xl">
             <Image 
               src="/Images/hero_image.jpeg" 
               alt="Confident UI/UX Designer"
               fill
               priority
               className="object-cover object-top"
             />
          </div>
        </motion.div>

        {/* Floating Tag */}
        {/* <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute right-6 md:right-24 bottom-24 md:bottom-48 bg-white text-black px-6 py-4 flex flex-col"
        >
          <span className="text-xs font-black uppercase tracking-widest">Experience</span>
          <span className="text-3xl font-black">5+ YEARS</span>
        </motion.div> */}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-[1px] h-12 bg-[#FF5722]" />
        <span className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold [writing-mode:vertical-rl]">
          Scroll
        </span>
      </motion.div>
    </section>
  );
}
