import { Component, OnInit, Injector } from '@angular/core';
import { BaseComponent } from '../../base/base.component';
import { NgForm } from '@angular/forms';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { dialog } from 'metro4'
import { MetadataOverrider } from '@angular/core/testing/src/metadata_overrider';

@Component({
  selector: 'app-register',
  templateUrl: '../../../HTMLs/register.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent extends BaseComponent implements OnInit {

  private registrationForm = {
    username: null,
    mail: null,
    password: null,
    passwordConfirm: null,
    tos: false,
    reCAPTCHA: false
  };

  private isError = false;
  private errorMsg = '';

  constructor(injector : Injector) {
    super(injector);

    this.registrationForm = {
      username: null,
      mail: null,
      password: null,
      passwordConfirm: null,
      tos: false,
      reCAPTCHA: false
    };
  }

  ngOnInit() {
    this.showLoader();
    setTimeout(() => 
    {
      this.hideLoader();
    }, 1000)
  }

  register(form: NgForm)
  {
    if(form.value == null || undefined || !form.valid)
      return this.errorHandling('invalid_form');

    this.registrationForm = {
      username: form.value["registration.username"],
      mail: form.value["registration.mail"],
      password: form.value["registration.password"],
      passwordConfirm: form.value["registration.passwordConfirm"],
      tos: form.value["registration.tos"],
      reCAPTCHA: this.registrationForm.reCAPTCHA
    }

    if(this.registrationForm.username == undefined || this.registrationForm.mail == undefined || this.registrationForm.password == undefined || this.registrationForm.passwordConfirm == undefined)
      return this.errorHandling('invalid_form');
      
    if(!this.registrationForm.tos || this.registrationForm.tos == undefined)
      return this.errorHandling('tos_validation');

    if(!this.registrationForm.reCAPTCHA)
      return this.errorHandling('invalid_recaptcha');

    /*this.send('post', '/user/add', {username: this.registrationForm.username, mail: this.registrationForm.mail, password: this.registrationForm.password})
    .subscribe(
      data => { this.resetError() },
      res => this.errorHandling(res.error.message)
    );*/

    this.send('post', '/user/add', {username: this.registrationForm.username, mail: this.registrationForm.mail, password: this.registrationForm.password})
    .then(data => this.resetError())
    .catch(res => {
      this.errorHandling(res.error.message)
    });
  }

  resolved(captchaResponse) {
    this.registrationForm.reCAPTCHA = true;
  }

  errorHandling(error : String) {

    this.isError = true;

    switch(error)
    {
      case 'invalid_form':
        this.errorMsg = "No has completado correctamente el registro, intenta de nuevo."
        break;
      case 'invalid_recaptcha':
        this.errorMsg = "Por favor, comprueba que no eres un robot"
        break;
      case 'max_accounts':
        this.errorMsg = "Has alcanzado el limite de registros.";
        break;
      case 'username_unavailable':
        this.errorMsg = "El nombre de usuario proporcionado ya está en uso.";
        break;
      case 'email_unavailable':
        this.errorMsg = "El correo electrónico proporcionado ya está en uso.";
        break;
      case 'tos_validation':
        this.errorMsg = "Por favor, debes aceptar los términos";
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
