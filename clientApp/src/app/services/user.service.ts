import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  _users$: Subject<User[]> = new Subject();
  users$: Observable<User[]> = this._users$.asObservable();

  constructor(private http: HttpClient) { }

  baseUrl = environment.baseUrl;

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}users`)
  }

  getUserById(userId: number): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}users/${userId}`);
  }
}
