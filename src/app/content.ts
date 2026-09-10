/**
 * Contenu multilingue du site (NL / EN).
 * Un seul endroit à modifier pour changer les textes.
 * Langue par défaut : NL (voir app.component.ts).
 */

export type Lang = 'nl' | 'en';

/** Ordre d'affichage du sélecteur de langue. */
export const LANGS: Lang[] = ['nl', 'en'];

export interface ServiceCopy {
  title: string;
  text: string;
  tag: string;
}
export interface StepCopy {
  title: string;
  text: string;
}
export interface FaqCopy {
  q: string;
  a: string;
}
export interface SwatchCopy {
  name: string;
  use: string;
}

export interface Dict {
  meta: { title: string; description: string };
  brand: string;
  nav: {
    services: string;
    process: string;
    ambiances: string;
    about: string;
    faq: string;
    contact: string;
  };
  actions: { quote: string; call: string; send: string };
  hero: {
    tags: string[];
    titleLead: string;
    titleAccent: string;
    lead: string;
    scroll: string;
  };
  quote: {
    title: string;
    text: string;
    name: string;
    namePh: string;
    phone: string;
    phonePh: string;
    service: string;
    serviceOptions: string[];
    message: string;
    messagePh: string;
    note: string;
    mailSubject: string;
  };
  services: { label: string; title: string; text: string; items: ServiceCopy[]; more: string };
  process: { label: string; title: string; text: string; items: StepCopy[] };
  ambiances: {
    label: string;
    title: string;
    text: string;
    items: SwatchCopy[];
    followLabel: string;
  };
  about: { label: string; role: string; p1: string; p2: string; facts: string[] };
  faq: { label: string; title: string; items: FaqCopy[] };
  band: { title: string; text: string };
  contact: {
    label: string;
    title: string;
    text: string;
    callSub: string;
    whatsappSub: string;
    emailSub: string;
    instagramSub: string;
    zoneLabel: string;
    zone: string;
    hoursLabel: string;
    hours: string;
  };
  footer: { tagline: string; navLabel: string; contactLabel: string; rights: string };
}

export const CONTENT: Record<Lang, Dict> = {
  nl: {
    meta: {
      title: 'Raki Schilderwerken — Schilder in Antwerpen',
      description:
        'Raki Schilderwerken — professionele schilder in Antwerpen. Binnen- en buitenschilderwerk, gyproc, plamuur en renovatie. Gratis offerte: 0492 65 31 96.',
    },
    brand: 'Raki Schilderwerken',
    nav: {
      services: 'Diensten',
      process: 'Werkwijze',
      ambiances: 'Sferen',
      about: 'Over ons',
      faq: 'Vragen',
      contact: 'Contact',
    },
    actions: { quote: 'Vraag een offerte', call: '0492 65 31 96', send: 'Aanvraag versturen' },
    hero: {
      tags: ['Antwerpen & omgeving', 'Binnen & buiten', 'NL / EN'],
      titleLead: 'Uw schilderwerk in',
      titleAccent: 'vertrouwde handen',
      lead:
        'Professionele schilder in Antwerpen. Binnen- en buitenschilderwerk, gyproc, plamuurwerk en renovatie — zorgvuldige voorbereiding, verzorgde afwerking, stipte planning.',
      scroll: 'Scroll',
    },
    quote: {
      title: 'Gratis offerte, zonder verplichting',
      text: 'Beschrijf uw werf in enkele woorden: u krijgt snel een duidelijke raming terug.',
      name: 'Naam',
      namePh: 'Uw naam',
      phone: 'Telefoon',
      phonePh: 'Om u terug te bellen',
      service: 'Soort werken',
      serviceOptions: [
        'Binnenschilderwerk',
        'Buitenschilderwerk',
        'Gyproc & wanden',
        'Plamuur- & pleisterwerk',
        'Volledige renovatie',
        'Andere / weet ik nog niet',
      ],
      message: 'Uw project',
      messagePh: 'Geschatte oppervlakte, adres van de werf, gewenste termijn…',
      note:
        'Bij het versturen opent uw e-mailprogramma met de ingevulde samenvatting naar schilderwerkenraki@gmail.com.',
      mailSubject: 'Offerteaanvraag — ',
    },
    services: {
      label: 'Wat ik doe',
      title: 'Vier vakken, één aanspreekpunt',
      text: 'Van de eerste laag tot de laatste penseelstreek volg ik elke werf van begin tot eind.',
      more: 'Vraag een offerte',
      items: [
        {
          title: 'Binnen- en buitenschilderwerk',
          text:
            'Muren, plafonds, houtwerk, gevels en buitenschrijnwerk. Volledige voorbereiding van de ondergrond en verf op maat van elke ruimte en oriëntatie.',
          tag: 'Binnen & buiten',
        },
        {
          title: 'Gyproc & wanden',
          text:
            'Plaatsen van gipsplaten, verlaagde plafonds en scheidingswanden om uw ruimtes opnieuw in te delen en te isoleren.',
          tag: 'Gyproc',
        },
        {
          title: 'Plamuur- & pleisterwerk',
          text:
            'Uitvlakken, plamuren en scheuren opvullen voor perfect vlakke muren, klaar om te schilderen.',
          tag: 'Plamuurwerken',
        },
        {
          title: 'Renovatie',
          text:
            'Volledige opfrissing van een appartement, woning of handelspand: van uitbraak en voorbereiding tot afwerking.',
          tag: 'Renovatie',
        },
      ],
    },
    process: {
      label: 'Hoe het verloopt',
      title: 'Een duidelijke aanpak, zonder verrassingen',
      text: 'Elke stap wordt aangekondigd en netjes uitgevoerd, van eerste contact tot oplevering.',
      items: [
        {
          title: 'Gratis offerte',
          text: 'Bezoek ter plaatse, kleuradvies en gedetailleerde offerte, zonder verplichting.',
        },
        {
          title: 'Voorbereiding',
          text: 'Beschermen van meubels en vloeren, schuren, ontvetten en scheuren behandelen.',
        },
        {
          title: 'Schilderwerk',
          text: 'Grond- en afwerklagen netjes aangebracht, met respect voor de droogtijden.',
        },
        {
          title: 'Afwerking & oplevering',
          text: 'Retouches, volledige opkuis van de werf en eindcontrole samen met u.',
        },
      ],
    },
    ambiances: {
      label: 'Inspiratie',
      title: 'Sferen, niet zomaar muren',
      text:
        'Enkele kleuren die vaak gekozen worden, binnen en op de gevel. Kleuradvies hoort bij de offerte.',
      followLabel: 'Lopende werven en afgewerkte projecten:',
      items: [
        { name: 'Warm wit', use: 'Woonkamer · plafonds' },
        { name: 'Kleigrijs', use: 'Slaapkamer · gang' },
        { name: 'Saliegroen', use: 'Keuken · bureau' },
        { name: 'Nachtblauw', use: 'Schrijnwerk · statement' },
        { name: 'Terracotta', use: 'Inkomhal · accenten' },
        { name: 'Antraciet', use: 'Gevel · deuren' },
      ],
    },
    about: {
      label: 'Over ons',
      role: 'Raki Schilderwerken · Antwerpen',
      p1:
        'Gevestigd in Antwerpen voer ik uw schilder- en renovatiewerken uit met oog voor detail. Elke werf wordt zorgvuldig voorbereid, netjes uitgevoerd en opgeleverd binnen de afgesproken termijn.',
      p2:
        'Duidelijke offerte, direct contact, in het Nederlands of het Engels. U spreekt met de persoon die zelf het penseel vasthoudt.',
      facts: [
        'Antwerpen & omliggende gemeenten',
        'Binnen & buiten, particulieren en handelspanden',
        'Verzorgd werk, nette werf',
        'Service in het Nederlands en het Engels',
      ],
    },
    faq: {
      label: 'Veelgestelde vragen',
      title: 'Wat klanten vaak vragen',
      items: [
        {
          q: 'Is de offerte echt gratis?',
          a: 'Ja. Ik kom ter plaatse, bekijk de werken en stuur u een gedetailleerde offerte, zonder verplichting.',
        },
        {
          q: 'Werkt u in het Nederlands en het Engels?',
          a: 'Ja, allebei. U kiest de taal die u past, zowel mondeling als op de offerte.',
        },
        {
          q: 'Beschermt u de meubels en vloeren?',
          a: 'Altijd. Meubels worden afgedekt, vloeren beschermd en de werf wordt achteraf opgekuist.',
        },
        {
          q: 'Hoe lang duurt een werf?',
          a: 'Dat hangt af van de oppervlakte en het soort werken. De duur staat in de offerte en wordt gerespecteerd, behalve bij vooraf gemelde onvoorziene zaken.',
        },
        {
          q: 'In welke gemeenten werkt u?',
          a: 'Antwerpen en omliggende gemeenten (Berchem, Borgerhout, Deurne, Merksem, Mortsel, Edegem…). Voor een verder adres: vraag het gerust.',
        },
      ],
    },
    band: {
      title: 'Laten we uw project waarmaken',
      text: 'Een muur op te frissen, een appartement te renoveren? Neem vandaag nog contact op.',
    },
    contact: {
      label: 'Contact',
      title: 'Bespreek uw project',
      text: 'Het eenvoudigst: een telefoontje of een WhatsApp-bericht. Snel antwoord, gratis offerte.',
      callSub: 'Rechtstreeks bellen',
      whatsappSub: 'Stuur een bericht',
      emailSub: 'Stuur een e-mail',
      instagramSub: 'Bekijk de realisaties',
      zoneLabel: 'Werkgebied',
      zone: 'Antwerpen & omliggende gemeenten',
      hoursLabel: 'Bereikbaarheid',
      hours: 'Ma – za, 8u – 18u',
    },
    footer: {
      tagline:
        'Schilderwerken binnen & buiten — schilderwerk, gyproc, plamuur en renovatie in Antwerpen.',
      navLabel: 'Navigatie',
      contactLabel: 'Contact',
      rights: 'Alle rechten voorbehouden',
    },
  },

  en: {
    meta: {
      title: 'Raki Schilderwerken — Painter in Antwerp',
      description:
        'Raki Schilderwerken — professional painter in Antwerp. Interior and exterior painting, plasterboard, filling and renovation. Free quote: 0492 65 31 96.',
    },
    brand: 'Raki Schilderwerken',
    nav: {
      services: 'Services',
      process: 'Method',
      ambiances: 'Colours',
      about: 'About',
      faq: 'Questions',
      contact: 'Contact',
    },
    actions: { quote: 'Request a quote', call: '0492 65 31 96', send: 'Send request' },
    hero: {
      tags: ['Antwerp & surroundings', 'Interior & exterior', 'NL / EN'],
      titleLead: 'Your paintwork in',
      titleAccent: 'trusted hands',
      lead:
        'Professional painter in Antwerp. Interior and exterior painting, plasterboard, filling and renovation — careful preparation, clean finish, deadlines respected.',
      scroll: 'Scroll',
    },
    quote: {
      title: 'Free quote, no obligation',
      text: 'Describe your project in a few words — you get a clear estimate back quickly.',
      name: 'Name',
      namePh: 'Your name',
      phone: 'Phone',
      phonePh: 'So we can call you back',
      service: 'Type of work',
      serviceOptions: [
        'Interior painting',
        'Exterior painting',
        'Plasterboard & partitions',
        'Filling & skimming',
        'Full renovation',
        'Other / not sure yet',
      ],
      message: 'Your project',
      messagePh: 'Approximate surface, site address, preferred timing…',
      note:
        'Sending opens your email app with the summary pre-filled to schilderwerkenraki@gmail.com.',
      mailSubject: 'Quote request — ',
    },
    services: {
      label: 'What I do',
      title: 'Four trades, one point of contact',
      text:
        'From the first coat to the last brushstroke, every project is followed from start to finish.',
      more: 'Request a quote',
      items: [
        {
          title: 'Interior & exterior painting',
          text:
            'Walls, ceilings, woodwork, façades and exterior joinery. Full surface preparation and paints suited to each room and exposure.',
          tag: 'Binnen & buiten',
        },
        {
          title: 'Plasterboard & partitions',
          text:
            'Fitting plasterboard, suspended ceilings and partition walls to reorganise and insulate your spaces.',
          tag: 'Gyproc',
        },
        {
          title: 'Filling & skimming',
          text:
            'Skimming, smoothing coats and crack filling for perfectly flat walls, ready to paint.',
          tag: 'Plamuurwerken',
        },
        {
          title: 'Renovation',
          text:
            'Complete refresh of a flat, house or shop: from stripping and preparation to the final finish.',
          tag: 'Renovatie',
        },
      ],
    },
    process: {
      label: 'How it works',
      title: 'A clear method, no surprises',
      text: 'Every step is announced and carried out cleanly, from first contact to handover.',
      items: [
        {
          title: 'Free quote',
          text: 'On-site visit, colour advice and a detailed quote, with no obligation.',
        },
        {
          title: 'Preparation',
          text: 'Furniture and floors protected, sanding, degreasing and crack treatment.',
        },
        {
          title: 'Painting',
          text: 'Primer and finish coats applied cleanly, drying times respected.',
        },
        {
          title: 'Finishing & handover',
          text: 'Touch-ups, full site clean-up and a final check together with you.',
        },
      ],
    },
    ambiances: {
      label: 'Inspiration',
      title: 'Atmospheres, not just walls',
      text:
        'A few shades often chosen for interiors and façades. Colour advice is part of the quote.',
      followLabel: 'Current projects and finished work:',
      items: [
        { name: 'Warm white', use: 'Living room · ceilings' },
        { name: 'Clay grey', use: 'Bedroom · hallway' },
        { name: 'Sage green', use: 'Kitchen · office' },
        { name: 'Midnight blue', use: 'Joinery · feature wall' },
        { name: 'Terracotta', use: 'Entrance · accents' },
        { name: 'Anthracite', use: 'Façade · doors' },
      ],
    },
    about: {
      label: 'About',
      role: 'Raki Schilderwerken · Antwerp',
      p1:
        'Based in Antwerp, I carry out your painting and renovation work with an eye for detail. Every project is carefully prepared, done cleanly and delivered within the agreed time.',
      p2:
        'Clear quote, direct contact, in Dutch or English. You talk to the person holding the brush.',
      facts: [
        'Antwerp & surrounding municipalities',
        'Interior & exterior, homes and businesses',
        'Careful work, tidy site',
        'Service in Dutch and English',
      ],
    },
    faq: {
      label: 'Frequently asked questions',
      title: 'What clients often ask',
      items: [
        {
          q: 'Is the quote really free?',
          a: 'Yes. I come on site, assess the work and send you a detailed quote, with no obligation on your part.',
        },
        {
          q: 'Do you work in Dutch and English?',
          a: 'Yes, both. You choose the language that suits you, both in person and on the quote.',
        },
        {
          q: 'Do you protect furniture and floors?',
          a: 'Always. Furniture is covered, floors are protected and the site is cleaned at the end.',
        },
        {
          q: 'How long does a project take?',
          a: 'It depends on the surface and type of work. The duration is stated in the quote and respected, barring issues flagged in advance.',
        },
        {
          q: 'Which areas do you cover?',
          a: 'Antwerp and the surrounding municipalities (Berchem, Borgerhout, Deurne, Merksem, Mortsel, Edegem…). For an address further away, just ask.',
        },
      ],
    },
    band: {
      title: 'Let’s bring your project to life',
      text: 'A wall to refresh, a flat to renovate? Get in touch today.',
    },
    contact: {
      label: 'Contact',
      title: 'Let’s talk about your project',
      text: 'Easiest is a call or a WhatsApp message. Quick reply, free quote.',
      callSub: 'Call directly',
      whatsappSub: 'Send a message',
      emailSub: 'Send an email',
      instagramSub: 'See the work',
      zoneLabel: 'Service area',
      zone: 'Antwerp & surrounding municipalities',
      hoursLabel: 'Availability',
      hours: 'Mon – Sat, 8am – 6pm',
    },
    footer: {
      tagline:
        'Interior & exterior painting — painting, plasterboard, filling and renovation in Antwerp.',
      navLabel: 'Navigation',
      contactLabel: 'Contact',
      rights: 'All rights reserved',
    },
  },
};
