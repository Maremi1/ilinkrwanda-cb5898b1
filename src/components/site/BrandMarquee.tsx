import iBank from "@/assets/brand-ibank.png";
import bimaKwik from "@/assets/brand-bimakwik.png";
import myEstate from "@/assets/brand-myestate.png";
import iMine from "@/assets/brand-imine.png";
import iSupply from "@/assets/brand-isupply.png";
import soko from "@/assets/brand-soko.png";
import dunamis from "@/assets/brand-dunamis.png";
import iClean from "@/assets/brand-iclean.png";
import atomic from "@/assets/brand-atomic.png";

const brands = [
  { name: "iBank", logo: iBank },
  { name: "Bima Kwik", logo: bimaKwik },
  { name: "myEstate", logo: myEstate },
  { name: "iMine", logo: iMine },
  { name: "iSupply", logo: iSupply },
  { name: "Mama Mia's Soko", logo: soko },
  { name: "Dunamis Delivery", logo: dunamis },
  { name: "iClean", logo: iClean },
  { name: "Atomic Star", logo: atomic },
];

export default function BrandMarquee() {
  return (
    <section className="relative bg-navy-deep text-white overflow-hidden py-16">
      {/* Decorative gradient blobs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-ilink/20 blur-3xl animate-blob" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-sky/20 blur-3xl animate-blob" style={{ animationDelay: "2s" }} />
      {/* Subtle grid */}
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
            Powering <span className="bg-gradient-to-r from-sky to-ilink bg-clip-text text-transparent">9 proprietary platforms</span> across Africa
          </h3>
        </div>

        <div className="relative">
          {/* Wider, smoother edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 md:w-48 bg-gradient-to-r from-navy-deep via-navy-deep/85 to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 md:w-48 bg-gradient-to-l from-navy-deep via-navy-deep/85 to-transparent z-10" />

          <div
            className="overflow-hidden py-2"
            style={{
              maskImage: "linear-gradient(to right, transparent 0%, black 14%, black 86%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 14%, black 86%, transparent 100%)",
            }}
          >
            <div className="flex gap-4 animate-marquee whitespace-nowrap">
              {[...brands, ...brands, ...brands].map((b, i) => (
                <span
                  key={i}
                  className="group inline-flex items-center justify-center h-20 w-44 md:w-52 px-5 rounded-2xl bg-white/95 border border-white/20 hover:border-sky/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-ilink/30 cursor-default shrink-0"
                  title={b.name}
                >
                  <img
                    src={b.logo}
                    alt={`${b.name} logo`}
                    width={512}
                    height={512}
                    loading="lazy"
                    decoding="async"
                    className="max-h-14 w-auto object-contain"
                  />
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
