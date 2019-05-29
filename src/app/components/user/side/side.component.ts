import { Component, OnInit, Input } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { slideOutLeft, fadeIn } from 'ng-animate';
import { Router, NavigationEnd } from '@angular/router';
import { globalRoutesNames } from 'src/global.routes.names';

@Component({
  selector: 'app-side',
  templateUrl: '../../../HTMLs/side.html',
  styleUrls: ['./side.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', useAnimation(fadeIn, { params: { timing: 1 } } ))
    ]),
    trigger('slideOut', [
      transition(':leave', useAnimation(slideOutLeft, { params: { timing: 1 } } ))
    ])
  ]
})
export class SideComponent implements OnInit {

  @Input() currentPage;

  constructor(private router : Router) {

  }

  ngOnInit() {
  }

}
