import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { tap, map, switchMap, catchError } from 'rxjs/operators';
import {
    AuthActionTypes,
    LogIn, LogInSuccess, LogInFailure,
} from '../actions/auth.action';
import { SportsListService } from 'src/app/service/sports.service';

@Injectable()

export class AuthEffects {

    constructor(
        private actions: Actions,
        private router: Router,
        private sportsListService: SportsListService
    ) { }

    // effects go here
    @Effect()
    LogIn: Observable<any> = this.actions.pipe(
        ofType(AuthActionTypes.LOGIN)).pipe(
            map((action: LogIn) => action.payload)).pipe(switchMap(payload => {
                return this.sportsListService.logIn(payload.username, payload.password).pipe(
                    map((user) => {
                        console.log(user);
                        return new LogInSuccess({ username: payload.username, password: payload.password });
                    })).pipe(catchError((error) => {
                        console.log(error);
                        return of(new LogInFailure({ error: 'error' }));
                    }));
    }));

    @Effect({ dispatch: false })
    LogInSuccess: Observable<any> = this.actions.pipe(
        ofType(AuthActionTypes.LOGIN_SUCCESS),
        tap((user) => {
            localStorage.setItem('token', user.payload.username);
            this.router.navigate(['/list', { term: true}]);
        })
    );

    @Effect({ dispatch: false })
    LogInFailure: Observable<any> = this.actions.pipe(
        ofType(AuthActionTypes.LOGIN_FAILURE),
        tap((user) => {
        alert('Please Enter Valid User Name and Password');
        })
    );
}
