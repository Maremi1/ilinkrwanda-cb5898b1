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
    chips: ["UNDP & ILO Advisor", "National Strategies", "AIO Best Book Award", "Insurance Regulation"],
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
    chips: ["Enterprise Sales", "AfCFTA Committee", "e-Gov Procurement", "Multi-Award Winner"],
  },
];

export default function Leadership() {
  return (
    <section id="leadership" className="container py-20 md:py-28">
      <div className="text-center max-w-3xl mx-auto reveal space-y-4">
        <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-ilink">Leadership</span>
        <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-navy">
          A synergistic partnership of <span className="text-gradient">visionary leaders</span>
        </h2>
      </div>

      <div className="mt-16 grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {leaders.map((l) => (
          <div key={l.title} className="relative group reveal">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-ilink/20 to-sky/20 rounded-3xl blur opacity-30 group-hover:opacity-100 transition duration-700" />
            <div className="relative bg-white/70 backdrop-blur-xl border border-white p-8 rounded-3xl flex flex-col h-full">
              <div className="flex items-start gap-6 mb-8">
                <div className="shrink-0 w-16 h-16 rounded-2xl bg-sky-soft/60 flex items-center justify-center">
                  <img src={l.icon} alt="" width={48} height={48} loading="lazy" decoding="async" className="w-12 h-12 object-contain" />
                </div>
                <div className="space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-ilink/80">Co-Founder</span>
                  <h3 className="font-display text-xl md:text-2xl font-bold leading-tight text-navy">{l.title}</h3>
                  <p className="text-sm text-navy/55">{l.tagline}</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 border-y border-navy/10 py-6 mb-8">
                {l.stats.map((s, i) => (
                  <div key={s.label} className={`text-center ${i === 1 ? "border-x border-navy/10" : ""}`}>
                    <div className="font-display text-xl font-extrabold text-navy">{s.value}</div>
                    <div className="text-[10px] font-medium text-navy/40 uppercase tracking-tighter mt-1">{s.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 mt-auto">
                {l.chips.map((c) => (
                  <span key={c} className="px-3 py-1 rounded-full text-[11px] font-medium bg-muted text-navy/70 border border-navy/10">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
