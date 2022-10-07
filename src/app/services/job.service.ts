import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private http:HttpClient) { }

  getJob(category="",level="",location="",page:string){
    let api = this.http.get(`https://www.themuse.com/api/public/jobs?${category}${level}${location}${page}`);
    let url = `https://www.themuse.com/api/public/jobs?${category}${level}${location}${page}`;
    // https://www.themuse.com/api/public/jobs?category=Accounting&level=Entry%20Level&location=Aba%2C%20Nigeria&page=1
    console.log(url);
    return api
  }

}
