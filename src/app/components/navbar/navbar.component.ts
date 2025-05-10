import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  logout() {
  localStorage.clear();
  // Optional: Redirect to login or home
  window.location.href = '/login'; // or use Angular Router if you're routing
}


}
