import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SportsListService } from '../service/sports-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-sports',
  templateUrl: './add-sports.component.html',
  styleUrls: ['./add-sports.component.css']
})
export class AddSportsComponent implements OnInit {

  public sportsForm: any;
  public sportsData: Array<any>;

  constructor(private fb: FormBuilder,
              private sportsListService: SportsListService,
              private router: Router) {

    this.sportsForm = this.fb.group({
      id: [0, [Validators.required]],
      sportsTitle: ['Enter Sport Name', [Validators.required]],
      category: ['Individual or Team Player', [Validators.required]],
      descreption: ['Enter Descreption', [Validators.required]]
    });

    this.sportsListService.getSportsList().subscribe(data => {
      this.sportsData = data;
      console.log(this.sportsData);
    });
  }

  ngOnInit(): void {

  }



  onSubmit(value): void {
    this.sportsListService.postSportsList(value).subscribe(data => {
      this.sportsData = data;
      alert('Sports Added Successfully');
    });
    this.router.navigate(['/list']);
    console.log(this.sportsData);
    console.log(value);
  }
}
