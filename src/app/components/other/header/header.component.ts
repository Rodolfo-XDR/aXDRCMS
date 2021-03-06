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

  private _routerSub = Subscription.EMPTY;

  constructor(injector : Injector, private menuService : MenuService, private router : Router, private activatedRoute : ActivatedRoute) {
    super(injector);
  }

  ngOnInit() {
    //TODO deal with '/hotel' section
    this.menuTabs = this.menuService.getTabs;
    this.replaceVariables();
    this.checkCurrentPage();
    this._routerSub = this.router.events.subscribe(e => {
      if(e instanceof NavigationEnd) {
        this.checkCurrentPage();
      }
    })
  }

  replaceVariables() {
    this.menuTabs.forEach(tab => {
      tab._title = tab._title.replace("%USERNAME%", this.getHabbo().username);
      tab._title = tab._title.replace('%HOTELNAME%', 'Habbo');

      tab._children.forEach(child => {
        child._title = child._title.replace("%USERNAME%", this.getHabbo().username);
        child._title = child._title.replace('%HOTELNAME%', 'Habbo');
      })
    });
  }

  checkCurrentPage() {
    this.menuTabs.forEach(tab => {
      if(this.activatedRoute.firstChild.routeConfig.data.id == tab._id)
        this.subMenuTabs = tab._children;
    })
  }

  logout()
  {
    this.logOut();
  }


  ngOnDestroy(){
    this._routerSub.unsubscribe();
  }
}