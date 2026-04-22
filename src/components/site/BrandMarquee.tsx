const brands = ["iBank", "Bima Kwik", "myEstate", "iMine", "iSupply", "Mama Mia's Soko", "Dunamis Delivery", "iClean", "Atomic Star"];

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
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-dark border border-white/10">
            <span className="w-1.5 h-1.5 rounded-full bg-sky animate-pulse" />
            <span className="text-[11px] uppercase tracking-[0.2em] text-white/70 font-semibold">Our Ecosystem of Brands</span>
          </div>
          <h3 className="mt-4 font-display text-2xl md:text-3xl font-bold text-balance">
            Powering <span className="bg-gradient-to-r from-sky to-ilink bg-clip-text text-transparent">9 proprietary platforms</span> across Africa
          </h3>
        </div>

        <div className="relative">
          {/* Edge fade */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-navy-deep to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-navy-deep to-transparent z-10" />

          <div className="overflow-hidden py-2">
            <div className="flex gap-4 animate-marquee whitespace-nowrap">
              {[...brands, ...brands, ...brands].map((b, i) => (
                <span
                  key={i}
                  className="group inline-flex items-center gap-3 px-6 py-3 rounded-2xl glass-dark border border-white/10 hover:border-sky/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-ilink/20 cursor-default"
                >
                  <span className="w-2 h-2 rounded-full bg-gradient-to-br from-sky to-ilink group-hover:scale-150 transition-transform" />
                  <span className="font-display font-semibold text-white/85 group-hover:text-white tracking-wide text-sm md:text-base">
                    {b}
                  </span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
