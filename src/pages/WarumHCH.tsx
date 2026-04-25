import { Globe, Cpu, BarChart2, Zap, Shield, Award } from "lucide-react";
import { PageHero, FeatureGrid, CtaBand, SectionHeader } from "@/components/site/PagePrimitives";

const reasons = [
  { icon: <Globe size={22} />, title: "100% Remote & flexibel", text: "Unser Team arbeitet ortsunabhängig — maximale Flexibilität und Zugriff auf die besten Talente in DACH." },
  { icon: <Cpu size={22} />, title: "KI-gestützte Prozesse", text: "Wir setzen modernste Sprach- und Textmodelle ein — schneller, präziser, günstiger als klassische Anbieter." },
  { icon: <BarChart2 size={22} />, title: "Transparenz & Performance", text: "Echtzeit-Dashboards, klare KPIs, monatliche Business-Reviews — Sie sehen jeden Cent und jeden Call." },
  { icon: <Zap size={22} />, title: "Skalierung in Tagen", text: "Saisonale Peaks, neue Märkte, neue Produkte — wir skalieren in Tagen statt Monaten." },
  { icon: <Shield size={22} />, title: "DSGVO & ISO geprüft", text: "Höchste Standards für Datenschutz, IT-Sicherheit und Audit-Konformität." },
  { icon: <Award size={22} />, title: "10+ Jahre Erfahrung", text: "Über 500 Projekte mit 4,9/5 Kundenbewertung — wir wissen, was funktioniert." },
];

const WarumHCH = () => (
  <>
    <PageHero
      eyebrow="Warum HCH"
      title={<>Warum <span className="text-primary">hey contact heroes</span></>}
      subtitle="Remote-First, KI-gestützt, transparent — und mit messbaren Ergebnissen."
    />
    <section className="bg-background py-20">
      <div className="container-page">
        <SectionHeader
          eyebrow="Sechs Argumente"
          title="Was uns wirklich anders macht"
          subtitle="Wir sind kein Call Center. Wir sind Ihr Service-Partner für nachhaltiges Wachstum."
        />
      </div>
    </section>
    <FeatureGrid items={reasons} bg="soft" />
    <CtaBand />
  </>
);
export default WarumHCH;
