import { Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, CheckCircle2, MapPin, Users, GraduationCap, Smartphone, BarChart3, Handshake, Quote } from "lucide-react";
import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";
import fia1 from "@/assets/fia-1.jpg";
import fia2 from "@/assets/fia-2.jpg";
import fia3 from "@/assets/fia-3.jpg";
import fia4 from "@/assets/fia-4.jpg";

const stats = [
  { v: "451", l: "Ambassadors Deployed" },
  { v: "30", l: "Districts Covered" },
  { v: "1.8M+", l: "Households Reached" },
  { v: "100%", l: "Nationwide Footprint" },
];

const pillars = [
  { icon: GraduationCap, title: "Certified Training", desc: "Every ambassador completes financial literacy and product certification in Kigali before field deployment." },
  { icon: Smartphone, title: "Digital-First Delivery", desc: "Our custom ambassador app captures real-time data, KYC and household engagement from anywhere in Rwanda." },
  { icon: BarChart3, title: "Live Field Analytics", desc: "Partner dashboards stream daily activity, conversion and coverage metrics down to the village level." },
  { icon: Handshake, title: "Trusted Last-Mile", desc: "Ambassadors are recruited from the communities they serve — building real trust at the household door." },
  { icon: MapPin, title: "30-District Coverage", desc: "Coordinated daily deployment routes ensure no corner of the country is left behind." },
  { icon: Users, title: "Inclusive Outreach", desc: "Prioritising women, youth, smallholder farmers and the unbanked — the people formal channels miss." },
];

const gallery = [
  { src: fia1, caption: "Last-Mile Outreach", desc: "Ambassadors meeting households across rural Rwanda." },
  { src: fia2, caption: "Certified Training", desc: "Financial literacy and product certification in Kigali." },
  { src: fia3, caption: "30 Districts Covered", desc: "Daily field deployment to every corner of the country." },
  { src: fia4, caption: "Digital-First Delivery", desc: "Real-time data captured through our ambassador app." },
];

export default function FIAPage() {
  useEffect(() => {
    document.title = "FIA Network Program — I Link Rwanda";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="relative">
      <Nav />

      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 -z-10" style={{ background: "radial-gradient(ellipse at top, hsl(210 100% 96%) 0%, hsl(210 50% 98%) 60%)" }} />
        <div className="container">
          <Link to="/#impact" className="inline-flex items-center gap-2 text-sm text-navy/70 hover:text-ilink transition-colors mb-8">
            <ArrowLeft size={16} /> Back to I Link
          </Link>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-xs font-semibold tracking-widest text-ilink mb-3">FLAGSHIP CASE STUDY</div>
              <h1 className="font-display text-4xl md:text-6xl font-bold text-navy leading-[1.05]">
                The <span className="text-gradient">FIA Network</span> Program
              </h1>
              <p className="mt-6 text-navy/70 text-lg leading-relaxed">
                The Financial Inclusion Ambassadors program is Rwanda's most ambitious last-mile
                financial literacy and product distribution network. I Link Rwanda serves as Lead
                Implementing Partner and Technology Partner — recruiting, training and equipping
                451 ambassadors who carry financial services directly to 1.8M+ households across
                all 30 districts.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="glass rounded-full px-3 py-1 text-xs font-semibold text-navy">Lead Implementing Partner</span>
                <span className="glass rounded-full px-3 py-1 text-xs font-semibold text-navy">Technology & Platform Partner</span>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#pillars" className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold text-white bg-gradient-to-r from-ilink to-sky shadow-lg shadow-ilink/30 hover:shadow-ilink/50 transition-shadow">
                  How It Works
                </a>
                <Link to="/#contact" className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold text-navy border border-navy/15 hover:border-navy/40 transition-colors">
                  Partner With Us
                </Link>
              </div>
            </div>
            <div className="relative glass-strong rounded-3xl p-3">
              <img
                src={fia1}
                alt="FIA ambassadors meeting households in rural Rwanda"
                width={1024}
                height={1024}
                loading="eager"
                className="w-full aspect-square object-cover rounded-2xl"
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
              <div key={s.l} className="text-center">
                <div className="font-display text-3xl md:text-4xl font-bold text-gradient">{s.v}</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-navy/60">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section id="pillars" className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-2xl mb-12">
            <div className="text-xs font-semibold tracking-widest text-ilink mb-3">HOW THE NETWORK WORKS</div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy">A Full-Stack Last-Mile Engine</h2>
            <p className="mt-4 text-navy/70 leading-relaxed">
              From recruitment to certification to live field analytics — I Link Rwanda runs every
              layer of the ambassador network end-to-end.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {pillars.map((p) => (
              <div key={p.title} className="glass-strong rounded-3xl p-6 hover-lift">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-ilink to-sky flex items-center justify-center shadow-lg shadow-ilink/30">
                  <p.icon className="text-white" size={22} />
                </div>
                <h3 className="mt-5 font-display font-bold text-navy text-lg">{p.title}</h3>
                <p className="mt-2 text-sm text-navy/70 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-transparent via-sky-50/40 to-transparent">
        <div className="container">
          <div className="max-w-2xl mb-12">
            <div className="text-xs font-semibold tracking-widest text-ilink mb-3">THE NETWORK IN ACTION</div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy">From Kigali to Every Village</h2>
            <p className="mt-4 text-navy/70 leading-relaxed">
              A look at the ambassadors, training and technology powering Rwanda's largest financial
              inclusion deployment.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {gallery.map((g) => (
              <figure key={g.caption} className="group rounded-3xl overflow-hidden glass-strong hover-lift">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={g.src}
                    alt={g.caption}
                    width={1024}
                    height={768}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-navy-deep/20 to-transparent" />
                  <figcaption className="absolute bottom-0 left-0 right-0 p-5 text-white">
                    <div className="font-display text-lg md:text-xl font-bold">{g.caption}</div>
                    <div className="text-sm text-white/80 mt-0.5">{g.desc}</div>
                  </figcaption>
                </div>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-16 md:py-24">
        <div className="container max-w-4xl">
          <div className="glass-strong rounded-3xl p-10 md:p-14">
            <div className="text-xs font-semibold tracking-widest text-ilink mb-3">WHAT WE DELIVER</div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy">End-to-End Program Stack</h2>
            <ul className="mt-8 grid sm:grid-cols-2 gap-4">
              {[
                "Custom ambassador management platform",
                "Real-time field data & analytics dashboards",
                "Integrated training & certification pipeline",
                "Nationwide recruitment & vetting",
                "KYC & onboarding workflows",
                "Partner reporting & impact measurement",
                "Field operations & route optimization",
                "Community trust-building campaigns",
              ].map((x) => (
                <li key={x} className="flex items-start gap-3 text-navy/80">
                  <CheckCircle2 size={18} className="text-ilink mt-0.5 shrink-0" />
                  <span className="text-sm leading-relaxed">{x}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-12 md:py-20">
        <div className="container max-w-4xl">
          <div className="glass-strong rounded-3xl p-10 md:p-14 relative overflow-hidden">
            <Quote className="absolute -top-2 -left-2 text-sky/30" size={120} />
            <blockquote className="relative font-display text-2xl md:text-3xl font-semibold text-navy leading-snug">
              "Financial inclusion isn't built in head offices. It's built at the household door —
              one ambassador, one conversation, one family at a time."
            </blockquote>
            <div className="mt-6 text-sm uppercase tracking-widest text-ilink font-semibold">
              — The FIA Operating Principle
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="rounded-3xl p-10 md:p-16 text-center bg-gradient-to-br from-ilink to-sky text-white shadow-2xl shadow-ilink/30">
            <h2 className="font-display text-3xl md:text-5xl font-bold">Scale With the FIA Network</h2>
            <p className="mt-5 text-white/90 max-w-2xl mx-auto text-lg">
              Reach 1.8M+ Rwandan households through the country's most trusted last-mile financial
              inclusion channel.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link to="/#contact" className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold text-ilink bg-white hover:bg-white/90 transition-colors">
                Become a Partner
              </Link>
              <Link to="/" className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold text-white border border-white/40 hover:bg-white/10 transition-colors">
                Back to I Link Rwanda
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
