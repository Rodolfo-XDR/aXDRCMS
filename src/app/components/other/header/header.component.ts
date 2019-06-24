import { Component, OnInit, Input, Injector, inject, OnChanges, SimpleChanges } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations'
import { menuItem } from 'src/app/models/menuItem';
import { fadeIn } from 'ng-animate';
import { BaseComponent } from '../../base/base.component';
import { MenuService } from 'src/app/shared/menu.service';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

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
export class HeaderComponent extends BaseComponent implements OnInit {

  private menuTabs : menuItem[];
  private subMenuTabs : menuItem[];

  constructor(injector : Injector, private router : Router) {
    super(injector);
  }

  ngOnInit() {
    this.router.events.subscribe(e => {
      if(e instanceof NavigationEnd)
      {
        
      }
    });
  }
}
