import iconRegulatory from "@/assets/icon-regulatory.png";
import iconTech from "@/assets/icon-tech.png";

const leaders = [
  {
    icon: iconRegulatory,
    title: "Regulatory Authority and Financial Innovation Expert",
    points: [
      "Provides deep institutional knowledge in financial policy, curriculum development, and professional certification frameworks.",
      "Over 18 years of experience as a trusted advisor to governments and international organizations like the UNDP and ILO.",
      "Authored national strategies for inclusive insurance and financial sector development.",
      "Certified more than 500 professionals in finance and climate resilience through bespoke Training of Trainers (ToT) programs.",
      "Author of over 10 books, including a winner of the prestigious AIO Best Book Award.",
    ],
  },
  {
    icon: iconTech,
    title: "Visionary Technologist and Government Policies Advocate",
    points: [
      "A multi-award-winning leader who drives the company's strategic direction and digital transformation.",
      "Over 15 years of experience in enterprise sales and e-Government procurement.",
      "Excels at navigating complex regulatory environments to secure high-value national licenses and forge public-private partnerships.",
      "Strategic influence extends to influential boards, including the AfCFTA Implementation Committee, shaping policy for cross-border digital trade.",
    ],
  },
];

export default function Leadership() {
  return (
    <section id="leadership" className="relative py-20 md:py-28 overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        style={{ background: "radial-gradient(ellipse at top, hsl(var(--sky) / 0.08) 0%, hsl(var(--background)) 60%)" }}
      />
      <div className="container">
        <div className="text-center max-w-4xl mx-auto reveal">
          <div className="text-xs font-semibold tracking-widest text-ilink mb-3">LEADERSHIP</div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-navy leading-tight tracking-tight text-balance">
            Our Foundational Strength is a <span className="text-gradient">Synergistic Partnership</span> of Visionary Leaders
          </h2>
        </div>

        <div className="mt-14 max-w-6xl mx-auto reveal">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-navy/15 to-transparent" />

          <div className="relative grid md:grid-cols-2 gap-12 md:gap-16 pt-12 md:pt-16">
            {/* Vertical divider */}
            <div className="hidden md:block absolute left-1/2 top-12 bottom-0 w-px bg-gradient-to-b from-navy/20 via-navy/10 to-transparent -translate-x-1/2" />

            {leaders.map((l, i) => (
              <div
                key={l.title}
                className="flex flex-col items-center md:items-start text-center md:text-left reveal"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="relative w-24 h-24 mb-7 flex items-center justify-center group">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-sky/20 to-ilink/10 blur-xl opacity-60 group-hover:opacity-100 transition-opacity" />
                  <img
                    src={l.icon}
                    alt={l.title}
                    width={512}
                    height={512}
                    loading="lazy"
                    decoding="async"
                    className="relative w-20 h-20 object-contain"
                  />
                </div>

                <div className="text-xs uppercase tracking-widest text-ilink font-semibold mb-2">Co-Founder</div>
                <h3 className="font-display text-xl md:text-2xl font-bold text-navy leading-snug max-w-sm">
                  {l.title}
                </h3>

                <ul className="mt-7 space-y-4 text-left w-full max-w-md mx-auto md:mx-0">
                  {l.points.map((p) => (
                    <li key={p} className="flex gap-3 text-navy/75 leading-relaxed text-[15px]">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-ilink shrink-0" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
