import { CheckCircle2 } from "lucide-react";

export default function FIA() {
  const nodes = [
    { x: 30, y: 35 }, { x: 50, y: 25 }, { x: 70, y: 40 },
    { x: 25, y: 55 }, { x: 45, y: 50 }, { x: 65, y: 60 },
    { x: 40, y: 70 }, { x: 60, y: 75 }, { x: 80, y: 55 },
  ];
  return (
    <section id="impact" className="container py-20 md:py-28">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="reveal">
          <div className="text-xs font-semibold tracking-widest text-ilink mb-3">FLAGSHIP CASE STUDY</div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-navy leading-tight">
            The <span className="text-gradient">FIA Network Program</span>
          </h2>
          <div className="flex flex-wrap gap-2 mt-5">
            <span className="glass rounded-full px-3 py-1 text-xs font-semibold text-navy">Lead Implementing Partner</span>
            <span className="glass rounded-full px-3 py-1 text-xs font-semibold text-navy">Technology & Platform Partner</span>
          </div>
          <p className="mt-6 text-navy/70 text-lg leading-relaxed">
            The Financial Inclusion Ambassadors program is Rwanda's most ambitious last-mile
            financial literacy and product distribution network. Working with national partners,
            we deploy, train and equip 451 ambassadors across 30 districts — bringing financial
            services directly to 1.8M+ households.
          </p>
          <div className="mt-7 grid sm:grid-cols-3 gap-4">
            {[
              { v: "451", l: "Ambassadors" },
              { v: "30", l: "Districts" },
              { v: "1.8M+", l: "Households" },
            ].map((s) => (
              <div key={s.l} className="glass rounded-2xl p-4 text-center">
                <div className="font-display text-2xl font-bold text-gradient">{s.v}</div>
                <div className="text-xs text-navy/70 mt-1 font-medium">{s.l}</div>
              </div>
            ))}
          </div>
          <ul className="mt-6 space-y-2">
            {["Custom ambassador management platform", "Real-time field data & analytics", "Integrated training & certification"].map((x) => (
              <li key={x} className="flex items-center gap-2 text-sm text-navy/80">
                <CheckCircle2 size={16} className="text-ilink" />
                {x}
              </li>
            ))}
          </ul>
        </div>

        {/* Stylized Rwanda map with glowing nodes */}
        <div className="reveal relative">
          <div className="glass-strong rounded-3xl p-8 aspect-square relative overflow-hidden">
            <div className="absolute inset-0 circuit-pattern opacity-30" />
            <svg viewBox="0 0 100 100" className="w-full h-full relative">
              <defs>
                <radialGradient id="glow" cx="50%" cy="50%">
                  <stop offset="0%" stopColor="hsl(203 82% 51%)" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="hsl(203 82% 51%)" stopOpacity="0" />
                </radialGradient>
              </defs>
              {/* Stylized Rwanda silhouette */}
              <path
                d="M25,28 Q35,18 50,20 Q65,22 78,30 Q85,42 82,55 Q78,68 70,78 Q55,85 40,82 Q28,78 22,68 Q18,55 20,42 Q22,32 25,28 Z"
                fill="hsl(203 82% 51% / 0.08)"
                stroke="hsl(203 82% 51% / 0.4)"
                strokeWidth="0.5"
              />
              {/* Connections */}
              {nodes.map((n, i) =>
                nodes.slice(i + 1, i + 3).map((m, j) => (
                  <line key={`${i}-${j}`} x1={n.x} y1={n.y} x2={m.x} y2={m.y}
                    stroke="hsl(203 82% 51% / 0.25)" strokeWidth="0.3" />
                ))
              )}
              {/* Nodes */}
              {nodes.map((n, i) => (
                <g key={i}>
                  <circle cx={n.x} cy={n.y} r="3" fill="url(#glow)" />
                  <circle cx={n.x} cy={n.y} r="1.2" fill="hsl(203 82% 51%)">
                    <animate attributeName="opacity" values="0.5;1;0.5" dur={`${2 + (i % 3)}s`} repeatCount="indefinite" />
                  </circle>
                </g>
              ))}
            </svg>
            <div className="absolute bottom-6 left-6 right-6 glass rounded-2xl p-4">
              <div className="text-xs uppercase tracking-widest text-ilink font-semibold">Live Network</div>
              <div className="text-sm text-navy/80 mt-0.5">30 Districts · Real-time Coverage</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
