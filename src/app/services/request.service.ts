import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) { }

  makeRequest(data: any){
    return this.http.post<any>('http://localhost:8080/event/join', data);
  }
}
