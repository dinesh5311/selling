import { Injectable } from '@angular/core';
import { user } from '../Model/user.model';
import { ActivatedRoute, Routes } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  userLoggedIn:boolean = false;
  


  users:user[]= [{email:'manik', password:"Manik@1998"}, 
    {email:'saksham', password:'Saksham@2000'}
  ]

  constructor(private route: ActivatedRoute) { }

  logincheck(email:string, password:string){
    for (const user of this.users) {
      if (user.email === email && user.password === password) {
        this.userLoggedIn = true;
      }
    }

  }

  logout(){
  
        this.userLoggedIn = false;
  }

}