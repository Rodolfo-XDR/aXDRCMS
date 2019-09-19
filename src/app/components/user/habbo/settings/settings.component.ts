import { Component, OnInit, Injector } from '@angular/core';
import { BaseComponent } from 'src/app/components/base/base.component';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-settings',
  templateUrl: '../../../../HTMLs/settings.html',
  styleUrls: ['../../../../../assets/css/settings.component.css']
})
export class SettingsComponent extends BaseComponent implements OnInit {

  private currentHabbo : User;

  constructor(injector : Injector) {
    super(injector);
   }

  ngOnInit() {
    this.currentHabbo = this.getHabbo();
  }

}
