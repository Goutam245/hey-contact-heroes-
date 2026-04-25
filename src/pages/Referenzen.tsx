import { PageHero, SectionHeader, CtaBand } from "@/components/site/PagePrimitives";

const cases = [
  { brand: "NorthCommerce AG", metric: "+300%", label: "NPS-Steigerung", text: "In 6 Monaten Bearbeitungszeit halbiert, NPS verdreifacht und Servicekosten um 28% gesenkt." },
  { brand: "DesignPro GmbH", metric: "5 → 80", label: "Agenten skaliert", text: "Skalierung von 5 auf 80 Agenten in 4 Monaten — ohne Qualitätsverlust und mit gleichbleibender CSAT." },
  { brand: "Hanseatic Bank", metric: "−42%", label: "AHT reduziert", text: "Average Handling Time um 42% reduziert durch KI-gestützte Wissensdatenbank und Smart Routing." },
  { brand: "MediGroup", metric: "98%", label: "First Contact Resolution", text: "FCR von 71% auf 98% gesteigert — bei sensiblen Healthcare-Anfragen und striktem DSGVO-Rahmen." },
  { brand: "FlightHub", metric: "24/7", label: "Multilingual Support", text: "7 Sprachen, 24/7 Verfügbarkeit, Krisen-Eskalation in unter 5 Minuten — Reise neu gedacht." },
  { brand: "GreenEnergy", metric: "+180%", label: "Vertragsabschlüsse", text: "Outbound-Kampagne mit 180% mehr Abschlüssen vs. Vorjahr durch optimiertes Skript- und Lead-Scoring." },
];

const Referenzen = () => (
  <>
    <PageHero
      eyebrow="Referenzen"
      title={<>Echte Marken, echte <span className="text-primary">Ergebnisse</span></>}
      subtitle="Auswahl unserer Fallstudien — von Skalierung über Kostenoptimierung bis hin zu KI-Transformation."
    />
    <section className="bg-background py-20">
      <div className="container-page">
        <SectionHeader eyebrow="Case Studies" title="Was wir gemeinsam erreicht haben" />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cases.map((c) => (
            <div key={c.brand} className="rounded-[18px] border border-border bg-background p-7 transition-all hover:-translate-y-1 hover:border-primary hover:shadow-card-hover">
              <p className="text-[12px] font-semibold uppercase tracking-wider text-light">{c.brand}</p>
              <div className="mt-3 font-display text-[44px] font-extrabold leading-none text-primary">{c.metric}</div>
              <p className="mt-2 text-[14px] font-semibold text-heading">{c.label}</p>
              <p className="mt-3 text-[14px] leading-[1.7] text-body">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    <CtaBand />
  </>
);
export default Referenzen;
