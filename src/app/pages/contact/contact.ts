import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
interface ContactInfo {
  icon: string;
  label: string;
  value: string;
  link?: string;
}
 
interface FAQ {
  question: string;
  answer: string;
  open: boolean;
}
 
@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
    formData = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  };
 
  submitted = false;
  submitting = false;
 
  contactInfo: ContactInfo[] = [
    {
      icon: '📍',
      label: 'Head Office',
      value: '1 Grafton Street, Dublin, Ireland',
    },
    {
      icon: '📞',
      label: 'Phone',
      value: '+94 77 123 4567',
      link: 'tel:+94771234567',
    },
    {
      icon: '✉️',
      label: 'Email',
      value: 'support@drivepro.lk',
      link: 'mailto:support@drivepro.lk',
    },
    {
      icon: '🕐',
      label: 'Working Hours',
      value: 'Mon – Sun: 6:00 AM – 10:00 PM',
    },
  ];
 
  faqs: FAQ[] = [
    {
      question: 'What documents do I need to rent a car?',
      answer:
        'You need a valid national ID or passport, a driving licence (held for at least 1 year), and a credit or debit card for the deposit.',
      open: false,
    },
    {
      question: 'Is fuel included in the rental price?',
      answer:
        'Vehicles are provided with a full tank and must be returned full. If returned with less fuel, a refuelling fee applies.',
      open: false,
    },
    {
      question: 'Can I get door-to-door delivery?',
      answer:
        'Yes — we offer delivery and pickup islandwide. Charges vary by distance from the nearest hub. Contact us for a quote.',
      open: false,
    },
    {
      question: 'What is your cancellation policy?',
      answer:
        'Free cancellation up to 24 hours before pickup. Cancellations within 24 hours incur a one-day rental fee.',
      open: false,
    },
  ];
 
  toggleFaq(faq: FAQ): void {
    faq.open = !faq.open;
  }
 
  onSubmit(): void {
    if (
      !this.formData.name ||
      !this.formData.email ||
      !this.formData.message
    ) {
      return;
    }
    this.submitting = true;
    setTimeout(() => {
      this.submitting = false;
      this.submitted = true;
      this.formData = {
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      };
    }, 1200);
  }
 
  resetForm(): void {
    this.submitted = false;
  }
}
