import { useState } from "react";
import { Mail, MapPin, Phone, Globe, Send } from "lucide-react";
import { toast } from "sonner";

export default function Contact() {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Thank you. We'll be in touch shortly.");
    }, 900);
  };

  return (
    <section id="contact" className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-navy-gradient" />
      <div className="absolute inset-0 -z-10 circuit-pattern opacity-20" />
      <div className="absolute -top-40 -left-20 w-[500px] h-[500px] rounded-full bg-ilink/30 blur-3xl animate-blob -z-10" />
      <div className="absolute -bottom-40 -right-20 w-[450px] h-[450px] rounded-full bg-sky/20 blur-3xl animate-blob -z-10" style={{ animationDelay: "5s" }} />

      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-14 reveal">
          <div className="text-xs font-semibold tracking-widest text-sky mb-3">PARTNER WITH US</div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white leading-tight">
            Build the future of finance and digital commerce <span className="bg-gradient-to-r from-sky to-white bg-clip-text text-transparent">— with us</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          <form onSubmit={onSubmit} className="lg:col-span-3 glass-dark rounded-3xl p-7 md:p-9 space-y-4 reveal">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-white/70 uppercase tracking-wider">Name</label>
                <input required className="mt-1.5 w-full bg-white/5 border border-white/10 text-white placeholder:text-white/40 rounded-xl px-4 py-3 outline-none focus:border-sky/60 focus:bg-white/10 transition-colors" placeholder="Your full name" />
              </div>
              <div>
                <label className="text-xs font-semibold text-white/70 uppercase tracking-wider">Company</label>
                <input className="mt-1.5 w-full bg-white/5 border border-white/10 text-white placeholder:text-white/40 rounded-xl px-4 py-3 outline-none focus:border-sky/60 focus:bg-white/10 transition-colors" placeholder="Organization" />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-white/70 uppercase tracking-wider">Email</label>
                <input required type="email" className="mt-1.5 w-full bg-white/5 border border-white/10 text-white placeholder:text-white/40 rounded-xl px-4 py-3 outline-none focus:border-sky/60 focus:bg-white/10 transition-colors" placeholder="you@company.com" />
              </div>
              <div>
                <label className="text-xs font-semibold text-white/70 uppercase tracking-wider">Interest</label>
                <select className="mt-1.5 w-full bg-white/5 border border-white/10 text-white rounded-xl px-4 py-3 outline-none focus:border-sky/60 focus:bg-white/10 transition-colors">
                  <option className="bg-navy">Strategic R&D / Consultancy</option>
                  <option className="bg-navy">Executive Training</option>
                  <option className="bg-navy">Digital Platforms</option>
                  <option className="bg-navy">FIA Network Partnership</option>
                  <option className="bg-navy">Foundation Collaboration</option>
                </select>
              </div>
            </div>
            <div>
              <label className="text-xs font-semibold text-white/70 uppercase tracking-wider">Message</label>
              <textarea required rows={5} className="mt-1.5 w-full bg-white/5 border border-white/10 text-white placeholder:text-white/40 rounded-xl px-4 py-3 outline-none focus:border-sky/60 focus:bg-white/10 transition-colors resize-none" placeholder="Tell us about your project or opportunity" />
            </div>
            <button disabled={sending} className="inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-ilink to-sky shadow-xl shadow-ilink/40 hover:shadow-ilink/60 transition-all hover:-translate-y-0.5 disabled:opacity-60">
              {sending ? "Sending..." : "Send Message"} <Send size={15} />
            </button>
          </form>

          <div className="lg:col-span-2 space-y-4 reveal">
            <div className="glass-dark rounded-3xl p-7">
              <div className="text-xs uppercase tracking-widest text-sky font-semibold">Visit Us</div>
              <div className="mt-4 space-y-4 text-white/85">
                <div className="flex gap-3">
                  <MapPin className="text-sky shrink-0 mt-0.5" size={18} />
                  <div className="text-sm leading-relaxed">Vision Arcade Executive Suites,<br />KG 379 & KG 9 Avenue<br />Kigali, Rwanda</div>
                </div>
                <div className="flex gap-3">
                  <Phone className="text-sky shrink-0 mt-0.5" size={18} />
                  <a href="tel:+250793146087" className="text-sm hover:text-sky transition-colors">+250 793 146 087</a>
                </div>
                <div className="flex gap-3">
                  <Mail className="text-sky shrink-0 mt-0.5" size={18} />
                  <a href="mailto:info@ilinkbiz.com" className="text-sm hover:text-sky transition-colors">info@ilinkbiz.com</a>
                </div>
                <div className="flex gap-3">
                  <Globe className="text-sky shrink-0 mt-0.5" size={18} />
                  <a href="https://www.ilinkbiz.com" className="text-sm hover:text-sky transition-colors">www.ilinkbiz.com</a>
                </div>
              </div>
            </div>
            <div className="glass-dark rounded-3xl p-7">
              <div className="text-xs uppercase tracking-widest text-sky font-semibold">Office Hours</div>
              <div className="mt-3 text-white/85 text-sm">Monday – Friday<br />08:30 – 17:30 CAT</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
