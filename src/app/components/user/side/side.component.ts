import { Component, OnInit, Input } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { slideOutLeft } from 'ng-animate';

@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.scss'],
  animations: [
    trigger('slideOut', [
      transition(':leave', useAnimation(slideOutLeft, { params: { timing: 1 } } ))
    ])
  ]
})
export class SideComponent implements OnInit {

  @Input() currentPage;

  constructor() { 
  }

  ngOnInit() {
    console.log(this.currentPage);
  }

}
