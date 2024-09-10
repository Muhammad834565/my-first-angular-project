import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }

  getAllUsers():Observable<any>{
    return this.http.get('https://dummyjson.com/users')
  }

  getUser(userId:any):Observable<any>{
    return this.http.get(`https://dummyjson.com/users/${userId}`)
  }
  onLogin(obj:any):Observable<any>{
    return this.http.post('https://reqres.in/api/login',obj)
  }

}
