import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactModule } from './modules/general/contact/contact.module';
import { LoginModule } from './modules/general/login/login.module';
import { LogoutModule } from './modules/general/logout/logout.module';
import { AccountComponent } from './components/account/account.component';
import { AccountModule } from './modules/general/account/account.module';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { UserService } from './services/user.service';
import { ServiceWithObservableService } from './services/service-with-observable.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LogoutComponent,
    LoginComponent,
    ContactComponent,
    NotFoundComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ContactModule,
    LoginModule,
    LogoutModule,
    AccountModule,
    
  ],
  providers: [UserService, ServiceWithObservableService], // enregistrer la classe de service dans le tableau providers=>la classe de service est disponible dans toute l'application.
  bootstrap: [AppComponent]
})
export class AppModule { }
