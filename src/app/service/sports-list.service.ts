import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SportsListService {

  public status: any;
  public data = 'http://localhost:3000';
  // public login = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getSportsList(): Observable<any> {
    return this.http.get(`${this.data}/` + 'data');
  }

  postSportsList(value): Observable<any> {
    return this.http.post(`${this.data}/` + 'data', value);
  }


  deleteSportsData(id): Observable<any> {
    return this.http.delete(`${this.data}/` + 'data/' + id);
  }

  getLoginDetails(): Observable<any> {
    return this.http.get(`${this.data}/` + 'login');
  }

  postLoginData(value): Observable<any> {
    return this.http.post(`${this.data}/` + 'login', value);
  }

}
