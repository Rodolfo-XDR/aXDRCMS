import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from './user.service';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})

export class aXDRApiService {

  readonly URL_API = 'http://localhost:3000/api'

  constructor(private http: HttpClient, private userService : UserService) { }

  send(type, url, data)
  {
    let httpPromise : Promise<any>;

    switch(type)
    {
      case 'get':
        httpPromise = this.http.get(this.URL_API + url, { withCredentials: true }).toPromise();
        break;
      case 'post':
        httpPromise = this.http.post(this.URL_API + url, data, { withCredentials: true }).toPromise();
        break;
    }

    return httpPromise
    .then(res => {
      if(res == undefined || null) return Promise.reject(res);

      if(res.session == undefined || null || res.session.habbo == undefined || null)
      {
        localStorage.setItem('currentUser', undefined);
        
        //Redirigirte al login...

        return Promise.resolve(res);
      }

      localStorage.setItem('currentUser', JSON.stringify(res.session));
      
      let localUser = JSON.parse(localStorage.getItem('currentUser'));

      if(localUser == undefined || null) return;

      let tempHabbo : User = new User(localUser.habbo.id, localUser.habbo.username, localUser.habbo.mail, localUser.habbo.rank, localUser.habbo.motto, localUser.habbo.look, localUser.habbo.auth_ticket);
      this.userService.setHabbo(tempHabbo);
      
      return Promise.resolve(res);
    });
  }
}
