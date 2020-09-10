import { Component, OnInit } from '@angular/core';
import { SportsListService } from '../service/mock.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState, selectAuthState } from '../store/app.states';
import { Observable } from 'rxjs';
import { ListSports, DeleteSports } from '../store/actions/auth.action';

@Component({
  selector: 'app-listing-page',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})

export class SportsComponent implements OnInit {

  public loginData: Array<any> = [];
  public sportsData = [];
  public userLoginStatus = false;
  public tableTitle = 'Sports Club';
  getState: Observable<any>;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private store: Store<AppState>,
              private service: SportsListService ) {
    this.getState = this.store.select(selectAuthState);
  }

  ngOnInit(): void {
    this.store.dispatch(new ListSports());
    this.store.subscribe(data => {
      if (data && data.sport && data.sport.sports) {
        this.sportsData = data.sport.sports;
      }
    });

    // this.service.getSports().subscribe(data => {
    //   this.sportsData = data;
    // });

    this.activatedRoute.params.subscribe(param => {
      this.userLoginStatus = param.term;
    },
      (error) => {
        console.log('Error in Fetch Route Parameter');
      }
    );
  }

  updateSports(id: any): void {
    this.router.navigate(['/addsports', id]);
  }

  deleteSports(id: any): void {
    if (window.confirm('Are you sure to delete sport')) {
      this.store.dispatch(new DeleteSports(id));
      this.store.dispatch(new ListSports());
    } else {
    }
  }

  addSports(): void {
    this.store.dispatch(new ListSports());
    this.store.subscribe(data => {
      if (data && data.sport && data.sport.sports) {
        this.sportsData = data.sport.sports;
      }
    });
    this.router.navigate(['/addsports']);
  }

}
