import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  public title = 'Sports';
  public setMode = false;

  constructor() { }

  receiveMode(event): void {
    this.setMode = event;
  }
}
