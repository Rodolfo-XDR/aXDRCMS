import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class aXDRApiService {

  readonly URL_API = 'http://localhost:3000/api'

  constructor(private http: HttpClient) { }

  send(type, url, data)
  {
    switch(type)
    {
      case 'get':
        return this.http.get(this.URL_API + url);
      case 'post':
        return this.http.post(this.URL_API + url, data);
      case 'put':
        return this.http.put(this.URL_API + url, data);
      case 'delete':
        return this.http.delete(this.URL_API + url, data);
      default:
        break;
    } 
  }
}
