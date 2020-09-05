import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SportsListService } from '../../service/sports.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.states';
import { AuthActionTypes, SignUpSuccess, SignUp } from '../../store/actions/auth.action';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  public registerForm: any;
  public SportsData: any;

  constructor(private fb: FormBuilder,
              private sportsService: SportsListService,
              private store: Store<AppState>
  ) {

    this.registerForm = this.fb.group({
      username: ['Please Enter Name', [Validators.required]],
      password: ['Please Enter Password', [Validators.required]]
    });
  }

  onSubmit(register: any): void {
    const payload = {
      username: register.username,
      password: register.password
    };
    this.store.dispatch(new SignUp(payload));
  }
}
