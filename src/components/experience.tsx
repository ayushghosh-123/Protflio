"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    year: "2022 - Present",
    company: "Tech Solutions Inc.",
    role: "Senior UI/UX Designer",
    description: "Leading the design team in creating high-end enterprise applications and design systems.",
  },
  {
    year: "2019 - 2022",
    company: "Digital Agency Co.",
    role: "Full Stack Developer",
    description: "Built scalable web applications using the MERN stack for global clients.",
  },
  {
    year: "2015 - 2019",
    company: "Freelance",
    role: "UI Designer & Developer",
    description: "Worked with startups to define their visual identity and build their first digital products.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <span className="text-[#FF5722] font-black tracking-[0.3em] uppercase text-sm mb-4 block">
            Journey
          </span>
          <h2 className="text-5xl md:text-7xl font-black uppercase">
            Work <span className="text-transparent" style={{ WebkitTextStroke: '1px white' }}>Experience</span>
          </h2>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2 hidden md:block" />

          <div className="space-y-20">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`relative flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div className="w-full md:w-1/2 px-0 md:px-12">
                  <div className={`p-8 bg-white/5 border border-white/5 hover:border-[#FF5722]/30 transition-colors ${
                    index % 2 === 0 ? "text-left md:text-right" : "text-left"
                  }`}>
                    <span className="text-[#FF5722] font-black text-sm uppercase tracking-widest mb-2 block">
                      {exp.year}
                    </span>
                    <h3 className="text-2xl font-black uppercase mb-1">{exp.company}</h3>
                    <p className="text-white/60 font-bold uppercase text-xs tracking-widest mb-4">
                      {exp.role}
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-[#FF5722] rounded-full -translate-x-1/2 top-0 md:top-1/2 -translate-y-1/2 z-10 hidden md:block shadow-[0_0_20px_rgba(255,87,34,0.5)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
