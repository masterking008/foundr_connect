import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-objectives',
  standalone: true,
  imports: [CommonModule],
  template: `
<!-- Objectives of SMP Section -->
<section class="py-16 bg-slate-50 rounded-professional relative overflow-hidden">
  <!-- Video Background -->
  <!-- <video
    src="https://2k21.s3.ap-south-1.amazonaws.com/emn/Bottom.mp4"
    autoplay
    muted
    loop
    playsinline
    class="absolute bottom-0 w-full object-cover z-0"
    style="pointer-events: none"
  ></video> -->

  <!-- Overlay for readability -->
  <div class="absolute inset-0 z-10"></div>
  <div class="container mx-auto px-4 relative z-20">
    <div class=" mb-12">
      <h2 class="text-5xl md:text-7xl font-bold mb-8 text-slate-800 text-center">
        Objectives of foundr connect
      </h2>
      <div class="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          class="bg-white/90 backdrop-blur-sm p-8 transform transition duration-300 relative rounded-professional border border-slate-200 shadow-sm"
        >
          <div class="absolute -top-2 -right-2 w-16 h-16 bg-slate-200 rounded-professional"></div>
          <div class="relative z-10">
            <span class="text-4xl font-bold text-slate-800 mb-4 block">01</span>
            <p class="text-lg text-slate-700">
              Offer continuous guidance and support to early-stage startups from
              ideation to scaling.
            </p>
          </div>
        </div>
        <div
          class="bg-white/90 backdrop-blur-sm p-8 relative transform transition duration-300 rounded-professional border border-slate-200 shadow-sm"
        >
          <div class="absolute -top-2 -right-2 w-16 h-16 bg-slate-200 rounded-professional"></div>
          <div class="relative z-10">
            <span class="text-4xl font-bold text-slate-800 mb-4 block">02</span>
            <p class="text-lg text-slate-700">
              Establish a structured, intelligent platform for seamless
              mentor–startup matchmaking across industries.
            </p>
          </div>
        </div>
        <div
          class="bg-white/90 backdrop-blur-sm p-8 transform transition duration-300 relative rounded-professional border border-slate-200 shadow-sm"
        >
          <div class="absolute -top-2 -right-2 w-16 h-16 bg-slate-200 rounded-professional"></div>
          <div class="relative z-10">
            <span class="text-4xl font-bold text-slate-800 mb-4 block">03</span>
            <p class="text-lg text-slate-700">
              Implement a result-driven framework to track mentorship outcomes
              and measure startup progress.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  `,
  styles: [],
})
export class ObjectivesComponent {}
