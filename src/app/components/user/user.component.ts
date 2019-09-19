import { Component, OnInit, Injector } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, Route } from '@angular/router';
import { menuItem } from 'src/app/models/menuItem';
import { trigger, transition, useAnimation } from '@angular/animations';
import { fadeIn, slideOutLeft, slideInLeft } from 'ng-animate';
import { globalRoutesNames } from 'src/global.routes.names';
import { BaseComponent } from '../base/base.component';
import { MenuService } from 'src/app/shared/menu.service';
<<<<<<< HEAD
import { Subject } from 'rxjs';
import { User } from 'src/app/models/user.model';
=======
>>>>>>> 9266f973b0957821c6a96341aaf0c69e0df6ae65

@Component({
  selector: 'app-user',
  templateUrl: '../../HTMLs/user.html',
<<<<<<< HEAD
  styleUrls: ['../../../assets/css/user.component.css'],
=======
  styleUrls: ['./user.component.css'],
>>>>>>> 9266f973b0957821c6a96341aaf0c69e0df6ae65
  animations: [
    trigger('fadeIn', [
      transition(':enter', useAnimation(fadeIn, { params: { timing: 1 } } ))
    ]),
    trigger('slideInOut', [
      transition(':enter', useAnimation(slideInLeft, { params: { timing: 0.2 } } )),
      transition(':leave', useAnimation(slideOutLeft, { params: { timing: 0.1 } } ))
    ])
  ]
})
export class UserComponent extends BaseComponent implements OnInit {

<<<<<<< HEAD
  private appSide : string[] = ['me', 'settings'];

  private active : boolean = false;
  private currentPage;

  constructor(injector : Injector, private menuService : MenuService){
    super(injector);

    if(localStorage.getItem('currentUser') == undefined || null)
      console.log('NO MAMEEEES');

    this.active = this.appSide.indexOf(this.menuService.currentPagePath) > -1;
    
    if(this.active)
      this.currentPage = this.menuService.currentPage;
=======
  appSide : string[] = [];
  currentPage;

  constructor(injector : Injector){
    super(injector);
>>>>>>> 9266f973b0957821c6a96341aaf0c69e0df6ae65
  }

  ngOnInit() {
    this.menuService.pageSubject.subscribe(value => {
      this.active = this.appSide.indexOf(value) > -1;
      this.currentPage = this.menuService.currentPage;
    });
  }
}
