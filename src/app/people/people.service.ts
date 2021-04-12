import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { People } from './model/people.model';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  URL = `${environment.peopleAPI}/people`;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  public listPeople(): Observable<People> {
    return this.http.get<People>(this.URL);
  }
}
