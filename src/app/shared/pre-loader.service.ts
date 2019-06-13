import { Injectable } from '@angular/core';
import { Subject } from '../../../node_modules/rxjs';
import { LoaderState } from '../interfaces/loader.interface';

@Injectable({
  providedIn: 'root'
})
export class PreLoaderService {

  private loaderSubject = new Subject<LoaderState>();

  loaderState = this.loaderSubject.asObservable();

  constructor() { }

  show() {
      this.loaderSubject.next(<LoaderState>{show: true});
  }

  hide() {
      this.loaderSubject.next(<LoaderState>{show: false});
  }
}
