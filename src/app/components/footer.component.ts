import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="poppins bg-slate-50 ">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      

        <!-- Bottom Section -->
        <div class=" py-12">
          <div class="flex flex-col lg:flex-row justify-center items-center">
            
            <!-- Contact -->

            <div class="text-slate-800 text-sm text-center">
              © 2025 All Rights Reserved Startup Mentorship Portal
            </div>
 
          </div>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {}
