import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { PageHero } from "@/components/site/PagePrimitives";
import { toast } from "sonner";

const Kontakt = () => {
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", topic: "", message: "" });
  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.topic || !form.message) {
      toast.error("Bitte alle Pflichtfelder ausfüllen.");
      return;
    }
    toast.success("Vielen Dank! Wir melden uns innerhalb von 24 Stunden.");
    setForm({ name: "", company: "", email: "", phone: "", topic: "", message: "" });
  };

  const inputCls = "h-12 w-full rounded-xl border border-border bg-background px-4 text-[15px] text-heading transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20";

  return (
    <>
      <PageHero
        eyebrow="Kontakt"
        title={<>Let's <span className="text-primary">talk</span></>}
        subtitle="Schreiben Sie uns oder rufen Sie an — wir antworten innerhalb von 24 Stunden."
      />
      <section className="bg-background py-20">
        <div className="container-page grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-[24px] font-bold text-heading">Direkter Draht</h2>
            <ul className="mt-6 space-y-5">
              <li className="flex gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-tint"><MapPin size={20} className="text-primary" /></div>
                <div>
                  <div className="text-[14px] font-bold text-heading">Adresse</div>
                  <div className="text-[15px] text-body">hey contact heroes GmbH<br />Am Kaiserkai 45<br />20457 Hamburg</div>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-tint"><Phone size={20} className="text-primary" /></div>
                <div>
                  <div className="text-[14px] font-bold text-heading">Telefon</div>
                  <a href="tel:+4940300961700" className="text-[15px] text-body hover:text-primary">+49 (0)40 – 30 09 6170</a>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-tint"><Mail size={20} className="text-primary" /></div>
                <div>
                  <div className="text-[14px] font-bold text-heading">E-Mail</div>
                  <a href="mailto:jobs@hey-contact-heroes.de" className="text-[15px] text-body hover:text-primary">jobs@hey-contact-heroes.de</a>
                </div>
              </li>
            </ul>
          </div>

          <form onSubmit={submit} className="rounded-2xl border border-border bg-soft p-8 shadow-card">
            <p className="mb-5 text-[13px] text-light">Felder mit <span className="text-accent">*</span> sind Pflichtfelder</p>
            <div className="space-y-4">
              <div>
                <label className="mb-2 block text-[14px] font-bold text-heading">Dein Name<span className="text-accent">*</span></label>
                <input className={inputCls} value={form.name} onChange={set("name")} />
              </div>
              <div>
                <label className="mb-2 block text-[14px] font-bold text-heading">Deine Firma</label>
                <input className={inputCls} value={form.company} onChange={set("company")} />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-[14px] font-bold text-heading">E-Mail<span className="text-accent">*</span></label>
                  <input type="email" className={inputCls} value={form.email} onChange={set("email")} />
                </div>
                <div>
                  <label className="mb-2 block text-[14px] font-bold text-heading">Telefon<span className="text-accent">*</span></label>
                  <input className={inputCls} value={form.phone} onChange={set("phone")} />
                </div>
              </div>
              <div>
                <label className="mb-2 block text-[14px] font-bold text-heading">Worum geht es?<span className="text-accent">*</span></label>
                <input className={inputCls} value={form.topic} onChange={set("topic")} />
              </div>
              <div>
                <label className="mb-2 block text-[14px] font-bold text-heading">Deine Nachricht<span className="text-accent">*</span></label>
                <textarea rows={5} className={inputCls + " h-auto py-3"} value={form.message} onChange={set("message")} />
              </div>
              <button type="submit" className="btn-primary mt-2 w-full sm:w-auto">Absenden →</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Kontakt;
