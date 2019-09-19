import { Component, OnInit, Injector } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { slideInUp, bounceInDown, bounceInUp } from 'ng-animate';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-guest',
  templateUrl: '../../HTMLs/guest.html',
  styleUrls: ['../../../assets/css/guest.component.css'],
  animations: [
    trigger('bounceDown', [
      transition(':enter', useAnimation(bounceInDown, { params: { timing: 1 } }))
    ])
  ]
})
export class GuestComponent extends BaseComponent implements OnInit {

  constructor(injector : Injector) 
  {
    super(injector);
  }

  ngOnInit() {
  }

}
