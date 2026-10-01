export type Locale = "de" | "en";

export const dictionary = {
  de: {
    nav: {
      home: "Startseite",
      services: "Leistungen",
      beforeAfter: "Vorher & Nachher",
      about: "Über uns",
      gallery: "Galerie",
      faq: "FAQ",
      contact: "Kontakt",
      cta: "Angebot anfragen",
      call: "Jetzt anrufen",
    },
    theme: {
      light: "Hell",
      dark: "Dunkel",
      toggle: "Design umschalten",
    },
    lang: {
      label: "Sprache",
      de: "Deutsch",
      en: "Englisch",
    },
    hero: {
      eyebrow: "Reinigungsservice in Göttingen",
      title: "Professionelle Gebäudereinigung in Göttingen",
      subtitle: "Sauberkeit, auf die Sie sich verlassen können.",
      description:
        "Treppenhäuser, Büros, Gebäude und Gemeinschaftsbereiche in Göttingen und Umgebung – zuverlässig gereinigt von einem selbstständigen, persönlich erreichbaren Reinigungsservice.",
      ctaPrimary: "Kostenloses Angebot anfragen",
      ctaSecondary: "Unsere Leistungen",
      ctaCall: "Jetzt anrufen",
      trust1: "Selbstständiger Reinigungsservice",
      trust2: "Göttingen & Umgebung",
      trust3: "Persönlicher Ansprechpartner",
      videoNote:
        "Videobereich vorbereitet — Sie können hier jederzeit eigenes Video- oder Bildmaterial ergänzen.",
    },
    services: {
      eyebrow: "Leistungen",
      title: "Reinigung, auf die Häuser und Büros sich verlassen",
      description:
        "Von Treppenhäusern bis zu ganzen Gebäuden – jede Leistung wird auf Ihre Räumlichkeiten und Ihren Rhythmus abgestimmt.",
      items: [
        {
          title: "Treppenhausreinigung",
          description:
            "Gründliche Reinigung von Böden, Treppen, Geländern, Handläufen und Eingangsbereichen für einen gepflegten ersten Eindruck.",
        },
        {
          title: "Büroreinigung",
          description:
            "Reinigung von Arbeitsplätzen, Böden, Oberflächen, Gemeinschaftsbereichen und Sanitärräumen – flexibel nach Ihrem Zeitplan.",
        },
        {
          title: "Gebäudereinigung",
          description:
            "Professionelle Reinigung für Gewerbeimmobilien, private Objekte und stark frequentierte Bereiche.",
        },
        {
          title: "Unterhaltsreinigung",
          description:
            "Regelmäßige Reinigung nach individuellem Plan – wöchentlich, zweiwöchentlich oder nach Vereinbarung.",
        },
        {
          title: "Eingangs- & Gemeinschaftsbereiche",
          description:
            "Saubere, gepflegte Flächen, die einen positiven ersten Eindruck bei Besuchern und Mietern hinterlassen.",
        },
      ],
      learnMore: "Mehr erfahren",
    },
    whyUs: {
      eyebrow: "Warum wir",
      title: "Sauber. Zuverlässig. Professionell.",
      items: [
        {
          title: "Zuverlässig",
          description: "Pünktliche und zuverlässige Reinigung nach Vereinbarung.",
        },
        {
          title: "Gründlich",
          description: "Wir achten auf Details und sorgen für nachhaltige Sauberkeit.",
        },
        {
          title: "Individuell",
          description:
            "Die Reinigung wird an Ihre Räumlichkeiten und Anforderungen angepasst.",
        },
        {
          title: "Persönlich",
          description: "Direkter und persönlicher Kontakt zu Ihrem Reinigungsservice.",
        },
      ],
    },
    beforeAfter: {
      eyebrow: "Der Unterschied ist sichtbar",
      title: "Vorher. Nachher. Sauber.",
      description:
        "Ziehen Sie den Regler oder wischen Sie auf dem Handy, um den Unterschied selbst zu sehen.",
      before: "Vorher",
      after: "Nachher",
      tabs: {
        treppenhaus: "Treppenhaus",
        eingang: "Eingangsbereich",
      },
      dragHint: "Ziehen zum Vergleichen",
    },
    local: {
      eyebrow: "Lokal in Göttingen",
      title: "Ihr Reinigungsservice in Göttingen",
      description:
        "Professionelle Reinigungslösungen für Büros, Treppenhäuser, Gebäude und Gewerbeimmobilien in Göttingen und Umgebung. Als selbstständiger Anbieter kenne ich die Anforderungen lokaler Objekte und bin persönlich erreichbar.",
      addressLabel: "Adresse",
      areaLabel: "Einsatzgebiet",
      areaValue: "Göttingen und Umgebung",
    },
    gallery: {
      eyebrow: "Einblicke",
      title: "Ergebnisse, die für sich sprechen",
      description: "Eine Auswahl an Reinigungsarbeiten aus Büros, Treppenhäusern und Gebäuden.",
      items: [
        { title: "Büro – Teppichreinigung", tag: "Büroreinigung" },
        { title: "Büro – Arbeitsplätze", tag: "Büroreinigung" },
        { title: "Boden – Fliesenreinigung", tag: "Gebäudereinigung" },
      ],
    },
    faq: {
      eyebrow: "Fragen & Antworten",
      title: "Häufig gestellte Fragen",
      items: [
        {
          q: "Welche Bereiche reinigen Sie?",
          a: "Treppenhäuser, Büros, Gebäude, Eingangsbereiche, Gemeinschaftsflächen und weitere individuell vereinbarte Bereiche.",
        },
        {
          q: "Wie oft kann gereinigt werden?",
          a: "Die Reinigung kann regelmäßig nach einem individuellen Reinigungsplan erfolgen – wöchentlich, zweiwöchentlich oder nach Vereinbarung.",
        },
        {
          q: "Arbeiten Sie auch für Gewerbekunden?",
          a: "Ja, ich reinige sowohl für private als auch für gewerbliche Kunden in Göttingen und Umgebung.",
        },
        {
          q: "Wie kann ich ein Angebot erhalten?",
          a: "Kontaktieren Sie mich telefonisch, per E-Mail oder über das Kontaktformular – ich melde mich zeitnah mit einem individuellen Angebot.",
        },
      ],
    },
    contact: {
      eyebrow: "Kontakt",
      title: "Sie benötigen eine zuverlässige Reinigung?",
      description:
        "Gerne erstelle ich Ihnen ein individuelles Angebot für Ihre Räumlichkeiten.",
      formName: "Name",
      formEmail: "E-Mail",
      formPhone: "Telefonnummer",
      formType: "Art der Reinigung",
      formTypeOptions: [
        "Treppenhausreinigung",
        "Büroreinigung",
        "Gebäudereinigung",
        "Unterhaltsreinigung",
        "Eingangs- & Gemeinschaftsbereiche",
        "Sonstiges",
      ],
      formFrequency: "Gewünschte Reinigungsfrequenz (optional)",
      formFrequencyOptions: ["Einmalig", "Wöchentlich", "Zweiwöchentlich", "Nach Vereinbarung"],
      formMessage: "Nachricht",
      formSubmit: "Angebot anfragen",
      formSubmitting: "Wird gesendet…",
      formSuccess: "Vielen Dank! Ihre Anfrage wurde erfolgreich gesendet.",
      formError: "Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut oder rufen Sie an.",
      formEmailFallback: "Der automatische E-Mail-Versand ist nicht verfügbar. Falls sich Ihr E-Mail-Programm geöffnet hat, drücken Sie dort auf Senden. Andernfalls senden Sie die Anfrage bitte manuell an die unten angezeigte Adresse.",
      formConsent: "Ich habe die",
      formConsentLink: "Datenschutzerklärung",
      formConsentEnd: "gelesen und bin mit der Verarbeitung meiner Daten einverstanden.",
      phoneLabel: "Telefon",
      emailLabel: "E-Mail",
      addressLabel: "Adresse",
    },
    mobileBar: {
      call: "Anrufen",
      quote: "Angebot",
    },
    footer: {
      description:
        "Selbstständiger Reinigungsservice für Treppenhäuser, Büros, Gebäude und Gemeinschaftsbereiche in Göttingen und Umgebung.",
      linksTitle: "Navigation",
      legalTitle: "Rechtliches",
      contactTitle: "Kontakt",
      links: {
        home: "Startseite",
        services: "Leistungen",
        about: "Über uns",
        beforeAfter: "Vorher & Nachher",
        contact: "Kontakt",
        impressum: "Impressum",
        datenschutz: "Datenschutz",
      },
      rights: "Alle Rechte vorbehalten.",
    },
  },
  en: {
    nav: {
      home: "Home",
      services: "Services",
      beforeAfter: "Before & After",
      about: "About us",
      gallery: "Gallery",
      faq: "FAQ",
      contact: "Contact",
      cta: "Request a quote",
      call: "Call now",
    },
    theme: {
      light: "Light",
      dark: "Dark",
      toggle: "Toggle theme",
    },
    lang: {
      label: "Language",
      de: "German",
      en: "English",
    },
    hero: {
      eyebrow: "Cleaning service in Göttingen",
      title: "Professional Building Cleaning in Göttingen",
      subtitle: "Cleanliness you can rely on.",
      description:
        "Staircases, offices, buildings and communal areas across Göttingen and the surrounding area — cleaned reliably by an independent, personally reachable cleaning service.",
      ctaPrimary: "Request a free quote",
      ctaSecondary: "Our services",
      ctaCall: "Call now",
      trust1: "Independent cleaning service",
      trust2: "Göttingen & surrounding area",
      trust3: "Personal point of contact",
      videoNote:
        "Video section ready — you can add your own video or image material here at any time.",
    },
    services: {
      eyebrow: "Services",
      title: "Cleaning that homes and offices rely on",
      description:
        "From staircases to entire buildings — every service is tailored to your premises and your schedule.",
      items: [
        {
          title: "Staircase cleaning",
          description:
            "Thorough cleaning of floors, stairs, railings, handrails and entrance areas for a well-kept first impression.",
        },
        {
          title: "Office cleaning",
          description:
            "Cleaning of workstations, floors, surfaces, communal areas and sanitary facilities — flexible around your schedule.",
        },
        {
          title: "Building cleaning",
          description:
            "Professional cleaning for commercial properties, private buildings and high-traffic areas.",
        },
        {
          title: "Routine cleaning",
          description:
            "Regular cleaning on an individual schedule — weekly, biweekly or by arrangement.",
        },
        {
          title: "Entrances & communal areas",
          description:
            "Clean, well-maintained areas that create a positive first impression for visitors and residents.",
        },
      ],
      learnMore: "Learn more",
    },
    whyUs: {
      eyebrow: "Why us",
      title: "Clean. Reliable. Professional.",
      items: [
        {
          title: "Reliable",
          description: "Punctual and dependable cleaning as agreed.",
        },
        {
          title: "Thorough",
          description: "We pay attention to detail for lasting cleanliness.",
        },
        {
          title: "Tailored",
          description: "Cleaning is adapted to your premises and requirements.",
        },
        {
          title: "Personal",
          description: "Direct, personal contact with your cleaning service.",
        },
      ],
    },
    beforeAfter: {
      eyebrow: "The difference is visible",
      title: "Before. After. Clean.",
      description: "Drag the slider or swipe on mobile to see the difference for yourself.",
      before: "Before",
      after: "After",
      tabs: {
        treppenhaus: "Staircase",
        eingang: "Entrance",
      },
      dragHint: "Drag to compare",
    },
    local: {
      eyebrow: "Local in Göttingen",
      title: "Your cleaning service in Göttingen",
      description:
        "Professional cleaning solutions for offices, staircases, buildings and commercial properties in Göttingen and the surrounding area. As an independent provider, I know the needs of local properties and am personally reachable.",
      addressLabel: "Address",
      areaLabel: "Service area",
      areaValue: "Göttingen and surrounding area",
    },
    gallery: {
      eyebrow: "A closer look",
      title: "Results that speak for themselves",
      description: "A selection of cleaning work from offices, staircases and buildings.",
      items: [
        { title: "Office — carpet cleaning", tag: "Office cleaning" },
        { title: "Office — workstations", tag: "Office cleaning" },
        { title: "Floor — tile cleaning", tag: "Building cleaning" },
      ],
    },
    faq: {
      eyebrow: "Questions & answers",
      title: "Frequently asked questions",
      items: [
        {
          q: "Which areas do you clean?",
          a: "Staircases, offices, buildings, entrance areas, communal areas and other individually agreed areas.",
        },
        {
          q: "How often can cleaning take place?",
          a: "Cleaning can be carried out regularly according to an individual schedule — weekly, biweekly or by arrangement.",
        },
        {
          q: "Do you also work for commercial clients?",
          a: "Yes, I clean for both private and commercial clients in Göttingen and the surrounding area.",
        },
        {
          q: "How can I get a quote?",
          a: "Contact me by phone, email or the contact form — I'll get back to you promptly with an individual quote.",
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Need reliable cleaning?",
      description: "I'll be happy to put together an individual quote for your premises.",
      formName: "Name",
      formEmail: "Email",
      formPhone: "Phone number",
      formType: "Type of cleaning",
      formTypeOptions: [
        "Staircase cleaning",
        "Office cleaning",
        "Building cleaning",
        "Routine cleaning",
        "Entrances & communal areas",
        "Other",
      ],
      formFrequency: "Desired cleaning frequency (optional)",
      formFrequencyOptions: ["One-off", "Weekly", "Biweekly", "By arrangement"],
      formMessage: "Message",
      formSubmit: "Request a quote",
      formSubmitting: "Sending…",
      formSuccess: "Thank you! Your request has been sent successfully.",
      formError: "Something went wrong. Please try again or call us.",
      formEmailFallback: "Automatic email delivery is unavailable. If your email app opened, press Send there. Otherwise, send your request manually to the address below.",
      formConsent: "I have read the",
      formConsentLink: "privacy policy",
      formConsentEnd: "and agree to the processing of my data.",
      phoneLabel: "Phone",
      emailLabel: "Email",
      addressLabel: "Address",
    },
    mobileBar: {
      call: "Call",
      quote: "Quote",
    },
    footer: {
      description:
        "Independent cleaning service for staircases, offices, buildings and communal areas in Göttingen and the surrounding area.",
      linksTitle: "Navigation",
      legalTitle: "Legal",
      contactTitle: "Contact",
      links: {
        home: "Home",
        services: "Services",
        about: "About us",
        beforeAfter: "Before & After",
        contact: "Contact",
        impressum: "Legal notice",
        datenschutz: "Privacy policy",
      },
      rights: "All rights reserved.",
    },
  },
};

export type Dictionary = (typeof dictionary)[Locale];
