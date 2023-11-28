import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient ) { }

  sendEmail(contactInfo: any) {
    // Replace 'your-api-endpoint' with your Spring Boot API endpoint
    return this.http.post('http://localhost:8082/user/sendmail', contactInfo);
  }
}
