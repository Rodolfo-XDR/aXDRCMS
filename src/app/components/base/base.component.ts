import { Component, OnInit, Injector } from '@angular/core';
import { PreLoaderService } from '../../shared/pre-loader.service';
import { aXDRApiService } from 'src/app/shared/axdrapi.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: '',
  template: '',
  styleUrls: [],
  providers: [HttpClient]
})

export class BaseComponent implements OnInit {

  private preLoaderService : PreLoaderService;
  private apiService : aXDRApiService;

  constructor(private injector : Injector) {
      this.preLoaderService = this.injector.get(PreLoaderService);
      this.apiService = this.injector.get(aXDRApiService);
   }

  ngOnInit() {
  }

  public showLoader()
  {
    this.preLoaderService.show();
  }

  public hideLoader()
  {
    this.preLoaderService.hide();
  }

  public send(type, url, data)
  {
    return this.apiService.send(type, url, data);
  }
}