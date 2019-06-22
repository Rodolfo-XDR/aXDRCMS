import { Injectable } from '@angular/core';
import { aXDRApiService } from './axdrapi.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedInStatus = false;

  constructor(private api : aXDRApiService) { }

  loginTest(identification, password)
  {
    this.loggedInStatus = true;
  }

  get isLoggedIn() {
    console.log(this.loggedInStatus);
    return this.loggedInStatus;
  }
}
