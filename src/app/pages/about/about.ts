import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
interface TeamMember {
  name: string;
  role: string;
  initials: string;
}
 
interface Stat {
  value: string;
  label: string;
}
 
interface Value {
  icon: string;
  title: string;
  description: string;
}
@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  stats: Stat[] = [
    { value: '120+', label: 'Vehicles Available' },
    { value: '8', label: 'Pickup Locations' },
    { value: '15k+', label: 'Happy Customers' },
    { value: '24/7', label: 'Roadside Support' },
  ];
 
  values: Value[] = [
    {
      icon: '🛡️',
      title: 'Safety First',
      description:
        'Every vehicle undergoes rigorous safety checks before hitting the road. Your peace of mind is our top priority.',
    },
    {
      icon: '💰',
      title: 'Transparent Pricing',
      description:
        'No hidden fees, no surprises. What you see is what you pay — always.',
    },
    {
      icon: '🌍',
      title: 'Island-Wide Reach',
      description:
        'From Colombo to Jaffna, our fleet and support network spans the entire island of Sri Lanka.',
    },
    {
      icon: '⚡',
      title: 'Fast & Easy Booking',
      description:
        'Reserve your vehicle in under two minutes, with instant confirmation and flexible pickup options.',
    },
  ];
 
  team: TeamMember[] = [
    { name: 'Kamal Perera', role: 'Founder & CEO', initials: 'KP' },
    { name: 'Nisha Fernando', role: 'Head of Operations', initials: 'NF' },
    { name: 'Dilshan Jayawardena', role: 'Fleet Manager', initials: 'DJ' },
  ];
}
