import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  Phone, TrendingUp, FileText, Cpu, Globe, BarChart2, Star,
  Building2, ArrowRight, Quote, ChevronLeft, ChevronRight, Home, Coins, Users
} from "lucide-react";
import hero from "@/assets/hero-superhero.png";

/* --------------------------- Reveal-on-scroll --------------------------- */
const Reveal = ({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setShown(true); io.disconnect(); }
    }, { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "translateY(0)" : "translateY(24px)",
        transition: `opacity .6s ease ${delay}ms, transform .6s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

/* -------------------------- Animated counter --------------------------- */
const Counter = ({ to, suffix = "", duration = 1800, className = "" }: { to: number; suffix?: string; duration?: number; className?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [val, setVal] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        const start = performance.now();
        const tick = (t: number) => {
          const p = Math.min(1, (t - start) / duration);
          setVal(Math.round(p * to));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        io.disconnect();
      }
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [to, duration]);
  return <span ref={ref} className={className}>{val}{suffix}</span>;
};

/* ============================== HERO ============================== */
const Hero = () => (
  <section className="relative overflow-hidden bg-background">
    <div
      className="pointer-events-none absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full"
      style={{ background: "radial-gradient(circle, rgba(0,168,168,0.08), transparent 70%)" }}
    />
    <div className="container-page relative grid min-h-[calc(100vh-108px)] items-center gap-15 py-20 lg:grid-cols-[55fr_45fr] lg:gap-15">
      <Reveal>
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-tint px-[18px] py-1.5 text-[12px] font-semibold text-primary">
          🏆 Deutschlands führendes Remote Call Center
        </span>
        <h1 className="mt-7 font-display text-[36px] font-extrabold leading-[1.1] text-heading sm:text-[48px] lg:text-[60px]">
          Ihr Kundenservice.<br />
          Unsere<br />
          <span className="text-primary">Leidenschaft.</span>
        </h1>
        <p className="mt-5 max-w-xl text-[18px] leading-[1.6] text-body">
          hey contact heroes verwandelt jeden Kontakt in eine Chance. Inbound. Outbound. KI-gestützt. 100% remote.
        </p>
        <div className="mt-9 flex flex-wrap gap-3.5">
          <Link to="/kontakt" className="btn-primary">Kostenlos beraten lassen →</Link>
          <Link to="/leistungen" className="btn-outline">Leistungen entdecken</Link>
        </div>
        <div className="mt-11 flex flex-wrap gap-7 border-t border-border pt-7">
          {[
            { icon: <Star size={16} className="text-primary fill-primary" />, val: "4.9/5", label: "Kundenbewertung" },
            { icon: <Building2 size={16} className="text-primary" />, val: "500+", label: "Projekte" },
            { icon: <Globe size={16} className="text-primary" />, val: "Remote", label: "seit 2015" },
          ].map((t) => (
            <div key={t.label} className="flex items-center gap-2">
              {t.icon}
              <span className="text-[14px] font-bold text-heading">{t.val}</span>
              <span className="text-[14px] text-light">{t.label}</span>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal delay={150} className="hidden lg:block">
        <div className="relative flex items-center justify-center p-5">
          <img
            src={hero}
            alt="hey contact heroes Superheld"
            width={760}
            height={896}
            className="w-full max-w-[380px] animate-hero-float"
            style={{ filter: "drop-shadow(0 20px 40px rgba(0,168,168,0.18))" }}
          />
          <div className="absolute left-0 top-8 flex items-center gap-3 rounded-2xl border border-border bg-background px-5 py-3.5 shadow-float animate-float-a">
            <div>
              <div className="font-display text-[28px] font-extrabold text-orange leading-none">98%</div>
              <div className="mt-1 text-[12px] text-body">Kundenzufriedenheit</div>
            </div>
          </div>
          <div className="absolute right-0 bottom-12 flex items-center gap-3 rounded-2xl border border-border bg-background px-5 py-3.5 shadow-float animate-float-b">
            <div>
              <div className="font-display text-[28px] font-extrabold text-primary leading-none">24/7</div>
              <div className="mt-1 text-[12px] text-body">Verfügbarkeit</div>
            </div>
          </div>
          <div className="absolute right-2 top-1/2 flex items-center gap-3 rounded-2xl border border-border bg-background px-5 py-3.5 shadow-float animate-float-c">
            <div>
              <div className="font-display text-[28px] font-extrabold text-accent leading-none">500+</div>
              <div className="mt-1 text-[12px] text-body">Projekte</div>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

/* ============================ TICKER ============================ */
const brands = ["NorthCommerce", "DesignPro", "Hanseatic Bank", "MediGroup", "TechMove", "UrbanRetail", "FlightHub", "GreenEnergy"];
const Ticker = () => (
  <section className="border-y border-border bg-soft">
    <div className="flex h-[72px] items-center gap-8 px-6 md:px-12">
      <span className="hidden md:block whitespace-nowrap text-[12px] font-semibold uppercase tracking-wider text-light">Vertraut von:</span>
      <div className="relative flex-1 overflow-hidden">
        <div className="flex animate-ticker">
          {[...brands, ...brands].map((b, i) => (
            <span key={i} className="px-10 text-[13px] font-medium text-light whitespace-nowrap">{b}</span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* ============================ SERVICES ============================ */
const services = [
  { icon: Phone, color: "hsl(180 100% 33%)", title: "Inbound Kundenservice", text: "Professionelle Bearbeitung jeder Anfrage per Telefon, Chat und E-Mail." },
  { icon: TrendingUp, color: "hsl(36 91% 55%)", title: "Outbound & Vertrieb", text: "Aktive Kundenansprache, Lead-Generierung und Vertriebskampagnen." },
  { icon: FileText, color: "hsl(327 100% 39%)", title: "Back-Office-Services", text: "Datenpflege, Auftragsverarbeitung und administrative Prozesse." },
  { icon: Cpu, color: "hsl(180 100% 33%)", title: "KI & Automatisierung", text: "Intelligente Bots und Automatisierung für maximale Effizienz." },
];
const Services = () => (
  <section className="bg-background py-24">
    <div className="container-page">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="label-eyebrow">Leistungen</p>
        <h2 className="mt-3 text-[28px] font-bold text-heading sm:text-[36px]">Unsere Leistungen im Überblick</h2>
        <p className="mt-3 text-[17px] text-body">Vier integrierte Kompetenzfelder, die Ihren Kundenservice end-to-end abdecken.</p>
      </Reveal>
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={i * 80}>
            <div
              className="group h-full rounded-[18px] border border-border bg-background p-8 transition-all hover:-translate-y-1 hover:border-primary hover:shadow-card-hover"
              style={{ borderTop: `3px solid ${s.color}` }}
            >
              <div className="flex h-[52px] w-[52px] items-center justify-center rounded-2xl bg-primary-tint">
                <s.icon size={26} className="text-primary" />
              </div>
              <h3 className="mt-5 text-[19px] font-bold text-heading">{s.title}</h3>
              <p className="mt-2.5 text-[14px] leading-[1.7] text-body">{s.text}</p>
              <Link to="/leistungen" className="mt-5 inline-flex items-center gap-1 text-[13px] font-semibold text-primary">
                Mehr erfahren <ArrowRight size={14} />
              </Link>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

/* ============================ STATS ============================ */
const stats = [
  { val: 500, suffix: "+", label: "Erfolgreiche Projekte" },
  { val: 98, suffix: "%", label: "Kundenzufriedenheit" },
  { val: 0, suffix: "24/7", label: "Serviceverfügbarkeit", literal: true },
  { val: 15, suffix: "+", label: "Jahre Erfahrung" },
];
const Stats = () => (
  <section className="border-y border-border bg-soft py-[60px] px-6 md:px-12">
    <div className="mx-auto grid max-w-[1100px] grid-cols-2 lg:grid-cols-4">
      {stats.map((s, i) => (
        <div
          key={s.label}
          className={`flex flex-1 flex-col items-center px-4 py-6 text-center ${
            i < stats.length - 1 ? "lg:border-r lg:border-border" : ""
          }`}
        >
          <div className="font-display text-[44px] sm:text-[56px] font-extrabold leading-none text-primary text-center">
            {s.literal ? <span>24/7</span> : <Counter to={s.val} suffix={s.suffix} />}
          </div>
          <p className="mt-[10px] text-[15px] font-medium text-body text-center">{s.label}</p>
        </div>
      ))}
    </div>
  </section>
);

/* ============================ WHY ============================ */
const why = [
  { icon: Globe, title: "100% Remote & Flexibel", text: "Unser Team arbeitet ortsunabhängig — maximale Flexibilität für Sie und uns." },
  { icon: Cpu, title: "KI-gestützte Prozesse", text: "Modernste Technologie für schnellere, präzisere und günstigere Ergebnisse." },
  { icon: BarChart2, title: "Transparenz & Performance", text: "Echtzeit-Reporting und messbare KPIs — Sie haben immer den Überblick." },
];
const Why = () => (
  <section className="bg-background py-24">
    <div className="container-page">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="label-eyebrow">Warum HCH</p>
        <h2 className="mt-3 text-[28px] font-bold text-heading sm:text-[36px]">Drei Gründe, die alles verändern</h2>
        <p className="mt-3 text-[17px] text-body">Was uns von klassischen Call Centern unterscheidet — und warum Marken uns vertrauen.</p>
      </Reveal>
      <div className="mt-14 grid gap-7 md:grid-cols-3">
        {why.map((w, i) => (
          <Reveal key={w.title} delay={i * 100}>
            <div className="h-full rounded-[18px] border border-border bg-soft p-10 transition-all hover:border-primary hover:bg-primary-tint">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-tint">
                <w.icon size={28} className="text-primary" />
              </div>
              <h3 className="mt-6 text-[20px] font-bold text-heading">{w.title}</h3>
              <p className="mt-3 text-[15px] leading-[1.7] text-body">{w.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Link to="/warum-hch" className="inline-flex h-[46px] items-center rounded-full border-[1.5px] border-primary px-7 text-[14px] font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
          Alle Vorteile entdecken →
        </Link>
      </div>
    </div>
  </section>
);

/* ========================= TESTIMONIALS ========================= */
const testimonials = [
  { quote: "hey contact heroes hat unseren Kundenservice revolutioniert. Die Effizienz stieg um 40%.", name: "Alex Weber", role: "Head of Customer Care, NorthCommerce GmbH" },
  { quote: "Endlich ein Partner, der wirklich versteht, was moderner Service bedeutet.", name: "Marco Schäfer", role: "COO, NorthBrands AG" },
  { quote: "Die Skalierung von 5 auf 80 Agenten lief reibungslos. Wir würden es jederzeit wieder tun.", name: "Lena Brenner", role: "Co-Founderin, DesignPro" },
];
const Testimonials = () => {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % testimonials.length), 5000);
    return () => clearInterval(t);
  }, []);
  return (
    <section className="bg-soft py-24">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="label-eyebrow">Kundenstimmen</p>
          <h2 className="mt-3 text-[28px] font-bold text-heading sm:text-[36px]">Das sagen unsere Kunden</h2>
          <p className="mt-3 text-[17px] text-body">Echte Ergebnisse. Echte Unternehmen.</p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, idx) => (
            <Reveal key={t.name} delay={idx * 100}>
              <article className="relative h-full rounded-2xl border border-border border-l-[3px] border-l-primary bg-background p-8 shadow-card">
                <Quote size={56} className="absolute left-3 top-2 text-border" />
                <div className="relative">
                  <div className="flex gap-1 text-orange">
                    {Array.from({ length: 5 }).map((_, s) => <Star key={s} size={14} className="fill-orange" />)}
                  </div>
                  <p className="mt-4 italic leading-[1.8] text-body">{t.quote}</p>
                  <div className="mt-5">
                    <div className="text-[14px] font-bold text-heading">{t.name}</div>
                    <div className="text-[13px] text-light">{t.role}</div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center gap-3">
          <button onClick={() => setI((v) => (v - 1 + testimonials.length) % testimonials.length)} className="flex h-10 w-10 items-center justify-center rounded-full border border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            <ChevronLeft size={18} />
          </button>
          {testimonials.map((_, idx) => (
            <button key={idx} onClick={() => setI(idx)} className={`h-2 rounded-full transition-all ${i === idx ? "w-6 bg-primary" : "w-2 bg-border"}`} />
          ))}
          <button onClick={() => setI((v) => (v + 1) % testimonials.length)} className="flex h-10 w-10 items-center justify-center rounded-full border border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

/* ========================= CASE STUDY ========================= */
const CaseStudy = () => (
  <section className="bg-gradient-brand px-6 py-[72px] md:px-20">
    <div className="container-page grid items-center gap-10 lg:grid-cols-2">
      <Reveal>
        <div className="font-display text-[64px] font-extrabold leading-none text-white sm:text-[80px]">+300%</div>
        <p className="mt-3 text-[22px] font-bold leading-snug text-white">Steigerung der Kundenzufriedenheit</p>
        <p className="mt-1.5 text-[15px] text-white/75">bei NorthCommerce AG</p>
      </Reveal>
      <Reveal delay={120}>
        <p className="text-[16px] leading-[1.75] text-white/90">
          Innerhalb von 6 Monaten haben wir bei NorthCommerce die durchschnittliche Bearbeitungszeit halbiert,
          die NPS verdreifacht und parallel die Servicekosten um 28% gesenkt — ohne Kompromisse bei der Qualität.
        </p>
        <Link
          to="/referenzen"
          className="mt-7 inline-flex h-12 items-center whitespace-nowrap rounded-full bg-white px-7 text-[15px] font-semibold text-primary transition-colors hover:bg-primary-tint"
        >
          Zur vollständigen Fallstudie →
        </Link>
      </Reveal>
    </div>
  </section>
);

/* ========================= BLOG PREVIEW ========================= */
const blog = [
  { cat: "Strategie", title: "Customer Service als Wachstumstreiber", excerpt: "Warum Service-Investitionen heute den höchsten Hebel im B2C haben.", img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=900" },
  { cat: "KI", title: "KI-Voicebots: Hype oder Hebel?", excerpt: "Was funktioniert wirklich — und wo Menschen weiterhin unschlagbar sind.", img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=900" },
  { cat: "Remote", title: "Remote Service Teams skalieren", excerpt: "Operative Best Practices aus 10 Jahren Remote-First-Betrieb.", img: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=900" },
];
const Blog = () => (
  <section className="bg-background py-24">
    <div className="container-page">
      <Reveal className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="label-eyebrow">Insights</p>
          <h2 className="mt-3 text-[28px] font-bold text-heading sm:text-[36px]">Aktuelles aus der Welt des Kundenservice</h2>
        </div>
        <Link to="/insights" className="text-[14px] font-semibold text-primary hover:underline">Alle Artikel →</Link>
      </Reveal>
      <div className="mt-12 grid gap-7 md:grid-cols-3">
        {blog.map((b, i) => (
          <Reveal key={b.title} delay={i * 100}>
            <article className="group h-full overflow-hidden rounded-2xl border border-border bg-background transition-all hover:-translate-y-1 hover:shadow-card-hover">
              <div className="h-[200px] overflow-hidden">
                <img src={b.img} alt={b.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <span className="inline-block rounded-full bg-primary-tint px-3 py-1 text-[11px] font-semibold uppercase text-primary">{b.cat}</span>
                <h3 className="mt-3 text-[17px] font-bold text-heading">{b.title}</h3>
                <p className="mt-2 line-clamp-2 text-[14px] text-body">{b.excerpt}</p>
                <div className="mt-4 border-t border-secondary pt-4 text-[13px] text-light">5 min Lesezeit · 2025</div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

/* ========================= CAREERS TEASER ========================= */
const Careers = () => (
  <section className="bg-soft py-20">
    <div className="container-page grid items-center gap-12 lg:grid-cols-2">
      <Reveal>
        <p className="label-eyebrow">Karriere</p>
        <h2 className="mt-3 text-[28px] font-bold text-heading sm:text-[36px]">
          Werde ein <span className="text-accent">Contact Hero!</span>
        </h2>
        <p className="mt-4 max-w-md text-[17px] text-body">
          Werde Teil eines vielfältigen, remote arbeitenden Teams mit Erfolgsbeteiligung und echter Wirkung.
        </p>
        <Link to="/karriere" className="btn-primary mt-7">Jobs ansehen →</Link>
      </Reveal>
      <Reveal delay={120} className="grid gap-4">
        {[
          { icon: Home, label: "Remote Work" },
          { icon: Coins, label: "Erfolgsbeteiligung" },
          { icon: Users, label: "Diverse Teams" },
        ].map((b) => (
          <div key={b.label} className="flex items-center gap-4 rounded-2xl border border-border bg-background px-5 py-4 shadow-card">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-tint">
              <b.icon size={20} className="text-primary" />
            </div>
            <span className="text-[16px] font-semibold text-heading">{b.label}</span>
          </div>
        ))}
      </Reveal>
    </div>
  </section>
);

/* ========================= FINAL CTA ========================= */
const FinalCTA = () => (
  <section className="bg-background py-24">
    <Reveal className="mx-auto max-w-[600px] px-6 text-center">
      <h2 className="text-[28px] font-bold text-heading sm:text-[36px]">Bereit, Ihren Kundenservice zu transformieren?</h2>
      <p className="mt-4 text-[17px] text-body">In einem 30-Minuten-Call zeigen wir, wo das größte Potenzial schlummert.</p>
      <Link
        to="/kontakt"
        className="mt-9 inline-flex h-[54px] items-center rounded-full bg-primary px-11 text-[16px] font-semibold text-primary-foreground transition-colors hover:bg-primary-hover"
        style={{ boxShadow: "0 6px 24px rgba(0,168,168,0.22)" }}
      >
        Jetzt Kontakt aufnehmen →
      </Link>
      <p className="mt-5 text-[13px] text-light">+49 (0)40 – 30 09 6170 · jobs@hey-contact-heroes.de</p>
    </Reveal>
  </section>
);

/* ========================= PAGE EXPORT ========================= */
const Index = () => (
  <>
    <Hero />
    <Ticker />
    <Services />
    <Stats />
    <Why />
    <Testimonials />
    <CaseStudy />
    <Blog />
    <Careers />
    <FinalCTA />
  </>
);

export default Index;
