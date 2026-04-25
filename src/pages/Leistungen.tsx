import { Phone, TrendingUp, FileText, Cpu, Headphones, MessageSquare, BarChart2, Users, Shield } from "lucide-react";
import { PageHero, FeatureGrid, SectionHeader, CtaBand } from "@/components/site/PagePrimitives";

const main = [
  { icon: <Phone size={22} />, title: "Inbound Kundenservice", text: "Telefon, Chat, E-Mail, Social — wir bearbeiten jede Anfrage professionell, schnell und mit echter Begeisterung für Ihre Marke." },
  { icon: <TrendingUp size={22} />, title: "Outbound & Vertrieb", text: "Aktive Kundenansprache, Lead-Qualifizierung, Cross- und Upselling sowie Reaktivierungskampagnen mit messbaren Ergebnissen." },
  { icon: <FileText size={22} />, title: "Back-Office-Services", text: "Datenpflege, Auftragsverarbeitung, Reklamationsmanagement und administrative Prozesse — sauber dokumentiert und auditfähig." },
  { icon: <Cpu size={22} />, title: "KI & Automatisierung", text: "Voicebots, Chatbots und intelligente Workflows — wir kombinieren Technologie mit menschlicher Empathie." },
  { icon: <Headphones size={22} />, title: "Premium Support", text: "Dedizierte Service-Teams für High-Value-Kunden, VIP-Programme und komplexe technische Anfragen." },
  { icon: <MessageSquare size={22} />, title: "Multi-Channel Service", text: "Ein Team, alle Kanäle — wir orchestrieren den Service über Telefon, Chat, Mail, WhatsApp und Social Media hinweg." },
];

const benefits = [
  { icon: <Shield size={22} />, title: "DSGVO-konform", text: "Alle Prozesse erfüllen höchste Datenschutz- und Sicherheitsstandards — geprüft und zertifiziert." },
  { icon: <BarChart2 size={22} />, title: "Echtzeit-Reporting", text: "Live-Dashboards mit allen relevanten KPIs — Sie wissen jederzeit, wie Ihr Service performt." },
  { icon: <Users size={22} />, title: "Skalierbar in Tagen", text: "Von 5 auf 500 Agenten in wenigen Wochen — wir wachsen mit Ihren Anforderungen mit." },
];

const Leistungen = () => (
  <>
    <PageHero
      eyebrow="Leistungen"
      title={<>Unsere <span className="text-primary">Leistungen</span></>}
      subtitle="Sechs Kompetenzfelder, die Ihren Kundenservice end-to-end abdecken — modular, skalierbar, KI-gestützt."
    />
    <section className="bg-background py-20">
      <div className="container-page">
        <SectionHeader
          eyebrow="Service-Portfolio"
          title="End-to-End Customer Service"
          subtitle="Von der ersten Anfrage bis zum Wiederkauf — wir begleiten jeden Touchpoint Ihrer Customer Journey."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {main.map((s) => (
            <div key={s.title} className="rounded-[18px] border border-border bg-background p-7 transition-all hover:-translate-y-1 hover:border-primary hover:shadow-card-hover">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-tint text-primary">{s.icon}</div>
              <h3 className="mt-5 text-[19px] font-bold text-heading">{s.title}</h3>
              <p className="mt-2.5 text-[14px] leading-[1.7] text-body">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    <FeatureGrid items={benefits} bg="soft" />
    <CtaBand />
  </>
);
export default Leistungen;
