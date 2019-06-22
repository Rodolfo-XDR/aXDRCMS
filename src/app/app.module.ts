import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule  } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { RecaptchaModule } from 'ng-recaptcha';

import { AppComponent } from './app.component';

import { HeaderComponent } from './components/user/header/header.component';
import { LoginComponent } from './components/guest/login/login.component';
import { SideComponent } from './components/user/side/side.component';
import { RegisterComponent } from './components/guest/register/register.component';
import { MeComponent } from './components/user/habbo/me/me.component';
import { SettingsComponent } from './components/user/habbo/settings/settings.component';
import { AuthenticatedGuard } from './guards/authenticated.guard';
import { UnauthenticatedGuard } from './guards/unauthenticated.guard';
import { CommunityComponent } from './components/user/community/community.component';
import { ArticlesComponent } from './components/user/community/articles/articles.component';
import { PhotoGalleryComponent } from './components/user/community/photo-gallery/photo-gallery.component';
import { TopComponent } from './components/user/community/top/top.component';
import { UserComponent } from './components/user/user.component';
import { Error404Component } from './components/other/error404/error404.component';
import { Error403Component } from './components/other/error403/error403.component';
import { PreferencesComponent } from './components/user/habbo/settings/preferences/preferences.component';
import { CustomizationComponent } from './components/user/habbo/settings/customization/customization.component';
import { GuestComponent } from './components/guest/guest.component';
import { FooterComponent } from './components/other/footer/footer.component';
import { PreLoaderComponent } from './components/other/pre-loader/pre-loader.component';
import { BaseComponent } from './components/base/base.component';
import { HowToPlayComponent } from './components/user/discover/how-to-play/how-to-play.component';
import { HelpComponent } from './components/user/discover/help/help.component';
import { WhatIsComponent } from './components/user/discover/what-is/what-is.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RecaptchaModule
  ],
  declarations: [ 
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    MeComponent,
    SettingsComponent,
    CommunityComponent,
    ArticlesComponent,
    PhotoGalleryComponent,
    TopComponent,
    UserComponent,
    Error404Component,
    Error403Component,
    SideComponent,
    PreferencesComponent,
    CustomizationComponent,
    GuestComponent,
    FooterComponent,
    PreLoaderComponent,
    BaseComponent,
    HowToPlayComponent,
    HelpComponent,
    WhatIsComponent,
  ],
  providers: [AuthenticatedGuard, UnauthenticatedGuard],
  bootstrap: [AppComponent]
})

export class AppModule { }
