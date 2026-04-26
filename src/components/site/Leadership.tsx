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
          <div key={l.title} className="glass-strong rounded-3xl p-8 hover-lift reveal card-glow">
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
                <div className="text-[11px] uppercase tracking-widest text-ilink font-semibold">Co-Founder</div>
                <h3 className="font-display font-bold text-navy text-lg md:text-xl leading-snug mt-1">
                  {l.title}
                </h3>
                <p className="text-navy/65 text-sm mt-2">{l.tagline}</p>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              {l.stats.map((s) => (
                <div key={s.label} className="glass-blue rounded-2xl p-3 text-center">
                  <div className="font-display font-bold text-2xl text-gradient leading-none">{s.value}</div>
                  <div className="text-[10px] uppercase tracking-wider text-navy/60 font-medium mt-1.5">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {l.chips.map((c) => (
                <div key={c.label} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/70 border border-ilink/15">
                  <c.icon size={13} className="text-ilink shrink-0" />
                  <span className="text-xs font-medium text-navy">{c.label}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
