import { Link } from "react-router-dom";
import { ArrowLeft, Heart, Users, Sparkles, Leaf, Scale, GraduationCap, Quote } from "lucide-react";
import { useEffect } from "react";
import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";
import banner from "@/assets/foundation-banner.jpg";
import community from "@/assets/foundation-community.jpg";
import education from "@/assets/foundation-education.jpg";
import sustainability from "@/assets/foundation-sustainability.jpg";

const objectives = [
  { icon: Heart, title: "Foster Inclusion", desc: "Bridge gaps for underserved communities through equitable access and opportunity." },
  { icon: Users, title: "Empower & Connect", desc: "Build networks that uplift women, youth and small entrepreneurs across Rwanda." },
  { icon: Sparkles, title: "Promote Well-being", desc: "Programs supporting mental, social and economic health for vulnerable groups." },
  { icon: Leaf, title: "Drive Sustainability", desc: "Climate-resilient livelihoods and inclusive green growth at the grassroots." },
  { icon: Scale, title: "Resolve Conflicts & Uphold Rights", desc: "Advocacy, mediation and protection of human dignity in every community." },
  { icon: GraduationCap, title: "Build Capacity", desc: "Skills, training and leadership development for the next generation." },
];

const programs = [
  {
    img: community,
    tag: "Women & Youth",
    title: "Community Empowerment",
    desc: "Cooperative-led savings circles, mentorship and small-business grants reaching thousands of women and youth across rural Rwanda.",
  },
  {
    img: education,
    tag: "Education",
    title: "Digital Literacy & Skills",
    desc: "Equipping schools and learners with tablets, training and curricula that prepare a new generation for the digital economy.",
  },
  {
    img: sustainability,
    tag: "Sustainability",
    title: "Climate-Resilient Livelihoods",
    desc: "Supporting smallholder farmers with regenerative practices, market access and tools to thrive under a changing climate.",
  },
];

const stats = [
  { value: "1.8M+", label: "Households Reached" },
  { value: "30+", label: "Districts Engaged" },
  { value: "120+", label: "Local Partners" },
  { value: "6", label: "Strategic Pillars" },
];

export default function FoundationPage() {
  useEffect(() => {
    document.title = "Mama Mia's Foundation — i Link Rwanda";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="relative">
      <Nav />

      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 -z-10" style={{ background: "radial-gradient(ellipse at top, hsl(30 100% 95%) 0%, hsl(210 50% 98%) 60%)" }} />
        <div className="container">
          <Link to="/#foundation" className="inline-flex items-center gap-2 text-sm text-navy/70 hover:text-ilink transition-colors mb-8">
            <ArrowLeft size={16} /> Back to i Link
          </Link>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-xs font-semibold tracking-widest text-orange-600 mb-3">SOCIAL MISSION • INGO</div>
              <h1 className="font-display text-4xl md:text-6xl font-bold text-navy leading-[1.05]">
                Mama Mia's{" "}
                <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">Foundation</span>
              </h1>
              <p className="mt-6 text-navy/70 text-lg leading-relaxed">
                Born from i Link Rwanda's belief that prosperity must be shared, Mama Mia's Foundation
                invests in the people too often left behind — women heads of household, rural youth,
                smallholder farmers and displaced families. We move beyond charity, building lasting
                systems of dignity, opportunity and resilience.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#programs" className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold text-white bg-gradient-to-r from-orange-500 to-pink-500 shadow-lg shadow-orange-300/40 hover:shadow-orange-400/60 transition-shadow">
                  Explore Programs
                </a>
                <Link to="/#contact" className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold text-navy border border-navy/15 hover:border-navy/40 transition-colors">
                  Partner With Us
                </Link>
              </div>
            </div>
            <div className="relative rounded-3xl overflow-hidden glass-strong p-2">
              <img
                src={banner}
                alt="Rwandan women and children united in community"
                width={1600}
                height={900}
                loading="eager"
                className="w-full h-80 md:h-[28rem] object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 glass-strong rounded-3xl p-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-display text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                  {s.value}
                </div>
                <div className="mt-1 text-xs font-semibold uppercase tracking-widest text-navy/75">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Six Objectives */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-2xl mb-12">
            <div className="text-xs font-semibold tracking-widest text-orange-600 mb-3">OUR PILLARS</div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy">Six Strategic Objectives</h2>
            <p className="mt-4 text-navy/70 leading-relaxed">
              Every program, partnership and investment we make is anchored in these six commitments
              to Rwanda's most underserved communities.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {objectives.map((o) => (
              <div key={o.title} className="glass-strong rounded-3xl p-6 hover-lift">
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

      {/* Programs with media */}
      <section id="programs" className="py-16 md:py-24 bg-gradient-to-b from-transparent via-orange-50/40 to-transparent">
        <div className="container">
          <div className="max-w-2xl mb-12">
            <div className="text-xs font-semibold tracking-widest text-orange-600 mb-3">PROGRAMS IN ACTION</div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy">Where We Work</h2>
            <p className="mt-4 text-navy/70 leading-relaxed">
              From classrooms to cooperatives to terraced farmlands, our programs meet communities
              where they are — and walk with them toward where they want to go.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {programs.map((p) => (
              <article key={p.title} className="group rounded-3xl overflow-hidden glass-strong hover-lift">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    width={1600}
                    height={1067}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/10 to-transparent" />
                  <span className="absolute top-4 left-4 text-[10px] font-bold uppercase tracking-widest text-white bg-white/15 backdrop-blur px-3 py-1 rounded-full border border-white/30">
                    {p.tag}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-display font-bold text-navy text-xl">{p.title}</h3>
                  <p className="mt-3 text-sm text-navy/70 leading-relaxed">{p.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-16 md:py-24">
        <div className="container max-w-4xl">
          <div className="glass-strong rounded-3xl p-10 md:p-14 relative overflow-hidden">
            <Quote className="absolute -top-2 -left-2 text-orange-200" size={120} />
            <blockquote className="relative font-display text-2xl md:text-3xl font-semibold text-navy leading-snug">
              "When a mother thrives, a community rises. Mama Mia's Foundation exists to ensure no
              Rwandan woman, child or family is left outside the circle of opportunity."
            </blockquote>
            <div className="mt-6 text-sm uppercase tracking-widest text-orange-600 font-semibold">
              — The Foundation's Promise
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="rounded-3xl p-10 md:p-16 text-center bg-gradient-to-br from-orange-500 to-pink-500 text-white shadow-2xl shadow-orange-300/40">
            <h2 className="font-display text-3xl md:text-5xl font-bold">Stand With Us</h2>
            <p className="mt-5 text-white/90 max-w-2xl mx-auto text-lg">
              Whether you partner, fund, volunteer or amplify — every act extends the reach of
              dignity in Rwanda's most underserved corners.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link to="/#contact" className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold text-orange-600 bg-white hover:bg-white/90 transition-colors">
                Become a Partner
              </Link>
              <Link to="/" className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold text-white border border-white/40 hover:bg-white/10 transition-colors">
                Back to i Link Rwanda
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
