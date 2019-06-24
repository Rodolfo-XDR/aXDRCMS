import { Injectable } from '@angular/core';
import { aXDRApiService } from './axdrapi.service';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedInStatus = false;
  private User : User;
  private current;

  constructor() { 
    if(localStorage.getItem('currentUser') != undefined || null)
    {
      this.loggedInStatus = true;
      let currentUser = localStorage.getItem('currentUser');
      let current = JSON.parse(currentUser);
    }
  }

  changeStatus(status : boolean)
  {
    this.loggedInStatus = status;
  }

  get currentUser() {
    return JSON.parse(localStorage.getItem('currentUser'));
  }

  get isLoggedIn() {
    return this.loggedInStatus;
  }
}
