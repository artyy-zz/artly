"use client";

import { ArrowUpRight, MessageCircle, MessagesSquare, Phone } from "lucide-react";
import { c, contactDetails } from "@/lib/content";
import { useSite } from "./providers";
import { Reveal } from "./ui";

export function Contact() {
  const { t } = useSite();
  const channels = [
    { name: t(c("Telefon", "Phone")), detail: contactDetails.phoneDisplay, icon: Phone, url: contactDetails.phone },
    { name: "WhatsApp", detail: t(c("Dërgo mesazh", "Send a message")), icon: MessageCircle, url: contactDetails.whatsapp },
    { name: "Viber", detail: t(c("Nis bisedën", "Start a chat")), icon: MessagesSquare, url: contactDetails.viber },
  ];

  return (
    <main className="contact-page container">
      <Reveal className="contact-intro">
        <div className="eyebrow"><span className="status-dot" />ARTLY / {t(c("LE TË FLASIM", "LET’S TALK"))}</div>
        <h1>{t(c("Ke një ide?", "Have an idea?"))}<br /><span>{t(c("Flasim.", "Let’s talk."))}</span></h1>
        <p>{t(c("Na telefono ose na shkruaj direkt. Zgjidh kanalin që të përshtatet dhe nisemi nga aty.", "Call or message us directly. Choose the channel that suits you and we’ll take it from there."))}</p>
      </Reveal>
      <section className="contact-methods" aria-label={t(c("Mënyrat e kontaktit", "Contact methods"))}>
        {channels.map(({ name, detail, icon: Icon, url }, index) => (
          <Reveal key={name} delay={index * 0.06}>
            <a className="contact-method" href={url} target={url.startsWith("http") ? "_blank" : undefined} rel={url.startsWith("http") ? "noreferrer" : undefined}>
              <span className="contact-method-number">0{index + 1}</span>
              <Icon size={28} strokeWidth={1.35} />
              <span><strong>{name}</strong><small>{detail}</small></span>
              <ArrowUpRight size={24} />
            </a>
          </Reveal>
        ))}
      </section>
    </main>
  );
}
