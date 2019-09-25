import { Component, OnInit, Injector, OnDestroy } from '@angular/core';
import { MenuService } from 'src/app/shared/menu.service';
import { BaseComponent } from '../../base/base.component';
import { UserComponent } from '../user.component';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent extends BaseComponent implements OnInit, OnDestroy {

  constructor(injector : Injector, private menuService : MenuService) {
    super(injector);
  }

  ngOnInit() {
    this.menuService.showClient(true);
  }

  ngOnDestroy() {
    this.menuService.showClient(false);
  }

}
