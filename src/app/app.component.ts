import { Component, DestroyRef, ElementRef, afterNextRender, inject } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { MainContentComponent } from './main-content/main-content.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { ServicesComponent } from './services/services.component';
import { DriveComponent } from './drive/drive.component';
import { ExperienceComponent } from './experience/experience.component';
import { StackComponent } from './stack/stack.component';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    MainContentComponent,
    IntroductionComponent,
    ServicesComponent,
    DriveComponent,
    ExperienceComponent,
    StackComponent,
    ContactComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private host = inject(ElementRef<HTMLElement>);

  constructor() {
    const destroyRef = inject(DestroyRef);

    // Browser-only effects; skipped during prerendering.
    afterNextRender(() => {
      const root: HTMLElement = this.host.nativeElement;
      const progress = root.querySelector<HTMLElement>('.progress');
      const cursor = root.querySelector<HTMLElement>('.cursor');

      // Reveal elements as they scroll into view.
      const observer = new IntersectionObserver(entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        }
      }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
      root.querySelectorAll('.reveal').forEach(el => observer.observe(el));

      // Mouse-tracked spotlight on cards + cursor glow.
      const onPointerMove = (e: PointerEvent) => {
        cursor?.style.setProperty('transform', `translate(${e.clientX}px, ${e.clientY}px)`);
        const card = (e.target as Element | null)?.closest?.<HTMLElement>('.spotlight');
        if (card) {
          const r = card.getBoundingClientRect();
          card.style.setProperty('--mx', `${e.clientX - r.left}px`);
          card.style.setProperty('--my', `${e.clientY - r.top}px`);
        }
      };

      // Scroll progress bar.
      const onScroll = () => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        progress?.style.setProperty('transform', `scaleX(${max > 0 ? window.scrollY / max : 0})`);
      };

      window.addEventListener('pointermove', onPointerMove, { passive: true });
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();

      destroyRef.onDestroy(() => {
        observer.disconnect();
        window.removeEventListener('pointermove', onPointerMove);
        window.removeEventListener('scroll', onScroll);
      });
    });
  }
}
