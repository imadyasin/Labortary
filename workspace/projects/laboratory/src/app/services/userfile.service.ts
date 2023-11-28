import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserfileService {



  constructor(private http: HttpClient) {}
  getDocumentsByEmail(userEmail: string) {
    const apiUrl = `http://localhost:8082/file/?email=${userEmail}`;
    return this.http.get(apiUrl);
  }


}
