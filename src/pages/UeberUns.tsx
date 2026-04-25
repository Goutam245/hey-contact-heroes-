import { Heart, Globe, Sparkles, Users } from "lucide-react";
import { PageHero, SectionHeader, FeatureGrid, CtaBand } from "@/components/site/PagePrimitives";

const values = [
  { icon: <Heart size={22} />, title: "Menschlichkeit zuerst", text: "Wir glauben, dass echter Service nur entsteht, wenn Menschen mit Empathie und Haltung handeln." },
  { icon: <Globe size={22} />, title: "Remote-first seit 2015", text: "Wir waren remote, bevor es Trend wurde — und wissen genau, wie verteilte Teams Spitzenleistung bringen." },
  { icon: <Sparkles size={22} />, title: "Mut zur Innovation", text: "KI, Automatisierung, neue Kanäle — wir testen, was hilft, und verwerfen, was nicht funktioniert." },
  { icon: <Users size={22} />, title: "Kunden auf Augenhöhe", text: "Keine Standardpakete, keine Vertragsfallen. Partnerschaft auf Zeit und auf Ergebnis." },
];

const UeberUns = () => (
  <>
    <PageHero
      eyebrow="Über uns"
      title={<>Menschen machen <span className="text-primary">Service</span></>}
      subtitle="Seit 2015 bauen wir Remote-Service-Teams, die Marken zu echten Fans machen."
    />
    <section className="bg-background py-20">
      <div className="container-page max-w-3xl">
        <SectionHeader eyebrow="Unsere Geschichte" title="Aus Hamburg in die Welt" />
        <div className="mt-8 space-y-5 text-[16px] leading-[1.75] text-body">
          <p>
            hey contact heroes wurde 2015 in Hamburg gegründet — mit einer einfachen Überzeugung: Kundenservice ist
            kein Cost Center, sondern der wichtigste Wachstumshebel moderner Marken. Heute arbeiten über 200 Heroes
            verteilt in DACH und Europa für ambitionierte D2C-, E-Commerce- und SaaS-Brands.
          </p>
          <p>
            Wir sind kein klassisches Call Center. Wir sind ein Tech-getriebener Service-Partner, der menschliche
            Empathie mit moderner KI verbindet — und damit Ergebnisse erzielt, die klassische Anbieter nicht liefern können.
          </p>
        </div>
      </div>
    </section>
    <FeatureGrid items={values} bg="soft" />
    <CtaBand />
  </>
);
export default UeberUns;
