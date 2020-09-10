import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ISportsList } from './sports.service.interface';

@Injectable({
    providedIn: 'root'
})
export class SportsListService implements ISportsList {

    addSport(sport: any): Observable<any> {
        throw new Error('Method not implemented.');
    }

    deleteSportsById(id: any): Observable<any> {
        throw new Error('Method not implemented.');
    }
    updateSport(sport: any): Observable<any> {
        throw new Error('Method not implemented.');
    }
    getLoginCheck(): Observable<any> {
        throw new Error('Method not implemented.');
    }
    addLogin(userLogin: any): Observable<any> {
        throw new Error('Method not implemented.');
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
