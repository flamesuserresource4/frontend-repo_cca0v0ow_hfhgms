import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";

export default function Hero3D() {
  return (
    <section id="home" className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Top gradient glow - non-blocking for interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white/0" />

      <div className="relative z-10 mx-auto max-w-7xl h-full px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900"
          >
            Building delightful software with creativity and code
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="mt-4 text-lg sm:text-xl text-slate-700"
          >
            I’m a fresher developer focused on modern web experiences — performant, accessible, and playful.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-8 flex items-center gap-3"
          >
            <a href="#work" className="px-5 py-3 rounded-xl bg-slate-900 text-white hover:bg-slate-800 transition shadow-lg shadow-slate-900/10">See my work</a>
            <a href="#contact" className="px-5 py-3 rounded-xl bg-white/60 backdrop-blur border border-white/40 hover:bg-white/80 transition">Let’s talk</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
