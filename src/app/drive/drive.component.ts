import { Component, DestroyRef, ElementRef, afterNextRender, inject } from '@angular/core';

@Component({
  selector: 'app-drive',
  imports: [],
  templateUrl: './drive.component.html',
  styleUrl: './drive.component.scss'
})
export class DriveComponent {
  private host = inject(ElementRef<HTMLElement>);

  constructor() {
    const destroyRef = inject(DestroyRef);

    // Fallback for browsers without scroll-driven animations: drive the same
    // rise from a rAF-throttled scroll listener.
    afterNextRender(() => {
      if (CSS.supports('animation-timeline: view()')) return;
      if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;

      const root: HTMLElement = this.host.nativeElement;
      const car = root.querySelector<SVGSVGElement>('.car');
      const spins = root.querySelectorAll<SVGElement>('.spin');
      if (!car) return;

      let frame = 0;
      const update = () => {
        frame = 0;
        const r = car.getBoundingClientRect();
        const vh = window.innerHeight;
        const p = Math.min(Math.max((vh - r.top) / (vh + r.height), 0), 1);
        car.style.setProperty('--rise', `${(70 - 120 * p).toFixed(1)}px`);
        spins.forEach(s => s.style.setProperty('--spin', `${(540 * p).toFixed(1)}deg`));
      };
      const onScroll = () => {
        if (!frame) frame = requestAnimationFrame(update);
      };

      window.addEventListener('scroll', onScroll, { passive: true });
      window.addEventListener('resize', onScroll, { passive: true });
      update();
      destroyRef.onDestroy(() => {
        window.removeEventListener('scroll', onScroll);
        window.removeEventListener('resize', onScroll);
        cancelAnimationFrame(frame);
      });
    });
  }
}
