import logo from "@/assets/ilink-logo.png";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 -z-10 bg-mesh" />
      <div className="absolute -top-24 -left-24 w-[500px] h-[500px] rounded-full bg-ilink/20 blur-3xl animate-blob -z-10" />
      <div className="absolute top-40 -right-32 w-[480px] h-[480px] rounded-full bg-sky/30 blur-3xl animate-blob -z-10" style={{ animationDelay: "5s" }} />
      <div className="absolute inset-0 circuit-pattern opacity-40 -z-10" />

      <div className="container grid lg:grid-cols-2 gap-12 items-center">
        <div className="reveal">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-ilink animate-pulse-glow" />
            <span className="text-xs font-semibold tracking-widest text-navy/80">ARCHITECTING RWANDA'S DIGITAL & FINANCIAL FUTURE</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-[3.75rem] font-bold text-navy leading-[1.08] tracking-tight text-balance">
            Building Market-Ready Solutions with a{" "}
            <span className="text-gradient">361° Holistic Approach</span>
          </h1>
          <p className="mt-6 text-lg text-navy/70 max-w-xl leading-relaxed">
            A pioneering MARTECH and digital financial services firm transforming Rwanda's
            economy through proprietary platforms, deep regulatory expertise, and an
            ecosystem that goes one degree beyond a full circle.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#services" className="group inline-flex items-center gap-2 rounded-2xl px-7 py-4 text-sm font-semibold text-white bg-gradient-to-r from-ilink to-sky shadow-xl shadow-ilink/30 hover:shadow-ilink/50 transition-all hover:-translate-y-0.5 ring-focus">
              Explore Solutions <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#about" className="inline-flex items-center gap-2 glass rounded-2xl px-7 py-4 text-sm font-semibold text-navy hover:bg-white/85 transition-colors ring-focus">
              <Play size={14} className="text-ilink" /> Watch Our Story
            </a>
          </div>

          {/* Mini trust row */}
          <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-navy/60">
            <div className="flex -space-x-2">
              <span className="w-6 h-6 rounded-full bg-gradient-to-br from-ilink to-sky border-2 border-white" />
              <span className="w-6 h-6 rounded-full bg-gradient-to-br from-sky to-navy border-2 border-white" />
              <span className="w-6 h-6 rounded-full bg-gradient-to-br from-navy to-ilink border-2 border-white" />
            </div>
            <span><strong className="text-navy font-semibold">Trusted</strong> by regulators, INGOs & enterprise partners across Rwanda</span>
          </div>
        </div>

        {/* Glass orbital chip panel */}
        <div className="relative reveal flex justify-center lg:justify-end">
          <div className="relative w-[320px] h-[320px] md:w-[440px] md:h-[440px]">
            {/* Outer orbit ring */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-ilink/20 animate-orbit" />
            <div className="absolute inset-8 rounded-full border border-ilink/15" />
            <div className="absolute inset-16 rounded-full border border-ilink/10" />

            {/* Orbiting nodes */}
            <div className="absolute inset-0 animate-orbit" style={{ animationDuration: "20s" }}>
              <span className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-ilink shadow-lg shadow-ilink/50" />
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-sky shadow-lg shadow-sky/50" />
            </div>
            <div className="absolute inset-8 animate-orbit" style={{ animationDuration: "28s", animationDirection: "reverse" }}>
              <span className="absolute top-1/2 left-0 -translate-y-1/2 w-3 h-3 rounded-full bg-navy shadow-md" />
              <span className="absolute top-1/2 right-0 -translate-y-1/2 w-3 h-3 rounded-full bg-ilink/70" />
            </div>

            {/* Center glass disc with logo */}
            <div className="absolute inset-1/4 glass-strong rounded-full flex items-center justify-center animate-float">
              <img src={logo} alt="I Link chip" className="w-3/4 h-3/4 object-contain" />
            </div>

            {/* Floating glass info chips */}
            <div className="absolute -top-2 -right-4 glass rounded-2xl px-3 py-2 animate-float" style={{ animationDelay: "1s" }}>
              <div className="text-[10px] text-muted-foreground">Households</div>
              <div className="text-sm font-bold text-navy">1.8M+</div>
            </div>
            <div className="absolute -bottom-4 -left-4 glass rounded-2xl px-3 py-2 animate-float" style={{ animationDelay: "2s" }}>
              <div className="text-[10px] text-muted-foreground">FIA Ambassadors</div>
              <div className="text-sm font-bold text-navy">451</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
