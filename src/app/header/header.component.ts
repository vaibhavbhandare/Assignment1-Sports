import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState, selectAuthState } from '../store/app.states';
import {  LogOut } from '../store/actions/auth.action';
import { Observable } from 'rxjs';
import { SportsListService } from '../service/sports.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public headerTitle = 'Sports';
  public setDark = false;
  public getState: Observable<any>;
  public isAuthenticated: boolean;

  @Output() mode = new EventEmitter<boolean>();

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private store: Store<AppState>,
              public sportService: SportsListService
              )
  { this.getState = this.store.select(selectAuthState); }

  ngOnInit(): void {
    this.getState.subscribe(isLogin => {
      this.isAuthenticated = isLogin.isAuthenticated;
    });
  }

  logout(): void {
    this.store.dispatch(new LogOut());
    this.router.navigate(['/list']);
  }

  changeTheme(): void {
    this.setDark = !this.setDark;
    this.mode.emit(this.setDark);
  }
}
