import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { LoginService } from '../Service/login.service';
import { Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnChanges {
  islogin: boolean = true;
  issignup: boolean = false;

  constructor(public loginservice: LoginService, private router: Router ,private cdr: ChangeDetectorRef) { }

  ngOnInit() {
 
    this.islogin = true;
    this.issignup = false;
  }

  ngOnChanges(changes: SimpleChanges): void {
   
  }

  gotosign() {
    this.islogin = false;
    this.issignup = true;
    this.cdr.detectChanges(); // Trigger change detection manually
    this.router.navigate(['/signup']);
  }

  gotologin() {
    this.islogin = true;
    this.issignup = false;
    this.cdr.detectChanges(); // Trigger change detection manually
    this.router.navigate(['/']);
  }
  logout(){
    this.loginservice.logout();
    this.cdr.detectChanges(); // Trigger change detection manually
    this.router.navigate(['/']);
  }
}
