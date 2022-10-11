import { JobService } from './../../services/job.service';
import { Component, OnInit } from '@angular/core';
import { faSquarePlus } from '@fortawesome/free-regular-svg-icons';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { switchMap, map, of, from } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  faSquarePlus = faSquarePlus;
  showLocation = false;
  showResult = false;

  declare jobs: any[];
  declare form: FormGroup;
  declare company: any;

  declare numPage$: string;
  declare totPage$: string;
  declare totalJob$: string;

  constructor(
    private service: JobService,
    private fb: FormBuilder,
    private route: Router
  ) {
    this.form = this.fb.group({
      page: ['', Validators.required],
      category: ['', Validators.required],
      entryLevel: [],
    });
  }

  ngOnInit(): void {}

  showLocationInput() {
    this.showLocation = !this.showLocation;
  }

  searchJob() {
    let page = '&page=' + this.form.controls['page'].value;
    let entryLevel = this.form.controls['entryLevel'].value;

    entryLevel == null
      ? (entryLevel = '')
      : (entryLevel = this.form.controls['entryLevel'].value);

    let radios: any = document.getElementsByName('flexRadioDefault');
    let location;

    for (let x = 0; x < radios.length; x++) {
      if (radios[x].checked == true) {
        location = radios[x].value;
      }
    }

    let errorMessage = document.getElementById('error-message');
    let result = document.getElementById('result');

    this.service
      .getJobs(this.form.controls['category'].value, entryLevel, location, page)
      .subscribe({
        next: (response) => {
          this.showResult = true;
          errorMessage!.style.display = 'none';
          this.displayResult(response);
          this.displayTable(response);
        },
        error: (err) => {
          this.showResult = false;
          errorMessage!.style.display = 'block';
          errorMessage!.innerHTML = err.error.error;
        },
      });
  }

  displayResult(response: any) {
    this.numPage$ = response.page;
    this.totPage$ = response.page_count;
    this.totalJob$ = response.total;
  }

  displayTable(response: any) {
    of(response)
      .pipe(map((ele: any) => ele.results))
      .subscribe((data: any) => (this.jobs = data));
  }

  goToDetailPage(id: string) {
    this.service.transferIDJob(id);
    this.route.navigateByUrl('home/job/' + id);
  }

  getCompany(id: string) {
    this.service.fetchCompany(id).subscribe((data: any) => {
      this.company = data;
      this.service.passCompany(this.company);
      this.route.navigateByUrl('home/company/' + id);
    });
  }
}
