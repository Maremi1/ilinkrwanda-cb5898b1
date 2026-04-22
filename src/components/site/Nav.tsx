import { useState } from "react";
import logo from "@/assets/ilink-logo.png";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#leadership", label: "Leadership" },
  { href: "#services", label: "Services" },
  { href: "#innovations", label: "Solutions" },
  { href: "#impact", label: "Impact" },
  { href: "#ecosystem", label: "Ecosystem" },
  { href: "#foundation", label: "Foundation" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-3 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl">
      <div className="glass rounded-2xl px-4 md:px-6 py-3 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5">
          <img src={logo} alt="I Link Rwanda logo" className="h-9 w-9 object-contain" />
          <div className="leading-tight">
            <div className="text-[10px] md:text-[11px] text-muted-foreground -mt-0.5">Limited</div>
          </div>
        </a>
        <nav className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-navy/80 hover:text-ilink transition-colors font-medium">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden md:inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-ilink to-sky shadow-lg shadow-ilink/30 hover:shadow-ilink/50 transition-shadow"
        >
          Partner With Us
        </a>
        <button onClick={() => setOpen(!open)} className="lg:hidden p-2 text-navy" aria-label="Menu">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open && (
        <div className="glass-strong rounded-2xl mt-2 p-4 lg:hidden flex flex-col gap-3 animate-fade-in">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-navy/90 font-medium py-1">
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="mt-2 text-center rounded-xl px-4 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-ilink to-sky">
            Partner With Us
          </a>
        </div>
      )}
    </header>
  );
}
