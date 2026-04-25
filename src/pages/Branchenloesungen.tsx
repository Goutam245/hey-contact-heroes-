import { ShoppingBag, Banknote, HeartPulse, Plane, Zap, Cpu } from "lucide-react";
import { PageHero, FeatureGrid, SectionHeader, CtaBand } from "@/components/site/PagePrimitives";

const industries = [
  { icon: <ShoppingBag size={22} />, title: "E-Commerce & D2C", text: "Bestellannahme, Retouren, WISMO und Loyalty — wir verstehen die Peaks und Margen Ihres Shops." },
  { icon: <Banknote size={22} />, title: "Finance & Insurance", text: "Compliance-konform, sicher, geschult — vom Onboarding bis zum Schadenfall." },
  { icon: <HeartPulse size={22} />, title: "Healthcare & Pharma", text: "Sensible Themen, klare Prozesse, höchste Diskretion — DSGVO- und MPG-konform." },
  { icon: <Plane size={22} />, title: "Travel & Mobility", text: "24/7 Support, mehrsprachig, krisenfest — auch wenn ein Vulkan ausbricht." },
  { icon: <Zap size={22} />, title: "Energy & Utility", text: "Tarifwechsel, Abrechnungen, Reklamationen — wir kennen die regulatorischen Anforderungen." },
  { icon: <Cpu size={22} />, title: "Tech & SaaS", text: "Technischer Support für Power-User, Onboarding-Calls und Customer Success Hand in Hand." },
];

const Branchenloesungen = () => (
  <>
    <PageHero
      eyebrow="Branchen"
      title={<>Lösungen für Ihre <span className="text-primary">Branche</span></>}
      subtitle="Maßgeschneiderte Service-Setups für E-Commerce, Finance, Healthcare, Travel, Energy und Tech."
    />
    <section className="bg-background py-20">
      <div className="container-page">
        <SectionHeader
          eyebrow="Branchen-Expertise"
          title="Sechs Industrien, ein Standard: Excellence"
          subtitle="Wir kennen die Sprache, die Regulierung und die Kunden Ihrer Branche."
        />
      </div>
    </section>
    <FeatureGrid items={industries} bg="soft" />
    <CtaBand />
  </>
);
export default Branchenloesungen;
