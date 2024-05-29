import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs'
import { tap } from 'rxjs/operators';
import { user } from '../Model/user.model';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private userLoggedInSubject = new BehaviorSubject<boolean>(this.isLoggedIn());
  userLoggedIn$ = this.userLoggedInSubject.asObservable();
  private apiUrl = environment.apiUrl+"auth/token"

  constructor(private http: HttpClient) { }

  logincheck(username: string, password: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'accept': 'application/json'
    });
    const body = new URLSearchParams();
    body.set('grant_type', '');
    body.set('username', username);
    body.set('password', password);
    body.set('scope', '');
    body.set('client_id', '');
    body.set('client_secret', '');
    return this.http.post<any>(this.apiUrl,body.toString(), { headers })
      .pipe(
        tap(response => {
          if (response.access_token) {
            localStorage.setItem('access_token', response.access_token);
            this.userLoggedInSubject.next(true);
          }
        })
      );
  }
  fetchCurrentUser() {
    const token = localStorage.getItem('access_token');
    // if (token) {
    //   this.http.get<any>(`${this.apiUrl}/me`, {
    //     headers: new HttpHeaders({
    //       'Authorization': `Bearer ${token}`
    //     })
    //   }).subscribe(
    //     user => this.userSubject.next(user),
    //     error => console.error('Error fetching current user', error)
    //   );
    // }
  }
  logout() {
    localStorage.removeItem('access_token');
    this.userLoggedInSubject.next(false);
  }
  isLoggedIn(){
    return localStorage.getItem('access_token') !== null;
  }
}
