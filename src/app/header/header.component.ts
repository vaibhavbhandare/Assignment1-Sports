import { Component, OnInit } from '@angular/core';
import '../lit-Elements/heading-element.js';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.states';
import { LogOut } from '../store/actions/auth.action';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public headerTitle = 'Sports';
  public userLoginStatus: boolean;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(param => {
      this.userLoginStatus = param.term;
    },
      (error) => {
        console.log('Error in Fetching Parameter of Login API');
      }
    );
  }

  login(): void {
    this.router.navigate(['/login']);
  }

  register(): void {
    this.router.navigate(['/registermodule']);
  }

  logout(): void {
    this.store.dispatch(new LogOut());
  }
}
