const brands = ["iBank", "Bima Kwik", "myEstate", "iMine", "iSupply", "Mama Mia's Soko", "Dunamis Delivery", "iClean", "Atomic Star"];

export default function BrandMarquee() {
  return (
    <section className="bg-navy-deep text-white/70 py-6">
      <div className="container">
        <div className="overflow-hidden mask-fade border-y border-white/10 py-5">
          <div className="flex gap-12 animate-marquee whitespace-nowrap">
            {[...brands, ...brands].map((b, i) => (
              <span key={i} className="font-display font-semibold text-white/40 tracking-wide text-sm">{b}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
