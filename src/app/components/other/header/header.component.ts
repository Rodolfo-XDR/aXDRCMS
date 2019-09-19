<<<<<<< HEAD
import { Component, OnInit, Input, Injector, inject, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
=======
import { Component, OnInit, Input, Injector, inject, OnChanges, SimpleChanges } from '@angular/core';
>>>>>>> 9266f973b0957821c6a96341aaf0c69e0df6ae65
import { trigger, transition, useAnimation } from '@angular/animations'
import { menuItem } from 'src/app/models/menuItem';
import { fadeIn } from 'ng-animate';
import { BaseComponent } from '../../base/base.component';
import { MenuService } from 'src/app/shared/menu.service';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
<<<<<<< HEAD
import { Subscription } from 'rxjs';
=======
>>>>>>> 9266f973b0957821c6a96341aaf0c69e0df6ae65

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
<<<<<<< HEAD
export class HeaderComponent extends BaseComponent implements OnInit, OnDestroy {

  private menuTabs : menuItem[];
  private subMenuTabs : menuItem[];
  private currentRoute;

  private _routerSub = Subscription.EMPTY;

  constructor(injector : Injector, private menuService : MenuService, private router : Router, private activatedRoute : ActivatedRoute) {
=======
export class HeaderComponent extends BaseComponent implements OnInit {

  private menuTabs : menuItem[];
  private subMenuTabs : menuItem[];

  constructor(injector : Injector, private router : Router) {
>>>>>>> 9266f973b0957821c6a96341aaf0c69e0df6ae65
    super(injector);
  }

  ngOnInit() {
<<<<<<< HEAD

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
=======
    this.router.events.subscribe(e => {
      if(e instanceof NavigationEnd)
      {
        
      }
    });
  }
>>>>>>> 9266f973b0957821c6a96341aaf0c69e0df6ae65
}
