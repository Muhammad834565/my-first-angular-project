import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { LoginService } from '../services/login.service';
import { FormsModule } from '@angular/forms';
import { HttpStatusCode, HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sigup',
  standalone: true,
  imports: [RouterModule,FormsModule,CommonModule],
  templateUrl: './sigup.component.html',
  styleUrl: './sigup.component.css'
})
export class SigupComponent implements OnInit {


  loginobj = {
  username: '',
  password: '',
  email: '',
  role: ''
  };

  constructor(
    private loginService: LoginService,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token) {
      // Verify the token (this assumes your backend has an endpoint like /auth/verify)
      this.http.get('http://localhost:5000/api/auth/verify', {
  headers: {
    Authorization: `${token}`
  }
}).subscribe({
  next: () => {
    // Token is valid, redirect based on role
    const role = localStorage.getItem('role');
    if (role === 'Entrepreneur') {
      this.router.navigateByUrl('/investors');
    } else {
      this.router.navigateByUrl('/entrepreneurs');
    }
  },
  error: () => {
    // Token is invalid or expired
    alert('Session expired. Please log in again.');
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }
});

    }
  }

  onLogin(): void {
    if (!this.loginobj.email || !this.loginobj.password || !this.loginobj.username || !this.loginobj.role) {
      return; // basic safety check
    }

    this.loginService.onSignup(this.loginobj).subscribe({
      next: (res: any) => {
        console.log('res', res);
        this.router.navigateByUrl('/login');
      },
      error: (err) => {
        if (err.status === HttpStatusCode.BadRequest) {
          alert('Invalid request');
        } else {
          console.error('Login failed:', err);
        }
      }
    });
  }
}
