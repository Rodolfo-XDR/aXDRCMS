import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { menuItem } from './models/menuItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aXDR';

  constructor(private router : Router) {

  }
}
