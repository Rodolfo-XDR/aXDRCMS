import { Component, OnInit, Injector } from '@angular/core';
import { BaseComponent } from 'src/app/components/base/base.component';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-me',
  templateUrl: '../../../../HTMLs/me.html',
  styleUrls: ['../../../../../assets/css/me.component.css']
})
export class MeComponent extends BaseComponent implements OnInit {
<<<<<<< HEAD
  
  private currentHabbo : User;
  
=======

  private user;

>>>>>>> 9266f973b0957821c6a96341aaf0c69e0df6ae65
  constructor(injector : Injector) {
    super(injector);
   }

  ngOnInit() {
  }

}
