import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl border border-gray-100 text-center transform transition-all duration-300 hover:-translate-y-1 min-h-[450px]">
      <img [src]="image" [alt]="name" class="w-50 h-50 mx-auto mb-6 object-cover rounded-full shadow-md hover:scale-105 transition-transform duration-300" draggable="false">
      <h3 class="text-2xl md:text-3xl font-bold text-gray-800 mb-2">{{ name }}</h3>
      <p class="text-lg md:text-xl text-gray-600 mb-4">{{ position }}</p>
      <div class="flex justify-center gap-8">
        <a [href]="'mailto:' + email" class="text-gray-700 hover:text-blue-600 transition-colors duration-300" target="_blank">
          <i class="fa fa-envelope text-2xl"></i>
        </a>
        <a [href]="'https://wa.me/+91' + phone" class="text-gray-700 hover:text-green-600 transition-colors duration-300" target="_blank">
          <i class="fab fa-whatsapp text-2xl"></i>
        </a>
        <a [href]="linkedin" class="text-gray-700 hover:text-blue-800 transition-colors duration-300" target="_blank">
          <i class="fab fa-linkedin text-2xl"></i>
        </a>
      </div>
    </div>
  `,
  styles: []
})
export class ContactCardComponent {
  @Input() name: string = '';
  @Input() position: string = '';
  @Input() email: string = '';
  @Input() phone: string = '';
  @Input() image: string = '';
  @Input() linkedin: string = '';
}
