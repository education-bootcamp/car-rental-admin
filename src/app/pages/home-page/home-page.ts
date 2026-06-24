import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
interface Vehicle {
  id: number;
  name: string;
  category: string;
  seats: number;
  transmission: 'Automatic' | 'Manual';
  pricePerDay: number;
  badge?: string;
}
 
interface Step {
  icon: string;
  title: string;
  description: string;
}
@Component({
  selector: 'app-home-page',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {
  // ── Hero search form ──────────────────────────────────────────────────────
  search = {
    pickupLocation: '',
    pickupDate: '',
    returnDate: '',
  };
 
  onSearch(): void {
    console.log('Search submitted', this.search);
    // navigate to /vehicles with query params
  }
 
  // ── Stats ─────────────────────────────────────────────────────────────────
  stats = [
    { value: '120+', label: 'Vehicles available' },
    { value: '8', label: 'Pickup locations' },
    { value: '15k+', label: 'Happy customers' },
    { value: '24/7', label: 'Roadside support' },
  ];
 
  // ── How it works ──────────────────────────────────────────────────────────
  steps: Step[] = [
    {
      icon: 'search',
      title: 'Choose your vehicle',
      description: 'Browse our fleet by category, size, or budget and pick what suits your trip.',
    },
    {
      icon: 'calendar',
      title: 'Book your dates',
      description: 'Select pickup and return dates, add extras like GPS or a child seat.',
    },
    {
      icon: 'key',
      title: 'Pick up & drive',
      description: 'Collect the keys at any of our 8 island-wide locations and hit the road.',
    },
  ];
 
  // ── Featured vehicles ─────────────────────────────────────────────────────
  vehicles: Vehicle[] = [
    {
      id: 1,
      name: 'Toyota Aqua',
      category: 'Hatchback',
      seats: 5,
      transmission: 'Automatic',
      pricePerDay: 5500,
      badge: 'Most popular',
    },
    {
      id: 2,
      name: 'Honda Vezel',
      category: 'SUV',
      seats: 5,
      transmission: 'Automatic',
      pricePerDay: 8500,
    },
    {
      id: 3,
      name: 'Suzuki Alto',
      category: 'Economy',
      seats: 4,
      transmission: 'Manual',
      pricePerDay: 3800,
      badge: 'Best value',
    },
    {
      id: 4,
      name: 'Toyota KlugerV',
      category: 'MPV',
      seats: 8,
      transmission: 'Automatic',
      pricePerDay: 11500,
    },
  ];
 
  formatPrice(price: number): string {
    return `LKR ${price.toLocaleString('en-LK')}`;
  }
}