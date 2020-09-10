import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { RouterTestingModule } from '@angular/router/testing';
import { Store, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './store/effects/auth.effects';
import { reducers } from './store/app.states';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { AddSportsComponent } from './sports/add-sports/addsports.component';
import { SportsComponent } from './sports/sports.component';
import { AppRoutingModule } from './app-routing.module';

export default {
  title: 'Example/App',
  component: AppComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        AppComponent,
        HeaderComponent,
        LoginComponent,
        SportsComponent,
        AddSportsComponent
      ],
      imports: [
          AppRoutingModule,
          CommonModule,
          FormsModule,
          ReactiveFormsModule,
          RouterTestingModule,
          HttpClientModule,
          EffectsModule.forRoot([AuthEffects]),
          StoreModule.forRoot(reducers, {})
        ],
     schemas: [CUSTOM_ELEMENTS_SCHEMA],
     providers: []
    }),
  ],
} as Meta;

const Template: Story<AppComponent> = (args: AppComponent) => ({
  component: AppComponent,
  props: args,
});

export const app = Template.bind({});
app.args = {
  user: {},
};

