import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private habbo : User

  constructor() {
    //En caso de un F5
    if(localStorage.getItem('currentUser') != undefined && localStorage['currentUser'] != 'undefined')
    {
      let localUser = JSON.parse(localStorage.getItem('currentUser'));

      if(localUser == undefined || null) return;

      let tempHabbo : User = new User(localUser.habbo.id, localUser.habbo.username, localUser.habbo.mail, localUser.habbo.rank, localUser.habbo.motto, localUser.habbo.look, localUser.habbo.auth_ticket);
      
      this.setHabbo(tempHabbo);
      return;
    }

    this.setHabbo(null);
  }

  setHabbo(habbo : User)
  {
    this.habbo = habbo;
  }

  setHabboBackground(background)
  {
    this.habbo.setBackground(background);
  }

  getHabboBackground()
  {
    return this.habbo.web_bg;
  }

  getHabbo() : User
  {
    return this.habbo;
  }
}
