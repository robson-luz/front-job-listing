import { environment } from './../../environments/environment';
import { Job } from './model/jobs.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobsService {
  // criar variavel da url da api
  // http://localhost:3004/jobs

  URL = `${environment.jobsAPI}/jobs`;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) { }

  // observable(substitui as antigas promises)
  public listJobs(): Observable<Job> {
    return this.http.get<Job>(this.URL);
  }
}
