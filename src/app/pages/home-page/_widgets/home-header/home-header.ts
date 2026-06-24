import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface NavLink {
  href: string;
  label: string;
  active: boolean;
}

@Component({
  selector: 'app-home-header',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './home-header.html',
  styleUrl: './home-header.scss',
})
export class HomeHeader {
  navLinks: NavLink[] = [
    { href: '/process/home', label: 'Home', active: true },
    { href: '/process/fleet', label: 'Fleet', active: false },
    { href: '/process/about', label: 'About', active: false },
    { href: '/process/contact', label: 'Contact', active: false },
  ];

  menuOpen = false;

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }
}
