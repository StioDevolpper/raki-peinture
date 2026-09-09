/**
 * Contenu multilingue du site (NL / FR / EN).
 * Un seul endroit à modifier pour changer les textes.
 * Langue par défaut : NL (voir app.component.ts).
 */

export type Lang = 'nl' | 'fr' | 'en';

/** Ordre d'affichage du sélecteur de langue. */
export const LANGS: Lang[] = ['nl', 'fr', 'en'];

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
      title: 'Raki-Peinture — Schilder in Antwerpen | Raki Schilderwerken',
      description:
        'Raki Schilderwerken — professionele schilder in Antwerpen. Binnen- en buitenschilderwerk, gyproc, plamuur en renovatie. Gratis offerte: 0492 65 31 96.',
    },
    brand: 'Schilderwerken · Antwerpen',
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
      tags: ['Antwerpen & omgeving', 'Binnen & buiten', 'NL / FR / EN'],
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
        'Duidelijke offerte, direct contact, in het Nederlands, het Frans of het Engels. U spreekt met de persoon die zelf het penseel vasthoudt.',
      facts: [
        'Antwerpen & omliggende gemeenten',
        'Binnen & buiten, particulieren en handelspanden',
        'Verzorgd werk, nette werf',
        'Service in het Nederlands, Frans en Engels',
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
          q: 'Werkt u in het Nederlands, Frans en Engels?',
          a: 'Ja, alle drie. U kiest de taal die u past, zowel mondeling als op de offerte.',
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

  fr: {
    meta: {
      title: 'Raki-Peinture — Peintre à Anvers | Raki Schilderwerken',
      description:
        'Raki Schilderwerken — peintre professionnel à Anvers. Peinture intérieure et extérieure, gyproc, enduits et rénovation. Devis gratuit : 0492 65 31 96.',
    },
    brand: 'Peinture · Anvers',
    nav: {
      services: 'Services',
      process: 'Méthode',
      ambiances: 'Ambiances',
      about: 'À propos',
      faq: 'Questions',
      contact: 'Contact',
    },
    actions: { quote: 'Demander un devis', call: '0492 65 31 96', send: 'Envoyer la demande' },
    hero: {
      tags: ['Anvers & environs', 'Intérieur & extérieur', 'NL / FR / EN'],
      titleLead: 'Votre peinture entre de',
      titleAccent: 'bonnes mains',
      lead:
        "Peintre professionnel à Anvers. Peinture intérieure et extérieure, gyproc, enduits et rénovation — préparation minutieuse, finition soignée, délais respectés.",
      scroll: 'Faire défiler',
    },
    quote: {
      title: 'Devis gratuit et sans engagement',
      text:
        'Décrivez votre chantier en quelques mots : nous revenons vers vous rapidement avec une estimation claire.',
      name: 'Nom',
      namePh: 'Votre nom',
      phone: 'Téléphone',
      phonePh: 'Pour vous rappeler',
      service: 'Type de travaux',
      serviceOptions: [
        'Peinture intérieure',
        'Peinture extérieure',
        'Gyproc & cloisons',
        'Enduits & ratissage',
        'Rénovation complète',
        'Autre / je ne sais pas',
      ],
      message: 'Votre projet',
      messagePh: 'Surface approximative, adresse du chantier, délai souhaité…',
      note:
        "L'envoi ouvre votre logiciel de messagerie avec le récapitulatif prérempli vers schilderwerkenraki@gmail.com.",
      mailSubject: 'Demande de devis — ',
    },
    services: {
      label: 'Ce que je réalise',
      title: 'Quatre métiers, un seul interlocuteur',
      text:
        'De la première couche au dernier coup de pinceau, chaque chantier est suivi de bout en bout.',
      more: 'Demander un devis',
      items: [
        {
          title: 'Peinture intérieure & extérieure',
          text:
            'Murs, plafonds, boiseries, façades et menuiseries extérieures. Préparation complète des supports et peintures adaptées à chaque pièce et à chaque exposition.',
          tag: 'Binnen & buiten',
        },
        {
          title: 'Gyproc & cloisons',
          text:
            'Pose de plaques de plâtre, faux plafonds et cloisons de séparation pour réaménager et isoler vos espaces.',
          tag: 'Gyproc',
        },
        {
          title: 'Enduits & ratissage',
          text:
            'Ratissage, enduits de lissage et rebouchage des fissures pour des murs parfaitement plans, prêts à peindre.',
          tag: 'Plamuurwerken',
        },
        {
          title: 'Rénovation',
          text:
            "Rafraîchissement complet d'un appartement, d'une maison ou d'un commerce : de la dépose et la préparation jusqu'à la finition.",
          tag: 'Renovatie',
        },
      ],
    },
    process: {
      label: 'Comment ça se passe',
      title: 'Une méthode claire, sans mauvaise surprise',
      text: 'Chaque étape est annoncée et exécutée proprement, du premier contact à la remise des clés.',
      items: [
        {
          title: 'Devis gratuit',
          text: 'Visite sur place, conseils couleurs et devis détaillé, sans engagement.',
        },
        {
          title: 'Préparation',
          text: 'Protection du mobilier et des sols, ponçage, dégraissage et traitement des fissures.',
        },
        {
          title: 'Mise en peinture',
          text: "Couches d'apprêt et de finition appliquées proprement, temps de séchage respectés.",
        },
        {
          title: 'Finitions & livraison',
          text: 'Retouches, nettoyage complet du chantier et contrôle final réalisé avec vous.',
        },
      ],
    },
    ambiances: {
      label: 'Inspiration',
      title: 'Des ambiances, pas seulement des murs',
      text:
        "Quelques teintes souvent choisies pour l'intérieur comme pour la façade. Le conseil couleur fait partie du devis.",
      followLabel: 'Chantiers en cours et réalisations terminées :',
      items: [
        { name: 'Blanc chaud', use: 'Séjour · plafonds' },
        { name: 'Gris argile', use: 'Chambre · couloir' },
        { name: 'Vert sauge', use: 'Cuisine · bureau' },
        { name: 'Bleu nuit', use: 'Menuiseries · pièce forte' },
        { name: 'Terracotta', use: 'Entrée · accents' },
        { name: 'Anthracite', use: 'Façade · portes' },
      ],
    },
    about: {
      label: 'À propos',
      role: 'Raki Schilderwerken · Antwerpen',
      p1:
        "Basé à Anvers, je réalise vos travaux de peinture et de rénovation avec le souci du détail. Chaque chantier est préparé avec soin, exécuté proprement et livré dans les délais convenus.",
      p2:
        "Devis clair, communication directe, en néerlandais, en français ou en anglais. Vous parlez à la personne qui tient le pinceau.",
      facts: [
        'Anvers & communes environnantes',
        'Intérieur & extérieur, particuliers et commerces',
        'Travail soigné, chantier propre',
        'Service en néerlandais, français et anglais',
      ],
    },
    faq: {
      label: 'Questions fréquentes',
      title: 'Ce que les clients demandent souvent',
      items: [
        {
          q: 'Le devis est-il vraiment gratuit ?',
          a: "Oui. Je me déplace sur place, j'évalue les travaux et vous envoie un devis détaillé, sans engagement de votre part.",
        },
        {
          q: 'Travaillez-vous en néerlandais, français et anglais ?',
          a: 'Oui, les trois. Vous choisissez la langue qui vous convient, à l’oral comme sur le devis.',
        },
        {
          q: 'Protégez-vous les meubles et les sols ?',
          a: "Systématiquement. Le mobilier est bâché, les sols sont protégés et le chantier est nettoyé à la fin.",
        },
        {
          q: 'Combien de temps dure un chantier ?',
          a: "Cela dépend de la surface et du type de travaux. La durée est indiquée dans le devis et respectée sauf imprévu signalé à l’avance.",
        },
        {
          q: 'Dans quelles communes intervenez-vous ?',
          a: 'Anvers et les communes environnantes (Berchem, Borgerhout, Deurne, Merksem, Mortsel, Edegem…). Pour une adresse plus éloignée, demandez.',
        },
      ],
    },
    band: {
      title: 'Donnons vie à votre projet',
      text: "Un mur à rafraîchir, un appartement à rénover ? Parlons-en dès aujourd'hui.",
    },
    contact: {
      label: 'Contact',
      title: 'Parlons de votre projet',
      text: 'Le plus simple : un appel ou un message WhatsApp. Réponse rapide, devis gratuit.',
      callSub: 'Appeler directement',
      whatsappSub: 'Envoyer un message',
      emailSub: 'Écrire un e-mail',
      instagramSub: 'Voir les réalisations',
      zoneLabel: "Zone d'intervention",
      zone: 'Anvers (Antwerpen) & communes environnantes',
      hoursLabel: 'Disponibilité',
      hours: 'Lun – Sam, 8h – 18h',
    },
    footer: {
      tagline:
        'Schilderwerken binnen & buiten — peinture, gyproc, enduits et rénovation à Anvers.',
      navLabel: 'Navigation',
      contactLabel: 'Contact',
      rights: 'Tous droits réservés',
    },
  },

  en: {
    meta: {
      title: 'Raki-Peinture — Painter in Antwerp | Raki Schilderwerken',
      description:
        'Raki Schilderwerken — professional painter in Antwerp. Interior and exterior painting, plasterboard, filling and renovation. Free quote: 0492 65 31 96.',
    },
    brand: 'Painting · Antwerp',
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
      tags: ['Antwerp & surroundings', 'Interior & exterior', 'NL / FR / EN'],
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
        'Clear quote, direct contact, in Dutch, French or English. You talk to the person holding the brush.',
      facts: [
        'Antwerp & surrounding municipalities',
        'Interior & exterior, homes and businesses',
        'Careful work, tidy site',
        'Service in Dutch, French and English',
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
          q: 'Do you work in Dutch, French and English?',
          a: 'Yes, all three. You choose the language that suits you, both in person and on the quote.',
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
