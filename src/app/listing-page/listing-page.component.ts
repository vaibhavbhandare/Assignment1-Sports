import { Component, OnInit, AfterViewInit } from '@angular/core';
import { SportsListService } from '../service/sports-list.service';

@Component({
  selector: 'app-listing-page',
  templateUrl: './listing-page.component.html',
  styleUrls: ['./listing-page.component.css'],
  providers: [SportsListService]
})
export class ListingPageComponent implements OnInit, AfterViewInit {

  public loginData: Array<any> = [];
  public sportsData: Array<any> = [];

  constructor(private sportsListService: SportsListService) {
     this.sportsListService.getSportsList().subscribe(data => {
      this.sportsData = data;
      console.log(this.sportsData);
    });
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {

  }

  viewSports(value): void {

  }

  updateSports(value): void {

  }

  deleteSports(value): void {

  }

}
