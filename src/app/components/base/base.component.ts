import { Component, OnInit, Injector } from '@angular/core';
import { PreLoaderService } from '../../shared/pre-loader.service';
import { aXDRApiService } from 'src/app/shared/axdrapi.service';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/shared/auth.service';
<<<<<<< HEAD
import { Route } from '@angular/router';
import { Subject, Observable, of } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/shared/user.service';
=======
import { menuItem } from 'src/app/models/menuItem';
import { globalRoutesNames } from 'src/global.routes.names';
import { MenuService } from 'src/app/shared/menu.service';
>>>>>>> 9266f973b0957821c6a96341aaf0c69e0df6ae65

@Component({
  selector: '',
  template: '',
  styleUrls: [],
  providers: [HttpClient]
})

export class BaseComponent implements OnInit {

<<<<<<< HEAD
  public habbo : User;

  private preLoaderService : PreLoaderService;
  private apiService : aXDRApiService;
  private authService : AuthService;
  private userService : UserService;

  private test : string;
=======
  private preLoaderService : PreLoaderService;
  private apiService : aXDRApiService;
  private authService : AuthService;
  private menuService : MenuService;
>>>>>>> 9266f973b0957821c6a96341aaf0c69e0df6ae65

  constructor(private injector : Injector) {
      this.preLoaderService = this.injector.get(PreLoaderService);
      this.apiService = this.injector.get(aXDRApiService);
      this.authService = this.injector.get(AuthService);
<<<<<<< HEAD
      this.userService = this.injector.get(UserService);
=======
      this.menuService = this.injector.get(MenuService);
>>>>>>> 9266f973b0957821c6a96341aaf0c69e0df6ae65
   }

  ngOnInit() {
  }

  public send(type, url, data)
  {
    return this.apiService.send(type, url, data);
  }

  public isLoggedIn() : boolean
  {
    return this.authService.isLoggedIn;
  }

  public logIn(identification, password) : Promise<any>
  {
    return this.authService.logIn(identification, password);
  }

  public logOut()
  {
    this.authService.logOut();
  }

  public verifyUser()
  {
    this.authService.verifyUser();
  }

  public showLoader()
  {
    this.preLoaderService.show();
  }

  public hideLoader()
  {
    this.preLoaderService.hide();
  }

<<<<<<< HEAD
  public setHabbo(habbo : User)
  {
    this.userService.setHabbo(habbo);
  }

  public getHabbo()
  {
    return this.userService.getHabbo();
  }

  public ping()
  {
    return this.authService.ping();
  }

  public setBackground(background)
  {
    this.userService.setHabboBackground(background);
  }

  public get background()
  {
    return this.userService.getHabboBackground();
  }

  public parseUnixTime(time : number) : string
  {
    let s = "--";

    time = Math.floor(Date.now() / 1000) - time;

    if(time == 0)
      return "Ahora";
    else if(time < 0)
    {
      time *= -1;
      s = "Dentro de ";
    }
    else
    {
      s = "Hace "
    }

    if(time < 60)
    {
      let sec = '';

      if(time < 15)
        sec = 'unos segundos';
      else
        sec = time + ' segundos';
      
      s = s + sec;
    }
    else if(time <= 3600)
    {
      time = Math.round(time / 60);
      s = s + ' ' + time + ' minuto' + ((time > 1) ? 's' : '');
    }
    else if(time <= 86400)
    {
      time = Math.round(time / 3600);
      s = s + ' ' + time + ' hora' + ((time > 1) ? 's' : '');
    }
    else if(time <= 2629800)
    {
      
    }
    else if(time <= 31557600)
    {

    }
    else
    {

    }
      
    return s;
=======
  public send(type, url, data)
  {
    return this.apiService.send(type, url, data);
  }

  public changeStatus(status : boolean)
  {
    this.authService.changeStatus(status);
>>>>>>> 9266f973b0957821c6a96341aaf0c69e0df6ae65
  }
}