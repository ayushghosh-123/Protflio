"use client";

import { motion } from "framer-motion";
import { Terminal, Database, Code2, Cpu } from "lucide-react";
import { FaRobot, FaBrain, FaNetworkWired, FaMemory } from "react-icons/fa";

const skillCategories = [
  {
    title: "Frontend",
    icon: <Terminal className="text-[#FF5722]" size={32} />,
    skills: [
      { name: "React", icon: '' },
      { name: "Next.js", icon: '' },
      { name: "TypeScript", icon: '' },
      { name: "Tailwind CSS", icon: '<SiTailwindcss />' },
      { name: "Framer Motion", icon: '<SiFramer /> '},
    ],
  },
  {
    title: "Backend",
    icon: <Database className="text-[#FF5722]" size={32} />,
    skills: [
      { name: "Node.js", icon: '<SiNodedotjs />' },
      { name: "Express", icon:'' },
      { name: "PostgreSQL", icon: '<SiPostgresql />' },
      { name: "MongoDB", icon: '<SiMongodb /> '},
      { name: "GraphQL", icon: '<SiGraphql />' },
    ],
  },
  {
    title: "DevOps",
    icon: <Code2 className="text-[#FF5722]" size={32} />,
    skills: [
      { name: "Git", icon: '<SiGit />' },
      { name: "Docker", icon: '<SiDocker />' },
      { name: "Vercel", icon: '<SiVercel />' },
      
    ],
  },
  {
    title: "Agentic AI",
    icon: <Cpu className="text-[#FF5722]" size={32} />,
    skills: [
      { name: "Langchain", icon: '<SiLangchain /> '},
      { name: "Langgraph", icon: '<FaNetworkWired />' },
      { name: "Memory0", icon: '<FaMemory /> '},
      { name: "Ollama", icon: '<SiOllama />' },
      { name: "RAG", icon: '<FaBrain />' },
      { name: "Openai SDK", icon:' <SiOpenai />' },
    ],
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-[#FF5722] font-black tracking-[0.3em] uppercase text-sm mb-4 block">
              Expertise
            </span>
            <h2 className="text-5xl md:text-6xl font-black uppercase leading-tight">
              Technical <span className="text-transparent" style={{ WebkitTextStroke: '1px white' }}>Skills</span>
            </h2>
          </div>
          <p className="text-gray-400 text-lg max-w-sm">
            Crafting digital solutions with the latest technologies and design principles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 border border-white/5 bg-white/5 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                {category.icon}
              </div>
              <h3 className="text-xl font-black uppercase mb-6 tracking-wider">{category.title}</h3>
              <ul className="space-y-4">
                {category.skills.map((skill) => (
                  <li key={skill.name} className="flex items-center gap-3 text-gray-400 text-sm font-bold uppercase tracking-widest group/skill transition-colors hover:text-white">
                    <span className="text-[#FF5722] text-lg transition-transform group-hover/skill:scale-125">
                      {skill.icon}
                    </span>
                    {skill.name}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
