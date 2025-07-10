import { Component, ElementRef, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
<section class="hero relative text-slate-800 min-h-screen flex items-center justify-center overflow-hidden ">

    <div class="absolute inset-0">
        <img src="assets/hero.jpg" alt="Get a Mentor" class="w-full h-full object-cover blur-sm scale-110" />
    <div class="absolute inset-0 bg-slate-900 opacity-30"></div>
  </div>

  <div class="container mx-auto px-4 z-10 flex flex-col justify-center items-center">
      <img src="assets/logofc.png" alt="FC Logo" class="h-72 lg:h-96 w-auto drop-shadow-lg object-contain invert" draggable="false"/>
      <div class="flex flex-wrap gap-4 justify-center">
        <!-- <a class="btn bg-slate-800 text-white hover:bg-slate-700 px-8 py-3 font-medium text-lg transition-colors shadow-lg rounded-professional border border-slate-300" (click)="login()">LOGIN</a> -->
        <a routerLink="/become-mentor" class="btn bg-white text-slate-800 border border-slate-300 hover:bg-slate-50 hover:text-slate-900 px-8 py-3 font-medium text-lg transition-colors shadow-lg rounded-professional">BECOME A MENTOR</a>
      </div>
  </div>
</section>
`,
  styles: []
})
export class HeroSectionComponent implements AfterViewInit, OnInit {
  @ViewChild('heroVideo') heroVideo!: ElementRef<HTMLVideoElement>;
  
  ngOnInit() {
    // Use only link preload - more efficient than creating a video element
    if (typeof document !== 'undefined') {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = 'https://2k21.s3.ap-south-1.amazonaws.com/emn/Hero.mp4';
      link.as = 'video';
      document.head.appendChild(link);
    }
  }

  ngAfterViewInit() {
    const video = this.heroVideo.nativeElement;
    
    // Ensure video is muted (critical for autoplay)
    video.muted = true;
    
    // Single play attempt with fallback
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // If autoplay fails, try once on user interaction
        document.addEventListener('click', () => {
          video.play();
        }, { once: true });
      });
    }
  }

  login() {
    Swal.fire({
      title: 'Dashboard Coming Soon',
      icon: 'info',
      confirmButtonText: 'OK'
    });
    // window.location.href = '/emn/login';
  }
}
