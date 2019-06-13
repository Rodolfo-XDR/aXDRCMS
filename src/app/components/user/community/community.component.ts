import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { fadeIn } from 'ng-animate';

@Component({
  selector: 'app-community',
  templateUrl: '../../../HTMLs/community.html',
  styleUrls: ['./community.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', useAnimation(fadeIn, { params: { timing: 1.5 } } ))
    ])
  ]
})
export class CommunityComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
