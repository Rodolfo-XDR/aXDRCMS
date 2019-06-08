import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { slideInLeft, slideOutLeft, fadeIn, fadeOut, slideInUp, slideInDown, slideOutUp, slideOutDown, bounceInDown } from 'ng-animate';

@Component({
  selector: 'app-login',
  templateUrl: '../../../HTMLs/login.html',
  styleUrls: ['./login.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', useAnimation(fadeIn, { params: { timing: 1 } } )),
      transition(':leave', useAnimation(fadeOut, { params: { timing: 1 } } ))
    ]),
    trigger('slideInOut', [
      transition(':enter', useAnimation(slideInLeft, { params: { timing: 0.3 } } )),
      transition(':leave', useAnimation(slideOutDown, { params: { timing: 1 } } ))
    ]),
    trigger('bounceDown', [
      transition(':enter', useAnimation(slideInUp, { params: { timing: 0.5 } }))
    ])
  ]
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
