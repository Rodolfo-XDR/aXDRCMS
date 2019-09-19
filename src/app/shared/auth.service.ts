import { Injectable } from '@angular/core';
import { aXDRApiService } from './axdrapi.service';
import { User } from '../models/user.model';
<<<<<<< HEAD
import { Subject, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
=======
>>>>>>> 9266f973b0957821c6a96341aaf0c69e0df6ae65

@Injectable({
  providedIn: 'root'
})
export class AuthService {

<<<<<<< HEAD
  private loggedInStatus : boolean = false;

  constructor(private apiService : aXDRApiService, private router : Router) {
    this.verifyUser();
  }

  logIn(identification, password) : Promise<any>
  {
    return this.apiService.send('post', '/auth/login', {identification: identification, password: password})
    .then(data => {
      this.loggedInStatus = true;
      return Promise.resolve(data);
    })
    .catch(err => {
      return Promise.reject(err);
    })
  }

  logOut()
  {
    this.apiService.send('get', '/auth/session/logout', null)
    .then(data => {
      if(localStorage.getItem('currentUser') != undefined || null) localStorage.removeItem('currentUser');
      this.loggedInStatus = false; 
      this.router.navigate(['/']);
    } )
    .catch(res => {
      if(res.errors == false) {
        return;
      }

      this.router.navigate(['/']);
    });
  }

  verifyUser()
  {
      if(localStorage.getItem('currentUser') != undefined && localStorage['currentUser'] != 'undefined')
      {
        let localUser = JSON.parse(localStorage.getItem('currentUser'));
  
        this.loggedInStatus = true;
        return;
      }
  
      //TODO: This should be this.logout();
      this.loggedInStatus = false;
      this.router.navigate(['/']);
  }

  ping()
  {
    return this.apiService.send('get', '/authentication/session/get', null)
    .then((res) => { return Promise.resolve(res) } )
    .catch((err) => { return Promise.reject(err); } );
=======
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
>>>>>>> 9266f973b0957821c6a96341aaf0c69e0df6ae65
  }

  get isLoggedIn() : boolean {
    return this.loggedInStatus;
  }
}
