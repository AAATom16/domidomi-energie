import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

interface FooterProps {
  onOpenCalculator?: () => void;
}

export function Footer({ onOpenCalculator }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="kontakt"
      className="bg-[#111928] text-white pb-[calc(5.5rem+env(safe-area-inset-bottom,0px))] md:pb-[calc(4.5rem+env(safe-area-inset-bottom,0px))]"
      style={{ fontFamily: "'Open Sans', sans-serif" }}
    >
      {/* Main footer */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_auto] gap-10 md:gap-16">

          {/* Brand + kontakt */}
          <div>
            <div className="mb-3">
              <span className="text-white" style={{ fontSize: "18px", fontWeight: 700 }}>DOMIDOMI</span>
              <span className="text-[#E30A1A] ml-1" style={{ fontSize: "18px", fontWeight: 700 }}>Energie</span>
            </div>
            <p className="text-white/55 leading-relaxed mb-5" style={{ fontSize: "13px", maxWidth: "280px" }}>
              Zprostředkovatel výhodných fixovaných cen energií pro domácnosti, podnikatele a firmy.
            </p>
            <div className="flex flex-col gap-2.5">
              <div className="flex items-center gap-2.5 text-white/55">
                <Mail size={13} className="shrink-0" />
                <a href="mailto:energie@domidomi.cz" className="hover:text-white transition-colors" style={{ fontSize: "13px" }}>
                  energie@domidomi.cz
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-white/55">
                <Phone size={13} className="shrink-0" />
                <a href="tel:+420800123456" className="hover:text-white transition-colors" style={{ fontSize: "13px" }}>
                  +420 800 123 456
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-white/55">
                <MapPin size={13} className="shrink-0" />
                <span style={{ fontSize: "13px" }}>Praha, Česká republika</span>
              </div>
            </div>
          </div>

          {/* Odkazy */}
          <div>
            <p className="text-white/40 uppercase tracking-widest mb-4" style={{ fontSize: "11px", fontWeight: 600 }}>Odkazy</p>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: "Jak to funguje", href: "#jak-to-funguje" },
                { label: "Pro koho", href: "#segmenty" },
                { label: "Výhody", href: "#vyhody" },
                { label: "FAQ", href: "#faq" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors"
                    style={{ fontSize: "14px" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="mt-1">
                <button
                  onClick={onOpenCalculator}
                  className="text-[#E30A1A] hover:text-[#ff2a3b] transition-colors"
                  style={{ fontSize: "14px", fontWeight: 600 }}
                >
                  Získat nabídku →
                </button>
              </li>
            </ul>
          </div>

          {/* Dokumenty */}
          <div>
            <p className="text-white/40 uppercase tracking-widest mb-4" style={{ fontSize: "11px", fontWeight: 600 }}>Dokumenty</p>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: "GDPR — Ochrana osobních údajů", href: "/legal/ochrana-osobnich-udaju.pdf" },
                { label: "Etický kodex", href: "/legal/eticky-kodex.pdf" },
                { label: "Informace o zprostředkovateli", href: "/legal/informace-o-zprostredkovateli.pdf" },
                { label: "Reklamační řád", href: "/legal/reklamacni-rad.pdf" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-white transition-colors"
                    style={{ fontSize: "14px" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 pt-4 pb-6 md:pb-5">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-white/35 text-center md:text-left" style={{ fontSize: "12px" }}>
            © {currentYear} DOMIDOMI Energie. Všechna práva vyhrazena.
          </p>
          <p className="text-white/35 text-center md:text-right" style={{ fontSize: "12px" }}>
            Součást ekosystému{" "}
            <a href="https://domidomi.cz" className="text-white/55 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
              domidomi.cz
            </a>
          </p>
        </div>

        {/* Provozovatel / obchodní údaje — prostor pod lištou řeší padding na wrapperu v App */}
        <div className="max-w-4xl mx-auto px-6 mt-5 pt-5 border-t border-white/10">
          <p
            className="text-white/30 text-center leading-relaxed"
            style={{ fontSize: "11px", lineHeight: 1.55 }}
          >
            © {currentYear} DOMIDOMI services s.r.o., Kaprova 42/14, 110 00 Praha 1 – Staré Město, IČO: 24500801,
            zapsaná v obchodním rejstříku vedeném Městským soudem v Praze, oddíl C, vložka 442221.
          </p>
        </div>
      </div>
    </footer>
  );
}
