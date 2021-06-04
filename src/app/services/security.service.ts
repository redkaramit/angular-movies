import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { authenticationResult, userCredentials, userDTO } from '../Models/security.model';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  constructor(private http: HttpClient) { }

  private apiUrl = environment.apiUrl + "/accounts";
  private readonly tokenKey: string = 'token';
  private readonly expirationTokenKey: string = 'token-expiration';
  private readonly roleField: string = 'role';

  public isAuthenticated(): boolean {
    var token = localStorage.getItem(this.tokenKey);
    if (!token) {
      return false;
    }
    var expiration = localStorage.getItem(this.expirationTokenKey);
    var expirationDate = new Date(expiration);
    if (expirationDate <= new Date()) {
      this.logout();
      return false;
    }
    return true;
  }

  public getFieldFromJWT(field: string): string {
    var token = localStorage.getItem(this.tokenKey);
    if (!token) { return ''; }
    const datatoken = JSON.parse(atob(token.split('.')[1]));
    return datatoken[field];
  }

  public getToken(): string {
    var token = localStorage.getItem(this.tokenKey);
    if (!token) { return ''; }
    else {
      return token;
    }
  }

  public logout() {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.expirationTokenKey);
  }

  public getRole(): string {
    return this.getFieldFromJWT(this.roleField);
  }

  public register(userCredentials: userCredentials): Observable<authenticationResult> {
    return this.http.post<authenticationResult>(this.apiUrl + "/create", userCredentials);
  }

  public login(userCredentials: userCredentials): Observable<authenticationResult> {
    return this.http.post<authenticationResult>(this.apiUrl + "/login", userCredentials);
  }

  public saveToken(authenticationResult: authenticationResult) {
    localStorage.setItem(this.tokenKey, authenticationResult.token);
    localStorage.setItem(this.expirationTokenKey, authenticationResult.expiration.toString());
  }

  public getAllUsers(): Observable<userDTO[]> {
    //return [{ id: 1, name: 'Drama' },{ id: 2, name: 'Comedy' }]; 
    return this.http.get<userDTO[]>(this.apiUrl + "/listusers");
  }

  public makeadmin(userid: string) {
    const headers = new HttpHeaders('Content-Type: application/json');
    return this.http.post(this.apiUrl + "/makeadmin", JSON.stringify(userid), { headers });
  }

  public removeadmin(userid: string) {
    const headers = new HttpHeaders('Content-Type: application/json');
    return this.http.post(this.apiUrl + "/removeadmin", JSON.stringify(userid), { headers });
  }
}
