import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { RouterTestingModule } from '@angular/router/testing';
import { Store, StoreModule } from '@ngrx/store';
import { reducers } from '../store/app.states';
import { LoginComponent } from './login.component';
import { HttpClientModule } from '@angular/common/http';

export default {
  title: 'Example/login',
  component: LoginComponent,
  decorators: [
    moduleMetadata({
      declarations: [LoginComponent],
      imports: [
          CommonModule,
          FormsModule,
          ReactiveFormsModule,
          RouterTestingModule,
          HttpClientModule,
          StoreModule.forRoot(reducers, {})
        ],
     schemas: [CUSTOM_ELEMENTS_SCHEMA],
     providers: []
    }),
  ],
} as Meta;

const Template: Story<LoginComponent> = (args: LoginComponent) => ({
  component: LoginComponent,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  user: {},
};
