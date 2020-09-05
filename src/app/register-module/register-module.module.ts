import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RegisterModule } from './register-module-routing.module';
import { RegisterComponent } from './register/register.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    RegisterModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class RegisterModules { }
