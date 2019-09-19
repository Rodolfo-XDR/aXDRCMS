import { Component, OnInit, Input, Injector } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { slideOutLeft, fadeIn } from 'ng-animate';
import { Router, NavigationEnd } from '@angular/router';
import { globalRoutesNames } from 'src/global.routes.names';
import { BaseComponent } from '../../base/base.component';
import { MenuService } from 'src/app/shared/menu.service';

@Component({
  selector: 'app-side',
  templateUrl: '../../../HTMLs/side.html',
  styleUrls: ['./side.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', useAnimation(fadeIn, { params: { timing: 1 } } ))
    ]),
    trigger('slideOut', [
      transition(':leave', useAnimation(slideOutLeft, { params: { timing: 1 } } ))
    ])
  ]
})
export class SideComponent extends BaseComponent implements OnInit {

  private currentPage : string = '';

  constructor(injector : Injector) {
    super(injector);
  }

  ngOnInit() {
  }

}
