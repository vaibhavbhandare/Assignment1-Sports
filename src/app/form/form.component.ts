import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SportsListService } from '../service/sports.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.states';
import { LogIn } from '../store/actions/auth.action';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public loginForm;
  public isLogin: boolean;

  constructor(private fb: FormBuilder,
              private sportsService: SportsListService,
              private router: Router,
              private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['Please Enter Name', [Validators.required]],
      password: ['Please Enter Password', [Validators.required]]
    });
  }

  onSubmit(value): void {
    this.sportsService.getLoginCheck().subscribe(checklogin => {
      if (value && checklogin) {
        const login = checklogin;
        for (let i = 0; i <= login.length - 1; i++) {
          if (login[i].username === value.username) {
            this.isLogin = true;
            this.router.navigate(['/list', { term: true }]);
            alert(`${value.username} Login Successfully`);
            break;
          } else {
            this.isLogin = false;
          }
        }
      }
      if (this.isLogin === false) {
        alert('Please Enter Valid User Name and Password');
      }
    },
      (error) => {
        console.log('Error in Fetching Login API');
      }
    );
    // const payload = {
    //   username: value.username,
    //   password: value.password
    // };
    // this.store.dispatch(new LogIn(payload));
  }
}
