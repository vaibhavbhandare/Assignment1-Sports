import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ISportsList } from './sports.service.interface';

@Injectable({
    providedIn: 'root'
})

export class SportsListService implements ISportsList {
    handleError(error: HttpErrorResponse): Observable<never> {
        throw new Error('Method not implemented.');
    }

    addSport(sport: any): Observable<any> {
        return of([
            {
                id: '4',
                sportsTitle: 'Football',
                description: 'is an ancient martial arts style of fighting',
                category: 'Team Sports'
            }]);
    }

    deleteSportsById(id: any): Observable<any> {
        return of([
            {
                id: '1',
                sportsTitle: 'Football',
                description: 'is an ancient martial arts style of fighting',
                category: 'Team Sports'
            }]);
    }

    updateSport(sport: any): Observable<any> {
        return of([
            {
                id: '1',
                sportsTitle: 'wrestling and martial arts',
                description: 'is an ancient martial arts style of fighting',
                category: 'Dual Sports'
            },
            {
                id: '2',
                sportsTitle: 'martial arts',
                description: 'is an ancient martial arts style of fighting',
                category: 'Dual Sports'
            },
            {
                id: '3',
                sportsTitle: 'cricket',
                description: 'This is favorite ',
                category: 'Team Sports'
            }
        ]);
    }

    getLoginCheck(user: any): Observable<any> {
        return of([
            {
                id: '1',
                username: 'admin',
                password: 'admin'
            },
            {
                username: 'admin1',
                password: 'admin1',
                id: 'Pwns4OZ'
            }
        ]);
    }

    addLogin(userLogin: any): Observable<any> {
        return of([
            {
                id: '3',
                username: 'admin5',
                password: 'admin5'
            }
        ]);
    }

    getSports(): Observable<any> {
        return of([
            {
                id: '1',
                sportsTitle: 'wrestling and martial arts',
                description: 'is an ancient martial arts style of fighting',
                category: 'Dual Sports'
            },
            {
                id: '2',
                sportsTitle: 'martial arts',
                description: 'is an ancient martial arts style of fighting',
                category: 'Dual Sports'
            },
            {
                id: '3',
                sportsTitle: 'cricket',
                description: 'This is favorite ',
                category: 'Team Sports'
            }
        ]);
    }
}
