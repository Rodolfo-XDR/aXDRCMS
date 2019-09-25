import { Component, OnInit, Injector } from '@angular/core';
import { BaseComponent } from 'src/app/components/base/base.component';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-me',
  templateUrl: '../../../../HTMLs/me.html',
  styleUrls: ['../../../../../assets/css/me.component.css']
})
export class MeComponent extends BaseComponent implements OnInit {
  
  private currentHabbo : User;
  
  constructor(injector : Injector) {
    super(injector);
   }

  ngOnInit() {
    console.log(this.clientShow);
  }

}
