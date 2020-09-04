import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SportsListService } from '../service/sports-list.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public loginForm;

  constructor(private fb: FormBuilder,
              private sportsListService: SportsListService,
              ) {

               }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      name: ['Enter Name', [Validators.required, Validators.minLength(4)]],
      passward: ['Enter Passward', [Validators.required, Validators.minLength(4)]]
    });
  }

  onSubmit(value): void {
    console.log(value);
  }

}
