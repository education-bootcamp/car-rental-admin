import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
export interface Vehicle {
  id: number;
  name: string;
  category: 'Economy' | 'Hatchback' | 'Sedan' | 'SUV' | 'MPV' | 'Luxury';
  seats: number;
  transmission: 'Automatic' | 'Manual';
  fuel: 'Petrol' | 'Diesel' | 'Hybrid' | 'Electric';
  pricePerDay: number;
  available: boolean;
  badge?: string;
}
 
@Component({
  selector: 'app-fleet',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './fleet.html',
  styleUrl: './fleet.scss',
})
export class Fleet {
   // ── Filter state ──────────────────────────────────────────────────────────
  searchQuery = signal('');
  selectedCategory = signal('All');
  selectedTransmission = signal('All');
  selectedFuel = signal('All');
  maxPrice = signal(15000);
  sortBy = signal('price-asc');
 
  categories = ['All', 'Economy', 'Hatchback', 'Sedan', 'SUV', 'MPV', 'Luxury'];
  transmissions = ['All', 'Automatic', 'Manual'];
  fuels = ['All', 'Petrol', 'Diesel', 'Hybrid', 'Electric'];
 
  sortOptions = [
    { value: 'price-asc',  label: 'Price: Low to High' },
    { value: 'price-desc', label: 'Price: High to Low' },
    { value: 'name-asc',   label: 'Name: A–Z' },
    { value: 'seats-desc', label: 'Most Seats' },
  ];
 
  // ── Raw data ──────────────────────────────────────────────────────────────
  allVehicles: Vehicle[] = [
    { id: 1,  name: 'Suzuki Alto',        category: 'Economy',  seats: 4, transmission: 'Manual',    fuel: 'Petrol',   pricePerDay: 3800, available: true,  badge: 'Best value' },
    { id: 2,  name: 'Toyota Aqua',        category: 'Hatchback',seats: 5, transmission: 'Automatic', fuel: 'Hybrid',   pricePerDay: 5500, available: true,  badge: 'Most popular' },
    { id: 3,  name: 'Honda Fit',          category: 'Hatchback',seats: 5, transmission: 'Automatic', fuel: 'Petrol',   pricePerDay: 5000, available: true  },
    { id: 4,  name: 'Toyota Axio',        category: 'Sedan',    seats: 5, transmission: 'Automatic', fuel: 'Petrol',   pricePerDay: 5800, available: true  },
    { id: 5,  name: 'Honda Grace',        category: 'Sedan',    seats: 5, transmission: 'Automatic', fuel: 'Hybrid',   pricePerDay: 6500, available: false },
    { id: 6,  name: 'Toyota Premio',      category: 'Sedan',    seats: 5, transmission: 'Automatic', fuel: 'Petrol',   pricePerDay: 7200, available: true  },
    { id: 7,  name: 'Honda Vezel',        category: 'SUV',      seats: 5, transmission: 'Automatic', fuel: 'Hybrid',   pricePerDay: 8500, available: true  },
    { id: 8,  name: 'Toyota RAV4',        category: 'SUV',      seats: 5, transmission: 'Automatic', fuel: 'Petrol',   pricePerDay: 9800, available: true  },
    { id: 9,  name: 'Mitsubishi Outlander',category: 'SUV',     seats: 7, transmission: 'Automatic', fuel: 'Petrol',   pricePerDay: 10500,available: false },
    { id: 10, name: 'Toyota KlugerV',     category: 'MPV',      seats: 8, transmission: 'Automatic', fuel: 'Petrol',   pricePerDay: 11500,available: true  },
    { id: 11, name: 'Toyota Hiace',       category: 'MPV',      seats: 10,transmission: 'Manual',    fuel: 'Diesel',   pricePerDay: 13000,available: true  },
    { id: 12, name: 'Mercedes E-Class',   category: 'Luxury',   seats: 5, transmission: 'Automatic', fuel: 'Petrol',   pricePerDay: 22000,available: true,  badge: 'Premium' },
    { id: 13, name: 'BMW 5 Series',       category: 'Luxury',   seats: 5, transmission: 'Automatic', fuel: 'Petrol',   pricePerDay: 24000,available: false, badge: 'Premium' },
    { id: 14, name: 'Nissan Leaf',        category: 'Hatchback',seats: 5, transmission: 'Automatic', fuel: 'Electric', pricePerDay: 6800, available: true,  badge: 'Eco' },
  ];
 
  // ── Derived filtered + sorted list ────────────────────────────────────────
  filteredVehicles = computed(() => {
    const q     = this.searchQuery().toLowerCase();
    const cat   = this.selectedCategory();
    const trans = this.selectedTransmission();
    const fuel  = this.selectedFuel();
    const max   = this.maxPrice();
    const sort  = this.sortBy();
 
    let list = this.allVehicles.filter(v => {
      if (q && !v.name.toLowerCase().includes(q)) return false;
      if (cat   !== 'All' && v.category       !== cat)   return false;
      if (trans !== 'All' && v.transmission   !== trans) return false;
      if (fuel  !== 'All' && v.fuel           !== fuel)  return false;
      if (v.pricePerDay > max) return false;
      return true;
    });
 
    list = [...list].sort((a, b) => {
      switch (sort) {
        case 'price-asc':  return a.pricePerDay - b.pricePerDay;
        case 'price-desc': return b.pricePerDay - a.pricePerDay;
        case 'name-asc':   return a.name.localeCompare(b.name);
        case 'seats-desc': return b.seats - a.seats;
        default: return 0;
      }
    });
 
    return list;
  });
 
  activeFilterCount = computed(() => {
    let count = 0;
    if (this.selectedCategory()     !== 'All')   count++;
    if (this.selectedTransmission() !== 'All')   count++;
    if (this.selectedFuel()         !== 'All')   count++;
    if (this.maxPrice()             < 15000)     count++;
    if (this.searchQuery().trim()   !== '')      count++;
    return count;
  });
 
  // ── Helpers ───────────────────────────────────────────────────────────────
  formatPrice(price: number): string {
    return `LKR ${price.toLocaleString('en-LK')}`;
  }
 
  clearFilters(): void {
    this.searchQuery.set('');
    this.selectedCategory.set('All');
    this.selectedTransmission.set('All');
    this.selectedFuel.set('All');
    this.maxPrice.set(15000);
  }
 
  fuelIcon(fuel: string): string {
    const map: Record<string, string> = {
      Petrol: '⛽', Diesel: '🛢️', Hybrid: '♻️', Electric: '⚡'
    };
    return map[fuel] ?? '⛽';
  }
}
