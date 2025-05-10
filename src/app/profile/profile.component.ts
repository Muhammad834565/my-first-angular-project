import { Component } from '@angular/core';
import { UserProfileService } from '../services/user-profile.service';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { NavbarComponent } from '../components/navbar/navbar.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FormsModule,RouterModule,NavbarComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  userProfile = {
    id: localStorage.getItem("id"),
    username: localStorage.getItem("username"),
    email: localStorage.getItem("email"),
    role: localStorage.getItem("role"),
    age: null,
    gender: '',
    phone: '',
    cnic: '',
    birthdate: '',
    image: '',
    address: {
      address: '',
      city: '',
      state: '',
      country: ''
    },
    company: {
      department: '',
      name: '',
      title: '',
      address: {
        address: '',
        city: '',
        state: '',
        country: ''
      }
    }
  };

  constructor(private profileService: UserProfileService,    private router: Router,) {}

  createProfile() {
    this.profileService.createUserProfile(this.userProfile).subscribe(
      (res) => this.router.navigateByUrl('/login'),
      (err) => console.error('Error creating profile:', err)
    );
  }
  updateProfile() {
  this.profileService.updateUserProfile(this.userProfile).subscribe(
    (res) => this.router.navigateByUrl('/login'),
    (err) => console.error('Error updating profile:', err)
  );
}

}
