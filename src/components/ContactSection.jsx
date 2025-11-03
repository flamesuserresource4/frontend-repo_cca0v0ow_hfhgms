import { Mail, Send } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Let’s build something great</h2>
          <p className="mt-2 text-slate-600">Open to internships, junior roles, and exciting collaborations.</p>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={(e) => {
            e.preventDefault();
            const data = new FormData(e.currentTarget);
            const subject = encodeURIComponent("Hey, let's connect!");
            const body = encodeURIComponent(
              `Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`
            );
            window.location.href = `mailto:you@example.com?subject=${subject}&body=${body}`;
          }}
          className="mx-auto max-w-2xl bg-white/70 backdrop-blur rounded-2xl border border-slate-200 p-6 sm:p-8"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700">Name</label>
              <input name="name" required className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-slate-200" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Email</label>
              <input name="email" type="email" required className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-slate-200" />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-slate-700">Message</label>
            <textarea name="message" rows={5} required className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-slate-200" />
          </div>
          <div className="mt-6 flex items-center justify-between gap-3">
            <a href="mailto:you@example.com" className="inline-flex items-center gap-2 text-slate-700 hover:text-slate-900">
              <Mail className="h-5 w-5" />
              you@example.com
            </a>
            <button type="submit" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 text-white hover:bg-slate-800 transition">
              Send message
              <Send className="h-4 w-4" />
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
