import { JobService } from './../../services/job.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css'],
})
export class CompanyComponent implements OnInit {
  company = this.service.getCompany();

  constructor(private service: JobService) {}

  ngOnInit(): void {
    console.log(this.company);
  }
}
