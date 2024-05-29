import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../Service/login.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private loginservice: LoginService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    if (this.loginservice.isLoggedIn()) {
      this.router.navigate(['/home']);
    }
    
    this.login = this.fb.group({
      exampleInputEmail1: ['', Validators.required],
      exampleInputPassword1: ['', Validators.required],
    });
  }

  loginSubmit() {
    if (this.login.valid) {
      const email = this.login.get("exampleInputEmail1")?.value;
      const password = this.login.get("exampleInputPassword1")?.value;

      this.loginservice.logincheck(email, password).subscribe(
        () => {
          if (this.loginservice.userLoggedIn$) {
            this.router.navigate(['/home']);
          }
        },
        error => {
          console.error('Login failed', error);
        }
      );
    }
  }
}
