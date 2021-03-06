import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ISportsList } from './sports.service.interface';
@Injectable({
  providedIn: 'root'
})

export class SportsListService implements ISportsList {

  public baseRefUrl = environment.baseRefUrl;
  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) { }

  getSports(): Observable<any> {
    return this.http.get(`${this.baseRefUrl}/` + 'data', this.httpOptions).pipe(catchError(this.handleError));
  }

  addSport(sport: any): Observable<any> {
    return this.http.post(`${this.baseRefUrl}/` + 'data', sport,
     this.httpOptions).pipe(catchError(this.handleError));
  }

  deleteSportsById(id: any): Observable<any> {
    return this.http.delete(`${this.baseRefUrl}/` + 'data/' + id,
     this.httpOptions).pipe(catchError(this.handleError));
  }

  updateSport(sport: any): Observable<any> {
    return this.http.put(`${this.baseRefUrl}/` + 'data/' + sport.id,
    JSON.stringify(sport), this.httpOptions).pipe(catchError(this.handleError));
  }

  getLoginCheck(user: any): Observable<any> {
    const url = encodeURI('login?username=' + user.username + '&password=' + user.password);
    return this.http.get(`${this.baseRefUrl}/` + url, this.httpOptions).pipe(catchError(this.handleError));
  }

  addLogin(userLogin: any): Observable<any> {
    return this.http.post(`${this.baseRefUrl}/` + 'login', userLogin, this.httpOptions).pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
