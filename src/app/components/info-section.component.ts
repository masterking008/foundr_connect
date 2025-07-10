import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-info-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-16 bg-slate-50 rounded-professional relative">
     
      <div class="container mx-auto px-4 relative ">
        <div class="max-w-5xl mx-auto text-center">
          <h2 class="text-5xl md:text-7xl font-bold mb-8 text-slate-800">
            What is foundr connect?
          </h2>

          <p class="text-lg md:text-2xl text-slate-700 leading-relaxed">
            foundr connect is a platform that connects
            early-stage start-ups with experienced mentors to provide strategic
            guidance, industry insights and hands-on support. It helps founders
            refine ideas, solve challenges and grow faster, with the right
            people by their side.
          </p>
        </div>
      </div>
    </section>
  `,
  styles: [],
})
export class InfoSectionComponent {}
