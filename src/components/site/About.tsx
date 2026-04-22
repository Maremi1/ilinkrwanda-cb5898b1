export default function About() {
  return (
    <section id="about" className="container py-20 md:py-28">
      <div className="grid lg:grid-cols-2 gap-14 items-center">
        <div className="reveal">
          <div className="text-xs font-semibold tracking-widest text-ilink mb-4">THE 361° ADVANTAGE</div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-navy leading-tight">
            One degree beyond <span className="text-gradient">a full circle</span>
          </h2>
          <p className="mt-6 text-navy/70 text-lg leading-relaxed">
            We don't just complete the circle of strategy, technology and execution — we go one
            degree further. Our 361° Holistic Approach blends regulatory mastery, technological
            innovation and on-the-ground community networks to deliver solutions that perform
            in the real Rwandan market.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            {[
              { t: "Strategy + R&D", d: "Market-validated product blueprints" },
              { t: "Regulation-First", d: "Built for compliance from day one" },
              { t: "Tech Platforms", d: "Proprietary digital infrastructure" },
              { t: "Last-Mile Network", d: "451 ambassadors, 30 districts" },
            ].map((b) => (
              <div key={b.t} className="glass rounded-2xl p-5">
                <div className="font-semibold text-navy">{b.t}</div>
                <div className="text-sm text-muted-foreground mt-1">{b.d}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 361 Diagram */}
        <div className="relative reveal flex justify-center">
          <div className="relative w-[340px] h-[340px] md:w-[440px] md:h-[440px]">
            <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full -rotate-90">
              <defs>
                <linearGradient id="arc" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="hsl(203 82% 51%)" />
                  <stop offset="100%" stopColor="hsl(199 88% 72%)" />
                </linearGradient>
              </defs>
              <circle cx="100" cy="100" r="86" fill="none" stroke="hsl(210 30% 90%)" strokeWidth="3" />
              <circle
                cx="100" cy="100" r="86" fill="none" stroke="url(#arc)" strokeWidth="6"
                strokeLinecap="round" strokeDasharray="540 540"
                style={{ transformOrigin: "center", transform: "rotate(2deg)" }}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <div className="font-display text-7xl md:text-8xl font-bold text-gradient leading-none">361°</div>
              <div className="mt-2 text-sm uppercase tracking-widest text-navy/60">Holistic Approach</div>
            </div>
            {/* tiny dot at the +1 degree */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-ilink shadow-lg shadow-ilink/60 animate-pulse-glow" />
          </div>
        </div>
      </div>
    </section>
  );
}
