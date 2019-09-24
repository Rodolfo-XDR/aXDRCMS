import { Component, OnInit, Input, Injector } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { slideOutLeft, fadeIn } from 'ng-animate';
import { Router, NavigationEnd } from '@angular/router';
import { globalRoutesNames } from 'src/global.routes.names';
import { BaseComponent } from '../../base/base.component';
import { MenuService } from 'src/app/shared/menu.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-side',
  templateUrl: '../../../HTMLs/side.html',
  styleUrls: ['../../../../assets/css/side.component.css'],
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
  @Input() currentPage;

  private currentHabbo : User;

  constructor(injector : Injector) {
    super(injector);
  }

  ngOnInit() {
    this.ping()
    .then(() => {
      this.currentHabbo = this.getHabbo();
    }).catch(err => {
      
    });
  }

}