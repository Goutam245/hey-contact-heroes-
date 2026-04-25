import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, Phone, Mail, X } from "lucide-react";
import logo from "@/assets/hch-logo.png";

const navLinks = [
  { to: "/", label: "Startseite" },
  { to: "/leistungen", label: "Leistungen" },
  { to: "/branchenloesungen", label: "Branchenlösungen" },
  { to: "/ueber-uns", label: "Über uns" },
  { to: "/warum-hch", label: "Warum HCH" },
  { to: "/referenzen", label: "Referenzen" },
  { to: "/karriere", label: "Karriere" },
  { to: "/insights", label: "Insights" },
];

const SocialIcon = ({ d, label }: { d: string; label: string }) => (
  <a href="#" aria-label={label} className="text-white/90 transition-opacity hover:opacity-70">
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d={d} /></svg>
  </a>
);

const LINKEDIN = "M19 0H5a5 5 0 0 0-5 5v14a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5zM8 19H5V8h3v11zM6.5 6.7a1.8 1.8 0 1 1 0-3.6 1.8 1.8 0 0 1 0 3.6zM20 19h-3v-5.6c0-3.4-4-3.1-4 0V19h-3V8h3v1.8c1.4-2.6 7-2.8 7 2.5V19z";
const INSTAGRAM = "M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.5 1 .4.4.7.9 1 1.5.2.4.4 1 .4 2.2.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.2 1.8-.4 2.2a4 4 0 0 1-1 1.5c-.4.4-.9.7-1.5 1-.4.2-1 .4-2.2.4-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-1.8-.2-2.2-.4a4 4 0 0 1-1.5-1 4 4 0 0 1-1-1.5c-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8c.1-1.2.2-1.8.4-2.2.2-.6.5-1 1-1.5.4-.4.9-.7 1.5-1 .4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.1 0-3.5 0-4.7.1-1.1 0-1.7.2-2.1.4-.5.2-.9.4-1.2.8-.4.3-.6.7-.8 1.2-.2.4-.3 1-.4 2.1-.1 1.2-.1 1.6-.1 4.7s0 3.5.1 4.7c0 1.1.2 1.7.4 2.1.2.5.4.9.8 1.2.3.4.7.6 1.2.8.4.2 1 .3 2.1.4 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c1.1 0 1.7-.2 2.1-.4.5-.2.9-.4 1.2-.8.4-.3.6-.7.8-1.2.2-.4.3-1 .4-2.1.1-1.2.1-1.6.1-4.7s0-3.5-.1-4.7c0-1.1-.2-1.7-.4-2.1-.2-.5-.4-.9-.8-1.2-.3-.4-.7-.6-1.2-.8-.4-.2-1-.3-2.1-.4-1.2-.1-1.6-.1-4.7-.1zm0 3.1a4.9 4.9 0 1 1 0 9.8 4.9 4.9 0 0 1 0-9.8zm0 8.1a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4zm6.3-8.3a1.2 1.2 0 1 1-2.3 0 1.2 1.2 0 0 1 2.3 0z";
const FACEBOOK = "M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.5 2.9h-2.3v7A10 10 0 0 0 22 12z";

export const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Top info bar */}
      <div className="fixed inset-x-0 top-0 z-[9999] h-10 bg-primary text-white">
        <div className="mx-auto flex h-full max-w-[1400px] items-center justify-between gap-4 px-6 md:px-12 text-[13px] font-medium">
          <div className="hidden md:flex items-center gap-5 leading-none">
            <a href="tel:+4940300961700" className="flex items-center gap-2 hover:opacity-80">
              <Phone size={14} /> +49 (0)40 – 30 09 6170
            </a>
            <span className="opacity-50">·</span>
            <a href="mailto:jobs@hey-contact-heroes.de" className="flex items-center gap-2 hover:opacity-80">
              <Mail size={14} /> jobs@hey-contact-heroes.de
            </a>
          </div>
          <div className="flex w-full items-center justify-center gap-4 leading-none md:w-auto md:justify-end">
            <SocialIcon d={LINKEDIN} label="LinkedIn" />
            <SocialIcon d={INSTAGRAM} label="Instagram" />
            <SocialIcon d={FACEBOOK} label="Facebook" />
          </div>
        </div>
      </div>

      {/* Main nav */}
      <header className="fixed inset-x-0 top-10 z-[9998] h-[68px] border-b border-border bg-background shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
        <div className="mx-auto flex h-full max-w-[1400px] items-center justify-between gap-4 px-4 md:px-8 lg:px-10">
          <Link to="/" className="flex shrink-0 items-center">
            <img src={logo} alt="hey contact heroes" className="h-[40px] w-auto" />
          </Link>

          <nav className="hidden lg:flex flex-1 items-center justify-center gap-0.5">
            {navLinks.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  `whitespace-nowrap rounded-lg px-2 py-2 text-[13px] font-medium transition-colors ${
                    isActive ? "bg-primary-tint text-primary" : "text-[#374151] hover:bg-primary-tint hover:text-primary"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:flex shrink-0 items-center gap-2">
            <Link
              to="/kontakt"
              className="inline-flex h-10 items-center whitespace-nowrap rounded-full bg-primary px-[18px] text-[13px] font-semibold text-primary-foreground transition-colors hover:bg-primary-hover"
            >
              Jetzt beraten lassen →
            </Link>
          </div>

          <button
            className="lg:hidden flex h-10 w-10 items-center justify-center rounded-lg text-[#374151] hover:bg-primary-tint"
            onClick={() => setOpen(true)}
            aria-label="Menü öffnen"
          >
            <Menu size={22} />
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      {open && (
        <div className="fixed inset-0 z-[10000] flex flex-col bg-background animate-reveal">
          <div className="flex items-center justify-between px-6 py-4 border-b border-border">
            <img src={logo} alt="hey contact heroes" className="h-10" />
            <button onClick={() => setOpen(false)} className="text-primary" aria-label="Schließen">
              <X size={26} />
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto px-6">
            {navLinks.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                onClick={() => setOpen(false)}
                className="block border-b border-secondary py-[18px] text-[22px] font-semibold text-heading"
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
          <div className="p-6">
            <Link
              to="/kontakt"
              onClick={() => setOpen(false)}
              className="flex h-12 w-full items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold"
            >
              Jetzt beraten lassen →
            </Link>
          </div>
        </div>
      )}
    </>
  );
};
