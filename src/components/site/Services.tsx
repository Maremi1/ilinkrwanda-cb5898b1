import { Lightbulb, GraduationCap, Cpu } from "lucide-react";
import imgRd from "@/assets/svc-rd.jpg";
import imgTraining from "@/assets/svc-training.jpg";
import imgDev from "@/assets/svc-dev.jpg";

const services = [
  {
    icon: Lightbulb,
    title: "Strategic R&D and Consultancy",
    desc: "Market research, regulatory advisory, and product blueprints for financial inclusion, insurance and inclusive commerce — informed by deep policy and field expertise.",
    points: ["Market & policy research", "Regulatory frameworks", "Product blueprints"],
    img: imgRd,
  },
  {
    icon: GraduationCap,
    title: "Executive Training & Capacity Building",
    desc: "Tailored programs that have certified 500+ executives across insurance, finance and digital transformation in Rwanda and beyond.",
    points: ["Insurance & finance certification", "Leadership coaching", "Sales Accelerator 2026"],
    img: imgTraining,
  },
  {
    icon: Cpu,
    title: "Digital Platform Development",
    desc: "End-to-end engineering of proprietary platforms — from architecture and design to deployment, integration and managed operations.",
    points: ["Custom fintech & insuretech", "API & system integration", "Managed platform operations"],
    img: imgDev,
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-mesh opacity-60" />
      <div className="container">
        <div className="max-w-3xl reveal">
          <div className="text-xs font-semibold tracking-widest text-ilink mb-3">CORE SERVICES</div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-navy">
            Three pillars. <span className="text-gradient">One ecosystem.</span>
          </h2>
          <p className="mt-4 text-navy/70 text-lg">
            From research to capacity building to platform engineering — a fully integrated stack
            designed to take ideas from blueprint to market-ready scale.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div key={s.title} className="glass-strong rounded-3xl overflow-hidden hover-lift reveal flex flex-col" style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  width={1200}
                  height={750}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/10 to-transparent" />
                <div className="absolute bottom-3 left-3 w-12 h-12 rounded-2xl bg-gradient-to-br from-ilink to-sky flex items-center justify-center shadow-lg shadow-ilink/30">
                  <s.icon className="text-white" size={22} />
                </div>
              </div>
              <div className="p-7 flex flex-col flex-1">
                <h3 className="font-display text-xl font-bold text-navy">{s.title}</h3>
                <p className="mt-3 text-navy/70 leading-relaxed text-sm">{s.desc}</p>
                <ul className="mt-5 space-y-2">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-sm text-navy/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-ilink" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
