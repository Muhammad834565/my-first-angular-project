import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }
  getAllEntreprenure():Observable<any>{
    return this.http.get('http://localhost:5000/api/profile/entrepreneurs')
  }
  getEntreprenure(userId:any):Observable<any>{
    return this.http.get(`http://localhost:5000/api/profile/entrepreneurs/${userId}`)
  }
  getAllInvestor():Observable<any>{
    return this.http.get('http://localhost:5000/api/profile/investors')
  }
  getInvestor(userId:any):Observable<any>{
    return this.http.get(`http://localhost:5000/api/profile/investors/${userId}`)
  }
  getoneuser():Observable<any>{
    return this.http.get('http://localhost:5000/api/profile/id')
  }
  
  getAllUsers():Observable<any>{
    return this.http.get('https://dummyjson.com/users')
  }

  getUser(userId:any):Observable<any>{
    return this.http.get(`https://dummyjson.com/users/${userId}`)
  }

}
