"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { 
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, 
  SiNodedotjs, SiMongodb, SiPostgresql, SiOpenai, SiStripe,
  SiRecharts
} from "react-icons/si";
import Link from "next/link";

const techIcons: Record<string, JSX.Element> = {
  "React": <SiReact />,
  "Next.js": <SiNextdotjs />,
  "TypeScript": <SiTypescript />,
  "Tailwind CSS": <SiTailwindcss />,
  "Node.js": <SiNodedotjs />,
  "MongoDB": <SiMongodb />,
  "PostgreSQL": <SiPostgresql />,
  "OpenAI": <SiOpenai />,
  "Stripe": <SiStripe />,
  "Recharts": <SiRecharts />,
};

const projects = [
  {
    title: "AI-Powered Task Manager",
    description: "A smart task management app with AI-driven priority sorting and natural language processing.",
    tech: ["Next.js", "OpenAI", "PostgreSQL", "Tailwind CSS"],
    github: "https://github.com",
    live: "https://demo.com",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&q=80",
  },
  {
    title: "Eco-Commerce Platform",
    description: "Full-stack e-commerce solution focused on sustainable products with complex filtering and real-time inventory.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com",
    live: "https://demo.com",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
  },
  {
    title: "Real-time Crypto Tracker",
    description: "Live dashboard tracking cryptocurrency prices, market trends, and portfolio performance using WebSockets.",
    tech: ["TypeScript", "Next.js", "Recharts"],
    github: "https://github.com",
    live: "https://demo.com",
    image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&q=80",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#FF5722] font-black tracking-[0.3em] uppercase text-sm mb-4 block">
            Work
          </span>
          <h2 className="text-4xl md:text-6xl font-black uppercase text-white">
            Other <span className="text-transparent" style={{ WebkitTextStroke: '1px white' }}>Projects</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden flex flex-col h-full hover:border-[#FF5722]/30 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <Link
                    href={project.github}
                    className="p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-[#FF5722] transition-all"
                  >
                    <FaGithub size={20} className="text-white" />
                  </Link>
                  <Link
                    href={project.live}
                    className="p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-[#FF5722] transition-all"
                  >
                    <ExternalLink size={20} className="text-white" />
                  </Link>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-black uppercase mb-3 text-white tracking-tight">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-6 line-clamp-2">
                  {project.description}
                </p>
                <div className="mt-auto flex flex-wrap gap-3">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="flex items-center gap-2 px-3 py-1 bg-white/5 text-gray-300 text-[10px] font-black uppercase tracking-widest rounded-full border border-white/10 group-hover:border-[#FF5722]/20 transition-colors"
                    >
                      <span className="text-[#FF5722]">
                        {techIcons[t]}
                      </span>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
