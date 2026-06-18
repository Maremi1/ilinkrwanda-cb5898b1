import { Download, FileText } from "lucide-react";

export default function CorporateProfile() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="container">
        <div className="rounded-3xl p-10 md:p-16 text-center bg-gradient-to-br from-navy to-navy-deep text-white shadow-2xl relative overflow-hidden reveal">
          {/* Subtle background patterns */}
          <div className="absolute inset-0 bg-mesh opacity-20" />
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-ilink/30 blur-3xl rounded-full" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-sky/20 blur-3xl rounded-full" />
          
          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-6 backdrop-blur-sm border border-white/20">
              <FileText size={32} className="text-sky" />
            </div>
            
            <h2 className="font-display text-3xl md:text-5xl font-bold">
              i Link Rwanda <span className="text-gradient">Corporate Profile</span>
            </h2>
            
            <p className="mt-5 text-white/80 text-lg leading-relaxed max-w-2xl">
              Learn more about our comprehensive 361° approach, our ecosystem of proprietary platforms, and how we are architecting Rwanda's digital and financial future.
            </p>
            
            <div className="mt-10">
              <a 
                href="/i-link-rwanda-corporate-profile.pdf" 
                download="I Link Rwanda Corporate Profile.pdf"
                className="group inline-flex items-center gap-3 rounded-2xl px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-ilink to-sky shadow-xl shadow-ilink/30 hover:shadow-ilink/50 transition-all hover:-translate-y-0.5 ring-focus"
              >
                <Download size={20} className="group-hover:-translate-y-1 transition-transform" />
                Download PDF Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
