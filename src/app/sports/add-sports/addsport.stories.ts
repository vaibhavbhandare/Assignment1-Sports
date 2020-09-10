import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { RouterTestingModule } from '@angular/router/testing';
import { Store, StoreModule } from '@ngrx/store';
import { reducers } from '../../store/app.states';
import { AddSportsComponent } from './addsports.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import headerStories from '../../header/header.stories';

export default {
  title: 'Example/addSport',
  component: AddSportsComponent,
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

const Template: Story<AddSportsComponent> = (args: AddSportsComponent) => ({
  component: AddSportsComponent,
  props: args,
});

export const addSport = Template.bind({});
addSport.args = {
  user: {},
};

