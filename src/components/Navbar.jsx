import { Github, Linkedin, Mail } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/40 bg-white/30 border-b border-white/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="font-semibold tracking-tight text-slate-900 dark:text-white text-lg">Dev Portfolio</a>
        <nav className="hidden md:flex items-center gap-6 text-slate-700 dark:text-slate-200">
          <a href="#work" className="hover:text-slate-900 dark:hover:text-white transition">Work</a>
          <a href="#about" className="hover:text-slate-900 dark:hover:text-white transition">About</a>
          <a href="#contact" className="hover:text-slate-900 dark:hover:text-white transition">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <a aria-label="GitHub" href="https://github.com" target="_blank" rel="noreferrer" className="p-2 rounded-full hover:bg-white/50 transition border border-white/30">
            <Github className="h-5 w-5" />
          </a>
          <a aria-label="LinkedIn" href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded-full hover:bg-white/50 transition border border-white/30">
            <Linkedin className="h-5 w-5" />
          </a>
          <a aria-label="Email" href="#contact" className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 text-white hover:bg-slate-800 transition text-sm">
            <Mail className="h-4 w-4" />
            Hire me
          </a>
        </div>
      </div>
    </header>
  );
}
