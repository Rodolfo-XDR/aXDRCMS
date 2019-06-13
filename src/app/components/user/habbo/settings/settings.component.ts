import { Component, OnInit, Injector } from '@angular/core';
import { BaseComponent } from 'src/app/components/base/base.component';

@Component({
  selector: 'app-settings',
  templateUrl: '../../../../HTMLs/settings.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent extends BaseComponent implements OnInit {

  constructor(injector : Injector) {
    super(injector);
   }

  ngOnInit() {
  }

}
