import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  Inject,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';

import { CONTENT, Dict, Lang, LANGS } from './content';

interface ServiceMeta {
  color: string;
  icon: string;
}
interface StepMeta {
  icon: string;
}

const LANG_KEY = 'raki-lang';
const PHONE_INTL = '+32492653196';
const WHATSAPP = 'https://wa.me/32492653196';
const EMAIL = 'schilderwerkenraki@gmail.com';
const INSTAGRAM = 'https://instagram.com/raki_schilderwerken';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('bg') bgRef?: ElementRef<HTMLElement>;
  @ViewChild('host') hostRef?: ElementRef<HTMLElement>;

  readonly phoneHref = 'tel:' + PHONE_INTL;
  readonly whatsappHref = WHATSAPP;
  readonly emailHref = 'mailto:' + EMAIL;
  readonly email = EMAIL;
  readonly instagramHref = INSTAGRAM;
  readonly instagramHandle = '@raki_schilderwerken';
  readonly year = new Date().getFullYear();

  readonly langs = LANGS;

  lang: Lang = 'nl';
  menuOpen = false;
  scrolled = false;
  openFaq = 0;

  form = { name: '', phone: '', service: '', message: '' };

  /** couleur d'accent + tracé d'icône par service (dans l'ordre du contenu) */
  readonly services: ServiceMeta[] = [
    { color: '#e2402f', icon: 'M3 21h18M5 21V10l7-6 7 6v11M9 21v-6h6v6' },
    { color: '#4180c6', icon: 'M4 4h16v16H4zM4 10h16M10 4v16' },
    { color: '#5aa94c', icon: 'M14 3l7 7-11 11-7-7zM4 20l-1 1M11 6l7 7' },
    { color: '#d8a441', icon: 'M3 21h18M6 21V8l6-5 6 5v13M10 21v-5h4v5' },
  ];

  readonly steps: StepMeta[] = [
    { icon: 'M4 7h10M4 12h16M4 17h7M17 15l3 3-3 3' },
    { icon: 'M3 21h18M6 21V9l6-4 6 4v12M10 13h4' },
    { icon: 'M12 3v4M5 10l-2 2 2 2M19 10l2 2-2 2M9 21l3-14 3 14' },
    { icon: 'M20 7L10 17l-5-5' },
  ];

  readonly swatchColors = ['#ece5d8', '#8f8578', '#9aa886', '#2b3a5c', '#b5603f', '#35373a'];

  private pointerRaf = 0;
  private io?: IntersectionObserver;
  private mql?: MediaQueryList;

  constructor(
    private titleSvc: Title,
    private meta: Meta,
    @Inject(DOCUMENT) private doc: Document,
  ) {}

  get t(): Dict {
    return CONTENT[this.lang];
  }

  get reducedMotion(): boolean {
    return !!this.mql && this.mql.matches;
  }

  ngOnInit(): void {
    this.mql = window.matchMedia('(prefers-reduced-motion: reduce)');
    let stored: string | null = null;
    try {
      stored = localStorage.getItem(LANG_KEY);
    } catch {
      /* localStorage indisponible */
    }
    const known = LANGS.find((l) => l === stored);
    this.setLang(known ?? 'nl', false);
  }

  ngAfterViewInit(): void {
    this.setupReveal();
  }

  ngOnDestroy(): void {
    this.io?.disconnect();
    if (this.pointerRaf) {
      cancelAnimationFrame(this.pointerRaf);
    }
  }

  setLang(lang: Lang, persist = true): void {
    this.lang = lang;
    const d = CONTENT[lang];
    this.doc.documentElement.lang = lang;
    this.titleSvc.setTitle(d.meta.title);
    this.meta.updateTag({ name: 'description', content: d.meta.description });
    this.meta.updateTag({ property: 'og:title', content: d.meta.title });
    this.meta.updateTag({ property: 'og:description', content: d.meta.description });
    if (persist) {
      try {
        localStorage.setItem(LANG_KEY, lang);
      } catch {
        /* ignore */
      }
    }
  }

  toggleMenu(open?: boolean): void {
    this.menuOpen = open ?? !this.menuOpen;
    this.doc.body.style.overflow = this.menuOpen ? 'hidden' : '';
  }

  toggleFaq(i: number): void {
    this.openFaq = this.openFaq === i ? -1 : i;
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled = window.scrollY > 24;
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.menuOpen) {
      this.toggleMenu(false);
    }
  }

  @HostListener('document:pointermove', ['$event'])
  onPointerMove(ev: PointerEvent): void {
    if (this.reducedMotion || !this.bgRef) {
      return;
    }
    const nx = (ev.clientX / window.innerWidth - 0.5) * 2;
    const ny = (ev.clientY / window.innerHeight - 0.5) * 2;
    if (this.pointerRaf) {
      return;
    }
    this.pointerRaf = requestAnimationFrame(() => {
      this.pointerRaf = 0;
      const el = this.bgRef?.nativeElement;
      if (el) {
        el.style.transform = `translate3d(${nx * -14}px, ${ny * -14}px, 0)`;
      }
    });
  }

  submitQuote(): void {
    const name = this.form.name.trim();
    const message = this.form.message.trim();
    if (!name || !message) {
      return;
    }
    const q = this.t.quote;
    const subject = q.mailSubject + name;
    const lines = [
      q.name + ' : ' + name,
      q.phone + ' : ' + (this.form.phone.trim() || '-'),
      q.service + ' : ' + (this.form.service || '-'),
      '',
      q.message + ' :',
      message,
    ];
    const href =
      'mailto:' +
      EMAIL +
      '?subject=' +
      encodeURIComponent(subject) +
      '&body=' +
      encodeURIComponent(lines.join('\n'));
    window.location.href = href;
  }

  private setupReveal(): void {
    const root = this.hostRef?.nativeElement ?? this.doc.body;
    const items = Array.from(root.querySelectorAll<HTMLElement>('.reveal'));
    if (this.reducedMotion || !('IntersectionObserver' in window)) {
      items.forEach((el) => el.classList.add('in'));
      return;
    }
    this.io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            this.io?.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    );
    items.forEach((el) => this.io?.observe(el));
  }
}
