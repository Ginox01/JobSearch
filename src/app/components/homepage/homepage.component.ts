import { JobService } from './../../services/job.service';
import { Component, OnInit } from '@angular/core';
import { faSquarePlus } from '@fortawesome/free-regular-svg-icons';
import {FormGroup , FormBuilder , Validators} from '@angular/forms'

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  faSquarePlus = faSquarePlus;
  showLocation = false

  declare jobs:any;
  declare form:FormGroup;

  constructor(
    private service:JobService,
    private fb:FormBuilder
    ) {
      this.form = this.fb.group({
        'page':["",Validators.required],
        'category':["",Validators.required],
        'entryLevel':[],
      })
    }

  ngOnInit(): void {}

  showLocationInput() {
    this.showLocation = !this.showLocation;
  }

  searchJob(){
    let page = '&page=' + this.form.controls['page'].value;
    let entryLevel = this.form.controls['entryLevel'].value;

    entryLevel == null ? entryLevel = "" : entryLevel = this.form.controls['entryLevel'].value



    let radios:any = document.getElementsByName('flexRadioDefault');
    let location;

    for(let x=0 ; x < radios.length ; x++){
      if(radios[x].checked == true){
        location = radios[x].value
      }
    }
    console.log(location)

    this.service.getJob(
      this.form.controls['category'].value,
      entryLevel,
      location,
      page
    )
  }
}
