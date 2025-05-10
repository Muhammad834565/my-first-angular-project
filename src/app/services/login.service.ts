import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  onLogin(obj:any):Observable<any>{
    return this.http.post('http://localhost:5000/api/auth/login',obj)
    
  }
  onSignup(obj:any):Observable<any>{
    return this.http.post('http://localhost:5000/api/auth/register',obj)
    
  }
}
