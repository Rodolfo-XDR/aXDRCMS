import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoaderState } from '../../../interfaces/loader.interface';
import { Subscription } from 'rxjs';
import { PreLoaderService } from '../../../shared/pre-loader.service';

@Component({
  selector: 'app-pre-loader',
  templateUrl: './pre-loader.component.html',
  styleUrls: ['./pre-loader.component.css']
})
export class PreLoaderComponent implements OnInit, OnDestroy {

  show = false;

  private subscription: Subscription;

  constructor(private loaderService: PreLoaderService) {

  }

  ngOnInit() {
      this.subscription = this.loaderService.loaderState
          .subscribe((state: LoaderState) => {
              this.show = state.show;
          });
  }

  ngOnDestroy() {
      this.subscription.unsubscribe();
  }

}