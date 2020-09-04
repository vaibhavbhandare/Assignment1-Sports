import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SportsListService } from '../service/sports-list.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerForm: any;
  public SportsData: any;

  constructor(private fb: FormBuilder,
              private sportsListService: SportsListService
  ) {

    this.registerForm = this.fb.group({
      username: ['Enter Name', [Validators.required]],
      passward: ['Enter Passward', [Validators.required]]
    });

  }

  ngOnInit(): void {
    // this.registerForm = this.fb.group({
    //   id: [0, [Validators.required]],
    //   sportsTitle: ['Enter Sport Name', [Validators.required]],
    //   category: ['Individual or Team Player', [Validators.required]],
    //   descreption: ['Enter Descreption', [Validators.required]]
    // });

  }

  onSubmit(value): void {
    console.log(value);

    const ab = { username: 'admin1', passward: 'admin1'};

    this.sportsListService.postSportsData(value).subscribe(data => {
      this.SportsData = data.json();
      console.log(this.SportsData);
    });

  }


}
