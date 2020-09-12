import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import {
    LIST_SPORTS, ListSports,
    ListDataSuccess, ADD_SPORTS, AddSportsSuccess, AddSports, DeleteSportSuccess,
    DELETE_SPORTS, DeleteSports, UPDATE_SPORTS, UpdateSports, UpdateSportsSuccess,
} from '../actions/sport.action';

import { SportsListService } from '../../service/sports.service';

@Injectable()

export class SportEffects {

    constructor(
        private actions: Actions,
        private router: Router,
        private sportsListService: SportsListService
    ) { }

    // effects go here
    @Effect({ dispatch: true })
    ListSports: Observable<any> = this.actions.pipe(
        ofType(LIST_SPORTS),
        map((action: ListSports) => action),
        mergeMap(payload => {
            return this.sportsListService.getSports().pipe(
                map((data) =>
                    new ListDataSuccess(data)));
        }));

    @Effect({ dispatch: true })
    AddSports: Observable<any> = this.actions.pipe(
        ofType(ADD_SPORTS),
        map((action: AddSports) => action.payload),
        mergeMap(payload => {
            return this.sportsListService.addSport(payload).pipe(
                map((data) => {
                    if (data) {
                        window.alert('Sport Added Successfully');
                        return new AddSportsSuccess(data);
                    }
                }));
        }));

    @Effect({ dispatch: true })
    DeleteSports: Observable<any> = this.actions.pipe(
        ofType(DELETE_SPORTS),
        map((action: DeleteSports) => action.payload),
        mergeMap(payload => {
            return this.sportsListService.deleteSportsById(payload).pipe(
                map((data) => {
                    if (data) {
                        window.alert('Sport Deleted Successfully');
                        return new DeleteSportSuccess();
                    }
                }));
        }));

    @Effect({ dispatch: true })
    UpdateSports: Observable<any> = this.actions.pipe(
        ofType(UPDATE_SPORTS),
        map((action: UpdateSports) => action.payload),
        mergeMap(payload => {
            return this.sportsListService.updateSport(payload).pipe(
                map((data) => {
                    if (data) {
                         window.alert('Sport Updated Successfully');
                         return new UpdateSportsSuccess(data);
                    }
                }));
        }));
}
