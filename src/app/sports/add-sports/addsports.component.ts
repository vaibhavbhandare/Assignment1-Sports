import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SportsListService } from '../../service/sports.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-sports',
  templateUrl: './addsports.component.html',
  styleUrls: ['./addsports.component.css']
})
export class AddSportsComponent implements OnInit {

  public sportsForm: any;
  public sportsData: Array<any>;
  public sportsId: number;
  public showUpdateForm: boolean;

  constructor(private fb: FormBuilder,
              private sportsService: SportsListService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {

    this.sportsForm = this.fb.group({
      id: [0, [Validators.required]],
      sportsTitle: ['Enter Sport Name', [Validators.required]],
      category: ['Individual or Team Player', [Validators.required]],
      description: ['Enter Description', [Validators.required]]
    });

    this.activatedRoute.params.subscribe(param => {
      this.sportsId = param.id;
    });

  }

  ngOnInit(): void {
    this.getSports();
    this.isRegisterFormToUpdate();
  }

  getSports(): void {
    this.sportsService.getSports().subscribe(data => {
      this.sportsData = data;
    },
    (error) => {
      console.log('Error in Fetching Sports Data');
    });
  }

  onSubmit(sport: any): void {
    this.sportsService.addSport(sport).subscribe(sports => {
      this.sportsData = sports;
      alert('Sport Added Successfully');
    });
    this.router.navigate(['/list', { term: true}]);
  }

  isRegisterFormToUpdate(): void {
    if (this.sportsId === undefined) {
      this.showUpdateForm = false;
    } else {
      this.showUpdateForm = true;
    }
  }

  onUpdateSport(sport: any): void {
     this.sportsService.updateSport(sport).subscribe(sports => {
        this.sportsData = sports;
        alert('Sport Updated Successfully');
     });
     this.router.navigate(['/list', { term: true}]);
  }

  openList(): void {
    this.router.navigate(['/list', { term: true}]);
  }
}
