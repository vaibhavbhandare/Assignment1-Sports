import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SportsListService } from '../../service/sports.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState, selectAuthState } from '../../store/app.states';
import { ListSports, AddSports, UpdateSports } from 'src/app/store/actions/auth.action';
@Component({
  selector: 'app-add-sports',
  templateUrl: './addsports.component.html',
  styleUrls: ['./addsports.component.css']
})
export class AddSportsComponent implements OnInit {

  public sportsForm: any;
  public sportsData: Array<any>;
  public sportsId: number;
  public showUpdateForm: boolean;
  getState: Observable<any>;

  constructor(private fb: FormBuilder,
              private sportsService: SportsListService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private store: Store<AppState>) {

    this.sportsForm = this.fb.group({
      id: [0, [Validators.required]],
      sportsTitle: ['Enter Sport Name', [Validators.required]],
      category: ['Individual or Team Player', [Validators.required]],
      description: ['Enter Description', [Validators.required]]
    });

    this.activatedRoute.params.subscribe(param => {
      this.sportsId = param.id;
    });

    this.getState = this.store.select(selectAuthState);
  }

  ngOnInit(): void {
    this.getSports();
    this.isRegisterFormToUpdate();
  }

  getSports(): void {
    this.store.dispatch(new ListSports());
    this.store.subscribe(data => {
      this.sportsData = data.sport.sports;
    });
  }

  onSubmit(sport: any): void {
    this.store.dispatch(new AddSports(sport));
    this.store.dispatch(new ListSports());
    this.router.navigate(['/list', { term: true}]);
  }

  isRegisterFormToUpdate(): void {
    if (this.sportsId === undefined) {
      this.showUpdateForm = false;
    } else {
      this.showUpdateForm = true;
    }
  }

  onUpdateSport(sport: any): void {
    this.store.dispatch(new UpdateSports(sport));
    this.store.dispatch(new ListSports());
    this.router.navigate(['/list', { term: true}]);
  }

  openList(): void {
    this.router.navigate(['/list', { term: true}]);
  }
}
