import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
  public addSportTitle = 'Add Sport';
  public updateSportTitle = 'Update Sport';
  getState: Observable<any>;

  constructor(private fb: FormBuilder,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private store: Store<AppState>) {

    this.sportsForm = this.fb.group({
      id: [0, [Validators.required]],
      sportsTitle: ['', [Validators.required]],
      category: ['', [Validators.required]],
      description: ['', [Validators.required, Validators.maxLength]]
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
      if (data && data.sport && data.sport.sports) {
        this.sportsData = data.sport.sports;
      }
    });
  }

  onSubmit(sport: any): void {
    this.store.dispatch(new AddSports(sport));
    this.store.dispatch(new ListSports());
    window.alert('Sport Added Successfully');
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
