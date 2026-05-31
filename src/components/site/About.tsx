import aboutTeam from "@/assets/about-team.jpg";
import aboutFintech from "@/assets/about-fintech.jpg";
import aboutRural from "@/assets/about-rural.jpg";

const fieldStrip = [
  { src: aboutTeam, alt: "iLink team meeting in modern Kigali office", caption: "Team strategy" },
  { src: aboutFintech, alt: "Hand holding smartphone with fintech dashboard", caption: "Digital platforms" },
  { src: aboutRural, alt: "Rural Rwandan landscape with cell tower at sunset", caption: "Last-mile reach" },
];

export default function About() {
  return (
    <section id="about" className="container py-20 md:py-28">
      <div className="grid lg:grid-cols-2 gap-14 items-center">
        <div className="reveal">
          <div className="text-xs font-semibold tracking-widest text-ilink mb-4">THE 361° ADVANTAGE</div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-navy leading-tight">
            One degree beyond <span className="text-gradient">the circle</span>
          </h2>
          <p className="mt-6 text-navy/70 text-lg leading-relaxed">
            Our 361° Approach fuses regulation, technology and last-mile networks
            into solutions built for the real Rwandan market.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            {[
              { t: "Strategy + R&D", d: "Market-validated blueprints" },
              { t: "Regulation-First", d: "Compliant by design" },
              { t: "Tech Platforms", d: "Proprietary infrastructure" },
              { t: "Last-Mile Network", d: "451 ambassadors · 30 districts" },
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
          <div className="group relative w-[340px] h-[340px] md:w-[440px] md:h-[440px] [&_.animate-orbit-dot]:hover:[animation-play-state:paused] [&_.animate-orbit-dot-sm]:hover:[animation-play-state:paused] [&_.animate-trail-spin]:hover:[animation-play-state:paused] [&_.animate-degree-pop]:hover:[animation-play-state:paused] [&_.animate-pulse-glow]:hover:[animation-play-state:paused]">
            {/* Soft glow halo */}
            <div className="absolute inset-6 rounded-full bg-gradient-to-br from-ilink/20 via-sky/10 to-transparent blur-2xl animate-pulse-glow" />

            <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full -rotate-90">
              <defs>
                <linearGradient id="arc" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="hsl(203 82% 51%)" />
                  <stop offset="100%" stopColor="hsl(199 88% 72%)" />
                </linearGradient>
                {/* Trail gradient: bright head -> transparent tail */}
                <linearGradient id="trail" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="hsl(199 88% 72%)" stopOpacity="0" />
                  <stop offset="70%" stopColor="hsl(203 82% 51%)" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="hsl(199 88% 80%)" stopOpacity="1" />
                </linearGradient>
                <filter id="arcGlow">
                  <feGaussianBlur stdDeviation="2" result="b" />
                  <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
                <filter id="trailGlow">
                  <feGaussianBlur stdDeviation="3.5" />
                </filter>
              </defs>
              {/* Dotted track */}
              <circle cx="100" cy="100" r="86" fill="none" stroke="hsl(210 30% 90%)" strokeWidth="3" strokeDasharray="2 6" />
              {/* Animated arc draw-on */}
              <circle
                cx="100" cy="100" r="86" fill="none" stroke="url(#arc)" strokeWidth="6"
                strokeLinecap="round" strokeDasharray="540"
                filter="url(#arcGlow)"
                className="animate-draw-arc"
              />
              {/* Glow trail spinning with the dot */}
              <g className="animate-trail-spin" style={{ transformOrigin: "100px 100px" }}>
                <circle
                  cx="100" cy="100" r="86" fill="none"
                  stroke="hsl(199 88% 72%)" strokeWidth="10"
                  strokeLinecap="round"
                  strokeDasharray="120 420"
                  strokeDashoffset="0"
                  opacity="0.55"
                  filter="url(#trailGlow)"
                />
                <circle
                  cx="100" cy="100" r="86" fill="none"
                  stroke="hsl(199 88% 80%)" strokeWidth="4"
                  strokeLinecap="round"
                  strokeDasharray="60 480"
                  strokeDashoffset="0"
                  opacity="0.9"
                />
              </g>
              {/* Tick marks every 10° */}
              {Array.from({ length: 36 }).map((_, i) => {
                const angle = (i * 10 * Math.PI) / 180;
                const x1 = 100 + Math.cos(angle) * 76;
                const y1 = 100 + Math.sin(angle) * 76;
                const x2 = 100 + Math.cos(angle) * 72;
                const y2 = 100 + Math.sin(angle) * 72;
                return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="hsl(203 82% 51%)" strokeOpacity="0.2" strokeWidth="1" />;
              })}
            </svg>

            {/* Center text with subtle pulse */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <div className="font-display text-7xl md:text-8xl font-bold text-gradient leading-none animate-degree-pop">361°</div>
              <div className="mt-2 text-sm uppercase tracking-widest text-navy/60">Holistic Approach</div>
            </div>

            {/* Orbiting dot — eased revolution */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="hidden md:block w-4 h-4 rounded-full bg-ilink shadow-[0_0_24px_6px_hsl(var(--ilink-blue)/0.6)] animate-orbit-dot" />
              <div className="md:hidden w-3 h-3 rounded-full bg-ilink shadow-[0_0_18px_4px_hsl(var(--ilink-blue)/0.6)] animate-orbit-dot-sm" />
            </div>
          </div>
        </div>
      </div>

      {/* In-the-field photo strip */}
      <div className="mt-16 grid sm:grid-cols-3 gap-4 reveal">
        {fieldStrip.map((f, i) => (
          <div
            key={f.caption}
            className="relative rounded-2xl overflow-hidden glass aspect-[4/3] group"
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <img
              src={f.src}
              alt={f.alt}
              width={800}
              height={600}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/75 via-navy/10 to-transparent" />
            <div className="absolute bottom-3 left-4 text-[11px] font-semibold tracking-widest uppercase text-white/95">
              {f.caption}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
