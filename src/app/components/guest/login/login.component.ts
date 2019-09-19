import { Component, OnInit, Injector } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { slideInLeft, slideOutLeft, fadeIn, fadeOut, slideInUp, slideOutDown, bounceInDown } from 'ng-animate';
import { BaseComponent } from '../../base/base.component';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: '../../../HTMLs/login.html',
  styleUrls: ['./login.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', useAnimation(fadeIn, { params: { timing: 1 } } )),
      transition(':leave', useAnimation(fadeOut, { params: { timing: 1 } } ))
    ]),
    trigger('slideInOut', [
      transition(':enter', useAnimation(slideInLeft, { params: { timing: 0.3 } } )),
      transition(':leave', useAnimation(slideOutDown, { params: { timing: 1 } } ))
    ]),
    trigger('bounceDown', [
      transition(':enter', useAnimation(slideInUp, { params: { timing: 0.5 } }))
    ])
  ]
})
export class LoginComponent extends BaseComponent implements OnInit {

  private loginForm = {
    identification: null,
    password: null
  };

  private isError = false;
  private errorMsg = '';

  constructor(injector : Injector) {
    super(injector);
   }

  ngOnInit() {
    this.showLoader();
    setTimeout(() => 
    {
      this.hideLoader();
    }, 1000)
  }

  login(form: NgForm)
  {
    if(form.value == null || undefined || !form.valid)
      return this.errorHandling('invalid_form');

    this.loginForm = {
      identification: form.value["login.identification"],
      password: form.value["login.password"]
    }

    if(this.loginForm.identification == undefined || this.loginForm.password == undefined)
      return this.errorHandling('invalid_form');

    this.send('post', '/auth/login', {identification: this.loginForm.identification, password: this.loginForm.password})
    .then(data => {
      this.resetError();
      this.changeStatus(true);
    })
    .catch(res => {
      this.errorHandling(res.error.message)
    });
  }

  prueba()
  {
    this.send('get', '/auth/session/logout', null)
    .then(data => this.resetError())
    .catch(res => {
      if(res.errors == false) return;
      this.errorHandling(res.error.message)
    });
  }

  errorHandling(error : String) {

    this.isError = true;

    switch(error)
    {
      case 'invalid_form':
        this.errorMsg = "Debes rellenar todos tus datos correctamente";
        break;
      case 'wrong_password':
      case 'user_not_found':
        this.errorMsg = "Los datos proporcionados son incorrectos";
        break;
      case 'invalid_parameters':
      default:
        this.errorMsg = "Ha ocurrido un Error (" + error + ")";
        break;
    }

    setTimeout(() => this.resetError(), 5000);
  }

  resetError() 
  {
    this.isError = false;
    this.errorMsg = "";
  }

}
