import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path:'' , component: HomeComponent},
  { 
    path: 'contact',
    loadChildren:() => import('./modules/general/contact/contact.module').then(mod => mod.ContactModule)
  },
  { 
    path: 'login',
    loadChildren:() => import('./modules/general/login/login.module').then(mod => mod.LoginModule)
  },
  { 
    path: 'logout',
    loadChildren:() => import('./modules/general/logout/logout.module').then(mod => mod.LogoutModule)
  },
  { 
    path: 'account',
    loadChildren:() => import('./modules/general/account/account.module').then(mod => mod.AccountModule)
  },
  { path:'**' , component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
