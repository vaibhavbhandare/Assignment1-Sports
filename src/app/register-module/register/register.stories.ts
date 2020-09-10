import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { RouterTestingModule } from '@angular/router/testing';
import { Store, StoreModule } from '@ngrx/store';
import { reducers } from '../../store/app.states';
import { RegisterComponent } from './register.component';

export default {
  title: 'Example/Register',
  component: RegisterComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [
          CommonModule,
          FormsModule,
          ReactiveFormsModule,
          RouterTestingModule,
          StoreModule.forRoot(reducers, {})
        ],
     schemas: [CUSTOM_ELEMENTS_SCHEMA],
     providers: []
    }),
  ],
} as Meta;

const Template: Story<RegisterComponent> = (args: RegisterComponent) => ({
  component: RegisterComponent,
  props: args,
});

export const register = Template.bind({});
register.args = {
  user: {},
};

