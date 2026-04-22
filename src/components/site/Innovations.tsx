import { GraduationCap, CreditCard, Users, Fuel, CloudRain } from "lucide-react";

const innovations = [
  { icon: GraduationCap, title: "Educare Corporate", tag: "Education Finance", desc: "Innovative employer-backed education financing for working families." },
  { icon: CreditCard, title: "BNPL Credit Life", tag: "Embedded Insurance", desc: "Buy-Now-Pay-Later integrated with credit life cover for risk-managed lending." },
  { icon: Users, title: "Group Credit Life", tag: "Insurance", desc: "Affordable group cover protecting borrowers across SACCOs and cooperatives." },
  { icon: Fuel, title: "Fuel Sales Integration", tag: "Fintech", desc: "Digital fuel sales settlement and credit infrastructure for fleets and stations." },
  { icon: CloudRain, title: "Climate-Linked Index Insurance", tag: "Climate Insurtech", desc: "Parametric climate cover protecting Rwandan farmers from weather shocks." },
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
        <p className="text-navy/70 max-w-md">
          Five flagship innovations under active development — each addressing a real gap in
          Rwanda's financial and insurance landscape.
        </p>
      </div>

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {innovations.map((p, i) => (
          <div key={p.title} className="glass rounded-3xl p-6 hover-lift reveal group" style={{ transitionDelay: `${i * 60}ms` }}>
            <div className="flex items-start justify-between">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-ilink/15 to-sky/20 flex items-center justify-center group-hover:from-ilink group-hover:to-sky transition-colors">
                <p.icon className="text-ilink group-hover:text-white transition-colors" size={22} />
              </div>
              <span className="text-[10px] font-semibold tracking-widest text-ilink uppercase">{p.tag}</span>
            </div>
            <h3 className="mt-5 font-display text-lg font-bold text-navy">{p.title}</h3>
            <p className="mt-2 text-sm text-navy/70 leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
