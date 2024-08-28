import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://localhost:5078/api'; // Adjust to match your backend URL

  constructor(private http: HttpClient) { }

  getValues(): Observable<any> {
    return this.http.get(`${this.apiUrl}/values`);
  }

  // Add more methods as needed
}
