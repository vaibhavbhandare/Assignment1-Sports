import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { HeaderComponent } from './header.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Store, StoreModule } from '@ngrx/store';
import { reducers } from '../store/app.states';
import { HttpClientModule } from '@angular/common/http';

export default {
  title: 'Example/Header',
  component: HeaderComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
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

const Template: Story<HeaderComponent> = (args: HeaderComponent) => ({
  component: HeaderComponent,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  user: {},
  isAuthenticated: false
};
