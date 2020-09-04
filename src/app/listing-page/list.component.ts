import { Component, OnInit } from '@angular/core';
import { SportsListService } from '../service/sports.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listing-page',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [SportsListService]
})
export class ListingPageComponent implements OnInit {

  public loginData: Array<any> = [];
  public sportsData: Array<any> = [];

  constructor(private sportsListService: SportsListService,
              private router: Router) {
     this.sportsListService.getSports().subscribe(data => {
     this.sportsData = data;
    });
  }

  ngOnInit(): void {

  }

  viewSports(value): void {

  }

  updateSports(id): void {
    this.router.navigate(['/addsports', id]);
  }

  deleteSports(id): void {
    this.sportsListService.deleteSportsById(id).subscribe(getdata => {
      this.sportsData = this.sportsData.filter(sport => sport.id !== id);
    });
  }

  addNewSports(): void {
     this.router.navigate(['/addsports']);
  }

}
