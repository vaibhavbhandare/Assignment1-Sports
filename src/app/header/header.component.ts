import { Component, OnInit } from '@angular/core';
import '../lit-Elements/heading-element.js';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public headerTitle = 'Sports';

  constructor() { }

  ngOnInit(): void {
  }

}
