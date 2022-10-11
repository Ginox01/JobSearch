import { JobService } from './../../services/job.service';
import { Component, OnInit , AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css'],
})
export class CompanyComponent implements OnInit , AfterViewInit {
  company = this.service.getCompany();
  constructor(private service: JobService) {}

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    if(this.company != undefined){
      this.displayContent()
    }

  }

  displayContent(){
    const wrapper = document.getElementById('wrap-description');
    wrapper!.style.color = "darkblue";
    wrapper!.style.padding = "10px";
    wrapper!.innerHTML = this.company.description
  }

}
