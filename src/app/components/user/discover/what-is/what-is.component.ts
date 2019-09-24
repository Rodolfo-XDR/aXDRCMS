import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { fadeIn } from 'ng-animate';

@Component({
  selector: 'app-what-is',
  templateUrl: '../../../../HTMLs/what-is.html',
  styleUrls: ['../../../../../assets/css/what-is.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', useAnimation(fadeIn, { params: { timing: 1.5 } } ))
    ])
  ]
})
export class WhatIsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
