import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SportsListService } from '../../service/sports.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  public registerForm: any;
  public SportsData: any;

  constructor(private fb: FormBuilder,
              private sportsService: SportsListService
  ) {

    this.registerForm = this.fb.group({
      username: ['Please Enter Name', [Validators.required]],
      password: ['Please Enter Password', [Validators.required]]
    });
  }

  onSubmit(register: any): void {
    this.sportsService.addLogin(register).subscribe(users => {
      alert('User Added Successfully');
      this.SportsData = users.json();
    },
      (error) => {
        console.log('Error in Post of Login API');
      }
    );
  }
}
