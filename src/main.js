const CONTACT = {
  email: "artiibela0@gmail.com",
  phoneDisplay: "+383 49 452 409",
  phoneHref: "+38349452409",
};

const icon = (name) => {
  const icons = {
    spark: '<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z"/><path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15z"/>',
    phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6.1 6.1l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/>',
    layout: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18"/><path d="M9 20V9"/>',
    cart: '<circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.5 3h3l2.2 12.2a2 2 0 0 0 2 1.6h7.9a2 2 0 0 0 2-1.6L21 7H6.2"/>',
    gauge: '<path d="M21 13a9 9 0 1 0-18 0"/><path d="M12 13l4-4"/><path d="M8 17h8"/>',
    mobile: '<rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/>',
    brush: '<path d="M9 11l-5 5a3 3 0 0 0 4 4l5-5"/><path d="M14 4l6 6"/><path d="M13 5l6 6-7 7-6-6z"/>',
    server: '<rect x="3" y="4" width="18" height="6" rx="2"/><rect x="3" y="14" width="18" height="6" rx="2"/><path d="M7 7h.01M7 17h.01"/>',
    check: '<path d="M20 6L9 17l-5-5"/>',
    rocket: '<path d="M4.5 16.5c-1 1-1.5 3-1.5 4.5 1.5 0 3.5-.5 4.5-1.5"/><path d="M9 15l-4-4 5-5c4-4 8-4 11-3-1 3-1 7-5 11l-5 5-4-4z"/><path d="M15 9h.01"/>',
  };

  return `<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${icons[name] || icons.spark}</svg>`;
};

const translations = {
  sq: {
    meta: {
      title: "Artly | Webfaqe Moderne për Rritje Biznesi",
      description: "Një webfaqe moderne e bën biznesin tuaj më të lehtë për t'u gjetur dhe më profesional online.",
    },
    accessibility: { skip: "Kalo te përmbajtja" },
    nav: {
      home: "Home",
      services: "Procesi",
      projects: "Ide",
      contact: "Kontakti",
    },
    cta: {
      quote: "Merr Ofertë",
      projects: "Shiko Idetë",
      mobileContact: "Kontakti",
    },
    hero: {
      eyebrow: "Artly Digital Studio",
      title: "Klientët të besojnë më shumë kur biznesi yt duket profesional online.",
      mobileTitle: "Webfaqe moderne për biznesin tuaj.",
      text: "Një webfaqe moderne e bën biznesin më të lehtë për t’u gjetur, më të lehtë për t’u kontaktuar dhe më serioz në sytë e klientëve.",
      mobileText: "Dukuni profesional online dhe bëjeni kontaktin më të lehtë për klientët.",
      badges: ["Më shumë besim", "Kontakt i lehtë", "Pa stres teknik"],
      float: { stepOne: "Na tregoni idenë", stepTwo: "Ne e krijojmë", stepThree: "Webfaqja lansohet" },
      metricSteps: "hapa të thjeshtë",
      metricLaunch: "lansim i shpejtë",
    },
    services: {
      eyebrow: "",
      title: "Vetëm 3 Hapa",
      subtitle: "Shkruani sot. Ne e bëjmë pjesën tjetër të lehtë.",
      messageIn: "Kam nevojë për një webfaqe për biznesin tim.",
      messageOut: "Shumë mirë. Na tregoni pak për biznesin.",
      growthBadge: "+ Klientët ju gjejnë më lehtë",
      previewText: "Webfaqe moderne me imazhe reale dhe kontakt të qartë.",
      dashboardText: "Porosi, klientë dhe raporte në një panel të pastër.",
      flow: [
        {
          step: "Step 1",
          icon: "spark",
          title: "Na tregoni idenë",
          text: "Na tregoni çfarë ju duhet.",
          chips: ["Viber", "Email", "Telefon", "Formë e shkurtër"],
          visual: "choice",
        },
        {
          step: "Step 2",
          icon: "brush",
          title: "Ne e krijojmë",
          text: "Dizajnojmë dhe ndërtojmë webfaqen.",
          chips: ["Dizajn", "Tekst", "Mobile", "Shpejtësi"],
          visual: "design",
        },
        {
          step: "Step 3",
          icon: "rocket",
          title: "Webfaqja lansohet",
          text: "Biznesi juaj del online.",
          chips: ["Live", "Më shumë besim", "Kontakt", "Rritje"],
          visual: "launch",
        },
      ],
      cards: [
        { icon: "layout", title: "Webfaqe Prezantuese", text: "Për prezencë profesionale online." },
        { icon: "spark", title: "Webfaqe për Kompani", text: "Faqe të qarta për shërbimet tuaja." },
        { icon: "cart", title: "E-commerce", text: "Dyqan online për produkte dhe porosi." },
        { icon: "gauge", title: "Dashboard", text: "Sisteme për menaxhim të biznesit." },
        { icon: "brush", title: "Ridizajnim", text: "Faqja e vjetër bëhet moderne." },
        { icon: "server", title: "Hosting & Mirëmbajtje", text: "Domain, hosting dhe përditësime." },
      ],
    },
    projects: {
      eyebrow: "Ide",
      title: "Ide për biznesin tuaj",
      subtitle: "Pamje të ndryshme që mund t’i krijojmë. Zgjidhni stilin që i përshtatet biznesit tuaj.",
      showMore: "Shiko më shumë",
      showLess: "Shiko më pak",
      view: "Shiko",
      modalCta: "Dua një ide si kjo",
      cards: [
        { title: "Interior Vision", category: "Furniture Concept", text: "Koncept premium për mobilieri dhe interier.", tags: ["Concept", "Mobile Ready"], image: "assets/projects/art-home.png" },
        { title: "Tech Product World", category: "Product Concept", text: "Faqe e pastër për produkte teknologjike.", tags: ["Concept", "Fast"], image: "assets/projects/artnet.png" },
        { title: "School Future", category: "Education Vision", text: "Webfaqe e qartë për shkolla dhe njoftime.", tags: ["Concept", "Mobile Ready"], image: "assets/projects/school.png" },
        { title: "Business Control Room", category: "Dashboard Concept", text: "Panel modern për porosi dhe klientë.", tags: ["Dashboard", "Custom"], image: "assets/projects/business-dashboard.png" },
        { title: "Digital Storefront", category: "E-commerce Vision", text: "Dyqan online ku produktet duken premium.", tags: ["E-commerce", "Mobile"], image: "assets/projects/artnet-store.png" },
        { title: "Cinematic Restaurant", category: "Restaurant Concept", text: "Koncept restorani me menu dhe rezervime.", tags: ["Concept", "Contact"], image: "assets/projects/restaurant.png" },
      ],
    },
    process: {
      eyebrow: "Procesi",
      title: "Si funksionon?",
      subtitle: "Katër hapa të qartë. Pa stres teknik.",
      steps: [
        { title: "Na kontaktoni", text: "Na shkruani shkurt." },
        { title: "Na tregoni idenë", text: "Çfarë biznesi keni?" },
        { title: "Ne e krijojmë", text: "Dizajn, tekst dhe zhvillim." },
        { title: "Lansohet online", text: "Faqja juaj del live." },
      ],
    },
    contact: {
      eyebrow: "Kontakt",
      title: "Gati ta bëjmë biznesin tuaj më të lehtë për t'u gjetur?",
      optionsTitle: "Kontakt direkt",
      optionsText: "Na shkruani shkurt. Ju tregojmë hapat pa fjalë të komplikuara.",
      viber: "Shkruaj në Viber",
      email: "Dërgo Email",
      phone: "Telefono",
    },
    form: {
      name: "Emri",
      business: "Biznesi",
      contact: "Email / Numri",
      need: "Çfarë ju duhet?",
      message: "Mesazhi",
      submit: "Dërgo Kërkesën",
      loading: "Duke dërguar...",
      success: "Kërkesa u dërgua. Do t'ju kontaktojmë së shpejti.",
      error: "Diçka nuk shkoi. Ju lutemi provoni përsëri ose dërgoni email direkt.",
    },
    footer: {
      text: "Webfaqe moderne që e bëjnë biznesin tuaj më të besueshëm online.",
      navigation: "Navigimi",
      languages: "Gjuhët",
      social: "Social",
      rights: "Të gjitha të drejtat e rezervuara.",
    },
  },
  en: {
    meta: { title: "Artly | Modern Websites for Business Growth", description: "A modern website helps your business look professional and easier to find online." },
    accessibility: { skip: "Skip to content" },
    nav: { home: "Home", services: "Process", projects: "Ideas", contact: "Contact" },
    cta: { quote: "Get a Quote", projects: "View Ideas", mobileContact: "Contact" },
    hero: {
      eyebrow: "Artly Digital Studio",
      title: "Modern websites for your business.",
      mobileTitle: "Modern websites for business.",
      text: "Look professional online, help customers find you faster, and make contact simple.",
      mobileText: "Look professional online and make contact simple for customers.",
      badges: ["More trust", "Easy contact", "No tech stress"],
      float: { stepOne: "Share the idea", stepTwo: "We create it", stepThree: "Website starts" },
      metricSteps: "simple steps",
      metricLaunch: "fast launch",
    },
    services: {
      eyebrow: "",
      title: "Only 3 steps to go online.",
      subtitle: "Message us today. We make the rest easy.",
      messageIn: "I need a website for my business.",
      messageOut: "Great. Tell us a little about your business.",
      growthBadge: "+ Customers find you",
      previewText: "A modern website with real images and clear contact.",
      dashboardText: "Orders, clients and reports in one clean panel.",
      flow: [
        { step: "Step 1", icon: "spark", title: "Share the idea", text: "Tell us what you need.", chips: ["Viber", "Email", "Call", "Short form"], visual: "choice" },
        { step: "Step 2", icon: "brush", title: "We create it", text: "We design and build the website.", chips: ["Design", "Copy", "Mobile", "Speed"], visual: "design" },
        { step: "Step 3", icon: "rocket", title: "The website starts", text: "Your business goes online.", chips: ["Live", "More trust", "Contact", "Growth"], visual: "launch" },
      ],
      cards: [
        { icon: "layout", title: "Presentation Websites", text: "A professional online presence." },
        { icon: "spark", title: "Company Websites", text: "Clear pages for your services." },
        { icon: "cart", title: "E-commerce", text: "Online shops for products and orders." },
        { icon: "gauge", title: "Dashboards", text: "Simple systems for business management." },
        { icon: "brush", title: "Redesign", text: "Turn an old site into a modern one." },
        { icon: "server", title: "Hosting & Care", text: "Domain, hosting, and updates." },
      ],
    },
    projects: {
      eyebrow: "Ideas",
      title: "Ideas for your business",
      subtitle: "Different website styles we can create. Choose the look that fits your business.",
      showMore: "Show More",
      showLess: "Show Less",
      view: "View",
      modalCta: "I want an idea like this",
      cards: [
        { title: "Interior Vision", category: "Furniture Concept", text: "A premium concept for furniture and interiors.", tags: ["Concept", "Mobile Ready"], image: "assets/projects/art-home.png" },
        { title: "Tech Product World", category: "Product Concept", text: "A clean website for technology products.", tags: ["Concept", "Fast"], image: "assets/projects/artnet.png" },
        { title: "School Future", category: "Education Vision", text: "A clear website for schools and updates.", tags: ["Concept", "Mobile Ready"], image: "assets/projects/school.png" },
        { title: "Business Control Room", category: "Dashboard Concept", text: "A modern panel for orders and clients.", tags: ["Dashboard", "Custom"], image: "assets/projects/business-dashboard.png" },
        { title: "Digital Storefront", category: "E-commerce Vision", text: "An online store where products feel premium.", tags: ["E-commerce", "Mobile"], image: "assets/projects/artnet-store.png" },
        { title: "Cinematic Restaurant", category: "Restaurant Concept", text: "A restaurant concept with menu and bookings.", tags: ["Concept", "Contact"], image: "assets/projects/restaurant.png" },
      ],
    },
    process: {
      eyebrow: "Process",
      title: "How does it work?",
      subtitle: "Four clear steps. No technical stress.",
      steps: [
        { title: "Contact us", text: "Send a short message." },
        { title: "Share the idea", text: "Tell us about your business." },
        { title: "We create it", text: "Design, copy, and build." },
        { title: "Launch online", text: "Your website goes live." },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Ready to make your business easier to find?",
      optionsTitle: "Direct contact",
      optionsText: "Send a short message. We explain the next steps clearly.",
      viber: "Message on Viber",
      email: "Send Email",
      phone: "Call",
    },
    form: {
      name: "Name",
      business: "Business",
      contact: "Email / Number",
      need: "What do you need?",
      message: "Message",
      submit: "Send Request",
      loading: "Sending...",
      success: "Request sent. We will contact you soon.",
      error: "Something went wrong. Please try again or email us directly.",
    },
    footer: { text: "Modern websites that make your business more trustworthy online.", navigation: "Navigation", languages: "Languages", social: "Social", rights: "All rights reserved." },
  },
  de: {
    meta: { title: "Artly | Moderne Websites für Unternehmenswachstum", description: "Eine moderne Website macht Ihr Unternehmen professioneller und online leichter auffindbar." },
    accessibility: { skip: "Zum Inhalt springen" },
    nav: { home: "Home", services: "Prozess", projects: "Ideen", contact: "Kontakt" },
    cta: { quote: "Angebot erhalten", projects: "Ideen ansehen", mobileContact: "Kontakt" },
    hero: {
      eyebrow: "Artly Digital Studio",
      title: "Moderne Websites für Ihr Unternehmen.",
      mobileTitle: "Moderne Websites für Ihr Business.",
      text: "Professionell online wirken, leichter gefunden werden und Kontakt einfacher machen.",
      mobileText: "Professionell online wirken und Kontakt für Kunden einfach machen.",
      badges: ["Mehr Vertrauen", "Einfacher Kontakt", "Kein Technikstress"],
      float: { stepOne: "Idee erzählen", stepTwo: "Wir erstellen es", stepThree: "Website startet" },
      metricSteps: "einfache Schritte",
      metricLaunch: "schneller Start",
    },
    services: {
      eyebrow: "",
      title: "In nur 3 Schritten online.",
      subtitle: "Schreiben Sie uns heute. Wir machen den Rest einfach.",
      messageIn: "Ich brauche eine Website für mein Unternehmen.",
      messageOut: "Sehr gut. Erzählen Sie uns kurz vom Unternehmen.",
      growthBadge: "+ Kunden finden Sie leichter",
      previewText: "Eine moderne Website mit echten Bildern und klarem Kontakt.",
      dashboardText: "Bestellungen, Kunden und Berichte in einem klaren Panel.",
      flow: [
        { step: "Step 1", icon: "spark", title: "Idee erzählen", text: "Sagen Sie uns, was Sie brauchen.", chips: ["Viber", "E-Mail", "Telefon", "Kurzes Formular"], visual: "choice" },
        { step: "Step 2", icon: "brush", title: "Wir erstellen es", text: "Wir designen und bauen die Website.", chips: ["Design", "Text", "Mobile", "Schnell"], visual: "design" },
        { step: "Step 3", icon: "rocket", title: "Website geht online", text: "Ihr Unternehmen geht online.", chips: ["Live", "Mehr Vertrauen", "Kontakt", "Wachstum"], visual: "launch" },
      ],
      cards: [
        { icon: "layout", title: "Präsentationsseiten", text: "Professionell online sichtbar sein." },
        { icon: "spark", title: "Unternehmensseiten", text: "Klare Seiten für Ihre Leistungen." },
        { icon: "cart", title: "E-commerce", text: "Online-Shops für Produkte und Bestellungen." },
        { icon: "gauge", title: "Dashboards", text: "Einfache Systeme für Ihr Unternehmen." },
        { icon: "brush", title: "Redesign", text: "Alte Website wird modern." },
        { icon: "server", title: "Hosting & Pflege", text: "Domain, Hosting und Updates." },
      ],
    },
    projects: {
      eyebrow: "Ideen",
      title: "Ideen für Ihr Unternehmen",
      subtitle: "Verschiedene Website-Stile, die wir erstellen können. Wählen Sie den Look, der zu Ihrem Unternehmen passt.",
      showMore: "Mehr anzeigen",
      showLess: "Weniger anzeigen",
      view: "Ansehen",
      modalCta: "Ich möchte eine Idee wie diese",
      cards: [
        { title: "Interior Vision", category: "Möbelkonzept", text: "Ein Premium-Konzept für Möbel und moderne Innenräume.", tags: ["Konzept", "Mobil"], image: "assets/projects/art-home.png" },
        { title: "Tech Product World", category: "Produktkonzept", text: "Eine moderne Erfahrung für Technologieprodukte.", tags: ["Website", "Mobile Ready", "Schnell"], image: "assets/projects/artnet.png" },
        { title: "School Future", category: "Bildungsvision", text: "Eine klare Vision für Schulen, Updates und Gemeinschaft.", tags: ["Info", "Mobile Ready", "Klar"], image: "assets/projects/school.png" },
        { title: "Business Control Room", category: "Dashboard-Konzept", text: "Ein futuristisches Panel für Bestellungen, Kunden und Verwaltung.", tags: ["Dashboard", "Custom System", "Reports"], image: "assets/projects/business-dashboard.png" },
        { title: "Digital Storefront", category: "E-commerce Vision", text: "Ein eleganter Online-Shop, in dem Produkte hochwertig wirken.", tags: ["E-commerce", "Produkte", "Mobile"], image: "assets/projects/artnet-store.png" },
        { title: "Cinematic Restaurant", category: "Restaurantkonzept", text: "Ein Restaurantkonzept mit Menü und Reservierung.", tags: ["Konzept", "Kontakt"], image: "assets/projects/restaurant.png" },
      ],
    },
    process: {
      eyebrow: "Prozess",
      title: "Wie funktioniert es?",
      subtitle: "Vier klare Schritte. Kein Technikstress.",
      steps: [
        { title: "Kontakt aufnehmen", text: "Kurze Nachricht senden." },
        { title: "Idee erzählen", text: "Was macht Ihr Unternehmen?" },
        { title: "Wir erstellen es", text: "Design, Text und Entwicklung." },
        { title: "Online starten", text: "Ihre Website geht live." },
      ],
    },
    contact: {
      eyebrow: "Kontakt",
      title: "Bereit, online leichter gefunden zu werden?",
      optionsTitle: "Direkter Kontakt",
      optionsText: "Senden Sie eine kurze Nachricht. Wir erklären die nächsten Schritte klar.",
      viber: "Auf Viber schreiben",
      email: "E-Mail senden",
      phone: "Anrufen",
    },
    form: {
      name: "Name",
      business: "Unternehmen",
      contact: "E-Mail / Nummer",
      need: "Was benötigen Sie?",
      message: "Nachricht",
      submit: "Anfrage senden",
      loading: "Wird gesendet...",
      success: "Anfrage gesendet. Wir melden uns bald.",
      error: "Etwas ist schiefgelaufen. Bitte erneut versuchen oder direkt per E-Mail schreiben.",
    },
    footer: { text: "Moderne Websites, die Ihr Unternehmen online vertrauenswürdiger machen.", navigation: "Navigation", languages: "Sprachen", social: "Social", rights: "Alle Rechte vorbehalten." },
  },
};

const languageNames = { sq: "Albanian", en: "English", de: "German" };
const state = { lang: localStorage.getItem("artly-language") || "sq", activeProject: 0 };
if (!translations[state.lang]) state.lang = "sq";
const mobileViewport = window.matchMedia("(max-width: 700px)");
let projectsExpanded = false;

const getValue = (path) =>
  path.split(".").reduce((value, key) => (value && Object.hasOwn(value, key) ? value[key] : undefined), translations[state.lang]);

const getResponsiveValue = (path) => {
  if (mobileViewport.matches && path === "hero.title") return translations[state.lang].hero.mobileTitle;
  if (mobileViewport.matches && path === "hero.text") return translations[state.lang].hero.mobileText;
  return getValue(path);
};

const mobileSizedImage = (url, width = 480) =>
  mobileViewport.matches ? url.replace(/w=\d+/g, `w=${width}`).replace(/q=\d+/g, "q=62") : url;

const createElement = (tag, className, text) => {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text) element.textContent = text;
  return element;
};

const mockWindow = (variant = "site", title = "Artly") => `
  <div class="mock-preview ${variant}">
    <div class="mock-preview-top"><span></span><span></span><span></span></div>
    <div class="mock-preview-body">
      <nav class="preview-nav"><b>${title}</b><span>Work</span><span>Contact</span></nav>
      <div class="preview-photo"></div>
      <strong>${title}</strong>
      <p>${variant.includes("dashboard") ? translations[state.lang].services.dashboardText : translations[state.lang].services.previewText}</p>
      <div class="preview-gallery">
        <em></em><em></em><em></em>
      </div>
    </div>
  </div>
`;

const renderFlowVisual = (visual, title) => {
  if (visual === "choice") {
    return `
      <div class="flow-message-visual">
        <div class="message-card message-in">
          <span></span>
          <p>${translations[state.lang].services.messageIn}</p>
        </div>
        <div class="message-card message-out">
          <span></span>
          <p>${translations[state.lang].services.messageOut}</p>
        </div>
        <div class="contact-dots"><i></i><i></i><i></i></div>
      </div>
    `;
  }
  if (visual === "launch") {
    return `<div class="flow-launch-visual">${mockWindow("site interior", title)}<span class="launch-badge">LIVE</span><span class="growth-badge">${translations[state.lang].services.growthBadge}</span></div>`;
  }
  return `<div class="flow-stack-visual">${mockWindow("site interior", title)}${mockWindow("dashboard mini", "Dashboard")}<div class="mini-phone-preview"><span></span><strong>Mobile</strong><i></i><i></i></div></div>`;
};

const renderTrustBadges = () => {
  const target = document.querySelector("[data-render='trustBadges']");
  if (!target) return;
  target.innerHTML = translations[state.lang].hero.badges.map((badge) => `<span class="trust-badge">${badge}</span>`).join("");
};

const renderSimpleCards = (selector, cards, cardClass) => {
  const target = document.querySelector(selector);
  if (!target) return;
  target.innerHTML = cards
    .map(
      (card, index) => `
        <article class="${cardClass} reveal">
          <div class="card-topline">
            <span class="card-icon">${icon(card.icon)}</span>
            <span class="card-index">${String(index + 1).padStart(2, "0")}</span>
          </div>
          <h3>${card.title}</h3>
          <p>${card.text}</p>
          ${cardClass === "service-card" ? mockWindow(index % 2 ? "dashboard" : "site") : ""}
        </article>
      `,
    )
    .join("");
};

const renderServiceFlow = () => {
  const target = document.querySelector("[data-render='serviceFlow']");
  if (!target) return;
  target.innerHTML = translations[state.lang].services.flow
    .map(
      (item, index) => `
        <article class="flow-step reveal" data-flow-index="${index}">
          <span class="step-glow" aria-hidden="true"></span>
          <div class="flow-copy">
            <span class="flow-step-label">${item.step}</span>
            <span class="card-icon">${icon(item.icon)}</span>
            <h3>${item.title}</h3>
            <p>${item.text}</p>
          </div>
          <div class="flow-visual">${renderFlowVisual(item.visual, item.title)}</div>
        </article>
      `,
    )
    .join("");
};

const conceptAssets = [
  {
    theme: "interior",
    photo: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=76",
    secondary: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=520&q=74",
    tertiary: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=520&q=74",
    detail: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=520&q=74",
  },
  {
    theme: "tech",
    photo: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=76",
    secondary: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&w=520&q=74",
    tertiary: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=520&q=74",
    detail: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=520&q=74",
  },
  {
    theme: "school",
    photo: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=900&q=76",
    secondary: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=520&q=74",
    tertiary: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=520&q=74",
    detail: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=520&q=74",
  },
  {
    theme: "dashboard",
    photo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=76",
    secondary: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=520&q=74",
    tertiary: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=520&q=74",
    detail: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=520&q=74",
  },
  {
    theme: "store",
    photo: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=76",
    secondary: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=520&q=74",
    tertiary: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=520&q=74",
    detail: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=520&q=74",
  },
  {
    theme: "restaurant",
    photo: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=900&q=76",
    secondary: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=520&q=74",
    tertiary: "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=520&q=74",
    detail: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=520&q=74",
  },
];

const renderConceptWebsite = (project, index, mode = "desktop") => {
  const asset = conceptAssets[index % conceptAssets.length];
  const title = project.title;
  const photoWidth = mode === "phone" ? 320 : 520;
  const photoStyle = `--concept-photo: url('${mobileSizedImage(asset.photo, photoWidth)}'); --concept-photo-2: url('${mobileSizedImage(asset.secondary, 360)}'); --concept-photo-3: url('${mobileSizedImage(asset.tertiary, 360)}'); --concept-photo-4: url('${mobileSizedImage(asset.detail, 360)}')`;
  return `
    <div class="concept-site site-${asset.theme} ${mode === "phone" ? "site-phone" : ""}" style="${photoStyle}">
      <nav><b>${title}</b><span>Home</span><span>Explore</span><span>Contact</span></nav>
      <div class="concept-site-body">
        <section class="site-hero">
          <div>
            <small>${project.category}</small>
            <h4>${title}</h4>
            <p>${project.text}</p>
            <em>Start concept</em>
          </div>
          <i class="site-photo"></i>
        </section>
        <div class="site-modules">
          <i></i><i></i><i></i>
        </div>
      </div>
    </div>
  `;
};

const renderConceptScene = (project, index, size = "card") => {
  const variants = ["interior", "tech", "school", "dashboard", "store", "restaurant"];
  const variant = variants[index % variants.length];
  return `
    <div class="concept-scene concept-${variant} concept-${size}">
      <span class="concept-orbit" aria-hidden="true"></span>
      <div class="concept-desktop">
        <div class="concept-browser-bar">
          <i></i><i></i><i></i>
          <span>${project.category}</span>
        </div>
        ${renderConceptWebsite(project, index)}
      </div>
      <div class="concept-phone" aria-hidden="true">
        ${renderConceptWebsite(project, index, "phone")}
      </div>
    </div>
  `;
};

const renderProjects = () => {
  const target = document.querySelector("[data-render='projectCards']");
  if (!target) return;
  const projects = translations[state.lang].projects;
  target.classList.toggle("is-expanded", projectsExpanded);
  target.innerHTML = projects.cards
    .map((project, index) => {
      const visibleTags = project.tags.slice(0, 2);
      return `
        <article class="project-card reveal" role="button" tabindex="0" data-project-index="${index}" data-project-card="${index}">
          <span class="project-category">${project.category}</span>
          <div class="project-visual">
            ${renderConceptScene(project, index)}
          </div>
          <span class="project-body">
            <strong>${project.title}</strong>
            <span>${project.text}</span>
          </span>
          <span class="tag-row">${visibleTags.map((tag) => `<span class="tag">${tag}</span>`).join("")}</span>
          <span class="project-open-button">${projects.view}</span>
        </article>
      `;
    })
    .join("") +
    `<button class="projects-toggle" type="button" data-projects-toggle aria-expanded="${projectsExpanded}">${projectsExpanded ? projects.showLess : projects.showMore}</button>`;
};

const renderProcess = () => {
  const target = document.querySelector("[data-render='processSteps']");
  if (!target) return;
  target.innerHTML = translations[state.lang].process.steps
    .map(
      (step, index) => `
        <article class="process-step reveal">
          <span class="step-number">${String(index + 1).padStart(2, "0")}</span>
          <span class="process-icon">${icon(index === 0 ? "phone" : index === 1 ? "spark" : index === 2 ? "brush" : "rocket")}</span>
          <h3>${step.title}</h3>
          <p>${step.text}</p>
        </article>
      `,
    )
    .join("");
};

const renderPricing = () => {
  const target = document.querySelector("[data-render='pricingCards']");
  if (!target) return;
  target.innerHTML = translations[state.lang].pricing.options
    .map(
      (option) => `
        <article class="pricing-card reveal${option.featured ? " featured" : ""}">
          <span class="option-label">${option.label}</span>
          <h3>${option.title}</h3>
          <p>${option.text}</p>
          <div class="pricing-line"></div>
        </article>
      `,
    )
    .join("");
};

const openProjectModal = (index) => {
  const project = translations[state.lang].projects.cards[index];
  const modal = document.querySelector("[data-project-modal]");
  if (!modal || !project) return;
  state.activeProject = index;

  document.querySelector("[data-modal-title]").textContent = project.title;
  document.querySelector("[data-modal-category]").textContent = project.category;
  document.querySelector("[data-modal-text]").textContent = project.text;
  document.querySelector("[data-modal-visual]").innerHTML = renderConceptScene(project, index, "modal");
  document.querySelector("[data-modal-badges]").innerHTML = project.tags.slice(0, 2).map((tag) => `<span class="tag">${tag}</span>`).join("");
  document.querySelector("[data-modal-contact]").textContent = translations[state.lang].projects.modalCta;
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
};

const closeProjectModal = () => {
  const modal = document.querySelector("[data-project-modal]");
  if (!modal) return;
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
};

const bindProjectCards = () => {
  document.querySelectorAll("[data-project-index]").forEach((card) => {
    card.addEventListener("click", () => openProjectModal(Number(card.dataset.projectIndex)));
    card.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      openProjectModal(Number(card.dataset.projectIndex));
    });
  });

  document.querySelector("[data-projects-toggle]")?.addEventListener("click", () => {
    const projectsSection = document.querySelector("#projects");
    const previousTop = projectsSection?.getBoundingClientRect().top || 0;
    projectsExpanded = !projectsExpanded;
    renderProjects();
    bindProjectCards();
    observeReveal();
    const nextTop = projectsSection?.getBoundingClientRect().top || 0;
    window.scrollBy({ top: nextTop - previousTop, behavior: "smooth" });
  });
};

const renderAll = () => {
  document.documentElement.lang = state.lang === "sq" ? "sq" : state.lang;
  document.title = translations[state.lang].meta.title;
  document.querySelector("meta[name='description']")?.setAttribute("content", translations[state.lang].meta.description);
  document.querySelector("meta[property='og:title']")?.setAttribute("content", translations[state.lang].meta.title);
  document.querySelector("meta[property='og:description']")?.setAttribute("content", translations[state.lang].meta.description);

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = getResponsiveValue(element.dataset.i18n);
    if (typeof value === "string") element.textContent = value;
  });

  document.querySelectorAll("[data-lang]").forEach((button) => {
    const isActive = button.dataset.lang === state.lang;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
  document.querySelectorAll("[data-footer-lang]").forEach((button) => {
    button.textContent = languageNames[button.dataset.footerLang];
  });

  renderTrustBadges();
  renderServiceFlow();
  renderProjects();
  bindProjectCards();
  if (document.querySelector("[data-project-modal]")?.classList.contains("is-open")) openProjectModal(state.activeProject);
  observeReveal();
};

const setLanguage = (lang) => {
  if (!translations[lang]) return;
  state.lang = lang;
  localStorage.setItem("artly-language", lang);
  renderAll();
};

const setupNavigation = () => {
  const header = document.querySelector("[data-header]");
  const menuButton = document.querySelector(".menu-toggle");
  const navLinks = document.querySelectorAll(".nav-links a");
  const syncHeader = () => header?.classList.toggle("is-scrolled", window.scrollY > 12);
  window.addEventListener("scroll", syncHeader, { passive: true });
  syncHeader();

  menuButton?.addEventListener("click", () => {
    const isOpen = document.body.classList.toggle("nav-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });
  navLinks.forEach((link) => link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
    menuButton?.setAttribute("aria-expanded", "false");
  }));

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) => link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`));
      });
    },
    { rootMargin: "-34% 0px -58% 0px", threshold: 0.01 },
  );
  document.querySelectorAll("main section[id]").forEach((section) => sectionObserver.observe(section));
};

let revealObserver;
let flowRevealObserver;
function observeReveal() {
  if (revealObserver) revealObserver.disconnect();
  if (flowRevealObserver) flowRevealObserver.disconnect();
  flowRevealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          flowRevealObserver.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -26% 0px", threshold: 0.2 },
  );
  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 },
  );
  document.querySelectorAll(".reveal").forEach((element, index) => {
    const flowIndex = element.dataset.flowIndex;
    const delay = flowIndex !== undefined ? Number(flowIndex) * 320 : Math.min(index % 8, 7) * 55;
    element.style.transitionDelay = `${delay}ms`;
    if (flowIndex !== undefined) {
      flowRevealObserver.observe(element);
    } else {
      revealObserver.observe(element);
    }
  });
}

const setupParallax = () => {
  const stage = document.querySelector("[data-parallax]");
  if (!stage) return;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const compactViewport = window.matchMedia("(max-width: 980px)");
  let pointerFrame = 0;

  const setScene = ({ x = 0, y = 0, tiltX = 0, tiltY = 0 }) => {
    stage.style.setProperty("--scene-x", `${x}px`);
    stage.style.setProperty("--scene-y", `${y}px`);
    stage.style.setProperty("--tilt-x", `${tiltX}deg`);
    stage.style.setProperty("--tilt-y", `${tiltY}deg`);
  };

  const handlePointer = (event) => {
    if (reduceMotion.matches || compactViewport.matches) return;
    if (pointerFrame) cancelAnimationFrame(pointerFrame);
    pointerFrame = requestAnimationFrame(() => {
      const rect = stage.getBoundingClientRect();
      const localX = (event.clientX - rect.left) / rect.width - 0.5;
      const localY = (event.clientY - rect.top) / rect.height - 0.5;
      const x = Math.max(-1, Math.min(1, localX * 2));
      const y = Math.max(-1, Math.min(1, localY * 2));

      setScene({
        x: x * 14,
        y: y * 10,
        tiltX: y * -1.8,
        tiltY: x * 2.6,
      });
    });
  };

  stage.addEventListener("pointermove", handlePointer, { passive: true });
  stage.addEventListener("mouseleave", () => setScene({}), { passive: true });
};

const setupConnectedScroll = () => {
  const hero = document.querySelector("#home");
  const stage = document.querySelector("[data-parallax]");
  const projects = document.querySelector("#projects");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const compactViewport = window.matchMedia("(max-width: 980px)");
  if (!hero || !stage || !projects) return;

  const clamp = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value));
  const ease = (value) => 1 - Math.pow(1 - value, 3);
  let frame = 0;

  const clearConnectedStyles = () => {
    document.body.classList.remove("connected-scroll");
    [
      "--project-one-x",
      "--project-one-y",
      "--project-one-ry",
      "--project-one-rz",
      "--project-two-x",
      "--project-two-y",
      "--project-two-ry",
      "--project-two-rz",
      "--project-three-x",
      "--project-three-y",
      "--project-three-ry",
      "--project-three-rz",
      "--project-float-opacity",
      "--project-float-blur",
      "--project-float-scale",
    ].forEach((property) => stage.style.removeProperty(property));
    document.querySelectorAll("[data-project-card]").forEach((element) => {
      element.style.removeProperty("--connected-y");
      element.style.removeProperty("--connected-scale");
      element.style.removeProperty("--connected-opacity");
      element.style.removeProperty("--connected-blur");
    });
  };

  const update = () => {
    frame = 0;
    if (reduceMotion.matches || compactViewport.matches) {
      clearConnectedStyles();
      return;
    }

    document.body.classList.add("connected-scroll");
    const projectTop = projects.getBoundingClientRect().top;
    const viewport = window.innerHeight;
    const projectProgress = ease(clamp((viewport * 0.88 - projectTop) / (viewport * 0.92)));

    const projectDrift = [
      { x: 110, y: 520, ry: 0, rz: 0 },
      { x: -80, y: 610, ry: 0, rz: 0 },
      { x: 46, y: 470, ry: 0, rz: 0 },
    ];
    projectDrift.forEach((target, index) => {
      const key = ["one", "two", "three"][index];
      stage.style.setProperty(`--project-${key}-x`, `${target.x * projectProgress}px`);
      stage.style.setProperty(`--project-${key}-y`, `${target.y * projectProgress}px`);
      stage.style.setProperty(`--project-${key}-ry`, `${(index === 0 ? 18 : index === 1 ? -18 : 12) * (1 - projectProgress)}deg`);
      stage.style.setProperty(`--project-${key}-rz`, `${(index === 0 ? -6 : index === 1 ? 5 : 7) * (1 - projectProgress)}deg`);
    });
    stage.style.setProperty("--project-float-scale", `${1 + projectProgress * 0.18}`);
    stage.style.setProperty("--project-float-opacity", `${1 - projectProgress * 0.88}`);
    stage.style.setProperty("--project-float-blur", `${projectProgress * 8}px`);

    document.querySelectorAll("[data-project-card]").forEach((element) => {
      const index = Number(element.dataset.projectCard || 0);
      const local = clamp(projectProgress * 1.3 - (index % 3) * 0.12);
      element.style.setProperty("--connected-y", `${(1 - ease(local)) * 96}px`);
      element.style.setProperty("--connected-scale", `${0.94 + ease(local) * 0.06}`);
      element.style.setProperty("--connected-opacity", `${0.34 + ease(local) * 0.66}`);
      element.style.setProperty("--connected-blur", `${(1 - ease(local)) * 10}px`);
    });

  };

  const requestUpdate = () => {
    if (frame) return;
    frame = requestAnimationFrame(update);
  };

  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate, { passive: true });
  reduceMotion.addEventListener?.("change", requestUpdate);
  compactViewport.addEventListener?.("change", requestUpdate);
  requestUpdate();
};

const setupMagneticButtons = () => {
  document.querySelectorAll(".btn").forEach((button) => {
    button.addEventListener("mousemove", (event) => {
      const rect = button.getBoundingClientRect();
      button.style.setProperty("--magnet-x", `${(event.clientX - rect.left - rect.width / 2) * 0.14}px`);
      button.style.setProperty("--magnet-y", `${(event.clientY - rect.top - rect.height / 2) * 0.14}px`);
    });
    button.addEventListener("mouseleave", () => {
      button.style.setProperty("--magnet-x", "0px");
      button.style.setProperty("--magnet-y", "0px");
    });
  });
};

const setupContact = () => {
  const viber = document.querySelector("[data-contact='viber']");
  const email = document.querySelector("[data-contact='email']");
  const phone = document.querySelector("[data-contact='phone']");
  const form = document.querySelector("[data-contact-form]");
  const status = document.querySelector("[data-form-status]");
  const submit = form?.querySelector(".form-submit");
  const submitLabel = form?.querySelector("[data-submit-label]");

  if (viber) viber.href = `viber://chat?number=${encodeURIComponent(CONTACT.phoneHref)}`;
  if (email) email.href = `mailto:${CONTACT.email}`;
  if (phone) phone.href = `tel:${CONTACT.phoneHref}`;
  document.querySelectorAll("[data-contact-detail='viber'], [data-contact-detail='phone']").forEach((element) => {
    element.textContent = CONTACT.phoneDisplay;
  });
  document.querySelectorAll("[data-contact-detail='email']").forEach((element) => {
    element.textContent = CONTACT.email;
  });

  form?.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    status.textContent = "";
    submit.disabled = true;
    submit.classList.add("is-loading");
    submitLabel.textContent = translations[state.lang].form.loading;

    const payload = Object.fromEntries(new FormData(form).entries());
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, language: state.lang }),
      });
      if (!response.ok) throw new Error("Request failed");
      form.reset();
      status.textContent = translations[state.lang].form.success;
      status.classList.remove("is-error");
      status.classList.add("is-success");
    } catch (error) {
      status.textContent = translations[state.lang].form.error;
      status.classList.remove("is-success");
      status.classList.add("is-error");
    } finally {
      submit.disabled = false;
      submit.classList.remove("is-loading");
      submitLabel.textContent = translations[state.lang].form.submit;
    }
  });
};

document.querySelectorAll("[data-lang]").forEach((button) => button.addEventListener("click", () => setLanguage(button.dataset.lang)));
document.querySelectorAll("[data-footer-lang]").forEach((button) => button.addEventListener("click", () => setLanguage(button.dataset.footerLang)));
mobileViewport.addEventListener?.("change", renderAll);
document.querySelectorAll("[data-modal-close]").forEach((button) => button.addEventListener("click", closeProjectModal));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeProjectModal();
});

document.querySelector("[data-year]").textContent = new Date().getFullYear();
renderAll();
setupNavigation();
setupParallax();
setupContact();
