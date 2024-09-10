import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginobj:any
  constructor(private accservices:UserService){

  }
    onLogin() {
      this.accservices.onLogin(this.loginobj).subscribe((res:any)=>
      {
        console.log('res',res)
        localStorage.setItem('token',res.token)
      })

    }

  }


