import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedInStatus = false;

  constructor() { }

  get isLoggedIn() {
    return this.loggedInStatus;
  }
}
