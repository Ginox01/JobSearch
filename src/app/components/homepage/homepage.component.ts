import { Component, OnInit } from '@angular/core';
import { faSquarePlus } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  faSquarePlus = faSquarePlus;
  showLocation = true;
  constructor() {}

  ngOnInit(): void {}

  showLocationInput() {
    this.showLocation = !this.showLocation;
  }
}
