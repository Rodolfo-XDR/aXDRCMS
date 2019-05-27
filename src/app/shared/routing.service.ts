import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class RoutingService {

  inc : number = 0;

  constructor() 
  {
    this.inc++;
  }
}
