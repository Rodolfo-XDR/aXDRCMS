import { Injectable, EventEmitter } from '@angular/core';
import { aXDRApiService } from './axdrapi.service';
import { User } from '../models/user.model';
import { Subject, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedInStatus : boolean = false;
  private eventTest : EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private apiService : aXDRApiService, private router : Router) {
    this.verifyUser();

    this.eventTest.subscribe(value => console.log("Keep track of this value: " + value));

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
  }

  get isLoggedIn() : boolean {
    return this.loggedInStatus;
  }
}
