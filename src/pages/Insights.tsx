import { PageHero, SectionHeader, CtaBand } from "@/components/site/PagePrimitives";

const articles = [
  { cat: "Strategie", title: "Customer Service als Wachstumstreiber", excerpt: "Warum Service-Investitionen heute den höchsten ROI im B2C bringen — und wie Sie das messen.", img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=900" },
  { cat: "KI", title: "KI-Voicebots: Hype oder Hebel?", excerpt: "Was 2025 wirklich funktioniert — und wo Menschen weiterhin unschlagbar bleiben.", img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=900" },
  { cat: "Remote", title: "Remote Service Teams skalieren", excerpt: "Operative Best Practices aus 10 Jahren Remote-First-Betrieb in DACH.", img: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=900" },
  { cat: "Trends", title: "Die 5 wichtigsten CX-Trends 2025", excerpt: "Von Predictive Service bis hin zu emotionaler KI — was Marken jetzt wissen müssen.", img: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=900" },
  { cat: "Whitepaper", title: "Service-KPIs richtig messen", excerpt: "AHT, FCR, NPS, CES — was zählt wirklich? Ein Leitfaden für Service-Verantwortliche.", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900" },
  { cat: "Case Study", title: "+300% NPS bei NorthCommerce", excerpt: "Wie wir in 6 Monaten Bearbeitungszeit halbiert und Zufriedenheit verdreifacht haben.", img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=900" },
];

const Insights = () => (
  <>
    <PageHero
      eyebrow="Insights"
      title={<>Insights & <span className="text-primary">Trends</span></>}
      subtitle="Artikel, Whitepaper und Events rund um modernen Kundenservice und KI."
    />
    <section className="bg-background py-20">
      <div className="container-page">
        <SectionHeader eyebrow="Magazin" title="Aktuelle Beiträge" subtitle="Praxiswissen, Studien und Meinungen aus 10 Jahren Service-Excellence." />
        <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((a) => (
            <article key={a.title} className="group h-full overflow-hidden rounded-2xl border border-border bg-background transition-all hover:-translate-y-1 hover:shadow-card-hover">
              <div className="aspect-[16/10] overflow-hidden bg-soft">
                <img src={a.img} alt={a.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <span className="inline-block rounded-full bg-primary-tint px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary">{a.cat}</span>
                <h3 className="mt-3 text-[18px] font-bold leading-snug text-heading">{a.title}</h3>
                <p className="mt-2 text-[14px] leading-[1.7] text-body">{a.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
    <CtaBand />
  </>
);
export default Insights;
