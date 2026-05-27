import ibank from "@/assets/brands/ibank.png";
import bimakwik from "@/assets/brands/bimakwik.png";
import myestate from "@/assets/brands/myestate.png";
import imine from "@/assets/brands/imine.png";
import mamamias from "@/assets/brands/mamamias.png";
import iclean from "@/assets/brands/iclean.png";
import atomicstar from "@/assets/brands/atomicstar.png";
import myheritage from "@/assets/brands/myheritage.png";

const brands = [
  { name: "iBank", logo: ibank },
  { name: "Bima Kwik", logo: bimakwik },
  { name: "myEstate", logo: myestate },
  { name: "iMine", logo: imine },
  { name: "Mama Mia's Soko", logo: mamamias },
  { name: "iClean", logo: iclean },
  { name: "Atomic Star", logo: atomicstar },
  { name: "myHeritage", logo: myheritage },
];

export default function BrandMarquee() {
  return (
    <section className="relative bg-navy-deep text-white overflow-hidden py-16">
      {/* Decorative gradient blobs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-ilink/20 blur-3xl animate-blob" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-sky/20 blur-3xl animate-blob" style={{ animationDelay: "2s" }} />
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--sky)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--sky)) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="container relative">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-dark border border-white/10">
            <span className="w-1.5 h-1.5 rounded-full bg-sky animate-pulse" />
            <span className="text-[11px] uppercase tracking-[0.2em] text-white/70 font-semibold">Our Ecosystem of Brands</span>
          </div>
          <h3 className="mt-4 font-display text-2xl md:text-3xl font-bold text-balance">
            Powering <span className="bg-gradient-to-r from-sky to-ilink bg-clip-text text-transparent">proprietary platforms</span> across Africa
          </h3>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 md:w-48 bg-gradient-to-r from-navy-deep via-navy-deep/85 to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 md:w-48 bg-gradient-to-l from-navy-deep via-navy-deep/85 to-transparent z-10" />

          <div
            className="overflow-hidden py-2"
            style={{
              maskImage: "linear-gradient(to right, transparent 0%, black 14%, black 86%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 14%, black 86%, transparent 100%)",
            }}
          >
            <div className="flex gap-6 animate-marquee whitespace-nowrap">
              {[...brands, ...brands, ...brands].map((b, i) => (
                <div
                  key={i}
                  className="group inline-flex items-center justify-center h-24 w-48 px-6 rounded-2xl bg-white/95 border border-white/10 hover:border-sky/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-ilink/20 shrink-0"
                >
                  <img
                    src={b.logo}
                    alt={`${b.name} logo`}
                    className="max-h-16 max-w-full object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
