import { Component, HostListener, signal } from '@angular/core';
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

  links = [
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#experience', label: 'Experience' },
    { href: '#stack', label: 'Stack' },
  ];

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled.set(window.scrollY > 24);
  }

  toggle() {
    this.menuOpen.update(v => !v);
  }

  close() {
    this.menuOpen.set(false);
  }
}
