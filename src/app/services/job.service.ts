import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class JobService {
  constructor(private http: HttpClient) {}

  declare IDJob: string;
  declare company: any;

  getJobs(category = '', level = '', location = '', page: string) {
    return this.http.get(
      `https://www.themuse.com/api/public/jobs?${category}${level}${location}${page}`
    );
  }

  transferIDJob(id: string) {
    this.IDJob = id;
    return this.IDJob;
  }

  getIDJob() {
    return this.IDJob;
  }

  getSingleJob(id: string) {
    return this.http.get(
      `https://www.themuse.com/api/public/jobs/${this.IDJob}`
    );
  }

  fetchCompany(id: string) {
    return this.http.get('https://www.themuse.com/api/public/companies/' + id);
  }

  passCompany(company: any) {
    this.company = company;
    return this.company;
  }

  getCompany() {
    return this.company;
  }
}
