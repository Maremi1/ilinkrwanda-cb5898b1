const brands = [
  { name: "iBank", code: "FIN-01", desc: "Precision liquidity & digital treasury." },
  { name: "Bima Kwik", code: "INS-02", desc: "Algorithmic risk & instant claim settlements." },
  { name: "myEstate", code: "PROP-03", desc: "Fractionalized real estate on a unified ledger." },
  { name: "iMine", code: "RES-04", desc: "Sustainable resource extraction & analytics." },
  { name: "iSupply", code: "LOG-05", desc: "Autonomous supply chain with predictive routing." },
  { name: "Mama Mia's Soko", code: "RET-06", desc: "Community-driven marketplace for artisanal trade." },
  { name: "Dunamis Delivery", code: "OPS-07", desc: "Last-mile fulfillment engineered for density." },
  { name: "iClean", code: "ECO-08", desc: "Advanced environmental management solutions." },
  { name: "Atomic Star", code: "PWR-09", desc: "Next-generation energy grid for the digital world." },
];

export default function BrandMarquee() {
  const handleTilt = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rx = ((y - cy) / cy) * -4;
    const ry = ((x - cx) / cx) * 4;
    card.style.setProperty("--rx", `${rx}deg`);
    card.style.setProperty("--ry", `${ry}deg`);
    card.style.setProperty("--mx", `${x}px`);
    card.style.setProperty("--my", `${y}px`);
  };

  const handleLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    card.style.setProperty("--rx", `0deg`);
    card.style.setProperty("--ry", `0deg`);
  };

  return (
    <section className="relative bg-navy-deep overflow-hidden py-24 px-6">
      {/* Ambient blobs */}
      <div className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full bg-ilink/10 blur-3xl animate-blob" />
      <div className="absolute -bottom-32 -right-32 w-[480px] h-[480px] rounded-full bg-sky/10 blur-3xl animate-blob" style={{ animationDelay: "3s" }} />

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/10 pb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 bg-ilink shadow-[0_0_12px_hsl(var(--ilink-blue))] animate-pulse" />
              <span className="text-[11px] font-mono tracking-[0.3em] text-white/50 uppercase">System Architecture</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-light tracking-tight text-white text-balance">
              Our ecosystem of{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky to-ilink font-normal italic">
                interconnected
              </span>{" "}
              brands.
            </h2>
          </div>
          <div className="flex flex-col items-start md:items-end gap-1.5 shrink-0">
            <span className="text-[11px] font-mono text-sky/70 tracking-wider">ACTIVE_NODES // 09</span>
            <span className="text-[11px] font-mono text-white/30 tracking-tighter">ILINK_PROTOCOL_REV_881</span>
          </div>
        </div>

        {/* Grid with hairline dividers */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10 overflow-hidden rounded-2xl"
          style={{ perspective: "1200px" }}
        >
          {brands.map((b, i) => (
            <div
              key={b.name}
              onMouseMove={handleTilt}
              onMouseLeave={handleLeave}
              className="group relative bg-navy-deep p-10 transition-colors duration-500 hover:bg-white/[0.03] cursor-default will-change-transform"
              style={{
                transform: "rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg))",
                transformStyle: "preserve-3d",
                transition: "transform 0.4s cubic-bezier(0.22,1,0.36,1), background-color 0.5s",
              }}
            >
              {/* Spotlight follows cursor */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(320px circle at var(--mx,50%) var(--my,50%), hsl(var(--ilink-blue) / 0.18), transparent 60%)",
                }}
              />
              {/* Gradient border on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[inherit]"
                style={{
                  padding: "1px",
                  background:
                    "linear-gradient(135deg, hsl(var(--sky) / 0.5), transparent 50%, hsl(var(--ilink-blue) / 0.5))",
                  WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                }}
              />

              <div className="relative z-10" style={{ transform: "translateZ(30px)" }}>
                <div className="flex justify-between items-start mb-16">
                  <span className="text-[10px] font-mono py-1 px-2 border border-white/10 text-white/50 tracking-widest uppercase rounded">
                    {b.code}
                  </span>
                  <div className={`w-1.5 h-1.5 rounded-full ${i === 0 ? "bg-ilink shadow-[0_0_8px_hsl(var(--ilink-blue))]" : "bg-ilink/40"} group-hover:bg-ilink group-hover:shadow-[0_0_10px_hsl(var(--ilink-blue))] transition-all`} />
                </div>
                <h3 className="font-display text-2xl text-white font-light tracking-wide mb-2 group-hover:translate-x-1 transition-transform duration-300">
                  {b.name}
                </h3>
                <p className="text-sm text-white/45 leading-relaxed max-w-[28ch]">{b.desc}</p>
                <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-white/25 uppercase tracking-wider">Node // Online</span>
                  <span className="text-[10px] font-mono text-ilink opacity-0 group-hover:opacity-100 translate-x-[-4px] group-hover:translate-x-0 transition-all duration-300">
                    ENCRYPTED →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer status bar */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-8">
            <div className="flex flex-col">
              <span className="text-[10px] font-mono text-white/30 uppercase tracking-wider">System Status</span>
              <span className="text-xs text-sky">OPERATIONAL</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-mono text-white/30 uppercase tracking-wider">Ecosystem Sync</span>
              <span className="text-xs text-sky">100% SECURE</span>
            </div>
          </div>
          <div className="text-[11px] text-white/20 font-mono tracking-tighter">
            ILINK_ECOSYSTEM_PROTOCOL_REV_881
          </div>
        </div>
      </div>
    </section>
  );
}
