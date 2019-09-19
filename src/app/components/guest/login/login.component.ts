import { Component, OnInit, Injector } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { slideInLeft, slideOutLeft, fadeIn, fadeOut, slideInUp, slideOutDown, bounceInDown } from 'ng-animate';
import { BaseComponent } from '../../base/base.component';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: '../../../HTMLs/login.html',
  styleUrls: ['../../../../assets/css/login.component.css'],
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

  constructor(injector : Injector, private router : Router) {
    super(injector);
   }

  ngOnInit() {
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

    this.logIn(this.loginForm.identification, this.loginForm.password).then(data => {
      if(localStorage.getItem('currentUser') == undefined || null)
      this.errorHandling('invalid_localStorage')
    
      let localUser = JSON.parse(localStorage.getItem('currentUser'));

      if(localUser == undefined || null) return;

      let tempHabbo : User = new User(localUser.habbo.id, localUser.habbo.username, localUser.habbo.mail, localUser.habbo.rank, localUser.habbo.motto, localUser.habbo.look, localUser.habbo.auth_ticket);
      this.setHabbo(tempHabbo);

      this.router.navigate(['/me']);
    }).catch(err => {
      this.errorHandling(err.error.message)
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
      case 'invalid_localStorage':
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
