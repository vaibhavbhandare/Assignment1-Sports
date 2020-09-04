import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { ListingPageComponent } from './listing-page/listing-page.component';
import { RegisterComponent } from './register/register.component';
import { AddSportsComponent } from './add-sports/add-sports.component';

const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'login', component: FormComponent },
  { path: 'list', component: ListingPageComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'addsports', component: AddSportsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
