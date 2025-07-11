import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../../components/navbar.component';
import { FooterComponent } from '../../components/footer.component';
import { ContactCardComponent } from '../../components/contact-card.component';
import { ApiService, ContactProfile } from '../../services/api.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    NavbarComponent,
    FooterComponent,
    ContactCardComponent,
  ],
  templateUrl: './contact.component.html',
})
export class ContactComponent implements OnInit {
  teamMembers: ContactProfile[] = [];
  loading = true;

  // Hardcoded contact data
  mockContacts: ContactProfile[] = [
    {
      id: 2, 
      name: 'Rohit Sharma',
      email: 'iitbrohitsharma@gmail.com',
      position: 'Founder & Executive Director',
      phone: '8058352005',
      linkedin: 'https://www.linkedin.com/in/rohitsharma005/',
      profile_pic: 'assets/rohit.jpeg'
    },
        {
      id: 4,
      name: 'Mrunal Pachpande',
      email: 'mpachpande28@gmail.com',
      position: 'Cheif Operating Officer',
      phone: '8788331620',
      linkedin: 'https://linkedin.com/in/mrunal-pachpande',
      profile_pic: 'assets/mrunal.jpeg'
    },
        {
      id: 1,
      name: 'Priyanshu Gehlot',
      email: 'priyanshugehlot011@gmail.com',
      position: 'Chief Executive Officer',
      phone: '6376161627',
      linkedin: 'https://www.linkedin.com/in/priyanshu-gehlot-pghlt/',
      profile_pic: 'assets/priyanshu.jpeg'
    },

    // {
    //   id: 3, 
    //   name: 'Dinesh Sahu',
    //   email: 'masterking008@gmail.com',
    //   position: 'Designer & Web Developer',
    //   phone: '8109286424', 
    //   linkedin: 'https://linkedin.com/in/dineshsahu-ecell',
    //   profile_pic: 'assets/dinesh-sahu.jpg'
    // }
  ];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.loadContacts();
  }

  loadContacts(): void {
    // Commented API call
    /*this.apiService.getContacts().subscribe({
      next: (data) => {
        this.teamMembers = data;
        this.loading = false;
        console.log('Contacts fetched successfully:', this.teamMembers);
      },
      error: (error) => {
        console.error('Error fetching contacts:', error);
        this.loading = false;
      },
    });*/

    // Using mock data instead
    this.teamMembers = this.mockContacts;
    this.loading = false;
  }
}
