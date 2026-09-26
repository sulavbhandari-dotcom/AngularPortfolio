import { Component, DestroyRef, ElementRef, HostListener, afterNextRender, inject, signal } from '@angular/core';
import { PROFILE } from '../data/profile';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  profile = PROFILE;
  menuOpen = signal(false);
  scrolled = signal(false);
  active = signal('');
  pill = signal<{ x: number; w: number } | null>(null);

  links = [
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#experience', label: 'Experience' },
    { href: '#stack', label: 'Stack' },
  ];

  private host = inject(ElementRef<HTMLElement>);

  constructor() {
    const destroyRef = inject(DestroyRef);

    // Highlight the link for whichever section is in the middle of the viewport.
    afterNextRender(() => {
      const observer = new IntersectionObserver(entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) this.setActive('#' + entry.target.id);
        }
      }, { rootMargin: '-45% 0px -50% 0px' });

      const ids = ['top', ...this.links.map(l => l.href.slice(1)), 'contact'];
      ids.forEach(id => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      });
      destroyRef.onDestroy(() => observer.disconnect());
    });
  }

  private setActive(href: string) {
    this.active.set(href);
    const link = this.host.nativeElement.querySelector(`.links a[href="${href}"]:not(.btn)`) as HTMLElement | null;
    this.pill.set(link ? { x: link.offsetLeft, w: link.offsetWidth } : null);
  }

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled.set(window.scrollY > 24);
  }

  @HostListener('window:resize')
  onResize() {
    if (this.active()) this.setActive(this.active());
  }

  toggle() {
    this.menuOpen.update(v => !v);
  }

  close() {
    this.menuOpen.set(false);
  }
}
