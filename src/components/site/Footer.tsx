import logo from "@/assets/ilink-logo.png";
import rwanda from "@/assets/footer-rwanda.jpg";

export default function Footer() {
  return (
    <footer className="bg-navy-deep text-white/70">
      <div className="relative h-24 md:h-32 overflow-hidden">
        <img
          src={rwanda}
          alt="Rolling hills of Rwanda at sunrise"
          width={1920}
          height={512}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy-deep/40 to-navy-deep" />
      </div>
      <div className="container pt-12 pb-10">

        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <img src={logo} alt="I Link Rwanda" className="h-11 w-11 object-contain bg-white rounded-xl p-1" />
              <div>
                <div className="font-display font-bold text-white text-lg">I Link Rwanda Limited</div>
                <div className="text-xs text-white/50">Architecting Rwanda's Digital and Financial Future</div>
              </div>
            </div>
            <p className="mt-5 text-sm leading-relaxed max-w-md">
              A pioneering MARTECH and digital financial services group delivering market-ready
              solutions through a 361° holistic approach.
            </p>
          </div>
          <div>
            <div className="text-white font-display font-semibold mb-4">Explore</div>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-sky transition-colors">About</a></li>
              <li><a href="#services" className="hover:text-sky transition-colors">Services</a></li>
              <li><a href="#innovations" className="hover:text-sky transition-colors">Solutions</a></li>
              <li><a href="#impact" className="hover:text-sky transition-colors">FIA Impact</a></li>
              <li><a href="#foundation" className="hover:text-sky transition-colors">Foundation</a></li>
            </ul>
          </div>
          <div>
            <div className="text-white font-display font-semibold mb-4">Reach Us</div>
            <ul className="space-y-2 text-sm">
              <li>Vision Arcade, KG 379 Av., Kigali</li>
              <li><a href="tel:+250793146087" className="hover:text-sky transition-colors">+250 793 146 087</a></li>
              <li><a href="mailto:info@ilinkbiz.com" className="hover:text-sky transition-colors">info@ilinkbiz.com</a></li>
              <li><a href="https://www.ilinkbiz.com" className="hover:text-sky transition-colors">www.ilinkbiz.com</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-wrap justify-between gap-4 text-xs text-white/50">
          <div>© {new Date().getFullYear()} I Link Rwanda Limited. All rights reserved.</div>
          <div>A subsidiary of I Link Global Holdings · Africa & Beyond</div>
        </div>
      </div>
    </footer>
  );
}
