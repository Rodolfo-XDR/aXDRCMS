import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { fadeIn } from 'ng-animate';

@Component({
  selector: 'app-help',
  templateUrl: '../../../../HTMLs/help.html',
  styleUrls: ['../../../../../assets/css/help.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', useAnimation(fadeIn, { params: { timing: 1.5 } } ))
    ])
  ]
})
export class HelpComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
