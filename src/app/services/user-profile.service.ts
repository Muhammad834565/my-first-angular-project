import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  private apiUrl = 'http://localhost:5000/api/profile';

  constructor(private http: HttpClient) {}

  createUserProfile(userData: any): Observable<any> {
    return this.http.post(this.apiUrl, userData);
  }
  updateUserProfile(userData: any): Observable<any> {
  return this.http.put(this.apiUrl, userData);
}

}
