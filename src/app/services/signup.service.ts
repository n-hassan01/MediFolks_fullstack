import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient) { }

  addDoctor(data: any){
    return this.http.post<any>('http://localhost:8080/auth/doctor/register', data);
  }
}
