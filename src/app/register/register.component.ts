import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SportsListService } from '../service/sports.service';

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
      username: ['Please Enter Name', [Validators.required]],
      passward: ['Please Enter Passward', [Validators.required]]
    });
  }

  ngOnInit(): void {

  }

  onSubmit(value): void {
    this.sportsListService.addLogin(value).subscribe(users => {
      this.SportsData = users.json();
    });
  }

}
