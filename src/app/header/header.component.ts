import { Component, OnInit } from '@angular/core';
import '../lit-Elements/heading-element.js';
import { Router } from '@angular/router';
import { SportsListService } from '../service/sports-list.service.js';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public headerTitle = 'Sports';

  constructor(private router: Router,
              private sportsListService: SportsListService) { }

  ngOnInit(): void {
  }

  login(): void {
    this.router.navigate(['/login']);

  }

  register(): void {
    this.router.navigate(['/register']);
  }
}
