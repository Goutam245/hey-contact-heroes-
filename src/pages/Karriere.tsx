import { Home, Heart, TrendingUp, Coins } from "lucide-react";
import { PageHero, FeatureGrid, SectionHeader, CtaBand } from "@/components/site/PagePrimitives";

const perks = [
  { icon: <Home size={22} />, title: "100% Remote", text: "Arbeite von überall — Hauptsache stabile Verbindung und Lust auf Top-Service." },
  { icon: <Coins size={22} />, title: "Erfolgsbeteiligung", text: "Wir teilen unseren Erfolg. Bonusmodelle, die wirklich etwas bewegen." },
  { icon: <TrendingUp size={22} />, title: "Echte Entwicklung", text: "Coaching, Trainings, klare Karrierepfade — vom Agent zum Team Lead in 18 Monaten." },
  { icon: <Heart size={22} />, title: "Diversität gelebt", text: "Über 25 Nationen, alle Altersgruppen, jede Lebensrealität willkommen." },
];

const Karriere = () => (
  <>
    <PageHero
      eyebrow="Karriere"
      title={<>Werde ein <span className="text-accent">Contact Hero</span></>}
      subtitle="Remote, divers, mit Erfolgsbeteiligung. Wir suchen Menschen, die Service als Berufung verstehen."
    />
    <section className="bg-background py-20">
      <div className="container-page">
        <SectionHeader
          eyebrow="Warum HCH"
          title="Was dich bei uns erwartet"
          subtitle="Mehr als ein Job — eine Community, die Service neu denkt."
        />
      </div>
    </section>
    <FeatureGrid items={perks} bg="soft" />
    <section className="bg-background py-20">
      <div className="container-page max-w-2xl text-center">
        <h2 className="text-[28px] font-bold text-heading sm:text-[36px]">Aktuelle Stellen</h2>
        <p className="mt-3 text-[17px] text-body">
          Wir suchen aktuell Customer Service Heroes (m/w/d) für Inbound, Outbound und KI-Operations — alle Positionen 100% remote in DACH.
        </p>
      </div>
    </section>
    <CtaBand />
  </>
);
export default Karriere;
