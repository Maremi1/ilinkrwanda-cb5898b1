import { Award, BookOpen, Briefcase, Globe2, ShieldCheck, Users } from "lucide-react";

const leaders = [
  {
    role: "Regulatory Authority & Financial Innovation Expert",
    initials: "RA",
    summary:
      "18+ years across insurance regulation, financial inclusion and capacity building. Trusted advisor to UNDP and ILO with deep impact across East and Central Africa.",
    chips: [
      { icon: ShieldCheck, label: "18+ yrs Regulatory" },
      { icon: Users, label: "500+ Professionals Certified" },
      { icon: BookOpen, label: "10+ Authored Books" },
      { icon: Award, label: "AIO Best Book Award" },
    ],
    accent: "from-ilink to-sky",
  },
  {
    role: "Visionary Technologist & Government Policies Advocate",
    initials: "VT",
    summary:
      "15+ years architecting digital platforms and shaping public-sector technology policy. Member of the AfCFTA Implementation Committee and pioneer of Rwanda's e-Government procurement systems.",
    chips: [
      { icon: Briefcase, label: "15+ yrs Tech Leadership" },
      { icon: Globe2, label: "AfCFTA Committee" },
      { icon: ShieldCheck, label: "e-Gov Procurement" },
      { icon: Award, label: "Policy Advocate" },
    ],
    accent: "from-navy to-ilink",
  },
];

export default function Leadership() {
  return (
    <section id="leadership" className="container py-20 md:py-28">
      <div className="text-center max-w-3xl mx-auto reveal">
        <div className="text-xs font-semibold tracking-widest text-ilink mb-3">LEADERSHIP</div>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-navy">
          A <span className="text-gradient">synergistic partnership</span> of regulation & technology
        </h2>
        <p className="mt-4 text-navy/70 text-lg">
          Two complementary disciplines, one unified vision for Rwanda's digital and financial future.
        </p>
      </div>

      <div className="mt-14 grid md:grid-cols-2 gap-8">
        {leaders.map((l) => (
          <div key={l.role} className="glass-strong rounded-3xl p-8 hover-lift reveal">
            <div className="flex items-center gap-4">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${l.accent} flex items-center justify-center text-white font-display font-bold text-xl shadow-lg`}>
                {l.initials}
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-ilink font-semibold">Co-Founder</div>
                <div className="font-display font-bold text-navy text-lg leading-snug mt-1">{l.role}</div>
              </div>
            </div>
            <p className="mt-5 text-navy/70 leading-relaxed">{l.summary}</p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {l.chips.map((c) => (
                <div key={c.label} className="glass rounded-xl px-3 py-2.5 flex items-center gap-2">
                  <c.icon size={16} className="text-ilink shrink-0" />
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
