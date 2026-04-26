import { GraduationCap, CreditCard, Users, Fuel, CloudRain } from "lucide-react";
import imgEducare from "@/assets/innov-educare.jpg";
import imgBnpl from "@/assets/innov-bnpl.jpg";
import imgGroup from "@/assets/innov-group.jpg";
import imgFuel from "@/assets/innov-fuel.jpg";
import imgClimate from "@/assets/innov-climate.jpg";

const innovations = [
  { icon: GraduationCap, title: "Educare Corporate", tag: "Education Finance", desc: "Innovative employer-backed education financing for working families.", img: imgEducare },
  { icon: CreditCard, title: "BNPL Credit Life", tag: "Embedded Insurance", desc: "Buy-Now-Pay-Later integrated with credit life cover for risk-managed lending.", img: imgBnpl },
  { icon: Users, title: "Group Credit Life", tag: "Insurance", desc: "Affordable group cover protecting borrowers across SACCOs and cooperatives.", img: imgGroup },
  { icon: Fuel, title: "Fuel Sales Integration", tag: "Fintech", desc: "Digital fuel sales settlement and credit infrastructure for fleets and stations.", img: imgFuel },
  { icon: CloudRain, title: "Climate-Linked Index Insurance", tag: "Climate Insurtech", desc: "Parametric climate cover protecting Rwandan farmers from weather shocks.", img: imgClimate },
];

export default function Innovations() {
  return (
    <section id="innovations" className="container py-20 md:py-28">
      <div className="flex items-end justify-between flex-wrap gap-6 reveal">
        <div className="max-w-2xl">
          <div className="text-xs font-semibold tracking-widest text-ilink mb-3">R&D INNOVATIONS</div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-navy">
            Solutions <span className="text-gradient">designed for Rwanda</span>
          </h2>
        </div>
      </div>

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {innovations.map((p, i) => (
          <div key={p.title} className="glass rounded-3xl overflow-hidden hover-lift reveal group" style={{ transitionDelay: `${i * 60}ms` }}>
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={p.img}
                alt={p.title}
                width={1024}
                height={640}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-navy/10 to-transparent" />
              <span className="absolute top-3 right-3 text-[10px] font-semibold tracking-widest text-white/95 uppercase glass rounded-full px-2.5 py-1">
                {p.tag}
              </span>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-ilink/15 to-sky/20 flex items-center justify-center group-hover:from-ilink group-hover:to-sky transition-colors">
                  <p.icon className="text-ilink group-hover:text-white transition-colors" size={20} />
                </div>
                <h3 className="font-display text-lg font-bold text-navy">{p.title}</h3>
              </div>
              <p className="mt-3 text-sm text-navy/70 leading-relaxed">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
