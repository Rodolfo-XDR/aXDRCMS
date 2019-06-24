import { Component, OnInit, Injector } from '@angular/core';
import { BaseComponent } from 'src/app/components/base/base.component';

@Component({
  selector: 'app-me',
  templateUrl: '../../../../HTMLs/me.html',
  styleUrls: ['./me.component.css']
})
export class MeComponent extends BaseComponent implements OnInit {

  private user;

  constructor(injector : Injector) {
    super(injector);
   }

  ngOnInit() {
  }

}
