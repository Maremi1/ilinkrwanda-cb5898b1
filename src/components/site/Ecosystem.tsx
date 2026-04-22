import { Building2, Home, Pickaxe, ShoppingBag, Sparkles } from "lucide-react";

const sectors = [
  { icon: Building2, title: "Fintech & Insuretech", brands: ["iBank", "Bima Kwik (Award-winning)"] },
  { icon: Home, title: "Real Estate", brands: ["myEstate"] },
  { icon: Pickaxe, title: "Extractives & Trade", brands: ["iMine", "iSupply"] },
  { icon: ShoppingBag, title: "E-Commerce & Logistics", brands: ["Mama Mia's Soko", "Dunamis Delivery"] },
  { icon: Sparkles, title: "Professional Services", brands: ["iClean", "Atomic Star"] },
];

export default function Ecosystem() {
  return (
    <section id="ecosystem" className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-mesh opacity-60" />
      <div className="container">
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          <div className="lg:sticky lg:top-28 reveal">
            <div className="text-xs font-semibold tracking-widest text-ilink mb-3">PARENT GROUP — THE VAULT</div>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-navy leading-tight">
              I Link Global <span className="text-gradient">Holdings</span>
            </h2>
            <p className="mt-5 text-navy/70 text-lg leading-relaxed">
              A diversified MARTECH group with cross-sector licenses across Africa and beyond —
              powering an integrated ecosystem of proprietary brands and platforms.
            </p>
            <div className="mt-6 glass-strong rounded-2xl p-5">
              <div className="text-xs uppercase tracking-widest text-ilink font-semibold">Reach</div>
              <div className="font-display text-2xl font-bold text-navy mt-1">Africa & Beyond</div>
              <div className="text-sm text-navy/60 mt-1">5 sectors · 10+ proprietary brands</div>
            </div>
          </div>

          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-5">
            {sectors.map((s, i) => (
              <div key={s.title} className="glass-strong rounded-3xl p-6 hover-lift reveal" style={{ transitionDelay: `${i * 60}ms` }}>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-ilink to-sky flex items-center justify-center shadow-lg shadow-ilink/30">
                  <s.icon className="text-white" size={22} />
                </div>
                <h3 className="mt-5 font-display font-bold text-navy text-lg">{s.title}</h3>
                <ul className="mt-3 space-y-2">
                  {s.brands.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-sm text-navy/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-ilink" />
                      {b}
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
