import { Component, DestroyRef, ElementRef, afterNextRender, inject } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { MainContentComponent } from './main-content/main-content.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { ServicesComponent } from './services/services.component';
import { ProjectsComponent } from './projects/projects.component';
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
    ProjectsComponent,
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
      const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
      const finePointer = matchMedia('(hover: hover) and (pointer: fine)').matches;
      const interactive = finePointer && !reducedMotion;

      // Reveal elements (and count up stats) as they scroll into view.
      const observer = new IntersectionObserver(entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            entry.target.querySelectorAll<HTMLElement>('[data-count]').forEach(el => {
              if (!reducedMotion) countUp(el);
            });
            observer.unobserve(entry.target);
          }
        }
      }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
      root.querySelectorAll('.reveal, .mask').forEach(el => observer.observe(el));

      let magnet: HTMLElement | null = null;
      let tilt: HTMLElement | null = null;

      const release = (el: HTMLElement | null, props: string[], cls: string) => {
        if (!el) return;
        el.classList.remove(cls);
        props.forEach(p => el.style.removeProperty(p));
      };

      const onPointerMove = (e: PointerEvent) => {
        cursor?.style.setProperty('transform', `translate(${e.clientX}px, ${e.clientY}px)`);
        const target = e.target as Element | null;

        // Mouse-tracked spotlight on cards.
        const card = target?.closest?.<HTMLElement>('.spotlight');
        if (card) {
          const r = card.getBoundingClientRect();
          card.style.setProperty('--mx', `${e.clientX - r.left}px`);
          card.style.setProperty('--my', `${e.clientY - r.top}px`);
        }
        if (!interactive) return;

        // Buttons lean slightly toward the pointer.
        const btn = target?.closest?.<HTMLElement>('[data-magnetic]') ?? null;
        if (btn !== magnet) release(magnet, ['--tx', '--ty'], 'is-magnetic');
        magnet = btn;
        if (btn) {
          const r = btn.getBoundingClientRect();
          btn.classList.add('is-magnetic');
          btn.style.setProperty('--tx', `${((e.clientX - r.left - r.width / 2) * 0.18).toFixed(1)}px`);
          btn.style.setProperty('--ty', `${((e.clientY - r.top - r.height / 2) * 0.3).toFixed(1)}px`);
        }

        // Cards tilt a few degrees toward the pointer.
        const tiltEl = target?.closest?.<HTMLElement>('[data-tilt]') ?? null;
        if (tiltEl !== tilt) release(tilt, ['--rx', '--ry'], 'is-tilting');
        tilt = tiltEl;
        if (tiltEl) {
          const r = tiltEl.getBoundingClientRect();
          const px = (e.clientX - r.left) / r.width - 0.5;
          const py = (e.clientY - r.top) / r.height - 0.5;
          tiltEl.classList.add('is-tilting');
          tiltEl.style.setProperty('--rx', `${(-py * 5).toFixed(2)}deg`);
          tiltEl.style.setProperty('--ry', `${(px * 5).toFixed(2)}deg`);
        }
      };

      const onPointerLeave = () => {
        release(magnet, ['--tx', '--ty'], 'is-magnetic');
        release(tilt, ['--rx', '--ry'], 'is-tilting');
        magnet = tilt = null;
      };

      // Scroll progress bar.
      const onScroll = () => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        progress?.style.setProperty('transform', `scaleX(${max > 0 ? window.scrollY / max : 0})`);
      };

      window.addEventListener('pointermove', onPointerMove, { passive: true });
      document.documentElement.addEventListener('pointerleave', onPointerLeave);
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();

      destroyRef.onDestroy(() => {
        observer.disconnect();
        window.removeEventListener('pointermove', onPointerMove);
        document.documentElement.removeEventListener('pointerleave', onPointerLeave);
        window.removeEventListener('scroll', onScroll);
      });
    });
  }
}

/** Animates the number inside text like "10+" or "−20%" from 0 up to its value. */
function countUp(el: HTMLElement) {
  const text = el.textContent?.trim() ?? '';
  const match = text.match(/^(\D*)(\d+)(\D*)$/);
  if (!match) return;
  const [, prefix, digits, suffix] = match;
  const target = Number(digits);
  const duration = 1400;
  const start = performance.now();
  const frame = (now: number) => {
    const t = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - t, 4);
    el.textContent = `${prefix}${Math.round(target * eased)}${suffix}`;
    if (t < 1) requestAnimationFrame(frame);
  };
  requestAnimationFrame(frame);
}
