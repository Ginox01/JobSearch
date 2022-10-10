import { JobService } from './../../services/job.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css'],
})
export class DetailPageComponent implements OnInit, AfterViewInit {
  declare IDJob: string;
  declare job: any;

  constructor(private service: JobService) {
    this.IDJob = this.service.getIDJob();
    this.service.getSingleJob(this.IDJob).subscribe({
      next: (data) => {
        (this.job = data), this.displayContent();
      },
      error: () => {
        this.displayError();
      },
    });
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {}

  displayContent() {
    let wrapperContent = document.getElementById('wrap-content');
    if (this.job.contents == undefined) {
    } else {
      wrapperContent!.innerHTML = this.job.contents;
    }
  }

  displayError() {
    let wrapError = document.getElementById('wrap-error');
    wrapError!.innerHTML = `
    <div class="row d-flex justify-content-center">
    <div class="col-8 text-center">
      <h3 class="mt-5 mb-2">We are sorry but something has gone wrong</h3>
    </div>
  </div>
    `;
  }
}
