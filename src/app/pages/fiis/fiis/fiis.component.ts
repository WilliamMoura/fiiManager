import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fiis',
  templateUrl: './fiis.component.html',
  styleUrls: ['./fiis.component.sass']
})
export class FiisComponent implements OnInit {


  countries: any[];
  page = 1;
  pageSize = 4;
  collectionSize = 0;

  constructor() { }

  ngOnInit(): void {
  }

  refreshCountries() {
    this.countries = [];
  }

}
