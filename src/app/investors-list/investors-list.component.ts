import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { RouterModule } from '@angular/router';
import { LoaderComponent } from '../loader/loader.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-investors-list',
  standalone: true,
  imports: [RouterModule,LoaderComponent,NavbarComponent,CommonModule],
  templateUrl: './investors-list.component.html',
  styleUrl: './investors-list.component.css'
})
export class InvestorsListComponent implements OnInit {
  constructor(private userService : UserService){}


  users:any
  IsLoading:boolean = false
  ngOnInit(): void {
   
    this.getAllInvestor()
  }
   getAllInvestor(){
    this.IsLoading = true
    this.userService.getAllInvestor().subscribe({
      next:(res)=>{
       this.users = res
       this.IsLoading = false
      }
  })
}
  
}
