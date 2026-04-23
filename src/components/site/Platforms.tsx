import { ShoppingBag, Shield, Network } from "lucide-react";
import imgSoko from "@/assets/platform-soko.jpg";
import imgBima from "@/assets/platform-bima.jpg";
import imgFia from "@/assets/platform-fia.jpg";

const platforms = [
  {
    icon: ShoppingBag,
    name: "Mama Mia's Soko",
    tag: "E-Commerce Platform",
    desc: "An inclusive marketplace empowering Rwandan women entrepreneurs and small producers to reach digital buyers.",
    accent: "from-pink-500/80 to-ilink",
    img: imgSoko,
  },
  {
    icon: Shield,
    name: "Bima Kwik",
    tag: "Award-winning Insuretech",
    desc: "Fast, mobile-first insurance distribution platform for the mass market — recognized for product innovation.",
    accent: "from-ilink to-sky",
    img: imgBima,
  },
  {
    icon: Network,
    name: "FIA Management System",
    tag: "Network Operations",
    desc: "Proprietary platform managing 451 ambassadors, training, performance and last-mile data across 30 districts.",
    accent: "from-navy to-ilink",
    img: imgFia,
  },
];

export default function Platforms() {
  return (
    <section className="container py-20 md:py-28">
      <div className="text-center max-w-3xl mx-auto reveal">
        <div className="text-xs font-semibold tracking-widest text-ilink mb-3">PROPRIETARY DIGITAL PLATFORMS</div>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-navy leading-tight tracking-tight text-balance">
          Built, owned, <span className="text-gradient">and operating at scale</span>
        </h2>
        <p className="mt-4 text-navy/65 text-lg">Three flagship platforms anchoring Rwanda's digital economy.</p>
      </div>

      <div className="mt-14 grid md:grid-cols-3 gap-6">
        {platforms.map((p, i) => (
          <div key={p.name} className="glass-strong rounded-3xl p-7 hover-lift reveal relative overflow-hidden" style={{ transitionDelay: `${i * 80}ms` }}>
            <div className={`absolute -top-16 -right-16 w-48 h-48 rounded-full bg-gradient-to-br ${p.accent} opacity-20 blur-2xl`} />
            <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${p.accent} flex items-center justify-center shadow-lg`}>
              <p.icon className="text-white" size={26} />
            </div>
            <div className="text-[10px] font-semibold tracking-widest text-ilink uppercase mt-5">{p.tag}</div>
            <h3 className="font-display text-2xl font-bold text-navy mt-1">{p.name}</h3>
            <p className="mt-3 text-sm text-navy/70 leading-relaxed">{p.desc}</p>

            {/* Device mockup */}
            <div className="mt-6 relative rounded-2xl overflow-hidden glass aspect-[4/3]">
              <img
                src={p.img}
                alt={`${p.name} device mockup`}
                width={1200}
                height={900}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
