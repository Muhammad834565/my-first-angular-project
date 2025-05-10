import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';
import { NavbarComponent } from "../components/navbar/navbar.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-entrepreneeurs-detail',
  standalone: true,
  imports: [NavbarComponent,CommonModule],
  templateUrl: './entrepreneeurs-detail.component.html',
  styleUrl: './entrepreneeurs-detail.component.css'
})
export class EntrepreneeursDetailComponent implements OnInit {
  userId:any
  user:any
  IsLoading:boolean= false
  constructor(private activateRoute : ActivatedRoute,private userService : UserService){
    activateRoute.params.subscribe({
      next:(value)=>{
        this.userId = value['id']
        console.log(this.userId)
      }
    })
  }
  ngOnInit(): void {
    this.GetEntreprenure()
  }

  GetEntreprenure(){
    this.IsLoading = true
    this.userService.getEntreprenure(this.userId).subscribe({
      next:(res)=>{
        this.user = res
        this.IsLoading = false
      }
    })
  }



}

