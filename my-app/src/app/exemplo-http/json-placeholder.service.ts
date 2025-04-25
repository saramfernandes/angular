import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
}
 export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
}


@Injectable({
  providedIn: 'root'
})
export class JsonPlaceholderService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'https://jsonplaceholder.typicode.com/users';
  getUsers(): Observable<User[]> {
  return this.http.get<User[]>(this.apiUrl);
  }
}
