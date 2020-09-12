import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState, selectAuthState } from '../../store/app.states';
import { ListSports, AddSports, UpdateSports } from 'src/app/store/actions/sport.action';
import { SportsListService } from 'src/app/service/sports.service';
@Component({
  selector: 'app-add-sports',
  templateUrl: './addsports.component.html',
  styleUrls: ['./addsports.component.css']
})
export class AddSportsComponent implements OnInit {

  public sportsForm: any;
  public sportsData;
  public sportsId: number;
  public showUpdateForm: boolean;
  public addSportTitle = 'Add Sport';
  public updateSportTitle = 'Update Sport';
  getState: Observable<any>;

  constructor(private fb: FormBuilder,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private store: Store<AppState>,
              public sportsListService: SportsListService) {
    this.getState = this.store.select(selectAuthState);
  }

  ngOnInit(): void {
    this.sportsForm = this.fb.group({
      id: [0, [Validators.required]],
      sportsTitle: ['', [Validators.required]],
      category: ['', [Validators.required]],
      description: ['', [Validators.required, Validators.maxLength]]
    });

    this.activatedRoute.params.subscribe(param => {
      this.sportsId = param.id;
    });

    this.getSports();
    this.isRegisterFormToUpdate();
  }

  getSports(): void {
    this.store.dispatch(new ListSports());
    this.store.subscribe(data => {
      if (data && data.sport) {
        this.sportsData = data.sport.sport;
      }
    });
  }

  onSubmit(): void {
    this.store.dispatch(new AddSports(this.sportsForm.value));
    this.store.dispatch(new ListSports());
    this.router.navigateByUrl('/list');
  }

  isRegisterFormToUpdate(): void {
    if (this.sportsId === undefined) {
      this.showUpdateForm = false;
    } else {
      this.showUpdateForm = true;
    }
  }

  onUpdateSport(): void {
    this.store.dispatch(new UpdateSports(this.sportsForm.value));
    this.store.dispatch(new ListSports());
    window.alert('updated successfully');
    this.router.navigateByUrl('/list');
  }
}
