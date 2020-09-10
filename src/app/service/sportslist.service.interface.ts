import { Observable } from 'rxjs';

export interface ISportsList
{
    getSports(): Observable<any>;

    addSport(sport: any): Observable<any>;

    deleteSportsById(id: any): Observable<any>;

    updateSport(sport: any): Observable<any>;

    getLoginCheck(): Observable<any>;

    addLogin(userLogin: any): Observable<any>;
}
