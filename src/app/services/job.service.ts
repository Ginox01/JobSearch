import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class JobService {
  constructor(private http: HttpClient) {}

  declare IDJob: string;

  getJobs(category = '', level = '', location = '', page: string) {
    return this.http.get(
      `https://www.themuse.com/api/public/jobs?${category}${level}${location}${page}`
    );
  }

  getIDJob(id: string) {
    this.IDJob = id;
    return this.IDJob;
  }

  getSingleJob(id: string) {
    let api = this.http.get(
      `https://www.themuse.com/api/public/jobs/${this.IDJob}`
    );
    console.log(api);
  }
}
