import { Component, OnInit, Input, Injector, inject, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations'
import { menuItem } from 'src/app/models/menuItem';
import { fadeIn } from 'ng-animate';
import { BaseComponent } from '../../base/base.component';
import { MenuService } from 'src/app/shared/menu.service';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: '../../../HTMLs/header.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', useAnimation(fadeIn, { params: { timing: 1 } } ))
    ])
  ]
})
export class HeaderComponent extends BaseComponent implements OnInit, OnDestroy {

  private menuTabs : menuItem[];
  private subMenuTabs : menuItem[];
  private currentRoute;

  private _routerSub = Subscription.EMPTY;

  constructor(injector : Injector, private menuService : MenuService, private router : Router, private activatedRoute : ActivatedRoute) {
    super(injector);
  }

  ngOnInit() {

    //this.currentRoute = this.activatedRoute.firstChild.routeConfig;
    this.menuTabs = this.menuService.generateMenus(this.getHabbo().username);
    this.subMenuTabs = this.menuService.generateSubMenus();

    this._routerSub = this.router.events.subscribe(e => {
      if(e instanceof NavigationEnd)
      {
        if(this.currentRoute == this.activatedRoute.firstChild.routeConfig) return;
        this.subMenuTabs = this.menuService.generateSubMenus();
        this.currentRoute = this.activatedRoute.firstChild.routeConfig;
      }
    });
  }

  logout()
  {
    this.logOut();
  }


  ngOnDestroy(){
    this._routerSub.unsubscribe();
  }
}
