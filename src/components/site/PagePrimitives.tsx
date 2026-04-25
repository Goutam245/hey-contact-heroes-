import { Link } from "react-router-dom";
import { ReactNode } from "react";
import { Check } from "lucide-react";

export const PageHero = ({ eyebrow, title, subtitle }: { eyebrow: string; title: ReactNode; subtitle: string }) => (
  <section className="bg-background py-20 border-b border-border">
    <div className="container-page max-w-3xl text-center">
      <p className="label-eyebrow">{eyebrow}</p>
      <h1 className="mt-3 font-display text-[36px] font-bold text-heading sm:text-[44px] leading-tight">{title}</h1>
      <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-primary" />
      <p className="mt-6 text-[17px] text-body">{subtitle}</p>
    </div>
  </section>
);

export const ComingSoon = ({ note }: { note?: string }) => (
  <section className="bg-soft py-24">
    <div className="container-page max-w-2xl text-center">
      <p className="text-[17px] text-body">
        {note || "Diese Seite wird gerade liebevoll mit Inhalten gefüllt. In der Zwischenzeit beraten wir Sie gerne persönlich."}
      </p>
      <Link to="/kontakt" className="btn-primary mt-8">Kostenlos beraten lassen →</Link>
    </div>
  </section>
);

export const SectionHeader = ({ eyebrow, title, subtitle }: { eyebrow?: string; title: ReactNode; subtitle?: string }) => (
  <div className="mx-auto max-w-2xl text-center">
    {eyebrow && <p className="label-eyebrow">{eyebrow}</p>}
    <h2 className="mt-3 text-[28px] font-bold leading-[1.25] text-heading sm:text-[36px]">{title}</h2>
    {subtitle && <p className="mt-3.5 text-[17px] leading-[1.65] text-body">{subtitle}</p>}
  </div>
);

export const FeatureGrid = ({
  items,
  bg = "white",
}: {
  items: { title: string; text: string; icon?: ReactNode }[];
  bg?: "white" | "soft";
}) => (
  <section className={`${bg === "soft" ? "bg-soft" : "bg-background"} py-20`}>
    <div className="container-page">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((it) => (
          <div
            key={it.title}
            className="rounded-[18px] border border-border bg-background p-7 transition-all hover:-translate-y-1 hover:border-primary hover:shadow-card-hover"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-tint text-primary">
              {it.icon ?? <Check size={22} />}
            </div>
            <h3 className="mt-5 text-[19px] font-bold text-heading">{it.title}</h3>
            <p className="mt-2.5 text-[14px] leading-[1.7] text-body">{it.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const TextSection = ({
  eyebrow,
  title,
  children,
  bg = "white",
}: {
  eyebrow?: string;
  title: ReactNode;
  children: ReactNode;
  bg?: "white" | "soft";
}) => (
  <section className={`${bg === "soft" ? "bg-soft" : "bg-background"} py-20`}>
    <div className="container-page max-w-3xl">
      {eyebrow && <p className="label-eyebrow text-center">{eyebrow}</p>}
      <h2 className="mt-3 text-center text-[28px] font-bold leading-[1.25] text-heading sm:text-[36px]">{title}</h2>
      <div className="mt-8 space-y-5 text-[16px] leading-[1.75] text-body">{children}</div>
    </div>
  </section>
);

export const CtaBand = () => (
  <section className="bg-gradient-brand py-16">
    <div className="container-page flex flex-col items-center text-center">
      <h2 className="font-display text-[28px] font-extrabold text-white sm:text-[36px]">
        Bereit für besseren Kundenservice?
      </h2>
      <p className="mt-3 max-w-xl text-[16px] text-white/85">
        Lassen Sie uns in einem kostenlosen Erstgespräch herausfinden, wie wir Sie unterstützen können.
      </p>
      <Link
        to="/kontakt"
        className="mt-7 inline-flex h-12 items-center whitespace-nowrap rounded-full bg-white px-7 text-[15px] font-semibold text-primary transition-colors hover:bg-primary-tint"
      >
        Kostenlos beraten lassen →
      </Link>
    </div>
  </section>
);
