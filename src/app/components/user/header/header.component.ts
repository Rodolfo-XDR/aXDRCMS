import { Component, OnInit, Input } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations'
import { menuItem } from 'src/app/models/menuItem';
import { fadeIn } from 'ng-animate';

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
export class HeaderComponent implements OnInit {

  @Input() menuTabs : menuItem[];
  @Input() subMenuTabs : menuItem[];

  constructor() {
  }

  ngOnInit() {
  }

}
