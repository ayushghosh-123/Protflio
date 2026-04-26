"use client";

import { motion } from "framer-motion";
import { Code2, Database, Layout, Terminal } from "lucide-react";

const skillCategories = [
  {
    title: "UI/UX Design",
    icon: <Layout className="text-[#FF5722]" size={32} />,
    skills: ["Figma", "Adobe XD", "Prototyping", "User Research", "Wireframing"],
  },
  {
    title: "Frontend",
    icon: <Terminal className="text-[#FF5722]" size={32} />,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend",
    icon: <Database className="text-[#FF5722]" size={32} />,
    skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "GraphQL"],
  },
  {
    title: "DevOps",
    icon: <Code2 className="text-[#FF5722]" size={32} />,
    skills: ["Git", "Docker", "AWS", "Vercel", "CI/CD"],
  },
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
              <ul className="space-y-3">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-3 text-gray-400 text-sm font-bold uppercase tracking-widest">
                    <div className="w-1.5 h-1.5 bg-[#FF5722]" />
                    {skill}
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
