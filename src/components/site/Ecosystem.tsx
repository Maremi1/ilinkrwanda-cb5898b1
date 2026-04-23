import { Building2, Home, Pickaxe, ShoppingBag, Sparkles } from "lucide-react";
import iBank from "@/assets/brand-ibank.png";
import bimaKwik from "@/assets/brand-bimakwik.png";
import myEstate from "@/assets/brand-myestate.png";
import iMine from "@/assets/brand-imine.png";
import iSupply from "@/assets/brand-isupply.png";
import soko from "@/assets/brand-soko.png";
import dunamis from "@/assets/brand-dunamis.png";
import iClean from "@/assets/brand-iclean.png";
import atomic from "@/assets/brand-atomic.png";

const sectors = [
  {
    icon: Building2,
    title: "Fintech & Insuretech",
    brands: [
      { name: "iBank", logo: iBank },
      { name: "Bima Kwik", logo: bimaKwik, badge: "Award-winning" },
    ],
  },
  {
    icon: Home,
    title: "Real Estate",
    brands: [{ name: "myEstate", logo: myEstate }],
  },
  {
    icon: Pickaxe,
    title: "Extractives & Trade",
    brands: [
      { name: "iMine", logo: iMine },
      { name: "iSupply", logo: iSupply },
    ],
  },
  {
    icon: ShoppingBag,
    title: "E-Commerce & Logistics",
    brands: [
      { name: "Mama Mia's Soko", logo: soko },
      { name: "Dunamis Delivery", logo: dunamis },
    ],
  },
  {
    icon: Sparkles,
    title: "Professional Services",
    brands: [
      { name: "iClean", logo: iClean },
      { name: "Atomic Star", logo: atomic },
    ],
  },
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
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-ilink to-sky flex items-center justify-center shadow-lg shadow-ilink/30 shrink-0">
                    <s.icon className="text-white" size={22} />
                  </div>
                  <h3 className="font-display font-bold text-navy text-lg">{s.title}</h3>
                </div>
                <div className="mt-5 grid grid-cols-2 gap-2.5">
                  {s.brands.map((b) => (
                    <div
                      key={b.name}
                      className="relative group rounded-xl bg-white/90 border border-navy/5 hover:border-ilink/40 hover:shadow-md hover:shadow-ilink/10 transition-all p-3 flex items-center justify-center h-20"
                      title={b.name}
                    >
                      <img
                        src={b.logo}
                        alt={`${b.name} logo`}
                        width={512}
                        height={512}
                        loading="lazy"
                        decoding="async"
                        className="max-h-12 w-auto object-contain"
                      />
                      {b.badge && (
                        <span className="absolute -top-1.5 -right-1.5 text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-full bg-gradient-to-r from-ilink to-sky text-white shadow">
                          {b.badge}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
