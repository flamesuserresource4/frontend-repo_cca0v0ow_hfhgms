import { motion } from "framer-motion";
import { Code, Globe, Cpu } from "lucide-react";

const projects = [
  {
    title: "Interactive 3D Landing",
    icon: Globe,
    description:
      "A playful landing page using WebGL/Spline with buttery-smooth interactions and responsive design.",
    tags: ["React", "Spline", "Tailwind"],
  },
  {
    title: "Dev Utility Toolkit",
    icon: Code,
    description:
      "A set of small, accessible components and hooks optimized for performance and DX.",
    tags: ["TypeScript", "Vite", "Hooks"],
  },
  {
    title: "AI-Powered Snippets",
    icon: Cpu,
    description:
      "Experimenting with AI workflows to speed up repetitive coding tasks and content generation.",
    tags: ["AI", "APIs", "UX"],
  },
];

export default function Projects() {
  return (
    <section id="work" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Selected work</h2>
          <p className="mt-2 text-slate-600">A few projects that showcase my interests and style.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.05 * i }}
              className="group rounded-2xl border border-slate-200 bg-white/70 backdrop-blur p-6 hover:shadow-xl hover:-translate-y-1 transition will-change-transform"
            >
              <div className="h-12 w-12 grid place-items-center rounded-xl bg-slate-900 text-white shadow-lg shadow-slate-900/20">
                <p.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-slate-900">{p.title}</h3>
              <p className="mt-2 text-slate-600">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded-full text-xs bg-slate-100 text-slate-700 border border-slate-200">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
