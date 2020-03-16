import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../interfaces/user.interface';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public router: Router,
    private http: HttpClient
  ) { }

  setDataToLocalStorage(username: string, password: string): void {
    const value = window.btoa(`${username}:${password}`);
    console.log(value);
    window.localStorage.setItem('token', value);
  }

  getDataFromLocalStorage(): string {
    return window.localStorage.getItem('token');
  }

  redirectTo(path: string): void {
    this.router.navigate([path]);
  }

  singUp(user: User): Observable<any> {
    return this.http.post(`http://localhost:8080/signin`, user);
  }

}
