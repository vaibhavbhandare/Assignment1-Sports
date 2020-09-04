import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SportsListService {

  public status: any;
  public baseRefUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getSports(): Observable<any> {
    return this.http.get(`${this.baseRefUrl}/` + 'data');
  }

  addSport(sport: any): Observable<any> {
    return this.http.post(`${this.baseRefUrl}/` + 'data', sport);
  }

  deleteSportsById(id): Observable<any> {
    return this.http.delete(`${this.baseRefUrl}/` + 'data/' + id);
  }

  updateSport(sport: any): Observable<any> {
    return this.http.put(`${this.baseRefUrl}/` + 'data/' + sport.id, sport);
  }

  getLoginCheck(): Observable<any> {
    return this.http.get(`${this.baseRefUrl}/` + 'login');
  }

  addLogin(userLogin: any): Observable<any> {
    return this.http.post(`${this.baseRefUrl}/` + 'login', userLogin);
  }

}
