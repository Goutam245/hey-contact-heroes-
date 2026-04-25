import { Link } from "react-router-dom";
import logo from "@/assets/hch-logo.png";

const col = (title: string, items: { label: string; to: string }[]) => (
  <div>
    <h4 className="mb-5 text-[15px] font-bold text-white">{title}</h4>
    <ul className="space-y-3">
      {items.map((i) => (
        <li key={i.label}>
          <Link to={i.to} className="text-[14px] text-[#94A3B8] transition-colors hover:text-white">
            {i.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export const Footer = () => (
  <footer className="bg-footer-bg border-t-[3px] border-primary">
    <div className="container-page py-[72px] pb-7">
      <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <img src={logo} alt="hey contact heroes" className="h-10 mb-5 brightness-0 invert" />
          <p className="text-[14px] text-[#94A3B8] leading-relaxed">
            Premium Kundenservice — Inbound, Outbound & KI-gestützt. 100% remote, made in Hamburg.
          </p>
          <div className="mt-5 flex gap-3">
            {["in", "ig", "fb"].map((k) => (
              <a key={k} href="#" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-[#94A3B8] transition-colors hover:border-primary hover:text-primary">
                <span className="text-xs font-bold uppercase">{k}</span>
              </a>
            ))}
          </div>
        </div>

        {col("Leistungen", [
          { label: "Inbound Service", to: "/leistungen" },
          { label: "Outbound & Sales", to: "/leistungen" },
          { label: "Back-Office", to: "/leistungen" },
          { label: "KI & Automatisierung", to: "/technologie" },
        ])}

        {col("Unternehmen", [
          { label: "Über uns", to: "/ueber-uns" },
          { label: "Warum HCH", to: "/warum-hch" },
          { label: "Referenzen", to: "/referenzen" },
          { label: "Karriere", to: "/karriere" },
        ])}

        <div>
          <h4 className="mb-5 text-[15px] font-bold text-white">Kontakt</h4>
          <address className="not-italic text-[14px] text-[#94A3B8] leading-relaxed">
            hey contact heroes GmbH<br />
            Am Kaiserkai 45<br />
            20457 Hamburg<br /><br />
            +49 (0)40 – 30 09 6170<br />
            jobs@hey-contact-heroes.de
          </address>
          <form className="mt-5 flex" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="E-Mail"
              className="h-10 flex-1 rounded-l-full border border-white/15 bg-white/5 px-4 text-[13px] text-white placeholder:text-[#6B7280] focus:border-primary focus:outline-none"
            />
            <button className="h-10 rounded-r-full bg-primary px-4 text-[13px] font-semibold text-primary-foreground hover:bg-primary-hover">
              Abonnieren
            </button>
          </form>
        </div>
      </div>

      <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-5 text-[14px] text-[#6B7280] md:flex-row md:justify-between">
        <p>© {new Date().getFullYear()} hey contact heroes GmbH · <Link to="/impressum" className="hover:text-white">Impressum</Link> · <Link to="/datenschutz" className="hover:text-white">Datenschutz</Link> · AGB</p>
        <p>Made with ❤️ in Hamburg 🇩🇪</p>
      </div>
    </div>
  </footer>
);
