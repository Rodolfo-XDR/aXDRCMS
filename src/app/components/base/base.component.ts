import { Component, OnInit, Injector } from '@angular/core';
import { PreLoaderService } from '../../shared/pre-loader.service';
import { aXDRApiService } from 'src/app/shared/axdrapi.service';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/shared/auth.service';
import { menuItem } from 'src/app/models/menuItem';
import { globalRoutesNames } from 'src/global.routes.names';
import { MenuService } from 'src/app/shared/menu.service';

@Component({
  selector: '',
  template: '',
  styleUrls: [],
  providers: [HttpClient]
})

export class BaseComponent implements OnInit {

  private preLoaderService : PreLoaderService;
  private apiService : aXDRApiService;
  private authService : AuthService;
  private menuService : MenuService;

  constructor(private injector : Injector) {
      this.preLoaderService = this.injector.get(PreLoaderService);
      this.apiService = this.injector.get(aXDRApiService);
      this.authService = this.injector.get(AuthService);
      this.menuService = this.injector.get(MenuService);
   }

  ngOnInit() {
  }

  public showLoader()
  {
    this.preLoaderService.show();
  }

  public hideLoader()
  {
    this.preLoaderService.hide();
  }

  public send(type, url, data)
  {
    return this.apiService.send(type, url, data);
  }

  public changeStatus(status : boolean)
  {
    this.authService.changeStatus(status);
  }
}