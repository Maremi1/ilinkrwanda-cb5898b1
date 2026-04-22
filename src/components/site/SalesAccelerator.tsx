import { Brain, Handshake, Atom, Wrench, RefreshCw } from "lucide-react";

const modules = [
  { icon: Brain, title: "Identity Boost", desc: "Rebuilding the seller's identity for the digital economy." },
  { icon: Handshake, title: "Trust Economy", desc: "Designing trust into every customer interaction." },
  { icon: Atom, title: "Quantum Physics of Sales", desc: "First-principles thinking applied to modern sales." },
  { icon: Wrench, title: "Modern Toolkit (AI)", desc: "Practical AI workflows for high-performing sales teams." },
  { icon: RefreshCw, title: "Learn · Unlearn · Relearn", desc: "A continuous adaptation framework for changing markets." },
];

export default function SalesAccelerator() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-navy-gradient" />
      <div className="absolute inset-0 -z-10 circuit-pattern opacity-20" />
      <div className="absolute -top-32 left-1/4 w-[500px] h-[500px] rounded-full bg-ilink/30 blur-3xl animate-blob -z-10" />
      <div className="absolute -bottom-32 right-1/4 w-[450px] h-[450px] rounded-full bg-sky/20 blur-3xl animate-blob -z-10" style={{ animationDelay: "4s" }} />

      <div className="container">
        <div className="text-center max-w-3xl mx-auto reveal">
          <div className="inline-flex items-center gap-2 glass-dark rounded-full px-4 py-1.5 mb-5">
            <span className="w-2 h-2 rounded-full bg-sky animate-pulse-glow" />
            <span className="text-xs font-semibold tracking-widest text-white/80">FLAGSHIP TRAINING PROGRAM</span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white leading-tight">
            Sales Accelerator: <span className="bg-gradient-to-r from-sky to-white bg-clip-text text-transparent">2026</span>
          </h2>
          <p className="mt-4 text-white/70 text-lg">
            A next-generation program rebuilding the modern sales professional — from identity
            and trust to AI-powered execution.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {modules.map((m, i) => (
            <div
              key={m.title}
              className="group glass-dark rounded-2xl p-6 reveal card-glow transition-all duration-500 hover:-translate-y-1.5 hover:bg-white/[0.08]"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-ilink to-sky flex items-center justify-center shadow-lg shadow-ilink/40 group-hover:shadow-ilink/70 transition-shadow">
                <m.icon className="text-white" size={22} />
              </div>
              <h3 className="mt-5 font-display font-bold text-white text-lg">{m.title}</h3>
              <p className="mt-2 text-sm text-white/70 leading-relaxed">{m.desc}</p>
              <div className="mt-5 inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-widest uppercase text-sky/80">
                Module {String(i + 1).padStart(2, "0")}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
