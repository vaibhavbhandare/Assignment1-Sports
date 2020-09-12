import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SportsComponent } from './sports/sports.component';
import { AddSportsComponent } from './sports/add-sports/addsports.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'list', component: SportsComponent },
  { path: 'addsports', component: AddSportsComponent },
  { path: 'addsports/:id', component: AddSportsComponent },
  { path: 'registermodule',
    loadChildren: () => import('../app/register-module/register-module.module').then(m => m.RegisterModules)},
  { path: '', component: SportsComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full'  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
