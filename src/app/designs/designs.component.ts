import { Component, ElementRef, computed, signal, viewChild } from '@angular/core';
import { Design, DesignCategory, PROFILE } from '../data/profile';

const CATEGORY_ORDER: DesignCategory[] = ['Mobile', 'Web', 'Branding', 'Visual'];

@Component({
  selector: 'app-designs',
  imports: [],
  templateUrl: './designs.component.html',
  styleUrl: './designs.component.scss'
})
export class DesignsComponent {
  designs = PROFILE.designs;
  categories = CATEGORY_ORDER.filter(c => this.designs.some(d => d.category === c));

  filter = signal<DesignCategory | 'All'>('All');
  visible = computed(() => {
    const f = this.filter();
    return f === 'All' ? this.designs : this.designs.filter(d => d.category === f);
  });

  openIndex = signal<number | null>(null);
  long = signal(false);
  current = computed(() => {
    const i = this.openIndex();
    return i === null ? null : this.visible()[i];
  });

  private dialog = viewChild.required<ElementRef<HTMLDialogElement>>('dialog');

  setFilter(f: DesignCategory | 'All') {
    this.filter.set(f);
  }

  open(i: number) {
    this.openIndex.set(i);
    this.dialog().nativeElement.showModal();
  }

  close() {
    this.dialog().nativeElement.close();
  }

  onClosed() {
    this.openIndex.set(null);
    this.long.set(false);
  }

  step(delta: number) {
    const i = this.openIndex();
    if (i === null) return;
    const n = this.visible().length;
    this.long.set(false);
    this.openIndex.set((i + delta + n) % n);
    this.dialog().nativeElement.scrollTop = 0;
  }

  // Full-page designs are shown at readable width and scroll, instead of shrinking to fit.
  onImageLoad(e: Event) {
    const img = e.target as HTMLImageElement;
    this.long.set(img.naturalHeight / img.naturalWidth > 1.6);
  }

  onKey(e: KeyboardEvent) {
    if (e.key === 'ArrowRight') this.step(1);
    else if (e.key === 'ArrowLeft') this.step(-1);
  }

  onBackdrop(e: MouseEvent) {
    if (e.target === e.currentTarget) this.close();
  }

  shapeOf(d: Design) {
    return d.shape ?? 'square';
  }
}
