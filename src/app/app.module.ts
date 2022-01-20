import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactModule } from './modules/general/contact/contact.module';
import { LoginModule } from './modules/general/login/login.module';
import { LogoutModule } from './modules/general/logout/logout.module';
import { AccountComponent } from './account/account.component';
import { AccountModule } from './modules/general/account/account.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    LogoutComponent,
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
