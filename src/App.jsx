import Navbar from "./components/Navbar";
import Hero3D from "./components/Hero3D";
import Projects from "./components/Projects";
import ContactSection from "./components/ContactSection";

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero3D />
        <section id="about" className="relative py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Hi, I’m a fresher software developer</h2>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  I love crafting immersive, high-quality web experiences that feel fast and fun. My strengths are modern
                  JavaScript, React, and clean UI with a focus on accessibility and performance. I enjoy learning new tools
                  and translating product ideas into delightful interactions.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {["React", "TypeScript", "Node", "Tailwind", "Framer Motion"].map((t) => (
                    <span key={t} className="px-3 py-1.5 rounded-full text-sm bg-slate-100 text-slate-700 border border-slate-200">{t}</span>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-200 via-cyan-200 to-emerald-200 rounded-3xl blur-2xl opacity-60" />
                <div className="relative rounded-3xl border border-slate-200 bg-white/70 backdrop-blur p-6 shadow-xl">
                  <p className="text-slate-700">
                    I’m actively looking for roles where I can contribute to real products, collaborate with mentors, and grow quickly.
                    If you’re building something ambitious, I’d love to help.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Projects />
        <ContactSection />
      </main>
      <footer className="border-t border-slate-200 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} Dev Portfolio. All rights reserved.</p>
          <a href="#home" className="text-sm text-slate-600 hover:text-slate-900">Back to top</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
