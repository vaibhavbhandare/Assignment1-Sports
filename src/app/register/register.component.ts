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

  }

  onSubmit(value): void {
    this.sportsListService.postLoginData(value).subscribe(data => {
      this.SportsData = data.json();
    });
  }

}
