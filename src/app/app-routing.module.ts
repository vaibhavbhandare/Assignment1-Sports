import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { ListingPageComponent } from './listing-page/list.component';
import { AddSportsComponent } from './add-sports/addsports.component';

const routes: Routes = [
  { path: 'login', component: FormComponent },
  { path: 'list', component: ListingPageComponent },
  { path: 'addsports', component: AddSportsComponent },
  { path: 'addsports/:id', component: AddSportsComponent },
  { path: 'registermodule',
    loadChildren: () => import('../app/register-module/register-module.module').then(m => m.RegisterModules)},
  { path: '', redirectTo: '/list', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
