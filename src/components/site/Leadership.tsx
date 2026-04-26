import iconRegulatory from "@/assets/leadership-icon-regulatory.png";
import iconTech from "@/assets/leadership-icon-tech.png";

const leaders = [
  {
    title: "Regulatory Authority and Financial Innovation Expert",
    icon: iconRegulatory,
    points: [
      "Provides deep institutional knowledge in financial policy, curriculum development, and professional certification frameworks.",
      "Over 18 years of experience as a trusted advisor to governments and international organizations like the UNDP and ILO.",
      "Authored national strategies for inclusive insurance and financial sector development.",
      "Certified more than 500 professionals in finance and climate resilience through bespoke Training of Trainers (ToT) programs.",
      "Author of over 10 books, including a winner of the prestigious AIO Best Book Award.",
    ],
  },
  {
    title: "Visionary Technologist and Government Policies Advocate",
    icon: iconTech,
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
    <section id="leadership" className="container py-20 md:py-28">
      <div className="text-center max-w-3xl mx-auto reveal">
        <div className="text-xs font-semibold tracking-widest text-ilink mb-3">LEADERSHIP</div>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-navy">
          Our Foundational Strength is a{" "}
          <span className="text-gradient">Synergistic Partnership</span> of Visionary Leaders
        </h2>
      </div>

      <div className="mt-14 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-px bg-navy/10 rounded-3xl overflow-hidden glass-strong">
          {leaders.map((l) => (
            <div key={l.title} className="bg-white/60 p-8 md:p-10 reveal">
              <div className="flex justify-center mb-6">
                <div className="relative w-28 h-28 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-sky/20 to-ilink/10 rounded-2xl blur-xl" />
                  <img
                    src={l.icon}
                    alt={l.title}
                    width={112}
                    height={112}
                    loading="lazy"
                    decoding="async"
                    className="relative w-28 h-28 object-contain"
                  />
                </div>
              </div>
              <h3 className="font-display font-bold text-navy text-xl md:text-2xl text-center leading-snug mb-6">
                {l.title}
              </h3>
              <ul className="space-y-4">
                {l.points.map((p, i) => (
                  <li key={i} className="flex gap-3 text-navy/75 leading-relaxed">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-ilink shrink-0" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
