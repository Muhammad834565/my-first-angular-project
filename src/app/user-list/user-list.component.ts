import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { RouterModule } from '@angular/router';
import { LoaderComponent } from '../loader/loader.component';
import { NavbarComponent } from "../components/navbar/navbar.component";


@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [RouterModule, LoaderComponent, NavbarComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {
constructor(private userService : UserService){}

users:any
IsLoading:boolean = false
ngOnInit(): void {
  this.AllUsers()
}

AllUsers(){
  this.IsLoading = true
  this.userService.getAllUsers().subscribe({
    next:(res)=>{
     this.users = res.users
     this.IsLoading = false
    }
  })
}

}
