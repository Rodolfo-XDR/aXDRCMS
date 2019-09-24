import { Component, OnInit, Injector } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { fadeIn, slideOutLeft, slideInLeft } from 'ng-animate';
import { BaseComponent } from '../base/base.component';
import { MenuService } from 'src/app/shared/menu.service';

@Component({
  selector: 'app-user',
  templateUrl: '../../HTMLs/user.html',
  styleUrls: ['../../../assets/css/user.component.css'],
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

  constructor(injector : Injector, private menuService : MenuService){
    super(injector);

  }

  ngOnInit() {

  }
}
