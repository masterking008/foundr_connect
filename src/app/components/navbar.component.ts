import { Component, HostListener, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../services/auth.service';
import Swal from 'sweetalert2';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translateY(0)',
        opacity: 1
      })),
      state('out', style({
        transform: 'translateY(100%)',
        opacity: 0
      })),
      transition('in => out', animate('400ms cubic-bezier(0.4, 0, 0.2, 1)')),
      transition('out => in', animate('400ms cubic-bezier(0.4, 0, 0.2, 1)'))
    ]),
    trigger('fadeInOut', [
      state('in', style({
        opacity: 1
      })),
      state('out', style({
        opacity: 0,
        visibility: 'hidden'
      })),
      transition('in => out', animate('300ms ease-out')),
      transition('out => in', animate('300ms ease-in'))
    ])
  ],
  template: `<nav
  [ngClass]="{
    'bg-white shadow-lg': isScrolled && !isMenuOpen,
    'bg-slate-800': forceDarkBg,
    'bg-transparent': !isScrolled && !forceDarkBg
  }"
  class="fixed w-dvw z-[1000] "
>
  <div class="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between h-20 ">
      <div class="flex items-center">
        <a href="http://ecell.in/" target="_blank" class="flex-shrink-0 flex items-center">
          <img class="h-12" src="assets/logo.webp" alt="E-Cell Logo" />
        </a>
      </div>

      <!-- Desktop menu -->
      <div
        class="hidden lg:flex items-center justify-center space-x-2 sm:space-x-4 pl-36"
      >
        <a
          routerLink="/"
          routerLinkActive="text-slate-900 bg-slate-100"
          [routerLinkActiveOptions]="{ exact: true }"
          class="px-2 sm:px-3 py-1 sm:py-2 text-md sm:text-md font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition-colors rounded-professional text-center"
          >HOME</a
        >
        <a
          routerLink="/become-mentor"
          routerLinkActive="text-slate-900 bg-slate-100"
          class="px-2 sm:px-3 py-1 sm:py-2 text-md sm:text-md font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition-colors rounded-professional text-center"
          >BECOME A MENTOR</a
        >
        <a
          routerLink="/get-mentor"
          routerLinkActive="text-slate-900 bg-slate-100"
          class="px-2 sm:px-3 py-1 sm:py-2 text-md sm:text-md font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition-colors rounded-professional text-center"
          >GET A MENTOR</a
        >
        <a
          routerLink="/contact"
          routerLinkActive="text-slate-900 bg-slate-100"
          class="px-2 sm:px-3 py-1 sm:py-2 text-md sm:text-md font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition-colors rounded-professional text-center"
          >CONTACT</a
        >
      </div>

      <!-- Authentication buttons -->
      <div class="hidden lg:flex items-center space-x-4">
                <a href="https://forms.gle/v5pYSXXgG5naadg69" target="_blank">

        <button
          *ngIf="!authService.isLoggedIn()"
          class="btn bg-slate-800 text-white hover:bg-slate-700 px-3 sm:px-4 py-1 sm:py-2 text-md sm:text-md font-medium transition-colors rounded-professional border border-slate-300 cursor-pointer"
        >
          MENTOR REGISTRATION
        </button>
                </a>
        <!-- <button
          *ngIf="!authService.isLoggedIn()"
          routerLink="/login"
          class="btn bg-white text-black hover:bg-gray-200 px-3 sm:px-4 py-1 sm:py-2 text-md sm:text-md font-medium transition-colors sharp border border-white cursor-pointer"
        >
          LOGIN
        </button> -->
        <button
          *ngIf="authService.isLoggedIn()"
          routerLink="/profile"
          class="btn bg-slate-800 text-white hover:bg-slate-700 px-3 sm:px-4 py-1 sm:py-2 text-md sm:text-md font-medium transition-colors rounded-professional border border-slate-300 cursor-pointer"
        >
          PROFILE
        </button>
      </div>

      <!-- Mobile menu button -->
      <div class="flex lg:hidden items-center">
        <a href="https://forms.gle/v5pYSXXgG5naadg69" target="_blank">
        <button
          *ngIf="!authService.isLoggedIn()"
          class="btn bg-slate-800 text-white hover:bg-slate-700 px-3 sm:px-4 py-3 sm:py-3 text-md sm:text-md font-medium transition-colors rounded-professional border border-slate-300 cursor-pointer"
        >
          MENTOR REGISTRATION
        </button>
        </a>
        <!-- <button
          *ngIf="!authService.isLoggedIn()"
          routerLink="/login"
          class="btn bg-white text-black hover:bg-gray-200 px-3 sm:px-4 py-1 sm:py-2 text-md sm:text-md font-medium transition-colors sharp border border-white cursor-pointer"
        >
          LOGIN
        </button> -->
        <!-- <button
          *ngIf="authService.isLoggedIn()"
          routerLink="/profile"
          class="btn bg-white text-black hover:bg-gray-200 px-3 sm:px-4 py-1 sm:py-2 text-md sm:text-md font-medium transition-colors sharp border border-white cursor-pointer"
        >
          PROFILE
        </button> -->
        <button
          (click)="toggleMenu()"
          class="inline-flex items-center justify-center p-1 sm:p-2 rounded-md text-slate-700 hover:text-slate-900 focus:outline-none"
        >
          <svg
            *ngIf="!isMenuOpen"
            class="h-8 w-8 ml-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <svg
            *ngIf="isMenuOpen"
            class="h-8 w-8 ml-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>

  <!-- Mobile menu backdrop -->
  <div 
    *ngIf="isMenuOpen" 
    [@fadeInOut]="isMenuOpen ? 'in' : 'out'" 
    (click)="closeMenu()"
    class="fixed inset-0 bg-black/60 backdrop-blur-sm z-[999] lg:hidden">
  </div>

  <!-- Mobile menu modal -->
  <div 
    *ngIf="isMenuOpen"
    [@slideInOut]="isMenuOpen ? 'in' : 'out'" 
    class="fixed bottom-0 left-0 right-0 z-[1001] lg:hidden bg-white shadow-lg rounded-professional rounded-t-xl border-t border-slate-200">
    <div class="flex justify-end px-4 pt-3">
      <!-- Close button -->
      <button >
        (click)="closeMenu()" 
        class="p-2 text-slate-700 hover:text-slate-900 focus:outline-none"
        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
    
    <div class="px-4 pt-2 pb-6 space-y-3">
      <!-- Menu items with cool hover effect -->
      <a
        routerLink="/"
        routerLinkActive="bg-slate-100 text-slate-900"
        [routerLinkActiveOptions]="{ exact: true }"
        (click)="closeMenu()"
        class="block px-4 py-3 text-lg font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition-all duration-300 rounded-professional text-center"
        >HOME</a
      >
      <a
        routerLink="/become-mentor"
        routerLinkActive="bg-slate-100 text-slate-900"
        (click)="closeMenu()"
        class="block px-4 py-3 text-lg font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition-all duration-300 rounded-professional text-center"
        >BECOME A MENTOR</a
      >
      <a
        routerLink="/get-mentor"
        routerLinkActive="bg-slate-100 text-slate-900"
        (click)="closeMenu()"
        class="block px-4 py-3 text-lg font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition-all duration-300 rounded-professional text-center"
        >GET A MENTOR</a
      >
      <a
        routerLink="/contact"
        routerLinkActive="bg-slate-100 text-slate-900"
        (click)="closeMenu()"
        class="block px-4 py-3 text-lg font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition-all duration-300 rounded-professional text-center"
        >CONTACT</a
      >
    </div>
  </div>
</nav>
`,
  styles: []
})
export class NavbarComponent {
  isMenuOpen = false;
  isScrolled = false;
  @Input() forceDarkBg = false;

  constructor(public authService: AuthService) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 20;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    if (this.isMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }

  closeMenu() {
    this.isMenuOpen = false;
    document.body.classList.remove('overflow-hidden');
  }

  login(){
    Swal.fire({
      title: 'Dashboard',
      text: 'Coming soon!',
      icon: 'info',
      confirmButtonText: 'OK'
    });
  }
}