import { Component, OnInit } from '@angular/core';
// import {} from '../Model/user.model'
import { user } from '../Model/user.model';
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

  constructor(private fb: FormBuilder,
    private loginservice: LoginService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }



  ngOnInit() {
    this.login = this.fb.group({
      exampleInputEmail1: ['',Validators.required],
      exampleInputPassword1: ['',Validators.required],   
    })
  }

  loginSubmit(){
    if(this.login.valid){
      const email = this.login.get("exampleInputEmail1");
      const password = this.login.get("exampleInputPassword1")
      debugger;
      console.log(email, password);
      this.loginservice.logincheck(email?.value, password?.value);
      if(this.loginservice.userLoggedIn === true){
        this.router.navigate(['/home']);
      }
      
      
    }
  }
}
