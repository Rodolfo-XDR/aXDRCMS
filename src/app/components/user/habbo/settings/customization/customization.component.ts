import { Component, OnInit, Injector } from '@angular/core';
import { BaseComponent } from 'src/app/components/base/base.component';

@Component({
  selector: 'app-customization',
  templateUrl: './customization.component.html',
  styleUrls: ['../../../../../../assets/css/customization.component.css']
})
export class CustomizationComponent extends BaseComponent implements OnInit {

  private bgOptions = [
    {bgValue: 0, name: 'Normal'},
    {bgValue: 1, name: 'Dark'},
    {bgValue: 2, name: 'Blue'},
    {bgValue: 3, name: 'Orange'},
    {bgValue: 4, name: 'Login'}
  ]

  constructor(injector : Injector) {
    super(injector);
  }

  ngOnInit() {
  }

}
