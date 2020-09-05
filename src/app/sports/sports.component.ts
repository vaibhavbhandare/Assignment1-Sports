import { Component, OnInit } from '@angular/core';
import { SportsListService } from '../service/sports.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listing-page',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css'],
  providers: [SportsListService]
})
export class SportsComponent implements OnInit {

  public loginData: Array<any> = [];
  public sportsData: Array<any> = [];
  public userLoginStatus = false;

  constructor(private sportsService: SportsListService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.sportsService.getSports().subscribe(data => {
      this.sportsData = data;
    },
      (error) => {
        console.log('Error In Fetch Sports API');
      }
    );
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(param => {
      this.userLoginStatus = param.term;
    },
      (error) => {
        console.log('Error in Fetch Route Parameter');
      }
    );
  }

  updateSports(id): void {
    this.router.navigate(['/addsports', id]);
  }

  deleteSports(id): void {
    this.sportsService.deleteSportsById(id).subscribe(getdata => {
      this.sportsData = this.sportsData.filter(sport => sport.id !== id);
    },
      (error) => {
        console.log('Error In Delete Sport From API');
      });
  }

  addSports(): void {
    this.router.navigate(['/addsports']);
  }

}
