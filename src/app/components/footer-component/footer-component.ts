import { Component } from '@angular/core';
 import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
interface FooterLink {
  label: string;
  route: string;
}
 
interface FooterSection {
  heading: string;
  links: FooterLink[];
}
 
@Component({
  selector: 'app-footer-component',
  imports: [CommonModule, RouterModule],
  templateUrl: './footer-component.html',
  styleUrl: './footer-component.scss',
})
export class FooterComponent {
  readonly brandName = 'Car Rental';
  readonly tagline = 'Drive your journey, your way.';
  readonly currentYear = new Date().getFullYear();
 
  readonly sections: FooterSection[] = [
    {
      heading: 'Quick Links',
      links: [
        { label: 'Browse Vehicles', route: '/vehicles' },
        { label: 'Make a Reservation', route: '/reservations/new' },
        { label: 'My Bookings', route: '/bookings' },
        { label: 'Pricing & Plans', route: '/pricing' },
      ],
    },
    {
      heading: 'Support',
      links: [
        { label: 'Help Center', route: '/help' },
        { label: 'Contact Us', route: '/contact' },
        { label: 'Terms & Conditions', route: '/terms' },
        { label: 'Privacy Policy', route: '/privacy' },
      ],
    },
  ];
 
  readonly contactDetails = [
    { icon: 'phone', text: '+94 11 234 5678' },
    { icon: 'mail', text: 'support@carrental.lk' },
    { icon: 'map-pin', text: 'Colombo 03, Sri Lanka' },
  ];
}
