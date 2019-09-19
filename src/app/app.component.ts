import { Component, Injector, OnDestroy, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { menuItem } from './models/menuItem';
import { BaseComponent } from './components/base/base.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends BaseComponent {
  title = 'aXDR';

  constructor(injector : Injector, private router : Router) {
    super(injector);
  }
}
