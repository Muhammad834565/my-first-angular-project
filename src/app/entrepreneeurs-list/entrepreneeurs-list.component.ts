import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { RouterModule } from '@angular/router';
import { LoaderComponent } from '../loader/loader.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-entrepreneeurs-list',
  standalone: true,
  imports: [RouterModule,LoaderComponent,NavbarComponent,CommonModule],
  templateUrl: './entrepreneeurs-list.component.html',
  styleUrl: './entrepreneeurs-list.component.css'
})
export class EntrepreneeursListComponent implements OnInit {
  constructor(private userService : UserService){}

  users:any
  entreprenure:any
  IsLoading:boolean = false
  ngOnInit(): void {
   
    this.getAllEntreprenure()
  }
  getAllEntreprenure(){
    this.IsLoading = true
    this.userService.getAllEntreprenure().subscribe({
      next:(res)=>{
       this.users = res
       this.IsLoading = false
      }
  })
}
  
}


