import { Heart, Users, Sparkles, Leaf, Scale, GraduationCap } from "lucide-react";
import banner from "@/assets/foundation-banner.jpg";

const objectives = [
  { icon: Heart, title: "Foster Inclusion", desc: "Bridge gaps for underserved communities through access and opportunity." },
  { icon: Users, title: "Empower & Connect", desc: "Build networks that uplift women, youth and small entrepreneurs." },
  { icon: Sparkles, title: "Promote Well-being", desc: "Programs supporting mental, social and economic health." },
  { icon: Leaf, title: "Drive Sustainability", desc: "Climate-resilient livelihoods and inclusive green growth." },
  { icon: Scale, title: "Resolve Conflicts & Uphold Rights", desc: "Advocacy, mediation and protection of human dignity." },
  { icon: GraduationCap, title: "Build Capacity", desc: "Skills, training and leadership for the next generation." },
];

export default function Foundation() {
  return (
    <section id="foundation" className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 -z-10" style={{ background: "radial-gradient(ellipse at top, hsl(30 100% 95%) 0%, hsl(210 50% 98%) 60%)" }} />
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-14">
          <div className="reveal">
            <div className="text-xs font-semibold tracking-widest text-orange-600 mb-3">SOCIAL MISSION</div>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-navy leading-tight">
              Mama Mia's <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">Foundation</span>
            </h2>
            <p className="mt-5 text-navy/70 text-lg leading-relaxed">
              Our INGO arm extends the I Link mission beyond commerce — investing in inclusion,
              resilience and dignity across Rwanda's most underserved communities.
            </p>
          </div>
          <div className="reveal">
            <div className="relative rounded-3xl overflow-hidden glass-strong p-2">
              <img
                src={banner}
                alt="Rwandan women entrepreneurs and children united in community"
                width={1600}
                height={900}
                loading="lazy"
                decoding="async"
                className="w-full h-64 md:h-72 object-cover rounded-2xl"
              />
              <div className="absolute inset-2 rounded-2xl bg-gradient-to-t from-navy/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-5 left-5 right-5">
                <div className="font-display text-xl font-bold text-white">Six Strategic Objectives</div>
                <p className="text-sm text-white/85 mt-1">Guiding every program, partnership and investment we make through the foundation.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {objectives.map((o, i) => (
            <div key={o.title} className="glass-strong rounded-3xl p-6 hover-lift reveal" style={{ transitionDelay: `${i * 60}ms` }}>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center shadow-lg shadow-orange-300/50">
                <o.icon className="text-white" size={22} />
              </div>
              <h3 className="mt-5 font-display font-bold text-navy text-lg">{o.title}</h3>
              <p className="mt-2 text-sm text-navy/70 leading-relaxed">{o.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
