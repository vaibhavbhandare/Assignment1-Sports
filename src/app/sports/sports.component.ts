import { Component, OnInit } from '@angular/core';
import { SportsListService } from '../service/mock.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState, selectAuthState } from '../store/app.states';
import { Observable } from 'rxjs';
import { ListSports, DeleteSports } from '../store/actions/sport.action';

@Component({
  selector: 'app-listing-page',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})

export class SportsComponent implements OnInit {

  public sportsData: any;
  public tableTitle = 'Sports Club';
  public getState: Observable<any>;
  public isAuthenticated: boolean;

  constructor(private router: Router,
              private store: Store<AppState>,
              public sportsListService: SportsListService ) {
    this.getState = this.store.select(selectAuthState);
  }

  ngOnInit(): void {
    this.store.dispatch(new ListSports());
    this.store.subscribe(data => {
      if (data && data.sport ) {
        this.sportsData = data.sport.sport;
      }
    });

    // to get json data if run storybook feature
    this.sportsListService.getSports().subscribe(sport => {
      this.sportsData = sport;
    });

    this.getState.subscribe(isLogin => {
      this.isAuthenticated = isLogin.isAuthenticated;
    });
  }

  deleteSports(id: any): void {
    if (window.confirm('Are you sure to delete sport')) {
      this.store.dispatch(new DeleteSports(id));
      this.store.dispatch(new ListSports());
    }
  }
}
