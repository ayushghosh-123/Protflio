"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import Link from "next/link";

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
    tech: ["TypeScript", "Next.js", "Recharts", "Coingecko API"],
    github: "https://github.com",
    live: "https://demo.com",
    image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&q=80",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Selection of my recent work including web apps, AI tools, and full-stack solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group glass rounded-2xl overflow-hidden flex flex-col h-full"
            >
              <div className="relative h-48 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <Link
                    href={project.github}
                    className="p-3 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/40 transition-all"
                  >
                    <FaGithub size={20} className="text-white" />
                  </Link>
                  <Link
                    href={project.live}
                    className="p-3 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/40 transition-all"
                  >
                    <ExternalLink size={20} className="text-white" />
                  </Link>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-6 line-clamp-2">
                  {project.description}
                </p>
                <div className="mt-auto flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full border border-primary/20"
                    >
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
