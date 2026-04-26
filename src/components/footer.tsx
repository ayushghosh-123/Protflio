"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-24">
          <div>
            <Link href="/" className="text-5xl font-black tracking-tighter text-white mb-6 block">
              PORT<span className="text-[#FF5722]">FOLIO</span>
            </Link>
            <p className="text-gray-500 max-w-xs font-bold uppercase text-[10px] tracking-[0.2em] leading-relaxed">
              Modern digital experiences crafted with precision and bold aesthetics.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-12 gap-y-6">
            <Link href="#about" className="text-xs font-black uppercase tracking-widest hover:text-[#FF5722] transition-colors">About</Link>
            <Link href="#skills" className="text-xs font-black uppercase tracking-widest hover:text-[#FF5722] transition-colors">Skills</Link>
            <Link href="#projects" className="text-xs font-black uppercase tracking-widest hover:text-[#FF5722] transition-colors">Projects</Link>
            <Link href="#contact" className="text-xs font-black uppercase tracking-widest hover:text-[#FF5722] transition-colors">Contact</Link>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between gap-6 items-center">
          <p className="text-[10px] uppercase tracking-[0.4em] text-gray-600 font-black">
            © {new Date().getFullYear()} ALEX DEV — ALL RIGHTS RESERVED
          </p>
          <div className="flex gap-8">
            <span className="text-[10px] uppercase tracking-[0.4em] text-gray-700 font-black">Local Time: {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
