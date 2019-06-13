import { Component, OnInit, Injector } from '@angular/core';
import { PreLoaderService } from '../../shared/pre-loader.service';

@Component({
  selector: '',
  template: '',
  styleUrls: []
})

export class BaseComponent implements OnInit {

  private loaderService : PreLoaderService;

  constructor(private injector : Injector) {
      this.loaderService = this.injector.get(PreLoaderService);
   }

  ngOnInit() {
  }

  public showLoader()
  {
    this.loaderService.show();
  }

  public hideLoader()
  {
    this.loaderService.hide();
  }
}