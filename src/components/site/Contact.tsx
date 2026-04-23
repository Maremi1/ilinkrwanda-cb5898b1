import { useState } from "react";
import { Mail, MapPin, Phone, Globe, Send } from "lucide-react";
import { toast } from "sonner";
import office from "@/assets/contact-office.jpg";

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
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white leading-[1.1] tracking-tight text-balance">
            Build the future of finance and digital commerce <span className="bg-gradient-to-r from-sky to-white bg-clip-text text-transparent">— with us</span>
          </h2>
          <p className="mt-5 text-white/65 text-lg">Tell us about your project or partnership — we typically reply within one business day.</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          <form onSubmit={onSubmit} className="lg:col-span-3 glass-dark rounded-3xl p-7 md:p-9 space-y-5 reveal">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-[11px] font-semibold text-sky/90 uppercase tracking-wider">Name</label>
                <input required className="input-dark mt-1.5" placeholder="Your full name" />
              </div>
              <div>
                <label className="text-[11px] font-semibold text-sky/90 uppercase tracking-wider">Company</label>
                <input className="input-dark mt-1.5" placeholder="Organization" />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-[11px] font-semibold text-sky/90 uppercase tracking-wider">Email</label>
                <input required type="email" className="input-dark mt-1.5" placeholder="you@company.com" />
              </div>
              <div>
                <label className="text-[11px] font-semibold text-sky/90 uppercase tracking-wider">Interest</label>
                <select className="input-dark mt-1.5 appearance-none cursor-pointer">
                  <option className="bg-navy">Strategic R&D / Consultancy</option>
                  <option className="bg-navy">Executive Training</option>
                  <option className="bg-navy">Digital Platforms</option>
                  <option className="bg-navy">FIA Network Partnership</option>
                  <option className="bg-navy">Foundation Collaboration</option>
                </select>
              </div>
            </div>
            <div>
              <label className="text-[11px] font-semibold text-sky/90 uppercase tracking-wider">Message</label>
              <textarea required rows={5} className="input-dark mt-1.5 resize-none" placeholder="Tell us about your project or opportunity" />
            </div>
            <button disabled={sending} className="inline-flex items-center gap-2 rounded-2xl px-7 py-4 text-sm font-semibold text-white bg-gradient-to-r from-ilink to-sky shadow-xl shadow-ilink/40 hover:shadow-ilink/60 transition-all hover:-translate-y-0.5 disabled:opacity-60 ring-focus">
              {sending ? "Sending..." : "Send Message"} <Send size={15} />
            </button>
          </form>

          <div className="lg:col-span-2 space-y-4 reveal">
            <div className="relative rounded-3xl overflow-hidden glass-dark p-2">
              <img
                src={office}
                alt="Vision Arcade executive office building in Kigali at dusk"
                width={1200}
                height={900}
                loading="lazy"
                decoding="async"
                className="w-full h-44 object-cover rounded-2xl"
              />
              <div className="absolute inset-2 rounded-2xl bg-gradient-to-t from-navy/80 via-navy/10 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-5 right-5">
                <div className="text-[10px] uppercase tracking-widest text-sky font-semibold">Headquarters</div>
                <div className="font-display text-lg font-bold text-white leading-tight mt-0.5">Vision Arcade, Kigali</div>
              </div>
            </div>
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
