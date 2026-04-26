import { Award, BookOpen, Briefcase, Globe2, ShieldCheck, Users, Sparkles, Landmark } from "lucide-react";
import iconRegulatory from "@/assets/leadership-icon-regulatory.png";
import iconTech from "@/assets/leadership-icon-tech.png";

const leaders = [
  {
    title: "Regulatory Authority & Financial Innovation Expert",
    tagline: "Shaping inclusive finance across East & Central Africa.",
    icon: iconRegulatory,
    stats: [
      { value: "18+", label: "Years Advisory" },
      { value: "500+", label: "Pros Certified" },
      { value: "10+", label: "Books Authored" },
    ],
    chips: [
      { icon: ShieldCheck, label: "UNDP & ILO Advisor" },
      { icon: BookOpen, label: "National Strategies" },
      { icon: Award, label: "AIO Best Book Award" },
      { icon: Landmark, label: "Insurance Regulation" },
    ],
  },
  {
    title: "Visionary Technologist & Government Policies Advocate",
    tagline: "Architecting Rwanda's digital and public-sector future.",
    icon: iconTech,
    stats: [
      { value: "15+", label: "Years Tech" },
      { value: "9", label: "Platforms Built" },
      { value: "1", label: "AfCFTA Seat" },
    ],
    chips: [
      { icon: Briefcase, label: "Enterprise Sales" },
      { icon: Globe2, label: "AfCFTA Committee" },
      { icon: ShieldCheck, label: "e-Gov Procurement" },
      { icon: Sparkles, label: "Multi-Award Winner" },
    ],
  },
];

export default function Leadership() {
  return (
    <section id="leadership" className="container py-20 md:py-28">
      <div className="text-center max-w-3xl mx-auto reveal">
        <div className="text-xs font-semibold tracking-widest text-ilink mb-3">LEADERSHIP</div>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-navy">
          A <span className="text-gradient">synergistic partnership</span> of visionary leaders
        </h2>
      </div>

      <div className="mt-14 grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {leaders.map((l) => (
          <div
            key={l.title}
            className="group relative rounded-3xl p-8 hover-lift reveal card-glow backdrop-blur-2xl border-2 border-white/80 ring-1 ring-ilink/10 transition-all duration-500 hover:border-ilink/60 hover:ring-2 hover:ring-ilink/30"
            style={{
              background:
                "linear-gradient(140deg, hsl(0 0% 100% / 0.92) 0%, hsl(200 100% 97% / 0.85) 55%, hsl(199 88% 92% / 0.78) 100%)",
              boxShadow:
                "0 24px 60px -24px hsl(var(--navy) / 0.25), 0 4px 16px -4px hsl(var(--ilink-blue) / 0.12), inset 0 1px 0 hsl(0 0% 100% / 0.9)",
            }}
          >
            <div className="flex items-start gap-5">
              <div className="relative w-20 h-20 shrink-0 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-sky/25 to-ilink/15 rounded-2xl blur-lg" />
                <img
                  src={l.icon}
                  alt=""
                  width={80}
                  height={80}
                  loading="lazy"
                  decoding="async"
                  className="relative w-20 h-20 object-contain"
                />
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-widest text-ilink font-semibold transition-colors group-hover:text-navy">Co-Founder</div>
                <h3 className="font-display font-bold text-navy text-lg md:text-xl leading-snug mt-1 transition-colors group-hover:text-navy-deep">
                  {l.title}
                </h3>
                <p className="text-navy/65 text-sm mt-2 transition-colors group-hover:text-navy/90">{l.tagline}</p>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              {l.stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl p-3 text-center backdrop-blur-md border border-white/90 ring-1 ring-ilink/15 bg-white/75 shadow-sm"
                >
                  <div className="font-display font-bold text-2xl text-gradient leading-none">{s.value}</div>
                  <div className="text-[10px] uppercase tracking-wider text-navy/70 font-semibold mt-1.5">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {l.chips.map((c) => (
                <div
                  key={c.label}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/85 border border-ilink/25 shadow-sm"
                >
                  <c.icon size={13} className="text-ilink shrink-0" />
                  <span className="text-xs font-semibold text-navy">{c.label}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
