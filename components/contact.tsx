"use client";

import { useState } from "react";
import { ArrowUpRight, Camera, Check, Copy, Mail, MessageCircle } from "lucide-react";
import { c, contactDetails, services } from "@/lib/content";
import { useSite } from "./providers";
import { Reveal } from "./ui";

type Details = {
  name: string;
  email: string;
  business: string;
  service: string;
  message: string;
};

const emptyDetails: Details = {
  name: "",
  email: "",
  business: "",
  service: "websites",
  message: "",
};

export function Contact() {
  const { t } = useSite();
  const [details, setDetails] = useState(emptyDetails);
  const [copied, setCopied] = useState(false);
  const selectedService = services.find((service) => service.slug === details.service);
  const subject = `Artly — ${selectedService ? t(selectedService.title) : t(c("Bisedë e re", "New conversation"))}`;
  const message = [
    `${t(c("Emri", "Name"))}: ${details.name}`,
    `Email: ${details.email}`,
    details.business ? `${t(c("Biznesi", "Business"))}: ${details.business}` : "",
    `${t(c("Shërbimi", "Service"))}: ${selectedService ? t(selectedService.title) : details.service}`,
    "",
    details.message,
  ].filter(Boolean).join("\n");

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (contactDetails.email) {
      window.location.href = `mailto:${contactDetails.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
      return;
    }
    await navigator.clipboard.writeText(message);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 3000);
  };

  const channels = [
    { name: "Instagram", icon: Camera, url: contactDetails.instagram },
    { name: "WhatsApp", icon: MessageCircle, url: contactDetails.whatsapp },
    { name: "Email", icon: Mail, url: contactDetails.email ? `mailto:${contactDetails.email}` : null },
  ];

  return (
    <main className="contact-page container">
      <Reveal className="contact-intro">
        <div className="eyebrow"><span className="status-dot" />ARTLY / {t(c("LE TË FLASIM", "LET’S TALK"))}</div>
        <h1>{t(c("Çdo gjë nis", "Everything starts"))}<br /><span>{t(c("me një ide.", "with an idea."))}</span></h1>
        <p>{t(c("Na trego çfarë ke në mendje. Ne të përgjigjemi me drejtim të qartë dhe hapa konkretë.", "Tell us what you have in mind. We’ll reply with a clear direction and practical next steps."))}</p>
      </Reveal>

      <section className="contact-simple-grid" aria-labelledby="contact-form-title">
        <Reveal className="contact-form-panel">
          <span className="contact-panel-kicker">01 / {t(c("MESAZHI YT", "YOUR MESSAGE"))}</span>
          <h2 id="contact-form-title">{t(c("Fol me ne.", "Talk to us."))}</h2>
          <form onSubmit={submit}>
            <div className="contact-field-pair">
              <label><span>{t(c("Emri i plotë", "Full name"))} *</span><input required autoComplete="name" value={details.name} onChange={(event) => setDetails({ ...details, name: event.target.value })} /></label>
              <label><span>Email *</span><input required type="email" autoComplete="email" value={details.email} onChange={(event) => setDetails({ ...details, email: event.target.value })} /></label>
            </div>
            <div className="contact-field-pair">
              <label><span>{t(c("Biznesi", "Business"))} ({t(c("opsionale", "optional"))})</span><input autoComplete="organization" value={details.business} onChange={(event) => setDetails({ ...details, business: event.target.value })} /></label>
              <label><span>{t(c("Çfarë të intereson?", "What are you interested in?"))}</span><select value={details.service} onChange={(event) => setDetails({ ...details, service: event.target.value })}>{services.map((service) => <option key={service.slug} value={service.slug}>{t(service.title)}</option>)}<option value="other">{t(c("Tjetër", "Other"))}</option></select></label>
            </div>
            <label><span>{t(c("Na trego për idenë", "Tell us about the idea"))} *</span><textarea required rows={6} maxLength={4000} placeholder={t(c("Çfarë dëshiron të krijojmë bashkë?", "What would you like us to create together?"))} value={details.message} onChange={(event) => setDetails({ ...details, message: event.target.value })} /></label>
            <button className="button primary contact-submit" type="submit">
              {contactDetails.email ? t(c("Dërgo mesazhin", "Send message")) : copied ? t(c("Mesazhi u kopjua", "Message copied")) : t(c("Kopjo mesazhin", "Copy message"))}
              {copied ? <Check size={18} /> : contactDetails.email ? <ArrowUpRight size={18} /> : <Copy size={18} />}
            </button>
            {!contactDetails.email && <p className="contact-form-note">{t(c("Kontakti zyrtar po përditësohet. Për momentin, butoni kopjon mesazhin tënd gati për ta dërguar.", "The official contact is being updated. For now, the button copies your message ready to send."))}</p>}
          </form>
        </Reveal>

        <Reveal className="contact-side-panel" delay={0.08}>
          <span className="contact-panel-kicker">02 / {t(c("KONTAKTI", "CONTACT"))}</span>
          <h2>{t(c("Zgjidh mënyrën tënde.", "Choose your channel."))}</h2>
          <p>{t(c("Për një website, identitet, fushatë ose material të ri, nis me një mesazh të shkurtër.", "For a website, identity, campaign, or new design piece, start with a short message."))}</p>
          <div className="contact-channel-list">
            {channels.map(({ name, icon: Icon, url }) => url ? <a key={name} href={url} target="_blank" rel="noreferrer"><Icon size={19} /><span>{name}</span><ArrowUpRight size={17} /></a> : <div key={name} aria-disabled="true"><Icon size={19} /><span>{name}</span><small>{t(c("Së shpejti", "Coming soon"))}</small></div>)}
          </div>
          <div className="contact-response-note"><span className="status-dot" /><p>{t(c("Çdo bashkëpunim nis me një bisedë të qartë.", "Every collaboration starts with a clear conversation."))}</p></div>
        </Reveal>
      </section>
    </main>
  );
}
