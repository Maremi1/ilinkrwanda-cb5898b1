import logo from "@/assets/ilink-logo.png";
import kigali from "@/assets/hero-kigali.jpg";
import { ArrowRight, Play, X } from "lucide-react";
import { useState } from "react";

// 🎬 Replace this URL anytime with your own video (YouTube embed, Vimeo, or direct .mp4)
const STORY_VIDEO_URL = "https://www.youtube.com/embed/dQw4w9WgXcQ";

export default function Hero() {
  const [open, setOpen] = useState(false);
  const isEmbed = /youtube\.com\/embed|player\.vimeo\.com/.test(STORY_VIDEO_URL);

  return (
    <section id="top" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 -z-10 bg-mesh" />
      <img
        src={kigali}
        alt="Kigali skyline at golden hour"
        width={1920}
        height={1080}
        className="absolute inset-0 -z-10 w-full h-full object-cover opacity-15 mix-blend-multiply pointer-events-none"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/40 via-white/60 to-white/90 pointer-events-none" />
      <div className="absolute -top-24 -left-24 w-[500px] h-[500px] rounded-full bg-ilink/20 blur-3xl animate-blob -z-10" />
      <div className="absolute top-40 -right-32 w-[480px] h-[480px] rounded-full bg-sky/30 blur-3xl animate-blob -z-10" style={{ animationDelay: "5s" }} />
      <div className="absolute inset-0 circuit-pattern opacity-40 -z-10" />

      <div className="container grid lg:grid-cols-2 gap-12 items-center">
        <div className="reveal">
          <h1 className="font-display text-4xl md:text-5xl lg:text-[3.75rem] font-bold text-navy leading-[1.08] tracking-tight text-balance">
            Building Market-Ready Solutions with a{" "}
            <span className="text-gradient">361° Holistic Approach</span>
          </h1>
          <p className="mt-6 text-lg text-navy/70 max-w-xl leading-relaxed">
            A MARTECH and digital financial services firm reshaping Rwanda's economy
            with proprietary platforms, regulatory depth, and an ecosystem one degree
            beyond the circle.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#services" className="group inline-flex items-center gap-2 rounded-2xl px-7 py-4 text-sm font-semibold text-white bg-gradient-to-r from-ilink to-sky shadow-xl shadow-ilink/30 hover:shadow-ilink/50 transition-all hover:-translate-y-0.5 ring-focus">
              Explore Solutions <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <button onClick={() => setOpen(true)} className="inline-flex items-center gap-2 glass rounded-2xl px-7 py-4 text-sm font-semibold text-navy hover:bg-white/85 transition-colors ring-focus">
              <Play size={14} className="text-ilink" /> Watch Our Story
            </button>
          </div>


          {/* Mini trust row */}
          <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-navy/60">
            <div className="flex -space-x-2">
              <span className="w-6 h-6 rounded-full bg-gradient-to-br from-ilink to-sky border-2 border-white" />
              <span className="w-6 h-6 rounded-full bg-gradient-to-br from-sky to-navy border-2 border-white" />
              <span className="w-6 h-6 rounded-full bg-gradient-to-br from-navy to-ilink border-2 border-white" />
            </div>
            <span><strong className="text-navy font-semibold">Trusted</strong> by regulators, INGOs & enterprise partners across Rwanda</span>
          </div>
        </div>

        {/* Glass orbital chip panel */}
        <div className="relative reveal flex justify-center lg:justify-end">
          <div className="relative w-[320px] h-[320px] md:w-[440px] md:h-[440px]">
            {/* Outer orbit ring */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-ilink/20 animate-orbit" />
            <div className="absolute inset-8 rounded-full border border-ilink/15" />
            <div className="absolute inset-16 rounded-full border border-ilink/10" />

            {/* Orbiting nodes */}
            <div className="absolute inset-0 animate-orbit" style={{ animationDuration: "20s" }}>
              <span className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-ilink shadow-lg shadow-ilink/50" />
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-sky shadow-lg shadow-sky/50" />
            </div>
            <div className="absolute inset-8 animate-orbit" style={{ animationDuration: "28s", animationDirection: "reverse" }}>
              <span className="absolute top-1/2 left-0 -translate-y-1/2 w-3 h-3 rounded-full bg-navy shadow-md" />
              <span className="absolute top-1/2 right-0 -translate-y-1/2 w-3 h-3 rounded-full bg-ilink/70" />
            </div>

            {/* Center glass disc with logo */}
            <div className="absolute inset-1/4 glass-strong rounded-full flex items-center justify-center animate-float">
              <img src={logo} alt="I Link chip" className="w-3/4 h-3/4 object-contain" />
            </div>

            {/* Floating glass info chips */}
            <div className="absolute -top-2 -right-4 glass rounded-2xl px-3 py-2 animate-float" style={{ animationDelay: "1s" }}>
              <div className="text-[10px] text-muted-foreground">Households</div>
              <div className="text-sm font-bold text-navy">1.8M+</div>
            </div>
            <div className="absolute -bottom-4 -left-4 glass rounded-2xl px-3 py-2 animate-float" style={{ animationDelay: "2s" }}>
              <div className="text-[10px] text-muted-foreground">FIA Ambassadors</div>
              <div className="text-sm font-bold text-navy">451</div>
            </div>
          </div>
        </div>
      </div>

      {/* Inline story video */}
      <div className="container mt-16 md:mt-24">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-6">
            <div className="text-xs font-semibold tracking-widest text-ilink mb-2">OUR STORY</div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-navy">Watch how I Link is reshaping Rwanda</h2>
          </div>
          <div className="glass-strong rounded-3xl p-3 shadow-2xl shadow-ilink/20">
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-black">
              {isEmbed ? (
                <iframe
                  src={STORY_VIDEO_URL}
                  title="Our Story"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              ) : (
                <video src={STORY_VIDEO_URL} controls className="w-full h-full" />
              )}
            </div>
          </div>
        </div>
      </div>



      {/* Video modal */}
      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-deep/80 backdrop-blur-sm p-4 animate-in fade-in"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(false)}
              aria-label="Close video"
              className="absolute -top-3 -right-3 z-10 w-10 h-10 rounded-full bg-white text-navy flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
            >
              <X size={18} />
            </button>
            {isEmbed ? (
              <iframe
                src={`${STORY_VIDEO_URL}${STORY_VIDEO_URL.includes("?") ? "&" : "?"}autoplay=1`}
                title="Our Story"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            ) : (
              <video src={STORY_VIDEO_URL} controls autoPlay className="w-full h-full" />
            )}
          </div>
        </div>
      )}
    </section>
  );
}

